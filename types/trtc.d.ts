/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 造成异常体验可能的异常事件类型 */
declare interface AbnormalEvent {
  /** 异常事件ID，具体值查看附录：异常体验ID映射表：https://cloud.tencent.com/document/product/647/44916 */
  AbnormalEventId: number;
  /** 远端用户ID,""：表示异常事件不是由远端用户产生 */
  PeerId: string | null;
}

/** 用户的异常体验及可能的原因 */
declare interface AbnormalExperience {
  /** 用户ID */
  UserId: string;
  /** 异常体验ID */
  ExperienceId: number;
  /** 字符串房间号 */
  RoomId: string;
  /** 异常事件数组 */
  AbnormalEventList: AbnormalEvent[];
  /** 异常事件的上报时间 */
  EventTime: number;
}

/** 机器人参数 */
declare interface AgentConfig {
  /** 机器人的UserId，用于进房发起任务。【注意】这个UserId不能与当前房间内的主播观众[UserId](https://cloud.tencent.com/document/product/647/46351)重复。如果一个房间发起多个任务时，机器人的UserId也不能相互重复，否则会中断前一个任务。需要保证机器人UserId在房间内唯一。 */
  UserId: string;
  /** 机器人UserId对应的校验签名，即UserId和UserSig相当于机器人进房的登录密码，具体计算方法请参考TRTC计算[UserSig](https://cloud.tencent.com/document/product/647/45910)的方案。 */
  UserSig: string;
  /** 机器人拉流的UserId, 填写后，机器人会拉取该UserId的流进行实时处理 */
  TargetUserId: string;
  /** 房间内超过MaxIdleTime 没有推流，后台自动关闭任务，默认值是60s。 */
  MaxIdleTime?: number;
  /** 机器人的欢迎语 */
  WelcomeMessage?: string;
  /** 智能打断模式，默认为0，0表示服务端自动打断，1表示服务端不打断，由端上发送打断信令进行打断 */
  InterruptMode?: number;
  /** InterruptMode为0时使用，单位为毫秒，默认为500ms。表示服务端检测到持续InterruptSpeechDuration毫秒的人声则进行打断。 */
  InterruptSpeechDuration?: number;
  /** 控制新一轮对话的触发方式，默认为0。- 0表示当服务端语音识别检测出的完整一句话后，自动触发一轮新的对话。- 1表示客户端在收到字幕消息后，自行决定是否手动发送聊天信令触发一轮新的对话。 */
  TurnDetectionMode?: number;
  /** 是否过滤掉用户只说了一个字的句子，true表示过滤，false表示不过滤，默认值为true */
  FilterOneWord?: boolean;
}

/** 转推服务加入TRTC房间的机器人参数。 */
declare interface AgentParams {
  /** 转推服务在TRTC房间使用的[UserId](https://cloud.tencent.com/document/product/647/46351)，注意这个userId不能与其他TRTC或者转推服务等已经使用的UserId重复，建议可以把房间ID作为userId的标识的一部分。 */
  UserId: string;
  /** 转推服务加入TRTC房间的用户签名，当前 UserId 对应的验证签名，相当于登录密码，具体计算方法请参考TRTC计算[UserSig](https://cloud.tencent.com/document/product/647/45910)的方案。 */
  UserSig?: string;
  /** 所有参与混流转推的主播持续离开TRTC房间或切换成观众超过MaxIdleTime的时长，自动停止转推，单位：秒。默认值为 30 秒，该值需大于等于 5秒，且小于等于 86400秒(24小时)。 */
  MaxIdleTime?: number;
}

/** 音频编码参数。 */
declare interface AudioEncode {
  /** 输出流音频采样率。取值为[48000, 44100, 32000, 24000, 16000, 8000]，单位是Hz。 */
  SampleRate: number;
  /** 输出流音频声道数，取值范围[1,2]，1表示混流输出音频为单声道，2表示混流输出音频为双声道。 */
  Channel: number;
  /** 输出流音频码率。取值范围[8,500]，单位为kbps。 */
  BitRate: number;
  /** 输出流音频编码类型，取值范围[0, 1, 2]，0为LC-AAC，1为HE-AAC，2为HE-AACv2。默认值为0。当音频编码设置为HE-AACv2时，只支持输出流音频声道数为双声道。HE-AAC和HE-AACv2支持的输出流音频采样率范围为[48000, 44100, 32000, 24000, 16000]。 */
  Codec?: number;
}

/** 音频转码参数 */
declare interface AudioEncodeParams {
  /** 音频采样率，取值为[48000, 44100]，单位是Hz。 */
  SampleRate?: number;
  /** 音频声道数，取值范围[1,2]，1表示音频为单声道，2表示音频为双声道。 */
  Channel?: number;
  /** 音频码率，取值范围[8,500]，单位为kbps。 */
  BitRate?: number;
  /** 音量，取值范围[0,300]。默认100，表示原始音量；0表示静音。 */
  Volume?: number;
}

/** 录制音频转码参数。 */
declare interface AudioParams {
  /** 音频采样率枚举值:(注意1 代表48000HZ, 2 代表44100HZ, 3 代表16000HZ)1：48000Hz（默认）;2：44100Hz3：16000Hz。 */
  SampleRate: number;
  /** 声道数枚举值:1：单声道;2：双声道（默认）。 */
  Channel: number;
  /** 音频码率: 取值范围[32000, 128000] ，单位bps，默认64000bps。 */
  BitRate: number;
}

/** 审核存储参数 */
declare interface AuditStorageParams {
  /** 腾讯云对象存储COS以及第三方云存储的账号信息 */
  CloudAuditStorage?: CloudAuditStorage;
}

/** 腾讯云对象存储COS以及第三方云存储的账号信息 */
declare interface CloudAuditStorage {
  /** 腾讯云对象存储COS以及第三方云存储账号信息0：腾讯云对象存储 COS1：AWS【注意】目前第三方云存储仅支持AWS，更多第三方云存储陆续支持中示例值：0 */
  Vendor: number;
  /** 腾讯云对象存储的[地域信息]（https://cloud.tencent.com/document/product/436/6224 */
  Region: string;
  /** 云存储桶名称。 */
  Bucket: string;
  /** 云存储的access_key账号信息。若存储至腾讯云对象存储COS，请前往https://console.cloud.tencent.com/cam/capi 查看或创建，对应链接中密钥字段的SecretId值。示例值：test-accesskey */
  AccessKey: string;
  /** 云存储的secret_key账号信息。若存储至腾讯云对象存储COS，请前往https://console.cloud.tencent.com/cam/capi 查看或创建，对应链接中密钥字段的SecretKey值。示例值：test-secretkey */
  SecretKey: string;
  /** 云存储bucket 的指定位置，由字符串数组组成。合法的字符串范围az,AZ,0~9,'_'和'-'，举个例子，录制文件xxx.m3u8在 ["prefix1", "prefix2"]作用下，会变成prefix1/prefix2/TaskId/xxx.m3u8。示例值：["prefix1", "prefix2"] */
  FileNamePrefix?: string[];
}

/** 腾讯云对象存储COS以及第三方云存储的账号信息 */
declare interface CloudStorage {
  /** 腾讯云对象存储COS以及第三方云存储账号信息0：腾讯云对象存储 COS1：AWS【注意】目前第三方云存储仅支持AWS，更多第三方云存储陆续支持中 */
  Vendor: number;
  /** 腾讯云对象存储的[地域信息]（https://cloud.tencent.com/document/product/436/6224 */
  Region: string;
  /** 云存储桶名称。 */
  Bucket: string;
  /** 云存储的access_key账号信息。若存储至腾讯云对象存储COS，请前往https://console.cloud.tencent.com/cam/capi 查看或创建，对应链接中密钥字段的SecretId值。 */
  AccessKey: string;
  /** 云存储的secret_key账号信息。若存储至腾讯云对象存储COS，请前往https://console.cloud.tencent.com/cam/capi 查看或创建，对应链接中密钥字段的SecretKey值。 */
  SecretKey: string;
  /** 云存储bucket 的指定位置，由字符串数组组成。合法的字符串范围az,AZ,0~9,'_'和'-'，举个例子，录制文件xxx.m3u8在 ["prefix1", "prefix2"]作用下，会变成prefix1/prefix2/TaskId/xxx.m3u8。 */
  FileNamePrefix?: string[];
}

/** 点播相关参数。 */
declare interface CloudVod {
  /** 腾讯云点播相关参数。 */
  TencentVod?: TencentVod;
}

/** 渲染移动模式参数，不渲染移动模式时，请勿设置此参数。 */
declare interface EmulateMobileParams {
  /** 移动设备类型，0: 手机1: 平板 */
  MobileDeviceType?: number | null;
  /** 屏幕方向，0: 竖屏，1: 横屏 */
  ScreenOrientation?: number | null;
}

/** MCU混流输出流编码参数 */
declare interface EncodeParams {
  /** 混流-输出流音频采样率。取值为[48000, 44100, 32000, 24000, 16000, 8000]，单位是Hz。混流任务发起过程中，为了保持CDN链接的稳定，不要修改音频参数（codec、采样率、码率、声道数）。 */
  AudioSampleRate: number;
  /** 混流-输出流音频码率。取值范围[8,500]，单位为kbps。混流任务发起过程中，为了保持CDN链接的稳定，不要修改音频参数（codec、采样率、码率、声道数）。 */
  AudioBitrate: number;
  /** 混流-输出流音频声道数，取值范围[1,2]，1表示混流输出音频为单声道，2表示混流输出音频为双声道。混流任务发起过程中，为了保持CDN链接的稳定，不要修改音频参数（codec、采样率、码率、声道数）。 */
  AudioChannels: number;
  /** 混流-输出流宽，音视频输出时必填。取值范围[0,1920]，单位为像素值。 */
  VideoWidth?: number;
  /** 混流-输出流高，音视频输出时必填。取值范围[0,1080]，单位为像素值。 */
  VideoHeight?: number;
  /** 混流-输出流码率，音视频输出时必填。取值范围[1,10000]，单位为kbps。 */
  VideoBitrate?: number;
  /** 混流-输出流帧率，音视频输出时必填。取值范围[1,60]，表示混流的输出帧率可选范围为1到60fps。 */
  VideoFramerate?: number;
  /** 混流-输出流gop，音视频输出时必填。取值范围[1,5]，单位为秒。 */
  VideoGop?: number;
  /** 混流-输出流背景色，取值是十进制整数。常用的颜色有：红色：0xff0000，对应的十进制整数是16724736。黄色：0xffff00。对应的十进制整数是16776960。绿色：0x33cc00。对应的十进制整数是3394560。蓝色：0x0066ff。对应的十进制整数是26367。黑色：0x000000。对应的十进制整数是0。白色：0xFFFFFF。对应的十进制整数是16777215。灰色：0x999999。对应的十进制整数是10066329。 */
  BackgroundColor?: number;
  /** 混流-输出流背景图片，取值为实时音视频控制台上传的图片ID。 */
  BackgroundImageId?: number;
  /** 混流-输出流音频编码类型，取值范围[0,1, 2]，0为LC-AAC，1为HE-AAC，2为HE-AACv2。默认值为0。当音频编码设置为HE-AACv2时，只支持输出流音频声道数为双声道。HE-AAC和HE-AACv2支持的输出流音频采样率范围为[48000, 44100, 32000, 24000, 16000]。混流任务发起过程中，为了保持CDN链接的稳定，不要修改音频参数（codec、采样率、码率、声道数）。 */
  AudioCodec?: number;
  /** 混流-输出流背景图片URL地址，支持png、jpg、jpeg、bmp格式，暂不支持透明通道。URL链接长度限制为512字节。BackgroundImageUrl和BackgroundImageId参数都填时，以BackgroundImageUrl为准。图片大小限制不超过2MB。 */
  BackgroundImageUrl?: string;
}

/** sdk或webrtc的事件列表。 */
declare interface EventList {
  /** 数据内容 */
  Content: EventMessage[];
  /** 发送端的userId */
  PeerId: string;
}

/** 事件信息，包括，事件时间戳，事件ID, */
declare interface EventMessage {
  /** 视频流类型：0：与视频无关的事件；2：视频为大画面；3：视频为小画面；7：视频为旁路画面； */
  Type: number;
  /** 事件上报的时间戳，unix时间（1589891188801ms) */
  Time: number;
  /** 事件Id：分为sdk的事件和webrtc的事件，详情见：附录/事件 ID 映射表：https://cloud.tencent.com/document/product/647/44916 */
  EventId: number;
  /** 事件的第一个参数，如视频分辨率宽 */
  ParamOne: number;
  /** 事件的第二个参数，如视频分辨率高 */
  ParamTwo: number;
}

/** MCU混流布局参数 */
declare interface LayoutParams {
  /** 混流布局模板ID，0为悬浮模板(默认);1为九宫格模板;2为屏幕分享模板;3为画中画模板;4为自定义模板。 */
  Template?: number;
  /** 屏幕分享模板、悬浮模板、画中画模板中有效，代表大画面对应的用户ID。 */
  MainVideoUserId?: string;
  /** 屏幕分享模板、悬浮模板、画中画模板中有效，代表大画面对应的流类型，0为摄像头，1为屏幕分享。左侧大画面为web用户时此值填0。 */
  MainVideoStreamType?: number;
  /** 画中画模板中有效，代表小画面的布局参数。 */
  SmallVideoLayoutParams?: SmallVideoLayoutParams;
  /** 屏幕分享模板有效。设置为1时代表大画面居右，小画面居左布局。默认为0。 */
  MainVideoRightAlign?: number;
  /** 指定混视频的用户ID列表。设置此参数后，输出流混合此参数中包含用户的音视频，以及其他用户的纯音频。悬浮模板、九宫格、屏幕分享模板有效，最多可设置16个用户。 */
  MixVideoUids?: string[];
  /** 自定义模板中有效，指定用户视频在混合画面中的位置。 */
  PresetLayoutConfig?: PresetLayoutConfig[];
  /** 自定义模板中有效，设置为1时代表启用占位图功能，0时代表不启用占位图功能，默认为0。启用占位图功能时，在预设位置的用户没有上行视频时可显示对应的占位图。 */
  PlaceHolderMode?: number;
  /** 悬浮模板、九宫格、屏幕分享模板生效，用于控制纯音频上行是否占用画面布局位置。设置为0是代表后台默认处理方式，悬浮小画面占布局位置，九宫格画面占布局位置、屏幕分享小画面不占布局位置；设置为1时代表纯音频上行占布局位置；设置为2时代表纯音频上行不占布局位置。默认为0。 */
  PureAudioHoldPlaceMode?: number;
  /** 水印参数。 */
  WaterMarkParams?: WaterMarkParams;
  /** 屏幕分享模板、悬浮模板、九宫格模板、画中画模版有效，画面在输出时的显示模式：0为裁剪，1为缩放，2为缩放并显示黑底，不填采用后台的默认渲染方式（屏幕分享大画面为缩放，其他为裁剪）。若此参数不生效，请提交工单寻求帮助。 */
  RenderMode?: number;
}

/** 指定动态布局中悬浮布局和屏幕分享布局的大画面信息，只在悬浮布局和屏幕分享布局有效。 */
declare interface MaxVideoUser {
  /** 用户媒体流参数。 */
  UserMediaStream: UserMediaStream;
}

/** 混流转推的音频相关参数。 */
declare interface McuAudioParams {
  /** 音频编码参数。 */
  AudioEncode?: AudioEncode;
  /** 音频用户白名单，start时，为空或不填表示混所有主播音频，填具体值表示混指定主播音频；update时，不填表示不更新，为空表示更新为混所有主播音频，填具体值表示更新为混指定主播音频。使用黑白名单时，黑白名单必须同时填写。都不填写时表示不更新。同一个用户同时在黑白名单时，以黑名单为主。 */
  SubscribeAudioList?: McuUserInfoParams[];
  /** 音频用户黑名单，为空或不填表示无黑名单，填具体值表示不混指定主播音频。update时，不填表示不更新，为空表示更新为清空黑名单，填具体值表示更新为不混指定主播音频。使用黑白名单时，黑白名单必须同时填写。都不填写时表示不更新。同一个用户同时在黑白名单时，以黑名单为主。 */
  UnSubscribeAudioList?: McuUserInfoParams[];
}

