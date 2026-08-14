/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 资产列表数组 */
declare interface AssetsInfo {
  /** 创建时间 */
  AddTime: number;
  /** 资产 ID */
  Aid: number;
  /** 数据资产 IP */
  AssetsIp: string;
  /** 数据资产名称 */
  AssetsName: string;
  /** 数据资产端口 */
  AssetsPort: number;
  /** 数据资产类型 */
  AssetsType: string;
  /** 资产版本 */
  AssetsVersion: string;
  /** 是否动态 */
  AssetsAddType: number;
  /** 是否删除 */
  Status: number;
  /** 最后一次修改时间 */
  UpdateTime: number;
  /** 资产的vpc */
  VpcId: string;
  /** 地域 */
  RegionId: string;
  /** 审计权限 */
  Permission: number;
  /** 实例ID */
  InstanceId: string;
  /** 实例名称 */
  InstanceName: string;
  /** 用来区分自建资产是已通过cvm还是添加ip的方式 */
  AddType: number;
  /** 子网Id */
  AssetSubnetId: string;
  /** 是否已上传数据库私钥（0 否，1 是） */
  UploadPem: number;
  /** 资产状态栏 0:正常 1:已删除（目前仅对tencentDB有效） */
  AliveStatus: number;
  /** 开启agent(0:关闭;1:开启) */
  AgentOn: number;
  /** 开启agent(0:关闭;1:开启) */
  CasbOn: number;
  /** 只读组/集群ID */
  GroupId: string;
  /** PROXY_OFF: 未开启Casb代理;PROXY_ERROR:Casb代理接口返回异常;PROXY_BOUND:已绑定;PROXY_UNBOUND:未绑定;UNPAID:未购买;UNSUPPORTED:类型不支持;METADATA_NOT_FOUND:元数据不存在;QUOTA_EXCEEDED:Casb额度不足 */
  Available: string;
  /** cdbOn */
  CdbOn: number;
  /** 平台位数 32位 64位 */
  DbPlatform: string;
  /** 编码 */
  DbCharset: string;
  /** 操作系统 */
  OsPolicy: string;
  /** 是否开启双向审计 */
  BidirectionOn: number;
  /** 最大返回行数 */
  BidirectionMaxLine: number;
  /** 最大返回大小 */
  BidirectionMaxStorage: number;
  /** 是否允许开通双向审计(1.允许；0不允许) */
  BidirectionAllow: number;
  /** 启双向审计的日志投递(1.开启;0.关闭) */
  BidirectionDelivery: number;
  /** 只读状态 */
  RoStatus: string;
  /** 当前资产是否开启了对当前Agent的采集策略 */
  AgentBound: boolean;
  /** 错误信息 */
  CdbErrorMsg: string;
  /** 资产 DSGC 绑定信息 */
  DsgcBindingInfo: DsgcBindingInfo;
  /** 绑定的规则Ids */
  BindingRules?: IdWithName[];
  /** 绑定的模型Ids */
  BindingModels?: IdWithName[];
  /** 所属组名 */
  GroupName?: string;
  /** 资产组Id */
  AssetGroupId?: number;
  /** 是否是新云原生审计流程 */
  IsNewCloudAudit?: boolean;
  /** 1取值范围：[0, 1] */
  TrafficMirrorOn?: number;
  /** 流量镜像审计范围枚举值：ALL： 全地域REGION： 资产所在地域VPC： 资产所在VPC默认值：REGION */
  AuditScope?: string;
  /** 实例集群ID */
  InstanceGroupId?: string;
  /** 该资产所在的资产组 */
  AssetGroups?: IdWithName[];
}

/** 数据安全产品实例信息 */
declare interface CdsAuditInstance {
  /** 实例ID */
  InstanceId?: string;
  /** 用户AppId */
  AppId?: string;
  /** 用户Uin */
  Uin?: string;
  /** 项目ID */
  ProjectId?: number;
  /** 续费标识 */
  RenewFlag?: number;
  /** 所属地域 */
  Region?: string;
  /** 付费模式（数据安全审计只支持预付费：1） */
  PayMode?: number;
  /** 实例状态： 0，未生效；1：正常运行； 2：被隔离； 3，已过期 */
  Status?: number;
  /** 实例被隔离时间，格式：yyyy-mm-dd HH:ii:ss */
  IsolatedTimestamp?: string;
  /** 实例创建时间，格式： yyyy-mm-dd HH:ii:ss */
  CreateTime?: string;
  /** 实例过期时间，格式：yyyy-mm-dd HH:ii:ss */
  ExpireTime?: string;
  /** 实例名称 */
  InstanceName?: string;
  /** 实例公网IP */
  PublicIp?: string;
  /** 实例私网IP */
  PrivateIp?: string;
  /** 实例类型（版本） */
  InstanceType?: string;
  /** 实例域名 */
  Pdomain?: string;
}

