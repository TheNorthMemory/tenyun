/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 安全组入站规则 */
declare interface Inbound {
  /** 策略，ACCEPT或者DROP。 */
  Action: string;
  /** 地址组id代表的地址集合。 */
  AddressModule: string;
  /** 来源Ip或Ip段，例如192.168.0.0/16。 */
  CidrIp: string;
  /** 描述。 */
  Desc: string;
  /** 网络协议，支持udp、tcp等。 */
  IpProtocol: string;
  /** 端口。 */
  PortRange: string;
  /** 服务组id代表的协议和端口集合。 */
  ServiceModule: string;
  /** 安全组id代表的地址集合。 */
  Id: string;
}

/** 实例信息，用于实例列表 */
declare interface InstanceInfo {
  /** 实例ID。 */
  InstanceId?: string | null;
  /** 实例自定义名称。 */
  Name?: string | null;
  /** 用户APPID。 */
  AppId?: number | null;
  /** 地域。 */
  Region?: string | null;
  /** 可用区。 */
  Zone?: string | null;
  /** 产品。 */
  Product?: string | null;
  /** 网络信息。 */
  Networks?: Network[] | null;
  /** 分片信息。 */
  ShardNum?: number | null;
  /** 副本数。 */
  ReplicaNum?: number | null;
  /** CPU. */
  Cpu?: number | null;
  /** 内存。 */
  Memory?: number | null;
  /** 磁盘。 */
  Disk?: number | null;
  /** 健康得分。 */
  HealthScore?: number | null;
  /** 异常告警。 */
  Warning?: number | null;
  /** 所属项目。 */
  Project?: string | null;
  /** 所属标签。 */
  ResourceTags?: Tag[] | null;
  /** 创建时间。 */
  CreatedAt?: string | null;
  /** 资源状态。 */
  Status?: string | null;
  /** 引擎名称。 */
  EngineName?: string | null;
  /** 引擎版本。 */
  EngineVersion?: string | null;
  /** 计费模式。 */
  PayMode?: number | null;
  /** 差异化扩展信息, json格式。 */
  Extend?: string | null;
  /** 过期时间。 */
  ExpiredAt?: string | null;
  /** 是否不过期(永久)。 */
  IsNoExpired?: boolean | null;
  /** 外网地址。 */
  WanAddress?: string | null;
  /** 隔离时间 */
  IsolateAt?: string | null;
  /** 是否自动续费。0: 不自动续费(可以支持特权不停服)；1:自动续费；2:到期不续费. */
  AutoRenew?: number | null;
}

/** 网络信息 */
declare interface Network {
  /** VpcId(VPC网络下有效) */
  VpcId?: string | null;
  /** 子网Id(VPC网络下有效)。 */
  SubnetId?: string | null;
  /** 内网访问IP。 */
  Vip?: string | null;
  /** 内网访问Port。 */
  Port?: number | null;
}

/** 实例pod信息，仅包含 pod 名称 */
declare interface NodeInfo {
  /** Pod名称。 */
  Name?: string | null;
}

/** 安全组出站规则 */
declare interface Outbound {
  /** 策略，ACCEPT或者DROP。 */
  Action: string;
  /** 地址组id代表的地址集合。 */
  AddressModule: string;
  /** 来源Ip或Ip段，例如192.168.0.0/16。 */
  CidrIp: string;
  /** 描述。 */
  Desc: string;
  /** 网络协议，支持udp、tcp等。 */
  IpProtocol: string;
  /** 端口。 */
  PortRange: string;
  /** 服务组id代表的协议和端口集合。 */
  ServiceModule: string;
  /** 安全组id代表的地址集合。 */
  Id: string;
}

/** 安全组规则 */
declare interface SecurityGroup {
  /** 创建时间，时间格式：yyyy-mm-dd hh:mm:ss。 */
  CreateTime?: string;
  /** 项目ID。 */
  ProjectId?: string;
  /** 安全组ID。 */
  SecurityGroupId?: string;
  /** 安全组名称。 */
  SecurityGroupName?: string;
  /** 安全组备注。 */
  SecurityGroupRemark?: string;
  /** 出站规则。 */
  Outbound?: Outbound[];
  /** 入站规则。 */
  Inbound?: Inbound[];
  /** 修改时间，时间格式：yyyy-mm-dd hh:mm:ss。 */
  UpdateTime?: string;
}

