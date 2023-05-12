/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 云资源配置详情 */
declare interface CertHostingInfo {
  /** 证书ID */
  CertId: string;
  /** 已替换的新证书ID */
  RenewCertId: string | null;
  /** 云资源托管 ，CDN或CLB：部分开启，CDN,CLB：已开启，null：未开启托管 */
  ResourceType: string | null;
  /** 创建时间 */
  CreateTime: string | null;
}

/** 获取证书列表（DescribeCertificates）返回参数键为 Certificates 数组下，key为CertificateExtra 的内容。 */
declare interface CertificateExtra {
  /** 证书可配置域名数量。 */
  DomainNumber: string | null;
  /** 原始证书 ID。 */
  OriginCertificateId: string | null;
  /** 重颁发证书原始 ID。 */
  ReplacedBy: string | null;
  /** 重颁发证书新 ID。 */
  ReplacedFor: string | null;
  /** 新订单证书 ID。 */
  RenewOrder: string | null;
  /** 是否是国密证书 */
  SMCert?: number | null;
}

/** 获取证书列表（DescribeCertificates）返回参数键为 Certificates 的内容。 */
declare interface Certificates {
  /** 用户 UIN。 */
  OwnerUin: string | null;
  /** 项目 ID。 */
  ProjectId: string | null;
  /** 证书来源。 */
  From: string | null;
  /** 证书套餐类型：null = 用户上传证书（没有套餐类型），1 = GeoTrust DV SSL CA - G3， 2 = TrustAsia TLS RSA CA， 3 = SecureSite 增强型企业版（EV Pro）， 4 = SecureSite 增强型（EV）， 5 = SecureSite 企业型专业版（OV Pro）， 6 = SecureSite 企业型（OV）， 7 = SecureSite 企业型（OV）通配符， 8 = Geotrust 增强型（EV）， 9 = Geotrust 企业型（OV）， 10 = Geotrust 企业型（OV）通配符， 11 = TrustAsia 域名型多域名 SSL 证书， 12 = TrustAsia 域名型（DV）通配符， 13 = TrustAsia 企业型通配符（OV）SSL 证书（D3）， 14 = TrustAsia 企业型（OV）SSL 证书（D3）， 15 = TrustAsia 企业型多域名 （OV）SSL 证书（D3）， 16 = TrustAsia 增强型 （EV）SSL 证书（D3）， 17 = TrustAsia 增强型多域名（EV）SSL 证书（D3）， 18 = GlobalSign 企业型（OV）SSL 证书， 19 = GlobalSign 企业型通配符 （OV）SSL 证书， 20 = GlobalSign 增强型 （EV）SSL 证书， 21 = TrustAsia 企业型通配符多域名（OV）SSL 证书（D3）， 22 = GlobalSign 企业型多域名（OV）SSL 证书， 23 = GlobalSign 企业型通配符多域名（OV）SSL 证书， 24 = GlobalSign 增强型多域名（EV）SSL 证书。 */
  PackageType: string | null;
  /** 证书类型：CA = 客户端证书，SVR = 服务器证书。 */
  CertificateType: string | null;
  /** 颁发者。 */
  ProductZhName: string | null;
  /** 主域名。 */
  Domain: string | null;
  /** 备注名称。 */
  Alias: string | null;
  /** 状态。0：审核中，1：已通过，2：审核失败，3：已过期，4：验证方式为 DNS_AUTO 类型的证书， 已添加DNS记录，5：企业证书，待提交，6：订单取消中，7：已取消，8：已提交资料， 待上传确认函，9：证书吊销中，10：已吊销，11：重颁发中，12：待上传吊销确认函，13：免费证书待提交资料状态，14：已退款， */
  Status: number | null;
  /** 证书扩展信息。 */
  CertificateExtra: CertificateExtra | null;
  /** 漏洞扫描状态：INACTIVE = 未开启，ACTIVE = 已开启 */
  VulnerabilityStatus: string | null;
  /** 状态信息。 */
  StatusMsg: string | null;
  /** 验证类型：DNS_AUTO = 自动DNS验证，DNS = 手动DNS验证，FILE = 文件验证，EMAIL = 邮件验证。 */
  VerifyType: string | null;
  /** 证书生效时间。 */
  CertBeginTime: string | null;
  /** 证书过期时间。 */
  CertEndTime: string | null;
  /** 证书有效期，单位（月）。 */
  ValidityPeriod: string | null;
  /** 创建时间。 */
  InsertTime: string | null;
  /** 证书 ID。 */
  CertificateId: string | null;
  /** 证书包含的多个域名（包含主域名）。 */
  SubjectAltName: string[] | null;
  /** 证书类型名称。 */
  PackageTypeName: string | null;
  /** 状态名称。 */
  StatusName: string | null;
  /** 是否为 VIP 客户。 */
  IsVip: boolean | null;
  /** 是否为 DV 版证书。 */
  IsDv: boolean | null;
  /** 是否为泛域名证书。 */
  IsWildcard: boolean | null;
  /** 是否启用了漏洞扫描功能。 */
  IsVulnerability: boolean | null;
  /** 是否可重颁发证书。 */
  RenewAble: boolean | null;
  /** 项目信息。 */
  ProjectInfo: ProjectInfo | null;
  /** 关联的云资源，暂不可用 */
  BoundResource: string[] | null;
  /** 是否可部署。 */
  Deployable: boolean | null;
  /** 标签列表 */
  Tags: Tags[] | null;
  /** 是否已忽略到期通知 */
  IsIgnore: boolean | null;
  /** 是否国密证书 */
  IsSM: boolean | null;
  /** 证书算法 */
  EncryptAlgorithm: string | null;
  /** 上传CA证书的加密算法 */
  CAEncryptAlgorithms: string[] | null;
  /** 上传CA证书的过期时间 */
  CAEndTimes: string[] | null;
  /** 上传CA证书的通用名称 */
  CACommonNames: string[] | null;
  /** 证书预审核信息 */
  PreAuditInfo: PreAuditInfo | null;
  /** 是否自动续费 */
  AutoRenewFlag: number | null;
}

/** 公司信息 */
declare interface CompanyInfo {
  /** 公司名称 */
  CompanyName: string;
  /** 公司ID */
  CompanyId: number;
  /** 公司所在国家 */
  CompanyCountry: string;
  /** 公司所在省份 */
  CompanyProvince: string;
  /** 公司所在城市 */
  CompanyCity: string;
  /** 公司所在详细地址 */
  CompanyAddress: string;
  /** 公司电话 */
  CompanyPhone: string;
  /** 类型 */
  IdType?: string | null;
  /** ID号 */
  IdNumber?: string | null;
}

