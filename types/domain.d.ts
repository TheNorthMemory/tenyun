/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 用于域名预释放详情页面 */
declare interface AuctionInfo {
  /** 竞拍人 */
  Bidder?: string;
  /** 竞拍时间 */
  AuctionTime?: string;
  /** 竞拍价格 单位元 */
  AuctionPrice?: number;
  /** 状态 up: 领先 down: 落后 */
  Status?: string;
}

/** 批量任务状态 */
declare interface BatchStatus {
  /** 批量任务id */
  LogId?: number;
  /** 批量任务状态 doing：进行中 success：成功 failed：失败 partial_success：部分成功 */
  Status?: string;
  /** 批量任务类型new：注册域名renew：续费域名batch_transfer_prohibition_on：开启禁止转移锁batch_transfer_prohibition_off：关闭禁止转移锁batch_update_prohibition_on：开启禁止更新锁batch_update_prohibition_off：关闭禁止更新锁batch_modify_owner：域名转移batch_modify_domain_info：域名信息修改batch_transfer_in：域名转入batch_cancel_transfer_out：域名取消转出 */
  BatchAction?: string;
}

/** 我预定的域名结构体。 */
declare interface BiddingAppointResult {
  /** 预约ID */
  BusinessID?: string;
  /** 域名 */
  Domain?: string;
  /** 预定价格 单位元 */
  AppointPrice?: number;
  /** 预约保证金 单位元 */
  AppointBondPrice?: number;
  /** 预约结束时间 */
  AppointEndTime?: string;
  /** 预约人数 */
  AppointNum?: number;
  /** 1 已预约，2 竞价中，3 等待出价 4 竞价失败 5 等待支付 6 等待转移，7 转移中 8 交易成功 9 预约持有者赎回 10 竞价持有者赎回 11 其他阶段持有者赎回 12 违约 */
  Status?: number;
}

/** 我竞价的域名结构体。 */
declare interface BiddingResult {
  /** 预约ID */
  BusinessID?: string;
  /** 域名 */
  Domain?: string;
  /** 当前价格 单位元 */
  CurrentPrice?: number;
  /** 当前用户昵称 */
  CurrentNickname?: string;
  /** 我的出价 单位元 */
  BiddingPrice?: number;
  /** 竞价保证金 单位元 */
  BiddingBondPrice?: number;
  /** 竞价结束时间 */
  BiddingEndTime?: string;
  /** 竞价标识，1 领先，2 落后 */
  BiddingFlag?: number;
  /** 出价次数 */
  BiddingNum?: number;
  /** 2 竞价中 3 等待出价 4 竞价失败 10 竞价持有者赎回 */
  Status?: number;
}

/** 我得标的域名结构体。 */
declare interface BiddingSuccessfulResult {
  /** 支付结束时间格式:YYYY-MM-DD HH:mm:ss */
  PayEndTime?: string;
}

/** 认证资料信息 */
declare interface CertificateInfo {
  /** 证件号码。 */
  CertificateCode: string;
  /** 证件类型。SFZ: 身份证。HZ: 护照。TXZ: 中国港澳居民来往内地通行证。TWSFZ: 中国台湾居民来往大陆通行证。GWSFZ: 外国人永久居留身份证。ORG: 组织机构代码证YYZZ: 工商营业执照。TYDMZ: 统一社会信用代码证书。BDDH: 部队代号JDXKZ: 军队单位对外有偿服务许可证。SYZS: 事业单位法定代表人证书。GWCZDJZ: 外国企业常驻代表机构登记证。STDJZ: 社会团体法定代表人登记证书。ZJDJZ: 宗教活动场所登记证。MBDJZ: 民办非企业单位登记证书。JJDJZ: 基金会法定代表人登记证书。LSXKZ: 律师事务所执业许可证。GWZHDJZ: 外国在华文化中心登记证。GWLYDJZ: 外国政府旅游部门常驻代表机构批准登记证。SFXKZ: 司法鉴定许可证GWJGZJ: 外国机构证件。SHFWJGZ: 社会服务机构登记证书。MBXXXKZ: 民办学校办学许可证。YLJGXKZ: 医疗机构执业许可证。GAJZZ: 中国港澳居住证。TWJZZ: 中国台湾居住证。QTTYDM: 其他-统一社会信用代码证书。GZJGZY: 公证机构执业证。 */
  CertificateType: string;
  /** 证件照片地址。 */
  ImgUrl: string;
  /** 原始照片地址 */
  OriginImgUrl?: string;
  /** 联系人证件号码。 */
  RegistrantCertificateCode?: string;
  /** 联系人证件类型。SFZ: 身份证。HZ: 护照。TXZ: 中国港澳居民来往内地通行证。TWSFZ: 中国台湾居民来往大陆通行证。GWSFZ: 外国人永久居留身份证。ORG: 组织机构代码证YYZZ: 工商营业执照。TYDMZ: 统一社会信用代码证书。BDDH: 部队代号JDXKZ: 军队单位对外有偿服务许可证。SYZS: 事业单位法定代表人证书。GWCZDJZ: 外国企业常驻代表机构登记证。STDJZ: 社会团体法定代表人登记证书。ZJDJZ: 宗教活动场所登记证。MBDJZ: 民办非企业单位登记证书。JJDJZ: 基金会法定代表人登记证书。LSXKZ: 律师事务所执业许可证。GWZHDJZ: 外国在华文化中心登记证。GWLYDJZ: 外国政府旅游部门常驻代表机构批准登记证。SFXKZ: 司法鉴定许可证GWJGZJ: 外国机构证件。SHFWJGZ: 社会服务机构登记证书。MBXXXKZ: 民办学校办学许可证。YLJGXKZ: 医疗机构执业许可证。GAJZZ: 中国港澳居住证。TWJZZ: 中国台湾居住证。QTTYDM: 其他-统一社会信用代码证书。GZJGZY: 公证机构执业证。 */
  RegistrantCertificateType?: string;
  /** 联系人证件照片地址。 */
  RegistrantImgUrl?: string;
}

/** 域名联系人信息 */
declare interface ContactInfo {
  /** 注册人（中文） */
  OrganizationNameCN: string;
  /** 注册人（英文） */
  OrganizationName: string;
  /** 联系人（中文） */
  RegistrantNameCN: string;
  /** 联系人（英文） */
  RegistrantName: string;
  /** 省份（中文） */
  ProvinceCN: string;
  /** 城市（中文） */
  CityCN: string;
  /** 街道（中文） */
  StreetCN: string;
  /** 街道（英文） */
  Street: string;
  /** 国家（中文） */
  CountryCN: string;
  /** 联系人手机号 */
  Telephone: string;
  /** 联系人邮箱 */
  Email: string;
  /** 邮编 */
  ZipCode: string;
  /** 用户类型 E:组织， I:个人 */
  RegistrantType: string;
  /** 省份（英文）。作为入参时可以不填 */
  Province?: string;
  /** 城市（英文）。作为入参时可以不填 */
  City?: string;
  /** 国家（英文）。作为入参时可以不填 */
  Country?: string;
}

/** 自定义DNS Host */
declare interface CustomDnsHost {
  /** DNS名称 */
  DnsName: string;
  /** IP地址列表 */
  IpSet: string[];
}

/** 获取域名基础信息 */
declare interface DomainBaseInfo {
  /** 域名资源ID。 */
  DomainId?: string;
  /** 域名名称。 */
  DomainName?: string;
  /** 域名实名认证状态。NotUpload：未实名认证InAudit：实名审核中Approved：实名审核通过Reject：实名审核失败NoAudit: 无需实名认证 */
  RealNameAuditStatus?: string;
  /** 域名实名认证不通过原因。<具体内容以实名审核机构返回为准> */
  RealNameAuditUnpassReason?: string;
  /** 域名命名审核状态。NotAudit：命名审核未上传Pending：命名审核待上传Auditing：域名命名审核中Approved：域名命名审核通过Rejected：域名命名审核拒绝 */
  DomainNameAuditStatus?: string;
  /** 域名命名审核不通过原因。<具体内容以实名审核机构返回为准> */
  DomainNameAuditUnpassReason?: string | null;
  /** 注册时间。格式:YYYY-MM-DD */
  CreationDate?: string;
  /** 到期时间格式:YYYY-MM-DD */
  ExpirationDate?: string;
  /** 域名状态。ok：正常serverHold：注册局暂停解析 clientHold：注册商暂停解析pendingTransfer：转移中renewingPeriod：续费期redemptionPeriod：偿还期pendingDelete：删除期serverTransferProhibited：注册局禁止转移serverUpdateProhibited：注册局禁止更新serverDeleteProhibited：注册局禁止删除clientTransferProhibited：注册商禁止转移clientUpdateProhibited：注册商禁止更新clientDeleteProhibited：注册商禁止删除serverRenewProhibited: 注册局禁止续费clientRenewProhibited: 注册商禁止续费 */
  DomainStatus?: string[];
  /** 域名购买状态。ok：正常RegisterPending：待注册RegisterDoing：注册中RegisterFailed：注册失败AboutToExpire: 即将过期RenewPending：已进入续费期，需要进行续费RenewDoing：续费中RedemptionPending：已进入赎回期，需要进行续费RedemptionDoing：赎回中TransferPending：待转入中TransferTransing：转入中TransferFailed：转入失败 */
  BuyStatus?: string;
  /** 注册商类型epp: DNSPod, Inc.（烟台帝思普网络科技有限公司）qcloud: Tencent Cloud Computing (Beijing) Limited Liability Company（腾讯云计算（北京）有限责任公司）yunxun: Guangzhou Yunxun Information Technology Co., Ltd.（广州云讯信息科技有限公司）xinnet: Xin Net Technology Corporation（北京新网数码信息技术有限公司） */
  RegistrarType?: string;
  /** 域名绑定的ns */
  NameServer?: string[];
  /** true：开启锁定false：关闭锁定 */
  LockTransfer?: boolean;
  /** 锁定结束时间格式:YYYY-MM-DD HH:mm:ss */
  LockEndTime?: string;
}

