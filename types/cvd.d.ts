/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 实例属性key--value结构 */
declare interface AttributeInfo {
  /** 实例属性名 */
  Name: string;
  /** 实例属性值 */
  Value: string;
}

/** 绑定关系 */
declare interface BindInfo {
  /** 实例绑定的用户ID */
  UserId: string;
  /** 实例ID */
  InstanceId: string;
}

/** 桌面实例绑定状态详情 */
declare interface BindStatusInfo {
  /** 桌面实例id */
  InstanceId: string;
  /** 实例的绑定状态。取值：UNBOUND - 未绑定BINDING - 绑定中BOUND - 绑定UNBINDING-解绑中 */
  BindStatus: string;
  /** 绑定的用户id【BOUND状态不允许为空】 */
  UserId: string | null;
  /** 绑定用户名称【BOUND状态不允许为空】 */
  UserName: string | null;
  /** 绑定用户显示名称【BOUND状态不允许为空】 */
  DisplayName: string | null;
}

/** 预付费模式，即包年包月相关参数。包括购买时长和自动续费逻辑等。 */
declare interface ChargePrepaid {
  /** 购买实例的时长，单位：月。取值范围：1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12。 */
  Period: number;
  /** 自动续费标识。取值范围：NOTIFY_AND_AUTO_RENEW：通知过期且自动续费NOTIFY_AND_MANUAL_RENEW：通知过期不自动续费DISABLE_NOTIFY_AND_MANUAL_RENEW：不通知过期不自动续费默认取值：NOTIFY_AND_AUTO_RENEW。若该参数指定为NOTIFY_AND_AUTO_RENEW，在账户余额充足的情况下，实例到期后将按月自动续费。 */
  RenewFlag?: string;
}

/** 任务详情 */
declare interface CommandDetail {
  /** 租户 Uin */
  Uin?: string;
  /** 租户 APPID */
  AppId?: number;
  /** 任务类型，取值有：PowerShellScriptBat */
  Type?: string;
  /** RUNNING - 执行中；FINISHED - 执行完成 */
  Status?: string;
  /** 任务脚本，Base64 编码 */
  Command?: string;
  /** 任务唯一 ID */
  CommandId?: string;
  /** 任务完成时间 */
  CreateTime?: string;
  /** 任务完成时间 */
  FinishTime?: string | null;
  /** 各实例运行结果集 */
  Invocations?: InvocationDetail[];
  /** 是否以绑定用户运行任务，默认 false：system 用户执行 */
  RunAsBoundUser?: boolean;
  /** 是否前台运行任务，默认 false：后台运行任务 */
  RunForeground?: boolean;
}

/** 监控数据 */
declare interface DataPoint {
  /** 实例对象维度组合 */
  Dimensions?: Dimension[];
  /** 时间戳数组 */
  Timestamps?: number[];
  /** 监控值数组，与Timestamps一一对应 */
  Values?: number[];
  /** MaxValues 最大值数组，与Timestamps一一对应 */
  MaxValues?: number[];
  /** MinValues 最小值数组，与Timestamps一一对应 */
  MinValues?: number[];
  /** AvgValues 平均值数组，与Timestamps一一对应 */
  AvgValues?: number[];
}

/** 实例对象的维度组合 */
declare interface Dimension {
  /** 实例维度名称 */
  Name?: string;
  /** 实例维度值 */
  Value?: string;
}

/** 桌面实例挂载磁盘信息 */
declare interface Disk {
  /** 磁盘类型：CLOUD_SSD：SSD云硬盘CLOUD_PREMIUM：高性能云硬盘 */
  DiskType: string;
  /** 磁盘大小（单位G）系统盘最小值50，最大值500数据盘最小值10，最大值32000。最小调整步长为10G */
  DiskSize: number;
  /** 磁盘id */
  DiskId?: string | null;
}

/** 各地域实例个数信息 */
declare interface DistributionInfo {
  /** 地域描述 */
  Region: string;
  /** 实例个数 */
  Count: number;
}

/** 域名控制策略详情 */
declare interface DomainControlDetail {
  /** 配置域名 */
  Domain: string;
  /** 此参数必填，新版本无异议，请求包和回包强制填写空字符串,做校验 */
  Address: string;
  /** 规则描述 */
  Description?: string | null;
}

/** 查询因子 */
declare interface Filter {
  /** 要匹配的参数名 */
  Name: string;
  /** 要匹配的参数值 */
  Values: string[];
}

/** 云桌面镜像信息 */
declare interface ImageInfo {
  /** 镜像id */
  ImageID?: string;
  /** 镜像名称 */
  ImageName?: string;
  /** 镜像类型：PUBLIC_IMAGE-公共镜像PRIVATE_IMAGE-自定义镜像TENCENT_OFFICE_IMAGE-腾讯办公镜像 */
  ImageType?: string;
  /** 镜像状态：CREATING-创建中NORMAL-正常CREATEFAILED-创建失败USING-使用中SYNCING-同步中IMPORTING-导入中IMPORTFAILED-导入失败INVISIBLE-淘汰的镜像DELETIING-删除中DELETED-删除的 */
  ImageState?: string;
  /** 镜像操作系统 */
  OsName?: string;
  /** 镜像大小（单位G） */
  ImageSize?: number;
  /** 镜像描述 */
  Description?: string;
  /** 镜像所在区域 */
  Region?: string;
  /** 内核类型：CPUGPUGPU_A10GPU_RTX6000GPU_2080TiGPU_3080Ti */
  CoreType?: string;
  /** cvm侧镜像id */
  CvmImageId?: string | null;
  /** 是否是整机镜像，整机镜像无法用于桌面重置true：整机镜像false: 不是整机镜像 */
  IsWhole?: boolean | null;
  /** 整机镜像中数据盘大小 */
  DataDiskSize?: number | null;
  /** 镜像创建时间 */
  CreateTime?: string | null;
}

/** 实例维度组合数组 */
declare interface Instance {
  /** 实例的维度组合 */
  Dimensions?: Dimension[];
}

