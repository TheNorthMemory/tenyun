/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 鉴权参数 */
declare interface AuthParam {
  /** 应用SdkAppId */
  SdkAppId: number;
  /** 用户ID */
  UserId: string;
  /** 用户ID对应的签名 */
  UserSig: string;
}

/** 混流画布参数 */
declare interface Canvas {
  /** 混流画布宽高配置 */
  LayoutParams: LayoutParams;
  /** 背景颜色，默认为黑色，格式为RGB格式，如红色为"#FF0000" */
  BackgroundColor?: string;
}

/** 实时录制视频拼接参数 */
declare interface Concat {
  /** 是否开启拼接功能在开启了视频拼接功能的情况下，实时录制服务会把同一个用户因为暂停导致的多段视频拼接成一个视频 */
  Enabled: boolean;
  /** 视频拼接时使用的垫片图片下载地址，不填默认用全黑的图片进行视频垫片 */
  Image?: string;
}

/** 自定义混流布局参数 */
declare interface CustomLayout {
  /** 混流画布参数 */
  Canvas: Canvas;
  /** 流布局参数，每路流的布局不能超出画布区域 */
  InputStreamList: StreamLayout[];
}

/** 实时录制中出现的用户视频流断流次数统计 */
declare interface Interrupt {
  /** 用户ID */
  UserId: string | null;
  /** 视频流断流次数 */
  Count: number | null;
}

/** 自定义混流配置布局参数 */
declare interface LayoutParams {
  /** 流画面宽，取值范围[2,3000] */
  Width: number;
  /** 流画面高，取值范围[2,3000] */
  Height: number;
  /** 当前画面左上角顶点相对于Canvas左上角顶点的x轴偏移量，默认为0，取值范围[0,3000] */
  X?: number;
  /** 当前画面左上角顶点相对于Canvas左上角顶点的y轴偏移量，默认为0， 取值范围[0,3000] */
  Y?: number;
  /** 画面z轴位置，默认为0z轴确定了重叠画面的遮盖顺序，z轴值大的画面处于顶层 */
  ZOrder?: number;
}

/** 混流配置 */
declare interface MixStream {
  /** 是否开启混流 */
  Enabled: boolean;
  /** 是否禁用音频混流 */
  DisableAudio?: boolean;
  /** 内置混流布局模板ID, 取值 [1, 2], 区别见内置混流布局模板样式示例说明在没有填Custom字段时候，ModelId是必填的 */
  ModelId?: number;
  /** 老师用户ID此字段只有在ModelId填了的情况下生效填写TeacherId的效果是把指定为TeacherId的用户视频流显示在内置模板的第一个小画面中 */
  TeacherId?: string;
  /** 自定义混流布局参数当此字段存在时，ModelId 及 TeacherId 字段将被忽略 */
  Custom?: CustomLayout;
}

/** 拼接视频中被忽略的时间段 */
declare interface OmittedDuration {
  /** 录制暂停时间戳对应的视频播放时间(单位: 毫秒) */
  VideoTime: number;
  /** 录制暂停时间戳(单位: 毫秒) */
  PauseTime: number;
  /** 录制恢复时间戳(单位: 毫秒) */
  ResumeTime: number;
}

/** 录制控制参数， 用于指定全局录制控制及具体流录制控制参数，比如设置需要对哪些流进行录制，是否只录制小画面等 */
declare interface RecordControl {
  /** 设置是否开启录制控制参数，只有设置为true的时候，录制控制参数才生效。 */
  Enabled: boolean;
  /** 设置是否禁用录制的全局控制参数。一般与`StreamControls`参数配合使用。true - 所有流都不录制。false - 所有流都录制。默认为false。这里的设置对所有流都生效，如果同时在 `StreamControls` 列表中针对指定流设置了控制参数，则优先采用`StreamControls`中设置的控制参数。 */
  DisableRecord?: boolean;
  /** 设置是否禁用所有流的音频录制的全局控制参数。一般与`StreamControls`参数配合使用。true - 所有流的录制都不对音频进行录制。false - 所有流的录制都需要对音频进行录制。默认为false。这里的设置对所有流都生效，如果同时在 `StreamControls` 列表中针对指定流设置了控制参数，则优先采用`StreamControls`中设置的控制参数。 */
  DisableAudio?: boolean;
  /** 设置是否所有流都只录制小画面的全局控制参数。一般与`StreamControls`参数配合使用。true - 所有流都只录制小画面。设置为true时，请确保上行端在推流的时候同时上行了小画面，否则录制视频可能是黑屏。false - 所有流都录制大画面，默认为false。这里的设置对所有流都生效，如果同时在 `StreamControls` 列表中针对指定流设置了控制参数，则优先采用`StreamControls`中设置的控制参数。 */
  PullSmallVideo?: boolean;
  /** 针对具体流指定控制参数，如果列表为空，则所有流采用全局配置的控制参数进行录制。列表不为空，则列表中指定的流将优先按此列表指定的控制参数进行录制。 */
  StreamControls?: StreamControl[];
}

/** 板书文件存储cos参数 */
declare interface SnapshotCOS {
  /** cos所在腾讯云帐号uin */
  Uin: number;
  /** cos所在地区 */
  Region: string;
  /** cos存储桶名称 */
  Bucket: string;
  /** 板书文件存储根目录 */
  TargetDir?: string;
  /** CDN加速域名 */
  Domain?: string;
}

/** 白板板书结果 */
declare interface SnapshotResult {
  /** 任务执行错误码 */
  ErrorCode: string | null;
  /** 任务执行错误信息 */
  ErrorMessage: string | null;
  /** 快照生成图片总数 */
  Total: number | null;
  /** 快照图片链接列表 */
  Snapshots: string[] | null;
}

