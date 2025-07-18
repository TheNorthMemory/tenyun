/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 添加地址池地址 */
declare interface Address {
  /** 地址值：只支持ipv4、ipv6和域名格式；不支持回环地址、保留地址、内网地址与腾讯保留网段 */
  Addr: string;
  /** 是否启用:DISABLED不启用；ENABLED启用 */
  IsEnable: string;
  /** 地址id */
  AddressId?: number;
  /** 地址名称 */
  Location?: string;
  /** OK正常，DOWN故障，WARN风险，UNKNOWN探测中，UNMONITORED未知 */
  Status?: string;
  /** 权重，流量策略为WEIGHT时，必填；范围1-100 */
  Weight?: number | null;
  /** 创建时间 */
  CreatedOn?: string;
  /** 修改时间 */
  UpdatedOn?: string;
}

/** 地址所属地域 */
declare interface AddressLocation {
  /** ip地址 */
  Addr?: string;
  /** 所属地域 */
  Location?: string;
}

/** 地址池 */
declare interface AddressPool {
  /** 地址池 id */
  PoolId?: number | null;
  /** 地址池名 */
  PoolName?: string | null;
  /** 地址池地址类型：IPV4、IPV6、DOMAIN */
  AddrType?: string | null;
  /** 流量策略: WEIGHT负载均衡，ALL解析全部 */
  TrafficStrategy?: string | null;
  /** 监控器id */
  MonitorId?: number | null;
  /** OK正常，DOWN故障，WARN风险，UNKNOWN未知 */
  Status?: string | null;
  /** 地址数 */
  AddressNum?: number | null;
  /** 探点数 */
  MonitorGroupNum?: number | null;
  /** 探测任务数 */
  MonitorTaskNum?: number | null;
  /** 实例相关信息 */
  InstanceInfo?: InstanceInfo[] | null;
  /** 地址池地址信息 */
  AddressSet?: Address[] | null;
  /** 创建时间 */
  CreatedOn?: string | null;
  /** 更新时间 */
  UpdatedOn?: string | null;
}

/** 地址池详情 */
declare interface AddressPoolDetail {
  /** 地址池 id */
  PoolId?: number;
  /** 地址池名 */
  PoolName?: string;
  /** 地址池地址类型：IPV4、IPV6、DOMAIN */
  AddrType?: string;
  /** 流量策略: WEIGHT负载均衡，ALL解析全部 */
  TrafficStrategy?: string;
  /** 监控器id */
  MonitorId?: number | null;
  /** 创建时间 */
  CreatedOn?: string;
  /** 更新时间 */
  UpdatedOn?: string;
}

/** 计费项 */
declare interface CostItem {
  /** 计费项名称 */
  CostName?: string;
  /** 计费项值 */
  CostValue?: number;
}

/** 探测任务套餐 */
declare interface DetectTaskPackage {
  /** 资源id */
  ResourceId?: string;
  /** 资源类型TASK 探测任务 */
  ResourceType?: string;
  /** 额度 */
  Quota?: number;
  /** 套餐过期时间 */
  CurrentDeadline?: string;
  /** 套餐创建时间 */
  CreateTime?: string;
  /** 是否过期0否1是 */
  IsExpire?: number;
  /** 状态ENABLED: 正常ISOLATED: 隔离DESTROYED：销毁REFUNDED：已退款 */
  Status?: string;
  /** 是否自动续费0不1是 */
  AutoRenewFlag?: number;
  /** 备注 */
  Remark?: string;
  /** 计费项 */
  CostItemList?: CostItem[];
  /** 探测任务类型：100系统设定；200计费；300管理系统；110D监控迁移的免费任务；120容灾切换任务 */
  Group?: number | null;
}

/** 探测组 */
declare interface DetectorGroup {
  /** 线路组id GroupLineId */
  Gid: number;
  /** bgp, international, isp */
  GroupType?: string;
  /** 组名 */
  GroupName?: string;
  /** ipv4, ipv6 */
  InternetFamily?: string;
  /** 支持的套餐类型 */
  PackageSet?: string[] | null;
}

/** 线路列表 */
declare interface GroupLine {
  /** 分组线路id */
  DnsLineId: number;
  /** 父节点 0为根节点 */
  Parent: number;
  /** 线路名 */
  LineName: string;
  /** 10=9 DNSPod 线路 id */
  LineId: string;
  /** 是否已使用过 */
  Useful: boolean;
  /** 0为未使用 */
  SubGroup: number;
  /** 权限标识 */
  LinePackage?: number;
  /** 1 */
  Weight?: number;
}

