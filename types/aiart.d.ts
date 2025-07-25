/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 融合信息 */
declare interface FaceInfo {
  /** 用户图 URL 列表 */
  ImageUrls?: string[];
  /** 模版图人脸坐标。 */
  TemplateFaceRect?: Rect;
}

/** 训练图像质量过滤开关配置。支持开启或关闭对训练图像分辨率下限、脸部区域大小、脸部遮挡、脸部角度的过滤，默认开启以上过滤。如果训练图像内包含多人脸或无人脸、和 Base 人像不为同一人也将被过滤，不可关闭该过滤条件。建议：关闭以上过滤可能导致写真生成效果受损，建议使用单人、正脸、脸部清晰、无遮挡、无夸张表情、脸部区域占比较大的图像进行训练。 */
declare interface Filter {
  /** 过滤不满足分辨率下限的训练图像，默认开启过滤开启后将过滤横边<512或竖边<720的图片，横、竖边上限均为2000，不支持调整1：开启过滤0：关闭过滤 */
  Resolution?: number;
  /** 过滤脸部区域过小的训练图像，默认开启过滤1：开启过滤0：关闭过滤 */
  Size?: number;
  /** 过滤脸部存在明显遮挡、偏转角度过大等质量较差的训练图像，默认开启过滤1：开启过滤0：关闭过滤 */
  Occlusion?: number;
}

/** 图片 */
declare interface Image {
  /** 图片Base64 */
  Base64?: string;
  /** 图片Url */
  Url?: string;
}

