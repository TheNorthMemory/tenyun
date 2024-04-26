/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 训练图像质量过滤开关配置。支持开启或关闭对训练图像分辨率下限、脸部区域大小、脸部遮挡、脸部角度的过滤，默认开启以上过滤。如果训练图像内包含多人脸或无人脸、和 Base 人像不为同一人也将被过滤，不可关闭该过滤条件。建议：关闭以上过滤可能导致写真生成效果受损，建议使用单人、正脸、脸部清晰、无遮挡、无夸张表情、脸部区域占比较大的图像进行训练。 */
declare interface Filter {
  /** 过滤不满足分辨率下限的训练图像，默认开启过滤开启后将过滤横边<512或竖边<720的图片，横、竖边上限均为2000，不支持调整1：开启过滤0：关闭过滤 */
  Resolution?: number;
  /** 过滤脸部区域过小的训练图像，默认开启过滤1：开启过滤0：关闭过滤 */
  Size?: number;
  /** 过滤脸部存在明显遮挡、偏转角度过大等质量较差的训练图像，默认开启过滤1：开启过滤0：关闭过滤 */
  Occlusion?: number;
}

/** logo参数 */
declare interface LogoParam {
  /** 水印url */
  LogoUrl?: string | null;
  /** 水印base64，url和base64二选一传入 */
  LogoImage?: string | null;
  /** 水印图片位于融合结果图中的坐标，将按照坐标对标识图片进行位置和大小的拉伸匹配 */
  LogoRect?: LogoRect | null;
}

/** 输入框 */
declare interface LogoRect {
  /** 左上角X坐标 */
  X?: number | null;
  /** 左上角Y坐标 */
  Y?: number | null;
  /** 方框宽度 */
  Width?: number | null;
  /** 方框高度 */
  Height?: number | null;
}

/** 返回结果配置 */
declare interface ResultConfig {
  /** 生成图分辨率智能文生图支持生成以下分辨率的图片：768:768（1:1）、768:1024（3:4）、1024:768（4:3）、1024:1024（1:1）、720:1280（9:16）、1280:720（16:9）、768:1280（3:5）、1280:768（5:3）、1080:1920（9:16）、1920:1080（16:9），不传默认使用768:768。智能图生图支持生成以下分辨率的图片：origin（与输入图分辨率一致，长边最高为2000，超出将做等比例缩小）、768:768（1:1）、768:1024（3:4）、1024:768（4:3），不传默认使用origin，如果指定生成的长宽比与输入图长宽比差异过大可能导致图片内容被裁剪。 */
  Resolution?: string;
}

declare interface ImageToImageRequest {
  /** 输入图 Base64 数据。算法将根据输入的图片，结合文本描述智能生成与之相关的图像。Base64 和 Url 必须提供一个，如果都提供以 Base64 为准。图片限制：单边分辨率小于5000，转成 Base64 字符串后小于 8MB。 */
  InputImage?: string;
  /** 输入图 Url。算法将根据输入的图片，结合文本描述智能生成与之相关的图像。Base64 和 Url 必须提供一个，如果都提供以 Base64 为准。图片限制：单边分辨率小于5000，转成 Base64 字符串后小于8MB。 */
  InputUrl?: string;
  /** 文本描述。用于在输入图的基础上引导生成图效果，增加生成结果中出现描述内容的可能。推荐使用中文。最多支持256个 utf-8 字符。 */
  Prompt?: string;
  /** 反向文本描述。用于一定程度上从反面引导模型生成的走向，减少生成结果中出现描述内容的可能，但不能完全杜绝。推荐使用中文。最多可传256个 utf-8 字符。 */
  NegativePrompt?: string;
  /** 绘画风格。请在 [智能图生图风格列表](https://cloud.tencent.com/document/product/1668/86250) 中选择期望的风格，传入风格编号。推荐使用且只使用一种风格。不传默认使用201（日系动漫风格）。 */
  Styles?: string[];
  /** 生成图结果的配置，包括输出图片分辨率和尺寸等。支持生成以下分辨率的图片：origin（与输入图分辨率一致，长边最高为2000，超出将做等比例缩小）、768:768（1:1）、768:1024（3:4）、1024:768（4:3）。不传默认使用origin。 */
  ResultConfig?: ResultConfig;
  /** 为生成结果图添加标识的开关，默认为1。1：添加标识。0：不添加标识。其他数值：默认按1处理。建议您使用显著标识来提示结果图使用了 AI 绘画技术，是 AI 生成的图片。 */
  LogoAdd?: number;
  /** 标识内容设置。默认在生成结果图右下角添加“图片由 AI 生成”字样，您可根据自身需要替换为其他的标识图片。 */
  LogoParam?: LogoParam;
  /** 生成自由度。Strength 值越小，生成图和原图越接近，取值范围0 - 1，不传使用模型内置的默认值。推荐的取值范围为0.6 - 0.8。 */
  Strength?: number;
  /** 返回图像方式（base64 或 url) ，二选一，默认为 base64。url 有效期为1小时。 */
  RspImgType?: string;
}