/** 返回实例 */
declare interface Instance {
  /** 实例id */
  InstanceId?: string;
  /** 实例名 */
  InstanceName?: string;
  /** 资源 id */
  ResourceId?: string;
  /** 业务域名 */
  Domain?: string;
  /** Cname域名接入方式CUSTOM: 自定义接入域名SYSTEM: 系统接入域名 */
  AccessType?: string;
  /** 接入域名 */
  AccessDomain?: string;
  /** 接入子域名 */
  AccessSubDomain?: string;
  /** 全局记录过期时间 */
  GlobalTtl?: number;
  /** 套餐类型FREE: 免费版STANDARD：标准版ULTIMATE：旗舰版 */
  PackageType?: string;
  /** 实例运行状态NORMAL: 健康FAULTY: 有风险DOWN: 宕机UNKNOWN: 未知 */
  WorkingStatus?: string;
  /** 实例状态，ENABLED: 正常，DISABLED: 禁用 */
  Status?: string;
  /** 是否cname接入：true已接入；false未接入 */
  IsCnameConfigured?: boolean;
  /** 备注 */
  Remark?: string;
  /** 策略数量 */
  StrategyNum?: number;
  /** 绑定地址池个数 */
  AddressPoolNum?: number;
  /** 绑定监控器数量 */
  MonitorNum?: number;
  /** 地址池id */
  PoolId?: number;
  /** 地址池名称 */
  PoolName?: string;
  /** 实例创建时间 */
  CreatedOn?: string;
  /** 实例更新时间 */
  UpdatedOn?: string;
}

/** 实例配置详情 */
declare interface InstanceConfig {
  /** 实例名称 */
  InstanceName: string;
  /** 业务域名 */
  Domain: string;
  /** CUSTOM: 自定义接入域名，SYSTEM: 系统接入域名 */
  AccessType: string;
  /** 备注 */
  Remark: string;
  /** 全局记录过期时间 */
  GlobalTtl: number;
  /** 接入主域名 */
  AccessDomain?: string;
  /** 接入子域名 */
  AccessSubDomain?: string;
}

/** 返回实例 */
declare interface InstanceDetail {
  /** 实例id */
  InstanceId?: string;
  /** 实例名 */
  InstanceName?: string;
  /** 业务域名 */
  Domain?: string;
  /** Cname域名接入方式CUSTOM: 自定义接入域名SYSTEM: 系统接入域名 */
  AccessType?: string;
  /** 接入子域名 */
  AccessSubDomain?: string;
  /** 接入域名 */
  AccessDomain?: string;
  /** 解析生效时间 */
  GlobalTtl?: number;
  /** 套餐类型FREE: 免费版STANDARD：标准版ULTIMATE：旗舰版 */
  PackageType?: string;
  /** 实例运行状态NORMAL: 健康FAULTY: 有风险DOWN: 宕机UNKNOWN: 未知 */
  WorkingStatus?: string;
  /** 实例状态，ENABLED: 正常；DISABLED: 禁用 */
  Status?: string;
  /** cname是否接入：true已接入；false未接入 */
  IsCnameConfigured?: boolean;
  /** 备注 */
  Remark?: string;
  /** 策略数量 */
  StrategyNum?: number;
  /** 绑定地址池个数 */
  AddressPoolNum?: number;
  /** 绑定监控器数量 */
  MonitorNum?: number;
  /** 实例绑定套餐资源id */
  ResourceId?: string;
  /** 订阅事件列表 */
  NotifyEventSet?: string[];
  /** 实例创建时间 */
  CreatedOn?: string;
  /** 实例更新时间 */
  UpdatedOn?: string;
}

/** 实例相关信息 */
declare interface InstanceInfo {
  /** 实例id */
  InstanceId?: string;
  /** 实例名称 */
  InstanceName?: string;
}

