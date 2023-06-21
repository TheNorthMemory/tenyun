/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 符合条件的伸缩活动相关信息。 */
declare interface Activity {
  /** 伸缩组ID。 */
  AutoScalingGroupId: string;
  /** 伸缩活动ID。 */
  ActivityId: string;
  /** 伸缩活动类型。取值如下：SCALE_OUT：扩容活动SCALE_IN：缩容活动ATTACH_INSTANCES：添加实例REMOVE_INSTANCES：销毁实例DETACH_INSTANCES：移出实例TERMINATE_INSTANCES_UNEXPECTEDLY：实例在CVM控制台被销毁REPLACE_UNHEALTHY_INSTANCE：替换不健康实例START_INSTANCES：开启实例STOP_INSTANCES：关闭实例INVOKE_COMMAND：执行命令 */
  ActivityType: string;
  /** 伸缩活动状态。取值如下：INIT：初始化中RUNNING：运行中SUCCESSFUL：活动成功PARTIALLY_SUCCESSFUL：活动部分成功FAILED：活动失败CANCELLED：活动取消 */
  StatusCode: string;
  /** 伸缩活动状态描述。 */
  StatusMessage: string;
  /** 伸缩活动起因。 */
  Cause: string;
  /** 伸缩活动描述。 */
  Description: string;
  /** 伸缩活动开始时间。 */
  StartTime: string;
  /** 伸缩活动结束时间。 */
  EndTime: string;
  /** 伸缩活动创建时间。 */
  CreatedTime: string;
  /** 伸缩活动相关实例信息集合。 */
  ActivityRelatedInstanceSet: ActivtyRelatedInstance[];
  /** 伸缩活动状态简要描述。 */
  StatusMessageSimplified: string;
  /** 伸缩活动中生命周期挂钩的执行结果。 */
  LifecycleActionResultSet: LifecycleActionResultInfo[];
  /** 伸缩活动状态详细描述。 */
  DetailedStatusMessageSet: DetailedStatusMessage[];
  /** 执行命令结果。 */
  InvocationResultSet: InvocationResult[];
}

/** 与本次伸缩活动相关的实例信息。 */
declare interface ActivtyRelatedInstance {
  /** 实例ID。 */
  InstanceId: string;
  /** 实例在伸缩活动中的状态。取值如下：INIT：初始化中RUNNING：实例操作中SUCCESSFUL：活动成功FAILED：活动失败 */
  InstanceStatus: string;
}

/** 伸缩配置建议。 */
declare interface Advice {
  /** 问题描述。 */
  Problem: string;
  /** 问题详情。 */
  Detail: string;
  /** 建议解决方案。 */
  Solution: string;
  /** 伸缩建议警告级别。取值范围：WARNING：警告级别CRITICAL：严重级别 */
  Level?: string;
}

/** 伸缩组配置建议。 */
declare interface AutoScalingAdvice {
  /** 伸缩组ID。 */
  AutoScalingGroupId: string;
  /** 伸缩组警告级别。取值范围：NORMAL：正常WARNING：警告级别CRITICAL：严重级别 */
  Level: string;
  /** 伸缩组配置建议集合。 */
  Advices: Advice[];
}

/** 伸缩组 */
declare interface AutoScalingGroup {
  /** 伸缩组ID */
  AutoScalingGroupId: string;
  /** 伸缩组名称 */
  AutoScalingGroupName: string;
  /** 伸缩组当前状态。取值范围：NORMAL：正常CVM_ABNORMAL：启动配置异常LB_ABNORMAL：负载均衡器异常LB_LISTENER_ABNORMAL：负载均衡器监听器异常LB_LOCATION_ABNORMAL：负载均衡器监听器转发配置异常VPC_ABNORMAL：VPC网络异常SUBNET_ABNORMAL：VPC子网异常INSUFFICIENT_BALANCE：余额不足LB_BACKEND_REGION_NOT_MATCH：CLB实例后端地域与AS服务所在地域不匹配LB_BACKEND_VPC_NOT_MATCH：CLB实例VPC与伸缩组VPC不匹配 */
  AutoScalingGroupStatus: string;
  /** 创建时间，采用UTC标准计时 */
  CreatedTime: string;
  /** 默认冷却时间，单位秒 */
  DefaultCooldown: number;
  /** 期望实例数 */
  DesiredCapacity: number;
  /** 启用状态，取值包括`ENABLED`和`DISABLED` */
  EnabledStatus: string;
  /** 应用型负载均衡器列表 */
  ForwardLoadBalancerSet: ForwardLoadBalancer[];
  /** 实例数量 */
  InstanceCount: number;
  /** 状态为`IN_SERVICE`实例的数量 */
  InServiceInstanceCount: number;
  /** 启动配置ID */
  LaunchConfigurationId: string;
  /** 启动配置名称 */
  LaunchConfigurationName: string;
  /** 传统型负载均衡器ID列表 */
  LoadBalancerIdSet: string[];
  /** 最大实例数 */
  MaxSize: number;
  /** 最小实例数 */
  MinSize: number;
  /** 项目ID */
  ProjectId: number;
  /** 子网ID列表 */
  SubnetIdSet: string[];
  /** 销毁策略 */
  TerminationPolicySet: string[];
  /** VPC标识 */
  VpcId: string;
  /** 可用区列表 */
  ZoneSet: string[];
  /** 重试策略 */
  RetryPolicy: string;
  /** 伸缩组是否处于伸缩活动中，`IN_ACTIVITY`表示处于伸缩活动中，`NOT_IN_ACTIVITY`表示不处于伸缩活动中。 */
  InActivityStatus: string;
  /** 伸缩组标签列表 */
  Tags: Tag[];
  /** 服务设置 */
  ServiceSettings: ServiceSettings;
  /** 实例具有IPv6地址数量的配置 */
  Ipv6AddressCount: number;
  /** 多可用区/子网策略。 PRIORITY，按照可用区/子网列表的顺序，作为优先级来尝试创建实例，如果优先级最高的可用区/子网可以创建成功，则总在该可用区/子网创建。 EQUALITY：每次选择当前实例数最少的可用区/子网进行扩容，使得每个可用区/子网都有机会发生扩容，多次扩容出的实例会打散到多个可用区/子网。 */
  MultiZoneSubnetPolicy: string;
  /** 伸缩组实例健康检查类型，取值如下：CVM：根据实例网络状态判断实例是否处于不健康状态，不健康的网络状态即发生实例 PING 不可达事件，详细判断标准可参考[实例健康检查](https://cloud.tencent.com/document/product/377/8553)CLB：根据 CLB 的健康检查状态判断实例是否处于不健康状态，CLB健康检查原理可参考[健康检查](https://cloud.tencent.com/document/product/214/6097) */
  HealthCheckType: string;
  /** CLB健康检查宽限期 */
  LoadBalancerHealthCheckGracePeriod: number;
  /** 实例分配策略，取值包括 LAUNCH_CONFIGURATION 和 SPOT_MIXED。 LAUNCH_CONFIGURATION，代表传统的按照启动配置模式。 SPOT_MIXED，代表竞价混合模式。目前仅支持启动配置为按量计费模式时使用混合模式，混合模式下，伸缩组将根据设定扩容按量或竞价机型。使用混合模式时，关联的启动配置的计费类型不可被修改。 */
  InstanceAllocationPolicy: string;
  /** 竞价混合模式下，各计费类型实例的分配策略。仅当 InstanceAllocationPolicy 取 SPOT_MIXED 时才会返回有效值。 */
  SpotMixedAllocationPolicy: SpotMixedAllocationPolicy;
  /** 容量重平衡功能，仅对伸缩组内的竞价实例有效。取值范围： TRUE，开启该功能，当伸缩组内的竞价实例即将被竞价实例服务自动回收前，AS 主动发起竞价实例销毁流程，如果有配置过缩容 hook，则销毁前 hook 会生效。销毁流程启动后，AS 会异步开启一个扩容活动，用于补齐期望实例数。 FALSE，不开启该功能，则 AS 等待竞价实例被销毁后才会去扩容补齐伸缩组期望实例数。 */
  CapacityRebalance: boolean;
}

/** 伸缩组简明信息。 */
declare interface AutoScalingGroupAbstract {
  /** 伸缩组ID。 */
  AutoScalingGroupId: string;
  /** 伸缩组名称。 */
  AutoScalingGroupName: string;
}

/** 弹性伸缩事件通知 */
declare interface AutoScalingNotification {
  /** 伸缩组ID。 */
  AutoScalingGroupId: string;
  /** 用户组ID列表。 */
  NotificationUserGroupIds: string[];
  /** 通知事件列表。 */
  NotificationTypes: string[];
  /** 事件通知ID。 */
  AutoScalingNotificationId: string;
  /** 通知接收端类型。 */
  TargetType: string;
  /** CMQ 队列名。 */
  QueueName: string;
  /** CMQ 主题名。 */
  TopicName: string;
}

/** 启动配置的数据盘配置信息。若不指定该参数，则默认不购买数据盘，当前仅支持购买的时候指定一个数据盘。 */
declare interface DataDisk {
  /** 数据盘类型。数据盘类型限制详见[云硬盘类型](https://cloud.tencent.com/document/product/362/2353)。取值范围：LOCAL_BASIC：本地硬盘LOCAL_SSD：本地SSD硬盘CLOUD_BASIC：普通云硬盘CLOUD_PREMIUM：高性能云硬盘CLOUD_SSD：SSD云硬盘CLOUD_HSSD：增强型SSD云硬盘CLOUD_TSSD：极速型SSD云硬盘默认取值与系统盘类型（SystemDisk.DiskType）保持一致。 */
  DiskType?: string | null;
  /** 数据盘大小，单位：GB。最小调整步长为10G，不同数据盘类型取值范围不同，具体限制详见：[CVM实例配置](https://cloud.tencent.com/document/product/213/2177)。默认值为0，表示不购买数据盘。更多限制详见产品文档。 */
  DiskSize?: number | null;
  /** 数据盘快照 ID，类似 `snap-l8psqwnt`。 */
  SnapshotId?: string | null;
  /** 数据盘是否随子机销毁。取值范围：TRUE：子机销毁时，销毁数据盘，只支持按小时后付费云盘FALSE：子机销毁时，保留数据盘 */
  DeleteWithInstance?: boolean | null;
  /** 数据盘是否加密。取值范围：TRUE：加密FALSE：不加密 */
  Encrypt?: boolean | null;
  /** 云硬盘性能，单位：MB/s。使用此参数可给云硬盘购买额外的性能，功能介绍和类型限制详见：[增强型 SSD 云硬盘额外性能说明](https://cloud.tencent.com/document/product/362/51896)。当前仅支持极速型云盘（CLOUD_TSSD）和增强型SSD云硬盘（CLOUD_HSSD）且 需容量 > 460GB。 */
  ThroughputPerformance?: number | null;
}

/** 伸缩活动状态详细描述。 */
declare interface DetailedStatusMessage {
  /** 错误类型。 */
  Code: string;
  /** 可用区信息。 */
  Zone: string;
  /** 实例ID。 */
  InstanceId: string;
  /** 实例计费类型。 */
  InstanceChargeType: string;
  /** 子网ID。 */
  SubnetId: string;
  /** 错误描述。 */
  Message: string;
  /** 实例类型。 */
  InstanceType: string;
}

/** 描述了实例的增强服务启用情况与其设置，如云安全，云监控，自动化助手等实例 Agent。 */
declare interface EnhancedService {
  /** 开启云安全服务。若不指定该参数，则默认开启云安全服务。 */
  SecurityService?: RunSecurityServiceEnabled;
  /** 开启云监控服务。若不指定该参数，则默认开启云监控服务。 */
  MonitorService?: RunMonitorServiceEnabled;
  /** 该参数已废弃，查询时会返回空值，请勿使用。 */
  AutomationService?: RunAutomationServiceEnabled[];
  /** 开启自动化助手服务。若不指定该参数，则默认逻辑与CVM保持一致。 */
  AutomationToolsService?: RunAutomationServiceEnabled;
}

/** >描述键值对过滤器，用于条件过滤查询。例如过滤ID、名称、状态等> * 若存在多个`Filter`时，`Filter`间的关系为逻辑与（`AND`）关系。> * 若同一个`Filter`存在多个`Values`，同一`Filter`下`Values`间的关系为逻辑或（`OR`）关系。>> 以[DescribeInstances](https://cloud.tencent.com/document/api/213/15728)接口的`Filter`为例。若我们需要查询可用区（`zone`）为广州一区 ***并且*** 实例计费模式（`instance-charge-type`）为包年包月 ***或者*** 按量计费的实例时，可如下实现：```Filters.0.Name=zone&Filters.0.Values.0=ap-guangzhou-1&Filters.1.Name=instance-charge-type&Filters.1.Values.0=PREPAID&Filters.1.Values.1=POSTPAID_BY_HOUR``` */
declare interface Filter {
  /** 需要过滤的字段。 */
  Name: string;
  /** 字段的过滤值。 */
  Values: string[];
}

/** 应用型负载均衡器 */
declare interface ForwardLoadBalancer {
  /** 负载均衡器ID */
  LoadBalancerId: string;
  /** 应用型负载均衡监听器 ID */
  ListenerId: string;
  /** 目标规则属性列表 */
  TargetAttributes: TargetAttribute[];
  /** 转发规则ID，注意：针对七层监听器此参数必填 */
  LocationId?: string;
  /** 负载均衡实例所属地域，默认取AS服务所在地域。格式与公共参数Region相同，如："ap-guangzhou"。 */
  Region?: string;
}

/** 应用型负载均衡器标识信息 */
declare interface ForwardLoadBalancerIdentification {
  /** 负载均衡器ID */
  LoadBalancerId: string;
  /** 应用型负载均衡监听器 ID */
  ListenerId: string;
  /** 转发规则ID，注意：针对七层监听器此参数必填 */
  LocationId?: string;
}

/** 云服务器主机名（HostName）的相关设置 */
declare interface HostNameSettings {
  /** 云服务器的主机名。 点号（.）和短横线（-）不能作为 HostName 的首尾字符，不能连续使用。 不支持 Windows 实例。 其他类型（Linux 等）实例：字符长度为[2, 40]，允许支持多个点号，点之间为一段，每段允许字母（不限制大小写）、数字和短横线（-）组成。不允许为纯数字。 */
  HostName: string | null;
  /** 云服务器主机名的风格，取值范围包括 ORIGINAL 和 UNIQUE，默认为 ORIGINAL。 ORIGINAL，AS 直接将入参中所填的 HostName 传递给 CVM，CVM 可能会对 HostName 追加序列号，伸缩组中实例的 HostName 会出现冲突的情况。 UNIQUE，入参所填的 HostName 相当于主机名前缀，AS 和 CVM 会对其进行拓展，伸缩组中实例的 HostName 可以保证唯一。 */
  HostNameStyle?: string | null;
}

/** 描述了启动配置创建实例的IPv6地址公网可访问性，声明了IPv6地址公网使用计费模式，最大带宽等 */
declare interface IPv6InternetAccessible {
  /** 网络计费模式。取值包括TRAFFIC_POSTPAID_BY_HOUR、BANDWIDTH_PACKAGE，默认取值为TRAFFIC_POSTPAID_BY_HOUR。查看当前账户类型可参考[账户类型说明](https://cloud.tencent.com/document/product/1199/49090)。 IPv6对标准账户类型支持TRAFFIC_POSTPAID_BY_HOUR。 IPv6对传统账户类型支持BANDWIDTH_PACKAGE。 */
  InternetChargeType?: string | null;
  /** 公网出带宽上限，单位：Mbps。默认值：0，此时不为IPv6分配公网带宽。不同机型、可用区、计费模式的带宽上限范围不一致，具体限制详见[公网带宽上限](https://cloud.tencent.com/document/product/213/12523)。 */
  InternetMaxBandwidthOut?: number | null;
  /** 带宽包ID。可通过[DescribeBandwidthPackages](https://cloud.tencent.com/document/api/215/19209)接口返回值中的`BandwidthPackageId`获取。 */
  BandwidthPackageId?: string | null;
}

