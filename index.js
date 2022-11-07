/* eslint no-bitwise: ["error", { "allow": ["|"] }], no-nested-ternary: 0, class-methods-use-this: 0, no-constructor-return: 0 */
import { createHmac, createHash, createSecretKey } from 'crypto';
import axios from 'axios';

const HEX = 'hex';
const SHA256 = 'sha256';
const CHR_LF = '\n';
const CLIENT = Symbol('CLIENT');
const ACTION = Symbol('ACTION');
const SERVICE = Symbol('SERVICE');
const SECRET_ID = Symbol('SECRET_ID');
const SECRET_KEY = Symbol('SECRET_KEY');
const AUTHORIZATION = 'Authorization';
const CONTENT_TYPE = 'Content-Type';
const BASE_DOMAIN = '.tencentcloudapi.com';
const HOST = 'Host';
const TC3_HMAC_SHA256 = 'TC3-HMAC-SHA256';
const TC3_REQUEST = 'tc3_request';
const X_TC_ACTION = 'X-TC-Action';
const X_TC_REGION = 'X-TC-Region';
const X_TC_TIMESTAMP = 'X-TC-Timestamp';
const X_TC_TOKEN = 'X-TC-Token';
const X_TC_VERSION = 'X-TC-Version';

export const SERVICE_VERSIONS = {
  aa: ['2020-02-24'],
  aai: ['2018-05-22'],
  acp: ['2022-01-05'],
  advisor: ['2020-07-21'],
  af: ['2020-02-26'],
  afc: ['2020-02-26'],
  ame: ['2019-09-16'],
  ams: ['2020-12-29', '2020-06-08'],
  antiddos: ['2020-03-09'],
  apcas: ['2020-11-27'],
  ape: ['2020-05-13'],
  api: ['2020-11-06'],
  apigateway: ['2018-08-08'],
  apm: ['2021-06-22'],
  asr: ['2019-06-14'],
  asw: ['2020-07-22'],
  autoscaling: ['2018-04-19'],
  ba: ['2020-07-20'],
  batch: ['2017-03-12'],
  bda: ['2020-03-24'],
  bi: ['2022-01-05'],
  billing: ['2018-07-09'],
  bizlive: ['2019-03-13'],
  bm: ['2018-04-23'],
  bma: ['2021-06-24'],
  bmeip: ['2018-06-25'],
  bmlb: ['2018-06-25'],
  bmvpc: ['2018-06-25'],
  bpaas: ['2018-12-17'],
  bri: ['2019-03-28'],
  bsca: ['2021-08-11'],
  btoe: ['2021-05-14', '2021-03-03'],
  cam: ['2019-01-16'],
  captcha: ['2019-07-22'],
  car: ['2022-01-10'],
  casb: ['2020-05-07'],
  cat: ['2018-04-09'],
  cbs: ['2017-03-12'],
  ccc: ['2020-02-10'],
  cdb: ['2017-03-20'],
  cdc: ['2020-12-14'],
  cdn: ['2018-06-06'],
  cds: ['2018-04-20'],
  cfg: ['2021-08-20'],
  cfs: ['2019-07-19'],
  cfw: ['2019-09-04'],
  chdfs: ['2020-11-12', '2019-07-18'],
  ciam: ['2022-03-31'],
  cii: ['2021-04-08', '2020-12-10'],
  cim: ['2019-03-18'],
  cis: ['2018-04-08'],
  ckafka: ['2019-08-19'],
  clb: ['2018-03-17'],
  cloudaudit: ['2019-03-19'],
  cloudhsm: ['2019-11-12'],
  cloudstudio: ['2021-05-24'],
  cls: ['2020-10-16'],
  cme: ['2019-10-29'],
  cmq: ['2019-03-04'],
  cms: ['2019-03-21'],
  cpdp: ['2019-08-20'],
  cr: ['2018-03-21'],
  cvm: ['2017-03-12'],
  cwp: ['2018-02-28'],
  cws: ['2018-03-12'],
  cynosdb: ['2019-01-07'],
  dasb: ['2019-10-18'],
  dataintegration: ['2022-06-13'],
  dayu: ['2018-07-09'],
  dbbrain: ['2021-05-27', '2019-10-16'],
  dbdc: ['2020-10-29'],
  dc: ['2018-04-10'],
  dcdb: ['2018-04-11'],
  dlc: ['2021-01-25'],
  dnspod: ['2021-03-23'],
  domain: ['2018-08-08'],
  drm: ['2018-11-15'],
  ds: ['2018-05-23'],
  dtf: ['2020-05-06'],
  dts: ['2021-12-06', '2018-03-30'],
  eb: ['2021-04-16'],
  ecc: ['2018-12-13'],
  ecdn: ['2019-10-12'],
  ecm: ['2019-07-19'],
  eiam: ['2021-04-20'],
  eis: ['2021-06-01', '2020-07-15'],
  emr: ['2019-01-03'],
  es: ['2018-04-16'],
  ess: ['2020-11-11'],
  essbasic: ['2021-05-26', '2020-12-22'],
  facefusion: ['2018-12-01'],
  faceid: ['2018-03-01'],
  fmu: ['2019-12-13'],
  ft: ['2020-03-04'],
  gaap: ['2018-05-29'],
  gme: ['2018-07-11'],
  gpm: ['2020-08-20'],
  gs: ['2019-11-18'],
  gse: ['2019-11-12'],
  habo: ['2018-12-03'],
  hcm: ['2018-11-06'],
  iai: ['2020-03-03', '2018-03-01'],
  ic: ['2019-03-07'],
  icr: ['2021-10-14'],
  ie: ['2020-03-04'],
  iecp: ['2021-09-14'],
  iir: ['2020-04-17'],
  ims: ['2020-12-29', '2020-07-13'],
  iot: ['2018-01-23'],
  iotcloud: ['2021-04-08', '2018-06-14'],
  iotexplorer: ['2019-04-23'],
  iottid: ['2019-04-11'],
  iotvideo: ['2021-11-25', '2020-12-15', '2019-11-26'],
  iotvideoindustry: ['2020-12-01'],
  irp: ['2022-08-05', '2022-03-24'],
  ivld: ['2021-09-03'],
  kms: ['2019-01-18'],
  lcic: ['2022-08-17'],
  lighthouse: ['2020-03-24'],
  live: ['2018-08-01'],
  lowcode: ['2021-01-08'],
  lp: ['2020-02-24'],
  mariadb: ['2017-03-12'],
  market: ['2019-10-10'],
  memcached: ['2019-03-18'],
  mgobe: ['2020-10-14', '2019-09-29'],
  mmps: ['2020-07-10'],
  mna: ['2021-01-19'],
  mongodb: ['2019-07-25', '2018-04-08'],
  monitor: ['2018-07-24'],
  mps: ['2019-06-12'],
  mrs: ['2020-09-10'],
  ms: ['2018-04-08'],
  msp: ['2018-03-19'],
  mvj: ['2019-09-26'],
  nlp: ['2019-04-08'],
  npp: ['2019-08-23'],
  oceanus: ['2019-04-22'],
  ocr: ['2018-11-19'],
  organization: ['2021-03-31', '2018-12-25'],
  partners: ['2018-03-21'],
  pds: ['2021-07-01'],
  postgres: ['2017-03-12'],
  privatedns: ['2020-10-28'],
  pts: ['2021-07-28'],
  rce: ['2020-11-03'],
  redis: ['2018-04-12'],
  region: ['2022-06-27'],
  rkp: ['2019-12-09'],
  rp: ['2020-02-24'],
  rum: ['2021-06-22'],
  scf: ['2018-04-16'],
  ses: ['2020-10-02'],
  smh: ['2021-07-12'],
  smpn: ['2019-08-22'],
  sms: ['2021-01-11', '2019-07-11'],
  soe: ['2018-07-24'],
  solar: ['2018-10-11'],
  sqlserver: ['2018-03-28'],
  ssa: ['2018-06-08'],
  ssl: ['2019-12-05'],
  sslpod: ['2019-06-05'],
  ssm: ['2019-09-23'],
  sts: ['2018-08-13'],
  taf: ['2020-02-10'],
  tag: ['2018-08-13'],
  tan: ['2022-04-20'],
  tat: ['2020-10-28'],
  tav: ['2019-01-18'],
  tbaas: ['2018-04-16'],
  tbm: ['2018-01-29'],
  tbp: ['2019-06-27', '2019-03-11'],
  tcaplusdb: ['2019-08-23'],
  tcb: ['2018-06-08'],
  tcbr: ['2022-02-17'],
  tcex: ['2020-07-27'],
  tci: ['2019-03-18'],
  tcm: ['2021-04-13'],
  tcr: ['2019-09-24'],
  tcss: ['2020-11-01'],
  tdcpg: ['2021-11-18'],
  tdid: ['2021-05-19'],
  tdmq: ['2020-02-17'],
  tds: ['2022-08-01'],
  tem: ['2021-07-01', '2020-12-21'],
  teo: ['2022-09-01', '2022-01-06'],
  thpc: ['2022-04-01', '2021-11-09'],
  tia: ['2018-02-26'],
  tic: ['2020-11-17'],
  ticm: ['2018-11-27'],
  tics: ['2018-11-15'],
  tiems: ['2019-04-16'],
  tiia: ['2019-05-29'],
  tione: ['2021-11-11', '2019-10-22'],
  tiw: ['2019-09-19'],
  tke: ['2018-05-25'],
  tkgdq: ['2019-04-11'],
  tms: ['2020-12-29', '2020-07-13'],
  tmt: ['2018-03-21'],
  trp: ['2021-05-15'],
  trtc: ['2019-07-22'],
  tse: ['2020-12-07'],
  tsf: ['2018-03-26'],
  tsw: ['2021-04-12', '2020-09-24'],
  tts: ['2019-08-23'],
  ump: ['2020-09-18'],
  vm: ['2021-09-22', '2020-12-29', '2020-07-09'],
  vms: ['2020-09-02'],
  vod: ['2018-07-17'],
  vpc: ['2017-03-12'],
  waf: ['2018-01-25'],
  wav: ['2021-01-29'],
  wedata: ['2021-08-20'],
  wss: ['2018-04-26'],
  yinsuda: ['2022-05-27'],
  youmall: ['2018-02-28'],
  yunjing: ['2018-02-28'],
  yunsou: ['2019-11-15', '2018-05-04'],
  zj: ['2019-01-21'],
};