/** 生成白板板书时的白板参数，例如白板宽高等 */
declare interface SnapshotWhiteboard {
  /** 白板宽度大小，默认为1280，有效取值范围[0，2560] */
  Width?: number;
  /** 白板高度大小，默认为720，有效取值范围[0，2560] */
  Height?: number;
  /** 白板初始化参数的JSON转义字符串，透传到白板 SDK */
  InitParams?: string;
}

/** 指定流录制的控制参数，比如是否禁用音频、视频是录制大画面还是录制小画面等 */
declare interface StreamControl {
  /** 视频流ID视频流ID的取值含义如下：1. tic_record_user - 表示白板视频流2. tic_substream - 表示辅路视频流3. 特定用户ID - 表示指定用户的视频流在实际录制过程中，视频流ID的匹配规则为前缀匹配，只要真实流ID的前缀与指定的流ID一致就认为匹配成功。 */
  StreamId: string;
  /** 设置是否对此路流开启录制。true - 表示不对这路流进行录制，录制结果将不包含这路流的视频。false - 表示需要对这路流进行录制，录制结果会包含这路流的视频。默认为 false。 */
  DisableRecord?: boolean;
  /** 设置是否禁用这路流的音频录制。true - 表示不对这路流的音频进行录制，录制结果里这路流的视频将会没有声音。false - 录制视频会保留音频，如果设置为true，则录制视频会丢弃这路流的音频。默认为 false。 */
  DisableAudio?: boolean;
  /** 设置当前流录制视频是否只录制小画面。true - 录制小画面。设置为true时，请确保上行端同时上行了小画面，否则录制视频可能是黑屏。false - 录制大画面。默认为 false。 */
  PullSmallVideo?: boolean;
}

/** 流布局参数 */
declare interface StreamLayout {
  /** 流布局配置参数 */
  LayoutParams: LayoutParams;
  /** 视频流ID流ID的取值含义如下：1. tic_record_user - 表示当前画面用于显示白板视频流2. tic_substream - 表示当前画面用于显示辅路视频流3. 特定用户ID - 表示当前画面用于显示指定用户的视频流4. 不填 - 表示当前画面用于备选，当有新的视频流加入时，会从这些备选的空位中选择一个没有被占用的位置来显示新的视频流画面 */
  InputStreamId?: string;
  /** 背景颜色，默认为黑色，格式为RGB格式，如红色为"#FF0000" */
  BackgroundColor?: string;
  /** 视频画面填充模式。0 - 自适应模式，对视频画面进行等比例缩放，在指定区域内显示完整的画面。此模式可能存在黑边。1 - 全屏模式，对视频画面进行等比例缩放，让画面填充满整个指定区域。此模式不会存在黑边，但会将超出区域的那一部分画面裁剪掉。 */
  FillMode?: number;
}

/** 查询指标返回的时间序列 */
declare interface TimeValue {
  /** Unix时间戳，单位秒 */
  Time: number;
  /** 查询指标对应当前时间的值 */
  Value: number;
}

/** 互动白板用量信息 */
declare interface UsageDataItem {
  /** 日期，格式为YYYY-MM-DD */
  Time: string;
  /** 白板应用SDKAppID */
  SdkAppId: number;
  /** 互动白板子产品，请求参数传入的一致- sp_tiw_board: 互动白板时长- sp_tiw_dt: 动态转码页数- sp_tiw_st: 静态转码页数- sp_tiw_ric: 实时录制时长 */
  SubProduct: string;
  /** 用量值- 静态转码、动态转码单位为页- 白板时长、实时录制时长单位为分钟 */
  Value: number;
}

/** 视频信息 */
declare interface VideoInfo {
  /** 视频开始播放的时间（单位：毫秒） */
  VideoPlayTime: number;
  /** 视频大小（字节） */
  VideoSize: number;
  /** 视频格式 */
  VideoFormat: string;
  /** 视频播放时长（单位：毫秒） */
  VideoDuration: number;
  /** 视频文件URL */
  VideoUrl: string;
  /** 视频文件Id */
  VideoId: string;
  /** 视频流类型 - 0：摄像头视频 - 1：屏幕分享视频- 2：白板视频 - 3：混流视频- 4：纯音频（mp3) */
  VideoType: number;
  /** 摄像头/屏幕分享视频所属用户的 Id（白板视频为空、混流视频tic_mixstream_房间号_混流布局类型、辅路视频tic_substream_用户Id） */
  UserId: string;
  /** 视频分辨率的宽 */
  Width: number;
  /** 视频分辨率的高 */
  Height: number;
}

/** 实时录制白板参数，例如白板宽高等 */
declare interface Whiteboard {
  /** 实时录制结果里白板视频宽，取值必须大于等于2，默认为1280 */
  Width?: number;
  /** 实时录制结果里白板视频高，取值必须大于等于2，默认为960 */
  Height?: number;
  /** 白板初始化参数，透传到白板 SDK */
  InitParam?: string;
}

/** 白板推流备份相关请求参数 */
declare interface WhiteboardPushBackupParam {
  /** 用于白板推流服务进房的用户ID，该ID必须是一个单独的未在SDK中使用的ID，白板推流服务将使用这个用户ID进入房间进行白板推流，若该ID和SDK中使用的ID重复，会导致SDK和录制服务互踢，影响正常推流。 */
  PushUserId: string;
  /** 与PushUserId对应的签名 */
  PushUserSig: string;
}

