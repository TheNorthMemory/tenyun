/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 快照策略信息 */
declare interface AutoSnapshotPolicyInfo {
  /** 快照策略ID */
  AutoSnapshotPolicyId: string;
  /** 快照策略ID */
  PolicyName: string;
  /** 快照策略创建时间 */
  CreationTime: string;
  /** 关联的文件系统个数 */
  FileSystemNums: number;
  /** 快照定期备份在一星期哪一天 */
  DayOfWeek: string;
  /** 快照定期备份在一天的哪一小时 */
  Hour: string;
  /** 是否激活定期快照功能 */
  IsActivated: number;
  /** 下一次触发快照时间 */
  NextActiveTime: string;
  /** 快照策略状态 */
  Status: string;
  /** 帐号ID */
  AppId: number;
  /** 保留时间 */
  AliveDays: number;
  /** 地域 */
  RegionName: string;
  /** 文件系统信息 */
  FileSystems: FileSystemByPolicy[];
}

/** 版本控制-协议详情 */
declare interface AvailableProtoStatus {
  /** 售卖状态。可选值有 sale_out 售罄、saling可售、no_saling不可销售 */
  SaleStatus: string;
  /** 协议类型。可选值有 NFS、CIFS */
  Protocol: string;
}

/** 版本控制-区域数组 */
declare interface AvailableRegion {
  /** 区域名称，如“ap-beijing” */
  Region: string;
  /** 区域名称，如“bj” */
  RegionName: string;
  /** 区域可用情况，当区域内至少有一个可用区处于可售状态时，取值为AVAILABLE，否则为UNAVAILABLE */
  RegionStatus: string;
  /** 可用区数组 */
  Zones: AvailableZone[];
  /** 区域中文名称，如“广州” */
  RegionCnName: string;
}

/** 版本控制-类型数组 */
declare interface AvailableType {
  /** 协议与售卖详情 */
  Protocols: AvailableProtoStatus[];
  /** 存储类型。返回值中 SD 为标准型存储、HP 为性能型存储 */
  Type: string;
  /** 是否支持预付费。返回值中 true 为支持、false 为不支持 */
  Prepayment: boolean;
}

/** 版本控制-可用区数组 */
declare interface AvailableZone {
  /** 可用区名称 */
  Zone: string;
  /** 可用区ID */
  ZoneId: number;
  /** 可用区中文名称 */
  ZoneCnName: string;
  /** Type数组 */
  Types: AvailableType[];
  /** 可用区中英文名称 */
  ZoneName: string;
}

/** 绑定快照策略的文件系统信息 */
declare interface FileSystemByPolicy {
  /** 文件系统名称 */
  CreationToken: string;
  /** 文件系统ID */
  FileSystemId: string;
  /** 文件系统大小 */
  SizeByte: number;
  /** 存储类型 */
  StorageType: string;
  /** 快照总大小 */
  TotalSnapshotSize: number;
  /** 文件系统创建时间 */
  CreationTime: string;
  /** 文件系统所在区ID */
  ZoneId: number;
}

/** 文件系统客户端信息 */
declare interface FileSystemClient {
  /** 文件系统IP地址 */
  CfsVip: string;
  /** 客户端IP地址 */
  ClientIp: string;
  /** 文件系统所属VPCID */
  VpcId: string;
  /** 可用区名称，例如ap-beijing-1，请参考 概览文档中的地域与可用区列表 */
  Zone: string;
  /** 可用区中文名称 */
  ZoneName: string;
  /** 该文件系统被挂载到客户端上的路径信息 */
  MountDirectory: string;
}

/** 文件系统基本信息 */
declare interface FileSystemInfo {
  /** 创建时间 */
  CreationTime: string;
  /** 用户自定义名称 */
  CreationToken: string;
  /** 文件系统 ID */
  FileSystemId: string;
  /** 文件系统状态 */
  LifeCycleState: string;
  /** 文件系统已使用容量 */
  SizeByte: number;
  /** 文件系统最大空间限制 */
  SizeLimit: number;
  /** 区域 ID */
  ZoneId: number;
  /** 区域名称 */
  Zone: string;
  /** 文件系统协议类型 */
  Protocol: string;
  /** 文件系统存储类型 */
  StorageType: string;
  /** 文件系统绑定的预付费存储包 */
  StorageResourcePkg: string;
  /** 文件系统绑定的预付费带宽包（暂未支持） */
  BandwidthResourcePkg: string;
  /** 文件系统绑定权限组信息 */
  PGroup: PGroup;
  /** 用户自定义名称 */
  FsName: string;
  /** 文件系统是否加密 */
  Encrypted: boolean;
  /** 加密所使用的密钥，可以为密钥的 ID 或者 ARN */
  KmsKeyId: string;
  /** 应用ID */
  AppId: number;
  /** 文件系统吞吐上限，吞吐上限是根据文件系统当前已使用存储量、绑定的存储资源包以及吞吐资源包一同确定 */
  BandwidthLimit: number;
  /** 文件系统总容量 */
  Capacity: number;
  /** 文件系统标签列表 */
  Tags: TagInfo[];
}

