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
  interface VersionHeader { headers: { 'X-TC-Version': '2020-09-24' } }

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

/** {@link Tsw 微服务观测平台 TSW} */
declare interface Tsw {
  (): Versions;
  /** {@link DescribeComponentAlertObject 获取告警对象-组件告警}({@link DescribeComponentAlertObjectRequest 请求参数}): {@link DescribeComponentAlertObjectResponse 返回参数} */
  DescribeComponentAlertObject(data?: DescribeComponentAlertObjectRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeComponentAlertObjectResponse>;
  /** {@link DescribeServiceAlertObject 获取告警对象-服务告警表}({@link DescribeServiceAlertObjectRequest 请求参数}): {@link DescribeServiceAlertObjectResponse 返回参数} */
  DescribeServiceAlertObject(data?: DescribeServiceAlertObjectRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeServiceAlertObjectResponse>;
  /** {@link DescribeToken 查询token}({@link DescribeTokenRequest 请求参数}): {@link DescribeTokenResponse 返回参数} */
  DescribeToken(data: DescribeTokenRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTokenResponse>;
  /** {@link V20200924.DescribeAgentShell 获取服务接入信息}({@link V20200924.DescribeAgentShellRequest 请求参数}): {@link V20200924.DescribeAgentShellResponse 返回参数} */
  DescribeAgentShell(data: V20200924.DescribeAgentShellRequest, config: AxiosRequestConfig & V20200924.VersionHeader): AxiosPromise<V20200924.DescribeAgentShellResponse>;
}

export declare type Versions = ["2021-04-12", "2020-09-24"];

export default Tsw;
