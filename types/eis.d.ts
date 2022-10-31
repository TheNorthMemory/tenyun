/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 运行时精简信息 */
declare interface AbstractRuntimeMC {
  /** 运行时id */
  RuntimeId: number;
  /** 运行时名称，用户输入，同一uin内唯一 */
  DisplayName: string;
  /** 运行时类型：0: sandbox, 1:shared, 2:private */
  Type: number;
  /** 运行时所在地域，tianjin，beijiing，guangzhou等 */
  Zone: string;
  /** 运行时所在地域，tianjin，beijiing，guangzhou等（同Zone） */
  Area: string;
  /** 运行时应用listener地址后缀 */
  Addr: string;
  /** 运行时状态 */
  Status: number;
  /** 运行时过期时间 */
  ExpiredAt: number;
}

/** GetMonitorMetricResponse */
declare interface MetricValueMC {
  /** 时间 */
  Time: number | null;
  /** 对应的value值 */
  Val: string | null;
}

/** 运行时部署的应用实例详情 */
declare interface RuntimeDeployedInstanceMC {
  /** 项目id */
  GroupId: number;
  /** 项目名称 */
  GroupName: string;
  /** 应用id */
  ProjectId: number;
  /** 应用名称 */
  ProjectName: string;
  /** 应用实例id */
  InstanceId: number;
  /** 应用实例版本 */
  InstanceVersion: number;
  /** 应用实例创建时间 */
  InstanceCreatedAt: number;
  /** 应用实例部署状态. 0:running, 1:deleting */
  Status: number;
  /** 应用实例部署创建时间 */
  CreatedAt: number;
  /** 应用实例部署更新时间 */
  UpdatedAt: number;
  /** 应用类型：0:NormalApp普通应用 1:TemplateApp模板应用 2:LightApp轻应用 3:MicroConnTemplate微连接模板 4:MicroConnApp微连接应用 */
  ProjectType: number;
}

/** 运行时详细信息 */
declare interface RuntimeMC {
  /** 运行时id */
  RuntimeId: number;
  /** 主账号uin */
  Uin: string;
  /** 运行时名称，用户输入，同一uin内唯一 */
  DisplayName: string;
  /** 运行时所在地域，tianjin，beijiing，guangzhou等 */
  Zone: string;
  /** 运行时类型：0: sandbox, 1:shared, 2:private */
  Type: number;
  /** 运行时状态：1:running, 2:deleting, 3:creating, 4:scaling, 5:unavailable, 6:deleted, 7:errored */
  Status: number;
  /** 运行时创建时间 */
  CreatedAt: number;
  /** 运行时更新时间 */
  UpdatedAt: number;
  /** 运行时资源配置，worker总配额，0:0vCore0G, 1:1vCore2G, 2:2vCore4G, 4:4vCore8G, 8:8vCore16G, 12:12vCore24G, 16:16vCore32G, 100:unlimited */
  WorkerSize: number;
  /** 运行时资源配置，worker副本数 */
  WorkerReplica: number;
  /** 正在运行的应用实例数量 */
  RunningInstanceCount: number;
  /** 已使用cpu核数 */
  CpuUsed: number;
  /** cpu核数上限 */
  CpuLimit: number;
  /** 已使用内存 MB */
  MemoryUsed: number;
  /** 内存上限 MB */
  MemoryLimit: number;
  /** 运行时过期时间 */
  ExpiredAt: number | null;
  /** 收费类型：0:缺省，1:通过订单页自助下单(支持续费/升配等操作) */
  ChargeType: number | null;
  /** 资源限制类型：0:无限制，1:有限制 */
  ResourceLimitType: number | null;
  /** 是否开启自动续费 */
  AutoRenewal: boolean | null;
}

declare interface GetRuntimeMCRequest {
  /** 运行时id */
  RuntimeId: number;
  /** 运行时地域 */
  Zone: string;
}

