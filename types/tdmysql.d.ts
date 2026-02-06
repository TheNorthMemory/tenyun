/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 可恢复时间区间 */
declare interface ArchiveLogInterval {
  /** 结束时间 */
  EndTime?: string | null;
  /** 大版本 */
  MajorVersion?: string | null;
  /** 小版本 */
  MinorVersion?: string | null;
  /** 开始时间 */
  StartTime?: string | null;
}

/** 修改备份策略对象 */
declare interface BackupPolicyModelInput {
  /** 备份结束时间 */
  BackupEndTime?: string;
  /** 备份方式 physical 物理备份 snapshot 快照备份 */
  BackupMethod?: string;
  /** 备份开始时间 */
  BackupStartTime?: string;
  /** 是否开启全量备份 */
  EnableFull?: number;
  /** 是否开启日志备份 */
  EnableLog?: number;
  /** 全备保留时间,目前只能设置7天 */
  FullRetentionPeriod?: number;
  /** 实例ID */
  InstanceId?: string;
  /** 日志保留天数，目前只能设置保留7天 */
  LogRetentionPeriod?: number;
  /** 一周的哪几天进行备份 */
  PeriodTime?: string;
  /** 存储类型:COS,SNAPSHOT枚举值： COS： COS存储 SNAPSHOT： 云盘快照 */
  StorageType?: string;
}

/** 克隆实例对象 */
declare interface CloneInstanceModel {
  /** 克隆任务结束时间 */
  CloneEndTime?: string | null;
  /** 克隆记录ID */
  CloneId?: number | null;
  /** 克隆实例类型 */
  CloneInsType?: string | null;
  /** 克隆实例ID */
  CloneInstanceId?: string | null;
  /** 克隆实例是否已经删除 */
  CloneInstanceIsDeleted?: boolean | null;
  /** 克隆任务进度 */
  CloneProgress?: number | null;
  /** 克隆任务开始时间 */
  CloneStartTime?: string | null;
  /** 克隆任务状态 */
  CloneStatus?: string | null;
  /** 克隆时间 */
  CloneTime?: string | null;
  /** 克隆类型 */
  CloneType?: string | null;
  /** 创建时间 */
  CreateTime?: string | null;
  /** 引擎类型 */
  DBType?: string | null;
  /** 地域 */
  Region?: string | null;
  /** 源实例ID */
  SourceInstanceId?: string | null;
}

/** 约束类型值的范围 */
declare interface ConstraintRange {
  /** 约束类型为section时的最小值 */
  Min: string;
  /** 约束类型为section时的最大值 */
  Max: string;
}

/** 云数据库参数信息。 */
declare interface DBParamValue {
  /** 参数名称 */
  Param: string;
  /** 参数值 */
  Value: string;
}

/** 数据库函数信息 */
declare interface DatabaseFunction {
  /** 函数名称 */
  Func: string;
}

/** 数据库存储过程信息 */
declare interface DatabaseProcedure {
  /** 存储过程名称 */
  Proc: string;
}

/** 数据库表信息 */
declare interface DatabaseTable {
  /** 表名 */
  Table: string;
}

/** 数据库视图信息 */
declare interface DatabaseView {
  /** 视图名称 */
  View: string;
}

/** 参数约束 */
declare interface ParamConstraint {
  /** 约束类型,如枚举enum，区间section */
  Type: string;
  /** 约束类型为enum时的可选值列表 */
  Enum: string | null;
  /** 约束类型为section时的范围 */
  Range: ConstraintRange | null;
  /** 约束类型为string时的可选值列表 */
  String: string | null;
}

/** DB参数描述 */
declare interface ParamDesc {
  /** 参数名字 */
  Param: string;
  /** 当前参数值 */
  Value: string;
  /** 设置过的值，参数生效后，该值和value一样。 */
  SetValue: string | null;
  /** 系统默认值 */
  Default: string;
  /** 参数限制 */
  Constraint: ParamConstraint | null;
  /** 是否有设置过值，false:没有设置过值，true:有设置过值。 */
  HaveSetValue: boolean;
  /** true:需要重启 */
  NeedRestart: boolean;
  /** 参数描述 */
  Description: string | null;
}

/** 安全组详情 */
declare interface SecurityGroup {
  /** 项目ID */
  ProjectId?: number;
  /** 创建时间，时间格式：yyyy-mm-dd hh:mm:ss */
  CreateTime?: string;
  /** 安全组ID */
  SecurityGroupId?: string;
  /** 安全组名称 */
  SecurityGroupName?: string;
  /** 安全组备注 */
  SecurityGroupRemark?: string;
  /** 入站规则 */
  Inbound?: SecurityGroupBound[];
  /** 出站规则 */
  Outbound?: SecurityGroupBound[];
}

