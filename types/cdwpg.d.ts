/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 磁盘规格 */
declare interface CBSSpec {
  /** 盘类型 */
  DiskType: string;
  /** 大小 */
  DiskSize: number;
  /** 个数 */
  DiskCount: number;
}

/** 磁盘信息 */
declare interface CBSSpecInfo {
  /** 盘类型 */
  DiskType: string | null;
  /** 大小 */
  DiskSize: number | null;
  /** 个数 */
  DiskCount: number | null;
}

/** 计费时间参数 */
declare interface ChargeProperties {
  /** 1-需要自动续期 */
  RenewFlag: number | null;
  /** 订单时间范围 */
  TimeSpan: number | null;
  /** 时间单位，一般为h和m */
  TimeUnit: string | null;
  /** 计费类型0-按量计费，1-包年包月 */
  PayMode?: number | null;
  /** PREPAID、POSTPAID_BY_HOUR */
  ChargeType?: string | null;
}

/** 云原生实例详情 */
declare interface InstanceInfo {
  /** ID值 */
  ID: number | null;
  /** cdwpg-cn或者其他 */
  InstanceType: string | null;
  /** cdwpg-cn或者其他 */
  InstanceName: string | null;
  /** Running */
  Status: string | null;
  /** 运行中 */
  StatusDesc: string | null;
  /** 无 */
  InstanceStateInfo: InstanceStateInfo | null;
  /** - */
  InstanceID: string | null;
  /** 2022-09-05 20:00:01 */
  CreateTime: string | null;
  /** ap-chongqing */
  Region: string | null;
  /** ap */
  Zone: string | null;
  /** region */
  RegionDesc: string | null;
  /** zone */
  ZoneDesc: string | null;
  /** 标签 */
  Tags: Tag[] | null;
  /** v3 */
  Version: string | null;
  /** 字符集 */
  Charset: string | null;
  /** 引擎版本 */
  EngineVersion: string | null;
  /** GTM节点列表 */
  GTMNodes: InstanceNodeGroup[] | null;
  /** CN节点列表 */
  CNNodes: InstanceNodeGroup[] | null;
  /** DN节点列表 */
  DNNodes: InstanceNodeGroup[] | null;
  /** 备份存储 */
  BackupStorage: InstanceNodeGroup[] | null;
  /** FN节点列表 */
  FNNodes: InstanceNodeGroup[] | null;
}

/** 集群节点信息 */
declare interface InstanceNodeGroup {
}

/** 精简集群信息 */
declare interface InstanceSimpleInfoNew {
  /** 1 */
  ID?: number | null;
  /** 1 */
  InstanceId?: string | null;
  /** 1 */
  InstanceName?: string | null;
  /** 1 */
  Version?: string | null;
  /** 1 */
  Region?: string | null;
  /** 1 */
  RegionId?: number | null;
  /** 1 */
  RegionDesc?: string | null;
  /** 1 */
  Zone?: string | null;
  /** 1 */
  ZoneId?: number | null;
  /** 1 */
  ZoneDesc?: string | null;
  /** 1 */
  VpcId?: string | null;
  /** 1 */
  SubnetId?: string | null;
  /** 1 */
  CreateTime?: string | null;
  /** 1 */
  ExpireTime?: string | null;
  /** 1 */
  AccessInfo?: string | null;
  /** 1 */
  PayMode?: string | null;
  /** 1 */
  RenewFlag?: boolean | null;
}

/** 集群状态抽象后的结构体 */
declare interface InstanceStateInfo {
  /** 集群状态，例如：Serving */
  InstanceState: string | null;
  /** 集群操作创建时间 */
  FlowCreateTime: string | null;
  /** 集群操作名称 */
  FlowName: string | null;
  /** 集群操作进度 */
  FlowProgress: number | null;
  /** 集群状态描述，例如：运行中 */
  InstanceStateDesc: string | null;
  /** 集群流程错误信息，例如：“创建失败，资源不足” */
  FlowMsg: string | null;
  /** 当前步骤的名称，例如：”购买资源中“ */
  ProcessName: string | null;
  /** 集群是否有备份中任务，有为1,无为0 */
  BackupStatus?: number | null;
  /** 1 */
  RequestId?: string | null;
  /** 1 */
  BackupOpenStatus?: number | null;
}

