/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 部门用户 */
declare interface SsoDepartment {
  /** 部门ID */
  DepartmentId?: string | null;
  /** 部门名称 */
  Name?: string | null;
  /** 父级部门ID */
  ParentDepartmentId?: string | null;
}

/** 部门用户结果 */
declare interface SsoDepartmentsResult {
  /** 总数 */
  Total?: number | null;
  /** 部门列表 */
  Departments?: SsoDepartment[] | null;
}

/** 部门用户 */
declare interface SsoTeamUser {
  /** 用户ID */
  UserId?: string | null;
  /** 用户名称 */
  RealName?: string | null;
  /** 用户类型 */
  UserType?: string | null;
  /** 所属租户ID */
  TenantId?: string | null;
  /** 邮箱 */
  Email?: string | null;
  /** 电话 */
  Phone?: string | null;
  /** 用户状态 */
  Status?: number | null;
  /** 创建时间 */
  CreateAt?: number | null;
  /** 部门ID */
  DepartmentId?: string | null;
  /** 部门名称 */
  DepartmentName?: string | null;
  /** 是否关联权限 */
  LinkFilter?: number | null;
}

/** 空间用户结果 */
declare interface SsoTeamUserResult {
  /** 总数 */
  Total?: number | null;
  /** 部门用户列表 */
  Users?: SsoTeamUser[] | null;
}

/** 用户结果 */
declare interface SsoUser {
  /** 用户ID */
  UserId?: string | null;
  /** 用户昵称 */
  UserName?: string | null;
  /** 用户名称 */
  RealName?: string | null;
  /** 用户类型 */
  UserType?: string | null;
  /** 所属租户ID */
  TenantId?: string | null;
  /** 所属组ID */
  UserGroup?: string | null;
  /** 邮箱 */
  Email?: string | null;
  /** 电话 */
  Phone?: string | null;
  /** 用户状态 */
  Status?: number | null;
  /** 创建时间 */
  CreateAt?: number | null;
  /** 更新时间 */
  UpdateAt?: number | null;
  /** 是否属于团队 */
  BelongTeam?: number | null;
  /** ID */
  DepartmentId?: string | null;
  /** 名称 */
  DepartmentName?: string | null;
  /** 子账户ID */
  DepartmentUserId?: number | null;
  /** 密码 */
  Password?: string | null;
}

/** 租户人员结果 */
declare interface SsoUserResult {
  /** 总数 */
  Total?: number | null;
  /** 租户人员数据 */
  Users?: SsoUser[] | null;
}

declare interface AddAlarmProcessRecordRequest {
}

declare interface AddAlarmProcessRecordResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BatchCreateDeviceRequest {
}

declare interface BatchCreateDeviceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BatchKillAlarmRequest {
}

declare interface BatchKillAlarmResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BatchReportAppMessageRequest {
}

declare interface BatchReportAppMessageResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ChangeAlarmStatusRequest {
}

declare interface ChangeAlarmStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ControlCameraPTZRequest {
}

declare interface ControlCameraPTZResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ControlDeviceRequest {
}

declare interface ControlDeviceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateApplicationTokenRequest {
}

declare interface CreateApplicationTokenResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeActionListRequest {
}

declare interface DescribeActionListResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAdministrationByTagRequest {
}

declare interface DescribeAdministrationByTagResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAlarmLevelListRequest {
}

declare interface DescribeAlarmLevelListResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAlarmListRequest {
}

declare interface DescribeAlarmListResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAlarmStatusListRequest {
}

declare interface DescribeAlarmStatusListResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAlarmTypeListRequest {
}

declare interface DescribeAlarmTypeListResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeApplicationListRequest {
}

declare interface DescribeApplicationListResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBuildingListRequest {
}

declare interface DescribeBuildingListResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBuildingModelRequest {
}

declare interface DescribeBuildingModelResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBuildingProfileRequest {
}

