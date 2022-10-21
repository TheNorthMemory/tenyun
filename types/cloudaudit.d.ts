/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** AttributeKey值详情 */
declare interface AttributeKeyDetail {
  /** 输入框类型 */
  LabelType: string;
  /** 初始化展示 */
  Starter: string;
  /** 展示排序 */
  Order: number;
  /** AttributeKey值 */
  Value: string;
  /** 中文标签 */
  Label: string;
}

/** 跟踪集概览 */
declare interface AuditSummary {
  /** 跟踪集状态，1：开启，0：关闭 */
  AuditStatus?: number;
  /** COS存储桶名称 */
  CosBucketName?: string;
  /** 跟踪集名称 */
  AuditName?: string;
  /** 日志前缀 */
  LogFilePrefix?: string;
}

/** cmq地域信息 */
declare interface CmqRegionInfo {
  /** 地域描述 */
  CmqRegionName?: string;
  /** cmq地域 */
  CmqRegion?: string;
}

/** cos地域信息 */
declare interface CosRegionInfo {
  /** cos地域 */
  CosRegion?: string;
  /** 地域描述 */
  CosRegionName?: string;
}

/** 日志详情 */
declare interface Event {
  /** 日志ID */
  EventId?: string;
  /** 用户名 */
  Username?: string;
  /** 事件时间 */
  EventTime?: string;
  /** 日志详情 */
  CloudAuditEvent?: string;
  /** 资源类型中文描述（此字段请按需使用，如果您是其他语言使用者，可以忽略该字段描述） */
  ResourceTypeCn?: string;
  /** 鉴权错误码 */
  ErrorCode?: number;
  /** 事件名称 */
  EventName?: string;
  /** 证书ID */
  SecretId?: string | null;
  /** 请求来源 */
  EventSource?: string;
  /** 请求ID */
  RequestID?: string;
  /** 资源地域 */
  ResourceRegion?: string;
  /** 主账号ID */
  AccountID?: number;
  /** 源IP */
  SourceIPAddress?: string | null;
  /** 事件名称中文描述（此字段请按需使用，如果您是其他语言使用者，可以忽略该字段描述） */
  EventNameCn?: string;
  /** 资源对 */
  Resources?: Resource;
  /** 事件地域 */
  EventRegion?: string;
  /** IP 归属地 */
  Location?: string;
}

/** CMK属性 */
declare interface KeyMetadata {
  /** 作为密钥更容易辨识，更容易被人看懂的别名 */
  Alias?: string;
  /** CMK的全局唯一标识 */
  KeyId?: string;
}

/** 检索条件 */
declare interface LookupAttribute {
  /** AttributeKey的有效取值范围是:RequestId、EventName、ReadOnly、Username、ResourceType、ResourceName和AccessKeyId，EventId */
  AttributeKey: string | null;
  /** AttributeValue的值 */
  AttributeValue?: string | null;
}

/** 资源类型 */
declare interface Resource {
  /** 资源类型 */
  ResourceType?: string;
  /** 资源名称 */
  ResourceName?: string | null;
}

declare interface CreateAuditRequest {
  /** 是否开启cmq消息通知。1：是，0：否。目前仅支持cmq的队列服务。如果开启cmq消息通知服务，云审计会将您的日志内容实时投递到您指定地域的指定队列中。 */
  IsEnableCmqNotify: number;
  /** 管理事件的读写属性。1：只读，2：只写，3：全部。 */
  ReadWriteAttribute: number;
  /** 跟踪集名称。3-128字符，只能包含 ASCII 编码字母 a-z，A-Z，数字 0-9，下划线 _。 */
  AuditName: string;
  /** cos地域。目前支持的地域可以使用ListCosEnableRegion来获取。 */
  CosRegion: string;
  /** 是否创建新的cos存储桶。1：是，0：否。 */
  IsCreateNewBucket: number;
  /** cos的存储桶名称。仅支持小写英文字母和数字即[a-z，0-9]、中划线“-”及其组合。用户自定义的字符串支持1 - 40个字符。存储桶命名不能以“-”开头或结尾。如果不是新创建的存储桶，云审计不会去校验该存储桶是否真的存在，请谨慎填写，避免日志投递不成功，导致您的数据丢失。 */
  CosBucketName: string;
  /** CMK的全局唯一标识符，如果不是新创建的kms，该值是必填值。可以通过ListKeyAliasByRegion来获取。云审计不会校验KeyId的合法性，请您谨慎填写，避免给您的数据造成损失。 */
  KeyId?: string;
  /** 队列名称。队列名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。如果IsEnableCmqNotify值是1的话，此值属于必填字段。如果不是新创建的队列，云审计不会去校验该队列是否真的存在，请谨慎填写，避免日志通知不成功，导致您的数据丢失。 */
  CmqQueueName?: string;
  /** kms地域。目前支持的地域可以使用ListKmsEnableRegion来获取。必须要和cos的地域保持一致。 */
  KmsRegion?: string;
  /** 是否开启kms加密。1：是，0：否。如果开启KMS加密，数据在投递到cos时，会将数据加密。 */
  IsEnableKmsEncry?: number;
  /** 队列所在的地域。可以通过ListCmqEnableRegion获取支持的cmq地域。如果IsEnableCmqNotify值是1的话，此值属于必填字段。 */
  CmqRegion?: string;
  /** 日志文件前缀。3-40个字符，只能包含 ASCII 编码字母 a-z，A-Z，数字 0-9。可以不填，默认以账号ID作为日志前缀。 */
  LogFilePrefix?: string;
  /** 是否创建新的队列。1：是，0：否。如果IsEnableCmqNotify值是1的话，此值属于必填字段。 */
  IsCreateNewQueue?: number;
}