/** 资源详情 */
declare interface DeployedResources {
  /** 证书ID */
  CertificateId: string;
  /** 数量 */
  Count: number;
  /** 资源标识:clb,cdn,live,waf,antiddos */
  Type: string;
  /** 不建议使用。字段返回和Resources相同。本字段后续只返回null */
  ResourceIds: string[] | null;
  /** 关联资源ID或关联域名。 */
  Resources: string[] | null;
}

/** 获取证书列表（DescribeCertificate）返回参数键为 DvAuthDetail 的内容。 */
declare interface DvAuthDetail {
  /** DV 认证密钥。 */
  DvAuthKey?: string | null;
  /** DV 认证值。 */
  DvAuthValue?: string | null;
  /** DV 认证值域名。 */
  DvAuthDomain: string | null;
  /** DV 认证值路径。 */
  DvAuthPath: string | null;
  /** DV 认证子域名。 */
  DvAuthKeySubDomain: string | null;
  /** DV 认证信息。 */
  DvAuths: DvAuths[] | null;
}

/** 返回参数键为 DvAuths 的内容。 */
declare interface DvAuths {
  /** DV 认证密钥。 */
  DvAuthKey: string | null;
  /** DV 认证值。 */
  DvAuthValue: string | null;
  /** DV 认证值域名。 */
  DvAuthDomain: string | null;
  /** DV 认证值路径。 */
  DvAuthPath: string | null;
  /** DV 认证子域名， */
  DvAuthSubDomain: string | null;
  /** DV 认证类型。 */
  DvAuthVerifyType: string | null;
}

/** 管理人信息 */
declare interface ManagerInfo {
  /** 状态: audit: 审核中 ok: 审核通过 invalid: 失效 expiring: 即将过期 expired: 已过期 */
  Status: string;
  /** 管理人姓名 */
  ManagerFirstName: string;
  /** 管理人姓名 */
  ManagerLastName: string;
  /** 管理人职位 */
  ManagerPosition: string;
  /** 管理人电话 */
  ManagerPhone: string;
  /** 管理人邮箱 */
  ManagerMail: string;
  /** 管理人所属部门 */
  ManagerDepartment: string;
  /** 创建时间 */
  CreateTime: string | null;
  /** 管理人域名数量 */
  DomainCount: number;
  /** 管理人证书数量 */
  CertCount: number;
  /** 管理人ID */
  ManagerId: number;
  /** 审核有效到期时间 */
  ExpireTime: string | null;
  /** 最近一次提交审核时间 */
  SubmitAuditTime: string | null;
  /** 审核通过时间 */
  VerifyTime: string | null;
  /** 具体审核状态信息 */
  StatusInfo: ManagerStatusInfo[] | null;
}

/** 管理人的四种审核状态 */
declare interface ManagerStatusInfo {
}

/** 证书操作日志。 */
declare interface OperationLog {
  /** 操作证书动作。 */
  Action: string;
  /** 操作时间。 */
  CreatedOn: string;
}

/** 权益包基本信息 */
declare interface PackageInfo {
  /** 权益包ID。 */
  PackageId: string;
  /** 权益包内权益点总量。 */
  Total: number;
  /** 权益包内权益点余量。 */
  Balance: number;
  /** 权益包名称。 */
  Type: string;
  /** 权益点是转入时，来源信息。 */
  SourceUin: number | null;
  /** 权益点状态。 */
  Status: string;
  /** 过期时间。 */
  ExpireTime: string;
  /** 更新时间。 */
  UpdateTime: string;
  /** 生成时间。 */
  CreateTime: string;
  /** 来源类型。 */
  SourceType: string;
  /** 转移信息。 */
  TransferOutInfos: PackageTransferOutInfo[] | null;
}

/** 权益包转出详情 */
declare interface PackageTransferOutInfo {
  /** 权益包ID。 */
  PackageId: string;
  /** 转移码。 */
  TransferCode: string;
  /** 本次转移点数。 */
  TransferCount: number;
  /** 转入的PackageID。 */
  ReceivePackageId: string | null;
  /** 本次转移过期时间。 */
  ExpireTime: string;
  /** 本次转移生成时间。 */
  CreateTime: string;
  /** 本次转移更新时间。 */
  UpdateTime: string;
  /** 转移状态。 */
  TransferStatus: string;
  /** 接收者uin。 */
  ReceiverUin: number | null;
  /** 接收时间。 */
  ReceiveTime: string | null;
}

/** 预审核信息列表 */
declare interface PreAuditInfo {
  /** 证书总年限 */
  TotalPeriod: number | null;
  /** 证书当前年限 */
  NowPeriod: number | null;
  /** 证书预审核管理人ID */
  ManagerId: string | null;
}

/** 获取证书列表（DescribeCertificates）返回参数键为 Certificates 下，key为 ProjectInfo 的内容。 */
declare interface ProjectInfo {
  /** 项目名称。 */
  ProjectName: string | null;
  /** 项目创建用户 UIN。 */
  ProjectCreatorUin: number | null;
  /** 项目创建时间。 */
  ProjectCreateTime: string | null;
  /** 项目信息简述。 */
  ProjectResume: string | null;
  /** 用户 UIN。 */
  OwnerUin: number | null;
  /** 项目 ID。 */
  ProjectId: string | null;
}

/** 返回参数键为 RevokeDomainValidateAuths 的内容。 */
declare interface RevokeDomainValidateAuths {
  /** DV 认证值路径。 */
  DomainValidateAuthPath: string | null;
  /** DV 认证 KEY。 */
  DomainValidateAuthKey: string | null;
  /** DV 认证值。 */
  DomainValidateAuthValue: string | null;
  /** DV 认证域名。 */
  DomainValidateAuthDomain: string | null;
}

/** 根证书 */
declare interface RootCertificates {
  /** 国密签名证书 */
  Sign: string | null;
  /** 国密加密证书 */
  Encrypt: string | null;
  /** 标准证书 */
  Standard: string | null;
}

