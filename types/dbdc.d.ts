/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** DB实例详情 */
declare interface DBInstanceDetail {
  /** DB实例Id */
  InstanceId: string;
  /** DB实例名称 */
  InstanceName: string;
  /** DB实例状态,-1:已隔离, 0:创建中, 1:流程中, 2:运行中, 3:未初始化 */
  Status: number;
  /** DB实例状态描述,-1:已隔离, 0:创建中, 1:流程中, 2:运行中, 3:未初始化 */
  StatusDesc: string;
  /** DB实例版本 */
  DbVersion: string;
  /** Vip信息 */
  Vip: string;
  /** Vip使用的端口号 */
  Vport: number;
  /** 字符串型的私有网络ID */
  UniqueVpcId: string;
  /** 字符串型的私有网络子网ID */
  UniqueSubnetId: string;
  /** 是否为分布式版本,0:否,1:是 */
  Shard: number;
  /** DB实例节点数 */
  NodeNum: number;
  /** CPU规格(单位:核数) */
  Cpu: number;
  /** 内存规格(单位:GB) */
  Memory: number;
  /** 磁盘规格(单位:GB) */
  Disk: number;
  /** 分布式类型的实例的分片数 */
  ShardNum: number;
  /** 地域 */
  Region: string;
  /** 可用区 */
  Zone: string;
  /** Db所在主机列表, 格式: m1,s1|m2,s2 */
  DbHosts: string;
  /** 主机角色, 1:主, 2:从, 3:主+从 */
  HostRole: number;
  /** DB引擎，MySQL,Percona,MariaDB */
  DbEngine: string;
  /** 创建时间 */
  CreateTime: string;
}

/** 独享集群详情 */
declare interface DescribeInstanceDetail {
  /** 独享集群实例Id */
  InstanceId: string;
  /** 独享集群实例名称 */
  InstanceName: string;
  /** 地域 */
  Region: string;
  /** 产品ID, 0:CDB, 1:TDSQL */
  ProductId: number;
  /** 集群类型, 0:公有云, 1:金融围笼, 2:CDC集群 */
  Type: number;
  /** 主机类型, 0:物理机, 1:CVM机型, 2:CDC机型 */
  HostType: number;
  /** 自动续费标志, 0:未设置, 1:自动续费, 2:到期不续费 */
  AutoRenewFlag: number;
  /** 集群状态 */
  Status: number;
  /** 集群状态描述 */
  StatusDesc: string;
  /** 创建时间 */
  CreateTime: string;
  /** 到期时间 */
  PeriodEndTime: string;
  /** 主机数 */
  HostNum: number;
  /** DB实例数 */
  DbNum: number;
  /** 分配策略, 0:紧凑, 1:均匀 */
  AssignStrategy: number;
  /** 总主机CPU(单位:核数) */
  CpuSpec: number;
  /** 总已分配CPU(单位:核数) */
  CpuAssigned: number;
  /** 总可分配CPU(单位:核数) */
  CpuAssignable: number;
  /** 总主机内存(单位:GB) */
  MemorySpec: number;
  /** 总已分配内存(单位:GB) */
  MemoryAssigned: number;
  /** 总可分配内存(单位:GB) */
  MemoryAssignable: number;
  /** 总机器磁盘(单位:GB) */
  DiskSpec: number;
  /** 总已分配磁盘(单位:GB) */
  DiskAssigned: number;
  /** 总可分配磁盘(单位:GB) */
  DiskAssignable: number;
  /** 可用区 */
  Zone: string;
  /** 金融围笼ID */
  FenceId: string | null;
  /** 所属集群ID(默认集群为空) */
  ClusterId: string | null;
}