/** 资源信息 */
declare interface ResourceInfo {
  /** 资源名称 */
  SpecName: string | null;
  /** 资源数 */
  Count: number | null;
  /** 磁盘信息 */
  DiskSpec: CBSSpecInfo | null;
  /** 资源类型，DATA */
  Type: string | null;
}

/** 资源规格 */
declare interface ResourceSpecNew {
  /** 资源名称 */
  SpecName: string;
  /** 资源数 */
  Count: number;
  /** 磁盘信息 */
  DiskSpec: CBSSpec;
  /** 资源类型，DATA */
  Type: string;
}

/** 列表页搜索的标记列表 */
declare interface SearchTags {
  /** 标签的键 */
  TagKey?: string;
  /** 标签的值 */
  TagValue?: string;
  /** 1表示只输入标签的键，没有输入值；0表示输入键时且输入值 */
  AllValue?: number;
}

/** 集群信息 */
declare interface SimpleInstanceInfo {
  /** 1 */
  ID?: number | null;
  /** 1 */
  InstanceId?: string | null;
  /** 1 */
  InstanceName?: string | null;
  /** 1 */
  Version?: string | null;
  /** 1 */
  Region?: string | null;
  /** 1 */
  Zone?: string | null;
  /** 1 */
  UserVPCID?: string | null;
  /** 1 */
  UserSubnetID?: string | null;
  /** 1 */
  CreateTime?: string | null;
  /** 1 */
  ExpireTime?: string | null;
  /** 1 */
  AccessInfo?: string | null;
  /** 1 */
  RenewFlag?: number | null;
  /** 1 */
  ChargeProperties?: ChargeProperties | null;
  /** 1 */
  Resources?: ResourceInfo[] | null;
  /** 1 */
  Tags?: Tag[] | null;
  /** 1 */
  Status?: number | null;
}

/** 标签描述 */
declare interface Tag {
  /** 标签的键 */
  TagKey: string;
  /** 标签的值 */
  TagValue: string;
}

declare interface CreateInstanceByApiRequest {
  /** 实例名称 */
  InstanceName: string;
  /** 可用区 */
  Zone: string;
  /** 私有网络 */
  UserVPCId: string;
  /** 子网 */
  UserSubnetId: string;
  /** 计费方式 */
  ChargeProperties: ChargeProperties;
  /** 集群密码 */
  AdminPassword: string;
  /** 资源信息 */
  Resources: ResourceSpecNew[];
  /** 标签列表 */
  Tags?: Tag;
}

