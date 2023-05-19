/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 描述CFS文件系统版本和挂载信息 */
declare interface CFSOption {
  /** 文件系统本地挂载路径。 */
  LocalPath: string;
  /** 文件系统远程挂载ip及路径。 */
  RemotePath: string;
  /** 文件系统协议类型，默认值NFS 3.0。NFS 3.0。NFS 4.0。TURBO。 */
  Protocol?: string;
  /** 文件系统存储类型，默认值SD；其中 SD 为通用标准型标准型存储， HP为通用性能型存储， TB为turbo标准型， TP 为turbo性能型。 */
  StorageType?: string;
}

/** CFS存储选项概览信息。 */
declare interface CFSOptionOverview {
  /** 文件系统本地挂载路径。 */
  LocalPath: string;
  /** 文件系统远程挂载ip及路径。 */
  RemotePath: string;
  /** 文件系统协议类型。NFS 3.0。NFS 4.0。TURBO。 */
  Protocol: string;
  /** 文件系统存储类型，默认值SD；其中 SD 为通用标准型标准型存储， HP为通用性能型存储， TB为turbo标准型， TP 为turbo性能型。 */
  StorageType: string;
}

/** 符合条件的集群活动信息。 */
declare interface ClusterActivity {
  /** 集群ID。 */
  ClusterId: string;
  /** 集群活动ID。 */
  ActivityId: string;
  /** 集群活动类型。取值范围：CreateAndAddNodes：创建实例并添加进集群RemoveNodesFromCluster：从集群移除实例TerminateNodes：销毁实例MountStorageOption：增加挂载选项并进行挂载UmountStorageOption：删除集群挂载存储选项并解挂载 */
  ActivityType: string;
  /** 集群活动状态。取值范围：PENDING：等待运行RUNNING：运行中SUCCESSFUL：活动成功PARTIALLY_SUCCESSFUL：活动部分成功FAILED：活动失败 */
  ActivityStatus: string;
  /** 集群活动状态码。 */
  ActivityStatusCode: string | null;
  /** 集群活动结果详情。 */
  ResultDetail: string | null;
  /** 集群活动起因。 */
  Cause: string;
  /** 集群活动描述。 */
  Description: string;
  /** 集群活动相关节点活动集合。 */
  RelatedNodeActivitySet: NodeActivity[];
  /** 集群活动开始时间。 */
  StartTime: string | null;
  /** 集群活动结束时间。 */
  EndTime: string | null;
}

/** 集群概览信息。 */
declare interface ClusterOverview {
  /** 集群ID。 */
  ClusterId: string;
  /** 集群状态。取值范围：PENDING：创建中INITING：初始化中INIT_FAILED：初始化失败RUNNING：运行中TERMINATING：销毁中 */
  ClusterStatus: string;
  /** 集群名称。 */
  ClusterName: string;
  /** 集群位置信息。 */
  Placement: Placement;
  /** 集群创建时间。 */
  CreateTime: string;
  /** 集群调度器。 */
  SchedulerType: string;
  /** 计算节点数量。 */
  ComputeNodeCount: number;
  /** 计算节点概览。 */
  ComputeNodeSet: ComputeNodeOverview[];
  /** 管控节点数量。 */
  ManagerNodeCount: number;
  /** 管控节点概览。 */
  ManagerNodeSet: ManagerNodeOverview[];
  /** 登录节点概览。 */
  LoginNodeSet: LoginNodeOverview[];
  /** 登录节点数量。 */
  LoginNodeCount: number;
  /** 集群所属私有网络ID。 */
  VpcId: string;
}

/** 计算节点信息。 */
declare interface ComputeNode {
  /** 节点[计费类型](https://cloud.tencent.com/document/product/213/2180)。PREPAID：预付费，即包年包月POSTPAID_BY_HOUR：按小时后付费SPOTPAID：竞价付费默认值：POSTPAID_BY_HOUR。 */
  InstanceChargeType?: string;
  /** 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月节点的购买时长、是否设置自动续费等属性。若指定节点的付费模式为预付费则该参数必传。 */
  InstanceChargePrepaid?: InstanceChargePrepaid;
  /** 节点机型。不同实例机型指定了不同的资源规格。具体取值可通过调用接口[DescribeInstanceTypeConfigs](https://cloud.tencent.com/document/api/213/15749)来获得最新的规格表或参见[实例规格](https://cloud.tencent.com/document/product/213/11518)描述。 */
  InstanceType?: string;
  /** 节点系统盘配置信息。若不指定该参数，则按照系统默认值进行分配。 */
  SystemDisk?: SystemDisk;
  /** 节点数据盘配置信息。若不指定该参数，则默认不购买数据盘。支持购买的时候指定21块数据盘，其中最多包含1块LOCAL_BASIC数据盘或者LOCAL_SSD数据盘，最多包含20块CLOUD_BASIC数据盘、CLOUD_PREMIUM数据盘或者CLOUD_SSD数据盘。 */
  DataDisks?: DataDisk[];
  /** 公网带宽相关信息设置。若不指定该参数，则默认公网带宽为0Mbps。 */
  InternetAccessible?: InternetAccessible;
  /** 节点显示名称。不指定节点显示名称则默认显示‘未命名’。最多支持60个字符。 */
  InstanceName?: string;
}

/** 计算节点概览。 */
declare interface ComputeNodeOverview {
  /** 计算节点ID。 */
  NodeId: string | null;
}

/** 描述了数据盘的信息 */
declare interface DataDisk {
  /** 数据盘大小，单位：GB。最小调整步长为10G，不同数据盘类型取值范围不同，具体限制详见：[存储概述](https://cloud.tencent.com/document/product/213/4952)。默认值为0，表示不购买数据盘。更多限制详见产品文档。 */
  DiskSize: number | null;
  /** 数据盘类型。数据盘类型限制详见[存储概述](https://cloud.tencent.com/document/product/213/4952)。取值范围：LOCAL_NVME：本地NVME硬盘，与InstanceType强相关，不支持指定LOCAL_PRO：本地HDD硬盘，与InstanceType强相关，不支持指定CLOUD_BASIC：普通云硬盘CLOUD_PREMIUM：高性能云硬盘CLOUD_SSD：SSD云硬盘CLOUD_HSSD：增强型SSD云硬盘CLOUD_TSSD：极速型SSD云硬盘CLOUD_BSSD：通用型SSD云硬盘 */
  DiskType?: string | null;
}

/** 弹性扩容节点配置信息。 */
declare interface ExpansionNodeConfig {
  /** 扩容实例所在的位置。 */
  Placement: Placement;
  /** 节点[计费类型](https://cloud.tencent.com/document/product/213/2180)。PREPAID：预付费，即包年包月POSTPAID_BY_HOUR：按小时后付费SPOTPAID：竞价付费默认值：POSTPAID_BY_HOUR。 */
  InstanceChargeType?: string;
  /** 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月节点的购买时长、是否设置自动续费等属性。若指定节点的付费模式为预付费则该参数必传。 */
  InstanceChargePrepaid?: InstanceChargePrepaid;
  /** 节点机型。不同实例机型指定了不同的资源规格。具体取值可通过调用接口[DescribeInstanceTypeConfigs](https://cloud.tencent.com/document/api/213/15749)来获得最新的规格表或参见[实例规格](https://cloud.tencent.com/document/product/213/11518)描述。 */
  InstanceType?: string;
  /** 私有网络相关信息配置。 */
  VirtualPrivateCloud?: VirtualPrivateCloud;
}

/** 扩容节点配置信息概览。 */
declare interface ExpansionNodeConfigOverview {
  /** 节点机型。 */
  InstanceType?: string | null;
  /** 扩容实例所在的位置。 */
  Placement?: Placement | null;
  /** 节点[计费类型](https://cloud.tencent.com/document/product/213/2180)。 */
  InstanceChargeType?: string | null;
  /** 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月节点的购买时长、是否设置自动续费等属性。若指定节点的付费模式为预付费则该参数必传。 */
  InstanceChargePrepaid?: InstanceChargePrepaid | null;
  /** 私有网络相关信息配置。 */
  VirtualPrivateCloud?: VirtualPrivateCloud | null;
  /** 指定有效的[镜像](https://cloud.tencent.com/document/product/213/4940)ID，格式形如`img-xxx`。 */
  ImageId?: string | null;
  /** 公网带宽相关信息设置。 */
  InternetAccessible?: InternetAccessible | null;
  /** 节点系统盘配置信息。 */
  SystemDisk?: SystemDisk | null;
  /** 节点数据盘配置信息。 */
  DataDisks?: DataDisk[] | null;
}

/** >描述键值对过滤器，用于条件过滤查询。例如过滤ID、名称、状态等> * 若存在多个`Filter`时，`Filter`间的关系为逻辑与（`AND`）关系。> * 若同一个`Filter`存在多个`Values`，同一`Filter`下`Values`间的关系为逻辑或（`OR`）关系。 */
declare interface Filter {
  /** 需要过滤的字段。 */
  Name: string | null;
  /** 字段的过滤值。 */
  Values: string[] | null;
}

/** 描述GooseFS挂载信息 */
declare interface GooseFSOption {
  /** 文件系统本地挂载路径。 */
  LocalPath: string;
  /** 文件系统远程挂载路径。 */
  RemotePath: string;
  /** 文件系统master的ip和端口。 */
  Masters: string[];
}

/** GooseFS存储选项概览信息。 */
declare interface GooseFSOptionOverview {
  /** 文件系统本地挂载路径。 */
  LocalPath: string;
  /** 文件系统远程挂载路径。 */
  RemotePath: string;
  /** 文件系统master的ip和端口。 */
  Masters: string[];
}

/** 描述GooseFSx挂载信息 */
declare interface GooseFSxOption {
  /** 文件系统master的ip和端口列表。 */
  Masters: string[] | null;
  /** 文件系统的本地挂载路径。GooseFSx目前只支持挂载在/goosefsx/{文件系统ID}_proxy/目录下。 */
  LocalPath: string | null;
}

/** GooseFSx存储选项概览信息。 */
declare interface GooseFSxOptionOverview {
  /** 文件系统master的ip和端口列表。 */
  Masters?: string[] | null;
  /** 文件系统的本地挂载路径。GooseFSx目前只支持挂载在/goosefsx/{文件系统ID}_proxy/目录下。 */
  LocalPath?: string | null;
}

/** 描述了实例的计费模式 */
declare interface InstanceChargePrepaid {
  /** 购买实例的时长，单位：月。取值范围：1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 24, 36, 48, 60。 */
  Period: number | null;
  /** 自动续费标识。取值范围：NOTIFY_AND_AUTO_RENEW：通知过期且自动续费NOTIFY_AND_MANUAL_RENEW：通知过期不自动续费DISABLE_NOTIFY_AND_MANUAL_RENEW：不通知过期不自动续费默认取值：NOTIFY_AND_MANUAL_RENEW。若该参数指定为NOTIFY_AND_AUTO_RENEW，在账户余额充足的情况下，实例到期后将按月自动续费。 */
  RenewFlag?: string | null;
}

/** 描述了实例的公网可访问性，声明了实例的公网使用计费模式，最大带宽等 */
declare interface InternetAccessible {
  /** 网络计费类型。取值范围：BANDWIDTH_PREPAID：预付费按带宽结算TRAFFIC_POSTPAID_BY_HOUR：流量按小时后付费BANDWIDTH_POSTPAID_BY_HOUR：带宽按小时后付费BANDWIDTH_PACKAGE：带宽包用户默认取值：非带宽包用户默认与子机付费类型保持一致。 */
  InternetChargeType?: string | null;
  /** 公网出带宽上限，单位：Mbps。默认值：0Mbps。不同机型带宽上限范围不一致，具体限制详见购买网络带宽。 */
  InternetMaxBandwidthOut?: number | null;
}

