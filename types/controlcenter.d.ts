/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 账号工厂基线项 */
declare interface AccountFactoryItem {
  /** 账号工厂基线项唯一标识，只能包含英文字母、数字和@、,._[]-:()（）【】+=，。，长度2-128个字符。 */
  Identifier?: string;
  /** 基线项名称，功能项名字唯一，仅支持英文字母、数宇、汉字、符号@、＆_[]-的组合，1-25个中文或英文字符。 */
  Name?: string;
  /** 基线项英文名称，基线项名字唯一，仅支持英文字母、数字、空格、符号@、＆_[]-的组合，1-64个英文字符。 */
  NameEn?: string;
  /** 基线项权重，数值小权重越高，取值范围大于等于0。 */
  Weight?: number;
  /** 基线项是否必填，1必填，0非必填 */
  Required?: number;
  /** 基线项依赖项，N的取值范围与该基线项依赖的其它基线项个数有关。 */
  DependsOn?: DependsOnItem[];
  /** 基线描述，长度为2~256个英文或中文字符，默认值为空。 */
  Description?: string;
  /** 基线项英文描述，长度为2~1024个英文字符，默认值为空。 */
  DescriptionEn?: string;
  /** 基线分类，长度为2~32个英文或中文字符，不能为空。 */
  Classify?: string;
  /** 基线英文分类，长度为2~64个英文字符，不能为空。 */
  ClassifyEn?: string;
}

/** 账号工厂基线配置项 */
declare interface BaselineConfigItem {
  /** 账号工厂基线项唯一标识,只能包含英文字母、数字和@、,._[]-:()（）【】+=，。，长度2-128个字符。 */
  Identifier?: string;
  /** 账号工厂基线项配置，不同基线项配置参数不同。 */
  Configuration?: string;
}

/** 账号工厂基线信息 */
declare interface BaselineInfoItem {
  /** 账号工厂基线项唯一标识，只能包含英文字母、数字和@、,._[]-:()（）【】+=，。，长度2-128个字符。 */
  Identifier?: string;
  /** 账号工厂基线项配置，不同的基线项配置参数不同。 */
  Configuration?: string;
  /** 基线应用的账号数量。 */
  ApplyCount?: number;
}

/** 基线项部署任务信息列表 */
declare interface BaselineStepTaskInfo {
  /** 任务唯一Id，只能包含英文字母、数字，是16个字符的随机字符串。 */
  TaskId?: string;
  /** 基线功能项唯一标识，只能包含英文字母、数字和@、,._[]-:()（）【】+=，。，长度2-128个字符。 */
  Identifier?: string;
  /** 被应用基线项的成员账号uin */
  MemberUin?: number;
  /** 基线项应用的状态,Running表示基线项应用中,Success表示基线项应用成功,Failed表示基线项应用失败,Pending表示基线项待应用,Skipped表示基线项被跳过 */
  Status?: string;
  /** 错误码 */
  ErrCode?: string;
  /** 错误信息 */
  ErrMessage?: string;
  /** 基线项部署输出 */
  Output?: string;
  /** 创建时间，按照ISO8601标准表示，格式为yyyy-MM-dd hh:mm:ss。 */
  CreateTime?: string;
  /** 更新时间，按照ISO8601标准表示，格式为yyyy-MM-dd hh:mm:ss。 */
  UpdateTime?: string;
}

/** 依赖项 */
declare interface DependsOnItem {
  /** 依赖项类型，只有LandingZoneSetUp或AccountFactorySetUp。LandingZoneSetUp表示landingZone的依赖项；AccountFactorySetUp表示账号工厂的依赖项 */
  Type?: string;
  /** 功能项唯一标识，只能包含英文字母、数字和@、,._[]-:()（）【】+=，。，长度2-128个字符。 */
  Identifier?: string;
}

declare interface BatchApplyAccountBaselinesRequest {
  /** 成员账号uin，也是被应用基线的账号uin。 */
  MemberUinList: number[];
  /** 基线项配置信息列表。 */
  BaselineConfigItems: BaselineConfigItem[];
}

declare interface BatchApplyAccountBaselinesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetAccountFactoryBaselineRequest {
}

