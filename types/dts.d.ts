/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 抽样检验时的抽样参数 */
declare interface ConsistencyParams {
  /** 数据内容检测参数。表中选出用来数据对比的行，占表的总行数的百分比。取值范围是整数[1-100] */
  SelectRowsPerTable: number;
  /** 数据内容检测参数。迁移库表中，要进行数据内容检测的表，占所有表的百分比。取值范围是整数[1-100] */
  TablesSelectAll: number;
  /** 数据数量检测，检测表行数是否一致。迁移库表中，要进行数据数量检测的表，占所有表的百分比。取值范围是整数[1-100] */
  TablesSelectCount: number;
}

/** 目的实例信息，具体内容跟迁移任务类型相关 */
declare interface DstInfo {
  /** 目标实例地域，如ap-guangzhou */
  Region: string;
  /** 目标实例ID，如cdb-jd92ijd8 */
  InstanceId?: string;
  /** 目标实例vip。已废弃，无需填写 */
  Ip?: string;
  /** 目标实例vport。已废弃，无需填写 */
  Port?: number;
  /** 目前只对MySQL有效。当为整实例迁移时，1-只读，0-可读写。 */
  ReadOnly?: number;
  /** 目标数据库账号 */
  User?: string;
  /** 目标数据库密码 */
  Password?: string;
}

/** 迁移任务错误信息及提示 */
declare interface ErrorInfo {
  /** 具体的报错日志, 包含错误码和错误信息 */
  ErrorLog: string;
  /** 报错对应的帮助文档Ur */
  HelpDoc: string;
}

/** 描述详细迁移过程 */
declare interface MigrateDetailInfo {
  /** 总步骤数 */
  StepAll: number;
  /** 当前步骤 */
  StepNow: number;
  /** 总进度,如："10" */
  Progress: string;
  /** 当前步骤进度,如:"1" */
  CurrentStepProgress: string;
  /** 主从差距，MB；在增量同步阶段有效，目前支持产品为：redis和mysql */
  MasterSlaveDistance: number;
  /** 主从差距，秒；在增量同步阶段有效，目前支持产品为：mysql */
  SecondsBehindMaster: number;
  /** 步骤信息 */
  StepInfo: MigrateStepDetailInfo[];
}

/** 迁移任务详情 */
declare interface MigrateJobInfo {
  /** 数据迁移任务ID */
  JobId: string;
  /** 数据迁移任务名称 */
  JobName: string;
  /** 迁移任务配置选项 */
  MigrateOption: MigrateOption;
  /** 源实例数据库类型:mysql，redis，mongodb，postgresql，mariadb，percona */
  SrcDatabaseType: string;
  /** 源实例接入类型，值包括：extranet(外网),cvm(cvm自建实例),dcg(专线接入的实例),vpncloud(云vpn接入的实例),cdb(腾讯云数据库实例),ccn(云联网实例) */
  SrcAccessType: string;
  /** 源实例信息，具体内容跟迁移任务类型相关 */
  SrcInfo: SrcInfo;
  /** 目标实例数据库类型:mysql，redis，mongodb，postgresql，mariadb，percona */
  DstDatabaseType: string;
  /** 目标实例接入类型，目前支持：cdb(腾讯云数据库实例) */
  DstAccessType: string;
  /** 目标实例信息 */
  DstInfo: DstInfo;
  /** 需要迁移的源数据库表信息，如果需要迁移的是整个实例，该字段为[] */
  DatabaseInfo: string;
  /** 任务创建(提交)时间 */
  CreateTime: string;
  /** 任务开始执行时间 */
  StartTime: string;
  /** 任务执行结束时间 */
  EndTime: string;
  /** 任务状态,取值为：1-创建中(Creating),3-校验中(Checking)4-校验通过(CheckPass),5-校验不通过（CheckNotPass）,7-任务运行(Running),8-准备完成（ReadyComplete）,9-任务成功（Success）,10-任务失败（Failed）,11-撤销中（Stopping）,12-完成中（Completing） */
  Status: number;
  /** 任务详情 */
  Detail: MigrateDetailInfo;
  /** 任务错误信息提示，当任务发生错误时，不为null或者空值 */
  ErrorInfo: ErrorInfo[];
  /** 标签 */
  Tags: TagItem[] | null;
  /** 源实例为集群时且接入为非cdb时源实例信息 */
  SrcInfoMulti: SrcInfo[] | null;
}