/** 设备信息 */
declare interface DeviceInfo {
  /** 设备ID */
  DeviceId: number;
  /** 设备No */
  DeviceNo: string;
  /** 设备类型 */
  DevClass: string;
  /** 设备总内存，单位GB */
  MaxMemory: number;
  /** 设备总磁盘，单位GB */
  MaxDisk: number;
  /** 设备剩余内存，单位GB */
  RestMemory: number;
  /** 设备剩余磁盘，单位GB */
  RestDisk: number;
  /** 设备机器个数 */
  RawDeviceNum: number;
  /** 数据库实例个数 */
  InstanceNum: number;
}

/** 主机详情 */
declare interface HostDetail {
  /** 主机Id */
  HostId: string;
  /** 主机名称 */
  HostName: string;
  /** 可用区 */
  Zone: string;
  /** 主机状态 */
  Status: number;
  /** 分配DB实例状态,0:可分配,1:不可分配 */
  AssignStatus: number;
  /** 主机类型, 0:物理机, 1:cvm本地盘, 2:cvm云盘 */
  HostType: number;
  /** DB实例数 */
  DbNum: number;
  /** 主机CPU(单位:核数) */
  CpuSpec: number;
  /** 已分配CPU(单位:核数) */
  CpuAssigned: number;
  /** 可分配CPU(单位:核数) */
  CpuAssignable: number;
  /** 主机内存(单位:GB) */
  MemorySpec: number;
  /** 已分配内存(单位:GB) */
  MemoryAssigned: number;
  /** 可分配内存(单位:GB) */
  MemoryAssignable: number;
  /** 主机磁盘(单位:GB) */
  DiskSpec: number;
  /** 已分配磁盘(单位:GB) */
  DiskAssigned: number;
  /** 可分配磁盘(GB) */
  DiskAssignable: number;
  /** CPU分配比 */
  CpuRatio: number;
  /** 内存分配比 */
  MemoryRatio: number;
  /** 磁盘分配比 */
  DiskRatio: number;
  /** 机型名称 */
  MachineName: string;
  /** 机型类别 */
  MachineType: string;
  /** 计费标签 */
  PidTag: string;
  /** 计费ID */
  Pid: number;
}

/** 集群容量信息。 */
declare interface InstanceDetail {
  /** 集群状态，0：运行中，1：不在运行 */
  Status: number;
  /** 读写集群剩余内存容量，单位GB */
  ReadWriteTotalLeaveMemory: number;
  /** 读写集群剩余磁盘容量，单位GB */
  ReadWriteTotalLeaveDisk: number;
  /** 读写集群总内存容量，单位GB */
  ReadWriteTotalMemory: number;
  /** 读写集群总磁盘容量，单位GB */
  ReadWriteTotalDisk: number;
  /** 只读集群剩余内存容量，单位GB */
  ReadOnlyTotalLeaveMemory: number;
  /** 只读集群剩余磁盘容量，单位GB */
  ReadOnlyTotalLeaveDisk: number;
  /** 只读集群总内存容量，单位GB */
  ReadOnlyTotalMemory: number;
  /** 只读集群总磁盘容量，单位GB */
  ReadOnlyTotalDisk: number;
  /** 集群设备详情 */
  InstanceDeviceInfos: InstanceDeviceInfo[];
}

/** 集群设备组信息。 */
declare interface InstanceDeviceInfo {
  /** 集群ID */
  InstanceId: string | null;
  /** 读写设备组 */
  ReadWriteDevice: DeviceInfo[] | null;
  /** 只读设备组 */
  ReadOnlyDevice: DeviceInfo[] | null;
  /** 空闲设备组 */
  FreeDevice: DeviceInfo[] | null;
}

