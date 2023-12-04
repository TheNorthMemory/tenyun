/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 单条详细拨测数据 */
declare interface DetailedSingleDataDefine {
  /** 拨测时间戳 */
  ProbeTime: number;
  /** 储存所有string类型字段 */
  Labels: Label[];
  /** 储存所有float类型字段 */
  Fields: Field[];
}

/** 储存float类型字段 */
declare interface Field {
  /** 自定义字段编号 */
  ID: number;
  /** 自定义字段名称/说明 */
  Name: string;
  /** 字段值 */
  Value: number;
}

/** 健值对 */
declare interface KeyValuePair {
  /** 健 */
  Key: string;
  /** 值 */
  Value: string;
}

/** 保存string类型字段 */
declare interface Label {
  /** 自定义字段编号 */
  ID: number;
  /** 自定义字段名称/说明 */
  Name: string;
  /** 字段值 */
  Value: string;
}

/** 探测节点 */
declare interface NodeDefine {
  /** 节点名称 */
  Name: string;
  /** 节点代码 */
  Code: string;
  /** 节点类型 1 = IDC 2 = LastMile 3 = Mobile */
  Type: number;
  /** 网络服务商 */
  NetService: string;
  /** 区域 */
  District: string;
  /** 城市 */
  City: string;
  /** IP 类型 1 = IPv4 2 = IPv6 */
  IPType: number | null;
  /** 区域 1 = 中国大陆 2 = 港澳台 3 = 国外 */
  Location: number | null;
  /** 节点类型 如果为base 则为可用性拨测点，为空则为高级拨测点 */
  CodeType: string | null;
  /** 节点状态：1-运行,2-下线 */
  NodeDefineStatus: number | null;
}

/** 探测节点 */
declare interface NodeDefineExt {
  /** 节点名称 */
  Name: string;
  /** 节点代码 */
  Code: string;
  /** 节点类型 1 = IDC 2 = LastMile 3 = Mobile */
  Type: number;
  /** 网络服务商 */
  NetService: string;
  /** 区域 */
  District: string;
  /** 城市 */
  City: string;
  /** IP 类型 1 = IPv4 2 = IPv6 */
  IPType: number | null;
  /** 区域 1 = 中国大陆 2 = 港澳台 3 = 境外 */
  Location: number | null;
  /** 节点类型 如果为base 则为可用性拨测点，为空则为高级拨测点 */
  CodeType: string | null;
  /** 节点支持的任务类型。1: 页面性能 2: 文件上传 3: 文件下载 4: 端口性能 5: 网络质量 6: 音视频体验 */
  TaskTypes: number[] | null;
}

/** 拨测任务 */
declare interface ProbeTask {
  /** 任务名 */
  Name?: string | null;
  /** 任务 ID */
  TaskId?: string;
  /** 拨测类型1 = 页面浏览 2 =文件上传 3 = 文件下载 4 = 端口性能 5 = 网络质量 6 =流媒体 即时拨测只支持页面浏览，网络质量，文件下载 */
  TaskType?: number;
  /** 拨测节点列表 */
  Nodes?: string[];
  /** 拨测任务所选的拨测点IP类型，0-不限，1-IPv4，2-IPv6 */
  NodeIpType?: number | null;
  /** 拨测间隔 */
  Interval?: number;
  /** 拨测参数 */
  Parameters?: string;
  /** 任务状态1 = 创建中 2 = 运行中 3 = 运行异常 4 = 暂停中 5 = 暂停异常 6 = 任务暂停 7 = 任务删除中 8 = 任务删除异常 9 = 任务删除 10 = 定时任务暂停中 */
  Status?: number;
  /** 目标地址 */
  TargetAddress?: string;
  /** 付费模式1 = 试用版本 2 = 付费版本 */
  PayMode?: number;
  /** 订单状态1 = 正常 2 = 欠费 */
  OrderState?: number;
  /** 任务分类1 = PC 2 = Mobile */
  TaskCategory?: number;
  /** 创建时间 */
  CreatedAt?: string;
  /** 定时任务cron表达式 */
  Cron?: string | null;
  /** 定时任务启动状态1 = 定时任务表达式生效 2 = 定时任务表达式未生效（一般为任务手动暂停） */
  CronState?: number | null;
  /** 任务当前绑定的标签 */
  TagInfoList?: KeyValuePair[] | null;
}

/** 拨测任务基础配置 */
declare interface ProbeTaskBasicConfiguration {
  /** 拨测任务名称 */
  Name: string;
  /** 拨测目标地址 */
  TargetAddress: string;
}