/** 数据安全审计产品规格信息 */
declare interface DbauditTypesInfo {
  /** 规格描述 */
  InstanceVersionName?: string;
  /** 规格名称 */
  InstanceVersionKey?: string;
  /** 最大吞吐量 */
  Qps?: number;
  /** 最大实例数 */
  MaxInstances?: number;
  /** 入库速率（每小时） */
  InsertSpeed?: number;
  /** 最大在线存储量，单位：条 */
  OnlineStorageCapacity?: number;
  /** 最大归档存储量，单位：条 */
  ArchivingStorageCapacity?: number;
}

/** 资产 DSGC 绑定信息 */
declare interface DsgcBindingInfo {
  /** dspa实例id */
  DspaId: string;
  /** dspa绑定模板/合规组 id ComplianceGroupId */
  DspaCgId: number;
  /** dspa绑定模板/合规组名称 */
  DspaCgName: string;
  /** dspa实例状态 0 正常 1 隔离 2 销毁 */
  DspaStatus: number;
  /** 模板状态 0: 正常 1: 已删除 */
  DspaCgStatus: number;
}

/** IdWithName */
declare interface IdWithName {
  /** id */
  Id?: number;
  /** 名称 */
  Name?: string;
}

/** Name and String Value */
declare interface NameValueString {
  /** 名称 */
  Name: string;
  /** 值 */
  Value: string;
}

/** 数盾地域信息 */
declare interface RegionInfo {
  /** 地域ID */
  RegionId?: number;
  /** 地域名称 */
  Region?: string;
  /** 地域描述 */
  RegionName?: string;
  /** 地域可用状态 */
  RegionState?: number;
}

/** 任务对象 */
declare interface ReportMission {
  /** 报表任务id */
  Id?: number;
  /** 任务名称 */
  TplName?: string;
  /** 报表类型 1:单次报表 2:周期报表 */
  ReportType?: number;
  /** 报告说明 */
  Remark?: string;
  /** 报表模板 1:综合分析报告 2:等保合规报告 */
  TemplateId?: number;
  /** 包含资产 */
  AssetsList?: AssetsInfo[];
  /** 下次启动时间 */
  NextStartTime?: number;
  /** 任务状态 1:生成中 2:待生成3:已生成4:生成失败5:已暂停 */
  MissionStatus?: number;
  /** 任务状态说明 仅生成中和生成失败有效 */
  MissionStatusMessage?: string;
  /** 已生成报表数 */
  ReportCount?: number;
  /** 任务起停 1:关闭 2:开启 仅周期报表有效 */
  MissionStart?: number;
  /** 统计周期 1:24小时 7:近一周 30:近30天 90:近90天 180: */
  CntDay?: number;
  /** 重复周期 1:每天 2:每周 3:每月 */
  CntCycle?: number;
  /** 执行日期 重复周期为天：无意义 周：星期几 1-7 月每月 */
  CntTime?: number;
  /** 执行时间 格式15:04 到分钟 */
  CntDate?: string;
  /** 创建者 0:内置 其余存放用户(uin) */
  Receivers?: string;
  /** Notification int 1关闭 2开启 不变更为0 */
  Notification?: number;
}

/** 报表列表字段数组 */
declare interface Reports {
  /** 生成时间 */
  AddTime?: number;
  /** 结束时间 */
  EndTime?: number;
  /** 报告 ID */
  Id?: number;
  /** 审计 ID */
  InstanceId?: number;
  /** 是否已删除 */
  IsDelete?: number;
  /** 发送目标 */
  Receivers?: string;
  /** 报告说明 */
  Remark?: string;
  /** 报告文件 */
  ReportFile?: string;
  /** 状态 */
  ReportStatus?: number;
  /** 状态 */
  ReportTmpStatus?: number;
  /** 报告类型 */
  ReportType?: number;
  /** 发送结果 */
  SendResult?: string;
  /** 发送类型 */
  SendType?: string;
  /** 开始时间 */
  StartTime?: number;
  /** 报告名称 */
  Title?: string;
  /** 报表模板 */
  TemplateId?: number;
  /** 包含资产 */
  AssetsList?: AssetsInfo[];
  /** 时间范围 1:24小时 7:近一周 30:近30天 90:近90天 180:近180天 不变更为0 */
  CntDay?: number;
}

