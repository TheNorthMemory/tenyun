/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 报告分类结果 */
declare interface ClassifiedReports {
  /** 报告类型 */
  ReportType: string;
  /** 文件列表 */
  FileList: string[];
}

/** 报告分类信息 */
declare interface ClassifyInfo {
  /** 一级分类 */
  FirstClass: string;
  /** 二级分类 */
  SecondClass: string;
  /** 三级分类 */
  ThirdClass: string;
  /** 一级分类序号 */
  FirstClassId: number;
  /** 二级分类序号 */
  SecondClassId: number;
  /** 三级分类序号 */
  ThirdClassId: number;
}

/** 结构化对比指标（准确率/召回率）数据 */
declare interface CompareMetricsData {
  /** 短文准确率 */
  ShortStructAccuracy: string | null;
  /** 短文召回率 */
  ShortStructRecall: string | null;
  /** 长文结构化准确率 */
  LongStructAccuracy: string | null;
  /** 长文结构化召回率 */
  LongStructRecall: string | null;
  /** 长文提取准确率 */
  LongContentAccuracy: string | null;
  /** 长文提取召回率 */
  LongContentRecall: string | null;
}

/** 创建自动分类的结构化任务子任务信息 */
declare interface CreateAutoClassifyStructureTaskInfo {
  /** 报告文件上传的地址列表，需按顺序排列。如果使用ImageList参数，置为空数组即可 */
  FileList: string[];
  /** 客户号 */
  CustomerId?: string;
  /** 客户姓名 */
  CustomerName?: string;
  /** 报告上传的图片内容数组，图片内容采用base64编码，需按顺序排列 */
  ImageList?: string[];
}

/** 创建结构化任务子任务信息 */
declare interface CreateStructureTaskInfo {
  /** 任务类型:HealthReport(体检报告); BUltraReport(B超报告);MedCheckReport(检查报告);LaboratoryReport(检验报告); PathologyReport(病理报告);AdmissionReport(入院记录);DischargeReport(出院记录); DischargeSummary(出院小结);DiagnosisReport(诊断证明); MedicalRecordFront(病案首页);OperationReport(手术记录);OutpatientMedicalRecord(门诊病历) */
  TaskType: string;
  /** 报告文件上传的地址列表，需按顺序排列。如果使用ImageList参数，置为空数组即可 */
  FileList: string[];
  /** 客户号 */
  CustomerId?: string;
  /** 客户姓名 */
  CustomerName?: string;
  /** 报告上传的图片内容数组，图片内容采用base64编码，需按顺序排列 */
  ImageList?: string[];
  /** 报告年份 */
  Year?: string;
}

/** 包含险种的各个核保结论 */
declare interface InsuranceResult {
  /** 险种:CriticalDiseaseInsurance(重疾险);LifeInsurance(寿险);AccidentInsurance(意外险);MedicalInsurance(医疗险) */
  InsuranceType: string;
  /** 对应险种的机器核保结果 */
  Result: MachinePredict[];
}

/** 位置信息 */
declare interface Location {
  /** 位置信息 */
  Points: Point[];
}

/** 机器核保预测结果 */
declare interface MachinePredict {
  /** 核保引擎名称 */
  Title: string;
  /** 核保结论：加费、承保、拒保、延期、除外、加费+除外 */
  Conclusion: string;
  /** AI决策树解释 */
  Explanation: UnderwriteItem[];
  /** 疾病指标 */
  Disease: UnderwriteItem[];
  /** 检查异常 */
  Laboratory: UnderwriteItem[];
}

/** 机器核保输出 */
declare interface MachineUnderwriteOutput {
  /** 客户号 */
  CustomerId: string;
  /** 客户姓名 */
  CustomerName: string;
  /** 各个险种的结果 */
  Results: InsuranceResult[];
}

