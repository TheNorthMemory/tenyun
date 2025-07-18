/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 直播审核关键词信息 */
declare interface AuditKeyword {
  /** 关键词内容。 */
  Content: string;
  /** 关键词标签。可取值：Normal: 正常 ，Polity: 政治，Porn: 色情，Sexy：性感，Ad: 广告，Illegal: 违法，Abuse: 谩骂，Terror: 暴恐，Spam: 灌水，Moan:呻吟。 */
  Label: string;
}

/** 直播审核删除关键词结果详情。 */
declare interface AuditKeywordDeleteDetail {
  /** 关键词 Id。 */
  KeywordId?: string;
  /** 关键词内容。 */
  Content?: string;
  /** 是否删除成功。 */
  Deleted?: boolean;
  /** 如果删除失败，错误信息。 */
  Error?: string;
}

/** 直播审核关键词查询信息。 */
declare interface AuditKeywordInfo {
  /** 关键词 Id。 */
  KeywordId?: string;
  /** 关键词内容。 */
  Content?: string;
  /** 关键词标签。可取值：Normal: 正常 ，Polity: 政治，Porn: 色情，Sexy：性感，Ad: 广告，Illegal: 违法，Abuse: 谩骂，Terror: 暴恐，Spam: 灌水，Moan:呻吟。 */
  Label?: string;
  /** 创建时间。UTC 格式，例如：2018-11-29T19:00:00Z。注意：1. 北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示。 */
  CreateTime?: string;
}

/** 主备流详细信息。 */
declare interface BackupStreamDetailData {
  /** 推流域名。 */
  DomainName?: string;
  /** 推流路径。 */
  AppName?: string;
  /** UTC 格式，例如：2018-06-29T19:00:00Z。注意：和北京时间相差8小时。 */
  PublishTime?: string;
  /** 推流唯一标识。 */
  UpstreamSequence?: string;
  /** 推流来源。示例：直推流；拉流转推(1234)；注意：拉流转推来源括号中为拉流转推的任务 ID。 */
  SourceFrom?: string;
  /** 主备标识。当前流为主流：1，当前流为备流: 0。 */
  MasterFlag?: number;
}

/** 主备流分组信息。 */
declare interface BackupStreamGroupInfo {
  /** 流名称。 */
  StreamName?: string;
  /** 主备流信息。 */
  BackupList?: BackupStreamDetailData[];
  /** 是否对该流开启了择优调度。0 - 未开启。1 - 已开启。 */
  OptimalEnable?: number;
  /** 域名分组的分组名称。 */
  HostGroupName?: string;
}

/** 带宽信息 */
declare interface BandwidthInfo {
  /** 返回格式：使用UTC格式时间，例如：2019-01-08T10:00:00Z。注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/267/38543)。根据粒度会有不同程度的缩减。 */
  Time?: string;
  /** 带宽。 */
  Bandwidth?: number;
}

/** 批量操作域名相关接口，若其中个别域名操作失败将会跳过，相应的域名错误信息将统一汇总在此类型中 */
declare interface BatchDomainOperateErrors {
  /** 操作失败的域名。 */
  DomainName?: string;
  /** API3.0错误码。 */
  Code?: string;
  /** API3.0错误信息。 */
  Message?: string;
}

/** 海外分区直播带宽出参，分区信息 */
declare interface BillAreaInfo {
  /** 大区名称。 */
  Name: string;
  /** 国家或地区明细数据。 */
  Countrys: BillCountryInfo[];
}

/** 海外分区直播带宽出参国家带宽信息 */
declare interface BillCountryInfo {
  /** 国家名称 */
  Name?: string;
  /** 带宽明细数据信息。 */
  BandInfoList?: BillDataInfo[];
}

/** 带宽和流量信息。 */
declare interface BillDataInfo {
  /** 时间点，使用UTC格式时间，例如：2019-01-08T10:00:00Z。注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732)。 */
  Time: string;
  /** 带宽，单位是 Mbps。 */
  Bandwidth: number;
  /** 流量，单位是 MB。 */
  Flux: number;
  /** 峰值时间点，使用UTC格式时间，例如：2019-01-08T10:00:00Z。注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732)。原始数据为5分钟粒度，如果查询小时和天粒度数据，则返回对应粒度内的带宽峰值时间点。 */
  PeakTime: string;
}

/** 规则信息 */
declare interface CallBackRuleInfo {
  /** 规则创建时间。注：此字段为北京时间（UTC+8时区）。 */
  CreateTime?: string;
  /** 规则更新时间。注：此字段为北京时间（UTC+8时区）。 */
  UpdateTime?: string;
  /** 模板 ID。 */
  TemplateId?: number;
  /** 推流域名。 */
  DomainName?: string;
  /** 推流路径。 */
  AppName?: string;
}

/** 回调模板信息。 */
declare interface CallBackTemplateInfo {
  /** 模板 ID。 */
  TemplateId?: number;
  /** 模板名称。 */
  TemplateName?: string;
  /** 描述信息。 */
  Description?: string;
  /** 开播回调 URL。 */
  StreamBeginNotifyUrl?: string;
  /** 混流回调 URL。(参数已弃用)。 */
  StreamMixNotifyUrl?: string;
  /** 断流回调 URL。 */
  StreamEndNotifyUrl?: string;
  /** 录制文件回调 URL。 */
  RecordNotifyUrl?: string;
  /** 截图回调 URL。 */
  SnapshotNotifyUrl?: string;
  /** 鉴黄回调 URL。 */
  PornCensorshipNotifyUrl?: string;
  /** 回调的鉴权 key。 */
  CallbackKey?: string;
  /** 推流异常回调 URL。 */
  PushExceptionNotifyUrl?: string | null;
  /** 音频审核回调 URL。 */
  AudioAuditNotifyUrl?: string | null;
  /** 录制异常回调 URL。 */
  RecordExceptionNotifyUrl?: string;
  /** 录制异常回调级别，可选择：error: 错误。alarm: 告警。 */
  RecordExceptionLevels?: string[];
}

/** 回调事件信息 */
declare interface CallbackEventInfo {
  /** 事件时间。接口返回支持两种时间格式：1）YYYY-MM-DDThh:mm:ssZ：UTC时间格式，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732)2）yyyy-MM-dd HH:mm:ss：使用此格式时，默认代表北京时间。接口返回的时间格式和查询请求传入的时间格式一致。 */
  EventTime?: string;
  /** 事件类型。 */
  EventType?: number;
  /** 回调请求。 */
  Request?: string;
  /** 回调响应。 */
  Response?: string;
  /** 客户接口响应时间。接口返回支持两种时间格式：1）YYYY-MM-DDThh:mm:ssZ：UTC时间格式，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732)2）yyyy-MM-dd HH:mm:ss：使用此格式时，默认代表北京时间。接口返回的时间格式和查询请求传入的时间格式一致。 */
  ResponseTime?: string;
  /** 回调结果。 */
  ResultCode?: number;
  /** 流名称。 */
  StreamId?: string;
}

/** 导播台简略信息 */
declare interface CasterBriefInfo {
  /** 导播台ID */
  CasterId?: number;
  /** 导播台名称 */
  CasterName?: string;
  /** 导播台的描述 */
  Description?: string;
  /** 开始计费时间，值为unix时间戳 */
  StartBillingTime?: number;
  /** 结束计费时间，值为unix时间戳 */
  StopBillingTime?: number;
  /** 创建时间，值为unix时间戳 */
  CreateTime?: number;
  /** 导播台状态0：停止状态，无预监，无主监1：无预监，有主监2：有预监，无主监3：有预监，有主监 */
  Status?: number;
  /** 导播台的过期时间，值为-1或unix时间戳。当值为-1时，代表永不过期。当值为特定unix时间戳时，代表过期时间为对应的时间，导播台在该时间自动停止。 */
  ExpireTime?: number;
  /** 计费字段，该字段暂无作用 */
  FeeType?: number;
}

/** 导播台展示信息，包括使用的布局、水印、字幕、转场、音频等信息 */
declare interface CasterDisplayInfo {
  /** 布局Index。如果使用自定义布局，为自定义布局下标。如果使用单输入布局，如使用输入1，则LayoutIndexType=1， 且LayoutIndex=1，以此类推。 */
  LayoutIndex?: number;
  /** 使用的水印Index列表。注：当作为入参使用时，列表中的水印Index需要已经存在。 */
  MarkPicIndexList?: number[];
  /** 使用的文字水印Index列表。注：作为入参使用时，列表中的Index需要已经存在。 */
  MarkWordIndexList?: number[];
  /** 使用的转场类型。注：支持的转场类型可通过DescribeCasterTransitionTypes接口获取。 */
  TransitionType?: string;
  /** 使用的音频输入Index列表。注：当该字段非空时，表示使用布局中对应的输入源的视频，AudioIndexList中对应的输入源的音频。且这些输入源需已存在。 */
  AudioIndexList?: number[];
  /** 作为入参时，表示使用点播输入源，单画面输入时，点播文件是否从头开始播放。默认为0。有效值，0,1。0代表不从头播放1代表从头播放 */
  InputStartType?: number;
  /** LayoutIndex类型，默认值:0可选值[0,1]0:默认类型，代表普通布局1:单输入类型，代表单输入布局 */
  LayoutIndexType?: number;
}

/** 导播台信息 */
declare interface CasterInfo {
  /** 导播台ID */
  CasterId?: number;
  /** 导播台名称 */
  CasterName?: string;
  /** 导播台上一次启动pgm的时间，值为unix时间戳。 */
  StartLiveTime?: number;
  /** 导播台的描述 */
  Description?: string;
  /** 导播台创建时间，值为unix时间戳。 */
  CreateTime?: number;
  /** 导播台状态 0：停止状态，无预监，无主监1：无预监，有主监2：有预监，无主监3：有预监，有主监 */
  Status?: number;
  /** 导播台的过期时间戳。值为-1或unix时间戳。 默认值为-1。 当值为-1时，表示该导播台永不过期。 当值为正常unix时间戳时，导播台将在该时间过期。 导播台过期后，预监与主监画面将自动停止，转推自动停止。 点播、直播url将停止转拉，推流url需自行停止推流。 */
  ExpireTime?: number;
  /** 导播台延时播放时间，单位为秒。 */
  DelayTime?: number;
  /** 导播台主监输出的宽度，单位为像素。 */
  PgmWidth?: number;
  /** 导播台主监输出的高度，单位为像素。 */
  PgmHeight?: number;
  /** 导播台主监输出的帧率。 */
  PgmFps?: number;
  /** 导播台主监输出的码率，单位为kbps */
  PgmBitRate?: number;
  /** 导播台主监输出的音频码率，单位为kbps。 */
  PgmAudioBitRate?: number;
  /** 导播台的计费类型。 0 通用型 1 播单型。注： 本参数暂无作用。 */
  FeeType?: number;
  /** 录制模板id。 */
  RecordTemplateId?: number;
  /** 录制状态。 0：未录制 1：录制中 */
  RecordStatus?: number;
  /** 录制接口返回的taskid */
  RecordTaskId?: string;
}

/** 导播台输入信息参数 */
declare interface CasterInputInfo {
  /** 输入源Index。范围[1, 24] */
  InputIndex: number;
  /** 输入源类型。范围[0,1,2,3,4]。0：推流地址。1：点播文件地址。2：直播拉流地址。3：图片地址。4：webrtc协议推流地址。 */
  InputType?: number;
  /** 输入源的源地址。最大允许长度512。当InputType为0（推流地址），2（直播拉流地址），3（图片地址）,4（webrtc推流地址）这几种类型时，URL需填入该字段。 */
  InputUrl?: string;
  /** 输入源描述。最大允许长度256字符。 */
  Description?: string;
  /** 点播地址列表。仅当input type为1（点播地址）时，将一个或多个点播地址，填入该字段。单个地址最大允许长度512字符。最多允许同时填入5个地址。注：此时需保持InputUrl字段为空。 */
  InputUrls?: string[];
  /** 是否启用点播无限循环播放。注：当前该字段未生效，默认为True。 */
  LoopEnable?: boolean;
  /** 点播循环次数。允许值-1或正整数。当值为-1时，表示无限循环。当值为其他正整数时，表示循环对应次数。注：该字段暂未生效。 */
  LoopNumber?: number;
  /** 是否启用拉取到导播台。注：该字段默认强制为true。 */
  PullPushEnable?: boolean;
  /** 输入源音量百分比。默认为100。表示音量为原始大小。允许值[0,200]。 */
  Volume?: number;
}

/** 导播台布局参数。 */
declare interface CasterLayoutInfo {
  /** 布局Index。 */
  LayoutIndex: number;
  /** 布局模板Id。有效值[1，20，21，31，32，41]当使用布局模版时，无需LayoutParams参数，导播台将使用模版布局参数。 */
  LayoutTemplateId?: number;
  /** 布局绑定的输入列表。按布局LayerId从小到大，按顺序排列。已有两个画面的布局为例，输入1对应LayerId为1，输入2对应的LayerId为2，该字段应该填入"1|2"。 */
  InputIndexList?: string;
  /** 详细的布局参数列表。 */
  LayoutParams?: CasterLayoutParam[];
  /** 布局输出的宽度，单位为像素。默认为1280像素。注：该值仅在画中画布局，且未设置PgmWidth时生效。 */
  LayoutWidth?: number;
  /** 布局输出的高度，单位为像素。注：该参数仅在画中画布局，且未设置PgmHeight时生效。 */
  LayoutHeight?: number;
}

/** 导播台布局详细参数。 */
declare interface CasterLayoutParam {
  /** 布局层ID。在画面最终渲染时，将按ID从小到大的顺序，由下至上渲染。 */
  LayerId: number;
  /** 布局层宽度。单位为百分比，范围[0.0,1.0]，表示该层在最终画面上所占的比例值。 */
  LayerWidth: number;
  /** 布局层高度。单位为百分比，范围[0.0,1.0]， 表示该层在最终画面上所占的比例值。 */
  LayerHeight: number;
  /** 布局层位置x坐标。单位为百分比，范围[0.0,1.0]，表示该层在最终画面上x坐标所占的比例值。 */
  LayerLocationX: number;
  /** 布局层位置Y坐标。单位为百分比，范围[0.0,1.0]， 表示该层在最终画面Y坐标上所占的比例值。 */
  LayerLocationY: number;
  /** 是否启用抠图。 */
  UsePortraitSegment?: boolean;
}

/** 导播台水印信息。 */
declare interface CasterMarkPicInfo {
  /** 水印图片Index。 */
  MarkPicIndex: number;
  /** 注：该字段已废弃。 */
  MarkPicId?: number;
  /** 水印图片在输出时的宽度。当该值为大于1的整数值时，单位为像素，允许范围[1,1920]。 当该值为小于1大于0的小数时，单位为百分比，表示水印在最终画面上所占的比例值。 */
  MarkPicWidth?: number;
  /** 水印图片在输出时的高度。当该值为大于1的整数值时，单位为像素，允许范围[1,1080]。 当该值为小于1大于0的小数时，单位为百分比，表示水印在输出上所占的比例值。 */
  MarkPicHeight?: number;
  /** 水印图片在输出时的X轴坐标。当该值为大于1的整数值时，单位为像素，允许范围[1,1920]。 当该值为小于1大于0的小数时，单位为百分比，表示水印在最终画面上x坐标所占的比例值。 */
  MarkPicLocationX?: number;
  /** 水印图片在输出时的Y坐标。当该值为大于1的整数值时，单位为像素，允许范围[1,1080]。 当该值为小于1大于0的小数时，单位为百分比，表示水印在最终画面Y坐标上所占的比例值。 */
  MarkPicLocationY?: number;
  /** 水印地址。最大长度256字符，且url需以jpg、jpeg、png、bmp、gif后缀结尾。 */
  MarkPicUrl?: string;
  /** 水印描述。最大允许长度为256。 */
  Description?: string;
  /** 是否启用了等比例缩放。注：该字段仅做状态保存，无实际效果。 */
  IsEqualProportion?: boolean;
}

/** 导播台文字水印配置。 */
declare interface CasterMarkWordInfo {
  /** 文字水印Index。 */
  MarkWordIndex: number;
  /** 文字水印内容。 */
  MarkWordText?: string;
  /** 文字水印的字号。范围[16, 60] */
  MarkWordFontSize?: number;
  /** 文字水印的颜色，值为HEX颜色代码 */
  MarkWordFontColor?: string;
  /** 文字水印的字体类型。范围[1,2]。1. 宋体2. 黑体 */
  MarkWordFontType?: number;
  /** 文字水印的x坐标位置，单位百分比。范围[0.0, 1.0] */
  MarkWordLocationX?: number;
  /** 文字水印的Y坐标位置，单位百分比。范围[0.0, 1.0] */
  MarkWordLocationY?: number;
  /** 是否开启文字跑马灯功能。默认为false。 */
  MarkWordRollEnable?: boolean;
  /** 跑马灯文字显示一遍的时间，单位为秒。默认为5s。范围[5, 600]。 */
  MarkWordRollOnceTime?: number;
  /** 跑马灯文字的方向。默认值为0。范围[0,1]。0 从左到右1 从右到左 */
  MarkWordRollDirection?: number;
  /** 跑马灯文字显示的起始x坐标，单位百分比。范围[0.0, 1.0] */
  MarkWordRollStartLocationX?: number;
  /** 跑马灯文字显示的截止x坐标，单位百分比。范围[0.0, 1.0] */
  MarkWordRollEndLocationX?: number;
}

/** 导播台推流信息。当导播台主监启动后，系统将自动将主监推流到腾讯云和其他第三方平台。 */
declare interface CasterOutputInfo {
  /** 推流信息Index。当OutputType为1（表示推流到腾讯云直播）时，该值固定为0。范围[0,10]。 */
  OutputIndex: number;
  /** rtmp协议推流地址。最大允许长度512字符。 */
  OutputUrl?: string;
  /** 描述信息。 */
  Description?: string;
  /** 推流到腾讯云直播源站时，使用的流ID。仅当OutputType为1时生效。最大允许128字符。 */
  OutputStreamId?: string;
  /** 推流类型。范围[1,2]1. 推送到腾讯云直播源站。2. 推送到第三方源站。 */
  OutputType?: number;
  /** 推到腾讯云直播源站时，使用的域名。最大允许128字符，且域名需属于当前账号绑定的云直播推流域名。仅在OutputType为1时生效。 */
  OutputDomainName?: string;
  /** 推到腾讯云直播源站时，使用的AppName。最大允许64字符。仅在OutputType为1时生效。 */
  OutputAppName?: string;
  /** 推到腾讯云直播源站时需要添加的推流参数。最大允许长度256字符。仅在OutputType为1时生效。 */
  OutputParam?: string;
}

/** 下行播放统计指标 */
declare interface CdnPlayStatData {
  /** 时间点，使用UTC格式时间，例如：2019-01-08T10:00:00Z。注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732)。 */
  Time: string;
  /** 带宽，单位: Mbps。 */
  Bandwidth: number;
  /** 流量，单位: MB。 */
  Flux: number;
  /** 新增请求数。 */
  Request: number;
  /** 并发连接数。 */
  Online: number;
}

/** 证书信息。 */
declare interface CertInfo {
  /** 证书 ID。 */
  CertId?: number;
  /** 证书名称。 */
  CertName?: string;
  /** 描述信息。 */
  Description?: string;
  /** 创建时间，UTC 格式。注：此字段为北京时间（UTC+8时区）。 */
  CreateTime?: string;
  /** 证书内容。 */
  HttpsCrt?: string;
  /** 证书类型。0：用户添加证书，1：腾讯云托管证书。 */
  CertType?: number;
  /** 证书过期时间，UTC 格式。注：此字段为北京时间（UTC+8时区）。 */
  CertExpireTime?: string;
  /** 使用此证书的域名列表。 */
  DomainList?: string[];
}

/** 自适应码率转码模板，子模板，出入参数。 */
declare interface ChildTemplateInfo {
  /** 自适应码率转码模板，子模板Id。入参时候，填写此字段，表示更新子模板，否则是新增子模板。 */
  TemplateId?: number | null;
  /** 子模板名称。 */
  TemplateName?: string | null;
  /** 视频编码：h264/h265/origin，默认origin。origin: 保持原始编码格式。 */
  Vcodec?: string | null;
  /** 视频码率。范围：0kbps - 8000kbps。0为保持原始码率。注: 转码模板有码率唯一要求，最终保存的码率可能与输入码率有所差别。 */
  VideoBitrate?: number | null;
  /** 宽，默认0。范围[0-3000]。数值必须是2的倍数，0是原始宽度。 */
  Width?: number | null;
  /** 高，默认0。范围[0-3000]数值必须是2的倍数，0是原始高度。 */
  Height?: number | null;
  /** 帧率，默认0。范围0-60fps。 */
  Fps?: number | null;
  /** 关键帧间隔，单位：秒。默认原始的间隔。范围2-6。同一个父模板下面的所有子模板，gop必须相等且存在。 */
  Gop?: number | null;
  /** 是否保留视频，0：否，1：是。默认1。 */
  NeedVideo?: number | null;
  /** 是否保留音频，0：否，1：是。默认1。 */
  NeedAudio?: number | null;
  /** 当设置的码率>原始码率时，是否以原始码率为准。0：否， 1：是默认 0。 */
  BitrateToOrig?: number | null;
  /** 当设置的高度>原始高度时，是否以原始高度为准。0：否， 1：是默认 0。 */
  HeightToOrig?: number | null;
  /** 当设置的帧率>原始帧率时，是否以原始帧率为准。0：否， 1：是默认 0。 */
  FpsToOrig?: number | null;
  /** 是否以短边作为高度，0：否，1：是。默认0。 */
  ShortEdgeAsHeight?: number | null;
  /** HLS 分片类型。可选值：ts、fmp4。注：编码方式为 H.265 时生效。 */
  HlsContainerFormat?: string | null;
  /** 编码标签。可选值：hvc1、hev1。注：HLS 分片类型选择 fmp4 时生效。 */
  HlsMp4VideoCodecTag?: string | null;
}

/** 客户端ip播放汇总信息。 */
declare interface ClientIpPlaySumInfo {
  /** 客户端 IP，点分型。 */
  ClientIp?: string;
  /** 客户端所在省份。 */
  Province?: string;
  /** 总流量。 */
  TotalFlux?: number;
  /** 总请求数。 */
  TotalRequest?: number;
  /** 总失败请求数。 */
  TotalFailedRequest?: number;
  /** 客户端所在国家。 */
  CountryArea?: string;
}

/** 云端特效信息。 */
declare interface CloudEffectInfo {
  /** 云端特效 ID。 */
  Id?: string;
  /** 云端特效描述词。 */
  Prompt?: string;
  /** 云端特效标签。 */
  Flag?: string;
  /** 云端特效预览图片。 */
  PreviewImageUrl?: string;
  /** 云端特效类型。PGC : 官方精品特效。AIGC : AI生成的特效。UGC : 用户上传特效。 */
  Type?: string;
  /** 云端特效创建时间。 */
  CreateTime?: string;
  /** 云端特效更新时间。 */
  UpdateTime?: string;
}

/** 通用混流控制参数 */
declare interface CommonMixControlParams {
  /** 取值范围[0,1]。填1时，当参数中图层分辨率参数与视频实际分辨率不一致时，自动从视频中按图层设置的分辨率比例进行裁剪。 */
  UseMixCropCenter?: number;
  /** 取值范围[0,1]填1时，当InputStreamList中个数为1时，且OutputParams.OutputStreamType为1时，不执行取消操作，执行拷贝流操作 */
  AllowCopy?: number;
  /** 取值范围[0,1]填1时，透传原始流的sei */
  PassInputSei?: number;
  /** 取值范围[0,1]填1时，图片输入中的透明通道生效。 */
  UsePictureTransparent?: number;
}

/** 通用混流输入裁剪参数。 */
declare interface CommonMixCropParams {
  /** 裁剪的宽度。取值范围[0，2000]。 */
  CropWidth?: number;
  /** 裁剪的高度。取值范围[0，2000]。 */
  CropHeight?: number;
  /** 裁剪的起始X坐标。取值范围[0，2000]。 */
  CropStartLocationX?: number;
  /** 裁剪的起始Y坐标。取值范围[0，2000]。 */
  CropStartLocationY?: number;
}

/** 通用混流输入参数。 */
declare interface CommonMixInputParam {
  /** 输入流名称。80字节以内，仅含字母、数字以及下划线的字符串。当LayoutParams.InputType=0(音视频)/4(纯音频)/5(纯视频)时，该值为需要混流的流名称。当LayoutParams.InputType=2(图片)/3(画布)时，该值仅用作标识输入，可用类似Canvas1、Pictrue1的名称。 */
  InputStreamName: string;
  /** 输入流布局参数。 */
  LayoutParams: CommonMixLayoutParams;
  /** 输入流裁剪参数。 */
  CropParams?: CommonMixCropParams;
  /** 抠图参数。 */
  PortraitSegmentParams?: MixPortraitSegmentParams;
}

/** 通用混流布局参数。 */
declare interface CommonMixLayoutParams {
  /** 输入图层。取值范围[1，16]。1)背景流（即大主播画面或画布）的 image_layer 填1。2)纯音频混流，该参数也需填。注意：不同输入，该值不可重复 */
  ImageLayer: number;
  /** 输入类型。取值范围[0，5]。不填默认为0。0表示输入流为音视频。2表示输入流为图片。3表示输入流为画布。 4表示输入流为音频。5表示输入流为纯视频。 */
  InputType?: number;
  /** 输入画面在输出时的高度。取值范围：像素：[0，2000]百分比：[0.01，0.99]不填默认为输入流的高度。使用百分比时，期望输出为（百分比 * 背景高）。 */
  ImageHeight?: number;
  /** 输入画面在输出时的宽度。取值范围：像素：[0，2000]百分比：[0.01，0.99]不填默认为输入流的宽度。使用百分比时，期望输出为（百分比 * 背景宽）。 */
  ImageWidth?: number;
  /** 输入在输出画面的X偏移。取值范围：像素：[0，2000]百分比：[0.01，0.99]不填默认为0。相对于大主播背景画面左上角的横向偏移。 使用百分比时，期望输出为（百分比 * 背景宽）。 */
  LocationX?: number;
  /** 输入在输出画面的Y偏移。取值范围：像素：[0，2000]百分比：[0.01，0.99]不填默认为0。相对于大主播背景画面左上角的纵向偏移。 使用百分比时，期望输出为（百分比 * 背景宽） */
  LocationY?: number;
  /** 当InputType为3(画布)时，该值表示画布的颜色。常用的颜色有：红色：0xCC0033。黄色：0xCC9900。绿色：0xCCCC33。蓝色：0x99CCFF。黑色：0x000000。白色：0xFFFFFF。灰色：0x999999。 */
  Color?: string;
  /** 当InputType为2(图片)时，该值是水印ID。 */
  WatermarkId?: number;
}

/** 通用混流输出参数。 */
declare interface CommonMixOutputParams {
  /** 输出流名称。 */
  OutputStreamName: string;
  /** 输出流类型，取值范围[0,1]。不填默认为0。当输出流为输入流 list 中的一条时，填写0。当期望生成的混流结果成为一条新流时，该值填为1。该值为1时，output_stream_id 不能出现在 input_stram_list 中，且直播后台中，不能存在相同 ID 的流。 */
  OutputStreamType?: number;
  /** 输出流比特率。取值范围[1，10000]。不填的情况下，系统会自动判断。 */
  OutputStreamBitRate?: number;
  /** 输出流GOP大小。取值范围[1,10]。不填的情况下，系统会自动判断。 */
  OutputStreamGop?: number;
  /** 输出流帧率大小。取值范围[1,60]。不填的情况下，系统会自动判断。 */
  OutputStreamFrameRate?: number;
  /** 输出流音频比特率。取值范围[1,500]不填的情况下，系统会自动判断。 */
  OutputAudioBitRate?: number;
  /** 输出流音频采样率。取值范围[96000, 88200, 64000, 48000, 44100, 32000,24000, 22050, 16000, 12000, 11025, 8000]。不填的情况下，系统会自动判断。 */
  OutputAudioSampleRate?: number;
  /** 输出流音频声道数。取值范围[1,2]。不填的情况下，系统会自动判断。 */
  OutputAudioChannels?: number;
  /** 输出流中的sei信息。如果无特殊需要，不填。 */
  MixSei?: string;
}

/** 并发录制路数 */
declare interface ConcurrentRecordStreamNum {
  /** 时间点。 */
  Time?: string;
  /** 路数。 */
  Num?: number;
}

/** 流播放信息 */
declare interface DayStreamPlayInfo {
  /** 数据时间点，接口返回支持两种时间格式：1）YYYY-MM-DDThh:mm:ssZ：UTC时间格式，详见ISO日期格式说明文档: https://cloud.tencent.com/document/product/266/11732 */
  Time?: string;
  /** 带宽（单位Mbps）。 */
  Bandwidth?: number;
  /** 流量 （单位MB）。 */
  Flux?: number;
  /** 请求数。 */
  Request?: number;
  /** 在线人数。当前后端接口数据的统计方式与客户端侧不同，该数据仅供参考，具体数据请以业务客户端侧统计数据为准。 */
  Online?: number;
}

/** 延播信息。 */
declare interface DelayInfo {
  /** 推流域名。 */
  DomainName?: string;
  /** 推流路径，与推流和播放地址中的 AppName 保持一致，默认为 live。 */
  AppName?: string;
  /** 流名称。 */
  StreamName?: string;
  /** 延播时间，单位：秒。 */
  DelayInterval?: number;
  /** 创建时间，UTC 时间。注意：UTC时间和北京时间相差8小时。例如：2019-06-18T12:00:00Z（为北京时间 2019 年 6 月 18 日 20 点 0 分 0 秒）。 */
  CreateTime?: string;
  /** 过期时间，UTC 时间。注意：UTC时间和北京时间相差8小时。例如：2019-06-18T12:00:00Z（为北京时间 2019 年 6 月 18 日 20 点 0 分 0 秒）。 */
  ExpireTime?: string;
  /** 当前状态:-1：已过期。1： 生效中。 */
  Status?: number;
}

/** 媒体诊断结果，包含断流信息、低帧率信息等 */
declare interface DiagnoseResult {
  /** 断流信息 */
  StreamBrokenResults?: string[];
  /** 低帧率信息 */
  LowFrameRateResults?: string[];
  /** 流格式诊断信息 */
  StreamFormatResults?: string[];
}

/** 域名证书信息 */
declare interface DomainCertInfo {
  /** 证书Id。 */
  CertId?: number;
  /** 证书名称。 */
  CertName?: string;
  /** 描述信息。 */
  Description?: string;
  /** 创建时间，UTC格式。注：此字段为北京时间（UTC+8时区）。 */
  CreateTime?: string;
  /** 证书内容。 */
  HttpsCrt?: string;
  /** 证书类型。0：用户添加证书，1：腾讯云托管证书。 */
  CertType?: number;
  /** 证书过期时间，UTC格式。注：此字段为北京时间（UTC+8时区）。 */
  CertExpireTime?: string;
  /** 使用此证书的域名名称。 */
  DomainName?: string;
  /** 证书状态。 */
  Status?: number;
  /** 证书本身标识的域名列表。比如: ["*.x.com"] */
  CertDomains?: string[];
  /** 腾讯云ssl的证书Id */
  CloudCertId?: string;
}

/** 每个域名的统计信息。 */
declare interface DomainDetailInfo {
  /** 国内还是国外:Mainland: 表示国内数据。Oversea: 表示国外数据。 */
  MainlandOrOversea?: string;
  /** 带宽，单位: Mbps。 */
  Bandwidth?: number;
  /** 流量，单位: MB。 */
  Flux?: number;
  /** 人数。 */
  Online?: number;
  /** 请求数。 */
  Request?: number;
}

/** 直播域名信息 */
declare interface DomainInfo {
  /** 直播域名。 */
  Name?: string;
  /** 域名类型:0: 推流。1: 播放。 */
  Type?: number;
  /** 域名状态:0: 停用。1: 启用。 */
  Status?: number;
  /** 添加时间。注：此字段为北京时间（UTC+8时区）。 */
  CreateTime?: string;
  /** 是否有 CName 到固定规则域名:0: 否。1: 是。 */
  BCName?: number;
  /** cname 对应的域名。 */
  TargetDomain?: string;
  /** 播放区域，只在 Type=1 时该参数有意义。1: 国内。2: 全球。3: 海外。 */
  PlayType?: number;
  /** 是否慢直播:0: 普通直播。1: 慢直播。 */
  IsDelayLive?: number;
  /** 当前客户使用的 cname 信息。 */
  CurrentCName?: string;
  /** 失效参数，可忽略。 */
  RentTag?: number;
  /** 失效参数，可忽略。注：此字段为北京时间（UTC+8时区）。 */
  RentExpireTime?: string;
  /** 0: 标准直播。1: 小程序直播。 */
  IsMiniProgramLive?: number;
}

/** 多个域名信息列表 */
declare interface DomainInfoList {
  /** 域名。 */
  Domain?: string;
  /** 明细信息。 */
  DetailInfoList?: DomainDetailInfo[];
}

/** flv格式特殊配置 */
declare interface FlvSpecialParam {
  /** 是否开启边录边传，仅flv格式有效。 */
  UploadInRecording?: boolean;
}

/** 禁推流列表 */
declare interface ForbidStreamInfo {
  /** 流名称。 */
  StreamName?: string;
  /** 创建时间。注：此字段为北京时间（UTC+8时区）。 */
  CreateTime?: string;
  /** 禁推过期时间。注：此字段为北京时间（UTC+8时区）。 */
  ExpireTime?: string;
  /** 推流路径。 */
  AppName?: string | null;
  /** 推流域名。 */
  DomainName?: string | null;
}

/** 某省份某运营商在某段时间内的带宽，流量，请求数和并发数 */
declare interface GroupProIspDataInfo {
  /** 省份。 */
  ProvinceName?: string;
  /** 运营商。 */
  IspName?: string;
  /** 分钟维度的明细数据。 */
  DetailInfoList?: CdnPlayStatData[];
}

