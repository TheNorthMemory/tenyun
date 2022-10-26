/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** Apollo 环境配置参数 */
declare interface ApolloEnvParam {
  /** 环境名称 */
  Name: string;
  /** 环境内引擎的节点规格 ID */
  EngineResourceSpec: string;
  /** 环境内引擎的节点数量 */
  EngineNodeNum: number;
  /** 配置存储空间大小，以GB为单位 */
  StorageCapacity: number;
  /** VPC ID。在 VPC 的子网内分配一个 IP 作为 ConfigServer 的访问地址 */
  VpcId: string;
  /** 子网 ID。在 VPC 的子网内分配一个 IP 作为 ConfigServer 的访问地址 */
  SubnetId: string;
}

/** 服务治理引擎绑定的kubernetes信息 */
declare interface BoundK8SInfo {
  /** 绑定的kubernetes集群ID */
  BoundClusterId: string;
  /** 绑定的kubernetes的集群类型，分tke和eks两种 */
  BoundClusterType: string | null;
  /** 服务同步模式，all为全量同步，demand为按需同步 */
  SyncMode?: string | null;
}

/** 云原生API网关节点信息。 */
declare interface CloudNativeAPIGatewayNode {
  /** 云原生网关节点 id */
  NodeId: string;
  /** 节点 ip */
  NodeIp: string;
}

/** 获取网关节点信息 */
declare interface DescribeCloudNativeAPIGatewayNodesResult {
  /** 获取云原生API网关节点列表响应结果。 */
  TotalCount: number;
  /** 云原生API网关节点列表。 */
  NodeList: CloudNativeAPIGatewayNode[];
}

/** 实例地域信息描述 */
declare interface DescribeInstanceRegionInfo {
  /** 引擎部署地域信息 */
  EngineRegion: string | null;
  /** 引擎在该地域的副本数 */
  Replica: number | null;
  /** 引擎在该地域的规格id */
  SpecId: string | null;
  /** 内网的网络信息 */
  IntranetVpcInfos: VpcInfo[] | null;
  /** 是否开公网 */
  EnableClientInternet: boolean | null;
}

/** 引擎的初始管理帐号 */
declare interface EngineAdmin {
  /** 控制台初始用户名 */
  Name?: string;
  /** 控制台初始密码 */
  Password?: string;
  /** 引擎接口的管理员 Token */
  Token?: string;
}

/** 多环境网络信息 */
declare interface EnvAddressInfo {
  /** 环境名 */
  EnvName: string;
  /** 是否开启config公网 */
  EnableConfigInternet: boolean;
  /** config公网ip */
  ConfigInternetServiceIp: string;
  /** config内网访问地址 */
  ConfigIntranetAddress: string | null;
}

/** 环境具体信息 */
declare interface EnvInfo {
  /** 环境名称 */
  EnvName: string;
  /** 环境对应的网络信息 */
  VpcInfos: VpcInfo[];
  /** 云硬盘容量 */
  StorageCapacity: number;
  /** 运行状态 */
  Status?: string;
  /** Admin service 访问地址 */
  AdminServiceIp?: string;
  /** Config service访问地址 */
  ConfigServiceIp?: string;
  /** 是否开启config-server公网 */
  EnableConfigInternet?: boolean;
  /** config-server公网访问地址 */
  ConfigInternetServiceIp?: string;
  /** 规格ID */
  SpecId?: string;
  /** 环境的节点数 */
  EnvReplica?: number;
  /** 环境运行的节点数 */
  RunningCount?: number;
  /** 环境别名 */
  AliasEnvName?: string;
  /** 环境描述 */
  EnvDesc?: string;
  /** 客户端带宽 */
  ClientBandWidth?: number;
}

/** 查询过滤通用对象 */
declare interface Filter {
  /** 过滤参数名 */
  Name: string;
  /** 过滤参数值 */
  Values: string[];
}

/** 引擎实例的标签信息 */
declare interface InstanceTagInfo {
  /** 标签键 */
  TagKey?: string;
  /** 标签值 */
  TagValue?: string;
}

/** 键值对 */
declare interface KVPair {
  /** 键 */
  Key: string;
  /** 值 */
  Value: string;
}

/** Nacos副本信息 */
declare interface NacosReplica {
  /** 名称 */
  Name: string;
  /** 角色 */
  Role: string;
  /** 状态 */
  Status: string;
  /** 子网ID */
  SubnetId: string | null;
  /** 可用区ID */
  Zone: string | null;
  /** 可用区ID */
  ZoneId: string | null;
}

/** nacos服务端接口列表，用于云监控 */
declare interface NacosServerInterface {
  /** 接口名 */
  Interface: string | null;
}