/** 实例套餐 */
declare interface InstancePackage {
  /** 实例套餐资源id */
  ResourceId?: string | null;
  /** 实例id */
  InstanceId?: string;
  /** 实例名 */
  InstanceName?: string;
  /** 套餐类型FREE: 免费版STANDARD：标准版ULTIMATE：旗舰版 */
  PackageType?: string;
  /** 套餐过期时间 */
  CurrentDeadline?: string;
  /** 套餐创建时间 */
  CreateTime?: string;
  /** 是否过期0否1是 */
  IsExpire?: number;
  /** 实例状态ENABLED: 正常DISABLED: 禁用 */
  Status?: string;
  /** 是否自动续费0不1是 */
  AutoRenewFlag?: number;
  /** 备注 */
  Remark?: string;
  /** 计费项 */
  CostItemList?: CostItem[];
  /** 最小检查间隔时间s */
  MinCheckInterval?: number;
  /** 最小TTL s */
  MinGlobalTtl?: number;
  /** 流量策略类型：ALL返回全部，WEIGHT权重 */
  TrafficStrategy?: string[];
  /** 策略类型：LOCATION按地理位置调度，DELAY按延迟调度 */
  ScheduleStrategy?: string[];
}

/** 主力地址池 */
declare interface MainAddressPool {
  /** 集合中的地址池id与权重，数组 */
  AddressPools: MainPoolWeight[] | null;
  /** 地址池集合id */
  MainAddressPoolId?: number | null;
  /** 切换阀值，不能大于主力集合内地址总数 */
  MinSurviveNum?: number | null;
  /** 切换策略:ALL解析所有地址；WEIGHT：负载均衡。当为ALL时，解析地址的权重值为1；当为WEIGHT时；权重为地址池权重*地址权重 */
  TrafficStrategy?: string | null;
}

/** 主力地址池id与权重 */
declare interface MainPoolWeight {
  /** 地址池id */
  PoolId: number;
  /** 权重 */
  Weight?: number | null;
}

/** 监控器详情 */
declare interface MonitorDetail {
  /** 探测规则id */
  MonitorId?: number;
  /** 监控器名称 */
  MonitorName?: string;
  /** 所属用户 */
  Uin?: string;
  /** 监控节点id组 */
  DetectorGroupIds?: number[];
  /** 探测协议 PING TCP HTTP HTTPS */
  CheckProtocol?: string;
  /** 探测周期 */
  CheckInterval?: number;
  /** 发包数量 */
  PingNum?: number;
  /** tcp端口 */
  TcpPort?: number;
  /** 探测 host */
  Host?: string;
  /** 探测路径 */
  Path?: string;
  /** 返回值阈值 */
  ReturnCodeThreshold?: number;
  /** 是否开启3xx重定向跟随 ENABLED DISABLED */
  EnableRedirect?: string;
  /** 是否启用 sniENABLED DISABLED */
  EnableSni?: string;
  /** 丢包率上限 */
  PacketLossRate?: number;
  /** 探测超时 */
  Timeout?: number;
  /** 失败次数 */
  FailTimes?: number;
  /** 失败率上限100 */
  FailRate?: number;
  /** 创建时间 */
  CreatedOn?: string;
  /** 更新时间 */
  UpdatedOn?: string;
  /** 监控节点类型AUTO INTERNAL OVERSEAS IPV6 ALL */
  DetectorStyle?: string;
  /** 探测次数 */
  DetectNum?: number;
  /** 持续周期数 */
  ContinuePeriod?: number;
}

/** 配额 */
declare interface Quota {
  /** 探测任务配额 */
  TaskQuota?: number | null;
  /** 地址池配额 */
  PoolQuota?: number | null;
  /** 地址配额 */
  AddressQuota?: number | null;
  /** 探点资源数 */
  MonitorQuota?: number | null;
  /** 消息资源数 */
  MessageQuota?: number | null;
  /** 已使用探测任务数 */
  UsedTaskQuota?: number | null;
  /** 已使用体验实例数 */
  UsedFreeInstanceNum?: number | null;
  /** 已使用付费实例 */
  UsedBillInstanceNum?: number | null;
  /** 体验套餐总数 */
  FreePackageNum?: number | null;
  /** 已使用付费套餐数 */
  UsedBillPackageNum?: number | null;
  /** 付费套餐总数 */
  BillPackageNum?: number | null;
}

/** 查询时过滤条件。 */
declare interface ResourceFilter {
  /** 过滤字段名，支持的列表如下：- type：主资源类型，CDN。- instanceId：IGTM实例ID。此为必传参数，未传将导致接口查询失败。 */
  Name: string;
  /** 过滤字段值。 */
  Value: string[];
  /** 是否启用模糊查询，仅支持过滤字段名为domain。模糊查询时，Value长度最大为1，否则Value长度最大为5。(预留字段，暂未使用) */
  Fuzzy?: boolean;
}