declare interface GetAccountFactoryBaselineResponse {
  /** 资源所属主账号uin。 */
  OwnerUin?: number;
  /** 基线项名称，基线项名字唯一，仅支持英文字母、数宇、汉字、符号@、＆_[]-的组合，1-25个中文或英文字符。 */
  Name?: string;
  /** 基线项配置列表。 */
  BaselineConfigItems?: BaselineInfoItem[];
  /** 创建时间，按照ISO8601标准表示，格式为yyyy-MM-dd hh:mm:ss。 */
  CreateTime?: string;
  /** 更新时间，按照ISO8601标准表示，格式为yyyy-MM-dd hh:mm:ss。 */
  UpdateTime?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListAccountFactoryBaselineItemsRequest {
  /** 返回记录最大数目,取值范围0~200。 */
  Limit: number;
  /** 偏移量，取值范围大于等于0。 */
  Offset: number;
}

declare interface ListAccountFactoryBaselineItemsResponse {
  /** 账号工厂基线列表。1. TCC-AF_ACCOUNT_CONTACT 账号联系人该基线项用于在成员账号下创建消息接收人（联系人）。字段 类型 必填 默认值 取值范围与说明AccountContacts 对象数组 是 无 联系人列表，最多 50 个，不能为空AccountContacts[].Name 字符串 是 无 联系人名称，需为账号中已存在的名称；同一列表内不可重复；无固定格式限制AccountContacts[].CountryCode 字符串 是 无 手机号区号，如 86；无固定枚举AccountContacts[].PhoneNum 字符串 是 无 手机号，需完成验证后方可应用该基线项；格式由验证流程判定，无本地格式限制AccountContacts[].Email 字符串 是 无 邮箱，需完成验证后方可应用该基线项；格式由验证流程判定，无本地格式限制AccountContacts[].Remark 字符串 否 无 备注，无长度限制说明{ "AccountContacts": [ { "Name": "ops-admin", "CountryCode": "86", "PhoneNum": "13800***000", "Email": "ops@ex***le.com", "Remark": "运维联系人" } ]}2. TCC-AF_ACCOUNT_NOTIFICATION 消息接收人国内站：字段 类型 必填 默认值 取值范围与说明Subscriptions 对象数组 是 无 订阅关系列表，建议不超过 50 条；超过时分批处理，不会因条数被拒绝Subscriptions[].Name 字符串 是 无 单个子用户名；请填写已存在的子用户名，否则该条订阅不生效Subscriptions[].ProductId 整数 是 无 产品 ID，无固定枚举，通过 DescribeProductIds 查询Subscriptions[].MsgType 整数 是 无 消息类型 ID，无固定枚举，通过 DescribeFirstSiteMsgType、DescribeSecondMsgType 查询Subscriptions[].Channel 整数 是 无 消息发送通道，位掩码，取值见下表Subscriptions[].Status 字符串 是 无 仅 Open、Close；只有 Open 会建立订阅，Close 或其他值均不生效Channel 位掩码：通道 值站内信1邮件 2短信 4微信 8（国际站暂无）语音 16企业微信 32（国际站暂无）渠道组合 值站内信+邮件 3站内信+短信 5邮件+短信 6站内信+邮件+短信 7国际站字段：字段 类型 必填 默认值 取值范围与说明Subscriptions 对象数组 是 无 订阅关系列表，建议不超过 50 条；超过时分批处理，不会因条数被拒绝Subscriptions[].Name 字符串数组 是 无 子用户名列表；请填写已存在的子用户名，名称会去重Subscriptions[].MsgType 整数 是 无 消息类型 ID，无固定枚举，通过 DescribeFirstSiteMsgType、DescribeSecondMsgType 查询Subscriptions[].Channel 整数 是 无 消息发送通道，位掩码，取值同上表国内站示例：{ "Subscriptions": [ { "Name": "ops-admin", "ProductId": 1001, "MsgType": 2001, "Channel": 3, "Status": "Open" } ]}国际站示例：{ "Subscriptions": [ { "Name": ["ops-admin", "audit"], "MsgType": 2001, "Channel": 6 } ]}3. TCC-AF_CAM_USER_PASSWORD_POLICY CAM 密码策略字段 类型 必填 默认值 取值范围与说明MinimumLength 整数 是 无 密码最小长度，无固定枚举和上下限说明，取值是否有效由 CAM 密码策略判定MustContain 字符串 是 无 密码必须包含的字符，无固定枚举和合法字符集说明，取值是否有效由 CAM 密码策略判定ForcePasswordChange 整数 是 无 强制修改密码周期，无固定枚举和单位说明，取值是否有效由 CAM 密码策略判定ReusePasswordLimit 整数 是 无 密码重复使用限制，无固定枚举和上下限说明，取值是否有效由 CAM 密码策略判定RetryPasswordLimit 整数 是 无 密码重试次数限制，无固定枚举和上下限说明，取值是否有效由 CAM 密码策略判定OnlyAdminCanResetPassword 整数 是 无 是否只允许管理员重置密码，无固定枚举说明，取值是否有效由 CAM 密码策略判定{ "MinimumLength": 19, "MustContain": "A", "ForcePasswordChange": 0, "ReusePasswordLimit": 2, "RetryPasswordLimit": 1, "OnlyAdminCanResetPassword": 0}4. TCC-AF_CAM_USER_SECURITY CAM 用户安全设置字段 类型 必填 默认值 取值范围与说明DefaultMFASettings 对象 是 无 登录与操作保护设置DefaultMFASettings.LoginStrategy 整数 是 无 1 强制所有用户校验；2 依赖用户单独设置项DefaultMFASettings.ActionStrategy 整数 是 无 1 强制所有用户校验；2 依赖用户单独设置项；本基线项必须填写 2DefaultMFASettings.LoginDetail 字符串数组 是 无 可选项：Stoken、Phone、Wechat、U2FToken、Mail；必须包含 StokenLoginStatusSettings 对象 是 无 会话时长设置LoginStatusSettings.SessionTimeout 整数 否 无 会话超时时间，单位秒；无固定上下限说明，取值是否有效由 CAM 判定LoginStatusSettings.IdleSessionTimeout 整数 否 无 空闲会话超时时间，单位秒；无固定上下限说明，取值是否有效由 CAM 判定{ "DefaultMFASettings": { "LoginStrategy": 1, "ActionStrategy": 2, "LoginDetail": ["Stoken", "Phone"] }, "LoginStatusSettings": { "SessionTimeout": 7200, "IdleSessionTimeout": 900 }}5. TCC-AF_VPC_SUBNET VPC 与子网字段 类型 必填 默认值 取值范围与说明VpcName 字符串 是 无 VPC 名称，最大 60 字节CidrBlock 字符串 是 无 VPC 网段，仅支持 10.0.0.0/12、172.16.0.0/12、192.168.0.0/16 三个内网网段内的地址RegionName 字符串 是 无 地域，按「地域、可用区与动态取值怎么填」填写；本基线项的地域由此字段指定Subnets 对象数组 否 无 子网列表；不填或为空时只创建 VPC，不创建子网Subnets[].CidrBlock 字符串 是 无 子网网段，须在 CidrBlock 范围内，且同一 VPC 内各子网网段不能重叠Subnets[].SubnetName 字符串 是 无 子网名称，最大 60 字节Subnets[].Zone 字符串 是 无 可用区，形如 ap-guangzhou-2；无固定枚举，通过 DescribeZones 查询{ "VpcName": "af-vpc", "CidrBlock": "10.0.0.0/16", "RegionName": "ap-guangzhou", "Subnets": [ { "CidrBlock": "10.0.1.0/24", "SubnetName": "af-subnet-1", "Zone": "ap-guangzhou-2" } ]}6. TCC-AF_SECURITY_GROUP 安全组字段 类型 必填 默认值 取值范围与说明GroupName 字符串 是 无 安全组名称，不超过 60 个字符GroupDescription 字符串 否 无 安全组描述，最多 100 个字符Region 字符串 是 无 地域，按「地域、可用区与动态取值怎么填」填写SecurityGroupPolicySet 对象 是 无 安全组规则集SecurityGroupPolicySet.Ingress 对象数组 否 无 入站规则列表SecurityGroupPolicySet.Egress 对象数组 否 无 出站规则列表Ingress[].Protocol、Egress[].Protocol 字符串 是 无 TCP、UDP、ICMP、ICMPv6、ALLIngress[].Port、Egress[].Port 字符串 是 无 all、单个端口或端口范围（如 80、80-90）；Protocol 为 ALL 时必须填 allIngress[].Action、Egress[].Action 字符串 是 无 ACCEPT 允许流量；DROP 丢弃流量Ingress[].CidrBlock、Egress[].CidrBlock 字符串 否 无 IPv4 网段或 IP，如 10.0.0.0/16、0.0.0.0/0；与 Ipv6CidrBlock 互斥Ingress[].Ipv6CidrBlock、Egress[].Ipv6CidrBlock 字符串 否 无 暂不支持，请勿填写Ingress[].SecurityGroupId、Egress[].SecurityGroupId 字符串 否 无 引用的安全组 ID，形如 sg-ohuuioma；无固定枚举，由资源列表查询Ingress[].AddressTemplate.AddressId 字符串 否 无 IP 地址模板 ID，形如 ipm-2uw6ujo6；使用地址模板时与 AddressGroupId 需同时填写Ingress[].AddressTemplate.AddressGroupId 字符串 否 无 IP 地址组 ID，形如 ipmg-2uw6ujo6；使用地址模板时与 AddressId 需同时填写Ingress[].PolicyDescription、Egress[].PolicyDescription 字符串 否 无 规则描述，无长度限制说明，取值是否有效由云产品判定{ "GroupName": "af-sg", "GroupDescription": "account factory baseline", "Region": "ap-guangzhou", "SecurityGroupPolicySet": { "Ingress": [ { "Protocol": "TCP", "Port": "22", "CidrBlock": "10.0.0.0/16", "Action": "ACCEPT", "PolicyDescription": "ssh" }, { "Protocol": "TCP", "Port": "443", "AddressTemplate": { "AddressId": "ipm-2uw6ujo6", "AddressGroupId": "ipmg-2uw6ujo6" }, "Action": "ACCEPT" } ], "Egress": [ { "Protocol": "ALL", "Port": "all", "CidrBlock": "0.0.0.0/0", "Action": "ACCEPT", "PolicyDescription": "allow all" } ] }}7. TCC-AF_PRESET_TAG 预设标签字段 类型 必填 默认值 取值范围与说明TagValuePairs 对象数组 是 无 标签键值对列表TagValuePairs[].Key 字符串 是 无 标签键，无固定长度和字符限制说明，取值是否有效由标签服务判定TagValuePairs[].Values 字符串数组 是 无 该键对应的标签值列表；无固定长度和字符限制说明，取值是否有效由标签服务判定约束：数组总数不得超过 30 个{ "TagValuePairs": [ { "Key": "env", "Values": ["prod", "dev"] }, { "Key": "owner", "Values": ["ops"] } ]}8. TCC-AF_SHARE_IMAGE 共享镜像字段 类型 必填 默认值 取值范围与说明Images 对象数组 是 无 待共享的镜像列表，无数量上限说明Images[].Region 字符串 是 无 镜像所在地域，按「地域、可用区与动态取值怎么填」填写Images[].ImageId 字符串 是 无 镜像 ID，形如 img-gvbnzy6f；无固定枚举，通过 DescribeImages 或控制台查询，镜像需处于可用状态{ "Images": [ { "Region": "ap-guangzhou", "ImageId": "img-gvbnzy6f" } ]} */
  BaselineItems?: AccountFactoryItem[];
  /** 总数。 */
  Total?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListDeployStepTasksRequest {
  /** 功能项唯一标识，只能包含英文字母、数字和@、,._[]-:()（）【】+=，。，长度2-128个字符。 */
  Identifier: string;
  /** 返回记录最大数目,取值范围0~200。 */
  Limit: number;
  /** 偏移量，取值范围大于等于0。 */
  Offset: number;
}

declare interface ListDeployStepTasksResponse {
  /** 账号工厂基线功能项应用信息列表。 */
  BaselineDeployStepTaskList?: BaselineStepTaskInfo[];
  /** 总数。 */
  Total?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateAccountFactoryBaselineRequest {
  /** 基线名称，基线名字唯一，仅支持英文字母、数宇、汉字、符号@、＆_[]-的组合，1-25个中文或英文字符。 */
  Name: string;
  /** 基线配置，覆盖更新。可以通过controlcenter:GetAccountFactoryBaseline查询现有基线配置。可以通过controlcenter:ListAccountFactoryBaselineItems查询支持的基线列表。 */
  BaselineConfigItems?: BaselineConfigItem[];
}

declare interface UpdateAccountFactoryBaselineResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Controlcenter 控制中心} */
declare interface Controlcenter {
  (): Versions;
  /** 批量对存量账号应用基线 {@link BatchApplyAccountBaselinesRequest} {@link BatchApplyAccountBaselinesResponse} */
  BatchApplyAccountBaselines(data: BatchApplyAccountBaselinesRequest, config?: AxiosRequestConfig): AxiosPromise<BatchApplyAccountBaselinesResponse>;
  /** 获取用户基线配置数据 {@link GetAccountFactoryBaselineRequest} {@link GetAccountFactoryBaselineResponse} */
  GetAccountFactoryBaseline(data?: GetAccountFactoryBaselineRequest, config?: AxiosRequestConfig): AxiosPromise<GetAccountFactoryBaselineResponse>;
  /** 获取账号工厂系统基线项 {@link ListAccountFactoryBaselineItemsRequest} {@link ListAccountFactoryBaselineItemsResponse} */
  ListAccountFactoryBaselineItems(data: ListAccountFactoryBaselineItemsRequest, config?: AxiosRequestConfig): AxiosPromise<ListAccountFactoryBaselineItemsResponse>;
  /** 获取某个基线项历史应用信息 {@link ListDeployStepTasksRequest} {@link ListDeployStepTasksResponse} */
  ListDeployStepTasks(data: ListDeployStepTasksRequest, config?: AxiosRequestConfig): AxiosPromise<ListDeployStepTasksResponse>;
  /** 更新用户基线项配置 {@link UpdateAccountFactoryBaselineRequest} {@link UpdateAccountFactoryBaselineResponse} */
  UpdateAccountFactoryBaseline(data: UpdateAccountFactoryBaselineRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateAccountFactoryBaselineResponse>;
}

export declare type Versions = ["2023-01-10"];

export default Controlcenter;
