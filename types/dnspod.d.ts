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
  Weight?: number;
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
  /** 记录权重 */
  Weight?: number | null;
  /** 备注信息 */
  Remark?: string | null;
}

/** 批量操作筛选域名信息 */
declare interface BatchSearchDomainInfo {
  /** 域名 */
  Domain?: string;
  /** 域名 ID */
  DomainId?: number;
  /** 域名套餐等级 */
  DomainGrade?: string;
  /** 记录信息列表 */
  RecordList?: BatchSearchRecordInfo[];
}

/** 批量操作筛选记录信息 */
declare interface BatchSearchRecordInfo {
  /** 解析记录 ID */
  RecordId?: number;
  /** 解析线路 */
  Area: string;
  /** 记录备注 */
  Remark?: string | null;
  /** TTL(秒) */
  TTL: number;
  /** 记录类型 */
  RecordType: string;
  /** 记录是否启用 */
  Enabled?: number;
  /** 权重 */
  Weight?: number | null;
  /** 记录分组 ID */
  GroupId?: number;
  /** 子域名 */
  SubDomain: string;
  /** 解析值 */
  Value: string;
  /** MX优先级 */
  MX?: number | null;
}

/** 批量添加域名返回结构 */
declare interface CreateDomainBatchDetail {
  /** 见RecordInfoBatch */
  RecordList?: CreateDomainBatchRecord[];
  /** 任务编号 */
  Id?: number;
  /** 域名 */
  Domain?: string;
  /** 域名等级 */
  DomainGrade?: string;
  /** 错误信息 */
  ErrMsg?: string | null;
  /** 该条任务运行状态 */
  Status?: string;
  /** 操作类型 */
  Operation?: string;
}

/** 批量添加域名任务中的记录信息 */
declare interface CreateDomainBatchRecord {
  /** 子域名(主机记录)。 */
  SubDomain?: string;
  /** 记录类型, 详见 DescribeRecordType 接口 */
  RecordType?: string;
  /** 解析记录的线路，详见 DescribeRecordLineList 接口 */
  RecordLine?: string;
  /** 记录值 */
  Value?: string;
  /** 记录的 TTL 值 */
  TTL?: number;
  /** 记录添加状态 */
  Status?: string;
  /** 操作类型 */
  Operation?: string;
  /** 错误信息 */
  ErrMsg?: string | null;
  /** 此条记录在列表中的ID */
  Id?: number;
}

/** 批量添加记录返回结构 */
declare interface CreateRecordBatchDetail {
  /** 见RecordInfoBatch */
  RecordList?: CreateRecordBatchRecord[];
  /** 任务编号 */
  Id?: number;
  /** 域名 */
  Domain?: string;
  /** 域名等级 */
  DomainGrade?: string;
  /** 错误信息 */
  ErrMsg?: string | null;
  /** 该条任务运行状态 */
  Status?: string;
  /** 操作类型 */
  Operation?: string | null;
  /** 域名ID */
  DomainId?: number;
}

/** 批量添加记录任务中的记录信息 */
declare interface CreateRecordBatchRecord {
  /** 子域名(主机记录)。 */
  SubDomain?: string;
  /** 记录类型, 详见 DescribeRecordType 接口 */
  RecordType?: string;
  /** 解析记录的线路，详见 DescribeRecordLineList 接口 */
  RecordLine?: string;
  /** 记录值 */
  Value?: string;
  /** 记录的 TTL 值 */
  TTL?: number;
  /** 记录添加状态 */
  Status?: string;
  /** 操作类型 */
  Operation?: string | null;
  /** 错误信息 */
  ErrMsg?: string | null;
  /** 此条记录在列表中的ID */
  Id?: number;
  /** 记录的MX权重 */
  MX?: number;
  /** 记录的权重 */
  Weight?: number;
}

/** 自定义线路详情 */
declare interface CustomLineInfo {
  /** 域名ID */
  DomainId: number;
  /** 自定义线路名称 */
  Name: string;
  /** 自定义线路IP段 */
  Area: string;
  /** 已使用IP段个数 */
  UseCount: number;
  /** 允许使用IP段最大个数 */
  MaxCount: number;
}

/** 子订单号列表 */
declare interface Deals {
  /** 子订单ID */
  DealId: string;
  /** 子订单号 */
  DealName: string;
}

/** 批量删除域名详情 */
declare interface DeleteDomainBatchDetail {
  /** 域名 ID */
  DomainId?: number;
  /** 域名 */
  Domain?: string;
  /** 错误信息 */
  Error?: string | null;
  /** 删除状态 */
  Status?: string;
  /** 操作 */
  Operation?: string;
}

/** 批量删除记录详情 */
declare interface DeleteRecordBatchDetail {
  /** 域名 ID */
  DomainId?: number;
  /** 域名 */
  Domain?: string;
  /** 错误信息 */
  Error?: string | null;
  /** 删除状态 */
  Status?: string;
  /** 操作 */
  Operation?: string;
  /** 解析记录列表，json 序列化之后的字符串形式 */
  RecordList?: string;
}

/** 查看任务详情返回结构 */
declare interface DescribeBatchTaskDetail {
  /** 见BatchRecordInfo */
  RecordList?: BatchRecordInfo[];
  /** 任务编号 */
  Id?: number;
  /** 域名 */
  Domain?: string | null;
  /** 域名等级 */
  DomainGrade?: string;
  /** 错误信息 */
  ErrMsg?: string | null;
  /** 该条任务运行状态 */
  Status?: string;
  /** 操作类型 */
  Operation?: string | null;
  /** 域名ID */
  DomainId?: number | null;
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
  /** 别名状态：1-DNS不正确；2-正常；3-封禁。 */
  Status?: number;
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
  DomainId?: number;
  /** 域名状态 */
  Status?: string;
  /** 域名套餐等级 */
  Grade?: string;
  /** 域名分组ID */
  GroupId?: number;
  /** 是否星标域名 */
  IsMark?: string;
  /** TTL(DNS记录缓存时间) */
  TTL?: number;
  /** cname加速启用状态 */
  CnameSpeedup?: string;
  /** 域名备注 */
  Remark?: string;
  /** 域名Punycode */
  Punycode?: string;
  /** 域名DNS状态 */
  DnsStatus?: string;
  /** 域名的NS列表 */
  DnspodNsList?: string[];
  /** 域名 */
  Domain?: string;
  /** 域名等级代号 */
  GradeLevel?: number;
  /** 域名所属的用户ID */
  UserId?: number;
  /** 是否为付费域名 */
  IsVip?: string;
  /** 域名所有者的账号 */
  Owner?: string;
  /** 域名等级的描述 */
  GradeTitle?: string;
  /** 域名创建时间 */
  CreatedOn?: string;
  /** 最后操作时间 */
  UpdatedOn?: string;
  /** 腾讯云账户Uin */
  Uin?: string;
  /** 域名实际使用的NS列表 */
  ActualNsList?: string[];
  /** 域名的记录数量 */
  RecordCount?: number;
  /** 域名所有者的账户昵称 */
  OwnerNick?: string;
  /** 是否在付费套餐宽限期 */
  IsGracePeriod?: string;
  /** 是否在付费套餐缓冲期 */
  VipBuffered?: string;
  /** VIP套餐有效期开始时间 */
  VipStartAt?: string | null;
  /** VIP套餐有效期结束时间 */
  VipEndAt?: string | null;
  /** VIP套餐自动续费标识。可能的值为：default-默认；no-不自动续费；yes-自动续费 */
  VipAutoRenew?: string | null;
  /** VIP套餐资源ID */
  VipResourceId?: string | null;
  /** 是否是子域名。 */
  IsSubDomain?: boolean;
  /** 域名关联的标签列表 */
  TagList?: TagItem[];
  /** 是否启用搜索引擎推送 */
  SearchEnginePush?: string;
  /** 是否开启辅助 DNS */
  SlaveDNS?: string;
}