/** 迁移任务配置选项 */
declare interface MigrateOption {
  /** 任务运行模式，值包括：1-立即执行，2-定时执行 */
  RunMode: number;
  /** 期望执行时间，当runMode=2时，该字段必填，时间格式：yyyy-mm-dd hh:mm:ss */
  ExpectTime?: string;
  /** 数据迁移类型，值包括：1-结构迁移,2-全量迁移,3-全量+增量迁移 */
  MigrateType?: number;
  /** 迁移对象，1-整个实例，2-指定库表 */
  MigrateObject?: number;
  /** 抽样数据一致性检测参数，1-未配置,2-全量检测,3-抽样检测, 4-仅校验不一致表,5-不检测 */
  ConsistencyType?: number;
  /** 是否用源库Root账户覆盖目标库，值包括：0-不覆盖，1-覆盖，选择库表或者结构迁移时应该为0 */
  IsOverrideRoot?: number;
  /** 不同数据库用到的额外参数.以JSON格式描述. Redis可定义如下的参数: { "ClientOutputBufferHardLimit":512, 从机缓冲区的硬性容量限制(MB) "ClientOutputBufferSoftLimit":512, 从机缓冲区的软性容量限制(MB) "ClientOutputBufferPersistTime":60, 从机缓冲区的软性限制持续时间(秒) "ReplBacklogSize":512, 环形缓冲区容量限制(MB) "ReplTimeout":120， 复制超时时间(秒) }MongoDB可定义如下的参数: {	'SrcAuthDatabase':'admin', 'SrcAuthFlag': "1", 'SrcAuthMechanism':"SCRAM-SHA-1"}MySQL暂不支持额外参数设置。 */
  ExternParams?: string;
  /** 仅用于“抽样数据一致性检测”，ConsistencyType配置为抽样检测时，必选 */
  ConsistencyParams?: ConsistencyParams;
}

/** 迁移中的步骤信息 */
declare interface MigrateStepDetailInfo {
  /** 步骤序列 */
  StepNo: number;
  /** 步骤展现名称 */
  StepName: string;
  /** 步骤英文标识 */
  StepId: string;
  /** 步骤状态:0-默认值,1-成功,2-失败,3-执行中,4-未执行 */
  Status: number;
  /** 当前步骤开始的时间，格式为"yyyy-mm-dd hh:mm:ss"，该字段不存在或者为空是无意义 */
  StartTime: string | null;
}

/** 源实例信息 */
declare interface SrcInfo {
  /** 阿里云AccessKey。源库是阿里云RDS5.6适用 */
  AccessKey?: string;
  /** 实例的IP地址 */
  Ip?: string;
  /** 实例的端口 */
  Port?: number;
  /** 实例的用户名 */
  User?: string;
  /** 实例的密码 */
  Password?: string;
  /** 阿里云RDS实例ID。源库是阿里云RDS5.6/5.6适用 */
  RdsInstanceId?: string;
  /** CVM实例短ID，格式如：ins-olgl39y8，与云服务器控制台页面显示的实例ID相同。如果是CVM自建实例，需要传递此字段 */
  CvmInstanceId?: string;
  /** 专线网关ID，格式如：dcg-0rxtqqxb */
  UniqDcgId?: string;
  /** 私有网络ID，格式如：vpc-92jblxto */
  VpcId?: string;
  /** 私有网络下的子网ID，格式如：subnet-3paxmkdz */
  SubnetId?: string;
  /** VPN网关ID，格式如：vpngw-9ghexg7q */
  UniqVpnGwId?: string;
  /** 数据库实例ID，格式如：cdb-powiqx8q */
  InstanceId?: string;
  /** 地域英文名，如：ap-guangzhou */
  Region?: string;
  /** 当实例为RDS实例时，填写为aliyun, 其他情况均填写others */
  Supplier?: string;
  /** 云联网ID，如：ccn-afp6kltc */
  CcnId?: string | null;
  /** 数据库版本，当实例为RDS实例时才有效，格式如：5.6或者5.7，默认为5.6 */
  EngineVersion?: string;
}