/** 登录节点信息。 */
declare interface LoginNode {
  /** 节点[计费类型](https://cloud.tencent.com/document/product/213/2180)。PREPAID：预付费，即包年包月POSTPAID_BY_HOUR：按小时后付费默认值：POSTPAID_BY_HOUR。 */
  InstanceChargeType?: string;
  /** 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月节点的购买时长、是否设置自动续费等属性。若指定节点的付费模式为预付费则该参数必传。 */
  InstanceChargePrepaid?: InstanceChargePrepaid;
  /** 节点机型。不同实例机型指定了不同的资源规格。具体取值可通过调用接口[DescribeInstanceTypeConfigs](https://cloud.tencent.com/document/api/213/15749)来获得最新的规格表或参见[实例规格](https://cloud.tencent.com/document/product/213/11518)描述。 */
  InstanceType?: string;
  /** 节点系统盘配置信息。若不指定该参数，则按照系统默认值进行分配。 */
  SystemDisk?: SystemDisk;
  /** 节点数据盘配置信息。若不指定该参数，则默认不购买数据盘。支持购买的时候指定21块数据盘，其中最多包含1块LOCAL_BASIC数据盘或者LOCAL_SSD数据盘，最多包含20块CLOUD_BASIC数据盘、CLOUD_PREMIUM数据盘或者CLOUD_SSD数据盘。 */
  DataDisks?: DataDisk[];
  /** 公网带宽相关信息设置。若不指定该参数，则默认公网带宽为0Mbps。 */
  InternetAccessible?: InternetAccessible;
  /** 节点显示名称。不指定节点显示名称则默认显示‘未命名’。最多支持60个字符。 */
  InstanceName?: string;
}

/** 登录节点概览。 */
declare interface LoginNodeOverview {
  /** 登录节点ID。 */
  NodeId: string;
}

/** 描述了实例登录相关配置与信息。 */
declare interface LoginSettings {
  /** 实例登录密码。不同操作系统类型密码复杂度限制不一样，具体如下：Linux实例密码必须8到30位，至少包括两项[a-z]，[A-Z]、[0-9] 和 [( ) \` ~ ! @ # $ % ^ & * - + = | { } [ ] : ; ' , . ? / ]中的特殊符号。Windows实例密码必须12到30位，至少包括三项[a-z]，[A-Z]，[0-9] 和 [( ) \` ~ ! @ # $ % ^ & * - + = | { } [ ] : ; ' , . ? /]中的特殊符号。若不指定该参数，则由系统随机生成密码，并通过站内信方式通知到用户。 */
  Password?: string;
}

/** 管控节点信息 */
declare interface ManagerNode {
  /** 节点[计费类型](https://cloud.tencent.com/document/product/213/2180)。PREPAID：预付费，即包年包月POSTPAID_BY_HOUR：按小时后付费默认值：POSTPAID_BY_HOUR。 */
  InstanceChargeType?: string;
  /** 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月节点的购买时长、是否设置自动续费等属性。若指定节点的付费模式为预付费则该参数必传。 */
  InstanceChargePrepaid?: InstanceChargePrepaid;
  /** 节点机型。不同实例机型指定了不同的资源规格。对于付费模式为PREPAID或POSTPAID\_BY\_HOUR的实例创建，具体取值可通过调用接口[DescribeInstanceTypeConfigs](https://cloud.tencent.com/document/api/213/15749)来获得最新的规格表或参见[实例规格](https://cloud.tencent.com/document/product/213/11518)描述。 */
  InstanceType?: string;
  /** 节点系统盘配置信息。若不指定该参数，则按照系统默认值进行分配。 */
  SystemDisk?: SystemDisk;
  /** 节点数据盘配置信息。若不指定该参数，则默认不购买数据盘。支持购买的时候指定21块数据盘，其中最多包含1块LOCAL_BASIC数据盘或者LOCAL_SSD数据盘，最多包含20块CLOUD_BASIC数据盘、CLOUD_PREMIUM数据盘或者CLOUD_SSD数据盘。 */
  DataDisks?: DataDisk[];
  /** 公网带宽相关信息设置。若不指定该参数，则默认公网带宽为0Mbps。 */
  InternetAccessible?: InternetAccessible;
  /** 节点显示名称。不指定节点显示名称则默认显示‘未命名’。购买多个节点，如果指定模式串`{R:x}`，表示生成数字[`[x, x+n-1]`，其中`n`表示购买节点的数量，例如`server_{R:3}`，购买1个时，节点显示名称为`server_3`；购买2个时，节点显示名称分别为`server_3`，`server_4`。支持指定多个模式串`{R:x}`。购买多个节点，如果不指定模式串，则在节点显示名称添加后缀`1、2...n`，其中`n`表示购买节点的数量，例如`server_`，购买2个时，节点显示名称分别为`server_1`，`server_2`。最多支持60个字符（包含模式串）。 */
  InstanceName?: string;
}

/** 管控节点概览。 */
declare interface ManagerNodeOverview {
  /** 管控节点ID。 */
  NodeId: string | null;
}

/** 节点活动信息。 */
declare interface NodeActivity {
  /** 节点活动所在的实例ID。 */
  NodeInstanceId: string | null;
  /** 节点活动状态。取值范围：RUNNING：运行中SUCCESSFUL：活动成功FAILED：活动失败 */
  NodeActivityStatus: string;
  /** 节点活动状态码。 */
  NodeActivityStatusCode: string | null;
  /** 节点活动状态原因。 */
  NodeActivityStatusReason: string | null;
}

/** 节点概览信息。 */
declare interface NodeOverview {
  /** 节点实例ID。 */
  InstanceId?: string | null;
  /** 节点所在可用区信息。 */
  Zone?: string | null;
  /** 节点状态。SUBMITTED：已完成提交。CREATING：创建中。CREATED：完成创建。INITING：初始化中。INIT_FAILED：初始化失败。RUNNING：运行中。DELETING：销毁中。 */
  NodeState?: string | null;
  /** 镜像ID。 */
  ImageId?: string | null;
  /** 节点所属队列名称。 */
  QueueName?: string | null;
  /** 节点角色。Manager：管控节点。Compute：计算节点。Login：登录节点。ManagerBackup：备用管控节点。 */
  NodeRole?: string | null;
  /** 节点类型。STATIC：静态节点。DYNAMIC：弹性节点。 */
  NodeType?: string | null;
}

/** 描述节点执行脚本信息。 */
declare interface NodeScript {
  /** 节点执行脚本获取地址。目前仅支持cos地址。地址最大长度：255。 */
  ScriptPath: string | null;
  /** 脚本执行超时时间（包含拉取脚本的时间）。单位秒，默认值：30。取值范围：10～1200。 */
  Timeout?: number | null;
}

/** 描述了实例的抽象位置 */
declare interface Placement {
  /** 实例所属的可用区名称。该参数可以通过调用 [DescribeZones](https://cloud.tencent.com/document/product/213/15707) 的返回值中的Zone字段来获取。 */
  Zone: string | null;
}

/** 扩容队列配置。 */
declare interface QueueConfig {
  /** 队列名称。 */
  QueueName: string;
  /** 队列中弹性节点数量最小值。默认值：0。取值范围：0～200。 */
  MinSize?: number;
  /** 队列中弹性节点数量最大值。默认值：10。取值范围：0～200。 */
  MaxSize?: number;
  /** 是否开启自动扩容。 */
  EnableAutoExpansion?: boolean;
  /** 是否开启自动缩容。 */
  EnableAutoShrink?: boolean;
  /** 指定有效的[镜像](https://cloud.tencent.com/document/product/213/4940)ID，格式形如`img-xxx`。目前仅支持公有镜和特定自定义镜像。 */
  ImageId?: string;
  /** 节点系统盘配置信息。若不指定该参数，则按照系统默认值进行分配。 */
  SystemDisk?: SystemDisk;
  /** 节点数据盘配置信息。若不指定该参数，则默认不购买数据盘。支持购买的时候指定21块数据盘，其中最多包含1块LOCAL_BASIC数据盘或者LOCAL_SSD数据盘，最多包含20块CLOUD_BASIC数据盘、CLOUD_PREMIUM数据盘或者CLOUD_SSD数据盘。 */
  DataDisks?: DataDisk[];
  /** 公网带宽相关信息设置。若不指定该参数，则默认公网带宽为0Mbps。 */
  InternetAccessible?: InternetAccessible;
  /** 扩容节点配置信息。 */
  ExpansionNodeConfigs?: ExpansionNodeConfig[];
  /** 队列中期望的空闲节点数量（包含弹性节点和静态节点）。默认值：0。队列中，处于空闲状态的节点小于此值，集群会扩容弹性节点；处于空闲状态的节点大于此值，集群会缩容弹性节点。 */
  DesiredIdleNodeCapacity?: number | null;
  /** 扩容比例。默认值：100。取值范围：1～100。如果扩容比例为50，那么每轮只会扩容当前作业负载所需的50%数量的节点。 */
  ScaleOutRatio?: number | null;
  /** 比例扩容阈值。默认值：0。取值范围：0～200。当作业负载需要扩容节点数量大于此值，当前扩容轮次按照ScaleOutRatio配置的的比例进行扩容。当作业负载需要扩容节点数量小于此值，当前扩容轮次扩容当前作业负载所需数量的节点。此参数配合ScaleOutRatio参数进行使用，用于比例扩容场景下，在作业负载所需节点数量较小时，加快收敛速度。 */
  ScaleOutNodeThreshold?: number | null;
}

/** 扩容队列配置概览。 */
declare interface QueueConfigOverview {
  /** 队列名称。 */
  QueueName?: string;
  /** 队列中弹性节点数量最小值。取值范围0～200。 */
  MinSize?: number;
  /** 队列中弹性节点数量最大值。取值范围0～200。 */
  MaxSize?: number;
  /** 是否开启自动扩容。 */
  EnableAutoExpansion?: boolean;
  /** 是否开启自动缩容。 */
  EnableAutoShrink?: boolean;
  /** 扩容节点配置信息。 */
  ExpansionNodeConfigs?: ExpansionNodeConfigOverview[];
  /** 队列中期望的空闲节点数量（包含弹性节点和静态节点）。默认值：0。队列中，处于空闲状态的节点小于此值，集群会扩容弹性节点；处于空闲状态的节点大于此值，集群会缩容弹性节点。 */
  DesiredIdleNodeCapacity?: number | null;
  /** 扩容比例。默认值：100。取值范围：1～100。如果扩容比例为50，那么每轮只会扩容当前作业负载所需的50%数量的节点。 */
  ScaleOutRatio?: number | null;
  /** 比例扩容阈值。默认值：0。取值范围：0～200。当作业负载需要扩容节点数量大于此值，当前扩容轮次按照ScaleOutRatio配置的的比例进行扩容。当作业负载需要扩容节点数量小于此值，当前扩容轮次扩容当前作业负载所需数量的节点。此参数配合ScaleOutRatio参数进行使用，用于比例扩容场景下，在作业负载所需节点数量较小时，加快收敛速度。 */
  ScaleOutNodeThreshold?: number | null;
}

/** 队列信息概览。 */
declare interface QueueOverview {
  /** 队列名称。 */
  QueueName?: string | null;
}

/** 描述集群文件系统选项 */
declare interface StorageOption {
  /** 集群挂载CFS文件系统选项。 */
  CFSOptions?: CFSOption[];
  /** 集群挂载GooseFS文件系统选项。 */
  GooseFSOptions?: GooseFSOption[];
  /** 集群挂载GooseFSx文件系统选项。 */
  GooseFSxOptions?: GooseFSxOption[] | null;
}

/** 集群存储选项概览信息。 */
declare interface StorageOptionOverview {
  /** CFS存储选项概览信息列表。 */
  CFSOptions: CFSOptionOverview[];
  /** GooseFS存储选项概览信息列表。 */
  GooseFSOptions: GooseFSOptionOverview[];
  /** GooseFSx存储选项概览信息列表。 */
  GooseFSxOptions?: GooseFSxOptionOverview[];
}

/** 描述了操作系统所在块设备即系统盘的信息 */
declare interface SystemDisk {
  /** 系统盘类型。系统盘类型限制详见存储概述。取值范围：CLOUD_BASIC：普通云硬盘CLOUD_SSD：SSD云硬盘CLOUD_PREMIUM：高性能云硬盘默认取值：当前有库存的硬盘类型。 */
  DiskType?: string | null;
  /** 系统盘大小，单位：GB。默认值为 50 */
  DiskSize?: number | null;
}

/** 标签键值对。 */
declare interface Tag {
  /** 标签键 */
  Key: string;
  /** 标签值 */
  Value: string;
}

/** 描述了VPC相关信息 */
declare interface VirtualPrivateCloud {
  /** 私有网络ID，形如`vpc-xxx`。有效的VpcId可通过登录[控制台](https://console.cloud.tencent.com/vpc/vpc?rid=1)查询；也可以调用接口 [DescribeVpcEx](/document/api/215/1372) ，从接口返回中的`unVpcId`字段获取。若在创建子机时VpcId与SubnetId同时传入`DEFAULT`，则强制使用默认vpc网络。 */
  VpcId: string | null;
  /** 私有网络子网ID，形如`subnet-xxx`。有效的私有网络子网ID可通过登录[控制台](https://console.cloud.tencent.com/vpc/subnet?rid=1)查询；也可以调用接口 [DescribeSubnets](/document/api/215/15784) ，从接口返回中的`unSubnetId`字段获取。若在创建子机时SubnetId与VpcId同时传入`DEFAULT`，则强制使用默认vpc网络。 */
  SubnetId: string | null;
}