/** 批量操作日志详情 */
declare interface DomainBatchDetailSet {
  /** 详情ID */
  Id?: number;
  /** 类型 new：注册域名renew：续费域名batch_transfer_prohibition_on：开启禁止转移锁batch_transfer_prohibition_off：关闭禁止转移锁batch_update_prohibition_on：开启禁止更新锁batch_update_prohibition_off：关闭禁止更新锁batch_modify_owner：域名转移batch_modify_domain_info：域名信息修改batch_transfer_in：域名转入batch_cancel_transfer_out：域名取消转出 */
  Action?: string;
  /** 域名 */
  Domain?: string;
  /** 执行状态：doing 执行中。failed 操作失败。success 操作成功。 */
  Status?: string;
  /** 失败原因，如果状态成功(Status:success),则该字段为空 */
  Reason?: string;
  /** 创建时间 */
  CreatedOn?: string;
  /** 更新时间 */
  UpdatedOn?: string;
  /** 订单号 */
  BigDealId?: string;
}

/** 批量操作记录 */
declare interface DomainBatchLogSet {
  /** 日志ID */
  LogId?: number;
  /** 数量 */
  Number?: number;
  /** 执行状态：doing 执行中。done 执行完成。 */
  Status?: string;
  /** 提交时间 */
  CreatedOn?: string;
  /** 批量操作成功个数 */
  Success?: number;
  /** 批量操作处理中个数 */
  Doing?: number;
  /** 批量操作失败个数 */
  Failed?: number;
  /** 是否付费 */
  PayStatus?: boolean;
  /** 大订单ID */
  BigDealId?: string;
}

/** 域名列表 */
declare interface DomainList {
  /** 是否是溢价域名：ture 是 false 不是 */
  IsPremium?: boolean;
  /** 域名资源ID。 */
  DomainId?: string;
  /** 域名名称。 */
  DomainName?: string;
  /** 是否已设置自动续费 。0：未设置 1：已设置2：设置后，关闭 */
  AutoRenew?: number;
  /** 注册时间。格式:YYYY-MM-DD HH:mm:ss */
  CreationDate?: string;
  /** 到期时间。格式:YYYY-MM-DD HH:mm:ss */
  ExpirationDate?: string;
  /** 域名后缀，根据具体域名确定例如:123.com 后缀则为.com123.com.cn 后缀则为.com.cn123.中国 后缀则为.中国 */
  Tld?: string;
  /** 编码后的后缀（中文会进行Punycode编码）根据具体域名确定例如:123.com 后缀则为.com123.com.cn 后缀则为.com.cn123.中国 后缀则为.xn--fiqs8s */
  CodeTld?: string;
  /** 域名购买状态。ok：正常AboutToExpire: 即将到期RegisterPending：注册中RegisterDoing：注册中RegisterFailed：注册失败RenewPending：续费期RenewDoing：续费中RedemptionPending：赎回期RedemptionDoing：赎回中TransferPending：转入中TransferTransing：转入中TransferFailed：转入失败 */
  BuyStatus?: string;
}

/** 获取域名基础模板信息 */
declare interface DomainSimpleInfo {
  /** 域名资源ID。 */
  DomainId?: string;
  /** 域名名称。 */
  DomainName?: string;
  /** 域名实名认证状态。NotUpload：未实名认证InAudit：实名审核中Approved：实名审核通过Reject：实名审核失败NoAudit: 无需实名认证 */
  RealNameAuditStatus?: string;
  /** 域名实名认证不通过原因。 */
  RealNameAuditUnpassReason?: string;
  /** 域名命名审核状态。NotAudit：命名审核未上传Pending：命名审核待上传Auditing：域名命名审核中Approved：域名命名审核通过Rejected：域名命名审核拒绝 */
  DomainNameAuditStatus?: string;
  /** 域名命名审核不通过原因。 */
  DomainNameAuditUnpassReason?: string;
  /** 注册时间。 */
  CreationDate?: string;
  /** 到期时间 */
  ExpirationDate?: string;
  /** 域名状态。ok：正常serverHold：注册局暂停解析 clientHold：注册商暂停解析pendingTransfer：转移中renewingPeriod：续费期redemptionPeriod：偿还期pendingDelete：删除期serverTransferProhibited：注册局禁止转移serverUpdateProhibited：注册局禁止更新serverDeleteProhibited：注册局禁止删除clientTransferProhibited：注册商禁止转移clientUpdateProhibited：注册商禁止更新clientDeleteProhibited：注册商禁止删除serverRenewProhibited: 注册局禁止续费clientRenewProhibited: 注册商禁止续费 */
  DomainStatus?: string[];
  /** 域名购买状态。ok：正常RegisterPending：待注册RegisterDoing：注册中RegisterFailed：注册失败AboutToExpire: 即将过期RenewPending：已进入续费期，需要进行续费RenewDoing：续费中RedemptionPending：已进入赎回期，需要进行续费RedemptionDoing：赎回中TransferPending：待转入中TransferTransing：转入中TransferFailed：转入失败 */
  BuyStatus?: string;
  /** 注册商类型epp: DNSPod, Inc.（烟台帝思普网络科技有限公司）qcloud: Tencent Cloud Computing (Beijing) Limited Liability Company（腾讯云计算（北京）有限责任公司）yunxun: Guangzhou Yunxun Information Technology Co., Ltd.（广州云讯信息科技有限公司）xinnet: Xin Net Technology Corporation（北京新网数码信息技术有限公司） */
  RegistrarType?: string;
  /** 域名绑定的ns */
  NameServer?: string[];
  /** true：开启锁定false：关闭锁定 */
  LockTransfer?: boolean;
  /** 锁定结束时间 */
  LockEndTime?: string;
  /** 认证类型：I=个人，E=企业 */
  RegistrantType?: string;
  /** 域名所有者，中文 */
  OrganizationNameCN?: string;
  /** 域名所有者，英文 */
  OrganizationName?: string;
  /** 域名联系人，中文 */
  RegistrantNameCN?: string;
  /** 域名联系人，英文 */
  RegistrantName?: string;
}

/** 失败预约预释放域名信息 */
declare interface FailReservedDomainInfo {
  /** 域名 */
  Domain?: string;
  /** 预约失败原因 */
  FailReason?: string;
}

/** 手机号邮箱列表 */
declare interface PhoneEmailData {
  /** 手机号或者邮箱 */
  Code?: string;
  /** 1：手机 2：邮箱 */
  Type?: number;
  /** 创建时间 */
  CreatedOn?: string;
  /** 1=控制台校验，2=第三方校验 */
  CheckStatus?: number;
}

/** 预释放竞价列表 */
declare interface PreAuctionInfo {
  /** 域名 */
  Domain?: string;
  /** 竞价倒计时格式:YYYY-MM-DD HH:mm:ss */
  BiddingTime?: string;
  /** 出价次数 */
  BidCount?: number;
  /** 当前价格 单位元 */
  Price?: number;
  /** 用户操作 bid：出价 noAction：无法操作 */
  Op?: string;
  /** 业务ID */
  BusinessId?: string;
}

