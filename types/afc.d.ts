/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** AntiFraudVipCryptoFilter– 业务入参 */
declare interface AntiFraudVipCryptoFilter {
  /** 约定用入参，默认不涉及默认BusinessSecurityData 与BusinessCrptoData 不传 */
  CryptoType?: string;
  /** 约定用入参，默认不涉及 */
  CryptoContent?: string;
}

/** AntiFraudVipFilter– 业务入参 */
declare interface AntiFraudVipFilter {
  /** 业务方账号 ID */
  CustomerUin: string;
  /** 业务方APPID */
  CustomerAppid: string;
  /** 身份证号注 1：下方 idCryptoType 为指定加密方式注 2：若 idNumber 加密则必传加密方式 */
  IdNumber: string;
  /** 手机号码（注：不需要带国家代码例如：13430421011）注 1：下方 phoneCryptoType 为指定加密方式:注 2：若 phoneNumber 加密则必传加密方式 */
  PhoneNumber: string;
  /** 业务场景 ID */
  Scene?: string;
  /** 默认不使用，业务方子账号，若接口使用密钥对应是子账号则必填 */
  CustomerSubUin?: string;
  /** 已获取约定标识则传 1；用于基于特定需求而传的标识字段注：有约定则是必传，若未传则查询接口失败 */
  Authorization?: string;
  /** 姓名注 ：不支持加密 */
  Name?: string;
  /** 银行卡号 */
  BankCardNumber?: string;
  /** 用户请求来源 IP */
  UserIp?: string;
  /** 国际移动设备识别码 */
  Imei?: string;
  /** ios 系统广告标示符 */
  Idfa?: string;
  /** 用户邮箱地址 */
  EmailAddress?: string;
  /** 用户住址 */
  Address?: string;
  /** MAC 地址 */
  Mac?: string;
  /** 国际移动用户识别码 */
  Imsi?: string;
  /** 关联的腾讯帐号 QQ：1；开放帐号微信： 2； */
  AccountType?: string;
  /** 可选的 QQ 或微信 openid */
  Uid?: string;
  /** qq 或微信分配给网站或应用的appid，用来唯一标识网站或应用 */
  AppIdU?: string;
  /** ＷＩＦＩＭＡＣ */
  WifiMac?: string;
  /** WIFI 服务集标识 */
  WifiSSID?: string;
  /** WIFI-BSSID */
  WifiBSSID?: string;
  /** 拓展字段类型 ID注：默认不填写，需要时天御侧将提供 */
  ExtensionId?: string;
  /** 拓展字段内容注：默认不填，需要时天御侧将提供 */
  ExtensionIn?: string;
  /** 业务 ID，默认不传 */
  BusinessId?: string;
  /** 身份证加密类型0：不加密（默认值）1：md52：sha2563：SM3注：若 idNumber 加密则必传加密方式 */
  IdCryptoType?: string;
  /** 手机号加密类型0：不加密（默认值）1：md5,2：sha2563：SM3注：若 phoneNumber 加密则必传加密方式 */
  PhoneCryptoType?: string;
  /** 姓名加密类型：——注：已经不支持加密，该字段存在是为了兼容可能历史客户版本；0：不加密（默认值）1：md5 */
  NameCryptoType?: string;
}

/** 反欺诈VIP查询结果 */
declare interface AntiFraudVipRecord {
  /** 公共错误码 */
  Code: string | null;
  /** 业务侧错误码。 */
  CodeDesc: string | null;
  /** 业务侧错误信息。 */
  Message: string | null;
  /** 表示该条记录能否查到：1 为能查到；-1 为查不到，此时 RiskScore 返回-1； */
  Found: string | null;
  /** 表示该条记录中的身份 ID 能否查到1 为能查到-1 为查不到 */
  IdFound: string | null;
  /** 当可查到时，返回 0~100 区间，值越高 欺诈可能性越大。当查不到时（即 found=-1），返回-1 */
  RiskScore: string | null;
  /** 扩展字段，对风险类型的说明。扩展字段并非必然出现。 */
  RiskInfo: SimpleKindRiskDetail[] | null;
  /** 默认出现，提供模型版本号说明及多模型返回需要时用到； */
  OtherModelScores: OtherModelScores[] | null;
  /** 表示请求时间，标准 sunix 时间戳，非必然出现 */
  PostTime: string | null;
  /** 拓展字段，非必然出现，和 ExtensionIn 对应；注：非必然出现，需要返回时天御侧将说明； */
  ExtensionOut: string | null;
}

