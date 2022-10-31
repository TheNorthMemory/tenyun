/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 自动化助手客户端信息 */
declare interface AutomationAgentInfo {
  /** 实例ID。 */
  InstanceId: string;
  /** Agent 版本号。 */
  Version: string;
  /** 上次心跳时间 */
  LastHeartbeatTime: string;
  /** Agent状态，取值范围： Online：在线 Offline：离线 */
  AgentStatus: string;
  /** Agent运行环境，取值范围： Linux：Linux实例 Windows：Windows实例 */
  Environment: string;
}

/** 命令详情。 */
declare interface Command {
  /** 命令ID。 */
  CommandId: string;
  /** 命令名称。 */
  CommandName: string;
  /** 命令描述。 */
  Description: string;
  /** Base64编码后的命令内容。 */
  Content: string;
  /** 命令类型。 */
  CommandType: string;
  /** 命令执行路径。 */
  WorkingDirectory: string;
  /** 命令超时时间。 */
  Timeout: number;
  /** 命令创建时间。 */
  CreatedTime: string;
  /** 命令更新时间。 */
  UpdatedTime: string;
  /** 是否启用自定义参数功能。 */
  EnableParameter: boolean;
  /** 自定义参数的默认取值。 */
  DefaultParameters: string;
  /** 命令的结构化描述。公共命令有值，用户命令为空字符串。 */
  FormattedDescription: string;
  /** 命令创建者。TAT 代表公共命令，USER 代表个人命令。 */
  CreatedBy: string;
  /** 命令关联的标签列表。 */
  Tags: Tag[];
  /** 在实例上执行命令的用户名。 */
  Username: string;
  /** 日志上传的cos bucket 地址。 */
  OutputCOSBucketUrl: string;
  /** 日志在cos bucket中的目录。 */
  OutputCOSKeyPrefix: string;
}

/** 命令执行详情。 */
declare interface CommandDocument {
  /** Base64 编码后的执行命令。 */
  Content: string;
  /** 命令类型。 */
  CommandType: string;
  /** 超时时间。 */
  Timeout: number;
  /** 执行路径。 */
  WorkingDirectory: string;
  /** 执行用户。 */
  Username: string;
}

/** >描述键值对过滤器，用于条件过滤查询。例如过滤ID、名称、状态等> * 若存在多个`Filter`时，`Filter`间的关系为逻辑与（`AND`）关系。> * 若同一个`Filter`存在多个`Values`，同一`Filter`下`Values`间的关系为逻辑或（`OR`）关系。>> 以[DescribeInstances](https://cloud.tencent.com/document/api/213/15728)接口的`Filter`为例。若我们需要查询可用区（`zone`）为广州一区 ***并且*** 实例计费模式（`instance-charge-type`）为包年包月 ***或者*** 按量计费的实例时，可如下实现：```Filters.0.Name=zone&Filters.0.Values.0=ap-guangzhou-1&Filters.1.Name=instance-charge-type&Filters.1.Values.0=PREPAID&Filters.1.Values.1=POSTPAID_BY_HOUR``` */
declare interface Filter {
  /** 需要过滤的字段。 */
  Name: string;
  /** 字段的过滤值。 */
  Values: string[];
}

/** 执行活动详情。 */
declare interface Invocation {
  /** 执行活动ID。 */
  InvocationId: string;
  /** 命令ID。 */
  CommandId: string;
  /** 执行任务状态。取值范围： PENDING：等待下发 RUNNING：命令运行中 SUCCESS：命令成功 FAILED：命令失败 TIMEOUT：命令超时 PARTIAL_FAILED：命令部分失败 */
  InvocationStatus: string;
  /** 执行任务信息列表。 */
  InvocationTaskBasicInfoSet: InvocationTaskBasicInfo[];
  /** 执行活动描述。 */
  Description: string;
  /** 执行活动开始时间。 */
  StartTime: string;
  /** 执行活动结束时间。 */
  EndTime: string;
  /** 执行活动创建时间。 */
  CreatedTime: string;
  /** 执行活动更新时间。 */
  UpdatedTime: string;
  /** 自定义参数取值。 */
  Parameters: string;
  /** 自定义参数的默认取值。 */
  DefaultParameters: string;
  /** 执行命令的实例类型，取值范围：CVM、LIGHTHOUSE。 */
  InstanceKind: string;
  /** 在实例上执行命令时使用的用户名。 */
  Username: string;
  /** 调用来源。 */
  InvocationSource: string;
  /** base64编码的命令内容 */
  CommandContent: string;
  /** 命令类型 */
  CommandType: string;
  /** 执行命令过期时间， 单位秒 */
  Timeout: number;
  /** 执行命令的工作路径 */
  WorkingDirectory: string;
  /** 日志上传的cos bucket 地址。 */
  OutputCOSBucketUrl: string;
  /** 日志在cos bucket中的目录。 */
  OutputCOSKeyPrefix: string;
}

