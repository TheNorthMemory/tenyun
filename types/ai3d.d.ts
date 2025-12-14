/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 3D文件 */
declare interface File3D {
  /** 文件格式 */
  Type?: string;
  /** 文件的Url（有效期24小时） */
  Url?: string;
  /** 预览图片Url */
  PreviewImageUrl?: string;
}

/** 图片 */
declare interface Image {
  /** 图片base64 */
  Base64?: string;
  /** 图片url */
  Url?: string;
}

/** 3D文件 */
declare interface InputFile3D {
  /** 文件的Url（有效期24小时） */
  Url: string;
  /** 文件格式 */
  Type: string;
}

/** 多视角图片 */
declare interface ViewImage {
  /** 视角类型。取值：back、left、right */
  ViewType?: string;
  /** 图片Url地址 */
  ViewImageUrl?: string;
  /** 图片base64地址 */
  ViewImageBase64?: string;
}

declare interface Convert3DFormatRequest {
  /** 3D文件url地址。 */
  File3D: string;
  /** 返回的3D文件格式，参考值：STL, USDZ, FBX, MP4, GIF。 */
  Format: string;
}

declare interface Convert3DFormatResponse {
  /** 3D文件地址 */
  ResultFile3D?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeHunyuanTo3DUVJobRequest {
  /** 任务ID。 */
  JobId: string;
}

declare interface DescribeHunyuanTo3DUVJobResponse {
  /** 任务状态。WAIT：等待中，RUN：执行中，FAIL：任务失败，DONE：任务成功 示例值：RUN。 */
  Status?: string;
  /** 错误码。 */
  ErrorCode?: string;
  /** 错误信息。 */
  ErrorMessage?: string;
  /** 生成文件的URL地址，有效期1天。 */
  ResultFile3Ds?: File3D[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeReduceFaceJobRequest {
  /** 任务ID。 */
  JobId?: string;
}

declare interface DescribeReduceFaceJobResponse {
  /** 任务状态。WAIT：等待中，RUN：执行中，FAIL：任务失败，DONE：任务成功 */
  Status?: string;
  /** 错误码 */
  ErrorCode?: string;
  /** 错误信息 */
  ErrorMessage?: string;
  /** 生成的3D文件数组。 */
  ResultFile3Ds?: File3D[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTextureTo3DJobRequest {
  /** 任务ID。 */
  JobId?: string;
}

declare interface DescribeTextureTo3DJobResponse {
  /** 任务状态。WAIT：等待中，RUN：执行中，FAIL：任务失败，DONE：任务成功 */
  Status?: string;
  /** 错误码 */
  ErrorCode?: string;
  /** 错误信息 */
  ErrorMessage?: string;
  /** 生成的3D文件数组。 */
  ResultFile3Ds?: File3D[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryHunyuan3DPartJobRequest {
  /** 任务ID。 */
  JobId: string;
}

declare interface QueryHunyuan3DPartJobResponse {
  /** 任务状态。WAIT：等待中，RUN：执行中，FAIL：任务失败，DONE：任务成功 示例值：RUN。 */
  Status?: string;
  /** 错误码。 */
  ErrorCode?: string;
  /** 错误信息。 */
  ErrorMessage?: string;
  /** 生成文件的URL地址，有效期1天。 */
  ResultFile3Ds?: File3D[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryHunyuanTo3DProJobRequest {
  /** 任务ID。 */
  JobId: string;
}

declare interface QueryHunyuanTo3DProJobResponse {
  /** 任务状态。WAIT：等待中，RUN：执行中，FAIL：任务失败，DONE：任务成功 */
  Status?: string;
  /** 错误码 */
  ErrorCode?: string;
  /** 错误信息 */
  ErrorMessage?: string;
  /** 生成的3D文件数组。 */
  ResultFile3Ds?: File3D[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryHunyuanTo3DRapidJobRequest {
  /** 任务ID。 */
  JobId?: string;
}

declare interface QueryHunyuanTo3DRapidJobResponse {
  /** 任务状态。WAIT：等待中，RUN：执行中，FAIL：任务失败，DONE：任务成功 */
  Status?: string;
  /** 错误码 */
  ErrorCode?: string;
  /** 错误信息 */
  ErrorMessage?: string;
  /** 生成的3D文件数组。 */
  ResultFile3Ds?: File3D[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SubmitHunyuan3DPartJobRequest {
  /** 需进行组件生成的3D模型文件，仅支持FBX格式。 */
  File?: InputFile3D;
}

declare interface SubmitHunyuan3DPartJobResponse {
  /** 任务ID。 */
  JobId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SubmitHunyuanTo3DProJobRequest {
  /** 文生3D，3D内容的描述，中文正向提示词。最多支持1024个 utf-8 字符。ImageBase64、ImageUrl和 Prompt必填其一，且Prompt和ImageBase64/ImageUrl不能同时存在。 */
  Prompt?: string;
  /** 输入图 Base64 数据。大小：单边分辨率要求不小于128，不大于5000。大小不超过8m（base64编码后会大30%左右，建议实际输入图片不超过5m）格式：jpg，png，jpeg，webp。ImageBase64、ImageUrl和 Prompt必填其一，且Prompt和ImageBase64/ImageUrl不能同时存在。 */
  ImageBase64?: string;
  /** 输入图Url。大小：单边分辨率要求不小于128，不大于5000。大小不超过8m（base64编码后会大30%左右，建议实际输入图片不超过5m）格式：jpg，png，jpeg，webp。ImageBase64、ImageUrl和 Prompt必填其一，且Prompt和ImageBase64/ImageUrl不能同时存在。 */
  ImageUrl?: string;
  /** 多视角的模型图片，视角参考值：left：左视图；right：右视图；back：后视图；每个视角仅限制一张图片。●图片大小限制：编码后大小不可超过8M。（base64编码后会大30%左右，建议实际输入图片不超过5m）●图片分辨率限制：单边分辨率小于5000且大于128。●支持图片格式：支持jpg或png */
  MultiViewImages?: ViewImage[];
  /** 是否开启 PBR材质生成，默认 false。 */
  EnablePBR?: boolean;
  /** 生成3D模型的面数，默认值为500000。可支持生成面数范围，参考值：40000-1500000。 */
  FaceCount?: number;
  /** 生成任务类型，默认Normal，参考值：Normal：可生成带纹理的几何模型。LowPoly：可生成智能减面后的模型。Geometry：可生成不带纹理的几何模型（白模），选择此任务时，EnablePBR参数不生效。Sketch：可输入草图或线稿图生成模型，此模式下prompt和ImageUrl/ImageBase64可一起输入。 */
  GenerateType?: string;
  /** 该参数仅在GenerateType中选择LowPoly模式可生效。多边形类型，表示模型的表面由几边形网格构成，默认为triangle,参考值:triangle: 三角形面。quadrilateral: 四边形面与三角形面混合生成。 */
  PolygonType?: string;
}

declare interface SubmitHunyuanTo3DProJobResponse {
  /** 任务ID（有效期24小时） */
  JobId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SubmitHunyuanTo3DRapidJobRequest {
  /** 文生3D，3D内容的描述，中文正向提示词。最多支持200个 utf-8 字符。文生3D, ImageBase64、ImageUrl和 Prompt必填其一，且Prompt和ImageBase64/ImageUrl不能同时存在。 */
  Prompt?: string;
  /** 输入图 Base64 数据。大小：单边分辨率要求不小于128，不大于5000。大小不超过8m（base64编码后会大30%左右，建议实际输入图片不超过5m）格式：jpg，png，jpeg，webp。ImageBase64、ImageUrl和 Prompt必填其一，且Prompt和ImageBase64/ImageUrl不能同时存在。 */
  ImageBase64?: string;
  /** 输入图Url。大小：单边分辨率要求不小于128，不大于5000。大小不超过8m（base64编码后会大30%左右，建议实际输入图片不超过5m）格式：jpg，png，jpeg，webp。ImageBase64、ImageUrl和 Prompt必填其一，且Prompt和ImageBase64/ImageUrl不能同时存在。 */
  ImageUrl?: string;
  /** 生成模型的格式，仅限制生成一种格式。生成模型文件组默认返回obj格式。可选值：OBJ，GLB，STL，USDZ，FBX，MP4。 */
  ResultFormat?: string;
  /** 是否开启 PBR材质生成，默认 false。 */
  EnablePBR?: boolean;
  /** 是否开启单几何生成选项，开启后会生成不带纹理的3D模型（白模）； 开启时，生成模型文件不支持OBJ格式，默认生成模型文件为GLB格式。 */
  EnableGeometry?: boolean;
}

declare interface SubmitHunyuanTo3DRapidJobResponse {
  /** 任务ID（有效期24小时） */
  JobId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SubmitHunyuanTo3DUVJobRequest {
  /** 需进行UV展开的3D文件URL，可支持FBX,OBJ,GLB格式。 */
  File?: InputFile3D;
}

declare interface SubmitHunyuanTo3DUVJobResponse {
  /** 任务ID。 */
  JobId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SubmitReduceFaceJobRequest {
  /** 源3D模型文件。其中参数 Type 和 Url 必填，参数 PreviewImageUrl 无意义，可忽略。Type可选值：OBJ，GLB */
  File3D: File3D;
  /** 多边形类型，表示模型的表面由几边形网格构成，默认为triangle,参考值:triangle:三角形面。quadrilateral：四边形面。 */
  PolygonType?: string;
  /** 减面后面数档位类型，可选值：high，medium, low。 */
  FaceLevel?: string;
}

declare interface SubmitReduceFaceJobResponse {
  /** 任务ID（有效期24小时） */
  JobId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SubmitTextureTo3DJobRequest {
  /** 源3D模型文件。Type可选值：OBJ，GLB */
  File3D: File3D;
  /** 文生3D，3D内容的描述，中文正向提示词。最多支持200个 utf-8 字符。文生3D, image、image_url和 prompt必填其一，且prompt和image/image_url不能同时存在。 */
  Prompt?: string;
  /** 3D模型纹理参考图 Base64 数据和参考图图 Url。- Base64 和 Url 必须提供一个，如果都提供以 Url 为准。- 图片限制：单边分辨率小于4096且大于128，转成 Base64 字符串后小于 10MB，格式支持 jpg、jpeg、png。 */
  Image?: Image;
  /** 是否开启 PBR材质生成，默认 false。 */
  EnablePBR?: boolean;
}

declare interface SubmitTextureTo3DJobResponse {
  /** 任务ID（有效期24小时） */
  JobId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Ai3d 腾讯混元生3D} */
declare interface Ai3d {
  (): Versions;
  /** 模型格式转换 {@link Convert3DFormatRequest} {@link Convert3DFormatResponse} */
  Convert3DFormat(data: Convert3DFormatRequest, config?: AxiosRequestConfig): AxiosPromise<Convert3DFormatResponse>;
  /** 查询UV展开任务 {@link DescribeHunyuanTo3DUVJobRequest} {@link DescribeHunyuanTo3DUVJobResponse} */
  DescribeHunyuanTo3DUVJob(data: DescribeHunyuanTo3DUVJobRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeHunyuanTo3DUVJobResponse>;
  /** 查询智能拓扑任务 {@link DescribeReduceFaceJobRequest} {@link DescribeReduceFaceJobResponse} */
  DescribeReduceFaceJob(data?: DescribeReduceFaceJobRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeReduceFaceJobResponse>;
  /** 查询纹理生成任务 {@link DescribeTextureTo3DJobRequest} {@link DescribeTextureTo3DJobResponse} */
  DescribeTextureTo3DJob(data?: DescribeTextureTo3DJobRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTextureTo3DJobResponse>;
  /** 查询组件生成任务 {@link QueryHunyuan3DPartJobRequest} {@link QueryHunyuan3DPartJobResponse} */
  QueryHunyuan3DPartJob(data: QueryHunyuan3DPartJobRequest, config?: AxiosRequestConfig): AxiosPromise<QueryHunyuan3DPartJobResponse>;
  /** 查询混元生3D专业版任务 {@link QueryHunyuanTo3DProJobRequest} {@link QueryHunyuanTo3DProJobResponse} */
  QueryHunyuanTo3DProJob(data: QueryHunyuanTo3DProJobRequest, config?: AxiosRequestConfig): AxiosPromise<QueryHunyuanTo3DProJobResponse>;
  /** 查询混元生3D极速版任务 {@link QueryHunyuanTo3DRapidJobRequest} {@link QueryHunyuanTo3DRapidJobResponse} */
  QueryHunyuanTo3DRapidJob(data?: QueryHunyuanTo3DRapidJobRequest, config?: AxiosRequestConfig): AxiosPromise<QueryHunyuanTo3DRapidJobResponse>;
  /** 提交组件生成任务 {@link SubmitHunyuan3DPartJobRequest} {@link SubmitHunyuan3DPartJobResponse} */
  SubmitHunyuan3DPartJob(data?: SubmitHunyuan3DPartJobRequest, config?: AxiosRequestConfig): AxiosPromise<SubmitHunyuan3DPartJobResponse>;
  /** 提交混元生3D专业版任务 {@link SubmitHunyuanTo3DProJobRequest} {@link SubmitHunyuanTo3DProJobResponse} */
  SubmitHunyuanTo3DProJob(data?: SubmitHunyuanTo3DProJobRequest, config?: AxiosRequestConfig): AxiosPromise<SubmitHunyuanTo3DProJobResponse>;
  /** 提交混元生3D极速版任务 {@link SubmitHunyuanTo3DRapidJobRequest} {@link SubmitHunyuanTo3DRapidJobResponse} */
  SubmitHunyuanTo3DRapidJob(data?: SubmitHunyuanTo3DRapidJobRequest, config?: AxiosRequestConfig): AxiosPromise<SubmitHunyuanTo3DRapidJobResponse>;
  /** 提交UV展开任务 {@link SubmitHunyuanTo3DUVJobRequest} {@link SubmitHunyuanTo3DUVJobResponse} */
  SubmitHunyuanTo3DUVJob(data?: SubmitHunyuanTo3DUVJobRequest, config?: AxiosRequestConfig): AxiosPromise<SubmitHunyuanTo3DUVJobResponse>;
  /** 提交智能拓扑任务 {@link SubmitReduceFaceJobRequest} {@link SubmitReduceFaceJobResponse} */
  SubmitReduceFaceJob(data: SubmitReduceFaceJobRequest, config?: AxiosRequestConfig): AxiosPromise<SubmitReduceFaceJobResponse>;
  /** 提交纹理生成任务 {@link SubmitTextureTo3DJobRequest} {@link SubmitTextureTo3DJobResponse} */
  SubmitTextureTo3DJob(data: SubmitTextureTo3DJobRequest, config?: AxiosRequestConfig): AxiosPromise<SubmitTextureTo3DJobResponse>;
}

export declare type Versions = ["2025-05-13"];

export default Ai3d;