declare interface DescribeBuildingProfileResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCameraExtendInfoRequest {
}

declare interface DescribeCameraExtendInfoResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCityWorkspaceListRequest {
}

declare interface DescribeCityWorkspaceListResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDeviceListRequest {
}

declare interface DescribeDeviceListResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDeviceShadowListRequest {
}

declare interface DescribeDeviceShadowListResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDeviceStatusListRequest {
}

declare interface DescribeDeviceStatusListResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDeviceStatusStatRequest {
}

declare interface DescribeDeviceStatusStatResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDeviceTagListRequest {
}

declare interface DescribeDeviceTagListResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDeviceTypeListRequest {
}

declare interface DescribeDeviceTypeListResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeEdgeApplicationTokenRequest {
}

declare interface DescribeEdgeApplicationTokenResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeElementProfilePageRequest {
}

declare interface DescribeElementProfilePageResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeElementProfileTreeRequest {
}

declare interface DescribeElementProfileTreeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeEventListRequest {
}

declare interface DescribeEventListResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFileDownloadURLRequest {
}

declare interface DescribeFileDownloadURLResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFileUploadURLRequest {
}

declare interface DescribeFileUploadURLResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInterfaceListRequest {
}

declare interface DescribeInterfaceListResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLinkRuleListRequest {
}

declare interface DescribeLinkRuleListResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeModelListRequest {
}

declare interface DescribeModelListResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeProductListRequest {
}

declare interface DescribeProductListResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePropertyListRequest {
}

declare interface DescribePropertyListResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRuleDetailRequest {
}

declare interface DescribeRuleDetailResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSceneListRequest {
}

declare interface DescribeSceneListResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSpaceDeviceIdListRequest {
}

declare interface DescribeSpaceDeviceIdListResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSpaceDeviceRelationListRequest {
}

declare interface DescribeSpaceDeviceRelationListResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSpaceInfoByDeviceIdRequest {
}

declare interface DescribeSpaceInfoByDeviceIdResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSpaceRelationByDeviceIdRequest {
}

declare interface DescribeSpaceRelationByDeviceIdResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSpaceTypeListRequest {
}

declare interface DescribeSpaceTypeListResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTenantBuildingCountAndAreaRequest {
}

declare interface DescribeTenantBuildingCountAndAreaResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTenantDepartmentListRequest {
  /** 翻页页码 */
  Offset: number;
  /** 翻页大小 */
  Limit: number;
  /** token */
  ApplicationToken: string;
  /** 租户ID */
  TenantId?: string;
  /** 更新时间戳，单位秒 */
  UpdateAt?: number;
  /** 部门ID */
  DepartmentId?: string;
  /** 用户id */
  Cursor?: string;
}