declare interface CreateReportPdfRequest {
  /** 报表 Id */
  Id: number;
}

declare interface CreateReportPdfResponse {
  /** 下载地址 */
  Url?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateTimerReportRequest {
  /** 任务名称 不变更为"" */
  TplName?: string;
  /** 执行日期 重复周期为天：无意义周：星期几1-7月每月几号 1-31 */
  CntTime?: number;
  /** 重复周期 */
  CntCycle?: number;
  /** 发送目标 */
  Receivers?: string;
  /** 时间范围 1:24小时 7:近一周 30:近30天 90:近90天 180:近180天 不变更为0 */
  CntDay?: number;
  /** 执行时间 格式15:04 到分钟 */
  CntDate?: string;
  /** 报告说明 */
  Remark?: string;
  /** 模版Id */
  TemplateId?: number;
  /** 报表类型 */
  ReportType?: number;
  /** 关联的资产数组 */
  AssetsId?: number[];
  /** 报表通知 1关闭 2开启 不变更为0 */
  Notification?: number;
  /** 任务起停 1:关闭 2:开启 单次报表默认为2 */
  MissionStart?: number;
}

declare interface CreateTimerReportResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAssetsListRequest {
  /** 限制数目 */
  Limit?: number;
  /** 偏移量 */
  Offset?: number;
  /** 实例Id/实例名称/资产名称 */
  SearchValues?: NameValueString[];
  /** 数据资产类型 */
  AssetsType?: string;
  /** 查询的资产类型（1:cdb、2:cvm、3:others） */
  AssetsAddType?: number;
  /** 地域 */
  RegionId?: string;
  /** 审计权限 */
  Permission?: number;
  /** 状态 */
  AliveStatus?: number;
  /** 1.代理开启 0.代理关闭 -1.全查 */
  CasbOn?: number;
  /** 1.Agent开启 0.Agent关闭 -1.全查 */
  AgentOn?: number;
  /** 0.关闭，1.开启，2.关闭中，3.开启中 -1.全查 */
  CdbOn?: number;
  /** 扩展分类，如sensitive，指定查询支持敏感数据识别的资产 */
  ExtendCategory?: string;
  /** 资产组Id（Id=0 暂未分组；id>0 组Id） */
  GroupIds?: number[];
  /** 资产Id */
  Aids?: number[];
  /** 查询绑定状态（1:查询规则绑定数量；2:查询模型绑定数量） */
  BindingState?: number;
  /** 网卡是否开启流量审计取值范围：[-1, 1] */
  TrafficMirrorOn?: number;
}

declare interface DescribeAssetsListResponse {
  /** 总数目 */
  TotalCount?: number;
  /** 数据列表 */
  List?: AssetsInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDbauditInstanceTypeRequest {
}

declare interface DescribeDbauditInstanceTypeResponse {
  /** 数据安全审计产品规格信息列表 */
  DbauditTypesSet?: DbauditTypesInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDbauditInstancesRequest {
  /** 查询条件地域 */
  SearchRegion?: string;
  /** 限制数目，默认10， 最大50 */
  Limit?: number;
  /** 偏移量，默认1 */
  Offset?: number;
}

declare interface DescribeDbauditInstancesResponse {
  /** 总实例数 */
  TotalCount?: number;
  /** 数据安全审计实例信息列表 */
  CdsAuditInstanceSet?: CdsAuditInstance[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDbauditUsedRegionsRequest {
}

declare interface DescribeDbauditUsedRegionsResponse {
  /** 可售卖地域信息列表 */
  RegionSet?: RegionInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeReportListRequest {
  /** 限制数目 */
  Limit?: number;
  /** 偏移量 */
  Offset?: number;
  /** 报告名称 */
  Name?: string;
  /** 开始时间 */
  StartTime?: number;
  /** 结束时间 */
  EndTime?: number;
  /** 报告类型 */
  ReportType?: number;
  /** 报告状态 */
  ReportStatus?: number;
  /** 报表模版id */
  TemplateId?: number;
  /** 需要排序的字段 */
  Field?: string;
  /** 排序顺序 asc desc */
  Sort?: string;
  /** 时间范围 1:24小时 7:近一周 30:近30天 90:近90天 180:近180天 不变更为0 */
  CntDay?: number;
}

declare interface DescribeReportListResponse {
  /** 总数目 */
  TotalCount?: number;
  /** 数据列表 */
  List?: Reports[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeReportMissionListRequest {
  /** 报表名 可模糊查询 */
  TplName?: string;
  /** 报表类型 1:单次报表 2:周期报表 0全查 */
  ReportType?: number;
  /** 报表模板 1:综合分析报告 2:等保合规报告 0全查 */
  TemplateId?: number;
  /** 任务状态0全查 1:生成中 2:待生成 3:已生成 4:生成失败 5:已暂停 */
  MissionStatus?: number;
  /** 排序字段 支持“NextStartTime” 与 “MissionStatus” */
  Field?: string;
  /** ‘desc' | 'asc' */
  Sort?: string;
  /** 限制条数 */
  Limit?: number;
  /** 偏移量 */
  Offset?: number;
}

declare interface DescribeReportMissionListResponse {
  /** 总数 */
  TotalCount?: number;
  /** 报表列表 */
  List?: ReportMission[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface InquiryPriceDbauditInstanceRequest {
  /** 实例规格，取值范围： cdsaudit，cdsaudit_adv， cdsaudit_ent 分别为合规版，高级版，企业版 */
  InstanceVersion: string;
  /** 询价类型： renew，续费；newbuy，新购 */
  InquiryType: string;
  /** 购买实例的时长。取值范围：1（y/m），2（y/m）,，3（y/m），4（m）， 5（m），6（m）， 7（m），8（m），9（m）， 10（m） */
  TimeSpan: number;
  /** 购买时长单位，y：年；m：月 */
  TimeUnit: string;
  /** 实例所在地域 */
  ServiceRegion: string;
}

declare interface InquiryPriceDbauditInstanceResponse {
  /** 总价，单位：元 */
  TotalPrice?: number;
  /** 真实价钱，预支费用的折扣价，单位：元 */
  RealTotalCost?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDbauditInstancesRenewFlagRequest {
  /** 实例ID */
  InstanceId: string;
  /** 0，表示默认状态(用户未设置，即初始状态)；1，表示自动续费；2，表示明确不自动续费 */
  AutoRenewFlag: number;
}

declare interface ModifyDbauditInstancesRenewFlagResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Cds T-Sec-数据安全审计（DSA）} */
declare interface Cds {
  (): Versions;
  /** 下载报表PDF {@link CreateReportPdfRequest} {@link CreateReportPdfResponse} */
  CreateReportPdf(data: CreateReportPdfRequest, config?: AxiosRequestConfig): AxiosPromise<CreateReportPdfResponse>;
  /** 新建报表任务 {@link CreateTimerReportRequest} {@link CreateTimerReportResponse} */
  CreateTimerReport(data?: CreateTimerReportRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTimerReportResponse>;
  /** 查询资产列表 {@link DescribeAssetsListRequest} {@link DescribeAssetsListResponse} */
  DescribeAssetsList(data?: DescribeAssetsListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetsListResponse>;
  /** 获取产品规格信息列表 {@link DescribeDbauditInstanceTypeRequest} {@link DescribeDbauditInstanceTypeResponse} */
  DescribeDbauditInstanceType(data?: DescribeDbauditInstanceTypeRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDbauditInstanceTypeResponse>;
  /** 获取数据安全审计实例列表 {@link DescribeDbauditInstancesRequest} {@link DescribeDbauditInstancesResponse} */
  DescribeDbauditInstances(data?: DescribeDbauditInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDbauditInstancesResponse>;
  /** 查询可售卖地域列表 {@link DescribeDbauditUsedRegionsRequest} {@link DescribeDbauditUsedRegionsResponse} */
  DescribeDbauditUsedRegions(data?: DescribeDbauditUsedRegionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDbauditUsedRegionsResponse>;
  /** 查询报表列表 {@link DescribeReportListRequest} {@link DescribeReportListResponse} */
  DescribeReportList(data?: DescribeReportListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeReportListResponse>;
  /** 查询报表任务列表 {@link DescribeReportMissionListRequest} {@link DescribeReportMissionListResponse} */
  DescribeReportMissionList(data?: DescribeReportMissionListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeReportMissionListResponse>;
  /** 数据安全审计产品实例询价 {@link InquiryPriceDbauditInstanceRequest} {@link InquiryPriceDbauditInstanceResponse} */
  InquiryPriceDbauditInstance(data: InquiryPriceDbauditInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<InquiryPriceDbauditInstanceResponse>;
  /** 修改实例续费标识 {@link ModifyDbauditInstancesRenewFlagRequest} {@link ModifyDbauditInstancesRenewFlagResponse} */
  ModifyDbauditInstancesRenewFlag(data: ModifyDbauditInstancesRenewFlagRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDbauditInstancesRenewFlagResponse>;
}

export declare type Versions = ["2018-04-20"];

export default Cds;
