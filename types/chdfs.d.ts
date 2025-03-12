/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 权限组 */
declare interface AccessGroup {
  /** 权限组ID */
  AccessGroupId?: string;
  /** 权限组名称 */
  AccessGroupName?: string;
  /** 权限组描述 */
  Description?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** VPC网络类型（1：CVM） */
  VpcType?: number;
  /** VPC网络ID */
  VpcId?: string;
}

/** 权限规则 */
declare interface AccessRule {
  /** 权限规则ID */
  AccessRuleId?: number;
  /** 权限规则地址（网段或IP） */
  Address?: string;
  /** 权限规则访问模式（1：只读；2：读写） */
  AccessMode?: number;
  /** 优先级（取值范围1~100，值越小优先级越高） */
  Priority?: number;
  /** 创建时间 */
  CreateTime?: string;
}

/** 文件系统 */
declare interface FileSystem {
  /** 资源所属用户AppId */
  AppId?: number;
  /** 文件系统名称 */
  FileSystemName?: string;
  /** 文件系统描述 */
  Description?: string;
  /** 地域 */
  Region?: string;
  /** 文件系统ID */
  FileSystemId?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** 文件系统块大小（byte） */
  BlockSize?: number;
  /** 文件系统容量（byte） */
  CapacityQuota?: number;
  /** 文件系统状态（1：创建中；2：创建成功；3：创建失败） */
  Status?: number;
  /** 超级用户名列表 */
  SuperUsers?: string[];
  /** POSIX权限控制 */
  PosixAcl?: boolean;
  /** 是否打开Ranger地址校验 */
  EnableRanger?: boolean;
  /** Ranger地址列表 */
  RangerServiceAddresses?: string[];
}

/** 生命周期规则 */
declare interface LifeCycleRule {
  /** 生命周期规则ID */
  LifeCycleRuleId?: number;
  /** 生命周期规则名称 */
  LifeCycleRuleName?: string;
  /** 生命周期规则路径（目录或文件） */
  Path?: string;
  /** 生命周期规则转换列表 */
  Transitions?: Transition[];
  /** 生命周期规则状态（1：打开；2：关闭） */
  Status?: number;
  /** 创建时间 */
  CreateTime?: string;
  /** 生命周期规则当前路径具体存储量 */
  Summary?: Summary;
  /** Summary更新时间 */
  LastSummaryTime?: string;
}

/** 挂载点 */
declare interface MountPoint {
  /** 挂载点ID */
  MountPointId?: string;
  /** 挂载点名称 */
  MountPointName?: string;
  /** 文件系统ID */
  FileSystemId?: string;
  /** 挂载点状态（1：打开；2：关闭） */
  Status?: number;
  /** 创建时间 */
  CreateTime?: string;
  /** 绑定的权限组ID列表 */
  AccessGroupIds?: string[];
}

/** 回热任务 */
declare interface RestoreTask {
  /** 回热任务ID */
  RestoreTaskId?: number;
  /** 回热任务文件路径 */
  FilePath?: string;
  /** 回热任务类型（1：标准；2：极速；3：批量，暂时仅支持极速） */
  Type?: number;
  /** 指定恢复出的临时副本的有效时长（单位天） */
  Days?: number;
  /** 回热任务状态（1：绑定文件中；2：绑定文件完成；3：文件回热中；4：文件回热完成） */
  Status?: number;
  /** 创建时间 */
  CreateTime?: string;
}

/** 生命周期规则当前路径具体存储量信息 */
declare interface Summary {
  /** 已使用容量（byte） */
  CapacityUsed?: number;
  /** 已使用COS标准存储容量（byte） */
  StandardCapacityUsed?: number;
  /** 已使用COS低频存储容量（byte） */
  DegradeCapacityUsed?: number;
  /** 已使用COS归档存储容量（byte） */
  ArchiveCapacityUsed?: number;
  /** 已使用COS深度归档存储容量（byte） */
  DeepArchiveCapacityUsed?: number;
  /** 已使用COS智能分层存储容量（byte） */
  IntelligentCapacityUsed?: number;
}

/** 资源标签。 */
declare interface Tag {
  /** 标签键 */
  Key: string;
  /** 标签值 */
  Value: string;
}

/** 生命周期规则转换属性 */
declare interface Transition {
  /** 触发时间（单位天） */
  Days: number;
  /** 转换类型（1：归档；2：删除；3：低频；4：深度归档；5：智能分层） */
  Type: number;
}

declare interface AssociateAccessGroupsRequest {
  /** 挂载点ID */
  MountPointId: string;
  /** 权限组ID列表 */
  AccessGroupIds: string[];
}

declare interface AssociateAccessGroupsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateAccessGroupRequest {
  /** 权限组名称 */
  AccessGroupName: string;
  /** VPC网络类型（1：CVM） */
  VpcType: number;
  /** VPC网络ID */
  VpcId: string;
  /** 权限组描述，默认为空字符串 */
  Description?: string;
}

