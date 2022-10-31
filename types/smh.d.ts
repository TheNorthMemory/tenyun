/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 官方云盘实例信息 */
declare interface Instance {
  /** 实例 ID */
  InstanceId: string;
  /** 专属域名。如果实例无专属域名，则该属性为 null。 */
  Domain: string | null;
  /** 生效时间 */
  EffectiveTime: string;
  /** 过期时间。如果为按量计费或永久有效实例，该属性为 null。 */
  ExpireTime: string | null;
  /** 用户数量。如果为按量计费或不限制用户数量实例，该属性为 null。 */
  UserLimit: number | null;
  /** 存储容量，单位为 Bytes，由于数字类型精度限制，该字段为 String 类型。如果为按量计费或不限制存储容量实例，该属性为 null。 */
  StorageLimit: string | null;
  /** 存储容量，单位为 GB。如果为按量计费或不限制存储容量实例，该属性为 null。 */
  StorageLimitGB: number | null;
  /** 是否过期隔离 */
  Isolated: boolean;
  /** 续费标识。0：手动续费；1：自动续费；2：到期不续。 */
  AutoRenew: number;
  /** 超级管理员账号，如果未选择查询实例绑定的超级管理员账号或当前实例未绑定超级管理员账号，则该属性为 null。 */
  SuperAdminAccount: string | null;
}

/** PaaS 服务媒体库信息 */
declare interface Library {
  /** 媒体库 ID */
  LibraryId: string;
  /** 媒体库友好名称 */
  Name: string;
  /** 备注 */
  Remark: string;
  /** 媒体库绑定的 COS 存储桶 */
  BucketName: string;
  /** 媒体库绑定的 COS 存储桶所在的地域 */
  BucketRegion: string;
  /** 媒体库创建时间 */
  CreationTime: string;
  /** 媒体库配置项 */
  LibraryExtension: LibraryExtension;
  /** 媒体库用量，单位为 Bytes，由于数字类型精度限制，该字段为 String 类型。 */
  Size: string;
  /** 媒体库目录数，由于数字类型精度限制，该字段为 String 类型。 */
  DirNum: string;
  /** 媒体库文件数，由于数字类型精度限制，该字段为 String 类型。 */
  FileNum: string;
}

