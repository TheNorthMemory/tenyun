/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 组件设置列表 */
declare interface CreateInstancesComponent {
  /** 底层组件名，需要和产品模型中的保持一致 */
  Component: string;
  /** 组件cpu大小 */
  Cpu: number;
  /** 组件内存大小 */
  Memory: number;
  /** 业务节点数 */
  ReplicaNum: number;
  /** 自定义组件名 */
  Name?: string;
  /** 组件磁盘大小 */
  StorageSize?: number;
  /** 磁盘类型 */
  StorageType?: string;
  /** 组件额外参数，通过JSON提交 */
  Params?: string;
}

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
  /** 产品版本，0-标准版，1-容量增强版 */
  ProductType?: number;
  /** 实例类型 */
  InstanceType?: string;
  /** 节点类型 */
  NodeType?: string;
  /** 外网地址。 */
  WanAddress?: string;
  /** 隔离时间 */
  IsolateAt?: string;
  /** 是否自动续费。0: 不自动续费(可以支持特权不停服)；1:自动续费；2:到期不续费. */
  AutoRenew?: number;
  /** 任务状态：0-无任务；1-待执行任务；2-密钥更新中；3-网络变更中；4-参数变更中；5-embedding变更中；6-ai套件变更中；7-滚动升级中；8-纵向扩容中；9-纵向缩容中；10-横向扩容中；11-横向缩容中 */
  TaskStatus?: number;
  /** 绑定的安全组id */
  SecurityGroupIds?: string[];
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

declare interface CreateInstanceRequest {
  /** 私有网络 ID。 */
  VpcId: string;
  /** 私有网络 VPC 的子网 ID。 */
  SubnetId: string;
  /** 指定实例计费方式。- 0：按量付费。- 1：包年包月。 */
  PayMode: number;
  /** 设置实例名称。仅支持长度不超过 60 的中文/英文/数字/-/_。 */
  InstanceName?: string;
  /** 安全组 ID。 */
  SecurityGroupIds?: string[];
  /** 若计费方式为包年包月，指定包年包月续费的时长。- 单位：月。- 取值范围：1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 24, 36。默认为1。 */
  PayPeriod?: number;
  /** 若为包年包月计费，需指定是否开启自动续费。- 0：不开启自动续费。- 1：开启自动续费。 */
  AutoRenew?: number;
  /** 实例额外参数，通过json提交。 */
  Params?: string;
  /** 以数组形式列出标签信息。 */
  ResourceTags?: Tag[];
  /** 指定实例所属项目 ID。 */
  Project?: string;
  /** 实例类型。- base：免费测试版。- single：单机版。- cluster：高可用版。 */
  InstanceType?: string;
  /** 实例类型为高可用版，需指定可用区选项。- two：两可用区。- three：三可用区。 */
  Mode?: string;
  /** 购买实例数量。 */
  GoodsNum?: number;
  /** 网络类型。VPC或TCS */
  NetworkType?: string;
  /** 实例所应用的参数模板 ID。 */
  TemplateId?: string;
  /** 组件具体设置列表。 */
  Components?: CreateInstancesComponent[];
  /** 实例类型为高可用版，通过该参数指定主可用区。 */
  Zone?: string;
  /** 实例类型为高可用版，通过该参数指定备可用区。 */
  SlaveZones?: string[];
  /** 是否长期有效 */
  IsNoExpired?: boolean;
  /** 引擎名称，业务自定义。 */
  EngineName?: string;
  /** 引擎版本，业务自定义。 */
  EngineVersion?: string;
  /** 实例描述。 */
  Brief?: string;
  /** 负责人信息。 */
  Chief?: string;
  /** DBA人员信息 */
  DBA?: string;
  /** 指定实例的节点类型。具体信息，请参见[选择节点类型](https://cloud.tencent.com/document/product/1709/113399)。- compute：计费型。- normal：标准型。- store：存储型。 */
  NodeType?: string;
  /** 指定实例所需的 CPU 核数。实例类型不同，支持的 CPU 核数存在差异。- 计算型： 1、2、4、8、16、24、32。- 标准型： 1、2、4、8、12、16。- 存储型： 1、2、4、6、8。 */
  Cpu?: number;
  /** 指定实例所需的内存大小。单位：GB。选择具体规格，请参见[配置规格（选型）](https://cloud.tencent.com/document/product/1709/113399)。 */
  Memory?: number;
  /** 指定实例所需的磁盘大小，单位：GB。选择具体规格，请参见[配置规格（选型）](https://cloud.tencent.com/document/product/1709/113399)。 */
  DiskSize?: number;
  /** 指定实例所需配置的节点数量。选择方法，请参见[配置规格（选型）](https://cloud.tencent.com/document/product/1709/113399)。 */
  WorkerNodeNum?: number;
}