/** 安全出入口规则 */
declare interface SecurityGroupBound {
  /** 来源 IP 或 IP 段，例如192.168.0.0/16 */
  CidrIp?: string;
  /** 策略，ACCEPT 或者 DROP */
  Action?: string;
  /** 端口 */
  PortRange?: string;
  /** 网络协议，支持 UDP、TCP 等 */
  IpProtocol?: string;
}

/** 数据库列信息 */
declare interface TableColumn {
  /** 列名称 */
  Col: string;
  /** 列类型 */
  Type: string;
}

declare interface CancelIsolateDBInstancesRequest {
  /** 需要隔离的实例ID列表 */
  InstanceIds: string[];
}

declare interface CancelIsolateDBInstancesResponse {
  /** 解除隔离成功实例Id列表 */
  SuccessInstanceIds: string[];
  /** 解除隔离失败实例Id列表 */
  FailedInstanceIds: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDBSBackupRequest {
  /** 备份方式：physical、snapshot 这个值和DescribeDBSBackupPolicy接口返回的backupMethod保持一致枚举值： physical： 物理备份 snapshot： 快照备份 */
  BackupMethod: string;
  /** 备份类型：暂时只支持full */
  BackupType: string;
  /** 实例ID */
  InstanceId: string;
  /** 备份备注 */
  BackupName?: string;
}

declare interface CreateDBSBackupResponse {
  /** 备份集ID */
  BackupSetId?: number;
  /** 是否成功 */
  IsSuccess?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteDBSBackupSetsRequest {
  /** 实例ID */
  InstanceId: string;
  /** 备份集列表 ,值来自 DescribeDBSBackupSets 接口返回 */
  BackupSetIdList?: number[];
}

declare interface DeleteDBSBackupSetsResponse {
  /** 本次实际删除的备份数量 */
  Deleted?: number;
  /** 是否全部删除成功 */
  IsSuccess?: boolean;
  /** 需要删除的备份总数 */
  Total?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBillingEnableRequest {
}

declare interface DescribeBillingEnableResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDBParametersRequest {
  /** 实例 ID，形如：tdsql3-ow728lmc。 */
  InstanceId: string;
}

declare interface DescribeDBParametersResponse {
  /** 实例 ID，形如：tdsql3-ow728lmc。 */
  InstanceId: string;
  /** 请求实例的当前参数值 */
  Params: ParamDesc[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDBSAvailableRecoveryTimeRequest {
  /** db实例ID */
  InstanceId: string;
  /** 备份集ID,值来自 DescribeDBSBackupSets 接口返回 */
  BackupSetId?: number;
}

declare interface DescribeDBSAvailableRecoveryTimeResponse {
  /** 结束时间 */
  EndTime?: string | null;
  /** 可恢复时间区间 */
  Intervals?: ArchiveLogInterval[] | null;
  /** 开始时间 */
  StartTime?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDBSCloneInstancesRequest {
  /** 源实例ID */
  SourceInstanceId: string;
  /** 引擎类型 */
  DBType?: string;
  /** 结束创建时间 */
  EndCreateTime?: string;
  /** 克隆类型: PITR 时间点 BackupSet 备份集 */
  FilterCloneType?: string;
  /** 查询数量[0,200] */
  Limit?: number;
  /** 查询偏移量[0,INF] */
  Offset?: number;
  /** 排序字段: CloneTime,CreateTime */
  OrderBy?: string;
  /** 排序类型:ASC,DESC */
  OrderType?: string;
  /** 开始创建时间 */
  StartCreateTime?: string;
}

declare interface DescribeDBSCloneInstancesResponse {
  /** 克隆列表 */
  Items?: CloneInstanceModel[] | null;
  /** 总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDBSecurityGroupsRequest {
  /** 实例ID。 */
  InstanceId: string;
}

declare interface DescribeDBSecurityGroupsResponse {
  /** 安全组详情。 */
  Groups?: SecurityGroup[];
  /** 实例VIP */
  VIP?: string | null;
  /** 实例端口 */
  VPort?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDatabaseObjectsRequest {
  /** 实例 ID，形如：tdsql3-42f40429. */
  InstanceId: string;
  /** 数据库名称，通过 DescribeDatabases 接口获取。 */
  DbName: string;
}

declare interface DescribeDatabaseObjectsResponse {
  /** 透传入参。 */
  InstanceId: string;
  /** 数据库名称。 */
  DbName: string;
  /** 表列表。 */
  Tables: DatabaseTable[] | null;
  /** 视图列表。 */
  Views: DatabaseView[] | null;
  /** 存储过程列表。 */
  Procs: DatabaseProcedure[] | null;
  /** 函数列表。 */
  Funcs: DatabaseFunction[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDatabaseTableRequest {
  /** 实例 ID，形如：tdsql3-ow7t8lmc。 */
  InstanceId: string;
  /** 数据库名称，通过 DescribeDatabases 接口获取。 */
  DbName: string;
  /** 表名称，通过 DescribeDatabaseObjects 接口获取。 */
  Table: string;
}

declare interface DescribeDatabaseTableResponse {
  /** 实例名称。 */
  InstanceId: string;
  /** 数据库名称。 */
  DbName: string;
  /** 表名称。 */
  Table: string | null;
  /** 列信息。 */
  Cols: TableColumn[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFlowRequest {
}

declare interface DescribeFlowResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DestroyInstancesRequest {
  /** 需要隔离的实例ID列表 */
  InstanceIds: string[];
}

declare interface DestroyInstancesResponse {
  /** 解除隔离成功实例Id列表 */
  SuccessInstanceIds: string[];
  /** 解除隔离失败实例Id列表 */
  FailedInstanceIds: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface IsolateDBInstanceRequest {
  /** 需要隔离的实例ID列表 */
  InstanceIds: string[];
}

declare interface IsolateDBInstanceResponse {
  /** 隔离成功实例Id列表 */
  SuccessInstanceIds: string[];
  /** 隔离失败实例Id列表 */
  FailedInstanceIds: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAutoRenewFlagRequest {
  /** 需要修改的实例列表 */
  InstanceIds: string[];
  /** 1表示开启自动续费，0为关闭自动续费 */
  AutoRenewFlag: number;
}

declare interface ModifyAutoRenewFlagResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyBinlogStatusRequest {
  /** 实例id */
  InstanceId: string;
  /** 1打开0关闭 */
  Status: number;
}

declare interface ModifyBinlogStatusResponse {
  /** flow的流程id */
  FlowId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDBInstanceSecurityGroupsRequest {
  /** 实例ID。 */
  InstanceId: string;
  /** 要修改的安全组 ID 列表，一个或者多个安全组 ID 组成的数组。 */
  SecurityGroupIds: string[];
}

declare interface ModifyDBInstanceSecurityGroupsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDBParametersRequest {
  /** 实例 ID，形如：tdsql3-ow728lmc。 */
  InstanceId: string;
  /** 参数列表，每一个元素是Param和Value的组合 */
  Params: DBParamValue[];
}

declare interface ModifyDBParametersResponse {
  /** 123 */
  TaskID: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDBSBackupPolicyRequest {
  /** 备份策略 */
  BackupPolicy: BackupPolicyModelInput;
  /** 实例ID */
  InstanceId: string;
}

declare interface ModifyDBSBackupPolicyResponse {
  /** 是否成功 */
  IsSuccess?: boolean;
  /** 消息 */
  Msg?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDBSBackupSetCommentRequest {
  /** 实例ID */
  InstanceId: string;
  /** 备份集ID,值来自 DescribeDBSBackupSets 接口返回 */
  BackupSetId: number;
  /** 备份备注 */
  NewBackupName: string;
}

declare interface ModifyDBSBackupSetCommentResponse {
  /** 是否成功 */
  IsSuccess?: boolean;
  /** 修改信息 */
  Msg?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyInstanceNameRequest {
  /** 需要修改的实例id */
  InstanceId: string;
  /** 修改的实例名称，要求长度1-60，允许包含中文、英文大小写、数字、-、_ */
  InstanceName: string;
}

declare interface ModifyInstanceNameResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Tdmysql TDSQL} */
declare interface Tdmysql {
  (): Versions;
  /** 批量解除隔离实例 {@link CancelIsolateDBInstancesRequest} {@link CancelIsolateDBInstancesResponse} */
  CancelIsolateDBInstances(data: CancelIsolateDBInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<CancelIsolateDBInstancesResponse>;
  /** 创建实例备份 {@link CreateDBSBackupRequest} {@link CreateDBSBackupResponse} */
  CreateDBSBackup(data: CreateDBSBackupRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDBSBackupResponse>;
  /** 清理实例备份 {@link DeleteDBSBackupSetsRequest} {@link DeleteDBSBackupSetsResponse} */
  DeleteDBSBackupSets(data: DeleteDBSBackupSetsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDBSBackupSetsResponse>;
  /** 查询计费是否开启 {@link DescribeBillingEnableRequest} {@link DescribeBillingEnableResponse} */
  DescribeBillingEnable(data?: DescribeBillingEnableRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBillingEnableResponse>;
  /** 查看实例参数 {@link DescribeDBParametersRequest} {@link DescribeDBParametersResponse} */
  DescribeDBParameters(data: DescribeDBParametersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBParametersResponse>;
  /** 获取可恢复时间 {@link DescribeDBSAvailableRecoveryTimeRequest} {@link DescribeDBSAvailableRecoveryTimeResponse} */
  DescribeDBSAvailableRecoveryTime(data: DescribeDBSAvailableRecoveryTimeRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBSAvailableRecoveryTimeResponse>;
  /** 查询实例克隆列表 {@link DescribeDBSCloneInstancesRequest} {@link DescribeDBSCloneInstancesResponse} */
  DescribeDBSCloneInstances(data: DescribeDBSCloneInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBSCloneInstancesResponse>;
  /** 查询实例安全组信息 {@link DescribeDBSecurityGroupsRequest} {@link DescribeDBSecurityGroupsResponse} */
  DescribeDBSecurityGroups(data: DescribeDBSecurityGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBSecurityGroupsResponse>;
  /** 查询数据库对象列表 {@link DescribeDatabaseObjectsRequest} {@link DescribeDatabaseObjectsResponse} */
  DescribeDatabaseObjects(data: DescribeDatabaseObjectsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDatabaseObjectsResponse>;
  /** 查询数据库表信息 {@link DescribeDatabaseTableRequest} {@link DescribeDatabaseTableResponse} */
  DescribeDatabaseTable(data: DescribeDatabaseTableRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDatabaseTableResponse>;
  /** 查询流程状态 {@link DescribeFlowRequest} {@link DescribeFlowResponse} */
  DescribeFlow(data?: DescribeFlowRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFlowResponse>;
  /** 批量销毁实例 {@link DestroyInstancesRequest} {@link DestroyInstancesResponse} */
  DestroyInstances(data: DestroyInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DestroyInstancesResponse>;
  /** 批量隔离实例 {@link IsolateDBInstanceRequest} {@link IsolateDBInstanceResponse} */
  IsolateDBInstance(data: IsolateDBInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<IsolateDBInstanceResponse>;
  /** 修改自动续费标志 {@link ModifyAutoRenewFlagRequest} {@link ModifyAutoRenewFlagResponse} */
  ModifyAutoRenewFlag(data: ModifyAutoRenewFlagRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAutoRenewFlagResponse>;
  /** 修改binlog状态 {@link ModifyBinlogStatusRequest} {@link ModifyBinlogStatusResponse} */
  ModifyBinlogStatus(data: ModifyBinlogStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyBinlogStatusResponse>;
  /** 修改云数据库安全组 {@link ModifyDBInstanceSecurityGroupsRequest} {@link ModifyDBInstanceSecurityGroupsResponse} */
  ModifyDBInstanceSecurityGroups(data: ModifyDBInstanceSecurityGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDBInstanceSecurityGroupsResponse>;
  /** 修改实例参数 {@link ModifyDBParametersRequest} {@link ModifyDBParametersResponse} */
  ModifyDBParameters(data: ModifyDBParametersRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDBParametersResponse>;
  /** 修改实例备份策略 {@link ModifyDBSBackupPolicyRequest} {@link ModifyDBSBackupPolicyResponse} */
  ModifyDBSBackupPolicy(data: ModifyDBSBackupPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDBSBackupPolicyResponse>;
  /** 修改实例备份备注名 {@link ModifyDBSBackupSetCommentRequest} {@link ModifyDBSBackupSetCommentResponse} */
  ModifyDBSBackupSetComment(data: ModifyDBSBackupSetCommentRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDBSBackupSetCommentResponse>;
  /** 修改实例名称 {@link ModifyInstanceNameRequest} {@link ModifyInstanceNameResponse} */
  ModifyInstanceName(data: ModifyInstanceNameRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyInstanceNameResponse>;
}

export declare type Versions = ["2021-11-22"];

export default Tdmysql;
