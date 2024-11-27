/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 目标组关联到的规则 */
declare interface AssociationItem {
  /** 关联到的网关负载均衡实例ID */
  LoadBalancerId?: string;
  /** 网关负载均衡实例名称 */
  LoadBalancerName?: string;
}

/** 过滤器条件 */
declare interface Filter {
  /** 过滤器的名称 */
  Name: string;
  /** 过滤器的值数组 */
  Values: string[];
}

/** 网关负载均衡实例的信息 */
declare interface GatewayLoadBalancer {
  /** 网关负载均衡实例 ID。 */
  LoadBalancerId?: string;
  /** 网关负载均衡实例的名称。 */
  LoadBalancerName?: string;
  /** 网关负载均衡所属私有网络。 */
  VpcId?: string | null;
  /** 网关负载均衡所属子网。 */
  SubnetId?: string;
  /** 网关负载均衡提供服务的虚拟IP。 */
  Vips?: string[];
  /** 网关负载均衡实例状态。0：创建中，1：正常运行，3：删除中。 */
  Status?: number;
  /** 关联的目标组唯一ID。 */
  TargetGroupId?: string | null;
  /** 是否开启删除保护功能。 */
  DeleteProtect?: boolean | null;
  /** 负载均衡实例的标签信息。 */
  Tags?: TagInfo[] | null;
  /** 创建时间。 */
  CreateTime?: string;
  /** 网关负载均衡实例的计费类型，POSTPAID_BY_HOUR：按量计费 */
  ChargeType?: string | null;
  /** 0：表示未被隔离，1：表示被隔离。 */
  Isolation?: number | null;
  /** 负载均衡实例被隔离的时间 */
  IsolatedTime?: string | null;
}

/** 描述了单项的价格信息 */
declare interface ItemPrice {
  /** 后付费单价，单位：元。 */
  UnitPrice?: number | null;
  /** 后付费计价单元，可取值范围： HOUR：表示计价单元是按每小时来计算。当前涉及该计价单元的场景有：实例按小时后付费（POSTPAID_BY_HOUR）。 */
  ChargeUnit?: string | null;
  /** 预支费用的原价，单位：元。 */
  OriginalPrice?: number | null;
  /** 预支费用的折扣价，单位：元。 */
  DiscountPrice?: number | null;
  /** 后付费的折扣单价，单位:元。 */
  UnitPriceDiscount?: number | null;
  /** 折扣，如20.0代表2折。 */
  Discount?: number | null;
}

/** 表示网关负载均衡的价格 */
declare interface Price {
  /** 描述了实例价格。 */
  InstancePrice?: ItemPrice | null;
  /** 描述了GLCU的价格。 */
  LcuPrice?: ItemPrice | null;
}

/** 网关负载均衡的标签信息 */
declare interface TagInfo {
  /** 标签的键 */
  TagKey: string;
  /** 标签的值 */
  TagValue: string;
}

/** 规则与目标组的关联关系。 */
declare interface TargetGroupAssociation {
  /** 网关负载均衡实例ID。 */
  LoadBalancerId: string;
  /** 目标组ID。 */
  TargetGroupId: string;
}

/** 目标组绑定的后端服务器 */
declare interface TargetGroupBackend {
  /** 目标组ID */
  TargetGroupId?: string;
  /** 后端服务的类型，可取：CVM、ENI（即将支持） */
  Type?: string;
  /** 后端服务的唯一 ID */
  InstanceId?: string;
  /** 后端服务的监听端口 */
  Port?: number;
  /** 后端服务的转发权重，取值范围：[0, 100]，默认为 10。 */
  Weight?: number;
  /** 后端服务的外网 IP */
  PublicIpAddresses?: string[] | null;
  /** 后端服务的内网 IP */
  PrivateIpAddresses?: string[] | null;
  /** 后端服务的实例名称 */
  InstanceName?: string | null;
  /** 后端服务被绑定的时间 */
  RegisteredTime?: string | null;
  /** 弹性网卡唯一ID */
  EniId?: string | null;
  /** 后端服务的可用区ID */
  ZoneId?: number | null;
}