/** Ocr识别结果 */
declare interface OcrRecognise {
  /** 原文字段 */
  OriginalField: string;
  /** 识别结果 */
  Value: string;
  /** 置信度 */
  Confidence: number;
  /** 位置信息 */
  Location: Location;
  /** 字段名 */
  Field: string;
}

/** 复核差异接口的每一份报告的差异结果 */
declare interface PerStructDifference {
  /** 子任务ID */
  SubTaskId: string;
  /** 任务类型:HealthReport(体检报告); BUltraReport(B超报告);MedCheckReport(检查报告);LaboratoryReport(检验报告); PathologyReport(病理报告);AdmissionReport(入院记录);DischargeReport(出院记录); DischargeSummary(出院小结);DiagnosisReport(诊断证明); MedicalRecordFront(病案首页);OperationReport(手术记录);OutpatientMedicalRecord(门诊病历) */
  TaskType: string;
  /** 修改的项 */
  ModifyItems: StructureModifyItem[];
  /** 新增的项 */
  NewItems: StructureOneItem[];
  /** 删除的项 */
  RemoveItems: StructureOneItem[];
}

/** 点信息 */
declare interface Point {
  /** x坐标 */
  XCoordinate: number;
  /** y坐标 */
  YCoordinate: number;
  /** 页码 */
  Page: number;
}

/** 用于返回结构化任务结果 */
declare interface ResultObject {
  /** 图片质量分 */
  Quality: number;
  /** 由结构化算法结构化json转换的字符串，具体协议参见算法结构化结果协议 */
  StructureResult: string;
  /** 报告分类信息 */
  ReportType: ClassifyInfo[] | null;
}

/** 人工复核数据的子任务信息 */
declare interface ReviewDataTaskInfo {
  /** 主任务号 */
  MainTaskId: string;
  /** 子任务号 */
  SubTaskId: string;
  /** 任务名 */
  TaskName: string;
  /** 任务类型:HealthReport(体检报告); BUltraReport(B超报告);MedCheckReport(检查报告);LaboratoryReport(检验报告); PathologyReport(病理报告);AdmissionReport(入院记录);DischargeReport(出院记录); DischargeSummary(出院小结);DiagnosisReport(诊断证明); MedicalRecordFront(病案首页);OperationReport(手术记录);OutpatientMedicalRecord(门诊病历) */
  TaskType: string;
}

/** 结构化复核差异接口的修改的项 */
declare interface StructureModifyItem {
  /** 修改的字段的路径 */
  Path: string | null;
  /** 机器结果的值 */
  Machine: string | null;
  /** 人工结果的值 */
  Manual: string | null;
}

/** 复核差异接口的新增或者删除的项 */
declare interface StructureOneItem {
  /** 新字段的路径 */
  Path: string | null;
  /** 字段的值 */
  Value: string | null;
}

/** 结构化结果 */
declare interface StructureResultObject {
  /** 0表示正常返回；1代表结果未生成；2代表任务执行失败 */
  Code: number;
  /** 报告类型:HealthReport(体检报告); BUltraReport(B超报告);MedCheckReport(检查报告);LaboratoryReport(检验报告); PathologyReport(病理报告);AdmissionReport(入院记录);DischargeReport(出院记录); DischargeSummary(出院小结);DiagnosisReport(诊断证明); MedicalRecordFront(病案首页);OperationReport(手术记录);OutpatientMedicalRecord(门诊病历) */
  TaskType: string;
  /** 结构化结果 */
  StructureResult: string;
  /** 子任务ID */
  SubTaskId: string;
  /** 任务文件列表 */
  TaskFiles: string[];
  /** 结构化字段结果数组 */
  ResultFields: OcrRecognise[] | null;
}

/** 核保结论 机器结论和人工结论统一数据结构 */
declare interface UnderwriteConclusion {
  /** 类型 */
  Type: string;
  /** 结论 */
  Conclusion: string;
  /** 解释 */
  Explanation: string;
}