/** 混流自定义渲染参数 */
declare interface McuBackgroundCustomRender {
  /** 自定义渲染画面的宽度，单位为像素值，需大于0，且不能超过子布局的宽。 */
  Width: number;
  /** 自定义渲染画面的高度，单位为像素值，需大于0，且不能超过子布局的高。 */
  Height: number;
  /** 自定义渲染画面的圆角半径，单位为像素值，不能超过渲染画面Width和Height最小值的一半，不指定默认为0，表示直角。 */
  Radius?: number;
}

/** Mcu转推录制，点播相关参数。 */
declare interface McuCloudVod {
  /** 腾讯云点播相关参数。 */
  McuTencentVod?: McuTencentVod;
}

/** 混流自定义裁剪参数 */
declare interface McuCustomCrop {
  /** 自定义裁剪起始位置的X偏移，单位为像素值，大于等于0。 */
  LocationX: number;
  /** 自定义裁剪起始位置的Y偏移，单位为像素值，大于等于0。 */
  LocationY: number;
  /** 自定义裁剪画面的宽度，单位为像素值，大于0，且LocationX+Width不超过10000 */
  Width: number;
  /** 自定义裁剪画面的高度，单位为像素值，大于0，且LocationY+Height不超过10000 */
  Height: number;
}

/** 回推房间参数。 */
declare interface McuFeedBackRoomParams {
  /** 回推房间的RoomId。 */
  RoomId: string;
  /** 房间类型，必须和回推房间所对应的RoomId类型相同，0为整形房间号，1为字符串房间号。 */
  RoomIdType: number;
  /** 回推房间使用的UserId(https://cloud.tencent.com/document/product/647/46351)，注意这个userId不能与其他TRTC或者转推服务等已经使用的UserId重复，建议可以把房间ID作为userId的标识的一部分。 */
  UserId: string;
  /** 回推房间UserId对应的用户签名，相当于登录密码，具体计算方法请参考TRTC计算[UserSig](https://cloud.tencent.com/document/product/647/45910)的方案。 */
  UserSig: string;
}

/** 混流布局参数。 */
declare interface McuLayout {
  /** 用户媒体流参数。不填时腾讯云后台按照上行主播的进房顺序自动填充。 */
  UserMediaStream?: UserMediaStream;
  /** 子画面在输出时的宽度，单位为像素值，不填默认为0。 */
  ImageWidth?: number;
  /** 子画面在输出时的高度，单位为像素值，不填默认为0。 */
  ImageHeight?: number;
  /** 子画面在输出时的X偏移，单位为像素值，LocationX与ImageWidth之和不能超过混流输出的总宽度，不填默认为0。 */
  LocationX?: number;
  /** 子画面在输出时的Y偏移，单位为像素值，LocationY与ImageHeight之和不能超过混流输出的总高度，不填默认为0。 */
  LocationY?: number;
  /** 子画面在输出时的层级，不填默认为0。 */
  ZOrder?: number;
  /** 子画面在输出时的显示模式：0为裁剪，1为缩放并显示背景，2为缩放并显示黑底。不填默认为0。 */
  RenderMode?: number;
  /** 【此参数配置无效，暂不支持】子画面的背景颜色，常用的颜色有：红色：0xcc0033。黄色：0xcc9900。绿色：0xcccc33。蓝色：0x99CCFF。黑色：0x000000。白色：0xFFFFFF。灰色：0x999999。 */
  BackGroundColor?: string;
  /** 子画面的背景图url，填写该参数，当用户关闭摄像头或未进入TRTC房间时，会在布局位置填充为指定图片。若指定图片与布局位置尺寸比例不一致，则会对图片进行拉伸处理，优先级高于BackGroundColor。支持png、jpg、jpeg、bmp、gif、webm格式。图片大小限制不超过5MB。注：您需要确保图片链接的可访问性，后台单次下载超时时间为10秒，最多重试3次，若最终图片下载失败，子画面的背景图将不会生效。 */
  BackgroundImageUrl?: string;
  /** 客户自定义裁剪，针对原始输入流裁剪 */
  CustomCrop?: McuCustomCrop;
  /** 子背景图在输出时的显示模式：0为裁剪，1为缩放并显示背景，2为缩放并显示黑底，3为变比例伸缩，4为自定义渲染。不填默认为3。 */
  BackgroundRenderMode?: number;
  /** 子画面的透明模版url，指向一张包含透明通道的模板图片。填写该参数，后台混流时会提取该模板图片的透明通道，将其缩放作为目标画面的透明通道，再和其他画面进行混合。您可以通过透明模版实现目标画面的半透明效果和任意形状裁剪（如圆角、星形、心形等）。 支持png格式。图片大小限制不超过5MB。注：1，模板图片宽高比应接近目标画面宽高比，以避免缩放适配目标画面时出现模板效果变形；2，透明模版只有RenderMode为0（裁剪）时才生效；3，您需要确保图片链接的可访问性，后台单次下载超时时间为10秒，最多重试3次，若最终图片下载失败，透明模版将不会生效。 */
  TransparentUrl?: string;
  /** 子背景图的自定义渲染参数，当BackgroundRenderMode为4时必须配置。 */
  BackgroundCustomRender?: McuBackgroundCustomRender;
  /** 子背景色生效模式，默认值为0表示均不生效。bit0:占位图缩放是否生效。bit1:上行流缩放是否生效。您可以将相应bit位置1启动生效，例如：0(00)表示子背景色不生效。1(01)表示子背景色只在占位图缩放时生效。2(10)表示子背景色只在上行流缩放时生效。3(11)表示子背景色在占位图缩放和上行流缩放时均生效。 */
  BackGroundColorMode?: number;
}

/** 混流布局参数。 */
declare interface McuLayoutParams {
  /** 布局模式：动态布局（1：悬浮布局（默认），2：屏幕分享布局，3：九宫格布局），静态布局（4：自定义布局）。最多支持混入16路音视频流，如果用户只上行音频，也会被算作一路；自定义布局中，如果子画面只设置占位图，也被算作一路。 */
  MixLayoutMode?: number;
  /** 纯音频上行是否占布局位置，只在动态布局中有效。0表示纯音频不占布局位置，1表示纯音频占布局位置，不填默认为0。 */
  PureAudioHoldPlaceMode?: number;
  /** 自定义模板中有效，指定用户视频在混合画面中的位置，最多支持设置16个输入流。 */
  MixLayoutList?: McuLayout[];
  /** 指定动态布局中悬浮布局和屏幕分享布局的大画面信息，只在悬浮布局和屏幕分享布局有效。 */
  MaxVideoUser?: MaxVideoUser;
  /** 屏幕分享模板、悬浮模板、九宫格模版有效，画面在输出时的显示模式：0为裁剪，1为缩放，2为缩放并显示黑底 */
  RenderMode?: number;
}

/** 音量布局SEI参数，可以自定义AppData和PayloadType类型。该参数内容可以为空，表示携带默认的音量布局SEI。 */
declare interface McuLayoutVolume {
  /** AppData的内容，会被写入自定义SEI中的app_data字段，长度需小于4096。 */
  AppData?: string;
  /** SEI消息的payload_type，默认值100，取值范围100-254（244除外，244为我们内部自定义的时间戳SEI） */
  PayloadType?: number;
  /** SEI发送间隔，单位毫秒，默认值为1000。 */
  Interval?: number;
  /** 取值范围[0,1]，填1：发送关键帧时会确保带SEI；填0：发送关键帧时不确保带SEI。默认值为0。 */
  FollowIdr?: number;
}

/** 自定义透传SEI */
declare interface McuPassThrough {
  /** 透传SEI的payload内容。 */
  PayloadContent: string;
  /** SEI消息的PayloadType，取值范围5、100-254（244除外，244为我们内部自定义的时间戳SEI）。注：部分播放器可能不支持PayloadType为5带PayloadUuid的标准类型，建议优先使用其他PayloadType。 */
  PayloadType: number;
  /** PayloadType为5，PayloadUuid必须填写。PayloadType不是5时，不需要填写，填写会被后台忽略。该值必须是32长度的十六进制。 */
  PayloadUuid?: string;
  /** SEI发送间隔，单位毫秒，默认值为1000。 */
  Interval?: number;
  /** 取值范围[0,1]，填1：发送关键帧时会确保带SEI；填0：发送关键帧时不确保带SEI。默认值为0。 */
  FollowIdr?: number;
}

/** 转推参数。 */
declare interface McuPublishCdnParam {
  /** CDN转推URL，只支持rtmp链接。注：若更新转推时，URL有任何变化，都会断流重推。 */
  PublishCdnUrl: string;
  /** 是否是腾讯云CDN，0为转推非腾讯云CDN，1为转推腾讯CDN，不携带该参数默认为1。注意：1，为避免误产生转推费用，该参数建议明确填写，转推非腾讯云CDN时会产生转推费用，详情参见接口文档说明；2，国内站默认只支持转推腾讯云CDN，如您有转推第三方CDN需求，请联系腾讯云技术支持。 */
  IsTencentCdn?: number;
}

/** 转推录制参数 */
declare interface McuRecordParams {
  /** 转推录制模式， 0/不填: 暂不支持，行为未定义；1: 不开启录制；2: 开启录制（使用控制台自动录制模板参数，参考：[跳转文档](https://cloud.tencent.com/document/product/647/111748)）；3: 开启录制（使用API指定参数）。 */
  UniRecord?: number;
  /** 录制任务 key，标识一个录制任务；您可以通过该参数，将多个转推任务录制成一个文件。不指定该参数时，只录制当前转推任务。【限制长度为128字节，只允许包含大小写英文字母（a-zA-Z）、数字（0-9）及下划线(_)和连词符(-)】 */
  RecordKey?: string;
  /** 【仅当UniRecord=3时此参数有效】续录等待时间，对应录制模板“续录等待时长”，单位：秒。该值需大于等于 5，且小于等于 86400(24小时)，默认值为 30。启用续录时，录制任务空闲超过RecordWaitTime的时长，自动结束。 */
  RecordWaitTime?: number;
  /** 【仅当UniRecord=3时此参数有效】录制输出文件格式列表，对应录制模板“文件格式”，支持“hls”、"mp4"、"aac"三种格式，默认值为"mp4"。其中"mp4"和"aac"格式，不能同时指定。只录制 mp4格式，示例值：["mp4"]。同时录制mp4 和 HLS 格式，示例值：["mp4","hls"]。 */
  RecordFormat?: string[];
  /** 【仅当UniRecord=3时此参数有效】单个文件录制时长，对应录制模板“单个录制文件时长”，单位：分钟。该值需大于等于 1，且小于等于 1440(24小时)，默认值为 1440。只对"mp4"或"aac"格式生效。实际单文件录制时长还受单文件大小不超过 2G 限制，超过2G则强制拆分。 */
  MaxMediaFileDuration?: number;
  /** 【仅当UniRecord=3时此参数有效】录制的音视频类型，对应录制模板“录制格式”，0:音视频，1：纯音频，2：纯视频。最终录制文件内容是录制指定类型和转推内容的交集。 */
  StreamType?: number;
  /** 录制文件名前缀，不超过64字符。只有存储为vod时生效。【限制长度为64字节，只允许包含大小写英文字母（a-zA-Z）、数字（0-9）及下划线(_)和连词符(-)】 */
  UserDefineRecordPrefix?: string;
  /** 【仅当UniRecord=3时此参数有效】录制文件存储参数，对应控制台“存储位置”及相关参数。目前支持云点播VOD和对象存储COS两种存储方式，只能填写一种。 */
  McuStorageParams?: McuStorageParams;
}

/** 混流SEI参数 */
declare interface McuSeiParams {
  /** 音量布局SEI */
  LayoutVolume?: McuLayoutVolume;
  /** 透传SEI */
  PassThrough?: McuPassThrough;
}

/** Mcu转推录制，第三方存储参数。 */
declare interface McuStorageParams {
  /** 第三方云存储的账号信息（特别说明：若您选择存储至对象存储COS将会收取录制文件投递至COS的费用，详见云端录制收费说明，存储至VOD将不收取此项费用。）。 */
  CloudStorage?: CloudStorage;
  /** 腾讯云云点播的账号信息。 */
  McuCloudVod?: McuCloudVod;
}

/** Mcu转推录制，腾讯云点播相关参数。 */
declare interface McuTencentVod {
  /** 媒体后续任务处理操作，即完成媒体上传后，可自动发起任务流操作。参数值为任务流模板名，云点播支持 创建任务流模板 并为模板命名。 */
  Procedure?: string;
  /** 媒体文件过期时间，为当前时间的绝对过期时间；保存一天，就填"86400"，永久保存就填"0"，默认永久保存。 */
  ExpireTime?: number;
  /** 指定上传园区，仅适用于对上传地域有特殊需求的用户。 */
  StorageRegion?: string;
  /** 分类ID，用于对媒体进行分类管理，可通过 创建分类 接口，创建分类，获得分类 ID。默认值：0，表示其他分类。 */
  ClassId?: number;
  /** 点播 子应用 ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。 */
  SubAppId?: number;
  /** 任务流上下文，任务完成回调时透传。 */
  SessionContext?: string;
  /** 上传上下文，上传完成回调时透传。 */
  SourceContext?: string;
}

/** 混流用户参数 */
declare interface McuUserInfoParams {
  /** 用户参数。 */
  UserInfo: MixUserInfo;
  /** 混音的音量调整：取值范围是0到100，100为原始上行音量，不填默认为100，值越小则音量越低。注：该参数只在音量白名单下配置生效，其他场景配置无效。 */
  SoundLevel?: number;
}

/** 混流转推的视频相关参数。 */
declare interface McuVideoParams {
  /** 输出流视频编码参数。 */
  VideoEncode?: VideoEncode;
  /** 混流布局参数。 */
  LayoutParams?: McuLayoutParams;
  /** 整个画布背景颜色，常用的颜色有：红色：0xcc0033。黄色：0xcc9900。绿色：0xcccc33。蓝色：0x99CCFF。黑色：0x000000。白色：0xFFFFFF。灰色：0x999999。 */
  BackGroundColor?: string;
  /** 整个画布的背景图url，优先级高于BackGroundColor。支持png、jpg、jpeg格式。图片大小限制不超过5MB。注：您需要确保图片链接的可访问性，后台单次下载超时时间为10秒，最多重试3次，若最终图片下载失败，背景图将不会生效。 */
  BackgroundImageUrl?: string;
  /** 混流布局的水印参数。 */
  WaterMarkList?: McuWaterMarkParams[];
  /** 背景图在输出时的显示模式：0为裁剪，1为缩放并显示黑底，2为变比例伸缩。后台默认为变比例伸缩。 */
  BackgroundRenderMode?: number;
}

/** 图片水印参数。 */
declare interface McuWaterMarkImage {
  /** 水印图片URL地址，支持png、jpg、jpeg格式。图片大小限制不超过5MB。注：您需要确保图片链接的可访问性，后台单次下载超时时间为10秒，最多重试3次，若最终图片下载失败，水印图片将不会生效。 */
  WaterMarkUrl: string;
  /** 水印在输出时的宽。单位为像素值。 */
  WaterMarkWidth: number;
  /** 水印在输出时的高。单位为像素值。 */
  WaterMarkHeight: number;
  /** 水印在输出时的X偏移。单位为像素值。 */
  LocationX: number;
  /** 水印在输出时的Y偏移。单位为像素值。 */
  LocationY: number;
  /** 水印在输出时的层级，不填默认为0。 */
  ZOrder?: number;
  /** 动态水印类型，默认为0。0:关闭；1:随机位置，每秒变动一次；2:边界扫描反弹，每帧变动一次。 */
  DynamicPosType?: number;
}

/** 水印参数。 */
declare interface McuWaterMarkParams {
  /** 水印类型，0为图片（默认），1为文字。 */
  WaterMarkType?: number;
  /** 图片水印参数。WaterMarkType为0指定。 */
  WaterMarkImage?: McuWaterMarkImage;
  /** 文字水印参数。WaterMarkType为1指定。 */
  WaterMarkText?: McuWaterMarkText;
}

