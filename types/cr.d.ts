/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 黑名单申请信息 */
declare interface BlackListData {
  /** 黑名单类型，01代表手机号码。 */
  BlackType: string;
  /** 操作类型，A为新增，D为删除。 */
  OperType: string | null;
  /** 黑名单值，BlackType为01时，填写11位手机号码。 */
  BlackValue: string;
  /** 备注。 */
  BlackDescription: string | null;
  /** 黑名单生效截止日期，格式为YYYY-MM-DD，不填默认为永久。 */
  BlackValidDate?: string | null;
  /** 黑名单加入日期 */
  BlackAddDate?: string | null;
  /** 0-生效 1-失效 */
  BlackStatus?: string;
}

/** 机器人文件结构 */
declare interface BotFileData {
  /** 文件类型 A 拨打结果 T 记录详情 */
  FileType: string;
  /** 文件地址 */
  CosUrl: string;
}

/** 机器人对话流信息 */
declare interface BotFlow {
  /** 对话流ID */
  BotFlowId: string;
  /** 对话流名称 */
  BotFlowName: string;
  /** 号码组信息列表 */
  PhonePoolList: PhonePool[];
}

/** 机器人列表 */
declare interface BotInfo {
  /** 机器人ID */
  BotId: string;
  /** 机器人名称 */
  BotName: string;
  /** 机器人状态。0-停用 1-启用 2-待审核 */
  BotStatus: string;
}

/** 作业信息 */
declare interface CallInfo {
  /** 业务日期 */
  BizDate: string;
  /** 状态 WAIT：待执行；DOING：执行中；ERROR：执行错误；DONE：已完成； */
  Status: string;
  /** 成功总数 */
  TotalCount: number;
  /** 文件名称 */
  FileName: string;
  /** 文件类型 I：呼叫文件 R：停拨文件 */
  FileType: string;
  /** 作业唯一标识 */
  CallId: string | null;
}

/** 产品拨打时间集合 */
declare interface CallTimeDict {
  /** 周一 */
  Monday?: CallTimeInfo;
  /** 周二 */
  Tuesday?: CallTimeInfo;
  /** 周三 */
  Wednesday?: CallTimeInfo;
  /** 周四 */
  Thursday?: CallTimeInfo;
  /** 周五 */
  Friday?: CallTimeInfo;
  /** 周六 */
  Saturday?: CallTimeInfo;
  /** 周日 */
  Sunday?: CallTimeInfo;
}

/** 产品拨打时间信息 */
declare interface CallTimeInfo {
  /** 产品开始拨打时间，HHmmss格式,默认090000 */
  StartTime?: string;
  /** 产品结束拨打时间，HHmmss格式.默认200000 */
  EndTime?: string;
}

/** 号码组信息 */
declare interface PhonePool {
  /** 号码组ID */
  PoolId: string;
  /** 号码组名称 */
  PoolName: string;
}

/** QueryProducts接口对应数据结构。产品对应的相关信息。 */
declare interface ProductQueryInfo {
  /** 产品Id */
  ProductId: string;
  /** 产品名称 */
  ProductName: string;
  /** 产品编码 */
  ProductCode: string | null;
  /** 产品状态 0 禁用 1 启用 */
  ProductStatus: number | null;
  /** 场景类型 */
  SceneType: string | null;
}

/** 录音文件详情 */
declare interface RecordInfo {
  /** 任务Id */
  BotId: string;
  /** 任务名称 */
  BotName: string;
  /** 任务日期 */
  BizDate: string;
  /** 被叫号码 */
  CalledPhone: string;
  /** 开始通话时间 */
  CallStartTime: string;
  /** 通话时长 */
  Duration: number;
  /** 录音文件地址 */
  CosUrl: string;
  /** 对话日志。JSON格式 */
  DialogueLog: string;
  /** 录音文件名 */
  CosFileName: string;
}

/** 黑名单申请信息 */
declare interface SingleBlackApply {
  /** 黑名单类型，01代表手机号码。 */
  BlackType: string;
  /** 操作类型，A为新增，D为删除。 */
  OperationType: string;
  /** 黑名单值，BlackType为01时，填写11位手机号码。 */
  BlackValue: string;
  /** 备注。 */
  BlackDescription: string;
  /** 黑名单生效截止日期，格式为YYYY-MM-DD，不填默认为永久。 */
  BlackValidDate?: string;
}

