/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 区块对象 */
declare interface Block {
  /** 区块编号 */
  BlockNum?: number;
  /** 区块数据Hash数值 */
  DataHash?: string;
  /** 区块ID，与区块编号一致 */
  BlockId?: number;
  /** 前一个区块Hash */
  PreHash?: string;
  /** 区块内的交易数量 */
  TxCount?: number;
}

/** 长安链合约执行结果 */
declare interface ChainMakerContractResult {
  /** 交易结果码 */
  Code?: number;
  /** 交易结果码含义 */
  CodeMessage?: string;
  /** 交易ID */
  TxId?: string;
  /** Gas使用量 */
  GasUsed?: number;
  /** 合约返回消息 */
  Message?: string;
  /** 合约函数返回，base64编码 */
  Result?: string;
}

/** 长安链交易查询结果 */
declare interface ChainMakerTransactionResult {
  /** 交易结果码 */
  Code?: number;
  /** 交易结果码含义 */
  CodeMessage?: string;
  /** 交易ID */
  TxId?: string;
  /** Gas使用量 */
  GasUsed?: number;
  /** 区块高度 */
  BlockHeight?: number;
  /** 合约执行结果 */
  ContractEvent?: string;
  /** 合约返回信息 */
  Message?: string;
  /** 交易时间，单位是秒 */
  Timestamp?: number;
}

