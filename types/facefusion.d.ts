/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 人脸信息 */
declare interface FaceInfo {
  /** 人脸框的横坐标 */
  X?: number;
  /** 人脸框的纵坐标 */
  Y?: number;
  /** 人脸框的宽度 */
  Width?: number;
  /** 人脸框的高度 */
  Height?: number;
}

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

/** 融合参数 */
declare interface FuseParam {
  /** 图片编码参数 */
  ImageCodecParam?: ImageCodecParam;
}

/** 高精度融合参数 */
declare interface FusionUltraParam {
  /** 拉脸强度。主要用于调整生成结果人脸脸型更像素材模板还是用户人脸。取值越大越像用户人脸。取值范围：0-1之间。默认取值0.7。该参数仅对SwapModelType（模型类型）取值1-5生效 */
  WarpRadio?: number;
  /** 人脸增强强度。对整个人脸进行增强，增加清晰度，改善质量。当生成的人脸不够清晰，质感不够好的时候可以设置。取值越大增强强度越大。取值范围：0-1之间。默认取值1。该参数仅对SwapModelType（模型类型）取值1-5生效 */
  EnhanceRadio?: number;
  /** 磨皮强度。当生成脸的图像面部显脏时，可进行设置。取值范围：0-1之间。默认取值1。该参数仅对SwapModelType（模型类型）取值1-5生效 */
  MpRadio?: number;
  /** 人脸模糊开关（暂不支持）当生成人脸比较清晰时，将人脸模糊到接近模板的清晰度的程度该参数仅对SwapModelType（模型类型）取值1-5生效 */
  BlurRadio?: number;
  /** 牙齿增强开关，默认取值为1牙齿增强，修复牙齿。当生成牙齿不好（如牙齿裂开）可以打开此开关0：牙齿增强关闭1：牙齿增强打开该参数仅对SwapModelType（模型类型）取值1-5生效 */
  TeethEnhanceRadio?: number;
}

/** 图片编码参数 */
declare interface ImageCodecParam {
  /** 元数据是描述媒体文件的附加信息。通过添加自定义的元数据，可以将一些附加信息嵌入到文件中。这些信息可以用于版权、描述、标识等目的，并在后续的媒体处理或管理过程中使用。个数不能大于1。 */
  MetaData?: MetaData[];
}

/** logo参数 */
declare interface LogoParam {
  /** 标识图片位于融合结果图中的坐标，将按照坐标对标识图片进行位置和大小的拉伸匹配。Width、Height <= 2160。 */
  LogoRect: FaceRect;
  /** 标识图片Url地址●base64 和 url 必须提供一个，如果都提供以 url 为准。●支持图片格式：支持jpg或png专业版：base64 编码后大小不超过10M。非专业版：base64 编码后大小不超过5M。 */
  LogoUrl?: string;
  /** 输入图片base64。●base64 和 url 必须提供一个，如果都提供以 url 为准。●支持图片格式：支持jpg或png专业版：base64 编码后大小不超过10M。非专业版：base64 编码后大小不超过5M。 */
  LogoImage?: string;
}

/** 人脸信息 */
declare interface MaterialFaces {
  /** 人脸序号 */
  FaceId?: string;
  /** 人脸框信息 */
  FaceInfo?: FaceInfo;
}

/** 人脸图片和待被融合的素材模板图的人脸位置信息。 */
declare interface MergeInfo {
  /** 输入图片base64。●base64 和 url 必须提供一个，如果都提供以 url 为准。●素材图片限制：图片中面部尺寸大于34 * 34；图片尺寸大于64 * 64。（图片编码之后可能会大30%左右，建议合理控制图片大小）。●支持图片格式：支持jpg或png */
  Image?: string;
  /** 输入图片url。●base64 和 url 必须提供一个，如果都提供以 url 为准。●素材图片限制：图片中面部尺寸大于34 * 34；图片尺寸大于64 * 64。（图片编码之后可能会大30%左右，建议合理控制图片大小）。●支持图片格式：支持jpg或png */
  Url?: string;
  /** 上传的图片人脸位置信息（人脸框）Width、Height >= 30。 */
  InputImageFaceRect?: FaceRect;
  /** 素材人脸ID，不填默认取最大人脸。 */
  TemplateFaceID?: string;
  /** 模板中人脸位置信息(人脸框)，不填默认取最大人脸。此字段仅适用于图片融合自定义模板素材场景。Width、Height >= 30。 */
  TemplateFaceRect?: FaceRect;
}