/** 文字水印参数。 */
declare interface McuWaterMarkText {
  /** 文字水印内容。 */
  Text: string;
  /** 水印在输出时的宽。单位为像素值。 */
  WaterMarkWidth: number;
  /** 水印在输出时的高。单位为像素值。 */
  WaterMarkHeight: number;
  /** 水印在输出时的X偏移。单位为像素值。 */
  LocationX: number;
  /** 水印在输出时的Y偏移。单位为像素值。 */
  LocationY: number;
  /** 字体大小 */
  FontSize: number;
  /** 字体颜色，默认为白色。常用的颜色有： 红色：0xcc0033。 黄色：0xcc9900。 绿色：0xcccc33。 蓝色：0x99CCFF。 黑色：0x000000。 白色：0xFFFFFF。 灰色：0x999999。 */
  FontColor?: string;
  /** 字体背景色，不配置默认为透明。常用的颜色有： 红色：0xcc0033。 黄色：0xcc9900。 绿色：0xcccc33。 蓝色：0x99CCFF。 黑色：0x000000。 白色：0xFFFFFF。 灰色：0x999999。 */
  BackGroundColor?: string;
  /** 动态水印类型，默认为0。0:关闭；1:随机位置，每秒变动一次；2:边界扫描反弹，每帧变动一次。 */
  DynamicPosType?: number;
  /** 水印在输出时的层级，不填默认为0。 */
  ZOrder?: number;
  /** 水印字体，不填默认为Tencent。支持设置以下值： Tencent （默认） SourceHanSans */
  Font?: string;
}

/** 用户自定义混流布局参数列表。 */
declare interface MixLayout {
  /** 画布上该画面左上角的 y 轴坐标，取值范围 [0, 1920]，不能超过画布的高。 */
  Top: number;
  /** 画布上该画面左上角的 x 轴坐标，取值范围 [0, 1920]，不能超过画布的宽。 */
  Left: number;
  /** 画布上该画面宽度的相对值，取值范围 [0, 1920]，与Left相加不应超过画布的宽。 */
  Width: number;
  /** 画布上该画面高度的相对值，取值范围 [0, 1920]，与Top相加不应超过画布的高。 */
  Height: number;
  /** 字符串内容为待显示在该画面的主播对应的UserId，如果不指定，会按照主播加入房间的顺序匹配。 */
  UserId?: string;
  /** 画布的透明度值，取值范围[0, 255]。0表示不透明，255表示全透明。默认值为0。 */
  Alpha?: number;
  /** 0 ：拉伸模式，这个模式下整个视频内容会全部显示，并填满子画面，在源视频和目的视频宽高比不一致的时候，画面不会缺少内容，但是画面可能产生形变；1 ：剪裁模式（默认），这个模式下会严格按照目的视频的宽高比对源视频剪裁之后再拉伸，并填满子画面画布，在源视频和目的视频宽高比不一致的时候，画面保持不变形，但是会被剪裁；2 ：填黑模式，这个模式下会严格保持源视频的宽高比进行等比缩放，在源视频和目的视频宽高比不一致的时候，画面的上下侧边缘或者左右侧边缘会露出子画面画布的背景；3 ：智能拉伸模式，这个模式类似剪裁模式，区别是在源视频和目的视频宽高比不一致的时候，限制了最大剪裁比例为画面的宽度或者高度的20%； */
  RenderMode?: number;
  /** 对应订阅流的主辅路标识：0：主流（默认）；1：辅流； */
  MediaId?: number;
  /** 该画布的图层顺序, 这个值越小表示图层越靠后。默认值为0。 */
  ImageLayer?: number;
  /** 图片的url地址， 只支持jpg, png, jpeg，大小限制不超过5M。注意，url必须携带格式后缀，url内只支持特定的字符串, 范围是a-z A-Z 0-9 '-', '.', '_', '~', ':', '/', '?', '#', '[', ']' '@', '!', '&', '(', ')', '*', '+', ',', '%', '=' */
  SubBackgroundImage?: string;
}

/** 录制的混流布局参数。 */
declare interface MixLayoutParams {
  /** 布局模式:1：悬浮布局；2：屏幕分享布局；3：九宫格布局；4：自定义布局；悬浮布局：默认第一个进入房间的主播（也可以指定一个主播）的视频画面会铺满整个屏幕。其他主播的视频画面从左下角开始依次按照进房顺序水平排列，显示为小画面，小画面悬浮于大画面之上。当画面数量小于等于17个时，每行4个（4 x 4排列）。当画面数量大于17个时，重新布局小画面为每行5个（5 x 5）排列。最多支持25个画面，如果用户只发送音频，仍然会占用画面位置。屏幕分享布局：指定一个主播在屏幕左侧的大画面位置（如果不指定，那么大画面位置为背景色），其他主播自上而下依次垂直排列于右侧。当画面数量少于17个的时候，右侧每列最多8人，最多占据两列。当画面数量多于17个的时候，超过17个画面的主播从左下角开始依次水平排列。最多支持25个画面，如果主播只发送音频，仍然会占用画面位置。九宫格布局：根据主播的数量自动调整每个画面的大小，每个主播的画面大小一致，最多支持25个画面。自定义布局：根据需要在MixLayoutList内定制每个主播画面的布局。 */
  MixLayoutMode: number;
  /** 如果MixLayoutMode 选择为4自定义布局模式的话，设置此参数为每个主播所对应的布局画面的详细信息，最大不超过25个。 */
  MixLayoutList?: MixLayout[];
  /** 录制背景颜色，RGB的颜色表的16进制表示，每个颜色通过8bit长度标识，默认为黑色。比如橙色对应的RGB为 R:255 G:165 B:0, 那么对应的字符串描述为#FFA500，格式规范：‘#‘开头，后面跟固定RGB的颜色值 */
  BackGroundColor?: string;
  /** 在布局模式为1：悬浮布局和 2：屏幕分享布局时，设定为显示大视频画面的UserId。不填的话：悬浮布局默认是第一个进房间的主播，屏幕分享布局默认是背景色 */
  MaxResolutionUserId?: string;
  /** 主辅路标识，0：主流（默认）；1：辅流（屏幕分享）；这个位置的MediaId代表的是对应MaxResolutionUserId的主辅路，MixLayoutList内代表的是自定义用户的主辅路。 */
  MediaId?: number;
  /** 图片的url地址，只支持jpg, png, jpeg，大小限制不超过5M。注意，url必须携带格式后缀，url内只支持特定的字符串, 范围是a-z A-Z 0-9 '-', '.', '_', '~', ':', '/', '?', '#', '[', ']' '@', '!', '&', '(', ')', '*', '+', ',', '%', '=' */
  BackgroundImageUrl?: string;
  /** 设置为1时代表启用占位图功能，0时代表不启用占位图功能，默认为0。启用占位图功能时，在预设位置的用户没有上行视频时可显示对应的占位图。 */
  PlaceHolderMode?: number;
  /** 背景画面宽高比不一致的时候处理方案，与MixLayoufList定义的RenderMode一致。 */
  BackgroundImageRenderMode?: number;
  /** 子画面占位图url地址，只支持jpg, png, jpeg，大小限制不超过5M。注意，url必须携带格式后缀，url内只支持特定的字符串, 范围是a-z A-Z 0-9 '-', '.', '_', '~', ':', '/', '?', '#', '[', ']' '@', '!', '&', '(', ')', '*', '+', ',', '%', '=' */
  DefaultSubBackgroundImage?: string;
  /** 水印布局参数， 最多支持25个。 */
  WaterMarkList?: WaterMark[];
  /** 模板布局下，背景画面宽高比不一致的时候处理方案。自定义布局不生效，与MixLayoufList定义的RenderMode一致。 */
  RenderMode?: number;
  /** 屏幕分享模板有效。设置为1时代表大画面居右，小画面居左布局。默认为0。 */
  MaxResolutionUserAlign?: number;
}

/** 录制的音视频转码参数。 */
declare interface MixTranscodeParams {
  /** 录制视频转码参数，注意如果设置了这个参数，那么里面的字段都是必填的，没有默认值，如果不填这个参数，那么取值为默认值。 */
  VideoParams?: VideoParams;
  /** 录制音频转码参数，注意如果设置了这个参数，那么里面的字段都是必填的，没有默认值，如果不填这个参数，那么取值为默认值。 */
  AudioParams?: AudioParams;
}

/** TRTC用户参数。 */
declare interface MixUserInfo {
  /** 用户ID。 */
  UserId: string;
  /** 动态布局时房间信息必须和主房间信息保持一致，自定义布局时房间信息必须和MixLayoutList中对应用户的房间信息保持一致，不填时默认与主房间信息一致。 */
  RoomId?: string;
  /** 房间号类型，0为整型房间号，1为字符串房间号。 */
  RoomIdType?: number;
}

/** 旁路转码时长的查询结果 */
declare interface OneSdkAppIdTranscodeTimeUsagesInfo {
  /** 旁路转码时长查询结果数组 */
  SdkAppIdTranscodeTimeUsages: SdkAppIdTrtcMcuTranscodeTimeUsage[];
  /** 查询记录数量 */
  TotalNum: number;
  /** 所查询的应用ID，可能值为:1-应用的应用ID，2-total，显示为total则表示查询的是所有应用的用量合计值。 */
  SdkAppId: string;
}

/** MCU混流的输出参数 */
declare interface OutputParams {
  /** 直播流 ID，由用户自定义设置，该流 ID 不能与用户旁路的流 ID 相同，限制64字节。 */
  StreamId: string;
  /** 取值范围[0,1]， 填0：直播流为音视频(默认); 填1：直播流为纯音频 */
  PureAudioStream?: number;
  /** 自定义录制文件名称前缀。请先在实时音视频控制台开通录制功能，https://cloud.tencent.com/document/product/647/50768。【注意】该方式仅对旧版云端录制功能的应用生效，新版云端录制功能的应用请用接口CreateCloudRecording发起录制。新、旧云端录制类型判断方式请见：https://cloud.tencent.com/document/product/647/50768 */
  RecordId?: string;
  /** 取值范围[0,1]，填0无实际含义; 填1：指定录制文件格式为mp3。此参数不建议使用，建议在实时音视频控制台配置纯音频录制模板。 */
  RecordAudioOnly?: number;
}

/** 图片列表信息 */
declare interface PictureInfo {
  /** 图片长度 */
  Height: number;
  /** 图片宽度 */
  Width: number;
  /** 显示位置x轴方向 */
  XPosition: number;
  /** 显示位置y轴方向 */
  YPosition: number;
  /** 应用id */
  SdkAppId: number;
  /** 图片id */
  PictureId: number;
}

/** 自定义模板中有效，指定用户视频在混合画面中的位置。 */
declare interface PresetLayoutConfig {
  /** 指定显示在该画面上的用户ID。如果不指定用户ID，会按照用户加入房间的顺序自动匹配PresetLayoutConfig中的画面设置。 */
  UserId?: string;
  /** 当该画面指定用户时，代表用户的流类型。0为摄像头，1为屏幕分享。小画面为web用户时此值填0。 */
  StreamType?: number;
  /** 该画面在输出时的宽度，单位为像素值，不填默认为0。 */
  ImageWidth?: number;
  /** 该画面在输出时的高度，单位为像素值，不填默认为0。 */
  ImageHeight?: number;
  /** 该画面在输出时的X偏移，单位为像素值，LocationX与ImageWidth之和不能超过混流输出的总宽度，不填默认为0。 */
  LocationX?: number;
  /** 该画面在输出时的Y偏移，单位为像素值，LocationY与ImageHeight之和不能超过混流输出的总高度，不填默认为0。 */
  LocationY?: number;
  /** 该画面在输出时的层级，不填默认为0。 */
  ZOrder?: number;
  /** 该画面在输出时的显示模式：0为裁剪，1为缩放，2为缩放并显示黑底。不填默认为0。 */
  RenderMode?: number;
  /** 该当前位置用户混入的流类型：0为混入音视频，1为只混入视频，2为只混入音频。默认为0，建议配合指定用户ID使用。 */
  MixInputType?: number;
  /** 占位图ID。启用占位图功能时，在当前位置的用户没有上行视频时显示占位图。占位图大小不能超过2M，在实时音视频控制台上传并生成，https://cloud.tencent.com/document/product/647/50769 */
  PlaceImageId?: number;
}

/** 第三方CDN转推参数 */
declare interface PublishCdnParams {
  /** 腾讯云直播BizId。 */
  BizId: number;
  /** 第三方CDN转推的目的地址，同时只支持转推一个第三方CDN地址。 */
  PublishCdnUrls: string[];
}

/** Es返回的质量数据 */
declare interface QualityData {
  /** 数据内容 */
  Content: TimeValue[];
  /** 用户ID */
  UserId: string;
  /** 对端Id,为空时表示上行数据 */
  PeerId: string | null;
  /** 数据类型 */
  DataType: string;
}

/** 语音识别使用的配置 */
declare interface RecognizeConfig {
  /** 语音转文字支持识别的语言，默认是"zh" 中文目前全量支持的语言如下，等号左面是语言英文名，右面是Language字段需要填写的值，该值遵循[ISO639](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes)：可通过购买「语音转文本时长包」解锁或领取包月套餐体验版解锁此功能。语音转文本支持语言类型如下：- Chinese = "zh" # 中文- Chinese_TW = "zh-TW" # 中国台湾- English = "en" # 英语- Chinese_YUE = "zh-yue" # 中国粤语- Chinese_DIALECT = "zh-dialect" # 中国方言- English = "en" # 英语- Vietnamese = "vi" # 越南语- Japanese = "ja" # 日语- Korean = "ko" # 韩语- Indonesia = "id" # 印度尼西亚语- Thai = "th" # 泰语- Portuguese = "pt" # 葡萄牙语- Turkish = "tr" # 土耳其语- Arabic = "ar" # 阿拉伯语- Spanish = "es" # 西班牙语- Hindi = "hi" # 印地语- French = "fr" # 法语- Malay = "ms" # 马来语- Filipino = "fil" # 菲律宾语- German = "de" # 德语- Italian = "it" # 意大利语- Russian = "ru" # 俄语注意：如果缺少满足您需求的语言，请联系我们技术人员。 */
  Language?: string;
  /** 发起模糊识别额外可能替代语言类型,最多填写3种语言类型。注：Language指定为"zh-dialect" # 中国方言 时，不支持模糊识别，该字段无效 */
  AlternativeLanguage?: string[];
  /** 目前已不支持 */
  Model?: string;
  /** 填写则翻译，目前支持的语言：中文: zh英语: en越南语: vi日语: ja韩语: ko印度尼西亚语: id泰语: th葡萄牙语: pt土耳其语: tr阿拉伯语: ar西班牙语: es印地语: hi法语: fr马来语: ms菲律宾语: fil德语: de意大利语: it俄语: ru瑞典语: sv挪威语: no丹麦语: da */
  TranslationLanguage?: string;
}

/** 云端录制控制参数。 */
declare interface RecordParams {
  /** 录制模式：1：单流录制，分别录制房间的订阅UserId的音频和视频，将录制文件上传至云存储；2：合流录制，将房间内订阅UserId的音视频混录成一个音视频文件，将录制文件上传至云存储； */
  RecordMode: number;
  /** 房间内持续没有主播的状态超过MaxIdleTime的时长，自动停止录制，单位：秒。默认值为 30 秒，该值需大于等于 5秒，且小于等于 86400秒(24小时)。 */
  MaxIdleTime?: number;
  /** 录制的媒体流类型：0：录制音频+视频流（默认）;1：仅录制音频流；2：仅录制视频流， */
  StreamType?: number;
  /** 指定订阅流白名单或者黑名单。 */
  SubscribeStreamUserIds?: SubscribeStreamUserIds;
  /** 输出文件的格式（存储至COS等第三方存储时有效）。0：(默认)输出文件为hls格式。1：输出文件格式为hls+mp4。2：输出文件格式为hls+aac 。3：输出文件格式为mp4。4：输出文件格式为aac。存储到云点播VOD时此参数无效，存储到VOD时请通过TencentVod（https://cloud.tencent.com/document/api/647/44055 */
  OutputFormat?: number;
  /** 单流录制模式下，用户的音视频是否合并，0：单流音视频不合并（默认）。1：单流音视频合并成一个ts。合流录制此参数无需设置，默认音视频合并。 */
  AvMerge?: number;
  /** 如果是aac或者mp4文件格式，超过长度限制后，系统会自动拆分视频文件。单位：分钟。默认为1440min（24h），取值范围为1-1440。【单文件限制最大为2G，满足文件大小 >2G 或录制时长度 > 24h任意一个条件，文件都会自动切分】Hls 格式录制此参数不生效。 */
  MaxMediaFileDuration?: number;
  /** 指定录制主辅流，0：主流+辅流（默认）；1:主流；2:辅流。 */
  MediaId?: number;
  /** 上行视频停止时，录制的补帧类型，0：补最后一帧 1：补黑帧 */
  FillType?: number;
}