/** 集群扩展信息。 */
declare interface InstanceExpand {
  /** 集群ID */
  InstanceId: string;
  /** 集群名称 */
  InstanceName: string;
  /** 用户ID */
  AppId: number;
  /** 地域 */
  Region: string;
  /** 可用区 */
  Zone: string;
  /** 集群类型： 0：一主一备，1：一主两备 */
  InstanceType: number;
  /** 集群状态: 0 集群创建中, 1 集群有效, 2 集群扩容中, 3 集群删除中, 4 集群缩容中 -1 集群已隔离 -2 集群已删除 */
  InstanceStatus: number;
  /** 创建时间 */
  CreateTime: string;
  /** 实例自动续费标识： 0正常续费 1自动续费 2到期不续费 */
  AutoRenewFlag: number;
  /** 机型 */
  Machine: string;
  /** 过期时间 */
  PeriodEndTime: string;
  /** 集群信息 */
  InstanceDetail: InstanceDetail;
  /** 计费侧的产品ID */
  Pid: number;
}

declare interface DescribeDBInstancesRequest {
  /** 独享集群实例Id */
  InstanceId: string;
  /** 独享集群主机Id */
  HostId?: string;
  /** 分页返回数量 */
  Limit?: number;
  /** 分页偏移量 */
  Offset?: number;
  /** 实例类型,0:mariadb, 1:tdsql */
  ShardType?: number[];
}

declare interface DescribeDBInstancesResponse {
  /** 独享集群内的DB实例列表 */
  Instances: DBInstanceDetail[];
  /** 独享集群内的DB实例总数 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeHostListRequest {
  /** 独享集群实例Id */
  InstanceId: string;
  /** 分页返回数量 */
  Limit?: number;
  /** 分页偏移量 */
  Offset?: number;
  /** 分配状态过滤，0-可分配，1-禁止分配 */
  AssignStatus?: number[];
}

