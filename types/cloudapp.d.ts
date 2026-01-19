/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 元数据展示信息 */
declare interface DisplayMetadata {
  /** 展示的名称 */
  Name?: string;
  /** 展示的值 */
  Value?: string;
}

/** 描述键值对过滤器，用于条件过滤查询。例如过滤 ID、名称、状态等- 若存在多个 Filter 时，Filter间的关系为逻辑与（AND）关系。- 若同一个 Filter 存在多个 Values，同一 Filter 下 Values 间的关系为逻辑或（OR）关系。 */
declare interface Filter {
  /** 需要过滤的字段 */
  Name: string;
  /** 字段的过滤值 */
  Values: string[];
}

/** 表示应用实例的软件授权，包含颁发信息、激活信息等内容。 */
declare interface License {
  /** License ID */
  LicenseId?: string;
  /** 软件授权模式。枚举值说明Permanent永久授权。该授权不受有效期限制。Subscription订阅授权。授权如果过了有效期，则会进入过期状态。Accept验收期授权。用于需要验收的软件处于验收期间的授权，授权如果过了验收有效期，则会进入过期状态。 */
  LicenseMode?: string;
  /** 软件的授权状态。枚举值说明Issued已颁发，等待激活。一般来说，如果软件已经在运行，不会出现该状态。Active授权在有效期内，这是软件运行期间最常见的状态。Expired授权已过期。订阅类的软件授权有有效期，如果服务器时间已晚于有效期，则会进入过期状态。Isolated授权已隔离。有截止日期的授权，当用户授权到期时，先进入此状态，用户可以去续费，超过7天不续费则授权进入Destroyed状态。Destroyed授权已失效/销毁。用户如果退货软件，则授权会自动失效。 */
  LicenseStatus?: string;
  /** 软件供应方 ID。 */
  ProviderId?: number;
  /** 软件包 ID。 */
  SoftwarePackageId?: string;
  /** 软件包版本。 */
  SoftwarePackageVersion?: string;
  /** 被授权的用户 UIN。 */
  AuthorizedUserUin?: string;
  /** 被授权的应用实例 ID。 */
  AuthorizedCloudappId?: string;
  /** 被授权的角色 ID。 */
  AuthorizedCloudappRoleId?: string;
  /** 被授权的软件规格，具体字段请参考结构SaleParam */
  AuthorizedSpecification?: SaleParam[];
  /** 被授权的软件的计费模式。枚举值说明1线上计费，软件的授权从腾讯云线上购买，支持续费、退款等操作。2线下计费，软件的授权线下签订合同购买，定向客户交付，无法从线上续费和退款。4免费 */
  BillingMode?: number;
  /** 授权时长（单位由LifeSpanUnit确定，枚举值有Y年/M月/D日三种） */
  LifeSpan?: number;
  /** 授权颁发时间。 */
  IssueDate?: string;
  /** 授权激活时间，如从未激活则返回 null。 */
  ActivationDate?: string | null;
  /** 授权过期时间 */
  ExpirationDate?: string | null;
  /** 授权时长单位，枚举值有Y年/M月/D日三种 */
  LifeSpanUnit?: string;
  /** 授权的类型：Standard正式版/Development开发版/Trial体验版 */
  LicenseType?: string;
  /** 授权的层级：Master 主授权；Child 子授权/增强型授权 */
  LicenseLevel?: string;
  /** License 内容信息 */
  LicenseData?: LicenseData;
  /** License 颁发地址 */
  IssueURL?: string;
}

/** License 内容信息 */
declare interface LicenseData {
  /** License 文本内容。支持密钥、证书等文本形式，二进制的密钥需要伙伴进行 base64 转码 */
  Text: string;
  /** 部署服务输出信息，基于部署签发 License 时需要该参数。 */
  DeploymentOutput?: string;
  /** License 前端展示信息。key、value 形式，比如可传入，颁发机构：XXXX 有限公司 */
  Metadata?: DisplayMetadata[];
}

/** 表示商品 SKU 的单个售卖参数 */
declare interface SaleParam {
  /** 售卖参数标识 */
  ParamKey: string;
  /** 售卖参数的展示名称 */
  ParamKeyName: string | null;
  /** 参数 Id */
  ParamId?: string;
  /** 参数值 Id */
  ParamValueId?: string;
  /** 售卖参数值，当ParamType=Quant时，该值有可能为Null */
  ParamValue?: string | null;
  /** 售卖参数值的展示名称 */
  ParamValueName?: string | null;
  /** 售卖参数的类型，目前支持枚举类Enum/数量类Quant */
  ParamType?: string | null;
  /** 模块ID */
  ModuleId?: string;
  /** 模块key */
  ModuleKey?: string;
  /** 模块名称 */
  ModuleName?: string;
}

declare interface DescribeLicenseRequest {
  /** 可选过滤器 */
  Filters?: Filter[];
}

declare interface DescribeLicenseResponse {
  /** 针对上面raw的签名 */
  Token?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface VerifyLicenseRequest {
}

declare interface VerifyLicenseResponse {
  /** 软件的详细授权信息。 */
  License?: License;
  /** 当前请求服务端的时间戳，格式为RFC3339 */
  Timestamp?: string;
  /** 对License字段对应的json数据的签名 */
  Signature?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Cloudapp 云应用} */
declare interface Cloudapp {
  (): Versions;
  /** 获取license信息 {@link DescribeLicenseRequest} {@link DescribeLicenseResponse} */
  DescribeLicense(data?: DescribeLicenseRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLicenseResponse>;
  /** 从应用软件进程验证授权信息 {@link VerifyLicenseRequest} {@link VerifyLicenseResponse} */
  VerifyLicense(data?: VerifyLicenseRequest, config?: AxiosRequestConfig): AxiosPromise<VerifyLicenseResponse>;
}

export declare type Versions = ["2022-05-30"];

export default Cloudapp;