/** 查询订阅配置的错误信息 */
declare interface SubsErr {
  /** 错误信息 */
  Message: string | null;
}

/** 订阅实例信息 */
declare interface SubscribeInfo {
  /** 数据订阅的实例ID */
  SubscribeId?: string;
  /** 数据订阅实例的名称 */
  SubscribeName?: string;
  /** 数据订阅实例绑定的通道ID */
  ChannelId?: string;
  /** 数据订阅绑定实例对应的产品名称 */
  Product?: string;
  /** 数据订阅实例绑定的数据库实例ID */
  InstanceId?: string;
  /** 数据订阅实例绑定的数据库实例状态 */
  InstanceStatus?: string;
  /** 数据订阅实例的配置状态，unconfigure - 未配置， configuring - 配置中，configured - 已配置 */
  SubsStatus?: string;
  /** 上次修改时间 */
  ModifyTime?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** 隔离时间 */
  IsolateTime?: string;
  /** 到期时间 */
  ExpireTime?: string;
  /** 下线时间 */
  OfflineTime?: string;
  /** 最近一次修改的消费时间起点，如果从未修改则为零值 */
  ConsumeStartTime?: string;
  /** 数据订阅实例所属地域 */
  Region?: string;
  /** 计费方式，0 - 包年包月，1 - 按量计费 */
  PayType?: number;
  /** 数据订阅实例的Vip */
  Vip?: string;
  /** 数据订阅实例的Vport */
  Vport?: number;
  /** 数据订阅实例Vip所在VPC的唯一ID */
  UniqVpcId?: string;
  /** 数据订阅实例Vip所在子网的唯一ID */
  UniqSubnetId?: string;
  /** 数据订阅实例的状态，creating - 创建中，normal - 正常运行，isolating - 隔离中，isolated - 已隔离，offlining - 下线中，offline - 已下线 */
  Status?: string;
  /** SDK最后一条确认消息的时间戳，如果SDK一直消费，也可以作为SDK当前消费时间点 */
  SdkConsumedTime?: string;
  /** 标签 */
  Tags?: TagItem[] | null;
  /** 自动续费标识。0-不自动续费，1-自动续费 */
  AutoRenewFlag?: number | null;
  /** 订阅实例版本；txdts-旧版数据订阅,kafka-kafka版本数据订阅 */
  SubscribeVersion?: string | null;
}

/** 数据数据订阅的对象 */
declare interface SubscribeObject {
  /** 数据订阅对象的类型，0-数据库，1-数据库内的表 */
  ObjectsType: number | null;
  /** 订阅数据库的名称 */
  DatabaseName: string | null;
  /** 订阅数据库中表名称数组 */
  TableNames?: string[] | null;
}

/** 数据订阅地域售卖信息 */
declare interface SubscribeRegionConf {
  /** 地域名称，如广州 */
  RegionName: string | null;
  /** 地区标识，如ap-guangzhou */
  Region: string | null;
  /** 地域名称，如华南地区 */
  Area: string | null;
  /** 是否为默认地域，0 - 不是，1 - 是的 */
  IsDefaultRegion: number | null;
  /** 当前地域的售卖情况，1 - 正常， 2-灰度，3 - 停售 */
  Status: number | null;
}

