/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

declare interface DescribeComponentAlertObjectRequest {
}

declare interface DescribeComponentAlertObjectResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeServiceAlertObjectRequest {
}

declare interface DescribeServiceAlertObjectResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeTokenRequest {
  /** 命名空间 */
  Namespace: string;
}

declare interface DescribeTokenResponse {
  /** token */
  Result: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare namespace V20200924 {
  interface VersionHeader { headers: { 'X-Tc-Version': '2020-09-24' } }

  /** agent安装脚本串 */
  interface AgentShell {
    /** 鉴权token */
    Token: string | null;
    /** 数据接收Ip */
    EtlIp: string | null;
    /** 数据接收port */
    EtlPort: string | null;
    /** 手动接入脚本串 */
    ByHandAccess: string | null;
    /** 自动接入脚本串 */
    ByShellAccess: string | null;
    /** SkyWalking数据接收port */
    SkyWalkingPort: string | null;
    /** Zipkin数据接收port */
    ZipkinPort: string | null;
    /** Jaeger数据接收port */
    JaegerPort: string | null;
  }

  interface DescribeAgentShellRequest {
  }

  interface DescribeAgentShellResponse {
    /** 接入信息 */
    Result: AgentShell | null;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }
}

/** 腾讯微服务观测平台 TSW */
declare interface Tsw {
  (): Versions;
  /** 获取告警对象-组件告警 */
  DescribeComponentAlertObject(data?: DescribeComponentAlertObjectRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeComponentAlertObjectResponse>;
  /** 获取告警对象-服务告警表 */
  DescribeServiceAlertObject(data?: DescribeServiceAlertObjectRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeServiceAlertObjectResponse>;
  /** 查询token */
  DescribeToken(data: DescribeTokenRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTokenResponse>;
  /** 获取服务接入信息 */
  DescribeAgentShell(data: V20200924.DescribeAgentShellRequest, config: AxiosRequestConfig & V20200924.VersionHeader): AxiosPromise<V20200924.DescribeAgentShellResponse>;
}

export declare type Versions = ["2021-04-12", "2020-09-24"];

export default Tsw;