/** 条件过滤 */
declare interface Filter {
  /** 值 */
  Values: string[];
  /** 名称 */
  Name: string;
}

/** 挂载点信息 */
declare interface MountInfo {
  /** 文件系统 ID */
  FileSystemId: string;
  /** 挂载点 ID */
  MountTargetId: string;
  /** 挂载点 IP */
  IpAddress: string;
  /** 挂载根目录 */
  FSID: string;
  /** 挂载点状态 */
  LifeCycleState: string;
  /** 网络类型 */
  NetworkInterface: string;
  /** 私有网络 ID */
  VpcId: string;
  /** 私有网络名称 */
  VpcName: string;
  /** 子网 Id */
  SubnetId: string;
  /** 子网名称 */
  SubnetName: string;
  /** CFS Turbo使用的云联网ID */
  CcnID: string;
  /** 云联网中CFS Turbo使用的网段 */
  CidrBlock: string;
}

/** 文件系统绑定权限组信息 */
declare interface PGroup {
  /** 权限组ID */
  PGroupId: string;
  /** 权限组名称 */
  Name: string;
}

/** 权限组数组 */
declare interface PGroupInfo {
  /** 权限组ID */
  PGroupId: string;
  /** 权限组名称 */
  Name: string;
  /** 描述信息 */
  DescInfo: string;
  /** 创建时间 */
  CDate: string;
  /** 关联文件系统个数 */
  BindCfsNum: number;
}

/** 权限组规则列表 */
declare interface PGroupRuleInfo {
  /** 规则ID */
  RuleId: string;
  /** 允许访问的客户端IP */
  AuthClientIp: string;
  /** 读写权限, ro为只读，rw为读写 */
  RWPermission: string;
  /** 用户权限。其中all_squash为所有访问用户都会被映射为匿名用户或用户组；no_all_squash为访问用户会先与本机用户匹配，匹配失败后再映射为匿名用户或用户组；root_squash为将来访的root用户映射为匿名用户或用户组；no_root_squash为来访的root用户保持root帐号权限。 */
  UserPermission: string;
  /** 规则优先级，1-100。 其中 1 为最高，100为最低 */
  Priority: number;
}

/** 快照信息 */
declare interface SnapshotInfo {
  /** 创建快照时间 */
  CreationTime: string;
  /** 快照名称 */
  SnapshotName: string;
  /** 快照ID */
  SnapshotId: string;
  /** 快照状态 */
  Status: string;
  /** 地域名称 */
  RegionName: string;
  /** 文件系统ID */
  FileSystemId: string;
  /** 快照大小 */
  Size: number;
  /** 保留时长天 */
  AliveDay: number;
  /** 快照进度 */
  Percent: number;
  /** 帐号ID */
  AppId: number;
  /** 快照删除时间 */
  DeleteTime: string;
  /** 文件系统名称 */
  FsName: string;
  /** 快照标签 */
  Tags: TagInfo[];
}

/** 快照操作日志 */
declare interface SnapshotOperateLog {
  /** 操作类型 */
  Action: string;
  /** 操作时间 */
  ActionTime: string;
  /** 操作名称 */
  ActionName: string;
  /** 操作者 */
  Operator: string;
  /** 结果 */
  Result: number;
}

/** 文件系统快照统计 */
declare interface SnapshotStatistics {
  /** 地域 */
  Region: string;
  /** 快照总个数 */
  SnapshotNumber: number;
  /** 快照总容量 */
  SnapshotSize: number;
}

/** Tag信息单元 */
declare interface TagInfo {
  /** 标签键 */
  TagKey: string;
  /** 标签值 */
  TagValue: string;
}

