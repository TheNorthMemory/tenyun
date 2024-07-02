/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 隐私合规应用信息 */
declare interface AppInfoItem {
  /** 小程序apiiid */
  AppPackage: string;
  /** 小程序应用名称 */
  AppName: string | null;
  /** 小程序应用版本 */
  AppVersion: string | null;
  /** 应用平台, 0:android, 1:ios, 2:小程序 */
  Platform: number;
  /** 小程序隐私诊断报告下载链接 */
  ReportUrl: string | null;
  /** 小程序隐私诊断报告名称 */
  ReportTitle: string | null;
  /** 小程序隐私诊断堆栈报告下载链接 */
  BehaviorUrl: string | null;
  /** 小程序隐私诊断堆栈报告名称 */
  BehaviorTitle: string | null;
  /** 诊断风险项数量 */
  HighRiskCount: number | null;
  /** 隐私申明文件名称 */
  PrivacyTextName?: string | null;
  /** 软件MD5 */
  SoftwareMD5?: string | null;
  /** 隐私文本MD5 */
  PrivacyTextMD5?: string | null;
}

/** 应用隐私合规诊断任务数据 */
declare interface AppTaskData {
  /** 任务id */
  TaskID: string;
  /** 任务类型, 0:基础版, 1:专家版, 2:本地化 */
  TaskType: number;
  /** 0:默认值(待检测/待咨询), 1.检测中, 2:待评估, 3:评估中, 4:任务完成/咨询完成, 5:任务失败, 6:咨询中; */
  TaskStatus: number;
  /** 错误信息 */
  TaskErrMsg: string | null;
  /** 任务来源,0:小程序诊断, 1:预留字段(暂未使用), 2:app诊断(android); */
  Source: number;
  /** 应用信息 */
  AppInfo: AppInfoItem;
  /** 任务启动时间 */
  StartTime: string;
  /** 任务完成时间(更新时间) */
  EndTime: string;
  /** 联系人信息 */
  ContactName?: string | null;
}

/** 翼扬诊断小程序报告数据 */
declare interface FlySecMiniAppReportData {
  /** 任务id */
  TaskID: string;
  /** 小程序appid */
  MiniAppID: string;
  /** 小程序名称 */
  MiniAppName: string;
  /** 小程序版本 */
  MiniAppVersion: string;
  /** 诊断模式 1:基础诊断，2:深度诊断 */
  Mode: number;
  /** 诊断状态, 0:排队中, 1:成功, 2:失败, 3:进行中 */
  Status: number;
  /** 诊断时间 */
  CreateTime: number;
  /** 诊断得分 */
  RiskScore: string;
  /** 诊断风险等级 1:高风险 2:中风险 3:低风险 */
  RiskLevel: number;
  /** 诊断8大维度得分情况(每项总分100分) */
  RiskItems: FlySecMiniAppRiskItems;
}

/** 翼扬诊断小程序的诊断报告风险数据 */
declare interface FlySecMiniAppRiskItems {
  /** 代码防护(基础诊断) */
  RiskItem1Score: number;
  /** 开发测试信息泄露(基础诊断) */
  RiskItem2Score: number;
  /** 编码规范(基础诊断) */
  RiskItem3Score: number;
  /** 配置风险(基础诊断) */
  RiskItem4Score: number;
  /** 账号安全(基础诊断) */
  RiskItem5Score: number;
  /** 用户信息安全(基础诊断) */
  RiskItem6Score: number;
  /** 内部信息泄露(基础诊断) */
  RiskItem7Score: number;
  /** 其他安全(基础诊断) */
  RiskItem8Score: number;
}

/** 翼扬诊断小程序任务数据 */
declare interface FlySecMiniAppTaskData {
  /** 任务id */
  TaskID: string;
  /** 小程序appid */
  MiniAppID: string;
  /** 小程序名称 */
  MiniAppName: string;
  /** 小程序版本 */
  MiniAppVersion: string;
  /** 诊断模式 1:基础诊断，2:深度诊断 */
  Mode: number;
  /** 诊断时间 */
  CreateTime: number;
  /** 诊断状态, 0:排队中, 1:成功, 2:失败, 3:进行中 */
  Status: number;
  /** 诊断失败错误码 */
  Error: number;
}

