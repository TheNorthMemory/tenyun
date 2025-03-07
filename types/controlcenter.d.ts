/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 账号工厂基线配置项 */
declare interface BaselineConfigItem {
  /** 账号工厂基线项唯一标识,只能包含英文字母、数字和@、,._[]-:()（）【】+=，。，长度2-128个字符。 */
  Identifier?: string;
  /** 账号工厂基线项配置，不同基线项配置参数不同。 */
  Configuration?: string;
}

declare interface BatchApplyAccountBaselinesRequest {
  /** 成员账号uin，也是被应用基线的账号uin。 */
  MemberUinList: number[];
  /** 基线项配置信息列表。 */
  BaselineConfigItems: BaselineConfigItem[];
}

declare interface BatchApplyAccountBaselinesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Controlcenter 控制中心} */
declare interface Controlcenter {
  (): Versions;
  /** 批量对存量账号应用基线 {@link BatchApplyAccountBaselinesRequest} {@link BatchApplyAccountBaselinesResponse} */
  BatchApplyAccountBaselines(data: BatchApplyAccountBaselinesRequest, config?: AxiosRequestConfig): AxiosPromise<BatchApplyAccountBaselinesResponse>;
}

export declare type Versions = ["2023-01-10"];

export default Controlcenter;
