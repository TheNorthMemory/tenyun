/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 文件列表信息 */
declare interface FileInfo {
  /** BASE64编码后的文件内容 */
  FileBody?: string;
  /** 文件名及类型，最大长度不超过200字符 */
  FileName?: string;
}

declare interface CreateVerifyReportRequest {
  /** 申请者类型 1:个人，2:企业 */
  ApplyCustomerType: string;
  /** 申请企业 or 自然人名称 */
  ApplyCustomerName: string;
  /** 验签申请经办人姓名 */
  ApplyName: string;
  /** 验签申请经办人电话 */
  ApplyMobile: string;
  /** 验签文件id */
  FileId: string;
  /** 验签申请经办人邮箱 */
  ApplyEmail?: string;
}

declare interface CreateVerifyReportResponse {
  /** 签名id */
  SignatureId?: string;
  /** code */
  Code?: string;
  /** message */
  Message?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVerifyReportRequest {
  /** 签名id */
  SignatureId: string;
}

declare interface DescribeVerifyReportResponse {
  /** 下载url */
  ReportUrl?: string;
  /** code */
  Code?: string;
  /** message */
  Message?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UploadFileRequest {
  /** 验签源文件信息列表 */
  FileInfos: FileInfo[];
}

declare interface UploadFileResponse {
  /** 文件id列表 */
  FileIds?: string[];
  /** 文件id总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Ca 腾讯云CA} */
declare interface Ca {
  (): Versions;
  /** 创建验证报告 {@link CreateVerifyReportRequest} {@link CreateVerifyReportResponse} */
  CreateVerifyReport(data: CreateVerifyReportRequest, config?: AxiosRequestConfig): AxiosPromise<CreateVerifyReportResponse>;
  /** 查询验签报告 {@link DescribeVerifyReportRequest} {@link DescribeVerifyReportResponse} */
  DescribeVerifyReport(data: DescribeVerifyReportRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVerifyReportResponse>;
  /** 文件上传 {@link UploadFileRequest} {@link UploadFileResponse} */
  UploadFile(data: UploadFileRequest, config?: AxiosRequestConfig): AxiosPromise<UploadFileResponse>;
}

export declare type Versions = ["2023-02-28"];

export default Ca;