declare interface CreateInstanceResponse {
  /** 实例 ID。 */
  InstanceIds?: string[];
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

declare interface DescribeInstanceMaintenanceWindowRequest {
  /** 指定查询维护时间窗的具体实例 ID。 */
  InstanceId: string;
}

declare interface DescribeInstanceMaintenanceWindowResponse {
  /** 实例 ID。 */
  InstanceId?: string;
  /** 维护时间窗开始时间。 */
  StartTime?: string;
  /** 维护时间窗结束时间。 */
  EndTime?: string;
  /** 维护时间窗时长。单位：小时。 */
  TimeSpan?: number;
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
  /** 根据实例vip搜索实例 */
  Networks?: string[];
}

declare interface DescribeInstancesResponse {
  /** 实例列表。 */
  Items?: InstanceInfo[];
  /** 实例总数。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DestroyInstancesRequest {
  /** 以数组形式指定待销毁下线的实例 ID。 */
  InstanceIds: string[];
}

declare interface DestroyInstancesResponse {
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

declare interface IsolateInstanceRequest {
  /** 指定需隔离的实例 ID。 */
  InstanceId: string;
}

declare interface IsolateInstanceResponse {
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

declare interface ModifyInstanceMaintenanceWindowRequest {
  /** 指定需修改维护时间窗的实例 ID。 */
  InstanceId: string;
  /** 维护时间窗开始时间。取值范围为"00:00-23:00"的任意整点，如01:00。 */
  StartTime: string;
  /** 设置维护时间窗的时长。根据指定的维护时间窗开始时间与时长可确定维护时间窗的范围。- 单位：小时。- 取值范围：3、6、8、10、12。 */
  TimeSpan: number;
}

declare interface ModifyInstanceMaintenanceWindowResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RecoverInstanceRequest {
  /** 指定待恢复的实例 ID。 */
  InstanceId: string;
  /** 若实例为包年包月计费，需通过该参数指定续费的时长。- 单位：月。- 取值范围：1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 24, 36。默认为1。 */
  PayPeriod?: number;
}

declare interface RecoverInstanceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ScaleOutInstanceRequest {
  /** 指定需扩容节点数量的实例 ID。 */
  InstanceId: string;
  /** 指定扩容后的节点数量。选项范围起始于当前实例已有的节点数，上限为30个节点。 */
  ReplicaNum: number;
  /** 指定水平扩容增加节点数量的时间。- false：默认值，指在下一个维护时间段内执行增加节点数的任务。实例列表中“状态”列将显示“待执行配置变更”，等到维护时间窗内启动扩容任务。维护时间的更多信息，请参维护时间窗。- true：立即执行增加节点数的任务，请确保此时没有重大业务操作。 */
  RunNow?: boolean;
}

declare interface ScaleOutInstanceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ScaleUpInstanceRequest {
  /** 指定需升级配置的实例 ID。 */
  InstanceId: string;
  /** 指定升级配置后的 CPU 核数。- 节点规格可选项（CPU & 内存）必须 >= 当前配置。- 可选择的规格信息，请参见[选择节点规格与数量](https://cloud.tencent.com/document/product/1709/113399)。 */
  Cpu: number;
  /** 指定升级配置后的内存大小，单位为：GB。- 节点规格可选项（CPU & 内存）必须 >= 当前配置。- 不同实例类型对 CPU 与内存资源的配置比例有不同的要求。例如，计算型实例，CPU 与内存的分配比例要求为 1:2。CPU 被指定为 4 核，那么内存则应被指定为 8GB。节点规格的详细信息，请参见[选择节点规格与数量](https://cloud.tencent.com/document/product/1709/113399)。 */
  Memory: number;
  /** 指定升级配置后的磁盘容量。- 单位：GB。- 取值范围为：[10,1000]。- 取值必须为10的倍数。 */
  StorageSize: number;
  /** 指定垂直扩容升级节点配置的时间。- false：默认值，指在下一个维护时间段内执行升配节点规格的任务。实例列表中“状态”列将显示“待执行配置变更”，等到维护时间窗内启动任务。维护时间的更多信息，请参见维护时间窗。- true：立即执行升级配置的任务，请确保此时没有重大业务操作。 */
  RunNow?: boolean;
}

declare interface ScaleUpInstanceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Vdb 向量数据库} */
declare interface Vdb {
  (): Versions;
  /** 绑定安全组 {@link AssociateSecurityGroupsRequest} {@link AssociateSecurityGroupsResponse} */
  AssociateSecurityGroups(data: AssociateSecurityGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<AssociateSecurityGroupsResponse>;
  /** 创建实例 {@link CreateInstanceRequest} {@link CreateInstanceResponse} */
  CreateInstance(data: CreateInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateInstanceResponse>;
  /** 查询实例安全组详情 {@link DescribeDBSecurityGroupsRequest} {@link DescribeDBSecurityGroupsResponse} */
  DescribeDBSecurityGroups(data: DescribeDBSecurityGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBSecurityGroupsResponse>;
  /** 查询维护时间窗 {@link DescribeInstanceMaintenanceWindowRequest} {@link DescribeInstanceMaintenanceWindowResponse} */
  DescribeInstanceMaintenanceWindow(data: DescribeInstanceMaintenanceWindowRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceMaintenanceWindowResponse>;
  /** 查询实例pod列表 {@link DescribeInstanceNodesRequest} {@link DescribeInstanceNodesResponse} */
  DescribeInstanceNodes(data: DescribeInstanceNodesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceNodesResponse>;
  /** 查询实例列表 {@link DescribeInstancesRequest} {@link DescribeInstancesResponse} */
  DescribeInstances(data?: DescribeInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstancesResponse>;
  /** 销毁实例 {@link DestroyInstancesRequest} {@link DestroyInstancesResponse} */
  DestroyInstances(data: DestroyInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DestroyInstancesResponse>;
  /** 安全组批量解绑云资源 {@link DisassociateSecurityGroupsRequest} {@link DisassociateSecurityGroupsResponse} */
  DisassociateSecurityGroups(data: DisassociateSecurityGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DisassociateSecurityGroupsResponse>;
  /** 隔离实例 {@link IsolateInstanceRequest} {@link IsolateInstanceResponse} */
  IsolateInstance(data: IsolateInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<IsolateInstanceResponse>;
  /** 修改云数据库安全组 {@link ModifyDBInstanceSecurityGroupsRequest} {@link ModifyDBInstanceSecurityGroupsResponse} */
  ModifyDBInstanceSecurityGroups(data: ModifyDBInstanceSecurityGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDBInstanceSecurityGroupsResponse>;
  /** 修改维护时间窗 {@link ModifyInstanceMaintenanceWindowRequest} {@link ModifyInstanceMaintenanceWindowResponse} */
  ModifyInstanceMaintenanceWindow(data: ModifyInstanceMaintenanceWindowRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyInstanceMaintenanceWindowResponse>;
  /** 恢复实例 {@link RecoverInstanceRequest} {@link RecoverInstanceResponse} */
  RecoverInstance(data: RecoverInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<RecoverInstanceResponse>;
  /** 增加节点数（水平扩容） {@link ScaleOutInstanceRequest} {@link ScaleOutInstanceResponse} */
  ScaleOutInstance(data: ScaleOutInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<ScaleOutInstanceResponse>;
  /** 升配节点规格（垂直扩容） {@link ScaleUpInstanceRequest} {@link ScaleUpInstanceResponse} */
  ScaleUpInstance(data: ScaleUpInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<ScaleUpInstanceResponse>;
}

export declare type Versions = ["2023-06-16"];

export default Vdb;