/** 机器核保结论子项 */
declare interface UnderwriteItem {
  /** 字段名 */
  Name: string;
  /** 结果 */
  Result: string;
  /** 风险值或者说明 */
  Value: string;
  /** 参考范围 */
  Range: string | null;
  /** 报告时间 */
  ReportDate: string[] | null;
  /** 文件类型 */
  FileType: string | null;
  /** 检查项目 */
  InspectProject: string | null;
  /** 单位 */
  Unit: string | null;
  /** 原名 */
  OriginName: string | null;
  /** 阴阳性 */
  YinYang: string | null;
}

/** 核保结果输出 */
declare interface UnderwriteOutput {
  /** 客户ID */
  CustomerId: string;
  /** 客户姓名 */
  CustomerName: string;
  /** 结果 */
  Results: InsuranceResult[];
  /** 复核时间 */
  ReviewTime: string;
  /** 人工复核结果 */
  ManualDetail: UnderwriteConclusion[];
}

declare interface AddSubStructureTasksRequest {
  /** 主任务id */
  MainTaskId: string;
  /** 子任务信息数组 */
  TaskInfos: CreateStructureTaskInfo[];
}

declare interface AddSubStructureTasksResponse {
  /** 增量子任务id数组 */
  SubTaskIds: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateAutoClassifyStructureTaskRequest {
  /** 服务类型Structured 仅结构化Underwrite 结构化+核保 */
  ServiceType: string;
  /** 创建任务时可以上传多个报告，后台生成多个识别子任务，子任务的详细信息 */
  TaskInfos: CreateAutoClassifyStructureTaskInfo[];
  /** 保单号 */
  PolicyId?: string;
  /** 核保触发方式Auto 自动Manual 手动 */
  TriggerType?: string;
  /** 险种，如果是体检报告类型，此参数是必填，类型说明如下：CriticalDiseaseInsurance:重疾险LifeInsurance：寿险AccidentInsurance：意外险 */
  InsuranceTypes?: string[];
  /** 回调地址，接收Post请求传送结果 */
  CallbackUrl?: string;
}

declare interface CreateAutoClassifyStructureTaskResponse {
  /** 创建的主任务号，用于查询结果 */
  MainTaskId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateStructureTaskRequest {
  /** 服务类型Structured 仅结构化Underwrite 结构化+核保 */
  ServiceType: string;
  /** 创建任务时可以上传多个报告，后台生成多个识别子任务，子任务的详细信息 */
  TaskInfos: CreateStructureTaskInfo[];
  /** 保单号 */
  PolicyId?: string;
  /** 核保触发方式Auto 自动Manual 手动 */
  TriggerType?: string;
  /** 险种，如果是体检报告类型，此参数是必填，类型说明如下：CriticalDiseaseInsurance:重疾险LifeInsurance：寿险AccidentInsurance：意外险 */
  InsuranceTypes?: string[];
  /** 回调地址，接收Post请求传送结果 */
  CallbackUrl?: string;
}

declare interface CreateStructureTaskResponse {
  /** 创建的主任务号，用于查询结果 */
  MainTaskId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateUnderwriteTaskByIdRequest {
  /** 主任务ID数组， */
  MainTaskIds: string[];
  /** 回调地址，可不传（提供轮询机制）。 */
  CallbackUrl?: string;
}

declare interface CreateUnderwriteTaskByIdResponse {
  /** 核保任务ID数据 */
  UnderwriteTaskIds: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMachineUnderwriteRequest {
  /** 核保任务ID */
  UnderwriteTaskId: string;
}

declare interface DescribeMachineUnderwriteResponse {
  /** 腾讯云主账号ID */
  Uin: string;
  /** 操作人子账户ID */
  SubAccountUin: string;
  /** 保单ID */
  PolicyId: string;
  /** 主任务ID */
  MainTaskId: string;
  /** 核保任务ID */
  UnderwriteTaskId: string;
  /** 结果状态：0：返回成功1：结果未生成2：结果生成失败 */
  Status: number;
  /** 机器核保结果 */
  UnderwriteResults: MachineUnderwriteOutput[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeQualityScoreRequest {
  /** 文件二进制数据 */
  File: undefined;
}

declare interface DescribeQualityScoreResponse {
  /** 质量分 */
  QualityScore: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeReportClassifyRequest {
  /** 服务类型Structured 仅结构化Underwrite 结构化+核保 */
  ServiceType: string;
  /** 文件地址数组 */
  FileList: string[];
}

declare interface DescribeReportClassifyResponse {
  /** 报告分类结果 */
  Reports: ClassifiedReports[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeStructCompareDataRequest {
  /** 主任务号 */
  MainTaskId?: string;
  /** 子任务号 */
  SubTaskId?: string;
}

declare interface DescribeStructCompareDataResponse {
  /** 保单号 */
  PolicyId: string;
  /** 主任务号 */
  MainTaskId: string;
  /** 客户号 */
  CustomerId: string | null;
  /** 客户姓名 */
  CustomerName: string | null;
  /** 复核时间 */
  ReviewTime: string;
  /** 算法识别结果 */
  MachineResult: string;
  /** 人工复核结果 */
  ManualResult: string;
  /** 结构化对比指标数据 */
  Metrics: CompareMetricsData;
  /** 新增项 */
  NewItems: string;
  /** 修改项 */
  ModifyItems: string;
  /** 子任务号 */
  SubTaskId: string;
  /** 所有的子任务 */
  AllTasks: ReviewDataTaskInfo[];
  /** 任务类型 */
  TaskType: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeStructureDifferenceRequest {
  /** 主任务号 */
  MainTaskId?: string;
  /** 子任务号 */
  SubTaskId?: string;
}

declare interface DescribeStructureDifferenceResponse {
  /** 主任务号 */
  MainTaskId: string;
  /** 结果状态：0：返回成功1：结果未生成2：结果生成失败 */
  Status: number | null;
  /** 差异的结果数组 */
  Results: PerStructDifference[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeStructureResultRequest {
  /** 创建任务时返回的主任务ID */
  MainTaskId: string;
}

declare interface DescribeStructureResultResponse {
  /** 结果状态：0：返回成功1：结果未生成2：结果生成失败 */
  Status: number;
  /** 结构化结果 */
  Results: StructureResultObject[];
  /** 主任务ID */
  MainTaskId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeStructureTaskResultRequest {
  /** 结构化任务ID */
  MainTaskId: string;
}

declare interface DescribeStructureTaskResultResponse {
  /** 结果状态：0：返回成功1：结果未生成2：结果生成失败 */
  Status: number;
  /** 结构化识别结果数组，每个数组元素对应一个图片的结构化结果，顺序和输入参数的ImageList或FileList对应。 */
  Results: ResultObject[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeUnderwriteTaskRequest {
  /** 任务ID */
  UnderwriteTaskId?: string;
}

declare interface DescribeUnderwriteTaskResponse {
  /** 腾讯云主账号ID */
  Uin: string;
  /** 操作人子账户ID */
  SubAccountUin: string;
  /** 保单ID */
  PolicyId: string;
  /** 主任务ID */
  MainTaskId: string;
  /** 核保任务ID */
  UnderwriteTaskId: string;
  /** 结果状态：0：返回成功1：结果未生成2：结果生成失败 */
  Status: number;
  /** 核保结果 */
  UnderwriteResults: UnderwriteOutput[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UploadMedicalFileRequest {
  /** 文件的字节内容。File与FileURL有一个不为空即可，若FileURL参数也存在，会只取File的内容。 */
  File?: undefined;
  /** 文件的URL地址。File与FileURL不能同时为空，若File参数也存在，会只取File的内容。 */
  FileURL?: string;
}

declare interface UploadMedicalFileResponse {
  /** 文件存储的key，可以用来创建结构化任务。 */
  FileKey: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare namespace V20201210 {
  type VersionHeader = { headers: { 'X-TC-Version': '2020-12-10' } }

  /** 结构化对比指标（准确率/召回率）数据 */
  interface CompareMetricsData {
    /** 短文准确率 */
    ShortStructAccuracy: string;
    /** 短文召回率 */
    ShortStructRecall: string;
    /** 长文结构化准确率 */
    LongStructAccuracy: string;
    /** 长文结构化召回率 */
    LongStructRecall: string;
    /** 长文提取准确率 */
    LongContentAccuracy: string;
    /** 长文提取召回率 */
    LongContentRecall: string;
  }

  /** 用于返回结构化任务结果 */
  interface ResultObject {
    /** 图片质量分 */
    Quality: number;
    /** 由结构化算法结构化json转换的字符串，具体协议参见算法结构化结果协议 */
    StructureResult: string;
  }

  interface CreateStructureTaskRequest {
    /** 保单号 */
    PolicyId: string;
    /** 客户号 */
    CustomerId: string;
    /** 客户姓名 */
    CustomerName: string;
    /** 文件类型，目前只支持体检报告类型，对应的值为：HealthReport */
    TaskType: string;
    /** 报告年份 */
    Year: string;
    /** 报告文件上传的地址列表，需按顺序排列。如果使用ImageList参数，置为空数组即可 */
    FileList: string[];
    /** 险种，如果是体检报告类型，此参数是必填，类型说明如下：CriticalDiseaseInsurance:重疾险LifeInsurance：寿险AccidentInsurance：意外险 */
    InsuranceTypes?: string[];
    /** 报告上传的图片内容数组，图片内容采用base64编码，需按顺序排列 */
    ImageList?: string[];
  }

  interface CreateStructureTaskResponse {
    /** 本次结构化任务的ID */
    TaskId: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeStructCompareDataRequest {
    /** 结构化任务ID */
    TaskId: string;
  }

  interface DescribeStructCompareDataResponse {
    /** 保单号 */
    PolicyId?: string;
    /** 结构化任务ID */
    TaskId?: string;
    /** 客户号 */
    CustomerId?: string;
    /** 客户姓名 */
    CustomerName?: string;
    /** 复核时间 */
    ReviewTime?: string;
    /** 算法识别结果 */
    MachineResult?: string;
    /** 人工复核结果 */
    ManualResult?: string;
    /** 结构化对比指标数据 */
    Metrics?: CompareMetricsData;
    /** 新增项 */
    NewItems?: string;
    /** 修改项 */
    ModifyItems?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeStructureTaskResultRequest {
    /** 结构化任务ID */
    TaskId: string;
  }

  interface DescribeStructureTaskResultResponse {
    /** 结果状态：0：返回成功1：结果未生成2：结果生成失败 */
    Status: number;
    /** 结构化识别结果数组，每个数组元素对应一个图片的结构化结果，顺序和输入参数的ImageList或FileList对应。 */
    Results: ResultObject[] | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }
}

/** {@link Cii 智能保险助手} */
declare interface Cii {
  (): Versions;
  /** 结构化增量子任务 {@link AddSubStructureTasksRequest} {@link AddSubStructureTasksResponse} */
  AddSubStructureTasks(data: AddSubStructureTasksRequest, config?: AxiosRequestConfig): AxiosPromise<AddSubStructureTasksResponse>;
  /** 新建自动分类结构化任务 {@link CreateAutoClassifyStructureTaskRequest} {@link CreateAutoClassifyStructureTaskResponse} */
  CreateAutoClassifyStructureTask(data: CreateAutoClassifyStructureTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAutoClassifyStructureTaskResponse>;
  /** 新建结构化任务 {@link CreateStructureTaskRequest} {@link CreateStructureTaskResponse} */
  CreateStructureTask(data: CreateStructureTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateStructureTaskResponse>;
  /** 根据结构化任务ID创建核保任务 {@link CreateUnderwriteTaskByIdRequest} {@link CreateUnderwriteTaskByIdResponse} */
  CreateUnderwriteTaskById(data: CreateUnderwriteTaskByIdRequest, config?: AxiosRequestConfig): AxiosPromise<CreateUnderwriteTaskByIdResponse>;
  /** 查询机器核保任务数据 {@link DescribeMachineUnderwriteRequest} {@link DescribeMachineUnderwriteResponse} */
  DescribeMachineUnderwrite(data: DescribeMachineUnderwriteRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMachineUnderwriteResponse>;
  /** 获取图片质量分 {@link DescribeQualityScoreRequest} {@link DescribeQualityScoreResponse} */
  DescribeQualityScore(data: DescribeQualityScoreRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeQualityScoreResponse>;
  /** 报告自动分类 {@link DescribeReportClassifyRequest} {@link DescribeReportClassifyResponse} */
  DescribeReportClassify(data: DescribeReportClassifyRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeReportClassifyResponse>;
  /** 结构化对比查询 {@link DescribeStructCompareDataRequest} {@link DescribeStructCompareDataResponse} */
  DescribeStructCompareData(data?: DescribeStructCompareDataRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeStructCompareDataResponse>;
  /** 结构化复核差异查询 {@link DescribeStructureDifferenceRequest} {@link DescribeStructureDifferenceResponse} */
  DescribeStructureDifference(data?: DescribeStructureDifferenceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeStructureDifferenceResponse>;
  /** 查询结构化结果接口 {@link DescribeStructureResultRequest} {@link DescribeStructureResultResponse} */
  DescribeStructureResult(data: DescribeStructureResultRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeStructureResultResponse>;
  /** 获取结构化结果接口 {@link DescribeStructureTaskResultRequest} {@link DescribeStructureTaskResultResponse} */
  DescribeStructureTaskResult(data: DescribeStructureTaskResultRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeStructureTaskResultResponse>;
  /** 查询核保任务数据 {@link DescribeUnderwriteTaskRequest} {@link DescribeUnderwriteTaskResponse} */
  DescribeUnderwriteTask(data?: DescribeUnderwriteTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUnderwriteTaskResponse>;
  /** 上传医疗影像文件 {@link UploadMedicalFileRequest} {@link UploadMedicalFileResponse} */
  UploadMedicalFile(data?: UploadMedicalFileRequest, config?: AxiosRequestConfig): AxiosPromise<UploadMedicalFileResponse>;
  /** 新建结构化任务 {@link V20201210.CreateStructureTaskRequest} {@link V20201210.CreateStructureTaskResponse} */
  CreateStructureTask(data: V20201210.CreateStructureTaskRequest, config: AxiosRequestConfig & V20201210.VersionHeader): AxiosPromise<V20201210.CreateStructureTaskResponse>;
  /** 结构化对比查询 {@link V20201210.DescribeStructCompareDataRequest} {@link V20201210.DescribeStructCompareDataResponse} */
  DescribeStructCompareData(data: V20201210.DescribeStructCompareDataRequest, config: AxiosRequestConfig & V20201210.VersionHeader): AxiosPromise<V20201210.DescribeStructCompareDataResponse>;
  /** 获取结构化结果接口 {@link V20201210.DescribeStructureTaskResultRequest} {@link V20201210.DescribeStructureTaskResultResponse} */
  DescribeStructureTaskResult(data: V20201210.DescribeStructureTaskResultRequest, config: AxiosRequestConfig & V20201210.VersionHeader): AxiosPromise<V20201210.DescribeStructureTaskResultResponse>;
}

export declare type Versions = ["2021-04-08", "2020-12-10"];

export default Cii;