/** 单个即时拨测任务信息 */
declare interface SingleInstantTask {
  /** 任务ID */
  TaskId: string;
  /** 任务地址 */
  TargetAddress: string;
  /** 任务类型 */
  TaskType: number;
  /** 测试时间 */
  ProbeTime: number;
  /** 任务状态 */
  Status: string;
  /** 成功率 */
  SuccessRate: number;
  /** 节点数量 */
  NodeCount: number;
  /** 节点类型 */
  TaskCategory: number;
}

/** 资源的标签，通过标签对资源进行划分用于支持细粒度的鉴权、分账等场景 */
declare interface Tag {
  /** key */
  TagKey: string;
  /** value */
  TagValue: string;
}

/** 任务执行结果 */
declare interface TaskResult {
  /** 任务 ID */
  TaskId: string;
  /** 是否成功 */
  Success: boolean | null;
  /** 错误信息 */
  ErrorMessage: string | null;
}

declare interface CreateProbeTasksRequest {
  /** 批量任务名-地址 */
  BatchTasks: ProbeTaskBasicConfiguration[];
  /** 任务类型，如1、2、3、4、5、6、7；1-页面性能、2-文件上传、3-文件下载、4-端口性能、5-网络质量、6-音视频体验、7-域名whois */
  TaskType: number;
  /** 拨测节点，如10001，具体拨测地域运营商对应的拨测点编号可联系云拨测确认。 */
  Nodes: string[];
  /** 拨测间隔 */
  Interval: number;
  /** 拨测参数，如{}，详细可参考云拨测官方文档。 */
  Parameters: string;
  /** 任务分类1 = PC 2 = Mobile */
  TaskCategory: number;
  /** 定时任务cron表达式 */
  Cron?: string;
  /** 资源标签值 */
  Tag?: Tag[];
  /** 测试类型，包含定时测试与即时测试。0-定时拨测，其它表示即时拨测。 */
  ProbeType?: number;
  /** 插件类型，如CDN，详情参考云拨测官方文档。 */
  PluginSource?: string;
  /** 客户端ID */
  ClientNum?: string;
  /** 拨测点IP类型：0-不限制IP类型，1-IPv4，2-IPv6 */
  NodeIpType?: number;
}