const hash = { [SHA256]: (thing) => createHash(SHA256).update(thing).digest(HEX) };

const hmac = { [SHA256]: (thing, key) => createHmac(SHA256, key).update(thing).digest() };

const ksort = (things = {}) => Object.entries(things).map(([k, v]) => [k, v].map((x) => `${x}`.trim().toLowerCase())).sort(([a], [b]) => (a === b ? 0 : (a > b ? 1 : -1)));

const timstamp = () => Date.now() / 1e3 | 0;

const toUTCYMD = (...val) => (new Date(...val)).toJSON().substring(0, 10);

class TenYun {
  /**
   * @param {string} SecretId
   * @param {import('crypto').BinaryLike} SecretKey
   * @param {?string} Token
   * @param {?string} Region
   */
  constructor(SecretId, SecretKey, Token, Region) {
    this[SECRET_ID] = SecretId;
    this[SECRET_KEY] = createSecretKey(Buffer.concat([Buffer.from('TC3'), Buffer.from(SecretKey)]));
    Object.defineProperty(this, CLIENT, {
      value: axios.create({
        transformRequest: [].concat(axios.defaults.transformRequest, this.signer),
        transformResponse: [].concat(axios.defaults.transformResponse, this.verifier),
        headers: { ...(Token ? { [X_TC_TOKEN]: Token } : 0), ...(Region ? { [X_TC_REGION]: Region } : 0) },
      }),
    });

    return new Proxy(this, { get: this[SERVICE] });
  }