/** 录制的使用信息。 */
declare interface RecordUsage {
  /** 本组数据对应的时间点，格式如:2020-09-07或2020-09-07 00:05:05。 */
  TimeKey: string;
  /** 视频时长-标清SD，单位：秒。 */
  Class1VideoTime: number;
  /** 视频时长-高清HD，单位：秒。 */
  Class2VideoTime: number;
  /** 视频时长-超清HD，单位：秒。 */
  Class3VideoTime: number;
  /** 语音时长，单位：秒。 */
  AudioTime: number;
}

/** 房间信息列表 */
declare interface RoomState {
  /** 通话ID（唯一标识一次通话） */
  CommId: string;
  /** 房间号 */
  RoomString: string;
  /** 房间创建时间 */
  CreateTime: number;
  /** 房间销毁时间 */
  DestroyTime: number;
  /** 房间是否已经结束 */
  IsFinished: boolean;
  /** 房间创建者Id */
  UserId: string;
}

/** SeriesInfo类型的二维数组 */
declare interface RowValues {
  /** 数据值 */
  RowValue?: number[] | null;
}

/** 语音转文字参数 */
declare interface STTConfig {
  /** 语音识别支持的语言，默认是"zh" 中文目前全量支持的语言如下，等号左面是语言英文名，右面是Language字段需要填写的值，该值遵循[ISO639](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes)：1. Chinese = "zh" # 中文2. Chinese_TW = "zh-TW" # 中国台湾3. Chinese_DIALECT = "zh-dialect" # 中国方言4. English = "en" # 英语5. Vietnamese = "vi" # 越南语6. Japanese = "ja" # 日语7. Korean = "ko" # 韩语8. Indonesia = "id" # 印度尼西亚语9. Thai = "th" # 泰语10. Portuguese = "pt" # 葡萄牙语11. Turkish = "tr" # 土耳其语12. Arabic = "ar" # 阿拉伯语13. Spanish = "es" # 西班牙语14. Hindi = "hi" # 印地语15. French = "fr" # 法语16. Malay = "ms" # 马来语17. Filipino = "fil" # 菲律宾语18. German = "de" # 德语19. Italian = "it" # 意大利语20. Russian = "ru" # 俄语21. Swedish = "sv" # 瑞典语22. Danish = "da" # 丹麦语23. Norwegian = "no" # 挪威语注意：如果缺少满足您需求的语言，请联系我们技术人员。 */
  Language?: string;
  /** 发起模糊识别额外可能替代语言类型,最多填写3种语言类型, 注：Language指定为"zh-dialect" # 中国方言 时，不支持模糊识别，该字段无效 */
  AlternativeLanguage?: string[];
  /** 自定义参数，联系后台使用 */
  CustomParam?: string;
  /** 语音识别vad的时间，范围为240-2000，默认为1000，单位为ms。更小的值会让语音识别分句更快。 */
  VadSilenceTime?: number;
}

/** 历史规模信息 */
declare interface ScaleInfomation {
  /** 每天开始的时间 */
  Time: number;
  /** 房间人数，用户重复进入同一个房间为1次 */
  UserNumber: number | null;
  /** 房间人次，用户每次进入房间为一次 */
  UserCount: number | null;
  /** sdkappid下一天内的房间数 */
  RoomNumbers: number | null;
}

/** SdkAppId级别录制时长数据。 */
declare interface SdkAppIdRecordUsage {
  /** SdkAppId的值。 */
  SdkAppId: string;
  /** 统计的时间点数据。 */
  Usages: RecordUsage[];
}

/** 查询旁路转码计费时长。查询时间小于等于1天时，返回每5分钟粒度的数据；查询时间大于1天时，返回按天汇总的数据。 */
declare interface SdkAppIdTrtcMcuTranscodeTimeUsage {
  /** 本组数据对应的时间点，格式如：2020-09-07或2020-09-07 00:05:05。 */
  TimeKey: string;
  /** 语音时长，单位：秒。 */
  AudioTime: number;
  /** 视频时长-标清SD，单位：秒。 */
  VideoTimeSd: number;
  /** 视频时长-高清HD，单位：秒。 */
  VideoTimeHd: number;
  /** 视频时长-全高清FHD，单位：秒。 */
  VideoTimeFhd: number;
  /** 带宽，单位：Mbps。 */
  Flux: number;
}

/** SeriesInfo类型 */
declare interface SeriesInfo {
  /** 数据列 */
  Columns: string[] | null;
  /** 数据值 */
  Values: number[] | null;
}

/** SeriesInfos类型 */
declare interface SeriesInfos {
  /** 数据列 */
  Columns?: string[] | null;
  /** 数据值 */
  Values?: RowValues[] | null;
}

/** 服务端控制AI对话机器人播报指定文本 */
declare interface ServerPushText {
  /** 服务端推送播报文本 */
  Text?: string;
  /** 是否允许该文本打断机器人说话 */
  Interrupt?: boolean;
  /** 播报完文本后，是否自动关闭对话任务 */
  StopAfterPlay?: boolean;
  /** 服务端推送播报音频 格式说明：音频以16KHz采样率的单声道格式提供，编码为Base64字符串。 输入规则：当提供Audio字段时，将不接受Text字段的输入。系统将直接播放Audio字段中的音频内容。 */
  Audio?: string;
}

/** 单流旁路转推的用户上行信息。 */
declare interface SingleSubscribeParams {
  /** 用户媒体流参数。 */
  UserMediaStream: UserMediaStream;
}

/** 画中画模板中有效，代表小画面的布局参数 */
declare interface SmallVideoLayoutParams {
  /** 代表小画面对应的用户ID。 */
  UserId: string;
  /** 代表小画面对应的流类型，0为摄像头，1为屏幕分享。小画面为web用户时此值填0。 */
  StreamType: number;
  /** 小画面在输出时的宽度，单位为像素值，不填默认为0。 */
  ImageWidth?: number;
  /** 小画面在输出时的高度，单位为像素值，不填默认为0。 */
  ImageHeight?: number;
  /** 小画面在输出时的X偏移，单位为像素值，LocationX与ImageWidth之和不能超过混流输出的总宽度，不填默认为0。 */
  LocationX?: number;
  /** 小画面在输出时的Y偏移，单位为像素值，LocationY与ImageHeight之和不能超过混流输出的总高度，不填默认为0。 */
  LocationY?: number;
}

/** 云端录制查询接口，录制文件的信息 */
declare interface StorageFile {
  /** 录制文件对应的UserId，如果是混流的话的这里返回的是空串。 */
  UserId: string | null;
  /** 录制索引文件名。 */
  FileName: string;
  /** 录制文件流信息。video：视频录制文件audio：音频录制文件audio_video：音视频录制文件 */
  TrackType: string | null;
  /** 录制文件开始Unix时间戳。 */
  BeginTimeStamp: number;
}

/** 录制存储参数 */
declare interface StorageParams {
  /** 腾讯云对象存储COS以及第三方云存储的账号信息 */
  CloudStorage?: CloudStorage;
  /** 腾讯云云点播Vod的存储信息 */
  CloudVod?: CloudVod;
}

/** 指定订阅流白名单或者黑名单，音频的白名单和音频黑名单不能同时设置，视频亦然。同时实际并发订阅的媒体流路数最大支持25路流，混流场景下视频的多画面最大支持24画面。支持通过设置".*$"通配符，来前缀匹配黑白名单的UserId，注意房间里不能有和通配符规则相同的用户，否则将视为订阅具体用户，前缀规则会失效。 */
declare interface SubscribeStreamUserIds {
  /** 订阅音频流白名单，指定订阅哪几个UserId的音频流，例如["1", "2", "3"], 代表订阅UserId 1，2，3的音频流；["1.*$"], 代表订阅UserId前缀为1的音频流。默认不填订阅房间内所有的音频流，订阅列表用户数不超过32。 */
  SubscribeAudioUserIds?: string[];
  /** 订阅音频流黑名单，指定不订阅哪几个UserId的音频流，例如["1", "2", "3"], 代表不订阅UserId 1，2，3的音频流；["1.*$"], 代表不订阅UserId前缀为1的音频流。默认不填订阅房间内所有音频流，订阅列表用户数不超过32。 */
  UnSubscribeAudioUserIds?: string[];
  /** 订阅视频流白名单，指定订阅哪几个UserId的视频流，例如["1", "2", "3"], 代表订阅UserId 1，2，3的视频流；["1.*$"], 代表订阅UserId前缀为1的视频流。默认不填订阅房间内所有视频流，订阅列表用户数不超过32。 */
  SubscribeVideoUserIds?: string[];
  /** 订阅视频流黑名单，指定不订阅哪几个UserId的视频流，例如["1", "2", "3"], 代表不订阅UserId 1，2，3的视频流；["1.*$"], 代表不订阅UserId前缀为1的视频流。默认不填订阅房间内所有视频流，订阅列表用户数不超过32。 */
  UnSubscribeVideoUserIds?: string[];
}

/** TRTC数据大盘/实时监控 API接口数据出参 */
declare interface TRTCDataResp {
  /** StatementID值，监控仪表盘下固定为0。 */
  StatementID: number | null;
  /** 查询结果数据，以Columns-Values形式返回。 */
  Series: SeriesInfo[] | null;
  /** Total值，监控仪表盘功能下固定为1。 */
  Total: number | null;
}

/** TRTC数据大盘/实时监控 API接口数据出参 */
declare interface TRTCDataResult {
  /** StatementID值，监控仪表盘下固定为0。 */
  StatementID?: number | null;
  /** 查询结果数据，以Columns-Values形式返回。 */
  Series?: SeriesInfos[] | null;
  /** Total值，监控仪表盘功能下固定为1。 */
  Total?: number | null;
}

/** 腾讯云点播相关参数。 */
declare interface TencentVod {
  /** 媒体后续任务处理操作，即完成媒体上传后，可自动发起任务流操作。参数值为任务流模板名，云点播支持 创建任务流模板 并为模板命名。 */
  Procedure?: string;
  /** 媒体文件过期时间，为当前时间的绝对过期时间；保存一天，就填"86400"，永久保存就填"0"，默认永久保存。 */
  ExpireTime?: number;
  /** 指定上传园区，仅适用于对上传地域有特殊需求的用户。 */
  StorageRegion?: string;
  /** 分类ID，用于对媒体进行分类管理，可通过 创建分类 接口，创建分类，获得分类 ID。默认值：0，表示其他分类。 */
  ClassId?: number;
  /** 点播 子应用 ID。如果要访问子应用中的资源，则将该字段填写为子应用 ID；否则无需填写该字段。 */
  SubAppId?: number;
  /** 任务流上下文，任务完成回调时透传。 */
  SessionContext?: string;
  /** 上传上下文，上传完成回调时透传。 */
  SourceContext?: string;
  /** 上传到vod平台的录制文件格式类型，0：mp4(默认), 1: hls, 2:aac(StreamType=1纯音频录制时有效),3: hls+mp4, 4: hls+aac(StreamType=1纯音频录制时有效)。 */
  MediaType?: number;
  /** 仅支持API录制上传vod，该参数表示用户可以自定义录制文件名前缀，【限制长度为64字节，只允许包含大小写英文字母（a-zA-Z）、数字（0-9）及下划线和连词符】。前缀与自动生成的录制文件名之间用`__UserDefine_u_` 分开。 */
  UserDefineRecordId?: string;
}

/** 返回的质量数据，时间:值 */
declare interface TimeValue {
  /** 时间，unix时间戳（1590065877s) */
  Time: number;
  /** 当前时间返回参数取值，如（bigvCapFps在1590065877取值为0，则Value：0 ） */
  Value: number;
}

/** AI转录参数 */
declare interface TranscriptionParams {
  /** 转录机器人的UserId，用于进房发起转录任务。【注意】这个UserId不能与当前房间内的主播观众[UserId](https://cloud.tencent.com/document/product/647/46351)重复。如果一个房间发起多个转录任务时，机器人的userid也不能相互重复，否则会中断前一个任务。需要保证转录机器人UserId在房间内唯一。 */
  UserId: string;
  /** 转录机器人UserId对应的校验签名，即UserId和UserSig相当于转录机器人进房的登录密码，具体计算方法请参考TRTC计算[UserSig](https://cloud.tencent.com/document/product/647/45910)的方案。 */
  UserSig: string;
  /** IM[管理员账户](https://cloud.tencent.com/document/product/269/31999)，如果填写，后台下发消息会使用IM通道，而不是TRTC自定义消息。 */
  IMAdminUserId?: string;
  /** IM管理员账户生成的签名，用于向特定群组发送消息。如果填写，后台下发消息会使用IM通道，而不是TRTC自定义消息。必须和IM管理员的UserId一起填写。 */
  IMAdminUserSig?: string;
  /** 房间内推流用户全部退出后超过MaxIdleTime秒，后台自动关闭转录任务，默认值是60s。 */
  MaxIdleTime?: number;
  /** 1表示机器人只订阅单个人的流，0表示机器人订阅整个房间的流，如果不填默认订阅整个房间的流。 */
  TranscriptionMode?: number;
  /** TranscriptionMode为1时必填，机器人只会拉该userid的流，忽略房间里其他用户。 */
  TargetUserId?: string;
  /** 机器人订阅的用户列表仅 TranscriptionMode 为 1或者 TranscriptionMode 为无限上麦模式支持传入多个用户列表 */
  TargetUserIdList?: string[];
}

/** 实时音视频用量在某一时间段的统计信息。 */
declare interface TrtcUsage {
  /** 时间点，格式为YYYY-MM-DD HH:mm:ss。多天查询时，HH:mm:ss为00:00:00。 */
  TimeKey?: string;
  /** 时间点时间戳 */
  TimeStampKey?: number;
  /** 用量数组。每个数值含义与UsageKey对应。单位:分钟。 */
  UsageValue?: number[];
}

/** 用户信息，包括用户进房时间，退房时间等 */
declare interface UserInformation {
  /** 房间号 */
  RoomStr: string;
  /** 用户Id */
  UserId: string;
  /** 用户进房时间 */
  JoinTs: number;
  /** 用户退房时间，用户没有退房则返回当前时间 */
  LeaveTs: number;
  /** 终端类型 */
  DeviceType: string;
  /** Sdk版本号 */
  SdkVersion: string;
  /** 客户端IP地址 */
  ClientIp: string;
  /** 判断用户是否已经离开房间 */
  Finished: boolean;
}

/** 用户媒体流参数。 */
declare interface UserMediaStream {
  /** TRTC用户参数。 */
  UserInfo?: MixUserInfo;
  /** 主辅路流类型，0为摄像头，1为屏幕分享，不填默认为0。 */
  StreamType?: number;
}

/** 视频编码参数。 */
declare interface VideoEncode {
  /** 输出流宽，音视频输出时必填。取值范围[0,1920]，单位为像素值。 */
  Width: number;
  /** 输出流高，音视频输出时必填。取值范围[0,1080]，单位为像素值。 */
  Height: number;
  /** 输出流帧率，音视频输出时必填。取值范围[1,60]，表示混流的输出帧率可选范围为1到60fps。 */
  Fps: number;
  /** 输出流码率，音视频输出时必填。取值范围[1,10000]，单位为kbps。 */
  BitRate: number;
  /** 输出流gop，音视频输出时必填。取值范围[1,5]，单位为秒。 */
  Gop: number;
}

/** 视频转码参数 */
declare interface VideoEncodeParams {
  /** 宽。取值范围[0,1920]，单位为像素值。 */
  Width?: number;
  /** 高。取值范围[0,1080]，单位为像素值。 */
  Height?: number;
  /** 帧率。取值范围[1,60]，表示帧率可选范围为1到60fps。 */
  Fps?: number;
  /** 码率。取值范围[1,10000]，单位为kbps。 */
  BitRate?: number;
  /** gop。取值范围[1,2]，单位为秒。 */
  Gop?: number;
}

/** 录制视频转码参数。 */
declare interface VideoParams {
  /** 视频的宽度值，单位为像素，默认值360。不能超过1920，与height的乘积不能超过1920*1080。 */
  Width: number;
  /** 视频的高度值，单位为像素，默认值640。不能超过1920，与width的乘积不能超过1920*1080。 */
  Height: number;
  /** 视频的帧率，范围[1, 60]，默认15。 */
  Fps: number;
  /** 视频的码率,单位是bps，范围[64000, 8192000]，默认550000bps。 */
  BitRate: number;
  /** 视频关键帧时间间隔，单位秒，默认值10秒。 */
  Gop: number;
}