/** 实例信息 */
declare interface Instance {
  /** 实例ID */
  InstanceId: string;
  /** 伸缩组ID */
  AutoScalingGroupId: string;
  /** 启动配置ID */
  LaunchConfigurationId: string;
  /** 启动配置名称 */
  LaunchConfigurationName: string;
  /** 生命周期状态，取值如下：IN_SERVICE：运行中CREATING：创建中CREATION_FAILED：创建失败TERMINATING：中止中TERMINATION_FAILED：中止失败ATTACHING：绑定中ATTACH_FAILED：绑定失败DETACHING：解绑中DETACH_FAILED：解绑失败ATTACHING_LB：绑定LB中DETACHING_LB：解绑LB中MODIFYING_LB：修改LB中STARTING：开机中START_FAILED：开机失败STOPPING：关机中STOP_FAILED：关机失败STOPPED：已关机IN_LAUNCHING_HOOK：扩容生命周期挂钩中IN_TERMINATING_HOOK：缩容生命周期挂钩中 */
  LifeCycleState: string;
  /** 健康状态，取值包括HEALTHY和UNHEALTHY */
  HealthStatus: string;
  /** 是否加入缩容保护 */
  ProtectedFromScaleIn: boolean;
  /** 可用区 */
  Zone: string;
  /** 创建类型，取值包括AUTO_CREATION, MANUAL_ATTACHING。 */
  CreationType: string;
  /** 实例加入时间 */
  AddTime: string;
  /** 实例类型 */
  InstanceType: string;
  /** 版本号 */
  VersionNumber: number;
  /** 伸缩组名称 */
  AutoScalingGroupName: string;
  /** 预热状态，取值如下：WAITING_ENTER_WARMUP：等待进入预热NO_NEED_WARMUP：无需预热IN_WARMUP：预热中AFTER_WARMUP：完成预热 */
  WarmupStatus: string;
  /** 置放群组id，仅支持指定一个。 */
  DisasterRecoverGroupIds?: string[] | null;
}

/** 描述了实例的计费模式 */
declare interface InstanceChargePrepaid {
  /** 购买实例的时长，单位：月。取值范围：1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 24, 36。 */
  Period: number;
  /** 自动续费标识。取值范围：NOTIFY_AND_AUTO_RENEW：通知过期且自动续费NOTIFY_AND_MANUAL_RENEW：通知过期不自动续费DISABLE_NOTIFY_AND_MANUAL_RENEW：不通知过期不自动续费默认取值：NOTIFY_AND_MANUAL_RENEW。若该参数指定为NOTIFY_AND_AUTO_RENEW，在账户余额充足的情况下，实例到期后将按月自动续费。 */
  RenewFlag?: string;
}

/** 云服务器实例名称（InstanceName）的相关设置 */
declare interface InstanceNameSettings {
  /** 云服务器的实例名。点号（.）和短横线（-）不能作为 InstanceName 的首尾字符，不能连续使用。字符长度为[2, 40]，允许支持多个点号，点之间为一段，每段允许字母（不限制大小写）、数字和短横线（-）组成。不允许为纯数字。 */
  InstanceName: string;
  /** 云服务器实例名的风格，取值范围包括 ORIGINAL 和 UNIQUE，默认为 ORIGINAL。ORIGINAL，AS 直接将入参中所填的 InstanceName 传递给 CVM，CVM 可能会对 InstanceName 追加序列号，伸缩组中实例的 InstanceName 会出现冲突的情况。UNIQUE，入参所填的 InstanceName 相当于实例名前缀，AS 和 CVM 会对其进行拓展，伸缩组中实例的 InstanceName 可以保证唯一。 */
  InstanceNameStyle?: string;
}

/** 实例标签。通过指定该参数，可以为扩容的实例绑定标签。 */
declare interface InstanceTag {
  /** 标签键 */
  Key: string;
  /** 标签值 */
  Value: string;
}

/** 描述了启动配置创建实例的公网可访问性，声明了实例的公网使用计费模式，最大带宽等 */
declare interface InternetAccessible {
  /** 网络计费类型。取值范围：BANDWIDTH_PREPAID：预付费按带宽结算TRAFFIC_POSTPAID_BY_HOUR：流量按小时后付费BANDWIDTH_POSTPAID_BY_HOUR：带宽按小时后付费BANDWIDTH_PACKAGE：带宽包用户默认取值：TRAFFIC_POSTPAID_BY_HOUR。 */
  InternetChargeType?: string | null;
  /** 公网出带宽上限，单位：Mbps。默认值：0Mbps。不同机型带宽上限范围不一致，具体限制详见[购买网络带宽](https://cloud.tencent.com/document/product/213/509)。 */
  InternetMaxBandwidthOut?: number | null;
  /** 是否分配公网IP。取值范围：TRUE：表示分配公网IPFALSE：表示不分配公网IP当公网带宽大于0Mbps时，可自由选择开通与否，默认开通公网IP；当公网带宽为0，则不允许分配公网IP。 */
  PublicIpAssigned?: boolean | null;
  /** 带宽包ID。可通过[DescribeBandwidthPackages](https://cloud.tencent.com/document/api/215/19209)接口返回值中的`BandwidthPackageId`获取。 */
  BandwidthPackageId?: string | null;
}

/** 执行命令结果。 */
declare interface InvocationResult {
  /** 实例ID。 */
  InstanceId: string | null;
  /** 执行活动ID。 */
  InvocationId: string | null;
  /** 执行任务ID。 */
  InvocationTaskId: string | null;
  /** 命令ID。 */
  CommandId: string | null;
  /** 执行任务状态。 */
  TaskStatus: string | null;
  /** 执行异常信息。 */
  ErrorMessage: string | null;
}

/** 符合条件的启动配置信息的集合。 */
declare interface LaunchConfiguration {
  /** 实例所属项目ID。 */
  ProjectId: number;
  /** 启动配置ID。 */
  LaunchConfigurationId: string;
  /** 启动配置名称。 */
  LaunchConfigurationName: string;
  /** 实例机型。 */
  InstanceType: string;
  /** 实例系统盘配置信息。 */
  SystemDisk: SystemDisk;
  /** 实例数据盘配置信息。 */
  DataDisks: DataDisk[];
  /** 实例登录设置。 */
  LoginSettings: LimitedLoginSettings;
  /** 公网带宽相关信息设置。 */
  InternetAccessible: InternetAccessible;
  /** 实例所属安全组。 */
  SecurityGroupIds: string[];
  /** 启动配置关联的伸缩组。 */
  AutoScalingGroupAbstractSet: AutoScalingGroupAbstract[];
  /** 自定义数据。 */
  UserData: string | null;
  /** 启动配置创建时间。 */
  CreatedTime: string;
  /** 实例的增强服务启用情况与其设置。 */
  EnhancedService: EnhancedService;
  /** 镜像ID。 */
  ImageId: string;
  /** 启动配置当前状态。取值范围：NORMAL：正常IMAGE_ABNORMAL：启动配置镜像异常CBS_SNAP_ABNORMAL：启动配置数据盘快照异常SECURITY_GROUP_ABNORMAL：启动配置安全组异常 */
  LaunchConfigurationStatus: string;
  /** 实例计费类型，CVM默认值按照POSTPAID_BY_HOUR处理。POSTPAID_BY_HOUR：按小时后付费SPOTPAID：竞价付费 */
  InstanceChargeType: string;
  /** 实例的市场相关选项，如竞价实例相关参数，若指定实例的付费模式为竞价付费则该参数必传。 */
  InstanceMarketOptions: InstanceMarketOptionsRequest | null;
  /** 实例机型列表。 */
  InstanceTypes: string[];
  /** 实例标签列表。扩容出来的实例会自动带上标签，最多支持10个标签。 */
  InstanceTags: InstanceTag[];
  /** 标签列表。 */
  Tags: Tag[] | null;
  /** 版本号。 */
  VersionNumber: number;
  /** 更新时间。 */
  UpdatedTime: string;
  /** CAM角色名称。可通过DescribeRoleList接口返回值中的roleName获取。 */
  CamRoleName: string;
  /** 上次操作时，InstanceTypesCheckPolicy 取值。 */
  LastOperationInstanceTypesCheckPolicy: string;
  /** 云服务器主机名（HostName）的相关设置。 */
  HostNameSettings: HostNameSettings;
  /** 云服务器实例名（InstanceName）的相关设置。 */
  InstanceNameSettings: InstanceNameSettings;
  /** 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月实例的购买时长、是否设置自动续费等属性。若指定实例的付费模式为预付费则该参数必传。 */
  InstanceChargePrepaid: InstanceChargePrepaid;
  /** 云盘类型选择策略。取值范围：ORIGINAL：使用设置的云盘类型AUTOMATIC：自动选择当前可用区下可用的云盘类型 */
  DiskTypePolicy: string;
  /** 高性能计算集群ID。注意：此字段默认为空。 */
  HpcClusterId: string;
  /** IPv6公网带宽相关信息设置。 */
  IPv6InternetAccessible: IPv6InternetAccessible;
}

/** 生命周期挂钩动作的执行结果信息。 */
declare interface LifecycleActionResultInfo {
  /** 生命周期挂钩标识。 */
  LifecycleHookId: string;
  /** 实例标识。 */
  InstanceId: string;
  /** 执行活动ID。可通过TAT的[查询执行活动](https://cloud.tencent.com/document/api/1340/52679)API查询具体的执行结果。 */
  InvocationId: string;
  /** 命令调用的结果，表示执行TAT命令是否成功。SUCCESSFUL 命令调用成功，不代表命令执行成功，执行的具体情况可根据InvocationId进行查询FAILED 命令调用失败NONE */
  InvokeCommandResult: string;
  /** 通知的结果，表示通知CMQ/TDMQ是否成功。SUCCESSFUL 通知成功FAILED 通知失败NONE */
  NotificationResult: string;
  /** 生命周期挂钩动作的执行结果，取值包括 CONTINUE、ABANDON。 */
  LifecycleActionResult: string;
  /** 结果的原因。HEARTBEAT_TIMEOUT 由于心跳超时，结果根据DefaultResult设置。NOTIFICATION_FAILURE 由于发送通知失败，结果根据DefaultResult设置。CALL_INTERFACE 调用了接口CompleteLifecycleAction设置结果。ANOTHER_ACTION_ABANDON 另一个生命周期操作的结果已设置为“ABANDON”。COMMAND_CALL_FAILURE 由于命令调用失败，结果根据DefaultResult设置。COMMAND_EXEC_FINISH 命令执行完成。COMMAND_EXEC_FAILURE 由于命令执行失败，结果根据DefaultResult设置。COMMAND_EXEC_RESULT_CHECK_FAILURE 由于命令结果检查失败，结果根据DefaultResult设置。 */
  ResultReason: string;
}

/** 远程命令执行对象。 */
declare interface LifecycleCommand {
  /** 远程命令ID。若选择执行命令，则此项必填。 */
  CommandId: string | null;
  /** 自定义参数。字段类型为 json encoded string。如：{"varA": "222"}。key为自定义参数名称，value为该参数的默认取值。kv均为字符串型。如果未提供该参数取值，将使用 Command 的 DefaultParameters 进行替换。自定义参数最多20个。自定义参数名称需符合以下规范：字符数目上限64，可选范围【a-zA-Z0-9-_】。 */
  Parameters?: string | null;
}

/** 生命周期挂钩 */
declare interface LifecycleHook {
  /** 生命周期挂钩ID */
  LifecycleHookId: string;
  /** 生命周期挂钩名称 */
  LifecycleHookName: string;
  /** 伸缩组ID */
  AutoScalingGroupId: string;
  /** 生命周期挂钩默认结果 */
  DefaultResult: string;
  /** 生命周期挂钩等待超时时间 */
  HeartbeatTimeout: number;
  /** 生命周期挂钩适用场景 */
  LifecycleTransition: string;
  /** 通知目标的附加信息 */
  NotificationMetadata: string;
  /** 创建时间 */
  CreatedTime: string;
  /** 通知目标 */
  NotificationTarget: NotificationTarget;
  /** 生命周期挂钩适用场景 */
  LifecycleTransitionType: string;
  /** 远程命令执行对象 */
  LifecycleCommand: LifecycleCommand | null;
}

/** 描述了实例登录相关配置与信息，出于安全性考虑，不会描述敏感信息。 */
declare interface LimitedLoginSettings {
  /** 密钥ID列表。 */
  KeyIds: string[];
}

/** 描述了实例登录相关配置与信息。 */
declare interface LoginSettings {
  /** 实例登录密码。不同操作系统类型密码复杂度限制不一样，具体如下：Linux实例密码必须8到16位，至少包括两项[a-z，A-Z]、[0-9] 和 [( ) ` ~ ! @ # $ % ^ & * - + = | { } [ ] : ; ' , . ? / ]中的特殊符号。Windows实例密码必须12到16位，至少包括三项[a-z]，[A-Z]，[0-9] 和 [( ) ` ~ ! @ # $ % ^ & * - + = { } [ ] : ; ' , . ? /]中的特殊符号。若不指定该参数，则由系统随机生成密码，并通过站内信方式通知到用户。 */
  Password?: string | null;
  /** 密钥ID列表。关联密钥后，就可以通过对应的私钥来访问实例；KeyId可通过接口DescribeKeyPairs获取，密钥与密码不能同时指定，同时Windows操作系统不支持指定密钥。当前仅支持购买的时候指定一个密钥。 */
  KeyIds?: string[];
  /** 保持镜像的原始设置。该参数与Password或KeyIds.N不能同时指定。只有使用自定义镜像、共享镜像或外部导入镜像创建实例时才能指定该参数为TRUE。取值范围：TRUE：表示保持镜像的登录设置FALSE：表示不保持镜像的登录设置默认取值：FALSE。 */
  KeepImageLogin?: boolean | null;
}

/** 弹性伸缩告警指标 */
declare interface MetricAlarm {
  /** 比较运算符，可选值：GREATER_THAN：大于GREATER_THAN_OR_EQUAL_TO：大于或等于LESS_THAN：小于 LESS_THAN_OR_EQUAL_TO：小于或等于 EQUAL_TO：等于 NOT_EQUAL_TO：不等于 */
  ComparisonOperator: string;
  /** 指标名称，可选字段如下：CPU_UTILIZATION：CPU利用率MEM_UTILIZATION：内存利用率LAN_TRAFFIC_OUT：内网出带宽LAN_TRAFFIC_IN：内网入带宽WAN_TRAFFIC_OUT：外网出带宽WAN_TRAFFIC_IN：外网入带宽 */
  MetricName: string;
  /** 告警阈值：CPU_UTILIZATION：[1, 100]，单位：%MEM_UTILIZATION：[1, 100]，单位：%LAN_TRAFFIC_OUT：>0，单位：Mbps LAN_TRAFFIC_IN：>0，单位：MbpsWAN_TRAFFIC_OUT：>0，单位：MbpsWAN_TRAFFIC_IN：>0，单位：Mbps */
  Threshold: number;
  /** 时间周期，单位：秒，取值枚举值为60、300。 */
  Period: number;
  /** 重复次数。取值范围 [1, 10] */
  ContinuousTime: number;
  /** 统计类型，可选字段如下：AVERAGE：平均值MAXIMUM：最大值MINIMUM：最小值 默认取值：AVERAGE */
  Statistic?: string;
  /** 精确告警阈值，本参数不作为入参输入，仅用作查询接口出参：CPU_UTILIZATION：(0, 100]，单位：%MEM_UTILIZATION：(0, 100]，单位：%LAN_TRAFFIC_OUT：>0，单位：Mbps LAN_TRAFFIC_IN：>0，单位：MbpsWAN_TRAFFIC_OUT：>0，单位：MbpsWAN_TRAFFIC_IN：>0，单位：Mbps */
  PreciseThreshold?: number;
}

