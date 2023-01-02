/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** cpu信息 */
declare interface CpuInfo {
  /** CPU的ID */
  CpuId: number;
  /** CPU型号描述 */
  CpuDescription: string;
  /** 机型序列 */
  Series: number;
  /** 支持的RAID方式，0：有RAID卡，1：没有RAID卡 */
  ContainRaidCard: number[];
}

/** 自定义镜像信息 */
declare interface CustomImage {
  /** 镜像ID */
  ImageId: string;
  /** 镜像别名 */
  ImageName: string;
  /** 镜像状态码 */
  ImageStatus: number;
  /** 镜像OS名 */
  OsClass: string;
  /** 镜像OS版本 */
  OsVersion: string;
  /** OS是64还是32位 */
  OsBit: number;
  /** 镜像大小(M) */
  ImageSize: number;
  /** 创建时间 */
  CreateTime: string;
  /** 分区信息 */
  PartitionInfoSet: PartitionInfo[];
  /** 适用机型 */
  DeviceClassCode: string;
  /** 备注 */
  ImageDescription: string;
  /** 原始镜像id */
  OsTypeId: number;
}

/** 镜像制作进度列表 */
declare interface CustomImageProcess {
  /** 步骤 */
  StepName: string;
  /** 此步骤开始时间 */
  StartTime: string;
  /** 0: 已完成 1: 当前进行 2: 未开始 */
  StepType: number;
}

/** 设备ID与别名 */
declare interface DeviceAlias {
  /** 设备ID */
  InstanceId: string;
  /** 设备别名 */
  Alias: string;
}

/** 物理机设备类型 */
declare interface DeviceClass {
  /** 机型ID */
  DeviceClassCode: string;
  /** CPU描述 */
  CpuDescription: string;
  /** 内存描述 */
  MemDescription: string;
  /** 硬盘描述 */
  DiskDescription: string;
  /** 是否支持RAID. 0:不支持; 1:支持 */
  HaveRaidCard: number;
  /** 网卡描述 */
  NicDescription: string;
  /** GPU描述 */
  GpuDescription: string;
  /** 单价折扣 */
  Discount: number | null;
  /** 用户刊例价格 */
  UnitPrice: number | null;
  /** 实际价格 */
  RealPrice: number | null;
  /** 官网刊例价格 */
  NormalPrice: number | null;
  /** 设备使用场景类型 */
  DeviceType: string;
  /** 机型系列 */
  Series: number;
  /** cpu的核心数。仅是物理服务器未开启超线程的核心数， 超线程的核心数为Cpu*2 */
  Cpu: number;
  /** 内存容量。单位G */
  Mem: number;
}

/** RAID和设备分区结构 */
declare interface DeviceClassPartitionInfo {
  /** RAID类型ID */
  RaidId: number;
  /** RAID名称 */
  Raid: string;
  /** RAID名称（前台展示用） */
  RaidDisplay: string;
  /** 系统盘总大小（单位GiB） */
  SystemDiskSize: number;
  /** 系统盘/分区默认大小（单位GiB） */
  SysRootSpace: number;
  /** 系统盘swap分区默认大小（单位GiB） */
  SysSwaporuefiSpace: number;
  /** 系统盘/usr/local分区默认大小（单位GiB） */
  SysUsrlocalSpace: number;
  /** 系统盘/data分区默认大小（单位GiB） */
  SysDataSpace: number;
  /** 设备是否是uefi启动方式。0:legacy启动; 1:uefi启动 */
  SysIsUefiType: number;
  /** 数据盘总大小 */
  DataDiskSize: number;
  /** 硬盘列表 */
  DeviceDiskSizeInfoSet: DeviceDiskSizeInfo[];
}

/** 硬盘大小的描述 */
declare interface DeviceDiskSizeInfo {
  /** 硬盘名称 */
  DiskName: string;
  /** 硬盘大小（单位GiB） */
  DiskSize: number;
}

/** 设备硬件配置信息 */
declare interface DeviceHardwareInfo {
  /** 设备实例 ID */
  InstanceId?: string;
  /** 是否自定义机型 */
  IsElastic?: number;
  /** 机型计费模式，1 为预付费，2 为后付费 */
  CpmPayMode?: number;
  /** 自定义机型，CPU 型号 ID（非自定义机型返回0） */
  CpuId?: number;
  /** 自定义机型，内存大小, 单位 GB（非自定义机型返回0） */
  Mem?: number;
  /** 是否有 RAID 卡，0：没有 RAID 卡； 1：有 RAID 卡 */
  ContainRaidCard?: number;
  /** 自定义机型系统盘类型ID（若没有则返回0） */
  SystemDiskTypeId?: number;
  /** 自定义机型系统盘数量（若没有则返回0） */
  SystemDiskCount?: number;
  /** 自定义机型数据盘类型 ID（若没有则返回0） */
  DataDiskTypeId?: number;
  /** 自定义机型数据盘数量（若没有则返回0） */
  DataDiskCount?: number;
  /** CPU 型号描述 */
  CpuDescription?: string;
  /** 内存描述 */
  MemDescription?: string;
  /** 磁盘描述 */
  DiskDescription?: string;
  /** 网卡描述 */
  NicDescription?: string;
  /** 是否支持 RAID 的描述 */
  RaidDescription?: string;
  /** cpu的核心数。仅是物理服务器未开启超线程的核心数， 超线程的核心数为Cpu*2 */
  Cpu: number;
  /** 机型外部代号 */
  DeviceClassCode: string;
}

/** 物理机信息 */
declare interface DeviceInfo {
  /** 设备唯一ID */
  InstanceId: string;
  /** 私有网络ID */
  VpcId: string;
  /** 子网ID */
  SubnetId: string;
  /** 设备状态ID，取值：1：申领设备中2：初始化中4：运营中7：隔离中8：已隔离10：解隔离中16：故障中 */
  DeviceStatus: number;
  /** 设备操作状态ID，取值：1：运行中2：正在关机3：已关机5：正在开机7：重启中9：重装中12：绑定EIP13：解绑EIP14：绑定LB15：解绑LB19：更换IP中20：制作镜像中21：制作镜像失败23：故障待重装24：无备件待退回 */
  OperateStatus: number;
  /** 操作系统ID，参考接口[查询操作系统信息(DescribeOsInfo)](https://cloud.tencent.com/document/product/386/32902) */
  OsTypeId: number;
  /** RAID类型ID，参考接口[查询机型RAID方式以及系统盘大小(DescribeDeviceClassPartition)](https://cloud.tencent.com/document/product/386/32910) */
  RaidId: number;
  /** 设备别名 */
  Alias: string;
  /** 用户AppId */
  AppId: number;
  /** 可用区 */
  Zone: string;
  /** 外网IP */
  WanIp: string;
  /** 内网IP */
  LanIp: string;
  /** 设备交付时间 */
  DeliverTime: string;
  /** 设备到期时间 */
  Deadline: string;
  /** 自动续费标识。0: 不自动续费; 1:自动续费 */
  AutoRenewFlag: number;
  /** 设备类型 */
  DeviceClassCode: string;
  /** 标签列表 */
  Tags: Tag[];
  /** 计费模式。1: 预付费; 2: 后付费; 3:预付费转后付费中 */
  CpmPayMode: number;
  /** 带外IP */
  DhcpIp: string;
  /** 所在私有网络别名 */
  VpcName: string;
  /** 所在子网别名 */
  SubnetName: string;
  /** 所在私有网络CIDR */
  VpcCidrBlock: string;
  /** 所在子网CIDR */
  SubnetCidrBlock: string;
  /** 标识是否是竞价实例。0: 普通设备; 1: 竞价实例设备 */
  IsLuckyDevice: number;
  /** 标识机器维保状态。Maintain: 在保; WillExpire: 即将过保; Expire: 已过保 */
  MaintainStatus: string | null;
  /** 维保信息描述 */
  MaintainMessage: string | null;
}