declare interface CreateProbeTasksResponse {
  /** 任务ID列表 */
  TaskIDs?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteProbeTaskRequest {
  /** 任务 ID */
  TaskIds: string[];
}

declare interface DeleteProbeTaskResponse {
  /** 任务总量 */
  Total: number;
  /** 任务成功量 */
  SuccessCount: number | null;
  /** 任务执行结果 */
  Results: TaskResult[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDetailedSingleProbeDataRequest {
  /** 开始时间戳（毫秒级） */
  BeginTime: number;
  /** 结束时间戳（毫秒级） */
  EndTime: number;
  /** 任务类型AnalyzeTaskType_Network：网络质量AnalyzeTaskType_Browse：页面性能AnalyzeTaskType_UploadDownload：文件传输（含文件上传、文件下载）AnalyzeTaskType_Transport：端口性能AnalyzeTaskType_MediaStream：音视频体验 */
  TaskType: string;
  /** 待排序字段可以填写 ProbeTime 拨测时间排序也可填写SelectedFields 中的选中字段 */
  SortField: string;
  /** true表示升序 */
  Ascending: boolean;
  /** 选中字段 */
  SelectedFields: string[];
  /** 起始取数位置 */
  Offset: number;
  /** 取数数量 */
  Limit: number;
  /** 任务ID */
  TaskID?: string[];
  /** 拨测点运营商	这里实际按拨测结果中的运营商来填写即可电信：中国电信移动：中国移动联通：中国联通 */
  Operators?: string[];
  /** 拨测点地区	这里实际按拨测结果中的地区来填写即可国内一般是省级单位，如广东、广西、中国香港、新疆；直辖市则填北京、上海境外一般是国家名，如澳大利亚、新加坡 */
  Districts?: string[];
  /** 错误类型 */
  ErrorTypes?: string[];
  /** 城市这里实际按拨测结果中的城市来填写即可示例：深圳市武汉市首尔多伦多 */
  City?: string[];
  /** es scroll查询id */
  ScrollID?: string;
}

declare interface DescribeDetailedSingleProbeDataResponse {
  /** 单次详情数据 */
  DataSet?: DetailedSingleDataDefine[];
  /** 符合条件的数据总数 */
  TotalNumber?: number;
  /** es scroll查询的id */
  ScrollID?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstantTasksRequest {
  /** 数量 */
  Limit: number;
  /** 起始位置 */
  Offset: number;
}

declare interface DescribeInstantTasksResponse {
  /** 任务 */
  Tasks: SingleInstantTask[] | null;
  /** 总数 */
  Total: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeNodesRequest {
  /** 节点类型 1 = IDC 2 = LastMile 3 = Mobile */
  NodeType?: number;
  /** 节点区域 1 = 中国大陆 2 = 港澳台 3 = 境外 */
  Location?: number;
  /** 是否IPv6 */
  IsIPv6?: boolean;
  /** 名字模糊搜索 */
  NodeName?: string;
  /** 付费模式1 = 试用版本 2 = 付费版本 */
  PayMode?: number;
  /** 任务类型1 = 页面性能2 = 文件上传3 = 文件下载4 = 端口性能5 = 网络质量6 = 音视频体验 */
  TaskType?: number;
}

declare interface DescribeNodesResponse {
  /** 节点列表 */
  NodeSet?: NodeDefineExt[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeProbeMetricDataRequest {
  /** 分析任务类型，支持以下几种类型：AnalyzeTaskType_Network：网络质量AnalyzeTaskType_Browse：页面性能AnalyzeTaskType_Transport：端口性能AnalyzeTaskType_UploadDownload：文件传输AnalyzeTaskType_MediaStream：音视频体验 */
  AnalyzeTaskType?: string;
  /** 指标类型（counter、gauge以及histogram），指标查询默认传gauge */
  MetricType?: string;
  /** 指标详细字段，可以传递传具体的指标也可以对指标进行聚合查询例如："avg(ping_time)"代表整体时延(ms)；不同的任务类型支持不同的field查询，以及聚合规则，详情可见https://cloud.tencent.com/document/product/248/87584。 */
  Field?: string;
  /** 过滤条件可以传单个过滤条件也可以拼接多个参数 */
  Filter?: string;
  /** 聚合时间, 1m、1d、30d 等等 */
  GroupBy?: string;
  /** 多条件过滤，支持多个过滤条件组合查询例如：[""host" = 'www.test.com'", "time >= now()-1h"] */
  Filters?: string[];
}

declare interface DescribeProbeMetricDataResponse {
  /** 返回指标 JSON 序列化后的字符串,具体如下所示："[{\"name\":\"task_navigate_request_gauge\",\"columns\":[\"time\",\"avg(first_screen_time) / 1000\"],\"values\":[[1641571200,6.756600000000001]],\"tags\":null}]" */
  MetricSet?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeProbeNodesRequest {
  /** 节点类型 1 = IDC 2 = LastMile 3 = Mobile */
  NodeType?: number;
  /** 节点区域 1 = 中国大陆 2 = 港澳台 3 = 海外 */
  Location?: number;
  /** 是否IPv6 */
  IsIPv6?: boolean;
  /** 名字模糊搜索 */
  NodeName?: string;
  /** 付费模式1 = 试用版本 2 = 付费版本 */
  PayMode?: number;
}

declare interface DescribeProbeNodesResponse {
  /** 节点列表 */
  NodeSet?: NodeDefine[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeProbeTasksRequest {
  /** 任务 ID 列表 */
  TaskIDs?: string[];
  /** 任务名 */
  TaskName?: string;
  /** 拨测目标 */
  TargetAddress?: string;
  /** 任务状态列表1 = 创建中 2 = 运行中 3 = 运行异常 4 = 暂停中 5 = 暂停异常 6 = 任务暂停 7 = 任务删除中 8 = 任务删除异常 9 = 任务删除 10 = 定时任务暂停中 */
  TaskStatus?: number[];
  /** 偏移量，默认为0 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100 */
  Limit?: number;
  /** 付费模式1 = 试用版本 2 = 付费版本 */
  PayMode?: number;
  /** 订单状态1 = 正常 2 = 欠费 */
  OrderState?: number;
  /** 拨测类型1 = 页面浏览 2 =文件上传 3 = 文件下载 4 = 端口性能 5 = 网络质量 6 =流媒体 即使拨测只支持页面浏览，网络质量，文件下载 */
  TaskType?: number[];
  /** 节点类型 */
  TaskCategory?: number[];
  /** 排序的列 */
  OrderBy?: string;
  /** 是否正序 */
  Ascend?: boolean;
  /** 资源标签值 */
  TagFilters?: KeyValuePair[];
}

declare interface DescribeProbeTasksResponse {
  /** 任务列表 */
  TaskSet: ProbeTask[] | null;
  /** 任务总数 */
  Total: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ResumeProbeTaskRequest {
  /** 任务 ID */
  TaskIds: string[];
}

declare interface ResumeProbeTaskResponse {
  /** 任务总量 */
  Total: number;
  /** 任务成功量 */
  SuccessCount: number | null;
  /** 任务执行详情 */
  Results: TaskResult[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SuspendProbeTaskRequest {
  /** 任务 ID */
  TaskIds: string[];
}

declare interface SuspendProbeTaskResponse {
  /** 任务总量 */
  Total: number;
  /** 任务成功量 */
  SuccessCount: number | null;
  /** 任务执行结果 */
  Results: TaskResult[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateProbeTaskAttributesRequest {
  /** 任务 ID */
  TaskId: string;
  /** 任务名 */
  Name?: string;
}

declare interface UpdateProbeTaskAttributesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateProbeTaskConfigurationListRequest {
  /** 任务 ID，如task-n1wchki8 */
  TaskIds: string[];
  /** 拨测节点，如10001，详细地区运营商拨测编号请联系云拨测。 */
  Nodes: string[];
  /** 拨测间隔，如30，单位为分钟。 */
  Interval: number;
  /** 拨测参数，详细参数配置可参考云拨测官网文档。 */
  Parameters: string;
  /** 定时任务cron表达式 */
  Cron?: string;
  /** 预付费套餐id需要与taskId对应 */
  ResourceIDs?: string[];
  /** 拨测节点的IP类型，0-不限，1-IPv4，2-IPv6 */
  NodeIpType?: number;
}

declare interface UpdateProbeTaskConfigurationListResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Cat 云拨测} */
declare interface Cat {
  (): Versions;
  /** 批量创建拨测任务 {@link CreateProbeTasksRequest} {@link CreateProbeTasksResponse} */
  CreateProbeTasks(data: CreateProbeTasksRequest, config?: AxiosRequestConfig): AxiosPromise<CreateProbeTasksResponse>;
  /** 删除拨测任务 {@link DeleteProbeTaskRequest} {@link DeleteProbeTaskResponse} */
  DeleteProbeTask(data: DeleteProbeTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteProbeTaskResponse>;
  /** 列出单次拨测详情数据 {@link DescribeDetailedSingleProbeDataRequest} {@link DescribeDetailedSingleProbeDataResponse} */
  DescribeDetailedSingleProbeData(data: DescribeDetailedSingleProbeDataRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDetailedSingleProbeDataResponse>;
  /** 获取历史即时拨测任务 {@link DescribeInstantTasksRequest} {@link DescribeInstantTasksResponse} */
  DescribeInstantTasks(data: DescribeInstantTasksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstantTasksResponse>;
  /** 获取拨测节点 {@link DescribeNodesRequest} {@link DescribeNodesResponse} */
  DescribeNodes(data?: DescribeNodesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNodesResponse>;
  /** 列出云拨测指标详细数据 {@link DescribeProbeMetricDataRequest} {@link DescribeProbeMetricDataResponse} */
  DescribeProbeMetricData(data?: DescribeProbeMetricDataRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProbeMetricDataResponse>;
  /** 查询拨测节点 {@link DescribeProbeNodesRequest} {@link DescribeProbeNodesResponse} */
  DescribeProbeNodes(data?: DescribeProbeNodesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProbeNodesResponse>;
  /** 分页查询拨测任务列表 {@link DescribeProbeTasksRequest} {@link DescribeProbeTasksResponse} */
  DescribeProbeTasks(data?: DescribeProbeTasksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProbeTasksResponse>;
  /** 恢复拨测任务 {@link ResumeProbeTaskRequest} {@link ResumeProbeTaskResponse} */
  ResumeProbeTask(data: ResumeProbeTaskRequest, config?: AxiosRequestConfig): AxiosPromise<ResumeProbeTaskResponse>;
  /** 暂停拨测任务 {@link SuspendProbeTaskRequest} {@link SuspendProbeTaskResponse} */
  SuspendProbeTask(data: SuspendProbeTaskRequest, config?: AxiosRequestConfig): AxiosPromise<SuspendProbeTaskResponse>;
  /** 更新探测任务属性 {@link UpdateProbeTaskAttributesRequest} {@link UpdateProbeTaskAttributesResponse} */
  UpdateProbeTaskAttributes(data: UpdateProbeTaskAttributesRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateProbeTaskAttributesResponse>;
  /** 批量更新拨测任务配置 {@link UpdateProbeTaskConfigurationListRequest} {@link UpdateProbeTaskConfigurationListResponse} */
  UpdateProbeTaskConfigurationList(data: UpdateProbeTaskConfigurationListRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateProbeTaskConfigurationListResponse>;
}

export declare type Versions = ["2018-04-09"];

export default Cat;