/** 水印布局参数 */
declare interface WaterMark {
  /** 水印类型，0为图片（默认），1为文字，2为时间戳。 */
  WaterMarkType?: number;
  /** 水印为图片时的参数列表，水印为图片时校验必填。 */
  WaterMarkImage?: WaterMarkImage;
  /** 水印为文字时的参数列表，水印为文字时校验必填。 */
  WaterMarkChar?: WaterMarkChar | null;
  /** 水印为时间戳时的参数列表，水印为时间戳时校验必填。 */
  WaterMarkTimestamp?: WaterMarkTimestamp | null;
}

/** 自定义文字水印数据结构 */
declare interface WaterMarkChar {
  /** 文字水印的起始坐标Y值，从左上角开始 */
  Top: number;
  /** 文字水印的起始坐标X值，从左上角开始 */
  Left: number;
  /** 文字水印的宽度，单位像素值 */
  Width: number;
  /** 文字水印的高度，单位像素值 */
  Height: number;
  /** 水印文字的内容 */
  Chars: string;
  /** 水印文字的大小，单位像素，默认14 */
  FontSize?: number;
  /** 水印文字的颜色，默认白色 */
  FontColor?: string;
  /** 水印文字的背景色，为空代表背景透明，默认为空 */
  BackGroundColor?: string;
  /** 文字水印的字体，支持设置以下值：1. Tencent （默认）2. SourceHanSans */
  Font?: string;
}

/** 水印类型为图片的参数列表 */
declare interface WaterMarkImage {
  /** 下载的url地址， 只支持jpg, png, jpeg，大小限制不超过5M。注意，url必须携带格式后缀，url内只支持特定的字符串, 范围是a-z A-Z 0-9 '-', '.', '_', '~', ':', '/', '?', '#', '[', ']' '@', '!', '&', '(', ')', '*', '+', ',', '%', '=' */
  WaterMarkUrl: string;
  /** 画布上该画面左上角的 y 轴坐标，取值范围 [0, 2560]，不能超过画布的高。 */
  Top: number;
  /** 画布上该画面左上角的 x 轴坐标，取值范围 [0, 2560]，不能超过画布的宽。 */
  Left: number;
  /** 画布上该画面宽度的相对值，取值范围 [0, 2560]，与Left相加不应超过画布的宽。 */
  Width: number;
  /** 画布上该画面高度的相对值，取值范围 [0, 2560]，与Top相加不应超过画布的高。 */
  Height: number;
}

/** MCU混流水印参数 */
declare interface WaterMarkParams {
  /** 混流-水印图片ID。取值为实时音视频控制台上传的图片ID。 */
  WaterMarkId: number;
  /** 混流-水印宽。单位为像素值。水印宽+X偏移不能超过整个画布宽。 */
  WaterMarkWidth: number;
  /** 混流-水印高。单位为像素值。水印高+Y偏移不能超过整个画布高。 */
  WaterMarkHeight: number;
  /** 水印在输出时的X偏移。单位为像素值。水印宽+X偏移不能超过整个画布宽。 */
  LocationX: number;
  /** 水印在输出时的Y偏移。单位为像素值。水印高+Y偏移不能超过整个画布高。 */
  LocationY: number;
  /** 混流-水印图片URL地址，支持png、jpg、jpeg、bmp格式，暂不支持透明通道。URL链接长度限制为512字节。WaterMarkUrl和WaterMarkId参数都填时，以WaterMarkUrl为准。图片大小限制不超过2MB。 */
  WaterMarkUrl?: string;
}

/** 时间戳水印数据结构 */
declare interface WaterMarkTimestamp {
  /** 时间戳的位置，取值范围0-6，分别代表上左，上右，下左，下右，上居中，下居中，居中 */
  Pos: number;
  /** 显示时间戳的时区，默认东八区 */
  TimeZone?: number;
  /** 文字水印的字体，支持设置以下值：1. Tencent （默认）2. SourceHanSans */
  Font?: string;
}

/** 页面录制控制参数 */
declare interface WebRecordVideoParams {
  /** 录制画面宽度，默认为1280，取值范围[0, 1920] */
  Width?: number;
  /** 录制画面高度，默认为720，取值范围[0, 1080] */
  Height?: number;
  /** 指定输出格式，可选hls,mp4。存储到云点播VOD时此参数无效，存储到VOD时请通过TencentVod（https://cloud.tencent.com/document/api/647/44055 */
  Format?: string;
  /** 如果是aac或者mp4文件格式，超过长度限制后，系统会自动拆分视频文件。单位：分钟。默认为1440min（24h），取值范围为1-1440。【单文件限制最大为2G，满足文件大小 >2G 或录制时长度 > 24h任意一个条件，文件都会自动切分】Hls 格式录制此参数不生效。示例值：1440 */
  MaxMediaFileDuration?: number;
}

declare interface ControlAIConversationRequest {
  /** 任务唯一标识 */
  TaskId: string;
  /** 控制命令，目前支持命令如下：- ServerPushText，服务端发送文本给AI机器人，AI机器人会播报该文本 */
  Command: string;
  /** 服务端发送播报文本命令，当Command为ServerPushText时必填 */
  ServerPushText?: ServerPushText;
}

declare interface ControlAIConversationResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateBasicModerationRequest {
  /** TRTC的[SdkAppId](https://cloud.tencent.com/document/product/647/46351)，和TRTC的房间所对应的SdkAppId相同。 */
  SdkAppId: number;
  /** TRTC的[RoomId](https://cloud.tencent.com/document/product/647/46351)，为TRTC房间所对应的RoomId。 */
  RoomId: string;
  /** 目标审核用户id */
  UserId: string;
  /** TRTC房间号的类型。【*注意】必须和TRTC的房间所对应的RoomId类型相同:0: 字符串类型的RoomId1: 32位整型的RoomId（默认） */
  RoomIdType?: number;
  /** 音频文件上传到云存储的参数 */
  AuditStorageParams?: AuditStorageParams;
}

declare interface CreateBasicModerationResponse {
  /** 审核服务分配的任务ID。任务ID是对一次审核任务生命周期过程的唯一标识，结束任务时会失去意义。任务ID需要业务保存下来，作为下次针对这个任务操作的参数 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCloudRecordingRequest {
  /** TRTC的[SdkAppId](https://cloud.tencent.com/document/product/647/46351)，和录制的房间所对应的SdkAppId相同。 */
  SdkAppId: number;
  /** TRTC的[RoomId](https://cloud.tencent.com/document/product/647/46351)，录制的TRTC房间所对应的RoomId。注：房间号类型默认为整型，若房间号类型为字符串，请通过RoomIdType指定。 */
  RoomId: string;
  /** 录制机器人的UserId，用于进房发起录制任务。【*注意】这个UserId不能与当前房间内的主播观众[UserId](https://cloud.tencent.com/document/product/647/46351)重复。如果一个房间发起多个录制任务时，机器人的userid也不能相互重复，否则会中断前一个录制任务。建议可以把房间ID作为UserId的标识的一部分，即录制机器人UserId在房间内唯一。 */
  UserId: string;
  /** 录制机器人UserId对应的校验签名，即UserId和UserSig相当于录制机器人进房的登录密码，具体计算方法请参考TRTC计算[UserSig](https://cloud.tencent.com/document/product/647/45910)的方案。 */
  UserSig: string;
  /** 云端录制控制参数。 */
  RecordParams: RecordParams;
  /** 云端录制文件上传到云存储的参数（不支持同时设置云点播VOD和对象存储COS） */
  StorageParams: StorageParams;
  /** TRTC房间号的类型。【*注意】必须和录制的房间所对应的RoomId类型相同:0: 字符串类型的RoomId1: 32位整型的RoomId（默认） */
  RoomIdType?: number;
  /** 合流的转码参数，录制模式为合流的时候可以设置。 */
  MixTranscodeParams?: MixTranscodeParams;
  /** 合流的布局参数，录制模式为合流的时候可以设置。 */
  MixLayoutParams?: MixLayoutParams;
  /** 接口可以调用的时效性，从成功开启录制并获得任务ID后开始计算，超时后无法调用查询、更新和停止等接口，但是录制任务不会停止。 参数的单位是小时，默认72小时（3天），最大可设置720小时（30天），最小设置6小时。举例说明：如果不设置该参数，那么开始录制成功后，查询、更新和停止录制的调用时效为72个小时。 */
  ResourceExpiredHour?: number;
  /** TRTC房间权限加密串，只有在TRTC控制台启用了高级权限控制的时候需要携带，在TRTC控制台如果开启高级权限控制后，TRTC 的后台服务系统会校验一个叫做 [PrivateMapKey] 的“权限票据”，权限票据中包含了一个加密后的 RoomId 和一个加密后的“权限位列表”。由于 PrivateMapKey 中包含 RoomId，所以只提供了 UserSig 没有提供 PrivateMapKey 时，并不能进入指定的房间。 */
  PrivateMapKey?: string;
}

declare interface CreateCloudRecordingResponse {
  /** 云录制服务分配的任务 ID。任务 ID 是对一次录制生命周期过程的唯一标识，结束录制时会失去意义。任务 ID需要业务保存下来，作为下次针对这个录制任务操作的参数。 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreatePictureRequest {
  /** 应用id */
  SdkAppId: number;
  /** 图片内容经base64编码后的string格式,最大长度为2M */
  Content: string;
  /** 图片后缀名 */
  Suffix: string;
  /** 图片长度 */
  Height: number;
  /** 图片宽度 */
  Width: number;
  /** 显示位置x轴方向 */
  XPosition: number;
  /** 显示位置y轴方向 */
  YPosition: number;
}

