/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 玩家属性字典类型值 */
declare interface AttributeMap {
  /** 属性字典 key [a-zA-Z0-9-\.]* */
  Key: string;
  /** 属性字典 value */
  Value: number;
}

/** matchCode和匹配票据 ID组合结构 */
declare interface MTicket {
  /** 匹配Code */
  MatchCode: string;
  /** 匹配票据 ID */
  MatchTicketId: string;
}

/** 玩家匹配属性 */
declare interface MatchAttribute {
  /** 属性名 长度 128 [a-zA-Z0-9-\.]* */
  Name: string;
  /** 属性类型: 0 数值; 1 string; 默认 0 */
  Type: number;
  /** 数字属性值 默认 0.0 */
  NumberValue?: number;
  /** 字符串属性值 长度 128 默认 "" */
  StringValue?: string;
  /** list 属性值 */
  ListValue?: string[];
  /** 字典属性值 */
  MapValue?: AttributeMap[];
}

/** 匹配code */
declare interface MatchCodeAttr {
  /** 匹配code */
  MatchCode: string | null;
}

/** 匹配信息 */
declare interface MatchInfo {
  /** 匹配code */
  MatchCode: string;
  /** 匹配名称 */
  MatchName: string;
  /** 匹配描述 */
  MatchDesc: string | null;
  /** 规则code */
  RuleCode: string;
  /** 创建时间 */
  CreateTime: string;
  /** 超时时间 */
  Timeout: number;
  /** 接收通知地址 */
  NotifyUrl: string;
  /** 是否为匹配结果请求服务器资源，0否，1请求GSE资源 */
  ServerType: number;
  /** 服务器队列所在地域 */
  ServerRegion: string | null;
  /** 服务器队列 */
  ServerQueue: string | null;
  /** 自定义推送数据 */
  CustomPushData: string | null;
  /** 游戏服务器会话数据 */
  ServerSessionData: string | null;
  /** 游戏属性 */
  GameProperties: StringKV[] | null;
  /** 日志开关，0表示关，1表示开 */
  LogSwitch: number;
  /** 日志集id */
  LogsetId: string | null;
  /** 日志集名称 */
  LogsetName: string | null;
  /** 日志主题id */
  LogTopicId: string | null;
  /** 日志主题名称 */
  LogTopicName: string | null;
  /** 标签 */
  Tags: StringKV[] | null;
  /** 地区 */
  Region: string | null;
  /** 用户AppId */
  AppId: string | null;
  /** 用户主账号Uin */
  Uin: string | null;
  /** 用户创建账号Uin */
  CreateUin: string | null;
  /** 规则名称 */
  RuleName: string | null;
  /** 日志状态，0表示正常，1表示日志集不存在，2表示日志主题不存在，3表示日志集和日志主题都不存在。 */
  LogStatus?: number | null;
}

/** 匹配票据信息 */
declare interface MatchTicket {
  /** 匹配票据 ID长度 128 [a-zA-Z0-9-\.]* */
  Id: string;
  /** 匹配 Code */
  MatchCode: string;
  /** 根据 MatchType 取不同的结构序列化结果 */
  MatchResult: string | null;
  /** 表示不同的匹配类型,NORMAL | GSE */
  MatchType: string | null;
  /** 玩家信息列表 */
  Players: Player[];
  /** 匹配状态: SEARCHING 匹配中; PLACING 匹配放置中; COMPLETED 匹配完成; CANCELLED 匹配取消; TIMEDOUT 匹配超时; FAILED 匹配失败 */
  Status: string;
  /** 匹配状态信息 */
  StatusMessage: string | null;
  /** 匹配状态原因 */
  StatusReason: string | null;
  /** 收到发起匹配请求的时间 eg: "2020-08-17T08:14:38.077Z" */
  StartTime: string;
  /** 匹配请求因完成、失败、超时、被取消而停止执行的时间 eg: "2020-08-17T08:14:38.077Z" */
  EndTime: string | null;
}