/** 录音信息 */
declare interface SingleRecord {
  /** 案件编号。 */
  AccountNum: string;
  /** 外呼日期。 */
  BizDate: string;
  /** 开始呼叫时间。 */
  CallStartTime: string;
  /** 主叫号码。 */
  CallerPhone: string;
  /** 呼叫方向，O为呼出，I为呼入。 */
  Direction: string;
  /** 通话时长。 */
  Duration: number;
  /** 产品ID。 */
  ProductId: string | null;
  /** 录音下载链接。 */
  RecordCosUrl: string | null;
}

/** 短信签名信息 */
declare interface SmsSign {
  /** 短信签名ID */
  SignId: string;
  /** 短信签名名称 */
  SignName: string;
}

/** 短信模板信息 */
declare interface SmsTemplate {
  /** 短信模板ID */
  TemplateId: string;
  /** 短信模板名称 */
  TemplateName: string;
}

declare interface ApplyBlackListDataRequest {
  /** 模块名，AiApi */
  Module: string;
  /** 操作名，ApplyBlackListData */
  Operation: string;
  /** 黑名单列表 */
  BlackList: BlackListData[];
}

declare interface ApplyBlackListDataResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ApplyBlackListRequest {
  /** 模块名，本接口取值：account */
  Module: string;
  /** 操作名，本接口取值：ApplyBlackList */
  Operation: string;
  /** 黑名单列表 */
  BlackList: SingleBlackApply[];
  /** 实例ID，不传默认为系统分配的初始实例 */
  InstId?: string;
}

declare interface ApplyBlackListResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ApplyCreditAuditRequest {
  /** 模块名，本接口取值：Credit */
  Module: string;
  /** 操作名，本接口取值：Apply */
  Operation: string;
  /** 实例ID */
  InstId: string;
  /** 产品ID，形如P******。 */
  ProductId: string;
  /** 信审任务ID，同一天内，同一InstId下，同一CaseId只能调用一次。 */
  CaseId: string;
  /** 回调地址 */
  CallbackUrl: string;
  /** JSON格式的业务字段。 */
  Data: string;
}