  get [SERVICE]() {
    /**
     * @param {this} instance
     * @param {string} service
     * @return {() => string[]}
     */
    return (instance, service) => {
      if (typeof service === 'symbol' || service === 'inspect') {
        return instance;
      }

      if (!Object.prototype.hasOwnProperty.call(instance, service)) {
        const name = `${service}${BASE_DOMAIN}`;
        Reflect.set(instance, service, new Proxy({ [name]: () => SERVICE_VERSIONS[service]?.slice() ?? [] }[name], { get: this[ACTION] }));
      }

      return Reflect.get(instance, service);
    };
  }

  get [ACTION]() {
    /**
     * @param {() => string[]} endpoint
     * @param {string} action
     * @return {(data?: object|Buffer, config?: import('axios').AxiosRequestConfig) => import('axios').AxiosPromise}
     */
    return (endpoint, action) => {
      if (typeof action === 'symbol' || action === 'inspect') {
        return endpoint;
      }

      if (!Object.prototype.hasOwnProperty.call(endpoint, action)) {
        const client = this[CLIENT];
        Reflect.set(endpoint, action, {
          async [action](data = {}, config = {}) {
            return client.post(`https://${endpoint.name}/`, data, {
              ...config,
              headers: {
                [HOST]: endpoint.name,
                [X_TC_VERSION]: endpoint().shift(),
                ...config?.headers,
                [X_TC_ACTION]: action,
              },
            });
          },
        }[action]);
      }

      return Reflect.get(endpoint, action);
    };
  }