/** HLS专属录制参数 */
declare interface HlsSpecialParam {
  /** HLS续流超时时间。取值范围[0，1800]。 */
  FlowContinueDuration?: number | null;
}

/** HTTP返回码和统计数据 */
declare interface HttpCodeInfo {
  /** HTTP协议返回码。例："2xx", "3xx", "4xx", "5xx"。 */
  HttpCode?: string;
  /** 统计信息，对于无数据的时间点，会补0。 */
  ValueList?: HttpCodeValue[];
}

/** HTTP返回码数据信息 */
declare interface HttpCodeValue {
  /** 时间，使用UTC格式时间，例如：2019-01-08T10:00:00Z。注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732)。 */
  Time: string;
  /** 次数。 */
  Numbers: number;
  /** 占比。 */
  Percentage: number;
}

/** 播放错误码信息 */
declare interface HttpStatusData {
  /** 数据时间点，使用UTC格式时间，例如：2019-01-08T10:00:00Z。注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732)。 */
  Time: string;
  /** 播放状态码详细信息。 */
  HttpStatusInfoList: HttpStatusInfo[];
}

/** 播放错误码信息 */
declare interface HttpStatusInfo {
  /** 播放HTTP状态码。 */
  HttpStatus?: string;
  /** 个数。 */
  Num?: number;
}

/** 用作批量绑定域名和证书。 */
declare interface LiveCertDomainInfo {
  /** 域名。 */
  DomainName: string;
  /** 是否启用域名的https规则。1：启用0：禁用-1：保持不变 */
  Status: number;
}

/** DescribeLiveDomainCertBindings, DescribeLiveDomainCertBindingsGray接口返回的域名证书信息 */
declare interface LiveDomainCertBindings {
  /** 域名。 */
  DomainName?: string;
  /** 证书备注。与CertName同义。 */
  CertificateAlias?: string;
  /** 证书类型。0：自有证书1：腾讯云ssl托管证书 */
  CertType?: number;
  /** https状态。1：已开启。0：已关闭。 */
  Status?: number;
  /** 证书过期时间。注：此字段为北京时间（UTC+8时区）。 */
  CertExpireTime?: string;
  /** 证书Id。 */
  CertId?: number;
  /** 腾讯云ssl的证书Id。 */
  CloudCertId?: string;
  /** 规则最后更新时间。注：此字段为北京时间（UTC+8时区）。 */
  UpdateTime?: string | null;
}

/** 直播增强计费信息。 */
declare interface LiveEnhanceInfo {
  /** 域名。 */
  Domain?: string;
  /** 时间。 */
  Time?: string;
  /** 计费时长，单位分钟。 */
  Duration?: number;
  /** 帧率。 */
  Fps?: string;
  /** 分辨率。 */
  Resolution?: string;
  /** 增强服务类型。 */
  Type?: string;
}

/** 直播包信息。 */
declare interface LivePackageInfo {
  /** 包 ID。 */
  Id?: string;
  /** 总量。注意：当为流量包时单位为字节。当为转码包时单位为分钟。 */
  Total?: number;
  /** 使用量。注意：当为流量包时单位为字节。当为转码包时单位为分钟。当为连麦包时单位为小时。 */
  Used?: number;
  /** 剩余量。注意：当为流量包时单位为字节。当为转码包时单位为分钟。当为连麦包时单位为小时。 */
  Left?: number;
  /** 购买时间。注：此字段为北京时间（UTC+8时区）。 */
  BuyTime?: string;
  /** 过期时间。注：此字段为北京时间（UTC+8时区）。 */
  ExpireTime?: string;
  /** 包类型，可选值:0: 流量包。1: 普通转码包。2: 极速高清包。3: 连麦包。 */
  Type?: number;
  /** 包状态，可选值:0: 未使用。1: 使用中。2: 已过期。3: 已冻结。4: 已耗尽。5: 已退款 */
  Status?: number;
  /** 是否自动续购。 */
  WillRenew?: number | null;
  /** 续购状态。1 ：续购成功。0 ：尚未续购。<0 : 续购失败。 */
  RenewalResult?: number | null;
}

/** 直播监播任务信息。 */
declare interface LiveStreamMonitorInfo {
  /** 监播任务ID。 */
  MonitorId: string;
  /** 监播任务名称。128字节以内。 */
  MonitorName?: string;
  /** 监播任务输出信息。 */
  OutputInfo?: LiveStreamMonitorOutputInfo;
  /** 待监播的输入流信息。 */
  InputList?: LiveStreamMonitorInputInfo[];
  /** 监播任务状态。0： 代表空闲1： 代表监播中。 */
  Status?: number;
  /** 上一次的启动时间，unix时间戳。 */
  StartTime?: number;
  /** 上一次的停止时间，unix时间戳。 */
  StopTime?: number;
  /** 监播任务创建时间，unix时间戳 */
  CreateTime?: number;
  /** 监播任务更新时间，unix时间戳 */
  UpdateTime?: number;
  /** 监播事件通知策略。 */
  NotifyPolicy?: LiveStreamMonitorNotifyPolicy;
  /** 输出音频的输入Index列表。 */
  AudibleInputIndexList?: number[];
  /** 开启智能语音识别的输入Index列表 */
  AiAsrInputIndexList?: number[];
  /** 是否开启断流检测 */
  CheckStreamBroken?: number;
  /** 是否开启低帧率检测 */
  CheckStreamLowFrameRate?: number;
  /** 智能语音识别语种：0 关闭 1 中文 2 英文 3日文 4 韩文 */
  AsrLanguage?: number;
  /** 智能文字识别语种：0 关闭 1 中、英文 */
  OcrLanguage?: number;
  /** 开启智能文字识别的输入Index列表 */
  AiOcrInputIndexList?: number[];
  /** 是否存储监播事件到监播报告，以及是否允许查询监播报告 */
  AllowMonitorReport?: number;
  /** 是否开启格式诊断 */
  AiFormatDiagnose?: number;
  /** 是否开启内容质检。 */
  AiQualityControl?: number;
  /** 导播台监播对应的导播台场次id */
  CasterId?: string;
  /** 拉流转推监播对应的拉流转推任务id */
  PullPushTaskId?: string;
}

/** 直播监播功能输入流信息 */
declare interface LiveStreamMonitorInputInfo {
  /** 待监播的输入流名称。256字节以内，只允许包含字母、数字、‘-’，‘_’，'.'字符。 */
  InputStreamName: string;
  /** 待监播的输入流推流域名。128字节以内，只允许填处于启用状态的推流域名。 */
  InputDomain?: string;
  /** 待监播的输入流推流路径。32字节以内，只允许包含字母、数字、‘-’，‘_’，'.'字符。 */
  InputApp?: string;
  /** 待监播的输入流推流url。一般场景下，无需该参数。 */
  InputUrl?: string;
  /** 描述。256字节以内。 */
  Description?: string;
  /** 导播台输入源索引（10000 pvw， 10001 pgm， 其余代表输入下标） */
  CasterInputIndex?: number;
  /** 该输入源是否正在监播 */
  NeedMonitor?: boolean;
  /** 导播台pvw pgm的cdn流id */
  CdnStreamId?: string;
}

/** 直播流监播通知策略 */
declare interface LiveStreamMonitorNotifyPolicy {
  /** 通知策略类型：范围[0,1]0:代表不使用任何通知策略1:代表使用全局回调策略，所有事件通知到CallbackUrl。 */
  NotifyPolicyType?: number;
  /** 回调URL：长度[0,512]只支持http和https类型的url。 */
  CallbackUrl?: string;
}

/** 直播流监播输出流信息 */
declare interface LiveStreamMonitorOutputInfo {
  /** 监播任务输出流宽度像素。范围[1,1920]。建议至少大于100像素。 */
  OutputStreamWidth: number;
  /** 监播任务输出流长度像素。范围[1,1080]，建议至少大于100像素。 */
  OutputStreamHeight: number;
  /** 监播任务输出流名称。不填时，系统会自动生成。256字节以内，只允许包含字母、数字、‘-’，‘_’，'.'字符。 */
  OutputStreamName?: string;
  /** 监播任务播放域名。128字节以内，只允许填处于启用状态的播放域名。 */
  OutputDomain?: string;
  /** 监播任务播放路径。32字节以内，只允许包含字母、数字、‘-’，‘_’，'.'字符。 */
  OutputApp?: string;
}

/** 日志url信息。 */
declare interface LogInfo {
  /** 日志名称。 */
  LogName?: string;
  /** 日志 URL。 */
  LogUrl?: string;
  /** 日志生成时间。注：此字段为北京时间（UTC+8时区）。 */
  LogTime?: string;
  /** 文件大小。 */
  FileSize?: number;
}

/** 媒体处理结果，包含智能语音识别、智能文字识别结果 */
declare interface MPSResult {
  /** 智能语音识别结果。 */
  AiAsrResults?: string[];
  /** 智能文字识别结果。 */
  AiOcrResults?: string[];
  /** 内容质检结果。 */
  StreamQuaCtrlResults?: string[];
}

/** 混流抠图参数 */
declare interface MixPortraitSegmentParams {
  /** 抠图背景颜色，常用的颜色有：红色：0xcc0033。黄色：0xcc9900。绿色：0xcccc33。蓝色：0x99CCFF。黑色：0x000000。白色：0xFFFFFF。灰色：0x999999。 */
  Color?: string;
}

/** 监控播放数据 */
declare interface MonitorStreamPlayInfo {
  /** 播放域名。 */
  PlayDomain?: string;
  /** 流id。 */
  StreamName?: string;
  /** 播放码率，0表示原始码率。 */
  Rate?: number;
  /** 播放协议，可选值包括 Unknown，Flv，Hls，Rtmp，Huyap2p。 */
  Protocol?: string;
  /** 带宽，单位是Mbps。 */
  Bandwidth?: number;
  /** 在线人数，1分钟采样一个点，统计采样点的tcp链接数目。 */
  Online?: number;
  /** 请求数。 */
  Request?: number;
}

/** 查询当前垫片流的信息 */
declare interface PadStreamInfo {
  /** 流名称。 */
  StreamName?: string;
  /** 应用名称。 */
  AppName?: string;
  /** 推流域名。 */
  DomainName?: string;
  /** 垫片流类型。0-自动垫片；1-手动切入垫片。 */
  PadStreamType?: string;
  /** 垫片流开始时间。UTC时间，示例：2025-04-10T00:01:00Z。注意：该时间与北京时间相差八小时。 */
  PublishTime?: string;
}

/** 直播垫片模板。 */
declare interface PadTemplate {
  /** 模板id。 */
  TemplateId: number;
  /** 模板名称。 */
  TemplateName: string;
  /** 垫片内容。 */
  Url: string;
  /** 模板创建时间。 */
  CreateTime: string;
  /** 模板修改时间。 */
  UpdateTime: string;
  /** 模板描述。 */
  Description?: string;
  /** 断流等待时间。取值范围：0-30000。单位：ms。 */
  WaitDuration?: number;
  /** 最大垫片时长。取值范围：0 - 正无穷。单位：ms。 */
  MaxDuration?: number;
  /** 垫片内容类型： 1：图片，2：视频。 默认值：1。 */
  Type?: number;
}

/** 播放鉴权key信息。 */
declare interface PlayAuthKeyInfo {
  /** 域名。 */
  DomainName?: string;
  /** 是否启用:0: 关闭。1: 启用。 */
  Enable?: number;
  /** 鉴权 Key。 */
  AuthKey?: string;
  /** 有效时间，单位：秒。 */
  AuthDelta?: number;
  /** 鉴权 BackKey。 */
  AuthBackKey?: string;
}

/** 各状态码的总次数，支持大多数的 HTTP 协议返回码。 */
declare interface PlayCodeTotalInfo {
  /** HTTP code，可选值包括:400，403，404，500，502，503，504。 */
  Code?: string;
  /** 总次数。 */
  Num?: number;
}

/** 流维度的播放信息。 */
declare interface PlayDataInfoByStream {
  /** 流名称。 */
  StreamName?: string;
  /** 总流量，单位: MB。 */
  TotalFlux?: number;
}

/** 按省份运营商查询的播放信息。 */
declare interface PlayStatInfo {
  /** 数据时间点。 */
  Time?: string;
  /** 带宽/流量/请求数/并发连接数/下载速度的值，若没数据返回时该值为0。 */
  Value?: number;
}

/** 播放汇总统计信息。 */
declare interface PlaySumStatInfo {
  /** 域名或流 ID。 */
  Name?: string;
  /** 平均下载速度，单位: MB/s。计算公式: 每分钟的下载速度求平均值。 */
  AvgFluxPerSecond?: number;
  /** 总流量，单位: MB。 */
  TotalFlux?: number;
  /** 总请求数。 */
  TotalRequest?: number;
}

/** 播放错误码信息 */
declare interface ProIspPlayCodeDataInfo {
  /** 国家或地区。 */
  CountryAreaName?: string;
  /** 省份。 */
  ProvinceName?: string;
  /** 运营商。 */
  IspName?: string;
  /** 错误码为2开头的次数。 */
  Code2xx?: number;
  /** 错误码为3开头的次数。 */
  Code3xx?: number;
  /** 错误码为4开头的次数。 */
  Code4xx?: number;
  /** 错误码为5开头的次数。 */
  Code5xx?: number;
}

/** 获取省份/运营商的播放信息。 */
declare interface ProIspPlaySumInfo {
  /** 省份/运营商/国家或地区。 */
  Name?: string;
  /** 总流量，单位: MB。 */
  TotalFlux?: number;
  /** 总请求数。 */
  TotalRequest?: number;
  /** 平均下载流量，单位: MB/s。 */
  AvgFluxPerSecond?: number;
}

/** 推流时间。 */
declare interface PublishTime {
  /** 推流时间。UTC 格式，例如：2018-06-29T19:00:00Z。 */
  PublishTime?: string;
}

/** 云转推水印信息。 */
declare interface PullPushWatermarkInfo {
  /** 水印图片 URL。URL中禁止包含的字符：;(){}$>`#"'| */
  PictureUrl: string;
  /** 显示位置，X轴偏移，单位是百分比，默认 0。 */
  XPosition: number;
  /** 显示位置，Y轴偏移，单位是百分比，默认 0。 */
  YPosition: number;
  /** 水印宽度，占直播原始画面宽度百分比，建议高宽只设置一项，另外一项会自适应缩放，避免变形。默认原始宽度。 */
  Width: number;
  /** 水印高度，占直播原始画面高度百分比，建议高宽只设置一项，另外一项会自适应缩放，避免变形。默认原始高度。 */
  Height: number;
  /** 水印位置，默认 0。0：左上角。1：右上角。2：右下角。3：左下角。 */
  Location: number;
}

/** 拉流配置。 */
declare interface PullStreamConfig {
  /** 拉流配置 ID。 */
  ConfigId?: string;
  /** 源 URL。 */
  FromUrl?: string;
  /** 目的 URL。 */
  ToUrl?: string;
  /** 区域名。 */
  AreaName?: string;
  /** 运营商名。 */
  IspName?: string;
  /** 开始时间。UTC格式时间，例如: 2019-01-08T10:00:00Z。注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732)。 */
  StartTime?: string;
  /** 结束时间。UTC格式时间，例如：2019-01-08T10:00:00Z。注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732)。 */
  EndTime?: string;
  /** 状态:0: 无效。1: 初始状态。2: 正在运行。3: 拉起失败。4: 暂停。 */
  Status?: string;
}

/** 直播拉流任务信息。 */
declare interface PullStreamTaskInfo {
  /** 拉流任务Id。 */
  TaskId?: string;
  /** 拉流源的类型：PullLivePushLive -直播，PullVodPushLive -点播，PullPicPushLive -图片。 */
  SourceType?: string;
  /** 拉流源url列表。SourceType为直播（PullLiveToLive）只可以填1个，SourceType为点播（PullVodToLive）可以填多个，上限10个。 */
  SourceUrls?: string[];
  /** 推流域名。将拉到的源推到该域名。 */
  DomainName?: string;
  /** 推流路径。将拉到的源推到该路径。 */
  AppName?: string;
  /** 流名称。将拉到的源推到该流名称。 */
  StreamName?: string;
  /** 推流参数。推流携带的自定义参数。 */
  PushArgs?: string;
  /** 开始时间。使用UTC格式时间，例如：2019-01-08T10:00:00Z。注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732)。 */
  StartTime?: string;
  /** 结束时间，注意：1. 结束时间必须大于开始时间；2. 结束时间和开始时间必须大于当前时间；3. 结束时间 和 开始时间 间隔必须小于七天。使用UTC格式时间，例如：2019-01-08T10:00:00Z。注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732)。 */
  EndTime?: string;
  /** 任务创建所在地域：ap-beijing - 华北地区(北京)，ap-shanghai -华东地区(上海)，ap-guangzhou -华南地区(广州)，ap-mumbai - 印度，ap-hongkong - 香港，eu-frankfurt - 德国，ap-seoul - 韩国，ap-bangkok - 泰国，ap-singapore - 新加坡，na-siliconvalley - 美西，na-ashburn - 美东，ap-tokyo - 日本。 */
  Region?: string;
  /** 点播拉流转推循环次数。-1：无限循环，直到任务结束。0：不循环。>0：具体循环次数。次数和时间以先结束的为准。注意：拉流源为点播，该配置生效。 */
  VodLoopTimes?: number;
  /** 点播更新SourceUrls后的播放方式：ImmediateNewSource：立即从更新的拉流源开始播放；ContinueBreakPoint：从上次断流url源的断点处继续，结束后再使用新的拉流源。注意：拉流源为点播，该配置生效。 */
  VodRefreshType?: string;
  /** 任务创建时间。使用UTC格式时间，例如：2019-01-08T10:00:00Z。注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732)。 */
  CreateTime?: string;
  /** 任务更新时间。使用UTC格式时间，例如：2019-01-08T10:00:00Z。注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732)。 */
  UpdateTime?: string;
  /** 创建任务的操作者。 */
  CreateBy?: string;
  /** 最后更新任务的操作者。 */
  UpdateBy?: string;
  /** 回调地址。 */
  CallbackUrl?: string;
  /** 选择需要回调的事件：TaskStart：任务启动回调，TaskExit：任务停止回调，VodSourceFileStart：从点播源文件开始拉流回调，VodSourceFileFinish：从点播源文件拉流结束回调，ResetTaskConfig：任务更新回调。 */
  CallbackEvents?: string[];
  /** 注意：该信息暂不返回。最后一次回调信息。 */
  CallbackInfo?: string;
  /** 注意：该信息暂不返回。错误信息。 */
  ErrorInfo?: string;
  /** 状态。enable：生效中。pause：暂停中。 */
  Status?: string;
  /** 注意：该信息仅在查询单个任务时返回。任务最新拉流信息。包含：源 url，偏移时间，上报时间。 */
  RecentPullInfo?: RecentPullInfo;
  /** 任务备注信息。 */
  Comment?: string;
  /** 备源类型：PullLivePushLive -直播，PullVodPushLive -点播。 */
  BackupSourceType?: string;
  /** 备源URL。 */
  BackupSourceUrl?: string;
  /** 水印信息列表。 */
  WatermarkList?: PullPushWatermarkInfo[];
  /** 点播源是否启用本地推流模式，默认0，不启用。0 - 不启用。1 - 启用。 */
  VodLocalMode?: number;
  /** 录制模板 ID。 */
  RecordTemplateId?: string;
  /** 新增的推流地址。用于单任务推两路场景。 */
  BackupToUrl?: string;
  /** 直播转码模板。 */
  TranscodeTemplateName?: string;
}

/** 推流鉴权key信息。 */
declare interface PushAuthKeyInfo {
  /** 域名。 */
  DomainName?: string;
  /** 是否启用，0：关闭，1：启用。 */
  Enable?: number;
  /** 主鉴权 Key。 */
  MasterAuthKey?: string;
  /** 备鉴权 Key。 */
  BackupAuthKey?: string;
  /** 有效时间，单位：秒。 */
  AuthDelta?: number;
}

/** 推流数据信息 */
declare interface PushDataInfo {
  /** 流名称。 */
  StreamName: string;
  /** 推流路径。 */
  AppName: string;
  /** 推流客户端 IP。 */
  ClientIp: string;
  /** 接流服务器 IP。 */
  ServerIp: string;
  /** 推流视频帧率，单位: Hz。 */
  VideoFps: number;
  /** 推流视频码率，单位: bps。 */
  VideoSpeed: number;
  /** 推流音频帧率，单位: Hz。 */
  AudioFps: number;
  /** 推流音频码率，单位: bps。 */
  AudioSpeed: number;
  /** 推流域名。 */
  PushDomain: string;
  /** 推流开始时间。 */
  BeginPushTime: string;
  /** 音频编码格式，例："AAC"。 */
  Acodec: string;
  /** 视频编码格式，例："H264"。 */
  Vcodec: string;
  /** 分辨率。 */
  Resolution: string;
  /** 采样率。 */
  AsampleRate: number;
  /** metadata 中的音频码率，单位: bps。 */
  MetaAudioSpeed: number;
  /** metadata 中的视频码率，单位: bps。 */
  MetaVideoSpeed: number;
  /** metadata 中的帧率。 */
  MetaFps: number;
}

/** 推流域名日志信息。 */
declare interface PushLogInfo {
  /** 日志名称。 */
  LogName: string;
  /** 日志下载地址。 */
  LogUrl: string;
  /** 日志时间。UTC 格式，例如：2018-11-29T19:00:00Z。注意：1. 北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732)。 */
  LogTime: string;
  /** 文件大小，单位字节。 */
  FileSize: number;
}

/** 某条流的推流质量详情数据。 */
declare interface PushQualityData {
  /** 数据时间，使用UTC格式时间，例如：2019-01-08T10:00:00Z。注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732)。 */
  Time?: string;
  /** 推流域名。 */
  PushDomain?: string;
  /** 推流路径。 */
  AppName?: string;
  /** 推流客户端 IP。 */
  ClientIp?: string;
  /** 开始推流时间，格式: %Y-%m-%d %H:%M:%S.%ms，精确到毫秒级。 */
  BeginPushTime?: string;
  /** 分辨率信息。 */
  Resolution?: string;
  /** 视频编码格式。 */
  VCodec?: string;
  /** 音频编码格式。 */
  ACodec?: string;
  /** 推流序列号，用来唯一的标志一次推流。 */
  Sequence?: string;
  /** 视频帧率。 */
  VideoFps?: number;
  /** 视频码率，单位: bps。 */
  VideoRate?: number;
  /** 音频帧率。 */
  AudioFps?: number;
  /** 音频码率，单位: bps。 */
  AudioRate?: number;
  /** 本地流逝时间，单位: ms，音视频流逝时间与本地流逝时间的差距越大表示推流质量越差，上行卡顿越严重。 */
  LocalTs?: number;
  /** 视频流逝时间，单位: ms。 */
  VideoTs?: number;
  /** 音频流逝时间，单位: ms。 */
  AudioTs?: number;
  /** metadata 中的视频码率，单位: kbps。 */
  MetaVideoRate?: number;
  /** metadata 中的音频码率，单位: kbps。 */
  MetaAudioRate?: number;
  /** metadata 中的帧率。 */
  MateFps?: number;
  /** 推流参数 */
  StreamParam?: string;
  /** 带宽，单位Mbps。 */
  Bandwidth?: number;
  /** 流量，单位MB。 */
  Flux?: number;
  /** 推流服务端 IP。 */
  ServerIp?: string;
  /** 关键帧间隔 GOP ，单位：ms。 */
  GopSize?: number;
}

/** 直播拉流当前正在拉的文件信息。 */
declare interface RecentPullInfo {
  /** 当前正在拉的文件地址。 */
  FileUrl: string;
  /** 当前正在拉的文件偏移，单位：秒。 */
  OffsetTime: number;
  /** 最新上报偏移信息时间。UTC格式。如：2020-07-23T03:20:39Z。注意：与北京时间相差八小时。 */
  ReportTime: string;
  /** 已经轮播的次数。 */
  LoopedTimes: number;
}

/** 录制模板参数。 */
declare interface RecordParam {
  /** 录制间隔。单位秒，默认：1800。取值范围：30-7200。此参数对 HLS 无效，当录制 HLS 时从推流到断流生成一个文件。 */
  RecordInterval?: number;
  /** 录制存储时长。单位秒，取值范围： 0 - 1500天。0：表示永久存储。 */
  StorageTime?: number;
  /** 是否开启当前格式录制，默认值为0，0：否， 1：是。 */
  Enable?: number;
  /** 点播子应用 ID。 */
  VodSubAppId?: number;
  /** 录制文件名。支持的特殊占位符有：{StreamID}: 流ID{StartYear}: 开始时间-年{StartMonth}: 开始时间-月{StartDay}: 开始时间-日{StartHour}: 开始时间-小时{StartMinute}: 开始时间-分钟{StartSecond}: 开始时间-秒{StartMillisecond}: 开始时间-毫秒{EndYear}: 结束时间-年{EndMonth}: 结束时间-月{EndDay}: 结束时间-日{EndHour}: 结束时间-小时{EndMinute}: 结束时间-分钟{EndSecond}: 结束时间-秒{EndMillisecond}: 结束时间-毫秒若未设置默认录制文件名为{StreamID}_{StartYear}-{StartMonth}-{StartDay}-{StartHour}-{StartMinute}-{StartSecond}_{EndYear}-{EndMonth}-{EndDay}-{EndHour}-{EndMinute}-{EndSecond} */
  VodFileName?: string;
  /** 任务流 */
  Procedure?: string | null;
  /** 视频存储策略。normal：标准存储。cold：低频存储。 */
  StorageMode?: string | null;
  /** 点播应用分类 */
  ClassId?: number | null;
  /** 存储至 cos 的 bucket 桶名称。注：CosBucketName参数值不能包含-[appid] 部分。 */
  CosBucketName?: string | null;
  /** 存储至 cos 的 bucket 区域。 */
  CosBucketRegion?: string | null;
  /** 存储至 cos 的 bucket 路径。 */
  CosBucketPath?: string | null;
}

/** 录制任务 */
declare interface RecordTask {
  /** 录制任务ID。 */
  TaskId?: string;
  /** 推流域名。 */
  DomainName?: string;
  /** 推流路径。 */
  AppName?: string;
  /** 流名称。 */
  StreamName?: string;
  /** 任务开始时间，Unix时间戳。 */
  StartTime?: number;
  /** 任务结束时间，Unix时间戳。 */
  EndTime?: number;
  /** 录制模板ID。 */
  TemplateId?: number;
  /** 调用 StopRecordTask 停止任务时间，Unix时间戳。值为0表示未曾调用接口停止任务。 */
  Stopped?: number;
}

/** 录制模板信息 */
declare interface RecordTemplateInfo {
  /** 模板 ID。 */
  TemplateId?: number;
  /** 模板名称。 */
  TemplateName?: string;
  /** 描述信息。 */
  Description?: string;
  /** FLV 录制参数。 */
  FlvParam?: RecordParam;
  /** HLS 录制参数。 */
  HlsParam?: RecordParam;
  /** MP4 录制参数。 */
  Mp4Param?: RecordParam;
  /** AAC 录制参数。 */
  AacParam?: RecordParam;
  /** 0：普通直播，1：慢直播。 */
  IsDelayLive?: number;
  /** HLS 录制定制参数。 */
  HlsSpecialParam?: HlsSpecialParam;
  /** MP3 录制参数。 */
  Mp3Param?: RecordParam;
  /** 是否去除水印。 */
  RemoveWatermark?: boolean | null;
  /** 是否存储至cos */
  CosStore?: number | null;
  /** FLV 录制定制参数。 */
  FlvSpecialParam?: FlvSpecialParam | null;
}

/** 直播域名Referer黑白名单配置 */
declare interface RefererAuthConfig {
  /** 域名。 */
  DomainName?: string;
  /** 是否启用，0：关闭，1：启用。 */
  Enable?: number;
  /** 名单类型，0：黑名单，1：白名单。 */
  Type?: number;
  /** 是否允许空Referer，0：不允许，1：允许。 */
  AllowEmpty?: number;
  /** 名单列表，以分号(;)分隔。 */
  Rules?: string;
}

/** 规则信息。 */
declare interface RuleInfo {
  /** 规则创建时间。注：此字段为北京时间（UTC+8时区）。 */
  CreateTime?: string;
  /** 规则更新时间。注：此字段为北京时间（UTC+8时区）。 */
  UpdateTime?: string;
  /** 模板 ID。 */
  TemplateId?: number;
  /** 推流域名。 */
  DomainName?: string;
  /** 推流路径。 */
  AppName?: string;
  /** 流名称。 */
  StreamName?: string;
}

/** 截图任务 */
declare interface ScreenshotTask {
  /** 截图任务ID。 */
  TaskId?: string;
  /** 推流域名。 */
  DomainName?: string;
  /** 推流路径。 */
  AppName?: string;
  /** 流名称。 */
  StreamName?: string;
  /** 任务开始时间，Unix时间戳。 */
  StartTime?: number;
  /** 任务结束时间，Unix时间戳。 */
  EndTime?: number;
  /** 截图模板ID。 */
  TemplateId?: number;
  /** 调用 StopScreenshotTask 停止任务时间，Unix时间戳。值为0表示未曾调用接口停止任务。 */
  Stopped?: number;
}

/** 截图模板信息。 */
declare interface SnapshotTemplateInfo {
  /** 模板 ID。 */
  TemplateId?: number;
  /** 模板名称。 */
  TemplateName?: string;
  /** 截图时间间隔，5-300秒。 */
  SnapshotInterval?: number;
  /** 截图宽度，范围：0-3000。 0：原始宽度并适配原始比例。 */
  Width?: number;
  /** 截图高度，范围：0-2000。0：原始高度并适配原始比例。 */
  Height?: number;
  /** 是否开启鉴黄，0：不开启，1：开启。 */
  PornFlag?: number;
  /** Cos 应用 ID。 */
  CosAppId?: number;
  /** Cos Bucket名称。 */
  CosBucket?: string;
  /** Cos 地域。 */
  CosRegion?: string;
  /** 模板描述。 */
  Description?: string;
  /** Cos Bucket文件夹前缀。 */
  CosPrefix?: string | null;
  /** Cos 文件名称。 */
  CosFileName?: string | null;
}

/** 推断流事件信息。 */
declare interface StreamEventInfo {
  /** 应用名称。 */
  AppName?: string;
  /** 推流域名。 */
  DomainName?: string;
  /** 流名称。 */
  StreamName?: string;
  /** 推流开始时间。UTC 格式时间，例如：2019-01-07T12:00:00Z。 */
  StreamStartTime?: string;
  /** 推流结束时间。UTC 格式时间，例如：2019-01-07T15:00:00Z。 */
  StreamEndTime?: string;
  /** 停止原因。 */
  StopReason?: string;
  /** 推流持续时长，单位：秒。 */
  Duration?: number;
  /** 主播 IP。当客户端为内网推流时，展示为: - 。 */
  ClientIp?: string;
  /** 分辨率。 */
  Resolution?: string;
}

/** 流名称列表。 */
declare interface StreamName {
  /** 流名称。 */
  StreamName?: string;
  /** 应用名称。 */
  AppName?: string;
  /** 推流域名。 */
  DomainName?: string;
  /** 推流开始时间。UTC格式时间，例如：2019-01-07T12:00:00Z。 */
  StreamStartTime?: string;
  /** 推流结束时间。UTC格式时间，例如：2019-01-07T15:00:00Z。 */
  StreamEndTime?: string;
  /** 停止原因。 */
  StopReason?: string;
  /** 推流持续时长，单位：秒。 */
  Duration?: number;
  /** 主播 IP。 */
  ClientIp?: string;
  /** 分辨率。 */
  Resolution?: string;
}

/** 查询当前正在推流的信息 */
declare interface StreamOnlineInfo {
  /** 流名称。 */
  StreamName?: string;
  /** 推流时间列表 */
  PublishTimeList?: PublishTime[];
  /** 应用名称。 */
  AppName?: string;
  /** 推流域名。 */
  DomainName?: string;
  /** 流是否推送到延播。0 - 无延播，1 - 有延播。 */
  PushToDelay?: number;
}

/** 拉流转推任务的时长分布信息 */
declare interface TaskDurationInfo {
  /** 拉流转推任务的时间点 */
  Time?: string;
  /** 拉流转推任务的时长，单位为分钟 */
  Duration?: number;
  /** 拉流转推任务的时长，单位为秒 */
  DurationSecond?: number;
}

/** 直播拉流任务状态信息。 */
declare interface TaskStatusInfo {
  /** 当前使用的源 URL。 */
  FileUrl: string;
  /** 点播源任务的轮播次数。 */
  LoopedTimes: number;
  /** 点播源的播放偏移，单位：秒。 */
  OffsetTime: number;
  /** 最新心跳上报时间。UTC时间，例如：2022-02-11T10:00:00Z。注意：UTC时间与北京时间相差八小时。 */
  ReportTime: string;
  /** 实际运行状态：active - 活跃，inactive - 不活跃。 */
  RunStatus: string;
  /** 点播源的文件时长，单位：秒。 */
  FileDuration: number;
  /** 下一进度点播文件 URL。 */
  NextFileUrl: string;
}

