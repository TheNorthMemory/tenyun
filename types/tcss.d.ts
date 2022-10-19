/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 容器运行时安全，子策略信息 */
declare interface AbnormalProcessChildRuleInfo {
  /** 策略模式， RULE_MODE_RELEASE: 放行 RULE_MODE_ALERT: 告警 RULE_MODE_HOLDUP:拦截 */
  RuleMode: string;
  /** 进程路径 */
  ProcessPath: string;
  /** 子策略id */
  RuleId?: string | null;
  /** 威胁等级，HIGH:高，MIDDLE:中，LOW:低 */
  RuleLevel?: string | null;
}

/** 运行时容器访问控制事件描述信息 */
declare interface AbnormalProcessEventDescription {
  /** 事件规则 */
  Description: string;
  /** 解决方案 */
  Solution: string;
  /** 事件备注信息 */
  Remark: string | null;
  /** 命中规则详细信息 */
  MatchRule: AbnormalProcessChildRuleInfo;
  /** 命中规则名称，PROXY_TOOL：代理软件，TRANSFER_CONTROL：横向渗透，ATTACK_CMD：恶意命令，REVERSE_SHELL：反弹shell，FILELESS：无文件程序执行，RISK_CMD：高危命令，ABNORMAL_CHILD_PROC：敏感服务异常子进程启动，USER_DEFINED_RULE：用户自定义规则 */
  RuleName: string;
  /** 命中规则的id */
  RuleId: string;
  /** 事件最后一次处理的时间 */
  OperationTime: string | null;
  /** 命中策略名称：SYSTEM_DEFINED_RULE （系统策略）或 用户自定义的策略名字 */
  GroupName: string | null;
}

/** 容器运行时安全异常进程信息 */
declare interface AbnormalProcessEventInfo {
  /** 进程目录 */
  ProcessPath: string;
  /** 事件类型，MALICE_PROCESS_START:恶意进程启动 */
  EventType: string;
  /** 命中规则名称，PROXY_TOOL：代理软件，TRANSFER_CONTROL：横向渗透，ATTACK_CMD：恶意命令，REVERSE_SHELL：反弹shell，FILELESS：无文件程序执行，RISK_CMD：高危命令，ABNORMAL_CHILD_PROC：敏感服务异常子进程启动，USER_DEFINED_RULE：用户自定义规则 */
  MatchRuleName: string;
  /** 生成时间 */
  FoundTime: string;
  /** 容器名 */
  ContainerName: string;
  /** 镜像名 */
  ImageName: string;
  /** 动作执行结果， BEHAVIOR_NONE: 无 BEHAVIOR_ALERT: 告警 BEHAVIOR_RELEASE：放行 BEHAVIOR_HOLDUP_FAILED:拦截失败 BEHAVIOR_HOLDUP_SUCCESSED：拦截失败 */
  Behavior: string;
  /** 状态，EVENT_UNDEAL:事件未处理 EVENT_DEALED:事件已经处理 EVENT_INGNORE：事件已经忽略 */
  Status: string;
  /** 事件记录的唯一id */
  Id: string;
  /** 镜像id，用于跳转 */
  ImageId: string;
  /** 容器id，用于跳转 */
  ContainerId: string;
  /** 事件解决方案 */
  Solution: string;
  /** 事件详细描述 */
  Description: string;
  /** 命中策略id */
  MatchRuleId: string;
  /** 命中规则行为：RULE_MODE_RELEASE 放行RULE_MODE_ALERT 告警RULE_MODE_HOLDUP 拦截 */
  MatchAction: string;
  /** 命中规则进程信息 */
  MatchProcessPath: string;
  /** 规则是否存在 */
  RuleExist: boolean;
  /** 事件数量 */
  EventCount: number;
  /** 最近生成时间 */
  LatestFoundTime: string;
  /** 规则组Id */
  RuleId: string;
  /** 命中策略名称：SYSTEM_DEFINED_RULE （系统策略）或 用户自定义的策略名字 */
  MatchGroupName: string;
  /** 命中规则等级，HIGH：高危，MIDDLE：中危，LOW：低危。 */
  MatchRuleLevel: string;
  /** 网络状态未隔离 NORMAL已隔离 ISOLATED隔离中 ISOLATING隔离失败	ISOLATE_FAILED解除隔离中 RESTORING解除隔离失败 RESTORE_FAILED */
  ContainerNetStatus: string | null;
  /** 容器子状态"AGENT_OFFLINE" //Agent离线"NODE_DESTROYED" //节点已销毁"CONTAINER_EXITED" //容器已退出"CONTAINER_DESTROYED" //容器已销毁"SHARED_HOST" // 容器与主机共享网络"RESOURCE_LIMIT" //隔离操作资源超限"UNKNOW" // 原因未知 */
  ContainerNetSubStatus: string | null;
  /** 容器隔离操作来源 */
  ContainerIsolateOperationSrc: string | null;
  /** 容器状态正在运行: RUNNING暂停: PAUSED停止: STOPPED已经创建: CREATED已经销毁: DESTROYED正在重启中: RESTARTING迁移中: REMOVING */
  ContainerStatus: string;
}

/** 运行时安全，异常进程检测策略 */
declare interface AbnormalProcessRuleInfo {
  /** true:策略启用，false:策略禁用 */
  IsEnable: boolean;
  /** 生效镜像id，空数组代表全部镜像 */
  ImageIds: string[];
  /** 用户策略的子策略数组 */
  ChildRules: AbnormalProcessChildRuleInfo[];
  /** 策略名字 */
  RuleName: string;
  /** 策略id */
  RuleId?: string | null;
  /** 系统策略的子策略数组 */
  SystemChildRules?: AbnormalProcessSystemChildRuleInfo[];
  /** 是否是系统默认策略 */
  IsDefault?: boolean;
}

/** 异常进程系统策略的子策略信息 */
declare interface AbnormalProcessSystemChildRuleInfo {
  /** 子策略Id */
  RuleId: string;
  /** 子策略状态，true为开启，false为关闭 */
  IsEnable: boolean;
  /** 策略模式, RULE_MODE_RELEASE: 放行 RULE_MODE_ALERT: 告警 RULE_MODE_HOLDUP:拦截 */
  RuleMode: string;
  /** 子策略检测的行为类型PROXY_TOOL： 代理软件TRANSFER_CONTROL：横向渗透ATTACK_CMD： 恶意命令REVERSE_SHELL：反弹shellFILELESS：无文件程序执行RISK_CMD：高危命令ABNORMAL_CHILD_PROC: 敏感服务异常子进程启动 */
  RuleType: string;
  /** 威胁等级，HIGH:高，MIDDLE:中，LOW:低 */
  RuleLevel?: string | null;
}

/** 容器运行时安全，访问控制子策略信息 */
declare interface AccessControlChildRuleInfo {
  /** 策略模式, RULE_MODE_RELEASE: 放行 RULE_MODE_ALERT: 告警 RULE_MODE_HOLDUP:拦截 */
  RuleMode: string;
  /** 进程路径 */
  ProcessPath: string;
  /** 被访问文件路径，仅仅在访问控制生效 */
  TargetFilePath: string;
  /** 子策略id */
  RuleId?: string | null;
}

/** 运行时容器访问控制事件描述信息 */
declare interface AccessControlEventDescription {
  /** 事件规则 */
  Description: string;
  /** 解决方案 */
  Solution: string;
  /** 事件备注信息 */
  Remark: string | null;
  /** 命中规则详细信息 */
  MatchRule: AccessControlChildRuleInfo;
  /** 命中规则名字 */
  RuleName: string;
  /** 命中规则id */
  RuleId: string;
  /** 事件最后一次处理的时间 */
  OperationTime: string | null;
}

/** 容器运行时安全访问控制事件信息 */
declare interface AccessControlEventInfo {
  /** 进程名称 */
  ProcessName: string;
  /** 命中规则名称 */
  MatchRuleName: string;
  /** 生成时间 */
  FoundTime: string;
  /** 容器名 */
  ContainerName: string;
  /** 镜像名 */
  ImageName: string;
  /** 动作执行结果， BEHAVIOR_NONE: 无 BEHAVIOR_ALERT: 告警 BEHAVIOR_RELEASE：放行 BEHAVIOR_HOLDUP_FAILED:拦截失败 BEHAVIOR_HOLDUP_SUCCESSED：拦截失败 */
  Behavior: string;
  /** 状态0:未处理 “EVENT_UNDEAL”:事件未处理 "EVENT_DEALED":事件已经处理 "EVENT_INGNORE"：事件已经忽略 */
  Status: string;
  /** 事件记录的唯一id */
  Id: string;
  /** 文件名称 */
  FileName: string;
  /** 事件类型， FILE_ABNORMAL_READ:文件异常读取 */
  EventType: string;
  /** 镜像id, 用于跳转 */
  ImageId: string;
  /** 容器id, 用于跳转 */
  ContainerId: string;
  /** 事件解决方案 */
  Solution: string;
  /** 事件详细描述 */
  Description: string;
  /** 命中策略id */
  MatchRuleId: string;
  /** 命中规则行为：RULE_MODE_RELEASE 放行RULE_MODE_ALERT 告警RULE_MODE_HOLDUP 拦截 */
  MatchAction: string;
  /** 命中规则进程信息 */
  MatchProcessPath: string;
  /** 命中规则文件信息 */
  MatchFilePath: string;
  /** 文件路径，包含名字 */
  FilePath: string;
  /** 规则是否存在 */
  RuleExist: boolean;
  /** 事件数量 */
  EventCount: number;
  /** 最近生成时间 */
  LatestFoundTime: string;
  /** 规则组id */
  RuleId: string;
  /** 网络状态未隔离 NORMAL已隔离 ISOLATED隔离中 ISOLATING隔离失败	ISOLATE_FAILED解除隔离中 RESTORING解除隔离失败 RESTORE_FAILED */
  ContainerNetStatus: string;
  /** 容器子状态"AGENT_OFFLINE" //Agent离线"NODE_DESTROYED" //节点已销毁"CONTAINER_EXITED" //容器已退出"CONTAINER_DESTROYED" //容器已销毁"SHARED_HOST" // 容器与主机共享网络"RESOURCE_LIMIT" //隔离操作资源超限"UNKNOW" // 原因未知 */
  ContainerNetSubStatus: string;
  /** 容器隔离操作来源 */
  ContainerIsolateOperationSrc: string;
  /** 容器状态正在运行: RUNNING暂停: PAUSED停止: STOPPED已经创建: CREATED已经销毁: DESTROYED正在重启中: RESTARTING迁移中: REMOVING */
  ContainerStatus: string;
}

/** 容器运行时，访问控制策略信息 */
declare interface AccessControlRuleInfo {
  /** 开关,true:开启，false:禁用 */
  IsEnable: boolean;
  /** 生效惊现id，空数组代表全部镜像 */
  ImageIds: string[];
  /** 用户策略的子策略数组 */
  ChildRules: AccessControlChildRuleInfo[];
  /** 策略名字 */
  RuleName: string;
  /** 策略id */
  RuleId?: string | null;
  /** 系统策略的子策略数组 */
  SystemChildRules?: AccessControlSystemChildRuleInfo[];
  /** 是否是系统默认策略 */
  IsDefault?: boolean;
}

/** 容器运行时安全，访问控制系统策略的子策略信息 */
declare interface AccessControlSystemChildRuleInfo {
  /** 子策略Id */
  RuleId: string;
  /** 策略模式, RULE_MODE_RELEASE: 放行 RULE_MODE_ALERT: 告警 RULE_MODE_HOLDUP:拦截 */
  RuleMode: string;
  /** 子策略状态，true为开启，false为关闭 */
  IsEnable: boolean;
  /** 子策略检测的入侵行为类型CHANGE_CRONTAB：篡改计划任务CHANGE_SYS_BIN：篡改系统程序CHANGE_USRCFG：篡改用户配置 */
  RuleType: string;
}

/** 受影响的节点类型结构体 */
declare interface AffectedNodeItem {
  /** 集群ID */
  ClusterId: string;
  /** 集群名字 */
  ClusterName: string;
  /** 实例id */
  InstanceId: string;
  /** 内网ip地址 */
  PrivateIpAddresses: string;
  /** 节点的角色，Master、Work等 */
  InstanceRole: string;
  /** k8s版本 */
  ClusterVersion: string;
  /** 运行时组件,docker或者containerd */
  ContainerRuntime: string;
  /** 区域 */
  Region: string;
  /** 检查结果的验证信息 */
  VerifyInfo: string;
}

/** 集群安全检查受影响的工作负载Item */
declare interface AffectedWorkloadItem {
  /** 集群Id */
  ClusterId: string;
  /** 集群名字 */
  ClusterName: string;
  /** 工作负载名称 */
  WorkloadName: string;
  /** 工作负载类型 */
  WorkloadType: string;
  /** 区域 */
  Region: string;
  /** 检测结果的验证信息 */
  VerifyInfo: string;
}

/** 容器安全描述键值对过滤器，用于条件过滤查询。例如过滤ID、名称、状态等若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。 */
declare interface AssetFilters {
  /** 过滤键的名称 */
  Name: string;
  /** 一个或者多个过滤值。 */
  Values: string[];
  /** 是否模糊查询 */
  ExactMatch?: boolean;
}

/** 容器安全资产镜像简略信息 */
declare interface AssetSimpleImageInfo {
  /** 镜像ID */
  ImageID: string;
  /** 镜像名称 */
  ImageName: string;
  /** 关联容器个数 */
  ContainerCnt: number;
  /** 最后扫描时间 */
  ScanTime: string;
  /** 镜像大小 */
  Size: number;
}

/** 表示一条集群安全检测项的详细信息 */
declare interface ClusterCheckItem {
  /** 唯一的检测项的ID */
  CheckItemId: number | null;
  /** 风险项的名称 */
  Name: string;
  /** 检测项详细描述。 */
  ItemDetail: string | null;
  /** 威胁等级。严重Serious,高危High,中危Middle,提示Hint */
  RiskLevel: string | null;
  /** 检查对象、风险对象.Runc,Kubelet,Containerd,Pods */
  RiskTarget: string | null;
  /** 风险类别,漏洞风险CVERisk,配置风险ConfigRisk */
  RiskType: string | null;
  /** 检测项所属的风险类型,权限提升:PrivilegePromotion,拒绝服务:RefuseService,目录穿越:DirectoryEscape,未授权访问:UnauthorizedAccess,权限许可和访问控制问题:PrivilegeAndAccessControl,敏感信息泄露:SensitiveInfoLeak */
  RiskAttribute: string | null;
  /** 风险特征,Tag.存在EXP:ExistEXP,存在POD:ExistPOC,无需重启:NoNeedReboot, 服务重启:ServerRestart,远程信息泄露:RemoteInfoLeak,远程拒绝服务:RemoteRefuseService,远程利用:RemoteExploit,远程执行:RemoteExecute */
  RiskProperty: string | null;
  /** CVE编号 */
  CVENumber: string | null;
  /** 披露时间 */
  DiscoverTime: string | null;
  /** 解决方案 */
  Solution: string | null;
  /** CVSS信息,用于画图 */
  CVSS: string | null;
  /** CVSS分数 */
  CVSSScore: string | null;
  /** 参考连接 */
  RelateLink: string | null;
  /** 影响类型，为Node或者Workload */
  AffectedType: string | null;
  /** 受影响的版本信息 */
  AffectedVersion: string | null;
  /** 忽略的资产数量 */
  IgnoredAssetNum: number | null;
  /** 是否忽略该检测项 */
  IsIgnored: boolean | null;
  /** 受影响评估 */
  RiskAssessment: string | null;
}

/** 集群检查任务入参 */
declare interface ClusterCheckTaskItem {
  /** 指定要扫描的集群ID */
  ClusterId: string;
  /** 集群所属地域 */
  ClusterRegion: string;
  /** 指定要扫描的节点IP */
  NodeIp?: string;
  /** 按照要扫描的workload名字 */
  WorkloadName?: string;
}

/** CreateCheckComponent的入口参数,用于批量安装防御容器 */
declare interface ClusterCreateComponentItem {
  /** 要安装组件的集群ID。 */
  ClusterId: string;
  /** 该集群对应的地域 */
  ClusterRegion: string;
}

/** 集群资产返回的结构体 */
declare interface ClusterInfoItem {
  /** 集群id */
  ClusterId: string;
  /** 集群名字 */
  ClusterName: string;
  /** 集群版本 */
  ClusterVersion: string;
  /** 集群操作系统 */
  ClusterOs: string;
  /** 集群类型 */
  ClusterType: string;
  /** 集群节点数 */
  ClusterNodeNum: number;
  /** 集群区域 */
  Region: string;
  /** 监控组件的状态，为Defender_Uninstall、Defender_Normal、Defender_Error、Defender_Installing */
  DefenderStatus: string;
  /** 集群状态 */
  ClusterStatus: string;
  /** 集群的检测模式，为Cluster_Normal或者Cluster_Actived. */
  ClusterCheckMode: string;
  /** 是否自动定期检测 */
  ClusterAutoCheck: boolean;
  /** 防护容器部署失败原因，为UserDaemonSetNotReady时,和UnreadyNodeNum转成"N个节点防御容器为就绪"，其他错误直接展示 */
  DefenderErrorReason: string;
  /** 防御容器没有ready状态的节点数量 */
  UnreadyNodeNum: number;
  /** 严重风险检查项的数量 */
  SeriousRiskCount: number;
  /** 高风险检查项的数量 */
  HighRiskCount: number;
  /** 中风险检查项的数量 */
  MiddleRiskCount: number;
  /** 提示风险检查项的数量 */
  HintRiskCount: number;
  /** 检查失败原因 */
  CheckFailReason: string;
  /** 检查状态,为Task_Running, NoRisk, HasRisk, Uncheck, Task_Error */
  CheckStatus: string;
  /** 任务创建时间,检查时间 */
  TaskCreateTime: string;
}

/** 风险项是检查完之后，有问题的检测项，并且加了一些检查结果信息。 */
declare interface ClusterRiskItem {
  /** 检测项相关信息 */
  CheckItem: ClusterCheckItem;
  /** 验证信息 */
  VerifyInfo: string;
  /** 事件描述,检查的错误信息 */
  ErrorMessage: string;
  /** 受影响的集群数量 */
  AffectedClusterCount: number;
  /** 受影响的节点数量 */
  AffectedNodeCount: number;
}

/** 表示检测项所影响的资产的信息。 */
declare interface ComplianceAffectedAsset {
  /** 为客户分配的唯一的资产项的ID。 */
  CustomerAssetId: number;
  /** 资产项的名称。 */
  AssetName: string;
  /** 资产项的类型 */
  AssetType: string;
  /** 检测状态CHECK_INIT, 待检测CHECK_RUNNING, 检测中CHECK_FINISHED, 检测完成CHECK_FAILED, 检测失败 */
  CheckStatus: string;
  /** 节点名称。 */
  NodeName: string;
  /** 上次检测的时间，格式为”YYYY-MM-DD HH:m::SS“。如果没有检测过，此处为”0000-00-00 00:00:00“。 */
  LastCheckTime: string;
  /** 检测结果。取值为：RESULT_FAILED: 未通过RESULT_PASSED: 通过 */
  CheckResult: string;
  /** 主机IP */
  HostIP: string | null;
  /** 镜像的tag */
  ImageTag: string | null;
  /** 检查项验证信息 */
  VerifyInfo: string | null;
}

/** 表示一项资产的详情。 */
declare interface ComplianceAssetDetailInfo {
  /** 客户资产的ID。 */
  CustomerAssetId: number;
  /** 资产类别。 */
  AssetType: string;
  /** 资产的名称。 */
  AssetName: string;
  /** 资产所属的节点的名称。 */
  NodeName: string;
  /** 资产所在的主机的名称。 */
  HostName: string;
  /** 资产所在的主机的IP。 */
  HostIP: string;
  /** 检测状态CHECK_INIT, 待检测CHECK_RUNNING, 检测中CHECK_FINISHED, 检测完成CHECK_FAILED, 检测失败 */
  CheckStatus: string;
  /** 此类资产通过的检测项的数目。 */
  PassedPolicyItemCount: number;
  /** 此类资产未通过的检测的数目。 */
  FailedPolicyItemCount: number;
  /** 上次检测的时间。 */
  LastCheckTime: string | null;
  /** 检测结果：RESULT_FAILED: 未通过。RESULT_PASSED: 通过。 */
  CheckResult: string | null;
  /** 资产的运行状态。 */
  AssetStatus: string;
  /** 创建资产的时间。ASSET_NORMAL: 正常运行，ASSET_PAUSED: 暂停运行，ASSET_STOPPED: 停止运行，ASSET_ABNORMAL: 异常 */
  AssetCreateTime: string;
}

/** 表示一项资产的信息。 */
declare interface ComplianceAssetInfo {
  /** 客户资产的ID。 */
  CustomerAssetId: number;
  /** 资产类别。 */
  AssetType: string;
  /** 资产的名称。 */
  AssetName: string;
  /** 当资产为镜像时，这个字段为镜像Tag。 */
  ImageTag: string | null;
  /** 资产所在的主机IP。 */
  HostIP: string;
  /** 资产所属的节点的名称 */
  NodeName: string;
  /** 检测状态CHECK_INIT, 待检测CHECK_RUNNING, 检测中CHECK_FINISHED, 检测完成CHECK_FAILED, 检测失败 */
  CheckStatus: string;
  /** 此类资产通过的检测项的数目。 */
  PassedPolicyItemCount: number | null;
  /** 此类资产未通过的检测的数目。 */
  FailedPolicyItemCount: number | null;
  /** 上次检测的时间。 */
  LastCheckTime: string | null;
  /** 检测结果：RESULT_FAILED: 未通过。RESULT_PASSED: 通过。 */
  CheckResult: string | null;
}

/** 表示一条检测项的信息。 */
declare interface ComplianceAssetPolicyItem {
  /** 为客户分配的唯一的检测项的ID。 */
  CustomerPolicyItemId: number;
  /** 检测项的原始ID */
  BasePolicyItemId: number;
  /** 检测项的名称。 */
  Name: string;
  /** 检测项所属的类型的名称 */
  Category: string;
  /** 所属的合规标准的ID */
  BenchmarkStandardId: number;
  /** 所属的合规标准的名称 */
  BenchmarkStandardName: string;
  /** 威胁等级 */
  RiskLevel: string;
  /** 检测状态CHECK_INIT, 待检测CHECK_RUNNING, 检测中CHECK_FINISHED, 检测完成CHECK_FAILED, 检测失败 */
  CheckStatus: string;
  /** 检测结果RESULT_PASSED: 通过RESULT_FAILED: 未通过 */
  CheckResult: string | null;
  /** 检测项对应的白名单项的ID。如果存在且非0，表示检测项被用户忽略。 */
  WhitelistId: number | null;
  /** 处理建议。 */
  FixSuggestion: string;
  /** 最近检测的时间。 */
  LastCheckTime: string | null;
  /** 验证信息 */
  VerifyInfo: string | null;
}

/** 表示一类资产的总览信息。 */
declare interface ComplianceAssetSummary {
  /** 资产类别。 */
  AssetType: string;
  /** 是否为客户的首次检测。与CheckStatus配合使用。 */
  IsCustomerFirstCheck: boolean;
  /** 检测状态CHECK_UNINIT, 用户未启用此功能CHECK_INIT, 待检测CHECK_RUNNING, 检测中CHECK_FINISHED, 检测完成CHECK_FAILED, 检测失败 */
  CheckStatus: string;
  /** 此类别的检测进度，为 0~100 的数。若未在检测中，无此字段。 */
  CheckProgress: number | null;
  /** 此类资产通过的检测项的数目。 */
  PassedPolicyItemCount: number;
  /** 此类资产未通过的检测的数目。 */
  FailedPolicyItemCount: number;
  /** 此类资产下未通过的严重级别的检测项的数目。 */
  FailedCriticalPolicyItemCount: number;
  /** 此类资产下未通过的高危检测项的数目。 */
  FailedHighRiskPolicyItemCount: number;
  /** 此类资产下未通过的中危检测项的数目。 */
  FailedMediumRiskPolicyItemCount: number;
  /** 此类资产下未通过的低危检测项的数目。 */
  FailedLowRiskPolicyItemCount: number;
  /** 此类资产下提示级别的检测项的数目。 */
  NoticePolicyItemCount: number;
  /** 通过检测的资产的数目。 */
  PassedAssetCount: number;
  /** 未通过检测的资产的数目。 */
  FailedAssetCount: number;
  /** 此类资产的合规率，0~100的数。 */
  AssetPassedRate: number;
  /** 检测失败的资产的数目。 */
  ScanFailedAssetCount: number;
  /** 上次检测的耗时，单位为秒。 */
  CheckCostTime: number | null;
  /** 上次检测的时间。 */
  LastCheckTime: string | null;
  /** 定时检测规则。 */
  PeriodRule: CompliancePeriodTaskRule;
  /** 已开启的检查项总数 */
  OpenPolicyItemCount?: number | null;
  /** 已忽略的检查项总数 */
  IgnoredPolicyItemCount?: number | null;
}