/** 通知目标 */
declare interface NotificationTarget {
  /** 目标类型，取值范围包括`CMQ_QUEUE`、`CMQ_TOPIC`、`TDMQ_CMQ_QUEUE`、`TDMQ_CMQ_TOPIC`。 CMQ_QUEUE，指腾讯云消息队列-队列模型。 CMQ_TOPIC，指腾讯云消息队列-主题模型。 TDMQ_CMQ_QUEUE，指腾讯云 TDMQ 消息队列-队列模型。 TDMQ_CMQ_TOPIC，指腾讯云 TDMQ 消息队列-主题模型。 */
  TargetType: string;
  /** 队列名称，如果`TargetType`取值为`CMQ_QUEUE` 或 `TDMQ_CMQ_QUEUE`，则本字段必填。 */
  QueueName?: string;
  /** 主题名称，如果`TargetType`取值为`CMQ_TOPIC` 或 `TDMQ_CMQ_TOPIC`，则本字段必填。 */
  TopicName?: string;
}

/** 描述了 “自动化助手” 服务相关的信息 */
declare interface RunAutomationServiceEnabled {
  /** 是否开启[自动化助手](https://cloud.tencent.com/document/product/1340)服务。取值范围：TRUE：表示开启自动化助手服务FALSE：表示不开启自动化助手服务 */
  Enabled?: boolean | null;
}

/** 描述了 “云监控” 服务相关的信息。 */
declare interface RunMonitorServiceEnabled {
  /** 是否开启[云监控](https://cloud.tencent.com/document/product/248)服务。取值范围：TRUE：表示开启云监控服务FALSE：表示不开启云监控服务默认取值：TRUE。 */
  Enabled?: boolean | null;
}

/** 描述了 “云安全” 服务相关的信息 */
declare interface RunSecurityServiceEnabled {
  /** 是否开启[云安全](https://cloud.tencent.com/document/product/296)服务。取值范围：TRUE：表示开启云安全服务FALSE：表示不开启云安全服务默认取值：TRUE。 */
  Enabled?: boolean | null;
}

/** 告警触发策略。 */
declare interface ScalingPolicy {
  /** 伸缩组ID。 */
  AutoScalingGroupId: string;
  /** 告警触发策略ID。 */
  AutoScalingPolicyId: string;
  /** 告警触发策略类型。取值：- SIMPLE：简单策略- TARGET_TRACKING：目标追踪策略 */
  ScalingPolicyType?: string;
  /** 告警触发策略名称。 */
  ScalingPolicyName: string;
  /** 告警触发后，期望实例数修改方式，仅适用于简单策略。取值范围：CHANGE_IN_CAPACITY：增加或减少若干期望实例数EXACT_CAPACITY：调整至指定期望实例数 PERCENT_CHANGE_IN_CAPACITY：按百分比调整期望实例数 */
  AdjustmentType: string;
  /** 告警触发后，期望实例数的调整值，仅适用于简单策略。 */
  AdjustmentValue: number;
  /** 冷却时间，仅适用于简单策略。 */
  Cooldown: number;
  /** 简单告警触发策略告警监控指标，仅适用于简单策略。 */
  MetricAlarm: MetricAlarm;
  /** 预定义监控项，仅适用于目标追踪策略。取值范围：ASG_AVG_CPU_UTILIZATION：平均CPU使用率ASG_AVG_LAN_TRAFFIC_OUT：平均内网出带宽ASG_AVG_LAN_TRAFFIC_IN：平均内网入带宽ASG_AVG_WAN_TRAFFIC_OUT：平均外网出带宽ASG_AVG_WAN_TRAFFIC_IN：平均外网出带宽 */
  PredefinedMetricType: string | null;
  /** 目标值，仅适用于目标追踪策略。ASG_AVG_CPU_UTILIZATION：[1, 100)，单位：%ASG_AVG_LAN_TRAFFIC_OUT：>0，单位：MbpsASG_AVG_LAN_TRAFFIC_IN：>0，单位：MbpsASG_AVG_WAN_TRAFFIC_OUT：>0，单位：MbpsASG_AVG_WAN_TRAFFIC_IN：>0，单位：Mbps */
  TargetValue: number | null;
  /** 实例预热时间，单位为秒，仅适用于目标追踪策略。取值范围为0-3600。 */
  EstimatedInstanceWarmup: number | null;
  /** 是否禁用缩容，仅适用于目标追踪策略。取值范围：true：目标追踪策略仅触发扩容false：目标追踪策略触发扩容和缩容 */
  DisableScaleIn: boolean | null;
  /** 告警监控指标列表，仅适用于目标追踪策略。 */
  MetricAlarms: MetricAlarm[] | null;
  /** 通知组ID，即为用户组ID集合。 */
  NotificationUserGroupIds: string[];
}

/** 描述定时任务的信息 */
declare interface ScheduledAction {
  /** 定时任务ID。 */
  ScheduledActionId: string;
  /** 定时任务名称。 */
  ScheduledActionName: string;
  /** 定时任务所在伸缩组ID。 */
  AutoScalingGroupId: string;
  /** 定时任务的开始时间。取值为`北京时间`（UTC+8），按照`ISO8601`标准，格式：`YYYY-MM-DDThh:mm:ss+08:00`。 */
  StartTime: string;
  /** 定时任务的重复方式。 */
  Recurrence: string;
  /** 定时任务的结束时间。取值为`北京时间`（UTC+8），按照`ISO8601`标准，格式：`YYYY-MM-DDThh:mm:ss+08:00`。 */
  EndTime: string;
  /** 定时任务设置的最大实例数。 */
  MaxSize: number;
  /** 定时任务设置的期望实例数。 */
  DesiredCapacity: number;
  /** 定时任务设置的最小实例数。 */
  MinSize: number;
  /** 定时任务的创建时间。取值为`UTC`时间，按照`ISO8601`标准，格式：`YYYY-MM-DDThh:mm:ssZ`。 */
  CreatedTime: string;
  /** 定时任务的执行类型。取值范围：CRONTAB：代表定时任务为重复执行。ONCE：代表定时任务为单次执行。 */
  ScheduledType: string;
}

/** 服务设置 */
declare interface ServiceSettings {
  /** 开启监控不健康替换服务。若开启则对于云监控标记为不健康的实例，弹性伸缩服务会进行替换。若不指定该参数，则默认为 False。 */
  ReplaceMonitorUnhealthy?: boolean;
  /** 取值范围： CLASSIC_SCALING：经典方式，使用创建、销毁实例来实现扩缩容； WAKE_UP_STOPPED_SCALING：扩容优先开机。扩容时优先对已关机的实例执行开机操作，若开机后实例数仍低于期望实例数，则创建实例，缩容仍采用销毁实例的方式。用户可以使用StopAutoScalingInstances接口来关闭伸缩组内的实例。监控告警触发的扩容仍将创建实例默认取值：CLASSIC_SCALING */
  ScalingMode?: string;
  /** 开启负载均衡不健康替换服务。若开启则对于负载均衡健康检查判断不健康的实例，弹性伸缩服务会进行替换。若不指定该参数，则默认为 False。 */
  ReplaceLoadBalancerUnhealthy?: boolean;
}

/** 竞价相关选项 */
declare interface SpotMarketOptions {
  /** 竞价出价，例如“1.05” */
  MaxPrice: string;
  /** 竞价请求类型，当前仅支持类型：one-time，默认值为one-time */
  SpotInstanceType?: string | null;
}

/** 竞价混合模式下，各计费类型实例的分配策略。包括按量计费实例和竞价计费实例。 */
declare interface SpotMixedAllocationPolicy {
  /** 混合模式下，基础容量的大小，基础容量部分固定为按量计费实例。默认值 0，最大不可超过伸缩组的最大实例数。 */
  BaseCapacity?: number | null;
  /** 超出基础容量部分，按量计费实例所占的比例。取值范围 [0, 100]，0 代表超出基础容量的部分仅生产竞价实例，100 代表仅生产按量实例，默认值为 70。按百分比计算按量实例数时，向上取整。比如，总期望实例数取 3，基础容量取 1，超基础部分按量百分比取 1，则最终按量 2 台（1 台来自基础容量，1 台按百分比向上取整得到），竞价 1台。 */
  OnDemandPercentageAboveBaseCapacity?: number | null;
  /** 混合模式下，竞价实例的分配策略。取值包括 COST_OPTIMIZED 和 CAPACITY_OPTIMIZED，默认取 COST_OPTIMIZED。 COST_OPTIMIZED，成本优化策略。对于启动配置内的所有机型，按照各机型在各可用区的每核单价由小到大依次尝试。优先尝试购买每核单价最便宜的，如果购买失败则尝试购买次便宜的，以此类推。 CAPACITY_OPTIMIZED，容量优化策略。对于启动配置内的所有机型，按照各机型在各可用区的库存情况由大到小依次尝试。优先尝试购买剩余库存最大的机型，这样可尽量降低竞价实例被动回收的发生概率。 */
  SpotAllocationStrategy?: string | null;
  /** 按量实例替补功能。取值范围： TRUE，开启该功能，当所有竞价机型因库存不足等原因全部购买失败后，尝试购买按量实例。 FALSE，不开启该功能，伸缩组在需要扩容竞价实例时仅尝试所配置的竞价机型。默认取值： TRUE。 */
  CompensateWithBaseInstance?: boolean | null;
}

/** 启动配置的系统盘配置信息。若不指定该参数，则按照系统默认值进行分配。 */
declare interface SystemDisk {
  /** 系统盘类型。系统盘类型限制详见[云硬盘类型](https://cloud.tencent.com/document/product/362/2353)。取值范围：LOCAL_BASIC：本地硬盘LOCAL_SSD：本地SSD硬盘CLOUD_BASIC：普通云硬盘CLOUD_PREMIUM：高性能云硬盘CLOUD_SSD：SSD云硬盘默认取值：CLOUD_PREMIUM。 */
  DiskType?: string | null;
  /** 系统盘大小，单位：GB。默认值为 50 */
  DiskSize?: number | null;
}

/** 资源类型及标签键值对 */
declare interface Tag {
  /** 标签键 */
  Key: string;
  /** 标签值 */
  Value: string;
  /** 标签绑定的资源类型，当前支持类型："auto-scaling-group */
  ResourceType?: string | null;
}

/** 负载均衡器目标属性 */
declare interface TargetAttribute {
  /** 端口 */
  Port: number;
  /** 权重 */
  Weight: number;
}

declare interface AttachInstancesRequest {
  /** 伸缩组ID */
  AutoScalingGroupId: string;
  /** CVM实例ID列表 */
  InstanceIds: string[];
}