declare interface DescribeTenantDepartmentListResponse {
  /** 返回数据 */
  Result?: SsoDepartmentsResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTenantUserListRequest {
  /** 翻页页码 */
  Offset: number;
  /** 翻页大小 */
  Limit: number;
  /** token */
  ApplicationToken: string;
  /** 租户ID */
  TenantId?: string;
  /** 更新时间戳，单位秒 */
  UpdateAt?: number;
  /** 部门ID */
  DepartmentId?: string;
  /** 用户id */
  Cursor?: string;
  /** 状态，0，获取所有数据，1正常启用，2禁用 */
  Status?: number;
  /** 项目空间id */
  WorkspaceId?: string;
  /** 关键词 */
  Keyword?: string;
  /** 是否递归获取子级数据，0需要，1不需要，默认为0 */
  NoRecursive?: string;
}

declare interface DescribeTenantUserListResponse {
  /** 返回数据 */
  Result?: SsoUserResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVideoCloudRecordRequest {
}

declare interface DescribeVideoCloudRecordResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVideoLiveStreamRequest {
}

declare interface DescribeVideoLiveStreamResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVideoRecordStreamRequest {
}

declare interface DescribeVideoRecordStreamResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeWorkSpaceBuildingCountAndAreaRequest {
}

declare interface DescribeWorkSpaceBuildingCountAndAreaResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeWorkspaceListRequest {
}

declare interface DescribeWorkspaceListResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeWorkspaceUserListRequest {
  /** 翻页页码 */
  Offset: number;
  /** 翻页大小 */
  Limit: number;
  /** 工作空间ID */
  WorkspaceId: string;
  /** token */
  ApplicationToken: string;
  /** 租户ID */
  TenantId?: string;
  /** 更新时间戳，单位秒 */
  UpdateAt?: number;
}

declare interface DescribeWorkspaceUserListResponse {
  /** 返回数据 */
  Result?: SsoTeamUserResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDeviceNameRequest {
}

declare interface ModifyDeviceNameResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ReportAppMessageRequest {
}

declare interface ReportAppMessageResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StopVideoStreamingRequest {
}

declare interface StopVideoStreamingResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateWorkspaceParkAttributesRequest {
}

declare interface UpdateWorkspaceParkAttributesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Weilingwith 微瓴同业开放平台} */
declare interface Weilingwith {
  (): Versions;
  /** 添加告警处理记录 {@link AddAlarmProcessRecordRequest} {@link AddAlarmProcessRecordResponse} */
  AddAlarmProcessRecord(data?: AddAlarmProcessRecordRequest, config?: AxiosRequestConfig): AxiosPromise<AddAlarmProcessRecordResponse>;
  /** 批量新增设备 {@link BatchCreateDeviceRequest} {@link BatchCreateDeviceResponse} */
  BatchCreateDevice(data?: BatchCreateDeviceRequest, config?: AxiosRequestConfig): AxiosPromise<BatchCreateDeviceResponse>;
  /** 批量消警 {@link BatchKillAlarmRequest} {@link BatchKillAlarmResponse} */
  BatchKillAlarm(data?: BatchKillAlarmRequest, config?: AxiosRequestConfig): AxiosPromise<BatchKillAlarmResponse>;
  /** 批量消息上报 {@link BatchReportAppMessageRequest} {@link BatchReportAppMessageResponse} */
  BatchReportAppMessage(data?: BatchReportAppMessageRequest, config?: AxiosRequestConfig): AxiosPromise<BatchReportAppMessageResponse>;
  /** 变更告警状态 {@link ChangeAlarmStatusRequest} {@link ChangeAlarmStatusResponse} */
  ChangeAlarmStatus(data?: ChangeAlarmStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ChangeAlarmStatusResponse>;
  /** 云台控制 {@link ControlCameraPTZRequest} {@link ControlCameraPTZResponse} */
  ControlCameraPTZ(data?: ControlCameraPTZRequest, config?: AxiosRequestConfig): AxiosPromise<ControlCameraPTZResponse>;
  /** 设备控制（单个、批量控制） {@link ControlDeviceRequest} {@link ControlDeviceResponse} */
  ControlDevice(data?: ControlDeviceRequest, config?: AxiosRequestConfig): AxiosPromise<ControlDeviceResponse>;
  /** 创建应用授权令牌 {@link CreateApplicationTokenRequest} {@link CreateApplicationTokenResponse} */
  CreateApplicationToken(data?: CreateApplicationTokenRequest, config?: AxiosRequestConfig): AxiosPromise<CreateApplicationTokenResponse>;
  /** 动作列表查询 {@link DescribeActionListRequest} {@link DescribeActionListResponse} */
  DescribeActionList(data?: DescribeActionListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeActionListResponse>;
  /** 根据标签获取行政区划列表 {@link DescribeAdministrationByTagRequest} {@link DescribeAdministrationByTagResponse} */
  DescribeAdministrationByTag(data?: DescribeAdministrationByTagRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAdministrationByTagResponse>;
  /** 告警级别枚举获取 {@link DescribeAlarmLevelListRequest} {@link DescribeAlarmLevelListResponse} */
  DescribeAlarmLevelList(data?: DescribeAlarmLevelListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAlarmLevelListResponse>;
  /** 告警列表查询 {@link DescribeAlarmListRequest} {@link DescribeAlarmListResponse} */
  DescribeAlarmList(data?: DescribeAlarmListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAlarmListResponse>;
  /** 告警状态列表查询 {@link DescribeAlarmStatusListRequest} {@link DescribeAlarmStatusListResponse} */
  DescribeAlarmStatusList(data?: DescribeAlarmStatusListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAlarmStatusListResponse>;
  /** 告警类型获取 {@link DescribeAlarmTypeListRequest} {@link DescribeAlarmTypeListResponse} */
  DescribeAlarmTypeList(data?: DescribeAlarmTypeListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAlarmTypeListResponse>;
  /** 查询应用列表 {@link DescribeApplicationListRequest} {@link DescribeApplicationListResponse} */
  DescribeApplicationList(data?: DescribeApplicationListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeApplicationListResponse>;
  /** 查询建筑列表 {@link DescribeBuildingListRequest} {@link DescribeBuildingListResponse} */
  DescribeBuildingList(data?: DescribeBuildingListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBuildingListResponse>;
  /** 查询建筑三维模型 {@link DescribeBuildingModelRequest} {@link DescribeBuildingModelResponse} */
  DescribeBuildingModel(data?: DescribeBuildingModelRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBuildingModelResponse>;
  /** 查询建筑信息 {@link DescribeBuildingProfileRequest} {@link DescribeBuildingProfileResponse} */
  DescribeBuildingProfile(data?: DescribeBuildingProfileRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBuildingProfileResponse>;
  /** 获取视频扩展信息 {@link DescribeCameraExtendInfoRequest} {@link DescribeCameraExtendInfoResponse} */
  DescribeCameraExtendInfo(data?: DescribeCameraExtendInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCameraExtendInfoResponse>;
  /** 通过城市id查询工作空间列表 {@link DescribeCityWorkspaceListRequest} {@link DescribeCityWorkspaceListResponse} */
  DescribeCityWorkspaceList(data?: DescribeCityWorkspaceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCityWorkspaceListResponse>;
  /** 设备列表查询 {@link DescribeDeviceListRequest} {@link DescribeDeviceListResponse} */
  DescribeDeviceList(data?: DescribeDeviceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDeviceListResponse>;
  /** 获取设备影子数据 {@link DescribeDeviceShadowListRequest} {@link DescribeDeviceShadowListResponse} */
  DescribeDeviceShadowList(data?: DescribeDeviceShadowListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDeviceShadowListResponse>;
  /** 设备状态获取 {@link DescribeDeviceStatusListRequest} {@link DescribeDeviceStatusListResponse} */
  DescribeDeviceStatusList(data?: DescribeDeviceStatusListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDeviceStatusListResponse>;
  /** 设备状态统计 {@link DescribeDeviceStatusStatRequest} {@link DescribeDeviceStatusStatResponse} */
  DescribeDeviceStatusStat(data?: DescribeDeviceStatusStatRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDeviceStatusStatResponse>;
  /** 标签列表查询 {@link DescribeDeviceTagListRequest} {@link DescribeDeviceTagListResponse} */
  DescribeDeviceTagList(data?: DescribeDeviceTagListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDeviceTagListResponse>;
  /** 拉取设备的设备类型列表 {@link DescribeDeviceTypeListRequest} {@link DescribeDeviceTypeListResponse} */
  DescribeDeviceTypeList(data?: DescribeDeviceTypeListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDeviceTypeListResponse>;
  /** 查询边缘应用凭证 {@link DescribeEdgeApplicationTokenRequest} {@link DescribeEdgeApplicationTokenResponse} */
  DescribeEdgeApplicationToken(data?: DescribeEdgeApplicationTokenRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEdgeApplicationTokenResponse>;
  /** 查询分页构件信息 {@link DescribeElementProfilePageRequest} {@link DescribeElementProfilePageResponse} */
  DescribeElementProfilePage(data?: DescribeElementProfilePageRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeElementProfilePageResponse>;
  /** 查询构件树 {@link DescribeElementProfileTreeRequest} {@link DescribeElementProfileTreeResponse} */
  DescribeElementProfileTree(data?: DescribeElementProfileTreeRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeElementProfileTreeResponse>;
  /** 事件列表查询 {@link DescribeEventListRequest} {@link DescribeEventListResponse} */
  DescribeEventList(data?: DescribeEventListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEventListResponse>;
  /** 获取文件下载URL {@link DescribeFileDownloadURLRequest} {@link DescribeFileDownloadURLResponse} */
  DescribeFileDownloadURL(data?: DescribeFileDownloadURLRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFileDownloadURLResponse>;
  /** 文件上传接口 {@link DescribeFileUploadURLRequest} {@link DescribeFileUploadURLResponse} */
  DescribeFileUploadURL(data?: DescribeFileUploadURLRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFileUploadURLResponse>;
  /** 查询接口列表 {@link DescribeInterfaceListRequest} {@link DescribeInterfaceListResponse} */
  DescribeInterfaceList(data?: DescribeInterfaceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInterfaceListResponse>;
  /** 联动规则列表查询 {@link DescribeLinkRuleListRequest} {@link DescribeLinkRuleListResponse} */
  DescribeLinkRuleList(data?: DescribeLinkRuleListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLinkRuleListResponse>;
  /** 模型列表查询 {@link DescribeModelListRequest} {@link DescribeModelListResponse} */
  DescribeModelList(data?: DescribeModelListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeModelListResponse>;
  /** 产品列表查询 {@link DescribeProductListRequest} {@link DescribeProductListResponse} */
  DescribeProductList(data?: DescribeProductListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProductListResponse>;
  /** 查询构件属性（详情） {@link DescribePropertyListRequest} {@link DescribePropertyListResponse} */
  DescribePropertyList(data?: DescribePropertyListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePropertyListResponse>;
  /** 联动规则详情查询 {@link DescribeRuleDetailRequest} {@link DescribeRuleDetailResponse} */
  DescribeRuleDetail(data?: DescribeRuleDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRuleDetailResponse>;
  /** 查询场景列表 {@link DescribeSceneListRequest} {@link DescribeSceneListResponse} */
  DescribeSceneList(data?: DescribeSceneListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSceneListResponse>;
  /** 查询指定空间设备编号列表 {@link DescribeSpaceDeviceIdListRequest} {@link DescribeSpaceDeviceIdListResponse} */
  DescribeSpaceDeviceIdList(data?: DescribeSpaceDeviceIdListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSpaceDeviceIdListResponse>;
  /** 查询指定空间下设备与构件绑定关系列表 {@link DescribeSpaceDeviceRelationListRequest} {@link DescribeSpaceDeviceRelationListResponse} */
  DescribeSpaceDeviceRelationList(data?: DescribeSpaceDeviceRelationListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSpaceDeviceRelationListResponse>;
  /** 查询设备绑定的空间信息 {@link DescribeSpaceInfoByDeviceIdRequest} {@link DescribeSpaceInfoByDeviceIdResponse} */
  DescribeSpaceInfoByDeviceId(data?: DescribeSpaceInfoByDeviceIdRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSpaceInfoByDeviceIdResponse>;
  /** 查询设备绑定的空间层级关系 {@link DescribeSpaceRelationByDeviceIdRequest} {@link DescribeSpaceRelationByDeviceIdResponse} */
  DescribeSpaceRelationByDeviceId(data?: DescribeSpaceRelationByDeviceIdRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSpaceRelationByDeviceIdResponse>;
  /** 查询空间分类 {@link DescribeSpaceTypeListRequest} {@link DescribeSpaceTypeListResponse} */
  DescribeSpaceTypeList(data?: DescribeSpaceTypeListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSpaceTypeListResponse>;
  /** 查询租户楼栋数量和楼栋建筑面积 {@link DescribeTenantBuildingCountAndAreaRequest} {@link DescribeTenantBuildingCountAndAreaResponse} */
  DescribeTenantBuildingCountAndArea(data?: DescribeTenantBuildingCountAndAreaRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTenantBuildingCountAndAreaResponse>;
  /** 查询租户组织部门列表 {@link DescribeTenantDepartmentListRequest} {@link DescribeTenantDepartmentListResponse} */
  DescribeTenantDepartmentList(data: DescribeTenantDepartmentListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTenantDepartmentListResponse>;
  /** 查询租户人员列表 {@link DescribeTenantUserListRequest} {@link DescribeTenantUserListResponse} */
  DescribeTenantUserList(data: DescribeTenantUserListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTenantUserListResponse>;
  /** 云录像接口 {@link DescribeVideoCloudRecordRequest} {@link DescribeVideoCloudRecordResponse} */
  DescribeVideoCloudRecord(data?: DescribeVideoCloudRecordRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVideoCloudRecordResponse>;
  /** 实时流接口 {@link DescribeVideoLiveStreamRequest} {@link DescribeVideoLiveStreamResponse} */
  DescribeVideoLiveStream(data?: DescribeVideoLiveStreamRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVideoLiveStreamResponse>;
  /** 历史流接口 {@link DescribeVideoRecordStreamRequest} {@link DescribeVideoRecordStreamResponse} */
  DescribeVideoRecordStream(data?: DescribeVideoRecordStreamRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVideoRecordStreamResponse>;
  /** 查询项目空间楼栋数量与建筑面积 {@link DescribeWorkSpaceBuildingCountAndAreaRequest} {@link DescribeWorkSpaceBuildingCountAndAreaResponse} */
  DescribeWorkSpaceBuildingCountAndArea(data?: DescribeWorkSpaceBuildingCountAndAreaRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWorkSpaceBuildingCountAndAreaResponse>;
  /** 获取租户下的空间列表 {@link DescribeWorkspaceListRequest} {@link DescribeWorkspaceListResponse} */
  DescribeWorkspaceList(data?: DescribeWorkspaceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWorkspaceListResponse>;
  /** 查询项目空间人员列表 {@link DescribeWorkspaceUserListRequest} {@link DescribeWorkspaceUserListResponse} */
  DescribeWorkspaceUserList(data: DescribeWorkspaceUserListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWorkspaceUserListResponse>;
  /** 批量修改设备名字 {@link ModifyDeviceNameRequest} {@link ModifyDeviceNameResponse} */
  ModifyDeviceName(data?: ModifyDeviceNameRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDeviceNameResponse>;
  /** 单条消息上报 {@link ReportAppMessageRequest} {@link ReportAppMessageResponse} */
  ReportAppMessage(data?: ReportAppMessageRequest, config?: AxiosRequestConfig): AxiosPromise<ReportAppMessageResponse>;
  /** 断流接口 {@link StopVideoStreamingRequest} {@link StopVideoStreamingResponse} */
  StopVideoStreaming(data?: StopVideoStreamingRequest, config?: AxiosRequestConfig): AxiosPromise<StopVideoStreamingResponse>;
  /** 修改工作空间园区属性 {@link UpdateWorkspaceParkAttributesRequest} {@link UpdateWorkspaceParkAttributesResponse} */
  UpdateWorkspaceParkAttributes(data?: UpdateWorkspaceParkAttributesRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateWorkspaceParkAttributesResponse>;
}

export declare type Versions = ["2023-04-27"];

export default Weilingwith;
