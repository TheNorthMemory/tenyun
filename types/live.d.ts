/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 带宽信息 */
declare interface BandwidthInfo {
  /** 返回格式：yyyy-mm-dd HH:MM:SS根据粒度会有不同程度的缩减。 */
  Time: string;
  /** 带宽。 */
  Bandwidth: number;
}

/** 批量操作域名相关接口，若其中个别域名操作失败将会跳过，相应的域名错误信息将统一汇总在此类型中 */
declare interface BatchDomainOperateErrors {
  /** 操作失败的域名。 */
  DomainName: string;
  /** API3.0错误码。 */
  Code: string;
  /** API3.0错误信息。 */
  Message: string;
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
  Name: string;
  /** 带宽明细数据信息。 */
  BandInfoList: BillDataInfo[];
}

/** 带宽和流量信息。 */
declare interface BillDataInfo {
  /** 时间点，格式: yyyy-mm-dd HH:MM:SS。 */
  Time: string;
  /** 带宽，单位是 Mbps。 */
  Bandwidth: number;
  /** 流量，单位是 MB。 */
  Flux: number;
  /** 峰值时间点，格式: yyyy-mm-dd HH:MM:SS，原始数据为5分钟粒度，如果查询小时和天粒度数据，则返回对应粒度内的带宽峰值时间点。 */
  PeakTime: string;
}

/** 规则信息 */
declare interface CallBackRuleInfo {
  /** 规则创建时间。 */
  CreateTime: string;
  /** 规则更新时间。 */
  UpdateTime: string;
  /** 模板 ID。 */
  TemplateId: number;
  /** 推流域名。 */
  DomainName: string;
  /** 推流路径。 */
  AppName: string;
}

/** 回调模板信息。 */
declare interface CallBackTemplateInfo {
  /** 模板 ID。 */
  TemplateId: number;
  /** 模板名称。 */
  TemplateName: string;
  /** 描述信息。 */
  Description: string;
  /** 开播回调 URL。 */
  StreamBeginNotifyUrl: string;
  /** 混流回调 URL。(参数已弃用)。 */
  StreamMixNotifyUrl: string;
  /** 断流回调 URL。 */
  StreamEndNotifyUrl: string;
  /** 录制回调 URL。 */
  RecordNotifyUrl: string;
  /** 截图回调 URL。 */
  SnapshotNotifyUrl: string;
  /** 鉴黄回调 URL。 */
  PornCensorshipNotifyUrl: string;
  /** 回调的鉴权 key。 */
  CallbackKey: string;
}

/** 回调事件信息 */
declare interface CallbackEventInfo {
  /** 事件时间 */
  EventTime: string;
  /** 事件类型 */
  EventType: number;
  /** 回调请求 */
  Request: string;
  /** 回调响应 */
  Response: string;
  /** 客户接口响应时间 */
  ResponseTime: string;
  /** 回调结果 */
  ResultCode: number;
  /** 流名称 */
  StreamId: string;
}

/** 下行播放统计指标 */
declare interface CdnPlayStatData {
  /** 时间点，格式: yyyy-mm-dd HH:MM:SS。 */
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
  CertId: number;
  /** 证书名称。 */
  CertName: string;
  /** 描述信息。 */
  Description: string;
  /** 创建时间，UTC 格式。 */
  CreateTime: string;
  /** 证书内容。 */
  HttpsCrt: string;
  /** 证书类型。0：用户添加证书，1：腾讯云托管证书。 */
  CertType: number;
  /** 证书过期时间，UTC 格式。 */
  CertExpireTime: string;
  /** 使用此证书的域名列表。 */
  DomainList: string[];
}

/** 客户端ip播放汇总信息。 */
declare interface ClientIpPlaySumInfo {
  /** 客户端 IP，点分型。 */
  ClientIp: string;
  /** 客户端所在省份。 */
  Province: string;
  /** 总流量。 */
  TotalFlux: number;
  /** 总请求数。 */
  TotalRequest: number;
  /** 总失败请求数。 */
  TotalFailedRequest: number;
  /** 客户端所在国家。 */
  CountryArea: string;
}

/** 通用混流控制参数 */
declare interface CommonMixControlParams {
  /** 取值范围[0,1]。填1时，当参数中图层分辨率参数与视频实际分辨率不一致时，自动从视频中按图层设置的分辨率比例进行裁剪。 */
  UseMixCropCenter?: number;
  /** 取值范围[0,1]填1时，当InputStreamList中个数为1时，且OutputParams.OutputStreamType为1时，不执行取消操作，执行拷贝流操作 */
  AllowCopy?: number;
  /** 取值范围[0,1]填1时，透传原始流的sei */
  PassInputSei?: number;
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
  /** 当InputType为3(画布)时，该值表示画布的颜色。常用的颜色有：红色：0xcc0033。黄色：0xcc9900。绿色：0xcccc33。蓝色：0x99CCFF。黑色：0x000000。白色：0xFFFFFF。灰色：0x999999。 */
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
  /** 输出流比特率。取值范围[1，50000]。不填的情况下，系统会自动判断。 */
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
  Time: string;
  /** 路数。 */
  Num: number;
}

/** 流播放信息 */
declare interface DayStreamPlayInfo {
  /** 数据时间点，格式：yyyy-mm-dd HH:MM:SS。 */
  Time: string;
  /** 带宽（单位Mbps）。 */
  Bandwidth: number;
  /** 流量 （单位MB）。 */
  Flux: number;
  /** 请求数。 */
  Request: number;
  /** 在线人数。 */
  Online: number;
}

/** 延播信息。 */
declare interface DelayInfo {
  /** 推流域名。 */
  DomainName: string;
  /** 推流路径，与推流和播放地址中的 AppName 保持一致，默认为 live。 */
  AppName: string;
  /** 流名称。 */
  StreamName: string;
  /** 延播时间，单位：秒。 */
  DelayInterval: number;
  /** 创建时间，UTC 时间。注意：UTC时间和北京时间相差8小时。例如：2019-06-18T12:00:00Z（为北京时间 2019 年 6 月 18 日 20 点 0 分 0 秒）。 */
  CreateTime: string;
  /** 过期时间，UTC 时间。注意：UTC时间和北京时间相差8小时。例如：2019-06-18T12:00:00Z（为北京时间 2019 年 6 月 18 日 20 点 0 分 0 秒）。 */
  ExpireTime: string;
  /** 当前状态:-1：已过期。1： 生效中。 */
  Status: number;
}

/** 域名证书信息 */
declare interface DomainCertInfo {
  /** 证书Id。 */
  CertId: number;
  /** 证书名称。 */
  CertName: string;
  /** 描述信息。 */
  Description: string;
  /** 创建时间，UTC格式。 */
  CreateTime: string;
  /** 证书内容。 */
  HttpsCrt: string;
  /** 证书类型。0：用户添加证书，1：腾讯云托管证书。 */
  CertType: number;
  /** 证书过期时间，UTC格式。 */
  CertExpireTime: string;
  /** 使用此证书的域名名称。 */
  DomainName: string;
  /** 证书状态。 */
  Status: number;
  /** 证书本身标识的域名列表。比如: ["*.x.com"] */
  CertDomains: string[] | null;
  /** 腾讯云ssl的证书Id */
  CloudCertId: string | null;
}

/** 每个域名的统计信息。 */
declare interface DomainDetailInfo {
  /** 国内还是国外:Mainland: 表示国内数据。Oversea: 表示国外数据。 */
  MainlandOrOversea: string;
  /** 带宽，单位: Mbps。 */
  Bandwidth: number;
  /** 流量，单位: MB。 */
  Flux: number;
  /** 人数。 */
  Online: number;
  /** 请求数。 */
  Request: number;
}

/** 直播域名信息 */
declare interface DomainInfo {
  /** 直播域名。 */
  Name: string;
  /** 域名类型:0: 推流。1: 播放。 */
  Type: number;
  /** 域名状态:0: 停用。1: 启用。 */
  Status: number;
  /** 添加时间。 */
  CreateTime: string;
  /** 是否有 CName 到固定规则域名:0: 否。1: 是。 */
  BCName: number;
  /** cname 对应的域名。 */
  TargetDomain: string;
  /** 播放区域，只在 Type=1 时该参数有意义。1: 国内。2: 全球。3: 海外。 */
  PlayType: number;
  /** 是否慢直播:0: 普通直播。1: 慢直播。 */
  IsDelayLive: number;
  /** 当前客户使用的 cname 信息。 */
  CurrentCName: string;
  /** 失效参数，可忽略。 */
  RentTag: number;
  /** 失效参数，可忽略。 */
  RentExpireTime: string;
  /** 0: 标准直播。1: 小程序直播。 */
  IsMiniProgramLive: number | null;
}

/** 多个域名信息列表 */
declare interface DomainInfoList {
  /** 域名。 */
  Domain: string;
  /** 明细信息。 */
  DetailInfoList: DomainDetailInfo[];
}

/** flv格式特殊配置 */
declare interface FlvSpecialParam {
  /** 是否开启边录边传，仅flv格式有效。 */
  UploadInRecording?: boolean;
}

/** 禁推流列表 */
declare interface ForbidStreamInfo {
  /** 流名称。 */
  StreamName: string;
  /** 创建时间。 */
  CreateTime: string;
  /** 禁推过期时间。 */
  ExpireTime: string;
  /** 推流路径。 */
  AppName: string | null;
  /** 推流域名。 */
  DomainName: string | null;
}

/** 某省份某运营商在某段时间内的带宽，流量，请求数和并发数 */
declare interface GroupProIspDataInfo {
  /** 省份。 */
  ProvinceName: string;
  /** 运营商。 */
  IspName: string;
  /** 分钟维度的明细数据。 */
  DetailInfoList: CdnPlayStatData[];
}

/** HLS专属录制参数 */
declare interface HlsSpecialParam {
  /** HLS续流超时时间。取值范围[0，1800]。 */
  FlowContinueDuration?: number;
}

/** HTTP返回码和统计数据 */
declare interface HttpCodeInfo {
  /** HTTP协议返回码。例："2xx", "3xx", "4xx", "5xx"。 */
  HttpCode: string;
  /** 统计信息，对于无数据的时间点，会补0。 */
  ValueList: HttpCodeValue[];
}

/** HTTP返回码数据信息 */
declare interface HttpCodeValue {
  /** 时间，格式：yyyy-mm-dd HH:MM:SS。 */
  Time: string;
  /** 次数。 */
  Numbers: number;
  /** 占比。 */
  Percentage: number;
}

/** 播放错误码信息 */
declare interface HttpStatusData {
  /** 数据时间点，格式：yyyy-mm-dd HH:MM:SS。 */
  Time: string;
  /** 播放状态码详细信息。 */
  HttpStatusInfoList: HttpStatusInfo[];
}

/** 播放错误码信息 */
declare interface HttpStatusInfo {
  /** 播放HTTP状态码。 */
  HttpStatus: string;
  /** 个数。 */
  Num: number;
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
  DomainName: string;
  /** 证书备注。与CertName同义。 */
  CertificateAlias: string;
  /** 证书类型。0：自有证书1：腾讯云ssl托管证书 */
  CertType: number;
  /** https状态。1：已开启。0：已关闭。 */
  Status: number;
  /** 证书过期时间。 */
  CertExpireTime: string;
  /** 证书Id。 */
  CertId: number;
  /** 腾讯云ssl的证书Id。 */
  CloudCertId: string;
  /** 规则最后更新时间。 */
  UpdateTime: string | null;
}

/** 直播包信息。 */
declare interface LivePackageInfo {
  /** 包 ID。 */
  Id: string;
  /** 总量。注意：当为流量包时单位为字节。当为转码包时单位为分钟。 */
  Total: number;
  /** 使用量。注意：当为流量包时单位为字节。当为转码包时单位为分钟。当为连麦包时单位为小时。 */
  Used: number;
  /** 剩余量。注意：当为流量包时单位为字节。当为转码包时单位为分钟。当为连麦包时单位为小时。 */
  Left: number;
  /** 购买时间。 */
  BuyTime: string;
  /** 过期时间。 */
  ExpireTime: string;
  /** 包类型，可选值:0: 流量包。1: 普通转码包。2: 极速高清包。3: 连麦包。 */
  Type: number;
  /** 包状态，可选值:0: 未使用。1: 使用中。2: 已过期。3: 已冻结。4: 已耗尽。5: 已退款 */
  Status: number;
}

/** 日志url信息。 */
declare interface LogInfo {
  /** 日志名称。 */
  LogName: string;
  /** 日志 URL。 */
  LogUrl: string;
  /** 日志生成时间。 */
  LogTime: string;
  /** 文件大小。 */
  FileSize: number;
}

/** 监控播放数据 */
declare interface MonitorStreamPlayInfo {
  /** 播放域名。 */
  PlayDomain: string;
  /** 流id。 */
  StreamName: string;
  /** 播放码率，0表示原始码率。 */
  Rate: number;
  /** 播放协议，可选值包括 Unknown，Flv，Hls，Rtmp，Huyap2p。 */
  Protocol: string;
  /** 带宽，单位是Mbps。 */
  Bandwidth: number;
  /** 在线人数，1分钟采样一个点，统计采样点的tcp链接数目。 */
  Online: number;
  /** 请求数。 */
  Request: number;
}

/** 播放鉴权key信息。 */
declare interface PlayAuthKeyInfo {
  /** 域名。 */
  DomainName: string;
  /** 是否启用:0: 关闭。1: 启用。 */
  Enable: number;
  /** 鉴权 Key。 */
  AuthKey: string;
  /** 有效时间，单位：秒。 */
  AuthDelta: number;
  /** 鉴权 BackKey。 */
  AuthBackKey: string;
}

/** 各状态码的总次数，支持大多数的 HTTP 协议返回码。 */
declare interface PlayCodeTotalInfo {
  /** HTTP code，可选值包括:400，403，404，500，502，503，504。 */
  Code: string;
  /** 总次数。 */
  Num: number;
}

/** 流维度的播放信息。 */
declare interface PlayDataInfoByStream {
  /** 流名称。 */
  StreamName: string;
  /** 总流量，单位: MB。 */
  TotalFlux: number;
}

/** 按省份运营商查询的播放信息。 */
declare interface PlayStatInfo {
  /** 数据时间点。 */
  Time: string;
  /** 带宽/流量/请求数/并发连接数/下载速度的值，若没数据返回时该值为0。 */
  Value: number | null;
}