/** 查询Limiter的接入地址 */
declare interface PolarisLimiterAddress {
  /** VPC接入IP列表 */
  IntranetAddress: string | null;
}

/** 微服务注册引擎实例 */
declare interface SREInstance {
  /** 实例ID */
  InstanceId: string;
  /** 名称 */
  Name: string;
  /** 版本号 */
  Edition: string;
  /** 状态, 枚举值:creating/create_fail/running/updating/update_fail/restarting/restart_fail/destroying/destroy_fail */
  Status: string;
  /** 规格ID */
  SpecId: string;
  /** 副本数 */
  Replica: number;
  /** 类型 */
  Type: string;
  /** Vpc iD */
  VpcId: string;
  /** 子网ID */
  SubnetIds: string[] | null;
  /** 是否开启持久化存储 */
  EnableStorage: boolean | null;
  /** 数据存储方式 */
  StorageType: string | null;
  /** 云硬盘容量 */
  StorageCapacity: number | null;
  /** 计费方式 */
  Paymode: string | null;
  /** EKS集群的ID */
  EKSClusterID: string | null;
  /** 集群创建时间 */
  CreateTime: string | null;
  /** 环境配置信息列表 */
  EnvInfos: EnvInfo[] | null;
  /** 引擎所在的区域 */
  EngineRegion: string | null;
  /** 注册引擎是否开启公网 */
  EnableInternet: boolean | null;
  /** 私有网络列表信息 */
  VpcInfos: VpcInfo[] | null;
  /** 服务治理相关信息列表 */
  ServiceGovernanceInfos: ServiceGovernanceInfo[] | null;
  /** 实例的标签信息 */
  Tags: KVPair[] | null;
  /** 引擎实例是否开启控制台公网访问地址 */
  EnableConsoleInternet: boolean | null;
  /** 引擎实例是否开启控制台内网访问地址 */
  EnableConsoleIntranet: boolean | null;
  /** 引擎实例是否展示参数配置页面 */
  ConfigInfoVisible: boolean | null;
  /** 引擎实例控制台默认密码 */
  ConsoleDefaultPwd: string | null;
  /** 交易付费类型，0后付费/1预付费 */
  TradeType: number | null;
  /** 自动续费标记：0表示默认状态(用户未设置，即初始状态)， 1表示自动续费，2表示明确不自动续费 */
  AutoRenewFlag: number | null;
  /** 预付费到期时间 */
  CurDeadline: string | null;
  /** 隔离开始时间 */
  IsolateTime: string | null;
  /** 实例地域相关的描述信息 */
  RegionInfos: DescribeInstanceRegionInfo[] | null;
}

/** 服务治理相关的信息 */
declare interface ServiceGovernanceInfo {
  /** 引擎所在的地域 */
  EngineRegion: string;
  /** 服务治理引擎绑定的kubernetes集群信息 */
  BoundK8SInfos?: BoundK8SInfo[];
  /** 服务治理引擎绑定的网络信息 */
  VpcInfos?: VpcInfo[];
  /** 当前实例鉴权是否开启 */
  AuthOpen?: boolean;
  /** 该实例支持的功能，鉴权就是 Auth */
  Features?: string[];
  /** 主账户名默认为 polaris，该值为主账户的默认密码 */
  MainPassword?: string;
  /** 服务治理pushgateway引擎绑定的网络信息 */
  PgwVpcInfos?: VpcInfo[];
  /** 服务治理限流server引擎绑定的网络信息 */
  LimiterVpcInfos?: VpcInfo[];
}

/** 私有网络信息 */
declare interface VpcInfo {
  /** Vpc Id */
  VpcId: string;
  /** 子网ID */
  SubnetId: string;
  /** 内网访问地址 */
  IntranetAddress?: string | null;
}

/** Zookeeper副本信息 */
declare interface ZookeeperReplica {
  /** 名称 */
  Name: string;
  /** 角色 */
  Role: string;
  /** 状态 */
  Status: string;
  /** 子网ID */
  SubnetId: string | null;
  /** 可用区ID */
  Zone: string | null;
  /** 可用区ID */
  ZoneId: string | null;
  /** 别名 */
  AliasName: string | null;
}

/** Zookeeper服务端接口列表，用于云监控 */
declare interface ZookeeperServerInterface {
  /** 接口名 */
  Interface: string | null;
}