declare interface DescribeHostListResponse {
  /** 主机总数 */
  TotalCount: number;
  /** 主机详情 */
  Hosts: HostDetail[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeInstanceDetailRequest {
  /** 独享集群实例Id */
  InstanceId: string;
}

declare interface DescribeInstanceDetailResponse {
  /** 独享集群实例Id */
  InstanceId: string;
  /** 独享集群实例名称 */
  InstanceName: string;
  /** 地域 */
  Region: string;
  /** 产品ID, 0:CDB, 1:TDSQL */
  ProductId: number;
  /** 集群类型, 0:公有云, 1:金融围笼 */
  Type: number;
  /** 主机类型, 0:物理机, 1:cvm本地盘, 2:cvm云盘 */
  HostType: number;
  /** 自动续费标志, 0:未设置, 1:自动续费, 2:到期不续费 */
  AutoRenewFlag: number;
  /** 集群状态 */
  Status: number;
  /** 集群状态描述 */
  StatusDesc: string;
  /** 创建时间 */
  CreateTime: string;
  /** 到期时间 */
  PeriodEndTime: string;
  /** 主机数 */
  HostNum: number;
  /** Db实例数 */
  DbNum: number;
  /** 分配策略, 0:紧凑, 1:均匀 */
  AssignStrategy: number;
  /** 总主机CPU(单位:核) */
  CpuSpec: number;
  /** 总已分配CPU(单位:核) */
  CpuAssigned: number;
  /** 总可分配CPU(单位:核) */
  CpuAssignable: number;
  /** 总主机内存(单位:GB) */
  MemorySpec: number;
  /** 总已分配内存(单位:GB) */
  MemoryAssigned: number;
  /** 总可分配内存(单位:GB) */
  MemoryAssignable: number;
  /** 总机器磁盘(单位:GB) */
  DiskSpec: number;
  /** 总已分配磁盘(单位:GB) */
  DiskAssigned: number;
  /** 总可分配磁盘(单位:GB) */
  DiskAssignable: number;
  /** 可用区 */
  Zone: string;
  /** 金融围笼ID */
  FenceId: string | null;
  /** 所属集群ID(默认集群为空) */
  ClusterId: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeInstanceListRequest {
  /** 分页返回数量 */
  Limit?: number;
  /** 分页偏移量 */
  Offset?: number;
  /** 排序字段，createTime,instancename两者之一 */
  OrderBy?: string;
  /** 排序规则，desc,asc两者之一 */
  SortBy?: string;
  /** 按产品过滤，0:CDB, 1:TDSQL */
  ProductId?: number[];
  /** 按实例ID过滤 */
  InstanceId?: string[];
  /** 按实例名称过滤 */
  InstanceName?: string[];
  /** 按金融围笼ID过滤 */
  FenceId?: string[];
  /** 按实例状态过滤, -1:已隔离, 0:创建中, 1:运行中, 2:扩容中, 3:删除中 */
  Status?: number[];
  /** 按所属集群ID过滤 */
  ClusterId?: string[];
}

declare interface DescribeInstanceListResponse {
  /** 独享集群列表 */
  Instances: DescribeInstanceDetail[];
  /** 独享集群实例总数 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeInstancesRequest {
  /** 集群类型: 0 一主一备, 1 一主两备...N-1 一主N备 */
  InstanceTypes?: number[];
  /** 产品ID: 0 MYSQL，1 TDSQL */
  ProductIds?: number[];
  /** 集群uuid: 如 dbdc-q810131s */
  InstanceIds?: string[];
  /** 是否按金融围笼标志搜索 */
  FenceFlag?: boolean;
  /** 按实例名字模糊匹配 */
  InstanceName?: string;
  /** 每页数目, 整型 */
  PageSize?: number;
  /** 页码, 整型 */
  PageNumber?: number;
  /** 排序字段，枚举：createtime,groupname */
  OrderBy?: string;
  /** 排序方式: asc升序, desc降序 */
  OrderByType?: string;
  /** 集群状态: -2 已删除, -1 已隔离, 0 创建中, 1 运行中, 2 扩容中, 3 删除中 */
  InstanceStatus?: number;
}

declare interface DescribeInstancesResponse {
  /** 集群数量 */
  TotalCount?: number;
  /** 集群扩展信息 */
  Instances?: InstanceExpand[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyInstanceNameRequest {
  /** 独享集群实例Id */
  InstanceId: string;
  /** 独享集群实例名称 */
  InstanceName?: string;
}

declare interface ModifyInstanceNameResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

/** {@link Dbdc 云数据库独享集群} */
declare interface Dbdc {
  (): Versions;
  /** {@link DescribeDBInstances 查询独享集群内的DB实例列表}({@link DescribeDBInstancesRequest 请求参数}): {@link DescribeDBInstancesResponse 返回参数} */
  DescribeDBInstances(data: DescribeDBInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBInstancesResponse>;
  /** {@link DescribeHostList 查询主机列表}({@link DescribeHostListRequest 请求参数}): {@link DescribeHostListResponse 返回参数} */
  DescribeHostList(data: DescribeHostListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeHostListResponse>;
  /** {@link DescribeInstanceDetail 查询独享集群详情}({@link DescribeInstanceDetailRequest 请求参数}): {@link DescribeInstanceDetailResponse 返回参数} */
  DescribeInstanceDetail(data: DescribeInstanceDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceDetailResponse>;
  /** {@link DescribeInstanceList 查询独享集群实例列表}({@link DescribeInstanceListRequest 请求参数}): {@link DescribeInstanceListResponse 返回参数} */
  DescribeInstanceList(data?: DescribeInstanceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceListResponse>;
  /** {@link DescribeInstances 查询独享集群列表}({@link DescribeInstancesRequest 请求参数}): {@link DescribeInstancesResponse 返回参数} */
  DescribeInstances(data?: DescribeInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstancesResponse>;
  /** {@link ModifyInstanceName 修改独享集群名称}({@link ModifyInstanceNameRequest 请求参数}): {@link ModifyInstanceNameResponse 返回参数} */
  ModifyInstanceName(data: ModifyInstanceNameRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyInstanceNameResponse>;
}

export declare type Versions = ["2020-10-29"];

export default Dbdc;