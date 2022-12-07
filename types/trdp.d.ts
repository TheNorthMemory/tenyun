/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 账号信息 */
declare interface AccountInfo {
  /** 用户账号类型：1-手机号；2-IMEI；3-IDFA；100-SSID类型 */
  AccountType: number;
  /** 通用账号信息，当AccountType为1、2、3、100时必填 */
  UniversalAccount?: UniversalAccountInfo;
}

/** 设备详情 */
declare interface DeviceDetailInfo {
  /** mac地址或唯一设备标识 */
  MacAddress?: string;
  /** 手机型号 */
  Model?: string;
  /** 操作系统(unknown，android，ios，windows) */
  OsSystem?: string;
  /** 操作系统版本 */
  OsSystemVersion?: string;
  /** 竞价底价 */
  BidFloor?: number;
  /** 设备版本 */
  DeviceVersion?: string;
  /** 设备制造商 */
  Maker?: string;
  /** 设备类型（PHONE,TABLET） */
  DeviceType?: string;
  /** 运营商；-1: 获取失败，0: 其他，1: 移动，2: 联通，3: 电信，4: 铁通 */
  Carrier?: string;
  /** 入网方式(wifi,5g,4g,3g,2g) */
  AccessMode?: string;
  /** 手机芯片信息 */
  PhoneChipInfo?: string;
  /** CPU 型号 */
  CpuModel?: string;
  /** CPU 核数 */
  CpuCore?: string;
  /** 内存容量，单位转换为 GB */
  Memory?: string;
  /** 系统语言 */
  Language?: string;
  /** 手机音量 */
  Volume?: string;
  /** 电池电量 */
  BatteryPower?: string;
  /** 屏幕分辨率宽，保留整数 */
  ResolutionWidth?: number;
  /** 屏幕分辨率高，保留整数 */
  ResolutionHeight?: number;
  /** 浏览器类型 */
  Ua?: string;
  /** 客户端应用 */
  App?: string;
  /** 应用包名 */
  AppPackageName?: string;
  /** 设备序列号Android设备 */
  SerialNumber?: string;
  /** netOperator MCC+MNCAndroid设备 */
  MobileCountryAndNetworkCode?: string;
  /** 设备品牌 “华为”“oppo”“小米”Android设备 */
  VendorId?: string;
  /** Android API等级Android设备 */
  AndroidApiLevel?: string;
  /** 屏幕亮度Android设备 */
  Brightness?: string;
  /** 蓝牙地址Android设备 */
  BluetoothAddress?: string;
  /** 基带版本Android设备 */
  BaseBandVersion?: string;
  /** kernel 版本Android设备 */
  KernelVersion?: string;
  /** 存储容量，单位转换为 GBAndroid设备 */
  Storage?: string;
  /** 软件包名Android设备 */
  PackageName?: string;
  /** app 版本号Android设备 */
  AppVersion?: string;
  /** app 显示名称Android设备 */
  AppName?: string;
  /** 是否 debug；0 为正常模式，1 为 debug 模式；其他值无效Android设备 */
  IsDebug?: string;
  /** 是否越狱；0 为正常，1 为越狱；其他值无效Android设备 */
  IsRoot?: string;
  /** 是否启动代理；0 为未开启，1 为开启；其他值无效Android设备 */
  IsProxy?: string;
  /** 是否模拟器；0 为未开启，1 为开启；其他值无效Android设备 */
  IsEmulator?: string;
  /** 充电状态；1-不在充电，2-USB充电，3-电源充电Android设备 */
  ChargeStatus?: string;
  /** 网络类型：2G/3G/4G/5G/Wi-Fi/WWAN/otherAndroid设备 */
  NetworkType?: string;
  /** Wi-Fi MAC地址Android设备 */
  WifiMac?: string;
  /** 设备名称 "xxx 的 iPhone"，"xxx's IPhone" 等等IOS设备 */
  DeviceName?: string;
  /** 开机时间IOS设备 */
  StartupTime?: string;
  /** 所在经度 */
  Lon?: string;
  /** 所在纬度 */
  Lat?: string;
}