declare interface CreateAccessGroupResponse {
  /** 权限组 */
  AccessGroup?: AccessGroup;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateAccessRulesRequest {
  /** 多个权限规则，上限为10 */
  AccessRules: AccessRule[];
  /** 权限组ID */
  AccessGroupId: string;
}

declare interface CreateAccessRulesResponse {
  /** 权限规则列表 */
  AccessRules?: AccessRule[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateFileSystemRequest {
  /** 文件系统名称 */
  FileSystemName: string;
  /** 是否校验POSIX ACL */
  PosixAcl: boolean;
  /** 文件系统描述，默认为空字符串 */
  Description?: string;
  /** 文件系统容量（byte），下限为1GB，上限为1PB，且必须是1GB的整数倍 */
  CapacityQuota?: number;
  /** 超级用户名列表，默认为空数组 */
  SuperUsers?: string[];
  /** 根目录Inode用户名，默认为hadoop */
  RootInodeUser?: string;
  /** 根目录Inode组名，默认为supergroup */
  RootInodeGroup?: string;
  /** 是否打开Ranger地址校验 */
  EnableRanger?: boolean;
  /** Ranger地址列表，默认为空数组 */
  RangerServiceAddresses?: string[];
  /** 多个资源标签，可以为空数组 */
  Tags?: Tag[];
}

declare interface CreateFileSystemResponse {
  /** 文件系统 */
  FileSystem?: FileSystem;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateLifeCycleRulesRequest {
  /** 文件系统ID */
  FileSystemId: string;
  /** 多个生命周期规则，上限为10 */
  LifeCycleRules: LifeCycleRule[];
}

declare interface CreateLifeCycleRulesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateMountPointRequest {
  /** 挂载点名称 */
  MountPointName: string;
  /** 文件系统ID */
  FileSystemId: string;
  /** 挂载点状态（1：打开；2：关闭） */
  MountPointStatus: number;
}

declare interface CreateMountPointResponse {
  /** 挂载点 */
  MountPoint?: MountPoint;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateRestoreTasksRequest {
  /** 文件系统ID */
  FileSystemId: string;
  /** 多个回热任务，上限为10 */
  RestoreTasks: RestoreTask[];
}

declare interface CreateRestoreTasksResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteAccessGroupRequest {
  /** 权限组ID */
  AccessGroupId: string;
}

declare interface DeleteAccessGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteAccessRulesRequest {
  /** 多个权限规则ID，上限为10 */
  AccessRuleIds: number[];
}

declare interface DeleteAccessRulesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteFileSystemRequest {
  /** 文件系统ID */
  FileSystemId: string;
}

declare interface DeleteFileSystemResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteLifeCycleRulesRequest {
  /** 多个生命周期规则ID，上限为10 */
  LifeCycleRuleIds: number[];
}

declare interface DeleteLifeCycleRulesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteMountPointRequest {
  /** 挂载点ID */
  MountPointId: string;
}

declare interface DeleteMountPointResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAccessGroupRequest {
  /** 权限组ID */
  AccessGroupId: string;
}

declare interface DescribeAccessGroupResponse {
  /** 权限组 */
  AccessGroup?: AccessGroup;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAccessGroupsRequest {
  /** VPC网络ID备注：入参只能指定VpcId和OwnerUin的其中一个 */
  VpcId?: string;
  /** 资源所属者Uin */
  OwnerUin?: number;
}

declare interface DescribeAccessGroupsResponse {
  /** 权限组列表 */
  AccessGroups?: AccessGroup[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAccessRulesRequest {
  /** 权限组ID */
  AccessGroupId: string;
}

declare interface DescribeAccessRulesResponse {
  /** 权限规则列表 */
  AccessRules: AccessRule[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFileSystemRequest {
  /** 文件系统ID */
  FileSystemId: string;
}

declare interface DescribeFileSystemResponse {
  /** 文件系统 */
  FileSystem?: FileSystem;
  /** 文件系统已使用容量（byte） */
  CapacityUsed?: number;
  /** 已使用COS归档存储容量（byte） */
  ArchiveCapacityUsed?: number;
  /** 已使用COS标准存储容量（byte） */
  StandardCapacityUsed?: number;
  /** 已使用COS低频存储容量（byte） */
  DegradeCapacityUsed?: number;
  /** 已使用COS深度归档存储容量（byte） */
  DeepArchiveCapacityUsed?: number;
  /** 已使用COS智能分层存储容量（byte） */
  IntelligentCapacityUsed?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFileSystemsRequest {
}

declare interface DescribeFileSystemsResponse {
  /** 文件系统列表 */
  FileSystems?: FileSystem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLifeCycleRulesRequest {
  /** 文件系统ID */
  FileSystemId: string;
}

declare interface DescribeLifeCycleRulesResponse {
  /** 生命周期规则列表 */
  LifeCycleRules?: LifeCycleRule[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMountPointRequest {
  /** 挂载点ID */
  MountPointId: string;
}

declare interface DescribeMountPointResponse {
  /** 挂载点 */
  MountPoint?: MountPoint;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMountPointsRequest {
  /** 文件系统ID备注：入参只能指定AccessGroupId、FileSystemId和OwnerUin的其中一个 */
  FileSystemId?: string;
  /** 权限组ID */
  AccessGroupId?: string;
  /** 资源所属者Uin */
  OwnerUin?: number;
}

declare interface DescribeMountPointsResponse {
  /** 挂载点列表 */
  MountPoints?: MountPoint[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeResourceTagsRequest {
  /** 文件系统ID */
  FileSystemId: string;
}

declare interface DescribeResourceTagsResponse {
  /** 资源标签列表 */
  Tags: Tag[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRestoreTasksRequest {
  /** 文件系统ID */
  FileSystemId: string;
}

declare interface DescribeRestoreTasksResponse {
  /** 回热任务列表 */
  RestoreTasks: RestoreTask[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DisassociateAccessGroupsRequest {
  /** 挂载点ID */
  MountPointId: string;
  /** 权限组ID列表 */
  AccessGroupIds: string[];
}

declare interface DisassociateAccessGroupsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAccessGroupRequest {
  /** 权限组ID */
  AccessGroupId: string;
  /** 权限组名称 */
  AccessGroupName?: string;
  /** 权限组描述 */
  Description?: string;
}

declare interface ModifyAccessGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAccessRulesRequest {
  /** 多个权限规则，上限为10 */
  AccessRules: AccessRule[];
}

declare interface ModifyAccessRulesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyFileSystemRequest {
  /** 文件系统ID */
  FileSystemId: string;
  /** 文件系统名称 */
  FileSystemName?: string;
  /** 文件系统描述 */
  Description?: string;
  /** 文件系统容量（byte），下限为1GB，上限为1PB，且必须是1GB的整数倍注意：修改的文件系统容量不能小于当前使用量 */
  CapacityQuota?: number;
  /** 超级用户名列表，可以为空数组 */
  SuperUsers?: string[];
  /** 是否校验POSIX ACL */
  PosixAcl?: boolean;
  /** 是否打开Ranger地址校验 */
  EnableRanger?: boolean;
  /** Ranger地址列表，可以为空数组 */
  RangerServiceAddresses?: string[];
}

declare interface ModifyFileSystemResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyLifeCycleRulesRequest {
  /** 多个生命周期规则，上限为10 */
  LifeCycleRules: LifeCycleRule[];
}

declare interface ModifyLifeCycleRulesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyMountPointRequest {
  /** 挂载点ID */
  MountPointId: string;
  /** 挂载点名称 */
  MountPointName?: string;
  /** 挂载点状态 */
  MountPointStatus?: number;
}

declare interface ModifyMountPointResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyResourceTagsRequest {
  /** 文件系统ID */
  FileSystemId: string;
  /** 多个资源标签，可以为空数组 */
  Tags?: Tag[];
}

declare interface ModifyResourceTagsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare namespace V20190718 {
  type VersionHeader = { headers: { 'X-TC-Version': '2019-07-18' } }

  /** 权限组 */
  interface AccessGroup {
    /** 权限组ID */
    AccessGroupId: string;
    /** 权限组名称 */
    AccessGroupName: string;
    /** 权限组描述 */
    Description: string;
    /** 创建时间 */
    CreateTime: string;
  }

  /** 权限规则 */
  interface AccessRule {
    /** 权限规则ID */
    AccessRuleId?: number;
    /** 权限规则地址（网段或IP） */
    Address?: string;
    /** 权限规则访问模式（1：只读；2：读写） */
    AccessMode?: number;
    /** 优先级（取值范围1~100，值越小优先级越高） */
    Priority?: number;
    /** 创建时间 */
    CreateTime?: string;
  }

  /** 文件系统 */
  interface FileSystem {
    /** appid */
    AppId: number;
    /** 文件系统名称 */
    FileSystemName: string;
    /** 文件系统描述 */
    Description: string;
    /** 地域 */
    Region: string;
    /** 文件系统ID */
    FileSystemId: string;
    /** 创建时间 */
    CreateTime: string;
    /** 文件系统块大小（byte） */
    BlockSize: number;
    /** 文件系统容量（byte） */
    CapacityQuota: number;
    /** 文件系统状态（1：创建中；2：创建成功；3：创建失败） */
    Status: number;
  }

  /** 过滤条件 */
  interface Filter {
    /** 过滤字段 */
    Name: string;
    /** 过滤值 */
    Values: string[];
  }

  /** 生命周期规则 */
  interface LifeCycleRule {
    /** 生命周期规则ID */
    LifeCycleRuleId?: number;
    /** 生命周期规则名称 */
    LifeCycleRuleName?: string;
    /** 生命周期规则路径（目录或文件） */
    Path?: string;
    /** 生命周期规则转换列表 */
    Transitions?: Transition[];
    /** 生命周期规则状态（1：打开；2：关闭） */
    Status?: number;
    /** 创建时间 */
    CreateTime?: string;
  }

  /** 挂载点 */
  interface MountPoint {
    /** 挂载点ID */
    MountPointId: string;
    /** 挂载点名称 */
    MountPointName?: string;
    /** 文件系统ID */
    FileSystemId: string;
    /** 权限组ID */
    AccessGroupId: string;
    /** VPC网络ID */
    VpcId: string;
    /** 挂载点状态（1：打开；2：关闭） */
    Status: number;
    /** 创建时间 */
    CreateTime: string;
    /** VPC网络类型 */
    VpcType: number;
  }

  /** 回热任务 */
  interface RestoreTask {
    /** 回热任务ID */
    RestoreTaskId?: number;
    /** 回热任务文件路径 */
    FilePath?: string;
    /** 回热任务类型（1：标准；2：极速；3：批量） */
    Type?: number;
    /** 指定恢复出的临时副本的有效时长（单位天） */
    Days?: number;
    /** 回热任务状态（1：绑定文件中；2：绑定文件完成；3：文件回热中；4：文件回热完成） */
    Status?: number;
    /** 创建时间 */
    CreateTime?: string;
  }

  /** 资源标签。 */
  interface Tag {
    /** 标签键 */
    Key: string;
    /** 标签值 */
    Value: string;
  }

  /** 生命周期规则转换属性 */
  interface Transition {
    /** 触发时间（单位天） */
    Days: number;
    /** 转换类型（1：归档；2：删除） */
    Type: number;
  }

  interface CreateAccessGroupRequest {
    /** 权限组名称 */
    AccessGroupName: string;
    /** 权限组描述 */
    Description?: string;
  }

  interface CreateAccessGroupResponse {
    /** 权限组 */
    AccessGroup?: AccessGroup;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateAccessRulesRequest {
    /** 多个权限规则，上限为10 */
    AccessRules: AccessRule[];
    /** 权限组ID */
    AccessGroupId: string;
  }

  interface CreateAccessRulesResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateFileSystemRequest {
    /** 文件系统名称 */
    FileSystemName: string;
    /** 文件系统容量（byte），下限为1G，上限为1P，且必须是1G的整数倍 */
    CapacityQuota: number;
    /** 文件系统描述 */
    Description?: string;
  }

  interface CreateFileSystemResponse {
    /** 文件系统 */
    FileSystem?: FileSystem;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateLifeCycleRulesRequest {
    /** 文件系统ID */
    FileSystemId: string;
    /** 多个生命周期规则，上限为10 */
    LifeCycleRules: LifeCycleRule[];
  }

  interface CreateLifeCycleRulesResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateMountPointRequest {
    /** 挂载点名称 */
    MountPointName: string;
    /** 文件系统ID */
    FileSystemId: string;
    /** 权限组ID */
    AccessGroupId: string;
    /** VPC网络ID */
    VpcId: string;
    /** 挂载点状态（1：打开；2：关闭） */
    MountPointStatus: number;
    /** VPC网络类型（1：CVM；2：黑石1.0；3：黑石2.0） */
    VpcType: number;
  }

  interface CreateMountPointResponse {
    /** 挂载点 */
    MountPoint?: MountPoint;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateRestoreTasksRequest {
    /** 文件系统ID */
    FileSystemId: string;
    /** 多个回热任务，上限为10 */
    RestoreTasks: RestoreTask[];
  }

  interface CreateRestoreTasksResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteAccessGroupRequest {
    /** 权限组ID */
    AccessGroupId: string;
  }

  interface DeleteAccessGroupResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteAccessRulesRequest {
    /** 多个权限规则ID，上限为10 */
    AccessRuleIds: number[];
  }

  interface DeleteAccessRulesResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteFileSystemRequest {
    /** 文件系统ID */
    FileSystemId: string;
  }

  interface DeleteFileSystemResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteLifeCycleRulesRequest {
    /** 多个生命周期规则ID，上限为10 */
    LifeCycleRuleIds: number[];
  }

  interface DeleteLifeCycleRulesResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteMountPointRequest {
    /** 挂载点ID */
    MountPointId: string;
  }

  interface DeleteMountPointResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeAccessGroupsRequest {
    /** 过滤条件，Name可选“AccessGroupId“和“AccessGroupName”，Values上限为10 */
    Filters?: Filter[];
    /** 偏移量，默认为0 */
    Offset?: number;
    /** 返回数量，默认为所有 */
    Limit?: number;
  }

  interface DescribeAccessGroupsResponse {
    /** 权限组列表 */
    AccessGroups?: AccessGroup[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeAccessRulesRequest {
    /** 权限组ID */
    AccessGroupId: string;
    /** 偏移量，默认为0 */
    Offset?: number;
    /** 返回数量，默认为所有 */
    Limit?: number;
  }

  interface DescribeAccessRulesResponse {
    /** 权限规则列表 */
    AccessRules?: AccessRule[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeFileSystemRequest {
    /** 文件系统ID */
    FileSystemId: string;
  }

  interface DescribeFileSystemResponse {
    /** 文件系统 */
    FileSystem?: FileSystem;
    /** 文件系统已使用容量（已弃用） */
    FileSystemCapacityUsed?: number | null;
    /** 已使用容量（byte），包括标准和归档存储 */
    CapacityUsed?: number | null;
    /** 已使用归档存储容量（byte） */
    ArchiveCapacityUsed?: number | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeFileSystemsRequest {
    /** 偏移量，默认为0 */
    Offset?: number;
    /** 返回数量，默认为所有 */
    Limit?: number;
  }

  interface DescribeFileSystemsResponse {
    /** 文件系统列表 */
    FileSystems?: FileSystem[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeLifeCycleRulesRequest {
    /** 文件系统ID */
    FileSystemId: string;
  }

  interface DescribeLifeCycleRulesResponse {
    /** 生命周期规则列表 */
    LifeCycleRules?: LifeCycleRule[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeMountPointRequest {
    /** 挂载点ID */
    MountPointId: string;
  }

  interface DescribeMountPointResponse {
    /** 挂载点 */
    MountPoint?: MountPoint;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeMountPointsRequest {
    /** 文件系统ID注意：若根据AccessGroupId查看挂载点列表，则无需设置FileSystemId */
    FileSystemId?: string;
    /** 权限组ID注意：若根据FileSystemId查看挂载点列表，则无需设置AccessGroupId */
    AccessGroupId?: string;
    /** 偏移量，默认为0 */
    Offset?: number;
    /** 返回数量，默认为所有 */
    Limit?: number;
  }

  interface DescribeMountPointsResponse {
    /** 挂载点列表 */
    MountPoints?: MountPoint[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeResourceTagsRequest {
    /** 文件系统ID */
    FileSystemId: string;
  }

  interface DescribeResourceTagsResponse {
    /** 资源标签列表 */
    Tags?: Tag[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeRestoreTasksRequest {
    /** 文件系统ID */
    FileSystemId: string;
  }

  interface DescribeRestoreTasksResponse {
    /** 回热任务列表 */
    RestoreTasks?: RestoreTask[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyAccessGroupRequest {
    /** 权限组ID */
    AccessGroupId: string;
    /** 权限组名称 */
    AccessGroupName?: string;
    /** 权限组描述 */
    Description?: string;
  }

  interface ModifyAccessGroupResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyAccessRulesRequest {
    /** 多个权限规则，上限为10 */
    AccessRules: AccessRule[];
  }

  interface ModifyAccessRulesResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyFileSystemRequest {
    /** 文件系统ID */
    FileSystemId: string;
    /** 文件系统名称 */
    FileSystemName?: string;
    /** 文件系统描述 */
    Description?: string;
    /** 文件系统容量（byte），下限为1G，上限为1P，且必须是1G的整数倍注意：修改的文件系统容量不能小于当前使用量 */
    CapacityQuota?: number;
  }

  interface ModifyFileSystemResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyLifeCycleRulesRequest {
    /** 多个生命周期规则，上限为10 */
    LifeCycleRules: LifeCycleRule[];
  }

  interface ModifyLifeCycleRulesResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyMountPointRequest {
    /** 挂载点ID */
    MountPointId: string;
    /** 挂载点名称 */
    MountPointName?: string;
    /** 挂载点状态 */
    MountPointStatus?: number;
    /** 权限组ID */
    AccessGroupId?: string;
  }

  interface ModifyMountPointResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyResourceTagsRequest {
    /** 文件系统ID */
    FileSystemId: string;
    /** 多个资源标签，可以为空数组 */
    Tags?: Tag[];
  }

  interface ModifyResourceTagsResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }
}

/** {@link Chdfs 云 HDFS} */
declare interface Chdfs {
  (): Versions;
  /** 绑定权限组列表 {@link AssociateAccessGroupsRequest} {@link AssociateAccessGroupsResponse} */
  AssociateAccessGroups(data: AssociateAccessGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<AssociateAccessGroupsResponse>;
  /** 创建权限组 {@link CreateAccessGroupRequest} {@link CreateAccessGroupResponse} */
  CreateAccessGroup(data: CreateAccessGroupRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAccessGroupResponse>;
  /** 批量创建权限规则 {@link CreateAccessRulesRequest} {@link CreateAccessRulesResponse} */
  CreateAccessRules(data: CreateAccessRulesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAccessRulesResponse>;
  /** 创建文件系统 {@link CreateFileSystemRequest} {@link CreateFileSystemResponse} */
  CreateFileSystem(data: CreateFileSystemRequest, config?: AxiosRequestConfig): AxiosPromise<CreateFileSystemResponse>;
  /** 批量创建生命周期规则 {@link CreateLifeCycleRulesRequest} {@link CreateLifeCycleRulesResponse} */
  CreateLifeCycleRules(data: CreateLifeCycleRulesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateLifeCycleRulesResponse>;
  /** 创建挂载点 {@link CreateMountPointRequest} {@link CreateMountPointResponse} */
  CreateMountPoint(data: CreateMountPointRequest, config?: AxiosRequestConfig): AxiosPromise<CreateMountPointResponse>;
  /** 批量创建回热任务 {@link CreateRestoreTasksRequest} {@link CreateRestoreTasksResponse} */
  CreateRestoreTasks(data: CreateRestoreTasksRequest, config?: AxiosRequestConfig): AxiosPromise<CreateRestoreTasksResponse>;
  /** 删除权限组 {@link DeleteAccessGroupRequest} {@link DeleteAccessGroupResponse} */
  DeleteAccessGroup(data: DeleteAccessGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAccessGroupResponse>;
  /** 批量删除权限规则 {@link DeleteAccessRulesRequest} {@link DeleteAccessRulesResponse} */
  DeleteAccessRules(data: DeleteAccessRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAccessRulesResponse>;
  /** 删除文件系统 {@link DeleteFileSystemRequest} {@link DeleteFileSystemResponse} */
  DeleteFileSystem(data: DeleteFileSystemRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteFileSystemResponse>;
  /** 批量删除生命周期规则 {@link DeleteLifeCycleRulesRequest} {@link DeleteLifeCycleRulesResponse} */
  DeleteLifeCycleRules(data: DeleteLifeCycleRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteLifeCycleRulesResponse>;
  /** 删除挂载点 {@link DeleteMountPointRequest} {@link DeleteMountPointResponse} */
  DeleteMountPoint(data: DeleteMountPointRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteMountPointResponse>;
  /** 查看权限组详细信息 {@link DescribeAccessGroupRequest} {@link DescribeAccessGroupResponse} */
  DescribeAccessGroup(data: DescribeAccessGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAccessGroupResponse>;
  /** 查看权限组列表 {@link DescribeAccessGroupsRequest} {@link DescribeAccessGroupsResponse} */
  DescribeAccessGroups(data?: DescribeAccessGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAccessGroupsResponse>;
  /** 查看权限规则列表 {@link DescribeAccessRulesRequest} {@link DescribeAccessRulesResponse} */
  DescribeAccessRules(data: DescribeAccessRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAccessRulesResponse>;
  /** 查看文件系统详细信息 {@link DescribeFileSystemRequest} {@link DescribeFileSystemResponse} */
  DescribeFileSystem(data: DescribeFileSystemRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFileSystemResponse>;
  /** 查看文件系统列表 {@link DescribeFileSystemsRequest} {@link DescribeFileSystemsResponse} */
  DescribeFileSystems(data?: DescribeFileSystemsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFileSystemsResponse>;
  /** 查看生命周期规则列表 {@link DescribeLifeCycleRulesRequest} {@link DescribeLifeCycleRulesResponse} */
  DescribeLifeCycleRules(data: DescribeLifeCycleRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLifeCycleRulesResponse>;
  /** 查看挂载点详细信息 {@link DescribeMountPointRequest} {@link DescribeMountPointResponse} */
  DescribeMountPoint(data: DescribeMountPointRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMountPointResponse>;
  /** 查看挂载点列表 {@link DescribeMountPointsRequest} {@link DescribeMountPointsResponse} */
  DescribeMountPoints(data?: DescribeMountPointsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMountPointsResponse>;
  /** 查看资源标签列表 {@link DescribeResourceTagsRequest} {@link DescribeResourceTagsResponse} */
  DescribeResourceTags(data: DescribeResourceTagsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeResourceTagsResponse>;
  /** 查看回热任务列表 {@link DescribeRestoreTasksRequest} {@link DescribeRestoreTasksResponse} */
  DescribeRestoreTasks(data: DescribeRestoreTasksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRestoreTasksResponse>;
  /** 解绑权限组列表 {@link DisassociateAccessGroupsRequest} {@link DisassociateAccessGroupsResponse} */
  DisassociateAccessGroups(data: DisassociateAccessGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DisassociateAccessGroupsResponse>;
  /** 修改权限组属性 {@link ModifyAccessGroupRequest} {@link ModifyAccessGroupResponse} */
  ModifyAccessGroup(data: ModifyAccessGroupRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAccessGroupResponse>;
  /** 批量修改权限规则属性 {@link ModifyAccessRulesRequest} {@link ModifyAccessRulesResponse} */
  ModifyAccessRules(data: ModifyAccessRulesRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAccessRulesResponse>;
  /** 修改文件系统属性 {@link ModifyFileSystemRequest} {@link ModifyFileSystemResponse} */
  ModifyFileSystem(data: ModifyFileSystemRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyFileSystemResponse>;
  /** 批量修改生命周期规则属性 {@link ModifyLifeCycleRulesRequest} {@link ModifyLifeCycleRulesResponse} */
  ModifyLifeCycleRules(data: ModifyLifeCycleRulesRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyLifeCycleRulesResponse>;
  /** 修改挂载点属性 {@link ModifyMountPointRequest} {@link ModifyMountPointResponse} */
  ModifyMountPoint(data: ModifyMountPointRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyMountPointResponse>;
  /** 修改资源标签列表 {@link ModifyResourceTagsRequest} {@link ModifyResourceTagsResponse} */
  ModifyResourceTags(data: ModifyResourceTagsRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyResourceTagsResponse>;
  /** 创建权限组 {@link V20190718.CreateAccessGroupRequest} {@link V20190718.CreateAccessGroupResponse} */
  CreateAccessGroup(data: V20190718.CreateAccessGroupRequest, config: AxiosRequestConfig & V20190718.VersionHeader): AxiosPromise<V20190718.CreateAccessGroupResponse>;
  /** 批量创建权限规则 {@link V20190718.CreateAccessRulesRequest} {@link V20190718.CreateAccessRulesResponse} */
  CreateAccessRules(data: V20190718.CreateAccessRulesRequest, config: AxiosRequestConfig & V20190718.VersionHeader): AxiosPromise<V20190718.CreateAccessRulesResponse>;
  /** 创建文件系统 {@link V20190718.CreateFileSystemRequest} {@link V20190718.CreateFileSystemResponse} */
  CreateFileSystem(data: V20190718.CreateFileSystemRequest, config: AxiosRequestConfig & V20190718.VersionHeader): AxiosPromise<V20190718.CreateFileSystemResponse>;
  /** 批量创建生命周期规则 {@link V20190718.CreateLifeCycleRulesRequest} {@link V20190718.CreateLifeCycleRulesResponse} */
  CreateLifeCycleRules(data: V20190718.CreateLifeCycleRulesRequest, config: AxiosRequestConfig & V20190718.VersionHeader): AxiosPromise<V20190718.CreateLifeCycleRulesResponse>;
  /** 创建挂载点 {@link V20190718.CreateMountPointRequest} {@link V20190718.CreateMountPointResponse} */
  CreateMountPoint(data: V20190718.CreateMountPointRequest, config: AxiosRequestConfig & V20190718.VersionHeader): AxiosPromise<V20190718.CreateMountPointResponse>;
  /** 批量创建回热任务 {@link V20190718.CreateRestoreTasksRequest} {@link V20190718.CreateRestoreTasksResponse} */
  CreateRestoreTasks(data: V20190718.CreateRestoreTasksRequest, config: AxiosRequestConfig & V20190718.VersionHeader): AxiosPromise<V20190718.CreateRestoreTasksResponse>;
  /** 删除权限组 {@link V20190718.DeleteAccessGroupRequest} {@link V20190718.DeleteAccessGroupResponse} */
  DeleteAccessGroup(data: V20190718.DeleteAccessGroupRequest, config: AxiosRequestConfig & V20190718.VersionHeader): AxiosPromise<V20190718.DeleteAccessGroupResponse>;
  /** 批量删除权限规则 {@link V20190718.DeleteAccessRulesRequest} {@link V20190718.DeleteAccessRulesResponse} */
  DeleteAccessRules(data: V20190718.DeleteAccessRulesRequest, config: AxiosRequestConfig & V20190718.VersionHeader): AxiosPromise<V20190718.DeleteAccessRulesResponse>;
  /** 删除文件系统 {@link V20190718.DeleteFileSystemRequest} {@link V20190718.DeleteFileSystemResponse} */
  DeleteFileSystem(data: V20190718.DeleteFileSystemRequest, config: AxiosRequestConfig & V20190718.VersionHeader): AxiosPromise<V20190718.DeleteFileSystemResponse>;
  /** 批量删除生命周期规则 {@link V20190718.DeleteLifeCycleRulesRequest} {@link V20190718.DeleteLifeCycleRulesResponse} */
  DeleteLifeCycleRules(data: V20190718.DeleteLifeCycleRulesRequest, config: AxiosRequestConfig & V20190718.VersionHeader): AxiosPromise<V20190718.DeleteLifeCycleRulesResponse>;
  /** 删除挂载点 {@link V20190718.DeleteMountPointRequest} {@link V20190718.DeleteMountPointResponse} */
  DeleteMountPoint(data: V20190718.DeleteMountPointRequest, config: AxiosRequestConfig & V20190718.VersionHeader): AxiosPromise<V20190718.DeleteMountPointResponse>;
  /** 查看权限组列表 {@link V20190718.DescribeAccessGroupsRequest} {@link V20190718.DescribeAccessGroupsResponse} */
  DescribeAccessGroups(data: V20190718.DescribeAccessGroupsRequest, config: AxiosRequestConfig & V20190718.VersionHeader): AxiosPromise<V20190718.DescribeAccessGroupsResponse>;
  /** 查看权限规则列表 {@link V20190718.DescribeAccessRulesRequest} {@link V20190718.DescribeAccessRulesResponse} */
  DescribeAccessRules(data: V20190718.DescribeAccessRulesRequest, config: AxiosRequestConfig & V20190718.VersionHeader): AxiosPromise<V20190718.DescribeAccessRulesResponse>;
  /** 查看文件系统详细信息 {@link V20190718.DescribeFileSystemRequest} {@link V20190718.DescribeFileSystemResponse} */
  DescribeFileSystem(data: V20190718.DescribeFileSystemRequest, config: AxiosRequestConfig & V20190718.VersionHeader): AxiosPromise<V20190718.DescribeFileSystemResponse>;
  /** 查看文件系统列表 {@link V20190718.DescribeFileSystemsRequest} {@link V20190718.DescribeFileSystemsResponse} */
  DescribeFileSystems(data: V20190718.DescribeFileSystemsRequest, config: AxiosRequestConfig & V20190718.VersionHeader): AxiosPromise<V20190718.DescribeFileSystemsResponse>;
  /** 查看生命周期规则列表 {@link V20190718.DescribeLifeCycleRulesRequest} {@link V20190718.DescribeLifeCycleRulesResponse} */
  DescribeLifeCycleRules(data: V20190718.DescribeLifeCycleRulesRequest, config: AxiosRequestConfig & V20190718.VersionHeader): AxiosPromise<V20190718.DescribeLifeCycleRulesResponse>;
  /** 查看挂载点详细信息 {@link V20190718.DescribeMountPointRequest} {@link V20190718.DescribeMountPointResponse} */
  DescribeMountPoint(data: V20190718.DescribeMountPointRequest, config: AxiosRequestConfig & V20190718.VersionHeader): AxiosPromise<V20190718.DescribeMountPointResponse>;
  /** 查看挂载点列表 {@link V20190718.DescribeMountPointsRequest} {@link V20190718.DescribeMountPointsResponse} */
  DescribeMountPoints(data: V20190718.DescribeMountPointsRequest, config: AxiosRequestConfig & V20190718.VersionHeader): AxiosPromise<V20190718.DescribeMountPointsResponse>;
  /** 查看资源标签列表 {@link V20190718.DescribeResourceTagsRequest} {@link V20190718.DescribeResourceTagsResponse} */
  DescribeResourceTags(data: V20190718.DescribeResourceTagsRequest, config: AxiosRequestConfig & V20190718.VersionHeader): AxiosPromise<V20190718.DescribeResourceTagsResponse>;
  /** 查看回热任务列表 {@link V20190718.DescribeRestoreTasksRequest} {@link V20190718.DescribeRestoreTasksResponse} */
  DescribeRestoreTasks(data: V20190718.DescribeRestoreTasksRequest, config: AxiosRequestConfig & V20190718.VersionHeader): AxiosPromise<V20190718.DescribeRestoreTasksResponse>;
  /** 修改权限组属性 {@link V20190718.ModifyAccessGroupRequest} {@link V20190718.ModifyAccessGroupResponse} */
  ModifyAccessGroup(data: V20190718.ModifyAccessGroupRequest, config: AxiosRequestConfig & V20190718.VersionHeader): AxiosPromise<V20190718.ModifyAccessGroupResponse>;
  /** 批量修改权限规则属性 {@link V20190718.ModifyAccessRulesRequest} {@link V20190718.ModifyAccessRulesResponse} */
  ModifyAccessRules(data: V20190718.ModifyAccessRulesRequest, config: AxiosRequestConfig & V20190718.VersionHeader): AxiosPromise<V20190718.ModifyAccessRulesResponse>;
  /** 修改文件系统属性 {@link V20190718.ModifyFileSystemRequest} {@link V20190718.ModifyFileSystemResponse} */
  ModifyFileSystem(data: V20190718.ModifyFileSystemRequest, config: AxiosRequestConfig & V20190718.VersionHeader): AxiosPromise<V20190718.ModifyFileSystemResponse>;
  /** 批量修改生命周期规则属性 {@link V20190718.ModifyLifeCycleRulesRequest} {@link V20190718.ModifyLifeCycleRulesResponse} */
  ModifyLifeCycleRules(data: V20190718.ModifyLifeCycleRulesRequest, config: AxiosRequestConfig & V20190718.VersionHeader): AxiosPromise<V20190718.ModifyLifeCycleRulesResponse>;
  /** 修改挂载点属性 {@link V20190718.ModifyMountPointRequest} {@link V20190718.ModifyMountPointResponse} */
  ModifyMountPoint(data: V20190718.ModifyMountPointRequest, config: AxiosRequestConfig & V20190718.VersionHeader): AxiosPromise<V20190718.ModifyMountPointResponse>;
  /** 修改资源标签列表 {@link V20190718.ModifyResourceTagsRequest} {@link V20190718.ModifyResourceTagsResponse} */
  ModifyResourceTags(data: V20190718.ModifyResourceTagsRequest, config: AxiosRequestConfig & V20190718.VersionHeader): AxiosPromise<V20190718.ModifyResourceTagsResponse>;
}

export declare type Versions = ["2020-11-12", "2019-07-18"];

export default Chdfs;