declare interface CreateAuditResponse {
  /** 是否创建成功。 */
  IsSuccess: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateAuditTrackRequest {
}

declare interface CreateAuditTrackResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteAuditRequest {
  /** 跟踪集名称 */
  AuditName: string;
}

declare interface DeleteAuditResponse {
  /** 是否删除成功 */
  IsSuccess: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteAuditTrackRequest {
}

declare interface DeleteAuditTrackResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAuditRequest {
  /** 跟踪集名称 */
  AuditName: string;
}

declare interface DescribeAuditResponse {
  /** 是否开启cmq消息通知。1：是，0：否。 */
  IsEnableCmqNotify: number;
  /** 管理事件读写属性，1：只读，2：只写，3：全部 */
  ReadWriteAttribute: number;
  /** CMK的全局唯一标识符。 */
  KeyId: string;
  /** 跟踪集状态，1：开启，0：停止。 */
  AuditStatus: number;
  /** 跟踪集名称。 */
  AuditName: string;
  /** cos存储桶所在地域。 */
  CosRegion: string;
  /** 队列名称。 */
  CmqQueueName: string;
  /** CMK别名。 */
  KmsAlias: string;
  /** kms地域。 */
  KmsRegion: string;
  /** 是否开启kms加密。1：是，0：否。如果开启KMS加密，数据在投递到cos时，会将数据加密。 */
  IsEnableKmsEncry: number;
  /** cos存储桶名称。 */
  CosBucketName: string;
  /** 队列所在地域。 */
  CmqRegion: string;
  /** 日志前缀。 */
  LogFilePrefix: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAuditTracksRequest {
}

declare interface DescribeAuditTracksResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeEventsRequest {
  /** 起始时间戳（单位秒，不超过当前时间 90 天） */
  StartTime: number;
  /** 结束时间戳（单位秒，查询时间跨度小于 30 天） */
  EndTime: number;
  /** 查看更多日志的凭证 */
  NextToken?: number;
  /** 返回日志的最大条数（最大 50 条） */
  MaxResults?: number;
  /** 检索条件（目前支持 RequestId：请求 ID、EventName：事件名称、ActionType：操作类型（Write：写；Read：读）、PrincipalId：子账号、ResourceType：资源类型、ResourceName：资源名称、AccessKeyId：密钥 ID、SensitiveAction：是否敏感操作、ApiErrorCode：API 错误码、CamErrorCode：CAM 错误码、Tags：标签（AttributeValue格式：[{"key":"*","value":"*"}]）） */
  LookupAttributes?: LookupAttribute[];
  /** 是否返回 IP 归属地（1 返回，0 不返回） */
  IsReturnLocation?: number;
}

declare interface DescribeEventsResponse {
  /** 日志集合是否结束。true表示结束，无需进行翻页。 */
  ListOver: boolean;
  /** 查看更多日志的凭证 */
  NextToken: number;
  /** 日志集合 */
  Events: Event[] | null;
  /** 此字段已经废弃。翻页请使用ListOver配合NextToken，在ListOver为false进行下一页数据读取。 */
  TotalCount: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface GetAttributeKeyRequest {
  /** 网站类型，取值范围是zh和en。如果不传值默认zh */
  WebsiteType?: string;
}

declare interface GetAttributeKeyResponse {
  /** AttributeKey的有效取值范围 */
  AttributeKeyDetails: AttributeKeyDetail[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface InquireAuditCreditRequest {
}

declare interface InquireAuditCreditResponse {
  /** 可创建跟踪集的数量 */
  AuditAmount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ListAuditsRequest {
}

declare interface ListAuditsResponse {
  /** 查询跟踪集概要集合 */
  AuditSummarys: AuditSummary[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ListCmqEnableRegionRequest {
  /** 站点类型。zh表示中国区，en表示国际区。默认中国区。 */
  WebsiteType?: string;
}

declare interface ListCmqEnableRegionResponse {
  /** 云审计支持的cmq的可用区 */
  EnableRegions: CmqRegionInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ListCosEnableRegionRequest {
  /** 站点类型。zh表示中国区，en表示国际区。默认中国区。 */
  WebsiteType?: string;
}

declare interface ListCosEnableRegionResponse {
  /** 云审计支持的cos可用区 */
  EnableRegions: CosRegionInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ListKeyAliasByRegionRequest {
  /** Kms地域 */
  KmsRegion: string;
  /** 含义跟 SQL 查询的 Limit 一致，表示本次获最多获取 Limit 个元素。缺省值为10，最大值为200 */
  Limit?: number;
  /** 含义跟 SQL 查询的 Offset 一致，表示本次获取从按一定顺序排列数组的第 Offset 个元素开始，缺省为0 */
  Offset?: number;
}

declare interface ListKeyAliasByRegionResponse {
  /** CMK的总数量 */
  TotalCount: number;
  /** 密钥别名 */
  KeyMetadatas: KeyMetadata[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface LookUpEventsRequest {
  /** 开始时间 */
  StartTime: number;
  /** 结束时间 */
  EndTime: number;
  /** 检索条件 */
  LookupAttributes?: LookupAttribute[];
  /** 查看更多日志的凭证 */
  NextToken?: string;
  /** 返回日志的最大条数 */
  MaxResults?: number;
  /** 云审计模式，有效值：standard | quick，其中standard是标准模式，quick是极速模式。默认为标准模式 */
  Mode?: string;
}

declare interface LookUpEventsResponse {
  /** 查看更多日志的凭证 */
  NextToken: string | null;
  /** 日志集合 */
  Events: Event[] | null;
  /** 日志集合是否结束 */
  ListOver: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyAuditTrackRequest {
}

declare interface ModifyAuditTrackResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface StartLoggingRequest {
  /** 跟踪集名称 */
  AuditName: string;
}

declare interface StartLoggingResponse {
  /** 是否开启成功 */
  IsSuccess: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface StopLoggingRequest {
  /** 跟踪集名称 */
  AuditName: string;
}

declare interface StopLoggingResponse {
  /** 是否关闭成功 */
  IsSuccess: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UpdateAuditRequest {
  /** 跟踪集名称 */
  AuditName: string;
  /** 是否开启cmq消息通知。1：是，0：否。目前仅支持cmq的队列服务。如果开启cmq消息通知服务，云审计会将您的日志内容实时投递到您指定地域的指定队列中。 */
  IsEnableCmqNotify?: number;
  /** 管理事件的读写属性。1：只读，2：只写，3：全部。 */
  ReadWriteAttribute?: number;
  /** CMK的全局唯一标识符，如果不是新创建的kms，该值是必填值。可以通过ListKeyAliasByRegion来获取。云审计不会校验KeyId的合法性，请您谨慎填写，避免给您的数据造成损失。 */
  KeyId?: string;
  /** cos地域。目前支持的地域可以使用ListCosEnableRegion来获取。 */
  CosRegion?: string;
  /** 队列名称。队列名称是一个不超过64个字符的字符串，必须以字母为首字符，剩余部分可以包含字母、数字和横划线(-)。如果IsEnableCmqNotify值是1的话，此值属于必填字段。如果不是新创建的队列，云审计不会去校验该队列是否真的存在，请谨慎填写，避免日志通知不成功，导致您的数据丢失。 */
  CmqQueueName?: string;
  /** 是否创建新的cos存储桶。1：是，0：否。 */
  IsCreateNewBucket?: number;
  /** kms地域。目前支持的地域可以使用ListKmsEnableRegion来获取。必须要和cos的地域保持一致。 */
  KmsRegion?: string;
  /** 是否开启kms加密。1：是，0：否。如果开启KMS加密，数据在投递到cos时，会将数据加密。 */
  IsEnableKmsEncry?: number;
  /** cos的存储桶名称。仅支持小写英文字母和数字即[a-z，0-9]、中划线“-”及其组合。用户自定义的字符串支持1 - 40个字符。存储桶命名不能以“-”开头或结尾。如果不是新创建的存储桶，云审计不会去校验该存储桶是否真的存在，请谨慎填写，避免日志投递不成功，导致您的数据丢失。 */
  CosBucketName?: string;
  /** 队列所在的地域。可以通过ListCmqEnableRegion获取支持的cmq地域。如果IsEnableCmqNotify值是1的话，此值属于必填字段。 */
  CmqRegion?: string;
  /** 日志文件前缀。3-40个字符，只能包含 ASCII 编码字母 a-z，A-Z，数字 0-9。 */
  LogFilePrefix?: string;
  /** 是否创建新的队列。1：是，0：否。如果IsEnableCmqNotify值是1的话，此值属于必填字段。 */
  IsCreateNewQueue?: number;
}

declare interface UpdateAuditResponse {
  /** 是否更新成功 */
  IsSuccess: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

/** [云审计](https://cloud.tencent.com/document/product/629) */
declare interface Cloudaudit {
  (): Versions;
  /** 创建跟踪集 */
  CreateAudit(data: CreateAuditRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAuditResponse>;
  /** 创建云审计跟踪集 */
  CreateAuditTrack(data?: CreateAuditTrackRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAuditTrackResponse>;
  /** 删除跟踪集 */
  DeleteAudit(data: DeleteAuditRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAuditResponse>;
  /** 删除云审计跟踪集 */
  DeleteAuditTrack(data?: DeleteAuditTrackRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAuditTrackResponse>;
  /** 查询跟踪集详情 */
  DescribeAudit(data: DescribeAuditRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAuditResponse>;
  /** 查询云审计跟踪集列表 */
  DescribeAuditTracks(data?: DescribeAuditTracksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAuditTracksResponse>;
  /** 查询云审计日志 */
  DescribeEvents(data: DescribeEventsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEventsResponse>;
  /** 查询AttributeKey的有效取值范围 */
  GetAttributeKey(data: GetAttributeKeyRequest, config?: AxiosRequestConfig): AxiosPromise<GetAttributeKeyResponse>;
  /** 查询用户可创建跟踪集的数量 */
  InquireAuditCredit(data?: InquireAuditCreditRequest, config?: AxiosRequestConfig): AxiosPromise<InquireAuditCreditResponse>;
  /** 查询跟踪集概要 */
  ListAudits(data?: ListAuditsRequest, config?: AxiosRequestConfig): AxiosPromise<ListAuditsResponse>;
  /** 查询云审计支持的cmq的可用区 */
  ListCmqEnableRegion(data: ListCmqEnableRegionRequest, config?: AxiosRequestConfig): AxiosPromise<ListCmqEnableRegionResponse>;
  /** 查询云审计支持的cos可用区 */
  ListCosEnableRegion(data: ListCosEnableRegionRequest, config?: AxiosRequestConfig): AxiosPromise<ListCosEnableRegionResponse>;
  /** 根据地域获取KMS密钥别名 */
  ListKeyAliasByRegion(data: ListKeyAliasByRegionRequest, config?: AxiosRequestConfig): AxiosPromise<ListKeyAliasByRegionResponse>;
  /** 检索日志 */
  LookUpEvents(data: LookUpEventsRequest, config?: AxiosRequestConfig): AxiosPromise<LookUpEventsResponse>;
  /** 修改云审计跟踪 */
  ModifyAuditTrack(data?: ModifyAuditTrackRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAuditTrackResponse>;
  /** 开启跟踪集 */
  StartLogging(data: StartLoggingRequest, config?: AxiosRequestConfig): AxiosPromise<StartLoggingResponse>;
  /** 关闭跟踪集 */
  StopLogging(data: StopLoggingRequest, config?: AxiosRequestConfig): AxiosPromise<StopLoggingResponse>;
  /** 更新跟踪集 */
  UpdateAudit(data: UpdateAuditRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateAuditResponse>;
}

export declare type Versions = ["2019-03-19"];

export default Cloudaudit;