/** 获取证书列表（DescribeCertificate）返回参数键为 SubmittedData 的内容。 */
declare interface SubmittedData {
  /** CSR 类型，（online = 在线生成CSR，parse = 粘贴 CSR）。 */
  CsrType?: string | null;
  /** CSR 内容。 */
  CsrContent?: string | null;
  /** 域名信息。 */
  CertificateDomain?: string | null;
  /** DNS 信息。 */
  DomainList?: string[] | null;
  /** 私钥密码。 */
  KeyPassword?: string | null;
  /** 企业或单位名称。 */
  OrganizationName?: string | null;
  /** 部门。 */
  OrganizationDivision?: string | null;
  /** 地址。 */
  OrganizationAddress?: string | null;
  /** 国家。 */
  OrganizationCountry?: string | null;
  /** 市。 */
  OrganizationCity?: string | null;
  /** 省。 */
  OrganizationRegion?: string | null;
  /** 邮政编码。 */
  PostalCode?: string | null;
  /** 座机区号。 */
  PhoneAreaCode?: string | null;
  /** 座机号码。 */
  PhoneNumber?: string | null;
  /** 管理员名。 */
  AdminFirstName?: string | null;
  /** 管理员姓。 */
  AdminLastName?: string | null;
  /** 管理员电话号码。 */
  AdminPhoneNum?: string | null;
  /** 管理员邮箱地址。 */
  AdminEmail?: string | null;
  /** 管理员职位。 */
  AdminPosition?: string | null;
  /** 联系人名。 */
  ContactFirstName?: string | null;
  /** 联系人姓。 */
  ContactLastName?: string | null;
  /** 联系人电话号码。 */
  ContactNumber?: string | null;
  /** 联系人邮箱地址， */
  ContactEmail?: string | null;
  /** 联系人职位。 */
  ContactPosition?: string | null;
  /** 验证类型。 */
  VerifyType?: string | null;
}

/** 标签 */
declare interface Tags {
  /** 标签键 */
  TagKey: string;
  /** 标签值 */
  TagValue: string;
}

declare interface ApplyCertificateRequest {
  /** 验证方式：DNS_AUTO = 自动DNS验证，DNS = 手动DNS验证，FILE = 文件验证。 */
  DvAuthMethod: string;
  /** 域名。 */
  DomainName: string;
  /** 项目 ID。 */
  ProjectId?: number;
  /** 证书类型，目前仅支持类型2。2 = TrustAsia TLS RSA CA。 */
  PackageType?: string;
  /** 邮箱。 */
  ContactEmail?: string;
  /** 手机。 */
  ContactPhone?: string;
  /** 有效期，默认12个月，目前仅支持12个月。 */
  ValidityPeriod?: string;
  /** 加密算法，仅支持 RSA。 */
  CsrEncryptAlgo?: string;
  /** 密钥对参数，仅支持2048。 */
  CsrKeyParameter?: string;
  /** CSR 的加密密码。 */
  CsrKeyPassword?: string;
  /** 备注名称。 */
  Alias?: string;
  /** 原证书 ID，用于重新申请。 */
  OldCertificateId?: string;
  /** 权益包ID，用于免费证书扩容包使用 */
  PackageId?: string;
  /** 签发后是否删除自动域名验证记录， 默认为否；仅域名为DNS_AUTO验证类型支持传参 */
  DeleteDnsAutoRecord?: boolean;
}

