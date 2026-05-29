/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 药品卡片信息 */
declare interface DrugCardInfo {
  /** 药品id */
  DrugId?: string;
  /** 药品名称 */
  DrugName?: string;
  /** 商品名称 */
  TradeName?: string;
  /** 规格 */
  Specification?: string;
  /** 生产厂商 */
  Manufacturer?: string;
  /** 是否处方药，0:非处方药，1:处方药 */
  DrugRxType?: number;
  /** 药品说明书URL */
  DocUrl?: string;
  /** 识别来源，1:药品图片，2:用户输入 */
  IdentifySource?: number;
}

/** 药品说明书信息 */
declare interface DrugInstructionInfo {
  /** 药品id */
  DrugId?: string;
  /** 药品名称 */
  DrugName?: string;
  /** 商品名称 */
  TradeName?: string;
  /** 规格 */
  Specification?: string;
  /** 生产企业 */
  Manufacturer?: string;
  /** 用法用量 */
  DrugUsage?: string;
  /** 适应症 */
  Indication?: string;
  /** 不良反应 */
  AdverseReaction?: string;
  /** 是否处方药，0:非处方药，1:处方药 */
  DrugRxType?: number;
  /** 药品说明书URL */
  DocUrl?: string;
}

/** 猜你想问信息 */
declare interface GuessQuestion {
  /** 问题标题 */
  Title?: string;
}

/** 症状自查追问问题 */
declare interface HealthFollowUpQuestion {
  /** 追问类型 */
  PromptType?: string;
  /** 追问选项列表 */
  Choices?: string[];
  /** 追问题型，单选或多选 */
  QuestionType?: string;
  /** 追问特殊类型，如部位题、时间题 */
  SpecialType?: string;
  /** 追问问题内容 */
  Question?: string;
}

/** 高亮词信息 */
declare interface HighlightWordInfo {
  /** 名称 */
  Name?: string;
  /** 类型 1:疾病，2:检验/检查，3:药品，4:科室，5:自定义配置 */
  Type?: number;
  /** 跳转类型 h5:h5类型，mini_wx:微信小程序 */
  JumpType?: string;
  /** 跳转URL */
  JumpUrl?: string;
  /** 跳转小程序Appid */
  JumpAppid?: string;
  /** 跳转小程序原始ID */
  JumpOriginId?: string;
}

/** 大模型问药返回数据 */
declare interface LLMDiagnosisDrugData {
  /** 大模型返回问答内容 */
  Content?: string;
  /** 大模型返回思考内容 */
  Think?: string;
  /** 序号，无业务含义，标识流式结果的序号 */
  Sort?: number;
  /** 流式输出结束标识，false:未结束，true:结束 */
  IsFinish?: boolean;
  /** 是否命中敏感词，false:否，true:是； */
  IsSensitive?: boolean;
  /** 引用资料列表，流式输出方式，只在流式输出第一次返回； */
  ReferResourceItems?: ReferResourceInfo[];
  /** 猜你想问列表，流式输出方式，只在流式结束输出结果； */
  GuessQuestions?: GuessQuestion[];
  /** 高亮词列表，流式输出方式在流式过程中输出结果。 */
  HighlightWords?: HighlightWordInfo[];
  /** 药品列表，流式输出方式，只在流式结束输出结果。 */
  DrugList?: StandardDrugCardInfo[];
}