/** 执行任务。 */
declare interface InvocationTask {
  /** 执行活动ID。 */
  InvocationId: string;
  /** 执行任务ID。 */
  InvocationTaskId: string;
  /** 命令ID。 */
  CommandId: string;
  /** 执行任务状态。取值范围： PENDING：等待下发 DELIVERING：下发中 DELIVER_DELAYED：延时下发 DELIVER_FAILED：下发失败 START_FAILED：命令启动失败 RUNNING：命令运行中 SUCCESS：命令成功 FAILED：命令执行失败，执行完退出码不为 0 TIMEOUT：命令超时 TASK_TIMEOUT：执行任务超时 CANCELLING：取消中 CANCELLED：已取消（命令启动前就被取消） TERMINATED：已中止（命令执行期间被取消） */
  TaskStatus: string;
  /** 实例ID。 */
  InstanceId: string;
  /** 执行结果。 */
  TaskResult: TaskResult;
  /** 执行任务开始时间。 */
  StartTime: string;
  /** 执行任务结束时间。 */
  EndTime: string;
  /** 创建时间。 */
  CreatedTime: string;
  /** 更新时间。 */
  UpdatedTime: string;
  /** 执行任务所执行的命令详情。 */
  CommandDocument: CommandDocument;
  /** 执行任务失败时的错误信息。 */
  ErrorInfo: string;
  /** 调用来源。 */
  InvocationSource: string;
}

/** 执行活动任务简介。 */
declare interface InvocationTaskBasicInfo {
  /** 执行任务ID。 */
  InvocationTaskId: string;
  /** 执行任务状态。取值范围： PENDING：等待下发 DELIVERING：下发中 DELIVER_DELAYED：延时下发 DELIVER_FAILED：下发失败 START_FAILED：命令启动失败 RUNNING：命令运行中 SUCCESS：命令成功 FAILED：命令执行失败，执行完退出码不为 0 TIMEOUT：命令超时 TASK_TIMEOUT：执行任务超时 CANCELLING：取消中 CANCELLED：已取消（命令启动前就被取消） TERMINATED：已中止（命令执行期间被取消） */
  TaskStatus: string;
  /** 实例ID。 */
  InstanceId: string;
}

/** 执行器信息。 */
declare interface Invoker {
  /** 执行器ID。 */
  InvokerId: string;
  /** 执行器名称。 */
  Name: string;
  /** 执行器类型。 */
  Type: string;
  /** 命令ID。 */
  CommandId: string;
  /** 用户名。 */
  Username: string;
  /** 自定义参数。 */
  Parameters: string;
  /** 实例ID列表。 */
  InstanceIds: string[];
  /** 执行器是否启用。 */
  Enable: boolean;
  /** 执行器周期计划。周期执行器会返回此字段。 */
  ScheduleSettings: ScheduleSettings | null;
  /** 创建时间。 */
  CreatedTime: string;
  /** 修改时间。 */
  UpdatedTime: string;
}

/** 执行器执行记录。 */
declare interface InvokerRecord {
  /** 执行器ID。 */
  InvokerId: string;
  /** 执行时间。 */
  InvokeTime: string;
  /** 执行原因。 */
  Reason: string;
  /** 命令执行ID。 */
  InvocationId: string;
  /** 触发结果。 */
  Result: string;
}

/** 描述单个地域信息 */
declare interface RegionInfo {
  /** 地域名称，例如，ap-guangzhou */
  Region: string;
  /** 地域描述，例如: 广州 */
  RegionName: string;
  /** 地域是否可用状态，AVAILABLE 代表可用 */
  RegionState: string;
}