/** 播放汇总统计信息。 */
declare interface PlaySumStatInfo {
  /** 域名或流 ID。 */
  Name: string;
  /** 平均下载速度，单位: MB/s。计算公式: 每分钟的下载速度求平均值。 */
  AvgFluxPerSecond: number;
  /** 总流量，单位: MB。 */
  TotalFlux: number;
  /** 总请求数。 */
  TotalRequest: number;
}

/** 播放错误码信息 */
declare interface ProIspPlayCodeDataInfo {
  /** 国家或地区。 */
  CountryAreaName: string;
  /** 省份。 */
  ProvinceName: string;
  /** 运营商。 */
  IspName: string;
  /** 错误码为2开头的次数。 */
  Code2xx: number;
  /** 错误码为3开头的次数。 */
  Code3xx: number;
  /** 错误码为4开头的次数。 */
  Code4xx: number;
  /** 错误码为5开头的次数。 */
  Code5xx: number;
}

/** 获取省份/运营商的播放信息。 */
declare interface ProIspPlaySumInfo {
  /** 省份/运营商/国家或地区。 */
  Name: string;
  /** 总流量，单位: MB。 */
  TotalFlux: number;
  /** 总请求数。 */
  TotalRequest: number;
  /** 平均下载流量，单位: MB/s。 */
  AvgFluxPerSecond: number;
}

/** 推流时间。 */
declare interface PublishTime {
  /** 推流时间。UTC 格式，例如：2018-06-29T19:00:00Z。 */
  PublishTime: string;
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
  ConfigId: string;
  /** 源 URL。 */
  FromUrl: string;
  /** 目的 URL。 */
  ToUrl: string;
  /** 区域名。 */
  AreaName: string;
  /** 运营商名。 */
  IspName: string;
  /** 开始时间。UTC格式时间，例如: 2019-01-08T10:00:00Z。注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732)。 */
  StartTime: string;
  /** 结束时间。UTC格式时间，例如：2019-01-08T10:00:00Z。注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732)。 */
  EndTime: string;
  /** 状态:0: 无效。1: 初始状态。2: 正在运行。3: 拉起失败。4: 暂停。 */
  Status: string;
}

/** 直播拉流任务信息。 */
declare interface PullStreamTaskInfo {
  /** 拉流任务Id。 */
  TaskId: string;
  /** 拉流源的类型：PullLivePushLive -直播，PullVodPushLive -点播。 */
  SourceType: string;
  /** 拉流源url列表。SourceType为直播（PullLiveToLive）只可以填1个，SourceType为点播（PullVodToLive）可以填多个，上限10个。 */
  SourceUrls: string[];
  /** 推流域名。将拉到的源推到该域名。 */
  DomainName: string;
  /** 推流路径。将拉到的源推到该路径。 */
  AppName: string;
  /** 流名称。将拉到的源推到该流名称。 */
  StreamName: string;
  /** 推流参数。推流携带的自定义参数。 */
  PushArgs: string;
  /** 开始时间。使用UTC格式时间，例如：2019-01-08T10:00:00Z。注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732)。 */
  StartTime: string;
  /** 结束时间，注意：1. 结束时间必须大于开始时间；2. 结束时间和开始时间必须大于当前时间；3. 结束时间 和 开始时间 间隔必须小于七天。使用UTC格式时间，例如：2019-01-08T10:00:00Z。注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732)。 */
  EndTime: string;
  /** 拉流源所在地域（请就近选取）：ap-beijing - 华北地区(北京)，ap-shanghai -华东地区(上海)，ap-guangzhou -华南地区(广州)，ap-mumbai - 印度。 */
  Region: string;
  /** 点播拉流转推循环次数。-1：无限循环，直到任务结束。0：不循环。>0：具体循环次数。次数和时间以先结束的为准。注意：拉流源为点播，该配置生效。 */
  VodLoopTimes: number;
  /** 点播更新SourceUrls后的播放方式：ImmediateNewSource：立即从更新的拉流源开始播放；ContinueBreakPoint：从上次断流url源的断点处继续，结束后再使用新的拉流源。注意：拉流源为点播，该配置生效。 */
  VodRefreshType: string;
  /** 任务创建时间。使用UTC格式时间，例如：2019-01-08T10:00:00Z。注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732)。 */
  CreateTime: string;
  /** 任务更新时间。使用UTC格式时间，例如：2019-01-08T10:00:00Z。注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732)。 */
  UpdateTime: string;
  /** 创建任务的操作者。 */
  CreateBy: string;
  /** 最后更新任务的操作者。 */
  UpdateBy: string;
  /** 回调地址。 */
  CallbackUrl: string;
  /** 选择需要回调的事件：TaskStart：任务启动回调，TaskExit：任务停止回调，VodSourceFileStart：从点播源文件开始拉流回调，VodSourceFileFinish：从点播源文件拉流结束回调，ResetTaskConfig：任务更新回调。 */
  CallbackEvents: string[];
  /** 注意：该信息暂不返回。最后一次回调信息。 */
  CallbackInfo: string;
  /** 注意：该信息暂不返回。错误信息。 */
  ErrorInfo: string;
  /** 状态。enable：生效中。pause：暂停中。 */
  Status: string;
  /** 注意：该信息仅在查询单个任务时返回。任务最新拉流信息。包含：源 url，偏移时间，上报时间。 */
  RecentPullInfo: RecentPullInfo;
  /** 任务备注信息。 */
  Comment: string;
  /** 备源类型：PullLivePushLive -直播，PullVodPushLive -点播。 */
  BackupSourceType: string | null;
  /** 备源URL。 */
  BackupSourceUrl: string | null;
  /** 水印信息列表。 */
  WatermarkList: PullPushWatermarkInfo[] | null;
}

