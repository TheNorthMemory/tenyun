/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 签署人信息 */
declare interface SignInfo {
  /** 账户ID */
  AccountResId: string;
  /** 授权时间（上传合同可不传该参数） */
  AuthorizationTime?: string;
  /** 授权IP地址（上传合同可不传该参数） */
  Location?: string;
  /** 签章ID */
  SealId?: string;
  /** 签名图片，优先级比SealId高 */
  ImageData?: string;
  /** 默认值：1 表示RSA证书， 2 表示国密证书， 参数不传时默认为1 */
  CertType?: number;
  /** 签名域的标签值 */
  SignLocation?: string;
}

/** 签署关键字信息 */
declare interface SignKeyword {
  /** 关键字 */
  Keyword: string;
  /** X轴偏移坐标 */
  OffsetCoordX: string;
  /** Y轴偏移坐标 */
  OffsetCoordY: string;
  /** 签章图片宽度 */
  ImageWidth: string;
  /** 签章图片高度 */
  ImageHeight: string;
}

/** 签署坐标对象 */
declare interface SignLocation {
  /** 签名域页数 */
  SignOnPage: string;
  /** 签名域左下角X轴坐标轴 */
  SignLocationLBX: string;
  /** 签名域左下角Y轴坐标轴 */
  SignLocationLBY: string;
  /** 签名域右上角X轴坐标轴 */
  SignLocationRUX: string;
  /** 签名域右上角Y轴坐标轴 */
  SignLocationRUY: string;
}

declare interface CheckVcodeRequest {
  /** 模块名VerifyCode */
  Module: string;
  /** 操作名CheckVcode */
  Operation: string;
  /** 帐号ID */
  AccountResId: string;
  /** 合同ID */
  ContractResId: string;
  /** 验证码 */
  VerifyCode: string;
}

declare interface CheckVcodeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateContractByUploadRequest {
  /** 模块名ContractMng */
  Module: string;
  /** 操作名CreateContractByUpload */
  Operation: string;
  /** 签署人信息 */
  SignInfos: SignInfo[];
  /** 合同上传链接地址 */
  ContractFile: string;
  /** 合同名称 */
  ContractName: string;
  /** 备注 */
  Remarks?: string;
  /** 合同发起方腾讯云帐号ID（由平台自动填写） */
  Initiator?: string;
  /** 合同长时间未签署的过期时间 */
  ExpireTime?: string;
}