/** 玩家信息。 */
declare interface Player {
  /** 玩家 PlayerId 长度 128 [a-zA-Z\d-\._]* */
  Id: string;
  /** 玩家昵称，长度 128 */
  Name: string;
  /** 玩家匹配属性，最多 10 条 */
  MatchAttributes: MatchAttribute[];
  /** 队伍名，可以传递不同队伍名，长度 128 [a-zA-Z0-9-\.]* */
  Team?: string;
  /** 自定义玩家状态 透传参数 [0, 99999] */
  CustomPlayerStatus?: number;
  /** 自定义玩家信息 透传参数 长度 1024 */
  CustomProfile?: string;
  /** 各区域延迟，最多 20 条 */
  RegionLatencies?: RegionLatency[];
}

/** 玩家到各区域的延迟 */
declare interface RegionLatency {
  /** 地域ap-beijing 华北地区(北京)ap-chengdu 西南地区(成都)ap-guangzhou 华南地区(广州)ap-hongkong 港澳台地区(中国香港)ap-seoul 亚太地区(首尔)ap-shanghai 华东地区(上海)ap-singapore 东南亚地区(新加坡)eu-frankfurt 欧洲地区(法兰克福)na-siliconvalley 美国西部(硅谷)na-toronto 北美地区(多伦多)ap-mumbai 亚太地区(孟买)na-ashburn 美国东部(弗吉尼亚)ap-bangkok 亚太地区(曼谷)eu-moscow 欧洲地区(莫斯科)ap-tokyo 亚太地区(东京) */
  Region: string;
  /** 毫秒延迟 0～999999 */
  Latency: number;
}

/** 匹配概况 */
declare interface ReportOverviewData {
  /** 总次数 */
  TotalTimes: string;
  /** 成功率 */
  SuccessPercent: number;
  /** 超时率 */
  TimeoutPercent: number;
  /** 失败率 */
  FailPercent: number;
  /** 平均匹配时间 */
  AverageSec: number;
}

/** 统计数据之趋势数据 */
declare interface ReportTrendData {
  /** 总次数 */
  TotalList: string[];
  /** 被取消次数 */
  CancelList: string[];
  /** 成功次数 */
  SuccessList: string[];
  /** 失败次数 */
  FailList: string[];
  /** 超时次数 */
  TimeoutList: string[];
  /** 时间数组，单位：秒 */
  TimeList: string[];
}

/** 规则简单信息 */
declare interface RuleBriefInfo {
  /** 规则名称 [a-zA-Z\d-\.]* */
  RuleName: string;
  /** 关联匹配 */
  MatchCodeList: StringKV[];
  /** 创建时间 */
  CreateTime: string;
  /** 规则code */
  RuleCode: string;
}

/** 规则信息 */
declare interface RuleInfo {
  /** 规则名称 [a-zA-Z0-9-\.]* */
  RuleName: string;
  /** 创建时间 */
  CreateTime: string;
  /** 规则描述 */
  RuleDesc: string | null;
  /** 规则脚本 */
  RuleScript: string;
  /** 标签 */
  Tags: StringKV[] | null;
  /** 关联匹配 */
  MatchCodeList: StringKV[] | null;
  /** 规则code */
  RuleCode: string;
  /** 地区 */
  Region: string | null;
  /** 用户AppId */
  AppId: string | null;
  /** 用户Uin */
  Uin: string | null;
  /** 用户OwnerUin */
  CreateUin: string | null;
}

/** string keyValue解构 */
declare interface StringKV {
  /** 键 */
  Key: string;
  /** 值 */
  Value: string;
}

/** 标签键值对 */
declare interface Tag {
  /** 标签键 */
  TagKey: string;
  /** 标签值 */
  TagValue: string;
}

declare interface CancelMatchingRequest {
  /** 匹配 Code */
  MatchCode: string;
  /** 要取消的匹配匹配票据 ID */
  MatchTicketId: string;
}

