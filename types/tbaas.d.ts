/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** Bcos区块对象 */
declare interface BcosBlockObj {
  /** 区块哈希 */
  BlockHash: string;
  /** 区块高度 */
  BlockNumber: number;
  /** 区块时间戳 */
  BlockTimestamp: string;
  /** 打包节点ID */
  Sealer: string;
  /** 打包节点索引 */
  SealerIndex: number;
  /** 记录保存时间 */
  CreateTime: string;
  /** 交易数量 */
  TransCount: number;
  /** 记录修改时间 */
  ModifyTime: string;
}

/** Bcos交易信息对象 */
declare interface BcosTransInfo {
  /** 所属区块高度 */
  BlockNumber: number;
  /** 区块时间戳 */
  BlockTimestamp: string;
  /** 交易哈希 */
  TransHash: string;
  /** 交易发起者 */
  TransFrom: string;
  /** 交易接收者 */
  TransTo: string;
  /** 落库时间 */
  CreateTime: string;
  /** 修改时间 */
  ModifyTime: string;
}

/** 区块对象 */
declare interface Block {
  /** 区块编号 */
  BlockNum: number;
  /** 区块数据Hash数值 */
  DataHash: string;
  /** 区块ID，与区块编号一致 */
  BlockId: number;
  /** 前一个区块Hash */
  PreHash: string;
  /** 区块内的交易数量 */
  TxCount: number;
}

/** 长安链合约执行结果 */
declare interface ChainMakerContractResult {
  /** 交易结果码 */
  Code: number;
  /** 交易结果码含义 */
  CodeMessage: string | null;
  /** 交易ID */
  TxId: string | null;
  /** Gas使用量 */
  GasUsed: number | null;
  /** 合约返回消息 */
  Message: string | null;
  /** 合约函数返回，base64编码 */
  Result: string | null;
}

/** 长安链交易查询结果 */
declare interface ChainMakerTransactionResult {
  /** 交易结果码 */
  Code: number;
  /** 交易结果码含义 */
  CodeMessage: string | null;
  /** 交易ID */
  TxId: string | null;
  /** Gas使用量 */
  GasUsed: number | null;
  /** 区块高度 */
  BlockHeight: number | null;
  /** 合约执行结果 */
  ContractEvent: string | null;
  /** 合约返回信息 */
  Message: string | null;
  /** 交易时间，单位是秒 */
  Timestamp: number | null;
}

/** 通道详情信息 */
declare interface ChannelDetailForUser {
  /** 通道名称 */
  ChannelName: string;
  /** 当前组织加入通道的节点列表 */
  PeerList: PeerDetailForUser[];
}

/** 网络详情信息 */
declare interface ClusterDetailForUser {
  /** 网络ID */
  ClusterId: string;
  /** 组织列表 */
  GroupList: GroupDetailForUser[];
  /** 网络名称 */
  ClusterName: string;
}

/** 背书组织及其节点列表 */
declare interface EndorserGroup {
  /** 背书组织名称 */
  EndorserGroupName: string;
  /** 背书节点列表 */
  EndorserPeerList: string[];
}

/** 组织详情信息 */
declare interface GroupDetailForUser {
  /** 组织名称 */
  GroupName: string;
  /** 组织MSP Identity */
  GroupMSPId: string;
}

/** 日志详情信息 */
declare interface LogDetailForUser {
  /** 日志行号 */
  LineNumber: number;
  /** 日志详情 */
  LogMessage: string;
}

/** 节点详情信息 */
declare interface PeerDetailForUser {
  /** 节点名称 */
  PeerName: string;
}

/** PeerSet */
declare interface PeerSet {
  /** 节点名称 */
  PeerName: string;
  /** 组织名称 */
  OrgName: string;
}

/** 用于申请用户签名证书的结构体 */
declare interface SignCertCsr {
  /** 用户签名证书的标识，会存在于用户申请的证书中 */
  CertMark: string;
  /** 用户申请签名证书所需要的证书请求文件的base64编码 */
  SignCsrContent: string;
}

/** 交易列表项信息 */
declare interface TransactionItem {
  /** 交易ID */
  TransactionId: string;
  /** 交易hash */
  TransactionHash: string;
  /** 创建交易的组织名 */
  CreateOrgName: string;
  /** 交易所在区块号 */
  BlockId: number;
  /** 交易类型（普通交易和配置交易） */
  TransactionType: string;
  /** 交易创建时间 */
  CreateTime: string;
  /** 交易所在区块高度 */
  BlockHeight: number;
  /** 交易状态 */
  TransactionStatus: string;
}

declare interface ApplyChainMakerBatchUserCertRequest {
  /** 网络ID，可在区块链网络详情或列表中获取 */
  ClusterId: string;
  /** 证书标识和证书请求文件，可参考TBaaS证书生成相关文档生成证书请求文件 */
  SignUserCsrList: SignCertCsr[];
}

