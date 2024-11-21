/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** API文档基本信息 */
declare interface APIDoc {
  /** API文档ID */
  ApiDocId?: string;
  /** API文档名称 */
  ApiDocName?: string;
  /** API文档构建状态 */
  ApiDocStatus?: string;
  /** 标签 */
  Tags?: Tag[] | null;
}

/** API文档详细信息 */
declare interface APIDocInfo {
  /** API文档ID */
  ApiDocId?: string;
  /** API文档名称 */
  ApiDocName?: string;
  /** API文档构建状态 */
  ApiDocStatus?: string;
  /** API文档API数量 */
  ApiCount?: number;
  /** API文档查看次数 */
  ViewCount?: number;
  /** API文档发布次数 */
  ReleaseCount?: number;
  /** API文档访问URI */
  ApiDocUri?: string;
  /** API文档分享密码 */
  SharePassword?: string;
  /** API文档更新时间 */
  UpdatedTime?: string;
  /** 服务ID */
  ServiceId?: string;
  /** 环境信息 */
  Environment?: string;
  /** 生成API文档的API ID */
  ApiIds?: string[];
  /** 服务名称 */
  ServiceName?: string;
  /** 生成API文档的API名称 */
  ApiNames?: string[];
  /** 标签 */
  Tags?: Tag[] | null;
}

/** API文档列表 */
declare interface APIDocs {
  /** API文档数量 */
  TotalCount: number;
  /** API文档基本信息 */
  APIDocSet: APIDoc[];
}

/** 应用绑定的Api信息 */
declare interface ApiAppApiInfo {
  /** 应用名称 */
  ApiAppName: string | null;
  /** 应用ID */
  ApiAppId: string;
  /** Api的ID */
  ApiId: string | null;
  /** Api名称 */
  ApiName: string | null;
  /** 服务ID */
  ServiceId: string | null;
  /** 授权绑定时间，按照 ISO8601 标准表示，并且使用 UTC 时间。格式为：YYYY-MM-DDThh:mm:ssZ。 */
  AuthorizedTime: string | null;
  /** Api所属地域 */
  ApiRegion: string | null;
  /** 授权绑定的环境 */
  EnvironmentName: string | null;
}

/** 应用信息集 */
declare interface ApiAppApiInfos {
  /** 数量 */
  TotalCount: number;
  /** 应用绑定的Api信息数组 */
  ApiAppApiSet: ApiAppApiInfo[] | null;
}

/** 应用信息 */
declare interface ApiAppInfo {
  /** 应用名称 */
  ApiAppName?: string | null;
  /** 应用ID */
  ApiAppId?: string;
  /** 应用SECRET注意:此字段可能返回null，表示取不到有效值 */
  ApiAppSecret?: string | null;
  /** 应用描述 */
  ApiAppDesc?: string | null;
  /** 创建时间，按照 ISO8601 标准表示，并且使用 UTC 时间。格式为：YYYY-MM-DDThh:mm:ssZ。 */
  CreatedTime?: string | null;
  /** 修改时间，按照 ISO8601 标准表示，并且使用 UTC 时间。格式为：YYYY-MM-DDThh:mm:ssZ。 */
  ModifiedTime?: string | null;
  /** 应用KEY注意:此字段可能返回null，表示取不到有效值 */
  ApiAppKey?: string | null;
}

/** 应用信息集 */
declare interface ApiAppInfos {
  /** 应用数量 */
  TotalCount: number;
  /** 应用信息数组 */
  ApiAppSet: ApiAppInfo[] | null;
}

/** api环境绑定策略 */
declare interface ApiEnvironmentStrategy {
  /** API唯一ID。 */
  ApiId: string;
  /** 用户自定义API名称。 */
  ApiName: string;
  /** API的路径。如/path。 */
  Path: string;
  /** API的方法。如GET。 */
  Method: string;
  /** 环境的限流信息。 */
  EnvironmentStrategySet: EnvironmentStrategy[];
}

/** API绑定策略列表 */
declare interface ApiEnvironmentStrategyStatus {
  /** API绑定的限流策略数量。 */
  TotalCount: number | null;
  /** API绑定的限流策略列表。 */
  ApiEnvironmentStrategySet: ApiEnvironmentStrategy[] | null;
}

/** API状态 */
declare interface ApiIdStatus {
  /** 服务唯一ID。 */
  ServiceId: string;
  /** API唯一ID。 */
  ApiId: string;
  /** API描述 */
  ApiDesc: string | null;
  /** API PATH。 */
  Path: string;
  /** API METHOD。 */
  Method: string;
  /** 服务创建时间。 */
  CreatedTime: string;
  /** 服务修改时间。 */
  ModifiedTime: string;
  /** API名称。 */
  ApiName: string | null;
  /** VPC唯一ID。 */
  UniqVpcId: string | null;
  /** API类型。 */
  ApiType: string | null;
  /** API协议。 */
  Protocol: string | null;
  /** 是否买后调试。 */
  IsDebugAfterCharge: boolean | null;
  /** 授权类型。 */
  AuthType: string | null;
  /** API业务类型。 */
  ApiBusinessType: string | null;
  /** 关联授权API唯一ID。 */
  AuthRelationApiId: string | null;
  /** 授权API关联的业务API列表。 */
  RelationBuniessApiIds?: string[] | null;
  /** oauth配置信息。 */
  OauthConfig: OauthConfig | null;
  /** oauth2.0API请求，token存放位置。 */
  TokenLocation: string | null;
}

/** 展示api信息 */
declare interface ApiInfo {
  /** API 所在的服务唯一 ID。 */
  ServiceId?: string | null;
  /** API 所在的服务的名称。 */
  ServiceName?: string | null;
  /** API 所在的服务的描述。 */
  ServiceDesc?: string | null;
  /** API 接口唯一 ID。 */
  ApiId?: string | null;
  /** API 接口的描述。 */
  ApiDesc?: string | null;
  /** 创建时间，按照 ISO8601 标准表示，并且使用 UTC 时间。格式为：YYYY-MM-DDThh:mm:ssZ。 */
  CreatedTime?: string | null;
  /** 最后修改时间，按照 ISO8601 标准表示，并且使用 UTC 时间。格式为：YYYY-MM-DDThh:mm:ssZ。 */
  ModifiedTime?: string | null;
  /** API 接口的名称。 */
  ApiName?: string | null;
  /** API 类型。可取值为NORMAL（普通API）、TSF（微服务API）。 */
  ApiType?: string | null;
  /** API 的前端请求类型，如 HTTP 或 HTTPS 或者 HTTP 和 HTTPS。 */
  Protocol?: string | null;
  /** API 鉴权类型。可取值为 SECRET（密钥对鉴权）、NONE（免鉴权）、OAUTH。 */
  AuthType?: string | null;
  /** OAUTH API的类型。可取值为NORMAL（业务API）、OAUTH（授权API）。 */
  ApiBusinessType?: string | null;
  /** OAUTH 业务API 关联的授权API 唯一 ID。 */
  AuthRelationApiId?: string | null;
  /** OAUTH配置。 */
  OauthConfig?: OauthConfig | null;
  /** 是否购买后调试（云市场预留参数）。 */
  IsDebugAfterCharge?: boolean | null;
  /** 请求的前端配置。 */
  RequestConfig?: RequestConfig | null;
  /** 返回类型。 */
  ResponseType?: string | null;
  /** 自定义响应配置成功响应示例。 */
  ResponseSuccessExample?: string | null;
  /** 自定义响应配置失败响应示例。 */
  ResponseFailExample?: string | null;
  /** 用户自定义错误码配置。 */
  ResponseErrorCodes?: ErrorCodes[] | null;
  /** 前端请求参数。 */
  RequestParameters?: ReqParameter[] | null;
  /** API 的后端服务超时时间，单位是秒。 */
  ServiceTimeout?: number | null;
  /** API 的后端服务类型。可取值为 HTTP、MOCK、TSF、CLB、SCF、WEBSOCKET、TARGET（内测）。 */
  ServiceType?: string | null;
  /** API 的后端服务配置。 */
  ServiceConfig?: ServiceConfig | null;
  /** API的后端服务参数。 */
  ServiceParameters?: DescribeApiResultServiceParametersInfo[] | null;
  /** 常量参数。 */
  ConstantParameters?: ConstantParameter[] | null;
  /** API 的后端 Mock 返回信息。如果 ServiceType 是 Mock，则此参数必传。 */
  ServiceMockReturnMessage?: string | null;
  /** scf 函数名称。当后端类型是SCF时生效。 */
  ServiceScfFunctionName?: string | null;
  /** scf 函数命名空间。当后端类型是SCF时生效。 */
  ServiceScfFunctionNamespace?: string | null;
  /** scf函数版本。当后端类型是SCF时生效。 */
  ServiceScfFunctionQualifier?: string | null;
  /** 是否开启集成响应。 */
  ServiceScfIsIntegratedResponse?: boolean | null;
  /** scf websocket注册函数命名空间。当前端类型是WEBSOCKET且后端类型是SCF时生效 */
  ServiceWebsocketRegisterFunctionName?: string | null;
  /** scf websocket注册函数命名空间。当前端类型是WEBSOCKET且后端类型是SCF时生效。 */
  ServiceWebsocketRegisterFunctionNamespace?: string | null;
  /** scf websocket传输函数版本。当前端类型是WEBSOCKET且后端类型是SCF时生效。 */
  ServiceWebsocketRegisterFunctionQualifier?: string | null;
  /** scf websocket清理函数。当前端类型是WEBSOCKET且后端类型是SCF时生效。 */
  ServiceWebsocketCleanupFunctionName?: string | null;
  /** scf websocket清理函数命名空间。当前端类型是WEBSOCKET且后端类型是SCF时生效。 */
  ServiceWebsocketCleanupFunctionNamespace?: string | null;
  /** scf websocket清理函数版本。当前端类型是WEBSOCKET且后端类型是SCF时生效。 */
  ServiceWebsocketCleanupFunctionQualifier?: string | null;
  /** WEBSOCKET 回推地址。 */
  InternalDomain?: string | null;
  /** scf websocket传输函数。当前端类型是WEBSOCKET且后端类型是SCF时生效。 */
  ServiceWebsocketTransportFunctionName?: string | null;
  /** scf websocket传输函数命名空间。当前端类型是WEBSOCKET且后端类型是SCF时生效。 */
  ServiceWebsocketTransportFunctionNamespace?: string | null;
  /** scf websocket传输函数版本。当前端类型是WEBSOCKET且后端类型是SCF时生效。 */
  ServiceWebsocketTransportFunctionQualifier?: string | null;
  /** API绑定微服务列表。 */
  MicroServices?: MicroService[] | null;
  /** 微服务信息详情。 */
  MicroServicesInfo?: number[] | null;
  /** 微服务的负载均衡配置。 */
  ServiceTsfLoadBalanceConf?: TsfLoadBalanceConfResp | null;
  /** 微服务的健康检查配置。 */
  ServiceTsfHealthCheckConf?: HealthCheckConf | null;
  /** 是否开启跨域。 */
  EnableCORS?: boolean | null;
  /** API绑定的tag信息。 */
  Tags?: Tag[] | null;
  /** API已发布的环境信息。 */
  Environments?: string[] | null;
  /** 是否开启Base64编码，只有后端为scf时才会生效。 */
  IsBase64Encoded?: boolean | null;
  /** 是否开启Base64编码的header触发，只有后端为scf时才会生效。 */
  IsBase64Trigger?: boolean | null;
  /** Header触发规则，总规则数量不超过10。 */
  Base64EncodedTriggerRules?: Base64EncodedTriggerRule[] | null;
  /** 是否开启SCF Event异步调用。 */
  ServiceScfEventIsAsyncCall?: boolean | null;
}

/** 插件相关的API列表信息。 */
declare interface ApiInfoSummary {
  /** 插件相关的API总数。 */
  TotalCount: number;
  /** 插件相关的API信息。 */
  ApiSet: AvailableApiInfo[];
}

/** 密钥详情 */
declare interface ApiKey {
  /** 创建的 API 密钥 ID 。 */
  AccessKeyId?: string;
  /** 创建的 API 密钥 Key。 */
  AccessKeySecret?: string;
  /** 密钥类型，auto 或者 manual。 */
  AccessKeyType?: string;
  /** 用户自定义密钥名称。 */
  SecretName?: string;
  /** 最后一次修改时间。按照 ISO8601 标准表示，并且使用 UTC 时间。格式为：YYYY-MM-DDThh:mm:ssZ。 */
  ModifiedTime?: string;
  /** 密钥状态。0表示禁用，1表示启用。 */
  Status?: number;
  /** 创建时间。按照 ISO8601 标准表示，并且使用 UTC 时间。格式为：YYYY-MM-DDThh:mm:ssZ。 */
  CreatedTime?: string;
  /** 标签 */
  Tags?: Tag[] | null;
}

/** 密钥列表 */
declare interface ApiKeysStatus {
  /** 符合条件的 API 密钥数量。 */
  TotalCount: number | null;
  /** API 密钥列表。 */
  ApiKeySet: ApiKey[] | null;
}

/** api请求配置 */
declare interface ApiRequestConfig {
  /** path */
  Path: string;
  /** 方法 */
  Method: string;
}

/** api或service绑定使用计划详情 */
declare interface ApiUsagePlan {
  /** 服务唯一ID。 */
  ServiceId?: string | null;
  /** API 唯一 ID。 */
  ApiId?: string | null;
  /** API 名称。 */
  ApiName?: string | null;
  /** API 路径。 */
  Path?: string | null;
  /** API 方法。 */
  Method?: string | null;
  /** 使用计划的唯一 ID。 */
  UsagePlanId?: string | null;
  /** 使用计划的名称。 */
  UsagePlanName?: string | null;
  /** 使用计划的描述。 */
  UsagePlanDesc?: string | null;
  /** 使用计划绑定的服务环境。 */
  Environment?: string | null;
  /** 已经使用的配额。 */
  InUseRequestNum?: number | null;
  /** 请求配额总量，-1表示没有限制。 */
  MaxRequestNum?: number | null;
  /** 请求 QPS 上限，-1 表示没有限制。 */
  MaxRequestNumPreSec?: number | null;
  /** 使用计划创建时间。 */
  CreatedTime?: string | null;
  /** 使用计划最后修改时间。 */
  ModifiedTime?: string | null;
  /** 服务名称。 */
  ServiceName?: string | null;
  /** 标签 */
  Tags?: Tag[] | null;
}

/** api绑定使用计划列表 */
declare interface ApiUsagePlanSet {
  /** API 绑定的使用计划总数。 */
  TotalCount: number | null;
  /** API 绑定使用计划列表。 */
  ApiUsagePlanList: ApiUsagePlan[] | null;
}

/** key-value */
declare interface ApigatewayTags {
}

/** 插件绑定的API信息 */
declare interface AttachedApiInfo {
  /** API所在服务ID。 */
  ServiceId: string;
  /** API所在服务名称。 */
  ServiceName: string;
  /** API所在服务描述信息。 */
  ServiceDesc: string | null;
  /** API ID。 */
  ApiId: string;
  /** API名称。 */
  ApiName: string;
  /** API描述。 */
  ApiDesc: string | null;
  /** 插件绑定API的环境。 */
  Environment: string;
  /** 插件和API绑定时间。 */
  AttachedTime: string;
}

/** 插件绑定的API列表 */
declare interface AttachedApiSummary {
  /** 插件绑定的API数量。 */
  TotalCount: number;
  /** 插件绑定的API信息。 */
  AttachedApis: AttachedApiInfo[];
}

/** 已绑定的插件信息。 */
declare interface AttachedPluginInfo {
  /** 插件ID。 */
  PluginId: string;
  /** 环境信息。 */
  Environment: string;
  /** 绑定时间。 */
  AttachedTime: string;
  /** 插件名称。 */
  PluginName: string;
  /** 插件类型。 */
  PluginType: string;
  /** 插件描述。 */
  Description: string;
  /** 插件定义语句。 */
  PluginData: string;
}

/** 已绑定的插件信息。 */
declare interface AttachedPluginSummary {
  /** 已绑定的插件总数。 */
  TotalCount: number;
  /** 已绑定的插件信息。 */
  PluginSummary: AttachedPluginInfo[];
}

/** 插件相关的API信息。 */
declare interface AvailableApiInfo {
  /** API ID。 */
  ApiId?: string;
  /** API名称。 */
  ApiName?: string;
  /** API类型。 */
  ApiType?: string;
  /** API路径。 */
  Path?: string;
  /** API方法。 */
  Method?: string;
  /** API是否绑定其他插件。 */
  AttachedOtherPlugin?: boolean | null;
  /** API是否绑定当前插件。 */
  IsAttached?: boolean | null;
}

/** Base64编码的header触发规则 */
declare interface Base64EncodedTriggerRule {
  /** 进行编码触发的header，可选值 "Accept"和"Content_Type" 对应实际数据流请求header中的Accept和 Content-Type。 */
  Name: string;
  /** 进行编码触发的header的可选值数组, 数组元素的字符串最大长度为40，元素可以包括数字，英文字母以及特殊字符，特殊字符的可选值为： `.` `+` `*` `-` `/` `_` 例如 [ "application/x-vpeg005", "application/xhtml+xml", "application/vnd.ms-project", "application/vnd.rn-rn_music_package"] 等都是合法的。 */
  Value: string[];
}

/** vpc通道绑定的api信息 */
declare interface BindApiInfo {
  /** api唯一id */
  ApiId: string;
  /** Service唯一id */
  ServiceId: string;
  /** api名字 */
  ApiName: string | null;
  /** 服务名字 */
  ServiceName: string | null;
  /** 绑定时间 */
  BindTime: string;
}

