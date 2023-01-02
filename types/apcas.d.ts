/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 调用明细结构体 */
declare interface CallDetailItem {
  /** 数据类型 0 imei 1 qimei 2 qq 3 phone 7:IDFA 8:MD5(imei) */
  DataType: number;
  /** 有效数据量 */
  ValidAmount: number;
  /** 调用时间 */
  Date: string;
}

/** 调用明细返回数据体 */
declare interface CallDetails {
  /** 符合条件的总条数 */
  TotalCount: number;
  /** 调用明细数组 */
  CallDetailSet: CallDetailItem[];
}

/** 调用量统计item */
declare interface CallStatItem {
  /** 当前统计量的时间段 */
  Date: string;
  /** 当前时间段的调用量 */
  Amount: number;
}

/** 调用量统计信息，包括周/日/月/总调用量 */
declare interface GeneralStat {
  /** 今日调用量 */
  TodayAmount: number;
  /** 本周调用量 */
  WeekAmount: number;
  /** 本月调用量 */
  MonthAmount: number;
  /** 总调用量 */
  TotalAmount: number;
}

/** 画像标签详情数据对象 */
declare interface LabelDetailData {
  /** 标签数据对象 */
  Value: LabelValue;
  /** 标签表述，如"汽车资讯"、"游戏#手游"等 */
  Label: string;
}

/** 标签数据 */
declare interface LabelValue {
  /** 标签覆盖率占比（在整个上传的ID列表中的覆盖率） */
  Proportion: number;
  /** 标签大盘覆盖率占比 */
  Market: number;
  /** TGI指数，由Proportion除以Market得到 */
  Tgi: number;
}

/** 任务列表项Model */
declare interface ListModel {
  /** 任务ID */
  ID: number;
  /** 任务名称 */
  TaskName: string;
  /** 任务起始时间（13位数字的UNIX 时间戳，单位毫秒 ） */
  StartTime: number;
  /** 任务状态 0:默认状态 1:任务正在运行 2:任务运行成功 3:任务运行失败 */
  Status: number;
  /** 画像覆盖人数 */
  Available: number;
  /** 任务失败描述信息 */
  ErrMsg: string;
}

/** 返回购车意向评级 */
declare interface RatingData {
  /** 线索评级（取值：0、1、2、3分别代表无、低、中、高意愿） */
  Rank: number;
}

/** 任务ID信息 */
declare interface TaskData {
  /** 画像洞察任务ID */
  Id: number;
}

/** 画像任务详情对象 */
declare interface TaskDetailData {
  /** 画像TAG ID */
  TagId: number;
  /** 画像TAG描述（如“省份分布”） */
  TagDesc: string;
  /** 画像Label对象列表（一个TAG对于N个Label，例如“省份分布”TAG对应“广东省”、“浙江省”等多个Label） */
  LabelDetailDataList: LabelDetailData[];
}

/** 任务列表对象 */
declare interface TaskListData {
  /** 查询分页页码 */
  PageNumber: number;
  /** 查询分页大小 */
  PageSize: number;
  /** 任务列表总记录数 */
  TotalCount: number;
  /** 任务列表 */
  TaskList: ListModel[];
}

declare interface GetTaskDetailRequest {
  /** 任务ID */
  Id: number;
}