declare interface ApplyChainMakerBatchUserCertResponse {
  /** 成功生成的用户证书的base64编码字符串列表，与SignUserCsrList一一对应 */
  SignUserCrtList: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ApplyUserCertRequest {
  /** 模块名，固定字段：cert_mng */
  Module: string;
  /** 操作名，固定字段：cert_apply_for_user */
  Operation: string;
  /** 区块链网络ID，可在区块链网络详情或列表中获取 */
  ClusterId: string;
  /** 申请证书的组织名称，可以在组织管理列表中获取当前组织的名称 */
  GroupName: string;
  /** 用户证书标识，用于标识用户证书，要求由纯小写字母组成，长度小于10 */
  UserIdentity: string;
  /** 证书申请实体，使用腾讯云账号实名认证的名称 */
  Applicant: string;
  /** 证件号码。如果腾讯云账号对应的实名认证类型为企业认证，填入“0”；如果腾讯云账号对应的实名认证类型为个人认证，填入个人身份证号码 */
  IdentityNum: string;
  /** csr p10证书文件。需要用户根据文档生成证书的CSR文件 */
  CsrData: string;
  /** 证书备注信息 */
  Notes?: string;
}

declare interface ApplyUserCertResponse {
  /** 证书ID */
  CertId?: number;
  /** 证书DN */
  CertDn?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateChaincodeAndInstallForUserRequest {
  /** 模块名，本接口取值：chaincode_mng */
  Module: string;
  /** 操作名，本接口取值：chaincode_create_and_install_for_user */
  Operation: string;
  /** 区块链网络ID，可在区块链网络详情或列表中获取 */
  ClusterId: string;
  /** 调用合约的组织名称，可以在组织管理列表中获取当前组织的名称 */
  GroupName: string;
  /** 合约安装节点名称，可以在通道详情中获取该通道上的节点名称 */
  PeerName: string;
  /** 智能合约名称，格式说明：以小写字母开头，由2-12位数字或小写字母组成 */
  ChaincodeName: string;
  /** 智能合约版本，格式说明：由1-12位数字、小写字母、特殊符号(“.”)组成，如v1.0 */
  ChaincodeVersion: string;
  /** 智能合约代码文件类型，支持类型：1. "go"：.go合约文件2. "gozip"：go合约工程zip包，要求压缩目录为代码根目录3. "javazip"：java合约工程zip包，要求压缩目录为代码根目录4. "nodezip"：nodejs合约工程zip包，要求压缩目录为代码根目录 */
  ChaincodeFileType: string;
  /** 合约内容，合约文件或压缩包内容的base64编码，大小要求小于等于5M */
  Chaincode: string;
}

declare interface CreateChaincodeAndInstallForUserResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeployDynamicBcosContractRequest {
  /** 网络ID，可在区块链网络详情或列表中获取 */
  ClusterId: string;
  /** 群组编号，可在群组列表中获取 */
  GroupId: number;
  /** 合约编译后的ABI，可在合约详情获取 */
  AbiInfo: string;
  /** 合约编译得到的字节码，hex编码，可在合约详情获取 */
  ByteCodeBin: string;
  /** 签名用户编号，可在私钥管理页面获取 */
  SignUserId: string;
  /** 构造函数入参，Json数组，多个参数以逗号分隔（参数为数组时同理），如：["str1",["arr1","arr2"]] */
  ConstructorParams?: string;
}

declare interface DeployDynamicBcosContractResponse {
  /** 部署成功返回的合约地址 */
  ContractAddress: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DownloadUserCertRequest {
  /** 模块名，固定字段：cert_mng */
  Module: string;
  /** 操作名，固定字段：cert_download_for_user */
  Operation: string;
  /** 证书ID，可以在证书详情页面获取 */
  CertId: number;
  /** 证书DN，可以在证书详情页面获取 */
  CertDn: string;
  /** 区块链网络ID，可在区块链网络详情或列表中获取 */
  ClusterId: string;
  /** 下载证书的组织名称，可以在组织管理列表中获取当前组织的名称 */
  GroupName: string;
}

declare interface DownloadUserCertResponse {
  /** 证书名称 */
  CertName?: string;
  /** 证书内容 */
  CertCtx?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetBcosBlockByNumberRequest {
  /** 网络ID，可在区块链网络详情或列表中获取 */
  ClusterId: string;
  /** 群组编号，可在群组列表中获取 */
  GroupId: number;
  /** 区块高度，可以从InvokeBcosTrans接口的返回值中解析获取 */
  BlockNumber: number;
}

declare interface GetBcosBlockByNumberResponse {
  /** 返回区块json字符串 */
  BlockJson: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetBcosBlockListRequest {
  /** 网络ID，可在区块链网络详情或列表中获取 */
  ClusterId: string;
  /** 群组编号，可在群组列表中获取 */
  GroupId: number;
  /** 当前页数，默认为1 */
  PageNumber?: number;
  /** 每页记录数，默认为10 */
  PageSize?: number;
  /** 区块高度，可以从InvokeBcosTrans接口的返回值中解析获取 */
  BlockNumber?: number;
  /** 区块哈希，可以从InvokeBcosTrans接口的返回值中解析获取 */
  BlockHash?: string;
}

declare interface GetBcosBlockListResponse {
  /** 总记录数 */
  TotalCount: number;
  /** 返回数据列表 */
  List: BcosBlockObj[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetBcosTransByHashRequest {
  /** 网络ID，可在区块链网络详情或列表中获取 */
  ClusterId: string;
  /** 群组编号，可在群组列表中获取 */
  GroupId: number;
  /** 交易哈希值，可以从InvokeBcosTrans接口的返回值中解析获取 */
  TransHash: string;
}

declare interface GetBcosTransByHashResponse {
  /** 交易信息json字符串 */
  TransactionJson: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetBcosTransListRequest {
  /** 网络ID，可在区块链网络详情或列表中获取 */
  ClusterId: string;
  /** 群组编号，可在群组列表中获取 */
  GroupId: number;
  /** 当前页数，默认是1 */
  PageNumber?: number;
  /** 每页记录数，默认为10 */
  PageSize?: number;
  /** 区块高度，可以从InvokeBcosTrans接口的返回值中解析获取 */
  BlockNumber?: number;
  /** 交易哈希，可以从InvokeBcosTrans接口的返回值中解析获取 */
  TransHash?: string;
}

declare interface GetBcosTransListResponse {
  /** 总记录数 */
  TotalCount: number;
  /** 返回数据列表 */
  List: BcosTransInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetBlockListRequest {
  /** 模块名称，固定字段：block */
  Module: string;
  /** 操作名称，固定字段：block_list */
  Operation: string;
  /** 通道ID，固定字段：0 */
  ChannelId: number;
  /** 组织ID，固定字段：0 */
  GroupId: number;
  /** 需要查询的通道名称，可在通道详情或列表中获取 */
  ChannelName: string;
  /** 调用接口的组织名称，可以在组织管理列表中获取当前组织的名称 */
  GroupName: string;
  /** 区块链网络ID，可在区块链网络详情或列表中获取 */
  ClusterId: string;
  /** 需要获取的起始交易偏移 */
  Offset?: number;
  /** 需要获取的交易数量 */
  Limit?: number;
}

declare interface GetBlockListResponse {
  /** 区块数量 */
  TotalCount?: number;
  /** 区块列表 */
  BlockList?: Block[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetBlockTransactionListForUserRequest {
  /** 模块名，固定字段：transaction */
  Module: string;
  /** 操作名，固定字段：block_transaction_list_for_user */
  Operation: string;
  /** 区块链网络ID，可在区块链网络详情或列表中获取 */
  ClusterId: string;
  /** 参与交易的组织名称，可以在组织管理列表中获取当前组织的名称 */
  GroupName: string;
  /** 业务所属通道名称，可在通道详情或列表中获取 */
  ChannelName: string;
  /** 区块ID，通过GetInvokeTx接口可以获取交易所在的区块ID */
  BlockId: number;
  /** 查询的交易列表起始偏移地址 */
  Offset?: number;
  /** 查询的交易列表数量 */
  Limit?: number;
}

declare interface GetBlockTransactionListForUserResponse {
  /** 交易总数量 */
  TotalCount?: number;
  /** 交易列表 */
  TransactionList?: TransactionItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetChaincodeCompileLogForUserRequest {
  /** 模块名，本接口取值：chaincode_mng */
  Module: string;
  /** 操作名，本接口取值：chaincode_compile_log_for_user */
  Operation: string;
  /** 区块链网络ID，可在区块链网络详情或列表中获取 */
  ClusterId: string;
  /** 调用合约的组织名称 */
  GroupName: string;
  /** 业务所属智能合约名称 */
  ChaincodeName: string;
  /** 业务所属智能合约版本 */
  ChaincodeVersion: string;
  /** 合约安装节点名称，可以在通道详情中获取该通道上的节点名称 */
  PeerName: string;
  /** 返回数据项数，本接口默认取值：10 */
  Limit?: number;
  /** 返回数据起始偏移，本接口默认取值：0 */
  Offset?: number;
}

declare interface GetChaincodeCompileLogForUserResponse {
  /** 日志总行数，上限2000条日志 */
  TotalCount?: number;
  /** 日志列表 */
  CompileLogList?: LogDetailForUser[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetChaincodeInitializeResultForUserRequest {
  /** 模块名，本接口取值：chaincode_mng */
  Module: string;
  /** 操作名，本接口取值：chaincode_init_result_for_user */
  Operation: string;
  /** 区块链网络ID，可在区块链网络详情或列表中获取 */
  ClusterId: string;
  /** 调用合约的组织名称 */
  GroupName: string;
  /** 业务所属通道名称 */
  ChannelName: string;
  /** 业务所属合约名称 */
  ChaincodeName: string;
  /** 业务所属智能合约版本 */
  ChaincodeVersion: string;
  /** 实例化任务ID */
  TaskId: number;
}

declare interface GetChaincodeInitializeResultForUserResponse {
  /** 实例化结果：0，实例化中；1，实例化成功；2，实例化失败 */
  InitResult?: number;
  /** 实例化信息 */
  InitMessage?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetChaincodeLogForUserRequest {
  /** 模块名，本接口取值：chaincode_mng */
  Module: string;
  /** 操作名，本接口取值：chaincode_log_for_user */
  Operation: string;
  /** 区块链网络ID，可在区块链网络详情或列表中获取 */
  ClusterId: string;
  /** 调用合约的组织名称 */
  GroupName: string;
  /** 业务所属智能合约名称 */
  ChaincodeName: string;
  /** 业务所属智能合约版本 */
  ChaincodeVersion: string;
  /** 合约安装节点名称，可以在通道详情中获取该通道上的节点名称 */
  PeerName: string;
  /** 日志开始时间，如"2020-11-24 19:49:25" */
  BeginTime: string;
  /** 返回日志行数的最大值，系统设定该参数最大为1000，且一行日志的最大字节数是500，即最大返回50万个字节数的日志数据 */
  RowNum: number;
}

declare interface GetChaincodeLogForUserResponse {
  /** 返回日志总行数，不会超过入参的RowNum */
  TotalCount: number;
  /** 日志列表 */
  ChaincodeLogList: LogDetailForUser[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetChannelListForUserRequest {
  /** 模块名，本接口取值：channel_mng */
  Module: string;
  /** 操作名，本接口取值：channel_list_for_user */
  Operation: string;
  /** 区块链网络ID，可在区块链网络详情或列表中获取 */
  ClusterId: string;
  /** 组织名称 */
  GroupName: string;
  /** 返回数据项数，本接口默认取值：10，上限取值：20 */
  Limit?: number;
  /** 返回数据起始偏移，本接口默认取值：0 */
  Offset?: number;
}

declare interface GetChannelListForUserResponse {
  /** 通道总数量 */
  TotalCount?: number;
  /** 通道列表 */
  ChannelList?: ChannelDetailForUser[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetClusterListForUserRequest {
  /** 模块名，本接口取值：cluster_mng */
  Module: string;
  /** 操作名，本接口取值：cluster_list_for_user */
  Operation: string;
  /** 返回数据项数，本接口默认取值：10，上限取值：20 */
  Limit?: number;
  /** 返回数据起始偏移，本接口默认取值：0 */
  Offset?: number;
}

declare interface GetClusterListForUserResponse {
  /** 网络总数量 */
  TotalCount?: number;
  /** 网络列表 */
  ClusterList?: ClusterDetailForUser[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetClusterSummaryRequest {
  /** 模块名称，固定字段：cluster_mng */
  Module: string;
  /** 操作名称，固定字段：cluster_summary */
  Operation: string;
  /** 区块链网络ID，可在区块链网络详情或列表中获取 */
  ClusterId: string;
  /** 组织ID，固定字段：0 */
  GroupId: number;
  /** 调用接口的组织名称，可以在组织管理列表中获取当前组织的名称 */
  GroupName: string;
}

declare interface GetClusterSummaryResponse {
  /** 网络通道总数量 */
  TotalChannelCount?: number;
  /** 当前组织创建的通道数量 */
  MyChannelCount?: number;
  /** 当前组织加入的通道数量 */
  JoinChannelCount?: number;
  /** 网络节点总数量 */
  TotalPeerCount?: number;
  /** 当前组织创建的节点数量 */
  MyPeerCount?: number;
  /** 其他组织创建的节点数量 */
  OrderCount?: number;
  /** 网络组织总数量 */
  TotalGroupCount?: number;
  /** 当前组织创建的组织数量 */
  MyGroupCount?: number;
  /** 网络智能合约总数量 */
  TotalChaincodeCount?: number;
  /** 最近7天发起的智能合约数量 */
  RecentChaincodeCount?: number;
  /** 当前组织发起的智能合约数量 */
  MyChaincodeCount?: number;
  /** 当前组织的证书总数量 */
  TotalCertCount?: number;
  /** 颁发给当前组织的证书数量 */
  TlsCertCount?: number;
  /** 网络背书节点证书数量 */
  PeerCertCount?: number;
  /** 当前组织业务证书数量 */
  ClientCertCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetInvokeTxRequest {
  /** 模块名，固定字段：transaction */
  Module: string;
  /** 操作名，固定字段：query_txid */
  Operation: string;
  /** 区块链网络ID，可在区块链网络详情或列表中获取 */
  ClusterId: string;
  /** 业务所属通道名称，可在通道详情或列表中获取 */
  ChannelName: string;
  /** 执行该查询交易的节点名称，可以在通道详情中获取该通道上的节点名称及其所属组织名称 */
  PeerName: string;
  /** 执行该查询交易的节点所属组织名称，可以在通道详情中获取该通道上的节点名称及其所属组织名称 */
  PeerGroup: string;
  /** 交易ID */
  TxId: string;
  /** 调用合约的组织名称，可以在组织管理列表中获取当前组织的名称 */
  GroupName: string;
}

declare interface GetInvokeTxResponse {
  /** 交易执行状态码 */
  TxValidationCode: number;
  /** 交易执行消息 */
  TxValidationMsg: string;
  /** 交易所在区块ID */
  BlockId: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetLatesdTransactionListRequest {
  /** 模块名称，固定字段：transaction */
  Module: string;
  /** 操作名称，固定字段：latest_transaction_list */
  Operation: string;
  /** 组织ID，固定字段：0 */
  GroupId: number;
  /** 通道ID，固定字段：0 */
  ChannelId: number;
  /** 获取的最新交易的区块数量，取值范围1~5 */
  LatestBlockNumber: number;
  /** 调用接口的组织名称，可以在组织管理列表中获取当前组织的名称 */
  GroupName: string;
  /** 需要查询的通道名称，可在通道详情或列表中获取 */
  ChannelName: string;
  /** 区块链网络ID，可在区块链网络详情或列表中获取 */
  ClusterId: string;
  /** 需要获取的起始交易偏移 */
  Offset?: number;
  /** 需要获取的交易数量 */
  Limit?: number;
}

declare interface GetLatesdTransactionListResponse {
  /** 交易总数量 */
  TotalCount?: number;
  /** 交易列表 */
  TransactionList?: TransactionItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetPeerLogForUserRequest {
  /** 模块名，本接口取值：peer_mng */
  Module: string;
  /** 操作名，本接口取值：peer_log_for_user */
  Operation: string;
  /** 区块链网络ID，可在区块链网络详情或列表中获取 */
  ClusterId: string;
  /** 调用合约的组织名称 */
  GroupName: string;
  /** 节点名称 */
  PeerName: string;
  /** 日志开始时间，如"2020-11-24 19:49:25" */
  BeginTime: string;
  /** 返回日志行数的最大值，系统设定该参数最大为1000，且一行日志的最大字节数是500，即最大返回50万个字节数的日志数据 */
  RowNum: number;
}

declare interface GetPeerLogForUserResponse {
  /** 返回日志总行数，不会超过入参的RowNum */
  TotalCount: number;
  /** 日志列表 */
  PeerLogList: LogDetailForUser[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetTransactionDetailForUserRequest {
  /** 模块名，固定字段：transaction */
  Module: string;
  /** 操作名，固定字段：transaction_detail_for_user */
  Operation: string;
  /** 区块链网络ID，可在区块链网络详情或列表中获取 */
  ClusterId: string;
  /** 参与交易的组织名称，可以在组织管理列表中获取当前组织的名称 */
  GroupName: string;
  /** 业务所属通道名称，可在通道详情或列表中获取 */
  ChannelName: string;
  /** 区块ID，通过GetInvokeTx接口可以获取交易所在的区块ID */
  BlockId: number;
  /** 交易ID，需要查询的详情的交易ID */
  TransactionId: string;
}

declare interface GetTransactionDetailForUserResponse {
  /** 交易ID */
  TransactionId?: string;
  /** 交易hash */
  TransactionHash?: string;
  /** 创建交易的组织名 */
  CreateOrgName?: string;
  /** 交易类型（普通交易和配置交易） */
  TransactionType?: string;
  /** 交易状态 */
  TransactionStatus?: string;
  /** 交易创建时间 */
  CreateTime?: string;
  /** 交易数据 */
  TransactionData?: string;
  /** 交易所在区块号 */
  BlockId?: number;
  /** 交易所在区块哈希 */
  BlockHash?: string;
  /** 交易所在区块高度 */
  BlockHeight?: number;
  /** 通道名称 */
  ChannelName?: string;
  /** 交易所在合约名称 */
  ContractName?: string;
  /** 背书组织列表 */
  EndorserOrgList?: EndorserGroup[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface InitializeChaincodeForUserRequest {
  /** 模块名，本接口取值：chaincode_mng */
  Module: string;
  /** 操作名，本接口取值：chaincode_init_for_user */
  Operation: string;
  /** 区块链网络ID，可在区块链网络详情或列表中获取 */
  ClusterId: string;
  /** 调用合约的组织名称 */
  GroupName: string;
  /** 业务所属智能合约名称 */
  ChaincodeName: string;
  /** 业务所属智能合约版本 */
  ChaincodeVersion: string;
  /** 业务所属通道名称 */
  ChannelName: string;
  /** 合约实例化节点名称，可以在通道详情中获取该通道上的节点名称 */
  PeerName: string;
  /** 实例化的函数参数列表 */
  Args?: string[];
}

declare interface InitializeChaincodeForUserResponse {
  /** 实例化任务ID，用于查询实例化结果 */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface InvokeBcosTransRequest {
  /** 网络ID，可在区块链网络详情或列表中获取 */
  ClusterId: string;
  /** 群组编号，可在群组列表中获取 */
  GroupId: number;
  /** 合约地址，可在合约详情获取 */
  ContractAddress: string;
  /** 合约Abi的json数组格式的字符串，可在合约详情获取 */
  AbiInfo: string;
  /** 合约方法名 */
  FuncName: string;
  /** 签名用户编号，可在私钥管理页面获取 */
  SignUserId: string;
  /** 合约方法入参，json格式字符串 */
  FuncParam?: string;
}

declare interface InvokeBcosTransResponse {
  /** 交易结果json字符串 */
  TransactionRsp: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface InvokeChainMakerContractRequest {
  /** 网络ID，可在区块链网络详情或列表中获取 */
  ClusterId: string;
  /** 业务链编号，可在业务链列表中获取 */
  ChainId: string;
  /** 合约名称，可在合约管理中获取 */
  ContractName: string;
  /** 合约方法名 */
  FuncName: string;
  /** 合约方法入参，json格式字符串，key/value都是string类型的map */
  FuncParam?: string;
  /** 是否异步执行，1为是，否则为0；如果异步执行，可使用返回值中的交易TxID查询执行结果 */
  AsyncFlag?: number;
}

declare interface InvokeChainMakerContractResponse {
  /** 交易结果 */
  Result: ChainMakerContractResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface InvokeChainMakerDemoContractRequest {
  /** 网络ID，可在区块链网络详情或列表中获取 */
  ClusterId: string;
  /** 业务链编号，可在业务链列表中获取 */
  ChainId: string;
  /** 合约名称，可在合约管理中获取 */
  ContractName: string;
  /** 合约方法名 */
  FuncName: string;
  /** 合约方法入参，json格式字符串，key/value都是string类型的map */
  FuncParam?: string;
  /** 是否异步执行，1为是，否则为0；如果异步执行，可使用返回值中的交易TxID查询执行结果 */
  AsyncFlag?: number;
}

declare interface InvokeChainMakerDemoContractResponse {
  /** 交易结果 */
  Result: ChainMakerContractResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface InvokeRequest {
  /** 模块名，固定字段：transaction */
  Module: string;
  /** 操作名，固定字段：invoke */
  Operation: string;
  /** 区块链网络ID，可在区块链网络详情或列表中获取 */
  ClusterId: string;
  /** 业务所属智能合约名称，可在智能合约详情或列表中获取 */
  ChaincodeName: string;
  /** 业务所属通道名称，可在通道详情或列表中获取 */
  ChannelName: string;
  /** 对该笔交易进行背书的节点列表（包括节点名称和节点所属组织名称，详见数据结构一节），可以在通道详情中获取该通道上的节点名称及其所属组织名称 */
  Peers: PeerSet[];
  /** 该笔交易需要调用的智能合约中的函数名称 */
  FuncName: string;
  /** 调用合约的组织名称，可以在组织管理列表中获取当前组织的名称 */
  GroupName: string;
  /** 被调用的函数参数列表，参数列表大小总和要求小于2M */
  Args?: string[];
  /** 同步调用标识，可选参数，值为0或者不传表示使用同步方法调用，调用后会等待交易执行后再返回执行结果；值为1时表示使用异步方式调用Invoke，执行后会立即返回交易对应的Txid，后续需要通过GetInvokeTx这个API查询该交易的执行结果。（对于逻辑较为简单的交易，可以使用同步模式；对于逻辑较为复杂的交易，建议使用异步模式，否则容易导致API因等待时间过长，返回等待超时） */
  AsyncFlag?: number;
}

declare interface InvokeResponse {
  /** 交易ID */
  Txid: string;
  /** 交易执行结果 */
  Events: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryChainMakerBlockTransactionRequest {
  /** 网络ID，可在区块链网络详情或列表中获取 */
  ClusterId: string;
  /** 业务链编号，可在业务链列表中获取 */
  ChainId: string;
  /** 区块高度 */
  BlockHeight: number;
}

declare interface QueryChainMakerBlockTransactionResponse {
  /** 区块交易 */
  Result: ChainMakerTransactionResult[] | null;
  /** 区块高度 */
  BlockHeight: number;
  /** 交易数量 */
  TxCount: number | null;
  /** 区块时间戳，单位是秒 */
  BlockTimestamp: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryChainMakerContractRequest {
  /** 网络ID，可在区块链网络详情或列表中获取 */
  ClusterId: string;
  /** 业务链编号，可在业务链列表中获取 */
  ChainId: string;
  /** 合约名称，可在合约管理中获取 */
  ContractName: string;
  /** 合约方法名 */
  FuncName: string;
  /** 合约方法入参，json格式字符串，key/value都是string类型的map */
  FuncParam?: string;
}

declare interface QueryChainMakerContractResponse {
  /** 交易结果 */
  Result: ChainMakerContractResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryChainMakerDemoBlockTransactionRequest {
  /** 网络ID，可在区块链网络详情或列表中获取 */
  ClusterId: string;
  /** 业务链编号，可在业务链列表中获取 */
  ChainId: string;
  /** 区块高度 */
  BlockHeight: number;
}

declare interface QueryChainMakerDemoBlockTransactionResponse {
  /** 区块交易 */
  Result: ChainMakerTransactionResult[] | null;
  /** 区块高度 */
  BlockHeight: number;
  /** 交易数量 */
  TxCount: number | null;
  /** 区块时间戳，单位是秒 */
  BlockTimestamp: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryChainMakerDemoContractRequest {
  /** 网络ID，可在区块链网络详情或列表中获取 */
  ClusterId: string;
  /** 业务链编号，可在业务链列表中获取 */
  ChainId: string;
  /** 合约名称，可在合约管理中获取 */
  ContractName: string;
  /** 合约方法名 */
  FuncName: string;
  /** 合约方法入参，json格式字符串，key/value都是string类型的map */
  FuncParam?: string;
}

declare interface QueryChainMakerDemoContractResponse {
  /** 交易结果 */
  Result: ChainMakerContractResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryChainMakerDemoTransactionRequest {
  /** 网络ID，可在区块链网络详情或列表中获取 */
  ClusterId: string;
  /** 业务链编号，可在业务链列表中获取 */
  ChainId: string;
  /** 交易ID，通过调用合约的返回值获取 */
  TxID: string;
}

declare interface QueryChainMakerDemoTransactionResponse {
  /** 交易结果 */
  Result: ChainMakerTransactionResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryChainMakerTransactionRequest {
  /** 网络ID，可在区块链网络详情或列表中获取 */
  ClusterId: string;
  /** 业务链编号，可在业务链列表中获取 */
  ChainId: string;
  /** 交易ID，通过调用合约的返回值获取 */
  TxID: string;
}

declare interface QueryChainMakerTransactionResponse {
  /** 交易结果 */
  Result: ChainMakerTransactionResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryRequest {
  /** 模块名，固定字段：transaction */
  Module: string;
  /** 操作名，固定字段：query */
  Operation: string;
  /** 区块链网络ID，可在区块链网络详情或列表中获取 */
  ClusterId: string;
  /** 业务所属智能合约名称，可在智能合约详情或列表中获取 */
  ChaincodeName: string;
  /** 业务所属通道名称，可在通道详情或列表中获取 */
  ChannelName: string;
  /** 执行该查询交易的节点列表（包括节点名称和节点所属组织名称，详见数据结构一节），可以在通道详情中获取该通道上的节点名称及其所属组织名称 */
  Peers: PeerSet[];
  /** 该笔交易查询需要调用的智能合约中的函数名称 */
  FuncName: string;
  /** 调用合约的组织名称，可以在组织管理列表中获取当前组织的名称 */
  GroupName: string;
  /** 被调用的函数参数列表 */
  Args?: string[];
}

declare interface QueryResponse {
  /** 查询结果数据 */
  Data: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SrvInvokeRequest {
  /** 服务类型，iss或者dam */
  Service: string;
  /** 服务接口，要调用的方法函数名 */
  Method: string;
  /** 用户自定义json字符串 */
  Param: string;
}

declare interface SrvInvokeResponse {
  /** 返回码 */
  RetCode?: number;
  /** 返回消息 */
  RetMsg?: string;
  /** 返回数据 */
  Data?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Tbaas 腾讯云区块链服务平台 TBaaS} */
declare interface Tbaas {
  (): Versions;
  /** 批量申请长安链用户签名证书 {@link ApplyChainMakerBatchUserCertRequest} {@link ApplyChainMakerBatchUserCertResponse} */
  ApplyChainMakerBatchUserCert(data: ApplyChainMakerBatchUserCertRequest, config?: AxiosRequestConfig): AxiosPromise<ApplyChainMakerBatchUserCertResponse>;
  /** 申请用户证书 {@link ApplyUserCertRequest} {@link ApplyUserCertResponse} */
  ApplyUserCert(data: ApplyUserCertRequest, config?: AxiosRequestConfig): AxiosPromise<ApplyUserCertResponse>;
  /** 创建并安装合约 {@link CreateChaincodeAndInstallForUserRequest} {@link CreateChaincodeAndInstallForUserResponse} */
  CreateChaincodeAndInstallForUser(data: CreateChaincodeAndInstallForUserRequest, config?: AxiosRequestConfig): AxiosPromise<CreateChaincodeAndInstallForUserResponse>;
  /** 动态部署并发布Bcos合约 {@link DeployDynamicBcosContractRequest} {@link DeployDynamicBcosContractResponse} */
  DeployDynamicBcosContract(data: DeployDynamicBcosContractRequest, config?: AxiosRequestConfig): AxiosPromise<DeployDynamicBcosContractResponse>;
  /** 下载用户证书 {@link DownloadUserCertRequest} {@link DownloadUserCertResponse} */
  DownloadUserCert(data: DownloadUserCertRequest, config?: AxiosRequestConfig): AxiosPromise<DownloadUserCertResponse>;
  /** 使用块高查询区块信息 {@link GetBcosBlockByNumberRequest} {@link GetBcosBlockByNumberResponse} */
  GetBcosBlockByNumber(data: GetBcosBlockByNumberRequest, config?: AxiosRequestConfig): AxiosPromise<GetBcosBlockByNumberResponse>;
  /** 分页查询Bcos区块列表 {@link GetBcosBlockListRequest} {@link GetBcosBlockListResponse} */
  GetBcosBlockList(data: GetBcosBlockListRequest, config?: AxiosRequestConfig): AxiosPromise<GetBcosBlockListResponse>;
  /** 使用交易哈希查询Bcos交易信息 {@link GetBcosTransByHashRequest} {@link GetBcosTransByHashResponse} */
  GetBcosTransByHash(data: GetBcosTransByHashRequest, config?: AxiosRequestConfig): AxiosPromise<GetBcosTransByHashResponse>;
  /** 分页查询Bcos交易列表 {@link GetBcosTransListRequest} {@link GetBcosTransListResponse} */
  GetBcosTransList(data: GetBcosTransListRequest, config?: AxiosRequestConfig): AxiosPromise<GetBcosTransListResponse>;
  /** 查询区块列表 {@link GetBlockListRequest} {@link GetBlockListResponse} */
  GetBlockList(data: GetBlockListRequest, config?: AxiosRequestConfig): AxiosPromise<GetBlockListResponse>;
  /** 获取区块内的交易列表 {@link GetBlockTransactionListForUserRequest} {@link GetBlockTransactionListForUserResponse} */
  GetBlockTransactionListForUser(data: GetBlockTransactionListForUserRequest, config?: AxiosRequestConfig): AxiosPromise<GetBlockTransactionListForUserResponse>;
  /** 获取合约编译日志 {@link GetChaincodeCompileLogForUserRequest} {@link GetChaincodeCompileLogForUserResponse} */
  GetChaincodeCompileLogForUser(data: GetChaincodeCompileLogForUserRequest, config?: AxiosRequestConfig): AxiosPromise<GetChaincodeCompileLogForUserResponse>;
  /** 实例化结果查询 {@link GetChaincodeInitializeResultForUserRequest} {@link GetChaincodeInitializeResultForUserResponse} */
  GetChaincodeInitializeResultForUser(data: GetChaincodeInitializeResultForUserRequest, config?: AxiosRequestConfig): AxiosPromise<GetChaincodeInitializeResultForUserResponse>;
  /** 获取合约容器日志 {@link GetChaincodeLogForUserRequest} {@link GetChaincodeLogForUserResponse} */
  GetChaincodeLogForUser(data: GetChaincodeLogForUserRequest, config?: AxiosRequestConfig): AxiosPromise<GetChaincodeLogForUserResponse>;
  /** 获取通道列表 {@link GetChannelListForUserRequest} {@link GetChannelListForUserResponse} */
  GetChannelListForUser(data: GetChannelListForUserRequest, config?: AxiosRequestConfig): AxiosPromise<GetChannelListForUserResponse>;
  /** 获取网络列表 {@link GetClusterListForUserRequest} {@link GetClusterListForUserResponse} */
  GetClusterListForUser(data: GetClusterListForUserRequest, config?: AxiosRequestConfig): AxiosPromise<GetClusterListForUserResponse>;
  /** 获取区块链网络概要 {@link GetClusterSummaryRequest} {@link GetClusterSummaryResponse} */
  GetClusterSummary(data: GetClusterSummaryRequest, config?: AxiosRequestConfig): AxiosPromise<GetClusterSummaryResponse>;
  /** Invoke异步调用结果查询 {@link GetInvokeTxRequest} {@link GetInvokeTxResponse} */
  GetInvokeTx(data: GetInvokeTxRequest, config?: AxiosRequestConfig): AxiosPromise<GetInvokeTxResponse>;
  /** 获取最新交易列表 {@link GetLatesdTransactionListRequest} {@link GetLatesdTransactionListResponse} */
  GetLatesdTransactionList(data: GetLatesdTransactionListRequest, config?: AxiosRequestConfig): AxiosPromise<GetLatesdTransactionListResponse>;
  /** 获取节点日志 {@link GetPeerLogForUserRequest} {@link GetPeerLogForUserResponse} */
  GetPeerLogForUser(data: GetPeerLogForUserRequest, config?: AxiosRequestConfig): AxiosPromise<GetPeerLogForUserResponse>;
  /** 获取交易详情 {@link GetTransactionDetailForUserRequest} {@link GetTransactionDetailForUserResponse} */
  GetTransactionDetailForUser(data: GetTransactionDetailForUserRequest, config?: AxiosRequestConfig): AxiosPromise<GetTransactionDetailForUserResponse>;
  /** 实例化合约 {@link InitializeChaincodeForUserRequest} {@link InitializeChaincodeForUserResponse} */
  InitializeChaincodeForUser(data: InitializeChaincodeForUserRequest, config?: AxiosRequestConfig): AxiosPromise<InitializeChaincodeForUserResponse>;
  /** 新增交易 {@link InvokeRequest} {@link InvokeResponse} */
  Invoke(data: InvokeRequest, config?: AxiosRequestConfig): AxiosPromise<InvokeResponse>;
  /** 执行Bcos交易 {@link InvokeBcosTransRequest} {@link InvokeBcosTransResponse} */
  InvokeBcosTrans(data: InvokeBcosTransRequest, config?: AxiosRequestConfig): AxiosPromise<InvokeBcosTransResponse>;
  /** 调用长安链合约执行交易 {@link InvokeChainMakerContractRequest} {@link InvokeChainMakerContractResponse} */
  InvokeChainMakerContract(data: InvokeChainMakerContractRequest, config?: AxiosRequestConfig): AxiosPromise<InvokeChainMakerContractResponse>;
  /** 调用长安链体验网络合约执行交易 {@link InvokeChainMakerDemoContractRequest} {@link InvokeChainMakerDemoContractResponse} */
  InvokeChainMakerDemoContract(data: InvokeChainMakerDemoContractRequest, config?: AxiosRequestConfig): AxiosPromise<InvokeChainMakerDemoContractResponse>;
  /** 查询交易 {@link QueryRequest} {@link QueryResponse} */
  Query(data: QueryRequest, config?: AxiosRequestConfig): AxiosPromise<QueryResponse>;
  /** 查询长安链指定高度区块的交易 {@link QueryChainMakerBlockTransactionRequest} {@link QueryChainMakerBlockTransactionResponse} */
  QueryChainMakerBlockTransaction(data: QueryChainMakerBlockTransactionRequest, config?: AxiosRequestConfig): AxiosPromise<QueryChainMakerBlockTransactionResponse>;
  /** 调用长安链合约查询 {@link QueryChainMakerContractRequest} {@link QueryChainMakerContractResponse} */
  QueryChainMakerContract(data: QueryChainMakerContractRequest, config?: AxiosRequestConfig): AxiosPromise<QueryChainMakerContractResponse>;
  /** 查询长安链体验网络指定高度区块的交易 {@link QueryChainMakerDemoBlockTransactionRequest} {@link QueryChainMakerDemoBlockTransactionResponse} */
  QueryChainMakerDemoBlockTransaction(data: QueryChainMakerDemoBlockTransactionRequest, config?: AxiosRequestConfig): AxiosPromise<QueryChainMakerDemoBlockTransactionResponse>;
  /** 调用长安链体验网络合约查询 {@link QueryChainMakerDemoContractRequest} {@link QueryChainMakerDemoContractResponse} */
  QueryChainMakerDemoContract(data: QueryChainMakerDemoContractRequest, config?: AxiosRequestConfig): AxiosPromise<QueryChainMakerDemoContractResponse>;
  /** 通过交易ID查询长安链体验网络交易 {@link QueryChainMakerDemoTransactionRequest} {@link QueryChainMakerDemoTransactionResponse} */
  QueryChainMakerDemoTransaction(data: QueryChainMakerDemoTransactionRequest, config?: AxiosRequestConfig): AxiosPromise<QueryChainMakerDemoTransactionResponse>;
  /** 通过交易ID查询长安链交易 {@link QueryChainMakerTransactionRequest} {@link QueryChainMakerTransactionResponse} */
  QueryChainMakerTransaction(data: QueryChainMakerTransactionRequest, config?: AxiosRequestConfig): AxiosPromise<QueryChainMakerTransactionResponse>;
  /** trustsql服务统一接口 {@link SrvInvokeRequest} {@link SrvInvokeResponse} */
  SrvInvoke(data: SrvInvokeRequest, config?: AxiosRequestConfig): AxiosPromise<SrvInvokeResponse>;
}

export declare type Versions = ["2018-04-16"];

export default Tbaas;