/** 扩展字段，包含多个模型的结果 */
declare interface OtherModelScores {
  /** 模型类型 */
  ModelId: string;
  /** 该模型评分 */
  ModelScore: string;
}

/** 扩展字段，对风险类型的说明 */
declare interface RiskDetail {
  /** 风险码 */
  RiskCode: number;
}

/** 扩展字段，对风险类型的说明 */
declare interface SimpleKindRiskDetail {
  /** 风险码 */
  RiskCode?: string | null;
  /** 风险码详情 */
  RiskCodeValue?: string | null;
}

declare interface GetAntiFraudVipRequest {
  /** 默认不传，约定用原始业务入参(二选一BusinessSecurityData 或BusinessCryptoData)。 */
  BusinessSecurityData?: AntiFraudVipFilter;
  /** 默认不传，约定用密文业务入参(二选一BusinessSecurityData 或BusinessCryptoData)。 */
  BusinessCryptoData?: AntiFraudVipCryptoFilter;
}

declare interface GetAntiFraudVipResponse {
  /** 反欺诈评分接口结果 */
  Data: AntiFraudVipRecord;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface QueryAntiFraudVipRequest {
  /** 电话号码(五选二) */
  PhoneNumber?: string;
  /** Id号(五选二) */
  IdNumber?: string;
  /** 银行卡号(五选二) */
  BankCardNumber?: string;
  /** 用户请求来源 IP(五选二) */
  UserIp?: string;
  /** 国际移动设备识别码(五选二) */
  Imei?: string;
  /** ios 系统广告标示符(五选二) */
  Idfa?: string;
  /** 业务场景 ID，需要找技术对接 */
  Scene?: string;
  /** 姓名 */
  Name?: string;
  /** 用户邮箱地址 */
  EmailAddress?: string;
  /** 用户住址 */
  Address?: string;
  /** 关联的腾讯帐号 QQ：1；开放帐号微信： 2； */
  AccountType?: string;
  /** 可选的 QQ 或微信 openid */
  Uid?: string;
  /** qq 或微信分配给网站或应用的 appid，用来唯一标识网站或应用 */
  AppIdU?: string;
  /** WIFI MAC */
  WifiMac?: string;
  /** WIFI 服务集标识 */
  WifiSSID?: string;
  /** WIFI-BSSID */
  WifiBSSID?: string;
  /** 业务 ID，在多个业务中使用此服务，通过此ID 区分统计数据 */
  BusinessId?: string;
  /** Id加密类型0：不加密（默认值）1：md52：sha2563：SM3 */
  IdCryptoType?: string;
  /** 手机号加密类型0：不加密（默认值）1：md5, 2：sha2563：SM3 */
  PhoneCryptoType?: string;
  /** MAC 地址 */
  Mac?: string;
  /** 国际移动用户识别码 */
  Imsi?: string;
  /** 姓名加密类型0：不加密（默认值）1：md52：sha2563：SM3 */
  NameCryptoType?: string;
}

declare interface QueryAntiFraudVipResponse {
  /** 表示该条记录能否查到：1为能查到，-1为查不到 */
  Found?: number;
  /** 表示该条Id能否查到：1为能查到，-1为查不到 */
  IdFound?: number;
  /** 0~100;值越高 欺诈可能性越大 */
  RiskScore?: number;
  /** 扩展字段，对风险类型的说明 */
  RiskInfo?: RiskDetail[] | null;
  /** 业务侧错误码。成功时返回Success，错误时返回具体业务错误原因。 */
  CodeDesc?: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

/** {@link Afc 定制建模} */
declare interface Afc {
  (): Versions;
  /** {@link GetAntiFraudVip 反欺诈VIP评分接口}({@link GetAntiFraudVipRequest 请求参数}): {@link GetAntiFraudVipResponse 返回参数} */
  GetAntiFraudVip(data?: GetAntiFraudVipRequest, config?: AxiosRequestConfig): AxiosPromise<GetAntiFraudVipResponse>;
  /** {@link QueryAntiFraudVip 定制建模}({@link QueryAntiFraudVipRequest 请求参数}): {@link QueryAntiFraudVipResponse 返回参数} */
  QueryAntiFraudVip(data?: QueryAntiFraudVipRequest, config?: AxiosRequestConfig): AxiosPromise<QueryAntiFraudVipResponse>;
}

export declare type Versions = ["2020-02-26"];

export default Afc;