declare interface GetTaskDetailResponse {
  /** 画像洞察任务TAG详细数据列表 */
  TaskDetailDataList: TaskDetailData[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetTaskListRequest {
  /** 查询分页页码 */
  PageNumber: number;
  /** 查询分页大小 */
  PageSize: number;
  /** 查询起始时间（13位数字的UNIX时间戳，单位毫秒 ） */
  StartTime?: number;
  /** 查询结束时间（13位数字的UNIX时间戳，单位毫秒 ） */
  EndTime?: number;
  /** 任务名称 */
  TaskName?: string;
  /** 查询任务状态 0:默认状态 1:任务正在运行 2:任务运行成功 3:任务运行失败 */
  TaskStatus?: number;
}

declare interface GetTaskListResponse {
  /** 任务列表对象 */
  TaskListData: TaskListData;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface PredictRatingRequest {
  /** ID标志的类型，0:IMEI 7:IDFA 8:MD5(imei) 100: 手机号明文 101: 手机号md5加密 */
  Type: number;
  /** 请求唯一标志ID */
  Id: string;
}

declare interface PredictRatingResponse {
  /** 意向评级 */
  RatingData: RatingData;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryCallDetailsRequest {
  /** 请求类型 1:人群特征洞察统计 2:购车意向预测统计 */
  Type: number;
  /** 开始时间戳（毫秒） */
  StartTime: number;
  /** 结束时间戳（毫秒） */
  EndTime: number;
  /** 页数 */
  PageNumber: number;
  /** 每页个数 */
  PageSize: number;
}

declare interface QueryCallDetailsResponse {
  /** 调用明细 */
  CallDetails: CallDetails;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryCallStatRequest {
  /** 请求类型 1:人群特征洞察统计 2:购车意向预测统计 */
  Type: number;
  /** 开始时间戳（毫秒） */
  StartTime: number;
  /** 结束时间戳（毫秒） */
  EndTime: number;
}

declare interface QueryCallStatResponse {
  /** 调用量数组 */
  CallSet: CallStatItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryGeneralStatRequest {
  /** 请求类型:1,人群特征洞察统计 2购车意向预测统计 */
  Type: number;
}

declare interface QueryGeneralStatResponse {
  /** 调用量信息 */
  GeneralStat: GeneralStat;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UploadIdRequest {
  /** id标志的类型: 0:imei 7:IDFA 8:MD5(imei) */
  Type: number;
  /** 任务名称 */
  TaskName: string;
  /** ID列表（ID间使用换行符分割、然后使用Base64编码） */
  IdListBase64: string;
}

declare interface UploadIdResponse {
  /** 画像洞察任务ID等信息 */
  TaskData: TaskData;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Apcas 汽车精准获客服务} */
declare interface Apcas {
  (): Versions;
  /** 查询画像洞察任务详情 {@link GetTaskDetailRequest} {@link GetTaskDetailResponse} */
  GetTaskDetail(data: GetTaskDetailRequest, config?: AxiosRequestConfig): AxiosPromise<GetTaskDetailResponse>;
  /** 查询画像洞察任务列表 {@link GetTaskListRequest} {@link GetTaskListResponse} */
  GetTaskList(data: GetTaskListRequest, config?: AxiosRequestConfig): AxiosPromise<GetTaskListResponse>;
  /** 购车意向评级接口 {@link PredictRatingRequest} {@link PredictRatingResponse} */
  PredictRating(data: PredictRatingRequest, config?: AxiosRequestConfig): AxiosPromise<PredictRatingResponse>;
  /** 查询调用明细 {@link QueryCallDetailsRequest} {@link QueryCallDetailsResponse} */
  QueryCallDetails(data: QueryCallDetailsRequest, config?: AxiosRequestConfig): AxiosPromise<QueryCallDetailsResponse>;
  /** 获取调用量统计 {@link QueryCallStatRequest} {@link QueryCallStatResponse} */
  QueryCallStat(data: QueryCallStatRequest, config?: AxiosRequestConfig): AxiosPromise<QueryCallStatResponse>;
  /** 总统计数据 {@link QueryGeneralStatRequest} {@link QueryGeneralStatResponse} */
  QueryGeneralStat(data: QueryGeneralStatRequest, config?: AxiosRequestConfig): AxiosPromise<QueryGeneralStatResponse>;
  /** 上传群体画像的ID列表 {@link UploadIdRequest} {@link UploadIdResponse} */
  UploadId(data: UploadIdRequest, config?: AxiosRequestConfig): AxiosPromise<UploadIdResponse>;
}

export declare type Versions = ["2020-11-27"];

export default Apcas;