/** 设备指纹信息 */
declare interface DeviceFingerprintInfo {
  /** 设备指纹Token */
  DeviceToken: string;
  /** 设备指纹的客户端SDK对应渠道 */
  SdkChannel: string;
}

/** 评估结果 */
declare interface EvaluationResult {
  /** SSID值 */
  SSID: string;
  /** 风险价值分 */
  Score: number | null;
  /** 风险标签，请参考官网风险类型账号风险1 账号信用低 账号近期存在因恶意被处罚历史，网络低活跃，被举报等因素11 疑似低活跃账号 账号活跃度与正常用户有差异2 垃圾账号 疑似批量注册小号，近期存在严重违规或大量举报21 疑似小号 账号有疑似线上养号，小号等行为22 疑似违规账号 账号曾有违规行为、曾被举报过、曾因违规被处罚过等3 无效账号 送检账号参数无法成功解析，请检查微信 Openid 是否有误/Appid与QQopenid无法关联/微信Openid权限是否有开通/手机号是否为中国大陆手机号4 黑名单 该账号在业务侧有过拉黑记录5 白名单 业务自行有添加过白名单记录行为风险101 批量操作存在 IP/设备/环境等因素的聚集性异常1011 疑似 IP 属性聚集 出现 IP 聚集1012 疑似设备属性聚集 出现设备聚集102 自动机 疑似自动机批量请求103 恶意行为-网赚 疑似网赚104 微信登录态无效 检查 WeChatAccessToken 参数，是否已经失效201 环境风险 环境异常 操作 IP/设备/环境存在异常。当前 IP 为非常用 IP 或恶意 IP 段2011 疑似非常用 IP 请求 当前请求 IP 非该账号常用 IP2012 疑似 IP 异常 使用 idc 机房 IP 或使用代理 IP 或使用恶意 IP 等205 非公网有效IP 传进来的 IP 地址为内网 IP 地址或者 IP 保留地址设备风险206 设备异常 该设备存在异常的使用行为2061 疑似非常用设备 当前请求的设备非该账号常用设备2062 疑似虚拟设备 请求设备为模拟器、脚本、云设备等虚拟设备2063 疑似群控设备 请求设备为猫池、手机墙等群控设备10201 设备处于开发者模式 来源于Android10202 设备疑似 Root 来源于Android10203 疑似应用被注 来源于Android10204 疑似应用被重打包 来源于Android10205 疑似使用 hook 技术 来源于Android10206 疑似应用被双开 来源于Android10207 疑似设备存在风险进程 来源于Android10208 疑似伪造地理位置 来源于Android10209 疑似使用 VPN 软件 来源于Android10210 疑似使用代理软件 来源于Android10211 疑似设备处于调试模式 来源于Android10212 疑似高危 ROM 来源于Android10213 疑似检测到系统劫持 来源于Android10003 疑似模拟器 来源于Android10301 疑似主流模拟器 来源于Android10302 疑似云模拟器 来源于Android10303 疑似开发板设备 来源于Android10004 疑似群控设备风险 来源于Android10401 疑似使用自动化软件 来源于Android10402 疑似群控自动化操作 来源于Android10501 疑似参数异常-IMEI 来源于Android10502 疑似参数异常-FP 来源于Android10504 疑似参数异常-IMSI 来源于Android10801 疑似存在刷量安装应用的行为 来源于Android10901 疑似多账号异常 来源于Android11001 疑似设备参数篡改 来源于Android11002 疑似存在风险软件 来源于Android11003 疑似应用被调试 来源于Android11100 疑似云真机 来源于Android25001 设备疑似越狱 来源于IOS25004 进程疑似有注入文件 来源于IOS25005 疑似使用代理软件 来源于IOS25006 疑似使用 VPN 软件 来源于IOS25007 疑似被 Hook 来源于IOS25008 疑似进程被调试 来源于IOS25009 疑似多开 来源于IOS25010 疑似改机 来源于IOS25011 疑似应用二次打包 来源于IOS25012 疑似模拟器 来源于IOS25013 疑似云真机 来源于IOS25014 疑似云模拟器 来源于IOS25015 疑似伪造地理位置 来源于IOS25016 疑似使用自动化脚本 来源于IOS25017 疑似群控自动化操作 来源于IOS30001 疑似虚拟浏览器 来源于H530002 疑似安装作弊插件 来源于H530003 疑似浏览器参数遭篡改 来源于H530004 疑似 JS 代码被篡改 来源于H530005 疑似 JS 被调试 来源于H530006 Cookies 被禁用 来源于H540001 疑似伪造地理位置 来源于小程序40002 疑似被调试 来源于小程序40003 疑似模拟器 来源于小程序 */
  RiskLabels: number[] | null;
}