/** 背书组织及其节点列表 */
declare interface EndorserGroup {
  /** 背书组织名称 */
  EndorserGroupName?: string;
  /** 背书节点列表 */
  EndorserPeerList?: string[];
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

/** 交易显示概述信息 */
declare interface Transaction {
  /** 交易ID */
  TxId?: string;
  /** 合约名称 */
  ChaincodeName?: string;
  /** 交易发送者 */
  Sender?: string;
  /** 交易创建时间 */
  CreateTime?: string;
  /** 交易所在区块高度 */
  BlockHeight?: number;
  /** 交易在区块中的序号 */
  TxIndex?: number;
}

/** 交易列表项信息 */
declare interface TransactionItem {
  /** 交易ID */
  TransactionId?: string;
  /** 交易hash */
  TransactionHash?: string;
  /** 创建交易的组织名 */
  CreateOrgName?: string;
  /** 交易所在区块号 */
  BlockId?: number;
  /** 交易类型（普通交易和配置交易） */
  TransactionType?: string;
  /** 交易创建时间 */
  CreateTime?: string;
  /** 交易所在区块高度 */
  BlockHeight?: number;
  /** 交易状态 */
  TransactionStatus?: string;
}

declare interface ApplyChainMakerBatchUserCertRequest {
  /** 网络ID，可在区块链网络详情或列表中获取 */
  ClusterId: string;
  /** 证书标识和证书请求文件，可参考TBaaS证书生成相关文档生成证书请求文件 */
  SignUserCsrList: SignCertCsr[];
}

declare interface ApplyChainMakerBatchUserCertResponse {
  /** 成功生成的用户证书的base64编码字符串列表，与SignUserCsrList一一对应 */
  SignUserCrtList?: string[];
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

declare interface DescribeFabricBlockRequest {
  /** 网络ID，可在区块链网络详情或列表中获取 */
  ClusterId: string;
  /** 通道ID，可在通道列表或通道详情获取 */
  ChannelId: string;
  /** 区块高度，从0开始 */
  BlockHeight: number;
}

declare interface DescribeFabricBlockResponse {
  /** 区块高度 */
  BlockHeight?: number;
  /** 区块Hash */
  BlockHash?: string;
  /** 前置区块Hash */
  PreBlockHash?: string;
  /** 区块中交易数量 */
  TxCount?: number;
  /** 区块中交易列表 */
  TransactionList?: Transaction[];
  /** 创建时间戳 */
  CreateTimestamp?: string;
  /** 提案组织 */
  ProposerOrg?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFabricTransactionRequest {
  /** 网络ID，可在区块链网络详情或列表中获取 */
  ClusterId: string;
  /** 通道ID，可在通道列表或通道详情获取 */
  ChannelId: string;
  /** 交易ID */
  TxId: string;
}

declare interface DescribeFabricTransactionResponse {
  /** 交易ID */
  TxId?: string;
  /** 交易Hash */
  TxHash?: string;
  /** 交易状态 */
  TxStatus?: string;
  /** 参与的组织列表 */
  JoinOrgList?: string[];
  /** 交易发送者 */
  Sender?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** 区块高度 */
  BlockHeight?: number;
  /** 交易所属合约 */
  ChaincodeName?: string;
  /** 交易数据，base64编码，解码后为json化的字符串 */
  TransactionData?: string;
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
  /** 证书内容 */
  Cert?: string;
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
  TxValidationCode?: number;
  /** 交易执行消息 */
  TxValidationMsg?: string;
  /** 交易所在区块ID */
  BlockId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetLatestTransactionListRequest {
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

declare interface GetLatestTransactionListResponse {
  /** 交易总数量 */
  TotalCount?: number;
  /** 交易列表 */
  TransactionList?: TransactionItem[];
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

declare interface InvokeChainMakerContractRequest {
  /** 网络ID，可在区块链网络详情或列表中获取 */
  ClusterId: string;
  /** 业务链ID，可在网络概览页获取 */
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
  Result?: ChainMakerContractResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface InvokeChainMakerDemoContractRequest {
  /** 网络ID，可在区块链网络详情或列表中获取 */
  ClusterId: string;
  /** 业务链ID，可在网络概览页获取 */
  ChainId: string;
  /** 合约名称，可在合约管理中获取 */
  ContractName: string;
  /** 合约方法名，由合约代码定义，可以参考合约详情中的合约调用定义 */
  FuncName: string;
  /** 合约方法入参，json格式字符串，key/value都是string类型的map，由合约代码定义，可以参考合约详情中的合约调用定义 */
  FuncParam?: string;
  /** 是否异步执行，1为是，否则为0；如果异步执行，可使用返回值中的交易TxID查询执行结果 */
  AsyncFlag?: number;
}

declare interface InvokeChainMakerDemoContractResponse {
  /** 交易结果 */
  Result?: ChainMakerContractResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface InvokeFabricChaincodeRequest {
  /** 网络ID，可在区块链网络详情获取 */
  ClusterId: string;
  /** 通道ID，可在通道列表或通道详情获取 */
  ChannelId: string;
  /** 合约名称，可在合约列表或合约详情获取 */
  ChaincodeName: string;
  /** 合约方法 */
  FuncName: string;
  /** 合约方法入参 */
  FuncParam?: string[];
  /** 是否异步执行，如果异步执行，可使用返回值中的交易TxID查询执行结果 */
  WithAsyncResult?: boolean;
}

declare interface InvokeFabricChaincodeResponse {
  /** 交易ID */
  TxId?: string;
  /** 交易状态 */
  TxStatus?: string;
  /** 交易结果 */
  TxResult?: string;
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
  Txid?: string;
  /** 交易执行结果 */
  Events?: string;
  /** 交易ID */
  TxId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryChainMakerBlockTransactionRequest {
  /** 网络ID，可在区块链网络详情或列表中获取 */
  ClusterId: string;
  /** 业务链ID，可在网络概览页获取 */
  ChainId: string;
  /** 区块高度 */
  BlockHeight: number;
}

declare interface QueryChainMakerBlockTransactionResponse {
  /** 区块交易 */
  Result?: ChainMakerTransactionResult[];
  /** 区块高度 */
  BlockHeight?: number;
  /** 交易数量 */
  TxCount?: number;
  /** 区块时间戳，单位是秒 */
  BlockTimestamp?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryChainMakerContractRequest {
  /** 网络ID，可在区块链网络详情或列表中获取 */
  ClusterId: string;
  /** 业务链ID，可在网络概览页获取 */
  ChainId: string;
  /** 合约名称，可在合约管理中获取 */
  ContractName: string;
  /** 合约方法名，由合约代码定义 */
  FuncName: string;
  /** 合约方法入参，json格式字符串，key/value都是string类型的map，由合约代码定义 */
  FuncParam?: string;
}

declare interface QueryChainMakerContractResponse {
  /** 交易结果 */
  Result?: ChainMakerContractResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryChainMakerDemoBlockTransactionRequest {
  /** 网络ID，可在区块链网络详情或列表中获取 */
  ClusterId: string;
  /** 业务链ID，可在网络概览页获取 */
  ChainId: string;
  /** 区块高度 */
  BlockHeight: number;
}

declare interface QueryChainMakerDemoBlockTransactionResponse {
  /** 区块交易 */
  Result?: ChainMakerTransactionResult[];
  /** 区块高度 */
  BlockHeight?: number;
  /** 交易数量 */
  TxCount?: number;
  /** 区块时间戳，单位是秒 */
  BlockTimestamp?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryChainMakerDemoContractRequest {
  /** 网络ID，可在区块链网络详情或列表中获取 */
  ClusterId: string;
  /** 业务链ID，可在网络概览页获取 */
  ChainId: string;
  /** 合约名称，可在合约管理中获取 */
  ContractName: string;
  /** 合约方法名，由合约代码定义，可以参考合约详情中的合约调用定义 */
  FuncName: string;
  /** 合约方法入参，json格式字符串，key/value都是string类型的map，由合约代码定义，可以参考合约详情中的合约调用定义 */
  FuncParam?: string;
}

declare interface QueryChainMakerDemoContractResponse {
  /** 交易结果 */
  Result?: ChainMakerContractResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryChainMakerDemoTransactionRequest {
  /** 网络ID，可在区块链网络详情或列表中获取 */
  ClusterId: string;
  /** 业务链ID，可在网络概览页获取 */
  ChainId: string;
  /** 交易ID，通过调用合约的返回值获取 */
  TxID: string;
}

declare interface QueryChainMakerDemoTransactionResponse {
  /** 交易结果 */
  Result?: ChainMakerTransactionResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryChainMakerTransactionRequest {
  /** 网络ID，可在区块链网络详情或列表中获取 */
  ClusterId: string;
  /** 业务链ID，可在网络概览页获取 */
  ChainId: string;
  /** 交易ID，通过调用合约的返回值获取 */
  TxID: string;
}

declare interface QueryChainMakerTransactionResponse {
  /** 交易结果 */
  Result?: ChainMakerTransactionResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryFabricChaincodeRequest {
  /** 网络ID，可在区块链网络详情获取 */
  ClusterId: string;
  /** 通道ID，可在通道列表或通道详情获取 */
  ChannelId: string;
  /** 合约名称，可在合约列表或合约详情获取 */
  ChaincodeName: string;
  /** 合约方法 */
  FuncName: string;
  /** 合约方法入参 */
  FuncParam?: string[];
}

declare interface QueryFabricChaincodeResponse {
  /** 交易ID */
  TxId?: string;
  /** 交易状态 */
  TxStatus?: string;
  /** 交易结果 */
  TxResult?: string;
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
  Data?: string[];
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
  /** 获取Fabric某区块的详细信息 {@link DescribeFabricBlockRequest} {@link DescribeFabricBlockResponse} */
  DescribeFabricBlock(data: DescribeFabricBlockRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFabricBlockResponse>;
  /** 获取Fabric交易的详细信息 {@link DescribeFabricTransactionRequest} {@link DescribeFabricTransactionResponse} */
  DescribeFabricTransaction(data: DescribeFabricTransactionRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFabricTransactionResponse>;
  /** 下载用户证书 {@link DownloadUserCertRequest} {@link DownloadUserCertResponse} */
  DownloadUserCert(data: DownloadUserCertRequest, config?: AxiosRequestConfig): AxiosPromise<DownloadUserCertResponse>;
  /** 查询fabric的区块列表 {@link GetBlockListRequest} {@link GetBlockListResponse} */
  GetBlockList(data: GetBlockListRequest, config?: AxiosRequestConfig): AxiosPromise<GetBlockListResponse>;
  /** 获取区块内交易列表 {@link GetBlockTransactionListForUserRequest} {@link GetBlockTransactionListForUserResponse} */
  GetBlockTransactionListForUser(data: GetBlockTransactionListForUserRequest, config?: AxiosRequestConfig): AxiosPromise<GetBlockTransactionListForUserResponse>;
  /** 获取区块链网络概要 {@link GetClusterSummaryRequest} {@link GetClusterSummaryResponse} */
  GetClusterSummary(data: GetClusterSummaryRequest, config?: AxiosRequestConfig): AxiosPromise<GetClusterSummaryResponse>;
  /** Invoke异步调用结果查询 {@link GetInvokeTxRequest} {@link GetInvokeTxResponse} */
  GetInvokeTx(data: GetInvokeTxRequest, config?: AxiosRequestConfig): AxiosPromise<GetInvokeTxResponse>;
  /** 获取fabric最新交易列表 {@link GetLatestTransactionListRequest} {@link GetLatestTransactionListResponse} */
  GetLatestTransactionList(data: GetLatestTransactionListRequest, config?: AxiosRequestConfig): AxiosPromise<GetLatestTransactionListResponse>;
  /** 获取交易的详情 {@link GetTransactionDetailForUserRequest} {@link GetTransactionDetailForUserResponse} */
  GetTransactionDetailForUser(data: GetTransactionDetailForUserRequest, config?: AxiosRequestConfig): AxiosPromise<GetTransactionDetailForUserResponse>;
  /** 新增交易 {@link InvokeRequest} {@link InvokeResponse} */
  Invoke(data: InvokeRequest, config?: AxiosRequestConfig): AxiosPromise<InvokeResponse>;
  /** 调用长安链合约执行交易 {@link InvokeChainMakerContractRequest} {@link InvokeChainMakerContractResponse} */
  InvokeChainMakerContract(data: InvokeChainMakerContractRequest, config?: AxiosRequestConfig): AxiosPromise<InvokeChainMakerContractResponse>;
  /** 调用长安链体验网络合约执行交易 {@link InvokeChainMakerDemoContractRequest} {@link InvokeChainMakerDemoContractResponse} */
  InvokeChainMakerDemoContract(data: InvokeChainMakerDemoContractRequest, config?: AxiosRequestConfig): AxiosPromise<InvokeChainMakerDemoContractResponse>;
  /** 调用Fabric用户合约执行交易 {@link InvokeFabricChaincodeRequest} {@link InvokeFabricChaincodeResponse} */
  InvokeFabricChaincode(data: InvokeFabricChaincodeRequest, config?: AxiosRequestConfig): AxiosPromise<InvokeFabricChaincodeResponse>;
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
  /** 调用Fabric用户合约查询 {@link QueryFabricChaincodeRequest} {@link QueryFabricChaincodeResponse} */
  QueryFabricChaincode(data: QueryFabricChaincodeRequest, config?: AxiosRequestConfig): AxiosPromise<QueryFabricChaincodeResponse>;
  /** trustsql服务统一接口 {@link SrvInvokeRequest} {@link SrvInvokeResponse} */
  SrvInvoke(data: SrvInvokeRequest, config?: AxiosRequestConfig): AxiosPromise<SrvInvokeResponse>;
}

export declare type Versions = ["2018-04-16"];

export default Tbaas;
