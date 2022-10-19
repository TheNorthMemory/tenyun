/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 文件信息类型 */
declare interface FileInfoType {
  /** 判定渠道 */
  DetectId: string;
  /** 检测优先级 */
  DetectPriority: string;
  /** 引擎优先级 */
  EnginePriority: string;
  /** 样本是否存在 */
  FileExist: string;
  /** 文件上传 */
  FileForceUpload: string;
  /** 文件大小 */
  FileSize: string;
  /** 文件上传时间 */
  FileupTime: string;
  /** 病毒文件全名 */
  FullVirusName: string;
  /** IDC位置 */
  IdcPosition: string;
  /** 文件md5值 */
  Md5Type: string;
  /** PE结构是否存在 */
  PeExist: string;
  /** PE结构上传 */
  PeForceUpload: string;
  /** 安全性等级 */
  SafeLevel: string;
  /** 扫描时间 */
  ScanModiTime: string;
  /** 子判定渠道 */
  SubdetectId: string;
  /** 病毒名 */
  UserDefName: string;
  /** 病毒类型 */
  VirusType: string;
  /** 白名单分数 */
  WhiteScore: string;
}

/** { "source": "inergj_ai_predict", "stamp": "msraminer", "time": 1531994023 } */
declare interface IntelligenceType {
  /** 来源 */
  Source: string;
  /** 标记 */
  Stamp: string;
  /** 时间 */
  Time: number;
}

/** 标签及对应的解释 */
declare interface TagType {
  /** 标签 */
  Tag: string;
  /** 标签对应的中文解释 */
  Desc: string;
}

declare interface DescribeDomainInfoRequest {
  /** 要查询的域名 */
  Key: string;
  /** 附加字段，是否返回上下文。当为0时不返回上下文，当为1时返回上下文。 */
  Option?: number;
}

declare interface DescribeDomainInfoResponse {
  /** 是否有数据，0代表有数据，1代表没有数据 */
  ReturnCode?: number;
  /** 判定结果，如：black、white、grey */
  Result?: string;
  /** 置信度，取值0-100 */
  Confidence?: number;
  /** 威胁类型。botnet = 僵尸网络trojan = 木马ransomware = 勒索软件worm = 蠕虫dga = 域名生成算法c2 = c&ccompromised = 失陷主机dynamicIP = 动态IPproxy = 代理idc = idc 机房whitelist = 白名单tor = 暗网miner = 挖矿maleware site = 恶意站点malware IP = 恶意IP等等 */
  ThreatTypes?: string[];
  /** 恶意标签，对应的团伙，家族等信息。 */
  Tags?: TagType[];
  /** 对应的历史上的威胁情报事件 */
  Intelligences?: IntelligenceType[];
  /** 情报相关的上下文 */
  Context?: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeFileInfoRequest {
  /** 要查询文件的MD5 */
  Key: string;
  /** 附加字段，是否返回上下文。当为0时不返回上下文，当为1时返回上下文。 */
  Option?: number;
}

declare interface DescribeFileInfoResponse {
  /** 是否有数据，0代表有数据，1代表没有数据 */
  ReturnCode?: number;
  /** 判定结果，如：black、white、grey */
  Result?: string;
  /** 置信度，取值0-100 */
  Confidence?: number;
  /** 文件类型，文件hash（md5,sha1,sha256）,文件大小等等文件基础信息 */
  FileInfo?: FileInfoType[];
  /** 恶意标签，对应的团伙，家族等信息。 */
  Tags?: TagType[];
  /** 对应的历史上的威胁情报事件 */
  Intelligences?: IntelligenceType[];
  /** 情报相关的上下文 */
  Context?: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeIpInfoRequest {
  /** 要查询的IP */
  Key: string;
  /** 附加字段，是否返回上下文。当为0时不返回上下文，当为1时返回上下文。 */
  Option?: number;
}

declare interface DescribeIpInfoResponse {
  /** 是否有数据，0代表有数据，1代表没有数据 */
  ReturnCode?: number;
  /** 判定结果，如：black、white、grey */
  Result?: string;
  /** 置信度，取值0-100 */
  Confidence?: number;
  /** 威胁类型。botnet = 僵尸网络trojan = 木马ransomware = 勒索软件worm = 蠕虫dga = 域名生成算法c2 = c&ccompromised = 失陷主机dynamicIP = 动态IPproxy = 代理idc = idc 机房whitelist = 白名单tor = 暗网miner = 挖矿maleware site = 恶意站点malware IP = 恶意IP等等 */
  ThreatTypes?: string[];
  /** 恶意标签，对应的团伙，家族等信息。 */
  Tags?: TagType[];
  /** 对应的历史上的威胁情报事件 */
  Intelligences?: IntelligenceType[];
  /** 情报相关的上下文 */
  Context?: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeThreatInfoRequest {
  /** 查询对象，域名或IP */
  Key: string;
  /** 查询类型，当前取值为domain或ip */
  Type: string;
  /** 附加字段，是否返回上下文。当为0时不返回上下文，当为1时返回上下文。 */
  Option?: number;
}

declare interface DescribeThreatInfoResponse {
  /** 是否有数据，0代表有数据，1代表没有数据 */
  ReturnCode?: number;
  /** 判定结果，如：black、white、grey */
  Result?: string;
  /** 置信度，取值0-100 */
  Confidence?: number;
  /** 威胁类型。botnet = 僵尸网络trojan = 木马ransomware = 勒索软件worm = 蠕虫dga = 域名生成算法c2 = c&ccompromised = 失陷主机dynamicIP = 动态IPproxy = 代理idc = idc 机房whitelist = 白名单tor = 暗网miner = 挖矿maleware site = 恶意站点malware IP = 恶意IP等等 */
  ThreatTypes?: string[];
  /** 恶意标签，对应的团伙，家族等信息。 */
  Tags?: string[];
  /** 当前状态active = 活跃sinkholed = sinkholedinactive = 不活跃unknown = 未知expired = 过期 */
  Status?: string;
  /** 情报相关的上下文，参数option=1 的时候提供每个数据默认为3 条 */
  Context?: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

/** 威胁情报云查服务 */
declare interface Tics {
  (): Versions;
  /** 查询域名信誉 */
  DescribeDomainInfo(data: DescribeDomainInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDomainInfoResponse>;
  /** 查询文件信誉 */
  DescribeFileInfo(data: DescribeFileInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFileInfoResponse>;
  /** 查询IP信誉 */
  DescribeIpInfo(data: DescribeIpInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIpInfoResponse>;
  /** 查询威胁情报 */
  DescribeThreatInfo(data: DescribeThreatInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeThreatInfoResponse>;
}

export declare type Versions = ["2018-11-15"];

export default Tics;