/** 常量参数 */
declare interface ConstantParameter {
  /** 常量参数名称。只有 ServiceType 是 HTTP 才会用到此参数。 */
  Name?: string | null;
  /** 常量参数描述。只有 ServiceType 是 HTTP 才会用到此参数。 */
  Desc?: string | null;
  /** 常量参数位置。只有 ServiceType 是 HTTP 才会用到此参数。 */
  Position?: string | null;
  /** 常量参数默认值。只有 ServiceType 是 HTTP 才会用到此参数。 */
  DefaultValue?: string | null;
}

/** cos类型的api配置 */
declare interface CosConfig {
  /** API调用后端COS的方式，前端请求方法与Action的可选值为：GET：GetObjectPUT：PutObjectPOST：PostObject、AppendObjectHEAD： HeadObjectDELETE： DeleteObject。 */
  Action: string | null;
  /** API后端COS的存储桶名。 */
  BucketName: string | null;
  /** API调用后端COS的签名开关，默认为false。 */
  Authorization?: boolean | null;
  /** API后端COS的路径匹配模式，可选值：BackEndPath ： 后端路径匹配FullPath ： 全路径匹配默认值为：BackEndPath */
  PathMatchMode?: string | null;
}

/** 创建api返回 */
declare interface CreateApiResultInfo {
  /** api id */
  ApiId: string | null;
  /** 路径 */
  Path: string | null;
  /** 请求方法 */
  Method: string | null;
  /** 创建时间 */
  CreatedTime: string | null;
}

/** 创建api返回 */
declare interface CreateApiRsp {
  /** api id */
  ApiId: string | null;
  /** 路径 */
  Path: string | null;
  /** 请求方法 */
  Method: string | null;
  /** 创建时间 */
  CreatedTime: string | null;
  /** 导入状态 */
  Status: string | null;
  /** 异常信息 */
  ErrMsg: string | null;
  /** api name */
  ApiName: string | null;
}

/** CreateApiRsp 返回加TotalCount */
declare interface CreateApiRspSet {
  /** 个数 */
  TotalCount: number;
  /** 返回的数组 */
  ApiSet: CreateApiRsp[];
}

/** api状态详情 */
declare interface DesApisStatus {
  /** 服务唯一ID。 */
  ServiceId: string;
  /** API唯一ID。 */
  ApiId: string;
  /** 用户自定义的 API 接口描述。 */
  ApiDesc: string | null;
  /** 创建时间。按照 ISO8601 标准表示，并且使用 UTC 时间。格式为：YYYY-MM-DDThh:mm:ssZ。 */
  CreatedTime: string | null;
  /** 最后修改时间。按照 ISO8601 标准表示，并且使用 UTC 时间。格式为：YYYY-MM-DDThh:mm:ssZ。 */
  ModifiedTime: string | null;
  /** API 接口的名称。 */
  ApiName: string | null;
  /** VPCID。 */
  VpcId: number | null;
  /** VPC唯一ID。 */
  UniqVpcId: string | null;
  /** API类型。取值为NORMAL（普通API）和TSF（微服务API）。 */
  ApiType: string | null;
  /** API协议。 */
  Protocol: string | null;
  /** 是否买后调试。（云市场预留字段） */
  IsDebugAfterCharge: boolean | null;
  /** API 鉴权类型。取值为SECRET（密钥对鉴权）、NONE（免鉴权）、OAUTH、EIAM。 */
  AuthType: string | null;
  /** OAUTH API的类型。当AuthType 为 OAUTH时该字段有效， 取值为NORMAL（业务API）和 OAUTH（授权API）。 */
  ApiBusinessType: string | null;
  /** 关联的授权API 唯一 ID，当AuthType为OAUTH且ApiBusinessType为NORMAL时生效。标示业务API绑定的oauth2.0授权API唯一ID。 */
  AuthRelationApiId: string | null;
  /** OAUTH 配置信息。当AuthType是OAUTH时生效。 */
  OauthConfig: OauthConfig | null;
  /** 授权API关联的业务API列表。 */
  RelationBuniessApiIds?: string[] | null;
  /** API关联的标签信息。 */
  Tags: string[] | null;
  /** API 的路径，如 /path。 */
  Path: string | null;
  /** API 的请求方法，如 GET。 */
  Method: string | null;
}

/** ServiceParameter */
declare interface DescribeApiResultServiceParametersInfo {
  /** API的后端服务参数名称。只有ServiceType是HTTP才会用到此参数。前后端参数名称可不同。 */
  Name?: string | null;
  /** API 的后端服务参数位置，如 head。只有 ServiceType 是 HTTP 才会用到此参数。前后端参数位置可配置不同。 */
  Position?: string | null;
  /** API 的后端服务参数对应的前端参数位置，如 head。只有 ServiceType 是 HTTP 才会用到此参数。 */
  RelevantRequestParameterPosition?: string | null;
  /** API 的后端服务参数对应的前端参数名称。只有 ServiceType 是 HTTP 才会用到此参数。 */
  RelevantRequestParameterName?: string | null;
  /** API 的后端服务参数默认值。只有 ServiceType 是 HTTP 才会用到此参数。 */
  DefaultValue?: string | null;
  /** API 的后端服务参数备注。只有 ServiceType 是 HTTP 才会用到此参数。 */
  RelevantRequestParameterDesc?: string | null;
}

/** api状态详情 */
declare interface DescribeApisStatusResultApiIdStatusSetInfo {
  /** 服务唯一ID。 */
  ServiceId: string;
  /** API唯一ID。 */
  ApiId: string;
  /** 用户自定义的 API 接口描述。 */
  ApiDesc: string | null;
  /** 创建时间。按照 ISO8601 标准表示，并且使用 UTC 时间。格式为：YYYY-MM-DDThh:mm:ssZ。 */
  CreatedTime: string | null;
  /** 最后修改时间。按照 ISO8601 标准表示，并且使用 UTC 时间。格式为：YYYY-MM-DDThh:mm:ssZ。 */
  ModifiedTime: string | null;
  /** API 接口的名称。 */
  ApiName: string | null;
  /** VPCID。 */
  VpcId: number | null;
  /** VPC唯一ID。 */
  UniqVpcId: string | null;
  /** API类型。取值为NORMAL（普通API）和TSF（微服务API）。 */
  ApiType: string | null;
  /** API协议。 */
  Protocol: string | null;
  /** 是否买后调试。（云市场预留字段） */
  IsDebugAfterCharge: boolean | null;
  /** API 鉴权类型。取值为SECRET（密钥对鉴权）、NONE（免鉴权）、OAUTH、EIAM。 */
  AuthType: string | null;
  /** OAUTH API的类型。当AuthType 为 OAUTH时该字段有效， 取值为NORMAL（业务API）和 OAUTH（授权API）。 */
  ApiBusinessType: string | null;
  /** 关联的授权API 唯一 ID，当AuthType为OAUTH且ApiBusinessType为NORMAL时生效。标示业务API绑定的oauth2.0授权API唯一ID。 */
  AuthRelationApiId: string | null;
  /** OAUTH 配置信息。当AuthType是OAUTH时生效。 */
  OauthConfig: OauthConfig | null;
  /** 授权API关联的业务API列表。 */
  RelationBuniessApiIds?: string[] | null;
  /** API关联的标签信息。 */
  Tags: ApigatewayTags[] | null;
  /** API 的路径，如 /path。 */
  Path: string | null;
  /** API 的请求方法，如 GET。 */
  Method: string | null;
}

/** 描述api列表状态 */
declare interface DescribeApisStatusResultInfo {
  /** 符合条件的 API 接口数量。 */
  TotalCount: number;
  /** API 接口列表。 */
  ApiIdStatusSet: DescribeApisStatusResultApiIdStatusSetInfo[];
}

/** 数据结构 */
declare interface DescribeExclusiveInstancesResult {
}

/** 服务发布列表详情 */
declare interface DescribeServiceReleaseVersionResultVersionListInfo {
  /** 版本号。 */
  VersionName: string | null;
  /** 版本描述。 */
  VersionDesc: string | null;
}

/** 查询后端通道绑定API列表 */
declare interface DescribeUpstreamBindApis {
  /** 总数 */
  TotalCount: number;
  /** 绑定的API信息 */
  BindApiSet: BindApiInfo[];
}

/** 查询后端通道返回信息 */
declare interface DescribeUpstreamInfo {
  /** 查询总数 */
  TotalCount: number;
  /** 查询列表 */
  UpstreamSet: UpstreamInfo[];
}

/** 服务自定义域名列表 */
declare interface DomainSetList {
  /** 域名名称。 */
  DomainName: string;
  /** 域名解析状态。1 表示正常解析，0 表示解析失败。 */
  Status: number;
  /** 证书ID。 */
  CertificateId: string;
  /** 是否使用默认路径映射。 */
  IsDefaultMapping: boolean;
  /** 自定义域名协议类型。 */
  Protocol: string;
  /** 网络类型（'INNER' 或 'OUTER'）。 */
  NetType: string;
  /** 是否将HTTP请求强制跳转 HTTPS，默认为false。参数为 true时，API网关会将所有使用该自定义域名的 HTTP 协议的请求重定向至 HTTPS 协议进行转发。 */
  IsForcedHttps: boolean;
  /** 域名备案注册状态 */
  RegistrationStatus: boolean;
}

/** 自定义服务域名展示 */
declare interface DomainSets {
  /** 服务下的自定义域名数量。 */
  TotalCount: number;
  /** 自定义服务域名列表。 */
  DomainSet: DomainSetList[];
}

/** 服务发布的环境信息。 */
declare interface Environment {
  /** 环境名称。 */
  EnvironmentName?: string;
  /** 访问路径。 */
  Url?: string;
  /** 发布状态，1 表示已发布，0 表示未发布。 */
  Status?: number;
  /** 运行版本。 */
  VersionName?: string;
  /** 创建时间 */
  CreateTime?: string | null;
}

/** 环境限流 */
declare interface EnvironmentStrategy {
  /** 环境名 */
  EnvironmentName: string;
  /** 限流值 */
  Quota: number;
}

/** 用户自定义错误码 */
declare interface ErrorCodes {
  /** 自定义响应配置错误码。 */
  Code?: number | null;
  /** 自定义响应配置错误信息。 */
  Msg?: string | null;
  /** 自定义响应配置错误码备注。 */
  Desc?: string | null;
  /** 自定义错误码转换。 */
  ConvertedCode?: number | null;
  /** 是否需要开启错误码转换。 */
  NeedConvert?: boolean | null;
}

/** >描述键值对过滤器，用于条件过滤查询。例如过滤ID、名称、状态等> * 若存在多个`Filter`时，`Filter`间的关系为逻辑与（`AND`）关系。> * 若同一个`Filter`存在多个`Values`，同一`Filter`下`Values`间的关系为逻辑或（`OR`）关系。> */
declare interface Filter {
  /** 需要过滤的字段。 */
  Name: string;
  /** 字段的过滤值。 */
  Values: string[];
}

/** 健康检查配置，包括TsfHealthCheckConf和TargetServicesHealthCheckConf */
declare interface HealthCheckConf {
  /** 是否开启健康检查。 */
  IsHealthCheck?: boolean | null;
  /** 健康检查阈值。 */
  RequestVolumeThreshold?: number | null;
  /** 窗口大小。 */
  SleepWindowInMilliseconds?: number | null;
  /** 阈值百分比。 */
  ErrorThresholdPercentage?: number | null;
}

/** 策略列表 */
declare interface IPStrategiesStatus {
  /** 策略数量。 */
  TotalCount: number | null;
  /** 策略列表。 */
  StrategySet: IPStrategy[] | null;
}

/** ip策略 */
declare interface IPStrategy {
  /** 策略唯一ID。 */
  StrategyId: string | null;
  /** 用户自定义策略名称。 */
  StrategyName: string | null;
  /** 策略类型。支持WHITE（白名单）和BLACK（黑名单）。 */
  StrategyType: string | null;
  /** IP列表。 */
  StrategyData: string | null;
  /** 创建时间。按照 ISO8601 标准表示，并且使用 UTC 时间。格式为：YYYY-MM-DDThh:mm:ssZ。 */
  CreatedTime: string | null;
  /** 修改时间。 */
  ModifiedTime: string | null;
  /** 最后修改时间。按照 ISO8601 标准表示，并且使用 UTC 时间。格式为：YYYY-MM-DDThh:mm:ssZ。 */
  ServiceId: string | null;
  /** 策略绑定的API数量。 */
  BindApiTotalCount: number | null;
  /** 绑定的API详情。 */
  BindApis: DesApisStatus[] | null;
}

/** 策略绑定api列表 */
declare interface IPStrategyApi {
  /** API 唯一 ID。 */
  ApiId: string;
  /** 用户自定义的 API 名称。 */
  ApiName: string;
  /** API 类型。取值为NORMAL（普通API）和TSF （微服务API）。 */
  ApiType: string;
  /** API 的路径。如 /path。 */
  Path: string;
  /** API 的请求方法。如 GET。 */
  Method: string;
  /** API 已经绑定的其他策略唯一ID。 */
  OtherIPStrategyId: string;
  /** API 已经绑定的环境。 */
  OtherEnvironmentName: string;
}

/** ip策略绑定api详情 */
declare interface IPStrategyApiStatus {
  /** 环境绑定API数量。 */
  TotalCount: number | null;
  /** 环境绑定API详情。 */
  ApiIdStatusSet: IPStrategyApi[] | null;
}

/** 独享实例预付费详情 */
declare interface InstanceChargePrepaid {
  /** 自动续费标示 */
  RenewFlag: string;
  /** 预付费到期时间 */
  ExpiredTime: string;
}

/** 独享实例详情 */
declare interface InstanceDetail {
  /** 独享实例唯一id */
  InstanceId?: string;
  /** 可用区 */
  Zone?: string;
  /** 独享实例名字 */
  InstanceName?: string;
  /** 独享实例描述 */
  InstanceDescription?: string;
  /** 独享实例计费类型 */
  InstanceChargeType?: string;
  /** 独享实例状态 */
  InstanceState?: string;
  /** 独享实例预付费类型 */
  InstanceChargePrepaid?: InstanceChargePrepaid | null;
  /** 独享实例类型 */
  InstanceType?: string;
  /** 独享实例网络类型 */
  NetworkConfig?: NetworkConfig | null;
  /** 独享实例vpc配置 */
  VpcConfig?: VpcConfig;
  /** 独享实例参数配置 */
  Parameters?: ParameterInfo[] | null;
  /** 独享实例隔离时间 */
  IsolationStartedTime?: string;
  /** 创建时间 */
  CreatedTime?: string;
  /** 可用区列表 */
  Zones?: string[] | null;
}

/** 独享实例信息 */
declare interface InstanceInfo {
  /** 独享实例唯一id */
  InstanceId?: string;
  /** 独享实例name */
  InstanceName?: string;
  /** 独享实例描述 */
  InstanceDescription?: string;
  /** 独享实例计费类型 */
  InstanceChargeType?: string;
  /** 独享实例类型 */
  InstanceType?: string;
  /** 独享实例状态 */
  InstanceState?: string;
  /** 独享实例创建时间 */
  CreatedTime?: string;
  /** 订单号 */
  DealName?: string | null;
  /** 资源ID同唯一id */
  ResourceId?: string;
  /** 公网IP列表 */
  OuterIpList?: string[] | null;
  /** 内网IP列表 */
  InnerIpList?: string[] | null;
  /** 专享实例计费信息 */
  InstanceChargePrepaid?: InstanceChargePrepaid | null;
  /** 所属vpc */
  UniqVpcId?: string | null;
}

/** 独享实例参数信息 */
declare interface InstanceParameterInput {
  /** ServiceRequestNumPreSec，ApiRequestNumPreSec */
  Name: string;
  /** 参数值 */
  Value: string;
}

/** 专享查询列表 */
declare interface InstanceSummary {
  /** 专享实例总数 */
  TotalCount: number | null;
  /** 专享实例列表 */
  InstanceSet: InstanceInfo[] | null;
}

/** k8s Label */
declare interface K8sLabel {
  /** Label的Key */
  Key: string;
  /** Label的Value */
  Value: string;
}

/** k8s 服务的配置 */
declare interface K8sService {
  /** 权重 */
  Weight: number;
  /** k8s集群ID */
  ClusterId: string;
  /** 容器命名空间 */
  Namespace: string;
  /** 容器服务的名字 */
  ServiceName: string;
  /** 服务的端口 */
  Port: number;
  /** 额外选择的Pod的Label */
  ExtraLabels: K8sLabel[];
  /** 自定义的服务名字，可选 */
  Name?: string;
}

/** 检索条件入参 */
declare interface LogQuery {
  /** 检索字段 */
  Name: string;
  /** 操作符 */
  Operator: string;
  /** 检索值 */
  Value: string;
}

/** API绑定的微服务信息。 */
declare interface MicroService {
  /** 微服务集群ID。 */
  ClusterId?: string;
  /** 微服务命名空间ID。 */
  NamespaceId?: string;
  /** 微服务名称。 */
  MicroServiceName?: string;
}

/** tsf类型入参 */
declare interface MicroServiceReq {
  /** 微服务集群。 */
  ClusterId: string;
  /** 微服务命名空间。 */
  NamespaceId: string;
  /** 微服务名称。 */
  MicroServiceName: string;
}