declare interface AttachInstancesResponse {
  /** 伸缩活动ID */
  ActivityId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AttachLoadBalancersRequest {
  /** 伸缩组ID */
  AutoScalingGroupId: string;
  /** 传统型负载均衡器ID列表，每个伸缩组绑定传统型负载均衡器数量上限为20，LoadBalancerIds 和 ForwardLoadBalancers 二者同时最多只能指定一个 */
  LoadBalancerIds?: string[];
  /** 应用型负载均衡器列表，每个伸缩组绑定应用型负载均衡器数量上限为100，LoadBalancerIds 和 ForwardLoadBalancers 二者同时最多只能指定一个 */
  ForwardLoadBalancers?: ForwardLoadBalancer[];
}

declare interface AttachLoadBalancersResponse {
  /** 伸缩活动ID */
  ActivityId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ClearLaunchConfigurationAttributesRequest {
  /** 启动配置ID。 */
  LaunchConfigurationId: string;
  /** 是否清空数据盘信息，非必填，默认为 false。填 true 代表清空“数据盘”信息，清空后基于此新创建的云主机将不含有任何数据盘。 */
  ClearDataDisks?: boolean;
  /** 是否清空云服务器主机名相关设置信息，非必填，默认为 false。填 true 代表清空主机名设置信息，清空后基于此新创建的云主机将不设置主机名。 */
  ClearHostNameSettings?: boolean;
  /** 是否清空云服务器实例名相关设置信息，非必填，默认为 false。填 true 代表清空主机名设置信息，清空后基于此新创建的云主机将按照“as-{{ 伸缩组AutoScalingGroupName }}”进行设置。 */
  ClearInstanceNameSettings?: boolean;
  /** 是否清空置放群组信息，非必填，默认为 false。填 true 代表清空置放群组信息，清空后基于此新创建的云主机将不指定任何置放群组。 */
  ClearDisasterRecoverGroupIds?: boolean;
}

declare interface ClearLaunchConfigurationAttributesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CompleteLifecycleActionRequest {
  /** 生命周期挂钩ID */
  LifecycleHookId: string;
  /** 生命周期动作的结果，取值范围为“CONTINUE”或“ABANDON” */
  LifecycleActionResult: string;
  /** 实例ID，“InstanceId”和“LifecycleActionToken”必须填充其中一个 */
  InstanceId?: string;
  /** “InstanceId”和“LifecycleActionToken”必须填充其中一个 */
  LifecycleActionToken?: string;
}

declare interface CompleteLifecycleActionResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateAutoScalingGroupFromInstanceRequest {
  /** 伸缩组名称，在您账号中必须唯一。名称仅支持中文、英文、数字、下划线、分隔符"-"、小数点，最大长度不能超55个字节。 */
  AutoScalingGroupName: string;
  /** 实例ID */
  InstanceId: string;
  /** 最小实例数，取值范围为0-2000。 */
  MinSize: number;
  /** 最大实例数，取值范围为0-2000。 */
  MaxSize: number;
  /** 期望实例数，大小介于最小实例数和最大实例数之间。 */
  DesiredCapacity?: number;
  /** 是否继承实例标签，默认值为False */
  InheritInstanceTag?: boolean;
}

declare interface CreateAutoScalingGroupFromInstanceResponse {
  /** 伸缩组ID */
  AutoScalingGroupId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateAutoScalingGroupRequest {
  /** 伸缩组名称，在您账号中必须唯一。名称仅支持中文、英文、数字、下划线、分隔符"-"、小数点，最大长度不能超55个字节。 */
  AutoScalingGroupName: string;
  /** 启动配置ID */
  LaunchConfigurationId: string;
  /** 最大实例数，取值范围为0-2000。 */
  MaxSize: number;
  /** 最小实例数，取值范围为0-2000。 */
  MinSize: number;
  /** VPC ID，基础网络则填空字符串 */
  VpcId: string;
  /** 默认冷却时间，单位秒，默认值为300 */
  DefaultCooldown?: number;
  /** 期望实例数，大小介于最小实例数和最大实例数之间 */
  DesiredCapacity?: number;
  /** 传统负载均衡器ID列表，目前长度上限为20，LoadBalancerIds 和 ForwardLoadBalancers 二者同时最多只能指定一个 */
  LoadBalancerIds?: string[];
  /** 伸缩组内实例所属项目ID。不填为默认项目。 */
  ProjectId?: number;
  /** 应用型负载均衡器列表，目前长度上限为100，LoadBalancerIds 和 ForwardLoadBalancers 二者同时最多只能指定一个 */
  ForwardLoadBalancers?: ForwardLoadBalancer[];
  /** 子网ID列表，VPC场景下必须指定子网。多个子网以填写顺序为优先级，依次进行尝试，直至可以成功创建实例。 */
  SubnetIds?: string[];
  /** 销毁策略，目前长度上限为1。取值包括 OLDEST_INSTANCE 和 NEWEST_INSTANCE，默认取值为 OLDEST_INSTANCE。 OLDEST_INSTANCE 优先销毁伸缩组中最旧的实例。 NEWEST_INSTANCE，优先销毁伸缩组中最新的实例。 */
  TerminationPolicies?: string[];
  /** 可用区列表，基础网络场景下必须指定可用区。多个可用区以填写顺序为优先级，依次进行尝试，直至可以成功创建实例。 */
  Zones?: string[];
  /** 重试策略，取值包括 IMMEDIATE_RETRY、 INCREMENTAL_INTERVALS、NO_RETRY，默认取值为 IMMEDIATE_RETRY。部分成功的伸缩活动判定为一次失败活动。 IMMEDIATE_RETRY，立即重试，在较短时间内快速重试，连续失败超过一定次数（5次）后不再重试。 INCREMENTAL_INTERVALS，间隔递增重试，随着连续失败次数的增加，重试间隔逐渐增大，重试间隔从秒级到1天不等。 NO_RETRY，不进行重试，直到再次收到用户调用或者告警信息后才会重试。 */
  RetryPolicy?: string;
  /** 可用区校验策略，取值包括 ALL 和 ANY，默认取值为ANY。 ALL，所有可用区（Zone）或子网（SubnetId）都可用则通过校验，否则校验报错。 ANY，存在任何一个可用区（Zone）或子网（SubnetId）可用则通过校验，否则校验报错。可用区或子网不可用的常见原因包括该可用区CVM实例类型售罄、该可用区CBS云盘售罄、该可用区配额不足、该子网IP不足等。如果 Zones/SubnetIds 中可用区或者子网不存在，则无论 ZonesCheckPolicy 采用何种取值，都会校验报错。 */
  ZonesCheckPolicy?: string;
  /** 标签描述列表。通过指定该参数可以支持绑定标签到伸缩组。同时绑定标签到相应的资源实例。每个伸缩组最多支持30个标签。 */
  Tags?: Tag[];
  /** 服务设置，包括云监控不健康替换等服务设置。 */
  ServiceSettings?: ServiceSettings;
  /** 实例具有IPv6地址数量的配置，取值包括 0、1，默认值为0。 */
  Ipv6AddressCount?: number;
  /** 多可用区/子网策略，取值包括 PRIORITY 和 EQUALITY，默认为 PRIORITY。 PRIORITY，按照可用区/子网列表的顺序，作为优先级来尝试创建实例，如果优先级最高的可用区/子网可以创建成功，则总在该可用区/子网创建。 EQUALITY：扩容出的实例会打散到多个可用区/子网，保证扩容后的各个可用区/子网实例数相对均衡。与本策略相关的注意点： 当伸缩组为基础网络时，本策略适用于多可用区；当伸缩组为VPC网络时，本策略适用于多子网，此时不再考虑可用区因素，例如四个子网ABCD，其中ABC处于可用区1，D处于可用区2，此时考虑子网ABCD进行排序，而不考虑可用区1、2。 本策略适用于多可用区/子网，不适用于启动配置的多机型。多机型按照优先级策略进行选择。 按照 PRIORITY 策略创建实例时，先保证多机型的策略，后保证多可用区/子网的策略。例如多机型A、B，多子网1、2、3，会按照A1、A2、A3、B1、B2、B3 进行尝试，如果A1售罄，会尝试A2（而非B1）。 */
  MultiZoneSubnetPolicy?: string;
  /** 伸缩组实例健康检查类型，取值如下：CVM：根据实例网络状态判断实例是否处于不健康状态，不健康的网络状态即发生实例 PING 不可达事件，详细判断标准可参考[实例健康检查](https://cloud.tencent.com/document/product/377/8553)CLB：根据 CLB 的健康检查状态判断实例是否处于不健康状态，CLB健康检查原理可参考[健康检查](https://cloud.tencent.com/document/product/214/6097) 如果选择了`CLB`类型，伸缩组将同时检查实例网络状态与CLB健康检查状态，如果出现实例网络状态不健康，实例将被标记为 UNHEALTHY 状态；如果出现 CLB 健康检查状态异常，实例将被标记为CLB_UNHEALTHY 状态，如果两个异常状态同时出现，实例`HealthStatus`字段将返回 UNHEALTHY|CLB_UNHEALTHY。默认值：CLB */
  HealthCheckType?: string;
  /** CLB健康检查宽限期，当扩容的实例进入`IN_SERVICE`后，在宽限期时间范围内将不会被标记为不健康`CLB_UNHEALTHY`。默认值：0。取值范围[0, 7200]，单位：秒。 */
  LoadBalancerHealthCheckGracePeriod?: number;
  /** 实例分配策略，取值包括 LAUNCH_CONFIGURATION 和 SPOT_MIXED，默认取 LAUNCH_CONFIGURATION。 LAUNCH_CONFIGURATION，代表传统的按照启动配置模式。 SPOT_MIXED，代表竞价混合模式。目前仅支持启动配置为按量计费模式时使用混合模式，混合模式下，伸缩组将根据设定扩容按量或竞价机型。使用混合模式时，关联的启动配置的计费类型不可被修改。 */
  InstanceAllocationPolicy?: string;
  /** 竞价混合模式下，各计费类型实例的分配策略。仅当 InstanceAllocationPolicy 取 SPOT_MIXED 时可用。 */
  SpotMixedAllocationPolicy?: SpotMixedAllocationPolicy;
  /** 容量重平衡功能，仅对伸缩组内的竞价实例有效。取值范围： TRUE，开启该功能，当伸缩组内的竞价实例即将被竞价实例服务自动回收前，AS 主动发起竞价实例销毁流程，如果有配置过缩容 hook，则销毁前 hook 会生效。销毁流程启动后，AS 会异步开启一个扩容活动，用于补齐期望实例数。 FALSE，不开启该功能，则 AS 等待竞价实例被销毁后才会去扩容补齐伸缩组期望实例数。默认取 FALSE。 */
  CapacityRebalance?: boolean;
}

declare interface CreateAutoScalingGroupResponse {
  /** 伸缩组ID */
  AutoScalingGroupId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateLaunchConfigurationRequest {
  /** 启动配置显示名称。名称仅支持中文、英文、数字、下划线、分隔符"-"、小数点，最大长度不能超60个字节。 */
  LaunchConfigurationName: string;
  /** 指定有效的[镜像](https://cloud.tencent.com/document/product/213/4940)ID，格式形如`img-8toqc6s3`。镜像类型分为四种：公共镜像自定义镜像共享镜像服务市场镜像可通过以下方式获取可用的镜像ID：`公共镜像`、`自定义镜像`、`共享镜像`的镜像ID可通过登录[控制台](https://console.cloud.tencent.com/cvm/image?rid=1&imageType=PUBLIC_IMAGE)查询；`服务镜像市场`的镜像ID可通过[云市场](https://market.cloud.tencent.com/list)查询。通过调用接口 [DescribeImages](https://cloud.tencent.com/document/api/213/15715) ，取返回信息中的`ImageId`字段。 */
  ImageId: string;
  /** 启动配置所属项目ID。不填为默认项目。注意：伸缩组内实例所属项目ID取伸缩组项目ID，与这里取值无关。 */
  ProjectId?: number;
  /** 实例机型。不同实例机型指定了不同的资源规格，具体取值可通过调用接口 [DescribeInstanceTypeConfigs](https://cloud.tencent.com/document/api/213/15749) 来获得最新的规格表或参见[实例类型](https://cloud.tencent.com/document/product/213/11518)描述。`InstanceType`和`InstanceTypes`参数互斥，二者必填一个且只能填写一个。 */
  InstanceType?: string;
  /** 实例系统盘配置信息。若不指定该参数，则按照系统默认值进行分配。 */
  SystemDisk?: SystemDisk;
  /** 实例数据盘配置信息。若不指定该参数，则默认不购买数据盘，最多支持指定11块数据盘。 */
  DataDisks?: DataDisk[];
  /** 公网带宽相关信息设置。若不指定该参数，则默认公网带宽为0Mbps。 */
  InternetAccessible?: InternetAccessible;
  /** 实例登录设置。通过该参数可以设置实例的登录方式密码、密钥或保持镜像的原始登录设置。默认情况下会随机生成密码，并以站内信方式知会到用户。 */
  LoginSettings?: LoginSettings;
  /** 实例所属安全组。该参数可以通过调用 [DescribeSecurityGroups](https://cloud.tencent.com/document/api/215/15808) 的返回值中的`SecurityGroupId`字段来获取。若不指定该参数，则默认不绑定安全组。 */
  SecurityGroupIds?: string[];
  /** 增强服务。通过该参数可以指定是否开启云安全、云监控等服务。若不指定该参数，则默认开启云监控、云安全服务。 */
  EnhancedService?: EnhancedService;
  /** 经过 Base64 编码后的自定义数据，最大长度不超过16KB。 */
  UserData?: string;
  /** 实例计费类型，CVM默认值按照POSTPAID_BY_HOUR处理。POSTPAID_BY_HOUR：按小时后付费SPOTPAID：竞价付费PREPAID：预付费，即包年包月 */
  InstanceChargeType?: string;
  /** 实例的市场相关选项，如竞价实例相关参数，若指定实例的付费模式为竞价付费则该参数必传。 */
  InstanceMarketOptions?: InstanceMarketOptionsRequest;
  /** 实例机型列表，不同实例机型指定了不同的资源规格，最多支持10种实例机型。`InstanceType`和`InstanceTypes`参数互斥，二者必填一个且只能填写一个。 */
  InstanceTypes?: string[];
  /** CAM角色名称。可通过DescribeRoleList接口返回值中的roleName获取。 */
  CamRoleName?: string;
  /** 实例类型校验策略，取值包括 ALL 和 ANY，默认取值为ANY。 ALL，所有实例类型（InstanceType）都可用则通过校验，否则校验报错。 ANY，存在任何一个实例类型（InstanceType）可用则通过校验，否则校验报错。实例类型不可用的常见原因包括该实例类型售罄、对应云盘售罄等。如果 InstanceTypes 中一款机型不存在或者已下线，则无论 InstanceTypesCheckPolicy 采用何种取值，都会校验报错。 */
  InstanceTypesCheckPolicy?: string;
  /** 标签列表。通过指定该参数，可以为扩容的实例绑定标签。最多支持指定10个标签。 */
  InstanceTags?: InstanceTag[];
  /** 标签描述列表。通过指定该参数可以支持绑定标签到启动配置。每个启动配置最多支持30个标签。 */
  Tags?: Tag[];
  /** 云服务器主机名（HostName）的相关设置。 */
  HostNameSettings?: HostNameSettings;
  /** 云服务器实例名（InstanceName）的相关设置。如果用户在启动配置中设置此字段，则伸缩组创建出的实例 InstanceName 参照此字段进行设置，并传递给 CVM；如果用户未在启动配置中设置此字段，则伸缩组创建出的实例 InstanceName 按照“as-{{ 伸缩组AutoScalingGroupName }}”进行设置，并传递给 CVM。 */
  InstanceNameSettings?: InstanceNameSettings;
  /** 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月实例的购买时长、是否设置自动续费等属性。若指定实例的付费模式为预付费则该参数必传。 */
  InstanceChargePrepaid?: InstanceChargePrepaid;
  /** 云盘类型选择策略，默认取值 ORIGINAL，取值范围：ORIGINAL：使用设置的云盘类型AUTOMATIC：自动选择当前可用的云盘类型 */
  DiskTypePolicy?: string;
  /** 高性能计算集群ID。注意：此字段默认为空。 */
  HpcClusterId?: string;
  /** IPv6公网带宽相关信息设置。若新建实例包含IPv6地址，该参数可为新建实例的IPv6地址分配公网带宽。关联启动配置的伸缩组Ipv6AddressCount参数为0时，该参数不会生效。 */
  IPv6InternetAccessible?: IPv6InternetAccessible;
  /** 置放群组id，仅支持指定一个。 */
  DisasterRecoverGroupIds?: string[];
}

declare interface CreateLaunchConfigurationResponse {
  /** 当通过本接口来创建启动配置时会返回该参数，表示启动配置ID。 */
  LaunchConfigurationId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateLifecycleHookRequest {
  /** 伸缩组ID */
  AutoScalingGroupId: string;
  /** 生命周期挂钩名称。名称仅支持中文、英文、数字、下划线（_）、短横线（-）、小数点（.），最大长度不能超128个字节。 */
  LifecycleHookName: string;
  /** 进行生命周期挂钩的场景，取值范围包括 INSTANCE_LAUNCHING 和 INSTANCE_TERMINATING */
  LifecycleTransition: string;
  /** 定义伸缩组在生命周期挂钩超时的情况下应采取的操作，取值范围是 CONTINUE 或 ABANDON，默认值为 CONTINUE */
  DefaultResult?: string;
  /** 生命周期挂钩超时之前可以经过的最长时间（以秒为单位），范围从30到7200秒，默认值为300秒 */
  HeartbeatTimeout?: number;
  /** 弹性伸缩向通知目标发送的附加信息，配置通知时使用,默认值为空字符串""。最大长度不能超过1024个字节。 */
  NotificationMetadata?: string;
  /** 通知目标。NotificationTarget和LifecycleCommand参数互斥，二者不可同时指定。 */
  NotificationTarget?: NotificationTarget;
  /** 进行生命周期挂钩的场景类型，取值范围包括NORMAL 和 EXTENSION。说明：设置为EXTENSION值，在AttachInstances、DetachInstances、RemoveInstaces接口时会触发生命周期挂钩操作，值为NORMAL则不会在这些接口中触发生命周期挂钩。 */
  LifecycleTransitionType?: string;
  /** 远程命令执行对象。NotificationTarget和LifecycleCommand参数互斥，二者不可同时指定。 */
  LifecycleCommand?: LifecycleCommand;
}

declare interface CreateLifecycleHookResponse {
  /** 生命周期挂钩ID */
  LifecycleHookId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateNotificationConfigurationRequest {
  /** 伸缩组ID。 */
  AutoScalingGroupId: string;
  /** 通知类型，即为需要订阅的通知类型集合，取值范围如下：SCALE_OUT_SUCCESSFUL：扩容成功SCALE_OUT_FAILED：扩容失败SCALE_IN_SUCCESSFUL：缩容成功SCALE_IN_FAILED：缩容失败REPLACE_UNHEALTHY_INSTANCE_SUCCESSFUL：替换不健康子机成功REPLACE_UNHEALTHY_INSTANCE_FAILED：替换不健康子机失败 */
  NotificationTypes: string[];
  /** 通知组ID，即为用户组ID集合，用户组ID可以通过[ListGroups](https://cloud.tencent.com/document/product/598/34589)查询。 */
  NotificationUserGroupIds?: string[];
  /** 通知接收端类型，取值如下USER_GROUP：用户组CMQ_QUEUE：CMQ 队列CMQ_TOPIC：CMQ 主题TDMQ_CMQ_TOPIC：TDMQ CMQ 主题TDMQ_CMQ_QUEUE：TDMQ CMQ 队列默认值为：`USER_GROUP`。 */
  TargetType?: string;
  /** CMQ 队列名称，如 TargetType 取值为 `CMQ_QUEUE` 或 `TDMQ_CMQ_QUEUE` 时，该字段必填。 */
  QueueName?: string;
  /** CMQ 主题名称，如 TargetType 取值为 `CMQ_TOPIC` 或 `TDMQ_CMQ_TOPIC` 时，该字段必填。 */
  TopicName?: string;
}

declare interface CreateNotificationConfigurationResponse {
  /** 通知ID。 */
  AutoScalingNotificationId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateScalingPolicyRequest {
  /** 伸缩组ID。 */
  AutoScalingGroupId: string;
  /** 告警触发策略名称。 */
  ScalingPolicyName: string;
  /** 告警触发策略类型，默认类型为SIMPLE。取值范围：SIMPLE：简单策略TARGET_TRACKING：目标追踪策略 */
  ScalingPolicyType?: string;
  /** 告警触发后，期望实例数修改方式，仅适用于简单策略。取值范围：CHANGE_IN_CAPACITY：增加或减少若干期望实例数EXACT_CAPACITY：调整至指定期望实例数 PERCENT_CHANGE_IN_CAPACITY：按百分比调整期望实例数 */
  AdjustmentType?: string;
  /** 告警触发后，期望实例数的调整值，仅适用于简单策略。当 AdjustmentType 为 CHANGE_IN_CAPACITY 时，AdjustmentValue 为正数表示告警触发后增加实例，为负数表示告警触发后减少实例 当 AdjustmentType 为 EXACT_CAPACITY 时，AdjustmentValue 的值即为告警触发后新的期望实例数，需要大于或等于0 当 AdjustmentType 为 PERCENT_CHANGE_IN_CAPACITY 时，AdjusmentValue 为正数表示告警触发后按百分比增加实例，为负数表示告警触发后按百分比减少实例，单位是：%。 */
  AdjustmentValue?: number;
  /** 冷却时间，单位为秒，仅适用于简单策略。默认冷却时间300秒。 */
  Cooldown?: number;
  /** 告警监控指标，仅适用于简单策略。 */
  MetricAlarm?: MetricAlarm;
  /** 预定义监控项，仅适用于目标追踪策略。取值范围：ASG_AVG_CPU_UTILIZATION：平均CPU使用率ASG_AVG_LAN_TRAFFIC_OUT：平均内网出带宽ASG_AVG_LAN_TRAFFIC_IN：平均内网入带宽ASG_AVG_WAN_TRAFFIC_OUT：平均外网出带宽ASG_AVG_WAN_TRAFFIC_IN：平均外网出带宽 */
  PredefinedMetricType?: string;
  /** 目标值，仅适用于目标追踪策略。ASG_AVG_CPU_UTILIZATION：[1, 100)，单位：%ASG_AVG_LAN_TRAFFIC_OUT：>0，单位：MbpsASG_AVG_LAN_TRAFFIC_IN：>0，单位：MbpsASG_AVG_WAN_TRAFFIC_OUT：>0，单位：MbpsASG_AVG_WAN_TRAFFIC_IN：>0，单位：Mbps */
  TargetValue?: number;
  /** 实例预热时间，单位为秒，仅适用于目标追踪策略。取值范围为0-3600，默认预热时间300秒。 */
  EstimatedInstanceWarmup?: number;
  /** 是否禁用缩容，仅适用于目标追踪策略，默认值为 false。取值范围：true：目标追踪策略仅触发扩容false：目标追踪策略触发扩容和缩容 */
  DisableScaleIn?: boolean;
  /** 此参数已不再生效，请使用[创建通知](https://cloud.tencent.com/document/api/377/33185)。通知组ID，即为用户组ID集合。 */
  NotificationUserGroupIds?: string[];
}

declare interface CreateScalingPolicyResponse {
  /** 告警触发策略ID。 */
  AutoScalingPolicyId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateScheduledActionRequest {
  /** 伸缩组ID */
  AutoScalingGroupId: string;
  /** 定时任务名称。名称仅支持中文、英文、数字、下划线、分隔符"-"、小数点，最大长度不能超60个字节。同一伸缩组下必须唯一。 */
  ScheduledActionName: string;
  /** 当定时任务触发时，设置的伸缩组最大实例数。 */
  MaxSize: number;
  /** 当定时任务触发时，设置的伸缩组最小实例数。 */
  MinSize: number;
  /** 当定时任务触发时，设置的伸缩组期望实例数。 */
  DesiredCapacity: number;
  /** 定时任务的首次触发时间，取值为`北京时间`（UTC+8），按照`ISO8601`标准，格式：`YYYY-MM-DDThh:mm:ss+08:00`。 */
  StartTime: string;
  /** 定时任务的结束时间，取值为`北京时间`（UTC+8），按照`ISO8601`标准，格式：`YYYY-MM-DDThh:mm:ss+08:00`。此参数与`Recurrence`需要同时指定，到达结束时间之后，定时任务将不再生效。 */
  EndTime?: string;
  /** 定时任务的重复方式。为标准 Cron 格式此参数与`EndTime`需要同时指定。 */
  Recurrence?: string;
}

declare interface CreateScheduledActionResponse {
  /** 定时任务ID */
  ScheduledActionId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteAutoScalingGroupRequest {
  /** 伸缩组ID */
  AutoScalingGroupId: string;
}

declare interface DeleteAutoScalingGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteLaunchConfigurationRequest {
  /** 需要删除的启动配置ID。 */
  LaunchConfigurationId: string;
}

declare interface DeleteLaunchConfigurationResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteLifecycleHookRequest {
  /** 生命周期挂钩ID */
  LifecycleHookId: string;
}

declare interface DeleteLifecycleHookResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteNotificationConfigurationRequest {
  /** 待删除的通知ID。 */
  AutoScalingNotificationId?: string;
}

declare interface DeleteNotificationConfigurationResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteScalingPolicyRequest {
  /** 待删除的告警策略ID。 */
  AutoScalingPolicyId: string;
}

declare interface DeleteScalingPolicyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteScheduledActionRequest {
  /** 待删除的定时任务ID。 */
  ScheduledActionId: string;
}

declare interface DeleteScheduledActionResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAccountLimitsRequest {
}

declare interface DescribeAccountLimitsResponse {
  /** 用户账户被允许创建的启动配置最大数量 */
  MaxNumberOfLaunchConfigurations: number;
  /** 用户账户启动配置的当前数量 */
  NumberOfLaunchConfigurations: number;
  /** 用户账户被允许创建的伸缩组最大数量 */
  MaxNumberOfAutoScalingGroups: number;
  /** 用户账户伸缩组的当前数量 */
  NumberOfAutoScalingGroups: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAutoScalingActivitiesRequest {
  /** 按照一个或者多个伸缩活动ID查询。伸缩活动ID形如：`asa-5l2ejpfo`。每次请求的上限为100。参数不支持同时指定`ActivityIds`和`Filters`。 */
  ActivityIds?: string[];
  /** 过滤条件。 auto-scaling-group-id - String - 是否必填：否 -（过滤条件）按照伸缩组ID过滤。 activity-status-code - String - 是否必填：否 -（过滤条件）按照伸缩活动状态过滤。（INIT：初始化中|RUNNING：运行中|SUCCESSFUL：活动成功|PARTIALLY_SUCCESSFUL：活动部分成功|FAILED：活动失败|CANCELLED：活动取消） activity-type - String - 是否必填：否 -（过滤条件）按照伸缩活动类型过滤。（SCALE_OUT：扩容活动|SCALE_IN：缩容活动|ATTACH_INSTANCES：添加实例|REMOVE_INSTANCES：销毁实例|DETACH_INSTANCES：移出实例|TERMINATE_INSTANCES_UNEXPECTEDLY：实例在CVM控制台被销毁|REPLACE_UNHEALTHY_INSTANCE：替换不健康实例|UPDATE_LOAD_BALANCERS：更新负载均衡器） activity-id - String - 是否必填：否 -（过滤条件）按照伸缩活动ID过滤。每次请求的`Filters`的上限为10，`Filter.Values`的上限为5。参数不支持同时指定`ActivityIds`和`Filters`。 */
  Filters?: Filter[];
  /** 返回数量，默认为20，最大值为100。关于`Limit`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。 */
  Limit?: number;
  /** 偏移量，默认为0。关于`Offset`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。 */
  Offset?: number;
  /** 伸缩活动最早的开始时间，如果指定了ActivityIds，此参数将被忽略。取值为`UTC`时间，按照`ISO8601`标准，格式：`YYYY-MM-DDThh:mm:ssZ`。 */
  StartTime?: string;
  /** 伸缩活动最晚的结束时间，如果指定了ActivityIds，此参数将被忽略。取值为`UTC`时间，按照`ISO8601`标准，格式：`YYYY-MM-DDThh:mm:ssZ`。 */
  EndTime?: string;
}

declare interface DescribeAutoScalingActivitiesResponse {
  /** 符合条件的伸缩活动数量。 */
  TotalCount: number;
  /** 符合条件的伸缩活动信息集合。 */
  ActivitySet: Activity[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAutoScalingAdvicesRequest {
  /** 待查询的伸缩组列表，上限100。 */
  AutoScalingGroupIds: string[];
}

declare interface DescribeAutoScalingAdvicesResponse {
  /** 伸缩组配置建议集合。 */
  AutoScalingAdviceSet?: AutoScalingAdvice[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAutoScalingGroupLastActivitiesRequest {
  /** 伸缩组ID列表 */
  AutoScalingGroupIds: string[];
}

declare interface DescribeAutoScalingGroupLastActivitiesResponse {
  /** 符合条件的伸缩活动信息集合。说明：伸缩组伸缩活动不存在的则不返回，如传50个伸缩组ID，返回45条数据，说明其中有5个伸缩组伸缩活动不存在。 */
  ActivitySet: Activity[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAutoScalingGroupsRequest {
  /** 按照一个或者多个伸缩组ID查询。伸缩组ID形如：`asg-nkdwoui0`。每次请求的上限为100。参数不支持同时指定`AutoScalingGroupIds`和`Filters`。 */
  AutoScalingGroupIds?: string[];
  /** 过滤条件。 auto-scaling-group-id - String - 是否必填：否 -（过滤条件）按照伸缩组ID过滤。 auto-scaling-group-name - String - 是否必填：否 -（过滤条件）按照伸缩组名称过滤。 vague-auto-scaling-group-name - String - 是否必填：否 -（过滤条件）按照伸缩组名称模糊搜索。 launch-configuration-id - String - 是否必填：否 -（过滤条件）按照启动配置ID过滤。 tag-key - String - 是否必填：否 -（过滤条件）按照标签键进行过滤。 tag-value - String - 是否必填：否 -（过滤条件）按照标签值进行过滤。 tag:tag-key - String - 是否必填：否 -（过滤条件）按照标签键值对进行过滤。 tag-key使用具体的标签键进行替换。使用请参考示例2每次请求的`Filters`的上限为10，`Filter.Values`的上限为5。参数不支持同时指定`AutoScalingGroupIds`和`Filters`。 */
  Filters?: Filter[];
  /** 返回数量，默认为20，最大值为100。关于`Limit`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。 */
  Limit?: number;
  /** 偏移量，默认为0。关于`Offset`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。 */
  Offset?: number;
}

declare interface DescribeAutoScalingGroupsResponse {
  /** 伸缩组详细信息列表。 */
  AutoScalingGroupSet: AutoScalingGroup[];
  /** 符合条件的伸缩组数量。 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAutoScalingInstancesRequest {
  /** 待查询云服务器（CVM）的实例ID。每次请求的上限为100。参数不支持同时指定InstanceIds和Filters。 */
  InstanceIds?: string[];
  /** 过滤条件。 instance-id - String - 是否必填：否 -（过滤条件）按照实例ID过滤。 auto-scaling-group-id - String - 是否必填：否 -（过滤条件）按照伸缩组ID过滤。每次请求的`Filters`的上限为10，`Filter.Values`的上限为5。参数不支持同时指定`InstanceIds`和`Filters`。 */
  Filters?: Filter[];
  /** 偏移量，默认为0。关于`Offset`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100。关于`Limit`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。 */
  Limit?: number;
}

declare interface DescribeAutoScalingInstancesResponse {
  /** 实例详细信息列表。 */
  AutoScalingInstanceSet: Instance[];
  /** 符合条件的实例数量。 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLaunchConfigurationsRequest {
  /** 按照一个或者多个启动配置ID查询。启动配置ID形如：`asc-ouy1ax38`。每次请求的上限为100。参数不支持同时指定`LaunchConfigurationIds`和`Filters` */
  LaunchConfigurationIds?: string[];
  /** 过滤条件。 launch-configuration-id - String - 是否必填：否 -（过滤条件）按照启动配置ID过滤。 launch-configuration-name - String - 是否必填：否 -（过滤条件）按照启动配置名称过滤。 vague-launch-configuration-name - String - 是否必填：否 -（过滤条件）按照启动配置名称模糊搜索。 tag-key - String - 是否必填：否 -（过滤条件）按照标签键进行过滤。 tag-value - String - 是否必填：否 -（过滤条件）按照标签值进行过滤。 tag:tag-key - String - 是否必填：否 -（过滤条件）按照标签键值对进行过滤。 tag-key使用具体的标签键进行替换。使用请参考示例3每次请求的`Filters`的上限为10，`Filter.Values`的上限为5。参数不支持同时指定`LaunchConfigurationIds`和`Filters`。 */
  Filters?: Filter[];
  /** 返回数量，默认为20，最大值为100。关于`Limit`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。 */
  Limit?: number;
  /** 偏移量，默认为0。关于`Offset`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。 */
  Offset?: number;
}

declare interface DescribeLaunchConfigurationsResponse {
  /** 符合条件的启动配置数量。 */
  TotalCount: number;
  /** 启动配置详细信息列表。 */
  LaunchConfigurationSet: LaunchConfiguration[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLifecycleHooksRequest {
  /** 按照一个或者多个生命周期挂钩ID查询。生命周期挂钩ID形如：`ash-8azjzxcl`。每次请求的上限为100。参数不支持同时指定`LifecycleHookIds`和`Filters`。 */
  LifecycleHookIds?: string[];
  /** 过滤条件。 lifecycle-hook-id - String - 是否必填：否 -（过滤条件）按照生命周期挂钩ID过滤。 lifecycle-hook-name - String - 是否必填：否 -（过滤条件）按照生命周期挂钩名称过滤。 auto-scaling-group-id - String - 是否必填：否 -（过滤条件）按照伸缩组ID过滤。每次请求的`Filters`的上限为10，`Filter.Values`的上限为5。参数不支持同时指定`LifecycleHookIds `和`Filters`。 */
  Filters?: Filter[];
  /** 返回数量，默认为20，最大值为100。关于`Limit`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。 */
  Limit?: number;
  /** 偏移量，默认为0。关于`Offset`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。 */
  Offset?: number;
}

declare interface DescribeLifecycleHooksResponse {
  /** 生命周期挂钩数组 */
  LifecycleHookSet: LifecycleHook[];
  /** 总体数量 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeNotificationConfigurationsRequest {
  /** 按照一个或者多个通知ID查询。实例ID形如：asn-2sestqbr。每次请求的实例的上限为100。参数不支持同时指定`AutoScalingNotificationIds`和`Filters`。 */
  AutoScalingNotificationIds?: string[];
  /** 过滤条件。 auto-scaling-notification-id - String - 是否必填：否 -（过滤条件）按照通知ID过滤。 auto-scaling-group-id - String - 是否必填：否 -（过滤条件）按照伸缩组ID过滤。每次请求的`Filters`的上限为10，`Filter.Values`的上限为5。参数不支持同时指定`AutoScalingNotificationIds`和`Filters`。 */
  Filters?: Filter[];
  /** 返回数量，默认为20，最大值为100。关于`Limit`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。 */
  Limit?: number;
  /** 偏移量，默认为0。关于`Offset`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。 */
  Offset?: number;
}

declare interface DescribeNotificationConfigurationsResponse {
  /** 符合条件的通知数量。 */
  TotalCount: number;
  /** 弹性伸缩事件通知详细信息列表。 */
  AutoScalingNotificationSet: AutoScalingNotification[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeScalingPoliciesRequest {
  /** 按照一个或者多个告警策略ID查询。告警策略ID形如：asp-i9vkg894。每次请求的实例的上限为100。参数不支持同时指定`AutoScalingPolicyIds`和`Filters`。 */
  AutoScalingPolicyIds?: string[];
  /** 过滤条件。 auto-scaling-policy-id - String - 是否必填：否 -（过滤条件）按照告警策略ID过滤。 auto-scaling-group-id - String - 是否必填：否 -（过滤条件）按照伸缩组ID过滤。 scaling-policy-name - String - 是否必填：否 -（过滤条件）按照告警策略名称过滤。 scaling-policy-type - String - 是否必填：否 -（过滤条件）按照告警策略类型过滤，取值范围为SIMPLE，TARGET_TRACKING。每次请求的`Filters`的上限为10，`Filter.Values`的上限为5。参数不支持同时指定`AutoScalingPolicyIds`和`Filters`。 */
  Filters?: Filter[];
  /** 返回数量，默认为20，最大值为100。关于`Limit`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。 */
  Limit?: number;
  /** 偏移量，默认为0。关于`Offset`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。 */
  Offset?: number;
}

declare interface DescribeScalingPoliciesResponse {
  /** 弹性伸缩告警触发策略详细信息列表。 */
  ScalingPolicySet?: ScalingPolicy[];
  /** 符合条件的通知数量。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeScheduledActionsRequest {
  /** 按照一个或者多个定时任务ID查询。实例ID形如：asst-am691zxo。每次请求的实例的上限为100。参数不支持同时指定ScheduledActionIds和Filters。 */
  ScheduledActionIds?: string[];
  /** 过滤条件。 scheduled-action-id - String - 是否必填：否 -（过滤条件）按照定时任务ID过滤。 scheduled-action-name - String - 是否必填：否 - （过滤条件） 按照定时任务名称过滤。 auto-scaling-group-id - String - 是否必填：否 - （过滤条件） 按照伸缩组ID过滤。 */
  Filters?: Filter[];
  /** 偏移量，默认为0。关于Offset的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100。关于Limit的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。 */
  Limit?: number;
}

declare interface DescribeScheduledActionsResponse {
  /** 符合条件的定时任务数量。 */
  TotalCount: number;
  /** 定时任务详细信息列表。 */
  ScheduledActionSet: ScheduledAction[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DetachInstancesRequest {
  /** 伸缩组ID */
  AutoScalingGroupId: string;
  /** CVM实例ID列表 */
  InstanceIds: string[];
}

declare interface DetachInstancesResponse {
  /** 伸缩活动ID */
  ActivityId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DetachLoadBalancersRequest {
  /** 伸缩组ID */
  AutoScalingGroupId: string;
  /** 传统负载均衡器ID列表，列表长度上限为20，LoadBalancerIds 和 ForwardLoadBalancerIdentifications 二者同时最多只能指定一个 */
  LoadBalancerIds?: string[];
  /** 应用型负载均衡器标识信息列表，列表长度上限为100，LoadBalancerIds 和 ForwardLoadBalancerIdentifications二者同时最多只能指定一个 */
  ForwardLoadBalancerIdentifications?: ForwardLoadBalancerIdentification[];
}

declare interface DetachLoadBalancersResponse {
  /** 伸缩活动ID */
  ActivityId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DisableAutoScalingGroupRequest {
  /** 伸缩组ID */
  AutoScalingGroupId: string;
}

declare interface DisableAutoScalingGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface EnableAutoScalingGroupRequest {
  /** 伸缩组ID */
  AutoScalingGroupId: string;
}

declare interface EnableAutoScalingGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ExecuteScalingPolicyRequest {
  /** 告警伸缩策略ID，不支持目标追踪策略。 */
  AutoScalingPolicyId: string;
  /** 是否检查伸缩组活动处于冷却时间内，默认值为false */
  HonorCooldown?: boolean;
  /** 执行伸缩策略的触发来源，取值包括 API 和 CLOUD_MONITOR，默认值为 API。CLOUD_MONITOR 专门供云监控触发调用。 */
  TriggerSource?: string;
}

declare interface ExecuteScalingPolicyResponse {
  /** 伸缩活动ID */
  ActivityId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface InstanceMarketOptionsRequest {
  /** 竞价相关选项 */
  SpotOptions: SpotMarketOptions;
  /** 市场选项类型，当前只支持取值：spot */
  MarketType?: string | null;
}

declare interface ModifyAutoScalingGroupRequest {
  /** 伸缩组ID */
  AutoScalingGroupId: string;
  /** 伸缩组名称，在您账号中必须唯一。名称仅支持中文、英文、数字、下划线、分隔符"-"、小数点，最大长度不能超55个字节。 */
  AutoScalingGroupName?: string;
  /** 默认冷却时间，单位秒，默认值为300 */
  DefaultCooldown?: number;
  /** 期望实例数，大小介于最小实例数和最大实例数之间 */
  DesiredCapacity?: number;
  /** 启动配置ID */
  LaunchConfigurationId?: string;
  /** 最大实例数，取值范围为0-2000。 */
  MaxSize?: number;
  /** 最小实例数，取值范围为0-2000。 */
  MinSize?: number;
  /** 项目ID */
  ProjectId?: number;
  /** 子网ID列表 */
  SubnetIds?: string[];
  /** 销毁策略，目前长度上限为1。取值包括 OLDEST_INSTANCE 和 NEWEST_INSTANCE。 OLDEST_INSTANCE 优先销毁伸缩组中最旧的实例。 NEWEST_INSTANCE，优先销毁伸缩组中最新的实例。 */
  TerminationPolicies?: string[];
  /** VPC ID，基础网络则填空字符串。修改为具体VPC ID时，需指定相应的SubnetIds；修改为基础网络时，需指定相应的Zones。 */
  VpcId?: string;
  /** 可用区列表 */
  Zones?: string[];
  /** 重试策略，取值包括 IMMEDIATE_RETRY、 INCREMENTAL_INTERVALS、NO_RETRY，默认取值为 IMMEDIATE_RETRY。部分成功的伸缩活动判定为一次失败活动。IMMEDIATE_RETRY，立即重试，在较短时间内快速重试，连续失败超过一定次数（5次）后不再重试。INCREMENTAL_INTERVALS，间隔递增重试，随着连续失败次数的增加，重试间隔逐渐增大，重试间隔从秒级到1天不等。 NO_RETRY，不进行重试，直到再次收到用户调用或者告警信息后才会重试。 */
  RetryPolicy?: string;
  /** 可用区校验策略，取值包括 ALL 和 ANY，默认取值为ANY。在伸缩组实际变更资源相关字段时（启动配置、可用区、子网）发挥作用。 ALL，所有可用区（Zone）或子网（SubnetId）都可用则通过校验，否则校验报错。 ANY，存在任何一个可用区（Zone）或子网（SubnetId）可用则通过校验，否则校验报错。可用区或子网不可用的常见原因包括该可用区CVM实例类型售罄、该可用区CBS云盘售罄、该可用区配额不足、该子网IP不足等。如果 Zones/SubnetIds 中可用区或者子网不存在，则无论 ZonesCheckPolicy 采用何种取值，都会校验报错。 */
  ZonesCheckPolicy?: string;
  /** 服务设置，包括云监控不健康替换等服务设置。 */
  ServiceSettings?: ServiceSettings;
  /** 实例具有IPv6地址数量的配置，取值包括0、1。 */
  Ipv6AddressCount?: number;
  /** 多可用区/子网策略，取值包括 PRIORITY 和 EQUALITY，默认为 PRIORITY。 PRIORITY，按照可用区/子网列表的顺序，作为优先级来尝试创建实例，如果优先级最高的可用区/子网可以创建成功，则总在该可用区/子网创建。 EQUALITY：扩容出的实例会打散到多个可用区/子网，保证扩容后的各个可用区/子网实例数相对均衡。与本策略相关的注意点： 当伸缩组为基础网络时，本策略适用于多可用区；当伸缩组为VPC网络时，本策略适用于多子网，此时不再考虑可用区因素，例如四个子网ABCD，其中ABC处于可用区1，D处于可用区2，此时考虑子网ABCD进行排序，而不考虑可用区1、2。 本策略适用于多可用区/子网，不适用于启动配置的多机型。多机型按照优先级策略进行选择。 按照 PRIORITY 策略创建实例时，先保证多机型的策略，后保证多可用区/子网的策略。例如多机型A、B，多子网1、2、3，会按照A1、A2、A3、B1、B2、B3 进行尝试，如果A1售罄，会尝试A2（而非B1）。 */
  MultiZoneSubnetPolicy?: string;
  /** 伸缩组实例健康检查类型，取值如下：CVM：根据实例网络状态判断实例是否处于不健康状态，不健康的网络状态即发生实例 PING 不可达事件，详细判断标准可参考[实例健康检查](https://cloud.tencent.com/document/product/377/8553)CLB：根据 CLB 的健康检查状态判断实例是否处于不健康状态，CLB健康检查原理可参考[健康检查](https://cloud.tencent.com/document/product/214/6097) */
  HealthCheckType?: string;
  /** CLB健康检查宽限期。 */
  LoadBalancerHealthCheckGracePeriod?: number;
  /** 实例分配策略，取值包括 LAUNCH_CONFIGURATION 和 SPOT_MIXED。 LAUNCH_CONFIGURATION，代表传统的按照启动配置模式。 SPOT_MIXED，代表竞价混合模式。目前仅支持启动配置为按量计费模式时使用混合模式，混合模式下，伸缩组将根据设定扩容按量或竞价机型。使用混合模式时，关联的启动配置的计费类型不可被修改。 */
  InstanceAllocationPolicy?: string;
  /** 竞价混合模式下，各计费类型实例的分配策略。仅当 InstanceAllocationPolicy 取 SPOT_MIXED 时可用。 */
  SpotMixedAllocationPolicy?: SpotMixedAllocationPolicy;
  /** 容量重平衡功能，仅对伸缩组内的竞价实例有效。取值范围： TRUE，开启该功能，当伸缩组内的竞价实例即将被竞价实例服务自动回收前，AS 主动发起竞价实例销毁流程，如果有配置过缩容 hook，则销毁前 hook 会生效。销毁流程启动后，AS 会异步开启一个扩容活动，用于补齐期望实例数。 FALSE，不开启该功能，则 AS 等待竞价实例被销毁后才会去扩容补齐伸缩组期望实例数。 */
  CapacityRebalance?: boolean;
}

declare interface ModifyAutoScalingGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDesiredCapacityRequest {
  /** 伸缩组ID */
  AutoScalingGroupId: string;
  /** 期望实例数 */
  DesiredCapacity: number;
  /** 最小实例数，取值范围为0-2000。 */
  MinSize?: number;
  /** 最大实例数，取值范围为0-2000。 */
  MaxSize?: number;
}

declare interface ModifyDesiredCapacityResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyLaunchConfigurationAttributesRequest {
  /** 启动配置ID */
  LaunchConfigurationId: string;
  /** 指定有效的[镜像](https://cloud.tencent.com/document/product/213/4940)ID，格式形如`img-8toqc6s3`。镜像类型分为四种：公共镜像自定义镜像共享镜像服务市场镜像可通过以下方式获取可用的镜像ID：`公共镜像`、`自定义镜像`、`共享镜像`的镜像ID可通过登录[控制台](https://console.cloud.tencent.com/cvm/image?rid=1&imageType=PUBLIC_IMAGE)查询；`服务镜像市场`的镜像ID可通过[云市场](https://market.cloud.tencent.com/list)查询。通过调用接口 [DescribeImages](https://cloud.tencent.com/document/api/213/15715) ，取返回信息中的`ImageId`字段。 */
  ImageId?: string;
  /** 实例类型列表，不同实例机型指定了不同的资源规格，最多支持10种实例机型。InstanceType 指定单一实例类型，通过设置 InstanceTypes可以指定多实例类型，并使原有的InstanceType失效。 */
  InstanceTypes?: string[];
  /** 实例类型校验策略，在实际修改 InstanceTypes 时发挥作用，取值包括 ALL 和 ANY，默认取值为ANY。 ALL，所有实例类型（InstanceType）都可用则通过校验，否则校验报错。 ANY，存在任何一个实例类型（InstanceType）可用则通过校验，否则校验报错。实例类型不可用的常见原因包括该实例类型售罄、对应云盘售罄等。如果 InstanceTypes 中一款机型不存在或者已下线，则无论 InstanceTypesCheckPolicy 采用何种取值，都会校验报错。 */
  InstanceTypesCheckPolicy?: string;
  /** 启动配置显示名称。名称仅支持中文、英文、数字、下划线、分隔符"-"、小数点，最大长度不能超60个字节。 */
  LaunchConfigurationName?: string;
  /** 经过 Base64 编码后的自定义数据，最大长度不超过16KB。如果要清空UserData，则指定其为空字符串。 */
  UserData?: string;
  /** 实例所属安全组。该参数可以通过调用 [DescribeSecurityGroups](https://cloud.tencent.com/document/api/215/15808) 的返回值中的`SecurityGroupId`字段来获取。若指定该参数，请至少提供一个安全组，列表顺序有先后。 */
  SecurityGroupIds?: string[];
  /** 公网带宽相关信息设置。当公网出带宽上限为0Mbps时，不支持修改为开通分配公网IP；相应的，当前为开通分配公网IP时，修改的公网出带宽上限值必须大于0Mbps。 */
  InternetAccessible?: InternetAccessible;
  /** 实例计费类型。具体取值范围如下：POSTPAID_BY_HOUR：按小时后付费SPOTPAID：竞价付费PREPAID：预付费，即包年包月 */
  InstanceChargeType?: string;
  /** 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月实例的购买时长、是否设置自动续费等属性。若修改实例的付费模式为预付费，则该参数必传；从预付费修改为其他付费模式时，本字段原信息会自动丢弃。当新增该字段时，必须传递购买实例的时长，其它未传递字段会设置为默认值。当修改本字段时，当前付费模式必须为预付费。 */
  InstanceChargePrepaid?: InstanceChargePrepaid;
  /** 实例的市场相关选项，如竞价实例相关参数。若修改实例的付费模式为竞价付费，则该参数必传；从竞价付费修改为其他付费模式时，本字段原信息会自动丢弃。当新增该字段时，必须传递竞价相关选项下的竞价出价，其它未传递字段会设置为默认值。当修改本字段时，当前付费模式必须为竞价付费。 */
  InstanceMarketOptions?: InstanceMarketOptionsRequest;
  /** 云盘类型选择策略，取值范围：ORIGINAL：使用设置的云盘类型。AUTOMATIC：自动选择当前可用的云盘类型。 */
  DiskTypePolicy?: string;
  /** 实例系统盘配置信息。 */
  SystemDisk?: SystemDisk;
  /** 实例数据盘配置信息。最多支持指定11块数据盘。采取整体修改，因此请提供修改后的全部值。数据盘类型默认与系统盘类型保持一致。 */
  DataDisks?: DataDisk[];
  /** 云服务器主机名（HostName）的相关设置。不支持windows实例设置主机名。新增该属性时，必须传递云服务器的主机名，其它未传递字段会设置为默认值。 */
  HostNameSettings?: HostNameSettings;
  /** 云服务器（InstanceName）实例名的相关设置。 如果用户在启动配置中设置此字段，则伸缩组创建出的实例 InstanceName 参照此字段进行设置，并传递给 CVM；如果用户未在启动配置中设置此字段，则伸缩组创建出的实例 InstanceName 按照“as-{{ 伸缩组AutoScalingGroupName }}”进行设置，并传递给 CVM。新增该属性时，必须传递云服务器的实例名称，其它未传递字段会设置为默认值。 */
  InstanceNameSettings?: InstanceNameSettings;
  /** 增强服务。通过该参数可以指定是否开启云安全、云监控等服务。 */
  EnhancedService?: EnhancedService;
  /** CAM角色名称。可通过DescribeRoleList接口返回值中的roleName获取。 */
  CamRoleName?: string;
  /** 高性能计算集群ID。注意：此字段默认为空。 */
  HpcClusterId?: string;
  /** IPv6公网带宽相关信息设置。若新建实例包含IPv6地址，该参数可为新建实例的IPv6地址分配公网带宽。关联启动配置的伸缩组Ipv6AddressCount参数为0时，该参数不会生效。 */
  IPv6InternetAccessible?: IPv6InternetAccessible;
  /** 置放群组id，仅支持指定一个。 */
  DisasterRecoverGroupIds?: string[];
}

declare interface ModifyLaunchConfigurationAttributesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyLifecycleHookRequest {
  /** 生命周期挂钩ID。 */
  LifecycleHookId: string;
  /** 生命周期挂钩名称。 */
  LifecycleHookName?: string;
  /** 进入生命周期挂钩场景，取值包括： INSTANCE_LAUNCHING：实例启动后 INSTANCE_TERMINATING：实例销毁前 */
  LifecycleTransition?: string;
  /** 定义伸缩组在生命周期挂钩超时的情况下应采取的操作，取值包括： CONTINUE： 超时后继续伸缩活动 ABANDON：超时后终止伸缩活动 */
  DefaultResult?: string;
  /** 生命周期挂钩超时之前可以经过的最长时间（以秒为单位），范围从 30 到 7200 秒。 */
  HeartbeatTimeout?: number;
  /** 弹性伸缩向通知目标发送的附加信息。 */
  NotificationMetadata?: string;
  /** 进行生命周期挂钩的场景类型，取值范围包括`NORMAL`和 `EXTENSION`。说明：设置为`EXTENSION`值，在AttachInstances、DetachInstances、RemoveInstances 接口时会触发生命周期挂钩操作，值为`NORMAL`则不会在这些接口中触发生命周期挂钩。 */
  LifecycleTransitionType?: string;
  /** 通知目标信息。 */
  NotificationTarget?: NotificationTarget;
  /** 远程命令执行对象。 */
  LifecycleCommand?: LifecycleCommand;
}

declare interface ModifyLifecycleHookResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyLoadBalancerTargetAttributesRequest {
  /** 伸缩组ID */
  AutoScalingGroupId: string;
  /** 需修改目标规则属性的应用型负载均衡器列表，列表长度上限为100 */
  ForwardLoadBalancers: ForwardLoadBalancer[];
}

declare interface ModifyLoadBalancerTargetAttributesResponse {
  /** 伸缩活动ID */
  ActivityId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyLoadBalancersRequest {
  /** 伸缩组ID */
  AutoScalingGroupId: string;
  /** 传统负载均衡器ID列表，目前长度上限为20，LoadBalancerIds 和 ForwardLoadBalancers 二者同时最多只能指定一个 */
  LoadBalancerIds?: string[];
  /** 应用型负载均衡器列表，目前长度上限为100，LoadBalancerIds 和 ForwardLoadBalancers 二者同时最多只能指定一个 */
  ForwardLoadBalancers?: ForwardLoadBalancer[];
  /** 负载均衡器校验策略，取值包括 ALL 和 DIFF，默认取值为 ALL。 ALL，所有负载均衡器都合法则通过校验，否则校验报错。 DIFF，仅校验负载均衡器参数中实际变化的部分，如果合法则通过校验，否则校验报错。 */
  LoadBalancersCheckPolicy?: string;
}

declare interface ModifyLoadBalancersResponse {
  /** 伸缩活动ID */
  ActivityId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyNotificationConfigurationRequest {
  /** 待修改的通知ID。 */
  AutoScalingNotificationId: string;
  /** 通知类型，即为需要订阅的通知类型集合，取值范围如下：SCALE_OUT_SUCCESSFUL：扩容成功SCALE_OUT_FAILED：扩容失败SCALE_IN_SUCCESSFUL：缩容成功SCALE_IN_FAILED：缩容失败REPLACE_UNHEALTHY_INSTANCE_SUCCESSFUL：替换不健康子机成功REPLACE_UNHEALTHY_INSTANCE_FAILED：替换不健康子机失败 */
  NotificationTypes?: string[];
  /** 通知组ID，即为用户组ID集合，用户组ID可以通过[ListGroups](https://cloud.tencent.com/document/product/598/34589)查询。 */
  NotificationUserGroupIds?: string[];
  /** CMQ 队列或 TDMQ CMQ 队列名。 */
  QueueName?: string;
  /** CMQ 主题或 TDMQ CMQ 主题名。 */
  TopicName?: string;
}

declare interface ModifyNotificationConfigurationResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyScalingPolicyRequest {
  /** 告警策略ID。 */
  AutoScalingPolicyId: string;
  /** 告警策略名称。 */
  ScalingPolicyName?: string;
  /** 告警触发后，期望实例数修改方式，仅适用于简单策略。取值范围：CHANGE_IN_CAPACITY：增加或减少若干期望实例数EXACT_CAPACITY：调整至指定期望实例数 PERCENT_CHANGE_IN_CAPACITY：按百分比调整期望实例数 */
  AdjustmentType?: string;
  /** 告警触发后，期望实例数的调整值，仅适用于简单策略。当 AdjustmentType 为 CHANGE_IN_CAPACITY 时，AdjustmentValue 为正数表示告警触发后增加实例，为负数表示告警触发后减少实例 当 AdjustmentType 为 EXACT_CAPACITY 时，AdjustmentValue 的值即为告警触发后新的期望实例数，需要大于或等于0 当 AdjustmentType 为 PERCENT_CHANGE_IN_CAPACITY 时，AdjusmentValue 为正数表示告警触发后按百分比增加实例，为负数表示告警触发后按百分比减少实例，单位是：%。 */
  AdjustmentValue?: number;
  /** 冷却时间，仅适用于简单策略，单位为秒。 */
  Cooldown?: number;
  /** 告警监控指标，仅适用于简单策略。 */
  MetricAlarm?: MetricAlarm;
  /** 预定义监控项，仅适用于目标追踪策略。取值范围：ASG_AVG_CPU_UTILIZATION：平均CPU使用率ASG_AVG_LAN_TRAFFIC_OUT：平均内网出带宽ASG_AVG_LAN_TRAFFIC_IN：平均内网入带宽ASG_AVG_WAN_TRAFFIC_OUT：平均外网出带宽ASG_AVG_WAN_TRAFFIC_IN：平均外网出带宽 */
  PredefinedMetricType?: string;
  /** 目标值，仅适用于目标追踪策略。ASG_AVG_CPU_UTILIZATION：[1, 100)，单位：%ASG_AVG_LAN_TRAFFIC_OUT：>0，单位：MbpsASG_AVG_LAN_TRAFFIC_IN：>0，单位：MbpsASG_AVG_WAN_TRAFFIC_OUT：>0，单位：MbpsASG_AVG_WAN_TRAFFIC_IN：>0，单位：Mbps */
  TargetValue?: number;
  /** 实例预热时间，单位为秒，仅适用于目标追踪策略。取值范围为0-3600。 */
  EstimatedInstanceWarmup?: number;
  /** 是否禁用缩容，仅适用于目标追踪策略。取值范围：true：目标追踪策略仅触发扩容false：目标追踪策略触发扩容和缩容 */
  DisableScaleIn?: boolean;
  /** 通知组ID，即为用户组ID集合，用户组ID可以通过[ListGroups](https://cloud.tencent.com/document/product/598/34589)查询。如果需要清空通知用户组，需要在列表中传入特定字符串 "NULL"。 */
  NotificationUserGroupIds?: string[];
}

declare interface ModifyScalingPolicyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyScheduledActionRequest {
  /** 待修改的定时任务ID */
  ScheduledActionId: string;
  /** 定时任务名称。名称仅支持中文、英文、数字、下划线、分隔符"-"、小数点，最大长度不能超60个字节。同一伸缩组下必须唯一。 */
  ScheduledActionName?: string;
  /** 当定时任务触发时，设置的伸缩组最大实例数。 */
  MaxSize?: number;
  /** 当定时任务触发时，设置的伸缩组最小实例数。 */
  MinSize?: number;
  /** 当定时任务触发时，设置的伸缩组期望实例数。 */
  DesiredCapacity?: number;
  /** 定时任务的首次触发时间，取值为`北京时间`（UTC+8），按照`ISO8601`标准，格式：`YYYY-MM-DDThh:mm:ss+08:00`。 */
  StartTime?: string;
  /** 定时任务的结束时间，取值为`北京时间`（UTC+8），按照`ISO8601`标准，格式：`YYYY-MM-DDThh:mm:ss+08:00`。此参数与`Recurrence`需要同时指定，到达结束时间之后，定时任务将不再生效。 */
  EndTime?: string;
  /** 定时任务的重复方式。为标准 Cron 格式此参数与`EndTime`需要同时指定。 */
  Recurrence?: string;
}

declare interface ModifyScheduledActionResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RemoveInstancesRequest {
  /** 伸缩组ID */
  AutoScalingGroupId: string;
  /** CVM实例ID列表 */
  InstanceIds: string[];
}

declare interface RemoveInstancesResponse {
  /** 伸缩活动ID */
  ActivityId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ScaleInInstancesRequest {
  /** 伸缩组ID。 */
  AutoScalingGroupId: string;
  /** 希望缩容的实例数量。 */
  ScaleInNumber: number;
}

declare interface ScaleInInstancesResponse {
  /** 伸缩活动ID。 */
  ActivityId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ScaleOutInstancesRequest {
  /** 伸缩组ID。 */
  AutoScalingGroupId: string;
  /** 希望扩容的实例数量。 */
  ScaleOutNumber: number;
}

declare interface ScaleOutInstancesResponse {
  /** 伸缩活动ID。 */
  ActivityId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SetInstancesProtectionRequest {
  /** 伸缩组ID。 */
  AutoScalingGroupId: string;
  /** 实例ID。 */
  InstanceIds: string[];
  /** 实例是否需要设置保护。 */
  ProtectedFromScaleIn: boolean;
}

declare interface SetInstancesProtectionResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StartAutoScalingInstancesRequest {
  /** 伸缩组ID */
  AutoScalingGroupId: string;
  /** 待开启的CVM实例ID列表 */
  InstanceIds: string[];
}

declare interface StartAutoScalingInstancesResponse {
  /** 伸缩活动ID */
  ActivityId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StopAutoScalingInstancesRequest {
  /** 伸缩组ID */
  AutoScalingGroupId: string;
  /** 待关闭的CVM实例ID列表 */
  InstanceIds: string[];
  /** 关闭的实例是否收费，取值为： KEEP_CHARGING：关机继续收费 STOP_CHARGING：关机停止收费默认为 KEEP_CHARGING */
  StoppedMode?: string;
}

declare interface StopAutoScalingInstancesResponse {
  /** 伸缩活动ID */
  ActivityId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpgradeLaunchConfigurationRequest {
  /** 启动配置ID。 */
  LaunchConfigurationId: string;
  /** 指定有效的[镜像](https://cloud.tencent.com/document/product/213/4940)ID，格式形如`img-8toqc6s3`。镜像类型分为四种：公共镜像自定义镜像共享镜像服务市场镜像可通过以下方式获取可用的镜像ID：`公共镜像`、`自定义镜像`、`共享镜像`的镜像ID可通过登录[控制台](https://console.cloud.tencent.com/cvm/image?rid=1&imageType=PUBLIC_IMAGE)查询；`服务镜像市场`的镜像ID可通过[云市场](https://market.cloud.tencent.com/list)查询。通过调用接口 [DescribeImages](https://cloud.tencent.com/document/api/213/15715) ，取返回信息中的`ImageId`字段。 */
  ImageId: string;
  /** 实例机型列表，不同实例机型指定了不同的资源规格，最多支持5种实例机型。 */
  InstanceTypes: string[];
  /** 启动配置显示名称。名称仅支持中文、英文、数字、下划线、分隔符"-"、小数点，最大长度不能超60个字节。 */
  LaunchConfigurationName: string;
  /** 实例数据盘配置信息。若不指定该参数，则默认不购买数据盘，最多支持指定11块数据盘。 */
  DataDisks?: DataDisk[];
  /** 增强服务。通过该参数可以指定是否开启云安全、云监控等服务。若不指定该参数，则默认开启云监控、云安全服务。 */
  EnhancedService?: EnhancedService;
  /** 实例计费类型，CVM默认值按照POSTPAID_BY_HOUR处理。POSTPAID_BY_HOUR：按小时后付费SPOTPAID：竞价付费PREPAID：预付费，即包年包月 */
  InstanceChargeType?: string;
  /** 实例的市场相关选项，如竞价实例相关参数，若指定实例的付费模式为竞价付费则该参数必传。 */
  InstanceMarketOptions?: InstanceMarketOptionsRequest;
  /** 实例类型校验策略，取值包括 ALL 和 ANY，默认取值为ANY。 ALL，所有实例类型（InstanceType）都可用则通过校验，否则校验报错。 ANY，存在任何一个实例类型（InstanceType）可用则通过校验，否则校验报错。实例类型不可用的常见原因包括该实例类型售罄、对应云盘售罄等。如果 InstanceTypes 中一款机型不存在或者已下线，则无论 InstanceTypesCheckPolicy 采用何种取值，都会校验报错。 */
  InstanceTypesCheckPolicy?: string;
  /** 公网带宽相关信息设置。若不指定该参数，则默认公网带宽为0Mbps。 */
  InternetAccessible?: InternetAccessible;
  /** 实例登录设置。通过该参数可以设置实例的登录方式密码、密钥或保持镜像的原始登录设置。默认情况下会随机生成密码，并以站内信方式知会到用户。 */
  LoginSettings?: LoginSettings;
  /** 实例所属项目ID。不填为默认项目。 */
  ProjectId?: number;
  /** 实例所属安全组。该参数可以通过调用 [DescribeSecurityGroups](https://cloud.tencent.com/document/api/215/15808) 的返回值中的`SecurityGroupId`字段来获取。若不指定该参数，则默认不绑定安全组。 */
  SecurityGroupIds?: string[];
  /** 实例系统盘配置信息。若不指定该参数，则按照系统默认值进行分配。 */
  SystemDisk?: SystemDisk;
  /** 经过 Base64 编码后的自定义数据，最大长度不超过16KB。 */
  UserData?: string;
  /** 标签列表。通过指定该参数，可以为扩容的实例绑定标签。最多支持指定10个标签。 */
  InstanceTags?: InstanceTag[];
  /** CAM角色名称。可通过DescribeRoleList接口返回值中的roleName获取。 */
  CamRoleName?: string;
  /** 云服务器主机名（HostName）的相关设置。 */
  HostNameSettings?: HostNameSettings;
  /** 云服务器实例名（InstanceName）的相关设置。 */
  InstanceNameSettings?: InstanceNameSettings;
  /** 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月实例的购买时长、是否设置自动续费等属性。若指定实例的付费模式为预付费则该参数必传。 */
  InstanceChargePrepaid?: InstanceChargePrepaid;
  /** 云盘类型选择策略，取值范围：ORIGINAL：使用设置的云盘类型AUTOMATIC：自动选择当前可用的云盘类型 */
  DiskTypePolicy?: string;
  /** IPv6公网带宽相关信息设置。若新建实例包含IPv6地址，该参数可为新建实例的IPv6地址分配公网带宽。关联启动配置的伸缩组Ipv6AddressCount参数为0时，该参数不会生效。 */
  IPv6InternetAccessible?: IPv6InternetAccessible;
}

declare interface UpgradeLaunchConfigurationResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpgradeLifecycleHookRequest {
  /** 生命周期挂钩ID */
  LifecycleHookId: string;
  /** 生命周期挂钩名称 */
  LifecycleHookName: string;
  /** 进行生命周期挂钩的场景，取值范围包括“INSTANCE_LAUNCHING”和“INSTANCE_TERMINATING” */
  LifecycleTransition: string;
  /** 定义伸缩组在生命周期挂钩超时的情况下应采取的操作，取值范围是“CONTINUE”或“ABANDON”，默认值为“CONTINUE” */
  DefaultResult?: string;
  /** 生命周期挂钩超时之前可以经过的最长时间（以秒为单位），范围从30到7200秒，默认值为300秒 */
  HeartbeatTimeout?: number;
  /** 弹性伸缩向通知目标发送的附加信息，配置通知时使用，默认值为空字符串"" */
  NotificationMetadata?: string;
  /** 通知目标。NotificationTarget和LifecycleCommand参数互斥，二者不可同时指定。 */
  NotificationTarget?: NotificationTarget;
  /** 进行生命周期挂钩的场景类型，取值范围包括NORMAL 和 EXTENSION。说明：设置为EXTENSION值，在AttachInstances、DetachInstances、RemoveInstaces接口时会触发生命周期挂钩操作，值为NORMAL则不会在这些接口中触发生命周期挂钩。 */
  LifecycleTransitionType?: string;
  /** 远程命令执行对象。NotificationTarget和LifecycleCommand参数互斥，二者不可同时指定。 */
  LifecycleCommand?: LifecycleCommand;
}

declare interface UpgradeLifecycleHookResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link As 弹性伸缩} */
declare interface As {
  (): Versions;
  /** 添加 CVM 实例到伸缩组 {@link AttachInstancesRequest} {@link AttachInstancesResponse} */
  AttachInstances(data: AttachInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<AttachInstancesResponse>;
  /** 添加负载均衡器 {@link AttachLoadBalancersRequest} {@link AttachLoadBalancersResponse} */
  AttachLoadBalancers(data: AttachLoadBalancersRequest, config?: AxiosRequestConfig): AxiosPromise<AttachLoadBalancersResponse>;
  /** 清除启动配置属性 {@link ClearLaunchConfigurationAttributesRequest} {@link ClearLaunchConfigurationAttributesResponse} */
  ClearLaunchConfigurationAttributes(data: ClearLaunchConfigurationAttributesRequest, config?: AxiosRequestConfig): AxiosPromise<ClearLaunchConfigurationAttributesResponse>;
  /** 完成生命周期动作 {@link CompleteLifecycleActionRequest} {@link CompleteLifecycleActionResponse} */
  CompleteLifecycleAction(data: CompleteLifecycleActionRequest, config?: AxiosRequestConfig): AxiosPromise<CompleteLifecycleActionResponse>;
  /** 创建伸缩组 {@link CreateAutoScalingGroupRequest} {@link CreateAutoScalingGroupResponse} */
  CreateAutoScalingGroup(data: CreateAutoScalingGroupRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAutoScalingGroupResponse>;
  /** 根据实例创建启动配置及伸缩组 {@link CreateAutoScalingGroupFromInstanceRequest} {@link CreateAutoScalingGroupFromInstanceResponse} */
  CreateAutoScalingGroupFromInstance(data: CreateAutoScalingGroupFromInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAutoScalingGroupFromInstanceResponse>;
  /** 创建启动配置 {@link CreateLaunchConfigurationRequest} {@link CreateLaunchConfigurationResponse} */
  CreateLaunchConfiguration(data: CreateLaunchConfigurationRequest, config?: AxiosRequestConfig): AxiosPromise<CreateLaunchConfigurationResponse>;
  /** 创建生命周期挂钩 {@link CreateLifecycleHookRequest} {@link CreateLifecycleHookResponse} */
  CreateLifecycleHook(data: CreateLifecycleHookRequest, config?: AxiosRequestConfig): AxiosPromise<CreateLifecycleHookResponse>;
  /** 创建通知 {@link CreateNotificationConfigurationRequest} {@link CreateNotificationConfigurationResponse} */
  CreateNotificationConfiguration(data: CreateNotificationConfigurationRequest, config?: AxiosRequestConfig): AxiosPromise<CreateNotificationConfigurationResponse>;
  /** 创建告警触发策略 {@link CreateScalingPolicyRequest} {@link CreateScalingPolicyResponse} */
  CreateScalingPolicy(data: CreateScalingPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<CreateScalingPolicyResponse>;
  /** 创建定时任务 {@link CreateScheduledActionRequest} {@link CreateScheduledActionResponse} */
  CreateScheduledAction(data: CreateScheduledActionRequest, config?: AxiosRequestConfig): AxiosPromise<CreateScheduledActionResponse>;
  /** 删除伸缩组 {@link DeleteAutoScalingGroupRequest} {@link DeleteAutoScalingGroupResponse} */
  DeleteAutoScalingGroup(data: DeleteAutoScalingGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAutoScalingGroupResponse>;
  /** 删除启动配置 {@link DeleteLaunchConfigurationRequest} {@link DeleteLaunchConfigurationResponse} */
  DeleteLaunchConfiguration(data: DeleteLaunchConfigurationRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteLaunchConfigurationResponse>;
  /** 删除生命周期挂钩 {@link DeleteLifecycleHookRequest} {@link DeleteLifecycleHookResponse} */
  DeleteLifecycleHook(data: DeleteLifecycleHookRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteLifecycleHookResponse>;
  /** 删除通知 {@link DeleteNotificationConfigurationRequest} {@link DeleteNotificationConfigurationResponse} */
  DeleteNotificationConfiguration(data?: DeleteNotificationConfigurationRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteNotificationConfigurationResponse>;
  /** 删除告警触发策略 {@link DeleteScalingPolicyRequest} {@link DeleteScalingPolicyResponse} */
  DeleteScalingPolicy(data: DeleteScalingPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteScalingPolicyResponse>;
  /** 删除定时任务 {@link DeleteScheduledActionRequest} {@link DeleteScheduledActionResponse} */
  DeleteScheduledAction(data: DeleteScheduledActionRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteScheduledActionResponse>;
  /** 查询用户账号的资源限制 {@link DescribeAccountLimitsRequest} {@link DescribeAccountLimitsResponse} */
  DescribeAccountLimits(data?: DescribeAccountLimitsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAccountLimitsResponse>;
  /** 查询伸缩活动 {@link DescribeAutoScalingActivitiesRequest} {@link DescribeAutoScalingActivitiesResponse} */
  DescribeAutoScalingActivities(data?: DescribeAutoScalingActivitiesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAutoScalingActivitiesResponse>;
  /** 查询弹性伸缩配置建议 {@link DescribeAutoScalingAdvicesRequest} {@link DescribeAutoScalingAdvicesResponse} */
  DescribeAutoScalingAdvices(data: DescribeAutoScalingAdvicesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAutoScalingAdvicesResponse>;
  /** 查询伸缩组最新一次伸缩活动 {@link DescribeAutoScalingGroupLastActivitiesRequest} {@link DescribeAutoScalingGroupLastActivitiesResponse} */
  DescribeAutoScalingGroupLastActivities(data: DescribeAutoScalingGroupLastActivitiesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAutoScalingGroupLastActivitiesResponse>;
  /** 查询伸缩组 {@link DescribeAutoScalingGroupsRequest} {@link DescribeAutoScalingGroupsResponse} */
  DescribeAutoScalingGroups(data?: DescribeAutoScalingGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAutoScalingGroupsResponse>;
  /** 查询实例 {@link DescribeAutoScalingInstancesRequest} {@link DescribeAutoScalingInstancesResponse} */
  DescribeAutoScalingInstances(data?: DescribeAutoScalingInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAutoScalingInstancesResponse>;
  /** 查询启动配置 {@link DescribeLaunchConfigurationsRequest} {@link DescribeLaunchConfigurationsResponse} */
  DescribeLaunchConfigurations(data?: DescribeLaunchConfigurationsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLaunchConfigurationsResponse>;
  /** 查询生命周期挂钩 {@link DescribeLifecycleHooksRequest} {@link DescribeLifecycleHooksResponse} */
  DescribeLifecycleHooks(data?: DescribeLifecycleHooksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLifecycleHooksResponse>;
  /** 查询通知 {@link DescribeNotificationConfigurationsRequest} {@link DescribeNotificationConfigurationsResponse} */
  DescribeNotificationConfigurations(data?: DescribeNotificationConfigurationsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNotificationConfigurationsResponse>;
  /** 查询告警触发策略 {@link DescribeScalingPoliciesRequest} {@link DescribeScalingPoliciesResponse} */
  DescribeScalingPolicies(data?: DescribeScalingPoliciesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeScalingPoliciesResponse>;
  /** 查询定时任务 {@link DescribeScheduledActionsRequest} {@link DescribeScheduledActionsResponse} */
  DescribeScheduledActions(data?: DescribeScheduledActionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeScheduledActionsResponse>;
  /** 从伸缩组移出 CVM 实例 {@link DetachInstancesRequest} {@link DetachInstancesResponse} */
  DetachInstances(data: DetachInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DetachInstancesResponse>;
  /** 移出负载均衡器 {@link DetachLoadBalancersRequest} {@link DetachLoadBalancersResponse} */
  DetachLoadBalancers(data: DetachLoadBalancersRequest, config?: AxiosRequestConfig): AxiosPromise<DetachLoadBalancersResponse>;
  /** 停用伸缩组 {@link DisableAutoScalingGroupRequest} {@link DisableAutoScalingGroupResponse} */
  DisableAutoScalingGroup(data: DisableAutoScalingGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DisableAutoScalingGroupResponse>;
  /** 启用伸缩组 {@link EnableAutoScalingGroupRequest} {@link EnableAutoScalingGroupResponse} */
  EnableAutoScalingGroup(data: EnableAutoScalingGroupRequest, config?: AxiosRequestConfig): AxiosPromise<EnableAutoScalingGroupResponse>;
  /** 触发伸缩策略 {@link ExecuteScalingPolicyRequest} {@link ExecuteScalingPolicyResponse} */
  ExecuteScalingPolicy(data: ExecuteScalingPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<ExecuteScalingPolicyResponse>;
  /** 修改伸缩组 {@link ModifyAutoScalingGroupRequest} {@link ModifyAutoScalingGroupResponse} */
  ModifyAutoScalingGroup(data: ModifyAutoScalingGroupRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAutoScalingGroupResponse>;
  /** 修改期望实例数 {@link ModifyDesiredCapacityRequest} {@link ModifyDesiredCapacityResponse} */
  ModifyDesiredCapacity(data: ModifyDesiredCapacityRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDesiredCapacityResponse>;
  /** 修改启动配置属性 {@link ModifyLaunchConfigurationAttributesRequest} {@link ModifyLaunchConfigurationAttributesResponse} */
  ModifyLaunchConfigurationAttributes(data: ModifyLaunchConfigurationAttributesRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyLaunchConfigurationAttributesResponse>;
  /** 修改生命周期挂钩 {@link ModifyLifecycleHookRequest} {@link ModifyLifecycleHookResponse} */
  ModifyLifecycleHook(data: ModifyLifecycleHookRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyLifecycleHookResponse>;
  /** 修改负载均衡器目标规则属性 {@link ModifyLoadBalancerTargetAttributesRequest} {@link ModifyLoadBalancerTargetAttributesResponse} */
  ModifyLoadBalancerTargetAttributes(data: ModifyLoadBalancerTargetAttributesRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyLoadBalancerTargetAttributesResponse>;
  /** 修改伸缩组的负载均衡器 {@link ModifyLoadBalancersRequest} {@link ModifyLoadBalancersResponse} */
  ModifyLoadBalancers(data: ModifyLoadBalancersRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyLoadBalancersResponse>;
  /** 修改通知 {@link ModifyNotificationConfigurationRequest} {@link ModifyNotificationConfigurationResponse} */
  ModifyNotificationConfiguration(data: ModifyNotificationConfigurationRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyNotificationConfigurationResponse>;
  /** 修改告警触发策略 {@link ModifyScalingPolicyRequest} {@link ModifyScalingPolicyResponse} */
  ModifyScalingPolicy(data: ModifyScalingPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyScalingPolicyResponse>;
  /** 修改定时任务 {@link ModifyScheduledActionRequest} {@link ModifyScheduledActionResponse} */
  ModifyScheduledAction(data: ModifyScheduledActionRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyScheduledActionResponse>;
  /** 从伸缩组中删除 CVM 实例 {@link RemoveInstancesRequest} {@link RemoveInstancesResponse} */
  RemoveInstances(data: RemoveInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<RemoveInstancesResponse>;
  /** 指定数量缩容实例 {@link ScaleInInstancesRequest} {@link ScaleInInstancesResponse} */
  ScaleInInstances(data: ScaleInInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<ScaleInInstancesResponse>;
  /** 指定数量扩容实例 {@link ScaleOutInstancesRequest} {@link ScaleOutInstancesResponse} */
  ScaleOutInstances(data: ScaleOutInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<ScaleOutInstancesResponse>;
  /** 设置实例保护 {@link SetInstancesProtectionRequest} {@link SetInstancesProtectionResponse} */
  SetInstancesProtection(data: SetInstancesProtectionRequest, config?: AxiosRequestConfig): AxiosPromise<SetInstancesProtectionResponse>;
  /** 开启伸缩组内 CVM 实例 {@link StartAutoScalingInstancesRequest} {@link StartAutoScalingInstancesResponse} */
  StartAutoScalingInstances(data: StartAutoScalingInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<StartAutoScalingInstancesResponse>;
  /** 关闭伸缩组内 CVM 实例 {@link StopAutoScalingInstancesRequest} {@link StopAutoScalingInstancesResponse} */
  StopAutoScalingInstances(data: StopAutoScalingInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<StopAutoScalingInstancesResponse>;
  /** 升级启动配置 {@link UpgradeLaunchConfigurationRequest} {@link UpgradeLaunchConfigurationResponse} */
  UpgradeLaunchConfiguration(data: UpgradeLaunchConfigurationRequest, config?: AxiosRequestConfig): AxiosPromise<UpgradeLaunchConfigurationResponse>;
  /** 升级生命周期挂钩 {@link UpgradeLifecycleHookRequest} {@link UpgradeLifecycleHookResponse} */
  UpgradeLifecycleHook(data: UpgradeLifecycleHookRequest, config?: AxiosRequestConfig): AxiosPromise<UpgradeLifecycleHookResponse>;
}

export declare type Versions = ["2018-04-19"];

export default As;
