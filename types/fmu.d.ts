/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 人脸框信息 */
declare interface FaceRect {
  /** 人脸框左上角横坐标。 */
  X: number;
  /** 人脸框左上角纵坐标。 */
  Y: number;
  /** 人脸框宽度。 */
  Width: number;
  /** 人脸框高度。 */
  Height: number;
}

/** 唇色信息 */
declare interface LipColorInfo {
  /** 使用RGBA模型试唇色。 */
  RGBA?: RGBAInfo;
  /** 使用已注册的 LUT 文件试唇色。 ModelId 和 RGBA 两个参数只需提供一个，若都提供只使用 ModelId。 */
  ModelId?: string;
  /** 人脸框位置。若不输入则选择 Image 或 Url 中面积最大的人脸。 您可以通过 [人脸检测与分析](https://cloud.tencent.com/document/api/867/32800) 接口获取人脸框位置信息。 */
  FaceRect?: FaceRect;
  /** 涂妆浓淡[0,100]。建议取值50。本参数仅控制ModelId对应的涂妆浓淡。 */
  ModelAlpha?: number;
}

/** LUT素材信息 */
declare interface ModelInfo {
  /** 唇色素材ID */
  ModelId?: string;
  /** 唇色素材 url 。 LUT 文件 url 5分钟有效。 */
  LUTFileUrl?: string;
  /** 文件描述信息。 */
  Description?: string;
}

/** RGBA通道信息 */
declare interface RGBAInfo {
  /** R通道数值。[0,255]。 */
  R: number;
  /** G通道数值。[0,255]。 */
  G: number;
  /** B通道数值。[0,255]。 */
  B: number;
  /** A通道数值。[0,100]。建议取值50。 */
  A: number;
}

declare interface BeautifyPicRequest {
  /** 图片 base64 数据，base64 编码后大小不可超过5M，单边分辨率不超过4000。支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。暂不支持带有alpha透明通道的图片。 */
  Image?: string;
  /** 图片的 Url 。对应图片 base64 编码后大小不可超过5M。，单边分辨率不超过4000。Url、Image必须提供一个，如果都提供，只使用 Url。 图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。 非腾讯云存储的Url速度和稳定性可能受一定影响。 支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。暂不支持带有alpha透明通道的图片。 */
  Url?: string;
  /** 美白程度，取值范围[0,100]。0不美白，100代表最高程度。默认值30。 */
  Whitening?: number;
  /** 磨皮程度，取值范围[0,100]。0不磨皮，100代表最高程度。默认值10。 */
  Smoothing?: number;
  /** 瘦脸程度，取值范围[0,100]。0不瘦脸，100代表最高程度。默认值70。 */
  FaceLifting?: number;
  /** 大眼程度，取值范围[0,100]。0不大眼，100代表最高程度。默认值70。 */
  EyeEnlarging?: number;
  /** 返回图像方式（base64 或 url ) ，二选一。url有效期为1天。 */
  RspImgType?: string;
}