/** 解析线路 */
declare interface Source {
  /** 解析请求来源线路id */
  DnsLineId: number;
  /** 解析请求来源线路名 */
  Name?: string | null;
}

/** 地址池 */
declare interface Strategy {
  /** 实例id */
  InstanceId: string | null;
  /** 策略名 */
  Name: string | null;
  /** 地址来源 */
  Source: Source[] | null;
  /** 策略id */
  StrategyId?: number | null;
  /** 健康状态：ok健康、warn风险、down故障 */
  Status?: string | null;
  /** 生效的主力池id，null则为未知 */
  ActivateMainPoolId?: number | null;
  /** 当前生效地址池所在级数，为0则代表兜底生效，null则为未知 */
  ActivateLevel?: number | null;
  /** 当前生效地址池集合类型：main主力；fallback兜底 */
  ActivePoolType?: string | null;
  /** 当前生效地址池流量策略：all解析所有；weight负载均衡 */
  ActiveTrafficStrategy?: string | null;
  /** 监控器数量 */
  MonitorNum?: number | null;
  /** 是否开启：ENABLED开启；DISABLED关闭 */
  IsEnabled?: string | null;
  /** 是否保留线路：enabled保留，disabled不保留，只保留默认线路 */
  KeepDomainRecords?: string | null;
  /** 调度模式：AUTO默认；PAUSE仅暂停不切换 */
  SwitchPoolType?: string | null;
  /** 创建时间 */
  CreatedOn?: string | null;
  /** 更新时间 */
  UpdatedOn?: string | null;
}

/** 策略详情 */
declare interface StrategyDetail {
  /** 实例id */
  InstanceId: string | null;
  /** 策略id */
  StrategyId: number | null;
  /** 策略名 */
  Name: string | null;
  /** 线路 */
  Source: Source[] | null;
  /** 主力地址池集合 */
  MainAddressPoolSet: MainAddressPool[] | null;
  /** 兜底地址池id */
  FallbackAddressPoolSet: MainAddressPool[] | null;
  /** 是否保留线路：enabled保留，disabled不保留，只保留默认线路 */
  KeepDomainRecords?: string | null;
  /** 生效主力地址池id */
  ActivateMainPoolId?: number | null;
  /** 创建时间 */
  CreatedOn?: string | null;
  /** 更新时间 */
  UpdatedOn?: string | null;
  /** 调度模式：AUTO默认；PAUSE仅暂停不切换 */
  SwitchPoolType?: string | null;
}

declare interface CreateAddressPoolRequest {
  /** 地址池名称，不允许重复 */
  PoolName: string;
  /** 流量策略：WEIGHT负载均衡，ALL解析所有健康地址 */
  TrafficStrategy: string;
  /** 地址列表 */
  AddressSet: Address[];
  /** 监控器id */
  MonitorId?: number;
}

