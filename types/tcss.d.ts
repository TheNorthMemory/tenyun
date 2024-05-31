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
  /** 集群ID */
  ClusterID?: string;
  /** 节点类型：NORMAL普通节点、SUPER超级节点 */
  NodeType?: string;
  /** pod 名称 */
  PodName?: string;
  /** pod ip */
  PodIP?: string;
  /** 集群id */
  NodeUniqueID?: string;
  /** 节点公网ip */
  PublicIP?: string;
  /** 节点名称 */
  NodeName?: string;
  /** 节点id */
  NodeID?: string;
  /** uuid */
  HostID?: string;
  /** 节点内网ip */
  HostIP?: string;
  /** 集群名称 */
  ClusterName?: string;
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
  /** 节点名称：如果是超级节点，展示的实质上是它的node_id */
  NodeName?: string;
  /** pod名称 */
  PodName?: string;
  /** pod ip */
  PodIP?: string;
  /** 节点类型：NORMAL普通节点、SUPER超级节点 */
  NodeType?: string;
  /** 集群id */
  ClusterID?: string;
  /** 节点的唯一id，主要是超级节点使用 */
  NodeUniqueID?: string;
  /** 节点公网IP */
  PublicIP?: string;
  /** 节点id */
  NodeID?: string;
  /** uuid */
  HostID?: string;
  /** 节点内网ip */
  HostIP?: string;
  /** 集群名称 */
  ClusterName?: string;
}