declare interface CreateSnapshotTaskRequest {
  /** 白板相关参数 */
  Whiteboard: SnapshotWhiteboard;
  /** 白板房间 `SdkAppId` */
  SdkAppId: number;
  /** 白板房间号 */
  RoomId: number;
  /** 白板板书生成结果通知回调地址 */
  CallbackURL?: string;
  /** 白板板书文件 `COS` 存储参数， 不填默认存储在公共存储桶，公共存储桶的数据仅保存3天 */
  COS?: SnapshotCOS;
  /** 白板板书生成模式，默认为 `AllMarks`。取值说明如下：`AllMarks` - 全量模式，即对于客户端每一次调用 `addSnapshotMark` 接口打上的白板板书生成标志全部都会生成对应的白板板书图片。`LatestMarksOnly` - 单页去重模式，即对于客户端在同一页白板上多次调用 `addSnapshotMark` 打上的白板板书生成标志仅保留最新一次标志来生成对应白板页的白板板书图片。（**注意：`LatestMarksOnly` 模式只有客户端使用v2.6.8及以上版本的白板SDK调用 `addSnapshotMark` 时才生效，否则即使在调用本API是指定了 `LatestMarksOnly` 模式，服务后台会使用默认的 `AllMarks` 模式生成白板板书**） */
  SnapshotMode?: string;
}