declare interface ApplyCertificateResponse {
  /** 证书 ID。 */
  CertificateId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CancelCertificateOrderRequest {
  /** 证书 ID。 */
  CertificateId: string;
}

declare interface CancelCertificateOrderResponse {
  /** 取消订单成功的证书 ID。 */
  CertificateId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CheckCertificateChainRequest {
  /** 待检查的证书链 */
  CertificateChain: string;
}

declare interface CheckCertificateChainResponse {
  /** true为通过检查，false为未通过检查。 */
  IsValid?: boolean;
  /** true为可信CA，false为不可信CA。 */
  IsTrustedCA?: boolean;
  /** 包含证书链中每一段证书的通用名称。 */
  Chains?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CommitCertificateInformationRequest {
  /** 证书 ID。 */
  CertificateId: string;
}

declare interface CommitCertificateInformationResponse {
  /** CA机构侧订单号。 */
  OrderId?: string;
  /** 证书状态：0 = 审核中，1 = 已通过，2 = 审核失败，3 = 已过期，4 = 已添加DNS记录，5 = 企业证书，待提交，6 = 订单取消中，7 = 已取消，8 = 已提交资料， 待上传确认函，9 = 证书吊销中，10 = 已吊销，11 = 重颁发中，12 = 待上传吊销确认函，13 = 免费证书待提交资料。 */
  Status?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CompleteCertificateRequest {
  /** 证书ID */
  CertificateId: string;
}

declare interface CompleteCertificateResponse {
  /** 证书ID */
  CertificateId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCertificateRequest {
  /** 证书商品ID，3 = SecureSite 增强型企业版（EV Pro）， 4 = SecureSite 增强型（EV）， 5 = SecureSite 企业型专业版（OV Pro）， 6 = SecureSite 企业型（OV）， 7 = SecureSite 企业型（OV）通配符， 8 = Geotrust 增强型（EV）， 9 = Geotrust 企业型（OV）， 10 = Geotrust 企业型（OV）通配符， 11 = TrustAsia 域名型多域名 SSL 证书， 12 = TrustAsia 域名型（DV）通配符， 13 = TrustAsia 企业型通配符（OV）SSL 证书（D3）， 14 = TrustAsia 企业型（OV）SSL 证书（D3）， 15 = TrustAsia 企业型多域名 （OV）SSL 证书（D3）， 16 = TrustAsia 增强型 （EV）SSL 证书（D3）， 17 = TrustAsia 增强型多域名（EV）SSL 证书（D3）， 18 = GlobalSign 企业型（OV）SSL 证书， 19 = GlobalSign 企业型通配符 （OV）SSL 证书， 20 = GlobalSign 增强型 （EV）SSL 证书， 21 = TrustAsia 企业型通配符多域名（OV）SSL 证书（D3）， 22 = GlobalSign 企业型多域名（OV）SSL 证书， 23 = GlobalSign 企业型通配符多域名（OV）SSL 证书， 24 = GlobalSign 增强型多域名（EV）SSL 证书，25 = Wotrus 域名型证书，26 = Wotrus 域名型多域名证书，27 = Wotrus 域名型通配符证书，28 = Wotrus 企业型证书，29 = Wotrus 企业型多域名证书，30 = Wotrus 企业型通配符证书，31 = Wotrus 增强型证书，32 = Wotrus 增强型多域名证书，33 = DNSPod 国密域名型证书，34 = DNSPod 国密域名型多域名证书，35 = DNSPod 国密域名型通配符证书，37 = DNSPod 国密企业型证书，38 = DNSPod 国密企业型多域名证书，39 = DNSPod 国密企业型通配符证书，40 = DNSPod 国密增强型证书，41 = DNSPod 国密增强型多域名证书，42 = TrustAsia 域名型通配符多域名证书。 */
  ProductId: number;
  /** 证书包含的域名数量 */
  DomainNum: number;
  /** 证书年限，当前只支持 1 年证书的购买 */
  TimeSpan: number;
}

declare interface CreateCertificateResponse {
  /** 证书ID列表 */
  CertificateIds: string[];
  /** 订单号列表 */
  DealIds: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteCertificateRequest {
  /** 证书 ID。 */
  CertificateId: string;
}

declare interface DeleteCertificateResponse {
  /** 删除结果（true：删除成功，false：删除失败） */
  DeleteResult?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteManagerRequest {
  /** 管理人ID */
  ManagerId: number;
}

declare interface DeleteManagerResponse {
  /** 管理人ID */
  ManagerId: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCertificateDetailRequest {
  /** 证书 ID。 */
  CertificateId: string;
}

declare interface DescribeCertificateDetailResponse {
  /** 用户 UIN。 */
  OwnerUin?: string | null;
  /** 项目 ID。 */
  ProjectId?: string | null;
  /** 证书来源：trustasia = 亚洲诚信，upload = 用户上传。 */
  From?: string | null;
  /** 证书类型：CA = 客户端证书，SVR = 服务器证书。 */
  CertificateType?: string | null;
  /** 证书套餐类型：null = 用户上传证书（没有套餐类型），1 = GeoTrust DV SSL CA - G3， 2 = TrustAsia TLS RSA CA， 3 = SecureSite 增强型企业版（EV Pro）， 4 = SecureSite 增强型（EV）， 5 = SecureSite 企业型专业版（OV Pro）， 6 = SecureSite 企业型（OV）， 7 = SecureSite 企业型（OV）通配符， 8 = Geotrust 增强型（EV）， 9 = Geotrust 企业型（OV）， 10 = Geotrust 企业型（OV）通配符， 11 = TrustAsia 域名型多域名 SSL 证书， 12 = TrustAsia 域名型（DV）通配符， 13 = TrustAsia 企业型通配符（OV）SSL 证书（D3）， 14 = TrustAsia 企业型（OV）SSL 证书（D3）， 15 = TrustAsia 企业型多域名 （OV）SSL 证书（D3）， 16 = TrustAsia 增强型 （EV）SSL 证书（D3）， 17 = TrustAsia 增强型多域名（EV）SSL 证书（D3）， 18 = GlobalSign 企业型（OV）SSL 证书， 19 = GlobalSign 企业型通配符 （OV）SSL 证书， 20 = GlobalSign 增强型 （EV）SSL 证书， 21 = TrustAsia 企业型通配符多域名（OV）SSL 证书（D3）， 22 = GlobalSign 企业型多域名（OV）SSL 证书， 23 = GlobalSign 企业型通配符多域名（OV）SSL 证书， 24 = GlobalSign 增强型多域名（EV）SSL 证书，25 = Wotrus 域名型证书，26 = Wotrus 域名型多域名证书，27 = Wotrus 域名型通配符证书，28 = Wotrus 企业型证书，29 = Wotrus 企业型多域名证书，30 = Wotrus 企业型通配符证书，31 = Wotrus 增强型证书，32 = Wotrus 增强型多域名证书，33 = DNSPod 国密域名型证书，34 = DNSPod 国密域名型多域名证书，35 = DNSPod 国密域名型通配符证书，37 = DNSPod 国密企业型证书，38 = DNSPod 国密企业型多域名证书，39 = DNSPod 国密企业型通配符证书，40 = DNSPod 国密增强型证书，41 = DNSPod 国密增强型多域名证书，42 = TrustAsia 域名型通配符多域名证书。 */
  PackageType?: string | null;
  /** 颁发者。 */
  ProductZhName?: string | null;
  /** 域名。 */
  Domain?: string | null;
  /** 备注名称。 */
  Alias?: string | null;
  /** 证书状态：0 = 审核中，1 = 已通过，2 = 审核失败，3 = 已过期，4 = 已添加DNS记录，5 = 企业证书，待提交，6 = 订单取消中，7 = 已取消，8 = 已提交资料， 待上传确认函，9 = 证书吊销中，10 = 已吊销，11 = 重颁发中，12 = 待上传吊销确认函，13 = 免费证书待提交资料。 */
  Status?: number | null;
  /** 状态信息。 */
  StatusMsg?: string | null;
  /** 验证类型：DNS_AUTO = 自动DNS验证，DNS = 手动DNS验证，FILE = 文件验证，EMAIL = 邮件验证。 */
  VerifyType?: string | null;
  /** 漏洞扫描状态。 */
  VulnerabilityStatus?: string | null;
  /** 证书生效时间。 */
  CertBeginTime?: string | null;
  /** 证书失效时间。 */
  CertEndTime?: string | null;
  /** 证书有效期：单位（月）。 */
  ValidityPeriod?: string | null;
  /** 申请时间。 */
  InsertTime?: string | null;
  /** 订单 ID。 */
  OrderId?: string | null;
  /** 证书扩展信息。 */
  CertificateExtra?: CertificateExtra | null;
  /** 证书私钥 */
  CertificatePrivateKey?: string | null;
  /** 证书公钥（即证书内容） */
  CertificatePublicKey?: string | null;
  /** DV 认证信息。 */
  DvAuthDetail?: DvAuthDetail | null;
  /** 漏洞扫描评估报告。 */
  VulnerabilityReport?: string | null;
  /** 证书 ID。 */
  CertificateId?: string | null;
  /** 证书类型名称。 */
  TypeName?: string | null;
  /** 状态描述。 */
  StatusName?: string | null;
  /** 证书包含的多个域名（不包含主域名，主域名使用Domain字段） */
  SubjectAltName?: string[] | null;
  /** 是否为付费证书。 */
  IsVip?: boolean | null;
  /** 是否为泛域名证书。 */
  IsWildcard?: boolean | null;
  /** 是否为 DV 版证书。 */
  IsDv?: boolean | null;
  /** 是否启用了漏洞扫描功能。 */
  IsVulnerability?: boolean | null;
  /** 提交的资料信息。 */
  SubmittedData?: SubmittedData | null;
  /** 是否可续费。 */
  RenewAble?: boolean | null;
  /** 是否可部署。 */
  Deployable?: boolean | null;
  /** 关联标签列表。 */
  Tags?: Tags[] | null;
  /** 根证书。 */
  RootCert?: RootCertificates | null;
  /** 国密加密证书 */
  EncryptCert?: string | null;
  /** 国密加密私钥 */
  EncryptPrivateKey?: string | null;
  /** 签名证书 SHA1指纹 */
  CertFingerprint?: string | null;
  /** 加密证书 SHA1指纹 （国密证书特有） */
  EncryptCertFingerprint?: string | null;
  /** 证书算法 */
  EncryptAlgorithm?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCertificateOperateLogsRequest {
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 请求日志数量，默认为20。 */
  Limit?: number;
  /** 开始时间，默认15天前。 */
  StartTime?: string;
  /** 结束时间，默认现在时间。 */
  EndTime?: string;
}

declare interface DescribeCertificateOperateLogsResponse {
  /** 当前查询条件日志总数。 */
  AllTotal?: number;
  /** 本次请求返回的日志数量。 */
  TotalCount?: number;
  /** 证书操作日志列表。 */
  OperateLogs?: OperationLog[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCertificateRequest {
  /** 证书 ID。 */
  CertificateId: string;
}

declare interface DescribeCertificateResponse {
  /** 用户 UIN。 */
  OwnerUin?: string | null;
  /** 项目 ID。 */
  ProjectId?: string | null;
  /** 证书来源：trustasia = 亚洲诚信，upload = 用户上传。 */
  From?: string | null;
  /** 证书类型：CA = 客户端证书，SVR = 服务器证书。 */
  CertificateType?: string | null;
  /** 证书套餐类型：1 = GeoTrust DV SSL CA - G3， 2 = TrustAsia TLS RSA CA， 3 = SecureSite 增强型企业版（EV Pro）， 4 = SecureSite 增强型（EV）， 5 = SecureSite 企业型专业版（OV Pro）， 6 = SecureSite 企业型（OV）， 7 = SecureSite 企业型（OV）通配符， 8 = Geotrust 增强型（EV）， 9 = Geotrust 企业型（OV）， 10 = Geotrust 企业型（OV）通配符， 11 = TrustAsia 域名型多域名 SSL 证书， 12 = TrustAsia 域名型（DV）通配符， 13 = TrustAsia 企业型通配符（OV）SSL 证书（D3）， 14 = TrustAsia 企业型（OV）SSL 证书（D3）， 15 = TrustAsia 企业型多域名 （OV）SSL 证书（D3）， 16 = TrustAsia 增强型 （EV）SSL 证书（D3）， 17 = TrustAsia 增强型多域名（EV）SSL 证书（D3）， 18 = GlobalSign 企业型（OV）SSL 证书， 19 = GlobalSign 企业型通配符 （OV）SSL 证书， 20 = GlobalSign 增强型 （EV）SSL 证书， 21 = TrustAsia 企业型通配符多域名（OV）SSL 证书（D3）， 22 = GlobalSign 企业型多域名（OV）SSL 证书， 23 = GlobalSign 企业型通配符多域名（OV）SSL 证书， 24 = GlobalSign 增强型多域名（EV）SSL 证书。 */
  PackageType?: string | null;
  /** 证书颁发者名称。 */
  ProductZhName?: string | null;
  /** 域名。 */
  Domain?: string | null;
  /** 备注名称。 */
  Alias?: string | null;
  /** 证书状态：0 = 审核中，1 = 已通过，2 = 审核失败，3 = 已过期，4 = 已添加DNS记录，5 = 企业证书，待提交，6 = 订单取消中，7 = 已取消，8 = 已提交资料， 待上传确认函，9 = 证书吊销中，10 = 已吊销，11 = 重颁发中，12 = 待上传吊销确认函。 */
  Status?: number | null;
  /** 状态信息。 */
  StatusMsg?: string | null;
  /** 验证类型：DNS_AUTO = 自动DNS验证，DNS = 手动DNS验证，FILE = 文件验证，EMAIL = 邮件验证。 */
  VerifyType?: string | null;
  /** 漏洞扫描状态。 */
  VulnerabilityStatus?: string | null;
  /** 证书生效时间。 */
  CertBeginTime?: string | null;
  /** 证书失效时间。 */
  CertEndTime?: string | null;
  /** 证书有效期：单位(月)。 */
  ValidityPeriod?: string | null;
  /** 申请时间。 */
  InsertTime?: string | null;
  /** 订单 ID。 */
  OrderId?: string | null;
  /** 证书扩展信息。 */
  CertificateExtra?: CertificateExtra | null;
  /** DV 认证信息。 */
  DvAuthDetail?: DvAuthDetail | null;
  /** 漏洞扫描评估报告。 */
  VulnerabilityReport?: string | null;
  /** 证书 ID。 */
  CertificateId?: string | null;
  /** 证书类型名称。 */
  PackageTypeName?: string | null;
  /** 状态描述。 */
  StatusName?: string | null;
  /** 证书包含的多个域名（包含主域名）。 */
  SubjectAltName?: string[] | null;
  /** 是否为 VIP 客户。 */
  IsVip?: boolean | null;
  /** 是否为泛域名证书。 */
  IsWildcard?: boolean | null;
  /** 是否为 DV 版证书。 */
  IsDv?: boolean | null;
  /** 是否启用了漏洞扫描功能。 */
  IsVulnerability?: boolean | null;
  /** 是否可重颁发证书。 */
  RenewAble?: boolean | null;
  /** 提交的资料信息。 */
  SubmittedData?: SubmittedData | null;
  /** 是否可部署。 */
  Deployable?: boolean | null;
  /** 标签列表 */
  Tags?: Tags[] | null;
  /** CA证书的所有加密方式 */
  CAEncryptAlgorithms?: string[] | null;
  /** CA证书的所有通用名称 */
  CACommonNames?: string[] | null;
  /** CA证书所有的到期时间 */
  CAEndTimes?: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCertificatesRequest {
  /** 分页偏移量，从0开始。 */
  Offset?: number;
  /** 每页数量，默认20。最大1000 */
  Limit?: number;
  /** 搜索关键词，可搜索证书 ID、备注名称、域名。例如： a8xHcaIs。 */
  SearchKey?: string;
  /** 证书类型：CA = 客户端证书，SVR = 服务器证书。 */
  CertificateType?: string;
  /** 项目 ID。 */
  ProjectId?: number;
  /** 按到期时间排序：DESC = 降序， ASC = 升序。 */
  ExpirationSort?: string;
  /** 证书状态：0 = 审核中，1 = 已通过，2 = 审核失败，3 = 已过期，4 = 已添加DNS记录，5 = 企业证书，待提交，6 = 订单取消中，7 = 已取消，8 = 已提交资料， 待上传确认函，9 = 证书吊销中，10 = 已吊销，11 = 重颁发中，12 = 待上传吊销确认函，13 = 免费证书待提交资料。 */
  CertificateStatus?: number[];
  /** 是否可部署，可选值：1 = 可部署，0 = 不可部署。 */
  Deployable?: number;
  /** 是否筛选上传托管的 1筛选，0不筛选 */
  Upload?: number;
  /** 是否筛选可续期证书 1筛选 0不筛选 */
  Renew?: number;
  /** 筛选来源， upload：上传证书， buy：腾讯云证书， 不传默认全部 */
  FilterSource?: string;
  /** 是否筛选国密证书。1:筛选 0:不筛选 */
  IsSM?: number;
  /** 筛选证书是否即将过期，传1是筛选，0不筛选 */
  FilterExpiring?: number;
}

declare interface DescribeCertificatesResponse {
  /** 总数量。 */
  TotalCount?: number | null;
  /** 列表。 */
  Certificates?: Certificates[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCompaniesRequest {
  /** 分页偏移量 */
  Offset?: number;
  /** 分页每页限制数 */
  Limit?: number;
  /** 公司ID */
  CompanyId?: number;
}

declare interface DescribeCompaniesResponse {
  /** 公司列表 */
  Companies: CompanyInfo[];
  /** 公司总数 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDeployedResourcesRequest {
  /** 证书ID */
  CertificateIds: string[];
  /** 资源类型:clb,cdn,live,waf,antiddos */
  ResourceType: string;
}

declare interface DescribeDeployedResourcesResponse {
  /** 资源详情 */
  DeployedResources?: DeployedResources[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeManagerDetailRequest {
  /** 管理人ID */
  ManagerId: number;
  /** 分页每页数量 */
  Limit?: number;
  /** 分页偏移量 */
  Offset?: number;
}

declare interface DescribeManagerDetailResponse {
  /** 状态: audit: 审核中 ok: 审核通过 invalid: 失效 expiring: 即将过期 expired: 已过期 */
  Status: string;
  /** 管理人姓名 */
  ManagerFirstName: string;
  /** 管理人邮箱 */
  ManagerMail: string;
  /** 联系人姓名 */
  ContactFirstName: string;
  /** 管理人姓名 */
  ManagerLastName: string;
  /** 联系人职位 */
  ContactPosition: string;
  /** 管理人职位 */
  ManagerPosition: string;
  /** 核验通过时间 */
  VerifyTime: string | null;
  /** 创建时间 */
  CreateTime: string;
  /** 核验过期时间 */
  ExpireTime: string | null;
  /** 联系人姓名 */
  ContactLastName: string;
  /** 管理人电话 */
  ManagerPhone: string;
  /** 联系人电话 */
  ContactPhone: string;
  /** 联系人邮箱 */
  ContactMail: string;
  /** 管理人所属部门 */
  ManagerDepartment: string;
  /** 管理人所属公司信息 */
  CompanyInfo: CompanyInfo;
  /** 管理人公司ID */
  CompanyId: number;
  /** 管理人ID */
  ManagerId: number;
  /** 审核状态详细信息 */
  StatusInfo: ManagerStatusInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeManagersRequest {
  /** 公司ID */
  CompanyId: number;
  /** 分页偏移量 */
  Offset?: number;
  /** 分页每页数量 */
  Limit?: number;
  /** 管理人姓名（将废弃），请使用SearchKey */
  ManagerName?: string;
  /** 模糊查询管理人邮箱（将废弃），请使用SearchKey */
  ManagerMail?: string;
  /** 根据管理人状态进行筛选，取值有'none' 未提交审核'audit', 亚信审核中'CAaudit' CA审核中'ok' 已审核'invalid' 审核失败'expiring' 即将过期'expired' 已过期 */
  Status?: string;
  /** 管理人姓/管理人名/邮箱/部门精准匹配 */
  SearchKey?: string;
}

declare interface DescribeManagersResponse {
  /** 公司管理人列表 */
  Managers: ManagerInfo[];
  /** 公司管理人总数 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePackagesRequest {
  /** 偏移量，默认0。 */
  Offset?: number;
  /** 限制数目，默认20。 */
  Limit?: number;
  /** 按状态筛选。 */
  Status?: string;
  /** 按过期时间升序或降序排列。 */
  ExpireTime?: string;
  /** 按权益包ID搜索。 */
  PackageId?: string;
  /** 按权益包类型搜索。 */
  Type?: string;
  /** 子产品编号 */
  Pid?: number;
}

declare interface DescribePackagesResponse {
  /** 权益包列表。 */
  Packages: PackageInfo[];
  /** 总条数。 */
  TotalCount: number;
  /** 权益点总余额。 */
  TotalBalance: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DownloadCertificateRequest {
  /** 证书 ID。 */
  CertificateId: string;
}

declare interface DownloadCertificateResponse {
  /** ZIP base64 编码内容，base64 解码后可保存为 ZIP 文件。 */
  Content?: string | null;
  /** MIME 类型：application/zip = ZIP 压缩文件。 */
  ContentType?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface HostCertificateRequest {
  /** 证书ID */
  CertificateId: string;
  /** 资源类型：目前仅限于CLB,CDN */
  ResourceType?: string[];
}

declare interface HostCertificateResponse {
  /** 云资源配置详情 */
  CertHostingInfo: CertHostingInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCertificateAliasRequest {
  /** 证书 ID。 */
  CertificateId: string;
  /** 备注名称。 */
  Alias?: string;
}

declare interface ModifyCertificateAliasResponse {
  /** 修改成功的证书 ID。 */
  CertificateId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCertificateProjectRequest {
  /** 需要修改所属项目的证书 ID 集合，最多100个证书。 */
  CertificateIdList: string[];
  /** 项目 ID。 */
  ProjectId: number;
}

declare interface ModifyCertificateProjectResponse {
  /** 修改所属项目成功的证书集合。 */
  SuccessCertificates?: string[] | null;
  /** 修改所属项目失败的证书集合。 */
  FailCertificates?: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCertificatesExpiringNotificationSwitchRequest {
  /** 证书ID列表。最多50个 */
  CertificateIds: string[];
  /** 0:不忽略通知。1:忽略通知 */
  SwitchStatus: number;
}

declare interface ModifyCertificatesExpiringNotificationSwitchResponse {
  /** 证书ID列表 */
  CertificateIds?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ReplaceCertificateRequest {
  /** 证书 ID。 */
  CertificateId: string;
  /** 验证类型：DNS_AUTO = 自动DNS验证（仅支持在腾讯云解析且解析状态正常的域名使用该验证类型），DNS = 手动DNS验证，FILE = 文件验证。 */
  ValidType: string;
  /** 类型，默认 Original。可选项：Original = 原证书 CSR，Upload = 手动上传，Online = 在线生成。 */
  CsrType?: string;
  /** CSR 内容。 */
  CsrContent?: string;
  /** KEY 密码。 */
  CsrkeyPassword?: string;
  /** 重颁发原因。 */
  Reason?: string;
}

declare interface ReplaceCertificateResponse {
  /** 证书 ID。 */
  CertificateId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RevokeCertificateRequest {
  /** 证书 ID。 */
  CertificateId: string;
  /** 吊销证书原因。 */
  Reason?: string;
}

declare interface RevokeCertificateResponse {
  /** 吊销证书域名验证信息。 */
  RevokeDomainValidateAuths?: RevokeDomainValidateAuths[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SubmitAuditManagerRequest {
  /** 管理人ID */
  ManagerId: number;
}

declare interface SubmitAuditManagerResponse {
  /** 管理人ID */
  ManagerId: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SubmitCertificateInformationRequest {
  /** 证书 ID。 */
  CertificateId: string;
  /** CSR 生成方式：online = 在线生成, parse = 手动上传。 */
  CsrType?: string;
  /** 上传的 CSR 内容。 */
  CsrContent?: string;
  /** 绑定证书的域名。 */
  CertificateDomain?: string;
  /** 上传的域名数组（多域名证书可以上传）。 */
  DomainList?: string[];
  /** 私钥密码（非必填）。 */
  KeyPassword?: string;
  /** 公司名称。 */
  OrganizationName?: string;
  /** 部门名称。 */
  OrganizationDivision?: string;
  /** 公司详细地址。 */
  OrganizationAddress?: string;
  /** 国家名称，如中国：CN 。 */
  OrganizationCountry?: string;
  /** 公司所在城市。 */
  OrganizationCity?: string;
  /** 公司所在省份。 */
  OrganizationRegion?: string;
  /** 公司邮编。 */
  PostalCode?: string;
  /** 公司座机区号。 */
  PhoneAreaCode?: string;
  /** 公司座机号码。 */
  PhoneNumber?: string;
  /** 证书验证方式。验证类型：DNS_AUTO = 自动DNS验证（仅支持在腾讯云解析且解析状态正常的域名使用该验证类型），DNS = 手动DNS验证，FILE = 文件验证。 */
  VerifyType?: string;
  /** 管理人名。 */
  AdminFirstName?: string;
  /** 管理人姓。 */
  AdminLastName?: string;
  /** 管理人手机号码。 */
  AdminPhoneNum?: string;
  /** 管理人邮箱地址。 */
  AdminEmail?: string;
  /** 管理人职位。 */
  AdminPosition?: string;
  /** 联系人名。 */
  ContactFirstName?: string;
  /** 联系人姓。 */
  ContactLastName?: string;
  /** 联系人邮箱地址。 */
  ContactEmail?: string;
  /** 联系人手机号码。 */
  ContactNumber?: string;
  /** 联系人职位。 */
  ContactPosition?: string;
}

declare interface SubmitCertificateInformationResponse {
  /** 证书 ID。 */
  CertificateId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UploadCertificateRequest {
  /** 证书内容。 */
  CertificatePublicKey: string;
  /** 私钥内容，证书类型为 SVR 时必填，为 CA 时可不填。 */
  CertificatePrivateKey?: string;
  /** 证书类型，默认 SVR。CA = CA证书，SVR = 服务器证书。 */
  CertificateType?: string;
  /** 备注名称。 */
  Alias?: string;
  /** 项目 ID。 */
  ProjectId?: number;
  /** 证书用途/证书来源。“CLB，CDN，WAF，LIVE，DDOS” */
  CertificateUse?: string;
  /** 相同的证书是否允许重复上传 */
  Repeatable?: boolean;
}

declare interface UploadCertificateResponse {
  /** 证书 ID。 */
  CertificateId?: string;
  /** 重复证书的ID */
  RepeatCertId?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UploadConfirmLetterRequest {
  /** 证书ID */
  CertificateId: string;
  /** base64编码后的证书确认函文件，格式应为jpg、jpeg、png、pdf，大小应在1kb与1.4M之间。 */
  ConfirmLetter: string;
}

declare interface UploadConfirmLetterResponse {
  /** 证书ID */
  CertificateId?: string;
  /** 是否成功 */
  IsSuccess?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UploadRevokeLetterRequest {
  /** 证书 ID。 */
  CertificateId: string;
  /** base64编码后的证书确认函文件，格式应为jpg、jpeg、png、pdf，大小应在1kb与1.4M之间。 */
  RevokeLetter: string;
}

declare interface UploadRevokeLetterResponse {
  /** 证书 ID。 */
  CertificateId: string;
  /** 是否成功。 */
  IsSuccess: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface VerifyManagerRequest {
  /** 管理人ID */
  ManagerId: number;
}

declare interface VerifyManagerResponse {
  /** 管理人ID */
  ManagerId: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Ssl SSL 证书} */
declare interface Ssl {
  (): Versions;
  /** 免费证书申请 {@link ApplyCertificateRequest} {@link ApplyCertificateResponse} */
  ApplyCertificate(data: ApplyCertificateRequest, config?: AxiosRequestConfig): AxiosPromise<ApplyCertificateResponse>;
  /** 取消证书订单 {@link CancelCertificateOrderRequest} {@link CancelCertificateOrderResponse} */
  CancelCertificateOrder(data: CancelCertificateOrderRequest, config?: AxiosRequestConfig): AxiosPromise<CancelCertificateOrderResponse>;
  /** 检查证书链完整性 {@link CheckCertificateChainRequest} {@link CheckCertificateChainResponse} */
  CheckCertificateChain(data: CheckCertificateChainRequest, config?: AxiosRequestConfig): AxiosPromise<CheckCertificateChainResponse>;
  /** 提交证书订单 {@link CommitCertificateInformationRequest} {@link CommitCertificateInformationResponse} */
  CommitCertificateInformation(data: CommitCertificateInformationRequest, config?: AxiosRequestConfig): AxiosPromise<CommitCertificateInformationResponse>;
  /** 主动触发证书验证 {@link CompleteCertificateRequest} {@link CompleteCertificateResponse} */
  CompleteCertificate(data: CompleteCertificateRequest, config?: AxiosRequestConfig): AxiosPromise<CompleteCertificateResponse>;
  /** 创建付费证书 {@link CreateCertificateRequest} {@link CreateCertificateResponse} */
  CreateCertificate(data: CreateCertificateRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCertificateResponse>;
  /** 删除证书 {@link DeleteCertificateRequest} {@link DeleteCertificateResponse} */
  DeleteCertificate(data: DeleteCertificateRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCertificateResponse>;
  /** 删除管理人 {@link DeleteManagerRequest} {@link DeleteManagerResponse} */
  DeleteManager(data: DeleteManagerRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteManagerResponse>;
  /** 获取证书信息 {@link DescribeCertificateRequest} {@link DescribeCertificateResponse} */
  DescribeCertificate(data: DescribeCertificateRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCertificateResponse>;
  /** 获取证书详情 {@link DescribeCertificateDetailRequest} {@link DescribeCertificateDetailResponse} */
  DescribeCertificateDetail(data: DescribeCertificateDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCertificateDetailResponse>;
  /** 获取证书操作日志 {@link DescribeCertificateOperateLogsRequest} {@link DescribeCertificateOperateLogsResponse} */
  DescribeCertificateOperateLogs(data?: DescribeCertificateOperateLogsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCertificateOperateLogsResponse>;
  /** 获取证书列表 {@link DescribeCertificatesRequest} {@link DescribeCertificatesResponse} */
  DescribeCertificates(data?: DescribeCertificatesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCertificatesResponse>;
  /** 查询公司列表 {@link DescribeCompaniesRequest} {@link DescribeCompaniesResponse} */
  DescribeCompanies(data?: DescribeCompaniesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCompaniesResponse>;
  /** 证书查询关联资源 {@link DescribeDeployedResourcesRequest} {@link DescribeDeployedResourcesResponse} */
  DescribeDeployedResources(data: DescribeDeployedResourcesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDeployedResourcesResponse>;
  /** 查询管理人详情 {@link DescribeManagerDetailRequest} {@link DescribeManagerDetailResponse} */
  DescribeManagerDetail(data: DescribeManagerDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeManagerDetailResponse>;
  /** 查询管理人列表 {@link DescribeManagersRequest} {@link DescribeManagersResponse} */
  DescribeManagers(data: DescribeManagersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeManagersResponse>;
  /** 获得权益包列表 {@link DescribePackagesRequest} {@link DescribePackagesResponse} */
  DescribePackages(data?: DescribePackagesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePackagesResponse>;
  /** 下载证书 {@link DownloadCertificateRequest} {@link DownloadCertificateResponse} */
  DownloadCertificate(data: DownloadCertificateRequest, config?: AxiosRequestConfig): AxiosPromise<DownloadCertificateResponse>;
  /** 云资源托管 {@link HostCertificateRequest} {@link HostCertificateResponse} */
  HostCertificate(data: HostCertificateRequest, config?: AxiosRequestConfig): AxiosPromise<HostCertificateResponse>;
  /** 修改证书备注 {@link ModifyCertificateAliasRequest} {@link ModifyCertificateAliasResponse} */
  ModifyCertificateAlias(data: ModifyCertificateAliasRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCertificateAliasResponse>;
  /** 修改证书所属项目 {@link ModifyCertificateProjectRequest} {@link ModifyCertificateProjectResponse} */
  ModifyCertificateProject(data: ModifyCertificateProjectRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCertificateProjectResponse>;
  /** 修改是否忽略证书到期通知 {@link ModifyCertificatesExpiringNotificationSwitchRequest} {@link ModifyCertificatesExpiringNotificationSwitchResponse} */
  ModifyCertificatesExpiringNotificationSwitch(data: ModifyCertificatesExpiringNotificationSwitchRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCertificatesExpiringNotificationSwitchResponse>;
  /** 重颁发证书 {@link ReplaceCertificateRequest} {@link ReplaceCertificateResponse} */
  ReplaceCertificate(data: ReplaceCertificateRequest, config?: AxiosRequestConfig): AxiosPromise<ReplaceCertificateResponse>;
  /** 吊销证书 {@link RevokeCertificateRequest} {@link RevokeCertificateResponse} */
  RevokeCertificate(data: RevokeCertificateRequest, config?: AxiosRequestConfig): AxiosPromise<RevokeCertificateResponse>;
  /** 重新提交审核管理人 {@link SubmitAuditManagerRequest} {@link SubmitAuditManagerResponse} */
  SubmitAuditManager(data: SubmitAuditManagerRequest, config?: AxiosRequestConfig): AxiosPromise<SubmitAuditManagerResponse>;
  /** 提交证书资料 {@link SubmitCertificateInformationRequest} {@link SubmitCertificateInformationResponse} */
  SubmitCertificateInformation(data: SubmitCertificateInformationRequest, config?: AxiosRequestConfig): AxiosPromise<SubmitCertificateInformationResponse>;
  /** 上传证书 {@link UploadCertificateRequest} {@link UploadCertificateResponse} */
  UploadCertificate(data: UploadCertificateRequest, config?: AxiosRequestConfig): AxiosPromise<UploadCertificateResponse>;
  /** 上传证书确认函 {@link UploadConfirmLetterRequest} {@link UploadConfirmLetterResponse} */
  UploadConfirmLetter(data: UploadConfirmLetterRequest, config?: AxiosRequestConfig): AxiosPromise<UploadConfirmLetterResponse>;
  /** 上传证书吊销确认函 {@link UploadRevokeLetterRequest} {@link UploadRevokeLetterResponse} */
  UploadRevokeLetter(data: UploadRevokeLetterRequest, config?: AxiosRequestConfig): AxiosPromise<UploadRevokeLetterResponse>;
  /** 重新核验管理人 {@link VerifyManagerRequest} {@link VerifyManagerResponse} */
  VerifyManager(data: VerifyManagerRequest, config?: AxiosRequestConfig): AxiosPromise<VerifyManagerResponse>;
}

export declare type Versions = ["2019-12-05"];

export default Ssl;