/** 标签过滤 */
declare interface TagFilter {
  /** 标签键值 */
  TagKey: string;
  /** 标签值 */
  TagValue?: string[];
}

/** 标签 */
declare interface TagItem {
  /** 标签键值 */
  TagKey: string;
  /** 标签值 */
  TagValue?: string | null;
}

declare interface ActivateSubscribeRequest {
  /** 订阅实例ID。 */
  SubscribeId: string;
  /** 数据库实例ID */
  InstanceId: string;
  /** 数据订阅类型0-全实例订阅，1数据订阅，2结构订阅，3数据订阅与结构订阅 */
  SubscribeObjectType: number;
  /** 订阅对象 */
  Objects?: SubscribeObject;
  /** 数据订阅服务所在子网。默认为数据库实例所在的子网内。 */
  UniqSubnetId?: string;
  /** 订阅服务端口；默认为7507 */
  Vport?: number;
}

declare interface ActivateSubscribeResponse {
  /** 配置数据订阅任务ID。 */
  AsyncRequestId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CompleteMigrateJobRequest {
  /** 数据迁移任务ID */
  JobId: string;
  /** 完成任务的方式,仅支持旧版MySQL迁移任务。waitForSync-等待主从差距为0才停止,immediately-立即完成，不会等待主从差距一致。默认为waitForSync */
  CompleteMode?: string;
}

declare interface CompleteMigrateJobResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateMigrateCheckJobRequest {
  /** 数据迁移任务ID */
  JobId: string;
}

declare interface CreateMigrateCheckJobResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateMigrateJobRequest {
  /** 数据迁移任务名称 */
  JobName: string;
  /** 迁移任务配置选项 */
  MigrateOption: MigrateOption;
  /** 源实例数据库类型，目前支持：mysql，redis，mongodb，postgresql，mariadb，percona，sqlserver 不同地域数据库类型的具体支持情况，请参考控制台创建迁移页面。 */
  SrcDatabaseType: string;
  /** 源实例接入类型，值包括：extranet(外网),cvm(CVM自建实例),dcg(专线接入的实例),vpncloud(云VPN接入的实例),cdb(腾讯云数据库实例),ccn(云联网实例) */
  SrcAccessType: string;
  /** 源实例信息，具体内容跟迁移任务类型相关 */
  SrcInfo: SrcInfo;
  /** 目标实例数据库类型，目前支持：mysql，redis，mongodb，postgresql，mariadb，percona，sqlserver，cynosdbmysql。不同地域数据库类型的具体支持情况，请参考控制台创建迁移页面。 */
  DstDatabaseType: string;
  /** 目标实例接入类型，目前支持：cdb（腾讯云数据库实例） */
  DstAccessType: string;
  /** 目标实例信息 */
  DstInfo: DstInfo;
  /** 需要迁移的源数据库表信息，用json格式的字符串描述。当MigrateOption.MigrateObject配置为2（指定库表迁移）时必填。对于database-table两级结构的数据库：[{"Database":"db1","Table":["table1","table2"]},{"Database":"db2"}]对于database-schema-table三级结构：[{"Database":"db1","Schema":"s1","Table":["table1","table2"]},{"Database":"db1","Schema":"s2","Table":["table1","table2"]},{"Database":"db2","Schema":"s1","Table":["table1","table2"]},{"Database":"db3"},{"Database":"db4","Schema":"s1"}] */
  DatabaseInfo?: string;
  /** 迁移实例的tag */
  Tags?: TagItem[];
  /** 源实例类型: ""或者"simple":主从节点，"cluster": 集群节点 */
  SrcNodeType?: string;
  /** 源实例信息，具体内容跟迁移任务类型相关 */
  SrcInfoMulti?: SrcInfo[];
}

declare interface CreateMigrateJobResponse {
  /** 数据迁移任务ID */
  JobId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateSubscribeRequest {
  /** 订阅的数据库类型，目前支持的有 mysql */
  Product: string;
  /** 实例付费类型，1小时计费，0包年包月 */
  PayType: number;
  /** 购买时长。PayType为0时必填。单位为月，最大支持120 */
  Duration?: number;
  /** 购买数量,默认为1，最大为10 */
  Count?: number;
  /** 是否自动续费，0表示不自动续费，1表示自动续费，默认为0。小时计费实例设置该标识无效。 */
  AutoRenew?: number;
  /** 实例资源标签 */
  Tags?: TagItem[];
  /** 用户自定义实例名 */
  Name?: string;
}

declare interface CreateSubscribeResponse {
  /** 数据订阅实例的ID数组 */
  SubscribeIds: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteMigrateJobRequest {
  /** 数据迁移任务ID */
  JobId: string;
}

declare interface DeleteMigrateJobResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAsyncRequestInfoRequest {
  /** 任务 ID */
  AsyncRequestId: string;
}

declare interface DescribeAsyncRequestInfoResponse {
  /** 任务执行结果信息 */
  Info?: string;
  /** 任务执行状态，可能的值有：success，failed，running */
  Status?: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeMigrateCheckJobRequest {
  /** 数据迁移任务ID */
  JobId: string;
}

declare interface DescribeMigrateCheckJobResponse {
  /** 校验任务状态：unavailable(当前不可用), starting(开始中)，running(校验中)，finished(校验完成) */
  Status: string;
  /** 任务的错误码 */
  ErrorCode: number;
  /** 任务的错误信息 */
  ErrorMessage: string;
  /** Check任务总进度,如："30"表示30% */
  Progress: string;
  /** 校验是否通过,0-未通过，1-校验通过, 3-未校验 */
  CheckFlag: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeMigrateJobsRequest {
  /** 数据迁移任务ID */
  JobId?: string;
  /** 数据迁移任务名称 */
  JobName?: string;
  /** 排序字段，可以取值为JobId、Status、JobName、MigrateType、RunMode、CreateTime */
  Order?: string;
  /** 排序方式，升序为ASC，降序为DESC */
  OrderSeq?: string;
  /** 偏移量，默认为0 */
  Offset?: number;
  /** 返回实例数量，默认20，有效区间[1,100] */
  Limit?: number;
  /** 标签过滤条件 */
  TagFilters?: TagFilter[];
}

declare interface DescribeMigrateJobsResponse {
  /** 任务数目 */
  TotalCount: number;
  /** 任务详情数组 */
  JobList: MigrateJobInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeRegionConfRequest {
}

declare interface DescribeRegionConfResponse {
  /** 可售卖地域的数量 */
  TotalCount?: number;
  /** 可售卖地域详情 */
  Items?: SubscribeRegionConf[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeSubscribeConfRequest {
  /** 订阅实例ID */
  SubscribeId: string;
}

declare interface DescribeSubscribeConfResponse {
  /** 订阅实例ID */
  SubscribeId: string;
  /** 订阅实例名称 */
  SubscribeName: string;
  /** 订阅通道 */
  ChannelId: string;
  /** 订阅数据库类型 */
  Product: string;
  /** 被订阅的实例 */
  InstanceId: string;
  /** 被订阅的实例的状态，可能的值有running,offline,isolate */
  InstanceStatus: string;
  /** 订阅实例状态，可能的值有unconfigure-未配置，configuring-配置中，configured-已配置 */
  SubsStatus: string;
  /** 订阅实例生命周期状态，可能的值有：normal-正常，isolating-隔离中，isolated-已隔离，offlining-下线中 */
  Status: string;
  /** 订阅实例创建时间 */
  CreateTime: string;
  /** 订阅实例被隔离时间 */
  IsolateTime: string;
  /** 订阅实例到期时间 */
  ExpireTime: string;
  /** 订阅实例下线时间 */
  OfflineTime: string;
  /** 订阅实例消费时间起点。 */
  ConsumeStartTime: string;
  /** 订阅实例计费类型，1-小时计费，0-包年包月 */
  PayType: number;
  /** 订阅通道Vip */
  Vip: string;
  /** 订阅通道Port */
  Vport: number;
  /** 订阅通道所在VpcId */
  UniqVpcId: string;
  /** 订阅通道所在SubnetId */
  UniqSubnetId: string;
  /** 当前SDK消费时间位点 */
  SdkConsumedTime: string;
  /** 订阅SDK IP地址 */
  SdkHost: string;
  /** 订阅对象类型0-全实例订阅，1-DDL数据订阅，2-DML结构订阅，3-DDL数据订阅+DML结构订阅 */
  SubscribeObjectType: number;
  /** 订阅对象，当SubscribeObjectType 为0时，此字段为空数组 */
  SubscribeObjects: SubscribeObject[];
  /** 修改时间 */
  ModifyTime: string;
  /** 地域 */
  Region: string;
  /** 订阅实例的标签 */
  Tags: TagItem[] | null;
  /** 自动续费标识,0-不自动续费，1-自动续费 */
  AutoRenewFlag: number | null;
  /** 数据订阅版本。老版订阅填txdts，kafka版填kafka */
  SubscribeVersion: string;
  /** 错误信息 */
  Errors: SubsErr[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeSubscribesRequest {
  /** 数据订阅的实例ID */
  SubscribeId?: string;
  /** 数据订阅的实例名称 */
  SubscribeName?: string;
  /** 绑定数据库实例的ID */
  InstanceId?: string;
  /** 数据订阅实例的通道ID */
  ChannelId?: string;
  /** 计费模式筛选，可能的值：0-包年包月，1-按量计费 */
  PayType?: string;
  /** 订阅的数据库产品，如mysql */
  Product?: string;
  /** 数据订阅实例的状态，creating - 创建中，normal - 正常运行，isolating - 隔离中，isolated - 已隔离，offlining - 下线中 */
  Status?: string[];
  /** 数据订阅实例的配置状态，unconfigure - 未配置， configuring - 配置中，configured - 已配置 */
  SubsStatus?: string[];
  /** 返回记录的起始偏移量，默认为0。请输入非负整数 */
  Offset?: number;
  /** 单次返回的记录数量，默认20。请输入1到100的整数 */
  Limit?: number;
  /** 排序方向，可选的值为"DESC"和"ASC"，默认为"DESC"，按创建时间逆序排序 */
  OrderDirection?: string;
  /** 标签过滤条件 */
  TagFilters?: TagFilter[];
  /** 订阅实例版本;txdts-旧版数据订阅，kafka-kafka版本数据订阅 */
  SubscribeVersion?: string;
}

declare interface DescribeSubscribesResponse {
  /** 符合查询条件的实例总数 */
  TotalCount: number;
  /** 数据订阅实例的信息列表 */
  Items: SubscribeInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface IsolateSubscribeRequest {
  /** 订阅实例ID */
  SubscribeId: string;
}

declare interface IsolateSubscribeResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyMigrateJobRequest {
  /** 待修改的数据迁移任务ID */
  JobId: string;
  /** 数据迁移任务名称 */
  JobName?: string;
  /** 迁移任务配置选项 */
  MigrateOption?: MigrateOption;
  /** 源实例接入类型，值包括：extranet(外网),cvm(CVM自建实例),dcg(专线接入的实例),vpncloud(云VPN接入的实例),cdb(云上CDB实例) */
  SrcAccessType?: string;
  /** 源实例信息，具体内容跟迁移任务类型相关 */
  SrcInfo?: SrcInfo;
  /** 目标实例接入类型，值包括：extranet(外网),cvm(CVM自建实例),dcg(专线接入的实例),vpncloud(云VPN接入的实例)，cdb(云上CDB实例). 目前只支持cdb. */
  DstAccessType?: string;
  /** 目标实例信息, 其中目标实例地域不允许修改. */
  DstInfo?: DstInfo;
  /** 当选择'指定库表'迁移的时候, 需要设置待迁移的源数据库表信息,用符合json数组格式的字符串描述, 如下所例。对于database-table两级结构的数据库：[{"Database":"db1","Table":["table1","table2"]},{"Database":"db2"}]对于database-schema-table三级结构：[{"Database":"db1","Schema":"s1","Table":["table1","table2"]},{"Database":"db1","Schema":"s2","Table":["table1","table2"]},{"Database":"db2","Schema":"s1","Table":["table1","table2"]},{"Database":"db3"},{"Database":"db4","Schema":"s1"}]如果是'整个实例'的迁移模式,不需设置该字段 */
  DatabaseInfo?: string;
  /** 源实例类型: ""或者"simple":主从节点，"cluster": 集群节点 */
  SrcNodeType?: string;
  /** 源实例信息，具体内容跟迁移任务类型相关 */
  SrcInfoMulti?: SrcInfo[];
}

declare interface ModifyMigrateJobResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifySubscribeAutoRenewFlagRequest {
  /** 订阅实例ID，例如：subs-8uey736k */
  SubscribeId: string;
  /** 自动续费标识。1-自动续费，0-不自动续费 */
  AutoRenewFlag: number;
}

declare interface ModifySubscribeAutoRenewFlagResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifySubscribeConsumeTimeRequest {
  /** 数据订阅实例的ID */
  SubscribeId: string;
  /** 消费时间起点，也即是指定订阅数据的时间起点，时间格式如：Y-m-d h:m:s，取值范围为过去24小时之内 */
  ConsumeStartTime: string;
}

declare interface ModifySubscribeConsumeTimeResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifySubscribeNameRequest {
  /** 数据订阅实例的ID */
  SubscribeId: string;
  /** 数据订阅实例的名称，长度限制为[1,60] */
  SubscribeName: string;
}

declare interface ModifySubscribeNameResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifySubscribeObjectsRequest {
  /** 数据订阅实例的ID */
  SubscribeId: string;
  /** 数据订阅的类型，可选的值有：0 - 全实例订阅；1 - 数据订阅；2 - 结构订阅；3 - 数据订阅+结构订阅 */
  SubscribeObjectType: number;
  /** 订阅的数据库表信息 */
  Objects?: SubscribeObject[];
}

declare interface ModifySubscribeObjectsResponse {
  /** 异步任务的ID */
  AsyncRequestId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifySubscribeVipVportRequest {
  /** 数据订阅实例的ID */
  SubscribeId: string;
  /** 指定目的子网，如果传此参数，DstIp必须在目的子网内 */
  DstUniqSubnetId?: string;
  /** 目标IP，与DstPort至少传一个 */
  DstIp?: string;
  /** 目标PORT，支持范围为：[1025-65535] */
  DstPort?: number;
}

declare interface ModifySubscribeVipVportResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface OfflineIsolatedSubscribeRequest {
  /** 数据订阅实例的ID */
  SubscribeId: string;
}

declare interface OfflineIsolatedSubscribeResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ResetSubscribeRequest {
  /** 数据订阅实例的ID */
  SubscribeId: string;
}

declare interface ResetSubscribeResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface StartMigrateJobRequest {
  /** 数据迁移任务ID */
  JobId: string;
}

declare interface StartMigrateJobResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface StopMigrateJobRequest {
  /** 数据迁移任务ID */
  JobId: string;
}

declare interface StopMigrateJobResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

/** [数据传输服务](https://cloud.tencent.com/document/product/571) */
declare interface Dts {
  (): Versions;
  /** 配置数据订阅通道 */
  ActivateSubscribe(data: ActivateSubscribeRequest, config?: AxiosRequestConfig): AxiosPromise<ActivateSubscribeResponse>;
  /** 完成数据迁移任务 */
  CompleteMigrateJob(data: CompleteMigrateJobRequest, config?: AxiosRequestConfig): AxiosPromise<CompleteMigrateJobResponse>;
  /** 创建校验迁移任务 */
  CreateMigrateCheckJob(data: CreateMigrateCheckJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreateMigrateCheckJobResponse>;
  /** 创建数据迁移任务 */
  CreateMigrateJob(data: CreateMigrateJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreateMigrateJobResponse>;
  /** 创建订阅对象 */
  CreateSubscribe(data: CreateSubscribeRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSubscribeResponse>;
  /** 删除数据迁移任务 */
  DeleteMigrateJob(data: DeleteMigrateJobRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteMigrateJobResponse>;
  /** 查询任务执行结果 */
  DescribeAsyncRequestInfo(data: DescribeAsyncRequestInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAsyncRequestInfoResponse>;
  /** 获取迁移校验结果 */
  DescribeMigrateCheckJob(data: DescribeMigrateCheckJobRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMigrateCheckJobResponse>;
  /** 查询数据迁移任务 */
  DescribeMigrateJobs(data: DescribeMigrateJobsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMigrateJobsResponse>;
  /** 查询可售卖订阅地域 */
  DescribeRegionConf(data?: DescribeRegionConfRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRegionConfResponse>;
  /** 查询订阅实例配置 */
  DescribeSubscribeConf(data: DescribeSubscribeConfRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSubscribeConfResponse>;
  /** 获取数据订阅实例列表 */
  DescribeSubscribes(data: DescribeSubscribesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSubscribesResponse>;
  /** 隔离订阅实例 */
  IsolateSubscribe(data: IsolateSubscribeRequest, config?: AxiosRequestConfig): AxiosPromise<IsolateSubscribeResponse>;
  /** 修改数据迁移任务 */
  ModifyMigrateJob(data: ModifyMigrateJobRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyMigrateJobResponse>;
  /** 修改订阅实例自动续费标识 */
  ModifySubscribeAutoRenewFlag(data: ModifySubscribeAutoRenewFlagRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySubscribeAutoRenewFlagResponse>;
  /** 修改数据订阅实例通道的消费时间点 */
  ModifySubscribeConsumeTime(data: ModifySubscribeConsumeTimeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySubscribeConsumeTimeResponse>;
  /** 修改数据订阅实例的名称 */
  ModifySubscribeName(data: ModifySubscribeNameRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySubscribeNameResponse>;
  /** 修改数据订阅通道的订阅规则 */
  ModifySubscribeObjects(data: ModifySubscribeObjectsRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySubscribeObjectsResponse>;
  /** 修改数据订阅实例的IP和端口号 */
  ModifySubscribeVipVport(data: ModifySubscribeVipVportRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySubscribeVipVportResponse>;
  /** 下线已隔离的数据订阅实例 */
  OfflineIsolatedSubscribe(data: OfflineIsolatedSubscribeRequest, config?: AxiosRequestConfig): AxiosPromise<OfflineIsolatedSubscribeResponse>;
  /** 重置数据订阅实例 */
  ResetSubscribe(data: ResetSubscribeRequest, config?: AxiosRequestConfig): AxiosPromise<ResetSubscribeResponse>;
  /** 启动数据迁移任务 */
  StartMigrateJob(data: StartMigrateJobRequest, config?: AxiosRequestConfig): AxiosPromise<StartMigrateJobResponse>;
  /** 撤销数据迁移任务 */
  StopMigrateJob(data: StopMigrateJobRequest, config?: AxiosRequestConfig): AxiosPromise<StopMigrateJobResponse>;
}

export declare type Versions = ["2018-03-30"];

export default Dts;
