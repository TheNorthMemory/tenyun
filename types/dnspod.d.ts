/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 批量添加的记录 */
declare interface AddRecordBatch {
  /** 记录类型, 详见 DescribeRecordType 接口。 */
  RecordType: string;
  /** 记录值。 */
  Value: string;
  /** 子域名(主机记录)，默认为@。 */
  SubDomain?: string;
  /** 解析记录的线路，详见 DescribeRecordLineList 接口，RecordLine和RecordLineId都未填时，默认为「默认」线路。 */
  RecordLine?: string;
  /** 解析记录的线路 ID，RecordLine和RecordLineId都有时，系统优先取 RecordLineId。 */
  RecordLineId?: string;
  /** 记录权重值(暂未支持)。 */
  Weight?: number | null;
  /** 记录的 MX 记录值，非 MX 记录类型，默认为 0，MX记录则必选。 */
  MX?: number;
  /** 记录的 TTL 值，默认600。 */
  TTL?: number;
  /** 记录状态(暂未支持)。0表示禁用，1表示启用。默认启用。 */
  Enabled?: number;
  /** 记录备注(暂未支持)。 */
  Remark?: string;
}

/** 批量任务中的记录信息 */
declare interface BatchRecordInfo {
  /** 记录 ID */
  RecordId: number | null;
  /** 子域名(主机记录)。 */
  SubDomain: string | null;
  /** 记录类型, 详见 DescribeRecordType 接口 */
  RecordType: string | null;
  /** 解析记录的线路，详见 DescribeRecordLineList 接口 */
  RecordLine: string | null;
  /** 记录值 */
  Value: string | null;
  /** 记录的 TTL 值 */
  TTL: number | null;
  /** 记录添加状态 */
  Status: string | null;
  /** 操作类型 */
  Operation: string | null;
  /** 错误信息 */
  ErrMsg: string | null;
  /** 此条记录在列表中的ID */
  Id: number;
  /** 记录生效状态 */
  Enabled: number | null;
  /** 记录的MX权重 */
  MX: number | null;
}

/** 批量添加域名返回结构 */
declare interface CreateDomainBatchDetail {
  /** 见RecordInfoBatch */
  RecordList: CreateDomainBatchRecord[] | null;
  /** 任务编号 */
  Id: number;
  /** 域名 */
  Domain: string | null;
  /** 域名等级 */
  DomainGrade: string | null;
  /** 错误信息 */
  ErrMsg: string | null;
  /** 该条任务运行状态 */
  Status: string | null;
  /** 操作类型 */
  Operation: string | null;
}

/** 批量添加域名任务中的记录信息 */
declare interface CreateDomainBatchRecord {
  /** 子域名(主机记录)。 */
  SubDomain: string | null;
  /** 记录类型, 详见 DescribeRecordType 接口 */
  RecordType: string | null;
  /** 解析记录的线路，详见 DescribeRecordLineList 接口 */
  RecordLine: string | null;
  /** 记录值 */
  Value: string | null;
  /** 记录的 TTL 值 */
  TTL: number | null;
  /** 记录添加状态 */
  Status: string | null;
  /** 操作类型 */
  Operation: string | null;
  /** 错误信息 */
  ErrMsg: string | null;
  /** 此条记录在列表中的ID */
  Id: number;
}

/** 批量添加记录返回结构 */
declare interface CreateRecordBatchDetail {
  /** 见RecordInfoBatch */
  RecordList: CreateRecordBatchRecord[] | null;
  /** 任务编号 */
  Id: number;
  /** 域名 */
  Domain: string | null;
  /** 域名等级 */
  DomainGrade: string | null;
  /** 错误信息 */
  ErrMsg: string | null;
  /** 该条任务运行状态 */
  Status: string | null;
  /** 操作类型 */
  Operation: string | null;
  /** 域名ID */
  DomainId: number | null;
}

/** 批量添加记录任务中的记录信息 */
declare interface CreateRecordBatchRecord {
  /** 子域名(主机记录)。 */
  SubDomain: string | null;
  /** 记录类型, 详见 DescribeRecordType 接口 */
  RecordType: string | null;
  /** 解析记录的线路，详见 DescribeRecordLineList 接口 */
  RecordLine: string | null;
  /** 记录值 */
  Value: string | null;
  /** 记录的 TTL 值 */
  TTL: number | null;
  /** 记录添加状态 */
  Status: string | null;
  /** 操作类型 */
  Operation: string | null;
  /** 错误信息 */
  ErrMsg: string | null;
  /** 此条记录在列表中的ID */
  Id: number;
  /** 记录的MX权重 */
  MX: number | null;
}

/** 子订单号列表 */
declare interface Deals {
  /** 子订单ID */
  DealId: string;
  /** 子订单号 */
  DealName: string;
}

/** 查看任务详情返回结构 */
declare interface DescribeBatchTaskDetail {
  /** 见BatchRecordInfo */
  RecordList: BatchRecordInfo[] | null;
  /** 任务编号 */
  Id: number;
  /** 域名 */
  Domain: string | null;
  /** 域名等级 */
  DomainGrade: string | null;
  /** 错误信息 */
  ErrMsg: string | null;
  /** 该条任务运行状态 */
  Status: string | null;
  /** 操作类型 */
  Operation: string | null;
  /** 域名ID */
  DomainId: number | null;
}