/** 预释放列表信息 */
declare interface PreReleaseInfo {
  /** 域名 */
  Domain?: string;
  /** 预订倒计时(YYYY-MM-DD hh:mm:ss) */
  ReservationTime?: string;
  /** 域名注册时间(YYYY-MM-DD hh:mm:ss) */
  RegTime?: string;
  /** 域名删除时间(YYYY-MM-DD hh:mm:ss) */
  DelTime?: string;
  /** 当前人数 */
  CurrentPeople?: number;
  /** 当前价格 */
  Price?: number;
  /** 是否收藏true：收藏false：未收藏 */
  IsFollow?: boolean;
  /** 是否已经预约true：预约false：未预约 */
  IsAppoint?: boolean;
  /** 业务ID */
  BusinessId?: string;
  /** 是否为原持有者true：是原持有人false：非原持有人 */
  IsDomainUser?: boolean;
}

/** 域名价格信息 */
declare interface PriceInfo {
  /** 域名后缀，例如.com */
  Tld?: string;
  /** 购买年限，范围[1-10] */
  Year?: number;
  /** 域名原价 */
  Price?: number;
  /** 域名现价 */
  RealPrice?: number;
  /** 商品的购买类型，新购，续费，赎回，转入，续费并转入 */
  Operation?: string;
}

/** 预释放价格区间配置 */
declare interface PriceScopeConf {
  /** 最高价格 单位元 */
  MaxPrice?: number;
  /** 最低价格 单位元 */
  MinPrice?: number;
  /** 价格幅度 单位元 */
  Price?: number;
  /** 保证金 单位元 */
  DepositPrice?: number;
}

/** 合作商竞价详情 */
declare interface ReserveBidInfo {
  /** 用户 */
  User?: string;
  /** 出价 */
  Price?: number;
  /** 出价时间 */
  BidTime?: string;
  /** 当前状态 */
  BidStatus?: string;
}

/** 查询预释放预约列表域名详情 */
declare interface ReservedDomainInfo {
  /** 域名 */
  Domain?: string;
  /** 注册时间 */
  RegTime?: string;
  /** 到期时间 */
  ExpireTime?: string;
  /** 续费时间结束 */
  RenewEndTime?: string;
  /** 赎回结束时间 */
  RestoreEndTime?: string;
  /** 域名预约结束时间 */
  ReservedEndTime?: string;
}

/** 预约预释放域名详情信息 */
declare interface ReservedPreDomainInfo {
  /** 域名 */
  Domain?: string;
  /** 1. 预定成功 2. 预定失败（预定失败Reason字段将会被赋值）3. 域名交割中 4. 域名交割完成 */
  ReservedStatus?: number;
  /** 域名预定失败原因 */
  FailReason?: string;
  /** 预计变更所有权时间（仅用于参考，实际时间会存在误差） */
  ChangeOwnerTime?: string;
  /** 注册时间 */
  RegTime?: string;
  /** 到期时间 */
  ExpireTime?: string;
  /** 资源ID，用于删除资源信息 */
  ResourceId?: string;
  /** 业务ID */
  BusinessId?: string;
}

/** 预释放域名预约参数补充成功信息 */
declare interface SucDomainInfo {
  /** 域名 */
  Domain?: string;
  /** 业务ID */
  BusinessId?: string;
}

/** Template数据 */
declare interface TemplateInfo {
  /** 模板ID */
  TemplateId?: string;
  /** 认证状态:NotUpload: 未实名认证InAudit: 实名审核中Approved: 已实名认证Reject: 实名审核失败NotVerified: 实名信息待修改 */
  AuditStatus?: string;
  /** 创建时间 格式:YYYY-MM-DD HH:mm:ss */
  CreatedOn?: string;
  /** 更新时间 格式:YYYY-MM-DD HH:mm:ss */
  UpdatedOn?: string;
  /** 用户UIN */
  UserUin?: string;
  /** 是否是默认模板: 是:yes，否:no */
  IsDefault?: string;
  /** 认证失败原因 */
  AuditReason?: string;
  /** 认证信息 */
  CertificateInfo?: CertificateInfo;
  /** 联系人信息 */
  ContactInfo?: ContactInfo;
  /** 模板是否符合规范， 1是 0 否 */
  IsValidTemplate?: number;
  /** 不符合规范原因 */
  InvalidReason?: string;
  /** 是包含黑名单手机或邮箱 */
  IsBlack?: boolean;
}

declare interface BatchModifyDomainInfoRequest {
  /** 批量修改的域名数组个数最大不超过4000 */
  Domains: string[];
  /** 模板ID 可从[DescribeTemplateList](https://cloud.tencent.com/document/api/242/48940)接口获取 */
  TemplateId: string;
  /** true： 开启60天内禁止转移注册商锁定false：关闭60天内禁止转移注册商锁定默认 true */
  LockTransfer?: boolean;
}