/** 表示一个合规标准的信息。 */
declare interface ComplianceBenchmarkStandard {
  /** 合规标准的ID */
  StandardId: number;
  /** 合规标准的名称 */
  Name: string;
  /** 合规标准包含的数目 */
  PolicyItemCount: number;
  /** 是否启用此标准 */
  Enabled: boolean;
  /** 标准的描述 */
  Description: string;
}

/** 表示是否启用合规标准。 */
declare interface ComplianceBenchmarkStandardEnable {
  /** 合规标准的ID。 */
  StandardId: number;
  /** 是否启用合规标准 */
  Enable: boolean;
}

/** 表示容器资产专属的详情。 */
declare interface ComplianceContainerDetailInfo {
  /** 容器在主机上的ID。 */
  ContainerId: string;
  /** 容器所属的Pod的名称。 */
  PodName: string | null;
}

/** 键值对过滤器，用于条件过滤查询。例如过滤ID、名称、状态等 若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。 若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。 */
declare interface ComplianceFilters {
  /** 过滤键的名称 */
  Name: string;
  /** 一个或者多个过滤值。 */
  Values: string[];
  /** 是否模糊查询。默认为是。 */
  ExactMatch?: boolean;
}

/** 表示主机资产专属的详情。 */
declare interface ComplianceHostDetailInfo {
  /** 主机上的Docker版本。 */
  DockerVersion: string | null;
  /** 主机上的K8S的版本。 */
  K8SVersion: string | null;
}

/** 表示镜像资产专属的详情。 */
declare interface ComplianceImageDetailInfo {
  /** 镜像在主机上的ID。 */
  ImageId: string;
  /** 镜像的名称。 */
  ImageName: string;
  /** 镜像的Tag。 */
  ImageTag: string;
  /** 镜像所在远程仓库的路径。 */
  Repository: string | null;
}

/** 表示K8S资产专属的详情。 */
declare interface ComplianceK8SDetailInfo {
  /** K8S集群的名称。 */
  ClusterName: string | null;
  /** K8S集群的版本。 */
  ClusterVersion: string | null;
}

/** 表示一个合规基线检测定时任务的信息。 */
declare interface CompliancePeriodTask {
  /** 周期任务的ID */
  PeriodTaskId: number;
  /** 资产类型。ASSET_CONTAINER, 容器ASSET_IMAGE, 镜像ASSET_HOST, 主机ASSET_K8S, K8S资产 */
  AssetType: string;
  /** 最近一次触发的时间 */
  LastTriggerTime: string | null;
  /** 总的检查项数目 */
  TotalPolicyItemCount: number;
  /** 周期设置 */
  PeriodRule: CompliancePeriodTaskRule;
  /** 合规标准列表 */
  BenchmarkStandardSet: ComplianceBenchmarkStandard[];
}

/** 表示一个定时任务的周期设置 */
declare interface CompliancePeriodTaskRule {
  /** 执行的频率（几天一次），取值为：1,3,7。 */
  Frequency: number;
  /** 在这天的什么时间执行，格式为：HH:mm:SS。 */
  ExecutionTime: string;
  /** 是否开启 */
  Enable?: boolean | null;
}

/** 表示一条检测项对应的汇总信息。 */
declare interface CompliancePolicyItemSummary {
  /** 为客户分配的唯一的检测项的ID。 */
  CustomerPolicyItemId: number;
  /** 检测项的原始ID。 */
  BasePolicyItemId: number;
  /** 检测项的名称。 */
  Name: string;
  /** 检测项所属的类型，枚举字符串。 */
  Category: string;
  /** 所属的合规标准 */
  BenchmarkStandardName: string;
  /** 威胁等级。RISK_CRITICAL, RISK_HIGH, RISK_MEDIUM, RISK_LOW, RISK_NOTICE。 */
  RiskLevel: string;
  /** 检测项所属的资产类型 */
  AssetType: string;
  /** 最近检测的时间 */
  LastCheckTime: string | null;
  /** 检测状态CHECK_INIT, 待检测CHECK_RUNNING, 检测中CHECK_FINISHED, 检测完成CHECK_FAILED, 检测失败 */
  CheckStatus: string;
  /** 检测结果。RESULT_PASSED: 通过RESULT_FAILED: 未通过 */
  CheckResult: string | null;
  /** 通过检测的资产的数目 */
  PassedAssetCount: number | null;
  /** 未通过检测的资产的数目 */
  FailedAssetCount: number | null;
  /** 检测项对应的白名单项的ID。如果存在且非0，表示检测项被用户忽略。 */
  WhitelistId: number | null;
  /** 处理建议。 */
  FixSuggestion: string;
  /** 所属的合规标准的ID */
  BenchmarkStandardId: number;
}

/** 表示检测失败的资产的信息。 */
declare interface ComplianceScanFailedAsset {
  /** 客户资产的ID。 */
  CustomerAssetId: number;
  /** 资产类别。 */
  AssetType: string;
  /** 检测状态CHECK_INIT, 待检测CHECK_RUNNING, 检测中CHECK_FINISHED, 检测完成CHECK_FAILED, 检测失败 */
  CheckStatus: string;
  /** 资产的名称。 */
  AssetName: string;
  /** 资产检测失败的原因。 */
  FailureReason: string;
  /** 检测失败的处理建议。 */
  Suggestion: string;
  /** 检测的时间。 */
  CheckTime: string;
}

/** 表示一条白名单记录。 */
declare interface ComplianceWhitelistItem {
  /** 白名单项的ID。 */
  WhitelistItemId: number;
  /** 客户检测项的ID。 */
  CustomerPolicyItemId: number;
  /** 检测项的名称。 */
  Name: string;
  /** 合规标准的名称。 */
  StandardName: string;
  /** 合规标准的ID。 */
  StandardId: number;
  /** 检测项影响的资产的数目。 */
  AffectedAssetCount: number;
  /** 最后更新的时间 */
  LastUpdateTime: string;
  /** 加入到白名单的时间 */
  InsertTime: string;
}

/** 容器组件信息 */
declare interface ComponentInfo {
  /** 名称 */
  Name: string;
  /** 版本 */
  Version: string;
}

/** 组件信息 */
declare interface ComponentsInfo {
  /** 组件名称 */
  Component: string | null;
  /** 组件版本信息 */
  Version: string | null;
}

/** 容器列表集合 */
declare interface ContainerInfo {
  /** 容器id */
  ContainerID: string;
  /** 容器名称 */
  ContainerName: string;
  /** 容器运行状态 */
  Status: string;
  /** 创建时间 */
  CreateTime: string;
  /** 运行用户 */
  RunAs: string;
  /** 命令行 */
  Cmd: string;
  /** CPU使用率 *1000 */
  CPUUsage: number;
  /** 内存使用 kb */
  RamUsage: number;
  /** 镜像名称 */
  ImageName: string;
  /** 镜像id */
  ImageID: string;
  /** 镜像id */
  POD: string;
  /** 主机id */
  HostID: string;
  /** 主机ip */
  HostIP: string;
  /** 更新时间 */
  UpdateTime: string;
  /** 主机名称 */
  HostName: string;
  /** 外网ip */
  PublicIp: string;
  /** 网络状态未隔离 NORMAL已隔离 ISOLATED隔离中 ISOLATING隔离失败	ISOLATE_FAILED解除隔离中 RESTORING解除隔离失败 RESTORE_FAILED */
  NetStatus: string;
  /** 网络子状态 */
  NetSubStatus: string;
  /** 隔离来源 */
  IsolateSource: string | null;
  /** 隔离时间 */
  IsolateTime: string | null;
}

/** 容器挂载信息 */
declare interface ContainerMount {
  /** 挂载类型 bind */
  Type: string;
  /** 宿主机路径 */
  Source: string;
  /** 容器内路径 */
  Destination: string;
  /** 模式 */
  Mode: string;
  /** 读写权限 */
  RW: boolean;
  /** 传播类型 */
  Propagation: string;
  /** 名称 */
  Name: string;
  /** 驱动 */
  Driver: string;
}

/** 容器网络信息 */
declare interface ContainerNetwork {
  /** endpoint id */
  EndpointID: string;
  /** 模式:bridge */
  Mode: string;
  /** 网络名称 */
  Name: string;
  /** 网络ID */
  NetworkID: string;
  /** 网关 */
  Gateway: string;
  /** IPV4地址 */
  Ipv4: string;
  /** IPV6地址 */
  Ipv6: string;
  /** MAC 地址 */
  MAC: string;
}

/** 运行时容器逃逸事件描述信息 */
declare interface EscapeEventDescription {
  /** 事件规则 */
  Description: string;
  /** 解决方案 */
  Solution: string;
  /** 事件备注信息 */
  Remark: string | null;
  /** 事件最后一次处理的时间 */
  OperationTime: string | null;
}

/** 容器逃逸事件列表 */
declare interface EscapeEventInfo {
  /** 事件类型 ESCAPE_HOST_ACESS_FILE:宿主机文件访问逃逸 ESCAPE_MOUNT_NAMESPACE:MountNamespace逃逸 ESCAPE_PRIVILEDGE:程序提权逃逸 ESCAPE_PRIVILEDGE_CONTAINER_START:特权容器启动逃逸 ESCAPE_MOUNT_SENSITIVE_PTAH:敏感路径挂载 ESCAPE_SYSCALL:Syscall逃逸 */
  EventType: string;
  /** 容器名 */
  ContainerName: string;
  /** 镜像名 */
  ImageName: string;
  /** 状态，EVENT_UNDEAL:未处理，EVENT_DEALED:已处理，EVENT_INGNORE:忽略 */
  Status: string;
  /** 事件记录的唯一id */
  EventId: string;
  /** 节点名称 */
  NodeName: string;
  /** pod(实例)的名字 */
  PodName: string;
  /** 生成时间 */
  FoundTime: string;
  /** 事件名字，宿主机文件访问逃逸、Syscall逃逸、MountNamespace逃逸、程序提权逃逸、特权容器启动逃逸、敏感路径挂载 */
  EventName: string;
  /** 镜像id，用于跳转 */
  ImageId: string;
  /** 容器id，用于跳转 */
  ContainerId: string;
  /** 事件解决方案 */
  Solution: string;
  /** 事件描述 */
  Description: string;
  /** 事件数量 */
  EventCount: number;
  /** 最近生成时间 */
  LatestFoundTime: string;
  /** 节点IP */
  NodeIP: string | null;
  /** 主机IP */
  HostID: string | null;
  /** 网络状态未隔离 NORMAL已隔离 ISOLATED隔离中 ISOLATING隔离失败	ISOLATE_FAILED解除隔离中 RESTORING解除隔离失败 RESTORE_FAILED */
  ContainerNetStatus: string | null;
  /** 容器子状态"AGENT_OFFLINE" //Agent离线"NODE_DESTROYED" //节点已销毁"CONTAINER_EXITED" //容器已退出"CONTAINER_DESTROYED" //容器已销毁"SHARED_HOST" // 容器与主机共享网络"RESOURCE_LIMIT" //隔离操作资源超限"UNKNOW" // 原因未知 */
  ContainerNetSubStatus: string | null;
  /** 容器隔离操作来源 */
  ContainerIsolateOperationSrc: string | null;
  /** 容器状态正在运行: RUNNING暂停: PAUSED停止: STOPPED已经创建: CREATED已经销毁: DESTROYED正在重启中: RESTARTING迁移中: REMOVING */
  ContainerStatus: string;
}

/** 容器逃逸扫描策略开关信息 */
declare interface EscapeRule {
  /** 规则类型 ESCAPE_HOST_ACESS_FILE:宿主机文件访问逃逸 ESCAPE_MOUNT_NAMESPACE:MountNamespace逃逸 ESCAPE_PRIVILEDGE:程序提权逃逸 ESCAPE_PRIVILEDGE_CONTAINER_START:特权容器启动逃逸 ESCAPE_MOUNT_SENSITIVE_PTAH:敏感路径挂载ESCAPE_SYSCALL:Syscall逃逸 */
  Type: string;
  /** 规则名称宿主机文件访问逃逸、Syscall逃逸、MountNamespace逃逸、程序提权逃逸、特权容器启动逃逸、敏感路径挂载 */
  Name: string;
  /** 是否打开：false否 ，true是 */
  IsEnable: boolean;
  /** 规则组别。RISK_CONTAINER：风险容器，PROCESS_PRIVILEGE：程序特权，CONTAINER_ESCAPE：容器逃逸 */
  Group: string;
}

/** 修改容器逃逸扫描策略开关信息 */
declare interface EscapeRuleEnabled {
  /** 规则类型 ESCAPE_HOST_ACESS_FILE:宿主机文件访问逃逸 ESCAPE_MOUNT_NAMESPACE:MountNamespace逃逸 ESCAPE_PRIVILEDGE:程序提权逃逸 ESCAPE_PRIVILEDGE_CONTAINER_START:特权容器启动逃逸 ESCAPE_MOUNT_SENSITIVE_PTAH:敏感路径挂载 ESCAPE_SYSCALL:Syscall逃逸 */
  Type: string;
  /** 是否打开：false否 ，true是 */
  IsEnable: boolean;
}

/** 容器安全运行时，文件属性信息 */
declare interface FileAttributeInfo {
  /** 文件名 */
  FileName: string;
  /** 文件类型 */
  FileType: string;
  /** 文件大小(字节) */
  FileSize: number;
  /** 文件路径 */
  FilePath: string;
  /** 文件创建时间 */
  FileCreateTime: string;
  /** 最近被篡改文件创建时间 */
  LatestTamperedFileMTime: string;
}

/** 容器安全主机列表 */
declare interface HostInfo {
  /** 主机id */
  HostID: string;
  /** 主机ip即内网ip */
  HostIP: string;
  /** 主机名称 */
  HostName: string;
  /** 业务组 */
  Group: string;
  /** docker 版本 */
  DockerVersion: string;
  /** docker 文件系统类型 */
  DockerFileSystemDriver: string;
  /** 镜像个数 */
  ImageCnt: number;
  /** 容器个数 */
  ContainerCnt: number;
  /** agent运行状态 */
  Status: string;
  /** 是否是Containerd */
  IsContainerd: boolean;
  /** 主机来源：["CVM", "ECM", "LH", "BM"] 中的之一为腾讯云服务器；["Other"]之一非腾讯云服务器； */
  MachineType: string;
  /** 外网ip */
  PublicIp: string;
  /** 主机uuid */
  Uuid: string;
  /** 主机实例ID */
  InstanceID: string;
  /** 地域ID */
  RegionID: number;
}

/** 容器安全 主机镜像关联列表 */
declare interface ImageHost {
  /** 镜像id */
  ImageID: string;
  /** 主机id */
  HostID: string;
}

/** 基本镜像信息 */
declare interface ImageInfo {
  /** 实例名称 */
  InstanceName: string;
  /** 命名空间 */
  Namespace: string;
  /** 镜像名称 */
  ImageName: string;
  /** 镜像tag */
  ImageTag: string;
  /** 强制扫描 */
  Force: string;
  /** 镜像id */
  ImageDigest?: string;
  /** 仓库类型 */
  RegistryType?: string;
  /** 镜像仓库地址 */
  ImageRepoAddress?: string;
  /** 实例id */
  InstanceId?: string;
}

/** 基本镜像信息 */
declare interface ImageProgress {
  /** 镜像id */
  ImageId?: string | null;
  /** 仓库类型 */
  RegistryType?: string | null;
  /** 镜像仓库地址 */
  ImageRepoAddress?: string | null;
  /** 实例id */
  InstanceId?: string | null;
  /** 实例名称 */
  InstanceName?: string | null;
  /** 命名空间 */
  Namespace?: string | null;
  /** 仓库名称 */
  ImageName?: string | null;
  /** 镜像tag */
  ImageTag?: string | null;
  /** 镜像扫描状态 */
  ScanStatus?: string | null;
  /** 镜像cve扫描进度 */
  CveProgress?: number | null;
  /** 镜像敏感扫描进度 */
  RiskProgress: number | null;
  /** 镜像木马扫描进度 */
  VirusProgress: number | null;
}

/** 容器安全镜像仓库列表 */
declare interface ImageRepoInfo {
  /** 镜像Digest */
  ImageDigest: string;
  /** 镜像仓库地址 */
  ImageRepoAddress: string;
  /** 仓库类型 */
  RegistryType: string;
  /** 镜像名称 */
  ImageName: string;
  /** 镜像版本 */
  ImageTag: string;
  /** 镜像大小 */
  ImageSize: number;
  /** 最近扫描时间 */
  ScanTime: string;
  /** 扫描状态 */
  ScanStatus: string;
  /** 安全漏洞数 */
  VulCnt: number;
  /** 木马病毒数 */
  VirusCnt: number;
  /** 风险行为数 */
  RiskCnt: number;
  /** 敏感信息数 */
  SentiveInfoCnt: number;
  /** 是否可信镜像 */
  IsTrustImage: boolean;
  /** 镜像系统 */
  OsName: string;
  /** 木马扫描错误 */
  ScanVirusError: string | null;
  /** 漏洞扫描错误 */
  ScanVulError: string | null;
  /** 实例id */
  InstanceId: string;
  /** 实例名称 */
  InstanceName: string;
  /** 命名空间 */
  Namespace: string;
  /** 高危扫描错误 */
  ScanRiskError: string | null;
  /** 敏感信息扫描进度 */
  ScanVirusProgress: number | null;
  /** 木马扫描进度 */
  ScanVulProgress: number | null;
  /** 漏洞扫描进度 */
  ScanRiskProgress: number | null;
  /** 剩余扫描时间秒 */
  ScanRemainTime: number | null;
  /** cve扫描状态 */
  CveStatus: string | null;
  /** 高危扫描状态 */
  RiskStatus: string | null;
  /** 木马扫描状态 */
  VirusStatus: string | null;
  /** 总进度 */
  Progress: number | null;
  /** 授权状态 */
  IsAuthorized: number;
  /** 仓库区域 */
  RegistryRegion: string;
  /** 列表id */
  Id: number;
  /** 镜像Id */
  ImageId: string | null;
  /** 镜像创建的时间 */
  ImageCreateTime: string | null;
  /** 是否为镜像的最新版本 */
  IsLatestImage: boolean | null;
}

/** 容器安全镜像高危行为信息 */
declare interface ImageRisk {
  /** 高危行为 */
  Behavior: number | null;
  /** 种类 */
  Type: number | null;
  /** 风险等级 */
  Level: string | null;
  /** 描述 */
  Desc: string | null;
  /** 解决方案 */
  InstructionContent: string | null;
}

/** 镜像风险详情 */
declare interface ImageRiskInfo {
  /** 行为 */
  Behavior: number;
  /** 类型 */
  Type: number;
  /** 级别 */
  Level: number;
  /** 详情 */
  Desc: string;
  /** 解决方案 */
  InstructionContent: string;
}

/** 运行时安全事件趋势信息 */
declare interface ImageRiskTendencyInfo {
  /** 趋势列表 */
  ImageRiskSet: RunTimeTendencyInfo[];
  /** 风险类型：IRT_VULNERABILITY : 安全漏洞IRT_MALWARE_VIRUS: 木马病毒IRT_RISK:敏感信息 */
  ImageRiskType: string;
}

/** 镜像列表 */
declare interface ImageSimpleInfo {
  /** 镜像id */
  ImageID: string;
  /** 镜像名称 */
  ImageName: string;
  /** 镜像大小 */
  Size: number;
  /** 类型 */
  ImageType: string;
  /** 关联容器数 */
  ContainerCnt: number;
}

/** 容器安全镜像病毒信息 */
declare interface ImageVirus {
  /** 路径 */
  Path: string | null;
  /** 风险等级 */
  RiskLevel: string | null;
  /** 分类 */
  Category: string | null;
  /** 病毒名称 */
  VirusName: string | null;
  /** 标签 */
  Tags: string[] | null;
  /** 描述 */
  Desc: string | null;
  /** 解决方案 */
  Solution: string | null;
  /** 文件类型 */
  FileType: string | null;
  /** 文件路径 */
  FileName: string | null;
  /** 文件md5 */
  FileMd5: string | null;
  /** 大小 */
  FileSize: number | null;
  /** 首次发现时间 */
  FirstScanTime: string | null;
  /** 最近扫描时间 */
  LatestScanTime: string | null;
}

/** 容器安全镜像病毒信息 */
declare interface ImageVirusInfo {
  /** 路径 */
  Path: string | null;
  /** 风险等级 */
  RiskLevel: number | null;
  /** 病毒名称 */
  VirusName: string | null;
  /** 标签 */
  Tags: string[] | null;
  /** 描述 */
  Desc: string | null;
  /** 修护建议 */
  Solution: string | null;
  /** 大小 */
  Size: number | null;
  /** 首次发现时间 */
  FirstScanTime: string | null;
  /** 最近扫描时间 */
  LatestScanTime: string | null;
  /** 文件md5 */
  Md5: string | null;
  /** 文件名称 */
  FileName: string | null;
  /** 检测平台1: 云查杀引擎2: tav3: binaryAi4: 异常行为5: 威胁情报 */
  CheckPlatform: string[] | null;
}

/** 容器安全镜像漏洞信息 */
declare interface ImageVul {
  /** 漏洞id */
  CVEID: string | null;
  /** 观点验证程序id */
  POCID: string | null;
  /** 漏洞名称 */
  Name: string | null;
  /** 涉及组件信息 */
  Components: ComponentsInfo[] | null;
  /** 分类 */
  Category: string | null;
  /** 分类2 */
  CategoryType: string | null;
  /** 风险等级 */
  Level: string | null;
  /** 描述 */
  Des: string | null;
  /** 解决方案 */
  OfficialSolution: string | null;
  /** 引用 */
  Reference: string | null;
  /** 防御方案 */
  DefenseSolution: string | null;
  /** 提交时间 */
  SubmitTime: string | null;
  /** Cvss分数 */
  CvssScore: string | null;
  /** Cvss信息 */
  CvssVector: string | null;
  /** 是否建议修复 */
  IsSuggest: string | null;
  /** 修复版本号 */
  FixedVersions: string | null;
  /** 漏洞标签:"CanBeFixed","DynamicLevelPoc","DynamicLevelExp" */
  Tag: string[] | null;
  /** 组件名 */
  Component: string | null;
  /** 组件版本 */
  Version: string | null;
}

/** 查询镜像绑定的运行时规则信息 */
declare interface ImagesBindRuleInfo {
  /** 镜像id */
  ImageId: string;
  /** 镜像名称 */
  ImageName: string;
  /** 关联容器数量 */
  ContainerCnt: number;
  /** 绑定规则id */
  RuleId: string | null;
  /** 规则名字 */
  RuleName: string | null;
  /** 镜像大小 */
  ImageSize: number | null;
  /** 最近扫描时间 */
  ScanTime: string | null;
}