/** 域名别名解析量统计信息 */
declare interface DomainAliasAnalyticsItem {
  /** 域名解析量统计查询信息 */
  Info: DomainAnalyticsInfo;
  /** 当前统计维度解析量小计 */
  Data: DomainAnalyticsDetail[];
}

/** 域名别名信息 */
declare interface DomainAliasInfo {
  /** 域名别名ID */
  Id: number;
  /** 域名别名 */
  DomainAlias: string;
}

/** 当前统计维度解析量小计 */
declare interface DomainAnalyticsDetail {
  /** 当前统计维度解析量小计 */
  Num: number;
  /** 按天统计时，为统计日期 */
  DateKey: string;
  /** 按小时统计时，为统计的当前时间的小时数(0-23)，例：HourKey为23时，统计周期为22点-23点的解析量 */
  HourKey: number | null;
}

/** 域名解析量统计查询信息 */
declare interface DomainAnalyticsInfo {
  /** DATE:按天维度统计 HOUR:按小时维度统计 */
  DnsFormat: string;
  /** 当前统计周期解析量总计 */
  DnsTotal: number;
  /** 当前查询的域名 */
  Domain: string;
  /** 当前统计周期开始时间 */
  StartDate: string;
  /** 当前统计周期结束时间 */
  EndDate: string;
}

/** 列表页分页统计信息 */
declare interface DomainCountInfo {
  /** 符合条件的域名数量 */
  DomainTotal: number;
  /** 用户可以查看的所有域名数量 */
  AllTotal: number;
  /** 用户账号添加的域名数量 */
  MineTotal: number;
  /** 共享给用户的域名数量 */
  ShareTotal: number;
  /** 付费域名数量 */
  VipTotal: number;
  /** 暂停的域名数量 */
  PauseTotal: number;
  /** dns设置错误的域名数量 */
  ErrorTotal: number;
  /** 锁定的域名数量 */
  LockTotal: number;
  /** 封禁的域名数量 */
  SpamTotal: number;
  /** 30天内即将到期的域名数量 */
  VipExpire: number;
  /** 分享给其它人的域名数量 */
  ShareOutTotal: number;
  /** 指定分组内的域名数量 */
  GroupTotal: number;
}

/** 域名信息（创建域名时返回） */
declare interface DomainCreateInfo {
  /** 域名ID */
  Id: number;
  /** 域名 */
  Domain: string;
  /** 域名的punycode */
  Punycode: string;
  /** 域名的NS列表 */
  GradeNsList: string[];
}

/** 域名详情 */
declare interface DomainInfo {
  /** 域名ID */
  DomainId: number;
  /** 域名状态 */
  Status: string;
  /** 域名套餐等级 */
  Grade: string;
  /** 域名分组ID */
  GroupId: number;
  /** 是否星标域名 */
  IsMark: string;
  /** TTL(DNS记录缓存时间) */
  TTL: number;
  /** cname加速启用状态 */
  CnameSpeedup: string;
  /** 域名备注 */
  Remark: string | null;
  /** 域名Punycode */
  Punycode: string;
  /** 域名DNS状态 */
  DnsStatus: string;
  /** 域名的NS列表 */
  DnspodNsList: string[];
  /** 域名 */
  Domain: string;
  /** 域名等级代号 */
  GradeLevel: number;
  /** 域名所属的用户ID */
  UserId: number;
  /** 是否为付费域名 */
  IsVip: string;
  /** 域名所有者的账号 */
  Owner: string;
  /** 域名等级的描述 */
  GradeTitle: string;
  /** 域名创建时间 */
  CreatedOn: string;
  /** 最后操作时间 */
  UpdatedOn: string;
  /** 腾讯云账户Uin */
  Uin: string;
  /** 域名实际使用的NS列表 */
  ActualNsList: string[] | null;
  /** 域名的记录数量 */
  RecordCount: number;
  /** 域名所有者的账户昵称 */
  OwnerNick: string | null;
}

/** 域名列表元素 */
declare interface DomainListItem {
  /** 系统分配给域名的唯一标识 */
  DomainId: number;
  /** 域名的原始格式 */
  Name: string;
  /** 域名的状态，正常：ENABLE，暂停：PAUSE，封禁：SPAM */
  Status: string;
  /** 域名默认的解析记录默认TTL值 */
  TTL: number;
  /** 是否开启CNAME加速，开启：ENABLE，未开启：DISABLE */
  CNAMESpeedup: string;
  /** DNS 设置状态，错误：DNSERROR，正常：空字符串 */
  DNSStatus: string;
  /** 域名的套餐等级代码 */
  Grade: string;
  /** 域名所属的分组Id */
  GroupId: number;
  /** 是否开启搜索引擎推送优化，是：YES，否：NO */
  SearchEnginePush: string;
  /** 域名备注说明 */
  Remark: string;
  /** 经过punycode编码后的域名格式 */
  Punycode: string;
  /** 系统为域名分配的有效DNS */
  EffectiveDNS: string[];
  /** 域名套餐等级对应的序号 */
  GradeLevel: number;
  /** 套餐名称 */
  GradeTitle: string;
  /** 是否是付费套餐 */
  IsVip: string;
  /** 付费套餐开通时间 */
  VipStartAt: string;
  /** 付费套餐到期时间 */
  VipEndAt: string;
  /** 域名是否开通VIP自动续费，是：YES，否：NO，默认：DEFAULT */
  VipAutoRenew: string;
  /** 域名下的记录数量 */
  RecordCount: number;
  /** 域名添加时间 */
  CreatedOn: string;
  /** 域名更新时间 */
  UpdatedOn: string;
  /** 域名所属账号 */
  Owner: string;
}

