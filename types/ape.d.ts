/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 授权人信息 */
declare interface AuthInfo {
  /** 主键 */
  Id: string;
  /** 授权人名称 */
  Name: string;
  /** 身份证号/社会信用代码 */
  Code: string;
  /** 授权人类型 */
  Type: number;
  /** 创建时间 */
  CreateTime: string;
}

/** 图片下载信息 */
declare interface DownloadInfo {
  /** 图片基础信息 */
  ImageInfo: ImageInfo;
  /** 图片原图URL */
  ImageUrl: string;
  /** 图片缩略图URL */
  ImageThumbUrl: string;
  /** 订单Id */
  OrderId: string;
  /** 订单创建时间 */
  OrderCreateTime: string;
  /** 下载Id */
  DownloadId: string;
  /** 下载时间 */
  DownloadTime: string;
  /** 图片购买类型，单张/会员 */
  ConsumeType: number;
  /** 是否首次下载 */
  FirstDownload: boolean;
}

/** 图片基础信息 */
declare interface ImageInfo {
  /** 图片Id */
  ImageId: number;
  /** 授权场景Id */
  LicenseScopeId?: number;
  /** 尺寸名称Id */
  DimensionsNameId?: number;
  /** 平台用户标识 */
  UserId?: string;
  /** 平台用户下载图片购买的价格(单位:分) */
  DownloadPrice?: number;
  /** 下载类型。匹配集合中的任意元素：Single: 单张购买下载BasicEnterpriseMember: 企业基础会员下载AdvancedEnterpriseMember: 企业高级会员下载DistinguishedEnterpriseMember: 企业尊享会员下载 */
  DownloadType?: string;
}

/** 图片信息条目 */
declare interface ImageItem {
  /** 图片ID */
  ImageId: number;
  /** 图片标题 */
  Title: string;
  /** 图片描述 */
  Description: string;
  /** 图片预览链接 */
  PreviewUrl: string;
  /** 图片缩略图 */
  ThumbUrl: string;
  /** 图片供应商 */
  Vendor: string;
  /** 图片关键词 */
  Keywords: string;
  /** 宽 */
  Width: number;
  /** 高 */
  Height: number;
}

/** 图片售卖组合信息 */
declare interface ImageMarshal {
  /** 售卖组合唯一标识 */
  MarshalId: number;
  /** 图片高度 */
  Height: number;
  /** 图片宽度 */
  Width: number;
  /** 图片大小 */
  Size: number;
  /** 图片格式 */
  Format: string;
  /** 图片价格(单位:分) */
  Price: number;
  /** 授权范围 */
  LicenseScope: string;
  /** 是否支持VIP购买 */
  IsVip: boolean;
  /** 授权范围id */
  LicenseScopeId: number;
  /** 尺寸 */
  DimensionsName: string;
  /** 尺寸id */
  DimensionsNameId: number;
}

declare interface BatchDescribeOrderCertificateRequest {
  /** 要下载授权书的订单id */
  OrderIds: string[];
}

