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

/** 多视角图片 */
declare interface ViewImage {
  /** 视角类型。取值：back、left、right */
  ViewType?: string;
  /** 图片Url地址 */
  ViewImageUrl?: string;
}

declare interface QueryHunyuanTo3DJobRequest {
  /** 任务ID。 */
  JobId?: string;
}

declare interface QueryHunyuanTo3DJobResponse {
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

declare interface SubmitHunyuanTo3DJobRequest {
  /** 文生3D，3D内容的描述，中文正向提示词。最多支持1024个 utf-8 字符。文生3D, image、image_url和 prompt必填其一，且prompt和image/image_url不能同时存在。 */
  Prompt?: string;
  /** 输入图 Base64 数据。大小：单边分辨率要求不小于128，不大于5000。大小不超过8m（base64编码后会大30%左右，建议实际输入图片不超过6m）格式：jpg，png，jpeg，webp。ImageBase64、ImageUrl和 Prompt必填其一，且Prompt和ImageBase64/ImageUrl不能同时存在。 */
  ImageBase64?: string;
  /** 输入图Url。大小：单边分辨率要求不小于128，不大于5000。大小不超过8m（base64编码后会大30%左右，建议实际输入图片不超过6m）格式：jpg，png，jpeg，webp。ImageBase64/ImageUrl和 Prompt必填其一，且Prompt和ImageBase64/ImageUrl不能同时存在。 */
  ImageUrl?: string;
  /** 多视角的模型图片，视角参考值：left：左视图；right：右视图；back：后视图；每个视角仅限制一张图片。●图片大小限制：编码后大小不可超过8M。●图片分辨率限制：单边分辨率小于5000且大于128。●支持图片格式：支持jpg或png */
  MultiViewImages?: ViewImage[];
  /** 生成模型的格式，仅限制生成一种格式。生成模型文件组默认返回obj格式。可选值：OBJ，GLB，STL，USDZ，FBX，MP4。 */
  ResultFormat?: string;
  /** 是否开启 PBR材质生成，默认 false。 */
  EnablePBR?: boolean;
}

declare interface SubmitHunyuanTo3DJobResponse {
  /** 任务ID（有效期24小时） */
  JobId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SubmitHunyuanTo3DProJobRequest {
  /** 文生3D，3D内容的描述，中文正向提示词。最多支持1024个 utf-8 字符。文生3D, image、image_url和 prompt必填其一，且prompt和image/image_url不能同时存在。 */
  Prompt?: string;
  /** 输入图 Base64 数据。大小：单边分辨率要求不小于128，不大于5000。大小不超过8m（base64编码后会大30%左右，建议实际输入图片不超过6m）格式：jpg，png，jpeg，webp。ImageBase64、ImageUrl和 Prompt必填其一，且Prompt和ImageBase64/ImageUrl不能同时存在。 */
  ImageBase64?: string;
  /** 输入图Url。大小：单边分辨率要求不小于128，不大于5000。大小不超过8m（base64编码后会大30%左右，建议实际输入图片不超过6m）格式：jpg，png，jpeg，webp。ImageBase64/ImageUrl和 Prompt必填其一，且Prompt和ImageBase64/ImageUrl不能同时存在。 */
  ImageUrl?: string;
  /** 多视角的模型图片，视角参考值：left：左视图；right：右视图；back：后视图；每个视角仅限制一张图片。●图片大小限制：编码后大小不可超过8M。●图片分辨率限制：单边分辨率小于5000且大于128。●支持图片格式：支持jpg或png */
  MultiViewImages?: ViewImage[];
  /** 是否开启 PBR材质生成，默认 false。 */
  EnablePBR?: boolean;
  /** 生成3D模型的面数，默认值为500000。可支持生成面数范围，参考值：40000-500000。 */
  FaceCount?: number;
  /** 生成任务类型，默认Normal，参考值：Normal：可生成带纹理的几何模型。LowPoly：可生成智能减面后的模型。Geometry：可生成不带纹理的几何模型（白模），选择此任务时，EnablePBR参数不生效。Sketch：可输入草图或线稿图生成模型。 */
  GenerateType?: string;
}

declare interface SubmitHunyuanTo3DProJobResponse {
  /** 任务ID（有效期24小时） */
  JobId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Ai3d 腾讯混元生3D} */
declare interface Ai3d {
  (): Versions;
  /** 查询混元生3D任务 {@link QueryHunyuanTo3DJobRequest} {@link QueryHunyuanTo3DJobResponse} */
  QueryHunyuanTo3DJob(data?: QueryHunyuanTo3DJobRequest, config?: AxiosRequestConfig): AxiosPromise<QueryHunyuanTo3DJobResponse>;
  /** 查询混元生3D专业版任务 {@link QueryHunyuanTo3DProJobRequest} {@link QueryHunyuanTo3DProJobResponse} */
  QueryHunyuanTo3DProJob(data: QueryHunyuanTo3DProJobRequest, config?: AxiosRequestConfig): AxiosPromise<QueryHunyuanTo3DProJobResponse>;
  /** 提交混元生3D任务 {@link SubmitHunyuanTo3DJobRequest} {@link SubmitHunyuanTo3DJobResponse} */
  SubmitHunyuanTo3DJob(data?: SubmitHunyuanTo3DJobRequest, config?: AxiosRequestConfig): AxiosPromise<SubmitHunyuanTo3DJobResponse>;
  /** 提交混元生3D专业版任务 {@link SubmitHunyuanTo3DProJobRequest} {@link SubmitHunyuanTo3DProJobResponse} */
  SubmitHunyuanTo3DProJob(data?: SubmitHunyuanTo3DProJobRequest, config?: AxiosRequestConfig): AxiosPromise<SubmitHunyuanTo3DProJobResponse>;
}

export declare type Versions = ["2025-05-13"];

export default Ai3d;