/** 目标组健康检查详情 */
declare interface TargetGroupHealthCheck {
  /** 是否开启健康检查。 */
  HealthSwitch: boolean;
  /** 健康检查使用的协议。支持ping和tcp，默认为ping。- PING: icmp- TCP: tcp */
  Protocol?: string;
  /** 健康检查端口，探测协议未tcp时，该参数必填。 */
  Port?: number;
  /** 健康检查超时时间。 默认为2秒。 可配置范围：2 - 30秒。 */
  Timeout?: number;
  /** 检测间隔时间。 默认为5秒。 可配置范围：2 - 300秒。 */
  IntervalTime?: number;
  /** 检测健康阈值。 默认为3秒。 可配置范围：2 - 10次。 */
  HealthNum?: number;
  /** 检测不健康阈值。 默认为3秒。 可配置范围：2 - 10次。 */
  UnHealthNum?: number;
}

/** 目标组信息 */
declare interface TargetGroupInfo {
  /** 目标组ID */
  TargetGroupId?: string;
  /** 目标组的vpcid */
  VpcId?: string;
  /** 目标组的名字 */
  TargetGroupName?: string;
  /** 目标组的默认端口 */
  Port?: number | null;
  /** 目标组的创建时间 */
  CreatedTime?: string;
  /** 目标组的修改时间 */
  UpdatedTime?: string;
  /** 关联到的规则数组。在DescribeTargetGroupList接口调用时无法获取到该参数。 */
  AssociatedRule?: AssociationItem[] | null;
  /** 后端协议类型。 */
  Protocol?: string | null;
  /** 调度算法。ip_hash_3：弹性哈希 */
  ScheduleAlgorithm?: string | null;
  /** 健康检查详情。 */
  HealthCheck?: TargetGroupHealthCheck | null;
  /** 是否支持全死全活。 */
  AllDeadToAlive?: boolean | null;
  /** 目标组已关联的规则数。 */
  AssociatedRuleCount?: number | null;
  /** 目标组内的实例数量。 */
  RegisteredInstancesCount?: number | null;
}

/** 目标组实例 */
declare interface TargetGroupInstance {
  /** 目标组实例的内网IP。 */
  BindIP: string;
  /** 目标组实例的端口，只支持6081。 */
  Port?: number;
  /** 目标组实例的权重，只支持0或16，非0统一按16处理。 */
  Weight?: number;
}

/** 用于目标组后端rs健康检查状态。 */
declare interface TargetGroupInstanceStatus {
  /** 后端rs的IP */
  InstanceIp?: string;
  /** 健康检查状态，参数值及含义如下：● on：表示探测中。● off：表示健康检查关闭。● health：表示健康。● unhealth：表示异常。 */
  Status?: string;
}

declare interface AssociateTargetGroupsRequest {
  /** 绑定的关系数组。一次请求最多支持20个。 */
  Associations: TargetGroupAssociation[];
}

declare interface AssociateTargetGroupsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateGatewayLoadBalancerRequest {
  /** 网关负载均衡后端目标设备所属的私有网络 ID，如vpc-12345678，可以通过 DescribeVpcEx 接口获取。 不填此参数则默认为DefaultVPC。创建内网负载均衡实例时，此参数必填。 */
  VpcId: string;
  /** 网关负载均衡后端目标设备所属的私有网络的子网ID。 */
  SubnetId: string;
  /** 网关负载均衡实例名称。可支持输入1-60个字符。不填写时默认自动生成。 */
  LoadBalancerName?: string;
  /** 创建网关负载均衡的个数，默认值为 1。批量创建数量最大支持10个。 */
  Number?: number;
  /** 购买网关负载均衡的同时，给负载均衡打上标签，最大支持20个标签键值对。 */
  Tags?: TagInfo[];
  /** 网关负载均衡实例计费类型，当前只支持传POSTPAID_BY_HOUR，默认是POSTPAID_BY_HOUR。 */
  LBChargeType?: string;
}