/** 域名共享信息 */
declare interface DomainShareInfo {
  /** 域名共享对象的账号 */
  ShareTo: string;
  /** 共享模式，“rw”：可读写。 “r”:：只读 */
  Mode: string;
  /** 共享状态“enabled”：共享成功。“pending”：共享到的账号不存在, 等待注册 */
  Status: string;
}

/** 域名分组列表 */
declare interface GroupInfo {
  /** 分组ID */
  GroupId: number;
  /** 分组名称 */
  GroupName: string;
  /** 分组类型 */
  GroupType: string;
  /** 该分组中域名个数 */
  Size: number;
}

/** 线路分组信息 */
declare interface LineGroupInfo {
  /** 线路分组ID */
  LineId: string;
  /** 线路分组名称 */
  Name: string;
  /** 分组类型 */
  Type: string;
  /** 线路分组包含的线路列表 */
  LineList: string[];
}

/** 解析线路信息 */
declare interface LineInfo {
  /** 线路名称 */
  Name: string;
  /** 线路ID */
  LineId: string;
}

/** 域名锁定信息 */
declare interface LockInfo {
  /** 域名 ID */
  DomainId: number;
  /** 域名解锁码 */
  LockCode: string;
  /** 域名自动解锁日期 */
  LockEnd: string;
}

/** 批量添加记录返回结构 */
declare interface ModifyRecordBatchDetail {
  /** 见RecordInfoBatchModify */
  RecordList: BatchRecordInfo[] | null;
  /** 任务编号 */
  Id: number;
  /** 域名 */
  Domain: string | null;
  /** 域名等级 */
  DomainGrade: string | null;
  /** 错误信息 */
  ErrMsg: string | null;
  /** 该条任务运行状态 */
  Status: string | null;
  /** 操作类型 */
  Operation: string | null;
  /** 域名ID */
  DomainId: number | null;
}

/** 域名权限项 */
declare interface PurviewInfo {
  /** 权限名称 */
  Name: string;
  /** 权限值 */
  Value: string;
}

/** 查询记录列表的数量统计信息 */
declare interface RecordCountInfo {
  /** 子域名数量 */
  SubdomainCount: number;
  /** 列表返回的记录数 */
  ListCount: number;
  /** 总的记录数 */
  TotalCount: number;
}

/** 记录信息 */
declare interface RecordInfo {
  /** 记录 ID 。 */
  Id: number;
  /** 子域名(主机记录)。 */
  SubDomain: string;
  /** 记录类型, 详见 DescribeRecordType 接口。 */
  RecordType: string;
  /** 解析记录的线路，详见 DescribeRecordLineList 接口。 */
  RecordLine: string;
  /** 解析记录的线路 ID ，详见 DescribeRecordLineList 接口。 */
  RecordLineId: string;
  /** 记录值。 */
  Value: string;
  /** 记录权重值。 */
  Weight: number | null;
  /** 记录的 MX 记录值，非 MX 记录类型，默认为 0。 */
  MX: number;
  /** 记录的 TTL 值。 */
  TTL: number;
  /** 记录状态。0表示禁用，1表示启用。 */
  Enabled: number;
  /** 该记录的 D 监控状态。"Ok" : 服务器正常。"Warn" : 该记录有报警, 服务器返回 4XX。"Down" : 服务器宕机。"" : 该记录未开启 D 监控。 */
  MonitorStatus: string;
  /** 记录的备注。 */
  Remark: string | null;
  /** 记录最后更新时间。 */
  UpdatedOn: string;
  /** 域名 ID 。 */
  DomainId: number;
}

/** 记录列表元素 */
declare interface RecordListItem {
  /** 记录Id */
  RecordId: number;
  /** 记录值 */
  Value: string;
  /** 记录状态，启用：ENABLE，暂停：DISABLE */
  Status: string;
  /** 更新时间 */
  UpdatedOn: string;
  /** 主机名 */
  Name: string;
  /** 记录线路 */
  Line: string;
  /** 线路Id */
  LineId: string;
  /** 记录类型 */
  Type: string;
  /** 记录权重，用于负载均衡记录 */
  Weight: number | null;
  /** 记录监控状态，正常：OK，告警：WARN，宕机：DOWN，未设置监控或监控暂停则为空 */
  MonitorStatus: string;
  /** 记录备注说明 */
  Remark: string;
  /** 记录缓存时间 */
  TTL: number;
  /** MX值，只有MX记录有 */
  MX: number | null;
}

/** 子域名别名解析量统计信息 */
declare interface SubdomainAliasAnalyticsItem {
  /** 子域名解析量统计查询信息 */
  Info: SubdomainAnalyticsInfo;
  /** 当前统计维度解析量小计 */
  Data: DomainAnalyticsDetail[];
}

/** 子域名解析量统计查询信息 */
declare interface SubdomainAnalyticsInfo {
  /** DATE:按天维度统计 HOUR:按小时维度统计 */
  DnsFormat: string;
  /** 当前统计周期解析量总计 */
  DnsTotal: number;
  /** 当前查询的域名 */
  Domain: string;
  /** 当前统计周期开始时间 */
  StartDate: string;
  /** 当前统计周期结束时间 */
  EndDate: string;
  /** 当前统计的子域名 */
  Subdomain: string;
}

