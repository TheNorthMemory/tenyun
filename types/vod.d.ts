/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 临时访问凭证。 */
declare interface Credentials {
  /** 访问凭证 ID。 */
  AccessKeyId?: string;
  /** 访问凭证 Key。 */
  SecretAccessKey?: string;
  /** 访问凭证 Token，长度和绑定的策略有关，最长不超过 4096 字节。 */
  SessionToken?: string;
  /** 访问凭证的过期时间。 */
  Expiration?: string;
}

/** 键值对过滤器，用于条件过滤查询。例如过滤 ID、名称或状态等。若存在多个 Filter 时，Filter 间的关系为逻辑与（AND）关系。若同一个 Filter 存在多个 Values，同一 Filter 下 Values 间的关系为逻辑或（OR）关系。过滤器筛选字段均为精确匹配。 */
declare interface Filter {
  /** 需要过滤的字段。 */
  Name: string;
  /** 字段的过滤值。 */
  Values: string[];
}

/** 增量迁移源站地址信息。 */
declare interface IncrementalMigrationHttpEndpointInfo {
  /** 地址信息，支持域名或 IP 地址。 */
  Endpoint: string;
  /** 备份地址信息。 */
  StandbyEndpointSet?: string[];
}

/** 增量迁移回源 HTTP Header。 */
declare interface IncrementalMigrationHttpHeader {
  /** Header 键。 */
  Key: string;
  /** Header 值。 */
  Value: string;
}

/** 增量迁移回源 HTTP Header 信息。 */
declare interface IncrementalMigrationHttpHeaderInfo {
  /** Http Header 透传模式。取值有：FOLLOW_ALL：透传所有头部信息；FOLLOW_PART：透传部分头部信息；IGNORE_PART：忽略部分头部信息。参数必填。 */
  HeaderFollowMode: string;
  /** 需透传 Header Key 集合，仅当 HeaderFollowMode 取值 `FOLLOW_PART` 时需要填充。 */
  FollowHttpHeaderKeySet?: string[];
  /** 新增 Header 键值对集合。 */
  NewHttpHeaderSet?: IncrementalMigrationHttpHeader[];
}

/** 增量迁移回源条件。 */
declare interface IncrementalMigrationHttpOriginCondition {
  /** 触发回源条件的 HTTP Code。若不填充，默认取值 `404`。 */
  HttpStatusCode?: number;
  /** 触发回源条件的对象键前缀。 */
  Prefix?: string;
}

/** 增量迁移回源源站配置。 */
declare interface IncrementalMigrationHttpOriginConfig {
  /** 回源源站信息。 */
  OriginInfo: IncrementalMigrationHttpOriginInfo;
  /** 回源参数。 */
  OriginParameter: IncrementalMigrationHttpOriginParameter;
  /** 回源模式。取值有：SYNC：同步回源；ASYNC：异步回源。若不填，默认取 `SYNC` 同步回源。 */
  Mode?: string;
  /** 回源条件。 */
  OriginCondition?: IncrementalMigrationHttpOriginCondition;
}

/** 增量迁移源站信息。 */
declare interface IncrementalMigrationHttpOriginInfo {
  /** 增量迁移源站地址信息。 */
  EndpointInfo: IncrementalMigrationHttpEndpointInfo;
  /** 增量迁移源站文件信息。 */
  FileInfo?: IncrementalMigrationOriginFileInfo;
}

/** 增量迁移回源参数。 */
declare interface IncrementalMigrationHttpOriginParameter {
  /** HTTP 头部透传信息。 */
  HttpHeaderInfo: IncrementalMigrationHttpHeaderInfo;
  /** 回源协议。取值有：HTTP：强制 HTTP；HTTPS：强制 HTTPS；FOLLOW：跟随请求协议。若不填，默认取值 `FOLLOW`。 */
  Protocol?: string;
  /** 请求参数透传模式。取值有：FOLLOW：全部透传；IGNORE：忽略，全部不透传。 默认取值 `FOLLOW`。 */
  QueryStringFollowMode?: string;
  /** 重定向的 HTTP Code，目前仅支持 `301`，`302` 和 `307`。默认取值 `302`。 */
  HttpRedirectCode?: number;
  /** 源站重定向跟随模式。取值有：FOLLOW：跟随源站重定向；IGNORE：忽略源站重定向。 默认取值 `FOLLOW` 跟随源站重定向，即源站返回 `3xx` 时，会默认跟随至对应源站拉取数据。 */
  OriginRedirectionFollowMode?: string;
}

/** 增量迁移源站文件信息。 */
declare interface IncrementalMigrationOriginFileInfo {
  /** 文件前缀配置。 */
  PrefixConfig?: IncrementalMigrationOriginPrefixConfig;
  /** 文件后缀配置。 */
  SuffixConfig?: IncrementalMigrationOriginSuffixConfig;
  /** 固定文件配置。 */
  FixedFileConfig?: IncrementalMigrationOriginFixedFileConfig;
}

/** 增量迁移源站固定文件路径配置。 */
declare interface IncrementalMigrationOriginFixedFileConfig {
  /** 固定文件路径；如填充 `example/test.png`，则回源地址为： `http(s)://<回源域名>/example/test.png`。 */
  FixedFilePath?: string;
}

/** 增量迁移源站地址前缀配置。 */
declare interface IncrementalMigrationOriginPrefixConfig {
  /** 源站地址前缀，如填充 `test/`，则回源地址为 `http(s)://<回源域名>/test/<文件名>`。 */
  Prefix?: string;
}

/** 增量迁移源站文件后缀配置。 */
declare interface IncrementalMigrationOriginSuffixConfig {
  /** 文件后缀；如填充 `.ts` ，则回源地址为：`http(s)://<回源域名>/<文件名>.ts`。 */
  Suffix?: string;
}

/** 增量迁移策略信息。 */
declare interface IncrementalMigrationStrategyInfo {
  /** 策略 ID。 */
  StrategyId?: string;
  /** 策略名称。 */
  StrategyName?: string;
  /** 策略生效的点播专业版[应用](/document/product/266/14574) ID。 */
  SubAppId?: number;
  /** 策略生效的存储桶 ID。 */
  BucketId?: string;
  /** 源站类型。取值有：HTTP：HTTP 源。 */
  OriginType?: string;
  /** 回源源站配置。 */
  HttpOriginConfig?: IncrementalMigrationHttpOriginConfig;
}

/** 排序依据。 */
declare interface SortBy {
  /** 排序字段。 */
  Field: string;
  /** 排序方式，可选值有：Asc: 升序；Desc: 降序。 */
  Order: string;
}

/** 专业版应用的存储信息。 */
declare interface StorageInfo {
  /** 存储桶 ID。 */
  BucketId?: string;
  /** 存储名称。 */
  StorageName?: string;
  /** 存储所在区域。 */
  StorageRegion?: string;
  /** 存储公网源站访问域名的状态，取值有：ONLINE：已生效；DEPLOYING： 部署中。 */
  InternetAccessDomainStatus?: string;
  /** 存储公网源站访问域名。 */
  InternetAccessDomain?: string;
  /** 存储的创建时间。 */
  CreateTime?: string;
}

declare interface CreateIncrementalMigrationStrategyRequest {
  /** 点播[专业版](/document/product/266/115396)[应用](/document/product/266/14574) ID。 */
  SubAppId: number;
  /** 策略生效的存储桶 ID。 */
  BucketId: string;
  /** 增量迁移策略名称，名称长度不超过100个字符，允许的字符为：`中文、英文、0-9、_、-`。 */
  StrategyName: string;
  /** 源站类型。取值有：HTTP：HTTP 源。 */
  OriginType: string;
  /** 增量迁移 HTTP 回源源站配置，当 OriginType 取值 `HTTP` 时必填。 */
  HttpOriginConfig?: IncrementalMigrationHttpOriginConfig;
}

declare interface CreateIncrementalMigrationStrategyResponse {
  /** 增量迁移策略 ID。 */
  StrategyId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateStorageCredentialsRequest {
  /** 点播专业版[应用](/document/product/266/14574) ID。 */
  SubAppId: number;
  /** 按照下方语法组装好策略后，先序列化为字符串，再做 URL Encode，结果作为 Policy 字段入参。服务端会对该字段做 URL Decode，并按解析后的策略授予临时访问凭证权限，请按规范传入参数。注意： 1.策略语法参照[访问管理策略](/document/product/598/10603)。2.策略中不能包含 principal 元素。3.策略的 action 元素仅支持：name/vod:PutObject;name/vod:ListParts;name/vod:PostObject;name/vod:InitiateMultipartUpload;name/vod:UploadPart;name/vod:CompleteMultipartUpload;name/vod:AbortMultipartUpload;name/vod:ListMultipartUploads;4.策略的 resource 元素填写格式为：`qcs::vod:[存储地域]:uid/[账号AppID]:prefix//[点播应用ID]/[存储桶ID]/[存储路径]`，其中存储地域、账号 AppID、点播应用 ID、存储桶 ID 和存储路径要按需填写，其他内容不允许改动，例：`qcs:ap-chongqing:vod::uid/1231456789:prefix//1234567890/2ceds3ew323w3mu/file_path`。 */
  Policy: string;
  /** 指定临时证书的有效期，单位：秒。默认 1800 秒，最大 129600 秒。 */
  DurationSeconds?: number;
}

declare interface CreateStorageCredentialsResponse {
  /** 临时访问凭证。 */
  Credentials?: Credentials;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateStorageRequest {
  /** 点播专业版[应用](/document/product/266/14574) ID。 */
  SubAppId: number;
  /** 存储地域，必须是系统支持地域。通过 [DescribeStorageRegions](https://cloud.tencent.com/document/product/266/72480) 接口可以查询到所有存储地域及已经开通存储桶的地域。 */
  StorageRegion: string;
  /** 存储名称。仅支持小写英文字母、数字、中划线 “-” 及其组合；存储命名不能以 “-” 开头或结尾；存储命名最大长度为 64 字符。 */
  StorageName: string;
}

declare interface CreateStorageResponse {
  /** 存储桶 ID。 */
  BucketId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteIncrementalMigrationStrategyRequest {
  /** 点播[专业版](/document/product/266/115396)[应用](/document/product/266/14574) ID。 */
  SubAppId: number;
  /** 策略生效的存储桶 ID。 */
  BucketId: string;
  /** 增量迁移策略 ID。 */
  StrategyId: string;
}

declare interface DeleteIncrementalMigrationStrategyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeIncrementalMigrationStrategyInfosRequest {
  /** 点播[专业版](/document/product/266/115396)[应用](/document/product/266/14574) ID。 */
  SubAppId: number;
  /** 过滤条件，Filters.Values 的上限为 `20`；若 Filters 长度为 `0` 则查询时无过滤条件限制。 详细的过滤条件如下： BucketId 按照【存储桶 ID】进行过滤 类型：String 必选：否StrategyId 按照【策略 ID】进行过滤。 类型：String 必选：否 */
  Filters?: Filter[];
  /** 返回结果的排序。 SortBy.Field 取值有：UpdateTime：创建时间。若不填，SortBy.Field 默认值为 `UpdateTime`，SortBy.Order 默认值为 `Desc`。 */
  SortBy?: SortBy;
  /** 分页返回的起始偏移量，默认值为 `0`。 */
  Offset?: number;
  /** 分页返回的记录条数，默认值为 `20`，最大值为 `100`。 */
  Limit?: number;
}

declare interface DescribeIncrementalMigrationStrategyInfosResponse {
  /** 总数。 */
  TotalCount?: number;
  /** 策略信息集合。 */
  StrategyInfoSet?: IncrementalMigrationStrategyInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeStorageRequest {
  /** 点播专业版[应用](/document/product/266/14574) ID。 */
  SubAppId: number;
  /** 过滤条件，Filters.Values 的上限为 20；若 Filters 长度为 0 则分页查询子应用 SubAppId 下的存储信息。 详细的过滤条件如下：BucketId 按照【存储桶 ID】进行过滤。 类型：String 必选：否StorageName 按照【存储名称】进行过滤。 类型：String 必选：否 */
  Filters?: Filter[];
  /** 返回结果的排序。 SortBy.Field 取值有：CreateTime：创建时间。若不填，SortBy.Field 默认值为 CreateTime，SortBy.Order 默认值为 Asc。 */
  SortBy?: SortBy;
  /** 分页返回的起始偏移量，默认值为 0。 */
  Offset?: number;
  /** 分页返回的记录条数，默认值为 20，最大值为 1000。 */
  Limit?: number;
}

declare interface DescribeStorageResponse {
  /** 符合条件的存储数量。 */
  TotalCount?: number;
  /** 符合条件的存储信息列表。 */
  StorageInfoSet?: StorageInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyIncrementalMigrationStrategyRequest {
  /** 点播[专业版](/document/product/266/115396)[应用](/document/product/266/14574) ID。 */
  SubAppId: number;
  /** 策略生效的存储桶 ID。 */
  BucketId: string;
  /** 增量迁移策略 ID。 */
  StrategyId: string;
  /** 策略名称。若不填充或填充空字符串，则不修改。 */
  StrategyName?: string;
  /** 源站类型。取值有：HTTP：HTTP 源。若不填或填充空字符串，则不修改。 */
  OriginType?: string;
  /** HTTP 回源源站配置，若不填则默认不修改。 */
  HttpOriginConfig?: IncrementalMigrationHttpOriginConfig;
}

declare interface ModifyIncrementalMigrationStrategyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare namespace V20180717 {
  type VersionHeader = { headers: { 'X-TC-Version': '2018-07-17' } }

  /** AI 智能分析模板详情 */
  interface AIAnalysisTemplateItem {
    /** 智能分析模板唯一标识。 */
    Definition?: number;
    /** 智能分析模板名称。 */
    Name?: string;
    /** 智能分析模板描述信息。 */
    Comment?: string;
    /** 智能分类任务控制参数。 */
    ClassificationConfigure?: ClassificationConfigureInfo;
    /** 智能标签任务控制参数。 */
    TagConfigure?: TagConfigureInfo;
    /** 智能封面任务控制参数。 */
    CoverConfigure?: CoverConfigureInfo;
    /** 智能按帧标签任务控制参数。 */
    FrameTagConfigure?: FrameTagConfigureInfo;
    /** 智能精彩集锦任务控制参数。 */
    HighlightConfigure?: HighlightsConfigureInfo;
    /** 模板创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    CreateTime?: string;
    /** 模板最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    UpdateTime?: string;
  }

  /** 视频内容识别模板详情 */
  interface AIRecognitionTemplateItem {
    /** 视频内容识别模板唯一标识。 */
    Definition?: number;
    /** 视频内容识别模板名称。 */
    Name?: string;
    /** 视频内容识别模板描述信息。 */
    Comment?: string;
    /** 模板类型，取值：Preset：系统预置模板；Custom：用户自定义模板。 */
    Type?: string;
    /** 头尾识别控制参数。 */
    HeadTailConfigure?: HeadTailConfigureInfo;
    /** 拆条识别控制参数。 */
    SegmentConfigure?: SegmentConfigureInfo;
    /** 人脸识别控制参数。 */
    FaceConfigure?: FaceConfigureInfo;
    /** 文本全文识别控制参数。 */
    OcrFullTextConfigure?: OcrFullTextConfigureInfo;
    /** 文本关键词识别控制参数。 */
    OcrWordsConfigure?: OcrWordsConfigureInfo;
    /** 语音全文识别控制参数。注意：本参数已不再维护，推荐使用 AsrTranslateConfigure 参数发起语音翻译识别（当 DstLanguage 不填或填空字符串时，则不进行翻译，计费项和语音全文识别一致）。 */
    AsrFullTextConfigure?: AsrFullTextConfigureInfo;
    /** 语音关键词识别控制参数。 */
    AsrWordsConfigure?: AsrWordsConfigureInfo;
    /** 语音翻译识别控制参数。 */
    AsrTranslateConfigure?: AsrTranslateConfigureInfo;
    /** 物体识别控制参数。 */
    ObjectConfigure?: ObjectConfigureInfo;
    /** 截图时间间隔，单位：秒。 */
    ScreenshotInterval?: number;
    /** 模板创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    CreateTime?: string;
    /** 模板最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    UpdateTime?: string;
  }

  /** 视频画面低光、过曝检测的控制参数。 */
  interface AbnormalLightingConfigureInfo {
    /** 视频画面低光、过曝检测开关，可选值：ON：开启；OFF：关闭。 */
    Switch: string;
  }

  /** 视频画面低光、过曝检测的控制参数。 */
  interface AbnormalLightingConfigureInfoForUpdate {
    /** 视频画面低光、过曝检测开关，可选值：ON：开启；OFF：关闭。 */
    Switch?: string;
  }

  /** 域名的地区加速信息 */
  interface AccelerateAreaInfo {
    /** 加速地区，可选值：Chinese Mainland：中国境内（不包含港澳台）。Outside Chinese Mainland：中国境外。 */
    Area?: string;
    /** 腾讯禁用原因，可选值：ForLegalReasons：因法律原因导致关闭加速；ForOverdueBills：因欠费停服导致关闭加速。 */
    TencentDisableReason?: string;
    /** 加速域名对应的 CNAME 域名。 */
    TencentEdgeDomain?: string;
  }

  /** 转自适应码流信息 */
  interface AdaptiveDynamicStreamingInfoItem {
    /** 转自适应码流规格。 */
    Definition?: number;
    /** 打包格式，取值范围：HLS；DASH。 */
    Package?: string;
    /** 加密类型。 */
    DrmType?: string;
    /** 播放地址。 */
    Url?: string;
    /** 媒体文件大小，单位：字节。当媒体文件为 HLS 时，大小是 m3u8 和 ts 文件大小的总和；当媒体文件为 DASH 时，大小是 mpd 和分片文件大小的总和；注意：在 2022-01-10T16:00:00Z 前处理生成的自适应码流文件此字段为0。 */
    Size?: number;
    /** 数字水印类型。可选值：Trace 表示经过溯源水印处理；CopyRight 表示经过版权水印处理；None 表示没有经过数字水印处理。 */
    DigitalWatermarkType?: string;
    /** 子流信息列表。 */
    SubStreamSet?: MediaSubStreamInfoItem[];
    /** 版权信息。 */
    CopyRightWatermarkText?: string;
    /** 字幕信息列表。 */
    SubtitleSet?: MediaSubtitleItem[];
    /** 默认字幕的唯一标识。 */
    DefaultSubtitleId?: string;
  }

  /** 对视频转自适应码流的输入参数类型 */
  interface AdaptiveDynamicStreamingTaskInput {
    /** 转自适应码流模板 ID。 */
    Definition: number;
    /** 水印列表，支持多张图片或文字水印，最大可支持 10 张。 */
    WatermarkSet?: WatermarkInput[];
    /** 溯源水印。 */
    TraceWatermark?: TraceWatermarkInput;
    /** 版权水印。 */
    CopyRightWatermark?: CopyRightWatermarkInput;
    /** 字幕列表，元素为字幕 ID，支持多个字幕，最大可支持16个。 */
    SubtitleSet?: string[];
  }

  /** 转自适应码流模板详情 */
  interface AdaptiveDynamicStreamingTemplate {
    /** 转自适应码流模板唯一标识。 */
    Definition?: number;
    /** 模板类型，取值范围：Preset：系统预置模板；Custom：用户自定义模板。 */
    Type?: string;
    /** 转自适应码流模板名称。 */
    Name?: string;
    /** 转自适应码流模板描述信息。 */
    Comment?: string;
    /** 自适应转码格式，取值范围：HLS。 */
    Format?: string;
    /** DRM 类型，取值范围：SimpleAESWidevineFairPlay如果取值为空字符串，代表不对视频做 DRM 保护。 */
    DrmType?: string;
    /** DRM 的密钥提供商，取值范围：SDMC：华曦达；VOD：云点播。默认值为 VOD 。 */
    DrmKeyProvider?: string;
    /** 自适应转码输入流参数信息，最多输入10路流。 */
    StreamInfos?: AdaptiveStreamTemplate[];
    /** 是否禁止视频低码率转高码率，取值范围：0：否，1：是。 */
    DisableHigherVideoBitrate?: number;
    /** 是否禁止视频分辨率转高分辨率，取值范围：0：否，1：是。 */
    DisableHigherVideoResolution?: number;
    /** 模板创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    CreateTime?: string;
    /** 模板最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    UpdateTime?: string;
    /** 切片类型，仅当 Format 为 HLS 时有效。 */
    SegmentType?: string;
  }

  /** 自适应转码流参数模板 */
  interface AdaptiveStreamTemplate {
    /** 视频参数信息。 */
    Video: VideoTemplateInfo;
    /** 音频参数信息。 */
    Audio: AudioTemplateInfo;
    /** 是否移除音频流，取值范围：0：否，1：是。 */
    RemoveAudio?: number;
    /** 是否移除视频流，取值范围：0：否，1：是。 */
    RemoveVideo?: number;
    /** 极速高清转码参数。 */
    TEHDConfig?: TEHDConfig | null;
  }

  /** 智能分析结果 */
  interface AiAnalysisResult {
    /** 任务的类型，可以取的值有：Classification：智能分类Cover：智能封面Tag：智能标签FrameTag：智能按帧标签Highlight：智能精彩集锦 */
    Type?: string;
    /** 视频内容分析智能分类任务的查询结果，当任务类型为 Classification 时有效。 */
    ClassificationTask?: AiAnalysisTaskClassificationResult;
    /** 视频内容分析智能封面任务的查询结果，当任务类型为 Cover 时有效。 */
    CoverTask?: AiAnalysisTaskCoverResult;
    /** 视频内容分析智能标签任务的查询结果，当任务类型为 Tag 时有效。 */
    TagTask?: AiAnalysisTaskTagResult;
    /** 视频内容分析智能按帧标签任务的查询结果，当任务类型为 FrameTag 时有效。 */
    FrameTagTask?: AiAnalysisTaskFrameTagResult;
    /** 视频内容分析智能精彩集锦任务的查询结果，当任务类型为 Highlight 时有效。 */
    HighlightTask?: AiAnalysisTaskHighlightResult;
  }

  /** 智能分类任务输入类型 */
  interface AiAnalysisTaskClassificationInput {
    /** 视频智能分类模板 ID。 */
    Definition?: number;
  }

  /** 智能分类结果信息 */
  interface AiAnalysisTaskClassificationOutput {
    /** 视频智能分类列表。注意 ：该列表最多仅展示前 100 个元素。如希望获得完整结果，请从 ClassificationSetFileUrl 对应的文件中获取。 */
    ClassificationSet: MediaAiAnalysisClassificationItem[];
    /** 视频智能分类列表文件 URL。文件的内容为 JSON，数据结构与 ClassificationSet 字段一致。 （文件不会永久存储，到达 ClassificationSetFileUrlExpireTime 时间点后文件将被删除）。 */
    ClassificationSetFileUrl: string;
    /** 视频智能分类列表文件 URL 失效时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    ClassificationSetFileUrlExpireTime: string;
  }

  /** 智能分类任务结果类型 */
  interface AiAnalysisTaskClassificationResult {
    /** 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。 */
    Status?: string;
    /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/266/50368) 列表。 */
    ErrCodeExt?: string;
    /** 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。 */
    ErrCode?: number;
    /** 错误信息。 */
    Message?: string;
    /** 智能分类任务输入。 */
    Input?: AiAnalysisTaskClassificationInput;
    /** 智能分类任务输出。 */
    Output?: AiAnalysisTaskClassificationOutput;
    /** 智能分类任务进度，取值范围 [0-100] 。 */
    Progress?: number;
    /** 智能分类任务开始执行的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    BeginProcessTime?: string;
    /** 智能分类任务执行完毕的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    FinishTime?: string;
  }

  /** 智能分类任务输入类型 */
  interface AiAnalysisTaskCoverInput {
    /** 视频智能封面模板 ID。 */
    Definition?: number;
  }

  /** 智能封面结果信息 */
  interface AiAnalysisTaskCoverOutput {
    /** 智能封面列表。注意 ：该列表最多仅展示前 100 个元素。如希望获得完整结果，请从 CoverSetFileUrl 对应的文件中获取。 */
    CoverSet: MediaAiAnalysisCoverItem[];
    /** 智能封面列表文件 URL。文件的内容为 JSON，数据结构与 CoverSet 字段一致。 （文件不会永久存储，到达 CoverSetFileUrlExpireTime 时间点后文件将被删除）。 */
    CoverSetFileUrl: string;
    /** 智能封面列表文件 URL 失效时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    CoverSetFileUrlExpireTime: string;
  }

  /** 智能封面结果类型 */
  interface AiAnalysisTaskCoverResult {
    /** 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。 */
    Status?: string;
    /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/266/50368) 列表。 */
    ErrCodeExt?: string;
    /** 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。 */
    ErrCode?: number;
    /** 错误信息。 */
    Message?: string;
    /** 智能封面任务输入。 */
    Input?: AiAnalysisTaskCoverInput;
    /** 智能封面任务输出。 */
    Output?: AiAnalysisTaskCoverOutput;
    /** 智能封面任务进度，取值范围 [0-100] 。 */
    Progress?: number;
    /** 智能封面任务开始执行的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    BeginProcessTime?: string;
    /** 智能封面任务执行完毕的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    FinishTime?: string;
  }

  /** 智能按帧标签任务输入类型 */
  interface AiAnalysisTaskFrameTagInput {
    /** 视频智能按帧标签模板 ID。 */
    Definition?: number;
  }

  /** 智能按帧标签结果信息 */
  interface AiAnalysisTaskFrameTagOutput {
    /** 视频按帧标签列表。注意 ：该列表最多仅展示前 100 个元素。如希望获得完整结果，请从 SegmentSetFileUrl 对应的文件中获取。 */
    SegmentSet: MediaAiAnalysisFrameTagSegmentItem[];
    /** 视频按帧标签列表文件 URL。文件的内容为 JSON，数据结构与 SegmentSet 字段一致。 （文件不会永久存储，到达SegmentSetFileUrlExpireTime 时间点后文件将被删除）。 */
    SegmentSetFileUrl: string;
    /** 视频按帧标签列表文件 URL 失效时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    SegmentSetFileUrlExpireTime: string;
  }

  /** 智能按帧标签结果类型 */
  interface AiAnalysisTaskFrameTagResult {
    /** 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。 */
    Status?: string;
    /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/266/50368) 列表。 */
    ErrCodeExt?: string;
    /** 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。 */
    ErrCode?: number;
    /** 错误信息。 */
    Message?: string;
    /** 智能按帧标签任务输入。 */
    Input?: AiAnalysisTaskFrameTagInput;
    /** 智能按帧标签任务输出。 */
    Output?: AiAnalysisTaskFrameTagOutput;
    /** 智能按帧标签任务进度，取值范围 [0-100] 。 */
    Progress?: number;
    /** 智能按帧标签任务开始执行的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    BeginProcessTime?: string;
    /** 智能按帧标签任务执行完毕的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    FinishTime?: string;
  }

  /** 智能精彩片段任务输入类型 */
  interface AiAnalysisTaskHighlightInput {
    /** 视频智能精彩片段模板 ID。 */
    Definition?: number;
  }

  /** 智能精彩片段结果信息 */
  interface AiAnalysisTaskHighlightOutput {
    /** 视频智能精彩片段列表。注意 ：该列表最多仅展示前 100 个元素。如希望获得完整结果，请从 HighlightSetFileUrl 对应的文件中获取。 */
    HighlightSet: MediaAiAnalysisHighlightItem[];
    /** 视频智能精彩片段列表文件 URL。文件的内容为 JSON，数据结构与 HighlightSet 字段一致。 （文件不会永久存储，到达 HighlightSetFileUrlExpireTime 时间点后文件将被删除）。 */
    HighlightSetFileUrl: string;
    /** 视频智能精彩片段列表文件 URL 失效时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    HighlightSetFileUrlExpireTime: string;
  }

  /** 智能精彩片段结果类型 */
  interface AiAnalysisTaskHighlightResult {
    /** 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。 */
    Status?: string;
    /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/266/50368) 列表。 */
    ErrCodeExt?: string;
    /** 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。 */
    ErrCode?: number;
    /** 错误信息。 */
    Message?: string;
    /** 智能精彩片段任务输入。 */
    Input?: AiAnalysisTaskHighlightInput;
    /** 智能精彩片段任务输出。 */
    Output?: AiAnalysisTaskHighlightOutput;
    /** 智能精彩片段任务进度，取值范围 [0-100] 。 */
    Progress?: number;
    /** 智能精彩片段任务开始执行的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    BeginProcessTime?: string;
    /** 智能精彩片段任务执行完毕的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    FinishTime?: string;
  }

  /** AI 视频智能分析输入参数类型 */
  interface AiAnalysisTaskInput {
    /** 视频内容分析模板 ID。 */
    Definition: number;
  }

  /** 智能标签任务输入类型 */
  interface AiAnalysisTaskTagInput {
    /** 视频智能标签模板 ID。 */
    Definition?: number;
  }

  /** 智能标签结果信息 */
  interface AiAnalysisTaskTagOutput {
    /** 视频智能标签列表。注意 ：该列表最多仅展示前 100 个元素。如希望获得完整结果，请从 TagSetFileUrl 对应的文件中获取。 */
    TagSet: MediaAiAnalysisTagItem[];
    /** 视频智能标签列表文件 URL。文件的内容为 JSON，数据结构与 TagSet 字段一致。 （文件不会永久存储，到达 TagSetFileUrlExpireTime 时间点后文件将被删除）。 */
    TagSetFileUrl: string;
    /** 视频智能标签列表文件 URL 失效时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    TagSetFileUrlExpireTime: string;
  }

  /** 智能标签结果类型 */
  interface AiAnalysisTaskTagResult {
    /** 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。 */
    Status?: string;
    /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/266/50368) 列表。 */
    ErrCodeExt?: string;
    /** 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。 */
    ErrCode?: number;
    /** 错误信息。 */
    Message?: string;
    /** 智能标签任务输入。 */
    Input?: AiAnalysisTaskTagInput;
    /** 智能标签任务输出。 */
    Output?: AiAnalysisTaskTagOutput;
    /** 智能标签任务进度，取值范围 [0-100] 。 */
    Progress?: number;
    /** 智能标签任务开始执行的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    BeginProcessTime?: string;
    /** 智能标签任务执行完毕的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    FinishTime?: string;
  }

  /** 音视频审核结果 */
  interface AiContentReviewResult {
    /** 任务的类型，可以取的值有：Porn：图片鉴别是否涉及令人反感的信息Terrorism：图片鉴别是否涉及令人不安全的信息Political：图片鉴别是否涉及令人不适宜的信息Porn.Asr：Asr 文字（ 音频中的文字）鉴别是否涉及令人反感的信息Porn.Ocr：Ocr 文字鉴别是否涉及令人反感的信息Political.Asr：Asr 文字（ 音频中的文字）鉴别是否涉及令人不适宜的信息Political.Ocr：Ocr 文字鉴别是否涉及令人不适宜的信息Terrorism.Ocr：Ocr 文字鉴别是否涉及令人不安全的信息Prohibited.Asr：Asr 文字（ 音频中的文字）鉴违禁Prohibited.Ocr：Ocr 文字鉴违禁 */
    Type?: string;
    /** 视频音视频审核任务（画面涉及令人反感的信息）的查询结果，当任务类型为 Porn 时有效。 */
    PornTask?: AiReviewTaskPornResult | null;
    /** 视频音视频审核任务（画面涉及令人不安全的信息）的查询结果，当任务类型为 Terrorism 时有效。 */
    TerrorismTask?: AiReviewTaskTerrorismResult | null;
    /** 视频音视频审核任务（画面涉及令人不适宜的信息）的查询结果，当任务类型为 Political 时有效。 */
    PoliticalTask?: AiReviewTaskPoliticalResult | null;
    /** 视频音视频审核任务（Asr 文字涉及令人反感的信息）的查询结果，当任务类型为 Porn.Asr 时有效。 */
    PornAsrTask?: AiReviewTaskPornAsrResult | null;
    /** 视频音视频审核任务（Ocr 文字涉及令人反感的信息）的查询结果，当任务类型为 Porn.Ocr 时有效。 */
    PornOcrTask?: AiReviewTaskPornOcrResult | null;
    /** 视频音视频审核任务（Asr 文字涉及令人不适宜的信息）的查询结果，当任务类型为 Political.Asr 时有效。 */
    PoliticalAsrTask?: AiReviewTaskPoliticalAsrResult | null;
    /** 视频音视频审核任务（Ocr 文字涉及令人不适宜的信息）的查询结果，当任务类型为 Political.Ocr 时有效。 */
    PoliticalOcrTask?: AiReviewTaskPoliticalOcrResult | null;
    /** 视频音视频审核任务（ Ocr 文字涉及令人不安全的信息）的查询结果，当任务类型为 Terrorism.Ocr 时有效。 */
    TerrorismOcrTask?: AiReviewTaskTerrorismOcrResult | null;
    /** 视频音视频审核 Ocr 文字鉴违禁任务的查询结果，当任务类型为 Prohibited.Ocr 时有效。 */
    ProhibitedOcrTask?: AiReviewTaskProhibitedOcrResult | null;
    /** 视频音视频审核 Asr 文字鉴违禁任务的查询结果，当任务类型为 Prohibited.Asr 时有效。 */
    ProhibitedAsrTask?: AiReviewTaskProhibitedAsrResult | null;
  }

  /** 音视频审核任务类型 */
  interface AiContentReviewTaskInput {
    /** 音视频审核模板 ID。 */
    Definition: number;
  }

  /** 智能识别结果。 */
  interface AiRecognitionResult {
    /** 任务的类型，取值范围：FaceRecognition：人脸识别，AsrWordsRecognition：语音关键词识别，OcrWordsRecognition：文本关键词识别，AsrFullTextRecognition：语音全文识别，AsrTranslateRecognition：语音翻译识别，OcrFullTextRecognition：文本全文识别，HeadTailRecognition：视频片头片尾识别，ObjectRecognition：物体识别。 */
    Type?: string;
    /** 视频片头片尾识别结果，当 Type 为 HeadTailRecognition 时有效。 */
    HeadTailTask?: AiRecognitionTaskHeadTailResult;
    /** 视频拆条识别结果，当 Type 为 SegmentRecognition 时有效。 */
    SegmentTask?: AiRecognitionTaskSegmentResult;
    /** 人脸识别结果，当 Type 为 FaceRecognition 时有效。 */
    FaceTask?: AiRecognitionTaskFaceResult;
    /** 语音关键词识别结果，当 Type 为 AsrWordsRecognition 时有效。 */
    AsrWordsTask?: AiRecognitionTaskAsrWordsResult;
    /** 语音全文识别结果，当 Type 为 AsrFullTextRecognition 时有效。 */
    AsrFullTextTask?: AiRecognitionTaskAsrFullTextResult;
    /** 语音翻译结果，当 Type 为 AsrTranslateRecognition 时有效。 */
    AsrTranslateTask?: AiRecognitionTaskAsrTranslateResult;
    /** 文本关键词识别结果，当 Type 为 OcrWordsRecognition 时有效。 */
    OcrWordsTask?: AiRecognitionTaskOcrWordsResult;
    /** 文本全文识别结果，当 Type 为 OcrFullTextRecognition 时有效。 */
    OcrFullTextTask?: AiRecognitionTaskOcrFullTextResult;
    /** 物体识别结果，当 Type 为 ObjectRecognition 时有效。 */
    ObjectTask?: AiRecognitionTaskObjectResult;
  }

  /** 语音全文识别结果。 */
  interface AiRecognitionTaskAsrFullTextResult {
    /** 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。 */
    Status?: string;
    /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/266/50368) 列表。 */
    ErrCodeExt?: string;
    /** 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。 */
    ErrCode?: number;
    /** 错误信息。 */
    Message?: string;
    /** 语音全文识别任务输入信息。 */
    Input?: AiRecognitionTaskAsrFullTextResultInput;
    /** 语音全文识别任务输出信息。 */
    Output?: AiRecognitionTaskAsrFullTextResultOutput;
    /** 语音全文识别任务进度，取值范围 [0-100] 。 */
    Progress?: number;
    /** 语音全文识别任务开始执行的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    BeginProcessTime?: string;
    /** 语音全文识别任务执行完毕的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    FinishTime?: string;
  }

  /** 语音全文识别的输入。 */
  interface AiRecognitionTaskAsrFullTextResultInput {
    /** 语音全文识别模板 ID。 */
    Definition?: number;
  }

  /** 语音全文识别结果。 */
  interface AiRecognitionTaskAsrFullTextResultOutput {
    /** 语音全文识别片段列表。注意 ：该列表最多仅展示前 100 个元素。如希望获得完整结果，请从 SegmentSetFileUrl 对应的文件中获取。 */
    SegmentSet?: AiRecognitionTaskAsrFullTextSegmentItem[];
    /** 语音全文识别片段列表文件 URL。文件的内容为 JSON，数据结构与 SegmentSet 字段一致。 （文件不会永久存储，到达SegmentSetFileUrlExpireTime 时间点后文件将被删除）。 */
    SegmentSetFileUrl?: string;
    /** 语音全文识别片段列表文件 URL 失效时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    SegmentSetFileUrlExpireTime?: string;
    /** 生成的字幕列表，对应 [语音全文识别任务控制参数](https://cloud.tencent.com/document/api/266/31773) SubtitleFormats。 */
    SubtitleSet?: AiRecognitionTaskAsrFullTextResultOutputSubtitleItem[];
    /** 生成的字幕文件 Url，对应 [语音全文识别任务控制参数](https://cloud.tencent.com/document/api/266/31773) SubtitleFormat。 */
    SubtitleUrl?: string;
  }

  /** 字幕信息。 */
  interface AiRecognitionTaskAsrFullTextResultOutputSubtitleItem {
    /** 媒资字幕 ID，用于媒资字幕管理，仅当 Format 为 vtt 时有效。注意：2024-11-01T10:00:00Z 之前的任务返回此字段无效。 */
    Id?: string;
    /** 媒资字幕名字，用于播放器展示，仅当 Format 为 vtt 时有效。注意：2024-11-01T10:00:00Z 之前的任务返回此字段无效。 */
    Name?: string;
    /** 字幕语言。 */
    Language?: string;
    /** 字幕文件格式，取值范围：vtt：WebVTT 字幕文件；srt：SRT 字幕文件。 */
    Format?: string;
    /** 字幕文件 Url。 */
    Url?: string;
  }

  /** 语音全文识别片段。 */
  interface AiRecognitionTaskAsrFullTextSegmentItem {
    /** 识别片段置信度。取值：0~100。 */
    Confidence?: number;
    /** 识别片段起始的偏移时间，单位：秒。 */
    StartTimeOffset?: number;
    /** 识别片段终止的偏移时间，单位：秒。 */
    EndTimeOffset?: number;
    /** 识别文本。 */
    Text?: string;
  }

  /** 语音翻译结果。 */
  interface AiRecognitionTaskAsrTranslateResult {
    /** 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。 */
    Status?: string;
    /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/266/50368) 列表。 */
    ErrCodeExt?: string;
    /** 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。 */
    ErrCode?: number;
    /** 错误信息。 */
    Message?: string;
    /** 语音翻译任务输入信息。 */
    Input?: AiRecognitionTaskAsrTranslateResultInput;
    /** 语音翻译任务输出信息。 */
    Output?: AiRecognitionTaskAsrTranslateResultOutput;
    /** 语音翻译任务进度，取值范围 [0-100] 。 */
    Progress?: number;
    /** 语音翻译任务开始执行的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    BeginProcessTime?: string;
    /** 语音翻译任务执行完毕的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    FinishTime?: string;
  }

  /** 语音翻译的输入。 */
  interface AiRecognitionTaskAsrTranslateResultInput {
    /** 语音翻译模板 ID。 */
    Definition?: number;
  }

  /** 语音翻译结果。 */
  interface AiRecognitionTaskAsrTranslateResultOutput {
    /** 语音翻译片段列表。注意 ：该列表最多仅展示前 100 个元素。如希望获得完整结果，请从 SegmentSetFileUrl 对应的文件中获取。 */
    SegmentSet?: AiRecognitionTaskAsrTranslateSegmentItem[];
    /** 语音翻译片段列表文件 URL。文件的内容为 JSON，数据结构与 SegmentSet 字段一致。 （文件不会永久存储，到达SegmentSetFileUrlExpireTime 时间点后文件将被删除）。 */
    SegmentSetFileUrl?: string;
    /** 语音翻译片段列表文件 URL 失效时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    SegmentSetFileUrlExpireTime?: string;
    /** 生成的字幕列表。 */
    SubtitleSet?: AiRecognitionTaskAsrFullTextResultOutputSubtitleItem[];
  }

  /** 语音翻译识别片段。 */
  interface AiRecognitionTaskAsrTranslateSegmentItem {
    /** 语音翻译识别片段置信度。取值：0~100。 */
    Confidence?: number;
    /** 语音翻译识别片段起始的偏移时间，单位：秒。 */
    StartTimeOffset?: number;
    /** 语音翻译识别片段终止的偏移时间，单位：秒。 */
    EndTimeOffset?: number;
    /** 识别文本。 */
    Text?: string;
    /** 翻译文本。 */
    Translation?: string;
  }

  /** 语音关键词识别结果。 */
  interface AiRecognitionTaskAsrWordsResult {
    /** 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。 */
    Status?: string;
    /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/266/50368) 列表。 */
    ErrCodeExt?: string;
    /** 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。 */
    ErrCode?: number;
    /** 错误信息。 */
    Message?: string;
    /** 语音关键词识别任务输入信息。 */
    Input?: AiRecognitionTaskAsrWordsResultInput;
    /** 语音关键词识别任务输出信息。 */
    Output?: AiRecognitionTaskAsrWordsResultOutput;
    /** 语音关键词识别任务进度，取值范围 [0-100] 。 */
    Progress?: number;
    /** 语音关键词识别任务开始执行的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    BeginProcessTime?: string;
    /** 语音关键词识别任务执行完毕的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    FinishTime?: string;
  }

  /** 语音关键词识别输入。 */
  interface AiRecognitionTaskAsrWordsResultInput {
    /** 语音关键词识别模板 ID。 */
    Definition?: number;
  }

  /** 语音关键词识别结果。 */
  interface AiRecognitionTaskAsrWordsResultItem {
    /** 语音关键词。 */
    Word?: string;
    /** 语音关键词出现的时间片段列表。 */
    SegmentSet?: AiRecognitionTaskAsrWordsSegmentItem[];
  }

  /** 语音关键词识别输出。 */
  interface AiRecognitionTaskAsrWordsResultOutput {
    /** 语音关键词识别结果集。注意 ：该列表最多仅展示前 100 个元素。如希望获得完整结果，请从 ResultSetFileUrl 对应的文件中获取。 */
    ResultSet: AiRecognitionTaskAsrWordsResultItem[];
    /** 语音关键词识别结果集文件 URL。文件的内容为 JSON，数据结构与 ResultSet 字段一致。 （文件不会永久存储，到达ResultSetFileUrlExpireTime 时间点后文件将被删除）。 */
    ResultSetFileUrl: string;
    /** 语音关键词识别结果集文件 URL 失效时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    ResultSetFileUrlExpireTime: string;
  }

  /** 语音识别片段。 */
  interface AiRecognitionTaskAsrWordsSegmentItem {
    /** 识别片段起始的偏移时间，单位：秒。 */
    StartTimeOffset?: number;
    /** 识别片段终止的偏移时间，单位：秒。 */
    EndTimeOffset?: number;
    /** 识别片段置信度。取值：0~100。 */
    Confidence?: number;
  }

  /** 人脸识别结果。 */
  interface AiRecognitionTaskFaceResult {
    /** 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。 */
    Status?: string;
    /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/266/50368) 列表。 */
    ErrCodeExt?: string;
    /** 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。 */
    ErrCode?: number;
    /** 错误信息。 */
    Message?: string;
    /** 人脸识别任务输入信息。 */
    Input?: AiRecognitionTaskFaceResultInput;
    /** 人脸识别任务输出信息。 */
    Output?: AiRecognitionTaskFaceResultOutput;
    /** 人脸识别任务进度，取值范围 [0-100] 。 */
    Progress?: number;
    /** 人脸识别任务开始执行的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    BeginProcessTime?: string;
    /** 人脸识别任务执行完毕的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    FinishTime?: string;
  }

  /** 人脸识别输入。 */
  interface AiRecognitionTaskFaceResultInput {
    /** 人脸识别模板 ID。 */
    Definition?: number;
  }

  /** 人脸识别结果 */
  interface AiRecognitionTaskFaceResultItem {
    /** 人物唯一标识 ID。 */
    Id?: string;
    /** 人物库类型，表示识别出的人物来自哪个人物库：Default：默认人物库；UserDefine：用户自定义人物库。 */
    Type?: string;
    /** 人物名称。 */
    Name?: string;
    /** 人物出现的片段结果集。 */
    SegmentSet?: AiRecognitionTaskFaceSegmentItem[];
  }

  /** 智能人脸识别输出。 */
  interface AiRecognitionTaskFaceResultOutput {
    /** 智能人脸识别结果集。注意 ：该列表最多仅展示前 100 个元素。如希望获得完整结果，请从 ResultSetFileUrl 对应的文件中获取。 */
    ResultSet: AiRecognitionTaskFaceResultItem[];
    /** 智能人脸识别结果集文件 URL。文件的内容为 JSON，数据结构与 ResultSet 字段一致。 （文件不会永久存储，到达ResultSetFileUrlExpireTime 时间点后文件将被删除）。 */
    ResultSetFileUrl: string;
    /** 智能人脸识别结果集文件 URL 失效时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    ResultSetFileUrlExpireTime: string;
  }

  /** 人脸识别结果片段 */
  interface AiRecognitionTaskFaceSegmentItem {
    /** 识别片段起始的偏移时间，单位：秒。 */
    StartTimeOffset?: number;
    /** 识别片段终止的偏移时间，单位：秒。 */
    EndTimeOffset?: number;
    /** 识别片段置信度。取值：0~100。 */
    Confidence?: number;
    /** 识别结果的区域坐标。数组包含 4 个元素 [x1,y1,x2,y2]，依次表示区域左上点、右下点的横纵坐标。 */
    AreaCoordSet?: number[];
  }

  /** 视频片头片尾识别结果。 */
  interface AiRecognitionTaskHeadTailResult {
    /** 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。 */
    Status?: string;
    /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/266/50368) 列表。 */
    ErrCodeExt?: string;
    /** 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。 */
    ErrCode?: number;
    /** 错误信息。 */
    Message?: string;
    /** 视频片头片尾识别任务输入信息。 */
    Input?: AiRecognitionTaskHeadTailResultInput;
    /** 视频片头片尾识别任务输出信息。 */
    Output?: AiRecognitionTaskHeadTailResultOutput;
    /** 视频片头片尾识别任务进度，取值范围 [0-100] 。 */
    Progress?: number;
    /** 视频片头片尾识别任务开始执行的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    BeginProcessTime?: string;
    /** 视频片头片尾识别任务执行完毕的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    FinishTime?: string;
  }

  /** 视频片头片尾识别的输入。 */
  interface AiRecognitionTaskHeadTailResultInput {
    /** 视频片头片尾识别模板 ID。 */
    Definition?: number;
  }

  /** 视频片头片尾识别输出。 */
  interface AiRecognitionTaskHeadTailResultOutput {
    /** 片头识别置信度。取值：0~100。 */
    HeadConfidence?: number;
    /** 视频片头的结束时间点，单位：秒。 */
    HeadTimeOffset?: number;
    /** 片尾识别置信度。取值：0~100。 */
    TailConfidence?: number;
    /** 视频片尾的开始时间点，单位：秒。 */
    TailTimeOffset?: number;
  }

  /** 视频内容识别输入参数类型 */
  interface AiRecognitionTaskInput {
    /** 视频智能识别模板 ID 。 */
    Definition: number;
  }

  /** 物体识别结果。 */
  interface AiRecognitionTaskObjectResult {
    /** 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。 */
    Status?: string;
    /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/266/50368) 列表。 */
    ErrCodeExt?: string;
    /** 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。 */
    ErrCode?: number;
    /** 错误信息。 */
    Message?: string;
    /** 物体识别任务输入信息。 */
    Input?: AiRecognitionTaskObjectResultInput;
    /** 物体识别任务输出信息。 */
    Output?: AiRecognitionTaskObjectResultOutput;
    /** 物体识别任务进度，取值范围 [0-100] 。 */
    Progress?: number;
    /** 物体识别任务开始执行的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    BeginProcessTime?: string;
    /** 物体识别任务执行完毕的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    FinishTime?: string;
  }

  /** 物体识别任务输入类型。 */
  interface AiRecognitionTaskObjectResultInput {
    /** 物体识别模板 ID。 */
    Definition?: number;
  }

  /** 单个物体识别结果。 */
  interface AiRecognitionTaskObjectResultItem {
    /** 识别的物体名称。 */
    Name?: string;
    /** 物体出现的片段列表。 */
    SegmentSet?: AiRecognitionTaskObjectSeqmentItem[];
    /** 物体出现的片段列表。 */
    RecognitionSegmentSet?: AiRecognitionTaskObjectSegmentItem[];
  }

  /** 智能物体识别输出。 */
  interface AiRecognitionTaskObjectResultOutput {
    /** 智能物体识别结果集。注意 ：该列表最多仅展示前 100 个元素。如希望获得完整结果，请从 ResultSetFileUrl 对应的文件中获取。 */
    ResultSet: AiRecognitionTaskObjectResultItem[];
    /** 智能物体识别结果集文件 URL。文件的内容为 JSON，数据结构与 ResultSet 字段一致。 （文件不会永久存储，到达ResultSetFileUrlExpireTime 时间点后文件将被删除）。 */
    ResultSetFileUrl: string;
    /** 智能物体识别结果集文件 URL 失效时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    ResultSetFileUrlExpireTime: string;
  }

  /** 物体识别结果片段。 */
  interface AiRecognitionTaskObjectSegmentItem {
    /** 识别片段起始的偏移时间，单位：秒。 */
    StartTimeOffset?: number;
    /** 识别片段终止的偏移时间，单位：秒。 */
    EndTimeOffset?: number;
    /** 识别片段置信度。取值：0~100。 */
    Confidence?: number;
    /** 识别结果的区域坐标。数组包含 4 个元素 [x1,y1,x2,y2]，依次表示区域左上点、右下点的横纵坐标。 */
    AreaCoordSet?: number[];
  }

  /** 物体识别结果片段。 */
  interface AiRecognitionTaskObjectSeqmentItem {
    /** 识别片段起始的偏移时间，单位：秒。 */
    StartTimeOffset: number;
    /** 识别片段终止的偏移时间，单位：秒。 */
    EndTimeOffset: number;
    /** 识别片段置信度。取值：0~100。 */
    Confidence: number;
    /** 识别结果的区域坐标。数组包含 4 个元素 [x1,y1,x2,y2]，依次表示区域左上点、右下点的横纵坐标。 */
    AreaCoordSet: number[];
  }

  /** 文本全文识别结果。 */
  interface AiRecognitionTaskOcrFullTextResult {
    /** 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。 */
    Status?: string;
    /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/266/50368) 列表。 */
    ErrCodeExt?: string;
    /** 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。 */
    ErrCode?: number;
    /** 错误信息。 */
    Message?: string;
    /** 文本全文识别任务输入信息。 */
    Input?: AiRecognitionTaskOcrFullTextResultInput;
    /** 文本全文识别任务输出信息。 */
    Output?: AiRecognitionTaskOcrFullTextResultOutput;
    /** 文本全文识别任务进度，取值范围 [0-100] 。 */
    Progress?: number;
    /** 文本全文识别任务开始执行的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    BeginProcessTime?: string;
    /** 文本全文识别任务执行完毕的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    FinishTime?: string;
  }

  /** 文本全文识别输入。 */
  interface AiRecognitionTaskOcrFullTextResultInput {
    /** 文本全文识别模板 ID。 */
    Definition?: number;
  }

  /** 文本全文识别输出。 */
  interface AiRecognitionTaskOcrFullTextResultOutput {
    /** 文本全文识别结果集。注意 ：该列表最多仅展示前 100 个元素。如希望获得完整结果，请从 SegmentSetFileUrl 对应的文件中获取。 */
    SegmentSet: AiRecognitionTaskOcrFullTextSegmentItem[];
    /** 文本全文识别结果集文件 URL。文件的内容为 JSON，数据结构与 ResultSet 字段一致。 （文件不会永久存储，到达SegmentSetFileUrlExpireTime 时间点后文件将被删除）。 */
    SegmentSetFileUrl: string;
    /** 文本全文识别结果集文件 URL 失效时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    SegmentSetFileUrlExpireTime: string;
  }

  /** 文本全文识别片段。 */
  interface AiRecognitionTaskOcrFullTextSegmentItem {
    /** 识别片段起始的偏移时间，单位：秒。 */
    StartTimeOffset?: number;
    /** 识别片段终止的偏移时间，单位：秒。 */
    EndTimeOffset?: number;
    /** 识别片段结果集。 */
    TextSet?: AiRecognitionTaskOcrFullTextSegmentTextItem[];
  }

  /** 文本全文识别片段。 */
  interface AiRecognitionTaskOcrFullTextSegmentTextItem {
    /** 识别片段置信度。取值：0~100。 */
    Confidence?: number;
    /** 识别结果的区域坐标。数组包含 4 个元素 [x1,y1,x2,y2]，依次表示区域左上点、右下点的横纵坐标。 */
    AreaCoordSet?: number[];
    /** 识别文本。 */
    Text?: string;
  }

  /** 文本关键识别结果。 */
  interface AiRecognitionTaskOcrWordsResult {
    /** 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。 */
    Status?: string;
    /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/266/50368) 列表。 */
    ErrCodeExt?: string;
    /** 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。 */
    ErrCode?: number;
    /** 错误信息。 */
    Message?: string;
    /** 文本关键词识别任务输入信息。 */
    Input?: AiRecognitionTaskOcrWordsResultInput;
    /** 文本关键词识别任务输出信息。 */
    Output?: AiRecognitionTaskOcrWordsResultOutput;
    /** 文本关键词识别任务进度，取值范围 [0-100] 。 */
    Progress?: number;
    /** 文本关键词识别任务开始执行的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    BeginProcessTime?: string;
    /** 文本关键词识别任务执行完毕的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    FinishTime?: string;
  }

  /** 文本关键词识别输入。 */
  interface AiRecognitionTaskOcrWordsResultInput {
    /** 文本关键词识别模板 ID。 */
    Definition?: number;
  }

  /** 文本关键词识别结果。 */
  interface AiRecognitionTaskOcrWordsResultItem {
    /** 文本关键词。 */
    Word?: string;
    /** 文本关键出现的片段列表。 */
    SegmentSet?: AiRecognitionTaskOcrWordsSegmentItem[];
  }

  /** 文本关键词识别输出。 */
  interface AiRecognitionTaskOcrWordsResultOutput {
    /** 文本关键词识别结果集。注意 ：该列表最多仅展示前 100 个元素。如希望获得完整结果，请从 ResultSetFileUrl 对应的文件中获取。 */
    ResultSet: AiRecognitionTaskOcrWordsResultItem[];
    /** 文本关键词识别结果集文件 URL。文件的内容为 JSON，数据结构与 ResultSet 字段一致。 （文件不会永久存储，到达ResultSetFileUrlExpireTime 时间点后文件将被删除）。 */
    ResultSetFileUrl: string;
    /** 文本关键词识别结果集文件 URL 失效时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    ResultSetFileUrlExpireTime: string;
  }

  /** 文本识别片段。 */
  interface AiRecognitionTaskOcrWordsSegmentItem {
    /** 识别片段起始的偏移时间，单位：秒。 */
    StartTimeOffset?: number;
    /** 识别片段终止的偏移时间，单位：秒。 */
    EndTimeOffset?: number;
    /** 识别片段置信度。取值：0~100。 */
    Confidence?: number;
    /** 识别结果的区域坐标。数组包含 4 个元素 [x1,y1,x2,y2]，依次表示区域左上点、右下点的横纵坐标。 */
    AreaCoordSet?: number[];
  }

  /** 视频拆条结果。 */
  interface AiRecognitionTaskSegmentResult {
    /** 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。 */
    Status?: string;
    /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/266/50368) 列表。 */
    ErrCodeExt?: string;
    /** 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。 */
    ErrCode?: number;
    /** 错误信息。 */
    Message?: string;
    /** 视频拆条任务输入信息。 */
    Input?: AiRecognitionTaskSegmentResultInput;
    /** 视频拆条任务输出信息。 */
    Output?: AiRecognitionTaskSegmentResultOutput;
    /** 视频拆条任务进度，取值范围 [0-100] 。 */
    Progress?: number;
    /** 视频拆条任务开始执行的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    BeginProcessTime?: string;
    /** 视频拆条任务执行完毕的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    FinishTime?: string;
  }

  /** 视频拆条输入。 */
  interface AiRecognitionTaskSegmentResultInput {
    /** 视频拆条模板 ID。 */
    Definition?: number;
  }

  /** 视频拆条输出。 */
  interface AiRecognitionTaskSegmentResultOutput {
    /** 视频拆条片段列表。注意 ：该列表最多仅展示前 100 个元素。如希望获得完整结果，请从 SegmentSetFileUrl 对应的文件中获取。 */
    SegmentSet: AiRecognitionTaskSegmentSegmentItem[];
    /** 视频拆条片段列表文件 URL。文件的内容为 JSON，数据结构与 SegmentSet 字段一致。 （文件不会永久存储，到达SegmentSetFileUrlExpireTime 时间点后文件将被删除）。 */
    SegmentSetFileUrl: string;
    /** 视频拆条片段列表文件 URL 失效时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    SegmentSetFileUrlExpireTime: string;
  }

  /** 视频拆条片段。 */
  interface AiRecognitionTaskSegmentSegmentItem {
    /** 文件 ID。仅当处理的是点播文件并且拆条生成的子片段为点播文件时有效。 */
    FileId?: string;
    /** 视频拆条片段 Url。 */
    SegmentUrl?: string;
    /** 拆条片段置信度。取值：0~100。 */
    Confidence?: number;
    /** 拆条片段起始的偏移时间，单位：秒。 */
    StartTimeOffset?: number;
    /** 拆条片段终止的偏移时间，单位：秒。 */
    EndTimeOffset?: number;
    /** 拆条封面图片 Url。 */
    CovImgUrl?: string;
    /** 特殊字段，请忽略。 */
    SpecialInfo?: string;
  }

  /** 音视频审核 Asr 文字涉及令人不适宜的信息、违规任务输入参数类型 */
  interface AiReviewPoliticalAsrTaskInput {
    /** 鉴别涉及令人不适宜信息的模板 ID。 */
    Definition?: number;
  }

  /** Asr 文字涉及令人不适宜的信息 */
  interface AiReviewPoliticalAsrTaskOutput {
    /** Asr 文字涉及令人不适宜的信息、违规评分，分值为0到100。 */
    Confidence?: number;
    /** Asr 文字涉及令人不适宜的信息、违规结果建议，取值范围：pass。review。block。 */
    Suggestion?: string;
    /** Asr 文字有涉及令人不适宜的信息、违规嫌疑的视频片段列表。注意 ：该列表最多仅展示前 100 个元素。如希望获得完整结果，请从 SegmentSetFileUrl 对应的文件中获取。 */
    SegmentSet?: MediaContentReviewAsrTextSegmentItem[];
    /** Asr 文字有涉及令人不适宜的信息、违规嫌疑的视频片段列表文件 URL。文件的内容为 JSON，数据结构与 SegmentSet 字段一致。 （文件不会永久存储，到达 SegmentSetFileUrlExpireTime 时间点后文件将被删除）。 */
    SegmentSetFileUrl?: string;
    /** Asr 文字有涉及令人不适宜的信息、违规嫌疑的视频片段列表文件 URL 失效时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    SegmentSetFileUrlExpireTime?: string;
  }

  /** 音视频审核 Ocr 文字涉及令人不适宜信息的任务输入参数类型 */
  interface AiReviewPoliticalOcrTaskInput {
    /** 鉴别涉及令人不适宜信息的模板 ID。 */
    Definition?: number;
  }

  /** Ocr 文字涉及令人不适宜的信息 */
  interface AiReviewPoliticalOcrTaskOutput {
    /** Ocr 文字涉及令人不适宜的信息、违规评分，分值为0到100。 */
    Confidence?: number;
    /** Ocr 文字涉及令人不适宜的信息、违规结果建议，取值范围：pass。review。block。 */
    Suggestion?: string;
    /** Ocr 文字有涉及令人不适宜的信息、违规嫌疑的视频片段列表。注意 ：该列表最多仅展示前 100 个元素。如希望获得完整结果，请从 SegmentSetFileUrl 对应的文件中获取。 */
    SegmentSet?: MediaContentReviewOcrTextSegmentItem[];
    /** Ocr 文字有涉及令人不适宜的信息、违规嫌疑的视频片段列表文件 URL。文件的内容为 JSON，数据结构与 SegmentSet 字段一致。 （文件不会永久存储，到达 SegmentSetFileUrlExpireTime 时间点后文件将被删除）。 */
    SegmentSetFileUrl?: string;
    /** Ocr 文字有涉及令人不适宜的信息、违规嫌疑的视频片段列表文件 URL 失效时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    SegmentSetFileUrlExpireTime?: string;
  }

  /** 音视频审核涉及令人不适宜信息的任务输入参数类型 */
  interface AiReviewPoliticalTaskInput {
    /** 鉴别涉及令人不适宜信息的模板 ID。 */
    Definition?: number;
  }

  /** 涉及令人不适宜的信息 */
  interface AiReviewPoliticalTaskOutput {
    /** 视频涉及令人不适宜信息的评分，分值为0到100。 */
    Confidence?: number;
    /** 涉及令人不适宜信息的结果建议，取值范围：pass。review。block。 */
    Suggestion?: string;
    /** 视频涉及令人不适宜信息的结果标签。音视频审核模板[画面鉴政任务控制参数](https://cloud.tencent.com/document/api/266/31773)里 LabelSet 参数与此参数取值范围的对应关系：violation_photo：violation_photo：违规图标。其他（即 politician/entertainment/sport/entrepreneur/scholar/celebrity/military）：politician：相关人物。 */
    Label?: string;
    /** 有涉及令人不适宜信息嫌疑的视频片段列表。注意 ：该列表最多仅展示前 100 个元素。如希望获得完整结果，请从 SegmentSetFileUrl 对应的文件中获取。 */
    SegmentSet?: MediaContentReviewPoliticalSegmentItem[];
    /** 有涉及令人不适宜的信息嫌疑的视频片段列表文件 URL。文件的内容为 JSON，数据结构与 SegmentSet 字段一致。 （文件不会永久存储，到达 SegmentSetFileUrlExpireTime 时间点后文件将被删除）。 */
    SegmentSetFileUrl?: string;
    /** 有涉及令人不适宜的信息嫌疑的视频片段列表文件 URL 失效时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    SegmentSetFileUrlExpireTime?: string;
  }

  /** 音视频审核 Asr 文字涉及令人反感的信息的任务输入参数类型 */
  interface AiReviewPornAsrTaskInput {
    /** 鉴别涉及令人反感的信息的模板 ID。 */
    Definition?: number;
  }

  /** Asr 文字涉及令人反感的信息 */
  interface AiReviewPornAsrTaskOutput {
    /** Asr 文字涉及令人反感的信息的评分，分值为0到100。 */
    Confidence?: number;
    /** Asr 文字涉及令人反感的信息的结果建议，取值范围：pass。review。block。 */
    Suggestion?: string;
    /** Asr 文字有涉及令人反感的信息的嫌疑的视频片段列表。注意 ：该列表最多仅展示前 100 个元素。如希望获得完整结果，请从 SegmentSetFileUrl 对应的文件中获取。 */
    SegmentSet?: MediaContentReviewAsrTextSegmentItem[];
    /** Asr 文字有涉及令人反感的信息的嫌疑的视频片段列表文件 URL。文件的内容为 JSON，数据结构与 SegmentSet 字段一致。 （文件不会永久存储，到达 SegmentSetFileUrlExpireTime 时间点后文件将被删除）。 */
    SegmentSetFileUrl?: string;
    /** Asr 文字有涉及令人反感的信息的嫌疑的视频片段列表文件 URL 失效时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    SegmentSetFileUrlExpireTime?: string;
  }

  /** 音视频审核 Ocr 文字涉及令人反感的信息的任务输入参数类型 */
  interface AiReviewPornOcrTaskInput {
    /** 鉴别涉及令人反感的信息的模板 ID。 */
    Definition?: number;
  }

  /** Ocr 文字涉及令人反感的信息 */
  interface AiReviewPornOcrTaskOutput {
    /** Ocr 文字涉及令人反感的信息的评分，分值为0到100。 */
    Confidence?: number;
    /** Ocr 文字涉及令人反感的信息的结果建议，取值范围：pass。review。block。 */
    Suggestion?: string;
    /** Ocr 文字有涉及令人反感的信息的嫌疑的视频片段列表。注意 ：该列表最多仅展示前 100 个元素。如希望获得完整结果，请从 SegmentSetFileUrl 对应的文件中获取。 */
    SegmentSet?: MediaContentReviewOcrTextSegmentItem[];
    /** Ocr 文字有涉及令人反感的信息的嫌疑的视频片段列表文件 URL。文件的内容为 JSON，数据结构与 SegmentSet 字段一致。 （文件不会永久存储，到达 SegmentSetFileUrlExpireTime 时间点后文件将被删除）。 */
    SegmentSetFileUrl?: string;
    /** Ocr 文字有涉及令人反感的信息的嫌疑的视频片段列表文件 URL 失效时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    SegmentSetFileUrlExpireTime?: string;
  }

  /** 音视频审核涉及令人反感的信息的任务输入参数类型 */
  interface AiReviewPornTaskInput {
    /** 鉴别涉及令人反感的信息的模板 ID。 */
    Definition: number;
  }

  /** 鉴别涉及令人反感的信息的结果信息 */
  interface AiReviewPornTaskOutput {
    /** 视频鉴别涉及令人反感的信息的评分，分值为0到100。 */
    Confidence?: number;
    /** 鉴别涉及令人反感的信息的结果建议，取值范围：pass。review。block。 */
    Suggestion?: string;
    /** 视频鉴别涉及令人反感的信息的结果标签，取值范围：porn：色情。sexy：性感。vulgar：低俗。intimacy：亲密行为。 */
    Label?: string;
    /** 有涉及令人反感的信息的嫌疑的视频片段列表。注意 ：该列表最多仅展示前 100 个元素。如希望获得完整结果，请从 SegmentSetFileUrl 对应的文件中获取。 */
    SegmentSet?: MediaContentReviewSegmentItem[];
    /** 涉及令人反感的信息的嫌疑的视频片段列表文件 URL。文件的内容为 JSON，数据结构与 SegmentSet 字段一致。 （文件不会永久存储，到达SegmentSetFileUrlExpireTime 时间点后文件将被删除）。 */
    SegmentSetFileUrl?: string;
    /** 涉及令人反感的信息的嫌疑的视频片段列表文件 URL 失效时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    SegmentSetFileUrlExpireTime?: string;
  }

  /** 音视频审核 Asr 文字鉴违禁任务输入参数类型 */
  interface AiReviewProhibitedAsrTaskInput {
    /** 鉴违禁模板 ID。 */
    Definition?: number;
  }

  /** Asr 文字涉违禁信息 */
  interface AiReviewProhibitedAsrTaskOutput {
    /** Asr 文字涉违禁评分，分值为0到100。 */
    Confidence?: number;
    /** Asr 文字涉违禁结果建议，取值范围：pass。review。block。 */
    Suggestion?: string;
    /** Asr 文字有涉违禁嫌疑的视频片段列表。注意 ：该列表最多仅展示前 100 个元素。如希望获得完整结果，请从 SegmentSetFileUrl 对应的文件中获取。 */
    SegmentSet?: MediaContentReviewAsrTextSegmentItem[];
    /** Asr 文字有涉违禁嫌疑的视频片段列表文件 URL。文件的内容为 JSON，数据结构与 SegmentSet 字段一致。 （文件不会永久存储，到达 SegmentSetFileUrlExpireTime 时间点后文件将被删除）。 */
    SegmentSetFileUrl?: string;
    /** Asr 文字有涉违禁嫌疑的视频片段列表文件 URL 失效时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    SegmentSetFileUrlExpireTime?: string;
  }

  /** 音视频审核 Ocr 文字鉴违禁任务输入参数类型 */
  interface AiReviewProhibitedOcrTaskInput {
    /** 鉴违禁模板 ID。 */
    Definition?: number;
  }

  /** Ocr 文字涉违禁信息 */
  interface AiReviewProhibitedOcrTaskOutput {
    /** Ocr 文字涉违禁评分，分值为0到100。 */
    Confidence?: number;
    /** Ocr 文字涉违禁结果建议，取值范围：pass。review。block。 */
    Suggestion?: string;
    /** Ocr 文字有涉违禁嫌疑的视频片段列表。注意 ：该列表最多仅展示前 100 个元素。如希望获得完整结果，请从 SegmentSetFileUrl 对应的文件中获取。 */
    SegmentSet?: MediaContentReviewOcrTextSegmentItem[];
    /** Ocr 文字有涉违禁嫌疑的视频片段列表文件 URL。文件的内容为 JSON，数据结构与 SegmentSet 字段一致。 （文件不会永久存储，到达 SegmentSetFileUrlExpireTime 时间点后文件将被删除）。 */
    SegmentSetFileUrl?: string;
    /** Ocr 文字有涉违禁嫌疑的视频片段列表文件 URL 失效时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    SegmentSetFileUrlExpireTime?: string;
  }

  /** 音视频审核 Asr 文字涉及令人不适宜信息、违规任务结果类型 */
  interface AiReviewTaskPoliticalAsrResult {
    /** 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。 */
    Status?: string;
    /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/266/50368) 列表。 */
    ErrCodeExt?: string;
    /** 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。 */
    ErrCode?: number;
    /** 错误信息。 */
    Message?: string;
    /** 音视频审核 Asr 文字涉及令人不适宜信息的任务输入。 */
    Input?: AiReviewPoliticalAsrTaskInput;
    /** 音视频审核 Asr 文字涉及令人不适宜信息的任务输出。 */
    Output?: AiReviewPoliticalAsrTaskOutput;
    /** 音视频审核 Asr 文字涉及令人不适宜信息的任务进度，取值范围 [0-100] 。 */
    Progress?: number;
  }

  /** 音视频审核 Ocr 文字涉及令人不适宜信息、违规任务结果类型 */
  interface AiReviewTaskPoliticalOcrResult {
    /** 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。 */
    Status?: string;
    /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/266/50368) 列表。 */
    ErrCodeExt?: string;
    /** 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。 */
    ErrCode?: number;
    /** 错误信息。 */
    Message?: string;
    /** 音视频审核 Ocr 文字涉及令人不适宜信息的任务输入。 */
    Input?: AiReviewPoliticalOcrTaskInput;
    /** 音视频审核 Ocr 文字涉及令人不适宜信息的任务输出。 */
    Output?: AiReviewPoliticalOcrTaskOutput;
    /** 音视频审核 Ocr 文字涉及令人不适宜信息的任务进度，取值范围 [0-100] 。 */
    Progress?: number;
  }

  /** 音视频审核涉及令人不适宜信息的任务结果类型 */
  interface AiReviewTaskPoliticalResult {
    /** 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。 */
    Status?: string;
    /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/266/50368) 列表。 */
    ErrCodeExt?: string;
    /** 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。 */
    ErrCode?: number;
    /** 错误信息。 */
    Message?: string;
    /** 音视频审核涉及令人不适宜信息的任务输入。 */
    Input?: AiReviewPoliticalTaskInput;
    /** 音视频审核涉及令人不适宜信息的任务输出。 */
    Output?: AiReviewPoliticalTaskOutput;
    /** 音视频审核涉及令人不适宜信息的任务进度，取值范围 [0-100] 。 */
    Progress?: number;
  }

  /** 音视频审核 Asr 文字涉及令人反感的信息的任务结果类型 */
  interface AiReviewTaskPornAsrResult {
    /** 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。 */
    Status?: string;
    /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/266/50368) 列表。 */
    ErrCodeExt?: string;
    /** 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。 */
    ErrCode?: number;
    /** 错误信息。 */
    Message?: string;
    /** 音视频审核 Asr 文字涉及令人反感的信息的任务输入。 */
    Input?: AiReviewPornAsrTaskInput;
    /** 音视频审核 Asr 文字涉及令人反感的信息的任务输出。 */
    Output?: AiReviewPornAsrTaskOutput;
    /** 音视频审核 Asr 文字涉及令人反感的信息的任务进度，取值范围 [0-100] 。 */
    Progress?: number;
  }

  /** 音视频审核 Ocr 文字涉及令人反感的信息的任务结果类型 */
  interface AiReviewTaskPornOcrResult {
    /** 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。 */
    Status?: string;
    /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/266/50368) 列表。 */
    ErrCodeExt?: string;
    /** 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。 */
    ErrCode?: number;
    /** 错误信息。 */
    Message?: string;
    /** 音视频审核 Ocr 文字涉及令人反感的信息的任务输入。 */
    Input?: AiReviewPornOcrTaskInput;
    /** Ocr 文字音视频审核涉及令人反感的信息的任务输出。 */
    Output?: AiReviewPornOcrTaskOutput;
    /** Ocr 文字音视频审核涉及令人反感的信息的任务进度，取值范围 [0-100] 。 */
    Progress?: number;
  }

  /** 音视频审核涉及令人反感的信息的任务结果类型 */
  interface AiReviewTaskPornResult {
    /** 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。 */
    Status?: string;
    /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/266/50368) 列表。 */
    ErrCodeExt?: string;
    /** 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。 */
    ErrCode?: number;
    /** 错误信息。 */
    Message?: string;
    /** 音视频审核涉及令人反感的信息的任务输入。 */
    Input?: AiReviewPornTaskInput;
    /** 音视频审核涉及令人反感的信息的任务输出。 */
    Output?: AiReviewPornTaskOutput;
    /** 音视频审核涉及令人反感的信息的任务进度，取值范围 [0-100] 。 */
    Progress?: number;
  }

  /** 音视频审核 Asr 文字鉴违禁任务结果类型 */
  interface AiReviewTaskProhibitedAsrResult {
    /** 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。 */
    Status?: string;
    /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/266/50368) 列表。 */
    ErrCodeExt?: string;
    /** 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。 */
    ErrCode?: number;
    /** 错误信息。 */
    Message?: string;
    /** 音视频审核 Asr 文字鉴违禁任务输入。 */
    Input?: AiReviewProhibitedAsrTaskInput;
    /** 音视频审核 Asr 文字鉴违禁任务输出。 */
    Output?: AiReviewProhibitedAsrTaskOutput;
    /** 音视频审核 Asr 文字鉴违禁任务进度，取值范围 [0-100] 。 */
    Progress?: number;
  }

  /** 音视频审核 Ocr 文字鉴违禁任务结果类型 */
  interface AiReviewTaskProhibitedOcrResult {
    /** 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。 */
    Status?: string;
    /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/266/50368) 列表。 */
    ErrCodeExt?: string;
    /** 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。 */
    ErrCode?: number;
    /** 错误信息。 */
    Message?: string;
    /** 音视频审核 Ocr 文字鉴违禁任务输入。 */
    Input?: AiReviewProhibitedOcrTaskInput;
    /** 音视频审核 Ocr 文字鉴违禁任务输出。 */
    Output?: AiReviewProhibitedOcrTaskOutput;
    /** 音视频审核 Ocr 文字鉴违禁任务进度，取值范围 [0-100] 。 */
    Progress?: number;
  }

  /** 音视频审核 Ocr 文字鉴别涉及令人不安全的信息的任务结果类型 */
  interface AiReviewTaskTerrorismOcrResult {
    /** 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。 */
    Status?: string;
    /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/266/50368) 列表。 */
    ErrCodeExt?: string;
    /** 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。 */
    ErrCode?: number;
    /** 错误信息。 */
    Message?: string;
    /** 音视频审核 Ocr 文字涉及令人不安全的信息的任务输入。 */
    Input?: AiReviewTerrorismOcrTaskInput;
    /** 音视频审核 Ocr 文字涉及令人不安全的信息的任务输出。 */
    Output?: AiReviewTerrorismOcrTaskOutput;
    /** 音视频审核 Ocr 文字涉及令人不安全的信息的任务进度，取值范围 [0-100] 。 */
    Progress?: number;
  }

  /** 音视频审核涉及令人不安全的信息的任务结果类型 */
  interface AiReviewTaskTerrorismResult {
    /** 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。 */
    Status?: string;
    /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/266/50368) 列表。 */
    ErrCodeExt?: string;
    /** 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。 */
    ErrCode?: number;
    /** 错误信息。 */
    Message?: string;
    /** 音视频审核涉及令人不安全的信息的任务输入。 */
    Input?: AiReviewTerrorismTaskInput;
    /** 音视频审核涉及令人不安全的信息的任务输出。 */
    Output?: AiReviewTerrorismTaskOutput;
    /** 音视频审核涉及令人不安全的信息的任务进度，取值范围 [0-100] 。 */
    Progress?: number;
  }

  /** 音视频审核 Ocr 文字涉及令人不安全的信息的任务输入参数类型 */
  interface AiReviewTerrorismOcrTaskInput {
    /** 鉴别涉及令人不安全的信息的模板 ID。 */
    Definition?: number;
  }

  /** Ocr 文字涉及令人不安全的信息 */
  interface AiReviewTerrorismOcrTaskOutput {
    /** Ocr 文字有涉及令人不安全信息的评分，分值为0到100。 */
    Confidence?: number;
    /** Ocr 文字有涉及令人不安全信息的结果建议，取值范围：pass。review。block。 */
    Suggestion?: string;
    /** Ocr 文字有涉及令人不安全信息嫌疑的视频片段列表。注意 ：该列表最多仅展示前 100 个元素。如希望获得完整结果，请从 SegmentSetFileUrl 对应的文件中获取。 */
    SegmentSet?: MediaContentReviewOcrTextSegmentItem[];
    /** Ocr 文字有涉及令人不安全信息嫌疑的视频片段列表文件 URL。文件的内容为 JSON，数据结构与 SegmentSet 字段一致。 （文件不会永久存储，到达 SegmentSetFileUrlExpireTime 时间点后文件将被删除）。 */
    SegmentSetFileUrl?: string;
    /** Ocr 文字有涉及令人不安全信息嫌疑的视频片段列表文件 URL 失效时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    SegmentSetFileUrlExpireTime?: string;
  }

  /** 音视频审核涉及令人不安全的信息的任务输入参数类型 */
  interface AiReviewTerrorismTaskInput {
    /** 鉴别涉及令人不安全的信息的模板 ID。 */
    Definition?: number;
  }

  /** 暴恐信息 */
  interface AiReviewTerrorismTaskOutput {
    /** 视频暴恐评分，分值为0到100。 */
    Confidence: number;
    /** 暴恐结果建议，取值范围：pass。review。block。 */
    Suggestion: string;
    /** 视频暴恐结果标签，取值范围：guns：武器枪支。crowd：人群聚集。police：警察部队。bloody：血腥画面。banners：暴恐旗帜。militant：武装分子。explosion：爆炸火灾。terrorists：暴恐人物。scenario：暴恐画面。 */
    Label: string;
    /** 有暴恐嫌疑的视频片段列表。注意 ：该列表最多仅展示前 100 个元素。如希望获得完整结果，请从 SegmentSetFileUrl 对应的文件中获取。 */
    SegmentSet: MediaContentReviewSegmentItem[];
    /** 暴恐嫌疑的视频片段列表文件 URL。文件的内容为 JSON，数据结构与 SegmentSet 字段一致。 （文件不会永久存储，到达SegmentSetFileUrlExpireTime 时间点后文件将被删除）。 */
    SegmentSetFileUrl: string;
    /** 暴恐嫌疑的视频片段列表文件 URL 失效时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    SegmentSetFileUrlExpireTime: string;
  }

  /** AI 样本管理，人脸信息。 */
  interface AiSampleFaceInfo {
    /** 人脸图片 ID。 */
    FaceId?: string;
    /** 人脸图片地址。 */
    Url?: string;
  }

  /** AI 样本管理，人脸数据操作。 */
  interface AiSampleFaceOperation {
    /** 操作类型，可选值：add（添加）、delete（删除）、reset（重置）。重置操作将清空该人物已有人脸数据，并添加 FaceContents 指定人脸数据。 */
    Type: string;
    /** 人脸 ID 集合，当 Type为delete 时，该字段必填。 */
    FaceIds?: string[];
    /** 人脸图片 [Base64](https://tools.ietf.org/html/rfc4648) 编码后的字符串集合，仅支持 jpeg、png 图片格式。当 Type为add 或 reset 时，该字段必填；数组长度限制：5 张图片。注意：图片必须是单人像正面人脸较清晰的照片，像素不低于 200*200。 */
    FaceContents?: string[];
  }

  /** AI 样本管理，处理失败的人脸信息 */
  interface AiSampleFailFaceInfo {
    /** 对应入参 FaceContents 中错误图片下标，从 0 开始。 */
    Index?: number;
    /** 错误码，取值：0：成功；其他：失败。 */
    ErrCode?: number;
    /** 错误描述。 */
    Message?: string;
  }

  /** AI 样本管理，人物信息。 */
  interface AiSamplePerson {
    /** 人物 ID。 */
    PersonId?: string;
    /** 人物名称。 */
    Name?: string;
    /** 人物描述。 */
    Description?: string;
    /** 人脸信息。 */
    FaceInfoSet?: AiSampleFaceInfo[];
    /** 人物标签。 */
    TagSet?: string[];
    /** 应用场景。 */
    UsageSet?: string[];
    /** 创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    CreateTime?: string;
    /** 最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    UpdateTime?: string;
  }

  /** AI 样本管理，标签操作。 */
  interface AiSampleTagOperation {
    /** 操作类型，可选值：add（添加）、delete（删除）、reset（重置）。 */
    Type: string;
    /** 标签，长度限制：128 个字符。 */
    Tags: string[];
  }

  /** AI 样本管理，关键词输出信息。 */
  interface AiSampleWord {
    /** 关键词。 */
    Keyword?: string;
    /** 关键词标签。 */
    TagSet?: string[];
    /** 关键词应用场景。 */
    UsageSet?: string[];
    /** 创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    CreateTime?: string;
    /** 最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    UpdateTime?: string;
  }

  /** AI 样本管理，关键词输入信息。 */
  interface AiSampleWordInfo {
    /** 关键词，长度限制：20 个字符。 */
    Keyword: string;
    /** 关键词标签数组长度限制：20 个标签；单个标签长度限制：128 个字符。 */
    Tags?: string[];
  }

  /** 转动图任务类型 */
  interface AnimatedGraphicTaskInput {
    /** 视频转动图模板 ID */
    Definition: number;
    /** 动图在视频中的起始时间偏移，单位为秒。不填或填0，表示从视频的起始位置开始；当数值大于0时（假设为 n），表示从视频的第 n 秒位置开始；当数值小于0时（假设为 -n），表示从视频结束 n 秒前的位置开始。 */
    StartTimeOffset: number;
    /** 动图在视频中的终止时间偏移，单位为秒。不填或填0，表示持续到视频的末尾终止；当数值大于0时（假设为 n），表示持续到视频第 n 秒时终止；当数值小于0时（假设为 -n），表示持续到视频结束 n 秒前终止。 */
    EndTimeOffset: number;
  }

  /** 转动图模板详情。 */
  interface AnimatedGraphicsTemplate {
    /** 转动图模板唯一标识。 */
    Definition?: number;
    /** 模板类型，取值范围：Preset：系统预置模板；Custom：用户自定义模板。 */
    Type?: string;
    /** 转动图模板名称。 */
    Name?: string;
    /** 转动图模板描述信息。 */
    Comment?: string;
    /** 动图宽度（或长边）的最大值，取值范围：0 和 [128, 4096]，单位：px。当 Width、Height 均为 0，则分辨率同源；当 Width 为 0，Height 非 0，则 Width 按比例缩放；当 Width 非 0，Height 为 0，则 Height 按比例缩放；当 Width、Height 均非 0，则分辨率按用户指定。默认值：0。 */
    Width?: number;
    /** 动图高度（或短边）的最大值，取值范围：0 和 [128, 4096]，单位：px。当 Width、Height 均为 0，则分辨率同源；当 Width 为 0，Height 非 0，则 Width 按比例缩放；当 Width 非 0，Height 为 0，则 Height 按比例缩放；当 Width、Height 均非 0，则分辨率按用户指定。默认值：0。 */
    Height?: number;
    /** 分辨率自适应，可选值：open：开启，此时，Width 代表视频的长边，Height 表示视频的短边；close：关闭，此时，Width 代表视频的宽度，Height 表示视频的高度。默认值：open。 */
    ResolutionAdaptive?: string;
    /** 动图格式。 */
    Format?: string;
    /** 帧率。 */
    Fps?: number;
    /** 图片质量。 */
    Quality?: number;
    /** 模板创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    CreateTime?: string;
    /** 模板最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    UpdateTime?: string;
  }

  /** 日志推送目标。 */
  interface AreaCLSTargetInfo {
    /** 日志集所属地区：ap-guangzhou：广州；ap-beijing：北京；ap-chengdu：成都；ap-chongqing：重庆；ap-nanjing：南京；ap-shanghai：上海；ap-singapore：新加坡。 */
    CLSRegion: string;
    /** 投递的目标主题 ID。 */
    TopicId: string;
    /** 投递的目标集 ID。 */
    LogsetId: string;
    /** 日志投递状态。 ON：启用； OFF：停用。 */
    Switch?: string;
  }

  /** 去伪影（毛刺）控制信息 */
  interface ArtifactRepairInfo {
    /** 去伪影（毛刺）控制开关，可选值：ON：开启去伪影（毛刺）；OFF：关闭去伪影（毛刺）。 */
    Switch: string;
    /** 去伪影（毛刺）类型，仅当去伪影（毛刺）控制开关为 ON 时有效，可选值：weak：轻去伪影（毛刺）；strong：强去伪影（毛刺）。默认值：weak。 */
    Type?: string;
  }

  /** 语音全文识别任务控制参数。注意：本参数已不再维护，推荐使用 AsrTranslateConfigure 参数发起语音翻译识别（当 DstLanguage 不填或填空字符串时，则不进行翻译，计费项和语音全文识别一致）。 */
  interface AsrFullTextConfigureInfo {
    /** 语音全文识别任务开关，可选值：ON：开启智能语音全文识别任务；OFF：关闭智能语音全文识别任务。 */
    Switch: string;
    /** 生成的字幕文件格式列表，不填或者填空数组表示不生成字幕文件，可选值：vtt：生成 WebVTT 字幕文件；srt：生成 SRT 字幕文件。注意：云点播媒资信息仅支持添加 vtt 字幕，因此当且仅当 SubtitleFormats 包含 vtt 时，云点播将生成的字幕添加到媒资。 */
    SubtitleFormats?: string[];
    /** 生成的字幕文件格式，不填或者填空字符串表示不生成字幕文件，可选值：vtt：生成 WebVTT 字幕文件；srt：生成 SRT 字幕文件。注意：此字段已废弃，建议使用 SubtitleFormats。 */
    SubtitleFormat?: string;
    /** 媒体源语言，取值范围：zh：中文普通话；en：英语；ja：日语；zh-ca：粤语。注意： 填空字符串，或者不填该参数，则自动识别（效果较难保证，推荐填写原始媒体对应的语言，以提高识别的准确率）。 */
    SrcLanguage?: string;
    /** 指定字幕名称，长度限制：64 个字符。该值将用于播放器展示，若不填则云点播自动生成。注意：仅当 SubtitleFormats 包含 vtt 时，该字段有效。 */
    SubtitleName?: string;
  }

  /** 语音全文识别任务控制参数 */
  interface AsrFullTextConfigureInfoForUpdate {
    /** 语音全文识别任务开关，可选值：ON：开启智能语音全文识别任务；OFF：关闭智能语音全文识别任务。 */
    Switch?: string;
    /** 字幕格式列表操作信息。 */
    SubtitleFormatsOperation?: SubtitleFormatsOperation;
    /** 生成的字幕文件格式，填空字符串表示不生成字幕文件，可选值：vtt：生成 WebVTT 字幕文件；srt：生成 SRT 字幕文件。注意：此字段已废弃，建议使用 SubtitleFormatsOperation。 */
    SubtitleFormat?: string;
    /** 媒体源语言，取值范围：zh：中文普通话；en：英语；ja：日语；zh-ca：粤语。 */
    SrcLanguage?: string;
    /** 指定字幕名称，长度限制：64 个字符。该值将用于播放器展示。 */
    SubtitleName?: string;
  }

  /** 语音翻译识别任务控制参数 */
  interface AsrTranslateConfigureInfo {
    /** 语音翻译识别任务开关，可选值：ON：开启；OFF：关闭。注意：语音翻译识别任务本身会返回 ASR 全文识别结果，为避免重复收费，因此禁止同时开启语音翻译识别和 ASR 全文识别功能项。 */
    Switch: string;
    /** 媒体源语言，当 Switch 为 ON 时，此参数必填。取值范围：zh：中文；en：英文；ja：日文；ko：韩文；vi：越南语；ms：马来语；th：泰语；pt：葡萄牙语；tr：土耳其语；ar：阿拉伯语；es：西班牙语；hi：印地语；fr：法语。 */
    SrcLanguage?: string;
    /** 翻译目标语言，当 Switch 为 ON 时，此参数有效。若此参数不填或者填写空字符串，则表示只进行语音全文识别，不进行翻译（计费项与 AsrFullTextConfigure 语音全文识别一致）；否则，此参数的取值范围分为如下几种情况：当 SrcLanguage 为 zh（中文）时，取值范围：en：英文；ja：日文；ko：韩文；fr：法语；es：西班牙语；it：意大利语；de：德语；tr：土耳其语；ru：俄语；pt：葡萄牙语；vi：越南语；id：印尼语；th：泰语；ms：马来语。当 SrcLanguage 为 en（英文）时，取值范围：zh：中文；ja：日文；ko：韩文；fr：法语；es：西班牙语；it：意大利语；de：德语；tr：土耳其语；ru：俄语；pt：葡萄牙语；vi：越南语；id：印尼语；th：泰语；ms：马来语；ar：阿拉伯语；hi：印地语。当 SrcLanguage 为 ja（日文）时，取值范围：zh：中文；en：英文；ko：韩文。当 SrcLanguage 为 ko（韩文）时，取值范围：zh：中文；en：英文；ja：日文。当 SrcLanguage 为 vi（越南语）或 ms（马来语）或 th（泰语）时，取值范围：zh：中文；en：英文。当 SrcLanguage 为 pt（葡萄牙语）时，取值范围：zh：中文；en：英文；fr：法语；es：西班牙语；it：意大利语；de：德语；tr：土耳其语；ru：俄语。当 SrcLanguage 为 tr（土耳其语）时，取值范围：zh：中文；en：英文；fr：法语；es：西班牙语；it：意大利语；de：德语；ru：俄语；pt：葡萄牙语。当 SrcLanguage 为 es（西班牙语）时，取值范围：zh：中文；en：英文；fr：法语；it：意大利语；de：德语；tr：土耳其语；ru：俄语；pt：葡萄牙语。当 SrcLanguage 为 ar（阿拉伯语）或 hi（印地语）时，取值范围：en：英文。当 SrcLanguage 为 fr（法语）时，取值范围：zh：中文；en：英文；es：西班牙语；it：意大利语；de：德语；tr：土耳其语；ru：俄语；pt：葡萄牙语。 */
    DstLanguage?: string;
    /** 生成的字幕文件格式列表，不填或者填空数组表示不生成字幕文件，可选值：vtt：生成 WebVTT 字幕文件；srt：生成 SRT 字幕文件。注意： 云点播媒资信息仅支持添加 vtt 字幕，因此当且仅当 SubtitleFormats 包含 vtt 时，云点播将生成的字幕添加到媒资。 */
    SubtitleFormats?: string[];
    /** 指定字幕名称，长度限制：64 个字符。该值将用于播放器展示，若不填则云点播自动生成。注意：仅当 SubtitleFormats 包含 vtt 时，该字段有效。 */
    SubtitleName?: string;
  }

  /** 语音翻译识别控制参数 */
  interface AsrTranslateConfigureInfoForUpdate {
    /** 语音翻译识别任务开关，可选值：ON：开启；OFF：关闭。注意：语音翻译识别任务本身会返回 ASR 全文识别结果，为避免重复收费，因此禁止同时开启语音翻译识别和 ASR 全文识别功能项。 */
    Switch?: string;
    /** 媒体源语言，取值范围：zh：中文；en：英文；ja：日文；ko：韩文；vi：越南语；ms：马来语；th：泰语；pt：葡萄牙语；tr：土耳其语；ar：阿拉伯语；es：西班牙语；hi：印地语；fr：法语。 */
    SrcLanguage?: string;
    /** 翻译目标语言。若此参数填写空字符串，则表示只进行语音全文识别，不进行翻译（计费项与 AsrFullTextConfigure 语音全文识别一致）；否则，此参数的取值范围分为如下几种情况：当 SrcLanguage 为 zh（中文）时，取值范围：en：英文；ja：日文；ko：韩文；fr：法语；es：西班牙语；it：意大利语；de：德语；tr：土耳其语；ru：俄语；pt：葡萄牙语；vi：越南语；id：印尼语；th：泰语；ms：马来语。当 SrcLanguage 为 en（英文）时，取值范围：zh：中文；ja：日文；ko：韩文；fr：法语；es：西班牙语；it：意大利语；de：德语；tr：土耳其语；ru：俄语；pt：葡萄牙语；vi：越南语；id：印尼语；th：泰语；ms：马来语；ar：阿拉伯语；hi：印地语。当 SrcLanguage 为 ja（日文）时，取值范围：zh：中文；en：英文；ko：韩文。当 SrcLanguage 为 ko（韩文）时，取值范围：zh：中文；en：英文；ja：日文。当 SrcLanguage 为 vi（越南语）或 ms（马来语）或 th（泰语）时，取值范围：zh：中文；en：英文。当 SrcLanguage 为 pt（葡萄牙语）时，取值范围：zh：中文；en：英文；fr：法语；es：西班牙语；it：意大利语；de：德语；tr：土耳其语；ru：俄语。当 SrcLanguage 为 tr（土耳其语）时，取值范围：zh：中文；en：英文；fr：法语；es：西班牙语；it：意大利语；de：德语；ru：俄语；pt：葡萄牙语。当 SrcLanguage 为 es（西班牙语）时，取值范围：zh：中文；en：英文；fr：法语；it：意大利语；de：德语；tr：土耳其语；ru：俄语；pt：葡萄牙语。当 SrcLanguage 为 ar（阿拉伯语）或 hi（印地语）时，取值范围：en：英文。当 SrcLanguage 为 fr（法语）时，取值范围：zh：中文；en：英文；es：西班牙语；it：意大利语；de：德语；tr：土耳其语；ru：俄语；pt：葡萄牙语。 */
    DstLanguage?: string;
    /** 字幕格式列表操作信息。 */
    SubtitleFormatsOperation?: SubtitleFormatsOperation;
    /** 指定字幕名称，长度限制：64 个字符。该值将用于播放器展示。 */
    SubtitleName?: string;
  }

  /** 语音关键词识别控制参数。 */
  interface AsrWordsConfigureInfo {
    /** 语音关键词识别任务开关，可选值：ON：开启语音关键词识别任务；OFF：关闭语音关键词识别任务。 */
    Switch: string;
    /** 关键词过滤标签，指定需要返回的关键词的标签。如果未填或者为空，则全部结果都返回。标签个数最多 10 个，每个标签长度最多 16 个字符。 */
    LabelSet?: string[];
  }

  /** 语音关键词识别控制参数。 */
  interface AsrWordsConfigureInfoForUpdate {
    /** 语音关键词识别任务开关，可选值：ON：开启语音关键词识别任务；OFF：关闭语音关键词识别任务。 */
    Switch?: string;
    /** 关键词过滤标签，指定需要返回的关键词的标签。如果未填或者为空，则全部结果都返回。标签个数最多 10 个，每个标签长度最多 16 个字符。 */
    LabelSet?: string[];
  }

  /** 音频降噪控制信息 */
  interface AudioDenoiseInfo {
    /** 音频降噪控制开关，可选值：ON：开启音频降噪；OFF：关闭音频降噪。 */
    Switch: string;
    /** 音频降噪类型，仅当音频降噪控制开关为 ON 时有效，可选值：weak：轻音频降噪；normal：正常音频降噪；strong：强音频降噪。默认值：weak。 */
    Type?: string;
  }

  /** 音频流配置参数 */
  interface AudioTemplateInfo {
    /** 音频流的编码格式。当外层参数 Container 为 mp3 时，可选值为：libmp3lame。当外层参数 Container 为 ogg 或 flac 时，可选值为：flac。当外层参数 Container 为 m4a 时，可选值为：libfdk_aac；libmp3lame；ac3。当外层参数 Container 为 mp4 或 flv 时，可选值为：libfdk_aac：更适合 mp4；libmp3lame：更适合 flv；mp2。当外层参数 Container 为 hls 时，可选值为：libfdk_aac。当外层参数 Format 为 HLS 或 MPEG-DASH 时，可选值为：libfdk_aac。当外层参数 Container 为 wav 时，可选值为：pcm16。 */
    Codec: string;
    /** 音频流的码率，取值范围：0 和 [26, 256]，单位：kbps。当取值为 0，表示由云点播自动设置码率。 */
    Bitrate: number;
    /** 音频流的采样率，可选值：16000，仅当 Codec 为 pcm16 时可选。320004410048000单位：Hz。 */
    SampleRate: number;
    /** 音频通道，可选值：1：单通道2：双通道6：立体声0：音频声道数和原始音频保持一致当媒体的封装格式是音频格式时（flac，ogg，mp3，m4a）时，声道数不允许设为立体声。默认值：2。 */
    AudioChannel?: number;
  }

  /** 音频流配置参数 */
  interface AudioTemplateInfoForUpdate {
    /** 音频流的编码格式。当外层参数 Container 为 mp3 时，可选值为：libmp3lame。当外层参数 Container 为 ogg 或 flac 时，可选值为：flac。当外层参数 Container 为 m4a 时，可选值为：libfdk_aac；libmp3lame；ac3。当外层参数 Container 为 mp4 或 flv 时，可选值为：libfdk_aac：更适合 mp4；libmp3lame：更适合 flv；mp2。当外层参数 Container 为 hls 时，可选值为：libfdk_aac。当外层参数 Format 为 HLS 或 MPEG-DASH 时，可选值为：libfdk_aac。当外层参数 Container 为 wav 时，可选值为：pcm16。 */
    Codec?: string;
    /** 音频流的码率，取值范围：0 和 [26, 256]，单位：kbps。 当取值为 0，表示由云点播自动设置码率。 */
    Bitrate?: number;
    /** 音频流的采样率，可选值：16000，仅当 Codec 为 pcm16 时可选。320004410048000单位：Hz。 */
    SampleRate?: number;
    /** 音频通道，可选值：1：单通道2：双通道6：立体声0：音频声道数和原始音频保持一致当媒体的封装格式是音频格式时（flac，ogg，mp3，m4a）时，声道数不允许设为立体声。 */
    AudioChannel?: number;
  }

  /** 音频轨道上的音频片段信息。 */
  interface AudioTrackItem {
    /** 音频片段的媒体素材来源，可以是：点播的媒体文件 ID；其他媒体文件的下载 URL。注意：当使用其他媒体文件的下载 URL 作为素材来源，且开启了访问控制（如防盗链）时，需要在 URL 携带访问控制参数（如防盗链签名）。 */
    SourceMedia: string;
    /** 音频片段取自素材文件的起始时间，单位为秒。0 表示从素材开始位置截取。默认为0。 */
    SourceMediaStartTime?: number;
    /** 音频片段的时长，单位为秒。默认和素材本身长度一致，表示截取全部素材。 */
    Duration?: number;
    /** 音频片段目标时长，单位为秒。当 TargetDuration 不填或填0时，表示目标时长和 Duration 一致；当 TargetDuration 取大于0的值时，将对音频片段做快进或慢放等处理，使得输出片段的时长等于 TargetDuration。 */
    TargetDuration?: number;
    /** 对音频片段进行的操作，如音量调节等。 */
    AudioOperations?: AudioTransform[];
  }

  /** 音频操作 */
  interface AudioTransform {
    /** 音频操作类型，取值有：Volume：音量调节。 */
    Type: string;
    /** 音量调节参数， 当 Type = Volume 时有效。 */
    VolumeParam?: AudioVolumeParam;
  }

  /** 音频增益调节参数 */
  interface AudioVolumeParam {
    /** 是否静音，取值范围0或1。0表示不静音。1表示静音。默认是0。 */
    Mute?: number;
    /** 音频增益，取值范围0~10。大于1表示增加音量。小于1表示降低音量。0和1：表示不改变。默认是0。 */
    Gain?: number;
  }

  /** 视频画面黑边、白边、黑屏、白屏检测的控制参数。 */
  interface BlackWhiteEdgeConfigureInfo {
    /** 视频画面黑边、白边、黑屏、白屏检测开关，可选值：ON：开启；OFF：关闭。 */
    Switch: string;
  }

  /** 视频画面黑边、白边、黑屏、白屏检测的控制参数。 */
  interface BlackWhiteEdgeConfigureInfoForUpdate {
    /** 视频画面黑边、白边、黑屏、白屏检测开关，可选值：ON：开启；OFF：关闭。 */
    Switch?: string;
  }

  /** 视频画面模糊检测的控制参数。 */
  interface BlurConfigureInfo {
    /** 视频画面模糊检测开关，可选值：ON：开启；OFF：关闭。 */
    Switch: string;
  }

  /** 视频画面模糊检测的控制参数。 */
  interface BlurConfigureInfoForUpdate {
    /** 视频画面模糊检测开关，可选值：ON：开启；OFF：关闭。 */
    Switch?: string;
  }

  /** CLS 日志集信息 */
  interface CLSLogsetInfo {
    /** 日志集 ID。 */
    LogsetId?: string;
    /** 日志集名。 */
    LogsetName?: string;
  }

  /** CLS日志主题信息。 */
  interface CLSTopicInfo {
    /** 日志主题 ID。 */
    TopicId?: string;
    /** 日志主题名。 */
    TopicName?: string;
    /** 日志集 ID。 */
    LogsetId?: string;
  }

  /** 画布信息。制作视频时，如果源素材（视频或者图片）不能填满输出的视频窗口，将用设置的画布进行背景绘制。 */
  interface Canvas {
    /** 背景颜色，取值有：Black：黑色背景White：白色背景默认值：Black。 */
    Color?: string;
    /** 画布宽度，即输出视频的宽度，取值范围：0~ 3840，单位：px。默认值：0，表示和第一个视频轨的第一个视频片段的视频宽度一致。 */
    Width?: number;
    /** 画布高度，即输出视频的高度（或长边），取值范围：0~ 3840，单位：px。默认值：0，表示和第一个视频轨的第一个视频片段的视频高度一致。 */
    Height?: number;
  }

  /** CDN 日志信息 */
  interface CdnLogInfo {
    /** 日志所属日期， 格式为：yyyy-MM-dd ，如2018-03-01。 */
    Date?: string;
    /** 日志名称，格式为：日期小时-域名如 example.com。 */
    Name?: string;
    /** 日志下载链接，24小时内下载有效。 */
    Url?: string;
    /** 日志起始时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    StartTime?: string;
    /** 日志结束时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    EndTime?: string;
  }

  /** 智能分类任务控制参数 */
  interface ClassificationConfigureInfo {
    /** 智能分类任务开关，可选值：ON：开启智能分类任务；OFF：关闭智能分类任务。 */
    Switch: string;
  }

  /** 智能分类任务控制参数 */
  interface ClassificationConfigureInfoForUpdate {
    /** 智能分类任务开关，可选值：ON：开启智能分类任务；OFF：关闭智能分类任务。 */
    Switch?: string;
  }

  /** 视频裁剪结果文件信息（2017 版） */
  interface ClipFileInfo2017 {
    /** 错误码0：成功；其他值：失败。 */
    ErrCode?: number;
    /** 错误描述。 */
    Message?: string;
    /** 输出目标文件的文件 ID。 */
    FileId?: string;
    /** 输出目标文件的文件地址。 */
    FileUrl?: string;
    /** 输出目标文件的文件类型。 */
    FileType?: string;
  }

  /** 视频剪辑任务信息，该结构仅用于对 2017 版[视频剪辑](https://cloud.tencent.com/document/product/266/10156)接口发起的任务。 */
  interface ClipTask2017 {
    /** 视频剪辑任务 ID。 */
    TaskId?: string;
    /** 视频剪辑任务源文件 ID。 */
    SrcFileId?: string;
    /** 视频剪辑输出的文件信息。 */
    FileInfo?: ClipFileInfo2017;
  }

  /** 色彩增强控制参数 */
  interface ColorEnhanceInfo {
    /** 色彩增强控制开关，可选值：ON：开启综合增强；OFF：关闭综合增强。 */
    Switch: string;
    /** 色彩增强类型，仅当色彩增强控制开关为 ON 时有效，可选值：weak：轻色彩增强；normal：正常色彩增强；strong：强色彩增强。默认值：weak。 */
    Type?: string;
  }

  /** 自适应码流任务信息。 */
  interface ComplexAdaptiveDynamicStreamingTask {
    /** 任务 ID。 */
    TaskId?: string;
    /** 任务状态，取值：PROCESSING：处理中；FINISH：已完成。 */
    Status?: string;
    /** 自适应码流任务的执行状态与结果，每个元素对应一个自适应码流模板。 */
    ComplexAdaptiveDynamicStreamingTaskResultSet?: ComplexAdaptiveDynamicStreamingTaskResult[];
  }

  /** 自适应码流任务多语言音频流输入参数。 */
  interface ComplexAdaptiveDynamicStreamingTaskAudioInput {
    /** 音频源的媒体 ID。固定取该媒体中的首个音频流，视频流和其它音频流（如有）将被忽略。 */
    FileId: string;
    /** 输出的自适应码流中的音频流名称，长度限制为16个字符。 */
    Name: string;
    /** 输出的自适应码流中的音频流语言，长度限制为16个字符。要求符合 RFC5646 规范。 */
    Language: string;
    /** 是否设置为自适应码流的默认音频。取值：YES：设置为默认音频；NO：不设置为默认音频（默认值）。 */
    Default?: string;
    /** 音轨序号，表示选择音频源中的第几个音轨，从0开始计数。默认值为0，表示选择最靠前的音轨。 */
    AudioTrackIdx?: number;
  }

  /** 自适应码流任务的输入参数。 */
  interface ComplexAdaptiveDynamicStreamingTaskInput {
    /** 自适应码流参数。 */
    StreamPara: ComplexAdaptiveDynamicStreamingTaskStreamPara;
  }

  /** 自适应码流任务的输出结果。 */
  interface ComplexAdaptiveDynamicStreamingTaskOutput {
    /** 自适应码流模板 ID。 */
    Definition?: number;
    /** 自适应码流打包格式。可选值：HLS；MPEG-DASH。 */
    Format?: string;
    /** DRM 方案类型。可选值：空字符串：无加密；SimpleAES；Widevine；FairPlay。 */
    DrmType?: string;
    /** 自适应码流的播放地址。 */
    Url?: string;
  }

  /** 自适应码流任务信息。 */
  interface ComplexAdaptiveDynamicStreamingTaskResult {
    /** 任务状态，取值：PROCESSING：处理中；SUCCESS：已完成；FAIL：失败。 */
    Status?: string;
    /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/266/50368) 列表。 */
    ErrCodeExt?: string;
    /** 错误信息。 */
    Message?: string;
    /** 转码进度，取值范围 [0-100] 。 */
    Progress?: number;
    /** 自适应码流任务的输入。 */
    Input?: ComplexAdaptiveDynamicStreamingTaskInput;
    /** 自适应码流任务的输出。 */
    Output?: ComplexAdaptiveDynamicStreamingTaskOutput;
  }

  /** 自适应码流任务的流参数。 */
  interface ComplexAdaptiveDynamicStreamingTaskStreamPara {
    /** 自适应码流模板 ID。 */
    Definition: number;
  }

  /** 自适应码流任务多语言字幕的输入参数。 */
  interface ComplexAdaptiveDynamicStreamingTaskSubtitleInput {
    /** 字幕 ID。该字幕必须归属于自适应码流任务的输入主媒体。 */
    Id: string;
    /** 是否设置为自适应码流的默认字幕。取值：YES：设置为默认字幕；NO：不设置为默认字幕（默认值）。 */
    Default?: string;
  }

  /** 输出的媒体文件信息。 */
  interface ComposeMediaOutput {
    /** 文件名称，最长 64 个字符。 */
    FileName: string;
    /** 描述信息，最长 128 个字符。 */
    Description?: string;
    /** 分类ID，用于对媒体进行分类管理，可通过 [创建分类](/document/product/266/7812) 接口，创建分类，获得分类 ID。默认值：0，表示其他分类。 */
    ClassId?: number;
    /** 输出文件的过期时间，超过该时间文件将被删除，默认为永久不过期，格式按照 ISO 8601标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732)。 */
    ExpireTime?: string;
    /** 封装格式，可选值：mp4、mp3。其中，mp3 为纯音频文件。 */
    Container?: string;
    /** 输出的视频信息。 */
    VideoStream?: OutputVideoStream | null;
    /** 输出的音频信息。 */
    AudioStream?: OutputAudioStream | null;
    /** 是否去除视频数据，可选值：0：保留1：去除默认值：0。 */
    RemoveVideo?: number;
    /** 是否去除音频数据，可选值：0：保留1：去除默认值：0。 */
    RemoveAudio?: number;
  }

  /** 制作媒体文件任务信息 */
  interface ComposeMediaTask {
    /** 任务 ID。 */
    TaskId?: string;
    /** 任务流状态，取值：PROCESSING：处理中；FINISH：已完成。 */
    Status?: string;
    /** 错误码0：成功；其他值：失败。 */
    ErrCode?: number;
    /** 错误信息。 */
    Message?: string;
    /** 制作媒体文件任务进度，取值范围 [0-100] 。 */
    Progress?: number;
    /** 制作媒体文件任务的输入。 */
    Input?: ComposeMediaTaskInput;
    /** 制作媒体文件任务的输出。 */
    Output?: ComposeMediaTaskOutput;
    /** 输出视频的元信息。 */
    MetaData?: MediaMetaData | null;
    /** 用于去重的识别码，如果七天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。 */
    SessionId?: string;
    /** 来源上下文，用于透传用户请求信息，任务流状态变更回调将返回该字段值，最长 1000 个字符。 */
    SessionContext?: string;
  }

  /** 制作媒体文件任务的输入。 */
  interface ComposeMediaTaskInput {
    /** 输入的媒体轨道列表，包括视频、音频、图片等素材组成的多个轨道信息。 */
    Tracks: MediaTrack[];
    /** 制作视频文件时使用的画布。 */
    Canvas: Canvas | null;
    /** 输出的媒体文件信息。 */
    Output: ComposeMediaOutput;
  }

  /** 制作媒体文件任务的输出。 */
  interface ComposeMediaTaskOutput {
    /** 文件类型，例如 mp4、mp3 等。 */
    FileType?: string;
    /** 媒体文件 ID。 */
    FileId?: string;
    /** 媒体文件播放地址。 */
    FileUrl?: string;
    /** 文件名称，最长 64 个字符。 */
    MediaName?: string;
    /** 分类ID，用于对媒体进行分类管理，可通过 [创建分类](/document/product/266/7812) 接口，创建分类，获得分类 ID。默认值：0，表示其他分类。 */
    ClassId?: number;
    /** 输出文件的过期时间，超过该时间文件将被删除，默认为永久不过期，格式按照 ISO 8601标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732)。 */
    ExpireTime?: string;
  }

  /** 视频拼接源文件信息（2017 版） */
  interface ConcatFileInfo2017 {
    /** 错误码0：成功；其他值：失败。 */
    ErrCode?: number;
    /** 错误信息。 */
    Message?: string;
    /** 视频拼接源文件的 ID。 */
    FileId?: string;
    /** 视频拼接源文件的地址。 */
    FileUrl?: string;
    /** 视频拼接源文件的格式。 */
    FileType?: string;
  }

  /** 视频拼接任务信息，该结构仅用于对 2017 版[视频拼接](https://cloud.tencent.com/document/product/266/7821)接口发起的任务。 */
  interface ConcatTask2017 {
    /** 视频拼接任务 ID。 */
    TaskId?: string;
    /** 视频拼接源文件信息。 */
    FileInfoSet?: ConcatFileInfo2017[];
  }

  /** 图片Ocr 文字鉴别信息的任务结果类型 */
  interface ContentReviewOcrResult {
    /** Ocr 文字鉴别结果的评分，分值为0到100。 */
    Confidence?: number;
    /** Ocr 文字鉴别的结果建议，取值范围：pass；review；block。 */
    Suggestion?: string;
    /** Ocr 文字鉴别的嫌疑关键词列表。 */
    KeywordSet?: string[];
    /** Ocr 文字鉴别的嫌疑文字出现的区域坐标 (像素级)，[x1, y1, x2, y2]，即左上角坐标、右下角坐标。 */
    AreaCoordSet?: number[];
  }

  /** 图片智能内容识别任务结果 */
  interface ContentReviewResult {
    /** 结果类型，取值范围：Porn.Image：图片画面中的鉴别令人反感的信息结果；Terrorism.Image：图片画面中的鉴别令人不安全的信息结果；Political.Image：图片画面中的鉴别令人不适宜信息结果；Porn.Ocr：图片 OCR 文字中的鉴别令人反感的信息结果；Terrorism.Ocr：图片 OCR 文字中的鉴别令人不安全的信息结果；Political.Ocr：图片 OCR 文字中的鉴别令人不适宜信息结果。 */
    Type?: string;
    /** 图片画面中的鉴别令人反感的信息结果，当 Type 为 Porn.Image 时有效。 */
    PornImageResult?: PornImageResult | null;
    /** 图片画面中的鉴别令人不安全的信息结果，当 Type 为 Terrorism.Image 时有效。 */
    TerrorismImageResult?: TerrorismImageResult | null;
    /** 图片画面中的鉴别令人不适宜信息结果，当 Type 为 Political.Image 时有效。 */
    PoliticalImageResult?: PoliticalImageResult | null;
    /** 图片 OCR 文字中的鉴别令人反感的信息结果，当 Type 为 Porn.Ocr 时有效。 */
    PornOcrResult?: ContentReviewOcrResult | null;
    /** 图片 OCR 中的鉴别令人不安全的信息结果，当 Type 为 Terrorism.Ocr 时有效。 */
    TerrorismOcrResult?: ContentReviewOcrResult | null;
    /** 图片 OCR 文字中的鉴别令人不适宜信息结果，当 Type 为 Political.Ocr 时有效。 */
    PoliticalOcrResult?: ContentReviewOcrResult | null;
  }

  /** 音视频审核模板详情 */
  interface ContentReviewTemplateItem {
    /** 音视频审核模板唯一标识。 */
    Definition?: number;
    /** 音视频审核模板名称，长度限制：64 个字符。 */
    Name?: string;
    /** 音视频审核模板描述信息，长度限制：256 个字符。 */
    Comment?: string;
    /** 鉴别涉及令人反感的信息的控制参数。 */
    PornConfigure?: PornConfigureInfo;
    /** 鉴别涉及令人不安全的信息的控制参数。 */
    TerrorismConfigure?: TerrorismConfigureInfo;
    /** 鉴别涉及令人不适宜的信息的控制参数。 */
    PoliticalConfigure?: PoliticalConfigureInfo;
    /** 违禁控制参数。违禁内容包括：谩骂；涉毒违法。 */
    ProhibitedConfigure?: ProhibitedConfigureInfo;
    /** 用户自定义音视频审核控制参数。 */
    UserDefineConfigure?: UserDefineConfigureInfo;
    /** 音视频审核结果是否进入音视频审核墙（对音视频审核结果进行人工复核）的开关。ON：是；OFF：否。 */
    ReviewWallSwitch?: string;
    /** 截帧间隔，单位为秒。当不填时，默认截帧间隔为 1 秒，最小值为 0.5 秒。 */
    ScreenshotInterval?: number;
    /** 模板创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    CreateTime?: string;
    /** 模板最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    UpdateTime?: string;
  }

  /** 版权水印参数 */
  interface CopyRightWatermarkInput {
    /** 版权信息，最大长度为 200 个字符。 */
    Text: string;
  }

  /** 对视频截图做封面任务输入参数类型 */
  interface CoverBySnapshotTaskInput {
    /** 指定时间点截图模板 ID。 */
    Definition: number;
    /** 截图方式。包含：Time：依照时间点截图Percent：依照百分比截图 */
    PositionType: string;
    /** 截图位置：对于依照时间点截图，该值表示指定视频第几秒的截图作为封面对于依照百分比截图，该值表示使用视频百分之多少的截图作为封面 */
    PositionValue: number;
    /** 水印列表，支持多张图片或文字水印，最大可支持 10 张。 */
    WatermarkSet?: WatermarkInput[];
  }

  /** 对视频截图做封面任务输出类型 */
  interface CoverBySnapshotTaskOutput {
    /** 封面 URL。 */
    CoverUrl?: string;
  }

  /** 智能封面任务控制参数 */
  interface CoverConfigureInfo {
    /** 智能封面任务开关，可选值：ON：开启智能封面任务；OFF：关闭智能封面任务。 */
    Switch: string;
  }

  /** 智能封面任务控制参数 */
  interface CoverConfigureInfoForUpdate {
    /** 智能封面任务开关，可选值：ON：开启智能封面任务；OFF：关闭智能封面任务。 */
    Switch?: string;
  }

  /** 视频画面花屏检测的控制参数。 */
  interface CrashScreenConfigureInfo {
    /** 视频画面花屏检测开关，可选值：ON：开启；OFF：关闭。 */
    Switch: string;
  }

  /** 视频画面花屏检测的控制参数。 */
  interface CrashScreenConfigureInfoForUpdate {
    /** 视频画面花屏检测开关，可选值：ON：开启；OFF：关闭。 */
    Switch?: string;
  }

  /** 视频截取雪碧图任务，该结构仅用于对 2017 版[截取雪碧图](https://cloud.tencent.com/document/product/266/8101)接口发起的任务。 */
  interface CreateImageSpriteTask2017 {
    /** 截图雪碧图任务 ID。 */
    TaskId?: string;
    /** 错误码0：成功；其他值：失败。 */
    ErrCode?: number;
    /** 错误信息。 */
    Message?: string;
    /** 截取雪碧图文件 ID。 */
    FileId?: string;
    /** 雪碧图规格，参见[雪碧图截图模板](https://cloud.tencent.com/document/product/266/33480)。 */
    Definition?: number;
    /** 雪碧图小图总数量。 */
    TotalCount?: number;
    /** 截取雪碧图输出的地址。 */
    ImageSpriteUrlSet?: string[];
    /** 雪碧图子图位置与时间关系 WebVtt 文件地址。 */
    WebVttUrl?: string;
  }

  /** DNS解析验证信息 */
  interface DNSVerifyInfo {
    /** 子解析。 */
    SubDomain?: string;
    /** 解析值。 */
    Record?: string;
    /** 解析类型。 */
    RecordType?: string;
  }

  /** 播放统计信息。 */
  interface DailyPlayStatInfo {
    /** 播放媒体文件的日期，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    Date?: string;
    /** 媒体文件ID。 */
    FileId?: string;
    /** 播放次数。 */
    PlayTimes?: number;
    /** 播放流量，单位：字节。 */
    Traffic?: number;
  }

  /** 获取文件属性任务信息 */
  interface DescribeFileAttributesTask {
    /** 任务 ID。 */
    TaskId?: string;
    /** 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。 */
    Status?: string;
    /** 错误码，0 表示成功，其他值表示失败：40000：输入参数不合法，请检查输入参数；60000：源文件错误（如视频数据损坏），请确认源文件是否正常；70000：内部服务错误，建议重试。 */
    ErrCode?: number;
    /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/266/50368) 列表。 */
    ErrCodeExt?: string;
    /** 错误信息。 */
    Message?: string;
    /** 任务进度，取值范围 [0-100] 。 */
    Progress?: number;
    /** 媒体文件 ID。 */
    FileId?: string;
    /** 获取媒体文件属性任务的输出。 */
    Output?: DescribeFileAttributesTaskOutput | null;
    /** 用于去重的识别码，如果七天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。 */
    SessionId?: string;
    /** 来源上下文，用于透传用户请求信息，任务流状态变更回调将返回该字段值，最长 1000 个字符。 */
    SessionContext?: string;
  }

  /** 获取文件属性任务输出 */
  interface DescribeFileAttributesTaskOutput {
    /** 媒体文件的 Md5 值。 */
    Md5?: string;
    /** 媒体文件的 Sha1 值。 */
    Sha1?: string;
  }

  /** 域名推送 CLS 目标。 */
  interface DomainCLSTargetInfo {
    /** 域名。 */
    Domain?: string;
    /** 中国大陆地区的日志推送目标。 */
    ChineseMainlandCLSTargetInfo?: AreaCLSTargetInfo;
    /** 中国大陆以外地区的日志推送目标。 */
    OutsideChineseMainlandCLSTargetInfo?: AreaCLSTargetInfo;
  }

  /** 域名信息 */
  interface DomainDetailInfo {
    /** 域名名称。 */
    Domain?: string;
    /** 加速地区信息。 */
    AccelerateAreaInfos?: AccelerateAreaInfo[];
    /** 部署状态，取值有：Online：上线；Deploying：部署中；Locked: 锁定中，出现该状态时，无法对该域名进行部署变更。 */
    DeployStatus?: string;
    /** HTTPS 配置信息。 */
    HTTPSConfig?: DomainHTTPSConfig;
    /** [Key 防盗链](https://cloud.tencent.com/document/product/266/14047)配置信息。 */
    UrlSignatureAuthPolicy?: UrlSignatureAuthPolicy;
    /** [Referer 防盗链](https://cloud.tencent.com/document/product/266/14046)配置信息。 */
    RefererAuthPolicy?: RefererAuthPolicy;
    /** 域名添加到腾讯云点播系统中的时间。格式按照 ISO 8601标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732)。 */
    CreateTime?: string;
    /** 域名 QUIC 配置信息。 */
    QUICConfig?: DomainQUICConfig;
    /** IP 访问限制配置信息。 */
    IPFilterPolicy?: IPFilterPolicy;
    /** 域名类型，取值有： VOD：使用 VOD 产品分发的域名； EdgeOne：使用 EdgeOne 产品分发的域名。 */
    Type?: string;
  }

  /** 域名 HTTPS 配置信息 */
  interface DomainHTTPSConfig {
    /** 证书过期时间。格式按照 ISO 8601标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732)。 */
    CertExpireTime: string;
    /** 腾讯云 SSL 产品中的证书 ID。 */
    CloudCertId?: string;
  }

  /** 域名 QUIC 配置信息 */
  interface DomainQUICConfig {
    /** QUIC 配置状态，可选值：Enabled: 启用；Disabled: 禁用。 */
    Status: string;
  }

  /** DRM 自适应码流播放信息 */
  interface DrmStreamingsInfo {
    /** 保护类型为 SimpleAES 的转自适应码流模板 ID。 */
    SimpleAesDefinition?: number;
    /** 保护类型为 Widevine 的转自适应码流模板 ID。 */
    WidevineDefinition?: number;
    /** 保护类型为 FairPlay 的转自适应码流模板 ID。 */
    FairPlayDefinition?: number;
  }

  /** DRM 自适应码流播放信息修改对象 */
  interface DrmStreamingsInfoForUpdate {
    /** 保护类型为 SimpleAES 的转自适应码流模板 ID。 */
    SimpleAesDefinition?: number;
    /** 保护类型为 Widevine 的转自适应码流模板 ID。 */
    WidevineDefinition?: number;
    /** 保护类型为 FairPlay 的转自适应码流模板 ID。 */
    FairPlayDefinition?: number;
  }

  /** 画面动态范围信息。 */
  interface DynamicRangeInfo {
    /** 画面动态范围信息。可取值：SDR：Standard Dynamic Range 标准动态范围；HDR：High Dynamic Range 高动态范围。 */
    Type?: string;
    /** 高动态范围类型，当 Type 为 HDR 时有效。目前支持的可取值：hdr10：表示 hdr10 标准；hlg：表示 hlg 标准。 */
    HDRType?: string;
  }

  /** 编辑点播视频文件信息 */
  interface EditMediaFileInfo {
    /** 视频的 ID。 */
    FileId: string;
    /** 视频剪辑起始的偏移时间，单位：秒。 */
    StartTimeOffset?: number;
    /** 视频剪辑结束的偏移时间，单位：秒。 */
    EndTimeOffset?: number;
  }

  /** 编辑视频的结果文件输出。 */
  interface EditMediaOutputConfig {
    /** 输出文件名，最长 64 个字符。缺省由系统指定生成文件名。 */
    MediaName?: string;
    /** 输出文件格式，可选值：mp4、hls。默认是 mp4。 */
    Type?: string;
    /** 分类ID，用于对媒体进行分类管理，可通过 [创建分类](/document/product/266/7812) 接口，创建分类，获得分类 ID。默认值：0，表示其他分类。 */
    ClassId?: number;
    /** 输出文件的过期时间，超过该时间文件将被删除，默认为永久不过期，格式按照 ISO 8601标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732)。 */
    ExpireTime?: string;
    /** 输出的视频信息。 */
    VideoStream?: EditMediaVideoStream;
    /** 极速高清转码参数。 */
    TEHDConfig?: EditMediaTEHDConfig;
  }

  /** 编辑视频流信息 */
  interface EditMediaStreamInfo {
    /** 录制的流 ID */
    StreamId: string;
    /** 流剪辑的起始时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    StartTime?: string;
    /** 流剪辑的结束时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    EndTime?: string;
  }

  /** 视频编辑极速高清参数配置。 */
  interface EditMediaTEHDConfig {
    /** 极速高清类型，可选值：TEHD-100 表示极速高清-100; OFF 表示关闭极速高清。不填表示 OFF。 */
    Type: string;
    /** 视频码率上限，当 Type 指定了极速高清类型时有效。不填或填0表示由云点播自动设置码率上限。 */
    MaxVideoBitrate?: number;
  }

  /** 编辑视频任务信息 */
  interface EditMediaTask {
    /** 任务 ID。 */
    TaskId?: string;
    /** 任务流状态，取值：PROCESSING：处理中；FINISH：已完成。 */
    Status?: string;
    /** 错误码，0 表示成功，其他值表示失败：40000：输入参数不合法，请检查输入参数；60000：源文件错误（如视频数据损坏），请确认源文件是否正常；70000：内部服务错误，建议重试。 */
    ErrCode?: number;
    /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/266/50368) 列表。 */
    ErrCodeExt?: string;
    /** 错误信息。 */
    Message?: string;
    /** 编辑视频任务进度，取值范围 [0-100] 。 */
    Progress?: number;
    /** 视频编辑任务的输入。 */
    Input?: EditMediaTaskInput;
    /** 视频编辑任务的输出。 */
    Output?: EditMediaTaskOutput;
    /** 输出视频的元信息。 */
    MetaData?: MediaMetaData;
    /** 任务类型为 Procedure 的任务 ID。若发起[编辑视频](https://cloud.tencent.com/document/api/266/34783)任务时指定了任务流模板(ProcedureName)，当该任务流模板指定了 MediaProcessTask、AiAnalysisTask、AiRecognitionTask 中的一个或多个时发起该任务。 */
    ProcedureTaskId?: string;
    /** 任务类型为 ReviewAudioVideo 的任务 ID。若发起[编辑视频](https://cloud.tencent.com/document/api/266/34783)任务时指定了任务流模板(ProcedureName)，当该任务流模板指定了 ReviewAudioVideoTask 时，发起该任务。 */
    ReviewAudioVideoTaskId?: string;
    /** 用于去重的识别码，如果七天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。 */
    SessionId?: string;
    /** 来源上下文，用于透传用户请求信息，任务流状态变更回调将返回该字段值，最长 1000 个字符。 */
    SessionContext?: string;
  }

  /** 编辑视频任务的输入。 */
  interface EditMediaTaskInput {
    /** 输入视频的来源类型，可以取的值为 File，Stream 两种。 */
    InputType?: string;
    /** 输入的视频文件信息，当 InputType 为 File 时，该字段有值。 */
    FileInfoSet?: EditMediaFileInfo[];
    /** 输入的流信息，当 InputType 为 Stream 时，该字段有值。 */
    StreamInfoSet?: EditMediaStreamInfo[];
  }

  /** 编辑视频任务的输出 */
  interface EditMediaTaskOutput {
    /** 文件类型，例如 mp4、flv 等。 */
    FileType?: string;
    /** 媒体文件播放地址。 */
    FileUrl?: string;
    /** 媒体文件 ID。 */
    FileId?: string;
    /** 输出文件名，最长 64 个字符。缺省由系统指定生成文件名。 */
    MediaName?: string;
    /** 分类ID，用于对媒体进行分类管理，可通过 [创建分类](/document/product/266/7812) 接口，创建分类，获得分类 ID。默认值：0，表示其他分类。 */
    ClassId?: number;
    /** 输出文件的过期时间，超过该时间文件将被删除，默认为永久不过期，格式按照 ISO 8601标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732)。 */
    ExpireTime?: string;
  }

  /** 视频流配置信息 */
  interface EditMediaVideoStream {
    /** 视频流的编码格式，可选值：libx264：H.264 编码；libx265：H.265 编码；av1：AOMedia Video 1 编码；H.266：H.266 编码。 */
    Codec?: string;
    /** 视频流的码率，取值范围：0 和 [128, 100000]，单位：kbps。当取值为 0 或不填时，表示由云点播自动设置码率。 */
    Bitrate?: number;
    /** 分辨率自适应，可选值：open：开启，此时，Width 代表视频的长边，Height 表示视频的短边；close：关闭，此时，Width 代表视频的宽度，Height 表示视频的高度。默认值：open。 */
    ResolutionAdaptive?: string;
    /** 视频流宽度（或长边）的最大值，取值范围：0 和 [128, 4096]，单位：px。当 Width、Height 均为 0，则分辨率取基准分辨率；当 Width 为 0，Height 非 0，则 Width 按基准分辨率比例缩放；当 Width 非 0，Height 为 0，则 Height 按基准分辨率比例缩放；当 Width、Height 均非 0，则分辨率按用户指定。默认值：0。 */
    Width?: number;
    /** 视频流高度（或短边）的最大值，取值范围：0 和 [128, 4096]，单位：px。当 Width、Height 均为 0，则分辨率取基准分辨率；当 Width 为 0，Height 非 0，则 Width 按基准分辨率比例缩放；当 Width 非 0，Height 为 0，则 Height 按基准分辨率比例缩放；当 Width、Height 均非 0，则分辨率按用户指定。默认值：0。 */
    Height?: number;
    /** 视频帧率，取值范围：[0, 100]，单位：Hz。当取值为0，将自动为视频设置帧率。默认值为 0。 */
    Fps?: number;
  }

  /** 空的轨道片段，用来进行时间轴的占位。如需要两个音频片段之间有一段时间的静音，可以用 EmptyTrackItem 来进行占位。 */
  interface EmptyTrackItem {
    /** 持续时间，单位为秒。 */
    Duration: number;
  }

  /** 音画质重生结果文件输出。 */
  interface EnhanceMediaQualityOutputConfig {
    /** 输出文件名，最长 64 个字符。缺省由系统指定生成文件名。 */
    MediaName?: string;
    /** 分类ID，用于对媒体进行分类管理，可通过 [创建分类](/document/product/266/7812) 接口，创建分类，获得分类 ID。默认值：0，表示其他分类。 */
    ClassId?: number;
    /** 输出文件的过期时间，超过该时间文件将被删除，默认为永久不过期，格式按照 ISO 8601标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732)。 */
    ExpireTime?: string;
  }

  /** 事件通知内容，其中，TranscodeCompleteEvent、ConcatCompleteEvent、ClipCompleteEvent、CreateImageSpriteCompleteEvent、SnapshotByTimeOffsetCompleteEvent 为兼容 2017 版接口发起任务的事件通知。 */
  interface EventContent {
    /** 事件句柄，调用方必须调用 ConfirmEvents 来确认消息已经收到，确认有效时间 30 秒。失效后，事件可重新被获取。 */
    EventHandle?: string;
    /** 支持事件类型：NewFileUpload：视频上传完成；ProcedureStateChanged：任务流状态变更；FileDeleted：视频删除完成；RestoreMediaComplete：视频取回完成；PullComplete：视频转拉完成；EditMediaComplete：视频编辑完成；SplitMediaComplete：视频拆分完成；ComposeMediaComplete：制作媒体文件完成；WechatMiniProgramPublishComplete：微信小程序发布完成。RemoveWatermark：智能去除水印完成。RebuildMediaComplete：音画质重生完成事件（不推荐使用）。ReviewAudioVideoComplete：音视频审核完成；ExtractTraceWatermarkComplete：提取溯源水印完成；ExtractCopyRightWatermarkComplete：提取版权水印完成；DescribeFileAttributesComplete：获取文件属性完成；QualityInspectComplete：音画质检测完成；QualityEnhanceComplete：音画质重生任务完成；PersistenceComplete：剪辑固化完成；ComplexAdaptiveDynamicStreamingComplete：复杂自适应码流任务完成。兼容 2017 版的事件类型：TranscodeComplete：视频转码完成；ConcatComplete：视频拼接完成；ClipComplete：视频剪辑完成；CreateImageSpriteComplete：视频截取雪碧图完成；CreateSnapshotByTimeOffsetComplete：视频按时间点截图完成。 */
    EventType?: string;
    /** 视频上传完成事件，当事件类型为 NewFileUpload 时有效。 */
    FileUploadEvent?: FileUploadTask | null;
    /** 任务流状态变更事件，当事件类型为 ProcedureStateChanged 时有效。 */
    ProcedureStateChangeEvent?: ProcedureTask | null;
    /** 文件删除事件，当事件类型为 FileDeleted 时有效。 */
    FileDeleteEvent?: FileDeleteTask | null;
    /** 视频转拉完成事件，当事件类型为 PullComplete 时有效。 */
    PullCompleteEvent?: PullUploadTask | null;
    /** 视频编辑完成事件，当事件类型为 EditMediaComplete 时有效。 */
    EditMediaCompleteEvent?: EditMediaTask | null;
    /** 视频拆分完成事件，当事件类型为 SplitMediaComplete 时有效。 */
    SplitMediaCompleteEvent?: SplitMediaTask | null;
    /** 制作媒体文件任务完成事件，当事件类型为 ComposeMediaComplete 时有效。 */
    ComposeMediaCompleteEvent?: ComposeMediaTask | null;
    /** 视频剪辑完成事件，当事件类型为 ClipComplete 时有效。 */
    ClipCompleteEvent?: ClipTask2017 | null;
    /** 视频转码完成事件，当事件类型为 TranscodeComplete 时有效。 */
    TranscodeCompleteEvent?: TranscodeTask2017 | null;
    /** 视频截取雪碧图完成事件，当事件类型为 CreateImageSpriteComplete 时有效。 */
    CreateImageSpriteCompleteEvent?: CreateImageSpriteTask2017 | null;
    /** 视频拼接完成事件，当事件类型为 ConcatComplete 时有效。 */
    ConcatCompleteEvent?: ConcatTask2017 | null;
    /** 视频按时间点截图完成事件，当事件类型为 CreateSnapshotByTimeOffsetComplete 时有效。 */
    SnapshotByTimeOffsetCompleteEvent?: SnapshotByTimeOffsetTask2017 | null;
    /** 微信发布完成事件，当事件类型为 WechatPublishComplete 时有效。 */
    WechatPublishCompleteEvent?: WechatPublishTask | null;
    /** 微信小程序发布任务完成事件，当事件类型为 WechatMiniProgramPublishComplete 时有效。 */
    WechatMiniProgramPublishCompleteEvent?: WechatMiniProgramPublishTask | null;
    /** 智能去除水印完成事件，当事件类型为 RemoveWatermark 有效。 */
    RemoveWatermarkCompleteEvent?: RemoveWatermarkTask | null;
    /** 视频取回完成事件，当事件类型为 RestoreMediaComplete 时有效。 */
    RestoreMediaCompleteEvent?: RestoreMediaTask | null;
    /** 音画质重生完成事件，当事件类型为 RebuildMediaComplete 时有效。 */
    RebuildMediaCompleteEvent?: RebuildMediaTask | null;
    /** 溯源水印提取完成事件，当事件类型为 ExtractTraceWatermarkComplete 时有效。 */
    ExtractTraceWatermarkCompleteEvent?: ExtractTraceWatermarkTask | null;
    /** 版权水印提取完成事件，当事件类型为 ExtractCopyRightWatermarkComplete 时有效。 */
    ExtractCopyRightWatermarkCompleteEvent?: ExtractCopyRightWatermarkTask | null;
    /** 音视频审核完成事件，当事件类型为 ReviewAudioVideoComplete 时有效。 */
    ReviewAudioVideoCompleteEvent?: ReviewAudioVideoTask | null;
    /** 该字段已无效。 */
    ReduceMediaBitrateCompleteEvent?: ReduceMediaBitrateTask | null;
    /** 获取文件属性完成事件，当事件类型为 DescribeFileAttributesComplete 时有效。 */
    DescribeFileAttributesCompleteEvent?: DescribeFileAttributesTask | null;
    /** 音画质检测完成事件，当事件类型为 QualityInspectComplete 时有效。 */
    QualityInspectCompleteEvent?: QualityInspectTask | null;
    /** 音画质重生完成事件，当事件类型为 QualityEnhanceComplete 时有效。 */
    QualityEnhanceCompleteEvent?: QualityEnhanceTask | null;
    /** 媒体转推状态变化事件，当事件类型为 MediaCastStatusChanged 时有效。 */
    MediaCastStatusChangedEvent?: MediaCastEvent | null;
    /** 剪辑固化完成事件，当事件类型为 PersistenceComplete 时有效。 */
    PersistenceCompleteEvent?: PersistenceCompleteTask | null;
    /** 自适应码流任务信息，仅当 EventType 为ComplexAdaptiveDynamicStreamingComplete 时有效。 */
    ComplexAdaptiveDynamicStreamingCompleteEvent?: ComplexAdaptiveDynamicStreamingTask | null;
  }

  /** 提取版权水印任务。 */
  interface ExtractCopyRightWatermarkTask {
    /** 任务 ID。 */
    TaskId?: string;
    /** 任务状态，取值：PROCESSING：处理中；FINISH：已完成。 */
    Status?: string;
    /** 错误码，0 表示成功，其他值表示失败：40000：输入参数不合法，请检查输入参数；60000：源文件错误（如视频数据损坏），请确认源文件是否正常；70000：内部服务错误，建议重试。 */
    ErrCode?: number;
    /** 错误信息。 */
    Message?: string;
    /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/266/50368) 列表。 */
    ErrCodeExt?: string;
    /** 提取版权水印任务输入信息。 */
    Input?: ExtractCopyRightWatermarkTaskInput;
    /** 提取版权水印任务输出信息。 */
    Output?: ExtractCopyRightWatermarkTaskOutput;
    /** 用于去重的识别码，如果七天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。 */
    SessionId?: string;
    /** 来源上下文，用于透传用户请求信息，任务流状态变更回调将返回该字段值，最长 1000 个字符。 */
    SessionContext?: string;
  }

  /** 提取版权水印任务输入 */
  interface ExtractCopyRightWatermarkTaskInput {
    /** 需要提取水印的媒体 URL。 */
    Url?: string;
  }

  /** 提取版权水印输出信息 */
  interface ExtractCopyRightWatermarkTaskOutput {
    /** 版权信息。 */
    Text?: string;
  }

  /** 提取溯源水印任务。 */
  interface ExtractTraceWatermarkTask {
    /** 任务 ID。 */
    TaskId: string;
    /** 任务状态，取值：PROCESSING：处理中；FINISH：已完成。 */
    Status: string;
    /** 错误码，0 表示成功，其他值表示失败：40000：输入参数不合法，请检查输入参数；60000：源文件错误（如视频数据损坏），请确认源文件是否正常；70000：内部服务错误，建议重试。 */
    ErrCode: number;
    /** 错误信息。 */
    Message: string;
    /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/266/50368) 列表。 */
    ErrCodeExt: string;
    /** 提取溯源水印任务输入信息。 */
    Input: ExtractTraceWatermarkTaskInput;
    /** 提取溯源水印任务输出信息。 */
    Output: ExtractTraceWatermarkTaskOutput;
    /** 用于去重的识别码，如果七天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。 */
    SessionId: string;
    /** 来源上下文，用于透传用户请求信息，任务流状态变更回调将返回该字段值，最长 1000 个字符。 */
    SessionContext: string;
  }

  /** 提取溯源水印输入 */
  interface ExtractTraceWatermarkTaskInput {
    /** 需要提取水印的媒体 URL。 */
    Url?: string;
    /** 媒体文件 ID。Url 对应的原始媒体文件 ID。 */
    FileId?: string;
  }

  /** 提取溯源水印输出信息 */
  interface ExtractTraceWatermarkTaskOutput {
    /** 播放者的 ID，以十六进制表示，共6位。 */
    Uv?: string;
    /** 该字段已废弃。 */
    Uid?: string;
  }

  /** 人脸识别任务控制参数 */
  interface FaceConfigureInfo {
    /** 人脸识别任务开关，可选值：ON：开启智能人脸识别任务；OFF：关闭智能人脸识别任务。 */
    Switch: string;
    /** 人脸识别过滤分数，当识别结果达到该分数以上，返回识别结果。默认 95 分。取值范围：0 - 100。 */
    Score?: number;
    /** 默认人物过滤标签，指定需要返回的默认人物的标签。如果未填或者为空，则全部默认人物结果都返回。标签可选值：entertainment：娱乐明星；sport：体育明星；politician：相关人物。 */
    DefaultLibraryLabelSet?: string[];
    /** 用户自定义人物过滤标签，指定需要返回的用户自定义人物的标签。如果未填或者为空，则全部自定义人物结果都返回。标签个数最多 100 个，每个标签长度最多 16 个字符。 */
    UserDefineLibraryLabelSet?: string[];
    /** 人物库选择，可选值：Default：使用默认人物库；UserDefine：使用用户自定义人物库。All：同时使用默认人物库和用户自定义人物库。默认值：All，使用系统默认人物库及用户自定义人物库。 */
    FaceLibrary?: string;
  }

  /** 人脸识别任务控制参数 */
  interface FaceConfigureInfoForUpdate {
    /** 人脸识别任务开关，可选值：ON：开启智能人脸识别任务；OFF：关闭智能人脸识别任务。 */
    Switch?: string;
    /** 人脸识别过滤分数，当识别结果达到该分数以上，返回识别结果。取值范围：0-100。 */
    Score?: number;
    /** 默认人物过滤标签，指定需要返回的默认人物的标签。如果未填或者为空，则全部默认人物结果都返回。标签可选值：entertainment：娱乐明星；sport：体育明星；politician：相关人物。 */
    DefaultLibraryLabelSet?: string[];
    /** 用户自定义人物过滤标签，指定需要返回的用户自定义人物的标签。如果未填或者为空，则全部自定义人物结果都返回。标签个数最多 100 个，每个标签长度最多 16 个字符。 */
    UserDefineLibraryLabelSet?: string[];
    /** 人物库选择，可选值：Default：使用默认人物库；UserDefine：使用用户自定义人物库。All：同时使用默认人物库和用户自定义人物库。 */
    FaceLibrary?: string;
  }

  /** 人脸增强控制 */
  interface FaceEnhanceInfo {
    /** 人脸增强控制开关，可选值：ON：开启人脸增强；OFF：关闭人脸增强。 */
    Switch: string;
    /** 人脸增强强度，仅当人脸增强控制开关为 ON 时有效，取值范围：0.0~1.0。默认：0.0。 */
    Intensity?: number;
  }

  /** 快速媒体编辑操作的输入媒体类型 */
  interface FastEditMediaFileInfo {
    /** 媒体的 ID。 */
    FileId: string;
    /** 操作的音视频类型，可选值有：Transcode：转码输出；Original：原始音视频。注意：操作的音视频，必须为 HLS 格式。 */
    AudioVideoType: string;
    /** 当 AudioVideoType 为 Transcode 时有效，表示操作媒体的的转码模板 ID。 */
    TranscodeDefinition?: number;
    /** 媒体剪辑起始的偏移时间，单位：秒。 */
    StartTimeOffset?: number;
    /** 媒体剪辑结束的时间偏移，单位：秒。 */
    EndTimeOffset?: number;
  }

  /** 文件删除结果信息 */
  interface FileDeleteResultItem {
    /** 删除的文件 ID 。 */
    FileId?: string;
    /** 本次删除的文件部分。 */
    DeleteParts?: MediaDeleteItem[];
  }

  /** 文件删除任务 */
  interface FileDeleteTask {
    /** 删除文件 ID 列表。 */
    FileIdSet?: string[];
    /** 删除文件结果信息列表。 */
    FileDeleteResultInfo?: FileDeleteResultItem[];
  }

  /** 文件审核信息。 */
  interface FileReviewInfo {
    /** 媒体审核信息\*。\* 只展示通过 [音视频审核(ReviewAudioVideo)](https://cloud.tencent.com/document/api/266/80283) 或 [图片审核(ReviewImage)](https://cloud.tencent.com/document/api/266/73217) 发起的审核结果信息。 */
    MediaReviewInfo?: ReviewInfo | null;
    /** 媒体封面审核信息\*。\* 只展示通过 [音视频审核(ReviewAudioVideo)](https://cloud.tencent.com/document/api/266/80283) 或 [图片审核(ReviewImage)](https://cloud.tencent.com/document/api/266/73217) 发起的审核结果信息。 */
    CoverReviewInfo?: ReviewInfo | null;
  }

  /** 文件上传任务信息 */
  interface FileUploadTask {
    /** 文件唯一 ID。 */
    FileId?: string;
    /** 上传完成后生成的媒体文件基础信息。 */
    MediaBasicInfo?: MediaBasicInfo;
    /** 任务类型为 Procedure 的任务 ID。若视频[上传时指定要执行的任务(procedure)](https://cloud.tencent.com/document/product/266/33475)，当该任务流模板指定了 MediaProcessTask、AiAnalysisTask、AiRecognitionTask 中的一个或多个时发起该任务。 */
    ProcedureTaskId?: string;
    /** 任务类型为 ReviewAudioVideo 的任务 ID。若视频[上传时指定要执行的任务(procedure)](https://cloud.tencent.com/document/product/266/33475)，当该任务流模板指定了 ReviewAudioVideoTask 时，发起该任务。 */
    ReviewAudioVideoTaskId?: string;
    /** 元信息。包括大小、时长、视频流信息、音频流信息等。 */
    MetaData?: MediaMetaData | null;
  }

  /** 文件验证信息 */
  interface FileVerifyInfo {
    /** 文件验证 URL 指引。 */
    FileVerifyUrl?: string;
    /** 文件校验域名列表。 */
    FileVerifyDomains?: string[];
    /** 文件校验文件名。 */
    FileVerifyName?: string;
  }

  /** 智能按帧标签任务控制参数 */
  interface FrameTagConfigureInfo {
    /** 智能按帧标签任务开关，可选值：ON：开启智能按帧标签任务；OFF：关闭智能按帧标签任务。 */
    Switch: string;
    /** 截帧间隔，单位为秒，当不填时，默认截帧间隔为 1 秒，最小值为 0.5 秒。 */
    ScreenshotInterval?: number;
  }

  /** 智能按帧标签任务控制参数 */
  interface FrameTagConfigureInfoForUpdate {
    /** 智能按帧标签任务开关，可选值：ON：开启智能按帧标签任务；OFF：关闭智能按帧标签任务。 */
    Switch?: string;
    /** 截帧间隔，单位为秒，最小值为 0.5 秒。 */
    ScreenshotInterval?: number;
  }

  /** 高动态范围类型控制参数。 */
  interface HDRInfo {
    /** 高动态范围类型控制开关，可选值：ON：开启高动态范围类型转换；OFF：关闭高动态范围类型转换。 */
    Switch: string;
    /** 高动态范围类型，可选值：hdr10：表示 hdr10 标准；hlg：表示 hlg 标准。注意： 仅当高动态范围类型控制开关为 ON 时有效；当画质重生目标参数中指定视频输出参数的视频流编码格式 Codec 为 libx265 时有效。 */
    Type?: string;
  }

  /** 视频片头片尾识别任务控制参数 */
  interface HeadTailConfigureInfo {
    /** 视频片头片尾识别任务开关，可选值：ON：开启智能视频片头片尾识别任务；OFF：关闭智能视频片头片尾识别任务。 */
    Switch: string;
  }

  /** 视频片头片尾识别任务控制参数 */
  interface HeadTailConfigureInfoForUpdate {
    /** 视频片头片尾识别任务开关，可选值：ON：开启智能视频片头片尾识别任务；OFF：关闭智能视频片头片尾识别任务。 */
    Switch?: string;
  }

  /** 片尾任务输入类型。 */
  interface HeadTailTaskInput {
    /** 片头片尾模板号。 */
    Definition: number;
  }

  /** 片头片尾模板详情 */
  interface HeadTailTemplate {
    /** 片头片尾模板号。 */
    Definition?: number;
    /** 模板名，最大支持 64 个字符。 */
    Name?: string;
    /** 模板描述，最大支持 256 个字符。 */
    Comment?: string;
    /** 片头候选列表。使用时会选择跟正片分辨率最贴近的一个使用，当存在相同的候选时，选择第一个使用，最大支持 5 个。 */
    HeadCandidateSet?: string[];
    /** 片尾候选列表。使用时会选择跟正片分辨率最贴近的一个使用，当存在相同的候选时，选择第一个使用，最大支持 5 个。 */
    TailCandidateSet?: string[];
    /** 填充方式，当视频流配置宽高参数与原始视频的宽高比不一致时，对转码的处理方式，即为“填充”。可选填充方式： stretch：拉伸，对每一帧进行拉伸，填满整个画面，可能导致转码后的视频被“压扁“或者“拉长“； gauss：高斯模糊，保持视频宽高比不变，边缘剩余部分使用高斯模糊； white：留白，保持视频宽高比不变，边缘剩余部分使用白色填充； black：留黑，保持视频宽高比不变，边缘剩余部分使用黑色填充。默认值：stretch 。 */
    FillType?: string;
    /** 模板创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    CreateTime?: string;
    /** 模板最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    UpdateTime?: string;
  }

  /** 智能精彩集锦片段列表。 */
  interface HighlightSegmentItem {
    /** 置信度。 */
    Confidence?: number;
    /** 片段起始时间偏移。 */
    StartTimeOffset?: number;
    /** 片段结束时间偏移。 */
    EndTimeOffset?: number;
  }

  /** 智能精彩片段任务控制参数 */
  interface HighlightsConfigureInfo {
    /** 智能精彩片段任务开关，可选值：ON：开启智能精彩片段任务；OFF：关闭智能精彩片段任务。 */
    Switch: string;
  }

  /** 智能精彩片段任务控制参数 */
  interface HighlightsConfigureInfoForUpdate {
    /** 智能精彩片段任务开关，可选值：ON：开启智能精彩片段任务；OFF：关闭智能精彩片段任务。 */
    Switch?: string;
  }

  /** IP 访问限制规则，当前支持配置 IP 黑名单和白名单。 */
  interface IPFilterPolicy {
    /** IP 访问限制状态，可选值：Enabled：启用；Disabled：禁用。 */
    Status: string;
    /** IP 访问限制类型： Black：黑名单方式校验。只有来自 IPList 列表中的 IP 请求会被拦截。White：白名单方式校验。只有来自 IPList 列表中的 IP 请求会被放行。当 Status 取值为 Enabled 时，FilterType 必须赋值。 */
    FilterType?: string;
    /** IP 列表，支持 X.X.X.X 格式 IPV4 地址，或 X:X:X:X:X:X:X:X 格式 IPV6 地址，或网段格式 /N（IPV4:1≤N≤32；IPV6:1≤N≤128）；最多可填充 200 个 IP 或网段。当 Status 取值为 Enabled 时，IPList 必须赋值。 */
    IPList?: string[];
  }

  /** 图片模糊处理。 */
  interface ImageBlur {
    /** 图片模糊的操作类型。可选模式有：Gaussian : 高斯模糊。 */
    Type: string;
    /** 模糊半径，取值范围为1 - 50。当 Type 取值为 Gaussian 时此字段有效。 */
    Radius?: number;
    /** 正态分布的标准差，必须大于0。当 Type 取值为 Gaussian 时此字段有效。 */
    Sigma?: number;
  }

  /** 图片中心裁剪处理。 */
  interface ImageCenterCut {
    /** 图片的裁剪模式，可选 Circle 和 Rectangle。Circle ： 内切圆裁剪，输出图片半径为 Radius。Rectangle ： 矩形裁剪，输出图片宽为 Width ， 高为 Height。 */
    Type: string;
    /** 输出图片的宽度，单位为像素，当 Type 取值为 Rectangle 时有效。 */
    Width?: number;
    /** 输出图片的高度，单位为像素，当 Type 取值为 Rectangle 时有效。 */
    Height?: number;
    /** 输出图片的半径，单位为像素，当 Type 取值为 Circle 时有效。 */
    Radius?: number;
  }

  /** 图片智能内容识别任务输入 */
  interface ImageContentReviewInput {
    /** 图片智能内容审核模板 ID。当前只支持：10：所有审核类型均打开。 */
    Definition: number;
  }

  /** 单个图片处理操作。 */
  interface ImageOperation {
    /** 图片处理类型。可选类型有：Scale : 图片缩略处理；CenterCut : 图片裁剪处理；Blur : 图片模糊处理。 */
    Type: string;
    /** 图片缩略处理，仅当 Type 为 Scale 时有效。 */
    Scale?: ImageScale;
    /** 图片裁剪处理，仅当 Type 为 CenterCut 时有效。 */
    CenterCut?: ImageCenterCut;
    /** 图片模糊处理，仅当 Type 为 Blur 时有效。 */
    Blur?: ImageBlur;
  }

  /** 图片处理模板， 最多支持三次操作。例如：裁剪-缩略-裁剪。 */
  interface ImageProcessingTemplate {
    /** 图片处理模板唯一标识。 */
    Definition?: number;
    /** 模板类型，取值范围：Preset：系统预置模板；Custom：用户自定义模板。 */
    Type?: string;
    /** 图片处理模板名称。 */
    Name?: string;
    /** 模板描述信息。 */
    Comment?: string;
    /** 图片处理操作数组，操作将以数组顺序执行。长度限制：3。 */
    Operations?: ImageOperation[];
    /** 模板创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    CreateTime?: string;
  }

  /** 图片审核次数统计数据。 */
  interface ImageReviewUsageDataItem {
    /** 数据所在时间区间的开始时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。如：当时间粒度为天，2018-12-01T00:00:00+08:00，表示2018年12月1日（含）到2018年12月2日（不含）区间。 */
    Time: string;
    /** 次数。 */
    Count: number;
  }

  /** 图片缩放处理。 */
  interface ImageScale {
    /** 图片缩放的操作类型。可选模式有：WidthFirst : 指定图片的宽为 Width ，高度等比缩放。HeightFirst : 指定图片的高为 Height ，宽度等比缩放。LongEdgeFirst : 指定图片的长边为 LongEdge ，短边等比缩放。ShortEdgeFirst : 指定图片的短边为 ShortEdge ，长边等比缩放。Force : 忽略原图宽高比例，指定图片宽度为 Width，高度为 Height ，强行缩放图片，可能导致目标图片变形。 */
    Type: string;
    /** 输出图片的高度，单位为像素。当 Type 取值为 HeightFirst 或 Force 时此字段有效。 */
    Height?: number;
    /** 输出图片的宽度，单位为像素。当 Type 取值为 WidthFirst 或 Force 时此字段有效。 */
    Width?: number;
    /** 输出图片的长边长度，单位为像素。当 Type 取值为 LongEdgeFirst 时此字段有效。 */
    LongEdge?: number;
    /** 输出图片的短边长度，单位为像素。当 Type 取值为 ShortEdgeFirst 时此字段有效。 */
    ShortEdge?: number;
  }

  /** 对视频截雪碧图任务输入参数类型 */
  interface ImageSpriteTaskInput {
    /** 雪碧图模板 ID。 */
    Definition: number;
  }

  /** 雪碧图模板详情 */
  interface ImageSpriteTemplate {
    /** 雪碧图模板唯一标识。 */
    Definition?: number;
    /** 模板类型，取值范围：Preset：系统预置模板；Custom：用户自定义模板。 */
    Type?: string;
    /** 雪碧图模板名称。 */
    Name?: string;
    /** 雪碧图中小图的宽度（或长边）的最大值，取值范围：0 和 [128, 4096]，单位：px。当 Width、Height 均为 0，则分辨率同源；当 Width 为 0，Height 非 0，则 Width 按比例缩放；当 Width 非 0，Height 为 0，则 Height 按比例缩放；当 Width、Height 均非 0，则分辨率按用户指定。默认值：0。 */
    Width?: number;
    /** 雪碧图中小图的高度（或短边）的最大值，取值范围：0 和 [128, 4096]，单位：px。当 Width、Height 均为 0，则分辨率同源；当 Width 为 0，Height 非 0，则 Width 按比例缩放；当 Width 非 0，Height 为 0，则 Height 按比例缩放；当 Width、Height 均非 0，则分辨率按用户指定。默认值：0。 */
    Height?: number;
    /** 分辨率自适应，可选值：open：开启，此时，Width 代表视频的长边，Height 表示视频的短边；close：关闭，此时，Width 代表视频的宽度，Height 表示视频的高度。默认值：open。 */
    ResolutionAdaptive?: string;
    /** 采样类型。 */
    SampleType?: string;
    /** 采样间隔。 */
    SampleInterval?: number;
    /** 雪碧图中小图的行数。 */
    RowCount?: number;
    /** 雪碧图中小图的列数。 */
    ColumnCount?: number;
    /** 模板创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    CreateTime?: string;
    /** 模板最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    UpdateTime?: string;
    /** 填充方式，当视频流配置宽高参数与原始视频的宽高比不一致时，对转码的处理方式，即为“填充”。可选填充方式： stretch：拉伸，对每一帧进行拉伸，填满整个画面，可能导致转码后的视频被“压扁“或者“拉长“；black：留黑，保持视频宽高比不变，边缘剩余部分使用黑色填充。默认值：black 。 */
    FillType?: string;
    /** 模板描述信息。 */
    Comment?: string;
    /** 图片格式。 */
    Format?: string;
  }

  /** 图像旋转、翻转等操作 */
  interface ImageTransform {
    /** 类型，取值有： Rotate：图像旋转。 Flip：图像翻转。 */
    Type: string;
    /** 图像以中心点为原点进行旋转的角度，取值范围0~360。当 Type = Rotate 时有效。 */
    RotateAngle?: number;
    /** 图像翻转动作，取值有：Horizental：水平翻转，即左右镜像。Vertical：垂直翻转，即上下镜像。当 Type = Flip 时有效。 */
    Flip?: string;
  }

  /** 图片水印模板输入参数 */
  interface ImageWatermarkInput {
    /** 水印图片 [Base64](https://tools.ietf.org/html/rfc4648) 编码后的字符串。支持 jpeg、png、gif 图片格式。 */
    ImageContent: string;
    /** 水印的宽度。支持 %、px 两种格式：当字符串以 % 结尾，表示水印 Width 为视频宽度的百分比大小，如 10% 表示 Width 为视频宽度的 10%；当字符串以 px 结尾，表示水印 Width 单位为像素，如 100px 表示 Width 为 100 像素。取值范围为[8, 4096]。默认值：10%。 */
    Width?: string;
    /** 水印的高度。支持 %、px 两种格式：当字符串以 % 结尾，表示水印 Height 为视频高度的百分比大小，如 10% 表示 Height 为视频高度的 10%；当字符串以 px 结尾，表示水印 Height 单位为像素，如 100px 表示 Height 为 100 像素。取值范围为0或[8, 4096]。默认值：0px，表示 Height 按照原始水印图片的宽高比缩放。 */
    Height?: string;
    /** 水印重复类型。使用场景：水印为动态图像。取值范围：once：动态水印播放完后，不再出现；repeat_last_frame：水印播放完后，停留在最后一帧；repeat：水印循环播放，直到视频结束（默认值）。 */
    RepeatType?: string;
    /** 图片透明度，取值范围：[0, 100]0：完全不透明100：完全透明默认值：0。 */
    Transparency?: number;
  }

  /** 图片水印模板输入参数 */
  interface ImageWatermarkInputForUpdate {
    /** 水印图片 [Base64](https://tools.ietf.org/html/rfc4648) 编码后的字符串。支持 jpeg、png 图片格式。 */
    ImageContent?: string;
    /** 水印的宽度。支持 %、px 两种格式：当字符串以 % 结尾，表示水印 Width 为视频宽度的百分比大小，如 10% 表示 Width 为视频宽度的 10%；当字符串以 px 结尾，表示水印 Width 单位为像素，如 100px 表示 Width 为 100 像素。取值范围为[8, 4096]。 */
    Width?: string;
    /** 水印的高度。支持 %、px 两种格式：当字符串以 % 结尾，表示水印 Height 为视频高度的百分比大小，如 10% 表示 Height 为视频高度的 10%；当字符串以 px 结尾，表示水印 Height 单位为像素，如 100px 表示 Height 为 100 像素。取值范围为0或[8, 4096]。 */
    Height?: string;
    /** 水印重复类型。使用场景：水印为动态图像。取值范围：once：动态水印播放完后，不再出现；repeat_last_frame：水印播放完后，停留在最后一帧；repeat：水印循环播放，直到视频结束。 */
    RepeatType?: string;
    /** 图片透明度，取值范围：[0, 100]0：完全不透明100：完全透明。 */
    Transparency?: number;
  }

  /** 图片水印模板 */
  interface ImageWatermarkTemplate {
    /** 水印图片地址。 */
    ImageUrl: string;
    /** 水印的宽度。支持 %、px 两种格式：当字符串以 % 结尾，表示水印 Width 为视频宽度的百分比大小，如 10% 表示 Width 为视频宽度的 10%；当字符串以 px 结尾，表示水印 Width 单位为像素，如 100px 表示 Width 为 100 像素。 */
    Width: string;
    /** 水印的高度。支持 %、px 两种格式：当字符串以 % 结尾，表示水印 Height 为视频高度的百分比大小，如 10% 表示 Height 为视频高度的 10%；当字符串以 px 结尾，表示水印 Height 单位为像素，如 100px 表示 Height 为 100 像素；0px：表示 Height 按照 Width 对视频宽度的比例缩放。 */
    Height: string;
    /** 水印重复类型。使用场景：水印为动态图像。取值范围：once：动态水印播放完后，不再出现；repeat_last_frame：水印播放完后，停留在最后一帧；repeat：水印循环播放，直到视频结束。 */
    RepeatType: string;
    /** 图片透明度，取值范围：[0, 100]0：完全不透明100：完全透明。 */
    Transparency: number;
  }

  /** 视频画面抖动重影检测的控制参数。 */
  interface JitterConfigureInfo {
    /** 视频画面抖动重影检测开关，可选值：ON：开启；OFF：关闭。 */
    Switch: string;
  }

  /** 视频画面抖动重影检测的控制参数。 */
  interface JitterConfigureInfoForUpdate {
    /** 视频画面抖动重影检测开关，可选值：ON：开启；OFF：关闭。 */
    Switch?: string;
  }

  /** 即时转码模板详情。 */
  interface JustInTimeTranscodeTemplate {
    /** 模板类型。 */
    Type?: string;
    /** 模板名。 */
    Name?: string;
    /** 模板描述。 */
    Comment?: string;
    /** 视频参数配置。 */
    VideoConfigure?: VideoConfigureInfo;
    /** 水印参数配置。 */
    WatermarkConfigure?: WatermarkConfigureData;
  }

  /** License 请求次数统计数据。 */
  interface LicenseUsageDataItem {
    /** 数据所在时间区间的开始时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。如：当时间粒度为天，2018-12-01T00:00:00+08:00，表示2018年12月1日（含）到2018年12月2日（不含）区间。 */
    Time: string;
    /** License 请求次数。 */
    Count: number;
  }

  /** 即时剪辑后媒体的片段信息。 */
  interface LiveRealTimeClipMediaSegmentInfo {
    /** 片段的起始时间。格式参照 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732)。 */
    StartTime?: string;
    /** 片段的结束时间。格式参照 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732)。 */
    EndTime?: string;
  }

  /** 直播即时剪辑流信息 */
  interface LiveRealTimeClipStreamInfo {
    /** 直播流类型，可选值：Original（原始流，默认值）。Transcoding（转码流）。 */
    Type?: string;
    /** 直播转码模板ID。当Type值为"Transcoding"时，必须填写。 */
    TemplateId?: number;
  }

  /** 直播录制信息 */
  interface LiveRecordInfo {
    /** 直播录制流 ID。 */
    StreamId?: string;
    /** 录制起始时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    RecordStartTime?: string;
    /** 录制结束时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    RecordEndTime?: string;
  }

  /** 低光照增强控制 */
  interface LowLightEnhanceInfo {
    /** 低光照增强控制开关，可选值：ON：开启低光照增强；OFF：关闭低光照增强。 */
    Switch: string;
    /** 低光照增强类型，仅当低光照增强控制开关为 ON 时有效，可选值：normal：正常低光照增强；默认值：normal。 */
    Type?: string;
  }

  /** 用于描述 MPS 视频处理任务中的返回文件结果。 */
  interface MPSOutputFile {
    /** 文件类型。用于标识 MPS 视频处理任务执行结果中的特定返回文件。取值：AiAnalysis.DeLogo.Video: 智能擦除任务中产生的擦除后视频文件；AiAnalysis.DeLogo.OriginSubtitle: 智能擦除任务中基于画面提取的字幕文件；AiAnalysis.DeLogo.TranslateSubtitle: 智能擦除任务中基于画面提取的字幕翻译文件。 */
    FileType?: string;
    /** 存储形式。用于表示该结果文件的存储形式，取值有： Permanent：永久存储； Temporary：临时存储。 */
    StorageMode?: string;
    /** 媒体文件 ID。当 Type 为 Permanent 时有效，表示该结果文件以视频媒资形式存储在点播平台中，字段值为视频媒资的 FileId。 */
    FileId?: string;
    /** 结果文件的可下载 Url。 */
    Url?: string;
    /** 过期时间。当 StorageMode 为 Temporary 时有效，表示 Url 的过期时间，单位为秒。 */
    ExpiredTime?: number;
  }

  /** MPS 具体子任务查询结果类型。 */
  interface MPSSubTaskResult {
    /** 任务类型。MPS 的 WorkflowTask 结构中的具体子任务类型。取值：AiAnalysis.DeLogo：智能擦除任务。 */
    TaskType?: string;
    /** 任务状态。有 PROCESSING，SUCCESS 和 FAIL 三种。 */
    Status?: string;
    /** 错误码。返回0时成功，其他值为失败。 */
    ErrCode?: string;
    /** 错误信息。 */
    Message?: string;
    /** MPS 视频处理任务输入。该字段对应 MPS 任务返回中的 Input 结果，以 JSON 格式返回。 */
    Input?: string;
    /** MPS 视频处理任务输出。 */
    Output?: MPSTaskOutput;
  }

  /** MPS 子任务输出返回结果。 */
  interface MPSTaskOutput {
    /** 任务返回结果中的文件类型结果。如智能擦除中，擦除后的视频文件将被存入媒资，并在此字段中给出 FileId；基于画面提取的字幕文件 Url 将在此字段中给出。 */
    OutputFiles?: MPSOutputFile[];
  }

  /** 转自适应码流信息 */
  interface MediaAdaptiveDynamicStreamingInfo {
    /** 转自适应码流信息数组。 */
    AdaptiveDynamicStreamingSet: AdaptiveDynamicStreamingInfoItem[];
  }

  /** 智能分类结果 */
  interface MediaAiAnalysisClassificationItem {
    /** 智能分类的类别名称。 */
    Classification?: string;
    /** 智能分类的可信度，取值范围是 0 到 100。 */
    Confidence?: number;
  }

  /** 智能封面信息 */
  interface MediaAiAnalysisCoverItem {
    /** 智能封面地址。 */
    CoverUrl?: string;
    /** 智能封面的可信度，取值范围是 0 到 100。 */
    Confidence?: number;
  }

  /** 智能按帧标签结果信息 */
  interface MediaAiAnalysisFrameTagItem {
    /** 按帧标签名称。 */
    Tag?: string;
    /** 按帧标签名称的分类列表，CategorySet.N 表示第 N+1级分类。比如 Tag 为“塔楼”时，CategorySet 包含两个元素：CategorySet.0 为“场景”，CategorySet.1为 “建筑”，表示按帧标签为“塔楼”，且第1级分类是“场景”，第2级分类是“建筑”。 */
    CategorySet?: string[];
    /** 按帧标签的可信度，取值范围是 0 到 100。 */
    Confidence?: number;
  }

  /** 按帧标签片段列表 */
  interface MediaAiAnalysisFrameTagSegmentItem {
    /** 按帧标签起始的偏移时间。 */
    StartTimeOffset?: number;
    /** 按帧标签结束的偏移时间。 */
    EndTimeOffset?: number;
    /** 时间片段内的标签列表。 */
    TagSet?: MediaAiAnalysisFrameTagItem[];
  }

  /** 智能精彩片段信息 */
  interface MediaAiAnalysisHighlightItem {
    /** 智能精彩集锦地址。 */
    HighlightUrl?: string;
    /** 智能精彩集锦封面地址。 */
    CovImgUrl?: string;
    /** 智能精彩集锦的可信度，取值范围是 0 到 100。 */
    Confidence?: number;
    /** 智能精彩集锦持续时间。 */
    Duration?: number;
    /** 智能精彩集锦子片段列表，精彩集锦片段由这些子片段拼接生成。 */
    SegmentSet?: HighlightSegmentItem[];
  }

  /** 智能标签结果信息 */
  interface MediaAiAnalysisTagItem {
    /** 标签名称。 */
    Tag?: string;
    /** 标签的可信度，取值范围是 0 到 100。 */
    Confidence?: number;
  }

  /** 点播文件视频转动图结果信息 */
  interface MediaAnimatedGraphicsInfo {
    /** 视频转动图结果信息 */
    AnimatedGraphicsSet: MediaAnimatedGraphicsItem[];
  }

  /** 视频转动图结果信息 */
  interface MediaAnimatedGraphicsItem {
    /** 转动图的文件地址。 */
    Url?: string;
    /** 转动图模板 ID，参见[转动图参数模板](https://cloud.tencent.com/document/product/266/33481)。 */
    Definition?: number;
    /** 动图格式，如 gif。 */
    Container?: string;
    /** 动图的高度，单位：px。 */
    Height?: number;
    /** 动图的宽度，单位：px。 */
    Width?: number;
    /** 动图码率，单位：bps。 */
    Bitrate?: number;
    /** 动图大小，单位：字节。 */
    Size?: number;
    /** 动图的md5值。 */
    Md5?: string;
    /** 动图在视频中的起始时间偏移，单位：秒。 */
    StartTimeOffset?: number;
    /** 动图在视频中的结束时间偏移，单位：秒。 */
    EndTimeOffset?: number;
  }

  /** 点播文件音频流信息 */
  interface MediaAudioStreamItem {
    /** 音频流的码率，单位：bps。 */
    Bitrate?: number;
    /** 音频流的采样率，单位：hz。 */
    SamplingRate?: number;
    /** 音频流的编码格式，例如 aac。 */
    Codec?: string;
  }

  /** 点播媒体文件基础信息 */
  interface MediaBasicInfo {
    /** 媒体文件名称。 */
    Name?: string;
    /** 媒体文件描述。 */
    Description?: string;
    /** 媒体文件的创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    CreateTime?: string;
    /** 媒体文件的最近更新时间（如修改视频属性、发起视频处理等会触发更新媒体文件信息的操作），使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    UpdateTime?: string;
    /** 媒体文件的过期时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。过期后该媒体文件及其相关资源（转码结果、雪碧图等）将被永久删除。“9999-12-31T23:59:59Z”表示永不过期。 */
    ExpireTime?: string;
    /** 媒体文件的分类 ID。 */
    ClassId?: number;
    /** 媒体文件的分类名称。 */
    ClassName?: string;
    /** 媒体文件的分类路径，分类间以“-”分隔，如“新的一级分类 - 新的二级分类”。 */
    ClassPath?: string;
    /** 媒体文件的封面图片地址。 */
    CoverUrl?: string;
    /** 媒体文件的封装格式，例如 mp4、flv 等。 */
    Type?: string;
    /** 原始媒体文件的 URL 地址。 */
    MediaUrl?: string;
    /** 该媒体文件的来源信息。 */
    SourceInfo?: MediaSourceData | null;
    /** 媒体文件存储地区，如 ap-chongqing，参见[地域列表](https://cloud.tencent.com/document/product/266/9760)。 */
    StorageRegion?: string;
    /** 媒体文件的标签信息。 */
    TagSet?: string[];
    /** 直播录制文件的唯一标识。 */
    Vid?: string;
    /** 文件类型：Video: 视频文件Audio: 音频文件Image: 图片文件 */
    Category?: string;
    /** 文件状态：Normal：正常，Forbidden：封禁。 */
    Status?: string;
    /** 媒体文件的存储类别： STANDARD：标准存储。 STANDARD_IA：低频存储。 ARCHIVE：归档存储。 DEEP_ARCHIVE：深度归档存储。 */
    StorageClass?: string;
  }

  /** 媒体转推事件通知消息。 */
  interface MediaCastEvent {
    /** 媒体转推 ID。 */
    CastId?: string;
    /** 转推状态，取值有：Working ：运行中；Scheduled ：等待定时时间到达后启动；Stopped ：已经停止转推；Idle ：空闲。 */
    Status?: string;
  }

  /** 分类信息描述 */
  interface MediaClassInfo {
    /** 分类 ID。 */
    ClassId: number;
    /** 父类 ID，一级分类的父类 ID 为 -1。 */
    ParentId: number;
    /** 分类名称。 */
    Name: string;
    /** 分类级别，一级分类为 0，最大值为 3，即最多允许 4 级分类层次。 */
    Level: number;
    /** 当前分类的第一级子类 ID 集合。 */
    SubClassIdSet: number[];
    /** 分类名称（该字段已不推荐使用，建议使用新的分类名称字段 Name）。 */
    ClassName: string;
  }

  /** 音视频审核 Asr 文字的嫌疑片段 */
  interface MediaContentReviewAsrTextSegmentItem {
    /** 嫌疑片段起始的偏移时间，单位：秒。 */
    StartTimeOffset?: number;
    /** 嫌疑片段结束的偏移时间，单位：秒。 */
    EndTimeOffset?: number;
    /** 嫌疑片段置信度。 */
    Confidence?: number;
    /** 嫌疑片段音视频审核的结果建议，取值范围：pass。review。block。 */
    Suggestion?: string;
    /** 嫌疑关键词列表。 */
    KeywordSet?: string[];
  }

  /** 音视频审核 Ocr 文字的嫌疑片段 */
  interface MediaContentReviewOcrTextSegmentItem {
    /** 嫌疑片段起始的偏移时间，单位：秒。 */
    StartTimeOffset?: number;
    /** 嫌疑片段结束的偏移时间，单位：秒。 */
    EndTimeOffset?: number;
    /** 嫌疑片段置信度。 */
    Confidence?: number;
    /** 嫌疑片段音视频审核的结果建议，取值范围：pass。review。block。 */
    Suggestion?: string;
    /** 嫌疑关键词列表。 */
    KeywordSet?: string[];
    /** 嫌疑文字出现的区域坐标 (像素级)，[x1, y1, x2, y2]，即左上角坐标、右下角坐标。 */
    AreaCoordSet?: number[];
    /** 嫌疑图片 URL （图片不会永久存储，到达PicUrlExpireTime 时间点后图片将被删除）。 */
    Url?: string;
    /** 嫌疑图片 URL 失效时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    PicUrlExpireTime?: string;
  }

  /** 音视频审核涉及令人不适宜信息的嫌疑片段 */
  interface MediaContentReviewPoliticalSegmentItem {
    /** 嫌疑片段起始的偏移时间，单位：秒。 */
    StartTimeOffset?: number;
    /** 嫌疑片段结束的偏移时间，单位：秒。 */
    EndTimeOffset?: number;
    /** 嫌疑片段分数。 */
    Confidence?: number;
    /** 嫌疑片段涉及令人不适宜的信息的结果建议，取值范围：pass。review。block。 */
    Suggestion?: string;
    /** 涉及令人不适宜的信息、违规图标名字。 */
    Name?: string;
    /** 嫌疑片段涉及令人不适宜的信息的结果标签。音视频审核模板[画面涉及令人不适宜的信息的任务控制参数](https://cloud.tencent.com/document/api/266/31773)里 LabelSet 参数与此参数取值范围的对应关系：violation_photo：violation_photo：违规图标。politician：nation_politician：国家领导人；province_politician: 省部级领导人；bureau_politician：厅局级领导人；county_politician：县处级领导人；rural_politician：乡科级领导人；sensitive_politician：违规相关人物；foreign_politician：国外领导人。entertainment：sensitive_entertainment：违规娱乐人物。sport：sensitive_sport：违规体育人物。entrepreneur：sensitive_entrepreneur：违规商业人物。scholar：sensitive_scholar：违规教育学者。celebrity：sensitive_celebrity：违规知名人物；historical_celebrity：历史知名人物。military：sensitive_military：违规相关人物。 */
    Label?: string;
    /** 嫌疑图片 URL （图片不会永久存储，到达 PicUrlExpireTime 时间点后图片将被删除）。 */
    Url?: string;
    /** 涉及令人不适宜的信息、违规图标出现的区域坐标 (像素级)，[x1, y1, x2, y2]，即左上角坐标、右下角坐标。 */
    AreaCoordSet?: number[];
    /** 该字段已废弃，请使用 PicUrlExpireTime。 */
    PicUrlExpireTimeStamp?: number;
    /** 嫌疑图片 URL 失效时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    PicUrlExpireTime?: string;
  }

  /** 音视频审核涉及令人反感的信息、涉及令人不安全的信息的嫌疑片段 */
  interface MediaContentReviewSegmentItem {
    /** 嫌疑片段起始的偏移时间，单位：秒。 */
    StartTimeOffset?: number;
    /** 嫌疑片段结束的偏移时间，单位：秒。 */
    EndTimeOffset?: number;
    /** 嫌疑片段涉及令人反感的信息的分数。 */
    Confidence?: number;
    /** 嫌疑片段涉及令人反感的信息的结果标签。 */
    Label?: string;
    /** 嫌疑片段鉴别涉及令人反感的信息的结果建议，取值范围：pass。review。block。 */
    Suggestion?: string;
    /** 嫌疑图片 URL （图片不会永久存储，到达 PicUrlExpireTime 时间点后图片将被删除）。 */
    Url?: string;
    /** 该字段已废弃，请使用 PicUrlExpireTime。 */
    PicUrlExpireTimeStamp?: number;
    /** 嫌疑图片 URL 失效时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    PicUrlExpireTime?: string;
  }

  /** 指定删除点播视频时的删除内容 */
  interface MediaDeleteItem {
    /** 所指定的删除部分。如果未填写该字段则参数无效。可选值有：OriginalFiles（删除原文件，删除后无法发起转码、微信发布等任何视频处理操作）；TranscodeFiles（删除转码文件）；AdaptiveDynamicStreamingFiles（删除转自适应码流文件）；WechatPublishFiles（删除微信发布文件）；WechatMiniProgramPublishFiles（删除微信小程序发布文件）。注意： 取值为OriginalFiles时，文件上传时携带的封面文件会被删除；取值为TranscodeFiles时，媒体处理产生的封面文件会被删除。 */
    Type: string;
    /** 删除由Type参数指定的种类下的视频模板号，模板定义参见[转码模板](https://cloud.tencent.com/document/product/266/33478)。默认值为0，表示删除参数Type指定种类下所有的视频。 */
    Definition?: number;
  }

  /** 点播文件雪碧图信息 */
  interface MediaImageSpriteInfo {
    /** 特定规格的雪碧图信息集合，每个元素代表一套相同规格的雪碧图。 */
    ImageSpriteSet: MediaImageSpriteItem[];
  }

  /** 雪碧图信息 */
  interface MediaImageSpriteItem {
    /** 雪碧图规格，参见[雪碧图参数模板](https://cloud.tencent.com/document/product/266/33480)。 */
    Definition?: number;
    /** 雪碧图小图的高度。 */
    Height?: number;
    /** 雪碧图小图的宽度。 */
    Width?: number;
    /** 每一张雪碧图大图里小图的数量。 */
    TotalCount?: number;
    /** 每一张雪碧图大图的地址。 */
    ImageUrlSet?: string[];
    /** 雪碧图子图位置与时间关系的 WebVtt 文件地址。WebVtt 文件表明了各个雪碧图小图对应的时间点，以及在雪碧大图里的坐标位置，一般被播放器用于实现预览。 */
    WebVttUrl?: string;
  }

  /** 点播文件信息 */
  interface MediaInfo {
    /** 基础信息。包括视频名称、分类、播放地址、封面图片等。 */
    BasicInfo?: MediaBasicInfo | null;
    /** 元信息。包括大小、时长、视频流信息、音频流信息等。 */
    MetaData?: MediaMetaData | null;
    /** 转码结果信息。包括该视频转码生成的各种码率的视频的地址、规格、码率、分辨率等。 */
    TranscodeInfo?: MediaTranscodeInfo | null;
    /** 转动图结果信息。对视频转动图（如 gif）后，动图相关信息。 */
    AnimatedGraphicsInfo?: MediaAnimatedGraphicsInfo | null;
    /** 采样截图信息。对视频采样截图后，相关截图信息。 */
    SampleSnapshotInfo?: MediaSampleSnapshotInfo | null;
    /** 雪碧图信息。对视频截取雪碧图之后，雪碧的相关信息。 */
    ImageSpriteInfo?: MediaImageSpriteInfo | null;
    /** 指定时间点截图信息。对视频依照指定时间点截图后，各个截图的信息。 */
    SnapshotByTimeOffsetInfo?: MediaSnapshotByTimeOffsetInfo | null;
    /** 视频打点信息。对视频设置的各个打点信息。 */
    KeyFrameDescInfo?: MediaKeyFrameDescInfo | null;
    /** 转自适应码流信息。包括规格、加密类型、打包格式等相关信息。 */
    AdaptiveDynamicStreamingInfo?: MediaAdaptiveDynamicStreamingInfo | null;
    /** 小程序审核信息。 */
    MiniProgramReviewInfo?: MediaMiniProgramReviewInfo | null;
    /** 字幕信息。 */
    SubtitleInfo?: MediaSubtitleInfo | null;
    /** 媒体文件唯一标识 ID。 */
    FileId?: string;
    /** 审核信息。 */
    ReviewInfo?: FileReviewInfo | null;
  }

  /** 要处理的源视频信息，视频名称、视频自定义 ID。 */
  interface MediaInputInfo {
    /** 视频 URL。 */
    Url: string;
    /** 视频名称。 */
    Name?: string;
    /** 视频自定义 ID。 */
    Id?: string;
  }

  /** 视频打点信息 */
  interface MediaKeyFrameDescInfo {
    /** 视频打点信息数组。 */
    KeyFrameDescSet: MediaKeyFrameDescItem[];
  }

  /** 视频打点信息 */
  interface MediaKeyFrameDescItem {
    /** 打点的视频偏移时间，单位：秒。 */
    TimeOffset: number;
    /** 打点的内容字符串，限制 1-128 个字符。 */
    Content: string;
  }

  /** 点播媒体文件元信息 */
  interface MediaMetaData {
    /** 上传的媒体文件大小（视频为 HLS 时，大小是 m3u8 和 ts 文件大小的总和），单位：字节。 */
    Size?: number;
    /** 容器类型，例如 m4a，mp4 等。 */
    Container?: string;
    /** 视频流码率平均值与音频流码率平均值之和，单位：bps。 */
    Bitrate?: number;
    /** 视频流高度的最大值，单位：px。 */
    Height?: number;
    /** 视频流宽度的最大值，单位：px。 */
    Width?: number;
    /** 视频时长，单位：秒。 */
    Duration?: number;
    /** 视频拍摄时的选择角度，单位：度。 */
    Rotate?: number;
    /** 视频流信息。 */
    VideoStreamSet?: MediaVideoStreamItem[];
    /** 音频流信息。 */
    AudioStreamSet?: MediaAudioStreamItem[];
    /** 视频时长，单位：秒。 */
    VideoDuration?: number;
    /** 音频时长，单位：秒。 */
    AudioDuration?: number;
    /** 媒体文件的 Md5 值。注意：如需要获取媒体文件的 Md5，调用 DescribeFileAttributes 接口，待任务执行完成后获取。 */
    Md5?: string;
  }

  /** 小程序音视频审核概要元信息 */
  interface MediaMiniProgramReviewElem {
    /** 音视频审核类型。 Porn：画面涉及令人反感的信息，Porn.Ocr：文字涉及令人反感的信息，Porn.Asr：声音涉及令人反感的信息，Terrorism：画面涉及令人不安全的信息，Political：画面涉及令人不适宜的信息，Political.Ocr：文字涉及令人不适宜的信息，Political.Asr：声音涉及令人不适宜的信息。 */
    Type?: string;
    /** 音视频审核意见。pass：确认正常，block：确认违规，review：疑似违规。 */
    Suggestion?: string;
    /** 音视频审核结果置信度。取值 0~100。 */
    Confidence?: number;
  }

  /** 小程序音视频审核信息 */
  interface MediaMiniProgramReviewInfo {
    /** 音视频审核信息列表。 */
    MiniProgramReviewList: MediaMiniProgramReviewInfoItem[];
  }

  /** 小程序音视频审核信息单元 */
  interface MediaMiniProgramReviewInfoItem {
    /** 模板id。小程序视频发布的视频所对应的转码模板ID，为0代表原始视频。 */
    Definition?: number;
    /** 视频元信息。 */
    MetaData?: MediaMetaData;
    /** 小程序音视频审核视频播放地址。 */
    Url?: string;
    /** 小程序视频发布状态：Pass：成功。Rejected：未通过。 */
    ReviewResult?: string;
    /** 小程序音视频审核元素。 */
    ReviewSummary?: MediaMiniProgramReviewElem[];
  }

  /** 视频处理输出文件信息参数。 */
  interface MediaOutputInfo {
    /** 输出文件 Bucket 所属地域，如 ap-guangzhou 。 */
    Region?: string;
    /** 输出文件 Bucket 。 */
    Bucket?: string;
    /** 输出文件目录，目录名必须以 "/" 结尾。 */
    Dir?: string;
  }

  /** 对视频转自适应码流任务结果类型 */
  interface MediaProcessTaskAdaptiveDynamicStreamingResult {
    /** 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。 */
    Status?: string;
    /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/266/50368) 列表。 */
    ErrCodeExt?: string;
    /** 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。 */
    ErrCode?: number;
    /** 错误信息。 */
    Message?: string;
    /** 转自适应码流任务进度，取值范围 [0-100] 。 */
    Progress?: number;
    /** 对视频转自适应码流任务的输入。 */
    Input?: AdaptiveDynamicStreamingTaskInput;
    /** 对视频转自适应码流任务的输出。 */
    Output?: AdaptiveDynamicStreamingInfoItem;
    /** 转自适应码流任务开始执行的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    BeginProcessTime?: string;
    /** 转自适应码流任务执行完毕的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    FinishTime?: string;
  }

  /** 转动图任务结果类型 */
  interface MediaProcessTaskAnimatedGraphicResult {
    /** 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。 */
    Status?: string;
    /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/266/50368) 列表。 */
    ErrCodeExt?: string;
    /** 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。 */
    ErrCode?: number;
    /** 错误信息。 */
    Message?: string;
    /** 转动图任务的输入。 */
    Input?: AnimatedGraphicTaskInput;
    /** 转动图任务的输出。 */
    Output?: MediaAnimatedGraphicsItem | null;
    /** 转动图任务进度，取值范围 [0-100] 。 */
    Progress?: number;
    /** 转动图任务开始执行的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    BeginProcessTime?: string;
    /** 转动图任务执行完毕的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    FinishTime?: string;
  }

  /** 对视频截图做封面任务结果类型 */
  interface MediaProcessTaskCoverBySnapshotResult {
    /** 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。 */
    Status?: string;
    /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/266/50368) 列表。 */
    ErrCodeExt?: string;
    /** 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。 */
    ErrCode?: number;
    /** 错误信息。 */
    Message?: string;
    /** 对视频截图做封面任务的输入。 */
    Input?: CoverBySnapshotTaskInput;
    /** 对视频截图做封面任务的输出。 */
    Output?: CoverBySnapshotTaskOutput;
    /** 对视频截图做封面任务进度，取值范围 [0-100] 。 */
    Progress?: number;
    /** 截图做封面任务开始执行的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    BeginProcessTime?: string;
    /** 截图做封面任务执行完毕的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    FinishTime?: string;
  }

  /** 对视频截雪碧图任务结果类型 */
  interface MediaProcessTaskImageSpriteResult {
    /** 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。 */
    Status?: string;
    /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/266/50368) 列表。 */
    ErrCodeExt?: string;
    /** 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。 */
    ErrCode?: number;
    /** 错误信息。 */
    Message?: string;
    /** 对视频截雪碧图任务的输入。 */
    Input?: ImageSpriteTaskInput;
    /** 对视频截雪碧图任务的输出。 */
    Output?: MediaImageSpriteItem | null;
    /** 对视频截雪碧图任务进度，取值范围 [0-100] 。 */
    Progress?: number;
    /** 截雪碧图任务开始执行的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    BeginProcessTime?: string;
    /** 截雪碧图任务执行完毕的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    FinishTime?: string;
  }

  /** 视频处理任务类型 */
  interface MediaProcessTaskInput {
    /** 视频转码任务列表。 */
    TranscodeTaskSet?: TranscodeTaskInput[];
    /** 视频转动图任务列表。 */
    AnimatedGraphicTaskSet?: AnimatedGraphicTaskInput[];
    /** 对视频按时间点截图任务列表。 */
    SnapshotByTimeOffsetTaskSet?: SnapshotByTimeOffsetTaskInput[];
    /** 对视频采样截图任务列表。 */
    SampleSnapshotTaskSet?: SampleSnapshotTaskInput[];
    /** 对视频截雪碧图任务列表。 */
    ImageSpriteTaskSet?: ImageSpriteTaskInput[];
    /** 对视频截图做封面任务列表。 */
    CoverBySnapshotTaskSet?: CoverBySnapshotTaskInput[];
    /** 对视频转自适应码流任务列表。 */
    AdaptiveDynamicStreamingTaskSet?: AdaptiveDynamicStreamingTaskInput[];
  }

  /** 任务查询结果类型 */
  interface MediaProcessTaskResult {
    /** 任务的类型，可以取的值有：Transcode：转码AnimatedGraphics：转动图SnapshotByTimeOffset：时间点截图SampleSnapshot：采样截图ImageSprites：雪碧图CoverBySnapshot：截图做封面AdaptiveDynamicStreaming：自适应码流 */
    Type?: string;
    /** 视频转码任务的查询结果，当任务类型为 Transcode 时有效。 */
    TranscodeTask?: MediaProcessTaskTranscodeResult | null;
    /** 视频转动图任务的查询结果，当任务类型为 AnimatedGraphics 时有效。 */
    AnimatedGraphicTask?: MediaProcessTaskAnimatedGraphicResult | null;
    /** 对视频按时间点截图任务的查询结果，当任务类型为 SnapshotByTimeOffset 时有效。 */
    SnapshotByTimeOffsetTask?: MediaProcessTaskSnapshotByTimeOffsetResult | null;
    /** 对视频采样截图任务的查询结果，当任务类型为 SampleSnapshot 时有效。 */
    SampleSnapshotTask?: MediaProcessTaskSampleSnapshotResult | null;
    /** 对视频截雪碧图任务的查询结果，当任务类型为 ImageSprite 时有效。 */
    ImageSpriteTask?: MediaProcessTaskImageSpriteResult | null;
    /** 对视频截图做封面任务的查询结果，当任务类型为 CoverBySnapshot 时有效。 */
    CoverBySnapshotTask?: MediaProcessTaskCoverBySnapshotResult | null;
    /** 对视频转自适应码流任务的查询结果，当任务类型为 AdaptiveDynamicStreaming 时有效。 */
    AdaptiveDynamicStreamingTask?: MediaProcessTaskAdaptiveDynamicStreamingResult | null;
  }

  /** 对视频做采样截图任务结果类型 */
  interface MediaProcessTaskSampleSnapshotResult {
    /** 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。 */
    Status?: string;
    /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/266/50368) 列表。 */
    ErrCodeExt?: string;
    /** 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。 */
    ErrCode?: number;
    /** 错误信息。 */
    Message?: string;
    /** 对视频做采样截图任务输入。 */
    Input?: SampleSnapshotTaskInput;
    /** 对视频做采样截图任务输出。 */
    Output?: MediaSampleSnapshotItem | null;
    /** 对视频做采样截图任务进度，取值范围 [0-100] 。 */
    Progress?: number;
    /** 采样截图任务开始执行的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    BeginProcessTime?: string;
    /** 采样截图任务执行完毕的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    FinishTime?: string;
  }

  /** 对视频按指定时间点截图任务结果类型 */
  interface MediaProcessTaskSnapshotByTimeOffsetResult {
    /** 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。 */
    Status?: string;
    /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/266/50368) 列表。 */
    ErrCodeExt?: string;
    /** 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。 */
    ErrCode?: number;
    /** 错误信息。 */
    Message?: string;
    /** 对视频按指定时间点截图任务输入。 */
    Input?: SnapshotByTimeOffsetTaskInput;
    /** 对视频按指定时间点截图任务输出。 */
    Output?: MediaSnapshotByTimeOffsetItem | null;
    /** 对视频按指定时间点截图任务进度，取值范围 [0-100] 。 */
    Progress?: number;
    /** 时间点截图任务开始执行的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    BeginProcessTime?: string;
    /** 时间点截图任务执行完毕的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    FinishTime?: string;
  }

  /** 转码任务结果类型 */
  interface MediaProcessTaskTranscodeResult {
    /** 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。 */
    Status?: string;
    /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/266/50368) 列表。 */
    ErrCodeExt?: string;
    /** 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。 */
    ErrCode?: number;
    /** 错误信息。 */
    Message?: string;
    /** 转码任务的输入。 */
    Input?: TranscodeTaskInput;
    /** 转码任务的输出。 */
    Output?: MediaTranscodeItem | null;
    /** 转码进度，取值范围 [0-100] 。 */
    Progress?: number;
    /** 转码任务开始执行的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    BeginProcessTime?: string;
    /** 转码任务执行完毕的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    FinishTime?: string;
  }

  /** 点播文件采样截图信息 */
  interface MediaSampleSnapshotInfo {
    /** 特定规格的采样截图信息集合，每个元素代表一套相同规格的采样截图。 */
    SampleSnapshotSet: MediaSampleSnapshotItem[];
  }

  /** 采样截图信息 */
  interface MediaSampleSnapshotItem {
    /** 采样截图规格 ID，参见[采样截图参数模板](https://cloud.tencent.com/document/product/266/33480)。 */
    Definition?: number;
    /** 采样方式，取值范围：Percent：根据百分比间隔采样。Time：根据时间间隔采样。 */
    SampleType?: string;
    /** 采样间隔当 SampleType 为 Percent 时，该值表示多少百分比一张图。当 SampleType 为 Time 时，该值表示多少时间间隔一张图，单位秒， 第一张图均为视频首帧。 */
    Interval?: number;
    /** 生成的截图 url 列表。 */
    ImageUrlSet?: string[];
    /** 截图如果被打上了水印，被打水印的模板 ID 列表。 */
    WaterMarkDefinition?: number[];
  }

  /** 点播文件指定时间点截图信息 */
  interface MediaSnapshotByTimeOffsetInfo {
    /** 特定规格的指定时间点截图信息集合。目前每种规格只能有一套截图。 */
    SnapshotByTimeOffsetSet: MediaSnapshotByTimeOffsetItem[];
  }

  /** 点播文件指定时间点截图信息 */
  interface MediaSnapshotByTimeOffsetItem {
    /** 指定时间点截图规格，参见[指定时间点截图参数模板](https://cloud.tencent.com/document/product/266/33480)。 */
    Definition?: number;
    /** 同一规格的截图信息集合，每个元素代表一张截图。 */
    PicInfoSet?: MediaSnapshotByTimePicInfoItem[];
  }

  /** 指定时间点截图信息 */
  interface MediaSnapshotByTimePicInfoItem {
    /** 该张截图对应视频文件中的时间偏移，单位为毫秒。 */
    TimeOffset?: number;
    /** 该张截图的 URL 地址。 */
    Url?: string;
    /** 截图如果被打上了水印，被打水印的模板 ID 列表。 */
    WaterMarkDefinition?: number[];
  }

  /** 来源文件信息 */
  interface MediaSourceData {
    /** 媒体文件的来源类别：Record：来自录制。如直播录制、直播时移录制等。Upload：来自上传。如拉取上传、服务端上传、客户端 UGC 上传等。VideoProcessing：来自视频处理。如视频拼接、视频剪辑等。TrtcRecord：来自TRTC 伴生录制。WebPageRecord：来自全景录制。Unknown：未知来源。 */
    SourceType?: string;
    /** 用户创建文件时透传的字段。 */
    SourceContext?: string;
    /** 直播录制信息，当文件来源为 Record 时有效。 */
    LiveRecordInfo?: LiveRecordInfo | null;
    /** TRTC 伴生录制信息，当文件来源为 TrtcRecord 时有效。 */
    TrtcRecordInfo?: TrtcRecordInfo | null;
    /** 全景录制信息，当文件来源为 WebPageRecord 时有效。 */
    WebPageRecordInfo?: WebPageRecordInfo | null;
  }

  /** 转自适应码流子流信息。 */
  interface MediaSubStreamInfoItem {
    /** 子流类型，取值范围：audio：纯音频；video：视频（可能包含音频流）。 */
    Type?: string;
    /** 当子流为视频流时，视频画面宽度，单位：px。 */
    Width?: number;
    /** 当子流为视频流时，视频画面高度，单位：px。 */
    Height?: number;
    /** 子流媒体文件大小，单位：Byte。注意：在 2023-02-09T16:00:00Z 前处理生成的自适应码流文件此字段为0。 */
    Size?: number;
  }

  /** 字幕信息。 */
  interface MediaSubtitleInfo {
    /** 字幕信息列表。 */
    SubtitleSet: MediaSubtitleItem[];
  }

  /** 字幕信息输入参数。 */
  interface MediaSubtitleInput {
    /** 字幕名字，长度限制：64 个字符。 */
    Name: string;
    /** 字幕语言。常见的取值如下：zh：中文；en：英文；ja：日文；ko：韩文；vi：越南语；ms：马来语；th：泰语；pt：葡萄牙语；tr：土耳其语；ar：阿拉伯语；es：西班牙语；hi：印地语；fr：法语。其他取值参考 [RFC5646](https://tools.ietf.org/html/rfc5646) */
    Language: string;
    /** 字幕格式。取值范围如下：vtt */
    Format: string;
    /** 字幕内容，进行 [Base64](https://tools.ietf.org/html/rfc4648) 编码后的字符串。 */
    Content: string;
    /** 字幕的唯一标识。长度不能超过16个字符，可以使用大小写字母、数字、下划线（_）或横杠（-）。不能与媒体文件中现有字幕的唯一标识重复。 */
    Id?: string;
  }

  /** 字幕信息。 */
  interface MediaSubtitleItem {
    /** 字幕的唯一标识。 */
    Id?: string;
    /** 字幕名字。 */
    Name?: string;
    /** 字幕语言。常见的取值如下：zh：中文；en：英文；ja：日文；ko：韩文；vi：越南语；ms：马来语；th：泰语；pt：葡萄牙语；tr：土耳其语；ar：阿拉伯语；es：西班牙语；hi：印地语；fr：法语。其他取值参考 [RFC5646](https://tools.ietf.org/html/rfc5646) */
    Language?: string;
    /** 字幕格式。取值范围如下：vtt */
    Format?: string;
    /** 字幕 URL。 */
    Url?: string;
    /** 字幕来源，取值范围：UserUploaded：用户上传；AIRecognition：AI 识别，通过语音识别或语音翻译生成。 */
    Source?: string;
  }

  /** 轨道信息 */
  interface MediaTrack {
    /** 轨道类型，取值有：Video ：视频轨道。视频轨道由以下 Item 组成：VideoTrackItemMediaTransitionItem EmptyTrackItem Audio ：音频轨道。音频轨道由以下 Item 组成：AudioTrackItemMediaTransitionItemEmptyTrackItemSticker ：贴图轨道。贴图轨道以下 Item 组成： StickerTrackItemEmptyTrackItem */
    Type: string;
    /** 轨道上的媒体片段列表。 */
    TrackItems: MediaTrackItem[];
  }

  /** 媒体轨道的片段信息 */
  interface MediaTrackItem {
    /** 片段类型。取值有：Video：视频片段。Audio：音频片段。Sticker：贴图片段。Transition：转场。Empty：空白片段。 */
    Type: string;
    /** 视频片段，当 Type = Video 时有效。 */
    VideoItem?: VideoTrackItem | null;
    /** 音频片段，当 Type = Audio 时有效。 */
    AudioItem?: AudioTrackItem | null;
    /** 贴图片段，当 Type = Sticker 时有效。 */
    StickerItem?: StickerTrackItem | null;
    /** 转场，当 Type = Transition 时有效。 */
    TransitionItem?: MediaTransitionItem | null;
    /** 空白片段，当 Type = Empty 时有效。空片段用于时间轴的占位。如需要两个音频片段之间有一段时间的静音，可以用 EmptyTrackItem 来进行占位。使用 EmptyTrackItem 进行占位，来定位某个Item。 */
    EmptyItem?: EmptyTrackItem | null;
  }

  /** 点播文件转码信息 */
  interface MediaTranscodeInfo {
    /** 各规格的转码信息集合，每个元素代表一个规格的转码结果。 */
    TranscodeSet: MediaTranscodeItem[];
  }

  /** 转码信息 */
  interface MediaTranscodeItem {
    /** 转码后的视频文件地址。 */
    Url?: string;
    /** 转码规格 ID，参见[转码参数模板](https://cloud.tencent.com/document/product/266/33476)。注意：取值 0 表示原始文件。 */
    Definition?: number;
    /** 视频流码率平均值与音频流码率平均值之和， 单位：bps。 */
    Bitrate?: number;
    /** 视频流高度的最大值，单位：px。 */
    Height?: number;
    /** 视频流宽度的最大值，单位：px。 */
    Width?: number;
    /** 媒体文件总大小，单位：字节。当媒体文件为 HLS 时，大小是 m3u8 和 ts 文件大小的总和。 */
    Size?: number;
    /** 视频时长，单位：秒。 */
    Duration?: number;
    /** 视频的 md5 值。 */
    Md5?: string;
    /** 容器类型，例如 m4a，mp4 等。 */
    Container?: string;
    /** 视频流信息。 */
    VideoStreamSet?: MediaVideoStreamItem[];
    /** 音频流信息。 */
    AudioStreamSet?: MediaAudioStreamItem[];
    /** 数字水印类型。可选值：Trace 表示经过溯源水印处理；CopyRight 表示经过版权水印处理；None 表示没有经过数字水印处理。 */
    DigitalWatermarkType?: string;
    /** 版权信息。 */
    CopyRightWatermarkText?: string;
  }

  /** 转场信息 */
  interface MediaTransitionItem {
    /** 转场持续时间，单位为秒。进行转场处理的两个媒体片段，第二个片段在轨道上的起始时间会自动进行调整，设置为前面一个片段的结束时间减去转场的持续时间。 */
    Duration: number;
    /** 转场操作列表。图像转场操作和音频转场操作各自最多支持一个。 */
    Transitions?: TransitionOpertion[];
    /** 转场操作列表。图像转场操作和音频转场操作各自最多支持一个。 */
    MediaTransitions?: TransitionOperation[];
  }

  /** 点播文件视频流信息 */
  interface MediaVideoStreamItem {
    /** 视频流的码率，单位：bps。 */
    Bitrate?: number;
    /** 视频流的高度，单位：px。 */
    Height?: number;
    /** 视频流的宽度，单位：px。 */
    Width?: number;
    /** 视频流的编码格式，例如 h264。 */
    Codec?: string;
    /** 帧率，单位：hz。 */
    Fps?: number;
    /** 编码标签，仅当 Codec 为 hevc 时有效。 */
    CodecTag?: string;
    /** 画面动态范围信息。注意：在 2023-01-10T00:00:00Z 后处理的转码文件，此字段有效。 */
    DynamicRangeInfo?: DynamicRangeInfo;
  }

  /** 视频画面马赛克检测的控制参数。 */
  interface MosaicConfigureInfo {
    /** 视频画面马赛克检测开关，可选值：ON：开启；OFF：关闭。 */
    Switch: string;
  }

  /** 视频画面马赛克检测的控制参数。 */
  interface MosaicConfigureInfoForUpdate {
    /** 视频画面马赛克检测开关，可选值：ON：开启；OFF：关闭。 */
    Switch?: string;
  }

  /** 视频处理任务中的马赛克参数类型 */
  interface MosaicInput {
    /** 原点位置，目前仅支持：TopLeft：表示坐标原点位于视频图像左上角，马赛克原点为图片或文字的左上角。默认值：TopLeft。 */
    CoordinateOrigin?: string;
    /** 马赛克原点距离视频图像坐标原点的水平位置。支持 %、px 两种格式：当字符串以 % 结尾，表示马赛克 XPos 为视频宽度指定百分比，如 10% 表示 XPos 为视频宽度的 10%；当字符串以 px 结尾，表示马赛克 XPos 为指定像素，如 100px 表示 XPos 为 100 像素。默认值：0px。 */
    XPos?: string;
    /** 马赛克原点距离视频图像坐标原点的垂直位置。支持 %、px 两种格式：当字符串以 % 结尾，表示马赛克 YPos 为视频高度指定百分比，如 10% 表示 YPos 为视频高度的 10%；当字符串以 px 结尾，表示马赛克 YPos 为指定像素，如 100px 表示 YPos 为 100 像素。默认值：0px。 */
    YPos?: string;
    /** 马赛克的宽度。支持 %、px 两种格式：当字符串以 % 结尾，表示马赛克 Width 为视频宽度的百分比大小，如 10% 表示 Width 为视频宽度的 10%；当字符串以 px 结尾，表示马赛克 Width 单位为像素，如 100px 表示 Width 为 100 像素。默认值：10%。 */
    Width?: string;
    /** 马赛克的高度。支持 %、px 两种格式：当字符串以 % 结尾，表示马赛克 Height 为视频高度的百分比大小，如 10% 表示 Height 为视频高度的 10%；当字符串以 px 结尾，表示马赛克 Height 单位为像素，如 100px 表示 Height 为 100 像素。默认值：10%。 */
    Height?: string;
    /** 马赛克的起始时间偏移，单位：秒。不填或填0，表示马赛克从画面出现时开始显现。不填或填0，表示马赛克从画面开始就出现；当数值大于0时（假设为 n），表示马赛克从画面开始的第 n 秒出现；当数值小于0时（假设为 -n），表示马赛克从离画面结束 n 秒前开始出现。 */
    StartTimeOffset?: number;
    /** 马赛克的结束时间偏移，单位：秒。不填或填0，表示马赛克持续到画面结束；当数值大于0时（假设为 n），表示马赛克持续到第 n 秒时消失；当数值小于0时（假设为 -n），表示马赛克持续到离画面结束 n 秒前消失。 */
    EndTimeOffset?: number;
  }

  /** 视频画面噪点检测的控制参数。 */
  interface NoiseConfigureInfo {
    /** 视频画面噪点检测开关，可选值：ON：开启；OFF：关闭。 */
    Switch: string;
  }

  /** 视频画面噪点检测的控制参数。 */
  interface NoiseConfigureInfoForUpdate {
    /** 视频画面噪点检测开关，可选值：ON：开启；OFF：关闭。 */
    Switch?: string;
  }

  /** 物体识别任务控制参数 */
  interface ObjectConfigureInfo {
    /** 物体识别任务开关，可选值：ON：开启智能物体识别任务；OFF：关闭智能物体识别任务。 */
    Switch: string;
    /** 物体库选择，可选值：Default：使用默认物体库；UserDefine：使用用户自定义物体库。All：同时使用默认物体库和用户自定义物体库。默认值： All，同时使用默认物体库和用户自定义物体库。 */
    ObjectLibrary?: string;
  }

  /** 物体识别任务控制参数 */
  interface ObjectConfigureInfoForUpdate {
    /** 物体识别任务开关，可选值：ON：开启智能物体识别任务；OFF：关闭智能物体识别任务。 */
    Switch?: string;
    /** 物体库选择，可选值：Default：使用默认物体库；UserDefine：使用用户自定义物体库。All：同时使用默认物体库和用户自定义物体库。 */
    ObjectLibrary?: string;
  }

  /** 文本全文本识别任务控制参数 */
  interface OcrFullTextConfigureInfo {
    /** 文本全文识别任务开关，可选值：ON：开启智能文本全文识别任务；OFF：关闭智能文本全文识别任务。 */
    Switch: string;
  }

  /** 文本全文本识别任务控制参数 */
  interface OcrFullTextConfigureInfoForUpdate {
    /** 文本全文识别任务开关，可选值：ON：开启智能文本全文识别任务；OFF：关闭智能文本全文识别任务。 */
    Switch?: string;
  }

  /** 文本关键词识别控制参数。 */
  interface OcrWordsConfigureInfo {
    /** 文本关键词识别任务开关，可选值：ON：开启文本关键词识别任务；OFF：关闭文本关键词识别任务。 */
    Switch: string;
    /** 关键词过滤标签，指定需要返回的关键词的标签。如果未填或者为空，则全部结果都返回。标签个数最多 10 个，每个标签长度最多 16 个字符。 */
    LabelSet?: string[];
  }

  /** 文本关键词识别控制参数。 */
  interface OcrWordsConfigureInfoForUpdate {
    /** 文本关键词识别任务开关，可选值：ON：开启文本关键词识别任务；OFF：关闭文本关键词识别任务。 */
    Switch?: string;
    /** 关键词过滤标签，指定需要返回的关键词的标签。如果未填或者为空，则全部结果都返回。标签个数最多 10 个，每个标签长度最多 16 个字符。 */
    LabelSet?: string[];
  }

  /** 输出的音频流信息 */
  interface OutputAudioStream {
    /** 音频流的编码格式，可选值：libfdk_aac：适合 mp4 文件。默认值：libfdk_aac。 */
    Codec?: string;
    /** 音频流的采样率，可选值：16000320004410048000单位：Hz。默认值：16000。 */
    SampleRate?: number;
    /** 音频声道数，可选值：1：单声道 。2：双声道默认值：2。 */
    AudioChannel?: number;
    /** 音频流的码率，取值范围：0 和 [26, 256]，单位：kbps。当取值为 0，将自动设置音频码率。 */
    Bitrate?: number;
  }

  /** 输出的视频流信息 */
  interface OutputVideoStream {
    /** 视频流的编码格式，可选值：libx264：H.264 编码 默认值：libx264。 */
    Codec?: string;
    /** 视频帧率，取值范围：[0, 60]，单位：Hz。默认值：0，表示和第一个视频轨的第一个视频片段的视频帧率一致。 */
    Fps?: number;
  }

  /** 剪辑固化任务信息。 */
  interface PersistenceCompleteTask {
    /** 固化生成的媒体 ID。 */
    FileId?: string;
    /** 剪辑固化的来源，有以下三种。SimpleHlsClip：来自简单 HLS 剪辑；FastEditMedia：来自快速媒体编辑；LiveRealTimeClip:来自直播即时剪辑。 */
    PersistenceSource?: string;
  }

  /** 播放统计文件信息 */
  interface PlayStatFileInfo {
    /** 播放统计数据所属日期，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    Date?: string;
    /** 播放统计文件的 URL 地址。播放统计文件内容为： date：播放日期。 file_id：视频文件 ID。 ip_count：去重后的客户端 IP 数。 flux：播放流量，单位：字节。 play_times：总的播放次数。 pc_play_times：PC 端播放次数。 mobile_play_times：移动端播放次数。 iphone_play_times：iPhone 端播放次数。 android_play_times：Android 端播放次数。 host_name	域名。 */
    Url?: string;
  }

  /** 播放统计信息。 */
  interface PlayStatInfo {
    /** 数据所在时间区间的开始时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。如：当时间粒度为天，2018-12-01T00:00:00+08:00，表示2018年12月1日（含）到2018年12月2日（不含）区间。表示小时级别数据时，2019-08-22T00:00:00+08:00表示2019-08-22日0点到1点的统计数据。表示天级别数据时，2019-08-22T00:00:00+08:00表示2019-08-22日的统计数据。 */
    Time?: string;
    /** 媒体文件ID。 */
    FileId?: string;
    /** 播放次数。 */
    PlayTimes?: number;
    /** 播放流量，单位：字节。 */
    Traffic?: number;
  }

  /** 播放器配置详情 */
  interface PlayerConfig {
    /** 播放器配置名字。 */
    Name?: string;
    /** 播放器配置类型，取值范围：Preset：系统预置配置；Custom：用户自定义配置。 */
    Type?: string;
    /** 播放的音视频类型，可选值有：AdaptiveDynamicStream：自适应码流输出；Transcode：转码输出；Original：原始音视频。 */
    AudioVideoType?: string;
    /** 播放 DRM 保护的自适应码流开关：ON：开启，表示仅播放 DRM 保护的自适应码流输出；OFF：关闭，表示播放未加密的自适应码流输出。 */
    DrmSwitch?: string;
    /** 允许输出的未加密的自适应码流模板 ID。 */
    AdaptiveDynamicStreamingDefinition?: number;
    /** 允许输出的 DRM 自适应码流模板内容。 */
    DrmStreamingsInfo?: DrmStreamingsInfo | null;
    /** 允许输出的转码模板 ID。 */
    TranscodeDefinition?: number;
    /** 允许输出的雪碧图模板 ID。 */
    ImageSpriteDefinition?: number;
    /** 播放器对不于不同分辨率的子流展示名字。 */
    ResolutionNameSet?: ResolutionNameInfo[];
    /** 播放器配置创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    CreateTime?: string;
    /** 播放器配置最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    UpdateTime?: string;
    /** 播放时使用的域名。值为 Default，表示使用[默认分发配置](https://cloud.tencent.com/document/product/266/33373)中的域名。 */
    Domain?: string;
    /** 播放时使用的 Scheme。取值范围：Default：使用[默认分发配置](https://cloud.tencent.com/document/product/266/33373)中的 Scheme；HTTP；HTTPS。 */
    Scheme?: string;
    /** 模板描述信息。 */
    Comment?: string;
  }

  /** 语音鉴别涉及令人不适宜的信息的任务控制参数 */
  interface PoliticalAsrReviewTemplateInfo {
    /** 语音鉴别涉及令人不适宜的信息的任务开关，可选值：ON：开启语音鉴别涉及令人不适宜的信息的任务；OFF：关闭语音鉴别的涉及令人不适宜的信息的任务。 */
    Switch: string;
    /** 判定需人工复核是否违规的分数阈值，当音视频审核达到该分数以上，认为需人工复核，不填默认为 75 分。取值范围：0~100。 */
    ReviewConfidence?: number;
    /** 判定涉嫌违规的分数阈值，当音视频审核达到该分数以上，认为涉嫌违规，不填默认为 100 分。取值范围：0~100。 */
    BlockConfidence?: number;
  }

  /** 语音鉴别涉及令人不适宜的信息的任务控制参数。 */
  interface PoliticalAsrReviewTemplateInfoForUpdate {
    /** 语音鉴别涉及令人不适宜的信息的任务开关，可选值：ON：开启语音鉴别涉及令人不适宜的信息的任务；OFF：关闭语音鉴别涉及令人不适宜的信息的任务。 */
    Switch?: string;
    /** 判定涉嫌违规的分数阈值，当音视频审核达到该分数以上，认为涉嫌违规。取值范围：0~100。 */
    BlockConfidence?: number;
    /** 判定需人工复核是否违规的分数阈值，当音视频审核达到该分数以上，认为需人工复核。取值范围：0~100。 */
    ReviewConfidence?: number;
  }

  /** 鉴别涉及令人不适宜的信息的任务控制参数 */
  interface PoliticalConfigureInfo {
    /** 画面鉴别涉及令人不适宜的信息的控制参数。 */
    ImgReviewInfo?: PoliticalImgReviewTemplateInfo;
    /** 语音鉴别涉及令人不适宜的信息的控制参数。 */
    AsrReviewInfo?: PoliticalAsrReviewTemplateInfo;
    /** 文本鉴别涉及令人不适宜的信息的控制参数。 */
    OcrReviewInfo?: PoliticalOcrReviewTemplateInfo;
  }

  /** 鉴别涉及令人不适宜的信息的控制参数。 */
  interface PoliticalConfigureInfoForUpdate {
    /** 画面鉴别涉及令人不适宜的信息的控制参数。 */
    ImgReviewInfo?: PoliticalImgReviewTemplateInfoForUpdate;
    /** 语音鉴别涉及令人不适宜的信息的控制参数。 */
    AsrReviewInfo?: PoliticalAsrReviewTemplateInfoForUpdate;
    /** 文本鉴别涉及令人不适宜的信息的控制参数。 */
    OcrReviewInfo?: PoliticalOcrReviewTemplateInfoForUpdate;
  }

  /** 图片画面审核涉及令人不适宜信息的任务结果类型 */
  interface PoliticalImageResult {
    /** 鉴别涉及令人不适宜信息的评分，分值为0到100。 */
    Confidence?: number;
    /** 鉴别涉及令人不适宜信息的结果建议，取值范围：pass；review；block。 */
    Suggestion?: string;
    /** 涉及令人不适宜的信息、违规图标名字。 */
    Name?: string;
    /** 涉及令人不适宜的信息、违规图标出现的区域坐标 (像素级)，[x1, y1, x2, y2]，即左上角坐标、右下角坐标。 */
    AreaCoordSet?: number[];
  }

  /** 画面鉴别涉及令人不适宜的信息的任务控制参数 */
  interface PoliticalImgReviewTemplateInfo {
    /** 画面鉴别涉及令人不适宜的信息的任务开关，可选值：ON：开启画面鉴别涉及令人不适宜的信息的任务；OFF：关闭画面鉴别涉及令人不适宜的信息的任务。 */
    Switch: string;
    /** 画面鉴别涉及令人不适宜的信息的过滤标签，审核结果包含选择的标签则返回结果，如果过滤标签为空，则审核结果全部返回，可选值为：violation_photo：违规图标；politician：相关人物；entertainment：娱乐人物；sport：体育人物；entrepreneur：商业人物；scholar：教育学者；celebrity：知名人物；military：相关人物。 */
    LabelSet?: string[];
    /** 判定涉嫌违规的分数阈值，当审核达到该分数以上，认为涉嫌违规，不填默认为 97 分。取值范围：0~100。 */
    BlockConfidence?: number;
    /** 判定需人工复核是否违规的分数阈值，当审核达到该分数以上，认为需人工复核，不填默认为 95 分。取值范围：0~100。 */
    ReviewConfidence?: number;
  }

  /** 画面鉴别涉及令人不适宜的信息的任务控制参数。 */
  interface PoliticalImgReviewTemplateInfoForUpdate {
    /** 画面鉴别涉及令人不适宜的信息的任务开关，可选值：ON：开启画面鉴别涉及令人不适宜的信息的任务；OFF：关闭画面鉴别涉及令人不适宜的信息的任务。 */
    Switch?: string;
    /** 画面鉴别涉及令人不适宜的信息的过滤标签，审核结果包含选择的标签则返回结果，如果过滤标签为空，则审核结果全部返回，可选值为：violation_photo：违规图标；politician：相关人物；entertainment：娱乐人物；sport：体育人物；entrepreneur：商业人物；scholar：教育学者；celebrity：知名人物；military：相关人物。 */
    LabelSet?: string[];
    /** 判定涉嫌违规的分数阈值，当审核达到该分数以上，认为涉嫌违规。取值范围：0~100。 */
    BlockConfidence?: number;
    /** 判定需人工复核是否违规的分数阈值，当审核达到该分数以上，认为需人工复核。取值范围：0~100。 */
    ReviewConfidence?: number;
  }

  /** 文本鉴别涉及令人不适宜的信息的任务控制参数 */
  interface PoliticalOcrReviewTemplateInfo {
    /** 文本鉴别涉及令人不适宜的信息的任务开关，可选值：ON：开启文本鉴别涉及令人不适宜的信息的任务；OFF：关闭文本鉴别涉及令人不适宜的信息的任务。 */
    Switch: string;
    /** 判定涉嫌违规的分数阈值，当审核达到该分数以上，认为涉嫌违规，不填默认为 100 分。取值范围：0~100。 */
    BlockConfidence?: number;
    /** 判定需人工复核是否违规的分数阈值，当审核达到该分数以上，认为需人工复核，不填默认为 75 分。取值范围：0~100。 */
    ReviewConfidence?: number;
  }

  /** 文本鉴别涉及令人不适宜的信息的任务控制参数。 */
  interface PoliticalOcrReviewTemplateInfoForUpdate {
    /** 文本鉴别涉及令人不适宜的信息的任务开关，可选值：ON：开启文本鉴别涉及令人不适宜的信息的任务；OFF：关闭文本鉴别涉及令人不适宜的信息的任务。 */
    Switch?: string;
    /** 判定涉嫌违规的分数阈值，当审核达到该分数以上，认为涉嫌违规。取值范围：0~100。 */
    BlockConfidence?: number;
    /** 判定需人工复核是否违规的分数阈值，当审核达到该分数以上，认为需人工复核。取值范围：0~100。 */
    ReviewConfidence?: number;
  }

  /** 语音鉴别涉及令人反感的信息的任务控制参数 */
  interface PornAsrReviewTemplateInfo {
    /** 语音鉴别涉及令人反感的信息的任务开关，可选值：ON：开启语音鉴别涉及令人反感的信息的任务；OFF：关闭语音鉴别涉及令人反感的信息的任务。 */
    Switch: string;
    /** 判定涉嫌违规的分数阈值，当审核达到该分数以上，认为涉嫌违规，不填默认为 100 分。取值范围：0~100。 */
    BlockConfidence?: number;
    /** 判定需人工复核是否违规的分数阈值，当审核达到该分数以上，认为需人工复核，不填默认为 75 分。取值范围：0~100。 */
    ReviewConfidence?: number;
  }

  /** 语音鉴别涉及令人反感的信息的任务控制参数。 */
  interface PornAsrReviewTemplateInfoForUpdate {
    /** 语音鉴别涉及令人反感的信息的任务开关，可选值：ON：开启语音鉴别涉及令人反感的信息的任务；OFF：关闭语音鉴别涉及令人反感的信息的任务。 */
    Switch?: string;
    /** 判定涉嫌违规的分数阈值，当审核达到该分数以上，认为涉嫌违规。取值范围：0~100。 */
    BlockConfidence?: number;
    /** 判定需人工复核是否违规的分数阈值，当审核达到该分数以上，认为需人工复核。取值范围：0~100。 */
    ReviewConfidence?: number;
  }

  /** 鉴别涉及令人反感的信息的任务控制参数 */
  interface PornConfigureInfo {
    /** 画面鉴别涉及令人反感的信息的控制参数。 */
    ImgReviewInfo?: PornImgReviewTemplateInfo;
    /** 语音鉴别涉及令人反感的信息的控制参数。 */
    AsrReviewInfo?: PornAsrReviewTemplateInfo;
    /** 文本鉴别涉及令人反感的信息的控制参数。 */
    OcrReviewInfo?: PornOcrReviewTemplateInfo;
  }

  /** 鉴别涉及令人反感的信息的任务控制参数。 */
  interface PornConfigureInfoForUpdate {
    /** 画面鉴别涉及令人反感的信息的控制参数。 */
    ImgReviewInfo?: PornImgReviewTemplateInfoForUpdate;
    /** 语音鉴别涉及令人反感的信息的控制参数。 */
    AsrReviewInfo?: PornAsrReviewTemplateInfoForUpdate;
    /** 文本鉴别涉及令人反感的信息的控制参数。 */
    OcrReviewInfo?: PornOcrReviewTemplateInfoForUpdate;
  }

  /** 图片画面审核涉及令人反感的信息的任务结果类型 */
  interface PornImageResult {
    /** 鉴别涉及令人反感的信息的评分，分值为0到100。 */
    Confidence?: number;
    /** 鉴别涉及令人反感的信息的结果建议，取值范围：pass；review；block。 */
    Suggestion?: string;
    /** 鉴别涉及令人反感的信息的结果标签，取值范围：porn：色情；sexy：性感；vulgar：低俗；intimacy：亲密行为。 */
    Label?: string;
  }

  /** 画面鉴别涉及令人反感的信息的任务控制参数 */
  interface PornImgReviewTemplateInfo {
    /** 画面鉴别涉及令人反感的信息的任务开关，可选值：ON：开启画面鉴别涉及令人反感的信息的任务；OFF：关闭画面鉴别涉及令人反感的信息的任务。 */
    Switch: string;
    /** 画面鉴别涉及令人反感的信息的过滤标签，审核结果包含选择的标签则返回结果，如果过滤标签为空，则审核结果全部返回，可选值为：porn：色情；vulgar：低俗；intimacy：亲密行为；sexy：性感。 */
    LabelSet?: string[];
    /** 判定涉嫌违规的分数阈值，当审核达到该分数以上，认为涉嫌违规，不填默认为 90 分。取值范围：0~100。 */
    BlockConfidence?: number;
    /** 判定需人工复核是否违规的分数阈值，当审核达到该分数以上，认为需人工复核，不填默认为 0 分。取值范围：0~100。 */
    ReviewConfidence?: number;
  }

  /** 画面鉴别涉及令人反感的信息的任务控制参数。 */
  interface PornImgReviewTemplateInfoForUpdate {
    /** 画面鉴别涉及令人反感的信息的任务开关，可选值：ON：开启画面鉴别涉及令人反感的信息的任务；OFF：关闭画面鉴别涉及令人反感的信息的任务。 */
    Switch?: string;
    /** 画面鉴别涉及令人反感的信息的过滤标签，审核结果包含选择的标签则返回结果，如果过滤标签为空，则审核结果全部返回，可选值为：porn：色情；vulgar：低俗；intimacy：亲密行为；sexy：性感。 */
    LabelSet?: string[];
    /** 判定涉嫌违规的分数阈值，当审核达到该分数以上，认为涉嫌违规。取值范围：0~100。 */
    BlockConfidence?: number;
    /** 判定需人工复核是否违规的分数阈值，当审核达到该分数以上，认为需人工复核。取值范围：0~100。 */
    ReviewConfidence?: number;
  }

  /** 文本鉴别涉及令人反感的信息的任务控制参数 */
  interface PornOcrReviewTemplateInfo {
    /** 文本鉴别涉及令人反感的信息的任务开关，可选值：ON：开启文本鉴别涉及令人反感的信息的任务；OFF：关闭文本鉴别涉及令人反感的信息的任务。 */
    Switch: string;
    /** 判定涉嫌违规的分数阈值，当审核达到该分数以上，认为涉嫌违规，不填默认为 100 分。取值范围：0~100。 */
    BlockConfidence?: number;
    /** 判定需人工复核是否违规的分数阈值，当审核达到该分数以上，认为需人工复核，不填默认为 75 分。取值范围：0~100。 */
    ReviewConfidence?: number;
  }

  /** 文本鉴别涉及令人反感的信息的任务控制参数。 */
  interface PornOcrReviewTemplateInfoForUpdate {
    /** 文本鉴别涉及令人反感的信息的任务开关，可选值：ON：开启文本鉴别涉及令人反感的信息的任务；OFF：关闭文本鉴别涉及令人反感的信息的任务。 */
    Switch?: string;
    /** 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规。取值范围：0~100。 */
    BlockConfidence?: number;
    /** 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核。取值范围：0~100。 */
    ReviewConfidence?: number;
  }

  /** 任务流模板音视频审核输入参数类型。 */
  interface ProcedureReviewAudioVideoTaskInput {
    /** 审核模板。 */
    Definition: number;
    /** 审核的内容，可选值：Media：原始音视频；Cover：封面。不填或填空数组时，默认为审核 Media。 */
    ReviewContents?: string[];
  }

  /** 音视频处理任务信息 */
  interface ProcedureTask {
    /** 音视频处理任务 ID。 */
    TaskId?: string;
    /** 任务流状态，取值：PROCESSING：处理中；FINISH：已完成。 */
    Status?: string;
    /** 已弃用，请使用各个具体任务的 ErrCode。 */
    ErrCode?: number;
    /** 已弃用，请使用各个具体任务的 Message。 */
    Message?: string;
    /** 媒体文件 ID若流程由 [ProcessMedia](https://cloud.tencent.com/document/product/266/33427) 发起，该字段表示 [MediaInfo](https://cloud.tencent.com/document/product/266/31773) 的 FileId；若流程由 [ProcessMediaByUrl](https://cloud.tencent.com/document/product/266/33426) 发起，该字段表示 [MediaInputInfo](https://cloud.tencent.com/document/product/266/31773) 的 Id。 */
    FileId?: string;
    /** 媒体文件名称若流程由 [ProcessMedia](https://cloud.tencent.com/document/product/266/33427) 发起，该字段表示 [MediaInfo](https://cloud.tencent.com/document/product/266/31773) 的 BasicInfo.Name；若流程由 [ProcessMediaByUrl](https://cloud.tencent.com/document/product/266/33426) 发起，该字段表示 [MediaInputInfo](https://cloud.tencent.com/document/product/266/31773) 的 Name。 */
    FileName?: string;
    /** 媒体文件地址若流程由 [ProcessMedia](https://cloud.tencent.com/document/product/266/33427) 发起，该字段表示 [MediaInfo](https://cloud.tencent.com/document/product/266/31773) 的 BasicInfo.MediaUrl；若流程由 [ProcessMediaByUrl](https://cloud.tencent.com/document/product/266/33426) 发起，该字段表示 [MediaInputInfo](https://cloud.tencent.com/document/product/266/31773) 的 Url。 */
    FileUrl?: string;
    /** 原始音视频的元信息。 */
    MetaData?: MediaMetaData | null;
    /** 音视频处理任务的执行状态与结果。 */
    MediaProcessResultSet?: MediaProcessTaskResult[];
    /** 音视频审核任务的执行状态与结果。 */
    AiContentReviewResultSet?: AiContentReviewResult[];
    /** 音视频内容分析任务的执行状态与结果。 */
    AiAnalysisResultSet?: AiAnalysisResult[];
    /** 音视频内容识别任务的执行状态与结果。 */
    AiRecognitionResultSet?: AiRecognitionResult[];
    /** 任务流的优先级，取值范围为 [-10, 10]。 */
    TasksPriority?: number;
    /** 任务流状态变更通知模式。Finish：只有当任务流全部执行完毕时，才发起一次事件通知；Change：只要任务流中每个子任务的状态发生变化，都进行事件通知；None：不接受该任务流回调。 */
    TasksNotifyMode?: string;
    /** 来源上下文，用于透传用户请求信息，任务流状态变更回调将返回该字段值，最长 1000 个字符。 */
    SessionContext?: string;
    /** 用于去重的识别码，如果七天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。 */
    SessionId?: string;
    /** 操作者。取值范围：System: 表示系统触发。 */
    Operator?: string;
    /** 操作类型。取值范围：TSC: 表示使用极速高清进行智能降码。 */
    OperationType?: string;
  }

  /** 任务流模板详情 */
  interface ProcedureTemplate {
    /** 任务流名字。 */
    Name?: string;
    /** 任务流模板类型，取值范围：Preset：系统预置任务流模板；Custom：用户自定义任务流模板。 */
    Type?: string;
    /** 模板描述信息，长度限制：256 个字符。 */
    Comment?: string;
    /** 视频处理类型任务参数。 */
    MediaProcessTask?: MediaProcessTaskInput | null;
    /** AI 智能审核类型任务参数 \*。\*：该参数用于发起旧版审核，不建议使用。推荐使用 ReviewAudioVideoTask 参数发起审核。 */
    AiContentReviewTask?: AiContentReviewTaskInput | null;
    /** AI 智能内容分析类型任务参数。 */
    AiAnalysisTask?: AiAnalysisTaskInput | null;
    /** AI 内容识别类型任务参数。 */
    AiRecognitionTaskSet?: AiRecognitionTaskInput[];
    /** 该参数已不推荐使用，建议使用 AiRecognitionTaskSet。 */
    AiRecognitionTask?: AiRecognitionTaskInput | null;
    /** 微信小程序发布任务参数。 */
    MiniProgramPublishTask?: WechatMiniProgramPublishTaskInput | null;
    /** 音视频审核类型任务参数。 */
    ReviewAudioVideoTask?: ProcedureReviewAudioVideoTaskInput | null;
    /** 模板创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    CreateTime?: string;
    /** 模板最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    UpdateTime?: string;
  }

  /** MPS 媒体处理任务信息。 */
  interface ProcessMediaByMPS {
    /** 任务 ID。 */
    TaskId?: string;
    /** 任务状态，取值：PROCESSING：处理中；FINISH：已完成。 */
    Status?: string;
    /** 错误码。源异常时返回非0错误码，返回0时请使用各个具体任务的 ErrCode。 */
    ErrCode?: number;
    /** 错误信息。源异常时返回对应异常 Message，否则请使用各个具体任务的 Message。 */
    Message?: string;
    /** MPS 视频处理任务。 */
    SubTaskSet?: MPSSubTaskResult[];
  }

  /** 预付费商品实例 */
  interface ProductInstance {
    /** 预付费商品实例类型，取值有：StarterPackage：点播新手包。MiniProgramPlugin：点播小程序插件。ResourcePackage：点播资源包。 */
    ProductType?: string;
    /** 资源包实例起始日期。使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    StartTime?: string;
    /** 资源包实例过期日期。使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    ExpireTime?: string;
    /** 资源包实例ID。对应每个资源包，系统会分配相应的资源。续费或者升级资源包时，需要带上这个资源ID。 */
    ProductInstanceId?: string;
    /** 系统最近一次扣除资源包的日期。使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    LastConsumeDate?: string;
    /** 资源包绑定 License 状态，取值有：0：未绑定。1：已绑定。 */
    BindStatus?: number;
    /** 预付费资源包实例中包含的资源包列表。 */
    ProductInstanceResourceSet?: ProductInstanceRecource[];
    /** 预付费资源包实例中包含的资源包列表。 */
    ResourceSet?: ProductInstanceResource[];
    /** 资源包实例的状态，取值有：Effective：生效，可用于计费抵扣。Isolated：隔离，不可用于计费抵扣。 */
    ProductInstanceStatus?: string;
    /** 资源包实例的可退还状态，取值有：FullRefund：可全额退款。Denied：不可退款。 */
    RefundStatus?: string;
    /** 自动续费状态，取值有：Never：不自动续费。Expire：到期自动续费。ExpireOrUseOut：到期或用完自动续费。NotSupport：不支持。 */
    RenewStatus?: string;
  }

  /** 资源包中包含的资源。 */
  interface ProductInstanceRecource {
    /** 资源类型。Storage：存储资源包。Traffic：流量资源包。Transcode：普通转码资源包。TESHD：极速高清转码资源包。Review：音视频审核转码资源包。MediaProcess：媒体处理时长资源包。 */
    ResourceType?: string;
    /** 资源包额度。音视频存储资源包，单位为字节。音视频转码资源包，单位为秒。音视频审核资源包，单位为秒。音视频极速高清资源包，单位为秒。音视频加速资源包，单位为字节。媒体处理时长资源包，单位为秒。 */
    Amount?: number;
    /** 资源包余量。音视频存储资源包，单位为字节。音视频转码资源包，单位为秒。音视频审核资源包，单位为秒。音视频极速高清资源包，单位为秒。音视频加速资源包，单位为字节。媒体处理时长资源包，单位为秒。 */
    Left?: number;
  }

  /** 资源包中包含的资源。 */
  interface ProductInstanceResource {
    /** 资源类型。Storage：存储资源包。Traffic：流量资源包。Transcode：普通转码资源包。TESHD：极速高清转码资源包。Review：音视频审核转码资源包。MediaProcess：媒体处理时长资源包。 */
    ResourceType?: string;
    /** 资源包额度。音视频存储资源包，单位为字节。音视频转码资源包，单位为秒。音视频审核资源包，单位为秒。音视频极速高清资源包，单位为秒。音视频加速资源包，单位为字节。媒体处理时长资源包，单位为秒。 */
    Amount?: number;
    /** 资源包余量。音视频存储资源包，单位为字节。音视频转码资源包，单位为秒。音视频审核资源包，单位为秒。音视频极速高清资源包，单位为秒。音视频加速资源包，单位为字节。媒体处理时长资源包，单位为秒。 */
    Left?: number;
  }

  /** 语音违禁任务控制参数 */
  interface ProhibitedAsrReviewTemplateInfo {
    /** 语音违禁任务开关，可选值：ON：开启语音违禁任务；OFF：关闭语音违禁任务。 */
    Switch: string;
    /** 判定涉嫌违规的分数阈值，当审核达到该分数以上，认为涉嫌违规，不填默认为 100 分。取值范围：0~100。 */
    BlockConfidence?: number;
    /** 判定需人工复核是否违规的分数阈值，当审核达到该分数以上，认为需人工复核，不填默认为 75 分。取值范围：0~100。 */
    ReviewConfidence?: number;
  }

  /** 语音违禁任务控制参数 */
  interface ProhibitedAsrReviewTemplateInfoForUpdate {
    /** 语音违禁任务开关，可选值：ON：开启语音违禁任务；OFF：关闭语音违禁任务。 */
    Switch?: string;
    /** 判定涉嫌违规的分数阈值，当审核达到该分数以上，认为涉嫌违规，不填默认为 100 分。取值范围：0~100。 */
    BlockConfidence?: number;
    /** 判定需人工复核是否违规的分数阈值，当审核达到该分数以上，认为需人工复核，不填默认为 75 分。取值范围：0~100。 */
    ReviewConfidence?: number;
  }

  /** 违禁任务控制参数 */
  interface ProhibitedConfigureInfo {
    /** 语音违禁控制参数。 */
    AsrReviewInfo?: ProhibitedAsrReviewTemplateInfo;
    /** 文本违禁控制参数。 */
    OcrReviewInfo?: ProhibitedOcrReviewTemplateInfo;
  }

  /** 违禁任务控制参数 */
  interface ProhibitedConfigureInfoForUpdate {
    /** 语音违禁控制参数。 */
    AsrReviewInfo?: ProhibitedAsrReviewTemplateInfoForUpdate;
    /** 文本违禁控制参数。 */
    OcrReviewInfo?: ProhibitedOcrReviewTemplateInfoForUpdate;
  }

  /** 文本违禁任务控制参数 */
  interface ProhibitedOcrReviewTemplateInfo {
    /** 文本违禁任务开关，可选值：ON：开启文本违禁任务；OFF：关闭文本违禁任务。 */
    Switch: string;
    /** 判定涉嫌违规的分数阈值，当审核达到该分数以上，认为涉嫌违规，不填默认为 100 分。取值范围：0~100。 */
    BlockConfidence?: number;
    /** 判定需人工复核是否违规的分数阈值，当审核达到该分数以上，认为需人工复核，不填默认为 75 分。取值范围：0~100。 */
    ReviewConfidence?: number;
  }

  /** 文本违禁任务控制参数 */
  interface ProhibitedOcrReviewTemplateInfoForUpdate {
    /** 文本违禁任务开关，可选值：ON：开启文本违禁任务；OFF：关闭文本违禁任务。 */
    Switch?: string;
    /** 判定涉嫌违规的分数阈值，当审核达到该分数以上，认为涉嫌违规，不填默认为 100 分。取值范围：0~100。 */
    BlockConfidence?: number;
    /** 判定需人工复核是否违规的分数阈值，当审核达到该分数以上，认为需人工复核，不填默认为 75 分。取值范围：0~100。 */
    ReviewConfidence?: number;
  }

  /** 拉取上传任务信息 */
  interface PullUploadTask {
    /** 拉取上传任务 ID。 */
    TaskId?: string;
    /** 任务流状态，取值：PROCESSING：处理中；FINISH：已完成。 */
    Status?: string;
    /** 错误码，0 表示成功，其他值表示失败：40000：输入参数不合法，请检查输入参数；60000：源文件错误（如视频数据损坏），请确认源文件是否正常；70000：内部服务错误，建议重试。 */
    ErrCode?: number;
    /** 错误信息。 */
    Message?: string;
    /** 拉取上传完成后生成的视频 ID。 */
    FileId?: string;
    /** 拉取上传完成后生成的媒体文件基础信息。 */
    MediaBasicInfo?: MediaBasicInfo | null;
    /** 输出视频的元信息。 */
    MetaData?: MediaMetaData;
    /** 拉取上传完成后生成的播放地址。 */
    FileUrl?: string;
    /** 任务类型为 Procedure 的任务 ID。若[拉取上传](https://cloud.tencent.com/document/api/266/35575)时指定了媒体后续任务操作(Procedure)，当该任务流模板指定了 MediaProcessTask、AiAnalysisTask、AiRecognitionTask 中的一个或多个时发起该任务。 */
    ProcedureTaskId?: string;
    /** 任务类型为 ReviewAudioVideo 的任务 ID。若[拉取上传](https://cloud.tencent.com/document/api/266/35575)时指定了媒体后续任务操作(Procedure)，当该任务流模板指定了 ReviewAudioVideoTask 时，发起该任务。 */
    ReviewAudioVideoTaskId?: string;
    /** 来源上下文，用于透传用户请求信息，[URL 拉取视频上传完成](https://cloud.tencent.com/document/product/266/7831)将返回该字段值，最长 1000 个字符。 */
    SessionContext?: string;
    /** 用于去重的识别码，如果七天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。 */
    SessionId?: string;
    /** 拉取上传进度，取值范围 [0-100] 。 */
    Progress?: number;
  }

  /** 视频画面二维码检测的控制参数。 */
  interface QRCodeConfigureInfo {
    /** 视频画面二维码检测开关，可选值：ON：开启；OFF：关闭。 */
    Switch: string;
  }

  /** 视频画面二维码检测的控制参数。 */
  interface QRCodeConfigureInfoForUpdate {
    /** 视频画面二维码检测开关，可选值：ON：开启；OFF：关闭。 */
    Switch?: string;
  }

  /** 音画质重生任务 */
  interface QualityEnhanceTask {
    /** 任务 ID。 */
    TaskId?: string;
    /** 任务流状态，取值：PROCESSING：处理中；FINISH：已完成。 */
    Status?: string;
    /** 错误码，0 表示成功，其他值表示失败：40000：输入参数不合法，请检查输入参数；60000：源文件错误（如视频数据损坏），请确认源文件是否正常；70000：内部服务错误，建议重试。 */
    ErrCode?: number;
    /** 错误信息。 */
    Message?: string;
    /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/266/50368) 列表。 */
    ErrCodeExt?: string;
    /** 音画质重生任务进度，取值范围 [0-100] 。 */
    Progress?: number;
    /** 音画质重生任务的输入。 */
    Input?: QualityEnhanceTaskInput;
    /** 音画质重生任务的输出。 */
    Output?: QualityEnhanceTaskOutput;
    /** 音画质重生输出视频的元信息。 */
    MetaData?: MediaMetaData;
    /** 用于去重的识别码，如果七天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。 */
    SessionId?: string;
    /** 来源上下文，用于透传用户请求信息，任务流状态变更回调将返回该字段值，最长 1000 个字符。 */
    SessionContext?: string;
  }

  /** 音画质重生任务的输入。 */
  interface QualityEnhanceTaskInput {
    /** 媒体文件 ID。 */
    FileId?: string;
    /** 音画质重生模板 ID。 */
    Definition?: number;
  }

  /** 音画质重生任务输出 */
  interface QualityEnhanceTaskOutput {
    /** 文件类型，例如 mp4、flv 等。 */
    FileType?: string;
    /** 媒体文件播放地址。 */
    FileUrl?: string;
    /** 媒体文件 ID。 */
    FileId?: string;
    /** 输出文件名，最长 64 个字符。缺省由系统指定生成文件名。 */
    MediaName?: string;
    /** 分类ID，用于对媒体进行分类管理，可通过 [创建分类](/document/product/266/7812) 接口，创建分类，获得分类 ID。默认值：0，表示其他分类。 */
    ClassId?: number;
    /** 输出文件的过期时间，超过该时间文件将被删除，默认为永久不过期，格式按照 ISO 8601标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732)。 */
    ExpireTime?: string;
  }

  /** 视频画面质量评价的控制参数。 */
  interface QualityEvaluationConfigureInfo {
    /** 视频画面质量评价检测开关，可选值：ON：开启；OFF：关闭。 */
    Switch: string;
    /** 视频画面质量评价过滤阈值，结果只返回低于该值的时间段，默认值为 60。 */
    Score?: number;
  }

  /** 视频画面质量评价的控制参数。 */
  interface QualityEvaluationConfigureInfoForUpdate {
    /** 视频画面质量评价开关，可选值：ON：开启；OFF：关闭。 */
    Switch?: string;
    /** 视频画面质量评价过滤阈值，结果只返回低于该值的时间段。 */
    Score?: number;
  }

  /** 音画质检测异常片段信息。 */
  interface QualityInspectItem {
    /** 异常片段起始的偏移时间，单位：秒。 */
    StartTimeOffset?: number;
    /** 异常片段终止的偏移时间，单位：秒。 */
    EndTimeOffset?: number;
    /** 检测出异常的区域坐标。数组包含 4 个元素 [x1,y1,x2,y2]，依次表示区域左上点、右下点的横纵坐标。注意： 仅当 Type 取值为下列之一时，本字段取值有效：BlackWhiteEdge：黑白边；Mosaic：马赛克；QRCode：二维码；AppletCode：小程序码；BarCode：条形码。 */
    AreaCoordSet?: number[];
    /** 置信度，取值范围：[0, 100]。注意： 仅当 Type 取值为下列之一时，本字段取值有效：Mosaic：马赛克；QRCode：二维码；AppletCode：小程序码；BarCode：条形码。 */
    Confidence?: number;
  }

  /** 音画质检测异常结果信息。 */
  interface QualityInspectResultItem {
    /** 异常类型，取值范围：Jitter：抖动；Blur：模糊；LowLighting：低光照；HighLighting：过曝；CrashScreen：花屏；BlackWhiteEdge：黑白边；SolidColorScreen：纯色屏；Noise：噪点；Mosaic：马赛克；QRCode：二维码；AppletCode：小程序码；BarCode：条形码；LowVoice：低音；HighVoice：爆音；NoVoice：静音；LowEvaluation：无参考打分低于阈值。 */
    Type?: string;
    /** 异常片段列表。注意： 该列表最多仅展示前 100 个元素。如希望获得完整结果，请从 SegmentSetFileUrl 对应的文件中获取。 */
    SegmentSet?: QualityInspectItem[];
    /** 异常片段列表文件 URL。文件 内容 为 JSON，数据结构与 SegmentSet 字段一致。（文件不会永久存储，到达SegmentSetFileUrlExpireTime 时间点后文件将被删除）。 */
    SegmentSetFileUrl?: string;
    /** 异常片段列表文件 URL 失效时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    SegmentSetFileUrlExpireTime?: string;
  }

  /** 音画质检测任务信息。 */
  interface QualityInspectTask {
    /** 任务 ID。 */
    TaskId?: string;
    /** 任务状态，取值：PROCESSING：处理中；FINISH：已完成。 */
    Status?: string;
    /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/266/50368) 列表。 */
    ErrCodeExt?: string;
    /** 错误信息。 */
    Message?: string;
    /** 音画质检测输入音视频的元信息。 */
    MetaData?: MediaMetaData | null;
    /** 音画质检测任务输入。 */
    Input?: QualityInspectTaskInput;
    /** 音画质检测任务输出。 */
    Output?: QualityInspectTaskOutput;
    /** 用于去重的识别码，如果七天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。 */
    SessionId?: string;
    /** 来源上下文，用于透传用户请求信息，音画质检测完成回调将返回该字段值，最长 1000 个字符。 */
    SessionContext?: string;
  }

  /** 音画质检测任务的输入。 */
  interface QualityInspectTaskInput {
    /** 媒体文件 ID。 */
    FileId?: string;
    /** 音画质检测模板 ID。 */
    Definition?: number;
  }

  /** 音画质检测任务的输出。 */
  interface QualityInspectTaskOutput {
    /** 媒体文件是否无音频轨，取值范围：0：否，即有音频轨；1：是，即无音频轨。 */
    NoAudio?: number;
    /** 媒体文件是否无视频轨，取值范围：0：否，即有视频轨；1：是，即无视频轨。 */
    NoVideo?: number;
    /** 视频画面质量评分，取值范围：[0, 100]。 */
    QualityEvaluationScore?: number;
    /** 音画质检测出的异常项列表。 */
    QualityInspectResultSet?: QualityInspectResultItem[];
  }

  /** 音画质检测模板详情。 */
  interface QualityInspectTemplateItem {
    /** 模板 ID。 */
    Definition?: number;
    /** 模板类型，可选值：Preset：系统预置模板；Custom：用户自定义模板。 */
    Type?: string;
    /** 模板名称。 */
    Name?: string;
    /** 模板描述。 */
    Comment?: string;
    /** 截帧间隔，单位为秒。 */
    ScreenshotInterval?: number;
    /** 视频画面抖动重影检测的控制参数。 */
    JitterConfigure?: JitterConfigureInfo;
    /** 视频画面模糊检测的控制参数。 */
    BlurConfigure?: BlurConfigureInfo;
    /** 视频画面低光、过曝检测的控制参数。 */
    AbnormalLightingConfigure?: AbnormalLightingConfigureInfo;
    /** 视频画面花屏检测的控制参数。 */
    CrashScreenConfigure?: CrashScreenConfigureInfo;
    /** 视频画面黑边、白边、黑屏、白屏检测的控制参数。 */
    BlackWhiteEdgeConfigure?: BlackWhiteEdgeConfigureInfo;
    /** 视频画面噪点检测的控制参数。 */
    NoiseConfigure?: NoiseConfigureInfo;
    /** 视频画面马赛克检测的控制参数。 */
    MosaicConfigure?: MosaicConfigureInfo;
    /** 视频画面二维码检测的控制参数。 */
    QRCodeConfigure?: QRCodeConfigureInfo;
    /** 视频画面质量评价的控制参数。 */
    QualityEvaluationConfigure?: QualityEvaluationConfigureInfo;
    /** 音频（静音、低音、爆音）检测的控制参数。 */
    VoiceConfigure?: VoiceConfigureInfo;
    /** 模板创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    CreateTime?: string;
    /** 模板最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    UpdateTime?: string;
  }

  /** 音画质重生音频控制控制信息。 */
  interface RebuildAudioInfo {
    /** 音频降噪控制参数。 */
    AudioDenoiseInfo?: AudioDenoiseInfo;
  }

  /** 音画质重生结果文件输出。 */
  interface RebuildMediaOutputConfig {
    /** 输出文件名，最长 64 个字符。缺省由系统指定生成文件名。 */
    MediaName?: string;
    /** 分类ID，用于对媒体进行分类管理，可通过 [创建分类](/document/product/266/7812) 接口，创建分类，获得分类 ID。默认值：0，表示其他分类。 */
    ClassId?: number;
    /** 输出文件的过期时间，超过该时间文件将被删除，默认为永久不过期，格式按照 ISO 8601标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732)。 */
    ExpireTime?: string;
  }

  /** 画质重生输出的音频信息 */
  interface RebuildMediaTargetAudioStream {
    /** 音频流的编码格式。当外层参数 Container 为 mp3 时，可选值为：libmp3lame。当外层参数 Container 为 ogg 或 flac 时，可选值为：flac。当外层参数 Container 为 m4a 时，可选值为：libfdk_aac；libmp3lame；ac3。当外层参数 Container 为 mp4 或 flv 时，可选值为：libfdk_aac：更适合 mp4；libmp3lame：更适合 flv；mp2。当外层参数 Container 为 hls 时，可选值为：libfdk_aac。 */
    Codec?: string;
    /** 音频流的码率，取值范围：0 和 [26, 256]，单位：kbps。当取值为 0，表示由云点播自动设置码率。 */
    Bitrate?: number;
    /** 音频流的采样率，可选值：320004410048000单位：Hz。 */
    SampleRate?: number;
    /** 音频通道方式，可选值：1：单通道2：双通道6：立体声当媒体的封装格式是音频格式时（flac，ogg，mp3，m4a）时，声道数不允许设为立体声。默认值：2。 */
    AudioChannel?: number;
  }

  /** 画质重生目标参数 */
  interface RebuildMediaTargetInfo {
    /** 输出文件名，最长 64 个字符。缺省由系统指定生成文件名。 */
    MediaName?: string;
    /** 描述信息，最长 128 个字符。缺省描述信息为空。 */
    Description?: string;
    /** 分类ID，用于对媒体进行分类管理，可通过 [创建分类](/document/product/266/7812) 接口，创建分类，获得分类 ID。默认值：0，表示其他分类。 */
    ClassId?: number;
    /** 输出文件的过期时间，超过该时间文件将被删除，默认为永久不过期，格式按照 ISO 8601标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732)。 */
    ExpireTime?: string;
    /** 输出文件封装格式，可选值：mp4、flv、hls。默认mp4。 */
    Container?: string;
    /** 输出的视频信息。 */
    VideoStream?: RebuildMediaTargetVideoStream;
    /** 输出的音频信息。 */
    AudioStream?: RebuildMediaTargetAudioStream;
    /** 是否去除视频数据，可选值：0：保留1：去除默认值：0。 */
    RemoveVideo?: number;
    /** 是否去除音频数据，可选值：0：保留1：去除默认值：0。 */
    RemoveAudio?: number;
  }

  /** 画质重生输出的视频信息 */
  interface RebuildMediaTargetVideoStream {
    /** 视频流的编码格式，可选值：libx264：H.264 编码；libx265：H.265 编码；av1：AOMedia Video 1 编码。默认视频流的编码格式为 H.264 编码。 */
    Codec?: string;
    /** 视频流的码率，取值范围：0 和 [128, 35000]，单位：kbps。当取值为 0，表示由云点播自动设置码率。 */
    Bitrate?: number;
    /** 视频帧率，取值范围：[0, 100]，单位：Hz。 当取值为 0，表示帧率和原始视频保持一致。 */
    Fps?: number;
    /** 分辨率自适应，可选值：open：开启，此时，Width 代表视频的长边，Height 表示视频的短边；close：关闭，此时，Width 代表视频的宽度，Height 表示视频的高度。默认值：open。 */
    ResolutionAdaptive?: string;
    /** 视频流宽度（或长边）的最大值，取值范围：0 和 [128, 4096]，单位：px。当 Width、Height 均为 0，则分辨率同源；当 Width 为 0，Height 非 0，则 Width 按比例缩放；当 Width 非 0，Height 为 0，则 Height 按比例缩放；当 Width、Height 均非 0，则分辨率按用户指定。默认值：0。 */
    Width?: number;
    /** 视频流高度（或短边）的最大值，取值范围：0 和 [128, 4096]，单位：px。当 Width、Height 均为 0，则分辨率同源；当 Width 为 0，Height 非 0，则 Width 按比例缩放；当 Width 非 0，Height 为 0，则 Height 按比例缩放；当 Width、Height 均非 0，则分辨率按用户指定。默认值：0。 */
    Height?: number;
    /** 填充方式，当视频流配置宽高参数与原始视频的宽高比不一致时，对转码的处理方式，即为“填充”。可选填充方式：stretch：拉伸，对每一帧进行拉伸，填满整个画面，可能导致转码后的视频被“压扁“或者“拉长“；black：留黑，保持视频宽高比不变，边缘剩余部分使用黑色填充。默认值：stretch 。 */
    FillType?: string;
    /** 关键帧 I 帧之间的间隔，取值范围：0 和 [1, 100000]，单位：帧数。当填 0 或不填时，系统将自动设置 gop 长度。 */
    Gop?: number;
  }

  /** 音画质重生任务 */
  interface RebuildMediaTask {
    /** 任务 ID。 */
    TaskId?: string;
    /** 任务流状态，取值：PROCESSING：处理中；FINISH：已完成。 */
    Status?: string;
    /** 错误码，0 表示成功，其他值表示失败：40000：输入参数不合法，请检查输入参数；60000：源文件错误（如视频数据损坏），请确认源文件是否正常；70000：内部服务错误，建议重试。 */
    ErrCode?: number;
    /** 错误信息。 */
    Message?: string;
    /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/266/50368) 列表。 */
    ErrCodeExt?: string;
    /** 音画质重生任务进度，取值范围 [0-100] 。 */
    Progress?: number;
    /** 音画质重生任务的输入。 */
    Input?: RebuildMediaTaskInput;
    /** 音画质重生任务的输出。 */
    Output?: RebuildMediaTaskOutput;
    /** 音画质重生输出视频的元信息。 */
    MetaData?: MediaMetaData;
    /** 用于去重的识别码，如果七天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。 */
    SessionId?: string;
    /** 来源上下文，用于透传用户请求信息，任务流状态变更回调将返回该字段值，最长 1000 个字符。 */
    SessionContext?: string;
  }

  /** 音画质重生任务的输入。 */
  interface RebuildMediaTaskInput {
    /** 媒体文件 ID。 */
    FileId?: string;
    /** 起始偏移时间，单位：秒，不填表示从视频开始截取。 */
    StartTimeOffset?: number;
    /** 结束偏移时间，单位：秒，不填表示截取到视频末尾。 */
    EndTimeOffset?: number;
    /** 音画质重生模板号。 */
    Definition?: number;
    /** 画质修复控制参数。 */
    RepairInfo?: RepairInfo;
    /** 智能插帧控制参数。 */
    VideoFrameInterpolationInfo?: VideoFrameInterpolationInfo;
    /** 画面超分控制参数。 */
    SuperResolutionInfo?: SuperResolutionInfo;
    /** 高动态范围类型控制参数。 */
    HDRInfo?: HDRInfo;
    /** 视频降噪控制参数。 */
    VideoDenoiseInfo?: VideoDenoiseInfo;
    /** 音频降噪控制参数。 */
    AudioDenoiseInfo?: AudioDenoiseInfo;
    /** 色彩增强控制参数。 */
    ColorInfo?: ColorEnhanceInfo;
    /** 细节增强控制参数。 */
    SharpInfo?: SharpEnhanceInfo;
    /** 人脸增强控制参数。 */
    FaceInfo?: FaceEnhanceInfo;
    /** 低光照控制参数。 */
    LowLightInfo?: LowLightEnhanceInfo;
    /** 去划痕控制参数。 */
    ScratchRepairInfo?: ScratchRepairInfo;
    /** 去伪影（毛刺）控制参数。 */
    ArtifactRepairInfo?: ArtifactRepairInfo;
    /** 音画质重生输出目标参数。 */
    TargetInfo?: RebuildMediaTargetInfo;
  }

  /** 音画质重生任务输出 */
  interface RebuildMediaTaskOutput {
    /** 文件类型，例如 mp4、flv 等。 */
    FileType?: string;
    /** 媒体文件播放地址。 */
    FileUrl?: string;
    /** 媒体文件 ID。 */
    FileId?: string;
    /** 输出文件名，最长 64 个字符。缺省由系统指定生成文件名。 */
    MediaName?: string;
    /** 分类ID，用于对媒体进行分类管理，可通过 [创建分类](/document/product/266/7812) 接口，创建分类，获得分类 ID。默认值：0，表示其他分类。 */
    ClassId?: number;
    /** 输出文件的过期时间，超过该时间文件将被删除，默认为永久不过期，格式按照 ISO 8601标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732)。 */
    ExpireTime?: string;
  }

  /** 音画质重生模板详情。 */
  interface RebuildMediaTemplate {
    /** 音画质重生模板号。 */
    Definition?: number;
    /** 模板类型，可选值：Preset：系统预置模板；Custom：用户自定义模板。 */
    Type?: string;
    /** 音画质重生模板名称。 */
    Name?: string;
    /** 音画质重生模板描述。 */
    Comment?: string;
    /** 音画质重生视频控制信息。 */
    RebuildVideoInfo?: RebuildVideoInfo;
    /** 音画质重生音频控制信息。 */
    RebuildAudioInfo?: RebuildAudioInfo;
    /** 输出视频控制信息。 */
    TargetVideoInfo?: RebuildMediaTargetVideoStream;
    /** 输出音频控制信息。 */
    TargetAudioInfo?: RebuildMediaTargetAudioStream;
    /** 封装格式。可选值：mp4、hls。默认是 mp4。 */
    Container?: string;
    /** 是否去除视频数据，可选值：0：保留1：去除默认值 0。 */
    RemoveVideo?: number;
    /** 是否去除音频数据，可选值：0：保留1：去除默认值 0。 */
    RemoveAudio?: number;
    /** 模板创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    CreateTime?: string;
    /** 模板最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    UpdateTime?: string;
  }

  /** 音画质重生视频控制控制信息。 */
  interface RebuildVideoInfo {
    /** 画质修复控制参数。 */
    RepairInfo?: RepairInfo | null;
    /** 智能插帧控制参数。 */
    VideoFrameInterpolationInfo?: VideoFrameInterpolationInfo | null;
    /** 画面超分控制参数。 */
    SuperResolutionInfo?: SuperResolutionInfo | null;
    /** 高动态范围类型控制参数。 */
    HDRInfo?: HDRInfo | null;
    /** 视频降噪控制参数。 */
    VideoDenoiseInfo?: VideoDenoiseInfo | null;
    /** 色彩增强控制参数。 */
    ColorInfo?: ColorEnhanceInfo | null;
    /** 细节增强控制参数。 */
    SharpInfo?: SharpEnhanceInfo | null;
    /** 人脸增强控制参数。 */
    FaceInfo?: FaceEnhanceInfo | null;
    /** 低光照控制参数。 */
    LowLightInfo?: LowLightEnhanceInfo | null;
    /** 去划痕控制参数。 */
    ScratchRepairInfo?: ScratchRepairInfo | null;
    /** 去伪影控制参数。 */
    ArtifactRepairInfo?: ArtifactRepairInfo | null;
  }

  /** 降码率任务转自适应码流结果类型 */
  interface ReduceMediaBitrateAdaptiveDynamicStreamingResult {
    /** 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。 */
    Status?: string;
    /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/266/50368) 列表。 */
    ErrCodeExt?: string;
    /** 错误信息。 */
    Message?: string;
    /** 对视频转自适应码流任务的输入。 */
    Input?: AdaptiveDynamicStreamingTaskInput;
    /** 对视频转自适应码流任务的输出。 */
    Output?: AdaptiveDynamicStreamingInfoItem;
  }

  /** 降码率任务结果 */
  interface ReduceMediaBitrateMediaProcessTaskResult {
    /** 任务的类型，可以取的值有：Transcode：转码AdaptiveDynamicStreaming：自适应码流 */
    Type?: string;
    /** 降码率任务中视频转码任务的查询结果，当任务类型为 Transcode 时有效。 */
    TranscodeTask?: ReduceMediaBitrateTranscodeResult;
    /** 降码率任务中对视频转自适应码流任务的查询结果，当任务类型为 AdaptiveDynamicStreaming 时有效。 */
    AdaptiveDynamicStreamingTask?: ReduceMediaBitrateAdaptiveDynamicStreamingResult;
  }

  /** 降码率任务信息 */
  interface ReduceMediaBitrateTask {
    /** 视频处理任务 ID。 */
    TaskId?: string;
    /** 任务流状态，取值：PROCESSING：处理中；FINISH：已完成。 */
    Status?: string;
    /** 媒体文件 ID。 */
    FileId?: string;
    /** 媒体文件名称。 */
    FileName?: string;
    /** 媒体文件地址。 */
    FileUrl?: string;
    /** 原始视频的元信息。 */
    MetaData?: MediaMetaData;
    /** 降码率任务执行状态与结果。 */
    MediaProcessResultSet?: ReduceMediaBitrateMediaProcessTaskResult[];
    /** 任务流的优先级，取值范围为 [-10, 10]。 */
    TasksPriority?: number;
    /** 任务流状态变更通知模式。Finish：只有当任务流全部执行完毕时，才发起一次事件通知；None：不接受该任务流回调。 */
    TasksNotifyMode?: string;
    /** 来源上下文，用于透传用户请求信息，任务流状态变更回调将返回该字段值，最长 1000 个字符。 */
    SessionContext?: string;
    /** 用于去重的识别码，如果七天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。 */
    SessionId?: string;
  }

  /** 降码率任务转码结果类型 */
  interface ReduceMediaBitrateTranscodeResult {
    /** 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。 */
    Status?: string;
    /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/266/50368) 列表。 */
    ErrCodeExt?: string;
    /** 错误信息。 */
    Message?: string;
    /** 转码任务的输入。 */
    Input?: TranscodeTaskInput;
    /** 转码任务的输出。 */
    Output?: MediaTranscodeItem;
    /** 转码进度，取值范围 [0-100] 。 */
    Progress?: number;
    /** 转码任务开始执行的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    BeginProcessTime?: string;
    /** 转码任务执行完毕的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    FinishTime?: string;
  }

  /** Referer 防盗链配置 */
  interface RefererAuthPolicy {
    /** [Referer 防盗链](https://cloud.tencent.com/document/product/266/14046)设置状态，可选值：Enabled: 启用；Disabled: 禁用。 */
    Status: string;
    /** Referer 校验类型，可选值：Black：黑名单方式校验。HTTP 请求携带了 Referers 列表中的某个 Referer 将被拒绝访问。White：白名单方式校验。HTTP 请求携带了 Referers 列表中的 Referer 时才允许访问。当 Status 取值为 Enabled 时，AuthType 必须赋值。 */
    AuthType?: string;
    /** 用于校验的 Referer 列表，最大支持 400 个 Referer。当 Status 取值为 Enabled 时， Referers 不能为空数组。Referer 的格式参考域名的格式。 */
    Referers?: string[];
    /** 是否允许空 Referer 访问本域名，可选值：Yes： 是。No： 否。当 Status 取值为 Enabled 时，BlankRefererAllowed 必须赋值。 */
    BlankRefererAllowed?: string;
  }

  /** 智能去除水印任务的输入。 */
  interface RemoveWaterMarkTaskInput {
    /** 媒体文件 ID。 */
    FileId?: string;
  }

  /** 智能去除水印任务的输出。 */
  interface RemoveWaterMarkTaskOutput {
    /** 媒体文件 ID。 */
    FileId?: string;
    /** 文件类型，例如 mp4、mp3 等。 */
    FileType?: string;
    /** 媒体文件播放地址。 */
    FileUrl?: string;
    /** 文件名称，最长 64 个字符。 */
    MediaName?: string;
    /** 元信息。包括大小、时长、视频流信息、音频流信息等。 */
    MetaData?: MediaMetaData;
  }

  /** 智能去除水印任务信息，仅当 TaskType 为 RemoveWatermark，该字段有值。 */
  interface RemoveWatermarkTask {
    /** 任务 ID 。 */
    TaskId?: string;
    /** 任务流状态，取值：PROCESSING：处理中；FINISH：已完成。 */
    Status?: string;
    /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/266/50368) 列表。 */
    ErrCodeExt?: string;
    /** 错误码，0 表示成功，其他值表示失败：40000：输入参数不合法，请检查输入参数；60000：源文件错误（如视频数据损坏），请确认源文件是否正常；70000：内部服务错误，建议重试。 */
    ErrCode?: number;
    /** 错误信息。 */
    Message?: string;
    /** 智能去除水印任务的输入。 */
    Input?: RemoveWaterMarkTaskInput;
    /** 智能去除水印任务的输出。 */
    Output?: RemoveWaterMarkTaskOutput | null;
    /** 用于去重的识别码，如果七天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。 */
    SessionId?: string;
    /** 来源上下文，用于透传用户请求信息，任务流状态变更回调将返回该字段值，最长 1000 个字符。 */
    SessionContext?: string;
  }

  /** 画质修复控制参数 */
  interface RepairInfo {
    /** 画质修复控制开关，可选值：ON：开启画质修复；OFF：关闭画质修复。 */
    Switch: string;
    /** 画质修复类型，仅当画质修复控制开关为 ON 时有效，可选值：weak：轻画质修复；normal：正常画质修复；strong：强画质修复。默认值：weak。 */
    Type?: string;
  }

  /** 播放器子流名字信息 */
  interface ResolutionNameInfo {
    /** 视频短边长度，单位：像素。 */
    MinEdgeLength: number;
    /** 展示名字。 */
    Name: string;
  }

  /** 标签键值。参考[标签](https://cloud.tencent.com/document/product/651)。 */
  interface ResourceTag {
    /** 标签键。 */
    TagKey: string;
    /** 标签值。 */
    TagValue: string;
  }

  /** 取回视频任务信息 */
  interface RestoreMediaTask {
    /** 文件ID。 */
    FileId?: string;
    /** 文件原始存储类型。 */
    OriginalStorageClass?: string;
    /** 文件目标存储类型。对于临时取回，目标存储类型与原始存储类型相同。 */
    TargetStorageClass?: string;
    /** 取回模式，取值：Expedited：极速模式Standard：标准模式Bulk：批量模式 */
    RestoreTier?: string;
    /** 临时取回副本有效期，单位：天。对于永久取回，取值为0。 */
    RestoreDay?: number;
    /** 该字段已废弃。 */
    Status?: number;
    /** 该字段已废弃。 */
    Message?: string;
  }

  /** 音视频审核片段。 */
  interface ReviewAudioVideoSegmentItem {
    /** 嫌疑片段起始的偏移时间，单位：秒。 */
    StartTimeOffset?: number;
    /** 嫌疑片段结束的偏移时间，单位：秒。 */
    EndTimeOffset?: number;
    /** 嫌疑片段涉及令人反感的信息的分数。 */
    Confidence?: number;
    /** 嫌疑片段鉴别涉及违规信息的结果建议，取值范围：review：疑似违规，建议复审；block：确认违规，建议封禁。 */
    Suggestion?: string;
    /** 嫌疑片段最可能的违规的标签，取值范围：Porn：色情；Terror：暴力；Polity：不适宜的信息；Ad：广告；Illegal：违法；Abuse：谩骂；Moan：娇喘。 */
    Label?: string;
    /** 违规子标签。 */
    SubLabel?: string;
    /** 嫌疑片段违禁的形式，取值范围：Image：画面上的人物或图标；OCR：画面上的文字；ASR：语音中的文字；Voice：声音。 */
    Form?: string;
    /** 当 Form 为 Image 或 OCR 时有效，表示嫌疑人物、图标或文字出现的区域坐标 (像素级)，[x1, y1, x2, y2]，即左上角坐标、右下角坐标。 */
    AreaCoordSet?: number[];
    /** 当 Form 为 OCR 或 ASR 时有效，表示识别出来的 OCR 或 ASR 文本内容。 */
    Text?: string;
    /** 当 Form 为 OCR 或 ASR 时有效，表示嫌疑片段命中的违规关键词列表。 */
    KeywordSet?: string[];
    /** 嫌疑图片 URL （图片不会永久存储，到达 PicUrlExpireTime 时间点后图片将被删除）。 */
    Url?: string;
    /** 嫌疑图片 URL 失效时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    PicUrlExpireTime?: string;
  }

  /** 音视频审核任务信息。 */
  interface ReviewAudioVideoTask {
    /** 任务 ID。 */
    TaskId?: string;
    /** 任务状态，取值：PROCESSING：处理中；FINISH：已完成。 */
    Status?: string;
    /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/266/50368) 列表。 */
    ErrCodeExt?: string;
    /** 错误信息。 */
    Message?: string;
    /** 音视频审核任务的输入。 */
    Input?: ReviewAudioVideoTaskInput;
    /** 音视频审核任务的输出。 */
    Output?: ReviewAudioVideoTaskOutput;
    /** 用于去重的识别码，如果七天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。 */
    SessionId?: string;
    /** 来源上下文，用于透传用户请求信息，音视频审核完成回调将返回该字段值，最长 1000 个字符。 */
    SessionContext?: string;
  }

  /** 音视频审核任务的输入。 */
  interface ReviewAudioVideoTaskInput {
    /** 媒体文件 ID。 */
    FileId?: string;
    /** 音视频审核模板 ID。 */
    Definition?: number;
    /** 审核的内容，可选值：Media：原始音视频；Cover：封面。 */
    ReviewContents?: string[];
  }

  /** 音视频审核任务的输出。 */
  interface ReviewAudioVideoTaskOutput {
    /** 音视频内容审核的结果建议，取值范围：pass：建议通过；review：建议复审；block：建议封禁。 */
    Suggestion?: string;
    /** 当 Suggestion 为 review 或 block 时有效，表示音视频最可能的违规的标签，取值范围：Porn：色情；Terror：暴力；Polity：不适宜的信息；Ad：广告；Illegal：违法；Abuse：谩骂；Moan：娇喘。 */
    Label?: string;
    /** 当 Suggestion 为 review 或 block 时有效，表示音视频最可能的违禁的形式，取值范围：Image：画面上的人物或图标；OCR：画面上的文字；ASR：语音中的文字；Voice：声音。 */
    Form?: string;
    /** 有违规信息的嫌疑的视频片段列表。注意 ：该列表最多仅展示前 10个 元素。如希望获得完整结果，请从 SegmentSetFileUrl 对应的文件中获取。 */
    SegmentSet?: ReviewAudioVideoSegmentItem[];
    /** 涉及违规信息的嫌疑的视频片段列表文件 URL。文件的内容为 JSON，数据结构与 SegmentSet 字段一致。 （文件不会永久存储，到达SegmentSetFileUrlExpireTime 时间点后文件将被删除）。 */
    SegmentSetFileUrl?: string;
    /** 涉及违规信息的嫌疑的视频片段列表文件 URL 失效时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    SegmentSetFileUrlExpireTime?: string;
    /** 封面审核结果。 */
    CoverReviewResult?: ReviewImageResult | null;
  }

  /** 图片审核结果。 */
  interface ReviewImageResult {
    /** 图片审核的结果建议，取值范围：pass：建议通过；review：建议复审；block：建议封禁。 */
    Suggestion?: string;
    /** 当 Suggestion 为 review 或 block 时有效，表示最可能的违规的标签，取值范围：Porn：色情；Terror：暴力；Polity：不适宜的信息；Ad：广告；Illegal：违法；Abuse：谩骂。 */
    Label?: string;
    /** 当 Suggestion 为 review 或 block 时有效，表示最可能的违禁的形式，取值范围：Image：画面上的人物或图标；OCR：画面上的文字。 */
    Form?: string;
    /** 有违规信息的嫌疑的视频片段列表。注意 ：该列表最多仅展示前 10个 元素。如希望获得完整结果，请从 SegmentSetFileUrl 对应的文件中获取。 */
    SegmentSet?: ReviewImageSegmentItem[];
    /** 涉及违规信息的嫌疑的视频片段列表文件 URL。文件的内容为 JSON，数据结构与 SegmentSet 字段一致。 （文件不会永久存储，到达SegmentSetFileUrlExpireTime 时间点后文件将被删除）。 */
    SegmentSetFileUrl?: string;
    /** 涉及违规信息的嫌疑的视频片段列表文件 URL 失效时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    SegmentSetFileUrlExpireTime?: string;
  }

  /** 图片审核片段。 */
  interface ReviewImageSegmentItem {
    /** 嫌疑片段涉及令人反感的信息的分数。 */
    Confidence?: number;
    /** 嫌疑片段鉴别涉及违规信息的结果建议，取值范围：review：疑似违规，建议复审；block：确认违规，建议封禁。 */
    Suggestion?: string;
    /** 嫌疑片段最可能的违规的标签，取值范围：Porn：色情；Terror：暴力；Polity：不适宜的信息；Ad：广告；Illegal：违法；Abuse：谩骂。 */
    Label?: string;
    /** 违规子标签。 */
    SubLabel?: string;
    /** 嫌疑片段违禁的形式，取值范围：Image：画面上的人物或图标；OCR：画面上的文字。 */
    Form?: string;
    /** 嫌疑人物、图标或文字出现的区域坐标 (像素级)，[x1, y1, x2, y2]，即左上角坐标、右下角坐标。 */
    AreaCoordSet?: number[];
    /** 当 Form 为 OCR 时有效，表示识别出来的 OCR 文本内容。 */
    Text?: string;
    /** 当 Form 为 OCR 时有效，表示嫌疑片段命中的违规关键词列表。 */
    KeywordSet?: string[];
  }

  /** 审核信息。 */
  interface ReviewInfo {
    /** 审核模板 ID。 */
    Definition?: number;
    /** 审核的结果建议，取值范围：pass：建议通过；review：建议复审；block：建议封禁。 */
    Suggestion?: string;
    /** 审核类型，当 Suggestion 为 review 或 block 时有效，格式为：Form.Label。Form 表示违禁的形式，取值范围：Image：画面上的人物或图标；OCR：画面上的文字；ASR：语音中的文字；Voice：声音。Label 表示违禁的标签，取值范围：Porn：色情；Terror：暴力；Polity：不适宜的信息；Ad：广告；Illegal：违法；Abuse：谩骂；Moan：娇喘。 */
    TypeSet?: string[];
    /** 审核时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    ReviewTime?: string;
  }

  /** 审核模板详情 */
  interface ReviewTemplate {
    /** 审核模板唯一标签。 */
    Definition?: number;
    /** 模板名称。 */
    Name?: string;
    /** 模板描述信息。 */
    Comment?: string;
    /** 模板类型，可选值：Preset：系统预置模板；Custom：用户自定义模板。 */
    Type?: string;
    /** 需要返回的违规标签列表。 */
    Labels?: string[];
    /** 模板创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    CreateTime?: string;
    /** 模板最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    UpdateTime?: string;
  }

  /** 轮播节目播放信息 */
  interface RoundPlayFilePlayInfo {
    /** 播单节目的 ID，由系统分配。 */
    ItemId?: string;
    /** 媒体文件标识。 */
    FileId?: string;
    /** 启播时间，格式按照 ISO 8601标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732)。 */
    StartPlayTime?: string;
    /** 播放时长，单位为秒。 */
    Duration?: number;
    /** 播放进度，单位为秒。 */
    Progress?: number;
  }

  /** 轮播任务信息 */
  interface RoundPlayInfo {
    /** 轮播播单标识。 */
    RoundPlayId?: string;
    /** 启播时间，格式按照 ISO 8601标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732)。 */
    StartTime?: string;
    /** 轮播列表。 */
    RoundPlaylist?: RoundPlayListItemInfo[];
    /** 轮播播单名称，长度限制：64 个字符。 */
    Name?: string;
    /** 轮播播单描述信息，长度限制：256 个字符。 */
    Desc?: string;
    /** 播放状态，可选值：Enabled：启动状态；Disabled：停止状态。默认值：Enabled。 */
    Status?: string;
    /** 播放模式，可选值：Loop：循环播放播单；Linear：单次播放，播单播放完停止播放。默认值：Loop。 */
    PlayBackMode?: string;
    /** 轮播播放地址。 */
    Url?: string;
    /** 创建时间，格式按照 ISO 8601标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732)。 */
    CreateTime?: string;
    /** 更新时间，格式按照 ISO 8601标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732)。 */
    UpdateTime?: string;
    /** 过期时间，格式按照 ISO 8601标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732)，过期后将停止播单的播放。“9999-12-31T23:59:59+08:00”表示永不过期。 */
    ExpiredTime?: string;
  }

  /** 轮播播放节目信息 */
  interface RoundPlayListItemInfo {
    /** 媒体文件标识。 */
    FileId: string;
    /** 播放的音视频类型，可选值：Transcode：转码输出；转码输出会有多个模版，必须指定 Definition 字段Original：原始音视频。Type 对应的格式必须为 HLS 格式。 */
    AudioVideoType: string;
    /** 播放节目的 ID，由系统分配。 */
    ItemId?: string;
    /** 指定播放的转码模板，当 AudioVideoType 为 Transcode 时必须指定。 */
    Definition?: number;
  }

  /** 华曦达（SDMC）相关的 DRM 密钥提供商信息。 */
  interface SDMCDrmKeyProviderInfo {
    /** 华曦达分配的用户 ID。最大长度为128个字符。 */
    Uid: string;
    /** 华曦达分配的用户密钥 ID。最大长度为128个字符。 */
    SecretId: string;
    /** 华曦达分配的用户密钥内容。最大长度为128个字符。 */
    SecretKey: string;
    /** 华曦达分配的 FairPlay 证书地址。该地址需使用 HTTPS 协议，最大长度为1024个字符。 */
    FairPlayCertificateUrl: string;
  }

  /** 对视频做采样截图任务输入参数类型 */
  interface SampleSnapshotTaskInput {
    /** 采样截图模板 ID。 */
    Definition: number;
    /** 水印列表，支持多张图片或文字水印，最大可支持 10 张。 */
    WatermarkSet?: WatermarkInput[];
  }

  /** 采样截图模板详情 */
  interface SampleSnapshotTemplate {
    /** 采样截图模板唯一标识。 */
    Definition: number;
    /** 模板类型，取值范围：Preset：系统预置模板；Custom：用户自定义模板。 */
    Type: string;
    /** 采样截图模板名称。 */
    Name: string;
    /** 模板描述信息。 */
    Comment: string;
    /** 截图宽度（或长边）的最大值，取值范围：0 和 [128, 4096]，单位：px。当 Width、Height 均为 0，则分辨率同源；当 Width 为 0，Height 非 0，则 Width 按比例缩放；当 Width 非 0，Height 为 0，则 Height 按比例缩放；当 Width、Height 均非 0，则分辨率按用户指定。默认值：0。 */
    Width: number;
    /** 截图高度（或短边）的最大值，取值范围：0 和 [128, 4096]，单位：px。当 Width、Height 均为 0，则分辨率同源；当 Width 为 0，Height 非 0，则 Width 按比例缩放；当 Width 非 0，Height 为 0，则 Height 按比例缩放；当 Width、Height 均非 0，则分辨率按用户指定。默认值：0。 */
    Height: number;
    /** 分辨率自适应，可选值：open：开启，此时，Width 代表视频的长边，Height 表示视频的短边；close：关闭，此时，Width 代表视频的宽度，Height 表示视频的高度。默认值：open。 */
    ResolutionAdaptive: string;
    /** 图片格式。 */
    Format: string;
    /** 采样截图类型。 */
    SampleType: string;
    /** 采样间隔。 */
    SampleInterval: number;
    /** 模板创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    CreateTime: string;
    /** 模板最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    UpdateTime: string;
    /** 填充方式，当截图配置宽高参数与原始视频的宽高比不一致时，对截图的处理方式，即为“填充”。可选填充方式： stretch：拉伸，对每一帧进行拉伸，填满整个画面，可能导致转码后的视频被“压扁“或者“拉长“；black：留黑，保持视频宽高比不变，边缘剩余部分使用黑色填充。white：留白，保持视频宽高比不变，边缘剩余部分使用白色填充。gauss：高斯模糊，保持视频宽高比不变，边缘剩余部分使用高斯模糊。默认值：black 。 */
    FillType: string;
  }

  /** 去划痕控制信息 */
  interface ScratchRepairInfo {
    /** 去划痕控制开关，可选值：ON：开启去划痕；OFF：关闭去划痕。 */
    Switch: string;
    /** 去划痕强度，仅当去划痕控制开关为 ON 时有效，取值范围：0.0~1.0。默认：0.0。 */
    Intensity?: number;
    /** 去划痕类型，仅当去划痕控制开关为 ON 时有效，可选值：normal：正常去划痕；默认值：normal。 */
    Type?: string;
  }

  /** 视频拆条任务识别控制参数 */
  interface SegmentConfigureInfo {
    /** 视频拆条识别任务开关，可选值：ON：开启智能视频拆条识别任务；OFF：关闭智能视频拆条识别任务。 */
    Switch: string;
  }

  /** 视频拆条识别任务控制参数 */
  interface SegmentConfigureInfoForUpdate {
    /** 视频拆条识别任务开关，可选值：ON：开启智能视频拆条识别任务；OFF：关闭智能视频拆条识别任务。 */
    Switch?: string;
  }

  /** 细节增强控制 */
  interface SharpEnhanceInfo {
    /** 细节增强控制开关，可选值：ON：开启细节增强；OFF：关闭细节增强。 */
    Switch: string;
    /** 细节增强强度，仅当细节增强控制开关为 ON 时有效，取值范围：0.0~1.0。默认：0.0。 */
    Intensity?: number;
  }

  /** 简单加密加解密密钥对。 */
  interface SimpleAesEdkPair {
    /** 加密后的数据密钥。 */
    Edk?: string;
    /** 数据密钥。返回的数据密钥 DK 为 Base64 编码字符串。 */
    Dk?: string;
  }

  /** 截图输出信息（2017 版） */
  interface SnapshotByTimeOffset2017 {
    /** 错误码0：成功；其他值：失败。 */
    ErrCode?: number;
    /** 截图的具体时间点，单位：毫秒。 */
    TimeOffset?: number;
    /** 截图输出文件地址。 */
    Url?: string;
  }

  /** 视频指定时间点截图任务信息，该结构仅用于 2017 版[指定时间点截图](https://cloud.tencent.com/document/product/266/8102)接口发起的任务。 */
  interface SnapshotByTimeOffsetTask2017 {
    /** 截图任务 ID。 */
    TaskId?: string;
    /** 截图文件 ID。 */
    FileId?: string;
    /** 截图规格，参见[指定时间点截图参数模板](https://cloud.tencent.com/document/product/266/33480)。 */
    Definition?: number;
    /** 截图结果信息。 */
    SnapshotInfoSet?: SnapshotByTimeOffset2017[];
  }

  /** 对视频按指定时间点截图任务输入参数类型 */
  interface SnapshotByTimeOffsetTaskInput {
    /** 指定时间点截图模板 ID。 */
    Definition: number;
    /** 截图时间点列表，时间点支持 s、% 两种格式：当字符串以 s 结尾，表示时间点单位为秒，如 3.5s 表示时间点为第3.5秒；当字符串以 % 结尾，表示时间点为视频时长的百分比大小，如10%表示时间点为视频前第10%的时间。 */
    ExtTimeOffsetSet?: string[];
    /** 截图时间点列表，单位为毫秒。此参数已不再建议使用，建议您使用 ExtTimeOffsetSet 参数。 */
    TimeOffsetSet?: number[];
    /** 水印列表，支持多张图片或文字水印，最大可支持 10 张。 */
    WatermarkSet?: WatermarkInput[];
  }

  /** 指定时间点截图模板详情 */
  interface SnapshotByTimeOffsetTemplate {
    /** 指定时间点截图模板唯一标识。 */
    Definition: number;
    /** 模板类型，取值范围：Preset：系统预置模板；Custom：用户自定义模板。 */
    Type: string;
    /** 指定时间点截图模板名称。 */
    Name: string;
    /** 模板描述信息。 */
    Comment: string;
    /** 截图宽度（或长边）的最大值，取值范围：0 和 [128, 4096]，单位：px。当 Width、Height 均为 0，则分辨率同源；当 Width 为 0，Height 非 0，则 Width 按比例缩放；当 Width 非 0，Height 为 0，则 Height 按比例缩放；当 Width、Height 均非 0，则分辨率按用户指定。默认值：0。 */
    Width: number;
    /** 截图高度（或短边）的最大值，取值范围：0 和 [128, 4096]，单位：px。当 Width、Height 均为 0，则分辨率同源；当 Width 为 0，Height 非 0，则 Width 按比例缩放；当 Width 非 0，Height 为 0，则 Height 按比例缩放；当 Width、Height 均非 0，则分辨率按用户指定。默认值：0。 */
    Height: number;
    /** 分辨率自适应，可选值：open：开启，此时，Width 代表视频的长边，Height 表示视频的短边；close：关闭，此时，Width 代表视频的宽度，Height 表示视频的高度。默认值：open。 */
    ResolutionAdaptive: string;
    /** 图片格式。 */
    Format: string;
    /** 模板创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    CreateTime: string;
    /** 模板最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    UpdateTime: string;
    /** 填充方式，当截图配置宽高参数与原始视频的宽高比不一致时，对截图的处理方式，即为“填充”。可选填充方式： stretch：拉伸，对每一帧进行拉伸，填满整个画面，可能导致转码后的视频被“压扁“或者“拉长“；black：留黑，保持视频宽高比不变，边缘剩余部分使用黑色填充。white：留白，保持视频宽高比不变，边缘剩余部分使用白色填充。gauss：高斯模糊，保持视频宽高比不变，边缘剩余部分使用高斯模糊。默认值：black 。 */
    FillType: string;
  }

  /** 排序依据 */
  interface SortBy {
    /** 排序字段 */
    Field: string;
    /** 排序方式，可选值：Asc（升序）、Desc（降序） */
    Order: string;
  }

  /** 指定规格任务统计数据。 */
  interface SpecificationDataItem {
    /** 任务规格。 */
    Specification?: string;
    /** 统计数据。 */
    Data?: TaskStatDataItem[];
  }

  /** 视频拆条的结果文件输出。 */
  interface SplitMediaOutputConfig {
    /** 输出文件名，最长 64 个字符。缺省由系统指定生成文件名。 */
    MediaName?: string;
    /** 输出文件格式，可选值：mp4、hls。默认是 mp4。 */
    Type?: string;
    /** 分类ID，用于对媒体进行分类管理，可通过 [创建分类](/document/product/266/7812) 接口，创建分类，获得分类 ID。默认值：0，表示其他分类。 */
    ClassId?: number;
    /** 输出文件的过期时间，超过该时间文件将被删除，默认为永久不过期，格式按照 ISO 8601标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732)。 */
    ExpireTime?: string;
  }

  /** 视频拆条任务信息，仅当 TaskType 为 SplitMedia，该字段有值。 */
  interface SplitMediaTask {
    /** 任务 ID。 */
    TaskId?: string;
    /** 任务流状态，取值：PROCESSING：处理中；FINISH：已完成。 */
    Status?: string;
    /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [视频处理类错误码](https://cloud.tencent.com/document/product/266/50368) 列表。 */
    ErrCodeExt?: string;
    /** 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。 */
    ErrCode?: number;
    /** 错误信息。 */
    Message?: string;
    /** 视频拆条任务详细信息列表。 */
    FileInfoSet?: SplitMediaTaskSegmentInfo[];
    /** 来源上下文，用于透传用户请求信息，任务流状态变更回调将返回该字段值，最长 1000 个字符。 */
    SessionContext?: string;
    /** 用于去重的识别码，如果七天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。 */
    SessionId?: string;
    /** 视频拆条任务进度，取值范围 [0-100] 。 */
    Progress?: number;
  }

  /** 视频拆条任务配置信息。 */
  interface SplitMediaTaskConfig {
    /** 视频拆条起始的偏移时间，单位：秒。不填或填0，表示转码后的视频从原始视频的起始位置开始；当数值大于0时（假设为 n），表示转码后的视频从原始视频的第 n 秒位置开始；当数值小于0时（假设为 -n），表示转码后的视频从原始视频结束 n 秒前的位置开始。 */
    StartTimeOffset?: number;
    /** 视频拆条结束的偏移时间，单位：秒。不填或填0，表示转码后的视频持续到原始视频的末尾终止；当数值大于0时（假设为 n），表示转码后的视频持续到原始视频第 n 秒时终止；当数值小于0时（假设为 -n），表示转码后的视频持续到原始视频结束 n 秒前终止。 */
    EndTimeOffset?: number;
    /** [任务流](https://cloud.tencent.com/document/product/266/33475)名称。要对生成的新视频自动执行任务流时填写。 */
    ProcedureName?: string;
    /** 视频拆条输出信息。 */
    OutputConfig?: SplitMediaOutputConfig;
  }

  /** 视频拆条任务输入信息 */
  interface SplitMediaTaskInput {
    /** 视频的 ID。 */
    FileId?: string;
    /** 视频拆条起始的偏移时间，单位：秒。不填或填0，表示转码后的视频从原始视频的起始位置开始；当数值大于0时（假设为 n），表示转码后的视频从原始视频的第 n 秒位置开始；当数值小于0时（假设为 -n），表示转码后的视频从原始视频结束 n 秒前的位置开始。 */
    StartTimeOffset?: number;
    /** 视频拆条结束的偏移时间，单位：秒。不填或填0，表示转码后的视频持续到原始视频的末尾终止；当数值大于0时（假设为 n），表示转码后的视频持续到原始视频第 n 秒时终止；当数值小于0时（假设为 -n），表示转码后的视频持续到原始视频结束 n 秒前终止。 */
    EndTimeOffset?: number;
    /** [任务流](https://cloud.tencent.com/document/product/266/33475)名称，如果要对生成的新视频执行任务流时填写。 */
    ProcedureName?: string;
    /** 视频拆条输出信息。 */
    OutputConfig?: SplitMediaOutputConfig;
  }

  /** 视频拆条任务信息。 */
  interface SplitMediaTaskSegmentInfo {
    /** 视频拆条任务输入信息。 */
    Input?: SplitMediaTaskInput;
    /** 视频拆条任务输出信息。 */
    Output?: TaskOutputMediaInfo;
    /** 任务类型为 Procedure 的任务 ID。若发起[视频拆条](https://cloud.tencent.com/document/api/266/51098)任务时，视频拆条任务信息列表指定了任务流模板(ProcedureName)，当该任务流模板指定了 MediaProcessTask、AiAnalysisTask、AiRecognitionTask 中的一个或多个时发起该任务。 */
    ProcedureTaskId?: string;
    /** 任务类型为 ReviewAudioVideo 的任务 ID。若发起[视频拆条](https://cloud.tencent.com/document/api/266/51098)任务时，视频拆条任务信息列表指定了任务流模板(ProcedureName)，当该任务流模板指定了 ReviewAudioVideoTask 时，发起该任务。 */
    ReviewAudioVideoTaskId?: string;
  }

  /** 统计数据 */
  interface StatDataItem {
    /** 数据所在时间区间的开始时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。如：当时间粒度为天，2018-12-01T00:00:00+08:00，表示2018年12月1日（含）到2018年12月2日（不含）区间。表示小时级别数据时，2019-08-22T00:00:00+08:00表示2019-08-22日0点到1点的统计数据。表示天级别数据时，2019-08-22T00:00:00+08:00表示2019-08-22日的统计数据。 */
    Time?: string;
    /** 数据大小。存储空间的数据，单位是字节。转码时长的数据，单位是秒。流量数据，单位是字节。带宽数据，单位是比特每秒。直播剪辑数据，单位是秒。轮播数据，单位是秒。子应用数量数据，单位是个。日志服务用量数据，单位是条。 */
    Value?: number;
  }

  /** 贴图轨上的贴图信息。 */
  interface StickerTrackItem {
    /** 贴图片段的媒体素材来源，可以是：点播的媒体文件 ID；其他媒体文件的下载 URL。注意：当使用其他媒体文件的下载 URL 作为素材来源，且开启了访问控制（如防盗链）时，需要在 URL 携带访问控制参数（如防盗链签名）。 */
    SourceMedia: string;
    /** 贴图的持续时间，单位为秒。 */
    Duration: number;
    /** 贴图在轨道上的起始时间，单位为秒。 */
    StartTime?: number;
    /** 原点位置，取值有：Center：坐标原点为中心位置，如画布中心。默认值：Center。 */
    CoordinateOrigin?: string;
    /** 贴图原点距离画布原点的水平位置。支持 %、px 两种格式：当字符串以 % 结尾，表示贴图 XPos 为画布宽度指定百分比的位置，如 10% 表示 XPos 为画布宽度的 10%。当字符串以 px 结尾，表示贴图 XPos 单位为像素，如 100px 表示 XPos 为 100 像素。默认值：0px。 */
    XPos?: string;
    /** 贴图原点距离画布原点的垂直位置。支持 %、px 两种格式：当字符串以 % 结尾，表示贴图 YPos 为画布高度指定百分比的位置，如 10% 表示 YPos 为画布高度的 10%。当字符串以 px 结尾，表示贴图 YPos 单位为像素，如 100px 表示 YPos 为 100 像素。默认值：0px。 */
    YPos?: string;
    /** 贴图的宽度。支持 %、px 两种格式：当字符串以 % 结尾，表示贴图 Width 为画布宽度的百分比大小，如 10% 表示 Width 为画布宽度的 10%。当字符串以 px 结尾，表示贴图 Width 单位为像素，如 100px 表示 Width 为 100 像素。当 Width、Height 均为空，则 Width 和 Height 取贴图素材本身的 Width、Height。当 Width 为空0，Height 非空，则 Width 按比例缩放当 Width 非空，Height 为空，则 Height 按比例缩放。 */
    Width?: string;
    /** 贴图的高度。支持 %、px 两种格式：当字符串以 % 结尾，表示贴图 Height 为画布高度的百分比大小，如 10% 表示 Height 为画布高度的 10%。当字符串以 px 结尾，表示贴图 Height 单位为像素，如 100px 表示 Hieght 为 100 像素。当 Width、Height 均为空，则 Width 和 Height 取贴图素材本身的 Width、Height。当 Width 为空，Height 非空，则 Width 按比例缩放当 Width 非空，Height 为空，则 Height 按比例缩放。 */
    Height?: string;
    /** 对贴图进行的操作，如图像旋转等。 */
    ImageOperations?: ImageTransform[];
  }

  /** 存储地域信息 */
  interface StorageRegionInfo {
    /** 存储地域。 */
    Region?: string;
    /** 存储地域描述信息。 */
    Description?: string;
    /** 状态，是否开通，取值有：opened：已经开通。unopened：未开通。 */
    Status?: string;
    /** 是否默认的存储地域，true：是；false：否。 */
    IsDefault?: boolean;
    /** 存储区域，取值有：Chinese Mainland：中国境内（不包含港澳台）。Outside Chinese Mainland：中国境外。 */
    Area?: string;
  }

  /** 云点播存储用量的分区统计数据 */
  interface StorageStatData {
    /** 点播存储的计费区域，可能值：Chinese Mainland：中国境内（不包含港澳台）。Outside Chinese Mainland：中国境外。 */
    Area: string;
    /** 当前总存储量，单位是字节。 */
    TotalStorage: number;
    /** 当前低频存储量，单位是字节。 */
    InfrequentStorage: number;
    /** 当前标准存储量，单位是字节。 */
    StandardStorage: number;
    /** 当前归档存储量，单位是字节。 */
    ArchiveStorage: number;
    /** 当前深度归档存储量，单位是字节。 */
    DeepArchiveStorage: number;
  }

  /** 子应用信息。 */
  interface SubAppIdInfo {
    /** 子应用 ID。 */
    SubAppId?: number;
    /** 子应用名称。 */
    SubAppIdName?: string;
    /** 子应用简介。 */
    Description?: string;
    /** 子应用创建时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    CreateTime?: string;
    /** 子应用状态，有效值：On：启用；Off：停用。Destroying：销毁中。Destroyed：销毁完成。 */
    Status?: string;
    /** 子应用名称（该字段已不推荐使用，建议使用新的子应用名称字段 SubAppIdName）。 */
    Name?: string;
  }

  /** 字幕格式列表操作。 */
  interface SubtitleFormatsOperation {
    /** 操作类型，取值范围：add：添加 Formats 指定的格式列表；delete：删除 Formats 指定的格式列表；reset：将已配置的格式列表重置为 Formats 指定的格式列表。 */
    Type: string;
    /** 字幕格式列表，取值范围：vtt：生成 WebVTT 字幕文件；srt：生成 SRT 字幕文件。 */
    Formats: string[];
  }

  /** 画面超分控制参数 */
  interface SuperResolutionInfo {
    /** 画面超分控制开关，可选值：ON：开启画面超分；OFF：关闭画面超分。当开启画面超分时，默认2倍超分。 */
    Switch: string;
    /** 画面超分类型，仅当画面超分控制开关为 ON 时有效，可选值：lq：针对低清晰度有较多噪声视频的超分；hq：针对高清晰度视频超分。默认值：lq。 */
    Type?: string;
    /** 超分倍数，可选值：2。默认值：2。 */
    Size?: number;
  }

  /** SVG水印模板输入参数 */
  interface SvgWatermarkInput {
    /** 水印的宽度，支持 px，%，W%，H%，S%，L% 六种格式：当字符串以 px 结尾，表示水印 Width 单位为像素，如 100px 表示 Width 为 100 像素；当填 0px 且 Height 不为 0px 时，表示水印的宽度按原始 SVG 图像等比缩放；当 Width、Height 都填 0px 时，表示水印的宽度取原始 SVG 图像的宽度；当字符串以 W% 结尾，表示水印 Width 为视频宽度的百分比大小，如 10W% 表示 Width 为视频宽度的 10%；当字符串以 H% 结尾，表示水印 Width 为视频高度的百分比大小，如 10H% 表示 Width 为视频高度的 10%；当字符串以 S% 结尾，表示水印 Width 为视频短边的百分比大小，如 10S% 表示 Width 为视频短边的 10%；当字符串以 L% 结尾，表示水印 Width 为视频长边的百分比大小，如 10L% 表示 Width 为视频长边的 10%；当字符串以 % 结尾时，含义同 W%。默认值为 10W%。 */
    Width?: string;
    /** 水印的高度，支持 px，W%，H%，S%，L% 六种格式：当字符串以 px 结尾，表示水印 Height 单位为像素，如 100px 表示 Height 为 100 像素；当填 0px 且 Width 不为 0px 时，表示水印的高度按原始 SVG 图像等比缩放；当 Width、Height 都填 0px 时，表示水印的高度取原始 SVG 图像的高度；当字符串以 W% 结尾，表示水印 Height 为视频宽度的百分比大小，如 10W% 表示 Height 为视频宽度的 10%；当字符串以 H% 结尾，表示水印 Height 为视频高度的百分比大小，如 10H% 表示 Height 为视频高度的 10%；当字符串以 S% 结尾，表示水印 Height 为视频短边的百分比大小，如 10S% 表示 Height 为视频短边的 10%；当字符串以 L% 结尾，表示水印 Height 为视频长边的百分比大小，如 10L% 表示 Height 为视频长边的 10%；当字符串以 % 结尾时，含义同 H%。默认值为 0px。 */
    Height?: string;
  }

  /** SVG水印模板输入参数 */
  interface SvgWatermarkInputForUpdate {
    /** 水印的宽度，支持 px，%，W%，H%，S%，L% 六种格式：当字符串以 px 结尾，表示水印 Width 单位为像素，如 100px 表示 Width 为 100 像素；当填 0px 且 Height 不为 0px 时，表示水印的宽度按原始 SVG 图像等比缩放；当 Width、Height 都填 0px 时，表示水印的宽度取原始 SVG 图像的宽度；当字符串以 W% 结尾，表示水印 Width 为视频宽度的百分比大小，如 10W% 表示 Width 为视频宽度的 10%；当字符串以 H% 结尾，表示水印 Width 为视频高度的百分比大小，如 10H% 表示 Width 为视频高度的 10%；当字符串以 S% 结尾，表示水印 Width 为视频短边的百分比大小，如 10S% 表示 Width 为视频短边的 10%；当字符串以 L% 结尾，表示水印 Width 为视频长边的百分比大小，如 10L% 表示 Width 为视频长边的 10%；当字符串以 % 结尾时，含义同 W%。默认值为 10W%。 */
    Width?: string;
    /** 水印的高度，支持 px，%，W%，H%，S%，L% 六种格式：当字符串以 px 结尾，表示水印 Height 单位为像素，如 100px 表示 Height 为 100 像素；当填 0px 且 Width 不为 0px 时，表示水印的高度按原始 SVG 图像等比缩放；当 Width、Height 都填 0px 时，表示水印的高度取原始 SVG 图像的高度；当字符串以 W% 结尾，表示水印 Height 为视频宽度的百分比大小，如 10W% 表示 Height 为视频宽度的 10%；当字符串以 H% 结尾，表示水印 Height 为视频高度的百分比大小，如 10H% 表示 Height 为视频高度的 10%；当字符串以 S% 结尾，表示水印 Height 为视频短边的百分比大小，如 10S% 表示 Height 为视频短边的 10%；当字符串以 L% 结尾，表示水印 Height 为视频长边的百分比大小，如 10L% 表示 Height 为视频长边的 10%；当字符串以 % 结尾时，含义同 H%。默认值为 0px。 */
    Height?: string;
    /** 水印周期配置，用于配置水印周期性地显示与隐藏。主要使用场景是：为了视频防遮标，在视频多个地方设置水印，这些水印按固定顺序周期性地显示与隐藏。例如，设置 A、B、C、D 4 个水印分别位于视频的左上角、右上角、右下角、左下角处，视频开始时，{ A 显示 5 秒 -> B 显示 5 秒 -> C 显示 5 秒 -> D 显示 5 秒 } -> A 显示 5 秒 -> B 显示 5 秒 -> ...，任何时刻只显示一处水印。花括号 {} 表示由 A、B、C、D 4 个水印组成的大周期，可以看出每个大周期持续 20 秒。可以看出，A、B、C、D 都是周期性地显示 5 秒、隐藏 15 秒，且四者有固定的显示顺序。此配置项即用来描述单个水印的周期配置。 */
    CycleConfig?: WatermarkCycleConfigForUpdate | null;
  }

  /** 极速高清参数配置。 */
  interface TEHDConfig {
    /** 极速高清类型，可选值：TEHD-100 表示极速高清-100; OFF 表示关闭极速高清。不填表示 OFF。 */
    Type: string;
    /** 视频码率上限，当 Type 指定了极速高清类型时有效。不填或填0表示由云点播自动设置码率上限。 */
    MaxVideoBitrate?: number;
  }

  /** 极速高清参数配置。 */
  interface TEHDConfigForUpdate {
    /** 极速高清类型，可选值：TEHD-100 表示极速高清-100; OFF 表示关闭极速高清。不填表示不修改。 */
    Type?: string;
    /** 视频码率上限，不填代表不修改。 */
    MaxVideoBitrate?: number;
  }

  /** 智能标签任务控制参数 */
  interface TagConfigureInfo {
    /** 智能标签任务开关，可选值：ON：开启智能标签任务；OFF：关闭智能标签任务。 */
    Switch: string;
  }

  /** 智能标签任务控制参数 */
  interface TagConfigureInfoForUpdate {
    /** 智能标签任务开关，可选值：ON：开启智能标签任务；OFF：关闭智能标签任务。 */
    Switch?: string;
  }

  /** 视频处理任务的输出媒体文件信息 */
  interface TaskOutputMediaInfo {
    /** 媒体文件 ID。 */
    FileId?: string;
    /** 转拉完成后生成的媒体文件基础信息。 */
    MediaBasicInfo?: MediaBasicInfo;
  }

  /** 任务概要信息 */
  interface TaskSimpleInfo {
    /** 任务 ID。 */
    TaskId?: string;
    /** 任务状态。取值：WAITING（等待中）、PROCESSING（处理中）、FINISH（已完成）、ABORTED（已终止）。 */
    Status?: string;
    /** 视频 ID。 */
    FileId?: string;
    /** 任务类型，取值：Procedure：视频处理任务；EditMedia：视频编辑任务；ReduceMediaBitrate：降码率任务；WechatDistribute：微信发布任务；ReviewAudioVideo：音视频审核任务。兼容 2017 版的任务类型：Transcode：视频转码任务；SnapshotByTimeOffset：视频截图任务；Concat：视频拼接任务；Clip：视频剪辑任务；ImageSprites：截取雪碧图任务。 */
    TaskType?: string;
    /** 任务创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    CreateTime?: string;
    /** 任务开始执行时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。若任务尚未开始，该字段为空。 */
    BeginProcessTime?: string;
    /** 任务结束时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。若任务尚未完成，该字段为空。 */
    FinishTime?: string;
    /** 用于去重的识别码，如果七天内曾有过相同的识别码的请求。 */
    SessionId?: string;
    /** 来源上下文，用于透传用户请求信息。 */
    SessionContext?: string;
  }

  /** 视频处理任务统计数据。 */
  interface TaskStatData {
    /** 任务类型。 Transcoding: 普通转码 Transcoding-TESHD: 极速高清转码 Editing: 视频编辑 Editing-TESHD: 极速高清视频编辑 AdaptiveBitrateStreaming: 自适应码流 ContentAudit: 内容审核 ContentRecognition: 内容识别 RemoveWatermark: 去水印 ExtractTraceWatermark: 提取水印 AddTraceWatermark: 添加水印 RebuildMedia: 音画质重生 QualityInspect: 音画质检测Transcode: 转码，包含普通转码、极速高清和视频编辑（不推荐使用）VoiceTranslation: 语音翻译JITTranscoding: 即时转码VideoSnapshot: 视频截图JITEncryption: 即时加密 */
    TaskType?: string;
    /** 任务数统计数据概览，用量单位为秒。 */
    Summary?: TaskStatDataItem[];
    /** 不同规格任务统计数据详情。转码规格：Remuxing: 转封装Audio: 音频转码Standard.H264.SD: H.264编码方式标清转码Standard.H264.HD: H.264编码方式高清转码Standard.H264.FHD: H.264编码方式全高清转码Standard.H264.2K: H.264编码方式2K转码Standard.H264.4K: H.264编码方式4K转码Standard.H265.SD: H.265编码方式标清转码Standard.H265.HD: H.265编码方式高清转码Standard.H265.FHD: H.265编码方式全高清转码Standard.H265.2K: H.265编码方式2K转码Standard.H265.4K: H.265编码方式4K转码TESHD-10.H264.SD: H.264编码方式标清极速高清转码TESHD-10.H264.HD: H.264编码方式高清极速高清转码TESHD-10.H264.FHD: H.264编码方式全高清极速高清转码TESHD-10.H264.2K: H.264编码方式2K极速高清转码TESHD-10.H264.4K: H.264编码方式4K极速高清转码TESHD-10.H265.SD: H.265编码方式标清极速高清转码TESHD-10.H265.HD: H.265编码方式高清极速高清转码TESHD-10.H265.FHD: H.265编码方式全高清极速高清转码TESHD-10.H265.2K: H.265编码方式2K极速高清转码TESHD-10.H265.4K: H.265编码方式4K极速高清转码Edit.Audio: 音频编辑Edit.H264.SD: H.264编码方式标清视频编辑Edit.H264.HD: H.264编码方式高清视频编辑Edit.H264.FHD: H.264编码方式全高清视频编辑Edit.H264.2K: H.264编码方式2K视频编辑Edit.H264.4K: H.264编码方式4K视频编辑Edit.H265.SD: H.265编码方式标清视频编辑Edit.H265.HD: H.265编码方式高清视频编辑Edit.H265.FHD: H.265编码方式全高清视频编辑Edit.H265.2K: H.265编码方式2K视频编辑Edit.H265.4K: H.265编码方式4K视频编辑Edit.TESHD-10.H264.SD: H.264编码方式标清极速高清视频编辑Edit.TESHD-10.H264.HD: H.264编码方式高清极速高清视频编辑Edit.TESHD-10.H264.FHD: H.264编码方式全高清极速高清视频编辑Edit.TESHD-10.H264.2K: H.264编码方式2K极速高清视频编辑Edit.TESHD-10.H264.4K: H.264编码方式4K极速高清视频编辑Edit.TESHD-10.H265.SD: H.265编码方式标清极速高清视频编辑Edit.TESHD-10.H265.HD: H.265编码方式高清极速高清视频编辑Edit.TESHD-10.H265.FHD: H.265编码方式全高清极速高清视频编辑Edit.TESHD-10.H265.2K: H.265编码方式2K极速高清视频编辑Edit.TESHD-10.H265.4K: H.265编码方式4K极速高清视频编辑去水印、音画质重生规格：480P: 短边 ≤ 480px720P: 短边 ≤ 720px1080P: 短边 ≤ 1080px2K: 短边 ≤ 1440px4K: 短边 ≤ 2160px8K: 短边 ≤ 4320pxAudio: 音频即时转码规格：JITTranscoding.H264.SD: H.264编码方式标清即时转码JITTranscoding.H264.HD: H.264编码方式高清即时转码JITTranscoding.H264.FHD: H.264编码方式全高清即时转码JITTranscoding.H264.2K: H.264编码方式2K即时转码JITTranscoding.Audio: 音频即时转码JITTranscoding.Copy: 转封装即时转码视频截图规格：SnapshotByTimeOffset: 时间点截图SampleSnapshot: 采样截图ImageSprite: 雪碧图 */
    Details?: SpecificationDataItem[];
  }

  /** 任务统计数据，包括任务数和用量。 */
  interface TaskStatDataItem {
    /** 数据所在时间区间的开始时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。如：当时间粒度为天，2018-12-01T00:00:00+08:00，表示2018年12月1日（含）到2018年12月2日（不含）区间。 */
    Time?: string;
    /** 任务数。 */
    Count?: number;
    /** 任务用量。 */
    Usage?: number;
  }

  /** 临时凭证 */
  interface TempCertificate {
    /** 临时安全证书 Id。 */
    SecretId?: string;
    /** 临时安全证书 Key。 */
    SecretKey?: string;
    /** Token 值。 */
    Token?: string;
    /** 证书无效的时间，返回 Unix 时间戳，精确到秒。 */
    ExpiredTime?: number;
  }

  /** 鉴别涉及令人不安全的信息的任务控制参数 */
  interface TerrorismConfigureInfo {
    /** 画面鉴别涉及令人不安全的信息的任务控制参数。 */
    ImgReviewInfo?: TerrorismImgReviewTemplateInfo;
    /** 文字鉴别涉及令人不安全的信息的任务控制参数。 */
    OcrReviewInfo?: TerrorismOcrReviewTemplateInfo;
  }

  /** 鉴别涉及令人不安全的信息的任务控制参数。 */
  interface TerrorismConfigureInfoForUpdate {
    /** 画面鉴别涉及令人不安全的信息的任务控制参数。 */
    ImgReviewInfo?: TerrorismImgReviewTemplateInfoForUpdate;
    /** 文本鉴别涉及令人不安全的信息的任务控制参数。 */
    OcrReviewInfo?: TerrorismOcrReviewTemplateInfoForUpdate;
  }

  /** 图片画面审核涉及令人不安全的信息的任务结果类型 */
  interface TerrorismImageResult {
    /** 鉴别涉及令人不安全的信息的评分，分值为0到100。 */
    Confidence?: number;
    /** 鉴别涉及令人不安全的信息的结果建议，取值范围：pass；review；block。 */
    Suggestion?: string;
    /** 鉴别涉及令人不安全的信息的结果标签，取值范围：guns：武器枪支；crowd：人群聚集；police：警察部队；bloody：血腥画面；banners：暴恐旗帜；explosion：爆炸火灾；scenario：暴恐画面。 */
    Label?: string;
  }

  /** 画面鉴别涉及令人不安全的信息的任务控制参数 */
  interface TerrorismImgReviewTemplateInfo {
    /** 画面鉴别涉及令人不安全的信息的任务开关，可选值：ON：开启画面鉴别涉及令人不安全的信息的任务；OFF：关闭画面鉴别涉及令人不安全的信息的任务。 */
    Switch: string;
    /** 画面鉴别涉及令人不安全的信息的过滤标签，审核结果包含选择的标签则返回结果，如果过滤标签为空，则审核结果全部返回，可选值为：guns：武器枪支；crowd：人群聚集；bloody：血腥画面；police：警察部队；banners：暴恐旗帜；militant：武装分子；explosion：爆炸火灾；terrorists：暴恐人物；scenario：暴恐画面。 */
    LabelSet?: string[];
    /** 判定涉嫌违规的分数阈值，当审核达到该分数以上，认为涉嫌违规，不填默认为 90 分。取值范围：0~100。 */
    BlockConfidence?: number;
    /** 判定需人工复核是否违规的分数阈值，当审核达到该分数以上，认为需人工复核，不填默认为 80 分。取值范围：0~100。 */
    ReviewConfidence?: number;
  }

  /** 画面鉴别涉及令人不安全的信息的任务控制参数。 */
  interface TerrorismImgReviewTemplateInfoForUpdate {
    /** 画面鉴别涉及令人不安全的信息的任务开关，可选值：ON：开启画面鉴别涉及令人不安全的信息的任务；OFF：关闭画面鉴别涉及令人不安全的信息的任务。 */
    Switch?: string;
    /** 画面鉴别涉及令人不安全的信息的过滤标签，审核结果包含选择的标签则返回结果，如果过滤标签为空，则审核结果全部返回，可选值为：guns：武器枪支；crowd：人群聚集；bloody：血腥画面；police：警察部队；banners：暴恐旗帜；militant：武装分子；explosion：爆炸火灾；terrorists：暴恐人物；scenario：暴恐画面。 */
    LabelSet?: string[];
    /** 判定涉嫌违规的分数阈值，当审核达到该分数以上，认为涉嫌违规。取值范围：0~100。 */
    BlockConfidence?: number;
    /** 判定需人工复核是否违规的分数阈值，当审核达到该分数以上，认为需人工复核。取值范围：0~100。 */
    ReviewConfidence?: number;
  }

  /** 文本鉴别涉及令人不安全的信息的任务控制参数 */
  interface TerrorismOcrReviewTemplateInfo {
    /** 文本鉴别涉及令人不安全的信息的任务开关，可选值：ON：开启文本鉴别涉及令人不安全的信息的任务；OFF：关闭文本鉴别涉及令人不安全的信息的任务。 */
    Switch: string;
    /** 判定涉嫌违规的分数阈值，当审核达到该分数以上，认为涉嫌违规，不填默认为 100 分。取值范围：0~100。 */
    BlockConfidence?: number;
    /** 判定需人工复核是否违规的分数阈值，当审核达到该分数以上，认为需人工复核，不填默认为 75 分。取值范围：0~100。 */
    ReviewConfidence?: number;
  }

  /** 文本鉴别涉及令人不安全的信息的任务控制参数 */
  interface TerrorismOcrReviewTemplateInfoForUpdate {
    /** 文本鉴别涉及令人不安全的信息的任务开关，可选值：ON：开启文本鉴别涉及令人不安全的信息的任务；OFF：关闭文本鉴别涉及令人不安全的信息的任务。 */
    Switch?: string;
    /** 判定涉嫌违规的分数阈值，当审核达到该分数以上，认为涉嫌违规，不填默认为 100 分。取值范围：0~100。 */
    BlockConfidence?: number;
    /** 判定需人工复核是否违规的分数阈值，当审核达到该分数以上，认为需人工复核，不填默认为 75 分。取值范围：0~100。 */
    ReviewConfidence?: number;
  }

  /** 文字水印模板 */
  interface TextWatermarkTemplateInput {
    /** 字体类型，目前可以支持两种：simkai.ttf：可以支持中文和英文；arial.ttf：仅支持英文。 */
    FontType: string;
    /** 字体大小，格式：Npx，N 为数值。 */
    FontSize: string;
    /** 字体颜色，格式：0xRRGGBB，默认值：0xFFFFFF（白色）。 */
    FontColor: string;
    /** 文字透明度，取值范围：(0, 1]0：完全透明1：完全不透明默认值：1。 */
    FontAlpha: number;
  }

  /** 文字水印模板 */
  interface TextWatermarkTemplateInputForUpdate {
    /** 字体类型，目前可以支持两种：simkai.ttf：可以支持中文和英文；arial.ttf：仅支持英文。 */
    FontType?: string;
    /** 字体大小，格式：Npx，N 为数值。 */
    FontSize?: string;
    /** 字体颜色，格式：0xRRGGBB，默认值：0xFFFFFF（白色）。 */
    FontColor?: string;
    /** 文字透明度，取值范围：(0, 1]0：完全透明1：完全不透明 */
    FontAlpha?: number;
  }

  /** 用于描述一个时间段的通用数据类型。 */
  interface TimeRange {
    /** 大于等于此时间（起始时间）。格式按照 ISO 8601标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732)。 */
    After?: string;
    /** 小于此时间（结束时间）。格式按照 ISO 8601标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732)。 */
    Before?: string;
  }

  /** 溯源水印参数 */
  interface TraceWatermarkInput {
    /** 溯源水印任务开关，此字段必填，可选值：ON：开启溯源水印；OFF：关闭溯源水印。 */
    Switch?: string;
    /** 该字段已废弃，请勿使用。 */
    Definition?: number;
  }

  /** 视频转码播放信息（2017 版） */
  interface TranscodePlayInfo2017 {
    /** 播放地址。 */
    Url?: string;
    /** 转码规格 ID，参见[转码参数模板](https://cloud.tencent.com/document/product/266/33476)。 */
    Definition?: number;
    /** 视频流码率平均值与音频流码率平均值之和， 单位：bps。 */
    Bitrate?: number;
    /** 视频流高度的最大值，单位：px。 */
    Height?: number;
    /** 视频流宽度的最大值，单位：px。 */
    Width?: number;
  }

  /** 视频转码任务信息，该结构仅用于对 2017 版[视频转码](https://cloud.tencent.com/document/product/266/7822)接口发起的任务。 */
  interface TranscodeTask2017 {
    /** 转码任务 ID。 */
    TaskId?: string;
    /** 错误码0：成功；其他值：失败。 */
    ErrCode?: number;
    /** 错误信息。 */
    Message?: string;
    /** 被转码文件 ID。 */
    FileId?: string;
    /** 被转码文件名称。 */
    FileName?: string;
    /** 视频时长，单位：秒。 */
    Duration?: number;
    /** 封面地址。 */
    CoverUrl?: string;
    /** 视频转码后生成的播放信息。 */
    PlayInfoSet?: TranscodePlayInfo2017[];
  }

  /** 转码任务输入参数类型 */
  interface TranscodeTaskInput {
    /** 视频转码模板 ID。 */
    Definition: number;
    /** 水印列表，支持多张图片或文字水印，最大可支持 10 张。 */
    WatermarkSet?: WatermarkInput[];
    /** 溯源水印。 */
    TraceWatermark?: TraceWatermarkInput;
    /** 版权水印。 */
    CopyRightWatermark?: CopyRightWatermarkInput;
    /** 马赛克列表，最大可支持 10 张。 */
    MosaicSet?: MosaicInput[];
    /** 片头片尾列表，支持多片头片尾，最大可支持 10 个。 */
    HeadTailSet?: HeadTailTaskInput[];
    /** 转码后的视频的起始时间偏移，单位：秒。不填或填0，表示转码后的视频从原始视频的起始位置开始；当数值大于0时（假设为 n），表示转码后的视频从原始视频的第 n 秒位置开始；当数值小于0时（假设为 -n），表示转码后的视频从原始视频结束 n 秒前的位置开始。 */
    StartTimeOffset?: number;
    /** 转码后视频的终止时间偏移，单位：秒。不填或填0，表示转码后的视频持续到原始视频的末尾终止；当数值大于0时（假设为 n），表示转码后的视频持续到原始视频第 n 秒时终止；当数值小于0时（假设为 -n），表示转码后的视频持续到原始视频结束 n 秒前终止。 */
    EndTimeOffset?: number;
  }

  /** 转码模板详情 */
  interface TranscodeTemplate {
    /** 转码模板唯一标识。 */
    Definition?: string;
    /** 封装格式，取值：mp4、flv、hls、mp3、flac、ogg。 */
    Container?: string;
    /** 转码模板名称。 */
    Name?: string;
    /** 模板描述信息。 */
    Comment?: string;
    /** 模板类型，取值：Preset：系统预置模板；Custom：用户自定义模板。 */
    Type?: string;
    /** 是否去除视频数据，取值：0：保留；1：去除。 */
    RemoveVideo?: number;
    /** 是否去除音频数据，取值：0：保留；1：去除。 */
    RemoveAudio?: number;
    /** 视频流配置参数，仅当 RemoveVideo 为 0，该字段有效。 */
    VideoTemplate?: VideoTemplateInfo;
    /** 音频流配置参数，仅当 RemoveAudio 为 0，该字段有效 。 */
    AudioTemplate?: AudioTemplateInfo;
    /** 极速高清转码参数。 */
    TEHDConfig?: TEHDConfig | null;
    /** 封装格式过滤条件，可选值：Video：视频格式，可以同时包含视频流和音频流的封装格式；PureAudio：纯音频格式，只能包含音频流的封装格式板。 */
    ContainerType?: string;
    /** 模板创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    CreateTime?: string;
    /** 模板最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    UpdateTime?: string;
    /** 切片类型，仅当 Container 为 hls 时有效。 */
    SegmentType?: string;
  }

  /** 转场操作 */
  interface TransitionOperation {
    /** 转场类型，取值有：图像的转场操作，用于两个视频片段图像间的转场处理：ImageFadeInFadeOut：图像淡入淡出。 BowTieHorizontal：水平蝴蝶结。 BowTieVertical：垂直蝴蝶结。 ButterflyWaveScrawler：晃动。 Cannabisleaf：枫叶。 Circle：弧形收放。 CircleCrop：圆环聚拢。 Circleopen：椭圆聚拢。 Crosswarp：横向翘曲。 Cube：立方体。 DoomScreenTransition：幕布。 Doorway：门廊。 Dreamy：波浪。 DreamyZoom：水平聚拢。 FilmBurn：火烧云。 GlitchMemories：抖动。 Heart：心形。 InvertedPageCurl：翻页。 Luma：腐蚀。 Mosaic：九宫格。 Pinwheel：风车。 PolarFunction：椭圆扩散。 PolkaDotsCurtain：弧形扩散。 Radial：雷达扫描 RotateScaleFade：上下收放。 Squeeze：上下聚拢。 Swap：放大切换。 Swirl：螺旋。 UndulatingBurnOutSwirl：水流蔓延。 Windowblinds：百叶窗。 WipeDown：向下收起。 WipeLeft：向左收起。 WipeRight：向右收起。 WipeUp：向上收起。 ZoomInCircles：水波纹。 音频的转场操作，用于两个音频片段间的转场处理：AudioFadeInFadeOut：声音淡入淡出。 */
    Type: string;
  }

  /** 转场操作 */
  interface TransitionOpertion {
    /** 转场类型，取值有：图像的转场操作，用于两个视频片段图像间的转场处理：ImageFadeInFadeOut：图像淡入淡出。 BowTieHorizontal：水平蝴蝶结。 BowTieVertical：垂直蝴蝶结。 ButterflyWaveScrawler：晃动。 Cannabisleaf：枫叶。 Circle：弧形收放。 CircleCrop：圆环聚拢。 Circleopen：椭圆聚拢。 Crosswarp：横向翘曲。 Cube：立方体。 DoomScreenTransition：幕布。 Doorway：门廊。 Dreamy：波浪。 DreamyZoom：水平聚拢。 FilmBurn：火烧云。 GlitchMemories：抖动。 Heart：心形。 InvertedPageCurl：翻页。 Luma：腐蚀。 Mosaic：九宫格。 Pinwheel：风车。 PolarFunction：椭圆扩散。 PolkaDotsCurtain：弧形扩散。 Radial：雷达扫描 RotateScaleFade：上下收放。 Squeeze：上下聚拢。 Swap：放大切换。 Swirl：螺旋。 UndulatingBurnOutSwirl：水流蔓延。 Windowblinds：百叶窗。 WipeDown：向下收起。 WipeLeft：向左收起。 WipeRight：向右收起。 WipeUp：向上收起。 ZoomInCircles：水波纹。 音频的转场操作，用于两个音频片段间的转场处理：AudioFadeInFadeOut：声音淡入淡出。 */
    Type: string;
  }

  /** TRTC伴生录制信息。 */
  interface TrtcRecordInfo {
    /** TRTC 应用 ID。 */
    SdkAppId?: number;
    /** TRTC 房间 ID。 */
    RoomId?: string;
    /** 录制任务 ID。 */
    TaskId?: string;
    /** 参与录制的用户 ID 列表。 */
    UserIds?: string[];
  }

  /** 基于签名的 Key 防盗链信息 */
  interface UrlSignatureAuthPolicy {
    /** [Key 防盗链](https://cloud.tencent.com/document/product/266/14047)设置状态，可选值：Enabled: 启用。Disabled: 禁用。 */
    Status: string;
    /** [Key 防盗链](https://cloud.tencent.com/document/product/266/14047)中用于生成签名的密钥。EncryptedKey 字符串的长度为8~40个字节，不能包含不可见字符。 */
    EncryptedKey?: string;
  }

  /** 用户自定义语音审核任务控制参数 */
  interface UserDefineAsrTextReviewTemplateInfo {
    /** 用户自定语音审核任务开关，可选值：ON：开启自定义语音审核任务；OFF：关闭自定义语音审核任务。 */
    Switch: string;
    /** 用户自定义语音过滤标签，审核结果包含选择的标签则返回结果，如果过滤标签为空，则审核结果全部返回。如果要使用标签过滤功能，添加自定义语音关键词素材时需要添加对应标签。标签个数最多 10 个，每个标签长度最多 16 个字符。 */
    LabelSet?: string[];
    /** 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规，不填默认为 100 分。取值范围：0~100。 */
    BlockConfidence?: number;
    /** 判定需人工复核是否违规的分数阈值，当审核达到该分数以上，认为需人工复核，不填默认为 75 分。取值范围：0~100。 */
    ReviewConfidence?: number;
  }

  /** 用户自定义语音审核任务控制参数 */
  interface UserDefineAsrTextReviewTemplateInfoForUpdate {
    /** 用户自定语音审核任务开关，可选值：ON：开启自定义语音审核任务；OFF：关闭自定义语音审核任务。 */
    Switch?: string;
    /** 用户自定义语音过滤标签，审核结果包含选择的标签则返回结果，如果过滤标签为空，则审核结果全部返回。如果要使用标签过滤功能，添加自定义语音关键词素材时需要添加对应标签。标签个数最多 10 个，每个标签长度最多 16 个字符。 */
    LabelSet?: string[];
    /** 判定涉嫌违规的分数阈值，当审核达到该分数以上，认为涉嫌违规。取值范围：0~100。 */
    BlockConfidence?: number;
    /** 判定需人工复核是否违规的分数阈值，当审核达到该分数以上，认为需人工复核。取值范围：0~100。 */
    ReviewConfidence?: number;
  }

  /** 用户自定义音视频审核任务控制参数 */
  interface UserDefineConfigureInfo {
    /** 用户自定义人物音视频审核控制参数。 */
    FaceReviewInfo?: UserDefineFaceReviewTemplateInfo;
    /** 用户自定义语音音视频审核控制参数。 */
    AsrReviewInfo?: UserDefineAsrTextReviewTemplateInfo;
    /** 用户自定义文本音视频审核控制参数。 */
    OcrReviewInfo?: UserDefineOcrTextReviewTemplateInfo;
  }

  /** 用户自定义音视频审核任务控制参数。 */
  interface UserDefineConfigureInfoForUpdate {
    /** 用户自定义人物音视频审核控制参数。 */
    FaceReviewInfo?: UserDefineFaceReviewTemplateInfoForUpdate;
    /** 用户自定义语音音视频审核控制参数。 */
    AsrReviewInfo?: UserDefineAsrTextReviewTemplateInfoForUpdate;
    /** 用户自定义文本音视频审核控制参数。 */
    OcrReviewInfo?: UserDefineOcrTextReviewTemplateInfoForUpdate;
  }

  /** 用户自定义人物音视频审核任务控制参数 */
  interface UserDefineFaceReviewTemplateInfo {
    /** 用户自定义人物音视频审核任务开关，可选值：ON：开启自定义人物音视频审核任务；OFF：关闭自定义人物音视频审核任务。 */
    Switch: string;
    /** 用户自定义人物过滤标签，音视频审核结果包含选择的标签则返回结果，如果过滤标签为空，则审核结果全部返回。如果要使用标签过滤功能，添加自定义人物库的时，需要添加对应人物标签。标签个数最多 10 个，每个标签长度最多 16 个字符。 */
    LabelSet?: string[];
    /** 判定涉嫌违规的分数阈值，当审核达到该分数以上，认为涉嫌违规，不填默认为 97 分。取值范围：0~100。 */
    BlockConfidence?: number;
    /** 判定需人工复核是否违规的分数阈值，当审核达到该分数以上，认为需人工复核，不填默认为 95 分。取值范围：0~100。 */
    ReviewConfidence?: number;
  }

  /** 用户自定义人物音视频审核任务控制参数。 */
  interface UserDefineFaceReviewTemplateInfoForUpdate {
    /** 用户自定义人物音视频审核任务开关，可选值：ON：开启自定义人物音视频审核任务；OFF：关闭自定义人物音视频审核任务。 */
    Switch?: string;
    /** 用户自定义人物过滤标签，音视频审核结果包含选择的标签则返回结果，如果过滤标签为空，则音视频审核结果全部返回。如果要使用标签过滤功能，添加自定义人物库的时，需要添加对应人物标签。标签个数最多 10 个，每个标签长度最多 16 个字符。 */
    LabelSet?: string[];
    /** 判定涉嫌违规的分数阈值，当音视频审核达到该分数以上，认为涉嫌违规。取值范围：0~100。 */
    BlockConfidence?: number;
    /** 判定需人工复核是否违规的分数阈值，当音视频审核达到该分数以上，认为需人工复核。取值范围：0~100。 */
    ReviewConfidence?: number;
  }

  /** 用户自定义文本音视频审核任务控制参数 */
  interface UserDefineOcrTextReviewTemplateInfo {
    /** 用户自定文本音视频审核任务开关，可选值：ON：开启自定义文本音视频审核任务；OFF：关闭自定义文本音视频审核任务。 */
    Switch: string;
    /** 用户自定义文本过滤标签，音视频审核结果包含选择的标签则返回结果，如果过滤标签为空，则音视频审核结果全部返回。如果要使用标签过滤功能，添加自定义文本关键词素材时需要添加对应标签。标签个数最多 10 个，每个标签长度最多 16 个字符。 */
    LabelSet?: string[];
    /** 判定涉嫌违规的分数阈值，当审核达到该分数以上，认为涉嫌违规，不填默认为 100 分。取值范围：0~100。 */
    BlockConfidence?: number;
    /** 判定需人工复核是否违规的分数阈值，当审核达到该分数以上，认为需人工复核，不填默认为 75 分。取值范围：0~100。 */
    ReviewConfidence?: number;
  }

  /** 用户自定义文本音视频审核任务控制参数。 */
  interface UserDefineOcrTextReviewTemplateInfoForUpdate {
    /** 用户自定文本音视频审核任务开关，可选值：ON：开启自定义文本音视频审核任务；OFF：关闭自定义文本音视频审核任务。 */
    Switch?: string;
    /** 用户自定义文本过滤标签，音视频审核结果包含选择的标签则返回结果，如果过滤标签为空，则音视频审核结果全部返回。如果要使用标签过滤功能，添加自定义文本关键词素材时需要添加对应标签。标签个数最多 10 个，每个标签长度最多 16 个字符。 */
    LabelSet?: string[];
    /** 判定涉嫌违规的分数阈值，当审核达到该分数以上，认为涉嫌违规。取值范围：0~100。 */
    BlockConfidence?: number;
    /** 判定需人工复核是否违规的分数阈值，当审核达到该分数以上，认为需人工复核。取值范围：0~100。 */
    ReviewConfidence?: number;
  }

  /** 即时转码视频模板配置。 */
  interface VideoConfigureInfo {
    /** 视频流宽度（或长边）的最大值，取值范围：0 和 [128, 1920]，单位：px。当 Width、Height 均为 0，则分辨率同源；当 Width 为 0，Height 非 0，则 Width 按比例缩放；当 Width 非 0，Height 为 0，则 Height 按比例缩放；当 Width、Height 均非 0，则分辨率按用户指定。默认值：0。 */
    Width?: number;
    /** 视频流高度（或短边）的最大值，取值范围：0 和 [128, 1920]，单位：px。当 Width、Height 均为 0，则分辨率同源；当 Width 为 0，Height 非 0，则 Width 按比例缩放；当 Width 非 0，Height 为 0，则 Height 按比例缩放；当 Width、Height 均非 0，则分辨率按用户指定。默认值：0。 */
    Height?: number;
    /** 分辨率自适应，可选值：open：开启，此时，Width 代表视频的长边，Height 表示视频的短边；close：关闭，此时，Width 代表视频的宽度，Height 表示视频的高度。默认值：open。 */
    ResolutionAdaptive?: string;
    /** 视频流的码率，取值范围：0 和 [128, 10000]，单位：kbps。当取值为 0，表示由云点播自动设置码率。 */
    Bitrate?: number;
  }

  /** 即时转码视频模板更新配置。 */
  interface VideoConfigureInfoForUpdate {
    /** 视频流宽度（或长边）的最大值，取值范围：0 和 [128, 1920]，单位：px。当 Width、Height 均为 0，则分辨率同源；当 Width 为 0，Height 非 0，则 Width 按比例缩放；当 Width 非 0，Height 为 0，则 Height 按比例缩放；当 Width、Height 均非 0，则分辨率按用户指定。默认值：0。 */
    Width?: number;
    /** 视频流高度（或短边）的最大值，取值范围：0 和 [128, 1920]，单位：px。当 Width、Height 均为 0，则分辨率同源；当 Width 为 0，Height 非 0，则 Width 按比例缩放；当 Width 非 0，Height 为 0，则 Height 按比例缩放；当 Width、Height 均非 0，则分辨率按用户指定。默认值：0。 */
    Height?: number;
    /** 分辨率自适应，可选值：open：开启，此时，Width 代表视频的长边，Height 表示视频的短边；close：关闭，此时，Width 代表视频的宽度，Height 表示视频的高度。默认值：open。 */
    ResolutionAdaptive?: string;
    /** 视频流的码率，取值范围：0 和 [128, 10000]，单位：kbps。当取值为 0，表示由云点播自动设置码率。 */
    Bitrate?: number;
  }

  /** 视频降噪控制参数 */
  interface VideoDenoiseInfo {
    /** 视频降噪控制开关，可选值：ON：开启视频降噪；OFF：关闭视频降噪。 */
    Switch: string;
    /** 视频降噪类型，仅当视频降噪控制开关为 ON 时有效，可选值：weak：轻视频降噪；strong：强视频降噪。默认值：weak。 */
    Type?: string;
  }

  /** 智能插帧控制参数 */
  interface VideoFrameInterpolationInfo {
    /** 智能插帧控制开关，可选值：ON：开启智能插帧；OFF：关闭智能插帧。 */
    Switch: string;
    /** 智能插帧帧率，帧率范围为 (0, 100]，仅当智能插帧控制开关为 ON 时有效。默认跟源文件帧率一致。 */
    Fps?: number;
  }

  /** 视频流配置参数 */
  interface VideoTemplateInfo {
    /** 视频流的编码格式，可选值：libx264：H.264 编码；libx265：H.265 编码；av1：AOMedia Video 1 编码；H.266：H.266 编码。注意： av1，H.266 编码容器目前只支持 mp4 ； H.266 目前只支持恒定 CRF 码率控制方式。 */
    Codec: string;
    /** 视频帧率，取值范围：[0, 100]，单位：Hz。当取值为 0，表示帧率和原始视频保持一致。 */
    Fps: number;
    /** 视频流的码率，取值范围：0 和 [128, 100000]，单位：kbps。当取值为 0，表示由云点播自动设置码率。 */
    Bitrate: number;
    /** 分辨率自适应，可选值：open：开启，此时，Width 代表视频的长边，Height 表示视频的短边；close：关闭，此时，Width 代表视频的宽度，Height 表示视频的高度。默认值：open。 */
    ResolutionAdaptive?: string;
    /** 视频流宽度（或长边）的最大值，取值范围：0 和 [128, 8192]，单位：px。当 Width、Height 均为 0，则分辨率同源；当 Width 为 0，Height 非 0，则 Width 按比例缩放；当 Width 非 0，Height 为 0，则 Height 按比例缩放；当 Width、Height 均非 0，则分辨率按用户指定。默认值：0。 */
    Width?: number;
    /** 视频流高度（或短边）的最大值，取值范围：0 和 [128, 8192]，单位：px。当 Width、Height 均为 0，则分辨率同源；当 Width 为 0，Height 非 0，则 Width 按比例缩放；当 Width 非 0，Height 为 0，则 Height 按比例缩放；当 Width、Height 均非 0，则分辨率按用户指定。默认值：0。 */
    Height?: number;
    /** 填充方式，当视频流配置宽高参数与原始视频的宽高比不一致时，对转码的处理方式，即为“填充”。可选填充方式： stretch：拉伸，对每一帧进行拉伸，填满整个画面，可能导致转码后的视频被“压扁“或者“拉长“；black：留黑，保持视频宽高比不变，边缘剩余部分使用黑色填充。white：留白，保持视频宽高比不变，边缘剩余部分使用白色填充。gauss：高斯模糊，保持视频宽高比不变，边缘剩余部分使用高斯模糊填充。默认值：black 。 */
    FillType?: string;
    /** 视频恒定码率控制因子，取值范围为[1, 51]。注意：如果指定该参数，将使用 CRF 的码率控制方式做转码（视频码率将不再生效）；当指定视频流编码格式为 H.266 时，该字段必填，推荐值为 28；如果没有特殊需求，不建议指定该参数。 */
    Vcrf?: number;
    /** 关键帧 I 帧之间的间隔，取值范围：0 和 [1, 100000]，单位：帧数。当填 0 或不填时，系统将自动设置 gop 长度。 */
    Gop?: number;
    /** 当原始视频为 HDR（High Dynamic Range）时，转码输出是否依然保持 HDR。取值范围：ON: 如果原始文件是 HDR，则转码输出保持 HDR；否则转码输出为 SDR （Standard Dynamic Range）。OFF: 无论原始文件是 HDR 还是 SDR，转码输出均为 SDR。默认值：OFF。 */
    PreserveHDRSwitch?: string;
    /** 编码标签，仅当视频流的编码格式为 H.265 编码时有效，可选值：hvc1 表示 hvc1 标签；hev1 表示 hev1 标签。 默认值：hvc1。 */
    CodecTag?: string;
  }

  /** 视频流配置参数 */
  interface VideoTemplateInfoForUpdate {
    /** 视频流的编码格式，可选值：libx264：H.264 编码；libx265：H.265 编码；av1：AOMedia Video 1 编码；H.266：H.266 编码。注意： av1，H.266 编码容器目前只支持 mp4 ； H.266 目前只支持恒定 CRF 码率控制方式。 */
    Codec?: string;
    /** 视频帧率，取值范围：[0, 100]，单位：Hz。当取值为 0，表示帧率和原始视频保持一致。 */
    Fps?: number;
    /** 视频流的码率，取值范围：0 和 [128, 100000]，单位：kbps。当取值为 0，表示由云点播自动设置码率。 */
    Bitrate?: number;
    /** 分辨率自适应，可选值：open：开启，此时，Width 代表视频的长边，Height 表示视频的短边；close：关闭，此时，Width 代表视频的宽度，Height 表示视频的高度。 */
    ResolutionAdaptive?: string;
    /** 视频流宽度（或长边）的最大值，取值范围：0 和 [128, 8192]，单位：px。当 Width、Height 均为 0，则分辨率同源；当 Width 为 0，Height 非 0，则 Width 按比例缩放；当 Width 非 0，Height 为 0，则 Height 按比例缩放；当 Width、Height 均非 0，则分辨率按用户指定。 */
    Width?: number;
    /** 视频流高度（或短边）的最大值，取值范围：0 和 [128, 8192]，单位：px。 */
    Height?: number;
    /** 填充方式，当视频流配置宽高参数与原始视频的宽高比不一致时，对转码的处理方式，即为“填充”。可选填充方式： stretch：拉伸，对每一帧进行拉伸，填满整个画面，可能导致转码后的视频被“压扁“或者“拉长“；black：留黑，保持视频宽高比不变，边缘剩余部分使用黑色填充。white：留白，保持视频宽高比不变，边缘剩余部分使用白色填充。gauss：高斯模糊，保持视频宽高比不变，边缘剩余部分使用高斯模糊填充。 */
    FillType?: string;
    /** 视频恒定码率控制因子，取值范围为[1, 51]，填 0 表示禁用该参数。注意：如果指定该参数，将使用 CRF 的码率控制方式做转码（视频码率将不再生效）；当指定视频流编码格式为 H.266 时，该字段必填，推荐值为 28；如果没有特殊需求，不建议指定该参数。 */
    Vcrf?: number;
    /** 关键帧 I 帧之间的间隔，取值范围：0 和 [1, 100000]，单位：帧数。当填 0 或不填时，系统将自动设置 gop 长度。 */
    Gop?: number;
    /** 当原始视频为 HDR（High Dynamic Range）时，转码输出是否依然保持 HDR。取值范围：ON: 如果原始文件是 HDR，则转码输出保持 HDR；否则转码输出为 SDR （Standard Dynamic Range）。OFF: 无论原始文件是 HDR 还是 SDR，转码输出均为 SDR。 */
    PreserveHDRSwitch?: string;
    /** 编码标签，仅当视频流的编码格式为 H.265 编码时有效，可选值：hvc1 表示 hvc1 标签；hev1 表示 hev1 标签。 默认值：hvc1。 */
    CodecTag?: string;
  }

  /** 视频轨的视频片段信息。 */
  interface VideoTrackItem {
    /** 视频片段的媒体素材来源，可以是：点播的媒体文件 ID；其他媒体文件的下载 URL。注意：当使用其他媒体文件的下载 URL 作为素材来源，且开启了访问控制（如防盗链）时，需要在 URL 携带访问控制参数（如防盗链签名）。 */
    SourceMedia: string;
    /** 视频片段取自素材文件的起始时间，单位为秒。默认为0。 */
    SourceMediaStartTime?: number;
    /** 视频片段时长，单位为秒。默认取视频素材本身长度，表示截取全部素材。如果源文件是图片，Duration需要大于0。 */
    Duration?: number;
    /** 视频片段目标时长，单位为秒。当 TargetDuration 不填或填0时，表示目标时长和 Duration 一致；当 TargetDuration 取大于0的值时，将对视频片段做快进或慢放等处理，使得输出片段的时长等于 TargetDuration。 */
    TargetDuration?: number;
    /** 视频原点位置，取值有：Center：坐标原点为中心位置，如画布中心。默认值 ：Center。 */
    CoordinateOrigin?: string;
    /** 视频片段原点距离画布原点的水平位置。支持 %、px 两种格式：当字符串以 % 结尾，表示视频片段 XPos 为画布宽度指定百分比的位置，如 10% 表示 XPos 为画布口宽度的 10%。当字符串以 px 结尾，表示视频片段 XPos 单位为像素，如 100px 表示 XPos 为100像素。默认值：0px。 */
    XPos?: string;
    /** 视频片段原点距离画布原点的垂直位置。支持 %、px 两种格式：当字符串以 % 结尾，表示视频片段 YPos 为画布高度指定百分比的位置，如 10% 表示 YPos 为画布高度的 10%。当字符串以 px 结尾，表示视频片段 YPos 单位为像素，如 100px 表示 YPos 为100像素。默认值：0px。 */
    YPos?: string;
    /** 视频片段的宽度。支持 %、px 两种格式：当字符串以 % 结尾，表示视频片段 Width 为画布宽度的百分比大小，如 10% 表示 Width 为画布宽度的 10%。当字符串以 px 结尾，表示视频片段 Width 单位为像素，如 100px 表示 Width 为100像素。当 Width、Height 均为空，则 Width 和 Height 取视频素材本身的 Width、Height。当 Width 为空，Height 非空，则 Width 按比例缩放当 Width 非空，Height 为空，则 Height 按比例缩放。 */
    Width?: string;
    /** 视频片段的高度。支持 %、px 两种格式：当字符串以 % 结尾，表示视频片段 Height 为画布高度的百分比大小，如 10% 表示 Height 为画布高度的 10%；当字符串以 px 结尾，表示视频片段 Height 单位为像素，如 100px 表示 Height 为100像素。当 Width、Height 均为空，则 Width 和 Height 取视频素材本身的 Width、Height。当 Width 为空，Height 非空，则 Width 按比例缩放当 Width 非空，Height 为空，则 Height 按比例缩放。 */
    Height?: string;
    /** 对音频进行操作，如静音等。 */
    AudioOperations?: AudioTransform[];
    /** 对图像进行的操作，如图像旋转等。 */
    ImageOperations?: ImageTransform[];
  }

  /** 音频（静音、低音、爆音）检测的控制参数。 */
  interface VoiceConfigureInfo {
    /** 音频（静音、低音、爆音）检测开关，可选值：ON：开启；OFF：关闭。 */
    Switch: string;
  }

  /** 音频（静音、低音、爆音）检测的控制参数。 */
  interface VoiceConfigureInfoForUpdate {
    /** 音频（静音、低音、爆音）检测开关，可选值：ON：开启；OFF：关闭。 */
    Switch?: string;
  }

  /** 即时转码水印模板配置。 */
  interface WatermarkConfigureData {
    /** 是否启用水印。可取值：ON：表示启用水印；OFF：表示关闭水印。 */
    Switch?: string;
    /** 水印 Url。 */
    Url?: string;
    /** 水印的宽度。字符串以 % 结尾，表示水印 Width 为视频宽度的百分比大小，如 10% 表示 Width 为视频宽度的 10%； */
    Width?: string;
    /** 水印的高度。字符串以 % 结尾，表示水印 Height 为视频高度的百分比大小，如 10% 表示 Height 为视频高度的 10%； */
    Height?: string;
    /** 水印原点距离视频图像坐标原点的水平位置。字符串以 % 结尾，表示水印 XPos 为视频宽度指定百分比，如 10% 表示 XPos 为视频宽度的 10%； */
    XPos?: string;
    /** 水印原点距离视频图像坐标原点的垂直位置。当字符串以 % 结尾，表示水印 YPos 为视频高度指定百分比，如 10% 表示 YPos 为视频高度的 10%。 */
    YPos?: string;
  }

  /** 即时转码水印模板配置。 */
  interface WatermarkConfigureInfo {
    /** 是否启用水印。可取值：ON：表示启用水印；OFF：表示关闭水印。 */
    Switch: string;
    /** 水印图片 Base64 编码后的字符串。支持 jpeg、png 图片格式。 */
    ImageContent?: string;
    /** 水印的宽度。字符串以 % 结尾，表示水印 Width 为视频宽度的百分比大小，如 10% 表示 Width 为视频宽度的 10%； */
    Width?: string;
    /** 水印的高度。字符串以 % 结尾，表示水印 Height 为视频高度的百分比大小，如 10% 表示 Height 为视频高度的 10%； */
    Height?: string;
    /** 水印原点距离视频图像坐标原点的水平位置。字符串以 % 结尾，表示水印 XPos 为视频宽度指定百分比，如 10% 表示 XPos 为视频宽度的 10%； */
    XPos?: string;
    /** 水印原点距离视频图像坐标原点的垂直位置。当字符串以 % 结尾，表示水印 YPos 为视频高度指定百分比，如 10% 表示 YPos 为视频高度的 10%。 */
    YPos?: string;
  }

  /** 即时转码水印模板更新配置。 */
  interface WatermarkConfigureInfoForUpdate {
    /** 是否启用水印。可取值：ON：表示启用水印；OFF：表示关闭水印。 */
    Switch?: string;
    /** 水印图片 Base64 编码后的字符串。支持 jpeg、png 图片格式。 */
    ImageContent?: string;
    /** 水印的宽度。字符串以 % 结尾，表示水印 Width 为视频宽度的百分比大小，如 10% 表示 Width 为视频宽度的 10%； */
    Width?: string;
    /** 水印的高度。字符串以 % 结尾，表示水印 Height 为视频高度的百分比大小，如 10% 表示 Height 为视频高度的 10%； */
    Height?: string;
    /** 水印原点距离视频图像坐标原点的水平位置。字符串以 % 结尾，表示水印 XPos 为视频宽度指定百分比，如 10% 表示 XPos 为视频宽度的 10%； */
    XPos?: string;
    /** 水印原点距离视频图像坐标原点的垂直位置。当字符串以 % 结尾，表示水印 YPos 为视频高度指定百分比，如 10% 表示 YPos 为视频高度的 10%。 */
    YPos?: string;
  }

  /** 水印周期配置。 */
  interface WatermarkCycleConfigForUpdate {
    /** 水印在视频里第一次出现的播放时间点，单位：秒。 */
    StartTime?: number;
    /** 在一个水印周期内，水印显示的持续时间，单位：秒。 */
    DisplayDuration?: number;
    /** 一个水印周期的持续时间，单位：秒。填 0 表示水印只持续一个水印周期（即在整个视频里只显示 DisplayDuration 秒）。 */
    CycleDuration?: number;
  }

  /** 视频处理任务中的水印参数类型 */
  interface WatermarkInput {
    /** 水印模板 ID。 */
    Definition: number;
    /** 文字内容，长度不超过100个字符。仅当水印类型为文字水印时填写。文字水印不支持截图打水印。 */
    TextContent?: string;
    /** SVG 内容。长度不超过 2000000 个字符。仅当水印类型为 SVG 水印时填写。SVG 水印不支持截图打水印。 */
    SvgContent?: string;
    /** 水印的起始时间偏移，单位：秒。不填或填0，表示水印从画面出现时开始显现。不填或填0，表示水印从画面开始就出现；当数值大于0时（假设为 n），表示水印从画面开始的第 n 秒出现；当数值小于0时（假设为 -n），表示水印从离画面结束 n 秒前开始出现。 */
    StartTimeOffset?: number;
    /** 水印的结束时间偏移，单位：秒。不填或填0，表示水印持续到画面结束；当数值大于0时（假设为 n），表示水印持续到第 n 秒时消失；当数值小于0时（假设为 -n），表示水印持续到离画面结束 n 秒前消失。 */
    EndTimeOffset?: number;
  }

  /** 水印模板详情 */
  interface WatermarkTemplate {
    /** 水印模板唯一标识。 */
    Definition?: number;
    /** 水印类型，取值：image：图片水印；text：文字水印。 */
    Type?: string;
    /** 水印模板名称。 */
    Name?: string;
    /** 模板描述信息。 */
    Comment?: string;
    /** 水印图片原点距离视频图像原点的水平位置。当字符串以 % 结尾，表示水印 Left 为视频宽度指定百分比的位置，如 10% 表示 Left 为视频宽度的 10%；当字符串以 px 结尾，表示水印 Left 为视频宽度指定像素的位置，如 100px 表示 Left 为 100 像素。 */
    XPos?: string;
    /** 水印图片原点距离视频图像原点的垂直位置。当字符串以 % 结尾，表示水印 Top 为视频高度指定百分比的位置，如 10% 表示 Top 为视频高度的 10%；当字符串以 px 结尾，表示水印 Top 为视频高度指定像素的位置，如 100px 表示 Top 为 100 像素。 */
    YPos?: string;
    /** 图片水印模板，仅当 Type 为 image，该字段有效。 */
    ImageTemplate?: ImageWatermarkTemplate | null;
    /** 文字水印模板，仅当 Type 为 text，该字段有效。 */
    TextTemplate?: TextWatermarkTemplateInput | null;
    /** SVG 水印模板，当 Type 为 svg，该字段有效。 */
    SvgTemplate?: SvgWatermarkInput | null;
    /** 模板创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    CreateTime?: string;
    /** 模板最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    UpdateTime?: string;
    /** 原点位置，可选值：topLeft：表示坐标原点位于视频图像左上角，水印原点为图片或文字的左上角；topRight：表示坐标原点位于视频图像的右上角，水印原点为图片或文字的右上角；bottomLeft：表示坐标原点位于视频图像的左下角，水印原点为图片或文字的左下角；bottomRight：表示坐标原点位于视频图像的右下角，水印原点为图片或文字的右下。； */
    CoordinateOrigin?: string;
  }

  /** 全景录制信息 */
  interface WebPageRecordInfo {
    /** 全景录制地址。 */
    RecordUrl?: string;
    /** 全景录制任务 ID。 */
    RecordTaskId?: string;
  }

  /** 微信小程序发布任务信息 */
  interface WechatMiniProgramPublishTask {
    /** 任务 ID。 */
    TaskId?: string;
    /** 任务状态，取值：WAITING：等待中；PROCESSING：处理中；FINISH：已完成。 */
    Status?: string;
    /** 错误码0：成功；其他值：失败。 */
    ErrCode?: number;
    /** 错误信息。 */
    Message?: string;
    /** 发布视频文件 ID。 */
    FileId?: string;
    /** 发布视频所对应的转码模板 ID，为 0 代表原始视频。 */
    SourceDefinition?: number;
    /** 微信小程序视频发布状态，取值：Pass：发布成功；Failed：发布失败；Rejected：音视频审核未通过。 */
    PublishResult?: string;
  }

  /** 微信小程序发布任务类型 */
  interface WechatMiniProgramPublishTaskInput {
    /** 发布视频所对应的转码模板 ID，为 0 代表原始视频。 */
    SourceDefinition: number;
  }

  /** 微信发布任务信息 */
  interface WechatPublishTask {
    /** 任务 ID。 */
    TaskId?: string;
    /** 任务状态，取值：WAITING：等待中；PROCESSING：处理中；FINISH：已完成。 */
    Status?: string;
    /** 错误码0：成功；其他值：失败。 */
    ErrCode?: number;
    /** 错误信息。 */
    Message?: string;
    /** 发布视频文件 ID。 */
    FileId?: string;
    /** 微信发布模板 ID。 */
    Definition?: number;
    /** 发布视频所对应的转码模板 ID，为 0 代表原始视频。 */
    SourceDefinition?: number;
    /** 微信发布状态，取值：FAIL：失败；SUCCESS：成功；AUDITNOTPASS：审核未通过；NOTTRIGGERED：尚未发起微信发布。 */
    WechatStatus?: string;
    /** 微信 Vid。 */
    WechatVid?: string;
    /** 微信地址。 */
    WechatUrl?: string;
  }

  interface ApplyUploadRequest {
    /** 媒体类型，可选值请参考 [上传能力综述](/document/product/266/9760)。 */
    MediaType: string;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 媒体名称。 */
    MediaName?: string;
    /** 封面类型，可选值请参考 [上传能力综述](/document/product/266/9760)。 */
    CoverType?: string;
    /** 媒体后续任务处理操作，即完成媒体上传后，可自动发起任务流操作。参数值为任务流模板名，云点播支持 [创建任务流模板](/document/product/266/33819) 并为模板命名。 */
    Procedure?: string;
    /** 媒体文件过期时间，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](/document/product/266/11732)。 */
    ExpireTime?: string;
    /** 指定上传园区，仅适用于对上传地域有特殊需求的用户。 */
    StorageRegion?: string;
    /** 分类ID，用于对媒体进行分类管理，可通过 [创建分类](/document/product/266/7812) 接口，创建分类，获得分类 ID。默认值：0，表示其他分类。 */
    ClassId?: number;
    /** 来源上下文，用于透传用户请求信息，[上传完成回调](/document/product/266/7830) 将返回该字段值，最长 250 个字符。 */
    SourceContext?: string;
    /** 会话上下文，用于透传用户请求信息，当指定 Procedure 参数后，[任务流状态变更回调](/document/product/266/9636) 将返回该字段值，最长 1000 个字符。 */
    SessionContext?: string;
    /** 保留字段，特殊用途时使用。 */
    ExtInfo?: string;
  }

  interface ApplyUploadResponse {
    /** 存储桶，用于上传接口 URL 的 bucket_name。 */
    StorageBucket?: string;
    /** 存储园区，用于上传接口 Host 的 Region。 */
    StorageRegion?: string;
    /** 点播会话，用于确认上传接口的参数 VodSessionKey。 */
    VodSessionKey?: string;
    /** 媒体存储路径，用于上传接口存储媒体的对象键（Key）。 */
    MediaStoragePath?: string;
    /** 封面存储路径，用于上传接口存储封面的对象键（Key）。 */
    CoverStoragePath?: string;
    /** 临时凭证，用于上传接口的权限验证。 */
    TempCertificate?: TempCertificate;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface AttachMediaSubtitlesRequest {
    /** 媒体文件唯一标识。 */
    FileId: string;
    /** 操作。取值如下：Attach：关联字幕。Detach：解除关联字幕。 */
    Operation: string;
    /** [转自适应码流模板号](https://cloud.tencent.com/document/product/266/34071)。 */
    AdaptiveDynamicStreamingDefinition: number;
    /** 字幕的唯一标识。 */
    SubtitleIds: string[];
    /** 默认字幕的唯一标识。不填则不设置默认字幕。 */
    DefaultSubtitleId?: string;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
  }

  interface AttachMediaSubtitlesResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CommitUploadRequest {
    /** 点播会话，取申请上传接口的返回值 VodSessionKey。 */
    VodSessionKey: string;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
  }

  interface CommitUploadResponse {
    /** 媒体文件的唯一标识。 */
    FileId?: string;
    /** 媒体播放地址。 */
    MediaUrl?: string;
    /** 媒体封面地址。 */
    CoverUrl?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ComposeMediaRequest {
    /** 输入的媒体轨道列表，包括视频、音频、图片等素材组成的多个轨道信息，其中：输入的多个轨道在时间轴上和输出媒体文件的时间轴对齐；时间轴上相同时间点的各个轨道的素材进行重叠，视频或者图片按轨道顺序进行图像的叠加，轨道顺序高的素材叠加在上面，音频素材进行混音；视频、音频、图片，每一种类型的轨道最多支持 10 个。所有类型的轨道上放置的媒体片段数量总和最多支持 500 个。 */
    Tracks: MediaTrack[];
    /** 输出的媒体文件信息。 */
    Output: ComposeMediaOutput;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 制作视频文件时使用的画布。 */
    Canvas?: Canvas;
    /** 标识来源上下文，用于透传用户请求信息，在ComposeMediaComplete回调将返回该字段值，最长 1000个字符。 */
    SessionContext?: string;
    /** 用于任务去重的识别码，如果三天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。 */
    SessionId?: string;
  }

  interface ComposeMediaResponse {
    /** 制作媒体文件的任务 ID，可以通过该 ID 查询制作任务（任务类型为 MakeMedia）的状态。 */
    TaskId?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ConfirmEventsRequest {
    /** 事件句柄，即 [拉取事件通知](/document/product/266/33433) 接口输出参数中的 EventSet. EventHandle 字段。数组长度限制：16。 */
    EventHandles: string[];
    /** 保留字段，特殊用途时使用。 */
    ExtInfo?: string;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
  }

  interface ConfirmEventsResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateAIAnalysisTemplateRequest {
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 音视频内容分析模板名称，长度限制：64 个字符。 */
    Name?: string;
    /** 音视频内容分析模板描述信息，长度限制：256 个字符。 */
    Comment?: string;
    /** 智能分类任务控制参数。 */
    ClassificationConfigure?: ClassificationConfigureInfo;
    /** 智能标签任务控制参数。 */
    TagConfigure?: TagConfigureInfo;
    /** 智能封面任务控制参数。 */
    CoverConfigure?: CoverConfigureInfo;
    /** 智能按帧标签任务控制参数。 */
    FrameTagConfigure?: FrameTagConfigureInfo;
    /** 智能精彩集锦任务控制参数。 */
    HighlightConfigure?: HighlightsConfigureInfo;
  }

  interface CreateAIAnalysisTemplateResponse {
    /** 音视频内容分析模板唯一标识。 */
    Definition?: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateAIRecognitionTemplateRequest {
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 音视频内容识别模板名称，长度限制：64 个字符。 */
    Name?: string;
    /** 音视频内容识别模板描述信息，长度限制：256 个字符。 */
    Comment?: string;
    /** 视频片头片尾识别控制参数。 */
    HeadTailConfigure?: HeadTailConfigureInfo;
    /** 视频拆条识别控制参数。 */
    SegmentConfigure?: SegmentConfigureInfo;
    /** 人脸识别控制参数。 */
    FaceConfigure?: FaceConfigureInfo;
    /** 文本全文识别控制参数。 */
    OcrFullTextConfigure?: OcrFullTextConfigureInfo;
    /** 文本关键词识别控制参数。 */
    OcrWordsConfigure?: OcrWordsConfigureInfo;
    /** 语音全文识别控制参数。注意：本参数已不再维护，推荐使用 AsrTranslateConfigure 参数发起语音翻译识别（当 DstLanguage 不填或填空字符串时，则不进行翻译，计费项和语音全文识别一致）。 */
    AsrFullTextConfigure?: AsrFullTextConfigureInfo;
    /** 语音关键词识别控制参数。 */
    AsrWordsConfigure?: AsrWordsConfigureInfo;
    /** 语音翻译识别控制参数。 */
    AsrTranslateConfigure?: AsrTranslateConfigureInfo;
    /** 物体识别控制参数。 */
    ObjectConfigure?: ObjectConfigureInfo;
    /** 截帧间隔，单位为秒。当不填时，默认截帧间隔为 1 秒，最小值为 0.5 秒。 */
    ScreenshotInterval?: number;
  }

  interface CreateAIRecognitionTemplateResponse {
    /** 音视频内容识别模板唯一标识。 */
    Definition?: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateAdaptiveDynamicStreamingTemplateRequest {
    /** 自适应转码格式，取值范围：HLS；MPEG-DASH。 */
    Format: string;
    /** 自适应转码输出子流参数信息，最多输出10路子流。注意：各个子流的帧率必须保持一致；如果不一致，采用第一个子流的帧率作为输出帧率。 */
    StreamInfos: AdaptiveStreamTemplate[];
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 模板名称，长度限制：64 个字符。 */
    Name?: string;
    /** DRM 方案类型，取值范围：SimpleAESWidevineFairPlay默认值为空字符串，如果取值为空字符串，代表不对视频做 DRM 保护。 */
    DrmType?: string;
    /** DRM 的密钥提供商，取值范围：SDMC：华曦达；VOD：云点播。默认为 VOD 。 */
    DrmKeyProvider?: string;
    /** 是否禁止视频低码率转高码率，取值范围：0：否，1：是。默认为否。 */
    DisableHigherVideoBitrate?: number;
    /** 是否禁止视频分辨率转高分辨率，取值范围：0：否，1：是。默认为否。 */
    DisableHigherVideoResolution?: number;
    /** 模板描述信息，长度限制：256 个字符。 */
    Comment?: string;
    /** 切片类型，当 Format 为 HLS 时有效，可选值：ts：ts 切片；fmp4：fmp4 切片。默认值：ts。 */
    SegmentType?: string;
  }

  interface CreateAdaptiveDynamicStreamingTemplateResponse {
    /** 自适应转码模板唯一标识。 */
    Definition?: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateAnimatedGraphicsTemplateRequest {
    /** 帧率，取值范围：[1, 30]，单位：Hz。 */
    Fps: number;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 动图宽度（或长边）的最大值，取值范围：0 和 [128, 4096]，单位：px。当 Width、Height 均为 0，则分辨率同源；当 Width 为 0，Height 非 0，则 Width 按比例缩放；当 Width 非 0，Height 为 0，则 Height 按比例缩放；当 Width、Height 均非 0，则分辨率按用户指定。默认值：0。 */
    Width?: number;
    /** 动图高度（或短边）的最大值，取值范围：0 和 [128, 4096]，单位：px。当 Width、Height 均为 0，则分辨率同源；当 Width 为 0，Height 非 0，则 Width 按比例缩放；当 Width 非 0，Height 为 0，则 Height 按比例缩放；当 Width、Height 均非 0，则分辨率按用户指定。默认值：0。 */
    Height?: number;
    /** 分辨率自适应，可选值：open：开启，此时，Width 代表视频的长边，Height 表示视频的短边；close：关闭，此时，Width 代表视频的宽度，Height 表示视频的高度。默认值：open。 */
    ResolutionAdaptive?: string;
    /** 动图格式，取值为 gif 和 webp。默认为 gif。 */
    Format?: string;
    /** 图片质量，取值范围：[1, 100]，默认值为 75。 */
    Quality?: number;
    /** 转动图模板名称，长度限制：64 个字符。 */
    Name?: string;
    /** 模板描述信息，长度限制：256 个字符。 */
    Comment?: string;
  }

  interface CreateAnimatedGraphicsTemplateResponse {
    /** 转动图模板唯一标识。 */
    Definition?: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateCLSLogsetRequest {
    /** 日志集所属的地域，取值有： ap-guangzhou：广州； ap-beijing：北京； ap-chengdu：成都； ap-chongqing：重庆； ap-nanjing：南京； ap-shanghai：上海； ap-singapore：新加坡。 */
    CLSRegion: string;
  }

  interface CreateCLSLogsetResponse {
    /** 日志集 ID。 */
    LogsetId?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateCLSTopicRequest {
    /** 日志集所属的地域，取值有： ap-guangzhou：广州； ap-beijing：北京； ap-chengdu：成都； ap-chongqing：重庆； ap-nanjing：南京； ap-shanghai：上海； ap-singapore：新加坡。 */
    CLSRegion: string;
    /** 日志主题名。 */
    TopicName: string;
    /** 日志集 ID。 */
    LogsetId: string;
  }

  interface CreateCLSTopicResponse {
    /** 日志主题 ID。 */
    TopicId?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateClassRequest {
    /** 父类 ID，一级分类填写 -1。 */
    ParentId: number;
    /** 分类名称，长度限制：1-64 个字符。 */
    ClassName: string;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
  }

  interface CreateClassResponse {
    /** 分类 ID */
    ClassId?: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateComplexAdaptiveDynamicStreamingTaskRequest {
    /** 点播[应用](/document/product/266/14574) ID。 */
    SubAppId: number;
    /** 主媒体文件的媒体 ID。 */
    FileId: string;
    /** 自适应码流参数，最大支持8个。 */
    StreamParaSet: ComplexAdaptiveDynamicStreamingTaskStreamPara[];
    /** 片头片尾列表，支持多片头片尾，最大可支持 4 个。如果填写了该字段，AudioSet 和 SubtitleSet 中指定的媒体的起始时间将会自动调整，和主媒体保持同步。 */
    HeadTailSet?: HeadTailTaskInput[];
    /** 多语言音频流参数，最大支持16个。每个数组元素对应自适应码流中的一条音频流。如果要将主媒体文件中的音频流添加到输出的自适应码流中，那么也需要在此处指定。数组中元素的顺序将决定自适应码流中的音频流顺序。如果输入的媒体文件同时带有视频流和音频流，那么视频流将被忽略。 */
    AudioSet?: ComplexAdaptiveDynamicStreamingTaskAudioInput[];
    /** 多语言字幕参数，最大可支持16个。每个数组元素对应自适应码流中的一条字幕流。数组中元素的顺序将决定自适应码流中的字幕流顺序。 */
    SubtitleSet?: ComplexAdaptiveDynamicStreamingTaskSubtitleInput[];
  }

  interface CreateComplexAdaptiveDynamicStreamingTaskResponse {
    /** 任务 ID。 */
    TaskId?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateContentReviewTemplateRequest {
    /** 音视频审核结果是否进入音视频审核墙（对识别结果进行人工复核）的开关。ON：是；OFF：否。 */
    ReviewWallSwitch: string;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 内容审核模板名称，长度限制：64 个字符。 */
    Name?: string;
    /** 内容审核模板描述信息，长度限制：256 个字符。 */
    Comment?: string;
    /** 令人反感的信息的控制参数。 */
    PornConfigure?: PornConfigureInfo;
    /** 令人不安全的信息的控制参数。 */
    TerrorismConfigure?: TerrorismConfigureInfo;
    /** 令人不适宜的控制参数。 */
    PoliticalConfigure?: PoliticalConfigureInfo;
    /** 违禁控制参数。违禁内容包括：谩骂；涉毒违法。 */
    ProhibitedConfigure?: ProhibitedConfigureInfo;
    /** 用户自定义内容审核控制参数。 */
    UserDefineConfigure?: UserDefineConfigureInfo;
    /** 截帧间隔，单位为秒。当不填时，默认截帧间隔为 1 秒，最小值为 0.5 秒。 */
    ScreenshotInterval?: number;
  }

  interface CreateContentReviewTemplateResponse {
    /** 音视频内容审核模板唯一标识。 */
    Definition?: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateDomainVerifyRecordRequest {
    /** 需要接入点播的加速域名。 */
    Domain: string;
    /** 点播[应用](/document/product/266/14574) ID。从2024年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
  }

  interface CreateDomainVerifyRecordResponse {
    /** DNS解析信息 */
    DNSVerifyInfo?: DNSVerifyInfo;
    /** 文件验证信息 */
    FileVerifyInfo?: FileVerifyInfo;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateEnhanceMediaTemplateRequest {
    /** 输出文件封装格式，可选值：mp4、flv、hls。 */
    Container: string;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 音画质重生模板名称，长度限制：64 个字符。 */
    Name?: string;
    /** 模板描述信息，长度限制：256 个字符。 */
    Comment?: string;
    /** 音画质重生视频控制控制信息。 */
    RebuildVideoInfo?: RebuildVideoInfo;
    /** 音画质重生音频控制控制信息。 */
    RebuildAudioInfo?: RebuildAudioInfo;
    /** 输出目标视频控制信息。 */
    TargetVideoInfo?: RebuildMediaTargetVideoStream;
    /** 输出目标音频控制信息。 */
    TargetAudioInfo?: RebuildMediaTargetAudioStream;
    /** 是否去除视频数据，可选值：0：保留1：去除默认值 0。 */
    RemoveVideo?: number;
    /** 是否去除音频数据，可选值：0：保留1：去除默认值 0。 */
    RemoveAudio?: number;
  }

  interface CreateEnhanceMediaTemplateResponse {
    /** 音画质重生模板 ID。 */
    Definition?: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateHeadTailTemplateRequest {
    /** 模板名，长度限制 64 个字符。 */
    Name: string;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 模板描述信息，长度限制 256 个字符。 */
    Comment?: string;
    /** 片头候选列表，填写视频的 FileId。转码时将自动选择与正片宽高比最接近的一个片头（相同宽高比时，靠前的候选项优先）。最多支持 5 个候选片头。 */
    HeadCandidateSet?: string[];
    /** 片尾候选列表，填写视频的 FileId。转码时将自动选择与正片宽高比最接近的一个片尾（相同宽高比时，靠前的候选项优先）。最多支持 5 个候选片尾。 */
    TailCandidateSet?: string[];
    /** 填充方式，当视频流配置宽高参数与原始视频的宽高比不一致时，对转码的处理方式，即为“填充”。可选填充方式： stretch：拉伸，对每一帧进行拉伸，填满整个画面，可能导致转码后的视频被“压扁“或者“拉长“； gauss：高斯模糊，保持视频宽高比不变，边缘剩余部分使用高斯模糊； white：留白，保持视频宽高比不变，边缘剩余部分使用白色填充； black：留黑，保持视频宽高比不变，边缘剩余部分使用黑色填充。默认值：stretch 。 */
    FillType?: string;
  }

  interface CreateHeadTailTemplateResponse {
    /** 片头片尾模板号。 */
    Definition?: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateImageProcessingTemplateRequest {
    /** 图片处理操作数组，操作将以其在数组中的顺序执行。长度限制：10。 */
    Operations: ImageOperation[];
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 图片处理模板名称，长度限制：64 个字符。 */
    Name?: string;
    /** 模板描述信息，长度限制：256 个字符。 */
    Comment?: string;
  }

  interface CreateImageProcessingTemplateResponse {
    /** 图片处理模板唯一标识。 */
    Definition?: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateImageSpriteTemplateRequest {
    /** 采样类型，取值：Percent：按百分比。Time：按时间间隔。 */
    SampleType: string;
    /** 采样间隔。当 SampleType 为 Percent 时，指定采样间隔的百分比。当 SampleType 为 Time 时，指定采样间隔的时间，单位为秒。 */
    SampleInterval: number;
    /** 雪碧图中小图的行数。注意：小图的行数会影响最终大图的高度，大图的高度最大为15000像素，其中大图的高度为小图行数与小图高度的乘积。 */
    RowCount: number;
    /** 雪碧图中小图的列数。注意：小图的列数会影响最终大图的宽度，大图的宽度最大为15000像素，其中大图的宽度为小图列数与小图宽度的乘积。 */
    ColumnCount: number;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 雪碧图模板名称，长度限制：64 个字符。 */
    Name?: string;
    /** 模板描述信息，长度限制：256 个字符。 */
    Comment?: string;
    /** 填充方式，当视频流配置宽高参数与原始视频的宽高比不一致时，对转码的处理方式，即为“填充”。可选填充方式： stretch：拉伸，对每一帧进行拉伸，填满整个画面，可能导致转码后的视频被“压扁“或者“拉长“；black：留黑，保持视频宽高比不变，边缘剩余部分使用黑色填充。默认值：black 。 */
    FillType?: string;
    /** 雪碧图中小图的宽度（或长边）的最大值，取值范围：0 和 [128, 4096]，单位：px。当 Width、Height 均为 0，则分辨率同源；当 Width 为 0，Height 非 0，则 Width 按比例缩放；当 Width 非 0，Height 为 0，则 Height 按比例缩放；当 Width、Height 均非 0，则分辨率按用户指定。默认值：0。注意：小图的宽度会影响最终大图的宽度，大图的宽度最大为15000像素，其中大图的宽度为小图列数与小图宽度的乘积。 */
    Width?: number;
    /** 雪碧图中小图的高度（或短边）的最大值，取值范围：0 和 [128, 4096]，单位：px。当 Width、Height 均为 0，则分辨率同源；当 Width 为 0，Height 非 0，则 Width 按比例缩放；当 Width 非 0，Height 为 0，则 Height 按比例缩放；当 Width、Height 均非 0，则分辨率按用户指定。默认值：0。注意：小图的高度会影响最终大图的高度，大图的高度最大为15000像素，其中大图的高度为小图行数与小图高度的乘积。 */
    Height?: number;
    /** 分辨率自适应，可选值：open：开启，此时，Width 代表视频的长边，Height 表示视频的短边；close：关闭，此时，Width 代表视频的宽度，Height 表示视频的高度。默认值：open。 */
    ResolutionAdaptive?: string;
    /** 图片格式，取值： jpg：jpg 格式； png：png 格式； webp：webp 格式。默认值：jpg。 */
    Format?: string;
  }

  interface CreateImageSpriteTemplateResponse {
    /** 雪碧图模板唯一标识。 */
    Definition?: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateJustInTimeTranscodeTemplateRequest {
    /** 模板名字，长度限制64个字符。 */
    Name: string;
    /** 视频参数配置。 */
    VideoConfigure: VideoConfigureInfo;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 水印参数配置。 */
    WatermarkConfigure?: WatermarkConfigureInfo;
    /** 模板描述，长度限制256个字符。 */
    Comment?: string;
  }

  interface CreateJustInTimeTranscodeTemplateResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreatePersonSampleRequest {
    /** 素材名称，长度限制：20 个字符。 */
    Name: string;
    /** 素材应用场景，可选值：1. Recognition：用于内容识别，等价于 Recognition.Face。2. Review：用于内容不适宜，等价于 Review.Face。3. All：包含以上全部，等价于 1+2。 */
    Usages: string[];
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 素材描述，长度限制：1024 个字符。 */
    Description?: string;
    /** 素材图片 [Base64](https://tools.ietf.org/html/rfc4648) 编码后的字符串，仅支持 jpeg、png 图片格式。数组长度限制：5 张图片。注意：图片必须是单人像五官较清晰的照片，像素不低于 200*200。 */
    FaceContents?: string[];
    /** 素材标签数组长度限制：20 个标签；单个标签长度限制：128 个字符。 */
    Tags?: string[];
  }

  interface CreatePersonSampleResponse {
    /** 素材信息。 */
    Person?: AiSamplePerson;
    /** 处理失败的五官定位信息。 */
    FailFaceInfoSet?: AiSampleFailFaceInfo[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateProcedureTemplateRequest {
    /** 任务流名字（支持中文，不超过20个字）。 */
    Name: string;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 模板描述信息，长度限制：256 个字符。 */
    Comment?: string;
    /** 视频处理类型任务参数。 */
    MediaProcessTask?: MediaProcessTaskInput;
    /** AI 内容审核类型任务参数 \*。\*：该参数用于发起旧版审核，不建议使用。推荐使用 ReviewAudioVideoTask 参数发起审核。 */
    AiContentReviewTask?: AiContentReviewTaskInput;
    /** AI 内容分析类型任务参数。 */
    AiAnalysisTask?: AiAnalysisTaskInput;
    /** AI 内容识别类型任务参数。 */
    AiRecognitionTaskSet?: AiRecognitionTaskInput[];
    /** 该参数已不推荐使用，建议使用 AiRecognitionTaskSet。 */
    AiRecognitionTask?: AiRecognitionTaskInput;
    /** 音视频审核类型任务参数。 */
    ReviewAudioVideoTask?: ProcedureReviewAudioVideoTaskInput;
  }

  interface CreateProcedureTemplateResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateQualityInspectTemplateRequest {
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 音画质检测模板名称。 */
    Name?: string;
    /** 音画质检测模板描述。 */
    Comment?: string;
    /** 截帧间隔，单位为秒，最小值为 1。当不填时，默认截帧间隔为 1 秒。 */
    ScreenshotInterval?: number;
    /** 视频画面抖动重影检测的控制参数。 */
    JitterConfigure?: JitterConfigureInfo;
    /** 视频画面模糊检测的控制参数。 */
    BlurConfigure?: BlurConfigureInfo;
    /** 视频画面低光、过曝检测的控制参数。 */
    AbnormalLightingConfigure?: AbnormalLightingConfigureInfo;
    /** 视频画面花屏检测的控制参数。 */
    CrashScreenConfigure?: CrashScreenConfigureInfo;
    /** 视频画面黑边、白边、黑屏、白屏检测的控制参数。 */
    BlackWhiteEdgeConfigure?: BlackWhiteEdgeConfigureInfo;
    /** 视频画面噪点检测的控制参数。 */
    NoiseConfigure?: NoiseConfigureInfo;
    /** 视频画面马赛克检测的控制参数。 */
    MosaicConfigure?: MosaicConfigureInfo;
    /** 视频画面二维码检测的控制参数。 */
    QRCodeConfigure?: QRCodeConfigureInfo;
    /** 音频（静音、低音、爆音）检测的控制参数。 */
    VoiceConfigure?: VoiceConfigureInfo;
    /** 视频画面质量评价的控制参数。 */
    QualityEvaluationConfigure?: QualityEvaluationConfigureInfo;
  }

  interface CreateQualityInspectTemplateResponse {
    /** 音画质检测模板 ID。 */
    Definition?: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateRebuildMediaTemplateRequest {
    /** 输出文件封装格式，可选值：mp4、flv、hls。 */
    Container: string;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 音画质重生模板名称。 */
    Name?: string;
    /** 模板描述。 */
    Comment?: string;
    /** 音画质重生视频控制控制信息。 */
    RebuildVideoInfo?: RebuildVideoInfo;
    /** 音画质重生音频控制控制信息。 */
    RebuildAudioInfo?: RebuildAudioInfo;
    /** 输出目标视频控制信息。 */
    TargetVideoInfo?: RebuildMediaTargetVideoStream;
    /** 输出目标音频控制信息。 */
    TargetAudioInfo?: RebuildMediaTargetAudioStream;
    /** 是否去除视频数据，可选值：0：保留1：去除默认值 0。 */
    RemoveVideo?: number;
    /** 是否去除音频数据，可选值：0：保留1：去除默认值 0。 */
    RemoveAudio?: string;
  }

  interface CreateRebuildMediaTemplateResponse {
    /** 视频重生模板 ID。 */
    Definition?: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateReviewTemplateRequest {
    /** 需要返回的违规标签列表，可选值为：Porn：色情；Terror：暴力；Polity：不适宜的信息；Illegal：违法；Abuse：谩骂；Ad：广告；Moan：娇喘。 */
    Labels: string[];
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: string;
    /** 审核模板名称，长度限制：64 个字符。 */
    Name?: string;
    /** 审核模板描述信息，长度限制：256 个字符。 */
    Comment?: string;
  }

  interface CreateReviewTemplateResponse {
    /** 审核模板唯一标识。 */
    Definition?: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateRoundPlayRequest {
    /** 启播时间，格式按照 ISO 8601标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732)。 */
    StartTime: string;
    /** 轮播列表。数组长度限制：100。 */
    RoundPlaylist: RoundPlayListItemInfo[];
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 轮播播单名称，长度限制：64 个字符。 */
    Name?: string;
    /** 轮播播单描述信息，长度限制：256 个字符。 */
    Desc?: string;
    /** 播放模式，可选值：Loop：循环播放播单；Linear：单次播放，播单播放完停止播放。默认值：Loop。 */
    PlayBackMode?: string;
    /** 播单唯一标识 ID，长度限制为64个字符，只允许包含大小写英文字母（a-zA-Z）、数字（0-9）和连字符（-）。如果存在相同 RoundPlayId 的播单，返回 InvalidParameterValue.RoundPlayAlreadyExists 错误。默认取值为空，表示由系统分配。 */
    RoundPlayId?: string;
    /** 过期时间，格式按照 ISO 8601标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732)。过期后的播单将停止播放，“9999-12-31T23:59:59+08:00”表示不过期。默认值：9999-12-31T23:59:59+08:00。 */
    ExpiredTime?: string;
  }

  interface CreateRoundPlayResponse {
    /** 轮播播单唯一标识。 */
    RoundPlayId?: string;
    /** 轮播播放地址。 */
    Url?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateSampleSnapshotTemplateRequest {
    /** 采样截图类型，取值：Percent：按百分比。Time：按时间间隔。 */
    SampleType: string;
    /** 采样间隔。当 SampleType 为 Percent 时，指定采样间隔的百分比。当 SampleType 为 Time 时，指定采样间隔的时间，单位为秒。 */
    SampleInterval: number;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 采样截图模板名称，长度限制：64 个字符。 */
    Name?: string;
    /** 截图宽度（或长边）的最大值，取值范围：0 和 [128, 4096]，单位：px。当 Width、Height 均为 0，则分辨率同源；当 Width 为 0，Height 非 0，则 Width 按比例缩放；当 Width 非 0，Height 为 0，则 Height 按比例缩放；当 Width、Height 均非 0，则分辨率按用户指定。默认值：0。 */
    Width?: number;
    /** 截图高度（或短边）的最大值，取值范围：0 和 [128, 4096]，单位：px。当 Width、Height 均为 0，则分辨率同源；当 Width 为 0，Height 非 0，则 Width 按比例缩放；当 Width 非 0，Height 为 0，则 Height 按比例缩放；当 Width、Height 均非 0，则分辨率按用户指定。默认值：0。 */
    Height?: number;
    /** 分辨率自适应，可选值：open：开启，此时，Width 代表视频的长边，Height 表示视频的短边；close：关闭，此时，Width 代表视频的宽度，Height 表示视频的高度。默认值：open。 */
    ResolutionAdaptive?: string;
    /** 图片格式，取值为 jpg 和 png。默认为 jpg。 */
    Format?: string;
    /** 模板描述信息，长度限制：256 个字符。 */
    Comment?: string;
    /** 填充方式，当视频流配置宽高参数与原始视频的宽高比不一致时，对转码的处理方式，即为“填充”。可选填充方式： stretch：拉伸，对每一帧进行拉伸，填满整个画面，可能导致转码后的视频被“压扁“或者“拉长“；black：留黑，保持视频宽高比不变，边缘剩余部分使用黑色填充。white：留白，保持视频宽高比不变，边缘剩余部分使用白色填充。gauss：高斯模糊，保持视频宽高比不变，边缘剩余部分使用高斯模糊。默认值：black 。 */
    FillType?: string;
  }

  interface CreateSampleSnapshotTemplateResponse {
    /** 采样截图模板唯一标识。 */
    Definition?: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateSnapshotByTimeOffsetTemplateRequest {
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 指定时间点截图模板名称，长度限制：64 个字符。 */
    Name?: string;
    /** 截图宽度（或长边）的最大值，取值范围：0 和 [128, 4096]，单位：px。当 Width、Height 均为 0，则分辨率同源；当 Width 为 0，Height 非 0，则 Width 按比例缩放；当 Width 非 0，Height 为 0，则 Height 按比例缩放；当 Width、Height 均非 0，则分辨率按用户指定。默认值：0。 */
    Width?: number;
    /** 截图高度（或短边）的最大值，取值范围：0 和 [128, 4096]，单位：px。当 Width、Height 均为 0，则分辨率同源；当 Width 为 0，Height 非 0，则 Width 按比例缩放；当 Width 非 0，Height 为 0，则 Height 按比例缩放；当 Width、Height 均非 0，则分辨率按用户指定。默认值：0。 */
    Height?: number;
    /** 分辨率自适应，可选值：open：开启，此时，Width 代表视频的长边，Height 表示视频的短边；close：关闭，此时，Width 代表视频的宽度，Height 表示视频的高度。默认值：open。 */
    ResolutionAdaptive?: string;
    /** 图片格式，取值可以为 jpg 和 png。默认为 jpg。 */
    Format?: string;
    /** 模板描述信息，长度限制：256 个字符。 */
    Comment?: string;
    /** 填充方式，当视频流配置宽高参数与原始视频的宽高比不一致时，对转码的处理方式，即为“填充”。可选填充方式： stretch：拉伸，对每一帧进行拉伸，填满整个画面，可能导致转码后的视频被“压扁“或者“拉长“；black：留黑，保持视频宽高比不变，边缘剩余部分使用黑色填充。white：留白，保持视频宽高比不变，边缘剩余部分使用白色填充。gauss：高斯模糊，保持视频宽高比不变，边缘剩余部分使用高斯模糊。默认值：black 。 */
    FillType?: string;
  }

  interface CreateSnapshotByTimeOffsetTemplateResponse {
    /** 时间点截图模板唯一标识。 */
    Definition?: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateStorageRegionRequest {
    /** 待开通的存储地域，必须是系统支持的地域。 */
    StorageRegion: string;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
  }

  interface CreateStorageRegionResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateSubAppIdRequest {
    /** 应用名称，长度限制：40个字符。 */
    Name: string;
    /** 应用简介，长度限制： 300个字符。不填则应用简介默认为空。 */
    Description?: string;
    /** 应用类型， 取值有：AllInOne：一体化；Professional：专业版。默认值为 AllInOne。 */
    Type?: string;
  }

  interface CreateSubAppIdResponse {
    /** 新创建的应用 ID。 */
    SubAppId?: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateSuperPlayerConfigRequest {
    /** 播放器配置名称，长度限制：64 个字符。只允许出现 [0-9a-zA-Z] 及 _- 字符（如 test_ABC-123），同一个用户该名称唯一。 */
    Name: string;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 播放的音视频类型，可选值：AdaptiveDynamicStream：自适应码流输出；Transcode：转码输出；Original：原始音视频。默认为 AdaptiveDynamicStream。 */
    AudioVideoType?: string;
    /** 播放 DRM 保护的自适应码流开关：ON：开启，表示仅播放 DRM 保护的自适应码流输出；OFF：关闭，表示播放未加密的自适应码流输出。默认为 OFF。当 AudioVideoType 为 AdaptiveDynamicStream 时，此参数有效。 */
    DrmSwitch?: string;
    /** 允许输出的未加密的自适应码流模板 ID。当 AudioVideoType 为 AdaptiveDynamicStream 并且 DrmSwitch 为 OFF 时，此参数为必填。 */
    AdaptiveDynamicStreamingDefinition?: number;
    /** 允许输出的 DRM 自适应码流模板内容。当 AudioVideoType 为 AdaptiveDynamicStream 并且 DrmSwitch 为 ON 时，此参数为必填。 */
    DrmStreamingsInfo?: DrmStreamingsInfo;
    /** 允许输出的转码模板 ID。当 AudioVideoType 为 Transcode 时必填。 */
    TranscodeDefinition?: number;
    /** 允许输出的雪碧图模板 ID。 */
    ImageSpriteDefinition?: number;
    /** 播放器对于不同分辨率的子流展示名字，不填或者填空数组则使用默认配置：MinEdgeLength：240，Name：流畅；MinEdgeLength：480，Name：标清；MinEdgeLength：720，Name：高清；MinEdgeLength：1080，Name：全高清；MinEdgeLength：1440，Name：2K；MinEdgeLength：2160，Name：4K；MinEdgeLength：4320，Name：8K。 */
    ResolutionNames?: ResolutionNameInfo[];
    /** 播放时使用的域名。不填或者填 Default，表示使用[默认分发配置](https://cloud.tencent.com/document/product/266/33373)中的域名。 */
    Domain?: string;
    /** 播放时使用的 Scheme。不填或者填 Default，表示使用[默认分发配置](https://cloud.tencent.com/document/product/266/33373)中的 Scheme。其他可选值：HTTP；HTTPS。 */
    Scheme?: string;
    /** 模板描述信息，长度限制：256 个字符。 */
    Comment?: string;
  }

  interface CreateSuperPlayerConfigResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateTranscodeTemplateRequest {
    /** 封装格式，可选值：mp4、flv、hls、mp3、flac、ogg、m4a、wav。其中，mp3、flac、ogg、m4a、wav 为纯音频文件。 */
    Container: string;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 转码模板名称，长度限制：64 个字符。 */
    Name?: string;
    /** 模板描述信息，长度限制：256 个字符。 */
    Comment?: string;
    /** 是否去除视频数据，可选值：0：保留1：去除默认值：0。 */
    RemoveVideo?: number;
    /** 是否去除音频数据，可选值：0：保留1：去除默认值：0。 */
    RemoveAudio?: number;
    /** 视频流配置参数，当 RemoveVideo 为 0，该字段必填。 */
    VideoTemplate?: VideoTemplateInfo;
    /** 音频流配置参数，当 RemoveAudio 为 0，该字段必填。 */
    AudioTemplate?: AudioTemplateInfo;
    /** 极速高清转码参数。 */
    TEHDConfig?: TEHDConfig;
    /** 切片类型，当 Container 为 hls 时有效，可选值：ts：ts 切片；fmp4：fmp4 切片。默认值：ts。 */
    SegmentType?: string;
  }

  interface CreateTranscodeTemplateResponse {
    /** 转码模板唯一标识。 */
    Definition?: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateVodDomainRequest {
    /** 需要接入点播的加速域名。注意：不支持填写泛域名。 */
    Domain: string;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 需要开启 CDN 加速的区域：Chinese Mainland：中国境内（不包含港澳台）。Outside Chinese Mainland: 中国境外。Global: 全球范围。如果没有设置 AccelerateArea， 点播会根据用户在腾讯云设置的地域信息自动开通中国境内或者中国境外的 CDN 加速。开启中国境内加速的域名，需要先[备案域名](/document/product/243/18905)。 */
    AccelerateArea?: string;
    /** 域名类型，取值有： VOD：使用 VOD 产品分发的域名； EdgeOne：使用 EdgeOne 产品分发的域名。不填默认取值为 VOD 。 */
    Type?: string;
  }

  interface CreateVodDomainResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateWatermarkTemplateRequest {
    /** 水印类型，可选值：image：图片水印；text：文字水印；svg：SVG 水印。 */
    Type: string;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 水印模板名称，长度限制：64 个字符。 */
    Name?: string;
    /** 模板描述信息，长度限制：256 个字符。 */
    Comment?: string;
    /** 原点位置，可选值：TopLeft：表示坐标原点位于视频图像左上角，水印原点为图片或文字的左上角；TopRight：表示坐标原点位于视频图像的右上角，水印原点为图片或文字的右上角；BottomLeft：表示坐标原点位于视频图像的左下角，水印原点为图片或文字的左下角；BottomRight：表示坐标原点位于视频图像的右下角，水印原点为图片或文字的右下角。默认值：TopLeft。 */
    CoordinateOrigin?: string;
    /** 水印原点距离视频图像坐标原点的水平位置。支持 %、px 两种格式：当字符串以 % 结尾，表示水印 XPos 为视频宽度指定百分比，如 10% 表示 XPos 为视频宽度的 10%；当字符串以 px 结尾，表示水印 XPos 为指定像素，如 100px 表示 XPos 为 100 像素。默认值：0px。 */
    XPos?: string;
    /** 水印原点距离视频图像坐标原点的垂直位置。支持 %、px 两种格式：当字符串以 % 结尾，表示水印 YPos 为视频高度指定百分比，如 10% 表示 YPos 为视频高度的 10%；当字符串以 px 结尾，表示水印 YPos 为指定像素，如 100px 表示 YPos 为 100 像素。默认值：0px。 */
    YPos?: string;
    /** 图片水印模板，当 Type 为 image，该字段必填。当 Type 为 text，该字段无效。 */
    ImageTemplate?: ImageWatermarkInput;
    /** 文字水印模板，当 Type 为 text，该字段必填。当 Type 为 image，该字段无效。 */
    TextTemplate?: TextWatermarkTemplateInput;
    /** SVG水印模板，当 Type 为 svg，该字段必填。当 Type 为 image 或 text，该字段无效。 */
    SvgTemplate?: SvgWatermarkInput;
  }

  interface CreateWatermarkTemplateResponse {
    /** 水印模板唯一标识。 */
    Definition?: number;
    /** 水印图片地址，仅当 Type 为 image，该字段有效。 */
    ImageUrl?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateWordSamplesRequest {
    /** 关键词应用场景，可选值：1. Recognition.Ocr：通过光学字符识别技术，进行内容识别；2. Recognition.Asr：通过音频识别技术，进行内容识别；3. Review.Ocr：通过光学字符识别技术，进行不适宜内容识别；4. Review.Asr：通过音频识别技术，进行不适宜内容识别；可合并简写为：5. Recognition：通过光学字符识别技术、音频识别技术，进行内容识别，等价于 1+2；6. Review：通过光学字符识别技术、音频识别技术，进行不适宜内容识别，等价于 3+4；7. All：通过光学字符识别技术、音频识别技术，进行内容识别、不适宜内容识别，等价于 1+2+3+4。 */
    Usages: string[];
    /** 关键词，数组长度限制：100。 */
    Words: AiSampleWordInfo[];
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
  }

  interface CreateWordSamplesResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteAIAnalysisTemplateRequest {
    /** 音视频内容分析模板唯一标识。 */
    Definition: number;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
  }

  interface DeleteAIAnalysisTemplateResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteAIRecognitionTemplateRequest {
    /** 音视频内容识别模板唯一标识。 */
    Definition: number;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
  }

  interface DeleteAIRecognitionTemplateResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteAdaptiveDynamicStreamingTemplateRequest {
    /** 自适应转码模板唯一标识。 */
    Definition: number;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
  }

  interface DeleteAdaptiveDynamicStreamingTemplateResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteAnimatedGraphicsTemplateRequest {
    /** 转动图模板唯一标识。 */
    Definition: number;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
  }

  interface DeleteAnimatedGraphicsTemplateResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteCLSTopicRequest {
    /** 日志集所属的地域，取值有： ap-guangzhou：广州； ap-beijing：北京； ap-chengdu：成都； ap-chongqing：重庆； ap-nanjing：南京； ap-shanghai：上海； ap-singapore：新加坡。 */
    CLSRegion?: string;
    /** 日志主题 ID。 */
    TopicId?: string;
  }

  interface DeleteCLSTopicResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteClassRequest {
    /** 分类 ID */
    ClassId: number;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
  }

  interface DeleteClassResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteContentReviewTemplateRequest {
    /** 内容审核模板唯一标识。 */
    Definition: number;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
  }

  interface DeleteContentReviewTemplateResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteEnhanceMediaTemplateRequest {
    /** 音画质重生模板号。 */
    Definition: number;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
  }

  interface DeleteEnhanceMediaTemplateResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteHeadTailTemplateRequest {
    /** 片头片尾模板号。 */
    Definition: number;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
  }

  interface DeleteHeadTailTemplateResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteImageProcessingTemplateRequest {
    /** 图片处理模板唯一标识。 */
    Definition: number;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
  }

  interface DeleteImageProcessingTemplateResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteImageSpriteTemplateRequest {
    /** 雪碧图模板唯一标识。 */
    Definition: number;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
  }

  interface DeleteImageSpriteTemplateResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteJustInTimeTranscodeTemplateRequest {
    /** 模板名字。 */
    Name: string;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
  }

  interface DeleteJustInTimeTranscodeTemplateResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteMediaRequest {
    /** 媒体文件的唯一标识。 */
    FileId: string;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 指定本次需要删除的部分。默认值为 "[]", 表示删除媒体及其对应的全部视频处理文件。 */
    DeleteParts?: MediaDeleteItem[];
  }

  interface DeleteMediaResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeletePersonSampleRequest {
    /** 素材 ID。 */
    PersonId: string;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
  }

  interface DeletePersonSampleResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteProcedureTemplateRequest {
    /** 任务流名字。 */
    Name: string;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
  }

  interface DeleteProcedureTemplateResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteQualityInspectTemplateRequest {
    /** 音画质检测模板 ID。 */
    Definition: number;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
  }

  interface DeleteQualityInspectTemplateResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteRebuildMediaTemplateRequest {
    /** 视频重生模板号。 */
    Definition: number;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
  }

  interface DeleteRebuildMediaTemplateResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteReviewTemplateRequest {
    /** 审核模板唯一标识。 */
    Definition: number;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
  }

  interface DeleteReviewTemplateResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteRoundPlayRequest {
    /** 轮播播单唯一标识。 */
    RoundPlayId: string;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
  }

  interface DeleteRoundPlayResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteSampleSnapshotTemplateRequest {
    /** 采样截图模板唯一标识。 */
    Definition: number;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
  }

  interface DeleteSampleSnapshotTemplateResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteSnapshotByTimeOffsetTemplateRequest {
    /** 指定时间点截图模板唯一标识。 */
    Definition: number;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
  }

  interface DeleteSnapshotByTimeOffsetTemplateResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteSuperPlayerConfigRequest {
    /** 播放器配置名称。 */
    Name: string;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
  }

  interface DeleteSuperPlayerConfigResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteTranscodeTemplateRequest {
    /** 转码模板唯一标识。 */
    Definition: number;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
  }

  interface DeleteTranscodeTemplateResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteVodDomainRequest {
    /** 要删除的点播加速域名。 */
    Domain: string;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
  }

  interface DeleteVodDomainResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteWatermarkTemplateRequest {
    /** 水印模板唯一标识。 */
    Definition: number;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
  }

  interface DeleteWatermarkTemplateResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteWordSamplesRequest {
    /** 关键词，数组长度限制：100 个词。 */
    Keywords: string[];
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
  }

  interface DeleteWordSamplesResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeAIAnalysisTemplatesRequest {
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 音视频内容分析模板唯一标识过滤条件，数组长度最大值：100。 */
    Definitions?: number[];
    /** 分页偏移量，默认值：0。 */
    Offset?: number;
    /** 返回记录条数，默认值：10，最大值：100。 */
    Limit?: number;
  }

  interface DescribeAIAnalysisTemplatesResponse {
    /** 符合过滤条件的记录总数。 */
    TotalCount?: number;
    /** 音视频内容分析模板详情列表。 */
    AIAnalysisTemplateSet?: AIAnalysisTemplateItem[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeAIRecognitionTemplatesRequest {
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 音视频内容识别模板唯一标识过滤条件，数组长度限制：100。 */
    Definitions?: number[];
    /** 模板类型过滤条件，可选值：Preset：系统预置模板；Custom：用户自定义模板。不填默认为空，即不对模板类型过滤。 */
    Type?: string;
    /** 分页偏移量，默认值：0。 */
    Offset?: number;
    /** 返回记录条数，默认值：10，最大值：100。 */
    Limit?: number;
  }

  interface DescribeAIRecognitionTemplatesResponse {
    /** 符合过滤条件的记录总数。 */
    TotalCount?: number;
    /** 音视频内容识别模板详情列表。 */
    AIRecognitionTemplateSet?: AIRecognitionTemplateItem[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeAdaptiveDynamicStreamingTemplatesRequest {
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 转自适应码流模板唯一标识过滤条件，数组长度限制：100。 */
    Definitions?: number[];
    /** 分页偏移量，默认值：0。 */
    Offset?: number;
    /** 返回记录条数，默认值：10，最大值：100。 */
    Limit?: number;
    /** 模板类型过滤条件，可选值：Preset：系统预置模板；Custom：用户自定义模板。 */
    Type?: string;
  }

  interface DescribeAdaptiveDynamicStreamingTemplatesResponse {
    /** 符合过滤条件的记录总数。 */
    TotalCount?: number;
    /** 转自适应码流模板详情列表。 */
    AdaptiveDynamicStreamingTemplateSet?: AdaptiveDynamicStreamingTemplate[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeAllClassRequest {
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
  }

  interface DescribeAllClassResponse {
    /** 分类信息集合 */
    ClassInfoSet?: MediaClassInfo[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeAnimatedGraphicsTemplatesRequest {
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 转动图模板唯一标识过滤条件，数组长度限制：100。 */
    Definitions?: number[];
    /** 分页偏移量，默认值：0。 */
    Offset?: number;
    /** 返回记录条数，默认值：10，最大值：100。 */
    Limit?: number;
    /** 模板类型过滤条件，可选值：Preset：系统预置模板；Custom：用户自定义模板。 */
    Type?: string;
  }

  interface DescribeAnimatedGraphicsTemplatesResponse {
    /** 符合过滤条件的记录总数。 */
    TotalCount?: number;
    /** 转动图模板详情列表。 */
    AnimatedGraphicsTemplateSet?: AnimatedGraphicsTemplate[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeCDNStatDetailsRequest {
    /** 查询指标，取值有：Traffic：流量，单位为 Byte。Bandwidth：带宽，单位为 Bps。Requests：请求数。QUICRequests：QUIC 请求数。IpVisit：IP 访问数。 */
    Metric: string;
    /** 起始时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    StartTime: string;
    /** 结束时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    EndTime: string;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 域名列表。一次最多查询20个域名的数据。默认返回所有域名叠加的用量数据。 */
    DomainNames?: string[];
    /** 服务区域，取值有：Chinese Mainland：中国大陆。 Asia Pacific Region 1：亚太一区，包括中国香港、中国澳门、新加坡、越南、泰国。 Asia Pacific Region 2：亚太二区，包括中国台湾、日本、马来西亚、印度尼西亚、韩国。 Asia Pacific Region 3：亚太三区，包括菲律宾、印度、澳大利亚和亚太其它国家和地区。 Middle East：中东。 Europe：欧洲。North America：北美。South America：南美。Africa：非洲。默认为中国大陆。 */
    Area?: string;
    /** 用户所在地区，Area 为 Chinese Mainland 时，取值为以下地区信息，当 Area 为其它值时， 忽略 Districts 参数。Beijing：北京。Inner Mongolia：内蒙古。Shanxi：山西。Hebei：河北。Tianjin：天津。Ningxia：宁夏。Shaanxi：陕西。Gansu：甘肃。Qinghai：青海。Xinjiang：新疆。Heilongjiang：黑龙江。Jilin：吉林。Liaoning：辽宁。Fujian：福建。Jiangsu：江苏。Anhui：安徽。Shandong：山东。Shanghai：上海。Zhejiang：浙江。Henan：河南。Hubei：湖北。Jiangxi：江西。Hunan：湖南。Guizhou：贵州。Yunnan：云南。Chongqing：重庆。Sichuan：四川。Xizang：西藏。Guangdong：广东。Guangxi：广西。Hainan：海南。Hong Kong, Macao and Taiwan：港澳台。Outside Chinese Mainland：海外。Other：其他 。 */
    Districts?: string[];
    /** 用户所属运营商信息，Area 为 Chinese Mainland 时，取值为以下运营商信息。当 Area 为其它值时忽略 Isps 参数。China Telecom：中国电信。 China Unicom：中国联通。 CERNET：教育网。Great Wall Broadband Network：长城宽带。China Mobile：中国移动。China Mobile Tietong：中国铁通。ISPs outside Chinese Mainland：海外运营商。Other ISPs：其他运营商。 */
    Isps?: string[];
    /** 每条数据的时间粒度，单位：分钟，取值有：5：5 分钟粒度，返回指定查询时间内5分钟粒度的明细数据。1440：天粒度，返回指定查询时间内1天粒度的数据。起始时间和结束时间跨度大于24小时，只支持天粒度的数据。当 StartTime 和 EndTime 时间跨度大于24小时时，DataInterval 默认为 1440。 */
    DataInterval?: number;
  }

  interface DescribeCDNStatDetailsResponse {
    /** 每条数据的时间粒度，单位：分钟。 */
    DataInterval?: number;
    /** CDN 用量数据。 */
    Data?: StatDataItem[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeCDNUsageDataRequest {
    /** 起始日期，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    StartTime: string;
    /** 结束日期，需大于开始日期，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    EndTime: string;
    /** CDN 统计数据类型，有效值：Flux：流量，单位为 byte。Bandwidth：带宽，单位为 bps。 */
    DataType: string;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 用量数据的时间粒度，单位：分钟，取值有：5：5 分钟粒度，返回指定查询时间内5分钟粒度的明细数据。60：小时粒度，返回指定查询时间内1小时粒度的数据。1440：天粒度，返回指定查询时间内1天粒度的数据。默认值为1440，返回天粒度的数据。 */
    DataInterval?: number;
    /** 域名列表。一次最多查询20个域名的用量数据。可以指定多个域名，查询这些域名叠加的用量数据。默认返回所有域名叠加的用量数据。 */
    DomainNames?: string[];
  }

  interface DescribeCDNUsageDataResponse {
    /** 时间粒度，单位：分钟。 */
    DataInterval?: number;
    /** CDN 统计数据。 */
    Data?: StatDataItem[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeCLSLogsetsRequest {
    /** 日志集所属的地域，取值有： ap-guangzhou：广州； ap-beijing：北京； ap-chengdu：成都； ap-chongqing：重庆； ap-nanjing：南京； ap-shanghai：上海； ap-singapore：新加坡。 */
    CLSRegion: string;
  }

  interface DescribeCLSLogsetsResponse {
    /** 查询到的日志集列表。 */
    Logsets?: CLSLogsetInfo[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeCLSPushTargetsRequest {
    /** 点播域名。 */
    Domains: string[];
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
  }

  interface DescribeCLSPushTargetsResponse {
    /** 域名推送总数量。 */
    TotalCount?: number;
    /** 域名推送 CLS 目标列表。 */
    DomainCLSTargets?: DomainCLSTargetInfo[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeCLSTopicsRequest {
    /** 日志集所属的地域，取值有： ap-guangzhou：广州； ap-beijing：北京； ap-chengdu：成都； ap-chongqing：重庆； ap-nanjing：南京； ap-shanghai：上海； ap-singapore：新加坡。 */
    CLSRegion: string;
    /** 日志主题所属日志集 ID。 */
    LogsetId: string;
    /** 日志主题 ID 列表。如果不填，表示查询所有的日志主题。 */
    TopicIds?: string[];
    /** 分页偏移量，默认值：0。 */
    Offset?: number;
    /** 返回记录条数，默认值：20，最大值：100。 */
    Limit?: number;
  }

  interface DescribeCLSTopicsResponse {
    /** 日志主题总数量。 */
    TotalCount?: number;
    /** 日志主题列表。 */
    Topics?: CLSTopicInfo[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeCdnLogsRequest {
    /** 域名。 */
    DomainName: string;
    /** 获取日志起始时间点，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    StartTime: string;
    /** 结束时间需大于起始时间；使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    EndTime: string;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 分页拉取的最大返回结果数。默认值：100；最大值：1000。 */
    Limit?: number;
    /** 分页拉取的起始偏移量。默认值：0。 */
    Offset?: number;
  }

  interface DescribeCdnLogsResponse {
    /** 日志下载链接总数量。 */
    TotalCount?: number;
    /** 海外CDN节点的日志下载列表。如果域名没有开启海外加速，忽略该参数。 */
    OverseaCdnLogs?: CdnLogInfo[];
    /** 国内CDN节点的日志下载列表。 */
    DomesticCdnLogs?: CdnLogInfo[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeClientUploadAccelerationUsageDataRequest {
    /** 起始日期。使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    StartTime: string;
    /** 结束日期，需大于等于起始日期。使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    EndTime: string;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 客户端上传加速类型，取值有： AccelerationWithHTTP：HTTP 传输方式的上传加速。 AccelerationWithQUIC：QUIC 传输方式的上传加速。默认查询所有加速类型的用量 。 */
    Type?: string;
  }

  interface DescribeClientUploadAccelerationUsageDataResponse {
    /** 客户端上传加速统计数据。 */
    ClientUploadAccelerationUsageDataSet?: StatDataItem[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeContentReviewTemplatesRequest {
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 内容审核模板唯一标识过滤条件，数组长度限制：100。 */
    Definitions?: number[];
    /** 分页偏移量，默认值：0。 */
    Offset?: number;
    /** 返回记录条数，默认值：10，最大值：100。 */
    Limit?: number;
  }

  interface DescribeContentReviewTemplatesResponse {
    /** 符合过滤条件的记录总数。 */
    TotalCount?: number;
    /** 内容审核模板详情列表。 */
    ContentReviewTemplateSet?: ContentReviewTemplateItem[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeCurrentPlaylistRequest {
    /** 点播[应用](/document/product/266/14574) ID。 */
    SubAppId: number;
    /** 轮播播单唯一标识。 */
    RoundPlayId: string;
    /** 返回的播放列表的长度。最大10，默认值为5。 */
    Limit?: number;
  }

  interface DescribeCurrentPlaylistResponse {
    /** 当前播放列表信息。 */
    CurrentPlaylist?: RoundPlayFilePlayInfo[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeDailyMediaPlayStatRequest {
    /** 媒体文件 ID 。 */
    FileId: string;
    /** 起始日期，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。该参数仅日期部分有效。 */
    StartDate: string;
    /** 结束日期，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。该参数仅日期部分有效。 */
    EndDate: string;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
  }

  interface DescribeDailyMediaPlayStatResponse {
    /** 播放统计数据。 */
    DailyPlayStatInfoSet?: DailyPlayStatInfo[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeDailyMostPlayedStatRequest {
    /** 查询日期，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。该参数仅日期部分有效。 */
    Date: string;
    /** 域名。查询该域名播放 Top100 的媒体文件的统计数据。默认查询所有域名的播放统计数据。 */
    DomainName?: string;
    /** Top 数据的统计指标，取值有：Traffic：播放流量，按播放流量统计 Top100 的数据。PlayTimes：播放次数，按播放次数统计播放 Top100 的数据。默认值为Traffic。 */
    Metric?: string;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
  }

  interface DescribeDailyMostPlayedStatResponse {
    /** 媒体文件播放统计信息。 */
    DailyPlayStatInfoSet?: DailyPlayStatInfo[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeDailyPlayStatFileListRequest {
    /** 起始日期，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    StartTime: string;
    /** 结束日期，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    EndTime: string;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
  }

  interface DescribeDailyPlayStatFileListResponse {
    /** 播放统计文件列表。 */
    PlayStatFileSet?: PlayStatFileInfo[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeDefaultDistributionConfigRequest {
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
  }

  interface DescribeDefaultDistributionConfigResponse {
    /** 分发配置的域名(已废弃）。 */
    DomainName?: string;
    /** 分发配置的域名。 */
    Domain?: string;
    /** 分发配置的协议，为 HTTP 或 HTTPS。 */
    Scheme?: string;
    /** 播放密钥，由大小写字母（a - Z）或者数字（0 - 9）组成，长度在8 - 20个字符之间。 */
    PlayKey?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeDrmDataKeyRequest {
    /** 加密后的数据密钥列表，最大支持10个。 */
    EdkList: string[];
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
  }

  interface DescribeDrmDataKeyResponse {
    /** 密钥列表，包含加密的数据密钥。 */
    KeyList?: SimpleAesEdkPair[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeDrmKeyProviderInfoRequest {
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
  }

  interface DescribeDrmKeyProviderInfoResponse {
    /** 华曦达（SDMC）相关的 DRM 密钥提供商信息。 */
    SDMCInfo?: SDMCDrmKeyProviderInfo;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeEnhanceMediaTemplatesRequest {
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 音画质重生模板列表。长度限制：100。 */
    Definitions?: number[];
    /** 模板类型过滤条件，可选值：Preset：系统预置模板；Custom：用户自定义模板。 */
    Type?: string;
    /** 分页偏移量，默认值：0。 */
    Offset?: number;
    /** 返回记录条数，默认值：10，最大值：100。 */
    Limit?: number;
  }

  interface DescribeEnhanceMediaTemplatesResponse {
    /** 符合过滤条件的记录总数。 */
    TotalCount?: number;
    /** 音画质重生模板详情列表。 */
    RebuildMediaTemplateSet?: RebuildMediaTemplate[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeEventConfigRequest {
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
  }

  interface DescribeEventConfigResponse {
    /** 接收事件通知的方式。"PUSH" 为 [普通回调](https://cloud.tencent.com/document/product/266/33779)，"PULL" 为 [可靠回调](https://cloud.tencent.com/document/product/266/33779)。 */
    Mode?: string;
    /** 采用 [普通回调](https://cloud.tencent.com/document/product/266/33779) 模式时，用于接收 V3 版本事件通知的地址。 */
    NotificationUrl?: string;
    /** 是否接收 [视频上传完成](https://cloud.tencent.com/document/product/266/7830) 事件通知，"OFF" 为忽略该事件通知，"ON" 为接收事件通知。 */
    UploadMediaCompleteEventSwitch?: string;
    /** 是否接收 [视频删除完成](https://cloud.tencent.com/document/product/266/13434) 事件通知，"OFF" 为忽略该事件通知，"ON" 为接收事件通知。 */
    DeleteMediaCompleteEventSwitch?: string;
    /** 是否接收剪辑固化完成事件通知，"OFF" 为忽略该事件通知，"ON" 为接收事件通知。 */
    PersistenceCompleteEventSwitch?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeEventsStateRequest {
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
  }

  interface DescribeEventsStateResponse {
    /** 待进行拉取的事件通知数，为近似值，约5秒延迟。 */
    CountOfEventsToPull?: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeFileAttributesRequest {
    /** 媒体文件 ID */
    FileId: string;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 用于去重的识别码，如果三天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。 */
    SessionId?: string;
    /** 来源上下文，用于透传用户请求信息，任务流状态变更回调将返回该字段值，最长 1000 个字符。 */
    SessionContext?: string;
    /** 任务优先级，数值越大优先级越高，取值范围是-10到 10，不填代表0。 */
    TasksPriority?: number;
    /** 保留字段，特殊用途时使用。 */
    ExtInfo?: string;
  }

  interface DescribeFileAttributesResponse {
    /** 任务 ID 。 */
    TaskId?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeHeadTailTemplatesRequest {
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 片头片尾模板号，数组长度限制：100。 */
    Definitions?: number[];
    /** 分页偏移量，默认值：0。 */
    Offset?: number;
    /** 返回记录条数，默认值：10，最大值：100。 */
    Limit?: number;
  }

  interface DescribeHeadTailTemplatesResponse {
    /** 符合过滤条件的记录总数。 */
    TotalCount?: number;
    /** 片头片尾模板详情列表。 */
    HeadTailTemplateSet?: HeadTailTemplate[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeImageProcessingTemplatesRequest {
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 图片处理模板标识列表。长度限制：100。 */
    Definitions?: number[];
    /** 模板类型过滤条件，可选值：Preset：系统预置模板；Custom：用户自定义模板。 */
    Type?: string;
    /** 分页偏移量，默认值：0。 */
    Offset?: number;
    /** 返回记录条数，默认值：10，最大值：100。 */
    Limit?: number;
  }

  interface DescribeImageProcessingTemplatesResponse {
    /** 符合过滤条件的记录总数。 */
    TotalCount?: number;
    /** 图片处理模板详情列表。 */
    ImageProcessingTemplateSet?: ImageProcessingTemplate[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeImageReviewUsageDataRequest {
    /** 起始日期。使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    StartTime: string;
    /** 结束日期，需大于等于起始日期。使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    EndTime: string;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
  }

  interface DescribeImageReviewUsageDataResponse {
    /** 图片审核次数统计数据，展示查询时间范围内的图片审核次数的概览数据。 */
    ImageReviewUsageDataSet?: ImageReviewUsageDataItem[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeImageSpriteTemplatesRequest {
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 雪碧图模板唯一标识过滤条件，数组长度限制：100。 */
    Definitions?: number[];
    /** 分页偏移量，默认值：0。 */
    Offset?: number;
    /** 返回记录条数，默认值：10，最大值：100。 */
    Limit?: number;
    /** 模板类型过滤条件，可选值：Preset：系统预置模板；Custom：用户自定义模板。 */
    Type?: string;
  }

  interface DescribeImageSpriteTemplatesResponse {
    /** 符合过滤条件的记录总数。 */
    TotalCount?: number;
    /** 雪碧图模板详情列表。 */
    ImageSpriteTemplateSet?: ImageSpriteTemplate[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeJustInTimeTranscodeTemplatesRequest {
    /** 模板名过滤条件，数组长度限制：100。 */
    Names?: string[];
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 模板类型过滤条件，可选值：Preset：系统预置任务流模板；Custom：用户自定义任务流模板。 */
    Type?: string;
    /** 分页偏移量，默认值：0。 */
    Offset?: number;
    /** 返回记录条数，默认值：10，最大值：100。 */
    Limit?: number;
  }

  interface DescribeJustInTimeTranscodeTemplatesResponse {
    /** 符合过滤条件的记录总数。 */
    TotalCount?: number;
    /** 模板详情列表。 */
    JustInTimeTranscodeTemplateSet?: JustInTimeTranscodeTemplate[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeLicenseUsageDataRequest {
    /** 起始日期。使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    StartTime: string;
    /** 结束日期，需大于等于起始日期。使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    EndTime: string;
    /** License 类型，默认为 CommercialDRMLicense 。目前支持的 License 类型包括： CommercialDRMLicense: 商业级 DRM License JITEncryptionDRMLicense: 即时加密 DRM License */
    LicenseType?: string;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
  }

  interface DescribeLicenseUsageDataResponse {
    /** License 查询次数统计数据，展示所查询 License 次数的明细数据。 */
    LicenseUsageDataSet?: LicenseUsageDataItem[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeMediaInfosRequest {
    /** 媒体文件 ID 列表，N 从 0 开始取值，最大 19。 */
    FileIds: string[];
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 指定所有媒体文件需要返回的信息，可同时指定多个信息，N 从 0 开始递增。如果未填写该字段，默认返回所有信息。选项有：basicInfo（视频基础信息）。metaData（视频元信息）。transcodeInfo（视频转码结果信息）。animatedGraphicsInfo（视频转动图结果信息）。imageSpriteInfo（视频雪碧图信息）。snapshotByTimeOffsetInfo（视频指定时间点截图信息）。sampleSnapshotInfo（采样截图信息）。keyFrameDescInfo（打点信息）。adaptiveDynamicStreamingInfo（转自适应码流信息）。miniProgramReviewInfo（小程序审核信息）。subtitleInfo（字幕信息）。reviewInfo（审核信息）。 */
    Filters?: string[];
  }

  interface DescribeMediaInfosResponse {
    /** 媒体文件信息列表。 */
    MediaInfoSet?: MediaInfo[];
    /** 不存在的文件 ID 列表。 */
    NotExistFileIdSet?: string[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeMediaPlayStatDetailsRequest {
    /** 媒体文件 ID。 */
    FileId: string;
    /** 起始时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    StartTime: string;
    /** 结束时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    EndTime: string;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 统计时间粒度，有效值：Hour：以小时为粒度。Day：以天为粒度。默认按时间跨度决定，小于1天以小时为粒度，大于等于1天则以天为粒度。 */
    Interval?: string;
  }

  interface DescribeMediaPlayStatDetailsResponse {
    /** 播放统计数据。 */
    PlayStatInfoSet?: PlayStatInfo[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeMediaProcessUsageDataRequest {
    /** 起始日期。使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    StartTime: string;
    /** 结束日期，需大于等于起始日期。使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    EndTime: string;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 查询视频处理任务类型，目前支持的任务类型包括： Transcoding: 普通转码 Transcoding-TESHD: 极速高清转码 Editing: 视频编辑 Editing-TESHD: 极速高清视频编辑 AdaptiveBitrateStreaming: 自适应码流 ContentAudit: 内容审核 ContentRecognition: 内容识别 RemoveWatermark: 去除水印 ExtractTraceWatermark: 提取水印 AddTraceWatermark: 添加水印 RebuildMedia: 音画质重生 QualityInspect: 音画质检测 VideoHighlight: 视频智能集锦 VideoTag: 视频智能标签 VideoClassification: 视频智能分类 VideoCover: 视频智能封面 VideoSegment: 视频智能拆条 VideoProduce: 视频制作 MediaCast: 媒体转推Transcode: 转码，包含普通转码、极速高清和视频编辑（不推荐使用）VoiceTranslation: 语音翻译JITTranscoding: 即时转码VideoSnapshot: 视频截图JITEncryption: 即时加密 */
    Type?: string;
  }

  interface DescribeMediaProcessUsageDataResponse {
    /** 视频处理统计数据概览，展示所查询任务的概览以及详细数据。 */
    MediaProcessDataSet?: TaskStatData[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribePersonSamplesRequest {
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 拉取的素材类型，可选值：UserDefine：用户自定义素材库；Default：系统默认素材库。默认值：UserDefine，拉取用户自定义素材库素材。说明：如果是拉取系统默认素材库，只能使用素材名字或者素材 ID + 素材名字的方式进行拉取，且五官图片只返回一张。 */
    Type?: string;
    /** 素材 ID，数组长度限制：100。 */
    PersonIds?: string[];
    /** 素材名称，数组长度限制：20。 */
    Names?: string[];
    /** 素材标签，数组长度限制：20。 */
    Tags?: string[];
    /** 分页偏移量，默认值：0。 */
    Offset?: number;
    /** 返回记录条数，默认值：100，最大值：100。 */
    Limit?: number;
  }

  interface DescribePersonSamplesResponse {
    /** 符合条件的记录总数。 */
    TotalCount?: number;
    /** 人物信息。 */
    PersonSet?: AiSamplePerson[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribePrepaidProductsRequest {
  }

  interface DescribePrepaidProductsResponse {
    /** 购买的预付费商品实例列表。 */
    ProductInstanceSet?: ProductInstance[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeProcedureTemplatesRequest {
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 任务流模板名字过滤条件，数组长度限制：100。 */
    Names?: string[];
    /** 任务流模板类型过滤条件，可选值：Preset：系统预置任务流模板；Custom：用户自定义任务流模板。 */
    Type?: string;
    /** 分页偏移量，默认值：0。 */
    Offset?: number;
    /** 返回记录条数，默认值：10，最大值：100。 */
    Limit?: number;
  }

  interface DescribeProcedureTemplatesResponse {
    /** 符合过滤条件的记录总数。 */
    TotalCount?: number;
    /** 任务流模板详情列表。 */
    ProcedureTemplateSet?: ProcedureTemplate[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeQualityInspectTemplatesRequest {
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 音画质检测模板列表。长度限制：100。 */
    Definitions?: number[];
    /** 模板类型过滤条件，可选值：Preset：系统预置模板；Custom：用户自定义模板。 */
    Type?: string;
    /** 分页偏移量，默认值：0。 */
    Offset?: number;
    /** 返回记录条数，默认值：10，最大值：100。 */
    Limit?: number;
  }

  interface DescribeQualityInspectTemplatesResponse {
    /** 符合过滤条件的记录总数。 */
    TotalCount?: number;
    /** 音画质检测模板详情列表。 */
    QualityInspectTemplateSet?: QualityInspectTemplateItem[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeRebuildMediaTemplatesRequest {
    /** 视频重生模板列表。 */
    Definitions?: number[];
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 模板类型过滤条件，可选值：Preset：系统预置模板；Custom：用户自定义模板。 */
    Type?: string;
    /** 分页偏移量，默认值：0。 */
    Offset?: number;
    /** 返回记录条数，默认值：10，最大值：100。 */
    Limit?: number;
  }

  interface DescribeRebuildMediaTemplatesResponse {
    /** 符合过滤条件的记录总数。 */
    TotalCount?: number;
    /** 视频重生模板详情列表。 */
    RebuildMediaTemplateSet?: RebuildMediaTemplate[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeReviewDetailsRequest {
    /** 起始日期。使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    StartTime: string;
    /** 结束日期，需大于起始日期。使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    EndTime: string;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
  }

  interface DescribeReviewDetailsResponse {
    /** 发起内容智能识别次数。 */
    TotalCount?: number;
    /** 内容智能识别总时长。 */
    TotalDuration?: number;
    /** 内容智能识别时长统计数据，每天一个数据。 */
    Data?: StatDataItem[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeReviewTemplatesRequest {
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 审核模板唯一标识过滤条件，数组长度限制：100。 */
    Definitions?: number[];
    /** 模板类型过滤条件，可选值：Preset：系统预置模板；Custom：用户自定义模板。 */
    Type?: string;
    /** 分页偏移量，默认值：0。 */
    Offset?: number;
    /** 返回记录条数，默认值：10，最大值：100。 */
    Limit?: number;
  }

  interface DescribeReviewTemplatesResponse {
    /** 符合过滤条件的记录总数。 */
    TotalCount?: number;
    /** 审核模板详情列表。 */
    ReviewTemplateSet?: ReviewTemplate[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeRoundPlaysRequest {
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 过滤条件：轮播播单标识，数组长度限制：100。 */
    RoundPlayIds?: string[];
    /** 过滤条件，轮播播单状态，可选值： Enabled：启动状态； Disabled：停止状态。 */
    Status?: string;
    /** 过滤条件：轮播播单创建时间。 */
    CreateTime?: TimeRange;
    /** 过滤条件：轮播播单更新时间。 */
    UpdateTime?: TimeRange;
    /** 翻页标识，分批拉取时使用：当单次请求无法拉取所有数据，接口将会返回 ScrollToken，下一次请求携带该 Token，将会从下一条记录开始获取。 */
    ScrollToken?: string;
    /** 分页偏移量，默认值：0。已经废弃，请根据 ScrollToken 参数进行分批次查询。 */
    Offset?: number;
    /** 返回记录条数，默认值：10，最大值：100。 */
    Limit?: number;
  }

  interface DescribeRoundPlaysResponse {
    /** 符合过滤条件的轮播播单总数。已经废弃，分批次查询请请使用 ScrollToken 参数。 */
    TotalCount?: number;
    /** 轮播播单详情列表。 */
    RoundPlaySet?: RoundPlayInfo[];
    /** 翻页标识，当请求未返回所有数据，该字段表示下一条记录的 ID。当该字段为空，说明已无更多数据。 */
    ScrollToken?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeSampleSnapshotTemplatesRequest {
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 采样截图模板唯一标识过滤条件，数组长度限制：100。 */
    Definitions?: number[];
    /** 分页偏移量，默认值：0。 */
    Offset?: number;
    /** 返回记录条数，默认值：10，最大值：100。 */
    Limit?: number;
    /** 模板类型过滤条件，可选值：Preset：系统预置模板；Custom：用户自定义模板。 */
    Type?: string;
  }

  interface DescribeSampleSnapshotTemplatesResponse {
    /** 符合过滤条件的记录总数。 */
    TotalCount?: number;
    /** 采样截图模板详情列表。 */
    SampleSnapshotTemplateSet?: SampleSnapshotTemplate[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeSnapshotByTimeOffsetTemplatesRequest {
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 指定时间点截图模板唯一标识过滤条件，数组长度限制：100。 */
    Definitions?: number[];
    /** 分页偏移量，默认值：0。 */
    Offset?: number;
    /** 返回记录条数，默认值：10，最大值：100。 */
    Limit?: number;
    /** 模板类型过滤条件，可选值：Preset：系统预置模板；Custom：用户自定义模板。 */
    Type?: string;
  }

  interface DescribeSnapshotByTimeOffsetTemplatesResponse {
    /** 符合过滤条件的记录总数。 */
    TotalCount?: number;
    /** 指定时间点截图模板详情列表。 */
    SnapshotByTimeOffsetTemplateSet?: SnapshotByTimeOffsetTemplate[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeStorageDataRequest {
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
  }

  interface DescribeStorageDataResponse {
    /** 当前媒体总量。 */
    MediaCount?: number;
    /** 当前总存储量，单位是字节。 */
    TotalStorage?: number;
    /** 当前标准存储量，单位是字节。 */
    StandardStorage?: number;
    /** 当前低频存储量，单位是字节。 */
    InfrequentStorage?: number;
    /** 当前归档存储量，单位是字节。 */
    ArchiveStorage?: number;
    /** 当前深度归档存储量，单位是字节。 */
    DeepArchiveStorage?: number;
    /** 各计费区域的存储用量。 */
    StorageStat?: StorageStatData[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeStorageDetailsRequest {
    /** 起始时间，格式按照 ISO 8601标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732)。 */
    StartTime: string;
    /** 结束时间，需大于开始日期，格式按照 ISO 8601标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732)。 */
    EndTime: string;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 统计时间粒度，有效值：Minute：以5分钟为粒度。Day：以天为粒度。默认按时间跨度决定，小于等于1天以5分钟为粒度，大于1天则以天为粒度。 */
    Interval?: string;
    /** 查询的存储类型，有效值：TotalStorage：存储总量，标准、低频、归档和深度归档存储量之和，不含提前删除量。StandardStorage：标准存储。InfrequentStorage：低频存储。ArchiveStorage：归档存储。DeepArchiveStorage：深度归档存储。DeletedInfrequentStorage：低频存储提前删除量。DeletedArchiveStorage：归档提前删除量。DeletedDeepArchiveStorage：深度归档提前删除量。ArchiveStandardRetrieval：归档标准取回量。ArchiveExpeditedRetrieval：归档快速取回量。ArchiveBulkRetrieval：归档批量取回量。DeepArchiveStandardRetrieval：深度归档标准取回量。DeepArchiveBulkRetrieval：深度归档批量取回量。InfrequentRetrieval：低频存储取回量。默认值为 TotalStorage。 */
    StorageType?: string;
    /** 查询的存储区域，有效值：Chinese Mainland：中国境内（不包含港澳台）。Outside Chinese Mainland：中国境外。默认值为 Chinese Mainland。 */
    Area?: string;
  }

  interface DescribeStorageDetailsResponse {
    /** 存储统计数据，每5分钟或每天一条数据。 */
    Data?: StatDataItem[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeStorageRegionsRequest {
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
  }

  interface DescribeStorageRegionsResponse {
    /** 存储地域信息列表。 */
    StorageRegionInfos?: StorageRegionInfo[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeSubAppIdsRequest {
    /** 应用名称。 */
    Name?: string;
    /** 标签信息，查询指定标签的应用列表。 */
    Tags?: ResourceTag[];
    /** 分页拉取的起始偏移量。默认值：0。 */
    Offset?: number;
    /** 分页拉取的最大返回结果数。默认值：200；最大值：200。 */
    Limit?: number;
  }

  interface DescribeSubAppIdsResponse {
    /** 应用信息集合。 */
    SubAppIdInfoSet?: SubAppIdInfo[];
    /** 应用总数量。 */
    TotalCount?: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeSuperPlayerConfigsRequest {
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 播放器配置名字过滤条件，数组长度限制：100。 */
    Names?: string[];
    /** 分页偏移量，默认值：0。 */
    Offset?: number;
    /** 返回记录条数，默认值：10，最大值：100。 */
    Limit?: number;
    /** 播放器配置类型过滤条件，可选值：Preset：系统预置配置；Custom：用户自定义配置。 */
    Type?: string;
  }

  interface DescribeSuperPlayerConfigsResponse {
    /** 符合过滤条件的记录总数。 */
    TotalCount?: number;
    /** 播放器配置数组。 */
    PlayerConfigSet?: PlayerConfig[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeTaskDetailRequest {
    /** 视频处理任务的任务 ID。 */
    TaskId: string;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
  }

  interface DescribeTaskDetailResponse {
    /** 任务类型，取值：Procedure：视频处理任务；EditMedia：视频编辑任务；SplitMedia：视频拆条任务；ComposeMedia：制作媒体文件任务；WechatPublish：微信发布任务；WechatMiniProgramPublish：微信小程序视频发布任务；PullUpload：拉取上传媒体文件任务；FastClipMedia：快速剪辑任务；RemoveWatermarkTask：智能去除水印任务；DescribeFileAttributesTask：获取文件属性任务；RebuildMedia：音画质重生任务（不推荐使用）；ReviewAudioVideo：音视频审核任务；ExtractTraceWatermark：提取溯源水印任务；ExtractCopyRightWatermark：提取版权水印任务；QualityInspect：音画质检测任务；QualityEnhance：音画质重生任务；ComplexAdaptiveDynamicStreaming：复杂自适应码流任务；ProcessMediaByMPS：MPS 视频处理任务。 */
    TaskType?: string;
    /** 任务状态，取值：WAITING：等待中；PROCESSING：处理中；FINISH：已完成；ABORTED：已终止。 */
    Status?: string;
    /** 任务的创建时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    CreateTime?: string;
    /** 任务开始执行的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    BeginProcessTime?: string;
    /** 任务执行完毕的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
    FinishTime?: string;
    /** 视频处理任务信息，仅当 TaskType 为 Procedure，该字段有值。 */
    ProcedureTask?: ProcedureTask | null;
    /** 视频编辑任务信息，仅当 TaskType 为 EditMedia，该字段有值。 */
    EditMediaTask?: EditMediaTask | null;
    /** 微信发布任务信息，仅当 TaskType 为 WechatPublish，该字段有值。 */
    WechatPublishTask?: WechatPublishTask | null;
    /** 制作媒体文件任务信息，仅当 TaskType 为 ComposeMedia，该字段有值。 */
    ComposeMediaTask?: ComposeMediaTask | null;
    /** 视频拆条任务信息，仅当 TaskType 为 SplitMedia，该字段有值。 */
    SplitMediaTask?: SplitMediaTask | null;
    /** 微信小程序发布任务信息，仅当 TaskType 为 WechatMiniProgramPublish，该字段有值。 */
    WechatMiniProgramPublishTask?: WechatMiniProgramPublishTask | null;
    /** 拉取上传媒体文件任务信息，仅当 TaskType 为 PullUpload，该字段有值。 */
    PullUploadTask?: PullUploadTask | null;
    /** 视频转码任务信息，仅当 TaskType 为 Transcode，该字段有值。 */
    TranscodeTask?: TranscodeTask2017 | null;
    /** 视频拼接任务信息，仅当 TaskType 为 Concat，该字段有值。 */
    ConcatTask?: ConcatTask2017 | null;
    /** 视频剪辑任务信息，仅当 TaskType 为 Clip，该字段有值。 */
    ClipTask?: ClipTask2017 | null;
    /** 截取雪碧图任务信息，仅当 TaskType 为 ImageSprite，该字段有值。 */
    CreateImageSpriteTask?: CreateImageSpriteTask2017 | null;
    /** 视频指定时间点截图任务信息，仅当 TaskType 为 SnapshotByTimeOffset，该字段有值。 */
    SnapshotByTimeOffsetTask?: SnapshotByTimeOffsetTask2017 | null;
    /** 智能去除水印任务信息，仅当 TaskType 为 RemoveWatermark，该字段有值。 */
    RemoveWatermarkTask?: RemoveWatermarkTask | null;
    /** 音画质重生任务信息，仅当 TaskType 为 RebuildMedia，该字段有值。 */
    RebuildMediaTask?: RebuildMediaTask | null;
    /** 提取溯源水印任务信息，仅当 TaskType 为 ExtractTraceWatermark，该字段有值。 */
    ExtractTraceWatermarkTask?: ExtractTraceWatermarkTask | null;
    /** 提取版权水印任务信息，仅当 TaskType 为 ExtractCopyRightWatermark，该字段有值。 */
    ExtractCopyRightWatermarkTask?: ExtractCopyRightWatermarkTask | null;
    /** 音视频审核任务信息，仅当 TaskType 为 ReviewAudioVideo，该字段有值。 */
    ReviewAudioVideoTask?: ReviewAudioVideoTask | null;
    /** 该字段已无效。 */
    ReduceMediaBitrateTask?: ReduceMediaBitrateTask | null;
    /** 获取文件属性任务信息，仅当 TaskType 为 DescribeFileAttributes，该字段有值。 */
    DescribeFileAttributesTask?: DescribeFileAttributesTask | null;
    /** 音画质检测任务信息，仅当 TaskType 为 QualityInspect 时该字段有值。 */
    QualityInspectTask?: QualityInspectTask | null;
    /** 音画质重生任务信息，仅当 TaskType 为 QualityEnhance，该字段有值。 */
    QualityEnhanceTask?: QualityEnhanceTask | null;
    /** 复杂自适应码流任务信息，仅当 TaskType 为 ComplexAdaptiveDynamicStreaming，该字段有值。 */
    ComplexAdaptiveDynamicStreamingTask?: ComplexAdaptiveDynamicStreamingTask | null;
    /** MPS 视频处理任务信息，仅当 TaskType 为 ProcessMediaByMPS，该字段有值。 */
    ProcessMediaByMPSTask?: ProcessMediaByMPS;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeTasksRequest {
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 过滤条件：任务状态，可选值：WAITING（等待中）、PROCESSING（处理中）、FINISH（已完成）。 */
    Status?: string;
    /** 过滤条件：文件 ID。 */
    FileId?: string;
    /** 过滤条件：任务创建时间。 */
    CreateTime?: TimeRange;
    /** 过滤条件：任务结束时间。 */
    FinishTime?: TimeRange;
    /** 排序方式。Sort.Field 可选： CreateTime 任务创建时间。FinishTime 任务结束时间。 */
    Sort?: SortBy;
    /** 返回记录条数，默认值：10，最大值：100。 */
    Limit?: number;
    /** 翻页标识，分批拉取时使用：当单次请求无法拉取所有数据，接口将会返回 ScrollToken，下一次请求携带该 Token，将会从下一条记录开始获取。 */
    ScrollToken?: string;
  }

  interface DescribeTasksResponse {
    /** 任务概要列表。 */
    TaskSet?: TaskSimpleInfo[];
    /** 翻页标识，当请求未返回所有数据，该字段表示下一条记录的 ID。当该字段为空，说明已无更多数据。 */
    ScrollToken?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeTranscodeTemplatesRequest {
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 转码模板唯一标识过滤条件，数组长度限制：100。 */
    Definitions?: number[];
    /** 模板类型过滤条件，可选值：Preset：系统预置模板；Custom：用户自定义模板。 */
    Type?: string;
    /** 封装格式过滤条件，可选值：Video：视频格式，可以同时包含视频流和音频流的封装格式板；PureAudio：纯音频格式，只能包含音频流的封装格式。 */
    ContainerType?: string;
    /** 极速高清过滤条件，用于过滤普通转码或极速高清转码模板，可选值：Common：普通转码模板；TEHD：极速高清模板。 */
    TEHDType?: string;
    /** 分页偏移量，默认值：0。 */
    Offset?: number;
    /** 返回记录条数，默认值：10，最大值：100。 */
    Limit?: number;
  }

  interface DescribeTranscodeTemplatesResponse {
    /** 符合过滤条件的记录总数。 */
    TotalCount?: number;
    /** 转码模板详情列表。 */
    TranscodeTemplateSet?: TranscodeTemplate[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeVodDomainsRequest {
    /** 域名列表。当该字段不填时，则默认列出所有域名信息。本字段限制如下：域名个数度最大为 20。 */
    Domains?: string[];
    /** 分页拉取的最大返回结果数。默认值：20。 */
    Limit?: number;
    /** 分页拉取的起始偏移量。默认值：0。 */
    Offset?: number;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
  }

  interface DescribeVodDomainsResponse {
    /** 域名总数量。 */
    TotalCount?: number;
    /** 域名信息列表。 */
    DomainSet?: DomainDetailInfo[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeWatermarkTemplatesRequest {
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 水印类型过滤条件，可选值：image：图片水印；text：文字水印；svg：SVG 水印。 */
    Type?: string;
    /** 分页偏移量，默认值：0。 */
    Offset?: number;
    /** 水印模板唯一标识过滤条件，数组长度限制：100。 */
    Definitions?: number[];
    /** 返回记录条数默认值：10；最大值：100。 */
    Limit?: number;
  }

  interface DescribeWatermarkTemplatesResponse {
    /** 符合过滤条件的记录总数。 */
    TotalCount?: number;
    /** 水印模板详情列表。 */
    WatermarkTemplateSet?: WatermarkTemplate[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeWordSamplesRequest {
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 关键词应用场景过滤条件，可选值：1. Recognition.Ocr：通过光学字符识别技术，进行内容识别；2. Recognition.Asr：通过音频识别技术，进行内容识别；3. Review.Ocr：通过光学字符识别技术，进行不适宜的内容识别；4. Review.Asr：通过音频识别技术，进行不适宜的内容识别；可合并简写为：5. Recognition：通过光学字符识别技术、音频识别技术，进行内容识别，等价于 1+2；6. Review：通过光学字符识别技术、音频识别技术，进行不适宜的内容识别，等价于 3+4；可多选，元素间关系为 or，即关键词的应用场景包含该字段集合中任意元素的记录，均符合该条件。 */
    Usages?: string[];
    /** 关键词过滤条件，数组长度限制：100 个词。 */
    Keywords?: string[];
    /** 标签过滤条件，数组长度限制：20 个词。 */
    Tags?: string[];
    /** 分页偏移量，默认值：0。 */
    Offset?: number;
    /** 返回记录条数，默认值：100，最大值：100。 */
    Limit?: number;
  }

  interface DescribeWordSamplesResponse {
    /** 符合条件的记录总数。 */
    TotalCount?: number;
    /** 关键词信息。 */
    WordSet?: AiSampleWord[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface EditMediaRequest {
    /** 输入视频的类型，可以取的值为 File，Stream 两种。 */
    InputType: string;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 输入的视频文件信息，当 InputType 为 File 时必填。 */
    FileInfos?: EditMediaFileInfo[];
    /** 输入的流信息，当 InputType 为 Stream 时必填。 */
    StreamInfos?: EditMediaStreamInfo[];
    /** 编辑模板 ID，取值有 10，20，不填代表使用 10 模板。10：拼接时，以分辨率最高的输入为基准；20：拼接时，以码率最高的输入为基准。 */
    Definition?: number;
    /** [任务流](https://cloud.tencent.com/document/product/266/33475)名称，如果要对生成的新视频执行任务流时填写。 */
    ProcedureName?: string;
    /** 编辑后生成的文件配置。 */
    OutputConfig?: EditMediaOutputConfig;
    /** 标识来源上下文，用于透传用户请求信息，在EditMediaComplete回调和任务流状态变更回调将返回该字段值，最长 1000个字符。 */
    SessionContext?: string;
    /** 任务的优先级，数值越大优先级越高，取值范围是 -10 到 10，不填代表 0。 */
    TasksPriority?: number;
    /** 用于任务去重的识别码，如果三天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。 */
    SessionId?: string;
    /** 保留字段，特殊用途时使用。 */
    ExtInfo?: string;
  }

  interface EditMediaResponse {
    /** 编辑视频的任务 ID，可以通过该 ID 查询编辑任务（任务类型为 EditMedia）的状态。 */
    TaskId?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface EnhanceMediaByTemplateRequest {
    /** 媒体文件 ID。 */
    FileId: string;
    /** 音画质重生模板 ID。 */
    Definition: number;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 起始偏移时间，单位：秒，不填表示从视频开始截取。 */
    StartTimeOffset?: number;
    /** 结束偏移时间，单位：秒，不填表示截取到视频末尾。 */
    EndTimeOffset?: number;
    /** 音画质重生后的文件配置。 */
    OutputConfig?: RebuildMediaOutputConfig;
    /** 用于去重的识别码，如果三天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。 */
    SessionId?: string;
    /** 来源上下文，用于透传用户请求信息，任务流状态变更回调将返回该字段值，最长 1000 个字符。 */
    SessionContext?: string;
    /** 任务的优先级，数值越大优先级越高，取值范围是 -10 到 10，不填代表 0。 */
    TasksPriority?: number;
    /** 保留字段，特殊用途时使用。 */
    ExtInfo?: string;
  }

  interface EnhanceMediaByTemplateResponse {
    /** 音画质重生的任务 ID，可以通过该 ID 查询音画质重生任务的状态。 */
    TaskId?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface EnhanceMediaQualityRequest {
    /** 媒体文件 ID，即该文件在云点播上的全局唯一标识符，在上传成功后由云点播后台分配。可以在 [视频上传完成事件通知](/document/product/266/7830) 或 [云点播控制台](https://console.cloud.tencent.com/vod/media) 获取该字段。 */
    FileId: string;
    /** 音画质重生模板 ID。针对典型的使用场景，云点播提供了多个[预置模板](https://cloud.tencent.com/document/product/266/102586)。 */
    Definition: number;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 音画质重生后的媒体文件配置。 */
    OutputConfig?: EnhanceMediaQualityOutputConfig;
    /** 用于去重的识别码，如果三天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。 */
    SessionId?: string;
    /** 来源上下文，用于透传用户请求信息，音画质重生完成回调将返回该字段值，最长 1000 个字符。 */
    SessionContext?: string;
    /** 任务的优先级，数值越大优先级越高，取值范围是 -10 到 10，不填代表 0。 */
    TasksPriority?: number;
  }

  interface EnhanceMediaQualityResponse {
    /** 音画质重生任务 ID。 */
    TaskId?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ExecuteFunctionRequest {
    /** 调用后端接口名称。 */
    FunctionName: string;
    /** 接口参数，具体参数格式调用时与后端协调。 */
    FunctionArg: string;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 来源上下文，用于透传用户请求信息，任务流状态变更回调将返回该字段值，最长 1000 个字符。 */
    SessionContext?: string;
    /** 用于去重的识别码，如果七天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。 */
    SessionId?: string;
    /** 保留字段，特殊用途时使用。 */
    ExtInfo?: string;
  }

  interface ExecuteFunctionResponse {
    /** 处理结果打包后的字符串，具体与后台一同协调。 */
    Result?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ExtractCopyRightWatermarkRequest {
    /** 需要提取水印的媒体 URL。 */
    Url: string;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 标识来源上下文，用于透传用户请求信息，在 ExtractCopyRightWatermarkComplete 回调和任务流状态变更回调将返回该字段值，最长 1000 个字符。 */
    SessionContext?: string;
    /** 用于任务去重的识别码，如果三天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。 */
    SessionId?: string;
    /** 任务的优先级，数值越大优先级越高，取值范围是 -10 到 10，不填代表 0。 */
    TasksPriority?: number;
    /** 保留字段，特殊用途时使用。 */
    ExtInfo?: string;
  }

  interface ExtractCopyRightWatermarkResponse {
    /** 任务 ID。 */
    TaskId?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ExtractTraceWatermarkRequest {
    /** 需要提取水印的媒体 URL。 */
    Url: string;
    /** 媒体文件 ID。Url 对应的原始媒体文件 ID。注意：此字段必填。 */
    FileId?: string;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 标识来源上下文，用于透传用户请求信息，在ExtractTraceWatermarkComplete回调和任务流状态变更回调将返回该字段值，最长 1000个字符。 */
    SessionContext?: string;
    /** 用于任务去重的识别码，如果三天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。 */
    SessionId?: string;
    /** 任务的优先级，数值越大优先级越高，取值范围是 -10 到 10，不填代表 0。 */
    TasksPriority?: number;
    /** 保留字段，特殊用途时使用。 */
    ExtInfo?: string;
  }

  interface ExtractTraceWatermarkResponse {
    /** 任务 ID。 */
    TaskId?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface FastEditMediaRequest {
    /** 输入的媒体文件信息。最多支持传入100个媒体。 */
    FileInfos: FastEditMediaFileInfo[];
    /** ClipMode 用来表示剪辑时间点落在一个 TS 分片中间时，是否包含这个分片。共有两种取值： StartInclusiveEndInclusive：当剪辑起始时间点和结束时间点落在一个分片的中间时，都会包含这个分片； StartInclusiveEndExclusive：当起始时间点落在一个分片的中间时，会包含这个分片；而当结束时间点落在一个分片的中间时，不会包含这个分片。 不填时，默认为 StartInclusiveEndInclusive。 */
    ClipMode?: string;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
  }

  interface FastEditMediaResponse {
    /** 快速编辑后的视频的媒体文件的唯一标识。 */
    FileId?: string;
    /** 快速编辑后的媒体播放地址。 */
    Url?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ForbidMediaDistributionRequest {
    /** 媒体文件列表，每次最多可提交 20 条。 */
    FileIds: string[];
    /** forbid：禁播，recover：解禁。 */
    Operation: string;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
  }

  interface ForbidMediaDistributionResponse {
    /** 不存在的文件 ID 列表。 */
    NotExistFileIdSet?: string[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface HandleCurrentPlaylistRequest {
    /** 点播[应用](/document/product/266/14574) ID。 */
    SubAppId: number;
    /** 轮播播单唯一标识。 */
    RoundPlayId: string;
    /** 操作类型，取值有：Insert：向当前播放列表插入节目。插入的节目在后续轮播过程仍然有效。 InsertTemporary：向当前播放列表临时插入节目。临时插入的节目只在本次轮播过程生效。Delete：删除播放列表中的节目。不能删除正在播放的节目。 */
    Operation: string;
    /** 播单节目 ID。 当 Operation 为 Insert 时，该字段必填，表示插入的节目列表位于该节目之后。 当 Operation 为 InsertTemporary 时，该字段选填，不填时表示插入节目到最近的一个插入点上。当该字段填写时，如果同时填写 SegmentIndex，表示节目被插入到 ItemId 对应节目的第 SegmentIndex 分片后面，否则插入到该节目之后。 当 Operation 为 Delete 时，该字段必填，表示删除该节目。不能删除正在播放的节目。 */
    ItemId?: string;
    /** M3U8 文件分片的索引号。M3U8 文件第一个分片的 SegmentIndex 为0。当 Operation 为 InsertTemporary 且 ItemId 有值时该参数有效。 */
    SegmentIndex?: number;
    /** 节目列表。当 Operation 为 Insert、InsertTemporary、Delete 时必填，表示要操作的节目列表。列表长度最大为10。 */
    RoundPlaylist?: RoundPlayListItemInfo[];
  }

  interface HandleCurrentPlaylistResponse {
    /** 操作成功的节目列表。 */
    RoundPlaylist?: RoundPlayListItemInfo[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface InspectMediaQualityRequest {
    /** 媒体文件 ID，即该文件在云点播上的全局唯一标识符，在上传成功后由云点播后台分配。可以在 [视频上传完成事件通知](/document/product/266/7830) 或 [云点播控制台](https://console.cloud.tencent.com/vod/media) 获取该字段。 */
    FileId: string;
    /** 音画质检测模板 ID。 */
    Definition: number;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 任务的优先级，数值越大优先级越高，取值范围是 -10 到 10，不填代表 0。 */
    TasksPriority?: number;
    /** 来源上下文，用于透传用户请求信息，音画质检测完成回调将返回该字段值，最长 1000 个字符。 */
    SessionContext?: string;
    /** 用于去重的识别码，如果三天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。 */
    SessionId?: string;
    /** 保留字段，特殊用途时使用。 */
    ExtInfo?: string;
  }

  interface InspectMediaQualityResponse {
    /** 音画质检测任务 ID。 */
    TaskId?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface LiveRealTimeClipRequest {
    /** 推流直播码。 */
    StreamId: string;
    /** 流剪辑的开始时间，格式参照 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732)。 */
    StartTime: string;
    /** 流剪辑的结束时间，格式参照 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732)。 */
    EndTime: string;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 是否固化。0 不固化，1 固化。默认不固化。 */
    IsPersistence?: number;
    /** 剪辑固化后的视频存储过期时间。格式参照 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。填“9999-12-31T23:59:59Z”表示永不过期。过期后该媒体文件及其相关资源（转码结果、雪碧图等）将被永久删除。仅 IsPersistence 为 1 时有效，默认剪辑固化的视频永不过期。 */
    ExpireTime?: string;
    /** 剪辑固化后的视频点播任务流处理，详见[上传指定任务流](https://cloud.tencent.com/document/product/266/9759)。仅 IsPersistence 为 1 时有效。 */
    Procedure?: string;
    /** 分类ID，用于对媒体进行分类管理，可通过 [创建分类](/document/product/266/7812) 接口，创建分类，获得分类 ID。默认值：0，表示其他分类。仅 IsPersistence 为 1 时有效。 */
    ClassId?: number;
    /** 来源上下文，用于透传用户请求信息，[上传完成回调](/document/product/266/7830) 将返回该字段值，最长 250 个字符。仅 IsPersistence 为 1 时有效。 */
    SourceContext?: string;
    /** 会话上下文，用于透传用户请求信息，当指定 Procedure 参数后，[任务流状态变更回调](/document/product/266/9636) 将返回该字段值，最长 1000 个字符。仅 IsPersistence 为 1 时有效。 */
    SessionContext?: string;
    /** 是否需要返回剪辑后的视频元信息。0 不需要，1 需要。默认不需要。 */
    MetaDataRequired?: number;
    /** 云点播中添加的用于时移播放的域名，必须在云直播已经[关联录制模板和开通时移服务](https://cloud.tencent.com/document/product/266/52220)。**如果本接口的首次调用时间在 2021-01-01T00:00:00Z 之后，则此字段为必选字段。** */
    Host?: string;
    /** 剪辑的直播流信息：默认剪辑直播原始流。当StreamInfo中指定的Type为Transcoding，则剪辑TemplateId对应的直播转码流。 */
    StreamInfo?: LiveRealTimeClipStreamInfo;
    /** 系统保留字段，请勿填写。 */
    ExtInfo?: string;
  }

  interface LiveRealTimeClipResponse {
    /** 剪辑后的视频播放 URL。 */
    Url?: string;
    /** 剪辑固化后的视频的媒体文件的唯一标识。 */
    FileId?: string;
    /** 剪辑固化后的视频任务流 ID。 */
    VodTaskId?: string;
    /** 剪辑后的视频元信息。 */
    MetaData?: MediaMetaData | null;
    /** 剪辑后的视频片段信息。 */
    SegmentSet?: LiveRealTimeClipMediaSegmentInfo[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ManageTaskRequest {
    /** 视频处理的任务 ID。 */
    TaskId: string;
    /** 操作类型，取值范围：Abort：终止任务。只能终止已发起且状态为等待中（WAITING）的任务。 */
    OperationType: string;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
  }

  interface ManageTaskResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyAIAnalysisTemplateRequest {
    /** 音视频内容分析模板唯一标识。 */
    Definition: number;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 音视频内容分析模板名称，长度限制：64 个字符。 */
    Name?: string;
    /** 音视频内容分析模板描述信息，长度限制：256 个字符。 */
    Comment?: string;
    /** 智能分类任务控制参数。 */
    ClassificationConfigure?: ClassificationConfigureInfoForUpdate;
    /** 智能标签任务控制参数。 */
    TagConfigure?: TagConfigureInfoForUpdate;
    /** 智能封面任务控制参数。 */
    CoverConfigure?: CoverConfigureInfoForUpdate;
    /** 智能按帧标签任务控制参数。 */
    FrameTagConfigure?: FrameTagConfigureInfoForUpdate;
    /** 智能精彩集锦任务控制参数。 */
    HighlightConfigure?: HighlightsConfigureInfoForUpdate;
  }

  interface ModifyAIAnalysisTemplateResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyAIRecognitionTemplateRequest {
    /** 音视频内容识别模板唯一标识。 */
    Definition: number;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 音视频内容识别模板名称，长度限制：64 个字符。 */
    Name?: string;
    /** 音视频内容识别模板描述信息，长度限制：256 个字符。 */
    Comment?: string;
    /** 视频片头片尾识别控制参数。 */
    HeadTailConfigure?: HeadTailConfigureInfoForUpdate;
    /** 视频拆条识别控制参数。 */
    SegmentConfigure?: SegmentConfigureInfoForUpdate;
    /** 人脸识别控制参数。 */
    FaceConfigure?: FaceConfigureInfoForUpdate;
    /** 文本全文识别控制参数。 */
    OcrFullTextConfigure?: OcrFullTextConfigureInfoForUpdate;
    /** 文本关键词识别控制参数。 */
    OcrWordsConfigure?: OcrWordsConfigureInfoForUpdate;
    /** 语音全文识别控制参数。注意：本参数已不再维护，推荐使用 AsrTranslateConfigure 参数发起语音翻译识别（当 DstLanguage 不填或填空字符串时，则不进行翻译，计费项和语音全文识别一致）。 */
    AsrFullTextConfigure?: AsrFullTextConfigureInfoForUpdate;
    /** 语音关键词识别控制参数。 */
    AsrWordsConfigure?: AsrWordsConfigureInfoForUpdate;
    /** 语音翻译识别控制参数。 */
    AsrTranslateConfigure?: AsrTranslateConfigureInfoForUpdate;
    /** 物体识别控制参数。 */
    ObjectConfigure?: ObjectConfigureInfoForUpdate;
    /** 截帧间隔，单位为秒，最小值为 0.5 秒。 */
    ScreenshotInterval?: number;
  }

  interface ModifyAIRecognitionTemplateResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyAdaptiveDynamicStreamingTemplateRequest {
    /** 自适应转码模板唯一标识。 */
    Definition: number;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 模板名称，长度限制：64 个字符。 */
    Name?: string;
    /** 自适应转码格式，取值范围：HLS；MPEG-DASH。 */
    Format?: string;
    /** 是否禁止视频低码率转高码率，取值范围：0：否，1：是。 */
    DisableHigherVideoBitrate?: number;
    /** 是否禁止视频分辨率转高分辨率，取值范围：0：否，1：是。 */
    DisableHigherVideoResolution?: number;
    /** 自适应转码输入流参数信息，最多输入10路流。注意：各个流的帧率必须保持一致；如果不一致，采用第一个流的帧率作为输出帧率。 */
    StreamInfos?: AdaptiveStreamTemplate[];
    /** 模板描述信息，长度限制：256 个字符。 */
    Comment?: string;
    /** 切片类型，当 Format 为 HLS 时有效，可选值：ts：ts 切片；fmp4：fmp4 切片。 */
    SegmentType?: string;
  }

  interface ModifyAdaptiveDynamicStreamingTemplateResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyAnimatedGraphicsTemplateRequest {
    /** 转动图模板唯一标识。 */
    Definition: number;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 转动图模板名称，长度限制：64 个字符。 */
    Name?: string;
    /** 动图宽度（或长边）的最大值，取值范围：0 和 [32, 4096]，单位：px。当 Width、Height 均为 0，则分辨率同源；当 Width 为 0，Height 非 0，则 Width 按比例缩放；当 Width 非 0，Height 为 0，则 Height 按比例缩放；当 Width、Height 均非 0，则分辨率按用户指定。默认值：0。 */
    Width?: number;
    /** 动图高度（或短边）的最大值，取值范围：0 和 [32, 4096]，单位：px。当 Width、Height 均为 0，则分辨率同源；当 Width 为 0，Height 非 0，则 Width 按比例缩放；当 Width 非 0，Height 为 0，则 Height 按比例缩放；当 Width、Height 均非 0，则分辨率按用户指定。默认值：0。 */
    Height?: number;
    /** 分辨率自适应，可选值：open：开启，此时，Width 代表视频的长边，Height 表示视频的短边；close：关闭，此时，Width 代表视频的宽度，Height 表示视频的高度。默认值：open。 */
    ResolutionAdaptive?: string;
    /** 动图格式，取值为 gif 和 webp。 */
    Format?: string;
    /** 帧率，取值范围：[1, 30]，单位：Hz。 */
    Fps?: number;
    /** 图片质量，取值范围：[1, 100]，默认值为 75。 */
    Quality?: number;
    /** 模板描述信息，长度限制：256 个字符。 */
    Comment?: string;
  }

  interface ModifyAnimatedGraphicsTemplateResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyClassRequest {
    /** 分类 ID */
    ClassId: number;
    /** 分类名称。长度限制：1-64 个字符。 */
    ClassName: string;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
  }

  interface ModifyClassResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyContentReviewTemplateRequest {
    /** 内容审核模板唯一标识。 */
    Definition: number;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 内容审核模板名称，长度限制：64 个字符。 */
    Name?: string;
    /** 内容审核模板描述信息，长度限制：256 个字符。 */
    Comment?: string;
    /** 令人不安全的信息的控制参数。 */
    TerrorismConfigure?: TerrorismConfigureInfoForUpdate;
    /** 令人反感的信息的控制参数。 */
    PornConfigure?: PornConfigureInfoForUpdate;
    /** 令人不适宜的信息控制参数。 */
    PoliticalConfigure?: PoliticalConfigureInfoForUpdate;
    /** 违禁控制参数。违禁内容包括：谩骂；涉毒违法。 */
    ProhibitedConfigure?: ProhibitedConfigureInfoForUpdate;
    /** 用户自定义内容审核控制参数。 */
    UserDefineConfigure?: UserDefineConfigureInfoForUpdate;
    /** 截帧间隔，单位为秒，最小值为 0.5 秒。 */
    ScreenshotInterval?: number;
    /** 审核结果是否进入审核墙（对审核结果进行人工识别）的开关。ON：是；OFF：否。 */
    ReviewWallSwitch?: string;
  }

  interface ModifyContentReviewTemplateResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyDefaultDistributionConfigRequest {
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 分发域名，取值为点播域名列表里的域名。不填或者填空，表示不修改域名。 */
    Domain?: string;
    /** 分发协议，取值为 HTTP 或者 HTTPS。 */
    Scheme?: string;
    /** 播放密钥，由大小写字母（a - Z）或者数字（0 - 9）组成，长度在8 - 20个字符之间。 */
    PlayKey?: string;
  }

  interface ModifyDefaultDistributionConfigResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyDefaultStorageRegionRequest {
    /** 默认的存储地域，必须是已经开通的地域（通过 DescribeStorageRegions 接口查询）。 */
    StorageRegion: string;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
  }

  interface ModifyDefaultStorageRegionResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyEnhanceMediaTemplateRequest {
    /** 音画质重生模板号。 */
    Definition: number;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 音画质重生模板名称，长度限制：64 个字符。 */
    Name?: string;
    /** 模板描述信息，长度限制：256 个字符。 */
    Comment?: string;
    /** 音画质重生视频控制控制信息。 */
    RebuildVideoInfo?: RebuildVideoInfo;
    /** 音画质重生音频控制控制信息。 */
    RebuildAudioInfo?: RebuildAudioInfo;
    /** 输出目标视频控制信息。 */
    TargetVideoInfo?: RebuildMediaTargetVideoStream;
    /** 输出目标音频控制信息。 */
    TargetAudioInfo?: RebuildMediaTargetAudioStream;
    /** 输出文件封装格式，可选值：mp4、flv、hls。 */
    Container?: string;
    /** 是否去除视频数据，可选值：0：保留1：去除默认值 0。 */
    RemoveVideo?: number;
    /** 是否去除音频数据，可选值：0：保留1：去除默认值 0。 */
    RemoveAudio?: number;
  }

  interface ModifyEnhanceMediaTemplateResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyEventConfigRequest {
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 接收事件通知的方式。PUSH：[HTTP 回调通知](https://cloud.tencent.com/document/product/266/33779)；PULL：[基于消息队列的可靠通知](https://cloud.tencent.com/document/product/266/33779)。 */
    Mode?: string;
    /** 采用 [HTTP 回调通知](https://cloud.tencent.com/document/product/266/33779) 接收方式时，用于接收 3.0 格式回调的地址。注意：如果带 NotificationUrl 参数且值为空字符串时将会清空 3.0 格式回调地址。 */
    NotificationUrl?: string;
    /** 是否接收 [视频上传完成](https://cloud.tencent.com/document/product/266/7830) 事件通知， 默认 "OFF" 为忽略该事件通知，"ON" 为接收事件通知。 */
    UploadMediaCompleteEventSwitch?: string;
    /** 是否接收 [视频删除完成](https://cloud.tencent.com/document/product/266/13434) 事件通知， 默认 "OFF" 为忽略该事件通知，"ON" 为接收事件通知。 */
    DeleteMediaCompleteEventSwitch?: string;
    /** 是否接收剪辑固化完成事件通知， 默认 "OFF" 为忽略该事件通知，"ON" 为接收事件通知。 */
    PersistenceCompleteEventSwitch?: string;
  }

  interface ModifyEventConfigResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyHeadTailTemplateRequest {
    /** 片头片尾模板号。 */
    Definition: number;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 模板名，长度限制 64 个字符。不传代表不修改。 */
    Name?: string;
    /** 模板描述，长度限制 256 个字符。不传代表不修改，传空代表清空。 */
    Comment?: string;
    /** 片头候选列表，填写视频的 FileId。转码时将自动选择与正片宽高比最接近的一个片头（相同宽高比时，靠前的候选项优先）。最多支持 5 个候选片头。不传代表不修改，传空数组代表清空。 */
    HeadCandidateSet?: string[];
    /** 片尾候选列表，填写视频的 FileId。转码时将自动选择与正片宽高比最接近的一个片尾（相同宽高比时，靠前的候选项优先）。最多支持 5 个候选片头。不传代表不修改，传空数组代表清空。 */
    TailCandidateSet?: string[];
    /** 填充方式，当视频流配置宽高参数与原始视频的宽高比不一致时，对转码的处理方式，即为“填充”。可选填充方式： stretch：拉伸，对每一帧进行拉伸，填满整个画面，可能导致转码后的视频被“压扁“或者“拉长“； gauss：高斯模糊，保持视频宽高比不变，边缘剩余部分使用高斯模糊； white：留白，保持视频宽高比不变，边缘剩余部分使用白色填充； black：留黑，保持视频宽高比不变，边缘剩余部分使用黑色填充。默认值为不修改。 */
    FillType?: string;
  }

  interface ModifyHeadTailTemplateResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyImageSpriteTemplateRequest {
    /** 雪碧图模板唯一标识。 */
    Definition: number;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 雪碧图模板名称，长度限制：64 个字符。 */
    Name?: string;
    /** 雪碧图中小图的宽度，取值范围： [32, 4096]，单位：px。 */
    Width?: number;
    /** 雪碧图中小图的高度，取值范围： [32, 4096]，单位：px。 */
    Height?: number;
    /** 分辨率自适应，可选值：open：开启，此时，Width 代表视频的长边，Height 表示视频的短边；close：关闭，此时，Width 代表视频的宽度，Height 表示视频的高度。默认值：open。 */
    ResolutionAdaptive?: string;
    /** 采样类型，取值：Percent：按百分比。Time：按时间间隔。 */
    SampleType?: string;
    /** 采样间隔。当 SampleType 为 Percent 时，指定采样间隔的百分比。当 SampleType 为 Time 时，指定采样间隔的时间，单位为秒。 */
    SampleInterval?: number;
    /** 雪碧图中小图的行数。 */
    RowCount?: number;
    /** 雪碧图中小图的列数。 */
    ColumnCount?: number;
    /** 填充方式，当视频流配置宽高参数与原始视频的宽高比不一致时，对转码的处理方式，即为“填充”。可选填充方式： stretch：拉伸，对每一帧进行拉伸，填满整个画面，可能导致转码后的视频被“压扁“或者“拉长“；black：留黑，保持视频宽高比不变，边缘剩余部分使用黑色填充。white：留白，保持视频宽高比不变，边缘剩余部分使用白色填充。gauss：高斯模糊，保持视频宽高比不变，边缘剩余部分使用高斯模糊。默认值：black 。 */
    FillType?: string;
    /** 模板描述信息，长度限制：256 个字符。 */
    Comment?: string;
    /** 图片格式，取值： jpg：jpg 格式； png：png 格式； webp：webp 格式。 */
    Format?: string;
  }

  interface ModifyImageSpriteTemplateResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyJustInTimeTranscodeTemplateRequest {
    /** 模板名字。 */
    Name: string;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 视频参数配置。 */
    VideoConfigure?: VideoConfigureInfoForUpdate;
    /** 水印参数配置。 */
    WatermarkConfigure?: WatermarkConfigureInfoForUpdate;
    /** 模板描述，长度限制256个字符。 */
    Comment?: string;
  }

  interface ModifyJustInTimeTranscodeTemplateResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyMediaInfoRequest {
    /** 媒体文件唯一标识。 */
    FileId: string;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 媒体文件名称，最长 64 个字符。 */
    Name?: string;
    /** 媒体文件描述，最长 128 个字符。 */
    Description?: string;
    /** 媒体文件分类 ID。 */
    ClassId?: number;
    /** 媒体文件过期时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。填“9999-12-31T23:59:59Z”表示永不过期。过期后该媒体文件及其相关资源（转码结果、雪碧图等）将被永久删除。 */
    ExpireTime?: string;
    /** 视频封面图片文件（如 jpeg, png 等）进行 [Base64](https://tools.ietf.org/html/rfc4648) 编码后的字符串，仅支持 gif、jpeg、png 三种图片格式。 */
    CoverData?: string;
    /** 新增的一组视频打点信息，如果某个偏移时间已存在打点，则会进行覆盖操作，单个媒体文件最多 100 个打点信息。同一个请求里，AddKeyFrameDescs 的时间偏移参数必须与 DeleteKeyFrameDescs 都不同。 */
    AddKeyFrameDescs?: MediaKeyFrameDescItem[];
    /** 要删除的一组视频打点信息的时间偏移，单位：秒。同一个请求里，AddKeyFrameDescs 的时间偏移参数必须与 DeleteKeyFrameDescs 都不同。 */
    DeleteKeyFrameDescs?: number[];
    /** 取值 1 表示清空视频打点信息，其他值无意义。同一个请求里，ClearKeyFrameDescs 与 AddKeyFrameDescs 不能同时出现。 */
    ClearKeyFrameDescs?: number;
    /** 新增的一组标签，单个媒体文件最多 16 个标签，单个标签最多 32 个字符。同一个请求里，AddTags 参数必须与 DeleteTags 都不同。 */
    AddTags?: string[];
    /** 要删除的一组标签。同一个请求里，AddTags 参数必须与 DeleteTags 都不同。 */
    DeleteTags?: string[];
    /** 取值 1 表示清空媒体文件所有标签，其他值无意义。同一个请求里，ClearTags 与 AddTags 不能同时出现。 */
    ClearTags?: number;
    /** 新增一组字幕。单个媒体文件最多 16 个字幕。同一个请求中，AddSubtitles 中指定的字幕 Id 必须与 DeleteSubtitleIds 都不相同。 */
    AddSubtitles?: MediaSubtitleInput[];
    /** 待删除字幕的唯一标识。同一个请求中，AddSubtitles 中指定的字幕 Id 必须与 DeleteSubtitleIds 都不相同。 */
    DeleteSubtitleIds?: string[];
    /** 取值 1 表示清空媒体文件所有的字幕信息，其他值无意义。同一个请求里，ClearSubtitles 与 AddSubtitles不能同时出现。 */
    ClearSubtitles?: number;
  }

  interface ModifyMediaInfoResponse {
    /** 新的视频封面 URL。* 注意：仅当请求携带 CoverData 时此返回值有效。 * */
    CoverUrl?: string;
    /** 新增的字幕信息。 */
    AddedSubtitleSet?: MediaSubtitleItem[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyMediaStorageClassRequest {
    /** 媒体文件唯一标识列表，最大长度：100。 */
    FileIds: string[];
    /** 目标存储类型。可选值有： STANDARD：标准存储。 STANDARD_IA：低频存储。 ARCHIVE：归档存储。 DEEP_ARCHIVE：深度归档存储。 */
    StorageClass: string;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 取回模式。当文件的存储类型从归档或深度归档转换为标准存储时，需要指定取回（也称为解冻）操作的模式，具体说明请参考[数据取回及取回模式](https://cloud.tencent.com/document/product/266/56196)。当媒体文件目前的存储类型为归档存储时，有以下取值：Expedited：极速模式。Standard：标准模式。Bulk：批量模式。当媒体文件目前的存储类型为深度归档存储时，有以下取值：Standard：标准模式。Bulk：批量模式。 */
    RestoreTier?: string;
  }

  interface ModifyMediaStorageClassResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyPersonSampleRequest {
    /** 素材 ID。 */
    PersonId: string;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 名称，长度限制：128 个字符。 */
    Name?: string;
    /** 描述，长度限制：1024 个字符。 */
    Description?: string;
    /** 素材应用场景，可选值：1. Recognition：用于内容识别，等价于 Recognition.Face。2. Review：用于不适宜的内容识别，等价于 Review.Face。3. All：用于内容识别、不适宜的内容识别，等价于 1+2。 */
    Usages?: string[];
    /** 五官操作信息。 */
    FaceOperationInfo?: AiSampleFaceOperation;
    /** 标签操作信息。 */
    TagOperationInfo?: AiSampleTagOperation;
  }

  interface ModifyPersonSampleResponse {
    /** 素材信息。 */
    Person?: AiSamplePerson;
    /** 处理失败的五官信息。 */
    FailFaceInfoSet?: AiSampleFailFaceInfo[] | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyQualityInspectTemplateRequest {
    /** 模板 ID。 */
    Definition: number;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 模板名称，长度限制：64 个字符。 */
    Name?: string;
    /** 模板描述信息，长度限制：256 个字符。 */
    Comment?: string;
    /** 截帧间隔，单位为秒，最小值为 1。 */
    ScreenshotInterval?: number;
    /** 视频画面抖动重影检测的控制参数。 */
    JitterConfigure?: JitterConfigureInfoForUpdate;
    /** 视频画面模糊检测的控制参数。 */
    BlurConfigure?: BlurConfigureInfoForUpdate;
    /** 视频画面低光、过曝检测的控制参数。 */
    AbnormalLightingConfigure?: AbnormalLightingConfigureInfoForUpdate;
    /** 视频画面花屏检测的控制参数。 */
    CrashScreenConfigure?: CrashScreenConfigureInfoForUpdate;
    /** 视频画面黑边、白边、黑屏、白屏检测的控制参数。 */
    BlackWhiteEdgeConfigure?: BlackWhiteEdgeConfigureInfoForUpdate;
    /** 视频画面噪点检测的控制参数。 */
    NoiseConfigure?: NoiseConfigureInfoForUpdate;
    /** 视频画面马赛克检测的控制参数。 */
    MosaicConfigure?: MosaicConfigureInfoForUpdate;
    /** 视频画面二维码检测的控制参数。 */
    QRCodeConfigure?: QRCodeConfigureInfoForUpdate;
    /** 音频（静音、低音、爆音）检测的控制参数。 */
    VoiceConfigure?: VoiceConfigureInfoForUpdate;
    /** 视频画面质量评价的控制参数。 */
    QualityEvaluationConfigure?: QualityEvaluationConfigureInfoForUpdate;
  }

  interface ModifyQualityInspectTemplateResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyRebuildMediaTemplateRequest {
    /** 视频重生模板号。 */
    Definition: number;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: string;
    /** 视频重生模板名称。 */
    Name?: string;
    /** 视频重生模板描述。 */
    Comment?: string;
    /** 视频重生视频控制信息。 */
    RebuildVideoInfo?: RebuildVideoInfo;
    /** 视频重生音频控制信息。 */
    RebuildAudioInfo?: RebuildAudioInfo;
    /** 输出目标视频控制信息。 */
    TargetVideoInfo?: RebuildMediaTargetVideoStream;
    /** 输出目标音频控制信息。 */
    TargetAudioInfo?: RebuildMediaTargetAudioStream;
    /** 输出文件封装格式，可选值：mp4、flv、hls。 */
    Container?: string;
    /** 是否去除视频数据，可选值：0：保留1：去除 */
    RemoveVideo?: number;
    /** 是否去除音频数据，可选值：0：保留1：去除 */
    RemoveAudio?: number;
  }

  interface ModifyRebuildMediaTemplateResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyReviewTemplateRequest {
    /** 审核模板唯一标识。 */
    Definition: number;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 审核模板名称，长度限制：64 个字符。 */
    Name?: string;
    /** 审核模板描述信息，长度限制：256 个字符。 */
    Comment?: string;
    /** 需要返回的违规标签列表，可选值为：Porn：色情；Terror：暴力；Polity：不适宜的信息；Illegal：违法；Abuse：谩骂；Ad：广告；Moan：娇喘。注意：不填表示不更新。 */
    Labels?: string[];
  }

  interface ModifyReviewTemplateResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyRoundPlayRequest {
    /** 轮播播单唯一标识。 */
    RoundPlayId: string;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 启播时间，格式按照 ISO 8601标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732)。 */
    StartTime?: string;
    /** 轮播列表。数组长度限制：100。 */
    RoundPlaylist?: RoundPlayListItemInfo[];
    /** 轮播播单名称，长度限制：64 个字符。 */
    Name?: string;
    /** 轮播播单描述信息，长度限制：256 个字符。 */
    Desc?: string;
    /** 播放状态，可选值：Disabled：停止播放。Enabled：启播时长到达后启动播放。 */
    Status?: string;
    /** 播放模式，可选值：Loop：循环播放播单；Linear：单次播放，播单播放完停止播放。 */
    PlayBackMode?: string;
    /** 过期时间，格式按照 ISO 8601标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732)，过期后将停止播放。“9999-12-31T23:59:59+08:00”表示不过期。 */
    ExpiredTime?: string;
  }

  interface ModifyRoundPlayResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifySampleSnapshotTemplateRequest {
    /** 采样截图模板唯一标识。 */
    Definition: number;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 采样截图模板名称，长度限制：64 个字符。 */
    Name?: string;
    /** 截图宽度（或长边）的最大值，取值范围：0 和 [32, 4096]，单位：px。当 Width、Height 均为 0，则分辨率同源；当 Width 为 0，Height 非 0，则 Width 按比例缩放；当 Width 非 0，Height 为 0，则 Height 按比例缩放；当 Width、Height 均非 0，则分辨率按用户指定。默认值：0。 */
    Width?: number;
    /** 截图高度（或短边）的最大值，取值范围：0 和 [32, 4096]，单位：px。当 Width、Height 均为 0，则分辨率同源；当 Width 为 0，Height 非 0，则 Width 按比例缩放；当 Width 非 0，Height 为 0，则 Height 按比例缩放；当 Width、Height 均非 0，则分辨率按用户指定。默认值：0。 */
    Height?: number;
    /** 分辨率自适应，可选值：open：开启，此时，Width 代表视频的长边，Height 表示视频的短边；close：关闭，此时，Width 代表视频的宽度，Height 表示视频的高度。默认值：open。 */
    ResolutionAdaptive?: string;
    /** 采样截图类型，取值：Percent：按百分比。Time：按时间间隔。 */
    SampleType?: string;
    /** 采样间隔。当 SampleType 为 Percent 时，指定采样间隔的百分比。当 SampleType 为 Time 时，指定采样间隔的时间，单位为秒。 */
    SampleInterval?: number;
    /** 图片格式，取值为 jpg 和 png。 */
    Format?: string;
    /** 模板描述信息，长度限制：256 个字符。 */
    Comment?: string;
    /** 填充方式，当视频流配置宽高参数与原始视频的宽高比不一致时，对转码的处理方式，即为“填充”。可选填充方式： stretch：拉伸，对每一帧进行拉伸，填满整个画面，可能导致转码后的视频被“压扁“或者“拉长“；black：留黑，保持视频宽高比不变，边缘剩余部分使用黑色填充。white：留白，保持视频宽高比不变，边缘剩余部分使用白色填充。gauss：高斯模糊，保持视频宽高比不变，边缘剩余部分使用高斯模糊。默认值：black 。 */
    FillType?: string;
  }

  interface ModifySampleSnapshotTemplateResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifySnapshotByTimeOffsetTemplateRequest {
    /** 指定时间点截图模板唯一标识。 */
    Definition: number;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 指定时间点截图模板名称，长度限制：64 个字符。 */
    Name?: string;
    /** 截图宽度（或长边）的最大值，取值范围：0 和 [32, 4096]，单位：px。当 Width、Height 均为 0，则分辨率同源；当 Width 为 0，Height 非 0，则 Width 按比例缩放；当 Width 非 0，Height 为 0，则 Height 按比例缩放；当 Width、Height 均非 0，则分辨率按用户指定。默认值：0。 */
    Width?: number;
    /** 截图高度（或短边）的最大值，取值范围：0 和 [32, 4096]，单位：px。当 Width、Height 均为 0，则分辨率同源；当 Width 为 0，Height 非 0，则 Width 按比例缩放；当 Width 非 0，Height 为 0，则 Height 按比例缩放；当 Width、Height 均非 0，则分辨率按用户指定。默认值：0。 */
    Height?: number;
    /** 分辨率自适应，可选值：open：开启，此时，Width 代表视频的长边，Height 表示视频的短边；close：关闭，此时，Width 代表视频的宽度，Height 表示视频的高度。默认值：open。 */
    ResolutionAdaptive?: string;
    /** 图片格式，取值可以为 jpg 和 png。 */
    Format?: string;
    /** 模板描述信息，长度限制：256 个字符。 */
    Comment?: string;
    /** 填充方式，当视频流配置宽高参数与原始视频的宽高比不一致时，对转码的处理方式，即为“填充”。可选填充方式： stretch：拉伸，对每一帧进行拉伸，填满整个画面，可能导致转码后的视频被“压扁“或者“拉长“；black：留黑，保持视频宽高比不变，边缘剩余部分使用黑色填充。white：留白，保持视频宽高比不变，边缘剩余部分使用白色填充。gauss：高斯模糊，保持视频宽高比不变，边缘剩余部分使用高斯模糊。默认值：black 。 */
    FillType?: string;
  }

  interface ModifySnapshotByTimeOffsetTemplateResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifySubAppIdInfoRequest {
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId: number;
    /** 应用名称，长度限制：40个字符。 */
    Name?: string;
    /** 应用简介，长度限制： 300个字符。 */
    Description?: string;
  }

  interface ModifySubAppIdInfoResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifySubAppIdStatusRequest {
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId: number;
    /** 应用状态，取值范围：On：启用。Off：停用。Destroyed：销毁。当前状态如果是 Destoying ，不能进行启用操作，需要等待销毁完成后才能重新启用。 */
    Status: string;
  }

  interface ModifySubAppIdStatusResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifySuperPlayerConfigRequest {
    /** 播放器配置名称。 */
    Name: string;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 播放的音视频类型，可选值：AdaptiveDynamicStream：自适应码流输出；Transcode：转码输出；Original：原始音视频。 */
    AudioVideoType?: string;
    /** 播放 DRM 保护的自适应码流开关：ON：开启，表示仅播放 DRM 保护的自适应码流输出；OFF：关闭，表示播放未加密的自适应码流输出。 */
    DrmSwitch?: string;
    /** 允许输出的未加密的自适应码流模板 ID。 */
    AdaptiveDynamicStreamingDefinition?: number;
    /** 允许输出的 DRM 自适应码流模板内容。 */
    DrmStreamingsInfo?: DrmStreamingsInfoForUpdate;
    /** 允许输出的转码模板 ID。 */
    TranscodeDefinition?: number;
    /** 允许输出的雪碧图模板 ID。 */
    ImageSpriteDefinition?: number;
    /** 播放器对于不同分辨率的子流展示名字。 */
    ResolutionNames?: ResolutionNameInfo[];
    /** 播放时使用的域名。填 Default 表示使用[默认分发配置](https://cloud.tencent.com/document/product/266/33373)中的域名。 */
    Domain?: string;
    /** 播放时使用的 Scheme。取值范围：Default：使用[默认分发配置](https://cloud.tencent.com/document/product/266/33373)中的 Scheme；HTTP；HTTPS。 */
    Scheme?: string;
    /** 模板描述信息，长度限制：256 个字符。 */
    Comment?: string;
  }

  interface ModifySuperPlayerConfigResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyTranscodeTemplateRequest {
    /** 转码模板唯一标识。 */
    Definition: number;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 封装格式，可选值：mp4、flv、hls、mp3、flac、ogg、m4a、wav。其中，mp3、flac、ogg、m4a、wav 为纯音频文件。 */
    Container?: string;
    /** 转码模板名称，长度限制：64 个字符。 */
    Name?: string;
    /** 模板描述信息，长度限制：256 个字符。 */
    Comment?: string;
    /** 是否去除视频数据，可选值：0：保留1：去除 */
    RemoveVideo?: number;
    /** 是否去除音频数据，可选值：0：保留1：去除 */
    RemoveAudio?: number;
    /** 视频流配置参数。 */
    VideoTemplate?: VideoTemplateInfoForUpdate;
    /** 音频流配置参数。 */
    AudioTemplate?: AudioTemplateInfoForUpdate;
    /** 极速高清转码参数。 */
    TEHDConfig?: TEHDConfigForUpdate;
    /** 切片类型，当 Container 为 hls 时有效，可选值：ts：ts 切片；fmp4：fmp4 切片。 */
    SegmentType?: string;
  }

  interface ModifyTranscodeTemplateResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyVodDomainAccelerateConfigRequest {
    /** 需要设置加速配置的域名。 */
    Domain: string;
    /** 区域，可选值：Chinese Mainland：中国境内（不包含港澳台）。Outside Chinese Mainland: 中国境外。Global: 全球范围。 */
    Area: string;
    /** 开启或者关闭所选区域的域名加速，可选值：Enabled: 开启。Disabled：关闭。开启中国境内加速的域名，需要先[备案域名](/document/product/243/18905)。 */
    Status: string;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
  }

  interface ModifyVodDomainAccelerateConfigResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyVodDomainConfigRequest {
    /** 域名。 */
    Domain: string;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** [Referer 防盗链](/document/product/266/14046)规则。 */
    RefererAuthPolicy?: RefererAuthPolicy;
    /** [Key 防盗链](/document/product/266/14047)规则。 */
    UrlSignatureAuthPolicy?: UrlSignatureAuthPolicy;
    /** QUIC 配置。 */
    QUICConfig?: DomainQUICConfig;
    /** IP 访问限制规则。 */
    IPFilterPolicy?: IPFilterPolicy;
  }

  interface ModifyVodDomainConfigResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyWatermarkTemplateRequest {
    /** 水印模板唯一标识。 */
    Definition: number;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 水印模板名称，长度限制：64 个字符。 */
    Name?: string;
    /** 模板描述信息，长度限制：256 个字符。 */
    Comment?: string;
    /** 原点位置，可选值：TopLeft：表示坐标原点位于视频图像左上角，水印原点为图片或文字的左上角；TopRight：表示坐标原点位于视频图像的右上角，水印原点为图片或文字的右上角；BottomLeft：表示坐标原点位于视频图像的左下角，水印原点为图片或文字的左下角；BottomRight：表示坐标原点位于视频图像的右下角，水印原点为图片或文字的右下角。 */
    CoordinateOrigin?: string;
    /** 水印原点距离视频图像坐标原点的水平位置。支持 %、px 两种格式：当字符串以 % 结尾，表示水印 XPos 为视频宽度指定百分比，如 10% 表示 XPos 为视频宽度的 10%；当字符串以 px 结尾，表示水印 XPos 为指定像素，如 100px 表示 XPos 为 100 像素。 */
    XPos?: string;
    /** 水印原点距离视频图像坐标原点的垂直位置。支持 %、px 两种格式：当字符串以 % 结尾，表示水印 YPos 为视频高度指定百分比，如 10% 表示 YPos 为视频高度的 10%；当字符串以 px 结尾，表示水印 YPos 为指定像素，如 100px 表示 YPos 为 100 像素。 */
    YPos?: string;
    /** 图片水印模板，该字段仅对图片水印模板有效。 */
    ImageTemplate?: ImageWatermarkInputForUpdate;
    /** 文字水印模板，该字段仅对文字水印模板有效。 */
    TextTemplate?: TextWatermarkTemplateInputForUpdate;
    /** SVG 水印模板，该字段仅对 SVG 水印模板有效。 */
    SvgTemplate?: SvgWatermarkInputForUpdate;
  }

  interface ModifyWatermarkTemplateResponse {
    /** 图片水印地址，仅当 ImageTemplate.ImageContent 非空，该字段有值。 */
    ImageUrl?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyWordSampleRequest {
    /** 关键词，长度限制：128 个字符。 */
    Keyword: string;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 关键词应用场景，可选值：1. Recognition.Ocr：通过光学字符识别技术，进行内容识别；2. Recognition.Asr：通过音频识别技术，进行内容识别；3. Review.Ocr：通过光学字符识别技术，进行不适宜的内容识别；4. Review.Asr：通过音频识别技术，进行不适宜的内容识别；可合并简写为：5. Recognition：通过光学字符识别技术、音频识别技术，进行内容识别，等价于 1+2；6. Review：通过光学字符识别技术、音频识别技术，进行不适宜的内容识别，等价于 3+4；7. All：包含以上全部，等价于 1+2+3+4。 */
    Usages?: string[];
    /** 标签操作信息。 */
    TagOperationInfo?: AiSampleTagOperation;
  }

  interface ModifyWordSampleResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ParseStreamingManifestRequest {
    /** 待解析的索引文件内容。 */
    MediaManifestContent: string;
    /** 视频索引文件格式。默认 m3u8 格式。m3u8mpd */
    ManifestType?: string;
  }

  interface ParseStreamingManifestResponse {
    /** 分片文件列表。 */
    MediaSegmentSet?: string[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ProcessImageRequest {
    /** 媒体文件 ID，即该文件在云点播上的全局唯一标识符。本接口要求媒体文件必须是图片格式。 */
    FileId: string;
    /** 操作类型。现在仅支持填 ContentReview，表示内容智能识别。 */
    Operation: string;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 图片内容智能识别参数，当 Operation 为 ContentReview 时该字段有效。 */
    ContentReviewInput?: ImageContentReviewInput;
  }

  interface ProcessImageResponse {
    /** 图片内容智能识别任务结果。 */
    ContentReviewResultSet?: ContentReviewResult[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ProcessMediaByMPSRequest {
    /** 媒体文件 ID，即该文件在云点播上的全局唯一标识符，在上传成功后由云点播后台分配。可以在 [视频上传完成事件通知](/document/product/266/7830) 或 [云点播控制台](https://console.cloud.tencent.com/vod/media) 获取该字段。 */
    FileId: string;
    /** 点播[应用](/document/product/266/14574) ID。 */
    SubAppId: number;
    /** 该参数用于透传至媒体处理服务（MPS），以便从云点播侧发起 MPS 视频处理任务。视频处理参数详情请参考：[MPS 发起媒体处理](https://cloud.tencent.com/document/api/862/37578)。填写说明：1. 目前仅需要配置 MPS “发起媒体处理”接口中的 AiAnalysisTask 参数，其他参数无需填写，若包含其它参数，系统将自动忽略；2. 当前仅支持通过此方式发起智能擦除任务。若配置了其他任务类型的相关参数，系统将自动忽略这些参数。 */
    MPSProcessMediaParams: string;
  }

  interface ProcessMediaByMPSResponse {
    /** 任务 ID。 */
    TaskId?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ProcessMediaByProcedureRequest {
    /** 媒体文件 ID。 */
    FileId: string;
    /** [任务流](https://cloud.tencent.com/document/product/266/33475)名称。 */
    ProcedureName: string;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 任务流的优先级，数值越大优先级越高，取值范围是-10到10，不填代表0。 */
    TasksPriority?: number;
    /** 任务流状态变更通知模式，可取值有 Finish，Change 和 None，不填代表 Finish。 */
    TasksNotifyMode?: string;
    /** 来源上下文，用于透传用户请求信息，任务流状态变更回调将返回该字段值，最长 1000 个字符。 */
    SessionContext?: string;
    /** 用于去重的识别码，如果 7 天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。 */
    SessionId?: string;
    /** 保留字段，特殊用途时使用。 */
    ExtInfo?: string;
  }

  interface ProcessMediaByProcedureResponse {
    /** 任务类型为 Procedure 的任务 ID，当入参 ProcedureName 对应的任务流模板指定了 MediaProcessTask、AiAnalysisTask、AiRecognitionTask 中的一个或多个时发起该任务。 */
    TaskId?: string;
    /** 任务类型为 ReviewAudioVideo 的任务 ID，当入参 ProcedureName 对应的任务流模板指定了 ReviewAudioVideoTask 时，发起该任务。 */
    ReviewAudioVideoTaskId?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ProcessMediaByUrlRequest {
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** API 已经不再维护。推荐使用的替代 API 请参考接口描述。 */
    InputInfo?: MediaInputInfo;
    /** 输出文件 COS 路径信息。 */
    OutputInfo?: MediaOutputInfo;
    /** 视频内容审核类型任务参数。 */
    AiContentReviewTask?: AiContentReviewTaskInput;
    /** 视频内容分析类型任务参数。 */
    AiAnalysisTask?: AiAnalysisTaskInput;
    /** 视频内容识别类型任务参数。 */
    AiRecognitionTask?: AiRecognitionTaskInput;
    /** 任务流的优先级，数值越大优先级越高，取值范围是 -10 到 10，不填代表 0。 */
    TasksPriority?: number;
    /** 任务流状态变更通知模式，可取值有 Finish，Change 和 None，不填代表 Finish。 */
    TasksNotifyMode?: string;
    /** 来源上下文，用于透传用户请求信息，任务流状态变更回调将返回该字段值，最长 1000 个字符。 */
    SessionContext?: string;
    /** 用于去重的识别码，如果三天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。 */
    SessionId?: string;
  }

  interface ProcessMediaByUrlResponse {
    /** 任务 ID */
    TaskId?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ProcessMediaRequest {
    /** 媒体文件 ID，即该文件在云点播上的全局唯一标识符，在上传成功后由云点播后台分配。可以在 [视频上传完成事件通知](/document/product/266/7830) 或 [云点播控制台](https://console.cloud.tencent.com/vod/media) 获取该字段。 */
    FileId: string;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 视频处理类型任务参数。 */
    MediaProcessTask?: MediaProcessTaskInput;
    /** 音视频内容审核类型任务参数 \*。\* 不建议使用，推荐使用 [音视频审核(ReviewAudioVideo)](https://cloud.tencent.com/document/api/266/80283) 或 [图片审核(ReviewImage)](https://cloud.tencent.com/document/api/266/73217)。 */
    AiContentReviewTask?: AiContentReviewTaskInput;
    /** 音视频内容分析类型任务参数。 */
    AiAnalysisTask?: AiAnalysisTaskInput;
    /** 音视频内容识别类型任务参数。 */
    AiRecognitionTask?: AiRecognitionTaskInput;
    /** 任务流的优先级，数值越大优先级越高，取值范围是 -10 到 10，不填代表 0。 */
    TasksPriority?: number;
    /** 任务流状态变更通知模式，可取值有 Finish，Change 和 None，不填代表 Finish。 */
    TasksNotifyMode?: string;
    /** 来源上下文，用于透传用户请求信息，任务流状态变更回调将返回该字段值，最长 1000 个字符。 */
    SessionContext?: string;
    /** 用于去重的识别码，如果三天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。 */
    SessionId?: string;
    /** 保留字段，特殊用途时使用。 */
    ExtInfo?: string;
  }

  interface ProcessMediaResponse {
    /** 任务 ID */
    TaskId?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface PullEventsRequest {
    /** 保留字段，特殊用途时使用。 */
    ExtInfo?: string;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
  }

  interface PullEventsResponse {
    /** 事件列表。 */
    EventSet?: EventContent[] | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface PullUploadRequest {
    /** 要拉取的媒体 URL，暂不支持拉取 Dash 格式（可以支持 HLS）。支持的扩展名详见[媒体类型](https://cloud.tencent.com/document/product/266/9760)。请确保媒体 URL 可以访问。 */
    MediaUrl: string;
    /** 媒体文件类型（扩展名），支持的类型详见[媒体类型](https://cloud.tencent.com/document/product/266/9760)。如果 MediaType 不填或取值为空字符串，将根据 MediaUrl 自动获取文件类型。 */
    MediaType?: string;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 媒体名称。 */
    MediaName?: string;
    /** 要拉取的视频封面 URL。支持的文件格式：gif、jpeg（jpg）、png。 */
    CoverUrl?: string;
    /** 媒体后续任务操作，详见[上传指定任务流](https://cloud.tencent.com/document/product/266/9759)。 */
    Procedure?: string;
    /** 媒体文件过期时间，格式按照 ISO 8601 标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732)。 */
    ExpireTime?: string;
    /** 指定上传园区，仅适用于对上传地域有特殊需求的用户：不填默认上传至您的[默认地域](https://cloud.tencent.com/document/product/266/14059?from=11329)。若指定上传园区，请先确认[上传存储设置](https://cloud.tencent.com/document/product/266/14059?from=11329)已经开启相应的存储地域。 */
    StorageRegion?: string;
    /** 分类ID，用于对媒体进行分类管理，可通过[创建分类](https://cloud.tencent.com/document/product/266/7812)接口，创建分类，获得分类 ID。 */
    ClassId?: number;
    /** 任务的优先级，数值越大优先级越高，取值范围是 -10 到 10，不填代表 0。 */
    TasksPriority?: number;
    /** 来源上下文，用于透传用户请求信息，当指定 Procedure 任务后，任务流状态变更回调将返回该字段值，最长 1000 个字符。 */
    SessionContext?: string;
    /** 用于去重的识别码，如果三天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。 */
    SessionId?: string;
    /** 保留字段，特殊用途时使用。 */
    ExtInfo?: string;
    /** 来源上下文，用于透传用户请求信息，[上传完成回调](/document/product/266/7830) 将返回该字段值，最长 250 个字符。 */
    SourceContext?: string;
  }

  interface PullUploadResponse {
    /** 拉取上传视频的任务 ID，可以通过该 ID 查询拉取上传任务的状态。 */
    TaskId?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface PushUrlCacheRequest {
    /** 预热的 URL 列表，单次最多指定20个 URL。 */
    Urls: string[];
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
  }

  interface PushUrlCacheResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface RebuildMediaByTemplateRequest {
    /** 媒体文件 ID。 */
    FileId: string;
    /** 视频重生模板 ID。 */
    Definition: number;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: string;
    /** 起始偏移时间，单位：秒，不填表示从视频开始截取。 */
    StartTimeOffset?: number;
    /** 结束偏移时间，单位：秒，不填表示截取到视频末尾。 */
    EndTimeOffset?: number;
    /** 视频重生后的文件配置。 */
    OutputConfig?: RebuildMediaOutputConfig;
    /** 用于去重的识别码，如果三天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。 */
    SessionId?: string;
    /** 来源上下文，用于透传用户请求信息，任务流状态变更回调将返回该字段值，最长 1000 个字符。 */
    SessionContext?: string;
    /** 任务的优先级，数值越大优先级越高，取值范围是 -10 到 10，不填代表 0。 */
    TasksPriority?: number;
    /** 保留字段，特殊用途时使用。 */
    ExtInfo?: string;
  }

  interface RebuildMediaByTemplateResponse {
    /** 视频重生的任务 ID，可以通过该 ID 查询视频重生任务的状态。 */
    TaskId?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface RebuildMediaRequest {
    /** 媒体文件 ID。 */
    FileId: string;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 起始偏移时间，单位：秒，不填表示从视频开始截取。 */
    StartTimeOffset?: number;
    /** 结束偏移时间，单位：秒，不填表示截取到视频末尾。 */
    EndTimeOffset?: number;
    /** 画质修复控制参数。 */
    RepairInfo?: RepairInfo;
    /** 智能插帧控制参数。 */
    VideoFrameInterpolationInfo?: VideoFrameInterpolationInfo;
    /** 画面超分控制参数。 */
    SuperResolutionInfo?: SuperResolutionInfo;
    /** 高动态范围类型控制参数。 */
    HDRInfo?: HDRInfo;
    /** 视频降噪控制参数。 */
    VideoDenoiseInfo?: VideoDenoiseInfo;
    /** 音频降噪控制参数。 */
    AudioDenoiseInfo?: AudioDenoiseInfo;
    /** 色彩增强控制参数。 */
    ColorInfo?: ColorEnhanceInfo;
    /** 细节增强控制参数。 */
    SharpInfo?: SharpEnhanceInfo;
    /** 人脸增强控制参数。 */
    FaceInfo?: FaceEnhanceInfo;
    /** 低光照控制参数。 */
    LowLightInfo?: LowLightEnhanceInfo;
    /** 去划痕控制参数。 */
    ScratchRepairInfo?: ScratchRepairInfo;
    /** 去伪影（毛刺）控制参数。 */
    ArtifactRepairInfo?: ArtifactRepairInfo;
    /** 音画质重生输出目标参数。 */
    TargetInfo?: RebuildMediaTargetInfo;
    /** 用于去重的识别码，如果三天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。 */
    SessionId?: string;
    /** 来源上下文，用于透传用户请求信息，任务流状态变更回调将返回该字段值，最长 1000 个字符。 */
    SessionContext?: string;
    /** 任务的优先级，数值越大优先级越高，取值范围是 -10 到 10，不填代表 0。 */
    TasksPriority?: number;
    /** 保留字段，特殊用途时使用。 */
    ExtInfo?: string;
  }

  interface RebuildMediaResponse {
    /** 音画质重生的任务 ID，可以通过该 ID 查询音画质重生任务的状态。 */
    TaskId?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface RefreshUrlCacheRequest {
    /** 刷新的 URL 列表，单次最多指定20个 URL。 */
    Urls: string[];
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
  }

  interface RefreshUrlCacheResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface RemoveWatermarkRequest {
    /** 媒体文件 ID 。 */
    FileId: string;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 用于去重的识别码，如果七天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。 */
    SessionId?: string;
    /** 来源上下文，用于透传用户请求信息，任务流状态变更回调将返回该字段值，最长 1000 个字符。 */
    SessionContext?: string;
    /** 任务流的优先级，数值越大优先级越高，取值范围是 -10 到 10，不填代表 0。 */
    TasksPriority?: number;
    /** 该字段已无效。 */
    TasksNotifyMode?: string;
  }

  interface RemoveWatermarkResponse {
    /** 任务 ID 。 */
    TaskId?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ResetProcedureTemplateRequest {
    /** 任务流名字 */
    Name: string;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 模板描述信息，长度限制：256 个字符。 */
    Comment?: string;
    /** 视频处理类型任务参数。 */
    MediaProcessTask?: MediaProcessTaskInput;
    /** AI 智能内容审核类型任务参数 \*。\*：该参数用于发起旧版审核，不建议使用。推荐使用 ReviewAudioVideoTask 参数发起审核。 */
    AiContentReviewTask?: AiContentReviewTaskInput;
    /** AI 智能内容分析类型任务参数。 */
    AiAnalysisTask?: AiAnalysisTaskInput;
    /** AI 内容识别类型任务参数。 */
    AiRecognitionTaskSet?: AiRecognitionTaskInput[];
    /** 该参数已不推荐使用，建议使用 AiRecognitionTaskSet。 */
    AiRecognitionTask?: AiRecognitionTaskInput;
    /** 音视频审核类型任务参数。 */
    ReviewAudioVideoTask?: ProcedureReviewAudioVideoTaskInput;
  }

  interface ResetProcedureTemplateResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface RestoreMediaRequest {
    /** 媒体文件唯一标识列表，最大长度：100。 */
    FileIds: string[];
    /** 解冻出的临时媒体文件的可访问持续时长，必须大于0，单位为“天”。 */
    RestoreDay: number;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 解冻模式。当媒体文件当前的存储类型为归档存储时，有以下取值：极速模式：Expedited，解冻任务在5分钟后完成。标准模式：Standard，解冻任务在5小时后完成 。批量模式：Bulk，，解冻任务在12小时后完成。当媒体文件的存储类型为深度归档存储时，有以下取值：标准模式：Standard，解冻任务在24小时后完成。批量模式：Bulk，解冻任务在48小时后完成。 */
    RestoreTier?: string;
  }

  interface RestoreMediaResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ReviewAudioVideoRequest {
    /** 媒体文件 ID，即该文件在云点播上的全局唯一标识符，在上传成功后由云点播后台分配。可以在 [视频上传完成事件通知](/document/product/266/7830) 或 [云点播控制台](https://console.cloud.tencent.com/vod/media) 获取该字段。 */
    FileId: string;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 审核的内容，可选值有：Media：原始音视频；Cover：封面。不填或填空数组时，默认为审核 Media。 */
    ReviewContents?: string[];
    /** 审核模板 ID，默认值为 10。取值范围：10：[预置模板](https://cloud.tencent.com/document/product/266/33476))，支持检测的违规标签包括色情（Porn）、暴力（Terror）、不适宜的信息（Polity）和娇喘（Moan）。 */
    Definition?: number;
    /** 任务流的优先级，数值越大优先级越高，取值范围是 -10 到 10，不填代表 0。 */
    TasksPriority?: number;
    /** 来源上下文，用于透传用户请求信息，音视频审核完成回调将返回该字段值，最长 1000 个字符。 */
    SessionContext?: string;
    /** 用于去重的识别码，如果三天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。 */
    SessionId?: string;
    /** 保留字段，特殊用途时使用。 */
    ExtInfo?: string;
  }

  interface ReviewAudioVideoResponse {
    /** 任务 ID */
    TaskId?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ReviewImageRequest {
    /** 媒体文件 ID，即该文件在云点播上的全局唯一标识符。本接口要求媒体文件必须是图片格式。 */
    FileId: string;
    /** 图片审核模板 ID，取值范围：10：预置模板，支持检测的违规标签包括色情（Porn）、暴力（Terror）和不适宜的信息（Polity）。 */
    Definition: number;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
  }

  interface ReviewImageResponse {
    /** 图片审核任务结果。注意：该字段已废弃，建议使用 MediaReviewResult。 */
    ReviewResultSet?: ContentReviewResult[];
    /** 图片审核任务结果。 */
    MediaReviewResult?: ReviewImageResult | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface SearchMediaRequest {
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 文件 ID 集合，匹配集合中的任意元素。数组长度限制：10。单个 ID 长度限制：40个字符。 */
    FileIds?: string[];
    /** 文件名集合，模糊匹配媒体文件的文件名，匹配度越高，排序越优先。单个文件名长度限制：100个字符。数组长度限制：10。 */
    Names?: string[];
    /** 文件名前缀，前缀匹配媒体文件的文件名。单个文件名前缀长度限制：100个字符。数组长度限制：10。 */
    NamePrefixes?: string[];
    /** 文件描述集合，模糊匹配媒体文件的描述，匹配度越高，排序越优先。单个描述长度限制：100个字符。数组长度限制：10。 */
    Descriptions?: string[];
    /** 分类 ID 集合，匹配集合指定 ID 的分类及其所有子类。数组长度限制：10。 */
    ClassIds?: number[];
    /** 标签集合，匹配集合中任意元素。单个标签长度限制：32个字符。数组长度限制：16。 */
    Tags?: string[];
    /** 文件类型。匹配集合中的任意元素：Video: 视频文件Audio: 音频文件Image: 图片文件 */
    Categories?: string[];
    /** 媒体文件来源集合，来源取值参见 [SourceType](https://cloud.tencent.com/document/product/266/31773)。数组长度限制：10。 */
    SourceTypes?: string[];
    /** 推流直播码集合。匹配集合中的任意元素。数组长度限制：10。 */
    StreamIds?: string[];
    /** 匹配创建时间在此时间段内的文件。包含所指定的头尾时间点。 */
    CreateTime?: TimeRange;
    /** 匹配过期时间在此时间段内的文件，无法检索到已过期文件。包含所指定的头尾时间点。 */
    ExpireTime?: TimeRange;
    /** 媒体文件存储地区，如 ap-chongqing，参见[地域列表](https://cloud.tencent.com/document/product/266/9760)。单个存储地区长度限制：20个字符。数组长度限制：20。 */
    StorageRegions?: string[];
    /** 存储类型数组。可选值有： STANDARD：标准存储。 STANDARD_IA：低频存储。 ARCHIVE：归档存储。 DEEP_ARCHIVE：深度归档存储。 */
    StorageClasses?: string[];
    /** 媒体文件封装格式集合，匹配集合中任意元素。数组长度限制：10。 */
    MediaTypes?: string[];
    /** 媒体文件状态，匹配集合中任意元素。 Normal：正常； SystemForbidden：平台封禁； Forbidden：主动封禁。 */
    Status?: string[];
    /** 媒体文件审核结果，匹配集合中任意元素。 pass：审核通过； review：疑似违规，建议复审； block：确认违规，建议封禁； notModerated：未审核。 */
    ReviewResults?: string[];
    /** TRTC 应用 ID 集合。匹配集合中的任意元素。数组长度限制：10。 */
    TrtcSdkAppIds?: number[];
    /** TRTC 房间 ID 集合。匹配集合中的任意元素。单个房间 ID 长度限制：64个字符；数组长度限制：10。 */
    TrtcRoomIds?: string[];
    /** 指定所有媒体文件需要返回的信息，可同时指定多个信息，N 从 0 开始递增。如果未填写该字段，默认返回所有信息。选项有：basicInfo（视频基础信息）。metaData（视频元信息）。transcodeInfo（视频转码结果信息）。animatedGraphicsInfo（视频转动图结果信息）。imageSpriteInfo（视频雪碧图信息）。snapshotByTimeOffsetInfo（视频指定时间点截图信息）。sampleSnapshotInfo（采样截图信息）。keyFrameDescInfo（打点信息）。adaptiveDynamicStreamingInfo（转自适应码流信息）。miniProgramReviewInfo（小程序审核信息）。 */
    Filters?: string[];
    /** 排序方式。Sort.Field 可选 CreateTime 。当 Text、 Names 或 Descriptions 不为空时，Sort.Field 字段无效， 搜索结果将以匹配度排序。 */
    Sort?: SortBy;
    /** 分页返回的起始偏移量，默认值：0。将返回第 Offset 到第 Offset+Limit-1 条。取值范围：Offset + Limit 不超过5000。（参见：接口返回结果数限制） */
    Offset?: number;
    /** 分页返回的记录条数，默认值：10。将返回第 Offset 到第 Offset+Limit-1 条。取值范围：Offset + Limit 不超过5000。（参见：接口返回结果数限制） */
    Limit?: number;
    /** （不推荐：应使用 Names、NamePrefixes 或 Descriptions 替代）搜索文本，模糊匹配媒体文件名称或描述信息，匹配项越多，匹配度越高，排序越优先。长度限制：64个字符。 */
    Text?: string;
    /** （不推荐：应使用 SourceTypes 替代）媒体文件来源，来源取值参见 [SourceType](https://cloud.tencent.com/document/product/266/31773)。 */
    SourceType?: string;
    /** （不推荐：应使用 StreamIds 替代）推流直播码。 */
    StreamId?: string;
    /** （不推荐：应使用 CreateTime 替代）创建时间的开始时间。大于等于开始时间。当 CreateTime.After 也存在时，将优先使用 CreateTime.After。格式按照 ISO 8601标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732)。 */
    StartTime?: string;
    /** （不推荐：应使用 CreateTime 替代）创建时间的结束时间。小于结束时间。当 CreateTime.Before 也存在时，将优先使用 CreateTime.Before。格式按照 ISO 8601标准表示，详见 [ISO 日期格式说明](https://cloud.tencent.com/document/product/266/11732)。 */
    EndTime?: string;
    /** 该字段已无效。 */
    Vids?: string[];
    /** 该字段已无效。 */
    Vid?: string;
  }

  interface SearchMediaResponse {
    /** 符合搜索条件的记录总数。最大值：5000。当命中记录数超过5000时，该字段将返回 5000，而非实际命中总数。 */
    TotalCount?: number;
    /** 媒体文件信息列表。 */
    MediaInfoSet?: MediaInfo[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface SetCLSPushTargetRequest {
    /** 域名。 */
    Domain: string;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 要设置的中国大陆地区的日志推送目标。 */
    ChineseMainlandCLSTargetInfo?: AreaCLSTargetInfo;
    /** 要设置的中国大陆以外地区的日志推送目标。 */
    OutsideChineseMainlandCLSTargetInfo?: AreaCLSTargetInfo;
  }

  interface SetCLSPushTargetResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface SetDrmKeyProviderInfoRequest {
    /** 华曦达（SDMC）相关的 DRM 密钥提供商信息。 */
    SDMCInfo?: SDMCDrmKeyProviderInfo;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
  }

  interface SetDrmKeyProviderInfoResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface SetVodDomainCertificateRequest {
    /** 域名。 */
    Domain: string;
    /** 本次接口调用的操作类型，可选值：Set：设置域名的 HTTPS 所需证书；Clear: 清空域名 HTTPS 配置，清空后该域名无法支持 HTTPS 访问。 */
    Operation: string;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** [腾讯云SSL](/document/product/400/7572) 上传的证书 ID。清空域名 HTTPS 配置时无需填写该字段。 */
    CertID?: string;
  }

  interface SetVodDomainCertificateResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface SimpleHlsClipRequest {
    /** 需要裁剪的腾讯云点播 HLS 视频 URL。 */
    Url: string;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 裁剪的开始偏移时间，单位秒。默认 0，即从视频开头开始裁剪。负数表示距离视频结束多少秒开始裁剪。例如 -10 表示从倒数第 10 秒开始裁剪。 */
    StartTimeOffset?: number;
    /** 裁剪的结束偏移时间，单位秒。默认 0，即裁剪到视频尾部。负数表示距离视频结束多少秒结束裁剪。例如 -10 表示到倒数第 10 秒结束裁剪。 */
    EndTimeOffset?: number;
    /** 是否固化。0 不固化，1 固化。默认不固化。 */
    IsPersistence?: number;
    /** 剪辑固化后的视频存储过期时间。格式参照 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。填“9999-12-31T23:59:59Z”表示永不过期。过期后该媒体文件及其相关资源（转码结果、雪碧图等）将被永久删除。仅 IsPersistence 为 1 时有效，默认剪辑固化的视频永不过期。 */
    ExpireTime?: string;
    /** 剪辑固化后的视频点播任务流处理，详见[上传指定任务流](https://cloud.tencent.com/document/product/266/9759)。仅 IsPersistence 为 1 且 Precision 为 Rough 时有效。 */
    Procedure?: string;
    /** 分类ID，用于对媒体进行分类管理，可通过 [创建分类](/document/product/266/7812) 接口，创建分类，获得分类 ID。默认值：0，表示其他分类。仅 IsPersistence 为 1 时有效。 */
    ClassId?: number;
    /** 来源上下文，用于透传用户请求信息，[上传完成回调](/document/product/266/7830) 将返回该字段值，最长 250 个字符。仅 IsPersistence 为 1 时有效。 */
    SourceContext?: string;
    /** 会话上下文，用于透传用户请求信息，当指定 Procedure 参数后，[任务流状态变更回调](/document/product/266/9636) 将返回该字段值，最长 1000 个字符。仅 IsPersistence 为 1 时有效。 */
    SessionContext?: string;
    /** 裁剪精度，取值有：Rough: 粗略裁剪，最小剪辑精度是单个 ts 分片；Precise: 精确裁剪，做到按照剪辑时间点的毫秒级精确剪辑。 默认取值 Rough。 */
    Precision?: string;
    /** 输出视频类型，取值有：hls: 输出 hls 文件；mp4：输出 mp4 文件，MP4 文件的大小不超过5G，时长小于2小时。仅当 Precision 选择 Precise 且 IsPersistence 选择0时有效，即只有非固化的精确剪辑时支持输出 MP4。默认取值 hls。 */
    OutputMediaType?: string;
    /** 保留字段，特殊用途时使用。 示例值："" */
    ExtInfo?: string;
  }

  interface SimpleHlsClipResponse {
    /** 裁剪后的视频地址。 */
    Url?: string;
    /** 裁剪后的视频元信息。目前`Size`，`Rotate`，`VideoDuration`，`AudioDuration` 几个字段暂时缺省，没有真实数据。 */
    MetaData?: MediaMetaData;
    /** 剪辑固化后的视频的媒体文件的唯一标识。 */
    FileId?: string;
    /** 剪辑固化后的视频任务流 ID。 */
    TaskId?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface SplitMediaRequest {
    /** 视频的 ID。 */
    FileId: string;
    /** 视频拆条任务信息列表，最多同时支持100个拆条信息。 */
    Segments: SplitMediaTaskConfig[];
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 标识来源上下文，用于透传用户请求信息，在 SplitMediaComplete 回调和任务流状态变更回调将返回该字段值，最长 1000个字符。 */
    SessionContext?: string;
    /** 用于任务去重的识别码，如果三天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。 */
    SessionId?: string;
    /** 任务的优先级，数值越大优先级越高，取值范围是 -10 到 10，不填代表 0。 */
    TasksPriority?: number;
  }

  interface SplitMediaResponse {
    /** 视频拆条的任务 ID，可以通过该 ID 查询拆条任务（任务类型为 SplitMedia）的状态。 */
    TaskId?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface VerifyDomainRecordRequest {
    /** 需要接入点播的加速域名。 */
    Domain: string;
    /** 点播[应用](/document/product/266/14574) ID。从2024年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 验证方式：dns：DNS 解析验证；fIle：文件验证。默认值：dns。 */
    VerifyType?: string;
  }

  interface VerifyDomainRecordResponse {
    /** 是否验证成功。 */
    Result?: boolean;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface WeChatMiniProgramPublishRequest {
    /** 媒体文件 ID。 */
    FileId: string;
    /** 点播[应用](/document/product/266/14574) ID。从2023年12月25日起开通点播的客户，如访问点播应用中的资源（无论是默认应用还是新创建的应用），必须将该字段填写为应用 ID。 */
    SubAppId?: number;
    /** 发布视频所对应的转码模板 ID，为 0 代表原始视频。支持的视频格式：当 SourceDefinition 为 0 时，视频格式支持 MP4、3GP 格式；当 SourceDefinition 大于 0 时，视频格式支持 MP4、3GP 及 M3U8 格式。不填默认值为 0。 */
    SourceDefinition?: number;
  }

  interface WeChatMiniProgramPublishResponse {
    /** 任务 ID。 */
    TaskId?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }
}

/** {@link Vod 云点播} */
declare interface Vod {
  (): Versions;
  /** 创建增量迁移策略 {@link CreateIncrementalMigrationStrategyRequest} {@link CreateIncrementalMigrationStrategyResponse} */
  CreateIncrementalMigrationStrategy(data: CreateIncrementalMigrationStrategyRequest, config?: AxiosRequestConfig): AxiosPromise<CreateIncrementalMigrationStrategyResponse>;
  /** 创建专业版应用存储 {@link CreateStorageRequest} {@link CreateStorageResponse} */
  CreateStorage(data: CreateStorageRequest, config?: AxiosRequestConfig): AxiosPromise<CreateStorageResponse>;
  /** 创建应用存储临时访问凭证 {@link CreateStorageCredentialsRequest} {@link CreateStorageCredentialsResponse} */
  CreateStorageCredentials(data: CreateStorageCredentialsRequest, config?: AxiosRequestConfig): AxiosPromise<CreateStorageCredentialsResponse>;
  /** 删除增量迁移策略 {@link DeleteIncrementalMigrationStrategyRequest} {@link DeleteIncrementalMigrationStrategyResponse} */
  DeleteIncrementalMigrationStrategy(data: DeleteIncrementalMigrationStrategyRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteIncrementalMigrationStrategyResponse>;
  /** 查询增量迁移策略信息 {@link DescribeIncrementalMigrationStrategyInfosRequest} {@link DescribeIncrementalMigrationStrategyInfosResponse} */
  DescribeIncrementalMigrationStrategyInfos(data: DescribeIncrementalMigrationStrategyInfosRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIncrementalMigrationStrategyInfosResponse>;
  /** 查询专业版应用存储 {@link DescribeStorageRequest} {@link DescribeStorageResponse} */
  DescribeStorage(data: DescribeStorageRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeStorageResponse>;
  /** 修改增量迁移策略 {@link ModifyIncrementalMigrationStrategyRequest} {@link ModifyIncrementalMigrationStrategyResponse} */
  ModifyIncrementalMigrationStrategy(data: ModifyIncrementalMigrationStrategyRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyIncrementalMigrationStrategyResponse>;
  /** 申请上传 {@link V20180717.ApplyUploadRequest} {@link V20180717.ApplyUploadResponse} */
  ApplyUpload(data: V20180717.ApplyUploadRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.ApplyUploadResponse>;
  /** 关联媒体字幕 {@link V20180717.AttachMediaSubtitlesRequest} {@link V20180717.AttachMediaSubtitlesResponse} */
  AttachMediaSubtitles(data: V20180717.AttachMediaSubtitlesRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.AttachMediaSubtitlesResponse>;
  /** 确认上传 {@link V20180717.CommitUploadRequest} {@link V20180717.CommitUploadResponse} */
  CommitUpload(data: V20180717.CommitUploadRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.CommitUploadResponse>;
  /** 视频合成 {@link V20180717.ComposeMediaRequest} {@link V20180717.ComposeMediaResponse} */
  ComposeMedia(data: V20180717.ComposeMediaRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.ComposeMediaResponse>;
  /** 确认事件通知 {@link V20180717.ConfirmEventsRequest} {@link V20180717.ConfirmEventsResponse} */
  ConfirmEvents(data: V20180717.ConfirmEventsRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.ConfirmEventsResponse>;
  /** 创建音视频内容分析模板 {@link V20180717.CreateAIAnalysisTemplateRequest} {@link V20180717.CreateAIAnalysisTemplateResponse} */
  CreateAIAnalysisTemplate(data: V20180717.CreateAIAnalysisTemplateRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.CreateAIAnalysisTemplateResponse>;
  /** 创建音视频内容识别模板 {@link V20180717.CreateAIRecognitionTemplateRequest} {@link V20180717.CreateAIRecognitionTemplateResponse} */
  CreateAIRecognitionTemplate(data: V20180717.CreateAIRecognitionTemplateRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.CreateAIRecognitionTemplateResponse>;
  /** 创建转自适应码流模板 {@link V20180717.CreateAdaptiveDynamicStreamingTemplateRequest} {@link V20180717.CreateAdaptiveDynamicStreamingTemplateResponse} */
  CreateAdaptiveDynamicStreamingTemplate(data: V20180717.CreateAdaptiveDynamicStreamingTemplateRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.CreateAdaptiveDynamicStreamingTemplateResponse>;
  /** 创建转动图模板 {@link V20180717.CreateAnimatedGraphicsTemplateRequest} {@link V20180717.CreateAnimatedGraphicsTemplateResponse} */
  CreateAnimatedGraphicsTemplate(data: V20180717.CreateAnimatedGraphicsTemplateRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.CreateAnimatedGraphicsTemplateResponse>;
  /** 创建日志集 {@link V20180717.CreateCLSLogsetRequest} {@link V20180717.CreateCLSLogsetResponse} */
  CreateCLSLogset(data: V20180717.CreateCLSLogsetRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.CreateCLSLogsetResponse>;
  /** 创建日志主题 {@link V20180717.CreateCLSTopicRequest} {@link V20180717.CreateCLSTopicResponse} */
  CreateCLSTopic(data: V20180717.CreateCLSTopicRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.CreateCLSTopicResponse>;
  /** 创建分类 {@link V20180717.CreateClassRequest} {@link V20180717.CreateClassResponse} */
  CreateClass(data: V20180717.CreateClassRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.CreateClassResponse>;
  /** 创建复杂自适应码流任务 {@link V20180717.CreateComplexAdaptiveDynamicStreamingTaskRequest} {@link V20180717.CreateComplexAdaptiveDynamicStreamingTaskResponse} */
  CreateComplexAdaptiveDynamicStreamingTask(data: V20180717.CreateComplexAdaptiveDynamicStreamingTaskRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.CreateComplexAdaptiveDynamicStreamingTaskResponse>;
  /** 创建音视频内容审核模板 {@link V20180717.CreateContentReviewTemplateRequest} {@link V20180717.CreateContentReviewTemplateResponse} */
  CreateContentReviewTemplate(data: V20180717.CreateContentReviewTemplateRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.CreateContentReviewTemplateResponse>;
  /** 生成域名解析记录 {@link V20180717.CreateDomainVerifyRecordRequest} {@link V20180717.CreateDomainVerifyRecordResponse} */
  CreateDomainVerifyRecord(data: V20180717.CreateDomainVerifyRecordRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.CreateDomainVerifyRecordResponse>;
  /** 创建音画质重生模板 {@link V20180717.CreateEnhanceMediaTemplateRequest} {@link V20180717.CreateEnhanceMediaTemplateResponse} */
  CreateEnhanceMediaTemplate(data: V20180717.CreateEnhanceMediaTemplateRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.CreateEnhanceMediaTemplateResponse>;
  /** 创建片头片尾模板 {@link V20180717.CreateHeadTailTemplateRequest} {@link V20180717.CreateHeadTailTemplateResponse} */
  CreateHeadTailTemplate(data: V20180717.CreateHeadTailTemplateRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.CreateHeadTailTemplateResponse>;
  /** 创建图片即时处理模板 {@link V20180717.CreateImageProcessingTemplateRequest} {@link V20180717.CreateImageProcessingTemplateResponse} */
  CreateImageProcessingTemplate(data: V20180717.CreateImageProcessingTemplateRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.CreateImageProcessingTemplateResponse>;
  /** 创建雪碧图模板 {@link V20180717.CreateImageSpriteTemplateRequest} {@link V20180717.CreateImageSpriteTemplateResponse} */
  CreateImageSpriteTemplate(data: V20180717.CreateImageSpriteTemplateRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.CreateImageSpriteTemplateResponse>;
  /** 创建即时转码模板 {@link V20180717.CreateJustInTimeTranscodeTemplateRequest} {@link V20180717.CreateJustInTimeTranscodeTemplateResponse} */
  CreateJustInTimeTranscodeTemplate(data: V20180717.CreateJustInTimeTranscodeTemplateRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.CreateJustInTimeTranscodeTemplateResponse>;
  /** 创建素材样本 {@link V20180717.CreatePersonSampleRequest} {@link V20180717.CreatePersonSampleResponse} */
  CreatePersonSample(data: V20180717.CreatePersonSampleRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.CreatePersonSampleResponse>;
  /** 创建任务流模板 {@link V20180717.CreateProcedureTemplateRequest} {@link V20180717.CreateProcedureTemplateResponse} */
  CreateProcedureTemplate(data: V20180717.CreateProcedureTemplateRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.CreateProcedureTemplateResponse>;
  /** 创建音画质检测模板 {@link V20180717.CreateQualityInspectTemplateRequest} {@link V20180717.CreateQualityInspectTemplateResponse} */
  CreateQualityInspectTemplate(data: V20180717.CreateQualityInspectTemplateRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.CreateQualityInspectTemplateResponse>;
  /** 创建视频重生模板 {@link V20180717.CreateRebuildMediaTemplateRequest} {@link V20180717.CreateRebuildMediaTemplateResponse} */
  CreateRebuildMediaTemplate(data: V20180717.CreateRebuildMediaTemplateRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.CreateRebuildMediaTemplateResponse>;
  /** 创建审核模板 {@link V20180717.CreateReviewTemplateRequest} {@link V20180717.CreateReviewTemplateResponse} */
  CreateReviewTemplate(data: V20180717.CreateReviewTemplateRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.CreateReviewTemplateResponse>;
  /** 创建轮播播单 {@link V20180717.CreateRoundPlayRequest} {@link V20180717.CreateRoundPlayResponse} */
  CreateRoundPlay(data: V20180717.CreateRoundPlayRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.CreateRoundPlayResponse>;
  /** 创建采样截图模板 {@link V20180717.CreateSampleSnapshotTemplateRequest} {@link V20180717.CreateSampleSnapshotTemplateResponse} */
  CreateSampleSnapshotTemplate(data: V20180717.CreateSampleSnapshotTemplateRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.CreateSampleSnapshotTemplateResponse>;
  /** 创建指定时间点截图模板 {@link V20180717.CreateSnapshotByTimeOffsetTemplateRequest} {@link V20180717.CreateSnapshotByTimeOffsetTemplateResponse} */
  CreateSnapshotByTimeOffsetTemplate(data: V20180717.CreateSnapshotByTimeOffsetTemplateRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.CreateSnapshotByTimeOffsetTemplateResponse>;
  /** 开通某地域的存储 {@link V20180717.CreateStorageRegionRequest} {@link V20180717.CreateStorageRegionResponse} */
  CreateStorageRegion(data: V20180717.CreateStorageRegionRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.CreateStorageRegionResponse>;
  /** 创建应用 {@link V20180717.CreateSubAppIdRequest} {@link V20180717.CreateSubAppIdResponse} */
  CreateSubAppId(data: V20180717.CreateSubAppIdRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.CreateSubAppIdResponse>;
  /** 创建播放器配置 {@link V20180717.CreateSuperPlayerConfigRequest} {@link V20180717.CreateSuperPlayerConfigResponse} */
  CreateSuperPlayerConfig(data: V20180717.CreateSuperPlayerConfigRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.CreateSuperPlayerConfigResponse>;
  /** 创建转码模板 {@link V20180717.CreateTranscodeTemplateRequest} {@link V20180717.CreateTranscodeTemplateResponse} */
  CreateTranscodeTemplate(data: V20180717.CreateTranscodeTemplateRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.CreateTranscodeTemplateResponse>;
  /** 添加点播加速域名 {@link V20180717.CreateVodDomainRequest} {@link V20180717.CreateVodDomainResponse} */
  CreateVodDomain(data: V20180717.CreateVodDomainRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.CreateVodDomainResponse>;
  /** 创建水印模板 {@link V20180717.CreateWatermarkTemplateRequest} {@link V20180717.CreateWatermarkTemplateResponse} */
  CreateWatermarkTemplate(data: V20180717.CreateWatermarkTemplateRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.CreateWatermarkTemplateResponse>;
  /** 创建关键词样本 {@link V20180717.CreateWordSamplesRequest} {@link V20180717.CreateWordSamplesResponse} */
  CreateWordSamples(data: V20180717.CreateWordSamplesRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.CreateWordSamplesResponse>;
  /** 删除音视频内容分析模板 {@link V20180717.DeleteAIAnalysisTemplateRequest} {@link V20180717.DeleteAIAnalysisTemplateResponse} */
  DeleteAIAnalysisTemplate(data: V20180717.DeleteAIAnalysisTemplateRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.DeleteAIAnalysisTemplateResponse>;
  /** 删除音视频内容识别模板 {@link V20180717.DeleteAIRecognitionTemplateRequest} {@link V20180717.DeleteAIRecognitionTemplateResponse} */
  DeleteAIRecognitionTemplate(data: V20180717.DeleteAIRecognitionTemplateRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.DeleteAIRecognitionTemplateResponse>;
  /** 删除转自适应码流模板 {@link V20180717.DeleteAdaptiveDynamicStreamingTemplateRequest} {@link V20180717.DeleteAdaptiveDynamicStreamingTemplateResponse} */
  DeleteAdaptiveDynamicStreamingTemplate(data: V20180717.DeleteAdaptiveDynamicStreamingTemplateRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.DeleteAdaptiveDynamicStreamingTemplateResponse>;
  /** 删除转动图模板 {@link V20180717.DeleteAnimatedGraphicsTemplateRequest} {@link V20180717.DeleteAnimatedGraphicsTemplateResponse} */
  DeleteAnimatedGraphicsTemplate(data: V20180717.DeleteAnimatedGraphicsTemplateRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.DeleteAnimatedGraphicsTemplateResponse>;
  /** 删除日志主题 {@link V20180717.DeleteCLSTopicRequest} {@link V20180717.DeleteCLSTopicResponse} */
  DeleteCLSTopic(data: V20180717.DeleteCLSTopicRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.DeleteCLSTopicResponse>;
  /** 删除分类 {@link V20180717.DeleteClassRequest} {@link V20180717.DeleteClassResponse} */
  DeleteClass(data: V20180717.DeleteClassRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.DeleteClassResponse>;
  /** 删除音视频内容审核模板 {@link V20180717.DeleteContentReviewTemplateRequest} {@link V20180717.DeleteContentReviewTemplateResponse} */
  DeleteContentReviewTemplate(data: V20180717.DeleteContentReviewTemplateRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.DeleteContentReviewTemplateResponse>;
  /** 删除音画质重生模板 {@link V20180717.DeleteEnhanceMediaTemplateRequest} {@link V20180717.DeleteEnhanceMediaTemplateResponse} */
  DeleteEnhanceMediaTemplate(data: V20180717.DeleteEnhanceMediaTemplateRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.DeleteEnhanceMediaTemplateResponse>;
  /** 删除片头片尾模板 {@link V20180717.DeleteHeadTailTemplateRequest} {@link V20180717.DeleteHeadTailTemplateResponse} */
  DeleteHeadTailTemplate(data: V20180717.DeleteHeadTailTemplateRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.DeleteHeadTailTemplateResponse>;
  /** 删除图片即时处理模板 {@link V20180717.DeleteImageProcessingTemplateRequest} {@link V20180717.DeleteImageProcessingTemplateResponse} */
  DeleteImageProcessingTemplate(data: V20180717.DeleteImageProcessingTemplateRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.DeleteImageProcessingTemplateResponse>;
  /** 删除雪碧图模板 {@link V20180717.DeleteImageSpriteTemplateRequest} {@link V20180717.DeleteImageSpriteTemplateResponse} */
  DeleteImageSpriteTemplate(data: V20180717.DeleteImageSpriteTemplateRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.DeleteImageSpriteTemplateResponse>;
  /** 删除即时转码模板 {@link V20180717.DeleteJustInTimeTranscodeTemplateRequest} {@link V20180717.DeleteJustInTimeTranscodeTemplateResponse} */
  DeleteJustInTimeTranscodeTemplate(data: V20180717.DeleteJustInTimeTranscodeTemplateRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.DeleteJustInTimeTranscodeTemplateResponse>;
  /** 删除媒体 {@link V20180717.DeleteMediaRequest} {@link V20180717.DeleteMediaResponse} */
  DeleteMedia(data: V20180717.DeleteMediaRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.DeleteMediaResponse>;
  /** 删除素材样本 {@link V20180717.DeletePersonSampleRequest} {@link V20180717.DeletePersonSampleResponse} */
  DeletePersonSample(data: V20180717.DeletePersonSampleRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.DeletePersonSampleResponse>;
  /** 删除任务流模板 {@link V20180717.DeleteProcedureTemplateRequest} {@link V20180717.DeleteProcedureTemplateResponse} */
  DeleteProcedureTemplate(data: V20180717.DeleteProcedureTemplateRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.DeleteProcedureTemplateResponse>;
  /** 删除音画质检测模板 {@link V20180717.DeleteQualityInspectTemplateRequest} {@link V20180717.DeleteQualityInspectTemplateResponse} */
  DeleteQualityInspectTemplate(data: V20180717.DeleteQualityInspectTemplateRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.DeleteQualityInspectTemplateResponse>;
  /** 删除视频重生模板 {@link V20180717.DeleteRebuildMediaTemplateRequest} {@link V20180717.DeleteRebuildMediaTemplateResponse} */
  DeleteRebuildMediaTemplate(data: V20180717.DeleteRebuildMediaTemplateRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.DeleteRebuildMediaTemplateResponse>;
  /** 删除审核模板 {@link V20180717.DeleteReviewTemplateRequest} {@link V20180717.DeleteReviewTemplateResponse} */
  DeleteReviewTemplate(data: V20180717.DeleteReviewTemplateRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.DeleteReviewTemplateResponse>;
  /** 删除轮播播单 {@link V20180717.DeleteRoundPlayRequest} {@link V20180717.DeleteRoundPlayResponse} */
  DeleteRoundPlay(data: V20180717.DeleteRoundPlayRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.DeleteRoundPlayResponse>;
  /** 删除采样截图模板 {@link V20180717.DeleteSampleSnapshotTemplateRequest} {@link V20180717.DeleteSampleSnapshotTemplateResponse} */
  DeleteSampleSnapshotTemplate(data: V20180717.DeleteSampleSnapshotTemplateRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.DeleteSampleSnapshotTemplateResponse>;
  /** 删除指定时间点截图模板 {@link V20180717.DeleteSnapshotByTimeOffsetTemplateRequest} {@link V20180717.DeleteSnapshotByTimeOffsetTemplateResponse} */
  DeleteSnapshotByTimeOffsetTemplate(data: V20180717.DeleteSnapshotByTimeOffsetTemplateRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.DeleteSnapshotByTimeOffsetTemplateResponse>;
  /** 删除播放器配置 {@link V20180717.DeleteSuperPlayerConfigRequest} {@link V20180717.DeleteSuperPlayerConfigResponse} */
  DeleteSuperPlayerConfig(data: V20180717.DeleteSuperPlayerConfigRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.DeleteSuperPlayerConfigResponse>;
  /** 删除转码模板 {@link V20180717.DeleteTranscodeTemplateRequest} {@link V20180717.DeleteTranscodeTemplateResponse} */
  DeleteTranscodeTemplate(data: V20180717.DeleteTranscodeTemplateRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.DeleteTranscodeTemplateResponse>;
  /** 删除点播加速域名 {@link V20180717.DeleteVodDomainRequest} {@link V20180717.DeleteVodDomainResponse} */
  DeleteVodDomain(data: V20180717.DeleteVodDomainRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.DeleteVodDomainResponse>;
  /** 删除水印模板 {@link V20180717.DeleteWatermarkTemplateRequest} {@link V20180717.DeleteWatermarkTemplateResponse} */
  DeleteWatermarkTemplate(data: V20180717.DeleteWatermarkTemplateRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.DeleteWatermarkTemplateResponse>;
  /** 删除关键词样本 {@link V20180717.DeleteWordSamplesRequest} {@link V20180717.DeleteWordSamplesResponse} */
  DeleteWordSamples(data: V20180717.DeleteWordSamplesRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.DeleteWordSamplesResponse>;
  /** 获取音视频内容分析模板列表 {@link V20180717.DescribeAIAnalysisTemplatesRequest} {@link V20180717.DescribeAIAnalysisTemplatesResponse} */
  DescribeAIAnalysisTemplates(data: V20180717.DescribeAIAnalysisTemplatesRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.DescribeAIAnalysisTemplatesResponse>;
  /** 获取音视频内容识别模板列表 {@link V20180717.DescribeAIRecognitionTemplatesRequest} {@link V20180717.DescribeAIRecognitionTemplatesResponse} */
  DescribeAIRecognitionTemplates(data: V20180717.DescribeAIRecognitionTemplatesRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.DescribeAIRecognitionTemplatesResponse>;
  /** 获取转自适应码流模板列表 {@link V20180717.DescribeAdaptiveDynamicStreamingTemplatesRequest} {@link V20180717.DescribeAdaptiveDynamicStreamingTemplatesResponse} */
  DescribeAdaptiveDynamicStreamingTemplates(data: V20180717.DescribeAdaptiveDynamicStreamingTemplatesRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.DescribeAdaptiveDynamicStreamingTemplatesResponse>;
  /** 获取所有分类 {@link V20180717.DescribeAllClassRequest} {@link V20180717.DescribeAllClassResponse} */
  DescribeAllClass(data: V20180717.DescribeAllClassRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.DescribeAllClassResponse>;
  /** 获取转动图模板列表 {@link V20180717.DescribeAnimatedGraphicsTemplatesRequest} {@link V20180717.DescribeAnimatedGraphicsTemplatesResponse} */
  DescribeAnimatedGraphicsTemplates(data: V20180717.DescribeAnimatedGraphicsTemplatesRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.DescribeAnimatedGraphicsTemplatesResponse>;
  /** 查询点播域名的 CDN 统计数据 {@link V20180717.DescribeCDNStatDetailsRequest} {@link V20180717.DescribeCDNStatDetailsResponse} */
  DescribeCDNStatDetails(data: V20180717.DescribeCDNStatDetailsRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.DescribeCDNStatDetailsResponse>;
  /** 查询点播 CDN 用量数据 {@link V20180717.DescribeCDNUsageDataRequest} {@link V20180717.DescribeCDNUsageDataResponse} */
  DescribeCDNUsageData(data: V20180717.DescribeCDNUsageDataRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.DescribeCDNUsageDataResponse>;
  /** 查询日志集列表 {@link V20180717.DescribeCLSLogsetsRequest} {@link V20180717.DescribeCLSLogsetsResponse} */
  DescribeCLSLogsets(data: V20180717.DescribeCLSLogsetsRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.DescribeCLSLogsetsResponse>;
  /** 查询日志投递目标 {@link V20180717.DescribeCLSPushTargetsRequest} {@link V20180717.DescribeCLSPushTargetsResponse} */
  DescribeCLSPushTargets(data: V20180717.DescribeCLSPushTargetsRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.DescribeCLSPushTargetsResponse>;
  /** 查询日志主题列表 {@link V20180717.DescribeCLSTopicsRequest} {@link V20180717.DescribeCLSTopicsResponse} */
  DescribeCLSTopics(data: V20180717.DescribeCLSTopicsRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.DescribeCLSTopicsResponse>;
  /** 查询 CDN 日志下载链接列表 {@link V20180717.DescribeCdnLogsRequest} {@link V20180717.DescribeCdnLogsResponse} */
  DescribeCdnLogs(data: V20180717.DescribeCdnLogsRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.DescribeCdnLogsResponse>;
  /** 查询客户端上传加速统计数据 {@link V20180717.DescribeClientUploadAccelerationUsageDataRequest} {@link V20180717.DescribeClientUploadAccelerationUsageDataResponse} */
  DescribeClientUploadAccelerationUsageData(data: V20180717.DescribeClientUploadAccelerationUsageDataRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.DescribeClientUploadAccelerationUsageDataResponse>;
  /** 获取音视频内容审核模板列表 {@link V20180717.DescribeContentReviewTemplatesRequest} {@link V20180717.DescribeContentReviewTemplatesResponse} */
  DescribeContentReviewTemplates(data: V20180717.DescribeContentReviewTemplatesRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.DescribeContentReviewTemplatesResponse>;
  /** 查询轮播当前播放列表 {@link V20180717.DescribeCurrentPlaylistRequest} {@link V20180717.DescribeCurrentPlaylistResponse} */
  DescribeCurrentPlaylist(data: V20180717.DescribeCurrentPlaylistRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.DescribeCurrentPlaylistResponse>;
  /** 查询媒体文件的播放统计数据 {@link V20180717.DescribeDailyMediaPlayStatRequest} {@link V20180717.DescribeDailyMediaPlayStatResponse} */
  DescribeDailyMediaPlayStat(data: V20180717.DescribeDailyMediaPlayStatRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.DescribeDailyMediaPlayStatResponse>;
  /** 查询每日播放 Top100的媒体文件的播放统计数据 {@link V20180717.DescribeDailyMostPlayedStatRequest} {@link V20180717.DescribeDailyMostPlayedStatResponse} */
  DescribeDailyMostPlayedStat(data: V20180717.DescribeDailyMostPlayedStatRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.DescribeDailyMostPlayedStatResponse>;
  /** 查询播放统计文件下载列表 {@link V20180717.DescribeDailyPlayStatFileListRequest} {@link V20180717.DescribeDailyPlayStatFileListResponse} */
  DescribeDailyPlayStatFileList(data: V20180717.DescribeDailyPlayStatFileListRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.DescribeDailyPlayStatFileListResponse>;
  /** 查询默认分发配置 {@link V20180717.DescribeDefaultDistributionConfigRequest} {@link V20180717.DescribeDefaultDistributionConfigResponse} */
  DescribeDefaultDistributionConfig(data: V20180717.DescribeDefaultDistributionConfigRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.DescribeDefaultDistributionConfigResponse>;
  /** 获取视频解密密钥 {@link V20180717.DescribeDrmDataKeyRequest} {@link V20180717.DescribeDrmDataKeyResponse} */
  DescribeDrmDataKey(data: V20180717.DescribeDrmDataKeyRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.DescribeDrmDataKeyResponse>;
  /** 查询 DRM 密钥提供商信息 {@link V20180717.DescribeDrmKeyProviderInfoRequest} {@link V20180717.DescribeDrmKeyProviderInfoResponse} */
  DescribeDrmKeyProviderInfo(data: V20180717.DescribeDrmKeyProviderInfoRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.DescribeDrmKeyProviderInfoResponse>;
  /** 获取音画质重生模板列表 {@link V20180717.DescribeEnhanceMediaTemplatesRequest} {@link V20180717.DescribeEnhanceMediaTemplatesResponse} */
  DescribeEnhanceMediaTemplates(data: V20180717.DescribeEnhanceMediaTemplatesRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.DescribeEnhanceMediaTemplatesResponse>;
  /** 查询事件通知配置 {@link V20180717.DescribeEventConfigRequest} {@link V20180717.DescribeEventConfigResponse} */
  DescribeEventConfig(data: V20180717.DescribeEventConfigRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.DescribeEventConfigResponse>;
  /** 获取事件通知状态 {@link V20180717.DescribeEventsStateRequest} {@link V20180717.DescribeEventsStateResponse} */
  DescribeEventsState(data: V20180717.DescribeEventsStateRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.DescribeEventsStateResponse>;
  /** 获取文件属性 {@link V20180717.DescribeFileAttributesRequest} {@link V20180717.DescribeFileAttributesResponse} */
  DescribeFileAttributes(data: V20180717.DescribeFileAttributesRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.DescribeFileAttributesResponse>;
  /** 获取片头片尾模板列表 {@link V20180717.DescribeHeadTailTemplatesRequest} {@link V20180717.DescribeHeadTailTemplatesResponse} */
  DescribeHeadTailTemplates(data: V20180717.DescribeHeadTailTemplatesRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.DescribeHeadTailTemplatesResponse>;
  /** 获取图片即时处理模板列表 {@link V20180717.DescribeImageProcessingTemplatesRequest} {@link V20180717.DescribeImageProcessingTemplatesResponse} */
  DescribeImageProcessingTemplates(data: V20180717.DescribeImageProcessingTemplatesRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.DescribeImageProcessingTemplatesResponse>;
  /** 查询图片审核用量统计数据 {@link V20180717.DescribeImageReviewUsageDataRequest} {@link V20180717.DescribeImageReviewUsageDataResponse} */
  DescribeImageReviewUsageData(data: V20180717.DescribeImageReviewUsageDataRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.DescribeImageReviewUsageDataResponse>;
  /** 获取雪碧图模板列表 {@link V20180717.DescribeImageSpriteTemplatesRequest} {@link V20180717.DescribeImageSpriteTemplatesResponse} */
  DescribeImageSpriteTemplates(data: V20180717.DescribeImageSpriteTemplatesRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.DescribeImageSpriteTemplatesResponse>;
  /** 获取即时转码模板列表 {@link V20180717.DescribeJustInTimeTranscodeTemplatesRequest} {@link V20180717.DescribeJustInTimeTranscodeTemplatesResponse} */
  DescribeJustInTimeTranscodeTemplates(data: V20180717.DescribeJustInTimeTranscodeTemplatesRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.DescribeJustInTimeTranscodeTemplatesResponse>;
  /** 查询 License 请求数统计数据 {@link V20180717.DescribeLicenseUsageDataRequest} {@link V20180717.DescribeLicenseUsageDataResponse} */
  DescribeLicenseUsageData(data: V20180717.DescribeLicenseUsageDataRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.DescribeLicenseUsageDataResponse>;
  /** 获取媒体详细信息 {@link V20180717.DescribeMediaInfosRequest} {@link V20180717.DescribeMediaInfosResponse} */
  DescribeMediaInfos(data: V20180717.DescribeMediaInfosRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.DescribeMediaInfosResponse>;
  /** 查询媒体文件按指定时间粒度统计的播放数据 {@link V20180717.DescribeMediaPlayStatDetailsRequest} {@link V20180717.DescribeMediaPlayStatDetailsResponse} */
  DescribeMediaPlayStatDetails(data: V20180717.DescribeMediaPlayStatDetailsRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.DescribeMediaPlayStatDetailsResponse>;
  /** 查询视频处理用量统计数据 {@link V20180717.DescribeMediaProcessUsageDataRequest} {@link V20180717.DescribeMediaProcessUsageDataResponse} */
  DescribeMediaProcessUsageData(data: V20180717.DescribeMediaProcessUsageDataRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.DescribeMediaProcessUsageDataResponse>;
  /** 获取素材样本列表 {@link V20180717.DescribePersonSamplesRequest} {@link V20180717.DescribePersonSamplesResponse} */
  DescribePersonSamples(data: V20180717.DescribePersonSamplesRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.DescribePersonSamplesResponse>;
  /** 查询购买的预付费商品列表 {@link V20180717.DescribePrepaidProductsRequest} {@link V20180717.DescribePrepaidProductsResponse} */
  DescribePrepaidProducts(data: V20180717.DescribePrepaidProductsRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.DescribePrepaidProductsResponse>;
  /** 获取任务流模板列表 {@link V20180717.DescribeProcedureTemplatesRequest} {@link V20180717.DescribeProcedureTemplatesResponse} */
  DescribeProcedureTemplates(data: V20180717.DescribeProcedureTemplatesRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.DescribeProcedureTemplatesResponse>;
  /** 获取音画质检测模板列表 {@link V20180717.DescribeQualityInspectTemplatesRequest} {@link V20180717.DescribeQualityInspectTemplatesResponse} */
  DescribeQualityInspectTemplates(data: V20180717.DescribeQualityInspectTemplatesRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.DescribeQualityInspectTemplatesResponse>;
  /** 获取视频重生模板列表 {@link V20180717.DescribeRebuildMediaTemplatesRequest} {@link V20180717.DescribeRebuildMediaTemplatesResponse} */
  DescribeRebuildMediaTemplates(data: V20180717.DescribeRebuildMediaTemplatesRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.DescribeRebuildMediaTemplatesResponse>;
  /** 查询内容智能识别详情 {@link V20180717.DescribeReviewDetailsRequest} {@link V20180717.DescribeReviewDetailsResponse} */
  DescribeReviewDetails(data: V20180717.DescribeReviewDetailsRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.DescribeReviewDetailsResponse>;
  /** 获取审核模板列表 {@link V20180717.DescribeReviewTemplatesRequest} {@link V20180717.DescribeReviewTemplatesResponse} */
  DescribeReviewTemplates(data: V20180717.DescribeReviewTemplatesRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.DescribeReviewTemplatesResponse>;
  /** 获取轮播播单列表 {@link V20180717.DescribeRoundPlaysRequest} {@link V20180717.DescribeRoundPlaysResponse} */
  DescribeRoundPlays(data: V20180717.DescribeRoundPlaysRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.DescribeRoundPlaysResponse>;
  /** 获取采样截图模板列表 {@link V20180717.DescribeSampleSnapshotTemplatesRequest} {@link V20180717.DescribeSampleSnapshotTemplatesResponse} */
  DescribeSampleSnapshotTemplates(data: V20180717.DescribeSampleSnapshotTemplatesRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.DescribeSampleSnapshotTemplatesResponse>;
  /** 获取指定时间点截图模板列表 {@link V20180717.DescribeSnapshotByTimeOffsetTemplatesRequest} {@link V20180717.DescribeSnapshotByTimeOffsetTemplatesResponse} */
  DescribeSnapshotByTimeOffsetTemplates(data: V20180717.DescribeSnapshotByTimeOffsetTemplatesRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.DescribeSnapshotByTimeOffsetTemplatesResponse>;
  /** 查询当前存储情况 {@link V20180717.DescribeStorageDataRequest} {@link V20180717.DescribeStorageDataResponse} */
  DescribeStorageData(data: V20180717.DescribeStorageDataRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.DescribeStorageDataResponse>;
  /** 查询存储空间数据详情 {@link V20180717.DescribeStorageDetailsRequest} {@link V20180717.DescribeStorageDetailsResponse} */
  DescribeStorageDetails(data: V20180717.DescribeStorageDetailsRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.DescribeStorageDetailsResponse>;
  /** 查询存储地域列表 {@link V20180717.DescribeStorageRegionsRequest} {@link V20180717.DescribeStorageRegionsResponse} */
  DescribeStorageRegions(data: V20180717.DescribeStorageRegionsRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.DescribeStorageRegionsResponse>;
  /** 查询应用列表 {@link V20180717.DescribeSubAppIdsRequest} {@link V20180717.DescribeSubAppIdsResponse} */
  DescribeSubAppIds(data: V20180717.DescribeSubAppIdsRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.DescribeSubAppIdsResponse>;
  /** 获取播放器配置列表 {@link V20180717.DescribeSuperPlayerConfigsRequest} {@link V20180717.DescribeSuperPlayerConfigsResponse} */
  DescribeSuperPlayerConfigs(data: V20180717.DescribeSuperPlayerConfigsRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.DescribeSuperPlayerConfigsResponse>;
  /** 查询任务详情 {@link V20180717.DescribeTaskDetailRequest} {@link V20180717.DescribeTaskDetailResponse} */
  DescribeTaskDetail(data: V20180717.DescribeTaskDetailRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.DescribeTaskDetailResponse>;
  /** 获取任务列表 {@link V20180717.DescribeTasksRequest} {@link V20180717.DescribeTasksResponse} */
  DescribeTasks(data: V20180717.DescribeTasksRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.DescribeTasksResponse>;
  /** 获取转码模板列表 {@link V20180717.DescribeTranscodeTemplatesRequest} {@link V20180717.DescribeTranscodeTemplatesResponse} */
  DescribeTranscodeTemplates(data: V20180717.DescribeTranscodeTemplatesRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.DescribeTranscodeTemplatesResponse>;
  /** 查询点播域名列表 {@link V20180717.DescribeVodDomainsRequest} {@link V20180717.DescribeVodDomainsResponse} */
  DescribeVodDomains(data: V20180717.DescribeVodDomainsRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.DescribeVodDomainsResponse>;
  /** 获取水印模板列表 {@link V20180717.DescribeWatermarkTemplatesRequest} {@link V20180717.DescribeWatermarkTemplatesResponse} */
  DescribeWatermarkTemplates(data: V20180717.DescribeWatermarkTemplatesRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.DescribeWatermarkTemplatesResponse>;
  /** 获取关键词样本列表 {@link V20180717.DescribeWordSamplesRequest} {@link V20180717.DescribeWordSamplesResponse} */
  DescribeWordSamples(data: V20180717.DescribeWordSamplesRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.DescribeWordSamplesResponse>;
  /** 编辑视频 {@link V20180717.EditMediaRequest} {@link V20180717.EditMediaResponse} */
  EditMedia(data: V20180717.EditMediaRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.EditMediaResponse>;
  /** 使用模板发起音画质重生 {@link V20180717.EnhanceMediaByTemplateRequest} {@link V20180717.EnhanceMediaByTemplateResponse} */
  EnhanceMediaByTemplate(data: V20180717.EnhanceMediaByTemplateRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.EnhanceMediaByTemplateResponse>;
  /** 音画质重生 {@link V20180717.EnhanceMediaQualityRequest} {@link V20180717.EnhanceMediaQualityResponse} */
  EnhanceMediaQuality(data: V20180717.EnhanceMediaQualityRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.EnhanceMediaQualityResponse>;
  /** 执行定制 API {@link V20180717.ExecuteFunctionRequest} {@link V20180717.ExecuteFunctionResponse} */
  ExecuteFunction(data: V20180717.ExecuteFunctionRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.ExecuteFunctionResponse>;
  /** 提取版权水印 {@link V20180717.ExtractCopyRightWatermarkRequest} {@link V20180717.ExtractCopyRightWatermarkResponse} */
  ExtractCopyRightWatermark(data: V20180717.ExtractCopyRightWatermarkRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.ExtractCopyRightWatermarkResponse>;
  /** 提取溯源水印 {@link V20180717.ExtractTraceWatermarkRequest} {@link V20180717.ExtractTraceWatermarkResponse} */
  ExtractTraceWatermark(data: V20180717.ExtractTraceWatermarkRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.ExtractTraceWatermarkResponse>;
  /** 快速媒体编辑 {@link V20180717.FastEditMediaRequest} {@link V20180717.FastEditMediaResponse} */
  FastEditMedia(data: V20180717.FastEditMediaRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.FastEditMediaResponse>;
  /** 禁播媒体 {@link V20180717.ForbidMediaDistributionRequest} {@link V20180717.ForbidMediaDistributionResponse} */
  ForbidMediaDistribution(data: V20180717.ForbidMediaDistributionRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.ForbidMediaDistributionResponse>;
  /** 操作轮播当前播放列表 {@link V20180717.HandleCurrentPlaylistRequest} {@link V20180717.HandleCurrentPlaylistResponse} */
  HandleCurrentPlaylist(data: V20180717.HandleCurrentPlaylistRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.HandleCurrentPlaylistResponse>;
  /** 音画质检测 {@link V20180717.InspectMediaQualityRequest} {@link V20180717.InspectMediaQualityResponse} */
  InspectMediaQuality(data: V20180717.InspectMediaQualityRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.InspectMediaQualityResponse>;
  /** 直播即时剪辑 {@link V20180717.LiveRealTimeClipRequest} {@link V20180717.LiveRealTimeClipResponse} */
  LiveRealTimeClip(data: V20180717.LiveRealTimeClipRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.LiveRealTimeClipResponse>;
  /** 任务管理 {@link V20180717.ManageTaskRequest} {@link V20180717.ManageTaskResponse} */
  ManageTask(data: V20180717.ManageTaskRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.ManageTaskResponse>;
  /** 修改音视频内容分析模板 {@link V20180717.ModifyAIAnalysisTemplateRequest} {@link V20180717.ModifyAIAnalysisTemplateResponse} */
  ModifyAIAnalysisTemplate(data: V20180717.ModifyAIAnalysisTemplateRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.ModifyAIAnalysisTemplateResponse>;
  /** 修改音视频内容识别模板 {@link V20180717.ModifyAIRecognitionTemplateRequest} {@link V20180717.ModifyAIRecognitionTemplateResponse} */
  ModifyAIRecognitionTemplate(data: V20180717.ModifyAIRecognitionTemplateRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.ModifyAIRecognitionTemplateResponse>;
  /** 修改转自适应码流模板 {@link V20180717.ModifyAdaptiveDynamicStreamingTemplateRequest} {@link V20180717.ModifyAdaptiveDynamicStreamingTemplateResponse} */
  ModifyAdaptiveDynamicStreamingTemplate(data: V20180717.ModifyAdaptiveDynamicStreamingTemplateRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.ModifyAdaptiveDynamicStreamingTemplateResponse>;
  /** 修改转动图模板 {@link V20180717.ModifyAnimatedGraphicsTemplateRequest} {@link V20180717.ModifyAnimatedGraphicsTemplateResponse} */
  ModifyAnimatedGraphicsTemplate(data: V20180717.ModifyAnimatedGraphicsTemplateRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.ModifyAnimatedGraphicsTemplateResponse>;
  /** 修改分类 {@link V20180717.ModifyClassRequest} {@link V20180717.ModifyClassResponse} */
  ModifyClass(data: V20180717.ModifyClassRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.ModifyClassResponse>;
  /** 修改音视频内容审核模板 {@link V20180717.ModifyContentReviewTemplateRequest} {@link V20180717.ModifyContentReviewTemplateResponse} */
  ModifyContentReviewTemplate(data: V20180717.ModifyContentReviewTemplateRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.ModifyContentReviewTemplateResponse>;
  /** 修改默认分发配置 {@link V20180717.ModifyDefaultDistributionConfigRequest} {@link V20180717.ModifyDefaultDistributionConfigResponse} */
  ModifyDefaultDistributionConfig(data: V20180717.ModifyDefaultDistributionConfigRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.ModifyDefaultDistributionConfigResponse>;
  /** 设置默认的存储地域 {@link V20180717.ModifyDefaultStorageRegionRequest} {@link V20180717.ModifyDefaultStorageRegionResponse} */
  ModifyDefaultStorageRegion(data: V20180717.ModifyDefaultStorageRegionRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.ModifyDefaultStorageRegionResponse>;
  /** 修改音画质重生模板 {@link V20180717.ModifyEnhanceMediaTemplateRequest} {@link V20180717.ModifyEnhanceMediaTemplateResponse} */
  ModifyEnhanceMediaTemplate(data: V20180717.ModifyEnhanceMediaTemplateRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.ModifyEnhanceMediaTemplateResponse>;
  /** 修改事件通知配置 {@link V20180717.ModifyEventConfigRequest} {@link V20180717.ModifyEventConfigResponse} */
  ModifyEventConfig(data: V20180717.ModifyEventConfigRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.ModifyEventConfigResponse>;
  /** 修改片头片尾模板 {@link V20180717.ModifyHeadTailTemplateRequest} {@link V20180717.ModifyHeadTailTemplateResponse} */
  ModifyHeadTailTemplate(data: V20180717.ModifyHeadTailTemplateRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.ModifyHeadTailTemplateResponse>;
  /** 修改雪碧图模板 {@link V20180717.ModifyImageSpriteTemplateRequest} {@link V20180717.ModifyImageSpriteTemplateResponse} */
  ModifyImageSpriteTemplate(data: V20180717.ModifyImageSpriteTemplateRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.ModifyImageSpriteTemplateResponse>;
  /** 修改即时转码模板 {@link V20180717.ModifyJustInTimeTranscodeTemplateRequest} {@link V20180717.ModifyJustInTimeTranscodeTemplateResponse} */
  ModifyJustInTimeTranscodeTemplate(data: V20180717.ModifyJustInTimeTranscodeTemplateRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.ModifyJustInTimeTranscodeTemplateResponse>;
  /** 修改媒体文件属性 {@link V20180717.ModifyMediaInfoRequest} {@link V20180717.ModifyMediaInfoResponse} */
  ModifyMediaInfo(data: V20180717.ModifyMediaInfoRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.ModifyMediaInfoResponse>;
  /** 修改媒体文件存储类型 {@link V20180717.ModifyMediaStorageClassRequest} {@link V20180717.ModifyMediaStorageClassResponse} */
  ModifyMediaStorageClass(data: V20180717.ModifyMediaStorageClassRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.ModifyMediaStorageClassResponse>;
  /** 修改素材样本 {@link V20180717.ModifyPersonSampleRequest} {@link V20180717.ModifyPersonSampleResponse} */
  ModifyPersonSample(data: V20180717.ModifyPersonSampleRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.ModifyPersonSampleResponse>;
  /** 修改音画质检测模板 {@link V20180717.ModifyQualityInspectTemplateRequest} {@link V20180717.ModifyQualityInspectTemplateResponse} */
  ModifyQualityInspectTemplate(data: V20180717.ModifyQualityInspectTemplateRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.ModifyQualityInspectTemplateResponse>;
  /** 修改视频重生模板 {@link V20180717.ModifyRebuildMediaTemplateRequest} {@link V20180717.ModifyRebuildMediaTemplateResponse} */
  ModifyRebuildMediaTemplate(data: V20180717.ModifyRebuildMediaTemplateRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.ModifyRebuildMediaTemplateResponse>;
  /** 修改审核模板 {@link V20180717.ModifyReviewTemplateRequest} {@link V20180717.ModifyReviewTemplateResponse} */
  ModifyReviewTemplate(data: V20180717.ModifyReviewTemplateRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.ModifyReviewTemplateResponse>;
  /** 修改轮播播单 {@link V20180717.ModifyRoundPlayRequest} {@link V20180717.ModifyRoundPlayResponse} */
  ModifyRoundPlay(data: V20180717.ModifyRoundPlayRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.ModifyRoundPlayResponse>;
  /** 修改采样截图模板 {@link V20180717.ModifySampleSnapshotTemplateRequest} {@link V20180717.ModifySampleSnapshotTemplateResponse} */
  ModifySampleSnapshotTemplate(data: V20180717.ModifySampleSnapshotTemplateRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.ModifySampleSnapshotTemplateResponse>;
  /** 修改指定时间点截图模板 {@link V20180717.ModifySnapshotByTimeOffsetTemplateRequest} {@link V20180717.ModifySnapshotByTimeOffsetTemplateResponse} */
  ModifySnapshotByTimeOffsetTemplate(data: V20180717.ModifySnapshotByTimeOffsetTemplateRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.ModifySnapshotByTimeOffsetTemplateResponse>;
  /** 修改应用信息 {@link V20180717.ModifySubAppIdInfoRequest} {@link V20180717.ModifySubAppIdInfoResponse} */
  ModifySubAppIdInfo(data: V20180717.ModifySubAppIdInfoRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.ModifySubAppIdInfoResponse>;
  /** 修改应用状态 {@link V20180717.ModifySubAppIdStatusRequest} {@link V20180717.ModifySubAppIdStatusResponse} */
  ModifySubAppIdStatus(data: V20180717.ModifySubAppIdStatusRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.ModifySubAppIdStatusResponse>;
  /** 修改播放器配置 {@link V20180717.ModifySuperPlayerConfigRequest} {@link V20180717.ModifySuperPlayerConfigResponse} */
  ModifySuperPlayerConfig(data: V20180717.ModifySuperPlayerConfigRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.ModifySuperPlayerConfigResponse>;
  /** 修改转码模板 {@link V20180717.ModifyTranscodeTemplateRequest} {@link V20180717.ModifyTranscodeTemplateResponse} */
  ModifyTranscodeTemplate(data: V20180717.ModifyTranscodeTemplateRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.ModifyTranscodeTemplateResponse>;
  /** 开启或者关闭点播域名加速地域 {@link V20180717.ModifyVodDomainAccelerateConfigRequest} {@link V20180717.ModifyVodDomainAccelerateConfigResponse} */
  ModifyVodDomainAccelerateConfig(data: V20180717.ModifyVodDomainAccelerateConfigRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.ModifyVodDomainAccelerateConfigResponse>;
  /** 修改域名配置 {@link V20180717.ModifyVodDomainConfigRequest} {@link V20180717.ModifyVodDomainConfigResponse} */
  ModifyVodDomainConfig(data: V20180717.ModifyVodDomainConfigRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.ModifyVodDomainConfigResponse>;
  /** 修改水印模板 {@link V20180717.ModifyWatermarkTemplateRequest} {@link V20180717.ModifyWatermarkTemplateResponse} */
  ModifyWatermarkTemplate(data: V20180717.ModifyWatermarkTemplateRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.ModifyWatermarkTemplateResponse>;
  /** 修改关键词样本 {@link V20180717.ModifyWordSampleRequest} {@link V20180717.ModifyWordSampleResponse} */
  ModifyWordSample(data: V20180717.ModifyWordSampleRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.ModifyWordSampleResponse>;
  /** 解析视频索引文件 {@link V20180717.ParseStreamingManifestRequest} {@link V20180717.ParseStreamingManifestResponse} */
  ParseStreamingManifest(data: V20180717.ParseStreamingManifestRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.ParseStreamingManifestResponse>;
  /** 图片处理 {@link V20180717.ProcessImageRequest} {@link V20180717.ProcessImageResponse} */
  ProcessImage(data: V20180717.ProcessImageRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.ProcessImageResponse>;
  /** 媒体处理 {@link V20180717.ProcessMediaRequest} {@link V20180717.ProcessMediaResponse} */
  ProcessMedia(data: V20180717.ProcessMediaRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.ProcessMediaResponse>;
  /** 使用 MPS 进行视频处理 {@link V20180717.ProcessMediaByMPSRequest} {@link V20180717.ProcessMediaByMPSResponse} */
  ProcessMediaByMPS(data: V20180717.ProcessMediaByMPSRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.ProcessMediaByMPSResponse>;
  /** 使用任务流模板进行视频处理 {@link V20180717.ProcessMediaByProcedureRequest} {@link V20180717.ProcessMediaByProcedureResponse} */
  ProcessMediaByProcedure(data: V20180717.ProcessMediaByProcedureRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.ProcessMediaByProcedureResponse>;
  /** 对指定 URL 的视频发起视频处理 {@link V20180717.ProcessMediaByUrlRequest} {@link V20180717.ProcessMediaByUrlResponse} */
  ProcessMediaByUrl(data: V20180717.ProcessMediaByUrlRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.ProcessMediaByUrlResponse>;
  /** 拉取事件通知 {@link V20180717.PullEventsRequest} {@link V20180717.PullEventsResponse} */
  PullEvents(data: V20180717.PullEventsRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.PullEventsResponse>;
  /** 拉取上传 {@link V20180717.PullUploadRequest} {@link V20180717.PullUploadResponse} */
  PullUpload(data: V20180717.PullUploadRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.PullUploadResponse>;
  /** 预热URL {@link V20180717.PushUrlCacheRequest} {@link V20180717.PushUrlCacheResponse} */
  PushUrlCache(data: V20180717.PushUrlCacheRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.PushUrlCacheResponse>;
  /** 发起音画质重生 {@link V20180717.RebuildMediaRequest} {@link V20180717.RebuildMediaResponse} */
  RebuildMedia(data: V20180717.RebuildMediaRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.RebuildMediaResponse>;
  /** 使用模板发起视频重生 {@link V20180717.RebuildMediaByTemplateRequest} {@link V20180717.RebuildMediaByTemplateResponse} */
  RebuildMediaByTemplate(data: V20180717.RebuildMediaByTemplateRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.RebuildMediaByTemplateResponse>;
  /** 刷新URL {@link V20180717.RefreshUrlCacheRequest} {@link V20180717.RefreshUrlCacheResponse} */
  RefreshUrlCache(data: V20180717.RefreshUrlCacheRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.RefreshUrlCacheResponse>;
  /** 智能去除水印 {@link V20180717.RemoveWatermarkRequest} {@link V20180717.RemoveWatermarkResponse} */
  RemoveWatermark(data: V20180717.RemoveWatermarkRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.RemoveWatermarkResponse>;
  /** 重设任务流模板 {@link V20180717.ResetProcedureTemplateRequest} {@link V20180717.ResetProcedureTemplateResponse} */
  ResetProcedureTemplate(data: V20180717.ResetProcedureTemplateRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.ResetProcedureTemplateResponse>;
  /** 解冻媒体文件 {@link V20180717.RestoreMediaRequest} {@link V20180717.RestoreMediaResponse} */
  RestoreMedia(data: V20180717.RestoreMediaRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.RestoreMediaResponse>;
  /** 音视频审核 {@link V20180717.ReviewAudioVideoRequest} {@link V20180717.ReviewAudioVideoResponse} */
  ReviewAudioVideo(data: V20180717.ReviewAudioVideoRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.ReviewAudioVideoResponse>;
  /** 图片审核 {@link V20180717.ReviewImageRequest} {@link V20180717.ReviewImageResponse} */
  ReviewImage(data: V20180717.ReviewImageRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.ReviewImageResponse>;
  /** 搜索媒体信息 {@link V20180717.SearchMediaRequest} {@link V20180717.SearchMediaResponse} */
  SearchMedia(data: V20180717.SearchMediaRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.SearchMediaResponse>;
  /** 设置日志投递目标 {@link V20180717.SetCLSPushTargetRequest} {@link V20180717.SetCLSPushTargetResponse} */
  SetCLSPushTarget(data: V20180717.SetCLSPushTargetRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.SetCLSPushTargetResponse>;
  /** 设置 DRM 密钥提供商信息 {@link V20180717.SetDrmKeyProviderInfoRequest} {@link V20180717.SetDrmKeyProviderInfoResponse} */
  SetDrmKeyProviderInfo(data: V20180717.SetDrmKeyProviderInfoRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.SetDrmKeyProviderInfoResponse>;
  /** 设置点播域名 HTTPS 证书 {@link V20180717.SetVodDomainCertificateRequest} {@link V20180717.SetVodDomainCertificateResponse} */
  SetVodDomainCertificate(data: V20180717.SetVodDomainCertificateRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.SetVodDomainCertificateResponse>;
  /** 简单 HLS 剪辑 {@link V20180717.SimpleHlsClipRequest} {@link V20180717.SimpleHlsClipResponse} */
  SimpleHlsClip(data: V20180717.SimpleHlsClipRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.SimpleHlsClipResponse>;
  /** 视频拆条 {@link V20180717.SplitMediaRequest} {@link V20180717.SplitMediaResponse} */
  SplitMedia(data: V20180717.SplitMediaRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.SplitMediaResponse>;
  /** 验证域名解析 {@link V20180717.VerifyDomainRecordRequest} {@link V20180717.VerifyDomainRecordResponse} */
  VerifyDomainRecord(data: V20180717.VerifyDomainRecordRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.VerifyDomainRecordResponse>;
  /** 微信小程序视频发布 {@link V20180717.WeChatMiniProgramPublishRequest} {@link V20180717.WeChatMiniProgramPublishResponse} */
  WeChatMiniProgramPublish(data: V20180717.WeChatMiniProgramPublishRequest, config: AxiosRequestConfig & V20180717.VersionHeader): AxiosPromise<V20180717.WeChatMiniProgramPublishResponse>;
}

export declare type Versions = ["2024-07-18", "2018-07-17"];

export default Vod;