declare interface CreateEngineRequest {
  /** 引擎类型。参考值：- zookeeper- nacos- consul- apollo- eureka- polaris */
  EngineType: string;
  /** 引擎的开源版本。每种引擎支持的开源版本不同，请参考产品文档或者控制台购买页 */
  EngineVersion: string;
  /** 引擎的产品版本。参考值：- STANDARD： 标准版引擎各版本及可选择的规格、节点数说明：apollo - STANDARD版本规格列表：spec-qcr53kf1t（1C2G）,spec-qdr53kf2w（2C4G）节点数：1，2，3，4，5eureka - STANDARD版本规格列表：spec-qvj6k7t4q（1C2G）,spec-qcr53kfjt（2C4G）,spec-qvj6k7t4m（4G8G）,spec-qcr54kfjt（8C16G）,spec-qcr55kfjt（16C32G）节点数：3，4，5 */
  EngineProductVersion: string;
  /** 引擎所在地域。参考值说明：中国区 参考值：- ap-guangzhou：广州- ap-beijing：北京- ap-chengdu：成都- ap-chongqing：重庆- ap-nanjing：南京- ap-shanghai：上海- ap-hongkong：香港- ap-taipei：台北亚太区 参考值：- ap-jakarta：雅加达- ap-singapore：新加坡北美区 参考值- na-toronto：多伦多金融专区 参考值- ap-beijing-fsi：北京金融- ap-shanghai-fsi：上海金融- ap-shenzhen-fsi：深圳金融 */
  EngineRegion: string;
  /** 引擎名称。参考值：- eurek-test */
  EngineName: string;
  /** 付费类型。参考值：- 0：后付费- 1：预付费 */
  TradeType: number;
  /** 引擎的节点规格 ID。参见EngineProductVersion字段说明 */
  EngineResourceSpec?: string;
  /** 引擎的节点数量。参见EngineProductVersion字段说明 */
  EngineNodeNum?: number;
  /** VPC ID。在 VPC 的子网内分配一个 IP 作为引擎的访问地址。参考值：- vpc-conz6aix */
  VpcId?: string;
  /** 子网 ID。在 VPC 的子网内分配一个 IP 作为引擎的访问地址。参考值：- subnet-ahde9me9 */
  SubnetId?: string;
  /** Apollo 环境配置参数列表。参数说明：如果创建Apollo类型，此参数为必填的环境信息列表，最多可选4个环境。环境信息参数说明：- Name：环境名。参考值：prod, dev, fat, uat- EngineResourceSpec：环境内引擎的节点规格ID。参见EngineProductVersion参数说明- EngineNodeNum：环境内引擎的节点数量。参见EngineProductVersion参数说明，其中prod环境支持的节点数为2，3，4，5- StorageCapacity：配置存储空间大小，以GB为单位，步长为5.参考值：35- VpcId：VPC ID。参考值：vpc-conz6aix- SubnetId：子网 ID。参考值：subnet-ahde9me9 */
  ApolloEnvParams?: ApolloEnvParam[];
  /** 引擎的标签列表。用户自定义的key/value形式，无参考值 */
  EngineTags?: InstanceTagInfo[];
  /** 引擎的初始帐号信息。可设置参数：- Name：控制台初始用户名- Password：控制台初始密码- Token：引擎接口的管理员 Token */
  EngineAdmin?: EngineAdmin;
  /** 预付费时长，以月为单位 */
  PrepaidPeriod?: number;
  /** 自动续费标记，仅预付费使用。参考值：- 0：不自动续费- 1：自动续费 */
  PrepaidRenewFlag?: number;
}

