/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 表示应用实例的软件授权，包含颁发信息、激活信息等内容。 */
declare interface License {
  /** License ID */
  LicenseId?: string;
  /** 软件授权模式。枚举值说明Permanent永久授权。该授权不受有效期限制。Subscription订阅授权。授权如果过了有效期，则会进入过期状态。 */
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
}

/** 表示商品 SKU 的单个售卖参数 */
declare interface SaleParam {
  /** 售卖参数标识 */
  ParamKey: string;
  /** 售卖参数值 */
  ParamValue: string;
  /** 售卖参数的展示名称 */
  ParamKeyName: string | null;
  /** 售卖参数值的展示名称 */
  ParamValueName: string | null;
}

declare interface VerifyLicenseRequest {
}

declare interface VerifyLicenseResponse {
  /** 软件的详细授权信息。 */
  License?: License;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Cloudapp 云应用} */
declare interface Cloudapp {
  (): Versions;
  /** 从应用软件进程验证授权信息 {@link VerifyLicenseRequest} {@link VerifyLicenseResponse} */
  VerifyLicense(data?: VerifyLicenseRequest, config?: AxiosRequestConfig): AxiosPromise<VerifyLicenseResponse>;
}

export declare type Versions = ["2022-05-30"];

export default Cloudapp;