/** 转码模板信息。 */
declare interface TemplateInfo {
  /** 视频编码：h264/h265/origin，默认h264。origin: 保持原始编码格式 */
  Vcodec?: string;
  /** 视频码率。范围：0kbps - 8000kbps。0为保持原始码率。注: 转码模板有码率唯一要求，最终保存的码率可能与输入码率有所差别。 */
  VideoBitrate?: number;
  /** 音频编码：aac，默认aac。注意：当前该参数未生效，待后续支持！ */
  Acodec?: string;
  /** 音频码率。取值范围：0kbps - 500kbps。默认0。 */
  AudioBitrate?: number;
  /** 宽，默认0。范围[0-3000]数值必须是2的倍数，0是原始宽度 */
  Width?: number;
  /** 高，默认0。范围[0-3000]数值必须是2的倍数，0是原始宽度 */
  Height?: number;
  /** 帧率，默认0。范围0-60fps */
  Fps?: number;
  /** 关键帧间隔，单位：秒。默认原始的间隔范围2-6 */
  Gop?: number;
  /** 旋转角度，默认0。可取值：0，90，180，270 */
  Rotate?: number;
  /** 编码质量：baseline/main/high。默认baseline */
  Profile?: string;
  /** 当设置的码率>原始码率时，是否以原始码率为准。0：否， 1：是默认 0。 */
  BitrateToOrig?: number;
  /** 当设置的高度>原始高度时，是否以原始高度为准。0：否， 1：是默认 0。 */
  HeightToOrig?: number;
  /** 当设置的帧率>原始帧率时，是否以原始帧率为准。0：否， 1：是默认 0。 */
  FpsToOrig?: number;
  /** 是否保留视频。0：否，1：是。 */
  NeedVideo?: number;
  /** 是否保留音频。0：否，1：是。 */
  NeedAudio?: number;
  /** 模板 ID。 */
  TemplateId?: number;
  /** 模板名称。 */
  TemplateName?: string;
  /** 模板描述。 */
  Description?: string;
  /** 是否是极速高清模板，0：否，1：是。默认0。 */
  AiTransCode?: number;
  /** 极速高清视频码率压缩比。极速高清目标码率=VideoBitrate * (1-AdaptBitratePercent)取值范围：0.0到0.5 */
  AdaptBitratePercent?: number;
  /** 是否以短边作为高度，0：否，1：是。默认0。 */
  ShortEdgeAsHeight?: number | null;
  /** DRM 加密类型，可选值：fairplay、normalaes、widevine。 */
  DRMType?: string | null;
  /** DRM 加密项，多个用|分割，可选值：AUDIO、SD、HD、UHD1、UHD2，后四个为一组，同组中的内容只能选一个。 */
  DRMTracks?: string | null;
  /** 是否创建自适应码率，默认值 0。0：否。1：是。 */
  IsAdaptiveBitRate?: number | null;
  /** 自适应码率，子转码模板信息，当 IsAdaptiveBitRate 为 1 时有效。 */
  AdaptiveChildren?: ChildTemplateInfo[] | null;
}

/** 时移计费明细数据。 */
declare interface TimeShiftBillData {
  /** 推流域名。 */
  Domain: string;
  /** 时移文件时长，单位分钟。 */
  Duration: number;
  /** 时移配置天数，单位天。 */
  StoragePeriod: number;
  /** 时间点，格式: yyyy-mm-ddTHH:MM:SSZ。 */
  Time: string;
  /** 时移总时长，单位分钟。 */
  TotalDuration: number;
}

/** 时移录制段。 */
declare interface TimeShiftRecord {
  /** 时移录制会话标识。 */
  Sid?: string;
  /** 录制会话开始时间，Unix 时间戳。 */
  StartTime?: number;
  /** 录制会话结束时间，Unix 时间戳。 */
  EndTime?: number;
}

/** 时移流。 */
declare interface TimeShiftStreamInfo {
  /** 推流域名所属组。 */
  DomainGroup?: string | null;
  /** 推流域名。 */
  Domain?: string;
  /** 推流路径。 */
  AppName?: string;
  /** 流名称。 */
  StreamName?: string;
  /** 流起始时间，Unix 时间戳。 */
  StartTime?: number;
  /** 截止查询时流结束时间，Unix 时间戳。 */
  EndTime?: number;
  /** 转码模板ID。 */
  TransCodeId?: number | null;
  /** 流类型，取值0为原始流，1为水印流，2为转码流。 */
  StreamType?: number;
  /** 时移数据存储时长，单位秒。 */
  Duration?: number | null;
  /** 时移自适应码率子流列表。 */
  TimeShiftSubStreams?: TimeShiftSubStream[] | null;
}

/** 时移自适应码率子流信息。 */
declare interface TimeShiftSubStream {
  /** 时移自适应码率子流转码模板ID。 */
  TransCodeId?: number;
}

/** 直播时移模板配置 */
declare interface TimeShiftTemplate {
  /** 模板名称。 */
  TemplateName: string;
  /** 时移时长。单位：秒。 */
  Duration: number;
  /** 分片时长。可取3-10。单位：s。默认值：5。 */
  ItemDuration: number;
  /** 模板id。 */
  TemplateId?: number;
  /** 模板描述。 */
  Description?: string;
  /** 地域：Mainland：中国大陆；Overseas：海外及港澳台地区；默认值：Mainland。 */
  Area?: string;
  /** 是否去除水印。为true则将录制原始流。默认值：false。 */
  RemoveWatermark?: boolean;
  /** 转码流id列表。此参数仅在 RemoveWatermark为false时生效。 */
  TranscodeTemplateIds?: number[];
}

/** 直播时移写入量数据。 */
declare interface TimeShiftWriteSizeData {
  /** 区域。 */
  Area: string;
  /** 时间，格式为：yyyy-mm-ddTHH:MM:SSZ。 */
  Time: string;
  /** 写入量（单位：字节） */
  WriteSize: number;
  /** 域名。 */
  Domain: string;
  /** 时移天数。 */
  StorageDays: number;
}

/** 某个时间点的指标的数值是多少。 */
declare interface TimeValue {
  /** UTC 时间，时间格式：yyyy-mm-ddTHH:MM:SSZ。 */
  Time?: string;
  /** 数值。 */
  Num?: number;
}

/** 转码详细信息。 */
declare interface TranscodeDetailInfo {
  /** 流名称。 */
  StreamName?: string;
  /** 开始时间（北京时间），格式：yyyy-mm-dd HH:MM。 */
  StartTime?: string;
  /** 结束时间（北京时间），格式：yyyy-mm-dd HH:MM。 */
  EndTime?: string;
  /** 转码时长，单位：分钟。注意：因推流过程中可能有中断重推情况，此处时长为真实转码时长累加值，并非结束时间和开始时间的间隔。 */
  Duration?: number;
  /** 编码方式，带模块，示例：liveprocessor_ACC: 音频转码，liveprocessor_H264：直播转码-H264，liveprocessor_H265： 直播转码-H265，topspeed_H264：极速高清-H264，topspeed_H265：极速高清-H265。 */
  ModuleCodec?: string;
  /** 码率。 */
  Bitrate?: number;
  /** 类型，包含：转码（Transcode），混流（MixStream），水印（WaterMark），快直播（Webrtc）。 */
  Type?: string;
  /** 推流域名。 */
  PushDomain?: string;
  /** 分辨率。 */
  Resolution?: string;
  /** 地域：Mainland：国内。Overseas：海外。 */
  MainlandOrOversea?: string;
}

/** 转码任务数。 */
declare interface TranscodeTaskNum {
  /** 时间点。 */
  Time: string;
  /** 码率。 */
  CodeRate: number;
  /** 任务数。 */
  Num: number;
}

/** 转码总量数据 */
declare interface TranscodeTotalInfo {
  /** 时间点，使用UTC格式时间，例如：2019-01-08T10:00:00Z。注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732)。 */
  Time: string;
  /** 转码时长，单位：分钟。 */
  Duration: number;
  /** 编码方式，带模块，示例：liveprocessor_H264 =》直播转码-H264，liveprocessor_H265 =》 直播转码-H265，topspeed_H264 =》极速高清-H264，topspeed_H265 =》极速高清-H265。 */
  ModuleCodec: string;
  /** 分辨率，示例：540*480。 */
  Resolution: string;
}

/** 转场信息 */
declare interface TransitionTypeInfo {
  /** 转场名称 */
  TransitionType?: string;
  /** 素材url */
  SourceUrl?: string;
  /** 转场的下标，可用来排序，从1开始递增 */
  Index?: number;
}

/** 水印信息。 */
declare interface WatermarkInfo {
  /** 水印 ID。 */
  WatermarkId?: number;
  /** 水印图片 URL。 */
  PictureUrl?: string;
  /** 显示位置，X 轴偏移。 */
  XPosition?: number;
  /** 显示位置，Y 轴偏移。 */
  YPosition?: number;
  /** 水印名称。 */
  WatermarkName?: string;
  /** 当前状态。0：未使用，1:使用中。 */
  Status?: number;
  /** 添加时间。注：此字段为北京时间（UTC+8时区）。 */
  CreateTime?: string;
  /** 水印宽。 */
  Width?: number;
  /** 水印高。 */
  Height?: number;
  /** 背景水印宽。 */
  BackgroundWidth?: number;
  /** 背景水印高。 */
  BackgroundHeight?: number;
}

/** P2P流信息。 */
declare interface XP2PDetailInfo {
  /** CDN流量。 */
  CdnBytes?: number;
  /** P2P流量。 */
  P2pBytes?: number;
  /** 卡播人数。 */
  StuckPeople?: number;
  /** 卡播次数。 */
  StuckTimes?: number;
  /** 在线人数。 */
  OnlinePeople?: number;
  /** 起播请求次数 */
  Request?: number;
  /** 起播成功次数 */
  RequestSuccess?: number;
  /** 时间，一分钟粒度，utc格式：yyyy-mm-ddTHH:MM:SSZ，参考https://cloud.tencent.com/document/product/266/11732 */
  Time?: string;
  /** 类型，分live和vod两种。 */
  Type?: string;
  /** 流ID。 */
  StreamName?: string;
  /** AppId。 */
  AppId?: string;
}

declare interface AddCasterInputInfoRequest {
  /** 导播台ID。 */
  CasterId: number;
  /** 导播台输入源详细信息。 */
  InputInfo: CasterInputInfo;
}