declare interface AddClusterStorageOptionRequest {
  /** 集群ID。 */
  ClusterId: string;
  /** 集群存储选项。 */
  StorageOption: StorageOption;
}

declare interface AddClusterStorageOptionResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AddNodesRequest {
  /** 集群中实例所在的位置。 */
  Placement: Placement;
  /** 集群ID。 */
  ClusterId: string;
  /** 私有网络相关信息配置。 */
  VirtualPrivateCloud: VirtualPrivateCloud;
  /** 添加节点数量。 */
  Count: number;
  /** 指定有效的[镜像](https://cloud.tencent.com/document/product/213/4940)ID，格式形如`img-xxx`。目前仅支持公有镜像和特定自定义镜像。 */
  ImageId?: string;
  /** 节点[计费类型](https://cloud.tencent.com/document/product/213/2180)。PREPAID：预付费，即包年包月POSTPAID_BY_HOUR：按小时后付费SPOTPAID：竞价付费默认值：POSTPAID_BY_HOUR。 */
  InstanceChargeType?: string;
  /** 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月节点的购买时长、是否设置自动续费等属性。若指定节点的付费模式为预付费则该参数必传。 */
  InstanceChargePrepaid?: InstanceChargePrepaid;
  /** 节点机型。不同实例机型指定了不同的资源规格。具体取值可通过调用接口[DescribeInstanceTypeConfigs](https://cloud.tencent.com/document/api/213/15749)来获得最新的规格表或参见[实例规格](https://cloud.tencent.com/document/product/213/11518)描述。 */
  InstanceType?: string;
  /** 节点系统盘配置信息。若不指定该参数，则按照系统默认值进行分配。 */
  SystemDisk?: SystemDisk;
  /** 节点数据盘配置信息。若不指定该参数，则默认不购买数据盘。支持购买的时候指定21块数据盘，其中最多包含1块LOCAL_BASIC数据盘或者LOCAL_SSD数据盘，最多包含20块CLOUD_BASIC数据盘、CLOUD_PREMIUM数据盘或者CLOUD_SSD数据盘。 */
  DataDisks?: DataDisk[];
  /** 公网带宽相关信息设置。若不指定该参数，则默认公网带宽为0Mbps。 */
  InternetAccessible?: InternetAccessible;
  /** 节点显示名称。不指定节点显示名称则默认显示‘未命名’。最多支持60个字符。 */
  InstanceName?: string;
  /** 集群登录设置。 */
  LoginSettings?: LoginSettings;
  /** 集群中实例所属安全组。该参数可以通过调用 [DescribeSecurityGroups](https://cloud.tencent.com/document/api/215/15808) 的返回值中的sgId字段来获取。若不指定该参数，则绑定默认安全组。 */
  SecurityGroupIds?: string[];
  /** 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。 */
  ClientToken?: string;
  /** 队列名称。不指定则为默认队列。SLURM默认队列为：compute。SGE默认队列为：all.q。 */
  QueueName?: string;
  /** 添加节点角色。默认值：ComputeCompute：计算节点。Login：登录节点。 */
  NodeRole?: string;
  /** 是否只预检此次请求。true：发送检查请求，不会创建实例。检查项包括是否填写了必需参数，请求格式，业务限制和云服务器库存。如果检查不通过，则返回对应错误码；如果检查通过，则返回RequestId.false（默认）：发送正常请求，通过检查后直接创建实例 */
  DryRun?: boolean;
  /** 添加节点类型。默认取值：STATIC。STATIC：静态节点，不会参与弹性伸缩流程。DYNAMIC：弹性节点，会被弹性缩容的节点。管控节点和登录节点不支持此参数。 */
  NodeType?: string;
}

declare interface AddNodesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AddQueueRequest {
  /** 集群ID。 */
  ClusterId: string;
  /** 队列名称。最多支持32个字符。 */
  QueueName: string;
}

declare interface AddQueueResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateClusterRequest {
  /** 集群中实例所在的位置。 */
  Placement: Placement;
  /** 指定管理节点。 */
  ManagerNode?: ManagerNode;
  /** 指定管理节点的数量。默认取值：1。取值范围：1～2。 */
  ManagerNodeCount?: number;
  /** 指定计算节点。 */
  ComputeNode?: ComputeNode;
  /** 指定计算节点的数量。默认取值：0。 */
  ComputeNodeCount?: number;
  /** 调度器类型。默认取值：SLURM。SGE：SGE调度器。SLURM：SLURM调度器。 */
  SchedulerType?: string;
  /** 指定有效的[镜像](https://cloud.tencent.com/document/product/213/4940)ID，格式形如`img-xxx`。目前支持部分公有镜像和自定义镜像。 */
  ImageId?: string;
  /** 私有网络相关信息配置。 */
  VirtualPrivateCloud?: VirtualPrivateCloud;
  /** 集群登录设置。 */
  LoginSettings?: LoginSettings;
  /** 集群中实例所属安全组。该参数可以通过调用 [DescribeSecurityGroups](https://cloud.tencent.com/document/api/215/15808) 的返回值中的sgId字段来获取。若不指定该参数，则绑定默认安全组。 */
  SecurityGroupIds?: string[];
  /** 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。 */
  ClientToken?: string;
  /** 是否只预检此次请求。true：发送检查请求，不会创建实例。检查项包括是否填写了必需参数，请求格式，业务限制和云服务器库存。如果检查不通过，则返回对应错误码；如果检查通过，则返回RequestId.false（默认）：发送正常请求，通过检查后直接创建实例 */
  DryRun?: boolean;
  /** 域名字服务类型。默认取值：NIS。NIS：NIS域名字服务。 */
  AccountType?: string;
  /** 集群显示名称。 */
  ClusterName?: string;
  /** 集群存储选项 */
  StorageOption?: StorageOption;
  /** 指定登录节点。 */
  LoginNode?: LoginNode;
  /** 指定登录节点的数量。默认取值：0。取值范围：0～10。 */
  LoginNodeCount?: number;
  /** 创建集群时同时绑定的标签对说明。 */
  Tags?: Tag[];
  /** 弹性伸缩类型。默认值：THPC_ASTHPC_AS：集群自动扩缩容由THPC产品内部实现。AS：集群自动扩缩容由[弹性伸缩](https://cloud.tencent.com/document/product/377/3154)产品实现。 */
  AutoScalingType?: string;
  /** 节点初始化脚本信息列表。 */
  InitNodeScripts?: NodeScript[];
}

