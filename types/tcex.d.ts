/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 每个算法的返回结果 */
declare interface AlgorithmResult {
  /** 算法ID */
  AlgoId: string;
  /** 算法名称 */
  AlgoName: string | null;
  /** 算法返回的结果。- 当算法类型为“OCR（1）”时，结果为文本字符串- 当算法类型为“文本分类（2）”时，结果字符串为json对象数组： Class：分类结果 Confidence：置信度- 算法类型为“情感分析（3）”时，结果字符串为json对象： Positive：正面情感概率 Negative：负面情感概率 Neutral：中性情感概率- 当算法类型为“合同要素抽取（4）”时，结果字符串为json对象数组： NodeName：一级要素名称 ItemName：二级要素名称 Content：要素文本内容- 当算法类型为“实体识别（5）”时，结果字符串为json对象数组： - Entity：实体类型 - Content：实体文本内容 */
  Result: string | null;
  /** 算法调用错误信息 */
  Error: string | null;
  /** 算法类型：1：OCR算法2：文本分类算法3：情感分析算法4：合同要素抽取算法5、实体识别算法 */
  AlgoType: number | null;
}

declare interface DescribeInvocationResultRequest {
  /** 调用id，为调用InvokeService接口返回的RequestId */
  InvokeId: string;
}

declare interface DescribeInvocationResultResponse {
  /** 服务的调用结果 */
  Results?: AlgorithmResult[];
  /** 0:获取结果失败1：结果还没有生成，继续轮询2：获取结果成功 */
  Status?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface InvokeServiceRequest {
  /** 待调用的服务ID。 */
  ServiceId: string;
  /** 要调用服务的状态：0表示调试版本，1表示上线版本 */
  ServiceStatus: number;
  /** 用于测试的文档的URL。 */
  FileUrl?: string;
  /** 用于测试的文本，当此值不为空时，调用内容以此参数的值为准。 */
  Input?: string;
}

declare interface InvokeServiceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Tcex 腾讯云释义} */
declare interface Tcex {
  (): Versions;
  /** 查询服务调用结果 {@link DescribeInvocationResultRequest} {@link DescribeInvocationResultResponse} */
  DescribeInvocationResult(data: DescribeInvocationResultRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInvocationResultResponse>;
  /** 调用服务 {@link InvokeServiceRequest} {@link InvokeServiceResponse} */
  InvokeService(data: InvokeServiceRequest, config?: AxiosRequestConfig): AxiosPromise<InvokeServiceResponse>;
}

export declare type Versions = ["2020-07-27"];

export default Tcex;