/** 营销信息 */
declare interface MarketingInfo {
  /** 投放模式（0=PDB，1=PD，2=RTB，10=其他） */
  DeliveryMode?: number;
  /** 广告位类型 （0=前贴片，1=开屏广告，2=网页头部广告、3=网页中部广告、4=网页底部广告、5=悬浮广告、10=其它） */
  AdvertisingType?: number;
  /** 是否全屏插广告（0-否，1-是） */
  FullScreen?: number;
  /** 广告位宽度 */
  AdvertisingSpaceWidth?: number;
  /** 广告位高度 */
  AdvertisingSpaceHeight?: number;
  /** 网址 */
  Url?: string;
}

/** 通用账号信息 */
declare interface UniversalAccountInfo {
  /** 账号值：当账户类型为1时，填入手机号，如135****3695；当账户类型为2、3或100时，填入对应的值。 */
  AccountId: string;
}

/** 用户信息 */
declare interface UserInfo {
  /** 用户外网IP地址 */
  Ip: string;
  /** 来源渠道编码 */
  ChannelSource?: string;
  /** 用户登录平台。1：Android 2：iOS 3：H5 4：小程序 */
  Platform?: number;
  /** 姓名 */
  Name?: string;
  /** 年龄 */
  Age?: number;
  /** 性别：male（男）female（女） */
  Gender?: string;
  /** 身份证号 */
  ResidentIdentityCard?: string;
  /** 邮箱地址 */
  Email?: string;
  /** 用户地址 */
  Address?: string;
  /** 用户昵称 */
  Nickname?: string;
}

declare interface EvaluateUserRiskRequest {
  /** 账号信息 */
  Account: AccountInfo;
  /** 用户信息 */
  User: UserInfo;
  /** 模型ID */
  ModelId: string;
  /** 设备指纹信息 */
  DeviceFingerprint?: DeviceFingerprintInfo;
  /** 场景Code，不传默认活动防刷；e_activity_antirush；活动防刷场景e_login_protection；登录保护场景e_register_protection：注册保护场景 */
  SceneCode?: string;
  /** 设备详情 */
  DeviceDetail?: DeviceDetailInfo;
  /** 营销信息 */
  Marketing?: MarketingInfo;
}

declare interface EvaluateUserRiskResponse {
  /** 评估结果 */
  EvaluationResult: EvaluationResult | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

/** {@link Trdp 流量风险决策平台} */
declare interface Trdp {
  (): Versions;
  /** {@link EvaluateUserRisk 用户风险质量接口}({@link EvaluateUserRiskRequest 请求参数}): {@link EvaluateUserRiskResponse 返回参数} */
  EvaluateUserRisk(data: EvaluateUserRiskRequest, config?: AxiosRequestConfig): AxiosPromise<EvaluateUserRiskResponse>;
}

export declare type Versions = ["2022-07-26"];

export default Trdp;
