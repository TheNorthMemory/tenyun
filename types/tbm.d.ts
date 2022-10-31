/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 用户年龄画像 */
declare interface AgePortrait {
  /** 年龄区间 */
  AgeRange: string;
  /** 百分比 */
  Percent: number;
}

/** 用户年龄画像元素数组 */
declare interface AgePortraitInfo {
  /** 用户年龄画像数组 */
  PortraitSet: AgePortrait[];
}

/** 文章信息 */
declare interface BrandReportArticle {
  /** 文章标题 */
  Title: string;
  /** 文章url地址 */
  Url: string;
  /** 文章来源 */
  FromSite: string;
  /** 文章发表日期 */
  PubTime: string;
  /** 文章标识 */
  Flag: number;
  /** 文章热度值 */
  Hot: number;
  /** 文章来源等级 */
  Level: number;
  /** 文章摘要 */
  Abstract: string;
  /** 文章ID */
  ArticleId: string;
}

/** 用户好评差评个数信息 */
declare interface Comment {
  /** 评论的日期 */
  Date: string;
  /** 差评的个数 */
  NegCommentCount: number;
  /** 好评的个数 */
  PosCommentCount: number;
}

/** 用户评论内容类型 */
declare interface CommentInfo {
  /** 用户评论内容 */
  Comment: string;
  /** 评论的时间 */
  Date: string;
}

/** 按日期的统计数据 */
declare interface DateCount {
  /** 统计日期 */
  Date: string;
  /** 统计值 */
  Count: number;
}

/** 性别画像元素 */
declare interface GenderPortrait {
  /** 性别 */
  Gender: string;
  /** 百分比 */
  Percent: number;
}

/** 用户性别画像元素数组 */
declare interface GenderPortraitInfo {
  /** 用户性别画像数组 */
  PortraitSet: GenderPortrait[];
}

/** 行业报道新闻 */
declare interface IndustryNews {
  /** 行业报道ID */
  IndustryId: string;
  /** 报道发表时间 */
  PubTime: string;
  /** 报道来源 */
  FromSite: string;
  /** 报道标题 */
  Title: string;
  /** 报道来源url */
  Url: string;
  /** 报道来源等级 */
  Level: number;
  /** 热度值 */
  Hot: number;
  /** 报道标识 */
  Flag: number;
  /** 报道摘要 */
  Abstract: string;
}

/** 电影喜好画像元素 */
declare interface MoviePortrait {
  /** 电影名称 */
  Name: string;
  /** 百分比 */
  Percent: number;
}

/** 用户喜好电影画像元素数组 */
declare interface MoviePortraitInfo {
  /** 用户喜好电影画像数组 */
  PortraitSet: MoviePortrait[];
}

/** 省份画像元素 */
declare interface ProvincePortrait {
  /** 省份名称 */
  Province: string;
  /** 百分比 */
  Percent: number;
}

/** 用户省份画像元素数组 */
declare interface ProvincePortraitInfo {
  /** 用户省份画像数组 */
  PortraitSet: ProvincePortrait[];
}

/** 明星喜好画像元素 */
declare interface StarPortrait {
  /** 喜欢的明星名字 */
  Name: string;
  /** 百分比 */
  Percent: number;
}

/** 用户喜好的明星画像元素数组 */
declare interface StarPortraitInfo {
  /** 用户喜好的明星画像数组 */
  PortraitSet: StarPortrait[];
}

declare interface DescribeBrandCommentCountRequest {
  /** 品牌ID */
  BrandId: string;
  /** 查询开始日期 */
  StartDate: string;
  /** 查询结束日期 */
  EndDate: string;
}