/** 翼扬安全资源使用情况 */
declare interface ResourceUsageInfoData {
  /** 资源名称, 具体名称请查看产品配置 */
  ResourceName: string;
  /** 资源总数 */
  Total: number;
  /** 资源未使用次数 */
  UnusedCount: number;
}

/** 任务流步骤详情 */
declare interface TaskFlowStepsInfo {
  /** 流程编号 */
  FlowNo: string | null;
  /** 流程名称 */
  FlowName: string;
  /** 流程状态, 其他值:进行中, 2:成功, 3:失败 */
  FlowStatus: number;
  /** 流程状态描述 */
  FlowStateDesc: string | null;
  /** 流程启动时间 */
  StartTime: string | null;
  /** 流程完成时间 */
  EndTime: string | null;
}

declare interface CreateAppScanTaskRepeatRequest {
  /** 任务类型, 0:基础版, 1:专家版, 2:本地化 */
  TaskType: number;
  /** 任务来源, 0:小程序诊断, 1:预留字段(暂未使用), 2:app诊断(android); */
  Source: number;
  /** 小程序AppID */
  AppPackage: string;
  /** 应用平台, 0:android, 1:ios, 2:小程序 */
  Platform: number;
  /** 原诊断任务ID */
  OrgTaskID: string;
}