declare interface CreateSnapshotTaskResponse {
  /** 白板板书生成任务ID，只有任务创建成功的时候才会返回此字段 */
  TaskID: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateTranscodeRequest {
  /** 客户的SdkAppId */
  SdkAppId: number;
  /** 经过URL编码后的转码文件地址。URL 编码会将字符转换为可通过因特网传输的格式，比如文档地址为http://example.com/测试.pdf，经过URL编码之后为http://example.com/%E6%B5%8B%E8%AF%95.pdf。为了提高URL解析的成功率，请对URL进行编码。 */
  Url: string;
  /** 是否为静态PPT，默认为False；如果IsStaticPPT为False，后缀名为.ppt或.pptx的文档会动态转码成HTML5页面，其他格式的文档会静态转码成图片；如果IsStaticPPT为True，所有格式的文档会静态转码成图片； */
  IsStaticPPT?: boolean;
  /** 注意: 该参数已废弃, 请使用最新的 [云API SDK](https://cloud.tencent.com/document/api/1137/40060) ，使用 MinScaleResolution字段传递分辨率转码后文档的最小分辨率，不传、传空字符串或分辨率格式错误则使用文档原分辨率示例：1280x720，注意分辨率宽高中间为英文字母"xyz"的"x" */
  MinResolution?: string;
  /** 动态PPT转码可以为文件生成该分辨率的缩略图，不传、传空字符串或分辨率格式错误则不生成缩略图，分辨率格式同MinResolution */
  ThumbnailResolution?: string;
  /** 转码文件压缩格式，不传、传空字符串或不是指定的格式则不生成压缩文件，目前支持如下压缩格式：zip： 生成`.zip`压缩包tar.gz： 生成`.tar.gz`压缩包 */
  CompressFileType?: string;
  /** 内部参数 */
  ExtraData?: string;
  /** 文档转码优先级， 只有对于PPT动态转码生效，支持填入以下值：- low: 低优先级转码，对于动态转码，能支持500MB（下载超时时间10分钟）以及2000页文档，但资源有限可能会有比较长时间的排队，请酌情使用该功能。- 不填表示正常优先级转码，支持200MB文件（下载超时时间2分钟），500页以内的文档进行转码注意：对于PDF等静态文件转码，无论是正常优先级或者低优先级，最大只能支持200MB */
  Priority?: string;
  /** 转码后文档的最小分辨率，不传、传空字符串或分辨率格式错误则使用文档原分辨率。分辨率越高，效果越清晰，转出来的图片资源体积会越大，课件加载耗时会变长，请根据实际使用场景配置此参数。示例：1280x720，注意分辨率宽高中间为英文字母"xyz"的"x" */
  MinScaleResolution?: string;
}

declare interface CreateTranscodeResponse {
  /** 文档转码任务的唯一标识Id，用于查询该任务的进度以及转码结果 */
  TaskId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateVideoGenerationTaskRequest {
  /** 录制任务的TaskId */
  OnlineRecordTaskId: string;
  /** 客户的SdkAppId */
  SdkAppId: number;
  /** 视频生成的白板参数，例如白板宽高等。此参数与开始录制接口提供的Whiteboard参数互斥，在本接口与开始录制接口都提供了Whiteboard参数时，优先使用本接口指定的Whiteboard参数进行视频生成，否则使用开始录制接口提供的Whiteboard参数进行视频生成。 */
  Whiteboard?: Whiteboard;
  /** 视频拼接参数此参数与开始录制接口提供的Concat参数互斥，在本接口与开始录制接口都提供了Concat参数时，优先使用本接口指定的Concat参数进行视频拼接，否则使用开始录制接口提供的Concat参数进行视频拼接。 */
  Concat?: Concat;
  /** 视频生成混流参数此参数与开始录制接口提供的MixStream参数互斥，在本接口与开始录制接口都提供了MixStream参数时，优先使用本接口指定的MixStream参数进行视频混流，否则使用开始录制接口提供的MixStream参数进行视频拼混流。 */
  MixStream?: MixStream;
  /** 视频生成控制参数，用于更精细地指定需要生成哪些流，某一路流是否禁用音频，是否只录制小画面等此参数与开始录制接口提供的RecordControl参数互斥，在本接口与开始录制接口都提供了RecordControl参数时，优先使用本接口指定的RecordControl参数进行视频生成控制，否则使用开始录制接口提供的RecordControl参数进行视频拼生成控制。 */
  RecordControl?: RecordControl;
  /** 内部参数 */
  ExtraData?: string;
}

declare interface CreateVideoGenerationTaskResponse {
  /** 视频生成的任务Id */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeOnlineRecordCallbackRequest {
  /** 应用的SdkAppId */
  SdkAppId: number;
}

declare interface DescribeOnlineRecordCallbackResponse {
  /** 实时录制事件回调地址，如果未设置回调地址，该字段为空字符串 */
  Callback: string;
  /** 实时录制回调鉴权密钥 */
  CallbackKey: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeOnlineRecordRequest {
  /** 客户的SdkAppId */
  SdkAppId: number;
  /** 实时录制任务Id */
  TaskId: string;
}

declare interface DescribeOnlineRecordResponse {
  /** 录制结束原因，- AUTO: 房间内长时间没有音视频上行及白板操作导致自动停止录制- USER_CALL: 主动调用了停止录制接口- EXCEPTION: 录制异常结束- FORCE_STOP: 强制停止录制，一般是因为暂停超过90分钟或者录制总时长超过24小时。 */
  FinishReason: string;
  /** 需要查询结果的录制任务Id */
  TaskId: string;
  /** 录制任务状态- PREPARED: 表示录制正在准备中（进房/启动录制服务等操作）- RECORDING: 表示录制已开始- PAUSED: 表示录制已暂停- STOPPED: 表示录制已停止，正在处理并上传视频- FINISHED: 表示视频处理并上传完成，成功生成录制结果 */
  Status: string;
  /** 房间号 */
  RoomId: number;
  /** 白板的群组 Id */
  GroupId: string;
  /** 录制用户Id */
  RecordUserId: string;
  /** 实际开始录制时间，Unix 时间戳，单位秒 */
  RecordStartTime: number;
  /** 实际停止录制时间，Unix 时间戳，单位秒 */
  RecordStopTime: number;
  /** 回放视频总时长（单位：毫秒） */
  TotalTime: number;
  /** 录制过程中出现异常的次数 */
  ExceptionCnt: number;
  /** 拼接视频中被忽略的时间段，只有开启视频拼接功能的时候，这个参数才是有效的 */
  OmittedDurations: OmittedDuration[];
  /** 录制视频列表 */
  VideoInfos: VideoInfo[];
  /** 回放URL，需配合信令播放器使用。此字段仅适用于`视频生成模式` */
  ReplayUrl: string | null;
  /** 视频流在录制过程中断流次数 */
  Interrupts: Interrupt[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeQualityMetricsRequest {
  /** 白板应用的SdkAppId */
  SdkAppId: number;
  /** 开始时间，Unix时间戳，单位秒，时间跨度不能超过7天 */
  StartTime: number;
  /** 结束时间，Unix时间戳，单位秒，时间跨度不能超过7天 */
  EndTime: number;
  /** 查询的指标，目前支持以下值 - image_load_total_count: 图片加载总数（单位，次） - image_load_fail_count: 图片加载失败数量（单位，次） - image_load_success_rate: 图片加载成功率（百分比） - ppt_load_total_count: PPT加载总数（单位，次） - ppt_load_fail_count: PPT加载失败总数（单位，次） - ppt_load_success_rate: PPT加载成功率（单位，百分比） - verify_sdk_total_count: 白板鉴权总次数（单位，次） - verify_sdk_fail_count: 白板鉴权失败次数（单位，次） - verify_sdk_success_rate: 白板鉴权成功率（单位，百分比） - verify_sdk_in_one_second_rate: 白板鉴权秒开率（单位，百分比） - verify_sdk_cost_avg: 白板鉴权耗时平均时间（单位，毫秒） */
  Metric: string;
  /** 聚合的时间维度，目前只支持1小时，输入值为"1h" */
  Interval?: string;
}

declare interface DescribeQualityMetricsResponse {
  /** 输入的查询指标 */
  Metric: string;
  /** 时间序列 */
  Content: TimeValue[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeSnapshotTaskRequest {
  /** 查询任务ID */
  TaskID: string;
  /** 任务SdkAppId */
  SdkAppId: number;
}

declare interface DescribeSnapshotTaskResponse {
  /** 任务ID */
  TaskID: string | null;
  /** 任务状态Running - 任务执行中Finished - 任务已结束 */
  Status: string | null;
  /** 任务创建时间，单位s */
  CreateTime: number | null;
  /** 任务完成时间，单位s */
  FinishTime: number | null;
  /** 任务结果信息 */
  Result: SnapshotResult | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeTIWDailyUsageRequest {
  /** 互动白板应用SdkAppId */
  SdkAppId: number;
  /** 需要查询的子产品用量，支持传入以下值- sp_tiw_board: 互动白板时长，单位为分钟- sp_tiw_dt: 动态转码页数，单位页- sp_tiw_st: 静态转码页数，单位页- sp_tiw_ric: 实时录制时长，单位分钟注意：动态转码以1:8的比例计算文档转码页数，静态转码以1:1的比例计算文档转码页数 */
  SubProduct: string;
  /** 开始时间，格式YYYY-MM-DD，查询结果里包括该天数据 */
  StartTime: string;
  /** 结束时间，格式YYYY-MM-DD，查询结果里包括该天数据，单次查询统计区间最多不能超过31天。 */
  EndTime: string;
}

declare interface DescribeTIWDailyUsageResponse {
  /** 指定区间指定产品的用量汇总 */
  Usages: UsageDataItem[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeTranscodeCallbackRequest {
  /** 应用的SdkAppId */
  SdkAppId: number;
}

declare interface DescribeTranscodeCallbackResponse {
  /** 文档转码回调地址 */
  Callback: string;
  /** 文档转码回调鉴权密钥 */
  CallbackKey: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeTranscodeRequest {
  /** 客户的SdkAppId */
  SdkAppId: number;
  /** 文档转码任务的唯一标识Id */
  TaskId: string;
}

declare interface DescribeTranscodeResponse {
  /** 文档的总页数 */
  Pages?: number;
  /** 转码的当前进度,取值范围为0~100 */
  Progress?: number;
  /** 文档的分辨率 */
  Resolution?: string;
  /** 转码完成后结果的URL动态转码：PPT转动态H5的链接静态转码：文档每一页的图片URL前缀，比如，该URL前缀为`http://example.com/g0jb42ps49vtebjshilb/`，那么文档第1页的图片URL为`http://example.com/g0jb42ps49vtebjshilb/1.jpg`，其它页以此类推 */
  ResultUrl?: string;
  /** 任务的当前状态- QUEUED: 正在排队等待转换- PROCESSING: 转换中- FINISHED: 转换完成 */
  Status?: string;
  /** 转码任务的唯一标识Id */
  TaskId?: string;
  /** 文档的文件名 */
  Title?: string;
  /** 缩略图URL前缀，比如，该URL前缀为`http://example.com/g0jb42ps49vtebjshilb/ `，那么动态PPT第1页的缩略图URL为`http://example.com/g0jb42ps49vtebjshilb/1.jpg`，其它页以此类推如果发起文档转码请求参数中带了ThumbnailResolution参数，并且转码类型为动态转码，该参数不为空，其余情况该参数为空字符串 */
  ThumbnailUrl?: string;
  /** 动态转码缩略图生成分辨率 */
  ThumbnailResolution?: string;
  /** 转码压缩文件下载的URL，如果发起文档转码请求参数中`CompressFileType`为空或者不是支持的压缩格式，该参数为空字符串 */
  CompressFileUrl?: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeVideoGenerationTaskCallbackRequest {
  /** 应用的SdkAppId */
  SdkAppId: number;
}

declare interface DescribeVideoGenerationTaskCallbackResponse {
  /** 录制视频生成回调地址 */
  Callback?: string;
  /** 录制视频生成回调鉴权密钥 */
  CallbackKey?: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeVideoGenerationTaskRequest {
  /** 客户的SdkAppId */
  SdkAppId: number;
  /** 录制视频生成的任务Id */
  TaskId: string;
}

declare interface DescribeVideoGenerationTaskResponse {
  /** 任务对应的群组Id */
  GroupId?: string;
  /** 任务对应的房间号 */
  RoomId?: number;
  /** 任务的Id */
  TaskId?: string;
  /** 已废弃 */
  Progress?: number;
  /** 录制视频生成任务状态- QUEUED: 正在排队- PROCESSING: 正在生成视频- FINISHED: 生成视频结束（成功完成或失败结束，可以通过错误码和错误信息进一步判断） */
  Status?: string;
  /** 回放视频总时长,单位：毫秒 */
  TotalTime?: number;
  /** 已废弃，请使用`VideoInfoList`参数 */
  VideoInfos?: VideoInfo;
  /** 录制视频生成视频列表 */
  VideoInfoList?: VideoInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeWhiteboardPushCallbackRequest {
  /** 应用的SdkAppId */
  SdkAppId: number;
}

declare interface DescribeWhiteboardPushCallbackResponse {
  /** 白板推流事件回调地址，如果未设置回调地址，该字段为空字符串 */
  Callback: string;
  /** 白板推流回调鉴权密钥 */
  CallbackKey: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeWhiteboardPushRequest {
  /** 客户的SdkAppId */
  SdkAppId: number;
  /** 白板推流任务Id */
  TaskId: string;
}

declare interface DescribeWhiteboardPushResponse {
  /** 推流结束原因，- AUTO: 房间内长时间没有音视频上行及白板操作导致自动停止推流- USER_CALL: 主动调用了停止推流接口- EXCEPTION: 推流异常结束 */
  FinishReason?: string;
  /** 需要查询结果的白板推流任务Id */
  TaskId?: string;
  /** 推流任务状态- PREPARED: 表示推流正在准备中（进房/启动推流服务等操作）- PUSHING: 表示推流已开始- STOPPED: 表示推流已停止 */
  Status?: string;
  /** 房间号 */
  RoomId?: number;
  /** 白板的群组 Id */
  GroupId?: string;
  /** 推流用户Id */
  PushUserId?: string;
  /** 实际开始推流时间，Unix 时间戳，单位秒 */
  PushStartTime?: number;
  /** 实际停止推流时间，Unix 时间戳，单位秒 */
  PushStopTime?: number;
  /** 推流过程中出现异常的次数 */
  ExceptionCnt?: number;
  /** 白板推流首帧对应的IM时间戳，可用于录制回放时IM聊天消息与白板推流视频进行同步对时。 */
  IMSyncTime?: number;
  /** 备份推流任务结果信息 */
  Backup?: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface PauseOnlineRecordRequest {
  /** 客户的SdkAppId */
  SdkAppId: number;
  /** 实时录制任务 Id */
  TaskId: string;
}

declare interface PauseOnlineRecordResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ResumeOnlineRecordRequest {
  /** 客户的SdkAppId */
  SdkAppId: number;
  /** 恢复录制的实时录制任务 Id */
  TaskId: string;
}

declare interface ResumeOnlineRecordResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface SetOnlineRecordCallbackKeyRequest {
  /** 应用的SdkAppId */
  SdkAppId: number;
  /** 设置实时录制回调鉴权密钥，最长64字符，如果传入空字符串，那么删除现有的鉴权回调密钥。回调鉴权方式请参考文档：https://cloud.tencent.com/document/product/1137/40257 */
  CallbackKey: string;
}

declare interface SetOnlineRecordCallbackKeyResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface SetOnlineRecordCallbackRequest {
  /** 客户的SdkAppId */
  SdkAppId: number;
  /** 实时录制任务结果回调地址，如果传空字符串会删除原来的回调地址配置，回调地址仅支持 http或https协议，即回调地址以http://或https://开头。回调数据格式请参考文档：https://cloud.tencent.com/document/product/1137/40258 */
  Callback: string;
}

declare interface SetOnlineRecordCallbackResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface SetTranscodeCallbackKeyRequest {
  /** 应用的SdkAppId */
  SdkAppId: number;
  /** 设置文档转码回调鉴权密钥，最长64字符，如果传入空字符串，那么删除现有的鉴权回调密钥，回调鉴权方式请参考文档：https://cloud.tencent.com/document/product/1137/40257 */
  CallbackKey: string;
}

declare interface SetTranscodeCallbackKeyResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface SetTranscodeCallbackRequest {
  /** 客户的SdkAppId */
  SdkAppId: number;
  /** 文档转码进度回调地址，如果传空字符串会删除原来的回调地址配置，回调地址仅支持http或https协议，即回调地址以http://或https://开头。回调数据格式请参考文档：https://cloud.tencent.com/document/product/1137/40260 */
  Callback: string;
}

declare interface SetTranscodeCallbackResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface SetVideoGenerationTaskCallbackKeyRequest {
  /** 应用的SdkAppId */
  SdkAppId: number;
  /** 设置视频生成回调鉴权密钥，最长64字符，如果传入空字符串，那么删除现有的鉴权回调密钥 */
  CallbackKey: string;
}

declare interface SetVideoGenerationTaskCallbackKeyResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface SetVideoGenerationTaskCallbackRequest {
  /** 客户的SdkAppId */
  SdkAppId: number;
  /** 课后录制任务结果回调地址，如果传空字符串会删除原来的回调地址配置，回调地址仅支持 http或https协议，即回调地址以http://或https://开头 */
  Callback: string;
}

declare interface SetVideoGenerationTaskCallbackResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface SetWhiteboardPushCallbackKeyRequest {
  /** 应用的SdkAppId */
  SdkAppId: number;
  /** 设置白板推流回调鉴权密钥，最长64字符，如果传入空字符串，那么删除现有的鉴权回调密钥。回调鉴权方式请参考文档：https://cloud.tencent.com/document/product/1137/40257 */
  CallbackKey: string;
}

declare interface SetWhiteboardPushCallbackKeyResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface SetWhiteboardPushCallbackRequest {
  /** 客户的SdkAppId */
  SdkAppId: number;
  /** 白板推流任务结果回调地址，如果传空字符串会删除原来的回调地址配置，回调地址仅支持 http或https协议，即回调地址以http://或https://开头。回调数据格式请参考文档：https://cloud.tencent.com/document/product/1137/40257 */
  Callback: string;
}

declare interface SetWhiteboardPushCallbackResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface StartOnlineRecordRequest {
  /** 客户的SdkAppId */
  SdkAppId: number;
  /** 需要录制的房间号，取值范围: (1, 4294967295) */
  RoomId: number;
  /** 用于录制服务进房的用户ID，最大长度不能大于60个字节，格式为`tic_record_user_${RoomId}_${Random}`，其中 `${RoomId} `与录制房间号对应，`${Random}`为一个随机字符串。该ID必须是一个单独的未在SDK中使用的ID，录制服务使用这个用户ID进入房间进行音视频与白板录制，若该ID和SDK中使用的ID重复，会导致SDK和录制服务互踢，影响正常录制。 */
  RecordUserId: string;
  /** 与RecordUserId对应的签名 */
  RecordUserSig: string;
  /** （已废弃，设置无效）白板的 IM 群组 Id，默认同房间号 */
  GroupId?: string;
  /** 录制视频拼接参数 */
  Concat?: Concat;
  /** 录制白板参数，例如白板宽高等 */
  Whiteboard?: Whiteboard;
  /** 录制混流参数特别说明：1. 混流功能需要根据额外开通， 请联系腾讯云互动白板客服人员2. 使用混流功能，必须提供 Extras 参数，且 Extras 参数中必须包含 "MIX_STREAM" */
  MixStream?: MixStream;
  /** 使用到的高级功能列表可以选值列表：MIX_STREAM - 混流功能 */
  Extras?: string[];
  /** 是否需要在结果回调中返回各路流的纯音频录制文件，文件格式为mp3 */
  AudioFileNeeded?: boolean;
  /** 录制控制参数，用于更精细地指定需要录制哪些流，某一路流是否禁用音频，是否只录制小画面等 */
  RecordControl?: RecordControl;
  /** 录制模式REALTIME_MODE - 实时录制模式（默认）VIDEO_GENERATION_MODE - 视频生成模式（内测中，需邮件申请开通） */
  RecordMode?: string;
  /** 聊天群组ID，此字段仅适用于`视频生成模式`在`视频生成模式`下，默认会记录白板群组内的非白板信令消息，如果指定了`ChatGroupId`，则会记录指定群ID的聊天消息。 */
  ChatGroupId?: string;
  /** 自动停止录制超时时间，单位秒，取值范围[300, 86400], 默认值为300秒。当超过设定时间房间内没有音视频上行且没有白板操作的时候，录制服务会自动停止当前录制任务。 */
  AutoStopTimeout?: number;
  /** 内部参数，可忽略 */
  ExtraData?: string;
}

declare interface StartOnlineRecordResponse {
  /** 录制任务Id */
  TaskId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface StartWhiteboardPushRequest {
  /** 客户的SdkAppId */
  SdkAppId: number;
  /** 需要推流的白板房间号，取值范围: (1, 4294967295)。在没有指定TRTCRoomId和TRTCRoomIdStr的情况下，默认会以RoomId作为白板流进行推流的TRTC房间号。 */
  RoomId: number;
  /** 用于白板推流服务进入白板房间的用户ID。在没有进行额外指定的情况下，这个用户ID同时会用于IM登录、IM加群、TRTC进房推流等操作。用户ID最大长度不能大于60个字节，该ID必须是一个单独的未在SDK中使用的ID，白板推流服务使用这个用户ID进入房间进行白板音视频推流，若该ID和SDK中使用的ID重复，会导致SDK和白板推流服务互踢，影响正常推流。 */
  PushUserId: string;
  /** 与PushUserId对应的签名 */
  PushUserSig: string;
  /** 白板参数，例如白板宽高、背景颜色等 */
  Whiteboard?: Whiteboard;
  /** 自动停止推流超时时间，单位秒，取值范围[300, 43200], 默认值为1800秒。当白板超过设定时间没有操作的时候，白板推流服务会自动停止白板推流。 */
  AutoStopTimeout?: number;
  /** 对主白板推流任务进行操作时，是否同时同步操作备份任务 */
  AutoManageBackup?: boolean;
  /** 备份白板推流相关参数。指定了备份参数的情况下，白板推流服务会在房间内新增一路白板画面视频流，即同一个房间内会有两路白板画面推流。 */
  Backup?: WhiteboardPushBackupParam;
  /** TRTC高级权限控制参数，如果在实时音视频开启了高级权限控制功能，必须提供PrivateMapKey才能保证正常推流。 */
  PrivateMapKey?: string;
  /** 白板推流视频帧率，取值范围[0, 30]，默认20fps */
  VideoFPS?: number;
  /** 白板推流码率， 取值范围[0, 2000]，默认1200kbps。这里的码率设置是一个参考值，实际推流的时候使用的是动态码率，所以真实码率不会固定为指定值，会在指定值附近波动。 */
  VideoBitrate?: number;
  /** 在实时音视频云端录制模式选择为 `指定用户录制` 模式的时候是否自动录制白板推流。默认在实时音视频的云端录制模式选择为 `指定用户录制` 模式的情况下，不会自动进行白板推流录制，如果希望进行白板推流录制，请将此参数设置为true。如果实时音视频的云端录制模式选择为 `全局自动录制` 模式，可忽略此参数。 */
  AutoRecord?: boolean;
  /** 指定白板推流录制的RecordID，指定的RecordID会用于填充实时音视频云端录制完成后的回调消息中的 "userdefinerecordid" 字段内容，便于您更方便的识别录制回调，以及在点播媒体资源管理中查找相应的录制视频文件。限制长度为64字节，只允许包含大小写英文字母（a-zA-Z）、数字（0-9）及下划线和连词符。此字段设置后，不管`AutoRecord`字段取值如何，都将自动进行白板推流录制。默认RecordId生成规则如下：urlencode(SdkAppID_RoomID_PushUserID)例如：SdkAppID = 12345678，RoomID = 12345，PushUserID = push_user_1那么：RecordId = 12345678_12345_push_user_1 */
  UserDefinedRecordId?: string;
  /** 在实时音视频旁路推流模式选择为`指定用户旁路`模式的时候，是否自动旁路白板推流。默认在实时音视频的旁路推流模式选择为 `指定用户旁路` 模式的情况下，不会自动旁路白板推流，如果希望旁路白板推流，请将此参数设置为true。如果实时音视频的旁路推流模式选择为 `全局自动旁路` 模式，可忽略此参数。 */
  AutoPublish?: boolean;
  /** 指定实时音视频在旁路白板推流时的StreamID，设置之后，您就可以在腾讯云直播 CDN 上通过标准直播方案（FLV或HLS）播放该用户的音视频流。限制长度为64字节，只允许包含大小写英文字母（a-zA-Z）、数字（0-9）及下划线和连词符。此字段设置后，不管`AutoPublish`字段取值如何，都将自动旁路白板推流。默认StreamID生成规则如下：urlencode(SdkAppID_RoomID_PushUserID_main)例如：SdkAppID = 12345678，RoomID = 12345，PushUserID = push_user_1那么：StreamID = 12345678_12345_push_user_1_main */
  UserDefinedStreamId?: string;
  /** 内部参数，不需要关注此参数 */
  ExtraData?: string;
  /** TRTC数字类型房间号，取值范围: (1, 4294967295)。在同时指定了RoomId与TRTCRoomId的情况下，优先使用TRTCRoomId作为白板流进行推流的TRTC房间号。当指定了TRTCRoomIdStr的情况下，此字段将被忽略。 */
  TRTCRoomId?: number;
  /** TRTC字符串类型房间号。在指定了TRTCRoomIdStr的情况下，会优先使用TRTCRoomIdStr作为白板流进行推流的TRTC房间号。 */
  TRTCRoomIdStr?: string;
  /** 内测参数，需开通白名单进行体验。IM鉴权信息参数，用于IM鉴权。当白板信令所使用的IM应用与白板应用的SdkAppId不一致时，可以通过此参数提供对应IM应用鉴权信息。如果提供了此参数，白板推流服务会优先使用此参数指定的SdkAppId作为白板信令的传输通道，否则使用公共参数中的SdkAppId作为白板信令的传输通道。 */
  IMAuthParam?: AuthParam;
  /** 内测参数，需开通白名单进行体验。TRTC鉴权信息参数，用于TRTC进房推流鉴权。当需要推流到的TRTC房间所对应的TRTC应用与白板应用的SdkAppId不一致时，可以通过此参数提供对应的TRTC应用鉴权信息。如果提供了此参数，白板推流服务会优先使用此参数指定的SdkAppId作为白板推流的目标TRTC应用，否则使用公共参数中的SdkAppId作为白板推流的目标TRTC应用。 */
  TRTCAuthParam?: AuthParam;
}

declare interface StartWhiteboardPushResponse {
  /** 推流任务Id */
  TaskId: string;
  /** 备份任务结果参数 */
  Backup: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface StopOnlineRecordRequest {
  /** 客户的SdkAppId */
  SdkAppId: number;
  /** 需要停止录制的任务 Id */
  TaskId: string;
}

declare interface StopOnlineRecordResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface StopWhiteboardPushRequest {
  /** 客户的SdkAppId */
  SdkAppId: number;
  /** 需要停止的白板推流任务 Id */
  TaskId: string;
}

declare interface StopWhiteboardPushResponse {
  /** 备份任务相关参数 */
  Backup?: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

/** 互动白板 */
declare interface Tiw {
  (): Versions;
  /** 创建白板板书生成任务 */
  CreateSnapshotTask(data: CreateSnapshotTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSnapshotTaskResponse>;
  /** 创建文档转码任务 */
  CreateTranscode(data: CreateTranscodeRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTranscodeResponse>;
  /** 创建录制视频生成任务 */
  CreateVideoGenerationTask(data: CreateVideoGenerationTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateVideoGenerationTaskResponse>;
  /** 查询实时录制任务 */
  DescribeOnlineRecord(data: DescribeOnlineRecordRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOnlineRecordResponse>;
  /** 查询实时录制回调地址 */
  DescribeOnlineRecordCallback(data: DescribeOnlineRecordCallbackRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOnlineRecordCallbackResponse>;
  /** 查询质量数据 */
  DescribeQualityMetrics(data: DescribeQualityMetricsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeQualityMetricsResponse>;
  /** 获取白板板书生成任务信息 */
  DescribeSnapshotTask(data: DescribeSnapshotTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSnapshotTaskResponse>;
  /** 查询天维度计费用量 */
  DescribeTIWDailyUsage(data: DescribeTIWDailyUsageRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTIWDailyUsageResponse>;
  /** 查询文档转码任务 */
  DescribeTranscode(data: DescribeTranscodeRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTranscodeResponse>;
  /** 查询文档转码回调地址 */
  DescribeTranscodeCallback(data: DescribeTranscodeCallbackRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTranscodeCallbackResponse>;
  /** 查询录制视频生成任务 */
  DescribeVideoGenerationTask(data: DescribeVideoGenerationTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVideoGenerationTaskResponse>;
  /** 查询录制视频生成回调地址 */
  DescribeVideoGenerationTaskCallback(data: DescribeVideoGenerationTaskCallbackRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVideoGenerationTaskCallbackResponse>;
  /** 查询白板推流任务 */
  DescribeWhiteboardPush(data: DescribeWhiteboardPushRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWhiteboardPushResponse>;
  /** 查询白板推流回调地址 */
  DescribeWhiteboardPushCallback(data: DescribeWhiteboardPushCallbackRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWhiteboardPushCallbackResponse>;
  /** 暂停实时录制 */
  PauseOnlineRecord(data: PauseOnlineRecordRequest, config?: AxiosRequestConfig): AxiosPromise<PauseOnlineRecordResponse>;
  /** 恢复实时录制 */
  ResumeOnlineRecord(data: ResumeOnlineRecordRequest, config?: AxiosRequestConfig): AxiosPromise<ResumeOnlineRecordResponse>;
  /** 设置实时录制回调地址 */
  SetOnlineRecordCallback(data: SetOnlineRecordCallbackRequest, config?: AxiosRequestConfig): AxiosPromise<SetOnlineRecordCallbackResponse>;
  /** 设置实时录制回调密钥 */
  SetOnlineRecordCallbackKey(data: SetOnlineRecordCallbackKeyRequest, config?: AxiosRequestConfig): AxiosPromise<SetOnlineRecordCallbackKeyResponse>;
  /** 设置文档转码回调地址 */
  SetTranscodeCallback(data: SetTranscodeCallbackRequest, config?: AxiosRequestConfig): AxiosPromise<SetTranscodeCallbackResponse>;
  /** 设置文档转码回调密钥 */
  SetTranscodeCallbackKey(data: SetTranscodeCallbackKeyRequest, config?: AxiosRequestConfig): AxiosPromise<SetTranscodeCallbackKeyResponse>;
  /** 设置录制视频生成回调地址 */
  SetVideoGenerationTaskCallback(data: SetVideoGenerationTaskCallbackRequest, config?: AxiosRequestConfig): AxiosPromise<SetVideoGenerationTaskCallbackResponse>;
  /** 设置录制视频生成回调密钥 */
  SetVideoGenerationTaskCallbackKey(data: SetVideoGenerationTaskCallbackKeyRequest, config?: AxiosRequestConfig): AxiosPromise<SetVideoGenerationTaskCallbackKeyResponse>;
  /** 设置白板推流回调地址 */
  SetWhiteboardPushCallback(data: SetWhiteboardPushCallbackRequest, config?: AxiosRequestConfig): AxiosPromise<SetWhiteboardPushCallbackResponse>;
  /** 设置白板推流回调密钥 */
  SetWhiteboardPushCallbackKey(data: SetWhiteboardPushCallbackKeyRequest, config?: AxiosRequestConfig): AxiosPromise<SetWhiteboardPushCallbackKeyResponse>;
  /** 开始实时录制 */
  StartOnlineRecord(data: StartOnlineRecordRequest, config?: AxiosRequestConfig): AxiosPromise<StartOnlineRecordResponse>;
  /** 开始白板推流 */
  StartWhiteboardPush(data: StartWhiteboardPushRequest, config?: AxiosRequestConfig): AxiosPromise<StartWhiteboardPushResponse>;
  /** 停止实时录制 */
  StopOnlineRecord(data: StopOnlineRecordRequest, config?: AxiosRequestConfig): AxiosPromise<StopOnlineRecordResponse>;
  /** 结束白板推流 */
  StopWhiteboardPush(data: StopWhiteboardPushRequest, config?: AxiosRequestConfig): AxiosPromise<StopWhiteboardPushResponse>;
}

export declare type Versions = ["2019-09-19"];

export default Tiw;