/** 媒体库配置项 */
declare interface LibraryExtension {
  /** true 为文件类型媒体库，可存储任何类型文件；false 为媒体类型媒体库，仅可存储照片和视频类型文件。默认为 false。在媒体库创建后不能修改。 */
  IsFileLibrary?: boolean;
  /** true 为多租户空间媒体库，可创建多个租户空间；false 为单租户空间媒体库，不能创建租户空间，仅可使用默认的单一租户空间。默认为 false。在媒体库创建后不能修改。 */
  IsMultiSpace?: boolean;
  /** 保存至 COS 对象存储的文件的存储类型，仅支持 STANDARD、STANDARD_IA、INTELLIGENT_TIERING、MAZ_STANDARD、MAZ_STANDARD_IA 和 MAZ_INTELLIGENT_TIERING，默认为 STANDARD，当使用多 AZ 存储桶时将自动使用 MAZ_ 开头的用于多 AZ 的存储类型，否则自动使用非 MAZ_ 开头的用于非多 AZ 的存储类型。当指定智能分层存储 INTELLIGENT_TIERING 或 MAZ_INTELLIGENT_TIERING 时，需要事先为存储桶开启智能分层存储，否则将返回失败。在媒体库创建后不能修改。 */
  CosStorageClass?: string;
  /** 是否开启回收站功能。默认为 false。 */
  UseRecycleBin?: boolean;
  /** 当开启回收站时，自动删除回收站项目的天数，不能超过 1095（3 年），指定为 0 则不自动删除，默认为 0。当未开启回收站时，该属性为 null。 */
  AutoRemoveRecycledDays?: number | null;
  /** 是否启用文件路径搜索功能。默认为 false。 */
  EnableSearch?: boolean;
  /** 设置媒体库或租户空间配额且配额小于已使用存储量时，是否拒绝设置请求。默认为 false。 */
  DenyOnQuotaLessThanUsage?: boolean;
  /** 是否开启历史版本。默认为 false。 */
  EnableFileHistory?: boolean;
  /** 当开启历史版本时，指定单个文件保留的历史版本的数量上限，不能超过 999，指定为 0 则不限制，默认为 0。当未开启历史版本时，该属性为 null。 */
  FileHistoryCount?: number | null;
  /** 当开启历史版本时，指定历史版本保留的最长天数，不能超过 999，指定为 0 则不限制，默认为 0。当未开启历史版本时，该属性为 null。 */
  FileHistoryExpireDay?: number | null;
  /** 目录或文件名的最长长度，不能超过 255，默认为 255。修改该参数不会影响存量目录或文件名，即如果将该字段的值改小，已经存在的长度超过目标值的目录或文件名不会发生变化。 */
  MaxDirFileNameLength?: number;
  /** 是否开启公有读，开启后读操作无需使用访问令牌，默认为 false。仅单租户空间媒体库支持该属性，否则该属性为 null。 */
  IsPublicRead?: boolean | null;
  /** 媒体类型媒体库是否开启多相簿，开启后可创建一级目录（即相簿）且媒体文件只能保存在各相簿中，否则不能创建相簿且媒体文件只能保存在根目录。默认为 false。仅单租户空间媒体类型媒体库支持该属性，否则该属性为 null。在媒体库创建后不能修改。 */
  IsMultiAlbum?: boolean | null;
  /** 媒体类型媒体库是否允许上传照片，默认为 true。仅单租户空间媒体类型媒体库支持该属性，否则该属性为 null。 */
  AllowPhoto?: boolean | null;
  /** 当媒体类型媒体库允许上传照片时，指定允许的扩展名，默认为空数组，此时将根据文件扩展名对应的 MIME 类型自动判断。仅单租户空间媒体类型媒体库支持该属性，否则该属性为 null。 */
  AllowPhotoExtName?: string[] | null;
  /** 媒体类型媒体库是否允许上传视频，默认为 true。仅单租户空间媒体类型媒体库支持该属性，否则该属性为 null。 */
  AllowVideo?: boolean | null;
  /** 当媒体类型媒体库允许上传视频时，指定允许的扩展名，默认为空数组，此时将根据文件扩展名对应的 MIME 类型自动判断。仅单租户空间媒体类型媒体库支持该属性，否则该属性为 null。 */
  AllowVideoExtName?: string[] | null;
  /** 指定文件类型媒体库允许的文件扩展名，默认为空数组，此时允许上传所有类型文件。仅单租户空间文件类型媒体库支持该属性，否则该属性为 null。 */
  AllowFileExtName?: string[] | null;
  /** 照片上传时是否进行敏感内容鉴定，默认为 false。仅单租户空间媒体库支持该属性，否则该属性为 null。 */
  RecognizeSensitiveContent?: boolean | null;
}

/** 流量资源包信息 */
declare interface TrafficPackage {
  /** 流量资源包所抵扣的实例 ID */
  InstanceId: string;
  /** 专属域名。如果实例无专属域名，则该属性为 null。 */
  Domain: string | null;
  /** 流量资源包来源类型，0 为付费购买，1 为赠送。 */
  Type: number;
  /** 总流量，单位为 Bytes，由于数字类型精度限制，该字段为 String 类型。 */
  Size: string;
  /** 总流量，单位为 GB */
  SizeGB: number;
  /** 剩余流量，单位为 Bytes，由于数字类型精度限制，该字段为 String 类型。 */
  Remain: string;
  /** 已使用流量，单位为 Bytes，由于数字类型精度限制，该字段为 String 类型。 */
  Used: string;
  /** 已使用百分比，由于数字类型精度限制，该字段为 String 类型。 */
  UsedPercentage: string;
  /** 生效时间，即流量资源包的订购时间 */
  EffectiveTime: string;
  /** 过期时间，即所抵扣的实例的过期时间。如果流量资源包所抵扣的实例为按量计费或永久有效实例，该属性为 null。 */
  ExpireTime: string | null;
}

