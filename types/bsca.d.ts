/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** CVSSv2.0详细信息。 */
declare interface CVSSV2Info {
  /** CVE评分。 */
  CVSS: number;
  /** AccessVector 攻击途径。取值范围：NETWORK 远程ADJACENT_NETWORK 近邻LOCAL 本地 */
  AccessVector: string;
  /** AccessComplexity 攻击复杂度。取值范围：HIGH 高MEDIUM 中LOW 低 */
  AccessComplexity: string;
  /** Authentication 身份验证。取值范围：MULTIPLE 多系统认证SINGLE 单系统认证NONE 无 */
  Authentication: string;
  /** ConfidentialityImpact 机密性影响。取值范围：NONE 无PARTIAL 部分COMPLETE 完整 */
  ConImpact: string;
  /** IntegrityImpact 完整性影响。取值范围：NONE 无PARTIAL 部分COMPLETE 完整 */
  IntegrityImpact: string;
  /** AvailabilityImpact 可用性影响。取值范围：NONE 无PARTIAL 部分COMPLETE 完整 */
  AvailabilityImpact: string;
}

/** Cvssv3.0详细信息。 */
declare interface CVSSV3Info {
  /** CVE评分。 */
  CVSS: number;
  /** AttackVector 攻击途径。取值范围：NETWORK 远程ADJACENT_NETWORK 近邻LOCAL 本地PHYSICAL 物理 */
  AttackVector: string;
  /** AttackComplexity 攻击复杂度。取值范围：HIGH 高LOW 低 */
  AttackComplexity: string;
  /** PrivilegesRequired 触发特权。取值范围：HIGH 高LOW 低NONE 无 */
  PrivilegesRequired: string;
  /** UserInteraction 交互必要性。取值范围：NONE 无REQUIRED 需要 */
  UserInteraction: string;
  /** Scope 绕过安全边界。取值范围：UNCHANGED 否CHANGED 能 */
  Scope: string;
  /** ConfidentialityImpact 机密性影响。取值范围：NONE 无LOW 低HIGH 高 */
  ConImpact: string;
  /** IntegrityImpact 完整性影响。取值范围：NONE 无LOW 低HIGH 高 */
  IntegrityImpact: string;
  /** AvailabilityImpact 可用性影响。取值范围：NONE 无LOW 低HIGH 高 */
  AvailabilityImpact: string;
}

/** 描述一个第三方组件的源信息。 */
declare interface Component {
  /** 第三方组件的PURL */
  PURL: PURL;
  /** 第三方组件的主页 */
  Homepage: string;
  /** 第三方组件的简介 */
  Summary: string;
  /** 第三方组件的别名列表 */
  NicknameList: string[] | null;
  /** 第三方组件的代码位置列表 */
  CodeLocationList: string[] | null;
  /** 第三方组件的许可证表达式 */
  LicenseExpression: string;
}

/** 与输入组件相关的漏洞信息摘要信息。 */
declare interface ComponentVulnerabilitySummary {
  /** 用于匹配漏洞的PURL */
  PURL: PURL | null;
  /** 该组件是否包含修复漏洞的官方补丁 */
  CanBeFixed: boolean;
  /** 修复漏洞的组件版本号 */
  FixedVersion: string;
  /** 漏洞影响的组件版本号 */
  AffectedVersion: string;
  /** 漏洞影响组件 */
  AffectedComponent: string;
  /** 漏洞在该产品中的风险等级CriticalHighMediumLow */
  RiskLevel: string;
}

/** 描述组件漏洞相关概览信息。 */
declare interface ComponentVulnerabilityUnion {
  /** 漏洞概览信息 */
  Summary: VulnerabilitySummary;
  /** 与组件相关的漏洞概览信息 */
  SummaryInComponent: ComponentVulnerabilitySummary;
}

/** 描述许可证的详细信息。 */
declare interface LicenseDetail {
  /** 许可证内容 */
  Content: string;
  /** 许可证允许信息列表 */
  ConditionSet: LicenseRestriction[];
  /** 许可证要求信息列表 */
  ForbiddenSet: LicenseRestriction[];
  /** 许可证禁止信息列表 */
  PermissionSet: LicenseRestriction[];
}

/** License约束信息。 */
declare interface LicenseRestriction {
  /** license约束的名称。 */
  Name: string;
  /** license约束的描述。 */
  Description: string;
}

/** 描述许可证的概览信息。 */
declare interface LicenseSummary {
  /** 许可证标识符 */
  Key: string;
  /** 许可证的SPDX标识符，见 https://spdx.org/licenses/ */
  SPDXKey: string;
  /** 许可证短名称 */
  ShortName: string;
  /** 许可证完整名称 */
  Name: string;
  /** License风险等级NotDefinedLowRiskMediumRiskHighRisk */
  Risk: string;
  /** 许可证来源URL */
  Source: string;
}

/** 许可证详细信息。 */
declare interface LicenseUnion {
  /** 许可证概览信息 */
  LicenseSummary: LicenseSummary;
  /** 许可证详细信息 */
  LicenseDetail: LicenseDetail;
}

/** PURL(Package URL)用于定位一个产品或组件，见 https://github.com/package-url/purl-spec。 */
declare interface PURL {
  /** 组件名称 */
  Name: string;
  /** 组件所属的类型，如：github, gitlab, generic, deb, rpm, maven 等 */
  Protocol?: string;
  /** 组件名的前缀名，如github和gitlab的用户名，deb的操作系统，maven包的group id等 */
  Namespace?: string;
  /** 修饰组件的额外属性 */
  Qualifiers?: Qualifier[] | null;
  /** 相对于组件包根位置的子目录 */
  Subpath?: string;
  /** 组件版本号 */
  Version?: string;
}