declare interface GetRuntimeMCResponse {
  /** 运行时详情 */
  Runtime: RuntimeMC;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface GetRuntimeResourceMonitorMetricMCRequest {
  /** 运行时id */
  RuntimeId: number;
  /** 起始时间 */
  StartTime: number;
  /** 结束时间 */
  EndTime: number;
  /** 指标类型：0:CPU, 1:MemUsageBytes, 2:K8sWorkloadNetworkReceiveBytesBw, 3:K8sWorkloadNetworkTransmitBytesBw */
  MetricType: number;
  /** 是否返回百分比数值，仅支持CPU，Memory */
  RateType: boolean;
  /** 采样粒度：60(s), 300(s), 3600(s), 86400(s) */
  Interval?: number;
}

declare interface GetRuntimeResourceMonitorMetricMCResponse {
  /** 指标名称，K8sWorkloadCpuCoreUsed，K8sWorkloadMemUsageBytes，K8sWorkloadNetworkReceiveBytesBw，K8sWorkloadNetworkTransmitBytesBw */
  MetricType: string;
  /** metric数值列表 */
  Values: MetricValueMC[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ListDeployableRuntimesMCRequest {
}

declare interface ListDeployableRuntimesMCResponse {
  /** 运行时列表 */
  Runtimes: AbstractRuntimeMC[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ListRuntimeDeployedInstancesMCRequest {
  /** 运行时id */
  RuntimeId: number;
  /** 最大请求数量 */
  Limit: number;
  /** 请求偏移量 */
  Offset: number;
  /** 排序类型：1:创建时间排序, 2:更新时间排序（默认） */
  SortType: number;
  /** 排序方式：asc，desc（默认） */
  Sort: string;
  /** 运行时地域 */
  Zone: string;
  /** 1:3.0版本新控制台传1；否则传0 */
  ApiVersion?: number;
  /** -1:不按项目筛选，获取所有>=0: 按项目id筛选 */
  GroupId?: number;
  /** -2: 不按状态筛选，获取所有0: 运行中2: 已停止 */
  Status?: number;
}

declare interface ListRuntimeDeployedInstancesMCResponse {
  /** 运行时所部属的应用实例列表 */
  Instances: RuntimeDeployedInstanceMC[];
  /** 满足条件的记录总数，用于分页器 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ListRuntimesMCRequest {
}

declare interface ListRuntimesMCResponse {
  /** 运行时列表 */
  Runtimes: RuntimeMC[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare namespace V20200715 {
  interface VersionHeader { headers: { 'X-TC-Version': '2020-07-15' } }

  /** 连接器操作 */
  interface EisConnectionOperation {
    /** 连接器操作名称 */
    OperationName: string;
    /** 连接器展示名称 */
    DisplayName: string;
    /** 操作是否为触发器 */
    IsTrigger: boolean;
  }

  /** 连接器概要信息 */
  interface EisConnectorSummary {
    /** 连接器名称 */
    ConnectorName: string;
    /** 连接器展示名称 */
    DisplayName: string;
    /** 连接器对应企业 */
    Company: string;
    /** 连接器对应产品 */
    Product: string;
    /** 连接器版本 */
    ConnectorVersion: string;
    /** 连接器创建时间 */
    CreateTime: number;
  }

  interface DescribeEisConnectorConfigRequest {
    /** 连接器名称 */
    ConnectorName: string;
    /** 连接器版本 */
    ConnectorVersion: string;
  }

  interface DescribeEisConnectorConfigResponse {
    /** 连接器配置参数描述（json结构），示例如下：{ "attributes":{ "description":"测试", // 连接器的描述 "displayName":"测试", // 连接器的展示名 "name":"test", // 连接器的名称 "version":"1.0.0" // 连接器的版本号 }, "properties":[ { "attributes":{ "displayName":"企业ID", // 参数的展示名 "name":"para1", // 参数名 "required":"true", // 是否必填 "type":"int" // 参数的类型 } }, { "attributes":{ "displayName":"成员管理密钥", "name":"para2", "required":"true", "type":"float" } }, { "attributes":{ "displayName":"应用管理密钥", "name":"para3", "required":"true", "type":"string" } }, { "attributes":{ "displayName":"企业ID", "name":"para4", "required":"true", "type":"decimal" } }, { "attributes":{ "displayName":"成员管理密钥", "name":"para5", "required":"true", "type":"bool" } }, { "attributes":{ "displayName":"应用管理密钥", "name":"para6", "required":"true", "type":"date" } }, { "attributes":{ "displayName":"企业ID", "name":"para7", "required":"true", "type":"time" } }, { "attributes":{ "displayName":"成员管理密钥", "name":"para8", "required":"true", "type":"datetime" } }, { "attributes":{ "displayName":"应用管理密钥", "name":"para9", "required":"true", "type":"map" }, "children":[ { "attributes":{ "displayName":"key", "name":"key", "required":"true", "type":"string" } }, { "attributes":{ "displayName":"value", "name":"value", "required":"true", "type":"any" } } ] }, { "attributes":{ "displayName":"企业ID", "name":"para10", "required":"true", "type":"list" // list，list里元素的类型是结构体，children里是结构体的描述 }, "children":[ { "attributes":{ "displayName":"field1", "name":"field1", "required":"true", "type":"string" } }, { "attributes":{ "displayName":"field2", "name":"field2", "required":"true", "type":"any" } } ] }, { "attributes":{ "displayName":"成员管理密钥", "name":"para11", "required":"true", "type":"struct" }, "children":[ { "attributes":{ "displayName":"field1", // 结构体属性的展示名 "name":"field1", // 结构体属性的名称 "required":"true", // 是否必填 "type":"string" // 属性的类型 } }, { "attributes":{ "displayName":"field2", "name":"field2", "required":"true", "type":"any" } } ] }, { "attributes":{ "displayName":"应用管理密钥", "name":"para12", "required":"true", "type":"enum" }, "children":[ { "attributes":{ "displayName":"PC", // 枚举值的展示名 "name":"PC" // 枚举值的名称 } }, { "attributes":{ "displayName":"MAC", "name":"MAC" } } ] } ]} */
    ConnectorParameter: string;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface ListEisConnectorOperationsRequest {
    /** 连接器名称 */
    ConnectorName: string;
    /** 连接器版本 */
    ConnectorVersion: string;
  }

  interface ListEisConnectorOperationsResponse {
    /** 连接器列表 */
    Operations: EisConnectionOperation[];
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface ListEisConnectorsRequest {
    /** 连接器名称,非必输，如输入则按照输入值模糊匹配 */
    ConnectorName?: string;
    /** 分页参数,数据偏移量 */
    Offset?: number;
    /** 分页参数,每页显示的条数 */
    Limit?: number;
  }

  interface ListEisConnectorsResponse {
    /** 连接器总数 */
    TotalCount: number;
    /** 连接器列表 */
    Connectors: EisConnectorSummary[];
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }
}

/** {@link Eis 数据连接器} */
declare interface Eis {
  (): Versions;
  /** {@link GetRuntimeMC 获取运行时详情}({@link GetRuntimeMCRequest 请求参数}): {@link GetRuntimeMCResponse 返回参数} */
  GetRuntimeMC(data: GetRuntimeMCRequest, config?: AxiosRequestConfig): AxiosPromise<GetRuntimeMCResponse>;
  /** {@link GetRuntimeResourceMonitorMetricMC 获取运行时资源监控详情}({@link GetRuntimeResourceMonitorMetricMCRequest 请求参数}): {@link GetRuntimeResourceMonitorMetricMCResponse 返回参数} */
  GetRuntimeResourceMonitorMetricMC(data: GetRuntimeResourceMonitorMetricMCRequest, config?: AxiosRequestConfig): AxiosPromise<GetRuntimeResourceMonitorMetricMCResponse>;
  /** {@link ListDeployableRuntimesMC 获取可部署运行时列表}({@link ListDeployableRuntimesMCRequest 请求参数}): {@link ListDeployableRuntimesMCResponse 返回参数} */
  ListDeployableRuntimesMC(data?: ListDeployableRuntimesMCRequest, config?: AxiosRequestConfig): AxiosPromise<ListDeployableRuntimesMCResponse>;
  /** {@link ListRuntimeDeployedInstancesMC 获取运行时部署的应用实例列表}({@link ListRuntimeDeployedInstancesMCRequest 请求参数}): {@link ListRuntimeDeployedInstancesMCResponse 返回参数} */
  ListRuntimeDeployedInstancesMC(data: ListRuntimeDeployedInstancesMCRequest, config?: AxiosRequestConfig): AxiosPromise<ListRuntimeDeployedInstancesMCResponse>;
  /** {@link ListRuntimesMC 获取运行时列表}({@link ListRuntimesMCRequest 请求参数}): {@link ListRuntimesMCResponse 返回参数} */
  ListRuntimesMC(data?: ListRuntimesMCRequest, config?: AxiosRequestConfig): AxiosPromise<ListRuntimesMCResponse>;
  /** {@link V20200715.DescribeEisConnectorConfig 获取连接器配置参数}({@link V20200715.DescribeEisConnectorConfigRequest 请求参数}): {@link V20200715.DescribeEisConnectorConfigResponse 返回参数} */
  DescribeEisConnectorConfig(data: V20200715.DescribeEisConnectorConfigRequest, config: AxiosRequestConfig & V20200715.VersionHeader): AxiosPromise<V20200715.DescribeEisConnectorConfigResponse>;
  /** {@link V20200715.ListEisConnectorOperations 获取连接器操作列表}({@link V20200715.ListEisConnectorOperationsRequest 请求参数}): {@link V20200715.ListEisConnectorOperationsResponse 返回参数} */
  ListEisConnectorOperations(data: V20200715.ListEisConnectorOperationsRequest, config: AxiosRequestConfig & V20200715.VersionHeader): AxiosPromise<V20200715.ListEisConnectorOperationsResponse>;
  /** {@link V20200715.ListEisConnectors 获取连接器列表}({@link V20200715.ListEisConnectorsRequest 请求参数}): {@link V20200715.ListEisConnectorsResponse 返回参数} */
  ListEisConnectors(data: V20200715.ListEisConnectorsRequest, config: AxiosRequestConfig & V20200715.VersionHeader): AxiosPromise<V20200715.ListEisConnectorsResponse>;
}

export declare type Versions = ["2021-06-01", "2020-07-15"];

export default Eis;