declare interface CreateAddressPoolResponse {
  /** 地址池id */
  AddressPoolId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateInstanceRequest {
  /** 业务域名 */
  Domain: string;
  /** CUSTOM: 自定义接入域名SYSTEM: 系统接入域名 */
  AccessType: string;
  /** 解析生效时间 */
  GlobalTtl: number;
  /** 套餐类型FREE: 免费版STANDARD：标准版ULTIMATE：旗舰版 */
  PackageType: string;
  /** 实例名称 */
  InstanceName?: string;
  /** 接入主域名 */
  AccessDomain?: string;
  /** 接入子域名 */
  AccessSubDomain?: string;
  /** 备注 */
  Remark?: string;
  /** 套餐资源id，必填 */
  ResourceId?: string;
}

declare interface CreateInstanceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateMonitorRequest {
  /** 监控器名称 */
  MonitorName: string;
  /** 探测协议，可选值 PING TCP HTTP HTTPS */
  CheckProtocol: string;
  /** 检查间隔（秒），可选值有15 60 120 300 */
  CheckInterval: number;
  /** 超时时间，单位秒，可选值为2 3 5 10 */
  Timeout: number;
  /** 重试次数，可选值为 0，1，2 */
  FailTimes: number;
  /** 失败比例，取值为 20 30 40 50 60 70 80 100，默认值50 */
  FailRate: number;
  /** 监控节点类型，可选值有AUTO INTERNAL OVERSEAS IPV6 ALL */
  DetectorStyle: string;
  /** 探测器组id列表以,分隔 */
  DetectorGroupIds: number[];
  /** PING 包数目，当CheckProtocol=ping时必填，可选值有20 50 100 */
  PingNum?: number;
  /** 检查端口，可选值在1-65535之间 */
  TcpPort?: number;
  /** Host 设置，默认为业务域名 */
  Host?: string;
  /** URL 路径，默认为“/” */
  Path?: string;
  /** 返回错误码阈值, 可选值为 400 和 500, 默认值500 */
  ReturnCodeThreshold?: number;
  /** 跟随 3XX 重定向 ，不开启为 DISABLED， 开启为 ENABLED，默认不开启 */
  EnableRedirect?: string;
  /** 启用 SNI，不开启为 DISABLED， 开启为 ENABLED，默认不开启 */
  EnableSni?: string;
  /** 丢包率告警阈值，当CheckProtocol=ping时必填取值为10 30 50 80 90 100 */
  PacketLossRate?: number;
  /** 持续周期数，可选值1-5 */
  ContinuePeriod?: number;
}

declare interface CreateMonitorResponse {
  /** 监控器id */
  MonitorId?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateStrategyRequest {
  /** 实例id */
  InstanceId: string;
  /** 策略名称，不允许重复 */
  StrategyName: string;
  /** 解析线路 */
  Source: Source[];
  /** 主力地址池集合，最多允许配置四级 */
  MainAddressPoolSet: MainAddressPool[];
  /** 兜底地址池集合，只允许配置一级，且地址池数量为1 */
  FallbackAddressPoolSet: MainAddressPool[];
  /** 是否开启策略强制保留默认线路 disabled, enabled，默认不开启且只有一个策略能开启 */
  KeepDomainRecords?: string;
  /** 策略调度模式：AUTO默认切换；STOP仅暂停不切换 */
  SwitchPoolType?: string;
}

declare interface CreateStrategyResponse {
  /** 新增策略id */
  StrategyId?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteAddressPoolRequest {
  /** 地址池id */
  PoolId: number;
}

declare interface DeleteAddressPoolResponse {
  /** 是否成功 */
  Msg?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteMonitorRequest {
  /** 监控器id */
  MonitorId: number;
}

declare interface DeleteMonitorResponse {
  /** 成功返回 */
  Msg?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteStrategyRequest {
  /** 策略id */
  StrategyId: number;
  /** 实例id */
  InstanceId: string;
}

declare interface DeleteStrategyResponse {
  /** 是否成功 */
  Msg?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAddressLocationRequest {
  /** 地址数组 */
  Address: string[];
}

declare interface DescribeAddressLocationResponse {
  /** 所属地域 */
  AddressLocation?: AddressLocation[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAddressPoolDetailRequest {
  /** 地址池id */
  PoolId: number;
}

declare interface DescribeAddressPoolDetailResponse {
  /** 资源组详情描述 */
  AddressPool?: AddressPoolDetail | null;
  /** 资源组中的资源列表 */
  AddressSet?: Address[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAddressPoolListRequest {
  /** 告警过滤条件：PoolName：地址池名称；MonitorId：监控器id */
  Filters?: ResourceFilter[];
  /** 页数 */
  Offset?: number;
  /** 每页数 */
  Limit?: number;
}

declare interface DescribeAddressPoolListResponse {
  /** 资源组列表 */
  AddressPoolSet?: AddressPool[] | null;
  /** 总数 */
  TotalCount?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDetectPackageDetailRequest {
  /** 资源id */
  ResourceId: string;
}

declare interface DescribeDetectPackageDetailResponse {
  /** 资源id */
  ResourceId?: string;
  /** 资源类型 TASK 探测任务 */
  ResourceType?: string;
  /** 额度 */
  Quota?: number;
  /** 过期时间 */
  CurrentDeadline?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** 是否过期 */
  IsExpire?: number;
  /** 状态 ENABLED: 正常 ISOLATED: 隔离 DESTROYED：销毁 REFUNDED：已退款 */
  Status?: string;
  /** 是否自动续费0不1是 */
  AutoRenewFlag?: number;
  /** 备注 */
  Remark?: string;
  /** 计费项 */
  CostItemList?: CostItem[];
  /** 使用数量 */
  UsedNum?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDetectTaskPackageListRequest {
  /** 每页条数 */
  Limit?: number;
  /** 探测任务过滤条件：ResourceId 探测任务的资源id，PeriodStart 最小过期时间,PeriodEnd 最大过期时间 */
  Filters?: ResourceFilter[];
}

declare interface DescribeDetectTaskPackageListResponse {
  /** 总数 */
  TotalCount?: number;
  /** 探测任务套餐列表 */
  TaskPackageSet?: DetectTaskPackage[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDetectorsRequest {
}

declare interface DescribeDetectorsResponse {
  /** 探测器组列表 */
  DetectorGroupSet?: DetectorGroup[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDnsLineListRequest {
  /** 实例id */
  InstanceId: string;
}

declare interface DescribeDnsLineListResponse {
  /** 地址池列表 */
  DnsLineSet?: GroupLine[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstanceDetailRequest {
}

declare interface DescribeInstanceDetailResponse {
  /** 实例详情 */
  Instance?: InstanceDetail;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstanceListRequest {
  /** 分页偏移量 */
  Offset?: number;
  /** 分页数 */
  Limit?: number;
  /** Name: "实例名称" 模糊查询Domain: "域名" 模糊查询MonitorId: "监控器 id" PoolId: "地址池id", AccessDomain接入主域名 */
  Filters?: ResourceFilter[];
}

declare interface DescribeInstanceListResponse {
  /** 实例列表 */
  InstanceSet?: Instance[] | null;
  /** 列表总数 */
  TotalCount?: number | null;
  /** 是否支持系统域名接入：true支持；false不支持 */
  SystemAccessEnabled?: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstancePackageListRequest {
  /** 每页条数 */
  Limit?: number;
  /** InstanceId实例Id，InstanceName实例名称，ResourceId套餐Id，PackageType套餐类型 */
  Filters?: ResourceFilter[];
  /** 是否使用：0未使用1已使用 */
  IsUsed?: number;
}

declare interface DescribeInstancePackageListResponse {
  /** 总数 */
  TotalCount?: number;
  /** 实例套餐列表 */
  InstanceSet?: InstancePackage[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMonitorDetailRequest {
  /** 监控器id */
  MonitorId: number;
}

declare interface DescribeMonitorDetailResponse {
  /** 探测规则 */
  MonitorDetail?: MonitorDetail | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMonitorsRequest {
  /** 分页，偏移值 */
  Offset?: number;
  /** 分页，当前分页记录数 */
  Limit?: number;
  /** 是否查探测次数0否1是 */
  IsDetectNum?: number;
}

declare interface DescribeMonitorsResponse {
  /** 监控器列表 */
  MonitorDataSet?: MonitorDetail[] | null;
  /** 数量 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeQuotasRequest {
  /** 接入域名 */
  AccessDomain?: string;
}

declare interface DescribeQuotasResponse {
  /** 配额id */
  Quotas?: Quota | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeStrategyDetailRequest {
  /** 实例id */
  InstanceId: string;
  /** 策略 id */
  StrategyId: number;
}

declare interface DescribeStrategyDetailResponse {
  /** 策略详情 */
  StrategyDetail?: StrategyDetail;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeStrategyListRequest {
  /** 实例 id */
  InstanceId: string;
  /** 偏移量 */
  Offset?: number;
  /** 每页条数 */
  Limit?: number;
  /** 策略过滤条件：StrategyName：策略名称 */
  Filters?: ResourceFilter[];
}

declare interface DescribeStrategyListResponse {
  /** 策略列表 */
  StrategySet?: Strategy[] | null;
  /** 总数 */
  TotalCount?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAddressPoolRequest {
  /** 地址池id */
  PoolId: number;
  /** 地址池名称，不允许重复 */
  PoolName?: string;
  /** 流量策略: WEIGHT负载均衡，ALl解析全部 */
  TrafficStrategy?: string;
  /** 监控器id */
  MonitorId?: number;
  /** 地址列表 */
  AddressSet?: Address[];
}

declare interface ModifyAddressPoolResponse {
  /** 是否修改成功 */
  Msg?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyInstanceConfigRequest {
  /** 实例配置详情 */
  InstanceConfig?: InstanceConfig;
}

declare interface ModifyInstanceConfigResponse {
  /** 实例详情 */
  Instance?: InstanceDetail;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyMonitorRequest {
  /** 监控器id */
  MonitorId: number;
  /** 监控器名称 */
  MonitorName: string;
  /** 检查协议，可选值 PING TCP HTTP HTTPS */
  CheckProtocol: string;
  /** 检查间隔（秒），可选值 15 60 120 300 */
  CheckInterval: number;
  /** 超时时间，单位:秒，可选值 2 3 5 10 */
  Timeout: number;
  /** 重试次数，可选值为 0，1，2 */
  FailTimes: number;
  /** 失败比例，可选值为 20 30 40 50 60 70 80 100，默认值为50 */
  FailRate: number;
  /** 监控节点类型，可选值有AUTO INTERNAL OVERSEAS IPV6 ALL */
  DetectorStyle: string;
  /** 探测器组id列表 */
  DetectorGroupIds: number[];
  /** PING 包数目， 当CheckProtocol=ping时必填，可选值 20 50 100 */
  PingNum?: number;
  /** 检查端口，可选值为1-65535之间的整数 */
  TcpPort?: number;
  /** Host 设置，默认为业务域名 */
  Host?: string;
  /** URL 路径，默认为“/” */
  Path?: string;
  /** 返回错误码阈值, 可选值为 400 和 500, 默认值500 */
  ReturnCodeThreshold?: number;
  /** 跟随 3XX 重定向 ，不开启为 DISABLED， 开启为 ENABLED，默认不开启 */
  EnableRedirect?: string;
  /** 启用 SNI，不开启为 DISABLED， 开启为 ENABLED，默认不开启 */
  EnableSni?: string;
  /** 丢包率告警阈值，当CheckProtocol=ping时必填，取值在10 30 50 80 90 100 */
  PacketLossRate?: number;
  /** 持续周期数，可选值1-5 */
  ContinuePeriod?: number;
}

declare interface ModifyMonitorResponse {
  /** success 为修改成功 */
  Msg?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyStrategyRequest {
  /** 实例id */
  InstanceId: string;
  /** 策略id */
  StrategyId: number;
  /** 解析线路，需要全量传参 */
  Source: Source[];
  /** 主力地址池集合，需要全量传参 */
  MainAddressPoolSet: MainAddressPool[];
  /** 兜底地址池集合，需要全量传参 */
  FallbackAddressPoolSet: MainAddressPool[];
  /** 策略名称，不允许重复 */
  StrategyName?: string;
  /** 策略开启状态：ENABLED开启；DISABLED关闭 */
  IsEnabled?: string;
  /** 是否开启策略强制保留默认线路 disabled, enabled，默认不开启且只有一个策略能开启 */
  KeepDomainRecords?: string;
  /** 调度模式：AUTO默认；STOP仅暂停不切换 */
  SwitchPoolType?: string;
}

declare interface ModifyStrategyResponse {
  /** 是否成功 */
  Msg?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Igtm 智能全局流量管理} */
declare interface Igtm {
  (): Versions;
  /** 创建地址池 {@link CreateAddressPoolRequest} {@link CreateAddressPoolResponse} */
  CreateAddressPool(data: CreateAddressPoolRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAddressPoolResponse>;
  /** 创建实例 {@link CreateInstanceRequest} {@link CreateInstanceResponse} */
  CreateInstance(data: CreateInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateInstanceResponse>;
  /** 新增监控器 {@link CreateMonitorRequest} {@link CreateMonitorResponse} */
  CreateMonitor(data: CreateMonitorRequest, config?: AxiosRequestConfig): AxiosPromise<CreateMonitorResponse>;
  /** 新建策略 {@link CreateStrategyRequest} {@link CreateStrategyResponse} */
  CreateStrategy(data: CreateStrategyRequest, config?: AxiosRequestConfig): AxiosPromise<CreateStrategyResponse>;
  /** 删除地址池 {@link DeleteAddressPoolRequest} {@link DeleteAddressPoolResponse} */
  DeleteAddressPool(data: DeleteAddressPoolRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAddressPoolResponse>;
  /** 删除监控器 {@link DeleteMonitorRequest} {@link DeleteMonitorResponse} */
  DeleteMonitor(data: DeleteMonitorRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteMonitorResponse>;
  /** 删除策略 {@link DeleteStrategyRequest} {@link DeleteStrategyResponse} */
  DeleteStrategy(data: DeleteStrategyRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteStrategyResponse>;
  /** 获取地址所属地域 {@link DescribeAddressLocationRequest} {@link DescribeAddressLocationResponse} */
  DescribeAddressLocation(data: DescribeAddressLocationRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAddressLocationResponse>;
  /** 地址池详情 {@link DescribeAddressPoolDetailRequest} {@link DescribeAddressPoolDetailResponse} */
  DescribeAddressPoolDetail(data: DescribeAddressPoolDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAddressPoolDetailResponse>;
  /** 地址池列表 {@link DescribeAddressPoolListRequest} {@link DescribeAddressPoolListResponse} */
  DescribeAddressPoolList(data?: DescribeAddressPoolListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAddressPoolListResponse>;
  /** 探测任务套餐详情 {@link DescribeDetectPackageDetailRequest} {@link DescribeDetectPackageDetailResponse} */
  DescribeDetectPackageDetail(data: DescribeDetectPackageDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDetectPackageDetailResponse>;
  /** 获取探测任务套餐列表 {@link DescribeDetectTaskPackageListRequest} {@link DescribeDetectTaskPackageListResponse} */
  DescribeDetectTaskPackageList(data?: DescribeDetectTaskPackageListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDetectTaskPackageListResponse>;
  /** 获取探测节点列表 {@link DescribeDetectorsRequest} {@link DescribeDetectorsResponse} */
  DescribeDetectors(data?: DescribeDetectorsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDetectorsResponse>;
  /** 查询分组线路列表 {@link DescribeDnsLineListRequest} {@link DescribeDnsLineListResponse} */
  DescribeDnsLineList(data: DescribeDnsLineListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDnsLineListResponse>;
  /** 实例详情 {@link DescribeInstanceDetailRequest} {@link DescribeInstanceDetailResponse} */
  DescribeInstanceDetail(data?: DescribeInstanceDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceDetailResponse>;
  /** 获取实例列表 {@link DescribeInstanceListRequest} {@link DescribeInstanceListResponse} */
  DescribeInstanceList(data?: DescribeInstanceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceListResponse>;
  /** 获取实例套餐列表 {@link DescribeInstancePackageListRequest} {@link DescribeInstancePackageListResponse} */
  DescribeInstancePackageList(data?: DescribeInstancePackageListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstancePackageListResponse>;
  /** 查询监控器详情 {@link DescribeMonitorDetailRequest} {@link DescribeMonitorDetailResponse} */
  DescribeMonitorDetail(data: DescribeMonitorDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMonitorDetailResponse>;
  /** 获取所有监控器 {@link DescribeMonitorsRequest} {@link DescribeMonitorsResponse} */
  DescribeMonitors(data?: DescribeMonitorsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMonitorsResponse>;
  /** 配额查询 {@link DescribeQuotasRequest} {@link DescribeQuotasResponse} */
  DescribeQuotas(data?: DescribeQuotasRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeQuotasResponse>;
  /** 策略详情 {@link DescribeStrategyDetailRequest} {@link DescribeStrategyDetailResponse} */
  DescribeStrategyDetail(data: DescribeStrategyDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeStrategyDetailResponse>;
  /** 策略列表 {@link DescribeStrategyListRequest} {@link DescribeStrategyListResponse} */
  DescribeStrategyList(data: DescribeStrategyListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeStrategyListResponse>;
  /** 修改地址池 {@link ModifyAddressPoolRequest} {@link ModifyAddressPoolResponse} */
  ModifyAddressPool(data: ModifyAddressPoolRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAddressPoolResponse>;
  /** 修改实例配置 {@link ModifyInstanceConfigRequest} {@link ModifyInstanceConfigResponse} */
  ModifyInstanceConfig(data?: ModifyInstanceConfigRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyInstanceConfigResponse>;
  /** 修改监控器 {@link ModifyMonitorRequest} {@link ModifyMonitorResponse} */
  ModifyMonitor(data: ModifyMonitorRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyMonitorResponse>;
  /** 修改策略 {@link ModifyStrategyRequest} {@link ModifyStrategyResponse} */
  ModifyStrategy(data: ModifyStrategyRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyStrategyResponse>;
}

export declare type Versions = ["2023-10-24"];

export default Igtm;