declare interface CancelMatchingResponse {
  /** 错误码 */
  ErrCode?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateMatchRequest {
  /** 匹配名称，[a-zA-Z0-9-\.]* 长度128 */
  MatchName: string;
  /** 规则code */
  RuleCode: string;
  /** 超时时间，1-600秒 */
  Timeout: number;
  /** 是否为匹配结果请求服务器资源，0表示否，1表示请求GSE资源 */
  ServerType: number;
  /** 匹配描述，最长1024 */
  MatchDesc?: string;
  /** 只支持https 和 http 协议 */
  NotifyUrl?: string;
  /** 游戏服务器队列地域 */
  ServerRegion?: string;
  /** 游戏服务器队列 */
  ServerQueue?: string;
  /** 自定义推送数据 */
  CustomPushData?: string;
  /** 游戏服务器会话数据 */
  ServerSessionData?: string;
  /** 游戏属性，key-value结构的数组 */
  GameProperties?: StringKV[];
  /** 日志开关，0表示关，1表示开 */
  LogSwitch?: number;
  /** 标签，key-value结构的数组 */
  Tags?: StringKV[];
}

declare interface CreateMatchResponse {
  /** 匹配信息 */
  MatchInfo?: MatchInfo;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateRuleRequest {
  /** 规则名称，[a-zA-Z0-9-\.]* 长度128 */
  RuleName: string;
  /** 规则脚本，长度65535 */
  RuleScript: string;
  /** 规则描述，最长1024 */
  RuleDesc?: string;
  /** 标签，key-value结构的数组，最多关联50组标签 */
  Tags?: StringKV[];
}

declare interface CreateRuleResponse {
  /** 规则信息 */
  RuleInfo?: RuleInfo;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteMatchRequest {
  /** 匹配code */
  MatchCode: string;
}

declare interface DeleteMatchResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteRuleRequest {
  /** 规则code */
  RuleCode: string;
}

declare interface DeleteRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeDataRequest {
  /** 起始时间，单位：秒 */
  StartTime: number;
  /** 截止时间，单位：秒 */
  EndTime: number;
  /** 时间粒度，1表示1天；2表示1小时；3表示1分钟；4表示10分钟；5表示30分钟 */
  TimeType: number;
  /** 匹配code */
  MatchCode?: string;
}

declare interface DescribeDataResponse {
  /** 匹配概况 */
  OverviewData?: ReportOverviewData | null;
  /** 匹配请求次数趋势数据 */
  TrendData?: ReportTrendData | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeMatchCodesRequest {
  /** 偏移量，页码 */
  Offset: number;
  /** 每页数量 */
  Limit: number;
  /** 搜索的字符串 */
  MatchCode?: string;
}

declare interface DescribeMatchCodesResponse {
  /** 匹配Code */
  MatchCodes?: MatchCodeAttr[] | null;
  /** 总数 */
  TotalCount?: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeMatchRequest {
  /** 匹配code */
  MatchCode: string;
}

declare interface DescribeMatchResponse {
  /** 匹配信息 */
  MatchInfo?: MatchInfo | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeMatchesRequest {
  /** 当前页号，不传则获取所有有权限的资源。 */
  PageNumber?: number;
  /** 单页大小，不传则获取所有有权限的资源。 */
  PageSize?: number;
  /** 查询类型（可选）：match表示通过matchCode或者matchName来搜索，rule表示通过ruleCode或者ruleName来搜索，其余类型不做过滤处理。 */
  SearchType?: string;
  /** 查询关键词，针对SearchType进行具体过滤的内容。 */
  Keyword?: string;
  /** 标签列表，用于过滤。 */
  Tags?: Tag[];
}

declare interface DescribeMatchesResponse {
  /** 匹配信息列表 */
  MatchInfoList?: MatchInfo[] | null;
  /** 总记录数 */
  TotalCount?: number;
  /** 当前页号，不填默认返回第一页 */
  PageNumber?: number;
  /** 单页大小，不填默认取 30，最大值不能超过 30 */
  PageSize?: number;
  /** 查询类型（可选）：matchName表示匹配名称，matchCode表示匹配code，ruleName表示规则名称，tag表示标签Key/Value */
  SearchType?: string;
  /** 查询关键词（可选） */
  Keyword?: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeMatchingProgressRequest {
  /** 匹配票据 ID列表, 列表长度 12。 */
  MatchTicketIds: MTicket[];
}

declare interface DescribeMatchingProgressResponse {
  /** 匹配票据列表 */
  MatchTickets: MatchTicket[] | null;
  /** 错误码 */
  ErrCode: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeRuleRequest {
  /** 规则code */
  RuleCode: string;
}

declare interface DescribeRuleResponse {
  /** 规则信息 */
  RuleInfo?: RuleInfo | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeRulesRequest {
  /** 当前页号，不传则返回第一页 */
  PageNumber?: number;
  /** 单页大小，最大 30，不填默认30 */
  PageSize?: number;
  /** 查询类型（可选）：match表示通过matchCode或者matchName来搜索，rule表示通过ruleCode或者ruleName来搜索，其余类型不做过滤处理。 */
  SearchType?: string;
  /** 查询关键词，针对SearchType进行具体过滤的内容。 */
  Keyword?: string;
  /** 标签列表，用于过滤。 */
  Tags?: Tag[];
}

declare interface DescribeRulesResponse {
  /** 规则信息列表 */
  RuleInfoList?: RuleBriefInfo[] | null;
  /** 总记录数 */
  TotalCount?: number;
  /** 当前页号 */
  PageNumber?: number;
  /** 单页大小 */
  PageSize?: number;
  /** 查询类型（可选）matchName表示匹配名称，matchCode表示匹配code，ruleName表示规则名称，tag表示标签Key/Value */
  SearchType?: string;
  /** 查询关键词（可选） */
  Keyword?: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeTokenRequest {
  /** 匹配code */
  MatchCode: string;
}

declare interface DescribeTokenResponse {
  /** 当前的MatchCode对应的Token。如果当前MatchCode没有Token，该参数可能取不到有效值。 */
  MatchToken?: string | null;
  /** 当Token被替换后，GPM将兼容推送原始Token的时间（秒）。 */
  CompatibleSpan?: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyMatchRequest {
  /** 匹配名称，[a-zA-Z0-9-\.]* 长度128 */
  MatchName: string;
  /** 规则code */
  RuleCode: string;
  /** 超时时间，1-600秒 */
  Timeout: number;
  /** 是否为匹配结果请求服务器资源，0表示否，1表示请求GSE资源 */
  ServerType: number;
  /** 匹配code */
  MatchCode: string;
  /** 匹配描述，最长1024 */
  MatchDesc?: string;
  /** 只支持 http 和 https 协议 */
  NotifyUrl?: string;
  /** 游戏服务器队列地域 */
  ServerRegion?: string;
  /** 游戏服务器队列 */
  ServerQueue?: string;
  /** 自定义推送数据 */
  CustomPushData?: string;
  /** 游戏服务器会话数据 */
  ServerSessionData?: string;
  /** 游戏属性，key-value结构的数组 */
  GameProperties?: StringKV[];
  /** 日志开关，0表示关，1表示开 */
  LogSwitch?: number;
  /** 标签，key-value结构的数组 */
  Tags?: StringKV[];
}

declare interface ModifyMatchResponse {
  /** 匹配信息 */
  MatchInfo?: MatchInfo;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyRuleRequest {
  /** 规则code */
  RuleCode: string;
  /** 规则名称，只能包含数字、字母、. 和 - */
  RuleName: string;
  /** 规则描述，最长1024 */
  RuleDesc?: string;
  /** 标签，key-value结构的数组，最多关联50组标签 */
  Tags?: StringKV[];
}

declare interface ModifyRuleResponse {
  /** 规则信息 */
  RuleInfo?: RuleInfo;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyTokenRequest {
  /** 匹配Code。 */
  MatchCode: string;
  /** 单位秒，取值0-1800。此参数表示当前Token被替换后，GPM将持续推送原Token的时间。在CompatibleSpan时间范围内，用户将在事件消息中收到当前和原始Token。 */
  CompatibleSpan: number;
  /** Token，[a-zA-Z0-9-_.], 长度0-64。如果为空，将由GPM随机生成。 */
  MatchToken?: string;
}

declare interface ModifyTokenResponse {
  /** 成功设置的Token。 */
  MatchToken?: string;
  /** 当前Token被替换后，GPM将持续推送原Token的时间。 */
  CompatibleSpan?: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface StartMatchingBackfillRequest {
  /** 匹配code */
  MatchCode: string;
  /** 玩家信息 */
  Players: Player[];
  /** 游戏服务器回话 ID [1-256] 个ASCII 字符 */
  GameServerSessionId: string;
  /** 匹配票据 Id 默认 "" 为空则由 GPM 自动生成 长度 [1, 128] */
  MatchTicketId?: string;
}

declare interface StartMatchingBackfillResponse {
  /** 匹配票据 */
  MatchTicket: MatchTicket | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface StartMatchingRequest {
  /** 匹配 Code。 */
  MatchCode: string;
  /** 玩家信息 最多 200 条。 */
  Players: Player[];
  /** 匹配票据 ID 默认空字符串，为空则由 GPM 自动生成 长度 128，只能包含数字、字母、. 和 - */
  MatchTicketId?: string;
}

declare interface StartMatchingResponse {
  /** 错误码。 */
  ErrCode?: number;
  /** 匹配票据 ID长度 128。 */
  MatchTicketId?: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

/** [游戏玩家匹配](https://cloud.tencent.com/document/product/1294) */
declare interface Gpm {
  (): Versions;
  /** 取消匹配 */
  CancelMatching(data: CancelMatchingRequest, config?: AxiosRequestConfig): AxiosPromise<CancelMatchingResponse>;
  /** 创建匹配 */
  CreateMatch(data: CreateMatchRequest, config?: AxiosRequestConfig): AxiosPromise<CreateMatchResponse>;
  /** 创建规则 */
  CreateRule(data: CreateRuleRequest, config?: AxiosRequestConfig): AxiosPromise<CreateRuleResponse>;
  /** 删除匹配 */
  DeleteMatch(data: DeleteMatchRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteMatchResponse>;
  /** 删除规则 */
  DeleteRule(data: DeleteRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRuleResponse>;
  /** 统计数据 */
  DescribeData(data: DescribeDataRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDataResponse>;
  /** 查询匹配详情 */
  DescribeMatch(data: DescribeMatchRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMatchResponse>;
  /** 分页查询匹配Code */
  DescribeMatchCodes(data: DescribeMatchCodesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMatchCodesResponse>;
  /** 分页查询匹配列表 */
  DescribeMatches(data?: DescribeMatchesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMatchesResponse>;
  /** 查询匹配进度 */
  DescribeMatchingProgress(data: DescribeMatchingProgressRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMatchingProgressResponse>;
  /** 查询规则详情 */
  DescribeRule(data: DescribeRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRuleResponse>;
  /** 分页查询规则集列表 */
  DescribeRules(data?: DescribeRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRulesResponse>;
  /** 查询匹配Token */
  DescribeToken(data: DescribeTokenRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTokenResponse>;
  /** 修改匹配 */
  ModifyMatch(data: ModifyMatchRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyMatchResponse>;
  /** 修改规则 */
  ModifyRule(data: ModifyRuleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyRuleResponse>;
  /** 修改匹配Token */
  ModifyToken(data: ModifyTokenRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyTokenResponse>;
  /** 发起匹配 */
  StartMatching(data: StartMatchingRequest, config?: AxiosRequestConfig): AxiosPromise<StartMatchingResponse>;
  /** 发起回填匹配 */
  StartMatchingBackfill(data: StartMatchingBackfillRequest, config?: AxiosRequestConfig): AxiosPromise<StartMatchingBackfillResponse>;
}

export declare type Versions = ["2020-08-20"];

export default Gpm;