/** 标签键值对 */
declare interface Tag {
  /** 标签键 */
  TagKey: string | null;
  /** 标签值 */
  TagValue: string | null;
}

declare interface AssociateSecurityGroupsRequest {
  /** 要绑定的安全组 ID，类似sg-efil7***。 */
  SecurityGroupIds: string[];
  /** 实例 ID，格式如：vdb-c1nl9***，支持指定多个实例 */
  InstanceIds: string[];
}

declare interface AssociateSecurityGroupsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDBSecurityGroupsRequest {
  /** 实例ID，格式如：vdb-c1nl9***。 */
  InstanceId: string;
}

declare interface DescribeDBSecurityGroupsResponse {
  /** 安全组规则。 */
  Groups?: SecurityGroup[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstanceNodesRequest {
  /** limit */
  Limit?: number;
  /** offset */
  Offset?: number;
  /** component */
  Component?: string;
}

declare interface DescribeInstanceNodesResponse {
  /** 实例pod列表。 */
  Items?: NodeInfo[] | null;
  /** 查询结果总数量。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstancesRequest {
  /** 实例ID数组。 */
  InstanceIds?: string[];
  /** 实例名称，支持模糊搜索。 */
  InstanceNames?: string[];
  /** 实例模糊搜索字段。 */
  InstanceKeys?: string[];
  /** 根据状态获取实例， 为空则获取全部非隔离和非下线的实例。 */
  Status?: string[];
  /** 按照引擎筛选实例。 */
  EngineNames?: string[];
  /** 按照版本筛选实例。 */
  EngineVersions?: string[];
  /** 按照创建时间筛选实例。 */
  CreateAt?: string;
  /** 按照可用区筛选实例。 */
  Zones?: string[];
  /** 排序字段。 */
  OrderBy?: string;
  /** 排序方式。 */
  OrderDirection?: string;
  /** 查询开始位置。 */
  Offset?: number;
  /** 列表查询数量。 */
  Limit?: number;
  /** 按照标签筛选实例 */
  ResourceTags?: Tag[];
}

declare interface DescribeInstancesResponse {
  /** 实例列表。 */
  Items?: InstanceInfo[] | null;
  /** 实例总数。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DisassociateSecurityGroupsRequest {
  /** 要绑定的安全组 ID，类似sg-efil****。 */
  SecurityGroupIds: string;
  /** 实例 ID，格式如：vdb-c1nl****，支持指定多个实例。 */
  InstanceIds: string[];
}

declare interface DisassociateSecurityGroupsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDBInstanceSecurityGroupsRequest {
  /** 要修改的安全组ID列表，一个或者多个安全组 ID 组成的数组。 */
  SecurityGroupIds: string[];
  /** 实例ID，格式如：vdb-c9s3****。 */
  InstanceIds: string[];
}

declare interface ModifyDBInstanceSecurityGroupsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Vdb 向量数据库} */
declare interface Vdb {
  (): Versions;
  /** 绑定安全组 {@link AssociateSecurityGroupsRequest} {@link AssociateSecurityGroupsResponse} */
  AssociateSecurityGroups(data: AssociateSecurityGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<AssociateSecurityGroupsResponse>;
  /** 查询实例安全组详情 {@link DescribeDBSecurityGroupsRequest} {@link DescribeDBSecurityGroupsResponse} */
  DescribeDBSecurityGroups(data: DescribeDBSecurityGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBSecurityGroupsResponse>;
  /** 实例pod列表（仅返回 pod 名称） {@link DescribeInstanceNodesRequest} {@link DescribeInstanceNodesResponse} */
  DescribeInstanceNodes(data?: DescribeInstanceNodesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceNodesResponse>;
  /** 查询实例列表 {@link DescribeInstancesRequest} {@link DescribeInstancesResponse} */
  DescribeInstances(data?: DescribeInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstancesResponse>;
  /** 安全组批量解绑云资源 {@link DisassociateSecurityGroupsRequest} {@link DisassociateSecurityGroupsResponse} */
  DisassociateSecurityGroups(data: DisassociateSecurityGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DisassociateSecurityGroupsResponse>;
  /** 修改云数据库安全组 {@link ModifyDBInstanceSecurityGroupsRequest} {@link ModifyDBInstanceSecurityGroupsResponse} */
  ModifyDBInstanceSecurityGroups(data: ModifyDBInstanceSecurityGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDBInstanceSecurityGroupsResponse>;
}

export declare type Versions = ["2023-06-16"];

export default Vdb;