declare interface BatchModifyDomainInfoResponse {
  /** 日志ID */
  LogId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BidDetailPageRequest {
  /** 预约ID可通过[DescribeBiddingList](https://cloud.tencent.com/document/api/242/106598)接口获取 */
  BusinessId: string;
}

declare interface BidDetailPageResponse {
  /** 域名 */
  Domain?: string;
  /** 当前域名价格 单位元 */
  CurrentPrice?: number;
  /** 用户上次出价 单位元 */
  BidPrice?: number;
  /** 当前加价幅度 单位元 */
  CurrentPriceScope?: number;
  /** 加价幅度区间配置 */
  PriceScope?: PriceScopeConf[] | null;
  /** 用户当前已经支付了的保证金 单位元 */
  DepositPrice?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BidPreDomainsRequest {
  /** 业务ID */
  BusinessId?: string;
  /** 价格 */
  Price?: number;
}

declare interface BidPreDomainsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BiddingPreReleaseRequest {
  /** 业务ID(竞价域名的预约ID) 可通过[DescribeBiddingList](https://cloud.tencent.com/document/api/242/106598)接口获取 */
  BusinessId: string;
  /** 价格 单位元 */
  Price: number;
}

declare interface BiddingPreReleaseResponse {
  /** 是否需要额外支付true: 需要额外支付false: 不需要额外支付 */
  IsNeedPay?: boolean;
  /** 计费请求参数，以类Json字符串的形式进行返回。json字符串前有一个">"特定标识符号，去掉标识符的字符串可用于计费下单 */
  BillingParam?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CheckBatchStatusRequest {
  /** 操作日志 ID数组，最多 200 个可通过任意批量操作接口获取，例如：[BatchModifyDomainInfo](https://cloud.tencent.com/document/product/242/49197)[ModifyDomainDNSBatch](https://cloud.tencent.com/document/product/242/49211)[ModifyDomainOwnerBatch](https://cloud.tencent.com/document/product/242/49196)[UpdateProhibitionBatch](https://cloud.tencent.com/document/api/242/49193)[TransferProhibitionBatch](https://cloud.tencent.com/document/api/242/49194)[TransferInDomainBatch](https://cloud.tencent.com/document/api/242/49195) */
  LogIds: number[];
}

declare interface CheckBatchStatusResponse {
  /** 批量任务状态集 */
  StatusSet?: BatchStatus[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CheckDomainRequest {
  /** 所查询域名名称 */
  DomainName: string;
  /** 年限。该参数为空时无法查询溢价词域名 */
  Period?: string;
}

declare interface CheckDomainResponse {
  /** 所查询域名名称 */
  DomainName?: string;
  /** 是否能够注册 */
  Available?: boolean;
  /** 不能注册原因 */
  Reason?: string;
  /** 是否是溢价词 */
  Premium?: boolean;
  /** 域名价格 */
  Price?: number;
  /** 是否是敏感词 */
  BlackWord?: boolean;
  /** 溢价词描述 */
  Describe?: string | null;
  /** 溢价词的续费价格 */
  FeeRenew?: number | null;
  /** 域名真实价格, 溢价词时价格跟年限有关，非溢价词时价格为1年的价格 */
  RealPrice?: number | null;
  /** 溢价词的转入价格 */
  FeeTransfer?: number | null;
  /** 溢价词的赎回价格 */
  FeeRestore?: number;
  /** 检测年限 */
  Period?: number;
  /** 是否支持北京备案 true 支持 false 不支持 */
  RecordSupport?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCustomDnsHostRequest {
  /** 域名实例ID 可通过[DescribeDomainNameList](https://cloud.tencent.com/document/api/242/48941)接口获取 */
  DomainId: string;
  /** Dns名称例如：<>.test.com;其中<>就是Dns名称，可以是任意域名允许的格式 */
  DnsName: string;
  /** IP地址列表可选择：正常IP地址范围 */
  IpSet: string[];
}

declare interface CreateCustomDnsHostResponse {
  /** 异步任务ID */
  LogId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDomainBatchRequest {
  /** 模板ID。详情请查看：[获取模板列表](https://cloud.tencent.com/document/product/242/48940) */
  TemplateId: string;
  /** 购买域名的年限，可选值：[1-10] */
  Period: number;
  /** 批量购买的域名,最多为4000个 */
  Domains: string[];
  /** 付费模式 0手动在线付费，1使用余额付费，2使用特惠包 */
  PayMode: number;
  /** 自动续费开关。有两个可选值：0 表示关闭，不自动续费（默认值）1 表示开启，将自动续费 */
  AutoRenewFlag?: number;
  /** 使用的特惠包ID，PayMode为2时必填 */
  PackageResourceId?: string;
  /** 是否开启更新锁：0=默认不开启，1=开启 */
  UpdateProhibition?: number;
  /** 是否开启转移锁：0=默认不开启，1=开启 */
  TransferProhibition?: number;
  /** 渠道来源，pc/miniprogram/h5等 */
  ChannelFrom?: string;
  /** 订单来源，common正常/dianshi_active点石活动等 */
  OrderFrom?: string;
  /** 活动id */
  ActivityId?: string;
}

declare interface CreateDomainBatchResponse {
  /** 批量日志ID */
  LogId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDomainRedemptionRequest {
  /** 域名ID可通过DescribeDomainList接口获取 */
  DomainId: string;
}

declare interface CreateDomainRedemptionResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreatePhoneEmailRequest {
  /** 手机号或者邮箱 */
  Code: string;
  /** 1：手机 2：邮箱 */
  Type: number;
  /** 验证码通过调用[SendPhoneEmailCode](https://cloud.tencent.com/document/api/242/62666)接口发送到手机或邮箱的验证码 */
  VerifyCode: string;
}

declare interface CreatePhoneEmailResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateTemplateRequest {
  /** 联系人信息 */
  ContactInfo: ContactInfo;
  /** 证件信息 */
  CertificateInfo?: CertificateInfo;
}

declare interface CreateTemplateResponse {
  /** 模板信息 */
  Template?: TemplateInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteBiddingRequest {
  /** 预约ID可通过[DescribeBiddingList](https://cloud.tencent.com/document/api/242/106598)接口获取 */
  BusinessID?: string;
}

declare interface DeleteBiddingResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteCustomDnsHostRequest {
  /** 域名实例ID可通过[DescribeDomainNameList](https://cloud.tencent.com/document/api/242/48941)接口获取 */
  DomainId: string;
  /** DNS名称例如：<>.test.com;其中<>就是Dns名称，可以是任意域名允许的格式 */
  DnsName: string;
}

declare interface DeleteCustomDnsHostResponse {
  /** 异步任务ID */
  LogId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeletePhoneEmailRequest {
  /** 手机或者邮箱 */
  Code: string;
  /** 1：手机 2：邮箱 */
  Type: number;
}

declare interface DeletePhoneEmailResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteReservedPreDomainInfoRequest {
  /** 资源ID列表 */
  ResourceIdList: string[];
}

declare interface DeleteReservedPreDomainInfoResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteTemplateRequest {
  /** 模板ID可通过[DescribeTemplateList](https://cloud.tencent.com/document/api/242/48940)接口获取 */
  TemplateId: string;
}

declare interface DeleteTemplateResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAuctionListRequest {
  /** 业务ID 通过接口[DescribeBiddingList](https://cloud.tencent.com/document/api/242/106598)返回结果中获取 */
  BusinessId: string;
  /** 条数，默认10，最大100 */
  Limit?: number;
  /** 偏移量 默认0 */
  OffSet?: number;
}

declare interface DescribeAuctionListResponse {
  /** 竞拍详情列表 */
  AuctionList?: AuctionInfo[];
  /** 总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBatchOperationLogDetailsRequest {
  /** 日志ID。 */
  LogId: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为200。 */
  Limit?: number;
}

declare interface DescribeBatchOperationLogDetailsResponse {
  /** 总数量。 */
  TotalCount?: number;
  /** 日志详情列表。 */
  DomainBatchDetailSet?: DomainBatchDetailSet[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBatchOperationLogsRequest {
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为200。 */
  Limit?: number;
}

declare interface DescribeBatchOperationLogsResponse {
  /** 总数量 */
  TotalCount?: number;
  /** 日志列表 */
  DomainBatchLogSet?: DomainBatchLogSet[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBiddingAppointDetailRequest {
  /** 预约ID可通过[DescribeBiddingAppointList](https://cloud.tencent.com/document/api/242/106600)接口获取 */
  BusinessID?: string;
}

declare interface DescribeBiddingAppointDetailResponse {
  /** 域名 */
  Domain?: string;
  /** 预约人数 */
  AppointNum?: number;
  /** 预约开始时间格式:YYYY-MM-DD HH:mm:ss */
  AppointStartTime?: string;
  /** 预约结束时间格式:YYYY-MM-DD HH:mm:ss */
  AppointEndTime?: string;
  /** 注册时间格式:YYYY-MM-DD HH:mm:ss */
  RegTime?: string;
  /** 过期时间格式:YYYY-MM-DD HH:mm:ss */
  ExpireTime?: string;
  /** 删除时间格式:YYYY-MM-DD HH:mm:ss */
  DeleteTime?: string;
  /** 当前价格 单位元 */
  AppointPrice?: number;
  /** 预约保证金 单位元 */
  AppointBondPrice?: number;
  /** 1 已预约，2 竞价中，3 等待出价 4 竞价失败 5 等待支付 6 等待转移，7 转移中 8 交易成功 9 预约持有者赎回 10 竞价持有者赎回 11 其他阶段持有者赎回 12 违约 */
  Status?: number;
  /** 预约保证金是否已经退回yes：退回 no: 未退回 */
  BiddingBondRefund?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBiddingAppointListRequest {
  /** 页码默认值1 */
  PageNumber: number;
  /** 每页数量默认：20 取值范围[1，200] */
  PageSize: number;
  /** 域名 */
  Domain?: string;
  /** 状态：1 已预约，2 竞价中，3 等待出价 4 竞价失败 5 等待支付 6 等待转移，7 转移中 8 交易成功 9 预约持有者赎回 10 竞价持有者赎回 11 其他阶段持有者赎回 12 违约 */
  Status?: number[];
  /** 排序字段：默认<空>，不排序可选值：AppointEndTime 预约结束时间BiddingPrice 竞价保证金BiddingEndTime 竞价结束时间 */
  SortField?: string;
  /** 排序规则：asc:升序desc:降序默认：asc */
  SortOrder?: string;
}

declare interface DescribeBiddingAppointListResponse {
  /** 搜索结果条数 */
  Total?: number;
  /** 预约列表 */
  AppointList?: BiddingAppointResult[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBiddingDetailRequest {
  /** 预约ID可通过[DescribeBiddingList](https://cloud.tencent.com/document/api/242/106598)接口获取 */
  BusinessID?: string;
}

declare interface DescribeBiddingDetailResponse {
  /** 域名 */
  Domain?: string;
  /** 出价次数 */
  BiddingNum?: number;
  /** 竞价开始时间格式:YYYY-MM-DD HH:mm:ss */
  BiddingStartTime?: string;
  /** 竞价结束时间格式:YYYY-MM-DD HH:mm:ss */
  BiddingEndTime?: string;
  /** 注册时间格式:YYYY-MM-DD HH:mm:ss */
  RegTime?: string;
  /** 过期时间格式:YYYY-MM-DD HH:mm:ss */
  ExpireTime?: string;
  /** 删除时间格式:YYYY-MM-DD HH:mm:ss */
  DeleteTime?: string;
  /** 当前价格 单位元 */
  CurrentPrice?: number;
  /** 当前用户昵称 */
  CurrentNickname?: string;
  /** 竞价保证金 单位元 */
  BiddingBondPrice?: number;
  /** 2 竞价中 3 等待出价 4 竞价失败 10 竞价持有者赎回 */
  Status?: number;
  /** 竞价标识，1 领先，2 落后 */
  BiddingFlag?: number;
  /** 是否退款，yes表示退款，no表示不退款 */
  BiddingBondRefund?: string;
  /** 我的出价 单位元 */
  BiddingPrice?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBiddingListRequest {
  /** 页码 */
  PageNumber: number;
  /** 每页数量 */
  PageSize: number;
  /** 域名 */
  Domain?: string;
  /** 2 竞价中 3 等待出价 4 竞价失败 10 竞价持有者赎回 */
  Status?: number[];
  /** 排序字段：BiddingEndTime 竞价结束时间	BiddingPrice 我的价格 */
  SortField?: string;
  /** 排序规则：asc升序，desc降序 */
  SortOrder?: string;
}

declare interface DescribeBiddingListResponse {
  /** 搜索结果条数 */
  Total?: number;
  /** 竞价列表 */
  BiddingList?: BiddingResult[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBiddingSuccessfulDetailRequest {
  /** 预约ID 可通过[DescribeBiddingList](https://cloud.tencent.com/document/api/242/106598)接口获取 */
  BusinessID?: string;
}

declare interface DescribeBiddingSuccessfulDetailResponse {
  /** 域名 */
  Domain?: string;
  /** 得标时间格式:YYYY-MM-DD HH:mm:ss */
  SuccessfulTime?: string;
  /** 得标价格 单位元 */
  SuccessfulPrice?: number;
  /** 注册时间格式:YYYY-MM-DD HH:mm:ss */
  RegTime?: string;
  /** 过期时间格式:YYYY-MM-DD HH:mm:ss */
  ExpireTime?: string;
  /** 删除时间格式:YYYY-MM-DD HH:mm:ss */
  DeleteTime?: string;
  /** 付款结束时间格式:YYYY-MM-DD HH:mm:ss */
  PayEndTime?: string;
  /** 保证金，是否退款，yes表示退款，no表示不退款 */
  BiddingBondRefund?: string;
  /** 保证金 单位元 */
  BiddingBondPrice?: number;
  /** 状态：5 等待支付 6 等待转移， 7 转移中，8 交易成功，11 尾款阶段持有者索回，12 已违约 */
  Status?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBiddingSuccessfulListRequest {
  /** 页码默认：1 */
  PageNumber: number;
  /** 每页数量默认：20 取值范围[1，200] */
  PageSize: number;
  /** 域名 */
  Domain?: string;
  /** 状态：5 等待支付 6 等待转移， 7 转移中，8 交易成功，11 尾款阶段持有者索回，12 已违约 */
  Status?: number[];
  /** 排序字段：默认<空>，不排序SuccessfulTime 预约结束时间 */
  SortField?: string;
  /** 排序规则：asc：升序desc：降序默认：asc */
  SortOrder?: string;
}

declare interface DescribeBiddingSuccessfulListResponse {
  /** 搜索结果条数 */
  Total?: number;
  /** 得标列表 */
  SuccessfulList?: BiddingSuccessfulResult[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCustomDnsHostSetRequest {
  /** 域名实例ID可通过[DescribeDomainNameList](https://cloud.tencent.com/document/api/242/48941)接口获取 */
  DomainId: string;
  /** 返回数量，默认为20，取值范围[1,100] */
  Limit: number;
  /** 偏移量，默认为0 */
  Offset: number;
}

declare interface DescribeCustomDnsHostSetResponse {
  /** 自定义DNS Host 列表 */
  DnsHostSet?: CustomDnsHost[];
  /** 自定义DNS Host总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDomainBaseInfoRequest {
  /** 域名可通过[DescribeDomainNameList](https://cloud.tencent.com/document/api/242/48941)接口获取 */
  Domain: string;
}

declare interface DescribeDomainBaseInfoResponse {
  /** 域名信息 */
  DomainInfo?: DomainBaseInfo;
  /** 用户Uin */
  Uin?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDomainNameListRequest {
  /** 偏移量，默认为0 */
  Offset?: number;
  /** 返回数量，默认为20，取值范围[1,100] */
  Limit?: number;
}

declare interface DescribeDomainNameListResponse {
  /** 域名信息集合 */
  DomainSet?: DomainList[];
  /** 域名总数量 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDomainPriceListRequest {
  /** 查询指定域名后缀的域名价格列表，若不指定域名后缀，默认查询所有后缀的域名价格列表。 */
  TldList?: string[];
  /** 查询购买的年份，默认会列出所有年份的价格，可选值【1,10】 */
  Year?: number[];
  /** 域名的购买类型：new 新购renew 续费redem 赎回tran 转入 */
  Operation?: string[];
}

declare interface DescribeDomainPriceListResponse {
  /** 域名价格列表 */
  PriceList?: PriceInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDomainSimpleInfoRequest {
  /** 域名 */
  DomainName: string;
}

declare interface DescribeDomainSimpleInfoResponse {
  /** 域名信息 */
  DomainInfo?: DomainSimpleInfo;
  /** 账号ID */
  Uin?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePayWaitDetailRequest {
  /** 业务ID(竞价域名的预约ID) 可通过[DescribeBiddingList](https://cloud.tencent.com/document/api/242/106598)接口获取 */
  BusinessId: string;
}

declare interface DescribePayWaitDetailResponse {
  /** 域名 */
  Domain?: string;
  /** 域名类型pay：等待支持sub：已经预订wait：等待出价finish：完成出价 */
  Status?: string;
  /** 支付结束时间 格式:YYYY-MM-DD HH:mm:ss */
  EndTime?: string;
  /** 域名注册时间 格式:YYYY-MM-DD HH:mm:ss */
  RegTime?: string;
  /** 域名成交价格 单位元 */
  Price?: number;
  /** 待退还保证金 单位元 */
  RetDeposit?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePhoneEmailListRequest {
  /** 0：所有类型 1：手机 2：邮箱，默认0 */
  Type?: number;
  /** 偏移量，默认为0 */
  Offset?: number;
  /** 返回数量，默认为20，取值范围[1,200] */
  Limit?: number;
  /** 手机或者邮箱，用于精确搜索 */
  Code?: string;
}

declare interface DescribePhoneEmailListResponse {
  /** 手机或者邮箱列表 */
  PhoneEmailList?: PhoneEmailData[];
  /** 总数量。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePreAuctionListRequest {
  /** 页码 默认1 */
  PageNumber?: number;
  /** 条数 默认20 最大100 */
  PageSize?: number;
}

declare interface DescribePreAuctionListResponse {
  /** 总数 */
  TotalCount?: number;
  /** 预释放竞价列表 */
  PreAuctionList?: PreAuctionInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePreDomainListRequest {
  /** 页码，默认为1 */
  Page?: number;
  /** 条数，默认为20 */
  Size?: number;
  /** 用于结束时间筛选 */
  EndTime?: string;
  /** 用户指定上架时间筛选 */
  UpTime?: string;
}

declare interface DescribePreDomainListResponse {
  /** 预释放预约列表数据 */
  ReservedDomainList?: ReservedDomainInfo[];
  /** 总数 */
  Total?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePreReleaseListRequest {
  /** 单独使用Keywords：使用域名关键词进行搜索Keywords+DomainStart（true）：使用域名开头关键词进行搜索Keywords+DomainEnd（true）：使用域名结尾关键词进行搜索Keywords+DomainStart（true）+DomainEnd（true）：使用域名开头或结尾关键词进行搜索 */
  Keywords?: string;
  /** 是否以域名开头关键词进行搜索true：是false：否 */
  DomainStart?: boolean;
  /** 是否以域名结尾关键词进行搜索true：是false：否 */
  DomainEnd?: boolean;
  /** 不同排序规则：1： 价格升序2： 价格降序3： 域名升序4： 结束时间升序5： 店铺推荐升序6： 结束时间降序15: 创建时间升序其他：结束时间升序 */
  Sort?: number;
  /** 起始价格 */
  PriceStart?: number;
  /** 结束价格 */
  PriceEnd?: number;
  /** 起始域名长度 */
  LengthStart?: number;
  /** 结束域名长度 */
  LengthEnd?: number;
  /** 页码（默认为1） */
  PageNumber?: number;
  /** 每页显示数（默认为20） */
  PageSize?: number;
  /** 后缀1="com"2="net"4="biz"6="info"7="co"9="cn"10="com.cn"11="wang"12="vip"13="cc"14="net.cn"15="org.cn"16="top"17="asia"18="tv"19="club"20="shop"21 ="中国"23="online"24="xyz"25="网店"26="网址"27="在线"28="ltd"29="fans"30="ren"31="icu" */
  Suffix?: number[];
  /** 一级分类1:"纯数字"2:"单数字"3:"双数字"4:"三数字"5:"四数字"6:"五数字"7:"六数字"9:"单字母"10:"双字母"11:"三字母"12:"四字母"13:"五字母"14:"单拼"15:"双拼"16:"三拼"17:"杂米"18:"两杂"19:"三杂"20:"四杂" */
  ClassOne?: number;
  /** 二级分类13:"0开或带4"14:"非0开不带4"15:"不带0,4"0:"非全声母"6:"全声母"16:"不带0,4"32:"全声母"5010:"CVCV" */
  ClassTwo?: number[];
  /** 三级分类111:"AAA"401:"3A及以上"402:"AA结尾"1122:"AABB"1123:"AABC"1212:"ABAB"1221:"ABBA"1233:"ABCC"501:"4A及以上"502:"3A及以上"503:"AAA开头"504:"AAA结尾"505:"AA开头"506:"AA结尾"507:"三顺子开头"508:"三顺子结尾"11223:"AABBC"12233:"ABBCC"601:"5A及以上"602:"4A及以上"603:"3A及以上"604:"4A开头"605:"4A结尾"606:"AAA开头"607:"AAA结尾"608:"AA开头"609:"AA结尾"610:"ABAB开头"611:"ABAB结尾"612:"AABB开头"613:"AABB结尾"614:"四顺子开头"615:"四顺子结尾"616:"三顺子开头"617:"三顺子结尾"121212:"ABABAB"112233:"AABBCC"123123:"ABCABC"211:"LNN"221:"LLN"121:"NLN"212:"LNL"122:"NLL"1112:"NNNL"2111:"LNNN"1212:"NLNL"2121:"LNLN"1222:"NLLL"2221:"LLLN"1122:"NNLL"2211:"LLNN"31:"W结尾"112:"AAB"122:"ABB"121:"ABA"41:"W结尾"1112:"AAAB"1222:"ABBB"1122:"AABB"1212:"ABAB" */
  ClassThree?: number[];
  /** 四级分类1:"仅含2种数字"2:"仅含3种数字"4:"仅含1种字母"8:"仅含1种数字" */
  ClassFour?: number[];
  /** 是否以域名开头排除关键词进行搜索 */
  FilterStart?: boolean;
  /** 是否以域名结尾排除关键词进行搜索 */
  FilterEnd?: boolean;
  /** 域名排除关键词单独使用FilterWords：使用排除关键词进行搜索FilterWords+FilterStart（true）：使用域名开头排除关键词进行搜索FilterWords+FilterEnd（true）：使用域名结尾排除关键词进行搜索FilterWords+FilterStart（true）+FilterEnd（true）：使用域名开头或结尾排除关键词进行搜索 */
  FilterWords?: string;
  /** 交易类型（目前只支持10）10: 预释放域名 */
  TransType?: number;
  /** 是否搜索白金域名（默认值为false） */
  IsTop?: boolean;
  /** 结束时间排序 desc:倒序 asc:正序 */
  EndTimeSort?: string;
  /** 结束时间（YYYY-MM-DD） */
  EndTime?: string;
}

declare interface DescribePreReleaseListResponse {
  /** 数量 */
  TotalCount?: number;
  /** 预释放列表 */
  PreReleaseList?: PreReleaseInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeReservedBidInfoRequest {
  /** 业务ID */
  BusinessId: string;
}

declare interface DescribeReservedBidInfoResponse {
  /** 竞价领先价格 */
  UpPrice?: number;
  /** 请求用户当前价格 */
  Price?: number;
  /** 领先用户 */
  UpUser?: string;
  /** 竞价详细数据 */
  BidList?: ReserveBidInfo[] | null;
  /** 竞价结束时间 */
  BidEndTime?: string;
  /** 是否领先 */
  IsUp?: boolean;
  /** 下次出价金额 */
  NextPrice?: number;
  /** 状态：1. 等待竞价 2.竞价中 3.竞价结束 */
  Status?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeReservedPreDomainInfoRequest {
  /** 域名,每次最多支持500条域名查询 */
  DomainList?: string[];
  /** 状态，用于筛选，可不填写(1. 成功 2. 失败（失败Reason字段将会被赋值）3. 域名交割中 4. 域名交割完成 5. 预约 6. 竞价) */
  ReservedStatus?: number;
  /** 根据预约时间排序，仅支持："desc","asc"。 */
  ReservedTimeSort?: string;
  /** 条数 */
  Limit?: number;
  /** 偏移量 */
  Offset?: number;
}

declare interface DescribeReservedPreDomainInfoResponse {
  /** 预释放预约列表 */
  ReservedPreDomainInfoList?: ReservedPreDomainInfo[];
  /** 总数 */
  Total?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTemplateListRequest {
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100。 */
  Limit?: number;
  /** 用户注册类型，默认:all , 个人：I ,企业: E */
  Type?: string;
  /** 认证状态：未实名审核:NotUpload, 实名审核中:InAudit，已实名审核:Approved，实名审核失败:Reject，更新手机邮箱:NotVerified。 */
  Status?: string;
  /** 关键字，用于域名所有者筛选 */
  Keyword?: string;
}

declare interface DescribeTemplateListResponse {
  /** 模板数量。 */
  TotalCount?: number;
  /** 模板详细信息列表。 */
  TemplateSet?: TemplateInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTemplateRequest {
  /** 模板ID通过[DescribeTemplateList](https://cloud.tencent.com/document/api/242/48940)接口获取 */
  TemplateId: string;
}

declare interface DescribeTemplateResponse {
  /** 模板信息 */
  Template?: TemplateInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTldListRequest {
}

declare interface DescribeTldListResponse {
  /** 支持的后缀列表 */
  List?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeUnPreDomainDetailRequest {
  /** 域名 */
  Domain: string;
}

declare interface DescribeUnPreDomainDetailResponse {
  /** 域名 */
  Domain?: string;
  /** 预约人数 */
  PreCount?: number;
  /** 域名注册时间 格式:YYYY-MM-DD HH:mm:ss */
  RegTime?: string;
  /** 域名删除时间 格式:YYYY-MM-DD HH:mm:ss */
  DeleteTime?: string;
  /** 到期时间 格式:YYYY-MM-DD HH:mm:ss */
  ExpireTime?: string;
  /** 域名状态 bid：出价noAction：无法操作 */
  Status?: string;
  /** 域名价格 单位元 */
  CurrentPrice?: number;
  /** 域名保证金 单位元 */
  AppointBondPrice?: number;
  /** 是否已经预约 */
  IsAppoint?: boolean;
  /** 业务ID */
  BusinessId?: string;
  /** 是否为原持有者域名 */
  IsDomainUser?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCustomDnsHostRequest {
  /** 域名实例ID可通过[DescribeDomainNameList](https://cloud.tencent.com/document/api/242/48941)接口获取 */
  DomainId: string;
  /** Dns名称 例如：<>.test.com;其中<>就是Dns名称，可以是任意域名允许的格式 */
  DnsName: string;
  /** IP地址列表 可选择：正常IP地址范围 */
  IpSet: string[];
}

declare interface ModifyCustomDnsHostResponse {
  /** 异步任务ID */
  LogId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDomainDNSBatchRequest {
  /** 批量操作的域名。一次提交不超过4000个 */
  Domains: string[];
  /** 域名DNS 数组。不少于2个，一般建议2-6个 */
  Dns: string[];
}

declare interface ModifyDomainDNSBatchResponse {
  /** 日志ID。 */
  LogId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDomainOwnerBatchRequest {
  /** 要过户的域名。一次提交不大于4000个 */
  Domains: string[];
  /** 转入账户的主uin。 */
  NewOwnerUin: string;
  /** 是否同时转移对应的 DNS 解析域名，默认false */
  TransferDns?: boolean;
  /** 转入账户的appid。 */
  NewOwnerAppId?: string;
}

declare interface ModifyDomainOwnerBatchResponse {
  /** 日志id */
  LogId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyIntlCustomDnsHostRequest {
  /** 域名ID */
  DomainId: string;
  /** DNS Host */
  DnsName: string;
  /** IP地址 */
  IpSet: string[];
}

declare interface ModifyIntlCustomDnsHostResponse {
  /** 任务ID */
  LogId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyTemplateRequest {
  /** 证件信息 */
  CertificateInfo: CertificateInfo;
  /** 联系人信息 */
  ContactInfo: ContactInfo;
  /** 模板ID可通过接口: [DescribeTemplateList](https://cloud.tencent.com/document/product/242/48940) */
  TemplateId: string;
}

declare interface ModifyTemplateResponse {
  /** 模板信息 */
  Template?: TemplateInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RenewDomainBatchRequest {
  /** 域名续费的年限。取值范围[1,9] */
  Period: number;
  /** 批量续费的域名。一次提交不大于4000个 */
  Domains: string[];
  /** 付费模式 0手动在线付费，1使用余额付费，2使用特惠包。 */
  PayMode: number;
  /** 自动续费开关。有三个可选值：0 表示关闭，不自动续费1 表示开启，将自动续费2 表示不处理，保留域名原有状态（默认值） */
  AutoRenewFlag?: number;
  /** 特惠包ID */
  PackageResourceId?: string;
  /** 渠道来源，pc/miniprogram/h5等 */
  ChannelFrom?: string;
  /** 订单来源，common正常/dianshi_active点石活动等 */
  OrderFrom?: string;
  /** 活动id */
  ActivityId?: string;
}

declare interface RenewDomainBatchResponse {
  /** 操作日志ID。 */
  LogId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ReservedPreDomainsRequest {
  /** 预约预释放域名列表 */
  DomainList: string[];
  /** 模板ID 可通过[DescribeTemplateList](https://cloud.tencent.com/document/api/242/48940)接口获取 */
  TemplateId: string;
  /** 结束后是否自动支付尾款，默认1 开启 传入0关闭 */
  IsAutoPay?: number;
  /** 结束后是否自动进行梯度保证金扣除，默认1开启 传入0关闭 */
  IsBidAutoPay?: number;
}

declare interface ReservedPreDomainsResponse {
  /** 预定成功域名列表 */
  SucDomainList?: string[];
  /** 预定失败域名列表 */
  FailDomainList?: FailReservedDomainInfo[];
  /** 域名预定成功详情 */
  SucDomains?: SucDomainInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SendPhoneEmailCodeRequest {
  /** 手机或者邮箱号。 */
  Code: string;
  /** 1：手机 2：邮箱。 */
  Type: number;
}

declare interface SendPhoneEmailCodeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SetDomainAutoRenewRequest {
  /** 域名实例ID可通过[DescribeDomainNameList](https://cloud.tencent.com/document/api/242/48941)接口获取 */
  DomainId: string;
  /** AutoRenew 有三个可选值： 0：不设置自动续费1：设置自动续费2：设置到期后不续费 */
  AutoRenew: number;
}

declare interface SetDomainAutoRenewResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SyncCustomDnsHostRequest {
  /** 域名实例ID可通过[DescribeDomainNameList](https://cloud.tencent.com/document/api/242/48941)接口获取 */
  DomainId: string;
}

declare interface SyncCustomDnsHostResponse {
  /** 异步任务ID */
  LogId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface TransferInDomainBatchRequest {
  /** 转入的域名名称数组。一次提交不大于4000个 */
  Domains: string[];
  /** 域名转移码数组。 */
  PassWords: string[];
  /** 模板ID。 可通过[DescribeTemplateList](https://cloud.tencent.com/document/api/242/48940)接口获取 */
  TemplateId: string;
  /** 付费模式 0手动在线付费，1使用余额付费。 */
  PayMode: number;
  /** 自动续费开关。有两个可选值：0 表示关闭，不自动续费（默认值）1 表示开启，将自动续费 */
  AutoRenewFlag?: number;
  /** true： 开启60天内禁止转移注册商锁定false：关闭60天内禁止转移注册商锁定默认 true */
  LockTransfer?: boolean;
  /** 是否开启更新锁：0=默认不开启，1=开启 */
  UpdateProhibition?: number;
  /** 是否开启转移锁：0=默认不开启，1=开启 */
  TransferProhibition?: number;
  /** 渠道来源，pc/miniprogram/h5等 */
  ChannelFrom?: string;
  /** 订单来源，common正常/dianshi_active点石活动等 */
  OrderFrom?: string;
  /** 活动id */
  ActivityId?: string;
}

declare interface TransferInDomainBatchResponse {
  /** 日志ID */
  LogId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface TransferProhibitionBatchRequest {
  /** 批量操作的域名。一次提交不大于4000个 */
  Domains: string[];
  /** 是否开启禁止域名转移。true: 开启禁止域名转移状态。false：关闭禁止域名转移状态。 */
  Status: boolean;
}

declare interface TransferProhibitionBatchResponse {
  /** 日志ID */
  LogId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateProhibitionBatchRequest {
  /** 批量操作的域名。一次提交不大于4000个 */
  Domains: string[];
  /** 是否开启禁止域名更新。true:开启禁止域名更新状态。false：关闭禁止域名更新状态。 */
  Status: boolean;
}

declare interface UpdateProhibitionBatchResponse {
  /** 日志ID */
  LogId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UploadImageRequest {
  /** 资质照片，照片的base64编码。 */
  ImageFile: string;
}

declare interface UploadImageResponse {
  /** 资质照片地址。 */
  AccessUrl?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Domain 域名注册} */
declare interface Domain {
  (): Versions;
  /** 批量域名信息修改 {@link BatchModifyDomainInfoRequest} {@link BatchModifyDomainInfoResponse} */
  BatchModifyDomainInfo(data: BatchModifyDomainInfoRequest, config?: AxiosRequestConfig): AxiosPromise<BatchModifyDomainInfoResponse>;
  /** 预释放详情页出价 {@link BidDetailPageRequest} {@link BidDetailPageResponse} */
  BidDetailPage(data: BidDetailPageRequest, config?: AxiosRequestConfig): AxiosPromise<BidDetailPageResponse>;
  /** 合作商预释放域名出价 {@link BidPreDomainsRequest} {@link BidPreDomainsResponse} */
  BidPreDomains(data?: BidPreDomainsRequest, config?: AxiosRequestConfig): AxiosPromise<BidPreDomainsResponse>;
  /** 预释放出价 {@link BiddingPreReleaseRequest} {@link BiddingPreReleaseResponse} */
  BiddingPreRelease(data: BiddingPreReleaseRequest, config?: AxiosRequestConfig): AxiosPromise<BiddingPreReleaseResponse>;
  /** 批量操作日志状态 {@link CheckBatchStatusRequest} {@link CheckBatchStatusResponse} */
  CheckBatchStatus(data: CheckBatchStatusRequest, config?: AxiosRequestConfig): AxiosPromise<CheckBatchStatusResponse>;
  /** 域名注册查询 {@link CheckDomainRequest} {@link CheckDomainResponse} */
  CheckDomain(data: CheckDomainRequest, config?: AxiosRequestConfig): AxiosPromise<CheckDomainResponse>;
  /** 创建自定义DNS Host {@link CreateCustomDnsHostRequest} {@link CreateCustomDnsHostResponse} */
  CreateCustomDnsHost(data: CreateCustomDnsHostRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCustomDnsHostResponse>;
  /** 批量域名注册 {@link CreateDomainBatchRequest} {@link CreateDomainBatchResponse} */
  CreateDomainBatch(data: CreateDomainBatchRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDomainBatchResponse>;
  /** 创建赎回订单 {@link CreateDomainRedemptionRequest} {@link CreateDomainRedemptionResponse} */
  CreateDomainRedemption(data: CreateDomainRedemptionRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDomainRedemptionResponse>;
  /** 验证手机邮箱 {@link CreatePhoneEmailRequest} {@link CreatePhoneEmailResponse} */
  CreatePhoneEmail(data: CreatePhoneEmailRequest, config?: AxiosRequestConfig): AxiosPromise<CreatePhoneEmailResponse>;
  /** 添加域名信息模板 {@link CreateTemplateRequest} {@link CreateTemplateResponse} */
  CreateTemplate(data: CreateTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTemplateResponse>;
  /** 删除记录 {@link DeleteBiddingRequest} {@link DeleteBiddingResponse} */
  DeleteBidding(data?: DeleteBiddingRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteBiddingResponse>;
  /** 删除自定义DNS Host {@link DeleteCustomDnsHostRequest} {@link DeleteCustomDnsHostResponse} */
  DeleteCustomDnsHost(data: DeleteCustomDnsHostRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCustomDnsHostResponse>;
  /** 删除手机邮箱 {@link DeletePhoneEmailRequest} {@link DeletePhoneEmailResponse} */
  DeletePhoneEmail(data: DeletePhoneEmailRequest, config?: AxiosRequestConfig): AxiosPromise<DeletePhoneEmailResponse>;
  /** 合作商删除预定域名信息 {@link DeleteReservedPreDomainInfoRequest} {@link DeleteReservedPreDomainInfoResponse} */
  DeleteReservedPreDomainInfo(data: DeleteReservedPreDomainInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteReservedPreDomainInfoResponse>;
  /** 删除信息模板 {@link DeleteTemplateRequest} {@link DeleteTemplateResponse} */
  DeleteTemplate(data: DeleteTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteTemplateResponse>;
  /** 获取竞价列表 {@link DescribeAuctionListRequest} {@link DescribeAuctionListResponse} */
  DescribeAuctionList(data: DescribeAuctionListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAuctionListResponse>;
  /** 批量操作日志详情 {@link DescribeBatchOperationLogDetailsRequest} {@link DescribeBatchOperationLogDetailsResponse} */
  DescribeBatchOperationLogDetails(data: DescribeBatchOperationLogDetailsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBatchOperationLogDetailsResponse>;
  /** 批量操作日志列表 {@link DescribeBatchOperationLogsRequest} {@link DescribeBatchOperationLogsResponse} */
  DescribeBatchOperationLogs(data?: DescribeBatchOperationLogsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBatchOperationLogsResponse>;
  /** 我预约的域名-预约详情 {@link DescribeBiddingAppointDetailRequest} {@link DescribeBiddingAppointDetailResponse} */
  DescribeBiddingAppointDetail(data?: DescribeBiddingAppointDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBiddingAppointDetailResponse>;
  /** 我预定的域名 {@link DescribeBiddingAppointListRequest} {@link DescribeBiddingAppointListResponse} */
  DescribeBiddingAppointList(data: DescribeBiddingAppointListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBiddingAppointListResponse>;
  /** 我竞价的域名-竞价详情 {@link DescribeBiddingDetailRequest} {@link DescribeBiddingDetailResponse} */
  DescribeBiddingDetail(data?: DescribeBiddingDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBiddingDetailResponse>;
  /** 我竞价的域名 {@link DescribeBiddingListRequest} {@link DescribeBiddingListResponse} */
  DescribeBiddingList(data: DescribeBiddingListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBiddingListResponse>;
  /** 我得标的域名-得标详情 {@link DescribeBiddingSuccessfulDetailRequest} {@link DescribeBiddingSuccessfulDetailResponse} */
  DescribeBiddingSuccessfulDetail(data?: DescribeBiddingSuccessfulDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBiddingSuccessfulDetailResponse>;
  /** 我得标的域名 {@link DescribeBiddingSuccessfulListRequest} {@link DescribeBiddingSuccessfulListResponse} */
  DescribeBiddingSuccessfulList(data: DescribeBiddingSuccessfulListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBiddingSuccessfulListResponse>;
  /** 查询自定义DNS Host {@link DescribeCustomDnsHostSetRequest} {@link DescribeCustomDnsHostSetResponse} */
  DescribeCustomDnsHostSet(data: DescribeCustomDnsHostSetRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCustomDnsHostSetResponse>;
  /** 域名基本信息 {@link DescribeDomainBaseInfoRequest} {@link DescribeDomainBaseInfoResponse} */
  DescribeDomainBaseInfo(data: DescribeDomainBaseInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDomainBaseInfoResponse>;
  /** 我的域名列表 {@link DescribeDomainNameListRequest} {@link DescribeDomainNameListResponse} */
  DescribeDomainNameList(data?: DescribeDomainNameListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDomainNameListResponse>;
  /** 域名价格列表 {@link DescribeDomainPriceListRequest} {@link DescribeDomainPriceListResponse} */
  DescribeDomainPriceList(data?: DescribeDomainPriceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDomainPriceListResponse>;
  /** 获取域名实名信息 {@link DescribeDomainSimpleInfoRequest} {@link DescribeDomainSimpleInfoResponse} */
  DescribeDomainSimpleInfo(data: DescribeDomainSimpleInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDomainSimpleInfoResponse>;
  /** 等待支付详情接口 {@link DescribePayWaitDetailRequest} {@link DescribePayWaitDetailResponse} */
  DescribePayWaitDetail(data: DescribePayWaitDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePayWaitDetailResponse>;
  /** 已验证手机邮箱列表 {@link DescribePhoneEmailListRequest} {@link DescribePhoneEmailListResponse} */
  DescribePhoneEmailList(data?: DescribePhoneEmailListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePhoneEmailListResponse>;
  /** 查询预释放竞价列表 {@link DescribePreAuctionListRequest} {@link DescribePreAuctionListResponse} */
  DescribePreAuctionList(data?: DescribePreAuctionListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePreAuctionListResponse>;
  /** 提前获取预释放域名数据 {@link DescribePreDomainListRequest} {@link DescribePreDomainListResponse} */
  DescribePreDomainList(data?: DescribePreDomainListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePreDomainListResponse>;
  /** 购买页预释放域名查询 {@link DescribePreReleaseListRequest} {@link DescribePreReleaseListResponse} */
  DescribePreReleaseList(data?: DescribePreReleaseListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePreReleaseListResponse>;
  /** 合作商查询竞价信息 {@link DescribeReservedBidInfoRequest} {@link DescribeReservedBidInfoResponse} */
  DescribeReservedBidInfo(data: DescribeReservedBidInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeReservedBidInfoResponse>;
  /** 查询预约预释放域名状态 {@link DescribeReservedPreDomainInfoRequest} {@link DescribeReservedPreDomainInfoResponse} */
  DescribeReservedPreDomainInfo(data?: DescribeReservedPreDomainInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeReservedPreDomainInfoResponse>;
  /** 获取模板信息 {@link DescribeTemplateRequest} {@link DescribeTemplateResponse} */
  DescribeTemplate(data: DescribeTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTemplateResponse>;
  /** 信息模板列表 {@link DescribeTemplateListRequest} {@link DescribeTemplateListResponse} */
  DescribeTemplateList(data?: DescribeTemplateListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTemplateListResponse>;
  /** 查询支持注册后缀 {@link DescribeTldListRequest} {@link DescribeTldListResponse} */
  DescribeTldList(data?: DescribeTldListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTldListResponse>;
  /** 查询预释放未预约域名详情接口 {@link DescribeUnPreDomainDetailRequest} {@link DescribeUnPreDomainDetailResponse} */
  DescribeUnPreDomainDetail(data: DescribeUnPreDomainDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUnPreDomainDetailResponse>;
  /** 修改自定义DNS Host {@link ModifyCustomDnsHostRequest} {@link ModifyCustomDnsHostResponse} */
  ModifyCustomDnsHost(data: ModifyCustomDnsHostRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCustomDnsHostResponse>;
  /** 批量域名 DNS 修改 {@link ModifyDomainDNSBatchRequest} {@link ModifyDomainDNSBatchResponse} */
  ModifyDomainDNSBatch(data: ModifyDomainDNSBatchRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDomainDNSBatchResponse>;
  /** 批量账号间转移 {@link ModifyDomainOwnerBatchRequest} {@link ModifyDomainOwnerBatchResponse} */
  ModifyDomainOwnerBatch(data: ModifyDomainOwnerBatchRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDomainOwnerBatchResponse>;
  /** 修改DNS Host {@link ModifyIntlCustomDnsHostRequest} {@link ModifyIntlCustomDnsHostResponse} */
  ModifyIntlCustomDnsHost(data: ModifyIntlCustomDnsHostRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyIntlCustomDnsHostResponse>;
  /** 修改模板 {@link ModifyTemplateRequest} {@link ModifyTemplateResponse} */
  ModifyTemplate(data: ModifyTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyTemplateResponse>;
  /** 批量域名续费 {@link RenewDomainBatchRequest} {@link RenewDomainBatchResponse} */
  RenewDomainBatch(data: RenewDomainBatchRequest, config?: AxiosRequestConfig): AxiosPromise<RenewDomainBatchResponse>;
  /** 预留预释放域名 {@link ReservedPreDomainsRequest} {@link ReservedPreDomainsResponse} */
  ReservedPreDomains(data: ReservedPreDomainsRequest, config?: AxiosRequestConfig): AxiosPromise<ReservedPreDomainsResponse>;
  /** 发送手机邮箱验证码 {@link SendPhoneEmailCodeRequest} {@link SendPhoneEmailCodeResponse} */
  SendPhoneEmailCode(data: SendPhoneEmailCodeRequest, config?: AxiosRequestConfig): AxiosPromise<SendPhoneEmailCodeResponse>;
  /** 域名自动续费 {@link SetDomainAutoRenewRequest} {@link SetDomainAutoRenewResponse} */
  SetDomainAutoRenew(data: SetDomainAutoRenewRequest, config?: AxiosRequestConfig): AxiosPromise<SetDomainAutoRenewResponse>;
  /** 同步自定义DNS Host {@link SyncCustomDnsHostRequest} {@link SyncCustomDnsHostResponse} */
  SyncCustomDnsHost(data: SyncCustomDnsHostRequest, config?: AxiosRequestConfig): AxiosPromise<SyncCustomDnsHostResponse>;
  /** 批量域名转入 {@link TransferInDomainBatchRequest} {@link TransferInDomainBatchResponse} */
  TransferInDomainBatch(data: TransferInDomainBatchRequest, config?: AxiosRequestConfig): AxiosPromise<TransferInDomainBatchResponse>;
  /** 批量禁止转移锁 {@link TransferProhibitionBatchRequest} {@link TransferProhibitionBatchResponse} */
  TransferProhibitionBatch(data: TransferProhibitionBatchRequest, config?: AxiosRequestConfig): AxiosPromise<TransferProhibitionBatchResponse>;
  /** 批量禁止更新锁 {@link UpdateProhibitionBatchRequest} {@link UpdateProhibitionBatchResponse} */
  UpdateProhibitionBatch(data: UpdateProhibitionBatchRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateProhibitionBatchResponse>;
  /** 证件图片上传 {@link UploadImageRequest} {@link UploadImageResponse} */
  UploadImage(data: UploadImageRequest, config?: AxiosRequestConfig): AxiosPromise<UploadImageResponse>;
}

export declare type Versions = ["2018-08-08"];

export default Domain;