/** 周期执行器设置。 */
declare interface ScheduleSettings {
  /** 执行策略：ONCE：单次执行RECURRENCE：周期执行 */
  Policy: string;
  /** 触发 Crontab 表达式。Policy 为 RECURRENCE 时，需要指定此字段。Crontab 按北京时间解析。 */
  Recurrence?: string;
  /** 执行器下次执行时间。Policy 为 ONCE 时，需要指定此字段。 */
  InvokeTime?: string;
}

/** 标签 */
declare interface Tag {
  /** 标签键。 */
  Key: string;
  /** 标签值。 */
  Value: string;
}

/** 任务结果。 */
declare interface TaskResult {
  /** 命令执行ExitCode。 */
  ExitCode: number;
  /** Base64编码后的命令输出。最大长度24KB。 */
  Output: string;
  /** 命令执行开始时间。 */
  ExecStartTime: string;
  /** 命令执行结束时间。 */
  ExecEndTime: string;
  /** 命令最终输出被截断的字节数。 */
  Dropped: number;
  /** 日志在cos中的地址 */
  OutputUrl: string;
  /** 日志上传cos的错误信息。 */
  OutputUploadCOSErrorInfo: string;
}

declare interface CancelInvocationRequest {
  /** 执行活动ID */
  InvocationId: string;
  /** 实例ID列表，上限100。支持实例类型： CVM LIGHTHOUSE */
  InstanceIds?: string[];
}

declare interface CancelInvocationResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateCommandRequest {
  /** 命令名称。名称仅支持中文、英文、数字、下划线、分隔符"-"、小数点，最大长度不能超60个字节。 */
  CommandName: string;
  /** Base64编码后的命令内容，长度不可超过64KB。 */
  Content: string;
  /** 命令描述。不超过120字符。 */
  Description?: string;
  /** 命令类型，目前支持取值：SHELL、POWERSHELL。默认：SHELL。 */
  CommandType?: string;
  /** 命令执行路径，对于 SHELL 命令默认为 /root，对于 POWERSHELL 命令默认为 C:\Program Files\qcloud\tat_agent\workdir。 */
  WorkingDirectory?: string;
  /** 命令超时时间，默认60秒。取值范围[1, 86400]。 */
  Timeout?: number;
  /** 是否启用自定义参数功能。一旦创建，此值不提供修改。默认值：false。 */
  EnableParameter?: boolean;
  /** 启用自定义参数功能时，自定义参数的默认取值。字段类型为json encoded string。如：{\"varA\": \"222\"}。key为自定义参数名称，value为该参数的默认取值。kv均为字符串型。如果InvokeCommand时未提供参数取值，将使用这里的默认值进行替换。自定义参数最多20个。自定义参数名称需符合以下规范：字符数目上限64，可选范围【a-zA-Z0-9-_】。 */
  DefaultParameters?: string;
  /** 为命令关联的标签，列表长度不超过10。 */
  Tags?: Tag[];
  /** 在 CVM 或 Lighthouse 实例中执行命令的用户名称。使用最小权限执行命令是权限管理的最佳实践，建议您以普通用户身份执行云助手命令。默认情况下，在 Linux 实例中以 root 用户执行命令；在Windows 实例中以 System 用户执行命令。 */
  Username?: string;
  /** 指定日志上传的cos bucket 地址，必须以https开头，如 https://BucketName-123454321.cos.ap-beijing.myqcloud.com。 */
  OutputCOSBucketUrl?: string;
  /** 指定日志在cos bucket中的目录，目录命名有如下规则：1. 可用数字、中英文和可见字符的组合，长度最多为60。2. 用 / 分割路径，可快速创建子目录。3. 不允许连续 / ；不允许以 / 开头；不允许以..作为文件夹名称 */
  OutputCOSKeyPrefix?: string;
}