/** MetaData数据结构，Key/Value格式 */
declare interface MetaData {
  /** MetaData的Key，字符长度不能超过32 */
  MetaKey: string;
  /** MetaData的Value，字符长度不能超过256 */
  MetaValue: string;
}

/** 素材信息 */
declare interface PublicMaterialInfos {
  /** 素材Id */
  MaterialId?: string;
  /** 素材状态字段取值: 0 审核中1 人工审核通过2 人工审核失败3 申诉中11 申诉成功12 申诉失败21 机器审核通过22 机器审核失败31 视频素材预处理成功，素材可用32 视频素材预处理失败33 角色不在视频中 */
  MaterialStatus?: number;
  /** 创建时间 */
  CreateTime?: string;
  /** 修改时间 */
  UpdateTime?: string;
  /** 人脸信息 */
  MaterialFaceList?: MaterialFaces[];
  /** 素材名 */
  MaterialName?: string;
  /** 审核原因 */
  AuditResult?: string;
}

declare interface DescribeMaterialListRequest {
  /** 活动Id */
  ActivityId: string;
  /** 素材Id */
  MaterialId?: string;
  /** 每次拉取条数 */
  Limit?: number;
  /** 偏移量 */
  Offset?: number;
}

declare interface DescribeMaterialListResponse {
  /** 素材列表数据 */
  MaterialInfos?: PublicMaterialInfos[];
  /** 素材条数 */
  Count?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface FuseFaceRequest {
  /** 活动 ID，请在人脸融合控制台查看。 */
  ProjectId: string;
  /** 素材 ID，请在人脸融合控制台查看。 */
  ModelId: string;
  /** 返回图像方式（url 或 base64) ，二选一。url有效期为7天。 */
  RspImgType: string;
  /** 用户人脸图片、素材模板图的人脸位置信息。不能超过6个。 */
  MergeInfos: MergeInfo[];
  /** 脸型融合比例，数值越高，融合后的脸型越像素材人物。取值范围[0,100] 若此参数不填写，则使用人脸融合控制台中脸型参数数值。（换脸版算法暂不支持此参数调整） */
  FuseProfileDegree?: number;
  /** 五官融合比例，数值越高，融合后的五官越像素材人物。取值范围[0,100] 若此参数不填写，则使用人脸融合控制台中五官参数数值。（换脸版算法暂不支持此参数调整） */
  FuseFaceDegree?: number;
  /** 为融合结果图添加合成标识的开关，默认为1。1：添加标识。0：不添加标识。其他数值：默认按1处理。建议您使用显著标识来提示结果图使用了人脸融合技术，是AI合成的图片。 */
  LogoAdd?: number;
  /** 标识内容设置。默认在融合结果图右下角添加“本图片为AI合成图片”字样，您可根据自身需要替换为其他的Logo图片。 */
  LogoParam?: LogoParam;
  /** 融合参数。 */
  FuseParam?: FuseParam;
}

declare interface FuseFaceResponse {
  /** RspImgType 为 url 时，返回结果的 url（有效期7天）， RspImgType 为 base64 时返回 base64 数据。 */
  FusedImage?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface FuseFaceUltraRequest {
  /** 返回融合结果图片方式（url 或 base64) ，二选一。url有效期为1天。 */
  RspImgType: string;
  /** 用户人脸图片、素材模板图的人脸位置信息。主要用于素材模版中人脸以及用作融合的用户人脸相关信息，两种人脸都需要提供人脸图片，可选择提供人脸框位置，具体见MergeInfo说明 目前最多支持融合模板图片中的6张人脸。 */
  MergeInfos: MergeInfo[];
  /** 素材模版图片的url地址。●base64 和 url 必须提供一个，如果都提供以 url 为准。●素材图片限制：图片中面部尺寸大于34 * 34；图片尺寸大于64 * 64，小于8000 * 8000（单边限制）。图片url或者图片 base64 数据，base64 编码后大小不可超过10M（图片编码之后可能会大30%左右，建议合理控制图片大小）●图片格式：支持jpg或png */
  ModelUrl?: string;
  /** 素材模版图片base64数据。●base64 和 url 必须提供一个，如果都提供以 url 为准。●素材图片限制：图片中面部尺寸大于34 * 34；图片尺寸大于64 * 64，小于8000*8000（单边限制）。图片url或者图片 base64 数据，base64 编码后大小不可超过10M（图片编码之后可能会大30%左右，建议合理控制图片大小）●支持图片格式：支持jpg或png */
  ModelImage?: string;
  /** 图片人脸融合（专业版）效果参数。可用于设置拉脸、人脸增强、磨皮、牙齿增强等融合效果参数，生成理想的融合效果。不传默认使用接口推荐值。具体见FusionUltraParam说明 */
  FusionUltraParam?: FusionUltraParam;
  /** 为融合结果图添加合成标识的开关，默认为1。1：添加标识。0：不添加标识。其他数值：默认按1处理。建议您使用显著标识来提示结果图使用了人脸融合技术，是AI合成的图片。 */
  LogoAdd?: number;
  /** 标识内容设置。默认在融合结果图右下角添加“本图片为AI合成图片”字样，您可根据自身需要替换为其他的Logo图片。 */
  LogoParam?: LogoParam;
  /** 融合模型类型参数：默认为1。图片人脸融合（专业版）针对不同场景，提供多种模型供选择。如您的产品是泛娱乐场景，推荐使用1；如您主要用于影像场景，推荐使用4、5。其他模型类型也可以结合您的产品使用场景进行选择，也许会有意想不到的效果1：默认泛娱乐场景，画面偏锐。2：影视级场景，画面偏自然。3：影视级场景，高分辨率，画面偏自然。4：影视级场景，高分辦率，高人脸相似度，画面偏自然，可用于证件照等场景。5：影视级场景，高分辨率，对闭眼和遮挡更友好。 */
  SwapModelType?: number;
}

declare interface FuseFaceUltraResponse {
  /** RspImgType 为 url 时，返回结果的 url， RspImgType 为 base64 时返回 base64 数据。url有效期为1天。 */
  FusedImage?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare namespace V20181201 {
  type VersionHeader = { headers: { 'X-TC-Version': '2018-12-01' } }

  /** 人脸信息 */
  interface FaceInfo {
    /** 人脸框的横坐标 */
    X?: number;
    /** 人脸框的纵坐标 */
    Y?: number;
    /** 人脸框的宽度 */
    Width?: number;
    /** 人脸框的高度 */
    Height?: number;
  }

  /** 人脸框信息 */
  interface FaceRect {
    /** 人脸框左上角横坐标。 */
    X: number;
    /** 人脸框左上角纵坐标。 */
    Y: number;
    /** 人脸框宽度。 */
    Width: number;
    /** 人脸框高度。 */
    Height: number;
  }

  /** 人脸融合不适宜内容识别人脸信息 */
  interface FuseFaceReviewDetail {
    /** 保留字段 */
    Field: string;
    /** 人员名称 */
    Label: string;
    /** 对应识别label的置信度，分数越高意味违法违规可能性越大。 0到70，Suggestion建议为PASS； 70到80，Suggestion建议为REVIEW； 80到100，Suggestion建议为BLOCK。 */
    Confidence: number;
    /** 识别场景的审核结论： PASS：正常 REVIEW：疑似 BLOCK：违规 */
    Suggestion: string;
  }

  /** 人脸融合不适宜内容识别返回参数item */
  interface FuseFaceReviewResult {
    /** 保留字段 */
    Category?: string;
    /** 状态码， 0为处理成功，其他值为处理失败 */
    Code?: string;
    /** 对应状态码信息描述 */
    CodeDescription?: string;
    /** 保留字段 */
    Confidence?: number;
    /** 保留字段 */
    Suggestion?: string;
    /** 审核详细内容 */
    DetailSet?: FuseFaceReviewDetail[];
  }

  /** 融合参数 */
  interface FuseParam {
    /** 图片编码参数 */
    ImageCodecParam?: ImageCodecParam;
  }

  /** 图片编码参数 */
  interface ImageCodecParam {
    /** 元数据 */
    MetaData?: MetaData[];
  }

  /** 人脸信息 */
  interface MaterialFaceList {
    /** 人脸序号 */
    FaceId?: string;
    /** 人脸框信息 */
    FaceInfo?: FaceInfo;
  }

  /** 人脸图片和待被融合的素材模板图的人脸位置信息。 */
  interface MergeInfo {
    /** 输入图片base64。●base64 和 url 必须提供一个，如果都提供以 url 为准。●素材图片限制：图片中面部尺寸大于34 * 34；图片尺寸大于64 * 64。（图片编码之后可能会大30%左右，建议合理控制图片大小）。●支持图片格式：支持jpg或png。 */
    Image?: string;
    /** 输入图片url。●base64 和 url 必须提供一个，如果都提供以 url 为准。●素材图片限制：图片中面部尺寸大于34 * 34；图片尺寸大于64 * 64。（图片编码之后可能会大30%左右，建议合理控制图片大小）。●支持图片格式：支持jpg或png。 */
    Url?: string;
    /** 输入图片人脸位置信息（人脸框）。不填默认取输入图中最大人脸。Width、Height >= 30。 */
    InputImageFaceRect?: FaceRect;
    /** 素材人脸ID，不填默认取素材中最大人脸。 */
    TemplateFaceID?: string;
  }

  /** MetaData数据结构，Key/Value格式 */
  interface MetaData {
    /** MetaData的Key，长度不能超过32。 */
    MetaKey: string;
    /** MetaData的Value，长度不能超过256。 */
    MetaValue: string;
  }

  /** 素材信息 */
  interface PublicMaterialInfos {
    /** 素材Id */
    MaterialId?: string;
    /** 素材状态 */
    MaterialStatus?: number;
    /** 脸型参数P图 */
    BlendParamPtu?: number;
    /** 五官参数P图 */
    PositionParamPtu?: number;
    /** 脸型参数优图 */
    BlendParamYoutu?: number;
    /** 五官参数优图 */
    PositionParamYoutu?: number;
    /** 素材COS地址 */
    Url?: string;
    /** 创建时间 */
    CreateTime?: string;
    /** 修改时间 */
    UpdateTime?: string;
    /** 人脸信息 */
    MaterialFaceList?: MaterialFaceList[];
  }

  interface DescribeMaterialListRequest {
    /** 活动Id */
    ActivityId: number;
    /** 素材Id */
    MaterialId?: string;
    /** 每次拉取条数 */
    Limit?: number;
    /** 偏移量 */
    Offset?: number;
  }

  interface DescribeMaterialListResponse {
    /** 素材列表数据 */
    MaterialInfos?: PublicMaterialInfos[];
    /** 素材条数 */
    Count?: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface FaceFusionRequest {
    /** 活动 ID，请在人脸融合控制台查看。 */
    ProjectId: string;
    /** 素材 ID，请在人脸融合控制台查看。 */
    ModelId: string;
    /** 返回图像方式（url 或 base64) ，二选一。url有效期为7天。 */
    RspImgType: string;
    /** 图片 base64 数据。请确保人脸为正脸，无旋转。若某些手机拍摄后人脸被旋转，请使用图片的 EXIF 信息对图片进行旋转处理；请勿在 base64 数据中包含头部，如“data:image/jpeg;base64,”。 */
    Image?: string;
    /** 历史遗留字段，无需填写。因为融合只需提取人脸特征，不需要鉴黄。 */
    PornDetect?: number;
    /** 0表示不需要不适宜内容识别，1表示需要不适宜内容识别。默认值为0。请注意，不适宜内容识别服务开启后，您需要根据返回结果自行判断是否调整您的业务逻辑。例如提示您的用户图片非法，请更换图片。 */
    CelebrityIdentify?: number;
    /** 图片Url地址 */
    Url?: string;
    /** 融合参数 */
    FuseParam?: FuseParam;
  }

  interface FaceFusionResponse {
    /** RspImgType 为 url 时，返回结果的 url， RspImgType 为 base64 时返回 base64 数据。 */
    Image?: string;
    /** 不适宜内容识别结果 */
    ReviewResultSet?: FuseFaceReviewResult[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface FuseFaceRequest {
    /** 活动 ID，请在人脸融合控制台查看。 */
    ProjectId: string;
    /** 素材 ID，请在人脸融合控制台查看。 */
    ModelId: string;
    /** 返回图像方式（url 或 base64) ，二选一。url有效期为7天。 */
    RspImgType: string;
    /** 用户人脸图片、素材模板图的人脸位置信息。 */
    MergeInfos: MergeInfo[];
    /** 脸型融合比例，数值越高，融合后的脸型越像素材人物。取值范围[0,100] 若此参数不填写，则使用人脸融合控制台中脸型参数数值。（换脸版算法暂不支持此参数调整） */
    FuseProfileDegree?: number;
    /** 五官融合比例，数值越高，融合后的五官越像素材人物。取值范围[0,100] 若此参数不填写，则使用人脸融合控制台中五官参数数值。（换脸版算法暂不支持此参数调整） */
    FuseFaceDegree?: number;
    /** 0表示不需要不适宜内容识别，1表示需要不适宜内容识别。默认值为0。请注意，不适宜内容识别服务开启后，您需要根据返回结果自行判断是否调整您的业务逻辑。例如提示您的用户图片非法，请更换图片。 */
    CelebrityIdentify?: number;
    /** 融合参数 */
    FuseParam?: FuseParam;
  }

  interface FuseFaceResponse {
    /** RspImgType 为 url 时，返回结果的 url， RspImgType 为 base64 时返回 base64 数据。 */
    FusedImage?: string;
    /** 不适宜内容识别结果。该数组的顺序和请求中mergeinfo的顺序一致，一一对应 */
    ReviewResultSet?: FuseFaceReviewResult[] | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }
}

/** {@link Facefusion 人脸融合} */
declare interface Facefusion {
  (): Versions;
  /** 查询素材列表 {@link DescribeMaterialListRequest} {@link DescribeMaterialListResponse} */
  DescribeMaterialList(data: DescribeMaterialListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMaterialListResponse>;
  /** 图片人脸融合 {@link FuseFaceRequest} {@link FuseFaceResponse} */
  FuseFace(data: FuseFaceRequest, config?: AxiosRequestConfig): AxiosPromise<FuseFaceResponse>;
  /** 图片人脸融合专业版 {@link FuseFaceUltraRequest} {@link FuseFaceUltraResponse} */
  FuseFaceUltra(data: FuseFaceUltraRequest, config?: AxiosRequestConfig): AxiosPromise<FuseFaceUltraResponse>;
  /** 查询素材列表 {@link V20181201.DescribeMaterialListRequest} {@link V20181201.DescribeMaterialListResponse} */
  DescribeMaterialList(data: V20181201.DescribeMaterialListRequest, config: AxiosRequestConfig & V20181201.VersionHeader): AxiosPromise<V20181201.DescribeMaterialListResponse>;
  /** 人脸融合 {@link V20181201.FaceFusionRequest} {@link V20181201.FaceFusionResponse} */
  FaceFusion(data: V20181201.FaceFusionRequest, config: AxiosRequestConfig & V20181201.VersionHeader): AxiosPromise<V20181201.FaceFusionResponse>;
  /** 选脸融合 {@link V20181201.FuseFaceRequest} {@link V20181201.FuseFaceResponse} */
  FuseFace(data: V20181201.FuseFaceRequest, config: AxiosRequestConfig & V20181201.VersionHeader): AxiosPromise<V20181201.FuseFaceResponse>;
}

export declare type Versions = ["2022-09-27", "2018-12-01"];

export default Facefusion;