declare interface ImageToImageResponse {
  /** 根据入参 RspImgType 填入不同，返回不同的内容。如果传入 base64 则返回生成图 Base64 编码。如果传入 url 则返回的生成图 URL , 有效期1小时，请及时保存。 */
  ResultImage?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryDrawPortraitJobRequest {
  /** 查询生成写真图片任务 ID。 */
  JobId: string;
}

declare interface QueryDrawPortraitJobResponse {
  /** 任务状态码。INIT: 初始化、WAIT：等待中、RUN：运行中、FAIL：处理失败、DONE：处理完成。 */
  JobStatusCode?: string;
  /** 任务状态信息。 */
  JobStatusMsg?: string;
  /** 任务错误码。 */
  JobErrorCode?: string;
  /** 任务错误信息。 */
  JobErrorMsg?: string;
  /** 结果 URL 数组。URL 有效期1小时，请及时保存。 */
  ResultUrls?: string[];
  /** 结果描述数组。 */
  ResultDetails?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryTextToImageProJobRequest {
  /** 任务 ID。 */
  JobId: string;
}

declare interface QueryTextToImageProJobResponse {
  /** 当前任务状态码：1：等待中、2：运行中、4：处理失败、5：处理完成。 */
  JobStatusCode?: string;
  /** 当前任务状态：排队中、处理中、处理失败或者处理完成。 */
  JobStatusMsg?: string;
  /** 任务处理失败错误码。 */
  JobErrorCode?: string;
  /** 任务处理失败错误信息。 */
  JobErrorMsg?: string;
  /** 生成图 URL 列表，有效期1小时，请及时保存。 */
  ResultImage?: string[];
  /** 结果 detail 数组，Success 代表成功。 */
  ResultDetails?: string[];
  /** 对应 SubmitTextToImageProJob 接口中 Revise 参数。开启扩写时，返回扩写后的 prompt 文本。 如果关闭扩写，将直接返回原始输入的 prompt。 */
  RevisedPrompt?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryTrainPortraitModelJobRequest {
  /** 写真模型 ID。 */
  ModelId: string;
}

declare interface QueryTrainPortraitModelJobResponse {
  /** 任务状态码。INIT: 初始化、WAIT：等待中、RUN：运行中、FAIL：处理失败、DONE：处理完成。 */
  JobStatusCode?: string;
  /** 任务状态信息。 */
  JobStatusMsg?: string;
  /** 任务错误码。 */
  JobErrorCode?: string;
  /** 任务错误信息。 */
  JobErrorMsg?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SubmitDrawPortraitJobRequest {
  /** 写真模型 ID。 */
  ModelId: string;
  /** 写真风格模板，支持以下风格：zhengjian_female：证件照-长发（女）zhengjian_shouthair_female：证件照-短发（女）zhengjian_male：证件照（男）grey_suit_male：灰色西装（男）beige_suit_male：米色西装（男）white_sweater_male：白色毛衣（男）hanfu_female：汉服（女）hanfu2_female：汉服2（女）green_female：绿色毛衣（女）white_sweater_female：白色毛衣（女）sports_female：蓝色运动装（女）bow_female：蝴蝶结发饰（女）wreath_female：头戴花环（女）black_dress1_female：小黑裙1（女）black_dress2_female：小黑裙2（女）black_dress3_female：小黑裙3（女）wedding_female：婚纱裙（女）wedding2_female：婚纱裙2（女）forest_female：树林（女）flower_female：花丛（女）qipao_female：旗袍（女）feather_female：羽毛（女）lolita_female：洛丽塔（女）blue_shirt_female：蓝衬衣（女）green_shirt_female：绿衬衣（女）purple_shirt_female：紫衬衣（女）fire_female：火焰（女）christmas1_female: 圣诞1（女）christmas2_female: 圣诞2（女）christmas3_female: 圣诞3（适用女性）newyear1_female：新春1（女）newyear2_female：新春2（女）newyear3_female：新春3（女）newyear5_female：新春5（女）elderly_female：中老年（女）elderly_male：中老年（男）labour_female：田野劳作（女）simple：简洁风格（通用），一般用于写真模型的封面示意图，每个 ModelId 的生成结果固定，多次生成将返回相同图片 */
  StyleId: string;
  /** 本次生成的图片数量，取值范围[1,4] */
  ImageNum: number;
  /** 为生成结果图添加标识的开关，默认为1。 1：添加标识。 0：不添加标识。 其他数值：默认按1处理。 建议您使用显著标识来提示结果图是 AI 生成的图片。 */
  LogoAdd?: number;
  /** 标识内容设置。 默认在生成结果图右下角添加“图片由 AI 生成”字样，您可根据自身需要替换为其他的标识图片。 */
  LogoParam?: LogoParam;
  /** 清晰度，支持以下选项：sd：基础版，分辨率512:640hd：高清畅享版，分辨率1024:1280hdpro：高清优享版，分辨率1024:1280（推荐）uhd：超清版，分辨率2048:2560不填默认为sd。 */
  Definition?: string;
}

declare interface SubmitDrawPortraitJobResponse {
  /** 提交生成写真图片任务 ID。 */
  JobId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SubmitTextToImageProJobRequest {
  /** 文本描述。 算法将根据输入的文本智能生成与之相关的图像。 不能为空，推荐使用中文。最多可传100个 utf-8 字符。 */
  Prompt: string;
  /** 绘画风格。请在 [文生图（高级版）风格列表](https://cloud.tencent.com/document/product/1668/104567) 中选择期望的风格，传入风格编号。不传默认不指定风格。 */
  Style?: string;
  /** 生成图分辨率。支持生成以下分辨率的图片：768:768（1:1）、768:1024（3:4）、1024:768（4:3）、1024:1024（1:1）、720:1280（9:16）、1280:720（16:9）、768:1280（3:5）、1280:768（5:3），不传默认使用1024:1024。 */
  Resolution?: string;
  /** 为生成结果图添加显式水印标识的开关，默认为1。 1：添加。 0：不添加。 其他数值：默认按1处理。 建议您使用显著标识来提示结果图使用了 AI 绘画技术，是 AI 生成的图片。 */
  LogoAdd?: number;
  /** 文生图模型，默认使用engine1。engine1：文生图（高级版）-混元engine2：文生图（高级版） */
  Engine?: string;
  /** prompt 扩写开关。1为开启，0为关闭，不传默认开启。开启扩写后，将自动扩写原始输入的 prompt 并使用扩写后的 prompt 生成图片，返回生成图片结果时将一并返回扩写后的 prompt 文本。如果关闭扩写，将直接使用原始输入的 prompt 生成图片。建议开启，在多数场景下可提升生成图片效果、丰富生成图片细节。 */
  Revise?: number;
}

declare interface SubmitTextToImageProJobResponse {
  /** 任务 ID。 */
  JobId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SubmitTrainPortraitModelJobRequest {
  /** 在上传写真训练图片时指定的写真模型 ID。 每个 AI 写真模型自训练完成起1年内有效，有效期内可使用模型生成图片，期满后需要重新训练模型。 */
  ModelId: string;
}

declare interface SubmitTrainPortraitModelJobResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface TextToImageRequest {
  /** 文本描述。算法将根据输入的文本智能生成与之相关的图像。建议详细描述画面主体、细节、场景等，文本描述越丰富，生成效果越精美。不能为空，推荐使用中文。最多可传256个 utf-8 字符。 */
  Prompt: string;
  /** 反向文本描述。用于一定程度上从反面引导模型生成的走向，减少生成结果中出现描述内容的可能，但不能完全杜绝。推荐使用中文。最多可传256个 utf-8 字符。 */
  NegativePrompt?: string;
  /** 绘画风格。请在 [智能文生图风格列表](https://cloud.tencent.com/document/product/1668/86249) 中选择期望的风格，传入风格编号。推荐使用且只使用一种风格。不传默认使用201（日系动漫风格）。 */
  Styles?: string[];
  /** 生成图结果的配置，包括输出图片分辨率和尺寸等。支持生成以下分辨率的图片：768:768（1:1）、768:1024（3:4）、1024:768（4:3）、1024:1024（1:1）、720:1280（9:16）、1280:720（16:9）、768:1280（3:5）、1280:768（5:3）、1080:1920（9:16）、1920:1080（16:9），不传默认使用768:768。 */
  ResultConfig?: ResultConfig;
  /** 为生成结果图添加标识的开关，默认为1。1：添加标识。0：不添加标识。其他数值：默认按1处理。建议您使用显著标识来提示结果图使用了 AI 绘画技术，是 AI 生成的图片。 */
  LogoAdd?: number;
  /** 标识内容设置。默认在生成结果图右下角添加“图片由 AI 生成”字样，您可根据自身需要替换为其他的标识图片。 */
  LogoParam?: LogoParam;
  /** 返回图像方式（base64 或 url) ，二选一，默认为 base64。url 有效期为1小时。 */
  RspImgType?: string;
}

declare interface TextToImageResponse {
  /** 根据入参 RspImgType 填入不同，返回不同的内容。如果传入 base64 则返回生成图 Base64 编码。如果传入 url 则返回的生成图 URL , 有效期1小时，请及时保存。 */
  ResultImage?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UploadTrainPortraitImagesRequest {
  /** 写真模型 ID。由英文大小写字母、数字及下划线组成。用于唯一标识一个写真模型，一个写真模型只能用于一个人物的写真图片生成。 */
  ModelId: string;
  /** 写真模型训练用的基础图像 URL，用于固定写真模型可生成的人物。图片数量：1张。图片内容：单人，脸部清晰。图片限制：单边分辨率小于2000，转成 Base64 字符串后小于 5MB。 */
  BaseUrl?: string;
  /** 写真模型训练用的图像 URL 列表。图片数量：19 - 24 张。图片内容：单人，脸部清晰，和基础图像中的人物为同一人。图片限制：单边分辨率小于2000，转成 Base64 字符串后小于 5MB。 */
  Urls?: string[];
  /** 训练图像质量过滤开关配置。支持开启或关闭对训练图像分辨率下限、脸部区域大小、脸部遮挡的过滤，默认开启以上过滤。如果训练图像内包含多人脸或无人脸、和 Base 人像不为同一人也将被过滤，不可关闭该过滤条件。建议：关闭以上过滤可能导致写真生成效果受损，建议使用单人、正脸、脸部区域占比较大、脸部清晰无遮挡、无大角度偏转、无夸张表情的图像进行训练。 */
  Filter?: Filter;
  /** 是否开启快速训练模式。默认不开启。开启后只需要在 BaseUrl 中传入1张图片，Urls.N 中无需传入图片。 0：不开启 1：开启 */
  TrainMode?: number;
}

declare interface UploadTrainPortraitImagesResponse {
  /** 用于提示对应上传的Urls训练图片是否符合要求，如果未通过需要重新上传。如果基础图像不符合要求会直接通过ErrorCode提示。如果您选择了快速模式，该参数返回为空数组。 */
  ResultDetails?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Aiart 大模型图像创作引擎} */
declare interface Aiart {
  (): Versions;
  /** 智能图生图 {@link ImageToImageRequest} {@link ImageToImageResponse} */
  ImageToImage(data?: ImageToImageRequest, config?: AxiosRequestConfig): AxiosPromise<ImageToImageResponse>;
  /** 查询生成写真图片任务 {@link QueryDrawPortraitJobRequest} {@link QueryDrawPortraitJobResponse} */
  QueryDrawPortraitJob(data: QueryDrawPortraitJobRequest, config?: AxiosRequestConfig): AxiosPromise<QueryDrawPortraitJobResponse>;
  /** 查询文生图（高级版）任务 {@link QueryTextToImageProJobRequest} {@link QueryTextToImageProJobResponse} */
  QueryTextToImageProJob(data: QueryTextToImageProJobRequest, config?: AxiosRequestConfig): AxiosPromise<QueryTextToImageProJobResponse>;
  /** 查询训练写真模型任务 {@link QueryTrainPortraitModelJobRequest} {@link QueryTrainPortraitModelJobResponse} */
  QueryTrainPortraitModelJob(data: QueryTrainPortraitModelJobRequest, config?: AxiosRequestConfig): AxiosPromise<QueryTrainPortraitModelJobResponse>;
  /** 提交生成写真图片任务 {@link SubmitDrawPortraitJobRequest} {@link SubmitDrawPortraitJobResponse} */
  SubmitDrawPortraitJob(data: SubmitDrawPortraitJobRequest, config?: AxiosRequestConfig): AxiosPromise<SubmitDrawPortraitJobResponse>;
  /** 提交文生图（高级版）任务 {@link SubmitTextToImageProJobRequest} {@link SubmitTextToImageProJobResponse} */
  SubmitTextToImageProJob(data: SubmitTextToImageProJobRequest, config?: AxiosRequestConfig): AxiosPromise<SubmitTextToImageProJobResponse>;
  /** 提交训练写真模型任务 {@link SubmitTrainPortraitModelJobRequest} {@link SubmitTrainPortraitModelJobResponse} */
  SubmitTrainPortraitModelJob(data: SubmitTrainPortraitModelJobRequest, config?: AxiosRequestConfig): AxiosPromise<SubmitTrainPortraitModelJobResponse>;
  /** 智能文生图 {@link TextToImageRequest} {@link TextToImageResponse} */
  TextToImage(data: TextToImageRequest, config?: AxiosRequestConfig): AxiosPromise<TextToImageResponse>;
  /** 上传写真训练图片 {@link UploadTrainPortraitImagesRequest} {@link UploadTrainPortraitImagesResponse} */
  UploadTrainPortraitImages(data: UploadTrainPortraitImagesRequest, config?: AxiosRequestConfig): AxiosPromise<UploadTrainPortraitImagesResponse>;
}

export declare type Versions = ["2022-12-29"];

export default Aiart;
