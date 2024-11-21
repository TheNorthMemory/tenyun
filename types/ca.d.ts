/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 证书用户信息和身份鉴别信息。则该字段无需传入，默认为空。对电子签名者身份鉴别类型及措施有特殊展示要求的可使用该字段。 */
declare interface CertificateIdentityUser {
  /** 姓名 */
  Name?: string;
  /** 唯一身份id */
  IdentityUniqueId?: string;
  /** 身份证号 */
  IdCardNumber?: string;
  /** 身份鉴别类型1：授权金融机构身份鉴别 */
  IdentificationType?: string;
  /** 身份鉴别措施1、身份证鉴别2、银行卡鉴别3、支付账户密码验证4、人脸识别验证 */
  IdentificationMeasures?: string[];
}

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
  /** 证书用户身份及身份鉴别信息 */
  CertificateIdentityUsers?: CertificateIdentityUser[];
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