/** 域名列表元素 */
declare interface DomainListItem {
  /** 系统分配给域名的唯一标识 */
  DomainId?: number;
  /** 域名的原始格式 */
  Name?: string;
  /** 域名的状态，正常：ENABLE，暂停：PAUSE，封禁：SPAM */
  Status?: string;
  /** 域名默认的解析记录默认TTL值 */
  TTL?: number;
  /** 是否开启CNAME加速，开启：ENABLE，未开启：DISABLE */
  CNAMESpeedup?: string;
  /** DNS 设置状态，错误：DNSERROR，正常：空字符串 */
  DNSStatus?: string;
  /** 域名的套餐等级代码 */
  Grade?: string;
  /** 域名所属的分组Id */
  GroupId?: number;
  /** 是否开启搜索引擎推送优化，是：YES，否：NO */
  SearchEnginePush?: string;
  /** 域名备注说明 */
  Remark?: string;
  /** 经过punycode编码后的域名格式 */
  Punycode?: string;
  /** 系统为域名分配的有效DNS */
  EffectiveDNS?: string[];
  /** 域名套餐等级对应的序号 */
  GradeLevel?: number;
  /** 套餐名称 */
  GradeTitle?: string;
  /** 是否是付费套餐 */
  IsVip?: string;
  /** 付费套餐开通时间 */
  VipStartAt?: string;
  /** 付费套餐到期时间 */
  VipEndAt?: string;
  /** 域名是否开通VIP自动续费，是：YES，否：NO，默认：DEFAULT */
  VipAutoRenew?: string;
  /** 域名下的记录数量 */
  RecordCount?: number;
  /** 域名添加时间 */
  CreatedOn?: string;
  /** 域名更新时间 */
  UpdatedOn?: string;
  /** 域名所属账号 */
  Owner?: string;
  /** 域名关联的标签列表 */
  TagList?: TagItem[] | null;
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

/** 域名共享信息 */
declare interface DomainShareUserInfo {
  /** 共享记录ID */
  DomainShareId?: number;
  /** 共享模式。r-只读；w-可写；rw-可读写。 */
  Mode?: string;
  /** 共享到的用户昵称 */
  Nickname?: string;
  /** 共享到的用户UIN */
  QCloudUIN?: string;
  /** 共享状态。enabled-有效；pause-无效。 */
  Status?: string;
  /** 共享的子域名 */
  SubDomain?: string;
}

/** 生成的文件信息 */
declare interface FileInfo {
  /** 文件 id。 */
  FileId?: number;
  /** 文件生成时间。 */
  CreatedOn?: string;
  /** 文件最后更新时间。 */
  UpdatedOn?: string;
  /** 文件涉及到的域名。 */
  Domains?: string[];
  /** 文件名称。 */
  Name?: string;
  /** 文件下载链接。 */
  FileUrl?: string | null;
  /** 生成文件的任务 id。 */
  JobId?: number;
  /** 生成文件的进度。100 表示 完成度为100%。 */
  Progress?: number;
  /** 文件状态。OK：已完成RUNNING：正在生成中ERROR：生成失败CANCELED：文件已取消生成CANCELING：文件正在取消生成EXPIRED：文件已过期 */
  Status?: string;
  /** 生成文件的任务类型。RECORD_LOG：解析量数据RECORD_EXPORT：导出解析记录DOMAIN_EXPORT：导出域名列表 */
  Type?: string;
  /** 剩余时间 */
  LeftTime?: LeftTime;
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

/** 键值对 */
declare interface KeyValue {
  /** 键 */
  Key: string;
  /** 值 */
  Value?: string;
}

/** 批量生成文件剩余时间 */
declare interface LeftTime {
  /** 剩余天数 */
  Days?: number;
  /** 剩余小时数 */
  Hours?: number;
  /** 剩余分钟数 */
  Mins?: number;
}

/** 自定义线路分组详细信息 */
declare interface LineGroupDetail {
  /** 自定义线路分组ID */
  Id: number;
  /** 自定线路分组名称 */
  Name: string;
  /** 自定义线路分组包含的线路列表 */
  Lines: string[];
}

/** 线路分组信息 */
declare interface LineGroupInfo {
  /** 线路分组ID */
  LineId?: string;
  /** 线路分组名称 */
  Name?: string;
  /** 分组类型 */
  Type?: string;
  /** 线路分组包含的线路列表 */
  LineList?: string[];
}

/** 自定义线路分组元素 */
declare interface LineGroupItem {
  /** 域名ID */
  DomainId: number;
  /** 自定义线路分组ID */
  Id: number;
  /** 自定义线路分组名称 */
  Name: string;
  /** 自定义线路分组包含的线路 */
  Lines: string[];
  /** 创建时间 */
  CreatedOn: string;
  /** 更新时间 */
  UpdatedOn: string;
}

/** 自定义线路数量信息 */
declare interface LineGroupSum {
  /** 本次请求返回自定义线路分组个数 */
  NowTotal: number;
  /** 自定义线路分组总数 */
  Total: number;
  /** 还可允许添加的自定义线路分组个数 */
  AvailableCount: number;
}

/** 解析线路信息 */
declare interface LineInfo {
  /** 线路名称 */
  Name: string;
  /** 线路ID */
  LineId: string;
}

/** 域名解析记录线路信息 */
declare interface LineItem {
  /** 解析线路名称。 */
  LineName?: string;
  /** 解析线路 ID。 */
  LineId?: string | null;
  /** 当前线路在当前域名下是否可用。 */
  Useful?: boolean;
  /** 当前线路最低套餐等级要求。 */
  Grade?: string | null;
  /** 当前线路分类下的子线路列表。 */
  SubGroup?: LineItem[] | null;
  /** 自定义线路分组内包含的线路。 */
  Lines?: string[] | null;
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
  RecordList?: BatchRecordInfo[];
  /** 任务编号 */
  Id?: number;
  /** 域名 */
  Domain?: string;
  /** 域名等级 */
  DomainGrade?: string;
  /** 错误信息 */
  ErrMsg?: string | null;
  /** 该条任务运行状态 */
  Status?: string;
  /** 操作类型 */
  Operation?: string | null;
  /** 域名ID */
  DomainId?: number;
}

/** 套餐配置明细 */
declare interface PackageDetailItem {
  /** 套餐原价 */
  RealPrice: number;
  /** 可更换域名次数 */
  ChangedTimes: number;
  /** 允许设置的最小 TTL 值 */
  MinTtl: number;
  /** 负载均衡数量 */
  RecordRoll: number;
  /** 子域名级数 */
  SubDomainLevel: number;
  /** 泛解析级数 */
  MaxWildcard: number;
  /** DNS 服务集群个数 */
  DnsServerRegion: string;
  /** 套餐名称 */
  DomainGradeCn: string;
  /** 套餐代号 */
  GradeLevel: number;
  /** 套餐对应的 NS */
  Ns: string[];
  /** 套餐代码 */
  DomainGrade: string;
}

/** 域名概览明细 */
declare interface PreviewDetail {
  /** 域名 */
  Name: string;
  /** 域名套餐代码 */
  Grade: string;
  /** 域名套餐名称 */
  GradeTitle: string;
  /** 域名记录数 */
  Records: number;
  /** 域名停靠状态。0 未开启 1 已开启 2 已暂停 */
  DomainParkingStatus: number;
  /** 自定义线路数量 */
  LineCount: number;
  /** 自定义线路分组数量 */
  LineGroupCount: number;
  /** 域名别名数量 */
  AliasCount: number;
  /** 允许添加的最大域名别名数量 */
  MaxAliasCount: number;
  /** 昨天的解析量 */
  ResolveCount: number;
  /** 增值服务数量 */
  VASCount: number;
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

/** 解析记录分组信息 */
declare interface RecordGroupInfo {
  /** 分组 ID */
  GroupId: number;
  /** 分组名称 */
  GroupName: string;
  /** 分组类型：system-系统；user-用户 */
  GroupType: string;
}

/** 记录信息 */
declare interface RecordInfo {
  /** 记录 ID 。 */
  Id?: number;
  /** 子域名(主机记录)。 */
  SubDomain?: string;
  /** 记录类型, 详见 DescribeRecordType 接口。 */
  RecordType?: string;
  /** 解析记录的线路，详见 DescribeRecordLineList 接口。 */
  RecordLine?: string;
  /** 解析记录的线路 ID ，详见 DescribeRecordLineList 接口。 */
  RecordLineId?: string;
  /** 记录值。 */
  Value?: string;
  /** 记录权重值。 */
  Weight?: number | null;
  /** 记录的 MX 记录值，非 MX 记录类型，默认为 0。 */
  MX?: number;
  /** 记录的 TTL 值。 */
  TTL?: number;
  /** 记录状态。0表示禁用，1表示启用。 */
  Enabled?: number;
  /** 该记录的 D 监控状态。"Ok" : 服务器正常。"Warn" : 该记录有报警, 服务器返回 4XX。"Down" : 服务器宕机。"" : 该记录未开启 D 监控。 */
  MonitorStatus?: string;
  /** 记录的备注。 */
  Remark?: string;
  /** 记录最后更新时间。 */
  UpdatedOn?: string;
  /** 域名 ID 。 */
  DomainId?: number;
}

/** 记录列表元素 */
declare interface RecordListItem {
  /** 记录Id */
  RecordId?: number;
  /** 记录值 */
  Value?: string;
  /** 记录状态，启用：ENABLE，暂停：DISABLE */
  Status?: string;
  /** 更新时间 */
  UpdatedOn?: string;
  /** 主机名 */
  Name?: string;
  /** 记录线路 */
  Line?: string;
  /** 线路Id */
  LineId?: string;
  /** 记录类型 */
  Type?: string;
  /** 记录权重，用于负载均衡记录 */
  Weight?: number | null;
  /** 记录监控状态，正常：OK，告警：WARN，宕机：DOWN，未设置监控或监控暂停则为空 */
  MonitorStatus?: string;
  /** 记录备注说明 */
  Remark?: string;
  /** 记录缓存时间 */
  TTL?: number;
  /** MX值，只有MX记录有 */
  MX?: number;
  /** 是否是默认的ns记录 */
  DefaultNS?: boolean;
}

/** 域名解析快照配置 */
declare interface SnapshotConfig {
  /** 配置类型：空字符串-不备份，half_hour-每半小时，hourly-每小时，daily-每天，monthly-每月 */
  Config: string;
  /** 添加时间 */
  CreatedOn: string;
  /** 所属域名 ID */
  DomainId: string;
  /** 配置 ID */
  Id: string;
  /** 快照数量 */
  SnapshotCount: number;
  /** 状态：enable-启用，disable-禁用 */
  Status: string;
  /** 更新时间 */
  UpdatedOn: string;
}

/** 快照信息 */
declare interface SnapshotInfo {
  /** 快照的对象存储地址 */
  CosUrl: string;
  /** 添加时间 */
  CreatedOn: string;
  /** 所属域名 */
  Domain: string;
  /** 快照记录 ID */
  Id: string;
  /** 域名解析记录数 */
  RecordCount: string;
  /** 状态：normal-正常，create-备份中 */
  Status: string;
}

/** 快照列表分页信息 */
declare interface SnapshotPageInfo {
  /** 快照总数 */
  Total: number;
}

/** 快照解析记录 */
declare interface SnapshotRecord {
  /** 子域名 */
  SubDomain: string;
  /** 记录类型 */
  RecordType: string;
  /** 解析线路 */
  RecordLine: string;
  /** 解析值 */
  Value: string;
  /** TTL(秒) */
  TTL: string;
  /** 解析记录 ID */
  RecordId?: string;
  /** MX优先级 */
  MX?: string | null;
  /** 权重 */
  Weight?: string | null;
  /** 失败原因 */
  Reason?: string | null;
}

/** 批量导出子域名解析量查询条件 */
declare interface SubDomainsAnalyticsParamsItem {
  /** 要查询解析量的主域名。 */
  Domain: string | null;
  /** 要查询解析量的子域名主机头。 */
  SubDomain?: string | null;
  /** 查询子域名列表的偏移量。没有指定查询的 Subdomain 参数时，根据分页参数返回每页子域名解析量。 */
  Offset?: number | null;
  /** 查询子域名列表的每页条数。没有指定查询的 Subdomain 参数时，根据分页参数返回每页子域名解析量。 */
  Limit?: number | null;
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

/** 标签项 */
declare interface TagItem {
  /** 标签键 */
  TagKey: string;
  /** 标签值 */
  TagValue?: string;
}

/** 标签过滤条件 */
declare interface TagItemFilter {
  /** 标签键 */
  TagKey: string;
  /** 标签键 */
  TagValue?: string[];
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

/** 域名增值服务用量 */
declare interface VASStatisticItem {
  /** 增值服务名称 */
  Name?: string;
  /** 增值服务标识 */
  Key?: string;
  /** 增值服务最大用量 */
  LimitCount?: number;
  /** 增值服务已使用的用量 */
  UseCount?: number;
}

/** Whois联系信息 */
declare interface WhoisContact {
  /** 无 */
  Admin: WhoisContactAddress | null;
  /** 无 */
  Billing: WhoisContactAddress | null;
  /** 无 */
  Registrant: WhoisContactAddress | null;
  /** 无 */
  Tech: WhoisContactAddress | null;
}

/** Whois联系信息地址 */
declare interface WhoisContactAddress {
  /** 城市 */
  City?: string | null;
  /** 国家 */
  Country?: string | null;
  /** 电子邮箱 */
  Email?: string | null;
  /** 传真 */
  Fax?: string | null;
  /** 传真分机号 */
  FaxExt?: string | null;
  /** 无 */
  Handle?: string | null;
  /** 名称 */
  Name?: string | null;
  /** 组织机构 */
  Organization?: string | null;
  /** 电话 */
  Phone?: string | null;
  /** 邮编 */
  PostalCode?: string | null;
  /** 省份/州 */
  State?: string | null;
  /** 街道地址 */
  Street?: string | null;
}

/** Whois信息 */
declare interface WhoisInfo {
  /** 联系信息 */
  Contacts?: WhoisContact | null;
  /** 域名注册时间 */
  CreationDate?: string | null;
  /** 域名到期时间 */
  ExpirationDate?: string | null;
  /** 是否是在腾讯云注册的域名 */
  IsQcloud?: boolean | null;
  /** 是否当前操作账号注册的域名 */
  IsQcloudOwner?: boolean | null;
  /** 域名配置的NS */
  NameServers?: string[] | null;
  /** Whois原始信息 */
  Raw?: string[] | null;
  /** 域名注册商 */
  Registrar?: string[] | null;
  /** 状态 */
  Status?: string[] | null;
  /** 更新日期 */
  UpdatedDate?: string | null;
  /** dnssec */
  Dnssec?: string | null;
}

declare interface CheckRecordSnapshotRollbackRequest {
  /** 域名 */
  Domain: string;
  /** 快照 ID */
  SnapshotId: string;
  /** 解析记录信息 */
  Record: SnapshotRecord;
  /** 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。 */
  DomainId?: number;
}

declare interface CheckRecordSnapshotRollbackResponse {
  /** 错误原因 */
  Reason?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CheckSnapshotRollbackRequest {
  /** 域名 */
  Domain: string;
  /** 快照记录 ID */
  SnapshotId: string;
  /** 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。 */
  DomainId?: number;
}

declare interface CheckSnapshotRollbackResponse {
  /** 快照记录 ID */
  SnapshotId?: string;
  /** 回滚时长（分钟） */
  CostMinutes?: number;
  /** 快照所属域名 */
  Domain?: string;
  /** 解析记录总数 */
  Total?: number;
  /** 值为 1，表示超时 */
  Timeout?: number | null;
  /** 检查失败数量 */
  Failed?: number;
  /** 失败记录信息 */
  FailedRecordList?: SnapshotRecord[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
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
  BigDealId?: string;
  /** 子订单列表 */
  DealList?: Deals[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDomainAliasRequest {
  /** 域名别名 */
  DomainAlias: string;
  /** 域名 */
  Domain: string;
  /** 域名ID，参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain。可以通过接口DescribeDomainList查到所有的Domain以及DomainId */
  DomainId?: number;
}

declare interface CreateDomainAliasResponse {
  /** 域名别名ID */
  DomainAliasId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  DetailList?: CreateDomainBatchDetail[];
  /** 批量任务的ID */
  JobId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDomainCustomLineRequest {
  /** 域名 */
  Domain: string;
  /** 自定义线路名称 */
  Name: string;
  /** 自定义线路IP段，用-分割 */
  Area: string;
  /** 域名ID，如果传了DomainId，系统将会忽略Domain参数，优先使用DomainId */
  DomainId?: number;
}

declare interface CreateDomainCustomLineResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDomainGroupRequest {
  /** 域名分组 */
  GroupName: string;
}

declare interface CreateDomainGroupResponse {
  /** 域名分组ID */
  GroupId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDomainRequest {
  /** 域名 */
  Domain: string;
  /** 域名分组ID。可以通过接口DescribeDomainGroupList查看当前域名分组信息 */
  GroupId?: number;
  /** 是否星标域名，”yes”、”no” 分别代表是和否。 */
  IsMark?: string;
  /** 添加子域名时，是否迁移相关父域名的解析记录。不传默认为 true */
  TransferSubDomain?: boolean;
  /** 域名绑定的标签 */
  Tags?: TagItem[];
}

declare interface CreateDomainResponse {
  /** 域名信息 */
  DomainInfo?: DomainCreateInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDomainsAnalyticsFileRequest {
  /** 需要查询解析量的域名数组。 */
  Domains: string[];
  /** 查询解析量的时间区间起点。如：2023-01-01。 */
  StartDate: string;
  /** 查询解析量的统计维度。默认为 DATE。DATE：按天统计HOUR：按小时统计 */
  DNSFormat?: string;
  /** 查询解析量的时间区间终点。如：2023-01-01。默认为当天。 */
  EndDate?: string;
}

declare interface CreateDomainsAnalyticsFileResponse {
  /** 当前批量任务 id。 */
  JobId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateLineGroupCopyRequest {
  /** 域名 */
  Domain: string;
  /** 要复制的域名ID。要从多个域名复制线路分组时，用英文逗号分隔，例如1002,1005 */
  DomainIds: string;
  /** 域名ID，如果传了DomainId，系统将会忽略Domain参数，优先使用DomainId */
  DomainId?: number;
}

declare interface CreateLineGroupCopyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateLineGroupRequest {
  /** 自定义线路分组的名称。 */
  Name: string;
  /** 自定义线路分组包含的线路列表，包含多个线路时用英文逗号分隔。例如，铁通,奇虎 */
  Lines: string;
  /** 域名 */
  Domain: string;
  /** 域名ID，如果传了DomainId，系统将会忽略Domain参数，优先使用DomainId */
  DomainId?: number;
}

declare interface CreateLineGroupResponse {
  /** 自定义线路分组详情 */
  Data?: LineGroupDetail;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  DetailList?: CreateRecordBatchDetail[];
  /** 批量任务的ID */
  JobId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateRecordGroupRequest {
  /** 域名 */
  Domain: string;
  /** 分组名称 */
  GroupName: string;
  /** 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。 */
  DomainId?: number;
}

declare interface CreateRecordGroupResponse {
  /** 新增的分组 ID */
  GroupId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** TTL，范围1-604800，不同套餐域名最小值不同。 */
  TTL?: number;
  /** 权重信息，0到100的整数。0 表示关闭，不传该参数，表示不设置权重信息。 */
  Weight?: number;
  /** 记录初始状态，取值范围为 ENABLE 和 DISABLE 。默认为 ENABLE ，如果传入 DISABLE，解析不会生效，也不会验证负载均衡的限制。 */
  Status?: string;
  /** 备注 */
  Remark?: string;
  /** 开启DNSSEC时，强制添加CNAME/URL记录 */
  DnssecConflictMode?: string;
  /** 记录分组 Id。可以通过接口 DescribeRecordGroupList 接口 GroupId 字段获取。 */
  GroupId?: number;
}

declare interface CreateRecordResponse {
  /** 记录ID */
  RecordId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateSnapshotRequest {
  /** 域名 */
  Domain: string;
  /** 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。 */
  DomainId?: number;
}

declare interface CreateSnapshotResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateSubDomainsAnalyticsFileRequest {
  /** 需要查询解析量的域名数组。 */
  Domains: SubDomainsAnalyticsParamsItem[];
  /** 查询解析量的时间区间起点。如：2023-01-01。 */
  StartDate: string;
  /** 查询解析量子域名类型。1：子域名2：无解析量子域名 */
  SubDomainType: number;
  /** 查询解析量的统计维度。默认为 DATE。DATE：按天统计HOUR：按小时统计 */
  DNSFormat?: string;
  /** 查询解析量的时间区间终点。如：2023-01-01。默认为当天。 */
  EndDate?: string;
}

declare interface CreateSubDomainsAnalyticsFileResponse {
  /** 当前批量任务 id。 */
  JobId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateSubdomainValidateTXTValueRequest {
  /** 要添加的子域名 Zone 域。 */
  DomainZone: string;
}

declare interface CreateSubdomainValidateTXTValueResponse {
  /** 需要添加 TXT 记录的域名。 */
  Domain?: string;
  /** 需要添加 TXT 记录的主机记录。 */
  Subdomain?: string;
  /** 需要添加记录类型。 */
  RecordType?: string;
  /** 需要添加 TXT 记录的记录值。 */
  Value?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateTXTRecordRequest {
  /** 域名 */
  Domain: string;
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
  /** TTL，范围1-604800，不同套餐域名最小值不同。 */
  TTL?: number;
  /** 记录初始状态，取值范围为 ENABLE 和 DISABLE 。默认为 ENABLE ，如果传入 DISABLE，解析不会生效，也不会验证负载均衡的限制。 */
  Status?: string;
  /** 备注 */
  Remark?: string;
  /** 记录分组 Id。可以通过接口 DescribeRecordGroupList 接口 GroupId 字段获取。 */
  GroupId?: number;
}

declare interface CreateTXTRecordResponse {
  /** 记录ID */
  RecordId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteDomainAliasRequest {
  /** 域名别名ID。可以通过接口DescribeDomainAliasList查到所有的域名别名列表以及对应的ID */
  DomainAliasId: number;
  /** 域名 */
  Domain: string;
  /** 域名ID，参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain。可以通过接口DescribeDomainList查到所有的Domain以及DomainId */
  DomainId?: number;
}

declare interface DeleteDomainAliasResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteDomainBatchRequest {
  /** 域名数组 */
  DomainList: string[];
}

declare interface DeleteDomainBatchResponse {
  /** 任务 ID */
  JobId?: number;
  /** 任务详情数组 */
  DetailList?: DeleteDomainBatchDetail[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteDomainCustomLineRequest {
  /** 域名 */
  Domain: string;
  /** 自定义线路名称 */
  Name: string;
  /** 域名ID，如果传了DomainId，系统将会忽略Domain参数，优先使用DomainId */
  DomainId?: number;
}

declare interface DeleteDomainCustomLineResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteDomainRequest {
  /** 域名 */
  Domain: string;
  /** 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。可以通过接口DescribeDomainList查到所有的Domain以及DomainId */
  DomainId?: number;
}

declare interface DeleteDomainResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteLineGroupRequest {
  /** 域名 */
  Domain: string;
  /** 自定义线路分组ID */
  LineGroupId: number;
  /** 域名ID，如果传了DomainId，系统将会忽略Domain参数，优先使用DomainId */
  DomainId?: number;
}

declare interface DeleteLineGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteRecordBatchRequest {
  /** 解析记录 ID 数组 */
  RecordIdList: number[];
}

declare interface DeleteRecordBatchResponse {
  /** 批量任务 ID */
  JobId?: number;
  /** 任务详情 */
  DetailList?: DeleteRecordBatchDetail[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteRecordGroupRequest {
  /** 域名 */
  Domain: string;
  /** 分组 ID */
  GroupId: number;
  /** 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。 */
  DomainId?: number;
}

declare interface DeleteRecordGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteRecordRequest {
  /** 域名 */
  Domain: string;
  /** 记录 ID 。可以通过接口DescribeRecordList查到所有的解析记录列表以及对应的RecordId */
  RecordId: number;
  /** 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。可以通过接口DescribeDomainList查到所有的Domain以及DomainId */
  DomainId?: number;
}

declare interface DeleteRecordResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteShareDomainRequest {
  /** 域名 */
  Domain: string;
  /** 域名共享的账号 */
  Account: string;
  /** 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。可以通过接口DescribeDomainList查到所有的Domain以及DomainId */
  DomainId?: number;
}

declare interface DeleteShareDomainResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteSnapshotRequest {
  /** 域名 */
  Domain: string;
  /** 快照记录 ID */
  SnapshotId: string;
  /** 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。 */
  DomainId?: number;
}

declare interface DeleteSnapshotResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBatchTaskRequest {
  /** 任务ID。操作批量接口时会返回JobId */
  JobId: number;
}

declare interface DescribeBatchTaskResponse {
  /** 批量任务详情 */
  DetailList?: DescribeBatchTaskDetail[];
  /** 总任务条数 */
  TotalCount?: number;
  /** 成功条数 */
  SuccessCount?: number;
  /** 失败条数 */
  FailCount?: number;
  /** 批量任务类型 */
  JobType?: string;
  /** 任务创建时间 */
  CreatedAt?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDomainAliasListRequest {
  /** 域名 */
  Domain: string;
  /** 域名ID,域名ID，参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain。可以通过接口DescribeDomainList查到所有的Domain以及DomainId */
  DomainId?: number;
}

declare interface DescribeDomainAliasListResponse {
  /** 域名别名列表 */
  DomainAliasList?: DomainAliasInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。可以通过接口DescribeDomainList查到所有的Domain以及DomainId */
  DomainId?: number;
}

declare interface DescribeDomainAnalyticsResponse {
  /** 当前统计维度解析量小计 */
  Data?: DomainAnalyticsDetail[];
  /** 域名解析量统计查询信息 */
  Info?: DomainAnalyticsInfo;
  /** 域名别名解析量统计信息 */
  AliasData?: DomainAliasAnalyticsItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDomainAndRecordListRequest {
  /** 搜索所有域名。AllDomain、GroupIdList、DomainList、DomainIdList 参数传任一个即可。优先级为：AllDomain > GroupIdList > DomainList > DomainIdList。 */
  AllDomain?: string;
  /** 要搜索的域名列表。 */
  DomainList?: string[];
  /** 要搜索的域名 ID 列表。 */
  DomainIdList?: number[];
  /** 要搜索的域名分组 ID 列表。 */
  GroupIdList?: number[];
  /** 记录类型筛选 */
  RecordType?: string;
  /** 子域名筛选 */
  SubKeyword?: string;
  /** 记录值筛选 */
  ValueKeyword?: string;
  /** 线路筛选 */
  Area?: string;
  /** 备注筛选 */
  Remark?: string;
  /** 记录状态筛选1：正常0：暂停 */
  Enabled?: string;
}

declare interface DescribeDomainAndRecordListResponse {
  /** 域名列表 */
  DetailList?: BatchSearchDomainInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDomainCustomLineListRequest {
  /** 域名 */
  Domain: string;
  /** 域名ID，如果传了DomainId，系统将会忽略Domain参数，优先使用DomainId */
  DomainId?: number;
}

declare interface DescribeDomainCustomLineListResponse {
  /** 自定义线路列表 */
  LineList?: CustomLineInfo[];
  /** 可添加的自定义线路条数 */
  AvailableCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDomainFilterListRequest {
  /** 根据域名分组类型获取域名。可取值为 ALL，MINE，SHARE，RECENT。ALL：全部MINE：我的域名SHARE：共享给我的域名RECENT：最近操作过的域名 */
  Type: string;
  /** 记录开始的偏移, 第一条记录为 0, 依次类推。默认值为 0。 */
  Offset?: number;
  /** 要获取的域名数量, 比如获取 20 个, 则为 20。默认值为 5000。如果账户中的域名数量超过了 5000, 将会强制分页并且只返回前 5000 条, 这时需要通过 Offset 和 Limit 参数去获取其它域名。 */
  Limit?: number;
  /** 根据域名分组 id 获取域名，可通过 DescribeDomain 或 DescribeDomainList 接口 GroupId 字段获取。 */
  GroupId?: number[];
  /** 根据关键字获取域名。 */
  Keyword?: string;
  /** 排序字段。可取值为 NAME，STATUS，RECORDS，GRADE，UPDATED_ON。NAME：域名名称STATUS：域名状态RECORDS：记录数量GRADE：套餐等级UPDATED_ON：更新时间 */
  SortField?: string;
  /** 排序类型，升序：ASC，降序：DESC。 */
  SortType?: string;
  /** 根据域名状态获取域名。可取值为 ENABLE，LOCK，PAUSE，SPAM。ENABLE：正常LOCK：锁定PAUSE：暂停SPAM：封禁 */
  Status?: string[];
  /** 根据套餐获取域名，可通过 DescribeDomain 或 DescribeDomainList 接口 Grade 字段获取。 */
  Package?: string[];
  /** 根据备注信息获取域名。 */
  Remark?: string;
  /** 要获取域名的更新时间起始时间点，如 '2021-05-01 03:00:00'。 */
  UpdatedAtBegin?: string;
  /** 要获取域名的更新时间终止时间点，如 '2021-05-10 20:00:00'。 */
  UpdatedAtEnd?: string;
  /** 要获取域名的记录数查询区间起点。 */
  RecordCountBegin?: number;
  /** 要获取域名的记录数查询区间终点。 */
  RecordCountEnd?: number;
  /** 项目ID */
  ProjectId?: number;
  /** 标签过滤 */
  Tags?: TagItemFilter[];
}

declare interface DescribeDomainFilterListResponse {
  /** 列表页统计信息 */
  DomainCountInfo?: DomainCountInfo;
  /** 域名列表 */
  DomainList?: DomainListItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDomainGroupListRequest {
}

declare interface DescribeDomainGroupListResponse {
  /** 分组列表 */
  GroupList?: GroupInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDomainListRequest {
  /** 域名分组类型，默认为ALL。可取值为ALL，MINE，SHARE，ISMARK，PAUSE，VIP，RECENT，SHARE_OUT，FREE。 */
  Type?: string;
  /** 记录开始的偏移, 第一条记录为 0, 依次类推。默认值为0。 */
  Offset?: number;
  /** 要获取的域名数量, 比如获取20个, 则为20。默认值为3000。 */
  Limit?: number;
  /** 分组ID, 获取指定分组的域名 */
  GroupId?: number;
  /** 根据关键字搜索域名 */
  Keyword?: string;
  /** 标签过滤 */
  Tags?: TagItemFilter[];
}

declare interface DescribeDomainListResponse {
  /** 列表页统计信息 */
  DomainCountInfo?: DomainCountInfo;
  /** 域名列表 */
  DomainList?: DomainListItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDomainLogListRequest {
  /** 域名 */
  Domain: string;
  /** 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。可以通过接口DescribeDomainList查到所有的Domain以及DomainId */
  DomainId?: number;
  /** 记录开始的偏移，第一条记录为 0，依次类推，默认为0 */
  Offset?: number;
  /** 共要获取的日志条数，比如获取20条，则为20，默认为500条，单次最多获取500条。 */
  Limit?: number;
}

declare interface DescribeDomainLogListResponse {
  /** 域名日志信息 */
  LogList?: string[];
  /** 分页大小 */
  PageSize?: number;
  /** 日志总条数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDomainPreviewRequest {
  /** 域名 */
  Domain: string;
  /** 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。可以通过接口DescribeDomainList查到所有的Domain以及DomainId */
  DomainId?: number;
}

declare interface DescribeDomainPreviewResponse {
  /** 域名概览信息 */
  Domain?: PreviewDetail;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDomainPurviewRequest {
  /** 域名 */
  Domain: string;
  /** 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。可以通过接口DescribeDomainList查到所有的Domain以及DomainId */
  DomainId?: number;
}

declare interface DescribeDomainPurviewResponse {
  /** 域名权限列表 */
  PurviewList?: PurviewInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDomainRequest {
  /** 域名 */
  Domain: string;
  /** 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。可以通过接口DescribeDomainList查到所有的Domain以及DomainId */
  DomainId?: number;
}

declare interface DescribeDomainResponse {
  /** 域名信息 */
  DomainInfo?: DomainInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDomainShareInfoRequest {
  /** 域名 */
  Domain: string;
  /** 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。可以通过接口DescribeDomainList查到所有的Domain以及DomainId */
  DomainId?: number;
}

declare interface DescribeDomainShareInfoResponse {
  /** 域名共享信息 */
  ShareList?: DomainShareInfo[];
  /** 域名拥有者账号 */
  Owner?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDomainShareUserListRequest {
  /** 域名 */
  Domain: string;
  /** 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。可以通过接口DescribeDomainList查到所有的Domain以及DomainId */
  DomainId?: number;
}

declare interface DescribeDomainShareUserListResponse {
  /** 域名套餐信息 */
  DomainShareList?: DomainShareUserInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDomainWhoisRequest {
  /** 域名 */
  Domain: string;
}

declare interface DescribeDomainWhoisResponse {
  /** 域名Whois信息 */
  Info?: WhoisInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFileInfoByJobIdRequest {
  /** 任务ID */
  JobId: number;
}

declare interface DescribeFileInfoByJobIdResponse {
  /** 生成文件相关信息 */
  FileInfo?: FileInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLineGroupListRequest {
  /** 域名 */
  Domain: string;
  /** 偏移量，默认值为0。 */
  Offset?: number;
  /** 限制数量，传0或不传会返回所有。 */
  Length?: number;
  /** 按自定义线路分组名称排序的方向。升序传asc，降序传desc。 */
  SortType?: string;
  /** 域名ID，如果传了DomainId，系统将会忽略Domain参数，优先使用DomainId */
  DomainId?: number;
}

declare interface DescribeLineGroupListResponse {
  /** 自定义线路分组列表 */
  LineGroups?: LineGroupItem[];
  /** 自定义线路分组数量信息 */
  Info?: LineGroupSum;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePackageDetailRequest {
}

declare interface DescribePackageDetailResponse {
  /** 套餐配置详情 */
  Info?: PackageDetailItem[];
  /** 套餐代码列表 */
  LevelMap?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRecordExistExceptDefaultNSRequest {
  /** 域名 */
  Domain: string;
  /** 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。可以通过接口DescribeDomainList查到所有的Domain以及DomainId */
  DomainId?: number;
}

declare interface DescribeRecordExistExceptDefaultNSResponse {
  /** true 是 false 否 */
  Exist?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRecordFilterListRequest {
  /** 要获取的解析记录所属的域名。 */
  Domain: string;
  /** 要获取的解析记录所属的域名 Id，如果传了 DomainId，系统将会忽略 Domain 参数。 可以通过接口 DescribeDomainList 查到所有的 Domain 以及 DomainId。 */
  DomainId?: number;
  /** 根据解析记录的主机头获取解析记录。默认模糊匹配。可以通过设置 IsExactSubdomain 参数为 true 进行精确查找。 */
  SubDomain?: string;
  /** 获取某些类型的解析记录，如 A，CNAME，NS，AAAA，显性URL，隐性URL，CAA，SPF等。 */
  RecordType?: string[];
  /** 获取某些线路ID的解析记录。可以通过接口 DescribeRecordLineList 查看当前域名允许的线路信息。 */
  RecordLine?: string[];
  /** 获取某些分组下的解析记录时，传这个分组 Id。可以通过接口 DescribeRecordGroupList 接口 GroupId 字段获取。 */
  GroupId?: number[];
  /** 通过关键字搜索解析记录，当前支持搜索主机头和记录值 */
  Keyword?: string;
  /** 排序字段，支持 NAME，LINE，TYPE，VALUE，WEIGHT，MX，TTL，UPDATED_ON 几个字段。NAME：解析记录的主机头LINE：解析记录线路TYPE：解析记录类型VALUE：解析记录值WEIGHT：权重MX：MX 优先级TTL：解析记录缓存时间UPDATED_ON：解析记录更新时间 */
  SortField?: string;
  /** 排序方式，升序：ASC，降序：DESC。默认值为ASC。 */
  SortType?: string;
  /** 偏移量，默认值为0。如果入参携带"Domain","ffset","Limit" 这3个以外的参数，记录结果限制最大3000条 */
  Offset?: number;
  /** 限制数量，当前Limit最大支持3000。默认值为100。 */
  Limit?: number;
  /** 根据解析记录的值获取解析记录 */
  RecordValue?: string;
  /** 根据解析记录的状态获取解析记录。可取值为 ENABLE，DISABLE。ENABLE：正常 DISABLE：暂停 */
  RecordStatus?: string[];
  /** 要获取解析记录权重查询区间起点。 */
  WeightBegin?: number;
  /** 要获取解析记录权重查询区间终点。 */
  WeightEnd?: number;
  /** 要获取解析记录 MX 优先级查询区间起点。 */
  MXBegin?: number;
  /** 要获取解析记录 MX 优先级查询区间终点。 */
  MXEnd?: number;
  /** 要获取解析记录 TTL 查询区间起点。 */
  TTLBegin?: number;
  /** 要获取解析记录 TTL 查询区间终点。 */
  TTLEnd?: number;
  /** 要获取解析记录更新时间查询区间起点。 */
  UpdatedAtBegin?: string;
  /** 要获取解析记录更新时间查询区间终点。 */
  UpdatedAtEnd?: string;
  /** 根据解析记录的备注获取解析记录。 */
  Remark?: string;
  /** 是否根据 Subdomain 参数进行精确查找。 */
  IsExactSubDomain?: boolean;
  /** 项目ID */
  ProjectId?: number;
}

declare interface DescribeRecordFilterListResponse {
  /** 记录的数量统计信息 */
  RecordCountInfo?: RecordCountInfo;
  /** 获取的记录列表 */
  RecordList?: RecordListItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRecordGroupListRequest {
  /** 域名 */
  Domain: string;
  /** 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。 */
  DomainId?: number;
  /** 分页开始位置 */
  Offset?: number;
  /** 分页每页数 */
  Limit?: number;
}

declare interface DescribeRecordGroupListResponse {
  /** 分组列表 */
  GroupList?: RecordGroupInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRecordLineCategoryListRequest {
  /** 要查询线路列表的域名。 */
  Domain: string;
  /** 要查询线路列表的域名 ID。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain。可以通过接口 DescribeDomainList 查到所有的 Domain 以及 DomainId。 */
  DomainId?: number;
}

declare interface DescribeRecordLineCategoryListResponse {
  /** 按分类返回的线路列表。 */
  LineList?: LineItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRecordLineListRequest {
  /** 域名。 */
  Domain: string;
  /** 域名套餐等级。 旧套餐：D_FREE、D_PLUS、D_EXTRA、D_EXPERT、D_ULTRA 、DP_EXTRA 分别对应免费套餐、个人豪华、企业 I、企业 II、企业 III、企业基础版。 新套餐：DP_FREE、DP_PLUS、DP_EXPERT、DP_ULTRA 分别对应新免费、专业版、企业版、尊享版。 */
  DomainGrade: string;
  /** 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。可以通过接口DescribeDomainList查到所有的Domain以及DomainId */
  DomainId?: number;
}

declare interface DescribeRecordLineListResponse {
  /** 线路列表。 */
  LineList?: LineInfo[];
  /** 线路分组列表。 */
  LineGroupList?: LineGroupInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRecordListRequest {
  /** 要获取的解析记录所属的域名 */
  Domain: string;
  /** 要获取的解析记录所属的域名Id，如果传了DomainId，系统将会忽略Domain参数。 可以通过接口DescribeDomainList查到所有的Domain以及DomainId */
  DomainId?: number;
  /** 解析记录的主机头，如果传了此参数，则只会返回此主机头对应的解析记录 */
  Subdomain?: string;
  /** 获取某种类型的解析记录，如 A，CNAME，NS，AAAA，显性URL，隐性URL，CAA，SPF等 */
  RecordType?: string;
  /** 获取某条线路名称的解析记录。可以通过接口DescribeRecordLineList查看当前域名允许的线路信息 */
  RecordLine?: string;
  /** 获取某个线路Id对应的解析记录，如果传RecordLineId，系统会忽略RecordLine参数。可以通过接口DescribeRecordLineList查看当前域名允许的线路信息 */
  RecordLineId?: string;
  /** 获取某个分组下的解析记录时，传这个分组Id。 */
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
  RecordCountInfo?: RecordCountInfo;
  /** 获取的记录列表 */
  RecordList?: RecordListItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRecordRequest {
  /** 域名 */
  Domain: string;
  /** 记录 ID 。可以通过接口DescribeRecordList查到所有的解析记录列表以及对应的RecordId */
  RecordId: number;
  /** 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。可以通过接口DescribeDomainList查到所有的Domain以及DomainId */
  DomainId?: number;
}

declare interface DescribeRecordResponse {
  /** 记录信息 */
  RecordInfo?: RecordInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRecordSnapshotRollbackResultRequest {
  /** 域名 */
  Domain: string;
  /** 回滚任务 ID */
  JobId: number;
  /** 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。 */
  DomainId?: number;
}

declare interface DescribeRecordSnapshotRollbackResultResponse {
  /** 回滚任务 ID */
  JobId?: number;
  /** 回滚状态 */
  Status?: string;
  /** 失败的记录信息 */
  FailedRecordList?: SnapshotRecord[];
  /** 所属域名 */
  Domain?: string | null;
  /** 回滚进度 */
  Progress?: number | null;
  /** 回滚剩余时间（单位：分钟） */
  LeftMinutes?: number | null;
  /** 总记录数 */
  Total?: number | null;
  /** 失败记录数 */
  Failed?: number | null;
  /** 成功记录数 */
  Success?: number | null;
  /** 快照下载地址 */
  CosUrl?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRecordTypeRequest {
  /** 域名等级。+ 旧套餐：D_FREE、D_PLUS、D_EXTRA、D_EXPERT、D_ULTRA 分别对应免费套餐、个人豪华、企业1、企业2、企业3。+ 新套餐：DP_FREE、DP_PLUS、DP_EXTRA、DP_EXPERT、DP_ULTRA 分别对应新免费、个人专业版、企业创业版、企业标准版、企业旗舰版。 */
  DomainGrade: string;
}

declare interface DescribeRecordTypeResponse {
  /** 记录类型列表 */
  TypeList?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSnapshotConfigRequest {
  /** 域名 */
  Domain: string;
  /** 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。 */
  DomainId?: number;
}

declare interface DescribeSnapshotConfigResponse {
  /** 解析快照配置 */
  SnapshotConfig?: SnapshotConfig;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSnapshotListRequest {
  /** 域名 */
  Domain: string;
  /** 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。 */
  DomainId?: number;
}

declare interface DescribeSnapshotListResponse {
  /** 分页信息 */
  Info?: SnapshotPageInfo;
  /** 快照列表 */
  SnapshotList?: SnapshotInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSnapshotRollbackResultRequest {
  /** 域名 */
  Domain: string;
  /** 快照回滚任务 ID */
  TaskId: number;
  /** 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。 */
  DomainId?: number;
}

declare interface DescribeSnapshotRollbackResultResponse {
  /** 快照所属域名 */
  Domain?: string;
  /** 回滚剩余时间（分钟） */
  LeftMinutes?: number;
  /** 回滚进度百分比 */
  Progress?: number;
  /** 快照 ID */
  SnapshotId?: string;
  /** 回滚状态 */
  Status?: string;
  /** 快照回滚任务 ID */
  TaskId?: number;
  /** 成功数量 */
  Success?: number | null;
  /** 失败数量 */
  Failed?: number | null;
  /** 总数量 */
  Total?: number | null;
  /** 失败详细信息 */
  FailedRecordList?: SnapshotRecord[] | null;
  /** 快照的下载地址 */
  CosUrl?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSnapshotRollbackTaskRequest {
  /** 域名 */
  Domain: string;
  /** 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。 */
  DomainId?: number;
}

declare interface DescribeSnapshotRollbackTaskResponse {
  /** 快照所属域名 */
  Domain?: string;
  /** 快照 ID */
  SnapshotId?: string;
  /** 回滚状态 */
  Status?: string;
  /** 快照回滚任务 ID */
  TaskId?: number;
  /** 总数量 */
  RecordCount?: number;
  /** 开始回滚时间 */
  CreatedOn?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。可以通过接口DescribeDomainList查到所有的Domain以及DomainId */
  DomainId?: number;
}

declare interface DescribeSubdomainAnalyticsResponse {
  /** 当前统计维度解析量小计 */
  Data?: DomainAnalyticsDetail[];
  /** 子域名解析量统计查询信息 */
  Info?: SubdomainAnalyticsInfo;
  /** 子域名别名解析量统计信息 */
  AliasData?: SubdomainAliasAnalyticsItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSubdomainValidateStatusRequest {
  /** 要查看 TXT 记录校验状态的子域名 Zone 域。 */
  DomainZone: string;
}

declare interface DescribeSubdomainValidateStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeUserDetailRequest {
}

declare interface DescribeUserDetailResponse {
  /** 账户信息 */
  UserInfo?: UserInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVASStatisticRequest {
  /** 域名ID */
  DomainId: number;
}

declare interface DescribeVASStatisticResponse {
  /** 增值服务用量列表 */
  VASList?: VASStatisticItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DownloadSnapshotRequest {
  /** 域名 */
  Domain: string;
  /** 快照记录 ID */
  SnapshotId: string;
  /** 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。 */
  DomainId?: number;
}

declare interface DownloadSnapshotResponse {
  /** 快照下载链接 */
  CosUrl?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDomainCustomLineRequest {
  /** 域名 */
  Domain: string;
  /** 修改后的自定义线路名称，如果不修改名称，需要和PreName保持一致 */
  Name: string;
  /** 自定义线路IP段，用-分割 */
  Area: string;
  /** 修改前的自定义线路名称 */
  PreName: string;
  /** 域名ID，如果传了DomainId，系统将会忽略Domain参数，优先使用DomainId */
  DomainId?: number;
}

declare interface ModifyDomainCustomLineResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDomainLockRequest {
  /** 域名 */
  Domain: string;
  /** 域名要锁定的天数，最多可锁定的天数可以通过获取域名权限接口获取。 */
  LockDays: number;
  /** 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。可以通过接口DescribeDomainList查到所有的Domain以及DomainId */
  DomainId?: number;
}

declare interface ModifyDomainLockResponse {
  /** 域名锁定信息 */
  LockInfo?: LockInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDomainOwnerRequest {
  /** 域名 */
  Domain: string;
  /** 域名需要转入的账号，支持Uin或者邮箱格式 */
  Account: string;
  /** 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。可以通过接口DescribeDomainList查到所有的Domain以及DomainId */
  DomainId?: number;
}

declare interface ModifyDomainOwnerResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDomainRemarkRequest {
  /** 域名 */
  Domain: string;
  /** 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。可以通过接口DescribeDomainList查到所有的Domain以及DomainId */
  DomainId?: number;
  /** 域名备注，删除备注请提交空内容。 */
  Remark?: string;
}

declare interface ModifyDomainRemarkResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDomainStatusRequest {
  /** 域名 */
  Domain: string;
  /** 域名状态，”enable” 、”disable” 分别代表启用和暂停 */
  Status: string;
  /** 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。可以通过接口DescribeDomainList查到所有的Domain以及DomainId */
  DomainId?: number;
}

declare interface ModifyDomainStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDomainToGroupRequest {
  /** 域名 */
  Domain: string;
  /** 域名分组ID */
  GroupId: number;
  /** 域名ID,域名ID，参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain */
  DomainId?: number;
}

declare interface ModifyDomainToGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDomainUnlockRequest {
  /** 域名 */
  Domain: string;
  /** 域名解锁码，锁定的时候会返回。 */
  LockCode: string;
  /** 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。可以通过接口DescribeDomainList查到所有的Domain以及DomainId */
  DomainId?: number;
}

declare interface ModifyDomainUnlockResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDynamicDNSRequest {
  /** 域名 */
  Domain: string;
  /** 记录ID。 可以通过接口DescribeRecordList查到所有的解析记录列表以及对应的RecordId */
  RecordId: number;
  /** 记录线路，通过 API 记录线路获得，中文，比如：默认。 */
  RecordLine: string;
  /** 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。可以通过接口DescribeDomainList查到所有的Domain以及DomainId */
  DomainId?: number;
  /** 主机记录，如 www，如果不传，默认为 @。 */
  SubDomain?: string;
  /** 线路的 ID，通过 API 记录线路获得，英文字符串，比如：10=1。参数RecordLineId优先级高于RecordLine，如果同时传递二者，优先使用RecordLineId参数。 */
  RecordLineId?: string;
  /** IP 地址，支持 IPv4、IPv6，例如 119.29.29.29 或者 2402:4e00:: */
  Value?: string;
  /** TTL值，如果不传，默认为域名的TTL值。 */
  Ttl?: number;
}

declare interface ModifyDynamicDNSResponse {
  /** 记录ID */
  RecordId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyLineGroupRequest {
  /** 自定义线路分组的名称。 */
  Name: string;
  /** 自定义线路分组包含的线路列表，包含多个线路时用英文逗号分隔。例如，铁通,奇虎 */
  Lines: string;
  /** 域名 */
  Domain: string;
  /** 自定义线路分组ID */
  LineGroupId: number;
  /** 域名ID，如果传了DomainId，系统将会忽略Domain参数，优先使用DomainId */
  DomainId?: number;
}

declare interface ModifyLineGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyPackageAutoRenewRequest {
  /** 资源ID。可以在控制台查看所有的资源 */
  ResourceId: string;
  /** enable 开启自动续费；disable 关闭自动续费 */
  Status: string;
}

declare interface ModifyPackageAutoRenewResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyRecordBatchRequest {
  /** 记录ID数组。可以通过接口DescribeRecordList查到所有的解析记录列表以及对应的RecordId */
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
  JobId?: number;
  /** 见modifyRecordBatchDetail */
  DetailList?: ModifyRecordBatchDetail[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyRecordFieldsRequest {
  /** 域名 */
  Domain: string;
  /** 记录 ID 。 */
  RecordId: number;
  /** 要修改的记录属性和值，支持：sub_domain，record_line，record_line_id，record_type，value，ttl，status，mx，weight */
  FieldList: KeyValue[];
  /** 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。 */
  DomainId?: number;
}

declare interface ModifyRecordFieldsResponse {
  /** 记录ID */
  RecordId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyRecordGroupRequest {
  /** 域名 */
  Domain: string;
  /** 分组名称 */
  GroupName: string;
  /** 要修改的分组 ID */
  GroupId: number;
  /** 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。 */
  DomainId?: number;
}

declare interface ModifyRecordGroupResponse {
  /** 修改的分组 ID */
  GroupId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyRecordRemarkRequest {
  /** 域名 */
  Domain: string;
  /** 记录 ID 。可以通过接口DescribeRecordList查到所有的解析记录列表以及对应的RecordId */
  RecordId: number;
  /** 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。可以通过接口DescribeDomainList查到所有的Domain以及DomainId */
  DomainId?: number;
  /** 解析记录备注，删除备注请提交空内容。 */
  Remark?: string;
}

declare interface ModifyRecordRemarkResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 记录 ID 。可以通过接口DescribeRecordList查到所有的解析记录列表以及对应的RecordId */
  RecordId: number;
  /** 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。可以通过接口DescribeDomainList查到所有的Domain以及DomainId */
  DomainId?: number;
  /** 主机记录，如 www，如果不传，默认为 @。 */
  SubDomain?: string;
  /** 线路的 ID，通过 API 记录线路获得，英文字符串，比如：10=1。参数RecordLineId优先级高于RecordLine，如果同时传递二者，优先使用RecordLineId参数。 */
  RecordLineId?: string;
  /** MX 优先级，当记录类型是 MX 时有效，范围1-20，MX 记录时必选。 */
  MX?: number;
  /** TTL，范围1-604800，不同等级域名最小值不同。 */
  TTL?: number;
  /** 权重信息，0到100的整数。0 表示关闭，不传该参数，表示不设置权重信息。 */
  Weight?: number;
  /** 记录初始状态，取值范围为 ENABLE 和 DISABLE 。默认为 ENABLE ，如果传入 DISABLE，解析不会生效，也不会验证负载均衡的限制。 */
  Status?: string;
  /** 记录的备注信息。传空删除备注。 */
  Remark?: string;
  /** 开启DNSSEC时，强制将其它记录修改为CNAME/URL记录 */
  DnssecConflictMode?: string;
}

declare interface ModifyRecordResponse {
  /** 记录ID */
  RecordId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyRecordStatusRequest {
  /** 域名 */
  Domain: string;
  /** 记录 ID 。可以通过接口DescribeRecordList查到所有的解析记录列表以及对应的RecordId */
  RecordId: number;
  /** 记录的状态。取值范围为 ENABLE 和 DISABLE。如果传入 DISABLE，解析不会生效，也不会验证负载均衡的限制。 */
  Status: string;
  /** 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。可以通过接口DescribeDomainList查到所有的Domain以及DomainId */
  DomainId?: number;
}

declare interface ModifyRecordStatusResponse {
  /** 记录ID。 */
  RecordId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyRecordToGroupRequest {
  /** 域名 */
  Domain: string;
  /** 分组 ID */
  GroupId: number;
  /** 记录 ID，多个 ID 用竖线“|”分割 */
  RecordId: string;
  /** 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。 */
  DomainId?: number;
}

declare interface ModifyRecordToGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifySnapshotConfigRequest {
  /** 域名 */
  Domain: string;
  /** 备件间隔：空字符串-不备份，half_hour-每半小时，hourly-每小时，daily-每天，monthly-每月 */
  Period: string;
  /** 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。 */
  DomainId?: number;
}

declare interface ModifySnapshotConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifySubdomainStatusRequest {
  /** 域名 */
  Domain: string;
  /** 记录类型。允许的值为A、CNAME、MX、TXT、NS、AAAA、SPF、SRV、CAA、URL、URL1。若要传多个，用英文逗号分隔，例如A,TXT,CNAME。 */
  RecordType: string;
  /** 记录状态。允许的值为disable。 */
  Status: string;
  /** 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。可以通过接口DescribeDomainList查到所有的Domain以及DomainId */
  DomainId?: number;
  /** 主机记录，如 www，如果不传，默认为 @。 */
  SubDomain?: string;
}

declare interface ModifySubdomainStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyTXTRecordRequest {
  /** 域名 */
  Domain: string;
  /** 记录线路，通过 API 记录线路获得，中文，比如：默认。 */
  RecordLine: string;
  /** 记录值，如 IP : 200.200.200.200， CNAME : cname.dnspod.com.， MX : mail.dnspod.com.。 */
  Value: string;
  /** 记录 ID 。可以通过接口DescribeRecordList查到所有的解析记录列表以及对应的RecordId */
  RecordId: number;
  /** 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。可以通过接口DescribeDomainList查到所有的Domain以及DomainId */
  DomainId?: number;
  /** 主机记录，如 www，如果不传，默认为 @。 */
  SubDomain?: string;
  /** 线路的 ID，通过 API 记录线路获得，英文字符串，比如：10=1。参数RecordLineId优先级高于RecordLine，如果同时传递二者，优先使用RecordLineId参数。 */
  RecordLineId?: string;
  /** TTL，范围1-604800，不同等级域名最小值不同。 */
  TTL?: number;
  /** 记录初始状态，取值范围为 ENABLE 和 DISABLE 。默认为 ENABLE ，如果传入 DISABLE，解析不会生效，也不会验证负载均衡的限制。 */
  Status?: string;
  /** 记录的备注信息。传空删除备注。 */
  Remark?: string;
}

declare interface ModifyTXTRecordResponse {
  /** 记录ID */
  RecordId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyVasAutoRenewStatusRequest {
  /** 资源ID。可以从控制台查看所有的资源 */
  ResourceId: string;
  /** enable 开启自动续费；disable 关闭自动续费 */
  Status: string;
}

declare interface ModifyVasAutoRenewStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface PayOrderWithBalanceRequest {
  /** 需要支付的大订单号数组 */
  BigDealIdList: string[];
  /** 代金券ID数组。可以从控制台查到拥有的代金券 */
  VoucherIdList?: string[];
}

declare interface PayOrderWithBalanceResponse {
  /** 此次操作支付成功的订单id数组 */
  DealIdList?: string[];
  /** 此次操作支付成功的大订单号数组 */
  BigDealIdList?: string[];
  /** 此次操作支付成功的订单号数组 */
  DealNameList?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RollbackRecordSnapshotRequest {
  /** 域名 */
  Domain: string;
  /** 快照 ID */
  SnapshotId: string;
  /** 解析记录信息 */
  RecordList: SnapshotRecord[];
  /** 之前的快照回滚任务 ID */
  TaskId: number;
  /** 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。 */
  DomainId?: number;
}

declare interface RollbackRecordSnapshotResponse {
  /** 回滚任务 ID */
  JobId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RollbackSnapshotRequest {
  /** 域名 */
  Domain: string;
  /** 快照记录 ID */
  SnapshotId: string;
  /** 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。 */
  DomainId?: number;
  /** 指定需要回滚的记录 */
  RecordList?: SnapshotRecord[];
}

declare interface RollbackSnapshotResponse {
  /** 回滚任务 ID，用来查询回滚状态 */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Dnspod DNSPod} */
declare interface Dnspod {
  (): Versions;
  /** 回滚前检查单条记录 {@link CheckRecordSnapshotRollbackRequest} {@link CheckRecordSnapshotRollbackResponse} */
  CheckRecordSnapshotRollback(data: CheckRecordSnapshotRollbackRequest, config?: AxiosRequestConfig): AxiosPromise<CheckRecordSnapshotRollbackResponse>;
  /** 快照回滚前检查 {@link CheckSnapshotRollbackRequest} {@link CheckSnapshotRollbackResponse} */
  CheckSnapshotRollback(data: CheckSnapshotRollbackRequest, config?: AxiosRequestConfig): AxiosPromise<CheckSnapshotRollbackResponse>;
  /** 商品下单 {@link CreateDealRequest} {@link CreateDealResponse} */
  CreateDeal(data: CreateDealRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDealResponse>;
  /** 添加域名 {@link CreateDomainRequest} {@link CreateDomainResponse} */
  CreateDomain(data: CreateDomainRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDomainResponse>;
  /** 创建域名别名 {@link CreateDomainAliasRequest} {@link CreateDomainAliasResponse} */
  CreateDomainAlias(data: CreateDomainAliasRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDomainAliasResponse>;
  /** 批量添加域名 {@link CreateDomainBatchRequest} {@link CreateDomainBatchResponse} */
  CreateDomainBatch(data: CreateDomainBatchRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDomainBatchResponse>;
  /** 创建域名的自定义线路 {@link CreateDomainCustomLineRequest} {@link CreateDomainCustomLineResponse} */
  CreateDomainCustomLine(data: CreateDomainCustomLineRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDomainCustomLineResponse>;
  /** 创建域名分组 {@link CreateDomainGroupRequest} {@link CreateDomainGroupResponse} */
  CreateDomainGroup(data: CreateDomainGroupRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDomainGroupResponse>;
  /** 批量导出域名解析量 {@link CreateDomainsAnalyticsFileRequest} {@link CreateDomainsAnalyticsFileResponse} */
  CreateDomainsAnalyticsFile(data: CreateDomainsAnalyticsFileRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDomainsAnalyticsFileResponse>;
  /** 创建域名的线路分组 {@link CreateLineGroupRequest} {@link CreateLineGroupResponse} */
  CreateLineGroup(data: CreateLineGroupRequest, config?: AxiosRequestConfig): AxiosPromise<CreateLineGroupResponse>;
  /** 复制域名的线路分组 {@link CreateLineGroupCopyRequest} {@link CreateLineGroupCopyResponse} */
  CreateLineGroupCopy(data: CreateLineGroupCopyRequest, config?: AxiosRequestConfig): AxiosPromise<CreateLineGroupCopyResponse>;
  /** 添加记录 {@link CreateRecordRequest} {@link CreateRecordResponse} */
  CreateRecord(data: CreateRecordRequest, config?: AxiosRequestConfig): AxiosPromise<CreateRecordResponse>;
  /** 批量添加记录 {@link CreateRecordBatchRequest} {@link CreateRecordBatchResponse} */
  CreateRecordBatch(data: CreateRecordBatchRequest, config?: AxiosRequestConfig): AxiosPromise<CreateRecordBatchResponse>;
  /** 添加记录分组 {@link CreateRecordGroupRequest} {@link CreateRecordGroupResponse} */
  CreateRecordGroup(data: CreateRecordGroupRequest, config?: AxiosRequestConfig): AxiosPromise<CreateRecordGroupResponse>;
  /** 创建快照 {@link CreateSnapshotRequest} {@link CreateSnapshotResponse} */
  CreateSnapshot(data: CreateSnapshotRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSnapshotResponse>;
  /** 批量导出子域名解析量 {@link CreateSubDomainsAnalyticsFileRequest} {@link CreateSubDomainsAnalyticsFileResponse} */
  CreateSubDomainsAnalyticsFile(data: CreateSubDomainsAnalyticsFileRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSubDomainsAnalyticsFileResponse>;
  /** 创建添加子域名 Zone 域解析时所需要的 TXT 记录值 {@link CreateSubdomainValidateTXTValueRequest} {@link CreateSubdomainValidateTXTValueResponse} */
  CreateSubdomainValidateTXTValue(data: CreateSubdomainValidateTXTValueRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSubdomainValidateTXTValueResponse>;
  /** 添加TXT记录 {@link CreateTXTRecordRequest} {@link CreateTXTRecordResponse} */
  CreateTXTRecord(data: CreateTXTRecordRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTXTRecordResponse>;
  /** 删除域名 {@link DeleteDomainRequest} {@link DeleteDomainResponse} */
  DeleteDomain(data: DeleteDomainRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDomainResponse>;
  /** 删除域名别名 {@link DeleteDomainAliasRequest} {@link DeleteDomainAliasResponse} */
  DeleteDomainAlias(data: DeleteDomainAliasRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDomainAliasResponse>;
  /** 批量删除域名 {@link DeleteDomainBatchRequest} {@link DeleteDomainBatchResponse} */
  DeleteDomainBatch(data: DeleteDomainBatchRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDomainBatchResponse>;
  /** 删除域名的自定义线路 {@link DeleteDomainCustomLineRequest} {@link DeleteDomainCustomLineResponse} */
  DeleteDomainCustomLine(data: DeleteDomainCustomLineRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDomainCustomLineResponse>;
  /** 删除域名的线路分组 {@link DeleteLineGroupRequest} {@link DeleteLineGroupResponse} */
  DeleteLineGroup(data: DeleteLineGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteLineGroupResponse>;
  /** 删除记录 {@link DeleteRecordRequest} {@link DeleteRecordResponse} */
  DeleteRecord(data: DeleteRecordRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRecordResponse>;
  /** 批量删除解析记录 {@link DeleteRecordBatchRequest} {@link DeleteRecordBatchResponse} */
  DeleteRecordBatch(data: DeleteRecordBatchRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRecordBatchResponse>;
  /** 删除记录分组 {@link DeleteRecordGroupRequest} {@link DeleteRecordGroupResponse} */
  DeleteRecordGroup(data: DeleteRecordGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRecordGroupResponse>;
  /** 按账号删除域名共享 {@link DeleteShareDomainRequest} {@link DeleteShareDomainResponse} */
  DeleteShareDomain(data: DeleteShareDomainRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteShareDomainResponse>;
  /** 删除快照 {@link DeleteSnapshotRequest} {@link DeleteSnapshotResponse} */
  DeleteSnapshot(data: DeleteSnapshotRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteSnapshotResponse>;
  /** 获取任务详情 {@link DescribeBatchTaskRequest} {@link DescribeBatchTaskResponse} */
  DescribeBatchTask(data: DescribeBatchTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBatchTaskResponse>;
  /** 获取域名信息 {@link DescribeDomainRequest} {@link DescribeDomainResponse} */
  DescribeDomain(data: DescribeDomainRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDomainResponse>;
  /** 获取域名别名列表 {@link DescribeDomainAliasListRequest} {@link DescribeDomainAliasListResponse} */
  DescribeDomainAliasList(data: DescribeDomainAliasListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDomainAliasListResponse>;
  /** 域名解析量统计 {@link DescribeDomainAnalyticsRequest} {@link DescribeDomainAnalyticsResponse} */
  DescribeDomainAnalytics(data: DescribeDomainAnalyticsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDomainAnalyticsResponse>;
  /** 批量操作中搜索域名 {@link DescribeDomainAndRecordListRequest} {@link DescribeDomainAndRecordListResponse} */
  DescribeDomainAndRecordList(data?: DescribeDomainAndRecordListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDomainAndRecordListResponse>;
  /** 获取域名的自定义线路列表 {@link DescribeDomainCustomLineListRequest} {@link DescribeDomainCustomLineListResponse} */
  DescribeDomainCustomLineList(data: DescribeDomainCustomLineListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDomainCustomLineListResponse>;
  /** 获取域名筛选列表 {@link DescribeDomainFilterListRequest} {@link DescribeDomainFilterListResponse} */
  DescribeDomainFilterList(data: DescribeDomainFilterListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDomainFilterListResponse>;
  /** 获取域名分组列表 {@link DescribeDomainGroupListRequest} {@link DescribeDomainGroupListResponse} */
  DescribeDomainGroupList(data?: DescribeDomainGroupListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDomainGroupListResponse>;
  /** 获取域名列表 {@link DescribeDomainListRequest} {@link DescribeDomainListResponse} */
  DescribeDomainList(data?: DescribeDomainListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDomainListResponse>;
  /** 获取域名日志 {@link DescribeDomainLogListRequest} {@link DescribeDomainLogListResponse} */
  DescribeDomainLogList(data: DescribeDomainLogListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDomainLogListResponse>;
  /** 获取域名概览信息 {@link DescribeDomainPreviewRequest} {@link DescribeDomainPreviewResponse} */
  DescribeDomainPreview(data: DescribeDomainPreviewRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDomainPreviewResponse>;
  /** 获取域名权限 {@link DescribeDomainPurviewRequest} {@link DescribeDomainPurviewResponse} */
  DescribeDomainPurview(data: DescribeDomainPurviewRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDomainPurviewResponse>;
  /** 获取域名共享信息 {@link DescribeDomainShareInfoRequest} {@link DescribeDomainShareInfoResponse} */
  DescribeDomainShareInfo(data: DescribeDomainShareInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDomainShareInfoResponse>;
  /** 获取指定域名的已共享列表 {@link DescribeDomainShareUserListRequest} {@link DescribeDomainShareUserListResponse} */
  DescribeDomainShareUserList(data: DescribeDomainShareUserListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDomainShareUserListResponse>;
  /** 获取域名Whois信息 {@link DescribeDomainWhoisRequest} {@link DescribeDomainWhoisResponse} */
  DescribeDomainWhois(data: DescribeDomainWhoisRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDomainWhoisResponse>;
  /** 根据任务ID获取生成的文件信息 {@link DescribeFileInfoByJobIdRequest} {@link DescribeFileInfoByJobIdResponse} */
  DescribeFileInfoByJobId(data: DescribeFileInfoByJobIdRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFileInfoByJobIdResponse>;
  /** 获取域名的线路分组列表 {@link DescribeLineGroupListRequest} {@link DescribeLineGroupListResponse} */
  DescribeLineGroupList(data: DescribeLineGroupListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLineGroupListResponse>;
  /** 获取各套餐配置详情 {@link DescribePackageDetailRequest} {@link DescribePackageDetailResponse} */
  DescribePackageDetail(data?: DescribePackageDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePackageDetailResponse>;
  /** 获取记录信息 {@link DescribeRecordRequest} {@link DescribeRecordResponse} */
  DescribeRecord(data: DescribeRecordRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRecordResponse>;
  /** 判断是否有除系统默认的@-NS记录之外的记录存在 {@link DescribeRecordExistExceptDefaultNSRequest} {@link DescribeRecordExistExceptDefaultNSResponse} */
  DescribeRecordExistExceptDefaultNS(data: DescribeRecordExistExceptDefaultNSRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRecordExistExceptDefaultNSResponse>;
  /** 获取域名的解析记录筛选列表 {@link DescribeRecordFilterListRequest} {@link DescribeRecordFilterListResponse} */
  DescribeRecordFilterList(data: DescribeRecordFilterListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRecordFilterListResponse>;
  /** 查询解析记录分组列表 {@link DescribeRecordGroupListRequest} {@link DescribeRecordGroupListResponse} */
  DescribeRecordGroupList(data: DescribeRecordGroupListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRecordGroupListResponse>;
  /** 按分类返回线路列表 {@link DescribeRecordLineCategoryListRequest} {@link DescribeRecordLineCategoryListResponse} */
  DescribeRecordLineCategoryList(data: DescribeRecordLineCategoryListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRecordLineCategoryListResponse>;
  /** 获取等级允许的线路 {@link DescribeRecordLineListRequest} {@link DescribeRecordLineListResponse} */
  DescribeRecordLineList(data: DescribeRecordLineListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRecordLineListResponse>;
  /** 获取域名的解析记录列表 {@link DescribeRecordListRequest} {@link DescribeRecordListResponse} */
  DescribeRecordList(data: DescribeRecordListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRecordListResponse>;
  /** 查询解析记录重新回滚的结果 {@link DescribeRecordSnapshotRollbackResultRequest} {@link DescribeRecordSnapshotRollbackResultResponse} */
  DescribeRecordSnapshotRollbackResult(data: DescribeRecordSnapshotRollbackResultRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRecordSnapshotRollbackResultResponse>;
  /** 获取等级允许的记录类型 {@link DescribeRecordTypeRequest} {@link DescribeRecordTypeResponse} */
  DescribeRecordType(data: DescribeRecordTypeRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRecordTypeResponse>;
  /** 查询解析快照配置 {@link DescribeSnapshotConfigRequest} {@link DescribeSnapshotConfigResponse} */
  DescribeSnapshotConfig(data: DescribeSnapshotConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSnapshotConfigResponse>;
  /** 查询快照列表 {@link DescribeSnapshotListRequest} {@link DescribeSnapshotListResponse} */
  DescribeSnapshotList(data: DescribeSnapshotListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSnapshotListResponse>;
  /** 查询快照回滚结果 {@link DescribeSnapshotRollbackResultRequest} {@link DescribeSnapshotRollbackResultResponse} */
  DescribeSnapshotRollbackResult(data: DescribeSnapshotRollbackResultRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSnapshotRollbackResultResponse>;
  /** 查询最近一次回滚 {@link DescribeSnapshotRollbackTaskRequest} {@link DescribeSnapshotRollbackTaskResponse} */
  DescribeSnapshotRollbackTask(data: DescribeSnapshotRollbackTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSnapshotRollbackTaskResponse>;
  /** 子域名解析量统计 {@link DescribeSubdomainAnalyticsRequest} {@link DescribeSubdomainAnalyticsResponse} */
  DescribeSubdomainAnalytics(data: DescribeSubdomainAnalyticsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSubdomainAnalyticsResponse>;
  /** 查看添加子域名 Zone 域解析 TXT 记录值验证状态 {@link DescribeSubdomainValidateStatusRequest} {@link DescribeSubdomainValidateStatusResponse} */
  DescribeSubdomainValidateStatus(data: DescribeSubdomainValidateStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSubdomainValidateStatusResponse>;
  /** 获取账户信息 {@link DescribeUserDetailRequest} {@link DescribeUserDetailResponse} */
  DescribeUserDetail(data?: DescribeUserDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUserDetailResponse>;
  /** 获取域名增值服务用量 {@link DescribeVASStatisticRequest} {@link DescribeVASStatisticResponse} */
  DescribeVASStatistic(data: DescribeVASStatisticRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVASStatisticResponse>;
  /** 下载快照 {@link DownloadSnapshotRequest} {@link DownloadSnapshotResponse} */
  DownloadSnapshot(data: DownloadSnapshotRequest, config?: AxiosRequestConfig): AxiosPromise<DownloadSnapshotResponse>;
  /** 修改域名的自定义线路 {@link ModifyDomainCustomLineRequest} {@link ModifyDomainCustomLineResponse} */
  ModifyDomainCustomLine(data: ModifyDomainCustomLineRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDomainCustomLineResponse>;
  /** 锁定域名 {@link ModifyDomainLockRequest} {@link ModifyDomainLockResponse} */
  ModifyDomainLock(data: ModifyDomainLockRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDomainLockResponse>;
  /** 域名过户 {@link ModifyDomainOwnerRequest} {@link ModifyDomainOwnerResponse} */
  ModifyDomainOwner(data: ModifyDomainOwnerRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDomainOwnerResponse>;
  /** 设置域名备注 {@link ModifyDomainRemarkRequest} {@link ModifyDomainRemarkResponse} */
  ModifyDomainRemark(data: ModifyDomainRemarkRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDomainRemarkResponse>;
  /** 修改域名状态 {@link ModifyDomainStatusRequest} {@link ModifyDomainStatusResponse} */
  ModifyDomainStatus(data: ModifyDomainStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDomainStatusResponse>;
  /** 修改域名所属分组 {@link ModifyDomainToGroupRequest} {@link ModifyDomainToGroupResponse} */
  ModifyDomainToGroup(data: ModifyDomainToGroupRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDomainToGroupResponse>;
  /** 域名锁定解锁 {@link ModifyDomainUnlockRequest} {@link ModifyDomainUnlockResponse} */
  ModifyDomainUnlock(data: ModifyDomainUnlockRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDomainUnlockResponse>;
  /** 更新动态 DNS 记录 {@link ModifyDynamicDNSRequest} {@link ModifyDynamicDNSResponse} */
  ModifyDynamicDNS(data: ModifyDynamicDNSRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDynamicDNSResponse>;
  /** 修改域名的线路分组 {@link ModifyLineGroupRequest} {@link ModifyLineGroupResponse} */
  ModifyLineGroup(data: ModifyLineGroupRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyLineGroupResponse>;
  /** DNS 解析套餐自动续费设置 {@link ModifyPackageAutoRenewRequest} {@link ModifyPackageAutoRenewResponse} */
  ModifyPackageAutoRenew(data: ModifyPackageAutoRenewRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyPackageAutoRenewResponse>;
  /** 修改记录 {@link ModifyRecordRequest} {@link ModifyRecordResponse} */
  ModifyRecord(data: ModifyRecordRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyRecordResponse>;
  /** 批量修改记录 {@link ModifyRecordBatchRequest} {@link ModifyRecordBatchResponse} */
  ModifyRecordBatch(data: ModifyRecordBatchRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyRecordBatchResponse>;
  /** 修改记录可选字段 {@link ModifyRecordFieldsRequest} {@link ModifyRecordFieldsResponse} */
  ModifyRecordFields(data: ModifyRecordFieldsRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyRecordFieldsResponse>;
  /** 修改记录分组 {@link ModifyRecordGroupRequest} {@link ModifyRecordGroupResponse} */
  ModifyRecordGroup(data: ModifyRecordGroupRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyRecordGroupResponse>;
  /** 设置记录备注 {@link ModifyRecordRemarkRequest} {@link ModifyRecordRemarkResponse} */
  ModifyRecordRemark(data: ModifyRecordRemarkRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyRecordRemarkResponse>;
  /** 设置记录状态 {@link ModifyRecordStatusRequest} {@link ModifyRecordStatusResponse} */
  ModifyRecordStatus(data: ModifyRecordStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyRecordStatusResponse>;
  /** 将记录添加到分组 {@link ModifyRecordToGroupRequest} {@link ModifyRecordToGroupResponse} */
  ModifyRecordToGroup(data: ModifyRecordToGroupRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyRecordToGroupResponse>;
  /** 修改快照配置 {@link ModifySnapshotConfigRequest} {@link ModifySnapshotConfigResponse} */
  ModifySnapshotConfig(data: ModifySnapshotConfigRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySnapshotConfigResponse>;
  /** 暂停子域名的解析记录 {@link ModifySubdomainStatusRequest} {@link ModifySubdomainStatusResponse} */
  ModifySubdomainStatus(data: ModifySubdomainStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySubdomainStatusResponse>;
  /** 修改TXT记录 {@link ModifyTXTRecordRequest} {@link ModifyTXTRecordResponse} */
  ModifyTXTRecord(data: ModifyTXTRecordRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyTXTRecordResponse>;
  /** 增值服务自动续费设置 {@link ModifyVasAutoRenewStatusRequest} {@link ModifyVasAutoRenewStatusResponse} */
  ModifyVasAutoRenewStatus(data: ModifyVasAutoRenewStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyVasAutoRenewStatusResponse>;
  /** DNSPod商品余额支付 {@link PayOrderWithBalanceRequest} {@link PayOrderWithBalanceResponse} */
  PayOrderWithBalance(data: PayOrderWithBalanceRequest, config?: AxiosRequestConfig): AxiosPromise<PayOrderWithBalanceResponse>;
  /** 重新回滚指定解析记录快照 {@link RollbackRecordSnapshotRequest} {@link RollbackRecordSnapshotResponse} */
  RollbackRecordSnapshot(data: RollbackRecordSnapshotRequest, config?: AxiosRequestConfig): AxiosPromise<RollbackRecordSnapshotResponse>;
  /** 回滚快照 {@link RollbackSnapshotRequest} {@link RollbackSnapshotResponse} */
  RollbackSnapshot(data: RollbackSnapshotRequest, config?: AxiosRequestConfig): AxiosPromise<RollbackSnapshotResponse>;
}

export declare type Versions = ["2021-03-23"];

export default Dnspod;