/** 推流鉴权key信息。 */
declare interface PushAuthKeyInfo {
  /** 域名。 */
  DomainName: string;
  /** 是否启用，0：关闭，1：启用。 */
  Enable: number;
  /** 主鉴权 Key。 */
  MasterAuthKey: string;
  /** 备鉴权 Key。 */
  BackupAuthKey: string;
  /** 有效时间，单位：秒。 */
  AuthDelta: number;
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

/** 某条流的推流质量详情数据。 */
declare interface PushQualityData {
  /** 数据时间，格式: %Y-%m-%d %H:%M:%S.%ms，精确到毫秒级。 */
  Time: string;
  /** 推流域名。 */
  PushDomain: string;
  /** 推流路径。 */
  AppName: string;
  /** 推流客户端 IP。 */
  ClientIp: string;
  /** 开始推流时间，格式: %Y-%m-%d %H:%M:%S.%ms，精确到毫秒级。 */
  BeginPushTime: string;
  /** 分辨率信息。 */
  Resolution: string;
  /** 视频编码格式。 */
  VCodec: string;
  /** 音频编码格式。 */
  ACodec: string;
  /** 推流序列号，用来唯一的标志一次推流。 */
  Sequence: string;
  /** 视频帧率。 */
  VideoFps: number;
  /** 视频码率，单位: bps。 */
  VideoRate: number;
  /** 音频帧率。 */
  AudioFps: number;
  /** 音频码率，单位: bps。 */
  AudioRate: number;
  /** 本地流逝时间，单位: ms，音视频流逝时间与本地流逝时间的差距越大表示推流质量越差，上行卡顿越严重。 */
  LocalTs: number;
  /** 视频流逝时间，单位: ms。 */
  VideoTs: number;
  /** 音频流逝时间，单位: ms。 */
  AudioTs: number;
  /** metadata 中的视频码率，单位: kbps。 */
  MetaVideoRate: number;
  /** metadata 中的音频码率，单位: kbps。 */
  MetaAudioRate: number;
  /** metadata 中的帧率。 */
  MateFps: number;
  /** 推流参数 */
  StreamParam: string;
  /** 带宽，单位Mbps。 */
  Bandwidth: number;
  /** 流量，单位MB。 */
  Flux: number;
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
}

/** 录制任务 */
declare interface RecordTask {
  /** 录制任务ID。 */
  TaskId: string;
  /** 推流域名。 */
  DomainName: string;
  /** 推流路径。 */
  AppName: string;
  /** 流名称。 */
  StreamName: string;
  /** 任务开始时间，Unix时间戳。 */
  StartTime: number;
  /** 任务结束时间，Unix时间戳。 */
  EndTime: number;
  /** 录制模板ID。 */
  TemplateId: number;
  /** 调用 StopRecordTask 停止任务时间，Unix时间戳。值为0表示未曾调用接口停止任务。 */
  Stopped: number;
}

/** 录制模板信息 */
declare interface RecordTemplateInfo {
  /** 模板 ID。 */
  TemplateId: number;
  /** 模板名称。 */
  TemplateName: string;
  /** 描述信息。 */
  Description: string;
  /** FLV 录制参数。 */
  FlvParam: RecordParam;
  /** HLS 录制参数。 */
  HlsParam: RecordParam;
  /** MP4 录制参数。 */
  Mp4Param: RecordParam;
  /** AAC 录制参数。 */
  AacParam: RecordParam;
  /** 0：普通直播，1：慢直播。 */
  IsDelayLive: number;
  /** HLS 录制定制参数。 */
  HlsSpecialParam: HlsSpecialParam;
  /** MP3 录制参数。 */
  Mp3Param: RecordParam;
  /** 是否去除水印。 */
  RemoveWatermark: boolean | null;
  /** FLV 录制定制参数。 */
  FlvSpecialParam: FlvSpecialParam | null;
}

/** 直播域名Referer黑白名单配置 */
declare interface RefererAuthConfig {
  /** 域名。 */
  DomainName: string;
  /** 是否启用，0：关闭，1：启用。 */
  Enable: number;
  /** 名单类型，0：黑名单，1：白名单。 */
  Type: number;
  /** 是否允许空Referer，0：不允许，1：允许。 */
  AllowEmpty: number;
  /** 名单列表，以分号(;)分隔。 */
  Rules: string;
}

/** 规则信息。 */
declare interface RuleInfo {
  /** 规则创建时间。 */
  CreateTime: string;
  /** 规则更新时间。 */
  UpdateTime: string;
  /** 模板 ID。 */
  TemplateId: number;
  /** 推流域名。 */
  DomainName: string;
  /** 推流路径。 */
  AppName: string;
  /** 流名称。 */
  StreamName: string;
}

/** 截图任务 */
declare interface ScreenshotTask {
  /** 截图任务ID。 */
  TaskId: string;
  /** 推流域名。 */
  DomainName: string;
  /** 推流路径。 */
  AppName: string;
  /** 流名称。 */
  StreamName: string;
  /** 任务开始时间，Unix时间戳。 */
  StartTime: number;
  /** 任务结束时间，Unix时间戳。 */
  EndTime: number;
  /** 截图模板ID。 */
  TemplateId: number;
  /** 调用 StopScreenshotTask 停止任务时间，Unix时间戳。值为0表示未曾调用接口停止任务。 */
  Stopped: number;
}

/** 截图模板信息。 */
declare interface SnapshotTemplateInfo {
  /** 模板 ID。 */
  TemplateId: number;
  /** 模板名称。 */
  TemplateName: string;
  /** 截图时间间隔，5-300秒。 */
  SnapshotInterval: number;
  /** 截图宽度，范围：0-3000。 0：原始宽度并适配原始比例。 */
  Width: number;
  /** 截图高度，范围：0-2000。0：原始高度并适配原始比例。 */
  Height: number;
  /** 是否开启鉴黄，0：不开启，1：开启。 */
  PornFlag: number;
  /** Cos 应用 ID。 */
  CosAppId: number;
  /** Cos Bucket名称。 */
  CosBucket: string;
  /** Cos 地域。 */
  CosRegion: string;
  /** 模板描述。 */
  Description: string;
  /** Cos Bucket文件夹前缀。 */
  CosPrefix: string | null;
  /** Cos 文件名称。 */
  CosFileName: string | null;
}

/** 推断流事件信息。 */
declare interface StreamEventInfo {
  /** 应用名称。 */
  AppName: string;
  /** 推流域名。 */
  DomainName: string;
  /** 流名称。 */
  StreamName: string;
  /** 推流开始时间。UTC 格式时间，例如：2019-01-07T12:00:00Z。 */
  StreamStartTime: string;
  /** 推流结束时间。UTC 格式时间，例如：2019-01-07T15:00:00Z。 */
  StreamEndTime: string;
  /** 停止原因。 */
  StopReason: string;
  /** 推流持续时长，单位：秒。 */
  Duration: number;
  /** 主播 IP。 */
  ClientIp: string;
  /** 分辨率。 */
  Resolution: string;
}

/** 流名称列表。 */
declare interface StreamName {
  /** 流名称。 */
  StreamName: string;
  /** 应用名称。 */
  AppName: string;
  /** 推流域名。 */
  DomainName: string;
  /** 推流开始时间。UTC格式时间，例如：2019-01-07T12:00:00Z。 */
  StreamStartTime: string;
  /** 推流结束时间。UTC格式时间，例如：2019-01-07T15:00:00Z。 */
  StreamEndTime: string;
  /** 停止原因。 */
  StopReason: string;
  /** 推流持续时长，单位：秒。 */
  Duration: number;
  /** 主播 IP。 */
  ClientIp: string;
  /** 分辨率。 */
  Resolution: string;
}

/** 查询当前正在推流的信息 */
declare interface StreamOnlineInfo {
  /** 流名称。 */
  StreamName: string;
  /** 推流时间列表 */
  PublishTimeList: PublishTime[];
  /** 应用名称。 */
  AppName: string;
  /** 推流域名。 */
  DomainName: string;
}

/** 转码模板信息。 */
declare interface TemplateInfo {
  /** 视频编码：h264/h265/origin，默认h264。origin: 保持原始编码格式 */
  Vcodec: string;
  /** 视频码率。范围：0kbps - 8000kbps。0为保持原始码率。注: 转码模板有码率唯一要求，最终保存的码率可能与输入码率有所差别。 */
  VideoBitrate: number;
  /** 音频编码：aac，默认aac。注意：当前该参数未生效，待后续支持！ */
  Acodec: string;
  /** 音频码率。取值范围：0kbps - 500kbps。默认0。 */
  AudioBitrate: number;
  /** 宽，默认0。范围[0-3000]数值必须是2的倍数，0是原始宽度 */
  Width: number;
  /** 高，默认0。范围[0-3000]数值必须是2的倍数，0是原始宽度 */
  Height: number;
  /** 帧率，默认0。范围0-60fps */
  Fps: number;
  /** 关键帧间隔，单位：秒。默认原始的间隔范围2-6 */
  Gop: number;
  /** 旋转角度，默认0。可取值：0，90，180，270 */
  Rotate: number;
  /** 编码质量：baseline/main/high。默认baseline */
  Profile: string;
  /** 当设置的码率>原始码率时，是否以原始码率为准。0：否， 1：是默认 0。 */
  BitrateToOrig: number;
  /** 当设置的高度>原始高度时，是否以原始高度为准。0：否， 1：是默认 0。 */
  HeightToOrig: number;
  /** 当设置的帧率>原始帧率时，是否以原始帧率为准。0：否， 1：是默认 0。 */
  FpsToOrig: number;
  /** 是否保留视频。0：否，1：是。 */
  NeedVideo: number;
  /** 是否保留音频。0：否，1：是。 */
  NeedAudio: number;
  /** 模板 ID。 */
  TemplateId: number;
  /** 模板名称。 */
  TemplateName: string;
  /** 模板描述。 */
  Description: string;
  /** 是否是极速高清模板，0：否，1：是。默认0。 */
  AiTransCode: number;
  /** 极速高清视频码率压缩比。极速高清目标码率=VideoBitrate * (1-AdaptBitratePercent)取值范围：0.0到0.5 */
  AdaptBitratePercent: number;
  /** 是否以短边作为高度，0：否，1：是。默认0。 */
  ShortEdgeAsHeight: number | null;
  /** DRM 加密类型，可选值：fairplay、normalaes、widevine。 */
  DRMType: string | null;
  /** DRM 加密项，多个用|分割，可选值：AUDIO、SD、HD、UHD1、UHD2，后四个为一组，同组中的内容只能选一个。 */
  DRMTracks: string | null;
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

/** 某个时间点的指标的数值是多少。 */
declare interface TimeValue {
  /** UTC 时间，时间格式：yyyy-mm-ddTHH:MM:SSZ。 */
  Time: string;
  /** 数值。 */
  Num: number;
}

/** 转码详细信息。 */
declare interface TranscodeDetailInfo {
  /** 流名称。 */
  StreamName: string;
  /** 开始时间（北京时间），格式：yyyy-mm-dd HH:MM。 */
  StartTime: string;
  /** 结束时间（北京时间），格式：yyyy-mm-dd HH:MM。 */
  EndTime: string;
  /** 转码时长，单位：分钟。注意：因推流过程中可能有中断重推情况，此处时长为真实转码时长累加值，并非结束时间和开始时间的间隔。 */
  Duration: number;
  /** 编码方式，带模块，示例：liveprocessor_H264：直播转码-H264，liveprocessor_H265： 直播转码-H265，topspeed_H264：极速高清-H264，topspeed_H265：极速高清-H265。 */
  ModuleCodec: string;
  /** 码率。 */
  Bitrate: number;
  /** 类型，包含：转码（Transcode），混流（MixStream），水印（WaterMark），快直播（Webrtc）。 */
  Type: string;
  /** 推流域名。 */
  PushDomain: string;
  /** 分辨率。 */
  Resolution: string;
  /** 地域：Mainland：国内。Overseas：海外。 */
  MainlandOrOversea: string;
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
  /** 时间点，北京时间，示例：2019-03-01 00:00:00。 */
  Time: string;
  /** 转码时长，单位：分钟。 */
  Duration: number;
  /** 编码方式，带模块，示例：liveprocessor_H264 =》直播转码-H264，liveprocessor_H265 =》 直播转码-H265，topspeed_H264 =》极速高清-H264，topspeed_H265 =》极速高清-H265。 */
  ModuleCodec: string;
  /** 分辨率，示例：540*480。 */
  Resolution: string;
}

/** 水印信息。 */
declare interface WatermarkInfo {
  /** 水印 ID。 */
  WatermarkId: number;
  /** 水印图片 URL。 */
  PictureUrl: string;
  /** 显示位置，X 轴偏移。 */
  XPosition: number;
  /** 显示位置，Y 轴偏移。 */
  YPosition: number;
  /** 水印名称。 */
  WatermarkName: string;
  /** 当前状态。0：未使用，1:使用中。 */
  Status: number;
  /** 添加时间。 */
  CreateTime: string;
  /** 水印宽。 */
  Width: number;
  /** 水印高。 */
  Height: number;
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
  /** 延播设置的过期时间。UTC 格式，例如：2018-11-29T19:00:00Z。注意：1. 默认7天后过期，且最长支持7天内生效。2. 北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732)。 */
  ExpireTime?: string;
}

declare interface AddDelayLiveStreamResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface AddLiveWatermarkRequest {
  /** 水印图片 URL。URL中禁止包含的字符： ;(){}$>`#"\'| */
  PictureUrl: string;
  /** 水印名称。最长16字节。 */
  WatermarkName: string;
  /** 显示位置，X轴偏移，单位是百分比，默认 0。 */
  XPosition?: number;
  /** 显示位置，Y轴偏移，单位是百分比，默认 0。 */
  YPosition?: number;
  /** 水印宽度，占直播原始画面宽度百分比，建议高宽只设置一项，另外一项会自适应缩放，避免变形。默认原始宽度。 */
  Width?: number;
  /** 水印高度，占直播原始画面高度百分比，建议高宽只设置一项，另外一项会自适应缩放，避免变形。默认原始高度。 */
  Height?: number;
}

declare interface AddLiveWatermarkResponse {
  /** 水印ID。 */
  WatermarkId: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  Content: string;
  /** 域名验证状态。>=0 为已验证归属。<0 未验证归属权。 */
  Status: number;
  /** DomainName 对应的主域名。同一主域名下的所有域名只需成功验证一次，后续均无需再验证。 */
  MainDomain: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CancelCommonMixStreamRequest {
  /** 混流会话（申请混流开始到取消混流结束）标识 ID。该值与CreateCommonMixStream中的MixStreamSessionId保持一致。 */
  MixStreamSessionId: string;
}

declare interface CancelCommonMixStreamResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 录制回调 URL，相关协议文档：[事件消息通知](/document/product/267/32744)。 */
  RecordNotifyUrl?: string;
  /** 截图回调 URL，相关协议文档：[事件消息通知](/document/product/267/32744)。 */
  SnapshotNotifyUrl?: string;
  /** 鉴黄回调 URL，相关协议文档：[事件消息通知](/document/product/267/32741)。 */
  PornCensorshipNotifyUrl?: string;
  /** 回调 Key，回调 URL 公用，回调签名详见事件消息通知文档。[事件消息通知](/document/product/267/32744)。 */
  CallbackKey?: string;
  /** 参数已弃用。 */
  StreamMixNotifyUrl?: string;
}

declare interface CreateLiveCallbackTemplateResponse {
  /** 模板ID。 */
  TemplateId: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateLivePullStreamTaskRequest {
  /** 拉流源的类型：PullLivePushLive -直播，PullVodPushLive -点播。 */
  SourceType: string;
  /** 拉流源 url 列表。SourceType 为直播（PullLivePushLive）只可以填1个，SourceType 为点播（PullVodPushLive）可以填多个，上限30个。当前支持的文件格式：flv，mp4，hls。当前支持的拉流协议：http，https，rtmp，rtmps，rtsp，srt。注意：1. 建议优先使用 flv 文件，对于 mp4 未交织好的文件轮播推流易产生卡顿，可通过点播转码进行重新交织后再轮播。2. 拒绝内网域名等攻击性拉流地址，如有使用，则做账号封禁处理。3. 源文件请保持时间戳正常交织递增，避免因源文件异常影响推流及播放。4. 视频编码格式仅支持: H264, H265。5. 音频编码格式仅支持: AAC。6. 点播源请使用小文件，尽量时长保持在1小时内，较大文件打开和续播耗时较久，耗时超过15秒会有无法正常转推风险。 */
  SourceUrls: string[];
  /** 推流域名。将拉取过来的流推到该域名。注意：如果目标地址为非云直播，且样式不同于云直播，请使用 ToUrl 传入完整推流地址，详细用法请参考 ToUrl 参数说明。 */
  DomainName: string;
  /** 推流路径。将拉取过来的流推到该路径。 */
  AppName: string;
  /** 推流名称。将拉取过来的流推到该流名称。 */
  StreamName: string;
  /** 开始时间。使用 UTC 格式时间，例如：2019-01-08T10:00:00Z。注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732)。 */
  StartTime: string;
  /** 结束时间，注意：1. 结束时间必须大于开始时间；2. 结束时间和开始时间必须大于当前时间；3. 结束时间 和 开始时间 间隔必须小于七天。使用 UTC 格式时间，例如：2019-01-08T10:00:00Z。注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732)。 */
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
  /** 自定义回调地址。拉流转推任务相关事件会回调到该地址。 */
  CallbackUrl?: string;
  /** 其他参数。示例: ignore_region 用于忽略传入地域, 内部按负载分配。 */
  ExtraCmd?: string;
  /** 任务描述，限制 512 字节。 */
  Comment?: string;
  /** 完整目标 URL 地址。用法注意：如果使用该参数来传完整目标地址，则 DomainName, AppName, StreamName 需要传入空字符串，任务将会使用该 ToUrl 参数指定的目标地址。注意：签名时间需要超过任务结束时间，避免因签名过期造成任务失败。 */
  ToUrl?: string;
  /** 备源的类型：PullLivePushLive -直播，PullVodPushLive -点播。注意：1. 仅当主源类型为直播源时，备源才会生效。2. 主直播源拉流中断时，自动使用备源进行拉流。3. 如果备源为点播文件时，则每次轮播完点播文件就检查主源是否恢复，如果主源恢复则自动切回到主源，否则继续拉备源。 */
  BackupSourceType?: string;
  /** 备源 URL。只允许填一个备源 URL */
  BackupSourceUrl?: string;
  /** 水印信息列表。注意：1. 最多支持4个不同位置的水印。2. 水印图片 URL 请使用合法外网可访问地址。3. 支持的水印图片格式：png，jpg，gif 等。 */
  WatermarkList?: PullPushWatermarkInfo[];
}

declare interface CreateLivePullStreamTaskResponse {
  /** 任务 Id 。 */
  TaskId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 是否去除水印，类型为慢直播时此参数无效。 */
  RemoveWatermark?: boolean;
  /** FLV 录制特殊参数。 */
  FlvSpecialParam?: FlvSpecialParam;
}

declare interface CreateLiveRecordTemplateResponse {
  /** 模板Id。 */
  TemplateId: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  TemplateId: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateLiveTranscodeRuleRequest {
  /** 播放域名。 */
  DomainName: string;
  /** 推流路径，与推流和播放地址中的AppName保持一致。如果只绑定域名，则此处填空。 */
  AppName: string;
  /** 流名称。如果只绑定域名或路径，则此处填空。 */
  StreamName: string;
  /** 指定已有的模板Id。 */
  TemplateId: number;
}

declare interface CreateLiveTranscodeRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** DRM 加密类型，可选值：fairplay、normalaes、widevine。不传递或着为空字符串，清空之前的DRM配置。 */
  DRMType?: string;
  /** DRM 加密项，可选值：AUDIO、SD、HD、UHD1、UHD2，后四个为一组，同组中的内容只能选一个。不传递或着为空字符串，清空之前的DRM配置。 */
  DRMTracks?: string;
}

declare interface CreateLiveTranscodeTemplateResponse {
  /** 模板Id。 */
  TemplateId: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  ConfigId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateRecordTaskRequest {
  /** 流名称。 */
  StreamName: string;
  /** 推流域名。 */
  DomainName: string;
  /** 推流路径。 */
  AppName: string;
  /** 录制任务结束时间，Unix时间戳。设置时间必须大于StartTime及当前时间，且EndTime - StartTime不能超过24小时。 */
  EndTime: number;
  /** 录制任务开始时间，Unix时间戳。如果不填表示立即启动录制。StartTime不能超过当前时间+6天。 */
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
  TaskId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateScreenshotTaskRequest {
  /** 流名称。 */
  StreamName: string;
  /** 推流域名。 */
  DomainName: string;
  /** 推流路径。 */
  AppName: string;
  /** 截图任务结束时间，Unix时间戳。设置时间必须大于StartTime及当前时间，且EndTime - StartTime不能超过24小时。 */
  EndTime: number;
  /** 截图模板ID，CreateLiveSnapshotTemplate 返回值。如果传入错误ID，则不拉起截图。 */
  TemplateId: number;
  /** 截图任务开始时间，Unix时间戳。如果不填表示立即启动截图。StartTime不能超过当前时间+6天。 */
  StartTime?: number;
  /** 推流类型，默认0。取值：0-直播推流。1-合成流，即 A+B=C 类型混流。 */
  StreamType?: number;
  /** 扩展字段，暂无定义。默认为空。 */
  Extension?: string;
}

declare interface CreateScreenshotTaskResponse {
  /** 任务ID，全局唯一标识截图任务。返回TaskId字段说明截图任务创建成功。 */
  TaskId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteLiveCallbackRuleRequest {
  /** 推流域名。 */
  DomainName: string;
  /** 推流路径，与推流和播放地址中的 AppName 保持一致，默认为 live。 */
  AppName: string;
}

declare interface DeleteLiveCallbackRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteLiveCallbackTemplateRequest {
  /** 模板 ID。1. 在创建回调模板接口 [CreateLiveCallbackTemplate](/document/product/267/32637) 调用的返回值中获取模板 ID。2. 可以从接口 [DescribeLiveCallbackTemplates](/document/product/267/32632) 查询已经创建的过的模板列表。 */
  TemplateId: number;
}

declare interface DeleteLiveCallbackTemplateResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteLiveDomainRequest {
  /** 要删除的域名 */
  DomainName: string;
  /** 类型。0-推流，1-播放 */
  DomainType: number;
}

declare interface DeleteLiveDomainResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteLivePullStreamTaskRequest {
  /** 任务 Id。 */
  TaskId: string;
  /** 操作人姓名。 */
  Operator: string;
}

declare interface DeleteLivePullStreamTaskResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteLiveRecordRequest {
  /** 流名称。 */
  StreamName: string;
  /** 任务ID，由CreateLiveRecord接口返回。 */
  TaskId: number;
}

declare interface DeleteLiveRecordResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteLiveRecordTemplateRequest {
  /** DescribeRecordTemplates接口获取到的模板 ID。 */
  TemplateId: number;
}

declare interface DeleteLiveRecordTemplateResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteLiveSnapshotTemplateRequest {
  /** 模板 ID。1. 在创建截图模板接口 [CreateLiveSnapshotTemplate](/document/product/267/32624) 调用的返回值中获取。2. 可以从接口 [DescribeLiveSnapshotTemplates](/document/product/267/32619) 中查询已创建的截图模板列表。 */
  TemplateId: number;
}

declare interface DeleteLiveSnapshotTemplateResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteLiveTranscodeTemplateRequest {
  /** 模板 ID。1. 在创建转码模板接口 [CreateLiveTranscodeTemplate](/document/product/267/32646) 调用的返回值中获取模板 ID。2. 可以从接口 [DescribeLiveTranscodeTemplates](/document/product/267/32641) 查询已经创建的过的模板列表。 */
  TemplateId: number;
}

declare interface DeleteLiveTranscodeTemplateResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteLiveWatermarkRequest {
  /** 水印 ID。在添加水印接口 [AddLiveWatermark](/document/product/267/30154) 调用返回值中获取水印 ID。或DescribeLiveWatermarks接口返回的水印ID。 */
  WatermarkId: number;
}

declare interface DeleteLiveWatermarkResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeletePullStreamConfigRequest {
  /** 配置 ID。1. 在添加拉流配置接口 [CreatePullStreamConfig](/document/api/267/30159) 调用返回值中获取配置 ID。2. 可以从接口 [DescribePullStreamConfigs](/document/api/267/30158) 中查询已创建过的拉流配置列表。 */
  ConfigId: string;
}

declare interface DeletePullStreamConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteRecordTaskRequest {
  /** 任务ID，CreateRecordTask返回。删除TaskId指定的录制任务。 */
  TaskId: string;
}

declare interface DeleteRecordTaskResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteScreenshotTaskRequest {
  /** 任务ID，CreateScreenshotTask返回。删除TaskId指定的截图任务。 */
  TaskId: string;
}

declare interface DeleteScreenshotTaskResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAllStreamPlayInfoListRequest {
  /** 查询时间点，精确到分钟粒度，支持最近1个月的数据查询，数据延迟为5分钟左右，如果要查询实时的数据，建议传递5分钟前的时间点，格式为yyyy-mm-dd HH:MM:00。（只精确至分钟，秒数填00）。 */
  QueryTime: string;
  /** 播放域名列表，若不填，表示总体数据。 */
  PlayDomains?: string[];
}

declare interface DescribeAllStreamPlayInfoListResponse {
  /** 查询时间点，回传的输入参数中的查询时间。 */
  QueryTime: string;
  /** 数据信息列表。 */
  DataInfoList: MonitorStreamPlayInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeBillBandwidthAndFluxListRequest {
  /** 起始时间点，格式为yyyy-mm-dd HH:MM:SS。 */
  StartTime: string;
  /** 结束时间点，格式为yyyy-mm-dd HH:MM:SS，起始和结束时间跨度不支持超过31天。支持最近3年的数据查询 */
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
  /** 峰值带宽所在时间点，格式为yyyy-mm-dd HH:MM:SS。 */
  PeakBandwidthTime: string;
  /** 峰值带宽，单位是Mbps。 */
  PeakBandwidth: number;
  /** 95峰值带宽所在时间点，格式为yyyy-mm-dd HH:MM:SS。 */
  P95PeakBandwidthTime: string;
  /** 95峰值带宽，单位是Mbps。 */
  P95PeakBandwidth: number;
  /** 总流量，单位是MB。 */
  SumFlux: number;
  /** 明细数据信息。 */
  DataInfoList: BillDataInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeCallbackRecordsListRequest {
  /** 起始时间点，格式为yyyy-mm-dd HH:MM:SS。 */
  StartTime: string;
  /** 结束时间点，格式为yyyy-mm-dd HH:MM:SS，起始和结束时间跨度不支持超过1天。 */
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
  DataInfoList: CallbackEventInfo[];
  /** 页码。 */
  PageNum: number;
  /** 每页条数。 */
  PageSize: number;
  /** 总条数。 */
  TotalNum: number;
  /** 总页数。 */
  TotalPage: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeConcurrentRecordStreamNumRequest {
  /** 直播类型，SlowLive：慢直播。NormalLive：普通直播。 */
  LiveType: string;
  /** 起始时间，格式：yyyy-mm-dd HH:MM:SS。可以查询最近180天的数据。 */
  StartTime: string;
  /** 结束时间，格式：yyyy-mm-dd HH:MM:SS。时间跨度最大支持31天。 */
  EndTime: string;
  /** 如果为空，查询所有地区数据；如果为“Mainland”，查询国内数据；如果为“Oversea”，则查询国外数据。 */
  MainlandOrOversea?: string;
  /** 推流域名列表，不填表示总体数据。 */
  PushDomains?: string[];
}

declare interface DescribeConcurrentRecordStreamNumResponse {
  /** 统计信息列表。 */
  DataInfoList: ConcurrentRecordStreamNum[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeDeliverBandwidthListRequest {
  /** 起始时间，格式为%Y-%m-%d %H:%M:%S。 */
  StartTime: string;
  /** 结束时间，格式为%Y-%m-%d %H:%M:%S，支持最近三个月的数据查询，时间跨度最大是1个月。 */
  EndTime: string;
}

declare interface DescribeDeliverBandwidthListResponse {
  /** 转推计费带宽数据 */
  DataInfoList: BandwidthInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeGroupProIspPlayInfoListRequest {
  /** 起始时间点，格式为yyyy-mm-dd HH:MM:SS。 */
  StartTime: string;
  /** 结束时间点，格式为yyyy-mm-dd HH:MM:SS时间跨度在（0,3小时]，支持最近1个月数据查询。 */
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
  DataInfoList: GroupProIspDataInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeHttpStatusInfoListRequest {
  /** 起始时间，北京时间，格式：yyyy-mm-dd HH:MM:SS。 */
  StartTime: string;
  /** 结束时间，北京时间，格式：yyyy-mm-dd HH:MM:SS。注：最大时间跨度支持1天，支持最近3个月的数据查询。 */
  EndTime: string;
  /** 播放域名列表。 */
  PlayDomains?: string[];
}

declare interface DescribeHttpStatusInfoListResponse {
  /** 播放状态码列表。 */
  DataInfoList: HttpStatusData[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeLiveCallbackRulesRequest {
}

declare interface DescribeLiveCallbackRulesResponse {
  /** 规则信息列表。 */
  Rules?: CallBackRuleInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeLiveCallbackTemplateRequest {
  /** 模板 ID。1. 在创建回调模板接口 [CreateLiveCallbackTemplate](/document/product/267/32637) 调用的返回值中获取模板 ID。2. 可以从接口 [DescribeLiveCallbackTemplates](/document/product/267/32632) 查询已经创建的过的模板列表。 */
  TemplateId: number;
}

declare interface DescribeLiveCallbackTemplateResponse {
  /** 回调模板信息。 */
  Template: CallBackTemplateInfo;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeLiveCallbackTemplatesRequest {
}

declare interface DescribeLiveCallbackTemplatesResponse {
  /** 模板信息列表。 */
  Templates: CallBackTemplateInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeLiveCertRequest {
  /** DescribeLiveCerts接口获取到的证书Id。 */
  CertId: number;
}

declare interface DescribeLiveCertResponse {
  /** 证书信息。 */
  CertInfo?: CertInfo;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeLiveCertsRequest {
}

declare interface DescribeLiveCertsResponse {
  /** 证书信息列表。 */
  CertInfoSet?: CertInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeLiveDelayInfoListRequest {
}

declare interface DescribeLiveDelayInfoListResponse {
  /** 延播信息列表。 */
  DelayInfoList?: DelayInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  LiveDomainCertBindings: LiveDomainCertBindings[];
  /** 总的记录行数，便于分页。 */
  TotalNum: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeLiveDomainCertRequest {
  /** 播放域名。 */
  DomainName: string;
}

declare interface DescribeLiveDomainCertResponse {
  /** 证书信息。 */
  DomainCertInfo?: DomainCertInfo;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeLiveDomainPlayInfoListRequest {
  /** 播放域名列表。 */
  PlayDomains?: string[];
}

declare interface DescribeLiveDomainPlayInfoListResponse {
  /** 数据时间，格式为yyyy-mm-dd HH:MM:SS。 */
  Time: string;
  /** 实时总带宽。 */
  TotalBandwidth: number;
  /** 实时总流量。 */
  TotalFlux: number;
  /** 总请求数。 */
  TotalRequest: number;
  /** 实时总连接数。 */
  TotalOnline: number;
  /** 分域名的数据情况。 */
  DomainInfoList: DomainInfoList[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeLiveDomainRefererRequest {
  /** 播放域名。 */
  DomainName: string;
}

declare interface DescribeLiveDomainRefererResponse {
  /** 域名 Referer 黑白名单配置。 */
  RefererAuthConfig: RefererAuthConfig;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeLiveDomainRequest {
  /** 域名。 */
  DomainName: string;
}

declare interface DescribeLiveDomainResponse {
  /** 域名信息。 */
  DomainInfo?: DomainInfo | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  AllCount: number;
  /** 域名详细信息列表。 */
  DomainList: DomainInfo[];
  /** 可继续添加域名数量。 */
  CreateLimitCount: number | null;
  /** 启用的播放域名加速区域统计，数组元素分别为：中国大陆（境内），全球地区，国际/港澳台（境外）域名数量。 */
  PlayTypeCount: number[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  LivePackageInfoList: LivePackageInfo[] | null;
  /** 套餐包当前计费方式:-1: 无计费方式或获取失败0: 无计费方式201: 月结带宽202: 月结流量203: 日结带宽204: 日结流量205: 日结时长206: 月结时长304: 日结流量。 */
  PackageBillMode: number | null;
  /** 总页数。 */
  TotalPage: number | null;
  /** 数据总条数。 */
  TotalNum: number | null;
  /** 当前页数。 */
  PageNum: number | null;
  /** 当前每页数量。 */
  PageSize: number | null;
  /** 当请求参数 PackageType = 0 时生效，逗号分隔，从第一个到最后一个分别表示：标准直播，中国大陆（境内全地区）计费方式。标准直播，国际/港澳台（境外多地区）计费方式。快直播，中国大陆（境内全地区）计费方式。快直播，国际/港澳台（境外多地区）计费方式。 */
  FluxPackageBillMode: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeLivePlayAuthKeyRequest {
  /** 域名。 */
  DomainName: string;
}

declare interface DescribeLivePlayAuthKeyResponse {
  /** 播放鉴权key信息。 */
  PlayAuthKeyInfo?: PlayAuthKeyInfo;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeLivePullStreamTasksRequest {
  /** 任务 ID。 来源：调用 CreateLivePullStreamTask 接口时返回。不填默认查询所有任务，按更新时间倒序排序。 */
  TaskId?: string;
  /** 取得第几页，默认值：1。 */
  PageNum?: number;
  /** 分页大小，默认值：10。取值范围：1~20 之前的任意整数。 */
  PageSize?: number;
}

declare interface DescribeLivePullStreamTasksResponse {
  /** 直播拉流任务信息列表。 */
  TaskInfos: PullStreamTaskInfo[];
  /** 分页的页码。 */
  PageNum: number;
  /** 每页大小。 */
  PageSize: number;
  /** 符合条件的总个数。 */
  TotalNum: number;
  /** 总页数。 */
  TotalPage: number;
  /** 限制可创建的最大任务数。 */
  LimitTaskNum: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeLivePushAuthKeyRequest {
  /** 推流域名。 */
  DomainName: string;
}

declare interface DescribeLivePushAuthKeyResponse {
  /** 推流鉴权key信息。 */
  PushAuthKeyInfo?: PushAuthKeyInfo;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeLiveRecordRulesRequest {
}

declare interface DescribeLiveRecordRulesResponse {
  /** 规则列表。 */
  Rules: RuleInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeLiveRecordTemplateRequest {
  /** [DescribeLiveRecordTemplates](/document/product/267/32609)接口获取到的模板 ID。 */
  TemplateId: number;
}

declare interface DescribeLiveRecordTemplateResponse {
  /** 录制模板信息。 */
  Template: RecordTemplateInfo;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeLiveRecordTemplatesRequest {
  /** 是否属于慢直播模板，默认：0。0： 标准直播。1：慢直播。 */
  IsDelayLive?: number;
}

declare interface DescribeLiveRecordTemplatesResponse {
  /** 录制模板信息列表。 */
  Templates: RecordTemplateInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeLiveSnapshotRulesRequest {
}

declare interface DescribeLiveSnapshotRulesResponse {
  /** 规则列表。 */
  Rules: RuleInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeLiveSnapshotTemplateRequest {
  /** 模板 ID。调用 [CreateLiveSnapshotTemplate](/document/product/267/32624) 时返回的模板 ID。 */
  TemplateId: number;
}

declare interface DescribeLiveSnapshotTemplateResponse {
  /** 截图模板信息。 */
  Template?: SnapshotTemplateInfo;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeLiveSnapshotTemplatesRequest {
}

declare interface DescribeLiveSnapshotTemplatesResponse {
  /** 截图模板列表。 */
  Templates: SnapshotTemplateInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeLiveStreamEventListRequest {
  /** 起始时间。 UTC 格式，例如：2018-12-29T19:00:00Z。支持查询60天内的历史记录。 */
  StartTime: string;
  /** 结束时间。UTC 格式，例如：2018-12-29T20:00:00Z。不超过当前时间，且和起始时间相差不得超过30天。 */
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
  EventList: StreamEventInfo[];
  /** 分页的页码。 */
  PageNum: number;
  /** 每页大小。 */
  PageSize: number;
  /** 符合条件的总个数。 */
  TotalNum: number;
  /** 总页数。 */
  TotalPage: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  TotalNum: number;
  /** 总页数。 */
  TotalPage: number;
  /** 分页的页码。 */
  PageNum: number;
  /** 每页显示的条数。 */
  PageSize: number;
  /** 正在推送流的信息列表。 */
  OnlineInfo: StreamOnlineInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeLiveStreamPublishedListRequest {
  /** 您的推流域名。 */
  DomainName: string;
  /** 结束时间。UTC 格式，例如：2016-06-30T19:00:00Z。不超过当前时间。注意：EndTime和StartTime相差不可超过30天。 */
  EndTime: string;
  /** 起始时间。 UTC 格式，例如：2016-06-29T19:00:00Z。最长支持查询60天内数据。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  DataInfoList: PushDataInfo[];
  /** 所有在线流的总数量。 */
  TotalNum: number;
  /** 总页数。 */
  TotalPage: number;
  /** 当前数据所在页码。 */
  PageNum: number;
  /** 每页的在线流的个数。 */
  PageSize: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  StreamState: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeLiveTimeShiftBillInfoListRequest {
  /** UTC开始时间，支持最近三个月的查询，查询时间最长跨度为一个月。使用 UTC 格式时间，例如：2019-01-08T10:00:00Z。注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732)。 */
  StartTime: string;
  /** UTC结束时间，支持最近三个月的查询，查询时间最长跨度为一个月。使用 UTC 格式时间，例如：2019-01-08T10:00:00Z。注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732)。 */
  EndTime: string;
  /** 推流域名列表，若不传递此参数，则表示查询总体数据。 */
  PushDomains?: string[];
}

declare interface DescribeLiveTimeShiftBillInfoListResponse {
  /** 时移计费明细数据。 */
  DataInfoList: TimeShiftBillData[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  DataInfoList: TranscodeDetailInfo[];
  /** 页码。 */
  PageNum: number;
  /** 每页个数。 */
  PageSize: number;
  /** 总个数。 */
  TotalNum: number;
  /** 总页数。 */
  TotalPage: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  Rules: RuleInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeLiveTranscodeTemplateRequest {
  /** 模板 ID。注意：在创建转码模板接口 [CreateLiveTranscodeTemplate](/document/product/267/32646) 调用的返回值中获取模板 ID。 */
  TemplateId: number;
}

declare interface DescribeLiveTranscodeTemplateResponse {
  /** 模板信息。 */
  Template: TemplateInfo;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeLiveTranscodeTemplatesRequest {
}

declare interface DescribeLiveTranscodeTemplatesResponse {
  /** 转码模板列表。 */
  Templates: TemplateInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeLiveTranscodeTotalInfoRequest {
  /** 开始时间，北京时间。格式：yyyy-mm-dd HH:MM:SS。 */
  StartTime: string;
  /** 结束时间，北京时间。格式：yyyy-mm-dd HH:MM:SS。 */
  EndTime: string;
  /** 推流域名列表，若不填，表示查询所有域名总体数据。指定域名时返回1小时粒度数据。 */
  PushDomains?: string[];
  /** 可选值：Mainland：查询中国大陆（境内）数据，Oversea：则查询国际/港澳台（境外）数据，默认：查询全球地区（境内+境外）的数据。 */
  MainlandOrOversea?: string;
}

declare interface DescribeLiveTranscodeTotalInfoResponse {
  /** 统计数据列表。 */
  DataInfoList: TranscodeTotalInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeLiveWatermarkRequest {
  /** DescribeLiveWatermarks接口返回的水印 ID。 */
  WatermarkId: number;
}

declare interface DescribeLiveWatermarkResponse {
  /** 水印信息。 */
  Watermark: WatermarkInfo;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeLiveWatermarkRulesRequest {
}

declare interface DescribeLiveWatermarkRulesResponse {
  /** 水印规则列表。 */
  Rules: RuleInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeLiveWatermarksRequest {
}

declare interface DescribeLiveWatermarksResponse {
  /** 水印总个数。 */
  TotalNum?: number;
  /** 水印信息列表。 */
  WatermarkList?: WatermarkInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeLogDownloadListRequest {
  /** 开始时间，北京时间。格式：yyyy-mm-dd HH:MM:SS。 */
  StartTime: string;
  /** 结束时间，北京时间。格式：yyyy-mm-dd HH:MM:SS。注意：结束时间 - 开始时间 <=7天。 */
  EndTime: string;
  /** 域名列表。 */
  PlayDomains: string[];
}

declare interface DescribeLogDownloadListResponse {
  /** 日志信息列表。 */
  LogInfoList: LogInfo[];
  /** 总条数。 */
  TotalNum: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribePlayErrorCodeDetailInfoListRequest {
  /** 起始时间，北京时间，格式：yyyy-mm-dd HH:MM:SS。 */
  StartTime: string;
  /** 结束时间，北京时间，格式：yyyy-mm-dd HH:MM:SS。注：EndTime 和 StartTime 只支持最近1天的数据查询。 */
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
  HttpCodeList: HttpCodeInfo[];
  /** 统计类型。 */
  StatType: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  ProIspInfoList: ProIspPlayCodeDataInfo[];
  /** 所有状态码的加和的次数。 */
  TotalCodeAll: number;
  /** 状态码为4开头的总次数。 */
  TotalCode4xx: number;
  /** 状态码为5开头的总次数。 */
  TotalCode5xx: number;
  /** 各状态码的总次数。 */
  TotalCodeList: PlayCodeTotalInfo[];
  /** 页号。 */
  PageNum: number;
  /** 每页大小。 */
  PageSize: number;
  /** 总页数。 */
  TotalPage: number;
  /** 总记录数。 */
  TotalNum: number;
  /** 状态码为2开头的总次数。 */
  TotalCode2xx: number;
  /** 状态码为3开头的总次数。 */
  TotalCode3xx: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeProIspPlaySumInfoListRequest {
  /** 起始时间，北京时间，格式：yyyy-mm-dd HH:MM:SS。 */
  StartTime: string;
  /** 结束时间，北京时间，格式：yyyy-mm-dd HH:MM:SS。注：EndTime 和 StartTime 只支持最近1天的数据查询。 */
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
  TotalFlux: number;
  /** 总请求数。 */
  TotalRequest: number;
  /** 统计的类型。 */
  StatType: string;
  /** 每页的记录数。 */
  PageSize: number;
  /** 页号。 */
  PageNum: number;
  /** 总记录数。 */
  TotalNum: number;
  /** 总页数。 */
  TotalPage: number;
  /** 省份，运营商，国家或地区汇总数据列表。 */
  DataInfoList: ProIspPlaySumInfo[];
  /** 下载速度，单位：MB/s，计算方式：总流量/总时长。 */
  AvgFluxPerSecond: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeProvinceIspPlayInfoListRequest {
  /** 起始时间点，当前使用北京时间，例：2019-02-21 10:00:00。 */
  StartTime: string;
  /** 结束时间点，当前使用北京时间，例：2019-02-21 12:00:00。注：EndTime 和 StartTime 只支持最近1天的数据查询。 */
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
  DataInfoList: PlayStatInfo[];
  /** 统计的类型，和输入参数保持一致。 */
  StatType: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribePullStreamConfigsRequest {
  /** 配置 ID。获取途径：从 CreatePullStreamConfig 接口返回值获取。 */
  ConfigId?: string;
}

declare interface DescribePullStreamConfigsResponse {
  /** 拉流配置。 */
  PullStreamConfigs: PullStreamConfig[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribePushBandwidthAndFluxListRequest {
  /** 起始时间点，格式为 yyyy-mm-dd HH:MM:SS。 */
  StartTime: string;
  /** 结束时间点，格式为 yyyy-mm-dd HH:MM:SS，起始和结束时间跨度不支持超过31天。 */
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
  /** 峰值带宽所在时间点，格式为 yyyy-mm-dd HH:MM:SS。 */
  PeakBandwidthTime: string;
  /** 峰值带宽，单位是 Mbps。 */
  PeakBandwidth: number;
  /** 95峰值带宽所在时间点，格式为 yyyy-mm-dd HH:MM:SS。 */
  P95PeakBandwidthTime: string;
  /** 95峰值带宽，单位是 Mbps。 */
  P95PeakBandwidth: number;
  /** 总流量，单位是 MB。 */
  SumFlux: number;
  /** 明细数据信息。 */
  DataInfoList: BillDataInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  ScrollToken: string;
  /** 录制任务列表。当该字段为空，说明已返回所有数据。 */
  TaskList: RecordTask[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeScreenShotSheetNumListRequest {
  /** utc起始时间，格式为yyyy-mm-ddTHH:MM:SSZ */
  StartTime: string;
  /** utc结束时间，格式为yyyy-mm-ddTHH:MM:SSZ，支持查询最近1年数据。 */
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
  DataInfoList: TimeValue[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  ScrollToken: string;
  /** 截图任务列表。当该字段为空，说明已返回所有数据。 */
  TaskList: ScreenshotTask[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  DataInfoList: PlayDataInfoByStream[];
  /** 总数量。 */
  TotalNum: number;
  /** 总页数。 */
  TotalPage: number;
  /** 当前数据所处页码。 */
  PageNum: number;
  /** 每页个数。 */
  PageSize: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeStreamPlayInfoListRequest {
  /** 开始时间，北京时间，格式为yyyy-mm-dd HH:MM:SS */
  StartTime: string;
  /** 结束时间，北京时间，格式为yyyy-mm-dd HH:MM:SS，结束时间 和 开始时间跨度不支持超过24小时，支持距当前时间一个月内的数据查询。 */
  EndTime: string;
  /** 播放域名，若不填，则为查询所有播放域名的在线流数据。 */
  PlayDomain?: string;
  /** 流名称，精确匹配。若不填，则为查询总体播放数据。 */
  StreamName?: string;
  /** 推流路径，与播放地址中的AppName保持一致，会精确匹配，在同时传递了StreamName时生效。若不填，则为查询总体播放数据。注意：按AppName查询请先联系工单申请，开通后配置生效预计需要5个工作日左右，具体时间以最终回复为准。 */
  AppName?: string;
  /** 服务名称，可选值包括LVB(标准直播)，LEB(快直播)，不填则查LVB+LEB总值。 */
  ServiceName?: string;
}

declare interface DescribeStreamPlayInfoListResponse {
  /** 统计信息列表，时间粒度是1分钟。 */
  DataInfoList: DayStreamPlayInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeStreamPushInfoListRequest {
  /** 流名称。 */
  StreamName: string;
  /** 起始时间点，北京时间，格式为yyyy-mm-dd HH:MM:SS。 */
  StartTime: string;
  /** 结束时间点，北京时间，格式为yyyy-mm-dd HH:MM:SS，支持查询最近7天数据，建议查询时间跨度在3小时之内。 */
  EndTime: string;
  /** 推流域名。 */
  PushDomain?: string;
  /** 推流路径，与推流和播放地址中的AppName保持一致，默认为 live。 */
  AppName?: string;
}

declare interface DescribeStreamPushInfoListResponse {
  /** 返回的数据列表。 */
  DataInfoList: PushQualityData[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeTopClientIpSumInfoListRequest {
  /** 起始时间点，格式为yyyy-mm-dd HH:MM:SS。 */
  StartTime: string;
  /** 结束时间点，格式为yyyy-mm-dd HH:MM:SS时间跨度在[0,4小时]，支持最近1天数据查询。 */
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
  PageNum: number;
  /** 每页个数，范围是[1,1000]，默认值是20。 */
  PageSize: number;
  /** 排序指标，可选值包括”TotalRequest”，”FailedRequest”,“TotalFlux”。 */
  OrderParam: string;
  /** 记录总数。 */
  TotalNum: number;
  /** 记录总页数。 */
  TotalPage: number;
  /** 数据内容。 */
  DataInfoList: ClientIpPlaySumInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeUploadStreamNumsRequest {
  /** 起始时间点，格式为yyyy-mm-dd HH:MM:SS。 */
  StartTime: string;
  /** 结束时间点，格式为yyyy-mm-dd HH:MM:SS，起始和结束时间跨度不支持超过31天。支持最近31天的数据查询 */
  EndTime: string;
  /** 直播域名，若不填，表示总体数据。 */
  Domains?: string[];
  /** 数据粒度，支持如下粒度：5：5分钟粒度，（跨度不支持超过1天），1440：天粒度（跨度不支持超过一个月）。默认值：5。 */
  Granularity?: number;
}

declare interface DescribeUploadStreamNumsResponse {
  /** 明细数据信息 */
  DataInfoList: ConcurrentRecordStreamNum[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface EnableLiveDomainRequest {
  /** 待启用的直播域名。 */
  DomainName: string;
}

declare interface EnableLiveDomainResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ForbidLiveDomainRequest {
  /** 待停用的直播域名。 */
  DomainName: string;
}

declare interface ForbidLiveDomainResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ForbidLiveStreamRequest {
  /** 推流路径，与推流和播放地址中的AppName保持一致，默认为 live。 */
  AppName: string;
  /** 您的推流域名。 */
  DomainName: string;
  /** 流名称。 */
  StreamName: string;
  /** 恢复流的时间。UTC 格式，例如：2018-11-29T19:00:00Z。注意：1. 默认禁推7天，且最长支持禁推90天。2. 北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732)。 */
  ResumeTime?: string;
  /** 禁推原因。注明：请务必填写禁推原因，防止误操作。长度限制：2048字节。 */
  Reason?: string;
}

declare interface ForbidLiveStreamResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 录制回调 URL。 */
  RecordNotifyUrl?: string;
  /** 截图回调 URL。 */
  SnapshotNotifyUrl?: string;
  /** 鉴黄回调 URL。 */
  PornCensorshipNotifyUrl?: string;
  /** 回调 Key，回调 URL 公用，回调签名详见事件消息通知文档。[事件消息通知](/document/product/267/32744)。 */
  CallbackKey?: string;
}

declare interface ModifyLiveCallbackTemplateResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  MismatchedDomainNames: string[];
  /** 操作失败的域名及错误码，错误信息，包括MismatchedDomainNames中的域名。 */
  Errors: BatchDomainOperateErrors[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyLivePlayDomainRequest {
  /** 播放域名。 */
  DomainName: string;
  /** 拉流域名类型。1-国内；2-全球；3-境外 */
  PlayType: number;
}

declare interface ModifyLivePlayDomainResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyLivePullStreamTaskRequest {
  /** 任务Id。 */
  TaskId: string;
  /** 操作人姓名。 */
  Operator: string;
  /** 拉流源url列表。SourceType为直播（PullLivePushLive）只可以填1个，SourceType为点播（PullVodPushLive）可以填多个，上限30个。 */
  SourceUrls?: string[];
  /** 开始时间。使用UTC格式时间，例如：2019-01-08T10:00:00Z。注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732)。 */
  StartTime?: string;
  /** 结束时间，注意：1. 结束时间必须大于开始时间；2. 结束时间和开始时间必须大于当前时间；3. 结束时间 和 开始时间 间隔必须小于七天。使用UTC格式时间，例如：2019-01-08T10:00:00Z。注意：北京时间值为 UTC 时间值 + 8 小时，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732)。 */
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
  /** 任务备注。 */
  Comment?: string;
  /** 备源的类型：PullLivePushLive -直播，PullVodPushLive -点播。注意：1. 仅当主源类型为直播源时，备源才会生效。2. 主直播源拉流中断时，自动使用备源进行拉流。3. 如果备源为点播文件时，则每次轮播完点播文件就检查主源是否恢复，如果主源恢复则自动切回到主源，否则继续拉备源。 */
  BackupSourceType?: string;
  /** 备源 URL。只允许填一个备源 URL */
  BackupSourceUrl?: string;
  /** 水印信息列表。注意：1. 最多支持4个不同位置的水印。2. 水印图片 URL 请使用合法外网可访问地址。3. 支持的水印图片格式：png，jpg等。4. 轮播任务修改水印后，轮播到下一个文件时新水印生效。5. 直播源任务修改水印后，水印立即生效。6. 清除水印时，需携带该水印列表参数，内容为空数组。7. 暂不支持动图水印。 */
  WatermarkList?: PullPushWatermarkInfo[];
}

declare interface ModifyLivePullStreamTaskResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** DRM 加密类型，可选值：fairplay、normalaes、widevine。不传递或着为空字符串，清空之前的DRM配置。 */
  DRMType?: string;
  /** DRM 加密项，可选值：AUDIO、SD、HD、UHD1、UHD2，后四个为一组，同组中的内容只能选一个。不传递或着为空字符串，清空之前的DRM配置。 */
  DRMTracks?: string;
}

declare interface ModifyLiveTranscodeTemplateResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyPullStreamStatusRequest {
  /** 配置 ID 列表。 */
  ConfigIds: string[];
  /** 目标状态。0无效，2正在运行，4暂停。 */
  Status: string;
}

declare interface ModifyPullStreamStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface StopLiveRecordRequest {
  /** 流名称。 */
  StreamName: string;
  /** 任务ID，由CreateLiveRecord接口返回。 */
  TaskId: number;
}

declare interface StopLiveRecordResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface StopRecordTaskRequest {
  /** 录制任务ID。 */
  TaskId: string;
}

declare interface StopRecordTaskResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface StopScreenshotTaskRequest {
  /** 截图任务ID。 */
  TaskId: string;
}

declare interface StopScreenshotTaskResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UnBindLiveDomainCertRequest {
  /** 播放域名。 */
  DomainName: string;
  /** 枚举值：gray: 解绑灰度规则formal(默认): 解绑正式规则不传则为formal */
  Type?: string;
}

declare interface UnBindLiveDomainCertResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 水印名称。最长16字节。 */
  WatermarkName?: string;
  /** 水印宽度，占直播原始画面宽度百分比，建议高宽只设置一项，另外一项会自适应缩放，避免变形。默认原始宽度。 */
  Width?: number;
  /** 水印高度，占直播原始画面宽度百分比，建议高宽只设置一项，另外一项会自适应缩放，避免变形。默认原始高度。 */
  Height?: number;
}

declare interface UpdateLiveWatermarkResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

/** {@link Live 云直播CSS} */
declare interface Live {
  (): Versions;
  /** {@link AddDelayLiveStream 设置延时直播}({@link AddDelayLiveStreamRequest 请求参数}): {@link AddDelayLiveStreamResponse 返回参数} */
  AddDelayLiveStream(data: AddDelayLiveStreamRequest, config?: AxiosRequestConfig): AxiosPromise<AddDelayLiveStreamResponse>;
  /** {@link AddLiveDomain 添加域名}({@link AddLiveDomainRequest 请求参数}): {@link AddLiveDomainResponse 返回参数} */
  AddLiveDomain(data: AddLiveDomainRequest, config?: AxiosRequestConfig): AxiosPromise<AddLiveDomainResponse>;
  /** {@link AddLiveWatermark 添加水印}({@link AddLiveWatermarkRequest 请求参数}): {@link AddLiveWatermarkResponse 返回参数} */
  AddLiveWatermark(data: AddLiveWatermarkRequest, config?: AxiosRequestConfig): AxiosPromise<AddLiveWatermarkResponse>;
  /** {@link AuthenticateDomainOwner 验证直播域名所有权}({@link AuthenticateDomainOwnerRequest 请求参数}): {@link AuthenticateDomainOwnerResponse 返回参数} */
  AuthenticateDomainOwner(data: AuthenticateDomainOwnerRequest, config?: AxiosRequestConfig): AxiosPromise<AuthenticateDomainOwnerResponse>;
  /** {@link CancelCommonMixStream 取消通用混流}({@link CancelCommonMixStreamRequest 请求参数}): {@link CancelCommonMixStreamResponse 返回参数} */
  CancelCommonMixStream(data: CancelCommonMixStreamRequest, config?: AxiosRequestConfig): AxiosPromise<CancelCommonMixStreamResponse>;
  /** {@link CreateCommonMixStream 创建通用混流}({@link CreateCommonMixStreamRequest 请求参数}): {@link CreateCommonMixStreamResponse 返回参数} */
  CreateCommonMixStream(data: CreateCommonMixStreamRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCommonMixStreamResponse>;
  /** {@link CreateLiveCallbackRule 创建回调规则}({@link CreateLiveCallbackRuleRequest 请求参数}): {@link CreateLiveCallbackRuleResponse 返回参数} */
  CreateLiveCallbackRule(data: CreateLiveCallbackRuleRequest, config?: AxiosRequestConfig): AxiosPromise<CreateLiveCallbackRuleResponse>;
  /** {@link CreateLiveCallbackTemplate 创建回调模板}({@link CreateLiveCallbackTemplateRequest 请求参数}): {@link CreateLiveCallbackTemplateResponse 返回参数} */
  CreateLiveCallbackTemplate(data: CreateLiveCallbackTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<CreateLiveCallbackTemplateResponse>;
  /** {@link CreateLivePullStreamTask 创建直播拉流任务}({@link CreateLivePullStreamTaskRequest 请求参数}): {@link CreateLivePullStreamTaskResponse 返回参数} */
  CreateLivePullStreamTask(data: CreateLivePullStreamTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateLivePullStreamTaskResponse>;
  /** {@link CreateLiveRecord 创建录制任务(已废弃,请使用新接口)}({@link CreateLiveRecordRequest 请求参数}): {@link CreateLiveRecordResponse 返回参数} */
  CreateLiveRecord(data: CreateLiveRecordRequest, config?: AxiosRequestConfig): AxiosPromise<CreateLiveRecordResponse>;
  /** {@link CreateLiveRecordRule 创建录制规则}({@link CreateLiveRecordRuleRequest 请求参数}): {@link CreateLiveRecordRuleResponse 返回参数} */
  CreateLiveRecordRule(data: CreateLiveRecordRuleRequest, config?: AxiosRequestConfig): AxiosPromise<CreateLiveRecordRuleResponse>;
  /** {@link CreateLiveRecordTemplate 直播创建录制模板}({@link CreateLiveRecordTemplateRequest 请求参数}): {@link CreateLiveRecordTemplateResponse 返回参数} */
  CreateLiveRecordTemplate(data: CreateLiveRecordTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<CreateLiveRecordTemplateResponse>;
  /** {@link CreateLiveSnapshotRule 创建截图规则}({@link CreateLiveSnapshotRuleRequest 请求参数}): {@link CreateLiveSnapshotRuleResponse 返回参数} */
  CreateLiveSnapshotRule(data: CreateLiveSnapshotRuleRequest, config?: AxiosRequestConfig): AxiosPromise<CreateLiveSnapshotRuleResponse>;
  /** {@link CreateLiveSnapshotTemplate 创建截图模板}({@link CreateLiveSnapshotTemplateRequest 请求参数}): {@link CreateLiveSnapshotTemplateResponse 返回参数} */
  CreateLiveSnapshotTemplate(data: CreateLiveSnapshotTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<CreateLiveSnapshotTemplateResponse>;
  /** {@link CreateLiveTranscodeRule 创建转码规则}({@link CreateLiveTranscodeRuleRequest 请求参数}): {@link CreateLiveTranscodeRuleResponse 返回参数} */
  CreateLiveTranscodeRule(data: CreateLiveTranscodeRuleRequest, config?: AxiosRequestConfig): AxiosPromise<CreateLiveTranscodeRuleResponse>;
  /** {@link CreateLiveTranscodeTemplate 创建转码模板}({@link CreateLiveTranscodeTemplateRequest 请求参数}): {@link CreateLiveTranscodeTemplateResponse 返回参数} */
  CreateLiveTranscodeTemplate(data: CreateLiveTranscodeTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<CreateLiveTranscodeTemplateResponse>;
  /** {@link CreateLiveWatermarkRule 创建水印规则}({@link CreateLiveWatermarkRuleRequest 请求参数}): {@link CreateLiveWatermarkRuleResponse 返回参数} */
  CreateLiveWatermarkRule(data: CreateLiveWatermarkRuleRequest, config?: AxiosRequestConfig): AxiosPromise<CreateLiveWatermarkRuleResponse>;
  /** {@link CreatePullStreamConfig 添加拉流配置(该接口已下线,请使用新接口 CreateLivePullStreamTask)}({@link CreatePullStreamConfigRequest 请求参数}): {@link CreatePullStreamConfigResponse 返回参数} */
  CreatePullStreamConfig(data: CreatePullStreamConfigRequest, config?: AxiosRequestConfig): AxiosPromise<CreatePullStreamConfigResponse>;
  /** {@link CreateRecordTask 创建录制任务（新）}({@link CreateRecordTaskRequest 请求参数}): {@link CreateRecordTaskResponse 返回参数} */
  CreateRecordTask(data: CreateRecordTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateRecordTaskResponse>;
  /** {@link CreateScreenshotTask 创建截图任务}({@link CreateScreenshotTaskRequest 请求参数}): {@link CreateScreenshotTaskResponse 返回参数} */
  CreateScreenshotTask(data: CreateScreenshotTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateScreenshotTaskResponse>;
  /** {@link DeleteLiveCallbackRule 删除回调规则}({@link DeleteLiveCallbackRuleRequest 请求参数}): {@link DeleteLiveCallbackRuleResponse 返回参数} */
  DeleteLiveCallbackRule(data: DeleteLiveCallbackRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteLiveCallbackRuleResponse>;
  /** {@link DeleteLiveCallbackTemplate 删除回调模板}({@link DeleteLiveCallbackTemplateRequest 请求参数}): {@link DeleteLiveCallbackTemplateResponse 返回参数} */
  DeleteLiveCallbackTemplate(data: DeleteLiveCallbackTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteLiveCallbackTemplateResponse>;
  /** {@link DeleteLiveDomain 删除域名}({@link DeleteLiveDomainRequest 请求参数}): {@link DeleteLiveDomainResponse 返回参数} */
  DeleteLiveDomain(data: DeleteLiveDomainRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteLiveDomainResponse>;
  /** {@link DeleteLivePullStreamTask 删除直播拉流任务}({@link DeleteLivePullStreamTaskRequest 请求参数}): {@link DeleteLivePullStreamTaskResponse 返回参数} */
  DeleteLivePullStreamTask(data: DeleteLivePullStreamTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteLivePullStreamTaskResponse>;
  /** {@link DeleteLiveRecord 删除录制任务(已废弃,请使用新接口)}({@link DeleteLiveRecordRequest 请求参数}): {@link DeleteLiveRecordResponse 返回参数} */
  DeleteLiveRecord(data: DeleteLiveRecordRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteLiveRecordResponse>;
  /** {@link DeleteLiveRecordRule 删除录制规则}({@link DeleteLiveRecordRuleRequest 请求参数}): {@link DeleteLiveRecordRuleResponse 返回参数} */
  DeleteLiveRecordRule(data: DeleteLiveRecordRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteLiveRecordRuleResponse>;
  /** {@link DeleteLiveRecordTemplate 删除录制模板}({@link DeleteLiveRecordTemplateRequest 请求参数}): {@link DeleteLiveRecordTemplateResponse 返回参数} */
  DeleteLiveRecordTemplate(data: DeleteLiveRecordTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteLiveRecordTemplateResponse>;
  /** {@link DeleteLiveSnapshotRule 删除截图规则}({@link DeleteLiveSnapshotRuleRequest 请求参数}): {@link DeleteLiveSnapshotRuleResponse 返回参数} */
  DeleteLiveSnapshotRule(data: DeleteLiveSnapshotRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteLiveSnapshotRuleResponse>;
  /** {@link DeleteLiveSnapshotTemplate 删除截图模板}({@link DeleteLiveSnapshotTemplateRequest 请求参数}): {@link DeleteLiveSnapshotTemplateResponse 返回参数} */
  DeleteLiveSnapshotTemplate(data: DeleteLiveSnapshotTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteLiveSnapshotTemplateResponse>;
  /** {@link DeleteLiveTranscodeRule 删除转码规则}({@link DeleteLiveTranscodeRuleRequest 请求参数}): {@link DeleteLiveTranscodeRuleResponse 返回参数} */
  DeleteLiveTranscodeRule(data: DeleteLiveTranscodeRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteLiveTranscodeRuleResponse>;
  /** {@link DeleteLiveTranscodeTemplate 删除转码模板}({@link DeleteLiveTranscodeTemplateRequest 请求参数}): {@link DeleteLiveTranscodeTemplateResponse 返回参数} */
  DeleteLiveTranscodeTemplate(data: DeleteLiveTranscodeTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteLiveTranscodeTemplateResponse>;
  /** {@link DeleteLiveWatermark 删除水印}({@link DeleteLiveWatermarkRequest 请求参数}): {@link DeleteLiveWatermarkResponse 返回参数} */
  DeleteLiveWatermark(data: DeleteLiveWatermarkRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteLiveWatermarkResponse>;
  /** {@link DeleteLiveWatermarkRule 删除水印规则}({@link DeleteLiveWatermarkRuleRequest 请求参数}): {@link DeleteLiveWatermarkRuleResponse 返回参数} */
  DeleteLiveWatermarkRule(data: DeleteLiveWatermarkRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteLiveWatermarkRuleResponse>;
  /** {@link DeletePullStreamConfig 删除拉流配置(该接口已下线,请使用新接口 DeleteLivePullStreamTask)}({@link DeletePullStreamConfigRequest 请求参数}): {@link DeletePullStreamConfigResponse 返回参数} */
  DeletePullStreamConfig(data: DeletePullStreamConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DeletePullStreamConfigResponse>;
  /** {@link DeleteRecordTask 删除录制任务（新）}({@link DeleteRecordTaskRequest 请求参数}): {@link DeleteRecordTaskResponse 返回参数} */
  DeleteRecordTask(data: DeleteRecordTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRecordTaskResponse>;
  /** {@link DeleteScreenshotTask 删除截图任务}({@link DeleteScreenshotTaskRequest 请求参数}): {@link DeleteScreenshotTaskResponse 返回参数} */
  DeleteScreenshotTask(data: DeleteScreenshotTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteScreenshotTaskResponse>;
  /** {@link DescribeAllStreamPlayInfoList 查询某个时间点所有流的下行播放数据}({@link DescribeAllStreamPlayInfoListRequest 请求参数}): {@link DescribeAllStreamPlayInfoListResponse 返回参数} */
  DescribeAllStreamPlayInfoList(data: DescribeAllStreamPlayInfoListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAllStreamPlayInfoListResponse>;
  /** {@link DescribeAreaBillBandwidthAndFluxList 海外分区直播播放带宽和流量数据查询}({@link DescribeAreaBillBandwidthAndFluxListRequest 请求参数}): {@link DescribeAreaBillBandwidthAndFluxListResponse 返回参数} */
  DescribeAreaBillBandwidthAndFluxList(data: DescribeAreaBillBandwidthAndFluxListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAreaBillBandwidthAndFluxListResponse>;
  /** {@link DescribeBillBandwidthAndFluxList 直播播放带宽和流量数据查询}({@link DescribeBillBandwidthAndFluxListRequest 请求参数}): {@link DescribeBillBandwidthAndFluxListResponse 返回参数} */
  DescribeBillBandwidthAndFluxList(data: DescribeBillBandwidthAndFluxListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBillBandwidthAndFluxListResponse>;
  /** {@link DescribeCallbackRecordsList 回调事件查询}({@link DescribeCallbackRecordsListRequest 请求参数}): {@link DescribeCallbackRecordsListResponse 返回参数} */
  DescribeCallbackRecordsList(data: DescribeCallbackRecordsListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCallbackRecordsListResponse>;
  /** {@link DescribeConcurrentRecordStreamNum 查询并发录制路数}({@link DescribeConcurrentRecordStreamNumRequest 请求参数}): {@link DescribeConcurrentRecordStreamNumResponse 返回参数} */
  DescribeConcurrentRecordStreamNum(data: DescribeConcurrentRecordStreamNumRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeConcurrentRecordStreamNumResponse>;
  /** {@link DescribeDeliverBandwidthList 查询直播转推计费带宽}({@link DescribeDeliverBandwidthListRequest 请求参数}): {@link DescribeDeliverBandwidthListResponse 返回参数} */
  DescribeDeliverBandwidthList(data: DescribeDeliverBandwidthListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDeliverBandwidthListResponse>;
  /** {@link DescribeGroupProIspPlayInfoList 查询按省份和运营商分组的播放数据}({@link DescribeGroupProIspPlayInfoListRequest 请求参数}): {@link DescribeGroupProIspPlayInfoListResponse 返回参数} */
  DescribeGroupProIspPlayInfoList(data: DescribeGroupProIspPlayInfoListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeGroupProIspPlayInfoListResponse>;
  /** {@link DescribeHttpStatusInfoList 查询播放http状态码明细数据}({@link DescribeHttpStatusInfoListRequest 请求参数}): {@link DescribeHttpStatusInfoListResponse 返回参数} */
  DescribeHttpStatusInfoList(data: DescribeHttpStatusInfoListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeHttpStatusInfoListResponse>;
  /** {@link DescribeLiveCallbackRules 获取回调规则列表}({@link DescribeLiveCallbackRulesRequest 请求参数}): {@link DescribeLiveCallbackRulesResponse 返回参数} */
  DescribeLiveCallbackRules(data?: DescribeLiveCallbackRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLiveCallbackRulesResponse>;
  /** {@link DescribeLiveCallbackTemplate 获取单个回调模板}({@link DescribeLiveCallbackTemplateRequest 请求参数}): {@link DescribeLiveCallbackTemplateResponse 返回参数} */
  DescribeLiveCallbackTemplate(data: DescribeLiveCallbackTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLiveCallbackTemplateResponse>;
  /** {@link DescribeLiveCallbackTemplates 获取回调模板列表}({@link DescribeLiveCallbackTemplatesRequest 请求参数}): {@link DescribeLiveCallbackTemplatesResponse 返回参数} */
  DescribeLiveCallbackTemplates(data?: DescribeLiveCallbackTemplatesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLiveCallbackTemplatesResponse>;
  /** {@link DescribeLiveCert 获取证书信息}({@link DescribeLiveCertRequest 请求参数}): {@link DescribeLiveCertResponse 返回参数} */
  DescribeLiveCert(data: DescribeLiveCertRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLiveCertResponse>;
  /** {@link DescribeLiveCerts 获取证书信息列表}({@link DescribeLiveCertsRequest 请求参数}): {@link DescribeLiveCertsResponse 返回参数} */
  DescribeLiveCerts(data?: DescribeLiveCertsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLiveCertsResponse>;
  /** {@link DescribeLiveDelayInfoList 获取直播延播列表}({@link DescribeLiveDelayInfoListRequest 请求参数}): {@link DescribeLiveDelayInfoListResponse 返回参数} */
  DescribeLiveDelayInfoList(data?: DescribeLiveDelayInfoListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLiveDelayInfoListResponse>;
  /** {@link DescribeLiveDomain 查询域名信息}({@link DescribeLiveDomainRequest 请求参数}): {@link DescribeLiveDomainResponse 返回参数} */
  DescribeLiveDomain(data: DescribeLiveDomainRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLiveDomainResponse>;
  /** {@link DescribeLiveDomainCert 获取域名证书信息}({@link DescribeLiveDomainCertRequest 请求参数}): {@link DescribeLiveDomainCertResponse 返回参数} */
  DescribeLiveDomainCert(data: DescribeLiveDomainCertRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLiveDomainCertResponse>;
  /** {@link DescribeLiveDomainCertBindings 查询绑定证书的域名列表}({@link DescribeLiveDomainCertBindingsRequest 请求参数}): {@link DescribeLiveDomainCertBindingsResponse 返回参数} */
  DescribeLiveDomainCertBindings(data?: DescribeLiveDomainCertBindingsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLiveDomainCertBindingsResponse>;
  /** {@link DescribeLiveDomainPlayInfoList 查询实时的域名维度下行播放数据}({@link DescribeLiveDomainPlayInfoListRequest 请求参数}): {@link DescribeLiveDomainPlayInfoListResponse 返回参数} */
  DescribeLiveDomainPlayInfoList(data?: DescribeLiveDomainPlayInfoListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLiveDomainPlayInfoListResponse>;
  /** {@link DescribeLiveDomainReferer 查询直播域名 Referer 黑白名单配置}({@link DescribeLiveDomainRefererRequest 请求参数}): {@link DescribeLiveDomainRefererResponse 返回参数} */
  DescribeLiveDomainReferer(data: DescribeLiveDomainRefererRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLiveDomainRefererResponse>;
  /** {@link DescribeLiveDomains 查询域名列表}({@link DescribeLiveDomainsRequest 请求参数}): {@link DescribeLiveDomainsResponse 返回参数} */
  DescribeLiveDomains(data?: DescribeLiveDomainsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLiveDomainsResponse>;
  /** {@link DescribeLiveForbidStreamList 获取禁推流列表}({@link DescribeLiveForbidStreamListRequest 请求参数}): {@link DescribeLiveForbidStreamListResponse 返回参数} */
  DescribeLiveForbidStreamList(data?: DescribeLiveForbidStreamListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLiveForbidStreamListResponse>;
  /** {@link DescribeLivePackageInfo 查询直播套餐包信息}({@link DescribeLivePackageInfoRequest 请求参数}): {@link DescribeLivePackageInfoResponse 返回参数} */
  DescribeLivePackageInfo(data: DescribeLivePackageInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLivePackageInfoResponse>;
  /** {@link DescribeLivePlayAuthKey 查询播放鉴权key}({@link DescribeLivePlayAuthKeyRequest 请求参数}): {@link DescribeLivePlayAuthKeyResponse 返回参数} */
  DescribeLivePlayAuthKey(data: DescribeLivePlayAuthKeyRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLivePlayAuthKeyResponse>;
  /** {@link DescribeLivePullStreamTasks 查询直播拉流任务}({@link DescribeLivePullStreamTasksRequest 请求参数}): {@link DescribeLivePullStreamTasksResponse 返回参数} */
  DescribeLivePullStreamTasks(data?: DescribeLivePullStreamTasksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLivePullStreamTasksResponse>;
  /** {@link DescribeLivePushAuthKey 查询推流鉴权key}({@link DescribeLivePushAuthKeyRequest 请求参数}): {@link DescribeLivePushAuthKeyResponse 返回参数} */
  DescribeLivePushAuthKey(data: DescribeLivePushAuthKeyRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLivePushAuthKeyResponse>;
  /** {@link DescribeLiveRecordRules 获取录制规则列表}({@link DescribeLiveRecordRulesRequest 请求参数}): {@link DescribeLiveRecordRulesResponse 返回参数} */
  DescribeLiveRecordRules(data?: DescribeLiveRecordRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLiveRecordRulesResponse>;
  /** {@link DescribeLiveRecordTemplate 获取单个录制模板}({@link DescribeLiveRecordTemplateRequest 请求参数}): {@link DescribeLiveRecordTemplateResponse 返回参数} */
  DescribeLiveRecordTemplate(data: DescribeLiveRecordTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLiveRecordTemplateResponse>;
  /** {@link DescribeLiveRecordTemplates 获取录制模板列表}({@link DescribeLiveRecordTemplatesRequest 请求参数}): {@link DescribeLiveRecordTemplatesResponse 返回参数} */
  DescribeLiveRecordTemplates(data?: DescribeLiveRecordTemplatesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLiveRecordTemplatesResponse>;
  /** {@link DescribeLiveSnapshotRules 获取截图规则列表}({@link DescribeLiveSnapshotRulesRequest 请求参数}): {@link DescribeLiveSnapshotRulesResponse 返回参数} */
  DescribeLiveSnapshotRules(data?: DescribeLiveSnapshotRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLiveSnapshotRulesResponse>;
  /** {@link DescribeLiveSnapshotTemplate 获取单个截图模板}({@link DescribeLiveSnapshotTemplateRequest 请求参数}): {@link DescribeLiveSnapshotTemplateResponse 返回参数} */
  DescribeLiveSnapshotTemplate(data: DescribeLiveSnapshotTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLiveSnapshotTemplateResponse>;
  /** {@link DescribeLiveSnapshotTemplates 获取截图模板列表}({@link DescribeLiveSnapshotTemplatesRequest 请求参数}): {@link DescribeLiveSnapshotTemplatesResponse 返回参数} */
  DescribeLiveSnapshotTemplates(data?: DescribeLiveSnapshotTemplatesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLiveSnapshotTemplatesResponse>;
  /** {@link DescribeLiveStreamEventList 查询推断流事件}({@link DescribeLiveStreamEventListRequest 请求参数}): {@link DescribeLiveStreamEventListResponse 返回参数} */
  DescribeLiveStreamEventList(data: DescribeLiveStreamEventListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLiveStreamEventListResponse>;
  /** {@link DescribeLiveStreamOnlineList 查询直播中的流}({@link DescribeLiveStreamOnlineListRequest 请求参数}): {@link DescribeLiveStreamOnlineListResponse 返回参数} */
  DescribeLiveStreamOnlineList(data?: DescribeLiveStreamOnlineListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLiveStreamOnlineListResponse>;
  /** {@link DescribeLiveStreamPublishedList 查询历史流列表}({@link DescribeLiveStreamPublishedListRequest 请求参数}): {@link DescribeLiveStreamPublishedListResponse 返回参数} */
  DescribeLiveStreamPublishedList(data: DescribeLiveStreamPublishedListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLiveStreamPublishedListResponse>;
  /** {@link DescribeLiveStreamPushInfoList 获取在线流的推流数据}({@link DescribeLiveStreamPushInfoListRequest 请求参数}): {@link DescribeLiveStreamPushInfoListResponse 返回参数} */
  DescribeLiveStreamPushInfoList(data?: DescribeLiveStreamPushInfoListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLiveStreamPushInfoListResponse>;
  /** {@link DescribeLiveStreamState 查询流状态}({@link DescribeLiveStreamStateRequest 请求参数}): {@link DescribeLiveStreamStateResponse 返回参数} */
  DescribeLiveStreamState(data: DescribeLiveStreamStateRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLiveStreamStateResponse>;
  /** {@link DescribeLiveTimeShiftBillInfoList 直播时移计费信息查询}({@link DescribeLiveTimeShiftBillInfoListRequest 请求参数}): {@link DescribeLiveTimeShiftBillInfoListResponse 返回参数} */
  DescribeLiveTimeShiftBillInfoList(data: DescribeLiveTimeShiftBillInfoListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLiveTimeShiftBillInfoListResponse>;
  /** {@link DescribeLiveTranscodeDetailInfo 查询直播转码统计信息}({@link DescribeLiveTranscodeDetailInfoRequest 请求参数}): {@link DescribeLiveTranscodeDetailInfoResponse 返回参数} */
  DescribeLiveTranscodeDetailInfo(data?: DescribeLiveTranscodeDetailInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLiveTranscodeDetailInfoResponse>;
  /** {@link DescribeLiveTranscodeRules 获取转码规则列表}({@link DescribeLiveTranscodeRulesRequest 请求参数}): {@link DescribeLiveTranscodeRulesResponse 返回参数} */
  DescribeLiveTranscodeRules(data?: DescribeLiveTranscodeRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLiveTranscodeRulesResponse>;
  /** {@link DescribeLiveTranscodeTemplate 获取单个转码模板}({@link DescribeLiveTranscodeTemplateRequest 请求参数}): {@link DescribeLiveTranscodeTemplateResponse 返回参数} */
  DescribeLiveTranscodeTemplate(data: DescribeLiveTranscodeTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLiveTranscodeTemplateResponse>;
  /** {@link DescribeLiveTranscodeTemplates 获取转码模板列表}({@link DescribeLiveTranscodeTemplatesRequest 请求参数}): {@link DescribeLiveTranscodeTemplatesResponse 返回参数} */
  DescribeLiveTranscodeTemplates(data?: DescribeLiveTranscodeTemplatesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLiveTranscodeTemplatesResponse>;
  /** {@link DescribeLiveTranscodeTotalInfo 查询转码总量数据}({@link DescribeLiveTranscodeTotalInfoRequest 请求参数}): {@link DescribeLiveTranscodeTotalInfoResponse 返回参数} */
  DescribeLiveTranscodeTotalInfo(data: DescribeLiveTranscodeTotalInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLiveTranscodeTotalInfoResponse>;
  /** {@link DescribeLiveWatermark 获取单个水印}({@link DescribeLiveWatermarkRequest 请求参数}): {@link DescribeLiveWatermarkResponse 返回参数} */
  DescribeLiveWatermark(data: DescribeLiveWatermarkRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLiveWatermarkResponse>;
  /** {@link DescribeLiveWatermarkRules 获取水印规则列表}({@link DescribeLiveWatermarkRulesRequest 请求参数}): {@link DescribeLiveWatermarkRulesResponse 返回参数} */
  DescribeLiveWatermarkRules(data?: DescribeLiveWatermarkRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLiveWatermarkRulesResponse>;
  /** {@link DescribeLiveWatermarks 查询水印列表}({@link DescribeLiveWatermarksRequest 请求参数}): {@link DescribeLiveWatermarksResponse 返回参数} */
  DescribeLiveWatermarks(data?: DescribeLiveWatermarksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLiveWatermarksResponse>;
  /** {@link DescribeLogDownloadList 批量获取日志URL}({@link DescribeLogDownloadListRequest 请求参数}): {@link DescribeLogDownloadListResponse 返回参数} */
  DescribeLogDownloadList(data: DescribeLogDownloadListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLogDownloadListResponse>;
  /** {@link DescribePlayErrorCodeDetailInfoList 查询播放http错误码实时数据}({@link DescribePlayErrorCodeDetailInfoListRequest 请求参数}): {@link DescribePlayErrorCodeDetailInfoListResponse 返回参数} */
  DescribePlayErrorCodeDetailInfoList(data: DescribePlayErrorCodeDetailInfoListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePlayErrorCodeDetailInfoListResponse>;
  /** {@link DescribePlayErrorCodeSumInfoList 查询播放http错误码汇总数据}({@link DescribePlayErrorCodeSumInfoListRequest 请求参数}): {@link DescribePlayErrorCodeSumInfoListResponse 返回参数} */
  DescribePlayErrorCodeSumInfoList(data: DescribePlayErrorCodeSumInfoListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePlayErrorCodeSumInfoListResponse>;
  /** {@link DescribeProIspPlaySumInfoList 查询分省份分运营商播放汇总数据}({@link DescribeProIspPlaySumInfoListRequest 请求参数}): {@link DescribeProIspPlaySumInfoListResponse 返回参数} */
  DescribeProIspPlaySumInfoList(data: DescribeProIspPlaySumInfoListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProIspPlaySumInfoListResponse>;
  /** {@link DescribeProvinceIspPlayInfoList 按省份运营商查询播放信息}({@link DescribeProvinceIspPlayInfoListRequest 请求参数}): {@link DescribeProvinceIspPlayInfoListResponse 返回参数} */
  DescribeProvinceIspPlayInfoList(data: DescribeProvinceIspPlayInfoListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProvinceIspPlayInfoListResponse>;
  /** {@link DescribePullStreamConfigs 查询拉流配置(该接口已下线,请使用新接口 DescribeLivePullStreamTasks)}({@link DescribePullStreamConfigsRequest 请求参数}): {@link DescribePullStreamConfigsResponse 返回参数} */
  DescribePullStreamConfigs(data?: DescribePullStreamConfigsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePullStreamConfigsResponse>;
  /** {@link DescribePushBandwidthAndFluxList 直播推流带宽和流量数据查询}({@link DescribePushBandwidthAndFluxListRequest 请求参数}): {@link DescribePushBandwidthAndFluxListResponse 返回参数} */
  DescribePushBandwidthAndFluxList(data: DescribePushBandwidthAndFluxListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePushBandwidthAndFluxListResponse>;
  /** {@link DescribeRecordTask 查询录制任务列表（新）}({@link DescribeRecordTaskRequest 请求参数}): {@link DescribeRecordTaskResponse 返回参数} */
  DescribeRecordTask(data: DescribeRecordTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRecordTaskResponse>;
  /** {@link DescribeScreenShotSheetNumList 查询截图张数}({@link DescribeScreenShotSheetNumListRequest 请求参数}): {@link DescribeScreenShotSheetNumListResponse 返回参数} */
  DescribeScreenShotSheetNumList(data: DescribeScreenShotSheetNumListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeScreenShotSheetNumListResponse>;
  /** {@link DescribeScreenshotTask 查询截图任务列表}({@link DescribeScreenshotTaskRequest 请求参数}): {@link DescribeScreenshotTaskResponse 返回参数} */
  DescribeScreenshotTask(data: DescribeScreenshotTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeScreenshotTaskResponse>;
  /** {@link DescribeStreamDayPlayInfoList 查询所有流的流量数据}({@link DescribeStreamDayPlayInfoListRequest 请求参数}): {@link DescribeStreamDayPlayInfoListResponse 返回参数} */
  DescribeStreamDayPlayInfoList(data: DescribeStreamDayPlayInfoListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeStreamDayPlayInfoListResponse>;
  /** {@link DescribeStreamPlayInfoList 查询流的播放信息列表}({@link DescribeStreamPlayInfoListRequest 请求参数}): {@link DescribeStreamPlayInfoListResponse 返回参数} */
  DescribeStreamPlayInfoList(data: DescribeStreamPlayInfoListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeStreamPlayInfoListResponse>;
  /** {@link DescribeStreamPushInfoList 查询某条流上行推流质量数据}({@link DescribeStreamPushInfoListRequest 请求参数}): {@link DescribeStreamPushInfoListResponse 返回参数} */
  DescribeStreamPushInfoList(data: DescribeStreamPushInfoListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeStreamPushInfoListResponse>;
  /** {@link DescribeTopClientIpSumInfoList 查询某段时间top n客户端ip汇总信息}({@link DescribeTopClientIpSumInfoListRequest 请求参数}): {@link DescribeTopClientIpSumInfoListResponse 返回参数} */
  DescribeTopClientIpSumInfoList(data: DescribeTopClientIpSumInfoListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTopClientIpSumInfoListResponse>;
  /** {@link DescribeTranscodeTaskNum 查询转码任务数。}({@link DescribeTranscodeTaskNumRequest 请求参数}): {@link DescribeTranscodeTaskNumResponse 返回参数} */
  DescribeTranscodeTaskNum(data: DescribeTranscodeTaskNumRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTranscodeTaskNumResponse>;
  /** {@link DescribeUploadStreamNums 直播上行路数查询}({@link DescribeUploadStreamNumsRequest 请求参数}): {@link DescribeUploadStreamNumsResponse 返回参数} */
  DescribeUploadStreamNums(data: DescribeUploadStreamNumsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUploadStreamNumsResponse>;
  /** {@link DescribeVisitTopSumInfoList 查询某时间段top n的域名或流id信息}({@link DescribeVisitTopSumInfoListRequest 请求参数}): {@link DescribeVisitTopSumInfoListResponse 返回参数} */
  DescribeVisitTopSumInfoList(data: DescribeVisitTopSumInfoListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVisitTopSumInfoListResponse>;
  /** {@link DropLiveStream 断开直播推流}({@link DropLiveStreamRequest 请求参数}): {@link DropLiveStreamResponse 返回参数} */
  DropLiveStream(data: DropLiveStreamRequest, config?: AxiosRequestConfig): AxiosPromise<DropLiveStreamResponse>;
  /** {@link EnableLiveDomain 启用域名}({@link EnableLiveDomainRequest 请求参数}): {@link EnableLiveDomainResponse 返回参数} */
  EnableLiveDomain(data: EnableLiveDomainRequest, config?: AxiosRequestConfig): AxiosPromise<EnableLiveDomainResponse>;
  /** {@link ForbidLiveDomain 禁用域名}({@link ForbidLiveDomainRequest 请求参数}): {@link ForbidLiveDomainResponse 返回参数} */
  ForbidLiveDomain(data: ForbidLiveDomainRequest, config?: AxiosRequestConfig): AxiosPromise<ForbidLiveDomainResponse>;
  /** {@link ForbidLiveStream 禁推直播流}({@link ForbidLiveStreamRequest 请求参数}): {@link ForbidLiveStreamResponse 返回参数} */
  ForbidLiveStream(data: ForbidLiveStreamRequest, config?: AxiosRequestConfig): AxiosPromise<ForbidLiveStreamResponse>;
  /** {@link ModifyLiveCallbackTemplate 修改回调模板}({@link ModifyLiveCallbackTemplateRequest 请求参数}): {@link ModifyLiveCallbackTemplateResponse 返回参数} */
  ModifyLiveCallbackTemplate(data: ModifyLiveCallbackTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyLiveCallbackTemplateResponse>;
  /** {@link ModifyLiveDomainCertBindings 批量绑定证书对应的播放域名}({@link ModifyLiveDomainCertBindingsRequest 请求参数}): {@link ModifyLiveDomainCertBindingsResponse 返回参数} */
  ModifyLiveDomainCertBindings(data: ModifyLiveDomainCertBindingsRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyLiveDomainCertBindingsResponse>;
  /** {@link ModifyLiveDomainReferer 设置直播域名 Referer 黑白名单}({@link ModifyLiveDomainRefererRequest 请求参数}): {@link ModifyLiveDomainRefererResponse 返回参数} */
  ModifyLiveDomainReferer(data: ModifyLiveDomainRefererRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyLiveDomainRefererResponse>;
  /** {@link ModifyLivePlayAuthKey 修改播放鉴权key}({@link ModifyLivePlayAuthKeyRequest 请求参数}): {@link ModifyLivePlayAuthKeyResponse 返回参数} */
  ModifyLivePlayAuthKey(data: ModifyLivePlayAuthKeyRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyLivePlayAuthKeyResponse>;
  /** {@link ModifyLivePlayDomain 修改播放域名信息}({@link ModifyLivePlayDomainRequest 请求参数}): {@link ModifyLivePlayDomainResponse 返回参数} */
  ModifyLivePlayDomain(data: ModifyLivePlayDomainRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyLivePlayDomainResponse>;
  /** {@link ModifyLivePullStreamTask 更新直播拉流任务}({@link ModifyLivePullStreamTaskRequest 请求参数}): {@link ModifyLivePullStreamTaskResponse 返回参数} */
  ModifyLivePullStreamTask(data: ModifyLivePullStreamTaskRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyLivePullStreamTaskResponse>;
  /** {@link ModifyLivePushAuthKey 修改推流鉴权key}({@link ModifyLivePushAuthKeyRequest 请求参数}): {@link ModifyLivePushAuthKeyResponse 返回参数} */
  ModifyLivePushAuthKey(data: ModifyLivePushAuthKeyRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyLivePushAuthKeyResponse>;
  /** {@link ModifyLiveRecordTemplate 直播修改录制模板配置}({@link ModifyLiveRecordTemplateRequest 请求参数}): {@link ModifyLiveRecordTemplateResponse 返回参数} */
  ModifyLiveRecordTemplate(data: ModifyLiveRecordTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyLiveRecordTemplateResponse>;
  /** {@link ModifyLiveSnapshotTemplate 修改截图模板}({@link ModifyLiveSnapshotTemplateRequest 请求参数}): {@link ModifyLiveSnapshotTemplateResponse 返回参数} */
  ModifyLiveSnapshotTemplate(data: ModifyLiveSnapshotTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyLiveSnapshotTemplateResponse>;
  /** {@link ModifyLiveTranscodeTemplate 修改转码模板配置}({@link ModifyLiveTranscodeTemplateRequest 请求参数}): {@link ModifyLiveTranscodeTemplateResponse 返回参数} */
  ModifyLiveTranscodeTemplate(data: ModifyLiveTranscodeTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyLiveTranscodeTemplateResponse>;
  /** {@link ModifyPullStreamConfig 更新拉流配置(该接口已下线,请使用新接口 ModifyLivePullStreamTask)}({@link ModifyPullStreamConfigRequest 请求参数}): {@link ModifyPullStreamConfigResponse 返回参数} */
  ModifyPullStreamConfig(data: ModifyPullStreamConfigRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyPullStreamConfigResponse>;
  /** {@link ModifyPullStreamStatus 修改拉流配置状态(该接口已下线,请使用新接口 ModifyLivePullStreamTask)}({@link ModifyPullStreamStatusRequest 请求参数}): {@link ModifyPullStreamStatusResponse 返回参数} */
  ModifyPullStreamStatus(data: ModifyPullStreamStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyPullStreamStatusResponse>;
  /** {@link ResumeDelayLiveStream 取消直播延时}({@link ResumeDelayLiveStreamRequest 请求参数}): {@link ResumeDelayLiveStreamResponse 返回参数} */
  ResumeDelayLiveStream(data: ResumeDelayLiveStreamRequest, config?: AxiosRequestConfig): AxiosPromise<ResumeDelayLiveStreamResponse>;
  /** {@link ResumeLiveStream 恢复直播推流}({@link ResumeLiveStreamRequest 请求参数}): {@link ResumeLiveStreamResponse 返回参数} */
  ResumeLiveStream(data: ResumeLiveStreamRequest, config?: AxiosRequestConfig): AxiosPromise<ResumeLiveStreamResponse>;
  /** {@link StopLiveRecord 终止录制任务(已废弃,请使用新接口)}({@link StopLiveRecordRequest 请求参数}): {@link StopLiveRecordResponse 返回参数} */
  StopLiveRecord(data: StopLiveRecordRequest, config?: AxiosRequestConfig): AxiosPromise<StopLiveRecordResponse>;
  /** {@link StopRecordTask 终止录制任务（新）}({@link StopRecordTaskRequest 请求参数}): {@link StopRecordTaskResponse 返回参数} */
  StopRecordTask(data: StopRecordTaskRequest, config?: AxiosRequestConfig): AxiosPromise<StopRecordTaskResponse>;
  /** {@link StopScreenshotTask 终止截图任务}({@link StopScreenshotTaskRequest 请求参数}): {@link StopScreenshotTaskResponse 返回参数} */
  StopScreenshotTask(data: StopScreenshotTaskRequest, config?: AxiosRequestConfig): AxiosPromise<StopScreenshotTaskResponse>;
  /** {@link UnBindLiveDomainCert 解绑域名证书}({@link UnBindLiveDomainCertRequest 请求参数}): {@link UnBindLiveDomainCertResponse 返回参数} */
  UnBindLiveDomainCert(data: UnBindLiveDomainCertRequest, config?: AxiosRequestConfig): AxiosPromise<UnBindLiveDomainCertResponse>;
  /** {@link UpdateLiveWatermark 更新水印}({@link UpdateLiveWatermarkRequest 请求参数}): {@link UpdateLiveWatermarkResponse 返回参数} */
  UpdateLiveWatermark(data: UpdateLiveWatermarkRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateLiveWatermarkResponse>;
}

export declare type Versions = ["2018-08-01"];

export default Live;