/** 容器运行时，访问控制策略信息 */
declare interface AccessControlRuleInfo {
  /** 开关,true:开启，false:禁用 */
  IsEnable: boolean;
  /** 生效镜像id，空数组代表全部镜像 */
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
  /** 节点名称 */
  NodeName: string;
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

/** 集群列表Item */
declare interface AssetClusterListItem {
  /** 集群ID */
  ClusterID: string;
  /** 集群名称 */
  ClusterName: string;
  /** 集群状态CSR_RUNNING: 运行中CSR_EXCEPTION:异常CSR_DEL:已经删除 */
  Status: string;
  /** 绑定规则名称 */
  BindRuleName: string;
  /** 集群类型:CT_TKE:TKE集群;CT_USER_CREATE:用户自建集群;CT_TKE_SERVERLESS:TKE Serverless集群; */
  ClusterType: string;
  /** 集群版本 */
  ClusterVersion?: string;
  /** 内存量 */
  MemLimit?: number;
  /** cpu */
  CpuLimit?: number;
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

/** 集群自定义参数 */
declare interface ClusterCustomParameters {
  /** 参数名 */
  Name: string;
  /** 参数值 */
  Values: string[];
}

/** 集群资产返回的结构体 */
declare interface ClusterInfoItem {
  /** 集群id */
  ClusterId?: string;
  /** 集群名字 */
  ClusterName?: string;
  /** 集群版本 */
  ClusterVersion?: string;
  /** 集群操作系统 */
  ClusterOs?: string;
  /** 集群类型 */
  ClusterType?: string;
  /** 集群节点数 */
  ClusterNodeNum?: number;
  /** 集群区域 */
  Region?: string;
  /** 监控组件的状态，为Defender_Uninstall、Defender_Normal、Defender_Error、Defender_Installing */
  DefenderStatus?: string;
  /** 集群状态 */
  ClusterStatus?: string;
  /** 集群的检测模式，为Cluster_Normal或者Cluster_Actived. */
  ClusterCheckMode?: string;
  /** 是否自动定期检测 */
  ClusterAutoCheck?: boolean;
  /** 防护容器部署失败原因，为UserDaemonSetNotReady时,和UnreadyNodeNum转成"N个节点防御容器为就绪"，其他错误直接展示 */
  DefenderErrorReason?: string;
  /** 防御容器没有ready状态的节点数量 */
  UnreadyNodeNum?: number;
  /** 严重风险检查项的数量 */
  SeriousRiskCount?: number;
  /** 高风险检查项的数量 */
  HighRiskCount?: number;
  /** 中风险检查项的数量 */
  MiddleRiskCount?: number;
  /** 提示风险检查项的数量 */
  HintRiskCount?: number;
  /** 检查失败原因 */
  CheckFailReason?: string;
  /** 检查状态,为Task_Running, NoRisk, HasRisk, Uncheck, Task_Error */
  CheckStatus?: string;
  /** 任务创建时间,检查时间 */
  TaskCreateTime?: string;
  /** 接入状态:未接入: AccessedNone已防护: AccessedDefended未防护: AccessedInstalled部分防护: AccessedPartialDefence接入异常: AccessedException卸载异常: AccessedUninstallException接入中: AccessedInstalling卸载中: AccessedUninstalling */
  AccessedStatus?: string | null;
  /** 接入失败原因 */
  AccessedSubStatus?: string | null;
  /** 节点总数 */
  NodeCount?: number | null;
  /** 离线节点数 */
  OffLineNodeCount?: number | null;
  /** 未安装agent节点数 */
  UnInstallAgentNodeCount?: number | null;
  /** 计费核数 */
  ChargeCoresCnt?: number | null;
}

/** 集群的节点信息 */
declare interface ClusterNodeInfo {
  /** 实例id */
  InstanceId?: string;
  /** 内网ip地址 */
  PrivateIpAddresses?: string;
  /** 节点的角色，Master、Work等 */
  InstanceRole?: string;
  /** 实例的状态（running 运行中，initializing 初始化中，failed 异常） */
  InstanceState?: string;
  /** 节点名称 */
  NodeName?: string;
  /** agent安装状态 */
  AgentStatus?: string | null;
  /** 公网ip */
  PublicIP?: string | null;
  /** 节点ID */
  HostID?: string | null;
  /** 主机类型(普通节点情况) */
  MachineType?: string | null;
  /** 节点类型(NORMAL: 普通节点SUPER:超级节点) */
  NodeType?: string | null;
  /** uuid */
  UUID?: string | null;
  /** 计费核数 */
  ChargeCoresCnt?: number | null;
  /** 防护状态:已防护: Defended未防护: UnDefended */
  DefendStatus?: string | null;
}

/** 集群的pod详细信息 */
declare interface ClusterPodInfo {
  /** Pod名称. */
  PodName?: string;
  /** Pod状态 */
  Status?: string;
  /** Pod IP */
  PodIP?: string;
  /** 节点内网Ip */
  NodeLanIP?: string;
  /** 所属的工作负载名字 */
  WorkloadName?: string;
  /** 所属工作负载类型 */
  WorkloadKind?: string;
  /** 所属集群名字 */
  ClusterName?: string;
  /** 所属集群ID */
  ClusterId?: string;
  /** 所属命名空间 */
  Namespace?: string;
  /** 所属地域 */
  Region?: string;
  /** 运行时间 */
  Age?: string;
  /** 创建时间 */
  StartTime?: string;
  /** 重启次数 */
  Restarts?: number;
  /** 关联的service名字 */
  ServiceName?: string;
  /** 关联的service数量 */
  ServiceCount?: number;
  /** 关联的容器名字 */
  ContainerName?: string;
  /** 关联的容器数量 */
  ContainerCount?: number;
  /** CPU占用率 */
  CPU?: number;
  /** 内存占用量 */
  Memory?: number;
  /** Pod标签 */
  Labels?: string;
  /** 集群状态 */
  ClusterStatus?: string;
  /** 工作负载标签 */
  WorkloadLabels?: string;
  /** 容器Id */
  ContainerId?: string;
  /** 主机名称 */
  HostName?: string;
  /** 主机Id */
  HostId?: string;
  /** 集群类型 */
  ClusterType?: string;
  /** abc */
  NodeName?: string;
  /** NORMAL：普通节点 SUPER：超级节点 */
  NodeType?: string;
  /** 计费核数 */
  ChargeCoresCnt?: number;
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
  /** 主机实例id */
  InstanceId: string | null;
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
  /** 主机节点的实例id */
  InstanceId: string | null;
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
  /** 主机上Containerd版本 */
  ContainerdVersion?: string | null;
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
  /** 检查项描述 */
  Description?: string | null;
  /** 检查项审计方法 */
  AuditProcedure?: string | null;
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
  Component?: string | null;
  /** 组件版本信息 */
  Version: string | null;
  /** 可修复版本 */
  FixedVersion?: string | null;
  /** 路径 */
  Path?: string | null;
  /** 类型 */
  Type?: string | null;
  /** 组件名称 */
  Name?: string | null;
}

/** 联通性检测配置 */
declare interface ConnDetectConfig {
  /** 主机quuid */
  Quuid?: string;
  /** 主机uuid */
  Uuid?: string;
}

/** 容器列表集合 */
declare interface ContainerInfo {
  /** 容器id */
  ContainerID?: string;
  /** 容器名称 */
  ContainerName?: string;
  /** 容器运行状态 */
  Status?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** 运行用户 */
  RunAs?: string;
  /** 命令行 */
  Cmd?: string;
  /** CPU使用率 *1000 */
  CPUUsage?: number;
  /** 内存使用 kb */
  RamUsage?: number;
  /** 镜像名称 */
  ImageName?: string;
  /** 镜像id */
  ImageID?: string;
  /** 镜像id */
  POD?: string;
  /** 主机id */
  HostID?: string;
  /** 主机ip */
  HostIP?: string;
  /** 更新时间 */
  UpdateTime?: string;
  /** 主机名称 */
  HostName?: string;
  /** 外网ip */
  PublicIp?: string;
  /** 网络状态未隔离 NORMAL已隔离 ISOLATED隔离中 ISOLATING隔离失败	ISOLATE_FAILED解除隔离中 RESTORING解除隔离失败 RESTORE_FAILED */
  NetStatus?: string;
  /** 网络子状态 */
  NetSubStatus?: string;
  /** 隔离来源 */
  IsolateSource?: string | null;
  /** 隔离时间 */
  IsolateTime?: string | null;
  /** 超级节点id */
  NodeID?: string;
  /** podip */
  PodIP?: string;
  /** pod名称 */
  PodName?: string;
  /** 节点类型:节点类型：NORMAL普通节点、SUPER超级节点 */
  NodeType?: string;
  /** 超级节点唯一id */
  NodeUniqueID?: string;
  /** 所属Pod的CPU */
  PodCpu?: number;
  /** 所属Pod的内存 */
  PodMem?: number;
  /** 集群名称 */
  ClusterName?: string;
  /** 集群ID */
  ClusterID?: string;
  /** pod uid */
  PodUid?: string | null;
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
  /** 事件类型 ESCAPE_CGROUPS：利用cgroup机制逃逸 ESCAPE_TAMPER_SENSITIVE_FILE：篡改敏感文件逃逸 ESCAPE_DOCKER_API：访问Docker API接口逃逸 ESCAPE_VUL_OCCURRED：逃逸漏洞利用 MOUNT_SENSITIVE_PTAH：敏感路径挂载 PRIVILEGE_CONTAINER_START：特权容器 PRIVILEGE：程序提权逃逸 */
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
  /** 节点所属集群ID */
  ClusterID?: string;
  /** 节点类型：NORMAL普通节点、SUPER超级节点 */
  NodeType?: string;
  /** pod ip */
  PodIP?: string;
  /** 节点唯一id */
  NodeUniqueID?: string;
  /** 节点公网ip */
  PublicIP?: string;
  /** 节点id */
  NodeID?: string;
  /** 节点内网ip */
  HostIP?: string;
  /** 集群名称 */
  ClusterName?: string;
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

/** 风险容器信息 */
declare interface EventEscapeImageInfo {
  /** 镜像id，用于跳转 */
  ImageId?: string;
  /** 唯一值 */
  UniqueKey?: string;
  /** 事件类型 ESCAPE_CGROUPS：利用cgroup机制逃逸 ESCAPE_TAMPER_SENSITIVE_FILE：篡改敏感文件逃逸 ESCAPE_DOCKER_API：访问Docker API接口逃逸 ESCAPE_VUL_OCCURRED：逃逸漏洞利用 MOUNT_SENSITIVE_PTAH：敏感路径挂载 PRIVILEGE_CONTAINER_START：特权容器 PRIVILEGE：程序提权逃逸 */
  EventType?: string;
  /** 原始事件类型 */
  OriginEventType?: string;
  /** 镜像名 */
  ImageName?: string;
  /** 容器数量 */
  ContainerCount?: number;
  /** 生成时间 */
  FoundTime?: string;
  /** 最近生成时间 */
  LatestFoundTime?: string;
  /** 事件数量 */
  EventCount?: number;
  /** 状态，EVENT_UNDEAL:未处理，EVENT_DEALED:已处理，EVENT_INGNORE:忽略 */
  Status?: string;
  /** 风险描述 */
  Description?: string;
  /** 解决方案 */
  Solution?: string;
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
  HostID?: string;
  /** 主机ip即内网ip */
  HostIP?: string;
  /** 主机名称 */
  HostName?: string;
  /** 业务组 */
  Group?: string;
  /** docker 版本 */
  DockerVersion?: string;
  /** docker 文件系统类型 */
  DockerFileSystemDriver?: string;
  /** 镜像个数 */
  ImageCnt?: number;
  /** 容器个数 */
  ContainerCnt?: number;
  /** agent运行状态 */
  Status?: string;
  /** 是否是Containerd */
  IsContainerd?: boolean;
  /** 主机来源：["CVM", "ECM", "LH", "BM"] 中的之一为腾讯云服务器；["Other"]之一非腾讯云服务器； */
  MachineType?: string;
  /** 外网ip */
  PublicIp?: string;
  /** 主机uuid */
  Uuid?: string;
  /** 主机实例ID */
  InstanceID?: string;
  /** 地域ID */
  RegionID?: number;
  /** 所属项目 */
  Project?: ProjectInfo | null;
  /** 标签 */
  Tags?: TagInfo[] | null;
  /** 集群id */
  ClusterID?: string;
  /** 集群名称 */
  ClusterName?: string;
  /** 集群接入状态 */
  ClusterAccessedStatus?: string;
  /** 计费核数 */
  ChargeCoresCnt?: number;
  /** 防护状态:已防护: Defended未防护: UnDefended */
  DefendStatus?: string;
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
  ImageDigest?: string;
  /** 镜像仓库地址 */
  ImageRepoAddress?: string;
  /** 仓库类型 */
  RegistryType?: string;
  /** 镜像名称 */
  ImageName?: string;
  /** 镜像版本 */
  ImageTag?: string;
  /** 镜像大小 */
  ImageSize?: number;
  /** 最近扫描时间 */
  ScanTime?: string;
  /** 扫描状态 */
  ScanStatus?: string;
  /** 安全漏洞数 */
  VulCnt?: number;
  /** 木马病毒数 */
  VirusCnt?: number;
  /** 风险行为数 */
  RiskCnt?: number;
  /** 敏感信息数 */
  SentiveInfoCnt?: number;
  /** 是否可信镜像 */
  IsTrustImage?: boolean;
  /** 镜像系统 */
  OsName?: string;
  /** 木马扫描错误 */
  ScanVirusError?: string | null;
  /** 漏洞扫描错误 */
  ScanVulError?: string | null;
  /** 实例id */
  InstanceId?: string;
  /** 实例名称 */
  InstanceName?: string;
  /** 命名空间 */
  Namespace?: string;
  /** 高危扫描错误 */
  ScanRiskError?: string | null;
  /** 敏感信息扫描进度 */
  ScanVirusProgress?: number | null;
  /** 木马扫描进度 */
  ScanVulProgress?: number | null;
  /** 漏洞扫描进度 */
  ScanRiskProgress?: number | null;
  /** 剩余扫描时间秒 */
  ScanRemainTime?: number | null;
  /** cve扫描状态 */
  CveStatus?: string | null;
  /** 高危扫描状态 */
  RiskStatus?: string | null;
  /** 木马扫描状态 */
  VirusStatus?: string | null;
  /** 总进度 */
  Progress?: number | null;
  /** 授权状态 */
  IsAuthorized?: number;
  /** 仓库区域 */
  RegistryRegion?: string;
  /** 列表id */
  Id?: number;
  /** 镜像Id */
  ImageId?: string | null;
  /** 镜像创建的时间 */
  ImageCreateTime?: string | null;
  /** 是否为镜像的最新版本 */
  IsLatestImage?: boolean | null;
  /** low级别漏洞个数 */
  LowLevelVulCnt?: number;
  /** medium级别漏洞个数 */
  MediumLevelVulCnt?: number;
  /** high级别漏洞个数 */
  HighLevelVulCnt?: number;
  /** critical级别漏洞个数 */
  CriticalLevelVulCnt?: number;
  /** 关联容器数 */
  ContainerCnt?: number;
  /** 组件数 */
  ComponentCnt?: number;
  /** 是否运行中 */
  IsRunning?: boolean;
  /** 是否存在必修漏洞 */
  HasNeedFixVul?: boolean;
  /** 敏感信息 */
  SensitiveInfoCnt?: number | null;
  /** 是否推荐处置 */
  RecommendedFix?: boolean;
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
  CVEID?: string | null;
  /** 观点验证程序id */
  POCID?: string | null;
  /** 漏洞名称 */
  Name?: string | null;
  /** 涉及组件信息 */
  Components?: ComponentsInfo[] | null;
  /** 分类 */
  Category?: string | null;
  /** 分类2 */
  CategoryType?: string | null;
  /** 风险等级 */
  Level?: string | null;
  /** 描述 */
  Des?: string | null;
  /** 解决方案 */
  OfficialSolution?: string | null;
  /** 引用 */
  Reference?: string | null;
  /** 防御方案 */
  DefenseSolution?: string | null;
  /** 提交时间 */
  SubmitTime?: string | null;
  /** Cvss分数 */
  CvssScore?: string | null;
  /** Cvss信息 */
  CvssVector?: string | null;
  /** 是否建议修复 */
  IsSuggest?: string | null;
  /** 修复版本号 */
  FixedVersions?: string | null;
  /** 漏洞标签:"CanBeFixed","DynamicLevelPoc","DynamicLevelExp" */
  Tag?: string[] | null;
  /** 组件名 */
  Component?: string | null;
  /** 组件版本 */
  Version?: string | null;
  /** 攻击热度 0-3 */
  AttackLevel?: number | null;
  /** 镜像层信息列表 */
  LayerInfos?: ImageVulLayerInfo[] | null;
}

/** 漏洞列表中的层信息 */
declare interface ImageVulLayerInfo {
  /** 层id */
  LayerId?: string | null;
  /** 层cmd */
  LayerCmd?: string | null;
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
  ImageID?: string;
  /** 镜像名称 */
  ImageName?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** 镜像大小 */
  Size?: number;
  /** 主机个数 */
  HostCnt?: number;
  /** 容器个数 */
  ContainerCnt?: number;
  /** 扫描时间 */
  ScanTime?: string;
  /** 漏洞个数 */
  VulCnt?: number;
  /** 病毒个数 */
  VirusCnt?: number;
  /** 敏感信息个数 */
  RiskCnt?: number;
  /** 是否信任镜像 */
  IsTrustImage?: boolean;
  /** 镜像系统 */
  OsName?: string;
  /** agent镜像扫描错误 */
  AgentError?: string;
  /** 后端镜像扫描错误 */
  ScanError?: string;
  /** 扫描状态 */
  ScanStatus?: string;
  /** 木马扫描错误信息 */
  ScanVirusError?: string;
  /** 漏洞扫描错误信息 */
  ScanVulError?: string;
  /** 风险扫描错误信息 */
  ScanRiskError?: string;
  /** 是否是重点关注镜像，为0不是，非0是 */
  IsSuggest?: number;
  /** 是否授权，1是0否 */
  IsAuthorized?: number;
  /** 组件个数 */
  ComponentCnt?: number;
  /** 严重漏洞数 */
  CriticalLevelVulCnt?: number;
  /** 高危漏洞数 */
  HighLevelVulCnt?: number;
  /** 中危漏洞数 */
  MediumLevelVulCnt?: number;
  /** 低危漏洞数 */
  LowLevelVulCnt?: number;
  /** 是否最新版本镜像 */
  IsLatestImage?: boolean;
  /** 是否推荐处置 */
  RecommendedFix?: boolean;
}

/** 容器安全镜像漏洞 */
declare interface ImagesVul {
  /** 漏洞id */
  CVEID?: string;
  /** 漏洞名称 */
  Name?: string;
  /** 组件 */
  Component?: string;
  /** 版本 */
  Version?: string;
  /** 分类 */
  Category?: string;
  /** 分类2 */
  CategoryType?: string;
  /** 风险等级 */
  Level?: number;
  /** 描述 */
  Des?: string;
  /** 解决方案 */
  OfficialSolution?: string;
  /** 引用 */
  Reference?: string;
  /** 防御方案 */
  DefenseSolution?: string;
  /** 提交时间 */
  SubmitTime?: string;
  /** CVSS V3分数 */
  CVSSV3Score?: number;
  /** CVSS V3描述 */
  CVSSV3Desc?: string;
  /** 是否是重点关注：true：是，false：不是 */
  IsSuggest?: boolean;
  /** 修复版本号 */
  FixedVersions?: string | null;
  /** 漏洞标签:"CanBeFixed","DynamicLevelPoc","DynamicLevelExp" */
  Tag?: string[] | null;
  /** 攻击热度 */
  AttackLevel?: number | null;
}

/** k8sApi异常事件详情 */
declare interface K8sApiAbnormalEventInfo {
  /** 命中规则名称 */
  MatchRuleName: string;
  /** 命中规则类型 */
  MatchRuleType: string;
  /** 告警等级 */
  RiskLevel: string;
  /** 集群ID */
  ClusterID: string;
  /** 集群名称 */
  ClusterName: string;
  /** 集群运行状态 */
  ClusterRunningStatus: string;
  /** 初次生成时间 */
  FirstCreateTime: string;
  /** 最近一次生成时间 */
  LastCreateTime: string;
  /** 告警数量 */
  AlarmCount: number;
  /** 状态"EVENT_UNDEAL":未处理"EVENT_DEALED": 已处理"EVENT_IGNORE": 忽略"EVENT_DEL": 删除"EVENT_ADD_WHITE": 加白 */
  Status: string;
  /** 集群masterIP */
  ClusterMasterIP: string;
  /** k8s版本 */
  K8sVersion: string;
  /** 运行时组件 */
  RunningComponent: string[];
  /** 描述 */
  Desc: string;
  /** 建议 */
  Suggestion: string;
  /** 请求信息 */
  Info: string;
  /** 规则ID */
  MatchRuleID: string;
  /** 高亮字段数组 */
  HighLightFields: string[];
  /** 命中规则 */
  MatchRule: K8sApiAbnormalRuleScopeInfo;
}

/** k8sapi异常事件列表Item */
declare interface K8sApiAbnormalEventListItem {
  /** 事件ID */
  ID: number;
  /** 命中规则类型 */
  MatchRuleType: string;
  /** 威胁等级 */
  RiskLevel: string;
  /** 集群ID */
  ClusterID: string;
  /** 集群名称 */
  ClusterName: string;
  /** 集群运行状态 */
  ClusterRunningStatus: string;
  /** 初次生成时间 */
  FirstCreateTime: string;
  /** 最近一次生成时间 */
  LastCreateTime: string;
  /** 告警数量 */
  AlarmCount: number;
  /** 状态 */
  Status: string;
  /** 规则类型 */
  RuleType: string;
  /** 描述信息 */
  Desc: string;
  /** 解决方案 */
  Suggestion: string;
  /** 规则名称 */
  RuleName: string;
  /** 命中规则 */
  MatchRule: K8sApiAbnormalRuleScopeInfo;
}

/** k8a api 异常请求规则详情 */
declare interface K8sApiAbnormalRuleInfo {
  /** 规则名称 */
  RuleName: string;
  /** 状态 */
  Status: boolean;
  /** 规则信息列表 */
  RuleInfoList: K8sApiAbnormalRuleScopeInfo[];
  /** 生效集群IDSet */
  EffectClusterIDSet: string[];
  /** 规则类型RT_SYSTEM 系统规则RT_USER 用户自定义 */
  RuleType: string;
  /** 是否所有集群生效 */
  EffectAllCluster: boolean;
  /** 规则ID */
  RuleID?: string;
}

/** k8s api 异常请求规则列表Item */
declare interface K8sApiAbnormalRuleListItem {
  /** 规则ID */
  RuleID: string;
  /** 规则名称 */
  RuleName: string;
  /** 规则类型RT_SYSTEM 系统规则RT_USER 用户自定义 */
  RuleType: string;
  /** 受影响集群总数 */
  EffectClusterCount: number;
  /** 更新时间 */
  UpdateTime: string;
  /** 编辑账号 */
  OprUin: string;
  /** 状态 */
  Status: boolean;
}

/** k8s api 异常事件规则配置范围 */
declare interface K8sApiAbnormalRuleScopeInfo {
  /** 范围系统事件:ANONYMOUS_ACCESS: 匿名访问ABNORMAL_UA_REQ: 异常UA请求ANONYMOUS_ABNORMAL_PERMISSION: 匿名用户权限异动GET_CREDENTIALS: 凭据信息获取MOUNT_SENSITIVE_PATH: 敏感路径挂载COMMAND_RUN: 命令执行PRIVILEGE_CONTAINER: 特权容器EXCEPTION_CRONTAB_TASK: 异常定时任务STATICS_POD: 静态pod创建ABNORMAL_CREATE_POD: 异常pod创建USER_DEFINED: 用户自定义 */
  Scope: string;
  /** 动作(RULE_MODE_ALERT: 告警 RULE_MODE_RELEASE:放行) */
  Action: string;
  /** 威胁等级 HIGH:高级 MIDDLE: 中级 LOW:低级 NOTICE:提示 */
  RiskLevel?: string | null;
  /** 开关状态(true:开 false:关) 适用于系统规则 */
  Status?: boolean | null;
  /** 是否被删除 适用于自定义规则入参 */
  IsDelete?: boolean | null;
}

/** k8sapi异常请求趋势Item */
declare interface K8sApiAbnormalTendencyItem {
  /** 日期 */
  Date: string;
  /** 异常UA请求事件数 */
  ExceptionUARequestCount: number;
  /** 匿名用户权限事件数 */
  AnonymousUserRightCount: number;
  /** 凭据信息获取事件数 */
  CredentialInformationObtainCount: number;
  /** 敏感数据挂载事件数 */
  SensitiveDataMountCount: number;
  /** 命令执行事件数 */
  CmdExecCount: number;
  /** 异常定时任务事件数 */
  AbnormalScheduledTaskCount: number;
  /** 静态Pod创建数 */
  StaticsPodCreateCount: number;
  /** 可疑容器创建数 */
  DoubtfulContainerCreateCount: number;
  /** 自定义规则事件数 */
  UserDefinedRuleCount: number;
  /** 匿名访问事件数 */
  AnonymousAccessCount: number;
  /** 特权容器事件数 */
  PrivilegeContainerCount: number;
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

/** 返回的命名空间列表信息 */
declare interface NamespaceInfo {
  /** 命名空间名称 */
  Namespace?: string;
  /** 包含仓库数 */
  RegistryCnt?: number;
  /** 包含镜像数 */
  ImageCnt?: number;
  /** 包含风险镜像数 */
  RiskImageCnt?: number;
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
  /** 策略id */
  PolicyId?: number | null;
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
  /** 容器网络插件 */
  ClusterNetworkSettings?: string | null;
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
  /** 节点id */
  NodeID?: string;
  /** podip */
  PodIP?: string;
  /** pod名称 */
  PodName?: string;
  /** 节点类型 */
  NodeType?: string;
  /** 超级节点唯一id */
  NodeUniqueID?: string;
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
  /** 节点id */
  NodeID?: string;
  /** podip */
  PodIP?: string;
  /** pod名称 */
  PodName?: string;
  /** 节点类型 */
  NodeType?: string;
  /** 超级节点唯一id */
  NodeUniqueID?: string;
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

/** 镜像仓库联通性检测结果 */
declare interface RegistryConnDetectResult {
  /** 联通性检测的主机quuid 或者 backend */
  Quuid?: string;
  /** 联通性检测的主机uuid 或者 backend */
  Uuid?: string;
  /** 检测结果状态 */
  ConnDetectStatus?: string;
  /** 检测结果信息 */
  ConnDetectMessage?: string;
  /** 失败的解决方案 */
  Solution?: string;
  /** 失败原因 */
  FailReason?: string;
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

/** 恶意请求事件信息 */
declare interface RiskDnsEventInfo {
  /** 事件ID */
  EventID: number;
  /** 事件类型，恶意域名请求：DOMAIN，恶意IP请求：IP */
  EventType: string;
  /** 恶意请求域名/IP */
  Address: string;
  /** 容器ID */
  ContainerID: string;
  /** 容器名称 */
  ContainerName: string;
  /** 隔离状态未隔离 NORMAL已隔离 ISOLATED隔离中 ISOLATING隔离失败	ISOLATE_FAILED解除隔离中 RESTORING解除隔离失败 RESTORE_FAILED */
  ContainerNetStatus: string;
  /** 容器状态正在运行: RUNNING暂停: PAUSED停止: STOPPED已经创建: CREATED已经销毁: DESTROYED正在重启中: RESTARTING迁移中: REMOVING */
  ContainerStatus: string;
  /** 容器子状态"AGENT_OFFLINE" //Agent离线"NODE_DESTROYED" //节点已销毁"CONTAINER_EXITED" //容器已退出"CONTAINER_DESTROYED" //容器已销毁"SHARED_HOST" // 容器与主机共享网络"RESOURCE_LIMIT" //隔离操作资源超限"UNKNOW" // 原因未知 */
  ContainerNetSubStatus: string;
  /** 容器隔离操作来源 */
  ContainerIsolateOperationSrc: string;
  /** 镜像ID */
  ImageID: string;
  /** 镜像名称 */
  ImageName: string;
  /** 首次发现时间 */
  FoundTime: string;
  /** 最近生成时间 */
  LatestFoundTime: string;
  /** 事件状态EVENT_UNDEAL： 待处理EVENT_DEALED：已处理EVENT_IGNORE： 已忽略EVENT_ADD_WHITE：已加白 */
  EventStatus: string;
  /** 恶意请求次数 */
  EventCount: number;
  /** 事件描述 */
  Description: string;
  /** 解决方案 */
  Solution: string;
  /** 恶意IP所属城市 */
  City: string;
  /** 主机名称 */
  HostName: string;
  /** 主机ID */
  HostID: string;
  /** 内网IP */
  HostIP: string;
  /** 外网IP */
  PublicIP: string;
  /** 节点类型：NORMAL普通节点、SUPER超级节点 */
  NodeType?: string;
  /** 节点名称 */
  NodeName?: string;
  /** pod ip */
  PodIP?: string;
  /** pod 名称 */
  PodName?: string;
  /** 集群ID */
  ClusterID?: string;
  /** 节点id */
  NodeID?: string;
  /** 节点唯一id */
  NodeUniqueID?: string;
  /** 集群名称 */
  ClusterName?: string;
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
  /** 节点类型：NORMAL普通节点、SUPER超级节点 */
  NodeType?: string;
  /** 集群I'D */
  ClusterID?: string;
  /** pod ip */
  PodIP?: string;
  /** 节点唯一id */
  NodeUniqueID?: string;
  /** 节点公网ip */
  PublicIP?: string;
  /** 节点id */
  NodeID?: string;
  /** uuid */
  HostID?: string;
  /** 节点内网ip */
  HostIP?: string;
  /** 集群名称 */
  ClusterName?: string;
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
  EventId?: string;
  /** 事件发现时间 */
  FoundTime?: string;
  /** 容器id */
  ContainerId?: string;
  /** 容器名称 */
  ContainerName?: string;
  /** 镜像id */
  ImageId?: string;
  /** 镜像名称 */
  ImageName?: string;
  /** 节点名称 */
  NodeName?: string;
  /** 状态， “EVENT_UNDEAL”:事件未处理 "EVENT_DEALED":事件已经处理 "EVENT_INGNORE"：事件已经忽略 */
  Status?: string;
  /** 事件名称：宿主机文件访问逃逸、Syscall逃逸、MountNamespace逃逸、程序提权逃逸、特权容器启动逃逸、敏感路径挂载恶意进程启动文件篡改 */
  EventName?: string;
  /** 事件类型 ESCAPE_HOST_ACESS_FILE:宿主机文件访问逃逸 ESCAPE_MOUNT_NAMESPACE:MountNamespace逃逸 ESCAPE_PRIVILEDGE:程序提权逃逸 ESCAPE_PRIVILEDGE_CONTAINER_START:特权容器启动逃逸 ESCAPE_MOUNT_SENSITIVE_PTAH:敏感路径挂载 ESCAPE_SYSCALL:Syscall逃逸 */
  EventType?: string;
  /** 事件数量 */
  EventCount?: number;
  /** 最近生成时间 */
  LatestFoundTime?: string;
  /** 内网ip */
  HostIP?: string | null;
  /** 外网ip */
  ClientIP?: string | null;
  /** 网络状态未隔离 NORMAL已隔离 ISOLATED隔离中 ISOLATING隔离失败	ISOLATE_FAILED解除隔离中 RESTORING解除隔离失败 RESTORE_FAILED */
  ContainerNetStatus?: string | null;
  /** 容器子状态"AGENT_OFFLINE" //Agent离线"NODE_DESTROYED" //节点已销毁"CONTAINER_EXITED" //容器已退出"CONTAINER_DESTROYED" //容器已销毁"SHARED_HOST" // 容器与主机共享网络"RESOURCE_LIMIT" //隔离操作资源超限"UNKNOW" // 原因未知 */
  ContainerNetSubStatus?: string | null;
  /** 容器隔离操作来源 */
  ContainerIsolateOperationSrc?: string | null;
  /** 节点ID */
  NodeID?: string;
  /** 节点类型:NORMAL:普通节点;SUPER:超级节点 */
  NodeType?: string;
  /** 节点子网ID */
  NodeSubNetID?: string;
  /** 节点子网名称 */
  NodeSubNetName?: string;
  /** 节点子网网段 */
  NodeSubNetCIDR?: string;
  /** pod名称 */
  PodName?: string;
  /** podIP */
  PodIP?: string;
  /** pod状态 */
  PodStatus?: string;
  /** 集群id */
  ClusterID?: string;
  /** 集群名称 */
  ClusterName?: string;
  /** 节点唯一id */
  NodeUniqueID?: string;
  /** uuid */
  HostID?: string;
  /** Namespace */
  Namespace?: string;
  /** WorkloadType */
  WorkloadType?: string;
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
  /** 已接入普通主机数量 */
  Count: number;
  /** 已接入超级节点数量 */
  SuperNodeCount?: number;
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
  /** 节点id */
  NodeID?: string;
  /** podip */
  PodIP?: string;
  /** pod名称 */
  PodName?: string;
  /** 节点类型 */
  NodeType?: string;
  /** 超级节点唯一id */
  NodeUniqueID?: string;
}

/** 后付费详情 */
declare interface SoftQuotaDayInfo {
  /** 扣费时间 */
  PayTime: string;
  /** 计费核数(已废弃) */
  CoresCnt: number;
}

/** 超级节点信息 */
declare interface SuperNodeListItem {
  /** 超级节点ID */
  NodeID?: string;
  /** 超级节点名称 */
  NodeName?: string;
  /** 所属集群名 */
  ClusterName?: string;
  /** 所属集群ID */
  ClusterID?: string;
  /** 节点状态:Running,Ready,Notready,Initializing,Failed,Error */
  Status?: string;
  /** 子网ID */
  SubNetID?: string;
  /** 子网名称 */
  SubNetName?: string;
  /** 子网网段 */
  SubNetCidr?: string;
  /** 可用区ID */
  ZoneID?: string;
  /** 可用区 */
  Zone?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** 关联pod数 */
  RelatePodCount?: number;
  /** 关联容器数 */
  RelateContainerCount?: number;
  /** agent安装状态UNINSTALL:未安装;INSTALLED:已安装;INSTALLING:安装中; */
  AgentStatus?: string;
  /** 节点唯一id */
  NodeUniqueID?: string;
  /** 集群接入状态 */
  ClusterAccessedStatus?: string;
  /** 计费核数 */
  ChargeCoresCnt?: number;
  /** 防护状态:已防护: Defended未防护: UnDefended */
  DefendStatus?: string;
}

/** 超级节点Pod列表Item信息 */
declare interface SuperNodePodListItem {
  /** pod名称 */
  PodName?: string;
  /** podIP */
  PodIP?: string;
  /** 节点唯一id */
  NodeUniqueID?: string;
  /** 运行状态 */
  Status?: string;
  /** cpu需求核数 */
  CpuRequest?: number;
  /** cpu限制核数 */
  CpuLimit?: number;
  /** 内存需求大小 */
  MemRequest?: number;
  /** 内存限制大小 */
  MemLimit?: number;
  /** 命名空间 */
  Namespace?: string;
  /** 工作负载名称 */
  DeploymentName?: string;
  /** 工作负载id */
  DeploymentID?: string;
  /** 启动时间 */
  StartTime?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** 关联容器个数 */
  RelateContainerCount?: number;
  /** 运行时间 */
  RunningTime?: string;
  /** PodUid */
  PodUid?: string;
  /** 计费核数 */
  ChargeCoresCnt?: number;
  /** 防护状态 */
  DefendStatus?: string;
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
  /** 节点ID */
  NodeID?: string;
  /** 节点名称 */
  NodeName?: string;
  /** pod ip */
  PodIP?: string;
  /** pod(实例)的名字 */
  PodName?: string;
  /** 节点所属集群ID */
  ClusterID?: string;
  /** 节点类型：NORMAL普通节点、SUPER超级节点 */
  NodeType?: string;
  /** 节点外网IP */
  PublicIP?: string;
  /** 节点内网IP */
  InnerIP?: string;
  /** 节点唯一ID */
  NodeUniqueID?: string;
  /** 普通节点ID */
  HostID?: string;
  /** 集群名称 */
  ClusterName?: string;
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
  /** 节点名 */
  HostName: string;
  /** 节点内网ip */
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
  /** 节点类型：NORMAL普通节点、SUPER超级节点 */
  NodeType?: string;
  /** 节点外网IP */
  PublicIP?: string;
  /** 节点ID */
  NodeID?: string;
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
  /** 集群ID */
  ClusterID?: string;
  /** 集群名称 */
  ClusterName?: string;
  /** 节点类型[NORMAL:普通节点|SUPER:超级节点] */
  NodeType?: string;
  /** 超级节点唯一ID */
  NodeUniqueID?: string;
  /** 超级节点ID */
  NodeID?: string;
  /** 超级节点名称 */
  NodeName?: string;
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

/** 漏洞影响的仓库镜像列表 */
declare interface VulAffectedRegistryImageInfo {
  /** 镜像ID */
  ImageID: string;
  /** 镜像名称 */
  ImageName: string;
  /** 镜像版本 */
  ImageTag: string;
  /** 镜像命名空间 */
  Namespace: string;
  /** 镜像地址 */
  ImageRepoAddress: string;
  /** 组件列表 */
  ComponentList: VulAffectedImageComponentInfo[];
  /** 是否为镜像的最新版本 */
  IsLatestImage: boolean;
  /** 内部镜像资产ID */
  ImageAssetId: number;
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
  /** 主机QUUID/超级节点ID */
  QUUID: string | null;
  /** 主机内网IP */
  HostIP: string | null;
  /** 主机名称/超级节点名称 */
  HostName: string | null;
  /** 节点类型[NORMAL:普通节点|SUPER:超级节点] */
  NodeType?: string;
  /** 外网IP */
  PublicIP?: string;
  /** 超级节点唯一ID */
  NodeUniqueID?: string;
  /** 超级节点ID */
  NodeID?: string;
  /** 集群ID */
  ClusterID?: string;
  /** 集群名称 */
  ClusterName?: string;
}

/** 漏洞防御事件详情 */
declare interface VulDefenceEventDetail {
  /** 漏洞CVEID */
  CVEID?: string;
  /** 漏洞名称 */
  VulName?: string;
  /** 漏洞PocID */
  PocID?: string;
  /** 入侵状态 */
  EventType?: string;
  /** 攻击源IP */
  SourceIP?: string;
  /** 攻击源ip地址所在城市 */
  City?: string;
  /** 事件数量 */
  EventCount?: number;
  /** 容器ID */
  ContainerID?: string;
  /** 容器名称 */
  ContainerName?: string;
  /** 镜像ID */
  ImageID?: string;
  /** 镜像名称 */
  ImageName?: string;
  /** 处理状态 */
  Status?: string;
  /** 攻击源端口 */
  SourcePort?: string[];
  /** 事件ID */
  EventID?: number;
  /** 主机名称/超级节点名称 */
  HostName?: string;
  /** 主机内网IP */
  HostIP?: string;
  /** 主机外网IP */
  PublicIP?: string;
  /** Pod名称 */
  PodName?: string;
  /** 危害描述 */
  Description?: string;
  /** 修复建议 */
  OfficialSolution?: string;
  /** 攻击包 */
  NetworkPayload?: string;
  /** 进程PID */
  PID?: number | null;
  /** 进程主类名 */
  MainClass?: string | null;
  /** 堆栈信息 */
  StackTrace?: string | null;
  /** 监听账号 */
  ServerAccount?: string | null;
  /** 监听端口 */
  ServerPort?: string | null;
  /** 进程路径 */
  ServerExe?: string | null;
  /** 进程命令行参数 */
  ServerArg?: string | null;
  /** 主机QUUID/超级节点ID */
  QUUID?: string | null;
  /** 隔离状态未隔离 NORMAL已隔离 ISOLATED隔离中 ISOLATING隔离失败	ISOLATE_FAILED解除隔离中 RESTORING解除隔离失败 RESTORE_FAILED */
  ContainerNetStatus?: string | null;
  /** 容器子状态"AGENT_OFFLINE" //Agent离线	"NODE_DESTROYED" //节点已销毁	"CONTAINER_EXITED" //容器已退出	"CONTAINER_DESTROYED" //容器已销毁	"SHARED_HOST" // 容器与主机共享网络	"RESOURCE_LIMIT" //隔离操作资源超限	"UNKNOW" // 原因未知 */
  ContainerNetSubStatus?: string | null;
  /** 容器隔离操作来源 */
  ContainerIsolateOperationSrc?: string | null;
  /** 容器状态正在运行: RUNNING暂停: PAUSED停止: STOPPED已经创建: CREATED已经销毁: DESTROYED正在重启中: RESTARTING迁移中: REMOVING */
  ContainerStatus?: string | null;
  /** 接口Url */
  JNDIUrl?: string | null;
  /** rasp detail */
  RaspDetail?: RaspInfo[] | null;
  /** 超级节点子网名称 */
  NodeSubNetName?: string;
  /** 超级节点子网网段 */
  NodeSubNetCIDR?: string;
  /** pod ip */
  PodIP?: string;
  /** 节点类型[NORMAL:普通节点|SUPER:超级节点] */
  NodeType?: string;
  /** 超级节点ID */
  NodeID?: string;
  /** 超级节点唯一ID */
  NodeUniqueID?: string;
  /** 超级节点子网ID */
  NodeSubNetID?: string;
  /** 集群ID */
  ClusterID?: string;
  /** 集群名称 */
  ClusterName?: string;
  /** Namespace */
  Namespace?: string;
  /** 工作负载 */
  WorkloadType?: string;
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
  /** 主机名称/超级节点名称 */
  HostName: string;
  /** 主机ip即内网ip */
  HostIP: string;
  /** 主机QUUID/超级节点ID */
  HostID: string;
  /** 插件状态，正常：SUCCESS，异常：FAIL， NO_DEFENDED:未防御 */
  Status: string;
  /** 外网ip */
  PublicIP: string;
  /** 首次开启时间 */
  CreateTime: string;
  /** 更新时间 */
  ModifyTime: string;
  /** 节点类型[NORMAL:普通节点|SUPER:超级节点] */
  NodeType?: string;
  /** 超级节点子网名称 */
  NodeSubNetName?: string;
  /** 超级节点子网网段 */
  NodeSubNetCIDR?: string;
  /** 超级节点子网ID */
  NodeSubNetID?: string;
  /** 超级节点唯一ID */
  NodeUniqueID?: string;
  /** 超级节点ID */
  NodeID?: string;
  /** Pod Ip */
  PodIP?: string;
  /** Pod 名称 */
  PodName?: string;
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 联通性检测的记录ID */
  ConnDetectConfig?: ConnDetectConfig[];
  /** ”授权&扫描"开关 */
  NeedScan?: boolean;
}

declare interface AddAssetImageRegistryRegistryDetailResponse {
  /** 连接错误信息 */
  HealthCheckErr?: string | null;
  /** 名称错误信息 */
  NameRepeatErr?: string | null;
  /** 仓库唯一id */
  RegistryId?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AddComplianceAssetPolicySetToWhitelistRequest {
  /** 资产ID+检查项IDs. 列表 */
  AssetPolicySetList: ComplianceAssetPolicySetItem[];
}

declare interface AddComplianceAssetPolicySetToWhitelistResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AddCompliancePolicyAssetSetToWhitelistRequest {
  /** 检查项ID */
  CustomerPolicyItemId: number;
  /** 需要忽略指定检查项内的资产ID列表 */
  CustomerAssetItemIdSet?: number[];
}

declare interface AddCompliancePolicyAssetSetToWhitelistResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AddCompliancePolicyItemToWhitelistRequest {
  /** 要忽略的检测项的ID的列表 */
  CustomerPolicyItemIdSet: number[];
}

declare interface AddCompliancePolicyItemToWhitelistResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AddEditAbnormalProcessRuleRequest {
  /** 增加策略信息，策略id为空，编辑策略是id不能为空 */
  RuleInfo: AbnormalProcessRuleInfo;
  /** 仅在加白的时候带上 */
  EventId?: string;
}

declare interface AddEditAbnormalProcessRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AddEditAccessControlRuleRequest {
  /** 增加策略信息，策略id为空，编辑策略是id不能为空 */
  RuleInfo: AccessControlRuleInfo;
  /** 仅在白名单时候使用 */
  EventId?: string;
}

declare interface AddEditAccessControlRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 自动扫描开关 */
  AutoScanEnabled?: number;
  /** 自动扫描范围 */
  ScanType?: string[];
}

declare interface AddEditImageAutoAuthorizedRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AddEditReverseShellWhiteListRequest {
  /** 增加或编辑白名单信息。新增白名单时WhiteListInfo.id为空，编辑白名单WhiteListInfo.id不能为空。 */
  WhiteListInfo: ReverseShellWhiteListInfo;
  /** 仅在添加事件白名单时候使用 */
  EventId?: string;
}

declare interface AddEditReverseShellWhiteListResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AddEditRiskSyscallWhiteListRequest {
  /** 仅在添加事件白名单时候使用 */
  EventId?: string;
  /** 增加或编辑白名单信。新增白名单时WhiteListInfo.id为空，编辑白名单WhiteListInfo.id不能为空. */
  WhiteListInfo?: RiskSyscallWhiteListInfo;
}

declare interface AddEditRiskSyscallWhiteListResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AddEditWarningRulesRequest {
  /** 告警开关策略 */
  WarningRules: WarningRule[];
}

declare interface AddEditWarningRulesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AddEscapeWhiteListRequest {
  /** 加白名单事件类型 ESCAPE_CGROUPS：利用cgroup机制逃逸 ESCAPE_TAMPER_SENSITIVE_FILE：篡改敏感文件逃逸 ESCAPE_DOCKER_API：访问Docker API接口逃逸 ESCAPE_VUL_OCCURRED：逃逸漏洞利用 MOUNT_SENSITIVE_PTAH：敏感路径挂载 PRIVILEGE_CONTAINER_START：特权容器 PRIVILEGE：程序提权逃逸 */
  EventType: string[];
  /** 加白名单镜像ID数组 */
  ImageIDs: string[];
}

declare interface AddEscapeWhiteListResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AddIgnoreVulRequest {
  /** 漏洞PocID信息列表 */
  List: ModifyIgnoreVul[];
}

declare interface AddIgnoreVulResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CheckRepeatAssetImageRegistryRequest {
  /** 仓库名 */
  Name: string;
}

declare interface CheckRepeatAssetImageRegistryResponse {
  /** 是否重复 */
  IsRepeat: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateAbnormalProcessRulesExportJobRequest {
  /** 过滤条件。RuleType - string - 是否必填: 否 -规则类型Status - string - 是否必填: 否 -状态 */
  Filters?: RunTimeFilters[];
  /** 排序方式 */
  Order?: string;
  /** 排序字段 */
  By?: string;
  /** 导出字段 */
  ExportField?: string[];
}

declare interface CreateAbnormalProcessRulesExportJobResponse {
  /** 导出任务ID，前端拿着任务ID查询任务进度 */
  JobId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateAccessControlsRuleExportJobRequest {
  /** 过滤条件。RuleType - string - 是否必填: 否 -规则类型Status - string - 是否必填: 否 -状态 */
  Filters?: RunTimeFilters[];
  /** 排序方式 */
  Order?: string;
  /** 排序字段 */
  By?: string[];
  /** 导出字段 */
  ExportField?: string[];
}

declare interface CreateAccessControlsRuleExportJobResponse {
  /** 导出任务ID，前端拿着任务ID查询任务进度 */
  JobId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateAssetImageRegistryScanTaskOneKeyRequest {
  /** 是否扫描全部镜像(废弃) */
  All?: boolean;
  /** 扫描的镜像列表 */
  Images?: ImageInfo[];
  /** 扫描类型数组 */
  ScanType?: string[];
  /** 扫描的镜像列表Id */
  Id?: number[];
  /** 是否最新镜像 */
  IsLatest?: boolean;
  /** 扫描范围 0全部镜像，1自选镜像，2推荐扫描镜像 */
  ScanScope?: number;
  /** 仓库类型 */
  RegistryType?: string[];
  /** 命名空间 */
  Namespace?: string[];
  /** 是否存在运行中的容器 */
  ContainerRunning?: boolean;
  /** 任务超时时长单位s */
  Timeout?: number;
}

declare interface CreateAssetImageRegistryScanTaskOneKeyResponse {
  /** 扫描任务id */
  TaskID?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 返回的任务ID */
  TaskID?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateAssetImageScanSettingRequest {
  /** 开关 */
  Enable: boolean;
  /** 扫描开始时间01:00 时分 */
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
  All?: boolean;
  /** 自定义镜像 */
  Images?: string[];
  /** 镜像是否存在运行中的容器 */
  ContainerRunning?: boolean;
  /** 扫描范围 0 全部授权镜像，1自选镜像，2 推荐扫描 */
  ScanScope?: number;
  /** 扫描结束时间02:00 时分 */
  ScanEndTime?: string;
  /** 排除扫描的镜像 */
  ExcludeImages?: string[];
}

declare interface CreateAssetImageScanSettingResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 镜像是否存在运行中的容器 */
  ContainerRunning?: boolean;
  /** 扫描范围 0 全部授权镜像，1自选镜像，2 推荐扫描 */
  ScanScope?: number;
  /** 任务超时时长单位秒，默认1小时 */
  Timeout?: number;
}

declare interface CreateAssetImageScanTaskResponse {
  /** 任务id */
  TaskID?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCheckComponentRequest {
  /** 要安装的集群列表信息 */
  ClusterInfoList: ClusterCreateComponentItem[];
}

declare interface CreateCheckComponentResponse {
  /** "InstallSucc"表示安装成功，"InstallFailed"表示安装失败 */
  InstallResult: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateClusterCheckTaskRequest {
  /** 指定要扫描的集群信息 */
  ClusterCheckTaskList: ClusterCheckTaskItem[];
}

declare interface CreateClusterCheckTaskResponse {
  /** 返回创建的集群检查任务的ID，为0表示创建失败。 */
  TaskId?: number;
  /** 创建检查任务的结果，"Succ"为成功，其他的为失败原因 */
  CreateResult?: string;
  /** 返回创建的集群新任务ID */
  NewTaskID?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateK8sApiAbnormalEventExportJobRequest {
  /** 过滤条件。TimeRange - string -是否必填: 否 - 时间范围筛选 ["2022-03-31 16:55:00", "2022-03-31 17:00:00"]MatchRules - string - 是否必填: 否 -命中规则筛选RiskLevel - string - 是否必填: 否 -威胁等级筛选Status - string - 是否必填: 否 -事件状态筛选MatchRuleType - string - 是否必填: 否 -命中规则类型筛选ClusterRunningStatus - string - 是否必填: 否 -集群运行状态ClusterName - string - 是否必填: 否 -集群名称ClusterID - string - 是否必填: 否 -集群ID */
  Filters?: RunTimeFilters[];
  /** 排序方式 */
  Order?: string;
  /** 排序字段 */
  By?: string;
  /** 导出字段 */
  ExportField?: string[];
}

declare interface CreateK8sApiAbnormalEventExportJobResponse {
  /** 导出任务ID，前端拿着任务ID查询任务进度 */
  JobId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateK8sApiAbnormalRuleExportJobRequest {
  /** 过滤条件。RuleType - string - 是否必填: 否 -规则类型Status - string - 是否必填: 否 -状态 */
  Filters?: RunTimeFilters[];
  /** 排序方式 */
  Order?: string;
  /** 排序字段 */
  By?: string[];
  /** 导出字段 */
  ExportField?: string[];
}

declare interface CreateK8sApiAbnormalRuleExportJobResponse {
  /** 导出任务ID，前端拿着任务ID查询任务进度 */
  JobId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateK8sApiAbnormalRuleInfoRequest {
  /** 规则详情 */
  RuleInfo: K8sApiAbnormalRuleInfo;
  /** 拷贝规则ID(适用于复制规则场景) */
  CopySrcRuleID?: string;
  /** 事件ID(适用于事件加白场景) */
  EventID?: number;
}

declare interface CreateK8sApiAbnormalRuleInfoResponse {
  /** 规则ID */
  RuleID: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateNetworkFirewallClusterRefreshRequest {
}

declare interface CreateNetworkFirewallClusterRefreshResponse {
  /** 返回创建的集群检查任务的ID，为0表示创建失败。 */
  TaskId: number;
  /** 创建检查任务的结果，"Succ"为成功，"Failed"为失败 */
  Result: string;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateOrModifyPostPayCoresRequest {
  /** 弹性计费上限，最小值500 */
  CoresCnt: number;
}

declare interface CreateOrModifyPostPayCoresResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateRefreshTaskRequest {
  /** 指定集群列表,若为空则标识同步所有集群 */
  ClusterIDs?: string[];
  /** 是否只同步列表 */
  IsSyncListOnly?: boolean;
}

declare interface CreateRefreshTaskResponse {
  /** 返回创建的集群检查任务的ID，为0表示创建失败。 */
  TaskId?: number;
  /** 创建检查任务的结果，"Succ"为成功，"Failed"为失败 */
  CreateResult?: string;
  /** 返回创建的新集群检查任务ID */
  NewTaskID?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateSearchTemplateRequest {
  /** 搜索模板 */
  SearchTemplate: SearchTemplate;
}

declare interface CreateSearchTemplateResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 扫描路径模式：SCAN_PATH_ALL：全部路径SCAN_PATH_DEFAULT：默认路径SCAN_PATH_USER_DEFINE：用户自定义路径 */
  ScanPathMode?: string;
}

declare interface CreateVirusScanTaskResponse {
  /** 任务id */
  TaskID?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteAbnormalProcessRulesRequest {
  /** 策略的ids */
  RuleIdSet: string[];
}

declare interface DeleteAbnormalProcessRulesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteAccessControlRulesRequest {
  /** 策略的ids */
  RuleIdSet: string[];
}

declare interface DeleteAccessControlRulesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteComplianceAssetPolicySetFromWhitelistRequest {
  /** 资产ID */
  AssetItemId: number;
  /** 需要忽略指定资产内的检查项ID列表 */
  CustomerPolicyItemIdSet?: number[];
}

declare interface DeleteComplianceAssetPolicySetFromWhitelistResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteCompliancePolicyAssetSetFromWhitelistRequest {
  /** （检查项ID+资产ID列表）的列表 */
  PolicyAssetSetList: CompliancePolicyAssetSetItem[];
}

declare interface DeleteCompliancePolicyAssetSetFromWhitelistResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteCompliancePolicyItemFromWhitelistRequest {
  /** 指定的白名单项的ID的列表 */
  WhitelistIdSet: number[];
}

declare interface DeleteCompliancePolicyItemFromWhitelistResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteEscapeWhiteListRequest {
  /** 白名单记录ID数组 */
  IDSet: number[];
}

declare interface DeleteEscapeWhiteListResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteIgnoreVulRequest {
  /** 漏洞PocID 信息列表 */
  List: ModifyIgnoreVul[];
}

declare interface DeleteIgnoreVulResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteK8sApiAbnormalRuleRequest {
  /** 规则ID集合 */
  RuleIDSet: string[];
}

declare interface DeleteK8sApiAbnormalRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteMachineRequest {
  /** 客户端Uuid */
  Uuid: string;
}

declare interface DeleteMachineResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteReverseShellEventsRequest {
  /** 事件ids */
  EventIdSet: string[];
}

declare interface DeleteReverseShellEventsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteReverseShellWhiteListsRequest {
  /** 白名单ids */
  WhiteListIdSet: string[];
}

declare interface DeleteReverseShellWhiteListsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteRiskSyscallEventsRequest {
  /** 事件ids */
  EventIdSet: string[];
}

declare interface DeleteRiskSyscallEventsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteRiskSyscallWhiteListsRequest {
  /** 白名单ids */
  WhiteListIdSet: string[];
}

declare interface DeleteRiskSyscallWhiteListsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteSearchTemplateRequest {
  /** 模板ID */
  Id: number;
}

declare interface DeleteSearchTemplateResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeABTestConfigRequest {
  /** 灰度项目名称 */
  ProjectName?: string;
}

declare interface DescribeABTestConfigResponse {
  /** 灰度项目配置 */
  Config: ABTestConfig[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAbnormalProcessDetailRequest {
  /** 事件唯一id */
  EventId: string;
}

declare interface DescribeAbnormalProcessDetailResponse {
  /** 事件基本信息 */
  EventBaseInfo?: RunTimeEventBaseInfo;
  /** 进程信息 */
  ProcessInfo?: ProcessDetailInfo;
  /** 父进程信息 */
  ParentProcessInfo?: ProcessDetailBaseInfo;
  /** 事件描述 */
  EventDetail?: AbnormalProcessEventDescription;
  /** 祖先进程信息 */
  AncestorProcessInfo?: ProcessBaseInfo | null;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  TotalCount?: number;
  /** 异常进程数组 */
  EventSet?: AbnormalProcessEventInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAccessControlDetailRequest {
  /** 事件唯一id */
  EventId: string;
}

declare interface DescribeAccessControlDetailResponse {
  /** 事件基本信息 */
  EventBaseInfo?: RunTimeEventBaseInfo;
  /** 进程信息 */
  ProcessInfo?: ProcessDetailInfo;
  /** 被篡改信息 */
  TamperedFileInfo?: FileAttributeInfo;
  /** 事件描述 */
  EventDetail?: AccessControlEventDescription;
  /** 父进程信息 */
  ParentProcessInfo?: ProcessBaseInfo;
  /** 祖先进程信息 */
  AncestorProcessInfo?: ProcessBaseInfo | null;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  DownloadUrl?: string | null;
  /** 任务id */
  JobId?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  TotalCount?: number;
  /** 访问控制事件数组 */
  EventSet?: AccessControlEventInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 集群自定义参数 */
  ClusterCustomParameters?: ClusterCustomParameters[];
}

declare interface DescribeAgentDaemonSetCmdResponse {
  /** 安装命令 */
  Command?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  List?: ServiceInfo[];
  /** 总数量 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAssetClusterListRequest {
  /** 过滤条件。ClusterID - string - 是否必填: 否 -集群IDClusterName - string - 是否必填: 否 -集群名称Status - string - 是否必填: 否 -集群状态 */
  Filters?: RunTimeFilters[];
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 排序方式 */
  Order?: string;
  /** 排序字段。 */
  By?: string;
}

declare interface DescribeAssetClusterListResponse {
  /** 集群列表 */
  List: AssetClusterListItem[];
  /** 总数量 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAssetContainerDetailRequest {
  /** 容器id */
  ContainerId: string;
}

declare interface DescribeAssetContainerDetailResponse {
  /** 主机id */
  HostID?: string;
  /** 主机ip */
  HostIP?: string;
  /** 容器名称 */
  ContainerName?: string;
  /** 运行状态 */
  Status?: string;
  /** 运行账户 */
  RunAs?: string;
  /** 命令行 */
  Cmd?: string;
  /** CPU使用率 * 1000 */
  CPUUsage?: number;
  /** 内存使用 KB */
  RamUsage?: number;
  /** 镜像名 */
  ImageName?: string;
  /** 镜像ID */
  ImageID?: string;
  /** 归属POD */
  POD?: string;
  /** k8s 主节点 */
  K8sMaster?: string;
  /** 容器内进程数 */
  ProcessCnt?: number;
  /** 容器内端口数 */
  PortCnt?: number;
  /** 组件数 */
  ComponentCnt?: number;
  /** app数 */
  AppCnt?: number;
  /** websvc数 */
  WebServiceCnt?: number;
  /** 挂载 */
  Mounts?: ContainerMount[];
  /** 容器网络信息 */
  Network?: ContainerNetwork;
  /** 创建时间 */
  CreateTime?: string;
  /** 镜像创建时间 */
  ImageCreateTime?: string;
  /** 镜像大小 */
  ImageSize?: number;
  /** 主机状态 offline,online,pause */
  HostStatus?: string;
  /** 网络状态未隔离 NORMAL已隔离 ISOLATED隔离中 ISOLATING隔离失败	ISOLATE_FAILED解除隔离中 RESTORING解除隔离失败 RESTORE_FAILED */
  NetStatus?: string;
  /** 网络子状态 */
  NetSubStatus?: string;
  /** 隔离来源 */
  IsolateSource?: string | null;
  /** 隔离时间 */
  IsolateTime?: string | null;
  /** 节点ID */
  NodeID?: string;
  /** 节点名称 */
  NodeName?: string;
  /** 节点子网ID */
  NodeSubNetID?: string;
  /** 节点子网名称 */
  NodeSubNetName?: string;
  /** 节点子网网段 */
  NodeSubNetCIDR?: string;
  /** pod名称 */
  PodName?: string;
  /** pod ip */
  PodIP?: string;
  /** pod状态 */
  PodStatus?: string;
  /** 集群ID */
  ClusterID?: string;
  /** 集群名称 */
  ClusterName?: string;
  /** 节点类型:NORMAL: 普通节点(默认值) SUPER: 超级节点 */
  NodeType?: string;
  /** 超级节点唯一id */
  NodeUniqueID?: string;
  /** 外网ip */
  PublicIP?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAssetContainerListRequest {
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤条件。ContainerName - String - 是否必填：否 - 容器名称模糊搜索Status - String - 是否必填：否 - 容器运行状态筛选，0："created",1："running", 2："paused", 3："restarting", 4："removing", 5："exited", 6："dead" Runas - String - 是否必填：否 - 运行用户筛选ImageName- String - 是否必填：否 - 镜像名称搜索HostIP- string - 是否必填：否 - 主机ip搜索OrderBy - String 是否必填：否 -排序字段，支持：cpu_usage, mem_usage的动态排序 ["cpu_usage","+"] '+'升序、'-'降序NetStatus - String -是否必填: 否 - 容器网络状态筛选 normal isolated isolating isolate_failed restoring restore_failedPodID - String -是否必填: 否 - PodID筛选NodeUniqueID - String -是否必填: 否 - SuperNode筛选PodUid - String -是否必填: 否 - Pod筛选PodIP - String -是否必填: 否 - PodIP筛选NodeType - String -是否必填: 否 - 节点类型筛选:NORMAL:普通节点;SUPER:超级节点 */
  Filters?: AssetFilters[];
  /** 排序字段 */
  By?: string;
  /** 排序方式 asc,desc */
  Order?: string;
}

declare interface DescribeAssetContainerListResponse {
  /** 容器列表 */
  List?: ContainerInfo[];
  /** 总数量 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  List?: ServiceInfo[];
  /** 总数量 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAssetHostDetailRequest {
  /** 主机id */
  HostId: string;
}

declare interface DescribeAssetHostDetailResponse {
  /** 容器安全uuid */
  UUID?: string;
  /** 更新时间 */
  UpdateTime?: string;
  /** 主机名 */
  HostName?: string;
  /** 主机分组 */
  Group?: string;
  /** 主机IP */
  HostIP?: string;
  /** 操作系统 */
  OsName?: string;
  /** agent版本 */
  AgentVersion?: string;
  /** 内核版本 */
  KernelVersion?: string;
  /** docker版本 */
  DockerVersion?: string;
  /** docker api版本 */
  DockerAPIVersion?: string;
  /** docker go 版本 */
  DockerGoVersion?: string;
  /** docker 文件系统类型 */
  DockerFileSystemDriver?: string;
  /** docker root 目录 */
  DockerRootDir?: string;
  /** 镜像数 */
  ImageCnt?: number;
  /** 容器数 */
  ContainerCnt?: number;
  /** k8s IP */
  K8sMasterIP?: string;
  /** k8s version */
  K8sVersion?: string;
  /** kube proxy */
  KubeProxyVersion?: string;
  /** "UNINSTALL"："未安装","OFFLINE"："离线", "ONLINE"："防护中 */
  Status?: string;
  /** 是否Containerd */
  IsContainerd?: boolean;
  /** 主机来源;"TENCENTCLOUD":"腾讯云服务器","OTHERCLOUD":"非腾讯云服务器" */
  MachineType?: string;
  /** 外网ip */
  PublicIp?: string;
  /** 主机实例ID */
  InstanceID?: string;
  /** 地域ID */
  RegionID?: number;
  /** 所属项目 */
  Project?: ProjectInfo;
  /** 标签 */
  Tags?: TagInfo[];
  /** 集群ID */
  ClusterID?: string;
  /** 集群名称 */
  ClusterName?: string;
  /** 集群接入状态 */
  ClusterAccessedStatus?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  List?: HostInfo[];
  /** 总数量 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAssetImageDetailRequest {
  /** 镜像id */
  ImageID: string;
}

declare interface DescribeAssetImageDetailResponse {
  /** 镜像ID */
  ImageID?: string;
  /** 镜像名称 */
  ImageName?: string;
  /** 镜像摘要 */
  ImageDigest?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** 镜像大小 */
  Size?: number;
  /** 关联主机个数 */
  HostCnt?: number | null;
  /** 关联容器个数 */
  ContainerCnt?: number | null;
  /** 最近扫描时间 */
  ScanTime?: string | null;
  /** 漏洞个数 */
  VulCnt?: number | null;
  /** 风险行为数 */
  RiskCnt?: number | null;
  /** 敏感信息数 */
  SensitiveInfoCnt?: number | null;
  /** 是否信任镜像 */
  IsTrustImage?: boolean;
  /** 镜像系统 */
  OsName?: string;
  /** agent镜像扫描错误 */
  AgentError?: string | null;
  /** 后端镜像扫描错误 */
  ScanError?: string | null;
  /** 系统架构 */
  Architecture?: string | null;
  /** 作者 */
  Author?: string | null;
  /** 构建历史 */
  BuildHistory?: string | null;
  /** 木马扫描进度 */
  ScanVirusProgress?: number | null;
  /** 漏洞扫进度 */
  ScanVulProgress?: number | null;
  /** 敏感信息扫描进度 */
  ScanRiskProgress?: number | null;
  /** 木马扫描错误 */
  ScanVirusError?: string | null;
  /** 漏洞扫描错误 */
  ScanVulError?: string | null;
  /** 敏感信息错误 */
  ScanRiskError?: string | null;
  /** 镜像扫描状态 */
  ScanStatus?: string | null;
  /** 木马病毒数 */
  VirusCnt?: number | null;
  /** 镜像扫描状态 */
  Status?: number | null;
  /** 剩余扫描时间 */
  RemainScanTime?: number | null;
  /** 授权为：1，未授权为：0 */
  IsAuthorized?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAssetImageRegistryAssetStatusRequest {
}

declare interface DescribeAssetImageRegistryAssetStatusResponse {
  /** 更新进度状态,doing更新中，success更新成功，failed失败 */
  Status: string;
  /** 错误信息 */
  Err: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  ImageDigest?: string | null;
  /** 镜像地址 */
  ImageRepoAddress?: string | null;
  /** 镜像类型 */
  RegistryType?: string | null;
  /** 仓库名称 */
  ImageName?: string | null;
  /** 镜像版本 */
  ImageTag?: string | null;
  /** 扫描时间 */
  ScanTime?: string | null;
  /** 扫描状态 */
  ScanStatus?: string | null;
  /** 安全漏洞数 */
  VulCnt?: number | null;
  /** 木马病毒数 */
  VirusCnt?: number | null;
  /** 风险行为数 */
  RiskCnt?: number | null;
  /** 敏感信息数 */
  SentiveInfoCnt?: number | null;
  /** 镜像系统 */
  OsName?: string | null;
  /** 木马扫描错误 */
  ScanVirusError?: string | null;
  /** 漏洞扫描错误 */
  ScanVulError?: string | null;
  /** 层文件信息 */
  LayerInfo?: string | null;
  /** 实例id */
  InstanceId?: string | null;
  /** 实例名称 */
  InstanceName?: string | null;
  /** 命名空间 */
  Namespace?: string | null;
  /** 高危扫描错误 */
  ScanRiskError?: string | null;
  /** 木马信息扫描进度 */
  ScanVirusProgress?: number | null;
  /** 漏洞扫描进度 */
  ScanVulProgress?: number | null;
  /** 敏感扫描进度 */
  ScanRiskProgress?: number | null;
  /** 剩余扫描时间秒 */
  ScanRemainTime?: number | null;
  /** cve扫描状态 */
  CveStatus?: string | null;
  /** 高危扫描状态 */
  RiskStatus?: string | null;
  /** 木马扫描状态 */
  VirusStatus?: string | null;
  /** 总进度 */
  Progress?: number | null;
  /** 授权状态 */
  IsAuthorized?: number | null;
  /** 镜像大小 */
  ImageSize?: number | null;
  /** 镜像Id */
  ImageId?: string | null;
  /** 镜像区域 */
  RegistryRegion?: string | null;
  /** 镜像创建的时间 */
  ImageCreateTime?: string | null;
  /** 敏感信息数 */
  SensitiveInfoCnt?: number | null;
  /** Id */
  Id?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  DownloadUrl?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 是否仅展示运行中容器镜像 */
  IsRunning?: boolean;
}

declare interface DescribeAssetImageRegistryListResponse {
  /** 镜像仓库列表 */
  List?: ImageRepoInfo[] | null;
  /** 总数量 */
  TotalCount?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAssetImageRegistryRegistryDetailRequest {
  /** 仓库唯一id */
  RegistryId: number;
}

declare interface DescribeAssetImageRegistryRegistryDetailResponse {
  /** 仓库名 */
  Name?: string;
  /** 用户名 */
  Username?: string;
  /** 密码 */
  Password?: string;
  /** 仓库url */
  Url?: string;
  /** 仓库类型，列表：harbor */
  RegistryType?: string;
  /** 仓库版本 */
  RegistryVersion?: string | null;
  /** 网络类型，列表：public（公网）,private（私网） */
  NetType?: string;
  /** 区域，列表:default（默认） */
  RegistryRegion?: string | null;
  /** 限速 */
  SpeedLimit?: number | null;
  /** 安全模式（证书校验）：0（默认） 非安全模式（跳过证书校验）：1 */
  Insecure?: number | null;
  /** 联通性检测结果详情 */
  ConnDetectDetail?: RegistryConnDetectResult[];
  /** tcr情况下instance_id */
  InstanceID?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAssetImageRegistryRegistryListRequest {
}

declare interface DescribeAssetImageRegistryRegistryListResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAssetImageRegistryScanStatusOneKeyRequest {
  /** 需要获取进度的镜像列表 */
  Images?: ImageInfo[];
  /** 是否获取全部镜像 */
  All?: boolean;
  /** 需要获取进度的镜像列表Id */
  Id?: number[];
  /** 获取进度的任务ID */
  TaskID?: number;
}

declare interface DescribeAssetImageRegistryScanStatusOneKeyResponse {
  /** 镜像个数 */
  ImageTotal?: number;
  /** 扫描镜像个数 */
  ImageScanCnt?: number;
  /** 扫描进度列表 */
  ImageStatus?: ImageProgress[] | null;
  /** 安全个数 */
  SuccessCount?: number;
  /** 风险个数 */
  RiskCount?: number;
  /** 总的扫描进度 */
  Schedule?: number;
  /** 总的扫描状态 */
  Status?: string;
  /** 扫描剩余时间 */
  ScanRemainTime?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAssetImageRegistrySummaryRequest {
  /** 过滤字段 */
  Filters?: AssetFilters[];
}

declare interface DescribeAssetImageRegistrySummaryResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 必填参数，镜像唯一ID，可通过DescribeAssetImageRegistryList接口获取 */
  Id?: number;
}

declare interface DescribeAssetImageRegistryVulListExportResponse {
  /** excel文件下载地址 */
  DownloadUrl?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 必填参数，镜像唯一ID，可通过DescribeAssetImageRegistryList接口获取 */
  Id?: number;
}

declare interface DescribeAssetImageRegistryVulListResponse {
  /** 镜像漏洞列表 */
  List?: ImageVul[] | null;
  /** 总数量 */
  TotalCount?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAssetImageScanSettingRequest {
}

declare interface DescribeAssetImageScanSettingResponse {
  /** 开关 */
  Enable?: boolean;
  /** 扫描时刻(完整时间;后端按0时区解析时分秒) */
  ScanTime?: string;
  /** 扫描间隔 */
  ScanPeriod?: number;
  /** 扫描木马 */
  ScanVirus?: boolean;
  /** 扫描敏感信息 */
  ScanRisk?: boolean;
  /** 扫描漏洞 */
  ScanVul?: boolean;
  /** 扫描全部镜像 */
  All?: boolean;
  /** 自定义扫描镜像 */
  Images?: string[];
  /** 镜像是否存在运行中的容器 */
  ContainerRunning?: boolean;
  /** 扫描范围 0 全部授权镜像，1自选镜像，2 推荐扫描 */
  ScanScope?: number;
  /** 扫描结束时间 02:00 时分 */
  ScanEndTime?: string;
  /** 排除的扫描镜像 */
  ExcludeImages?: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAssetImageScanTaskRequest {
}

declare interface DescribeAssetImageScanTaskResponse {
  /** 任务id */
  TaskID: string;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  List?: PortInfo[];
  /** 总数量 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  List?: ProcessInfo[];
  /** 总数量 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAssetSummaryRequest {
}

declare interface DescribeAssetSummaryResponse {
  /** 应用个数 */
  AppCnt?: number;
  /** 容器个数 */
  ContainerCnt?: number;
  /** 暂停的容器个数 */
  ContainerPause?: number;
  /** 运行的容器个数 */
  ContainerRunning?: number;
  /** 停止运行的容器个数 */
  ContainerStop?: number;
  /** 创建时间 */
  CreateTime?: string;
  /** 数据库个数 */
  DbCnt?: number;
  /** 镜像个数 */
  ImageCnt?: number;
  /** 主机在线个数 */
  HostOnline?: number;
  /** 主机个数 */
  HostCnt?: number;
  /** 有风险的镜像个数 */
  ImageHasRiskInfoCnt?: number;
  /** 有病毒的镜像个数 */
  ImageHasVirusCnt?: number;
  /** 有漏洞的镜像个数 */
  ImageHasVulsCnt?: number;
  /** 不受信任的镜像个数 */
  ImageUntrustCnt?: number;
  /** 监听的端口个数 */
  ListenPortCnt?: number;
  /** 进程个数 */
  ProcessCnt?: number;
  /** web服务个数 */
  WebServiceCnt?: number;
  /** 最近镜像扫描时间 */
  LatestImageScanTime?: string;
  /** 风险镜像个数 */
  ImageUnsafeCnt?: number;
  /** 主机未安装agent数量 */
  HostUnInstallCnt?: number;
  /** 超级节点个数 */
  SuperNodeCnt?: number;
  /** 超级节点运行个数 */
  SuperNodeRunningCnt?: number;
  /** 今日新增镜像个数 */
  TodayNewImageCnt?: number;
  /** 今日新增风险镜像个数 */
  TodayUnsafeImageCnt?: number;
  /** 推荐处置镜像个数 */
  RecommendedFixImageCnt?: number;
  /** 已扫描镜像个数 */
  ScannedImageCnt?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAssetSuperNodeListRequest {
  /** 过滤条件。NodeID- String - 是否必填：否 - ID NodeName- String - 是否必填：否 - 超级节点名称 SubnetName- String - 是否必填：否 - VPC子网 AgentStatus- String - 是否必填：否 - 安装状态UNINSTALL:未安装;INSTALLED:已安装;INSTALLING:安装中; */
  Filters?: RunTimeFilters[];
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 排序字段 */
  By?: string;
  /** 排序方式 asc,desc */
  Order?: string;
}

declare interface DescribeAssetSuperNodeListResponse {
  /** 超级节点列表 */
  List?: SuperNodeListItem[];
  /** 总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAssetSyncLastTimeRequest {
}

declare interface DescribeAssetSyncLastTimeResponse {
  /** 资产最近同步时间 */
  AssetSyncLastTime?: string;
  /** 任务状态PENDING:待处理PROCESSING:处理中PROCESSED:已完成 */
  TaskStatus?: string;
  /** 任务进度(百分比) */
  TaskProcess?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  List?: ServiceInfo[];
  /** 总数量 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCheckItemListRequest {
  /** 偏移量 */
  Offset?: number;
  /** 每次查询的最大记录数量 */
  Limit?: number;
  /** Name 可取值：Name: 检查项名称RiskType: 风险类别RiskLevel: 风险等级RiskTarget: 检查对象RiskAttribute: 检测项所属分型线类型Enable: 检查项是否开启(0:关闭 1:开启) */
  Filters?: ComplianceFilters[];
}

declare interface DescribeCheckItemListResponse {
  /** 检查项详情数组 */
  ClusterCheckItems?: ClusterCheckItem[];
  /** 检查项总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClusterDetailRequest {
  /** 集群id */
  ClusterId: string;
}

declare interface DescribeClusterDetailResponse {
  /** 集群id */
  ClusterId?: string;
  /** 集群名字 */
  ClusterName?: string;
  /** 当前集群扫描任务的进度，100表示扫描完成. */
  ScanTaskProgress?: number;
  /** 集群版本 */
  ClusterVersion?: string;
  /** 运行时组件 */
  ContainerRuntime?: string;
  /** 集群节点数 */
  ClusterNodeNum?: number;
  /** 集群状态 (Running 运行中 Creating 创建中 Abnormal 异常 ) */
  ClusterStatus?: string;
  /** 集群类型：为托管集群MANAGED_CLUSTER、独立集群INDEPENDENT_CLUSTER */
  ClusterType?: string;
  /** 集群区域 */
  Region?: string;
  /** 严重风险检查项的数量 */
  SeriousRiskCount?: number;
  /** 高风险检查项的数量 */
  HighRiskCount?: number;
  /** 中风险检查项的数量 */
  MiddleRiskCount?: number;
  /** 提示风险检查项的数量 */
  HintRiskCount?: number;
  /** 检查任务的状态 */
  CheckStatus?: string;
  /** 防御容器状态 */
  DefenderStatus?: string;
  /** 扫描任务创建时间 */
  TaskCreateTime?: string;
  /** 网络类型.PublicNetwork为公网类型,VPCNetwork为VPC网络 */
  NetworkType?: string;
  /** API Server地址 */
  ApiServerAddress?: string;
  /** 节点数 */
  NodeCount?: number;
  /** 命名空间数 */
  NamespaceCount?: number;
  /** 工作负载数 */
  WorkloadCount?: number;
  /** Pod数量 */
  PodCount?: number;
  /** Service数量 */
  ServiceCount?: number;
  /** Ingress数量 */
  IngressCount?: number;
  /** 主节点的ip列表 */
  MasterIps?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClusterNodesRequest {
  /** 集群Id,不输入表示查询所有 */
  ClusterId?: string;
  /** 偏移量 */
  Offset?: number;
  /** 每次查询的最大记录数量 */
  Limit?: number;
  /** Name 可取值：DefendStatus（防护状态）:	Defended 已防护	UnDefended 未防护AgentStatus (容器agent状态): OFFLINE 离线 ONLINE 在线 UNINSTALL 未安装InstanceState (节点状态): Running 运行中 Ready 准备 Notready 未准备好 Initializing 初始化 Failed 失败 Error 错误InstanceRole (节点角色) WORKER 工作节点 MASTER_ETCD 主节点 SUPER 超级节点 */
  Filters?: ComplianceFilters[];
  /** 排序字段 */
  By?: string;
  /** 排序方式 asc,desc */
  Order?: string;
}

declare interface DescribeClusterNodesResponse {
  /** 总数 */
  TotalCount?: number;
  /** 节点列表 */
  ClusterNodeList?: ClusterNodeInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClusterSummaryRequest {
}

declare interface DescribeClusterSummaryResponse {
  /** 集群总数 */
  TotalCount?: number;
  /** 有风险的集群数量 */
  RiskClusterCount?: number;
  /** 未检查的集群数量 */
  UncheckClusterCount?: number;
  /** 托管集群数量 */
  ManagedClusterCount?: number;
  /** 独立集群数量 */
  IndependentClusterCount?: number;
  /** 无风险的集群数量 */
  NoRiskClusterCount?: number;
  /** 已经检查集群数 */
  CheckedClusterCount?: number;
  /** 自动检查集群数 */
  AutoCheckClusterCount?: number;
  /** 手动检查集群数 */
  ManualCheckClusterCount?: number;
  /** 检查失败集群数 */
  FailedClusterCount?: number;
  /** 未导入的集群数量 */
  NotImportedClusterCount?: number;
  /** eks集群数量 */
  ServerlessClusterCount?: number;
  /** TKE集群数量 */
  TkeClusterCount?: number | null;
  /** 用户自建腾讯云集群数量 */
  UserCreateTencentClusterCount?: number | null;
  /** 用户自建集群混合云数量 */
  UserCreateHybridClusterCount?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  TotalCount?: number;
  /** 定时任务信息的列表 */
  PeriodTaskSet?: CompliancePeriodTask[];
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCompliancePolicyItemAffectedSummaryRequest {
  /** DescribeComplianceTaskPolicyItemSummaryList返回的CustomerPolicyItemId，表示检测项的ID。 */
  CustomerPolicyItemId: number;
}

declare interface DescribeCompliancePolicyItemAffectedSummaryResponse {
  /** 返回各检测项影响的资产的汇总信息。 */
  PolicyItemSummary: CompliancePolicyItemSummary;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeContainerAssetSummaryRequest {
}

declare interface DescribeContainerAssetSummaryResponse {
  /** 容器总数 */
  ContainerTotalCnt?: number;
  /** 正在运行容器数量 */
  ContainerRunningCnt?: number;
  /** 暂停运行容器数量 */
  ContainerPauseCnt?: number;
  /** 停止运行容器数量 */
  ContainerStopped?: number;
  /** 本地镜像数量 */
  ImageCnt?: number;
  /** 主机节点数量 */
  HostCnt?: number;
  /** 主机正在运行节点数量 */
  HostRunningCnt?: number;
  /** 主机离线节点数量 */
  HostOfflineCnt?: number;
  /** 镜像仓库数量 */
  ImageRegistryCnt?: number;
  /** 镜像总数 */
  ImageTotalCnt?: number;
  /** 主机未安装agent数量 */
  HostUnInstallCnt?: number;
  /** 超级节点个数 */
  HostSuperNodeCnt?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeESAggregationsRequest {
  /** ES聚合条件JSON */
  Query: string;
}

declare interface DescribeESAggregationsResponse {
  /** ES聚合结果JSON */
  Data: string;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeEscapeEventDetailRequest {
  /** 事件唯一id */
  EventId: string;
  /** 事件类型 */
  EventType?: string;
}

declare interface DescribeEscapeEventDetailResponse {
  /** 事件基本信息 */
  EventBaseInfo?: RunTimeEventBaseInfo;
  /** 进程信息 */
  ProcessInfo?: ProcessDetailInfo;
  /** 事件描述 */
  EventDetail?: EscapeEventDescription;
  /** 父进程信息 */
  ParentProcessInfo?: ProcessBaseInfo;
  /** 祖先进程信息 */
  AncestorProcessInfo?: ProcessBaseInfo | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeEscapeEventInfoRequest {
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤参数,Status：状态(EVENT_UNDEAL:未处理，EVENT_DEALED:已处理，EVENT_INGNORE:忽略)EventType: 事件类型(MOUNT_SENSITIVE_PTAH:敏感路径挂载 PRIVILEGE_CONTAINER_START:特权容器 PRIVILEGE:提权事件 ESCAPE_VUL_OCCURRED:逃逸漏洞利用 ESCAPE_DOCKER_API:访问Docker API接口逃逸 ESCAPE_TAMPER_SENSITIVE_FILE:篡改敏感文件逃逸 ESCAPE_CGROUPS:利用cgroup机制逃逸)ContainerNetStatus: 容器隔离状态 (NORMAL:正常 ISOLATED:已隔离 ISOLATE_FAILED:隔离失败 ISOLATE_FAILED:解除隔离失败 RESTORING:解除隔离中 ISOLATING:隔离中)ContainerStatus: 容器状态(CREATED:已创建 RUNNING:正常运行 PAUSED:暂停运行 STOPPED:停止运行 RESTARTING:重启中 REMOVING:迁移中 DEAD:DEAD UNKNOWN：未知 DESTROYED:已销毁)ForeignUniqueKey:镜像ID及事件类型唯一值 */
  Filters?: RunTimeFilters[];
  /** 升序降序,asc desc */
  Order?: string;
  /** 排序字段 */
  By?: string;
}

declare interface DescribeEscapeEventInfoResponse {
  /** 逃逸事件数组 */
  EventSet?: EscapeEventInfo[];
  /** 事件总数量 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeEscapeRuleInfoRequest {
}

declare interface DescribeEscapeRuleInfoResponse {
  /** 规则信息 */
  RuleSet: EscapeRule[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeEscapeSafeStateRequest {
}

declare interface DescribeEscapeSafeStateResponse {
  /** Unsafe：存在风险，Safe：暂无风险,UnKnown:未知风险 */
  IsSafe: string;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeEventEscapeImageListRequest {
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤参数:EventType: 事件类型(MOUNT_SENSITIVE_PTAH:敏感路径挂载 PRIVILEGE_CONTAINER_START:特权容器)Status: 事件状态(EVENT_UNDEAL:未处理，EVENT_DEALED:已处理，EVENT_INGNORE:忽略)ImageID: 镜像idImageName:镜像名称 */
  Filters?: RunTimeFilters[];
  /** 升序降序,asc desc */
  Order?: string;
  /** 排序字段 */
  By?: string;
}

declare interface DescribeEventEscapeImageListResponse {
  /** 风险容器镜像列表 */
  List?: EventEscapeImageInfo[];
  /** 事件总数量 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeExportJobDownloadURLRequest {
  /** 任务ID */
  JobID: string;
}

declare interface DescribeExportJobDownloadURLResponse {
  /** 下载链接 */
  DownloadURL: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeExportJobManageListRequest {
  /** 过滤条件。ExportStatus- string -是否必填: 否 - 导出状态 RUNNING: 导出中 SUCCESS:导出完成 FAILURE:失败ExportSource- string -是否必填: 否 - 导出来源 LocalImage: 本地镜像 RegistryImage: 仓库镜像 */
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
  TotalCount?: number;
  /** 任务列表 */
  List?: ExportJobInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeImageAuthorizedInfoRequest {
}

declare interface DescribeImageAuthorizedInfoResponse {
  /** 总共有效的镜像授权数 */
  TotalAuthorizedCnt?: number;
  /** 已使用镜像授权数 */
  UsedAuthorizedCnt?: number;
  /** 已开启扫描镜像数 */
  ScannedImageCnt?: number;
  /** 未开启扫描镜像数 */
  NotScannedImageCnt?: number;
  /** 本地未开启扫描镜像数 */
  NotScannedLocalImageCnt?: number;
  /** 试用镜像授权数 */
  TrialAuthorizedCnt?: number;
  /** 已使用试用镜像授权数 */
  UsedTrialAuthorizedCnt?: number;
  /** 已购镜像授权数 */
  PurchasedAuthorizedCnt?: number;
  /** 已使用已购镜像授权数 */
  UsedPurchasedAuthorizedCnt?: number;
  /** 是否可免费领取镜像授权数 */
  CanApplyFreeImageAuthorize?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeImageAutoAuthorizedRuleRequest {
}

declare interface DescribeImageAutoAuthorizedRuleResponse {
  /** 规则是否生效，0:不生效，1:已生效 */
  IsEnabled?: number;
  /** 授权范围类别，MANUAL:自选主机节点，ALL:全部镜像 */
  RangeType?: string | null;
  /** 授权范围是自选主机时的主机数量 */
  HostCount?: number | null;
  /** 每天最大的镜像授权数限制, 0表示无限制 */
  MaxDailyCount?: number | null;
  /** 规则id，用未设置时为0 */
  RuleId?: number | null;
  /** 自动扫描开关，0：关闭，1：开启 */
  AutoScanEnabled?: number;
  /** 自动扫描范围 */
  ScanType?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 可返回的命令空间的总量。 */
  TotalCount?: number;
  /** 返回的命令空间列表 */
  NamespaceList?: string[];
  /** 返回的命令空间详细信息列表 */
  NamespaceDetail?: NamespaceInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeImageRegistryTimingScanTaskRequest {
}

declare interface DescribeImageRegistryTimingScanTaskResponse {
  /** 定时扫描开关 */
  Enable?: boolean | null;
  /** 定时任务扫描时间 */
  ScanTime?: string;
  /** 定时扫描间隔 */
  ScanPeriod?: number;
  /** 扫描类型数组 */
  ScanType?: string[] | null;
  /** 扫描全部镜像 */
  All?: boolean;
  /** 自定义扫描镜像 */
  Images?: ImageInfo[] | null;
  /** 自动以扫描镜像Id */
  Id?: number[] | null;
  /** 是否扫描最新版本镜像 */
  Latest?: boolean | null;
  /** 扫描结束时间 */
  ScanEndTime?: string | null;
  /** 仓库类型 tcr,ccr,harbor */
  RegistryType?: string[];
  /** 是否存在运行中的容器 */
  ContainerRunning?: boolean;
  /** 扫描范围 0全部镜像，1自选镜像，2推荐扫描镜像 */
  ScanScope?: number;
  /** 命名空间 */
  Namespace?: string[];
  /** 排除的镜像资产id */
  ExcludeImageAssetIds?: number[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeIndexListRequest {
}

declare interface DescribeIndexListResponse {
  /** ES 索引信息 */
  Data: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInspectionReportRequest {
}

declare interface DescribeInspectionReportResponse {
  /** 报告名称 */
  ReportName: string;
  /** 下载链接 */
  ReportUrl: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeK8sApiAbnormalEventInfoRequest {
  /** 事件ID */
  ID: number;
}

declare interface DescribeK8sApiAbnormalEventInfoResponse {
  /** 事件详情 */
  Info: K8sApiAbnormalEventInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeK8sApiAbnormalEventListRequest {
  /** 过滤条件。TimeRange - string -是否必填: 否 - 时间范围筛选 ["2022-03-31 16:55:00", "2022-03-31 17:00:00"]MatchRules - string - 是否必填: 否 -命中规则筛选RiskLevel - string - 是否必填: 否 -威胁等级筛选Status - string - 是否必填: 否 -事件状态筛选MatchRuleType - string - 是否必填: 否 -命中规则类型筛选ClusterRunningStatus - string - 是否必填: 否 -集群运行状态ClusterName - string - 是否必填: 否 -集群名称ClusterID - string - 是否必填: 否 -集群ID */
  Filters?: RunTimeFilters[];
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 排序方式 */
  Order?: string;
  /** 排序字段LatestFoundTime: 最近生成时间AlarmCount: 告警数量 */
  By?: string;
}

declare interface DescribeK8sApiAbnormalEventListResponse {
  /** 事件列表 */
  List: K8sApiAbnormalEventListItem[];
  /** 总数量 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeK8sApiAbnormalRuleInfoRequest {
  /** 规则ID */
  RuleID: string;
}

declare interface DescribeK8sApiAbnormalRuleInfoResponse {
  /** 规则详情 */
  Info: K8sApiAbnormalRuleInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeK8sApiAbnormalRuleListRequest {
  /** 过滤条件。RuleType - string - 是否必填: 否 -规则类型Status - string - 是否必填: 否 -状态 */
  Filters?: RunTimeFilters[];
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 排序方式 */
  Order?: string;
  /** 排序字段。UpdateTime - string - 是否必填: 否 -最后更新时间EffectClusterCount - string - 是否必填: 否 -影响集群数 */
  By?: string;
}

declare interface DescribeK8sApiAbnormalRuleListResponse {
  /** 规则列表 */
  List: K8sApiAbnormalRuleListItem[];
  /** 总数量 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeK8sApiAbnormalRuleScopeListRequest {
  /** 规则ID */
  RuleID: string;
  /** 偏移量 */
  Offset?: number;
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 过滤条件。Action - string -是否必填: 否 - 执行动作RiskLevel - string - 是否必填: 否 -威胁等级筛选 */
  Filters?: RunTimeFilters[];
}

declare interface DescribeK8sApiAbnormalRuleScopeListResponse {
  /** 总数 */
  TotalCount: number;
  /** 列表 */
  List: K8sApiAbnormalRuleScopeInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeK8sApiAbnormalSummaryRequest {
}

declare interface DescribeK8sApiAbnormalSummaryResponse {
  /** 待处理事件个数 */
  UnhandleEventCount: number;
  /** 待处理高危事件个数 */
  UnhandleHighLevelEventCount: number;
  /** 待处理中危事件个数 */
  UnhandleMediumLevelEventCount: number;
  /** 待处理低危事件个数 */
  UnhandleLowLevelEventCount: number;
  /** 待处理提示级别事件个数 */
  UnhandleNoticeLevelEventCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeK8sApiAbnormalTendencyRequest {
  /** 趋势周期(默认为7天) */
  TendencyPeriod: number;
}

declare interface DescribeK8sApiAbnormalTendencyResponse {
  /** 趋势列表 */
  List: K8sApiAbnormalTendencyItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLogStorageStatisticRequest {
}

declare interface DescribeLogStorageStatisticResponse {
  /** 总容量（单位：B） */
  TotalSize: number;
  /** 已使用容量（单位：B） */
  UsedSize: number;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeNetworkFirewallClusterRefreshStatusRequest {
  /** 任务ID */
  TaskId: number;
}

declare interface DescribeNetworkFirewallClusterRefreshStatusResponse {
  /** 任务状态，可能为：Task_Running,Task_Succ,Task_Error,Task_NoExist */
  TaskStatus: string;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeNetworkFirewallPolicyDiscoverRequest {
  /** 任务ID */
  TaskId: number;
}

declare interface DescribeNetworkFirewallPolicyDiscoverResponse {
  /** 任务状态，可能为：Task_Running,Task_Succ,Task_Error,Task_NoExist */
  TaskStatus: string;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePromotionActivityRequest {
  /** 活动ID */
  ActiveID: number;
}

declare interface DescribePromotionActivityResponse {
  /** 促销活动内容 */
  List: PromotionActivityContent[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePublicKeyRequest {
}

declare interface DescribePublicKeyResponse {
  /** 公钥 */
  PublicKey: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePurchaseStateInfoRequest {
}

declare interface DescribePurchaseStateInfoResponse {
  /** 0：可申请试用可购买；1：只可购买(含试用审核不通过和试用过期)；2：试用生效中；3：专业版生效中；4：专业版过期 */
  State?: number;
  /** 总核数 */
  CoresCnt?: number | null;
  /** 已购买核数 */
  AuthorizedCoresCnt?: number | null;
  /** 镜像数 */
  ImageCnt?: number | null;
  /** 已授权镜像数 */
  AuthorizedImageCnt?: number | null;
  /** 已购买镜像授权数 */
  PurchasedAuthorizedCnt?: number | null;
  /** 过期时间 */
  ExpirationTime?: string | null;
  /** 0表示默认状态(用户未设置，即初始状态)， 1表示自动续费，2表示明确不自动续费(用户设置) */
  AutomaticRenewal?: number | null;
  /** 试用期间赠送镜像授权数，可能会过期 */
  GivenAuthorizedCnt?: number | null;
  /** 起始时间 */
  BeginTime?: string | null;
  /** 子状态(具体意义依据State字段而定)State为4时，有效值为: ISOLATE(隔离) DESTROED(已销毁) */
  SubState?: string | null;
  /** 计费key */
  InquireKey?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRefreshTaskRequest {
  /** 任务ID */
  TaskId: number;
  /** 新任务ID */
  NewTaskID?: string;
}

declare interface DescribeRefreshTaskResponse {
  /** 刷新任务状态，可能为：Task_New,Task_Running,Task_Finish,Task_Error,Task_NoExist */
  TaskStatus?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeReverseShellEventsRequest {
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤参数InnerNetAlarmShow- int - 是否必填：1 - 内网告警展示 0 - 不展示 */
  Filters?: RunTimeFilters[];
  /** 升序降序,asc desc */
  Order?: string;
  /** 排序字段 */
  By?: string;
}

declare interface DescribeReverseShellEventsResponse {
  /** 事件总数量 */
  TotalCount?: number;
  /** 反弹shell数组 */
  EventSet?: ReverseShellEventInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeReverseShellWhiteListDetailRequest {
  /** 白名单id */
  WhiteListId: string;
}

declare interface DescribeReverseShellWhiteListDetailResponse {
  /** 事件基本信息 */
  WhiteListDetailInfo: ReverseShellWhiteListInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRiskDnsEventDetailRequest {
  /** 事件ID */
  EventID: number;
}

declare interface DescribeRiskDnsEventDetailResponse {
  /** 事件ID */
  EventID?: number;
  /** 事件类型，恶意域名请求：DOMAIN，恶意IP请求：IP */
  EventType?: string;
  /** 恶意请求次数 */
  EventCount?: number;
  /** 首次发现时间 */
  FoundTime?: string;
  /** 最近生成时间 */
  LatestFoundTime?: string;
  /** 容器ID */
  ContainerID?: string;
  /** 容器名称 */
  ContainerName?: string;
  /** 隔离状态未隔离 NORMAL已隔离 ISOLATED隔离中 ISOLATING隔离失败	ISOLATE_FAILED解除隔离中 RESTORING解除隔离失败 RESTORE_FAILED */
  ContainerNetStatus?: string;
  /** 容器状态正在运行: RUNNING暂停: PAUSED停止: STOPPED已经创建: CREATED已经销毁: DESTROYED正在重启中: RESTARTING迁移中: REMOVING */
  ContainerStatus?: string;
  /** 容器子状态"AGENT_OFFLINE" //Agent离线"NODE_DESTROYED" //节点已销毁"CONTAINER_EXITED" //容器已退出"CONTAINER_DESTROYED" //容器已销毁"SHARED_HOST" // 容器与主机共享网络"RESOURCE_LIMIT" //隔离操作资源超限"UNKNOW" // 原因未知 */
  ContainerNetSubStatus?: string;
  /** 容器隔离操作来源 */
  ContainerIsolateOperationSrc?: string;
  /** 镜像ID */
  ImageID?: string;
  /** 镜像名称 */
  ImageName?: string;
  /** 主机名称 */
  HostName?: string;
  /** 内网IP */
  HostIP?: string;
  /** 外网IP */
  PublicIP?: string;
  /** 节点名称 */
  PodName?: string;
  /** 事件描述 */
  Description?: string;
  /** 解决方案 */
  Solution?: string;
  /** 参考链接 */
  Reference?: string[];
  /** 恶意域名或IP */
  Address?: string | null;
  /** 恶意IP所属城市 */
  City?: string | null;
  /** 命中规则类型SYSTEM：系统规则 USER：用户自定义 */
  MatchRuleType?: string;
  /** 标签特征 */
  FeatureLabel?: string;
  /** 进程权限 */
  ProcessAuthority?: string;
  /** 进程md5 */
  ProcessMd5?: string;
  /** 进程启动用户 */
  ProcessStartUser?: string;
  /** 进程用户组 */
  ProcessUserGroup?: string;
  /** 进程路径 */
  ProcessPath?: string;
  /** 进程树 */
  ProcessTree?: string;
  /** 进程命令行参数 */
  ProcessParam?: string;
  /** 父进程启动用户 */
  ParentProcessStartUser?: string;
  /** 父进程用户组 */
  ParentProcessUserGroup?: string;
  /** 父进程路径 */
  ParentProcessPath?: string;
  /** 父进程命令行参数 */
  ParentProcessParam?: string;
  /** 祖先进程启动用户 */
  AncestorProcessStartUser?: string;
  /** 祖先进程用户组 */
  AncestorProcessUserGroup?: string;
  /** 祖先进程路径 */
  AncestorProcessPath?: string;
  /** 祖先进程命令行参数 */
  AncestorProcessParam?: string;
  /** 主机ID */
  HostID?: string;
  /** 事件状态EVENT_UNDEAL： 待处理EVENT_DEALED：已处理EVENT_IGNORE： 已忽略EVENT_ADD_WHITE：已加白 */
  EventStatus?: string;
  /** 操作时间 */
  OperationTime?: string | null;
  /** 备注 */
  Remark?: string;
  /** 节点类型 */
  NodeType?: string;
  /** 节点名称 */
  NodeName?: string;
  /** 节点子网ID */
  NodeSubNetID?: string;
  /** 节点子网名称 */
  NodeSubNetName?: string;
  /** 节点子网网段 */
  NodeSubNetCIDR?: string;
  /** 集群ID */
  ClusterID?: string;
  /** podip */
  PodIP?: string;
  /** pod状态 */
  PodStatus?: string;
  /** 节点唯一id */
  NodeUniqueID?: string;
  /** 节点ID名称 */
  NodeID?: string;
  /** 集群名称 */
  ClusterName?: string;
  /** Namespace */
  Namespace?: string;
  /** 工作负载类型 */
  WorkloadType?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRiskDnsListRequest {
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤条件。EventStatus- String - 是否必填：否 - 事件状态，待处理：EVENT_UNDEAL，EVENT_DEALED：已处理，已忽略：EVENT_IGNORE， EVENT_ADD_WHITE：已加白ContainerStatus- String - 是否必填：否 - 容器运行状态筛选，已创建：CREATED,正常运行：RUNNING, 暂定运行：PAUSED, 停止运行：	STOPPED，重启中：RESTARTING, 迁移中：REMOVING, 销毁：DESTROYED ContainerNetStatus- String -是否必填: 否 - 容器网络状态筛选 未隔离：NORMAL，已隔离：ISOLATED，隔离失败：ISOLATE_FAILED，解除隔离失败：RESTORE_FAILED，解除隔离中：RESTORING，隔离中：ISOLATINGEventType - String -是否必填: 否 - 事件类型，恶意域名请求：DOMAIN，恶意IP请求：IPTimeRange- String -是否必填: 否 - 时间范围，第一个值表示开始时间，第二个值表示结束时间 RiskDns- string - 是否必填：否 - 恶意域名。RiskIP- string - 是否必填：否 - 恶意IP。ContainerName- string - 是否必填：否 - 容器名称。ContainerID- string - 是否必填：否 - 容器ID。ImageName- string - 是否必填：否 - 镜像名称。ImageID- string - 是否必填：否 - 镜像ID。HostName- string - 是否必填：否 - 主机名称。HostIP- string - 是否必填：否 - 内网IP。PublicIP- string - 是否必填：否 - 外网IP。 */
  Filters?: RunTimeFilters[];
  /** 排序方式：asc/desc */
  Order?: string;
  /** 排序字段：告警数量：EventCount，最近生成时间：LatestFoundTime */
  By?: string;
}

declare interface DescribeRiskDnsListResponse {
  /** 恶意请求事件列表 */
  List?: RiskDnsEventInfo[];
  /** 总数量 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRiskSyscallDetailRequest {
  /** 事件唯一id */
  EventId: string;
}

declare interface DescribeRiskSyscallDetailResponse {
  /** 事件基本信息 */
  EventBaseInfo?: RunTimeEventBaseInfo;
  /** 进程信息 */
  ProcessInfo?: ProcessDetailInfo;
  /** 父进程信息 */
  ParentProcessInfo?: ProcessDetailBaseInfo;
  /** 事件描述 */
  EventDetail?: RiskSyscallEventDescription;
  /** 祖先进程信息 */
  AncestorProcessInfo?: ProcessBaseInfo | null;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  TotalCount?: number;
  /** 高危系统调用数组 */
  EventSet?: RiskSyscallEventInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRiskSyscallNamesRequest {
}

declare interface DescribeRiskSyscallNamesResponse {
  /** 事件总数量 */
  TotalCount: number;
  /** 系统调用名称列表 */
  SyscallNames: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRiskSyscallWhiteListDetailRequest {
  /** 白名单id */
  WhiteListId: string;
}

declare interface DescribeRiskSyscallWhiteListDetailResponse {
  /** 白名单基本信息 */
  WhiteListDetailInfo: RiskSyscallWhiteListInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSearchExportListRequest {
  /** ES查询条件JSON */
  Query: string;
}

declare interface DescribeSearchExportListResponse {
  /** 导出任务ID，前端拿着任务ID查询任务进度 */
  JobId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSearchLogsRequest {
}

declare interface DescribeSearchLogsResponse {
  /** 历史搜索记录 保留最新的10条 */
  Data: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSecLogAlertMsgRequest {
  /** 告警类型日志储量告警: log_reserve_full日志存储时间告警: log_save_day_limitkafka实例/公网域名不可用: kafka_instance_domain_unavailablekafka 用户名密码错误: kafka_user_passwd_wrongkafka后台报错字段: kafka_field_wrong */
  Type?: string[];
}

declare interface DescribeSecLogAlertMsgResponse {
  /** 告警消息队列 */
  List: SecLogAlertMsgInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSecLogDeliveryClsSettingRequest {
}

declare interface DescribeSecLogDeliveryClsSettingResponse {
  /** 日志类型列表 */
  LogTypeList: SecLogDeliveryClsSettingInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  TotalCount?: number;
  /** 接入对象列表 */
  List?: SecLogJoinObjectInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSecLogJoinTypeListRequest {
}

declare interface DescribeSecLogJoinTypeListResponse {
  /** 接入日志列表 */
  List?: SecLogJoinInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSecLogKafkaUINRequest {
}

declare interface DescribeSecLogKafkaUINResponse {
  /** 目标UIN */
  DstUIN: string | null;
  /** 授权状态 */
  Status: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSuperNodePodListRequest {
  /** 过滤条件。NodeUniqueID- String - 是否必填：否 - 节点唯一id PodName- String - 是否必填：否 - Pod示例名称 PodIP- String - 是否必填：否 - POD IP Namespace- String - 是否必填：否 - 命名空间 Deployment- String - 是否必填：否 - 所属工作负载 Status- String - 是否必填：否 - 状态 */
  Filters?: RunTimeFilters[];
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 排序字段 */
  By?: string;
  /** 排序方式 asc,desc */
  Order?: string;
}

declare interface DescribeSuperNodePodListResponse {
  /** 列表 */
  List?: SuperNodePodListItem[];
  /** 总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeUnauthorizedCoresTendencyRequest {
}

declare interface DescribeUnauthorizedCoresTendencyResponse {
  /** 未授权核数趋势 */
  List: UnauthorizedCoresTendency[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeUnfinishRefreshTaskRequest {
}

declare interface DescribeUnfinishRefreshTaskResponse {
  /** 返回最近的一次任务ID */
  TaskId?: number;
  /** 任务状态，为Task_New,Task_Running,Task_Finish,Task_Error,Task_NoExist.Task_New,Task_Running表示有任务存在，不允许新下发 */
  TaskStatus?: string;
  /** 新任务ID */
  NewTaskID?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  TotalCount?: number;
  /** 集群的详细信息 */
  ClusterInfoList?: ClusterInfoItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeUserPodListRequest {
  /** 集群Id,不填表示获取用户所有pod */
  ClusterId?: string;
  /** 偏移量 */
  Offset?: number;
  /** 每次查询的最大记录数量 */
  Limit?: number;
  /** Name 可取值：ClusterId集群id,Namespace命名空间等 */
  Filters?: ComplianceFilters[];
  /** 排序字段 */
  By?: string;
  /** 排序方式 asc,desc */
  Order?: string;
  /** Service名称 */
  ServiceName?: string;
  /** 命名空间 */
  Namespace?: string;
}

declare interface DescribeUserPodListResponse {
  /** Pod列表详细信息 */
  PodList?: ClusterPodInfo[];
  /** Pod列表总数量 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVirusAutoIsolateSampleDownloadURLRequest {
  /** 样本Md5值 */
  MD5: string;
}

declare interface DescribeVirusAutoIsolateSampleDownloadURLResponse {
  /** 样本下载链接 */
  FileUrl: string;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVirusAutoIsolateSettingRequest {
}

declare interface DescribeVirusAutoIsolateSettingResponse {
  /** 自动隔离开关(true:开 false:关) */
  AutoIsolateSwitch: boolean;
  /** 是否中断隔离文件关联的进程(true:是 false:否) */
  IsKillProgress: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVirusDetailRequest {
  /** 木马文件id */
  Id: string;
}

declare interface DescribeVirusDetailResponse {
  /** 镜像ID */
  ImageId?: string | null;
  /** 镜像名称 */
  ImageName?: string | null;
  /** 创建时间 */
  CreateTime?: string | null;
  /** 木马文件大小 */
  Size?: number | null;
  /** 木马文件路径 */
  FilePath?: string | null;
  /** 最近生成时间 */
  ModifyTime?: string | null;
  /** 病毒名称 */
  VirusName?: string | null;
  /** 风险等级 RISK_CRITICAL, RISK_HIGH, RISK_MEDIUM, RISK_LOW, RISK_NOTICE。 */
  RiskLevel?: string | null;
  /** 容器名称 */
  ContainerName?: string | null;
  /** 容器id */
  ContainerId?: string | null;
  /** 主机名称 */
  HostName?: string | null;
  /** 主机id */
  HostId?: string | null;
  /** 进程名称 */
  ProcessName?: string | null;
  /** 进程路径 */
  ProcessPath?: string | null;
  /** 进程md5 */
  ProcessMd5?: string | null;
  /** 进程id */
  ProcessId?: number | null;
  /** 进程参数 */
  ProcessArgv?: string | null;
  /** 进程链 */
  ProcessChan?: string | null;
  /** 进程组 */
  ProcessAccountGroup?: string | null;
  /** 进程启动用户 */
  ProcessStartAccount?: string | null;
  /** 进程文件权限 */
  ProcessFileAuthority?: string | null;
  /** 来源：0：一键扫描， 1：定时扫描 2：实时监控 */
  SourceType?: number | null;
  /** 标签 */
  Tags?: string[] | null;
  /** 事件描述 */
  HarmDescribe?: string | null;
  /** 建议方案 */
  SuggestScheme?: string | null;
  /** 备注 */
  Mark?: string | null;
  /** 风险文件名称 */
  FileName?: string | null;
  /** 文件MD5 */
  FileMd5?: string | null;
  /** 事件类型 */
  EventType?: string | null;
  /** 集群名称 */
  PodName?: string | null;
  /** DEAL_NONE:文件待处理DEAL_IGNORE:已经忽略DEAL_ADD_WHITELIST:加白DEAL_DEL:文件已经删除DEAL_ISOLATE:已经隔离DEAL_ISOLATING:隔离中DEAL_ISOLATE_FAILED:隔离失败DEAL_RECOVERING:恢复中DEAL_RECOVER_FAILED: 恢复失败 */
  Status?: string | null;
  /** 失败子状态:FILE_NOT_FOUND:文件不存在FILE_ABNORMAL:文件异常FILE_ABNORMAL_DEAL_RECOVER:恢复文件时，文件异常BACKUP_FILE_NOT_FOUND:备份文件不存在CONTAINER_NOT_FOUND_DEAL_ISOLATE:隔离时，容器不存在CONTAINER_NOT_FOUND_DEAL_RECOVER:恢复时，容器不存在 */
  SubStatus?: string | null;
  /** 内网ip */
  HostIP?: string | null;
  /** 外网ip */
  ClientIP?: string | null;
  /** 父进程启动用户 */
  PProcessStartUser?: string | null;
  /** 父进程用户组 */
  PProcessUserGroup?: string | null;
  /** 父进程路径 */
  PProcessPath?: string | null;
  /** 父进程命令行参数 */
  PProcessParam?: string | null;
  /** 祖先进程启动用户 */
  AncestorProcessStartUser?: string | null;
  /** 祖先进程用户组 */
  AncestorProcessUserGroup?: string | null;
  /** 祖先进程路径 */
  AncestorProcessPath?: string | null;
  /** 祖先进程命令行参数 */
  AncestorProcessParam?: string | null;
  /** 事件最后一次处理的时间 */
  OperationTime?: string | null;
  /** 容器隔离状态 */
  ContainerNetStatus?: string | null;
  /** 容器隔离子状态 */
  ContainerNetSubStatus?: string | null;
  /** 容器隔离操作来源 */
  ContainerIsolateOperationSrc?: string | null;
  /** 检测平台1: 云查杀引擎2: tav3: binaryAi4: 异常行为5: 威胁情报 */
  CheckPlatform?: string[] | null;
  /** 文件访问时间 */
  FileAccessTime?: string | null;
  /** 文件修改时间 */
  FileModifyTime?: string | null;
  /** 节点子网ID */
  NodeSubNetID?: string;
  /** 节点子网名称 */
  NodeSubNetName?: string;
  /** 节点子网网段 */
  NodeSubNetCIDR?: string;
  /** 集群id */
  ClusterID?: string;
  /** pod ip */
  PodIP?: string;
  /** pod状态 */
  PodStatus?: string;
  /** 节点唯一ID */
  NodeUniqueID?: string;
  /** 节点类型：NORMAL普通节点、SUPER超级节点 */
  NodeType?: string;
  /** 节点ID */
  NodeID?: string;
  /** 集群名称 */
  ClusterName?: string;
  /** Namespace */
  Namespace?: string;
  /** 工作负载类型 */
  WorkloadType?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVirusEventTendencyRequest {
  /** 趋势周期(默认为7天) */
  TendencyPeriod: number;
}

declare interface DescribeVirusEventTendencyResponse {
  /** 趋势列表 */
  List: VirusTendencyInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
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
  List?: VirusInfo[];
  /** 总数量 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVirusMonitorSettingRequest {
}

declare interface DescribeVirusMonitorSettingResponse {
  /** 是否开启实时监控 */
  EnableScan?: boolean;
  /** 扫描全部路径 */
  ScanPathAll?: boolean | null;
  /** 当ScanPathAll为true 生效 0扫描以下路径 1、扫描除以下路径 */
  ScanPathType?: number | null;
  /** 自选排除或扫描的地址 */
  ScanPath?: string[] | null;
  /** 扫描路径模式：SCAN_PATH_ALL：全部路径SCAN_PATH_DEFAULT：默认路径SCAN_PATH_USER_DEFINE：用户自定义路径 */
  ScanPathMode?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVirusSampleDownloadUrlRequest {
  /** 木马id */
  ID: string;
}

declare interface DescribeVirusSampleDownloadUrlResponse {
  /** 样本下载地址 */
  FileUrl: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVirusScanSettingRequest {
}

declare interface DescribeVirusScanSettingResponse {
  /** 是否开启定期扫描 */
  EnableScan?: boolean;
  /** 检测周期每隔多少天 */
  Cycle?: number;
  /** 扫描开始时间 */
  BeginScanAt?: string;
  /** 扫描全部路径 */
  ScanPathAll?: boolean;
  /** 当ScanPathAll为true 生效 0扫描以下路径 1、扫描除以下路径 */
  ScanPathType?: number;
  /** 超时时长，单位小时 */
  Timeout?: number;
  /** 扫描范围0容器1主机节点 */
  ScanRangeType?: number;
  /** true 全选，false 自选 */
  ScanRangeAll?: boolean;
  /** 自选扫描范围的容器id或者主机id 根据ScanRangeType决定 */
  ScanIds?: string[];
  /** 自选排除或扫描的地址 */
  ScanPath?: string[];
  /** 一键检测的超时设置 */
  ClickTimeout?: number | null;
  /** 扫描路径模式：SCAN_PATH_ALL：全部路径SCAN_PATH_DEFAULT：默认路径SCAN_PATH_USER_DEFINE：用户自定义路径 */
  ScanPathMode?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVirusScanTimeoutSettingRequest {
  /** 设置类型0一键检测，1定时检测 */
  ScanType: number;
}

declare interface DescribeVirusScanTimeoutSettingResponse {
  /** 超时时长单位小时 */
  Timeout: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  List?: VirusTaskInfo[];
  /** 总数量(容器任务数量) */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVulDefenceEventDetailRequest {
  /** 事件ID */
  EventID: number;
}

declare interface DescribeVulDefenceEventDetailResponse {
  /** 漏洞防御事件详细 */
  EventDetail?: VulDefenceEventDetail;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  List?: VulDefenceEvent[];
  /** 总数量 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVulDefenceHostRequest {
  /** 过滤条件。Status- String - 是否必填：否 - 插件状态，正常：SUCCESS，异常：FAIL， NO_DEFENCE:未防御HostName- String - 是否必填：否 - 主机名称/超级节点名称HostIP- String - 是否必填：否 - 主机IPNodeType- String - 是否必填：否 - 节点类型HostName- String - 是否必填：否 - 超级节点名称NodeSubNetCIDR- String - 是否必填：否 - 超级节点CIDR */
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
  TotalCount?: number;
  /** 漏洞防御的主机列表 */
  List?: VulDefenceHost[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVulDefencePluginRequest {
  /** 主机HostID或超级节点UniqueId */
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
  TotalCount?: number;
  /** 漏洞防御插件列表 */
  List?: VulDefencePlugin[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVulDefenceSettingRequest {
}

declare interface DescribeVulDefenceSettingResponse {
  /** 是否开启:0: 关闭 1:开启 */
  IsEnabled?: number;
  /** 漏洞防御主机范围: 0:自选主机节点，1:全部 */
  Scope?: number;
  /** 漏洞防御主机数量 */
  HostCount?: number;
  /** 开启漏洞防御异常主机数量 */
  ExceptionHostCount?: number;
  /** 自选漏洞防御主机 */
  HostIDs?: string[] | null;
  /** 开通容器安全的主机总数 */
  HostTotalCount?: number | null;
  /** 支持防御的漏洞数 */
  SupportDefenseVulCount?: number | null;
  /** 普通节点个数 */
  HostNodeCount?: number;
  /** 超级节点范围 */
  SuperScope?: number;
  /** 超级节点个数 */
  SuperNodeCount?: number;
  /** 超级节点Id列表 */
  SuperNodeIds?: string[];
  /** 开通容器安全的超级结点总数 */
  NodeTotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVulDetailRequest {
  /** 漏洞PocID */
  PocID: string;
}

declare interface DescribeVulDetailResponse {
  /** 漏洞详情信息 */
  VulInfo: VulDetailInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVulRegistryImageListRequest {
  /** 漏洞ID */
  PocID: string;
  /** 需要返回的数量，默认为10，最大值为100 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤条件。OnlyAffectedNewestImage bool 是否影响最新镜像ImageDigest 镜像Digest，支持模糊查询ImageId 镜像ID，支持模糊查询Namespace 命名空间，支持模糊查询ImageTag 镜像版本，支持模糊查询InstanceName 实例名称，支持模糊查询ImageName 镜像名，支持模糊查询ImageRepoAddress 镜像地址，支持模糊查询 */
  Filters?: AssetFilters[];
  /** 排序方式 */
  Order?: string;
  /** 排序字段 */
  By?: string;
}

declare interface DescribeVulRegistryImageListResponse {
  /** 镜像总数 */
  TotalCount: number;
  /** 仓库镜像列表 */
  List: VulAffectedRegistryImageInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVulScanAuthorizedImageSummaryRequest {
}

declare interface DescribeVulScanAuthorizedImageSummaryResponse {
  /** 全部已授权的本地镜像数 */
  AllAuthorizedImageCount: number;
  /** 已授权未扫描的本地镜像数 */
  UnScanAuthorizedImageCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVulSummaryRequest {
  /** 过滤条件。OnlyAffectedNewestImage- string- 是否必填：否 - 仅展示影响最新版本镜像的漏洞true,falseOnlyAffectedContainer-string- 是否必填：否 - 仅展示影响容器的漏洞,true,falseCategoryType- string - 是否必填：否 - 漏洞分类: SYSTEM:系统漏洞 WEB:web应用漏洞 ALL:全部漏洞 */
  Filters?: RunTimeFilters[];
}

declare interface DescribeVulSummaryResponse {
  /** 漏洞总数量 */
  VulTotalCount?: number;
  /** 严重及高危漏洞数量 */
  SeriousVulCount?: number;
  /** 重点关注漏洞数量 */
  SuggestVulCount?: number;
  /** 有Poc或者Exp的漏洞数量 */
  PocExpLevelVulCount?: number;
  /** 有远程Exp的漏洞数量 */
  RemoteExpLevelVulCount?: number;
  /** 受严重或高危漏洞影响的最新版本镜像数 */
  SeriousVulNewestImageCount?: number;
  /** 系统漏洞重点关注数 */
  SystemVulnerabilityFocusCount?: number;
  /** web漏洞重点关注数 */
  WebVulnerabilityFocusCount?: number;
  /** 受影响本地镜像数 */
  SeriousVulnerabilityLocalImageCount?: number;
  /** 受影响仓库镜像数 */
  SeriousVulnerabilityRegistryImageCount?: number;
  /** 应急漏洞数量 */
  EmergencyVulnerabilityCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVulTopRankingRequest {
  /** 漏洞分类: SYSTEM:系统漏洞 WEB:web应用漏洞 EMERGENCY:应急漏洞 */
  CategoryType: string;
}

declare interface DescribeVulTopRankingResponse {
  /** 漏洞Top排名信息列表 */
  List: VulTopRankingInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeWarningRulesRequest {
}

declare interface DescribeWarningRulesResponse {
  /** 告警策略列表 */
  WarningRules: WarningRule[];
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface InitializeUserComplianceEnvironmentRequest {
}

declare interface InitializeUserComplianceEnvironmentResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAbnormalProcessRuleStatusRequest {
  /** 策略的ids */
  RuleIdSet: string[];
  /** 策略开关，true开启，false关闭 */
  IsEnable: boolean;
}

declare interface ModifyAbnormalProcessRuleStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAccessControlRuleStatusRequest {
  /** 策略的ids */
  RuleIdSet: string[];
  /** 策略开关，true:代表开启， false代表关闭 */
  IsEnable: boolean;
}

declare interface ModifyAccessControlRuleStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAssetImageRegistryScanStopOneKeyRequest {
  /** 是否扫描全部镜像 */
  All?: boolean;
  /** 扫描的镜像列表 */
  Images?: ImageInfo[];
  /** 扫描的镜像列表Id */
  Id?: number[];
  /** 停止的任务ID */
  TaskID?: number;
}

declare interface ModifyAssetImageRegistryScanStopOneKeyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 停止的任务ID */
  TaskID?: number;
}

declare interface ModifyAssetImageRegistryScanStopResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAssetRequest {
  /** 全部同步，俩参数必选一个 All优先 */
  All?: boolean;
  /** 要同步的主机列表uuid ，俩参数必选一个 All优先 */
  Hosts?: string[];
}

declare interface ModifyAssetResponse {
  /** 同步任务发送结果 */
  Status: string;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyContainerNetStatusRequest {
  /** 容器ID */
  ContainerID: string;
  /** 状态(隔离容器: EVENT_ISOLATE_CONTAINER恢复容器: EVENT_RESOTRE_CONTAINER) */
  Status: string;
}

declare interface ModifyContainerNetStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyEscapeRuleRequest {
  /** 需要修改的数组 */
  RuleSet: EscapeRuleEnabled[];
}

declare interface ModifyEscapeRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyEscapeWhiteListRequest {
  /** 加白名单事件类型 ESCAPE_CGROUPS：利用cgroup机制逃逸 ESCAPE_TAMPER_SENSITIVE_FILE：篡改敏感文件逃逸 ESCAPE_DOCKER_API：访问Docker API接口逃逸 ESCAPE_VUL_OCCURRED：逃逸漏洞利用 MOUNT_SENSITIVE_PTAH：敏感路径挂载 PRIVILEGE_CONTAINER_START：特权容器 PRIVILEGE：程序提权逃逸 */
  EventType: string[];
  /** 白名单记录ID */
  IDSet: number[];
}

declare interface ModifyEscapeWhiteListResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyK8sApiAbnormalEventStatusRequest {
  /** 事件ID集合 */
  EventIDSet: number[];
  /** 状态 */
  Status: string;
  /** 备注 */
  Remark?: string;
}

declare interface ModifyK8sApiAbnormalEventStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyK8sApiAbnormalRuleInfoRequest {
  /** 规则详情 */
  RuleInfo: K8sApiAbnormalRuleInfo;
}

declare interface ModifyK8sApiAbnormalRuleInfoResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyK8sApiAbnormalRuleStatusRequest {
  /** 规则ID */
  RuleID: string;
  /** 状态(true:开 false:关) */
  Status: boolean;
}

declare interface ModifyK8sApiAbnormalRuleStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifySecLogDeliveryClsSettingRequest {
  /** 日志信息 */
  List: SecLogDeliveryClsSettingInfo[];
}

declare interface ModifySecLogDeliveryClsSettingResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifySecLogJoinObjectsRequest {
  /** 日志类型bash日志: container_bash容器启动: container_launchk8sApi: k8s_api */
  LogType: string;
  /** 绑定主机quuid列表 */
  BindList?: string[];
  /** 待解绑主机quuid列表 */
  UnBindList?: string[];
  /** 节点类型:NORMAL: 普通节点(默认值)SUPER: 超级节点 */
  NodeType?: string;
}

declare interface ModifySecLogJoinObjectsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifySecLogJoinStateRequest {
  /** 日志类型bash日志: container_bash容器启动: container_launchk8sApi: k8s_api */
  LogType: string;
  /** 状态(true:开 false:关) */
  State: boolean;
}

declare interface ModifySecLogJoinStateResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifySecLogKafkaUINRequest {
  /** 目标UIN */
  DstUIN?: string;
}

declare interface ModifySecLogKafkaUINResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyVirusAutoIsolateExampleSwitchRequest {
  /** 文件Md5值 */
  MD5: string;
  /** 开关(开:true 关: false) */
  Status: boolean;
}

declare interface ModifyVirusAutoIsolateExampleSwitchResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyVirusAutoIsolateSettingRequest {
  /** 自动隔离开关(true:开 false:关) */
  AutoIsolateSwitch: boolean;
  /** 是否中断隔离文件关联的进程(true:是 false:否) */
  IsKillProgress: boolean;
}

declare interface ModifyVirusAutoIsolateSettingResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 扫描路径模式：SCAN_PATH_ALL：全部路径SCAN_PATH_DEFAULT：默认路径SCAN_PATH_USER_DEFINE：用户自定义路径 */
  ScanPathMode?: string;
}

declare interface ModifyVirusMonitorSettingResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 扫描路径模式：SCAN_PATH_ALL：全部路径SCAN_PATH_DEFAULT：默认路径SCAN_PATH_USER_DEFINE：用户自定义路径 */
  ScanPathMode?: string;
}

declare interface ModifyVirusScanSettingResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyVirusScanTimeoutSettingRequest {
  /** 超时时长单位小时(5~24h) */
  Timeout: number;
  /** 设置类型0一键检测，1定时检测 */
  ScanType: number;
}

declare interface ModifyVirusScanTimeoutSettingResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyVulDefenceSettingRequest {
  /** 是否开启:0: 关闭 1:开启 */
  IsEnabled: number;
  /** 漏洞防御主机范围:0：自选 1: 全部主机 */
  Scope?: number;
  /** 自选漏洞防御主机 */
  HostIDs?: string[];
  /** 漏洞防御超级节点范围:0：自选 1: 全部 */
  SuperScope?: number;
  /** 超级节点Id列表 */
  NodeIds?: string[];
}

declare interface ModifyVulDefenceSettingResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface OpenTcssTrialRequest {
}

declare interface OpenTcssTrialResponse {
  /** 试用开通结束时间 */
  EndTime: string;
  /** 试用开通开始时间 */
  StartTime: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RemoveAssetImageRegistryRegistryDetailRequest {
  /** 仓库唯一id */
  RegistryId: number;
}

declare interface RemoveAssetImageRegistryRegistryDetailResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RenewImageAuthorizeStateRequest {
  /** 是否全部未授权镜像 */
  AllImages: boolean;
  /** 镜像ids */
  ImageIds?: string[];
  /** 是否授权后自动扫描 */
  NeedScan?: boolean;
  /** 扫描类型 */
  ScanType?: string[];
}

declare interface RenewImageAuthorizeStateResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ResetSecLogTopicConfigRequest {
  /** 配置类型(ckafka/cls) */
  ConfigType: string;
  /** 日志类型 */
  LogType: string;
}

declare interface ResetSecLogTopicConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ScanComplianceAssetsRequest {
  /** 要重新扫描的客户资产项ID的列表。 */
  CustomerAssetIdSet: number[];
}

declare interface ScanComplianceAssetsResponse {
  /** 返回重新检测任务的ID。 */
  TaskId: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ScanCompliancePolicyItemsRequest {
  /** 要重新扫描的客户检测项的列表。 */
  CustomerPolicyItemIdSet: number[];
}

declare interface ScanCompliancePolicyItemsResponse {
  /** 返回重新检测任务的ID。 */
  TaskId: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ScanComplianceScanFailedAssetsRequest {
  /** 要重新扫描的客户资产项ID的列表。 */
  CustomerAssetIdSet: number[];
}

declare interface ScanComplianceScanFailedAssetsResponse {
  /** 返回重新检测任务的ID。 */
  TaskId: number;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StopVirusScanTaskRequest {
  /** 任务ID */
  TaskId: string;
  /** 需要停止的容器id 为空默认停止整个任务 */
  ContainerIds?: string[];
}

declare interface StopVirusScanTaskResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SwitchImageAutoAuthorizedRuleRequest {
  /** 规则是否生效，0:不生效，1:已生效 */
  IsEnabled: number;
  /** 规则id */
  RuleId: number;
}

declare interface SwitchImageAutoAuthorizedRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SyncAssetImageRegistryAssetRequest {
  /** 是否同步所有镜像仓库 */
  All?: boolean;
  /** 需要同步的部分镜像仓库 */
  RegistryIds?: number[];
}

declare interface SyncAssetImageRegistryAssetResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 联通性检测的配置 */
  ConnDetectConfig?: ConnDetectConfig[];
}

declare interface UpdateAssetImageRegistryRegistryDetailResponse {
  /** 连接错误信息 */
  HealthCheckErr?: string | null;
  /** 名称错误信息 */
  NameRepeatErr?: string | null;
  /** 仓库唯一id */
  RegistryId?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 是否扫描最新版本 */
  Latest?: boolean;
  /** 是否存在运行中的容器 */
  ContainerRunning?: boolean;
  /** 扫描结束时间 */
  ScanEndTime?: string;
  /** 扫描范围 0全部镜像，1自选镜像，2推荐扫描镜像 */
  ScanScope?: number;
  /** 仓库类型 tcr,ccr,harbor */
  RegistryType?: string[];
  /** 命名空间 */
  Namespace?: string[];
  /** 排除的镜像资产id */
  ExcludeImageAssetIds?: number[];
}

declare interface UpdateImageRegistryTimingScanTaskResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Tcss 容器安全服务} */
declare interface Tcss {
  (): Versions;
  /** 容器网络创建网络策略添加并发布任务 {@link AddAndPublishNetworkFirewallPolicyDetailRequest} {@link AddAndPublishNetworkFirewallPolicyDetailResponse} */
  AddAndPublishNetworkFirewallPolicyDetail(data: AddAndPublishNetworkFirewallPolicyDetailRequest, config?: AxiosRequestConfig): AxiosPromise<AddAndPublishNetworkFirewallPolicyDetailResponse>;
  /** 容器网络创建Yaml网络策略并发布任务 {@link AddAndPublishNetworkFirewallPolicyYamlDetailRequest} {@link AddAndPublishNetworkFirewallPolicyYamlDetailResponse} */
  AddAndPublishNetworkFirewallPolicyYamlDetail(data: AddAndPublishNetworkFirewallPolicyYamlDetailRequest, config?: AxiosRequestConfig): AxiosPromise<AddAndPublishNetworkFirewallPolicyYamlDetailResponse>;
  /** 新增单个镜像仓库详细信息 {@link AddAssetImageRegistryRegistryDetailRequest} {@link AddAssetImageRegistryRegistryDetailResponse} */
  AddAssetImageRegistryRegistryDetail(data: AddAssetImageRegistryRegistryDetailRequest, config?: AxiosRequestConfig): AxiosPromise<AddAssetImageRegistryRegistryDetailResponse>;
  /** 安全合规忽略资产+检测项列表 {@link AddComplianceAssetPolicySetToWhitelistRequest} {@link AddComplianceAssetPolicySetToWhitelistResponse} */
  AddComplianceAssetPolicySetToWhitelist(data: AddComplianceAssetPolicySetToWhitelistRequest, config?: AxiosRequestConfig): AxiosPromise<AddComplianceAssetPolicySetToWhitelistResponse>;
  /** 安全合规忽略检测项+资产列表 {@link AddCompliancePolicyAssetSetToWhitelistRequest} {@link AddCompliancePolicyAssetSetToWhitelistResponse} */
  AddCompliancePolicyAssetSetToWhitelist(data: AddCompliancePolicyAssetSetToWhitelistRequest, config?: AxiosRequestConfig): AxiosPromise<AddCompliancePolicyAssetSetToWhitelistResponse>;
  /** 安全合规忽略检测项列表 {@link AddCompliancePolicyItemToWhitelistRequest} {@link AddCompliancePolicyItemToWhitelistResponse} */
  AddCompliancePolicyItemToWhitelist(data: AddCompliancePolicyItemToWhitelistRequest, config?: AxiosRequestConfig): AxiosPromise<AddCompliancePolicyItemToWhitelistResponse>;
  /** 添加编辑异常进程策略 {@link AddEditAbnormalProcessRuleRequest} {@link AddEditAbnormalProcessRuleResponse} */
  AddEditAbnormalProcessRule(data: AddEditAbnormalProcessRuleRequest, config?: AxiosRequestConfig): AxiosPromise<AddEditAbnormalProcessRuleResponse>;
  /** 添加编辑运行访问控制策略 {@link AddEditAccessControlRuleRequest} {@link AddEditAccessControlRuleResponse} */
  AddEditAccessControlRule(data: AddEditAccessControlRuleRequest, config?: AxiosRequestConfig): AxiosPromise<AddEditAccessControlRuleResponse>;
  /** 新增或编辑本地镜像自动授权规则 {@link AddEditImageAutoAuthorizedRuleRequest} {@link AddEditImageAutoAuthorizedRuleResponse} */
  AddEditImageAutoAuthorizedRule(data: AddEditImageAutoAuthorizedRuleRequest, config?: AxiosRequestConfig): AxiosPromise<AddEditImageAutoAuthorizedRuleResponse>;
  /** 添加编辑反弹shell白名单 {@link AddEditReverseShellWhiteListRequest} {@link AddEditReverseShellWhiteListResponse} */
  AddEditReverseShellWhiteList(data: AddEditReverseShellWhiteListRequest, config?: AxiosRequestConfig): AxiosPromise<AddEditReverseShellWhiteListResponse>;
  /** 添加编辑高危系统调用白名单 {@link AddEditRiskSyscallWhiteListRequest} {@link AddEditRiskSyscallWhiteListResponse} */
  AddEditRiskSyscallWhiteList(data?: AddEditRiskSyscallWhiteListRequest, config?: AxiosRequestConfig): AxiosPromise<AddEditRiskSyscallWhiteListResponse>;
  /** 添加编辑告警策略 {@link AddEditWarningRulesRequest} {@link AddEditWarningRulesResponse} */
  AddEditWarningRules(data: AddEditWarningRulesRequest, config?: AxiosRequestConfig): AxiosPromise<AddEditWarningRulesResponse>;
  /** 新增逃逸白名单 {@link AddEscapeWhiteListRequest} {@link AddEscapeWhiteListResponse} */
  AddEscapeWhiteList(data: AddEscapeWhiteListRequest, config?: AxiosRequestConfig): AxiosPromise<AddEscapeWhiteListResponse>;
  /** 新增漏洞扫描忽略漏洞 {@link AddIgnoreVulRequest} {@link AddIgnoreVulResponse} */
  AddIgnoreVul(data: AddIgnoreVulRequest, config?: AxiosRequestConfig): AxiosPromise<AddIgnoreVulResponse>;
  /** 容器网络创建网络策略添加任务 {@link AddNetworkFirewallPolicyDetailRequest} {@link AddNetworkFirewallPolicyDetailResponse} */
  AddNetworkFirewallPolicyDetail(data: AddNetworkFirewallPolicyDetailRequest, config?: AxiosRequestConfig): AxiosPromise<AddNetworkFirewallPolicyDetailResponse>;
  /** 容器网络创建Yaml网络策略添加任务 {@link AddNetworkFirewallPolicyYamlDetailRequest} {@link AddNetworkFirewallPolicyYamlDetailResponse} */
  AddNetworkFirewallPolicyYamlDetail(data: AddNetworkFirewallPolicyYamlDetailRequest, config?: AxiosRequestConfig): AxiosPromise<AddNetworkFirewallPolicyYamlDetailResponse>;
  /** 容器网络创建检查Yaml网络策略任务 {@link CheckNetworkFirewallPolicyYamlRequest} {@link CheckNetworkFirewallPolicyYamlResponse} */
  CheckNetworkFirewallPolicyYaml(data: CheckNetworkFirewallPolicyYamlRequest, config?: AxiosRequestConfig): AxiosPromise<CheckNetworkFirewallPolicyYamlResponse>;
  /** 检查单个镜像仓库名是否重复 {@link CheckRepeatAssetImageRegistryRequest} {@link CheckRepeatAssetImageRegistryResponse} */
  CheckRepeatAssetImageRegistry(data: CheckRepeatAssetImageRegistryRequest, config?: AxiosRequestConfig): AxiosPromise<CheckRepeatAssetImageRegistryResponse>;
  /** 容器网络创建网络策略确认任务 {@link ConfirmNetworkFirewallPolicyRequest} {@link ConfirmNetworkFirewallPolicyResponse} */
  ConfirmNetworkFirewallPolicy(data: ConfirmNetworkFirewallPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<ConfirmNetworkFirewallPolicyResponse>;
  /** 创建异常进程规则导出任务 {@link CreateAbnormalProcessRulesExportJobRequest} {@link CreateAbnormalProcessRulesExportJobResponse} */
  CreateAbnormalProcessRulesExportJob(data?: CreateAbnormalProcessRulesExportJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAbnormalProcessRulesExportJobResponse>;
  /** 创建文件篡改规则导出任务 {@link CreateAccessControlsRuleExportJobRequest} {@link CreateAccessControlsRuleExportJobResponse} */
  CreateAccessControlsRuleExportJob(data?: CreateAccessControlsRuleExportJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAccessControlsRuleExportJobResponse>;
  /** 镜像仓库创建镜像扫描任务 {@link CreateAssetImageRegistryScanTaskRequest} {@link CreateAssetImageRegistryScanTaskResponse} */
  CreateAssetImageRegistryScanTask(data?: CreateAssetImageRegistryScanTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAssetImageRegistryScanTaskResponse>;
  /** 镜像仓库创建镜像一键扫描任务 {@link CreateAssetImageRegistryScanTaskOneKeyRequest} {@link CreateAssetImageRegistryScanTaskOneKeyResponse} */
  CreateAssetImageRegistryScanTaskOneKey(data?: CreateAssetImageRegistryScanTaskOneKeyRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAssetImageRegistryScanTaskOneKeyResponse>;
  /** 添加容器安全镜像扫描设置 {@link CreateAssetImageScanSettingRequest} {@link CreateAssetImageScanSettingResponse} */
  CreateAssetImageScanSetting(data: CreateAssetImageScanSettingRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAssetImageScanSettingResponse>;
  /** 创建镜像扫描任务 {@link CreateAssetImageScanTaskRequest} {@link CreateAssetImageScanTaskResponse} */
  CreateAssetImageScanTask(data?: CreateAssetImageScanTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAssetImageScanTaskResponse>;
  /** 创建本地镜像木马列表导出任务 {@link CreateAssetImageVirusExportJobRequest} {@link CreateAssetImageVirusExportJobResponse} */
  CreateAssetImageVirusExportJob(data: CreateAssetImageVirusExportJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAssetImageVirusExportJobResponse>;
  /** 安装检查组件 {@link CreateCheckComponentRequest} {@link CreateCheckComponentResponse} */
  CreateCheckComponent(data: CreateCheckComponentRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCheckComponentResponse>;
  /** 创建集群检查任务 {@link CreateClusterCheckTaskRequest} {@link CreateClusterCheckTaskResponse} */
  CreateClusterCheckTask(data: CreateClusterCheckTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateClusterCheckTaskResponse>;
  /** 安全合规创建合规检查任务 {@link CreateComplianceTaskRequest} {@link CreateComplianceTaskResponse} */
  CreateComplianceTask(data?: CreateComplianceTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateComplianceTaskResponse>;
  /** 查询本地镜像组件列表导出 {@link CreateComponentExportJobRequest} {@link CreateComponentExportJobResponse} */
  CreateComponentExportJob(data: CreateComponentExportJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreateComponentExportJobResponse>;
  /** 创建支持防御的漏洞导出任务 {@link CreateDefenceVulExportJobRequest} {@link CreateDefenceVulExportJobResponse} */
  CreateDefenceVulExportJob(data?: CreateDefenceVulExportJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDefenceVulExportJobResponse>;
  /** 创建应急漏洞导出任务 {@link CreateEmergencyVulExportJobRequest} {@link CreateEmergencyVulExportJobResponse} */
  CreateEmergencyVulExportJob(data?: CreateEmergencyVulExportJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreateEmergencyVulExportJobResponse>;
  /** 创建逃逸事件导出异步任务 {@link CreateEscapeEventsExportJobRequest} {@link CreateEscapeEventsExportJobResponse} */
  CreateEscapeEventsExportJob(data?: CreateEscapeEventsExportJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreateEscapeEventsExportJobResponse>;
  /** 创建逃逸白名单导出任务 {@link CreateEscapeWhiteListExportJobRequest} {@link CreateEscapeWhiteListExportJobResponse} */
  CreateEscapeWhiteListExportJob(data?: CreateEscapeWhiteListExportJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreateEscapeWhiteListExportJobResponse>;
  /** 创建一个导出安全合规信息的任务 {@link CreateExportComplianceStatusListJobRequest} {@link CreateExportComplianceStatusListJobResponse} */
  CreateExportComplianceStatusListJob(data: CreateExportComplianceStatusListJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreateExportComplianceStatusListJobResponse>;
  /** 创建主机列表导出任务 {@link CreateHostExportJobRequest} {@link CreateHostExportJobResponse} */
  CreateHostExportJob(data?: CreateHostExportJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreateHostExportJobResponse>;
  /** 创建镜像导出任务 {@link CreateImageExportJobRequest} {@link CreateImageExportJobResponse} */
  CreateImageExportJob(data?: CreateImageExportJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreateImageExportJobResponse>;
  /** 创建k8s api异常事件导出任务 {@link CreateK8sApiAbnormalEventExportJobRequest} {@link CreateK8sApiAbnormalEventExportJobResponse} */
  CreateK8sApiAbnormalEventExportJob(data?: CreateK8sApiAbnormalEventExportJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreateK8sApiAbnormalEventExportJobResponse>;
  /** 创建k8sApi异常规则导出任务 {@link CreateK8sApiAbnormalRuleExportJobRequest} {@link CreateK8sApiAbnormalRuleExportJobResponse} */
  CreateK8sApiAbnormalRuleExportJob(data?: CreateK8sApiAbnormalRuleExportJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreateK8sApiAbnormalRuleExportJobResponse>;
  /** 创建k8sapi异常事件规则 {@link CreateK8sApiAbnormalRuleInfoRequest} {@link CreateK8sApiAbnormalRuleInfoResponse} */
  CreateK8sApiAbnormalRuleInfo(data: CreateK8sApiAbnormalRuleInfoRequest, config?: AxiosRequestConfig): AxiosPromise<CreateK8sApiAbnormalRuleInfoResponse>;
  /** 容器网络集群下发刷新任务 {@link CreateNetworkFirewallClusterRefreshRequest} {@link CreateNetworkFirewallClusterRefreshResponse} */
  CreateNetworkFirewallClusterRefresh(data?: CreateNetworkFirewallClusterRefreshRequest, config?: AxiosRequestConfig): AxiosPromise<CreateNetworkFirewallClusterRefreshResponse>;
  /** 容器网络集群网络策略创建自动发现任务 {@link CreateNetworkFirewallPolicyDiscoverRequest} {@link CreateNetworkFirewallPolicyDiscoverResponse} */
  CreateNetworkFirewallPolicyDiscover(data: CreateNetworkFirewallPolicyDiscoverRequest, config?: AxiosRequestConfig): AxiosPromise<CreateNetworkFirewallPolicyDiscoverResponse>;
  /** 容器网络创建网络策略发布任务 {@link CreateNetworkFirewallPublishRequest} {@link CreateNetworkFirewallPublishResponse} */
  CreateNetworkFirewallPublish(data: CreateNetworkFirewallPublishRequest, config?: AxiosRequestConfig): AxiosPromise<CreateNetworkFirewallPublishResponse>;
  /** 容器网络创建网络策略撤销任务 {@link CreateNetworkFirewallUndoPublishRequest} {@link CreateNetworkFirewallUndoPublishResponse} */
  CreateNetworkFirewallUndoPublish(data: CreateNetworkFirewallUndoPublishRequest, config?: AxiosRequestConfig): AxiosPromise<CreateNetworkFirewallUndoPublishResponse>;
  /** 创建或者编辑弹性计费上限 {@link CreateOrModifyPostPayCoresRequest} {@link CreateOrModifyPostPayCoresResponse} */
  CreateOrModifyPostPayCores(data: CreateOrModifyPostPayCoresRequest, config?: AxiosRequestConfig): AxiosPromise<CreateOrModifyPostPayCoresResponse>;
  /** 创建异常进程事件导出异步任务 {@link CreateProcessEventsExportJobRequest} {@link CreateProcessEventsExportJobResponse} */
  CreateProcessEventsExportJob(data?: CreateProcessEventsExportJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreateProcessEventsExportJobResponse>;
  /** 下发刷新任务 {@link CreateRefreshTaskRequest} {@link CreateRefreshTaskResponse} */
  CreateRefreshTask(data?: CreateRefreshTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateRefreshTaskResponse>;
  /** 创建恶意请求事件导出任务 {@link CreateRiskDnsEventExportJobRequest} {@link CreateRiskDnsEventExportJobResponse} */
  CreateRiskDnsEventExportJob(data?: CreateRiskDnsEventExportJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreateRiskDnsEventExportJobResponse>;
  /** 添加检索模板 {@link CreateSearchTemplateRequest} {@link CreateSearchTemplateResponse} */
  CreateSearchTemplate(data: CreateSearchTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSearchTemplateResponse>;
  /** 创建系统漏洞导出任务 {@link CreateSystemVulExportJobRequest} {@link CreateSystemVulExportJobResponse} */
  CreateSystemVulExportJob(data?: CreateSystemVulExportJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSystemVulExportJobResponse>;
  /** 运行时文件查杀重新检测 {@link CreateVirusScanAgainRequest} {@link CreateVirusScanAgainResponse} */
  CreateVirusScanAgain(data: CreateVirusScanAgainRequest, config?: AxiosRequestConfig): AxiosPromise<CreateVirusScanAgainResponse>;
  /** 运行时文件查杀一键扫描 {@link CreateVirusScanTaskRequest} {@link CreateVirusScanTaskResponse} */
  CreateVirusScanTask(data: CreateVirusScanTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateVirusScanTaskResponse>;
  /** 创建受漏洞影响的容器导出任务 {@link CreateVulContainerExportJobRequest} {@link CreateVulContainerExportJobResponse} */
  CreateVulContainerExportJob(data: CreateVulContainerExportJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreateVulContainerExportJobResponse>;
  /** 创建漏洞防御导出任务 {@link CreateVulDefenceEventExportJobRequest} {@link CreateVulDefenceEventExportJobResponse} */
  CreateVulDefenceEventExportJob(data?: CreateVulDefenceEventExportJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreateVulDefenceEventExportJobResponse>;
  /** 创建漏洞防御主机导出任务 {@link CreateVulDefenceHostExportJobRequest} {@link CreateVulDefenceHostExportJobResponse} */
  CreateVulDefenceHostExportJob(data?: CreateVulDefenceHostExportJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreateVulDefenceHostExportJobResponse>;
  /** 查询本地镜像漏洞列表导出 {@link CreateVulExportJobRequest} {@link CreateVulExportJobResponse} */
  CreateVulExportJob(data: CreateVulExportJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreateVulExportJobResponse>;
  /** 创建导出受漏洞影响的镜像任务 {@link CreateVulImageExportJobRequest} {@link CreateVulImageExportJobResponse} */
  CreateVulImageExportJob(data: CreateVulImageExportJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreateVulImageExportJobResponse>;
  /** 创建漏洞扫描任务 {@link CreateVulScanTaskRequest} {@link CreateVulScanTaskResponse} */
  CreateVulScanTask(data?: CreateVulScanTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateVulScanTaskResponse>;
  /** 创建web漏洞导出任务 {@link CreateWebVulExportJobRequest} {@link CreateWebVulExportJobResponse} */
  CreateWebVulExportJob(data?: CreateWebVulExportJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreateWebVulExportJobResponse>;
  /** 删除运行时异常进程策略 {@link DeleteAbnormalProcessRulesRequest} {@link DeleteAbnormalProcessRulesResponse} */
  DeleteAbnormalProcessRules(data: DeleteAbnormalProcessRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAbnormalProcessRulesResponse>;
  /** 删除运行时访问控制策略 {@link DeleteAccessControlRulesRequest} {@link DeleteAccessControlRulesResponse} */
  DeleteAccessControlRules(data: DeleteAccessControlRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAccessControlRulesResponse>;
  /** 删除安全合规忽略项， 资产+检测项列表 {@link DeleteComplianceAssetPolicySetFromWhitelistRequest} {@link DeleteComplianceAssetPolicySetFromWhitelistResponse} */
  DeleteComplianceAssetPolicySetFromWhitelist(data: DeleteComplianceAssetPolicySetFromWhitelistRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteComplianceAssetPolicySetFromWhitelistResponse>;
  /** 删除检测项+资产列表的白名单策略 {@link DeleteCompliancePolicyAssetSetFromWhitelistRequest} {@link DeleteCompliancePolicyAssetSetFromWhitelistResponse} */
  DeleteCompliancePolicyAssetSetFromWhitelist(data: DeleteCompliancePolicyAssetSetFromWhitelistRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCompliancePolicyAssetSetFromWhitelistResponse>;
  /** 安全合规取消忽略检测项列表 {@link DeleteCompliancePolicyItemFromWhitelistRequest} {@link DeleteCompliancePolicyItemFromWhitelistResponse} */
  DeleteCompliancePolicyItemFromWhitelist(data: DeleteCompliancePolicyItemFromWhitelistRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCompliancePolicyItemFromWhitelistResponse>;
  /** 删除逃逸白名单 {@link DeleteEscapeWhiteListRequest} {@link DeleteEscapeWhiteListResponse} */
  DeleteEscapeWhiteList(data: DeleteEscapeWhiteListRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteEscapeWhiteListResponse>;
  /** 取消漏洞扫描忽略漏洞 {@link DeleteIgnoreVulRequest} {@link DeleteIgnoreVulResponse} */
  DeleteIgnoreVul(data: DeleteIgnoreVulRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteIgnoreVulResponse>;
  /** 删除k8sapi异常事件规则 {@link DeleteK8sApiAbnormalRuleRequest} {@link DeleteK8sApiAbnormalRuleResponse} */
  DeleteK8sApiAbnormalRule(data: DeleteK8sApiAbnormalRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteK8sApiAbnormalRuleResponse>;
  /** 卸载Agent客户端 {@link DeleteMachineRequest} {@link DeleteMachineResponse} */
  DeleteMachine(data: DeleteMachineRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteMachineResponse>;
  /** 容器网络创建网络策略删除任务 {@link DeleteNetworkFirewallPolicyDetailRequest} {@link DeleteNetworkFirewallPolicyDetailResponse} */
  DeleteNetworkFirewallPolicyDetail(data: DeleteNetworkFirewallPolicyDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteNetworkFirewallPolicyDetailResponse>;
  /** 删除运行时反弹shell事件 {@link DeleteReverseShellEventsRequest} {@link DeleteReverseShellEventsResponse} */
  DeleteReverseShellEvents(data: DeleteReverseShellEventsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteReverseShellEventsResponse>;
  /** 删除运行时反弹shell白名单 {@link DeleteReverseShellWhiteListsRequest} {@link DeleteReverseShellWhiteListsResponse} */
  DeleteReverseShellWhiteLists(data: DeleteReverseShellWhiteListsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteReverseShellWhiteListsResponse>;
  /** 删除运行时高危系统调用事件 {@link DeleteRiskSyscallEventsRequest} {@link DeleteRiskSyscallEventsResponse} */
  DeleteRiskSyscallEvents(data: DeleteRiskSyscallEventsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRiskSyscallEventsResponse>;
  /** 删除运行时高危系统调用白名单 {@link DeleteRiskSyscallWhiteListsRequest} {@link DeleteRiskSyscallWhiteListsResponse} */
  DeleteRiskSyscallWhiteLists(data: DeleteRiskSyscallWhiteListsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRiskSyscallWhiteListsResponse>;
  /** 删除检索模板 {@link DeleteSearchTemplateRequest} {@link DeleteSearchTemplateResponse} */
  DeleteSearchTemplate(data: DeleteSearchTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteSearchTemplateResponse>;
  /** 获取用户当前灰度配置 {@link DescribeABTestConfigRequest} {@link DescribeABTestConfigResponse} */
  DescribeABTestConfig(data?: DescribeABTestConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeABTestConfigResponse>;
  /** 运行时异常进程事件详细信息 {@link DescribeAbnormalProcessDetailRequest} {@link DescribeAbnormalProcessDetailResponse} */
  DescribeAbnormalProcessDetail(data: DescribeAbnormalProcessDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAbnormalProcessDetailResponse>;
  /** 查询待处理异常进程事件趋势 {@link DescribeAbnormalProcessEventTendencyRequest} {@link DescribeAbnormalProcessEventTendencyResponse} */
  DescribeAbnormalProcessEventTendency(data: DescribeAbnormalProcessEventTendencyRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAbnormalProcessEventTendencyResponse>;
  /** 运行时异常进程列表 {@link DescribeAbnormalProcessEventsRequest} {@link DescribeAbnormalProcessEventsResponse} */
  DescribeAbnormalProcessEvents(data?: DescribeAbnormalProcessEventsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAbnormalProcessEventsResponse>;
  /** 运行时异常进程列表导出 {@link DescribeAbnormalProcessEventsExportRequest} {@link DescribeAbnormalProcessEventsExportResponse} */
  DescribeAbnormalProcessEventsExport(data: DescribeAbnormalProcessEventsExportRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAbnormalProcessEventsExportResponse>;
  /** 统计异常进程各威胁等级待处理事件数 {@link DescribeAbnormalProcessLevelSummaryRequest} {@link DescribeAbnormalProcessLevelSummaryResponse} */
  DescribeAbnormalProcessLevelSummary(data?: DescribeAbnormalProcessLevelSummaryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAbnormalProcessLevelSummaryResponse>;
  /** 查询运行时异常进程策略详细信息 {@link DescribeAbnormalProcessRuleDetailRequest} {@link DescribeAbnormalProcessRuleDetailResponse} */
  DescribeAbnormalProcessRuleDetail(data?: DescribeAbnormalProcessRuleDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAbnormalProcessRuleDetailResponse>;
  /** 运行时异常进程策略列表 {@link DescribeAbnormalProcessRulesRequest} {@link DescribeAbnormalProcessRulesResponse} */
  DescribeAbnormalProcessRules(data?: DescribeAbnormalProcessRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAbnormalProcessRulesResponse>;
  /** 运行时异常进程策略列表导出 {@link DescribeAbnormalProcessRulesExportRequest} {@link DescribeAbnormalProcessRulesExportResponse} */
  DescribeAbnormalProcessRulesExport(data: DescribeAbnormalProcessRulesExportRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAbnormalProcessRulesExportResponse>;
  /** 运行时访问控制事件详细信息 {@link DescribeAccessControlDetailRequest} {@link DescribeAccessControlDetailResponse} */
  DescribeAccessControlDetail(data: DescribeAccessControlDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAccessControlDetailResponse>;
  /** 运行时访问控制事件列表 {@link DescribeAccessControlEventsRequest} {@link DescribeAccessControlEventsResponse} */
  DescribeAccessControlEvents(data?: DescribeAccessControlEventsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAccessControlEventsResponse>;
  /** 运行时访问控制事件列表导出 {@link DescribeAccessControlEventsExportRequest} {@link DescribeAccessControlEventsExportResponse} */
  DescribeAccessControlEventsExport(data?: DescribeAccessControlEventsExportRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAccessControlEventsExportResponse>;
  /** 查询运行时访问控制策略详细信息 {@link DescribeAccessControlRuleDetailRequest} {@link DescribeAccessControlRuleDetailResponse} */
  DescribeAccessControlRuleDetail(data?: DescribeAccessControlRuleDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAccessControlRuleDetailResponse>;
  /** 运行时访问控制策略列表 {@link DescribeAccessControlRulesRequest} {@link DescribeAccessControlRulesResponse} */
  DescribeAccessControlRules(data?: DescribeAccessControlRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAccessControlRulesResponse>;
  /** 运行时访问控制策略列表导出 {@link DescribeAccessControlRulesExportRequest} {@link DescribeAccessControlRulesExportResponse} */
  DescribeAccessControlRulesExport(data: DescribeAccessControlRulesExportRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAccessControlRulesExportResponse>;
  /** 获取受影响的集群数量 {@link DescribeAffectedClusterCountRequest} {@link DescribeAffectedClusterCountResponse} */
  DescribeAffectedClusterCount(data?: DescribeAffectedClusterCountRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAffectedClusterCountResponse>;
  /** 查询节点类型的影响范围 {@link DescribeAffectedNodeListRequest} {@link DescribeAffectedNodeListResponse} */
  DescribeAffectedNodeList(data: DescribeAffectedNodeListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAffectedNodeListResponse>;
  /** 查询workload类型的影响范围 {@link DescribeAffectedWorkloadListRequest} {@link DescribeAffectedWorkloadListResponse} */
  DescribeAffectedWorkloadList(data: DescribeAffectedWorkloadListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAffectedWorkloadListResponse>;
  /** 查询平行容器安装命令 {@link DescribeAgentDaemonSetCmdRequest} {@link DescribeAgentDaemonSetCmdResponse} */
  DescribeAgentDaemonSetCmd(data: DescribeAgentDaemonSetCmdRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAgentDaemonSetCmdResponse>;
  /** 查询agent安装命令 {@link DescribeAgentInstallCommandRequest} {@link DescribeAgentInstallCommandResponse} */
  DescribeAgentInstallCommand(data: DescribeAgentInstallCommandRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAgentInstallCommandResponse>;
  /** 查询app服务列表 {@link DescribeAssetAppServiceListRequest} {@link DescribeAssetAppServiceListResponse} */
  DescribeAssetAppServiceList(data?: DescribeAssetAppServiceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetAppServiceListResponse>;
  /** 查询集群列表 {@link DescribeAssetClusterListRequest} {@link DescribeAssetClusterListResponse} */
  DescribeAssetClusterList(data?: DescribeAssetClusterListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetClusterListResponse>;
  /** 查询容器组件列表 {@link DescribeAssetComponentListRequest} {@link DescribeAssetComponentListResponse} */
  DescribeAssetComponentList(data: DescribeAssetComponentListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetComponentListResponse>;
  /** 查询容器信息 {@link DescribeAssetContainerDetailRequest} {@link DescribeAssetContainerDetailResponse} */
  DescribeAssetContainerDetail(data: DescribeAssetContainerDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetContainerDetailResponse>;
  /** 查询容器列表 {@link DescribeAssetContainerListRequest} {@link DescribeAssetContainerListResponse} */
  DescribeAssetContainerList(data?: DescribeAssetContainerListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetContainerListResponse>;
  /** 查询db服务列表 {@link DescribeAssetDBServiceListRequest} {@link DescribeAssetDBServiceListResponse} */
  DescribeAssetDBServiceList(data?: DescribeAssetDBServiceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetDBServiceListResponse>;
  /** 查询主机信息 {@link DescribeAssetHostDetailRequest} {@link DescribeAssetHostDetailResponse} */
  DescribeAssetHostDetail(data: DescribeAssetHostDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetHostDetailResponse>;
  /** 查询主机列表 {@link DescribeAssetHostListRequest} {@link DescribeAssetHostListResponse} */
  DescribeAssetHostList(data?: DescribeAssetHostListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetHostListResponse>;
  /** 镜像绑定规则列表 {@link DescribeAssetImageBindRuleInfoRequest} {@link DescribeAssetImageBindRuleInfoResponse} */
  DescribeAssetImageBindRuleInfo(data?: DescribeAssetImageBindRuleInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetImageBindRuleInfoResponse>;
  /** 查询镜像信息 {@link DescribeAssetImageDetailRequest} {@link DescribeAssetImageDetailResponse} */
  DescribeAssetImageDetail(data: DescribeAssetImageDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetImageDetailResponse>;
  /** 查询镜像关联主机 {@link DescribeAssetImageHostListRequest} {@link DescribeAssetImageHostListResponse} */
  DescribeAssetImageHostList(data?: DescribeAssetImageHostListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetImageHostListResponse>;
  /** 查询镜像列表 {@link DescribeAssetImageListRequest} {@link DescribeAssetImageListResponse} */
  DescribeAssetImageList(data?: DescribeAssetImageListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetImageListResponse>;
  /** 查询镜像列表导出 {@link DescribeAssetImageListExportRequest} {@link DescribeAssetImageListExportResponse} */
  DescribeAssetImageListExport(data: DescribeAssetImageListExportRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetImageListExportResponse>;
  /** 查看镜像仓库资产更新进度状态 {@link DescribeAssetImageRegistryAssetStatusRequest} {@link DescribeAssetImageRegistryAssetStatusResponse} */
  DescribeAssetImageRegistryAssetStatus(data?: DescribeAssetImageRegistryAssetStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetImageRegistryAssetStatusResponse>;
  /** 镜像仓库查询镜像仓库详情 {@link DescribeAssetImageRegistryDetailRequest} {@link DescribeAssetImageRegistryDetailResponse} */
  DescribeAssetImageRegistryDetail(data?: DescribeAssetImageRegistryDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetImageRegistryDetailResponse>;
  /** 镜像仓库查询镜像仓库列表 {@link DescribeAssetImageRegistryListRequest} {@link DescribeAssetImageRegistryListResponse} */
  DescribeAssetImageRegistryList(data?: DescribeAssetImageRegistryListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetImageRegistryListResponse>;
  /** 镜像仓库镜像列表导出 {@link DescribeAssetImageRegistryListExportRequest} {@link DescribeAssetImageRegistryListExportResponse} */
  DescribeAssetImageRegistryListExport(data: DescribeAssetImageRegistryListExportRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetImageRegistryListExportResponse>;
  /** 查看单个镜像仓库详细信息 {@link DescribeAssetImageRegistryRegistryDetailRequest} {@link DescribeAssetImageRegistryRegistryDetailResponse} */
  DescribeAssetImageRegistryRegistryDetail(data: DescribeAssetImageRegistryRegistryDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetImageRegistryRegistryDetailResponse>;
  /** 镜像仓库仓库列表 {@link DescribeAssetImageRegistryRegistryListRequest} {@link DescribeAssetImageRegistryRegistryListResponse} */
  DescribeAssetImageRegistryRegistryList(data?: DescribeAssetImageRegistryRegistryListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetImageRegistryRegistryListResponse>;
  /** 镜像仓库查询镜像高危行为列表 {@link DescribeAssetImageRegistryRiskInfoListRequest} {@link DescribeAssetImageRegistryRiskInfoListResponse} */
  DescribeAssetImageRegistryRiskInfoList(data?: DescribeAssetImageRegistryRiskInfoListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetImageRegistryRiskInfoListResponse>;
  /** 镜像仓库敏感信息列表导出 {@link DescribeAssetImageRegistryRiskListExportRequest} {@link DescribeAssetImageRegistryRiskListExportResponse} */
  DescribeAssetImageRegistryRiskListExport(data: DescribeAssetImageRegistryRiskListExportRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetImageRegistryRiskListExportResponse>;
  /** 镜像仓库查询一键镜像扫描状态 {@link DescribeAssetImageRegistryScanStatusOneKeyRequest} {@link DescribeAssetImageRegistryScanStatusOneKeyResponse} */
  DescribeAssetImageRegistryScanStatusOneKey(data?: DescribeAssetImageRegistryScanStatusOneKeyRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetImageRegistryScanStatusOneKeyResponse>;
  /** 镜像仓库查询镜像统计信息 {@link DescribeAssetImageRegistrySummaryRequest} {@link DescribeAssetImageRegistrySummaryResponse} */
  DescribeAssetImageRegistrySummary(data?: DescribeAssetImageRegistrySummaryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetImageRegistrySummaryResponse>;
  /** 镜像仓库查询木马病毒列表 {@link DescribeAssetImageRegistryVirusListRequest} {@link DescribeAssetImageRegistryVirusListResponse} */
  DescribeAssetImageRegistryVirusList(data?: DescribeAssetImageRegistryVirusListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetImageRegistryVirusListResponse>;
  /** 镜像仓库木马信息列表导出 {@link DescribeAssetImageRegistryVirusListExportRequest} {@link DescribeAssetImageRegistryVirusListExportResponse} */
  DescribeAssetImageRegistryVirusListExport(data: DescribeAssetImageRegistryVirusListExportRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetImageRegistryVirusListExportResponse>;
  /** 镜像仓库查询镜像漏洞列表 {@link DescribeAssetImageRegistryVulListRequest} {@link DescribeAssetImageRegistryVulListResponse} */
  DescribeAssetImageRegistryVulList(data?: DescribeAssetImageRegistryVulListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetImageRegistryVulListResponse>;
  /** 镜像仓库漏洞列表导出 {@link DescribeAssetImageRegistryVulListExportRequest} {@link DescribeAssetImageRegistryVulListExportResponse} */
  DescribeAssetImageRegistryVulListExport(data: DescribeAssetImageRegistryVulListExportRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetImageRegistryVulListExportResponse>;
  /** 查询镜像风险列表 {@link DescribeAssetImageRiskListRequest} {@link DescribeAssetImageRiskListResponse} */
  DescribeAssetImageRiskList(data: DescribeAssetImageRiskListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetImageRiskListResponse>;
  /** 镜像风险列表导出 {@link DescribeAssetImageRiskListExportRequest} {@link DescribeAssetImageRiskListExportResponse} */
  DescribeAssetImageRiskListExport(data: DescribeAssetImageRiskListExportRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetImageRiskListExportResponse>;
  /** 获取镜像扫描设置信息 {@link DescribeAssetImageScanSettingRequest} {@link DescribeAssetImageScanSettingResponse} */
  DescribeAssetImageScanSetting(data?: DescribeAssetImageScanSettingRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetImageScanSettingResponse>;
  /** 查询镜像扫描状态 {@link DescribeAssetImageScanStatusRequest} {@link DescribeAssetImageScanStatusResponse} */
  DescribeAssetImageScanStatus(data?: DescribeAssetImageScanStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetImageScanStatusResponse>;
  /** 查询正在一键扫描的镜像扫描taskid {@link DescribeAssetImageScanTaskRequest} {@link DescribeAssetImageScanTaskResponse} */
  DescribeAssetImageScanTask(data?: DescribeAssetImageScanTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetImageScanTaskResponse>;
  /** 查询镜像简略信息列表 {@link DescribeAssetImageSimpleListRequest} {@link DescribeAssetImageSimpleListResponse} */
  DescribeAssetImageSimpleList(data?: DescribeAssetImageSimpleListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetImageSimpleListResponse>;
  /** 查询镜像病毒列表 {@link DescribeAssetImageVirusListRequest} {@link DescribeAssetImageVirusListResponse} */
  DescribeAssetImageVirusList(data: DescribeAssetImageVirusListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetImageVirusListResponse>;
  /** 镜像木马列表导出 {@link DescribeAssetImageVirusListExportRequest} {@link DescribeAssetImageVirusListExportResponse} */
  DescribeAssetImageVirusListExport(data: DescribeAssetImageVirusListExportRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetImageVirusListExportResponse>;
  /** 查询镜像漏洞列表 {@link DescribeAssetImageVulListRequest} {@link DescribeAssetImageVulListResponse} */
  DescribeAssetImageVulList(data: DescribeAssetImageVulListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetImageVulListResponse>;
  /** 镜像漏洞列表导出 {@link DescribeAssetImageVulListExportRequest} {@link DescribeAssetImageVulListExportResponse} */
  DescribeAssetImageVulListExport(data: DescribeAssetImageVulListExportRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetImageVulListExportResponse>;
  /** 查询端口占用列表 {@link DescribeAssetPortListRequest} {@link DescribeAssetPortListResponse} */
  DescribeAssetPortList(data?: DescribeAssetPortListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetPortListResponse>;
  /** 查询进程列表 {@link DescribeAssetProcessListRequest} {@link DescribeAssetProcessListResponse} */
  DescribeAssetProcessList(data?: DescribeAssetProcessListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetProcessListResponse>;
  /** 查询账户容器、镜像等统计信息 {@link DescribeAssetSummaryRequest} {@link DescribeAssetSummaryResponse} */
  DescribeAssetSummary(data?: DescribeAssetSummaryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetSummaryResponse>;
  /** 查询超级节点列表 {@link DescribeAssetSuperNodeListRequest} {@link DescribeAssetSuperNodeListResponse} */
  DescribeAssetSuperNodeList(data?: DescribeAssetSuperNodeListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetSuperNodeListResponse>;
  /** 查询资产同步最近时间 {@link DescribeAssetSyncLastTimeRequest} {@link DescribeAssetSyncLastTimeResponse} */
  DescribeAssetSyncLastTime(data?: DescribeAssetSyncLastTimeRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetSyncLastTimeResponse>;
  /** 查询web服务列表 {@link DescribeAssetWebServiceListRequest} {@link DescribeAssetWebServiceListResponse} */
  DescribeAssetWebServiceList(data?: DescribeAssetWebServiceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetWebServiceListResponse>;
  /** 查询自动授权规则授权范围主机信息 {@link DescribeAutoAuthorizedRuleHostRequest} {@link DescribeAutoAuthorizedRuleHostResponse} */
  DescribeAutoAuthorizedRuleHost(data: DescribeAutoAuthorizedRuleHostRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAutoAuthorizedRuleHostResponse>;
  /** 查询所有检查项接口 {@link DescribeCheckItemListRequest} {@link DescribeCheckItemListResponse} */
  DescribeCheckItemList(data?: DescribeCheckItemListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCheckItemListResponse>;
  /** 查询单个集群的详细信息 {@link DescribeClusterDetailRequest} {@link DescribeClusterDetailResponse} */
  DescribeClusterDetail(data: DescribeClusterDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterDetailResponse>;
  /** 查询集群节点信息 {@link DescribeClusterNodesRequest} {@link DescribeClusterNodesResponse} */
  DescribeClusterNodes(data?: DescribeClusterNodesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterNodesResponse>;
  /** 查询用户集群资产总览 {@link DescribeClusterSummaryRequest} {@link DescribeClusterSummaryResponse} */
  DescribeClusterSummary(data?: DescribeClusterSummaryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterSummaryResponse>;
  /** 安全合规查询某个资产的详情 {@link DescribeComplianceAssetDetailInfoRequest} {@link DescribeComplianceAssetDetailInfoResponse} */
  DescribeComplianceAssetDetailInfo(data: DescribeComplianceAssetDetailInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeComplianceAssetDetailInfoResponse>;
  /** 安全合规查询某类资产的列表 {@link DescribeComplianceAssetListRequest} {@link DescribeComplianceAssetListResponse} */
  DescribeComplianceAssetList(data?: DescribeComplianceAssetListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeComplianceAssetListResponse>;
  /** 安全合规查询某资产下的检测项列表 {@link DescribeComplianceAssetPolicyItemListRequest} {@link DescribeComplianceAssetPolicyItemListResponse} */
  DescribeComplianceAssetPolicyItemList(data: DescribeComplianceAssetPolicyItemListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeComplianceAssetPolicyItemListResponse>;
  /** 安全合规查询定时任务列表 {@link DescribeCompliancePeriodTaskListRequest} {@link DescribeCompliancePeriodTaskListResponse} */
  DescribeCompliancePeriodTaskList(data?: DescribeCompliancePeriodTaskListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCompliancePeriodTaskListResponse>;
  /** 安全合规查询检测项影响的资产列表 {@link DescribeCompliancePolicyItemAffectedAssetListRequest} {@link DescribeCompliancePolicyItemAffectedAssetListResponse} */
  DescribeCompliancePolicyItemAffectedAssetList(data: DescribeCompliancePolicyItemAffectedAssetListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCompliancePolicyItemAffectedAssetListResponse>;
  /** 安全合规查询某检测项影响的信息 {@link DescribeCompliancePolicyItemAffectedSummaryRequest} {@link DescribeCompliancePolicyItemAffectedSummaryResponse} */
  DescribeCompliancePolicyItemAffectedSummary(data: DescribeCompliancePolicyItemAffectedSummaryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCompliancePolicyItemAffectedSummaryResponse>;
  /** 安全合规查询上次检测失败的资产的列表 {@link DescribeComplianceScanFailedAssetListRequest} {@link DescribeComplianceScanFailedAssetListResponse} */
  DescribeComplianceScanFailedAssetList(data?: DescribeComplianceScanFailedAssetListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeComplianceScanFailedAssetListResponse>;
  /** 安全合规查询上次任务的资产通过率汇总信息 {@link DescribeComplianceTaskAssetSummaryRequest} {@link DescribeComplianceTaskAssetSummaryResponse} */
  DescribeComplianceTaskAssetSummary(data: DescribeComplianceTaskAssetSummaryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeComplianceTaskAssetSummaryResponse>;
  /** 安全合规查询上次任务的检测项的汇总信息列表 {@link DescribeComplianceTaskPolicyItemSummaryListRequest} {@link DescribeComplianceTaskPolicyItemSummaryListResponse} */
  DescribeComplianceTaskPolicyItemSummaryList(data?: DescribeComplianceTaskPolicyItemSummaryListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeComplianceTaskPolicyItemSummaryListResponse>;
  /** 安全合规查询白名单列表 {@link DescribeComplianceWhitelistItemListRequest} {@link DescribeComplianceWhitelistItemListResponse} */
  DescribeComplianceWhitelistItemList(data?: DescribeComplianceWhitelistItemListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeComplianceWhitelistItemListResponse>;
  /** 查询容器安全资产概览 {@link DescribeContainerAssetSummaryRequest} {@link DescribeContainerAssetSummaryResponse} */
  DescribeContainerAssetSummary(data?: DescribeContainerAssetSummaryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeContainerAssetSummaryResponse>;
  /** 查询容器安全未处理事件概览 {@link DescribeContainerSecEventSummaryRequest} {@link DescribeContainerSecEventSummaryResponse} */
  DescribeContainerSecEventSummary(data?: DescribeContainerSecEventSummaryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeContainerSecEventSummaryResponse>;
  /** 获取ES字段聚合结果 {@link DescribeESAggregationsRequest} {@link DescribeESAggregationsResponse} */
  DescribeESAggregations(data: DescribeESAggregationsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeESAggregationsResponse>;
  /** 获取ES查询文档列表 {@link DescribeESHitsRequest} {@link DescribeESHitsResponse} */
  DescribeESHits(data: DescribeESHitsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeESHitsResponse>;
  /** 查询应急漏洞列表 {@link DescribeEmergencyVulListRequest} {@link DescribeEmergencyVulListResponse} */
  DescribeEmergencyVulList(data?: DescribeEmergencyVulListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEmergencyVulListResponse>;
  /** 查询容器逃逸事件详情 {@link DescribeEscapeEventDetailRequest} {@link DescribeEscapeEventDetailResponse} */
  DescribeEscapeEventDetail(data: DescribeEscapeEventDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEscapeEventDetailResponse>;
  /** 查询容器逃逸事件列表 {@link DescribeEscapeEventInfoRequest} {@link DescribeEscapeEventInfoResponse} */
  DescribeEscapeEventInfo(data?: DescribeEscapeEventInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEscapeEventInfoResponse>;
  /** 查询待处理逃逸事件趋势 {@link DescribeEscapeEventTendencyRequest} {@link DescribeEscapeEventTendencyResponse} */
  DescribeEscapeEventTendency(data: DescribeEscapeEventTendencyRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEscapeEventTendencyResponse>;
  /** 统计容器逃逸各事件类型和待处理事件数 {@link DescribeEscapeEventTypeSummaryRequest} {@link DescribeEscapeEventTypeSummaryResponse} */
  DescribeEscapeEventTypeSummary(data?: DescribeEscapeEventTypeSummaryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEscapeEventTypeSummaryResponse>;
  /** 查询容器逃逸事件列表导出 {@link DescribeEscapeEventsExportRequest} {@link DescribeEscapeEventsExportResponse} */
  DescribeEscapeEventsExport(data: DescribeEscapeEventsExportRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEscapeEventsExportResponse>;
  /** 查询容器逃逸扫描规则信息 {@link DescribeEscapeRuleInfoRequest} {@link DescribeEscapeRuleInfoResponse} */
  DescribeEscapeRuleInfo(data?: DescribeEscapeRuleInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEscapeRuleInfoResponse>;
  /** 查询容器逃逸安全状态 {@link DescribeEscapeSafeStateRequest} {@link DescribeEscapeSafeStateResponse} */
  DescribeEscapeSafeState(data?: DescribeEscapeSafeStateRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEscapeSafeStateResponse>;
  /** 查询逃逸白名单 {@link DescribeEscapeWhiteListRequest} {@link DescribeEscapeWhiteListResponse} */
  DescribeEscapeWhiteList(data?: DescribeEscapeWhiteListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEscapeWhiteListResponse>;
  /** 查询风险容器镜像列表 {@link DescribeEventEscapeImageListRequest} {@link DescribeEventEscapeImageListResponse} */
  DescribeEventEscapeImageList(data?: DescribeEventEscapeImageListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEventEscapeImageListResponse>;
  /** 查询导出任务下载URL {@link DescribeExportJobDownloadURLRequest} {@link DescribeExportJobDownloadURLResponse} */
  DescribeExportJobDownloadURL(data: DescribeExportJobDownloadURLRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeExportJobDownloadURLResponse>;
  /** 查询导出任务管理列表 {@link DescribeExportJobManageListRequest} {@link DescribeExportJobManageListResponse} */
  DescribeExportJobManageList(data?: DescribeExportJobManageListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeExportJobManageListResponse>;
  /** 查询导出任务的结果 {@link DescribeExportJobResultRequest} {@link DescribeExportJobResultResponse} */
  DescribeExportJobResult(data: DescribeExportJobResultRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeExportJobResultResponse>;
  /** 查询镜像授权信息 {@link DescribeImageAuthorizedInfoRequest} {@link DescribeImageAuthorizedInfoResponse} */
  DescribeImageAuthorizedInfo(data?: DescribeImageAuthorizedInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeImageAuthorizedInfoResponse>;
  /** 查询镜像自动授权结果列表 {@link DescribeImageAutoAuthorizedLogListRequest} {@link DescribeImageAutoAuthorizedLogListResponse} */
  DescribeImageAutoAuthorizedLogList(data: DescribeImageAutoAuthorizedLogListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeImageAutoAuthorizedLogListResponse>;
  /** 查询本地镜像自动授权规则 {@link DescribeImageAutoAuthorizedRuleRequest} {@link DescribeImageAutoAuthorizedRuleResponse} */
  DescribeImageAutoAuthorizedRule(data?: DescribeImageAutoAuthorizedRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeImageAutoAuthorizedRuleResponse>;
  /** 查询镜像自动授权任务列表 {@link DescribeImageAutoAuthorizedTaskListRequest} {@link DescribeImageAutoAuthorizedTaskListResponse} */
  DescribeImageAutoAuthorizedTaskList(data: DescribeImageAutoAuthorizedTaskListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeImageAutoAuthorizedTaskListResponse>;
  /** 查询本地镜像组件列表 {@link DescribeImageComponentListRequest} {@link DescribeImageComponentListResponse} */
  DescribeImageComponentList(data: DescribeImageComponentListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeImageComponentListResponse>;
  /** 查询用户镜像仓库下的命令空间列表 {@link DescribeImageRegistryNamespaceListRequest} {@link DescribeImageRegistryNamespaceListResponse} */
  DescribeImageRegistryNamespaceList(data?: DescribeImageRegistryNamespaceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeImageRegistryNamespaceListResponse>;
  /** 镜像仓库查看定时任务 {@link DescribeImageRegistryTimingScanTaskRequest} {@link DescribeImageRegistryTimingScanTaskResponse} */
  DescribeImageRegistryTimingScanTask(data?: DescribeImageRegistryTimingScanTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeImageRegistryTimingScanTaskResponse>;
  /** 查询本地镜像风险概览 {@link DescribeImageRiskSummaryRequest} {@link DescribeImageRiskSummaryResponse} */
  DescribeImageRiskSummary(data?: DescribeImageRiskSummaryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeImageRiskSummaryResponse>;
  /** 查询容器安全本地镜像风险趋势 {@link DescribeImageRiskTendencyRequest} {@link DescribeImageRiskTendencyResponse} */
  DescribeImageRiskTendency(data: DescribeImageRiskTendencyRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeImageRiskTendencyResponse>;
  /** 查询全部镜像列表 {@link DescribeImageSimpleListRequest} {@link DescribeImageSimpleListResponse} */
  DescribeImageSimpleList(data?: DescribeImageSimpleListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeImageSimpleListResponse>;
  /** 获取索引列表 {@link DescribeIndexListRequest} {@link DescribeIndexListResponse} */
  DescribeIndexList(data?: DescribeIndexListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIndexListResponse>;
  /** 查询检查报告 {@link DescribeInspectionReportRequest} {@link DescribeInspectionReportResponse} */
  DescribeInspectionReport(data?: DescribeInspectionReportRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInspectionReportResponse>;
  /** 查询k8s api 异常事件详情 {@link DescribeK8sApiAbnormalEventInfoRequest} {@link DescribeK8sApiAbnormalEventInfoResponse} */
  DescribeK8sApiAbnormalEventInfo(data: DescribeK8sApiAbnormalEventInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeK8sApiAbnormalEventInfoResponse>;
  /** 查询k8s api异常事件列表 {@link DescribeK8sApiAbnormalEventListRequest} {@link DescribeK8sApiAbnormalEventListResponse} */
  DescribeK8sApiAbnormalEventList(data?: DescribeK8sApiAbnormalEventListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeK8sApiAbnormalEventListResponse>;
  /** 查询k8sapi异常请求规则详情 {@link DescribeK8sApiAbnormalRuleInfoRequest} {@link DescribeK8sApiAbnormalRuleInfoResponse} */
  DescribeK8sApiAbnormalRuleInfo(data: DescribeK8sApiAbnormalRuleInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeK8sApiAbnormalRuleInfoResponse>;
  /** 查询k8sapi异常请求规则列表 {@link DescribeK8sApiAbnormalRuleListRequest} {@link DescribeK8sApiAbnormalRuleListResponse} */
  DescribeK8sApiAbnormalRuleList(data?: DescribeK8sApiAbnormalRuleListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeK8sApiAbnormalRuleListResponse>;
  /** 查询k8sapi 异常规则中范围列表 {@link DescribeK8sApiAbnormalRuleScopeListRequest} {@link DescribeK8sApiAbnormalRuleScopeListResponse} */
  DescribeK8sApiAbnormalRuleScopeList(data: DescribeK8sApiAbnormalRuleScopeListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeK8sApiAbnormalRuleScopeListResponse>;
  /** 查询k8sapi异常事件统计 {@link DescribeK8sApiAbnormalSummaryRequest} {@link DescribeK8sApiAbnormalSummaryResponse} */
  DescribeK8sApiAbnormalSummary(data?: DescribeK8sApiAbnormalSummaryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeK8sApiAbnormalSummaryResponse>;
  /** 查询k8sapi异常事件趋势 {@link DescribeK8sApiAbnormalTendencyRequest} {@link DescribeK8sApiAbnormalTendencyResponse} */
  DescribeK8sApiAbnormalTendency(data: DescribeK8sApiAbnormalTendencyRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeK8sApiAbnormalTendencyResponse>;
  /** 获取日志检索容量使用统计 {@link DescribeLogStorageStatisticRequest} {@link DescribeLogStorageStatisticResponse} */
  DescribeLogStorageStatistic(data?: DescribeLogStorageStatisticRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLogStorageStatisticResponse>;
  /** 查询集群策略审计列表 {@link DescribeNetworkFirewallAuditRecordRequest} {@link DescribeNetworkFirewallAuditRecordResponse} */
  DescribeNetworkFirewallAuditRecord(data?: DescribeNetworkFirewallAuditRecordRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNetworkFirewallAuditRecordResponse>;
  /** 查询集群策略列表 {@link DescribeNetworkFirewallClusterListRequest} {@link DescribeNetworkFirewallClusterListResponse} */
  DescribeNetworkFirewallClusterList(data?: DescribeNetworkFirewallClusterListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNetworkFirewallClusterListResponse>;
  /** 容器网络查询资产任务进度 {@link DescribeNetworkFirewallClusterRefreshStatusRequest} {@link DescribeNetworkFirewallClusterRefreshStatusResponse} */
  DescribeNetworkFirewallClusterRefreshStatus(data: DescribeNetworkFirewallClusterRefreshStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNetworkFirewallClusterRefreshStatusResponse>;
  /** 查询集群网络空间标签列表 {@link DescribeNetworkFirewallNamespaceLabelListRequest} {@link DescribeNetworkFirewallNamespaceLabelListResponse} */
  DescribeNetworkFirewallNamespaceLabelList(data: DescribeNetworkFirewallNamespaceLabelListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNetworkFirewallNamespaceLabelListResponse>;
  /** 查询集群网络空间列表 {@link DescribeNetworkFirewallNamespaceListRequest} {@link DescribeNetworkFirewallNamespaceListResponse} */
  DescribeNetworkFirewallNamespaceList(data: DescribeNetworkFirewallNamespaceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNetworkFirewallNamespaceListResponse>;
  /** 查询集群网络pod标签 {@link DescribeNetworkFirewallPodLabelsListRequest} {@link DescribeNetworkFirewallPodLabelsListResponse} */
  DescribeNetworkFirewallPodLabelsList(data: DescribeNetworkFirewallPodLabelsListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNetworkFirewallPodLabelsListResponse>;
  /** 容器网络集群查看策略详情 {@link DescribeNetworkFirewallPolicyDetailRequest} {@link DescribeNetworkFirewallPolicyDetailResponse} */
  DescribeNetworkFirewallPolicyDetail(data: DescribeNetworkFirewallPolicyDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNetworkFirewallPolicyDetailResponse>;
  /** 容器网络查询网络策略自动发现任务进度 {@link DescribeNetworkFirewallPolicyDiscoverRequest} {@link DescribeNetworkFirewallPolicyDiscoverResponse} */
  DescribeNetworkFirewallPolicyDiscover(data: DescribeNetworkFirewallPolicyDiscoverRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNetworkFirewallPolicyDiscoverResponse>;
  /** 查询集群网络策略列表 {@link DescribeNetworkFirewallPolicyListRequest} {@link DescribeNetworkFirewallPolicyListResponse} */
  DescribeNetworkFirewallPolicyList(data: DescribeNetworkFirewallPolicyListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNetworkFirewallPolicyListResponse>;
  /** 容器网络查询网络策略策略执行状态 {@link DescribeNetworkFirewallPolicyStatusRequest} {@link DescribeNetworkFirewallPolicyStatusResponse} */
  DescribeNetworkFirewallPolicyStatus(data: DescribeNetworkFirewallPolicyStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNetworkFirewallPolicyStatusResponse>;
  /** 容器网络集群查看Yaml网络策略详情 {@link DescribeNetworkFirewallPolicyYamlDetailRequest} {@link DescribeNetworkFirewallPolicyYamlDetailResponse} */
  DescribeNetworkFirewallPolicyYamlDetail(data: DescribeNetworkFirewallPolicyYamlDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNetworkFirewallPolicyYamlDetailResponse>;
  /** 查询最新披露漏洞列表 {@link DescribeNewestVulRequest} {@link DescribeNewestVulResponse} */
  DescribeNewestVul(data?: DescribeNewestVulRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNewestVulResponse>;
  /** 查询后付费详情 {@link DescribePostPayDetailRequest} {@link DescribePostPayDetailResponse} */
  DescribePostPayDetail(data?: DescribePostPayDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePostPayDetailResponse>;
  /** 查询专业版需购买信息 {@link DescribeProVersionInfoRequest} {@link DescribeProVersionInfoResponse} */
  DescribeProVersionInfo(data?: DescribeProVersionInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProVersionInfoResponse>;
  /** 查询促销活动 {@link DescribePromotionActivityRequest} {@link DescribePromotionActivityResponse} */
  DescribePromotionActivity(data: DescribePromotionActivityRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePromotionActivityResponse>;
  /** 获取公钥 {@link DescribePublicKeyRequest} {@link DescribePublicKeyResponse} */
  DescribePublicKey(data?: DescribePublicKeyRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePublicKeyResponse>;
  /** 查询容器安全服务已购买信息 {@link DescribePurchaseStateInfoRequest} {@link DescribePurchaseStateInfoResponse} */
  DescribePurchaseStateInfo(data?: DescribePurchaseStateInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePurchaseStateInfoResponse>;
  /** 查询刷新任务 {@link DescribeRefreshTaskRequest} {@link DescribeRefreshTaskResponse} */
  DescribeRefreshTask(data: DescribeRefreshTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRefreshTaskResponse>;
  /** 运行时反弹shell事件详细信息 {@link DescribeReverseShellDetailRequest} {@link DescribeReverseShellDetailResponse} */
  DescribeReverseShellDetail(data: DescribeReverseShellDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeReverseShellDetailResponse>;
  /** 运行时反弹shell列表 {@link DescribeReverseShellEventsRequest} {@link DescribeReverseShellEventsResponse} */
  DescribeReverseShellEvents(data?: DescribeReverseShellEventsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeReverseShellEventsResponse>;
  /** 运行时反弹shell列表导出 {@link DescribeReverseShellEventsExportRequest} {@link DescribeReverseShellEventsExportResponse} */
  DescribeReverseShellEventsExport(data?: DescribeReverseShellEventsExportRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeReverseShellEventsExportResponse>;
  /** 运行时反弹shell白名单详细信息 {@link DescribeReverseShellWhiteListDetailRequest} {@link DescribeReverseShellWhiteListDetailResponse} */
  DescribeReverseShellWhiteListDetail(data: DescribeReverseShellWhiteListDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeReverseShellWhiteListDetailResponse>;
  /** 运行时反弹shell白名单列表 {@link DescribeReverseShellWhiteListsRequest} {@link DescribeReverseShellWhiteListsResponse} */
  DescribeReverseShellWhiteLists(data?: DescribeReverseShellWhiteListsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeReverseShellWhiteListsResponse>;
  /** 查询恶意请求事件详情 {@link DescribeRiskDnsEventDetailRequest} {@link DescribeRiskDnsEventDetailResponse} */
  DescribeRiskDnsEventDetail(data: DescribeRiskDnsEventDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRiskDnsEventDetailResponse>;
  /** 查询恶意请求事件列表 {@link DescribeRiskDnsListRequest} {@link DescribeRiskDnsListResponse} */
  DescribeRiskDnsList(data?: DescribeRiskDnsListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRiskDnsListResponse>;
  /** 查询集群风险项列表 {@link DescribeRiskListRequest} {@link DescribeRiskListResponse} */
  DescribeRiskList(data?: DescribeRiskListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRiskListResponse>;
  /** 运行时高危系统调用事件详细信息 {@link DescribeRiskSyscallDetailRequest} {@link DescribeRiskSyscallDetailResponse} */
  DescribeRiskSyscallDetail(data: DescribeRiskSyscallDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRiskSyscallDetailResponse>;
  /** 运行时高危系统调用列表 {@link DescribeRiskSyscallEventsRequest} {@link DescribeRiskSyscallEventsResponse} */
  DescribeRiskSyscallEvents(data?: DescribeRiskSyscallEventsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRiskSyscallEventsResponse>;
  /** 运行时高危系统调用列表导出 {@link DescribeRiskSyscallEventsExportRequest} {@link DescribeRiskSyscallEventsExportResponse} */
  DescribeRiskSyscallEventsExport(data?: DescribeRiskSyscallEventsExportRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRiskSyscallEventsExportResponse>;
  /** 运行时高危系统调用系统名称列表 {@link DescribeRiskSyscallNamesRequest} {@link DescribeRiskSyscallNamesResponse} */
  DescribeRiskSyscallNames(data?: DescribeRiskSyscallNamesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRiskSyscallNamesResponse>;
  /** 运行时高危系统调用白名单详细信息 {@link DescribeRiskSyscallWhiteListDetailRequest} {@link DescribeRiskSyscallWhiteListDetailResponse} */
  DescribeRiskSyscallWhiteListDetail(data: DescribeRiskSyscallWhiteListDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRiskSyscallWhiteListDetailResponse>;
  /** 运行时高危系统调用白名单列表 {@link DescribeRiskSyscallWhiteListsRequest} {@link DescribeRiskSyscallWhiteListsResponse} */
  DescribeRiskSyscallWhiteLists(data?: DescribeRiskSyscallWhiteListsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRiskSyscallWhiteListsResponse>;
  /** 查询扫描忽略的漏洞列表 {@link DescribeScanIgnoreVulListRequest} {@link DescribeScanIgnoreVulListResponse} */
  DescribeScanIgnoreVulList(data?: DescribeScanIgnoreVulListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeScanIgnoreVulListResponse>;
  /** 导出ES查询文档列表 {@link DescribeSearchExportListRequest} {@link DescribeSearchExportListResponse} */
  DescribeSearchExportList(data: DescribeSearchExportListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSearchExportListResponse>;
  /** 获取历史搜索记录 {@link DescribeSearchLogsRequest} {@link DescribeSearchLogsResponse} */
  DescribeSearchLogs(data?: DescribeSearchLogsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSearchLogsResponse>;
  /** 获取快速检索列表 {@link DescribeSearchTemplatesRequest} {@link DescribeSearchTemplatesResponse} */
  DescribeSearchTemplates(data?: DescribeSearchTemplatesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSearchTemplatesResponse>;
  /** 查询容器运行时安全时间趋势 {@link DescribeSecEventsTendencyRequest} {@link DescribeSecEventsTendencyResponse} */
  DescribeSecEventsTendency(data: DescribeSecEventsTendencyRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSecEventsTendencyResponse>;
  /** 查询安全日志告警信息 {@link DescribeSecLogAlertMsgRequest} {@link DescribeSecLogAlertMsgResponse} */
  DescribeSecLogAlertMsg(data?: DescribeSecLogAlertMsgRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSecLogAlertMsgResponse>;
  /** 查询安全日志清理设置详情 {@link DescribeSecLogCleanSettingInfoRequest} {@link DescribeSecLogCleanSettingInfoResponse} */
  DescribeSecLogCleanSettingInfo(data?: DescribeSecLogCleanSettingInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSecLogCleanSettingInfoResponse>;
  /** 查询安全日志投递cls可选项 {@link DescribeSecLogDeliveryClsOptionsRequest} {@link DescribeSecLogDeliveryClsOptionsResponse} */
  DescribeSecLogDeliveryClsOptions(data?: DescribeSecLogDeliveryClsOptionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSecLogDeliveryClsOptionsResponse>;
  /** 查询安全日志投递Cls配置 {@link DescribeSecLogDeliveryClsSettingRequest} {@link DescribeSecLogDeliveryClsSettingResponse} */
  DescribeSecLogDeliveryClsSetting(data?: DescribeSecLogDeliveryClsSettingRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSecLogDeliveryClsSettingResponse>;
  /** 查询安全日志投递kafka可选项 {@link DescribeSecLogDeliveryKafkaOptionsRequest} {@link DescribeSecLogDeliveryKafkaOptionsResponse} */
  DescribeSecLogDeliveryKafkaOptions(data?: DescribeSecLogDeliveryKafkaOptionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSecLogDeliveryKafkaOptionsResponse>;
  /** 查询安全日志投递kafka配置 {@link DescribeSecLogDeliveryKafkaSettingRequest} {@link DescribeSecLogDeliveryKafkaSettingResponse} */
  DescribeSecLogDeliveryKafkaSetting(data?: DescribeSecLogDeliveryKafkaSettingRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSecLogDeliveryKafkaSettingResponse>;
  /** 查询安全日志接入对象列表 {@link DescribeSecLogJoinObjectListRequest} {@link DescribeSecLogJoinObjectListResponse} */
  DescribeSecLogJoinObjectList(data: DescribeSecLogJoinObjectListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSecLogJoinObjectListResponse>;
  /** 查询安全日志接入列表 {@link DescribeSecLogJoinTypeListRequest} {@link DescribeSecLogJoinTypeListResponse} */
  DescribeSecLogJoinTypeList(data?: DescribeSecLogJoinTypeListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSecLogJoinTypeListResponse>;
  /** 查询安全日志KafkaUIN {@link DescribeSecLogKafkaUINRequest} {@link DescribeSecLogKafkaUINResponse} */
  DescribeSecLogKafkaUIN(data?: DescribeSecLogKafkaUINRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSecLogKafkaUINResponse>;
  /** 查询安全日志商品信息 {@link DescribeSecLogVasInfoRequest} {@link DescribeSecLogVasInfoResponse} */
  DescribeSecLogVasInfo(data?: DescribeSecLogVasInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSecLogVasInfoResponse>;
  /** 查询超级节点pod列表 {@link DescribeSuperNodePodListRequest} {@link DescribeSuperNodePodListResponse} */
  DescribeSuperNodePodList(data?: DescribeSuperNodePodListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSuperNodePodListResponse>;
  /** 查询支持防御的漏洞列表 {@link DescribeSupportDefenceVulRequest} {@link DescribeSupportDefenceVulResponse} */
  DescribeSupportDefenceVul(data?: DescribeSupportDefenceVulRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSupportDefenceVulResponse>;
  /** 查询系统漏洞列表 {@link DescribeSystemVulListRequest} {@link DescribeSystemVulListResponse} */
  DescribeSystemVulList(data?: DescribeSystemVulListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSystemVulListResponse>;
  /** 查询检查结果总览 {@link DescribeTaskResultSummaryRequest} {@link DescribeTaskResultSummaryResponse} */
  DescribeTaskResultSummary(data?: DescribeTaskResultSummaryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTaskResultSummaryResponse>;
  /** 查询容器安全概览信息 {@link DescribeTcssSummaryRequest} {@link DescribeTcssSummaryResponse} */
  DescribeTcssSummary(data?: DescribeTcssSummaryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTcssSummaryResponse>;
  /** 查询当天未授权核数趋势 {@link DescribeUnauthorizedCoresTendencyRequest} {@link DescribeUnauthorizedCoresTendencyResponse} */
  DescribeUnauthorizedCoresTendency(data?: DescribeUnauthorizedCoresTendencyRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUnauthorizedCoresTendencyResponse>;
  /** 查询未完成的刷新资产任务信息 {@link DescribeUnfinishRefreshTaskRequest} {@link DescribeUnfinishRefreshTaskResponse} */
  DescribeUnfinishRefreshTask(data?: DescribeUnfinishRefreshTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUnfinishRefreshTaskResponse>;
  /** 用户集群资产查询 {@link DescribeUserClusterRequest} {@link DescribeUserClusterResponse} */
  DescribeUserCluster(data?: DescribeUserClusterRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUserClusterResponse>;
  /** 获取用户的pod列表 {@link DescribeUserPodListRequest} {@link DescribeUserPodListResponse} */
  DescribeUserPodList(data?: DescribeUserPodListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUserPodListResponse>;
  /** 查询增值服务需购买信息 {@link DescribeValueAddedSrvInfoRequest} {@link DescribeValueAddedSrvInfoResponse} */
  DescribeValueAddedSrvInfo(data?: DescribeValueAddedSrvInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeValueAddedSrvInfoResponse>;
  /** 查询木马自动隔离样本详情 {@link DescribeVirusAutoIsolateSampleDetailRequest} {@link DescribeVirusAutoIsolateSampleDetailResponse} */
  DescribeVirusAutoIsolateSampleDetail(data: DescribeVirusAutoIsolateSampleDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVirusAutoIsolateSampleDetailResponse>;
  /** 查询木马自动隔离样本下载链接 {@link DescribeVirusAutoIsolateSampleDownloadURLRequest} {@link DescribeVirusAutoIsolateSampleDownloadURLResponse} */
  DescribeVirusAutoIsolateSampleDownloadURL(data: DescribeVirusAutoIsolateSampleDownloadURLRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVirusAutoIsolateSampleDownloadURLResponse>;
  /** 查询木马自动隔离样本列表 {@link DescribeVirusAutoIsolateSampleListRequest} {@link DescribeVirusAutoIsolateSampleListResponse} */
  DescribeVirusAutoIsolateSampleList(data?: DescribeVirusAutoIsolateSampleListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVirusAutoIsolateSampleListResponse>;
  /** 查询木马自动隔离设置 {@link DescribeVirusAutoIsolateSettingRequest} {@link DescribeVirusAutoIsolateSettingResponse} */
  DescribeVirusAutoIsolateSetting(data?: DescribeVirusAutoIsolateSettingRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVirusAutoIsolateSettingResponse>;
  /** 运行时查询木马文件信息 {@link DescribeVirusDetailRequest} {@link DescribeVirusDetailResponse} */
  DescribeVirusDetail(data: DescribeVirusDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVirusDetailResponse>;
  /** 查询木马事件趋势 {@link DescribeVirusEventTendencyRequest} {@link DescribeVirusEventTendencyResponse} */
  DescribeVirusEventTendency(data: DescribeVirusEventTendencyRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVirusEventTendencyResponse>;
  /** 查询运行时文件查杀事件列表 {@link DescribeVirusListRequest} {@link DescribeVirusListResponse} */
  DescribeVirusList(data?: DescribeVirusListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVirusListResponse>;
  /** 查询木马一键检测预估超时时间 {@link DescribeVirusManualScanEstimateTimeoutRequest} {@link DescribeVirusManualScanEstimateTimeoutResponse} */
  DescribeVirusManualScanEstimateTimeout(data: DescribeVirusManualScanEstimateTimeoutRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVirusManualScanEstimateTimeoutResponse>;
  /** 运行时查询文件查杀实时监控设置 {@link DescribeVirusMonitorSettingRequest} {@link DescribeVirusMonitorSettingResponse} */
  DescribeVirusMonitorSetting(data?: DescribeVirusMonitorSettingRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVirusMonitorSettingResponse>;
  /** 查询木马样本下载url {@link DescribeVirusSampleDownloadUrlRequest} {@link DescribeVirusSampleDownloadUrlResponse} */
  DescribeVirusSampleDownloadUrl(data: DescribeVirusSampleDownloadUrlRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVirusSampleDownloadUrlResponse>;
  /** 运行时查询文件查杀设置 {@link DescribeVirusScanSettingRequest} {@link DescribeVirusScanSettingResponse} */
  DescribeVirusScanSetting(data?: DescribeVirusScanSettingRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVirusScanSettingResponse>;
  /** 运行时查询文件查杀任务状态 {@link DescribeVirusScanTaskStatusRequest} {@link DescribeVirusScanTaskStatusResponse} */
  DescribeVirusScanTaskStatus(data?: DescribeVirusScanTaskStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVirusScanTaskStatusResponse>;
  /** 运行时文件扫描超时设置查询 {@link DescribeVirusScanTimeoutSettingRequest} {@link DescribeVirusScanTimeoutSettingResponse} */
  DescribeVirusScanTimeoutSetting(data: DescribeVirusScanTimeoutSettingRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVirusScanTimeoutSettingResponse>;
  /** 运行时查询木马概览信息 {@link DescribeVirusSummaryRequest} {@link DescribeVirusSummaryResponse} */
  DescribeVirusSummary(data?: DescribeVirusSummaryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVirusSummaryResponse>;
  /** 运行时查询文件查杀任务列表 {@link DescribeVirusTaskListRequest} {@link DescribeVirusTaskListResponse} */
  DescribeVirusTaskList(data: DescribeVirusTaskListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVirusTaskListResponse>;
  /** 查询受漏洞的容器列表 {@link DescribeVulContainerListRequest} {@link DescribeVulContainerListResponse} */
  DescribeVulContainerList(data: DescribeVulContainerListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulContainerListResponse>;
  /** 查询漏洞防御事件列表 {@link DescribeVulDefenceEventRequest} {@link DescribeVulDefenceEventResponse} */
  DescribeVulDefenceEvent(data?: DescribeVulDefenceEventRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulDefenceEventResponse>;
  /** 查询漏洞防御事件详情 {@link DescribeVulDefenceEventDetailRequest} {@link DescribeVulDefenceEventDetailResponse} */
  DescribeVulDefenceEventDetail(data: DescribeVulDefenceEventDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulDefenceEventDetailResponse>;
  /** 查询漏洞防御攻击事件趋势 {@link DescribeVulDefenceEventTendencyRequest} {@link DescribeVulDefenceEventTendencyResponse} */
  DescribeVulDefenceEventTendency(data: DescribeVulDefenceEventTendencyRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulDefenceEventTendencyResponse>;
  /** 查询漏洞防御的主机列表 {@link DescribeVulDefenceHostRequest} {@link DescribeVulDefenceHostResponse} */
  DescribeVulDefenceHost(data?: DescribeVulDefenceHostRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulDefenceHostResponse>;
  /** 查询漏洞防御插件列表 {@link DescribeVulDefencePluginRequest} {@link DescribeVulDefencePluginResponse} */
  DescribeVulDefencePlugin(data?: DescribeVulDefencePluginRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulDefencePluginResponse>;
  /** 查询漏洞防御设置信息 {@link DescribeVulDefenceSettingRequest} {@link DescribeVulDefenceSettingResponse} */
  DescribeVulDefenceSetting(data?: DescribeVulDefenceSettingRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulDefenceSettingResponse>;
  /** 查询漏洞详情 {@link DescribeVulDetailRequest} {@link DescribeVulDetailResponse} */
  DescribeVulDetail(data: DescribeVulDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulDetailResponse>;
  /** 查询漏洞扫描忽略的本地镜像列表 {@link DescribeVulIgnoreLocalImageListRequest} {@link DescribeVulIgnoreLocalImageListResponse} */
  DescribeVulIgnoreLocalImageList(data: DescribeVulIgnoreLocalImageListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulIgnoreLocalImageListResponse>;
  /** 查询漏洞扫描忽略的仓库镜像列表 {@link DescribeVulIgnoreRegistryImageListRequest} {@link DescribeVulIgnoreRegistryImageListResponse} */
  DescribeVulIgnoreRegistryImageList(data: DescribeVulIgnoreRegistryImageListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulIgnoreRegistryImageListResponse>;
  /** 查询漏洞影响的镜像列表 {@link DescribeVulImageListRequest} {@link DescribeVulImageListResponse} */
  DescribeVulImageList(data: DescribeVulImageListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulImageListResponse>;
  /** 查询漏洞镜像统计 {@link DescribeVulImageSummaryRequest} {@link DescribeVulImageSummaryResponse} */
  DescribeVulImageSummary(data?: DescribeVulImageSummaryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulImageSummaryResponse>;
  /** 查询应急漏洞各威胁等级统计镜像数 {@link DescribeVulLevelImageSummaryRequest} {@link DescribeVulLevelImageSummaryResponse} */
  DescribeVulLevelImageSummary(data?: DescribeVulLevelImageSummaryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulLevelImageSummaryResponse>;
  /** 查询漏洞各威胁等级统计数 {@link DescribeVulLevelSummaryRequest} {@link DescribeVulLevelSummaryResponse} */
  DescribeVulLevelSummary(data: DescribeVulLevelSummaryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulLevelSummaryResponse>;
  /** 查询漏洞影响的仓库镜像列表 {@link DescribeVulRegistryImageListRequest} {@link DescribeVulRegistryImageListResponse} */
  DescribeVulRegistryImageList(data: DescribeVulRegistryImageListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulRegistryImageListResponse>;
  /** 统计漏洞扫描页已授权和未扫描镜像数 {@link DescribeVulScanAuthorizedImageSummaryRequest} {@link DescribeVulScanAuthorizedImageSummaryResponse} */
  DescribeVulScanAuthorizedImageSummary(data?: DescribeVulScanAuthorizedImageSummaryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulScanAuthorizedImageSummaryResponse>;
  /** 查询漏洞扫描任务信息 {@link DescribeVulScanInfoRequest} {@link DescribeVulScanInfoResponse} */
  DescribeVulScanInfo(data?: DescribeVulScanInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulScanInfoResponse>;
  /** 查询漏洞扫描任务的本地镜像列表 {@link DescribeVulScanLocalImageListRequest} {@link DescribeVulScanLocalImageListResponse} */
  DescribeVulScanLocalImageList(data: DescribeVulScanLocalImageListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulScanLocalImageListResponse>;
  /** 查询漏洞风险统计概览 {@link DescribeVulSummaryRequest} {@link DescribeVulSummaryResponse} */
  DescribeVulSummary(data?: DescribeVulSummaryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulSummaryResponse>;
  /** 查询漏洞风险趋势 {@link DescribeVulTendencyRequest} {@link DescribeVulTendencyResponse} */
  DescribeVulTendency(data: DescribeVulTendencyRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulTendencyResponse>;
  /** 查询漏洞Top排名列表 {@link DescribeVulTopRankingRequest} {@link DescribeVulTopRankingResponse} */
  DescribeVulTopRanking(data: DescribeVulTopRankingRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVulTopRankingResponse>;
  /** 获取告警策略列表 {@link DescribeWarningRulesRequest} {@link DescribeWarningRulesResponse} */
  DescribeWarningRules(data?: DescribeWarningRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWarningRulesResponse>;
  /** 查询web应用漏洞列表 {@link DescribeWebVulListRequest} {@link DescribeWebVulListResponse} */
  DescribeWebVulList(data?: DescribeWebVulListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWebVulListResponse>;
  /** 运行时文件查杀事件列表导出 {@link ExportVirusListRequest} {@link ExportVirusListResponse} */
  ExportVirusList(data?: ExportVirusListRequest, config?: AxiosRequestConfig): AxiosPromise<ExportVirusListResponse>;
  /** 安全合规初始化用户的合规基线检测环境 {@link InitializeUserComplianceEnvironmentRequest} {@link InitializeUserComplianceEnvironmentResponse} */
  InitializeUserComplianceEnvironment(data?: InitializeUserComplianceEnvironmentRequest, config?: AxiosRequestConfig): AxiosPromise<InitializeUserComplianceEnvironmentResponse>;
  /** 修改运行时异常进程策略状态 {@link ModifyAbnormalProcessRuleStatusRequest} {@link ModifyAbnormalProcessRuleStatusResponse} */
  ModifyAbnormalProcessRuleStatus(data: ModifyAbnormalProcessRuleStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAbnormalProcessRuleStatusResponse>;
  /** 修改异常进程事件状态 {@link ModifyAbnormalProcessStatusRequest} {@link ModifyAbnormalProcessStatusResponse} */
  ModifyAbnormalProcessStatus(data: ModifyAbnormalProcessStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAbnormalProcessStatusResponse>;
  /** 修改运行时访问控制策略状态 {@link ModifyAccessControlRuleStatusRequest} {@link ModifyAccessControlRuleStatusResponse} */
  ModifyAccessControlRuleStatus(data: ModifyAccessControlRuleStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAccessControlRuleStatusResponse>;
  /** 修改运行时访问控制事件状态 {@link ModifyAccessControlStatusRequest} {@link ModifyAccessControlStatusResponse} */
  ModifyAccessControlStatus(data: ModifyAccessControlStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAccessControlStatusResponse>;
  /** 主机资产刷新 {@link ModifyAssetRequest} {@link ModifyAssetResponse} */
  ModifyAsset(data?: ModifyAssetRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAssetResponse>;
  /** 镜像仓库停止镜像扫描任务 {@link ModifyAssetImageRegistryScanStopRequest} {@link ModifyAssetImageRegistryScanStopResponse} */
  ModifyAssetImageRegistryScanStop(data?: ModifyAssetImageRegistryScanStopRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAssetImageRegistryScanStopResponse>;
  /** 镜像仓库停止镜像一键扫描任务 {@link ModifyAssetImageRegistryScanStopOneKeyRequest} {@link ModifyAssetImageRegistryScanStopOneKeyResponse} */
  ModifyAssetImageRegistryScanStopOneKey(data?: ModifyAssetImageRegistryScanStopOneKeyRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAssetImageRegistryScanStopOneKeyResponse>;
  /** 停止镜像扫描 {@link ModifyAssetImageScanStopRequest} {@link ModifyAssetImageScanStopResponse} */
  ModifyAssetImageScanStop(data?: ModifyAssetImageScanStopRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAssetImageScanStopResponse>;
  /** 安全合规编辑定时任务 {@link ModifyCompliancePeriodTaskRequest} {@link ModifyCompliancePeriodTaskResponse} */
  ModifyCompliancePeriodTask(data: ModifyCompliancePeriodTaskRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCompliancePeriodTaskResponse>;
  /** 隔离容器网络状态 {@link ModifyContainerNetStatusRequest} {@link ModifyContainerNetStatusResponse} */
  ModifyContainerNetStatus(data: ModifyContainerNetStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyContainerNetStatusResponse>;
  /** 修改容器逃逸扫描事件状态 {@link ModifyEscapeEventStatusRequest} {@link ModifyEscapeEventStatusResponse} */
  ModifyEscapeEventStatus(data: ModifyEscapeEventStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyEscapeEventStatusResponse>;
  /** 修改容器逃逸扫描规则信息 {@link ModifyEscapeRuleRequest} {@link ModifyEscapeRuleResponse} */
  ModifyEscapeRule(data: ModifyEscapeRuleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyEscapeRuleResponse>;
  /** 修改逃逸白名单 {@link ModifyEscapeWhiteListRequest} {@link ModifyEscapeWhiteListResponse} */
  ModifyEscapeWhiteList(data: ModifyEscapeWhiteListRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyEscapeWhiteListResponse>;
  /** 批量授权镜像扫描V2.0 {@link ModifyImageAuthorizedRequest} {@link ModifyImageAuthorizedResponse} */
  ModifyImageAuthorized(data: ModifyImageAuthorizedRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyImageAuthorizedResponse>;
  /** 修改k8sapi异常事件状态 {@link ModifyK8sApiAbnormalEventStatusRequest} {@link ModifyK8sApiAbnormalEventStatusResponse} */
  ModifyK8sApiAbnormalEventStatus(data: ModifyK8sApiAbnormalEventStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyK8sApiAbnormalEventStatusResponse>;
  /** 修改k8sapi异常规则信息 {@link ModifyK8sApiAbnormalRuleInfoRequest} {@link ModifyK8sApiAbnormalRuleInfoResponse} */
  ModifyK8sApiAbnormalRuleInfo(data: ModifyK8sApiAbnormalRuleInfoRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyK8sApiAbnormalRuleInfoResponse>;
  /** 修改k8sapi异常事件规则状态 {@link ModifyK8sApiAbnormalRuleStatusRequest} {@link ModifyK8sApiAbnormalRuleStatusResponse} */
  ModifyK8sApiAbnormalRuleStatus(data: ModifyK8sApiAbnormalRuleStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyK8sApiAbnormalRuleStatusResponse>;
  /** 修改反弹shell事件状态 {@link ModifyReverseShellStatusRequest} {@link ModifyReverseShellStatusResponse} */
  ModifyReverseShellStatus(data: ModifyReverseShellStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyReverseShellStatusResponse>;
  /** 修改高危系统调用事件状态 {@link ModifyRiskSyscallStatusRequest} {@link ModifyRiskSyscallStatusResponse} */
  ModifyRiskSyscallStatus(data: ModifyRiskSyscallStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyRiskSyscallStatusResponse>;
  /** 修改安全日志清理设置信息 {@link ModifySecLogCleanSettingInfoRequest} {@link ModifySecLogCleanSettingInfoResponse} */
  ModifySecLogCleanSettingInfo(data: ModifySecLogCleanSettingInfoRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySecLogCleanSettingInfoResponse>;
  /** 更新安全日志-日志投递cls配置 {@link ModifySecLogDeliveryClsSettingRequest} {@link ModifySecLogDeliveryClsSettingResponse} */
  ModifySecLogDeliveryClsSetting(data: ModifySecLogDeliveryClsSettingRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySecLogDeliveryClsSettingResponse>;
  /** 更新安全日志投递kafka设置 {@link ModifySecLogDeliveryKafkaSettingRequest} {@link ModifySecLogDeliveryKafkaSettingResponse} */
  ModifySecLogDeliveryKafkaSetting(data?: ModifySecLogDeliveryKafkaSettingRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySecLogDeliveryKafkaSettingResponse>;
  /** 修改安全日志接入对象 {@link ModifySecLogJoinObjectsRequest} {@link ModifySecLogJoinObjectsResponse} */
  ModifySecLogJoinObjects(data: ModifySecLogJoinObjectsRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySecLogJoinObjectsResponse>;
  /** 修改安全日志接入状态 {@link ModifySecLogJoinStateRequest} {@link ModifySecLogJoinStateResponse} */
  ModifySecLogJoinState(data: ModifySecLogJoinStateRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySecLogJoinStateResponse>;
  /** 修改安全日志kafkaUIN {@link ModifySecLogKafkaUINRequest} {@link ModifySecLogKafkaUINResponse} */
  ModifySecLogKafkaUIN(data?: ModifySecLogKafkaUINRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySecLogKafkaUINResponse>;
  /** 修改木马自动隔离样本开关 {@link ModifyVirusAutoIsolateExampleSwitchRequest} {@link ModifyVirusAutoIsolateExampleSwitchResponse} */
  ModifyVirusAutoIsolateExampleSwitch(data: ModifyVirusAutoIsolateExampleSwitchRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyVirusAutoIsolateExampleSwitchResponse>;
  /** 修改木马自动隔离设置 {@link ModifyVirusAutoIsolateSettingRequest} {@link ModifyVirusAutoIsolateSettingResponse} */
  ModifyVirusAutoIsolateSetting(data: ModifyVirusAutoIsolateSettingRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyVirusAutoIsolateSettingResponse>;
  /** 运行时更新木马文件事件状态 {@link ModifyVirusFileStatusRequest} {@link ModifyVirusFileStatusResponse} */
  ModifyVirusFileStatus(data: ModifyVirusFileStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyVirusFileStatusResponse>;
  /** 运行时更新文件查杀实时监控设置 {@link ModifyVirusMonitorSettingRequest} {@link ModifyVirusMonitorSettingResponse} */
  ModifyVirusMonitorSetting(data: ModifyVirusMonitorSettingRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyVirusMonitorSettingResponse>;
  /** 运行时更新文件查杀设置 {@link ModifyVirusScanSettingRequest} {@link ModifyVirusScanSettingResponse} */
  ModifyVirusScanSetting(data: ModifyVirusScanSettingRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyVirusScanSettingResponse>;
  /** 运行时文件扫描超时设置 {@link ModifyVirusScanTimeoutSettingRequest} {@link ModifyVirusScanTimeoutSettingResponse} */
  ModifyVirusScanTimeoutSetting(data: ModifyVirusScanTimeoutSettingRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyVirusScanTimeoutSettingResponse>;
  /** 修改漏洞防御事件状态 {@link ModifyVulDefenceEventStatusRequest} {@link ModifyVulDefenceEventStatusResponse} */
  ModifyVulDefenceEventStatus(data: ModifyVulDefenceEventStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyVulDefenceEventStatusResponse>;
  /** 编辑漏洞防御设置 {@link ModifyVulDefenceSettingRequest} {@link ModifyVulDefenceSettingResponse} */
  ModifyVulDefenceSetting(data: ModifyVulDefenceSettingRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyVulDefenceSettingResponse>;
  /** 开通容器安全服务试用 {@link OpenTcssTrialRequest} {@link OpenTcssTrialResponse} */
  OpenTcssTrial(data?: OpenTcssTrialRequest, config?: AxiosRequestConfig): AxiosPromise<OpenTcssTrialResponse>;
  /** 删除单个镜像仓库详细信息 {@link RemoveAssetImageRegistryRegistryDetailRequest} {@link RemoveAssetImageRegistryRegistryDetailResponse} */
  RemoveAssetImageRegistryRegistryDetail(data: RemoveAssetImageRegistryRegistryDetailRequest, config?: AxiosRequestConfig): AxiosPromise<RemoveAssetImageRegistryRegistryDetailResponse>;
  /** 授权镜像扫描 {@link RenewImageAuthorizeStateRequest} {@link RenewImageAuthorizeStateResponse} */
  RenewImageAuthorizeState(data: RenewImageAuthorizeStateRequest, config?: AxiosRequestConfig): AxiosPromise<RenewImageAuthorizeStateResponse>;
  /** 重置安全日志主题设置 {@link ResetSecLogTopicConfigRequest} {@link ResetSecLogTopicConfigResponse} */
  ResetSecLogTopicConfig(data: ResetSecLogTopicConfigRequest, config?: AxiosRequestConfig): AxiosPromise<ResetSecLogTopicConfigResponse>;
  /** 安全合规重新检测选定的资产 {@link ScanComplianceAssetsRequest} {@link ScanComplianceAssetsResponse} */
  ScanComplianceAssets(data: ScanComplianceAssetsRequest, config?: AxiosRequestConfig): AxiosPromise<ScanComplianceAssetsResponse>;
  /** 安全合规用指定的检测项重新检测选定的资产 {@link ScanComplianceAssetsByPolicyItemRequest} {@link ScanComplianceAssetsByPolicyItemResponse} */
  ScanComplianceAssetsByPolicyItem(data: ScanComplianceAssetsByPolicyItemRequest, config?: AxiosRequestConfig): AxiosPromise<ScanComplianceAssetsByPolicyItemResponse>;
  /** 安全合规重新检测选定的检测项 {@link ScanCompliancePolicyItemsRequest} {@link ScanCompliancePolicyItemsResponse} */
  ScanCompliancePolicyItems(data: ScanCompliancePolicyItemsRequest, config?: AxiosRequestConfig): AxiosPromise<ScanCompliancePolicyItemsResponse>;
  /** 安全合规重新检测上次检测失败的资产 {@link ScanComplianceScanFailedAssetsRequest} {@link ScanComplianceScanFailedAssetsResponse} */
  ScanComplianceScanFailedAssets(data: ScanComplianceScanFailedAssetsRequest, config?: AxiosRequestConfig): AxiosPromise<ScanComplianceScanFailedAssetsResponse>;
  /** 设置检测模式和自动检查 {@link SetCheckModeRequest} {@link SetCheckModeResponse} */
  SetCheckMode(data: SetCheckModeRequest, config?: AxiosRequestConfig): AxiosPromise<SetCheckModeResponse>;
  /** 运行时停止木马查杀任务 {@link StopVirusScanTaskRequest} {@link StopVirusScanTaskResponse} */
  StopVirusScanTask(data: StopVirusScanTaskRequest, config?: AxiosRequestConfig): AxiosPromise<StopVirusScanTaskResponse>;
  /** 停止漏洞扫描任务 {@link StopVulScanTaskRequest} {@link StopVulScanTaskResponse} */
  StopVulScanTask(data?: StopVulScanTaskRequest, config?: AxiosRequestConfig): AxiosPromise<StopVulScanTaskResponse>;
  /** 编辑本地镜像自动授权开关 {@link SwitchImageAutoAuthorizedRuleRequest} {@link SwitchImageAutoAuthorizedRuleResponse} */
  SwitchImageAutoAuthorizedRule(data: SwitchImageAutoAuthorizedRuleRequest, config?: AxiosRequestConfig): AxiosPromise<SwitchImageAutoAuthorizedRuleResponse>;
  /** 镜像仓库资产刷新 {@link SyncAssetImageRegistryAssetRequest} {@link SyncAssetImageRegistryAssetResponse} */
  SyncAssetImageRegistryAsset(data?: SyncAssetImageRegistryAssetRequest, config?: AxiosRequestConfig): AxiosPromise<SyncAssetImageRegistryAssetResponse>;
  /** 容器网络创建网络策略更新并发布任务 {@link UpdateAndPublishNetworkFirewallPolicyDetailRequest} {@link UpdateAndPublishNetworkFirewallPolicyDetailResponse} */
  UpdateAndPublishNetworkFirewallPolicyDetail(data: UpdateAndPublishNetworkFirewallPolicyDetailRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateAndPublishNetworkFirewallPolicyDetailResponse>;
  /** 容器网络更新Yaml网络策略并发布任务 {@link UpdateAndPublishNetworkFirewallPolicyYamlDetailRequest} {@link UpdateAndPublishNetworkFirewallPolicyYamlDetailResponse} */
  UpdateAndPublishNetworkFirewallPolicyYamlDetail(data: UpdateAndPublishNetworkFirewallPolicyYamlDetailRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateAndPublishNetworkFirewallPolicyYamlDetailResponse>;
  /** 更新单个镜像仓库详细信息 {@link UpdateAssetImageRegistryRegistryDetailRequest} {@link UpdateAssetImageRegistryRegistryDetailResponse} */
  UpdateAssetImageRegistryRegistryDetail(data: UpdateAssetImageRegistryRegistryDetailRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateAssetImageRegistryRegistryDetailResponse>;
  /** 镜像仓库更新定时任务 {@link UpdateImageRegistryTimingScanTaskRequest} {@link UpdateImageRegistryTimingScanTaskResponse} */
  UpdateImageRegistryTimingScanTask(data: UpdateImageRegistryTimingScanTaskRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateImageRegistryTimingScanTaskResponse>;
  /** 容器网络创建网络策略更新任务 {@link UpdateNetworkFirewallPolicyDetailRequest} {@link UpdateNetworkFirewallPolicyDetailResponse} */
  UpdateNetworkFirewallPolicyDetail(data: UpdateNetworkFirewallPolicyDetailRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateNetworkFirewallPolicyDetailResponse>;
  /** 容器网络更新Yaml网络策略任务 {@link UpdateNetworkFirewallPolicyYamlDetailRequest} {@link UpdateNetworkFirewallPolicyYamlDetailResponse} */
  UpdateNetworkFirewallPolicyYamlDetail(data: UpdateNetworkFirewallPolicyYamlDetailRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateNetworkFirewallPolicyYamlDetailResponse>;
}

export declare type Versions = ["2020-11-01"];

export default Tcss;