/** 云桌面实例详细信息 */
declare interface InstanceInfo {
  /** 实例id */
  InstanceId?: string;
  /** 实例名称 */
  Name?: string;
  /** 实例状态PENDING：表示创建中LAUNCH_FAILED：表示创建失败RUNNING：表示运行中STOPPED：表示关机STARTING：表示开机中STOPPING：表示关机中REBOOTING：表示重启中SHUTDOWN：表示停止待销毁TERMINATING：表示销毁中DELETED：表示资源已经销毁，这个状态是业务层面的状态，cvm如果销毁了，在cvm侧资源已经不存在了FAILED：表示资源创建失败.这个是业务层面的状态ROLLBACKING：表示回滚中USING：表示使用中RESETTING：表示重置中. */
  Status?: string;
  /** 实例拥有者名称 */
  UserName?: string | null;
  /** 实例 */
  UserId?: string | null;
  /** 实例规格S1.LARGE8：4VCPU 2.5GHZ主频 8G内存 无显卡S1.LARGE16：4VCPU 2.5GHZ主频 16G内存 无显卡S2.2XLARGE16：8VCPU 3.2GHZ主频 16G内存 无显卡G1.LARGE16：4VCPU 2.5GHZ主频 16G内存 1/4 NVIDIA T4G1.2XLARGE32：8VCPU 2.5GHZ主频 32G内存 1/2 NVIDIA T4G1.4XLARGE64：16VCPU 2.5GHZ主频 64G内存 1 NVIDIA T4 */
  InstanceType?: string;
  /** 系统盘信息 */
  SysDisk?: Disk;
  /** 挂载的数据盘信息 */
  DataDiskList?: Disk[] | null;
  /** 桌面实例所在的区域 */
  Region?: string;
  /** 桌面计费类型 */
  ChargeType?: string;
  /** 自动续费标识。取值范围：NOTIFY_AND_MANUAL_RENEW：表示通知即将过期，但不自动续费NOTIFY_AND_AUTO_RENEW：表示通知即将过期，而且自动续费DISABLE_NOTIFY_AND_MANUAL_RENEW：表示不通知即将过期，也不自动续费。注意：后付费模式本项为null */
  AutoRenewFlag?: string;
  /** 桌面创建时间 */
  CreateTime?: string;
  /** 桌面过期时间 */
  ExpiredTime?: string;
  /** 桌面描述 */
  Description?: string | null;
  /** 桌面hostname */
  HostName?: string | null;
  /** 桌面拥有者显示名称 */
  DisplayName?: string | null;
  /** 桌面绑定状态。取值：UNBOUND - 未绑定BINDING - 绑定中BOUND - 绑定 */
  BindStatus?: string | null;
  /** 创建桌面的镜像id */
  ImageId?: string | null;
  /** 用户桌面vpc id */
  UserVpcId?: string | null;
  /** 用户桌面子网 id */
  UserSubnetId?: string | null;
  /** 用户桌面ip */
  UserPrivateIp?: string | null;
  /** 机器回收站到期时间，只有机器状态为SHUTDOWN该值才有意义 */
  IsolatedTime?: string | null;
  /** 最近一次状态变更原因, AUTO:被动变更,如欠费,如包月实例到期, MANUAL:主动变更,如主动退还实例，当前只有机器处于ISOLATING、SHUTDOWN、TERMINATING、DELETED该字段有意义 */
  LastStatusChangeReason?: string | null;
  /** 机器最近一次操作 */
  LatestOperation?: string | null;
  /** 机器最近一次操作状态 */
  LatestOperationState?: string | null;
  /** 机器最近一次操作请求ReqId */
  LatestOperationRequestID?: string | null;
  /** 机器操作系统名称 */
  OsName?: string | null;
  /** 实例逻辑set */
  SetId?: string | null;
  /** 应用id */
  AppId?: number | null;
  /** 账号id */
  Uin?: string | null;
  /** 关联的安全组ID列表 */
  SecurityGroups?: string[] | null;
  /** 预付费实例降配次数 */
  DownGradeTimes?: number | null;
  /** 桌面绑定的域名策略ID列表，最多五个 */
  DomainControlPolicies?: string[] | null;
  /** 桌面绑定的水印策略 */
  WaterMarkPolicy?: string | null;
  /** 桌面绑定的录屏策略ID */
  ScreenRecordingPolicy?: string | null;
  /** WHITE --- 白名单策略BLACK --- 黑名单策略 */
  DomainControlPolicyType?: string | null;
  /** 桌面绑定的运行管控策略 */
  RunControlPolicy?: string | null;
  /** 桌面绑定的安装管控策略 */
  InstallControlPolicy?: string | null;
  /** 桌面是否绑定匿名用户 */
  AnonymousAccess?: boolean | null;
  /** 实例绑定的标签 */
  Tags?: Tag[] | null;
}

/** 实例状态 */
declare interface InstanceStatus {
  /** 实例id */
  InstanceId?: string;
  /** 实例状态PENDING：表示创建中LAUNCH_FAILED：表示创建失败RUNNING：表示运行中STOPPED：表示关机STARTING：表示开机中STOPPING：表示关机中REBOOTING：表示重启中SHUTDOWN：表示停止待销毁TERMINATING：表示销毁中DELETED：表示资源已经销毁，这个状态是业务层面的状态，cvm如果销毁了，在cvm测资源已经不存在了FAILED：表示资源创建失败.这个是业务层面的状态ROLLBACKING：表示机器正在回滚中RESETTING：表示机器正在重置中USING：表示机器正在使用中 */
  Status?: string;
  /** 只有在Status为RUNNING时候，当前值才有意义取值范围：0:Unknown1:Connected 2:Disconnected 3:Terminated4:PreparingSession5:Active6:Reconnecting7:NonBrokeredSession8:Other9:Pending */
  SessionState?: number | null;
  /** 此字段只有在Status为USING时，才有效。字段意义：表示桌面当前session空闲时间（客户没有鼠标，键盘等操作），单位秒 */
  IdleSeconds?: number | null;
  /** 当前状态改变的时间 */
  StatusChangeTime?: number | null;
  /** 实例最近一次操作类型 */
  LatestOperation?: string;
  /** 实例最近一次操作状态 */
  LatestOperationState?: string;
}

/** 脚本执行情况。 */
declare interface Invocation {
  /** 脚本执行ID。 */
  InvokeId?: string;
  /** 运行状态。 Running：正在执行 Finished：已经完成 Failed：失败 Stopped：已停止 */
  Status?: string;
  /** 任务输出。 */
  Output?: InvocationOutput | null;
  /** 任务失败时的错误码。 */
  ErrorCode?: string | null;
  /** 任务失败时的错误信息描述。 */
  ErrorInfo?: string | null;
  /** 任务退出状态码 */
  ExitCode?: number;
}

/** 实例执行脚本任务结果详情 */
declare interface InvocationDetail {
  /** 实例 id */
  InstanceId?: string;
  /** 实例名称 */
  InstanceName?: string | null;
  /** 实例所在区域，目前支持的区域有：ap-beijing、ap-shanghai、ap-guangzhou、ap-shanghai-adc */
  Region?: string;
  /** 脚本任务执行状态，取值有：Running-执行中Finished-完成Failed-失败Stopped-终止 */
  Status?: string | null;
  /** 实例上任务唯一 ID */
  InvokeId?: string | null;
  /** 脚本任务输出 */
  Output?: string | null;
  /** 任务退出码 */
  ExitCode?: number | null;
  /** 任务错误码 */
  ErrorCode?: string | null;
  /** 执行任务错误信息 */
  ErrorInfo?: string | null;
}

/** 任务执行的标准输出。 */
declare interface InvocationOutput {
  /** 任务的标准输出。 */
  Lines: string[];
  /** 本次返回的输出第一行对应的索引编号。 */
  LinesOffset: number;
  /** 本次返回的输出的行数。 */
  LinesNum: number;
  /** 输出的编码方式：<li>PlainText 未经过Base64编码。 */
  Encoding: string;
  /** 当前有效的输出起始编号，从0开始。输出过多，会冲掉旧的输出。 */
  AllLinesOffset: number;
  /** 当前有效的标准输出总行数。 */
  AllLinesNum: number;
}

/** IP控制策略详情 */
declare interface IpControlDetail {
  /** 配置的IP。支持单IP和CIDR，暂不支持IP范围 */
  Ip: string;
  /** IP的描述 */
  Description?: string;
}

/** 磁盘分区数据 */
declare interface Partition {
  /** 磁盘名 */
  Name?: string | null;
  /** 总容量 */
  Total?: number | null;
  /** 使用量,39.31% */
  Usage?: number | null;
}