/** 容器安全镜像列表 */
declare interface ImagesInfo {
  /** 镜像id */
  ImageID: string;
  /** 镜像名称 */
  ImageName: string;
  /** 创建时间 */
  CreateTime: string;
  /** 镜像大小 */
  Size: number;
  /** 主机个数 */
  HostCnt: number;
  /** 容器个数 */
  ContainerCnt: number;
  /** 扫描时间 */
  ScanTime: string;
  /** 漏洞个数 */
  VulCnt: number;
  /** 病毒个数 */
  VirusCnt: number;
  /** 敏感信息个数 */
  RiskCnt: number;
  /** 是否信任镜像 */
  IsTrustImage: boolean;
  /** 镜像系统 */
  OsName: string;
  /** agent镜像扫描错误 */
  AgentError: string;
  /** 后端镜像扫描错误 */
  ScanError: string;
  /** 扫描状态 */
  ScanStatus: string;
  /** 木马扫描错误信息 */
  ScanVirusError: string;
  /** 漏洞扫描错误信息 */
  ScanVulError: string;
  /** 风险扫描错误信息 */
  ScanRiskError: string;
  /** 是否是重点关注镜像，为0不是，非0是 */
  IsSuggest: number;
  /** 是否授权，1是0否 */
  IsAuthorized: number;
  /** 组件个数 */
  ComponentCnt: number;
}

/** 容器安全镜像漏洞 */
declare interface ImagesVul {
  /** 漏洞id */
  CVEID: string;
  /** 漏洞名称 */
  Name: string;
  /** 组件 */
  Component: string;
  /** 版本 */
  Version: string;
  /** 分类 */
  Category: string;
  /** 分类2 */
  CategoryType: string;
  /** 风险等级 */
  Level: number;
  /** 描述 */
  Des: string;
  /** 解决方案 */
  OfficialSolution: string;
  /** 引用 */
  Reference: string;
  /** 防御方案 */
  DefenseSolution: string;
  /** 提交时间 */
  SubmitTime: string;
  /** CVSS V3分数 */
  CVSSV3Score: number;
  /** CVSS V3描述 */
  CVSSV3Desc: string;
  /** 是否是重点关注：true：是，false：不是 */
  IsSuggest: boolean;
  /** 修复版本号 */
  FixedVersions: string | null;
  /** 漏洞标签:"CanBeFixed","DynamicLevelPoc","DynamicLevelExp" */
  Tag: string[] | null;
}

/** 容器安全端口信息列表 */
declare interface PortInfo {
  /** 类型 */
  Type: string;
  /** 对外ip */
  PublicIP: string;
  /** 主机端口 */
  PublicPort: number;
  /** 容器端口 */
  ContainerPort: number;
  /** 容器Pid */
  ContainerPID: number;
  /** 容器名 */
  ContainerName: string;
  /** 主机id */
  HostID: string;
  /** 主机ip */
  HostIP: string;
  /** 进程名称 */
  ProcessName: string;
  /** 容器内监听地址 */
  ListenContainer: string;
  /** 容器外监听地址 */
  ListenHost: string;
  /** 运行账号 */
  RunAs: string;
  /** 主机名称 */
  HostName: string;
  /** 外网ip */
  PublicIp: string;
}

/** 运行时安全，进程基础信息 */
declare interface ProcessBaseInfo {
  /** 进程启动用户 */
  ProcessStartUser: string | null;
  /** 进程用户组 */
  ProcessUserGroup: string | null;
  /** 进程路径 */
  ProcessPath: string | null;
  /** 进程命令行参数 */
  ProcessParam: string | null;
}

/** 运行是安全详情，进程基础信息 */
declare interface ProcessDetailBaseInfo {
  /** 进程名称 */
  ProcessName: string;
  /** 进程pid */
  ProcessId: number;
  /** 进程启动用户 */
  ProcessStartUser: string;
  /** 进程用户组 */
  ProcessUserGroup: string;
  /** 进程路径 */
  ProcessPath: string;
  /** 进程命令行参数 */
  ProcessParam: string;
}

/** 运行是安全详情，进程信息 */
declare interface ProcessDetailInfo {
  /** 进程名称 */
  ProcessName: string;
  /** 进程权限 */
  ProcessAuthority: string;
  /** 进程pid */
  ProcessId: number;
  /** 进程启动用户 */
  ProcessStartUser: string;
  /** 进程用户组 */
  ProcessUserGroup: string;
  /** 进程路径 */
  ProcessPath: string;
  /** 进程树 */
  ProcessTree: string;
  /** 进程md5 */
  ProcessMd5: string;
  /** 进程命令行参数 */
  ProcessParam: string;
}

/** 容器安全进程列表 */
declare interface ProcessInfo {
  /** 进程启动时间 */
  StartTime: string;
  /** 运行用户 */
  RunAs: string;
  /** 命令行参数 */
  CmdLine: string;
  /** Exe路径 */
  Exe: string;
  /** 主机PID */
  PID: number;
  /** 容器内pid */
  ContainerPID: number;
  /** 容器名称 */
  ContainerName: string;
  /** 主机id */
  HostID: string;
  /** 主机ip */
  HostIP: string;
  /** 进程名称 */
  ProcessName: string;
  /** 主机名称 */
  HostName: string;
  /** 外网ip */
  PublicIp: string;
}

/** 运行时容器反弹shell事件描述信息 */
declare interface ReverseShellEventDescription {
  /** 描述信息 */
  Description: string;
  /** 解决方案 */
  Solution: string;
  /** 事件备注信息 */
  Remark: string | null;
  /** 目标地址 */
  DstAddress: string;
  /** 事件最后一次处理的时间 */
  OperationTime: string | null;
}

/** 容器安全运行时高危系统调用信息 */
declare interface ReverseShellEventInfo {
  /** 进程名称 */
  ProcessName: string;
  /** 进程路径 */
  ProcessPath: string;
  /** 镜像id */
  ImageId: string;
  /** 容器id */
  ContainerId: string;
  /** 镜像名 */
  ImageName: string;
  /** 容器名 */
  ContainerName: string;
  /** 生成时间 */
  FoundTime: string;
  /** 事件解决方案 */
  Solution: string;
  /** 事件详细描述 */
  Description: string;
  /** 状态，EVENT_UNDEAL:事件未处理 EVENT_DEALED:事件已经处理 EVENT_INGNORE：事件已经忽略 EVENT_ADD_WHITE：时间已经加白 */
  Status: string;
  /** 事件id */
  EventId: string;
  /** 备注 */
  Remark: string;
  /** 父进程名 */
  PProcessName: string;
  /** 事件数量 */
  EventCount: number;
  /** 最近生成时间 */
  LatestFoundTime: string;
  /** 目标地址 */
  DstAddress: string;
  /** 网络状态未隔离 NORMAL已隔离 ISOLATED隔离中 ISOLATING隔离失败	ISOLATE_FAILED解除隔离中 RESTORING解除隔离失败 RESTORE_FAILED */
  ContainerNetStatus: string;
  /** 容器子状态"AGENT_OFFLINE" //Agent离线	"NODE_DESTROYED" //节点已销毁	"CONTAINER_EXITED" //容器已退出	"CONTAINER_DESTROYED" //容器已销毁	"SHARED_HOST" // 容器与主机共享网络	"RESOURCE_LIMIT" //隔离操作资源超限	"UNKNOW" // 原因未知 */
  ContainerNetSubStatus: string;
  /** 容器隔离操作来源 */
  ContainerIsolateOperationSrc: string;
  /** 容器状态正在运行: RUNNING暂停: PAUSED停止: STOPPED已经创建: CREATED已经销毁: DESTROYED正在重启中: RESTARTING迁移中: REMOVING */
  ContainerStatus: string;
}

/** 反弹shell白名单信息 */
declare interface ReverseShellWhiteListBaseInfo {
  /** 白名单id */
  Id: string;
  /** 镜像数量 */
  ImageCount: number;
  /** 连接进程名字 */
  ProcessName: string;
  /** 目标地址ip */
  DstIp: string;
  /** 创建时间 */
  CreateTime: string;
  /** 更新时间 */
  UpdateTime: string;
  /** 目标端口 */
  DstPort: string;
  /** 是否是全局白名单，true全局 */
  IsGlobal: boolean;
  /** 镜像id数组，为空代表全部 */
  ImageIds: string[];
}

/** 反弹shell白名单信息 */
declare interface ReverseShellWhiteListInfo {
  /** 目标IP */
  DstIp: string;
  /** 目标端口 */
  DstPort: string;
  /** 目标进程 */
  ProcessName: string;
  /** 镜像id数组，为空代表全部 */
  ImageIds: string[];
  /** 白名单id，如果新建则id为空 */
  Id?: string;
}

/** 运行时容器高危系统调用事件描述信息 */
declare interface RiskSyscallEventDescription {
  /** 描述信息 */
  Description: string;
  /** 解决方案 */
  Solution: string;
  /** 事件备注信息 */
  Remark: string | null;
  /** 系统调用名称 */
  SyscallName: string;
  /** 事件最后一次处理的时间 */
  OperationTime: string | null;
}

/** 容器安全运行时高危系统调用信息 */
declare interface RiskSyscallEventInfo {
  /** 进程名称 */
  ProcessName: string;
  /** 进程路径 */
  ProcessPath: string;
  /** 镜像id */
  ImageId: string;
  /** 容器id */
  ContainerId: string;
  /** 镜像名 */
  ImageName: string;
  /** 容器名 */
  ContainerName: string;
  /** 生成时间 */
  FoundTime: string;
  /** 事件解决方案 */
  Solution: string;
  /** 事件详细描述 */
  Description: string;
  /** 系统调用名称 */
  SyscallName: string;
  /** 状态，EVENT_UNDEAL:事件未处理 EVENT_DEALED:事件已经处理 EVENT_INGNORE：事件已经忽略 EVENT_ADD_WHITE：时间已经加白 */
  Status: string;
  /** 事件id */
  EventId: string;
  /** 节点名称 */
  NodeName: string;
  /** pod(实例)的名字 */
  PodName: string;
  /** 备注 */
  Remark: string;
  /** 系统监控名称是否存在 */
  RuleExist: boolean;
  /** 事件数量 */
  EventCount: number;
  /** 最近生成时间 */
  LatestFoundTime: string;
  /** 网络状态未隔离 NORMAL已隔离 ISOLATED隔离中 ISOLATING隔离失败	ISOLATE_FAILED解除隔离中 RESTORING解除隔离失败 RESTORE_FAILED */
  ContainerNetStatus: string;
  /** 容器子状态"AGENT_OFFLINE" //Agent离线"NODE_DESTROYED" //节点已销毁"CONTAINER_EXITED" //容器已退出"CONTAINER_DESTROYED" //容器已销毁"SHARED_HOST" // 容器与主机共享网络"RESOURCE_LIMIT" //隔离操作资源超限"UNKNOW" // 原因未知 */
  ContainerNetSubStatus: string;
  /** 容器隔离操作来源 */
  ContainerIsolateOperationSrc: string;
  /** 容器状态正在运行: RUNNING暂停: PAUSED停止: STOPPED已经创建: CREATED已经销毁: DESTROYED正在重启中: RESTARTING迁移中: REMOVING */
  ContainerStatus: string;
}

/** 高危系统调用白名单信息 */
declare interface RiskSyscallWhiteListBaseInfo {
  /** 白名单id */
  Id: string;
  /** 镜像数量 */
  ImageCount: number;
  /** 连接进程路径 */
  ProcessPath: string;
  /** 系统调用名称列表 */
  SyscallNames: string[];
  /** 创建时间 */
  CreateTime: string;
  /** 更新时间 */
  UpdateTime: string;
  /** 是否是全局白名单，true全局 */
  IsGlobal: boolean;
  /** 镜像id数组 */
  ImageIds: string[];
}

/** 高危系统调用白名单信息 */
declare interface RiskSyscallWhiteListInfo {
  /** 镜像id数组，为空代表全部 */
  ImageIds: string[];
  /** 系统调用名称，通过DescribeRiskSyscallNames接口获取枚举列表 */
  SyscallNames?: string[];
  /** 目标进程 */
  ProcessPath?: string;
  /** 白名单id，如果新建则id为空 */
  Id?: string;
}

/** 运行时安全，策略基本信息 */
declare interface RuleBaseInfo {
  /** true: 默认策略，false:自定义策略 */
  IsDefault: boolean;
  /** 策略生效镜像数量 */
  EffectImageCount: number;
  /** 策略Id */
  RuleId: string;
  /** 策略更新时间, 存在为空的情况 */
  UpdateTime: string | null;
  /** 策略名字 */
  RuleName: string;
  /** 编辑用户名称 */
  EditUserName: string;
  /** true: 策略启用，false：策略禁用 */
  IsEnable: boolean;
}

/** 运行时安全事件基本信息 */
declare interface RunTimeEventBaseInfo {
  /** 事件唯一ID */
  EventId: string;
  /** 事件发现时间 */
  FoundTime: string;
  /** 容器id */
  ContainerId: string;
  /** 容器名称 */
  ContainerName: string;
  /** 镜像id */
  ImageId: string;
  /** 镜像名称 */
  ImageName: string;
  /** 节点名称 */
  NodeName: string;
  /** Pod名称 */
  PodName: string;
  /** 状态， “EVENT_UNDEAL”:事件未处理 "EVENT_DEALED":事件已经处理 "EVENT_INGNORE"：事件已经忽略 */
  Status: string;
  /** 事件名称：宿主机文件访问逃逸、Syscall逃逸、MountNamespace逃逸、程序提权逃逸、特权容器启动逃逸、敏感路径挂载恶意进程启动文件篡改 */
  EventName: string;
  /** 事件类型 ESCAPE_HOST_ACESS_FILE:宿主机文件访问逃逸 ESCAPE_MOUNT_NAMESPACE:MountNamespace逃逸 ESCAPE_PRIVILEDGE:程序提权逃逸 ESCAPE_PRIVILEDGE_CONTAINER_START:特权容器启动逃逸 ESCAPE_MOUNT_SENSITIVE_PTAH:敏感路径挂载 ESCAPE_SYSCALL:Syscall逃逸 */
  EventType: string;
  /** 事件数量 */
  EventCount: number;
  /** 最近生成时间 */
  LatestFoundTime: string;
  /** 内网ip */
  HostIP: string | null;
  /** 外网ip */
  ClientIP: string | null;
  /** 网络状态未隔离 NORMAL已隔离 ISOLATED隔离中 ISOLATING隔离失败	ISOLATE_FAILED解除隔离中 RESTORING解除隔离失败 RESTORE_FAILED */
  ContainerNetStatus: string | null;
  /** 容器子状态"AGENT_OFFLINE" //Agent离线"NODE_DESTROYED" //节点已销毁"CONTAINER_EXITED" //容器已退出"CONTAINER_DESTROYED" //容器已销毁"SHARED_HOST" // 容器与主机共享网络"RESOURCE_LIMIT" //隔离操作资源超限"UNKNOW" // 原因未知 */
  ContainerNetSubStatus: string | null;
  /** 容器隔离操作来源 */
  ContainerIsolateOperationSrc: string | null;
}

/** 容器安全描述键值对过滤器，用于条件过滤查询。例如过滤ID、名称、状态等若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。 */
declare interface RunTimeFilters {
  /** 过滤键的名称 */
  Name: string;
  /** 一个或者多个过滤值。 */
  Values: string[];
  /** 是否模糊查询 */
  ExactMatch?: boolean;
}

/** 运行时风险信息 */
declare interface RunTimeRiskInfo {
  /** 数量 */
  Cnt: number;
  /** 风险等级：CRITICAL: 严重HIGH: 高MEDIUM：中LOW: 低 */
  Level: string;
}

/** 运行时趋势信息 */
declare interface RunTimeTendencyInfo {
  /** 当天时间 */
  CurTime: string;
  /** 当前数量 */
  Cnt: number;
}

/** 运行时安全事件趋势信息 */
declare interface SecTendencyEventInfo {
  /** 趋势列表 */
  EventSet: RunTimeTendencyInfo[];
  /** 事件类型：ET_ESCAPE : 容器逃逸ET_REVERSE_SHELL: 反弹shellET_RISK_SYSCALL:高危系统调用ET_ABNORMAL_PROCESS: 异常进程ET_ACCESS_CONTROL 文件篡改 */
  EventType: string;
}

/** 容器安全服务信息列表 */
declare interface ServiceInfo {
  /** 服务id */
  ServiceID: string;
  /** 主机id */
  HostID: string;
  /** 主机ip */
  HostIP: string;
  /** 容器名 */
  ContainerName: string;
  /** 服务名 例如nginx/redis */
  Type: string;
  /** 版本 */
  Version: string;
  /** 账号 */
  RunAs: string;
  /** 监听端口 */
  Listen: string[];
  /** 配置 */
  Config: string;
  /** 关联进程数 */
  ProcessCnt: number;
  /** 访问日志 */
  AccessLog: string;
  /** 错误日志 */
  ErrorLog: string;
  /** 数据目录 */
  DataPath: string;
  /** web目录 */
  WebRoot: string;
  /** 关联的进程id */
  Pids: number[];
  /** 服务类型 app,web,db */
  MainType: string;
  /** 执行文件 */
  Exe: string;
  /** 服务命令行参数 */
  Parameter: string;
  /** 容器id */
  ContainerId: string;
  /** 主机名称 */
  HostName: string;
  /** 外网ip */
  PublicIp: string;
}

/** 后付费详情 */
declare interface SoftQuotaDayInfo {
  /** 扣费时间 */
  PayTime: string;
  /** 计费核数 */
  CoresCnt: number;
}

/** 运行时木马列表信息 */
declare interface VirusInfo {
  /** 文件名称 */
  FileName: string;
  /** 文件路径 */
  FilePath: string;
  /** 病毒名称 */
  VirusName: string;
  /** 创建时间 */
  CreateTime: string;
  /** 更新时间 */
  ModifyTime: string;
  /** 容器名称 */
  ContainerName: string;
  /** 容器id */
  ContainerId: string;
  /** 容器状态正在运行: RUNNING暂停: PAUSED停止: STOPPED已经创建: CREATED已经销毁: DESTROYED正在重启中: RESTARTING迁移中: REMOVING */
  ContainerStatus: string;
  /** 镜像名称 */
  ImageName: string;
  /** 镜像id */
  ImageId: string;
  /** DEAL_NONE:文件待处理DEAL_IGNORE:已经忽略DEAL_ADD_WHITELIST:加白DEAL_DEL:文件已经删除DEAL_ISOLATE:已经隔离DEAL_ISOLATING:隔离中DEAL_ISOLATE_FAILED:隔离失败DEAL_RECOVERING:恢复中DEAL_RECOVER_FAILED: 恢复失败 */
  Status: string;
  /** 事件id */
  Id: string;
  /** 事件描述 */
  HarmDescribe: string;
  /** 建议方案 */
  SuggestScheme: string;
  /** 失败子状态:FILE_NOT_FOUND:文件不存在FILE_ABNORMAL:文件异常FILE_ABNORMAL_DEAL_RECOVER:恢复文件时，文件异常BACKUP_FILE_NOT_FOUND:备份文件不存在CONTAINER_NOT_FOUND_DEAL_ISOLATE:隔离时，容器不存在CONTAINER_NOT_FOUND_DEAL_RECOVER:恢复时，容器不存在TIMEOUT: 超时TOO_MANY: 任务过多OFFLINE: 离线INTERNAL: 服务内部错误VALIDATION: 参数非法 */
  SubStatus: string;
  /** 网络状态未隔离 NORMAL已隔离 ISOLATED隔离中 ISOLATING隔离失败	ISOLATE_FAILED解除隔离中 RESTORING解除隔离失败 RESTORE_FAILED */
  ContainerNetStatus: string;
  /** 容器子状态"AGENT_OFFLINE" //Agent离线	"NODE_DESTROYED" //节点已销毁	"CONTAINER_EXITED" //容器已退出	"CONTAINER_DESTROYED" //容器已销毁	"SHARED_HOST" // 容器与主机共享网络	"RESOURCE_LIMIT" //隔离操作资源超限	"UNKNOW" // 原因未知 */
  ContainerNetSubStatus: string;
  /** 容器隔离操作来源 */
  ContainerIsolateOperationSrc: string;
  /** md5值 */
  MD5: string | null;
  /** 风险等级 RISK_CRITICAL, RISK_HIGH, RISK_MEDIUM, RISK_LOW, RISK_NOTICE。 */
  RiskLevel: string | null;
  /** 检测平台1: 云查杀引擎2: tav3: binaryAi4: 异常行为5: 威胁情报 */
  CheckPlatform: string[] | null;
}

/** 运行时文件查杀任务容器列表信息 */
declare interface VirusTaskInfo {
  /** 容器名称 */
  ContainerName: string;
  /** 容器id */
  ContainerId: string;
  /** 镜像名称 */
  ImageName: string;
  /** 镜像Id */
  ImageId: string;
  /** 主机名称 */
  HostName: string;
  /** 主机ip */
  HostIp: string;
  /** 扫描状态：WAIT: 等待扫描FAILED: 失败SCANNING: 扫描中FINISHED: 结束CANCELING: 取消中CANCELED: 已取消CANCEL_FAILED： 取消失败 */
  Status: string;
  /** 检测开始时间 */
  StartTime: string;
  /** 检测结束时间 */
  EndTime: string;
  /** 风险个数 */
  RiskCnt: number;
  /** 事件id */
  Id: string;
  /** 错误原因:SEND_SUCCESSED: 下发成功SCAN_WAIT: agent排队扫描等待中OFFLINE: 离线SEND_FAILED:下发失败TIMEOUT: 超时LOW_AGENT_VERSION: 客户端版本过低AGENT_NOT_FOUND: 镜像所属客户端版不存在TOO_MANY: 任务过多VALIDATION: 参数非法INTERNAL: 服务内部错误MISC: 其他错误UNAUTH: 所在镜像未授权SEND_CANCEL_SUCCESSED:下发成功 */
  ErrorMsg: string;
}

/** 告警配置策略 */
declare interface WarningRule {
  /** 告警事件类型：镜像仓库安全-木马：IMG_REG_VIRUS镜像仓库安全-漏洞：IMG_REG_VUL镜像仓库安全-敏感信息：IMG_REG_RISK镜像安全-木马：IMG_VIRUS镜像安全-漏洞：IMG_VUL镜像安全-敏感信息：IMG_RISK镜像安全-镜像拦截：IMG_INTERCEPT运行时安全-容器逃逸：RUNTIME_ESCAPE运行时安全-异常进程：RUNTIME_FILE运行时安全-异常文件访问：RUNTIME_PROCESS运行时安全-高危系统调用：RUNTIME_SYSCALL运行时安全-反弹Shell：RUNTIME_REVERSE_SHELL运行时安全-木马：RUNTIME_VIRUS */
  Type: string;
  /** 开关状态：打开：ON关闭：OFF */
  Switch: string;
  /** 告警开始时间，格式: HH:mm */
  BeginTime: string;
  /** 告警结束时间，格式: HH:mm */
  EndTime: string;
  /** 告警等级策略控制，二进制位每位代表一个含义，值以字符串类型传递控制开关分为高、中、低，则二进制位分别为：第1位:低，第2位:中，第3位:高，0表示关闭、1表示打开。如：高危和中危打开告警，低危关闭告警，则二进制值为：110告警类型不区分等级控制，则传1。 */
  ControlBits: string;
}

declare interface AddAssetImageRegistryRegistryDetailRequest {
  /** 仓库名 */
  Name: string;
  /** 用户名 */
  Username: string;
  /** 密码 */
  Password: string;
  /** 仓库url */
  Url: string;
  /** 仓库类型，列表：harbor */
  RegistryType: string;
  /** 网络类型，列表：public（公网） */
  NetType: string;
  /** 仓库版本 */
  RegistryVersion?: string;
  /** 区域，列表：default（默认） */
  RegistryRegion?: string;
  /** 限速 */
  SpeedLimit?: number;
  /** 安全模式（证书校验）：0（默认） 非安全模式（跳过证书校验）：1 */
  Insecure?: number;
}