/** 用户信息 */
declare interface UserInfo {
  /** 用户昵称 */
  Nick: string;
  /** 用户ID */
  Id: number;
  /** 用户账号, 邮箱格式 */
  Email: string;
  /** 账号状态：”enabled”: 正常；”disabled”: 被封禁 */
  Status: string;
  /** 电话号码 */
  Telephone: string;
  /** 邮箱是否通过验证：”yes”: 通过；”no”: 未通过 */
  EmailVerified: string;
  /** 手机是否通过验证：”yes”: 通过；”no”: 未通过 */
  TelephoneVerified: string;
  /** 账号等级, 按照用户账号下域名等级排序, 选取一个最高等级为账号等级, 具体对应情况参见域名等级。 */
  UserGrade: string;
  /** 用户名称, 企业用户对应为公司名称 */
  RealName: string;
  /** 是否绑定微信：”yes”: 通过；”no”: 未通过 */
  WechatBinded: string;
  /** 用户UIN */
  Uin: number;
  /** 所属 DNS 服务器 */
  FreeNs: string[];
}

declare interface CreateDealRequest {
  /** 询价类型，1 新购，2 续费，3 套餐升级（增值服务暂时只支持新购） */
  DealType: number;
  /** 商品类型，1 域名套餐 2 增值服务 */
  GoodsType: number;
  /** 套餐类型：DP_PLUS：专业版DP_EXPERT：企业版DP_ULTRA：尊享版增值服务类型LB：负载均衡URL：URL转发DMONITOR_TASKS：D监控任务数DMONITOR_IP：D监控备用 IP 数CUSTOMLINE：自定义线路数 */
  GoodsChildType: string;
  /** 增值服务购买数量，如果是域名套餐固定为1，如果是增值服务则按以下规则：负载均衡、D监控任务数、D监控备用 IP 数、自定义线路数、URL 转发（必须是5的正整数倍，如 5、10、15 等） */
  GoodsNum: number;
  /** 是否开启自动续费，1 开启，2 不开启（增值服务暂不支持自动续费），默认值为 2 不开启 */
  AutoRenew: number;
  /** 需要绑定套餐的域名，如 dnspod.cn，如果是续费或升级，domain 参数必须要传，新购可不传。 */
  Domain?: string;
  /** 套餐时长：1. 套餐以月为单位（按月只能是 3、6 还有 12 的倍数），套餐例如购买一年则传12，最大120 。（续费最低一年）2. 升级套餐时不需要传。3. 增值服务的时长单位为年，买一年传1（增值服务新购按年只能是 1，增值服务续费最大为 10） */
  TimeSpan?: number;
  /** 套餐类型，需要升级到的套餐类型，只有升级时需要。 */
  NewPackageType?: string;
}