declare interface BeautifyPicResponse {
  /** RspImgType 为 base64 时，返回处理后的图片 base64 数据。默认返回base64 */
  ResultImage?: string | null;
  /** RspImgType 为 url 时，返回处理后的图片 url 数据。 */
  ResultUrl?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateModelRequest {
  /** 图片base64数据，用于试唇色，要求必须是LUT 格式的cube文件转换成512*512的PNG图片。查看 [LUT文件的使用说明](https://cloud.tencent.com/document/product/1172/41701)。了解 [cube文件转png图片小工具](http://yyb.gtimg.com/aiplat/static/qcloud-cube-to-png.html)。 */
  LUTFile: string;
  /** 文件描述信息，可用于备注。 */
  Description?: string;
}

declare interface CreateModelResponse {
  /** 唇色素材ID。 */
  ModelId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteModelRequest {
  /** 素材ID。 */
  ModelId: string;
}

declare interface DeleteModelResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetModelListRequest {
  /** 起始序号，默认值为0。 */
  Offset?: number;
  /** 返回数量，默认值为10，最大值为100。 */
  Limit?: number;
}

declare interface GetModelListResponse {
  /** 唇色素材总数量。 */
  ModelIdNum?: number;
  /** 素材数据 */
  ModelInfos?: ModelInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StyleImageProRequest {
  /** 滤镜类型，取值如下： 1.白茶1；2 白皙；3.初夏；4.东京；5.告白；6.暖阳；7.蔷薇；8.清澄；9.清透；10.甜薄荷；11.默认；12.心动；13.哑灰；14.樱桃布丁；15.自然；16.清逸1；17.黑白；18.水果；19.爱情；20.冬日；21.相片；22.夏日；23.香氛；24.魅惑；25.悸动；26.沙滩；27.街拍；28.甜美；29.初吻；30.午后；31.活力；32.朦胧；33.悦动；34.时尚；35.气泡；36.柠檬；37.棉花糖；38.小溪；39.丽人；40.咖啡；41.嫩芽；42.热情；43.渐暖；44.早餐；45.白茶2；46.白嫩；47.圣代；48.森林；49.冲浪；50.奶咖；51.清澈；52.微风；53.日落；54.水光；55.日系；56.星光；57.阳光；58.落叶；59.生机；60.甜心；61.清逸2；62.春意；63.罗马；64.青涩；65.清风；66.暖心；67.海水；68.神秘；69.旧调1；70.旧调2；71.雪顶；72.日光；73.浮云；74.流彩；75.胶片；76.回味；77.奶酪；78.蝴蝶。 */
  FilterType: number;
  /** 图片 base64 数据，base64 编码后大小不可超过5M。 支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。暂不支持带有alpha透明通道的图片。 */
  Image?: string;
  /** 图片的 Url ，对应图片 base64 编码后大小不可超过5M。 图片的 Url、Image必须提供一个，如果都提供，只使用 Url。 图片存储于腾讯云的 Url 可保障更高下载速度和稳定性，建议图片存储于腾讯云。 非腾讯云存储的Url速度和稳定性可能受一定影响。 支持PNG、JPG、JPEG、BMP 等图片格式，不支持 GIF 图片。暂不支持带有alpha透明通道的图片。 */
  Url?: string;
  /** 滤镜效果，取值[0,100]，0表示无效果，100表示满滤镜效果。默认值为80。 */
  FilterDegree?: number;
  /** 返回图像方式（base64 或 url ) ，二选一。url有效期为1天。默认为base64。 */
  RspImgType?: string;
}

declare interface StyleImageProResponse {
  /** RspImgType 为 base64 时，返回处理后的图片 base64 数据。默认返回base64 */
  ResultImage?: string | null;
  /** RspImgType 为 url 时，返回处理后的图片 url 数据。 */
  ResultUrl?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StyleImageRequest {
  /** 滤镜类型，取值如下： 1.白茶；2 白皙；3.初夏；4.东京；5.告白；6.暖阳；7.蔷薇；8.清澄；9.清透；10.甜薄荷；11.默认；12.心动；13.哑灰；14.樱桃布丁；15.自然；16.清逸；17.黑白；18.水果；19.爱情；20.冬日；21.相片；22.夏日；23.香氛；24.魅惑；25.悸动；26.沙滩；27.街拍；28.甜美；29.初吻；30.午后。 */
  FilterType: number;
  /** 图片 base64 数据，base64 编码后大小不可超过5M。 支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。暂不支持带有alpha透明通道的图片。 */
  Image?: string;
  /** 图片的 Url ，对应图片 base64 编码后大小不可超过5M。 图片的 Url、Image必须提供一个，如果都提供，只使用 Url。 图片存储于腾讯云的 Url 可保障更高下载速度和稳定性，建议图片存储于腾讯云。 非腾讯云存储的Url速度和稳定性可能受一定影响。 支持PNG、JPG、JPEG、BMP 等图片格式，不支持 GIF 图片。暂不支持带有alpha透明通道的图片。 */
  Url?: string;
  /** 滤镜效果，取值[0,100]，0表示无效果，100表示满滤镜效果。默认值为80。 */
  FilterDegree?: number;
  /** 返回图像方式（base64 或 url ) ，二选一。url有效期为1天。默认值为base64。 */
  RspImgType?: string;
}

declare interface StyleImageResponse {
  /** RspImgType 为 base64 时，返回处理后的图片 base64 数据。默认返回base64 */
  ResultImage?: string | null;
  /** RspImgType 为 url 时，返回处理后的图片 url 数据。 */
  ResultUrl?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface TryLipstickPicRequest {
  /** 唇色信息。 您可以输入最多3个 LipColorInfo 来实现给一张图中的最多3张人脸试唇色。 */
  LipColorInfos: LipColorInfo[];
  /** 图片 base64 数据，base64 编码后大小不可超过6M。 支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。暂不支持带有alpha透明通道的图片。 */
  Image?: string;
  /** 图片的 Url ，对应图片 base64 编码后大小不可超过6M。 图片的 Url、Image必须提供一个，如果都提供，只使用 Url。 图片存储于腾讯云的 Url 可保障更高下载速度和稳定性，建议图片存储于腾讯云。 非腾讯云存储的Url速度和稳定性可能受一定影响。 支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。暂不支持带有alpha透明通道的图片。 */
  Url?: string;
  /** 返回图像方式（base64 或 url ) ，二选一。url有效期为1天。 */
  RspImgType?: string;
}

declare interface TryLipstickPicResponse {
  /** RspImgType 为 base64 时，返回处理后的图片 base64 数据。默认返回base64 */
  ResultImage?: string;
  /** RspImgType 为 url 时，返回处理后的图片 url 数据。 */
  ResultUrl?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Fmu 人脸试妆} */
declare interface Fmu {
  (): Versions;
  /** 人脸美颜 {@link BeautifyPicRequest} {@link BeautifyPicResponse} */
  BeautifyPic(data?: BeautifyPicRequest, config?: AxiosRequestConfig): AxiosPromise<BeautifyPicResponse>;
  /** 上传唇色素材 {@link CreateModelRequest} {@link CreateModelResponse} */
  CreateModel(data: CreateModelRequest, config?: AxiosRequestConfig): AxiosPromise<CreateModelResponse>;
  /** 删除唇色素材 {@link DeleteModelRequest} {@link DeleteModelResponse} */
  DeleteModel(data: DeleteModelRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteModelResponse>;
  /** 查询唇色素材 {@link GetModelListRequest} {@link GetModelListResponse} */
  GetModelList(data?: GetModelListRequest, config?: AxiosRequestConfig): AxiosPromise<GetModelListResponse>;
  /** 图片滤镜 {@link StyleImageRequest} {@link StyleImageResponse} */
  StyleImage(data: StyleImageRequest, config?: AxiosRequestConfig): AxiosPromise<StyleImageResponse>;
  /** 图片滤镜（高级版） {@link StyleImageProRequest} {@link StyleImageProResponse} */
  StyleImagePro(data: StyleImageProRequest, config?: AxiosRequestConfig): AxiosPromise<StyleImageProResponse>;
  /** 试唇色 {@link TryLipstickPicRequest} {@link TryLipstickPicResponse} */
  TryLipstickPic(data: TryLipstickPicRequest, config?: AxiosRequestConfig): AxiosPromise<TryLipstickPicResponse>;
}

export declare type Versions = ["2019-12-13"];

export default Fmu;