declare interface CreateCommandResponse {
  /** 命令ID。 */
  CommandId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateInvokerRequest {
  /** 执行器名称。 */
  Name: string;
  /** 执行器类型，当前仅支持周期类型执行器，取值：`SCHEDULE` 。 */
  Type: string;
  /** 远程命令ID。 */
  CommandId: string;
  /** 触发器关联的实例ID。列表上限 100。 */
  InstanceIds: string[];
  /** 命令执行用户。 */
  Username?: string;
  /** 命令自定义参数。 */
  Parameters?: string;
  /** 周期执行器设置，当创建周期执行器时，必须指定此参数。 */
  ScheduleSettings?: ScheduleSettings;
}

declare interface CreateInvokerResponse {
  /** 执行器ID。 */
  InvokerId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteCommandRequest {
  /** 待删除的命令ID。 */
  CommandId: string;
}

declare interface DeleteCommandResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteInvokerRequest {
  /** 待删除的执行器ID。 */
  InvokerId: string;
}

declare interface DeleteInvokerResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAutomationAgentStatusRequest {
  /** 待查询的实例ID列表。 */
  InstanceIds?: string[];
  /** 过滤条件。 agent-status - String - 是否必填：否 -（过滤条件）按照agent状态过滤，取值：Online 在线，Offline 离线。 environment - String - 是否必填：否 -（过滤条件）按照agent运行环境查询，取值：Linux。 instance-id - String - 是否必填：否 -（过滤条件）按照实例ID过滤。 每次请求的 `Filters` 的上限为10， `Filter.Values` 的上限为5。参数不支持同时指定 `InstanceIds` 和 `Filters` 。 */
  Filters?: Filter[];
  /** 返回数量，默认为20，最大值为100。关于 `Limit` 的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。 */
  Limit?: number;
  /** 偏移量，默认为0。关于 `Offset` 的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。 */
  Offset?: number;
}

declare interface DescribeAutomationAgentStatusResponse {
  /** Agent 信息列表。 */
  AutomationAgentSet: AutomationAgentInfo[];
  /** 符合条件的 Agent 总数。 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeCommandsRequest {
  /** 命令ID列表，每次请求的上限为100。参数不支持同时指定 `CommandIds` 和 `Filters` 。 */
  CommandIds?: string[];
  /** 过滤条件。 command-id - String - 是否必填：否 -（过滤条件）按照命令ID过滤。 command-name - String - 是否必填：否 -（过滤条件）按照命令名称过滤。 command-type - String - 是否必填：否 -（过滤条件）按照命令类型过滤，取值为 SHELL 或 POWERSHELL。 created-by - String - 是否必填：否 -（过滤条件）按照命令创建者过滤，取值为 TAT 或 USER，TAT 代表公共命令，USER 代表由用户创建的命令。 tag-key - String - 是否必填：否 -（过滤条件）按照标签键进行过滤。 tag-value - String - 是否必填：否 -（过滤条件）按照标签值进行过滤。 tag:tag-key - String - 是否必填：否 -（过滤条件）按照标签键值对进行过滤。 tag-key使用具体的标签键进行替换。使用请参考示例4每次请求的 `Filters` 的上限为10， `Filter.Values` 的上限为5。参数不支持同时指定 `CommandIds` 和 `Filters` 。 */
  Filters?: Filter[];
  /** 返回数量，默认为20，最大值为100。关于 `Limit` 的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。 */
  Limit?: number;
  /** 偏移量，默认为0。关于 `Offset` 的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。 */
  Offset?: number;
}

declare interface DescribeCommandsResponse {
  /** 符合条件的命令总数。 */
  TotalCount: number;
  /** 命令详情列表。 */
  CommandSet: Command[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeInvocationTasksRequest {
  /** 执行任务ID列表，每次请求的上限为100。参数不支持同时指定 `InvocationTaskIds` 和 `Filters`。 */
  InvocationTaskIds?: string[];
  /** 过滤条件。 invocation-id - String - 是否必填：否 -（过滤条件）按照执行活动ID过滤。 invocation-task-id - String - 是否必填：否 -（过滤条件）按照执行任务ID过滤。 instance-id - String - 是否必填：否 -（过滤条件）按照实例ID过滤。 command-id - String - 是否必填：否 -（过滤条件）按照命令ID过滤。 每次请求的 `Filters` 的上限为10， `Filter.Values` 的上限为5。参数不支持同时指定 `InvocationTaskIds` 和 `Filters` 。 */
  Filters?: Filter[];
  /** 返回数量，默认为20，最大值为100。关于 `Limit` 的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。 */
  Limit?: number;
  /** 偏移量，默认为0。关于 `Offset` 的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。 */
  Offset?: number;
  /** 是否隐藏输出，取值范围：True：隐藏输出 False：不隐藏 默认为 True。 */
  HideOutput?: boolean;
}

declare interface DescribeInvocationTasksResponse {
  /** 符合条件的执行任务总数。 */
  TotalCount: number;
  /** 执行任务列表。 */
  InvocationTaskSet: InvocationTask[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeInvocationsRequest {
  /** 执行活动ID列表，每次请求的上限为100。参数不支持同时指定 `InvocationIds` 和 `Filters`。 */
  InvocationIds?: string[];
  /** 过滤条件。 invocation-id - String - 是否必填：否 -（过滤条件）按照执行活动ID过滤。 command-id - String - 是否必填：否 -（过滤条件）按照命令ID过滤。 command-created-by - String - 是否必填：否 -（过滤条件）按照执行的命令类型过滤，取值为 TAT 或 USER，TAT 代表公共命令，USER 代表由用户创建的命令。 instance-kind - String - 是否必填：否 -（过滤条件）按照运行实例类型过滤，取值为 CVM 或 LIGHTHOUSE，CVM 代表实例为云服务器， LIGHTHOUSE 代表实例为轻量应用服务器。每次请求的 `Filters` 的上限为10， `Filter.Values` 的上限为5。参数不支持同时指定 `InvocationIds` 和 `Filters` 。 */
  Filters?: Filter[];
  /** 返回数量，默认为20，最大值为100。关于 `Limit` 的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。 */
  Limit?: number;
  /** 偏移量，默认为0。关于 `Offset` 的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。 */
  Offset?: number;
}

declare interface DescribeInvocationsResponse {
  /** 符合条件的执行活动总数。 */
  TotalCount: number;
  /** 执行活动列表。 */
  InvocationSet: Invocation[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeInvokerRecordsRequest {
  /** 执行器ID列表。列表上限 100。 */
  InvokerIds?: string[];
  /** 返回数量，默认为20，最大值为100。 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
}

declare interface DescribeInvokerRecordsResponse {
  /** 符合条件的历史记录数量。 */
  TotalCount: number;
  /** 执行器执行历史记录。 */
  InvokerRecordSet: InvokerRecord[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeInvokersRequest {
  /** 执行器ID列表。 */
  InvokerIds?: string[];
  /** 过滤条件： invoker-id - String - 是否必填：否 - （过滤条件）按执行器ID过滤。 command-id - String - 是否必填：否 - （过滤条件）按命令ID过滤。 type - String - 是否必填：否 - （过滤条件）按执行器类型过滤。 */
  Filters?: Filter[];
  /** 返回数量，默认为20，最大值为100。 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
}

declare interface DescribeInvokersResponse {
  /** 满足条件的执行器数量。 */
  TotalCount: number;
  /** 执行器信息。 */
  InvokerSet: Invoker[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeRegionsRequest {
}

declare interface DescribeRegionsResponse {
  /** 地域数量 */
  TotalCount: number;
  /** 地域信息列表 */
  RegionSet: RegionInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DisableInvokerRequest {
  /** 待停止的执行器ID。 */
  InvokerId: string;
}

declare interface DisableInvokerResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface EnableInvokerRequest {
  /** 待启用的执行器ID。 */
  InvokerId: string;
}

declare interface EnableInvokerResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface InvokeCommandRequest {
  /** 待触发的命令ID。 */
  CommandId: string;
  /** 待执行命令的实例ID列表，上限100。 */
  InstanceIds: string[];
  /** Command 的自定义参数。字段类型为json encoded string。如：{\"varA\": \"222\"}。key为自定义参数名称，value为该参数的默认取值。kv均为字符串型。如果未提供该参数取值，将使用 Command 的 DefaultParameters 进行替换。自定义参数最多20个。自定义参数名称需符合以下规范：字符数目上限64，可选范围【a-zA-Z0-9-_】。 */
  Parameters?: string;
  /** 在 CVM 或 Lighthouse 实例中执行命令的用户名称。使用最小权限执行命令是权限管理的最佳实践，建议您以普通用户身份执行云助手命令。若不填，默认以 Command 配置的 Username 执行。 */
  Username?: string;
  /** 命令执行路径, 默认以Command配置的WorkingDirectory执行。 */
  WorkingDirectory?: string;
  /** 命令超时时间，取值范围[1, 86400]。默认以Command配置的Timeout执行。 */
  Timeout?: number;
  /** 指定日志上传的cos bucket 地址，必须以https开头，如 https://BucketName-123454321.cos.ap-beijing.myqcloud.com。 */
  OutputCOSBucketUrl?: string;
  /** 指定日志在cos bucket中的目录，目录命名有如下规则：1. 可用数字、中英文和可见字符的组合，长度最多为60。2. 用 / 分割路径，可快速创建子目录。3. 不允许连续 / ；不允许以 / 开头；不允许以..作为文件夹名称。 */
  OutputCOSKeyPrefix?: string;
}

declare interface InvokeCommandResponse {
  /** 执行活动ID。 */
  InvocationId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyCommandRequest {
  /** 命令ID。 */
  CommandId: string;
  /** 命令名称。名称仅支持中文、英文、数字、下划线、分隔符"-"、小数点，最大长度不能超60个字节。 */
  CommandName?: string;
  /** 命令描述。不超过120字符。 */
  Description?: string;
  /** Base64编码后的命令内容，长度不可超过64KB。 */
  Content?: string;
  /** 命令类型，目前支持取值：SHELL、POWERSHELL。 */
  CommandType?: string;
  /** 命令执行路径。 */
  WorkingDirectory?: string;
  /** 命令超时时间。取值范围[1, 86400]。 */
  Timeout?: number;
  /** 启用自定义参数功能时，自定义参数的默认取值。字段类型为json encoded string。如：{\"varA\": \"222\"}。采取整体全覆盖式修改，即修改时必须提供所有新默认值。必须 Command 的 EnableParameter 为 true 时，才允许修改这个值。key为自定义参数名称，value为该参数的默认取值。kv均为字符串型。自定义参数最多20个。自定义参数名称需符合以下规范：字符数目上限64，可选范围【a-zA-Z0-9-_】。 */
  DefaultParameters?: string;
  /** 在 CVM 或 Lighthouse 实例中执行命令的用户名称。使用最小权限执行命令是权限管理的最佳实践，建议您以普通用户身份执行云助手命令。 */
  Username?: string;
  /** 指定日志上传的cos bucket 地址，必须以https开头，如 https://BucketName-123454321.cos.ap-beijing.myqcloud.com。 */
  OutputCOSBucketUrl?: string;
  /** 指定日志在cos bucket中的目录，目录命名有如下规则：1. 可用数字、中英文和可见字符的组合，长度最多为60。2. 用 / 分割路径，可快速创建子目录。3. 不允许连续 / ；不允许以 / 开头；不允许以..作为文件夹名称。 */
  OutputCOSKeyPrefix?: string;
}

declare interface ModifyCommandResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyInvokerRequest {
  /** 待修改的执行器ID。 */
  InvokerId: string;
  /** 待修改的执行器名称。 */
  Name?: string;
  /** 执行器类型，当前仅支持周期类型执行器，取值：`SCHEDULE` 。 */
  Type?: string;
  /** 待修改的命令ID。 */
  CommandId?: string;
  /** 待修改的用户名。 */
  Username?: string;
  /** 待修改的自定义参数。 */
  Parameters?: string;
  /** 待修改的实例ID列表。列表长度上限100。 */
  InstanceIds?: string[];
  /** 待修改的周期执行器设置。 */
  ScheduleSettings?: ScheduleSettings;
}

declare interface ModifyInvokerResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface PreviewReplacedCommandContentRequest {
  /** 本次预览采用的自定义参数。字段类型为 json encoded string，如：{\"varA\": \"222\"}。key 为自定义参数名称，value 为该参数的取值。kv 均为字符串型。自定义参数最多 20 个。自定义参数名称需符合以下规范：字符数目上限 64，可选范围【a-zA-Z0-9-_】。如果将预览的 CommandId 设置过 DefaultParameters，本参数可以为空。 */
  Parameters?: string;
  /** 要进行替换预览的命令，如果有设置过 DefaultParameters，会与 Parameters 进行叠加，后者覆盖前者。CommandId 与 Content，必须且只能提供一个。 */
  CommandId?: string;
  /** 要预览的命令内容，经 Base64 编码，长度不可超过 64KB。CommandId 与 Content，必须且只能提供一个。 */
  Content?: string;
}

declare interface PreviewReplacedCommandContentResponse {
  /** 自定义参数替换后的，经Base64编码的命令内容。 */
  ReplacedContent: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface RunCommandRequest {
  /** Base64编码后的命令内容，长度不可超过64KB。 */
  Content: string;
  /** 待执行命令的实例ID列表，上限100。支持实例类型： CVM LIGHTHOUSE */
  InstanceIds: string[];
  /** 命令名称。名称仅支持中文、英文、数字、下划线、分隔符"-"、小数点，最大长度不能超60个字节。 */
  CommandName?: string;
  /** 命令描述。不超过120字符。 */
  Description?: string;
  /** 命令类型，目前支持取值：SHELL、POWERSHELL。默认：SHELL。 */
  CommandType?: string;
  /** 命令执行路径，对于 SHELL 命令默认为 /root，对于 POWERSHELL 命令默认为 C:\Program Files\qcloud\tat_agent\workdir。 */
  WorkingDirectory?: string;
  /** 命令超时时间，默认60秒。取值范围[1, 86400]。 */
  Timeout?: number;
  /** 是否保存命令，取值范围： True：保存 False：不保存默认为 False。 */
  SaveCommand?: boolean;
  /** 是否启用自定义参数功能。一旦创建，此值不提供修改。默认值：false。 */
  EnableParameter?: boolean;
  /** 启用自定义参数功能时，自定义参数的默认取值。字段类型为json encoded string。如：{\"varA\": \"222\"}。key为自定义参数名称，value为该参数的默认取值。kv均为字符串型。如果 Parameters 未提供，将使用这里的默认值进行替换。自定义参数最多20个。自定义参数名称需符合以下规范：字符数目上限64，可选范围【a-zA-Z0-9-_】。 */
  DefaultParameters?: string;
  /** Command 的自定义参数。字段类型为json encoded string。如：{\"varA\": \"222\"}。key为自定义参数名称，value为该参数的默认取值。kv均为字符串型。如果未提供该参数取值，将使用 DefaultParameters 进行替换。自定义参数最多20个。自定义参数名称需符合以下规范：字符数目上限64，可选范围【a-zA-Z0-9-_】。 */
  Parameters?: string;
  /** 如果保存命令，可为命令设置标签。列表长度不超过10。 */
  Tags?: Tag[];
  /** 在 CVM 或 Lighthouse 实例中执行命令的用户名称。使用最小权限执行命令是权限管理的最佳实践，建议您以普通用户身份执行云助手命令。默认情况下，在 Linux 实例中以 root 用户执行命令；在Windows 实例中以 System 用户执行命令。 */
  Username?: string;
  /** 指定日志上传的cos bucket 地址，必须以https开头，如 https://BucketName-123454321.cos.ap-beijing.myqcloud.com。 */
  OutputCOSBucketUrl?: string;
  /** 指定日志在cos bucket中的目录，目录命名有如下规则：1. 可用数字、中英文和可见字符的组合，长度最多为60。2. 用 / 分割路径，可快速创建子目录。3. 不允许连续 / ；不允许以 / 开头；不允许以..作为文件夹名称。 */
  OutputCOSKeyPrefix?: string;
}

declare interface RunCommandResponse {
  /** 命令ID。 */
  CommandId: string;
  /** 执行活动ID。 */
  InvocationId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

/** {@link Tat 自动化助手} */
declare interface Tat {
  (): Versions;
  /** {@link CancelInvocation 取消命令执行}({@link CancelInvocationRequest 请求参数}): {@link CancelInvocationResponse 返回参数} */
  CancelInvocation(data: CancelInvocationRequest, config?: AxiosRequestConfig): AxiosPromise<CancelInvocationResponse>;
  /** {@link CreateCommand 创建命令}({@link CreateCommandRequest 请求参数}): {@link CreateCommandResponse 返回参数} */
  CreateCommand(data: CreateCommandRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCommandResponse>;
  /** {@link CreateInvoker 创建执行器}({@link CreateInvokerRequest 请求参数}): {@link CreateInvokerResponse 返回参数} */
  CreateInvoker(data: CreateInvokerRequest, config?: AxiosRequestConfig): AxiosPromise<CreateInvokerResponse>;
  /** {@link DeleteCommand 删除命令}({@link DeleteCommandRequest 请求参数}): {@link DeleteCommandResponse 返回参数} */
  DeleteCommand(data: DeleteCommandRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCommandResponse>;
  /** {@link DeleteInvoker 删除执行器}({@link DeleteInvokerRequest 请求参数}): {@link DeleteInvokerResponse 返回参数} */
  DeleteInvoker(data: DeleteInvokerRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteInvokerResponse>;
  /** {@link DescribeAutomationAgentStatus 查询客户端状态}({@link DescribeAutomationAgentStatusRequest 请求参数}): {@link DescribeAutomationAgentStatusResponse 返回参数} */
  DescribeAutomationAgentStatus(data?: DescribeAutomationAgentStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAutomationAgentStatusResponse>;
  /** {@link DescribeCommands 查询命令详情}({@link DescribeCommandsRequest 请求参数}): {@link DescribeCommandsResponse 返回参数} */
  DescribeCommands(data?: DescribeCommandsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCommandsResponse>;
  /** {@link DescribeInvocationTasks 查询执行任务}({@link DescribeInvocationTasksRequest 请求参数}): {@link DescribeInvocationTasksResponse 返回参数} */
  DescribeInvocationTasks(data?: DescribeInvocationTasksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInvocationTasksResponse>;
  /** {@link DescribeInvocations 查询执行活动}({@link DescribeInvocationsRequest 请求参数}): {@link DescribeInvocationsResponse 返回参数} */
  DescribeInvocations(data?: DescribeInvocationsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInvocationsResponse>;
  /** {@link DescribeInvokerRecords 查询执行器执行记录}({@link DescribeInvokerRecordsRequest 请求参数}): {@link DescribeInvokerRecordsResponse 返回参数} */
  DescribeInvokerRecords(data?: DescribeInvokerRecordsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInvokerRecordsResponse>;
  /** {@link DescribeInvokers 查询执行器}({@link DescribeInvokersRequest 请求参数}): {@link DescribeInvokersResponse 返回参数} */
  DescribeInvokers(data?: DescribeInvokersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInvokersResponse>;
  /** {@link DescribeRegions 查询地域列表}({@link DescribeRegionsRequest 请求参数}): {@link DescribeRegionsResponse 返回参数} */
  DescribeRegions(data?: DescribeRegionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRegionsResponse>;
  /** {@link DisableInvoker 停用执行器}({@link DisableInvokerRequest 请求参数}): {@link DisableInvokerResponse 返回参数} */
  DisableInvoker(data: DisableInvokerRequest, config?: AxiosRequestConfig): AxiosPromise<DisableInvokerResponse>;
  /** {@link EnableInvoker 启用执行器}({@link EnableInvokerRequest 请求参数}): {@link EnableInvokerResponse 返回参数} */
  EnableInvoker(data: EnableInvokerRequest, config?: AxiosRequestConfig): AxiosPromise<EnableInvokerResponse>;
  /** {@link InvokeCommand 触发命令}({@link InvokeCommandRequest 请求参数}): {@link InvokeCommandResponse 返回参数} */
  InvokeCommand(data: InvokeCommandRequest, config?: AxiosRequestConfig): AxiosPromise<InvokeCommandResponse>;
  /** {@link ModifyCommand 修改命令}({@link ModifyCommandRequest 请求参数}): {@link ModifyCommandResponse 返回参数} */
  ModifyCommand(data: ModifyCommandRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCommandResponse>;
  /** {@link ModifyInvoker 修改执行器}({@link ModifyInvokerRequest 请求参数}): {@link ModifyInvokerResponse 返回参数} */
  ModifyInvoker(data: ModifyInvokerRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyInvokerResponse>;
  /** {@link PreviewReplacedCommandContent 命令预览}({@link PreviewReplacedCommandContentRequest 请求参数}): {@link PreviewReplacedCommandContentResponse 返回参数} */
  PreviewReplacedCommandContent(data?: PreviewReplacedCommandContentRequest, config?: AxiosRequestConfig): AxiosPromise<PreviewReplacedCommandContentResponse>;
  /** {@link RunCommand 执行命令}({@link RunCommandRequest 请求参数}): {@link RunCommandResponse 返回参数} */
  RunCommand(data: RunCommandRequest, config?: AxiosRequestConfig): AxiosPromise<RunCommandResponse>;
}

export declare type Versions = ["2020-10-28"];

export default Tat;
