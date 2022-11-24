/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 灰度项目配置 */
declare interface ABTestConfig {
  /** 灰度项目名称 */
  ProjectName: string;
  /** true：正在灰度，false：不在灰度 */
  Status: boolean;
}

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

/** 待处理异常进程事件趋势 */
declare interface AbnormalProcessEventTendencyInfo {
  /** 日期 */
  Date: string;
  /** 待处理代理软件事件数 */
  ProxyToolEventCount: number;
  /** 待处理横向参透事件数 */
  TransferControlEventCount: number;
  /** 待处理恶意命令事件数 */
  AttackCmdEventCount: number;
  /** 待处理反弹shell事件数 */
  ReverseShellEventCount: number;
  /** 待处理无文件程序执行事件数 */
  FilelessEventCount: number;
  /** 待处理高危命令事件数 */
  RiskCmdEventCount: number;
  /** 待处理敏感服务异常子进程启动事件数 */
  AbnormalChildProcessEventCount: number;
  /** 待处理自定义规则事件数 */
  UserDefinedRuleEventCount: number;
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

/** 镜像自动授权结果信息 */
declare interface AutoAuthorizedImageInfo {
  /** 镜像id */
  ImageId: string;
  /** 镜像名称 */
  ImageName: string;
  /** 授权时间 */
  AuthorizedTime: string;
  /** 授权结果，SUCCESS:成功，REACH_LIMIT:达到授权上限，LICENSE_INSUFFICIENT:授权数不足' */
  Status: string;
  /** 是否授权，1：是，0：否 */
  IsAuthorized: number;
}

/** 自动授权镜像规则授权范围主机列表 */
declare interface AutoAuthorizedRuleHostInfo {
  /** 主机id */
  HostID: string;
  /** 主机ip即内网ip */
  HostIP: string;
  /** 主机名称 */
  HostName: string;
  /** 镜像个数 */
  ImageCnt: number;
  /** 容器个数 */
  ContainerCnt: number;
  /** 外网ip */
  PublicIp: string;
  /** 主机实例ID */
  InstanceID: string;
  /** 主机来源：["CVM", "ECM", "LH", "BM"] 中的之一为腾讯云服务器；["Other"]之一非腾讯云服务器； */
  MachineType: string;
  /** docker 版本 */
  DockerVersion: string;
  /** agent运行状态 */
  Status: string;
}

/** 安全日志kafka可选信息 */
declare interface CKafkaInstanceInfo {
  /** 实例ID */
  InstanceID?: string | null;
  /** 实例名称 */
  InstanceName?: string | null;
  /** 主题列表 */
  TopicList?: CKafkaTopicInfo[] | null;
  /** 路由列表 */
  RouteList?: CkafkaRouteInfo[] | null;
  /** kafka版本号 */
  KafkaVersion?: string | null;
}

/** Ckafka topic信息 */
declare interface CKafkaTopicInfo {
  /** 主题ID */
  TopicID: string;
  /** 主题名称 */
  TopicName: string;
}

/** ckafkal路由详情 */
declare interface CkafkaRouteInfo {
  /** 路由ID */
  RouteID?: number | null;
  /** 域名名称 */
  Domain?: string | null;
  /** 域名端口 */
  DomainPort?: number | null;
  /** 虚拟ip */
  Vip?: string | null;
  /** 虚拟ip类型 */
  VipType?: number | null;
  /** 接入类型// 0：PLAINTEXT (明文方式，没有带用户信息老版本及社区版本都支持)	// 1：SASL_PLAINTEXT（明文方式，不过在数据开始时，会通过SASL方式登录鉴权，仅社区版本支持）	// 2：SSL（SSL加密通信，没有带用户信息，老版本及社区版本都支持）	// 3：SASL_SSL（SSL加密通信，在数据开始时，会通过SASL方式登录鉴权，仅社区版本支持） */
  AccessType?: number | null;
}

/** cls日志集信息 */
declare interface ClsLogsetInfo {
  /** 日志集ID */
  LogsetID: string;
  /** 日志集名称 */
  LogsetName?: string | null;
  /** cls主题列表 */
  TopicList?: ClsTopicInfo[] | null;
}

/** cls主题信息 */
declare interface ClsTopicInfo {
  /** 主题ID */
  TopicID: string;
  /** 主题名称 */
  TopicName: string;
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

/** 资产+检查项ids 集合单元 */
declare interface ComplianceAssetPolicySetItem {
  /** 资产ID */
  CustomerAssetItemId: number;
  /** 需要忽略指定资产内的检查项ID列表，为空表示所有 */
  CustomerPolicyItemIdSet?: number[];
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

/** 检查项+资产ids 的集合单元 */
declare interface CompliancePolicyAssetSetItem {
  /** 检查项ID */
  CustomerPolicyItemId: number;
  /** 需要忽略指定检查项内的资产ID列表，为空表示所有 */
  CustomerAssetItemIdSet?: number[];
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
  /** 检测项适用的版本 */
  ApplicableVersion: string | null;
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

/** 应急漏洞列表信息 */
declare interface EmergencyVulInfo {
  /** 漏洞名称 */
  Name: string;
  /** 漏洞标签 */
  Tags: string[] | null;
  /** CVSS V3分数 */
  CVSSV3Score: number | null;
  /** 风险等级 */
  Level: string | null;
  /** CVE编号 */
  CVEID: string;
  /** 漏洞类型 */
  Category: string | null;
  /** 漏洞披露时间 */
  SubmitTime: string | null;
  /** 最近发现时间 */
  LatestFoundTime: string | null;
  /** 应急漏洞风险情况：NOT_SCAN：未扫描，SCANNING：扫描中，SCANNED_NOT_RISK：已扫描，暂未风险 ，SCANNED_RISK：已扫描存在风险 */
  Status: string;
  /** 漏洞ID */
  ID: number;
  /** 漏洞PocID */
  PocID: string;
  /** 防御状态，NO_DEFENDED:未防御，DEFENDED:已防御 */
  DefenceStatus: string | null;
  /** 漏洞防御主机范围: MANUAL:自选主机节点，ALL:全部 */
  DefenceScope: string | null;
  /** 漏洞防御主机数量 */
  DefenceHostCount: number | null;
  /** 已防御攻击次数 */
  DefendedCount: number | null;
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

/** 待处理逃逸事件趋势 */
declare interface EscapeEventTendencyInfo {
  /** 待处理风险容器事件总数 */
  RiskContainerEventCount: number;
  /** 待处理程序特权事件总数 */
  ProcessPrivilegeEventCount: number;
  /** 待处理容器逃逸事件总数 */
  ContainerEscapeEventCount: number;
  /** 日期 */
  Date: string;
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

/** 逃逸白名单 */
declare interface EscapeWhiteListInfo {
  /** 镜像ID */
  ImageID: string;
  /** 镜像名称 */
  ImageName: string;
  /** 白名单记录ID */
  ID: number;
  /** 关联主机数量 */
  HostCount: number;
  /** 关联容器数量 */
  ContainerCount: number;
  /** 加白事件类型 */
  EventType: string[];
  /** 创建时间 */
  InsertTime: string;
  /** 更新时间 */
  UpdateTime: string;
  /** 镜像大小 */
  ImageSize: number;
}

/** 导出任务详情 */
declare interface ExportJobInfo {
  /** 任务ID */
  JobID: string;
  /** 任务名称 */
  JobName: string;
  /** 来源 */
  Source: string;
  /** 导出状态 */
  ExportStatus: string;
  /** 导出进度 */
  ExportProgress: number;
  /** 失败原因 */
  FailureMsg: string;
  /** 超时时间 */
  Timeout: string;
  /** 插入时间 */
  InsertTime: string;
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
  /** 新文件内容 */
  NewFile: string;
  /** 新旧文件的差异 */
  FileDiff: string;
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
  /** 所属项目 */
  Project: ProjectInfo | null;
  /** 标签 */
  Tags: TagInfo[] | null;
}

/** 镜像自动授权任务信息 */
declare interface ImageAutoAuthorizedTask {
  /** 任务id */
  TaskId: number;
  /** 授权方式，AUTO:自动授权，MANUAL:手动授权 */
  Type: string;
  /** 任务日期 */
  AuthorizedDate: string;
  /** 镜像来源，LOCAL:本地镜像，REGISTRY:仓库镜像 */
  Source: string;
  /** 最近授权时间 */
  LastAuthorizedTime: string;
  /** 自动授权成功数 */
  SuccessCount: number;
  /** 自动授权失败数 */
  FailCount: number;
  /** 最近任务失败码，REACH_LIMIT:达到授权上限，LICENSE_INSUFFICIENT:授权数不足 */
  LatestFailCode: string;
}

/** 容器安全镜像组件信息 */
declare interface ImageComponent {
  /** 组件名称 */
  Name: string;
  /** 组件版本 */
  Version: string;
  /** 组件路径 */
  Path: string;
  /** 组件类型 */
  Type: string;
  /** 组件漏洞数量 */
  VulCount: number | null;
  /** 镜像ID */
  ImageID: string | null;
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

/** 漏洞扫描新增和取消忽略漏洞入参 */
declare interface ModifyIgnoreVul {
  /** 漏洞PocID */
  PocID: string;
  /** 忽略的镜像ID，空表示全部 */
  ImageIDs?: string[];
  /** 当有镜像时镜像类型: LOCAL 本地镜像 REGISTRY 仓库镜像 */
  ImageType?: string;
}

/** 网络集群资产审计返回结构体 */
declare interface NetworkAuditRecord {
  /** 集群id */
  ClusterId: string;
  /** 集群名字 */
  ClusterName: string;
  /** 集群区域 */
  Region: string;
  /** 动作 */
  Action: string;
  /** 操作人 */
  Operation: string;
  /** 策略名 */
  NetworkPolicyName: string;
  /** 操作时间 */
  OperationTime: string;
  /** 操作人appid */
  AppId: number | null;
  /** 操作人uin */
  Uin: string;
}

/** 网络集群资产返回的结构体 */
declare interface NetworkClusterInfoItem {
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
  /** 集群区域 */
  Region: string;
  /** 集群网络插件 */
  NetworkPolicyPlugin: string;
  /** 集群状态 */
  ClusterStatus: string;
  /** 总策略数量 */
  TotalRuleCount: number;
  /** 已开启策略数量 */
  EnableRuleCount: number;
  /** 集群网络插件状态，正常：Running 不正常：Error */
  NetworkPolicyPluginStatus: string;
  /** 集群网络插件错误信息 */
  NetworkPolicyPluginError: string | null;
}

/** 网络集群网络空间返回的结构体 */
declare interface NetworkClusterNamespaceInfo {
  /** 网络空间标签 */
  Labels: string;
  /** 网络空间名字 */
  Name: string;
}

/** 网络集群网络空间标签返回的结构体 */
declare interface NetworkClusterNamespaceLabelInfo {
  /** 网络空间标签 */
  Labels: string;
  /** 网络空间名字 */
  Name: string;
}

/** 网络集群pod返回的结构体 */
declare interface NetworkClusterPodInfo {
  /** pod名字 */
  PodName: string;
  /** pod空间 */
  Namespace: string | null;
  /** pod标签 */
  Labels: string | null;
  /** pod类型 */
  WorkloadKind: string | null;
}

/** 网络集群策略自定义规则 */
declare interface NetworkCustomPolicy {
  /** 网络策略方向，分为FROM和TO */
  Direction: string;
  /** 网络策略策略端口 */
  Ports?: NetworkPorts[] | null;
  /** 网络策略策略对象开启待确认：PublishedNoConfirm开启已确认：PublishedConfirmed关闭中：unPublishing开启中：Publishing待开启：unPublishEdit */
  Peer?: NetworkPeer[] | null;
}

/** 网络集群策略自定义规则 */
declare interface NetworkPeer {
  /** 对象类型：命名空间：NamespaceSelector，代表NamespaceSelector有值pod类型：PodSelector，代表NamespaceSelector和PodSelector都有值ip类型：IPBlock，代表只有IPBlock有值 */
  PeerType: string;
  /** 空间选择器 */
  NamespaceSelector?: string | null;
  /** pod选择器 */
  PodSelector?: string | null;
  /** Ip选择器 */
  IPBlock?: string | null;
}

/** 网络集群策略返回的结构体 */
declare interface NetworkPolicyInfoItem {
  /** 网络策略名 */
  Name: string;
  /** 网络策略描述 */
  Description: string | null;
  /** 发布状态：开启待确认：PublishedNoConfirm开启已确认：PublishedConfirmed关闭中：unPublishing开启中：Publishing待开启：unPublishEdit */
  PublishStatus: string;
  /** 策略类型：自动发现：System手动添加：Manual */
  PolicySourceType: string;
  /** 策略空间 */
  Namespace: string;
  /** 策略创建日期 */
  PolicyCreateTime: string;
  /** 策略类型kube-router：KubeRoutercilium：Cilium */
  NetworkPolicyPlugin: string;
  /** 策略发布结果 */
  PublishResult: string | null;
  /** 入站规则全部允许：1全部拒绝 ：2自定义：3 */
  FromPolicyRule: number;
  /** 入站规则全部允许：1全部拒绝 ：2自定义：3 */
  ToPolicyRule: number;
  /** 作用对象 */
  PodSelector: string | null;
  /** 网络策略Id */
  Id: number;
}

/** 网络集群策略自定义规则端口 */
declare interface NetworkPorts {
  /** 网络策略协议 */
  Protocol?: string | null;
  /** 网络策略策略端口 */
  Port?: string | null;
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

/** 主机所属项目 */
declare interface ProjectInfo {
  /** 项目名称 */
  ProjectName: string;
  /** 项目ID */
  ProjectID: number;
}

/** 促销活动内容 */
declare interface PromotionActivityContent {
  /** 月数 */
  MonthNum: number;
  /** 核数最低限量 */
  CoresCountLimit: number;
  /** 专业版折扣 */
  ProfessionalDiscount: number;
  /** 附赠镜像数 */
  ImageAuthorizationNum: number;
}

/** 漏洞防御插件 rasp信息 */
declare interface RaspInfo {
  /** rasp名称 */
  Name: string;
  /** rasp 描述 */
  Value: string;
}

/** 地域信息 */
declare interface RegionInfo {
  /** 地域标识 */
  Region: string;
  /** 地域名称 */
  RegionName: string;
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

/** 扫描忽略的漏洞 */
declare interface ScanIgnoreVul {
  /** 漏洞名称 */
  VulName: string;
  /** 漏洞CVEID */
  CVEID: string;
  /** 漏洞PocID */
  PocID: string;
  /** 忽略的仓库镜像数 */
  RegistryImageCount: number;
  /** 更新时间 */
  UpdateTime: string;
  /** 是否忽略所有镜像：0：否/1：是 */
  IsIgnoreAll: number;
  /** 忽略的本地镜像数 */
  LocalImageCount: number;
}

/** 快速搜索模板 */
declare interface SearchTemplate {
  /** 检索名称 */
  Name: string;
  /** 检索索引类型 */
  LogType: string;
  /** 检索语句 */
  Condition: string;
  /** 时间范围 */
  TimeRange: string;
  /** 转换的检索语句内容 */
  Query: string;
  /** 检索方式。输入框检索：standard,过滤，检索：simple */
  Flag: string;
  /** 展示数据 */
  DisplayData: string;
  /** 规则ID */
  Id?: number;
}

/** 安全日志告警信息 */
declare interface SecLogAlertMsgInfo {
  /** 告警类型 */
  MsgType: string;
  /** 告警值 */
  MsgValue: string;
  /** 状态(0:关闭 1:开启) */
  State: boolean;
}

/** 安全日志-日志投递cls设置信息 */
declare interface SecLogDeliveryClsSettingInfo {
  /** 日志类型 */
  LogType: string;
  /** 投递状态(true:开启 false:关闭) */
  State: boolean;
  /** 区域 */
  Region: string;
  /** 日志集 */
  LogSet: string;
  /** 主题ID */
  TopicID: string;
  /** 日志集名称 */
  LogSetName?: string | null;
  /** 主题名称 */
  TopicName?: string | null;
}

/** 安全日志日志投递kafka设置详情 */
declare interface SecLogDeliveryKafkaSettingInfo {
  /** 日志类型 */
  LogType: string;
  /** 主题ID */
  TopicID: string;
  /** 主题名称 */
  TopicName: string | null;
  /** 投递状态(false:关 true:开) */
  State: boolean;
}

/** 安全日志接入详情 */
declare interface SecLogJoinInfo {
  /** 已接入数量 */
  Count: number;
  /** 是否已接入(true:已接入 false:未接入) */
  IsJoined: boolean;
  /** 日志类型(容器bash: "container_bash"容器启动: "container_launch"k8sApi: "k8s_api") */
  LogType: string;
}

/** 安全日志接入对象详情 */
declare interface SecLogJoinObjectInfo {
  /** 主机ID */
  HostID: string;
  /** 主机名称 */
  HostName: string | null;
  /** 主机IP */
  HostIP: string | null;
  /** 主机状态 */
  HostStatus: string;
  /** 集群ID */
  ClusterID: string | null;
  /** 集群名称 */
  ClusterName: string | null;
  /** 外网IP */
  PublicIP: string | null;
  /** 接入状态(true:已接入 false:未接入) */
  JoinState: boolean;
  /** 集群版本 */
  ClusterVersion: string | null;
  /** 集群主节点地址 */
  ClusterMainAddress: string;
}

/** 运行时安全事件趋势信息 */
declare interface SecTendencyEventInfo {
  /** 趋势列表 */
  EventSet: RunTimeTendencyInfo[];
  /** 事件类型：ET_ESCAPE : 容器逃逸ET_REVERSE_SHELL: 反弹shellET_RISK_SYSCALL:高危系统调用ET_ABNORMAL_PROCESS: 异常进程ET_ACCESS_CONTROL 文件篡改ET_VIRUS 木马事件ET_MALICIOUS_CONNECTION 恶意外连事件 */
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

/** 支持防御的漏洞 */
declare interface SupportDefenceVul {
  /** 漏洞PocID */
  PocID: string;
  /** 漏洞名称 */
  Name: string;
  /** 漏洞标签 */
  Tags: string[];
  /** 漏洞CVSS */
  CVSSV3Score: number;
  /** 漏洞威胁等级 */
  Level: string;
  /** 漏洞CVEID */
  CVEID: string;
  /** 漏洞披露时间 */
  SubmitTime: string;
}

/** 主机标签信息 */
declare interface TagInfo {
  /** 标签键 */
  TagKey: string;
  /** 标签值 */
  TagValue: string;
}

/** 未授权核数趋势 */
declare interface UnauthorizedCoresTendency {
  /** 日期 */
  DateTime: string;
  /** 未授权的核数 */
  CoresCount: number;
}

/** 木马自动隔离样本信息 */
declare interface VirusAutoIsolateSampleInfo {
  /** 文件MD5值 */
  MD5: string;
  /** 病毒名 */
  VirusName: string;
  /** 最近编辑时间 */
  ModifyTime: string;
  /** 自动隔离开关(true:开 false:关) */
  AutoIsolateSwitch: boolean;
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

/** 木马趋势详情 */
declare interface VirusTendencyInfo {
  /** 日期 */
  Date: string;
  /** 待处理事件总数 */
  PendingEventCount: number;
  /** 风险容器总数 */
  RiskContainerCount: number;
  /** 事件总数 */
  EventCount: number;
  /** 隔离事件总数 */
  IsolateEventCount: number;
}

/** 受漏洞影响的组件信息 */
declare interface VulAffectedComponentInfo {
  /** 组件名称 */
  Name: string | null;
  /** 组件版本 */
  Version: string[] | null;
  /** 组件修复版本 */
  FixedVersion: string[] | null;
}

/** 受漏洞影响的容器信息 */
declare interface VulAffectedContainerInfo {
  /** 内网IP */
  HostIP: string;
  /** 容器ID */
  ContainerID: string;
  /** 容器名称 */
  ContainerName: string;
  /** Pod名称 */
  PodName: string;
  /** PodIP值 */
  PodIP: string;
  /** 主机名称 */
  HostName: string;
  /** 主机ID */
  HostID: string;
  /** 外网IP */
  PublicIP: string;
}

/** 受漏洞影响的组件信息 */
declare interface VulAffectedImageComponentInfo {
  /** 组件名称 */
  Name: string | null;
  /** 组件版本 */
  Version: string | null;
  /** 组件修复版本 */
  FixedVersion: string | null;
  /** 组件路径 */
  Path: string | null;
}

/** 受漏洞影响的镜像信息 */
declare interface VulAffectedImageInfo {
  /** 镜像ID */
  ImageID: string;
  /** 镜像名称 */
  ImageName: string;
  /** 关联的主机数 */
  HostCount: number;
  /** 关联的容器数 */
  ContainerCount: number;
  /** 组件列表 */
  ComponentList: VulAffectedImageComponentInfo[];
}

/** 漏洞防御事件详情 */
declare interface VulDefenceEvent {
  /** 漏洞CVEID */
  CVEID: string;
  /** 漏洞名称 */
  VulName: string;
  /** 漏洞PocID */
  PocID: string;
  /** 入侵状态 */
  EventType: string;
  /** 攻击源IP */
  SourceIP: string;
  /** 攻击源ip地址所在城市 */
  City: string;
  /** 事件数量 */
  EventCount: number;
  /** 容器ID */
  ContainerID: string;
  /** 容器名称 */
  ContainerName: string;
  /** 镜像ID */
  ImageID: string;
  /** 镜像名称 */
  ImageName: string;
  /** 处理状态 */
  Status: string;
  /** 事件ID */
  EventID: number;
  /** 首次发现时间 */
  CreateTime: string | null;
  /** 隔离状态未隔离 NORMAL已隔离 ISOLATED隔离中 ISOLATING隔离失败	ISOLATE_FAILED解除隔离中 RESTORING解除隔离失败 RESTORE_FAILED */
  ContainerNetStatus: string;
  /** 最近发现时间 */
  MergeTime: string | null;
  /** 容器状态正在运行: RUNNING暂停: PAUSED停止: STOPPED已经创建: CREATED已经销毁: DESTROYED正在重启中: RESTARTING迁移中: REMOVING */
  ContainerStatus: string | null;
  /** 容器子状态"AGENT_OFFLINE" //Agent离线	"NODE_DESTROYED" //节点已销毁	"CONTAINER_EXITED" //容器已退出	"CONTAINER_DESTROYED" //容器已销毁	"SHARED_HOST" // 容器与主机共享网络	"RESOURCE_LIMIT" //隔离操作资源超限	"UNKNOW" // 原因未知 */
  ContainerNetSubStatus: string | null;
  /** 容器隔离操作来源 */
  ContainerIsolateOperationSrc: string | null;
  /** 主机QUUID */
  QUUID: string | null;
  /** 主机内网IP */
  HostIP: string | null;
  /** 主机名称 */
  HostName: string | null;
}

/** 漏洞防御事件详情 */
declare interface VulDefenceEventDetail {
  /** 漏洞CVEID */
  CVEID: string;
  /** 漏洞名称 */
  VulName: string;
  /** 漏洞PocID */
  PocID: string;
  /** 入侵状态 */
  EventType: string;
  /** 攻击源IP */
  SourceIP: string;
  /** 攻击源ip地址所在城市 */
  City: string;
  /** 事件数量 */
  EventCount: number;
  /** 容器ID */
  ContainerID: string;
  /** 容器名称 */
  ContainerName: string;
  /** 镜像ID */
  ImageID: string;
  /** 镜像名称 */
  ImageName: string;
  /** 处理状态 */
  Status: string;
  /** 攻击源端口 */
  SourcePort: string[];
  /** 事件ID */
  EventID: number;
  /** 主机名称 */
  HostName: string;
  /** 主机内网IP */
  HostIP: string;
  /** 主机外网IP */
  PublicIP: string;
  /** Pod名称 */
  PodName: string;
  /** 危害描述 */
  Description: string;
  /** 修复建议 */
  OfficialSolution: string;
  /** 攻击包 */
  NetworkPayload: string;
  /** 进程PID */
  PID: number | null;
  /** 进程主类名 */
  MainClass: string | null;
  /** 堆栈信息 */
  StackTrace: string | null;
  /** 监听账号 */
  ServerAccount: string | null;
  /** 监听端口 */
  ServerPort: string | null;
  /** 进程路径 */
  ServerExe: string | null;
  /** 进程命令行参数 */
  ServerArg: string | null;
  /** 主机QUUID */
  QUUID: string | null;
  /** 隔离状态未隔离 NORMAL已隔离 ISOLATED隔离中 ISOLATING隔离失败	ISOLATE_FAILED解除隔离中 RESTORING解除隔离失败 RESTORE_FAILED */
  ContainerNetStatus: string | null;
  /** 容器子状态"AGENT_OFFLINE" //Agent离线	"NODE_DESTROYED" //节点已销毁	"CONTAINER_EXITED" //容器已退出	"CONTAINER_DESTROYED" //容器已销毁	"SHARED_HOST" // 容器与主机共享网络	"RESOURCE_LIMIT" //隔离操作资源超限	"UNKNOW" // 原因未知 */
  ContainerNetSubStatus: string | null;
  /** 容器隔离操作来源 */
  ContainerIsolateOperationSrc: string | null;
  /** 容器状态正在运行: RUNNING暂停: PAUSED停止: STOPPED已经创建: CREATED已经销毁: DESTROYED正在重启中: RESTARTING迁移中: REMOVING */
  ContainerStatus: string | null;
  /** 接口Url */
  JNDIUrl: string | null;
  /** rasp detail */
  RaspDetail: RaspInfo[] | null;
}

/** 漏洞防御攻击事件趋势 */
declare interface VulDefenceEventTendency {
  /** 日期 */
  Date: string;
  /** 事件数量 */
  EventCount: number;
}

/** 漏洞防御的主机信息 */
declare interface VulDefenceHost {
  /** 主机名称 */
  HostName: string;
  /** 主机ip即内网ip */
  HostIP: string;
  /** 主机QUUID */
  HostID: string;
  /** 插件状态，正常：SUCCESS，异常：FAIL， NO_DEFENDED:未防御 */
  Status: string;
  /** 外网ip */
  PublicIP: string;
  /** 首次开启时间 */
  CreateTime: string;
  /** 更新时间 */
  ModifyTime: string;
}

/** 漏洞防护的插件信息 */
declare interface VulDefencePlugin {
  /** java进程pid */
  PID: number;
  /** 进程主类名 */
  MainClass: string;
  /** 插件运行状态：注入中:INJECTING，注入成功：SUCCESS，注入失败：FAIL，插件超时：TIMEOUT，插件退出：QUIT */
  Status: string;
  /** 错误日志 */
  ErrorLog: string;
}

/** 漏洞详情信息 */
declare interface VulDetailInfo {
  /** CVE编号 */
  CVEID: string;
  /** 漏洞名称 */
  Name: string;
  /** 漏洞标签 */
  Tags: string[] | null;
  /** 漏洞类型 */
  CategoryType: string | null;
  /** 漏洞威胁等级 */
  Level: string | null;
  /** 漏洞披露时间 */
  SubmitTime: string | null;
  /** 漏洞描述 */
  Description: string;
  /** CVSS V3描述 */
  CVSSV3Desc: string;
  /** 漏洞修复建议 */
  OfficialSolution: string;
  /** 缓解措施 */
  DefenseSolution: string;
  /** 参考链接 */
  Reference: string[];
  /** CVSS V3分数 */
  CVSSV3Score: number;
  /** 受漏洞影响的组件列表 */
  ComponentList: VulAffectedComponentInfo[];
  /** 影响本地镜像数 */
  LocalImageCount: number;
  /** 影响容器数 */
  ContainerCount: number;
  /** 影响仓库镜像数 */
  RegistryImageCount: number;
  /** 漏洞子类型 */
  Category: string;
  /** 影响最新本地镜像数 */
  LocalNewestImageCount: number;
  /** 影响最新仓库镜像数 */
  RegistryNewestImageCount: number;
  /** 漏洞PocID */
  PocID: string;
  /** 防御状态，NO_DEFENDED:未防御，DEFENDED:已防御 */
  DefenceStatus: string | null;
  /** 漏洞防御主机范围: MANUAL:自选主机节点，ALL:全部 */
  DefenceScope: string | null;
  /** 漏洞防御主机数量 */
  DefenceHostCount: number | null;
  /** 已防御攻击次数 */
  DefendedCount: number | null;
  /** 是否已扫描，NOT_SCAN:未扫描,SCANNED:已扫描 */
  ScanStatus: string | null;
}

/** 漏洞扫描忽略的本地镜像 */
declare interface VulIgnoreLocalImage {
  /** 记录ID */
  ID: number;
  /** 镜像ID */
  ImageID: string;
  /** 镜像名称 */
  ImageName: string;
  /** 镜像大小 */
  ImageSize: number;
  /** 漏洞PocID */
  PocID: string;
}

/** 漏洞扫描忽略的仓库镜像 */
declare interface VulIgnoreRegistryImage {
  /** 记录ID */
  ID: number;
  /** 仓库名称 */
  RegistryName: string;
  /** 镜像版本 */
  ImageVersion: string;
  /** 仓库地址 */
  RegistryPath: string;
  /** 镜像ID */
  ImageID: string;
  /** 漏洞PocID */
  PocID: string;
}

/** 漏洞列表信息 */
declare interface VulInfo {
  /** 漏洞名称 */
  Name: string;
  /** 漏洞标签 */
  Tags: string[] | null;
  /** CVSS V3分数 */
  CVSSV3Score: number | null;
  /** 风险等级 */
  Level: string | null;
  /** CVE编号 */
  CVEID: string;
  /** 漏洞子类型 */
  Category: string | null;
  /** 首次发现时间 */
  FoundTime: string | null;
  /** 最近发现时间 */
  LatestFoundTime: string | null;
  /** 漏洞ID */
  ID: number;
  /** 影响本地镜像数 */
  LocalImageCount: number;
  /** 影响容器数 */
  ContainerCount: number | null;
  /** 影响仓库镜像数 */
  RegistryImageCount: number | null;
  /** 漏洞PocID */
  PocID: string | null;
  /** 防御状态，NO_DEFENDED:未防御，DEFENDED:已防御 */
  DefenceStatus: string | null;
  /** 漏洞防御主机范围: MANUAL:自选主机节点，ALL:全部 */
  DefenceScope: string | null;
  /** 漏洞防御主机数量 */
  DefenceHostCount: number | null;
  /** 已防御攻击次数 */
  DefendedCount: number | null;
}

/** 漏洞扫描的镜像信息 */
declare interface VulScanImageInfo {
  /** 镜像ID */
  ImageID: string;
  /** 镜像名称 */
  ImageName: string;
  /** 镜像大小 */
  Size: number;
  /** 任务状态:SCANNING:扫描中 FAILED:失败 FINISHED:完成 CANCELED:取消 */
  ScanStatus: string;
  /** 扫描时长 */
  ScanDuration: number | null;
  /** 高危漏洞数 */
  HighLevelVulCount: number;
  /** 中危漏洞数 */
  MediumLevelVulCount: number;
  /** 低危漏洞数 */
  LowLevelVulCount: number;
  /** 严重漏洞数 */
  CriticalLevelVulCount: number;
  /** 本地镜像漏洞扫描任务ID */
  TaskID: number;
  /** 漏洞扫描的开始时间 */
  ScanStartTime: string;
  /** 漏洞扫描的结束时间 */
  ScanEndTime: string;
  /** 失败原因:TIMEOUT:超时 TOO_MANY:任务过多 OFFLINE:离线 */
  ErrorStatus: string;
}

/** 漏洞趋势信息 */
declare interface VulTendencyInfo {
  /** 漏洞趋势列表 */
  VulSet: RunTimeTendencyInfo[];
  /** 漏洞影响的镜像类型：LOCAL：本地镜像REGISTRY: 仓库镜像 */
  ImageType: string;
}

/** 漏洞Top排名信息 */
declare interface VulTopRankingInfo {
  /** 漏洞名称 */
  VulName: string;
  /** 威胁等级,CRITICAL:严重 HIGH:高/MIDDLE:中/LOW:低 */
  Level: string;
  /** 影响的镜像数 */
  AffectedImageCount: number;
  /** 影响的容器数 */
  AffectedContainerCount: number;
  /** 漏洞ID */
  ID: number;
  /** 漏洞PocID */
  PocID: string;
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

declare interface AddAndPublishNetworkFirewallPolicyDetailRequest {
  /** 集群Id */
  ClusterId: string;
  /** 策略名 */
  PolicyName: string;
  /** 入站规则全部允许：1全部拒绝 ：2自定义：3 */
  FromPolicyRule: number;
  /** 出站规则全部允许：1全部拒绝 ：2自定义：3 */
  ToPolicyRule: number;
  /** pod选择器 */
  PodSelector: string;
  /** 命名空间 */
  Namespace?: string;
  /** 策略描述 */
  Description?: string;
  /** 自定义规则 */
  CustomPolicy?: NetworkCustomPolicy[];
}

declare interface AddAndPublishNetworkFirewallPolicyDetailResponse {
  /** 返回创建的任务的ID，为0表示创建失败。 */
  TaskId: number;
  /** 创建任务的结果，"Succ"为成功，"Failed"为失败 */
  Result: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface AddAndPublishNetworkFirewallPolicyYamlDetailRequest {
  /** 集群Id */
  ClusterId: string;
  /** 策略名 */
  PolicyName: string;
  /** base64编码的networkpolicy yaml字符串 */
  Yaml?: string;
  /** 策略描述 */
  Description?: string;
}

declare interface AddAndPublishNetworkFirewallPolicyYamlDetailResponse {
  /** 返回创建的任务的ID，为0表示创建失败。 */
  TaskId: number;
  /** 创建任务的结果，"Succ"为成功，"Failed"为失败 */
  Result: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
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

declare interface AddComplianceAssetPolicySetToWhitelistRequest {
  /** 资产ID+检查项IDs. 列表 */
  AssetPolicySetList: ComplianceAssetPolicySetItem[];
}

declare interface AddComplianceAssetPolicySetToWhitelistResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface AddCompliancePolicyAssetSetToWhitelistRequest {
  /** 检查项ID */
  CustomerPolicyItemId: number;
  /** 需要忽略指定检查项内的资产ID列表 */
  CustomerAssetItemIdSet?: number[];
}

declare interface AddCompliancePolicyAssetSetToWhitelistResponse {
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

declare interface AddEditImageAutoAuthorizedRuleRequest {
  /** 授权范围类别，MANUAL:自选主机节点，ALL:全部镜像 */
  RangeType: string;
  /** 每天最大的镜像授权数限制, 0表示无限制 */
  MaxDailyCount: number;
  /** 规则是否生效，0:不生效，1:已生效 */
  IsEnabled: number;
  /** 自选主机id，当授权范围为MANUAL:自选主机时且HostIdFilters为空时，必填 */
  HostIdSet?: string[];
  /** 规则id，在编辑时，必填 */
  RuleId?: number;
  /** 根据条件过滤，当授权范围为MANUAL:自选主机时且HostIdSet为空时，必填 */
  HostIdFilters?: AssetFilters[];
  /** 根据条件过滤而且排除指定主机id */
  ExcludeHostIdSet?: string[];
}

declare interface AddEditImageAutoAuthorizedRuleResponse {
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

declare interface AddEscapeWhiteListRequest {
  /** 加白名单事件类型 ESCAPE_CGROUPS：利用cgroup机制逃逸 ESCAPE_TAMPER_SENSITIVE_FILE：篡改敏感文件逃逸 ESCAPE_DOCKER_API：访问Docker API接口逃逸 ESCAPE_VUL_OCCURRED：逃逸漏洞利用 MOUNT_SENSITIVE_PTAH：敏感路径挂载 PRIVILEGE_CONTAINER_START：特权容器 PRIVILEGE：程序提权逃逸 */
  EventType: string[];
  /** 加白名单镜像ID数组 */
  ImageIDs: string[];
}

declare interface AddEscapeWhiteListResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface AddIgnoreVulRequest {
  /** 漏洞PocID信息列表 */
  List: ModifyIgnoreVul[];
}

declare interface AddIgnoreVulResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface AddNetworkFirewallPolicyDetailRequest {
  /** 集群Id */
  ClusterId: string;
  /** 策略名 */
  PolicyName: string;
  /** 入站规则全部允许：1全部拒绝 ：2自定义：3 */
  FromPolicyRule: number;
  /** 出站规则全部允许：1全部拒绝 ：2自定义：3 */
  ToPolicyRule: number;
  /** pod选择器 */
  PodSelector: string;
  /** 命名空间 */
  Namespace?: string;
  /** 策略描述 */
  Description?: string;
  /** 自定义规则 */
  CustomPolicy?: NetworkCustomPolicy[];
}

declare interface AddNetworkFirewallPolicyDetailResponse {
  /** 返回创建的任务的ID，为0表示创建失败。 */
  TaskId: number;
  /** 创建任务的结果，"Succ"为成功，"Failed"为失败 */
  Result: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface AddNetworkFirewallPolicyYamlDetailRequest {
  /** 集群Id */
  ClusterId: string;
  /** 策略名 */
  PolicyName: string;
  /** base64编码的networkpolicy yaml字符串 */
  Yaml?: string;
  /** 策略描述 */
  Description?: string;
}

declare interface AddNetworkFirewallPolicyYamlDetailResponse {
  /** 返回创建的任务的ID，为0表示创建失败。 */
  TaskId: number;
  /** 创建任务的结果，"Succ"为成功，"Failed"为失败 */
  Result: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CheckNetworkFirewallPolicyYamlRequest {
  /** 集群Id */
  ClusterId: string;
  /** 策略名 */
  PolicyName: string;
  /** base64编码的networkpolicy yaml字符串 */
  Yaml?: string;
  /** 策略描述 */
  Description?: string;
}

declare interface CheckNetworkFirewallPolicyYamlResponse {
  /** 返回创建的任务的ID，为0表示创建失败。 */
  TaskId: number;
  /** 创建任务的结果，"Succ"为成功，"Failed"为失败 */
  Result: string;
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

declare interface ConfirmNetworkFirewallPolicyRequest {
  /** 集群Id */
  ClusterId: string;
  /** 策略Id数组 */
  Id: number[];
}

declare interface ConfirmNetworkFirewallPolicyResponse {
  /** 返回创建的任务的ID，为0表示创建失败。 */
  TaskId: number;
  /** 创建确认任务的结果，"Succ"为成功，"Failed"为失败 */
  Result: string;
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

declare interface CreateAssetImageVirusExportJobRequest {
  /** 导出字段 */
  ExportField: string[];
  /** 镜像id */
  ImageID: string;
  /** 需要返回的数量，默认为10，最大值为10000 */
  Filters?: AssetFilters[];
  /** 偏移量，默认为0。 */
  Limit?: number;
  /** 过滤参数,"Filters":[{"Name":"Status","Values":["2"]}] */
  Offset?: number;
  /** 排序字段 */
  By?: string;
  /** 升序降序,asc desc */
  Order?: string;
}

declare interface CreateAssetImageVirusExportJobResponse {
  /** 导出任务ID，前端拿着任务ID查询任务进度 */
  JobId: string;
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

declare interface CreateComponentExportJobRequest {
  /** 镜像ID */
  ImageID: string;
  /** 导出字段 */
  ExportField: string[];
  /** 需要返回的数量，默认为10000，最大值为10000 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤条件。ComponentName- String - 是否必填：否 - 镜像组件名称ComponentVersion- String - 是否必填：否 - 镜像组件版本ComponentType- String - 是否必填：否 - 镜像组件类型VulLevel- String - 是否必填：否 - 漏洞威胁等级HasVul- String - 是否必填：否 -是否有漏洞；true：是，false，否；不传或ALL ：全部 */
  Filters?: AssetFilters[];
  /** 排序字段 */
  By?: string;
  /** 排序方式desc ，asc */
  Order?: string;
}

declare interface CreateComponentExportJobResponse {
  /** 导出任务ID，前端拿着任务ID查询任务进度 */
  JobId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateDefenceVulExportJobRequest {
  /** 需要返回的数量，默认为10000，最大值为10000 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤条件。Level- String - 是否必填：否 - 威胁等级，CRITICAL:严重 HIGH:高/MIDDLE:中/LOW:低CVEID- string - 是否必填：否 - CVE编号Name- string -是否必填: 否 - 漏洞名称 */
  Filters?: RunTimeFilters[];
  /** 排序方式 */
  Order?: string;
  /** 排序字段 */
  By?: string;
}

declare interface CreateDefenceVulExportJobResponse {
  /** 导出任务ID，前端拿着任务ID查询任务进度 */
  JobId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateEmergencyVulExportJobRequest {
  /** 需要返回的数量，默认为50000，最大值为50000 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤条件。Level- String - 是否必填：否 - 威胁等级，CRITICAL:严重 HIGH:高/MIDDLE:中/LOW:低Tags- string - 是否必填：否 - 漏洞标签，POC，EXP。CanBeFixed- string - 是否必填：否 - 是否可修复true,false。CVEID- string - 是否必填：否 - CVE编号ImageID- string - 是否必填：否 - 镜像IDImageName- String -是否必填: 否 - 镜像名称ContainerID- string -是否必填: 否 - 容器IDContainerName- string -是否必填: 否 - 容器名称ComponentName- string -是否必填: 否 - 组件名称ComponentVersion- string -是否必填: 否 - 组件版本Name- string -是否必填: 否 - 漏洞名称 */
  Filters?: RunTimeFilters[];
  /** 排序方式 */
  Order?: string;
  /** 排序字段 */
  By?: string;
}

declare interface CreateEmergencyVulExportJobResponse {
  /** 导出任务ID，前端拿着任务ID查询任务进度 */
  JobId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateEscapeEventsExportJobRequest {
  /** 需要返回的数量，最大值为10000 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤参数,Status：EVENT_UNDEAL:未处理，EVENT_DEALED:已处理，EVENT_INGNORE:忽略 */
  Filters?: RunTimeFilters[];
  /** 升序降序,asc desc */
  Order?: string;
  /** 排序字段：latest_found_time */
  By?: string;
  /** 导出字段 */
  ExportField?: string[];
}

declare interface CreateEscapeEventsExportJobResponse {
  /** 导出任务ID，前端拿着任务ID查询任务进度 */
  JobId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateEscapeWhiteListExportJobRequest {
  /** 过滤条件。EventType- String - 是否必填：否 - 加白事件类型，ESCAPE_CGROUPS：利用cgroup机制逃逸，ESCAPE_TAMPER_SENSITIVE_FILE：篡改敏感文件逃逸， ESCAPE_DOCKER_API：访问Docker API接口逃逸，ESCAPE_VUL_OCCURRED：逃逸漏洞利用，MOUNT_SENSITIVE_PTAH：敏感路径挂载，PRIVILEGE_CONTAINER_START：特权容器， PRIVILEGE：程序提权逃逸ImageName- string - 是否必填：否 - 镜像名称。ImageID- string - 是否必填：否 - 镜像ID。 */
  Filters?: RunTimeFilters[];
  /** 需要返回的数量，默认为10000，最大值为10000 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 排序方式：asc/desc */
  Order?: string;
  /** 排序字段：主机数量：HostCount，容器数量：ContainerCount，更新时间：UpdateTime */
  By?: string;
}

declare interface CreateEscapeWhiteListExportJobResponse {
  /** 导出任务ID，前端拿着任务ID查询任务进度 */
  JobId: string;
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

declare interface CreateHostExportJobRequest {
  /** 过滤条件。Status - String - 是否必填：否 - agent状态筛选，"ALL":"全部"(或不传该字段),"UNINSTALL"："未安装","OFFLINE"："离线", "ONLINE"："防护中"HostName - String - 是否必填：否 - 主机名筛选Group- String - 是否必填：否 - 主机群组搜索HostIP- string - 是否必填：否 - 主机ip搜索HostID- string - 是否必填：否 - 主机id搜索DockerVersion- string - 是否必填：否 - docker版本搜索MachineType- string - 是否必填：否 - 主机来源MachineType搜索，"ALL":"全部"(或不传该字段),主机来源：["CVM", "ECM", "LH", "BM"] 中的之一为腾讯云服务器；["Other"]之一非腾讯云服务器；DockerStatus- string - 是否必填：否 - docker安装状态，"ALL":"全部"(或不传该字段),"INSTALL":"已安装","UNINSTALL":"未安装"ProjectID- string - 是否必填：否 - 所属项目id搜索Tag:xxx(tag:key)- string- 是否必填：否 - 标签键值搜索 示例Filters":[{"Name":"tag:tke-kind","Values":["service"]}] */
  Filters?: AssetFilters[];
  /** 偏移量，默认为0。 */
  Limit?: number;
  /** 需要返回的数量，默认为10，最大值为10000 */
  Offset?: number;
  /** 排序字段 */
  By?: string;
  /** 升序降序,asc desc */
  Order?: string;
  /** 导出字段 */
  ExportField?: string[];
}

declare interface CreateHostExportJobResponse {
  /** 导出任务ID，前端拿着任务ID查询任务进度 */
  JobId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateImageExportJobRequest {
  /** 过滤条件。ImageName- String - 是否必填：否 - 镜像名称筛选，ScanStatus - String - 是否必填：否 - 镜像扫描状态notScan，scanning，scanned，scanErrImageID- String - 是否必填：否 - 镜像ID筛选，SecurityRisk- String - 是否必填：否 - 安全风险，VulCnt 、VirusCnt、RiskCnt、IsTrustImage */
  Filters?: RunTimeFilters[];
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 排序字段 */
  By?: string;
  /** 排序方式 asc,desc */
  Order?: string;
  /** 导出字段 */
  ExportField?: string[];
}

declare interface CreateImageExportJobResponse {
  /** 导出任务ID，前端拿着任务ID查询任务进度 */
  JobId: string;
  /** excel文件下载地址 */
  DownloadUrl: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateNetworkFirewallClusterRefreshRequest {
}

declare interface CreateNetworkFirewallClusterRefreshResponse {
  /** 返回创建的集群检查任务的ID，为0表示创建失败。 */
  TaskId: number;
  /** 创建检查任务的结果，"Succ"为成功，"Failed"为失败 */
  Result: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateNetworkFirewallPolicyDiscoverRequest {
  /** 集群Id */
  ClusterId: string;
}

declare interface CreateNetworkFirewallPolicyDiscoverResponse {
  /** 返回创建的集群检查任务的ID，为0表示创建失败。 */
  TaskId: number;
  /** 创建检查任务的结果，"Succ"为成功，"Failed"为失败 */
  Result: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateNetworkFirewallPublishRequest {
  /** 集群Id */
  ClusterId: string;
  /** 策略Id数组 */
  Id: number[];
}

declare interface CreateNetworkFirewallPublishResponse {
  /** 返回创建的任务的ID，为0表示创建失败。 */
  TaskId: number;
  /** 创建任务的结果，"Succ"为成功，"Failed"为失败 */
  Result: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateNetworkFirewallUndoPublishRequest {
  /** 集群Id */
  ClusterId: string;
  /** 策略Id数组 */
  Id: number[];
}

declare interface CreateNetworkFirewallUndoPublishResponse {
  /** 返回创建的任务的ID，为0表示创建失败。 */
  TaskId: number;
  /** 创建任务的结果，"Succ"为成功，"Failed"为失败 */
  Result: string;
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

declare interface CreateProcessEventsExportJobRequest {
  /** 需要返回的数量，最大值为10000 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤参数,Status：EVENT_UNDEAL:未处理，EVENT_DEALED:已处理，EVENT_INGNORE:忽略 */
  Filters?: AssetFilters[];
  /** 升序降序,asc desc */
  Order?: string;
  /** 排序字段：latest_found_time */
  By?: string;
  /** 导出字段 */
  ExportField?: string[];
}

declare interface CreateProcessEventsExportJobResponse {
  /** 导出任务ID，前端拿着任务ID查询任务进度 */
  JobId: string;
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

declare interface CreateRiskDnsEventExportJobRequest {
  /** 过滤条件。EventStatus- String - 是否必填：否 - 事件状态，待处理：EVENT_UNDEAL，EVENT_DEALED：已处理，已忽略：EVENT_IGNORE， EVENT_ADD_WHITE：已加白ContainerStatus- String - 是否必填：否 - 容器运行状态筛选，已创建：CREATED,正常运行：RUNNING, 暂定运行：PAUSED, 停止运行：	STOPPED，重启中：RESTARTING, 迁移中：REMOVING, 销毁：DESTROYED ContainerNetStatus- String -是否必填: 否 - 容器网络状态筛选 未隔离：NORMAL，已隔离：ISOLATED，隔离失败：ISOLATE_FAILED，解除隔离失败：RESTORE_FAILED，解除隔离中：RESTORING，隔离中：ISOLATINGEventType - String -是否必填: 否 - 事件类型，恶意域名请求：DOMAIN，恶意IP请求：IPTimeRange- String -是否必填: 否 - 时间范围，第一个值表示开始时间，第二个值表示结束时间 RiskDns- string - 是否必填：否 - 恶意域名。RiskIP- string - 是否必填：否 - 恶意IP。ContainerName- string - 是否必填：否 - 容器名称。ContainerID- string - 是否必填：否 - 容器ID。ImageName- string - 是否必填：否 - 镜像名称。ImageID- string - 是否必填：否 - 镜像ID。HostName- string - 是否必填：否 - 主机名称。HostIP- string - 是否必填：否 - 内网IP。PublicIP- string - 是否必填：否 - 外网IP。 */
  Filters?: RunTimeFilters[];
  /** 需要返回的数量，最大值为100000 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 排序方式：asc/desc */
  Order?: string;
  /** 排序字段：事件数量：EventCount */
  By?: string;
}

declare interface CreateRiskDnsEventExportJobResponse {
  /** 导出任务ID，前端拿着任务ID查询任务进度 */
  JobId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateSearchTemplateRequest {
  /** 搜索模板 */
  SearchTemplate: SearchTemplate;
}

declare interface CreateSearchTemplateResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateSystemVulExportJobRequest {
  /** 需要返回的数量，默认为50000，最大值为50000 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤条件。OnlyAffectedContainer- string - 是否必填：否 - 仅展示影响容器的漏洞true,falseOnlyAffectedNewestImage-string - 是否必填：否 - 仅展示影响最新版本镜像的漏洞true,falseLevel- String - 是否必填：否 - 威胁等级，CRITICAL:严重 HIGH:高/MIDDLE:中/LOW:低Tags- string - 是否必填：否 - 漏洞标签，POC，EXP。CanBeFixed- string - 是否必填：否 - 是否可修复true,false。CategoryType- string - 是否必填：否 - 漏洞子类型CVEID- string - 是否必填：否 - CVE编号ImageID- string - 是否必填：否 - 镜像IDImageName- String -是否必填: 否 - 镜像名称ContainerID- string -是否必填: 否 - 容器IDContainerName- string -是否必填: 否 - 容器名称ComponentName- string -是否必填: 否 - 组件名称ComponentVersion- string -是否必填: 否 - 组件版本Name- string -是否必填: 否 - 漏洞名称FocusOnType - string - 是否必填：否 -关注紧急度类型 。ALL :全部，SERIOUS_LEVEL： 严重和高危 ，IS_SUGGEST： 重点关注，POC_EXP 有Poc或Exp ，NETWORK_EXP: 远程Exp */
  Filters?: RunTimeFilters[];
  /** 排序方式 */
  Order?: string;
  /** 排序字段 */
  By?: string;
}

declare interface CreateSystemVulExportJobResponse {
  /** 导出任务ID，前端拿着任务ID查询任务进度 */
  JobId: string;
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

declare interface CreateVulContainerExportJobRequest {
  /** 漏洞PocID */
  PocID: string;
  /** 需要返回的数量，默认为50000，最大值为50000 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤条件。OnlyAffectedNewestImage- Bool- 是否必填：否 - 仅展示影响最新版本镜像的漏洞ContainerID- string - 是否必填：否 - 容器IDContainerName- String -是否必填: 否 - 容器名称 */
  Filters?: RunTimeFilters[];
}

declare interface CreateVulContainerExportJobResponse {
  /** 导出任务ID，前端拿着任务ID查询任务进度 */
  JobId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateVulDefenceEventExportJobRequest {
  /** 过滤条件。Status- String - 是否必填：否 - 插件状态，待处理：EVENT_UNDEAL，EVENT_DEALED：已处理，已忽略：EVENT_IGNORE， EVENT_DEFENDED：已防御ContainerStatus- String - 是否必填：否 - 容器运行状态筛选，已创建：CREATED,正常运行：RUNNING, 暂定运行：PAUSED, 停止运行：	STOPPED，重启中：RESTARTING, 迁移中：REMOVING, 销毁：DESTROYED ContainerNetStatus- String -是否必填: 否 - 容器网络状态筛选 未隔离：NORMAL，已隔离：ISOLATED，隔离失败：ISOLATE_FAILED，解除隔离失败：RESTORE_FAILED，解除隔离中：RESTORING，隔离中：ISOLATINGEventType - String -是否必填: 否 - 入侵状态，防御成功：EVENT_DEFENDED，尝试攻击：EVENT_ATTACK TimeRange- String -是否必填: 否 - 时间范围，第一个值表示开始时间，第二个值表示结束时间 VulName- string - 是否必填：否 - 漏洞名称。CVEID- string - 是否必填：否 - CVE编号。SourceIP- string - 是否必填：否 - 攻击源IP。ContainerName- string - 是否必填：否 - 容器名称。ContainerID- string - 是否必填：否 - 容器ID。ImageName- string - 是否必填：否 - 镜像名称。ImageID- string - 是否必填：否 - 镜像ID。HostName- string - 是否必填：否 - 主机名称。HostIP- string - 是否必填：否 - 内网IP。 */
  Filters?: RunTimeFilters[];
  /** 需要返回的数量，最大值为100000 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 排序方式：asc/desc */
  Order?: string;
  /** 排序字段：事件数量：EventCount */
  By?: string;
}

declare interface CreateVulDefenceEventExportJobResponse {
  /** 导出任务ID，前端拿着任务ID查询任务进度 */
  JobId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateVulDefenceHostExportJobRequest {
  /** 过滤条件。Status- String - 是否必填：否 - 插件状态，正常：SUCCESS，异常：FAIL， NO_DEFENCE:未防御KeyWords- string - 是否必填：否 - 主机名称/IP。 */
  Filters?: RunTimeFilters[];
  /** 需要返回的数量，最大值为100000 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 排序方式：asc/desc */
  Order?: string;
  /** 排序字段：更新时间：ModifyTime/首次开启时间：CreateTime */
  By?: string;
}

declare interface CreateVulDefenceHostExportJobResponse {
  /** 导出任务ID，前端拿着任务ID查询任务进度 */
  JobId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateVulExportJobRequest {
  /** 镜像ID */
  ImageID: string;
  /** 导出字段 */
  ExportField: string[];
  /** 需要返回的数量，默认为10000，最大值为10000 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤条件。ComponentName- String - 是否必填：否 - 镜像组件名称ComponentVersion- String - 是否必填：否 - 镜像组件版本ComponentType- String - 是否必填：否 - 镜像组件类型VulLevel- String - 是否必填：否 - 漏洞威胁等级HasVul- String - 是否必填：否 -是否有漏洞；true：是，false，否；不传或ALL ：全部 */
  Filters?: AssetFilters[];
  /** 排序字段 */
  By?: string;
  /** 排序方式desc ，asc */
  Order?: string;
}

declare interface CreateVulExportJobResponse {
  /** 导出任务ID，前端拿着任务ID查询任务进度 */
  JobId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateVulImageExportJobRequest {
  /** 漏洞PocID */
  PocID: string;
  /** 需要返回的数量，默认为50000，最大值为50000 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤条件。OnlyAffectedNewestImage- Bool- 是否必填：否 - 仅展示影响最新版本镜像的漏洞ImageID- string - 是否必填：否 - 镜像IDImageName- String -是否必填: 否 - 镜像名称ClientIP- string -是否必填: 否 - 内网IPPublicIP- string -是否必填: 否 - 外网IPComponentName- string -是否必填: 否 - 组件名称ComponentVersion- string -是否必填: 否 - 组件版本HostName- string -是否必填: 否 - 主机名称 */
  Filters?: RunTimeFilters[];
  /** 排序方式 */
  Order?: string;
  /** 排序字段 */
  By?: string;
}

declare interface CreateVulImageExportJobResponse {
  /** 导出任务ID，前端拿着任务ID查询任务进度 */
  JobId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateVulScanTaskRequest {
  /** 本地镜像扫描范围类型。ALL:全部本地镜像，NOT_SCAN：全部已授权未扫描本地镜像，IMAGEIDS:自选本地镜像ID */
  LocalImageScanType?: string;
  /** 根据已授权的本地镜像IDs扫描，优先权高于根据满足条件的已授权的本地镜像。 */
  LocalImageIDs?: string[];
  /** 仓库镜像扫描范围类型。ALL:全部仓库镜像，NOT_SCAN：全部已授权未扫描仓库镜像，IMAGEIDS:自选仓库镜像ID */
  RegistryImageScanType?: string;
  /** 根据已授权的仓库镜像IDs扫描，优先权高于根据满足条件的已授权的仓库镜像。 */
  RegistryImageIDs?: number[];
  /** 本地镜像重新漏洞扫描时的任务ID */
  LocalTaskID?: number;
  /** 仓库镜像重新漏洞扫描时的任务ID */
  RegistryTaskID?: number;
}

declare interface CreateVulScanTaskResponse {
  /** 本地镜像重新漏洞扫描时的任务ID */
  LocalTaskID: number;
  /** 仓库镜像重新漏洞扫描时的任务ID */
  RegistryTaskID: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateWebVulExportJobRequest {
  /** 需要返回的数量，默认为50000，最大值为50000 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤条件。OnlyAffectedContainer- string - 是否必填：否 - 仅展示影响容器的漏洞true,falseOnlyAffectedNewestImage-string - 是否必填：否 - 仅展示影响最新版本镜像的漏洞true,falseLevel- String - 是否必填：否 - 威胁等级，CRITICAL:严重 HIGH:高/MIDDLE:中/LOW:低Tags- string - 是否必填：否 - 漏洞标签，POC，EXP。CanBeFixed- string - 是否必填：否 - 是否可修复true,false。CategoryType- string - 是否必填：否 - 漏洞子类型CVEID- string - 是否必填：否 - CVE编号ImageID- string - 是否必填：否 - 镜像IDImageName- String -是否必填: 否 - 镜像名称ContainerID- string -是否必填: 否 - 容器IDContainerName- string -是否必填: 否 - 容器名称ComponentName- string -是否必填: 否 - 组件名称ComponentVersion- string -是否必填: 否 - 组件版本Name- string -是否必填: 否 - 漏洞名称FocusOnType - string - 是否必填：否 -关注紧急度类型 。ALL :全部，SERIOUS_LEVEL： 严重和高危 ，IS_SUGGEST： 重点关注，POC_EXP 有Poc或Exp ，NETWORK_EXP: 远程Exp */
  Filters?: RunTimeFilters[];
  /** 排序方式 */
  Order?: string;
  /** 排序字段 */
  By?: string;
}

declare interface CreateWebVulExportJobResponse {
  /** 导出任务ID，前端拿着任务ID查询任务进度 */
  JobId: string;
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

declare interface DeleteComplianceAssetPolicySetFromWhitelistRequest {
  /** 资产ID */
  AssetItemId: number;
  /** 需要忽略指定资产内的检查项ID列表 */
  CustomerPolicyItemIdSet?: number[];
}

declare interface DeleteComplianceAssetPolicySetFromWhitelistResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteCompliancePolicyAssetSetFromWhitelistRequest {
  /** （检查项ID+资产ID列表）的列表 */
  PolicyAssetSetList: CompliancePolicyAssetSetItem[];
}

declare interface DeleteCompliancePolicyAssetSetFromWhitelistResponse {
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

declare interface DeleteEscapeWhiteListRequest {
  /** 白名单记录ID数组 */
  IDSet: number[];
}

declare interface DeleteEscapeWhiteListResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteIgnoreVulRequest {
  /** 漏洞PocID 信息列表 */
  List: ModifyIgnoreVul[];
}

declare interface DeleteIgnoreVulResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteMachineRequest {
  /** 客户端Uuid */
  Uuid: string;
}

declare interface DeleteMachineResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteNetworkFirewallPolicyDetailRequest {
  /** 集群Id */
  ClusterId: string;
  /** 策略Id数组 */
  Id: number[];
}

declare interface DeleteNetworkFirewallPolicyDetailResponse {
  /** 返回创建的任务的ID，为0表示创建失败。 */
  TaskId: number;
  /** 创建删除任务的结果，"Succ"为成功，"Failed"为失败 */
  Result: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteReverseShellEventsRequest {
  /** 事件ids */
  EventIdSet: string[];
}

declare interface DeleteReverseShellEventsResponse {
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

declare interface DeleteRiskSyscallEventsRequest {
  /** 事件ids */
  EventIdSet: string[];
}

declare interface DeleteRiskSyscallEventsResponse {
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

declare interface DeleteSearchTemplateRequest {
  /** 模板ID */
  Id: number;
}

declare interface DeleteSearchTemplateResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeABTestConfigRequest {
  /** 灰度项目名称 */
  ProjectName?: string;
}

declare interface DescribeABTestConfigResponse {
  /** 灰度项目配置 */
  Config: ABTestConfig[];
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

declare interface DescribeAbnormalProcessEventTendencyRequest {
  /** 开始时间 */
  StartTime: string;
  /** 结束时间 */
  EndTime: string;
}

declare interface DescribeAbnormalProcessEventTendencyResponse {
  /** 待处理异常进程事件趋势 */
  List: AbnormalProcessEventTendencyInfo[];
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

declare interface DescribeAbnormalProcessLevelSummaryRequest {
}

declare interface DescribeAbnormalProcessLevelSummaryResponse {
  /** 异常进程高危待处理事件数 */
  HighLevelEventCount: number;
  /** 异常进程中危待处理事件数 */
  MediumLevelEventCount: number;
  /** 异常进程低危待处理事件数 */
  LowLevelEventCount: number;
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

declare interface DescribeAgentDaemonSetCmdRequest {
  /** 是否是腾讯云 */
  IsCloud: boolean;
  /** 网络类型：basic-基础网络，private-VPC, public-公网，direct-专线 */
  NetType: string;
  /** 地域标示, NetType=direct时必填 */
  RegionCode?: string;
  /** VpcId, NetType=direct时必填 */
  VpcId?: string;
  /** 命令有效期，非腾讯云时必填 */
  ExpireDate?: string;
}

declare interface DescribeAgentDaemonSetCmdResponse {
  /** 安装命令 */
  Command: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAgentInstallCommandRequest {
  /** 是否是腾讯云 */
  IsCloud: boolean;
  /** 网络类型：basic-基础网络，private-VPC, public-公网，direct-专线 */
  NetType: string;
  /** 地域标示, NetType=direct时必填 */
  RegionCode?: string;
  /** VpcId, NetType=direct时必填 */
  VpcId?: string;
  /** 命令有效期，非腾讯云时必填 */
  ExpireDate?: string;
  /** 标签ID列表，IsCloud=false时才会生效 */
  TagIds?: number[];
}

declare interface DescribeAgentInstallCommandResponse {
  /** linux系统安装命令 */
  LinuxCommand: string;
  /** windows系统安装命令（windows2008及以上） */
  WindowsCommand: string;
  /** windows系统安装命令第一步（windows2003） */
  WindowsStepOne: string;
  /** windows系统安装命令第二步（windows2003） */
  WindowsStepTwo: string;
  /** windows版agent下载链接 */
  WindowsDownloadUrl: string;
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
  /** 所属项目 */
  Project: ProjectInfo;
  /** 标签 */
  Tags: TagInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAssetHostListRequest {
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤条件。Status - String - 是否必填：否 - agent状态筛选，"ALL":"全部"(或不传该字段),"UNINSTALL"："未安装","OFFLINE"："离线", "ONLINE"："防护中"HostName - String - 是否必填：否 - 主机名筛选Group- String - 是否必填：否 - 主机群组搜索HostIP- string - 是否必填：否 - 主机ip搜索HostID- string - 是否必填：否 - 主机id搜索DockerVersion- string - 是否必填：否 - docker版本搜索MachineType- string - 是否必填：否 - 主机来源MachineType搜索，"ALL":"全部"(或不传该字段),主机来源：["CVM", "ECM", "LH", "BM"] 中的之一为腾讯云服务器；["Other"]之一非腾讯云服务器；DockerStatus- string - 是否必填：否 - docker安装状态，"ALL":"全部"(或不传该字段),"INSTALL":"已安装","UNINSTALL":"未安装"ProjectID- string - 是否必填：否 - 所属项目id搜索Tag:xxx(tag:key)- string- 是否必填：否 - 标签键值搜索 示例Filters":[{"Name":"tag:tke-kind","Values":["service"]}] */
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

declare interface DescribeAssetSyncLastTimeRequest {
}

declare interface DescribeAssetSyncLastTimeResponse {
  /** 资产最近同步时间 */
  AssetSyncLastTime: string;
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

declare interface DescribeAutoAuthorizedRuleHostRequest {
  /** 规则id */
  RuleId: number;
  /** 需要返回的数量，默认为全部； */
  Limit?: number;
  /** 偏移量，默认为0 */
  Offset?: number;
  /** 排序字段 */
  Order?: string;
  /** 排序方式，asc，desc */
  By?: string;
}

declare interface DescribeAutoAuthorizedRuleHostResponse {
  /** 镜像自动授权规则授权范围主机列表 */
  List: AutoAuthorizedRuleHostInfo[];
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
  /** 未处理恶意外连事件 */
  UnhandledMaliciousConnectionEventCnt: number;
  /** 未处理k8sApi事件 */
  UnhandledK8sApiEventCnt: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeESAggregationsRequest {
  /** ES聚合条件JSON */
  Query: string;
}

declare interface DescribeESAggregationsResponse {
  /** ES聚合结果JSON */
  Data: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeESHitsRequest {
  /** ES查询条件JSON */
  Query: string;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 返回数量，最大值为100。 */
  Limit?: number;
}

declare interface DescribeESHitsResponse {
  /** ES查询结果JSON */
  Data: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeEmergencyVulListRequest {
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤条件。Level- String - 是否必填：否 - 威胁等级，CRITICAL:严重 HIGH:高/MIDDLE:中/LOW:低Tags- string - 是否必填：否 - 漏洞标签，POC，EXP。CanBeFixed- string - 是否必填：否 - 是否可修复true,false。CVEID- string - 是否必填：否 - CVE编号ImageID- string - 是否必填：否 - 镜像IDImageName- String -是否必填: 否 - 镜像名称ContainerID- string -是否必填: 否 - 容器IDContainerName- string -是否必填: 否 - 容器名称ComponentName- string -是否必填: 否 - 组件名称ComponentVersion- string -是否必填: 否 - 组件版本Name- string -是否必填: 否 - 漏洞名称 */
  Filters?: RunTimeFilters[];
  /** 排序方式 */
  Order?: string;
  /** 排序字段 */
  By?: string;
}

declare interface DescribeEmergencyVulListResponse {
  /** 漏洞总数 */
  TotalCount: number;
  /** 漏洞列表 */
  List: EmergencyVulInfo[];
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

declare interface DescribeEscapeEventTendencyRequest {
  /** 结束时间 */
  EndTime: string;
  /** 开始时间 */
  StartTime: string;
}

declare interface DescribeEscapeEventTendencyResponse {
  /** 待处理逃逸事件趋势 */
  List: EscapeEventTendencyInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeEscapeEventTypeSummaryRequest {
}

declare interface DescribeEscapeEventTypeSummaryResponse {
  /** 容器逃逸事件数 */
  ContainerEscapeEventCount: number;
  /** 程序提权事件数 */
  ProcessPrivilegeEventCount: number;
  /** 风险容器事件数 */
  RiskContainerEventCount: number;
  /** 逃逸事件待处理数 */
  PendingEscapeEventCount: number;
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

declare interface DescribeEscapeWhiteListRequest {
  /** 过滤条件。EventType- String - 是否必填：否 - 加白事件类型，ESCAPE_CGROUPS：利用cgroup机制逃逸，ESCAPE_TAMPER_SENSITIVE_FILE：篡改敏感文件逃逸， ESCAPE_DOCKER_API：访问Docker API接口逃逸，ESCAPE_VUL_OCCURRED：逃逸漏洞利用，MOUNT_SENSITIVE_PTAH：敏感路径挂载，PRIVILEGE_CONTAINER_START：特权容器， PRIVILEGE：程序提权逃逸ImageName- string - 是否必填：否 - 镜像名称。ImageID- string - 是否必填：否 - 镜像ID。 */
  Filters?: RunTimeFilters[];
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 排序方式：asc/desc */
  Order?: string;
  /** 排序字段：主机数量：HostCount，容器数量：ContainerCount，更新时间：UpdateTime */
  By?: string;
}

declare interface DescribeEscapeWhiteListResponse {
  /** 总数量 */
  TotalCount: number;
  /** 逃逸白名单列表 */
  List: EscapeWhiteListInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeExportJobDownloadURLRequest {
  /** 任务ID */
  JobID: string;
}

declare interface DescribeExportJobDownloadURLResponse {
  /** 下载链接 */
  DownloadURL: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeExportJobManageListRequest {
  /** 过滤条件。ExportStatus- string -是否必填: 否 - 导出状态 RUNNING: 导出中 SUCCESS:导出完成 FAILURE:失败ExportSource- string -是否必填: 否 - 导出来源 LocalImage: 本地镜像 */
  Filters?: RunTimeFilters[];
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 排序方式 */
  Order?: string;
  /** 排序字段InsertTime: 创建时间 */
  By?: string;
}

declare interface DescribeExportJobManageListResponse {
  /** 总数 */
  TotalCount: number;
  /** 任务列表 */
  List: ExportJobInfo[];
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

declare interface DescribeImageAutoAuthorizedLogListRequest {
  /** 自动授权任务Id */
  TaskId: number;
  /** Status授权结果，SUCCESS:成功，REACH_LIMIT:达到授权上限，LICENSE_INSUFFICIENT:授权数不足 */
  Filters?: AssetFilters[];
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 偏移量，默认为0 */
  Offset?: number;
  /** 排序字段：AuthorizedTime */
  By?: string;
  /** 排序方式，asc，desc */
  Order?: string;
}

declare interface DescribeImageAutoAuthorizedLogListResponse {
  /** 总数量 */
  TotalCount: number;
  /** 自动授权结果镜像列表 */
  List: AutoAuthorizedImageInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeImageAutoAuthorizedRuleRequest {
}

declare interface DescribeImageAutoAuthorizedRuleResponse {
  /** 规则是否生效，0:不生效，1:已生效 */
  IsEnabled: number;
  /** 授权范围类别，MANUAL:自选主机节点，ALL:全部镜像 */
  RangeType: string | null;
  /** 授权范围是自选主机时的主机数量 */
  HostCount: number | null;
  /** 每天最大的镜像授权数限制, 0表示无限制 */
  MaxDailyCount: number | null;
  /** 规则id，用未设置时为0 */
  RuleId: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeImageAutoAuthorizedTaskListRequest {
  /** 开始时间 */
  StartTime: string;
  /** 结束时间 */
  EndTime: string;
  /** 过滤字段Status授权结果，全部授权成功：ALLSUCCSESS，部分授权失败：PARTIALFAIL,全部授权失败：ALLFAILType授权方式，AUTO:自动授权，MANUAL:手动授权Source 镜像来源，LOCAL:本地镜像，REGISTRY:仓库镜像 */
  Filters?: AssetFilters[];
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 偏移量，默认为0 */
  Offset?: number;
}

declare interface DescribeImageAutoAuthorizedTaskListResponse {
  /** 自动授权任务列表 */
  List: ImageAutoAuthorizedTask[];
  /** 总数量 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeImageComponentListRequest {
  /** 镜像ID */
  ImageID: string;
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤条件。ComponentName- String - 是否必填：否 - 镜像组件名称ComponentVersion- String - 是否必填：否 - 镜像组件版本ComponentType- String - 是否必填：否 - 镜像组件类型VulLevel- String - 是否必填：否 - 漏洞威胁等级HasVul- String - 是否必填：否 -是否有漏洞；true：是，false，否；不传或ALL ：全部 */
  Filters?: AssetFilters[];
  /** 排序字段 */
  By?: string;
  /** 排序方式desc ，asc */
  Order?: string;
}

declare interface DescribeImageComponentListResponse {
  /** 总数量 */
  TotalCount: number;
  /** 镜像组件列表 */
  List: ImageComponent[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeImageRegistryNamespaceListRequest {
  /** 本次查询的起始偏移量，默认为0。 */
  Offset?: number;
  /** 本次查询的数据量，默认为10，最大值为100。 */
  Limit?: number;
  /** 查询的过滤条件。Name字段可取值"Namespace"。 */
  Filters?: AssetFilters[];
}

declare interface DescribeImageRegistryNamespaceListResponse {
  /** 可返回的项目空间的总量。 */
  TotalCount: number;
  /** 返回的项目空间列表 */
  NamespaceList: string[];
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

declare interface DescribeIndexListRequest {
}

declare interface DescribeIndexListResponse {
  /** ES 索引信息 */
  Data: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeInspectionReportRequest {
}

declare interface DescribeInspectionReportResponse {
  /** 报告名称 */
  ReportName: string;
  /** 下载链接 */
  ReportUrl: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeLogStorageStatisticRequest {
}

declare interface DescribeLogStorageStatisticResponse {
  /** 总容量（单位：B） */
  TotalSize: number;
  /** 已使用容量（单位：B） */
  UsedSize: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeNetworkFirewallAuditRecordRequest {
  /** 偏移量 */
  Offset?: number;
  /** 每次查询的最大记录数量 */
  Limit?: number;
  /** Name - ActionName 可取值：publish，unpublish，confirm，add，update，delete */
  Filters?: ComplianceFilters[];
  /** 排序字段 */
  By?: string;
  /** 排序方式 asc,desc */
  Order?: string;
}

declare interface DescribeNetworkFirewallAuditRecordResponse {
  /** 集群审计总数 */
  TotalCount: number;
  /** 集群的审计详细信息 */
  AuditList: NetworkAuditRecord[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeNetworkFirewallClusterListRequest {
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

declare interface DescribeNetworkFirewallClusterListResponse {
  /** 集群总数 */
  TotalCount: number;
  /** 集群的详细信息 */
  ClusterInfoList: NetworkClusterInfoItem[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeNetworkFirewallClusterRefreshStatusRequest {
  /** 任务ID */
  TaskId: number;
}

declare interface DescribeNetworkFirewallClusterRefreshStatusResponse {
  /** 任务状态，可能为：Task_Running,Task_Succ,Task_Error,Task_NoExist */
  TaskStatus: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeNetworkFirewallNamespaceLabelListRequest {
  /** 集群id */
  ClusterId: string;
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

declare interface DescribeNetworkFirewallNamespaceLabelListResponse {
  /** 集群总数 */
  TotalCount: number;
  /** 集群空间标签详细信息 */
  ClusterNamespaceLabelList: NetworkClusterNamespaceLabelInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeNetworkFirewallNamespaceListRequest {
  /** 集群id */
  ClusterId: string;
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

declare interface DescribeNetworkFirewallNamespaceListResponse {
  /** 集群总数 */
  TotalCount: number;
  /** 集群的详细信息 */
  ClusterNamespaceList: NetworkClusterNamespaceInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeNetworkFirewallPodLabelsListRequest {
  /** 集群id */
  ClusterId: string;
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

declare interface DescribeNetworkFirewallPodLabelsListResponse {
  /** 集群pod总数 */
  TotalCount: number;
  /** 集群pod详细信息 */
  PodList: NetworkClusterPodInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeNetworkFirewallPolicyDetailRequest {
  /** 策略Id */
  Id: number;
}

declare interface DescribeNetworkFirewallPolicyDetailResponse {
  /** 集群Id */
  ClusterId: string;
  /** 策略名 */
  PolicyName: string;
  /** 命名空间 */
  Namespace: string | null;
  /** 入站类型 */
  FromPolicyRule: number;
  /** 出站类型 */
  ToPolicyRule: number;
  /** 自定义规则 */
  CustomPolicy: NetworkCustomPolicy[] | null;
  /** pod选择器 */
  PodSelector: string;
  /** 策略描述 */
  Description: string | null;
  /** 策略创建时间 */
  PolicyCreateTime: string;
  /** 策略源类型，分为System和Manual，分别代表手动和系统添加 */
  PolicySourceType: string;
  /** 网络策略对应的网络插件 */
  NetworkPolicyPlugin: string | null;
  /** 网络策略状态 */
  PublishStatus: string;
  /** 网络发布结果 */
  PublishResult: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeNetworkFirewallPolicyDiscoverRequest {
  /** 任务ID */
  TaskId: number;
}

declare interface DescribeNetworkFirewallPolicyDiscoverResponse {
  /** 任务状态，可能为：Task_Running,Task_Succ,Task_Error,Task_NoExist */
  TaskStatus: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeNetworkFirewallPolicyListRequest {
  /** 集群id */
  ClusterId: string;
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

declare interface DescribeNetworkFirewallPolicyListResponse {
  /** 集群总数 */
  TotalCount: number;
  /** 集群的详细信息 */
  NetPolicy: NetworkPolicyInfoItem[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeNetworkFirewallPolicyStatusRequest {
  /** 任务ID */
  TaskId: number;
}

declare interface DescribeNetworkFirewallPolicyStatusResponse {
  /** 任务状态，可能为：Task_Running,Task_Succ,Task_Error,Task_NoExist */
  TaskStatus: string;
  /** NameRepeat,K8sRuleIngressPortError等 */
  TaskResult: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeNetworkFirewallPolicyYamlDetailRequest {
  /** 策略Id */
  Id: number;
}

declare interface DescribeNetworkFirewallPolicyYamlDetailResponse {
  /** 集群Id */
  ClusterId: string;
  /** 策略名 */
  PolicyName: string;
  /** base64编码的yaml字符串 */
  Yaml: string | null;
  /** 策略描述 */
  Description: string | null;
  /** 策略创建时间 */
  PolicyCreateTime: string;
  /** 策略源类型，分为System和Manual，分别代表手动和系统添加 */
  PolicySourceType: string;
  /** 网络策略对应的网络插件 */
  NetworkPolicyPlugin: string | null;
  /** 网络策略状态 */
  PublishStatus: string;
  /** 网络发布结果 */
  PublishResult: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeNewestVulRequest {
}

declare interface DescribeNewestVulResponse {
  /** 漏洞PocID */
  PocID: string;
  /** 漏洞名称 */
  VulName: string;
  /** 披露时间 */
  SubmitTime: string;
  /** 应急漏洞风险情况：NOT_SCAN：未扫描，SCANNING：扫描中，SCANNED：已扫描 */
  Status: string;
  /** 漏洞CVEID */
  CVEID: string;
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

declare interface DescribePromotionActivityRequest {
  /** 活动ID */
  ActiveID: number;
}

declare interface DescribePromotionActivityResponse {
  /** 促销活动内容 */
  List: PromotionActivityContent[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribePublicKeyRequest {
}

declare interface DescribePublicKeyResponse {
  /** 公钥 */
  PublicKey: string;
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

declare interface DescribeScanIgnoreVulListRequest {
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤条件。CVEID- string - 是否必填：否 - CVE编号VulName- string - 是否必填：否 - 漏洞名称 */
  Filters?: RunTimeFilters[];
  /** 排序方式:DESC,ACS */
  Order?: string;
  /** 排序字段 UpdateTime */
  By?: string;
}

declare interface DescribeScanIgnoreVulListResponse {
  /** 总是 */
  TotalCount: number;
  /** 漏洞列表 */
  List: ScanIgnoreVul[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeSearchExportListRequest {
  /** ES查询条件JSON */
  Query: string;
}

declare interface DescribeSearchExportListResponse {
  /** 导出任务ID，前端拿着任务ID查询任务进度 */
  JobId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeSearchLogsRequest {
}

declare interface DescribeSearchLogsResponse {
  /** 历史搜索记录 保留最新的10条 */
  Data: string[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeSearchTemplatesRequest {
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 返回数量，默认为10，最大值为100。 */
  Limit?: number;
}

declare interface DescribeSearchTemplatesResponse {
  /** 总数 */
  TotalCount: number;
  /** 模板列表 */
  List: SearchTemplate[];
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

declare interface DescribeSecLogAlertMsgRequest {
  /** 告警类型日志储量告警: log_reserve_full日志存储时间告警: log_save_day_limitkafka实例/公网域名不可用: kafka_instance_domain_unavailablekafka 用户名密码错误: kafka_user_passwd_wrongkafka后台报错字段: kafka_field_wrong */
  Type?: string[];
}

declare interface DescribeSecLogAlertMsgResponse {
  /** 告警消息队列 */
  List: SecLogAlertMsgInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeSecLogCleanSettingInfoRequest {
}

declare interface DescribeSecLogCleanSettingInfoResponse {
  /** 触发清理的储量底线 */
  ReservesLimit: number;
  /** 清理停止时的储量截至线 */
  ReservesDeadline: number;
  /** 触发清理的存储天数 */
  DayLimit: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeSecLogDeliveryClsOptionsRequest {
  /** 地域 */
  ClsRegion?: string;
}

declare interface DescribeSecLogDeliveryClsOptionsResponse {
  /** cls可选日志集合列表(仅当入参ClsRegion不为空时返回) */
  LogSetList: ClsLogsetInfo[];
  /** 可选地域列表(仅当入参ClsRegion为空时返回) */
  RegionList: RegionInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeSecLogDeliveryClsSettingRequest {
}

declare interface DescribeSecLogDeliveryClsSettingResponse {
  /** 日志类型列表 */
  LogTypeList: SecLogDeliveryClsSettingInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeSecLogDeliveryKafkaOptionsRequest {
  /** 地域，若为空则返回所有可选地域 */
  RegionID?: string;
}

declare interface DescribeSecLogDeliveryKafkaOptionsResponse {
  /** 实例列表 */
  InstanceList: CKafkaInstanceInfo[];
  /** 地域列表 */
  RegionList: RegionInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeSecLogDeliveryKafkaSettingRequest {
}

declare interface DescribeSecLogDeliveryKafkaSettingResponse {
  /** 消息队列实例ID */
  InstanceID: string | null;
  /** 消息队列实例名称 */
  InstanceName: string | null;
  /** 域名 */
  Domain: string | null;
  /** 日志类型队列 */
  LogTypeList: SecLogDeliveryKafkaSettingInfo[] | null;
  /** 用户名 */
  User: string | null;
  /** 地域ID */
  RegionID: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeSecLogJoinObjectListRequest {
  /** 日志类型bash: "container_bash",启动: "container_launch","k8s": "k8s_api" */
  LogType: string;
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤条件。Status- String - 是否必填：否 - 主机状态 HostIP- String - 是否必填：否 - 主机内网IP PublicIP- String - 是否必填：否 - 主机外网IP HostName- String - 是否必填：否 - 主机名称 */
  Filters?: RunTimeFilters[];
  /** 排序字段 */
  By?: string;
  /** 排序方式 */
  Order?: string;
}

declare interface DescribeSecLogJoinObjectListResponse {
  /** 总数 */
  TotalCount: number;
  /** 接入对象列表 */
  List: SecLogJoinObjectInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeSecLogJoinTypeListRequest {
}

declare interface DescribeSecLogJoinTypeListResponse {
  /** 接入日志列表 */
  List: SecLogJoinInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeSecLogKafkaUINRequest {
}

declare interface DescribeSecLogKafkaUINResponse {
  /** 目标UIN */
  DstUIN: string | null;
  /** 授权状态 */
  Status: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeSecLogVasInfoRequest {
}

declare interface DescribeSecLogVasInfoResponse {
  /** 购买状态待购: Pending已购: Normal隔离: Isolate */
  BuyStatus: string;
  /** 存储时长(月) */
  LogSaveMonth: number;
  /** 起始时间 */
  StartTime: string;
  /** 截止时间 */
  EndTime: string;
  /** 存储容量(GB) */
  LogCapacity: number;
  /** 资源ID */
  ResourceID: string;
  /** 是否曾经购买过(false:未曾 true:曾经购买过) */
  IsPurchased: boolean;
  /** 试用存储容量(GB) */
  TrialCapacity: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeSupportDefenceVulRequest {
  /** 过滤条件。Level- String - 是否必填：否 - 威胁等级，CRITICAL:严重 HIGH:高/MIDDLE:中/LOW:低CVEID- string - 是否必填：否 - CVE编号Name- string -是否必填: 否 - 漏洞名称 */
  Filters?: RunTimeFilters[];
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 排序方式：asc/desc */
  Order?: string;
  /** 排序字段：披露时间：SubmitTime */
  By?: string;
}

declare interface DescribeSupportDefenceVulResponse {
  /** 支持防御的漏洞列表 */
  List: SupportDefenceVul[];
  /** 总数量 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeSystemVulListRequest {
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤条件。OnlyAffectedContainer- string - 是否必填：否 - 仅展示影响容器的漏洞true,falseOnlyAffectedNewestImage-string - 是否必填：否 - 仅展示影响最新版本镜像的漏洞true,falseLevel- String - 是否必填：否 - 威胁等级，CRITICAL:严重 HIGH:高/MIDDLE:中/LOW:低Tags- string - 是否必填：否 - 漏洞标签，POC，EXP。CanBeFixed- string - 是否必填：否 - 是否可修复true,false。CVEID- string - 是否必填：否 - CVE编号ImageID- string - 是否必填：否 - 镜像IDImageName- String -是否必填: 否 - 镜像名称ContainerID- string -是否必填: 否 - 容器IDContainerName- string -是否必填: 否 - 容器名称ComponentName- string -是否必填: 否 - 组件名称ComponentVersion- string -是否必填: 否 - 组件版本Name- string -是否必填: 否 - 漏洞名称FocusOnType - string - 是否必填：否 -关注紧急度类型 。ALL :全部，SERIOUS_LEVEL： 严重和高危 ，IS_SUGGEST： 重点关注，POC_EXP 有Poc或Exp ，NETWORK_EXP: 远程Exp */
  Filters?: RunTimeFilters[];
  /** 排序方式 */
  Order?: string;
  /** 排序字段 */
  By?: string;
}

declare interface DescribeSystemVulListResponse {
  /** 漏洞总数 */
  TotalCount: number;
  /** 漏洞列表 */
  List: VulInfo[];
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

declare interface DescribeTcssSummaryRequest {
}

declare interface DescribeTcssSummaryResponse {
  /** 镜像总数 */
  ImageCnt: number;
  /** 已扫描镜像数 */
  ScannedImageCnt: number;
  /** 待扫描镜像个数 */
  UnScannedImageCnt: number;
  /** 本地镜像个数 */
  LocalImageCnt: number;
  /** 仓库镜像个数 */
  RepositoryImageCnt: number;
  /** 风险本地镜像个数 */
  RiskLocalImageCnt: number;
  /** 风险仓库镜像个数 */
  RiskRepositoryImageCnt: number;
  /** 容器个数 */
  ContainerCnt: number;
  /** 风险容器个数 */
  RiskContainerCnt: number;
  /** 集群个数 */
  ClusterCnt: number;
  /** 风险集群个数 */
  RiskClusterCnt: number;
  /** 待扫描漏洞个数 */
  UnScannedVulCnt: number;
  /** 风险漏洞个数 */
  RiskVulCnt: number;
  /** 安全基线待扫描项个数 */
  UnScannedBaseLineCnt: number;
  /** 安全基线风险个数 */
  RiskBaseLineCnt: number;
  /** 运行时(高危)待处理事件个数 */
  RuntimeUnhandleEventCnt: number;
  /** 待扫描集群个数 */
  UnScannedClusterCnt: number;
  /** 是否已扫描镜像 */
  ScanImageStatus: boolean;
  /** 是否已扫描集群 */
  ScanClusterStatus: boolean;
  /** 是否已扫描基线 */
  ScanBaseLineStatus: boolean;
  /** 是否已扫描漏洞 */
  ScanVulStatus: boolean;
  /** 漏洞影响镜像数 */
  VulRiskImageCnt: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeUnauthorizedCoresTendencyRequest {
}

declare interface DescribeUnauthorizedCoresTendencyResponse {
  /** 未授权核数趋势 */
  List: UnauthorizedCoresTendency[];
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

declare interface DescribeVirusAutoIsolateSampleDetailRequest {
  /** 文件MD5值 */
  MD5: string;
}

declare interface DescribeVirusAutoIsolateSampleDetailResponse {
  /** 文件Md5值 */
  MD5: string;
  /** 文件大小(B) */
  Size: number | null;
  /** 病毒名 */
  VirusName: string | null;
  /** 风险等级 RISK_CRITICAL, RISK_HIGH, RISK_MEDIUM, RISK_LOW, RISK_NOTICE。 */
  RiskLevel: string | null;
  /** 查杀引擎 */
  KillEngine: string[] | null;
  /** 标签 */
  Tags: string[] | null;
  /** 事件描述 */
  HarmDescribe: string | null;
  /** 建议方案 */
  SuggestScheme: string | null;
  /** 参考链接 */
  ReferenceLink: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeVirusAutoIsolateSampleDownloadURLRequest {
  /** 样本Md5值 */
  MD5: string;
}

declare interface DescribeVirusAutoIsolateSampleDownloadURLResponse {
  /** 样本下载链接 */
  FileUrl: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeVirusAutoIsolateSampleListRequest {
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤条件。MD5- String - 是否必填：否 - md5 AutoIsolateSwitch- String - 是否必填：否 - 自动隔离开关 VirusName- String - 是否必填：否 - 病毒名 */
  Filters?: RunTimeFilters[];
  /** 排序字段 */
  By?: string;
  /** 排序方式 */
  Order?: string;
}

declare interface DescribeVirusAutoIsolateSampleListResponse {
  /** 总数 */
  TotalCount: number;
  /** 木马自动隔离样本列表 */
  List: VirusAutoIsolateSampleInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeVirusAutoIsolateSettingRequest {
}

declare interface DescribeVirusAutoIsolateSettingResponse {
  /** 自动隔离开关(true:开 false:关) */
  AutoIsolateSwitch: boolean;
  /** 是否中断隔离文件关联的进程(true:是 false:否) */
  IsKillProgress: boolean;
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

declare interface DescribeVirusEventTendencyRequest {
  /** 趋势周期(默认为7天) */
  TendencyPeriod: number;
}

declare interface DescribeVirusEventTendencyResponse {
  /** 趋势列表 */
  List: VirusTendencyInfo[];
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

declare interface DescribeVirusManualScanEstimateTimeoutRequest {
  /** 扫描范围0容器1主机节点 */
  ScanRangeType: number;
  /** true 全选，false 自选 */
  ScanRangeAll: boolean;
  /** 自选扫描范围的容器id或者主机id 根据ScanRangeType决定 */
  ScanIds?: string[];
}

declare interface DescribeVirusManualScanEstimateTimeoutResponse {
  /** 预估超时时间(h) */
  Timeout: number;
  /** 单台主机并行扫描容器数 */
  ContainerScanConcurrencyCount: number;
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

declare interface DescribeVirusSampleDownloadUrlRequest {
  /** 木马id */
  ID: string;
}

declare interface DescribeVirusSampleDownloadUrlResponse {
  /** 样本下载地址 */
  FileUrl: string;
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

declare interface DescribeVulContainerListRequest {
  /** 漏洞PocID */
  PocID: string;
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤条件。OnlyAffectedNewestImage- Bool- 是否必填：否 - 仅展示影响最新版本镜像的漏洞ContainerID- string - 是否必填：否 - 容器IDContainerName- String -是否必填: 否 - 容器名称 */
  Filters?: RunTimeFilters[];
}

declare interface DescribeVulContainerListResponse {
  /** 容器列表 */
  List: VulAffectedContainerInfo[];
  /** 容器总数 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeVulDefenceEventDetailRequest {
  /** 事件ID */
  EventID: number;
}

declare interface DescribeVulDefenceEventDetailResponse {
  /** 漏洞防御事件详细 */
  EventDetail: VulDefenceEventDetail;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeVulDefenceEventRequest {
  /** 过滤条件。Status- String - 是否必填：否 - 插件状态，待处理：EVENT_UNDEAL，EVENT_DEALED：已处理，已忽略：EVENT_IGNORE， EVENT_DEFENDED：已防御ContainerStatus- String - 是否必填：否 - 容器运行状态筛选，已创建：CREATED,正常运行：RUNNING, 暂定运行：PAUSED, 停止运行：	STOPPED，重启中：RESTARTING, 迁移中：REMOVING, 销毁：DESTROYED ContainerNetStatus- String -是否必填: 否 - 容器网络状态筛选 未隔离：NORMAL，已隔离：ISOLATED，隔离失败：ISOLATE_FAILED，解除隔离失败：RESTORE_FAILED，解除隔离中：RESTORING，隔离中：ISOLATINGEventType - String -是否必填: 否 - 入侵状态，防御成功：EVENT_DEFENDED，尝试攻击：EVENT_ATTACK TimeRange- String -是否必填: 否 - 时间范围，第一个值表示开始时间，第二个值表示结束时间 VulName- string - 是否必填：否 - 漏洞名称。CVEID- string - 是否必填：否 - CVE编号。SourceIP- string - 是否必填：否 - 攻击源IP。ContainerName- string - 是否必填：否 - 容器名称。ContainerID- string - 是否必填：否 - 容器ID。ImageName- string - 是否必填：否 - 镜像名称。ImageID- string - 是否必填：否 - 镜像ID。HostName- string - 是否必填：否 - 主机名称。HostIP- string - 是否必填：否 - 内网IP。 */
  Filters?: RunTimeFilters[];
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 排序方式：asc/desc */
  Order?: string;
  /** 排序字段：事件数量：EventCount */
  By?: string;
}

declare interface DescribeVulDefenceEventResponse {
  /** 漏洞防御事件列表 */
  List: VulDefenceEvent[];
  /** 总数量 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeVulDefenceEventTendencyRequest {
  /** 开始时间 */
  StartTime: string;
  /** 结束时间 */
  EndTime: string;
}

declare interface DescribeVulDefenceEventTendencyResponse {
  /** 漏洞防御事件趋势 */
  DefendedList: VulDefenceEventTendency[];
  /** 漏洞攻击事件趋势 */
  AttackList: VulDefenceEventTendency[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeVulDefenceHostRequest {
  /** 过滤条件。Status- String - 是否必填：否 - 插件状态，正常：SUCCESS，异常：FAIL， NO_DEFENCE:未防御KeyWords- string - 是否必填：否 - 主机名称/IP。 */
  Filters?: RunTimeFilters[];
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 排序方式：asc/desc */
  Order?: string;
  /** 排序字段：更新时间：ModifyTime/首次开启时间：CreateTime */
  By?: string;
}

declare interface DescribeVulDefenceHostResponse {
  /** 总数量 */
  TotalCount: number;
  /** 漏洞防御的主机列表 */
  List: VulDefenceHost[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeVulDefencePluginRequest {
  /** 主机HostID即quuid */
  HostID?: string;
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤条件。Status- String - 是否必填：否 -插件运行状态：注入中:INJECTING，注入成功：SUCCESS，注入失败：FAIL，插件超时：TIMEOUT，插件退出：QUIT */
  Filters?: RunTimeFilters[];
}

declare interface DescribeVulDefencePluginResponse {
  /** 总数量 */
  TotalCount: number;
  /** 漏洞防御插件列表 */
  List: VulDefencePlugin[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeVulDefenceSettingRequest {
}

declare interface DescribeVulDefenceSettingResponse {
  /** 是否开启:0: 关闭 1:开启 */
  IsEnabled: number;
  /** 漏洞防御主机范围: 0:自选主机节点，1:全部 */
  Scope: number;
  /** 漏洞防御主机数量 */
  HostCount: number;
  /** 开启漏洞防御异常主机数量 */
  ExceptionHostCount: number;
  /** 自选漏洞防御主机 */
  HostIDs: string[] | null;
  /** 开通容器安全的主机总数 */
  HostTotalCount: number | null;
  /** 支持防御的漏洞数 */
  SupportDefenseVulCount: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeVulDetailRequest {
  /** 漏洞PocID */
  PocID: string;
}

declare interface DescribeVulDetailResponse {
  /** 漏洞详情信息 */
  VulInfo: VulDetailInfo;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeVulIgnoreLocalImageListRequest {
  /** 漏洞PocID */
  PocID: string;
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 排序方式:DESC,ACS */
  Order?: string;
  /** 排序字段 ImageSize */
  By?: string;
}

declare interface DescribeVulIgnoreLocalImageListResponse {
  /** 总数量 */
  TotalCount: number;
  /** 镜像列表 */
  List: VulIgnoreLocalImage[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeVulIgnoreRegistryImageListRequest {
  /** 漏洞PocID */
  PocID: string;
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
}

declare interface DescribeVulIgnoreRegistryImageListResponse {
  /** 总数量 */
  TotalCount: number;
  /** 镜像列表 */
  List: VulIgnoreRegistryImage[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeVulImageListRequest {
  /** 漏洞PocID */
  PocID: string;
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤条件。OnlyAffectedNewestImage- Bool- 是否必填：否 - 仅展示影响最新版本镜像的漏洞ImageID- string - 是否必填：否 - 镜像IDImageName- String -是否必填: 否 - 镜像名称HostIP- string -是否必填: 否 - 内网IPPublicIP- string -是否必填: 否 - 外网IPComponentName- string -是否必填: 否 - 组件名称ComponentVersion- string -是否必填: 否 - 组件版本HostName- string -是否必填: 否 - 主机名称 */
  Filters?: RunTimeFilters[];
  /** 排序方式 */
  Order?: string;
  /** 排序字段 */
  By?: string;
}

declare interface DescribeVulImageListResponse {
  /** 受影响的镜像列表 */
  List: VulAffectedImageInfo[];
  /** 镜像总数 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeVulImageSummaryRequest {
}

declare interface DescribeVulImageSummaryResponse {
  /** 受严重或高危漏洞影响的镜像数 */
  SeriousVulImageCount: number;
  /** 已扫描的镜像数 */
  ScannedImageCount: number;
  /** 漏洞总数量 */
  VulTotalCount: number;
  /** 系统漏洞数 */
  SysTemVulCount: number;
  /** web应用漏洞数 */
  WebVulCount: number;
  /** 已授权镜像数 */
  AllAuthorizedImageCount: number;
  /** 应急漏洞数 */
  EmergencyVulCount: number;
  /** 支持扫描的漏洞总数量 */
  SupportVulTotalCount: number;
  /** 漏洞库更新时间 */
  VulLibraryUpdateTime: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeVulLevelImageSummaryRequest {
}

declare interface DescribeVulLevelImageSummaryResponse {
  /** 高危漏洞最新本地镜像占比 */
  HighLevelVulLocalImagePercent: number;
  /** 中危漏洞最新本地镜像占比 */
  MediumLevelVulLocalImagePercent: number;
  /** 低危漏洞最新本地镜像占比 */
  LowLevelVulLocalImagePercent: number;
  /** 严重漏洞最新本地镜像占比 */
  CriticalLevelVulLocalImagePercent: number;
  /** 影响的最新版本本地镜像数 */
  LocalNewestImageCount: number;
  /** 影响的最新版本仓库镜像数 */
  RegistryNewestImageCount: number;
  /** 高危漏洞最新仓库镜像占比 */
  HighLevelVulRegistryImagePercent: number;
  /** 中危漏洞最新仓库镜像占比 */
  MediumLevelVulRegistryImagePercent: number;
  /** 低危漏洞最新仓库镜像占比 */
  LowLevelVulRegistryImagePercent: number;
  /** 严重漏洞最新仓库镜像占比 */
  CriticalLevelVulRegistryImagePercent: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeVulLevelSummaryRequest {
  /** 漏洞分类: SYSTEM:系统漏洞 WEB:web应用漏洞 EMERGENCY:应急漏洞 */
  CategoryType: string;
}

declare interface DescribeVulLevelSummaryResponse {
  /** 高危漏洞数 */
  HighLevelVulCount: number;
  /** 中危漏洞数 */
  MediumLevelVulCount: number;
  /** 低危漏洞数 */
  LowLevelVulCount: number;
  /** 严重漏洞数 */
  CriticalLevelVulCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeVulScanAuthorizedImageSummaryRequest {
}

declare interface DescribeVulScanAuthorizedImageSummaryResponse {
  /** 全部已授权的本地镜像数 */
  AllAuthorizedImageCount: number;
  /** 已授权未扫描的本地镜像数 */
  UnScanAuthorizedImageCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeVulScanInfoRequest {
  /** 本地镜像漏洞扫描任务ID，无则返回最近一次的漏洞任务扫描 */
  LocalTaskID?: number;
  /** 仓库镜像漏洞扫描任务ID，无则返回最近一次的漏洞任务扫描 */
  RegistryTaskID?: number;
}

declare interface DescribeVulScanInfoResponse {
  /** 本次扫描的本地镜像总数 */
  LocalImageScanCount: number;
  /** 忽略的漏洞数量 */
  IgnoreVulCount: number;
  /** 漏洞扫描的开始时间 */
  ScanStartTime: string;
  /** 漏洞扫描的结束时间 */
  ScanEndTime: string;
  /** 发现风险镜像数量 */
  FoundRiskImageCount: number;
  /** 本地发现漏洞数量 */
  FoundVulCount: number;
  /** 扫描进度 */
  ScanProgress: number;
  /** 本次扫描的仓库镜像总数 */
  RegistryImageScanCount: number;
  /** 本地镜像最近一次的漏洞任务扫描ID */
  LocalTaskID: number;
  /** 扫描状态:NOT_SCAN:未扫描，SCANNING:扫描中,SCANNED:完成，CANCELED：扫描停止 */
  Status: string;
  /** 剩余时间，秒 */
  RemainingTime: number;
  /** 仓库镜像最近一次的漏洞任务扫描ID */
  RegistryTaskID: number;
  /** 仓库发现漏洞数量 */
  RegistryFoundVulCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeVulScanLocalImageListRequest {
  /** 漏洞扫描任务ID */
  TaskID: number;
  /** 过滤条件。OnlyAffectedNewestImage- Bool- 是否必填：否 - 仅展示影响最新版本镜像的漏洞ImageID- string - 是否必填：否 - 镜像IDImageName- String -是否必填: 否 - 镜像名称ScanStatus- string -是否必填: 否 - 检测状态。WAIT_SCAN：待检测，SCANNING：检查中，SCANNED：检查完成，SCAN_ERR：检查失败，CANCELED：检测停止 */
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

declare interface DescribeVulScanLocalImageListResponse {
  /** 镜像总数 */
  TotalCount: number;
  /** 镜像列表 */
  List: VulScanImageInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeVulSummaryRequest {
  /** 过滤条件。OnlyAffectedNewestImage- string- 是否必填：否 - 仅展示影响最新版本镜像的漏洞true,falseOnlyAffectedContainer-string- 是否必填：否 - 仅展示影响容器的漏洞,true,falseCategoryType- string - 是否必填：否 - 漏洞分类: SYSTEM:系统漏洞 WEB:web应用漏洞 ALL:全部漏洞 */
  Filters?: RunTimeFilters[];
}

declare interface DescribeVulSummaryResponse {
  /** 漏洞总数量 */
  VulTotalCount: number;
  /** 严重及高危漏洞数量 */
  SeriousVulCount: number;
  /** 重点关注漏洞数量 */
  SuggestVulCount: number;
  /** 有Poc或者Exp的漏洞数量 */
  PocExpLevelVulCount: number;
  /** 有远程Exp的漏洞数量 */
  RemoteExpLevelVulCount: number;
  /** 受严重或高危漏洞影响的最新版本镜像数 */
  SeriousVulNewestImageCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeVulTendencyRequest {
  /** 开始时间 */
  StartTime: string;
  /** 结束时间 */
  EndTime: string;
  /** 枚举类型：LATEST：最新版本CONTAINER: 运行容器 */
  SphereOfInfluence: string;
}

declare interface DescribeVulTendencyResponse {
  /** 漏洞趋势列表 */
  VulTendencySet: VulTendencyInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeVulTopRankingRequest {
  /** 漏洞分类: SYSTEM:系统漏洞 WEB:web应用漏洞 EMERGENCY:应急漏洞 */
  CategoryType: string;
}

declare interface DescribeVulTopRankingResponse {
  /** 漏洞Top排名信息列表 */
  List: VulTopRankingInfo[];
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

declare interface DescribeWebVulListRequest {
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤条件。OnlyAffectedContainer- string - 是否必填：否 - 仅展示影响容器的漏洞true,falseOnlyAffectedNewestImage-string - 是否必填：否 - 仅展示影响最新版本镜像的漏洞true,falseLevel- String - 是否必填：否 - 威胁等级，CRITICAL:严重 HIGH:高/MIDDLE:中/LOW:低Tags- string - 是否必填：否 - 漏洞标签，POC，EXP。CanBeFixed- string - 是否必填：否 - 是否可修复true,false。CVEID- string - 是否必填：否 - CVE编号ImageID- string - 是否必填：否 - 镜像IDImageName- String -是否必填: 否 - 镜像名称ContainerID- string -是否必填: 否 - 容器IDContainerName- string -是否必填: 否 - 容器名称ComponentName- string -是否必填: 否 - 组件名称ComponentVersion- string -是否必填: 否 - 组件版本Name- string -是否必填: 否 - 漏洞名称FocusOnType - string - 是否必填：否 -关注紧急度类型 。ALL :全部，SERIOUS_LEVEL： 严重和高危 ，IS_SUGGEST： 重点关注，POC_EXP 有Poc或Exp ，NETWORK_EXP: 远程Exp */
  Filters?: RunTimeFilters[];
  /** 排序方式 */
  Order?: string;
  /** 排序字段 */
  By?: string;
}

declare interface DescribeWebVulListResponse {
  /** 漏洞总数 */
  TotalCount: number;
  /** 漏洞列表 */
  List: VulInfo[];
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

declare interface ModifyContainerNetStatusRequest {
  /** 容器ID */
  ContainerID: string;
  /** 状态(隔离容器: EVENT_ISOLATE_CONTAINER恢复容器: EVENT_RESOTRE_CONTAINER) */
  Status: string;
}

declare interface ModifyContainerNetStatusResponse {
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

declare interface ModifyEscapeWhiteListRequest {
  /** 加白名单事件类型 ESCAPE_CGROUPS：利用cgroup机制逃逸 ESCAPE_TAMPER_SENSITIVE_FILE：篡改敏感文件逃逸 ESCAPE_DOCKER_API：访问Docker API接口逃逸 ESCAPE_VUL_OCCURRED：逃逸漏洞利用 MOUNT_SENSITIVE_PTAH：敏感路径挂载 PRIVILEGE_CONTAINER_START：特权容器 PRIVILEGE：程序提权逃逸 */
  EventType: string[];
  /** 白名单记录ID */
  IDSet: number[];
}

declare interface ModifyEscapeWhiteListResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyImageAuthorizedRequest {
  /** 本地镜像是否全部授权的标识，优先权高于根据本地镜像ids授权。等于true时需UpdatedLocalImageCnt大于0。 */
  AllLocalImages: boolean;
  /** 仓库镜像是否全部授权的标识，优先权高于根据镜像ids授权。等于true时需UpdatedRegistryImageCnt大于0。 */
  AllRegistryImages: boolean;
  /** 指定操作授权的本地镜像数量，判断优先权最高，实际多出的镜像随机忽略，实际不足的部分也忽略。 */
  UpdatedLocalImageCnt: number;
  /** 指定操作授权的仓库镜像数量，判断优先权最高，实际多出的镜像随机忽略，实际不足的部分也忽略； */
  UpdatedRegistryImageCnt: number;
  /** 根据满足条件的本地镜像授权,本地镜像来源；ASSETIMAGE:本地镜像列表；IMAGEALL:同步本地镜像；AllLocalImages为false且LocalImageIds为空和UpdatedLocalImageCnt大于0时，需要 */
  ImageSourceType: string;
  /** 根据满足条件的本地镜像授权，AllLocalImages为false且LocalImageIds为空和UpdatedLocalImageCnt大于0时，需要。 */
  LocalImageFilter?: AssetFilters[];
  /** 根据满足条件的仓库镜像授权，AllRegistryImages为false且RegistryImageIds为空和UpdatedRegistryImageCnt大于0时，需要。 */
  RegistryImageFilter?: AssetFilters[];
  /** 根据满足条件的镜像授权,同时排除的本地镜像。 */
  ExcludeLocalImageIds?: string[];
  /** 根据满足条件的镜像授权,同时排除的仓库镜像。 */
  ExcludeRegistryImageIds?: string[];
  /** 根据本地镜像ids授权，优先权高于根据满足条件的镜像授权。AllLocalImages为false且LocalImageFilter为空和UpdatedLocalImageCnt大于0时，需要。 */
  LocalImageIds?: string[];
  /** 根据仓库镜像Ids授权，优先权高于根据满足条件的镜像授。AllRegistryImages为false且RegistryImageFilter为空和UpdatedRegistryImageCnt大于0时，需要。 */
  RegistryImageIds?: string[];
  /** 是否仅最新的镜像；RegistryImageFilter不为空且UpdatedRegistryImageCnt大于0时仓库镜像需要。 */
  OnlyShowLatest?: boolean;
}

declare interface ModifyImageAuthorizedResponse {
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

declare interface ModifySecLogCleanSettingInfoRequest {
  /** 触发清理的储量底线(50-99) */
  ReservesLimit: number;
  /** 清理停止时的储量截至线(>0,小于ReservesLimit) */
  ReservesDeadline: number;
  /** 触发清理的存储天数(>=1) */
  DayLimit: number;
}

declare interface ModifySecLogCleanSettingInfoResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifySecLogDeliveryClsSettingRequest {
  /** 日志信息 */
  List: SecLogDeliveryClsSettingInfo[];
}

declare interface ModifySecLogDeliveryClsSettingResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifySecLogDeliveryKafkaSettingRequest {
  /** 实例ID */
  InstanceID?: string;
  /** 实例名称 */
  InstanceName?: string;
  /** 域名 */
  Domain?: string;
  /** 用户名 */
  User?: string;
  /** 密码 */
  Password?: string;
  /** 日志类型队列 */
  LogTypeList?: SecLogDeliveryKafkaSettingInfo[];
  /** 接入类型 */
  AccessType?: number;
  /** kafka版本号 */
  KafkaVersion?: string;
  /** 地域ID */
  RegionID?: string;
}

declare interface ModifySecLogDeliveryKafkaSettingResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifySecLogJoinObjectsRequest {
  /** 日志类型bash日志: container_bash容器启动: container_launchk8sApi: k8s_api */
  LogType: string;
  /** 绑定主机quuid列表 */
  BindList?: string[];
  /** 待解绑主机quuid列表 */
  UnBindList?: string[];
}

declare interface ModifySecLogJoinObjectsResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifySecLogJoinStateRequest {
  /** 日志类型bash日志: container_bash容器启动: container_launchk8sApi: k8s_api */
  LogType: string;
  /** 状态(true:开 false:关) */
  State: boolean;
}

declare interface ModifySecLogJoinStateResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifySecLogKafkaUINRequest {
  /** 目标UIN */
  DstUIN?: string;
}

declare interface ModifySecLogKafkaUINResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyVirusAutoIsolateExampleSwitchRequest {
  /** 文件Md5值 */
  MD5: string;
  /** 开关(开:true 关: false) */
  Status: boolean;
}

declare interface ModifyVirusAutoIsolateExampleSwitchResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyVirusAutoIsolateSettingRequest {
  /** 自动隔离开关(true:开 false:关) */
  AutoIsolateSwitch: boolean;
  /** 是否中断隔离文件关联的进程(true:是 false:否) */
  IsKillProgress: boolean;
}

declare interface ModifyVirusAutoIsolateSettingResponse {
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

declare interface ModifyVulDefenceEventStatusRequest {
  /** 事件IDs数组 */
  EventIDs: number[];
  /** 操作状态：EVENT_DEALED：已处理，EVENT_IGNORE：忽略，EVENT_ISOLATE_CONTAINER：隔离容器，EVENT_DEL：删除 */
  Status: string;
  /** 备注 */
  Remark?: string;
}

declare interface ModifyVulDefenceEventStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyVulDefenceSettingRequest {
  /** 是否开启:0: 关闭 1:开启 */
  IsEnabled: number;
  /** 漏洞防御主机范围:0：自选 1: 全部主机。IsEnabled为1时必填 */
  Scope?: number;
  /** 自选漏洞防御主机,Scope为0时必填 */
  HostIDs?: string[];
}

declare interface ModifyVulDefenceSettingResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface OpenTcssTrialRequest {
}

declare interface OpenTcssTrialResponse {
  /** 试用开通结束时间 */
  EndTime: string;
  /** 试用开通开始时间 */
  StartTime: string;
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

declare interface ResetSecLogTopicConfigRequest {
  /** 配置类型(ckafka/cls) */
  ConfigType: string;
  /** 日志类型 */
  LogType: string;
}

declare interface ResetSecLogTopicConfigResponse {
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

declare interface StopVulScanTaskRequest {
  /** 本地镜像漏洞扫描任务ID */
  LocalTaskID?: number;
  /** 本地镜像ID，无则全部 */
  LocalImageIDs?: string[];
  /** 仓库镜像ID，无则全部 */
  RegistryImageIDs?: number[];
  /** 仓库镜像漏洞扫描任务ID */
  RegistryTaskID?: number;
}

declare interface StopVulScanTaskResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface SwitchImageAutoAuthorizedRuleRequest {
  /** 规则是否生效，0:不生效，1:已生效 */
  IsEnabled: number;
  /** 规则id */
  RuleId: number;
}

declare interface SwitchImageAutoAuthorizedRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface SyncAssetImageRegistryAssetRequest {
}

declare interface SyncAssetImageRegistryAssetResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UpdateAndPublishNetworkFirewallPolicyDetailRequest {
  /** 集群Id */
  ClusterId: string;
  /** 策略Id */
  Id: number;
  /** 入站规则全部允许：1全部拒绝 ：2自定义：3 */
  FromPolicyRule: number;
  /** 出站规则全部允许：1全部拒绝 ：2自定义：3 */
  ToPolicyRule: number;
  /** pod选择器 */
  PodSelector: string;
  /** 命名空间 */
  Namespace?: string;
  /** 策略描述 */
  Description?: string;
  /** 自定义规则 */
  CustomPolicy?: NetworkCustomPolicy[];
}

declare interface UpdateAndPublishNetworkFirewallPolicyDetailResponse {
  /** 返回创建的任务的ID，为0表示创建失败。 */
  TaskId: number;
  /** 创建任务的结果，"Succ"为成功，"Failed"为失败 */
  Result: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UpdateAndPublishNetworkFirewallPolicyYamlDetailRequest {
  /** 集群Id */
  ClusterId: string;
  /** 策略id */
  Id: number;
  /** base64编码的networkpolicy yaml字符串 */
  Yaml?: string;
  /** 策略描述 */
  Description?: string;
}

declare interface UpdateAndPublishNetworkFirewallPolicyYamlDetailResponse {
  /** 返回创建的任务的ID，为0表示创建失败。 */
  TaskId: number;
  /** 创建任务的结果，"Succ"为成功，"Failed"为失败 */
  Result: string;
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

declare interface UpdateNetworkFirewallPolicyDetailRequest {
  /** 集群Id */
  ClusterId: string;
  /** 策略Id */
  Id: number;
  /** 入站规则全部允许：1全部拒绝 ：2自定义：3 */
  FromPolicyRule: number;
  /** 出站规则全部允许：1全部拒绝 ：2自定义：3 */
  ToPolicyRule: number;
  /** pod选择器 */
  PodSelector: string;
  /** 命名空间 */
  Namespace?: string;
  /** 策略描述 */
  Description?: string;
  /** 自定义规则 */
  CustomPolicy?: NetworkCustomPolicy[];
}

declare interface UpdateNetworkFirewallPolicyDetailResponse {
  /** 返回创建的任务的ID，为0表示创建失败。 */
  TaskId: number;
  /** 创建任务的结果，"Succ"为成功，"Failed"为失败 */
  Result: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UpdateNetworkFirewallPolicyYamlDetailRequest {
  /** 集群Id */
  ClusterId: string;
  /** 策略id */
  Id: number;
  /** base64编码的networkpolicy yaml字符串 */
  Yaml?: string;
  /** 策略描述 */
  Description?: string;
}

declare interface UpdateNetworkFirewallPolicyYamlDetailResponse {
  /** 返回创建的任务的ID，为0表示创建失败。 */
  TaskId: number;
  /** 创建任务的结果，"Succ"为成功，"Failed"为失败 */
  Result: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

/** {@link Tcss 容器安全服务} */
declare interface Tcss {
  (): Versions;
  /** {@link AddAndPublishNetworkFirewallPolicyDetail 容器网络创建网络策略添加并发布任务}({@link AddAndPublishNetworkFirewallPolicyDetailRequest 请求参数}): {@link AddAndPublishNetworkFirewallPolicyDetailResponse 返回参数} */
  AddAndPublishNetworkFirewallPolicyDetail(data: AddAndPublishNetworkFirewallPolicyDetailRequest, config?: AxiosRequestConfig): AxiosPromise<AddAndPublishNetworkFirewallPolicyDetailResponse>;
  /** {@link AddAndPublishNetworkFirewallPolicyYamlDetail 容器网络创建Yaml网络策略并发布任务}({@link AddAndPublishNetworkFirewallPolicyYamlDetailRequest 请求参数}): {@link AddAndPublishNetworkFirewallPolicyYamlDetailResponse 返回参数} */
  AddAndPublishNetworkFirewallPolicyYamlDetail(data: AddAndPublishNetworkFirewallPolicyYamlDetailRequest, config?: AxiosRequestConfig): AxiosPromise<AddAndPublishNetworkFirewallPolicyYamlDetailResponse>;
  /** {@link AddAssetImageRegistryRegistryDetail 新增单个镜像仓库详细信息}({@link AddAssetImageRegistryRegistryDetailRequest 请求参数}): {@link AddAssetImageRegistryRegistryDetailResponse 返回参数} */
  AddAssetImageRegistryRegistryDetail(data: AddAssetImageRegistryRegistryDetailRequest, config?: AxiosRequestConfig): AxiosPromise<AddAssetImageRegistryRegistryDetailResponse>;
  /** {@link AddComplianceAssetPolicySetToWhitelist 安全合规忽略资产+检测项列表}({@link AddComplianceAssetPolicySetToWhitelistRequest 请求参数}): {@link AddComplianceAssetPolicySetToWhitelistResponse 返回参数} */
  AddComplianceAssetPolicySetToWhitelist(data: AddComplianceAssetPolicySetToWhitelistRequest, config?: AxiosRequestConfig): AxiosPromise<AddComplianceAssetPolicySetToWhitelistResponse>;
  /** {@link AddCompliancePolicyAssetSetToWhitelist 安全合规忽略检测项+资产列表}({@link AddCompliancePolicyAssetSetToWhitelistRequest 请求参数}): {@link AddCompliancePolicyAssetSetToWhitelistResponse 返回参数} */
  AddCompliancePolicyAssetSetToWhitelist(data: AddCompliancePolicyAssetSetToWhitelistRequest, config?: AxiosRequestConfig): AxiosPromise<AddCompliancePolicyAssetSetToWhitelistResponse>;
  /** {@link AddCompliancePolicyItemToWhitelist 安全合规忽略检测项列表}({@link AddCompliancePolicyItemToWhitelistRequest 请求参数}): {@link AddCompliancePolicyItemToWhitelistResponse 返回参数} */
  AddCompliancePolicyItemToWhitelist(data: AddCompliancePolicyItemToWhitelistRequest, config?: AxiosRequestConfig): AxiosPromise<AddCompliancePolicyItemToWhitelistResponse>;
  /** {@link AddEditAbnormalProcessRule 添加编辑异常进程策略}({@link AddEditAbnormalProcessRuleRequest 请求参数}): {@link AddEditAbnormalProcessRuleResponse 返回参数} */
  AddEditAbnormalProcessRule(data: AddEditAbnormalProcessRuleRequest, config?: AxiosRequestConfig): AxiosPromise<AddEditAbnormalProcessRuleResponse>;
  /** {@link AddEditAccessControlRule 添加编辑运行访问控制策略}({@link AddEditAccessControlRuleRequest 请求参数}): {@link AddEditAccessControlRuleResponse 返回参数} */
  AddEditAccessControlRule(data: AddEditAccessControlRuleRequest, config?: AxiosRequestConfig): AxiosPromise<AddEditAccessControlRuleResponse>;
  /** {@link AddEditImageAutoAuthorizedRule 新增或编辑本地镜像自动授权规则}({@link AddEditImageAutoAuthorizedRuleRequest 请求参数}): {@link AddEditImageAutoAuthorizedRuleResponse 返回参数} */
  AddEditImageAutoAuthorizedRule(data: AddEditImageAutoAuthorizedRuleRequest, config?: AxiosRequestConfig): AxiosPromise<AddEditImageAutoAuthorizedRuleResponse>;
  /** {@link AddEditReverseShellWhiteList 添加编辑反弹shell白名单}({@link AddEditReverseShellWhiteListRequest 请求参数}): {@link AddEditReverseShellWhiteListResponse 返回参数} */
  AddEditReverseShellWhiteList(data: AddEditReverseShellWhiteListRequest, config?: AxiosRequestConfig): AxiosPromise<AddEditReverseShellWhiteListResponse>;
  /** {@link AddEditRiskSyscallWhiteList 添加编辑高危系统调用白名单}({@link AddEditRiskSyscallWhiteListRequest 请求参数}): {@link AddEditRiskSyscallWhiteListResponse 返回参数} */
  AddEditRiskSyscallWhiteList(data?: AddEditRiskSyscallWhiteListRequest, config?: AxiosRequestConfig): AxiosPromise<AddEditRiskSyscallWhiteListResponse>;
  /** {@link AddEditWarningRules 添加编辑告警策略}({@link AddEditWarningRulesRequest 请求参数}): {@link AddEditWarningRulesResponse 返回参数} */
  AddEditWarningRules(data: AddEditWarningRulesRequest, config?: AxiosRequestConfig): AxiosPromise<AddEditWarningRulesResponse>;
  /** {@link AddEscapeWhiteList 新增逃逸白名单}({@link AddEscapeWhiteListRequest 请求参数}): {@link AddEscapeWhiteListResponse 返回参数} */
  AddEscapeWhiteList(data: AddEscapeWhiteListRequest, config?: AxiosRequestConfig): AxiosPromise<AddEscapeWhiteListResponse>;
  /** {@link AddIgnoreVul 新增漏洞扫描忽略漏洞}({@link AddIgnoreVulRequest 请求参数}): {@link AddIgnoreVulResponse 返回参数} */
  AddIgnoreVul(data: AddIgnoreVulRequest, config?: AxiosRequestConfig): AxiosPromise<AddIgnoreVulResponse>;
  /** {@link AddNetworkFirewallPolicyDetail 容器网络创建网络策略添加任务}({@link AddNetworkFirewallPolicyDetailRequest 请求参数}): {@link AddNetworkFirewallPolicyDetailResponse 返回参数} */
  AddNetworkFirewallPolicyDetail(data: AddNetworkFirewallPolicyDetailRequest, config?: AxiosRequestConfig): AxiosPromise<AddNetworkFirewallPolicyDetailResponse>;
  /** {@link AddNetworkFirewallPolicyYamlDetail 容器网络创建Yaml网络策略添加任务}({@link AddNetworkFirewallPolicyYamlDetailRequest 请求参数}): {@link AddNetworkFirewallPolicyYamlDetailResponse 返回参数} */
  AddNetworkFirewallPolicyYamlDetail(data: AddNetworkFirewallPolicyYamlDetailRequest, config?: AxiosRequestConfig): AxiosPromise<AddNetworkFirewallPolicyYamlDetailResponse>;
  /** {@link CheckNetworkFirewallPolicyYaml 容器网络创建检查Yaml网络策略任务}({@link CheckNetworkFirewallPolicyYamlRequest 请求参数}): {@link CheckNetworkFirewallPolicyYamlResponse 返回参数} */
  CheckNetworkFirewallPolicyYaml(data: CheckNetworkFirewallPolicyYamlRequest, config?: AxiosRequestConfig): AxiosPromise<CheckNetworkFirewallPolicyYamlResponse>;
  /** {@link CheckRepeatAssetImageRegistry 检查单个镜像仓库名是否重复}({@link CheckRepeatAssetImageRegistryRequest 请求参数}): {@link CheckRepeatAssetImageRegistryResponse 返回参数} */
  CheckRepeatAssetImageRegistry(data: CheckRepeatAssetImageRegistryRequest, config?: AxiosRequestConfig): AxiosPromise<CheckRepeatAssetImageRegistryResponse>;
  /** {@link ConfirmNetworkFirewallPolicy 容器网络创建网络策略确认任务}({@link ConfirmNetworkFirewallPolicyRequest 请求参数}): {@link ConfirmNetworkFirewallPolicyResponse 返回参数} */
  ConfirmNetworkFirewallPolicy(data: ConfirmNetworkFirewallPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<ConfirmNetworkFirewallPolicyResponse>;
  /** {@link CreateAssetImageRegistryScanTask 镜像仓库创建镜像扫描任务}({@link CreateAssetImageRegistryScanTaskRequest 请求参数}): {@link CreateAssetImageRegistryScanTaskResponse 返回参数} */
  CreateAssetImageRegistryScanTask(data?: CreateAssetImageRegistryScanTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAssetImageRegistryScanTaskResponse>;
  /** {@link CreateAssetImageRegistryScanTaskOneKey 镜像仓库创建镜像一键扫描任务}({@link CreateAssetImageRegistryScanTaskOneKeyRequest 请求参数}): {@link CreateAssetImageRegistryScanTaskOneKeyResponse 返回参数} */
  CreateAssetImageRegistryScanTaskOneKey(data?: CreateAssetImageRegistryScanTaskOneKeyRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAssetImageRegistryScanTaskOneKeyResponse>;
  /** {@link CreateAssetImageScanSetting 添加容器安全镜像扫描设置}({@link CreateAssetImageScanSettingRequest 请求参数}): {@link CreateAssetImageScanSettingResponse 返回参数} */
  CreateAssetImageScanSetting(data: CreateAssetImageScanSettingRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAssetImageScanSettingResponse>;
  /** {@link CreateAssetImageScanTask 创建镜像扫描任务}({@link CreateAssetImageScanTaskRequest 请求参数}): {@link CreateAssetImageScanTaskResponse 返回参数} */
  CreateAssetImageScanTask(data?: CreateAssetImageScanTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAssetImageScanTaskResponse>;
  /** {@link CreateAssetImageVirusExportJob 创建本地镜像木马列表导出任务}({@link CreateAssetImageVirusExportJobRequest 请求参数}): {@link CreateAssetImageVirusExportJobResponse 返回参数} */
  CreateAssetImageVirusExportJob(data: CreateAssetImageVirusExportJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAssetImageVirusExportJobResponse>;
  /** {@link CreateCheckComponent 安装检查组件}({@link CreateCheckComponentRequest 请求参数}): {@link CreateCheckComponentResponse 返回参数} */
  CreateCheckComponent(data: CreateCheckComponentRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCheckComponentResponse>;
  /** {@link CreateClusterCheckTask 创建集群检查任务}({@link CreateClusterCheckTaskRequest 请求参数}): {@link CreateClusterCheckTaskResponse 返回参数} */
  CreateClusterCheckTask(data: CreateClusterCheckTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateClusterCheckTaskResponse>;
  /** {@link CreateComplianceTask 安全合规创建合规检查任务}({@link CreateComplianceTaskRequest 请求参数}): {@link CreateComplianceTaskResponse 返回参数} */
  CreateComplianceTask(data?: CreateComplianceTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateComplianceTaskResponse>;
  /** {@link CreateComponentExportJob 查询本地镜像组件列表导出}({@link CreateComponentExportJobRequest 请求参数}): {@link CreateComponentExportJobResponse 返回参数} */
  CreateComponentExportJob(data: CreateComponentExportJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreateComponentExportJobResponse>;
  /** {@link CreateDefenceVulExportJob 创建支持防御的漏洞导出任务}({@link CreateDefenceVulExportJobRequest 请求参数}): {@link CreateDefenceVulExportJobResponse 返回参数} */
  CreateDefenceVulExportJob(data?: CreateDefenceVulExportJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDefenceVulExportJobResponse>;
  /** {@link CreateEmergencyVulExportJob 创建应急漏洞导出任务}({@link CreateEmergencyVulExportJobRequest 请求参数}): {@link CreateEmergencyVulExportJobResponse 返回参数} */
  CreateEmergencyVulExportJob(data?: CreateEmergencyVulExportJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreateEmergencyVulExportJobResponse>;
  /** {@link CreateEscapeEventsExportJob 创建逃逸事件导出异步任务}({@link CreateEscapeEventsExportJobRequest 请求参数}): {@link CreateEscapeEventsExportJobResponse 返回参数} */
  CreateEscapeEventsExportJob(data?: CreateEscapeEventsExportJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreateEscapeEventsExportJobResponse>;
  /** {@link CreateEscapeWhiteListExportJob 创建逃逸白名单导出任务}({@link CreateEscapeWhiteListExportJobRequest 请求参数}): {@link CreateEscapeWhiteListExportJobResponse 返回参数} */
  CreateEscapeWhiteListExportJob(data?: CreateEscapeWhiteListExportJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreateEscapeWhiteListExportJobResponse>;
  /** {@link CreateExportComplianceStatusListJob 创建一个导出安全合规信息的任务}({@link CreateExportComplianceStatusListJobRequest 请求参数}): {@link CreateExportComplianceStatusListJobResponse 返回参数} */
  CreateExportComplianceStatusListJob(data: CreateExportComplianceStatusListJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreateExportComplianceStatusListJobResponse>;
  /** {@link CreateHostExportJob 创建主机列表导出任务}({@link CreateHostExportJobRequest 请求参数}): {@link CreateHostExportJobResponse 返回参数} */
  CreateHostExportJob(data?: CreateHostExportJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreateHostExportJobResponse>;
  /** {@link CreateImageExportJob 创建镜像导出任务}({@link CreateImageExportJobRequest 请求参数}): {@link CreateImageExportJobResponse 返回参数} */
  CreateImageExportJob(data?: CreateImageExportJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreateImageExportJobResponse>;
  /** {@link CreateNetworkFirewallClusterRefresh 容器网络集群下发刷新任务}({@link CreateNetworkFirewallClusterRefreshRequest 请求参数}): {@link CreateNetworkFirewallClusterRefreshResponse 返回参数} */
  CreateNetworkFirewallClusterRefresh(data?: CreateNetworkFirewallClusterRefreshRequest, config?: AxiosRequestConfig): AxiosPromise<CreateNetworkFirewallClusterRefreshResponse>;
  /** {@link CreateNetworkFirewallPolicyDiscover 容器网络集群网络策略创建自动发现任务}({@link CreateNetworkFirewallPolicyDiscoverRequest 请求参数}): {@link CreateNetworkFirewallPolicyDiscoverResponse 返回参数} */
  CreateNetworkFirewallPolicyDiscover(data: CreateNetworkFirewallPolicyDiscoverRequest, config?: AxiosRequestConfig): AxiosPromise<CreateNetworkFirewallPolicyDiscoverResponse>;
  /** {@link CreateNetworkFirewallPublish 容器网络创建网络策略发布任务}({@link CreateNetworkFirewallPublishRequest 请求参数}): {@link CreateNetworkFirewallPublishResponse 返回参数} */
  CreateNetworkFirewallPublish(data: CreateNetworkFirewallPublishRequest, config?: AxiosRequestConfig): AxiosPromise<CreateNetworkFirewallPublishResponse>;
  /** {@link CreateNetworkFirewallUndoPublish 容器网络创建网络策略撤销任务}({@link CreateNetworkFirewallUndoPublishRequest 请求参数}): {@link CreateNetworkFirewallUndoPublishResponse 返回参数} */
  CreateNetworkFirewallUndoPublish(data: CreateNetworkFirewallUndoPublishRequest, config?: AxiosRequestConfig): AxiosPromise<CreateNetworkFirewallUndoPublishResponse>;
  /** {@link CreateOrModifyPostPayCores 创建或者编辑弹性计费上限}({@link CreateOrModifyPostPayCoresRequest 请求参数}): {@link CreateOrModifyPostPayCoresResponse 返回参数} */
  CreateOrModifyPostPayCores(data: CreateOrModifyPostPayCoresRequest, config?: AxiosRequestConfig): AxiosPromise<CreateOrModifyPostPayCoresResponse>;
  /** {@link CreateProcessEventsExportJob 创建异常进程事件导出异步任务}({@link CreateProcessEventsExportJobRequest 请求参数}): {@link CreateProcessEventsExportJobResponse 返回参数} */
  CreateProcessEventsExportJob(data?: CreateProcessEventsExportJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreateProcessEventsExportJobResponse>;
  /** {@link CreateRefreshTask 下发刷新任务}({@link CreateRefreshTaskRequest 请求参数}): {@link CreateRefreshTaskResponse 返回参数} */
  CreateRefreshTask(data?: CreateRefreshTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateRefreshTaskResponse>;
  /** {@link CreateRiskDnsEventExportJob 创建恶意请求事件导出任务}({@link CreateRiskDnsEventExportJobRequest 请求参数}): {@link CreateRiskDnsEventExportJobResponse 返回参数} */
  CreateRiskDnsEventExportJob(data?: CreateRiskDnsEventExportJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreateRiskDnsEventExportJobResponse>;
  /** {@link CreateSearchTemplate 添加检索模板}({@link CreateSearchTemplateRequest 请求参数}): {@link CreateSearchTemplateResponse 返回参数} */
  CreateSearchTemplate(data: CreateSearchTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSearchTemplateResponse>;
  /** {@link CreateSystemVulExportJob 创建系统漏洞导出任务}({@link CreateSystemVulExportJobRequest 请求参数}): {@link CreateSystemVulExportJobResponse 返回参数} */
  CreateSystemVulExportJob(data?: CreateSystemVulExportJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSystemVulExportJobResponse>;
  /** {@link CreateVirusScanAgain 运行时文件查杀重新检测}({@link CreateVirusScanAgainRequest 请求参数}): {@link CreateVirusScanAgainResponse 返回参数} */
  CreateVirusScanAgain(data: CreateVirusScanAgainRequest, config?: AxiosRequestConfig): AxiosPromise<CreateVirusScanAgainResponse>;
  /** {@link CreateVirusScanTask 运行时文件查杀一键扫描}({@link CreateVirusScanTaskRequest 请求参数}): {@link CreateVirusScanTaskResponse 返回参数} */
  CreateVirusScanTask(data: CreateVirusScanTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateVirusScanTaskResponse>;
  /** {@link CreateVulContainerExportJob 创建受漏洞影响的容器导出任务}({@link CreateVulContainerExportJobRequest 请求参数}): {@link CreateVulContainerExportJobResponse 返回参数} */
  CreateVulContainerExportJob(data: CreateVulContainerExportJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreateVulContainerExportJobResponse>;
  /** {@link CreateVulDefenceEventExportJob 创建漏洞防御导出任务}({@link CreateVulDefenceEventExportJobRequest 请求参数}): {@link CreateVulDefenceEventExportJobResponse 返回参数} */
  CreateVulDefenceEventExportJob(data?: CreateVulDefenceEventExportJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreateVulDefenceEventExportJobResponse>;
  /** {@link CreateVulDefenceHostExportJob 创建漏洞防御主机导出任务}({@link CreateVulDefenceHostExportJobRequest 请求参数}): {@link CreateVulDefenceHostExportJobResponse 返回参数} */
  CreateVulDefenceHostExportJob(data?: CreateVulDefenceHostExportJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreateVulDefenceHostExportJobResponse>;
  /** {@link CreateVulExportJob 查询本地镜像漏洞列表导出}({@link CreateVulExportJobRequest 请求参数}): {@link CreateVulExportJobResponse 返回参数} */
  CreateVulExportJob(data: CreateVulExportJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreateVulExportJobResponse>;
  /** {@link CreateVulImageExportJob 创建导出受漏洞影响的镜像任务}({@link CreateVulImageExportJobRequest 请求参数}): {@link CreateVulImageExportJobResponse 返回参数} */
  CreateVulImageExportJob(data: CreateVulImageExportJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreateVulImageExportJobResponse>;
  /** {@link CreateVulScanTask 创建漏洞扫描任务}({@link CreateVulScanTaskRequest 请求参数}): {@link CreateVulScanTaskResponse 返回参数} */
  CreateVulScanTask(data?: CreateVulScanTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateVulScanTaskResponse>;
  /** {@link CreateWebVulExportJob 创建web漏洞导出任务}({@link CreateWebVulExportJobRequest 请求参数}): {@link CreateWebVulExportJobResponse 返回参数} */
  CreateWebVulExportJob(data?: CreateWebVulExportJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreateWebVulExportJobResponse>;
  /** {@link DeleteAbnormalProcessRules 删除运行时异常进程策略}({@link DeleteAbnormalProcessRulesRequest 请求参数}): {@link DeleteAbnormalProcessRulesResponse 返回参数} */
  DeleteAbnormalProcessRules(data: DeleteAbnormalProcessRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAbnormalProcessRulesResponse>;
  /** {@link DeleteAccessControlRules 删除运行时访问控制策略}({@link DeleteAccessControlRulesRequest 请求参数}): {@link DeleteAccessControlRulesResponse 返回参数} */
  DeleteAccessControlRules(data: DeleteAccessControlRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAccessControlRulesResponse>;
  /** {@link DeleteComplianceAssetPolicySetFromWhitelist 删除安全合规忽略项， 资产+检测项列表}({@link DeleteComplianceAssetPolicySetFromWhitelistRequest 请求参数}): {@link DeleteComplianceAssetPolicySetFromWhitelistResponse 返回参数} */
  DeleteComplianceAssetPolicySetFromWhitelist(data: DeleteComplianceAssetPolicySetFromWhitelistRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteComplianceAssetPolicySetFromWhitelistResponse>;
  /** {@link DeleteCompliancePolicyAssetSetFromWhitelist 删除检测项+资产列表的白名单策略}({@link DeleteCompliancePolicyAssetSetFromWhitelistRequest 请求参数}): {@link DeleteCompliancePolicyAssetSetFromWhitelistResponse 返回参数} */
  DeleteCompliancePolicyAssetSetFromWhitelist(data: DeleteCompliancePolicyAssetSetFromWhitelistRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCompliancePolicyAssetSetFromWhitelistResponse>;
  /** {@link DeleteCompliancePolicyItemFromWhitelist 安全合规取消忽略检测项列表}({@link DeleteCompliancePolicyItemFromWhitelistRequest 请求参数}): {@link DeleteCompliancePolicyItemFromWhitelistResponse 返回参数} */
  DeleteCompliancePolicyItemFromWhitelist(data: DeleteCompliancePolicyItemFromWhitelistRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCompliancePolicyItemFromWhitelistResponse>;
  /** {@link DeleteEscapeWhiteList 删除逃逸白名单}({@link DeleteEscapeWhiteListRequest 请求参数}): {@link DeleteEscapeWhiteListResponse 返回参数} */
  DeleteEscapeWhiteList(data: DeleteEscapeWhiteListRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteEscapeWhiteListResponse>;
  /** {@link DeleteIgnoreVul 取消漏洞扫描忽略漏洞}({@link DeleteIgnoreVulRequest 请求参数}): {@link DeleteIgnoreVulResponse 返回参数} */
  DeleteIgnoreVul(data: DeleteIgnoreVulRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteIgnoreVulResponse>;
  /** {@link DeleteMachine 卸载Agent客户端}({@link DeleteMachineRequest 请求参数}): {@link DeleteMachineResponse 返回参数} */
  DeleteMachine(data: DeleteMachineRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteMachineResponse>;
  /** {@link DeleteNetworkFirewallPolicyDetail 容器网络创建网络策略删除任务}({@link DeleteNetworkFirewallPolicyDetailRequest 请求参数}): {@link DeleteNetworkFirewallPolicyDetailResponse 返回参数} */
  DeleteNetworkFirewallPolicyDetail(data: DeleteNetworkFirewallPolicyDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteNetworkFirewallPolicyDetailResponse>;
  /** {@link DeleteReverseShellEvents 删除运行时反弹shell事件}({@link DeleteReverseShellEventsRequest 请求参数}): {@link DeleteReverseShellEventsResponse 返回参数} */
  DeleteReverseShellEvents(data: DeleteReverseShellEventsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteReverseShellEventsResponse>;
  /** {@link DeleteReverseShellWhiteLists 删除运行时反弹shell白名单}({@link DeleteReverseShellWhiteListsRequest 请求参数}): {@link DeleteReverseShellWhiteListsResponse 返回参数} */
  DeleteReverseShellWhiteLists(data: DeleteReverseShellWhiteListsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteReverseShellWhiteListsResponse>;
  /** {@link DeleteRiskSyscallEvents 删除运行时高危系统调用事件}({@link DeleteRiskSyscallEventsRequest 请求参数}): {@link DeleteRiskSyscallEventsResponse 返回参数} */
  DeleteRiskSyscallEvents(data: DeleteRiskSyscallEventsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRiskSyscallEventsResponse>;
  /** {@link DeleteRiskSyscallWhiteLists 删除运行时高危系统调用白名单}({@link DeleteRiskSyscallWhiteListsRequest 请求参数}): {@link DeleteRiskSyscallWhiteListsResponse 返回参数} */
  DeleteRiskSyscallWhiteLists(data: DeleteRiskSyscallWhiteListsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRiskSyscallWhiteListsResponse>;
  /** {@link DeleteSearchTemplate 删除检索模板}({@link DeleteSearchTemplateRequest 请求参数}): {@link DeleteSearchTemplateResponse 返回参数} */
  DeleteSearchTemplate(data: DeleteSearchTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteSearchTemplateResponse>;
  /** {@link DescribeABTestConfig 获取用户当前灰度配置}({@link DescribeABTestConfigRequest 请求参数}): {@link DescribeABTestConfigResponse 返回参数} */
  DescribeABTestConfig(data?: DescribeABTestConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeABTestConfigResponse>;
  /** {@link DescribeAbnormalProcessDetail 运行时异常进程事件详细信息}({@link DescribeAbnormalProcessDetailRequest 请求参数}): {@link DescribeAbnormalProcessDetailResponse 返回参数} */
  DescribeAbnormalProcessDetail(data: DescribeAbnormalProcessDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAbnormalProcessDetailResponse>;
  /** {@link DescribeAbnormalProcessEventTendency 查询待处理异常进程事件趋势}({@link DescribeAbnormalProcessEventTendencyRequest 请求参数}): {@link DescribeAbnormalProcessEventTendencyResponse 返回参数} */
  DescribeAbnormalProcessEventTendency(data: DescribeAbnormalProcessEventTendencyRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAbnormalProcessEventTendencyResponse>;
  /** {@link DescribeAbnormalProcessEvents 运行时异常进程列表}({@link DescribeAbnormalProcessEventsRequest 请求参数}): {@link DescribeAbnormalProcessEventsResponse 返回参数} */
  DescribeAbnormalProcessEvents(data?: DescribeAbnormalProcessEventsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAbnormalProcessEventsResponse>;
  /** {@link DescribeAbnormalProcessEventsExport 运行时异常进程列表导出}({@link DescribeAbnormalProcessEventsExportRequest 请求参数}): {@link DescribeAbnormalProcessEventsExportResponse 返回参数} */
  DescribeAbnormalProcessEventsExport(data: DescribeAbnormalProcessEventsExportRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAbnormalProcessEventsExportResponse>;
  /** {@link DescribeAbnormalProcessLevelSummary 统计异常进程各威胁等级待处理事件数}({@link DescribeAbnormalProcessLevelSummaryRequest 请求参数}): {@link DescribeAbnormalProcessLevelSummaryResponse 返回参数} */
  DescribeAbnormalProcessLevelSummary(data?: DescribeAbnormalProcessLevelSummaryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAbnormalProcessLevelSummaryResponse>;
  /** {@link DescribeAbnormalProcessRuleDetail 查询运行时异常进程策略详细信息}({@link DescribeAbnormalProcessRuleDetailRequest 请求参数}): {@link DescribeAbnormalProcessRuleDetailResponse 返回参数} */
  DescribeAbnormalProcessRuleDetail(data?: DescribeAbnormalProcessRuleDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAbnormalProcessRuleDetailResponse>;
  /** {@link DescribeAbnormalProcessRules 运行时异常进程策略列表}({@link DescribeAbnormalProcessRulesRequest 请求参数}): {@link DescribeAbnormalProcessRulesResponse 返回参数} */
  DescribeAbnormalProcessRules(data?: DescribeAbnormalProcessRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAbnormalProcessRulesResponse>;
  /** {@link DescribeAbnormalProcessRulesExport 运行时异常进程策略列表导出}({@link DescribeAbnormalProcessRulesExportRequest 请求参数}): {@link DescribeAbnormalProcessRulesExportResponse 返回参数} */
  DescribeAbnormalProcessRulesExport(data: DescribeAbnormalProcessRulesExportRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAbnormalProcessRulesExportResponse>;
  /** {@link DescribeAccessControlDetail 运行时访问控制事件详细信息}({@link DescribeAccessControlDetailRequest 请求参数}): {@link DescribeAccessControlDetailResponse 返回参数} */
  DescribeAccessControlDetail(data: DescribeAccessControlDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAccessControlDetailResponse>;
  /** {@link DescribeAccessControlEvents 运行时访问控制事件列表}({@link DescribeAccessControlEventsRequest 请求参数}): {@link DescribeAccessControlEventsResponse 返回参数} */
  DescribeAccessControlEvents(data?: DescribeAccessControlEventsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAccessControlEventsResponse>;
  /** {@link DescribeAccessControlEventsExport 运行时访问控制事件列表导出}({@link DescribeAccessControlEventsExportRequest 请求参数}): {@link DescribeAccessControlEventsExportResponse 返回参数} */
  DescribeAccessControlEventsExport(data?: DescribeAccessControlEventsExportRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAccessControlEventsExportResponse>;
  /** {@link DescribeAccessControlRuleDetail 查询运行时访问控制策略详细信息}({@link DescribeAccessControlRuleDetailRequest 请求参数}): {@link DescribeAccessControlRuleDetailResponse 返回参数} */
  DescribeAccessControlRuleDetail(data?: DescribeAccessControlRuleDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAccessControlRuleDetailResponse>;
  /** {@link DescribeAccessControlRules 运行时访问控制策略列表}({@link DescribeAccessControlRulesRequest 请求参数}): {@link DescribeAccessControlRulesResponse 返回参数} */
  DescribeAccessControlRules(data?: DescribeAccessControlRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAccessControlRulesResponse>;
  /** {@link DescribeAccessControlRulesExport 运行时访问控制策略列表导出}({@link DescribeAccessControlRulesExportRequest 请求参数}): {@link DescribeAccessControlRulesExportResponse 返回参数} */
  DescribeAccessControlRulesExport(data: DescribeAccessControlRulesExportRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAccessControlRulesExportResponse>;
  /** {@link DescribeAffectedClusterCount 获取受影响的集群数量}({@link DescribeAffectedClusterCountRequest 请求参数}): {@link DescribeAffectedClusterCountResponse 返回参数} */
  DescribeAffectedClusterCount(data?: DescribeAffectedClusterCountRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAffectedClusterCountResponse>;
  /** {@link DescribeAffectedNodeList 查询节点类型的影响范围}({@link DescribeAffectedNodeListRequest 请求参数}): {@link DescribeAffectedNodeListResponse 返回参数} */
  DescribeAffectedNodeList(data: DescribeAffectedNodeListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAffectedNodeListResponse>;
  /** {@link DescribeAffectedWorkloadList 查询workload类型的影响范围}({@link DescribeAffectedWorkloadListRequest 请求参数}): {@link DescribeAffectedWorkloadListResponse 返回参数} */
  DescribeAffectedWorkloadList(data: DescribeAffectedWorkloadListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAffectedWorkloadListResponse>;
  /** {@link DescribeAgentDaemonSetCmd 查询平行容器安装命令}({@link DescribeAgentDaemonSetCmdRequest 请求参数}): {@link DescribeAgentDaemonSetCmdResponse 返回参数} */
  DescribeAgentDaemonSetCmd(data: DescribeAgentDaemonSetCmdRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAgentDaemonSetCmdResponse>;
  /** {@link DescribeAgentInstallCommand 查询agent安装命令}({@link DescribeAgentInstallCommandRequest 请求参数}): {@link DescribeAgentInstallCommandResponse 返回参数} */
  DescribeAgentInstallCommand(data: DescribeAgentInstallCommandRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAgentInstallCommandResponse>;
  /** {@link DescribeAssetAppServiceList 查询app服务列表}({@link DescribeAssetAppServiceListRequest 请求参数}): {@link DescribeAssetAppServiceListResponse 返回参数} */
  DescribeAssetAppServiceList(data?: DescribeAssetAppServiceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetAppServiceListResponse>;
  /** {@link DescribeAssetComponentList 查询容器组件列表}({@link DescribeAssetComponentListRequest 请求参数}): {@link DescribeAssetComponentListResponse 返回参数} */
  DescribeAssetComponentList(data: DescribeAssetComponentListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetComponentListResponse>;
  /** {@link DescribeAssetContainerDetail 查询容器信息}({@link DescribeAssetContainerDetailRequest 请求参数}): {@link DescribeAssetContainerDetailResponse 返回参数} */
  DescribeAssetContainerDetail(data: DescribeAssetContainerDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetContainerDetailResponse>;
  /** {@link DescribeAssetContainerList 查询容器列表}({@link DescribeAssetContainerListRequest 请求参数}): {@link DescribeAssetContainerListResponse 返回参数} */
  DescribeAssetContainerList(data?: DescribeAssetContainerListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetContainerListResponse>;
  /** {@link DescribeAssetDBServiceList 查询db服务列表}({@link DescribeAssetDBServiceListRequest 请求参数}): {@link DescribeAssetDBServiceListResponse 返回参数} */
  DescribeAssetDBServiceList(data?: DescribeAssetDBServiceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetDBServiceListResponse>;
  /** {@link DescribeAssetHostDetail 查询主机信息}({@link DescribeAssetHostDetailRequest 请求参数}): {@link DescribeAssetHostDetailResponse 返回参数} */
  DescribeAssetHostDetail(data: DescribeAssetHostDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetHostDetailResponse>;
  /** {@link DescribeAssetHostList 查询主机列表}({@link DescribeAssetHostListRequest 请求参数}): {@link DescribeAssetHostListResponse 返回参数} */
  DescribeAssetHostList(data?: DescribeAssetHostListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetHostListResponse>;
  /** {@link DescribeAssetImageBindRuleInfo 镜像绑定规则列表}({@link DescribeAssetImageBindRuleInfoRequest 请求参数}): {@link DescribeAssetImageBindRuleInfoResponse 返回参数} */
  DescribeAssetImageBindRuleInfo(data?: DescribeAssetImageBindRuleInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetImageBindRuleInfoResponse>;
  /** {@link DescribeAssetImageDetail 查询镜像信息}({@link DescribeAssetImageDetailRequest 请求参数}): {@link DescribeAssetImageDetailResponse 返回参数} */
  DescribeAssetImageDetail(data: DescribeAssetImageDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetImageDetailResponse>;
  /** {@link DescribeAssetImageHostList 查询镜像关联主机}({@link DescribeAssetImageHostListRequest 请求参数}): {@link DescribeAssetImageHostListResponse 返回参数} */
  DescribeAssetImageHostList(data?: DescribeAssetImageHostListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetImageHostListResponse>;
  /** {@link DescribeAssetImageList 查询镜像列表}({@link DescribeAssetImageListRequest 请求参数}): {@link DescribeAssetImageListResponse 返回参数} */
  DescribeAssetImageList(data?: DescribeAssetImageListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetImageListResponse>;
  /** {@link DescribeAssetImageListExport 查询镜像列表导出}({@link DescribeAssetImageListExportRequest 请求参数}): {@link DescribeAssetImageListExportResponse 返回参数} */
  DescribeAssetImageListExport(data: DescribeAssetImageListExportRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetImageListExportResponse>;
  /** {@link DescribeAssetImageRegistryAssetStatus 查看镜像仓库资产更新进度状态}({@link DescribeAssetImageRegistryAssetStatusRequest 请求参数}): {@link DescribeAssetImageRegistryAssetStatusResponse 返回参数} */
  DescribeAssetImageRegistryAssetStatus(data?: DescribeAssetImageRegistryAssetStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetImageRegistryAssetStatusResponse>;
  /** {@link DescribeAssetImageRegistryDetail 镜像仓库查询镜像仓库详情}({@link DescribeAssetImageRegistryDetailRequest 请求参数}): {@link DescribeAssetImageRegistryDetailResponse 返回参数} */
  DescribeAssetImageRegistryDetail(data?: DescribeAssetImageRegistryDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetImageRegistryDetailResponse>;
  /** {@link DescribeAssetImageRegistryList 镜像仓库查询镜像仓库列表}({@link DescribeAssetImageRegistryListRequest 请求参数}): {@link DescribeAssetImageRegistryListResponse 返回参数} */
  DescribeAssetImageRegistryList(data?: DescribeAssetImageRegistryListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetImageRegistryListResponse>;
  /** {@link DescribeAssetImageRegistryListExport 镜像仓库镜像列表导出}({@link DescribeAssetImageRegistryListExportRequest 请求参数}): {@link DescribeAssetImageRegistryListExportResponse 返回参数} */
  DescribeAssetImageRegistryListExport(data: DescribeAssetImageRegistryListExportRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetImageRegistryListExportResponse>;
  /** {@link DescribeAssetImageRegistryRegistryDetail 查看单个镜像仓库详细信息}({@link DescribeAssetImageRegistryRegistryDetailRequest 请求参数}): {@link DescribeAssetImageRegistryRegistryDetailResponse 返回参数} */
  DescribeAssetImageRegistryRegistryDetail(data: DescribeAssetImageRegistryRegistryDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetImageRegistryRegistryDetailResponse>;
  /** {@link DescribeAssetImageRegistryRegistryList 镜像仓库仓库列表}({@link DescribeAssetImageRegistryRegistryListRequest 请求参数}): {@link DescribeAssetImageRegistryRegistryListResponse 返回参数} */
  DescribeAssetImageRegistryRegistryList(data?: DescribeAssetImageRegistryRegistryListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetImageRegistryRegistryListResponse>;
  /** {@link DescribeAssetImageRegistryRiskInfoList 镜像仓库查询镜像高危行为列表}({@link DescribeAssetImageRegistryRiskInfoListRequest 请求参数}): {@link DescribeAssetImageRegistryRiskInfoListResponse 返回参数} */
  DescribeAssetImageRegistryRiskInfoList(data?: DescribeAssetImageRegistryRiskInfoListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetImageRegistryRiskInfoListResponse>;
  /** {@link DescribeAssetImageRegistryRiskListExport 镜像仓库敏感信息列表导出}({@link DescribeAssetImageRegistryRiskListExportRequest 请求参数}): {@link DescribeAssetImageRegistryRiskListExportResponse 返回参数} */
  DescribeAssetImageRegistryRiskListExport(data: DescribeAssetImageRegistryRiskListExportRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetImageRegistryRiskListExportResponse>;
  /** {@link DescribeAssetImageRegistryScanStatusOneKey 镜像仓库查询一键镜像扫描状态}({@link DescribeAssetImageRegistryScanStatusOneKeyRequest 请求参数}): {@link DescribeAssetImageRegistryScanStatusOneKeyResponse 返回参数} */
  DescribeAssetImageRegistryScanStatusOneKey(data?: DescribeAssetImageRegistryScanStatusOneKeyRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetImageRegistryScanStatusOneKeyResponse>;
  /** {@link DescribeAssetImageRegistrySummary 镜像仓库查询镜像统计信息}({@link DescribeAssetImageRegistrySummaryRequest 请求参数}): {@link DescribeAssetImageRegistrySummaryResponse 返回参数} */
  DescribeAssetImageRegistrySummary(data?: DescribeAssetImageRegistrySummaryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetImageRegistrySummaryResponse>;
  /** {@link DescribeAssetImageRegistryVirusList 镜像仓库查询木马病毒列表}({@link DescribeAssetImageRegistryVirusListRequest 请求参数}): {@link DescribeAssetImageRegistryVirusListResponse 返回参数} */
  DescribeAssetImageRegistryVirusList(data?: DescribeAssetImageRegistryVirusListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetImageRegistryVirusListResponse>;
  /** {@link DescribeAssetImageRegistryVirusListExport 镜像仓库木马信息列表导出}({@link DescribeAssetImageRegistryVirusListExportRequest 请求参数}): {@link DescribeAssetImageRegistryVirusListExportResponse 返回参数} */
  DescribeAssetImageRegistryVirusListExport(data: DescribeAssetImageRegistryVirusListExportRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetImageRegistryVirusListExportResponse>;
  /** {@link DescribeAssetImageRegistryVulList 镜像仓库查询镜像漏洞列表}({@link DescribeAssetImageRegistryVulListRequest 请求参数}): {@link DescribeAssetImageRegistryVulListResponse 返回参数} */
  DescribeAssetImageRegistryVulList(data?: DescribeAssetImageRegistryVulListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetImageRegistryVulListResponse>;
  /** {@link DescribeAssetImageRegistryVulListExport 镜像仓库漏洞列表导出}({@link DescribeAssetImageRegistryVulListExportRequest 请求参数}): {@link DescribeAssetImageRegistryVulListExportResponse 返回参数} */
  DescribeAssetImageRegistryVulListExport(data: DescribeAssetImageRegistryVulListExportRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetImageRegistryVulListExportResponse>;
  /** {@link DescribeAssetImageRiskList 查询镜像风险列表}({@link DescribeAssetImageRiskListRequest 请求参数}): {@link DescribeAssetImageRiskListResponse 返回参数} */
  DescribeAssetImageRiskList(data: DescribeAssetImageRiskListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetImageRiskListResponse>;
  /** {@link DescribeAssetImageRiskListExport 镜像风险列表导出}({@link DescribeAssetImageRiskListExportRequest 请求参数}): {@link DescribeAssetImageRiskListExportResponse 返回参数} */
  DescribeAssetImageRiskListExport(data: DescribeAssetImageRiskListExportRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetImageRiskListExportResponse>;
  /** {@link DescribeAssetImageScanSetting 获取镜像扫描设置信息}({@link DescribeAssetImageScanSettingRequest 请求参数}): {@link DescribeAssetImageScanSettingResponse 返回参数} */
  DescribeAssetImageScanSetting(data?: DescribeAssetImageScanSettingRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetImageScanSettingResponse>;
  /** {@link DescribeAssetImageScanStatus 查询镜像扫描状态}({@link DescribeAssetImageScanStatusRequest 请求参数}): {@link DescribeAssetImageScanStatusResponse 返回参数} */
  DescribeAssetImageScanStatus(data?: DescribeAssetImageScanStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetImageScanStatusResponse>;
  /** {@link DescribeAssetImageScanTask 查询正在一键扫描的镜像扫描taskid}({@link DescribeAssetImageScanTaskRequest 请求参数}): {@link DescribeAssetImageScanTaskResponse 返回参数} */
  DescribeAssetImageScanTask(data?: DescribeAssetImageScanTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetImageScanTaskResponse>;
  /** {@link DescribeAssetImageSimpleList 查询镜像简略信息列表}({@link DescribeAssetImageSimpleListRequest 请求参数}): {@link DescribeAssetImageSimpleListResponse 返回参数} */
  DescribeAssetImageSimpleList(data?: DescribeAssetImageSimpleListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetImageSimpleListResponse>;
  /** {@link DescribeAssetImageVirusList 查询镜像病毒列表}({@link DescribeAssetImageVirusListRequest 请求参数}): {@link DescribeAssetImageVirusListResponse 返回参数} */
  DescribeAssetImageVirusList(data: DescribeAssetImageVirusListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetImageVirusListResponse>;
  /** {@link DescribeAssetImageVirusListExport 镜像木马列表导出}({@link DescribeAssetImageVirusListExportRequest 请求参数}): {@link DescribeAssetImageVirusListExportResponse 返回参数} */
  DescribeAssetImageVirusListExport(data: DescribeAssetImageVirusListExportRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetImageVirusListExportResponse>;
  /** {@link DescribeAssetImageVulList 查询镜像漏洞列表}({@link DescribeAssetImageVulListRequest 请求参数}): {@link DescribeAssetImageVulListResponse 返回参数} */
  DescribeAssetImageVulList(data: DescribeAssetImageVulListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetImageVulListResponse>;
  /** {@link DescribeAssetImageVulListExport 镜像漏洞列表导出}({@link DescribeAssetImageVulListExportRequest 请求参数}): {@link DescribeAssetImageVulListExportResponse 返回参数} */
  DescribeAssetImageVulListExport(data: DescribeAssetImageVulListExportRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetImageVulListExportResponse>;
  /** {@link DescribeAssetPortList 查询端口占用列表}({@link DescribeAssetPortListRequest 请求参数}): {@link DescribeAssetPortListResponse 返回参数} */
  DescribeAssetPortList(data?: DescribeAssetPortListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetPortListResponse>;
  /** {@link DescribeAssetProcessList 查询进程列表}({@link DescribeAssetProcessListRequest 请求参数}): {@link DescribeAssetProcessListResponse 返回参数} */
  DescribeAssetProcessList(data?: DescribeAssetProcessListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetProcessListResponse>;
  /** {@link DescribeAssetSummary 查询账户容器、镜像等统计信息}({@link DescribeAssetSummaryRequest 请求参数}): {@link DescribeAssetSummaryResponse 返回参数} */
  DescribeAssetSummary(data?: DescribeAssetSummaryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetSummaryResponse>;
  /** {@link DescribeAssetSyncLastTime 查询资产同步最近时间}({@link DescribeAssetSyncLastTimeRequest 请求参数}): {@link DescribeAssetSyncLastTimeResponse 返回参数} */
  DescribeAssetSyncLastTime(data?: DescribeAssetSyncLastTimeRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetSyncLastTimeResponse>;
  /** {@link DescribeAssetWebServiceList 查询web服务列表}({@link DescribeAssetWebServiceListRequest 请求参数}): {@link DescribeAssetWebServiceListResponse 返回参数} */
  DescribeAssetWebServiceList(data?: DescribeAssetWebServiceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetWebServiceListResponse>;
  /** {@link DescribeAutoAuthorizedRuleHost 查询自动授权规则授权范围主机信息}({@link DescribeAutoAuthorizedRuleHostRequest 请求参数}): {@link DescribeAutoAuthorizedRuleHostResponse 返回参数} */
  DescribeAutoAuthorizedRuleHost(data: DescribeAutoAuthorizedRuleHostRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAutoAuthorizedRuleHostResponse>;
  /** {@link DescribeCheckItemList 查询所有检查项接口}({@link DescribeCheckItemListRequest 请求参数}): {@link DescribeCheckItemListResponse 返回参数} */
  DescribeCheckItemList(data?: DescribeCheckItemListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCheckItemListResponse>;
  /** {@link DescribeClusterDetail 查询单个集群的详细信息}({@link DescribeClusterDetailRequest 请求参数}): {@link DescribeClusterDetailResponse 返回参数} */
  DescribeClusterDetail(data: DescribeClusterDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterDetailResponse>;
  /** {@link DescribeClusterSummary 查询用户集群资产总览}({@link DescribeClusterSummaryRequest 请求参数}): {@link DescribeClusterSummaryResponse 返回参数} */
  DescribeClusterSummary(data?: DescribeClusterSummaryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterSummaryResponse>;
  /** {@link DescribeComplianceAssetDetailInfo 安全合规查询某个资产的详情}({@link DescribeComplianceAssetDetailInfoRequest 请求参数}): {@link DescribeComplianceAssetDetailInfoResponse 返回参数} */
  DescribeComplianceAssetDetailInfo(data: DescribeComplianceAssetDetailInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeComplianceAssetDetailInfoResponse>;
  /** {@link DescribeComplianceAssetList 安全合规查询某类资产的列表}({@link DescribeComplianceAssetListRequest 请求参数}): {@link DescribeComplianceAssetListResponse 返回参数} */
  DescribeComplianceAssetList(data?: DescribeComplianceAssetListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeComplianceAssetListResponse>;
  /** {@link DescribeComplianceAssetPolicyItemList 安全合规查询某资产下的检测项列表}({@link DescribeComplianceAssetPolicyItemListRequest 请求参数}): {@link DescribeComplianceAssetPolicyItemListResponse 返回参数} */
  DescribeComplianceAssetPolicyItemList(data: DescribeComplianceAssetPolicyItemListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeComplianceAssetPolicyItemListResponse>;
  /** {@link DescribeCompliancePeriodTaskList 安全合规查询定时任务列表}({@link DescribeCompliancePeriodTaskListRequest 请求参数}): {@link DescribeCompliancePeriodTaskListResponse 返回参数} */
  DescribeCompliancePeriodTaskList(data?: DescribeCompliancePeriodTaskListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCompliancePeriodTaskListResponse>;
  /** {@link DescribeCompliancePolicyItemAffectedAssetList 安全合规查询检测项影响的资产列表}({@link DescribeCompliancePolicyItemAffectedAssetListRequest 请求参数}): {@link DescribeCompliancePolicyItemAffectedAssetListResponse 返回参数} */
  DescribeCompliancePolicyItemAffectedAssetList(data: DescribeCompliancePolicyItemAffectedAssetListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCompliancePolicyItemAffectedAssetListResponse>;
  /** {@link DescribeCompliancePolicyItemAffectedSummary 安全合规查询某检测项影响的信息}({@link DescribeCompliancePolicyItemAffectedSummaryRequest 请求参数}): {@link DescribeCompliancePolicyItemAffectedSummaryResponse 返回参数} */
  DescribeCompliancePolicyItemAffectedSummary(data: DescribeCompliancePolicyItemAffectedSummaryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCompliancePolicyItemAffectedSummaryResponse>;
  /** {@link DescribeComplianceScanFailedAssetList 安全合规查询上次检测失败的资产的列表}({@link DescribeComplianceScanFailedAssetListRequest 请求参数}): {@link DescribeComplianceScanFailedAssetListResponse 返回参数} */
  DescribeComplianceScanFailedAssetList(data?: DescribeComplianceScanFailedAssetListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeComplianceScanFailedAssetListResponse>;
  /** {@link DescribeComplianceTaskAssetSummary 安全合规查询上次任务的资产通过率汇总信息}({@link DescribeComplianceTaskAssetSummaryRequest 请求参数}): {@link DescribeComplianceTaskAssetSummaryResponse 返回参数} */
  DescribeComplianceTaskAssetSummary(data: DescribeComplianceTaskAssetSummaryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeComplianceTaskAssetSummaryResponse>;
  /** {@link DescribeComplianceTaskPolicyItemSummaryList 安全合规查询上次任务的检测项的汇总信息列表}({@link DescribeComplianceTaskPolicyItemSummaryListRequest 请求参数}): {@link DescribeComplianceTaskPolicyItemSummaryListResponse 返回参数} */
  DescribeComplianceTaskPolicyItemSummaryList(data?: DescribeComplianceTaskPolicyItemSummaryListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeComplianceTaskPolicyItemSummaryListResponse>;
  /** {@link DescribeComplianceWhitelistItemList 安全合规查询白名单列表}({@link DescribeComplianceWhitelistItemListRequest 请求参数}): {@link DescribeComplianceWhitelistItemListResponse 返回参数} */
  DescribeComplianceWhitelistItemList(data?: DescribeComplianceWhitelistItemListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeComplianceWhitelistItemListResponse>;
  /** {@link DescribeContainerAssetSummary 查询容器安全资产概览}({@link DescribeContainerAssetSummaryRequest 请求参数}): {@link DescribeContainerAssetSummaryResponse 返回参数} */
  DescribeContainerAssetSummary(data?: DescribeContainerAssetSummaryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeContainerAssetSummaryResponse>;
  /** {@link DescribeContainerSecEventSummary 查询容器安全未处理事件概览}({@link DescribeContainerSecEventSummaryRequest 请求参数}): {@link DescribeContainerSecEventSummaryResponse 返回参数} */
  DescribeContainerSecEventSummary(data?: DescribeContainerSecEventSummaryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeContainerSecEventSummaryResponse>;
  /** {@link DescribeESAggregations 获取ES字段聚合结果}({@link DescribeESAggregationsRequest 请求参数}): {@link DescribeESAggregationsResponse 返回参数} */
  DescribeESAggregations(data: DescribeESAggregationsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeESAggregationsResponse>;
  /** {@link DescribeESHits 获取ES查询文档列表}({@link DescribeESHitsRequest 请求参数}): {@link DescribeESHitsResponse 返回参数} */
  DescribeESHits(data: DescribeESHitsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeESHitsResponse>;
  /** {@link DescribeEmergencyVulList 查询应急漏洞列表}({@link DescribeEmergencyVulListRequest 请求参数}): {@link DescribeEmergencyVulListResponse 返回参数} */
  DescribeEmergencyVulList(data?: DescribeEmergencyVulListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEmergencyVulListResponse>;
  /** {@link DescribeEscapeEventDetail 查询容器逃逸事件详情}({@link DescribeEscapeEventDetailRequest 请求参数}): {@link DescribeEscapeEventDetailResponse 返回参数} */
  DescribeEscapeEventDetail(data: DescribeEscapeEventDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEscapeEventDetailResponse>;
  /** {@link DescribeEscapeEventInfo 查询容器逃逸事件列表}({@link DescribeEscapeEventInfoRequest 请求参数}): {@link DescribeEscapeEventInfoResponse 返回参数} */
  DescribeEscapeEventInfo(data?: DescribeEscapeEventInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEscapeEventInfoResponse>;
  /** {@link DescribeEscapeEventTendency 查询待处理逃逸事件趋势}({@link DescribeEscapeEventTendencyRequest 请求参数}): {@link DescribeEscapeEventTendencyResponse 返回参数} */
  DescribeEscapeEventTendency(data: DescribeEscapeEventTendencyRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEscapeEventTendencyResponse>;
  /** {@link DescribeEscapeEventTypeSummary 统计容器逃逸各事件类型和待处理事件数}({@link DescribeEscapeEventTypeSummaryRequest 请求参数}): {@link DescribeEscapeEventTypeSummaryResponse 返回参数} */
  DescribeEscapeEventTypeSummary(data?: DescribeEscapeEventTypeSummaryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEscapeEventTypeSummaryResponse>;
  /** {@link DescribeEscapeEventsExport 查询容器逃逸事件列表导出}({@link DescribeEscapeEventsExportRequest 请求参数}): {@link DescribeEscapeEventsExportResponse 返回参数} */
  DescribeEscapeEventsExport(data: DescribeEscapeEventsExportRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEscapeEventsExportResponse>;
  /** {@link DescribeEscapeRuleInfo 查询容器逃逸扫描规则信息}({@link DescribeEscapeRuleInfoRequest 请求参数}): {@link DescribeEscapeRuleInfoResponse 返回参数} */
  DescribeEscapeRuleInfo(data?: DescribeEscapeRuleInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEscapeRuleInfoResponse>;
  /** {@link DescribeEscapeSafeState 查询容器逃逸安全状态}({@link DescribeEscapeSafeStateRequest 请求参数}): {@link DescribeEscapeSafeStateResponse 返回参数} */
  DescribeEscapeSafeState(data?: DescribeEscapeSafeStateRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEscapeSafeStateResponse>;
  /** {@link DescribeEscapeWhiteList 查询逃逸白名单}({@link DescribeEscapeWhiteListRequest 请求参数}): {@link DescribeEscapeWhiteListResponse 返回参数} */
  DescribeEscapeWhiteList(data?: DescribeEscapeWhiteListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEscapeWhiteListResponse>;
  /** {@link DescribeExportJobDownloadURL 查询导出任务下载URL}({@link DescribeExportJobDownloadURLRequest 请求参数}): {@link DescribeExportJobDownloadURLResponse 返回参数} */
  DescribeExportJobDownloadURL(data: DescribeExportJobDownloadURLRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeExportJobDownloadURLResponse>;
  /** {@link DescribeExportJobManageList 查询导出任务管理列表}({@link DescribeExportJobManageListRequest 请求参数}): {@link DescribeExportJobManageListResponse 返回参数} */
  DescribeExportJobManageList(data?: DescribeExportJobManageListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeExportJobManageListResponse>;
  /** {@link DescribeExportJobResult 查询导出任务的结果}({@link DescribeExportJobResultRequest 请求参数}): {@link DescribeExportJobResultResponse 返回参数} */
  DescribeExportJobResult(data: DescribeExportJobResultRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeExportJobResultResponse>;
  /** {@link DescribeImageAuthorizedInfo 查询镜像授权信息}({@link DescribeImageAuthorizedInfoRequest 请求参数}): {@link DescribeImageAuthorizedInfoResponse 返回参数} */
  DescribeImageAuthorizedInfo(data?: DescribeImageAuthorizedInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeImageAuthorizedInfoResponse>;
  /** {@link DescribeImageAutoAuthorizedLogList 查询镜像自动授权结果列表}({@link DescribeImageAutoAuthorizedLogListRequest 请求参数}): {@link DescribeImageAutoAuthorizedLogListResponse 返回参数} */
  DescribeImageAutoAuthorizedLogList(data: DescribeImageAutoAuthorizedLogListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeImageAutoAuthorizedLogListResponse>;
  /** {@link DescribeImageAutoAuthorizedRule 查询本地镜像自动授权规则}({@link DescribeImageAutoAuthorizedRuleRequest 请求参数}): {@link DescribeImageAutoAuthorizedRuleResponse 返回参数} */
  DescribeImageAutoAuthorizedRule(data?: DescribeImageAutoAuthorizedRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeImageAutoAuthorizedRuleResponse>;
  /** {@link DescribeImageAutoAuthorizedTaskList 查询镜像自动授权任务列表}({@link DescribeImageAutoAuthorizedTaskListRequest 请求参数}): {@link DescribeImageAutoAuthorizedTaskListResponse 返回参数} */
  DescribeImageAutoAuthorizedTaskList(data: DescribeImageAutoAuthorizedTaskListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeImageAutoAuthorizedTaskListResponse>;
  /** {@link DescribeImageComponentList 查询本地镜像组件列表}({@link DescribeImageComponentListRequest 请求参数}): {@link DescribeImageComponentListResponse 返回参数} */
  DescribeImageComponentList(data: DescribeImageComponentListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeImageComponentListResponse>;
  /** {@link DescribeImageRegistryNamespaceList 查询用户镜像仓库下的项目名称列表}({@link DescribeImageRegistryNamespaceListRequest 请求参数}): {@link DescribeImageRegistryNamespaceListResponse 返回参数} */
  DescribeImageRegistryNamespaceList(data?: DescribeImageRegistryNamespaceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeImageRegistryNamespaceListResponse>;
  /** {@link DescribeImageRegistryTimingScanTask 镜像仓库查看定时任务}({@link DescribeImageRegistryTimingScanTaskRequest 请求参数}): {@link DescribeImageRegistryTimingScanTaskResponse 返回参数} */
  DescribeImageRegistryTimingScanTask(data?: DescribeImageRegistryTimingScanTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeImageRegistryTimingScanTaskResponse>;
  /** {@link DescribeImageRiskSummary 查询本地镜像风险概览}({@link DescribeImageRiskSummaryRequest 请求参数}): {@link DescribeImageRiskSummaryResponse 返回参数} */
  DescribeImageRiskSummary(data?: DescribeImageRiskSummaryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeImageRiskSummaryResponse>;
  /** {@link DescribeImageRiskTendency 查询容器安全本地镜像风险趋势}({@link DescribeImageRiskTendencyRequest 请求参数}): {@link DescribeImageRiskTendencyResponse 返回参数} */
  DescribeImageRiskTendency(data: DescribeImageRiskTendencyRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeImageRiskTendencyResponse>;
  /** {@link DescribeImageSimpleList 查询全部镜像列表}({@link DescribeImageSimpleListRequest 请求参数}): {@link DescribeImageSimpleListResponse 返回参数} */
  DescribeImageSimpleList(data?: DescribeImageSimpleListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeImageSimpleListResponse>;
  /** {@link DescribeIndexList 获取索引列表}({@link DescribeIndexListRequest 请求参数}): {@link DescribeIndexListResponse 返回参数} */
  DescribeIndexList(data?: DescribeIndexListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIndexListResponse>;
  /** {@link DescribeInspectionReport 查询检查报告}({@link DescribeInspectionReportRequest 请求参数}): {@link DescribeInspectionReportResponse 返回参数} */
  DescribeInspectionReport(data?: DescribeInspectionReportRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInspectionReportResponse>;
  /** {@link DescribeLogStorageStatistic 获取日志检索容量使用统计}({@link DescribeLogStorageStatisticRequest 请求参数}): {@link DescribeLogStorageStatisticResponse 返回参数} */
  DescribeLogStorageStatistic(data?: DescribeLogStorageStatisticRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLogStorageStatisticResponse>;
  /** {@link DescribeNetworkFirewallAuditRecord 查询集群策略审计列表}({@link DescribeNetworkFirewallAuditRecordRequest 请求参数}): {@link DescribeNetworkFirewallAuditRecordResponse 返回参数} */
  DescribeNetworkFirewallAuditRecord(data?: DescribeNetworkFirewallAuditRecordRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNetworkFirewallAuditRecordResponse>;
  /** {@link DescribeNetworkFirewallClusterList 查询集群策略列表}({@link DescribeNetworkFirewallClusterListRequest 请求参数}): {@link DescribeNetworkFirewallClusterListResponse 返回参数} */
  DescribeNetworkFirewallClusterList(data?: DescribeNetworkFirewallClusterListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNetworkFirewallClusterListResponse>;
  /** {@link DescribeNetworkFirewallClusterRefreshStatus 容器网络查询资产任务进度}({@link DescribeNetworkFirewallClusterRefreshStatusRequest 请求参数}): {@link DescribeNetworkFirewallClusterRefreshStatusResponse 返回参数} */
  DescribeNetworkFirewallClusterRefreshStatus(data: DescribeNetworkFirewallClusterRefreshStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNetworkFirewallClusterRefreshStatusResponse>;
  /** {@link DescribeNetworkFirewallNamespaceLabelList 查询集群网络空间标签列表}({@link DescribeNetworkFirewallNamespaceLabelListRequest 请求参数}): {@link DescribeNetworkFirewallNamespaceLabelListResponse 返回参数} */
  DescribeNetworkFirewallNamespaceLabelList(data: DescribeNetworkFirewallNamespaceLabelListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNetworkFirewallNamespaceLabelListResponse>;
  /** {@link DescribeNetworkFirewallNamespaceList 查询集群网络空间列表}({@link DescribeNetworkFirewallNamespaceListRequest 请求参数}): {@link DescribeNetworkFirewallNamespaceListResponse 返回参数} */
  DescribeNetworkFirewallNamespaceList(data: DescribeNetworkFirewallNamespaceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNetworkFirewallNamespaceListResponse>;
  /** {@link DescribeNetworkFirewallPodLabelsList 查询集群网络pod标签}({@link DescribeNetworkFirewallPodLabelsListRequest 请求参数}): {@link DescribeNetworkFirewallPodLabelsListResponse 返回参数} */
  DescribeNetworkFirewallPodLabelsList(data: DescribeNetworkFirewallPodLabelsListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNetworkFirewallPodLabelsListResponse>;
  /** {@link DescribeNetworkFirewallPolicyDetail 容器网络集群查看策略详情}({@link DescribeNetworkFirewallPolicyDetailRequest 请求参数}): {@link DescribeNetworkFirewallPolicyDetailResponse 返回参数} */
  DescribeNetworkFirewallPolicyDetail(data: DescribeNetworkFirewallPolicyDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNetworkFirewallPolicyDetailResponse>;
  /** {@link DescribeNetworkFirewallPolicyDiscover 容器网络查询网络策略自动发现任务进度}({@link DescribeNetworkFirewallPolicyDiscoverRequest 请求参数}): {@link DescribeNetworkFirewallPolicyDiscoverResponse 返回参数} */
  DescribeNetworkFirewallPolicyDiscover(data: DescribeNetworkFirewallPolicyDiscoverRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNetworkFirewallPolicyDiscoverResponse>;
  /** {@link DescribeNetworkFirewallPolicyList 查询集群网络策略列表}({@link DescribeNetworkFirewallPolicyListRequest 请求参数}): {@link DescribeNetworkFirewallPolicyListResponse 返回参数} */
  DescribeNetworkFirewallPolicyList(data: DescribeNetworkFirewallPolicyListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNetworkFirewallPolicyListResponse>;
  /** {@link DescribeNetworkFirewallPolicyStatus 容器网络查询网络策略策略执行状态}({@link DescribeNetworkFirewallPolicyStatusRequest 请求参数}): {@link DescribeNetworkFirewallPolicyStatusResponse 返回参数} */
  DescribeNetworkFirewallPolicyStatus(data: DescribeNetworkFirewallPolicyStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNetworkFirewallPolicyStatusResponse>;
  /** {@link DescribeNetworkFirewallPolicyYamlDetail 容器网络集群查看Yaml网络策略详情}({@link DescribeNetworkFirewallPolicyYamlDetailRequest 请求参数}): {@link DescribeNetworkFirewallPolicyYamlDetailResponse 返回参数} */
  DescribeNetworkFirewallPolicyYamlDetail(data: DescribeNetworkFirewallPolicyYamlDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNetworkFirewallPolicyYamlDetailResponse>;
  /** {@link DescribeNewestVul 查询最新披露漏洞列表}({@link DescribeNewestVulRequest 请求参数}): {@link DescribeNewestVulResponse 返回参数} */
  DescribeNewestVul(data?: DescribeNewestVulRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNewestVulResponse>;
  /** {@link DescribePostPayDetail 查询后付费详情}({@link DescribePostPayDetailRequest 请求参数}): {@link DescribePostPayDetailResponse 返回参数} */
  DescribePostPayDetail(data?: DescribePostPayDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePostPayDetailResponse>;
  /** {@link DescribeProVersionInfo 查询专业版需购买信息}({@link DescribeProVersionInfoRequest 请求参数}): {@link DescribeProVersionInfoResponse 返回参数} */
  DescribeProVersionInfo(data?: DescribeProVersionInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProVersionInfoResponse>;
  /** {@link DescribePromotionActivity 查询促销活动}({@link DescribePromotionActivityRequest 请求参数}): {@link DescribePromotionActivityResponse 返回参数} */
  DescribePromotionActivity(data: DescribePromotionActivityRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePromotionActivityResponse>;
  /** {@link DescribePublicKey 获取公钥}({@link DescribePublicKeyRequest 请求参数}): {@link DescribePublicKeyResponse 返回参数} */
  DescribePublicKey(data?: DescribePublicKeyRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePublicKeyResponse>;
  /** {@link DescribePurchaseStateInfo 查询容器安全服务已购买信息}({@link DescribePurchaseStateInfoRequest 请求参数}): {@link DescribePurchaseStateInfoResponse 返回参数} */
  DescribePurchaseStateInfo(data?: DescribePurchaseStateInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePurchaseStateInfoResponse>;
  /** {@link DescribeRefreshTask 查询刷新任务}({@link DescribeRefreshTaskRequest 请求参数}): {@link DescribeRefreshTaskResponse 返回参数} */
  DescribeRefreshTask(data: DescribeRefreshTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRefreshTaskResponse>;
  /** {@link DescribeReverseShellDetail 运行时反弹shell事件详细信息}({@link DescribeReverseShellDetailRequest 请求参数}): {@link DescribeReverseShellDetailResponse 返回参数} */
  DescribeReverseShellDetail(data: DescribeReverseShellDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeReverseShellDetailResponse>;
  /** {@link DescribeReverseShellEvents 运行时反弹shell列表}({@link DescribeReverseShellEventsRequest 请求参数}): {@link DescribeReverseShellEventsResponse 返回参数} */
  DescribeReverseShellEvents(data?: DescribeReverseShellEventsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeReverseShellEventsResponse>;
  /** {@link DescribeReverseShellEventsExport 运行时反弹shell列表导出}({@link DescribeReverseShellEventsExportRequest 请求参数}): {@link DescribeReverseShellEventsExportResponse 返回参数} */
  DescribeReverseShellEventsExport(data?: DescribeReverseShellEventsExportRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeReverseShellEventsExportResponse>;
  /** {@link DescribeReverseShellWhiteListDetail 运行时反弹shell白名单详细信息}({@link DescribeReverseShellWhiteListDetailRequest 请求参数}): {@link DescribeReverseShellWhiteListDetailResponse 返回参数} */
  DescribeReverseShellWhiteListDetail(data: DescribeReverseShellWhiteListDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeReverseShellWhiteListDetailResponse>;
  /** {@link DescribeReverseShellWhiteLists 运行时反弹shell白名单列表}({@link DescribeReverseShellWhiteListsRequest 请求参数}): {@link DescribeReverseShellWhiteListsResponse 返回参数} */
  DescribeReverseShellWhiteLists(data?: DescribeReverseShellWhiteListsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeReverseShellWhiteListsResponse>;
  /** {@link DescribeRiskList 查询集群风险项列表}({@link DescribeRiskListRequest 请求参数}): {@link DescribeRiskListResponse 返回参数} */
  DescribeRiskList(data?: DescribeRiskListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRiskListResponse>;
  /** {@link DescribeRiskSyscallDetail 运行时高危系统调用事件详细信息}({@link DescribeRiskSyscallDetailRequest 请求参数}): {@link DescribeRiskSyscallDetailResponse 返回参数} */
  DescribeRiskSyscallDetail(data: DescribeRiskSyscallDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRiskSyscallDetailResponse>;
  /** {@link DescribeRiskSyscallEvents 运行时高危系统调用列表}({@link DescribeRiskSyscallEventsRequest 请求参数}): {@link DescribeRiskSyscallEventsResponse 返回参数} */
  DescribeRiskSyscallEvents(data?: DescribeRiskSyscallEventsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRiskSyscallEventsResponse>;
  /** {@link DescribeRiskSyscallEventsExport 运行时高危系统调用列表导出}({@link DescribeRiskSyscallEventsExportRequest 请求参数}): {@link DescribeRiskSyscallEventsExportResponse 返回参数} */
  DescribeRiskSyscallEventsExport(data?: DescribeRiskSyscallEventsExportRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRiskSyscallEventsExportResponse>;
  /** {@link DescribeRiskSyscallNames 运行时高危系统调用系统名称列表}({@link DescribeRiskSyscallNamesRequest 请求参数}): {@link DescribeRiskSyscallNamesResponse 返回参数} */
  DescribeRiskSyscallNames(data?: DescribeRiskSyscallNamesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRiskSyscallNamesResponse>;
  /** {@link DescribeRiskSyscallWhiteListDetail 运行时高危系统调用白名单详细信息}({@link DescribeRiskSyscallWhiteListDetailRequest 请求参数}): {@link DescribeRiskSyscallWhiteListDetailResponse 返回参数} */
  DescribeRiskSyscallWhiteListDetail(data: DescribeRiskSyscallWhiteListDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRiskSyscallWhiteListDetailResponse>;
  /** {@link DescribeRiskSyscallWhiteLists 运行时高危系统调用白名单列表}({@link DescribeRiskSyscallWhiteListsRequest 请求参数}): {@link DescribeRiskSyscallWhiteListsResponse 返回参数} */
  DescribeRiskSyscallWhiteLists(data?: DescribeRiskSyscallWhiteListsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRiskSyscallWhiteListsResponse>;
  /** {@link DescribeScanIgnoreVulList 查询扫描忽略的漏洞列表}({@link DescribeScanIgnoreVulListRequest 请求参数}): {@link DescribeScanIgnoreVulListResponse 返回参数} */
  DescribeScanIgnoreVulList(data?: DescribeScanIgnoreVulListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeScanIgnoreVulListResponse>;
  /** {@link DescribeSearchExportList 导出ES查询文档列表}({@link DescribeSearchExportListRequest 请求参数}): {@link DescribeSearchExportListResponse 返回参数} */
  DescribeSearchExportList(data: DescribeSearchExportListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSearchExportListResponse>;
  /** {@link DescribeSearchLogs 获取历史搜索记录}({@link DescribeSearchLogsRequest 请求参数}): {@link DescribeSearchLogsResponse 返回参数} */
  DescribeSearchLogs(data?: DescribeSearchLogsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSearchLogsResponse>;
  /** {@link DescribeSearchTemplates 获取快速检索列表}({@link DescribeSearchTemplatesRequest 请求参数}): {@link DescribeSearchTemplatesResponse 返回参数} */
  DescribeSearchTemplates(data?: DescribeSearchTemplatesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSearchTemplatesResponse>;
  /** {@link DescribeSecEventsTendency 查询容器运行时安全时间趋势}({@link DescribeSecEventsTendencyRequest 请求参数}): {@link DescribeSecEventsTendencyResponse 返回参数} */
  DescribeSecEventsTendency(data: DescribeSecEventsTendencyRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSecEventsTendencyResponse>;
  /** {@link DescribeSecLogAlertMsg 查询安全日志告警信息}({@link DescribeSecLogAlertMsgRequest 请求参数}): {@link DescribeSecLogAlertMsgResponse 返回参数} */
  DescribeSecLogAlertMsg(data?: DescribeSecLogAlertMsgRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSecLogAlertMsgResponse>;
  /** {@link DescribeSecLogCleanSettingInfo 查询安全日志清理设置详情}({@link DescribeSecLogCleanSettingInfoRequest 请求参数}): {@link DescribeSecLogCleanSettingInfoResponse 返回参数} */
  DescribeSecLogCleanSettingInfo(data?: DescribeSecLogCleanSettingInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSecLogCleanSettingInfoResponse>;
  /** {@link DescribeSecLogDeliveryClsOptions 查询安全日志投递cls可选项}({@link DescribeSecLogDeliveryClsOptionsRequest 请求参数}): {@link DescribeSecLogDeliveryClsOptionsResponse 返回参数} */
  DescribeSecLogDeliveryClsOptions(data?: DescribeSecLogDeliveryClsOptionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSecLogDeliveryClsOptionsResponse>;
  /** {@link DescribeSecLogDeliveryClsSetting 查询安全日志投递Cls配置}({@link DescribeSecLogDeliveryClsSettingRequest 请求参数}): {@link DescribeSecLogDeliveryClsSettingResponse 返回参数} */
  DescribeSecLogDeliveryClsSetting(data?: DescribeSecLogDeliveryClsSettingRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSecLogDeliveryClsSettingResponse>;
  /** {@link DescribeSecLogDeliveryKafkaOptions 查询安全日志投递kafka可选项}({@link DescribeSecLogDeliveryKafkaOptionsRequest 请求参数}): {@link DescribeSecLogDeliveryKafkaOptionsResponse 返回参数} */
  DescribeSecLogDeliveryKafkaOptions(data?: DescribeSecLogDeliveryKafkaOptionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSecLogDeliveryKafkaOptionsResponse>;
  /** {@link DescribeSecLogDeliveryKafkaSetting 查询安全日志投递kafka配置}({@link DescribeSecLogDeliveryKafkaSettingRequest 请求参数}): {@link DescribeSecLogDeliveryKafkaSettingResponse 返回参数} */
  DescribeSecLogDeliveryKafkaSetting(data?: DescribeSecLogDeliveryKafkaSettingRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSecLogDeliveryKafkaSettingResponse>;
  /** {@link DescribeSecLogJoinObjectList 查询安全日志接入对象列表}({@link DescribeSecLogJoinObjectListRequest 请求参数}): {@link DescribeSecLogJoinObjectListResponse 返回参数} */
  DescribeSecLogJoinObjectList(data: DescribeSecLogJoinObjectListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSecLogJoinObjectListResponse>;
  /** {@link DescribeSecLogJoinTypeList 查询安全日志接入列表}({@link DescribeSecLogJoinTypeListRequest 请求参数}): {@link DescribeSecLogJoinTypeListResponse 返回参数} */
  DescribeSecLogJoinTypeList(data?: DescribeSecLogJoinTypeListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSecLogJoinTypeListResponse>;
  /** {@link DescribeSecLogKafkaUIN 查询安全日志KafkaUIN}({@link DescribeSecLogKafkaUINRequest 请求参数}): {@link DescribeSecLogKafkaUINResponse 返回参数} */
  DescribeSecLogKafkaUIN(data?: DescribeSecLogKafkaUINRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSecLogKafkaUINResponse>;
  /** {@link DescribeSecLogVasInfo 查询安全日志商品信息}({@link DescribeSecLogVasInfoRequest 请求参数}): {@link DescribeSecLogVasInfoResponse 返回参数} */
  DescribeSecLogVasInfo(data?: DescribeSecLogVasInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSecLogVasInfoResponse>;
  /** {@link DescribeSupportDefenceVul 查询支持防御的漏洞列表}({@link DescribeSupportDefenceVulRequest 请求参数}): {@link DescribeSupportDefenceVulResponse 返回参数} */
  DescribeSupportDefenceVul(data?: DescribeSupportDefenceVulRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSupportDefenceVulResponse>;
  /** {@link DescribeSystemVulList 查询系统漏洞列表}({@link DescribeSystemVulListRequest 请求参数}): {@link DescribeSystemVulListResponse 返回参数} */
  DescribeSystemVulList(data?: DescribeSystemVulListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSystemVulListResponse>;
  /** {@link DescribeTaskResultSummary 查询检查结果总览}({@link DescribeTaskResultSummaryRequest 请求参数}): {@link DescribeTaskResultSummaryResponse 返回参数} */
  DescribeTaskResultSummary(data?: DescribeTaskResultSummaryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTaskResultSummaryResponse>;
  /** {@link DescribeTcssSummary 查询容器安全概览信息}({@link DescribeTcssSummaryRequest 请求参数}): {@link DescribeTcssSummaryResponse 返回参数} */
  DescribeTcssSummary(data?: DescribeTcssSummaryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTcssSummaryResponse>;
  /** {@link DescribeUnauthorizedCoresTendency 查询当天未授权核数趋势}({@link DescribeUnauthorizedCoresTendencyRequest 请求参数}): {@link DescribeUnauthorizedCoresTendencyResponse 返回参数} */
  DescribeUnauthorizedCoresTendency(data?: DescribeUnauthorizedCoresTendencyRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUnauthorizedCoresTendencyResponse>;
  /** {@link DescribeUnfinishRefreshTask 查询未完成的刷新资产任务信息}({@link DescribeUnfinishRefreshTaskRequest 请求参数}): {@link DescribeUnfinishRefreshTaskResponse 返回参数} */
  DescribeUnfinishRefreshTask(data?: DescribeUnfinishRefreshTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUnfinishRefreshTaskResponse>;
  /** {@link DescribeUserCluster 用户集群资产查询}({@link DescribeUserClusterRequest 请求参数}): {@link DescribeUserClusterResponse 返回参数} */
  DescribeUserCluster(data?: DescribeUserClusterRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUserClusterResponse>;
  /** {@link DescribeValueAddedSrvInfo 查询增值服务需购买信息}({@link DescribeValueAddedSrvInfoRequest 请求参数}): {@link DescribeValueAddedSrvInfoResponse 返回参数} */
  DescribeValueAddedSrvInfo(data?: DescribeValueAddedSrvInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeValueAddedSrvInfoResponse>;
  /** {@link DescribeVirusAutoIsolateSampleDetail 查询木马自动隔离样本详情}({@link DescribeVirusAutoIsolateSampleDetailRequest 请求参数}): {@link DescribeVirusAutoIsolateSampleDetailResponse 返回参数} */
  DescribeVirusAutoIsolateSampleDetail(data: DescribeVirusAutoIsolateSampleDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVirusAutoIsolateSampleDetailResponse>;
  /** {@link DescribeVirusAutoIsolateSampleDownloadURL 查询木马自动隔离样本下载链接}({@link DescribeVirusAutoIsolateSampleDownloadURLRequest 请求参数}): {@link DescribeVirusAutoIsolateSampleDownloadURLResponse 返回参数} */
  DescribeVirusAutoIsolateSampleDownloadURL(data: DescribeVirusAutoIsolateSampleDownloadURLRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVirusAutoIsolateSampleDownloadURLResponse>;
  /** {@link DescribeVirusAutoIsolateSampleList 查询木马自动隔离样本列表}({@link DescribeVirusAutoIsolateSampleListRequest 请求参数}): {@link DescribeVirusAutoIsolateSampleListResponse 返回参数} */
  DescribeVirusAutoIsolateSampleList(data?: DescribeVirusAutoIsolateSampleListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVirusAutoIsolateSampleListResponse>;
  /** {@link DescribeVirusAutoIsolateSetting 查询木马自动隔离设置}({@link DescribeVirusAutoIsolateSettingRequest 请求参数}): {@link DescribeVirusAutoIsolateSettingResponse 返回参数} */
  DescribeVirusAutoIsolateSetting(data?: DescribeVirusAutoIsolateSettingRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVirusAutoIsolateSettingResponse>;
  /** {@link DescribeVirusDetail 运行时查询木马文件信息}({@link DescribeVirusDetailRequest 请求参数}): {@link DescribeVirusDetailResponse 返回参数} */
  DescribeVirusDetail(data: DescribeVirusDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVirusDetailResponse>;
  /** {@link DescribeVirusEventTendency 查询木马事件趋势}({@link DescribeVirusEventTendencyRequest 请求参数}): {@link DescribeVirusEventTendencyResponse 返回参数} */
  DescribeVirusEventTendency(data: DescribeVirusEventTendencyRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVirusEventTendencyResponse>;
  /** {@link DescribeVirusList 查询运行时文件查杀事件列表}({@link DescribeVirusListRequest 请求参数}): {@link DescribeVirusListResponse 返回参数} */
  DescribeVirusList(data?: DescribeVirusListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVirusListResponse>;
  /** {@link DescribeVirusManualScanEstimateTimeout 查询木马一键检测预估超时时间}({@link DescribeVirusManualScanEstimateTimeoutRequest 请求参数}): {@link DescribeVirusManualScanEstimateTimeoutResponse 返回参数} */
  DescribeVirusManualScanEstimateTimeout(data: DescribeVirusManualScanEstimateTimeoutRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVirusManualScanEstimateTimeoutResponse>;
  /** {@link DescribeVirusMonitorSetting 运行时查询文件查杀实时监控设置}({@link DescribeVirusMonitorSettingRequest 请求参数}): {@link DescribeVirusMonitorSettingResponse 返回参数} */
  DescribeVirusMonitorSetting(data?: DescribeVirusMonitorSettingRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVirusMonitorSettingResponse>;
  /** {@link DescribeVirusSampleDownloadUrl 查询木马样本下载url}({@link DescribeVirusSampleDownloadUrlRequest 请求参数}): {@link DescribeVirusSampleDownloadUrlResponse 返回参数} */
  DescribeVirusSampleDownloadUrl(data: DescribeVirusSampleDownloadUrlRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVirusSampleDownloadUrlResponse>;
  /** {@link DescribeVirusScanSetting 运行时查询文件查杀设置}({@link DescribeVirusScanSettingRequest 请求参数}): {@link DescribeVirusScanSettingResponse 返回参数} */
  DescribeVirusScanSetting(data?: DescribeVirusScanSettingRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVirusScanSettingResponse>;
  /** {@link DescribeVirusScanTaskStatus 运行时查询文件查杀任务状态}({@link DescribeVirusScanTaskStatusRequest 请求参数}): {@link DescribeVirusScanTaskStatusResponse 返回参数} */
  DescribeVirusScanTaskStatus(data?: DescribeVirusScanTaskStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVirusScanTaskStatusResponse>;
  /** {@link DescribeVirusScanTimeoutSetting 运行时文件扫描超时设置查询}({@link DescribeVirusScanTimeoutSettingRequest 请求参数}): {@link DescribeVirusScanTimeoutSettingResponse 返回参数} */
  DescribeVirusScanTimeoutSetting(data: DescribeVirusScanTimeoutSettingRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVirusScanTimeoutSettingResponse>;
  /** {@link DescribeVirusSummary 运行时查询木马概览信息}({@link DescribeVirusSummaryRequest 请求参数}): {@link DescribeVirusSummaryResponse 返回参数} */
  DescribeVirusSummary(data?: DescribeVirusSummaryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVirusSummaryResponse>;
  /** {@link DescribeVirusTaskList 运行时查询文件查杀任务列表}({@link DescribeVirusTaskListRequest 请求参数}): {@link DescribeVirusTaskListResponse 返回参数} */
  DescribeVirusTaskList(data: DescribeVirusTaskListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVirusTaskListResponse>;
  /** {@link DescribeVulContainerList 查询受漏洞的容器列表}({@link DescribeVulContainerListRequest 请求参数}): {@link DescribeVulContainerListResponse 返回参数} */
  DescribeVulContainerList(data: DescribeVulContainerListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulContainerListResponse>;
  /** {@link DescribeVulDefenceEvent 查询漏洞防御事件列表}({@link DescribeVulDefenceEventRequest 请求参数}): {@link DescribeVulDefenceEventResponse 返回参数} */
  DescribeVulDefenceEvent(data?: DescribeVulDefenceEventRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulDefenceEventResponse>;
  /** {@link DescribeVulDefenceEventDetail 查询漏洞防御事件详情}({@link DescribeVulDefenceEventDetailRequest 请求参数}): {@link DescribeVulDefenceEventDetailResponse 返回参数} */
  DescribeVulDefenceEventDetail(data: DescribeVulDefenceEventDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulDefenceEventDetailResponse>;
  /** {@link DescribeVulDefenceEventTendency 查询漏洞防御攻击事件趋势}({@link DescribeVulDefenceEventTendencyRequest 请求参数}): {@link DescribeVulDefenceEventTendencyResponse 返回参数} */
  DescribeVulDefenceEventTendency(data: DescribeVulDefenceEventTendencyRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulDefenceEventTendencyResponse>;
  /** {@link DescribeVulDefenceHost 查询漏洞防御的主机列表}({@link DescribeVulDefenceHostRequest 请求参数}): {@link DescribeVulDefenceHostResponse 返回参数} */
  DescribeVulDefenceHost(data?: DescribeVulDefenceHostRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulDefenceHostResponse>;
  /** {@link DescribeVulDefencePlugin 查询漏洞防御插件列表}({@link DescribeVulDefencePluginRequest 请求参数}): {@link DescribeVulDefencePluginResponse 返回参数} */
  DescribeVulDefencePlugin(data?: DescribeVulDefencePluginRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulDefencePluginResponse>;
  /** {@link DescribeVulDefenceSetting 查询漏洞防御设置信息}({@link DescribeVulDefenceSettingRequest 请求参数}): {@link DescribeVulDefenceSettingResponse 返回参数} */
  DescribeVulDefenceSetting(data?: DescribeVulDefenceSettingRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulDefenceSettingResponse>;
  /** {@link DescribeVulDetail 查询漏洞详情}({@link DescribeVulDetailRequest 请求参数}): {@link DescribeVulDetailResponse 返回参数} */
  DescribeVulDetail(data: DescribeVulDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulDetailResponse>;
  /** {@link DescribeVulIgnoreLocalImageList 查询漏洞扫描忽略的本地镜像列表}({@link DescribeVulIgnoreLocalImageListRequest 请求参数}): {@link DescribeVulIgnoreLocalImageListResponse 返回参数} */
  DescribeVulIgnoreLocalImageList(data: DescribeVulIgnoreLocalImageListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulIgnoreLocalImageListResponse>;
  /** {@link DescribeVulIgnoreRegistryImageList 查询漏洞扫描忽略的仓库镜像列表}({@link DescribeVulIgnoreRegistryImageListRequest 请求参数}): {@link DescribeVulIgnoreRegistryImageListResponse 返回参数} */
  DescribeVulIgnoreRegistryImageList(data: DescribeVulIgnoreRegistryImageListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulIgnoreRegistryImageListResponse>;
  /** {@link DescribeVulImageList 查询漏洞影响的镜像列表}({@link DescribeVulImageListRequest 请求参数}): {@link DescribeVulImageListResponse 返回参数} */
  DescribeVulImageList(data: DescribeVulImageListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulImageListResponse>;
  /** {@link DescribeVulImageSummary 查询漏洞镜像统计}({@link DescribeVulImageSummaryRequest 请求参数}): {@link DescribeVulImageSummaryResponse 返回参数} */
  DescribeVulImageSummary(data?: DescribeVulImageSummaryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulImageSummaryResponse>;
  /** {@link DescribeVulLevelImageSummary 查询应急漏洞各威胁等级统计镜像数}({@link DescribeVulLevelImageSummaryRequest 请求参数}): {@link DescribeVulLevelImageSummaryResponse 返回参数} */
  DescribeVulLevelImageSummary(data?: DescribeVulLevelImageSummaryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulLevelImageSummaryResponse>;
  /** {@link DescribeVulLevelSummary 查询漏洞各威胁等级统计数}({@link DescribeVulLevelSummaryRequest 请求参数}): {@link DescribeVulLevelSummaryResponse 返回参数} */
  DescribeVulLevelSummary(data: DescribeVulLevelSummaryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulLevelSummaryResponse>;
  /** {@link DescribeVulScanAuthorizedImageSummary 统计漏洞扫描页已授权和未扫描镜像数}({@link DescribeVulScanAuthorizedImageSummaryRequest 请求参数}): {@link DescribeVulScanAuthorizedImageSummaryResponse 返回参数} */
  DescribeVulScanAuthorizedImageSummary(data?: DescribeVulScanAuthorizedImageSummaryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulScanAuthorizedImageSummaryResponse>;
  /** {@link DescribeVulScanInfo 查询漏洞扫描任务信息}({@link DescribeVulScanInfoRequest 请求参数}): {@link DescribeVulScanInfoResponse 返回参数} */
  DescribeVulScanInfo(data?: DescribeVulScanInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulScanInfoResponse>;
  /** {@link DescribeVulScanLocalImageList 查询漏洞扫描任务的本地镜像列表}({@link DescribeVulScanLocalImageListRequest 请求参数}): {@link DescribeVulScanLocalImageListResponse 返回参数} */
  DescribeVulScanLocalImageList(data: DescribeVulScanLocalImageListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulScanLocalImageListResponse>;
  /** {@link DescribeVulSummary 查询漏洞风险统计概览}({@link DescribeVulSummaryRequest 请求参数}): {@link DescribeVulSummaryResponse 返回参数} */
  DescribeVulSummary(data?: DescribeVulSummaryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulSummaryResponse>;
  /** {@link DescribeVulTendency 查询漏洞风险趋势}({@link DescribeVulTendencyRequest 请求参数}): {@link DescribeVulTendencyResponse 返回参数} */
  DescribeVulTendency(data: DescribeVulTendencyRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulTendencyResponse>;
  /** {@link DescribeVulTopRanking 查询漏洞Top排名列表}({@link DescribeVulTopRankingRequest 请求参数}): {@link DescribeVulTopRankingResponse 返回参数} */
  DescribeVulTopRanking(data: DescribeVulTopRankingRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulTopRankingResponse>;
  /** {@link DescribeWarningRules 获取告警策略列表}({@link DescribeWarningRulesRequest 请求参数}): {@link DescribeWarningRulesResponse 返回参数} */
  DescribeWarningRules(data?: DescribeWarningRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWarningRulesResponse>;
  /** {@link DescribeWebVulList 查询web应用漏洞列表}({@link DescribeWebVulListRequest 请求参数}): {@link DescribeWebVulListResponse 返回参数} */
  DescribeWebVulList(data?: DescribeWebVulListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWebVulListResponse>;
  /** {@link ExportVirusList 运行时文件查杀事件列表导出}({@link ExportVirusListRequest 请求参数}): {@link ExportVirusListResponse 返回参数} */
  ExportVirusList(data?: ExportVirusListRequest, config?: AxiosRequestConfig): AxiosPromise<ExportVirusListResponse>;
  /** {@link InitializeUserComplianceEnvironment 安全合规初始化用户的合规基线检测环境}({@link InitializeUserComplianceEnvironmentRequest 请求参数}): {@link InitializeUserComplianceEnvironmentResponse 返回参数} */
  InitializeUserComplianceEnvironment(data?: InitializeUserComplianceEnvironmentRequest, config?: AxiosRequestConfig): AxiosPromise<InitializeUserComplianceEnvironmentResponse>;
  /** {@link ModifyAbnormalProcessRuleStatus 修改运行时异常进程策略状态}({@link ModifyAbnormalProcessRuleStatusRequest 请求参数}): {@link ModifyAbnormalProcessRuleStatusResponse 返回参数} */
  ModifyAbnormalProcessRuleStatus(data: ModifyAbnormalProcessRuleStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAbnormalProcessRuleStatusResponse>;
  /** {@link ModifyAbnormalProcessStatus 修改异常进程事件状态}({@link ModifyAbnormalProcessStatusRequest 请求参数}): {@link ModifyAbnormalProcessStatusResponse 返回参数} */
  ModifyAbnormalProcessStatus(data: ModifyAbnormalProcessStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAbnormalProcessStatusResponse>;
  /** {@link ModifyAccessControlRuleStatus 修改运行时访问控制策略状态}({@link ModifyAccessControlRuleStatusRequest 请求参数}): {@link ModifyAccessControlRuleStatusResponse 返回参数} */
  ModifyAccessControlRuleStatus(data: ModifyAccessControlRuleStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAccessControlRuleStatusResponse>;
  /** {@link ModifyAccessControlStatus 修改运行时访问控制事件状态}({@link ModifyAccessControlStatusRequest 请求参数}): {@link ModifyAccessControlStatusResponse 返回参数} */
  ModifyAccessControlStatus(data: ModifyAccessControlStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAccessControlStatusResponse>;
  /** {@link ModifyAsset 主机资产刷新}({@link ModifyAssetRequest 请求参数}): {@link ModifyAssetResponse 返回参数} */
  ModifyAsset(data?: ModifyAssetRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAssetResponse>;
  /** {@link ModifyAssetImageRegistryScanStop 镜像仓库停止镜像扫描任务}({@link ModifyAssetImageRegistryScanStopRequest 请求参数}): {@link ModifyAssetImageRegistryScanStopResponse 返回参数} */
  ModifyAssetImageRegistryScanStop(data?: ModifyAssetImageRegistryScanStopRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAssetImageRegistryScanStopResponse>;
  /** {@link ModifyAssetImageRegistryScanStopOneKey 镜像仓库停止镜像一键扫描任务}({@link ModifyAssetImageRegistryScanStopOneKeyRequest 请求参数}): {@link ModifyAssetImageRegistryScanStopOneKeyResponse 返回参数} */
  ModifyAssetImageRegistryScanStopOneKey(data?: ModifyAssetImageRegistryScanStopOneKeyRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAssetImageRegistryScanStopOneKeyResponse>;
  /** {@link ModifyAssetImageScanStop 停止镜像扫描}({@link ModifyAssetImageScanStopRequest 请求参数}): {@link ModifyAssetImageScanStopResponse 返回参数} */
  ModifyAssetImageScanStop(data?: ModifyAssetImageScanStopRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAssetImageScanStopResponse>;
  /** {@link ModifyCompliancePeriodTask 安全合规编辑定时任务}({@link ModifyCompliancePeriodTaskRequest 请求参数}): {@link ModifyCompliancePeriodTaskResponse 返回参数} */
  ModifyCompliancePeriodTask(data: ModifyCompliancePeriodTaskRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCompliancePeriodTaskResponse>;
  /** {@link ModifyContainerNetStatus 隔离容器网络状态}({@link ModifyContainerNetStatusRequest 请求参数}): {@link ModifyContainerNetStatusResponse 返回参数} */
  ModifyContainerNetStatus(data: ModifyContainerNetStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyContainerNetStatusResponse>;
  /** {@link ModifyEscapeEventStatus 修改容器逃逸扫描事件状态}({@link ModifyEscapeEventStatusRequest 请求参数}): {@link ModifyEscapeEventStatusResponse 返回参数} */
  ModifyEscapeEventStatus(data: ModifyEscapeEventStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyEscapeEventStatusResponse>;
  /** {@link ModifyEscapeRule 修改容器逃逸扫描规则信息}({@link ModifyEscapeRuleRequest 请求参数}): {@link ModifyEscapeRuleResponse 返回参数} */
  ModifyEscapeRule(data: ModifyEscapeRuleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyEscapeRuleResponse>;
  /** {@link ModifyEscapeWhiteList 修改逃逸白名单}({@link ModifyEscapeWhiteListRequest 请求参数}): {@link ModifyEscapeWhiteListResponse 返回参数} */
  ModifyEscapeWhiteList(data: ModifyEscapeWhiteListRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyEscapeWhiteListResponse>;
  /** {@link ModifyImageAuthorized 批量授权镜像扫描V2.0}({@link ModifyImageAuthorizedRequest 请求参数}): {@link ModifyImageAuthorizedResponse 返回参数} */
  ModifyImageAuthorized(data: ModifyImageAuthorizedRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyImageAuthorizedResponse>;
  /** {@link ModifyReverseShellStatus 修改反弹shell事件状态}({@link ModifyReverseShellStatusRequest 请求参数}): {@link ModifyReverseShellStatusResponse 返回参数} */
  ModifyReverseShellStatus(data: ModifyReverseShellStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyReverseShellStatusResponse>;
  /** {@link ModifyRiskSyscallStatus 修改高危系统调用事件状态}({@link ModifyRiskSyscallStatusRequest 请求参数}): {@link ModifyRiskSyscallStatusResponse 返回参数} */
  ModifyRiskSyscallStatus(data: ModifyRiskSyscallStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyRiskSyscallStatusResponse>;
  /** {@link ModifySecLogCleanSettingInfo 修改安全日志清理设置信息}({@link ModifySecLogCleanSettingInfoRequest 请求参数}): {@link ModifySecLogCleanSettingInfoResponse 返回参数} */
  ModifySecLogCleanSettingInfo(data: ModifySecLogCleanSettingInfoRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySecLogCleanSettingInfoResponse>;
  /** {@link ModifySecLogDeliveryClsSetting 更新安全日志-日志投递cls配置}({@link ModifySecLogDeliveryClsSettingRequest 请求参数}): {@link ModifySecLogDeliveryClsSettingResponse 返回参数} */
  ModifySecLogDeliveryClsSetting(data: ModifySecLogDeliveryClsSettingRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySecLogDeliveryClsSettingResponse>;
  /** {@link ModifySecLogDeliveryKafkaSetting 更新安全日志投递kafka设置}({@link ModifySecLogDeliveryKafkaSettingRequest 请求参数}): {@link ModifySecLogDeliveryKafkaSettingResponse 返回参数} */
  ModifySecLogDeliveryKafkaSetting(data?: ModifySecLogDeliveryKafkaSettingRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySecLogDeliveryKafkaSettingResponse>;
  /** {@link ModifySecLogJoinObjects 修改安全日志接入对象}({@link ModifySecLogJoinObjectsRequest 请求参数}): {@link ModifySecLogJoinObjectsResponse 返回参数} */
  ModifySecLogJoinObjects(data: ModifySecLogJoinObjectsRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySecLogJoinObjectsResponse>;
  /** {@link ModifySecLogJoinState 修改安全日志接入状态}({@link ModifySecLogJoinStateRequest 请求参数}): {@link ModifySecLogJoinStateResponse 返回参数} */
  ModifySecLogJoinState(data: ModifySecLogJoinStateRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySecLogJoinStateResponse>;
  /** {@link ModifySecLogKafkaUIN 修改安全日志kafkaUIN}({@link ModifySecLogKafkaUINRequest 请求参数}): {@link ModifySecLogKafkaUINResponse 返回参数} */
  ModifySecLogKafkaUIN(data?: ModifySecLogKafkaUINRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySecLogKafkaUINResponse>;
  /** {@link ModifyVirusAutoIsolateExampleSwitch 修改木马自动隔离样本开关}({@link ModifyVirusAutoIsolateExampleSwitchRequest 请求参数}): {@link ModifyVirusAutoIsolateExampleSwitchResponse 返回参数} */
  ModifyVirusAutoIsolateExampleSwitch(data: ModifyVirusAutoIsolateExampleSwitchRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyVirusAutoIsolateExampleSwitchResponse>;
  /** {@link ModifyVirusAutoIsolateSetting 修改木马自动隔离设置}({@link ModifyVirusAutoIsolateSettingRequest 请求参数}): {@link ModifyVirusAutoIsolateSettingResponse 返回参数} */
  ModifyVirusAutoIsolateSetting(data: ModifyVirusAutoIsolateSettingRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyVirusAutoIsolateSettingResponse>;
  /** {@link ModifyVirusFileStatus 运行时更新木马文件事件状态}({@link ModifyVirusFileStatusRequest 请求参数}): {@link ModifyVirusFileStatusResponse 返回参数} */
  ModifyVirusFileStatus(data: ModifyVirusFileStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyVirusFileStatusResponse>;
  /** {@link ModifyVirusMonitorSetting 运行时更新文件查杀实时监控设置}({@link ModifyVirusMonitorSettingRequest 请求参数}): {@link ModifyVirusMonitorSettingResponse 返回参数} */
  ModifyVirusMonitorSetting(data: ModifyVirusMonitorSettingRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyVirusMonitorSettingResponse>;
  /** {@link ModifyVirusScanSetting 运行时更新文件查杀设置}({@link ModifyVirusScanSettingRequest 请求参数}): {@link ModifyVirusScanSettingResponse 返回参数} */
  ModifyVirusScanSetting(data: ModifyVirusScanSettingRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyVirusScanSettingResponse>;
  /** {@link ModifyVirusScanTimeoutSetting 运行时文件扫描超时设置}({@link ModifyVirusScanTimeoutSettingRequest 请求参数}): {@link ModifyVirusScanTimeoutSettingResponse 返回参数} */
  ModifyVirusScanTimeoutSetting(data: ModifyVirusScanTimeoutSettingRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyVirusScanTimeoutSettingResponse>;
  /** {@link ModifyVulDefenceEventStatus 修改漏洞防御事件状态}({@link ModifyVulDefenceEventStatusRequest 请求参数}): {@link ModifyVulDefenceEventStatusResponse 返回参数} */
  ModifyVulDefenceEventStatus(data: ModifyVulDefenceEventStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyVulDefenceEventStatusResponse>;
  /** {@link ModifyVulDefenceSetting 编辑漏洞防御设置}({@link ModifyVulDefenceSettingRequest 请求参数}): {@link ModifyVulDefenceSettingResponse 返回参数} */
  ModifyVulDefenceSetting(data: ModifyVulDefenceSettingRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyVulDefenceSettingResponse>;
  /** {@link OpenTcssTrial 开通容器安全服务试用}({@link OpenTcssTrialRequest 请求参数}): {@link OpenTcssTrialResponse 返回参数} */
  OpenTcssTrial(data?: OpenTcssTrialRequest, config?: AxiosRequestConfig): AxiosPromise<OpenTcssTrialResponse>;
  /** {@link RemoveAssetImageRegistryRegistryDetail 删除单个镜像仓库详细信息}({@link RemoveAssetImageRegistryRegistryDetailRequest 请求参数}): {@link RemoveAssetImageRegistryRegistryDetailResponse 返回参数} */
  RemoveAssetImageRegistryRegistryDetail(data: RemoveAssetImageRegistryRegistryDetailRequest, config?: AxiosRequestConfig): AxiosPromise<RemoveAssetImageRegistryRegistryDetailResponse>;
  /** {@link RenewImageAuthorizeState 授权镜像扫描}({@link RenewImageAuthorizeStateRequest 请求参数}): {@link RenewImageAuthorizeStateResponse 返回参数} */
  RenewImageAuthorizeState(data: RenewImageAuthorizeStateRequest, config?: AxiosRequestConfig): AxiosPromise<RenewImageAuthorizeStateResponse>;
  /** {@link ResetSecLogTopicConfig 重置安全日志主题设置}({@link ResetSecLogTopicConfigRequest 请求参数}): {@link ResetSecLogTopicConfigResponse 返回参数} */
  ResetSecLogTopicConfig(data: ResetSecLogTopicConfigRequest, config?: AxiosRequestConfig): AxiosPromise<ResetSecLogTopicConfigResponse>;
  /** {@link ScanComplianceAssets 安全合规重新检测选定的资产}({@link ScanComplianceAssetsRequest 请求参数}): {@link ScanComplianceAssetsResponse 返回参数} */
  ScanComplianceAssets(data: ScanComplianceAssetsRequest, config?: AxiosRequestConfig): AxiosPromise<ScanComplianceAssetsResponse>;
  /** {@link ScanComplianceAssetsByPolicyItem 安全合规用指定的检测项重新检测选定的资产}({@link ScanComplianceAssetsByPolicyItemRequest 请求参数}): {@link ScanComplianceAssetsByPolicyItemResponse 返回参数} */
  ScanComplianceAssetsByPolicyItem(data: ScanComplianceAssetsByPolicyItemRequest, config?: AxiosRequestConfig): AxiosPromise<ScanComplianceAssetsByPolicyItemResponse>;
  /** {@link ScanCompliancePolicyItems 安全合规重新检测选定的检测项}({@link ScanCompliancePolicyItemsRequest 请求参数}): {@link ScanCompliancePolicyItemsResponse 返回参数} */
  ScanCompliancePolicyItems(data: ScanCompliancePolicyItemsRequest, config?: AxiosRequestConfig): AxiosPromise<ScanCompliancePolicyItemsResponse>;
  /** {@link ScanComplianceScanFailedAssets 安全合规重新检测上次检测失败的资产}({@link ScanComplianceScanFailedAssetsRequest 请求参数}): {@link ScanComplianceScanFailedAssetsResponse 返回参数} */
  ScanComplianceScanFailedAssets(data: ScanComplianceScanFailedAssetsRequest, config?: AxiosRequestConfig): AxiosPromise<ScanComplianceScanFailedAssetsResponse>;
  /** {@link SetCheckMode 设置检测模式和自动检查}({@link SetCheckModeRequest 请求参数}): {@link SetCheckModeResponse 返回参数} */
  SetCheckMode(data: SetCheckModeRequest, config?: AxiosRequestConfig): AxiosPromise<SetCheckModeResponse>;
  /** {@link StopVirusScanTask 运行时停止木马查杀任务}({@link StopVirusScanTaskRequest 请求参数}): {@link StopVirusScanTaskResponse 返回参数} */
  StopVirusScanTask(data: StopVirusScanTaskRequest, config?: AxiosRequestConfig): AxiosPromise<StopVirusScanTaskResponse>;
  /** {@link StopVulScanTask 停止漏洞扫描任务}({@link StopVulScanTaskRequest 请求参数}): {@link StopVulScanTaskResponse 返回参数} */
  StopVulScanTask(data?: StopVulScanTaskRequest, config?: AxiosRequestConfig): AxiosPromise<StopVulScanTaskResponse>;
  /** {@link SwitchImageAutoAuthorizedRule 编辑本地镜像自动授权开关}({@link SwitchImageAutoAuthorizedRuleRequest 请求参数}): {@link SwitchImageAutoAuthorizedRuleResponse 返回参数} */
  SwitchImageAutoAuthorizedRule(data: SwitchImageAutoAuthorizedRuleRequest, config?: AxiosRequestConfig): AxiosPromise<SwitchImageAutoAuthorizedRuleResponse>;
  /** {@link SyncAssetImageRegistryAsset 镜像仓库资产刷新}({@link SyncAssetImageRegistryAssetRequest 请求参数}): {@link SyncAssetImageRegistryAssetResponse 返回参数} */
  SyncAssetImageRegistryAsset(data?: SyncAssetImageRegistryAssetRequest, config?: AxiosRequestConfig): AxiosPromise<SyncAssetImageRegistryAssetResponse>;
  /** {@link UpdateAndPublishNetworkFirewallPolicyDetail 容器网络创建网络策略更新并发布任务}({@link UpdateAndPublishNetworkFirewallPolicyDetailRequest 请求参数}): {@link UpdateAndPublishNetworkFirewallPolicyDetailResponse 返回参数} */
  UpdateAndPublishNetworkFirewallPolicyDetail(data: UpdateAndPublishNetworkFirewallPolicyDetailRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateAndPublishNetworkFirewallPolicyDetailResponse>;
  /** {@link UpdateAndPublishNetworkFirewallPolicyYamlDetail 容器网络更新Yaml网络策略并发布任务}({@link UpdateAndPublishNetworkFirewallPolicyYamlDetailRequest 请求参数}): {@link UpdateAndPublishNetworkFirewallPolicyYamlDetailResponse 返回参数} */
  UpdateAndPublishNetworkFirewallPolicyYamlDetail(data: UpdateAndPublishNetworkFirewallPolicyYamlDetailRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateAndPublishNetworkFirewallPolicyYamlDetailResponse>;
  /** {@link UpdateAssetImageRegistryRegistryDetail 更新单个镜像仓库详细信息}({@link UpdateAssetImageRegistryRegistryDetailRequest 请求参数}): {@link UpdateAssetImageRegistryRegistryDetailResponse 返回参数} */
  UpdateAssetImageRegistryRegistryDetail(data: UpdateAssetImageRegistryRegistryDetailRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateAssetImageRegistryRegistryDetailResponse>;
  /** {@link UpdateImageRegistryTimingScanTask 镜像仓库更新定时任务}({@link UpdateImageRegistryTimingScanTaskRequest 请求参数}): {@link UpdateImageRegistryTimingScanTaskResponse 返回参数} */
  UpdateImageRegistryTimingScanTask(data: UpdateImageRegistryTimingScanTaskRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateImageRegistryTimingScanTaskResponse>;
  /** {@link UpdateNetworkFirewallPolicyDetail 容器网络创建网络策略更新任务}({@link UpdateNetworkFirewallPolicyDetailRequest 请求参数}): {@link UpdateNetworkFirewallPolicyDetailResponse 返回参数} */
  UpdateNetworkFirewallPolicyDetail(data: UpdateNetworkFirewallPolicyDetailRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateNetworkFirewallPolicyDetailResponse>;
  /** {@link UpdateNetworkFirewallPolicyYamlDetail 容器网络更新Yaml网络策略任务}({@link UpdateNetworkFirewallPolicyYamlDetailRequest 请求参数}): {@link UpdateNetworkFirewallPolicyYamlDetailResponse 返回参数} */
  UpdateNetworkFirewallPolicyYamlDetail(data: UpdateNetworkFirewallPolicyYamlDetailRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateNetworkFirewallPolicyYamlDetailResponse>;
}

export declare type Versions = ["2020-11-01"];

export default Tcss;