declare interface CreatePictureResponse {
  /** 图片id */
  PictureId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteBasicModerationRequest {
  /** TRTC的SDKAppId，和TRTC的房间所使用的SDKAppId相同。 */
  SdkAppId: number;
  /** 审核任务的唯一Id，在启动审核任务成功后会返回。 */
  TaskId: string;
}

declare interface DeleteBasicModerationResponse {
  /** 审核任务的唯一Id。 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteCloudRecordingRequest {
  /** TRTC的SDKAppId，和录制的房间所对应的SDKAppId相同。 */
  SdkAppId: number;
  /** 录制任务的唯一Id，在启动录制成功后会返回。 */
  TaskId: string;
}

declare interface DeleteCloudRecordingResponse {
  /** 云录制服务分配的任务 ID。任务 ID 是对一次录制生命周期过程的唯一标识，结束录制时会失去意义。 */
  TaskId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeletePictureRequest {
  /** 图片id */
  PictureId: number;
  /** 应用id */
  SdkAppId: number;
}

declare interface DeletePictureResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAIConversationRequest {
  /** TRTC的[SdkAppId](https://cloud.tencent.com/document/product/647/46351)，和开启转录任务的房间使用的SdkAppId相同。 */
  SdkAppId?: number;
  /** 唯一标识一次任务。 */
  TaskId?: string;
  /** 开启任务时填写的SessionId，如果没写则不返回。 */
  SessionId?: string;
}

declare interface DescribeAIConversationResponse {
  /** 任务开始时间。 */
  StartTime?: string;
  /** 任务状态。有4个值：1、Idle表示任务未开始2、Preparing表示任务准备中3、InProgress表示任务正在运行4、Stopped表示任务已停止，正在清理资源中 */
  Status?: string;
  /** 任务的唯一标识，在启动任务时生成 */
  TaskId?: string;
  /** 开启对话任务时填写的SessionId，如果没写则不返回。 */
  SessionId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAITranscriptionRequest {
  /** 查询任务状态，不使用时传入空字符串。有两种查询方式：1、只填写TaskId，这种方式使用TaskId来查询任务2、TaskId为空字符串，填写SdkAppId和SessionId，这种方式不需要使用TaskId查询任务 */
  TaskId: string;
  /** TRTC的SdkAppId，和SessionId配合使用。 */
  SdkAppId?: number;
  /** 开启转录任务时传入的SessionId，和SdkAppId配合使用。 */
  SessionId?: string;
}

declare interface DescribeAITranscriptionResponse {
  /** 任务开始时间。 */
  StartTime?: string;
  /** 转录任务状态。有4个值：1、Idle表示任务未开始2、Preparing表示任务准备中3、InProgress表示任务正在运行4、Stopped表示任务已停止，正在清理资源中 */
  Status?: string;
  /** 唯一标识一次任务。 */
  TaskId?: string;
  /** 开启转录任务时填写的SessionId，如果没写则不返回。 */
  SessionId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCallDetailInfoRequest {
  /** 通话 ID（唯一标识一次通话）： SdkAppId_RoomId（房间号）_ CreateTime（房间创建时间，unix时间戳，单位为s）例：1400xxxxxx_218695_1590065777。通过 DescribeRoomInfo（查询历史房间列表）接口获取（[查询历史房间列表](https://cloud.tencent.com/document/product/647/44050)）。 */
  CommId: string;
  /** 查询开始时间，本地unix时间戳，单位为秒（如：1590065777），注意：支持查询14天内的数据。 */
  StartTime: number;
  /** 查询结束时间，本地unix时间戳，单位为秒（如：1590065877）注意：查询起止时间需小于1小时，超过则返回null，即与StartTime间隔时间不超过1小时。 */
  EndTime: number;
  /** 用户SdkAppId（如：1400xxxxxx）。 */
  SdkAppId: number;
  /** 需查询的用户数组，默认不填返回6个用户。 */
  UserIds?: string[];
  /** 需查询的指标，不填则只返回用户列表，填all则返回所有指标。appCpu：APP CPU使用率；sysCpu：系统 CPU使用率；aBit：上/下行音频码率；单位：bpsaBlock：音频卡顿时长；单位：msbigvBit：上/下行视频码率；单位：bpsbigvCapFps：视频采集帧率；bigvEncFps：视频发送帧率；bigvDecFps：渲染帧率；bigvBlock：视频卡顿时长；单位：msaLoss：上/下行音频丢包率；bigvLoss：上/下行视频丢包率；bigvWidth：上/下行分辨率宽；bigvHeight：上/下行分辨率高；aCapEnergy：音频采集能量；aPlayEnergy：音频播放能量；rtt：SDK到云端的往返延时；单位: ms */
  DataType?: string[];
  /** 当前页数，默认为0，注意：PageNumber和PageSize 其中一个不填均默认返回6条数据。 */
  PageNumber?: number;
  /** 每页个数，默认为6，范围：[1，100]注意：DataType不为null，UserIds长度不能超过6，PageSize最大值不超过6；DataType 为null，UserIds长度不超过100，PageSize最大不超过100。 */
  PageSize?: number;
}

declare interface DescribeCallDetailInfoResponse {
  /** 返回的用户总条数 */
  Total?: number;
  /** 用户信息列表 */
  UserList?: UserInformation[] | null;
  /** 质量数据 */
  Data?: QualityData[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCloudRecordingRequest {
  /** TRTC的SDKAppId，和录制的房间所对应的SDKAppId相同。 */
  SdkAppId: number;
  /** 录制任务的唯一Id，在启动录制成功后会返回。 */
  TaskId: string;
}

declare interface DescribeCloudRecordingResponse {
  /** 录制任务的唯一Id。 */
  TaskId?: string;
  /** 云端录制任务的状态信息。Idle：表示当前录制任务空闲中InProgress：表示当前录制任务正在进行中。Exited：表示当前录制任务正在退出的过程中。 */
  Status?: string;
  /** 录制文件信息。 */
  StorageFileList?: StorageFile[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMixTranscodingUsageRequest {
  /** 查询开始时间，格式为YYYY-MM-DD。 */
  StartTime: string;
  /** 查询结束时间，格式为YYYY-MM-DD。单次查询统计区间最多不能超过31天。 */
  EndTime: string;
  /** TRTC的SdkAppId，和房间所对应的SdkAppId相同。如果没有这个参数，返回用户下全部实时音视频应用的汇总。 */
  SdkAppId?: number;
}

declare interface DescribeMixTranscodingUsageResponse {
  /** 用量类型，与UsageValue中各个位置的值对应。 */
  UsageKey?: string[];
  /** 各个时间点用量明细。 */
  UsageList?: TrtcUsage[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePictureRequest {
  /** 应用ID */
  SdkAppId: number;
  /** 图片ID，不填时返回该应用下所有图片 */
  PictureId?: number;
  /** 每页数量，不填时默认为10 */
  PageSize?: number;
  /** 页码，不填时默认为1 */
  PageNo?: number;
}

declare interface DescribePictureResponse {
  /** 返回的图片记录数 */
  Total: number;
  /** 图片信息列表 */
  PictureInfo: PictureInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRecordStatisticRequest {
  /** 查询开始日期，格式为YYYY-MM-DD。 */
  StartTime: string;
  /** 查询结束日期，格式为YYYY-MM-DD。单次查询统计区间最多不能超过31天。 */
  EndTime: string;
  /** 应用ID，可不传。传应用ID时返回的是该应用的用量，不传时返回多个应用的合计值。 */
  SdkAppId?: number;
}

declare interface DescribeRecordStatisticResponse {
  /** 应用的用量信息数组。 */
  SdkAppIdUsages: SdkAppIdRecordUsage[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRecordingUsageRequest {
  /** 查询开始时间，格式为YYYY-MM-DD。 */
  StartTime: string;
  /** 查询结束时间，格式为YYYY-MM-DD。单次查询统计区间最多不能超过31天。 */
  EndTime: string;
  /** 查询单流录制或合流录制，值为"single"或"multi"。 */
  MixType: string;
  /** TRTC的SdkAppId，和房间所对应的SdkAppId相同。如果没有这个参数，返回用户下全部实时音视频应用的汇总。 */
  SdkAppId?: number;
}

declare interface DescribeRecordingUsageResponse {
  /** 用量类型，与UsageValue中各个位置的值对应。 */
  UsageKey?: string[];
  /** 各个时间点用量明细。 */
  UsageList?: TrtcUsage[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRelayUsageRequest {
  /** 查询开始时间，格式为YYYY-MM-DD。 */
  StartTime: string;
  /** 查询结束时间，格式为YYYY-MM-DD。单次查询统计区间最多不能超过31天。 */
  EndTime: string;
  /** TRTC的SdkAppId，和房间所对应的SdkAppId相同。如果没有这个参数，返回用户下全部实时音视频应用的汇总。 */
  SdkAppId?: number;
}

declare interface DescribeRelayUsageResponse {
  /** 用量类型，与UsageValue中各个位置的值对应。 */
  UsageKey?: string[];
  /** 各个时间点用量明细。 */
  UsageList?: TrtcUsage[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRoomInfoRequest {
  /** 用户SdkAppId（如：1400xxxxxx） */
  SdkAppId: number;
  /** 查询开始时间，本地unix时间戳，单位为秒（如：1590065777）注意：最大支持查询14天内的数据 */
  StartTime: number;
  /** 查询结束时间，本地unix时间戳，单位为秒（如：1590065877）注意：与StartTime间隔时间不超过24小时。 */
  EndTime: number;
  /** 房间号（如：223) */
  RoomId?: string;
  /** 当前页数，默认为0，注意：PageNumber和PageSize 其中一个不填均默认返回10条数据。 */
  PageNumber?: number;
  /** 每页个数，默认为10，范围：[1，100] */
  PageSize?: number;
}

declare interface DescribeRoomInfoResponse {
  /** 返回当页数据总数 */
  Total?: number;
  /** 房间信息列表 */
  RoomList?: RoomState[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeScaleInfoRequest {
  /** 用户SdkAppId（如：1400xxxxxx） */
  SdkAppId: number;
  /** 查询开始时间，本地unix时间戳，单位为秒（如：1590065777）注意：支持查询14天内的数据。 */
  StartTime: number;
  /** 查询结束时间，本地unix时间戳，单位为秒（如：1590065877），建议与StartTime间隔时间超过24小时。注意：按天统计，结束时间大于前一天，否则查询数据为空（如：需查询20号数据，结束时间需晚于20号0点）。 */
  EndTime: number;
}

declare interface DescribeScaleInfoResponse {
  /** 返回的数据条数 */
  Total?: number;
  /** 返回的数据 */
  ScaleList?: ScaleInfomation[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeStreamIngestRequest {
  /** TRTC的SDKAppId，和任务的房间所对应的SDKAppId相同 */
  SdkAppId: number;
  /** 任务的唯一Id，在启动任务成功后会返回。 */
  TaskId: string;
}

declare interface DescribeStreamIngestResponse {
  /** 任务的状态信息。InProgress：表示当前任务正在进行中。NotExist：表示当前任务不存在。示例值：InProgress */
  Status?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTRTCMarketQualityDataRequest {
  /** 用户SdkAppId（如：1400xxxxxx） */
  SdkAppId: string;
  /** 查询开始时间，格式为YYYY-MM-DD。（查询时间范围根据监控仪表盘功能版本而定，【基础版】可查近30天，【进阶版】可查近60天） */
  StartTime: string;
  /** 查询结束时间，格式为YYYY-MM-DD。 */
  EndTime: string;
  /** 返回数据的粒度，支持设为以下值：d：按天。此时返回查询时间范围内 UTC 时间为零点的数据。h：按小时。此时返回查询时间范围内 UTC 时间为整小时的数据。 */
  Period: string;
}

declare interface DescribeTRTCMarketQualityDataResponse {
  /** TRTC监控数据出参 */
  Data?: TRTCDataResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTRTCMarketQualityMetricDataRequest {
  /** 用户SdkAppId（如：1400xxxxxx） */
  SdkAppId: string;
  /** 查询开始时间，格式为YYYY-MM-DD。（查询时间范围根据监控仪表盘功能版本而定，【基础版】可查近30天，【进阶版】可查近60天） */
  StartTime: string;
  /** 查询结束时间，格式为YYYY-MM-DD。 */
  EndTime: string;
  /** 返回数据的粒度，支持设为以下值：d：按天。此时返回查询时间范围内 UTC 时间为零点的数据。h：按小时。此时返回查询时间范围内 UTC 时间为整小时的数据。 */
  Period: string;
}

declare interface DescribeTRTCMarketQualityMetricDataResponse {
  /** TRTC监控数据出参 */
  Data: TRTCDataResp | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTRTCMarketScaleDataRequest {
  /** 用户SdkAppId */
  SdkAppId: string;
  /** 查询开始时间，格式为YYYY-MM-DD。（查询时间范围根据监控仪表盘功能版本而定，【基础版】可查近30天，【进阶版】可查近60天） */
  StartTime: string;
  /** 查询结束时间，格式为YYYY-MM-DD。 */
  EndTime: string;
  /** 返回数据的粒度，支持设为以下值：d：按天。此时返回查询时间范围内 UTC 时间为零点的数据。h：按小时。此时返回查询时间范围内 UTC 时间为整小时的数据。 */
  Period: string;
}

declare interface DescribeTRTCMarketScaleDataResponse {
  /** TRTC监控数据出参 */
  Data?: TRTCDataResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTRTCMarketScaleMetricDataRequest {
  /** 用户SdkAppId */
  SdkAppId: string;
  /** 查询开始时间，格式为YYYY-MM-DD。（查询时间范围根据监控仪表盘功能版本而定，【基础版】可查近30天，【进阶版】可查近60天） */
  StartTime: string;
  /** 查询结束时间，格式为YYYY-MM-DD。 */
  EndTime: string;
  /** 返回数据的粒度，支持设为以下值：d：按天。此时返回查询时间范围内 UTC 时间为零点的数据。h：按小时。此时返回查询时间范围内 UTC 时间为整小时的数据。 */
  Period: string;
}

declare interface DescribeTRTCMarketScaleMetricDataResponse {
  /** TRTC监控数据出参 */
  Data: TRTCDataResp | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTRTCRealTimeQualityDataRequest {
  /** 用户SdkAppId（如：1400xxxxxx） */
  SdkAppId: string;
  /** 开始时间，unix时间戳，单位：秒（查询时间范围根据监控仪表盘功能版本而定，基础版可查近3小时，进阶版可查近12小时） */
  StartTime: number;
  /** 结束时间，unix时间戳，单位：秒 */
  EndTime: number;
  /** 房间ID */
  RoomId?: string;
}

declare interface DescribeTRTCRealTimeQualityDataResponse {
  /** TRTC监控数据出参 */
  Data?: TRTCDataResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTRTCRealTimeQualityMetricDataRequest {
  /** 用户SdkAppId（如：1400xxxxxx） */
  SdkAppId: string;
  /** 开始时间，unix时间戳，单位：秒（查询时间范围根据监控仪表盘功能版本而定，基础版可查近3小时，进阶版可查近12小时） */
  StartTime: number;
  /** 结束时间，unix时间戳，单位：秒 */
  EndTime: number;
  /** 房间ID */
  RoomId?: string;
}

declare interface DescribeTRTCRealTimeQualityMetricDataResponse {
  /** TRTC监控数据出参 */
  Data: TRTCDataResp | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTRTCRealTimeScaleDataRequest {
  /** 用户SdkAppId（如：1400xxxxxx） */
  SdkAppId: string;
  /** 开始时间，unix时间戳，单位：秒（查询时间范围根据监控仪表盘功能版本而定，基础版可查近3小时，进阶版可查近12小时） */
  StartTime: number;
  /** 结束时间，unix时间戳，单位：秒 */
  EndTime: number;
  /** 房间ID */
  RoomId?: string;
}

declare interface DescribeTRTCRealTimeScaleDataResponse {
  /** TRTC监控数据出参 */
  Data?: TRTCDataResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTRTCRealTimeScaleMetricDataRequest {
  /** 用户SdkAppId（如：1400xxxxxx） */
  SdkAppId: string;
  /** 开始时间，unix时间戳，单位：秒（查询时间范围根据监控仪表盘功能版本而定，基础版可查近3小时，进阶版可查近12小时） */
  StartTime: number;
  /** 结束时间，unix时间戳，单位：秒 */
  EndTime: number;
  /** 房间ID */
  RoomId?: string;
}

declare interface DescribeTRTCRealTimeScaleMetricDataResponse {
  /** TRTC监控数据出参 */
  Data?: TRTCDataResp | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTrtcMcuTranscodeTimeRequest {
  /** 查询开始时间，格式为YYYY-MM-DD。 */
  StartTime: string;
  /** 查询结束时间，格式为YYYY-MM-DD。单次查询统计区间最多不能超过31天。 */
  EndTime: string;
  /** 应用ID，可不传。传应用ID时返回的是该应用的用量，不传时返回多个应用的合计值。 */
  SdkAppId?: number;
}

declare interface DescribeTrtcMcuTranscodeTimeResponse {
  /** 应用的用量信息数组。 */
  Usages: OneSdkAppIdTranscodeTimeUsagesInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTrtcRoomUsageRequest {
  /** TRTC的SdkAppId，和房间所对应的SdkAppId相同。 */
  SdkAppid: number;
  /** 查询开始时间，格式为YYYY-MM-DD HH:MM，精确到分钟级。 */
  StartTime: string;
  /** 查询结束时间，格式为YYYY-MM-DD HH:MM，单次查询不超过24h。 */
  EndTime: string;
}

declare interface DescribeTrtcRoomUsageResponse {
  /** 房间维度用量数据，csv文件格式，单位：秒。 */
  Data?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTrtcUsageRequest {
  /** 查询开始时间，格式为YYYY-MM-DD。 */
  StartTime: string;
  /** 查询结束时间，格式为YYYY-MM-DD。单次查询统计区间最多不能超过31天。 */
  EndTime: string;
  /** TRTC的SdkAppId，和房间所对应的SdkAppId相同。如果没有这个参数，返回用户下全部实时音视频应用的汇总。 */
  SdkAppId?: number;
}

declare interface DescribeTrtcUsageResponse {
  /** 用量类型，与UsageValue中各个位置的值对应。 */
  UsageKey?: string[];
  /** 各个时间点用量明细，单位:分钟 */
  UsageList?: TrtcUsage[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeUnusualEventRequest {
  /** 用户SdkAppId（如：1400xxxxxx） */
  SdkAppId: number;
  /** 查询开始时间，本地unix时间戳，单位为秒（如：1590065777）注意：支持查询14天内的数据 */
  StartTime: number;
  /** 查询结束时间，本地unix时间戳，单位为秒（如：1590065877）注意：与StartTime间隔时间不超过1小时。 */
  EndTime: number;
  /** 房间号，查询房间内任意20条以内异常体验事件 */
  RoomId?: string;
}

declare interface DescribeUnusualEventResponse {
  /** 返回的数据总条数范围：[0，20] */
  Total: number;
  /** 异常体验列表 */
  AbnormalExperienceList: AbnormalExperience[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeUserEventRequest {
  /** 通话 ID（唯一标识一次通话）： SdkAppId_RoomId（房间号）_ CreateTime（房间创建时间，unix时间戳，单位为s）例：1400xxxxxx_218695_1590065777。通过 DescribeRoomInfo（查询历史房间列表）接口获取（[查询历史房间列表](https://cloud.tencent.com/document/product/647/44050)）。 */
  CommId: string;
  /** 查询开始时间，本地unix时间戳，单位为秒（如：1590065777）注意：支持查询14天内的数据 */
  StartTime: number;
  /** 查询结束时间，本地unix时间戳，单位为秒（如：1590065877）注意：查询时间大于房间结束时间，以房间结束时间为准。 */
  EndTime: number;
  /** 用户UserId */
  UserId: string;
  /** 房间号（如：223） */
  RoomId: string;
  /** 用户SdkAppId（如：1400xxxxxx） */
  SdkAppId: number;
}

declare interface DescribeUserEventResponse {
  /** 返回的事件列表，若没有数据，会返回空数组。 */
  Data: EventList[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeUserInfoRequest {
  /** 通话 ID（唯一标识一次通话）： SdkAppId_RoomId（房间号）_ CreateTime（房间创建时间，unix时间戳，单位为s）例：1400xxxxxx_218695_1590065777。通过 DescribeRoomInfo（查询历史房间列表）接口获取（[查询历史房间列表](https://cloud.tencent.com/document/product/647/44050)）。 */
  CommId: string;
  /** 查询开始时间，本地unix时间戳，单位为秒（如：1590065777）注意：最大支持查询14天内的数据 */
  StartTime: number;
  /** 查询结束时间，本地unix时间戳，单位为秒（如：1590065877）注意：与StartTime间隔时间不超过4小时。 */
  EndTime: number;
  /** 用户SdkAppId（如：1400xxxxxx） */
  SdkAppId: number;
  /** 需查询的用户数组，不填默认返回6个用户范围：[1，100]。 */
  UserIds?: string[];
  /** 当前页数，默认为0，注意：PageNumber和PageSize 其中一个不填均默认返回6条数据。 */
  PageNumber?: number;
  /** 每页个数，默认为6，范围：[1，100]。 */
  PageSize?: number;
}

declare interface DescribeUserInfoResponse {
  /** 返回的用户总条数 */
  Total?: number;
  /** 用户信息列表 */
  UserList?: UserInformation[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeWebRecordRequest {
  /** 开始页面录制时返回的任务id */
  TaskId?: string;
  /** 发起页面录制时传递的SdkAppId */
  SdkAppId?: number;
  /** 发起录制时传递的RecordId, 传入此值时需要传递SdkAppId */
  RecordId?: string;
}

declare interface DescribeWebRecordResponse {
  /** 1: 正在录制中 */
  Status?: number;
  /** 在使用RecordId查询时返回 */
  TaskId?: string;
  /** 在使用TaskId查询时返回 */
  RecordId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DismissRoomByStrRoomIdRequest {
  /** TRTC的SDKAppId。 */
  SdkAppId: number;
  /** 字符串类型房间号。本接口仅支持解散字符串类型房间号，如需解散数字类型房间号，请使用：DismissRoom */
  RoomId: string;
}

declare interface DismissRoomByStrRoomIdResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DismissRoomRequest {
  /** TRTC的SDKAppId。 */
  SdkAppId: number;
  /** 数字房间号。本接口仅支持解散数字类型房间号，如需解散字符串类型房间号，请使用DismissRoomByStrRoomId。 */
  RoomId: number;
}

declare interface DismissRoomResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCloudRecordingRequest {
  /** TRTC的SDKAppId，和录制的房间所对应的SDKAppId相同。 */
  SdkAppId: number;
  /** 录制任务的唯一Id，在启动录制成功后会返回。 */
  TaskId: string;
  /** 需要更新的混流的布局参数。 */
  MixLayoutParams?: MixLayoutParams;
  /** 指定订阅流白名单或者黑名单。 */
  SubscribeStreamUserIds?: SubscribeStreamUserIds;
}

declare interface ModifyCloudRecordingResponse {
  /** 云录制服务分配的任务 ID。任务 ID 是对一次录制生命周期过程的唯一标识，结束录制时会失去意义。 */
  TaskId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyPictureRequest {
  /** 图片id */
  PictureId: number;
  /** 应用id */
  SdkAppId: number;
  /** 图片长度 */
  Height?: number;
  /** 图片宽度 */
  Width?: number;
  /** 显示位置x轴方向 */
  XPosition?: number;
  /** 显示位置y轴方向 */
  YPosition?: number;
}

declare interface ModifyPictureResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RemoveUserByStrRoomIdRequest {
  /** TRTC的SDKAppId。 */
  SdkAppId: number;
  /** 房间号。 */
  RoomId: string;
  /** 要移出的用户列表，最多10个。 */
  UserIds: string[];
}

declare interface RemoveUserByStrRoomIdResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RemoveUserRequest {
  /** TRTC的SDKAppId。 */
  SdkAppId: number;
  /** 房间号。 */
  RoomId: number;
  /** 要移出的用户列表，最多10个。 */
  UserIds: string[];
}

declare interface RemoveUserResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StartAIConversationRequest {
  /** TRTC的[SdkAppId](https://cloud.tencent.com/document/product/647/46351)，和开启转录任务的房间使用的SdkAppId相同。 */
  SdkAppId: number;
  /** TRTC的[RoomId](https://cloud.tencent.com/document/product/647/46351)，表示开启对话任务的房间号。 */
  RoomId: string;
  /** 机器人参数 */
  AgentConfig: AgentConfig;
  /** 调用方传入的唯一Id，可用于客户侧防止重复发起任务以及可以通过该字段查询任务状态。 */
  SessionId?: string;
  /** TRTC房间号的类型，0代表数字房间号，1代表字符串房间号。不填默认是数字房间号。 */
  RoomIdType?: number;
  /** 语音识别配置。 */
  STTConfig?: STTConfig;
  /** LLM配置。需符合openai规范，为JSON字符串，示例如下： { &emsp; "LLMType": “大模型类型"， // String 必填，如："openai" &emsp; "Model": "您的模型名称", // String 必填，指定使用的模型 "APIKey": "您的LLM API密钥", // String 必填 &emsp; "APIUrl": "https://api.xxx.com/chat/completions", // String 必填，LLM API访问的URL &emsp; "Streaming": true // Boolean 非必填，指定是否使用流式传输 &emsp;} */
  LLMConfig?: string;
  /** TTS配置，为JSON字符串，腾讯云TTS示例如下： { &emsp; "AppId": 您的应用ID, // Integer 必填 &emsp; "TTSType": "TTS类型", // String TTS类型, 固定为"tencent" &emsp; "SecretId": "您的密钥ID", // String 必填 &emsp; "SecretKey": "您的密钥Key", // String 必填 &emsp; "VoiceType": 101001, // Integer 必填，音色 ID，包括标准音色与精品音色，精品音色拟真度更高，价格不同于标准音色，请参见语音合成计费概述。完整的音色 ID 列表请参见语音合成音色列表。 &emsp; "Speed": 1.25, // Integer 非必填，语速，范围：[-2，6]，分别对应不同语速： -2: 代表0.6倍 -1: 代表0.8倍 0: 代表1.0倍（默认） 1: 代表1.2倍 2: 代表1.5倍 6: 代表2.5倍 如果需要更细化的语速，可以保留小数点后 2 位，例如0.5/1.25/2.81等。 参数值与实际语速转换，可参考 语速转换 &emsp; "Volume": 5, // Integer 非必填，音量大小，范围：[0，10]，分别对应11个等级的音量，默认值为0，代表正常音量。 &emsp; "PrimaryLanguage": "zh-CN" // String 非必填，主要语言 &emsp;} */
  TTSConfig?: string;
}

declare interface StartAIConversationResponse {
  /** 用于唯一标识对话任务。 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StartAITranscriptionRequest {
  /** TRTC的[SdkAppId](https://cloud.tencent.com/document/product/647/46351)，和开启转录任务的房间使用的SdkAppId相同。 */
  SdkAppId: number;
  /** TRTC的[RoomId](https://cloud.tencent.com/document/product/647/46351)，表示开启转录任务的房间号。 */
  RoomId: string;
  /** 转录机器人的参数。 */
  TranscriptionParams: TranscriptionParams;
  /** 调用方传入的唯一Id，服务端用来去重。注意：如果传入该参数，服务端优先使用该参数来去重。如果不传该参数，服务端的去重策略如下：- 如果TranscriptionMode字段是0，则一个房间只能开启一个任务- 如果TranscriptionMode字段是1，则一个TargetUserId只能开启一个任务 */
  SessionId?: string;
  /** TRTC房间号的类型，0代表数字房间号，1代表字符串房间号。不填默认是数字房间号。 */
  RoomIdType?: number;
  /** 语音识别配置。 */
  RecognizeConfig?: RecognizeConfig;
}

declare interface StartAITranscriptionResponse {
  /** 用于唯一标识转录任务。 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StartMCUMixTranscodeByStrRoomIdRequest {
  /** TRTC的SDKAppId。 */
  SdkAppId: number;
  /** 字符串房间号。 */
  StrRoomId: string;
  /** 混流输出控制参数。 */
  OutputParams: OutputParams;
  /** 混流输出编码参数。 */
  EncodeParams: EncodeParams;
  /** 混流输出布局参数。 */
  LayoutParams: LayoutParams;
  /** 第三方CDN转推参数。如需转推至腾讯云云直播，此参数无需填写，会默认转推 */
  PublishCdnParams?: PublishCdnParams;
}

declare interface StartMCUMixTranscodeByStrRoomIdResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StartMCUMixTranscodeRequest {
  /** TRTC的SDKAppId。 */
  SdkAppId: number;
  /** 房间号。 */
  RoomId: number;
  /** 混流输出控制参数。 */
  OutputParams: OutputParams;
  /** 混流输出编码参数。 */
  EncodeParams: EncodeParams;
  /** 混流输出布局参数。 */
  LayoutParams: LayoutParams;
  /** 第三方CDN转推参数。如需转推至腾讯云云直播，此参数无需填写，会默认转推 */
  PublishCdnParams?: PublishCdnParams;
}

declare interface StartMCUMixTranscodeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StartPublishCdnStreamRequest {
  /** TRTC的[SdkAppId](https://cloud.tencent.com/document/product/647/46351)，和转推的房间所对应的SdkAppId相同。 */
  SdkAppId: number;
  /** 主房间信息RoomId，转推的TRTC房间所对应的RoomId。 */
  RoomId: string;
  /** 主房间信息RoomType，必须和转推的房间所对应的RoomId类型相同，0为整型房间号，1为字符串房间号。 */
  RoomIdType: number;
  /** 转推服务加入TRTC房间的机器人参数。 */
  AgentParams: AgentParams;
  /** 是否转码，0表示无需转码，1表示需要转码。是否收取转码费是由WithTranscoding参数决定的，WithTranscoding为0，表示旁路转推，不会收取转码费用，WithTranscoding为1，表示混流转推，会收取转码费用。 */
  WithTranscoding: number;
  /** 转推流的音频编码参数。由于音频是必转码的（不会收取转码费用），所以启动任务的时候，必须填写。 */
  AudioParams?: McuAudioParams;
  /** 转推流的视频编码参数，不填表示纯音频转推。 */
  VideoParams?: McuVideoParams;
  /** 需要单流旁路转推的用户上行参数，单流旁路转推时，WithTranscoding需要设置为0。 */
  SingleSubscribeParams?: SingleSubscribeParams;
  /** 转推的CDN参数，一个任务最多支持10个推流URL。和回推房间参数必须要有一个。 */
  PublishCdnParams?: McuPublishCdnParam[];
  /** 混流SEI参数 */
  SeiParams?: McuSeiParams;
  /** 回推房间信息，一个任务最多支持回推10个房间，和转推CDN参数必须要有一个。注：回推房间需使用10.4及以上SDK版本，如您有需求，请联系腾讯云技术支持。 */
  FeedBackRoomParams?: McuFeedBackRoomParams[];
  /** 转推录制参数，[参考文档](https://cloud.tencent.com/document/product/647/111748)。 */
  RecordParams?: McuRecordParams;
}

declare interface StartPublishCdnStreamResponse {
  /** 用于唯一标识转推任务，由腾讯云服务端生成，后续更新和停止请求都需要携带TaskiD参数。 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StartStreamIngestRequest {
  /** TRTC的[SdkAppId](https://cloud.tencent.com/document/product/647/46351)，和TRTC的房间所对应的SdkAppId相同。 */
  SdkAppId: number;
  /** TRTC的[RoomId](https://cloud.tencent.com/document/product/647/46351)，录制的TRTC房间所对应的RoomId。 */
  RoomId: string;
  /** TRTC房间号的类型。【*注意】必须和录制的房间所对应的RoomId类型相同:0: 字符串类型的RoomId1: 32位整型的RoomId（默认） */
  RoomIdType: number;
  /** 输入在线媒体流机器人的UserId，用于进房发起拉流转推任务。 */
  UserId: string;
  /** 输入在线媒体流机器人UserId对应的校验签名，即UserId和UserSig相当于机器人进房的登录密码，具体计算方法请参考TRTC计算[UserSig](https://cloud.tencent.com/document/product/647/45910)的方案。 */
  UserSig: string;
  /** 源流URL【必填】。如果是视频流，分辨率请保持不变。 */
  StreamUrl?: string;
  /** TRTC房间权限加密串，只有在TRTC控制台启用了高级权限控制的时候需要携带，在TRTC控制台如果开启高级权限控制后，TRTC 的后台服务系统会校验一个叫做 [PrivateMapKey] 的“权限票据”，权限票据中包含了一个加密后的 RoomId 和一个加密后的“权限位列表”。由于 PrivateMapKey 中包含 RoomId，所以只提供了 UserSig 没有提供 PrivateMapKey 时，并不能进入指定的房间。 */
  PrivateMapKey?: string;
  /** 【本字段已废弃】视频编码参数。可选，如果不填，保持原始流的参数。 */
  VideoEncodeParams?: VideoEncodeParams;
  /** 【本字段已废弃】音频编码参数。可选，如果不填，保持原始流的参数。 */
  AudioEncodeParams?: AudioEncodeParams;
  /** 【本字段已废弃，请使用 StreamUrl 字段】源流URL，支持一个地址。 */
  SourceUrl?: string[];
  /** 指定视频从某个秒时间戳播放 */
  SeekSecond?: number;
  /** 开启自动旁路推流，请确认控制台已经开启该功能。 */
  AutoPush?: boolean;
  /** 循环播放次数, 取值范围[-1, 1000], 默认1次。 - 0 无效值 - -1 循环播放, 需要主动调用停止接口或设置MaxDuration */
  RepeatNum?: number;
  /** 循环播放最大时长,仅支持RepeatNum设置-1时生效，取值范围[1, 10080]，单位分钟。 */
  MaxDuration?: number;
  /** 音量，取值范围[0, 100]，默认100，表示原音量。 */
  Volume?: number;
}

declare interface StartStreamIngestResponse {
  /** 输入在线媒体流的任务 ID。任务 ID 是对一次输入在线媒体流生命周期过程的唯一标识，结束任务时会失去意义。任务 ID 需要业务保存下来，作为下次针对这个任务操作的参数。 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StartWebRecordRequest {
  /** 需要录制的网页URL */
  RecordUrl: string;
  /** 录制最大时长限制， 单位 s, 合法取值范围[1800, 36000], 默认 36000s(10 小时) */
  MaxDurationLimit?: number;
  /** 【必填】云存储相关的参数，目前支持腾讯云对象存储以及腾讯云云点播VOD，不支持第三方云存储；输出文件的存储格式仅支持hls或mp4 */
  StorageParams?: StorageParams;
  /** 页面录制视频参数 */
  WebRecordVideoParams?: WebRecordVideoParams;
  /** 【必填】TRTC的SdkAppId */
  SdkAppId?: number;
  /** 当对重复任务敏感时，请关注此值： 为了避免任务在短时间内重复发起，导致任务重复传入录制RecordId来标识此次任务， 小于32字节，若携带RecordId发起两次以上的开始录制请求，任务只会启动一个，第二个报错FailedOperation.TaskExist。注意StartWebRecord调用失败时而非FailedOperation.TaskExist错误，请更换RecordId重新发起。 */
  RecordId?: string;
  /** 若您想要推流到CDN，可以使用PublishCdnParams.N参数设置，支持最多同时推流到10个CDN地址。若转推地址是腾讯云CDN时，请将IsTencentCdn明确设置为1 */
  PublishCdnParams?: McuPublishCdnParam[];
  /** 录制页面资源加载的超时时间，单位：秒。默认值为 0 秒，该值需大于等于 0秒，且小于等于 60秒。录制页面未启用页面加载超时检测时，请勿设置此参数。 */
  ReadyTimeout?: number;
  /** 渲染移动模式参数；不准备渲染移动模式页面时，请勿设置此参数。 */
  EmulateMobileParams?: EmulateMobileParams;
}

declare interface StartWebRecordResponse {
  /** 录制任务的唯一Id */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StopAIConversationRequest {
  /** 唯一标识任务。 */
  TaskId: string;
}

declare interface StopAIConversationResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StopAITranscriptionRequest {
  /** 唯一标识转录任务。 */
  TaskId: string;
}

declare interface StopAITranscriptionResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StopMCUMixTranscodeByStrRoomIdRequest {
  /** TRTC的SDKAppId。 */
  SdkAppId: number;
  /** 字符串房间号。 */
  StrRoomId: string;
}

declare interface StopMCUMixTranscodeByStrRoomIdResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StopMCUMixTranscodeRequest {
  /** TRTC的SDKAppId。 */
  SdkAppId: number;
  /** 房间号。 */
  RoomId: number;
}

declare interface StopMCUMixTranscodeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StopPublishCdnStreamRequest {
  /** TRTC的[SdkAppId](https://cloud.tencent.com/document/product/647/46351)，和转推的房间所对应的SdkAppId相同。 */
  SdkAppId: number;
  /** 唯一标识转推任务。 */
  TaskId: string;
  /** 录制任务 key，标识一个录制任务，对应转推任务发起时指定 RecordKey；如果填写该参数，表示调用者希望立即结束该录制任务。当RecordKey 指定的录制任务正在录制当前转推任务时，录制任务立即结束，否则录制任务不受影响。如果没有填写该参数，但是转推任务发起时填写了 RecordKey，则表示在续录等待时间结束后才结束录制任务，续录等待期间可以使用相同的 RecordKey 发起新的转推任务，和当前转推任务录制到同一文件。 */
  RecordKey?: string;
}

declare interface StopPublishCdnStreamResponse {
  /** 转推任务唯一的String Id */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StopStreamIngestRequest {
  /** TRTC的SDKAppId，和任务的房间所对应的SDKAppId相同。 */
  SdkAppId: number;
  /** 任务的唯一Id，在启动任务成功后会返回。 */
  TaskId: string;
}

declare interface StopStreamIngestResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StopWebRecordRequest {
  /** 需要停止的任务Id */
  TaskId: string;
}

declare interface StopWebRecordResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateAIConversationRequest {
  /** 唯一标识一个任务 */
  TaskId: string;
  /** 不填写则不进行更新，机器人的欢迎语 */
  WelcomeMessage?: string;
  /** 不填写则不进行更新。智能打断模式，0表示服务端自动打断，1表示服务端不打断，由端上发送打断信令进行打断 */
  InterruptMode?: number;
  /** 不填写则不进行更新。InterruptMode为0时使用，单位为毫秒，默认为500ms。表示服务端检测到持续InterruptSpeechDuration毫秒的人声则进行打断 */
  InterruptSpeechDuration?: number;
  /** 不填写则不进行更新，LLM配置，详情见StartAIConversation接口 */
  LLMConfig?: string;
  /** 不填写则不进行更新，TTS配置，详情见StartAIConversation接口 */
  TTSConfig?: string;
}

declare interface UpdateAIConversationResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdatePublishCdnStreamRequest {
  /** TRTC的[SdkAppId](https://cloud.tencent.com/document/product/647/46351)，和转推的房间所对应的SdkAppId相同。 */
  SdkAppId: number;
  /** 唯一标识转推任务。 */
  TaskId: string;
  /** 客户保证同一个任务，每次更新请求中的SequenceNumber递增，防止请求乱序。 */
  SequenceNumber: number;
  /** 是否转码，0表示无需转码，1表示需要转码。 */
  WithTranscoding: number;
  /** 更新相关参数，只支持更新参与混音的主播列表参数，不支持更新Codec、采样率、码率和声道数。不填表示不更新此参数。 */
  AudioParams?: McuAudioParams;
  /** 更新视频相关参数，转码时支持更新除编码类型之外的编码参数，视频布局参数，背景图片和背景颜色参数，水印参数。不填表示不更新此参数。 */
  VideoParams?: McuVideoParams;
  /** 更新单流转推的用户上行参数，仅在非转码时有效。不填表示不更新此参数。 */
  SingleSubscribeParams?: SingleSubscribeParams;
  /** 更新转推的CDN参数。不填表示不更新此参数。 */
  PublishCdnParams?: McuPublishCdnParam[];
  /** 混流SEI参数 */
  SeiParams?: McuSeiParams;
  /** 回推房间信息 */
  FeedBackRoomParams?: McuFeedBackRoomParams[];
}

declare interface UpdatePublishCdnStreamResponse {
  /** 转推任务唯一的String Id */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateStreamIngestRequest {
  /** TRTC的SDKAppId，和任务的房间所对应的SDKAppId相同 */
  SdkAppId: number;
  /** 任务的唯一Id，在启动任务成功后会返回。 */
  TaskId: string;
  /** 源流URL。 */
  StreamUrl?: string;
  /** 音量，取值范围[0, 100]，默认100，表示原音量。 */
  Volume?: number;
}

declare interface UpdateStreamIngestResponse {
  /** 任务的状态信息。InProgress：表示当前任务正在进行中。NotExist：表示当前任务不存在。示例值：InProgress */
  Status?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Trtc 实时音视频} */
declare interface Trtc {
  (): Versions;
  /** 控制AI对话 {@link ControlAIConversationRequest} {@link ControlAIConversationResponse} */
  ControlAIConversation(data: ControlAIConversationRequest, config?: AxiosRequestConfig): AxiosPromise<ControlAIConversationResponse>;
  /** 创建基础审核任务 {@link CreateBasicModerationRequest} {@link CreateBasicModerationResponse} */
  CreateBasicModeration(data: CreateBasicModerationRequest, config?: AxiosRequestConfig): AxiosPromise<CreateBasicModerationResponse>;
  /** 开始云端录制 {@link CreateCloudRecordingRequest} {@link CreateCloudRecordingResponse} */
  CreateCloudRecording(data: CreateCloudRecordingRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCloudRecordingResponse>;
  /** 上传图片 {@link CreatePictureRequest} {@link CreatePictureResponse} */
  CreatePicture(data: CreatePictureRequest, config?: AxiosRequestConfig): AxiosPromise<CreatePictureResponse>;
  /** 停止基础审核任务 {@link DeleteBasicModerationRequest} {@link DeleteBasicModerationResponse} */
  DeleteBasicModeration(data: DeleteBasicModerationRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteBasicModerationResponse>;
  /** 停止云端录制任务 {@link DeleteCloudRecordingRequest} {@link DeleteCloudRecordingResponse} */
  DeleteCloudRecording(data: DeleteCloudRecordingRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCloudRecordingResponse>;
  /** 删除图片 {@link DeletePictureRequest} {@link DeletePictureResponse} */
  DeletePicture(data: DeletePictureRequest, config?: AxiosRequestConfig): AxiosPromise<DeletePictureResponse>;
  /** 查询AI对话状态 {@link DescribeAIConversationRequest} {@link DescribeAIConversationResponse} */
  DescribeAIConversation(data?: DescribeAIConversationRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAIConversationResponse>;
  /** 查询AI转录任务状态 {@link DescribeAITranscriptionRequest} {@link DescribeAITranscriptionResponse} */
  DescribeAITranscription(data: DescribeAITranscriptionRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAITranscriptionResponse>;
  /** 查询历史用户列表与通话指标 {@link DescribeCallDetailInfoRequest} {@link DescribeCallDetailInfoResponse} */
  DescribeCallDetailInfo(data: DescribeCallDetailInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCallDetailInfoResponse>;
  /** 查询云端录制状态 {@link DescribeCloudRecordingRequest} {@link DescribeCloudRecordingResponse} */
  DescribeCloudRecording(data: DescribeCloudRecordingRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudRecordingResponse>;
  /** 查询TRTC混流转码用量 {@link DescribeMixTranscodingUsageRequest} {@link DescribeMixTranscodingUsageResponse} */
  DescribeMixTranscodingUsage(data: DescribeMixTranscodingUsageRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMixTranscodingUsageResponse>;
  /** 查询图片 {@link DescribePictureRequest} {@link DescribePictureResponse} */
  DescribePicture(data: DescribePictureRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePictureResponse>;
  /** 查询云端录制计费时长（旧） {@link DescribeRecordStatisticRequest} {@link DescribeRecordStatisticResponse} */
  DescribeRecordStatistic(data: DescribeRecordStatisticRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRecordStatisticResponse>;
  /** 查询TRTC录制用量 {@link DescribeRecordingUsageRequest} {@link DescribeRecordingUsageResponse} */
  DescribeRecordingUsage(data: DescribeRecordingUsageRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRecordingUsageResponse>;
  /** 查询TRTC旁路转推用量 {@link DescribeRelayUsageRequest} {@link DescribeRelayUsageResponse} */
  DescribeRelayUsage(data: DescribeRelayUsageRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRelayUsageResponse>;
  /** 查询历史房间列表 {@link DescribeRoomInfoRequest} {@link DescribeRoomInfoResponse} */
  DescribeRoomInfo(data: DescribeRoomInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRoomInfoResponse>;
  /** 查询历史房间和用户数 {@link DescribeScaleInfoRequest} {@link DescribeScaleInfoResponse} */
  DescribeScaleInfo(data: DescribeScaleInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeScaleInfoResponse>;
  /** 查询输入在线媒体流 {@link DescribeStreamIngestRequest} {@link DescribeStreamIngestResponse} */
  DescribeStreamIngest(data: DescribeStreamIngestRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeStreamIngestResponse>;
  /** 查询TRTC数据大盘质量相关数据 {@link DescribeTRTCMarketQualityDataRequest} {@link DescribeTRTCMarketQualityDataResponse} */
  DescribeTRTCMarketQualityData(data: DescribeTRTCMarketQualityDataRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTRTCMarketQualityDataResponse>;
  /** 查询TRTC数据大盘质量指标 {@link DescribeTRTCMarketQualityMetricDataRequest} {@link DescribeTRTCMarketQualityMetricDataResponse} */
  DescribeTRTCMarketQualityMetricData(data: DescribeTRTCMarketQualityMetricDataRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTRTCMarketQualityMetricDataResponse>;
  /** 查询TRTC数据大盘规模数据 {@link DescribeTRTCMarketScaleDataRequest} {@link DescribeTRTCMarketScaleDataResponse} */
  DescribeTRTCMarketScaleData(data: DescribeTRTCMarketScaleDataRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTRTCMarketScaleDataResponse>;
  /** 查询TRTC数据大盘规模指标 {@link DescribeTRTCMarketScaleMetricDataRequest} {@link DescribeTRTCMarketScaleMetricDataResponse} */
  DescribeTRTCMarketScaleMetricData(data: DescribeTRTCMarketScaleMetricDataRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTRTCMarketScaleMetricDataResponse>;
  /** 查询TRTC实时监控质量数据 {@link DescribeTRTCRealTimeQualityDataRequest} {@link DescribeTRTCRealTimeQualityDataResponse} */
  DescribeTRTCRealTimeQualityData(data: DescribeTRTCRealTimeQualityDataRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTRTCRealTimeQualityDataResponse>;
  /** 查询TRTC实时监控质量指标 {@link DescribeTRTCRealTimeQualityMetricDataRequest} {@link DescribeTRTCRealTimeQualityMetricDataResponse} */
  DescribeTRTCRealTimeQualityMetricData(data: DescribeTRTCRealTimeQualityMetricDataRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTRTCRealTimeQualityMetricDataResponse>;
  /** 查询TRTC实时监控规模数据 {@link DescribeTRTCRealTimeScaleDataRequest} {@link DescribeTRTCRealTimeScaleDataResponse} */
  DescribeTRTCRealTimeScaleData(data: DescribeTRTCRealTimeScaleDataRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTRTCRealTimeScaleDataResponse>;
  /** 查询TRTC实时监控规模指标 {@link DescribeTRTCRealTimeScaleMetricDataRequest} {@link DescribeTRTCRealTimeScaleMetricDataResponse} */
  DescribeTRTCRealTimeScaleMetricData(data: DescribeTRTCRealTimeScaleMetricDataRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTRTCRealTimeScaleMetricDataResponse>;
  /** 查询旁路转码计费时长(旧) {@link DescribeTrtcMcuTranscodeTimeRequest} {@link DescribeTrtcMcuTranscodeTimeResponse} */
  DescribeTrtcMcuTranscodeTime(data: DescribeTrtcMcuTranscodeTimeRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTrtcMcuTranscodeTimeResponse>;
  /** 查询TRTC音视频房间维度用量 {@link DescribeTrtcRoomUsageRequest} {@link DescribeTrtcRoomUsageResponse} */
  DescribeTrtcRoomUsage(data: DescribeTrtcRoomUsageRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTrtcRoomUsageResponse>;
  /** 查询TRTC音视频用量 {@link DescribeTrtcUsageRequest} {@link DescribeTrtcUsageResponse} */
  DescribeTrtcUsage(data: DescribeTrtcUsageRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTrtcUsageResponse>;
  /** 查询异常体验事件 {@link DescribeUnusualEventRequest} {@link DescribeUnusualEventResponse} */
  DescribeUnusualEvent(data: DescribeUnusualEventRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUnusualEventResponse>;
  /** 查询详细事件 {@link DescribeUserEventRequest} {@link DescribeUserEventResponse} */
  DescribeUserEvent(data: DescribeUserEventRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUserEventResponse>;
  /** 查询历史用户列表 {@link DescribeUserInfoRequest} {@link DescribeUserInfoResponse} */
  DescribeUserInfo(data: DescribeUserInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUserInfoResponse>;
  /** 查询页面录制 {@link DescribeWebRecordRequest} {@link DescribeWebRecordResponse} */
  DescribeWebRecord(data?: DescribeWebRecordRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWebRecordResponse>;
  /** 解散房间 {@link DismissRoomRequest} {@link DismissRoomResponse} */
  DismissRoom(data: DismissRoomRequest, config?: AxiosRequestConfig): AxiosPromise<DismissRoomResponse>;
  /** 解散房间（字符串房间号） {@link DismissRoomByStrRoomIdRequest} {@link DismissRoomByStrRoomIdResponse} */
  DismissRoomByStrRoomId(data: DismissRoomByStrRoomIdRequest, config?: AxiosRequestConfig): AxiosPromise<DismissRoomByStrRoomIdResponse>;
  /** 更新云端录制任务 {@link ModifyCloudRecordingRequest} {@link ModifyCloudRecordingResponse} */
  ModifyCloudRecording(data: ModifyCloudRecordingRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCloudRecordingResponse>;
  /** 修改图片 {@link ModifyPictureRequest} {@link ModifyPictureResponse} */
  ModifyPicture(data: ModifyPictureRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyPictureResponse>;
  /** 移出用户 {@link RemoveUserRequest} {@link RemoveUserResponse} */
  RemoveUser(data: RemoveUserRequest, config?: AxiosRequestConfig): AxiosPromise<RemoveUserResponse>;
  /** 移出用户（字符串房间号） {@link RemoveUserByStrRoomIdRequest} {@link RemoveUserByStrRoomIdResponse} */
  RemoveUserByStrRoomId(data: RemoveUserByStrRoomIdRequest, config?: AxiosRequestConfig): AxiosPromise<RemoveUserByStrRoomIdResponse>;
  /** 开始AI对话任务 {@link StartAIConversationRequest} {@link StartAIConversationResponse} */
  StartAIConversation(data: StartAIConversationRequest, config?: AxiosRequestConfig): AxiosPromise<StartAIConversationResponse>;
  /** 开始AI转录任务 {@link StartAITranscriptionRequest} {@link StartAITranscriptionResponse} */
  StartAITranscription(data: StartAITranscriptionRequest, config?: AxiosRequestConfig): AxiosPromise<StartAITranscriptionResponse>;
  /** 启动云端混流（旧） {@link StartMCUMixTranscodeRequest} {@link StartMCUMixTranscodeResponse} */
  StartMCUMixTranscode(data: StartMCUMixTranscodeRequest, config?: AxiosRequestConfig): AxiosPromise<StartMCUMixTranscodeResponse>;
  /** 启动云端混流（字符串房间号）（旧） {@link StartMCUMixTranscodeByStrRoomIdRequest} {@link StartMCUMixTranscodeByStrRoomIdResponse} */
  StartMCUMixTranscodeByStrRoomId(data: StartMCUMixTranscodeByStrRoomIdRequest, config?: AxiosRequestConfig): AxiosPromise<StartMCUMixTranscodeByStrRoomIdResponse>;
  /** 启动转推任务 {@link StartPublishCdnStreamRequest} {@link StartPublishCdnStreamResponse} */
  StartPublishCdnStream(data: StartPublishCdnStreamRequest, config?: AxiosRequestConfig): AxiosPromise<StartPublishCdnStreamResponse>;
  /** 开启输入在线媒体流 {@link StartStreamIngestRequest} {@link StartStreamIngestResponse} */
  StartStreamIngest(data: StartStreamIngestRequest, config?: AxiosRequestConfig): AxiosPromise<StartStreamIngestResponse>;
  /** 开始页面录制 {@link StartWebRecordRequest} {@link StartWebRecordResponse} */
  StartWebRecord(data: StartWebRecordRequest, config?: AxiosRequestConfig): AxiosPromise<StartWebRecordResponse>;
  /** 停止AI对话 {@link StopAIConversationRequest} {@link StopAIConversationResponse} */
  StopAIConversation(data: StopAIConversationRequest, config?: AxiosRequestConfig): AxiosPromise<StopAIConversationResponse>;
  /** 停止AI转录任务 {@link StopAITranscriptionRequest} {@link StopAITranscriptionResponse} */
  StopAITranscription(data: StopAITranscriptionRequest, config?: AxiosRequestConfig): AxiosPromise<StopAITranscriptionResponse>;
  /** 结束云端混流（旧） {@link StopMCUMixTranscodeRequest} {@link StopMCUMixTranscodeResponse} */
  StopMCUMixTranscode(data: StopMCUMixTranscodeRequest, config?: AxiosRequestConfig): AxiosPromise<StopMCUMixTranscodeResponse>;
  /** 结束云端混流（字符串房间号） {@link StopMCUMixTranscodeByStrRoomIdRequest} {@link StopMCUMixTranscodeByStrRoomIdResponse} */
  StopMCUMixTranscodeByStrRoomId(data: StopMCUMixTranscodeByStrRoomIdRequest, config?: AxiosRequestConfig): AxiosPromise<StopMCUMixTranscodeByStrRoomIdResponse>;
  /** 停止转推任务 {@link StopPublishCdnStreamRequest} {@link StopPublishCdnStreamResponse} */
  StopPublishCdnStream(data: StopPublishCdnStreamRequest, config?: AxiosRequestConfig): AxiosPromise<StopPublishCdnStreamResponse>;
  /** 停止输入在线媒体流 {@link StopStreamIngestRequest} {@link StopStreamIngestResponse} */
  StopStreamIngest(data: StopStreamIngestRequest, config?: AxiosRequestConfig): AxiosPromise<StopStreamIngestResponse>;
  /** 停止页面录制 {@link StopWebRecordRequest} {@link StopWebRecordResponse} */
  StopWebRecord(data: StopWebRecordRequest, config?: AxiosRequestConfig): AxiosPromise<StopWebRecordResponse>;
  /** 更新AI对话 {@link UpdateAIConversationRequest} {@link UpdateAIConversationResponse} */
  UpdateAIConversation(data: UpdateAIConversationRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateAIConversationResponse>;
  /** 更新转推任务 {@link UpdatePublishCdnStreamRequest} {@link UpdatePublishCdnStreamResponse} */
  UpdatePublishCdnStream(data: UpdatePublishCdnStreamRequest, config?: AxiosRequestConfig): AxiosPromise<UpdatePublishCdnStreamResponse>;
  /** 更新输入在线媒体流 {@link UpdateStreamIngestRequest} {@link UpdateStreamIngestResponse} */
  UpdateStreamIngest(data: UpdateStreamIngestRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateStreamIngestResponse>;
}

export declare type Versions = ["2019-07-22"];

export default Trtc;