/** 设备操作日志 */
declare interface DeviceOperationLog {
  /** 日志的ID */
  Id: number;
  /** 设备ID */
  InstanceId: string;
  /** 日志对应的操作任务ID */
  TaskId: number;
  /** 操作任务名称 */
  TaskName: string;
  /** 操作任务中文名称 */
  TaskDescription: string;
  /** 操作开始时间 */
  StartTime: string;
  /** 操作结束时间 */
  EndTime: string;
  /** 操作状态，0: 正在执行中；1：任务成功； 2: 任务失败。 */
  Status: number;
  /** 操作者 */
  OpUin: string;
  /** 操作描述 */
  LogDescription: string;
}

/** 物理机分区格式 */
declare interface DevicePartition {
  /** 系统盘大小 */
  SystemDiskSize: number;
  /** 数据盘大小 */
  DataDiskSize: number;
  /** 是否兼容Uefi */
  SysIsUefiType: boolean;
  /** root分区大小 */
  SysRootSpace: number;
  /** Swaporuefi分区大小 */
  SysSwaporuefiSpace: number;
  /** Usrlocal分区大小 */
  SysUsrlocalSpace: number;
  /** data分区大小 */
  SysDataSpace: number;
  /** 硬盘大小详情 */
  DeviceDiskSizeInfoSet: DeviceDiskSizeInfo[];
}

/** 物理机机架信息 */
declare interface DevicePositionInfo {
  /** 设备ID */
  InstanceId: string;
  /** 所在可用区 */
  Zone: string;
  /** 私有网络ID */
  VpcId: string;
  /** 子网ID */
  SubnetId: string;
  /** 业务IP */
  LanIp: string;
  /** 实例别名 */
  Alias: string;
  /** 机架名称 */
  RckName: string;
  /** 机位 */
  PosCode: number;
  /** 交换机名称 */
  SwitchName: string;
  /** 设备交付时间 */
  DeliverTime: string;
  /** 过期时间 */
  Deadline: string;
}

/** 服务器价格信息 */
declare interface DevicePriceInfo {
  /** 物理机ID */
  InstanceId: string;
  /** 设备型号 */
  DeviceClassCode: string;
  /** 是否是弹性机型，1：是，0：否 */
  IsElastic: number;
  /** 付费模式ID, 1:预付费; 2:后付费; 3:预付费转后付费中 */
  CpmPayMode: number;
  /** Cpu信息描述 */
  CpuDescription: string;
  /** 内存信息描述 */
  MemDescription: string;
  /** 硬盘信息描述 */
  DiskDescription: string;
  /** 网卡信息描述 */
  NicDescription: string;
  /** Gpu信息描述 */
  GpuDescription: string;
  /** Raid信息描述 */
  RaidDescription: string;
  /** 客户的单价 */
  Price: number;
  /** 刊例单价 */
  NormalPrice: number;
  /** 原价 */
  TotalCost: number;
  /** 折扣价 */
  RealTotalCost: number;
  /** 计费时长 */
  TimeSpan: number;
  /** 计费时长单位, M:按月计费; D:按天计费 */
  TimeUnit: string;
  /** 商品数量 */
  GoodsCount: number;
}

/** 自定义机型磁盘的描述 */
declare interface DiskInfo {
  /** 磁盘ID */
  DiskTypeId: number;
  /** 磁盘的容量，单位为G */
  Size: number;
  /** 磁盘信息描述 */
  DiskDescription: string;
}

/** 运行失败的自定义脚本信息 */
declare interface FailedTaskInfo {
  /** 运行脚本的设备ID */
  InstanceId: string;
  /** 失败原因 */
  ErrorMsg: string;
}

/** 托管设备带外信息 */
declare interface HostedDeviceOutBandInfo {
  /** 物理机ID */
  InstanceId: string;
  /** 带外IP */
  OutBandIp: string;
  /** VPN的IP */
  VpnIp: string;
  /** VPN的端口 */
  VpnPort: number;
}

/** 操作系统类型 */
declare interface OsInfo {
  /** 操作系统ID */
  OsTypeId: number;
  /** 操作系统名称 */
  OsName: string;
  /** 操作系统名称描述 */
  OsDescription: string;
  /** 操作系统英文名称 */
  OsEnglishDescription: string;
  /** 操作系统的分类，如CentOs Debian */
  OsClass: string;
  /** 标识镜像分类。public:公共镜像; private: 专属镜像 */
  ImageTag: string;
  /** 操作系统，ext4文件下所支持的最大的磁盘大小。单位为T */
  MaxPartitionSize: number;
  /** 黑石版本号 */
  OsMinorVersion: string | null;
  /** 黑石版本 */
  OsMinorClass: string | null;
}

/** 描述设备分区信息 */
declare interface PartitionInfo {
  /** 分区名称 */
  Name: string;
  /** 分区大小 */
  Size: number;
}

/** 一条预授权规则 */
declare interface PsaRegulation {
  /** 规则ID */
  PsaId: string;
  /** 规则别名 */
  PsaName: string;
  /** 关联标签数量 */
  TagCount: number;
  /** 关联实例数量 */
  InstanceCount: number;
  /** 故障实例数量 */
  RepairCount: number;
  /** 故障实例上限 */
  RepairLimit: number;
  /** 创建时间 */
  CreateTime: string;
  /** 规则备注 */
  PsaDescription: string;
  /** 关联标签 */
  Tags: Tag[];
  /** 关联故障类型id */
  TaskTypeIds: number[];
}

/** 地域信息 */
declare interface RegionInfo {
  /** 地域ID */
  Region: string;
  /** 地域整型ID */
  RegionId: number;
  /** 地域描述 */
  RegionDescription: string;
  /** 该地域下的可用区信息 */
  ZoneInfoSet: ZoneInfo[];
}

/** 各实例对应的异步任务执行结果 */
declare interface SubtaskStatus {
  /** 实例ID */
  InstanceId: string;
  /** 实例ID对应任务的状态，取值如下：1：成功2：失败3：部分成功，部分失败4：未完成5：部分成功，部分未完成6：部分未完成，部分失败7：部分未完成，部分失败，部分成功 */
  TaskStatus: number;
}

/** 成功运行的自定义脚本信息 */
declare interface SuccessTaskInfo {
  /** 运行脚本的设备ID */
  InstanceId: string;
  /** 黑石异步任务ID */
  TaskId: number;
  /** 黑石自定义脚本运行任务ID */
  CmdTaskId: string;
}

/** 标签键与值 */
declare interface Tag {
  /** 标签键 */
  TagKey: string;
  /** 标签键对应的值 */
  TagValues: string[];
}

/** 维护平台维修任务信息 */
declare interface TaskInfo {
  /** 任务id */
  TaskId: string;
  /** 主机id */
  InstanceId: string;
  /** 主机别名 */
  Alias: string;
  /** 故障类型id */
  TaskTypeId: number;
  /** 任务状态id */
  TaskStatus: number;
  /** 创建时间 */
  CreateTime: string;
  /** 授权时间 */
  AuthTime: string;
  /** 结束时间 */
  EndTime: string;
  /** 任务详情 */
  TaskDetail: string;
  /** 设备状态 */
  DeviceStatus: number;
  /** 设备操作状态 */
  OperateStatus: number;
  /** 可用区 */
  Zone: string;
  /** 地域 */
  Region: string;
  /** 所属网络 */
  VpcId: string;
  /** 所在子网 */
  SubnetId: string;
  /** 子网名 */
  SubnetName: string;
  /** VPC名 */
  VpcName: string;
  /** VpcCidrBlock */
  VpcCidrBlock: string;
  /** SubnetCidrBlock */
  SubnetCidrBlock: string;
  /** 公网ip */
  WanIp: string;
  /** 内网IP */
  LanIp: string;
  /** 管理IP */
  MgtIp: string;
  /** 故障类中文名 */
  TaskTypeName: string | null;
  /** 故障类型，取值：unconfirmed (不明确故障)；redundancy (有冗余故障)；nonredundancy (无冗余故障) */
  TaskSubType: string | null;
}

/** 维修任务操作日志 */
declare interface TaskOperationLog {
  /** 操作步骤 */
  TaskStep: string;
  /** 操作人 */
  Operator: string;
  /** 操作描述 */
  OperationDetail: string;
  /** 操作时间 */
  OperationTime: string;
}