  get signer() {
    /**
     * @param {import('crypto').BinaryLike} data
     * @param {import('axios').AxiosRequestHeaders} headers
     */
    return (data, headers = {}) => {
      Reflect.set(headers, X_TC_TIMESTAMP, headers[X_TC_TIMESTAMP] || timstamp());
      const def = ksort({
        [CONTENT_TYPE]: headers[CONTENT_TYPE],
        [HOST]: headers[HOST],
      });
      const CanonicalHeaders = def.reduce((x, [k, v]) => `${x}${k}:${v}${CHR_LF}`, '');
      const SignedHeaders = def.map(([k]) => k).join(';');
      const scopes = [toUTCYMD(headers[X_TC_TIMESTAMP] * 1e3), headers[HOST]?.replace(BASE_DOMAIN, '')?.toLowerCase(), TC3_REQUEST];
      const CredentialScope = scopes.join('/');
      const Signature = hmac[SHA256]([
        TC3_HMAC_SHA256,
        headers[X_TC_TIMESTAMP],
        CredentialScope,
        hash[SHA256]([
          'POST',
          '/',
          '',
          CanonicalHeaders,
          SignedHeaders,
          hash[SHA256](data),
        ].join(CHR_LF)),
      ].join(CHR_LF), scopes.reduce((k, v) => hmac[SHA256](v, k), this[SECRET_KEY])).toString(HEX);

      Reflect.set(headers, AUTHORIZATION, [
        TC3_HMAC_SHA256,
        [
          ['Credential', `${this[SECRET_ID]}/${CredentialScope}`],
          ['SignedHeaders', SignedHeaders],
          ['Signature', Signature],
        ].map((x) => x.join('=')).join(','),
      ].join(' '));
      Reflect.deleteProperty(headers, HOST);

      return data;
    };
  }

  get verifier() {
    /**
     * @param {object|Buffer} data
     * @param {import('axios').AxiosResponseHeaders} headers
     */
    return (data, headers = {}) => {
      if (typeof data === 'object' && data !== null) {
        Reflect.deleteProperty(headers, 'content-length');
        if (data?.Response?.Error) {
          const err = new Error(data.Response.Error?.Message);
          err.code = data.Response.Error?.Code;
          err.data = data.Response;
          throw err;
        }

        return data?.Response;
      }

      return data;
    };
  }

  get client() { return this[CLIENT]; }
}

export default TenYun;