/** 策略详细信息 */
declare interface PolicyDetail {
  /** 策略id */
  PolicyId: string;
  /** 策略名称 */
  PolicyName: string;
  /** 策略描述 */
  Description: string | null;
  /** 策略作用用户id列表 */
  UserIds: string[] | null;
  /** 策略的租户uin */
  Uin: string;
  /** 文件重定向策略id。取值范围：1：读写2：只读3：禁止读写 */
  FilePolicyId: number | null;
  /** 剪切板重定向策略id。取值范围：1：开启云桌面到客户端2：开启客户端到云桌面3：双向开启4：禁用 */
  ClipPolicyId: number | null;
  /** 外设重定向策略id。取值范围：1：允许usb重定向2：允许端口重定向3：允许usb和端口重定向4：禁用 */
  DrivePolicyId: number | null;
  /** 水印重定向策略id。取值范围（离散值）：4: 当前时间，居中策略10: 当前时间，平铺策略15: 云桌面ID， 居中策略16: 云桌面ID+当前时间， 居中策略17: 云桌面ID， 平铺策略18: 云桌面ID+当前时间， 平铺策略 */
  WaterMarkPolicyId: number | null;
  /** 是否是默认策略 */
  IsDefault: boolean;
  /** 注意：默认策略的当前值无效 */
  TotalUser: number | null;
}

/** 创建策略详细信息 */
declare interface PolicyInfo {
  /** 策略类型。取值：1：文件重定向策略2：剪切板重定向策略3：外设重定向策略4：水印策略 */
  PolicyType: number;
  /** 策略值。取值：PolicyType对应个子取值范围：	①：PolicyType为1-文件重定向策略 1：读写 2：只读 3：禁止读写	②：剪切板重定向策略 1：开启云桌面到客户端 2：开启客户端到云桌面 3：双向开启 4：禁用	③：外设重定向策略 1：允许usb重定向 2：允许端口重定向 3：允许usb和端口重定向 4：禁用	④：水印策略 4: 当前时间，居中策略 10: 当前时间，平铺策略 15: 云桌面ID， 居中策略 16: 云桌面ID+当前时间， 居中策略 17: 云桌面ID， 平铺策略 18: 云桌面ID+当前时间， 平铺策略 */
  PolicyValue: number;
}

/** 快照信息 */
declare interface SnapshotInfo {
  /** 快照唯一ID */
  SnapshotId: string;
  /** 快照对应的云硬盘ID */
  DiskId: string;
  /** 快照状态，取值如下：NORMAL：正常CREATING：创建中ROLLBACKING：回滚中COPYING_FROM_REMOTE：跨地域复制中CHECKING_COPIED：复制校验中TORECYCLE：待回收。 */
  SnapshotState: string;
  /** 创建此快照的云硬盘类型。取值范围：SYSTEM_DISK：系统盘DATA_DISK：数据盘。 */
  DiskUsage: string;
  /** 快照创建的时间 */
  CreateTime: string;
  /** 快照到期时间。如果快照为永久保留，此字段为空。 */
  DeadlineTime: string;
  /** 快照创建进度百分比，快照创建成功后此字段恒为100。 */
  Percent: number;
  /** 是否为永久快照。取值范围：true：永久快照false：非永久快照。 */
  IsPermanent: boolean;
  /** 快照创建方式，取值:ManualSnapshot：手动创建AutoSnapshot：快照策略自动创建 */
  CreateType: string;
  /** 上一次快照回滚完成时间 */
  LastRollbackTime: string | null;
  /** 上一次快照回滚状态，取值：成功：SUCCESS失败：FAILED */
  LastRollbackState: string | null;
}

/** Tag */
declare interface Tag {
  /** 标签键 */
  TagKey?: string;
  /** 标签值 */
  TagValue?: string;
}

/** 桌面使用时长详情 */
declare interface Usage {
  /** 桌面实例 ID */
  InstanceId?: string;
  /** 桌面名称 */
  Name?: string;
  /** 桌面当前状态 */
  Status?: string;
  /** 桌面绑定的用户名，若未绑定，为空 */
  UserName?: string;
  /** 桌面计费类型 */
  ChargeType?: string;
  /** 桌面类型 */
  InstanceType?: string;
  /** 桌面操作系统 */
  OsName?: string;
  /** 桌面使用时长，h:m:s */
  ActiveTime?: string;
  /** 桌面空闲时长，h:m:s */
  IdleTime?: string;
  /** 是否匿名访问 */
  AnonymousAccess?: boolean;
}

/** 用户信息 */
declare interface User {
  /** 用户ID。 */
  Id?: string;
  /** 名字。 */
  Name?: string;
  /** 显示名字。 */
  DisplayName?: string;
  /** 邮箱。 */
  Mail?: string;
  /** 手机号。 */
  PhoneNum?: string;
  /** 状态。ACTIVE:启用PENDING_ACTIVATE:待激活PENDING_ONBOARD:待启用SUSPENDED:已停用INACTIVE:已离职PASSWORD_RESET:重置密码LOCKED_OUT:锁定 */
  Status?: string;
  /** 部门ID。 */
  DepartmentId?: string;
  /** 策略ID。 */
  StrategyId?: string;
  /** 策略名称。 */
  StrategyName?: string;
  /** 当前用户是否绑定桌面，true：绑定，false：未绑定任何桌面 */
  BindStatus?: boolean;
}

/** 私有网络相关信息 */
declare interface VirtualPrivateCloud {
  /** 私有网络ID。 */
  VpcId: string;
  /** 私有网络子网ID。 */
  SubnetId: string;
}

declare interface AssociateSecurityGroupRequest {
}