/** 故障id对应故障名列表 */
declare interface TaskType {
  /** 故障类ID */
  TypeId: number;
  /** 故障类中文名 */
  TypeName: string;
  /** 故障类型父类 */
  TaskSubType: string;
}

/** 脚本信息 */
declare interface UserCmd {
  /** 用户自定义脚本名 */
  Alias: string;
  /** AppId */
  AppId: number;
  /** 脚本自增ID */
  AutoId: number;
  /** 脚本ID */
  CmdId: string;
  /** 脚本内容 */
  Content: string;
  /** 创建时间 */
  CreateTime: string;
  /** 修改时间 */
  ModifyTime: string;
  /** 命令适用的操作系统类型 */
  OsType: string;
}

/** 自定义脚本任务信息 */
declare interface UserCmdTask {
  /** 任务ID */
  TaskId: string;
  /** 任务状态ID，取值: -1(进行中) 0(结束) */
  Status: number;
  /** 脚本名称 */
  Alias: string;
  /** 脚本ID */
  CmdId: string;
  /** 运行实例数量 */
  InstanceCount: number;
  /** 运行成功数量 */
  SuccessCount: number;
  /** 运行失败数量 */
  FailureCount: number;
  /** 执行开始时间 */
  RunBeginTime: string;
  /** 执行结束时间 */
  RunEndTime: string;
}

/** 自定义脚本任务详细信息 */
declare interface UserCmdTaskInfo {
  /** 自动编号，可忽略 */
  AutoId: number;
  /** 任务ID */
  TaskId: string;
  /** 任务开始时间 */
  RunBeginTime: string;
  /** 任务结束时间 */
  RunEndTime: string;
  /** 任务状态ID，取值为 -1：进行中；0：成功；>0：失败错误码 */
  Status: number;
  /** 设备别名 */
  InstanceName: string;
  /** 设备ID */
  InstanceId: string;
  /** 私有网络名 */
  VpcName: string;
  /** 私有网络整型ID */
  VpcId: string;
  /** 私有网络Cidr */
  VpcCidrBlock: string;
  /** 子网名 */
  SubnetName: string;
  /** 子网ID */
  SubnetId: string;
  /** 子网Cidr */
  SubnetCidrBlock: string;
  /** 内网IP */
  LanIp: string;
  /** 脚本内容，base64编码后的值 */
  CmdContent: string;
  /** 脚本参数，base64编码后的值 */
  CmdParam: string;
  /** 脚本执行结果，base64编码后的值 */
  CmdResult: string;
  /** 用户AppId */
  AppId: number;
  /** 用户执行脚本结束退出的返回值，没有返回值为-1 */
  LastShellExit: number;
}

/** 可用区信息 */
declare interface ZoneInfo {
  /** 可用区ID */
  Zone: string;
  /** 可用区整型ID */
  ZoneId: number;
  /** 可用区描述 */
  ZoneDescription: string;
}

declare interface AttachCamRoleRequest {
  /** 服务器ID */
  InstanceId: string;
  /** 角色名称。 */
  RoleName: string;
}

declare interface AttachCamRoleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BindPsaTagRequest {
  /** 预授权规则ID */
  PsaId: string;
  /** 需要绑定的标签key */
  TagKey: string;
  /** 需要绑定的标签value */
  TagValue: string;
}

declare interface BindPsaTagResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BuyDevicesRequest {
  /** 可用区ID。通过接口[查询地域以及可用区(DescribeRegions)](https://cloud.tencent.com/document/api/386/33564)获取可用区信息 */
  Zone: string;
  /** 部署服务器的操作系统ID。通过接口[查询操作系统信息(DescribeOsInfo)](https://cloud.tencent.com/document/product/386/32902)获取操作系统信息 */
  OsTypeId: number;
  /** RAID类型ID。通过接口[查询机型RAID方式以及系统盘大小(DescribeDeviceClassPartition)](https://cloud.tencent.com/document/api/386/32910)获取RAID信息 */
  RaidId: number;
  /** 购买数量 */
  GoodsCount: number;
  /** 购买至私有网络ID */
  VpcId: string;
  /** 购买至子网ID */
  SubnetId: string;
  /** 购买的机型ID。通过接口[查询设备型号(DescribeDeviceClass)](https://cloud.tencent.com/document/api/386/32911)获取机型信息 */
  DeviceClassCode: string;
  /** 购买时长单位，取值：M(月) D(天) */
  TimeUnit: string;
  /** 购买时长 */
  TimeSpan: number;
  /** 是否安装安全Agent，取值：1(安装) 0(不安装)，默认取值0 */
  NeedSecurityAgent?: number;
  /** 是否安装监控Agent，取值：1(安装) 0(不安装)，默认取值0 */
  NeedMonitorAgent?: number;
  /** 是否安装EMR Agent，取值：1(安装) 0(不安装)，默认取值0 */
  NeedEMRAgent?: number;
  /** 是否安装EMR软件包，取值：1(安装) 0(不安装)，默认取值0 */
  NeedEMRSoftware?: number;
  /** 是否分配弹性公网IP，取值：1(分配) 0(不分配)，默认取值0 */
  ApplyEip?: number;
  /** 弹性公网IP计费模式，取值：Flow(按流量计费) Bandwidth(按带宽计费)，默认取值Flow */
  EipPayMode?: string;
  /** 弹性公网IP带宽限制，单位Mb */
  EipBandwidth?: number;
  /** 数据盘是否格式化，取值：1(格式化) 0(不格式化)，默认取值为1 */
  IsZoning?: number;
  /** 物理机计费模式，取值：1(预付费) 2(后付费)，默认取值为1 */
  CpmPayMode?: number;
  /** 自定义镜像ID，取值生效时用自定义镜像部署物理机 */
  ImageId?: string;
  /** 设置Linux root或Windows Administrator的密码 */
  Password?: string;
  /** 自动续费标志位，取值：1(自动续费) 0(不自动续费)，默认取值0 */
  AutoRenewFlag?: number;
  /** 系统盘根分区大小，单位为G，默认取值10G。通过接口[查询机型RAID方式以及系统盘大小(DescribeDeviceClassPartition)](https://cloud.tencent.com/document/api/386/32910)获取根分区信息 */
  SysRootSpace?: number;
  /** 系统盘swap分区或/boot/efi分区的大小，单位为G。若是uefi启动的机器，分区为/boot/efi，且此值是默认是2G。 普通机器为swap分区，可以不指定此分区。 机型是否是uefi启动，参见接口[查询设备型号(DescribeDeviceClass)](https://cloud.tencent.com/document/api/386/32911) */
  SysSwaporuefiSpace?: number;
  /** /usr/local分区大小，单位为G */
  SysUsrlocalSpace?: number;
  /** /data分区大小，单位为G。如果系统盘还有剩余大小，会分配给/data分区。（特殊情况：如果剩余空间不足10G，并且没有指定/data分区，则剩余空间会分配给Root分区） */
  SysDataSpace?: number;
  /** 是否开启超线程，取值：1(开启) 0(关闭)，默认取值1 */
  HyperThreading?: number;
  /** 指定的内网IP列表，不指定时自动分配 */
  LanIps?: string[];
  /** 设备名称列表 */
  Aliases?: string[];
  /** CPU型号ID，自定义机型需要传入，取值：1: E5-2620v3 (6核) &#42; 22: E5-2680v4 (14核) &#42; 23: E5-2670v3 (12核) &#42; 24: E5-2620v4 (8核) &#42; 25: 4110 (8核) &#42; 26: 6133 (20核) &#42; 2 */
  CpuId?: number;
  /** 是否有RAID卡，取值：1(有) 0(无)，自定义机型需要传入 */
  ContainRaidCard?: number;
  /** 内存大小，单位为G，自定义机型需要传入。取值参考接口[查询自定义机型部件信息(DescribeHardwareSpecification)](https://cloud.tencent.com/document/api/386/33565)返回值 */
  MemSize?: number;
  /** 系统盘ID，自定义机型需要传入。取值参考接口[查询自定义机型部件信息(DescribeHardwareSpecification)](https://cloud.tencent.com/document/api/386/33565)返回值 */
  SystemDiskTypeId?: number;
  /** 系统盘数量，自定义机型需要传入。取值参考接口[查询自定义机型部件信息(DescribeHardwareSpecification)](https://cloud.tencent.com/document/api/386/33565)返回值 */
  SystemDiskCount?: number;
  /** 数据盘ID，自定义机型需要传入。取值参考接口[查询自定义机型部件信息(DescribeHardwareSpecification)](https://cloud.tencent.com/document/api/386/33565)返回值 */
  DataDiskTypeId?: number;
  /** 数据盘数量，自定义机型需要传入。取值参考接口[查询自定义机型部件信息(DescribeHardwareSpecification)](https://cloud.tencent.com/document/api/386/33565)返回值 */
  DataDiskCount?: number;
  /** 绑定的标签列表 */
  Tags?: Tag[];
  /** 指定数据盘的文件系统格式，当前支持 EXT4和XFS选项， 默认为EXT4。 参数适用于数据盘和Linux， 且在IsZoning为1时生效 */
  FileSystem?: string;
  /** 此参数是为了防止重复发货。如果两次调用传入相同的BuySession，只会发货一次。 不要以设备别名作为BuySession，这样只会第一次购买成功。参数长度为128位，合法字符为大小字母，数字，下划线，横线。 */
  BuySession?: string;
  /** 绑定已有的安全组ID。仅在NeedSecurityAgent为1时生效 */
  SgId?: string;
  /** 安全组模板ID，由模板创建新安全组并绑定。TemplateId和SgId不能同时传入 */
  TemplateId?: string;
}

