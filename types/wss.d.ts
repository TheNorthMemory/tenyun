/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 获取证书列表（SSLCertificate）返回参数键为 CertificateSet 的内容。 */
declare interface SSLCertificate {
  /** 所属账户 */
  OwnerUin: string | null;
  /** 项目ID */
  ProjectId: string | null;
  /** 证书来源：trustasia = 亚洲诚信， upload = 用户上传 */
  From: string | null;
  /** 证书类型 */
  Type: string | null;
  /** 证书类型（目前支持：CA = 客户端证书，SVR = 服务器证书） */
  CertType: string | null;
  /** 证书办法者名称 */
  ProductZhName: string | null;
  /** 主域名 */
  Domain: string | null;
  /** 别名 */
  Alias: string | null;
  /** 状态值 0：审核中，1：已通过，2：审核失败，3：已过期，4：已添加云解析记录，5：OV/EV 证书，待提交资料，6：订单取消中，7：已取消，8：已提交资料， 待上传确认函 */
  Status: number | null;
  /** 漏洞扫描状态：INACTIVE = 未开启，ACTIVE = 已开启 */
  VulnerabilityStatus: string | null;
  /** 状态信息 */
  StatusMsg: string | null;
  /** 验证类型 */
  VerifyType: string | null;
  /** 证书生效时间 */
  CertBeginTime: string | null;
  /** 证书过期时间 */
  CertEndTime: string | null;
  /** 证书过期时间 */
  ValidityPeriod: string | null;
  /** 创建时间 */
  InsertTime: string | null;
  /** 项目信息，ProjectId：项目ID，OwnerUin：项目所属的 uin（默认项目为0），Name：项目名称，CreatorUin：创建项目的 uin，CreateTime：项目创建时间，Info：项目说明 */
  ProjectInfo: SSLProjectInfo | null;
  /** 证书ID */
  Id: string | null;
  /** 证书包含的多个域名（包含主域名） */
  SubjectAltName: string[] | null;
  /** 证书类型名称 */
  TypeName: string | null;
  /** 状态名称 */
  StatusName: string | null;
  /** 是否为 VIP 客户 */
  IsVip: boolean | null;
  /** 是否我 DV 版证书 */
  IsDv: boolean | null;
  /** 是否为泛域名证书 */
  IsWildcard: boolean | null;
  /** 是否启用了漏洞扫描功能 */
  IsVulnerability: boolean | null;
  /** 证书 */
  Cert: string | null;
}

/** 获取证书列表接口（SSLProjectInfo）出参键为CertificateSet下的元素ProjectIno详情 */
declare interface SSLProjectInfo {
  /** 项目ID */
  ProjectId: string | null;
  /** 项目所属的 uin（默认项目为0） */
  OwnerUin: number | null;
  /** 项目名称 */
  Name: string | null;
  /** 创建项目的 uin */
  CreatorUin: number | null;
  /** 项目创建时间 */
  CreateTime: string | null;
  /** 项目说明 */
  Info: string | null;
}

declare interface DeleteCertRequest {
  /** 证书 ID，即通过 GetList 拿到的证书列表的 ID 字段。 */
  Id: string;
  /** 模块名称，应填 ssl。 */
  ModuleType: string;
}

declare interface DeleteCertResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeCertListRequest {
  /** 模块名称，应填 ssl。 */
  ModuleType: string;
  /** 页数，默认第一页。 */
  Offset?: number;
  /** 每页条数，默认每页20条。 */
  Limit?: number;
  /** 搜索关键字。 */
  SearchKey?: string;
  /** 证书类型（目前支持:CA=客户端证书,SVR=服务器证书）。 */
  CertType?: string;
  /** 证书ID。 */
  Id?: string;
  /** 是否同时获取证书内容。 */
  WithCert?: string;
  /** 如传，则只返回可以给该域名使用的证书。 */
  AltDomain?: string;
}

declare interface DescribeCertListResponse {
  /** 总数量。 */
  TotalCount?: number;
  /** 列表。 */
  CertificateSet?: SSLCertificate[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UploadCertRequest {
  /** 证书内容。 */
  Cert: string;
  /** 证书类型（目前支持：CA 为客户端证书，SVR 为服务器证书）。 */
  CertType: string;
  /** 项目ID，详见用户指南的 [项目与标签](https://cloud.tencent.com/document/product/598/32738)。 */
  ProjectId: string;
  /** 模块名称，应填 ssl。 */
  ModuleType: string;
  /** 证书私钥，certType=SVR 时必填。 */
  Key?: string;
  /** 证书备注。 */
  Alias?: string;
}

declare interface UploadCertResponse {
  /** 证书ID。 */
  Id?: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

/** SSL证书管理服务 */
declare interface Wss {
  (): Versions;
  /** 删除证书 */
  DeleteCert(data: DeleteCertRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCertResponse>;
  /** 获取证书列表 */
  DescribeCertList(data: DescribeCertListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCertListResponse>;
  /** 上传证书 */
  UploadCert(data: UploadCertRequest, config?: AxiosRequestConfig): AxiosPromise<UploadCertResponse>;
}

export declare type Versions = ["2018-04-26"];

export default Wss;