/** 后端通道详细信息 */
declare interface ModifyUpstreamResultInfo {
  /** 后端通道唯一ID */
  UpstreamId: string;
  /** 后端通道名字 */
  UpstreamName: string;
  /** 后端通道描述 */
  UpstreamDescription: string;
  /** 后端协议，取值范围：HTTP, HTTPS */
  Scheme: string;
  /** 负载均衡算法，取值范围：ROUND_ROBIN */
  Algorithm: string;
  /** VPC唯一ID */
  UniqVpcId: string;
  /** 请求重试次数 */
  Retries: number;
  /** 后端节点 */
  Nodes: UpstreamNode[];
  /** 创建时间 */
  CreatedTime: string;
  /** 健康检查配置 */
  HealthChecker: UpstreamHealthChecker | null;
  /** 后端的类型，取值范围：IP_PORT, K8S */
  UpstreamType: string;
  /** K8S容器服务配置 */
  K8sServices: K8sService[] | null;
  /** 网关转发给后端的Host请求头 */
  UpstreamHost: string | null;
}

/** 独享实例网络配置 */
declare interface NetworkConfig {
  /** 最大出带宽 */
  InternetMaxBandwidthOut?: number;
  /** EnableInternetInbound信息 */
  EnableInternetInbound?: boolean;
  /** EnableInternetOutbound信息 */
  EnableInternetOutbound?: boolean;
  /** InboundIpAddresses信息 */
  InboundIpAddresses?: string[];
  /** OutboundIpAddresses信息 */
  OutboundIpAddresses?: string[];
}

/** Oauth授权配置信息 */
declare interface OauthConfig {
  /** 公钥，用于验证用户token。 */
  PublicKey: string;
  /** token传递位置。 */
  TokenLocation: string;
  /** 重定向地址，用于引导用户登录操作。 */
  LoginRedirectUrl?: string;
}

/** 独享实例配置参数 */
declare interface ParameterInfo {
  /** 名字 */
  Name?: string;
  /** 当前值 */
  Value?: number;
  /** 默认值 */
  Default?: number;
  /** 单位 */
  Unit?: string;
  /** 类型, integer|string */
  Type?: string;
  /** 最小 */
  Minimum?: number;
  /** 最大 */
  Maximum?: number;
  /** 修改时间 */
  ModifedTime?: string;
  /** 字符类型的值，当Type为string时才有意义 */
  ValueString?: string | null;
  /** 字符类型的默认值，当Type为string时才有意义 */
  DefaultValueString?: string | null;
  /** 可调整范围 */
  Range?: string | null;
}

/** 自定义域名的路径映射。 */
declare interface PathMapping {
  /** 路径。 */
  Path: string;
  /** 发布环境，可选值为“test”、 ”prepub“、”release“。 */
  Environment: string;
}

/** API网关插件详情。 */
declare interface Plugin {
  /** 插件ID。 */
  PluginId: string;
  /** 插件名称。 */
  PluginName: string;
  /** 插件类型。 */
  PluginType: string;
  /** 插件定义语句。 */
  PluginData: string;
  /** 插件描述。 */
  Description: string | null;
  /** 插件创建时间。按照 ISO8601 标准表示，并且使用 UTC 时间。格式为：YYYY-MM-DDThh:mm:ssZ。 */
  CreatedTime: string;
  /** 插件修改时间。按照 ISO8601 标准表示，并且使用 UTC 时间。格式为：YYYY-MM-DDThh:mm:ssZ。 */
  ModifiedTime: string;
  /** 插件绑定的API总数。 */
  AttachedApiTotalCount: number | null;
  /** 插件绑定的API信息。 */
  AttachedApis: AttachedApiInfo[] | null;
}

/** 插件列表详情。 */
declare interface PluginSummary {
  /** 插件个数。 */
  TotalCount: number;
  /** 插件详情。 */
  PluginSet: Plugin[];
}

/** 发布服务返回 */
declare interface ReleaseService {
  /** 发布时的备注信息填写。 */
  ReleaseDesc: string | null;
  /** 发布的版本id。 */
  ReleaseVersion: string | null;
}

/** 请求参数 */
declare interface ReqParameter {
  /** API 的前端参数名称。 */
  Name: string;
  /** API 的前端参数位置，如 header。目前支持 header、query、path。 */
  Position: string;
  /** API 的前端参数类型，如 String、int。 */
  Type: string;
  /** API 的前端参数默认值。 */
  DefaultValue: string;
  /** API 的前端参数是否必填，True：表示必填，False：表示可选。 */
  Required: boolean;
  /** API 的前端参数备注。 */
  Desc: string;
}

/** 前端路径配置 */
declare interface RequestConfig {
  /** API 的路径，如 /path。 */
  Path: string;
  /** API 的请求方法，如 GET。 */
  Method: string;
}

/** 请求参数 */
declare interface RequestParameter {
  /** 请求参数名称 */
  Name?: string;
  /** 描述 */
  Desc?: string;
  /** 参数位置 */
  Position?: string;
  /** 参数类型 */
  Type?: string;
  /** 默认值 */
  DefaultValue?: string;
  /** 是否必须 */
  Required?: boolean;
}

/** 错误码入参 */
declare interface ResponseErrorCodeReq {
  /** 自定义响应配置错误码。 */
  Code?: number;
  /** 自定义响应配置错误信息。 */
  Msg?: string;
  /** 自定义响应配置错误码备注。 */
  Desc?: string;
  /** 自定义错误码转换。 */
  ConvertedCode?: number;
  /** 是否需要开启错误码转换。 */
  NeedConvert?: boolean;
}

/** 展示服务列表用 */
declare interface Service {
  /** 内网访问https端口。 */
  InnerHttpsPort: number | null;
  /** 用户自定义的服务描述。 */
  ServiceDesc: string | null;
  /** 服务的前端请求类型。如http、https 或者 http&https。 */
  Protocol: string | null;
  /** 最后修改时间。按照 ISO8601 标准表示，并且使用 UTC 时间。格式为：YYYY-MM-DDThh:mm:ssZ。 */
  ModifiedTime: string | null;
  /** 服务支持的网络类型。 */
  NetTypes: string[] | null;
  /** 独占集群名称。 */
  ExclusiveSetName: string | null;
  /** 服务唯一 ID。 */
  ServiceId: string | null;
  /** IP版本。 */
  IpVersion: string | null;
  /** 已经发布的环境列表。如test、prepub、release。 */
  AvailableEnvironments: string[] | null;
  /** 用户自定义的服务名称。 */
  ServiceName: string | null;
  /** 系统为该服务分配的外网域名。 */
  OuterSubDomain: string | null;
  /** 创建时间。按照 ISO8601 标准表示，并且使用 UTC 时间。格式为：YYYY-MM-DDThh:mm:ssZ。 */
  CreatedTime: string | null;
  /** 内网访问http端口。 */
  InnerHttpPort: number | null;
  /** 系统为该服务自动分配的内网域名。 */
  InnerSubDomain: string | null;
  /** 服务的计费状态。 */
  TradeIsolateStatus: number | null;
  /** 服务绑定的标签 */
  Tags: Tag[] | null;
  /** 独享实例 */
  InstanceId: string | null;
  /** 集群类型 */
  SetType: string | null;
  /** 服务部署的集群类型 */
  DeploymentType: string | null;
}

/** ServiceConfig配置 */
declare interface ServiceConfig {
  /** 后端类型。启用vpc时生效，目前支持的类型为clb, cvm和upstream */
  Product?: string;
  /** vpc 的唯一ID。 */
  UniqVpcId?: string;
  /** API 的后端服务url。如果ServiceType是HTTP，则此参数必传。 */
  Url?: string;
  /** API 的后端服务路径，如 /path。如果 ServiceType 是 HTTP，则此参数必传。前后端路径可不同。 */
  Path?: string;
  /** API的后端服务请求方法，如 GET。如果 ServiceType 是 HTTP，则此参数必传。前后端方法可不同。 */
  Method?: string;
  /** 当绑定vpc通道才需要 */
  UpstreamId?: string | null;
  /** API后端COS配置。如果 ServiceType 是 COS，则此参数必传。 */
  CosConfig?: CosConfig | null;
}

/** 服务绑定环境详情 */
declare interface ServiceEnvironmentSet {
  /** 服务绑定环境总数。 */
  TotalCount: number | null;
  /** 服务绑定环境列表。 */
  EnvironmentList: Environment[] | null;
}

/** 服务环境策略 */
declare interface ServiceEnvironmentStrategy {
  /** 环境名。 */
  EnvironmentName: string;
  /** 访问服务对应环境的url。 */
  Url: string;
  /** 发布状态。 */
  Status: number;
  /** 发布的版本号。 */
  VersionName: string | null;
  /** 限流值。 */
  Strategy: number;
  /** 最大限流值 */
  MaxStrategy: number | null;
}

/** 环境绑定策略列表 */
declare interface ServiceEnvironmentStrategyStatus {
  /** 限流策略数量。 */
  TotalCount: number | null;
  /** 限流策略列表。 */
  EnvironmentList: ServiceEnvironmentStrategy[] | null;
}

/** ServiceParameter */
declare interface ServiceParameter {
  /** API的后端服务参数名称。只有ServiceType是HTTP才会用到此参数。前后端参数名称可不同。 */
  Name?: string | null;
  /** API 的后端服务参数位置，如 head。只有 ServiceType 是 HTTP 才会用到此参数。前后端参数位置可配置不同。 */
  Position?: string | null;
  /** API 的后端服务参数对应的前端参数位置，如 head。只有 ServiceType 是 HTTP 才会用到此参数。 */
  RelevantRequestParameterPosition?: string | null;
  /** API 的后端服务参数对应的前端参数名称。只有 ServiceType 是 HTTP 才会用到此参数。 */
  RelevantRequestParameterName?: string | null;
  /** API 的后端服务参数默认值。只有 ServiceType 是 HTTP 才会用到此参数。 */
  DefaultValue?: string | null;
  /** API 的后端服务参数备注。只有 ServiceType 是 HTTP 才会用到此参数。 */
  RelevantRequestParameterDesc?: string | null;
  /** API 的后端服务参数类型。只有 ServiceType 是 HTTP 才会用到此参数。 */
  RelevantRequestParameterType?: string | null;
}

/** 服务发布历史 */
declare interface ServiceReleaseHistory {
  /** 发布版本总数。 */
  TotalCount: number | null;
  /** 历史版本列表。 */
  VersionList: ServiceReleaseHistoryInfo[] | null;
}

/** 服务发布列表详情 */
declare interface ServiceReleaseHistoryInfo {
  /** 版本号。 */
  VersionName?: string | null;
  /** 版本描述。 */
  VersionDesc?: string | null;
  /** 版本发布时间。 */
  ReleaseTime?: string | null;
}

/** 服务发布版本 */
declare interface ServiceReleaseVersion {
  /** 发布版本总数量。 */
  TotalCount: number | null;
  /** 发布版本列表。 */
  VersionList: DescribeServiceReleaseVersionResultVersionListInfo[] | null;
}

/** 服务自定义域名路径映射 */
declare interface ServiceSubDomainMappings {
  /** 是否使用默认路径映射，为 True 表示使用默认路径映射；为 False 的话，表示使用自定义路径映射，此时 PathMappingSet 不为空。 */
  IsDefaultMapping: boolean;
  /** 自定义路径映射列表。 */
  PathMappingSet: PathMapping[];
}

/** 服务绑定使用计划列表 */
declare interface ServiceUsagePlanSet {
  /** 服务上绑定的使用计划总数。 */
  TotalCount: number | null;
  /** 服务上绑定的使用计划列表。 */
  ServiceUsagePlanList: ApiUsagePlan[] | null;
}

/** 服务列表展示 */
declare interface ServicesStatus {
  /** 服务列表总数。 */
  TotalCount: number | null;
  /** 服务列表详情。 */
  ServiceSet: Service[] | null;
}

/** API绑定的标签信息。 */
declare interface Tag {
  /** 标签的 key。 */
  Key: string;
  /** 便签的 value。 */
  Value: string;
}

/** tsf serverless入参 */
declare interface TargetServicesReq {
  /** vm ip */
  VmIp: string;
  /** vpc id */
  VpcId: string;
  /** vm port */
  VmPort: number;
  /** cvm所在宿主机ip */
  HostIp: string;
  /** docker ip */
  DockerIp?: string;
}

/** TsfLoadBalanceConf 出参使用 */
declare interface TsfLoadBalanceConfResp {
  /** 是否开启负载均衡。 */
  IsLoadBalance?: boolean | null;
  /** 负载均衡方式。 */
  Method?: string | null;
  /** 是否开启会话保持。 */
  SessionStickRequired?: boolean | null;
  /** 会话保持超时时间。 */
  SessionStickTimeout?: number | null;
}

/** 后端通道健康检查参数配置 */
declare interface UpstreamHealthChecker {
  /** 标识是否开启主动健康检查。 */
  EnableActiveCheck: boolean;
  /** 标识是否开启被动健康检查。 */
  EnablePassiveCheck: boolean;
  /** 健康检查时，判断为成功请求的 HTTP 状态码。 */
  HealthyHttpStatus: string;
  /** 健康检查时，判断为失败请求的 HTTP 状态码。 */
  UnhealthyHttpStatus: string;
  /** TCP连续错误阈值。0 表示禁用 TCP 检查。取值范围：[0, 254]。 */
  TcpFailureThreshold: number;
  /** 连续超时阈值。0 表示禁用超时检查。取值范围：[0, 254]。 */
  TimeoutThreshold: number;
  /** HTTP连续错误阈值。0 表示禁用HTTP检查。取值范围：[0, 254]。 */
  HttpFailureThreshold: number;
  /** 主动健康检查时探测请求的路径。默认为"/"。 */
  ActiveCheckHttpPath?: string;
  /** 主动健康检查的探测请求超时，单位秒。默认为5秒。 */
  ActiveCheckTimeout?: number;
  /** 主动健康检查的时间间隔，默认5秒。 */
  ActiveCheckInterval?: number;
  /** 主动健康检查时探测请求的的请求头。 */
  ActiveRequestHeader?: UpstreamHealthCheckerReqHeaders[];
  /** 异常节点的状态自动恢复时间，单位秒。当只开启被动检查的话，必须设置为 > 0 的值，否则被动异常节点将无法恢复。默认30秒。 */
  UnhealthyTimeout?: number;
}

/** 后端通道主动健康检查的请求头配置 */
declare interface UpstreamHealthCheckerReqHeaders {
}

/** 后端通道详细信息 */
declare interface UpstreamInfo {
  /** 后端通道唯一ID */
  UpstreamId: string;
  /** 后端通道名字 */
  UpstreamName: string;
  /** 后端通道描述 */
  UpstreamDescription: string;
  /** 后端协议，取值范围：HTTP, HTTPS */
  Scheme: string;
  /** 负载均衡算法，取值范围：ROUND_ROBIN */
  Algorithm: string;
  /** VPC唯一ID */
  UniqVpcId: string;
  /** 请求重试次数 */
  Retries: number;
  /** 后端节点 */
  Nodes: UpstreamNode[];
  /** 创建时间 */
  CreatedTime: string;
  /** 标签 */
  Tags: Tag[] | null;
  /** 健康检查配置 */
  HealthChecker: UpstreamHealthChecker | null;
  /** 后端的类型，取值范围：IP_PORT, K8S */
  UpstreamType: string;
  /** K8S容器服务配置 */
  K8sServices: K8sService[] | null;
  /** 网关转发给后端的Host请求头 */
  UpstreamHost: string | null;
}

/** 后端通道后端节点元数据 */
declare interface UpstreamNode {
  /** IP或域名 */
  Host: string;
  /** 端口[0, 65535] */
  Port: number;
  /** 权重[0, 100], 0为禁用 */
  Weight: number;
  /** CVM实例ID */
  VmInstanceId?: string | null;
  /** 染色标签 */
  Tags?: string[] | null;
  /** 节点健康状态，创建、编辑时不需要传该参数。OFF：关闭，HEALTHY：健康，UNHEALTHY：异常，NO_DATA：数据未上报。目前只支持VPC通道。 */
  Healthy?: string | null;
  /** K8S容器服务名字 */
  ServiceName?: string | null;
  /** K8S命名空间 */
  NameSpace?: string | null;
  /** TKE集群的ID */
  ClusterId?: string | null;
  /** Node的来源，取值范围：K8S */
  Source?: string | null;
  /** API网关内部记录唯一的服务名字 */
  UniqueServiceName?: string | null;
}

/** usagePlan详情 */
declare interface UsagePlan {
  /** 环境名称。 */
  Environment: string;
  /** 使用计划唯一ID。 */
  UsagePlanId: string;
  /** 使用计划名称。 */
  UsagePlanName: string;
  /** 使用计划描述。 */
  UsagePlanDesc: string | null;
  /** 使用计划qps，-1表示没有限制。 */
  MaxRequestNumPreSec: number;
  /** 使用计划时间。 */
  CreatedTime: string;
  /** 使用计划修改时间。 */
  ModifiedTime: string;
}

/** 使用计划绑定环境信息 */
declare interface UsagePlanBindEnvironment {
  /** 环境名。 */
  EnvironmentName: string | null;
  /** 服务唯一ID。 */
  ServiceId: string | null;
}

/** 使用计划绑定密钥 */
declare interface UsagePlanBindSecret {
  /** 密钥ID。 */
  AccessKeyId: string | null;
  /** 密钥名称。 */
  SecretName: string | null;
  /** 密钥状态，0表示已禁用，1表示启用中。 */
  Status: number | null;
}

/** 使用计划绑定密钥列表 */
declare interface UsagePlanBindSecretStatus {
  /** 使用计划绑定密钥的数量。 */
  TotalCount: number | null;
  /** 密钥详情列表。 */
  AccessKeyList: UsagePlanBindSecret[] | null;
}