declare interface CreateClusterResponse {
  /** 集群ID。 */
  ClusterId?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteClusterRequest {
  /** 集群ID。 */
  ClusterId: string;
}

declare interface DeleteClusterResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteClusterStorageOptionRequest {
  /** 集群ID。 */
  ClusterId: string;
  /** 本地挂载路径。 */
  LocalPath: string;
}

declare interface DeleteClusterStorageOptionResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteNodesRequest {
  /** 集群ID。 */
  ClusterId: string;
  /** 节点ID。 */
  NodeIds: string[];
}

declare interface DeleteNodesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteQueueRequest {
  /** 集群ID。 */
  ClusterId: string;
  /** 队列名称。最多支持32个字符。 */
  QueueName: string;
}

declare interface DeleteQueueResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAutoScalingConfigurationRequest {
  /** 集群ID。 */
  ClusterId: string;
}

declare interface DescribeAutoScalingConfigurationResponse {
  /** 集群ID。 */
  ClusterId?: string;
  /** 任务连续等待时间，队列的任务处于连续等待的时间。单位秒。 */
  ExpansionBusyTime?: number;
  /** 节点连续空闲（未运行作业）时间，一个节点连续处于空闲状态时间。 */
  ShrinkIdleTime?: number;
  /** 扩容队列配置概览列表。 */
  QueueConfigs?: QueueConfigOverview[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClusterActivitiesRequest {
  /** 集群ID。通过该参数指定需要查询活动历史记录的集群。 */
  ClusterId: string;
  /** 偏移量，默认为0。关于`Offset`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100。关于`Limit`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。 */
  Limit?: number;
}

declare interface DescribeClusterActivitiesResponse {
  /** 集群活动历史记录列表。 */
  ClusterActivitySet?: ClusterActivity[];
  /** 集群活动历史记录数量。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClusterStorageOptionRequest {
  /** 集群ID。 */
  ClusterId: string;
}

declare interface DescribeClusterStorageOptionResponse {
  /** 集群存储选项信息概览。 */
  StorageOption?: StorageOptionOverview;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClustersRequest {
  /** 集群ID列表。通过该参数可以指定需要查询信息的集群列表。如果您不指定该参数，则返回Limit数量以内的集群信息。 */
  ClusterIds?: string[];
  /** 偏移量，默认为0。关于`Offset`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100。关于`Limit`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。 */
  Limit?: number;
}

declare interface DescribeClustersResponse {
  /** 集群概览信息列表。 */
  ClusterSet?: ClusterOverview[];
  /** 集群数量。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInitNodeScriptsRequest {
  /** 集群ID。 */
  ClusterId: string;
}

declare interface DescribeInitNodeScriptsResponse {
  /** 节点初始化脚本列表。 */
  InitNodeScriptSet?: NodeScript[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeNodesRequest {
  /** 集群ID。 */
  ClusterId: string;
  /** queue-name 按照【队列名称】进行过滤。队列名称形如：compute。类型：String必选：否node-role 按照【节点角色】进行过滤。节点角色形如：Manager。（Manager：管控节点。Compute：计算节点。Login：登录节点。ManagerBackup：备用管控节点。）类型：String必选：否node-type 按照【节点类型】进行过滤。节点类型形如：STATIC。(STATIC：静态节点。DYNAMIC：弹性节点。)类型：String必选：否每次请求的`Filters`的上限为10，`Filter.Values`的上限为5。 */
  Filters?: Filter[];
  /** 偏移量，默认为0。关于`Offset`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100。关于`Limit`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。 */
  Limit?: number;
}

declare interface DescribeNodesResponse {
  /** 节点概览信息列表。 */
  NodeSet?: NodeOverview[];
  /** 符合条件的节点数量。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeQueuesRequest {
  /** 集群ID。 */
  ClusterId: string;
  /** 偏移量，默认为0。关于`Offset`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100。关于`Limit`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。 */
  Limit?: number;
}

declare interface DescribeQueuesResponse {
  /** 队列概览信息列表。 */
  QueueSet?: QueueOverview[];
  /** 符合条件的节点数量。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyInitNodeScriptsRequest {
  /** 集群ID。 */
  ClusterId: string;
  /** 节点初始化脚本信息列表。 */
  InitNodeScripts?: NodeScript[];
}

declare interface ModifyInitNodeScriptsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SetAutoScalingConfigurationRequest {
  /** 集群ID。 */
  ClusterId: string;
  /** 任务连续等待时间，队列的任务处于连续等待的时间。单位秒。默认值120。 */
  ExpansionBusyTime?: number;
  /** 节点连续空闲（未运行作业）时间，一个节点连续处于空闲状态时间。单位秒。默认值300。 */
  ShrinkIdleTime?: number;
  /** 扩容队列配置列表。 */
  QueueConfigs?: QueueConfig[];
  /** 是否只预检此次请求。true：发送检查请求，不会绑定弹性伸缩组。检查项包括是否填写了必需参数，请求格式，业务限制。如果检查不通过，则返回对应错误码；如果检查通过，则返回RequestId。false（默认）：发送正常请求，通过检查后直接绑定弹性伸缩组。 */
  DryRun?: boolean;
}

declare interface SetAutoScalingConfigurationResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare namespace V20220401 {
  type VersionHeader = { headers: { 'X-TC-Version': '2022-04-01' } }

  /** 描述CFS文件系统版本和挂载信息 */
  interface CFSOption {
    /** 文件系统本地挂载路径。 */
    LocalPath: string;
    /** 文件系统远程挂载ip及路径。 */
    RemotePath: string;
    /** 文件系统协议类型，默认值NFS 3.0。NFS 3.0。NFS 4.0。TURBO。 */
    Protocol?: string;
    /** 文件系统存储类型，默认值SD；其中 SD 为通用标准型标准型存储， HP为通用性能型存储， TB为turbo标准型， TP 为turbo性能型。 */
    StorageType?: string;
  }

  /** CFS存储选项概览信息。 */
  interface CFSOptionOverview {
    /** 文件系统本地挂载路径。 */
    LocalPath: string;
    /** 文件系统远程挂载ip及路径。 */
    RemotePath: string;
    /** 文件系统协议类型。NFS 3.0。NFS 4.0。TURBO。 */
    Protocol: string;
    /** 文件系统存储类型，默认值SD；其中 SD 为通用标准型标准型存储， HP为通用性能型存储， TB为turbo标准型， TP 为turbo性能型。 */
    StorageType: string;
  }

  /** 符合条件的集群活动信息。 */
  interface ClusterActivity {
    /** 集群ID。 */
    ClusterId: string;
    /** 集群活动ID。 */
    ActivityId: string;
    /** 集群活动类型。取值范围：CreateAndAddNodes：创建实例并添加进集群RemoveNodesFromCluster：从集群移除实例TerminateNodes：销毁实例MountStorageOption：增加挂载选项并进行挂载UmountStorageOption：删除集群挂载存储选项并解挂载 */
    ActivityType: string;
    /** 集群活动状态。取值范围：PENDING：等待运行RUNNING：运行中SUCCESSFUL：活动成功PARTIALLY_SUCCESSFUL：活动部分成功FAILED：活动失败 */
    ActivityStatus: string;
    /** 集群活动状态码。 */
    ActivityStatusCode: string | null;
    /** 集群活动结果详情。 */
    ResultDetail: string | null;
    /** 集群活动起因。 */
    Cause: string;
    /** 集群活动描述。 */
    Description: string;
    /** 集群活动相关节点活动集合。 */
    RelatedNodeActivitySet: NodeActivity[];
    /** 集群活动开始时间。 */
    StartTime: string | null;
    /** 集群活动结束时间。 */
    EndTime: string | null;
  }

  /** 集群概览信息。 */
  interface ClusterOverview {
    /** 集群ID。 */
    ClusterId: string;
    /** 集群状态。取值范围：PENDING：创建中INITING：初始化中INIT_FAILED：初始化失败RUNNING：运行中TERMINATING：销毁中 */
    ClusterStatus: string;
    /** 集群名称。 */
    ClusterName: string;
    /** 集群位置信息。 */
    Placement: Placement;
    /** 集群创建时间。 */
    CreateTime: string;
    /** 集群调度器。 */
    SchedulerType: string;
    /** 计算节点数量。 */
    ComputeNodeCount: number;
    /** 计算节点概览。 */
    ComputeNodeSet: ComputeNodeOverview[];
    /** 管控节点数量。 */
    ManagerNodeCount: number;
    /** 管控节点概览。 */
    ManagerNodeSet: ManagerNodeOverview[];
    /** 登录节点概览。 */
    LoginNodeSet: LoginNodeOverview[];
    /** 登录节点数量。 */
    LoginNodeCount: number;
    /** 集群所属私有网络ID。 */
    VpcId: string;
  }

  /** 计算节点信息。 */
  interface ComputeNode {
    /** 节点[计费类型](https://cloud.tencent.com/document/product/213/2180)。PREPAID：预付费，即包年包月POSTPAID_BY_HOUR：按小时后付费SPOTPAID：竞价付费默认值：POSTPAID_BY_HOUR。 */
    InstanceChargeType?: string;
    /** 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月节点的购买时长、是否设置自动续费等属性。若指定节点的付费模式为预付费则该参数必传。 */
    InstanceChargePrepaid?: InstanceChargePrepaid;
    /** 节点机型。不同实例机型指定了不同的资源规格。具体取值可通过调用接口[DescribeInstanceTypeConfigs](https://cloud.tencent.com/document/api/213/15749)来获得最新的规格表或参见[实例规格](https://cloud.tencent.com/document/product/213/11518)描述。 */
    InstanceType?: string;
    /** 节点系统盘配置信息。若不指定该参数，则按照系统默认值进行分配。 */
    SystemDisk?: SystemDisk;
    /** 节点数据盘配置信息。若不指定该参数，则默认不购买数据盘。支持购买的时候指定21块数据盘，其中最多包含1块LOCAL_BASIC数据盘或者LOCAL_SSD数据盘，最多包含20块CLOUD_BASIC数据盘、CLOUD_PREMIUM数据盘或者CLOUD_SSD数据盘。 */
    DataDisks?: DataDisk[];
    /** 公网带宽相关信息设置。若不指定该参数，则默认公网带宽为0Mbps。 */
    InternetAccessible?: InternetAccessible;
    /** 节点显示名称。不指定节点显示名称则默认显示‘未命名’。最多支持60个字符。 */
    InstanceName?: string;
  }

  /** 计算节点概览。 */
  interface ComputeNodeOverview {
    /** 计算节点ID。 */
    NodeId: string | null;
  }

  /** 描述了数据盘的信息 */
  interface DataDisk {
    /** 数据盘大小，单位：GB。最小调整步长为10G，不同数据盘类型取值范围不同，具体限制详见：[存储概述](https://cloud.tencent.com/document/product/213/4952)。默认值为0，表示不购买数据盘。更多限制详见产品文档。 */
    DiskSize: number;
    /** 数据盘类型。数据盘类型限制详见[存储概述](https://cloud.tencent.com/document/product/213/4952)。取值范围：LOCAL_BASIC：本地硬盘LOCAL_SSD：本地SSD硬盘LOCAL_NVME：本地NVME硬盘，与InstanceType强相关，不支持指定LOCAL_PRO：本地HDD硬盘，与InstanceType强相关，不支持指定CLOUD_BASIC：普通云硬盘CLOUD_PREMIUM：高性能云硬盘CLOUD_SSD：SSD云硬盘CLOUD_HSSD：增强型SSD云硬盘CLOUD_TSSD：极速型SSD云硬盘默认取值：LOCAL_BASIC。 */
    DiskType?: string;
  }

  /** 弹性扩容节点配置信息。 */
  interface ExpansionNodeConfig {
    /** 扩容实例所在的位置。 */
    Placement: Placement;
    /** 节点[计费类型](https://cloud.tencent.com/document/product/213/2180)。PREPAID：预付费，即包年包月POSTPAID_BY_HOUR：按小时后付费SPOTPAID：竞价付费默认值：POSTPAID_BY_HOUR。 */
    InstanceChargeType?: string;
    /** 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月节点的购买时长、是否设置自动续费等属性。若指定节点的付费模式为预付费则该参数必传。 */
    InstanceChargePrepaid?: InstanceChargePrepaid;
    /** 节点机型。不同实例机型指定了不同的资源规格。具体取值可通过调用接口[DescribeInstanceTypeConfigs](https://cloud.tencent.com/document/api/213/15749)来获得最新的规格表或参见[实例规格](https://cloud.tencent.com/document/product/213/11518)描述。 */
    InstanceType?: string;
    /** 私有网络相关信息配置。 */
    VirtualPrivateCloud?: VirtualPrivateCloud;
  }

  /** 扩容节点配置信息概览。 */
  interface ExpansionNodeConfigOverview {
    /** 节点机型。 */
    InstanceType?: string | null;
    /** 扩容实例所在的位置。 */
    Placement?: Placement | null;
    /** 节点[计费类型](https://cloud.tencent.com/document/product/213/2180)。 */
    InstanceChargeType?: string | null;
    /** 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月节点的购买时长、是否设置自动续费等属性。若指定节点的付费模式为预付费则该参数必传。 */
    InstanceChargePrepaid?: InstanceChargePrepaid | null;
    /** 私有网络相关信息配置。 */
    VirtualPrivateCloud?: VirtualPrivateCloud | null;
    /** 指定有效的[镜像](https://cloud.tencent.com/document/product/213/4940)ID，格式形如`img-xxx`。 */
    ImageId?: string | null;
    /** 公网带宽相关信息设置。 */
    InternetAccessible?: InternetAccessible | null;
    /** 节点系统盘配置信息。 */
    SystemDisk?: SystemDisk | null;
    /** 节点数据盘配置信息。 */
    DataDisks?: DataDisk[] | null;
  }

  /** >描述键值对过滤器，用于条件过滤查询。例如过滤ID、名称、状态等> * 若存在多个`Filter`时，`Filter`间的关系为逻辑与（`AND`）关系。> * 若同一个`Filter`存在多个`Values`，同一`Filter`下`Values`间的关系为逻辑或（`OR`）关系。 */
  interface Filter {
    /** 需要过滤的字段。 */
    Name: string | null;
    /** 字段的过滤值。 */
    Values: string[] | null;
  }

  /** 描述GooseFS挂载信息 */
  interface GooseFSOption {
    /** 文件系统本地挂载路径。 */
    LocalPath: string;
    /** 文件系统远程挂载路径。 */
    RemotePath: string;
    /** 文件系统master的ip和端口。 */
    Masters: string[];
  }

  /** GooseFS存储选项概览信息。 */
  interface GooseFSOptionOverview {
    /** 文件系统本地挂载路径。 */
    LocalPath: string;
    /** 文件系统远程挂载路径。 */
    RemotePath: string;
    /** 文件系统master的ip和端口。 */
    Masters: string[];
  }

  /** 描述了实例的计费模式 */
  interface InstanceChargePrepaid {
    /** 购买实例的时长，单位：月。取值范围：1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 24, 36, 48, 60。 */
    Period: number;
    /** 自动续费标识。取值范围：NOTIFY_AND_AUTO_RENEW：通知过期且自动续费NOTIFY_AND_MANUAL_RENEW：通知过期不自动续费DISABLE_NOTIFY_AND_MANUAL_RENEW：不通知过期不自动续费默认取值：NOTIFY_AND_MANUAL_RENEW。若该参数指定为NOTIFY_AND_AUTO_RENEW，在账户余额充足的情况下，实例到期后将按月自动续费。 */
    RenewFlag?: string;
  }

  /** 描述了实例的公网可访问性，声明了实例的公网使用计费模式，最大带宽等 */
  interface InternetAccessible {
    /** 网络计费类型。取值范围：BANDWIDTH_PREPAID：预付费按带宽结算TRAFFIC_POSTPAID_BY_HOUR：流量按小时后付费BANDWIDTH_POSTPAID_BY_HOUR：带宽按小时后付费BANDWIDTH_PACKAGE：带宽包用户默认取值：非带宽包用户默认与子机付费类型保持一致。 */
    InternetChargeType?: string;
    /** 公网出带宽上限，单位：Mbps。默认值：0Mbps。不同机型带宽上限范围不一致，具体限制详见购买网络带宽。 */
    InternetMaxBandwidthOut?: number;
  }

  /** 登录节点信息。 */
  interface LoginNode {
    /** 节点[计费类型](https://cloud.tencent.com/document/product/213/2180)。PREPAID：预付费，即包年包月POSTPAID_BY_HOUR：按小时后付费默认值：POSTPAID_BY_HOUR。 */
    InstanceChargeType?: string;
    /** 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月节点的购买时长、是否设置自动续费等属性。若指定节点的付费模式为预付费则该参数必传。 */
    InstanceChargePrepaid?: InstanceChargePrepaid;
    /** 节点机型。不同实例机型指定了不同的资源规格。具体取值可通过调用接口[DescribeInstanceTypeConfigs](https://cloud.tencent.com/document/api/213/15749)来获得最新的规格表或参见[实例规格](https://cloud.tencent.com/document/product/213/11518)描述。 */
    InstanceType?: string;
    /** 节点系统盘配置信息。若不指定该参数，则按照系统默认值进行分配。 */
    SystemDisk?: SystemDisk[];
    /** 节点数据盘配置信息。若不指定该参数，则默认不购买数据盘。支持购买的时候指定21块数据盘，其中最多包含1块LOCAL_BASIC数据盘或者LOCAL_SSD数据盘，最多包含20块CLOUD_BASIC数据盘、CLOUD_PREMIUM数据盘或者CLOUD_SSD数据盘。 */
    DataDisks?: DataDisk[];
    /** 公网带宽相关信息设置。若不指定该参数，则默认公网带宽为0Mbps。 */
    InternetAccessible?: InternetAccessible[];
    /** 节点显示名称。不指定节点显示名称则默认显示‘未命名’。最多支持60个字符。 */
    InstanceName?: string;
  }

  /** 登录节点概览。 */
  interface LoginNodeOverview {
    /** 登录节点ID。 */
    NodeId: string;
  }

  /** 描述了实例登录相关配置与信息。 */
  interface LoginSettings {
    /** 实例登录密码。不同操作系统类型密码复杂度限制不一样，具体如下：Linux实例密码必须8到30位，至少包括两项[a-z]，[A-Z]、[0-9] 和 [( ) \` ~ ! @ # $ % ^ & * - + = | { } [ ] : ; ' , . ? / ]中的特殊符号。Windows实例密码必须12到30位，至少包括三项[a-z]，[A-Z]，[0-9] 和 [( ) \` ~ ! @ # $ % ^ & * - + = | { } [ ] : ; ' , . ? /]中的特殊符号。若不指定该参数，则由系统随机生成密码，并通过站内信方式通知到用户。 */
    Password?: string;
  }

  /** 管控节点信息 */
  interface ManagerNode {
    /** 节点[计费类型](https://cloud.tencent.com/document/product/213/2180)。PREPAID：预付费，即包年包月POSTPAID_BY_HOUR：按小时后付费默认值：POSTPAID_BY_HOUR。 */
    InstanceChargeType?: string;
    /** 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月节点的购买时长、是否设置自动续费等属性。若指定节点的付费模式为预付费则该参数必传。 */
    InstanceChargePrepaid?: InstanceChargePrepaid;
    /** 节点机型。不同实例机型指定了不同的资源规格。对于付费模式为PREPAID或POSTPAID\_BY\_HOUR的实例创建，具体取值可通过调用接口[DescribeInstanceTypeConfigs](https://cloud.tencent.com/document/api/213/15749)来获得最新的规格表或参见[实例规格](https://cloud.tencent.com/document/product/213/11518)描述。 */
    InstanceType?: string;
    /** 节点系统盘配置信息。若不指定该参数，则按照系统默认值进行分配。 */
    SystemDisk?: SystemDisk;
    /** 节点数据盘配置信息。若不指定该参数，则默认不购买数据盘。支持购买的时候指定21块数据盘，其中最多包含1块LOCAL_BASIC数据盘或者LOCAL_SSD数据盘，最多包含20块CLOUD_BASIC数据盘、CLOUD_PREMIUM数据盘或者CLOUD_SSD数据盘。 */
    DataDisks?: DataDisk[];
    /** 公网带宽相关信息设置。若不指定该参数，则默认公网带宽为0Mbps。 */
    InternetAccessible?: InternetAccessible;
    /** 节点显示名称。不指定节点显示名称则默认显示‘未命名’。购买多个节点，如果指定模式串`{R:x}`，表示生成数字[`[x, x+n-1]`，其中`n`表示购买节点的数量，例如`server_{R:3}`，购买1个时，节点显示名称为`server_3`；购买2个时，节点显示名称分别为`server_3`，`server_4`。支持指定多个模式串`{R:x}`。购买多个节点，如果不指定模式串，则在节点显示名称添加后缀`1、2...n`，其中`n`表示购买节点的数量，例如`server_`，购买2个时，节点显示名称分别为`server_1`，`server_2`。最多支持60个字符（包含模式串）。 */
    InstanceName?: string;
  }

  /** 管控节点概览。 */
  interface ManagerNodeOverview {
    /** 管控节点ID。 */
    NodeId: string | null;
  }

  /** 节点活动信息。 */
  interface NodeActivity {
    /** 节点活动所在的实例ID。 */
    NodeInstanceId: string | null;
    /** 节点活动状态。取值范围：RUNNING：运行中SUCCESSFUL：活动成功FAILED：活动失败 */
    NodeActivityStatus: string;
    /** 节点活动状态码。 */
    NodeActivityStatusCode: string | null;
    /** 节点活动状态原因。 */
    NodeActivityStatusReason: string | null;
  }

  /** 节点概览信息。 */
  interface NodeOverview {
    /** 节点实例ID。 */
    InstanceId?: string | null;
    /** 节点所在可用区信息。 */
    Zone?: string | null;
    /** 节点状态。SUBMITTED：已完成提交。CREATING：创建中。CREATED：完成创建。INITING：初始化中。INIT_FAILED：初始化失败。RUNNING：运行中。DELETING：销毁中。 */
    NodeState?: string | null;
    /** 镜像ID。 */
    ImageId?: string | null;
    /** 节点所属队列名称。 */
    QueueName?: string | null;
    /** 节点角色。Manager：管控节点。Compute：计算节点。Login：登录节点。ManagerBackup：备用管控节点。 */
    NodeRole?: string | null;
    /** 节点类型。STATIC：静态节点。DYNAMIC：弹性节点。 */
    NodeType?: string | null;
  }

  /** 描述了实例的抽象位置 */
  interface Placement {
    /** 实例所属的可用区名称。该参数可以通过调用 [DescribeZones](https://cloud.tencent.com/document/product/213/15707) 的返回值中的Zone字段来获取。 */
    Zone: string;
  }

  /** 扩容队列配置。 */
  interface QueueConfig {
    /** 队列名称。 */
    QueueName: string;
    /** 队列中弹性节点数量最小值。取值范围0～200。 */
    MinSize?: number;
    /** 队列中弹性节点数量最大值。取值范围0～200。 */
    MaxSize?: number;
    /** 是否开启自动扩容。 */
    EnableAutoExpansion?: boolean;
    /** 是否开启自动缩容。 */
    EnableAutoShrink?: boolean;
    /** 指定有效的[镜像](https://cloud.tencent.com/document/product/213/4940)ID，格式形如`img-xxx`。目前仅支持公有镜和特定自定义镜像。 */
    ImageId?: string;
    /** 节点系统盘配置信息。若不指定该参数，则按照系统默认值进行分配。 */
    SystemDisk?: SystemDisk;
    /** 节点数据盘配置信息。若不指定该参数，则默认不购买数据盘。支持购买的时候指定21块数据盘，其中最多包含1块LOCAL_BASIC数据盘或者LOCAL_SSD数据盘，最多包含20块CLOUD_BASIC数据盘、CLOUD_PREMIUM数据盘或者CLOUD_SSD数据盘。 */
    DataDisks?: DataDisk[];
    /** 公网带宽相关信息设置。若不指定该参数，则默认公网带宽为0Mbps。 */
    InternetAccessible?: InternetAccessible;
    /** 扩容节点配置信息。 */
    ExpansionNodeConfigs?: ExpansionNodeConfig[];
  }

  /** 扩容队列配置概览。 */
  interface QueueConfigOverview {
    /** 队列名称。 */
    QueueName?: string;
    /** 队列中弹性节点数量最小值。取值范围0～200。 */
    MinSize?: number;
    /** 队列中弹性节点数量最大值。取值范围0～200。 */
    MaxSize?: number;
    /** 是否开启自动扩容。 */
    EnableAutoExpansion?: boolean;
    /** 是否开启自动缩容。 */
    EnableAutoShrink?: boolean;
    /** 扩容节点配置信息。 */
    ExpansionNodeConfigs?: ExpansionNodeConfigOverview[];
  }

  /** 队列信息概览。 */
  interface QueueOverview {
    /** 队列名称。 */
    QueueName?: string | null;
  }

  /** 描述集群文件系统选项 */
  interface StorageOption {
    /** 集群挂载CFS文件系统选项。 */
    CFSOptions?: CFSOption[];
    /** 集群挂载GooseFS文件系统选项。 */
    GooseFSOptions?: GooseFSOption[];
  }

  /** 集群存储选项概览信息。 */
  interface StorageOptionOverview {
    /** CFS存储选项概览信息列表。 */
    CFSOptions: CFSOptionOverview[];
    /** GooseFS存储选项概览信息列表。 */
    GooseFSOptions: GooseFSOptionOverview[];
  }

  /** 描述了操作系统所在块设备即系统盘的信息 */
  interface SystemDisk {
    /** 系统盘类型。系统盘类型限制详见存储概述。取值范围：LOCAL_BASIC：本地硬盘LOCAL_SSD：本地SSD硬盘CLOUD_BASIC：普通云硬盘CLOUD_SSD：SSD云硬盘CLOUD_PREMIUM：高性能云硬盘默认取值：当前有库存的硬盘类型。 */
    DiskType?: string;
    /** 系统盘大小，单位：GB。默认值为 50 */
    DiskSize?: number;
  }

  /** 标签键值对。 */
  interface Tag {
    /** 标签键 */
    Key: string;
    /** 标签值 */
    Value: string;
  }

  /** 描述了VPC相关信息 */
  interface VirtualPrivateCloud {
    /** 私有网络ID，形如`vpc-xxx`。有效的VpcId可通过登录[控制台](https://console.cloud.tencent.com/vpc/vpc?rid=1)查询；也可以调用接口 [DescribeVpcEx](/document/api/215/1372) ，从接口返回中的`unVpcId`字段获取。若在创建子机时VpcId与SubnetId同时传入`DEFAULT`，则强制使用默认vpc网络。 */
    VpcId: string;
    /** 私有网络子网ID，形如`subnet-xxx`。有效的私有网络子网ID可通过登录[控制台](https://console.cloud.tencent.com/vpc/subnet?rid=1)查询；也可以调用接口 [DescribeSubnets](/document/api/215/15784) ，从接口返回中的`unSubnetId`字段获取。若在创建子机时SubnetId与VpcId同时传入`DEFAULT`，则强制使用默认vpc网络。 */
    SubnetId: string;
  }

  interface AddClusterStorageOptionRequest {
    /** 集群ID。 */
    ClusterId: string;
    /** 集群存储选项。 */
    StorageOption: StorageOption;
  }

  interface AddClusterStorageOptionResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface AddNodesRequest {
    /** 集群中实例所在的位置。 */
    Placement: Placement;
    /** 集群ID。 */
    ClusterId: string;
    /** 私有网络相关信息配置。 */
    VirtualPrivateCloud: VirtualPrivateCloud;
    /** 添加节点数量。 */
    Count: number;
    /** 指定有效的[镜像](https://cloud.tencent.com/document/product/213/4940)ID，格式形如`img-xxx`。目前仅支持公有镜像和特定自定义镜像。 */
    ImageId?: string;
    /** 节点[计费类型](https://cloud.tencent.com/document/product/213/2180)。PREPAID：预付费，即包年包月POSTPAID_BY_HOUR：按小时后付费SPOTPAID：竞价付费默认值：POSTPAID_BY_HOUR。 */
    InstanceChargeType?: string;
    /** 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月节点的购买时长、是否设置自动续费等属性。若指定节点的付费模式为预付费则该参数必传。 */
    InstanceChargePrepaid?: InstanceChargePrepaid;
    /** 节点机型。不同实例机型指定了不同的资源规格。具体取值可通过调用接口[DescribeInstanceTypeConfigs](https://cloud.tencent.com/document/api/213/15749)来获得最新的规格表或参见[实例规格](https://cloud.tencent.com/document/product/213/11518)描述。 */
    InstanceType?: string;
    /** 节点系统盘配置信息。若不指定该参数，则按照系统默认值进行分配。 */
    SystemDisk?: SystemDisk[];
    /** 节点数据盘配置信息。若不指定该参数，则默认不购买数据盘。支持购买的时候指定21块数据盘，其中最多包含1块LOCAL_BASIC数据盘或者LOCAL_SSD数据盘，最多包含20块CLOUD_BASIC数据盘、CLOUD_PREMIUM数据盘或者CLOUD_SSD数据盘。 */
    DataDisks?: DataDisk[];
    /** 公网带宽相关信息设置。若不指定该参数，则默认公网带宽为0Mbps。 */
    InternetAccessible?: InternetAccessible;
    /** 节点显示名称。不指定节点显示名称则默认显示‘未命名’。最多支持60个字符。 */
    InstanceName?: string;
    /** 集群登录设置。 */
    LoginSettings?: LoginSettings;
    /** 集群中实例所属安全组。该参数可以通过调用 [DescribeSecurityGroups](https://cloud.tencent.com/document/api/215/15808) 的返回值中的sgId字段来获取。若不指定该参数，则绑定默认安全组。 */
    SecurityGroupIds?: string[];
    /** 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。 */
    ClientToken?: string;
    /** 队列名称。不指定则为默认队列。SLURM默认队列为：compute。SGE默认队列为：all.q。 */
    QueueName?: string;
    /** 添加节点角色。默认值：ComputeCompute：计算节点。Login：登录节点。 */
    NodeRole?: string;
    /** 是否只预检此次请求。true：发送检查请求，不会创建实例。检查项包括是否填写了必需参数，请求格式，业务限制和云服务器库存。如果检查不通过，则返回对应错误码；如果检查通过，则返回RequestId.false（默认）：发送正常请求，通过检查后直接创建实例 */
    DryRun?: boolean;
    /** 添加节点类型。默认取值：STATIC。STATIC：静态节点，不会参与弹性伸缩流程。DYNAMIC：弹性节点，会被弹性缩容的节点。管控节点和登录节点不支持此参数。 */
    NodeType?: string;
  }

  interface AddNodesResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface AddQueueRequest {
    /** 集群ID。 */
    ClusterId: string;
    /** 队列名称。最多支持32个字符。 */
    QueueName: string;
  }

  interface AddQueueResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface BindAutoScalingGroupRequest {
    /** 集群ID。 */
    ClusterId: string;
    /** 弹性伸缩启动配置ID。 */
    LaunchConfigurationId: string;
    /** 弹性伸缩组ID。 */
    AutoScalingGroupId: string;
    /** 队列名称。 */
    QueueName?: string;
    /** 任务连续等待时间，队列的任务处于连续等待的时间。单位秒。默认值120。 */
    ExpansionBusyTime?: number;
    /** 节点连续空闲（未运行作业）时间，一个节点连续处于空闲状态时间。单位秒。默认值300。 */
    ShrinkIdleTime?: number;
    /** 是否开启自动扩容，默认值true。 */
    EnableAutoExpansion?: boolean;
    /** 是否开启自动缩容，默认值true。 */
    EnableAutoShrink?: boolean;
    /** 是否只预检此次请求。true：发送检查请求，不会绑定弹性伸缩组。检查项包括是否填写了必需参数，请求格式，业务限制。如果检查不通过，则返回对应错误码；如果检查通过，则返回RequestId。false（默认）：发送正常请求，通过检查后直接绑定弹性伸缩组。 */
    DryRun?: boolean;
  }

  interface BindAutoScalingGroupResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateClusterRequest {
    /** 集群中实例所在的位置。 */
    Placement: Placement;
    /** 指定管理节点。 */
    ManagerNode?: ManagerNode;
    /** 指定管理节点的数量。默认取值：1。取值范围：1～2。 */
    ManagerNodeCount?: number;
    /** 指定计算节点。 */
    ComputeNode?: ComputeNode;
    /** 指定计算节点的数量。默认取值：0。 */
    ComputeNodeCount?: number;
    /** 调度器类型。默认取值：SLURM。SGE：SGE调度器。SLURM：SLURM调度器。 */
    SchedulerType?: string;
    /** 指定有效的[镜像](https://cloud.tencent.com/document/product/213/4940)ID，格式形如`img-xxx`。目前支持部分公有镜像和自定义镜像。 */
    ImageId?: string;
    /** 私有网络相关信息配置。 */
    VirtualPrivateCloud?: VirtualPrivateCloud;
    /** 集群登录设置。 */
    LoginSettings?: LoginSettings;
    /** 集群中实例所属安全组。该参数可以通过调用 [DescribeSecurityGroups](https://cloud.tencent.com/document/api/215/15808) 的返回值中的sgId字段来获取。若不指定该参数，则绑定默认安全组。 */
    SecurityGroupIds?: string[];
    /** 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。 */
    ClientToken?: string;
    /** 是否只预检此次请求。true：发送检查请求，不会创建实例。检查项包括是否填写了必需参数，请求格式，业务限制和云服务器库存。如果检查不通过，则返回对应错误码；如果检查通过，则返回RequestId.false（默认）：发送正常请求，通过检查后直接创建实例 */
    DryRun?: boolean;
    /** 域名字服务类型。默认取值：NIS。NIS：NIS域名字服务。 */
    AccountType?: string;
    /** 集群显示名称。 */
    ClusterName?: string;
    /** 集群存储选项 */
    StorageOption?: StorageOption;
    /** 指定登录节点。 */
    LoginNode?: LoginNode;
    /** 指定登录节点的数量。默认取值：0。取值范围：0～10。 */
    LoginNodeCount?: number;
    /** 创建集群时同时绑定的标签对说明。 */
    Tags?: Tag[];
    /** 弹性伸缩类型。AS：集群自动扩缩容由[弹性伸缩](https://cloud.tencent.com/document/product/377/3154)产品实现。THPC_AS：集群自动扩缩容由THPC产品内部实现。 */
    AutoScalingType?: string;
  }

  interface CreateClusterResponse {
    /** 集群ID。 */
    ClusterId?: string | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteClusterRequest {
    /** 集群ID。 */
    ClusterId: string;
  }

  interface DeleteClusterResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteClusterStorageOptionRequest {
    /** 集群ID。 */
    ClusterId: string;
    /** 本地挂载路径。 */
    LocalPath: string;
  }

  interface DeleteClusterStorageOptionResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteNodesRequest {
    /** 集群ID。 */
    ClusterId: string;
    /** 节点ID。 */
    NodeIds: string[];
  }

  interface DeleteNodesResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteQueueRequest {
    /** 集群ID。 */
    ClusterId: string;
    /** 队列名称。最多支持32个字符。 */
    QueueName: string;
  }

  interface DeleteQueueResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeAutoScalingConfigurationRequest {
    /** 集群ID。 */
    ClusterId: string;
  }

  interface DescribeAutoScalingConfigurationResponse {
    /** 集群ID。 */
    ClusterId?: string;
    /** 任务连续等待时间，队列的任务处于连续等待的时间。单位秒。 */
    ExpansionBusyTime?: number;
    /** 节点连续空闲（未运行作业）时间，一个节点连续处于空闲状态时间。 */
    ShrinkIdleTime?: number;
    /** 扩容队列配置概览列表。 */
    QueueConfigs?: QueueConfigOverview[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeClusterActivitiesRequest {
    /** 集群ID。通过该参数指定需要查询活动历史记录的集群。 */
    ClusterId: string;
    /** 偏移量，默认为0。关于`Offset`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。 */
    Offset?: number;
    /** 返回数量，默认为20，最大值为100。关于`Limit`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。 */
    Limit?: number;
  }

  interface DescribeClusterActivitiesResponse {
    /** 集群活动历史记录列表。 */
    ClusterActivitySet?: ClusterActivity[];
    /** 集群活动历史记录数量。 */
    TotalCount?: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeClusterStorageOptionRequest {
    /** 集群ID。 */
    ClusterId: string;
  }

  interface DescribeClusterStorageOptionResponse {
    /** 集群存储选项信息概览。 */
    StorageOption?: StorageOptionOverview;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeClustersRequest {
    /** 集群ID列表。通过该参数可以指定需要查询信息的集群列表。如果您不指定该参数，则返回Limit数量以内的集群信息。 */
    ClusterIds?: string[];
    /** 偏移量，默认为0。关于`Offset`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。 */
    Offset?: number;
    /** 返回数量，默认为20，最大值为100。关于`Limit`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。 */
    Limit?: number;
  }

  interface DescribeClustersResponse {
    /** 集群概览信息列表。 */
    ClusterSet?: ClusterOverview[];
    /** 集群数量。 */
    TotalCount?: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeNodesRequest {
    /** 集群ID。 */
    ClusterId: string;
    /** queue-name 按照【队列名称】进行过滤。队列名称形如：compute。类型：String必选：否node-role 按照【节点角色】进行过滤。节点角色形如：Manager。（Manager：管控节点。Compute：计算节点。Login：登录节点。ManagerBackup：备用管控节点。）类型：String必选：否node-type 按照【节点类型】进行过滤。节点类型形如：STATIC。(STATIC：静态节点。DYNAMIC：弹性节点。)类型：String必选：否每次请求的`Filters`的上限为10，`Filter.Values`的上限为5。 */
    Filters?: Filter[];
    /** 偏移量，默认为0。关于`Offset`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。 */
    Offset?: number;
    /** 返回数量，默认为20，最大值为100。关于`Limit`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。 */
    Limit?: number;
  }

  interface DescribeNodesResponse {
    /** 节点概览信息列表。 */
    NodeSet?: NodeOverview[];
    /** 符合条件的节点数量。 */
    TotalCount?: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeQueuesRequest {
    /** 集群ID。 */
    ClusterId: string;
    /** 偏移量，默认为0。关于`Offset`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。 */
    Offset?: number;
    /** 返回数量，默认为20，最大值为100。关于`Limit`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。 */
    Limit?: number;
  }

  interface DescribeQueuesResponse {
    /** 队列概览信息列表。 */
    QueueSet?: QueueOverview[];
    /** 符合条件的节点数量。 */
    TotalCount?: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface SetAutoScalingConfigurationRequest {
    /** 集群ID。 */
    ClusterId: string;
    /** 任务连续等待时间，队列的任务处于连续等待的时间。单位秒。默认值120。 */
    ExpansionBusyTime?: number;
    /** 节点连续空闲（未运行作业）时间，一个节点连续处于空闲状态时间。单位秒。默认值300。 */
    ShrinkIdleTime?: number;
    /** 扩容队列配置列表。 */
    QueueConfigs?: QueueConfig[];
    /** 是否只预检此次请求。true：发送检查请求，不会绑定弹性伸缩组。检查项包括是否填写了必需参数，请求格式，业务限制。如果检查不通过，则返回对应错误码；如果检查通过，则返回RequestId。false（默认）：发送正常请求，通过检查后直接绑定弹性伸缩组。 */
    DryRun?: boolean;
  }

  interface SetAutoScalingConfigurationResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }
}

declare namespace V20211109 {
  type VersionHeader = { headers: { 'X-TC-Version': '2021-11-09' } }

  /** 描述CFS文件系统版本和挂载信息 */
  interface CFSOption {
    /** 文件系统本地挂载路径 */
    LocalPath: string;
    /** 文件系统远程挂载ip及路径 */
    RemotePath: string;
    /** 文件系统协议类型，默认值NFS 3.0。NFS 3.0。NFS 4.0。TURBO。 */
    Protocol?: string;
    /** 文件系统存储类型，默认值SD；其中 SD 为通用标准型标准型存储， HP为通用性能型存储， TB为turbo标准型， TP 为turbo性能型。 */
    StorageType?: string;
  }

  /** 集群概览信息。 */
  interface ClusterOverview {
    /** 集群ID。 */
    ClusterId: string;
    /** 集群状态。取值范围：PENDING：创建中INITING：初始化中INIT_FAILED：初始化失败RUNNING：运行中TERMINATING：销毁中 */
    ClusterStatus: string;
    /** 集群名称。 */
    ClusterName: string;
    /** 集群位置信息。 */
    Placement: Placement;
    /** 集群创建时间。 */
    CreateTime: string;
    /** 集群调度器。 */
    SchedulerType: string;
    /** 计算节点数量。 */
    ComputeNodeCount: number;
    /** 计算节点概览。 */
    ComputeNodeSet: ComputeNodeOverview[];
    /** 管控节点数量。 */
    ManagerNodeCount: number;
    /** 管控节点概览。 */
    ManagerNodeSet: ManagerNodeOverview[];
    /** 登录节点概览。 */
    LoginNodeSet: LoginNodeOverview[];
    /** 登录节点数量。 */
    LoginNodeCount: number;
  }

  /** 计算节点信息。 */
  interface ComputeNode {
    /** 节点[计费类型](https://cloud.tencent.com/document/product/213/2180)。PREPAID：预付费，即包年包月POSTPAID_BY_HOUR：按小时后付费SPOTPAID：竞价付费默认值：POSTPAID_BY_HOUR。 */
    InstanceChargeType?: string;
    /** 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月节点的购买时长、是否设置自动续费等属性。若指定节点的付费模式为预付费则该参数必传。 */
    InstanceChargePrepaid?: InstanceChargePrepaid;
    /** 节点机型。不同实例机型指定了不同的资源规格。具体取值可通过调用接口[DescribeInstanceTypeConfigs](https://cloud.tencent.com/document/api/213/15749)来获得最新的规格表或参见[实例规格](https://cloud.tencent.com/document/product/213/11518)描述。 */
    InstanceType?: string;
    /** 节点系统盘配置信息。若不指定该参数，则按照系统默认值进行分配。 */
    SystemDisk?: SystemDisk;
    /** 节点数据盘配置信息。若不指定该参数，则默认不购买数据盘。支持购买的时候指定21块数据盘，其中最多包含1块LOCAL_BASIC数据盘或者LOCAL_SSD数据盘，最多包含20块CLOUD_BASIC数据盘、CLOUD_PREMIUM数据盘或者CLOUD_SSD数据盘。 */
    DataDisks?: DataDisk[];
    /** 公网带宽相关信息设置。若不指定该参数，则默认公网带宽为0Mbps。 */
    InternetAccessible?: InternetAccessible;
    /** 节点显示名称。不指定节点显示名称则默认显示‘未命名’。最多支持60个字符。 */
    InstanceName?: string;
  }

  /** 计算节点概览。 */
  interface ComputeNodeOverview {
    /** 计算节点ID。 */
    NodeId: string | null;
  }

  /** 描述了数据盘的信息 */
  interface DataDisk {
    /** 数据盘大小，单位：GB。最小调整步长为10G，不同数据盘类型取值范围不同，具体限制详见：[存储概述](https://cloud.tencent.com/document/product/213/4952)。默认值为0，表示不购买数据盘。更多限制详见产品文档。 */
    DiskSize: number;
    /** 数据盘类型。数据盘类型限制详见[存储概述](https://cloud.tencent.com/document/product/213/4952)。取值范围：LOCAL_BASIC：本地硬盘LOCAL_SSD：本地SSD硬盘LOCAL_NVME：本地NVME硬盘，与InstanceType强相关，不支持指定LOCAL_PRO：本地HDD硬盘，与InstanceType强相关，不支持指定CLOUD_BASIC：普通云硬盘CLOUD_PREMIUM：高性能云硬盘CLOUD_SSD：SSD云硬盘CLOUD_HSSD：增强型SSD云硬盘CLOUD_TSSD：极速型SSD云硬盘默认取值：LOCAL_BASIC。 */
    DiskType?: string;
  }

  /** 描述GooseFS挂载信息 */
  interface GooseFSOption {
    /** 文件系统本地挂载路径 */
    LocalPath: string;
    /** 文件系统远程挂载路径 */
    RemotePath: string;
    /** 文件系统master的ip和端口 */
    Masters: string[];
  }

  /** 描述了实例的计费模式 */
  interface InstanceChargePrepaid {
    /** 购买实例的时长，单位：月。取值范围：1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 24, 36, 48, 60。 */
    Period: number;
    /** 自动续费标识。取值范围：NOTIFY_AND_AUTO_RENEW：通知过期且自动续费NOTIFY_AND_MANUAL_RENEW：通知过期不自动续费DISABLE_NOTIFY_AND_MANUAL_RENEW：不通知过期不自动续费默认取值：NOTIFY_AND_MANUAL_RENEW。若该参数指定为NOTIFY_AND_AUTO_RENEW，在账户余额充足的情况下，实例到期后将按月自动续费。 */
    RenewFlag?: string;
  }

  /** 描述了实例的公网可访问性，声明了实例的公网使用计费模式，最大带宽等 */
  interface InternetAccessible {
    /** 网络计费类型。取值范围：BANDWIDTH_PREPAID：预付费按带宽结算TRAFFIC_POSTPAID_BY_HOUR：流量按小时后付费BANDWIDTH_POSTPAID_BY_HOUR：带宽按小时后付费BANDWIDTH_PACKAGE：带宽包用户默认取值：非带宽包用户默认与子机付费类型保持一致。 */
    InternetChargeType?: string;
    /** 公网出带宽上限，单位：Mbps。默认值：0Mbps。不同机型带宽上限范围不一致，具体限制详见购买网络带宽。 */
    InternetMaxBandwidthOut?: number;
  }

  /** 登录节点信息。 */
  interface LoginNode {
    /** 节点[计费类型](https://cloud.tencent.com/document/product/213/2180)。PREPAID：预付费，即包年包月POSTPAID_BY_HOUR：按小时后付费SPOTPAID：竞价付费默认值：POSTPAID_BY_HOUR。 */
    InstanceChargeType?: string;
    /** 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月节点的购买时长、是否设置自动续费等属性。若指定节点的付费模式为预付费则该参数必传。 */
    InstanceChargePrepaid?: InstanceChargePrepaid;
    /** 节点机型。不同实例机型指定了不同的资源规格。具体取值可通过调用接口[DescribeInstanceTypeConfigs](https://cloud.tencent.com/document/api/213/15749)来获得最新的规格表或参见[实例规格](https://cloud.tencent.com/document/product/213/11518)描述。 */
    InstanceType?: string;
    /** 节点系统盘配置信息。若不指定该参数，则按照系统默认值进行分配。 */
    SystemDisk?: SystemDisk[];
    /** 节点数据盘配置信息。若不指定该参数，则默认不购买数据盘。支持购买的时候指定21块数据盘，其中最多包含1块LOCAL_BASIC数据盘或者LOCAL_SSD数据盘，最多包含20块CLOUD_BASIC数据盘、CLOUD_PREMIUM数据盘或者CLOUD_SSD数据盘。 */
    DataDisks?: DataDisk[];
    /** 公网带宽相关信息设置。若不指定该参数，则默认公网带宽为0Mbps。 */
    InternetAccessible?: InternetAccessible[];
    /** 节点显示名称。不指定节点显示名称则默认显示‘未命名’。最多支持60个字符。 */
    InstanceName?: string;
  }

  /** 登录节点概览。 */
  interface LoginNodeOverview {
    /** 登录节点ID。 */
    NodeId: string;
  }

  /** 描述了实例登录相关配置与信息。 */
  interface LoginSettings {
    /** 实例登录密码。不同操作系统类型密码复杂度限制不一样，具体如下：Linux实例密码必须8到30位，至少包括两项[a-z]，[A-Z]、[0-9] 和 [( ) \` ~ ! @ # $ % ^ & * - + = | { } [ ] : ; ' , . ? / ]中的特殊符号。Windows实例密码必须12到30位，至少包括三项[a-z]，[A-Z]，[0-9] 和 [( ) \` ~ ! @ # $ % ^ & * - + = | { } [ ] : ; ' , . ? /]中的特殊符号。若不指定该参数，则由系统随机生成密码，并通过站内信方式通知到用户。 */
    Password?: string;
  }

  /** 管控节点信息 */
  interface ManagerNode {
    /** 节点[计费类型](https://cloud.tencent.com/document/product/213/2180)。PREPAID：预付费，即包年包月POSTPAID_BY_HOUR：按小时后付费默认值：POSTPAID_BY_HOUR。 */
    InstanceChargeType?: string;
    /** 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月节点的购买时长、是否设置自动续费等属性。若指定节点的付费模式为预付费则该参数必传。 */
    InstanceChargePrepaid?: InstanceChargePrepaid;
    /** 节点机型。不同实例机型指定了不同的资源规格。对于付费模式为PREPAID或POSTPAID\_BY\_HOUR的实例创建，具体取值可通过调用接口[DescribeInstanceTypeConfigs](https://cloud.tencent.com/document/api/213/15749)来获得最新的规格表或参见[实例规格](https://cloud.tencent.com/document/product/213/11518)描述。 */
    InstanceType?: string;
    /** 节点系统盘配置信息。若不指定该参数，则按照系统默认值进行分配。 */
    SystemDisk?: SystemDisk;
    /** 节点数据盘配置信息。若不指定该参数，则默认不购买数据盘。支持购买的时候指定21块数据盘，其中最多包含1块LOCAL_BASIC数据盘或者LOCAL_SSD数据盘，最多包含20块CLOUD_BASIC数据盘、CLOUD_PREMIUM数据盘或者CLOUD_SSD数据盘。 */
    DataDisks?: DataDisk[];
    /** 公网带宽相关信息设置。若不指定该参数，则默认公网带宽为0Mbps。 */
    InternetAccessible?: InternetAccessible;
    /** 节点显示名称。不指定节点显示名称则默认显示‘未命名’。购买多个节点，如果指定模式串`{R:x}`，表示生成数字[`[x, x+n-1]`，其中`n`表示购买节点的数量，例如`server_{R:3}`，购买1个时，节点显示名称为`server_3`；购买2个时，节点显示名称分别为`server_3`，`server_4`。支持指定多个模式串`{R:x}`。购买多个节点，如果不指定模式串，则在节点显示名称添加后缀`1、2...n`，其中`n`表示购买节点的数量，例如`server_`，购买2个时，节点显示名称分别为`server_1`，`server_2`。最多支持60个字符（包含模式串）。 */
    InstanceName?: string;
  }

  /** 管控节点概览。 */
  interface ManagerNodeOverview {
    /** 管控节点ID。 */
    NodeId: string | null;
  }

  /** 描述了实例的抽象位置 */
  interface Placement {
    /** 实例所属的可用区名称。该参数可以通过调用 [DescribeZones](https://cloud.tencent.com/document/product/213/15707) 的返回值中的Zone字段来获取。 */
    Zone: string;
  }

  /** 描述集群文件系统选项 */
  interface StorageOption {
    /** 集群挂载CFS文件系统选项 */
    CFSOptions?: CFSOption[];
    /** 集群挂在GooseFS文件系统选项 */
    GooseFSOptions?: GooseFSOption[];
  }

  /** 描述了操作系统所在块设备即系统盘的信息 */
  interface SystemDisk {
    /** 系统盘类型。系统盘类型限制详见存储概述。取值范围：LOCAL_BASIC：本地硬盘LOCAL_SSD：本地SSD硬盘CLOUD_BASIC：普通云硬盘CLOUD_SSD：SSD云硬盘CLOUD_PREMIUM：高性能云硬盘默认取值：当前有库存的硬盘类型。 */
    DiskType?: string;
    /** 系统盘大小，单位：GB。默认值为 50 */
    DiskSize?: number;
  }

  /** 标签键值对。 */
  interface Tag {
    /** 标签键 */
    Key: string;
    /** 标签值 */
    Value: string;
  }

  /** 描述了VPC相关信息 */
  interface VirtualPrivateCloud {
    /** 私有网络ID，形如`vpc-xxx`。有效的VpcId可通过登录[控制台](https://console.cloud.tencent.com/vpc/vpc?rid=1)查询；也可以调用接口 [DescribeVpcEx](/document/api/215/1372) ，从接口返回中的`unVpcId`字段获取。若在创建子机时VpcId与SubnetId同时传入`DEFAULT`，则强制使用默认vpc网络。 */
    VpcId: string;
    /** 私有网络子网ID，形如`subnet-xxx`。有效的私有网络子网ID可通过登录[控制台](https://console.cloud.tencent.com/vpc/subnet?rid=1)查询；也可以调用接口 [DescribeSubnets](/document/api/215/15784) ，从接口返回中的`unSubnetId`字段获取。若在创建子机时SubnetId与VpcId同时传入`DEFAULT`，则强制使用默认vpc网络。 */
    SubnetId: string;
  }

  interface BindAutoScalingGroupRequest {
    /** 集群ID。 */
    ClusterId: string;
    /** 弹性伸缩启动配置ID。 */
    LaunchConfigurationId: string;
    /** 弹性伸缩组ID。 */
    AutoScalingGroupId: string;
    /** 队列名称。 */
    QueueName?: string;
    /** 任务连续等待时间，队列的任务处于连续等待的时间。单位秒。默认值120。 */
    ExpansionBusyTime?: number;
    /** 节点连续空闲（未运行作业）时间，一个节点连续处于空闲状态时间。单位秒。默认值300。 */
    ShrinkIdleTime?: number;
    /** 是否开启自动扩容，默认值true。 */
    EnableAutoExpansion?: boolean;
    /** 是否开启自动缩容，默认值true。 */
    EnableAutoShrink?: boolean;
    /** 是否只预检此次请求。true：发送检查请求，不会绑定弹性伸缩组。检查项包括是否填写了必需参数，请求格式，业务限制。如果检查不通过，则返回对应错误码；如果检查通过，则返回RequestId。false（默认）：发送正常请求，通过检查后直接绑定弹性伸缩组。 */
    DryRun?: boolean;
  }

  interface BindAutoScalingGroupResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateClusterRequest {
    /** 集群中实例所在的位置。 */
    Placement: Placement;
    /** 指定管理节点。 */
    ManagerNode?: ManagerNode;
    /** 指定管理节点的数量。默认取值：1。取值范围：1～2。 */
    ManagerNodeCount?: number;
    /** 指定计算节点。 */
    ComputeNode?: ComputeNode;
    /** 指定计算节点的数量。默认取值：0。 */
    ComputeNodeCount?: number;
    /** 调度器类型。SGE：SGE调度器。SLURM：SLURM调度器。 */
    SchedulerType?: string;
    /** 指定有效的[镜像](https://cloud.tencent.com/document/product/213/4940)ID，格式形如`img-xxx`。目前仅支持公有镜像。 */
    ImageId?: string;
    /** 私有网络相关信息配置。 */
    VirtualPrivateCloud?: VirtualPrivateCloud;
    /** 集群登录设置。 */
    LoginSettings?: LoginSettings;
    /** 集群中实例所属安全组。该参数可以通过调用 [DescribeSecurityGroups](https://cloud.tencent.com/document/api/215/15808) 的返回值中的sgId字段来获取。若不指定该参数，则绑定默认安全组。 */
    SecurityGroupIds?: string[];
    /** 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。 */
    ClientToken?: string;
    /** 是否只预检此次请求。true：发送检查请求，不会创建实例。检查项包括是否填写了必需参数，请求格式，业务限制和云服务器库存。如果检查不通过，则返回对应错误码；如果检查通过，则返回RequestId.false（默认）：发送正常请求，通过检查后直接创建实例 */
    DryRun?: boolean;
    /** 域名字服务类型。默认值：NISNIS：NIS域名字服务。 */
    AccountType?: string;
    /** 集群显示名称。 */
    ClusterName?: string;
    /** 集群存储选项 */
    StorageOption?: StorageOption;
    /** 已废弃。指定登录节点。 */
    LoginNode?: LoginNode[];
    /** 已废弃。指定登录节点的数量。默认取值：0。取值范围：0～10。 */
    LoginNodeCount?: number;
    /** 创建集群时同时绑定的标签对说明。 */
    Tags?: Tag[];
  }

  interface CreateClusterResponse {
    /** 集群ID。 */
    ClusterId: string | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteClusterRequest {
    /** 集群ID。 */
    ClusterId: string;
  }

  interface DeleteClusterResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeClustersRequest {
    /** 集群ID列表。通过该参数可以指定需要查询信息的集群列表。如果您不指定该参数，则返回Limit数量以内的集群信息。 */
    ClusterIds?: string[];
    /** 偏移量，默认为0。关于`Offset`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。 */
    Offset?: number;
    /** 返回数量，默认为20，最大值为100。关于`Limit`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。 */
    Limit?: number;
  }

  interface DescribeClustersResponse {
    /** 集群概览信息列表。 */
    ClusterSet: ClusterOverview[];
    /** 集群数量。 */
    TotalCount: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }
}

/** {@link Thpc 高性能计算平台} */
declare interface Thpc {
  (): Versions;
  /** 添加集群存储选项 {@link AddClusterStorageOptionRequest} {@link AddClusterStorageOptionResponse} */
  AddClusterStorageOption(data: AddClusterStorageOptionRequest, config?: AxiosRequestConfig): AxiosPromise<AddClusterStorageOptionResponse>;
  /** 添加节点 {@link AddNodesRequest} {@link AddNodesResponse} */
  AddNodes(data: AddNodesRequest, config?: AxiosRequestConfig): AxiosPromise<AddNodesResponse>;
  /** 添加队列 {@link AddQueueRequest} {@link AddQueueResponse} */
  AddQueue(data: AddQueueRequest, config?: AxiosRequestConfig): AxiosPromise<AddQueueResponse>;
  /** 创建集群 {@link CreateClusterRequest} {@link CreateClusterResponse} */
  CreateCluster(data: CreateClusterRequest, config?: AxiosRequestConfig): AxiosPromise<CreateClusterResponse>;
  /** 删除集群 {@link DeleteClusterRequest} {@link DeleteClusterResponse} */
  DeleteCluster(data: DeleteClusterRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteClusterResponse>;
  /** 删除集群存储选项 {@link DeleteClusterStorageOptionRequest} {@link DeleteClusterStorageOptionResponse} */
  DeleteClusterStorageOption(data: DeleteClusterStorageOptionRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteClusterStorageOptionResponse>;
  /** 删除节点 {@link DeleteNodesRequest} {@link DeleteNodesResponse} */
  DeleteNodes(data: DeleteNodesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteNodesResponse>;
  /** 删除队列 {@link DeleteQueueRequest} {@link DeleteQueueResponse} */
  DeleteQueue(data: DeleteQueueRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteQueueResponse>;
  /** 查询弹性伸缩配置信息 {@link DescribeAutoScalingConfigurationRequest} {@link DescribeAutoScalingConfigurationResponse} */
  DescribeAutoScalingConfiguration(data: DescribeAutoScalingConfigurationRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAutoScalingConfigurationResponse>;
  /** 查询集群活动历史记录 {@link DescribeClusterActivitiesRequest} {@link DescribeClusterActivitiesResponse} */
  DescribeClusterActivities(data: DescribeClusterActivitiesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterActivitiesResponse>;
  /** 查询集群存储选项 {@link DescribeClusterStorageOptionRequest} {@link DescribeClusterStorageOptionResponse} */
  DescribeClusterStorageOption(data: DescribeClusterStorageOptionRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterStorageOptionResponse>;
  /** 查询集群列表 {@link DescribeClustersRequest} {@link DescribeClustersResponse} */
  DescribeClusters(data?: DescribeClustersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClustersResponse>;
  /** 查询节点初始化脚本列表 {@link DescribeInitNodeScriptsRequest} {@link DescribeInitNodeScriptsResponse} */
  DescribeInitNodeScripts(data: DescribeInitNodeScriptsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInitNodeScriptsResponse>;
  /** 查询指定集群节点列表 {@link DescribeNodesRequest} {@link DescribeNodesResponse} */
  DescribeNodes(data: DescribeNodesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNodesResponse>;
  /** 查询队列列表 {@link DescribeQueuesRequest} {@link DescribeQueuesResponse} */
  DescribeQueues(data: DescribeQueuesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeQueuesResponse>;
  /** 修改节点初始化脚本 {@link ModifyInitNodeScriptsRequest} {@link ModifyInitNodeScriptsResponse} */
  ModifyInitNodeScripts(data: ModifyInitNodeScriptsRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyInitNodeScriptsResponse>;
  /** 设置弹性伸缩配置信息 {@link SetAutoScalingConfigurationRequest} {@link SetAutoScalingConfigurationResponse} */
  SetAutoScalingConfiguration(data: SetAutoScalingConfigurationRequest, config?: AxiosRequestConfig): AxiosPromise<SetAutoScalingConfigurationResponse>;
  /** 添加集群存储选项 {@link V20220401.AddClusterStorageOptionRequest} {@link V20220401.AddClusterStorageOptionResponse} */
  AddClusterStorageOption(data: V20220401.AddClusterStorageOptionRequest, config: AxiosRequestConfig & V20220401.VersionHeader): AxiosPromise<V20220401.AddClusterStorageOptionResponse>;
  /** 添加节点 {@link V20220401.AddNodesRequest} {@link V20220401.AddNodesResponse} */
  AddNodes(data: V20220401.AddNodesRequest, config: AxiosRequestConfig & V20220401.VersionHeader): AxiosPromise<V20220401.AddNodesResponse>;
  /** 添加队列 {@link V20220401.AddQueueRequest} {@link V20220401.AddQueueResponse} */
  AddQueue(data: V20220401.AddQueueRequest, config: AxiosRequestConfig & V20220401.VersionHeader): AxiosPromise<V20220401.AddQueueResponse>;
  /** 绑定弹性伸缩组 {@link V20220401.BindAutoScalingGroupRequest} {@link V20220401.BindAutoScalingGroupResponse} */
  BindAutoScalingGroup(data: V20220401.BindAutoScalingGroupRequest, config: AxiosRequestConfig & V20220401.VersionHeader): AxiosPromise<V20220401.BindAutoScalingGroupResponse>;
  /** 创建集群 {@link V20220401.CreateClusterRequest} {@link V20220401.CreateClusterResponse} */
  CreateCluster(data: V20220401.CreateClusterRequest, config: AxiosRequestConfig & V20220401.VersionHeader): AxiosPromise<V20220401.CreateClusterResponse>;
  /** 删除集群 {@link V20220401.DeleteClusterRequest} {@link V20220401.DeleteClusterResponse} */
  DeleteCluster(data: V20220401.DeleteClusterRequest, config: AxiosRequestConfig & V20220401.VersionHeader): AxiosPromise<V20220401.DeleteClusterResponse>;
  /** 删除集群存储选项 {@link V20220401.DeleteClusterStorageOptionRequest} {@link V20220401.DeleteClusterStorageOptionResponse} */
  DeleteClusterStorageOption(data: V20220401.DeleteClusterStorageOptionRequest, config: AxiosRequestConfig & V20220401.VersionHeader): AxiosPromise<V20220401.DeleteClusterStorageOptionResponse>;
  /** 删除节点 {@link V20220401.DeleteNodesRequest} {@link V20220401.DeleteNodesResponse} */
  DeleteNodes(data: V20220401.DeleteNodesRequest, config: AxiosRequestConfig & V20220401.VersionHeader): AxiosPromise<V20220401.DeleteNodesResponse>;
  /** 删除队列 {@link V20220401.DeleteQueueRequest} {@link V20220401.DeleteQueueResponse} */
  DeleteQueue(data: V20220401.DeleteQueueRequest, config: AxiosRequestConfig & V20220401.VersionHeader): AxiosPromise<V20220401.DeleteQueueResponse>;
  /** 查询弹性伸缩配置信息 {@link V20220401.DescribeAutoScalingConfigurationRequest} {@link V20220401.DescribeAutoScalingConfigurationResponse} */
  DescribeAutoScalingConfiguration(data: V20220401.DescribeAutoScalingConfigurationRequest, config: AxiosRequestConfig & V20220401.VersionHeader): AxiosPromise<V20220401.DescribeAutoScalingConfigurationResponse>;
  /** 查询集群活动历史记录 {@link V20220401.DescribeClusterActivitiesRequest} {@link V20220401.DescribeClusterActivitiesResponse} */
  DescribeClusterActivities(data: V20220401.DescribeClusterActivitiesRequest, config: AxiosRequestConfig & V20220401.VersionHeader): AxiosPromise<V20220401.DescribeClusterActivitiesResponse>;
  /** 查询集群存储选项 {@link V20220401.DescribeClusterStorageOptionRequest} {@link V20220401.DescribeClusterStorageOptionResponse} */
  DescribeClusterStorageOption(data: V20220401.DescribeClusterStorageOptionRequest, config: AxiosRequestConfig & V20220401.VersionHeader): AxiosPromise<V20220401.DescribeClusterStorageOptionResponse>;
  /** 查询集群列表 {@link V20220401.DescribeClustersRequest} {@link V20220401.DescribeClustersResponse} */
  DescribeClusters(data: V20220401.DescribeClustersRequest, config: AxiosRequestConfig & V20220401.VersionHeader): AxiosPromise<V20220401.DescribeClustersResponse>;
  /** 查询指定集群节点列表 {@link V20220401.DescribeNodesRequest} {@link V20220401.DescribeNodesResponse} */
  DescribeNodes(data: V20220401.DescribeNodesRequest, config: AxiosRequestConfig & V20220401.VersionHeader): AxiosPromise<V20220401.DescribeNodesResponse>;
  /** 查询队列列表 {@link V20220401.DescribeQueuesRequest} {@link V20220401.DescribeQueuesResponse} */
  DescribeQueues(data: V20220401.DescribeQueuesRequest, config: AxiosRequestConfig & V20220401.VersionHeader): AxiosPromise<V20220401.DescribeQueuesResponse>;
  /** 设置弹性伸缩配置信息 {@link V20220401.SetAutoScalingConfigurationRequest} {@link V20220401.SetAutoScalingConfigurationResponse} */
  SetAutoScalingConfiguration(data: V20220401.SetAutoScalingConfigurationRequest, config: AxiosRequestConfig & V20220401.VersionHeader): AxiosPromise<V20220401.SetAutoScalingConfigurationResponse>;
  /** 绑定弹性伸缩组 {@link V20211109.BindAutoScalingGroupRequest} {@link V20211109.BindAutoScalingGroupResponse} */
  BindAutoScalingGroup(data: V20211109.BindAutoScalingGroupRequest, config: AxiosRequestConfig & V20211109.VersionHeader): AxiosPromise<V20211109.BindAutoScalingGroupResponse>;
  /** 创建集群 {@link V20211109.CreateClusterRequest} {@link V20211109.CreateClusterResponse} */
  CreateCluster(data: V20211109.CreateClusterRequest, config: AxiosRequestConfig & V20211109.VersionHeader): AxiosPromise<V20211109.CreateClusterResponse>;
  /** 删除集群 {@link V20211109.DeleteClusterRequest} {@link V20211109.DeleteClusterResponse} */
  DeleteCluster(data: V20211109.DeleteClusterRequest, config: AxiosRequestConfig & V20211109.VersionHeader): AxiosPromise<V20211109.DeleteClusterResponse>;
  /** 查询集群列表 {@link V20211109.DescribeClustersRequest} {@link V20211109.DescribeClustersResponse} */
  DescribeClusters(data: V20211109.DescribeClustersRequest, config: AxiosRequestConfig & V20211109.VersionHeader): AxiosPromise<V20211109.DescribeClustersResponse>;
}

export declare type Versions = ["2023-03-21", "2022-04-01", "2021-11-09"];

export default Thpc;