declare interface BatchDescribeOrderCertificateResponse {
  /** 授权书的下载地址 */
  CertificateUrls?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BatchDescribeOrderImageRequest {
  /** 要下载图片的订单id */
  OrderIds: string[];
}

declare interface BatchDescribeOrderImageResponse {
  /** 图片的下载地址 */
  ImageUrls?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateOrderAndDownloadsRequest {
  /** ImageId必填，单张购买，所有必填，会员身份可以省略部分参数 */
  ImageInfos: ImageInfo[];
}

declare interface CreateOrderAndDownloadsResponse {
  /** 成功核销后可以获取图片基本信息和原图地址 */
  DownloadInfos: DownloadInfo[] | null;
  /** 可下载图片数量 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateOrderAndPayRequest {
  /** 图片ID */
  ImageId: number;
  /** 授权人ID */
  AuthUserId: string;
  /** 售卖组合id */
  MarshalId: number;
}

declare interface CreateOrderAndPayResponse {
  /** 订单ID */
  OrderId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAuthUsersRequest {
  /** 分页大小 */
  Limit: number;
  /** 页偏移量 */
  Offset: number;
}

declare interface DescribeAuthUsersResponse {
  /** 授权人信息数组 */
  Users?: AuthInfo[] | null;
  /** 总记录数 */
  TotalCount?: number;
  /** 是否是老策略用户 */
  OldUser?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDownloadInfosRequest {
  /** 默认10 */
  Limit?: number;
  /** 默认0 */
  Offset?: number;
  /** 开始时间晚于指定时间 */
  BeginTime?: string;
  /** 结束时间早于指定时间 */
  EndTime?: string;
  /** 无效值，过滤结果为空 */
  ImageIds?: number[];
}

declare interface DescribeDownloadInfosResponse {
  /** 核销下载记录 */
  DownloadInfos: DownloadInfo[] | null;
  /** 总记录数量 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeImageRequest {
  /** 图片ID */
  ImageId: number;
}

declare interface DescribeImageResponse {
  /** 图片ID */
  ImageId: number;
  /** 图片标题 */
  Title: string;
  /** 图片描述 */
  Description: string;
  /** 图片预览链接 */
  PreviewUrl: string;
  /** 图片缩略图 */
  ThumbUrl: string;
  /** 图片供应商 */
  Vendor: string;
  /** 图片售卖组合信息 */
  Marshals: ImageMarshal[];
  /** 宽 */
  Width: number;
  /** 高 */
  Height: number;
  /** 图片格式 jpg/eps/psd/... */
  ImageFormat: string;
  /** 图片类型 摄影图片、插画、漫画、图表、矢量、psd、全景、gif、模板 */
  ImageSenseType: string;
  /** 关键词，多关键词用空格分隔 */
  Keywords: string;
  /** 分层图库id */
  LayeredGalleryId: number;
  /** 构图方式：horizontal:横图、vertical:竖图、square:方图 */
  Orientation: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeImagesRequest {
  /** 页偏移量 */
  Offset: number;
  /** 页大小 */
  Limit: number;
  /** 搜索关键字 */
  Keyword: string;
  /** 构图方式，可选以下值：horizontal、vertical、square，分别代表以下含义：横图、竖图、方图 */
  Orientation?: string;
  /** 图片类型，可选以下值：照片、插画 */
  ImageSenseType?: string;
  /** 分层图库id数组，可选以下数值：1(基础)，2(精选)，3(高级) */
  LayeredGalleryIds?: number[];
}

declare interface DescribeImagesResponse {
  /** 页偏移量 */
  Offset: number;
  /** 页大小 */
  Limit: number;
  /** 总条数 */
  Total: number;
  /** 是否有下一页 */
  HaveMore: boolean;
  /** 图片信息数组 */
  Items: ImageItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Ape 正版图库直通车} */
declare interface Ape {
  (): Versions;
  /** 批量获取授权书下载地址 {@link BatchDescribeOrderCertificateRequest} {@link BatchDescribeOrderCertificateResponse} */
  BatchDescribeOrderCertificate(data: BatchDescribeOrderCertificateRequest, config?: AxiosRequestConfig): AxiosPromise<BatchDescribeOrderCertificateResponse>;
  /** 批量获取图片下载地址 {@link BatchDescribeOrderImageRequest} {@link BatchDescribeOrderImageResponse} */
  BatchDescribeOrderImage(data: BatchDescribeOrderImageRequest, config?: AxiosRequestConfig): AxiosPromise<BatchDescribeOrderImageResponse>;
  /** 获取图片下载地址 {@link CreateOrderAndDownloadsRequest} {@link CreateOrderAndDownloadsResponse} */
  CreateOrderAndDownloads(data: CreateOrderAndDownloadsRequest, config?: AxiosRequestConfig): AxiosPromise<CreateOrderAndDownloadsResponse>;
  /** 创建订单并支付 {@link CreateOrderAndPayRequest} {@link CreateOrderAndPayResponse} */
  CreateOrderAndPay(data: CreateOrderAndPayRequest, config?: AxiosRequestConfig): AxiosPromise<CreateOrderAndPayResponse>;
  /** 查询授权人列表 {@link DescribeAuthUsersRequest} {@link DescribeAuthUsersResponse} */
  DescribeAuthUsers(data: DescribeAuthUsersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAuthUsersResponse>;
  /** 获取图片下载记录 {@link DescribeDownloadInfosRequest} {@link DescribeDownloadInfosResponse} */
  DescribeDownloadInfos(data?: DescribeDownloadInfosRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDownloadInfosResponse>;
  /** 查询图片详情 {@link DescribeImageRequest} {@link DescribeImageResponse} */
  DescribeImage(data: DescribeImageRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeImageResponse>;
  /** 查询图片列表 {@link DescribeImagesRequest} {@link DescribeImagesResponse} */
  DescribeImages(data: DescribeImagesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeImagesResponse>;
}

export declare type Versions = ["2020-05-13"];

export default Ape;