declare interface CreateEngineResponse {
  /** 引擎实例 ID */
  InstanceId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteEngineRequest {
  /** 引擎实例 ID */
  InstanceId: string;
}

declare interface DeleteEngineResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeCloudNativeAPIGatewayNodesRequest {
  /** 云原生API网关实例ID。 */
  GatewayId: string;
  /** 实例分组id */
  GroupId?: string;
  /** 翻页获取多少个 */
  Limit?: number;
  /** 翻页从第几个开始获取 */
  Offset?: number;
}

declare interface DescribeCloudNativeAPIGatewayNodesResponse {
  /** 获取云原生网关节点列表结果。 */
  Result: DescribeCloudNativeAPIGatewayNodesResult;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeNacosReplicasRequest {
  /** 引擎实例ID */
  InstanceId: string;
  /** 副本列表Limit */
  Limit?: number;
  /** 副本列表Offset */
  Offset?: number;
}

declare interface DescribeNacosReplicasResponse {
  /** 引擎实例副本信息 */
  Replicas: NacosReplica[];
  /** 副本个数 */
  TotalCount: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeNacosServerInterfacesRequest {
  /** 实例id */
  InstanceId?: string;
  /** 返回的列表个数 */
  Limit?: number;
  /** 返回的列表起始偏移量 */
  Offset?: number;
}

declare interface DescribeNacosServerInterfacesResponse {
  /** 接口总个数 */
  TotalCount: number;
  /** 接口列表 */
  Content: NacosServerInterface[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeSREInstanceAccessAddressRequest {
  /** 注册引擎实例Id */
  InstanceId?: string;
  /** VPC ID */
  VpcId?: string;
  /** 子网ID */
  SubnetId?: string;
  /** 引擎其他组件名称（pushgateway、polaris-limiter） */
  Workload?: string;
  /** 部署地域 */
  EngineRegion?: string;
}

declare interface DescribeSREInstanceAccessAddressResponse {
  /** 内网访问地址 */
  IntranetAddress: string;
  /** 公网访问地址 */
  InternetAddress: string;
  /** apollo多环境公网ip */
  EnvAddressInfos: EnvAddressInfo[];
  /** 控制台公网访问地址 */
  ConsoleInternetAddress: string | null;
  /** 控制台内网访问地址 */
  ConsoleIntranetAddress: string | null;
  /** 客户端公网带宽 */
  InternetBandWidth: number | null;
  /** 控制台公网带宽 */
  ConsoleInternetBandWidth: number | null;
  /** 北极星限流server节点接入IP */
  LimiterAddressInfos: PolarisLimiterAddress[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeSREInstancesRequest {
  /** 请求过滤参数 */
  Filters?: Filter[];
  /** 翻页单页查询限制数量[0,1000], 默认值0 */
  Limit?: number;
  /** 翻页单页偏移量，默认值0 */
  Offset?: number;
  /** 查询类型 */
  QueryType?: string;
  /** 调用方来源 */
  QuerySource?: string;
}

declare interface DescribeSREInstancesResponse {
  /** 总数量 */
  TotalCount: number;
  /** 实例记录 */
  Content: SREInstance[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeZookeeperReplicasRequest {
  /** 注册引擎实例ID */
  InstanceId: string;
  /** 副本列表Limit */
  Limit?: number;
  /** 副本列表Offset */
  Offset?: number;
}

declare interface DescribeZookeeperReplicasResponse {
  /** 注册引擎实例副本信息 */
  Replicas: ZookeeperReplica[];
  /** 副本个数 */
  TotalCount: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeZookeeperServerInterfacesRequest {
  /** 实例id */
  InstanceId?: string;
  /** 返回的列表个数 */
  Limit?: number;
  /** 返回的列表起始偏移量 */
  Offset?: number;
}

declare interface DescribeZookeeperServerInterfacesResponse {
  /** 接口总个数 */
  TotalCount: number;
  /** 接口列表 */
  Content: ZookeeperServerInterface[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UpdateEngineInternetAccessRequest {
  /** 引擎ID */
  InstanceId: string;
  /** 引擎类型 */
  EngineType: string;
  /** 是否开启客户端公网访问，true开 false关 */
  EnableClientInternetAccess?: boolean;
}

declare interface UpdateEngineInternetAccessResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

/** [腾讯云微服务引擎](https://cloud.tencent.com/document/product/1364) */
declare interface Tse {
  (): Versions;
  /** 创建引擎实例 */
  CreateEngine(data: CreateEngineRequest, config?: AxiosRequestConfig): AxiosPromise<CreateEngineResponse>;
  /** 删除引擎实例 */
  DeleteEngine(data: DeleteEngineRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteEngineResponse>;
  /** 获取云原生网关节点列表 */
  DescribeCloudNativeAPIGatewayNodes(data: DescribeCloudNativeAPIGatewayNodesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudNativeAPIGatewayNodesResponse>;
  /** 查询Nacos类型引擎实例副本信息 */
  DescribeNacosReplicas(data: DescribeNacosReplicasRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNacosReplicasResponse>;
  /** 查询nacos服务接口列表 */
  DescribeNacosServerInterfaces(data?: DescribeNacosServerInterfacesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNacosServerInterfacesResponse>;
  /** 查询引擎实例访问地址 */
  DescribeSREInstanceAccessAddress(data?: DescribeSREInstanceAccessAddressRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSREInstanceAccessAddressResponse>;
  /** 查询引擎实例列表 */
  DescribeSREInstances(data?: DescribeSREInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSREInstancesResponse>;
  /** 查询Zookeeper类型注册引擎实例副本信息 */
  DescribeZookeeperReplicas(data: DescribeZookeeperReplicasRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeZookeeperReplicasResponse>;
  /** 查询zookeeper服务接口列表 */
  DescribeZookeeperServerInterfaces(data?: DescribeZookeeperServerInterfacesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeZookeeperServerInterfacesResponse>;
  /** 修改引擎公网访问配置 */
  UpdateEngineInternetAccess(data: UpdateEngineInternetAccessRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateEngineInternetAccessResponse>;
}

export declare type Versions = ["2020-12-07"];

export default Tse;