/** 大模型症状自查返回数据 */
declare interface LLMDiagnosisHealthData {
  /** 大模型返回问答内容 */
  Content?: string;
  /** 大模型返回思考内容 */
  Think?: string;
  /** 序号，无业务含义，标识流式结果的序号 */
  Sort?: number;
  /** 流式输出结束标识，false:未结束，true:结束 */
  IsFinish?: boolean;
  /** 是否命中敏感词，false:否，true:是； */
  IsSensitive?: boolean;
  /** 结果类型，0：正常结果，1：追问问题 */
  Kind?: number;
  /** 风险提示 */
  RiskReminder?: string;
  /** 引用资料列表，流式输出方式，只在流式输出第一次返回； */
  ReferResourceItems?: ReferResourceInfo[];
  /** 猜你想问列表，流式输出方式，只在流式结束输出结果； */
  GuessQuestions?: GuessQuestion[];
  /** 高亮词列表，流式输出方式在流式过程中输出结果。 */
  HighlightWords?: HighlightWordInfo[];
  /** 追问问题列表，流式输出方式，只在流式结束输出结果。只会在kind=1追问类型时有结果。 */
  FollowUpQuestions?: HealthFollowUpQuestion[];
  /** 药品列表，流式输出方式，只在流式结束输出结果。 */
  DrugList?: StandardDrugCardInfo[];
}

/** 大模型症状自查返回数据 */
declare interface LLMReportInterpretationData {
  /** 大模型返回问答内容 */
  Content?: string;
  /** 大模型返回思考内容 */
  Think?: string;
  /** 序号，无业务含义，标识流式结果的序号 */
  Sort?: number;
  /** 流式输出结束标识，false:未结束，true:结束 */
  IsFinish?: boolean;
  /** 是否命中敏感词，false:否，true:是； */
  IsSensitive?: boolean;
  /** 是否支持报告类型，false:否，true:是； 默认返回true，不支持的报告类型返回false */
  IsSupportFile?: boolean;
  /** 返回的报告列表，和传入报告文件顺序一致 */
  ReportInfos?: ReportFileInfoRsp[];
  /** 引用资料列表，流式输出方式，只在流式输出第一次返回； */
  ReferResourceItems?: ReferResourceInfo[];
  /** 猜你想问列表，流式输出方式，只在流式结束输出结果； */
  GuessQuestions?: GuessQuestion[];
  /** 高亮词列表，流式输出方式在流式过程中输出结果。 */
  HighlightWords?: HighlightWordInfo[];
}

/** 引用资料信息 */
declare interface ReferResourceInfo {
  /** 资料标题 */
  Title?: string;
  /** 资料来源类型，1:问答库，2:文档，3:医典百科，4:临床指南，5:药品说明书 */
  Type?: string;
  /** 资料详情链接 */
  Url?: string;
}

/** 报告文件信息参数 */
declare interface ReportFileInfoReq {
  /** 报告文件链接 */
  ReportFileUrl: string;
  /** 报告文件类型，1:pdf，2:图片 */
  ReportFileType: number;
  /** 报告id */
  ReportId?: string;
}

/** 报告文件信息返回 */
declare interface ReportFileInfoRsp {
  /** 报告id */
  ReportId?: string;
  /** 是否解析成功 */
  IsAnalysis?: boolean;
  /** 解析错误信息 */
  ErrInfo?: string;
}

/** 标准药品卡片信息 */
declare interface StandardDrugCardInfo {
  /** 标准药品名 */
  StandardDrugName?: string;
  /** 药品列表 */
  DrugInfos?: DrugCardInfo[];
}

/** 药品说明书标准药品结果 */
declare interface StandardDrugInstructionInfo {
  /** 标准药品名 */
  StandardDrugName?: string;
  /** 药品列表 */
  DrugInfos?: DrugInstructionInfo[];
}

declare interface DescribeIgOrderListRequest {
  /** 页码 */
  PageNumber: number;
  /** 每页数目 */
  PageSize: number;
  /** 产品类型枚举值：ig： 导诊ipc： 预问诊默认值：ig */
  ProductType: string;
  /** 订单状态枚举值：0： 无状态1： 未激活2： 使用中3： 暂停使用4： 已到期5： 已删除6： 已失效默认值：0 */
  OrderStatus?: number;
  /** 搜索关键字 */
  KeyWord?: string;
}