declare interface CreateGatewayLoadBalancerResponse {
  /** 由网关负载均衡实例唯一 ID 组成的数组。存在某些场景，如创建出现延迟时，此字段可能返回为空；此时可以根据接口返回的RequestId或DealName参数，通过DescribeTaskStatus接口查询创建的资源ID。 */
  LoadBalancerIds?: string[] | null;
  /** 订单号。 */
  DealName?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateTargetGroupRequest {
  /** 目标组名称，限定60个字符。 */
  TargetGroupName?: string;
  /** 目标组的vpcid属性，不填则使用默认vpc */
  VpcId?: string;
  /** 目标组的默认端口， 后续添加服务器时可使用该默认端口。Port和TargetGroupInstances.N中的port二者必填其一。 */
  Port?: number;
  /** 目标组绑定的后端服务器 */
  TargetGroupInstances?: TargetGroupInstance[];
  /** 网关负载均衡目标组协议。- TENCENT_GENEVE ：GENEVE 标准协议- AWS_GENEVE：GENEVE 兼容协议（需要提交工单申请开白） */
  Protocol?: string;
  /** 健康检查设置。 */
  HealthCheck?: TargetGroupHealthCheck;
  /** 均衡算法。- IP_HASH_3_ELASTIC：弹性哈希 */
  ScheduleAlgorithm?: string;
  /** 是否支持全死全活。默认支持。 */
  AllDeadToAlive?: boolean;
}

declare interface CreateTargetGroupResponse {
  /** 创建目标组后生成的id */
  TargetGroupId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteGatewayLoadBalancerRequest {
  /** 要删除的网关负载均衡实例 ID数组，数组大小最大支持20。 */
  LoadBalancerIds: string[];
}

declare interface DeleteGatewayLoadBalancerResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteTargetGroupsRequest {
  /** 目标组ID列表。 */
  TargetGroupIds: string[];
}

declare interface DeleteTargetGroupsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeregisterTargetGroupInstancesRequest {
  /** 目标组ID。 */
  TargetGroupId: string;
  /** 待解绑的服务器信息。 */
  TargetGroupInstances: TargetGroupInstance[];
}

declare interface DeregisterTargetGroupInstancesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeGatewayLoadBalancersRequest {
  /** 网关负载均衡实例ID。支持批量筛选的实例ID数量上限为20个。 */
  LoadBalancerIds?: string[];
  /** 一次批量返回网关负载均衡实例的数量，默认为20，最大值为100。 */
  Limit?: number;
  /** 返回网关负载均衡实例列表的起始偏移量，默认0。 */
  Offset?: number;
  /** 查询负载均衡详细信息列表的过滤条件，每次请求的Filters的上限为10，Filter.Values的上限为100。Filter.Name和Filter.Values皆为必填项。详细的过滤条件如下：- VpcId - String - 是否必填：否 - （过滤条件）按照网关负载均衡实例所属的私有网络过滤，如“vpc-bhqk****”。- Vips - String - 是否必填：否 - （过滤条件）按照网关负载均衡实例所属的私有网络过滤，如“10.1.1.1” */
  Filters?: Filter[];
  /** 搜索字段，模糊匹配名称、VIP。 */
  SearchKey?: string;
}

declare interface DescribeGatewayLoadBalancersResponse {
  /** 满足过滤条件的负载均衡实例总数。此数值与入参中的Limit无关。 */
  TotalCount?: number;
  /** 返回的网关负载均衡实例数组。 */
  LoadBalancerSet?: GatewayLoadBalancer[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTargetGroupInstanceStatusRequest {
  /** 目标组唯一id */
  TargetGroupId: string;
  /** 目标组绑定的后端服务ip列表 */
  TargetGroupInstanceIps?: string[];
}

declare interface DescribeTargetGroupInstanceStatusResponse {
  /** 健康检查后端rs状态列表 */
  TargetGroupInstanceSet?: TargetGroupInstanceStatus[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTargetGroupInstancesRequest {
  /** 过滤条件，当前仅支持TargetGroupId，BindIP，InstanceId过滤。 */
  Filters: Filter[];
  /** 显示数量限制，默认20。 */
  Limit?: number;
  /** 显示的偏移量，默认为0。 */
  Offset?: number;
}

declare interface DescribeTargetGroupInstancesResponse {
  /** 本次查询的结果数量。 */
  TotalCount?: number;
  /** 绑定的服务器信息。 */
  TargetGroupInstanceSet?: TargetGroupBackend[];
  /** 实际统计数量，不受Limit、Offset、CAM的影响。 */
  RealCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTargetGroupListRequest {
  /** 目标组ID数组。 */
  TargetGroupIds?: string[];
  /** 过滤条件数组，支持TargetGroupVpcId和TargetGroupName。 */
  Filters?: Filter[];
  /** 显示的偏移起始量。 */
  Offset?: number;
  /** 显示条数限制，默认为20。 */
  Limit?: number;
}

declare interface DescribeTargetGroupListResponse {
  /** 显示的结果数量。 */
  TotalCount?: number;
  /** 显示的目标组信息集合。 */
  TargetGroupSet?: TargetGroupInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTargetGroupsRequest {
  /** 目标组ID，与Filters互斥。 */
  TargetGroupIds?: string[];
  /** 显示条数限制，默认为20。 */
  Limit?: number;
  /** 显示的偏移起始量。 */
  Offset?: number;
  /** 过滤条件数组，支持TargetGroupVpcId和TargetGroupName。 */
  Filters?: Filter[];
}

declare interface DescribeTargetGroupsResponse {
  /** 显示的结果数量。 */
  TotalCount?: number;
  /** 显示的目标组信息集合。 */
  TargetGroupSet?: TargetGroupInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTaskStatusRequest {
  /** 请求ID，即接口返回的 RequestId 参数。 */
  TaskId?: string;
}

declare interface DescribeTaskStatusResponse {
  /** 任务的当前状态。 0：成功，1：失败，2：进行中。 */
  Status?: number;
  /** 由负载均衡实例唯一 ID 组成的数组。 */
  LoadBalancerIds?: string[] | null;
  /** 辅助描述信息，如失败原因等。 */
  Message?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DisassociateTargetGroupsRequest {
  /** 待解绑的目标组列表。 */
  Associations: TargetGroupAssociation[];
}

declare interface DisassociateTargetGroupsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface InquirePriceCreateGatewayLoadBalancerRequest {
  /** 询价的网关负载均衡实例个数，默认为1 */
  GoodsNum?: number;
}

declare interface InquirePriceCreateGatewayLoadBalancerResponse {
  /** 该参数表示对应的价格。 */
  Price?: Price;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyGatewayLoadBalancerAttributeRequest {
  /** 网关负载均衡的唯一ID。 */
  LoadBalancerId: string;
  /** 网关负载均衡实例名称。可支持输入1-60个字符。 */
  LoadBalancerName?: string;
}

declare interface ModifyGatewayLoadBalancerAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyTargetGroupAttributeRequest {
  /** 目标组的ID。 */
  TargetGroupId: string;
  /** 目标组的新名称。 */
  TargetGroupName?: string;
  /** 健康检查详情。 */
  HealthCheck?: TargetGroupHealthCheck;
  /** 是否支持全死全活。 */
  AllDeadToAlive?: boolean;
}

declare interface ModifyTargetGroupAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyTargetGroupInstancesWeightRequest {
  /** 目标组ID。 */
  TargetGroupId: string;
  /** 实例绑定配置数组。 */
  TargetGroupInstances: TargetGroupInstance[];
}

declare interface ModifyTargetGroupInstancesWeightResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RegisterTargetGroupInstancesRequest {
  /** 目标组ID */
  TargetGroupId: string;
  /** 服务器实例数组 */
  TargetGroupInstances: TargetGroupInstance[];
}

declare interface RegisterTargetGroupInstancesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Gwlb 网关负载均衡} */
declare interface Gwlb {
  (): Versions;
  /** 负载均衡关联目标组 {@link AssociateTargetGroupsRequest} {@link AssociateTargetGroupsResponse} */
  AssociateTargetGroups(data: AssociateTargetGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<AssociateTargetGroupsResponse>;
  /** 购买网关负载均衡实例 {@link CreateGatewayLoadBalancerRequest} {@link CreateGatewayLoadBalancerResponse} */
  CreateGatewayLoadBalancer(data: CreateGatewayLoadBalancerRequest, config?: AxiosRequestConfig): AxiosPromise<CreateGatewayLoadBalancerResponse>;
  /** 创建目标组 {@link CreateTargetGroupRequest} {@link CreateTargetGroupResponse} */
  CreateTargetGroup(data?: CreateTargetGroupRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTargetGroupResponse>;
  /** 删除网关负载均衡实例 {@link DeleteGatewayLoadBalancerRequest} {@link DeleteGatewayLoadBalancerResponse} */
  DeleteGatewayLoadBalancer(data: DeleteGatewayLoadBalancerRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteGatewayLoadBalancerResponse>;
  /** 删除目标组 {@link DeleteTargetGroupsRequest} {@link DeleteTargetGroupsResponse} */
  DeleteTargetGroups(data: DeleteTargetGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteTargetGroupsResponse>;
  /** 解绑目标组中的实例 {@link DeregisterTargetGroupInstancesRequest} {@link DeregisterTargetGroupInstancesResponse} */
  DeregisterTargetGroupInstances(data: DeregisterTargetGroupInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DeregisterTargetGroupInstancesResponse>;
  /** 查询网关负载均衡实例列表 {@link DescribeGatewayLoadBalancersRequest} {@link DescribeGatewayLoadBalancersResponse} */
  DescribeGatewayLoadBalancers(data?: DescribeGatewayLoadBalancersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeGatewayLoadBalancersResponse>;
  /** 查询目标组后端服务状态 {@link DescribeTargetGroupInstanceStatusRequest} {@link DescribeTargetGroupInstanceStatusResponse} */
  DescribeTargetGroupInstanceStatus(data: DescribeTargetGroupInstanceStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTargetGroupInstanceStatusResponse>;
  /** 获取目标组绑定的实例列表 {@link DescribeTargetGroupInstancesRequest} {@link DescribeTargetGroupInstancesResponse} */
  DescribeTargetGroupInstances(data: DescribeTargetGroupInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTargetGroupInstancesResponse>;
  /** 获取目标组列表 {@link DescribeTargetGroupListRequest} {@link DescribeTargetGroupListResponse} */
  DescribeTargetGroupList(data?: DescribeTargetGroupListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTargetGroupListResponse>;
  /** 查询目标组信息 {@link DescribeTargetGroupsRequest} {@link DescribeTargetGroupsResponse} */
  DescribeTargetGroups(data?: DescribeTargetGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTargetGroupsResponse>;
  /** 查询异步任务状态 {@link DescribeTaskStatusRequest} {@link DescribeTaskStatusResponse} */
  DescribeTaskStatus(data?: DescribeTaskStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTaskStatusResponse>;
  /** 解除负载均衡和目标组的关联关系 {@link DisassociateTargetGroupsRequest} {@link DisassociateTargetGroupsResponse} */
  DisassociateTargetGroups(data: DisassociateTargetGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DisassociateTargetGroupsResponse>;
  /** 购买网关负载均衡询价 {@link InquirePriceCreateGatewayLoadBalancerRequest} {@link InquirePriceCreateGatewayLoadBalancerResponse} */
  InquirePriceCreateGatewayLoadBalancer(data?: InquirePriceCreateGatewayLoadBalancerRequest, config?: AxiosRequestConfig): AxiosPromise<InquirePriceCreateGatewayLoadBalancerResponse>;
  /** 修改网关负载均衡实例的属性 {@link ModifyGatewayLoadBalancerAttributeRequest} {@link ModifyGatewayLoadBalancerAttributeResponse} */
  ModifyGatewayLoadBalancerAttribute(data: ModifyGatewayLoadBalancerAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyGatewayLoadBalancerAttributeResponse>;
  /** 修改目标组属性 {@link ModifyTargetGroupAttributeRequest} {@link ModifyTargetGroupAttributeResponse} */
  ModifyTargetGroupAttribute(data: ModifyTargetGroupAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyTargetGroupAttributeResponse>;
  /** 修改目标组的服务器权重 {@link ModifyTargetGroupInstancesWeightRequest} {@link ModifyTargetGroupInstancesWeightResponse} */
  ModifyTargetGroupInstancesWeight(data: ModifyTargetGroupInstancesWeightRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyTargetGroupInstancesWeightResponse>;
  /** 目标组中添加实例 {@link RegisterTargetGroupInstancesRequest} {@link RegisterTargetGroupInstancesResponse} */
  RegisterTargetGroupInstances(data: RegisterTargetGroupInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<RegisterTargetGroupInstancesResponse>;
}

export declare type Versions = ["2024-09-06"];

export default Gwlb;