declare interface CreateInstanceByApiResponse {
  /** 流程ID */
  FlowId?: string | null;
  /** 实例ID */
  InstanceId?: string | null;
  /** 错误信息 */
  ErrorMsg?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstanceInfoRequest {
  /** 集群实例ID */
  InstanceId: string;
}

declare interface DescribeInstanceInfoResponse {
  /** 1 */
  SimpleInstanceInfo?: SimpleInstanceInfo;
  /** 1 */
  ErrorMsg?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstanceRequest {
  /** 集群实例ID */
  InstanceId: string;
}

declare interface DescribeInstanceResponse {
  /** 实例描述信息 */
  InstanceInfo: InstanceInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstanceStateRequest {
  /** 集群实例名称 */
  InstanceId: string;
}

declare interface DescribeInstanceStateResponse {
  /** 集群状态，例如：Serving */
  InstanceState?: string;
  /** 集群操作创建时间 */
  FlowCreateTime?: string | null;
  /** 集群操作名称 */
  FlowName?: string | null;
  /** 集群操作进度 */
  FlowProgress?: number | null;
  /** 集群状态描述，例如：运行中 */
  InstanceStateDesc?: string | null;
  /** 集群流程错误信息，例如：“创建失败，资源不足” */
  FlowMsg?: string | null;
  /** 当前步骤的名称，例如：”购买资源中“ */
  ProcessName?: string | null;
  /** 集群备份任务开启状态 */
  BackupStatus?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstancesRequest {
  /** 搜索的集群id名称 */
  SearchInstanceId?: string;
  /** 搜索的集群name */
  SearchInstanceName?: string;
  /** 分页参数，第一页为0，第二页为10 */
  Offset?: number;
  /** 分页参数，分页步长，默认为10 */
  Limit?: number;
  /** 搜索标签列表 */
  SearchTags?: SearchTags[];
}

declare interface DescribeInstancesResponse {
  /** 实例总数 */
  TotalCount: number | null;
  /** 实例数组 */
  InstancesList: InstanceInfo[] | null;
  /** - */
  ErrorMsg: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSimpleInstancesRequest {
  /** 11 */
  SearchInstanceId?: string;
  /** 11 */
  SearchInstanceName?: string;
  /** 11 */
  Offset?: number;
  /** 11 */
  Limit?: number;
  /** 11 */
  SearchTags?: string[];
}

declare interface DescribeSimpleInstancesResponse {
  /** 1 */
  TotalCount?: number | null;
  /** 1 */
  InstancesList?: InstanceSimpleInfoNew[] | null;
  /** - */
  ErrorMsg?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DestroyInstanceByApiRequest {
  /** 实例名称，例如"cdwpg-xxxx" */
  InstanceId: string;
}

declare interface DestroyInstanceByApiResponse {
  /** 销毁流程Id */
  FlowId?: string;
  /** 错误信息 */
  ErrorMsg?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyInstanceRequest {
  /** 实例Id */
  InstanceId: string;
  /** 新修改的实例名称 */
  InstanceName: string;
}

declare interface ModifyInstanceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Cdwpg 云数据仓库 PostgreSQL} */
declare interface Cdwpg {
  (): Versions;
  /** 创建集群 {@link CreateInstanceByApiRequest} {@link CreateInstanceByApiResponse} */
  CreateInstanceByApi(data: CreateInstanceByApiRequest, config?: AxiosRequestConfig): AxiosPromise<CreateInstanceByApiResponse>;
  /** 描述云原生实例信息 {@link DescribeInstanceRequest} {@link DescribeInstanceResponse} */
  DescribeInstance(data: DescribeInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceResponse>;
  /** 获取集群信息 {@link DescribeInstanceInfoRequest} {@link DescribeInstanceInfoResponse} */
  DescribeInstanceInfo(data: DescribeInstanceInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceInfoResponse>;
  /** 获取集群实例状态 {@link DescribeInstanceStateRequest} {@link DescribeInstanceStateResponse} */
  DescribeInstanceState(data: DescribeInstanceStateRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceStateResponse>;
  /** 获取云原生实例列表 {@link DescribeInstancesRequest} {@link DescribeInstancesResponse} */
  DescribeInstances(data?: DescribeInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstancesResponse>;
  /** 获取集群精简信息列表 {@link DescribeSimpleInstancesRequest} {@link DescribeSimpleInstancesResponse} */
  DescribeSimpleInstances(data?: DescribeSimpleInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSimpleInstancesResponse>;
  /** 销毁集群 {@link DestroyInstanceByApiRequest} {@link DestroyInstanceByApiResponse} */
  DestroyInstanceByApi(data: DestroyInstanceByApiRequest, config?: AxiosRequestConfig): AxiosPromise<DestroyInstanceByApiResponse>;
  /** 修改实例信息 {@link ModifyInstanceRequest} {@link ModifyInstanceResponse} */
  ModifyInstance(data: ModifyInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyInstanceResponse>;
}

export declare type Versions = ["2020-12-30"];

export default Cdwpg;