declare interface DescribeIgOrderListResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetLLMDiagnosisDrugChatRequest {
  /** 合作方ID */
  PartnerId: string;
  /** 合作方密钥 */
  PartnerSecret: string;
  /** 医院应用ID */
  HospitalAppId: string;
  /** 对话ID，由接入方生成，相同对话ID会保持相同的上下文，接入方根据业务场景使用相同或新建对话ID（建议使用UUID值）入参限制：长度限制10-50 */
  DialogueId: string;
  /** 本次问答用户输入的问题，（最大长度1000） */
  Message: string;
  /** 返回类型：0:正常返回； 1:流式返回； 默认：0 */
  ResultType?: number;
  /** 提示词 */
  Prompt?: string;
}

declare interface GetLLMDiagnosisDrugChatResponse {
  /** 错误码，0成功，非0失败 */
  Code?: number;
  /** 错误信息 */
  Message?: string;
  /** 返回数据 */
  Data?: LLMDiagnosisDrugData;
  /** 唯一请求 ID，每次请求都会返回。本接口为流式响应接口，当请求成功时，RequestId 会被放在 HTTP 响应的 Header "X-TC-RequestId" 中。 */
  RequestId?: string;
}

declare interface GetLLMDiagnosisDrugRequest {
  /** 合作方ID */
  PartnerId: string;
  /** 合作方密钥 */
  PartnerSecret: string;
  /** 医院应用ID */
  HospitalAppId: string;
  /** 对话ID，由接入方生成，相同对话ID会保持相同的上下文，接入方根据业务场景使用相同或新建对话ID（建议使用UUID值）入参限制：长度限制10-50 */
  DialogueId: string;
  /** 本次问答用户输入的问题，（最大长度1000，传了图片链接，此参数可为空） */
  Message?: string;
  /** 药品图片链接 */
  ImageUrl?: string;
  /** 返回类型：0:正常返回； 1:流式返回； 默认：0 */
  ResultType?: number;
  /** 提示词 */
  Prompt?: string;
}

declare interface GetLLMDiagnosisDrugResponse {
  /** 错误码，0成功，非0失败 */
  Code?: number;
  /** 错误信息 */
  Message?: string;
  /** 返回数据 */
  Data?: LLMDiagnosisDrugData;
  /** 唯一请求 ID，每次请求都会返回。本接口为流式响应接口，当请求成功时，RequestId 会被放在 HTTP 响应的 Header "X-TC-RequestId" 中。 */
  RequestId?: string;
}

declare interface GetLLMDiagnosisHealthRequest {
  /** 合作方ID */
  PartnerId: string;
  /** 合作方密钥 */
  PartnerSecret: string;
  /** 医院应用ID */
  HospitalAppId: string;
  /** 对话ID，由接入方生成，相同对话ID会保持相同的上下文，接入方根据业务场景使用相同或新建对话ID（建议使用UUID值）入参限制：长度限制10-50 */
  DialogueId: string;
  /** 本次问答用户输入的问题，（最大长度1000） */
  Message: string;
  /** 返回类型：0:正常返回； 1:流式返回； 默认：0 */
  ResultType?: number;
  /** 性别，0:未知，1:男，2:女 */
  Sex?: number;
  /** 年龄，0:未知，最大值：120 */
  Age?: number;
  /** 追问轮数，-1:不追问；0:使用默认规则； 1-10:按指定轮数追问；（最大值10轮）； 默认：0 */
  RoundNumber?: number;
  /** 是否追问结构化结果，0：否，1：是； */
  OutputStructured?: number;
}

declare interface GetLLMDiagnosisHealthResponse {
  /** 错误码，0成功，非0失败 */
  Code?: number;
  /** 错误信息 */
  Message?: string;
  /** 返回数据 */
  Data?: LLMDiagnosisHealthData | null;
  /** 唯一请求 ID，每次请求都会返回。本接口为流式响应接口，当请求成功时，RequestId 会被放在 HTTP 响应的 Header "X-TC-RequestId" 中。 */
  RequestId?: string;
}