/** logo参数 */
declare interface LogoParam {
  /** 水印 Url */
  LogoUrl?: string | null;
  /** 水印 Base64，Url 和 Base64 二选一传入，如果都提供以 Url 为准 */
  LogoImage?: string | null;
  /** 水印图片位于生成结果图中的坐标，将按照坐标对标识图片进行位置和大小的拉伸匹配 */
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

/** 人脸框坐标 */
declare interface Rect {
  /** 人脸框左上角横坐标。 */
  X?: number;
  /** 人脸框左上角纵坐标。 */
  Y?: number;
  /** 人脸框宽度。 */
  Width?: number;
  /** 人脸框高度。 */
  Height?: number;
}

/** 返回结果配置 */
declare interface ResultConfig {
  /** 生成图分辨率图像风格化（图生图）支持生成以下分辨率的图片：origin（与输入图分辨率一致，长边最高为2000，超出将做等比例缩小）、768:768（1:1）、768:1024（3:4）、1024:768（4:3），不传默认使用origin，如果指定生成的长宽比与输入图长宽比差异过大可能导致图片内容被裁剪。 */
  Resolution?: string | null;
}

declare interface ChangeClothesRequest {
  /** 模特图片 Url。图片限制：单边分辨率小于3000，且大于512，转成 Base64 字符串后小于 8MB。输入要求：1、建议上传正面模特图片，至少完整露出应穿着输入指定服装的身体部位（全身、上半身或下半身），无大角度身体偏转或异常姿势。2、建议上传3:4比例的图片，生成效果更佳。3、建议模特图片中的原始服装和更换后的服装类别一致，或原始服装在身体上的覆盖范围小于等于更换后的服装（例如需要给模特换上短裤，则原始模特图片中也建议穿短裤，不建议穿长裤），否则会影响人像生成效果。 */
  ModelUrl: string;
  /** 服装图片 Url。图片限制：单边分辨率小于3000，大于512，转成 Base64 字符串后小于 8MB。输入要求：建议上传服装完整的正面平铺图片，仅包含1个服装主体，服装类型支持上衣、下装、连衣裙，三选一。算法将根据输入的图片，结合服装图片给模特换装。 */
  ClothesUrl: string;
  /** 服装类型，需要和服装图片保持一致。取值：Upper-body：上衣Lower-body：下装Dress：连衣裙 */
  ClothesType: string;
  /** 为生成结果图添加标识的开关，默认为1。1：添加标识。0：不添加标识。其他数值：默认按1处理。建议您使用显著标识来提示结果图使用了 AI 绘画技术，是 AI 生成的图片。 */
  LogoAdd?: number;
  /** 标识内容设置。默认在生成结果图右下角添加“图片由 AI 生成”字样，您可根据自身需要替换为其他的标识图片。 */
  LogoParam?: LogoParam;
  /** 返回图像方式（base64 或 url) ，二选一，默认为 base64。url 有效期为1小时。生成图分辨率较大时建议选择 url，使用 base64 可能因图片过大导致返回失败。 */
  RspImgType?: string;
}

declare interface ChangeClothesResponse {
  /** 根据入参 RspImgType 填入不同，返回不同的内容。如果传入 base64 则返回生成图 Base64 编码。如果传入 url 则返回的生成图 URL , 有效期1小时，请及时保存。 */
  ResultImage?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GenerateAvatarRequest {
  /** 图像类型，默认为人像。human：人像头像，仅支持人像图片输入，建议避免上传无人、多人、人像过小的图片。pet：萌宠贴纸，仅支持动物图片输入，建议避免上传无动物、多动物、动物过小的图片。 */
  Type?: string;
  /** 头像风格，仅在人像模式下生效。若使用人像模式，请在 [百变头像风格列表](https://cloud.tencent.com/document/product/1668/107741) 中选择期望的风格，传入风格编号，不传默认使用 flower 风格。若使用萌宠贴纸模式，无需选择风格，该参数不生效。 */
  Style?: string;
  /** 输入图 Base64 数据。Base64 和 Url 必须提供一个，如果都提供以 Url 为准。图片限制：单边分辨率小于5000，转成 Base64 字符串后小于 6MB，格式支持 jpg、jpeg、png、bmp、tiff、webp。 */
  InputImage?: string;
  /** 输入图 Url。Base64 和 Url 必须提供一个，如果都提供以 Url 为准。图片限制：单边分辨率小于5000，转成 Base64 字符串后小于 6MB，格式支持 jpg、jpeg、png、bmp、tiff、webp。 */
  InputUrl?: string;
  /** 输入人像图的质量检测开关，默认开启，仅在人像模式下生效。1：开启0：关闭建议开启检测，可提升生成效果，关闭检测可能因输入图像质量较差导致生成效果受损。开启后，将增强对输入图像的质量要求，如果输入图像单边分辨率<500、图像中人脸占比较小、存在多人、没有检测到人脸、人脸不完整、人脸遮挡等，将被拦截。关闭后，将降低对输入图像的质量要求，如果图像中没有检测到人脸或人脸占比过小等，将被拦截。 */
  Filter?: number;
  /** 为生成结果图添加标识的开关，默认为1。1：添加标识。0：不添加标识。其他数值：默认按1处理。建议您使用显著标识来提示结果图是 AI 生成的图片。 */
  LogoAdd?: number;
  /** 标识内容设置。默认在生成结果图右下角添加“图片由 AI 生成”字样，您可根据自身需要替换为其他的标识图片。 */
  LogoParam?: LogoParam;
  /** 返回图像方式（base64 或 url) ，二选一，默认为 base64。url 有效期为1小时。 */
  RspImgType?: string;
}

declare interface GenerateAvatarResponse {
  /** 根据入参 RspImgType 填入不同，返回不同的内容。如果传入 base64 则返回生成图 Base64 编码。如果传入 url 则返回的生成图 URL , 有效期1小时，请及时保存。 */
  ResultImage?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ImageInpaintingRemovalRequest {
  /** 输入图 Base64 数据。Base64 和 Url 必须提供一个，如果都提供以 Url 为准。图片限制：单边分辨率小于5000，转成 Base64 字符串后小于 6MB，格式支持 jpg、jpeg、png、bmp、tiff、webp。 */
  InputImage?: string;
  /** 输入图 Url。Base64 和 Url 必须提供一个，如果都提供以 Url 为准。图片限制：单边分辨率小于5000，转成 Base64 字符串后小于 6MB，格式支持 jpg、jpeg、png、bmp、tiff、webp。 */
  InputUrl?: string;
  /** 消除区域 Mask 图 Base64 数据。Mask 为单通道灰度图，待消除部分呈白色区域，原图保持部分呈黑色区域。Mask 的 Base64 和 Url 必须提供一个，如果都提供以 Url 为准。图片限制：Mask 分辨率需要和输入原图保持一致，转成 Base64 字符串后小于 6MB。 */
  Mask?: string;
  /** 消除区域 Mask 图 Url。Mask 为单通道灰度图，待消除部分呈白色区域，原图保持部分呈黑色区域。Mask 的 Base64 和 Url 必须提供一个，如果都提供以 Url 为准。图片限制：Mask 分辨率需要和输入原图保持一致，转成 Base64 字符串后小于 6MB。 */
  MaskUrl?: string;
  /** 返回图像方式（base64 或 url) ，二选一，默认为 base64。url 有效期为1小时。 */
  RspImgType?: string;
  /** 为生成结果图添加标识的开关，默认为1。1：添加标识。0：不添加标识。其他数值：默认按1处理。建议您使用显著标识来提示结果图使用了 AI 绘画技术，是 AI 生成的图片。 */
  LogoAdd?: number;
  /** 标识内容设置。默认在生成结果图右下角添加“图片由 AI 生成”字样，您可根据自身需要替换为其他的标识图片。 */
  LogoParam?: LogoParam;
}

declare interface ImageInpaintingRemovalResponse {
  /** 根据入参 RspImgType 填入不同，返回不同的内容。 如果传入 base64 则返回生成图 Base64 编码。 如果传入 url 则返回的生成图 URL , 有效期1小时，请及时保存。 */
  ResultImage?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ImageOutpaintingRequest {
  /** 扩展后的比例（宽:高），需要不等于原图比例。支持：1:1、4:3、3:4、16:9、9:16 */
  Ratio: string;
  /** 输入图 Base64 数据。Base64 和 Url 必须提供一个，如果都提供以 Url 为准。图片限制：单边分辨率小于5000，转成 Base64 字符串后小于 6MB，格式支持 jpg、jpeg、png、bmp、tiff、webp。 */
  InputImage?: string;
  /** 输入图 Url。Base64 和 Url 必须提供一个，如果都提供以 Url 为准。图片限制：单边分辨率小于5000，转成 Base64 字符串后小于 6MB，格式支持 jpg、jpeg、png、bmp、tiff、webp。 */
  InputUrl?: string;
  /** 返回图像方式（base64 或 url) ，二选一，默认为 base64。url 有效期为1小时。 */
  RspImgType?: string;
  /** 为生成结果图添加标识的开关，默认为1。1：添加标识。0：不添加标识。其他数值：默认按1处理。建议您使用显著标识来提示结果图使用了 AI 绘画技术，是 AI 生成的图片。 */
  LogoAdd?: number;
  /** 标识内容设置。默认在生成结果图右下角添加“图片由 AI 生成”字样，您可根据自身需要替换为其他的标识图片。 */
  LogoParam?: LogoParam;
}

declare interface ImageOutpaintingResponse {
  /** 根据入参 RspImgType 填入不同，返回不同的内容。如果传入 base64 则返回生成图 Base64 编码。如果传入 url 则返回的生成图 URL , 有效期1小时，请及时保存。 */
  ResultImage?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ImageToImageRequest {
  /** 输入图 Base64 数据。算法将根据输入的图片，结合文本描述智能生成与之相关的图像。Base64 和 Url 必须提供一个，如果都提供以 Url 为准。图片限制：单边分辨率小于5000且大于50，转成 Base64 字符串后小于 8MB，格式支持 jpg、jpeg、png、bmp、tiff、webp。 */
  InputImage?: string;
  /** 输入图 Url。算法将根据输入的图片，结合文本描述智能生成与之相关的图像。Base64 和 Url 必须提供一个，如果都提供以 Url 为准。图片限制：单边分辨率小于5000且大于50，转成 Base64 字符串后小于 8MB，格式支持 jpg、jpeg、png、bmp、tiff、webp。 */
  InputUrl?: string;
  /** 文本描述。用于在输入图的基础上引导生成图效果，增加生成结果中出现描述内容的可能。推荐使用中文。最多支持256个 utf-8 字符。 */
  Prompt?: string;
  /** 反向文本描述。用于一定程度上从反面引导模型生成的走向，减少生成结果中出现描述内容的可能，但不能完全杜绝。推荐使用中文。最多可传256个 utf-8 字符。 */
  NegativePrompt?: string;
  /** 绘画风格。请在 [图像风格化风格列表](https://cloud.tencent.com/document/product/1668/86250) 中选择期望的风格，传入风格编号。推荐使用且只使用一种风格。不传默认使用201（日系动漫风格）。 */
  Styles?: string[];
  /** 生成图结果的配置，包括输出图片分辨率和尺寸等。支持生成以下分辨率的图片：origin（与输入图分辨率一致，长边最高为2000，超出将做等比例缩小）、768:768（1:1）、768:1024（3:4）、1024:768（4:3）。不传默认使用origin。 */
  ResultConfig?: ResultConfig;
  /** 为生成结果图添加标识的开关，默认为1。1：添加标识。0：不添加标识。其他数值：默认按1处理。建议您使用显著标识来提示结果图使用了 AI 绘画技术，是 AI 生成的图片。 */
  LogoAdd?: number;
  /** 标识内容设置。默认在生成结果图右下角添加“图片由 AI 生成”字样，您可根据自身需要替换为其他的标识图片。 */
  LogoParam?: LogoParam;
  /** 生成自由度。Strength 值越小，生成图和原图越接近，取值范围(0, 1]，不传使用模型内置的默认值。推荐的取值范围为0.6 - 0.8。 */
  Strength?: number;
  /** 返回图像方式（base64 或 url) ，二选一，默认为 base64。url 有效期为1小时。 */
  RspImgType?: string;
  /** 画质增强开关，默认关闭。1：开启0：关闭开启后将增强图像的画质清晰度，生成耗时有所增加。 */
  EnhanceImage?: number;
  /** 细节优化的面部数量上限，支持0 ~ 6，默认为0。若上传大于0的值，将以此为上限对每张图片中面积占比较小的面部进行细节修复，生成耗时根据实际优化的面部个数有所增加。 */
  RestoreFace?: number;
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

declare interface QueryGlamPicJobRequest {
  /** 任务ID。 */
  JobId: string;
}

declare interface QueryGlamPicJobResponse {
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryMemeJobRequest {
  /** 查询表情动图生成任务 ID。 */
  JobId: string;
}

declare interface QueryMemeJobResponse {
  /** 当前任务状态码：1：等待中、2：运行中、4：处理失败、5：处理完成。 */
  JobStatusCode?: string;
  /** 当前任务状态：排队中、处理中、处理失败或者处理完成。 */
  JobStatusMsg?: string;
  /** 任务处理失败错误码。 */
  JobErrorCode?: string;
  /** 任务处理失败错误信息。 */
  JobErrorMsg?: string;
  /** 生成图 URL，有效期1小时，请及时保存。 */
  ResultImage?: string;
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

declare interface RefineImageRequest {
  /** 输入图 Url。Base64 和 Url 必须提供一个，如果都提供以 Url 为准。图片限制：转成 Base64 字符串后小于 6MB，格式支持 jpg、jpeg、png、bmp、tiff、webp。 */
  InputUrl?: string;
  /** 输入图 Base64 数据。Base64 和 Url 必须提供一个，如果都提供以 Url 为准。图片限制：转成 Base64 字符串后小于 6MB，格式支持 jpg、jpeg、png、bmp、tiff、webp。 */
  InputImage?: string;
  /** 返回图像方式（base64 或 url) ，二选一，默认为 base64。url 有效期为1小时。 示例值：url */
  RspImgType?: string;
}

declare interface RefineImageResponse {
  /** 根据入参 RspImgType 填入不同，返回不同的内容。如果传入 base64 则返回生成图 Base64 编码。如果传入 url 则返回的生成图 URL , 有效期1小时，请及时保存。 */
  ResultImage?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ReplaceBackgroundRequest {
  /** 商品原图 Url。图片限制：单边分辨率小于4000，长宽比在2:5 ~ 5:2之间，转成 Base64 字符串后小于 6MB，格式支持 jpg、jpeg、png、bmp、tiff、webp。 */
  ProductUrl: string;
  /** 对新背景的文本描述。最多支持256个 utf-8 字符，支持中、英文。如果 Prompt = "BackgroundTemplate" 代表启用背景模板，需要在参数 BackgroundTemplate 中指定一个背景名称。 */
  Prompt: string;
  /** 反向提示词。最多支持256个 utf-8 字符，支持中、英文。 */
  NegativePrompt?: string;
  /** 商品图中的商品主体名称。最多支持50个 utf-8 字符，支持中、英文。建议说明商品主体，否则影响生成效果。 */
  Product?: string;
  /** 背景模板。仅当 Prompt = "BackgroundTemplate" 时生效，可支持的模板详见 [商品背景模板列表](https://cloud.tencent.com/document/product/1668/115391) ，请传入字段“背景名称”中的值。 */
  BackgroundTemplate?: string;
  /** 商品 Mask 图 Url，要求背景透明，保留商品主体。如果不传，将自动使用内置的商品分割算法得到 Mask。支持自定义上传 Mask，如果该参数不为空，则以实际上传的数据为准。图片限制：Mask 图必须和商品原图分辨率一致，转成 Base64 字符串后小于 6MB，格式仅支持 png。 */
  MaskUrl?: string;
  /** 替换背景后生成的商品图分辨率。支持生成单边分辨率大于500且小于4000、长宽比在2:5 ~ 5:2之间的图片，不传默认生成1280:1280。建议图片比例为1:1、9:16、16:9，生成效果更佳，使用其他比例的生成效果可能不如建议比例。 */
  Resolution?: string;
  /** 为生成结果图添加标识的开关，默认为1。1：添加标识。0：不添加标识。其他数值：默认按1处理。建议您使用显著标识来提示结果图是 AI 生成的图片。 */
  LogoAdd?: number;
  /** 标识内容设置。默认在生成结果图右下角添加“图片由 AI 生成”字样，您可根据自身需要替换为其他的标识图片。 */
  LogoParam?: LogoParam;
  /** 返回图像方式（base64 或 url) ，二选一，默认为 base64。url 有效期为1小时。生成图分辨率较大时建议选择 url，使用 base64 可能因图片过大导致返回失败。 */
  RspImgType?: string;
}

declare interface ReplaceBackgroundResponse {
  /** 根据入参 RspImgType 填入不同，返回不同的内容。如果传入 base64 则返回生成图 Base64 编码。如果传入 url 则返回的生成图 URL , 有效期1小时，请及时保存。 */
  ResultImage?: string;
  /** 如果 MaskUrl 未传，则返回使用内置商品分割算法得到的 Mask 结果。 */
  MaskImage?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SketchToImageRequest {
  /** 用于线稿生图的文本描述。最多支持200个 utf-8 字符。建议格式：线稿中的主体对象+画面场景+配色/材质/元素/风格等 */
  Prompt: string;
  /** 线稿图 Base64 数据。Base64 和 Url 必须提供一个，如果都提供以Url 为准。图片限制：黑白线稿图片，单边分辨率小于5000且大于128（分辨率过小会导致效果受损），转成 Base64 字符串后小于 6MB，格式支持 jpg、jpeg、png、bmp、tiff、webp。 */
  InputImage?: string;
  /** 线稿图 Url。Base64 和 Url 必须提供一个，如果都提供以Url 为准。图片限制：黑白线稿图片，单边分辨率小于5000且大于128（分辨率过小会导致效果受损），转成 Base64 字符串后小于 6MB，格式支持 jpg、jpeg、png、bmp、tiff、webp。 */
  InputUrl?: string;
  /** 为生成结果图添加标识的开关，默认为1。1：添加标识。0：不添加标识。其他数值：默认按1处理。建议您使用显著标识来提示结果图使用了 AI 绘画技术，是 AI 生成的图片。 */
  LogoAdd?: number;
  /** 标识内容设置。默认在生成结果图右下角添加“图片由 AI 生成”字样，您可根据自身需要替换为其他的标识图片。 */
  LogoParam?: LogoParam;
  /** 返回图像方式（base64 或 url) ，二选一，默认为 base64。url 有效期为1小时。生成图分辨率较大时建议选择 url，使用 base64 可能因图片过大导致返回失败。 */
  RspImgType?: string;
}

declare interface SketchToImageResponse {
  /** 根据入参 RspImgType 填入不同，返回不同的内容。如果传入 base64 则返回生成图 Base64 编码。如果传入 url 则返回的生成图 URL , 有效期1小时，请及时保存。 */
  ResultImage?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SubmitDrawPortraitJobRequest {
  /** 写真模型 ID。 */
  ModelId: string;
  /** 写真风格模板。请在[ AI 写真风格列表](https://cloud.tencent.com/document/product/1668/105740) 中选择期望的风格，传入风格编号。 */
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

declare interface SubmitGlamPicJobRequest {
  /** 美照模板图 URL。图片限制：模板图中最多出现5张人脸，单边分辨率大于300，转成 Base64 字符串后小于 10MB，格式支持 jpg、jpeg、png、bmp、tiff、webp。 */
  TemplateUrl: string;
  /** 用户图 URL 列表，以及模板图中需要替换成用户的人脸框信息。一张美照中可包含1 ~ 5个用户形象。每个用户需上传1 ~ 6张照片，仅支持单人照。模板图中的人脸数量需要大于等于用户个数。如果不传每个用户在模板图中的人脸框位置，默认按照模板图人脸框从大到小的顺序进行替换。如需自定义顺序，需要依次上传每个用户在模板图中的人脸框位置。图片限制：每张图片转成 Base64 字符串后小于 10MB，格式支持 jpg、jpeg、png、bmp、tiff、webp。建议使用单人、正脸、脸部区域占比较大、脸部清晰无遮挡、无大角度偏转、无夸张表情的用户图。 */
  FaceInfos?: FaceInfo[];
  /** 美照生成数量。支持1 ~ 4张，默认生成4张。 */
  Num?: number;
  /** 美照生成风格。仅对单人美照生效，单人可支持选择不同风格。需按照美照生成数量，在数组中逐一填入每张美照的风格名称。如果不传，默认取不重复的随机风格顺序。多人美照只支持 balanced 一种风格，该参数不生效。可选风格：real：面部相似度更高。balanced：平衡面部真实感和美观度。textured：脸部皮肤更具真实感。beautiful：脸部美观度更高。 */
  Style?: string[];
  /** 相似度系数，越高越像用户图。取值范围[0, 1]，默认为0.6。 */
  Similarity?: number;
  /** 超分选项，默认不做超分，可选开启。x2：2倍超分x4：4倍超分 */
  Clarity?: string;
  /** 为生成结果图添加标识的开关，默认为1。1：添加标识。0：不添加标识。其他数值：默认按1处理。建议您使用显著标识来提示结果图是 AI 生成的图片。 */
  LogoAdd?: number;
  /** 标识内容设置。默认在生成结果图右下角添加“图片由 AI 生成”字样，您可根据自身需要替换为其他的标识图片。 */
  LogoParam?: LogoParam;
}

declare interface SubmitGlamPicJobResponse {
  /** 任务ID。 */
  JobId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SubmitMemeJobRequest {
  /** 表情模板。请在 [表情动图模板列表](https://cloud.tencent.com/document/product/1668/115327) 中选择期望的模板，传入 Pose 名称。 */
  Pose: string;
  /** 人像参考图 Base64 数据。Base64 和 Url 必须提供一个，如果都提供以 Url 为准。图片限制：单边分辨率小于5000，转成 Base64 字符串后小于 6MB，格式支持 jpg、jpeg、png、bmp、tiff、webp。 */
  InputImage?: string;
  /** 人像参考图 Url。Base64 和 Url 必须提供一个，如果都提供以 Url 为准。图片限制：单边分辨率小于5000，转成 Base64 字符串后小于 6MB，格式支持 jpg、jpeg、png、bmp、tiff、webp。 */
  InputUrl?: string;
  /** 生成分辨率。真人类型支持256、512，默认为256，卡通类型仅支持512。 */
  Resolution?: number;
  /** 自定义文案。仅对真人类型的 Pose 生效，将在生成的表情动图中显示指定的文字。如果传入的字符串长度大于10，只截取前10个显示。如果不传，默认使用自带的文案。如果 text = "" 空字符串，代表不在表情动图中添加文案。 */
  Text?: string;
  /** 头发遮罩开关。true：裁剪过长的头发。false：不裁剪过长的头发。仅对卡通类型的 Pose 生效，默认为 false。 */
  Haircut?: boolean;
  /** 为生成结果图添加标识的开关，默认为1。1：添加标识。0：不添加标识。其他数值：默认按1处理。建议您使用显著标识来提示结果图是 AI 生成的图片。 */
  LogoAdd?: number;
  /** 标识内容设置。默认在生成结果图右下角添加“图片由 AI 生成”字样，您可根据自身需要替换为其他的标识图片。 */
  LogoParam?: LogoParam;
}

declare interface SubmitMemeJobResponse {
  /** 任务id */
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
  /** 文生图模型，默认使用engine1。取值：engine1engine2 */
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

declare interface TextToImageLiteRequest {
  /** 文本描述。将根据输入的文本智能生成与之相关的图像。不能为空，推荐使用中文。最多可传1024个 utf-8 字符。 */
  Prompt: string;
  /** 反向提示词。 减少生成结果中出现描述内容。推荐使用中文。最多可传1024个 utf-8 字符。 */
  NegativePrompt?: string;
  /** 生成图分辨率，默认1024:1024。支持的图像宽高比例: 1:1，3:4，4:3，9:16，16:9。支持的长边分辨率: 160，200，225，258，512，520，608，768，1024，1080，1280，1600，1620，1920，2048，2400，2560，2592，3440，3840，4096。 */
  Resolution?: string;
  /** 随机种子，默认随机。0：随机种子生成。不传：随机种子生成。正数：固定种子生成。 */
  Seed?: number;
  /** 为生成结果图添加标识的开关，默认为1。1：添加标识。0：不添加标识。其他数值：默认按1处理。建议您使用显著标识来提示结果图使用了 AI 绘画技术，是 AI 生成的图片。 */
  LogoAdd?: number;
  /** 标识内容设置。默认在生成结果图右下角添加“图片由 AI 生成”字样，您可根据自身需要替换为其他的标识图片。 */
  LogoParam?: LogoParam;
  /** 返回图像方式（base64 或 url），二选一，默认为 base64。url 有效期为1小时。 */
  RspImgType?: string;
}

declare interface TextToImageLiteResponse {
  /** 根据入参 RspImgType 填入不同，返回不同的内容。如果传入 base64 则返回生成图 Base64 编码。如果传入 url 则返回的生成图 URL , 有效期1小时，请及时保存。 */
  ResultImage?: string;
  /** Seed */
  Seed?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface TextToImageRapidRequest {
  /** 文本描述。算法将根据输入的文本智能生成与之相关的图像。建议详细描述画面主体、细节、场景等，文本描述越丰富，生成效果越精美。不能为空，推荐使用中文。最多可传256个 utf-8 字符。 */
  Prompt: string;
  /** 生成图分辨率，默认1024:1024。支持的图像宽高比例: 1:1，3:4，4:3，9:16，16:9。支持的长边分辨率: 160，200，225，258，512，520，608，768，1024，1080，1280，1600，1620，1920，2048，2400，2560，2592，3440，3840，4096。 */
  Resolution?: string;
  /** 随机种子，默认随机。0：随机种子生成。不传：随机种子生成。正数：固定种子生成。 */
  Seed?: number;
  /** 参考图。- Base64 和 Url 必须提供一个，如果都提供以 Url 为准。- 当传入Image参数时，Style和Resolution参数不生效，输出图分辨率将保持Image传入图分辨率。- 图片限制：单边分辨率大于128且小于2048；图片小于6M；格式支持 jpg、jpeg、png、bmp、tiff、webp。 */
  Image?: Image;
  /** 生成的图片风格，参考值：1：宫崎骏风格；2：新海诚风格；3：去旅行风格；4：水彩风格；5：像素风格；6：童话世界风格；7：奇趣卡通风格；8：赛博朋克风格；9：极简风格；10：复古风格；11：暗黑系风格；12：波普风风格；13：糖果色风格；14：胶片电影风格；15：素描风格；16：水墨画风格；17：油画风格；18：粉笔风格；19：粘土风格；20：毛毡风格；21：刺绣风格；22：彩铅风格；23：莫奈风格；24：毕加索风格；25：穆夏风格；26：古风二次元风格；27：都市二次元风格；28：悬疑风格；29：校园风格；30：都市异能风格。 */
  Style?: string;
  /** 为生成结果图添加标识的开关，默认为1。1：添加标识。0：不添加标识。其他数值：默认按1处理。建议您使用显著标识来提示结果图使用了 AI 绘画技术，是 AI 生成的图片。 */
  LogoAdd?: number;
  /** 标识内容设置。默认在生成结果图右下角添加“图片由 AI 生成”字样，您可根据自身需要替换为其他的标识图片。 */
  LogoParam?: LogoParam;
  /** 返回图像方式（base64 或 url) ，二选一，默认为 base64。url 有效期为1小时。 */
  RspImgType?: string;
}

declare interface TextToImageRapidResponse {
  /** 根据入参 RspImgType 填入不同，返回不同的内容。如果传入 base64 则返回生成图 Base64 编码。如果传入 url 则返回的生成图 URL , 有效期1小时，请及时保存。 */
  ResultImage?: string;
  /** Seed */
  Seed?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UploadTrainPortraitImagesRequest {
  /** 写真模型 ID。由英文大小写字母、数字及下划线组成。用于唯一标识一个写真模型，一个写真模型只能用于一个人物的写真图片生成。 */
  ModelId: string;
  /** 写真模型训练用的基础图像 URL，用于固定写真模型可生成的人物。图片数量：1张。图片内容：单人，脸部清晰。图片限制：单边分辨率小于2000，转成 Base64 字符串后小于 5MB。 */
  BaseUrl?: string;
  /** 写真模型训练用的图像 URL 列表，仅常规训练模式需要上传。图片数量：19 - 24 张。图片内容：单人，脸部清晰，和基础图像中的人物为同一人。图片限制：单边分辨率小于2000，转成 Base64 字符串后小于 5MB。 */
  Urls?: string[];
  /** 训练图像质量过滤开关配置。支持开启或关闭对训练图像分辨率下限、脸部区域大小、脸部遮挡的过滤，默认开启以上过滤。如果训练图像内包含多人脸或无人脸、和 Base 人像不为同一人也将被过滤，不可关闭该过滤条件。建议：关闭以上过滤可能导致写真生成效果受损，建议使用单人、正脸、脸部区域占比较大、脸部清晰无遮挡、无大角度偏转、无夸张表情的图像进行训练。 */
  Filter?: Filter;
  /** 训练模式。默认使用常规训练模式。如果使用快速训练模式和免训练模式，只需要在 BaseUrl 中传入1张图片，Urls.N 中无需传入图片。0：常规训练模式，上传多张图片用于模型训练，完成训练后可生成写真图片。1：快速训练模式，仅需上传1张图片用于模型训练，训练速度更快，完成训练后可生成写真图片。2：免训练模式，仅需上传1张图片，跳过模型训练环节，直接生成写真图片。 */
  TrainMode?: number;
}

declare interface UploadTrainPortraitImagesResponse {
  /** 用于提示对应上传的Urls训练图片是否符合要求，如果未通过需要重新上传。如果基础图像不符合要求会直接通过ErrorCode提示。如果您选择了快速模式，该参数返回为空数组。 */
  ResultDetails?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Aiart 腾讯混元生图} */
declare interface Aiart {
  (): Versions;
  /** 模特换装 {@link ChangeClothesRequest} {@link ChangeClothesResponse} */
  ChangeClothes(data: ChangeClothesRequest, config?: AxiosRequestConfig): AxiosPromise<ChangeClothesResponse>;
  /** 百变头像 {@link GenerateAvatarRequest} {@link GenerateAvatarResponse} */
  GenerateAvatar(data?: GenerateAvatarRequest, config?: AxiosRequestConfig): AxiosPromise<GenerateAvatarResponse>;
  /** 局部消除 {@link ImageInpaintingRemovalRequest} {@link ImageInpaintingRemovalResponse} */
  ImageInpaintingRemoval(data?: ImageInpaintingRemovalRequest, config?: AxiosRequestConfig): AxiosPromise<ImageInpaintingRemovalResponse>;
  /** 扩图 {@link ImageOutpaintingRequest} {@link ImageOutpaintingResponse} */
  ImageOutpainting(data: ImageOutpaintingRequest, config?: AxiosRequestConfig): AxiosPromise<ImageOutpaintingResponse>;
  /** 图像风格化（图生图） {@link ImageToImageRequest} {@link ImageToImageResponse} */
  ImageToImage(data?: ImageToImageRequest, config?: AxiosRequestConfig): AxiosPromise<ImageToImageResponse>;
  /** 查询生成写真图片任务 {@link QueryDrawPortraitJobRequest} {@link QueryDrawPortraitJobResponse} */
  QueryDrawPortraitJob(data: QueryDrawPortraitJobRequest, config?: AxiosRequestConfig): AxiosPromise<QueryDrawPortraitJobResponse>;
  /** 查询美照生成任务 {@link QueryGlamPicJobRequest} {@link QueryGlamPicJobResponse} */
  QueryGlamPicJob(data: QueryGlamPicJobRequest, config?: AxiosRequestConfig): AxiosPromise<QueryGlamPicJobResponse>;
  /** 查询表情动图生成任务 {@link QueryMemeJobRequest} {@link QueryMemeJobResponse} */
  QueryMemeJob(data: QueryMemeJobRequest, config?: AxiosRequestConfig): AxiosPromise<QueryMemeJobResponse>;
  /** 查询文生图（高级版）任务（即将下线） {@link QueryTextToImageProJobRequest} {@link QueryTextToImageProJobResponse} */
  QueryTextToImageProJob(data: QueryTextToImageProJobRequest, config?: AxiosRequestConfig): AxiosPromise<QueryTextToImageProJobResponse>;
  /** 查询训练写真模型任务 {@link QueryTrainPortraitModelJobRequest} {@link QueryTrainPortraitModelJobResponse} */
  QueryTrainPortraitModelJob(data: QueryTrainPortraitModelJobRequest, config?: AxiosRequestConfig): AxiosPromise<QueryTrainPortraitModelJobResponse>;
  /** 图片变清晰 {@link RefineImageRequest} {@link RefineImageResponse} */
  RefineImage(data?: RefineImageRequest, config?: AxiosRequestConfig): AxiosPromise<RefineImageResponse>;
  /** 商品背景生成 {@link ReplaceBackgroundRequest} {@link ReplaceBackgroundResponse} */
  ReplaceBackground(data: ReplaceBackgroundRequest, config?: AxiosRequestConfig): AxiosPromise<ReplaceBackgroundResponse>;
  /** 线稿生图 {@link SketchToImageRequest} {@link SketchToImageResponse} */
  SketchToImage(data: SketchToImageRequest, config?: AxiosRequestConfig): AxiosPromise<SketchToImageResponse>;
  /** 提交生成写真图片任务 {@link SubmitDrawPortraitJobRequest} {@link SubmitDrawPortraitJobResponse} */
  SubmitDrawPortraitJob(data: SubmitDrawPortraitJobRequest, config?: AxiosRequestConfig): AxiosPromise<SubmitDrawPortraitJobResponse>;
  /** 提交美照生成任务 {@link SubmitGlamPicJobRequest} {@link SubmitGlamPicJobResponse} */
  SubmitGlamPicJob(data: SubmitGlamPicJobRequest, config?: AxiosRequestConfig): AxiosPromise<SubmitGlamPicJobResponse>;
  /** 提交表情动图生成任务 {@link SubmitMemeJobRequest} {@link SubmitMemeJobResponse} */
  SubmitMemeJob(data: SubmitMemeJobRequest, config?: AxiosRequestConfig): AxiosPromise<SubmitMemeJobResponse>;
  /** 提交文生图（高级版）任务（即将下线） {@link SubmitTextToImageProJobRequest} {@link SubmitTextToImageProJobResponse} */
  SubmitTextToImageProJob(data: SubmitTextToImageProJobRequest, config?: AxiosRequestConfig): AxiosPromise<SubmitTextToImageProJobResponse>;
  /** 提交训练写真模型任务 {@link SubmitTrainPortraitModelJobRequest} {@link SubmitTrainPortraitModelJobResponse} */
  SubmitTrainPortraitModelJob(data: SubmitTrainPortraitModelJobRequest, config?: AxiosRequestConfig): AxiosPromise<SubmitTrainPortraitModelJobResponse>;
  /** 混元生图（极速版） {@link TextToImageLiteRequest} {@link TextToImageLiteResponse} */
  TextToImageLite(data: TextToImageLiteRequest, config?: AxiosRequestConfig): AxiosPromise<TextToImageLiteResponse>;
  /** 混元生图（2.0） {@link TextToImageRapidRequest} {@link TextToImageRapidResponse} */
  TextToImageRapid(data: TextToImageRapidRequest, config?: AxiosRequestConfig): AxiosPromise<TextToImageRapidResponse>;
  /** 上传写真训练图片 {@link UploadTrainPortraitImagesRequest} {@link UploadTrainPortraitImagesResponse} */
  UploadTrainPortraitImages(data: UploadTrainPortraitImagesRequest, config?: AxiosRequestConfig): AxiosPromise<UploadTrainPortraitImagesResponse>;
}

export declare type Versions = ["2022-12-29"];

export default Aiart;