declare interface BindAutoSnapshotPolicyRequest {
  /** 快照策略ID */
  AutoSnapshotPolicyId: string;
  /** 文件系统列表 */
  FileSystemIds: string;
}

declare interface BindAutoSnapshotPolicyResponse {
  /** 快照策略ID */
  AutoSnapshotPolicyId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateAutoSnapshotPolicyRequest {
  /** 快照重复日期，星期一到星期日 */
  DayOfWeek: string;
  /** 快照重复时间点 */
  Hour: string;
  /** 策略名称 */
  PolicyName?: string;
  /** 快照保留时长 */
  AliveDays?: number;
}

declare interface CreateAutoSnapshotPolicyResponse {
  /** 快照策略ID */
  AutoSnapshotPolicyId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateCfsFileSystemRequest {
  /** 可用区名称，例如ap-beijing-1，请参考 [概览](https://cloud.tencent.com/document/product/582/13225) 文档中的地域与可用区列表 */
  Zone: string;
  /** 网络类型，可选值为 VPC，BASIC，CCN；其中 VPC 为私有网络，BASIC 为基础网络, CCN 为云联网，Turbo系列当前必须选择云联网。目前基础网络已逐渐淘汰，不推荐使用。 */
  NetInterface: string;
  /** 权限组 ID，通用标准型和性能型必填，turbo系列请填写pgroupbasic */
  PGroupId: string;
  /** 文件系统协议类型， 值为 NFS、CIFS、TURBO ; 若留空则默认为 NFS协议，turbo系列必须选择turbo，不支持NFS、CIFS */
  Protocol?: string;
  /** 文件系统存储类型，默认值为 SD ；其中 SD 为通用标准型标准型存储， HP为通用性能型存储， TB为turbo标准型， TP 为turbo性能型。 */
  StorageType?: string;
  /** 私有网络（VPC） ID，若网络类型选择的是VPC，该字段为必填。 */
  VpcId?: string;
  /** 子网 ID，若网络类型选择的是VPC，该字段为必填。 */
  SubnetId?: string;
  /** 指定IP地址，仅VPC网络支持；若不填写、将在该子网下随机分配 IP，Turbo系列当前不支持指定 */
  MountIP?: string;
  /** 用户自定义文件系统名称 */
  FsName?: string;
  /** 文件系统标签 */
  ResourceTags?: TagInfo[];
  /** 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。用于保证请求幂等性的字符串失效时间为2小时。 */
  ClientToken?: string;
  /** 云联网ID， 若网络类型选择的是CCN，该字段为必填 */
  CcnId?: string;
  /** 云联网中CFS使用的网段， 若网络类型选择的是Ccn，该字段为必填，且不能和Ccn中已经绑定的网段冲突 */
  CidrBlock?: string;
  /** 文件系统容量，turbo系列必填，单位为GiB。 turbo标准型单位GB，起售40TiB，即40960 GiB；扩容步长20TiB，即20480 GiB。turbo性能型起售20TiB，即20480 GiB；扩容步长10TiB，10240 GiB。 */
  Capacity?: number;
}

declare interface CreateCfsFileSystemResponse {
  /** 文件系统创建时间 */
  CreationTime: string;
  /** 用户自定义文件系统名称 */
  CreationToken: string;
  /** 文件系统 ID */
  FileSystemId: string;
  /** 文件系统状态，可能出现状态包括：“creating” 创建中, “create_failed” 创建失败, “available” 可用, “unserviced” 不可用, “upgrading” 升级中， “deleting” 删除中。 */
  LifeCycleState: string;
  /** 文件系统已使用容量大小，单位为 Byte */
  SizeByte: number;
  /** 可用区 ID */
  ZoneId: number;
  /** 用户自定义文件系统名称 */
  FsName: string;
  /** 文件系统是否加密 */
  Encrypted: boolean;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateCfsPGroupRequest {
  /** 权限组名称，1-64个字符且只能为中文，字母，数字，下划线或横线 */
  Name: string;
  /** 权限组描述信息，1-255个字符 */
  DescInfo?: string;
}

declare interface CreateCfsPGroupResponse {
  /** 权限组 ID */
  PGroupId: string;
  /** 权限组名字 */
  Name: string;
  /** 权限组描述信息 */
  DescInfo: string;
  /** 已经与该权限组绑定的文件系统个数 */
  BindCfsNum: number;
  /** 权限组创建时间 */
  CDate: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateCfsRuleRequest {
  /** 权限组 ID */
  PGroupId: string;
  /** 可以填写单个 IP 或者单个网段，例如 10.1.10.11 或者 10.10.1.0/24。默认来访地址为*表示允许所有。同时需要注意，此处需填写 CVM 的内网 IP。 */
  AuthClientIp: string;
  /** 规则优先级，参数范围1-100。 其中 1 为最高，100为最低 */
  Priority: number;
  /** 读写权限, 值为 RO、RW；其中 RO 为只读，RW 为读写，不填默认为只读 */
  RWPermission?: string;
  /** 用户权限，值为 all_squash、no_all_squash、root_squash、no_root_squash。其中all_squash为所有访问用户都会被映射为匿名用户或用户组；no_all_squash为访问用户会先与本机用户匹配，匹配失败后再映射为匿名用户或用户组；root_squash为将来访的root用户映射为匿名用户或用户组；no_root_squash为来访的root用户保持root帐号权限。不填默认为root_squash。 */
  UserPermission?: string;
}

declare interface CreateCfsRuleResponse {
  /** 规则 ID */
  RuleId: string;
  /** 权限组 ID */
  PGroupId: string;
  /** 客户端 IP */
  AuthClientIp: string;
  /** 读写权限 */
  RWPermission: string;
  /** 用户权限 */
  UserPermission: string;
  /** 优先级 */
  Priority: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateCfsSnapshotRequest {
  /** 文件系统id */
  FileSystemId: string;
  /** 快照名称 */
  SnapshotName?: string;
  /** 快照标签 */
  ResourceTags?: TagInfo[];
}

declare interface CreateCfsSnapshotResponse {
  /** 文件系统快照id */
  SnapshotId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteAutoSnapshotPolicyRequest {
  /** 快照策略ID */
  AutoSnapshotPolicyId: string;
}

declare interface DeleteAutoSnapshotPolicyResponse {
  /** 快照策略ID */
  AutoSnapshotPolicyId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteCfsFileSystemRequest {
  /** 文件系统 ID。说明，进行删除文件系统操作前需要先调用 DeleteMountTarget 接口删除该文件系统的挂载点，否则会删除失败。 */
  FileSystemId: string;
}

declare interface DeleteCfsFileSystemResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteCfsPGroupRequest {
  /** 权限组 ID */
  PGroupId: string;
}

declare interface DeleteCfsPGroupResponse {
  /** 权限组 ID */
  PGroupId: string;
  /** 用户 ID */
  AppId: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteCfsRuleRequest {
  /** 权限组 ID */
  PGroupId: string;
  /** 规则 ID */
  RuleId: string;
}

declare interface DeleteCfsRuleResponse {
  /** 规则 ID */
  RuleId: string;
  /** 权限组 ID */
  PGroupId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteCfsSnapshotRequest {
  /** 文件系统快照id */
  SnapshotId: string;
}

declare interface DeleteCfsSnapshotResponse {
  /** 文件系统ID */
  SnapshotId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteMountTargetRequest {
  /** 文件系统 ID */
  FileSystemId: string;
  /** 挂载点 ID */
  MountTargetId: string;
}

declare interface DeleteMountTargetResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAutoSnapshotPoliciesRequest {
  /** 快照策略ID */
  AutoSnapshotPolicyId?: string;
  /** 分页码 */
  Offset?: number;
  /** 页面长 */
  Limit?: number;
  /** 过滤条件 */
  Filters?: Filter[];
  /** 升序，降序 */
  Order?: string;
  /** 排序字段 */
  OrderField?: string;
}

declare interface DescribeAutoSnapshotPoliciesResponse {
  /** 快照策略总个数 */
  TotalCount: number;
  /** 快照策略信息 */
  AutoSnapshotPolicies: AutoSnapshotPolicyInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAvailableZoneInfoRequest {
}

declare interface DescribeAvailableZoneInfoResponse {
  /** 各可用区的资源售卖情况以及支持的存储类型、存储协议等信息 */
  RegionZones: AvailableRegion[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeCfsFileSystemClientsRequest {
  /** 文件系统 ID。 */
  FileSystemId: string;
}

declare interface DescribeCfsFileSystemClientsResponse {
  /** 客户端列表 */
  ClientList: FileSystemClient[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeCfsFileSystemsRequest {
  /** 文件系统 ID */
  FileSystemId?: string;
  /** 私有网络（VPC） ID */
  VpcId?: string;
  /** 子网 ID */
  SubnetId?: string;
}

declare interface DescribeCfsFileSystemsResponse {
  /** 文件系统信息 */
  FileSystems: FileSystemInfo[];
  /** 文件系统总数 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeCfsPGroupsRequest {
}

declare interface DescribeCfsPGroupsResponse {
  /** 权限组信息列表 */
  PGroupList: PGroupInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeCfsRulesRequest {
  /** 权限组 ID */
  PGroupId: string;
}

declare interface DescribeCfsRulesResponse {
  /** 权限组规则列表 */
  RuleList: PGroupRuleInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeCfsServiceStatusRequest {
}

declare interface DescribeCfsServiceStatusResponse {
  /** 该用户当前 CFS 服务的状态，none 为未开通，creating 为开通中，created 为已开通 */
  CfsServiceStatus: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeCfsSnapshotOverviewRequest {
}

declare interface DescribeCfsSnapshotOverviewResponse {
  /** 统计信息 */
  StatisticsList: SnapshotStatistics[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeCfsSnapshotsRequest {
  /** 文件系统ID */
  FileSystemId?: string;
  /** 快照ID */
  SnapshotId?: string;
  /** 分页起始位置 */
  Offset?: number;
  /** 页面长度 */
  Limit?: number;
  /** 过滤条件 */
  Filters?: Filter[];
  /** 排序取值 */
  OrderField?: string;
  /** 排序 升序或者降序 */
  Order?: string;
}

declare interface DescribeCfsSnapshotsResponse {
  /** 总个数 */
  TotalCount: number;
  /** 快照信息描述 */
  Snapshots: SnapshotInfo[];
  /** 快照列表快照汇总 */
  TotalSize: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeMountTargetsRequest {
  /** 文件系统 ID */
  FileSystemId: string;
}

declare interface DescribeMountTargetsResponse {
  /** 挂载点详情 */
  MountTargets: MountInfo[];
  /** 挂载点数量 */
  NumberOfMountTargets: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeSnapshotOperationLogsRequest {
  /** 文件系统快照ID */
  SnapshotId: string;
  /** 起始时间 */
  StartTime: string;
  /** 结束时间 */
  EndTime: string;
}

declare interface DescribeSnapshotOperationLogsResponse {
  /** 快照ID */
  SnapshotId: string;
  /** 操作日志 */
  SnapshotOperates: SnapshotOperateLog[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface SignUpCfsServiceRequest {
}

declare interface SignUpCfsServiceResponse {
  /** 该用户当前 CFS 服务的状态，creating 是开通中，created 是已开通 */
  CfsServiceStatus: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UnbindAutoSnapshotPolicyRequest {
  /** 需要解绑的文件系统ID列表，用"," 分割 */
  FileSystemIds: string;
  /** 解绑的快照ID */
  AutoSnapshotPolicyId: string;
}

declare interface UnbindAutoSnapshotPolicyResponse {
  /** 快照策略ID */
  AutoSnapshotPolicyId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UpdateAutoSnapshotPolicyRequest {
  /** 快照策略ID */
  AutoSnapshotPolicyId: string;
  /** 快照策略名称 */
  PolicyName?: string;
  /** 快照定期备份在一星期哪一天 */
  DayOfWeek?: string;
  /** 快照定期备份在一天的哪一小时 */
  Hour?: string;
  /** 快照保留日期 */
  AliveDays?: number;
  /** 是否激活定期快照功能 */
  IsActivated?: number;
}

declare interface UpdateAutoSnapshotPolicyResponse {
  /** 快照策略ID */
  AutoSnapshotPolicyId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UpdateCfsFileSystemNameRequest {
  /** 文件系统 ID */
  FileSystemId: string;
  /** 用户自定义文件系统名称 */
  FsName?: string;
}

declare interface UpdateCfsFileSystemNameResponse {
  /** 用户自定义文件系统名称 */
  CreationToken: string;
  /** 文件系统ID */
  FileSystemId: string;
  /** 用户自定义文件系统名称 */
  FsName: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UpdateCfsFileSystemPGroupRequest {
  /** 权限组 ID */
  PGroupId: string;
  /** 文件系统 ID */
  FileSystemId: string;
}

declare interface UpdateCfsFileSystemPGroupResponse {
  /** 权限组 ID */
  PGroupId: string;
  /** 文件系统 ID */
  FileSystemId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UpdateCfsFileSystemSizeLimitRequest {
  /** 文件系统容量限制大小，输入范围0-1073741824, 单位为GB；其中输入值为0时，表示不限制文件系统容量。 */
  FsLimit: number;
  /** 文件系统ID，目前仅支持标准型文件系统。 */
  FileSystemId: string;
}

declare interface UpdateCfsFileSystemSizeLimitResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UpdateCfsPGroupRequest {
  /** 权限组 ID */
  PGroupId: string;
  /** 权限组名称，1-64个字符且只能为中文，字母，数字，下划线或横线 */
  Name?: string;
  /** 权限组描述信息，1-255个字符 */
  DescInfo?: string;
}

declare interface UpdateCfsPGroupResponse {
  /** 权限组ID */
  PGroupId: string;
  /** 权限组名称 */
  Name: string;
  /** 描述信息 */
  DescInfo: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UpdateCfsRuleRequest {
  /** 权限组 ID */
  PGroupId: string;
  /** 规则 ID */
  RuleId: string;
  /** 可以填写单个 IP 或者单个网段，例如 10.1.10.11 或者 10.10.1.0/24。默认来访地址为*表示允许所有。同时需要注意，此处需填写 CVM 的内网 IP。 */
  AuthClientIp?: string;
  /** 读写权限, 值为RO、RW；其中 RO 为只读，RW 为读写，不填默认为只读 */
  RWPermission?: string;
  /** 用户权限，值为all_squash、no_all_squash、root_squash、no_root_squash。其中all_squash为所有访问用户都会被映射为匿名用户或用户组；no_all_squash为访问用户会先与本机用户匹配，匹配失败后再映射为匿名用户或用户组；root_squash为将来访的root用户映射为匿名用户或用户组；no_root_squash为来访的root用户保持root帐号权限。不填默认为root_squash。 */
  UserPermission?: string;
  /** 规则优先级，参数范围1-100。 其中 1 为最高，100为最低 */
  Priority?: number;
}

declare interface UpdateCfsRuleResponse {
  /** 权限组 ID */
  PGroupId: string;
  /** 规则 ID */
  RuleId: string;
  /** 允许访问的客户端 IP 或者 IP 段 */
  AuthClientIp: string;
  /** 读写权限 */
  RWPermission: string;
  /** 用户权限 */
  UserPermission: string;
  /** 优先级 */
  Priority: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UpdateCfsSnapshotAttributeRequest {
  /** 文件系统快照ID */
  SnapshotId: string;
  /** 文件系统快照名称 */
  SnapshotName?: string;
  /** 文件系统快照保留天数 */
  AliveDays?: number;
}

declare interface UpdateCfsSnapshotAttributeResponse {
  /** 文件系统快照ID */
  SnapshotId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

/** {@link Cfs 文件存储} */
declare interface Cfs {
  (): Versions;
  /** {@link BindAutoSnapshotPolicy 文件系统绑定快照策略}({@link BindAutoSnapshotPolicyRequest 请求参数}): {@link BindAutoSnapshotPolicyResponse 返回参数} */
  BindAutoSnapshotPolicy(data: BindAutoSnapshotPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<BindAutoSnapshotPolicyResponse>;
  /** {@link CreateAutoSnapshotPolicy 创建定期快照策略}({@link CreateAutoSnapshotPolicyRequest 请求参数}): {@link CreateAutoSnapshotPolicyResponse 返回参数} */
  CreateAutoSnapshotPolicy(data: CreateAutoSnapshotPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAutoSnapshotPolicyResponse>;
  /** {@link CreateCfsFileSystem 创建文件系统}({@link CreateCfsFileSystemRequest 请求参数}): {@link CreateCfsFileSystemResponse 返回参数} */
  CreateCfsFileSystem(data: CreateCfsFileSystemRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCfsFileSystemResponse>;
  /** {@link CreateCfsPGroup 创建权限组}({@link CreateCfsPGroupRequest 请求参数}): {@link CreateCfsPGroupResponse 返回参数} */
  CreateCfsPGroup(data: CreateCfsPGroupRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCfsPGroupResponse>;
  /** {@link CreateCfsRule 创建权限组规则}({@link CreateCfsRuleRequest 请求参数}): {@link CreateCfsRuleResponse 返回参数} */
  CreateCfsRule(data: CreateCfsRuleRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCfsRuleResponse>;
  /** {@link CreateCfsSnapshot 创建文件系统快照}({@link CreateCfsSnapshotRequest 请求参数}): {@link CreateCfsSnapshotResponse 返回参数} */
  CreateCfsSnapshot(data: CreateCfsSnapshotRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCfsSnapshotResponse>;
  /** {@link DeleteAutoSnapshotPolicy 删除快照策略}({@link DeleteAutoSnapshotPolicyRequest 请求参数}): {@link DeleteAutoSnapshotPolicyResponse 返回参数} */
  DeleteAutoSnapshotPolicy(data: DeleteAutoSnapshotPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAutoSnapshotPolicyResponse>;
  /** {@link DeleteCfsFileSystem 删除文件系统}({@link DeleteCfsFileSystemRequest 请求参数}): {@link DeleteCfsFileSystemResponse 返回参数} */
  DeleteCfsFileSystem(data: DeleteCfsFileSystemRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCfsFileSystemResponse>;
  /** {@link DeleteCfsPGroup 删除权限组}({@link DeleteCfsPGroupRequest 请求参数}): {@link DeleteCfsPGroupResponse 返回参数} */
  DeleteCfsPGroup(data: DeleteCfsPGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCfsPGroupResponse>;
  /** {@link DeleteCfsRule 删除权限组规则}({@link DeleteCfsRuleRequest 请求参数}): {@link DeleteCfsRuleResponse 返回参数} */
  DeleteCfsRule(data: DeleteCfsRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCfsRuleResponse>;
  /** {@link DeleteCfsSnapshot 删除文件系统快照}({@link DeleteCfsSnapshotRequest 请求参数}): {@link DeleteCfsSnapshotResponse 返回参数} */
  DeleteCfsSnapshot(data: DeleteCfsSnapshotRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCfsSnapshotResponse>;
  /** {@link DeleteMountTarget 删除挂载点}({@link DeleteMountTargetRequest 请求参数}): {@link DeleteMountTargetResponse 返回参数} */
  DeleteMountTarget(data: DeleteMountTargetRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteMountTargetResponse>;
  /** {@link DescribeAutoSnapshotPolicies 查询文件系统快照策略列表信息}({@link DescribeAutoSnapshotPoliciesRequest 请求参数}): {@link DescribeAutoSnapshotPoliciesResponse 返回参数} */
  DescribeAutoSnapshotPolicies(data?: DescribeAutoSnapshotPoliciesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAutoSnapshotPoliciesResponse>;
  /** {@link DescribeAvailableZoneInfo 查询区域可用情况}({@link DescribeAvailableZoneInfoRequest 请求参数}): {@link DescribeAvailableZoneInfoResponse 返回参数} */
  DescribeAvailableZoneInfo(data?: DescribeAvailableZoneInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAvailableZoneInfoResponse>;
  /** {@link DescribeCfsFileSystemClients 查询文件系统客户端}({@link DescribeCfsFileSystemClientsRequest 请求参数}): {@link DescribeCfsFileSystemClientsResponse 返回参数} */
  DescribeCfsFileSystemClients(data: DescribeCfsFileSystemClientsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCfsFileSystemClientsResponse>;
  /** {@link DescribeCfsFileSystems 查询文件系统}({@link DescribeCfsFileSystemsRequest 请求参数}): {@link DescribeCfsFileSystemsResponse 返回参数} */
  DescribeCfsFileSystems(data?: DescribeCfsFileSystemsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCfsFileSystemsResponse>;
  /** {@link DescribeCfsPGroups 查询权限组列表}({@link DescribeCfsPGroupsRequest 请求参数}): {@link DescribeCfsPGroupsResponse 返回参数} */
  DescribeCfsPGroups(data?: DescribeCfsPGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCfsPGroupsResponse>;
  /** {@link DescribeCfsRules 查询权限组规则}({@link DescribeCfsRulesRequest 请求参数}): {@link DescribeCfsRulesResponse 返回参数} */
  DescribeCfsRules(data: DescribeCfsRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCfsRulesResponse>;
  /** {@link DescribeCfsServiceStatus 查询CFS服务状态}({@link DescribeCfsServiceStatusRequest 请求参数}): {@link DescribeCfsServiceStatusResponse 返回参数} */
  DescribeCfsServiceStatus(data?: DescribeCfsServiceStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCfsServiceStatusResponse>;
  /** {@link DescribeCfsSnapshotOverview 文件系统快照概览}({@link DescribeCfsSnapshotOverviewRequest 请求参数}): {@link DescribeCfsSnapshotOverviewResponse 返回参数} */
  DescribeCfsSnapshotOverview(data?: DescribeCfsSnapshotOverviewRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCfsSnapshotOverviewResponse>;
  /** {@link DescribeCfsSnapshots 查询快照列表}({@link DescribeCfsSnapshotsRequest 请求参数}): {@link DescribeCfsSnapshotsResponse 返回参数} */
  DescribeCfsSnapshots(data?: DescribeCfsSnapshotsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCfsSnapshotsResponse>;
  /** {@link DescribeMountTargets 查询文件系统挂载点}({@link DescribeMountTargetsRequest 请求参数}): {@link DescribeMountTargetsResponse 返回参数} */
  DescribeMountTargets(data: DescribeMountTargetsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMountTargetsResponse>;
  /** {@link DescribeSnapshotOperationLogs 查询快照操作日志}({@link DescribeSnapshotOperationLogsRequest 请求参数}): {@link DescribeSnapshotOperationLogsResponse 返回参数} */
  DescribeSnapshotOperationLogs(data: DescribeSnapshotOperationLogsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSnapshotOperationLogsResponse>;
  /** {@link SignUpCfsService 开通CFS服务}({@link SignUpCfsServiceRequest 请求参数}): {@link SignUpCfsServiceResponse 返回参数} */
  SignUpCfsService(data?: SignUpCfsServiceRequest, config?: AxiosRequestConfig): AxiosPromise<SignUpCfsServiceResponse>;
  /** {@link UnbindAutoSnapshotPolicy 解绑快照策略}({@link UnbindAutoSnapshotPolicyRequest 请求参数}): {@link UnbindAutoSnapshotPolicyResponse 返回参数} */
  UnbindAutoSnapshotPolicy(data: UnbindAutoSnapshotPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<UnbindAutoSnapshotPolicyResponse>;
  /** {@link UpdateAutoSnapshotPolicy 更新定期快照策略}({@link UpdateAutoSnapshotPolicyRequest 请求参数}): {@link UpdateAutoSnapshotPolicyResponse 返回参数} */
  UpdateAutoSnapshotPolicy(data: UpdateAutoSnapshotPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateAutoSnapshotPolicyResponse>;
  /** {@link UpdateCfsFileSystemName 更新文件系统名}({@link UpdateCfsFileSystemNameRequest 请求参数}): {@link UpdateCfsFileSystemNameResponse 返回参数} */
  UpdateCfsFileSystemName(data: UpdateCfsFileSystemNameRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateCfsFileSystemNameResponse>;
  /** {@link UpdateCfsFileSystemPGroup 更新文件系统的权限组}({@link UpdateCfsFileSystemPGroupRequest 请求参数}): {@link UpdateCfsFileSystemPGroupResponse 返回参数} */
  UpdateCfsFileSystemPGroup(data: UpdateCfsFileSystemPGroupRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateCfsFileSystemPGroupResponse>;
  /** {@link UpdateCfsFileSystemSizeLimit 更新文件系统存储容量限制}({@link UpdateCfsFileSystemSizeLimitRequest 请求参数}): {@link UpdateCfsFileSystemSizeLimitResponse 返回参数} */
  UpdateCfsFileSystemSizeLimit(data: UpdateCfsFileSystemSizeLimitRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateCfsFileSystemSizeLimitResponse>;
  /** {@link UpdateCfsPGroup 更新权限组信息}({@link UpdateCfsPGroupRequest 请求参数}): {@link UpdateCfsPGroupResponse 返回参数} */
  UpdateCfsPGroup(data: UpdateCfsPGroupRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateCfsPGroupResponse>;
  /** {@link UpdateCfsRule 更新权限组规则}({@link UpdateCfsRuleRequest 请求参数}): {@link UpdateCfsRuleResponse 返回参数} */
  UpdateCfsRule(data: UpdateCfsRuleRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateCfsRuleResponse>;
  /** {@link UpdateCfsSnapshotAttribute 更新文件系统快照信息}({@link UpdateCfsSnapshotAttributeRequest 请求参数}): {@link UpdateCfsSnapshotAttributeResponse 返回参数} */
  UpdateCfsSnapshotAttribute(data: UpdateCfsSnapshotAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateCfsSnapshotAttributeResponse>;
}

export declare type Versions = ["2019-07-19"];

export default Cfs;