declare interface DescribeBrandCommentCountResponse {
  /** 按天统计好评/差评数 */
  CommentSet?: Comment[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeBrandExposureRequest {
  /** 品牌ID */
  BrandId: string;
  /** 查询开始时间 */
  StartDate: string;
  /** 查询结束时间 */
  EndDate: string;
}

declare interface DescribeBrandExposureResponse {
  /** 累计曝光量 */
  TotalCount?: number;
  /** 按天计算的统计数据 */
  DateCountSet?: DateCount[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeBrandMediaReportRequest {
  /** 品牌ID */
  BrandId: string;
  /** 查询开始时间 */
  StartDate: string;
  /** 查询结束时间 */
  EndDate: string;
}

declare interface DescribeBrandMediaReportResponse {
  /** 查询范围内文章总数 */
  TotalCount?: number;
  /** 按天计算的每天文章数 */
  DateCountSet?: DateCount[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeBrandNegCommentsRequest {
  /** 品牌ID */
  BrandId: string;
  /** 查询开始时间 */
  StartDate: string;
  /** 查询结束时间 */
  EndDate: string;
  /** 查询条数上限，默认20 */
  Limit?: number;
  /** 查询偏移，默认从0开始 */
  Offset?: number;
}

declare interface DescribeBrandNegCommentsResponse {
  /** 评论列表 */
  BrandCommentSet?: CommentInfo[];
  /** 总的差评个数 */
  TotalComments?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeBrandPosCommentsRequest {
  /** 品牌ID */
  BrandId: string;
  /** 查询开始时间 */
  StartDate: string;
  /** 查询结束时间 */
  EndDate: string;
  /** 查询条数上限，默认20 */
  Limit?: number;
  /** 查询偏移，从0开始 */
  Offset?: number;
}

declare interface DescribeBrandPosCommentsResponse {
  /** 评论列表 */
  BrandCommentSet?: CommentInfo[];
  /** 总的好评个数 */
  TotalComments?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeBrandSocialOpinionRequest {
  /** 品牌ID */
  BrandId: string;
  /** 检索开始时间 */
  StartDate: string;
  /** 检索结束时间 */
  EndDate: string;
  /** 查询偏移，默认从0开始 */
  Offset?: number;
  /** 查询条数上限，默认20 */
  Limit?: number;
  /** 列表显示标记，若为true，则返回文章列表详情 */
  ShowList?: boolean;
}

declare interface DescribeBrandSocialOpinionResponse {
  /** 文章总数 */
  ArticleCount?: number;
  /** 来源统计总数 */
  FromCount?: number;
  /** 疑似负面报道总数 */
  AdverseCount?: number;
  /** 文章列表详情 */
  ArticleSet?: BrandReportArticle[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeBrandSocialReportRequest {
  /** 品牌ID */
  BrandId: string;
  /** 查询开始时间 */
  StartDate: string;
  /** 查询结束时间 */
  EndDate: string;
}

declare interface DescribeBrandSocialReportResponse {
  /** 累计统计数据 */
  TotalCount?: number;
  /** 按天计算的统计数据 */
  DateCountSet?: DateCount[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeIndustryNewsRequest {
  /** 行业ID */
  IndustryId: string;
  /** 查询开始时间 */
  StartDate: string;
  /** 查询结束时间 */
  EndDate: string;
  /** 是否显示列表，若为 true，则返回文章列表 */
  ShowList?: boolean;
  /** 查询偏移，默认从0开始 */
  Offset?: number;
  /** 查询条数上限，默认20 */
  Limit?: number;
}

declare interface DescribeIndustryNewsResponse {
  /** 总计文章数量 */
  NewsCount?: number;
  /** 总计来源数量 */
  FromCount?: number;
  /** 总计疑似负面数量 */
  AdverseCount?: number;
  /** 文章列表 */
  NewsSet?: IndustryNews[];
  /** 按天统计的数量列表 */
  DateCountSet?: DateCount[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeUserPortraitRequest {
  /** 品牌ID */
  BrandId: string;
}

declare interface DescribeUserPortraitResponse {
  /** 年龄画像 */
  Age?: AgePortraitInfo;
  /** 性别画像 */
  Gender?: GenderPortraitInfo;
  /** 省份画像 */
  Province?: ProvincePortraitInfo;
  /** 电影喜好画像 */
  Movie?: MoviePortraitInfo;
  /** 明星喜好画像 */
  Star?: StarPortraitInfo;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface Tbm {
  (): Versions;
  /** {@link DescribeBrandCommentCount 获取品牌好差评数}({@link DescribeBrandCommentCountRequest 请求参数}): {@link DescribeBrandCommentCountResponse 返回参数} */
  DescribeBrandCommentCount(data: DescribeBrandCommentCountRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBrandCommentCountResponse>;
  /** {@link DescribeBrandExposure 获取品牌总热度}({@link DescribeBrandExposureRequest 请求参数}): {@link DescribeBrandExposureResponse 返回参数} */
  DescribeBrandExposure(data: DescribeBrandExposureRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBrandExposureResponse>;
  /** {@link DescribeBrandMediaReport 获取品牌媒体报道数}({@link DescribeBrandMediaReportRequest 请求参数}): {@link DescribeBrandMediaReportResponse 返回参数} */
  DescribeBrandMediaReport(data: DescribeBrandMediaReportRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBrandMediaReportResponse>;
  /** {@link DescribeBrandNegComments 获取品牌用户差评列表}({@link DescribeBrandNegCommentsRequest 请求参数}): {@link DescribeBrandNegCommentsResponse 返回参数} */
  DescribeBrandNegComments(data: DescribeBrandNegCommentsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBrandNegCommentsResponse>;
  /** {@link DescribeBrandPosComments 获取品牌用户好评列表}({@link DescribeBrandPosCommentsRequest 请求参数}): {@link DescribeBrandPosCommentsResponse 返回参数} */
  DescribeBrandPosComments(data: DescribeBrandPosCommentsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBrandPosCommentsResponse>;
  /** {@link DescribeBrandSocialOpinion 获取品牌社交渠道观点}({@link DescribeBrandSocialOpinionRequest 请求参数}): {@link DescribeBrandSocialOpinionResponse 返回参数} */
  DescribeBrandSocialOpinion(data: DescribeBrandSocialOpinionRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBrandSocialOpinionResponse>;
  /** {@link DescribeBrandSocialReport 获取品牌社交渠道提及数}({@link DescribeBrandSocialReportRequest 请求参数}): {@link DescribeBrandSocialReportResponse 返回参数} */
  DescribeBrandSocialReport(data: DescribeBrandSocialReportRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBrandSocialReportResponse>;
  /** {@link DescribeIndustryNews 获取定制任务媒体报道列表}({@link DescribeIndustryNewsRequest 请求参数}): {@link DescribeIndustryNewsResponse 返回参数} */
  DescribeIndustryNews(data: DescribeIndustryNewsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIndustryNewsResponse>;
  /** {@link DescribeUserPortrait 获取品牌画像结果}({@link DescribeUserPortraitRequest 请求参数}): {@link DescribeUserPortraitResponse 返回参数} */
  DescribeUserPortrait(data: DescribeUserPortraitRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUserPortraitResponse>;
}

export declare type Versions = ["2018-01-29"];

export default Tbm;