declare interface AssociateSecurityGroupResponse {
  /** 关联成功的桌面列表 */
  SuccessSet?: string[];
  /** 关联失败的桌面列表 */
  FailureSet?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BindInstancesRequest {
  /** 指定得到云桌面用户id */
  UserIds: string[];
  /** 待分配桌面实例id */
  InstanceIds: string[];
  /** 待分配桌面类型 */
  InstanceType: string;
  /** 待分配桌面所在区域 */
  InstanceRegion?: string;
}

declare interface BindInstancesResponse {
  /** 待分配桌面状态 */
  BindInfoList?: BindStatusInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCommandTaskRequest {
  /** 脚本任务，需要 Base64 编码 */
  Command: string;
  /** 脚本任务类型：windows 桌面可选有： PowerShellScript — powershell脚本 BatScript — Bat 脚本 */
  Type: string;
  /** 执行脚本任务的实例列表 */
  InstanceIds: string[];
  /** 是否以绑定用户身份执行，默认 System身份运行false： System身份运行，默认行为true：以绑定用户身份执行 */
  RunAsBoundUser?: boolean;
  /** 是否前台运行false：后台运行，默认行为true：前台运行 */
  RunForeground?: boolean;
}

declare interface CreateCommandTaskResponse {
  /** 脚本任务唯一 ID */
  CommandId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDataDiskRequest {
  /** 实例id */
  InstanceId: string;
  /** 数据盘类型，有效值CLOUD_SSD/CLOUD_PREMIUM */
  DiskType: string;
  /** 数据盘大小 */
  DiskSize: number;
  /** 硬盘快照id */
  SnapShotId?: string;
}

declare interface CreateDataDiskResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDomainControlPolicyRequest {
  /** 策略名称 */
  Name?: string;
  /** 策略描述 */
  Description?: string;
  /** 策略类型，取值范围["WHITE","BLACK"]，WHITE - 白名单策略；BLACK - 黑名单策略；默认 值为BLACK */
  Type?: string;
  /** 域名控制规则详情 */
  DetailSet?: DomainControlDetail[];
  /** IP控制规则详情 */
  IpDetailSet?: IpControlDetail[];
  /** 作用到的实例列表 */
  InstanceIds?: string[];
}

declare interface CreateDomainControlPolicyResponse {
  /** 策略唯一ID */
  PolicyId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateImageRequest {
  /** 云桌面实例ID。 */
  InstanceId: string;
  /** 镜像名称。只支持中文、字母、数字或连接符号"-"，且最多60个字符。默认值：空。 */
  ImageName: string;
  /** 镜像的描述信息。支持英文或中文字符，最多60个字符。默认值：空。 */
  Description?: string;
  /** 基于实例创建整机镜像时，指定包含在镜像里的数据盘ID。 */
  DataDiskIds?: string[];
}

declare interface CreateImageResponse {
  /** 镜像ID。 */
  ImageId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateInstancesRequest {
  /** 实例类型。 S3L.MEDIUM4: 云桌面-标准S3_2核4G S3L.LARGE8: 云桌面-标准S3_4核8G S3L.LARGE16: 云桌面-标准S3_4核16G S3L.2XLARGE16: 云桌面-标准S3_8核16G S1L.LARGE8：云桌面-标准S1_4核8G S1L.LARGE16：标准S1_4核16G S2L.2XLARGE16：标准S2_8核16G G1L.LARGE16：图形G1_4核16G G1L.2XLARGE32：图形G1_8核32G G1L.4XLARGE64：图形G1_16核64G G2L.LARGE24: 云桌面-图形G2_6核24G G2L.3XLARGE58: 云桌面-图形G2_14核58G G2L.3XLARGE44: 云桌面-图形G2_12核44G G3L.LARGE16: 云桌面-图形G3_4核16G G3L.5XMEDIUM40: 云桌面-图形G3_10核40G G3L.5XLARGE80: 云桌面-图形G3_20核80G G4L.5XMEDIUM40: 云桌面-图形G4_10核40G G4L.11XMEDIUM80: 云桌面-图形G4_22核80G G4L.11XLARGE160: 云桌面-图形G4_44核160G G5L.5XMEDIUM40: 云桌面-图形G5_10核40G G5L.5XLARGE80: 云桌面-图形G5_22核80G G5L.21XMEDIUM160: 云桌面-图形G5_42核160G G5L.21XLARGE320: 云桌面-图形G5_84核320G */
  InstanceType: string;
  /** 系统盘信息 */
  SystemDisk: Disk;
  /** 镜像ID */
  ImageId: string;
  /** 私有网络相关信息配置。通过该参数可以指定私有网络的ID，子网ID等信息。 */
  VirtualPrivateCloud: VirtualPrivateCloud;
  /** 实例显示名称。 如果该字段为空，则采用默认格式：云桌面型号+月日+三位随机数+镜像ID。 购买多台实例，如果指定模式串{R:x}，表示生成数字[x, x+n-1]，其中n表示购买实例的数量，例如server_{R:3}，购买1台时，实例显示名称为server_3；购买2台时，实例显示名称分别为server_3，server_4。支持指定多个模式串{R:x}。 购买多台实例，如果不指定模式串，则在实例显示名称添加后缀1、2...n，其中n表示购买实例的数量，例如server_，购买2台时，实例显示名称分别为server_1，server_2。 最多支持60个字符（包含模式串）。 */
  InstanceName?: string;
  /** 购买实例数量。取值范围[1,50]。默认为1 */
  InstanceCount?: number;
  /** 数据盘信息。目前只支持一块数据盘。 */
  DataDisks?: Disk[];
  /** 实例计费类型。 PREPAID：预付费，即包年包月 POSTPAID_BY_HOUR：按小时后付费默认为PREPAID */
  ChargeType?: string;
  /** 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月实例的购买时长、是否设置自动续费等属性。若指定实例的付费模式为预付费则该参数必传。 */
  ChargePrepaid?: ChargePrepaid;
  /** 是否只预检此次请求。 true：发送检查请求，不会创建实例。检查项包括是否填写了必需参数，请求格式，业务限制和库存。如果检查通过，则返回的错误码为DryRunOperation；如果返回其他错误码表示检查没有通过； false（默认）：发送正常请求，通过检查后直接创建实例 */
  DryRun?: boolean;
  /** 允许绑定用户前的匿名访问。默认值：false。 */
  AnonymousAccess?: boolean;
  /** 关联的安全组ID列表 */
  SecurityGroups?: string[];
  /** 桌面池ID */
  PoolId?: string;
  /** 域名管控策略ID */
  DomainControlPolicies?: string[];
  /** 标签，最多10个 */
  Tags?: Tag[];
  /** 可用区 */
  Zone?: string;
}

declare interface CreateInstancesResponse {
  /** 当通过本接口来创建实例时会返回该参数，表示一个或多个实例ID。返回实例ID列表并不代表实例创建成功。通过进一步查询返回的InstancesSet中对应实例的ID的状态来判断创建是否完成；如果实例状态由“准备中”变为“正在运行”，则为创建成功。 */
  InstanceIdSet?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreatePolicyRequest {
  /** 策略名称 */
  Name: string;
  /** 策略详情 */
  PolicyInfoList: PolicyInfo[];
  /** 策略描述 */
  Description?: string;
  /** 策略作用的用户id */
  UserIds?: string[];
}

declare interface CreatePolicyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteCommandTasksRequest {
  /** 删除命令任务条件Filter.name 目前支持 CommandId */
  Filters: Filter[];
}

declare interface DeleteCommandTasksResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteDomainControlPolicyRequest {
  /** 策略唯一ID */
  PolicyId?: string;
}

declare interface DeleteDomainControlPolicyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteImagesRequest {
  /** 准备删除的镜像Id列表 */
  ImageIds: string[];
}

declare interface DeleteImagesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCommandTasksRequest {
  /** 页号 */
  PageNumber?: number;
  /** 每页大小，默认 20，最大 100 */
  PageSize?: number;
  /** 拉取任务的过滤器 ，Filter.Name 取值：CommandId - 任务 lD；Staus - 任务状态， RUNNING - 执行中；FINISHED - 执行完成（不代表成功，只表示任务执行完成） */
  Filters?: Filter[];
}

declare interface DescribeCommandTasksResponse {
  /** 拉取任务详情数 */
  Total?: number;
  /** 任务描述 */
  CommandDetails?: CommandDetail[];
  /** 任务状态，RUNNING -执行中；FINISHED-执行完成； STOPPED-终止任务 */
  Status?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeImagesRequest {
  /** 拉取页号 */
  PageNumber: number;
  /** 每页拉取个数 */
  PageSize: number;
  /** Name取值：["ImageID","Name","ImageType","ImageState","Region","InstanceType"]注意：filter中没有ImageID或ImageState过滤条件，后台默认不返回INVISIBLE的镜像信息 */
  Filters?: Filter[];
}

declare interface DescribeImagesResponse {
  /** 返回查询到的所有镜像信息 */
  Images: ImageInfo[] | null;
  /** 返回当前查询到的镜像总数 */
  Total: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstanceFetchMsgRequest {
  /** 实例Id */
  InstanceId: string;
  /** 绑定实例的UserID，为后续多会话预留参数 */
  UserId?: string;
  /** 拉取桌面title，用户可自行定义，默认为云桌面实例名称 */
  DesktopName?: string;
  /** 是否抢占桌面，即桌面使用过程中，抢占登录。true：抢占登录false：非抢占登录默认为抢占登录 */
  Force?: boolean;
  /** 是否内网登录桌面 */
  IsInternal?: boolean;
}

declare interface DescribeInstanceFetchMsgResponse {
  /** 桌面登录ticket状态描述 */
  FetchStatusTicket?: string;
  /** 桌面登录ticket描述 */
  FetchTicket?: string;
  /** 桌面登录launch url */
  FetchUrl?: string;
  /** 桌面传输协议 */
  ProtocolVersion?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstanceGraphDataRequest {
  /** 云桌面实例ID */
  InstanceId: string;
  /** 查询起始时间 */
  StartTime: string;
  /** 查询结束时间 */
  EndTime: string;
}

declare interface DescribeInstanceGraphDataResponse {
  /** 查询起始时间 */
  StartTime?: string;
  /** 查询结束时间 */
  EndTime?: string;
  /** 周期 */
  Period?: number;
  /** 指标名 */
  MetricName?: string;
  /** 实例磁盘数据 */
  Partitions?: Partition[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstanceLoginMsgRequest {
  /** 实例Id */
  InstanceId: string;
  /** 绑定实例的UserID，为后续多会话预留参数 */
  UserId?: string;
  /** 拉取桌面title，用户可自行定义，默认为云桌面实例名称 */
  DesktopName?: string;
  /** 是否抢占桌面，即桌面使用过程中，抢占登录。true：抢占登录false：非抢占登录默认为抢占登录 */
  Force?: boolean;
  /** 是否内网方式 */
  IsInternal?: boolean;
}

declare interface DescribeInstanceLoginMsgResponse {
  /** 桌面登录login信息 */
  LoginMsg?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstanceMonitorDataRequest {
  /** 实例维度组合数组 */
  Instances: Instance[];
  /** 命名空间。如QCE/CVM、QCE/BLOCK_STORAGE等 */
  NameSpace: string;
  /** 指标名 */
  MetricName: string;
  /** 统计周期(时间粒度), 单位s。 */
  Period?: number;
  /** 开始时间 */
  StartTime?: string;
  /** 结束时间 */
  EndTime?: string;
  /** 多种统计方式数据。avg, max, min (1,2,4)可以自由组合 */
  SpecifyStatistics?: number;
}

declare interface DescribeInstanceMonitorDataResponse {
  /** 指标名 */
  MetricName?: string;
  /** 统计周期 */
  Period?: number;
  /** 开始时间 */
  StartTime?: string;
  /** 结束时间 */
  EndTime?: string;
  /** 数据点数组 */
  DataPoints?: DataPoint[];
  /** message信息 */
  Msg?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstanceRegionDistributionRequest {
  /** 查询区域列表 */
  Regions?: string[];
  /** 查询实例类型列表 */
  Types?: string[];
  /** 查询用户拥有的云桌面地域分布信息 */
  UserId?: string;
}

declare interface DescribeInstanceRegionDistributionResponse {
  /** 各区域实例个数 */
  DistributionInfo?: DistributionInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstancesBindStatusRequest {
  /** 拉取的桌面id列表 */
  InstanceIds: string[];
  /** 实例所在区域 */
  InstanceRegion?: string;
}

declare interface DescribeInstancesBindStatusResponse {
  /** 桌面实例状态列表 */
  InstanceBindStatusList?: BindStatusInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstancesRequest {
  /** 拉取页号 */
  PageNumber: number;
  /** 每页拉取个数 */
  PageSize: number;
  /** Name取值范围："InstanceId" 按照云桌面ID搜索，云桌面ID示例：cdi-l0dfy594htvbn37"Name" 按照云桌面名称搜索 "Region" 按照云桌面所在地域搜索，目前云桌面所支持的地域： ap-beijing：北京 ap-shanghai：上海 ap-guangzhou：广州 ap-shanghai-adc：上海自动驾驶云"Type" 按照云桌面类型搜索，类型取值： S3L.MEDIUM4：云桌面-标准S3_2核4G S3L.LARGE8：云桌面-标准S3_4核8G S3L.LARGE16：云桌面-标准S3_4核16G S3L.2XLARGE16：云桌面-标准S3_8核16G S1L.LARGE8：云桌面-标准S1_4核8G S1L.LARGE16：云桌面-标准S1_4核16G S2L.2XLARGE16：云桌面-标准S2_8核16G G1L.LARGE16：云桌面-图形G1_4核16G G1L.2XLARGE32：云桌面-图形G1_8核32G G1L.4XLARGE64：云桌面-图形G1_16核64G G2L.LARGE24：云桌面-图形G2_6核24G G2L.3XLARGE58：云桌面-图形G2_14核58G G2L.3XLARGE44：云桌面-图形G2_12核44G G3L.LARGE16：云桌面-图形G3_4核16G G3L.5XMEDIUM40：云桌面-图形G3_10核40G G3L.5XLARGE80：云桌面-图形G3_20核80G G4L.5XMEDIUM40：云桌面-图形G4_10核40G G4L.11XMEDIUM80：云桌面-图形G4_22核80G G4L.11XLARGE160：云桌面-图形G4_44核160G G5L.5XMEDIUM40：云桌面-图形G5_10核40G G5L.5XLARGE80：云桌面-图形G5_22核80G G5L.21XMEDIUM160：云桌面-图形G5_42核160G G5L.21XLARGE320：云桌面-图形G5_84核320G	"ImageId" 按照镜像ID搜索，镜像ID示例：img-ed892xcd2"ChargeType" 按着计费模式搜索，目前支持的计费模式为： PREPAID：包年包月 POSTPAID_BY_HOUR：按量计费 "HostName" 按照云桌面机器名称搜索，云桌面机器名示例：l0dfy594htvbn37"Status" 按照桌面状态搜索，云桌面状态： PENDING：创建中 STARTING：开机中 REBOOTING：重启中 ROLLBACKING：回滚中 RESETTING：重置中 STOPPING：关机中 TERMINATING：销毁中 RUNNING：运行中 USING：使用中 STOPPED：关机 ISOLATING ：隔离中，只返回最近24小时数据 SHUTDOWN：销毁，只返回最近24小时数据 DELETED：销毁和SHUTDOWN意义一致，只返回最近24小时数据 LAUNCH_FAILED：创建失败，只返回最近24小时数据"UserId" 按照绑定的用户ID搜索，用户ID示例: us-6b36f283c302481bb83bsdswdefqdqwerqw"UserVpcId" 按照云桌面所属vpc搜索，VPCID示例: vpc-0ji679xf"UserSubnetId" 按照云桌面所属子网搜索，SubnetID示例: subnet-0ji679xf"UserPrivateIp" 按照云桌面IP搜索"Keyword" 按照云桌面绑定的用户名搜索，Values每次只取第一个值"SecurityGroupId" 按照云桌面关联安全组搜索，Values每次只取第一个值,安全组ID实例：sg-0ji679xf"AssociateSG" 按照可以关联安全组搜索，Values每次只取第一个值,安全组ID实例：sg-0ji679xf"DomainControlPolicyId" 按照云桌面关联域名管控策略搜索，Values每次只取第一个值,安全组ID实例：domain-0ji679xf "AssociateDomainControlPolicy" 按照可以关联域名策略搜索 ①若已有域名策略关联桌面情况：Values每次只取第一个值,安全组ID实例：domain-0ji679xf ②若新建域名策略关联桌面情况，Values传空"Uin" 外部租户请勿使用"AppId" 外部租户请勿使用"ImageName" 废弃 */
  Filters?: Filter[];
}

declare interface DescribeInstancesResponse {
  /** 返回查询到的所有实例信息 */
  InstanceList?: InstanceInfo[] | null;
  /** 返回当前查询到的实例总数 */
  Total?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstancesStatusRequest {
  /** 查询的实例id列表 */
  InstanceIds: string[];
}

declare interface DescribeInstancesStatusResponse {
  /** 实例状态列表 */
  InstanceStatusList?: InstanceStatus[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInvocationDetailRequest {
  /** 云桌面实例ID。 */
  InstanceId: string;
  /** 任务ID。 */
  InvokeId: string;
  /** 需要返回的任务输出行号起始索引。 */
  OutputLinesOffset?: number;
  /** 需要返回的任务输出行数。 */
  OutputLinesLimit?: number;
  /** 任务的输出内容是否合并成一个字符串。默认为true。 */
  MergeOutputLines?: boolean;
}

declare interface DescribeInvocationDetailResponse {
  /** 实例上任务执行的详细情况。 */
  Detail: Invocation;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInvocationsRequest {
  /** 云桌面实例ID。 */
  InstanceId: string;
}

declare interface DescribeInvocationsResponse {
  /** 该实例上的任务列表。不会返回Output字段。 */
  Invocations: Invocation[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePolicyDetailRequest {
  /** 拉取页号 */
  PageNumber?: number;
  /** 每页最大显示个数，最大值不超过100 */
  PageSize?: number;
  /** 查询条件（暂时无效，保留字段） */
  Filters?: Filter[];
}

declare interface DescribePolicyDetailResponse {
  /** 策略详细信息列表 */
  PolicyList?: PolicyDetail[];
  /** 当前查询到的策略总数 */
  Total?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSecurityGroupsRequest {
  /** 页号，从1开始 */
  PageNumber?: number;
  /** 每页最大展示数量，默认20，最大100 */
  PageSize?: number;
  /** 地域 */
  SecurityGroupRegion?: string;
}

declare interface DescribeSecurityGroupsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSnapshotsRequest {
  /** 快照所在的地域 */
  SnapshotRegion: string;
  /** 页号 */
  PageNumber?: number;
  /** 每页大小，最大100，默认20 */
  PageSize?: number;
  /** 检索条件，Filter的name取值：InstanceId：实例ID，返回当前实例挂载的云硬盘关联的快照信息DiskId：云硬盘ID，返回当前云硬盘关联的快照信息 */
  Filters?: Filter[];
}

declare interface DescribeSnapshotsResponse {
  /** 当前检索条件可查询到的快照总数 */
  TotalCount: number;
  /** 快照明细列表 */
  SnapshotList: SnapshotInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeUsageRequest {
  /** 查询起始时间，最小不能超过当前时间 90 天前，取 unix 时间戳 */
  StartTime: number;
  /** 查询截止时间，取 unix 时间戳 */
  EndTime: number;
  /** 每页查询信息条数，默认 20，最大 100 */
  PageSize?: number;
  /** 页号，起始页为 1，不填默认为 1 */
  PageNumber?: number;
  /** 查询key，每次查询会返回 */
  QueryKey?: string;
  /** 查询条件，Name可选为：InstanceId按照实例ID搜索UserName按照绑定的用户搜索，只取Values的第一个值ChareType按照计费类型搜索InstanceType按照实例类型搜索 */
  Filters?: Filter[];
  /** 指定的排序方式，默认不排序1:使用时间，升序2:使用时间，降序3:空闲时间，升序4:空闲时间，降序 */
  SortType?: number;
}

declare interface DescribeUsageResponse {
  /** 检索出相关使用详情总数 */
  Total?: number;
  /** 查询 key，作为翻页查询入参 */
  QueryKey?: string;
  /** 使用时长详情 */
  UsageSet?: Usage[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeUsersRequest {
  /** 搜索关键字。 */
  Keyword?: string;
  /** 页面编号。从1开始 */
  PageNumber?: number;
  /** 页面大小。默认20，不超过100。 */
  PageSize?: number;
  /** 部门ID。 */
  DepartmentId?: string;
}

declare interface DescribeUsersResponse {
  /** 符合条件的用户个数。 */
  TotalCount: number;
  /** 用户列表。 */
  Users: User[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DisassociateSecurityGroupRequest {
}

declare interface DisassociateSecurityGroupResponse {
  /** 解关联失败的云桌面列表 */
  FailureSet?: string[];
  /** 解关联成功的云桌面列表 */
  SuccessSet?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDiskConfigurationRequest {
  /** 实例ID */
  InstanceId: string;
  /** 新系统盘配置 */
  NewSystemDisk?: Disk;
  /** 新数据盘配置 */
  NewDataDisks?: Disk[];
}

declare interface ModifyDiskConfigurationResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyImageAttrsRequest {
  /** 镜像id */
  ImageId: string;
  /** 支持修改的属性列表为：{ImageName} */
  Attrs: AttributeInfo[];
}

declare interface ModifyImageAttrsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyInstanceBasicAttributeRequest {
  /** 云桌面实例id */
  InstanceId: string;
  /** 修改云桌面实例的属性信息 */
  AttributeInfoList: AttributeInfo[];
}

declare interface ModifyInstanceBasicAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyInstancesTypeRequest {
  /** 实例id数组 */
  InstanceIds: string[];
  /** 变更的实例类型 */
  InstanceType: string;
  /** 付费类型 */
  ChargeType: string;
}

declare interface ModifyInstancesTypeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyInstancesVpcRequest {
  /** 实例ID数组 */
  InstanceIds: string[];
  /** 私有网络ID */
  VpcId: string;
  /** 子网ID */
  SubnetId: string;
  /** 租户vpc的dns参数格式：“189.0.01” */
  DnsServerSet?: string[];
}

declare interface ModifyInstancesVpcResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RebootInstancesRequest {
  /** 重启实例id列表 */
  InstanceIds: string[];
  /** 实例所在区域，保证传入的列表在统一区域，否则报错 */
  InstanceRegion: string;
  /** 是否在正常重启失败后选择强制重启实例。取值范围：TRUE：表示在正常重启失败后进行强制重启FALSE：表示在正常重启失败后不进行强制重启默认取值：FALSE。 */
  Force?: boolean;
  /** 重启是否需要预登录 */
  PreLogin?: boolean;
}

declare interface RebootInstancesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RemoveDataDisksRequest {
  /** 实例 ID */
  InstanceId?: string;
  /** 数据盘磁盘 ID，可以通过 DescribeInstances 查下实例数据盘 */
  DataDiskIds?: string[];
}

declare interface RemoveDataDisksResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RemovePolicyRequest {
  /** 待删除策略id */
  PolicyId: string;
}

declare interface RemovePolicyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RenewInstancesRequest {
  /** 一个或多个待操作的实例ID。每次请求批量实例的上限为50。 */
  InstanceIds: string[];
  /** 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月实例的续费时长、是否设置自动续费等属性。包年包月实例该参数为必传参数。 */
  ChargePrepaid?: ChargePrepaid;
}

declare interface RenewInstancesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ResetInstancesRequest {
  /** 需要重置的实例id列表 */
  InstanceIds: string[];
  /** 重置的目标镜像id */
  ImageId: string;
  /** 重置实例的区域 */
  InstanceRegion: string;
  /** 是否解绑机器原有绑定关系 */
  IsUnbind: boolean;
}

declare interface ResetInstancesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RunCommandRequest {
  /** 云桌面实例ID。 */
  InstanceId: string;
  /** 执行的脚本内容，编码方式由ContentEncoding指定。<li>脚本内容在Base64编码后的大小不能超过16 KB。 */
  Content: string;
  /** 脚本种类。取值有：<li>PowerShellScript Powershell脚本 <li>BatScript Bat脚本 */
  Type: string;
  /** 是否同步等待脚本的执行结果。<li>false为异步模式，通过此接口触发任务的执行，之后异步获取执行结果。默认为false。此为推荐的模式。<li>true为同步等待执行结果，只有当脚本执行时间在4秒之内时，才适合将该参数置为true。如果接口返回时任务尚未执行完毕的话，也需要通过异步接口来获取执行结果。 */
  WaitUntilDone?: boolean;
  /** Content的编码。<li>Base64 Base64编码。 默认为Base64 */
  ContentEncoding?: string;
  /** 任务的输出内容是否合并成一个字符串。<li>true表示所有的输出行拼接在一起。默认为true。<li>false表示输出内容通过数组返回,数组的每一个元素为一行。 */
  MergeOutputLines?: boolean;
  /** 执行任务的用户ID。<li>由SYSTEM身份执行。此场景下不需要指定该字段，这是默认情况。<li>需要以绑定到实例的用户执行任务，通过该字段指定用户ID。 <li>匿名访问，需要以实际登录系统的用户执行的场景，该字段填实例ID。 */
  RunAs?: string;
  /** 任务是否为前台运行。仅在RunAs场景下有效。仅当任务会呼起图形界面时有意义。<li>true表示用户可以看到图形窗口。<li>false表示图形窗口不可见。默认为false。 */
  RunForeground?: boolean;
}

declare interface RunCommandResponse {
  /** 本次任务对应的任务ID。方便异步查询执行状态。 */
  InvokeId: string;
  /** 执行详细情况。WaitUntilDone为true，在接口返回时的执行状态。 */
  Detail: Invocation | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StartInstancesRequest {
  /** 需要开启的实例id列表 */
  InstanceIds: string[];
  /** 实例所在区域，保证传入的列表再统一区域，否则报错 */
  InstanceRegion: string;
}

declare interface StartInstancesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StopCommandTasksRequest {
  /** 删除命令任务条件Filter.name 目前支持 CommandId */
  Filters: Filter[];
}

declare interface StopCommandTasksResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StopInstancesRequest {
  /** 需要重启的实例id列表 */
  InstanceIds: string[];
  /** 实例所在区域，保证传入的列表在统一区域，否则报错 */
  InstanceRegion: string;
  /** 是否在正常重启失败后选择强制重启实例。取值范围：TRUE：表示在正常重启失败后进行强制重启FALSE：表示在正常重启失败后不进行强制重启默认取值：FALSE。 */
  Force?: boolean;
}

declare interface StopInstancesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StopInvocationRequest {
  /** 云桌面实例ID。 */
  InstanceId: string;
  /** 任务ID。 */
  InvokeId: string;
}

declare interface StopInvocationResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StopSessionRequest {
  /** 机器所在区域 */
  InstanceRegion: string;
  /** 机器hostname */
  HostName: string;
  /** IsDisconnect为true，表示断开当前会话IsDisconnect为false，表示注销当前会话 */
  IsDisconnect: boolean;
  /** 选填，为多会话预留字段 */
  UserId?: string;
}

declare interface StopSessionResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface TerminateInstancesRequest {
  /** 一个或多个待操作的实例ID。每次请求批量实例的上限为10。 */
  InstanceIds: string[];
  /** 是否立即销毁实例。默认false。 立即销毁的实例不会进入隔离期。 */
  DestroyImmediately?: boolean;
}

declare interface TerminateInstancesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UnbindInstancesRequest {
  /** 实例所在地域 */
  InstanceRegion: string;
  /** 解除绑定关系列表 */
  BindInfos: BindInfo[];
}

declare interface UnbindInstancesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdatePolicyRequest {
  /** 待更新策略id */
  PolicyId: string;
  /** 更新策略后策略名称 */
  Name: string;
  /** 更新策略后策略描述 */
  Description: string;
  /** 更新策略的具体修改值（全集） */
  PolicyInfoList: PolicyInfo[];
  /** 新增绑定用户列表 */
  BindUserIds?: string[];
  /** 移除绑定的用户列表 */
  RemoveUserIds?: string[];
}

declare interface UpdatePolicyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Cvd 云桌面} */
declare interface Cvd {
  (): Versions;
  /** 安全组批量关联云桌面 {@link AssociateSecurityGroupRequest} {@link AssociateSecurityGroupResponse} */
  AssociateSecurityGroup(data?: AssociateSecurityGroupRequest, config?: AxiosRequestConfig): AxiosPromise<AssociateSecurityGroupResponse>;
  /** 绑定桌面 {@link BindInstancesRequest} {@link BindInstancesResponse} */
  BindInstances(data: BindInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<BindInstancesResponse>;
  /** 创建脚本任务 {@link CreateCommandTaskRequest} {@link CreateCommandTaskResponse} */
  CreateCommandTask(data: CreateCommandTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCommandTaskResponse>;
  /** 实例新增数据盘 {@link CreateDataDiskRequest} {@link CreateDataDiskResponse} */
  CreateDataDisk(data: CreateDataDiskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDataDiskResponse>;
  /** 新建域名访问控制策略 {@link CreateDomainControlPolicyRequest} {@link CreateDomainControlPolicyResponse} */
  CreateDomainControlPolicy(data?: CreateDomainControlPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDomainControlPolicyResponse>;
  /** 创建自定义镜像 {@link CreateImageRequest} {@link CreateImageResponse} */
  CreateImage(data: CreateImageRequest, config?: AxiosRequestConfig): AxiosPromise<CreateImageResponse>;
  /** 创建云桌面实例 {@link CreateInstancesRequest} {@link CreateInstancesResponse} */
  CreateInstances(data: CreateInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateInstancesResponse>;
  /** 创建策略 {@link CreatePolicyRequest} {@link CreatePolicyResponse} */
  CreatePolicy(data: CreatePolicyRequest, config?: AxiosRequestConfig): AxiosPromise<CreatePolicyResponse>;
  /** 删除脚本任务 {@link DeleteCommandTasksRequest} {@link DeleteCommandTasksResponse} */
  DeleteCommandTasks(data: DeleteCommandTasksRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCommandTasksResponse>;
  /** 删除域名访问控制策略 {@link DeleteDomainControlPolicyRequest} {@link DeleteDomainControlPolicyResponse} */
  DeleteDomainControlPolicy(data?: DeleteDomainControlPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDomainControlPolicyResponse>;
  /** 删除自定义镜像 {@link DeleteImagesRequest} {@link DeleteImagesResponse} */
  DeleteImages(data: DeleteImagesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteImagesResponse>;
  /** 查询脚本任务详情 {@link DescribeCommandTasksRequest} {@link DescribeCommandTasksResponse} */
  DescribeCommandTasks(data?: DescribeCommandTasksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCommandTasksResponse>;
  /** 获取云桌面镜像详细信息 {@link DescribeImagesRequest} {@link DescribeImagesResponse} */
  DescribeImages(data: DescribeImagesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeImagesResponse>;
  /** 获取指定实例的登录Fetch信息 {@link DescribeInstanceFetchMsgRequest} {@link DescribeInstanceFetchMsgResponse} */
  DescribeInstanceFetchMsg(data: DescribeInstanceFetchMsgRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceFetchMsgResponse>;
  /** 查询实例磁盘分区图数据 {@link DescribeInstanceGraphDataRequest} {@link DescribeInstanceGraphDataResponse} */
  DescribeInstanceGraphData(data: DescribeInstanceGraphDataRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceGraphDataResponse>;
  /** 获取指定实例的登录login信息 {@link DescribeInstanceLoginMsgRequest} {@link DescribeInstanceLoginMsgResponse} */
  DescribeInstanceLoginMsg(data: DescribeInstanceLoginMsgRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceLoginMsgResponse>;
  /** 获取实例监控数据 {@link DescribeInstanceMonitorDataRequest} {@link DescribeInstanceMonitorDataResponse} */
  DescribeInstanceMonitorData(data: DescribeInstanceMonitorDataRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceMonitorDataResponse>;
  /** 获取用户在各个区域云桌面实例个数 {@link DescribeInstanceRegionDistributionRequest} {@link DescribeInstanceRegionDistributionResponse} */
  DescribeInstanceRegionDistribution(data?: DescribeInstanceRegionDistributionRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceRegionDistributionResponse>;
  /** 获取云桌面实例详细信息 {@link DescribeInstancesRequest} {@link DescribeInstancesResponse} */
  DescribeInstances(data: DescribeInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstancesResponse>;
  /** 获取桌面实例绑定状态 {@link DescribeInstancesBindStatusRequest} {@link DescribeInstancesBindStatusResponse} */
  DescribeInstancesBindStatus(data: DescribeInstancesBindStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstancesBindStatusResponse>;
  /** 获取桌面实例状态 {@link DescribeInstancesStatusRequest} {@link DescribeInstancesStatusResponse} */
  DescribeInstancesStatus(data: DescribeInstancesStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstancesStatusResponse>;
  /** 查询任务执行的详细情况 {@link DescribeInvocationDetailRequest} {@link DescribeInvocationDetailResponse} */
  DescribeInvocationDetail(data: DescribeInvocationDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInvocationDetailResponse>;
  /** 查询云桌面上的任务列表 {@link DescribeInvocationsRequest} {@link DescribeInvocationsResponse} */
  DescribeInvocations(data: DescribeInvocationsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInvocationsResponse>;
  /** 拉取租户策略列表 {@link DescribePolicyDetailRequest} {@link DescribePolicyDetailResponse} */
  DescribePolicyDetail(data?: DescribePolicyDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePolicyDetailResponse>;
  /** 拉取云桌面关联的安全组信息 {@link DescribeSecurityGroupsRequest} {@link DescribeSecurityGroupsResponse} */
  DescribeSecurityGroups(data?: DescribeSecurityGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSecurityGroupsResponse>;
  /** 拉取快照列表 {@link DescribeSnapshotsRequest} {@link DescribeSnapshotsResponse} */
  DescribeSnapshots(data: DescribeSnapshotsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSnapshotsResponse>;
  /** 查询桌面使用时长详情 {@link DescribeUsageRequest} {@link DescribeUsageResponse} */
  DescribeUsage(data: DescribeUsageRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUsageResponse>;
  /** 拉取用户列表 {@link DescribeUsersRequest} {@link DescribeUsersResponse} */
  DescribeUsers(data?: DescribeUsersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUsersResponse>;
  /** 安全组批量解关联安全组 {@link DisassociateSecurityGroupRequest} {@link DisassociateSecurityGroupResponse} */
  DisassociateSecurityGroup(data?: DisassociateSecurityGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DisassociateSecurityGroupResponse>;
  /** 实例硬盘扩容 {@link ModifyDiskConfigurationRequest} {@link ModifyDiskConfigurationResponse} */
  ModifyDiskConfiguration(data: ModifyDiskConfigurationRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDiskConfigurationResponse>;
  /** 修改镜像属性 {@link ModifyImageAttrsRequest} {@link ModifyImageAttrsResponse} */
  ModifyImageAttrs(data: ModifyImageAttrsRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyImageAttrsResponse>;
  /** 修改桌面实例属性 {@link ModifyInstanceBasicAttributeRequest} {@link ModifyInstanceBasicAttributeResponse} */
  ModifyInstanceBasicAttribute(data: ModifyInstanceBasicAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyInstanceBasicAttributeResponse>;
  /** 实例变配 {@link ModifyInstancesTypeRequest} {@link ModifyInstancesTypeResponse} */
  ModifyInstancesType(data: ModifyInstancesTypeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyInstancesTypeResponse>;
  /** 调整私有网络 {@link ModifyInstancesVpcRequest} {@link ModifyInstancesVpcResponse} */
  ModifyInstancesVpc(data: ModifyInstancesVpcRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyInstancesVpcResponse>;
  /** 重启实例 {@link RebootInstancesRequest} {@link RebootInstancesResponse} */
  RebootInstances(data: RebootInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<RebootInstancesResponse>;
  /** 卸载数据盘 {@link RemoveDataDisksRequest} {@link RemoveDataDisksResponse} */
  RemoveDataDisks(data?: RemoveDataDisksRequest, config?: AxiosRequestConfig): AxiosPromise<RemoveDataDisksResponse>;
  /** 删除策略 {@link RemovePolicyRequest} {@link RemovePolicyResponse} */
  RemovePolicy(data: RemovePolicyRequest, config?: AxiosRequestConfig): AxiosPromise<RemovePolicyResponse>;
  /** 实例续费 {@link RenewInstancesRequest} {@link RenewInstancesResponse} */
  RenewInstances(data: RenewInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<RenewInstancesResponse>;
  /** 实例重置 {@link ResetInstancesRequest} {@link ResetInstancesResponse} */
  ResetInstances(data: ResetInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<ResetInstancesResponse>;
  /** 执行脚本任务 {@link RunCommandRequest} {@link RunCommandResponse} */
  RunCommand(data: RunCommandRequest, config?: AxiosRequestConfig): AxiosPromise<RunCommandResponse>;
  /** 开启实例 {@link StartInstancesRequest} {@link StartInstancesResponse} */
  StartInstances(data: StartInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<StartInstancesResponse>;
  /** 停止脚本任务 {@link StopCommandTasksRequest} {@link StopCommandTasksResponse} */
  StopCommandTasks(data: StopCommandTasksRequest, config?: AxiosRequestConfig): AxiosPromise<StopCommandTasksResponse>;
  /** 关闭实例 {@link StopInstancesRequest} {@link StopInstancesResponse} */
  StopInstances(data: StopInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<StopInstancesResponse>;
  /** 停止脚本任务的执行 {@link StopInvocationRequest} {@link StopInvocationResponse} */
  StopInvocation(data: StopInvocationRequest, config?: AxiosRequestConfig): AxiosPromise<StopInvocationResponse>;
  /** 注销或者断开机器当前会话 {@link StopSessionRequest} {@link StopSessionResponse} */
  StopSession(data: StopSessionRequest, config?: AxiosRequestConfig): AxiosPromise<StopSessionResponse>;
  /** 主动退还实例 {@link TerminateInstancesRequest} {@link TerminateInstancesResponse} */
  TerminateInstances(data: TerminateInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<TerminateInstancesResponse>;
  /** 解除机器绑定 {@link UnbindInstancesRequest} {@link UnbindInstancesResponse} */
  UnbindInstances(data: UnbindInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<UnbindInstancesResponse>;
  /** 更新策略 {@link UpdatePolicyRequest} {@link UpdatePolicyResponse} */
  UpdatePolicy(data: UpdatePolicyRequest, config?: AxiosRequestConfig): AxiosPromise<UpdatePolicyResponse>;
}

export declare type Versions = ["2020-11-04"];

export default Cvd;