declare interface GetLLMReportInterpretationRequest {
  /** 合作方ID */
  PartnerId: string;
  /** 合作方密钥 */
  PartnerSecret: string;
  /** 接入医院id */
  HospitalId: string;
  /** 对话ID，由接入方生成，相同对话ID会保持相同的上下文，接入方根据业务场景使用相同或新建对话ID（建议使用UUID值）入参限制：长度限制10-50 */
  DialogueId: string;
  /** 本次问答用户输入的问题 */
  Message: string;
  /** 报告文件信息 */
  ReportFileInfos?: ReportFileInfoReq[];
  /** 返回类型：0:正常返回； 1:流式返回； 默认：0 */
  ResultType?: number;
  /** 报告解读提示词 */
  Prompt?: string;
  /** 无报告问答提示词 */
  QaPrompt?: string;
}

declare interface GetLLMReportInterpretationResponse {
  /** 错误码，0成功，非0失败 */
  Code?: number;
  /** 错误信息 */
  Message?: string;
  /** 返回数据 */
  Data?: LLMReportInterpretationData;
  /** 唯一请求 ID，每次请求都会返回。本接口为流式响应接口，当请求成功时，RequestId 会被放在 HTTP 响应的 Header "X-TC-RequestId" 中。 */
  RequestId?: string;
}

declare interface QueryDrugInstructionsRequest {
  /** 合作方ID */
  PartnerId: string;
  /** 合作方密钥 */
  PartnerSecret: string;
  /** 医院应用ID */
  HospitalAppId: string;
  /** 本次问答用户输入的问题，（最大长度1000） */
  Message: string;
}

declare interface QueryDrugInstructionsResponse {
  /** 错误码，0成功，非0失败 */
  Code?: number;
  /** 错误信息 */
  Message?: string;
  /** 返回数据 */
  Data?: StandardDrugInstructionInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Ig 智能导诊} */
declare interface Ig {
  (): Versions;
  /** 查询智能导诊订单列表 {@link DescribeIgOrderListRequest} {@link DescribeIgOrderListResponse} */
  DescribeIgOrderList(data: DescribeIgOrderListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIgOrderListResponse>;
  /** 大模型智能问药 {@link GetLLMDiagnosisDrugRequest} {@link GetLLMDiagnosisDrugResponse} */
  GetLLMDiagnosisDrug(data: GetLLMDiagnosisDrugRequest, config?: AxiosRequestConfig): AxiosPromise<GetLLMDiagnosisDrugResponse>;
  /** 大模型问药问答 {@link GetLLMDiagnosisDrugChatRequest} {@link GetLLMDiagnosisDrugChatResponse} */
  GetLLMDiagnosisDrugChat(data: GetLLMDiagnosisDrugChatRequest, config?: AxiosRequestConfig): AxiosPromise<GetLLMDiagnosisDrugChatResponse>;
  /** 大模型症状自查 {@link GetLLMDiagnosisHealthRequest} {@link GetLLMDiagnosisHealthResponse} */
  GetLLMDiagnosisHealth(data: GetLLMDiagnosisHealthRequest, config?: AxiosRequestConfig): AxiosPromise<GetLLMDiagnosisHealthResponse>;
  /** 大模型报告解读 {@link GetLLMReportInterpretationRequest} {@link GetLLMReportInterpretationResponse} */
  GetLLMReportInterpretation(data: GetLLMReportInterpretationRequest, config?: AxiosRequestConfig): AxiosPromise<GetLLMReportInterpretationResponse>;
  /** 查询药品说明书 {@link QueryDrugInstructionsRequest} {@link QueryDrugInstructionsResponse} */
  QueryDrugInstructions(data: QueryDrugInstructionsRequest, config?: AxiosRequestConfig): AxiosPromise<QueryDrugInstructionsResponse>;
}

export declare type Versions = ["2021-05-18"];

export default Ig;