declare interface ApplyCreditAuditResponse {
  /** 请求日期 */
  RequestDate?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ChangeBotCallStatusRequest {
  /** 模块名。默认值（固定）：AiApi */
  Module: string;
  /** 操作名。默认值（固定）：ChangeBotCallStatus */
  Operation: string;
  /** 作业变更状态SUSPEND：暂停；EXECUTE：恢复； */
  Status: string;
  /** 作业唯一标识 */
  CallId: string;
  /** 业务日期 */
  BizDate: string;
  /** 任务ID，二者必填一个 */
  BotId?: string;
  /** 任务名称，二者必填一个 */
  BotName?: string;
}

declare interface ChangeBotCallStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ChangeBotTaskStatusRequest {
  /** 模块名。默认值（固定）：AiApi */
  Module: string;
  /** 操作名。默认值（固定）：ChangeBotTaskStatus */
  Operation: string;
  /** 作业变更状态SUSPEND：暂停；EXECUTE：恢复； */
  Status: string;
  /** 任务ID，二者必填一个 */
  BotId?: string;
  /** 任务名称，二者必填一个 */
  BotName?: string;
}

declare interface ChangeBotTaskStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateBotTaskRequest {
  /** 模块名。默认值（固定）：AiApi */
  Module: string;
  /** 操作名。默认值（固定）：CreateTask */
  Operation: string;
  /** 任务名称 */
  BotName: string;
  /** 对话流ID */
  FlowId: string;
  /** 是否禁止拨打，默认Y */
  BanCall: string;
  /** 拨打线路集合 */
  PhoneCollection: string;
  /** 产品拨打时间集合 */
  CallTimeCollection?: CallTimeDict;
  /** 禁止拨打起始时间。默认130000 */
  StartTimeBan?: string;
  /** 禁止拨打结束时间。默认140000 */
  EndTimeBan?: string;
  /** 重播方式，NON：未接通、LABEL：意向分级，可多选，用竖线分隔：NON|LABEL */
  CodeType?: string;
  /** 重播值集合，A：强意向、B：中意向、C：低意向、D：无意向、E：在忙、F：未接通、G：无效号码，可多选，用竖线分隔：A|B|C|D|E|F|G */
  CodeCollection?: string;
  /** 继续拨打次数 */
  CallCount?: number;
  /** 拨打间隔 */
  CallInterval?: number;
  /** 未接通引用短信签名ID */
  SmsSignId?: string;
  /** 未接通引用短信模板ID */
  SmsTemplateId?: string;
  /** 拨打方式。NORMAL - 正常拨打；TIMER - 定时拨打 */
  CallType?: string;
  /** 拨打开始日期。CallType=TIMER时有值，yyyy-MM-dd */
  CallStartDate?: string;
  /** 拨打结束日期。CallType=PERIOD 时有值，yyyy-MM-dd */
  CallEndDate?: string;
}

declare interface CreateBotTaskResponse {
  /** 机器人任务Id */
  BotId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBotFlowRequest {
  /** 模块名。默认值（固定）：AiApi */
  Module: string;
  /** 操作名。默认值（固定）：GetFlow */
  Operation: string;
}

declare interface DescribeBotFlowResponse {
  /** 机器人对话流列表 */
  BotFlowList?: BotFlow[] | null;
  /** 短信签名列表 */
  SmsSignList?: SmsSign[] | null;
  /** 短信模板列表 */
  SmsTemplateList?: SmsTemplate[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCreditResultRequest {
  /** 模块名，本接口取值：Credit */
  Module: string;
  /** 操作名，本接口取值：Get */
  Operation: string;
  /** 实例ID */
  InstId: string;
  /** 产品ID，形如P******。 */
  ProductId: string;
  /** 信审任务ID */
  CaseId: string;
  /** 请求日期，格式为YYYY-MM-DD */
  RequestDate: string;
}

declare interface DescribeCreditResultResponse {
  /** 呼叫结果，取值范围：NON：接通DBU：号码忙DRF：不在服务区ANA：欠费未接听REJ：拒接SHU：关机NAN：空号HAL：停机DAD：未接听EXE：其他异常 */
  ResultCode?: string;
  /** 客户标识代码，多个标识码以英文逗号分隔，ResultCode为NON时才有。 */
  ClientCode?: string | null;
  /** 开始振铃时间，ResultCode为NON或DAD时才有此字段。 */
  RingStartTime?: string | null;
  /** 振铃时长 */
  RingDuration?: number;
  /** 接通时长 */
  AnswerDuration?: number;
  /** JSON格式的扩展信息字段，ResultCode为NON时才有。 */
  ContextValue?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFileModelRequest {
  /** 模块名。默认值（固定）：AiApi */
  Module: string;
  /** 操作名。默认值（固定）：DescribeFileModel */
  Operation: string;
  /** 模板文件类型，输入input，停拨stop */
  FileType: string;
  /** 任务ID，二者必填一个 */
  BotId?: string;
  /** 任务名称，二者必填一个 */
  BotName?: string;
}

declare interface DescribeFileModelResponse {
  /** 模板下载链接 */
  CosUrl?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRecordsRequest {
  /** 模块名，本接口取值：Record */
  Module: string;
  /** 操作名，本接口取值：List */
  Operation: string;
  /** 产品ID */
  ProductId?: string;
  /** 案件编号 */
  AccountNum?: string;
  /** 被叫号码 */
  CalledPhone?: string;
  /** 查询起始日期，格式为YYYY-MM-DD */
  StartBizDate?: string;
  /** 查询结束日期，格式为YYYY-MM-DD */
  EndBizDate?: string;
  /** 分页参数，索引，默认为0 */
  Offset?: string;
  /** 分页参数，页长，默认为20 */
  Limit?: string;
  /** 实例ID，不传默认为系统分配的初始实例 */
  InstId?: string;
}

declare interface DescribeRecordsResponse {
  /** 录音列表。 */
  RecordList?: SingleRecord[] | null;
  /** 录音总量。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTaskStatusRequest {
  /** 模块名，本接口取值：Task */
  Module: string;
  /** 操作名，本接口取值：DescribeTaskStatus */
  Operation: string;
  /** 任务ID，"上传文件"接口返回的DataResId，形如abc-xyz123 */
  TaskId: string;
  /** 实例ID，不传默认为系统分配的初始实例。 */
  InstId?: string;
}

declare interface DescribeTaskStatusResponse {
  /** 任务结果：处理中："Uploading Data."上传成功："File Uploading Task Success."上传失败：具体失败原因 */
  TaskResult?: string;
  /** 任务类型：到期/逾期提醒数据上传：002到期/逾期提醒停拨数据上传：003回访数据上传：004回访停拨数据上传：005 */
  TaskType?: string;
  /** 过滤文件下载链接，有过滤数据时才存在。 */
  TaskFileUrl?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DownloadBotRecordRequest {
  /** 模块：AiApi */
  Module: string;
  /** 操作：DownloadRecord */
  Operation: string;
  /** 业务日期 */
  BizDate: string;
}

declare interface DownloadBotRecordResponse {
  /** 录音地址。请求后30分钟内有效 */
  RecordCosUrl?: string;
  /** 文本地址。请求后30分钟内有效 */
  TextCosUrl?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DownloadDialogueTextRequest {
  /** 模块名，本接口取值：Report */
  Module: string;
  /** 操作名，本接口取值：DownloadTextReport */
  Operation: string;
  /** 报告日期，格式为YYYY-MM-DD */
  ReportDate: string;
  /** 实例ID */
  InstId: string;
}

declare interface DownloadDialogueTextResponse {
  /** 对话文本下载地址 */
  TextReportUrl?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DownloadRecordListRequest {
  /** 模块名，本接口取值：Record */
  Module: string;
  /** 操作名，本接口取值：DownloadList */
  Operation: string;
  /** 录音日期，格式为YYYY-MM-DD */
  BizDate: string;
  /** 实例ID */
  InstId: string;
}

declare interface DownloadRecordListResponse {
  /** 录音列表下载地址 */
  RecordListUrl?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DownloadReportRequest {
  /** 模块名，本接口取值：Report */
  Module: string;
  /** 操作名，本接口取值：DownloadReport */
  Operation: string;
  /** 报告日期，格式为YYYY-MM-DD */
  ReportDate: string;
  /** 实例ID，不传默认为系统分配的初始实例。 */
  InstId?: string;
}

declare interface DownloadReportResponse {
  /** 到期/逾期提醒日报下载地址 */
  DailyReportUrl?: string | null;
  /** 到期/逾期提醒结果下载地址 */
  ResultReportUrl?: string | null;
  /** 到期/逾期提醒明细下载地址 */
  DetailReportUrl?: string | null;
  /** 回访日报下载地址 */
  CallbackDailyReportUrl?: string | null;
  /** 回访结果下载地址 */
  CallbackResultReportUrl?: string | null;
  /** 回访明细下载地址 */
  CallbackDetailReportUrl?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ExportBotDataRequest {
  /** 模块名。默认值（固定）：AiApi */
  Module: string;
  /** 操作名。默认值（固定）：ExportBotData */
  Operation: string;
  /** 业务日期。YYYY-MM-DD */
  BizDate: string;
  /** 任务ID，二者必填一个 */
  BotId?: string;
  /** 任务名称，二者必填一个 */
  BotName?: string;
}

declare interface ExportBotDataResponse {
  /** 导出文件列表 */
  Data?: BotFileData[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryBlackListDataRequest {
  /** 模块:AiApi */
  Module: string;
  /** 操作:QueryBlackListData */
  Operation: string;
  /** 页码 */
  Offset?: number;
  /** 每页数量 */
  Limit?: number;
  /** 开始日期 */
  StartBizDate?: string;
  /** 结束日期 */
  EndBizDate?: string;
  /** 电话号码、手机 */
  BlackValue?: string;
}

declare interface QueryBlackListDataResponse {
  /** 总数。 */
  TotalCount: number;
  /** 黑名单列表 */
  Data: BlackListData[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryBotListRequest {
  /** 模块名：AiApi */
  Module: string;
  /** 操作名：QueryBotList */
  Operation: string;
}

declare interface QueryBotListResponse {
  /** 任务列表。 */
  BotList?: BotInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryCallListRequest {
  /** 模块名。默认值（固定）：AiApi */
  Module: string;
  /** 操作名。默认值（固定）：QueryCallList */
  Operation: string;
  /** 业务日期 */
  BizDate: string;
  /** 任务ID，二者必填一个 */
  BotId?: string;
  /** 任务名称，二者必填一个 */
  BotName?: string;
  /** 通过API或平台上传的文件完整名称 */
  FileName?: string;
}

declare interface QueryCallListResponse {
  /** 任务作业状态 */
  CallList: CallInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryInstantDataRequest {
  /** 模块名，本接口取值：Data */
  Module: string;
  /** 操作名，本接口取值：Query */
  Operation: string;
  /** 产品ID */
  ProductId?: string;
  /** 实例ID，不传默认为系统分配的初始实例 */
  InstanceId?: string;
  /** 查询类型：callRecord 通话记录 */
  QueryModel?: string;
  /** 查询参数 */
  Data?: string;
}

declare interface QueryInstantDataResponse {
  /** 总数 */
  TotalCount?: number | null;
  /** 返回内容 */
  Data?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryProductsRequest {
  /** 模块名。默认值（固定）：Product */
  Module: string;
  /** 操作名。默认值（固定）：QueryProducts */
  Operation: string;
  /** 实例Id。 */
  InstanceId: string;
}

declare interface QueryProductsResponse {
  /** 产品信息。 */
  ProductList?: ProductQueryInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryRecordListRequest {
  /** 模块名。AiApi */
  Module: string;
  /** 操作名。QueryRecordList */
  Operation: string;
  /** 偏移值 */
  Offset: number;
  /** 偏移位移，最大20 */
  Limit: number;
  /** 任务ID，二者必填一个 */
  BotId?: string;
  /** 任务名称，二者必填一个 */
  BotName?: string;
  /** 被叫号码 */
  CalledPhone?: string;
  /** 开始日期 */
  StartBizDate?: string;
  /** 结束日期 */
  EndBizDate?: string;
}

declare interface QueryRecordListResponse {
  /** 录音列表。 */
  RecordList?: RecordInfo[];
  /** 总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateBotTaskRequest {
  /** 模块名。默认值（固定）：AiApi */
  Module: string;
  /** 操作名。默认值（固定）：UpdateTask */
  Operation: string;
  /** 任务名称 */
  BotName?: string;
  /** 任务ID */
  BotId?: string;
  /** 产品拨打时间集合 */
  CallTimeCollection?: CallTimeDict;
  /** 是否禁止拨打，默认Y */
  BanCall?: string;
  /** 禁止拨打起始时间。默认130000 */
  StartTimeBan?: string;
  /** 禁止拨打结束时间。默认140000 */
  EndTimeBan?: string;
  /** 拨打线路集合 */
  PhoneCollection?: string;
  /** 重播方式，NON：未接通、LABEL：意向分级，可多选，用竖线分隔：NON|LABEL */
  CodeType?: string;
  /** 重播值集合，A：强意向、B：中意向、C：低意向、D：无意向、E：在忙、F：未接通、G：无效号码，可多选，用竖线分隔：A|B|C|D|E|F|G */
  CodeCollection?: string;
  /** 继续拨打次数 */
  CallCount?: number;
  /** 拨打间隔 */
  CallInterval?: number;
  /** 未接通引用短信签名ID */
  SmsSignId?: string;
  /** 未接通引用短信模板ID */
  SmsTemplateId?: string;
}

declare interface UpdateBotTaskResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UploadBotDataRequest {
  /** 模块名。默认值（固定）：AiApi */
  Module: string;
  /** 操作名。默认值（固定）：UploadData */
  Operation: string;
  /** 任务数据。JSON格式 */
  Data: string;
  /** 任务ID，二者必填一个 */
  BotId?: string;
  /** 任务名称，二者必填一个 */
  BotName?: string;
}

declare interface UploadBotDataResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UploadBotFileRequest {
  /** 模块名。默认值（固定）：AiApi */
  Module: string;
  /** 操作名。默认值（固定）：Upload */
  Operation: string;
  /** 文件类型，输入input，停拨stop */
  FileType: string;
  /** 文件链接 */
  FileUrl: string;
  /** 文件名 */
  FileName: string;
  /** 任务ID，二者必填一个 */
  BotId?: string;
  /** 任务名称，二者必填一个 */
  BotName?: string;
}

declare interface UploadBotFileResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UploadDataFileRequest {
  /** 模块名，本接口取值：Data */
  Module: string;
  /** 操作名，本接口取值：Upload */
  Operation: string;
  /** 文件名 */
  FileName: string;
  /** 上传类型，不填默认到期/逾期提醒文件，取值范围：data：到期/逾期提醒文件repay：到期/逾期提醒停拨文件callback：回访文件callstop：回访停拨文件blacklist：黑名单文件 */
  UploadModel?: string;
  /** 文件，文件与文件地址上传只可选用一种，必须使用multipart/form-data协议来上传二进制流文件，建议使用xlsx格式，大小不超过5MB。 */
  File?: undefined;
  /** 文件上传地址，文件与文件地址上传只可选用一种，大小不超过50MB。 */
  FileUrl?: string;
  /** 实例ID，不传默认为系统分配的初始实例。 */
  InstId?: string;
}

declare interface UploadDataFileResponse {
  /** 数据ID */
  DataResId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UploadDataJsonRequest {
  /** 模块名，本接口取值：Data */
  Module: string;
  /** 操作名，本接口取值：UploadJson */
  Operation: string;
  /** 报文信息 */
  Data: string;
  /** 上传类型，不填默认到期/逾期提醒数据，取值范围：data：到期/逾期提醒数据repay：到期/逾期提醒停拨数据 */
  UploadModel?: string;
  /** 实例ID，不传默认为系统分配的初始实例。 */
  InstanceId?: string;
}

declare interface UploadDataJsonResponse {
  /** 响应报文信息 */
  Data?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UploadFileRequest {
  /** 模块名 */
  Module: string;
  /** 操作名 */
  Operation: string;
  /** 文件上传地址，要求地址协议为HTTPS，且URL端口必须为443 */
  FileUrl: string;
  /** 文件名 */
  FileName: string;
  /** 文件日期 */
  FileDate: string;
}

declare interface UploadFileResponse {
  /** 任务ID */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Cr 金融联络机器人} */
declare interface Cr {
  (): Versions;
  /** 提交黑名单申请 {@link ApplyBlackListRequest} {@link ApplyBlackListResponse} */
  ApplyBlackList(data: ApplyBlackListRequest, config?: AxiosRequestConfig): AxiosPromise<ApplyBlackListResponse>;
  /** 提交机器人黑名单申请 {@link ApplyBlackListDataRequest} {@link ApplyBlackListDataResponse} */
  ApplyBlackListData(data: ApplyBlackListDataRequest, config?: AxiosRequestConfig): AxiosPromise<ApplyBlackListDataResponse>;
  /** 提交信审申请 {@link ApplyCreditAuditRequest} {@link ApplyCreditAuditResponse} */
  ApplyCreditAudit(data: ApplyCreditAuditRequest, config?: AxiosRequestConfig): AxiosPromise<ApplyCreditAuditResponse>;
  /** 更新机器人任务作业状态 {@link ChangeBotCallStatusRequest} {@link ChangeBotCallStatusResponse} */
  ChangeBotCallStatus(data: ChangeBotCallStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ChangeBotCallStatusResponse>;
  /** 更新机器人任务状态 {@link ChangeBotTaskStatusRequest} {@link ChangeBotTaskStatusResponse} */
  ChangeBotTaskStatus(data: ChangeBotTaskStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ChangeBotTaskStatusResponse>;
  /** 创建机器人任务 {@link CreateBotTaskRequest} {@link CreateBotTaskResponse} */
  CreateBotTask(data: CreateBotTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateBotTaskResponse>;
  /** 查询机器人对话流 {@link DescribeBotFlowRequest} {@link DescribeBotFlowResponse} */
  DescribeBotFlow(data: DescribeBotFlowRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBotFlowResponse>;
  /** 获取信审结果 {@link DescribeCreditResultRequest} {@link DescribeCreditResultResponse} */
  DescribeCreditResult(data: DescribeCreditResultRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCreditResultResponse>;
  /** 查询机器人文件模板 {@link DescribeFileModelRequest} {@link DescribeFileModelResponse} */
  DescribeFileModel(data: DescribeFileModelRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFileModelResponse>;
  /** 录音查询（接口） {@link DescribeRecordsRequest} {@link DescribeRecordsResponse} */
  DescribeRecords(data: DescribeRecordsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRecordsResponse>;
  /** 获取任务状态 {@link DescribeTaskStatusRequest} {@link DescribeTaskStatusResponse} */
  DescribeTaskStatus(data: DescribeTaskStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTaskStatusResponse>;
  /** 下载任务录音与文本 {@link DownloadBotRecordRequest} {@link DownloadBotRecordResponse} */
  DownloadBotRecord(data: DownloadBotRecordRequest, config?: AxiosRequestConfig): AxiosPromise<DownloadBotRecordResponse>;
  /** 对话文本下载 {@link DownloadDialogueTextRequest} {@link DownloadDialogueTextResponse} */
  DownloadDialogueText(data: DownloadDialogueTextRequest, config?: AxiosRequestConfig): AxiosPromise<DownloadDialogueTextResponse>;
  /** 录音查询（文件） {@link DownloadRecordListRequest} {@link DownloadRecordListResponse} */
  DownloadRecordList(data: DownloadRecordListRequest, config?: AxiosRequestConfig): AxiosPromise<DownloadRecordListResponse>;
  /** 报告下载 {@link DownloadReportRequest} {@link DownloadReportResponse} */
  DownloadReport(data: DownloadReportRequest, config?: AxiosRequestConfig): AxiosPromise<DownloadReportResponse>;
  /** 导出机器人数据 {@link ExportBotDataRequest} {@link ExportBotDataResponse} */
  ExportBotData(data: ExportBotDataRequest, config?: AxiosRequestConfig): AxiosPromise<ExportBotDataResponse>;
  /** 查看黑名单数据列表 {@link QueryBlackListDataRequest} {@link QueryBlackListDataResponse} */
  QueryBlackListData(data: QueryBlackListDataRequest, config?: AxiosRequestConfig): AxiosPromise<QueryBlackListDataResponse>;
  /** 查询机器人任务状态列表 {@link QueryBotListRequest} {@link QueryBotListResponse} */
  QueryBotList(data: QueryBotListRequest, config?: AxiosRequestConfig): AxiosPromise<QueryBotListResponse>;
  /** 机器人任务查询 {@link QueryCallListRequest} {@link QueryCallListResponse} */
  QueryCallList(data: QueryCallListRequest, config?: AxiosRequestConfig): AxiosPromise<QueryCallListResponse>;
  /** 实时数据查询 {@link QueryInstantDataRequest} {@link QueryInstantDataResponse} */
  QueryInstantData(data: QueryInstantDataRequest, config?: AxiosRequestConfig): AxiosPromise<QueryInstantDataResponse>;
  /** 查询产品列表 {@link QueryProductsRequest} {@link QueryProductsResponse} */
  QueryProducts(data: QueryProductsRequest, config?: AxiosRequestConfig): AxiosPromise<QueryProductsResponse>;
  /** 查询录音列表 {@link QueryRecordListRequest} {@link QueryRecordListResponse} */
  QueryRecordList(data: QueryRecordListRequest, config?: AxiosRequestConfig): AxiosPromise<QueryRecordListResponse>;
  /** 更新机器人任务 {@link UpdateBotTaskRequest} {@link UpdateBotTaskResponse} */
  UpdateBotTask(data: UpdateBotTaskRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateBotTaskResponse>;
  /** 上传机器人任务数据 {@link UploadBotDataRequest} {@link UploadBotDataResponse} */
  UploadBotData(data: UploadBotDataRequest, config?: AxiosRequestConfig): AxiosPromise<UploadBotDataResponse>;
  /** 上传机器人文件 {@link UploadBotFileRequest} {@link UploadBotFileResponse} */
  UploadBotFile(data: UploadBotFileRequest, config?: AxiosRequestConfig): AxiosPromise<UploadBotFileResponse>;
  /** 上传文件 {@link UploadDataFileRequest} {@link UploadDataFileResponse} */
  UploadDataFile(data: UploadDataFileRequest, config?: AxiosRequestConfig): AxiosPromise<UploadDataFileResponse>;
  /** 上传Json格式数据 {@link UploadDataJsonRequest} {@link UploadDataJsonResponse} */
  UploadDataJson(data: UploadDataJsonRequest, config?: AxiosRequestConfig): AxiosPromise<UploadDataJsonResponse>;
  /** 上传数据文件 {@link UploadFileRequest} {@link UploadFileResponse} */
  UploadFile(data: UploadFileRequest, config?: AxiosRequestConfig): AxiosPromise<UploadFileResponse>;
}

export declare type Versions = ["2018-03-21"];

export default Cr;