/** PURL下的Qualifier属性类型，用于定义第三方组件的额外属性，见 https://github.com/package-url/purl-spec。 */
declare interface Qualifier {
  /** 额外属性的名称。 */
  Key: string;
  /** 额外属性的值。 */
  Value: string;
}

/** 描述漏洞详细信息。 */
declare interface VulnerabilityDetail {
  /** 漏洞类别 */
  Category: string;
  /** 漏洞分类 */
  CategoryType: string;
  /** 漏洞描述 */
  Description: string;
  /** 漏洞官方解决方案 */
  OfficialSolution: string;
  /** 漏洞信息参考列表 */
  ReferenceList: string[];
  /** 漏洞防御方案 */
  DefenseSolution: string;
  /** 漏洞CVSSv2信息 */
  CVSSv2Info: CVSSV2Info | null;
  /** 漏洞CVSSv3信息 */
  CVSSv3Info: CVSSV3Info | null;
  /** 漏洞提交时间 */
  SubmitTime: string;
  /** CWE编号 */
  CWEID: string;
  /** 漏洞CVSSv2向量 */
  CVSSv2Vector: string;
  /** 漏洞CVSSv3向量 */
  CVSSv3Vector: string;
}

/** 描述漏洞的摘要信息。 */
declare interface VulnerabilitySummary {
  /** 漏洞ID */
  VulID: string;
  /** 漏洞所属CVE编号 */
  CVEID: string;
  /** 漏洞所属CNVD编号 */
  CNVDID: string;
  /** 漏洞所属CNNVD编号 */
  CNNVDID: string;
  /** 漏洞名称 */
  Name: string;
  /** 该漏洞是否是需重点关注的漏洞 */
  IsSuggest: boolean;
  /** 漏洞风险等级CriticalHighMediumLow */
  Severity: string;
}

/** 描述漏洞的详细信息。 */
declare interface VulnerabilityUnion {
  /** 漏洞概览信息 */
  Summary: VulnerabilitySummary;
  /** 漏洞详细信息 */
  Detail: VulnerabilityDetail;
}

declare interface DescribeKBComponentRequest {
  /** 组件的PURL */
  PURL: PURL;
}

declare interface DescribeKBComponentResponse {
  /** 匹配的组件信息 */
  Component: Component;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeKBComponentVulnerabilityRequest {
  /** 组件的PURL，其中Name和Version为必填字段 */
  PURL: PURL;
}

declare interface DescribeKBComponentVulnerabilityResponse {
  /** 漏洞信息列表 */
  VulnerabilityList: ComponentVulnerabilityUnion[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeKBLicenseRequest {
  /** License表达式 */
  LicenseExpression?: string;
}

declare interface DescribeKBLicenseResponse {
  /** 许可证列表 */
  LicenseList: LicenseUnion[] | null;
  /** 用于匹配的License表达式 */
  NormalizedLicenseExpression: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeKBVulnerabilityRequest {
  /** CVE ID列表（不能与Vul ID同时存在） */
  CVEID?: string[];
  /** Vul ID列表（不能与CVE ID 同时存在） */
  VulID?: string[];
}

declare interface DescribeKBVulnerabilityResponse {
  /** 漏洞详细信息列表 */
  VulnerabilityDetailList: VulnerabilityUnion[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface MatchKBPURLListRequest {
  /** SHA1。 */
  SHA1?: string;
}

declare interface MatchKBPURLListResponse {
  /** 组件列表。 */
  PURLList: PURL[];
  /** 是否命中数据库。 */
  Hit: boolean;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

/** {@link Bsca 二进制软件成分分析} */
declare interface Bsca {
  (): Versions;
  /** {@link DescribeKBComponent 查询知识库组件信息}({@link DescribeKBComponentRequest 请求参数}): {@link DescribeKBComponentResponse 返回参数} */
  DescribeKBComponent(data: DescribeKBComponentRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeKBComponentResponse>;
  /** {@link DescribeKBComponentVulnerability 查询知识库组件漏洞}({@link DescribeKBComponentVulnerabilityRequest 请求参数}): {@link DescribeKBComponentVulnerabilityResponse 返回参数} */
  DescribeKBComponentVulnerability(data: DescribeKBComponentVulnerabilityRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeKBComponentVulnerabilityResponse>;
  /** {@link DescribeKBLicense 查询知识库许可证信息}({@link DescribeKBLicenseRequest 请求参数}): {@link DescribeKBLicenseResponse 返回参数} */
  DescribeKBLicense(data?: DescribeKBLicenseRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeKBLicenseResponse>;
  /** {@link DescribeKBVulnerability 查询知识库漏洞详情列表}({@link DescribeKBVulnerabilityRequest 请求参数}): {@link DescribeKBVulnerabilityResponse 返回参数} */
  DescribeKBVulnerability(data?: DescribeKBVulnerabilityRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeKBVulnerabilityResponse>;
  /** {@link MatchKBPURLList 匹配知识库组件列表}({@link MatchKBPURLListRequest 请求参数}): {@link MatchKBPURLListResponse 返回参数} */
  MatchKBPURLList(data?: MatchKBPURLListRequest, config?: AxiosRequestConfig): AxiosPromise<MatchKBPURLListResponse>;
}

export declare type Versions = ["2021-08-11"];

export default Bsca;
