/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 数据源详情列表 */
declare interface DataSourceDetail {
  /** 数据源 ID */
  Id: string;
  /** 数据源名称 */
  Title: string;
  /** 数据源标识 */
  Name: string;
  /** 数据源类型 */
  Type: string;
  /** 数据源描述 */
  Description: string;
  /** 数据源配置 */
  Schema: string;
  /** cms 项目状态, 0: 重新获取详情信息，1： 不需要重新获取详情信息 */
  CmsProject: string;
  /** 当前为环境 id */
  PkgId: string | null;
  /** schema 版本信息 */
  SchemaVersion: string | null;
  /** 创建者用户 ID */
  CreatorId: string | null;
  /** 创建时间 */
  CreatedAt: string | null;
  /** 更新时间 */
  UpdatedAt: string | null;
  /** 环境 id */
  EnvId: string | null;
  /** 版本 */
  DataSourceVersion: string | null;
  /** 所属应用数组 */
  AppUsageList: DataSourceLinkApp[] | null;
  /** 发布时间 */
  PublishedAt: string | null;
  /** 子数据源ids */
  ChildDataSourceIds: string[] | null;
  /** 数据源发布信息 */
  Fun: string | null;
  /** 云函数状态 1 Active 2 Creating 3 Updating 4 Deleting 9 Deleted 11 CreatFailed 12 UpdateFailed 13 DeleteFailed 21 UpdateTimeOut */
  ScfStatus: number | null;
  /** 自定义方法 */
  Methods: string | null;
  /** 子数据源名数组 */
  ChildDataSourceNames: string[] | null;
  /** 是否旧数据源 1 新 0 旧 */
  IsNewDataSource: number | null;
  /** 数据源视图id */
  ViewId: string | null;
  /** 数据源属性配置 */
  Configuration: string | null;
  /** 外部数据源模板code */
  TemplateCode: string | null;
  /** 外部数据源模板来源 0 空模板 1 腾讯文档 2 腾讯会议 3 企业微信 4 微信电商 */
  Source: number | null;
  /** 发布版本 */
  PublishVersion: string | null;
  /** 发布视图id */
  PublishViewId: string | null;
  /** 数据源子类型 "database" 标准模型 "custom-database" 自定义模型 "system" 系统模型 "connector" 连接器 "custom-connector" 自定义连接器 "hidden" 隐藏数据源 */
  SubType: string | null;
  /** 授权状态 0 授权无效 1 授权有效 */
  AuthStatus: number | null;
  /** 数据源授权信息 */
  AuthInfo: TicketAuthInfo | null;
}

/** 数据详情列表 */
declare interface DataSourceDetailItems {
  /** 数据详情列表 */
  Rows: DataSourceDetail[];
  /** 数据源列表总个数 */
  Count: number;
}

/** 数据源关联App信息 */
declare interface DataSourceLinkApp {
  /** 应用Id */
  Id: string;
  /** 应用名称 */
  Title: string | null;
  /** 是否编辑状态使用 */
  EditStatusUse: number | null;
  /** 是否预览状态使用 */
  PreviewStatusUse: number | null;
  /** 是否正式状态使用 */
  OnlineStatusUse: number | null;
}

/** 数据源模糊查询参数 */
declare interface DataSourceQueryOption {
  /** 数据源标识模糊匹配 */
  LikeName?: string;
  /** 数据源名称模糊匹配 */
  LikeTitle?: string;
}

/** 数据源授权信息 */
declare interface TicketAuthInfo {
  /** 授权用户 */
  AuthUser: string;
}

declare interface DescribeDataSourceListRequest {
  /** 每页条数 */
  PageSize: number;
  /** 页码 */
  PageIndex: number;
  /** 环境 id */
  EnvId: string;
  /** 应用id数组 */
  Appids?: string[];
  /** 数据源id数组 */
  DataSourceIds?: string[];
  /** 数据源名称数组 */
  DataSourceNames?: string[];
  /** 数据源类型 database-自建数据源；cloud-integration-自定义数据源 */
  DataSourceType?: string;
  /** 数据源模糊查询参数 */
  QueryOption?: DataSourceQueryOption;
  /** 数据源视图Id数组 */
  ViewIds?: string[];
  /** 查询未关联应用的数据源，0:未关联，该参数配合 AppIds 参数一块使用 */
  AppLinkStatus?: number;
  /** 查询应用绑定数据源: 0: 否,1: 是 */
  QueryBindToApp?: number;
  /** 查询连接器 0 数据模型 1 连接器 2 自定义连接器 */
  QueryConnector?: number;
  /** 查询数据源黑名单机制，比如不想要系统数据源["system"] */
  NotQuerySubTypeList?: string[];
}

declare interface DescribeDataSourceListResponse {
  /** data 数据 */
  Data: DataSourceDetailItems;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

/** [云开发低码](https://cloud.tencent.com/document/product/1301) */
declare interface Lowcode {
  (): Versions;
  /** 获取数据源详情列表 */
  DescribeDataSourceList(data: DescribeDataSourceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDataSourceListResponse>;
}

export declare type Versions = ["2021-01-08"];

export default Lowcode;