declare interface AddAssetImageRegistryRegistryDetailResponse {
  /** 连接错误信息 */
  HealthCheckErr: string | null;
  /** 名称错误信息 */
  NameRepeatErr: string | null;
  /** 仓库唯一id */
  RegistryId: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface AddCompliancePolicyItemToWhitelistRequest {
  /** 要忽略的检测项的ID的列表 */
  CustomerPolicyItemIdSet: number[];
}

declare interface AddCompliancePolicyItemToWhitelistResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface AddEditAbnormalProcessRuleRequest {
  /** 增加策略信息，策略id为空，编辑策略是id不能为空 */
  RuleInfo: AbnormalProcessRuleInfo;
  /** 仅在加白的时候带上 */
  EventId?: string;
}

declare interface AddEditAbnormalProcessRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface AddEditAccessControlRuleRequest {
  /** 增加策略信息，策略id为空，编辑策略是id不能为空 */
  RuleInfo: AccessControlRuleInfo;
  /** 仅在白名单时候使用 */
  EventId?: string;
}

declare interface AddEditAccessControlRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface AddEditReverseShellWhiteListRequest {
  /** 增加或编辑白名单信息。新增白名单时WhiteListInfo.id为空，编辑白名单WhiteListInfo.id不能为空。 */
  WhiteListInfo: ReverseShellWhiteListInfo;
  /** 仅在添加事件白名单时候使用 */
  EventId?: string;
}

declare interface AddEditReverseShellWhiteListResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface AddEditRiskSyscallWhiteListRequest {
  /** 仅在添加事件白名单时候使用 */
  EventId?: string;
  /** 增加或编辑白名单信。新增白名单时WhiteListInfo.id为空，编辑白名单WhiteListInfo.id不能为空. */
  WhiteListInfo?: RiskSyscallWhiteListInfo;
}

declare interface AddEditRiskSyscallWhiteListResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface AddEditWarningRulesRequest {
  /** 告警开关策略 */
  WarningRules: WarningRule[];
}

declare interface AddEditWarningRulesResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CheckRepeatAssetImageRegistryRequest {
  /** 仓库名 */
  Name: string;
}

declare interface CheckRepeatAssetImageRegistryResponse {
  /** 是否重复 */
  IsRepeat: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateAssetImageRegistryScanTaskOneKeyRequest {
  /** 是否扫描全部镜像 */
  All?: boolean;
  /** 扫描的镜像列表 */
  Images?: ImageInfo[];
  /** 扫描类型数组 */
  ScanType?: string[];
  /** 扫描的镜像列表Id */
  Id?: number[];
}

declare interface CreateAssetImageRegistryScanTaskOneKeyResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateAssetImageRegistryScanTaskRequest {
  /** 是否扫描全部镜像 */
  All?: boolean;
  /** 扫描的镜像列表 */
  Images?: ImageInfo[];
  /** 扫描类型数组 */
  ScanType?: string[];
  /** 扫描的镜像列表 */
  Id?: number[];
  /** 过滤条件 */
  Filters?: AssetFilters[];
  /** 不需要扫描的镜像列表, 与Filters配合使用 */
  ExcludeImageList?: number[];
  /** 是否仅扫描各repository最新版的镜像, 与Filters配合使用 */
  OnlyScanLatest?: boolean;
}

declare interface CreateAssetImageRegistryScanTaskResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateAssetImageScanSettingRequest {
  /** 开关 */
  Enable: boolean;
  /** 扫描时间 */
  ScanTime: string;
  /** 扫描周期 */
  ScanPeriod: number;
  /** 扫描木马 */
  ScanVirus: boolean;
  /** 扫描敏感信息 */
  ScanRisk: boolean;
  /** 扫描漏洞 */
  ScanVul: boolean;
  /** 全部镜像 */
  All: boolean;
  /** 自定义镜像 */
  Images?: string[];
}

declare interface CreateAssetImageScanSettingResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateAssetImageScanTaskRequest {
  /** 是否扫描全部镜像；全部镜像，镜像列表和根据过滤条件筛选三选一。 */
  All?: boolean;
  /** 需要扫描的镜像列表；全部镜像，镜像列表和根据过滤条件筛选三选一。 */
  Images?: string[];
  /** 扫描漏洞；漏洞，木马和风险需选其一 */
  ScanVul?: boolean;
  /** 扫描木马；漏洞，木马和风险需选其一 */
  ScanVirus?: boolean;
  /** 扫描风险；漏洞，木马和风险需选其一 */
  ScanRisk?: boolean;
  /** 根据过滤条件筛选出镜像；全部镜像，镜像列表和根据过滤条件筛选三选一。 */
  Filters?: AssetFilters[];
  /** 根据过滤条件筛选出镜像，再排除个别镜像 */
  ExcludeImageIds?: string[];
}

declare interface CreateAssetImageScanTaskResponse {
  /** 任务id */
  TaskID: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateCheckComponentRequest {
  /** 要安装的集群列表信息 */
  ClusterInfoList: ClusterCreateComponentItem[];
}

declare interface CreateCheckComponentResponse {
  /** "InstallSucc"表示安装成功，"InstallFailed"表示安装失败 */
  InstallResult: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateClusterCheckTaskRequest {
  /** 指定要扫描的集群信息 */
  ClusterCheckTaskList: ClusterCheckTaskItem[];
}

declare interface CreateClusterCheckTaskResponse {
  /** 返回创建的集群检查任务的ID，为0表示创建失败。 */
  TaskId: number;
  /** 创建检查任务的结果，"Succ"为成功，其他的为失败原因 */
  CreateResult: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateComplianceTaskRequest {
  /** 指定要扫描的资产类型列表。ASSET_CONTAINER, 容器ASSET_IMAGE, 镜像ASSET_HOST, 主机ASSET_K8S, K8S资产AssetTypeSet, PolicySetId, PeriodTaskId三个参数，必须要给其中一个参数填写有效的值。 */
  AssetTypeSet?: string[];
  /** 按照策略集ID指定的策略执行合规检查。 */
  PolicySetId?: number;
  /** 按照定时任务ID指定的策略执行合规检查。 */
  PeriodTaskId?: number;
}

declare interface CreateComplianceTaskResponse {
  /** 返回创建的合规检查任务的ID。 */
  TaskId: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateExportComplianceStatusListJobRequest {
  /** 要导出信息的资产类型 */
  AssetType: string;
  /** 按照检测项导出，还是按照资产导出。true: 按照资产导出；false: 按照检测项导出。 */
  ExportByAsset: boolean;
  /** true, 全部导出；false, 根据IdList来导出数据。 */
  ExportAll: boolean;
  /** 要导出的资产ID列表或检测项ID列表，由ExportByAsset的取值决定。 */
  IdList?: number[];
}

declare interface CreateExportComplianceStatusListJobResponse {
  /** 返回创建的导出任务的ID */
  JobId: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateOrModifyPostPayCoresRequest {
  /** 弹性计费上限，最小值500 */
  CoresCnt: number;
}

declare interface CreateOrModifyPostPayCoresResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateRefreshTaskRequest {
}

declare interface CreateRefreshTaskResponse {
  /** 返回创建的集群检查任务的ID，为0表示创建失败。 */
  TaskId: number;
  /** 创建检查任务的结果，"Succ"为成功，"Failed"为失败 */
  CreateResult: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateVirusScanAgainRequest {
  /** 任务id */
  TaskId: string;
  /** 需要扫描的容器id集合 */
  ContainerIds?: string[];
  /** 是否是扫描全部超时的 */
  TimeoutAll?: boolean;
  /** 重新设置的超时时长 */
  Timeout?: number;
}

declare interface CreateVirusScanAgainResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateVirusScanTaskRequest {
  /** 是否扫描所有路径 */
  ScanPathAll: boolean;
  /** 扫描范围0容器1主机节点 */
  ScanRangeType: number;
  /** true 全选，false 自选 */
  ScanRangeAll: boolean;
  /** 超时时长，单位小时 */
  Timeout: number;
  /** 当ScanPathAll为false生效 0扫描以下路径 1、扫描除以下路径 */
  ScanPathType?: number;
  /** 自选扫描范围的容器id或者主机id 根据ScanRangeType决定 */
  ScanIds?: string[];
  /** 自选排除或扫描的地址 */
  ScanPath?: string[];
}

declare interface CreateVirusScanTaskResponse {
  /** 任务id */
  TaskID: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteAbnormalProcessRulesRequest {
  /** 策略的ids */
  RuleIdSet: string[];
}

declare interface DeleteAbnormalProcessRulesResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteAccessControlRulesRequest {
  /** 策略的ids */
  RuleIdSet: string[];
}

declare interface DeleteAccessControlRulesResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteCompliancePolicyItemFromWhitelistRequest {
  /** 指定的白名单项的ID的列表 */
  WhitelistIdSet: number[];
}

declare interface DeleteCompliancePolicyItemFromWhitelistResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteReverseShellWhiteListsRequest {
  /** 白名单ids */
  WhiteListIdSet: string[];
}

declare interface DeleteReverseShellWhiteListsResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteRiskSyscallWhiteListsRequest {
  /** 白名单ids */
  WhiteListIdSet: string[];
}

declare interface DeleteRiskSyscallWhiteListsResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAbnormalProcessDetailRequest {
  /** 事件唯一id */
  EventId: string;
}

declare interface DescribeAbnormalProcessDetailResponse {
  /** 事件基本信息 */
  EventBaseInfo: RunTimeEventBaseInfo;
  /** 进程信息 */
  ProcessInfo: ProcessDetailInfo;
  /** 父进程信息 */
  ParentProcessInfo: ProcessDetailBaseInfo;
  /** 事件描述 */
  EventDetail: AbnormalProcessEventDescription;
  /** 祖先进程信息 */
  AncestorProcessInfo: ProcessBaseInfo | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAbnormalProcessEventsExportRequest {
  /** 导出字段 */
  ExportField: string[];
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤参数,"Filters":[{"Name":"Status","Values":["2"]}] */
  Filters?: RunTimeFilters[];
  /** 升序降序,asc desc */
  Order?: string;
  /** 排序字段 */
  By?: string;
}

declare interface DescribeAbnormalProcessEventsExportResponse {
  /** execle下载地址 */
  DownloadUrl: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAbnormalProcessEventsRequest {
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤参数,"Filters":[{"Name":"Status","Values":["2"]}] */
  Filters?: RunTimeFilters[];
  /** 升序降序,asc desc */
  Order?: string;
  /** 排序字段 */
  By?: string;
}

declare interface DescribeAbnormalProcessEventsResponse {
  /** 事件总数量 */
  TotalCount: number;
  /** 异常进程数组 */
  EventSet: AbnormalProcessEventInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAbnormalProcessRuleDetailRequest {
  /** 策略唯一id */
  RuleId?: string;
  /** 镜像id, 在添加白名单的时候使用 */
  ImageId?: string;
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
}

declare interface DescribeAbnormalProcessRuleDetailResponse {
  /** 异常进程策略详细信息 */
  RuleDetail: AbnormalProcessRuleInfo;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAbnormalProcessRulesExportRequest {
  /** 导出字段 */
  ExportField: string[];
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤参数,"Filters":[{"Name":"Status","Values":["2"]}] */
  Filters?: RunTimeFilters[];
  /** 升序降序,asc desc */
  Order?: string;
  /** 排序字段 */
  By?: string;
}

declare interface DescribeAbnormalProcessRulesExportResponse {
  /** execle下载地址 */
  DownloadUrl: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAbnormalProcessRulesRequest {
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤参数,"Filters":[{"Name":"Status","Values":["2"]}] */
  Filters?: RunTimeFilters[];
  /** 升序降序,asc desc */
  Order?: string;
  /** 排序字段 */
  By?: string;
}

declare interface DescribeAbnormalProcessRulesResponse {
  /** 事件总数量 */
  TotalCount: number;
  /** 异常进程策略信息列表 */
  RuleSet: RuleBaseInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAccessControlDetailRequest {
  /** 事件唯一id */
  EventId: string;
}

declare interface DescribeAccessControlDetailResponse {
  /** 事件基本信息 */
  EventBaseInfo: RunTimeEventBaseInfo;
  /** 进程信息 */
  ProcessInfo: ProcessDetailInfo;
  /** 被篡改信息 */
  TamperedFileInfo: FileAttributeInfo;
  /** 事件描述 */
  EventDetail: AccessControlEventDescription;
  /** 父进程信息 */
  ParentProcessInfo: ProcessBaseInfo;
  /** 祖先进程信息 */
  AncestorProcessInfo: ProcessBaseInfo | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAccessControlEventsExportRequest {
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤参数,"Filters":[{"Name":"Status","Values":["2"]}] */
  Filters?: RunTimeFilters[];
  /** 升序降序,asc desc */
  Order?: string;
  /** 排序字段 */
  By?: string;
  /** 导出字段 */
  ExportField?: string[];
}

declare interface DescribeAccessControlEventsExportResponse {
  /** execle下载地址 */
  DownloadUrl: string | null;
  /** 任务id */
  JobId: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAccessControlEventsRequest {
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤参数,"Filters":[{"Name":"Status","Values":["2"]}] */
  Filters?: RunTimeFilters[];
  /** 升序降序,asc desc */
  Order?: string;
  /** 排序字段 */
  By?: string;
}

declare interface DescribeAccessControlEventsResponse {
  /** 事件总数量 */
  TotalCount: number;
  /** 访问控制事件数组 */
  EventSet: AccessControlEventInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAccessControlRuleDetailRequest {
  /** 策略唯一id */
  RuleId?: string;
  /** 镜像id, 仅仅在事件加白的时候使用 */
  ImageId?: string;
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
}

declare interface DescribeAccessControlRuleDetailResponse {
  /** 运行时策略详细信息 */
  RuleDetail: AccessControlRuleInfo;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAccessControlRulesExportRequest {
  /** 导出字段 */
  ExportField: string[];
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤参数,"Filters":[{"Name":"Status","Values":["2"]}] */
  Filters?: RunTimeFilters[];
  /** 升序降序,asc desc */
  Order?: string;
  /** 排序字段 */
  By?: string;
}

declare interface DescribeAccessControlRulesExportResponse {
  /** execle下载地址 */
  DownloadUrl: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAccessControlRulesRequest {
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤参数,"Filters":[{"Name":"Status","Values":["2"]}] */
  Filters?: RunTimeFilters[];
  /** 升序降序,asc desc */
  Order?: string;
  /** 排序字段 */
  By?: string;
}

declare interface DescribeAccessControlRulesResponse {
  /** 事件总数量 */
  TotalCount: number;
  /** 访问控制策略信息列表 */
  RuleSet: RuleBaseInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAffectedClusterCountRequest {
}

declare interface DescribeAffectedClusterCountResponse {
  /** 严重风险的集群数量 */
  SeriousRiskClusterCount: number;
  /** 高危风险的集群数量 */
  HighRiskClusterCount: number;
  /** 中危风险的集群数量 */
  MiddleRiskClusterCount: number;
  /** 低危风险的集群数量 */
  HintRiskClusterCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAffectedNodeListRequest {
  /** 唯一的检测项的ID */
  CheckItemId: number;
  /** 偏移量 */
  Offset?: number;
  /** 每次查询的最大记录数量 */
  Limit?: number;
  /** Name - StringName 可取值：ClusterName, ClusterId,InstanceId,PrivateIpAddresses */
  Filters?: ComplianceFilters[];
  /** 排序字段 */
  By?: string;
  /** 排序方式 asc,desc */
  Order?: string;
}

declare interface DescribeAffectedNodeListResponse {
  /** 受影响的节点总数 */
  TotalCount: number;
  /** 受影响的节点列表 */
  AffectedNodeList: AffectedNodeItem[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAffectedWorkloadListRequest {
  /** 唯一的检测项的ID */
  CheckItemId: number;
  /** 偏移量 */
  Offset?: number;
  /** 每次查询的最大记录数量 */
  Limit?: number;
  /** Name - StringName 可取值：WorkloadType,ClusterId */
  Filters?: ComplianceFilters[];
  /** 排序字段 */
  By?: string;
  /** 排序方式 asc,desc */
  Order?: string;
}

declare interface DescribeAffectedWorkloadListResponse {
  /** 受影响的workload列表数量 */
  TotalCount: number;
  /** 受影响的workload列表 */
  AffectedWorkloadList: AffectedWorkloadItem[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAssetAppServiceListRequest {
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤条件。Keywords- String - 是否必填：否 - 模糊查询可选字段 */
  Filters?: AssetFilters[];
}

declare interface DescribeAssetAppServiceListResponse {
  /** db服务列表 */
  List: ServiceInfo[];
  /** 总数量 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAssetComponentListRequest {
  /** 容器id */
  ContainerID: string;
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤条件 */
  Filters?: AssetFilters[];
}

declare interface DescribeAssetComponentListResponse {
  /** 组件列表 */
  List: ComponentInfo[];
  /** 总数量 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAssetContainerDetailRequest {
  /** 容器id */
  ContainerId: string;
}

declare interface DescribeAssetContainerDetailResponse {
  /** 主机id */
  HostID: string;
  /** 主机ip */
  HostIP: string;
  /** 容器名称 */
  ContainerName: string;
  /** 运行状态 */
  Status: string;
  /** 运行账户 */
  RunAs: string;
  /** 命令行 */
  Cmd: string;
  /** CPU使用率 * 1000 */
  CPUUsage: number;
  /** 内存使用 KB */
  RamUsage: number;
  /** 镜像名 */
  ImageName: string;
  /** 镜像ID */
  ImageID: string;
  /** 归属POD */
  POD: string;
  /** k8s 主节点 */
  K8sMaster: string;
  /** 容器内进程数 */
  ProcessCnt: number;
  /** 容器内端口数 */
  PortCnt: number;
  /** 组件数 */
  ComponentCnt: number;
  /** app数 */
  AppCnt: number;
  /** websvc数 */
  WebServiceCnt: number;
  /** 挂载 */
  Mounts: ContainerMount[];
  /** 容器网络信息 */
  Network: ContainerNetwork;
  /** 创建时间 */
  CreateTime: string;
  /** 镜像创建时间 */
  ImageCreateTime: string;
  /** 镜像大小 */
  ImageSize: number;
  /** 主机状态 offline,online,pause */
  HostStatus: string;
  /** 网络状态未隔离 NORMAL已隔离 ISOLATED隔离中 ISOLATING隔离失败	ISOLATE_FAILED解除隔离中 RESTORING解除隔离失败 RESTORE_FAILED */
  NetStatus: string;
  /** 网络子状态 */
  NetSubStatus: string;
  /** 隔离来源 */
  IsolateSource: string | null;
  /** 隔离时间 */
  IsolateTime: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAssetContainerListRequest {
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤条件。ContainerName - String - 是否必填：否 - 容器名称模糊搜索Status - String - 是否必填：否 - 容器运行状态筛选，0："created",1："running", 2："paused", 3："restarting", 4："removing", 5："exited", 6："dead" Runas - String - 是否必填：否 - 运行用户筛选ImageName- String - 是否必填：否 - 镜像名称搜索HostIP- string - 是否必填：否 - 主机ip搜索OrderBy - String 是否必填：否 -排序字段，支持：cpu_usage, mem_usage的动态排序 ["cpu_usage","+"] '+'升序、'-'降序NetStatus - String -是否必填: 否 - 容器网络状态筛选 normal isolated isolating isolate_failed restoring restore_failed */
  Filters?: AssetFilters[];
  /** 排序字段 */
  By?: string;
  /** 排序方式 asc,desc */
  Order?: string;
}

declare interface DescribeAssetContainerListResponse {
  /** 容器列表 */
  List: ContainerInfo[];
  /** 总数量 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAssetDBServiceListRequest {
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤条件。Keywords- String - 是否必填：否 - 模糊查询可选字段 */
  Filters?: AssetFilters[];
}

declare interface DescribeAssetDBServiceListResponse {
  /** db服务列表 */
  List: ServiceInfo[];
  /** 总数量 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAssetHostDetailRequest {
  /** 主机id */
  HostId: string;
}

declare interface DescribeAssetHostDetailResponse {
  /** 云镜uuid */
  UUID: string;
  /** 更新时间 */
  UpdateTime: string;
  /** 主机名 */
  HostName: string;
  /** 主机分组 */
  Group: string;
  /** 主机IP */
  HostIP: string;
  /** 操作系统 */
  OsName: string;
  /** agent版本 */
  AgentVersion: string;
  /** 内核版本 */
  KernelVersion: string;
  /** docker版本 */
  DockerVersion: string;
  /** docker api版本 */
  DockerAPIVersion: string;
  /** docker go 版本 */
  DockerGoVersion: string;
  /** docker 文件系统类型 */
  DockerFileSystemDriver: string;
  /** docker root 目录 */
  DockerRootDir: string;
  /** 镜像数 */
  ImageCnt: number;
  /** 容器数 */
  ContainerCnt: number;
  /** k8s IP */
  K8sMasterIP: string;
  /** k8s version */
  K8sVersion: string;
  /** kube proxy */
  KubeProxyVersion: string;
  /** "UNINSTALL"："未安装","OFFLINE"："离线", "ONLINE"："防护中 */
  Status: string;
  /** 是否Containerd */
  IsContainerd: boolean;
  /** 主机来源;"TENCENTCLOUD":"腾讯云服务器","OTHERCLOUD":"非腾讯云服务器" */
  MachineType: string;
  /** 外网ip */
  PublicIp: string;
  /** 主机实例ID */
  InstanceID: string;
  /** 地域ID */
  RegionID: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAssetHostListRequest {
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤条件。Status - String - 是否必填：否 - agent状态筛选，"ALL":"全部"(或不传该字段),"UNINSTALL"："未安装","OFFLINE"："离线", "ONLINE"："防护中"HostName - String - 是否必填：否 - 主机名筛选Group- String - 是否必填：否 - 主机群组搜索HostIP- string - 是否必填：否 - 主机ip搜索HostID- string - 是否必填：否 - 主机id搜索DockerVersion- string - 是否必填：否 - docker版本搜索MachineType- string - 是否必填：否 - 主机来源MachineType搜索，"ALL":"全部"(或不传该字段),主机来源：["CVM", "ECM", "LH", "BM"] 中的之一为腾讯云服务器；["Other"]之一非腾讯云服务器；DockerStatus- string - 是否必填：否 - docker安装状态，"ALL":"全部"(或不传该字段),"INSTALL":"已安装","UNINSTALL":"未安装" */
  Filters?: AssetFilters[];
  /** 排序字段 */
  By?: string;
  /** 排序方式 asc,desc */
  Order?: string;
}

declare interface DescribeAssetHostListResponse {
  /** 主机列表 */
  List: HostInfo[];
  /** 总数量 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAssetImageBindRuleInfoRequest {
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤参数,"Filters":[{"Name":"EventType","Values":[""]}]EventType取值："FILE_ABNORMAL_READ" 访问控制"MALICE_PROCESS_START" 恶意进程启动 */
  Filters?: RunTimeFilters[];
  /** 升序降序,asc desc */
  Order?: string;
  /** 排序字段 */
  By?: string;
}

declare interface DescribeAssetImageBindRuleInfoResponse {
  /** 事件总数量 */
  TotalCount: number;
  /** 镜像绑定规则列表 */
  ImageBindRuleSet: ImagesBindRuleInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAssetImageDetailRequest {
  /** 镜像id */
  ImageID: string;
}

declare interface DescribeAssetImageDetailResponse {
  /** 镜像ID */
  ImageID: string;
  /** 镜像名称 */
  ImageName: string;
  /** 创建时间 */
  CreateTime: string;
  /** 镜像大小 */
  Size: number;
  /** 关联主机个数 */
  HostCnt: number | null;
  /** 关联容器个数 */
  ContainerCnt: number | null;
  /** 最近扫描时间 */
  ScanTime: string | null;
  /** 漏洞个数 */
  VulCnt: number | null;
  /** 风险行为数 */
  RiskCnt: number | null;
  /** 敏感信息数 */
  SensitiveInfoCnt: number | null;
  /** 是否信任镜像 */
  IsTrustImage: boolean;
  /** 镜像系统 */
  OsName: string;
  /** agent镜像扫描错误 */
  AgentError: string | null;
  /** 后端镜像扫描错误 */
  ScanError: string | null;
  /** 系统架构 */
  Architecture: string | null;
  /** 作者 */
  Author: string | null;
  /** 构建历史 */
  BuildHistory: string | null;
  /** 木马扫描进度 */
  ScanVirusProgress: number | null;
  /** 漏洞扫进度 */
  ScanVulProgress: number | null;
  /** 敏感信息扫描进度 */
  ScanRiskProgress: number | null;
  /** 木马扫描错误 */
  ScanVirusError: string | null;
  /** 漏洞扫描错误 */
  ScanVulError: string | null;
  /** 敏感信息错误 */
  ScanRiskError: string | null;
  /** 镜像扫描状态 */
  ScanStatus: string | null;
  /** 木马病毒数 */
  VirusCnt: number | null;
  /** 镜像扫描状态 */
  Status: number | null;
  /** 剩余扫描时间 */
  RemainScanTime: number | null;
  /** 授权为：1，未授权为：0 */
  IsAuthorized: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAssetImageHostListRequest {
  /** 过滤条件 支持ImageID,HostID */
  Filters?: AssetFilters[];
}

declare interface DescribeAssetImageHostListResponse {
  /** 镜像列表 */
  List: ImageHost[];
  /** 总数量 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAssetImageListExportRequest {
  /** 导出字段 */
  ExportField: string[];
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤条件。ImageName- String - 是否必填：否 - 镜像名称筛选，ScanStatus - String - 是否必填：否 - 镜像扫描状态notScan，scanning，scanned，scanErrImageID- String - 是否必填：否 - 镜像ID筛选，SecurityRisk- String - 是否必填：否 - 安全风险，VulCnt 、VirusCnt、RiskCnt、IsTrustImage */
  Filters?: AssetFilters[];
  /** 排序字段 */
  By?: string;
  /** 排序方式 asc,desc */
  Order?: string;
}

declare interface DescribeAssetImageListExportResponse {
  /** excel文件下载地址 */
  DownloadUrl: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAssetImageListRequest {
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤条件。ImageName- String - 是否必填：否 - 镜像名称筛选，ScanStatus - String - 是否必填：否 - 镜像扫描状态notScan，scanning，scanned，scanErrImageID- String - 是否必填：否 - 镜像ID筛选，SecurityRisk- String - 是否必填：否 - 安全风险，VulCnt 、VirusCnt、RiskCnt、IsTrustImage */
  Filters?: AssetFilters[];
  /** 排序字段 */
  By?: string;
  /** 排序方式 asc,desc */
  Order?: string;
}

declare interface DescribeAssetImageListResponse {
  /** 镜像列表 */
  List: ImagesInfo[];
  /** 总数量 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAssetImageRegistryAssetStatusRequest {
}

declare interface DescribeAssetImageRegistryAssetStatusResponse {
  /** 更新进度状态,doing更新中，success更新成功，failed失败 */
  Status: string;
  /** 错误信息 */
  Err: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAssetImageRegistryDetailRequest {
  /** 仓库列表id */
  Id?: number;
  /** 镜像ID */
  ImageId?: string;
}

declare interface DescribeAssetImageRegistryDetailResponse {
  /** 镜像Digest */
  ImageDigest: string | null;
  /** 镜像地址 */
  ImageRepoAddress: string | null;
  /** 镜像类型 */
  RegistryType: string | null;
  /** 仓库名称 */
  ImageName: string | null;
  /** 镜像版本 */
  ImageTag: string | null;
  /** 扫描时间 */
  ScanTime: string | null;
  /** 扫描状态 */
  ScanStatus: string | null;
  /** 安全漏洞数 */
  VulCnt: number | null;
  /** 木马病毒数 */
  VirusCnt: number | null;
  /** 风险行为数 */
  RiskCnt: number | null;
  /** 敏感信息数 */
  SentiveInfoCnt: number | null;
  /** 镜像系统 */
  OsName: string | null;
  /** 木马扫描错误 */
  ScanVirusError: string | null;
  /** 漏洞扫描错误 */
  ScanVulError: string | null;
  /** 层文件信息 */
  LayerInfo: string | null;
  /** 实例id */
  InstanceId: string | null;
  /** 实例名称 */
  InstanceName: string | null;
  /** 命名空间 */
  Namespace: string | null;
  /** 高危扫描错误 */
  ScanRiskError: string | null;
  /** 木马信息扫描进度 */
  ScanVirusProgress: number | null;
  /** 漏洞扫描进度 */
  ScanVulProgress: number | null;
  /** 敏感扫描进度 */
  ScanRiskProgress: number | null;
  /** 剩余扫描时间秒 */
  ScanRemainTime: number | null;
  /** cve扫描状态 */
  CveStatus: string | null;
  /** 高危扫描状态 */
  RiskStatus: string | null;
  /** 木马扫描状态 */
  VirusStatus: string | null;
  /** 总进度 */
  Progress: number | null;
  /** 授权状态 */
  IsAuthorized: number | null;
  /** 镜像大小 */
  ImageSize: number | null;
  /** 镜像Id */
  ImageId: string | null;
  /** 镜像区域 */
  RegistryRegion: string | null;
  /** 镜像创建的时间 */
  ImageCreateTime: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAssetImageRegistryListExportRequest {
  /** 导出字段 */
  ExportField: string[];
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 偏移量，默认为0 */
  Offset?: number;
  /** 排序字段 */
  Filters?: AssetFilters[];
  /** 排序字段 */
  By?: string;
  /** 排序方式，asc，desc */
  Order?: string;
  /** 是否仅展示repository版本最新的镜像，默认为false */
  OnlyShowLatest?: boolean;
}

declare interface DescribeAssetImageRegistryListExportResponse {
  /** excel文件下载地址 */
  DownloadUrl: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAssetImageRegistryListRequest {
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 偏移量，默认为0 */
  Offset?: number;
  /** 过滤字段IsAuthorized是否授权，取值全部all，未授权0，已授权1 */
  Filters?: AssetFilters[];
  /** 排序字段 */
  By?: string;
  /** 排序方式，asc，desc */
  Order?: string;
  /** 是否仅展示各repository最新的镜像, 默认为false */
  OnlyShowLatest?: boolean;
}

declare interface DescribeAssetImageRegistryListResponse {
  /** 镜像仓库列表 */
  List: ImageRepoInfo[] | null;
  /** 总数量 */
  TotalCount: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAssetImageRegistryRegistryDetailRequest {
  /** 仓库唯一id */
  RegistryId: number;
}

declare interface DescribeAssetImageRegistryRegistryDetailResponse {
  /** 仓库名 */
  Name: string;
  /** 用户名 */
  Username: string;
  /** 密码 */
  Password: string;
  /** 仓库url */
  Url: string;
  /** 仓库类型，列表：harbor */
  RegistryType: string;
  /** 仓库版本 */
  RegistryVersion: string | null;
  /** 网络类型，列表：public（公网） */
  NetType: string;
  /** 区域，列表:default（默认） */
  RegistryRegion: string | null;
  /** 限速 */
  SpeedLimit: number | null;
  /** 安全模式（证书校验）：0（默认） 非安全模式（跳过证书校验）：1 */
  Insecure: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAssetImageRegistryRegistryListRequest {
}

declare interface DescribeAssetImageRegistryRegistryListResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAssetImageRegistryRiskInfoListRequest {
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤条件。Level- String - 是否必填：否 - 漏洞级别筛选，Name - String - 是否必填：否 - 漏洞名称 */
  Filters?: AssetFilters[];
  /** 镜像id */
  ImageInfo?: ImageInfo;
  /** 排序字段（Level） */
  By?: string;
  /** 排序方式 + - */
  Order?: string;
  /** 镜像标识Id */
  Id?: number;
}

declare interface DescribeAssetImageRegistryRiskInfoListResponse {
  /** 镜像漏洞列表 */
  List: ImageRisk[] | null;
  /** 总数量 */
  TotalCount: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAssetImageRegistryRiskListExportRequest {
  /** 导出字段 */
  ExportField: string[];
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤条件。Level- String - 是否必填：否 - 漏洞级别筛选，Name - String - 是否必填：否 - 漏洞名称 */
  Filters?: AssetFilters[];
  /** 镜像信息 */
  ImageInfo?: ImageInfo;
  /** 镜像标识Id */
  Id?: number;
}

declare interface DescribeAssetImageRegistryRiskListExportResponse {
  /** excel文件下载地址 */
  DownloadUrl: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAssetImageRegistryScanStatusOneKeyRequest {
  /** 需要获取进度的镜像列表 */
  Images?: ImageInfo[];
  /** 是否获取全部镜像 */
  All?: boolean;
  /** 需要获取进度的镜像列表Id */
  Id?: number[];
}

declare interface DescribeAssetImageRegistryScanStatusOneKeyResponse {
  /** 镜像个数 */
  ImageTotal: number;
  /** 扫描镜像个数 */
  ImageScanCnt: number;
  /** 扫描进度列表 */
  ImageStatus: ImageProgress[] | null;
  /** 安全个数 */
  SuccessCount: number;
  /** 风险个数 */
  RiskCount: number;
  /** 总的扫描进度 */
  Schedule: number;
  /** 总的扫描状态 */
  Status: string;
  /** 扫描剩余时间 */
  ScanRemainTime: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAssetImageRegistrySummaryRequest {
}

declare interface DescribeAssetImageRegistrySummaryResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAssetImageRegistryVirusListExportRequest {
  /** 导出字段 */
  ExportField: string[];
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤条件。Level- String - 是否必填：否 - 漏洞级别筛选，Name - String - 是否必填：否 - 漏洞名称 */
  Filters?: AssetFilters[];
  /** 镜像信息 */
  ImageInfo?: ImageInfo;
  /** 镜像标识Id */
  Id?: number;
}

declare interface DescribeAssetImageRegistryVirusListExportResponse {
  /** excel文件下载地址 */
  DownloadUrl: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAssetImageRegistryVirusListRequest {
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤条件。Level- String - 是否必填：否 - 漏洞级别筛选，Name - String - 是否必填：否 - 漏洞名称 */
  Filters?: AssetFilters[];
  /** 镜像信息 */
  ImageInfo?: ImageInfo;
  /** 镜像标识Id */
  Id?: number;
}

declare interface DescribeAssetImageRegistryVirusListResponse {
  /** 镜像漏洞列表 */
  List: ImageVirus[] | null;
  /** 总数量 */
  TotalCount: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAssetImageRegistryVulListExportRequest {
  /** 导出字段 */
  ExportField: string[];
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤条件。Level- String - 是否必填：否 - 漏洞级别筛选，Name - String - 是否必填：否 - 漏洞名称 */
  Filters?: AssetFilters[];
  /** 镜像信息 */
  ImageInfo?: ImageInfo;
  /** 镜像标识Id */
  Id?: number;
}

declare interface DescribeAssetImageRegistryVulListExportResponse {
  /** excel文件下载地址 */
  DownloadUrl: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAssetImageRegistryVulListRequest {
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤条件。Level- String - 是否必填：否 - 漏洞级别筛选，Name - String - 是否必填：否 - 漏洞名称 */
  Filters?: AssetFilters[];
  /** 镜像信息 */
  ImageInfo?: ImageInfo;
  /** 镜像标识Id */
  Id?: number;
}

declare interface DescribeAssetImageRegistryVulListResponse {
  /** 镜像漏洞列表 */
  List: ImageVul[] | null;
  /** 总数量 */
  TotalCount: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAssetImageRiskListExportRequest {
  /** 导出字段 */
  ExportField: string[];
  /** 镜像id */
  ImageID: string;
  /** 过滤条件。Level- String - 是否必填：否 - 风险级别 1,2,3,4，Behavior - String - 是否必填：否 - 风险行为 1,2,3,4Type - String - 是否必填：否 - 风险类型 1,2, */
  Filters?: AssetFilters[];
}

declare interface DescribeAssetImageRiskListExportResponse {
  /** excel文件下载地址 */
  DownloadUrl: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAssetImageRiskListRequest {
  /** 镜像id */
  ImageID: string;
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤条件。Level- String - 是否必填：否 - 风险级别 1,2,3,4，Behavior - String - 是否必填：否 - 风险行为 1,2,3,4Type - String - 是否必填：否 - 风险类型 1,2, */
  Filters?: AssetFilters[];
  /** 排序字段 */
  By?: string;
  /** 排序方式 */
  Order?: string;
}

declare interface DescribeAssetImageRiskListResponse {
  /** 镜像病毒列表 */
  List: ImageRiskInfo[];
  /** 总数量 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAssetImageScanSettingRequest {
}

declare interface DescribeAssetImageScanSettingResponse {
  /** 开关 */
  Enable: boolean;
  /** 扫描时刻(完整时间;后端按0时区解析时分秒) */
  ScanTime: string;
  /** 扫描间隔 */
  ScanPeriod: number;
  /** 扫描木马 */
  ScanVirus: boolean;
  /** 扫描敏感信息 */
  ScanRisk: boolean;
  /** 扫描漏洞 */
  ScanVul: boolean;
  /** 扫描全部镜像 */
  All: boolean;
  /** 自定义扫描镜像 */
  Images: string[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAssetImageScanStatusRequest {
  /** 任务id */
  TaskID?: string;
}

declare interface DescribeAssetImageScanStatusResponse {
  /** 镜像个数 */
  ImageTotal: number;
  /** 扫描镜像个数 */
  ImageScanCnt: number;
  /** 扫描状态 */
  Status: string;
  /** 扫描进度 ImageScanCnt/ImageTotal *100 */
  Schedule: number;
  /** 安全个数 */
  SuccessCount: number;
  /** 风险个数 */
  RiskCount: number;
  /** 剩余扫描时间 */
  LeftSeconds: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAssetImageScanTaskRequest {
}

declare interface DescribeAssetImageScanTaskResponse {
  /** 任务id */
  TaskID: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAssetImageSimpleListRequest {
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤条件。Keywords- String - 是否必填：否 - 镜像名、镜像id 称筛选， */
  Filters?: AssetFilters[];
  /** 排序字段 */
  By?: string;
  /** 排序方式 asc,desc */
  Order?: string;
}

declare interface DescribeAssetImageSimpleListResponse {
  /** 镜像列表 */
  List: AssetSimpleImageInfo[];
  /** 总数量 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAssetImageVirusListExportRequest {
  /** 列表支持字段 */
  ExportField: string[];
  /** 镜像id */
  ImageID: string;
  /** 过滤条件。Name- String - 是否必填：否 - 镜像名称筛选，RiskLevel - String - 是否必填：否 - 风险等级 1,2,3,4 */
  Filters?: AssetFilters[];
}

declare interface DescribeAssetImageVirusListExportResponse {
  /** excel文件下载地址 */
  DownloadUrl: string;
  /** 任务ID */
  JobId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAssetImageVirusListRequest {
  /** 镜像id */
  ImageID: string;
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤条件。Name- String - 是否必填：否 - 镜像名称筛选，RiskLevel - String - 是否必填：否 - 风险等级 1,2,3,4 */
  Filters?: AssetFilters[];
  /** 排序 asc desc */
  Order?: string;
  /** 排序字段 */
  By?: string;
}

declare interface DescribeAssetImageVirusListResponse {
  /** 镜像病毒列表 */
  List: ImageVirusInfo[];
  /** 总数量 */
  TotalCount: number;
  /** 病毒扫描状态0:未扫描1:扫描中2:扫描完成3:扫描出错4:扫描取消 */
  VirusScanStatus: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAssetImageVulListExportRequest {
  /** 导出字段 */
  ExportField: string[];
  /** 镜像id */
  ImageID: string;
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤条件。Name- String - 是否必填：否 - 漏洞名称名称筛选，Level - String - 是否必填：否 - 风险等级 1,2,3,4 */
  Filters?: AssetFilters[];
}

declare interface DescribeAssetImageVulListExportResponse {
  /** excel文件下载地址 */
  DownloadUrl: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAssetImageVulListRequest {
  /** 镜像id */
  ImageID: string;
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤条件。Name- String - 是否必填：否 - 漏洞名称名称筛选，Level - String - 是否必填：否 - 风险等级 1,2,3,4 */
  Filters?: AssetFilters[];
  /** 排序字段（Level） */
  By?: string;
  /** 排序方式 + - */
  Order?: string;
}

declare interface DescribeAssetImageVulListResponse {
  /** 镜像漏洞列表 */
  List: ImagesVul[];
  /** 总数量 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAssetPortListRequest {
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤条件。All - String - 是否必填：否 - 模糊查询可选字段RunAs - String - 是否必填：否 - 运行用户筛选，ContainerID - String - 是否必填：否 - 容器idHostID- String - 是否必填：是 - 主机idHostIP- string - 是否必填：否 - 主机ip搜索ProcessName- string - 是否必填：否 - 进程名搜索 */
  Filters?: AssetFilters[];
}

declare interface DescribeAssetPortListResponse {
  /** 端口列表 */
  List: PortInfo[];
  /** 总数量 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAssetProcessListRequest {
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤条件。RunAs - String - 是否必填：否 - 运行用户筛选，ContainerID - String - 是否必填：否 - 容器idHostID- String - 是否必填：是 - 主机idHostIP- string - 是否必填：否 - 主机ip搜索ProcessName- string - 是否必填：否 - 进程名搜索Pid- string - 是否必填：否 - 进程id搜索(关联进程) */
  Filters?: AssetFilters[];
}

declare interface DescribeAssetProcessListResponse {
  /** 端口列表 */
  List: ProcessInfo[];
  /** 总数量 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAssetSummaryRequest {
}

declare interface DescribeAssetSummaryResponse {
  /** 应用个数 */
  AppCnt: number;
  /** 容器个数 */
  ContainerCnt: number;
  /** 暂停的容器个数 */
  ContainerPause: number;
  /** 运行的容器个数 */
  ContainerRunning: number;
  /** 停止运行的容器个数 */
  ContainerStop: number;
  /** 创建时间 */
  CreateTime: string;
  /** 数据库个数 */
  DbCnt: number;
  /** 镜像个数 */
  ImageCnt: number;
  /** 主机在线个数 */
  HostOnline: number;
  /** 主机个数 */
  HostCnt: number;
  /** 有风险的镜像个数 */
  ImageHasRiskInfoCnt: number;
  /** 有病毒的镜像个数 */
  ImageHasVirusCnt: number;
  /** 有漏洞的镜像个数 */
  ImageHasVulsCnt: number;
  /** 不受信任的镜像个数 */
  ImageUntrustCnt: number;
  /** 监听的端口个数 */
  ListenPortCnt: number;
  /** 进程个数 */
  ProcessCnt: number;
  /** web服务个数 */
  WebServiceCnt: number;
  /** 最近镜像扫描时间 */
  LatestImageScanTime: string;
  /** 风险镜像个数 */
  ImageUnsafeCnt: number;
  /** 主机未安装agent数量 */
  HostUnInstallCnt: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAssetWebServiceListRequest {
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤条件。Keywords- String - 是否必填：否 - 模糊查询可选字段Type- String - 是否必填：否 - 主机运行状态筛选，"Apache""Jboss""lighttpd""Nginx""Tomcat" */
  Filters?: AssetFilters[];
}

declare interface DescribeAssetWebServiceListResponse {
  /** 主机列表 */
  List: ServiceInfo[];
  /** 总数量 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeCheckItemListRequest {
  /** 偏移量 */
  Offset?: number;
  /** 每次查询的最大记录数量 */
  Limit?: number;
  /** Name 可取值：risk_level风险等级, risk_target检查对象，风险对象,risk_type风险类别,risk_attri检测项所属的风险类型 */
  Filters?: ComplianceFilters[];
}

declare interface DescribeCheckItemListResponse {
  /** 检查项详情数组 */
  ClusterCheckItems: ClusterCheckItem[];
  /** 检查项总数 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeClusterDetailRequest {
  /** 集群id */
  ClusterId: string;
}

declare interface DescribeClusterDetailResponse {
  /** 集群id */
  ClusterId: string;
  /** 集群名字 */
  ClusterName: string;
  /** 当前集群扫描任务的进度，100表示扫描完成. */
  ScanTaskProgress: number;
  /** 集群版本 */
  ClusterVersion: string;
  /** 运行时组件 */
  ContainerRuntime: string;
  /** 集群节点数 */
  ClusterNodeNum: number;
  /** 集群状态 (Running 运行中 Creating 创建中 Abnormal 异常 ) */
  ClusterStatus: string;
  /** 集群类型：为托管集群MANAGED_CLUSTER、独立集群INDEPENDENT_CLUSTER */
  ClusterType: string;
  /** 集群区域 */
  Region: string;
  /** 严重风险检查项的数量 */
  SeriousRiskCount: number;
  /** 高风险检查项的数量 */
  HighRiskCount: number;
  /** 中风险检查项的数量 */
  MiddleRiskCount: number;
  /** 提示风险检查项的数量 */
  HintRiskCount: number;
  /** 检查任务的状态 */
  CheckStatus: string;
  /** 防御容器状态 */
  DefenderStatus: string;
  /** 扫描任务创建时间 */
  TaskCreateTime: string;
  /** 网络类型.PublicNetwork为公网类型,VPCNetwork为VPC网络 */
  NetworkType: string;
  /** API Server地址 */
  ApiServerAddress: string;
  /** 节点数 */
  NodeCount: number;
  /** 命名空间数 */
  NamespaceCount: number;
  /** 工作负载数 */
  WorkloadCount: number;
  /** Pod数量 */
  PodCount: number;
  /** Service数量 */
  ServiceCount: number;
  /** Ingress数量 */
  IngressCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeClusterSummaryRequest {
}

declare interface DescribeClusterSummaryResponse {
  /** 集群总数 */
  TotalCount: number;
  /** 有风险的集群数量 */
  RiskClusterCount: number;
  /** 未检查的集群数量 */
  UncheckClusterCount: number;
  /** 托管集群数量 */
  ManagedClusterCount: number;
  /** 独立集群数量 */
  IndependentClusterCount: number;
  /** 无风险的集群数量 */
  NoRiskClusterCount: number;
  /** 已经检查集群数 */
  CheckedClusterCount: number;
  /** 自动检查集群数 */
  AutoCheckClusterCount: number;
  /** 手动检查集群数 */
  ManualCheckClusterCount: number;
  /** 检查失败集群数 */
  FailedClusterCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeComplianceAssetDetailInfoRequest {
  /** 客户资产ID。 */
  CustomerAssetId: number;
}

declare interface DescribeComplianceAssetDetailInfoResponse {
  /** 某资产的详情。 */
  AssetDetailInfo: ComplianceAssetDetailInfo;
  /** 当资产为容器时，返回此字段。 */
  ContainerDetailInfo: ComplianceContainerDetailInfo | null;
  /** 当资产为镜像时，返回此字段。 */
  ImageDetailInfo: ComplianceImageDetailInfo | null;
  /** 当资产为主机时，返回此字段。 */
  HostDetailInfo: ComplianceHostDetailInfo | null;
  /** 当资产为K8S时，返回此字段。 */
  K8SDetailInfo: ComplianceK8SDetailInfo | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeComplianceAssetListRequest {
  /** 资产类型列表。 */
  AssetTypeSet?: string[];
  /** 起始偏移量，默认为0。 */
  Offset?: number;
  /** 返回的数据量，默认为10，最大为100。 */
  Limit?: number;
  /** 查询过滤器 */
  Filters?: ComplianceFilters[];
}

declare interface DescribeComplianceAssetListResponse {
  /** 返回资产的总数。 */
  TotalCount: number;
  /** 返回各类资产的列表。 */
  AssetInfoList: ComplianceAssetInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeComplianceAssetPolicyItemListRequest {
  /** 客户资产的ID。 */
  CustomerAssetId: number;
  /** 起始偏移量，默认为0。 */
  Offset?: number;
  /** 要获取的数据量，默认为10，最大为100。 */
  Limit?: number;
  /** 过滤器列表。Name字段支持RiskLevel */
  Filters?: ComplianceFilters[];
}

declare interface DescribeComplianceAssetPolicyItemListResponse {
  /** 返回检测项的总数。如果用户未启用基线检查，此处返回0。 */
  TotalCount: number;
  /** 返回某个资产下的检测项的列表。 */
  AssetPolicyItemList: ComplianceAssetPolicyItem[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeCompliancePeriodTaskListRequest {
  /** 资产的类型，取值为：ASSET_CONTAINER, 容器ASSET_IMAGE, 镜像ASSET_HOST, 主机ASSET_K8S, K8S资产 */
  AssetType?: string;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 需要返回的数量，默认为10，最大值为100。 */
  Limit?: number;
}

declare interface DescribeCompliancePeriodTaskListResponse {
  /** 定时任务的总量。 */
  TotalCount: number;
  /** 定时任务信息的列表 */
  PeriodTaskSet: CompliancePeriodTask[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeCompliancePolicyItemAffectedAssetListRequest {
  /** DescribeComplianceTaskPolicyItemSummaryList返回的CustomerPolicyItemId，表示检测项的ID。 */
  CustomerPolicyItemId: number;
  /** 起始偏移量，默认为0。 */
  Offset?: number;
  /** 需要返回的数量，默认为10，最大值为100。 */
  Limit?: number;
  /** 过滤条件。Name - StringName 可取值：NodeName, CheckResult */
  Filters?: ComplianceFilters[];
}

declare interface DescribeCompliancePolicyItemAffectedAssetListResponse {
  /** 返回各检测项所影响的资产的列表。 */
  AffectedAssetList: ComplianceAffectedAsset[];
  /** 检测项影响的资产的总数。 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeCompliancePolicyItemAffectedSummaryRequest {
  /** DescribeComplianceTaskPolicyItemSummaryList返回的CustomerPolicyItemId，表示检测项的ID。 */
  CustomerPolicyItemId: number;
}

declare interface DescribeCompliancePolicyItemAffectedSummaryResponse {
  /** 返回各检测项影响的资产的汇总信息。 */
  PolicyItemSummary: CompliancePolicyItemSummary;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeComplianceScanFailedAssetListRequest {
  /** 资产类型列表。ASSET_CONTAINER, 容器ASSET_IMAGE, 镜像ASSET_HOST, 主机ASSET_K8S, K8S资产 */
  AssetTypeSet?: string[];
  /** 起始偏移量，默认为0。 */
  Offset?: number;
  /** 返回的数据量，默认为10，最大为100。 */
  Limit?: number;
  /** 查询过滤器 */
  Filters?: ComplianceFilters[];
}

declare interface DescribeComplianceScanFailedAssetListResponse {
  /** 返回检测失败的资产的总数。 */
  TotalCount: number;
  /** 返回各类检测失败的资产的汇总信息的列表。 */
  ScanFailedAssetList: ComplianceScanFailedAsset[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeComplianceTaskAssetSummaryRequest {
  /** 资产类型列表。ASSET_CONTAINER, 容器ASSET_IMAGE, 镜像ASSET_HOST, 主机ASSET_K8S, K8S资产 */
  AssetTypeSet: string[];
}

declare interface DescribeComplianceTaskAssetSummaryResponse {
  /** 返回用户的状态，USER_UNINIT: 用户未初始化。USER_INITIALIZING，表示用户正在初始化环境。USER_NORMAL: 正常状态。 */
  Status: string;
  /** 返回各类资产的汇总信息的列表。 */
  AssetSummaryList: ComplianceAssetSummary[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeComplianceTaskPolicyItemSummaryListRequest {
  /** 资产类型。仅查询与指定资产类型相关的检测项。ASSET_CONTAINER, 容器ASSET_IMAGE, 镜像ASSET_HOST, 主机ASSET_K8S, K8S资产 */
  AssetType?: string;
  /** 起始偏移量，默认为0。 */
  Offset?: number;
  /** 需要返回的数量，默认为10，最大值为100。 */
  Limit?: number;
  /** 过滤条件。Name - StringName 可取值：ItemType, StandardId, RiskLevel。当为K8S资产时，还可取ClusterName。 */
  Filters?: ComplianceFilters[];
}

declare interface DescribeComplianceTaskPolicyItemSummaryListResponse {
  /** 返回最近一次合规检查任务的ID。这个任务为本次所展示数据的来源。 */
  TaskId: number | null;
  /** 返回检测项的总数。 */
  TotalCount: number;
  /** 返回各检测项对应的汇总信息的列表。 */
  PolicyItemSummaryList: CompliancePolicyItemSummary[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeComplianceWhitelistItemListRequest {
  /** 起始偏移量，默认为0。 */
  Offset?: number;
  /** 要获取的数量，默认为10，最大为100。 */
  Limit?: number;
  /** 资产类型列表。 */
  AssetTypeSet?: string[];
  /** 查询过滤器 */
  Filters?: ComplianceFilters[];
  /** 排序字段 */
  By?: string;
  /** 排序方式 desc asc */
  Order?: string;
}

declare interface DescribeComplianceWhitelistItemListResponse {
  /** 白名单项的列表。 */
  WhitelistItemSet: ComplianceWhitelistItem[];
  /** 白名单项的总数。 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeContainerAssetSummaryRequest {
}

declare interface DescribeContainerAssetSummaryResponse {
  /** 容器总数 */
  ContainerTotalCnt: number;
  /** 正在运行容器数量 */
  ContainerRunningCnt: number;
  /** 暂停运行容器数量 */
  ContainerPauseCnt: number;
  /** 停止运行容器数量 */
  ContainerStopped: number;
  /** 本地镜像数量 */
  ImageCnt: number;
  /** 主机节点数量 */
  HostCnt: number;
  /** 主机正在运行节点数量 */
  HostRunningCnt: number;
  /** 主机离线节点数量 */
  HostOfflineCnt: number;
  /** 镜像仓库数量 */
  ImageRegistryCnt: number;
  /** 镜像总数 */
  ImageTotalCnt: number;
  /** 主机未安装agent数量 */
  HostUnInstallCnt: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeContainerSecEventSummaryRequest {
}

declare interface DescribeContainerSecEventSummaryResponse {
  /** 未处理逃逸事件 */
  UnhandledEscapeCnt: number;
  /** 未处理反弹shell事件 */
  UnhandledReverseShellCnt: number;
  /** 未处理高危系统调用 */
  UnhandledRiskSyscallCnt: number;
  /** 未处理异常进程 */
  UnhandledAbnormalProcessCnt: number;
  /** 未处理文件篡改 */
  UnhandledFileCnt: number;
  /** 未处理木马事件 */
  UnhandledVirusEventCnt: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeEscapeEventDetailRequest {
  /** 事件唯一id */
  EventId: string;
}

declare interface DescribeEscapeEventDetailResponse {
  /** 事件基本信息 */
  EventBaseInfo: RunTimeEventBaseInfo;
  /** 进程信息 */
  ProcessInfo: ProcessDetailInfo;
  /** 事件描述 */
  EventDetail: EscapeEventDescription;
  /** 父进程信息 */
  ParentProcessInfo: ProcessBaseInfo;
  /** 祖先进程信息 */
  AncestorProcessInfo: ProcessBaseInfo | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeEscapeEventInfoRequest {
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤参数,Status：EVENT_UNDEAL:未处理，EVENT_DEALED:已处理，EVENT_INGNORE:忽略 */
  Filters?: RunTimeFilters[];
  /** 升序降序,asc desc */
  Order?: string;
  /** 排序字段 */
  By?: string;
}

declare interface DescribeEscapeEventInfoResponse {
  /** 逃逸事件数组 */
  EventSet: EscapeEventInfo[];
  /** 事件总数量 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeEscapeEventsExportRequest {
  /** 导出字段 */
  ExportField: string[];
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤参数,"Filters":[{"Name":"Status","Values":["2"]}] */
  Filters?: RunTimeFilters[];
  /** 升序降序,asc desc */
  Order?: string;
  /** 排序字段 */
  By?: string;
}

declare interface DescribeEscapeEventsExportResponse {
  /** execle下载地址 */
  DownloadUrl: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeEscapeRuleInfoRequest {
}

declare interface DescribeEscapeRuleInfoResponse {
  /** 规则信息 */
  RuleSet: EscapeRule[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeEscapeSafeStateRequest {
}

declare interface DescribeEscapeSafeStateResponse {
  /** Unsafe：存在风险，Safe：暂无风险,UnKnown:未知风险 */
  IsSafe: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeExportJobResultRequest {
  /** CreateExportComplianceStatusListJob返回的JobId字段的值 */
  JobId: string;
}

declare interface DescribeExportJobResultResponse {
  /** 导出的状态。取值为, SUCCESS:成功、FAILURE:失败，RUNNING: 进行中。 */
  ExportStatus: string;
  /** 返回下载URL */
  DownloadURL: string | null;
  /** 当ExportStatus为RUNNING时，返回导出进度。0~100范围的浮点数。 */
  ExportProgress: number | null;
  /** 失败原因 */
  FailureMsg: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeImageAuthorizedInfoRequest {
}

declare interface DescribeImageAuthorizedInfoResponse {
  /** 总共有效的镜像授权数 */
  TotalAuthorizedCnt: number;
  /** 已使用镜像授权数 */
  UsedAuthorizedCnt: number;
  /** 已开启扫描镜像数 */
  ScannedImageCnt: number;
  /** 未开启扫描镜像数 */
  NotScannedImageCnt: number;
  /** 本地未开启扫描镜像数 */
  NotScannedLocalImageCnt: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeImageRegistryTimingScanTaskRequest {
}

declare interface DescribeImageRegistryTimingScanTaskResponse {
  /** 定时扫描开关 */
  Enable: boolean | null;
  /** 定时任务扫描时间 */
  ScanTime: string;
  /** 定时扫描间隔 */
  ScanPeriod: number;
  /** 扫描类型数组 */
  ScanType: string[] | null;
  /** 扫描全部镜像 */
  All: boolean;
  /** 自定义扫描镜像 */
  Images: ImageInfo[] | null;
  /** 自动以扫描镜像Id */
  Id: number[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeImageRiskSummaryRequest {
}

declare interface DescribeImageRiskSummaryResponse {
  /** 安全漏洞 */
  VulnerabilityCnt: RunTimeRiskInfo[];
  /** 木马病毒 */
  MalwareVirusCnt: RunTimeRiskInfo[];
  /** 敏感信息 */
  RiskCnt: RunTimeRiskInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeImageRiskTendencyRequest {
  /** 开始时间 */
  StartTime: string;
  /** 结束时间 */
  EndTime: string;
}

declare interface DescribeImageRiskTendencyResponse {
  /** 本地镜像新增风险趋势信息列表 */
  ImageRiskTendencySet: ImageRiskTendencyInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeImageSimpleListRequest {
  /** IsAuthorized 是否已经授权, 0:否 1:是 无:全部 */
  Filters?: RunTimeFilters[];
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 排序方式 */
  Order?: string;
  /** 排序字段 */
  By?: string;
}

declare interface DescribeImageSimpleListResponse {
  /** 镜像列表 */
  ImageList: ImageSimpleInfo[];
  /** 镜像数 */
  ImageCnt: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribePostPayDetailRequest {
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
}

declare interface DescribePostPayDetailResponse {
  /** 弹性计费扣费详情 */
  SoftQuotaDayDetail: SoftQuotaDayInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeProVersionInfoRequest {
}

declare interface DescribeProVersionInfoResponse {
  /** 专业版开始时间，补充购买时才不为空 */
  StartTime: string | null;
  /** 专业版结束时间，补充购买时才不为空 */
  EndTime: string | null;
  /** 需购买的机器核数 */
  CoresCnt: number;
  /** 弹性计费上限 */
  MaxPostPayCoresCnt: number;
  /** 资源ID */
  ResourceId: string | null;
  /** 购买状态待购: Pending已购: Normal隔离: Isolate */
  BuyStatus: string;
  /** 是否曾经购买过(false:未曾 true:曾经购买过) */
  IsPurchased: boolean;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribePurchaseStateInfoRequest {
}

declare interface DescribePurchaseStateInfoResponse {
  /** 0：可申请试用可购买；1：只可购买(含试用审核不通过和试用过期)；2：试用生效中；3：专业版生效中；4：专业版过期 */
  State: number;
  /** 总核数 */
  CoresCnt: number | null;
  /** 已购买核数 */
  AuthorizedCoresCnt: number | null;
  /** 镜像数 */
  ImageCnt: number | null;
  /** 已授权镜像数 */
  AuthorizedImageCnt: number | null;
  /** 已购买镜像授权数 */
  PurchasedAuthorizedCnt: number | null;
  /** 过期时间 */
  ExpirationTime: string | null;
  /** 0表示默认状态(用户未设置，即初始状态)， 1表示自动续费，2表示明确不自动续费(用户设置) */
  AutomaticRenewal: number | null;
  /** 试用期间赠送镜像授权数，可能会过期 */
  GivenAuthorizedCnt: number | null;
  /** 起始时间 */
  BeginTime: string | null;
  /** 子状态(具体意义依据State字段而定)State为4时，有效值为: ISOLATE(隔离) DESTROED(已销毁) */
  SubState: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeRefreshTaskRequest {
  /** 任务ID */
  TaskId: number;
}

declare interface DescribeRefreshTaskResponse {
  /** 刷新任务状态，可能为：Task_New,Task_Running,Task_Finish,Task_Error,Task_NoExist */
  TaskStatus: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeReverseShellDetailRequest {
  /** 事件唯一id */
  EventId: string;
}

declare interface DescribeReverseShellDetailResponse {
  /** 事件基本信息 */
  EventBaseInfo: RunTimeEventBaseInfo;
  /** 进程信息 */
  ProcessInfo: ProcessDetailInfo;
  /** 父进程信息 */
  ParentProcessInfo: ProcessDetailBaseInfo;
  /** 事件描述 */
  EventDetail: ReverseShellEventDescription;
  /** 祖先进程信息 */
  AncestorProcessInfo: ProcessBaseInfo | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeReverseShellEventsExportRequest {
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤参数,"Filters":[{"Name":"Status","Values":["2"]}] */
  Filters?: RunTimeFilters[];
  /** 升序降序,asc desc */
  Order?: string;
  /** 排序字段 */
  By?: string;
  /** 导出字段 */
  ExportField?: string[];
}

declare interface DescribeReverseShellEventsExportResponse {
  /** execle下载地址 */
  DownloadUrl: string | null;
  /** 任务ID */
  JobId: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeReverseShellEventsRequest {
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤参数,"Filters":[{"Name":"Status","Values":["2"]}] */
  Filters?: RunTimeFilters[];
  /** 升序降序,asc desc */
  Order?: string;
  /** 排序字段 */
  By?: string;
}

declare interface DescribeReverseShellEventsResponse {
  /** 事件总数量 */
  TotalCount: number;
  /** 反弹shell数组 */
  EventSet: ReverseShellEventInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeReverseShellWhiteListDetailRequest {
  /** 白名单id */
  WhiteListId: string;
}

declare interface DescribeReverseShellWhiteListDetailResponse {
  /** 事件基本信息 */
  WhiteListDetailInfo: ReverseShellWhiteListInfo;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeReverseShellWhiteListsRequest {
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤参数,"Filters":[{"Name":"Status","Values":["2"]}] */
  Filters?: RunTimeFilters[];
  /** 升序降序,asc desc */
  Order?: string;
  /** 排序字段 */
  By?: string;
}

declare interface DescribeReverseShellWhiteListsResponse {
  /** 事件总数量 */
  TotalCount: number;
  /** 白名单信息列表 */
  WhiteListSet: ReverseShellWhiteListBaseInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeRiskListRequest {
  /** 要查询的集群ID，如果不指定，则查询用户所有的风险项 */
  ClusterId?: string;
  /** 偏移量 */
  Offset?: number;
  /** 每次查询的最大记录数量 */
  Limit?: number;
  /** Name - StringName 可取值：RiskLevel风险等级, RiskTarget检查对象，风险对象,RiskType风险类别,RiskAttribute检测项所属的风险类型,Name */
  Filters?: ComplianceFilters[];
  /** 排序字段 */
  By?: string;
  /** 排序方式 asc,desc */
  Order?: string;
}

declare interface DescribeRiskListResponse {
  /** 风险详情数组 */
  ClusterRiskItems: ClusterRiskItem[];
  /** 风险项的总数 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeRiskSyscallDetailRequest {
  /** 事件唯一id */
  EventId: string;
}

declare interface DescribeRiskSyscallDetailResponse {
  /** 事件基本信息 */
  EventBaseInfo: RunTimeEventBaseInfo;
  /** 进程信息 */
  ProcessInfo: ProcessDetailInfo;
  /** 父进程信息 */
  ParentProcessInfo: ProcessDetailBaseInfo;
  /** 事件描述 */
  EventDetail: RiskSyscallEventDescription;
  /** 祖先进程信息 */
  AncestorProcessInfo: ProcessBaseInfo | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeRiskSyscallEventsExportRequest {
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤参数,"Filters":[{"Name":"Status","Values":["2"]}] */
  Filters?: RunTimeFilters[];
  /** 升序降序,asc desc */
  Order?: string;
  /** 排序字段 */
  By?: string;
  /** 导出字段 */
  ExportField?: string[];
}

declare interface DescribeRiskSyscallEventsExportResponse {
  /** Excel下载地址 */
  DownloadUrl: string | null;
  /** 任务Id */
  JobId: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeRiskSyscallEventsRequest {
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤参数,"Filters":[{"Name":"Status","Values":["2"]}] */
  Filters?: RunTimeFilters[];
  /** 升序降序,asc desc */
  Order?: string;
  /** 排序字段 */
  By?: string;
}

declare interface DescribeRiskSyscallEventsResponse {
  /** 事件总数量 */
  TotalCount: number;
  /** 高危系统调用数组 */
  EventSet: RiskSyscallEventInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeRiskSyscallNamesRequest {
}

declare interface DescribeRiskSyscallNamesResponse {
  /** 事件总数量 */
  TotalCount: number;
  /** 系统调用名称列表 */
  SyscallNames: string[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeRiskSyscallWhiteListDetailRequest {
  /** 白名单id */
  WhiteListId: string;
}

declare interface DescribeRiskSyscallWhiteListDetailResponse {
  /** 白名单基本信息 */
  WhiteListDetailInfo: RiskSyscallWhiteListInfo;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeRiskSyscallWhiteListsRequest {
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤参数,"Filters":[{"Name":"Status","Values":["2"]}] */
  Filters?: RunTimeFilters[];
  /** 升序降序,asc desc */
  Order?: string;
  /** 排序字段 */
  By?: string;
}

declare interface DescribeRiskSyscallWhiteListsResponse {
  /** 事件总数量 */
  TotalCount: number;
  /** 白名单信息列表 */
  WhiteListSet: RiskSyscallWhiteListBaseInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeSecEventsTendencyRequest {
  /** 开始时间 */
  StartTime: string;
  /** 结束时间 */
  EndTime: string;
}

declare interface DescribeSecEventsTendencyResponse {
  /** 运行时安全事件趋势信息列表 */
  EventTendencySet: SecTendencyEventInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeTaskResultSummaryRequest {
}

declare interface DescribeTaskResultSummaryResponse {
  /** 严重风险影响的节点数量,返回7天数据 */
  SeriousRiskNodeCount: number[];
  /** 高风险影响的节点的数量,返回7天数据 */
  HighRiskNodeCount: number[];
  /** 中风险检查项的节点数量,返回7天数据 */
  MiddleRiskNodeCount: number[];
  /** 提示风险检查项的节点数量,返回7天数据 */
  HintRiskNodeCount: number[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeUnfinishRefreshTaskRequest {
}

declare interface DescribeUnfinishRefreshTaskResponse {
  /** 返回最近的一次任务ID */
  TaskId: number;
  /** 任务状态，为Task_New,Task_Running,Task_Finish,Task_Error,Task_NoExist.Task_New,Task_Running表示有任务存在，不允许新下发 */
  TaskStatus: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeUserClusterRequest {
  /** 偏移量 */
  Offset?: number;
  /** 每次查询的最大记录数量 */
  Limit?: number;
  /** Name - StringName 可取值：ClusterName,ClusterId,ClusterType,Region,ClusterCheckMode,ClusterAutoCheck */
  Filters?: ComplianceFilters[];
  /** 排序字段 */
  By?: string;
  /** 排序方式 asc,desc */
  Order?: string;
}

declare interface DescribeUserClusterResponse {
  /** 集群总数 */
  TotalCount: number;
  /** 集群的详细信息 */
  ClusterInfoList: ClusterInfoItem[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeValueAddedSrvInfoRequest {
}

declare interface DescribeValueAddedSrvInfoResponse {
  /** 仓库镜像未授权数量 */
  RegistryImageCnt: number;
  /** 本地镜像未授权数量 */
  LocalImageCnt: number;
  /** 未使用的镜像安全扫描授权数 */
  UnusedAuthorizedCnt: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeVirusDetailRequest {
  /** 木马文件id */
  Id: string;
}

declare interface DescribeVirusDetailResponse {
  /** 镜像ID */
  ImageId: string | null;
  /** 镜像名称 */
  ImageName: string | null;
  /** 创建时间 */
  CreateTime: string | null;
  /** 木马文件大小 */
  Size: number | null;
  /** 木马文件路径 */
  FilePath: string | null;
  /** 最近生成时间 */
  ModifyTime: string | null;
  /** 病毒名称 */
  VirusName: string | null;
  /** 风险等级 RISK_CRITICAL, RISK_HIGH, RISK_MEDIUM, RISK_LOW, RISK_NOTICE。 */
  RiskLevel: string | null;
  /** 容器名称 */
  ContainerName: string | null;
  /** 容器id */
  ContainerId: string | null;
  /** 主机名称 */
  HostName: string | null;
  /** 主机id */
  HostId: string | null;
  /** 进程名称 */
  ProcessName: string | null;
  /** 进程路径 */
  ProcessPath: string | null;
  /** 进程md5 */
  ProcessMd5: string | null;
  /** 进程id */
  ProcessId: number | null;
  /** 进程参数 */
  ProcessArgv: string | null;
  /** 进程链 */
  ProcessChan: string | null;
  /** 进程组 */
  ProcessAccountGroup: string | null;
  /** 进程启动用户 */
  ProcessStartAccount: string | null;
  /** 进程文件权限 */
  ProcessFileAuthority: string | null;
  /** 来源：0：一键扫描， 1：定时扫描 2：实时监控 */
  SourceType: number | null;
  /** 集群名称 */
  PodName: string | null;
  /** 标签 */
  Tags: string[] | null;
  /** 事件描述 */
  HarmDescribe: string | null;
  /** 建议方案 */
  SuggestScheme: string | null;
  /** 备注 */
  Mark: string | null;
  /** 风险文件名称 */
  FileName: string | null;
  /** 文件MD5 */
  FileMd5: string | null;
  /** 事件类型 */
  EventType: string | null;
  /** DEAL_NONE:文件待处理DEAL_IGNORE:已经忽略DEAL_ADD_WHITELIST:加白DEAL_DEL:文件已经删除DEAL_ISOLATE:已经隔离DEAL_ISOLATING:隔离中DEAL_ISOLATE_FAILED:隔离失败DEAL_RECOVERING:恢复中DEAL_RECOVER_FAILED: 恢复失败 */
  Status: string | null;
  /** 失败子状态:FILE_NOT_FOUND:文件不存在FILE_ABNORMAL:文件异常FILE_ABNORMAL_DEAL_RECOVER:恢复文件时，文件异常BACKUP_FILE_NOT_FOUND:备份文件不存在CONTAINER_NOT_FOUND_DEAL_ISOLATE:隔离时，容器不存在CONTAINER_NOT_FOUND_DEAL_RECOVER:恢复时，容器不存在 */
  SubStatus: string | null;
  /** 内网ip */
  HostIP: string | null;
  /** 外网ip */
  ClientIP: string | null;
  /** 父进程启动用户 */
  PProcessStartUser: string | null;
  /** 父进程用户组 */
  PProcessUserGroup: string | null;
  /** 父进程路径 */
  PProcessPath: string | null;
  /** 父进程命令行参数 */
  PProcessParam: string | null;
  /** 祖先进程启动用户 */
  AncestorProcessStartUser: string | null;
  /** 祖先进程用户组 */
  AncestorProcessUserGroup: string | null;
  /** 祖先进程路径 */
  AncestorProcessPath: string | null;
  /** 祖先进程命令行参数 */
  AncestorProcessParam: string | null;
  /** 事件最后一次处理的时间 */
  OperationTime: string | null;
  /** 容器隔离状态 */
  ContainerNetStatus: string | null;
  /** 容器隔离子状态 */
  ContainerNetSubStatus: string | null;
  /** 容器隔离操作来源 */
  ContainerIsolateOperationSrc: string | null;
  /** 检测平台1: 云查杀引擎2: tav3: binaryAi4: 异常行为5: 威胁情报 */
  CheckPlatform: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeVirusListRequest {
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤条件。FileName - String - 是否必填：否 - 文件名称FilePath - String - 是否必填：否 - 文件路径VirusName - String - 是否必填：否 - 病毒名称ContainerName- String - 是否必填：是 - 容器名称ContainerId- string - 是否必填：否 - 容器idImageName- string - 是否必填：否 - 镜像名称ImageId- string - 是否必填：否 - 镜像idIsRealTime- int - 是否必填：否 - 过滤是否实时监控数据TaskId- string - 是否必填：否 - 任务IDContainerNetStatus - String -是否必填: 否 - 容器网络状态筛选 NORMAL ISOLATED ISOLATING RESTORING RESTORE_FAILEDTimeRange - string -是否必填: 否 - 时间范围筛选 ["2022-03-31 16:55:00", "2022-03-31 17:00:00"]ContainerStatus - string -是否必填: 否 - 容器状态 RUNNING PAUSED STOPPED CREATED DESTROYED RESTARTING REMOVINGAutoIsolateMode - string -是否必填: 否 - 隔离方式 MANUAL AUTOMD5 - string -是否必填: 否 - md5 */
  Filters?: RunTimeFilters[];
  /** 排序方式 */
  Order?: string;
  /** 排序字段 */
  By?: string;
}

declare interface DescribeVirusListResponse {
  /** 木马列表 */
  List: VirusInfo[];
  /** 总数量 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeVirusMonitorSettingRequest {
}

declare interface DescribeVirusMonitorSettingResponse {
  /** 是否开启实时监控 */
  EnableScan: boolean;
  /** 扫描全部路径 */
  ScanPathAll: boolean | null;
  /** 当ScanPathAll为true 生效 0扫描以下路径 1、扫描除以下路径 */
  ScanPathType: number | null;
  /** 自选排除或扫描的地址 */
  ScanPath: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeVirusScanSettingRequest {
}

declare interface DescribeVirusScanSettingResponse {
  /** 是否开启定期扫描 */
  EnableScan: boolean;
  /** 检测周期每隔多少天 */
  Cycle: number;
  /** 扫描开始时间 */
  BeginScanAt: string;
  /** 扫描全部路径 */
  ScanPathAll: boolean;
  /** 当ScanPathAll为true 生效 0扫描以下路径 1、扫描除以下路径 */
  ScanPathType: number;
  /** 超时时长，单位小时 */
  Timeout: number;
  /** 扫描范围0容器1主机节点 */
  ScanRangeType: number;
  /** true 全选，false 自选 */
  ScanRangeAll: boolean;
  /** 自选扫描范围的容器id或者主机id 根据ScanRangeType决定 */
  ScanIds: string[];
  /** 自选排除或扫描的地址 */
  ScanPath: string[];
  /** 一键检测的超时设置 */
  ClickTimeout: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeVirusScanTaskStatusRequest {
  /** 任务id */
  TaskID?: string;
}

declare interface DescribeVirusScanTaskStatusResponse {
  /** 查杀容器个数 */
  ContainerTotal: number;
  /** 风险容器个数 */
  RiskContainerCnt: number;
  /** 扫描状态 任务状态:SCAN_NONE:无， SCAN_SCANNING:正在扫描中，SCAN_FINISH：扫描完成， SCAN_TIMEOUT：扫描超时SCAN_CANCELING: 取消中SCAN_CANCELED:已取消 */
  Status: string;
  /** 扫描进度 I */
  Schedule: number;
  /** 已经扫描了的容器个数 */
  ContainerScanCnt: number;
  /** 风险个数 */
  RiskCnt: number;
  /** 剩余扫描时间 */
  LeftSeconds: number;
  /** 扫描开始时间 */
  StartTime: string;
  /** 扫描结束时间 */
  EndTime: string;
  /** 扫描类型，"CYCLE"：周期扫描， "MANUAL"：手动扫描 */
  ScanType: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeVirusScanTimeoutSettingRequest {
  /** 设置类型0一键检测，1定时检测 */
  ScanType: number;
}

declare interface DescribeVirusScanTimeoutSettingResponse {
  /** 超时时长单位小时 */
  Timeout: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeVirusSummaryRequest {
}

declare interface DescribeVirusSummaryResponse {
  /** 最近的一次扫描任务id */
  TaskId: string;
  /** 木马影响容器个数 */
  RiskContainerCnt: number | null;
  /** 待处理风险个数 */
  RiskCnt: number | null;
  /** 病毒库更新时间 */
  VirusDataBaseModifyTime: string | null;
  /** 木马影响容器个数较昨日增长 */
  RiskContainerIncrease: number | null;
  /** 待处理风险个数较昨日增长 */
  RiskIncrease: number | null;
  /** 隔离事件个数较昨日新增 */
  IsolateIncrease: number | null;
  /** 隔离事件总数 */
  IsolateCnt: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeVirusTaskListRequest {
  /** 任务id */
  TaskId: string;
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤条件。ContainerName - String - 是否必填：否 - 容器名称ContainerId - String - 是否必填：否 - 容器idHostname - String - 是否必填：否 - 主机名称HostIp- String - 是否必填：否 - 主机IPImageId- String - 是否必填：否 - 镜像IDImageName- String - 是否必填：否 - 镜像名称Status- String - 是否必填：否 - 状态 */
  Filters?: RunTimeFilters[];
  /** 排序字段 */
  By?: string;
  /** 排序方式 */
  Order?: string;
}

declare interface DescribeVirusTaskListResponse {
  /** 文件查杀列表 */
  List: VirusTaskInfo[];
  /** 总数量(容器任务数量) */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeWarningRulesRequest {
}

declare interface DescribeWarningRulesResponse {
  /** 告警策略列表 */
  WarningRules: WarningRule[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ExportVirusListRequest {
  /** 过滤条件。FileName - String - 是否必填：否 - 文件名称FilePath - String - 是否必填：否 - 文件路径VirusName - String - 是否必填：否 - 病毒名称ContainerName- String - 是否必填：是 - 容器名称ContainerId- string - 是否必填：否 - 容器idImageName- string - 是否必填：否 - 镜像名称ImageId- string - 是否必填：否 - 镜像idIsRealTime- int - 是否必填：否 - 过滤是否实时监控数据TaskId- string - 是否必填：否 - 任务IDTimeRange - string -是否必填: 否 - 时间范围筛选 ["2022-03-31 16:55:00", "2022-03-31 17:00:00"]ContainerNetStatus - String -是否必填: 否 - 容器网络状态筛选 NORMAL ISOLATED ISOLATING RESTORING RESTORE_FAILEDContainerStatus - string -是否必填: 否 - 容器状态 RUNNING PAUSED STOPPED CREATED DESTROYED RESTARTING REMOVINGAutoIsolateMode - string -是否必填: 否 - 隔离方式 MANUAL AUTOMD5 - string -是否必填: 否 - md5 */
  Filters?: RunTimeFilters[];
  /** 排序方式 */
  Order?: string;
  /** 排序字段 */
  By?: string;
  /** 导出字段 */
  ExportField?: string[];
}

declare interface ExportVirusListResponse {
  /** 导出任务ID，前端拿着任务ID查询任务进度 */
  JobId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface InitializeUserComplianceEnvironmentRequest {
}

declare interface InitializeUserComplianceEnvironmentResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyAbnormalProcessRuleStatusRequest {
  /** 策略的ids */
  RuleIdSet: string[];
  /** 策略开关，true开启，false关闭 */
  IsEnable: boolean;
}

declare interface ModifyAbnormalProcessRuleStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyAbnormalProcessStatusRequest {
  /** 处理事件ids */
  EventIdSet: string[];
  /** 标记事件的状态， EVENT_DEALED:事件处理 EVENT_INGNORE"：事件忽略 EVENT_DEL:事件删除 EVENT_ADD_WHITE:事件加白 */
  Status: string;
  /** 事件备注 */
  Remark?: string;
}

declare interface ModifyAbnormalProcessStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyAccessControlRuleStatusRequest {
  /** 策略的ids */
  RuleIdSet: string[];
  /** 策略开关，true:代表开启， false代表关闭 */
  IsEnable: boolean;
}

declare interface ModifyAccessControlRuleStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyAccessControlStatusRequest {
  /** 处理事件ids */
  EventIdSet: string[];
  /** 标记事件的状态， EVENT_DEALED:事件已经处理 EVENT_INGNORE：事件忽略 EVENT_DEL:事件删除 EVENT_ADD_WHITE:事件加白 */
  Status: string;
  /** 备注事件信息 */
  Remark?: string;
}

declare interface ModifyAccessControlStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyAssetImageRegistryScanStopOneKeyRequest {
  /** 是否扫描全部镜像 */
  All?: boolean;
  /** 扫描的镜像列表 */
  Images?: ImageInfo[];
  /** 扫描的镜像列表Id */
  Id?: number[];
}

declare interface ModifyAssetImageRegistryScanStopOneKeyResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyAssetImageRegistryScanStopRequest {
  /** 是否扫描全部镜像 */
  All?: boolean;
  /** 扫描的镜像列表 */
  Images?: ImageInfo[];
  /** 扫描的镜像列表 */
  Id?: number[];
  /** 过滤条件 */
  Filters?: AssetFilters[];
  /** 不要扫描的镜像列表，与Filters配合使用 */
  ExcludeImageList?: number[];
  /** 是否仅扫描各repository最新版本的镜像 */
  OnlyScanLatest?: boolean;
}

declare interface ModifyAssetImageRegistryScanStopResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyAssetImageScanStopRequest {
  /** 任务id；任务id，镜像id和根据过滤条件筛选三选一。 */
  TaskID?: string;
  /** 镜像id；任务id，镜像id和根据过滤条件筛选三选一。 */
  Images?: string[];
  /** 根据过滤条件筛选出镜像；任务id，镜像id和根据过滤条件筛选三选一。 */
  Filters?: AssetFilters[];
  /** 根据过滤条件筛选出镜像，再排除个别镜像 */
  ExcludeImageIds?: string;
}

declare interface ModifyAssetImageScanStopResponse {
  /** 停止状态 */
  Status: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyAssetRequest {
  /** 全部同步 */
  All?: boolean;
  /** 要同步的主机列表 两个参数必选一个 All优先 */
  Hosts?: string[];
}

declare interface ModifyAssetResponse {
  /** 同步任务发送结果 */
  Status: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyCompliancePeriodTaskRequest {
  /** 要修改的定时任务的ID，由DescribeCompliancePeriodTaskList接口返回。 */
  PeriodTaskId: number;
  /** 定时任务的周期规则。不填时，不修改。 */
  PeriodRule?: CompliancePeriodTaskRule;
  /** 设置合规标准。不填时，不修改。 */
  StandardSettings?: ComplianceBenchmarkStandardEnable[];
}

declare interface ModifyCompliancePeriodTaskResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyEscapeEventStatusRequest {
  /** 处理事件ids */
  EventIdSet: string[];
  /** 标记事件的状态：EVENT_UNDEAL:未处理（取消忽略），EVENT_DEALED:已处理，EVENT_IGNORE:忽略，EVENT_DELETE：已删除EVENT_ADD_WHITE：加白 */
  Status: string;
  /** 备注 */
  Remark?: string;
  /** 加白镜像ID数组 */
  ImageIDs?: string[];
  /** 加白事件类型 ESCAPE_CGROUPS：利用cgroup机制逃逸 ESCAPE_TAMPER_SENSITIVE_FILE：篡改敏感文件逃逸 ESCAPE_DOCKER_API：访问Docker API接口逃逸 ESCAPE_VUL_OCCURRED：逃逸漏洞利用 MOUNT_SENSITIVE_PTAH：敏感路径挂载 PRIVILEGE_CONTAINER_START：特权容器 PRIVILEGE：程序提权逃逸 */
  EventType?: string[];
}

declare interface ModifyEscapeEventStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyEscapeRuleRequest {
  /** 需要修改的数组 */
  RuleSet: EscapeRuleEnabled[];
}

declare interface ModifyEscapeRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyReverseShellStatusRequest {
  /** 处理事件ids */
  EventIdSet: string[];
  /** 标记事件的状态， EVENT_DEALED:事件处理 EVENT_INGNORE"：事件忽略 EVENT_DEL:事件删除 EVENT_ADD_WHITE:事件加白 */
  Status: string;
  /** 事件备注 */
  Remark?: string;
}

declare interface ModifyReverseShellStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyRiskSyscallStatusRequest {
  /** 处理事件ids */
  EventIdSet: string[];
  /** 标记事件的状态， EVENT_DEALED:事件处理 EVENT_INGNORE"：事件忽略 EVENT_DEL:事件删除 EVENT_ADD_WHITE:事件加白 */
  Status: string;
  /** 事件备注 */
  Remark?: string;
}

declare interface ModifyRiskSyscallStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyVirusFileStatusRequest {
  /** 处理事件id */
  EventIdSet: string[];
  /** 标记事件的状态， EVENT_DEALED:事件处理 EVENT_INGNORE"：事件忽略 EVENT_DEL:事件删除 EVENT_ADD_WHITE:事件加白 EVENT_PENDING: 事件待处理	EVENT_ISOLATE_CONTAINER: 隔离容器	EVENT_RESOTRE_CONTAINER: 恢复容器 */
  Status: string;
  /** 事件备注 */
  Remark?: string;
  /** 是否后续自动隔离相同MD5文件 */
  AutoIsolate?: boolean;
}

declare interface ModifyVirusFileStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyVirusMonitorSettingRequest {
  /** 是否开启定期扫描 */
  EnableScan: boolean;
  /** 扫描全部路径 */
  ScanPathAll: boolean;
  /** 当ScanPathAll为true 生效 0扫描以下路径 1、扫描除以下路径(扫描范围只能小于等于1) */
  ScanPathType: number;
  /** 自选排除或扫描的地址 */
  ScanPath?: string[];
}

declare interface ModifyVirusMonitorSettingResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyVirusScanSettingRequest {
  /** 是否开启定期扫描 */
  EnableScan: boolean;
  /** 检测周期每隔多少天(1|3|7) */
  Cycle: number;
  /** 扫描开始时间 */
  BeginScanAt: string;
  /** 扫描全部路径(true:全选,false:自选) */
  ScanPathAll: boolean;
  /** 当ScanPathAll为true 生效 0扫描以下路径 1、扫描除以下路径 */
  ScanPathType: number;
  /** 超时时长(5~24h) */
  Timeout: number;
  /** 扫描范围0容器1主机节点 */
  ScanRangeType: number;
  /** true 全选，false 自选 */
  ScanRangeAll: boolean;
  /** 自选扫描范围的容器id或者主机id 根据ScanRangeType决定 */
  ScanIds?: string[];
  /** 扫描路径 */
  ScanPath?: string[];
}

declare interface ModifyVirusScanSettingResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyVirusScanTimeoutSettingRequest {
  /** 超时时长单位小时(5~24h) */
  Timeout: number;
  /** 设置类型0一键检测，1定时检测 */
  ScanType: number;
}

declare interface ModifyVirusScanTimeoutSettingResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface RemoveAssetImageRegistryRegistryDetailRequest {
  /** 仓库唯一id */
  RegistryId: number;
}

declare interface RemoveAssetImageRegistryRegistryDetailResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface RenewImageAuthorizeStateRequest {
  /** 是否全部未授权镜像 */
  AllImages: boolean;
  /** 镜像ids */
  ImageIds?: string[];
}

declare interface RenewImageAuthorizeStateResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ScanComplianceAssetsByPolicyItemRequest {
  /** 指定的检测项的ID */
  CustomerPolicyItemId: number;
  /** 要重新扫描的客户资产项ID的列表。 */
  CustomerAssetIdSet: number[];
}

declare interface ScanComplianceAssetsByPolicyItemResponse {
  /** 返回重新检测任务的ID。 */
  TaskId: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ScanComplianceAssetsRequest {
  /** 要重新扫描的客户资产项ID的列表。 */
  CustomerAssetIdSet: number[];
}

declare interface ScanComplianceAssetsResponse {
  /** 返回重新检测任务的ID。 */
  TaskId: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ScanCompliancePolicyItemsRequest {
  /** 要重新扫描的客户检测项的列表。 */
  CustomerPolicyItemIdSet: number[];
}

declare interface ScanCompliancePolicyItemsResponse {
  /** 返回重新检测任务的ID。 */
  TaskId: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ScanComplianceScanFailedAssetsRequest {
  /** 要重新扫描的客户资产项ID的列表。 */
  CustomerAssetIdSet: number[];
}

declare interface ScanComplianceScanFailedAssetsResponse {
  /** 返回重新检测任务的ID。 */
  TaskId: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface SetCheckModeRequest {
  /** 要设置的集群ID列表 */
  ClusterIds: string[];
  /** 集群检查模式(正常模式"Cluster_Normal"、主动模式"Cluster_Actived"、不设置"Cluster_Unset") */
  ClusterCheckMode?: string;
  /** 0不设置 1打开 2关闭 */
  ClusterAutoCheck?: number;
}

declare interface SetCheckModeResponse {
  /** "Succ"表示设置成功，"Failed"表示设置失败 */
  SetCheckResult: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface StopVirusScanTaskRequest {
  /** 任务ID */
  TaskId: string;
  /** 需要停止的容器id 为空默认停止整个任务 */
  ContainerIds?: string[];
}

declare interface StopVirusScanTaskResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface SyncAssetImageRegistryAssetRequest {
}

declare interface SyncAssetImageRegistryAssetResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UpdateAssetImageRegistryRegistryDetailRequest {
  /** 仓库名 */
  Name: string;
  /** 用户名 */
  Username: string;
  /** 密码 */
  Password: string;
  /** 仓库url */
  Url: string;
  /** 仓库类型，列表：harbor */
  RegistryType: string;
  /** 网络类型，列表：public（公网） */
  NetType: string;
  /** 仓库版本 */
  RegistryVersion?: string;
  /** 区域，列表：default（默认） */
  RegistryRegion?: string;
  /** 限速 */
  SpeedLimit?: number;
  /** 安全模式（证书校验）：0（默认） 非安全模式（跳过证书校验）：1 */
  Insecure?: number;
}

declare interface UpdateAssetImageRegistryRegistryDetailResponse {
  /** 连接错误信息 */
  HealthCheckErr: string | null;
  /** 名称错误信息 */
  NameRepeatErr: string | null;
  /** 仓库唯一id */
  RegistryId: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UpdateImageRegistryTimingScanTaskRequest {
  /** 定时扫描周期 */
  ScanPeriod: number;
  /** 定时扫描开关 */
  Enable: boolean;
  /** 定时扫描的时间 */
  ScanTime: string;
  /** 扫描木马类型数组 */
  ScanType?: string[];
  /** 扫描镜像 */
  Images?: ImageInfo[];
  /** 是否扫描所有 */
  All?: boolean;
  /** 扫描镜像Id */
  Id?: number[];
}

declare interface UpdateImageRegistryTimingScanTaskResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

/** 容器安全服务 */
declare interface Tcss {
  (): Versions;
  /** 新增单个镜像仓库详细信息 */
  AddAssetImageRegistryRegistryDetail(data: AddAssetImageRegistryRegistryDetailRequest, config?: AxiosRequestConfig): AxiosPromise<AddAssetImageRegistryRegistryDetailResponse>;
  /** 安全合规忽略检测项列表 */
  AddCompliancePolicyItemToWhitelist(data: AddCompliancePolicyItemToWhitelistRequest, config?: AxiosRequestConfig): AxiosPromise<AddCompliancePolicyItemToWhitelistResponse>;
  /** 添加编辑异常进程策略 */
  AddEditAbnormalProcessRule(data: AddEditAbnormalProcessRuleRequest, config?: AxiosRequestConfig): AxiosPromise<AddEditAbnormalProcessRuleResponse>;
  /** 添加编辑运行访问控制策略 */
  AddEditAccessControlRule(data: AddEditAccessControlRuleRequest, config?: AxiosRequestConfig): AxiosPromise<AddEditAccessControlRuleResponse>;
  /** 添加编辑反弹shell白名单 */
  AddEditReverseShellWhiteList(data: AddEditReverseShellWhiteListRequest, config?: AxiosRequestConfig): AxiosPromise<AddEditReverseShellWhiteListResponse>;
  /** 添加编辑高危系统调用白名单 */
  AddEditRiskSyscallWhiteList(data: AddEditRiskSyscallWhiteListRequest, config?: AxiosRequestConfig): AxiosPromise<AddEditRiskSyscallWhiteListResponse>;
  /** 添加编辑告警策略 */
  AddEditWarningRules(data: AddEditWarningRulesRequest, config?: AxiosRequestConfig): AxiosPromise<AddEditWarningRulesResponse>;
  /** 检查单个镜像仓库名是否重复 */
  CheckRepeatAssetImageRegistry(data: CheckRepeatAssetImageRegistryRequest, config?: AxiosRequestConfig): AxiosPromise<CheckRepeatAssetImageRegistryResponse>;
  /** 镜像仓库创建镜像扫描任务 */
  CreateAssetImageRegistryScanTask(data: CreateAssetImageRegistryScanTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAssetImageRegistryScanTaskResponse>;
  /** 镜像仓库创建镜像一键扫描任务 */
  CreateAssetImageRegistryScanTaskOneKey(data: CreateAssetImageRegistryScanTaskOneKeyRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAssetImageRegistryScanTaskOneKeyResponse>;
  /** 添加容器安全镜像扫描设置 */
  CreateAssetImageScanSetting(data: CreateAssetImageScanSettingRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAssetImageScanSettingResponse>;
  /** 创建镜像扫描任务 */
  CreateAssetImageScanTask(data: CreateAssetImageScanTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAssetImageScanTaskResponse>;
  /** 安装检查组件 */
  CreateCheckComponent(data: CreateCheckComponentRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCheckComponentResponse>;
  /** 创建集群检查任务 */
  CreateClusterCheckTask(data: CreateClusterCheckTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateClusterCheckTaskResponse>;
  /** 安全合规创建合规检查任务 */
  CreateComplianceTask(data: CreateComplianceTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateComplianceTaskResponse>;
  /** 创建一个导出安全合规信息的任务 */
  CreateExportComplianceStatusListJob(data: CreateExportComplianceStatusListJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreateExportComplianceStatusListJobResponse>;
  /** 创建或者编辑弹性计费上限 */
  CreateOrModifyPostPayCores(data: CreateOrModifyPostPayCoresRequest, config?: AxiosRequestConfig): AxiosPromise<CreateOrModifyPostPayCoresResponse>;
  /** 下发刷新任务 */
  CreateRefreshTask(data?: CreateRefreshTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateRefreshTaskResponse>;
  /** 运行时文件查杀重新检测 */
  CreateVirusScanAgain(data: CreateVirusScanAgainRequest, config?: AxiosRequestConfig): AxiosPromise<CreateVirusScanAgainResponse>;
  /** 运行时文件查杀一键扫描 */
  CreateVirusScanTask(data: CreateVirusScanTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateVirusScanTaskResponse>;
  /** 删除运行时异常进程策略 */
  DeleteAbnormalProcessRules(data: DeleteAbnormalProcessRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAbnormalProcessRulesResponse>;
  /** 删除运行时访问控制策略 */
  DeleteAccessControlRules(data: DeleteAccessControlRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAccessControlRulesResponse>;
  /** 安全合规取消忽略检测项列表 */
  DeleteCompliancePolicyItemFromWhitelist(data: DeleteCompliancePolicyItemFromWhitelistRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCompliancePolicyItemFromWhitelistResponse>;
  /** 删除运行时反弹shell白名单 */
  DeleteReverseShellWhiteLists(data: DeleteReverseShellWhiteListsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteReverseShellWhiteListsResponse>;
  /** 删除运行时高危系统调用白名单 */
  DeleteRiskSyscallWhiteLists(data: DeleteRiskSyscallWhiteListsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRiskSyscallWhiteListsResponse>;
  /** 运行时异常进程事件详细信息 */
  DescribeAbnormalProcessDetail(data: DescribeAbnormalProcessDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAbnormalProcessDetailResponse>;
  /** 运行时异常进程列表 */
  DescribeAbnormalProcessEvents(data: DescribeAbnormalProcessEventsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAbnormalProcessEventsResponse>;
  /** 运行时异常进程列表导出 */
  DescribeAbnormalProcessEventsExport(data: DescribeAbnormalProcessEventsExportRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAbnormalProcessEventsExportResponse>;
  /** 查询运行时异常进程策略详细信息 */
  DescribeAbnormalProcessRuleDetail(data: DescribeAbnormalProcessRuleDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAbnormalProcessRuleDetailResponse>;
  /** 运行时异常进程策略列表 */
  DescribeAbnormalProcessRules(data: DescribeAbnormalProcessRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAbnormalProcessRulesResponse>;
  /** 运行时异常进程策略列表导出 */
  DescribeAbnormalProcessRulesExport(data: DescribeAbnormalProcessRulesExportRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAbnormalProcessRulesExportResponse>;
  /** 运行时访问控制事件详细信息 */
  DescribeAccessControlDetail(data: DescribeAccessControlDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAccessControlDetailResponse>;
  /** 运行时访问控制事件列表 */
  DescribeAccessControlEvents(data: DescribeAccessControlEventsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAccessControlEventsResponse>;
  /** 运行时访问控制事件列表导出 */
  DescribeAccessControlEventsExport(data: DescribeAccessControlEventsExportRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAccessControlEventsExportResponse>;
  /** 查询运行时访问控制策略详细信息 */
  DescribeAccessControlRuleDetail(data: DescribeAccessControlRuleDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAccessControlRuleDetailResponse>;
  /** 运行时访问控制策略列表 */
  DescribeAccessControlRules(data: DescribeAccessControlRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAccessControlRulesResponse>;
  /** 运行时访问控制策略列表导出 */
  DescribeAccessControlRulesExport(data: DescribeAccessControlRulesExportRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAccessControlRulesExportResponse>;
  /** 获取受影响的集群数量 */
  DescribeAffectedClusterCount(data?: DescribeAffectedClusterCountRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAffectedClusterCountResponse>;
  /** 查询节点类型的影响范围 */
  DescribeAffectedNodeList(data: DescribeAffectedNodeListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAffectedNodeListResponse>;
  /** 查询workload类型的影响范围 */
  DescribeAffectedWorkloadList(data: DescribeAffectedWorkloadListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAffectedWorkloadListResponse>;
  /** 查询app服务列表 */
  DescribeAssetAppServiceList(data: DescribeAssetAppServiceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetAppServiceListResponse>;
  /** 查询容器组件列表 */
  DescribeAssetComponentList(data: DescribeAssetComponentListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetComponentListResponse>;
  /** 查询容器信息 */
  DescribeAssetContainerDetail(data: DescribeAssetContainerDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetContainerDetailResponse>;
  /** 查询容器列表 */
  DescribeAssetContainerList(data: DescribeAssetContainerListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetContainerListResponse>;
  /** 查询db服务列表 */
  DescribeAssetDBServiceList(data: DescribeAssetDBServiceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetDBServiceListResponse>;
  /** 查询主机信息 */
  DescribeAssetHostDetail(data: DescribeAssetHostDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetHostDetailResponse>;
  /** 查询主机列表 */
  DescribeAssetHostList(data: DescribeAssetHostListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetHostListResponse>;
  /** 镜像绑定规则列表 */
  DescribeAssetImageBindRuleInfo(data: DescribeAssetImageBindRuleInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetImageBindRuleInfoResponse>;
  /** 查询镜像信息 */
  DescribeAssetImageDetail(data: DescribeAssetImageDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetImageDetailResponse>;
  /** 查询镜像关联主机 */
  DescribeAssetImageHostList(data: DescribeAssetImageHostListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetImageHostListResponse>;
  /** 查询镜像列表 */
  DescribeAssetImageList(data: DescribeAssetImageListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetImageListResponse>;
  /** 查询镜像列表导出 */
  DescribeAssetImageListExport(data: DescribeAssetImageListExportRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetImageListExportResponse>;
  /** 查看镜像仓库资产更新进度状态 */
  DescribeAssetImageRegistryAssetStatus(data?: DescribeAssetImageRegistryAssetStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetImageRegistryAssetStatusResponse>;
  /** 镜像仓库查询镜像仓库详情 */
  DescribeAssetImageRegistryDetail(data: DescribeAssetImageRegistryDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetImageRegistryDetailResponse>;
  /** 镜像仓库查询镜像仓库列表 */
  DescribeAssetImageRegistryList(data: DescribeAssetImageRegistryListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetImageRegistryListResponse>;
  /** 镜像仓库镜像列表导出 */
  DescribeAssetImageRegistryListExport(data: DescribeAssetImageRegistryListExportRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetImageRegistryListExportResponse>;
  /** 查看单个镜像仓库详细信息 */
  DescribeAssetImageRegistryRegistryDetail(data: DescribeAssetImageRegistryRegistryDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetImageRegistryRegistryDetailResponse>;
  /** 镜像仓库仓库列表 */
  DescribeAssetImageRegistryRegistryList(data?: DescribeAssetImageRegistryRegistryListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetImageRegistryRegistryListResponse>;
  /** 镜像仓库查询镜像高危行为列表 */
  DescribeAssetImageRegistryRiskInfoList(data: DescribeAssetImageRegistryRiskInfoListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetImageRegistryRiskInfoListResponse>;
  /** 镜像仓库敏感信息列表导出 */
  DescribeAssetImageRegistryRiskListExport(data: DescribeAssetImageRegistryRiskListExportRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetImageRegistryRiskListExportResponse>;
  /** 镜像仓库查询一键镜像扫描状态 */
  DescribeAssetImageRegistryScanStatusOneKey(data: DescribeAssetImageRegistryScanStatusOneKeyRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetImageRegistryScanStatusOneKeyResponse>;
  /** 镜像仓库查询镜像统计信息 */
  DescribeAssetImageRegistrySummary(data?: DescribeAssetImageRegistrySummaryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetImageRegistrySummaryResponse>;
  /** 镜像仓库查询木马病毒列表 */
  DescribeAssetImageRegistryVirusList(data: DescribeAssetImageRegistryVirusListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetImageRegistryVirusListResponse>;
  /** 镜像仓库木马信息列表导出 */
  DescribeAssetImageRegistryVirusListExport(data: DescribeAssetImageRegistryVirusListExportRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetImageRegistryVirusListExportResponse>;
  /** 镜像仓库查询镜像漏洞列表 */
  DescribeAssetImageRegistryVulList(data: DescribeAssetImageRegistryVulListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetImageRegistryVulListResponse>;
  /** 镜像仓库漏洞列表导出 */
  DescribeAssetImageRegistryVulListExport(data: DescribeAssetImageRegistryVulListExportRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetImageRegistryVulListExportResponse>;
  /** 查询镜像风险列表 */
  DescribeAssetImageRiskList(data: DescribeAssetImageRiskListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetImageRiskListResponse>;
  /** 镜像风险列表导出 */
  DescribeAssetImageRiskListExport(data: DescribeAssetImageRiskListExportRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetImageRiskListExportResponse>;
  /** 获取镜像扫描设置信息 */
  DescribeAssetImageScanSetting(data?: DescribeAssetImageScanSettingRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetImageScanSettingResponse>;
  /** 查询镜像扫描状态 */
  DescribeAssetImageScanStatus(data: DescribeAssetImageScanStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetImageScanStatusResponse>;
  /** 查询正在一键扫描的镜像扫描taskid */
  DescribeAssetImageScanTask(data?: DescribeAssetImageScanTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetImageScanTaskResponse>;
  /** 查询镜像简略信息列表 */
  DescribeAssetImageSimpleList(data: DescribeAssetImageSimpleListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetImageSimpleListResponse>;
  /** 查询镜像病毒列表 */
  DescribeAssetImageVirusList(data: DescribeAssetImageVirusListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetImageVirusListResponse>;
  /** 镜像木马列表导出 */
  DescribeAssetImageVirusListExport(data: DescribeAssetImageVirusListExportRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetImageVirusListExportResponse>;
  /** 查询镜像漏洞列表 */
  DescribeAssetImageVulList(data: DescribeAssetImageVulListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetImageVulListResponse>;
  /** 镜像漏洞列表导出 */
  DescribeAssetImageVulListExport(data: DescribeAssetImageVulListExportRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetImageVulListExportResponse>;
  /** 查询端口占用列表 */
  DescribeAssetPortList(data: DescribeAssetPortListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetPortListResponse>;
  /** 查询进程列表 */
  DescribeAssetProcessList(data: DescribeAssetProcessListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetProcessListResponse>;
  /** 查询账户容器、镜像等统计信息 */
  DescribeAssetSummary(data?: DescribeAssetSummaryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetSummaryResponse>;
  /** 查询web服务列表 */
  DescribeAssetWebServiceList(data: DescribeAssetWebServiceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetWebServiceListResponse>;
  /** 查询所有检查项接口 */
  DescribeCheckItemList(data: DescribeCheckItemListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCheckItemListResponse>;
  /** 查询单个集群的详细信息 */
  DescribeClusterDetail(data: DescribeClusterDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterDetailResponse>;
  /** 查询用户集群资产总览 */
  DescribeClusterSummary(data?: DescribeClusterSummaryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterSummaryResponse>;
  /** 安全合规查询某个资产的详情 */
  DescribeComplianceAssetDetailInfo(data: DescribeComplianceAssetDetailInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeComplianceAssetDetailInfoResponse>;
  /** 安全合规查询某类资产的列表 */
  DescribeComplianceAssetList(data: DescribeComplianceAssetListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeComplianceAssetListResponse>;
  /** 安全合规查询某资产下的检测项列表 */
  DescribeComplianceAssetPolicyItemList(data: DescribeComplianceAssetPolicyItemListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeComplianceAssetPolicyItemListResponse>;
  /** 安全合规查询定时任务列表 */
  DescribeCompliancePeriodTaskList(data: DescribeCompliancePeriodTaskListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCompliancePeriodTaskListResponse>;
  /** 安全合规查询检测项影响的资产列表 */
  DescribeCompliancePolicyItemAffectedAssetList(data: DescribeCompliancePolicyItemAffectedAssetListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCompliancePolicyItemAffectedAssetListResponse>;
  /** 安全合规查询某检测项影响的信息 */
  DescribeCompliancePolicyItemAffectedSummary(data: DescribeCompliancePolicyItemAffectedSummaryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCompliancePolicyItemAffectedSummaryResponse>;
  /** 安全合规查询上次检测失败的资产的列表 */
  DescribeComplianceScanFailedAssetList(data: DescribeComplianceScanFailedAssetListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeComplianceScanFailedAssetListResponse>;
  /** 安全合规查询上次任务的资产通过率汇总信息 */
  DescribeComplianceTaskAssetSummary(data: DescribeComplianceTaskAssetSummaryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeComplianceTaskAssetSummaryResponse>;
  /** 安全合规查询上次任务的检测项的汇总信息列表 */
  DescribeComplianceTaskPolicyItemSummaryList(data: DescribeComplianceTaskPolicyItemSummaryListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeComplianceTaskPolicyItemSummaryListResponse>;
  /** 安全合规查询白名单列表 */
  DescribeComplianceWhitelistItemList(data: DescribeComplianceWhitelistItemListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeComplianceWhitelistItemListResponse>;
  /** 查询容器安全资产概览 */
  DescribeContainerAssetSummary(data?: DescribeContainerAssetSummaryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeContainerAssetSummaryResponse>;
  /** 查询容器安全未处理事件概览 */
  DescribeContainerSecEventSummary(data?: DescribeContainerSecEventSummaryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeContainerSecEventSummaryResponse>;
  /** 查询容器逃逸事件详情 */
  DescribeEscapeEventDetail(data: DescribeEscapeEventDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEscapeEventDetailResponse>;
  /** 查询容器逃逸事件列表 */
  DescribeEscapeEventInfo(data: DescribeEscapeEventInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEscapeEventInfoResponse>;
  /** 查询容器逃逸事件列表导出 */
  DescribeEscapeEventsExport(data: DescribeEscapeEventsExportRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEscapeEventsExportResponse>;
  /** 查询容器逃逸扫描规则信息 */
  DescribeEscapeRuleInfo(data?: DescribeEscapeRuleInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEscapeRuleInfoResponse>;
  /** 查询容器逃逸安全状态 */
  DescribeEscapeSafeState(data?: DescribeEscapeSafeStateRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEscapeSafeStateResponse>;
  /** 查询导出任务的结果 */
  DescribeExportJobResult(data: DescribeExportJobResultRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeExportJobResultResponse>;
  /** 查询镜像授权信息 */
  DescribeImageAuthorizedInfo(data?: DescribeImageAuthorizedInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeImageAuthorizedInfoResponse>;
  /** 镜像仓库查看定时任务 */
  DescribeImageRegistryTimingScanTask(data?: DescribeImageRegistryTimingScanTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeImageRegistryTimingScanTaskResponse>;
  /** 查询本地镜像风险概览 */
  DescribeImageRiskSummary(data?: DescribeImageRiskSummaryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeImageRiskSummaryResponse>;
  /** 查询容器安全本地镜像风险趋势 */
  DescribeImageRiskTendency(data: DescribeImageRiskTendencyRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeImageRiskTendencyResponse>;
  /** 查询全部镜像列表 */
  DescribeImageSimpleList(data: DescribeImageSimpleListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeImageSimpleListResponse>;
  /** 查询后付费详情 */
  DescribePostPayDetail(data: DescribePostPayDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePostPayDetailResponse>;
  /** 查询专业版需购买信息 */
  DescribeProVersionInfo(data?: DescribeProVersionInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProVersionInfoResponse>;
  /** 查询容器安全服务已购买信息 */
  DescribePurchaseStateInfo(data?: DescribePurchaseStateInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePurchaseStateInfoResponse>;
  /** 查询刷新任务 */
  DescribeRefreshTask(data: DescribeRefreshTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRefreshTaskResponse>;
  /** 运行时反弹shell事件详细信息 */
  DescribeReverseShellDetail(data: DescribeReverseShellDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeReverseShellDetailResponse>;
  /** 运行时反弹shell列表 */
  DescribeReverseShellEvents(data: DescribeReverseShellEventsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeReverseShellEventsResponse>;
  /** 运行时反弹shell列表导出 */
  DescribeReverseShellEventsExport(data: DescribeReverseShellEventsExportRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeReverseShellEventsExportResponse>;
  /** 运行时反弹shell白名单详细信息 */
  DescribeReverseShellWhiteListDetail(data: DescribeReverseShellWhiteListDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeReverseShellWhiteListDetailResponse>;
  /** 运行时反弹shell白名单列表 */
  DescribeReverseShellWhiteLists(data: DescribeReverseShellWhiteListsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeReverseShellWhiteListsResponse>;
  /** 查询集群风险项列表 */
  DescribeRiskList(data: DescribeRiskListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRiskListResponse>;
  /** 运行时高危系统调用事件详细信息 */
  DescribeRiskSyscallDetail(data: DescribeRiskSyscallDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRiskSyscallDetailResponse>;
  /** 运行时高危系统调用列表 */
  DescribeRiskSyscallEvents(data: DescribeRiskSyscallEventsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRiskSyscallEventsResponse>;
  /** 运行时高危系统调用列表导出 */
  DescribeRiskSyscallEventsExport(data: DescribeRiskSyscallEventsExportRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRiskSyscallEventsExportResponse>;
  /** 运行时高危系统调用系统名称列表 */
  DescribeRiskSyscallNames(data?: DescribeRiskSyscallNamesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRiskSyscallNamesResponse>;
  /** 运行时高危系统调用白名单详细信息 */
  DescribeRiskSyscallWhiteListDetail(data: DescribeRiskSyscallWhiteListDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRiskSyscallWhiteListDetailResponse>;
  /** 运行时高危系统调用白名单列表 */
  DescribeRiskSyscallWhiteLists(data: DescribeRiskSyscallWhiteListsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRiskSyscallWhiteListsResponse>;
  /** 查询容器运行时安全时间趋势 */
  DescribeSecEventsTendency(data: DescribeSecEventsTendencyRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSecEventsTendencyResponse>;
  /** 查询检查结果总览 */
  DescribeTaskResultSummary(data?: DescribeTaskResultSummaryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTaskResultSummaryResponse>;
  /** 查询未完成的刷新资产任务信息 */
  DescribeUnfinishRefreshTask(data?: DescribeUnfinishRefreshTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUnfinishRefreshTaskResponse>;
  /** 用户集群资产查询 */
  DescribeUserCluster(data: DescribeUserClusterRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUserClusterResponse>;
  /** 查询增值服务需购买信息 */
  DescribeValueAddedSrvInfo(data?: DescribeValueAddedSrvInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeValueAddedSrvInfoResponse>;
  /** 运行时查询木马文件信息 */
  DescribeVirusDetail(data: DescribeVirusDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVirusDetailResponse>;
  /** 查询运行时文件查杀事件列表 */
  DescribeVirusList(data: DescribeVirusListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVirusListResponse>;
  /** 运行时查询文件查杀实时监控设置 */
  DescribeVirusMonitorSetting(data?: DescribeVirusMonitorSettingRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVirusMonitorSettingResponse>;
  /** 运行时查询文件查杀设置 */
  DescribeVirusScanSetting(data?: DescribeVirusScanSettingRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVirusScanSettingResponse>;
  /** 运行时查询文件查杀任务状态 */
  DescribeVirusScanTaskStatus(data: DescribeVirusScanTaskStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVirusScanTaskStatusResponse>;
  /** 运行时文件扫描超时设置查询 */
  DescribeVirusScanTimeoutSetting(data: DescribeVirusScanTimeoutSettingRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVirusScanTimeoutSettingResponse>;
  /** 运行时查询木马概览信息 */
  DescribeVirusSummary(data?: DescribeVirusSummaryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVirusSummaryResponse>;
  /** 运行时查询文件查杀任务列表 */
  DescribeVirusTaskList(data: DescribeVirusTaskListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVirusTaskListResponse>;
  /** 获取告警策略列表 */
  DescribeWarningRules(data?: DescribeWarningRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWarningRulesResponse>;
  /** 运行时文件查杀事件列表导出 */
  ExportVirusList(data: ExportVirusListRequest, config?: AxiosRequestConfig): AxiosPromise<ExportVirusListResponse>;
  /** 安全合规初始化用户的合规基线检测环境 */
  InitializeUserComplianceEnvironment(data?: InitializeUserComplianceEnvironmentRequest, config?: AxiosRequestConfig): AxiosPromise<InitializeUserComplianceEnvironmentResponse>;
  /** 修改运行时异常进程策略状态 */
  ModifyAbnormalProcessRuleStatus(data: ModifyAbnormalProcessRuleStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAbnormalProcessRuleStatusResponse>;
  /** 修改异常进程事件状态 */
  ModifyAbnormalProcessStatus(data: ModifyAbnormalProcessStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAbnormalProcessStatusResponse>;
  /** 修改运行时访问控制策略状态 */
  ModifyAccessControlRuleStatus(data: ModifyAccessControlRuleStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAccessControlRuleStatusResponse>;
  /** 修改运行时访问控制事件状态 */
  ModifyAccessControlStatus(data: ModifyAccessControlStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAccessControlStatusResponse>;
  /** 主机资产刷新 */
  ModifyAsset(data: ModifyAssetRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAssetResponse>;
  /** 镜像仓库停止镜像扫描任务 */
  ModifyAssetImageRegistryScanStop(data: ModifyAssetImageRegistryScanStopRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAssetImageRegistryScanStopResponse>;
  /** 镜像仓库停止镜像一键扫描任务 */
  ModifyAssetImageRegistryScanStopOneKey(data: ModifyAssetImageRegistryScanStopOneKeyRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAssetImageRegistryScanStopOneKeyResponse>;
  /** 停止镜像扫描 */
  ModifyAssetImageScanStop(data: ModifyAssetImageScanStopRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAssetImageScanStopResponse>;
  /** 安全合规编辑定时任务 */
  ModifyCompliancePeriodTask(data: ModifyCompliancePeriodTaskRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCompliancePeriodTaskResponse>;
  /** 修改容器逃逸扫描事件状态 */
  ModifyEscapeEventStatus(data: ModifyEscapeEventStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyEscapeEventStatusResponse>;
  /** 修改容器逃逸扫描规则信息 */
  ModifyEscapeRule(data: ModifyEscapeRuleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyEscapeRuleResponse>;
  /** 修改反弹shell事件状态 */
  ModifyReverseShellStatus(data: ModifyReverseShellStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyReverseShellStatusResponse>;
  /** 修改高危系统调用事件状态 */
  ModifyRiskSyscallStatus(data: ModifyRiskSyscallStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyRiskSyscallStatusResponse>;
  /** 运行时更新木马文件事件状态 */
  ModifyVirusFileStatus(data: ModifyVirusFileStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyVirusFileStatusResponse>;
  /** 运行时更新文件查杀实时监控设置 */
  ModifyVirusMonitorSetting(data: ModifyVirusMonitorSettingRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyVirusMonitorSettingResponse>;
  /** 运行时更新文件查杀设置 */
  ModifyVirusScanSetting(data: ModifyVirusScanSettingRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyVirusScanSettingResponse>;
  /** 运行时文件扫描超时设置 */
  ModifyVirusScanTimeoutSetting(data: ModifyVirusScanTimeoutSettingRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyVirusScanTimeoutSettingResponse>;
  /** 删除单个镜像仓库详细信息 */
  RemoveAssetImageRegistryRegistryDetail(data: RemoveAssetImageRegistryRegistryDetailRequest, config?: AxiosRequestConfig): AxiosPromise<RemoveAssetImageRegistryRegistryDetailResponse>;
  /** 授权镜像扫描 */
  RenewImageAuthorizeState(data: RenewImageAuthorizeStateRequest, config?: AxiosRequestConfig): AxiosPromise<RenewImageAuthorizeStateResponse>;
  /** 安全合规重新检测选定的资产 */
  ScanComplianceAssets(data: ScanComplianceAssetsRequest, config?: AxiosRequestConfig): AxiosPromise<ScanComplianceAssetsResponse>;
  /** 安全合规用指定的检测项重新检测选定的资产 */
  ScanComplianceAssetsByPolicyItem(data: ScanComplianceAssetsByPolicyItemRequest, config?: AxiosRequestConfig): AxiosPromise<ScanComplianceAssetsByPolicyItemResponse>;
  /** 安全合规重新检测选定的检测项 */
  ScanCompliancePolicyItems(data: ScanCompliancePolicyItemsRequest, config?: AxiosRequestConfig): AxiosPromise<ScanCompliancePolicyItemsResponse>;
  /** 安全合规重新检测上次检测失败的资产 */
  ScanComplianceScanFailedAssets(data: ScanComplianceScanFailedAssetsRequest, config?: AxiosRequestConfig): AxiosPromise<ScanComplianceScanFailedAssetsResponse>;
  /** 设置检测模式和自动检查 */
  SetCheckMode(data: SetCheckModeRequest, config?: AxiosRequestConfig): AxiosPromise<SetCheckModeResponse>;
  /** 运行时停止木马查杀任务 */
  StopVirusScanTask(data: StopVirusScanTaskRequest, config?: AxiosRequestConfig): AxiosPromise<StopVirusScanTaskResponse>;
  /** 镜像仓库资产刷新 */
  SyncAssetImageRegistryAsset(data?: SyncAssetImageRegistryAssetRequest, config?: AxiosRequestConfig): AxiosPromise<SyncAssetImageRegistryAssetResponse>;
  /** 更新单个镜像仓库详细信息 */
  UpdateAssetImageRegistryRegistryDetail(data: UpdateAssetImageRegistryRegistryDetailRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateAssetImageRegistryRegistryDetailResponse>;
  /** 镜像仓库更新定时任务 */
  UpdateImageRegistryTimingScanTask(data: UpdateImageRegistryTimingScanTaskRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateImageRegistryTimingScanTaskResponse>;
}

export declare type Versions = ["2020-11-01"];

export default Tcss;
