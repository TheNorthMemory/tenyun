/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

declare interface CreateAudioDepositRequest {
  /** 存证名称(长度最大30) */
  EvidenceName: string;
  /** 数据Base64编码，大小不超过5M */
  FileContent: string;
  /** 带后缀的文件名称，如music.mp3 */
  FileName: string;
  /** 文件hash */
  EvidenceHash: string;
  /** 业务ID 透传 长度最大不超过64 */
  BusinessId?: string;
  /** 算法类型 0 SM3, 1 SHA256, 2 SHA384 默认0 */
  HashType?: number;
  /** 存证描述 */
  EvidenceDescription?: string;
}

declare interface CreateAudioDepositResponse {
  /** 业务ID 透传 长度最大不超过64 */
  BusinessId: string | null;
  /** 请求成功，返回存证编码,用于查询存证后续业务数据 */
  EvidenceId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDataDepositRequest {
  /** 业务数据明文(json格式字符串)，最大256kb */
  EvidenceInfo: string;
  /** 存证名称(长度最大30) */
  EvidenceName: string;
  /** 业务ID 透传 长度最大不超过64 */
  BusinessId?: string;
  /** 算法类型 0 SM3, 1 SHA256, 2 SHA384 默认0 */
  HashType?: number;
  /** 存证描述 */
  EvidenceDescription?: string;
}

declare interface CreateDataDepositResponse {
  /** 业务ID 透传 长度最大不超过64 */
  BusinessId: string | null;
  /** 请求成功，返回存证编码,用于查询存证后续业务数据 */
  EvidenceId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDocDepositRequest {
  /** 存证名称(长度最大30) */
  EvidenceName: string;
  /** 数据Base64编码，大小不超过5M */
  FileContent: string;
  /** 带后缀的文件名称，如 test.doc */
  FileName: string;
  /** 文件hash */
  EvidenceHash: string;
  /** 业务ID 透传 长度最大不超过64 */
  BusinessId?: string;
  /** 算法类型 0 SM3, 1 SHA256, 2 SHA384 默认0 */
  HashType?: number;
  /** 存证描述 */
  EvidenceDescription?: string;
}

declare interface CreateDocDepositResponse {
  /** 业务ID 透传 长度最大不超过64 */
  BusinessId: string | null;
  /** 请求成功，返回存证编码,用于查询存证后续业务数据 */
  EvidenceId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateHashDepositNoCertRequest {
  /** 数据hash */
  EvidenceHash: string;
  /** 该字段为透传字段，方便调用方做业务处理， 长度最大不超过64 */
  BusinessId?: string;
  /** 业务扩展信息 */
  EvidenceInfo?: string;
}

declare interface CreateHashDepositNoCertResponse {
  /** 透传字段 */
  BusinessId: string | null;
  /** 存证编码 */
  EvidenceId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateHashDepositNoSealRequest {
  /** 数据hash */
  EvidenceHash: string;
  /** 该字段为透传字段，方便调用方做业务处理， 长度最大不超过64 */
  BusinessId?: string;
  /** 业务扩展信息 */
  EvidenceInfo?: string;
}

declare interface CreateHashDepositNoSealResponse {
  /** 透传字段 */
  BusinessId: string | null;
  /** 存证编码 */
  EvidenceId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateHashDepositRequest {
  /** 存证名称(长度最大30) */
  EvidenceName: string;
  /** 数据hash */
  EvidenceHash: string;
  /** 该字段为透传字段，方便调用方做业务处理， 长度最大不超过64 */
  BusinessId?: string;
  /** 存证描述 */
  EvidenceDescription?: string;
}

declare interface CreateHashDepositResponse {
  /** 透传字段 */
  BusinessId: string | null;
  /** 存证编码 */
  EvidenceId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateImageDepositRequest {
  /** 存证名称(长度最大30) */
  EvidenceName: string;
  /** 数据Base64编码，大小不超过5M */
  FileContent: string;
  /** 带后缀的文件名称，如 test.png */
  FileName: string;
  /** 文件hash */
  EvidenceHash: string;
  /** 业务ID 透传 长度最大不超过64 */
  BusinessId?: string;
  /** 算法类型 0 SM3, 1 SHA256, 2 SHA384 默认0 */
  HashType?: number;
  /** 存证描述 */
  EvidenceDescription?: string;
}

declare interface CreateImageDepositResponse {
  /** 业务ID 透传 长度最大不超过64 */
  BusinessId: string | null;
  /** 请求成功，返回存证编码,用于查询存证后续业务数据 */
  EvidenceId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateVideoDepositRequest {
  /** 存证名称(长度最大30) */
  EvidenceName: string;
  /** 数据Base64编码，大小不超过5M */
  FileContent: string;
  /** 带后缀的文件名称，如music.mkv */
  FileName: string;
  /** 文件hash */
  EvidenceHash: string;
  /** 业务ID 透传 长度最大不超过64 */
  BusinessId?: string;
  /** 算法类型 0 SM3, 1 SHA256, 2 SHA384 默认0 */
  HashType?: number;
  /** 存证描述 */
  EvidenceDescription?: string;
}

declare interface CreateVideoDepositResponse {
  /** 业务ID 透传 长度最大不超过64 */
  BusinessId?: string | null;
  /** 请求成功，返回存证编码,用于查询存证后续业务数据 */
  EvidenceId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetDepositCertRequest {
  /** 存证编码 */
  EvidenceId: string;
}

declare interface GetDepositCertResponse {
  /** 存证编码 */
  EvidenceId: string;
  /** 存证证书文件临时链接 */
  EvidenceCert: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetDepositFileRequest {
  /** 存证编码 */
  EvidenceId: string;
}

declare interface GetDepositFileResponse {
  /** 存证编号 */
  EvidenceId: string;
  /** 存证文件临时链接 */
  EvidenceFile: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetDepositInfoRequest {
  /** 存证编码 */
  EvidenceId: string;
}

declare interface GetDepositInfoResponse {
  /** 存证编号 */
  EvidenceId: string;
  /** 上链时间 */
  EvidenceTime: string;
  /** 区块链交易哈希 */
  EvidenceTxHash: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface VerifyEvidenceBlockChainTxHashRequest {
  /** 区块链交易 hash，在“存证基本信息查询（GetDepositInfo）”接口中可以获取。 */
  EvidenceTxHash: string;
}

declare interface VerifyEvidenceBlockChainTxHashResponse {
  /** 核验结果，true为核验成功，fals为核验失败 */
  Result: boolean;
  /** 存证时间，仅当核验结果为true时返回 */
  EvidenceTime: string | null;
  /** 存证编码，仅当核验结果为true时返回 */
  EvidenceId: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface VerifyEvidenceHashRequest {
  /** 存证内容hash，hash类型即为用户在存证时所用或所选的hash类型 */
  EvidenceHash: string;
}

declare interface VerifyEvidenceHashResponse {
  /** 核验结果，true为核验成功，false为核验失败 */
  Result: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare namespace V20210303 {
  type VersionHeader = { headers: { 'X-TC-Version': '2021-03-03' } }

  interface CreateAudioDepositRequest {
    /** 存证名称(长度最大30) */
    EvidenceName: string;
    /** 对应数据Base64文件名称 */
    FileName: string;
    /** 文件hash */
    EvidenceHash: string;
    /** 业务ID 透传 长度最大不超过64 */
    BusinessId?: string;
    /** 数据Base64编码，大小不超过5M */
    FileContent?: string;
    /** 资源访问链接 与fileContent必须二选一 */
    FileUrl?: string;
    /** 算法类型 0 SM3, 1 SHA256, 2 SHA384 默认0 */
    HashType?: number;
    /** 存证描述 */
    EvidenceDescription?: string;
  }

  interface CreateAudioDepositResponse {
    /** 业务ID 透传 长度最大不超过64 */
    BusinessId: string | null;
    /** 请求成功，返回存证编码,用于查询存证后续业务数据 */
    EvidenceId: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateDataDepositRequest {
    /** 业务数据明文(json格式字符串)，最大256kb */
    EvidenceInfo: string;
    /** 存证名称(长度最大30) */
    EvidenceName: string;
    /** 数据hash */
    EvidenceHash: string;
    /** 业务ID 透传 长度最大不超过64 */
    BusinessId?: string;
    /** 算法类型 0 SM3, 1 SHA256, 2 SHA384 默认0 */
    HashType?: number;
    /** 存证描述 */
    EvidenceDescription?: string;
  }

  interface CreateDataDepositResponse {
    /** 业务ID 透传 长度最大不超过64 */
    BusinessId: string | null;
    /** 请求成功，返回存证编码,用于查询存证后续业务数据 */
    EvidenceId: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateDocDepositRequest {
    /** 存证名称(长度最大30) */
    EvidenceName: string;
    /** 对应数据Base64文件名称 */
    FileName: string;
    /** 文件hash */
    EvidenceHash: string;
    /** 业务ID 透传 长度最大不超过64 */
    BusinessId?: string;
    /** 数据Base64编码，大小不超过5M */
    FileContent?: string;
    /** 资源访问链接 与fileContent必须二选一 */
    FileUrl?: string;
    /** 算法类型 0 SM3, 1 SHA256, 2 SHA384 默认0 */
    HashType?: number;
    /** 存证描述 */
    EvidenceDescription?: string;
  }

  interface CreateDocDepositResponse {
    /** 业务ID 透传 长度最大不超过64 */
    BusinessId: string | null;
    /** 请求成功，返回存证编码,用于查询存证后续业务数据 */
    EvidenceId: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateHashDepositNoCertRequest {
    /** 数据hash */
    EvidenceHash: string;
    /** 该字段为透传字段，方便调用方做业务处理， 长度最大不超过64 */
    BusinessId?: string;
    /** 算法类型 0 SM3, 1 SHA256, 2 SHA384 默认0 */
    HashType?: number;
    /** 业务扩展信息 */
    EvidenceInfo?: string;
  }

  interface CreateHashDepositNoCertResponse {
    /** 透传字段 */
    BusinessId: string | null;
    /** 存证编码 */
    EvidenceId: string;
    /** 上链时间 */
    EvidenceTime: string;
    /** 区块链交易哈希 */
    EvidenceTxHash: string;
    /** 区块高度 */
    BlockchainHeight: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateHashDepositNoSealRequest {
    /** 数据hash */
    EvidenceHash: string;
    /** 该字段为透传字段，方便调用方做业务处理， 长度最大不超过64 */
    BusinessId?: string;
    /** 算法类型 0 SM3, 1 SHA256, 2 SHA384 默认0 */
    HashType?: number;
    /** 业务扩展信息 */
    EvidenceInfo?: string;
  }

  interface CreateHashDepositNoSealResponse {
    /** 透传字段 */
    BusinessId: string | null;
    /** 存证编码 */
    EvidenceId: string;
    /** 上链时间 */
    EvidenceTime: string;
    /** 区块链交易哈希 */
    EvidenceTxHash: string;
    /** 区块高度 */
    BlockchainHeight: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateHashDepositRequest {
    /** 存证名称(长度最大30) */
    EvidenceName: string;
    /** 数据hash */
    EvidenceHash: string;
    /** 该字段为透传字段，方便调用方做业务处理， 长度最大不超过64 */
    BusinessId?: string;
    /** 算法类型 0 SM3, 1 SHA256, 2 SHA384 默认0 */
    HashType?: number;
    /** 存证描述 */
    EvidenceDescription?: string;
  }

  interface CreateHashDepositResponse {
    /** 透传字段 */
    BusinessId: string | null;
    /** 存证编码 */
    EvidenceId: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateImageDepositRequest {
    /** 存证名称(长度最大30) */
    EvidenceName: string;
    /** 对应数据Base64文件名称 test.png */
    FileName: string;
    /** 文件hash */
    EvidenceHash: string;
    /** 业务ID 透传 长度最大不超过64 */
    BusinessId?: string;
    /** 数据Base64编码，大小不超过5M */
    FileContent?: string;
    /** 资源访问链接 与fileContent必须二选一 */
    FileUrl?: string;
    /** 算法类型 0 SM3, 1 SHA256, 2 SHA384 默认0 */
    HashType?: number;
    /** 存证描述 */
    EvidenceDescription?: string;
  }

  interface CreateImageDepositResponse {
    /** 业务ID 透传 长度最大不超过64 */
    BusinessId: string | null;
    /** 请求成功，返回存证编码,用于查询存证后续业务数据 */
    EvidenceId: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateVideoDepositRequest {
    /** 存证名称(长度最大30) */
    EvidenceName: string;
    /** 对应数据Base64文件名称 */
    FileName: string;
    /** 文件hash */
    EvidenceHash: string;
    /** 业务ID 透传 长度最大不超过64 */
    BusinessId?: string;
    /** 数据Base64编码，大小不超过5M */
    FileContent?: string;
    /** 资源访问链接 与fileContent必须二选一 */
    FileUrl?: string;
    /** 算法类型 0 SM3, 1 SHA256, 2 SHA384 默认0 */
    HashType?: number;
    /** 存证描述 */
    EvidenceDescription?: string;
  }

  interface CreateVideoDepositResponse {
    /** 业务ID 透传 长度最大不超过64 */
    BusinessId: string | null;
    /** 请求成功，返回存证编码,用于查询存证后续业务数据 */
    EvidenceId: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateWebpageDepositRequest {
    /** 存证名称(长度最大30) */
    EvidenceName: string;
    /** 网页链接 */
    EvidenceUrl: string;
    /** 业务ID 透传 长度最大不超过64 */
    BusinessId?: string;
    /** 算法类型 0 SM3, 1 SHA256, 2 SHA384 默认0 */
    HashType?: number;
    /** 存证描述 */
    EvidenceDescription?: string;
  }

  interface CreateWebpageDepositResponse {
    /** 业务ID 透传 长度最大不超过64 */
    BusinessId: string | null;
    /** 请求成功，返回存证编码,用于查询存证后续业务数据 */
    EvidenceId: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface GetDepositCertRequest {
    /** 存证编码 */
    EvidenceId: string;
  }

  interface GetDepositCertResponse {
    /** 存证编码 */
    EvidenceId: string;
    /** 存证证书文件临时链接 */
    EvidenceCert: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface GetDepositFileRequest {
    /** 存证编码 */
    EvidenceId: string;
  }

  interface GetDepositFileResponse {
    /** 存证编号 */
    EvidenceId: string;
    /** 存证文件临时链接 */
    EvidenceFile: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface GetDepositInfoRequest {
    /** 存证编码 */
    EvidenceId: string;
  }

  interface GetDepositInfoResponse {
    /** 存证编号 */
    EvidenceId: string;
    /** 上链时间 */
    EvidenceTime: string;
    /** 区块链交易哈希 */
    EvidenceTxHash: string;
    /** 区块高度 */
    BlockchainHeight: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }
}

/** {@link Btoe 区块链可信取证} */
declare interface Btoe {
  (): Versions;
  /** 音频文件存证 {@link CreateAudioDepositRequest} {@link CreateAudioDepositResponse} */
  CreateAudioDeposit(data: CreateAudioDepositRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAudioDepositResponse>;
  /** 业务数据明文存证 {@link CreateDataDepositRequest} {@link CreateDataDepositResponse} */
  CreateDataDeposit(data: CreateDataDepositRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDataDepositResponse>;
  /** 文档存证 {@link CreateDocDepositRequest} {@link CreateDocDepositResponse} */
  CreateDocDeposit(data: CreateDocDepositRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDocDepositResponse>;
  /** 哈希上链存证 {@link CreateHashDepositRequest} {@link CreateHashDepositResponse} */
  CreateHashDeposit(data: CreateHashDepositRequest, config?: AxiosRequestConfig): AxiosPromise<CreateHashDepositResponse>;
  /** 哈希上链存证(无证书) {@link CreateHashDepositNoCertRequest} {@link CreateHashDepositNoCertResponse} */
  CreateHashDepositNoCert(data: CreateHashDepositNoCertRequest, config?: AxiosRequestConfig): AxiosPromise<CreateHashDepositNoCertResponse>;
  /** 哈希上链存证(有证书，无签章) {@link CreateHashDepositNoSealRequest} {@link CreateHashDepositNoSealResponse} */
  CreateHashDepositNoSeal(data: CreateHashDepositNoSealRequest, config?: AxiosRequestConfig): AxiosPromise<CreateHashDepositNoSealResponse>;
  /** 图片文件存证 {@link CreateImageDepositRequest} {@link CreateImageDepositResponse} */
  CreateImageDeposit(data: CreateImageDepositRequest, config?: AxiosRequestConfig): AxiosPromise<CreateImageDepositResponse>;
  /** 视频文件存证 {@link CreateVideoDepositRequest} {@link CreateVideoDepositResponse} */
  CreateVideoDeposit(data: CreateVideoDepositRequest, config?: AxiosRequestConfig): AxiosPromise<CreateVideoDepositResponse>;
  /** BTOE存证电子凭证查询 {@link GetDepositCertRequest} {@link GetDepositCertResponse} */
  GetDepositCert(data: GetDepositCertRequest, config?: AxiosRequestConfig): AxiosPromise<GetDepositCertResponse>;
  /** 存证文件查询 {@link GetDepositFileRequest} {@link GetDepositFileResponse} */
  GetDepositFile(data: GetDepositFileRequest, config?: AxiosRequestConfig): AxiosPromise<GetDepositFileResponse>;
  /** 存证基本信息查询 {@link GetDepositInfoRequest} {@link GetDepositInfoResponse} */
  GetDepositInfo(data: GetDepositInfoRequest, config?: AxiosRequestConfig): AxiosPromise<GetDepositInfoResponse>;
  /** 区块链交易hash核验接口 {@link VerifyEvidenceBlockChainTxHashRequest} {@link VerifyEvidenceBlockChainTxHashResponse} */
  VerifyEvidenceBlockChainTxHash(data: VerifyEvidenceBlockChainTxHashRequest, config?: AxiosRequestConfig): AxiosPromise<VerifyEvidenceBlockChainTxHashResponse>;
  /** 核验存证内容hash {@link VerifyEvidenceHashRequest} {@link VerifyEvidenceHashResponse} */
  VerifyEvidenceHash(data: VerifyEvidenceHashRequest, config?: AxiosRequestConfig): AxiosPromise<VerifyEvidenceHashResponse>;
  /** @deprecated 音频文件存证 {@link V20210303.CreateAudioDepositRequest} {@link V20210303.CreateAudioDepositResponse} */
  CreateAudioDeposit(data: V20210303.CreateAudioDepositRequest, config: AxiosRequestConfig & V20210303.VersionHeader): AxiosPromise<V20210303.CreateAudioDepositResponse>;
  /** @deprecated 业务数据明文存证 {@link V20210303.CreateDataDepositRequest} {@link V20210303.CreateDataDepositResponse} */
  CreateDataDeposit(data: V20210303.CreateDataDepositRequest, config: AxiosRequestConfig & V20210303.VersionHeader): AxiosPromise<V20210303.CreateDataDepositResponse>;
  /** @deprecated 文档存证 {@link V20210303.CreateDocDepositRequest} {@link V20210303.CreateDocDepositResponse} */
  CreateDocDeposit(data: V20210303.CreateDocDepositRequest, config: AxiosRequestConfig & V20210303.VersionHeader): AxiosPromise<V20210303.CreateDocDepositResponse>;
  /** @deprecated 哈希上链存证 {@link V20210303.CreateHashDepositRequest} {@link V20210303.CreateHashDepositResponse} */
  CreateHashDeposit(data: V20210303.CreateHashDepositRequest, config: AxiosRequestConfig & V20210303.VersionHeader): AxiosPromise<V20210303.CreateHashDepositResponse>;
  /** @deprecated 哈希上链存证(无证书) {@link V20210303.CreateHashDepositNoCertRequest} {@link V20210303.CreateHashDepositNoCertResponse} */
  CreateHashDepositNoCert(data: V20210303.CreateHashDepositNoCertRequest, config: AxiosRequestConfig & V20210303.VersionHeader): AxiosPromise<V20210303.CreateHashDepositNoCertResponse>;
  /** @deprecated 哈希上链存证(有证书，无签章) {@link V20210303.CreateHashDepositNoSealRequest} {@link V20210303.CreateHashDepositNoSealResponse} */
  CreateHashDepositNoSeal(data: V20210303.CreateHashDepositNoSealRequest, config: AxiosRequestConfig & V20210303.VersionHeader): AxiosPromise<V20210303.CreateHashDepositNoSealResponse>;
  /** @deprecated 图片文件存证 {@link V20210303.CreateImageDepositRequest} {@link V20210303.CreateImageDepositResponse} */
  CreateImageDeposit(data: V20210303.CreateImageDepositRequest, config: AxiosRequestConfig & V20210303.VersionHeader): AxiosPromise<V20210303.CreateImageDepositResponse>;
  /** @deprecated 视频文件存证 {@link V20210303.CreateVideoDepositRequest} {@link V20210303.CreateVideoDepositResponse} */
  CreateVideoDeposit(data: V20210303.CreateVideoDepositRequest, config: AxiosRequestConfig & V20210303.VersionHeader): AxiosPromise<V20210303.CreateVideoDepositResponse>;
  /** @deprecated 网页快照存证 {@link V20210303.CreateWebpageDepositRequest} {@link V20210303.CreateWebpageDepositResponse} */
  CreateWebpageDeposit(data: V20210303.CreateWebpageDepositRequest, config: AxiosRequestConfig & V20210303.VersionHeader): AxiosPromise<V20210303.CreateWebpageDepositResponse>;
  /** @deprecated BTOE存证电子凭证查询 {@link V20210303.GetDepositCertRequest} {@link V20210303.GetDepositCertResponse} */
  GetDepositCert(data: V20210303.GetDepositCertRequest, config: AxiosRequestConfig & V20210303.VersionHeader): AxiosPromise<V20210303.GetDepositCertResponse>;
  /** @deprecated 存证文件查询 {@link V20210303.GetDepositFileRequest} {@link V20210303.GetDepositFileResponse} */
  GetDepositFile(data: V20210303.GetDepositFileRequest, config: AxiosRequestConfig & V20210303.VersionHeader): AxiosPromise<V20210303.GetDepositFileResponse>;
  /** @deprecated 存证基本信息查询 {@link V20210303.GetDepositInfoRequest} {@link V20210303.GetDepositInfoResponse} */
  GetDepositInfo(data: V20210303.GetDepositInfoRequest, config: AxiosRequestConfig & V20210303.VersionHeader): AxiosPromise<V20210303.GetDepositInfoResponse>;
}

export declare type Versions = ["2021-05-14", "2021-03-03"];

export default Btoe;