declare interface AddCasterInputInfoResponse {
  /** rtmp协议输入源播放地址。注：仅可作为预览使用，不可分发。 */
  InputPlayUrl?: string;
  /** webrtc协议播放地址。注：1. 需配合使用腾讯云快直播播放SDK使用才可正常播放。2. 仅作为预览使用，不可分发。 */
  InputWebRTCPlayUrl?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AddCasterLayoutInfoRequest {
  /** 导播台ID */
  CasterId: number;
  /** 导播台布局参数信息。 */
  LayoutInfo: CasterLayoutInfo;
}

declare interface AddCasterLayoutInfoResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AddCasterMarkPicInfoRequest {
  /** 导播台ID */
  CasterId: number;
  /** 图片水印详细参数。 */
  MarkPicInfo: CasterMarkPicInfo;
}

declare interface AddCasterMarkPicInfoResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AddCasterMarkWordInfoRequest {
  /** 导播台ID。 */
  CasterId: number;
  /** 文本的详细配置。 */
  MarkWordInfo: CasterMarkWordInfo;
}

declare interface AddCasterMarkWordInfoResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AddCasterOutputInfoRequest {
  /** 导播台ID */
  CasterId: number;
  /** 导播台推流参数信息。 */
  OutputInfo: CasterOutputInfo;
}

declare interface AddCasterOutputInfoResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AddDelayLiveStreamRequest {
  /** 推流路径，与推流和播放地址中的 AppName 保持一致，默认为 live。 */
  AppName: string;
  /** 推流域名。 */
  DomainName: string;
  /** 流名称。 */
  StreamName: string;
  /** 延播时间，单位：秒，上限：600秒。 */
  DelayTime: number;
  /** 延播设置的过期时间。UTC 格式，例如：2018-11-29T19:00:00Z。注意：1. 默认7天后过期，且最长支持7天内生效。2. 北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/267/38543)。 */
  ExpireTime?: string;
}

declare interface AddDelayLiveStreamResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AddLiveDomainRequest {
  /** 域名名称。 */
  DomainName: string;
  /** 域名类型，0：推流域名，1：播放域名。 */
  DomainType: number;
  /** 拉流域名类型：1：国内，2：全球，3：境外。默认值：1。 */
  PlayType?: number;
  /** 是否是慢直播：0： 普通直播，1 ：慢直播 。默认值： 0。 */
  IsDelayLive?: number;
  /** 是否是小程序直播：0： 标准直播，1 ：小程序直播 。默认值： 0。 */
  IsMiniProgramLive?: number;
  /** 域名归属校验类型。可取值（与 AuthenticateDomainOwner 接口的 VerifyType 参数一致。）：dnsCheck ：立即验证配置 dns 的解析记录是否与待验证内容一致，成功则保存记录。fileCheck ：立即验证 web 文件是否与待验证内容一致，成功则保存记录。dbCheck : 检查是否已经验证成功过。若不传默认为 dbCheck 。 */
  VerifyOwnerType?: string;
}

declare interface AddLiveDomainResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AddLiveWatermarkRequest {
  /** 水印图片 URL。URL中禁止包含的字符： ;(){}$>`#"\'| */
  PictureUrl: string;
  /** 水印名称。最长30字节。 */
  WatermarkName: string;
  /** 显示位置，X轴偏移，单位是百分比，默认 0。 */
  XPosition?: number;
  /** 显示位置，Y轴偏移，单位是百分比，默认 0。 */
  YPosition?: number;
  /** 水印宽度，占直播原始画面宽度百分比，建议高宽只设置一项，另外一项会自适应缩放，避免变形。默认原始宽度。 */
  Width?: number;
  /** 水印高度，占直播原始画面高度百分比，建议高宽只设置一项，另外一项会自适应缩放，避免变形。默认原始高度。 */
  Height?: number;
  /** 背景水印宽度。默认宽度1920。 */
  BackgroundWidth?: number;
  /** 背景水印高度。默认高度1080。 */
  BackgroundHeight?: number;
}

declare interface AddLiveWatermarkResponse {
  /** 水印ID。 */
  WatermarkId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AuthenticateDomainOwnerRequest {
  /** 要验证的域名。 */
  DomainName: string;
  /** 验证类型。可取值：dnsCheck ：立即验证配置 dns 的解析记录是否与待验证内容一致，成功则保存记录。fileCheck ：立即验证 web 文件是否与待验证内容一致，成功则保存记录。dbCheck : 检查是否已经验证成功过。 */
  VerifyType: string;
}

declare interface AuthenticateDomainOwnerResponse {
  /** 验证内容。VerifyType 传 dnsCheck 时，为要配的 TXT 记录值。VerifyType 传 fileCheck 时，为文件内容。 */
  Content?: string;
  /** 域名验证状态。>=0 为已验证归属。<0 未验证归属权。 */
  Status?: number;
  /** DomainName 对应的主域名。同一主域名下的所有域名只需成功验证一次，后续均无需再验证。 */
  MainDomain?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CancelCommonMixStreamRequest {
  /** 混流会话（申请混流开始到取消混流结束）标识 ID。该值与CreateCommonMixStream中的MixStreamSessionId保持一致。 */
  MixStreamSessionId: string;
}

declare interface CancelCommonMixStreamResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CopyCasterRequest {
  /** 源导播台的ID */
  CasterId: number;
  /** 复制产生的新导播台名称 */
  CasterName?: string;
  /** 复制产生的导播台推送到云直播的流id注意：该流id不能与云直播中的流id重复 */
  OutputStreamId?: string;
}

declare interface CopyCasterResponse {
  /** 复制生成的导播台ID */
  CasterId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateAuditKeywordsRequest {
  /** 关键词列表。 */
  Keywords: AuditKeyword[];
  /** 直播审核词库Id。 */
  LibId: string;
}

declare interface CreateAuditKeywordsResponse {
  /** 添加成功的关键词 Id 列表。 */
  KeywordIds?: string[];
  /** 重复关键词列表。 */
  DupInfos?: AuditKeywordInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCasterInputPushUrlRequest {
  /** 导播台ID */
  CasterId: number;
  /** 请求生成推流地址的输入Index。允许范围[1,24]。 */
  InputIndex: number;
  /** 生成推流地址协议。范围[rtmp,webrtc]。注：获取webrtc推流地址时，需配合腾讯云快直播推流sdk才可成功推流。 */
  Protocol?: string;
}

declare interface CreateCasterInputPushUrlResponse {
  /** 生成可使用的推流地址。 */
  PushUrl?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCasterPgmFromPvwRequest {
  /** 导播台ID。 */
  CasterId: number;
}

declare interface CreateCasterPgmFromPvwResponse {
  /** 主监任务的rtmp协议预览地址。 注：该地址仅供预览，不可分发。 */
  PgmPlayUrl?: string;
  /** 注：该字段已废弃，请结合腾讯云直播播放地址生成策略生成cdn播放地址 */
  CdnPlayUrl?: string;
  /** 主监任务在腾讯云直播侧的流ID。 */
  CdnStreamId?: string;
  /** 主监任务的webrtc协议播放地址。 注：1.该预览地址仅作为预览，不可分发。2.webrtc播放地址需配合腾讯云快直播播放sdk使用。 */
  PgmWebRTCPlayUrl?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCasterPgmRequest {
  /** 导播台展示信息参数。 */
  PgmDisplayInfo: CasterDisplayInfo;
  /** 导播台ID。 */
  CasterId: number;
}

declare interface CreateCasterPgmResponse {
  /** 主监任务的rtmp协议预览地址。注：该地址仅供预览，不可分发。 */
  PgmPlayUrl?: string;
  /** 注：该字段已废弃，请结合腾讯云直播播放地址生成策略生成cdn播放地址。 */
  CdnPlayUrl?: string;
  /** 主监任务在腾讯云直播侧的流ID。 */
  CdnStreamId?: string;
  /** 主监任务的webrtc协议播放地址。注：1. 该预览地址仅作为预览，不可分发。2. webrtc播放地址需配合腾讯云快直播播放sdk使用。 */
  PgmWebRTCPlayUrl?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCasterPvwRequest {
  /** 导播台预监展示信息参数 */
  PvwDisplayInfo: CasterDisplayInfo;
  /** 导播台ID。 */
  CasterId: number;
}

declare interface CreateCasterPvwResponse {
  /** 预监任务的画面rtmp协议预览地址。注：该预览地址仅供画面预览，不可分发。 */
  PvwPlayUrl?: string;
  /** 预监任务的webrtc协议预览画面。注：1. 该预览地址仅供预览，不可分发。2. webrtc播放地址，需配合腾讯云快直播播放sdk使用 */
  PvwWebRTCPlayUrl?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCasterRequest {
  /** 导播台名称 */
  CasterName?: string;
  /** 导播台的描述最大允许长度256 */
  Description?: string;
  /** 导播台的过期时间戳。值为-1或unix时间戳。默认值为-1。当值为-1时，表示该导播台永不过期。当值为正常unix时间戳时，导播台将在该时间过期。导播台过期后，预监与主监画面将自动停止，转推自动停止。点播、直播url将停止转拉，推流url需自行停止推流。 */
  ExpireTime?: number;
  /** 导播台延时播放时间，单位为秒。默认为0，最大支持300秒 */
  DelayTime?: number;
  /** 导播台转场类型。默认为空。允许使用通过DescribeCasterTransitionTypes接口中查询到的转场类型。 */
  TransitionType?: string;
  /** 导播台主监输出的宽度，单位为像素。默认为1280，最大允许4096。 */
  PgmWidth?: number;
  /** 导播台主监输出的高度，单位为像素。默认为720，最大允许2160。 */
  PgmHeight?: number;
  /** 导播台主监输出的帧率。默认为0，表示随源输出。最大支持60。 */
  PgmFps?: number;
  /** 导播台主监输出的码率，单位为kbps。默认为0，表示随源的码率输出。最大允许10000kbps。 */
  PgmBitRate?: number;
  /** 导播台的计费类型。0 通用型 1 播单型。注： 本参数暂无作用。 */
  FeeType?: number;
  /** 导播台主监输出的音频码率，单位为kbps。可选项：[0, 128, 192, 256]默认值为0，表示随源的音频码率输出。 */
  PgmAudioBitRate?: number;
}

declare interface CreateCasterResponse {
  /** 导播台ID */
  CasterId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCommonMixStreamRequest {
  /** 混流会话（申请混流开始到取消混流结束）标识 ID。80字节以内，仅含字母、数字以及下划线的字符串。 */
  MixStreamSessionId: string;
  /** 混流输入流列表。 */
  InputStreamList: CommonMixInputParam[];
  /** 混流输出流参数。 */
  OutputParams: CommonMixOutputParams;
  /** 输入模板 ID，若设置该参数，将按默认模板布局输出，无需填入自定义位置参数。不填默认为0。两输入源支持10，20，30，40，50。三输入源支持310，390，391。四输入源支持410。五输入源支持510，590。六输入源支持610。 */
  MixStreamTemplateId?: number;
  /** 混流的特殊控制参数。如无特殊需求，无需填写。 */
  ControlParams?: CommonMixControlParams;
}

declare interface CreateCommonMixStreamResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateLiveCallbackRuleRequest {
  /** 推流域名。 */
  DomainName: string;
  /** 推流路径，与推流和播放地址中的AppName保持一致，默认为live。 */
  AppName: string;
  /** 模板ID。 */
  TemplateId: number;
}

declare interface CreateLiveCallbackRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateLiveCallbackTemplateRequest {
  /** 模板名称。长度上限：255字节。仅支持中文、英文、数字、_、-。 */
  TemplateName: string;
  /** 描述信息。长度上限：1024字节。仅支持中文、英文、数字、_、-。 */
  Description?: string;
  /** 开播回调 URL，相关协议文档：[事件消息通知](/document/product/267/32744)。 */
  StreamBeginNotifyUrl?: string;
  /** 断流回调 URL，相关协议文档：[事件消息通知](/document/product/267/32744)。 */
  StreamEndNotifyUrl?: string;
  /** 录制文件回调 URL，相关协议文档：[事件消息通知](/document/product/267/32744)。 */
  RecordNotifyUrl?: string;
  /** 录制状态回调 URL ，相关协议文档：[事件消息通知](/document/product/267/32744)。 */
  RecordStatusNotifyUrl?: string;
  /** 截图回调 URL，相关协议文档：[事件消息通知](/document/product/267/32744)。 */
  SnapshotNotifyUrl?: string;
  /** 鉴黄回调 URL ，相关协议文档：[事件消息通知](/document/product/267/32741)。 */
  PornCensorshipNotifyUrl?: string;
  /** 回调 Key，回调 URL 公用，回调签名详见事件消息通知文档。[事件消息通知](/document/product/267/32744)。 */
  CallbackKey?: string;
  /** 参数已弃用。 */
  StreamMixNotifyUrl?: string;
  /** 推流异常回调 URL。 */
  PushExceptionNotifyUrl?: string;
  /** 音频审核回调 URL。 */
  AudioAuditNotifyUrl?: string;
  /** 录制异常回调 URL。 */
  RecordExceptionNotifyUrl?: string;
  /** 录制异常回调级别，可选择：error、warning、info。 */
  RecordExceptionLevels?: string[];
}

declare interface CreateLiveCallbackTemplateResponse {
  /** 模板ID。 */
  TemplateId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateLivePadRuleRequest {
  /** 推流域名。 */
  DomainName: string;
  /** 模板 ID。 */
  TemplateId: number;
  /** 推流路径，与推流和播放地址中的AppName保持一致，默认为 live。 */
  AppName?: string;
  /** 流名称。注：如果本参数设置为非空字符串，规则将只对此推流起作用。 */
  StreamName?: string;
}

declare interface CreateLivePadRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateLivePadTemplateRequest {
  /** 模板名称。长度上限：255字节。仅支持中文、英文、数字、_、-。 */
  TemplateName: string;
  /** 垫片内容。 */
  Url: string;
  /** 描述信息。长度上限：1024字节。仅支持中文、英文、数字、_、-。 */
  Description?: string;
  /** 断流等待时间。取值范围：0-30000。单位：ms。 */
  WaitDuration?: number;
  /** 最大垫片时长。取值范围：0 - 正无穷。单位：ms。 */
  MaxDuration?: number;
  /** 垫片内容类型：1：图片，2：视频。默认值：1。 */
  Type?: number;
}

declare interface CreateLivePadTemplateResponse {
  /** 模板Id。 */
  TemplateId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateLivePullStreamTaskRequest {
  /** 拉流源的类型：PullLivePushLive -直播，PullVodPushLive -点播，PullPicPushLive -图片。 */
  SourceType: string;
  /** 拉流源 url 列表。SourceType 为直播（PullLivePushLive）只可以填1个，SourceType 为点播（PullVodPushLive）可以填多个，上限30个。当前支持的文件格式：flv，mp4，hls。当前支持的拉流协议：http，https，rtmp，rtmps，rtsp，srt。注意：1. 建议优先使用 flv 文件，对于 mp4 未交织好的文件轮播推流易产生卡顿以及因为频繁拉取导致源产生大量源出口带宽成本，可通过点播转码进行重新交织后再轮播，或提前创建任务并开启本地模式。2. 拒绝内网域名等攻击性拉流地址，如有使用，则做账号封禁处理。3. 源文件请保持时间戳正常交织递增，避免因源文件异常影响推流及播放。4. 视频编码格式仅支持: H264, H265。5. 音频编码格式仅支持: AAC。6. 点播源请使用小文件，尽量时长保持在1小时内，较大文件打开和续播耗时较久，耗时超过15秒会有无法正常转推风险。7. 避免使用低频存储的文件，该类文件因低频存储，拉取时容易出现慢速，影响拉转推质量。 */
  SourceUrls: string[];
  /** 推流域名。将拉取过来的流推到该域名。注意：如果目标地址为非云直播，且样式不同于云直播，请使用 ToUrl 传入完整推流地址，详细用法请参考 ToUrl 参数说明。 */
  DomainName: string;
  /** 推流路径。将拉取过来的流推到该路径。 */
  AppName: string;
  /** 推流名称。将拉取过来的流推到该流名称。 */
  StreamName: string;
  /** 开始时间。使用 UTC 格式时间，例如：2019-01-08T10:00:00Z。注意：北京时间值为 UTC 时间值 + 8 小时。 */
  StartTime: string;
  /** 结束时间，注意：1. 结束时间必须大于开始时间；2. 结束时间必须大于当前时间；3. 结束时间 和 开始时间 间隔必须小于30天。使用 UTC 格式时间，例如：2019-01-08T10:00:00Z。注意：北京时间值为 UTC 时间值 + 8 小时。 */
  EndTime: string;
  /** 任务操作人备注。 */
  Operator: string;
  /** 推流参数。推流时携带自定义参数。示例：bak=1&test=2 。 */
  PushArgs?: string;
  /** 选择需要回调的事件（不填则回调全部）：TaskStart：任务启动回调，TaskExit：任务停止回调，VodSourceFileStart：从点播源文件开始拉流回调，VodSourceFileFinish：从点播源文件拉流结束回调，ResetTaskConfig：任务更新回调。TaskAlarm: 用于告警事件通知，AlarmType 示例:PullFileUnstable - 文件拉取不稳定，PushStreamUnstable - 推流不稳定，PullFileFailed - 文件拉取出错，PushStreamFailed - 推流出现失败，FileEndEarly - 文件提前结束。 */
  CallbackEvents?: string[];
  /** 点播拉流转推循环次数。默认：-1。-1：无限循环，直到任务结束。0：不循环。>0：具体循环次数。次数和时间以先结束的为准。注意：该配置仅对拉流源为点播时生效。 */
  VodLoopTimes?: string;
  /** 点播更新SourceUrls后的播放方式：ImmediateNewSource：立即播放新的拉流源内容；ContinueBreakPoint：播放完当前正在播放的点播 url 后再使用新的拉流源播放。（旧拉流源未播放的点播 url 不会再播放）注意：该配置生效仅对变更前拉流源为点播时生效。 */
  VodRefreshType?: string;
  /** 自定义回调地址。拉流转推任务相关事件会回调到该地址。回调事件使用方法请查看：https://cloud.tencent.com/document/product/267/32744https://cloud.tencent.com/document/product/267/56208 */
  CallbackUrl?: string;
  /** 其他参数。示例: ignore_region 用于忽略传入地域, 内部按负载分配。 */
  ExtraCmd?: string;
  /** 自定义任务 ID。注：1. 该自定义 ID 为可选参数，如果传入，请确保该账号下传入的 ID 唯一。2. 该自定义 ID 用于防止重复发起请求时产生重复任务。后面也可以用 SpecifyTaskId 来修改或删除任务。 */
  SpecifyTaskId?: string;
  /** 任务描述，限制 512 字节。不可以使用特殊字符，如Unicode的特殊字符集。 */
  Comment?: string;
  /** 完整目标 URL 地址。用法注意：如果使用该参数来传完整目标地址，则 DomainName, AppName, StreamName 需要传入空字符串，任务将会使用该 ToUrl 参数指定的目标地址。使用该方式传入目标地址支持的协议有：rtmp、rtmps、rtsp、rtp、srt。注意：签名时间需要超过任务结束时间，避免因签名过期造成任务失败。 */
  ToUrl?: string;
  /** 指定播放文件索引。注意： 1. 从1开始，不大于SourceUrls中文件个数。2. 该偏移仅在首次轮播时有效。3. 提前创建的任务指定的偏移最长有效期为24小时，24小时后未开始的任务偏移失效。 */
  FileIndex?: number;
  /** 指定播放文件偏移。注意：1. 单位：秒，配合FileIndex使用。 */
  OffsetTime?: number;
  /** 备源的类型：PullLivePushLive -直播，PullVodPushLive -点播。注意：1. 仅当主源类型为直播源时，备源才会生效。2. 主直播源拉流中断时，自动使用备源进行拉流。3. 如果备源为点播文件时，则每次轮播完点播文件就检查主源是否恢复，如果主源恢复则自动切回到主源，否则继续拉备源。 */
  BackupSourceType?: string;
  /** 备源 URL。只允许填一个备源 URL */
  BackupSourceUrl?: string;
  /** 水印信息列表。注意：1. 最多支持4个不同位置的水印。2. 水印图片 URL 请使用合法外网可访问地址。3. 支持的水印图片格式：png，jpg，gif 等。 */
  WatermarkList?: PullPushWatermarkInfo[];
  /** 点播源是否启用本地推流模式，默认0，不启用。0 - 不启用。1 - 启用。注意：启用本地模式后，会将源列表中的 MP4 文件进行本地下载，优先使用本地已下载文件进行推流，提高点播源推流稳定性。使用本地下载文件推流时，会产生增值费用。 */
  VodLocalMode?: number;
  /** 录制模板 ID。 */
  RecordTemplateId?: string;
  /** 新的目标地址，用于任务同时推两路场景。 */
  BackupToUrl?: string;
  /** 直播转码模板，使用云直播的转码功能进行转码后再转推出去。转码模板需在云直播控制台创建。 */
  TranscodeTemplateName?: string;
}

declare interface CreateLivePullStreamTaskResponse {
  /** 任务 Id 。 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateLiveRecordRequest {
  /** 流名称。 */
  StreamName: string;
  /** 推流路径，与推流和播放地址中的 AppName保持一致，默认为 live。 */
  AppName?: string;
  /** 推流域名。多域名推流必须设置。 */
  DomainName?: string;
  /** 录制开始时间。中国标准时间，需要 URLEncode(rfc3986)。如 2017-01-01 10:10:01，编码为：2017-01-01+10%3a10%3a01。定时录制模式，必须设置该字段；实时视频录制模式，忽略该字段。 */
  StartTime?: string;
  /** 录制结束时间。中国标准时间，需要 URLEncode(rfc3986)。如 2017-01-01 10:30:01，编码为：2017-01-01+10%3a30%3a01。定时录制模式，必须设置该字段；实时录制模式，为可选字段。如果通过Highlight参数，设置录制为实时视频录制模式，其设置的结束时间不应超过当前时间+30分钟，如果设置的结束时间超过当前时间+30分钟或者小于当前时间或者不设置该参数，则实际结束时间为当前时间+30分钟。 */
  EndTime?: string;
  /** 录制类型。“video” : 音视频录制【默认】。“audio” : 纯音频录制。在定时录制模式或实时视频录制模式下，该参数均有效，不区分大小写。 */
  RecordType?: string;
  /** 录制文件格式。其值为：“flv”【默认】,“hls”,”mp4”,“aac”,”mp3”。在定时录制模式或实时视频录制模式下，该参数均有效，不区分大小写。 */
  FileFormat?: string;
  /** 开启实时视频录制模式标志。0：不开启实时视频录制模式，即定时录制模式【默认】。见[示例一](#.E7.A4.BA.E4.BE.8B1-.E5.88.9B.E5.BB.BA.E5.AE.9A.E6.97.B6.E5.BD.95.E5.88.B6.E4.BB.BB.E5.8A.A1)。1：开启实时视频录制模式。见[示例二](#.E7.A4.BA.E4.BE.8B2-.E5.88.9B.E5.BB.BA.E5.AE.9E.E6.97.B6.E5.BD.95.E5.88.B6.E4.BB.BB.E5.8A.A1)。 */
  Highlight?: number;
  /** 开启 A+B=C混流C流录制标志。0：不开启 A+B=C混流C流录制【默认】。1：开启 A+B=C混流C流录制。在定时录制模式或实时视频录制模式下，该参数均有效。 */
  MixStream?: number;
  /** 录制流参数。当前支持以下参数：record_interval - 录制分片时长，单位 秒，1800 - 7200。storage_time - 录制文件存储时长，单位 秒。eg. record_interval=3600&storage_time=2592000。注：参数需要url encode。在定时录制模式或实时视频录制模式下，该参数均有效。 */
  StreamParam?: string;
}

declare interface CreateLiveRecordResponse {
  /** 任务 ID，全局唯一标识录制任务。 */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateLiveRecordRuleRequest {
  /** 推流域名。 */
  DomainName: string;
  /** 模板 ID。 */
  TemplateId: number;
  /** 推流路径，与推流和播放地址中的AppName保持一致，默认为 live。 */
  AppName?: string;
  /** 流名称。注：如果本参数设置为非空字符串，规则将只对此推流起作用。 */
  StreamName?: string;
}

declare interface CreateLiveRecordRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateLiveRecordTemplateRequest {
  /** 模板名。仅支持中文、英文、数字、_、-。 */
  TemplateName: string;
  /** 描述信息。 */
  Description?: string;
  /** Flv录制参数，开启Flv录制时设置。 */
  FlvParam?: RecordParam;
  /** Hls录制参数，开启hls录制时设置。 */
  HlsParam?: RecordParam;
  /** Mp4录制参数，开启Mp4录制时设置。 */
  Mp4Param?: RecordParam;
  /** Aac录制参数，开启Aac录制时设置。 */
  AacParam?: RecordParam;
  /** 直播类型，默认 0。0：普通直播，1：慢直播。 */
  IsDelayLive?: number;
  /** HLS专属录制参数。 */
  HlsSpecialParam?: HlsSpecialParam;
  /** Mp3录制参数，开启Mp3录制时设置。 */
  Mp3Param?: RecordParam;
  /** 是否存储至 cos，值为 1 时表示存储至 cos。 */
  CosStore?: number;
  /** 是否去除水印，类型为慢直播时此参数无效。如果为false，则录制水印流或转码流；如果为true，则录制原始流。 */
  RemoveWatermark?: boolean;
  /** FLV 录制特殊参数。 */
  FlvSpecialParam?: FlvSpecialParam;
}

declare interface CreateLiveRecordTemplateResponse {
  /** 模板Id。 */
  TemplateId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateLiveSnapshotRuleRequest {
  /** 推流域名。 */
  DomainName: string;
  /** 模板 ID。 */
  TemplateId: number;
  /** 推流路径，与推流和播放地址中的 AppName 保持一致，默认为 live。 */
  AppName?: string;
  /** 流名称。注：如果本参数设置为非空字符串，规则将只对此推流起作用。 */
  StreamName?: string;
}

declare interface CreateLiveSnapshotRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateLiveSnapshotTemplateRequest {
  /** 模板名称。长度上限：255字节。仅支持中文、英文、数字、_、-。 */
  TemplateName: string;
  /** Cos 应用 ID。 */
  CosAppId: number;
  /** Cos Bucket名称。注：CosBucket参数值不能包含-[appid] 部分。 */
  CosBucket: string;
  /** Cos地区。 */
  CosRegion: string;
  /** 描述信息。长度上限：1024字节。仅支持中文、英文、数字、_、-。 */
  Description?: string;
  /** 截图间隔，单位s，默认10s。范围： 2s ~ 300s。 */
  SnapshotInterval?: number;
  /** 截图宽度。默认：0（原始宽）。范围：0-3000 。 */
  Width?: number;
  /** 截图高度。默认：0（原始高）。范围：0-2000 。 */
  Height?: number;
  /** 是否开启鉴黄，0：不开启，1：开启。默认：0。 */
  PornFlag?: number;
  /** Cos Bucket文件夹前缀。如不传，实际按默认值/{Year}-{Month}-{Day}生效 */
  CosPrefix?: string;
  /** Cos 文件名称。如不传，实际按默认值{StreamID}-screenshot-{Hour}-{Minute}-{Second}-{Width}x{Height}{Ext}生效 */
  CosFileName?: string;
}

declare interface CreateLiveSnapshotTemplateResponse {
  /** 模板Id。 */
  TemplateId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateLiveStreamMonitorRequest {
  /** 监播任务的输出信息。 */
  OutputInfo: LiveStreamMonitorOutputInfo;
  /** 待监播的输入流信息列表。 */
  InputList: LiveStreamMonitorInputInfo[];
  /** 监播任务名称。字段长度小于128字节（一个汉字两个字节）。 */
  MonitorName?: string;
  /** 监播事件通知策略。不填默认为没有任何通知。 */
  NotifyPolicy?: LiveStreamMonitorNotifyPolicy;
  /** 智能语音识别语种设置：0 关闭 1 中文 2 英文 3 日文 4 韩文。 */
  AsrLanguage?: number;
  /** 智能文字识别语种设置：0 关闭 1 中、英文。 */
  OcrLanguage?: number;
  /** 智能语音识别的输入列表，若开启语音识别则必填。（第1条输入流index为1） */
  AiAsrInputIndexList?: number[];
  /** 智能文字识别的输入列表，若开启文字识别则必填。（第1条输入流index为1） */
  AiOcrInputIndexList?: number[];
  /** 是否开启断流检测。 */
  CheckStreamBroken?: number;
  /** 是否开启低帧率检测。 */
  CheckStreamLowFrameRate?: number;
  /** 是否存储监播事件到监播报告，以及是否允许查询监播报告。 */
  AllowMonitorReport?: number;
  /** 是否开启格式诊断。 */
  AiFormatDiagnose?: number;
  /** 是否开启内容质检。 */
  AiQualityControl?: number;
  /** 导播台监播对应的导播台场次id。 */
  CasterId?: string;
  /** 拉流转推监播任务对应的拉流转推场次id */
  PullPushTaskId?: string;
}

declare interface CreateLiveStreamMonitorResponse {
  /** 监播任务ID。 */
  MonitorId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateLiveTimeShiftRuleRequest {
  /** 推流域名。 */
  DomainName: string;
  /** 推流路径，与推流和播放地址中的AppName保持一致，默认为 live。注：如果需要对所有AppName生效，可填写“*”。 */
  AppName: string;
  /** 流名称。注：如果本参数设置为非空字符串，规则将只对此推流起作用。如果需要对所有StreamName生效，可填写“*”。 */
  StreamName: string;
  /** 模板 ID。 */
  TemplateId: number;
}

declare interface CreateLiveTimeShiftRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateLiveTimeShiftTemplateRequest {
  /** 模板名称。长度上限：255字节。仅支持中文、英文、数字、_、-。 */
  TemplateName: string;
  /** 时移时长。单位：s。 */
  Duration: number;
  /** 描述信息。仅支持中文、英文、数字、_、-。 */
  Description?: string;
  /** 地域。Mainland：中国大陆。Overseas：海外及港澳台地区。默认值：Mainland。 */
  Area?: string;
  /** 分片时长。可取3-10。单位：s。默认值：5。 */
  ItemDuration?: number;
  /** 是否去除水印。传true则将录制原始流。默认值：false。 */
  RemoveWatermark?: boolean;
  /** 转码流id列表。此参数仅在 RemoveWatermark为false时生效。 */
  TranscodeTemplateIds?: number[];
}

declare interface CreateLiveTimeShiftTemplateResponse {
  /** 模板Id。 */
  TemplateId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateLiveTranscodeRuleRequest {
  /** 播放域名。 */
  DomainName: string;
  /** 推流路径，与推流和播放地址中的AppName保持一致。如果只绑定域名，则此处填""。 */
  AppName: string;
  /** 流名称。已废弃该字段，请传入空字符串。 */
  StreamName: string;
  /** 指定已有的模板Id。 */
  TemplateId: number;
}

declare interface CreateLiveTranscodeRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateLiveTranscodeTemplateRequest {
  /** 模板名称，例： 900p 仅支持字母和数字的组合。长度限制： 标准转码：1-10个字符 极速高清转码：3-10个字符 */
  TemplateName: string;
  /** 视频码率。范围：0kbps - 8000kbps。0为保持原始码率。注: 转码模板有码率唯一要求，最终保存的码率可能与输入码率有所差别。 */
  VideoBitrate: number;
  /** 音频编码：aac，默认aac。注意：当前该参数未生效，待后续支持！ */
  Acodec?: string;
  /** 音频码率，默认0。范围：0-500。 */
  AudioBitrate?: number;
  /** 视频编码：h264/h265/origin，默认origin。origin: 保持原始编码格式 */
  Vcodec?: string;
  /** 模板描述。 */
  Description?: string;
  /** 是否保留视频，0：否，1：是。默认1。 */
  NeedVideo?: number;
  /** 宽，默认0。范围[0-3000]数值必须是2的倍数，0是原始宽度 */
  Width?: number;
  /** 是否保留音频，0：否，1：是。默认1。 */
  NeedAudio?: number;
  /** 高，默认0。范围[0-3000]数值必须是2的倍数，0是原始高度。极速高清模板（AiTransCode = 1 的时候）必须传。 */
  Height?: number;
  /** 帧率，默认0。范围0-60fps */
  Fps?: number;
  /** 关键帧间隔，单位：秒。默认原始的间隔范围2-6 */
  Gop?: number;
  /** 旋转角度，默认0。可取值：0，90，180，270 */
  Rotate?: number;
  /** 编码质量：baseline/main/high。默认baseline */
  Profile?: string;
  /** 当设置的码率>原始码率时，是否以原始码率为准。0：否， 1：是默认 0。 */
  BitrateToOrig?: number;
  /** 当设置的高度>原始高度时，是否以原始高度为准。0：否， 1：是默认 0。 */
  HeightToOrig?: number;
  /** 当设置的帧率>原始帧率时，是否以原始帧率为准。0：否， 1：是默认 0。 */
  FpsToOrig?: number;
  /** 是否是极速高清模板，0：否，1：是。默认0。 */
  AiTransCode?: number;
  /** 极速高清视频码率压缩比。极速高清目标码率=VideoBitrate * (1-AdaptBitratePercent)取值范围：0.0到0.5 */
  AdaptBitratePercent?: number;
  /** 是否以短边作为高度，0：否，1：是。默认0。 */
  ShortEdgeAsHeight?: number;
  /** DRM 加密类型，可选值：fairplay、normalaes、widevine。不传递或者为空字符串，清空之前的DRM配置。 */
  DRMType?: string;
  /** DRM 加密项，可选值：AUDIO、SD、HD、UHD1、UHD2，后四个为一组，同组中的内容只能选一个。不传递或者为空字符串，清空之前的DRM配置。 */
  DRMTracks?: string;
  /** 是否创建自适应码率，默认值 0。0：否。1：是。 */
  IsAdaptiveBitRate?: number;
  /** 自适应码率，子转码模板信息，当 IsAdaptiveBitRate 为 1 时有效。 */
  AdaptiveChildren?: ChildTemplateInfo[];
}

declare interface CreateLiveTranscodeTemplateResponse {
  /** 模板Id。 */
  TemplateId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateLiveWatermarkRuleRequest {
  /** 推流域名。 */
  DomainName: string;
  /** 推流路径，与推流和播放地址中的AppName保持一致，默认为live。 */
  AppName: string;
  /** 流名称。 */
  StreamName: string;
  /** 水印Id，即调用[AddLiveWatermark](/document/product/267/30154)接口返回的WatermarkId。 */
  TemplateId: number;
}

declare interface CreateLiveWatermarkRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreatePullStreamConfigRequest {
  /** 源 Url ，用于拉流的地址。目前可支持直播流及点播文件。注意：1. 多个点播url之间使用空格拼接。2. 目前上限支持10个url。3. 目前不支持https协议。4. 支持拉流文件格式：flv，rtmp，hls，mp4。 */
  FromUrl: string;
  /** 目的 Url ，用于推流的地址，目前限制该目标地址为腾讯域名。仅支持：rtmp 协议。 */
  ToUrl: string;
  /** 选择完成转拉推的服务所在区域:1-深圳，2-上海，3-天津，4-中国香港。 */
  AreaId: number;
  /** 选择完成转拉推服务使用的运营商网络：1-电信，2-移动，3-联通，4-其他。注：AreaId 为4的时候，IspId 只能为其他。 */
  IspId: number;
  /** 开始时间。使用 UTC 格式时间，例如：2019-01-08T10:00:00Z。注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732)。 */
  StartTime: string;
  /** 结束时间，注意：1. 结束时间必须大于开始时间；2. 结束时间和开始时间必须大于当前时间；3. 结束时间 和 开始时间 间隔必须小于七天。使用 UTC 格式时间，例如：2019-01-08T10:00:00Z。注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732)。 */
  EndTime: string;
}

declare interface CreatePullStreamConfigResponse {
  /** 配置成功后的 ID。 */
  ConfigId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateRecordTaskRequest {
  /** 流名称。 */
  StreamName: string;
  /** 推流域名。 */
  DomainName: string;
  /** 推流路径。 */
  AppName: string;
  /** 录制任务结束时间，Unix时间戳。设置时间必须大于StartTime及当前时间，且小于当前时间+7天。 */
  EndTime: number;
  /** 录制任务开始时间，Unix时间戳。如果不填表示立即启动录制。EndTime - StartTime不能超过24小时。 */
  StartTime?: number;
  /** 推流类型，默认0。取值：0-直播推流。1-合成流，即 A+B=C 类型混流。 */
  StreamType?: number;
  /** 录制模板ID，CreateLiveRecordTemplate 返回值。如果不填或者传入错误ID，则默认录制HLS格式、永久存储。 */
  TemplateId?: number;
  /** 扩展字段，暂无定义。默认为空。 */
  Extension?: string;
}

declare interface CreateRecordTaskResponse {
  /** 任务ID，全局唯一标识录制任务。返回TaskId字段说明录制任务创建成功。 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateScreenshotTaskRequest {
  /** 流名称。 */
  StreamName: string;
  /** 推流域名。 */
  DomainName: string;
  /** 推流路径。 */
  AppName: string;
  /** 截图任务结束时间，Unix时间戳。设置时间必须大于StartTime及当前时间，且小于当前时间+7天。 */
  EndTime: number;
  /** 截图模板ID，CreateLiveSnapshotTemplate 返回值。如果传入错误ID，则不拉起截图。 */
  TemplateId: number;
  /** 截图任务开始时间，Unix时间戳。如果不填表示立即启动截图。EndTime - StartTime不能超过24小时。 */
  StartTime?: number;
  /** 推流类型，默认0。取值：0-直播推流。1-合成流，即 A+B=C 类型混流。 */
  StreamType?: number;
  /** 扩展字段，暂无定义。默认为空。 */
  Extension?: string;
}

declare interface CreateScreenshotTaskResponse {
  /** 任务ID，全局唯一标识截图任务。返回TaskId字段说明截图任务创建成功。 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteAuditKeywordsRequest {
  /** 要删除的关键词 Id 列表。 */
  KeywordIds: string[];
  /** 关键词库 Id。 */
  LibId: string;
}

declare interface DeleteAuditKeywordsResponse {
  /** 成功删除关键词的数量。 */
  SuccessCount?: number;
  /** 关键词详情列表。 */
  Infos?: AuditKeywordDeleteDetail[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteCasterInputInfoRequest {
  /** 导播台ID */
  CasterId: number;
  /** 导播台输入Index。范围[0,20]注：该Index对应的输入源需存在。 */
  InputIndex: number;
}

declare interface DeleteCasterInputInfoResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteCasterLayoutInfoRequest {
  /** 导播台ID。 */
  CasterId: number;
  /** 要删除的布局Index。注：待删除的Index对应的布局需存在。 */
  LayoutIndex: number;
}

declare interface DeleteCasterLayoutInfoResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteCasterMarkPicInfoRequest {
  /** 导播台ID。 */
  CasterId: number;
  /** 需要删除的水印Index。 */
  MarkPicIndex: number;
}

declare interface DeleteCasterMarkPicInfoResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteCasterMarkWordInfoRequest {
  /** 导播台ID。 */
  CasterId: number;
  /** 需要删除的文字水印Index。 */
  MarkWordIndex: number;
}

declare interface DeleteCasterMarkWordInfoResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteCasterOutputInfoRequest {
  /** 导播台ID。 */
  CasterId: number;
  /** 待删除的推流信息Index。注：删除时，该Index对应的配置需要存在。 */
  OutputIndex: number;
}

declare interface DeleteCasterOutputInfoResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteCasterRequest {
  /** 待删除的导播台ID */
  CasterId: number;
}

declare interface DeleteCasterResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteLiveCallbackRuleRequest {
  /** 推流域名。 */
  DomainName: string;
  /** 推流路径，与推流和播放地址中的 AppName 保持一致，默认为 live。 */
  AppName: string;
}

declare interface DeleteLiveCallbackRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteLiveCallbackTemplateRequest {
  /** 模板 ID。1. 在创建回调模板接口 [CreateLiveCallbackTemplate](/document/product/267/32637) 调用的返回值中获取模板 ID。2. 可以从接口 [DescribeLiveCallbackTemplates](/document/product/267/32632) 查询已经创建的过的模板列表。 */
  TemplateId: number;
}

declare interface DeleteLiveCallbackTemplateResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteLiveDomainRequest {
  /** 要删除的域名 */
  DomainName: string;
  /** 类型。0-推流，1-播放 */
  DomainType: number;
}

declare interface DeleteLiveDomainResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteLivePadRuleRequest {
  /** 推流域名。域名+AppName+StreamName唯一标识单个转码规则，如需删除需要强匹配，例如AppName为空也需要传空字符串进行强匹配。 */
  DomainName: string;
  /** 推流路径，与推流和播放地址中的AppName保持一致，默认为 live。域名+AppName+StreamName唯一标识单个转码规则，如需删除需要强匹配，例如AppName为空也需要传空字符串进行强匹配。 */
  AppName: string;
  /** 流名称。域名+AppName+StreamName唯一标识单个转码规则，如需删除需要强匹配，例如AppName为空也需要传空字符串进行强匹配。 */
  StreamName: string;
  /** 直播垫片模板id。 */
  TemplateId: number;
}

declare interface DeleteLivePadRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteLivePadTemplateRequest {
  /** 模板 ID。 */
  TemplateId: number;
}

declare interface DeleteLivePadTemplateResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteLivePullStreamTaskRequest {
  /** 任务 Id。 */
  TaskId: string;
  /** 操作人姓名。 */
  Operator: string;
  /** 指定任务 ID。注意：用于删除使用自定义任务 ID 创建的任务。 */
  SpecifyTaskId?: string;
}

declare interface DeleteLivePullStreamTaskResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteLiveRecordRequest {
  /** 流名称。 */
  StreamName: string;
  /** 任务ID，由CreateLiveRecord接口返回。 */
  TaskId: number;
}

declare interface DeleteLiveRecordResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteLiveRecordRuleRequest {
  /** 推流域名。域名+AppName+StreamName唯一标识单个转码规则，如需删除需要强匹配，例如AppName为空也需要传空字符串进行强匹配。 */
  DomainName: string;
  /** 推流路径，与推流和播放地址中的AppName保持一致，默认为 live。域名+AppName+StreamName唯一标识单个转码规则，如需删除需要强匹配，例如AppName为空也需要传空字符串进行强匹配。 */
  AppName?: string;
  /** 流名称。域名+AppName+StreamName唯一标识单个转码规则，如需删除需要强匹配，例如AppName为空也需要传空字符串进行强匹配。 */
  StreamName?: string;
}

declare interface DeleteLiveRecordRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteLiveRecordTemplateRequest {
  /** DescribeRecordTemplates接口获取到的模板 ID。 */
  TemplateId: number;
}

declare interface DeleteLiveRecordTemplateResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteLiveSnapshotRuleRequest {
  /** 推流域名。 */
  DomainName: string;
  /** 推流路径，与推流和播放地址中的 AppName 保持一致，默认为 live。 */
  AppName?: string;
  /** 流名称。 */
  StreamName?: string;
}

declare interface DeleteLiveSnapshotRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteLiveSnapshotTemplateRequest {
  /** 模板 ID。1. 在创建截图模板接口 [CreateLiveSnapshotTemplate](/document/product/267/32624) 调用的返回值中获取。2. 可以从接口 [DescribeLiveSnapshotTemplates](/document/product/267/32619) 中查询已创建的截图模板列表。 */
  TemplateId: number;
}

declare interface DeleteLiveSnapshotTemplateResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteLiveStreamMonitorRequest {
  /** 监播任务ID */
  MonitorId: string;
}

declare interface DeleteLiveStreamMonitorResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteLiveTimeShiftRuleRequest {
  /** 推流域名。域名+AppName+StreamName唯一标识单个时移规则，如需删除需要强匹配，例如AppName为空也需要传空字符串进行强匹配。 */
  DomainName: string;
  /** 推流路径，与推流和播放地址中的AppName保持一致，默认为 live。域名+AppName+StreamName唯一标识单个时移规则，如需删除需要强匹配，例如AppName为空也需要传空字符串进行强匹配。 */
  AppName: string;
  /** 流名称。域名+AppName+StreamName唯一标识单个时移规则，如需删除需要强匹配，例如AppName为空也需要传空字符串进行强匹配。 */
  StreamName: string;
}

declare interface DeleteLiveTimeShiftRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteLiveTimeShiftTemplateRequest {
  /** 模板 ID。 */
  TemplateId: number;
}

declare interface DeleteLiveTimeShiftTemplateResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteLiveTranscodeRuleRequest {
  /** 播放域名。 */
  DomainName: string;
  /** 推流路径，与推流和播放地址中的AppName保持一致，默认为 live。 */
  AppName: string;
  /** 流名称。 */
  StreamName: string;
  /** 模板ID。 */
  TemplateId: number;
}

declare interface DeleteLiveTranscodeRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteLiveTranscodeTemplateRequest {
  /** 模板 ID。1. 在创建转码模板接口 [CreateLiveTranscodeTemplate](/document/product/267/32646) 调用的返回值中获取模板 ID。2. 可以从接口 [DescribeLiveTranscodeTemplates](/document/product/267/32641) 查询已经创建过的模板列表。 */
  TemplateId: number;
}

declare interface DeleteLiveTranscodeTemplateResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteLiveWatermarkRequest {
  /** 水印 ID。在添加水印接口 [AddLiveWatermark](/document/product/267/30154) 调用返回值中获取水印 ID。或DescribeLiveWatermarks接口返回的水印ID。 */
  WatermarkId: number;
}

declare interface DeleteLiveWatermarkResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteLiveWatermarkRuleRequest {
  /** 推流域名。 */
  DomainName: string;
  /** 推流路径。与推流和播放地址中的 AppName 保持一致，默认为live。 */
  AppName: string;
  /** 流名称。 */
  StreamName: string;
}

declare interface DeleteLiveWatermarkRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeletePullStreamConfigRequest {
  /** 配置 ID。1. 在添加拉流配置接口 [CreatePullStreamConfig](/document/api/267/30159) 调用返回值中获取配置 ID。2. 可以从接口 [DescribePullStreamConfigs](/document/api/267/30158) 中查询已创建过的拉流配置列表。 */
  ConfigId: string;
}

declare interface DeletePullStreamConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteRecordTaskRequest {
  /** 任务ID，CreateRecordTask返回。删除TaskId指定的录制任务。 */
  TaskId: string;
}

declare interface DeleteRecordTaskResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteScreenshotTaskRequest {
  /** 任务ID，CreateScreenshotTask返回。删除TaskId指定的截图任务。 */
  TaskId: string;
}

declare interface DeleteScreenshotTaskResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAllStreamPlayInfoListRequest {
  /** 查询时间点，精确到分钟粒度，接口查询支持两种时间格式：1）YYYY-MM-DDThh:mm:ssZ：UTC时间格式，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/267/38543)。2）YYYY-MM-DD hh:mm:ss：使用此格式时，默认代表北京时间。支持最近1个月的数据查询，数据延迟为5分钟左右，如果要查询实时的数据，建议传递5分钟前的整点时间点。 */
  QueryTime: string;
  /** 播放域名列表，若不填，表示总体数据。 */
  PlayDomains?: string[];
}

declare interface DescribeAllStreamPlayInfoListResponse {
  /** 查询时间点，回传的输入参数中的查询时间。 */
  QueryTime?: string;
  /** 数据信息列表。 */
  DataInfoList?: MonitorStreamPlayInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAreaBillBandwidthAndFluxListRequest {
  /** 起始时间点，格式为yyyy-mm-dd HH:MM:SS。 */
  StartTime: string;
  /** 结束时间点，格式为yyyy-mm-dd HH:MM:SS，起始和结束时间跨度不支持超过1天。 */
  EndTime: string;
  /** 直播播放域名，若不填，表示总体数据。 */
  PlayDomains?: string[];
}

declare interface DescribeAreaBillBandwidthAndFluxListResponse {
  /** 明细数据信息。 */
  DataInfoList: BillAreaInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAuditKeywordsRequest {
  /** 获取偏移量。 */
  Offset: number;
  /** 单页条数，最大为100条，超过则按100条返回。 */
  Limit: number;
  /** 关键词库 Id。 */
  LibId: string;
  /** 关键词搜索字段。为空字符串时忽略。 */
  Content: string;
  /** 标签类别搜索。 */
  Labels?: number[];
}

declare interface DescribeAuditKeywordsResponse {
  /** 关键词总条数。 */
  Total?: number;
  /** 关键词详情列表。 */
  Infos?: AuditKeywordInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBackupStreamListRequest {
  /** 流名称，用于精确查询。 */
  StreamName?: string;
}

declare interface DescribeBackupStreamListResponse {
  /** 主备流分组信息列表。 */
  StreamInfoList?: BackupStreamGroupInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBillBandwidthAndFluxListRequest {
  /** 起始时间点，接口查询支持两种时间格式：1）YYYY-MM-DDThh:mm:ssZ：UTC时间格式，详见IOS日期格式说明文档: https://cloud.tencent.com/document/product/266/11732 */
  StartTime: string;
  /** 结束时间点，接口查询支持两种时间格式：1）YYYY-MM-DDThh:mm:ssZ：UTC时间格式，详见IOS日期格式说明文档: https://cloud.tencent.com/document/product/266/11732 */
  EndTime: string;
  /** 直播播放域名，若不填，表示总体数据。 */
  PlayDomains?: string[];
  /** 可选值：Mainland：查询国内数据，Oversea：则查询国外数据，默认：查询国内+国外的数据。注：LEB（快直播）只支持国内+国外数据查询。 */
  MainlandOrOversea?: string;
  /** 数据粒度，支持如下粒度：5：5分钟粒度，（跨度不支持超过1天），60：1小时粒度（跨度不支持超过一个月），1440：天粒度（跨度不支持超过一个月）。默认值：5。 */
  Granularity?: number;
  /** 服务名称，可选值包括LVB(标准直播)，LEB(快直播)，不填则查LVB+LEB总值。 */
  ServiceName?: string;
  /** 大区，映射表如下：China Mainland 中国大陆Asia Pacific I 亚太一区Asia Pacific II 亚太二区Asia Pacific III 亚太三区Europe 欧洲North America 北美South America 南美Middle East 中东Africa 非洲。 */
  RegionNames?: string[];
}

declare interface DescribeBillBandwidthAndFluxListResponse {
  /** 峰值带宽所在时间点，接口返回支持两种时间格式(与接口请求传递的时间格式一致)：1）YYYY-MM-DDThh:mm:ssZ：UTC时间格式，详见IOS日期格式说明文档: https://cloud.tencent.com/document/product/266/11732 */
  PeakBandwidthTime?: string;
  /** 峰值带宽，单位是Mbps。 */
  PeakBandwidth?: number;
  /** 95峰值带宽所在时间点，接口返回支持两种时间格式(与接口请求传递的时间格式一致)：1）YYYY-MM-DDThh:mm:ssZ：UTC时间格式，详见IOS日期格式说明文档: https://cloud.tencent.com/document/product/266/11732 */
  P95PeakBandwidthTime?: string;
  /** 95峰值带宽，单位是Mbps。 */
  P95PeakBandwidth?: number;
  /** 总流量，单位是MB。 */
  SumFlux?: number;
  /** 明细数据信息。 */
  DataInfoList?: BillDataInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCallbackRecordsListRequest {
  /** 起始时间点，接口查询支持两种时间格式：1）YYYY-MM-DDThh:mm:ssZ：UTC时间格式，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/267/38543)2）YYYY-MM-DD hh:mm:ss：使用此格式时，默认代表北京时间。 */
  StartTime: string;
  /** 结束时间点，接口查询支持两种时间格式：1）YYYY-MM-DDThh:mm:ssZ：UTC时间格式，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/267/38543)2）YYYY-MM-DD hh:mm:ss：使用此格式时，默认代表北京时间。查询的起始和结束时间跨度不支持超过1天。仅支持查询最近14天的数据。 */
  EndTime: string;
  /** 流名称，精确匹配。 */
  StreamName: string;
  /** 页码。 */
  PageNum: number;
  /** 每页条数。 */
  PageSize: number;
  /** 事件类型。0: "断流",1: "推流",100: "录制"200: "截图回调"。 */
  EventType?: number;
  /** 回调结果。0为成功，其他为失败。 */
  ResultCode?: number;
}

declare interface DescribeCallbackRecordsListResponse {
  /** 回调事件列表。 */
  DataInfoList?: CallbackEventInfo[];
  /** 页码。 */
  PageNum?: number;
  /** 每页条数。 */
  PageSize?: number;
  /** 总条数。 */
  TotalNum?: number;
  /** 总页数。 */
  TotalPage?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCasterDisplayInfoRequest {
  /** 导播台ID */
  CasterId: number;
}

declare interface DescribeCasterDisplayInfoResponse {
  /** 导播台状态0：停止状态，无预监，无主监 1：无预监，有主监 2：有预监，无主监 3：有预监，有主监 */
  Status?: number;
  /** 预监使用的展示参数。 */
  PvwDisplayInfo?: CasterDisplayInfo;
  /** 主监使用的展示参数。 */
  PgmDisplayInfo?: CasterDisplayInfo;
  /** 启动直播的时间，值为unix时间戳。 */
  StartLiveTime?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCasterInputInfosRequest {
  /** 导播台ID */
  CasterId: number;
}

declare interface DescribeCasterInputInfosResponse {
  /** 导播台输入源信息列表。 */
  InputInfos?: CasterInputInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCasterLayoutInfosRequest {
  /** 导播台ID。 */
  CasterId: number;
}

declare interface DescribeCasterLayoutInfosResponse {
  /** 导播台的布局列表。 */
  LayoutInfos?: CasterLayoutInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCasterListRequest {
}

declare interface DescribeCasterListResponse {
  /** 用户对应的导播台简要信息列表 */
  CasterList?: CasterBriefInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCasterMarkPicInfosRequest {
  /** 导播台ID。 */
  CasterId: number;
}

declare interface DescribeCasterMarkPicInfosResponse {
  /** 导播台的水印信息列表。 */
  MarkPicInfos?: CasterMarkPicInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCasterMarkWordInfosRequest {
  /** 导播台ID。 */
  CasterId: number;
}

declare interface DescribeCasterMarkWordInfosResponse {
  /** 导播台的文本信息列表。 */
  MarkWordInfos?: CasterMarkWordInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCasterOutputInfosRequest {
  /** 导播台ID。 */
  CasterId: number;
}

declare interface DescribeCasterOutputInfosResponse {
  /** 导播台的推流信息列表。 */
  OutputInfos?: CasterOutputInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCasterPlayUrlRequest {
  /** 导播台ID */
  CasterId: number;
  /** 请求播放url的类型。取值范围[1，2，3]1：获取输入源的播放url2：获取pvw的播放url3：获取pgm的播放url */
  PlayUrlType: number;
  /** 仅在PlayUrlType为1时生效，此时该参数表示请求的输入源Index。注：对应的输入源必须存在。 */
  PlayUrlIndex?: number;
}

declare interface DescribeCasterPlayUrlResponse {
  /** 播放url。当导播台不存在预监或主监时，若请求预监或主监的播放地址，该字段为空。 */
  PlayUrl?: string;
  /** webrtc协议播放地址。当导播台不存在预监或主监时，若请求预监或主监的webrtc播放地址，该字段为空。注：webrtc协议播放地址需配合腾讯云快直播播放sdk方可使用。 */
  WebRTCPlayUrl?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCasterRequest {
  /** 需查询的导播台ID */
  CasterId: number;
}

declare interface DescribeCasterResponse {
  /** 导播台信息 */
  CasterInfo?: CasterInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCasterTransitionTypesRequest {
  /** 导播台ID */
  CasterId: number;
}

declare interface DescribeCasterTransitionTypesResponse {
  /** 转场信息列表 */
  TransitionTypes?: TransitionTypeInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCasterUserStatusRequest {
}

declare interface DescribeCasterUserStatusResponse {
  /** 0: 未开通导播台1:开通了导播台，且处于正常状态2:开通了导播台，但处于欠费状态3:开通了导播台，但处于封禁状态 */
  UserStatus: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeConcurrentRecordStreamNumRequest {
  /** 直播类型，SlowLive：慢直播。NormalLive：普通直播。 */
  LiveType: string;
  /** 起始时间点，接口查询支持两种时间格式：1）YYYY-MM-DDThh:mm:ssZ：UTC时间格式，详见IOS日期格式说明文档: https://cloud.tencent.com/document/product/266/11732 */
  StartTime: string;
  /** 结束时间点，接口查询支持两种时间格式：1）YYYY-MM-DDThh:mm:ssZ：UTC时间格式，详见IOS日期格式说明文档: https://cloud.tencent.com/document/product/266/11732 */
  EndTime: string;
  /** 如果为空，查询所有地区数据；如果为“Mainland”，查询国内数据；如果为“Oversea”，则查询国外数据。 */
  MainlandOrOversea?: string;
  /** 推流域名列表，不填表示总体数据。 */
  PushDomains?: string[];
}

declare interface DescribeConcurrentRecordStreamNumResponse {
  /** 统计信息列表。 */
  DataInfoList?: ConcurrentRecordStreamNum[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDeliverBandwidthListRequest {
  /** 起始时间点，接口查询支持两种时间格式：1）YYYY-MM-DDThh:mm:ssZ：UTC时间格式，详见IOS日期格式说明文档: https://cloud.tencent.com/document/product/266/11732 */
  StartTime: string;
  /** 结束时间点，接口查询支持两种时间格式：1）YYYY-MM-DDThh:mm:ssZ：UTC时间格式，详见IOS日期格式说明文档: https://cloud.tencent.com/document/product/266/11732 */
  EndTime: string;
}

declare interface DescribeDeliverBandwidthListResponse {
  /** 转推计费带宽数据 */
  DataInfoList?: BandwidthInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDeliverLogDownListRequest {
}

declare interface DescribeDeliverLogDownListResponse {
  /** 日志信息列表。 */
  LogInfoList?: PushLogInfo[];
  /** 总条数。 */
  TotalNum?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeGroupProIspPlayInfoListRequest {
  /** 起始时间点，使用UTC格式时间，例如：2019-01-08T10:00:00Z。注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/267/38543)。 */
  StartTime: string;
  /** 结束时间点，使用UTC格式时间，例如：2019-01-08T10:00:00Z。注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/267/38543)。时间跨度在（0,3小时]，支持最近1个月数据查询。 */
  EndTime: string;
  /** 播放域名，默认为不填，表示求总体数据。 */
  PlayDomains?: string[];
  /** 省份列表，默认不填，则返回各省份的数据。 */
  ProvinceNames?: string[];
  /** 运营商列表，默认不填，则返回整个运营商的数据。 */
  IspNames?: string[];
  /** 国内还是国外，如果为空，查询所有地区数据；如果为“Mainland”，查询国内数据；如果为“Oversea”，则查询国外数据。 */
  MainlandOrOversea?: string;
}

declare interface DescribeGroupProIspPlayInfoListResponse {
  /** 数据内容。 */
  DataInfoList?: GroupProIspDataInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeHttpStatusInfoListRequest {
  /** 起始时间，使用UTC格式时间，例如：2019-01-08T10:00:00Z。注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/267/38543)。 */
  StartTime: string;
  /** 结束时间，使用UTC格式时间，例如：2019-01-08T10:00:00Z。注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/267/38543)。 */
  EndTime: string;
  /** 播放域名列表。 */
  PlayDomains?: string[];
}

declare interface DescribeHttpStatusInfoListResponse {
  /** 播放状态码列表。 */
  DataInfoList?: HttpStatusData[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLiveCallbackRulesRequest {
}

declare interface DescribeLiveCallbackRulesResponse {
  /** 规则信息列表。 */
  Rules?: CallBackRuleInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLiveCallbackTemplateRequest {
  /** 模板 ID。1. 在创建回调模板接口 [CreateLiveCallbackTemplate](/document/product/267/32637) 调用的返回值中获取模板 ID。2. 可以从接口 [DescribeLiveCallbackTemplates](/document/product/267/32632) 查询已经创建的过的模板列表。 */
  TemplateId: number;
}

declare interface DescribeLiveCallbackTemplateResponse {
  /** 回调模板信息。 */
  Template?: CallBackTemplateInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLiveCallbackTemplatesRequest {
}

declare interface DescribeLiveCallbackTemplatesResponse {
  /** 模板信息列表。 */
  Templates?: CallBackTemplateInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLiveCertRequest {
  /** DescribeLiveCerts接口获取到的证书Id。 */
  CertId: number;
}

declare interface DescribeLiveCertResponse {
  /** 证书信息。 */
  CertInfo?: CertInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLiveCertsRequest {
}

declare interface DescribeLiveCertsResponse {
  /** 证书信息列表。 */
  CertInfoSet?: CertInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLiveCloudEffectListRequest {
  /** 云端特效ID。 */
  Id?: string;
  /** 云端特效描述词。由用户原始输入的描述词。 */
  Prompt?: string;
  /** 云端特效标签。对云端特效进行分类标签，可用于分类搜索。 */
  Flag?: string;
  /** 云端特效类型, 默认不填，返回全部。PGC: 特效库中的特效；AICG : AI生成的特效；UGC：用户自定义上传的特效； */
  Type?: string;
}

declare interface DescribeLiveCloudEffectListResponse {
  /** 云端特效信息列表。 */
  InfoList?: CloudEffectInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLiveDelayInfoListRequest {
}

declare interface DescribeLiveDelayInfoListResponse {
  /** 延播信息列表。 */
  DelayInfoList?: DelayInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLiveDomainCertBindingsRequest {
  /** 要搜索的域名字符串。 */
  DomainSearch?: string;
  /** 记录行的位置，从0开始。默认0。 */
  Offset?: number;
  /** 记录行的最大数目。默认50。若不传，则最多返回50条数据。 */
  Length?: number;
  /** 要查询的单个域名。 */
  DomainName?: string;
  /** 可取值：ExpireTimeAsc：证书过期时间升序。ExpireTimeDesc：证书过期时间降序。 */
  OrderBy?: string;
}

declare interface DescribeLiveDomainCertBindingsResponse {
  /** 有绑定证书的域名信息数组。 */
  LiveDomainCertBindings?: LiveDomainCertBindings[];
  /** 总的记录行数，便于分页。 */
  TotalNum?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLiveDomainCertRequest {
  /** 播放域名。 */
  DomainName: string;
}

declare interface DescribeLiveDomainCertResponse {
  /** 证书信息。 */
  DomainCertInfo?: DomainCertInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLiveDomainPlayInfoListRequest {
  /** 播放域名列表。 */
  PlayDomains?: string[];
}

declare interface DescribeLiveDomainPlayInfoListResponse {
  /** 数据时间，格式为yyyy-mm-dd HH:MM:SS。 */
  Time?: string;
  /** 实时总带宽。 */
  TotalBandwidth?: number;
  /** 实时总流量。 */
  TotalFlux?: number;
  /** 总请求数。 */
  TotalRequest?: number;
  /** 实时总连接数。 */
  TotalOnline?: number;
  /** 分域名的数据情况。 */
  DomainInfoList?: DomainInfoList[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLiveDomainRefererRequest {
  /** 播放域名。 */
  DomainName: string;
}

declare interface DescribeLiveDomainRefererResponse {
  /** 域名 Referer 黑白名单配置。 */
  RefererAuthConfig: RefererAuthConfig;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLiveDomainRequest {
  /** 域名。 */
  DomainName: string;
}

declare interface DescribeLiveDomainResponse {
  /** 域名信息。 */
  DomainInfo?: DomainInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLiveDomainsRequest {
  /** 域名状态过滤。0-停用，1-启用。 */
  DomainStatus?: number;
  /** 域名类型过滤。0-推流，1-播放。 */
  DomainType?: number;
  /** 分页大小，范围：10~100。默认10。 */
  PageSize?: number;
  /** 取第几页，范围：1~100000。默认1。 */
  PageNum?: number;
  /** 0 普通直播 1慢直播 默认0。 */
  IsDelayLive?: number;
  /** 域名前缀。 */
  DomainPrefix?: string;
  /** 播放区域，只在 DomainType=1 时该参数有意义。1: 国内。2: 全球。3: 海外。 */
  PlayType?: number;
}

declare interface DescribeLiveDomainsResponse {
  /** 总记录数。 */
  AllCount?: number;
  /** 域名详细信息列表。 */
  DomainList?: DomainInfo[];
  /** 可继续添加域名数量。 */
  CreateLimitCount?: number;
  /** 启用的播放域名加速区域统计，数组元素分别为：中国大陆（境内），全球地区，国际/港澳台（境外）域名数量。 */
  PlayTypeCount?: number[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLiveEnhanceInfoListRequest {
  /** 起始时间点，使用ISO格式时间，例如：2019-01-08T10:00:00Z。注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见[ISO 日期格式说明](https://cloud.tencent.com/document/product/267/38543)。接口支持最近三个月的查询，开始时间和结束时间查询跨度不能超过三十天。 */
  StartTime: string;
  /** 结束时间点，使用ISO格式时间，例如：2019-01-08T10:00:00Z。注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见[ISO 日期格式说明](https://cloud.tencent.com/document/product/267/38543)。接口支持最近三个月的查询，开始时间和结束时间查询跨度不能超过三十天。 */
  EndTime: string;
  /** 查询粒度，支持5，60分钟。 */
  Granularity?: number;
  /** 查询域名，如果不填则默认查全部的数据。 */
  DomainNames?: string[];
  /** 增强服务类型，如果不填则默认查全部的数据。 */
  Type?: string[];
  /** 分辨率，如果不填则默认查全部的数据。 */
  Resolution?: string[];
  /** 帧率，如果不填则默认查全部的数据。 */
  Fps?: string[];
}

declare interface DescribeLiveEnhanceInfoListResponse {
  /** 直播增强统计信息列表。 */
  DataInfoList?: LiveEnhanceInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLiveForbidStreamListRequest {
  /** 取得第几页，默认1。 */
  PageNum?: number;
  /** 每页大小，最大100。 取值：1~100之前的任意整数。默认值：10。 */
  PageSize?: number;
  /** 按流名称查询。 */
  StreamName?: string;
}

declare interface DescribeLiveForbidStreamListResponse {
  /** 符合条件的总个数。 */
  TotalNum: number;
  /** 总页数。 */
  TotalPage: number;
  /** 分页的页码。 */
  PageNum: number;
  /** 每页显示的条数。 */
  PageSize: number;
  /** 禁推流列表。 */
  ForbidStreamList: ForbidStreamInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLivePackageInfoRequest {
  /** 包类型，可选值：0：流量包1：转码包2: 连麦包。 */
  PackageType: number;
  /** 排序规则:1. BuyTimeDesc： 最新购买的排在最前面2. BuyTimeAsc： 最老购买的排在最前面3. ExpireTimeDesc： 最后过期的排在最前面4. ExpireTimeAsc：最先过期的排在最前面。注意：1. PackageType 为 2（连麦包） 的时候，不支持 3、4 排序。 */
  OrderBy?: string;
  /** 取得第几页的数据，和 PageSize 同时传递才会生效。 */
  PageNum?: number;
  /** 分页大小，和 PageNum 同时传递才会生效。取值：10 ～ 100 之间的任意整数。 */
  PageSize?: number;
}

declare interface DescribeLivePackageInfoResponse {
  /** 套餐包信息。 */
  LivePackageInfoList?: LivePackageInfo[];
  /** 套餐包当前计费方式:-1: 无计费方式或获取失败0: 无计费方式201: 月结带宽202: 月结流量203: 日结带宽204: 日结流量205: 日结时长206: 月结时长304: 日结流量。 */
  PackageBillMode?: number;
  /** 总页数。 */
  TotalPage?: number | null;
  /** 数据总条数。 */
  TotalNum?: number | null;
  /** 当前页数。 */
  PageNum?: number | null;
  /** 当前每页数量。 */
  PageSize?: number | null;
  /** 当请求参数 PackageType = 0 时生效，逗号分隔，从第一个到最后一个分别表示：标准直播，中国大陆（境内全地区）计费方式。标准直播，国际/港澳台（境外多地区）计费方式。快直播，中国大陆（境内全地区）计费方式。快直播，国际/港澳台（境外多地区）计费方式。 */
  FluxPackageBillMode?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLivePadRulesRequest {
}

declare interface DescribeLivePadRulesResponse {
  /** 规则信息列表。 */
  Rules?: RuleInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLivePadStreamListRequest {
  /** 推流路径，与推流和播放地址中的AppName保持一致，默认为 live。 */
  AppName?: string;
  /** 您的推流域名。 */
  DomainName?: string;
  /** 流名称。 */
  StreamName?: string;
  /** 分页页数。 */
  PageNum?: number;
  /** 每页个数。 */
  PageSize?: number;
}

declare interface DescribeLivePadStreamListResponse {
  /** 当前正在拉取垫片的流信息列表。 */
  StreamInfoList?: PadStreamInfo[];
  /** 传入的分页页数。 */
  PageNum?: number;
  /** 传入的分页个数。 */
  PageSize?: number;
  /** 查询到的总个数。 */
  TotalNum?: number;
  /** 可以分的总页数。 */
  TotalPage?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLivePadTemplateRequest {
  /** 模板id。 */
  TemplateId: number;
}

declare interface DescribeLivePadTemplateResponse {
  /** 直播垫片模板信息。 */
  Template?: PadTemplate;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLivePadTemplatesRequest {
}

declare interface DescribeLivePadTemplatesResponse {
  /** 直播垫片模板信息。 */
  Templates?: PadTemplate[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLivePlayAuthKeyRequest {
  /** 域名。 */
  DomainName: string;
}

declare interface DescribeLivePlayAuthKeyResponse {
  /** 播放鉴权key信息。 */
  PlayAuthKeyInfo?: PlayAuthKeyInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLivePullStreamTaskStatusRequest {
  /** 任务 ID。 */
  TaskId: string;
}

declare interface DescribeLivePullStreamTaskStatusResponse {
  /** 任务状态信息。 */
  TaskStatusInfo?: TaskStatusInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLivePullStreamTasksRequest {
  /** 任务 ID。 来源：调用 CreateLivePullStreamTask 接口时返回。不填默认查询所有任务，按更新时间倒序排序。 */
  TaskId?: string;
  /** 取得第几页，默认值：1。 */
  PageNum?: number;
  /** 分页大小，默认值：10。取值范围：1~20 之前的任意整数。 */
  PageSize?: number;
  /** 使用指定任务 ID 查询任务信息。注意：仅供使用指定 ID 创建的任务查询。 */
  SpecifyTaskId?: string;
}

declare interface DescribeLivePullStreamTasksResponse {
  /** 直播拉流任务信息列表。 */
  TaskInfos?: PullStreamTaskInfo[];
  /** 分页的页码。 */
  PageNum?: number;
  /** 每页大小。 */
  PageSize?: number;
  /** 符合条件的总个数。 */
  TotalNum?: number;
  /** 总页数。 */
  TotalPage?: number;
  /** 限制可创建的最大任务数。 */
  LimitTaskNum?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLivePushAuthKeyRequest {
  /** 推流域名。 */
  DomainName: string;
}

declare interface DescribeLivePushAuthKeyResponse {
  /** 推流鉴权key信息。 */
  PushAuthKeyInfo?: PushAuthKeyInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLiveRecordRulesRequest {
}

declare interface DescribeLiveRecordRulesResponse {
  /** 规则列表。 */
  Rules: RuleInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLiveRecordTemplateRequest {
  /** [DescribeLiveRecordTemplates](/document/product/267/32609)接口获取到的模板 ID。 */
  TemplateId: number;
}

declare interface DescribeLiveRecordTemplateResponse {
  /** 录制模板信息。 */
  Template?: RecordTemplateInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLiveRecordTemplatesRequest {
  /** 是否属于慢直播模板，默认：0。0： 标准直播。1：慢直播。 */
  IsDelayLive?: number;
}

declare interface DescribeLiveRecordTemplatesResponse {
  /** 录制模板信息列表。 */
  Templates?: RecordTemplateInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLiveSnapshotRulesRequest {
}

declare interface DescribeLiveSnapshotRulesResponse {
  /** 规则列表。 */
  Rules: RuleInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLiveSnapshotTemplateRequest {
  /** 模板 ID。调用 [CreateLiveSnapshotTemplate](/document/product/267/32624) 时返回的模板 ID。 */
  TemplateId: number;
}

declare interface DescribeLiveSnapshotTemplateResponse {
  /** 截图模板信息。 */
  Template?: SnapshotTemplateInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLiveSnapshotTemplatesRequest {
}

declare interface DescribeLiveSnapshotTemplatesResponse {
  /** 截图模板列表。 */
  Templates?: SnapshotTemplateInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLiveStreamEventListRequest {
  /** 起始时间。 UTC 格式，例如：2018-12-29T19:00:00Z。支持查询2个月内的历史记录。 */
  StartTime: string;
  /** 结束时间。UTC 格式，例如：2018-12-29T20:00:00Z。不超过当前时间，且和起始时间相差不得超过1个月。 */
  EndTime: string;
  /** 推流路径，与推流和播放地址中的AppName保持一致，默认为 live。 */
  AppName?: string;
  /** 推流域名。 */
  DomainName?: string;
  /** 流名称，不支持通配符（*）查询，默认模糊匹配。可使用IsStrict字段改为精确查询。 */
  StreamName?: string;
  /** 取得第几页。默认值：1。注： 目前只支持10000条内的查询。 */
  PageNum?: number;
  /** 分页大小。最大值：100。取值范围：1~100 之间的任意整数。默认值：10。注： 目前只支持10000条内的查询。 */
  PageSize?: number;
  /** 是否过滤，默认不过滤。0：不进行任何过滤。1：过滤掉开播失败的，只返回开播成功的。 */
  IsFilter?: number;
  /** 是否精确查询，默认模糊匹配。0：模糊匹配。1：精确查询。注：使用StreamName时该参数生效。 */
  IsStrict?: number;
  /** 是否按结束时间正序显示，默认逆序。0：逆序。1：正序。 */
  IsAsc?: number;
}

declare interface DescribeLiveStreamEventListResponse {
  /** 推断流事件列表。 */
  EventList?: StreamEventInfo[];
  /** 分页的页码。 */
  PageNum?: number;
  /** 每页大小。 */
  PageSize?: number;
  /** 符合条件的总个数。 */
  TotalNum?: number;
  /** 总页数。 */
  TotalPage?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLiveStreamMonitorListRequest {
  /** 查询列表时的起始偏移。 */
  Index: number;
  /** 本次查询的记录个数。最小值为1。 */
  Count: number;
}

declare interface DescribeLiveStreamMonitorListResponse {
  /** 账号下的直播流监播任务个数。 */
  TotalNum?: number;
  /** 直播流监播任务列表 */
  LiveStreamMonitors?: LiveStreamMonitorInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLiveStreamMonitorRequest {
  /** 监播任务ID。 */
  MonitorId: string;
}

declare interface DescribeLiveStreamMonitorResponse {
  /** 直播监播任务相关信息。 */
  LiveStreamMonitor?: LiveStreamMonitorInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLiveStreamOnlineListRequest {
  /** 推流域名。多域名用户需要填写 DomainName。 */
  DomainName?: string;
  /** 推流路径，与推流和播放地址中的 AppName 保持一致，默认为 live。多路径用户需要填写 AppName。 */
  AppName?: string;
  /** 取得第几页，默认1。 */
  PageNum?: number;
  /** 每页大小，最大100。 取值：10~100之间的任意整数。默认值：10。 */
  PageSize?: number;
  /** 流名称，用于精确查询。 */
  StreamName?: string;
}

declare interface DescribeLiveStreamOnlineListResponse {
  /** 符合条件的总个数。 */
  TotalNum?: number;
  /** 总页数。 */
  TotalPage?: number;
  /** 分页的页码。 */
  PageNum?: number;
  /** 每页显示的条数。 */
  PageSize?: number;
  /** 正在推送流的信息列表。 */
  OnlineInfo?: StreamOnlineInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLiveStreamPublishedListRequest {
  /** 您的推流域名。 */
  DomainName: string;
  /** 结束时间。UTC 格式，例如：2016-06-30T19:00:00Z。不超过当前时间。注意：EndTime和StartTime相差不可超过1个月。 */
  EndTime: string;
  /** 起始时间。 UTC 格式，例如：2016-06-29T19:00:00Z。最长支持查询2个月内数据。 */
  StartTime: string;
  /** 推流路径，与推流和播放地址中的 AppName 保持一致，默认为 live。不支持模糊匹配。 */
  AppName?: string;
  /** 取得第几页。默认值：1。 */
  PageNum?: number;
  /** 分页大小。最大值：100。取值范围：10~100 之前的任意整数。默认值：10。 */
  PageSize?: number;
  /** 流名称，支持模糊匹配。 */
  StreamName?: string;
}

declare interface DescribeLiveStreamPublishedListResponse {
  /** 推流记录信息。 */
  PublishInfo?: StreamName[];
  /** 分页的页码。 */
  PageNum?: number;
  /** 每页大小 */
  PageSize?: number;
  /** 符合条件的总个数。 */
  TotalNum?: number;
  /** 总页数。 */
  TotalPage?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLiveStreamPushInfoListRequest {
  /** 推流域名。 */
  PushDomain?: string;
  /** 推流路径，与推流和播放地址中的AppName保持一致，默认为live。 */
  AppName?: string;
  /** 页数，范围[1,10000]，默认值：1。 */
  PageNum?: number;
  /** 每页个数，范围：[1,1000]，默认值： 200。 */
  PageSize?: number;
}

declare interface DescribeLiveStreamPushInfoListResponse {
  /** 直播流的统计信息列表。 */
  DataInfoList?: PushDataInfo[];
  /** 所有在线流的总数量。 */
  TotalNum?: number;
  /** 总页数。 */
  TotalPage?: number;
  /** 当前数据所在页码。 */
  PageNum?: number;
  /** 每页的在线流的个数。 */
  PageSize?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLiveStreamStateRequest {
  /** 推流路径，与推流和播放地址中的AppName保持一致，默认为 live。 */
  AppName: string;
  /** 您的推流域名。 */
  DomainName: string;
  /** 流名称。 */
  StreamName: string;
}

declare interface DescribeLiveStreamStateResponse {
  /** 流状态，active：活跃，inactive：非活跃，forbid：禁播。 */
  StreamState?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLiveTimeShiftBillInfoListRequest {
  /** UTC开始时间，支持最近三个月的查询，查询时间最长跨度为一天。使用 UTC 格式时间，例如：2019-01-08T10:00:00Z。注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/267/38543)。 */
  StartTime: string;
  /** UTC结束时间，支持最近三个月的查询，查询时间最长跨度为一天。使用 UTC 格式时间，例如：2019-01-08T10:00:00Z。注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/267/38543)。 */
  EndTime: string;
  /** 推流域名列表，若不传递此参数，则表示查询总体数据。 */
  PushDomains?: string[];
}

declare interface DescribeLiveTimeShiftBillInfoListResponse {
  /** 时移计费明细数据。 */
  DataInfoList?: TimeShiftBillData[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLiveTimeShiftRulesRequest {
}

declare interface DescribeLiveTimeShiftRulesResponse {
  /** 规则信息列表。 */
  Rules?: RuleInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLiveTimeShiftTemplatesRequest {
}

declare interface DescribeLiveTimeShiftTemplatesResponse {
  /** 直播时移模板信息。 */
  Templates?: TimeShiftTemplate[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLiveTimeShiftWriteSizeInfoListRequest {
  /** 起始时间点，使用UTC格式时间，例如：2019-01-08T10:00:00Z。支持最近六个月的查询，查询开始和结束时间跨度不支持超过31天。 */
  StartTime: string;
  /** 结束时间点，使用UTC格式时间，例如：2019-01-08T10:00:00Z。支持最近六个月的查询，查询开始和结束时间跨度不支持超过31天。 */
  EndTime: string;
  /** 域名。 */
  DomainNames?: string[];
  /** 维度Area地区、Domain 域名、StorageDays 时移天数 */
  Dimensions?: string[];
  /** 时移天数。 */
  StorageDays?: number[];
  /** 时间跨度（分钟）默认5，可选 5、60或者1440。 */
  Granularity?: number;
  /** 区域可选Mainland、Oversea。 */
  MainlandOrOversea?: string;
}

declare interface DescribeLiveTimeShiftWriteSizeInfoListResponse {
  /** 直播时移写入量数据明细。 */
  DataInfoList?: TimeShiftWriteSizeData[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLiveTranscodeDetailInfoRequest {
  /** 推流域名。 */
  PushDomain?: string;
  /** 流名称。 */
  StreamName?: string;
  /** 查询时间，北京时间，格式：yyyymmdd。注意：支持查询近1个月内某天的详细数据，截止到昨天。 */
  DayTime?: string;
  /** 页数，默认1，不超过100页。 */
  PageNum?: number;
  /** 每页个数，默认20，范围：[10,1000]。 */
  PageSize?: number;
  /** 起始天时间，北京时间，格式：yyyymmdd。注意：支持查询近1个月内的详细数据。 */
  StartDayTime?: string;
  /** 结束天时间，北京时间，格式：yyyymmdd。注意：支持查询近1个月内的详细数据，截止到昨天，注意DayTime 与（StartDayTime，EndDayTime）必须要传一个，如果都传，会以DayTime为准 。 */
  EndDayTime?: string;
}

declare interface DescribeLiveTranscodeDetailInfoResponse {
  /** 统计数据列表。 */
  DataInfoList?: TranscodeDetailInfo[];
  /** 页码。 */
  PageNum?: number;
  /** 每页个数。 */
  PageSize?: number;
  /** 总个数。 */
  TotalNum?: number;
  /** 总页数。 */
  TotalPage?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLiveTranscodeRulesRequest {
  /** 要筛选的模板ID数组。 */
  TemplateIds?: number[];
  /** 要筛选的域名数组。 */
  DomainNames?: string[];
}

declare interface DescribeLiveTranscodeRulesResponse {
  /** 转码规则列表。 */
  Rules?: RuleInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLiveTranscodeTemplateRequest {
  /** 模板 ID。注意：在创建转码模板接口 [CreateLiveTranscodeTemplate](/document/product/267/32646) 调用的返回值中获取模板 ID。 */
  TemplateId: number;
}

declare interface DescribeLiveTranscodeTemplateResponse {
  /** 模板信息。 */
  Template?: TemplateInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLiveTranscodeTemplatesRequest {
  /** 转码模板类型，默认0。0：普通转码模板。1：自适应码率转码模板。 */
  TemplateType?: number;
}

declare interface DescribeLiveTranscodeTemplatesResponse {
  /** 转码模板列表。 */
  Templates?: TemplateInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLiveTranscodeTotalInfoRequest {
  /** 开始时间，支持最近三个月的数据查询，起始时间和结束时间跨度不能超过三个月。接口查询支持两种时间格式：1）YYYY-MM-DDThh:mm:ssZ：UTC时间格式，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/267/38543)2）YYYY-MM-DD hh:mm:ss：使用此格式时，默认代表北京时间。 */
  StartTime: string;
  /** 结束时间，支持最近三个月的数据查询，起始时间和结束时间跨度不能超过三个月。接口查询支持两种时间格式：1）YYYY-MM-DDThh:mm:ssZ：UTC时间格式，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/267/38543)2）YYYY-MM-DD hh:mm:ss：使用此格式时，默认代表北京时间。 */
  EndTime: string;
  /** 推流域名列表，若不填，表示查询所有域名总体数据。指定域名时返回1小时粒度数据。 */
  PushDomains?: string[];
  /** 可选值：Mainland：查询中国大陆（境内）数据，Oversea：则查询国际/港澳台（境外）数据，默认：查询全球地区（境内+境外）的数据。 */
  MainlandOrOversea?: string;
}

declare interface DescribeLiveTranscodeTotalInfoResponse {
  /** 统计数据列表。 */
  DataInfoList?: TranscodeTotalInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLiveWatermarkRequest {
  /** DescribeLiveWatermarks接口返回的水印 ID。 */
  WatermarkId: number;
}

declare interface DescribeLiveWatermarkResponse {
  /** 水印信息。 */
  Watermark: WatermarkInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLiveWatermarkRulesRequest {
}

declare interface DescribeLiveWatermarkRulesResponse {
  /** 水印规则列表。 */
  Rules: RuleInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLiveWatermarksRequest {
  /** 水印名称 */
  Name?: string;
  /** 分页的索引参数，从1开始 */
  PageNo?: number;
  /** 分页的大小参数，默认值500 */
  PageSize?: number;
}

declare interface DescribeLiveWatermarksResponse {
  /** 水印总个数。 */
  TotalNum?: number;
  /** 水印信息列表。 */
  WatermarkList?: WatermarkInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLiveXP2PDetailInfoListRequest {
  /** utc分钟粒度查询时间，查询某一分钟的用量数据，格式为：yyyy-mm-ddTHH:MM:00Z，参考https://cloud.tencent.com/document/product/266/11732 */
  QueryTime?: string;
  /** 类型数组，分直播live和点播vod，不传默认查全部。 */
  Type?: string[];
  /** 查询流数组，不传默认查所有流。 */
  StreamNames?: string[];
  /** 查询维度，不传该参数则默认查询流维度的数据，传递该参数则只查对应维度的数据，和返回值的字段相关，目前支持AppId维度查询。 */
  Dimension?: string[];
}

declare interface DescribeLiveXP2PDetailInfoListResponse {
  /** P2P流统计信息。 */
  DataInfoList?: XP2PDetailInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLogDownloadListRequest {
  /** 开始时间，北京时间。格式：yyyy-mm-dd HH:MM:SS。注：此字段为北京时间（UTC+8时区）。 */
  StartTime: string;
  /** 结束时间，北京时间。格式：yyyy-mm-dd HH:MM:SS。注意：结束时间 - 开始时间 <=7天。注：此字段为北京时间（UTC+8时区）。 */
  EndTime: string;
  /** 域名列表。 */
  PlayDomains: string[];
  /** 快直播还是标准直播，0：标准直播，1：快直播。默认为0。 */
  IsFastLive?: number;
}

declare interface DescribeLogDownloadListResponse {
  /** 日志信息列表。 */
  LogInfoList?: LogInfo[];
  /** 总条数。 */
  TotalNum?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMonitorReportRequest {
  /** 监播任务ID。 */
  MonitorId: string;
}

declare interface DescribeMonitorReportResponse {
  /** 媒体处理结果信息。 */
  MPSResult?: MPSResult;
  /** 媒体诊断结果信息。 */
  DiagnoseResult?: DiagnoseResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePlayErrorCodeDetailInfoListRequest {
  /** 起始时间，使用UTC格式时间，例如：2019-01-08T10:00:00Z。注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/267/38543)。 */
  StartTime: string;
  /** 结束时间，使用UTC格式时间，例如：2019-01-08T10:00:00Z。注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/267/38543)。注：EndTime 和 StartTime 只支持最近1天的数据查询。 */
  EndTime: string;
  /** 查询粒度：1-1分钟粒度。 */
  Granularity: number;
  /** 是，可选值包括”4xx”,”5xx”，支持”4xx,5xx”等这种混合模式。 */
  StatType: string;
  /** 播放域名列表。 */
  PlayDomains?: string[];
  /** 地域，可选值：Mainland，Oversea，China，Foreign，Global（默认值）；如果为空，查询总的数据；如果为“Mainland”，查询中国大陆的数据；如果为“Oversea”，则查询中国大陆以外的数据；如果为China，查询中国的数据（包括港澳台）；如果为Foreign，查询国外的数据（不包括港澳台）。 */
  MainlandOrOversea?: string;
}

declare interface DescribePlayErrorCodeDetailInfoListResponse {
  /** 统计信息列表。 */
  HttpCodeList?: HttpCodeInfo[];
  /** 统计类型。 */
  StatType?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePlayErrorCodeSumInfoListRequest {
  /** 起始时间点，北京时间。格式：yyyy-mm-dd HH:MM:SS。 */
  StartTime: string;
  /** 结束时间点，北京时间。格式：yyyy-mm-dd HH:MM:SS。注：EndTime 和 StartTime 只支持最近1天的数据查询。 */
  EndTime: string;
  /** 播放域名列表，不填表示总体数据。 */
  PlayDomains?: string[];
  /** 页数，范围[1,1000]，默认值是1。 */
  PageNum?: number;
  /** 每页个数，范围：[1,1000]，默认值是20。 */
  PageSize?: number;
  /** 地域，可选值：Mainland，Oversea，China，Foreign，Global（默认值）；如果为空，查询总的数据；如果为“Mainland”，查询中国大陆的数据；如果为“Oversea”，则查询中国大陆以外的数据；如果为China，查询中国的数据（包括港澳台）；如果为Foreign，查询国外的数据（不包括港澳台）。 */
  MainlandOrOversea?: string;
  /** 分组参数，可选值：CountryProIsp（默认值），Country（国家），默认是按照国家+省份+运营商来进行分组；目前国外的省份和运营商暂时无法识别。 */
  GroupType?: string;
  /** 输出字段使用的语言，可选值：Chinese（默认值），English，目前国家，省份和运营商支持多语言。 */
  OutLanguage?: string;
}

declare interface DescribePlayErrorCodeSumInfoListResponse {
  /** 分省份分运营商错误码为2或3或4或5开头的状态码数据信息。 */
  ProIspInfoList?: ProIspPlayCodeDataInfo[];
  /** 所有状态码的加和的次数。 */
  TotalCodeAll?: number;
  /** 状态码为4开头的总次数。 */
  TotalCode4xx?: number;
  /** 状态码为5开头的总次数。 */
  TotalCode5xx?: number;
  /** 各状态码的总次数。 */
  TotalCodeList?: PlayCodeTotalInfo[];
  /** 页号。 */
  PageNum?: number;
  /** 每页大小。 */
  PageSize?: number;
  /** 总页数。 */
  TotalPage?: number;
  /** 总记录数。 */
  TotalNum?: number;
  /** 状态码为2开头的总次数。 */
  TotalCode2xx?: number;
  /** 状态码为3开头的总次数。 */
  TotalCode3xx?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeProIspPlaySumInfoListRequest {
  /** 起始时间，使用UTC格式时间，例如：2019-01-08T10:00:00Z。注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/267/38543)。 */
  StartTime: string;
  /** 结束时间，使用UTC格式时间，例如：2019-01-08T10:00:00Z。注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/267/38543)。注：EndTime 和 StartTime 只支持最近1天的数据查询。 */
  EndTime: string;
  /** 统计的类型，可选值：”Province”(省份)，”Isp”(运营商)，“CountryOrArea”(国家或地区)。 */
  StatType: string;
  /** 播放域名列表，不填则为全部。 */
  PlayDomains?: string[];
  /** 页号，范围是[1,1000]，默认值是1。 */
  PageNum?: number;
  /** 每页个数，范围是[1,1000]，默认值是20。 */
  PageSize?: number;
  /** 地域，可选值：Mainland，Oversea，China，Foreign，Global（默认值）；如果为空，查询总的数据；如果为“Mainland”，查询中国大陆的数据；如果为“Oversea”，则查询中国大陆以外的数据；如果为China，查询中国的数据（包括港澳台）；如果为Foreign，查询国外的数据（不包括港澳台）。 */
  MainlandOrOversea?: string;
  /** 输出字段使用的语言，可选值：Chinese（默认值），English；目前国家，省份和运营商支持多语言。 */
  OutLanguage?: string;
}

declare interface DescribeProIspPlaySumInfoListResponse {
  /** 总流量。 */
  TotalFlux?: number;
  /** 总请求数。 */
  TotalRequest?: number;
  /** 统计的类型。 */
  StatType?: string;
  /** 每页的记录数。 */
  PageSize?: number;
  /** 页号。 */
  PageNum?: number;
  /** 总记录数。 */
  TotalNum?: number;
  /** 总页数。 */
  TotalPage?: number;
  /** 省份，运营商，国家或地区汇总数据列表。 */
  DataInfoList?: ProIspPlaySumInfo[];
  /** 下载速度，单位：MB/s，计算方式：总流量/总时长。 */
  AvgFluxPerSecond?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeProvinceIspPlayInfoListRequest {
  /** 起始时间点，使用UTC格式时间，例如：2019-01-08T10:00:00Z。注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/267/38543)。 */
  StartTime: string;
  /** 结束时间点，使用UTC格式时间，例如：2019-01-08T10:00:00Z。注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/267/38543)。注：EndTime 和 StartTime 只支持最近1天的数据查询。 */
  EndTime: string;
  /** 支持如下粒度：1：1分钟粒度（跨度不支持超过1天） */
  Granularity: number;
  /** 统计指标类型：“Bandwidth”：带宽“FluxPerSecond”：平均流量“Flux”：流量“Request”：请求数“Online”：并发连接数 */
  StatType: string;
  /** 播放域名列表。 */
  PlayDomains?: string[];
  /** 要查询的省份（地区）英文名称列表，如 Beijing。 */
  ProvinceNames?: string[];
  /** 要查询的运营商英文名称列表，如 China Mobile ，如果为空，查询所有运营商的数据。 */
  IspNames?: string[];
  /** 地域，可选值：Mainland，Oversea，China，Foreign，Global（默认值）；如果为空，查询总的数据；如果为“Mainland”，查询中国大陆的数据；如果为“Oversea”，则查询中国大陆以外的数据；如果为China，查询中国的数据（包括港澳台）；如果为Foreign，查询国外的数据（不包括港澳台）。 */
  MainlandOrOversea?: string;
  /** ip类型：“Ipv6”：Ipv6数据如果为空，查询总的数据； */
  IpType?: string;
}

declare interface DescribeProvinceIspPlayInfoListResponse {
  /** 播放信息列表。 */
  DataInfoList?: PlayStatInfo[];
  /** 统计的类型，和输入参数保持一致。 */
  StatType?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePullStreamConfigsRequest {
  /** 配置 ID。获取途径：从 CreatePullStreamConfig 接口返回值获取。 */
  ConfigId?: string;
}

declare interface DescribePullStreamConfigsResponse {
  /** 拉流配置。 */
  PullStreamConfigs: PullStreamConfig[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePullTransformPushInfoRequest {
  /** 起始时间点，接口查询支持两种时间格式：1）YYYY-MM-DDThh:mm:ssZ：UTC时间格式，详见IOS日期格式说明文档: https://cloud.tencent.com/document/product/266/11732 */
  StartTime: string;
  /** 结束时间点，接口查询支持两种时间格式：1）YYYY-MM-DDThh:mm:ssZ：UTC时间格式，详见IOS日期格式说明文档: https://cloud.tencent.com/document/product/266/11732 */
  EndTime: string;
  /** 可选值：Mainland：查询国内数据，Oversea：则查询国外数据，默认：查询国内+国外的数据。 */
  MainlandOrOversea?: string;
  /** 可选值： PullLivePushLive：拉流源类型为直播 PullVodPushLive：拉流源类型为点播 PullPicPushLive：拉流源类型为图片 默认：查询全部拉流源类型 */
  SourceType?: string;
}

declare interface DescribePullTransformPushInfoResponse {
  /** 时长统计数据列表 */
  DataInfoList?: TaskDurationInfo[];
  /** 拉流转推得总时长 */
  TotalDuration?: number;
  /** 拉流转推得总时长（秒） */
  TotalDurationSecond?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePushBandwidthAndFluxListRequest {
  /** 查询开始时间点，精确到分钟粒度，接口查询支持两种时间格式：1）YYYY-MM-DDThh:mm:ssZ：UTC时间格式，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/267/38543)。2）YYYY-MM-DD hh:mm:ss：使用此格式时，默认代表北京时间。支持最近两个月的查询，查询开始和结束时间跨度不支持超过31天。 */
  StartTime: string;
  /** 查询结束时间点，精确到分钟粒度，接口查询支持两种时间格式：1）YYYY-MM-DDThh:mm:ssZ：UTC时间格式，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/267/38543)。2）YYYY-MM-DD hh:mm:ss：使用此格式时，默认代表北京时间。支持最近两个月的查询，查询开始和结束时间跨度不支持超过31天。 */
  EndTime: string;
  /** 域名，可以填多个，若不填，表示总体数据。 */
  PushDomains?: string[];
  /** 可选值：Mainland：查询中国大陆（境内）数据，Oversea：则查询国际/港澳台（境外）数据，不填则默认查询全球地区（境内+境外）的数据。 */
  MainlandOrOversea?: string;
  /** 数据粒度，支持如下粒度：5：5分钟粒度，（跨度不支持超过1天），60：1小时粒度（跨度不支持超过一个月），1440：天粒度（跨度不支持超过一个月）。默认值：5。 */
  Granularity?: number;
  /** 大区，映射表如下：China Mainland 中国大陆Asia Pacific I 亚太一区Asia Pacific II 亚太二区Asia Pacific III 亚太三区Europe 欧洲North America 北美South America 南美Middle East 中东Africa 非洲。 */
  RegionNames?: string[];
  /** 国家，映射表参照如下文档：https://cloud.tencent.com/document/product/267/34019。 */
  CountryNames?: string[];
}

declare interface DescribePushBandwidthAndFluxListResponse {
  /** 峰值带宽所在时间点，使用UTC格式时间，例如：2019-01-08T10:00:00Z。注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732)。 */
  PeakBandwidthTime?: string;
  /** 峰值带宽，单位是 Mbps。 */
  PeakBandwidth?: number;
  /** 95峰值带宽所在时间点，使用UTC格式时间，例如：2019-01-08T10:00:00Z。注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732)。 */
  P95PeakBandwidthTime?: string;
  /** 95峰值带宽，单位是 Mbps。 */
  P95PeakBandwidth?: number;
  /** 总流量，单位是 MB。 */
  SumFlux?: number;
  /** 明细数据信息。 */
  DataInfoList?: BillDataInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRecordTaskRequest {
  /** 查询任务开始时间，Unix 时间戳。设置时间不早于当前时间之前90天的时间，且查询时间跨度不超过一周。 */
  StartTime: number;
  /** 查询任务结束时间，Unix 时间戳。EndTime 必须大于 StartTime，设置时间不早于当前时间之前90天的时间，且查询时间跨度不超过一周。（注意：任务开始结束时间必须在查询时间范围内）。 */
  EndTime: number;
  /** 流名称。 */
  StreamName?: string;
  /** 推流域名。 */
  DomainName?: string;
  /** 推流路径。 */
  AppName?: string;
  /** 翻页标识，分批拉取时使用：当单次请求无法拉取所有数据，接口将会返回 ScrollToken，下一次请求携带该 Token，将会从下一条记录开始获取。 */
  ScrollToken?: string;
}

declare interface DescribeRecordTaskResponse {
  /** 翻页标识，当请求未返回所有数据，该字段表示下一条记录的 Token。当该字段为空，说明已无更多数据。 */
  ScrollToken?: string;
  /** 录制任务列表。当该字段为空，说明已返回所有数据。 */
  TaskList?: RecordTask[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeScreenShotSheetNumListRequest {
  /** 起始时间点，接口查询支持两种时间格式：1）YYYY-MM-DDThh:mm:ssZ：UTC时间格式，详见IOS日期格式说明文档: https://cloud.tencent.com/document/product/266/11732 */
  StartTime: string;
  /** 结束时间点，接口查询支持两种时间格式：1）YYYY-MM-DDThh:mm:ssZ：UTC时间格式，详见IOS日期格式说明文档: https://cloud.tencent.com/document/product/266/11732 */
  EndTime: string;
  /** 地域信息，可选值包括Mainland，Oversea，前者是查询中国大陆范围内的数据，后者是除中国大陆范围之外的数据，若不传该参数，则查询所有地区的数据。 */
  Zone?: string;
  /** 推流域名（支持查询2019年11 月1日之后的域名维度数据）。 */
  PushDomains?: string[];
  /** 数据维度，数据延迟1个半小时，可选值包括：1、Minute（5分钟粒度，最大支持查询时间范围是31天），2、Day（天粒度，默认值，按照北京时间做跨天处理，最大支持查询时间范围是186天当天）。 */
  Granularity?: string;
}

declare interface DescribeScreenShotSheetNumListResponse {
  /** 数据信息列表。 */
  DataInfoList?: TimeValue[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeScreenshotTaskRequest {
  /** 查询任务开始时间，Unix 时间戳。设置时间不早于当前时间之前90天的时间，且查询时间跨度不超过一周。 */
  StartTime: number;
  /** 查询任务结束时间，Unix 时间戳。EndTime 必须大于 StartTime，设置时间不早于当前时间之前90天的时间，且查询时间跨度不超过一周。（注意：任务开始结束时间必须在查询时间范围内）。 */
  EndTime: number;
  /** 流名称。 */
  StreamName?: string;
  /** 推流域名。 */
  DomainName?: string;
  /** 推流路径。 */
  AppName?: string;
  /** 翻页标识，分批拉取时使用：当单次请求无法拉取所有数据，接口将会返回 ScrollToken，下一次请求携带该 Token，将会从下一条记录开始获取。 */
  ScrollToken?: string;
}

declare interface DescribeScreenshotTaskResponse {
  /** 翻页标识，当请求未返回所有数据，该字段表示下一条记录的 Token。当该字段为空，说明已无更多数据。 */
  ScrollToken?: string;
  /** 截图任务列表。当该字段为空，说明已返回所有数据。 */
  TaskList?: ScreenshotTask[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeStreamDayPlayInfoListRequest {
  /** 日期，格式：YYYY-mm-dd。第二天凌晨3点出昨天的数据，建议在这个时间点之后查询最新数据。支持最近3个月的数据查询。 */
  DayTime: string;
  /** 播放域名。 */
  PlayDomain?: string;
  /** 页号，范围[1,1000]，默认值是1。 */
  PageNum?: number;
  /** 每页个数，范围[100,1000]，默认值是1000。 */
  PageSize?: number;
  /** 可选值：Mainland：查询国内数据，Oversea：则查询国外数据，默认：查询国内+国外的数据。 */
  MainlandOrOversea?: string;
  /** 服务名称，可选值包括LVB(标准直播)，LEB(快直播)，不填则查LVB+LEB总值。 */
  ServiceName?: string;
}

declare interface DescribeStreamDayPlayInfoListResponse {
  /** 播放数据信息列表。 */
  DataInfoList?: PlayDataInfoByStream[];
  /** 总数量。 */
  TotalNum?: number;
  /** 总页数。 */
  TotalPage?: number;
  /** 当前数据所处页码。 */
  PageNum?: number;
  /** 每页个数。 */
  PageSize?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeStreamPlayInfoListRequest {
  /** 起始时间点，接口查询支持两种时间格式：1）YYYY-MM-DDThh:mm:ssZ：UTC时间格式，详见IOS日期格式说明文档: https://cloud.tencent.com/document/product/266/11732 */
  StartTime: string;
  /** 结束时间点，接口查询支持两种时间格式：1）YYYY-MM-DDThh:mm:ssZ：UTC时间格式，详见IOS日期格式说明文档: https://cloud.tencent.com/document/product/266/11732 */
  EndTime: string;
  /** 播放域名，若不填，则为查询所有播放域名的在线流数据。 */
  PlayDomain?: string;
  /** 流名称，精确匹配。若不填，则为查询总体播放数据。 */
  StreamName?: string;
  /** 推流路径，与播放地址中的AppName保持一致，会精确匹配，在同时传递了StreamName时生效。若不填，则为查询总体播放数据。 */
  AppName?: string;
  /** 服务名称，可选值包括LVB(标准直播)，LEB(快直播)，不填则查LVB+LEB总值。 */
  ServiceName?: string;
}

declare interface DescribeStreamPlayInfoListResponse {
  /** 统计信息列表，时间粒度是1分钟。 */
  DataInfoList?: DayStreamPlayInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeStreamPushInfoListRequest {
  /** 流名称。 */
  StreamName: string;
  /** 起始时间点，使用UTC格式时间，例如：2019-01-08T10:00:00Z。注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/267/38543)。 */
  StartTime: string;
  /** 结束时间点，使用UTC格式时间，例如：2019-01-08T10:00:00Z。注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/267/38543)。支持查询最近7天数据，建议查询时间跨度在3小时之内。 */
  EndTime: string;
  /** 推流域名。 */
  PushDomain?: string;
  /** 推流路径，与推流和播放地址中的AppName保持一致，默认为 live。 */
  AppName?: string;
}

declare interface DescribeStreamPushInfoListResponse {
  /** 返回的数据列表。 */
  DataInfoList?: PushQualityData[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTimeShiftRecordDetailRequest {
  /** 推流域名。 */
  Domain: string;
  /** 推流路径。 */
  AppName: string;
  /** 流名称。 */
  StreamName: string;
  /** 查询范围起始时间，Unix 时间戳。 */
  StartTime: number;
  /** 查询范围终止时间，Unix 时间戳。 */
  EndTime: number;
  /** 推流域名所属组，没有域名组或者域名组为空字符串可不填。 */
  DomainGroup?: string;
  /** 转码模板ID，转码模板ID为0可不填。 */
  TransCodeId?: number;
}

declare interface DescribeTimeShiftRecordDetailResponse {
  /** 时移录制会话数组。 */
  RecordList?: TimeShiftRecord[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTimeShiftStreamListRequest {
  /** 查询范围起始时间，Unix 时间戳。 */
  StartTime: number;
  /** 查询范围结束时间，Unix 时间戳。 */
  EndTime: number;
  /** 流名称。 */
  StreamName?: string;
  /** 推流域名。 */
  Domain?: string;
  /** 推流域名所属域名组。 */
  DomainGroup?: string;
  /** 用户指定要返回的最大结果数，取值范围[0,100]，不指定或者指定为0时，API 默认值为100。指定超过100时，API 强制使用100。指定值为负数时，接口返回错误。 */
  PageSize?: number;
  /** 指定拉取的页码，不传时默认为1。 */
  PageNum?: number;
}

declare interface DescribeTimeShiftStreamListResponse {
  /** 时间段内所有的数据量。 */
  TotalSize?: number;
  /** 流列表。 */
  StreamList?: TimeShiftStreamInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTopClientIpSumInfoListRequest {
  /** 起始时间点，使用UTC格式时间，例如：2019-01-08T10:00:00Z。注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/267/38543)。 */
  StartTime: string;
  /** 结束时间点，使用UTC格式时间，例如：2019-01-08T10:00:00Z。注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/267/38543)。时间跨度在[0,4小时]，支持最近1天数据查询。 */
  EndTime: string;
  /** 播放域名，默认为不填，表示求总体数据。 */
  PlayDomains?: string[];
  /** 页号，范围是[1,1000]，默认值是1。 */
  PageNum?: number;
  /** 每页个数，范围是[1,1000]，默认值是20。 */
  PageSize?: number;
  /** 排序指标，可选值包括TotalRequest（默认值），FailedRequest,TotalFlux。 */
  OrderParam?: string;
  /** 地域，可选值：Mainland，Oversea，China，Foreign，Global（默认值）；如果为空，查询总的数据；如果为“Mainland”，查询中国大陆的数据；如果为“Oversea”，则查询中国大陆以外的数据；如果为China，查询中国的数据（包括港澳台）；如果为Foreign，查询国外的数据（不包括港澳台）。 */
  MainlandOrOversea?: string;
  /** 输出字段使用的语言，可选值：Chinese（默认值），English；目前国家，省份和运营商支持多语言。 */
  OutLanguage?: string;
}

declare interface DescribeTopClientIpSumInfoListResponse {
  /** 页号，范围是[1,1000]，默认值是1。 */
  PageNum?: number;
  /** 每页个数，范围是[1,1000]，默认值是20。 */
  PageSize?: number;
  /** 排序指标，可选值包括”TotalRequest”，”FailedRequest”,“TotalFlux”。 */
  OrderParam?: string;
  /** 记录总数。 */
  TotalNum?: number;
  /** 记录总页数。 */
  TotalPage?: number;
  /** 数据内容。 */
  DataInfoList?: ClientIpPlaySumInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTranscodeTaskNumRequest {
  /** 起始时间，格式：yyyy-mm-dd HH:MM:SS。 */
  StartTime: string;
  /** 结束时间，格式：yyyy-mm-dd HH:MM:SS。 */
  EndTime: string;
  /** 推流域名列表，不填表示总体数据。 */
  PushDomains?: string[];
}

declare interface DescribeTranscodeTaskNumResponse {
  /** 任务数列表。 */
  DataInfoList: TranscodeTaskNum[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeUploadStreamNumsRequest {
  /** 起始时间点，接口查询支持两种时间格式：1）YYYY-MM-DDThh:mm:ssZ：UTC时间格式，详见IOS日期格式说明文档: https://cloud.tencent.com/document/product/266/11732 */
  StartTime: string;
  /** 结束时间点，接口查询支持两种时间格式：1）YYYY-MM-DDThh:mm:ssZ：UTC时间格式，详见IOS日期格式说明文档: https://cloud.tencent.com/document/product/266/11732 */
  EndTime: string;
  /** 直播域名，若不填，表示总体数据。 */
  Domains?: string[];
  /** 数据粒度，支持如下粒度：5：5分钟粒度，（跨度不支持超过1天），1440：天粒度（跨度不支持超过一个月）。默认值：5。 */
  Granularity?: number;
}

declare interface DescribeUploadStreamNumsResponse {
  /** 明细数据信息 */
  DataInfoList?: ConcurrentRecordStreamNum[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVisitTopSumInfoListRequest {
  /** 起始时间点，格式为yyyy-mm-dd HH:MM:SS。 */
  StartTime: string;
  /** 结束时间点，格式为yyyy-mm-dd HH:MM:SS时间跨度在(0,4小时]，支持最近1天数据查询。 */
  EndTime: string;
  /** 峰值指标，可选值包括”Domain”，”StreamId”。 */
  TopIndex: string;
  /** 播放域名，默认为不填，表示求总体数据。 */
  PlayDomains?: string[];
  /** 页号，范围是[1,1000]，默认值是1。 */
  PageNum?: number;
  /** 每页个数，范围是[1,1000]，默认值是20。 */
  PageSize?: number;
  /** 排序指标，可选值包括” AvgFluxPerSecond”，”TotalRequest”（默认）,“TotalFlux”。 */
  OrderParam?: string;
}

declare interface DescribeVisitTopSumInfoListResponse {
  /** 页号，范围是[1,1000]，默认值是1。 */
  PageNum: number;
  /** 每页个数，范围是[1,1000]，默认值是20。 */
  PageSize: number;
  /** 峰值指标，可选值包括”Domain”，”StreamId”。 */
  TopIndex: string;
  /** 排序指标，可选值包括” AvgFluxPerSecond”(按每秒平均流量排序)，”TotalRequest”（默认，按总请求数排序）,“TotalFlux”（按总流量排序）。 */
  OrderParam: string;
  /** 记录总数。 */
  TotalNum: number;
  /** 记录总页数。 */
  TotalPage: number;
  /** 数据内容。 */
  DataInfoList: PlaySumStatInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DropLiveStreamRequest {
  /** 流名称。 */
  StreamName: string;
  /** 您的推流域名。 */
  DomainName: string;
  /** 推流路径，与推流和播放地址中的AppName保持一致，默认为 live。 */
  AppName: string;
}

declare interface DropLiveStreamResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface EnableLiveDomainRequest {
  /** 待启用的直播域名。 */
  DomainName: string;
}

declare interface EnableLiveDomainResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface EnableOptimalSwitchingRequest {
  /** 针对该流 ID 启用择优调度。 */
  StreamName: string;
  /** 启用开关，默认为启用。0 - 禁用。1 - 启用。 */
  EnableSwitch?: number;
  /** 要启用自动择优的流所属的域名分组名称。 */
  HostGroupName?: string;
}

declare interface EnableOptimalSwitchingResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ForbidLiveDomainRequest {
  /** 待停用的直播域名。 */
  DomainName: string;
}

declare interface ForbidLiveDomainResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ForbidLiveStreamRequest {
  /** 推流路径，与推流和播放地址中的AppName保持一致，默认为 live。 */
  AppName: string;
  /** 您的推流域名。 */
  DomainName: string;
  /** 流名称。 */
  StreamName: string;
  /** 恢复流的时间。UTC 格式，例如：2018-11-29T19:00:00Z。注意：1. 默认禁推7天，且最长支持禁推90天。2. 北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/267/38543)。 */
  ResumeTime?: string;
  /** 禁推原因。注明：请务必填写禁推原因，防止误操作。长度限制：2048字节。 */
  Reason?: string;
}

declare interface ForbidLiveStreamResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCasterInputInfoRequest {
  /** 导播台ID。 */
  CasterId: number;
  /** 修改的导播台输入源信息 */
  InputInfo: CasterInputInfo;
}

declare interface ModifyCasterInputInfoResponse {
  /** 修改输入源后的预览地址。注：该地址仅作为预览使用，不可分发。 */
  InputPlayUrl?: string;
  /** 修改后的输入源webrtc预览地址。该地址需配合腾讯云快直播播放SDK使用。注：该地址仅做预览使用，不可分发。 */
  InputWebRTCPlayUrl?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCasterLayoutInfoRequest {
  /** 导播台ID。 */
  CasterId: number;
  /** 导播台布局参数信息。 */
  LayoutInfo: CasterLayoutInfo;
}

declare interface ModifyCasterLayoutInfoResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCasterMarkPicInfoRequest {
  /** 导播台ID。 */
  CasterId: number;
  /** 新的水印信息。 */
  MarkPicInfo: CasterMarkPicInfo;
}

declare interface ModifyCasterMarkPicInfoResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCasterMarkWordInfoRequest {
  /** 导播台ID。 */
  CasterId: number;
  /** 修改的文本配置。 */
  MarkWordInfo: CasterMarkWordInfo;
}

declare interface ModifyCasterMarkWordInfoResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCasterOutputInfoRequest {
  /** 导播台ID。 */
  CasterId: number;
  /** 导播台推流参数信息。 */
  OutputInfo: CasterOutputInfo;
}

declare interface ModifyCasterOutputInfoResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCasterRequest {
  /** 导播台ID */
  CasterId: number;
  /** 导播台名称 */
  CasterName?: string;
  /** 导播台的描述最大允许长度256 */
  Description?: string;
  /** 录制模板id。默认为0。当使用直播录制功能时，可将使用的录制模版填入。该接口仅保存字段，不涉及任何录制功能。 */
  RecordTemplateId?: number;
  /** 录制状态，当调用录制接口后，可通过该字段保存录制状态。0：未录制 1：录制中该接口仅保存字段，不涉及任何录制处理。 */
  RecordStatus?: number;
  /** 导播台的过期时间戳。值为-1或unix时间戳。默认值为-1。 当值为-1时，表示该导播台永不过期。 当值为正常unix时间戳时，导播台将在该时间过期。导播台过期后，预监与主监画面将自动停止，转推自动停止。 点播、直播url将停止转拉，推流url需自行停止推流。 */
  ExpireTime?: number;
  /** 导播台延时播放时间，单位为秒。 默认为0，最大支持300秒 */
  DelayTime?: number;
  /** 导播台转场类型。 默认为空。 允许使用通过DescribeCasterTransitionTypes接口中查询到的转场类型。 */
  TransitionType?: string;
  /** 导播台主监输出的宽度，单位为像素。 默认为1280，最大允许4096。 */
  PgmWidth?: number;
  /** 导播台主监输出的高度，单位为像素。 默认为720，最大允许2160。 */
  PgmHeight?: number;
  /** 导播台主监输出的帧率。 默认为0，表示随源输出。 最大支持60。 */
  PgmFps?: number;
  /** 导播台主监输出的码率，单位为kbps。 默认为0，表示随源的码率输出。 最大允许10000kbps。 */
  PgmBitRate?: number;
  /** 导播台的计费类型。 0 通用型 1 播单型。 注： 本参数暂无作用。 */
  FeeType?: number;
  /** 录制接口返回的taskid注：该接口只做字段保存，不涉及录制操作。 */
  RecordTaskId?: string;
  /** 导播台主监输出的音频码率，单位为kbps。 可选项：[0, 128, 192, 256] 默认值为0，表示随源的音频码率输出。 */
  PgmAudioBitRate?: number;
}

declare interface ModifyCasterResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyLiveCallbackTemplateRequest {
  /** DescribeLiveCallbackTemplates接口返回的模板 ID。 */
  TemplateId: number;
  /** 模板名称。 */
  TemplateName?: string;
  /** 描述信息。 */
  Description?: string;
  /** 开播回调 URL。 */
  StreamBeginNotifyUrl?: string;
  /** 断流回调 URL。 */
  StreamEndNotifyUrl?: string;
  /** 录制文件回调 URL。 */
  RecordNotifyUrl?: string;
  /** 录制状态回调 URL 。 */
  RecordStatusNotifyUrl?: string;
  /** 截图回调 URL。 */
  SnapshotNotifyUrl?: string;
  /** 鉴黄回调 URL。 */
  PornCensorshipNotifyUrl?: string;
  /** 回调 Key，回调 URL 公用，回调签名详见事件消息通知文档。[事件消息通知](/document/product/267/32744)。 */
  CallbackKey?: string;
  /** 推流异常回调 URL。 */
  PushExceptionNotifyUrl?: string;
  /** 音频审核回调 URL。 */
  AudioAuditNotifyUrl?: string;
  /** 录制异常回调 URL。 */
  RecordExceptionNotifyUrl?: string;
  /** 录制异常回调级别，可选择：error、warning、info。 */
  RecordExceptionLevels?: string[];
}

declare interface ModifyLiveCallbackTemplateResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyLiveDomainCertBindingsRequest {
  /** 要绑定证书的播放域名/状态 信息列表。如果CloudCertId和证书公钥私钥对均不传，且域名列表已有绑定规则，只批量更新域名https规则的启用状态，并把未上传至腾讯云ssl的已有自有证书上传。 */
  DomainInfos: LiveCertDomainInfo[];
  /** 腾讯云ssl的证书Id。见 https://cloud.tencent.com/document/api/400/41665 */
  CloudCertId?: string;
  /** 证书公钥。CloudCertId和公钥私钥对二选一，若CloudCertId将会舍弃公钥和私钥参数，否则将自动先把公钥私钥对上传至ssl新建证书，并使用上传成功后返回的CloudCertId。 */
  CertificatePublicKey?: string;
  /** 证书私钥。CloudCertId和公钥私钥对二选一，若传CloudCertId将会舍弃公钥和私钥参数，否则将自动先把公钥私钥对上传至ssl新建证书，并使用上传成功后返回的CloudCertId。 */
  CertificatePrivateKey?: string;
  /** 上传至ssl证书中心的备注信息，只有新建证书时有效。传CloudCertId时会忽略。 */
  CertificateAlias?: string;
}

declare interface ModifyLiveDomainCertBindingsResponse {
  /** DomainNames 入参中，与证书不匹配的域名列表，将会跳过处理。 */
  MismatchedDomainNames?: string[];
  /** 操作失败的域名及错误码，错误信息，包括MismatchedDomainNames中的域名。 */
  Errors?: BatchDomainOperateErrors[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyLiveDomainRefererRequest {
  /** 播放域名。 */
  DomainName: string;
  /** 是否开启当前域名的 Referer 黑白名单鉴权。 */
  Enable: number;
  /** 名单类型，0：黑名单，1：白名单。 */
  Type: number;
  /** 是否允许空 Referer，0：不允许，1：允许。 */
  AllowEmpty: number;
  /** Referer 名单列表，以;分隔。 */
  Rules: string;
}

declare interface ModifyLiveDomainRefererResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyLivePadTemplateRequest {
  /** 模板id。 */
  TemplateId: number;
  /** 垫片内容。 */
  Url: string;
  /** 断流等待时间。取值范围：0-30000。单位：ms。 */
  WaitDuration: number;
  /** 最大垫片时长。取值范围：0 - 正无穷。单位：ms。 */
  MaxDuration: number;
  /** 模板名称。长度上限：255字节。仅支持中文、英文、数字、_、-。 */
  TemplateName: string;
  /** 描述信息。长度上限：1024字节。仅支持中文、英文、数字、_、-。 */
  Description?: string;
  /** 垫片内容类型： 1：图片，2：视频。 默认值：1。 */
  Type?: number;
}

declare interface ModifyLivePadTemplateResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyLivePlayAuthKeyRequest {
  /** 播放域名。 */
  DomainName: string;
  /** 是否启用，0：关闭，1：启用。不传表示不修改当前值。 */
  Enable?: number;
  /** 鉴权key。不传表示不修改当前值。 */
  AuthKey?: string;
  /** 有效时间，单位：秒。不传表示不修改当前值。 */
  AuthDelta?: number;
  /** 鉴权备用key。不传表示不修改当前值。 */
  AuthBackKey?: string;
}

declare interface ModifyLivePlayAuthKeyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyLivePlayDomainRequest {
  /** 播放域名。 */
  DomainName: string;
  /** 拉流域名类型。1-国内；2-全球；3-境外 */
  PlayType: number;
}

declare interface ModifyLivePlayDomainResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyLivePullStreamTaskRequest {
  /** 任务Id。 */
  TaskId: string;
  /** 操作人姓名。 */
  Operator: string;
  /** 拉流源url列表。SourceType为直播（PullLivePushLive）只可以填1个，SourceType为点播（PullVodPushLive）可以填多个，上限30个。 */
  SourceUrls?: string[];
  /** 开始时间。使用UTC格式时间，例如：2019-01-08T10:00:00Z。注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/267/38543)。 */
  StartTime?: string;
  /** 结束时间，注意：1. 结束时间必须大于开始时间；2. 结束时间和开始时间必须大于当前时间；3. 结束时间 和 开始时间 间隔必须小于30天。使用UTC格式时间，例如：2019-01-08T10:00:00Z。注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/267/38543)。 */
  EndTime?: string;
  /** 点播拉流转推循环次数。-1：无限循环，直到任务结束。0：不循环。>0：具体循环次数。次数和时间以先结束的为准。注意：拉流源为点播，该配置生效。 */
  VodLoopTimes?: number;
  /** 点播更新SourceUrls后的播放方式：ImmediateNewSource：立即从更新的拉流源开始播放；ContinueBreakPoint：从上次断流url源的断点处继续，结束后再使用新的拉流源。注意：拉流源为点播，该配置生效。 */
  VodRefreshType?: string;
  /** 任务状态：enable - 启用，pause - 暂停。 */
  Status?: string;
  /** 选择需要回调的事件（不填则回调全部）：TaskStart：任务启动回调，TaskExit：任务停止回调，VodSourceFileStart：从点播源文件开始拉流回调，VodSourceFileFinish：从点播源文件拉流结束回调，ResetTaskConfig：任务更新回调。 */
  CallbackEvents?: string[];
  /** 自定义回调地址。相关事件会回调到该地址。 */
  CallbackUrl?: string;
  /** 指定播放文件索引。注意： 从1开始，不大于SourceUrls中文件个数。 */
  FileIndex?: number;
  /** 指定播放文件偏移。注意：1. 单位：秒，配合FileIndex使用。 */
  OffsetTime?: number;
  /** 指定任务 ID 修改任务。注意：该自定义任务 ID 只有在创建任务时指定了，才可在此处修改时使用。否则请使用系统返回的任务 ID。 */
  SpecifyTaskId?: string;
  /** 目标 Url。换目标地址，会断流重推到新地址。 */
  ToUrl?: string;
  /** 任务备注。 */
  Comment?: string;
  /** 备源的类型：PullLivePushLive -直播，PullVodPushLive -点播。注意：1. 仅当主源类型为直播源时，备源才会生效。2. 将该参数置为空，则可将任务去除备源信息。3. 主直播源拉流中断时，自动使用备源进行拉流。4. 如果备源为点播文件时，则每次轮播完点播文件就检查主源是否恢复，如果主源恢复则自动切回到主源，否则继续拉备源。 */
  BackupSourceType?: string;
  /** 备源 URL。只允许填一个备源 URL */
  BackupSourceUrl?: string;
  /** 水印信息列表。注意：1. 最多支持4个不同位置的水印。2. 水印图片 URL 请使用合法外网可访问地址。3. 支持的水印图片格式：png，jpg等。4. 轮播任务修改水印后，轮播到下一个文件时新水印生效。5. 直播源任务修改水印后，水印立即生效。6. 清除水印时，需携带该水印列表参数，内容为空数组。7. 暂不支持动图水印。 */
  WatermarkList?: PullPushWatermarkInfo[];
  /** 点播源是否启用本地推流模式，默认0，不启用。0 - 不启用。1 - 启用。注意：启用本地模式后，会将源列表中的 MP4 文件进行本地下载，优先使用本地已下载文件进行推流，提高点播源推流稳定性。使用本地下载文件推流时，会产生增值费用。 */
  VodLocalMode?: number;
  /** 新的目标地址。传空值，则取消该地址的推流。传入新值，则替换原有地址。 */
  BackupToUrl?: string;
  /** 点播垫片文件地址。注意：用于在主源拉不到时自动兜底到垫片文件，切到垫片文件后，每次播完垫片会尝试拉主源，如果主源恢复则自动切回主源。可根据需要的轮询检查时长来传入对应时长的垫片文件。 */
  BackupVodUrl?: string;
}

declare interface ModifyLivePullStreamTaskResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyLivePushAuthKeyRequest {
  /** 推流域名。 */
  DomainName: string;
  /** 是否启用，0：关闭，1：启用。不传表示不修改当前值。 */
  Enable?: number;
  /** 主鉴权key。不传表示不修改当前值。 */
  MasterAuthKey?: string;
  /** 备鉴权key。不传表示不修改当前值。 */
  BackupAuthKey?: string;
  /** 有效时间，单位：秒。 */
  AuthDelta?: number;
}

declare interface ModifyLivePushAuthKeyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyLiveRecordTemplateRequest {
  /** DescribeRecordTemplates接口获取到的模板 ID。 */
  TemplateId: number;
  /** 模板名称。 */
  TemplateName?: string;
  /** 描述信息。 */
  Description?: string;
  /** FLV 录制参数，开启 FLV 录制时设置。 */
  FlvParam?: RecordParam;
  /** HLS 录制参数，开启 HLS 录制时设置。 */
  HlsParam?: RecordParam;
  /** MP4 录制参数，开启 MP4 录制时设置。 */
  Mp4Param?: RecordParam;
  /** AAC 录制参数，开启 AAC 录制时设置。 */
  AacParam?: RecordParam;
  /** HLS 录制定制参数。 */
  HlsSpecialParam?: HlsSpecialParam;
  /** MP3 录制参数，开启 MP3 录制时设置。 */
  Mp3Param?: RecordParam;
  /** 是否去除水印，类型为慢直播时此参数无效。 */
  RemoveWatermark?: boolean;
  /** FLV 录制定制参数。 */
  FlvSpecialParam?: FlvSpecialParam;
}

declare interface ModifyLiveRecordTemplateResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyLiveSnapshotTemplateRequest {
  /** 模板 ID。 */
  TemplateId: number;
  /** Cos 应用 ID。**注：此参数现在须必选。** */
  CosAppId: number;
  /** Cos Bucket名称。注：CosBucket参数值不能包含-[appid] 部分。**注：此参数现在须必选。** */
  CosBucket: string;
  /** Cos 地域。**注：此参数现在须必选。** */
  CosRegion: string;
  /** 模板名称。长度上限：255字节。 */
  TemplateName?: string;
  /** 描述信息。长度上限：1024字节。 */
  Description?: string;
  /** 截图间隔，单位s，默认10s。范围： 5s ~ 300s。 */
  SnapshotInterval?: number;
  /** 截图宽度。默认：0（原始宽）。 */
  Width?: number;
  /** 截图高度。默认：0（原始高）。 */
  Height?: number;
  /** 是否开启鉴黄，默认 0 。0：不开启。1：开启。 */
  PornFlag?: number;
  /** Cos Bucket文件夹前缀。 */
  CosPrefix?: string;
  /** Cos 文件名称。 */
  CosFileName?: string;
}

declare interface ModifyLiveSnapshotTemplateResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyLiveStreamMonitorRequest {
  /** 监播任务ID。 */
  MonitorId: string;
  /** 监播任务的名称。长度128字节以内（一个汉字两个字节）。 */
  MonitorName?: string;
  /** 监播任务输出信息。 */
  OutputInfo?: LiveStreamMonitorOutputInfo;
  /** 待监播的输入流信息。 */
  InputList?: LiveStreamMonitorInputInfo[];
  /** 监播事件通知策略。 */
  NotifyPolicy?: LiveStreamMonitorNotifyPolicy;
  /** 智能语音识别语种：0 关闭 1 中文 2 英文 3 日文 4 韩文。 */
  AsrLanguage?: number;
  /** 智能文字识别语种：0 关闭 1 中、英文。 */
  OcrLanguage?: number;
  /** 语音识别输入流列表，1代表第一条输入流。 */
  AiAsrInputIndexList?: number[];
  /** 文字识别输入流列表，1代表第一条输入流。 */
  AiOcrInputIndexList?: number[];
  /** 是否开启断流检测。 */
  CheckStreamBroken?: number;
  /** 是否开启低帧率检测。 */
  CheckStreamLowFrameRate?: number;
  /** 是否存储监播事件到监播报告，以及是否允许查询监播报告。 */
  AllowMonitorReport?: number;
  /** 是否开启格式诊断。 */
  AiFormatDiagnose?: number;
  /** 是否开启内容质检。 */
  AiQualityControl?: number;
}

declare interface ModifyLiveStreamMonitorResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyLiveTimeShiftTemplateRequest {
  /** 时移模板id。 */
  TemplateId: number;
  /** 模板名称。仅支持中文、英文、数字、_、-。 */
  TemplateName?: string;
  /** 描述信息。长度上限：1024字节。仅支持中文、英文、数字、_、-。 */
  Description?: string;
  /** 时移时长。单位：s。 */
  Duration?: number;
  /** 分片时长。可取3-10。单位：s。默认值：5。 */
  ItemDuration?: number;
  /** 是否去除水印。传true则将录制原始流。默认值：false。 */
  RemoveWatermark?: boolean;
  /** 转码流id列表。此参数仅在 RemoveWatermark为false时生效。 */
  TranscodeTemplateIds?: number[];
  /** 地域。Mainland：中国大陆。Overseas：海外及港澳台地区。默认值：Mainland。 */
  Area?: string;
}

declare interface ModifyLiveTimeShiftTemplateResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyLiveTranscodeTemplateRequest {
  /** 模板 Id。 */
  TemplateId: number;
  /** 视频编码：h264/h265/origin，默认origin。origin: 保持原始编码格式 */
  Vcodec?: string;
  /** 音频编码：aac，默认aac。注意：当前该参数未生效，待后续支持！ */
  Acodec?: string;
  /** 音频码率，默认0。范围：0-500。 */
  AudioBitrate?: number;
  /** 模板描述。 */
  Description?: string;
  /** 视频码率。范围：0kbps - 8000kbps。0为保持原始码率。注: 转码模板有码率唯一要求，最终保存的码率可能与输入码率有所差别。 */
  VideoBitrate?: number;
  /** 宽。0-3000。数值必须是2的倍数，0是原始宽度 */
  Width?: number;
  /** 是否保留视频，0：否，1：是。默认1。 */
  NeedVideo?: number;
  /** 是否保留音频，0：否，1：是。默认1。 */
  NeedAudio?: number;
  /** 高。0-3000。数值必须是2的倍数，0是原始宽度 */
  Height?: number;
  /** 帧率，默认0。范围0-60 */
  Fps?: number;
  /** 关键帧间隔，单位：秒。范围2-6 */
  Gop?: number;
  /** 旋转角度，默认0。可取值：0，90，180，270 */
  Rotate?: number;
  /** 编码质量：baseline/main/high。 */
  Profile?: string;
  /** 当设置的码率>原始码率时，是否以原始码率为准。0：否， 1：是默认 0。 */
  BitrateToOrig?: number;
  /** 当设置的高度>原始高度时，是否以原始高度为准。0：否， 1：是默认 0。 */
  HeightToOrig?: number;
  /** 当设置的帧率>原始帧率时，是否以原始帧率为准。0：否， 1：是默认 0。 */
  FpsToOrig?: number;
  /** 极速高清视频码率压缩比。极速高清目标码率=VideoBitrate * (1-AdaptBitratePercent)取值范围：0.0到0.5 */
  AdaptBitratePercent?: number;
  /** 是否以短边作为高度，0：否，1：是。默认0。 */
  ShortEdgeAsHeight?: number;
  /** DRM 加密类型，可选值：fairplay、normalaes、widevine。不传递或者为空字符串，清空之前的DRM配置。 */
  DRMType?: string;
  /** DRM 加密项，可选值：AUDIO、SD、HD、UHD1、UHD2，后四个为一组，同组中的内容只能选一个。不传递或者为空字符串，清空之前的DRM配置。 */
  DRMTracks?: string;
  /** 是否创建自适应码率，默认值 0。0：否。1：是。 */
  IsAdaptiveBitRate?: number;
  /** 自适应码率，子转码模板信息，当 IsAdaptiveBitRate 为 1 时有效。 */
  AdaptiveChildren?: ChildTemplateInfo[];
}

declare interface ModifyLiveTranscodeTemplateResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyPullStreamConfigRequest {
  /** 配置 ID。获取来源：1. 创建拉流配置接口CreatePullStreamConfig返回的配置 ID。2. 通过查询接口DescribePullStreamConfigs获取配置 ID。 */
  ConfigId: string;
  /** 源 URL，用于拉流的地址。目前可支持直播流及点播文件。注意：1. 多个点播 URL 之间使用空格拼接。2. 目前上限支持10个 URL。3. 支持拉流文件格式：FLV，RTMP，HLS，MP4。4. 使用标准三层样式，如：http://test.com/live/stream.flv。 */
  FromUrl?: string;
  /** 目的 URL，用于推流的地址，目前限制该目标地址为腾讯域名。1. 仅支持 RTMP 协议。2. 使用标准三层样式，如：http://test.com/live/stream.flv。 */
  ToUrl?: string;
  /** 区域 ID：1-深圳。2-上海。3-天津。4-中国香港。如有改动，需同时传入IspId。 */
  AreaId?: number;
  /** 运营商 ID，1：电信。2：移动。3：联通。4：其他。AreaId为4的时候，IspId只能为其他。如有改动，需同时传入AreaId。 */
  IspId?: number;
  /** 开始时间。使用UTC格式时间，例如：2019-01-08T10:00:00Z。注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732)。 */
  StartTime?: string;
  /** 结束时间，注意：1. 结束时间必须大于开始时间；2. 结束时间和开始时间必须大于当前时间；3. 结束时间 和 开始时间 间隔必须小于七天。使用UTC格式时间，例如：2019-01-08T10:00:00Z。注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732)。 */
  EndTime?: string;
}

declare interface ModifyPullStreamConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyPullStreamStatusRequest {
  /** 配置 ID 列表。 */
  ConfigIds: string[];
  /** 目标状态。0无效，2正在运行，4暂停。 */
  Status: string;
}

declare interface ModifyPullStreamStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ReleaseCasterRequest {
  /** 导播台ID。 */
  CasterId: number;
}

declare interface ReleaseCasterResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RestartLivePullStreamTaskRequest {
  /** 任务 Id。 */
  TaskId: string;
  /** 操作人备注名称。 */
  Operator: string;
}

declare interface RestartLivePullStreamTaskResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ResumeDelayLiveStreamRequest {
  /** 推流路径，与推流和播放地址中的AppName保持一致，默认为live。 */
  AppName: string;
  /** 推流域名。 */
  DomainName: string;
  /** 流名称。 */
  StreamName: string;
}

declare interface ResumeDelayLiveStreamResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ResumeLiveStreamRequest {
  /** 推流路径，与推流和播放地址中的AppName保持一致，默认为 live。 */
  AppName: string;
  /** 您的推流域名。 */
  DomainName: string;
  /** 流名称。 */
  StreamName: string;
}

declare interface ResumeLiveStreamResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SendLiveCloudEffectRequest {
  /** 推流路径，与推流和播放地址中的AppName保持一致，默认为 live。 */
  AppName: string;
  /** 您的推流域名。 */
  PushDomainName: string;
  /** 流名称。 */
  StreamName: string;
  /** 云端特效 ID。 */
  Id: string;
  /** 默认随系统配置，云端特效循环 少于5次。可自定义指定礼物循环次数，不超过100次。 */
  LoopTimes?: number;
  /** 操作人备注信息。 */
  Operator?: string;
  /** 缩小比例，默认0 不缩放。可选值：0-9， 值越大，越缩小。 */
  ZoomFactor?: number;
  /** 指定云端特效渲染位置百分比。默认居中显示。原点为画面左上角，该参数指定特效渲染离原点的横向比例，可选值 0 - 100。 */
  XPosition?: string;
  /** 指定云端特效渲染位置百分比。默认居中显示。原点为画面左上角，该参数指定特效渲染离原点的纵向比例，可选值 0 - 100。 */
  YPosition?: string;
}

declare interface SendLiveCloudEffectResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StartLivePadStreamRequest {
  /** 推流路径，与推流和播放地址中的AppName保持一致，默认为 live。 */
  AppName: string;
  /** 您的推流域名。 */
  PushDomainName: string;
  /** 流名称。 */
  StreamName: string;
  /** 操作人备注信息。 */
  Operator?: string;
}

declare interface StartLivePadStreamResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StartLiveStreamMonitorRequest {
  /** 监播ID。 */
  MonitorId: string;
  /** 监播画面声音InputIndex,支持多个输入声音。取值范围 InputIndex必须已经存在。不填默认无声音输出。 */
  AudibleInputIndexList?: number[];
}

declare interface StartLiveStreamMonitorResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StopCasterPgmRequest {
  /** 导播台ID。 */
  CasterId: number;
}

declare interface StopCasterPgmResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StopCasterPvwRequest {
  /** 导播台ID。 */
  CasterId: number;
}

declare interface StopCasterPvwResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StopLivePadStreamRequest {
  /** 推流路径，与推流和播放地址中的AppName保持一致，默认为 live。 */
  AppName: string;
  /** 您的推流域名。 */
  PushDomainName: string;
  /** 流名称。 */
  StreamName: string;
  /** 操作人备注信息。 */
  Operator?: string;
}

declare interface StopLivePadStreamResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StopLiveRecordRequest {
  /** 流名称。 */
  StreamName: string;
  /** 任务ID，由CreateLiveRecord接口返回。 */
  TaskId: number;
}

declare interface StopLiveRecordResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StopLiveStreamMonitorRequest {
  /** 监播ID */
  MonitorId: string;
}

declare interface StopLiveStreamMonitorResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StopRecordTaskRequest {
  /** 录制任务ID。 */
  TaskId: string;
}

declare interface StopRecordTaskResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StopScreenshotTaskRequest {
  /** 截图任务ID。 */
  TaskId: string;
}

declare interface StopScreenshotTaskResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SwitchBackupStreamRequest {
  /** 推流域名。 */
  PushDomainName: string;
  /** 应用名称。 */
  AppName: string;
  /** 流名称。 */
  StreamName: string;
  /** 查询接口获取到该流所有在推的上行 Sequence。指定要切到的目标上行 Sequence。 */
  UpstreamSequence: string;
}

declare interface SwitchBackupStreamResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UnBindLiveDomainCertRequest {
  /** 播放域名。 */
  DomainName: string;
  /** 枚举值：gray: 解绑灰度规则formal(默认): 解绑正式规则不传则为formal */
  Type?: string;
}

declare interface UnBindLiveDomainCertResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateLiveWatermarkRequest {
  /** 水印 ID。在添加水印接口 [AddLiveWatermark](/document/product/267/30154) 调用返回值中获取水印 ID。 */
  WatermarkId: number;
  /** 水印图片 URL。URL中禁止包含的字符： ;(){}$>`#"\'| */
  PictureUrl: string;
  /** 显示位置，X轴偏移，单位是百分比，默认 0。 */
  XPosition: number;
  /** 显示位置，Y轴偏移，单位是百分比，默认 0。 */
  YPosition: number;
  /** 水印名称。最长30字节。 */
  WatermarkName?: string;
  /** 水印宽度，占直播原始画面宽度百分比，建议高宽只设置一项，另外一项会自适应缩放，避免变形。默认原始宽度。 */
  Width?: number;
  /** 水印高度，占直播原始画面宽度百分比，建议高宽只设置一项，另外一项会自适应缩放，避免变形。默认原始高度。 */
  Height?: number;
  /** 背景水印宽度。默认宽度1920。 */
  BackgroundWidth?: number;
  /** 背景水印高度。默认高度1080。 */
  BackgroundHeight?: number;
}

declare interface UpdateLiveWatermarkResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Live 云直播CSS} */
declare interface Live {
  (): Versions;
  /** 新增导播台输入源 {@link AddCasterInputInfoRequest} {@link AddCasterInputInfoResponse} */
  AddCasterInputInfo(data: AddCasterInputInfoRequest, config?: AxiosRequestConfig): AxiosPromise<AddCasterInputInfoResponse>;
  /** 新增导播台布局 {@link AddCasterLayoutInfoRequest} {@link AddCasterLayoutInfoResponse} */
  AddCasterLayoutInfo(data: AddCasterLayoutInfoRequest, config?: AxiosRequestConfig): AxiosPromise<AddCasterLayoutInfoResponse>;
  /** 新增导播台水印信息 {@link AddCasterMarkPicInfoRequest} {@link AddCasterMarkPicInfoResponse} */
  AddCasterMarkPicInfo(data: AddCasterMarkPicInfoRequest, config?: AxiosRequestConfig): AxiosPromise<AddCasterMarkPicInfoResponse>;
  /** 新增导播台文本配置 {@link AddCasterMarkWordInfoRequest} {@link AddCasterMarkWordInfoResponse} */
  AddCasterMarkWordInfo(data: AddCasterMarkWordInfoRequest, config?: AxiosRequestConfig): AxiosPromise<AddCasterMarkWordInfoResponse>;
  /** 新增导播台推流信息 {@link AddCasterOutputInfoRequest} {@link AddCasterOutputInfoResponse} */
  AddCasterOutputInfo(data: AddCasterOutputInfoRequest, config?: AxiosRequestConfig): AxiosPromise<AddCasterOutputInfoResponse>;
  /** 设置延时直播 {@link AddDelayLiveStreamRequest} {@link AddDelayLiveStreamResponse} */
  AddDelayLiveStream(data: AddDelayLiveStreamRequest, config?: AxiosRequestConfig): AxiosPromise<AddDelayLiveStreamResponse>;
  /** 添加域名 {@link AddLiveDomainRequest} {@link AddLiveDomainResponse} */
  AddLiveDomain(data: AddLiveDomainRequest, config?: AxiosRequestConfig): AxiosPromise<AddLiveDomainResponse>;
  /** 添加水印 {@link AddLiveWatermarkRequest} {@link AddLiveWatermarkResponse} */
  AddLiveWatermark(data: AddLiveWatermarkRequest, config?: AxiosRequestConfig): AxiosPromise<AddLiveWatermarkResponse>;
  /** 验证直播域名所有权 {@link AuthenticateDomainOwnerRequest} {@link AuthenticateDomainOwnerResponse} */
  AuthenticateDomainOwner(data: AuthenticateDomainOwnerRequest, config?: AxiosRequestConfig): AxiosPromise<AuthenticateDomainOwnerResponse>;
  /** 取消通用混流 {@link CancelCommonMixStreamRequest} {@link CancelCommonMixStreamResponse} */
  CancelCommonMixStream(data: CancelCommonMixStreamRequest, config?: AxiosRequestConfig): AxiosPromise<CancelCommonMixStreamResponse>;
  /** 复制导播台 {@link CopyCasterRequest} {@link CopyCasterResponse} */
  CopyCaster(data: CopyCasterRequest, config?: AxiosRequestConfig): AxiosPromise<CopyCasterResponse>;
  /** 直播审核创建关键词 {@link CreateAuditKeywordsRequest} {@link CreateAuditKeywordsResponse} */
  CreateAuditKeywords(data: CreateAuditKeywordsRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAuditKeywordsResponse>;
  /** 创建导播台 {@link CreateCasterRequest} {@link CreateCasterResponse} */
  CreateCaster(data?: CreateCasterRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCasterResponse>;
  /** 生成导播台推流URL {@link CreateCasterInputPushUrlRequest} {@link CreateCasterInputPushUrlResponse} */
  CreateCasterInputPushUrl(data: CreateCasterInputPushUrlRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCasterInputPushUrlResponse>;
  /** 创建导播台主监任务 {@link CreateCasterPgmRequest} {@link CreateCasterPgmResponse} */
  CreateCasterPgm(data: CreateCasterPgmRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCasterPgmResponse>;
  /** 复制导播台预监展示信息创建主监任务 {@link CreateCasterPgmFromPvwRequest} {@link CreateCasterPgmFromPvwResponse} */
  CreateCasterPgmFromPvw(data: CreateCasterPgmFromPvwRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCasterPgmFromPvwResponse>;
  /** 创建导播台预监任务 {@link CreateCasterPvwRequest} {@link CreateCasterPvwResponse} */
  CreateCasterPvw(data: CreateCasterPvwRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCasterPvwResponse>;
  /** 创建通用混流 {@link CreateCommonMixStreamRequest} {@link CreateCommonMixStreamResponse} */
  CreateCommonMixStream(data: CreateCommonMixStreamRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCommonMixStreamResponse>;
  /** 创建回调规则 {@link CreateLiveCallbackRuleRequest} {@link CreateLiveCallbackRuleResponse} */
  CreateLiveCallbackRule(data: CreateLiveCallbackRuleRequest, config?: AxiosRequestConfig): AxiosPromise<CreateLiveCallbackRuleResponse>;
  /** 创建回调模板 {@link CreateLiveCallbackTemplateRequest} {@link CreateLiveCallbackTemplateResponse} */
  CreateLiveCallbackTemplate(data: CreateLiveCallbackTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<CreateLiveCallbackTemplateResponse>;
  /** 创建直播垫片规则 {@link CreateLivePadRuleRequest} {@link CreateLivePadRuleResponse} */
  CreateLivePadRule(data: CreateLivePadRuleRequest, config?: AxiosRequestConfig): AxiosPromise<CreateLivePadRuleResponse>;
  /** 创建直播垫片模板 {@link CreateLivePadTemplateRequest} {@link CreateLivePadTemplateResponse} */
  CreateLivePadTemplate(data: CreateLivePadTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<CreateLivePadTemplateResponse>;
  /** 创建直播拉流任务 {@link CreateLivePullStreamTaskRequest} {@link CreateLivePullStreamTaskResponse} */
  CreateLivePullStreamTask(data: CreateLivePullStreamTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateLivePullStreamTaskResponse>;
  /** 创建录制任务(已废弃,请使用新接口) {@link CreateLiveRecordRequest} {@link CreateLiveRecordResponse} */
  CreateLiveRecord(data: CreateLiveRecordRequest, config?: AxiosRequestConfig): AxiosPromise<CreateLiveRecordResponse>;
  /** 创建录制规则 {@link CreateLiveRecordRuleRequest} {@link CreateLiveRecordRuleResponse} */
  CreateLiveRecordRule(data: CreateLiveRecordRuleRequest, config?: AxiosRequestConfig): AxiosPromise<CreateLiveRecordRuleResponse>;
  /** 直播创建录制模板 {@link CreateLiveRecordTemplateRequest} {@link CreateLiveRecordTemplateResponse} */
  CreateLiveRecordTemplate(data: CreateLiveRecordTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<CreateLiveRecordTemplateResponse>;
  /** 创建截图规则 {@link CreateLiveSnapshotRuleRequest} {@link CreateLiveSnapshotRuleResponse} */
  CreateLiveSnapshotRule(data: CreateLiveSnapshotRuleRequest, config?: AxiosRequestConfig): AxiosPromise<CreateLiveSnapshotRuleResponse>;
  /** 创建截图模板 {@link CreateLiveSnapshotTemplateRequest} {@link CreateLiveSnapshotTemplateResponse} */
  CreateLiveSnapshotTemplate(data: CreateLiveSnapshotTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<CreateLiveSnapshotTemplateResponse>;
  /** 创建直播流监播任务 {@link CreateLiveStreamMonitorRequest} {@link CreateLiveStreamMonitorResponse} */
  CreateLiveStreamMonitor(data: CreateLiveStreamMonitorRequest, config?: AxiosRequestConfig): AxiosPromise<CreateLiveStreamMonitorResponse>;
  /** 创建直播时移规则 {@link CreateLiveTimeShiftRuleRequest} {@link CreateLiveTimeShiftRuleResponse} */
  CreateLiveTimeShiftRule(data: CreateLiveTimeShiftRuleRequest, config?: AxiosRequestConfig): AxiosPromise<CreateLiveTimeShiftRuleResponse>;
  /** 创建直播时移模板 {@link CreateLiveTimeShiftTemplateRequest} {@link CreateLiveTimeShiftTemplateResponse} */
  CreateLiveTimeShiftTemplate(data: CreateLiveTimeShiftTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<CreateLiveTimeShiftTemplateResponse>;
  /** 创建转码规则 {@link CreateLiveTranscodeRuleRequest} {@link CreateLiveTranscodeRuleResponse} */
  CreateLiveTranscodeRule(data: CreateLiveTranscodeRuleRequest, config?: AxiosRequestConfig): AxiosPromise<CreateLiveTranscodeRuleResponse>;
  /** 创建转码模板 {@link CreateLiveTranscodeTemplateRequest} {@link CreateLiveTranscodeTemplateResponse} */
  CreateLiveTranscodeTemplate(data: CreateLiveTranscodeTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<CreateLiveTranscodeTemplateResponse>;
  /** 创建水印规则 {@link CreateLiveWatermarkRuleRequest} {@link CreateLiveWatermarkRuleResponse} */
  CreateLiveWatermarkRule(data: CreateLiveWatermarkRuleRequest, config?: AxiosRequestConfig): AxiosPromise<CreateLiveWatermarkRuleResponse>;
  /** 添加拉流配置(该接口已下线,请使用新接口 CreateLivePullStreamTask) {@link CreatePullStreamConfigRequest} {@link CreatePullStreamConfigResponse} */
  CreatePullStreamConfig(data: CreatePullStreamConfigRequest, config?: AxiosRequestConfig): AxiosPromise<CreatePullStreamConfigResponse>;
  /** 创建录制任务（新） {@link CreateRecordTaskRequest} {@link CreateRecordTaskResponse} */
  CreateRecordTask(data: CreateRecordTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateRecordTaskResponse>;
  /** 创建截图任务 {@link CreateScreenshotTaskRequest} {@link CreateScreenshotTaskResponse} */
  CreateScreenshotTask(data: CreateScreenshotTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateScreenshotTaskResponse>;
  /** 直播审核删除关键词 {@link DeleteAuditKeywordsRequest} {@link DeleteAuditKeywordsResponse} */
  DeleteAuditKeywords(data: DeleteAuditKeywordsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAuditKeywordsResponse>;
  /** 删除导播台 {@link DeleteCasterRequest} {@link DeleteCasterResponse} */
  DeleteCaster(data: DeleteCasterRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCasterResponse>;
  /** 删除导播台输入源 {@link DeleteCasterInputInfoRequest} {@link DeleteCasterInputInfoResponse} */
  DeleteCasterInputInfo(data: DeleteCasterInputInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCasterInputInfoResponse>;
  /** 删除导播台布局 {@link DeleteCasterLayoutInfoRequest} {@link DeleteCasterLayoutInfoResponse} */
  DeleteCasterLayoutInfo(data: DeleteCasterLayoutInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCasterLayoutInfoResponse>;
  /** 删除导播台水印信息 {@link DeleteCasterMarkPicInfoRequest} {@link DeleteCasterMarkPicInfoResponse} */
  DeleteCasterMarkPicInfo(data: DeleteCasterMarkPicInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCasterMarkPicInfoResponse>;
  /** 删除导播台文本配置 {@link DeleteCasterMarkWordInfoRequest} {@link DeleteCasterMarkWordInfoResponse} */
  DeleteCasterMarkWordInfo(data: DeleteCasterMarkWordInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCasterMarkWordInfoResponse>;
  /** 删除导播台推流信息 {@link DeleteCasterOutputInfoRequest} {@link DeleteCasterOutputInfoResponse} */
  DeleteCasterOutputInfo(data: DeleteCasterOutputInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCasterOutputInfoResponse>;
  /** 删除回调规则 {@link DeleteLiveCallbackRuleRequest} {@link DeleteLiveCallbackRuleResponse} */
  DeleteLiveCallbackRule(data: DeleteLiveCallbackRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteLiveCallbackRuleResponse>;
  /** 删除回调模板 {@link DeleteLiveCallbackTemplateRequest} {@link DeleteLiveCallbackTemplateResponse} */
  DeleteLiveCallbackTemplate(data: DeleteLiveCallbackTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteLiveCallbackTemplateResponse>;
  /** 删除域名 {@link DeleteLiveDomainRequest} {@link DeleteLiveDomainResponse} */
  DeleteLiveDomain(data: DeleteLiveDomainRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteLiveDomainResponse>;
  /** 删除直播垫片规则 {@link DeleteLivePadRuleRequest} {@link DeleteLivePadRuleResponse} */
  DeleteLivePadRule(data: DeleteLivePadRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteLivePadRuleResponse>;
  /** 删除直播垫片模板 {@link DeleteLivePadTemplateRequest} {@link DeleteLivePadTemplateResponse} */
  DeleteLivePadTemplate(data: DeleteLivePadTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteLivePadTemplateResponse>;
  /** 删除直播拉流任务 {@link DeleteLivePullStreamTaskRequest} {@link DeleteLivePullStreamTaskResponse} */
  DeleteLivePullStreamTask(data: DeleteLivePullStreamTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteLivePullStreamTaskResponse>;
  /** 删除录制任务(已废弃,请使用新接口) {@link DeleteLiveRecordRequest} {@link DeleteLiveRecordResponse} */
  DeleteLiveRecord(data: DeleteLiveRecordRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteLiveRecordResponse>;
  /** 删除录制规则 {@link DeleteLiveRecordRuleRequest} {@link DeleteLiveRecordRuleResponse} */
  DeleteLiveRecordRule(data: DeleteLiveRecordRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteLiveRecordRuleResponse>;
  /** 删除录制模板 {@link DeleteLiveRecordTemplateRequest} {@link DeleteLiveRecordTemplateResponse} */
  DeleteLiveRecordTemplate(data: DeleteLiveRecordTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteLiveRecordTemplateResponse>;
  /** 删除截图规则 {@link DeleteLiveSnapshotRuleRequest} {@link DeleteLiveSnapshotRuleResponse} */
  DeleteLiveSnapshotRule(data: DeleteLiveSnapshotRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteLiveSnapshotRuleResponse>;
  /** 删除截图模板 {@link DeleteLiveSnapshotTemplateRequest} {@link DeleteLiveSnapshotTemplateResponse} */
  DeleteLiveSnapshotTemplate(data: DeleteLiveSnapshotTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteLiveSnapshotTemplateResponse>;
  /** 删除直播流监播任务 {@link DeleteLiveStreamMonitorRequest} {@link DeleteLiveStreamMonitorResponse} */
  DeleteLiveStreamMonitor(data: DeleteLiveStreamMonitorRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteLiveStreamMonitorResponse>;
  /** 删除直播时移规则 {@link DeleteLiveTimeShiftRuleRequest} {@link DeleteLiveTimeShiftRuleResponse} */
  DeleteLiveTimeShiftRule(data: DeleteLiveTimeShiftRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteLiveTimeShiftRuleResponse>;
  /** 删除直播时移模板 {@link DeleteLiveTimeShiftTemplateRequest} {@link DeleteLiveTimeShiftTemplateResponse} */
  DeleteLiveTimeShiftTemplate(data: DeleteLiveTimeShiftTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteLiveTimeShiftTemplateResponse>;
  /** 删除转码规则 {@link DeleteLiveTranscodeRuleRequest} {@link DeleteLiveTranscodeRuleResponse} */
  DeleteLiveTranscodeRule(data: DeleteLiveTranscodeRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteLiveTranscodeRuleResponse>;
  /** 删除转码模板 {@link DeleteLiveTranscodeTemplateRequest} {@link DeleteLiveTranscodeTemplateResponse} */
  DeleteLiveTranscodeTemplate(data: DeleteLiveTranscodeTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteLiveTranscodeTemplateResponse>;
  /** 删除水印 {@link DeleteLiveWatermarkRequest} {@link DeleteLiveWatermarkResponse} */
  DeleteLiveWatermark(data: DeleteLiveWatermarkRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteLiveWatermarkResponse>;
  /** 删除水印规则 {@link DeleteLiveWatermarkRuleRequest} {@link DeleteLiveWatermarkRuleResponse} */
  DeleteLiveWatermarkRule(data: DeleteLiveWatermarkRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteLiveWatermarkRuleResponse>;
  /** 删除拉流配置(该接口已下线,请使用新接口 DeleteLivePullStreamTask) {@link DeletePullStreamConfigRequest} {@link DeletePullStreamConfigResponse} */
  DeletePullStreamConfig(data: DeletePullStreamConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DeletePullStreamConfigResponse>;
  /** 删除录制任务（新） {@link DeleteRecordTaskRequest} {@link DeleteRecordTaskResponse} */
  DeleteRecordTask(data: DeleteRecordTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRecordTaskResponse>;
  /** 删除截图任务 {@link DeleteScreenshotTaskRequest} {@link DeleteScreenshotTaskResponse} */
  DeleteScreenshotTask(data: DeleteScreenshotTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteScreenshotTaskResponse>;
  /** 查询某个时间点所有流的下行播放数据 {@link DescribeAllStreamPlayInfoListRequest} {@link DescribeAllStreamPlayInfoListResponse} */
  DescribeAllStreamPlayInfoList(data: DescribeAllStreamPlayInfoListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAllStreamPlayInfoListResponse>;
  /** 海外分区直播播放带宽和流量数据查询 {@link DescribeAreaBillBandwidthAndFluxListRequest} {@link DescribeAreaBillBandwidthAndFluxListResponse} */
  DescribeAreaBillBandwidthAndFluxList(data: DescribeAreaBillBandwidthAndFluxListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAreaBillBandwidthAndFluxListResponse>;
  /** 直播审核获取关键词 {@link DescribeAuditKeywordsRequest} {@link DescribeAuditKeywordsResponse} */
  DescribeAuditKeywords(data: DescribeAuditKeywordsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAuditKeywordsResponse>;
  /** 查询直播中的主备流 {@link DescribeBackupStreamListRequest} {@link DescribeBackupStreamListResponse} */
  DescribeBackupStreamList(data?: DescribeBackupStreamListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBackupStreamListResponse>;
  /** 直播播放带宽和流量数据查询 {@link DescribeBillBandwidthAndFluxListRequest} {@link DescribeBillBandwidthAndFluxListResponse} */
  DescribeBillBandwidthAndFluxList(data: DescribeBillBandwidthAndFluxListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBillBandwidthAndFluxListResponse>;
  /** 回调事件查询 {@link DescribeCallbackRecordsListRequest} {@link DescribeCallbackRecordsListResponse} */
  DescribeCallbackRecordsList(data: DescribeCallbackRecordsListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCallbackRecordsListResponse>;
  /** 查询导播台信息 {@link DescribeCasterRequest} {@link DescribeCasterResponse} */
  DescribeCaster(data: DescribeCasterRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCasterResponse>;
  /** 查询导播台展示信息 {@link DescribeCasterDisplayInfoRequest} {@link DescribeCasterDisplayInfoResponse} */
  DescribeCasterDisplayInfo(data: DescribeCasterDisplayInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCasterDisplayInfoResponse>;
  /** 查询导播台输入源列表 {@link DescribeCasterInputInfosRequest} {@link DescribeCasterInputInfosResponse} */
  DescribeCasterInputInfos(data: DescribeCasterInputInfosRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCasterInputInfosResponse>;
  /** 查询导播台布局列表 {@link DescribeCasterLayoutInfosRequest} {@link DescribeCasterLayoutInfosResponse} */
  DescribeCasterLayoutInfos(data: DescribeCasterLayoutInfosRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCasterLayoutInfosResponse>;
  /** 查询导播台列表 {@link DescribeCasterListRequest} {@link DescribeCasterListResponse} */
  DescribeCasterList(data?: DescribeCasterListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCasterListResponse>;
  /** 查询导播台水印信息列表 {@link DescribeCasterMarkPicInfosRequest} {@link DescribeCasterMarkPicInfosResponse} */
  DescribeCasterMarkPicInfos(data: DescribeCasterMarkPicInfosRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCasterMarkPicInfosResponse>;
  /** 查询导播台文本配置列表 {@link DescribeCasterMarkWordInfosRequest} {@link DescribeCasterMarkWordInfosResponse} */
  DescribeCasterMarkWordInfos(data: DescribeCasterMarkWordInfosRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCasterMarkWordInfosResponse>;
  /** 查询导播台的推流信息列表 {@link DescribeCasterOutputInfosRequest} {@link DescribeCasterOutputInfosResponse} */
  DescribeCasterOutputInfos(data: DescribeCasterOutputInfosRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCasterOutputInfosResponse>;
  /** 获取导播台视频流播放url {@link DescribeCasterPlayUrlRequest} {@link DescribeCasterPlayUrlResponse} */
  DescribeCasterPlayUrl(data: DescribeCasterPlayUrlRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCasterPlayUrlResponse>;
  /** 获取导播台转场列表 {@link DescribeCasterTransitionTypesRequest} {@link DescribeCasterTransitionTypesResponse} */
  DescribeCasterTransitionTypes(data: DescribeCasterTransitionTypesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCasterTransitionTypesResponse>;
  /** 查询当前APPID导播台业务状态 {@link DescribeCasterUserStatusRequest} {@link DescribeCasterUserStatusResponse} */
  DescribeCasterUserStatus(data?: DescribeCasterUserStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCasterUserStatusResponse>;
  /** 查询并发录制路数 {@link DescribeConcurrentRecordStreamNumRequest} {@link DescribeConcurrentRecordStreamNumResponse} */
  DescribeConcurrentRecordStreamNum(data: DescribeConcurrentRecordStreamNumRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeConcurrentRecordStreamNumResponse>;
  /** 查询直播转推计费带宽 {@link DescribeDeliverBandwidthListRequest} {@link DescribeDeliverBandwidthListResponse} */
  DescribeDeliverBandwidthList(data: DescribeDeliverBandwidthListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDeliverBandwidthListResponse>;
  /** 批量获取转推日志的URL {@link DescribeDeliverLogDownListRequest} {@link DescribeDeliverLogDownListResponse} */
  DescribeDeliverLogDownList(data?: DescribeDeliverLogDownListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDeliverLogDownListResponse>;
  /** 查询按省份和运营商分组的下行播放数据 {@link DescribeGroupProIspPlayInfoListRequest} {@link DescribeGroupProIspPlayInfoListResponse} */
  DescribeGroupProIspPlayInfoList(data: DescribeGroupProIspPlayInfoListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeGroupProIspPlayInfoListResponse>;
  /** 查询播放http状态码明细数据 {@link DescribeHttpStatusInfoListRequest} {@link DescribeHttpStatusInfoListResponse} */
  DescribeHttpStatusInfoList(data: DescribeHttpStatusInfoListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeHttpStatusInfoListResponse>;
  /** 获取回调规则列表 {@link DescribeLiveCallbackRulesRequest} {@link DescribeLiveCallbackRulesResponse} */
  DescribeLiveCallbackRules(data?: DescribeLiveCallbackRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLiveCallbackRulesResponse>;
  /** 获取直播单个回调模板 {@link DescribeLiveCallbackTemplateRequest} {@link DescribeLiveCallbackTemplateResponse} */
  DescribeLiveCallbackTemplate(data: DescribeLiveCallbackTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLiveCallbackTemplateResponse>;
  /** 获取回调模板列表 {@link DescribeLiveCallbackTemplatesRequest} {@link DescribeLiveCallbackTemplatesResponse} */
  DescribeLiveCallbackTemplates(data?: DescribeLiveCallbackTemplatesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLiveCallbackTemplatesResponse>;
  /** 获取证书信息(该接口已下线,请使用新接口 ssl.DescribeCertificateDetail) {@link DescribeLiveCertRequest} {@link DescribeLiveCertResponse} */
  DescribeLiveCert(data: DescribeLiveCertRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLiveCertResponse>;
  /** 获取证书信息列表(该接口已下线，请使用新接口 DescribeLiveDomainCertBindings) {@link DescribeLiveCertsRequest} {@link DescribeLiveCertsResponse} */
  DescribeLiveCerts(data?: DescribeLiveCertsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLiveCertsResponse>;
  /** 查询直播云端特效列表 {@link DescribeLiveCloudEffectListRequest} {@link DescribeLiveCloudEffectListResponse} */
  DescribeLiveCloudEffectList(data?: DescribeLiveCloudEffectListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLiveCloudEffectListResponse>;
  /** 获取直播延播列表 {@link DescribeLiveDelayInfoListRequest} {@link DescribeLiveDelayInfoListResponse} */
  DescribeLiveDelayInfoList(data?: DescribeLiveDelayInfoListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLiveDelayInfoListResponse>;
  /** 查询域名信息 {@link DescribeLiveDomainRequest} {@link DescribeLiveDomainResponse} */
  DescribeLiveDomain(data: DescribeLiveDomainRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLiveDomainResponse>;
  /** 获取域名证书信息 {@link DescribeLiveDomainCertRequest} {@link DescribeLiveDomainCertResponse} */
  DescribeLiveDomainCert(data: DescribeLiveDomainCertRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLiveDomainCertResponse>;
  /** 查询绑定证书的域名列表 {@link DescribeLiveDomainCertBindingsRequest} {@link DescribeLiveDomainCertBindingsResponse} */
  DescribeLiveDomainCertBindings(data?: DescribeLiveDomainCertBindingsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLiveDomainCertBindingsResponse>;
  /** 查询实时的域名维度下行播放数据 {@link DescribeLiveDomainPlayInfoListRequest} {@link DescribeLiveDomainPlayInfoListResponse} */
  DescribeLiveDomainPlayInfoList(data?: DescribeLiveDomainPlayInfoListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLiveDomainPlayInfoListResponse>;
  /** 查询直播域名 Referer 黑白名单配置 {@link DescribeLiveDomainRefererRequest} {@link DescribeLiveDomainRefererResponse} */
  DescribeLiveDomainReferer(data: DescribeLiveDomainRefererRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLiveDomainRefererResponse>;
  /** 查询域名列表 {@link DescribeLiveDomainsRequest} {@link DescribeLiveDomainsResponse} */
  DescribeLiveDomains(data?: DescribeLiveDomainsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLiveDomainsResponse>;
  /** 查询直播增强用量明细 {@link DescribeLiveEnhanceInfoListRequest} {@link DescribeLiveEnhanceInfoListResponse} */
  DescribeLiveEnhanceInfoList(data: DescribeLiveEnhanceInfoListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLiveEnhanceInfoListResponse>;
  /** 获取禁推流列表 {@link DescribeLiveForbidStreamListRequest} {@link DescribeLiveForbidStreamListResponse} */
  DescribeLiveForbidStreamList(data?: DescribeLiveForbidStreamListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLiveForbidStreamListResponse>;
  /** 查询直播套餐包信息 {@link DescribeLivePackageInfoRequest} {@link DescribeLivePackageInfoResponse} */
  DescribeLivePackageInfo(data: DescribeLivePackageInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLivePackageInfoResponse>;
  /** 获取直播垫片规则列表 {@link DescribeLivePadRulesRequest} {@link DescribeLivePadRulesResponse} */
  DescribeLivePadRules(data?: DescribeLivePadRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLivePadRulesResponse>;
  /** 查询直播中的垫片流列表 {@link DescribeLivePadStreamListRequest} {@link DescribeLivePadStreamListResponse} */
  DescribeLivePadStreamList(data?: DescribeLivePadStreamListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLivePadStreamListResponse>;
  /** 获取单个直播垫片模板 {@link DescribeLivePadTemplateRequest} {@link DescribeLivePadTemplateResponse} */
  DescribeLivePadTemplate(data: DescribeLivePadTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLivePadTemplateResponse>;
  /** 获取直播垫片模板 {@link DescribeLivePadTemplatesRequest} {@link DescribeLivePadTemplatesResponse} */
  DescribeLivePadTemplates(data?: DescribeLivePadTemplatesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLivePadTemplatesResponse>;
  /** 查询播放鉴权key {@link DescribeLivePlayAuthKeyRequest} {@link DescribeLivePlayAuthKeyResponse} */
  DescribeLivePlayAuthKey(data: DescribeLivePlayAuthKeyRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLivePlayAuthKeyResponse>;
  /** 查询直播拉流任务状态 {@link DescribeLivePullStreamTaskStatusRequest} {@link DescribeLivePullStreamTaskStatusResponse} */
  DescribeLivePullStreamTaskStatus(data: DescribeLivePullStreamTaskStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLivePullStreamTaskStatusResponse>;
  /** 查询直播拉流任务 {@link DescribeLivePullStreamTasksRequest} {@link DescribeLivePullStreamTasksResponse} */
  DescribeLivePullStreamTasks(data?: DescribeLivePullStreamTasksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLivePullStreamTasksResponse>;
  /** 查询推流鉴权key {@link DescribeLivePushAuthKeyRequest} {@link DescribeLivePushAuthKeyResponse} */
  DescribeLivePushAuthKey(data: DescribeLivePushAuthKeyRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLivePushAuthKeyResponse>;
  /** 获取录制规则列表 {@link DescribeLiveRecordRulesRequest} {@link DescribeLiveRecordRulesResponse} */
  DescribeLiveRecordRules(data?: DescribeLiveRecordRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLiveRecordRulesResponse>;
  /** 获取单个录制模板 {@link DescribeLiveRecordTemplateRequest} {@link DescribeLiveRecordTemplateResponse} */
  DescribeLiveRecordTemplate(data: DescribeLiveRecordTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLiveRecordTemplateResponse>;
  /** 获取录制模板列表 {@link DescribeLiveRecordTemplatesRequest} {@link DescribeLiveRecordTemplatesResponse} */
  DescribeLiveRecordTemplates(data?: DescribeLiveRecordTemplatesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLiveRecordTemplatesResponse>;
  /** 获取截图规则列表 {@link DescribeLiveSnapshotRulesRequest} {@link DescribeLiveSnapshotRulesResponse} */
  DescribeLiveSnapshotRules(data?: DescribeLiveSnapshotRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLiveSnapshotRulesResponse>;
  /** 获取单个截图模板 {@link DescribeLiveSnapshotTemplateRequest} {@link DescribeLiveSnapshotTemplateResponse} */
  DescribeLiveSnapshotTemplate(data: DescribeLiveSnapshotTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLiveSnapshotTemplateResponse>;
  /** 获取截图模板列表 {@link DescribeLiveSnapshotTemplatesRequest} {@link DescribeLiveSnapshotTemplatesResponse} */
  DescribeLiveSnapshotTemplates(data?: DescribeLiveSnapshotTemplatesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLiveSnapshotTemplatesResponse>;
  /** 查询推断流事件 {@link DescribeLiveStreamEventListRequest} {@link DescribeLiveStreamEventListResponse} */
  DescribeLiveStreamEventList(data: DescribeLiveStreamEventListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLiveStreamEventListResponse>;
  /** 查询直播流监播任务 {@link DescribeLiveStreamMonitorRequest} {@link DescribeLiveStreamMonitorResponse} */
  DescribeLiveStreamMonitor(data: DescribeLiveStreamMonitorRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLiveStreamMonitorResponse>;
  /** 查询直播流监播任务配置列表 {@link DescribeLiveStreamMonitorListRequest} {@link DescribeLiveStreamMonitorListResponse} */
  DescribeLiveStreamMonitorList(data: DescribeLiveStreamMonitorListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLiveStreamMonitorListResponse>;
  /** 查询直播中的流 {@link DescribeLiveStreamOnlineListRequest} {@link DescribeLiveStreamOnlineListResponse} */
  DescribeLiveStreamOnlineList(data?: DescribeLiveStreamOnlineListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLiveStreamOnlineListResponse>;
  /** 查询历史流列表 {@link DescribeLiveStreamPublishedListRequest} {@link DescribeLiveStreamPublishedListResponse} */
  DescribeLiveStreamPublishedList(data: DescribeLiveStreamPublishedListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLiveStreamPublishedListResponse>;
  /** 获取在线流的推流数据 {@link DescribeLiveStreamPushInfoListRequest} {@link DescribeLiveStreamPushInfoListResponse} */
  DescribeLiveStreamPushInfoList(data?: DescribeLiveStreamPushInfoListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLiveStreamPushInfoListResponse>;
  /** 查询流状态 {@link DescribeLiveStreamStateRequest} {@link DescribeLiveStreamStateResponse} */
  DescribeLiveStreamState(data: DescribeLiveStreamStateRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLiveStreamStateResponse>;
  /** 直播时移计费信息查询 {@link DescribeLiveTimeShiftBillInfoListRequest} {@link DescribeLiveTimeShiftBillInfoListResponse} */
  DescribeLiveTimeShiftBillInfoList(data: DescribeLiveTimeShiftBillInfoListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLiveTimeShiftBillInfoListResponse>;
  /** 获取直播时移规则列表 {@link DescribeLiveTimeShiftRulesRequest} {@link DescribeLiveTimeShiftRulesResponse} */
  DescribeLiveTimeShiftRules(data?: DescribeLiveTimeShiftRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLiveTimeShiftRulesResponse>;
  /** 获取直播时移模板 {@link DescribeLiveTimeShiftTemplatesRequest} {@link DescribeLiveTimeShiftTemplatesResponse} */
  DescribeLiveTimeShiftTemplates(data?: DescribeLiveTimeShiftTemplatesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLiveTimeShiftTemplatesResponse>;
  /** 直播时移写入量数据 {@link DescribeLiveTimeShiftWriteSizeInfoListRequest} {@link DescribeLiveTimeShiftWriteSizeInfoListResponse} */
  DescribeLiveTimeShiftWriteSizeInfoList(data: DescribeLiveTimeShiftWriteSizeInfoListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLiveTimeShiftWriteSizeInfoListResponse>;
  /** 查询直播转码统计信息 {@link DescribeLiveTranscodeDetailInfoRequest} {@link DescribeLiveTranscodeDetailInfoResponse} */
  DescribeLiveTranscodeDetailInfo(data?: DescribeLiveTranscodeDetailInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLiveTranscodeDetailInfoResponse>;
  /** 获取转码规则列表 {@link DescribeLiveTranscodeRulesRequest} {@link DescribeLiveTranscodeRulesResponse} */
  DescribeLiveTranscodeRules(data?: DescribeLiveTranscodeRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLiveTranscodeRulesResponse>;
  /** 获取单个转码模板 {@link DescribeLiveTranscodeTemplateRequest} {@link DescribeLiveTranscodeTemplateResponse} */
  DescribeLiveTranscodeTemplate(data: DescribeLiveTranscodeTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLiveTranscodeTemplateResponse>;
  /** 获取转码模板列表 {@link DescribeLiveTranscodeTemplatesRequest} {@link DescribeLiveTranscodeTemplatesResponse} */
  DescribeLiveTranscodeTemplates(data?: DescribeLiveTranscodeTemplatesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLiveTranscodeTemplatesResponse>;
  /** 查询转码总量数据 {@link DescribeLiveTranscodeTotalInfoRequest} {@link DescribeLiveTranscodeTotalInfoResponse} */
  DescribeLiveTranscodeTotalInfo(data: DescribeLiveTranscodeTotalInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLiveTranscodeTotalInfoResponse>;
  /** 获取单个水印 {@link DescribeLiveWatermarkRequest} {@link DescribeLiveWatermarkResponse} */
  DescribeLiveWatermark(data: DescribeLiveWatermarkRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLiveWatermarkResponse>;
  /** 获取水印规则列表 {@link DescribeLiveWatermarkRulesRequest} {@link DescribeLiveWatermarkRulesResponse} */
  DescribeLiveWatermarkRules(data?: DescribeLiveWatermarkRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLiveWatermarkRulesResponse>;
  /** 查询水印列表 {@link DescribeLiveWatermarksRequest} {@link DescribeLiveWatermarksResponse} */
  DescribeLiveWatermarks(data?: DescribeLiveWatermarksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLiveWatermarksResponse>;
  /** P2P流数据查询 {@link DescribeLiveXP2PDetailInfoListRequest} {@link DescribeLiveXP2PDetailInfoListResponse} */
  DescribeLiveXP2PDetailInfoList(data?: DescribeLiveXP2PDetailInfoListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLiveXP2PDetailInfoListResponse>;
  /** 批量获取日志URL {@link DescribeLogDownloadListRequest} {@link DescribeLogDownloadListResponse} */
  DescribeLogDownloadList(data: DescribeLogDownloadListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLogDownloadListResponse>;
  /** 查询监播报告 {@link DescribeMonitorReportRequest} {@link DescribeMonitorReportResponse} */
  DescribeMonitorReport(data: DescribeMonitorReportRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMonitorReportResponse>;
  /** 查询播放http错误码实时数据 {@link DescribePlayErrorCodeDetailInfoListRequest} {@link DescribePlayErrorCodeDetailInfoListResponse} */
  DescribePlayErrorCodeDetailInfoList(data: DescribePlayErrorCodeDetailInfoListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePlayErrorCodeDetailInfoListResponse>;
  /** 查询播放http错误码汇总数据 {@link DescribePlayErrorCodeSumInfoListRequest} {@link DescribePlayErrorCodeSumInfoListResponse} */
  DescribePlayErrorCodeSumInfoList(data: DescribePlayErrorCodeSumInfoListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePlayErrorCodeSumInfoListResponse>;
  /** 查询分省份分运营商播放汇总数据 {@link DescribeProIspPlaySumInfoListRequest} {@link DescribeProIspPlaySumInfoListResponse} */
  DescribeProIspPlaySumInfoList(data: DescribeProIspPlaySumInfoListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProIspPlaySumInfoListResponse>;
  /** 按省份运营商查询播放信息 {@link DescribeProvinceIspPlayInfoListRequest} {@link DescribeProvinceIspPlayInfoListResponse} */
  DescribeProvinceIspPlayInfoList(data: DescribeProvinceIspPlayInfoListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProvinceIspPlayInfoListResponse>;
  /** 查询拉流配置(该接口已下线,请使用新接口 DescribeLivePullStreamTasks) {@link DescribePullStreamConfigsRequest} {@link DescribePullStreamConfigsResponse} */
  DescribePullStreamConfigs(data?: DescribePullStreamConfigsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePullStreamConfigsResponse>;
  /** 查询拉流转推任务的时长信息 {@link DescribePullTransformPushInfoRequest} {@link DescribePullTransformPushInfoResponse} */
  DescribePullTransformPushInfo(data: DescribePullTransformPushInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePullTransformPushInfoResponse>;
  /** 直播推流带宽和流量数据查询 {@link DescribePushBandwidthAndFluxListRequest} {@link DescribePushBandwidthAndFluxListResponse} */
  DescribePushBandwidthAndFluxList(data: DescribePushBandwidthAndFluxListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePushBandwidthAndFluxListResponse>;
  /** 查询录制任务列表（新） {@link DescribeRecordTaskRequest} {@link DescribeRecordTaskResponse} */
  DescribeRecordTask(data: DescribeRecordTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRecordTaskResponse>;
  /** 查询截图张数 {@link DescribeScreenShotSheetNumListRequest} {@link DescribeScreenShotSheetNumListResponse} */
  DescribeScreenShotSheetNumList(data: DescribeScreenShotSheetNumListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeScreenShotSheetNumListResponse>;
  /** 查询截图任务列表 {@link DescribeScreenshotTaskRequest} {@link DescribeScreenshotTaskResponse} */
  DescribeScreenshotTask(data: DescribeScreenshotTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeScreenshotTaskResponse>;
  /** 查询所有流的流量数据 {@link DescribeStreamDayPlayInfoListRequest} {@link DescribeStreamDayPlayInfoListResponse} */
  DescribeStreamDayPlayInfoList(data: DescribeStreamDayPlayInfoListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeStreamDayPlayInfoListResponse>;
  /** 查询流的播放信息列表 {@link DescribeStreamPlayInfoListRequest} {@link DescribeStreamPlayInfoListResponse} */
  DescribeStreamPlayInfoList(data: DescribeStreamPlayInfoListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeStreamPlayInfoListResponse>;
  /** 查询某条流上行推流质量数据 {@link DescribeStreamPushInfoListRequest} {@link DescribeStreamPushInfoListResponse} */
  DescribeStreamPushInfoList(data: DescribeStreamPushInfoListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeStreamPushInfoListResponse>;
  /** 查询时移流录制详情 {@link DescribeTimeShiftRecordDetailRequest} {@link DescribeTimeShiftRecordDetailResponse} */
  DescribeTimeShiftRecordDetail(data: DescribeTimeShiftRecordDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTimeShiftRecordDetailResponse>;
  /** 查询时移流列表 {@link DescribeTimeShiftStreamListRequest} {@link DescribeTimeShiftStreamListResponse} */
  DescribeTimeShiftStreamList(data: DescribeTimeShiftStreamListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTimeShiftStreamListResponse>;
  /** 查询某段时间top n客户端ip汇总信息 {@link DescribeTopClientIpSumInfoListRequest} {@link DescribeTopClientIpSumInfoListResponse} */
  DescribeTopClientIpSumInfoList(data: DescribeTopClientIpSumInfoListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTopClientIpSumInfoListResponse>;
  /** 查询转码任务数。 {@link DescribeTranscodeTaskNumRequest} {@link DescribeTranscodeTaskNumResponse} */
  DescribeTranscodeTaskNum(data: DescribeTranscodeTaskNumRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTranscodeTaskNumResponse>;
  /** 直播上行路数查询 {@link DescribeUploadStreamNumsRequest} {@link DescribeUploadStreamNumsResponse} */
  DescribeUploadStreamNums(data: DescribeUploadStreamNumsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUploadStreamNumsResponse>;
  /** 查询某时间段top n的域名或流id信息 {@link DescribeVisitTopSumInfoListRequest} {@link DescribeVisitTopSumInfoListResponse} */
  DescribeVisitTopSumInfoList(data: DescribeVisitTopSumInfoListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVisitTopSumInfoListResponse>;
  /** 断开直播推流 {@link DropLiveStreamRequest} {@link DropLiveStreamResponse} */
  DropLiveStream(data: DropLiveStreamRequest, config?: AxiosRequestConfig): AxiosPromise<DropLiveStreamResponse>;
  /** 启用域名 {@link EnableLiveDomainRequest} {@link EnableLiveDomainResponse} */
  EnableLiveDomain(data: EnableLiveDomainRequest, config?: AxiosRequestConfig): AxiosPromise<EnableLiveDomainResponse>;
  /** 启用择优调度 {@link EnableOptimalSwitchingRequest} {@link EnableOptimalSwitchingResponse} */
  EnableOptimalSwitching(data: EnableOptimalSwitchingRequest, config?: AxiosRequestConfig): AxiosPromise<EnableOptimalSwitchingResponse>;
  /** 禁用域名 {@link ForbidLiveDomainRequest} {@link ForbidLiveDomainResponse} */
  ForbidLiveDomain(data: ForbidLiveDomainRequest, config?: AxiosRequestConfig): AxiosPromise<ForbidLiveDomainResponse>;
  /** 禁推直播流 {@link ForbidLiveStreamRequest} {@link ForbidLiveStreamResponse} */
  ForbidLiveStream(data: ForbidLiveStreamRequest, config?: AxiosRequestConfig): AxiosPromise<ForbidLiveStreamResponse>;
  /** 修改导播台 {@link ModifyCasterRequest} {@link ModifyCasterResponse} */
  ModifyCaster(data: ModifyCasterRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCasterResponse>;
  /** 修改导播台输入源 {@link ModifyCasterInputInfoRequest} {@link ModifyCasterInputInfoResponse} */
  ModifyCasterInputInfo(data: ModifyCasterInputInfoRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCasterInputInfoResponse>;
  /** 修改导播台布局 {@link ModifyCasterLayoutInfoRequest} {@link ModifyCasterLayoutInfoResponse} */
  ModifyCasterLayoutInfo(data: ModifyCasterLayoutInfoRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCasterLayoutInfoResponse>;
  /** 修改导播台水印信息 {@link ModifyCasterMarkPicInfoRequest} {@link ModifyCasterMarkPicInfoResponse} */
  ModifyCasterMarkPicInfo(data: ModifyCasterMarkPicInfoRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCasterMarkPicInfoResponse>;
  /** 修改导播台文本配置 {@link ModifyCasterMarkWordInfoRequest} {@link ModifyCasterMarkWordInfoResponse} */
  ModifyCasterMarkWordInfo(data: ModifyCasterMarkWordInfoRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCasterMarkWordInfoResponse>;
  /** 修改导播台推流信息 {@link ModifyCasterOutputInfoRequest} {@link ModifyCasterOutputInfoResponse} */
  ModifyCasterOutputInfo(data: ModifyCasterOutputInfoRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCasterOutputInfoResponse>;
  /** 修改回调模板 {@link ModifyLiveCallbackTemplateRequest} {@link ModifyLiveCallbackTemplateResponse} */
  ModifyLiveCallbackTemplate(data: ModifyLiveCallbackTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyLiveCallbackTemplateResponse>;
  /** 批量绑定证书对应的播放域名 {@link ModifyLiveDomainCertBindingsRequest} {@link ModifyLiveDomainCertBindingsResponse} */
  ModifyLiveDomainCertBindings(data: ModifyLiveDomainCertBindingsRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyLiveDomainCertBindingsResponse>;
  /** 设置直播域名 Referer 黑白名单 {@link ModifyLiveDomainRefererRequest} {@link ModifyLiveDomainRefererResponse} */
  ModifyLiveDomainReferer(data: ModifyLiveDomainRefererRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyLiveDomainRefererResponse>;
  /** 修改直播垫片模板 {@link ModifyLivePadTemplateRequest} {@link ModifyLivePadTemplateResponse} */
  ModifyLivePadTemplate(data: ModifyLivePadTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyLivePadTemplateResponse>;
  /** 修改播放鉴权key {@link ModifyLivePlayAuthKeyRequest} {@link ModifyLivePlayAuthKeyResponse} */
  ModifyLivePlayAuthKey(data: ModifyLivePlayAuthKeyRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyLivePlayAuthKeyResponse>;
  /** 修改播放域名信息 {@link ModifyLivePlayDomainRequest} {@link ModifyLivePlayDomainResponse} */
  ModifyLivePlayDomain(data: ModifyLivePlayDomainRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyLivePlayDomainResponse>;
  /** 更新直播拉流任务 {@link ModifyLivePullStreamTaskRequest} {@link ModifyLivePullStreamTaskResponse} */
  ModifyLivePullStreamTask(data: ModifyLivePullStreamTaskRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyLivePullStreamTaskResponse>;
  /** 修改推流鉴权key {@link ModifyLivePushAuthKeyRequest} {@link ModifyLivePushAuthKeyResponse} */
  ModifyLivePushAuthKey(data: ModifyLivePushAuthKeyRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyLivePushAuthKeyResponse>;
  /** 直播修改录制模板配置 {@link ModifyLiveRecordTemplateRequest} {@link ModifyLiveRecordTemplateResponse} */
  ModifyLiveRecordTemplate(data: ModifyLiveRecordTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyLiveRecordTemplateResponse>;
  /** 修改截图模板 {@link ModifyLiveSnapshotTemplateRequest} {@link ModifyLiveSnapshotTemplateResponse} */
  ModifyLiveSnapshotTemplate(data: ModifyLiveSnapshotTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyLiveSnapshotTemplateResponse>;
  /** 修改直播流监播任务 {@link ModifyLiveStreamMonitorRequest} {@link ModifyLiveStreamMonitorResponse} */
  ModifyLiveStreamMonitor(data: ModifyLiveStreamMonitorRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyLiveStreamMonitorResponse>;
  /** 修改直播时移模板 {@link ModifyLiveTimeShiftTemplateRequest} {@link ModifyLiveTimeShiftTemplateResponse} */
  ModifyLiveTimeShiftTemplate(data: ModifyLiveTimeShiftTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyLiveTimeShiftTemplateResponse>;
  /** 修改转码模板配置 {@link ModifyLiveTranscodeTemplateRequest} {@link ModifyLiveTranscodeTemplateResponse} */
  ModifyLiveTranscodeTemplate(data: ModifyLiveTranscodeTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyLiveTranscodeTemplateResponse>;
  /** 更新拉流配置(该接口已下线,请使用新接口 ModifyLivePullStreamTask) {@link ModifyPullStreamConfigRequest} {@link ModifyPullStreamConfigResponse} */
  ModifyPullStreamConfig(data: ModifyPullStreamConfigRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyPullStreamConfigResponse>;
  /** 修改拉流配置状态(该接口已下线,请使用新接口 ModifyLivePullStreamTask) {@link ModifyPullStreamStatusRequest} {@link ModifyPullStreamStatusResponse} */
  ModifyPullStreamStatus(data: ModifyPullStreamStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyPullStreamStatusResponse>;
  /** 释放导播台 {@link ReleaseCasterRequest} {@link ReleaseCasterResponse} */
  ReleaseCaster(data: ReleaseCasterRequest, config?: AxiosRequestConfig): AxiosPromise<ReleaseCasterResponse>;
  /** 重启直播拉流任务 {@link RestartLivePullStreamTaskRequest} {@link RestartLivePullStreamTaskResponse} */
  RestartLivePullStreamTask(data: RestartLivePullStreamTaskRequest, config?: AxiosRequestConfig): AxiosPromise<RestartLivePullStreamTaskResponse>;
  /** 取消直播延时 {@link ResumeDelayLiveStreamRequest} {@link ResumeDelayLiveStreamResponse} */
  ResumeDelayLiveStream(data: ResumeDelayLiveStreamRequest, config?: AxiosRequestConfig): AxiosPromise<ResumeDelayLiveStreamResponse>;
  /** 恢复直播推流 {@link ResumeLiveStreamRequest} {@link ResumeLiveStreamResponse} */
  ResumeLiveStream(data: ResumeLiveStreamRequest, config?: AxiosRequestConfig): AxiosPromise<ResumeLiveStreamResponse>;
  /** 发送直播云端特效 {@link SendLiveCloudEffectRequest} {@link SendLiveCloudEffectResponse} */
  SendLiveCloudEffect(data: SendLiveCloudEffectRequest, config?: AxiosRequestConfig): AxiosPromise<SendLiveCloudEffectResponse>;
  /** 开始切入垫片 {@link StartLivePadStreamRequest} {@link StartLivePadStreamResponse} */
  StartLivePadStream(data: StartLivePadStreamRequest, config?: AxiosRequestConfig): AxiosPromise<StartLivePadStreamResponse>;
  /** 启动直播流监播任务 {@link StartLiveStreamMonitorRequest} {@link StartLiveStreamMonitorResponse} */
  StartLiveStreamMonitor(data: StartLiveStreamMonitorRequest, config?: AxiosRequestConfig): AxiosPromise<StartLiveStreamMonitorResponse>;
  /** 停止导播台主监任务 {@link StopCasterPgmRequest} {@link StopCasterPgmResponse} */
  StopCasterPgm(data: StopCasterPgmRequest, config?: AxiosRequestConfig): AxiosPromise<StopCasterPgmResponse>;
  /** 停止导播台预监任务 {@link StopCasterPvwRequest} {@link StopCasterPvwResponse} */
  StopCasterPvw(data: StopCasterPvwRequest, config?: AxiosRequestConfig): AxiosPromise<StopCasterPvwResponse>;
  /** 停止切入垫片 {@link StopLivePadStreamRequest} {@link StopLivePadStreamResponse} */
  StopLivePadStream(data: StopLivePadStreamRequest, config?: AxiosRequestConfig): AxiosPromise<StopLivePadStreamResponse>;
  /** 终止录制任务(已废弃,请使用新接口) {@link StopLiveRecordRequest} {@link StopLiveRecordResponse} */
  StopLiveRecord(data: StopLiveRecordRequest, config?: AxiosRequestConfig): AxiosPromise<StopLiveRecordResponse>;
  /** 停止直播流监播任务 {@link StopLiveStreamMonitorRequest} {@link StopLiveStreamMonitorResponse} */
  StopLiveStreamMonitor(data: StopLiveStreamMonitorRequest, config?: AxiosRequestConfig): AxiosPromise<StopLiveStreamMonitorResponse>;
  /** 终止录制任务（新） {@link StopRecordTaskRequest} {@link StopRecordTaskResponse} */
  StopRecordTask(data: StopRecordTaskRequest, config?: AxiosRequestConfig): AxiosPromise<StopRecordTaskResponse>;
  /** 终止截图任务 {@link StopScreenshotTaskRequest} {@link StopScreenshotTaskResponse} */
  StopScreenshotTask(data: StopScreenshotTaskRequest, config?: AxiosRequestConfig): AxiosPromise<StopScreenshotTaskResponse>;
  /** 直播备用流切换 {@link SwitchBackupStreamRequest} {@link SwitchBackupStreamResponse} */
  SwitchBackupStream(data: SwitchBackupStreamRequest, config?: AxiosRequestConfig): AxiosPromise<SwitchBackupStreamResponse>;
  /** 解绑域名证书 {@link UnBindLiveDomainCertRequest} {@link UnBindLiveDomainCertResponse} */
  UnBindLiveDomainCert(data: UnBindLiveDomainCertRequest, config?: AxiosRequestConfig): AxiosPromise<UnBindLiveDomainCertResponse>;
  /** 更新水印 {@link UpdateLiveWatermarkRequest} {@link UpdateLiveWatermarkResponse} */
  UpdateLiveWatermark(data: UpdateLiveWatermarkRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateLiveWatermarkResponse>;
}

export declare type Versions = ["2018-08-01"];

export default Live;