declare interface CreateDealResponse {
  /** 大订单号，一个大订单号下可以有多个子订单，说明是同一次下单 */
  BigDealId: string;
  /** 子订单列表 */
  DealList: Deals[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateDomainAliasRequest {
  /** 域名别名 */
  DomainAlias: string;
  /** 域名 */
  Domain: string;
  /** 域名ID，参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain */
  DomainId?: number;
}

declare interface CreateDomainAliasResponse {
  /** 域名别名ID */
  DomainAliasId: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateDomainBatchRequest {
  /** 域名数组 */
  DomainList: string[];
  /** 每个域名添加 @ 和 www 的 A 记录值，记录值为IP，如果不传此参数或者传空，将只添加域名，不添加记录。 */
  RecordValue?: string;
}

declare interface CreateDomainBatchResponse {
  /** 批量添加域名信息 */
  DetailList: CreateDomainBatchDetail[];
  /** 批量任务的ID */
  JobId: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateDomainGroupRequest {
  /** 域名分组 */
  GroupName: string;
}

declare interface CreateDomainGroupResponse {
  /** 域名分组ID */
  GroupId: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateDomainRequest {
  /** 域名 */
  Domain: string;
  /** 域名分组ID */
  GroupId?: number;
  /** 是否星标域名，”yes”、”no” 分别代表是和否。 */
  IsMark?: string;
}

declare interface CreateDomainResponse {
  /** 域名信息 */
  DomainInfo: DomainCreateInfo;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateRecordBatchRequest {
  /** 域名ID，多个 domain_id 用英文逗号进行分割。 */
  DomainIdList: string[];
  /** 记录数组 */
  RecordList: AddRecordBatch[];
}

declare interface CreateRecordBatchResponse {
  /** 批量添加域名信息 */
  DetailList: CreateRecordBatchDetail[];
  /** 批量任务的ID */
  JobId: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateRecordRequest {
  /** 域名 */
  Domain: string;
  /** 记录类型，通过 API 记录类型获得，大写英文，比如：A 。 */
  RecordType: string;
  /** 记录线路，通过 API 记录线路获得，中文，比如：默认。 */
  RecordLine: string;
  /** 记录值，如 IP : 200.200.200.200， CNAME : cname.dnspod.com.， MX : mail.dnspod.com.。 */
  Value: string;
  /** 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。 */
  DomainId?: number;
  /** 主机记录，如 www，如果不传，默认为 @。 */
  SubDomain?: string;
  /** 线路的 ID，通过 API 记录线路获得，英文字符串，比如：10=1。参数RecordLineId优先级高于RecordLine，如果同时传递二者，优先使用RecordLineId参数。 */
  RecordLineId?: string;
  /** MX 优先级，当记录类型是 MX 时有效，范围1-20，MX 记录时必选。 */
  MX?: number;
  /** TTL，范围1-604800，不同等级域名最小值不同。 */
  TTL?: number;
  /** 权重信息，0到100的整数。仅企业 VIP 域名可用，0 表示关闭，不传该参数，表示不设置权重信息。 */
  Weight?: number;
  /** 记录初始状态，取值范围为 ENABLE 和 DISABLE 。默认为 ENABLE ，如果传入 DISABLE，解析不会生效，也不会验证负载均衡的限制。 */
  Status?: string;
}

declare interface CreateRecordResponse {
  /** 记录ID */
  RecordId: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteDomainAliasRequest {
  /** 域名别名ID */
  DomainAliasId: number;
  /** 域名 */
  Domain: string;
  /** 域名ID，参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain */
  DomainId?: number;
}

declare interface DeleteDomainAliasResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteDomainRequest {
  /** 域名 */
  Domain: string;
  /** 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。 */
  DomainId?: number;
}

declare interface DeleteDomainResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteRecordRequest {
  /** 域名 */
  Domain: string;
  /** 记录 ID 。 */
  RecordId: number;
  /** 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。 */
  DomainId?: number;
}

declare interface DeleteRecordResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteShareDomainRequest {
  /** 域名 */
  Domain: string;
  /** 域名共享的账号 */
  Account: string;
  /** 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。 */
  DomainId?: number;
}

declare interface DeleteShareDomainResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeBatchTaskRequest {
  /** 任务ID */
  JobId: number;
}

declare interface DescribeBatchTaskResponse {
  /** 批量任务详情 */
  DetailList: DescribeBatchTaskDetail[];
  /** 总任务条数 */
  TotalCount: number;
  /** 成功条数 */
  SuccessCount: number;
  /** 失败条数 */
  FailCount: number;
  /** 批量任务类型 */
  JobType: string;
  /** 任务创建时间 */
  CreatedAt: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeDomainAliasListRequest {
  /** 域名 */
  Domain: string;
  /** 域名ID,域名ID，参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain */
  DomainId?: number;
}

declare interface DescribeDomainAliasListResponse {
  /** 域名别名列表 */
  DomainAliasList: DomainAliasInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeDomainAnalyticsRequest {
  /** 要查询解析量的域名 */
  Domain: string;
  /** 查询的开始时间，格式：YYYY-MM-DD */
  StartDate: string;
  /** 查询的结束时间，格式：YYYY-MM-DD */
  EndDate: string;
  /** DATE:按天维度统计 HOUR:按小时维度统计 */
  DnsFormat?: string;
  /** 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。 */
  DomainId?: number;
}

declare interface DescribeDomainAnalyticsResponse {
  /** 当前统计维度解析量小计 */
  Data: DomainAnalyticsDetail[];
  /** 域名解析量统计查询信息 */
  Info: DomainAnalyticsInfo;
  /** 域名别名解析量统计信息 */
  AliasData: DomainAliasAnalyticsItem[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeDomainGroupListRequest {
}

declare interface DescribeDomainGroupListResponse {
  /** 分组列表 */
  GroupList: GroupInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeDomainListRequest {
  /** 域名分组类型，默认为ALL。可取值为ALL，MINE，SHARE，ISMARK，PAUSE，VIP，RECENT，SHARE_OUT。 */
  Type?: string;
  /** 记录开始的偏移, 第一条记录为 0, 依次类推。默认值为0。 */
  Offset?: number;
  /** 要获取的域名数量, 比如获取20个, 则为20。默认值为3000。 */
  Limit?: number;
  /** 分组ID, 获取指定分组的域名 */
  GroupId?: number;
  /** 根据关键字搜索域名 */
  Keyword?: string;
}

declare interface DescribeDomainListResponse {
  /** 列表页统计信息 */
  DomainCountInfo: DomainCountInfo;
  /** 域名列表 */
  DomainList: DomainListItem[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeDomainLogListRequest {
  /** 域名 */
  Domain: string;
  /** 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。 */
  DomainId?: number;
  /** 记录开始的偏移，第一条记录为 0，依次类推，默认为0 */
  Offset?: number;
  /** 共要获取的日志条数，比如获取20条，则为20，默认为500条，单次最多获取500条。 */
  Limit?: number;
}

declare interface DescribeDomainLogListResponse {
  /** 域名信息 */
  LogList: string[] | null;
  /** 分页大小 */
  PageSize: number;
  /** 日志总条数 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeDomainPurviewRequest {
  /** 域名 */
  Domain: string;
  /** 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。 */
  DomainId?: number;
}

declare interface DescribeDomainPurviewResponse {
  /** 域名权限列表 */
  PurviewList: PurviewInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeDomainRequest {
  /** 域名 */
  Domain: string;
  /** 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。 */
  DomainId?: number;
}

declare interface DescribeDomainResponse {
  /** 域名信息 */
  DomainInfo: DomainInfo;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeDomainShareInfoRequest {
  /** 域名 */
  Domain: string;
  /** 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。 */
  DomainId?: number;
}

declare interface DescribeDomainShareInfoResponse {
  /** 域名共享信息 */
  ShareList: DomainShareInfo[];
  /** 域名拥有者账号 */
  Owner: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeRecordLineListRequest {
  /** 域名。 */
  Domain: string;
  /** 域名等级。+ 旧套餐：D_FREE、D_PLUS、D_EXTRA、D_EXPERT、D_ULTRA 分别对应免费套餐、个人豪华、企业1、企业2、企业3。+ 新套餐：DP_FREE、DP_PLUS、DP_EXTRA、DP_EXPERT、DP_ULTRA 分别对应新免费、个人专业版、企业创业版、企业标准版、企业旗舰版。 */
  DomainGrade: string;
  /** 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。 */
  DomainId?: number;
}

declare interface DescribeRecordLineListResponse {
  /** 线路列表。 */
  LineList: LineInfo[];
  /** 线路分组列表。 */
  LineGroupList: LineGroupInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeRecordListRequest {
  /** 要获取的解析记录所属的域名 */
  Domain: string;
  /** 要获取的解析记录所属的域名Id，如果传了DomainId，系统将会忽略Domain参数 */
  DomainId?: number;
  /** 解析记录的主机头，如果传了此参数，则只会返回此主机头对应的解析记录 */
  Subdomain?: string;
  /** 获取某种类型的解析记录，如 A，CNAME，NS，AAAA，显性URL，隐性URL，CAA，SPF等 */
  RecordType?: string;
  /** 获取某条线路名称的解析记录 */
  RecordLine?: string;
  /** 获取某个线路Id对应的解析记录，如果传RecordLineId，系统会忽略RecordLine参数 */
  RecordLineId?: string;
  /** 获取某个分组下的解析记录时，传这个分组Id */
  GroupId?: number;
  /** 通过关键字搜索解析记录，当前支持搜索主机头和记录值 */
  Keyword?: string;
  /** 排序字段，支持 name,line,type,value,weight,mx,ttl,updated_on 几个字段。 */
  SortField?: string;
  /** 排序方式，正序：ASC，逆序：DESC。默认值为ASC。 */
  SortType?: string;
  /** 偏移量，默认值为0。 */
  Offset?: number;
  /** 限制数量，当前Limit最大支持3000。默认值为100。 */
  Limit?: number;
}

declare interface DescribeRecordListResponse {
  /** 记录的数量统计信息 */
  RecordCountInfo: RecordCountInfo;
  /** 获取的记录列表 */
  RecordList: RecordListItem[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeRecordRequest {
  /** 域名 */
  Domain: string;
  /** 记录 ID 。 */
  RecordId: number;
  /** 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。 */
  DomainId?: number;
}

declare interface DescribeRecordResponse {
  /** 记录信息 */
  RecordInfo: RecordInfo;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeRecordTypeRequest {
  /** 域名等级。+ 旧套餐：D_FREE、D_PLUS、D_EXTRA、D_EXPERT、D_ULTRA 分别对应免费套餐、个人豪华、企业1、企业2、企业3。+ 新套餐：DP_FREE、DP_PLUS、DP_EXTRA、DP_EXPERT、DP_ULTRA 分别对应新免费、个人专业版、企业创业版、企业标准版、企业旗舰版。 */
  DomainGrade: string;
}

declare interface DescribeRecordTypeResponse {
  /** 记录类型列表 */
  TypeList: string[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeSubdomainAnalyticsRequest {
  /** 要查询解析量的域名 */
  Domain: string;
  /** 查询的开始时间，格式：YYYY-MM-DD */
  StartDate: string;
  /** 查询的结束时间，格式：YYYY-MM-DD */
  EndDate: string;
  /** 要查询解析量的子域名 */
  Subdomain: string;
  /** DATE:按天维度统计 HOUR:按小时维度统计 */
  DnsFormat?: string;
  /** 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。 */
  DomainId?: number;
}

declare interface DescribeSubdomainAnalyticsResponse {
  /** 当前统计维度解析量小计 */
  Data: DomainAnalyticsDetail[];
  /** 子域名解析量统计查询信息 */
  Info: SubdomainAnalyticsInfo;
  /** 子域名别名解析量统计信息 */
  AliasData: SubdomainAliasAnalyticsItem[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeUserDetailRequest {
}

declare interface DescribeUserDetailResponse {
  /** 帐户信息 */
  UserInfo: UserInfo;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyDomainLockRequest {
  /** 域名 */
  Domain: string;
  /** 域名要锁定的天数，最多可锁定的天数可以通过获取域名权限接口获取。 */
  LockDays: number;
  /** 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。 */
  DomainId?: number;
}

declare interface ModifyDomainLockResponse {
  /** 域名锁定信息 */
  LockInfo: LockInfo;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyDomainOwnerRequest {
  /** 域名 */
  Domain: string;
  /** 域名需要转入的账号，支持Uin或者邮箱格式 */
  Account: string;
  /** 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。 */
  DomainId?: number;
}

declare interface ModifyDomainOwnerResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyDomainRemarkRequest {
  /** 域名 */
  Domain: string;
  /** 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。 */
  DomainId?: number;
  /** 域名备注，删除备注请提交空内容。 */
  Remark?: string;
}

declare interface ModifyDomainRemarkResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyDomainStatusRequest {
  /** 域名 */
  Domain: string;
  /** 域名状态，”enable” 、”disable” 分别代表启用和暂停 */
  Status: string;
  /** 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。 */
  DomainId?: number;
}

declare interface ModifyDomainStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyDomainUnlockRequest {
  /** 域名 */
  Domain: string;
  /** 域名解锁码，锁定的时候会返回。 */
  LockCode: string;
  /** 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。 */
  DomainId?: number;
}

declare interface ModifyDomainUnlockResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyDynamicDNSRequest {
  /** 域名 */
  Domain: string;
  /** 记录ID。 */
  RecordId: number;
  /** 记录线路，通过 API 记录线路获得，中文，比如：默认。 */
  RecordLine: string;
  /** 记录值，如 IP : 200.200.200.200， CNAME : cname.dnspod.com.， MX : mail.dnspod.com.。 */
  Value: string;
  /** 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。 */
  DomainId?: number;
  /** 主机记录，如 www，如果不传，默认为 @。 */
  SubDomain?: string;
  /** 线路的 ID，通过 API 记录线路获得，英文字符串，比如：10=1。参数RecordLineId优先级高于RecordLine，如果同时传递二者，优先使用RecordLineId参数。 */
  RecordLineId?: string;
  /** TTL值，如果不传，默认为域名的TTL值。 */
  Ttl?: number;
}

declare interface ModifyDynamicDNSResponse {
  /** 记录ID */
  RecordId: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyPackageAutoRenewRequest {
  /** 资源ID */
  ResourceId: string;
  /** enable 开启自动续费；disable 关闭自动续费 */
  Status: string;
}

declare interface ModifyPackageAutoRenewResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyRecordBatchRequest {
  /** 记录ID数组 */
  RecordIdList: number[];
  /** 要修改的字段，可选值为 [“sub_domain”、”record_type”、”area”、”value”、”mx”、”ttl”、”status”] 中的某一个。 */
  Change: string;
  /** 修改为，具体依赖 change 字段，必填参数。 */
  ChangeTo: string;
  /** 要修改到的记录值，仅当 change 字段为 “record_type” 时为必填参数。 */
  Value?: string;
  /** MX记录优先级，仅当修改为 MX 记录时为必填参数。 */
  MX?: string;
}

declare interface ModifyRecordBatchResponse {
  /** 批量任务ID */
  JobId: number;
  /** 见modifyRecordBatchDetail */
  DetailList: ModifyRecordBatchDetail[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyRecordRemarkRequest {
  /** 域名 */
  Domain: string;
  /** 记录 ID 。 */
  RecordId: number;
  /** 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。 */
  DomainId?: number;
  /** 解析记录备注，删除备注请提交空内容。 */
  Remark?: string;
}

declare interface ModifyRecordRemarkResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyRecordRequest {
  /** 域名 */
  Domain: string;
  /** 记录类型，通过 API 记录类型获得，大写英文，比如：A 。 */
  RecordType: string;
  /** 记录线路，通过 API 记录线路获得，中文，比如：默认。 */
  RecordLine: string;
  /** 记录值，如 IP : 200.200.200.200， CNAME : cname.dnspod.com.， MX : mail.dnspod.com.。 */
  Value: string;
  /** 记录 ID 。 */
  RecordId: number;
  /** 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。 */
  DomainId?: number;
  /** 主机记录，如 www，如果不传，默认为 @。 */
  SubDomain?: string;
  /** 线路的 ID，通过 API 记录线路获得，英文字符串，比如：10=1。参数RecordLineId优先级高于RecordLine，如果同时传递二者，优先使用RecordLineId参数。 */
  RecordLineId?: string;
  /** MX 优先级，当记录类型是 MX 时有效，范围1-20，MX 记录时必选。 */
  MX?: number;
  /** TTL，范围1-604800，不同等级域名最小值不同。 */
  TTL?: number;
  /** 权重信息，0到100的整数。仅企业 VIP 域名可用，0 表示关闭，不传该参数，表示不设置权重信息。 */
  Weight?: number;
  /** 记录初始状态，取值范围为 ENABLE 和 DISABLE 。默认为 ENABLE ，如果传入 DISABLE，解析不会生效，也不会验证负载均衡的限制。 */
  Status?: string;
}

declare interface ModifyRecordResponse {
  /** 记录ID */
  RecordId: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyRecordStatusRequest {
  /** 域名 */
  Domain: string;
  /** 记录 ID 。 */
  RecordId: number;
  /** 记录的状态。取值范围为 ENABLE 和 DISABLE。如果传入 DISABLE，解析不会生效，也不会验证负载均衡的限制。 */
  Status: string;
  /** 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。 */
  DomainId?: number;
}

declare interface ModifyRecordStatusResponse {
  /** 记录ID。 */
  RecordId: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifySubdomainStatusRequest {
  /** 域名 */
  Domain: string;
  /** 记录类型。允许的值为A、CNAME、MX、TXT、NS、AAAA、SPF、SRV、CAA、URL、URL1。若要传多个，用英文逗号分隔，例如A,TXT,CNAME。 */
  RecordType: string;
  /** 记录状态。允许的值为disable。 */
  Status: string;
  /** 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。 */
  DomainId?: number;
  /** 主机记录，如 www，如果不传，默认为 @。 */
  SubDomain?: string;
}

declare interface ModifySubdomainStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyVasAutoRenewStatusRequest {
  /** 资源ID */
  ResourceId: string;
  /** enable 开启自动续费；disable 关闭自动续费 */
  Status: string;
}

declare interface ModifyVasAutoRenewStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface PayOrderWithBalanceRequest {
  /** 需要支付的大订单号数组 */
  BigDealIdList: string[];
  /** 代金券ID数组 */
  VoucherIdList?: string[];
}

declare interface PayOrderWithBalanceResponse {
  /** 此次操作支付成功的订单id数组 */
  DealIdList: string[];
  /** 此次操作支付成功的大订单号数组 */
  BigDealIdList: string[];
  /** 此次操作支付成功的订单号数组 */
  DealNameList: string[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

/** [DNSPod](https://cloud.tencent.com/document/product/1427) */
declare interface Dnspod {
  (): Versions;
  /** 商品下单 */
  CreateDeal(data: CreateDealRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDealResponse>;
  /** 添加域名 */
  CreateDomain(data: CreateDomainRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDomainResponse>;
  /** 创建域名别名 */
  CreateDomainAlias(data: CreateDomainAliasRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDomainAliasResponse>;
  /** 批量添加域名 */
  CreateDomainBatch(data: CreateDomainBatchRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDomainBatchResponse>;
  /** 创建域名分组 */
  CreateDomainGroup(data: CreateDomainGroupRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDomainGroupResponse>;
  /** 添加记录 */
  CreateRecord(data: CreateRecordRequest, config?: AxiosRequestConfig): AxiosPromise<CreateRecordResponse>;
  /** 批量添加记录 */
  CreateRecordBatch(data: CreateRecordBatchRequest, config?: AxiosRequestConfig): AxiosPromise<CreateRecordBatchResponse>;
  /** 删除域名 */
  DeleteDomain(data: DeleteDomainRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDomainResponse>;
  /** 删除域名别名 */
  DeleteDomainAlias(data: DeleteDomainAliasRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDomainAliasResponse>;
  /** 删除记录 */
  DeleteRecord(data: DeleteRecordRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRecordResponse>;
  /** 删除域名共享 */
  DeleteShareDomain(data: DeleteShareDomainRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteShareDomainResponse>;
  /** 获取任务详情 */
  DescribeBatchTask(data: DescribeBatchTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBatchTaskResponse>;
  /** 获取域名信息 */
  DescribeDomain(data: DescribeDomainRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDomainResponse>;
  /** 获取域名别名列表 */
  DescribeDomainAliasList(data: DescribeDomainAliasListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDomainAliasListResponse>;
  /** 域名解析量统计 */
  DescribeDomainAnalytics(data: DescribeDomainAnalyticsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDomainAnalyticsResponse>;
  /** 获取域名分组列表 */
  DescribeDomainGroupList(data?: DescribeDomainGroupListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDomainGroupListResponse>;
  /** 获取域名列表 */
  DescribeDomainList(data: DescribeDomainListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDomainListResponse>;
  /** 获取域名日志 */
  DescribeDomainLogList(data: DescribeDomainLogListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDomainLogListResponse>;
  /** 获取域名权限 */
  DescribeDomainPurview(data: DescribeDomainPurviewRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDomainPurviewResponse>;
  /** 获取域名共享信息 */
  DescribeDomainShareInfo(data: DescribeDomainShareInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDomainShareInfoResponse>;
  /** 获取记录信息 */
  DescribeRecord(data: DescribeRecordRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRecordResponse>;
  /** 获取等级允许的线路 */
  DescribeRecordLineList(data: DescribeRecordLineListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRecordLineListResponse>;
  /** 获取域名的解析记录 */
  DescribeRecordList(data: DescribeRecordListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRecordListResponse>;
  /** 获取等级允许的记录类型 */
  DescribeRecordType(data: DescribeRecordTypeRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRecordTypeResponse>;
  /** 子域名解析量统计 */
  DescribeSubdomainAnalytics(data: DescribeSubdomainAnalyticsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSubdomainAnalyticsResponse>;
  /** 获取帐户信息 */
  DescribeUserDetail(data?: DescribeUserDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUserDetailResponse>;
  /** 锁定域名 */
  ModifyDomainLock(data: ModifyDomainLockRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDomainLockResponse>;
  /** 域名过户 */
  ModifyDomainOwner(data: ModifyDomainOwnerRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDomainOwnerResponse>;
  /** 设置域名备注 */
  ModifyDomainRemark(data: ModifyDomainRemarkRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDomainRemarkResponse>;
  /** 修改域名状态 */
  ModifyDomainStatus(data: ModifyDomainStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDomainStatusResponse>;
  /** 域名锁定解锁 */
  ModifyDomainUnlock(data: ModifyDomainUnlockRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDomainUnlockResponse>;
  /** 更新动态 DNS 记录 */
  ModifyDynamicDNS(data: ModifyDynamicDNSRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDynamicDNSResponse>;
  /** DNS 解析套餐自动续费设置 */
  ModifyPackageAutoRenew(data: ModifyPackageAutoRenewRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyPackageAutoRenewResponse>;
  /** 修改记录 */
  ModifyRecord(data: ModifyRecordRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyRecordResponse>;
  /** 批量修改记录 */
  ModifyRecordBatch(data: ModifyRecordBatchRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyRecordBatchResponse>;
  /** 设置记录备注 */
  ModifyRecordRemark(data: ModifyRecordRemarkRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyRecordRemarkResponse>;
  /** 设置记录状态 */
  ModifyRecordStatus(data: ModifyRecordStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyRecordStatusResponse>;
  /** 暂停子域名的解析记录 */
  ModifySubdomainStatus(data: ModifySubdomainStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySubdomainStatusResponse>;
  /** 增值服务自动续费设置 */
  ModifyVasAutoRenewStatus(data: ModifyVasAutoRenewStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyVasAutoRenewStatusResponse>;
  /** DNSPod商品余额支付 */
  PayOrderWithBalance(data: PayOrderWithBalanceRequest, config?: AxiosRequestConfig): AxiosPromise<PayOrderWithBalanceResponse>;
}

export declare type Versions = ["2021-03-23"];

export default Dnspod;