/** 使用计划绑定环境详情。 */
declare interface UsagePlanEnvironment {
  /** 绑定的服务唯一 ID。 */
  ServiceId: string | null;
  /** API 的唯一ID。 */
  ApiId: string | null;
  /** API 的名称。 */
  ApiName: string | null;
  /** API 的路径。 */
  Path: string | null;
  /** API 的方法。 */
  Method: string | null;
  /** 已经绑定的环境名称。 */
  Environment: string | null;
  /** 已经使用的配额。 */
  InUseRequestNum: number | null;
  /** 最大请求量。 */
  MaxRequestNum: number | null;
  /** 每秒最大请求次数。 */
  MaxRequestNumPreSec: number | null;
  /** 创建时间。按照 ISO8601 标准表示，并且使用 UTC 时间。格式为：YYYY-MM-DDThh:mm:ssZ。 */
  CreatedTime: string | null;
  /** 最后修改时间。按照 ISO8601 标准表示，并且使用 UTC 时间。格式为：YYYY-MM-DDThh:mm:ssZ。 */
  ModifiedTime: string | null;
  /** 服务名称。 */
  ServiceName: string | null;
}

/** 使用计划绑定环境的列表。 */
declare interface UsagePlanEnvironmentStatus {
  /** 使用计划绑定的服务的环境数。 */
  TotalCount: number | null;
  /** 使用计划已经绑定的各个服务的环境状态。 */
  EnvironmentList: UsagePlanEnvironment[] | null;
}

/** 使用计划详情。 */
declare interface UsagePlanInfo {
  /** 使用计划唯一 ID。 */
  UsagePlanId?: string | null;
  /** 使用计划名称。 */
  UsagePlanName?: string | null;
  /** 使用计划描述。 */
  UsagePlanDesc?: string | null;
  /** 每秒请求限制数。 */
  MaxRequestNumPreSec?: number | null;
  /** 最大调用次数。 */
  MaxRequestNum?: number | null;
  /** 创建时间。按照 ISO8601 标准表示，并且使用 UTC 时间。格式为：YYYY-MM-DDThh:mm:ssZ。 */
  CreatedTime?: string | null;
  /** 最后修改时间。按照 ISO8601 标准表示，并且使用 UTC 时间。格式为：YYYY-MM-DDThh:mm:ssZ。 */
  ModifiedTime?: string | null;
  /** 绑定密钥的数量。 */
  BindSecretIdTotalCount?: number | null;
  /** 绑定密钥的详情。 */
  BindSecretIds?: string[] | null;
  /** 绑定环境数量。 */
  BindEnvironmentTotalCount?: number | null;
  /** 绑定环境详情。 */
  BindEnvironments?: UsagePlanBindEnvironment[] | null;
  /** 标签 */
  Tags?: Tag[] | null;
}

/** 用于使用计划列表展示 */
declare interface UsagePlanStatusInfo {
  /** 使用计划唯一 ID。 */
  UsagePlanId?: string | null;
  /** 用户自定义的使用计划名称。 */
  UsagePlanName?: string | null;
  /** 用户自定义的使用计划描述。 */
  UsagePlanDesc?: string | null;
  /** 每秒最大请求次数。 */
  MaxRequestNumPreSec?: number | null;
  /** 请求配额总量，-1表示没有限制。 */
  MaxRequestNum?: number | null;
  /** 创建时间。按照 ISO8601 标准表示，并且使用 UTC 时间。格式为：YYYY-MM-DDThh:mm:ssZ。 */
  CreatedTime?: string | null;
  /** 最后修改时间。按照 ISO8601 标准表示，并且使用 UTC 时间。格式为：YYYY-MM-DDThh:mm:ssZ。 */
  ModifiedTime?: string | null;
  /** 标签 */
  Tags?: Tag[] | null;
}

/** 使用计划列表 */
declare interface UsagePlansStatus {
  /** 符合条件的使用计划数量。 */
  TotalCount: number | null;
  /** 使用计划列表。 */
  UsagePlanStatusSet: UsagePlanStatusInfo[] | null;
}

/** 独享实例vpc配置信息 */
declare interface VpcConfig {
  /** vpcid */
  UniqVpcId: string;
  /** subnetid */
  UniqSubnetId: string;
}

declare interface AttachPluginRequest {
  /** 绑定的API网关插件ID。 */
  PluginId: string;
  /** 要操作的服务ID。 */
  ServiceId: string;
  /** 要操作API的环境。 */
  EnvironmentName: string;
  /** 要绑定的API列表。 */
  ApiIds: string[];
}