declare interface CreateContractByUploadResponse {
  /** 任务ID */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateEnterpriseAccountRequest {
  /** 模块名AccountMng */
  Module: string;
  /** 操作名CreateEnterpriseAccount */
  Operation: string;
  /** 企业用户名称 */
  Name: string;
  /** 企业用户证件类型，8代表营业执照，详情请见常见问题 */
  IdentType: number;
  /** 企业用户营业执照号码 */
  IdentNo: string;
  /** 企业联系人手机号 */
  MobilePhone: string;
  /** 经办人姓名 */
  TransactorName: string;
  /** 经办人证件类型，0代表身份证 */
  TransactorIdentType: number;
  /** 经办人证件号码 */
  TransactorIdentNo: string;
  /** 经办人手机号 */
  TransactorPhone: string;
  /** 企业联系人邮箱 */
  Email?: string;
}

declare interface CreateEnterpriseAccountResponse {
  /** 帐号ID */
  AccountResId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreatePersonalAccountRequest {
  /** 模块名AccountMng */
  Module: string;
  /** 操作名CreatePersonalAccount */
  Operation: string;
  /** 个人用户姓名 */
  Name: string;
  /** 个人用户证件类型，0代表身份证，详情请见常见问题 */
  IdentType: number;
  /** 个人用户证件号码 */
  IdentNo: string;
  /** 个人用户手机号 */
  MobilePhone: string;
}

declare interface CreatePersonalAccountResponse {
  /** 账号ID */
  AccountResId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateSealRequest {
  /** 模块名SealMng */
  Module: string;
  /** 操作名CreateSeal */
  Operation: string;
  /** 帐号ID */
  AccountResId: string;
  /** 签章链接，图片必须为png格式 */
  ImgUrl: string;
  /** 图片数据，base64编码 */
  ImgData?: string;
}

declare interface CreateSealResponse {
  /** 签章ID */
  SealResId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteAccountRequest {
  /** 模块名AccountMng */
  Module: string;
  /** 操作名DeleteAccount */
  Operation: string;
  /** 帐号ID列表 */
  AccountList: string[];
}

declare interface DeleteAccountResponse {
  /** 删除成功帐号ID列表 */
  DelSuccessList?: string[];
  /** 删除失败帐号ID列表 */
  DelFailedList?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteSealRequest {
  /** 模块名SealMng */
  Module: string;
  /** 操作名DeleteSeal */
  Operation: string;
  /** 帐号ID */
  AccountResId: string;
  /** 签章ID */
  SealResId: string;
}

declare interface DeleteSealResponse {
  /** 签章ID */
  SealResId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTaskStatusRequest {
  /** 模块名CommonMng */
  Module: string;
  /** 操作名DescribeTaskStatus */
  Operation: string;
  /** 任务ID */
  TaskId: number;
}

declare interface DescribeTaskStatusResponse {
  /** 任务结果 */
  TaskResult?: string;
  /** 任务类型，010代表合同上传结果，020代表合同下载结果 */
  TaskType?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DownloadContractRequest {
  /** 模块名ContractMng */
  Module: string;
  /** 操作名DownloadContract */
  Operation: string;
  /** 合同ID */
  ContractResId: string;
}

declare interface DownloadContractResponse {
  /** 任务ID */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SendVcodeRequest {
  /** 模块名VerifyCode */
  Module: string;
  /** 操作名SendVcode */
  Operation: string;
  /** 合同ID */
  ContractResId: string;
  /** 帐号ID */
  AccountResId: string;
}

declare interface SendVcodeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SignContractByCoordinateRequest {
  /** 模块名ContractMng */
  Module: string;
  /** 操作名SignContractByCoordinate */
  Operation: string;
  /** 合同ID */
  ContractResId: string;
  /** 帐户ID */
  AccountResId: string;
  /** 签署坐标，坐标原点在文件左下角，坐标单位为磅，坐标不得超过合同文件边界 */
  SignLocations: SignLocation[];
  /** 授权时间（由平台自动填充） */
  AuthorizationTime?: string;
  /** 授权IP地址（由平台自动填充） */
  Position?: string;
  /** 签章ID */
  SealResId?: string;
  /** 选用证书类型：1 表示RSA证书， 2 表示国密证书， 参数不传时默认为1 */
  CertType?: number;
  /** 签名图片，base64编码 */
  ImageData?: string;
}

declare interface SignContractByCoordinateResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SignContractByKeywordRequest {
  /** 模块名ContractMng */
  Module: string;
  /** 操作名SignContractByKeyword */
  Operation: string;
  /** 合同ID */
  ContractResId: string;
  /** 账户ID */
  AccountResId: string;
  /** 签署关键字，偏移坐标原点为关键字中心 */
  SignKeyword: SignKeyword;
  /** 授权时间（由平台自动填充） */
  AuthorizationTime?: string;
  /** 授权IP地址（由平台自动填充） */
  Position?: string;
  /** 签章ID */
  SealResId?: string;
  /** 选用证书类型：1 表示RSA证书， 2 表示国密证书， 参数不传时默认为1 */
  CertType?: number;
  /** 签名图片，base64编码 */
  ImageData?: string;
}

declare interface SignContractByKeywordResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Ds 文档服务} */
declare interface Ds {
  (): Versions;
  /** 检测验证码 {@link CheckVcodeRequest} {@link CheckVcodeResponse} */
  CheckVcode(data: CheckVcodeRequest, config?: AxiosRequestConfig): AxiosPromise<CheckVcodeResponse>;
  /** 通过上传创建合同 {@link CreateContractByUploadRequest} {@link CreateContractByUploadResponse} */
  CreateContractByUpload(data: CreateContractByUploadRequest, config?: AxiosRequestConfig): AxiosPromise<CreateContractByUploadResponse>;
  /** 企业开户 {@link CreateEnterpriseAccountRequest} {@link CreateEnterpriseAccountResponse} */
  CreateEnterpriseAccount(data: CreateEnterpriseAccountRequest, config?: AxiosRequestConfig): AxiosPromise<CreateEnterpriseAccountResponse>;
  /** 个人开户 {@link CreatePersonalAccountRequest} {@link CreatePersonalAccountResponse} */
  CreatePersonalAccount(data: CreatePersonalAccountRequest, config?: AxiosRequestConfig): AxiosPromise<CreatePersonalAccountResponse>;
  /** 新增签章 {@link CreateSealRequest} {@link CreateSealResponse} */
  CreateSeal(data: CreateSealRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSealResponse>;
  /** 删除帐号 {@link DeleteAccountRequest} {@link DeleteAccountResponse} */
  DeleteAccount(data: DeleteAccountRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAccountResponse>;
  /** 删除签章 {@link DeleteSealRequest} {@link DeleteSealResponse} */
  DeleteSeal(data: DeleteSealRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteSealResponse>;
  /** 获取任务状态 {@link DescribeTaskStatusRequest} {@link DescribeTaskStatusResponse} */
  DescribeTaskStatus(data: DescribeTaskStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTaskStatusResponse>;
  /** 下载合同 {@link DownloadContractRequest} {@link DownloadContractResponse} */
  DownloadContract(data: DownloadContractRequest, config?: AxiosRequestConfig): AxiosPromise<DownloadContractResponse>;
  /** 发送验证码 {@link SendVcodeRequest} {@link SendVcodeResponse} */
  SendVcode(data: SendVcodeRequest, config?: AxiosRequestConfig): AxiosPromise<SendVcodeResponse>;
  /** 按坐标签署合同 {@link SignContractByCoordinateRequest} {@link SignContractByCoordinateResponse} */
  SignContractByCoordinate(data: SignContractByCoordinateRequest, config?: AxiosRequestConfig): AxiosPromise<SignContractByCoordinateResponse>;
  /** 按关键字签署合同 {@link SignContractByKeywordRequest} {@link SignContractByKeywordResponse} */
  SignContractByKeyword(data: SignContractByKeywordRequest, config?: AxiosRequestConfig): AxiosPromise<SignContractByKeywordResponse>;
}

export declare type Versions = ["2018-05-23"];

export default Ds;