declare interface BuyDevicesResponse {
  /** 购买的物理机实例ID列表 */
  InstanceIds?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCustomImageRequest {
  /** 用于制作镜像的物理机ID */
  InstanceId: string;
  /** 镜像别名 */
  ImageName: string;
  /** 镜像描述 */
  ImageDescription?: string;
}

declare interface CreateCustomImageResponse {
  /** 黑石异步任务ID */
  TaskId: number;
  /** 镜像ID */
  ImageId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreatePsaRegulationRequest {
  /** 规则别名 */
  PsaName: string;
  /** 关联的故障类型ID列表 */
  TaskTypeIds: number[];
  /** 维修实例上限，默认为5 */
  RepairLimit?: number;
  /** 规则备注 */
  PsaDescription?: string;
}

declare interface CreatePsaRegulationResponse {
  /** 创建的预授权规则ID */
  PsaId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateSpotDeviceRequest {
  /** 可用区名称。如ap-guangzhou-bls-1, 通过DescribeRegions获取 */
  Zone: string;
  /** 计算单元类型, 如v3.c2.medium，更详细的ComputeType参考[竞价实例产品文档](https://cloud.tencent.com/document/product/386/30256) */
  ComputeType: string;
  /** 操作系统类型ID */
  OsTypeId: number;
  /** 私有网络ID */
  VpcId: string;
  /** 子网ID */
  SubnetId: string;
  /** 购买的计算单元个数 */
  GoodsNum: number;
  /** 出价策略。可取值为SpotWithPriceLimit和SpotAsPriceGo。SpotWithPriceLimit，用户设置价格上限，需要传SpotPriceLimit参数， 如果市场价高于用户的指定价格，则购买不成功; SpotAsPriceGo 是随市场价的策略。 */
  SpotStrategy: string;
  /** 用户设置的价格。当为SpotWithPriceLimit竞价策略时有效 */
  SpotPriceLimit?: number;
  /** 设置竞价实例密码。可选参数，没有指定会生成随机密码 */
  Passwd?: string;
}

declare interface CreateSpotDeviceResponse {
  /** 创建的服务器ID */
  ResourceIds?: string[];
  /** 任务ID */
  FlowId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateUserCmdRequest {
  /** 用户自定义脚本的名称 */
  Alias: string;
  /** 命令适用的操作系统类型，取值linux或xserver */
  OsType: string;
  /** 脚本内容，必须经过base64编码 */
  Content: string;
}

declare interface CreateUserCmdResponse {
  /** 脚本ID */
  CmdId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteCustomImagesRequest {
  /** 准备删除的镜像ID列表 */
  ImageIds: string[];
}

declare interface DeleteCustomImagesResponse {
  /** 黑石异步任务ID */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeletePsaRegulationRequest {
  /** 预授权规则ID */
  PsaId: string;
}

declare interface DeletePsaRegulationResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteUserCmdsRequest {
  /** 需要删除的脚本ID */
  CmdIds: string[];
}

declare interface DeleteUserCmdsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCustomImageProcessRequest {
  /** 镜像ID */
  ImageId: string;
}

declare interface DescribeCustomImageProcessResponse {
  /** 镜像制作进度 */
  CustomImageProcessSet?: CustomImageProcess[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCustomImagesRequest {
  /** 偏移量 */
  Offset: number;
  /** 数量限制 */
  Limit: number;
  /** 排序字段，仅支持CreateTime */
  OrderField?: string;
  /** 排序方式 0:递增(默认) 1:递减 */
  Order?: number;
  /** 按ImageId查找指定镜像信息，ImageId字段存在时其他字段失效 */
  ImageId?: string;
  /** 模糊查询过滤，可以查询镜像ID或镜像名 */
  SearchKey?: string;
  /** 镜像状态过滤列表，有效取值为：1：制作中2：制作失败3：正常4：删除中 */
  ImageStatus?: number[];
}

declare interface DescribeCustomImagesResponse {
  /** 返回镜像数量 */
  TotalCount?: number;
  /** 镜像信息列表 */
  CustomImageSet?: CustomImage[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDeviceClassPartitionRequest {
  /** 设备类型代号。代号通过接口[查询设备型号(DescribeDeviceClass)](https://cloud.tencent.com/document/api/386/32911)查询。标准机型需要传入此参数。虽是可选参数，但DeviceClassCode和InstanceId参数，必须要填写一个。 */
  DeviceClassCode?: string;
  /** 需要查询自定义机型RAID信息时，传入自定义机型实例ID。InstanceId存在时其余参数失效。 */
  InstanceId?: string;
  /** CPU型号ID，查询自定义机型时需要传入 */
  CpuId?: number;
  /** 内存大小，单位为G，查询自定义机型时需要传入 */
  MemSize?: number;
  /** 是否有RAID卡，取值：1(有) 0(无)。查询自定义机型时需要传入 */
  ContainRaidCard?: number;
  /** 系统盘类型ID，查询自定义机型时需要传入 */
  SystemDiskTypeId?: number;
  /** 系统盘数量，查询自定义机型时需要传入 */
  SystemDiskCount?: number;
  /** 数据盘类型ID，查询自定义机型时可传入 */
  DataDiskTypeId?: number;
  /** 数据盘数量，查询自定义机型时可传入 */
  DataDiskCount?: number;
}

declare interface DescribeDeviceClassPartitionResponse {
  /** 支持的RAID格式列表 */
  DeviceClassPartitionInfoSet?: DeviceClassPartitionInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDeviceClassRequest {
  /** 是否仅查询在售标准机型配置信息。取值0：查询所有机型；1：查询在售机型。默认为1 */
  OnSale?: number;
  /** 是否返回价格信息。取值0：不返回价格信息，接口返回速度更快；1：返回价格信息。默认为1 */
  NeedPriceInfo?: number;
}

declare interface DescribeDeviceClassResponse {
  /** 物理机设备类型列表 */
  DeviceClassSet?: DeviceClass[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDeviceHardwareInfoRequest {
  /** 设备 ID 列表 */
  InstanceIds: string[];
}

declare interface DescribeDeviceHardwareInfoResponse {
  /** 设备硬件配置信息 */
  DeviceHardwareInfoSet?: DeviceHardwareInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDeviceInventoryRequest {
  /** 可用区 */
  Zone: string;
  /** 设备型号 */
  DeviceClassCode?: string;
  /** 私有网络ID */
  VpcId?: string;
  /** 子网ID */
  SubnetId?: string;
  /** CPU型号ID，查询自定义机型时必填 */
  CpuId?: number;
  /** 内存大小，单位为G，查询自定义机型时必填 */
  MemSize?: number;
  /** 是否有RAID卡，取值：1(有) 0(无)，查询自定义机型时必填 */
  ContainRaidCard?: number;
  /** 系统盘类型ID，查询自定义机型时必填 */
  SystemDiskTypeId?: number;
  /** 系统盘数量，查询自定义机型时必填 */
  SystemDiskCount?: number;
  /** 数据盘类型ID，查询自定义机型时可填 */
  DataDiskTypeId?: number;
  /** 数据盘数量，查询自定义机型时可填 */
  DataDiskCount?: number;
}

declare interface DescribeDeviceInventoryResponse {
  /** 库存设备数量 */
  DeviceCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDeviceOperationLogRequest {
  /** 设备实例ID */
  InstanceId: string;
  /** 查询开始日期 */
  StartTime?: string;
  /** 查询结束日期 */
  EndTime?: string;
  /** 偏移量 */
  Offset?: number;
  /** 返回数量 */
  Limit?: number;
}

declare interface DescribeDeviceOperationLogResponse {
  /** 操作日志列表 */
  DeviceOperationLogSet?: DeviceOperationLog[];
  /** 返回数目 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDevicePartitionRequest {
  /** 物理机ID */
  InstanceId: string;
}

declare interface DescribeDevicePartitionResponse {
  /** 物理机分区格式 */
  DevicePartition?: DevicePartition;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDevicePositionRequest {
  /** 偏移量 */
  Offset?: number;
  /** 数量限制 */
  Limit?: number;
  /** 私有网络ID */
  VpcId?: string;
  /** 子网ID */
  SubnetId?: string;
  /** 实例ID列表 */
  InstanceIds?: string[];
  /** 实例别名 */
  Alias?: string;
}

declare interface DescribeDevicePositionResponse {
  /** 返回数量 */
  TotalCount?: number;
  /** 设备所在机架信息 */
  DevicePositionInfoSet?: DevicePositionInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDevicePriceInfoRequest {
  /** 需要查询的实例列表 */
  InstanceIds: string[];
  /** 购买时长单位，当前只支持取值为m */
  TimeUnit?: string;
  /** 购买时长 */
  TimeSpan?: number;
}

declare interface DescribeDevicePriceInfoResponse {
  /** 服务器价格信息列表 */
  DevicePriceInfoSet?: DevicePriceInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDevicesRequest {
  /** 偏移量 */
  Offset: number;
  /** 返回数量，默认为20，最大值为100。 */
  Limit: number;
  /** 机型ID，通过接口[查询设备型号(DescribeDeviceClass)](https://cloud.tencent.com/document/api/386/32911)查询 */
  DeviceClassCode?: string;
  /** 设备ID数组 */
  InstanceIds?: string[];
  /** 外网IP数组 */
  WanIps?: string[];
  /** 内网IP数组 */
  LanIps?: string[];
  /** 设备名称 */
  Alias?: string;
  /** 模糊IP查询 */
  VagueIp?: string;
  /** 设备到期时间查询的起始时间 */
  DeadlineStartTime?: string;
  /** 设备到期时间查询的结束时间 */
  DeadlineEndTime?: string;
  /** 自动续费标志 0:不自动续费，1:自动续费 */
  AutoRenewFlag?: number;
  /** 私有网络唯一ID */
  VpcId?: string;
  /** 子网唯一ID */
  SubnetId?: string;
  /** 标签列表 */
  Tags?: Tag[];
  /** 设备类型，取值有: compute(计算型), standard(标准型), storage(存储型) 等 */
  DeviceType?: string;
  /** 竞价实例机器的过滤。如果未指定此参数，则不做过滤。0: 查询非竞价实例的机器; 1: 查询竞价实例的机器。 */
  IsLuckyDevice?: number;
  /** 排序字段 */
  OrderField?: string;
  /** 排序方式，取值：0:增序(默认)，1:降序 */
  Order?: number;
  /** 按照维保方式过滤。可取值为 Maintain: 在保; WillExpire: 即将过保; Expire: 已过保 */
  MaintainStatus?: string;
}

declare interface DescribeDevicesResponse {
  /** 返回数量 */
  TotalCount: number;
  /** 物理机信息列表 */
  DeviceInfoSet: DeviceInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeHardwareSpecificationRequest {
}

declare interface DescribeHardwareSpecificationResponse {
  /** CPU型号列表 */
  CpuInfoSet?: CpuInfo[];
  /** 内存的取值，单位为G */
  MemSet?: number[];
  /** 硬盘型号列表 */
  DiskInfoSet?: DiskInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeHostedDeviceOutBandInfoRequest {
  /** 托管设备的唯一ID数组,数组个数不超过20 */
  InstanceIds: string[];
  /** 可用区ID */
  Zone: string;
}

declare interface DescribeHostedDeviceOutBandInfoResponse {
  /** 托管设备带外信息 */
  HostedDeviceOutBandInfoSet?: HostedDeviceOutBandInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeOperationResultRequest {
  /** 异步任务ID */
  TaskId: number;
}

declare interface DescribeOperationResultResponse {
  /** 任务的整体状态，取值如下：1：成功2：失败3：部分成功，部分失败4：未完成5：部分成功，部分未完成6：部分未完成，部分失败7：部分未完成，部分失败，部分成功 */
  TaskStatus?: number;
  /** 各实例对应任务的状态ID */
  SubtaskStatusSet?: SubtaskStatus[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeOsInfoRequest {
  /** 设备类型代号。 可以从DescribeDeviceClass查询设备类型列表 */
  DeviceClassCode?: string;
}

declare interface DescribeOsInfoResponse {
  /** 操作系统信息列表 */
  OsInfoSet?: OsInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePsaRegulationsRequest {
  /** 数量限制 */
  Limit: number;
  /** 偏移量 */
  Offset: number;
  /** 规则ID过滤，支持模糊查询 */
  PsaIds?: string[];
  /** 规则别名过滤，支持模糊查询 */
  PsaNames?: string[];
  /** 标签过滤 */
  Tags?: Tag[];
  /** 排序字段，取值支持：CreateTime */
  OrderField?: string;
  /** 排序方式 0:递增(默认) 1:递减 */
  Order?: number;
}

declare interface DescribePsaRegulationsResponse {
  /** 返回规则数量 */
  TotalCount?: number;
  /** 返回规则列表 */
  PsaRegulations?: PsaRegulation[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRegionsRequest {
  /** 地域整型ID，目前黑石可用地域包括：8-北京，4-上海，1-广州， 19-重庆 */
  RegionId?: number;
}

declare interface DescribeRegionsResponse {
  /** 地域信息 */
  RegionInfoSet?: RegionInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRepairTaskConstantRequest {
}

declare interface DescribeRepairTaskConstantResponse {
  /** 故障类型ID与对应中文名列表 */
  TaskTypeSet?: TaskType[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTaskInfoRequest {
  /** 开始位置 */
  Offset: number;
  /** 数据条数 */
  Limit: number;
  /** 时间过滤下限 */
  StartDate?: string;
  /** 时间过滤上限 */
  EndDate?: string;
  /** 任务状态ID过滤 */
  TaskStatus?: number[];
  /** 排序字段，目前支持：CreateTime，AuthTime，EndTime */
  OrderField?: string;
  /** 排序方式 0:递增(默认) 1:递减 */
  Order?: number;
  /** 任务ID过滤 */
  TaskIds?: string[];
  /** 实例ID过滤 */
  InstanceIds?: string[];
  /** 实例别名过滤 */
  Aliases?: string[];
  /** 故障类型ID过滤 */
  TaskTypeIds?: number[];
}

declare interface DescribeTaskInfoResponse {
  /** 返回任务总数量 */
  TotalCount: number;
  /** 任务信息列表 */
  TaskInfoSet: TaskInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTaskOperationLogRequest {
  /** 维修任务ID */
  TaskId: string;
  /** 排序字段，目前支持：OperationTime */
  OrderField?: string;
  /** 排序方式 0:递增(默认) 1:递减 */
  Order?: number;
}

declare interface DescribeTaskOperationLogResponse {
  /** 操作日志 */
  TaskOperationLogSet?: TaskOperationLog[];
  /** 日志条数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeUserCmdTaskInfoRequest {
  /** 任务ID */
  TaskId: string;
  /** 偏移量 */
  Offset?: number;
  /** 数量限制 */
  Limit?: number;
  /** 排序字段，支持： RunBeginTime,RunEndTime,Status */
  OrderField?: string;
  /** 排序方式，取值: 1倒序，0顺序；默认倒序 */
  Order?: number;
  /** 关键字搜索，可搜索ID或别名，支持模糊搜索 */
  SearchKey?: string;
}

declare interface DescribeUserCmdTaskInfoResponse {
  /** 返回数量 */
  TotalCount?: number;
  /** 自定义脚本任务详细信息列表 */
  UserCmdTaskInfoSet?: UserCmdTaskInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeUserCmdTasksRequest {
  /** 偏移量 */
  Offset: number;
  /** 数量限制 */
  Limit: number;
  /** 排序字段，支持： RunBeginTime,RunEndTime,InstanceCount,SuccessCount,FailureCount */
  OrderField?: string;
  /** 排序方式，取值: 1倒序，0顺序；默认倒序 */
  Order?: number;
}

declare interface DescribeUserCmdTasksResponse {
  /** 脚本任务信息数量 */
  TotalCount?: number;
  /** 脚本任务信息列表 */
  UserCmdTasks?: UserCmdTask[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeUserCmdsRequest {
  /** 偏移量 */
  Offset: number;
  /** 数量限制 */
  Limit: number;
  /** 排序字段，支持： OsType,CreateTime,ModifyTime */
  OrderField?: string;
  /** 排序方式，取值: 1倒序，0顺序；默认倒序 */
  Order?: number;
  /** 关键字搜索，可搜索ID或别名，支持模糊搜索 */
  SearchKey?: string;
  /** 查询的脚本ID */
  CmdId?: string;
}

declare interface DescribeUserCmdsResponse {
  /** 返回数量 */
  TotalCount?: number;
  /** 脚本信息列表 */
  UserCmds?: UserCmd[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DetachCamRoleRequest {
  /** 服务器ID */
  InstanceId: string;
}

declare interface DetachCamRoleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCustomImageAttributeRequest {
  /** 镜像ID */
  ImageId: string;
  /** 设置新的镜像名 */
  ImageName?: string;
  /** 设置新的镜像描述 */
  ImageDescription?: string;
}

declare interface ModifyCustomImageAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDeviceAliasesRequest {
  /** 需要改名的设备与别名列表 */
  DeviceAliases: DeviceAlias[];
}

declare interface ModifyDeviceAliasesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDeviceAutoRenewFlagRequest {
  /** 自动续费标志位。0: 不自动续费; 1: 自动续费 */
  AutoRenewFlag: number;
  /** 需要修改的设备ID列表 */
  InstanceIds: string[];
}

declare interface ModifyDeviceAutoRenewFlagResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyLanIpRequest {
  /** 物理机ID */
  InstanceId: string;
  /** 指定新VPC */
  VpcId: string;
  /** 指定新子网 */
  SubnetId: string;
  /** 指定新内网IP */
  LanIp?: string;
  /** 是否需要重启机器，取值 1(需要) 0(不需要)，默认取值0 */
  RebootDevice?: number;
}

declare interface ModifyLanIpResponse {
  /** 黑石异步任务ID */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyPayModePre2PostRequest {
  /** 需要修改的设备ID列表 */
  InstanceIds: string[];
}

declare interface ModifyPayModePre2PostResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyPsaRegulationRequest {
  /** 预授权规则ID */
  PsaId: string;
  /** 预授权规则别名 */
  PsaName?: string;
  /** 维修中的实例上限 */
  RepairLimit?: number;
  /** 预授权规则备注 */
  PsaDescription?: string;
  /** 预授权规则关联故障类型ID列表 */
  TaskTypeIds?: number[];
}

declare interface ModifyPsaRegulationResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyUserCmdRequest {
  /** 待修改的脚本ID */
  CmdId: string;
  /** 待修改的脚本名称 */
  Alias?: string;
  /** 脚本适用的操作系统类型 */
  OsType?: string;
  /** 待修改的脚本内容，必须经过base64编码 */
  Content?: string;
}

declare interface ModifyUserCmdResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface OfflineDevicesRequest {
  /** 需要退还的物理机ID列表 */
  InstanceIds: string[];
}

declare interface OfflineDevicesResponse {
  /** 黑石异步任务ID */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RebootDevicesRequest {
  /** 需要重启的设备ID列表 */
  InstanceIds: string[];
}

declare interface RebootDevicesResponse {
  /** 异步任务ID */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RecoverDevicesRequest {
  /** 需要恢复的物理机ID列表 */
  InstanceIds: string[];
}

declare interface RecoverDevicesResponse {
  /** 黑石异步任务ID */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ReloadDeviceOsRequest {
  /** 设备的唯一ID */
  InstanceId: string;
  /** 密码。 用户设置的linux root或Windows Administrator密码。密码校验规则: Windows机器密码需12到16位，至少包括三项 `[a-z]`,`[A-Z]`,`[0-9]`和`[()`'`~!@#$%^&*-+=_`|`{}[]:;'<>,.?/]`的特殊符号, 密码不能包含Administrator(不区分大小写); Linux机器密码需8到16位，至少包括两项`[a-z,A-Z]`,`[0-9]`和`[()`'`~!@#$%^&*-+=_`|`{}[]:;'<>,.?/]`的特殊符号 */
  Password: string;
  /** 操作系统类型ID。通过接口[查询操作系统信息(DescribeOsInfo)](https://cloud.tencent.com/document/api/386/32902)获取操作系统信息 */
  OsTypeId?: number;
  /** RAID类型ID。通过接口[查询机型RAID方式以及系统盘大小(DescribeDeviceClassPartition)](https://cloud.tencent.com/document/api/386/32910)获取RAID信息 */
  RaidId?: number;
  /** 是否格式化数据盘。0: 不格式化（默认值）；1：格式化 */
  IsZoning?: number;
  /** 系统盘根分区大小，默认是10G。系统盘的大小参考接口[查询机型RAID方式以及系统盘大小(DescribeDeviceClassPartition)](https://cloud.tencent.com/document/api/386/32910) */
  SysRootSpace?: number;
  /** 系统盘swap分区或/boot/efi分区的大小。若是uefi启动的机器，分区为/boot/efi ,且此值是默认是2G。普通机器为swap分区，可以不指定此分区。机型是否是uefi启动，参考接口[查询设备型号(DescribeDeviceClass)](https://cloud.tencent.com/document/api/386/32911) */
  SysSwaporuefiSpace?: number;
  /** /usr/local分区大小 */
  SysUsrlocalSpace?: number;
  /** 重装到新的私有网络的ID。如果改变VPC子网，则要求与SubnetId同时传参，否则可不填 */
  VpcId?: string;
  /** 重装到新的子网的ID。如果改变VPC子网，则要求与VpcId同时传参，否则可不填 */
  SubnetId?: string;
  /** 重装指定IP地址 */
  LanIp?: string;
  /** 指定是否开启超线程。 0：关闭超线程；1：开启超线程（默认值） */
  HyperThreading?: number;
  /** 自定义镜像ID。传此字段则用自定义镜像重装 */
  ImageId?: string;
  /** 指定数据盘的文件系统格式，当前支持 EXT4和XFS选项， 默认为EXT4。 参数适用于数据盘和Linux， 且在IsZoning为1时生效 */
  FileSystem?: string;
  /** 是否安装安全Agent，取值：1(安装) 0(不安装)，默认取值0 */
  NeedSecurityAgent?: number;
  /** 是否安装监控Agent，取值：1(安装) 0(不安装)，默认取值0 */
  NeedMonitorAgent?: number;
  /** 是否安装EMR Agent，取值：1(安装) 0(不安装)，默认取值0 */
  NeedEMRAgent?: number;
  /** 是否安装EMR软件包，取值：1(安装) 0(不安装)，默认取值0 */
  NeedEMRSoftware?: number;
  /** 是否保留安全组配置，取值：1(保留) 0(不保留)，默认取值0 */
  ReserveSgConfig?: number;
  /** /data分区大小，可不填。除root、swap、usr/local的剩余空间会自动分配到data分区 */
  SysDataSpace?: number;
}

declare interface ReloadDeviceOsResponse {
  /** 黑石异步任务ID */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RepairTaskControlRequest {
  /** 维修任务ID */
  TaskId: string;
  /** 操作 */
  Operate: string;
  /** 需要重新维修操作的备注信息，可提供返场维修原因，以便驻场快速针对问题定位解决。 */
  OperateRemark?: string;
}

declare interface RepairTaskControlResponse {
  /** 出参TaskId是黑石异步任务ID，不同于入参TaskId字段。此字段可作为DescriptionOperationResult查询异步任务状态接口的入参，查询异步任务执行结果。 */
  TaskId: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ResetDevicePasswordRequest {
  /** 需要重置密码的服务器ID列表 */
  InstanceIds: string[];
  /** 新密码 */
  Password: string;
}

declare interface ResetDevicePasswordResponse {
  /** 黑石异步任务ID */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ReturnDevicesRequest {
  /** 需要退还的物理机ID列表 */
  InstanceIds: string[];
}

declare interface ReturnDevicesResponse {
  /** 黑石异步任务ID */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RunUserCmdRequest {
  /** 自定义脚本ID */
  CmdId: string;
  /** 执行脚本机器的用户名 */
  UserName: string;
  /** 执行脚本机器的用户名的密码 */
  Password: string;
  /** 执行脚本的服务器实例 */
  InstanceIds: string[];
  /** 执行脚本的参数，必须经过base64编码 */
  CmdParam?: string;
}

declare interface RunUserCmdResponse {
  /** 运行成功的任务信息列表 */
  SuccessTaskInfoSet?: SuccessTaskInfo[];
  /** 运行失败的任务信息列表 */
  FailedTaskInfoSet?: FailedTaskInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SetOutBandVpnAuthPasswordRequest {
  /** 设置的Vpn认证密码 */
  Password: string;
  /** 操作字段，取值为：Create（创建）或Update（修改） */
  Operate: string;
}

declare interface SetOutBandVpnAuthPasswordResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ShutdownDevicesRequest {
  /** 需要关闭的设备ID列表 */
  InstanceIds: string[];
}

declare interface ShutdownDevicesResponse {
  /** 异步任务ID */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StartDevicesRequest {
  /** 需要开机的设备ID列表 */
  InstanceIds: string[];
}

declare interface StartDevicesResponse {
  /** 异步任务ID */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UnbindPsaTagRequest {
  /** 预授权规则ID */
  PsaId: string;
  /** 需要解绑的标签key */
  TagKey: string;
  /** 需要解绑的标签value */
  TagValue: string;
}

declare interface UnbindPsaTagResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Bm 黑石物理服务器1.0} */
declare interface Bm {
  (): Versions;
  /** 服务器绑定CAM角色 {@link AttachCamRoleRequest} {@link AttachCamRoleResponse} */
  AttachCamRole(data: AttachCamRoleRequest, config?: AxiosRequestConfig): AxiosPromise<AttachCamRoleResponse>;
  /** 为预授权规则绑定标签 {@link BindPsaTagRequest} {@link BindPsaTagResponse} */
  BindPsaTag(data: BindPsaTagRequest, config?: AxiosRequestConfig): AxiosPromise<BindPsaTagResponse>;
  /** 购买物理机 {@link BuyDevicesRequest} {@link BuyDevicesResponse} */
  BuyDevices(data: BuyDevicesRequest, config?: AxiosRequestConfig): AxiosPromise<BuyDevicesResponse>;
  /** 创建自定义镜像 {@link CreateCustomImageRequest} {@link CreateCustomImageResponse} */
  CreateCustomImage(data: CreateCustomImageRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCustomImageResponse>;
  /** 创建预授权规则 {@link CreatePsaRegulationRequest} {@link CreatePsaRegulationResponse} */
  CreatePsaRegulation(data: CreatePsaRegulationRequest, config?: AxiosRequestConfig): AxiosPromise<CreatePsaRegulationResponse>;
  /** 创建黑石竞价实例 {@link CreateSpotDeviceRequest} {@link CreateSpotDeviceResponse} */
  CreateSpotDevice(data: CreateSpotDeviceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSpotDeviceResponse>;
  /** 创建自定义脚本 {@link CreateUserCmdRequest} {@link CreateUserCmdResponse} */
  CreateUserCmd(data: CreateUserCmdRequest, config?: AxiosRequestConfig): AxiosPromise<CreateUserCmdResponse>;
  /** 删除自定义镜像 {@link DeleteCustomImagesRequest} {@link DeleteCustomImagesResponse} */
  DeleteCustomImages(data: DeleteCustomImagesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCustomImagesResponse>;
  /** 删除预授权规则 {@link DeletePsaRegulationRequest} {@link DeletePsaRegulationResponse} */
  DeletePsaRegulation(data: DeletePsaRegulationRequest, config?: AxiosRequestConfig): AxiosPromise<DeletePsaRegulationResponse>;
  /** 删除自定义脚本 {@link DeleteUserCmdsRequest} {@link DeleteUserCmdsResponse} */
  DeleteUserCmds(data: DeleteUserCmdsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteUserCmdsResponse>;
  /** 查询自定义镜像制作进度 {@link DescribeCustomImageProcessRequest} {@link DescribeCustomImageProcessResponse} */
  DescribeCustomImageProcess(data: DescribeCustomImageProcessRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCustomImageProcessResponse>;
  /** 查看自定义镜像列表 {@link DescribeCustomImagesRequest} {@link DescribeCustomImagesResponse} */
  DescribeCustomImages(data: DescribeCustomImagesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCustomImagesResponse>;
  /** 查询设备型号 {@link DescribeDeviceClassRequest} {@link DescribeDeviceClassResponse} */
  DescribeDeviceClass(data?: DescribeDeviceClassRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDeviceClassResponse>;
  /** 查询机型RAID方式以及系统盘大小 {@link DescribeDeviceClassPartitionRequest} {@link DescribeDeviceClassPartitionResponse} */
  DescribeDeviceClassPartition(data?: DescribeDeviceClassPartitionRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDeviceClassPartitionResponse>;
  /** 查询设备硬件配置信息 {@link DescribeDeviceHardwareInfoRequest} {@link DescribeDeviceHardwareInfoResponse} */
  DescribeDeviceHardwareInfo(data: DescribeDeviceHardwareInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDeviceHardwareInfoResponse>;
  /** 查询设备库存 {@link DescribeDeviceInventoryRequest} {@link DescribeDeviceInventoryResponse} */
  DescribeDeviceInventory(data: DescribeDeviceInventoryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDeviceInventoryResponse>;
  /** 查询设备操作日志 {@link DescribeDeviceOperationLogRequest} {@link DescribeDeviceOperationLogResponse} */
  DescribeDeviceOperationLog(data: DescribeDeviceOperationLogRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDeviceOperationLogResponse>;
  /** 获取物理机的分区格式 {@link DescribeDevicePartitionRequest} {@link DescribeDevicePartitionResponse} */
  DescribeDevicePartition(data: DescribeDevicePartitionRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDevicePartitionResponse>;
  /** 查询设备位置信息 {@link DescribeDevicePositionRequest} {@link DescribeDevicePositionResponse} */
  DescribeDevicePosition(data?: DescribeDevicePositionRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDevicePositionResponse>;
  /** 查询服务器价格信息 {@link DescribeDevicePriceInfoRequest} {@link DescribeDevicePriceInfoResponse} */
  DescribeDevicePriceInfo(data: DescribeDevicePriceInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDevicePriceInfoResponse>;
  /** 查询物理机信息 {@link DescribeDevicesRequest} {@link DescribeDevicesResponse} */
  DescribeDevices(data: DescribeDevicesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDevicesResponse>;
  /** 查询自定义机型部件信息 {@link DescribeHardwareSpecificationRequest} {@link DescribeHardwareSpecificationResponse} */
  DescribeHardwareSpecification(data?: DescribeHardwareSpecificationRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeHardwareSpecificationResponse>;
  /** 查询托管设备带外信息 {@link DescribeHostedDeviceOutBandInfoRequest} {@link DescribeHostedDeviceOutBandInfoResponse} */
  DescribeHostedDeviceOutBandInfo(data: DescribeHostedDeviceOutBandInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeHostedDeviceOutBandInfoResponse>;
  /** 查询异步任务状态 {@link DescribeOperationResultRequest} {@link DescribeOperationResultResponse} */
  DescribeOperationResult(data: DescribeOperationResultRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOperationResultResponse>;
  /** 查询操作系统信息 {@link DescribeOsInfoRequest} {@link DescribeOsInfoResponse} */
  DescribeOsInfo(data?: DescribeOsInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOsInfoResponse>;
  /** 获取预授权规则列表 {@link DescribePsaRegulationsRequest} {@link DescribePsaRegulationsResponse} */
  DescribePsaRegulations(data: DescribePsaRegulationsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePsaRegulationsResponse>;
  /** 查询地域以及可用区 {@link DescribeRegionsRequest} {@link DescribeRegionsResponse} */
  DescribeRegions(data?: DescribeRegionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRegionsResponse>;
  /** 维修任务配置获取 {@link DescribeRepairTaskConstantRequest} {@link DescribeRepairTaskConstantResponse} */
  DescribeRepairTaskConstant(data?: DescribeRepairTaskConstantRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRepairTaskConstantResponse>;
  /** 维修任务信息获取 {@link DescribeTaskInfoRequest} {@link DescribeTaskInfoResponse} */
  DescribeTaskInfo(data: DescribeTaskInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTaskInfoResponse>;
  /** 维修任务操作日志获取 {@link DescribeTaskOperationLogRequest} {@link DescribeTaskOperationLogResponse} */
  DescribeTaskOperationLog(data: DescribeTaskOperationLogRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTaskOperationLogResponse>;
  /** 获取自定义脚本任务详细信息 {@link DescribeUserCmdTaskInfoRequest} {@link DescribeUserCmdTaskInfoResponse} */
  DescribeUserCmdTaskInfo(data: DescribeUserCmdTaskInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUserCmdTaskInfoResponse>;
  /** 获取自定义脚本任务列表 {@link DescribeUserCmdTasksRequest} {@link DescribeUserCmdTasksResponse} */
  DescribeUserCmdTasks(data: DescribeUserCmdTasksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUserCmdTasksResponse>;
  /** 获取自定义脚本信息列表 {@link DescribeUserCmdsRequest} {@link DescribeUserCmdsResponse} */
  DescribeUserCmds(data: DescribeUserCmdsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUserCmdsResponse>;
  /** 服务器解绑CAM角色 {@link DetachCamRoleRequest} {@link DetachCamRoleResponse} */
  DetachCamRole(data: DetachCamRoleRequest, config?: AxiosRequestConfig): AxiosPromise<DetachCamRoleResponse>;
  /** 修改自定义镜像属性 {@link ModifyCustomImageAttributeRequest} {@link ModifyCustomImageAttributeResponse} */
  ModifyCustomImageAttribute(data: ModifyCustomImageAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCustomImageAttributeResponse>;
  /** 修改服务器名称 {@link ModifyDeviceAliasesRequest} {@link ModifyDeviceAliasesResponse} */
  ModifyDeviceAliases(data: ModifyDeviceAliasesRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDeviceAliasesResponse>;
  /** 修改物理机服务器自动续费标志 {@link ModifyDeviceAutoRenewFlagRequest} {@link ModifyDeviceAutoRenewFlagResponse} */
  ModifyDeviceAutoRenewFlag(data: ModifyDeviceAutoRenewFlagRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDeviceAutoRenewFlagResponse>;
  /** 修改物理机内网IP（不重装系统） {@link ModifyLanIpRequest} {@link ModifyLanIpResponse} */
  ModifyLanIp(data: ModifyLanIpRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyLanIpResponse>;
  /** 将设备从预付费转换为后付费 {@link ModifyPayModePre2PostRequest} {@link ModifyPayModePre2PostResponse} */
  ModifyPayModePre2Post(data: ModifyPayModePre2PostRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyPayModePre2PostResponse>;
  /** 修改预授权规则 {@link ModifyPsaRegulationRequest} {@link ModifyPsaRegulationResponse} */
  ModifyPsaRegulation(data: ModifyPsaRegulationRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyPsaRegulationResponse>;
  /** 修改自定义脚本 {@link ModifyUserCmdRequest} {@link ModifyUserCmdResponse} */
  ModifyUserCmd(data: ModifyUserCmdRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyUserCmdResponse>;
  /** 退还服务器 {@link OfflineDevicesRequest} {@link OfflineDevicesResponse} */
  OfflineDevices(data: OfflineDevicesRequest, config?: AxiosRequestConfig): AxiosPromise<OfflineDevicesResponse>;
  /** 重启机器 {@link RebootDevicesRequest} {@link RebootDevicesResponse} */
  RebootDevices(data: RebootDevicesRequest, config?: AxiosRequestConfig): AxiosPromise<RebootDevicesResponse>;
  /** 恢复物理机 {@link RecoverDevicesRequest} {@link RecoverDevicesResponse} */
  RecoverDevices(data: RecoverDevicesRequest, config?: AxiosRequestConfig): AxiosPromise<RecoverDevicesResponse>;
  /** 重装操作系统 {@link ReloadDeviceOsRequest} {@link ReloadDeviceOsResponse} */
  ReloadDeviceOs(data: ReloadDeviceOsRequest, config?: AxiosRequestConfig): AxiosPromise<ReloadDeviceOsResponse>;
  /** 维修任务管理 {@link RepairTaskControlRequest} {@link RepairTaskControlResponse} */
  RepairTaskControl(data: RepairTaskControlRequest, config?: AxiosRequestConfig): AxiosPromise<RepairTaskControlResponse>;
  /** 重置密码 {@link ResetDevicePasswordRequest} {@link ResetDevicePasswordResponse} */
  ResetDevicePassword(data: ResetDevicePasswordRequest, config?: AxiosRequestConfig): AxiosPromise<ResetDevicePasswordResponse>;
  /** 退回物理机 {@link ReturnDevicesRequest} {@link ReturnDevicesResponse} */
  ReturnDevices(data: ReturnDevicesRequest, config?: AxiosRequestConfig): AxiosPromise<ReturnDevicesResponse>;
  /** 运行自定义脚本 {@link RunUserCmdRequest} {@link RunUserCmdResponse} */
  RunUserCmd(data: RunUserCmdRequest, config?: AxiosRequestConfig): AxiosPromise<RunUserCmdResponse>;
  /** 设置带外VPN认证用户密码 {@link SetOutBandVpnAuthPasswordRequest} {@link SetOutBandVpnAuthPasswordResponse} */
  SetOutBandVpnAuthPassword(data: SetOutBandVpnAuthPasswordRequest, config?: AxiosRequestConfig): AxiosPromise<SetOutBandVpnAuthPasswordResponse>;
  /** 关闭服务器 {@link ShutdownDevicesRequest} {@link ShutdownDevicesResponse} */
  ShutdownDevices(data: ShutdownDevicesRequest, config?: AxiosRequestConfig): AxiosPromise<ShutdownDevicesResponse>;
  /** 开启服务器 {@link StartDevicesRequest} {@link StartDevicesResponse} */
  StartDevices(data: StartDevicesRequest, config?: AxiosRequestConfig): AxiosPromise<StartDevicesResponse>;
  /** 解除标签与预授权规则的绑定 {@link UnbindPsaTagRequest} {@link UnbindPsaTagResponse} */
  UnbindPsaTag(data: UnbindPsaTagRequest, config?: AxiosRequestConfig): AxiosPromise<UnbindPsaTagResponse>;
}

export declare type Versions = ["2018-04-23"];

export default Bm;