declare interface AttachPluginResponse {
  /** 绑定操作是否成功。 */
  Result?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BindApiAppRequest {
  /** 待绑定的应用唯一 ID 。 */
  ApiAppId: string;
  /** 待绑定的环境。 */
  Environment: string;
  /** 待绑定的服务唯一 ID。 */
  ServiceId: string;
  /** 待绑定的API唯一ID。 */
  ApiId: string;
}

declare interface BindApiAppResponse {
  /** 绑定操作是否成功。 */
  Result: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BindEnvironmentRequest {
  /** 待绑定的使用计划唯一 ID 列表。 */
  UsagePlanIds: string[];
  /** 绑定类型，取值为API、SERVICE，默认值为SERVICE。 */
  BindType: string;
  /** 待绑定的环境。 */
  Environment: string;
  /** 待绑定的服务唯一 ID。 */
  ServiceId: string;
  /** API唯一ID数组，当bindType=API时，需要传入此参数。 */
  ApiIds?: string[];
}

declare interface BindEnvironmentResponse {
  /** 绑定操作是否成功。 */
  Result: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BindIPStrategyRequest {
  /** 待绑定的IP策略所属的服务唯一ID。 */
  ServiceId: string;
  /** 待绑定的IP策略唯一ID。 */
  StrategyId: string;
  /** IP策略待绑定的环境。 */
  EnvironmentName: string;
  /** IP策略待绑定的API列表。 */
  BindApiIds: string[];
}

declare interface BindIPStrategyResponse {
  /** 绑定操作是否成功。 */
  Result: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BindSecretIdsRequest {
  /** 待绑定的使用计划唯一 ID。 */
  UsagePlanId: string;
  /** 待绑定的密钥 ID 数组。 */
  AccessKeyIds: string[];
}

declare interface BindSecretIdsResponse {
  /** 绑定操作是否成功。 */
  Result?: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BindSubDomainRequest {
  /** 服务唯一 ID。 */
  ServiceId: string;
  /** 待绑定的自定义的域名。 */
  SubDomain: string;
  /** 服务支持协议，可选值为http、https、http&https。 */
  Protocol: string;
  /** 网络类型，可选值为OUTER、INNER。 */
  NetType: string;
  /** 是否使用默认路径映射，默认为 true。为 false 时，表示自定义路径映射，此时 PathMappingSet 必填。 */
  IsDefaultMapping: boolean;
  /** 默认域名。 */
  NetSubDomain: string;
  /** 待绑定自定义域名的证书唯一 ID。针对Protocol 为https或http&https可以选择上传。 */
  CertificateId?: string;
  /** 自定义域名路径映射，最多输入三个Environment，并且只能分别取值“test”、 ”prepub“、”release“。 */
  PathMappingSet?: PathMapping[];
  /** 是否将HTTP请求强制跳转 HTTPS，默认为false。参数为 true时，API网关会将所有使用该自定义域名的 HTTP 协议的请求重定向至 HTTPS 协议进行转发。 */
  IsForcedHttps?: boolean;
}

declare interface BindSubDomainResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BuildAPIDocRequest {
  /** API文档ID */
  ApiDocId: string;
}

declare interface BuildAPIDocResponse {
  /** 操作是否成功 */
  Result: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateAPIDocRequest {
  /** API文档名称 */
  ApiDocName: string;
  /** 服务名称 */
  ServiceId: string;
  /** 环境名称 */
  Environment: string;
  /** 生成文档的API列表 */
  ApiIds: string[];
  /** 标签 */
  Tags?: Tag[];
}

declare interface CreateAPIDocResponse {
  /** API文档基本信息 */
  Result?: APIDoc;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateApiAppRequest {
  /** 用户自定义应用名称。 */
  ApiAppName: string;
  /** 应用描述 */
  ApiAppDesc?: string;
}

declare interface CreateApiAppResponse {
  /** 新增的应用详情。 */
  Result?: ApiAppInfo | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateApiKeyRequest {
  /** 用户自定义密钥名称。 */
  SecretName: string;
  /** 密钥类型，支持 auto 和 manual（自定义密钥），默认为 auto。 */
  AccessKeyType?: string;
  /** 用户自定义密钥 ID，AccessKeyType 为 manual 时必传。长度为5 - 50字符，由字母、数字、英文下划线组成。 */
  AccessKeyId?: string;
  /** 用户自定义密钥 Key，AccessKeyType 为 manual 时必传。长度为10 - 50字符，由字母、数字、英文下划线。 */
  AccessKeySecret?: string;
  /** 标签 */
  Tags?: Tag[];
}

declare interface CreateApiKeyResponse {
  /** 新增的密钥详情。 */
  Result?: ApiKey | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateApiRequest {
  /** API 所在的服务唯一 ID。 */
  ServiceId: string;
  /** API 的后端服务类型。支持HTTP、MOCK、TSF、SCF、EB、TARGET、VPC、UPSTREAM、GRPC、COS、WEBSOCKET。 */
  ServiceType: string;
  /** API 的后端服务超时时间，单位是秒。 */
  ServiceTimeout: number;
  /** API 的前端请求协议，支持HTTP和WEBSOCKET。 */
  Protocol: string;
  /** 请求的前端配置。 */
  RequestConfig: ApiRequestConfig;
  /** 用户自定义的 API 名称。 */
  ApiName?: string;
  /** 用户自定义的 API 接口描述。 */
  ApiDesc?: string;
  /** API 类型，支持NORMAL（普通API）和TSF（微服务API），默认为NORMAL。 */
  ApiType?: string;
  /** API 鉴权类型。支持SECRET（密钥对鉴权）、NONE（免鉴权）、OAUTH、APP（应用认证）。默认为NONE。 */
  AuthType?: string;
  /** 是否开启跨域。 */
  EnableCORS?: boolean;
  /** 常量参数。 */
  ConstantParameters?: ConstantParameter[];
  /** 前端请求参数。 */
  RequestParameters?: RequestParameter[];
  /** 当AuthType 为 OAUTH时，该字段有效， NORMAL：业务api OAUTH：授权API。 */
  ApiBusinessType?: string;
  /** API 的后端 Mock 返回信息。如果 ServiceType 是 Mock，则此参数必传。 */
  ServiceMockReturnMessage?: string;
  /** API绑定微服务列表。 */
  MicroServices?: MicroServiceReq[];
  /** 微服务的负载均衡配置。 */
  ServiceTsfLoadBalanceConf?: TsfLoadBalanceConfResp;
  /** 微服务的健康检查配置。 */
  ServiceTsfHealthCheckConf?: HealthCheckConf;
  /** target类型后端资源信息。（内测阶段） */
  TargetServices?: TargetServicesReq[];
  /** target类型负载均衡配置。（内测阶段） */
  TargetServicesLoadBalanceConf?: number;
  /** target健康检查配置。（内测阶段） */
  TargetServicesHealthCheckConf?: HealthCheckConf;
  /** scf 函数名称。当后端类型是SCF时生效。 */
  ServiceScfFunctionName?: string;
  /** scf websocket注册函数。当前端类型是WEBSOCKET且后端类型是SCF时生效。 */
  ServiceWebsocketRegisterFunctionName?: string;
  /** scf websocket清理函数。当前端类型是WEBSOCKET且后端类型是SCF时生效。 */
  ServiceWebsocketCleanupFunctionName?: string;
  /** scf websocket传输函数。当前端类型是WEBSOCKET且后端类型是SCF时生效。 */
  ServiceWebsocketTransportFunctionName?: string;
  /** scf 函数命名空间。当后端类型是SCF时生效。 */
  ServiceScfFunctionNamespace?: string;
  /** scf函数版本。当后端类型是SCF时生效。 */
  ServiceScfFunctionQualifier?: string;
  /** scf websocket注册函数命名空间。当前端类型是WEBSOCKET且后端类型是SCF时生效。 */
  ServiceWebsocketRegisterFunctionNamespace?: string;
  /** scf websocket传输函数版本。当前端类型是WEBSOCKET且后端类型是SCF时生效。 */
  ServiceWebsocketRegisterFunctionQualifier?: string;
  /** scf websocket传输函数命名空间。当前端类型是WEBSOCKET且后端类型是SCF时生效。 */
  ServiceWebsocketTransportFunctionNamespace?: string;
  /** scf websocket传输函数版本。当前端类型是WEBSOCKET且后端类型是SCF时生效。 */
  ServiceWebsocketTransportFunctionQualifier?: string;
  /** scf websocket清理函数命名空间。当前端类型是WEBSOCKET且后端类型是SCF时生效。 */
  ServiceWebsocketCleanupFunctionNamespace?: string;
  /** scf websocket清理函数版本。当前端类型是WEBSOCKET且后端类型是SCF时生效。 */
  ServiceWebsocketCleanupFunctionQualifier?: string;
  /** 是否开启响应集成。当后端类型是SCF时生效。 */
  ServiceScfIsIntegratedResponse?: boolean;
  /** 开始调试后计费。（云市场预留字段） */
  IsDebugAfterCharge?: boolean;
  /** 是否删除自定义响应配置错误码，如果不传或者传 False，不删除，当传 True 时，则删除此 API 所有自定义响应配置错误码。 */
  IsDeleteResponseErrorCodes?: boolean;
  /** 返回类型。 */
  ResponseType?: string;
  /** 自定义响应配置成功响应示例。 */
  ResponseSuccessExample?: string;
  /** 自定义响应配置失败响应示例。 */
  ResponseFailExample?: string;
  /** API 的后端服务配置。 */
  ServiceConfig?: ServiceConfig;
  /** 关联的授权API 唯一 ID，当AuthType为OAUTH且ApiBusinessType为NORMAL时生效。标示业务API绑定的oauth2.0授权API唯一ID。 */
  AuthRelationApiId?: string;
  /** API的后端服务参数。 */
  ServiceParameters?: ServiceParameter[];
  /** oauth配置。当AuthType是OAUTH时生效。 */
  OauthConfig?: OauthConfig;
  /** 用户自定义错误码配置。 */
  ResponseErrorCodes?: ResponseErrorCodeReq[];
  /** tsf serverless 命名空间ID。（内测中） */
  TargetNamespaceId?: string;
  /** 用户类型。 */
  UserType?: string;
  /** 是否打开Base64编码，只有后端是scf时才会生效。 */
  IsBase64Encoded?: boolean;
  /** 事件总线ID。 */
  EventBusId?: string;
  /** scf函数类型。当后端类型是SCF时生效。支持事件触发(EVENT)，http直通云函数(HTTP)。 */
  ServiceScfFunctionType?: string;
  /** 是否开启SCF Event异步调用。 */
  ServiceScfEventIsAsyncCall?: boolean;
  /** EIAM应用类型。 */
  EIAMAppType?: string;
  /** EIAM应用认证类型，支持仅认证（AuthenticationOnly）、认证和鉴权（Authorization）。 */
  EIAMAuthType?: string;
  /** EIAM应用Token 有效时间，单位为秒，默认为7200秒。 */
  TokenTimeout?: number;
  /** EIAM应用ID。 */
  EIAMAppId?: string;
  /** 资源的Owner */
  Owner?: string;
}

declare interface CreateApiResponse {
  /** api信息 */
  Result?: CreateApiResultInfo | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateIPStrategyRequest {
  /** 服务的唯一ID。 */
  ServiceId: string;
  /** 用户自定义的策略名称。 */
  StrategyName: string;
  /** 策略类型。支持WHITE（白名单）和BLACK（黑名单）。 */
  StrategyType: string;
  /** 策略详情，多个ip 使用\n 分隔符分开。 */
  StrategyData: string;
}

declare interface CreateIPStrategyResponse {
  /** 新建的IP策略详情。 */
  Result?: IPStrategy | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreatePluginRequest {
  /** 用户自定义的插件名称。最长50个字符，最短2个字符，支持 a-z,A-Z,0-9,_, 必须字母开头，字母或者数字结尾。 */
  PluginName: string;
  /** 插件类型。目前支持IPControl, TrafficControl, Cors, CustomReq, CustomAuth，Routing，TrafficControlByParameter, CircuitBreaker, ProxyCache。 */
  PluginType: string;
  /** 插件定义语句，支持json。 */
  PluginData: string;
  /** 插件描述，限定200字以内。 */
  Description?: string;
  /** 标签 */
  Tags?: Tag[];
}

declare interface CreatePluginResponse {
  /** 新建的插件详情。 */
  Result: Plugin;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateServiceRequest {
  /** 用户自定义的服务名称。 */
  ServiceName: string;
  /** 服务的前端请求类型。如 http、https、http&https。 */
  Protocol: string;
  /** 用户自定义的服务描述。 */
  ServiceDesc?: string;
  /** 网络类型列表，用于指定支持的访问类型，INNER为内网访问，OUTER为外网访问。默认为OUTER。 */
  NetTypes?: string[];
  /** IP版本号，仅支持IPv4。 */
  IpVersion?: string;
  /** 集群名称。保留字段，tsf serverless类型使用。 */
  SetServerName?: string;
  /** 用户类型。保留类型，serverless用户使用。 */
  AppIdType?: string;
  /** 标签。 */
  Tags?: Tag[];
  /** 独享实例id */
  InstanceId?: string;
  /** vpc属性，选择VPC后不可修改，为服务选择VPC后，可对接该VPC下的后端资源 */
  UniqVpcId?: string;
}

declare interface CreateServiceResponse {
  /** 服务唯一ID。 */
  ServiceId?: string;
  /** 用户自定义服务名称。 */
  ServiceName?: string;
  /** 用户自定义服务描述。 */
  ServiceDesc?: string;
  /** 外网默认域名。 */
  OuterSubDomain?: string;
  /** vpc内网默认域名。 */
  InnerSubDomain?: string;
  /** 服务创建时间。按照 ISO8601 标准表示，并且使用 UTC 时间。格式为：YYYY-MM-DDThh:mm:ssZ。 */
  CreatedTime?: string;
  /** 网络类型列表，INNER为内网访问，OUTER为外网访问。 */
  NetTypes?: string[];
  /** IP版本号。 */
  IpVersion?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateUpstreamRequest {
  /** 后端协议，取值范围：HTTP, HTTPS,gRPC，gRPCs */
  Scheme: string;
  /** 负载均衡算法，取值范围：ROUND-ROBIN */
  Algorithm: string;
  /** VPC唯一ID */
  UniqVpcId: string;
  /** 后端通道名字 */
  UpstreamName?: string;
  /** 后端通道描述 */
  UpstreamDescription?: string;
  /** 后端访问类型，取值范围：IP_PORT, K8S */
  UpstreamType?: string;
  /** 请求重试次数，默认3次 */
  Retries?: number;
  /** 网关转发到后端的Host请求头 */
  UpstreamHost?: string;
  /** 后端节点 */
  Nodes?: UpstreamNode[];
  /** 标签 */
  Tags?: Tag[];
  /** 健康检查配置，目前只支持VPC通道 */
  HealthChecker?: UpstreamHealthChecker;
  /** K8S容器服务的配置 */
  K8sService?: K8sService[];
}

declare interface CreateUpstreamResponse {
  /** 创建返回的唯一ID */
  UpstreamId?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateUsagePlanRequest {
  /** 用户自定义的使用计划名称。 */
  UsagePlanName: string;
  /** 用户自定义的使用计划描述。 */
  UsagePlanDesc?: string;
  /** 请求配额总数，取值范围为-1或者[1, 99999999]，默认为-1，表示不开启。 */
  MaxRequestNum?: number;
  /** 每秒请求限制数，取值范围为-1或者[1, 2000]，默认-1，表示不开启。 */
  MaxRequestNumPreSec?: number;
  /** 标签 */
  Tags?: Tag[];
}

declare interface CreateUsagePlanResponse {
  /** 使用计划详情。 */
  Result?: UsagePlanInfo | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteAPIDocRequest {
  /** API文档ID */
  ApiDocId: string;
}

declare interface DeleteAPIDocResponse {
  /** 操作是否成功 */
  Result: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteApiAppRequest {
  /** 应用唯一 ID。 */
  ApiAppId: string;
}

declare interface DeleteApiAppResponse {
  /** 删除操作是否成功。 */
  Result: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteApiKeyRequest {
  /** 待删除的密钥 ID。 */
  AccessKeyId: string;
}

declare interface DeleteApiKeyResponse {
  /** 删除操作是否成功。 */
  Result?: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteApiRequest {
  /** API 所在的服务唯一 ID。 */
  ServiceId: string;
  /** API 接口唯一 ID。 */
  ApiId: string;
}

declare interface DeleteApiResponse {
  /** 删除操作是否成功。 */
  Result: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteIPStrategyRequest {
  /** 待删除的IP策略所属的服务唯一ID。 */
  ServiceId: string;
  /** 待删除的IP策略唯一ID。 */
  StrategyId: string;
}

declare interface DeleteIPStrategyResponse {
  /** 删除操作是否成功。 */
  Result: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeletePluginRequest {
  /** 要删除的API网关插件的ID。 */
  PluginId: string;
}

declare interface DeletePluginResponse {
  /** 删除操作是否成功。 */
  Result: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteServiceRequest {
  /** 待删除服务的唯一 ID。 */
  ServiceId: string;
  /** 跳过删除前置条件校验（仅支持独享实例上的服务） */
  SkipVerification?: number;
}

declare interface DeleteServiceResponse {
  /** 删除操作是否成功。 */
  Result?: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteServiceSubDomainMappingRequest {
  /** 服务唯一 ID。 */
  ServiceId: string;
  /** 服务绑定的自定义域名。 */
  SubDomain: string;
  /** 待删除映射的环境名称，当前支持三个环境，test（测试环境）、prepub（预发布环境）和 release（发布环境）。 */
  Environment: string;
}

declare interface DeleteServiceSubDomainMappingResponse {
  /** 删除自定义域名的路径映射操作是否成功。 */
  Result?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteUpstreamRequest {
  /** 待删除的后端通道ID */
  UpstreamId: string;
}

declare interface DeleteUpstreamResponse {
  /** 成功删除的后端通道ID */
  UpstreamId: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteUsagePlanRequest {
  /** 待删除的使用计划唯一 ID。 */
  UsagePlanId: string;
}

declare interface DeleteUsagePlanResponse {
  /** 删除操作是否成功。 */
  Result: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DemoteServiceUsagePlanRequest {
  /** 使用计划ID。 */
  UsagePlanId: string;
  /** 待降级的服务唯一 ID。 */
  ServiceId: string;
  /** 环境名称。 */
  Environment: string;
}

declare interface DemoteServiceUsagePlanResponse {
  /** 降级操作是否成功。 */
  Result: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAPIDocDetailRequest {
  /** API文档ID */
  ApiDocId: string;
}

declare interface DescribeAPIDocDetailResponse {
  /** API文档详细信息 */
  Result: APIDocInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAPIDocsRequest {
  /** 返回数量，默认为 20，最大值为 100。 */
  Limit?: number;
  /** 偏移量，默认为 0。 */
  Offset?: number;
}

declare interface DescribeAPIDocsResponse {
  /** API文档列表信息 */
  Result: APIDocs;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAllPluginApisRequest {
  /** 要查询的服务ID。 */
  ServiceId: string;
  /** 要查询的插件ID。 */
  PluginId: string;
  /** 环境信息。 */
  EnvironmentName: string;
  /** 返回数量，默认为 20，最大值为 100。 */
  Limit?: number;
  /** 偏移量，默认为 0。 */
  Offset?: number;
}

declare interface DescribeAllPluginApisResponse {
  /** 插件相关API的列表。 */
  Result: ApiInfoSummary;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeApiAppBindApisStatusRequest {
  /** 应用ID */
  ApiAppId: string;
  /** 返回数量，默认为 20，最大值为 100。 */
  Limit?: number;
  /** 偏移量，默认为 0。 */
  Offset?: number;
  /** 过滤条件。支持ApiId、ApiName、ServiceId、Environment 、KeyWord（ 可以匹配name或者ID）。 */
  Filters?: Filter[];
}

declare interface DescribeApiAppBindApisStatusResponse {
  /** 应用绑定的Api列表。 */
  Result: ApiAppApiInfos | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeApiAppRequest {
  /** 应用ID。 */
  ApiAppId: string;
}

declare interface DescribeApiAppResponse {
  /** 应用详情。 */
  Result?: ApiAppInfos | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeApiAppsStatusRequest {
  /** 返回数量，默认为 20，最大值为 100。 */
  Limit?: number;
  /** 偏移量，默认为 0。 */
  Offset?: number;
  /** 过滤条件。支持ApiAppId、ApiAppName、KeyWord（ 可以匹配name或者ID）。 */
  Filters?: Filter[];
}

declare interface DescribeApiAppsStatusResponse {
  /** 应用列表。 */
  Result?: ApiAppInfos | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeApiBindApiAppsStatusRequest {
  /** 服务ID */
  ServiceId: string;
  /** Api的ID的数组 */
  ApiIds: string[];
  /** 返回数量，默认为 20，最大值为 100。 */
  Limit?: number;
  /** 偏移量，默认为 0。 */
  Offset?: number;
  /** 过滤条件。支持ApiAppId、Environment、KeyWord（ 可以匹配name或者ID）。 */
  Filters?: Filter[];
}

declare interface DescribeApiBindApiAppsStatusResponse {
  /** 应用绑定的Api列表。 */
  Result: ApiAppApiInfos | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeApiEnvironmentStrategyRequest {
  /** API所属服务唯一ID。 */
  ServiceId: string;
  /** 环境列表。 */
  EnvironmentNames?: string[];
  /** API唯一ID。 */
  ApiId?: string;
  /** 返回数量，默认为 20，最大值为 100。 */
  Limit?: number;
  /** 偏移量，默认为 0。 */
  Offset?: number;
}

declare interface DescribeApiEnvironmentStrategyResponse {
  /** api绑定策略详情 */
  Result?: ApiEnvironmentStrategyStatus | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeApiForApiAppRequest {
  /** API 所在的服务唯一 ID。 */
  ServiceId: string;
  /** API 接口唯一 ID。 */
  ApiId: string;
  /** Api所属地域 */
  ApiRegion: string;
}

declare interface DescribeApiForApiAppResponse {
  /** API 详情。 */
  Result: ApiInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeApiKeyRequest {
  /** API 密钥 ID。 */
  AccessKeyId: string;
}

declare interface DescribeApiKeyResponse {
  /** 密钥详情。 */
  Result?: ApiKey | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeApiKeysStatusRequest {
  /** 返回数量，默认为 20，最大值为 100。 */
  Limit?: number;
  /** 偏移量，默认为 0。 */
  Offset?: number;
  /** 过滤条件。支持AccessKeyId、AccessKeySecret、SecretName、NotUsagePlanId、Status、KeyWord（ 可以匹配name或者path）。 */
  Filters?: Filter[];
}

declare interface DescribeApiKeysStatusResponse {
  /** 密钥列表。 */
  Result?: ApiKeysStatus | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeApiRequest {
  /** API 所在的服务唯一 ID。 */
  ServiceId: string;
  /** API 接口唯一 ID。 */
  ApiId: string;
}

declare interface DescribeApiResponse {
  /** API 详情。 */
  Result: ApiInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeApiUsagePlanRequest {
  /** 待查询的服务唯一 ID。 */
  ServiceId: string;
  /** 返回数量，默认为 20，最大值为 100。 */
  Limit?: number;
  /** 偏移量，默认为 0。 */
  Offset?: number;
}

declare interface DescribeApiUsagePlanResponse {
  /** api绑定使用计划列表。 */
  Result: ApiUsagePlanSet | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeApisStatusRequest {
  /** API 所在的服务唯一 ID。 */
  ServiceId: string;
  /** 偏移量，默认为 0。 */
  Offset?: number;
  /** 返回数量，默认为 20，最大值为 100 */
  Limit?: number;
  /** API过滤条件。支持ApiId、ApiName、ApiPath、ApiType、AuthRelationApiId、AuthType、ApiBuniessType、NotUsagePlanId、 Environment、Tags (values为 $tag_key:tag_value的列表)、TagKeys （values 为 tag key的列表），其中NotUsagePlanId和Environment必须同时使用，不能单独使用一个。 */
  Filters?: Filter[];
}

declare interface DescribeApisStatusResponse {
  /** API 详情列表。 */
  Result?: DescribeApisStatusResultInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeExclusiveInstanceDetailRequest {
  /** 独享实例唯一id */
  InstanceId: string;
}

declare interface DescribeExclusiveInstanceDetailResponse {
  /** 独享实例详情 */
  Result?: InstanceDetail;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeExclusiveInstanceRegionsRequest {
}

declare interface DescribeExclusiveInstanceRegionsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeExclusiveInstancesRequest {
  /** 分页查询，limit */
  Limit: number;
  /** 分页查询，offset */
  Offset: number;
  /** 过滤条件 */
  Filters?: Filter[];
}

declare interface DescribeExclusiveInstancesResponse {
  /** 独享实例列表查询结果 */
  Result?: DescribeExclusiveInstancesResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeExclusiveInstancesStatusRequest {
  /** 分页查询，limit */
  Limit: number;
  /** 分页查询，offset */
  Offset: number;
  /** 过滤条件 */
  Filters?: Filter[];
}

declare interface DescribeExclusiveInstancesStatusResponse {
  /** 独享实例列表查询结果 */
  Result?: InstanceSummary;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeIPStrategyApisStatusRequest {
  /** 服务唯一ID。 */
  ServiceId: string;
  /** 策略唯一ID。 */
  StrategyId: string;
  /** 策略所在环境。 */
  EnvironmentName: string;
  /** 返回数量，默认为 20，最大值为 100。 */
  Limit?: number;
  /** 偏移量，默认为 0。 */
  Offset?: number;
  /** 过滤条件。支持 ApiPath、ApiName、KeyWord（模糊查询Path 和Name）。 */
  Filters?: Filter[];
}

declare interface DescribeIPStrategyApisStatusResponse {
  /** 环境绑定API列表。 */
  Result: IPStrategyApiStatus | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeIPStrategyRequest {
  /** 服务唯一ID。 */
  ServiceId: string;
  /** IP 策略唯一ID。 */
  StrategyId: string;
  /** 策略关联的环境。 */
  EnvironmentName?: string;
  /** 返回数量，默认为 20，最大值为 100。 */
  Limit?: number;
  /** 偏移量，默认为 0。 */
  Offset?: number;
  /** 过滤条件。预留字段，目前不支持过滤。 */
  Filters?: Filter[];
}

declare interface DescribeIPStrategyResponse {
  /** IP策略详情。 */
  Result: IPStrategy | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeIPStrategysStatusRequest {
  /** 服务唯一ID。 */
  ServiceId: string;
  /** 过滤条件。支持StrategyName。 */
  Filters?: Filter[];
}

declare interface DescribeIPStrategysStatusResponse {
  /** 符合条件的策略列表。 */
  Result?: IPStrategiesStatus | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLogSearchRequest {
  /** 日志开始时间 */
  StartTime: string;
  /** 日志结束时间 */
  EndTime: string;
  /** 服务id */
  ServiceId: string;
  /** 保留字段 */
  Filters?: Filter[];
  /** 单次要返回的日志条数，单次返回的最大条数为100 */
  Limit?: number;
  /** 根据上次返回的ConText，获取后续的内容，最多可获取10000条 */
  ConText?: string;
  /** 按时间排序 asc（升序）或者 desc（降序），默认为 desc */
  Sort?: string;
  /** 保留字段 */
  Query?: string;
  /** 检索条件,支持的检索条件如下：req_id：“=”api_id：“=”cip：“=”uip：“:”err_msg：“:”rsp_st：“=” 、“!=” 、 “:” 、 “>” 、 “<”req_t：”>=“ 、 ”<=“说明：“:”表示包含，“!=”表示不等于，字段含义见输出参数的LogSet说明 */
  LogQuerys?: LogQuery[];
}

declare interface DescribeLogSearchResponse {
  /** 获取更多检索结果的游标，值为""表示无后续结果 */
  ConText?: string;
  /** 由0或多条日志组成，每条日志格式如下：'[$app_id][$env_name][$service_id][$http_host][$api_id][$uri][$scheme][rsp_st:$status][ups_st:$upstream_status]''[cip:$remote_addr][uip:$upstream_addr][vip:$server_addr][rsp_len:$bytes_sent][req_len:$request_length]''[req_t:$request_time][ups_rsp_t:$upstream_response_time][ups_conn_t:$upstream_connect_time][ups_head_t:$upstream_header_time]’'[err_msg:$err_msg][tcp_rtt:$tcpinfo_rtt][$pid][$time_local][req_id:$request_id]';说明：app_id： 用户 ID。env_name：环境名称。service_id： 服务 ID。http_host： 域名。api_id： API 的 ID。uri：请求的路径。scheme： HTTP/HTTPS 协议。rsp_st： 请求响应状态码。ups_st： 后端业务服务器的响应状态码（如果请求透传到后端，改变量不为空。如果请求在 APIGW 就被拦截了，那么该变量显示为 -）。cip： 客户端 IP。uip： 后端业务服务（upstream）的 IP。vip： 请求访问的 VIP。rsp_len： 响应长度。req_len： 请求长度。req_t： 请求响应的总时间。ups_rsp_t： 后端响应的总时间（apigw 建立连接到接收到后端响应的时间）。ups_conn_t: 与后端业务服务器连接建立成功时间。ups_head_t：后端响应的头部到达时间。err_msg： 错误信息。tcp_rtt： 客户端 TCP 连接信息，RTT（Round Trip Time）由三部分组成：链路的传播时间（propagation delay）、末端系统的处理时间、路由器缓存中的排队和处理时间（queuing delay）。req_id：请求id。 */
  LogSet?: string[];
  /** 单次搜索返回的日志条数，TotalCount <= Limit */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePluginApisRequest {
  /** 查询的插件ID。 */
  PluginId: string;
  /** 返回数量，默认为 20，最大值为 100。 */
  Limit?: number;
  /** 偏移量，默认为 0。 */
  Offset?: number;
}

declare interface DescribePluginApisResponse {
  /** 插件绑定的API列表信息。 */
  Result: AttachedApiSummary;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePluginRequest {
  /** 要查询的插件ID。 */
  PluginId: string;
  /** 返回数量，默认为 20，最大值为 100。 */
  Limit?: number;
  /** 偏移量，默认为 0。 */
  Offset?: number;
}

declare interface DescribePluginResponse {
  /** 插件详情。 */
  Result: Plugin;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePluginsByApiRequest {
  /** 要查询的API ID。 */
  ApiId: string;
  /** 要查询的服务ID。 */
  ServiceId: string;
  /** 环境信息。 */
  EnvironmentName?: string;
  /** 返回数量，默认为 20，最大值为 100。 */
  Limit?: number;
  /** 偏移量，默认为 0。 */
  Offset?: number;
}

declare interface DescribePluginsByApiResponse {
  /** 插件可绑定的API列表信息。 */
  Result: AttachedPluginSummary;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePluginsRequest {
  /** 要查询的插件列表。 */
  PluginIds?: string[];
  /** 要查询的插件名称。 */
  PluginName?: string;
  /** 要查询的插件类型。 */
  PluginType?: string;
  /** 返回数量，默认为 20，最大值为 100。 */
  Limit?: number;
  /** 偏移量，默认为 0。 */
  Offset?: number;
  /** 过滤条件。预留字段，目前不支持过滤。 */
  Filters?: Filter[];
}

declare interface DescribePluginsResponse {
  /** 插件详情。 */
  Result: PluginSummary;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeServiceEnvironmentListRequest {
  /** 待查询的服务唯一 ID。 */
  ServiceId: string;
  /** 返回数量，默认为 20，最大值为 100。 */
  Limit?: number;
  /** 偏移量，默认为 0。 */
  Offset?: number;
}

declare interface DescribeServiceEnvironmentListResponse {
  /** 服务绑定环境详情。 */
  Result: ServiceEnvironmentSet | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeServiceEnvironmentReleaseHistoryRequest {
  /** 待查询的服务唯一 ID。 */
  ServiceId: string;
  /** 环境名称。 */
  EnvironmentName?: string;
  /** 返回数量，默认为 20，最大值为 100。 */
  Limit?: number;
  /** 偏移量，默认为 0。 */
  Offset?: number;
}

declare interface DescribeServiceEnvironmentReleaseHistoryResponse {
  /** 服务发布历史。 */
  Result?: ServiceReleaseHistory | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeServiceEnvironmentStrategyRequest {
  /** 服务唯一ID。 */
  ServiceId: string;
  /** 返回数量，默认为 20，最大值为 100。 */
  Limit?: number;
  /** 偏移量，默认为 0。 */
  Offset?: number;
}

declare interface DescribeServiceEnvironmentStrategyResponse {
  /** 限流策略列表。 */
  Result: ServiceEnvironmentStrategyStatus | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeServiceForApiAppRequest {
  /** 待查询的服务唯一 ID。 */
  ServiceId: string;
  /** 服务所属的地域 */
  ApiRegion: string;
}

declare interface DescribeServiceForApiAppResponse {
  /** 服务唯一ID。 */
  ServiceId?: string;
  /** 服务 环境列表。 */
  AvailableEnvironments?: string[] | null;
  /** 服务名称。 */
  ServiceName?: string | null;
  /** 服务描述。 */
  ServiceDesc?: string | null;
  /** 服务支持协议，可选值为http、https、http&https。 */
  Protocol?: string;
  /** 服务创建时间。 */
  CreatedTime?: string | null;
  /** 服务修改时间。 */
  ModifiedTime?: string | null;
  /** 网络类型列表，INNER为内网访问，OUTER为外网访问。 */
  NetTypes?: string[];
  /** 内网访问子域名。 */
  InternalSubDomain?: string;
  /** 外网访问子域名。 */
  OuterSubDomain?: string;
  /** 内网访问http服务端口号。 */
  InnerHttpPort?: number;
  /** 内网访问https端口号。 */
  InnerHttpsPort?: number;
  /** API总数。 */
  ApiTotalCount?: number | null;
  /** API列表。 */
  ApiIdStatusSet?: ApiIdStatus[] | null;
  /** 使用计划总数量。 */
  UsagePlanTotalCount?: number | null;
  /** 使用计划数组。 */
  UsagePlanList?: UsagePlan[] | null;
  /** IP版本。 */
  IpVersion?: string | null;
  /** 此服务的用户类型。 */
  UserType?: string | null;
  /** 预留字段。 */
  SetId?: number | null;
  /** 服务绑定的标签。 */
  Tags?: Tag[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeServiceReleaseVersionRequest {
  /** 待查询的服务唯一 ID。 */
  ServiceId: string;
  /** 返回数量，默认为 20，最大值为 100。 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
}

declare interface DescribeServiceReleaseVersionResponse {
  /** 服务发布版本列表。 */
  Result?: ServiceReleaseVersion | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeServiceRequest {
  /** 待查询的服务唯一 ID。 */
  ServiceId: string;
}

declare interface DescribeServiceResponse {
  /** 服务唯一ID。 */
  ServiceId?: string;
  /** 服务 环境列表。 */
  AvailableEnvironments?: string[];
  /** 服务名称。 */
  ServiceName?: string;
  /** 服务描述。 */
  ServiceDesc?: string | null;
  /** 服务支持协议，可选值为http、https、http&https。 */
  Protocol?: string;
  /** 服务创建时间。 */
  CreatedTime?: string;
  /** 服务修改时间。 */
  ModifiedTime?: string;
  /** 网络类型列表，INNER为内网访问，OUTER为外网访问。 */
  NetTypes?: string[];
  /** 内网访问子域名。 */
  InternalSubDomain?: string;
  /** 外网访问子域名。 */
  OuterSubDomain?: string;
  /** 内网访问http服务端口号。 */
  InnerHttpPort?: number;
  /** 内网访问https端口号。 */
  InnerHttpsPort?: number;
  /** API总数。 */
  ApiTotalCount?: number;
  /** API列表。 */
  ApiIdStatusSet?: ApiIdStatus[] | null;
  /** 使用计划总数量。 */
  UsagePlanTotalCount?: number;
  /** 使用计划数组。 */
  UsagePlanList?: UsagePlan[] | null;
  /** IP版本。 */
  IpVersion?: string | null;
  /** 此服务的用户类型。 */
  UserType?: string | null;
  /** 预留字段。 */
  SetId?: number | null;
  /** 服务绑定的标签。 */
  Tags?: Tag[] | null;
  /** 独享实例id */
  InstanceId?: string | null;
  /** 独享实例name */
  InstanceName?: string | null;
  /** 集群类型 */
  SetType?: string | null;
  /** 服务部署的集群类型 */
  DeploymentType?: string | null;
  /** 特殊用途, NULL和DEFAULT表示无特殊用途，其他用途如HTTP_DNS等 */
  SpecialUse?: string | null;
  /** vpc属性，存量可能为空字符串 */
  UniqVpcId?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeServiceSubDomainMappingsRequest {
  /** 服务唯一 ID。 */
  ServiceId: string;
  /** 服务绑定的自定义域名。 */
  SubDomain: string;
}

declare interface DescribeServiceSubDomainMappingsResponse {
  /** 自定义路径映射列表。 */
  Result: ServiceSubDomainMappings;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeServiceSubDomainsRequest {
  /** 服务唯一 ID。 */
  ServiceId: string;
  /** 返回数量，默认为 20，最大值为 100。 */
  Limit?: number;
  /** 偏移量，默认为 0。 */
  Offset?: number;
}

declare interface DescribeServiceSubDomainsResponse {
  /** 查询服务自定义域名列表。 */
  Result: DomainSets;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeServiceUsagePlanRequest {
  /** 待查询的服务唯一 ID。 */
  ServiceId: string;
  /** 返回数量，默认为20，最大值为100。 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
}

declare interface DescribeServiceUsagePlanResponse {
  /** 服务绑定使用计划列表。 */
  Result: ServiceUsagePlanSet | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeServicesStatusRequest {
  /** 返回数量，默认为 20，最大值为 100。 */
  Limit?: number;
  /** 偏移量，默认为 0。 */
  Offset?: number;
  /** 过滤条件。支持ServiceId、ServiceName、NotUsagePlanId、Environment、IpVersion、InstanceId、NetType、EIAMAppId。 */
  Filters?: Filter[];
}

declare interface DescribeServicesStatusResponse {
  /** 服务列表查询结果。 */
  Result?: ServicesStatus | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeUpstreamBindApisRequest {
  /** 分页大小 */
  Limit: number;
  /** 分页起始位置 */
  Offset: number;
  /** 后端通道ID */
  UpstreamId: string;
  /** ServiceId和ApiId过滤查询 */
  Filters?: Filter[];
}

declare interface DescribeUpstreamBindApisResponse {
  /** 查询结果 */
  Result: DescribeUpstreamBindApis;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeUpstreamsRequest {
  /** 分页大小 */
  Limit: number;
  /** 分页起始位置 */
  Offset: number;
  /** 过滤条件，支持后端通道ID（UpstreamId）、后端通道名字（UpstreamName）过滤查询 */
  Filters?: Filter[];
}

declare interface DescribeUpstreamsResponse {
  /** 查询结果 */
  Result: DescribeUpstreamInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeUsagePlanEnvironmentsRequest {
  /** 待查询的使用计划唯一 ID。 */
  UsagePlanId: string;
  /** 定义类型，取值为 API、SERVICE，默认值为 SERVICE。 */
  BindType: string;
  /** 返回数量，默认为 20，最大值为 100。 */
  Limit?: number;
  /** 偏移量，默认为 0。 */
  Offset?: number;
}

declare interface DescribeUsagePlanEnvironmentsResponse {
  /** 使用计划绑定详情。 */
  Result?: UsagePlanEnvironmentStatus | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeUsagePlanRequest {
  /** 待查询的使用计划唯一 ID。 */
  UsagePlanId: string;
}

declare interface DescribeUsagePlanResponse {
  /** 使用计划详情。 */
  Result: UsagePlanInfo | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeUsagePlanSecretIdsRequest {
  /** 绑定的使用计划唯一 ID。 */
  UsagePlanId: string;
  /** 返回数量，默认为 20，最大值为 100。 */
  Limit?: number;
  /** 偏移量，默认为 0。 */
  Offset?: number;
}

declare interface DescribeUsagePlanSecretIdsResponse {
  /** 使用计划绑定的密钥列表。 */
  Result?: UsagePlanBindSecretStatus | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeUsagePlansStatusRequest {
  /** 返回数量，默认为 20，最大值为 100。 */
  Limit?: number;
  /** 偏移量，默认为 0。 */
  Offset?: number;
  /** 使用计划过滤条件。支持UsagePlanId、UsagePlanName、NotServiceId、NotApiId、Environment。 */
  Filters?: Filter[];
}

declare interface DescribeUsagePlansStatusResponse {
  /** 使用计划列表。 */
  Result: UsagePlansStatus | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DetachPluginRequest {
  /** 要解绑的API网关插件ID。 */
  PluginId: string;
  /** 要操作的服务ID。 */
  ServiceId: string;
  /** 要操作API的环境。 */
  EnvironmentName: string;
  /** 要解绑的API ID。 */
  ApiId: string;
}

declare interface DetachPluginResponse {
  /** 解绑操作是否成功。 */
  Result: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DisableApiKeyRequest {
  /** 待禁用的密钥 ID。 */
  AccessKeyId: string;
}

declare interface DisableApiKeyResponse {
  /** 禁用密钥操作是否成功。 */
  Result?: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface EnableApiKeyRequest {
  /** 待启用的密钥 ID。 */
  AccessKeyId: string;
}

declare interface EnableApiKeyResponse {
  /** 启动密钥操作是否成功。 */
  Result?: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ImportOpenApiRequest {
  /** API所在的服务唯一ID。 */
  ServiceId: string;
  /** openAPI正文内容。 */
  Content: string;
  /** Content格式，只能是YAML或者JSON，默认是YAML。 */
  EncodeType?: string;
  /** Content版本，默认是openAPI，目前只支持openAPI。 */
  ContentVersion?: string;
}

declare interface ImportOpenApiResponse {
  /** 导入OpenApi返回参数。 */
  Result: CreateApiRspSet;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAPIDocRequest {
  /** API文档名称 */
  ApiDocName: string;
  /** 服务名称 */
  ServiceId: string;
  /** 环境名称 */
  Environment: string;
  /** 生成文档的API列表 */
  ApiIds: string[];
  /** API文档ID */
  ApiDocId: string;
}

declare interface ModifyAPIDocResponse {
  /** API文档基本信息 */
  Result?: APIDoc;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyApiAppRequest {
  /** 应用唯一 ID。 */
  ApiAppId: string;
  /** 修改的应用名称 */
  ApiAppName?: string;
  /** 修改的应用描述 */
  ApiAppDesc?: string;
}

declare interface ModifyApiAppResponse {
  /** 修改操作是否成功。 */
  Result: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyApiEnvironmentStrategyRequest {
  /** 服务唯一ID。 */
  ServiceId: string;
  /** 限流值。 */
  Strategy: number;
  /** 环境名。 */
  EnvironmentName: string;
  /** API列表。 */
  ApiIds: string[];
}

declare interface ModifyApiEnvironmentStrategyResponse {
  /** 修改操作是否成功。 */
  Result: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyApiIncrementRequest {
  /** 服务ID */
  ServiceId: string;
  /** 接口ID */
  ApiId: string;
  /** 需要修改的API auth类型(可选择OAUTH-授权API) */
  BusinessType: string;
  /** oauth接口需要修改的公钥值 */
  PublicKey?: string;
  /** oauth接口重定向地址 */
  LoginRedirectUrl?: string;
}

declare interface ModifyApiIncrementResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyApiRequest {
  /** API 所在的服务唯一 ID。 */
  ServiceId: string;
  /** API 的后端服务类型。支持HTTP、MOCK、TSF、CLB、SCF、WEBSOCKET、TARGET（内测）。 */
  ServiceType: string;
  /** 请求的前端配置。 */
  RequestConfig: RequestConfig;
  /** API 接口唯一 ID。 */
  ApiId: string;
  /** 用户自定义的 API 名称。 */
  ApiName?: string;
  /** 用户自定义的 API 接口描述。 */
  ApiDesc?: string;
  /** API 类型，支持NORMAL和TSF，默认为NORMAL。 */
  ApiType?: string;
  /** API 鉴权类型。支持SECRET、NONE、OAUTH、APP。默认为NONE。 */
  AuthType?: string;
  /** 是否需要签名认证，True 表示需要，False 表示不需要。待废弃。 */
  AuthRequired?: boolean;
  /** API 的后端服务超时时间，单位是秒。 */
  ServiceTimeout?: number;
  /** API 的前端请求类型，如 HTTP 或 HTTPS 或者 HTTP 和 HTTPS。修改api时推荐必填 */
  Protocol?: string;
  /** 是否需要开启跨域，Ture 表示需要，False 表示不需要。 */
  EnableCORS?: boolean;
  /** 常量参数。 */
  ConstantParameters?: ConstantParameter[];
  /** 前端请求参数。 */
  RequestParameters?: ReqParameter[];
  /** 当AuthType 为 OAUTH时，该字段有效， NORMAL：业务api OAUTH：授权API。 */
  ApiBusinessType?: string;
  /** API 的后端 Mock 返回信息。如果 ServiceType 是 Mock，则此参数必传。 */
  ServiceMockReturnMessage?: string;
  /** API绑定微服务列表。 */
  MicroServices?: MicroServiceReq[];
  /** 微服务的负载均衡配置。 */
  ServiceTsfLoadBalanceConf?: TsfLoadBalanceConfResp;
  /** 微服务的健康检查配置。 */
  ServiceTsfHealthCheckConf?: HealthCheckConf;
  /** target类型负载均衡配置。（内测阶段） */
  TargetServicesLoadBalanceConf?: number;
  /** target健康检查配置。（内测阶段） */
  TargetServicesHealthCheckConf?: HealthCheckConf;
  /** scf 函数名称。当后端类型是SCF时生效。 */
  ServiceScfFunctionName?: string;
  /** scf websocket注册函数。当前端类型是WEBSOCKET且后端类型是SCF时生效。 */
  ServiceWebsocketRegisterFunctionName?: string;
  /** scf websocket清理函数。当前端类型是WEBSOCKET且后端类型是SCF时生效。 */
  ServiceWebsocketCleanupFunctionName?: string;
  /** scf websocket传输函数。当前端类型是WEBSOCKET且后端类型是SCF时生效。 */
  ServiceWebsocketTransportFunctionName?: string;
  /** scf 函数命名空间。当后端类型是SCF时生效。 */
  ServiceScfFunctionNamespace?: string;
  /** scf函数版本。当后端类型是SCF时生效。 */
  ServiceScfFunctionQualifier?: string;
  /** scf websocket注册函数命名空间。当前端类型是WEBSOCKET且后端类型是SCF时生效。 */
  ServiceWebsocketRegisterFunctionNamespace?: string;
  /** scf websocket传输函数版本。当前端类型是WEBSOCKET且后端类型是SCF时生效。 */
  ServiceWebsocketRegisterFunctionQualifier?: string;
  /** scf websocket传输函数命名空间。当前端类型是WEBSOCKET且后端类型是SCF时生效。 */
  ServiceWebsocketTransportFunctionNamespace?: string;
  /** scf websocket传输函数版本。当前端类型是WEBSOCKET且后端类型是SCF时生效。 */
  ServiceWebsocketTransportFunctionQualifier?: string;
  /** scf websocket清理函数命名空间。当前端类型是WEBSOCKET且后端类型是SCF时生效。 */
  ServiceWebsocketCleanupFunctionNamespace?: string;
  /** scf websocket清理函数版本。当前端类型是WEBSOCKET且后端类型是SCF时生效。 */
  ServiceWebsocketCleanupFunctionQualifier?: string;
  /** 是否开启响应集成。当后端类型是SCF时生效。 */
  ServiceScfIsIntegratedResponse?: boolean;
  /** 开始调试后计费。（云市场预留字段） */
  IsDebugAfterCharge?: boolean;
  /** 标签。 */
  TagSpecifications?: Tag;
  /** 是否删除自定义响应配置错误码，如果不传或者传 False，不删除，当传 True 时，则删除此 API 所有自定义响应配置错误码。 */
  IsDeleteResponseErrorCodes?: boolean;
  /** 返回类型。 */
  ResponseType?: string;
  /** 自定义响应配置成功响应示例。 */
  ResponseSuccessExample?: string;
  /** 自定义响应配置失败响应示例。 */
  ResponseFailExample?: string;
  /** API 的后端服务配置。 */
  ServiceConfig?: ServiceConfig;
  /** 关联的授权API 唯一 ID，当AuthType为OAUTH且ApiBusinessType为NORMAL时生效。标示业务API绑定的oauth2.0授权API唯一ID。 */
  AuthRelationApiId?: string;
  /** API的后端服务参数。 */
  ServiceParameters?: ServiceParameter[];
  /** oauth配置。当AuthType是OAUTH时生效。 */
  OauthConfig?: OauthConfig;
  /** 用户自定义错误码配置。 */
  ResponseErrorCodes?: ResponseErrorCodeReq[];
  /** 是否开启Base64编码，只有后端为scf时才会生效。 */
  IsBase64Encoded?: boolean;
  /** 是否开启Base64编码的header触发，只有后端为scf时才会生效。 */
  IsBase64Trigger?: boolean;
  /** Header触发规则，总规则数不能超过10。 */
  Base64EncodedTriggerRules?: Base64EncodedTriggerRule[];
  /** 事件总线ID。 */
  EventBusId?: string;
  /** scf函数类型。当后端类型是SCF时生效。支持事件触发(EVENT)，http直通云函数(HTTP)。 */
  ServiceScfFunctionType?: string;
  /** 是否开启SCF Event异步调用。 */
  ServiceScfEventIsAsyncCall?: boolean;
  /** EIAM应用类型。 */
  EIAMAppType?: string;
  /** EIAM应用认证类型，支持仅认证（AuthenticationOnly）、认证和鉴权（Authorization）。 */
  EIAMAuthType?: string;
  /** EIAM应用Token 有效时间，单位为秒，默认为7200秒。 */
  EIAMAppId?: string;
  /** EIAM应用ID。 */
  TokenTimeout?: number;
}

declare interface ModifyApiResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyExclusiveInstanceRequest {
  /** 独享实例唯一id */
  InstanceId: string;
  /** 独享实例name */
  InstanceName?: string;
  /** 独享实例描述 */
  InstanceDescription?: string;
  /** 独享实例参数配置 */
  Parameters?: InstanceParameterInput[];
}

declare interface ModifyExclusiveInstanceResponse {
  /** 独享实例详情信息 */
  Result: InstanceDetail;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyIPStrategyRequest {
  /** 待修改的策略所属服务的唯一ID。 */
  ServiceId: string;
  /** 待修改的策略唯一ID。 */
  StrategyId: string;
  /** 待修改的策略详情。 */
  StrategyData: string;
}

declare interface ModifyIPStrategyResponse {
  /** 修改操作是否成功。 */
  Result: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyPluginRequest {
  /** 要修改的插件ID。 */
  PluginId: string;
  /** 要修改的API网关插件名称。最长50个字符，支持 a-z,A-Z,0-9,_, 必须字母开头，字母或者数字结尾。 */
  PluginName?: string;
  /** 要修改的插件描述，限定200字以内。 */
  Description?: string;
  /** 要修改的插件定义语句，支持json。 */
  PluginData?: string;
}

declare interface ModifyPluginResponse {
  /** 修改操作是否成功。 */
  Result: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyServiceEnvironmentStrategyRequest {
  /** 服务的唯一ID。 */
  ServiceId: string;
  /** 限流值。 */
  Strategy: number;
  /** 环境列表。 */
  EnvironmentNames: string[];
}

declare interface ModifyServiceEnvironmentStrategyResponse {
  /** 修改操作是否成功。 */
  Result: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyServiceRequest {
  /** 待修改服务的唯一 Id。 */
  ServiceId: string;
  /** 修改后的服务名称。 */
  ServiceName?: string;
  /** 修改后的服务描述。 */
  ServiceDesc?: string;
  /** 修改后的服务前端请求类型，如 http、https和 http&https。 */
  Protocol?: string;
  /** 网络类型列表，用于指定支持的访问类型，INNER为内网访问，OUTER为外网访问。默认为OUTER。 */
  NetTypes?: string[];
  /** vpc属性，选择VPC后不可修改。为服务选择VPC后，可对接该VPC下的后端资源 */
  UniqVpcId?: string;
}

declare interface ModifyServiceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifySubDomainRequest {
  /** 服务唯一 ID。 */
  ServiceId: string;
  /** 待修改路径映射的自定义的域名。 */
  SubDomain: string;
  /** 是否修改为使用默认路径映射。为 true，表示使用默认路径映射，为 false，表示使用自定义路径映射。 */
  IsDefaultMapping: boolean;
  /** 证书 ID，协议包含 HTTPS 的时候要传该字段。 */
  CertificateId?: string;
  /** 修改后的自定义域名协议类型。（http，https 或 http&https) */
  Protocol?: string;
  /** 修改后的路径映射列表。 */
  PathMappingSet?: PathMapping[];
  /** 网络类型 （'INNER' 或 'OUTER'） */
  NetType?: string;
  /** 是否将HTTP请求强制跳转 HTTPS，默认为false。参数为 true时，API网关会将所有使用该自定义域名的 HTTP 协议的请求重定向至 HTTPS 协议进行转发。 */
  IsForcedHttps?: boolean;
}

declare interface ModifySubDomainResponse {
  /** 修改自定义域名操作是否成功。 */
  Result?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyUpstreamRequest {
  /** 后端通道唯一ID */
  UpstreamId: string;
  /** 后端通道名字 */
  UpstreamName?: string;
  /** 后端通道描述 */
  UpstreamDescription?: string;
  /** 后端协议，取值范围：HTTP, HTTPS */
  Scheme?: string;
  /** 后端访问类型，取值范围：IP_PORT, K8S */
  UpstreamType?: string;
  /** 负载均衡算法，取值范围：ROUND_ROBIN */
  Algorithm?: string;
  /** VPC唯一ID */
  UniqVpcId?: string;
  /** 请求重试次数，默认3次 */
  Retries?: number;
  /** 网关转发到后端的 Host 请求头 */
  UpstreamHost?: string;
  /** 后端节点列表 */
  Nodes?: UpstreamNode[];
  /** 健康检查配置，目前只支持VPC通道 */
  HealthChecker?: UpstreamHealthChecker;
  /** 容器服务配置 */
  K8sService?: K8sService[];
}

declare interface ModifyUpstreamResponse {
  /** 返回修改后的后端通道信息 */
  Result?: ModifyUpstreamResultInfo | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyUsagePlanRequest {
  /** 使用计划唯一 ID。 */
  UsagePlanId: string;
  /** 修改后的用户自定义的使用计划名称。 */
  UsagePlanName?: string;
  /** 修改后的用户自定义的使用计划描述。 */
  UsagePlanDesc?: string;
  /** 请求配额总数，取值范围为-1或者[1, 99999999]，默认为-1，表示不开启。 */
  MaxRequestNum?: number;
  /** 每秒请求限制数，取值范围为-1或者[1, 2000]，默认-1，表示不开启。 */
  MaxRequestNumPreSec?: number;
}

declare interface ModifyUsagePlanResponse {
  /** 使用计划详情。 */
  Result: UsagePlanInfo | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ReleaseServiceRequest {
  /** 待发布服务的唯一 ID。 */
  ServiceId: string;
  /** 待发布的环境名称，当前支持三个环境，test（测试环境）、prepub（预发布环境）和 release（发布环境）。 */
  EnvironmentName: string;
  /** 本次的发布描述。 */
  ReleaseDesc: string;
  /** apiId列表，预留字段，默认全量api发布。 */
  ApiIds?: string[];
}

declare interface ReleaseServiceResponse {
  /** 发布信息。 */
  Result?: ReleaseService;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ResetAPIDocPasswordRequest {
  /** API文档ID */
  ApiDocId: string;
}

declare interface ResetAPIDocPasswordResponse {
  /** API文档基本信息 */
  Result: APIDoc;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UnBindEnvironmentRequest {
  /** 绑定类型，取值为 API、SERVICE，默认值为 SERVICE。 */
  BindType: string;
  /** 待绑定的使用计划唯一 ID 列表。 */
  UsagePlanIds: string[];
  /** 待解绑的服务环境。 */
  Environment: string;
  /** 待解绑的服务唯一 ID。 */
  ServiceId: string;
  /** API 唯一 ID 数组，当 BindType=API 时，需要传入此参数。 */
  ApiIds?: string[];
}

declare interface UnBindEnvironmentResponse {
  /** 解绑操作是否成功。 */
  Result: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UnBindIPStrategyRequest {
  /** 待解绑的服务唯一ID。 */
  ServiceId: string;
  /** 待解绑的IP策略唯一ID。 */
  StrategyId: string;
  /** 待解绑的环境。 */
  EnvironmentName: string;
  /** 待解绑的 API 列表。 */
  UnBindApiIds: string[];
}

declare interface UnBindIPStrategyResponse {
  /** 解绑操作是否成功。 */
  Result: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UnBindSecretIdsRequest {
  /** 待解绑的使用计划唯一 ID。 */
  UsagePlanId: string;
  /** 待解绑的密钥 ID 数组。 */
  AccessKeyIds: string[];
}

declare interface UnBindSecretIdsResponse {
  /** 解绑操作是否成功。 */
  Result?: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UnBindSubDomainRequest {
  /** 服务唯一 ID。 */
  ServiceId: string;
  /** 待解绑的自定义的域名。 */
  SubDomain: string;
}

declare interface UnBindSubDomainResponse {
  /** 解绑自定义域名操作是否成功。 */
  Result?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UnReleaseServiceRequest {
  /** 待下线服务的唯一 ID。 */
  ServiceId: string;
  /** 待下线的环境名称，当前支持三个环境，test（测试环境）、prepub（预发布环境）和 release（发布环境）。 */
  EnvironmentName: string;
  /** 保留字段，待下线的API列表。 */
  ApiIds?: string[];
}

declare interface UnReleaseServiceResponse {
  /** 下线操作是否成功。 */
  Result: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UnbindApiAppRequest {
  /** 待绑定的应用唯一 ID 。 */
  ApiAppId: string;
  /** 待绑定的环境。 */
  Environment: string;
  /** 待绑定的服务唯一 ID。 */
  ServiceId: string;
  /** 待绑定的API唯一ID。 */
  ApiId: string;
}

declare interface UnbindApiAppResponse {
  /** 解除绑定操作是否成功。 */
  Result: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateApiAppKeyRequest {
  /** 应用唯一 ID。 */
  ApiAppId: string;
  /** 应用的Key。 */
  ApiAppKey: string;
  /** 应用的Secret。 */
  ApiAppSecret?: string;
}

declare interface UpdateApiAppKeyResponse {
  /** 更新操作是否成功。 */
  Result: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateApiKeyRequest {
  /** 待更换的密钥 ID。 */
  AccessKeyId: string;
  /** 待更换的密钥 Key，更新自定义密钥时，该字段为必传。长度10 - 50字符，包括字母、数字、英文下划线。 */
  AccessKeySecret?: string;
}

declare interface UpdateApiKeyResponse {
  /** 更换后的密钥详情。 */
  Result?: ApiKey | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateServiceRequest {
  /** 待切换服务的唯一 Id。 */
  ServiceId: string;
  /** 待切换的环境名称，当前支持三个环境，test（测试环境）、prepub（预发布环境）和 release（发布环境）。 */
  EnvironmentName: string;
  /** 切换的版本号。 */
  VersionName: string;
  /** 本次的切换描述。 */
  UpdateDesc?: string;
}

declare interface UpdateServiceResponse {
  /** 切换版本操作是否成功。 */
  Result?: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Apigateway API 网关} */
declare interface Apigateway {
  (): Versions;
  /** 插件绑定API {@link AttachPluginRequest} {@link AttachPluginResponse} */
  AttachPlugin(data: AttachPluginRequest, config?: AxiosRequestConfig): AxiosPromise<AttachPluginResponse>;
  /** 绑定应用到API {@link BindApiAppRequest} {@link BindApiAppResponse} */
  BindApiApp(data: BindApiAppRequest, config?: AxiosRequestConfig): AxiosPromise<BindApiAppResponse>;
  /** 绑定使用计划到服务或API {@link BindEnvironmentRequest} {@link BindEnvironmentResponse} */
  BindEnvironment(data: BindEnvironmentRequest, config?: AxiosRequestConfig): AxiosPromise<BindEnvironmentResponse>;
  /** API绑定IP策略 {@link BindIPStrategyRequest} {@link BindIPStrategyResponse} */
  BindIPStrategy(data: BindIPStrategyRequest, config?: AxiosRequestConfig): AxiosPromise<BindIPStrategyResponse>;
  /** 使用计划绑定密钥 {@link BindSecretIdsRequest} {@link BindSecretIdsResponse} */
  BindSecretIds(data: BindSecretIdsRequest, config?: AxiosRequestConfig): AxiosPromise<BindSecretIdsResponse>;
  /** 服务绑定自定义域名 {@link BindSubDomainRequest} {@link BindSubDomainResponse} */
  BindSubDomain(data: BindSubDomainRequest, config?: AxiosRequestConfig): AxiosPromise<BindSubDomainResponse>;
  /** 构建 API 文档 {@link BuildAPIDocRequest} {@link BuildAPIDocResponse} */
  BuildAPIDoc(data: BuildAPIDocRequest, config?: AxiosRequestConfig): AxiosPromise<BuildAPIDocResponse>;
  /** 创建 API 文档 {@link CreateAPIDocRequest} {@link CreateAPIDocResponse} */
  CreateAPIDoc(data: CreateAPIDocRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAPIDocResponse>;
  /** 创建API {@link CreateApiRequest} {@link CreateApiResponse} */
  CreateApi(data: CreateApiRequest, config?: AxiosRequestConfig): AxiosPromise<CreateApiResponse>;
  /** 创建应用 {@link CreateApiAppRequest} {@link CreateApiAppResponse} */
  CreateApiApp(data: CreateApiAppRequest, config?: AxiosRequestConfig): AxiosPromise<CreateApiAppResponse>;
  /** 创建密钥 {@link CreateApiKeyRequest} {@link CreateApiKeyResponse} */
  CreateApiKey(data: CreateApiKeyRequest, config?: AxiosRequestConfig): AxiosPromise<CreateApiKeyResponse>;
  /** 创建服务IP策略 {@link CreateIPStrategyRequest} {@link CreateIPStrategyResponse} */
  CreateIPStrategy(data: CreateIPStrategyRequest, config?: AxiosRequestConfig): AxiosPromise<CreateIPStrategyResponse>;
  /** 创建插件 {@link CreatePluginRequest} {@link CreatePluginResponse} */
  CreatePlugin(data: CreatePluginRequest, config?: AxiosRequestConfig): AxiosPromise<CreatePluginResponse>;
  /** 创建服务 {@link CreateServiceRequest} {@link CreateServiceResponse} */
  CreateService(data: CreateServiceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateServiceResponse>;
  /** 创建后端通道 {@link CreateUpstreamRequest} {@link CreateUpstreamResponse} */
  CreateUpstream(data: CreateUpstreamRequest, config?: AxiosRequestConfig): AxiosPromise<CreateUpstreamResponse>;
  /** 创建使用计划 {@link CreateUsagePlanRequest} {@link CreateUsagePlanResponse} */
  CreateUsagePlan(data: CreateUsagePlanRequest, config?: AxiosRequestConfig): AxiosPromise<CreateUsagePlanResponse>;
  /** 删除 API 文档 {@link DeleteAPIDocRequest} {@link DeleteAPIDocResponse} */
  DeleteAPIDoc(data: DeleteAPIDocRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAPIDocResponse>;
  /** 删除API {@link DeleteApiRequest} {@link DeleteApiResponse} */
  DeleteApi(data: DeleteApiRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteApiResponse>;
  /** 删除应用 {@link DeleteApiAppRequest} {@link DeleteApiAppResponse} */
  DeleteApiApp(data: DeleteApiAppRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteApiAppResponse>;
  /** 删除密钥 {@link DeleteApiKeyRequest} {@link DeleteApiKeyResponse} */
  DeleteApiKey(data: DeleteApiKeyRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteApiKeyResponse>;
  /** 删除服务IP策略 {@link DeleteIPStrategyRequest} {@link DeleteIPStrategyResponse} */
  DeleteIPStrategy(data: DeleteIPStrategyRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteIPStrategyResponse>;
  /** 删除插件 {@link DeletePluginRequest} {@link DeletePluginResponse} */
  DeletePlugin(data: DeletePluginRequest, config?: AxiosRequestConfig): AxiosPromise<DeletePluginResponse>;
  /** 删除服务 {@link DeleteServiceRequest} {@link DeleteServiceResponse} */
  DeleteService(data: DeleteServiceRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteServiceResponse>;
  /** 删除自定义域名的路径映射 {@link DeleteServiceSubDomainMappingRequest} {@link DeleteServiceSubDomainMappingResponse} */
  DeleteServiceSubDomainMapping(data: DeleteServiceSubDomainMappingRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteServiceSubDomainMappingResponse>;
  /** 删除后端通道 {@link DeleteUpstreamRequest} {@link DeleteUpstreamResponse} */
  DeleteUpstream(data: DeleteUpstreamRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteUpstreamResponse>;
  /** 删除使用计划 {@link DeleteUsagePlanRequest} {@link DeleteUsagePlanResponse} */
  DeleteUsagePlan(data: DeleteUsagePlanRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteUsagePlanResponse>;
  /** 服务级别使用计划降级 {@link DemoteServiceUsagePlanRequest} {@link DemoteServiceUsagePlanResponse} */
  DemoteServiceUsagePlan(data: DemoteServiceUsagePlanRequest, config?: AxiosRequestConfig): AxiosPromise<DemoteServiceUsagePlanResponse>;
  /** 查询 API 文档详情 {@link DescribeAPIDocDetailRequest} {@link DescribeAPIDocDetailResponse} */
  DescribeAPIDocDetail(data: DescribeAPIDocDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAPIDocDetailResponse>;
  /** 查询 API 文档列表 {@link DescribeAPIDocsRequest} {@link DescribeAPIDocsResponse} */
  DescribeAPIDocs(data?: DescribeAPIDocsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAPIDocsResponse>;
  /** 展示插件相关的API列表 {@link DescribeAllPluginApisRequest} {@link DescribeAllPluginApisResponse} */
  DescribeAllPluginApis(data: DescribeAllPluginApisRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAllPluginApisResponse>;
  /** 查询API详情 {@link DescribeApiRequest} {@link DescribeApiResponse} */
  DescribeApi(data: DescribeApiRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeApiResponse>;
  /** 搜索应用 {@link DescribeApiAppRequest} {@link DescribeApiAppResponse} */
  DescribeApiApp(data: DescribeApiAppRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeApiAppResponse>;
  /** 查询应用绑定的Api列表 {@link DescribeApiAppBindApisStatusRequest} {@link DescribeApiAppBindApisStatusResponse} */
  DescribeApiAppBindApisStatus(data: DescribeApiAppBindApisStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeApiAppBindApisStatusResponse>;
  /** 查询应用列表 {@link DescribeApiAppsStatusRequest} {@link DescribeApiAppsStatusResponse} */
  DescribeApiAppsStatus(data?: DescribeApiAppsStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeApiAppsStatusResponse>;
  /** 查询Api绑定的应用列表 {@link DescribeApiBindApiAppsStatusRequest} {@link DescribeApiBindApiAppsStatusResponse} */
  DescribeApiBindApiAppsStatus(data: DescribeApiBindApiAppsStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeApiBindApiAppsStatusResponse>;
  /** 展示API绑定的限流策略 {@link DescribeApiEnvironmentStrategyRequest} {@link DescribeApiEnvironmentStrategyResponse} */
  DescribeApiEnvironmentStrategy(data: DescribeApiEnvironmentStrategyRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeApiEnvironmentStrategyResponse>;
  /** 应用使用者查询API详情 {@link DescribeApiForApiAppRequest} {@link DescribeApiForApiAppResponse} */
  DescribeApiForApiApp(data: DescribeApiForApiAppRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeApiForApiAppResponse>;
  /** 查询密钥详情 {@link DescribeApiKeyRequest} {@link DescribeApiKeyResponse} */
  DescribeApiKey(data: DescribeApiKeyRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeApiKeyResponse>;
  /** 查询密钥列表 {@link DescribeApiKeysStatusRequest} {@link DescribeApiKeysStatusResponse} */
  DescribeApiKeysStatus(data?: DescribeApiKeysStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeApiKeysStatusResponse>;
  /** 查询 API 使用计划详情 {@link DescribeApiUsagePlanRequest} {@link DescribeApiUsagePlanResponse} */
  DescribeApiUsagePlan(data: DescribeApiUsagePlanRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeApiUsagePlanResponse>;
  /** 查询 API 接口列表 {@link DescribeApisStatusRequest} {@link DescribeApisStatusResponse} */
  DescribeApisStatus(data: DescribeApisStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeApisStatusResponse>;
  /** 查询独享实例详情 {@link DescribeExclusiveInstanceDetailRequest} {@link DescribeExclusiveInstanceDetailResponse} */
  DescribeExclusiveInstanceDetail(data: DescribeExclusiveInstanceDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeExclusiveInstanceDetailResponse>;
  /** 获取专享实例支持地域列表 {@link DescribeExclusiveInstanceRegionsRequest} {@link DescribeExclusiveInstanceRegionsResponse} */
  DescribeExclusiveInstanceRegions(data?: DescribeExclusiveInstanceRegionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeExclusiveInstanceRegionsResponse>;
  /** 查询独享实例列表 {@link DescribeExclusiveInstancesRequest} {@link DescribeExclusiveInstancesResponse} */
  DescribeExclusiveInstances(data: DescribeExclusiveInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeExclusiveInstancesResponse>;
  /** 查询专享实例列表（新） {@link DescribeExclusiveInstancesStatusRequest} {@link DescribeExclusiveInstancesStatusResponse} */
  DescribeExclusiveInstancesStatus(data: DescribeExclusiveInstancesStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeExclusiveInstancesStatusResponse>;
  /** 查询IP策略详情 {@link DescribeIPStrategyRequest} {@link DescribeIPStrategyResponse} */
  DescribeIPStrategy(data: DescribeIPStrategyRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIPStrategyResponse>;
  /** 查询IP策略绑定的API列表 {@link DescribeIPStrategyApisStatusRequest} {@link DescribeIPStrategyApisStatusResponse} */
  DescribeIPStrategyApisStatus(data: DescribeIPStrategyApisStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIPStrategyApisStatusResponse>;
  /** 查询服务IP策略列表（旧） {@link DescribeIPStrategysStatusRequest} {@link DescribeIPStrategysStatusResponse} */
  DescribeIPStrategysStatus(data: DescribeIPStrategysStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIPStrategysStatusResponse>;
  /** 日志搜索服务 {@link DescribeLogSearchRequest} {@link DescribeLogSearchResponse} */
  DescribeLogSearch(data: DescribeLogSearchRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLogSearchResponse>;
  /** 查询插件详情 {@link DescribePluginRequest} {@link DescribePluginResponse} */
  DescribePlugin(data: DescribePluginRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePluginResponse>;
  /** 查询插件绑定的API列表 {@link DescribePluginApisRequest} {@link DescribePluginApisResponse} */
  DescribePluginApis(data: DescribePluginApisRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePluginApisResponse>;
  /** 查询插件列表和详情 {@link DescribePluginsRequest} {@link DescribePluginsResponse} */
  DescribePlugins(data?: DescribePluginsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePluginsResponse>;
  /** API上已绑定的插件 {@link DescribePluginsByApiRequest} {@link DescribePluginsByApiResponse} */
  DescribePluginsByApi(data: DescribePluginsByApiRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePluginsByApiResponse>;
  /** 查询服务详情 {@link DescribeServiceRequest} {@link DescribeServiceResponse} */
  DescribeService(data: DescribeServiceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeServiceResponse>;
  /** 查询服务环境列表 {@link DescribeServiceEnvironmentListRequest} {@link DescribeServiceEnvironmentListResponse} */
  DescribeServiceEnvironmentList(data: DescribeServiceEnvironmentListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeServiceEnvironmentListResponse>;
  /** 查询服务环境的发布历史 {@link DescribeServiceEnvironmentReleaseHistoryRequest} {@link DescribeServiceEnvironmentReleaseHistoryResponse} */
  DescribeServiceEnvironmentReleaseHistory(data: DescribeServiceEnvironmentReleaseHistoryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeServiceEnvironmentReleaseHistoryResponse>;
  /** 展示服务限流策略 {@link DescribeServiceEnvironmentStrategyRequest} {@link DescribeServiceEnvironmentStrategyResponse} */
  DescribeServiceEnvironmentStrategy(data: DescribeServiceEnvironmentStrategyRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeServiceEnvironmentStrategyResponse>;
  /** 应用使用者查询服务详情 {@link DescribeServiceForApiAppRequest} {@link DescribeServiceForApiAppResponse} */
  DescribeServiceForApiApp(data: DescribeServiceForApiAppRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeServiceForApiAppResponse>;
  /** 查询服务已发布的版本 {@link DescribeServiceReleaseVersionRequest} {@link DescribeServiceReleaseVersionResponse} */
  DescribeServiceReleaseVersion(data: DescribeServiceReleaseVersionRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeServiceReleaseVersionResponse>;
  /** 查询自定义域名的路径映射 {@link DescribeServiceSubDomainMappingsRequest} {@link DescribeServiceSubDomainMappingsResponse} */
  DescribeServiceSubDomainMappings(data: DescribeServiceSubDomainMappingsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeServiceSubDomainMappingsResponse>;
  /** 查询自定义域名列表 {@link DescribeServiceSubDomainsRequest} {@link DescribeServiceSubDomainsResponse} */
  DescribeServiceSubDomains(data: DescribeServiceSubDomainsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeServiceSubDomainsResponse>;
  /** 查询服务使用计划详情 {@link DescribeServiceUsagePlanRequest} {@link DescribeServiceUsagePlanResponse} */
  DescribeServiceUsagePlan(data: DescribeServiceUsagePlanRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeServiceUsagePlanResponse>;
  /** 查询服务列表状态 {@link DescribeServicesStatusRequest} {@link DescribeServicesStatusResponse} */
  DescribeServicesStatus(data?: DescribeServicesStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeServicesStatusResponse>;
  /** 查询后端通道所绑定的API列表 {@link DescribeUpstreamBindApisRequest} {@link DescribeUpstreamBindApisResponse} */
  DescribeUpstreamBindApis(data: DescribeUpstreamBindApisRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUpstreamBindApisResponse>;
  /** 查询后端通道列表详情 {@link DescribeUpstreamsRequest} {@link DescribeUpstreamsResponse} */
  DescribeUpstreams(data: DescribeUpstreamsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUpstreamsResponse>;
  /** 查询使用计划详情 {@link DescribeUsagePlanRequest} {@link DescribeUsagePlanResponse} */
  DescribeUsagePlan(data: DescribeUsagePlanRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUsagePlanResponse>;
  /** 查询使用计划绑定环境列表 {@link DescribeUsagePlanEnvironmentsRequest} {@link DescribeUsagePlanEnvironmentsResponse} */
  DescribeUsagePlanEnvironments(data: DescribeUsagePlanEnvironmentsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUsagePlanEnvironmentsResponse>;
  /** 查询使用计划绑定密钥列表 {@link DescribeUsagePlanSecretIdsRequest} {@link DescribeUsagePlanSecretIdsResponse} */
  DescribeUsagePlanSecretIds(data: DescribeUsagePlanSecretIdsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUsagePlanSecretIdsResponse>;
  /** 查询使用计划列表 {@link DescribeUsagePlansStatusRequest} {@link DescribeUsagePlansStatusResponse} */
  DescribeUsagePlansStatus(data?: DescribeUsagePlansStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUsagePlansStatusResponse>;
  /** 插件解绑API {@link DetachPluginRequest} {@link DetachPluginResponse} */
  DetachPlugin(data: DetachPluginRequest, config?: AxiosRequestConfig): AxiosPromise<DetachPluginResponse>;
  /** 禁用密钥 {@link DisableApiKeyRequest} {@link DisableApiKeyResponse} */
  DisableApiKey(data: DisableApiKeyRequest, config?: AxiosRequestConfig): AxiosPromise<DisableApiKeyResponse>;
  /** 启用密钥 {@link EnableApiKeyRequest} {@link EnableApiKeyResponse} */
  EnableApiKey(data: EnableApiKeyRequest, config?: AxiosRequestConfig): AxiosPromise<EnableApiKeyResponse>;
  /** 导入OpenAPI {@link ImportOpenApiRequest} {@link ImportOpenApiResponse} */
  ImportOpenApi(data: ImportOpenApiRequest, config?: AxiosRequestConfig): AxiosPromise<ImportOpenApiResponse>;
  /** 修改 API 文档 {@link ModifyAPIDocRequest} {@link ModifyAPIDocResponse} */
  ModifyAPIDoc(data: ModifyAPIDocRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAPIDocResponse>;
  /** 修改API {@link ModifyApiRequest} {@link ModifyApiResponse} */
  ModifyApi(data: ModifyApiRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyApiResponse>;
  /** 修改应用 {@link ModifyApiAppRequest} {@link ModifyApiAppResponse} */
  ModifyApiApp(data: ModifyApiAppRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyApiAppResponse>;
  /** 修改API限流策略 {@link ModifyApiEnvironmentStrategyRequest} {@link ModifyApiEnvironmentStrategyResponse} */
  ModifyApiEnvironmentStrategy(data: ModifyApiEnvironmentStrategyRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyApiEnvironmentStrategyResponse>;
  /** 增量更新API接口 {@link ModifyApiIncrementRequest} {@link ModifyApiIncrementResponse} */
  ModifyApiIncrement(data: ModifyApiIncrementRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyApiIncrementResponse>;
  /** 修改独享实例 {@link ModifyExclusiveInstanceRequest} {@link ModifyExclusiveInstanceResponse} */
  ModifyExclusiveInstance(data: ModifyExclusiveInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyExclusiveInstanceResponse>;
  /** 修改服务IP策略 {@link ModifyIPStrategyRequest} {@link ModifyIPStrategyResponse} */
  ModifyIPStrategy(data: ModifyIPStrategyRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyIPStrategyResponse>;
  /** 修改插件 {@link ModifyPluginRequest} {@link ModifyPluginResponse} */
  ModifyPlugin(data: ModifyPluginRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyPluginResponse>;
  /** 修改服务 {@link ModifyServiceRequest} {@link ModifyServiceResponse} */
  ModifyService(data: ModifyServiceRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyServiceResponse>;
  /** 修改服务限流策略 {@link ModifyServiceEnvironmentStrategyRequest} {@link ModifyServiceEnvironmentStrategyResponse} */
  ModifyServiceEnvironmentStrategy(data: ModifyServiceEnvironmentStrategyRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyServiceEnvironmentStrategyResponse>;
  /** 服务修改自定义域名 {@link ModifySubDomainRequest} {@link ModifySubDomainResponse} */
  ModifySubDomain(data: ModifySubDomainRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySubDomainResponse>;
  /** 修改后端通道 {@link ModifyUpstreamRequest} {@link ModifyUpstreamResponse} */
  ModifyUpstream(data: ModifyUpstreamRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyUpstreamResponse>;
  /** 修改使用计划 {@link ModifyUsagePlanRequest} {@link ModifyUsagePlanResponse} */
  ModifyUsagePlan(data: ModifyUsagePlanRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyUsagePlanResponse>;
  /** 发布服务 {@link ReleaseServiceRequest} {@link ReleaseServiceResponse} */
  ReleaseService(data: ReleaseServiceRequest, config?: AxiosRequestConfig): AxiosPromise<ReleaseServiceResponse>;
  /** 重置API文档密码 {@link ResetAPIDocPasswordRequest} {@link ResetAPIDocPasswordResponse} */
  ResetAPIDocPassword(data: ResetAPIDocPasswordRequest, config?: AxiosRequestConfig): AxiosPromise<ResetAPIDocPasswordResponse>;
  /** 从服务环境解绑使用计划 {@link UnBindEnvironmentRequest} {@link UnBindEnvironmentResponse} */
  UnBindEnvironment(data: UnBindEnvironmentRequest, config?: AxiosRequestConfig): AxiosPromise<UnBindEnvironmentResponse>;
  /** 服务解绑IP策略 {@link UnBindIPStrategyRequest} {@link UnBindIPStrategyResponse} */
  UnBindIPStrategy(data: UnBindIPStrategyRequest, config?: AxiosRequestConfig): AxiosPromise<UnBindIPStrategyResponse>;
  /** 使用计划解绑密钥 {@link UnBindSecretIdsRequest} {@link UnBindSecretIdsResponse} */
  UnBindSecretIds(data: UnBindSecretIdsRequest, config?: AxiosRequestConfig): AxiosPromise<UnBindSecretIdsResponse>;
  /** 服务解绑自定义域名 {@link UnBindSubDomainRequest} {@link UnBindSubDomainResponse} */
  UnBindSubDomain(data: UnBindSubDomainRequest, config?: AxiosRequestConfig): AxiosPromise<UnBindSubDomainResponse>;
  /** 下线服务 {@link UnReleaseServiceRequest} {@link UnReleaseServiceResponse} */
  UnReleaseService(data: UnReleaseServiceRequest, config?: AxiosRequestConfig): AxiosPromise<UnReleaseServiceResponse>;
  /** 解除应用和API绑定关系 {@link UnbindApiAppRequest} {@link UnbindApiAppResponse} */
  UnbindApiApp(data: UnbindApiAppRequest, config?: AxiosRequestConfig): AxiosPromise<UnbindApiAppResponse>;
  /** 更新应用密钥 {@link UpdateApiAppKeyRequest} {@link UpdateApiAppKeyResponse} */
  UpdateApiAppKey(data: UpdateApiAppKeyRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateApiAppKeyResponse>;
  /** 更换密钥 {@link UpdateApiKeyRequest} {@link UpdateApiKeyResponse} */
  UpdateApiKey(data: UpdateApiKeyRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateApiKeyResponse>;
  /** 更新服务版本 {@link UpdateServiceRequest} {@link UpdateServiceResponse} */
  UpdateService(data: UpdateServiceRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateServiceResponse>;
}

export declare type Versions = ["2018-08-08"];

export default Apigateway;