declare interface CreateAppScanTaskRepeatResponse {
  /** 返回值, 0:成功, 其他值请查看“返回值”定义 */
  Result: number;
  /** 任务id */
  TaskID: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateAppScanTaskRequest {
  /** 任务类型, 0:基础版, 1:专家版, 2:本地化 */
  TaskType: number;
  /** 任务来源, 0:小程序诊断, 1:预留字段(暂未使用), 2:app诊断(android); */
  Source: number;
  /** 小程序AppID */
  AppPackage: string;
  /** 应用平台, 0:android, 1:ios, 2:小程序 */
  Platform: number;
  /** 小程序名称 */
  AppName?: string;
  /** 小程序版本 */
  AppVersion?: string;
  /** 联系人信息 */
  ContactName?: string;
  /** 联系电话 */
  TelNumber?: string;
  /** 公司名称 */
  CorpName?: string;
  /** 商务对接人员 */
  SalesPerson?: string;
  /** 公司邮箱 */
  Email?: string;
}

declare interface CreateAppScanTaskResponse {
  /** 返回值, 0:成功, 其他值请查看“返回值”定义 */
  Result: number;
  /** 任务id */
  TaskID: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateFlySecMiniAppProfessionalScanTaskRequest {
  /** 小程序AppID */
  MiniAppID: string;
  /** 小程序名称 */
  MiniAppName: string;
  /** 诊断模式 2:深度诊断 */
  Mode: number;
  /** 公司名称 */
  CorpName: string;
  /** 手机号码 */
  Mobile: string;
  /** 电子邮箱 */
  Email: string;
  /** 备注信息 */
  Remark?: string;
}

declare interface CreateFlySecMiniAppProfessionalScanTaskResponse {
  /** 返回值, 0:成功, 其他值请查看“返回值”定义 */
  Ret: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateFlySecMiniAppScanTaskRepeatRequest {
  /** 小程序AppID */
  MiniAppID: string;
  /** 诊断模式 1:基础诊断 */
  Mode: number;
  /** 原任务id */
  OrgTaskID: string;
  /** 小程序测试账号(自有账号体系需提供,其他情况不需要) */
  MiniAppTestAccount?: string;
  /** 小程序测试密码(自有账号体系需提供,其他情况不需要) */
  MiniAppTestPwd?: string;
  /** 诊断扫描版本 0:正式版 1:体验版 */
  ScanVersion?: number;
}

declare interface CreateFlySecMiniAppScanTaskRepeatResponse {
  /** 返回值, 0:成功, 其他值请查看“返回值”定义 */
  Ret: number;
  /** 任务id */
  TaskID: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateFlySecMiniAppScanTaskRequest {
  /** 小程序AppID */
  MiniAppID: string;
  /** 诊断模式 1:基础诊断 */
  Mode: number;
  /** 小程序测试账号(自有账号体系需提供,其他情况不需要) */
  MiniAppTestAccount?: string;
  /** 小程序测试密码(自有账号体系需提供,其他情况不需要) */
  MiniAppTestPwd?: string;
  /** 小程序所属行业 */
  Industry?: string;
  /** 小程序调查问卷json字符串 */
  SurveyContent?: string;
  /** 手机号码 */
  Mobile?: string;
  /** 邮箱地址 */
  Email?: string;
  /** 商务合作接口人 */
  SalesPerson?: string;
  /** 诊断扫描版本 0:正式版 1:体验版 */
  ScanVersion?: number;
}

declare interface CreateFlySecMiniAppScanTaskResponse {
  /** 返回值, 0:成功, 其他值请查看“返回值”定义 */
  Ret: number;
  /** 任务id */
  TaskID: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBasicDiagnosisResourceUsageInfoRequest {
  /** 诊断模式 1:基础诊断，2:深度诊断 */
  Mode: number;
}

declare interface DescribeBasicDiagnosisResourceUsageInfoResponse {
  /** 返回值, 0:成功, 其他值请查看“返回值”定义 */
  Ret: number;
  /** 资源类型 */
  ResourceName: string;
  /** 资源总数 */
  Total: number;
  /** 资源未使用次数 */
  UnusedCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFlySecMiniAppReportUrlRequest {
  /** 任务id */
  TaskID: string;
  /** 小程序appid */
  MiniAppID: string;
  /** 诊断方式 1:基础诊断，2:深度诊断 */
  Mode: number;
  /** 诊断报告类型 0:基础诊断报告，1:总裁版诊断报告，2:诊断报告json结果 */
  ReportType?: number;
}

declare interface DescribeFlySecMiniAppReportUrlResponse {
  /** 返回值, 0:成功, 其他值请查看“返回值”定义 */
  Ret: number;
  /** 诊断报告下载链接 */
  Url: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFlySecMiniAppScanReportListRequest {
  /** 小程序AppID */
  MiniAppID: string;
  /** 诊断方式 1:基础诊断，2:深度诊断 */
  Mode: number;
  /** 诊断状态 -1:查询全部, 0:排队中, 1:成功, 2:失败, 3:进行中 */
  Status: number;
  /** 查询数量, 0:查询所有, 其他值:最近几次的诊断数量 */
  Size: number;
  /** 小程序版本 */
  MiniAppVersion?: string;
}

declare interface DescribeFlySecMiniAppScanReportListResponse {
  /** 返回值, 0:成功, 其他值请查看“返回值”定义 */
  Ret: number;
  /** 诊断报告数据 */
  Data: FlySecMiniAppReportData[] | null;
  /** 诊断任务数 */
  Total: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFlySecMiniAppScanTaskListRequest {
  /** 诊断方式 1:基础诊断，2:深度诊断 */
  Mode: number;
  /** 诊断状态 -1:查询全部, 0:排队中, 1:成功, 2:失败, 3:进行中 */
  Status: number;
  /** 查询数量, 0:查询所有, 其他值:最近几次的诊断数量 */
  Size: number;
  /** 小程序appid(为空的时候,则查询当前用户诊断的所有小程序) */
  MiniAppID?: string;
}

declare interface DescribeFlySecMiniAppScanTaskListResponse {
  /** 返回值, 0:成功, 其他值请查看“返回值”定义 */
  Ret: number;
  /** 诊断任务数据列表 */
  Data: FlySecMiniAppTaskData[] | null;
  /** 诊断任务数 */
  Total: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFlySecMiniAppScanTaskParamRequest {
  /** 任务id */
  TaskID: string;
}

declare interface DescribeFlySecMiniAppScanTaskParamResponse {
  /** 返回值, 0:成功, 其他值请查看“返回值”定义 */
  Ret: number;
  /** 小程序AppID */
  MiniAppID: string;
  /** 诊断模式 1:基础诊断，2:深度诊断 */
  Mode: number;
  /** 小程序测试账号(自有账号体系需提供,其他情况不需要) */
  MiniAppTestAccount: string | null;
  /** 小程序测试密码(自有账号体系需提供,其他情况不需要) */
  MiniAppTestPwd: string | null;
  /** 诊断扫描版本 0:正式版 1:体验版 */
  ScanVersion: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFlySecMiniAppScanTaskStatusRequest {
  /** 任务id */
  TaskID: string;
}

declare interface DescribeFlySecMiniAppScanTaskStatusResponse {
  /** 返回值, 0:成功, 其他值请查看“返回值”定义 */
  Ret: number;
  /** 诊断状态, 0:排队中, 1:成功, 2:失败, 3:进行中 */
  Status: number;
  /** 诊断失败错误码 */
  Errno: number | null;
  /** 小程序名称 */
  MiniAppName: string | null;
  /** 小程序版本 */
  MiniAppVersion: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeResourceUsageInfoRequest {
}

declare interface DescribeResourceUsageInfoResponse {
  /** 返回值, 0:成功, 其他值请查看“返回值”定义 */
  Ret?: number;
  /** 安全资源数据列表 */
  Data?: ResourceUsageInfoData[];
  /** 安全资源数量 */
  Total?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeScanTaskListRequest {
  /** 任务来源, -1:所有, 0:小程序诊断, 1:预留字段(暂未使用), 2:app诊断(android); */
  Source: number;
  /** 应用平台, 0:android, 1:ios, 2:小程序 */
  Platform: number;
  /** 任务状态,可多值查询,例如:"1,2,3" 0:默认值(待检测/待咨询), 1.检测中, 2:待评估, 3:评估中, 4:任务完成/咨询完成, 5:任务失败, 6:咨询中; */
  TaskStatuses: string;
  /** 任务类型,可多值查询,采用逗号分隔,例如:"0,1" 0:基础版, 1:专家版, 2:本地化 */
  TaskTypes: string;
  /** 页码 */
  PageNo: number;
  /** 页码大小 */
  PageSize: number;
  /** 应用名称或小程序名称(可选参数) */
  AppName?: string;
  /** 查询时间范围, 查询开始时间(2021-09-30 或 2021-09-30 10:57:34) */
  StartTime?: string;
  /** 查询时间范围, 查询结束时间(2021-09-30 或 2021-09-30 10:57:34) */
  EndTime?: string;
}

declare interface DescribeScanTaskListResponse {
  /** 返回值, 0:成功, 其他值请查看“返回值”定义 */
  Result: number;
  /** 诊断任务数据列表 */
  Data: AppTaskData[] | null;
  /** 任务总数量 */
  Total: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeScanTaskReportUrlRequest {
  /** 任务来源, 0:小程序诊断, 1:预留字段(暂未使用), 2:app诊断(android); */
  Source: number;
  /** 任务id */
  TaskID: string;
  /** 应用平台, 0:android, 1:ios, 2:小程序 */
  Platform: number;
  /** 报告类型, 0:诊断报告, 1:堆栈报告(预留), 2:视频证据(预留), 3:报告json结果 */
  ReportType: number;
  /** 任务类型, 0:基础版, 1:专家版, 2:本地化 */
  TaskType: number;
}

declare interface DescribeScanTaskReportUrlResponse {
  /** 返回值, 0:成功, 其他值请查看“返回值”定义 */
  Result: number;
  /** 诊断报告/堆栈信息下载链接 */
  ReportUrl: string;
  /** 诊断报告/堆栈名称 */
  ReportTitle: string | null;
  /** 诊断json结果内容 */
  ReportResult: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeScanTaskStatusRequest {
  /** 任务类型, 0:基础版, 1:专家版, 2:本地化 */
  TaskType: number;
  /** 任务来源, 0:小程序诊断, 1:预留字段(暂未使用), 2:app诊断(android); */
  Source: number;
  /** 任务id */
  TaskID: string;
  /** 应用平台, 0:android, 1:ios, 2:小程序 */
  Platform: number;
}

declare interface DescribeScanTaskStatusResponse {
  /** 返回值, 0:成功, 其他值请查看“返回值”定义 */
  Result: number;
  /** 0:默认值(待检测/待咨询), 1.检测中, 4:任务完成/咨询完成, 5:任务失败, 6:咨询中; */
  Status: number;
  /** 诊断失败的错误信息 */
  ErrMsg: string | null;
  /** 任务流详情 */
  FlowSteps: TaskFlowStepsInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Mmps 小程序安全} */
declare interface Mmps {
  (): Versions;
  /** 创建小程序隐私合规诊断任务 {@link CreateAppScanTaskRequest} {@link CreateAppScanTaskResponse} */
  CreateAppScanTask(data: CreateAppScanTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAppScanTaskResponse>;
  /** 隐私合规诊断重试任务 {@link CreateAppScanTaskRepeatRequest} {@link CreateAppScanTaskRepeatResponse} */
  CreateAppScanTaskRepeat(data: CreateAppScanTaskRepeatRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAppScanTaskRepeatResponse>;
  /** 提交深度诊断任务 {@link CreateFlySecMiniAppProfessionalScanTaskRequest} {@link CreateFlySecMiniAppProfessionalScanTaskResponse} */
  CreateFlySecMiniAppProfessionalScanTask(data: CreateFlySecMiniAppProfessionalScanTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateFlySecMiniAppProfessionalScanTaskResponse>;
  /** 创建小程序翼扬安全诊断任务 {@link CreateFlySecMiniAppScanTaskRequest} {@link CreateFlySecMiniAppScanTaskResponse} */
  CreateFlySecMiniAppScanTask(data: CreateFlySecMiniAppScanTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateFlySecMiniAppScanTaskResponse>;
  /** 重新提交诊断任务 {@link CreateFlySecMiniAppScanTaskRepeatRequest} {@link CreateFlySecMiniAppScanTaskRepeatResponse} */
  CreateFlySecMiniAppScanTaskRepeat(data: CreateFlySecMiniAppScanTaskRepeatRequest, config?: AxiosRequestConfig): AxiosPromise<CreateFlySecMiniAppScanTaskRepeatResponse>;
  /** 查询基础诊断资源使用情况 {@link DescribeBasicDiagnosisResourceUsageInfoRequest} {@link DescribeBasicDiagnosisResourceUsageInfoResponse} */
  DescribeBasicDiagnosisResourceUsageInfo(data: DescribeBasicDiagnosisResourceUsageInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBasicDiagnosisResourceUsageInfoResponse>;
  /** 获取诊断任务报告链接 {@link DescribeFlySecMiniAppReportUrlRequest} {@link DescribeFlySecMiniAppReportUrlResponse} */
  DescribeFlySecMiniAppReportUrl(data: DescribeFlySecMiniAppReportUrlRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFlySecMiniAppReportUrlResponse>;
  /** 查询指定小程序版本的安全得分 {@link DescribeFlySecMiniAppScanReportListRequest} {@link DescribeFlySecMiniAppScanReportListResponse} */
  DescribeFlySecMiniAppScanReportList(data: DescribeFlySecMiniAppScanReportListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFlySecMiniAppScanReportListResponse>;
  /** 获取诊断任务列表 {@link DescribeFlySecMiniAppScanTaskListRequest} {@link DescribeFlySecMiniAppScanTaskListResponse} */
  DescribeFlySecMiniAppScanTaskList(data: DescribeFlySecMiniAppScanTaskListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFlySecMiniAppScanTaskListResponse>;
  /** 获取诊断任务参数信息 {@link DescribeFlySecMiniAppScanTaskParamRequest} {@link DescribeFlySecMiniAppScanTaskParamResponse} */
  DescribeFlySecMiniAppScanTaskParam(data: DescribeFlySecMiniAppScanTaskParamRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFlySecMiniAppScanTaskParamResponse>;
  /** 查询诊断任务状态 {@link DescribeFlySecMiniAppScanTaskStatusRequest} {@link DescribeFlySecMiniAppScanTaskStatusResponse} */
  DescribeFlySecMiniAppScanTaskStatus(data: DescribeFlySecMiniAppScanTaskStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFlySecMiniAppScanTaskStatusResponse>;
  /** 查询安全资源使用情况 {@link DescribeResourceUsageInfoRequest} {@link DescribeResourceUsageInfoResponse} */
  DescribeResourceUsageInfo(data?: DescribeResourceUsageInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeResourceUsageInfoResponse>;
  /** 获取隐私合规诊断任务列表 {@link DescribeScanTaskListRequest} {@link DescribeScanTaskListResponse} */
  DescribeScanTaskList(data: DescribeScanTaskListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeScanTaskListResponse>;
  /** 获取合规诊断任务报告url {@link DescribeScanTaskReportUrlRequest} {@link DescribeScanTaskReportUrlResponse} */
  DescribeScanTaskReportUrl(data: DescribeScanTaskReportUrlRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeScanTaskReportUrlResponse>;
  /** 查询隐私合规诊断任务状态 {@link DescribeScanTaskStatusRequest} {@link DescribeScanTaskStatusResponse} */
  DescribeScanTaskStatus(data: DescribeScanTaskStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeScanTaskStatusResponse>;
}

export declare type Versions = ["2020-07-10"];

export default Mmps;