declare interface CreateLibraryRequest {
  /** 媒体库名称，最多 50 个字符 */
  Name: string;
  /** 存储桶全名，新建后不可更改 */
  BucketName: string;
  /** 存储桶所在地域，新建后不可更改 */
  BucketRegion: string;
  /** 媒体库配置项，部分参数新建后不可更改 */
  LibraryExtension: LibraryExtension;
  /** 备注，最多 250 个字符 */
  Remark?: string;
}

declare interface CreateLibraryResponse {
  /** 媒体库 ID */
  LibraryId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteLibraryRequest {
  /** 媒体库 ID */
  LibraryId: string;
}

declare interface DeleteLibraryResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeLibrariesRequest {
  /** 按照一个或者多个媒体库 ID 查询，每次请求的上限为 100 个。 */
  LibraryIds?: string[];
  /** 页码，整型，配合 PageSize 使用，默认值为 1。 */
  PageNumber?: number;
  /** 每页数目，整型，配合 PageNumber 使用，默认值为 20，最大值为 100。 */
  PageSize?: number;
}

declare interface DescribeLibrariesResponse {
  /** 媒体库列表 */
  List: Library[];
  /** 总数 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeLibrarySecretRequest {
  /** 媒体库 ID */
  LibraryId: string;
}

declare interface DescribeLibrarySecretResponse {
  /** 查询的媒体库 ID */
  LibraryId: string;
  /** 查询到的媒体库密钥 */
  LibrarySecret: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeOfficialInstancesRequest {
  /** 是否查询实例绑定的超级管理员账号，默认值为 false。 */
  SuperAdminAccount?: boolean;
  /** 按照一个或者多个实例 ID 查询，每次请求的上限为 100 个。 */
  InstanceIds?: string[];
  /** 页码，整型，配合 PageSize 使用，默认值为 1。 */
  PageNumber?: number;
  /** 每页数目，整型，配合 PageNumber 使用，默认值为 20，最大值为 100。 */
  PageSize?: number;
  /** 对指定列进行排序 */
  OrderBy?: string;
  /** 排序方式 */
  OrderByType?: string;
  /** 续费管理筛选类型 */
  AutoRenew?: number;
  /** 超级管理管理员账号是否绑定了手机号 */
  BindPhone?: boolean;
}

declare interface DescribeOfficialInstancesResponse {
  /** 实例列表 */
  List: Instance[];
  /** 总数 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeOfficialOverviewRequest {
}

declare interface DescribeOfficialOverviewResponse {
  /** 云盘实例数量 */
  Quantity: number;
  /** 已经使用的总存储量，单位为 Bytes，由于数字类型精度限制，该字段为 String 类型。 */
  Storage: string;
  /** 已经分配和使用的总用户数 */
  UserCount: number;
  /** 本月外网下行流量，单位为 Bytes，由于数字类型精度限制，该字段为 String 类型。 */
  InternetTraffic: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeTrafficPackagesRequest {
  /** 按照一个或者多个资源 ID 查询，每次请求的上限为 100 个。 */
  ResourceIds?: string[];
  /** 页码，整型，配合 PageSize 使用，默认值为 1。 */
  PageNumber?: number;
  /** 每页数目，整型，配合 PageNumber 使用，默认值为 20，最大值为 100。 */
  PageSize?: number;
  /** 对指定列进行排序 */
  OrderBy?: string;
  /** 排序方式 */
  OrderByType?: string;
  /** 来源类型筛选 */
  Type?: number;
}

declare interface DescribeTrafficPackagesResponse {
  /** 流量包列表 */
  List: TrafficPackage[];
  /** 总数 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyLibraryRequest {
  /** 媒体库 ID */
  LibraryId: string;
  /** 媒体库名称，最多 50 个字符。如不传则不修改。 */
  Name?: string;
  /** 备注，最多 250 个字符。如不传则不修改。 */
  Remark?: string;
  /** 媒体库配置项，部分参数在新建后不可更改，且仅修改传入的参数。如不传该参数则不修改任何配置项。 */
  LibraryExtension?: LibraryExtension;
}

declare interface ModifyLibraryResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface SendSmsCodeRequest {
  /** 验证码目的，当前仅支持换绑超级管理员账号，固定填写 BindSuperAdmin。 */
  Purpose: string;
  /** 官方云盘实例 ID */
  InstanceId: string;
  /** 将作为超级管理员账号的手机号码 */
  PhoneNumber: string;
  /** 将作为超级管理员账号的手机号码的国家代码。默认为 +86。 */
  CountryCode?: string;
}

declare interface SendSmsCodeResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface VerifySmsCodeRequest {
  /** 验证码目的，当前仅支持换绑超级管理员账号，固定填写 BindSuperAdmin。 */
  Purpose: string;
  /** 官方云盘实例 ID */
  InstanceId: string;
  /** 将作为超级管理员账号的手机号码 */
  PhoneNumber: string;
  /** 短信验证码 */
  Code: string;
  /** 将作为超级管理员账号的手机号码的国家代码。默认为 +86。 */
  CountryCode?: string;
}

declare interface VerifySmsCodeResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

/** {@link Smh 智能媒资托管} */
declare interface Smh {
  (): Versions;
  /** {@link CreateLibrary 创建媒体库}({@link CreateLibraryRequest 请求参数}): {@link CreateLibraryResponse 返回参数} */
  CreateLibrary(data: CreateLibraryRequest, config?: AxiosRequestConfig): AxiosPromise<CreateLibraryResponse>;
  /** {@link DeleteLibrary 删除媒体库}({@link DeleteLibraryRequest 请求参数}): {@link DeleteLibraryResponse 返回参数} */
  DeleteLibrary(data: DeleteLibraryRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteLibraryResponse>;
  /** {@link DescribeLibraries 查询媒体库}({@link DescribeLibrariesRequest 请求参数}): {@link DescribeLibrariesResponse 返回参数} */
  DescribeLibraries(data?: DescribeLibrariesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLibrariesResponse>;
  /** {@link DescribeLibrarySecret 查询媒体库密钥}({@link DescribeLibrarySecretRequest 请求参数}): {@link DescribeLibrarySecretResponse 返回参数} */
  DescribeLibrarySecret(data: DescribeLibrarySecretRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLibrarySecretResponse>;
  /** {@link DescribeOfficialInstances 查询官方实例}({@link DescribeOfficialInstancesRequest 请求参数}): {@link DescribeOfficialInstancesResponse 返回参数} */
  DescribeOfficialInstances(data?: DescribeOfficialInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOfficialInstancesResponse>;
  /** {@link DescribeOfficialOverview 查询官方实例概览数据}({@link DescribeOfficialOverviewRequest 请求参数}): {@link DescribeOfficialOverviewResponse 返回参数} */
  DescribeOfficialOverview(data?: DescribeOfficialOverviewRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOfficialOverviewResponse>;
  /** {@link DescribeTrafficPackages 查询流量包}({@link DescribeTrafficPackagesRequest 请求参数}): {@link DescribeTrafficPackagesResponse 返回参数} */
  DescribeTrafficPackages(data?: DescribeTrafficPackagesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTrafficPackagesResponse>;
  /** {@link ModifyLibrary 修改媒体库配置项}({@link ModifyLibraryRequest 请求参数}): {@link ModifyLibraryResponse 返回参数} */
  ModifyLibrary(data: ModifyLibraryRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyLibraryResponse>;
  /** {@link SendSmsCode 发送短信验证码}({@link SendSmsCodeRequest 请求参数}): {@link SendSmsCodeResponse 返回参数} */
  SendSmsCode(data: SendSmsCodeRequest, config?: AxiosRequestConfig): AxiosPromise<SendSmsCodeResponse>;
  /** {@link VerifySmsCode 验证短信验证码}({@link VerifySmsCodeRequest 请求参数}): {@link VerifySmsCodeResponse 返回参数} */
  VerifySmsCode(data: VerifySmsCodeRequest, config?: AxiosRequestConfig): AxiosPromise<VerifySmsCodeResponse>;
}

export declare type Versions = ["2021-07-12"];

export default Smh;
