/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 安全组入站规则 */
declare interface Inbound {
  /** 策略，ACCEPT或者DROP。 */
  Action?: string;
  /** 地址组id代表的地址集合。 */
  AddressModule?: string;
  /** 来源Ip或Ip段，例如192.168.0.0/16。 */
  CidrIp?: string;
  /** 描述。 */
  Desc?: string;
  /** 网络协议，支持udp、tcp等。 */
  IpProtocol?: string;
  /** 端口。 */
  PortRange?: string;
  /** 服务组id代表的协议和端口集合。 */
  ServiceModule?: string;
  /** 安全组id代表的地址集合。 */
  Id?: string;
}

/** 实例信息，用于实例列表 */
declare interface InstanceInfo {
  /** 实例ID。 */
  InstanceId?: string;
  /** 实例自定义名称。 */
  Name?: string;
  /** 用户APPID。 */
  AppId?: number;
  /** 地域。 */
  Region?: string;
  /** 可用区。 */
  Zone?: string;
  /** 产品。 */
  Product?: string;
  /** 网络信息。 */
  Networks?: Network[];
  /** 分片信息。 */
  ShardNum?: number;
  /** 副本数。 */
  ReplicaNum?: number;
  /** CPU. */
  Cpu?: number;
  /** 内存。 */
  Memory?: number;
  /** 磁盘。 */
  Disk?: number;
  /** 健康得分。 */
  HealthScore?: number | null;
  /** 异常告警。 */
  Warning?: number | null;
  /** 所属项目。 */
  Project?: string | null;
  /** 所属标签。 */
  ResourceTags?: Tag[];
  /** 创建时间。 */
  CreatedAt?: string;
  /** 资源状态。 */
  Status?: string;
  /** 引擎名称。 */
  EngineName?: string;
  /** 引擎版本。 */
  EngineVersion?: string;
  /** api版本 */
  ApiVersion?: string;
  /** 计费模式。 */
  PayMode?: number;
  /** 差异化扩展信息, json格式。 */
  Extend?: string;
  /** 过期时间。 */
  ExpiredAt?: string;
  /** 是否不过期(永久)。 */
  IsNoExpired?: boolean;
  /** 外网地址。 */
  WanAddress?: string;
  /** 隔离时间 */
  IsolateAt?: string;
  /** 是否自动续费。0: 不自动续费(可以支持特权不停服)；1:自动续费；2:到期不续费. */
  AutoRenew?: number;
  /** 任务状态：0-无任务；1-待执行任务；2-密钥更新中；3-网络变更中；4-参数变更中；5-embedding变更中；6-ai套件变更中；7-滚动升级中；8-纵向扩容中；9-纵向缩容中；10-横向扩容中；11-横向缩容中 */
  TaskStatus?: number;
}

/** 网络信息 */
declare interface Network {
  /** VpcId(VPC网络下有效) */
  VpcId?: string;
  /** 子网Id(VPC网络下有效)。 */
  SubnetId?: string;
  /** 内网访问IP。 */
  Vip?: string;
  /** 内网访问Port。 */
  Port?: number;
  /** 旧 ip 保留时长，单位天 */
  PreserveDuration?: number;
  /** 旧 ip 到期时间 */
  ExpireTime?: string;
}

/** 实例pod信息， pod 名称 */
declare interface NodeInfo {
  /** Pod名称。 */
  Name?: string;
  /** pod状态 */
  Status?: string;
}

/** 安全组出站规则 */
declare interface Outbound {
  /** 策略，ACCEPT或者DROP。 */
  Action?: string;
  /** 地址组id代表的地址集合。 */
  AddressModule?: string;
  /** 来源Ip或Ip段，例如192.168.0.0/16。 */
  CidrIp?: string;
  /** 描述。 */
  Desc?: string;
  /** 网络协议，支持udp、tcp等。 */
  IpProtocol?: string;
  /** 端口。 */
  PortRange?: string;
  /** 服务组id代表的协议和端口集合。 */
  ServiceModule?: string;
  /** 安全组id代表的地址集合。 */
  Id?: string;
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
  TagKey: string;
  /** 标签值 */
  TagValue: string;
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
  /** 实例ID。 */
  InstanceId: string;
  /** limit */
  Limit?: number;
  /** offset */
  Offset?: number;
  /** component */
  Component?: string;
}

declare interface DescribeInstanceNodesResponse {
  /** 实例pod列表。 */
  Items?: NodeInfo[];
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
  /** 按照api版本筛选实例 */
  ApiVersions?: string[];
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
  /** 任务状态：1-待执行任务；2-密钥更新中；3-网络变更中；4-参数变更中；5-embedding变更中；6-ai套件变更中；7-滚动升级中；8-纵向扩容中；9-纵向缩容中；10-横向扩容中；11-横向缩容中 */
  TaskStatus?: number[];
}

declare interface DescribeInstancesResponse {
  /** 实例列表。 */
  Items?: InstanceInfo[];
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
  /** 查询实例pod列表 {@link DescribeInstanceNodesRequest} {@link DescribeInstanceNodesResponse} */
  DescribeInstanceNodes(data: DescribeInstanceNodesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceNodesResponse>;
  /** 查询实例列表 {@link DescribeInstancesRequest} {@link DescribeInstancesResponse} */
  DescribeInstances(data?: DescribeInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstancesResponse>;
  /** 安全组批量解绑云资源 {@link DisassociateSecurityGroupsRequest} {@link DisassociateSecurityGroupsResponse} */
  DisassociateSecurityGroups(data: DisassociateSecurityGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DisassociateSecurityGroupsResponse>;
  /** 修改云数据库安全组 {@link ModifyDBInstanceSecurityGroupsRequest} {@link ModifyDBInstanceSecurityGroupsResponse} */
  ModifyDBInstanceSecurityGroups(data: ModifyDBInstanceSecurityGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDBInstanceSecurityGroupsResponse>;
}

export declare type Versions = ["2023-06-16"];

export default Vdb;
