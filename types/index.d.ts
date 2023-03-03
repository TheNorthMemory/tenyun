/// <reference types="node" />

import { BinaryLike } from "crypto";
import { AxiosInstance, AxiosRequestConfig, AxiosPromise, AxiosRequestHeaders, AxiosResponseHeaders } from "axios";

import Aa, { Versions as AaVersions } from "./aa";
import Aai, { Versions as AaiVersions } from "./aai";
import Acp, { Versions as AcpVersions } from "./acp";
import Advisor, { Versions as AdvisorVersions } from "./advisor";
import Af, { Versions as AfVersions } from "./af";
import Afc, { Versions as AfcVersions } from "./afc";
import Ame, { Versions as AmeVersions } from "./ame";
import Ams, { Versions as AmsVersions } from "./ams";
import Anicloud, { Versions as AnicloudVersions } from "./anicloud";
import Antiddos, { Versions as AntiddosVersions } from "./antiddos";
import Apcas, { Versions as ApcasVersions } from "./apcas";
import Ape, { Versions as ApeVersions } from "./ape";
import Api, { Versions as ApiVersions } from "./api";
import Apigateway, { Versions as ApigatewayVersions } from "./apigateway";
import Apm, { Versions as ApmVersions } from "./apm";
import Asr, { Versions as AsrVersions } from "./asr";
import Asw, { Versions as AswVersions } from "./asw";
import As, { Versions as AsVersions } from "./as";
import Ba, { Versions as BaVersions } from "./ba";
import Batch, { Versions as BatchVersions } from "./batch";
import Bda, { Versions as BdaVersions } from "./bda";
import Bi, { Versions as BiVersions } from "./bi";
import Billing, { Versions as BillingVersions } from "./billing";
import Bizlive, { Versions as BizliveVersions } from "./bizlive";
import Bm, { Versions as BmVersions } from "./bm";
import Bma, { Versions as BmaVersions } from "./bma";
import Bmeip, { Versions as BmeipVersions } from "./bmeip";
import Bmlb, { Versions as BmlbVersions } from "./bmlb";
import Bmvpc, { Versions as BmvpcVersions } from "./bmvpc";
import Bpaas, { Versions as BpaasVersions } from "./bpaas";
import Bri, { Versions as BriVersions } from "./bri";
import Bsca, { Versions as BscaVersions } from "./bsca";
import Btoe, { Versions as BtoeVersions } from "./btoe";
import Cam, { Versions as CamVersions } from "./cam";
import Captcha, { Versions as CaptchaVersions } from "./captcha";
import Car, { Versions as CarVersions } from "./car";
import Casb, { Versions as CasbVersions } from "./casb";
import Cat, { Versions as CatVersions } from "./cat";
import Cbs, { Versions as CbsVersions } from "./cbs";
import Ccc, { Versions as CccVersions } from "./ccc";
import Cdb, { Versions as CdbVersions } from "./cdb";
import Cdc, { Versions as CdcVersions } from "./cdc";
import Cdn, { Versions as CdnVersions } from "./cdn";
import Cds, { Versions as CdsVersions } from "./cds";
import Cdwch, { Versions as CdwchVersions } from "./cdwch";
import Cfg, { Versions as CfgVersions } from "./cfg";
import Cfs, { Versions as CfsVersions } from "./cfs";
import Cfw, { Versions as CfwVersions } from "./cfw";
import Chdfs, { Versions as ChdfsVersions } from "./chdfs";
import Ciam, { Versions as CiamVersions } from "./ciam";
import Cii, { Versions as CiiVersions } from "./cii";
import Cim, { Versions as CimVersions } from "./cim";
import Cis, { Versions as CisVersions } from "./cis";
import Ckafka, { Versions as CkafkaVersions } from "./ckafka";
import Clb, { Versions as ClbVersions } from "./clb";
import Cloudaudit, { Versions as CloudauditVersions } from "./cloudaudit";
import Cloudhsm, { Versions as CloudhsmVersions } from "./cloudhsm";
import Cloudstudio, { Versions as CloudstudioVersions } from "./cloudstudio";
import Cls, { Versions as ClsVersions } from "./cls";
import Cme, { Versions as CmeVersions } from "./cme";
import Cmq, { Versions as CmqVersions } from "./cmq";
import Cms, { Versions as CmsVersions } from "./cms";
import Cpdp, { Versions as CpdpVersions } from "./cpdp";
import Cr, { Versions as CrVersions } from "./cr";
import Cvm, { Versions as CvmVersions } from "./cvm";
import Cwp, { Versions as CwpVersions } from "./cwp";
import Cws, { Versions as CwsVersions } from "./cws";
import Cynosdb, { Versions as CynosdbVersions } from "./cynosdb";
import Dasb, { Versions as DasbVersions } from "./dasb";
import Dataintegration, { Versions as DataintegrationVersions } from "./dataintegration";
import Dayu, { Versions as DayuVersions } from "./dayu";
import Dbbrain, { Versions as DbbrainVersions } from "./dbbrain";
import Dbdc, { Versions as DbdcVersions } from "./dbdc";
import Dc, { Versions as DcVersions } from "./dc";
import Dcdb, { Versions as DcdbVersions } from "./dcdb";
import Dlc, { Versions as DlcVersions } from "./dlc";
import Dnspod, { Versions as DnspodVersions } from "./dnspod";
import Domain, { Versions as DomainVersions } from "./domain";
import Drm, { Versions as DrmVersions } from "./drm";
import Ds, { Versions as DsVersions } from "./ds";
import Dtf, { Versions as DtfVersions } from "./dtf";
import Dts, { Versions as DtsVersions } from "./dts";
import Eb, { Versions as EbVersions } from "./eb";
import Ecc, { Versions as EccVersions } from "./ecc";
import Ecdn, { Versions as EcdnVersions } from "./ecdn";
import Ecm, { Versions as EcmVersions } from "./ecm";
import Eiam, { Versions as EiamVersions } from "./eiam";
import Eis, { Versions as EisVersions } from "./eis";
import Emr, { Versions as EmrVersions } from "./emr";
import Es, { Versions as EsVersions } from "./es";
import Ess, { Versions as EssVersions } from "./ess";
import Essbasic, { Versions as EssbasicVersions } from "./essbasic";
import Facefusion, { Versions as FacefusionVersions } from "./facefusion";
import Faceid, { Versions as FaceidVersions } from "./faceid";
import Fmu, { Versions as FmuVersions } from "./fmu";
import Ft, { Versions as FtVersions } from "./ft";
import Gaap, { Versions as GaapVersions } from "./gaap";
import Gme, { Versions as GmeVersions } from "./gme";
import Goosefs, { Versions as GoosefsVersions } from "./goosefs";
import Gpm, { Versions as GpmVersions } from "./gpm";
import Gs, { Versions as GsVersions } from "./gs";
import Gse, { Versions as GseVersions } from "./gse";
import Habo, { Versions as HaboVersions } from "./habo";
import Hasim, { Versions as HasimVersions } from "./hasim";
import Hcm, { Versions as HcmVersions } from "./hcm";
import Iai, { Versions as IaiVersions } from "./iai";
import Ic, { Versions as IcVersions } from "./ic";
import Icr, { Versions as IcrVersions } from "./icr";
import Ie, { Versions as IeVersions } from "./ie";
import Iecp, { Versions as IecpVersions } from "./iecp";
import Iir, { Versions as IirVersions } from "./iir";
import Ims, { Versions as ImsVersions } from "./ims";
import Iot, { Versions as IotVersions } from "./iot";
import Iotcloud, { Versions as IotcloudVersions } from "./iotcloud";
import Iotexplorer, { Versions as IotexplorerVersions } from "./iotexplorer";
import Iottid, { Versions as IottidVersions } from "./iottid";
import Iotvideo, { Versions as IotvideoVersions } from "./iotvideo";
import Iotvideoindustry, { Versions as IotvideoindustryVersions } from "./iotvideoindustry";
import Irp, { Versions as IrpVersions } from "./irp";
import Ivld, { Versions as IvldVersions } from "./ivld";
import Keewidb, { Versions as KeewidbVersions } from "./keewidb";
import Kms, { Versions as KmsVersions } from "./kms";
import Lcic, { Versions as LcicVersions } from "./lcic";
import Lighthouse, { Versions as LighthouseVersions } from "./lighthouse";
import Live, { Versions as LiveVersions } from "./live";
import Lowcode, { Versions as LowcodeVersions } from "./lowcode";
import Lp, { Versions as LpVersions } from "./lp";
import Mariadb, { Versions as MariadbVersions } from "./mariadb";
import Market, { Versions as MarketVersions } from "./market";
import Memcached, { Versions as MemcachedVersions } from "./memcached";
import Mgobe, { Versions as MgobeVersions } from "./mgobe";
import Mmps, { Versions as MmpsVersions } from "./mmps";
import Mna, { Versions as MnaVersions } from "./mna";
import Mongodb, { Versions as MongodbVersions } from "./mongodb";
import Monitor, { Versions as MonitorVersions } from "./monitor";
import Mps, { Versions as MpsVersions } from "./mps";
import Mrs, { Versions as MrsVersions } from "./mrs";
import Ms, { Versions as MsVersions } from "./ms";
import Msp, { Versions as MspVersions } from "./msp";
import Mvj, { Versions as MvjVersions } from "./mvj";
import Nlp, { Versions as NlpVersions } from "./nlp";
import Npp, { Versions as NppVersions } from "./npp";
import Oceanus, { Versions as OceanusVersions } from "./oceanus";
import Ocr, { Versions as OcrVersions } from "./ocr";
import Open, { Versions as OpenVersions } from "./open";
import Organization, { Versions as OrganizationVersions } from "./organization";
import Partners, { Versions as PartnersVersions } from "./partners";
import Pds, { Versions as PdsVersions } from "./pds";
import Postgres, { Versions as PostgresVersions } from "./postgres";
import Privatedns, { Versions as PrivatednsVersions } from "./privatedns";
import Pts, { Versions as PtsVersions } from "./pts";
import Rce, { Versions as RceVersions } from "./rce";
import Redis, { Versions as RedisVersions } from "./redis";
import Region, { Versions as RegionVersions } from "./region";
import Rkp, { Versions as RkpVersions } from "./rkp";
import Rp, { Versions as RpVersions } from "./rp";
import Rum, { Versions as RumVersions } from "./rum";
import Scf, { Versions as ScfVersions } from "./scf";
import Ses, { Versions as SesVersions } from "./ses";
import Smh, { Versions as SmhVersions } from "./smh";
import Smpn, { Versions as SmpnVersions } from "./smpn";
import Sms, { Versions as SmsVersions } from "./sms";
import Soe, { Versions as SoeVersions } from "./soe";
import Solar, { Versions as SolarVersions } from "./solar";
import Sqlserver, { Versions as SqlserverVersions } from "./sqlserver";
import Ssa, { Versions as SsaVersions } from "./ssa";
import Ssl, { Versions as SslVersions } from "./ssl";
import Sslpod, { Versions as SslpodVersions } from "./sslpod";
import Ssm, { Versions as SsmVersions } from "./ssm";
import Sts, { Versions as StsVersions } from "./sts";
import Taf, { Versions as TafVersions } from "./taf";
import Tag, { Versions as TagVersions } from "./tag";
import Tan, { Versions as TanVersions } from "./tan";
import Tat, { Versions as TatVersions } from "./tat";
import Tav, { Versions as TavVersions } from "./tav";
import Tbaas, { Versions as TbaasVersions } from "./tbaas";
import Tbm, { Versions as TbmVersions } from "./tbm";
import Tbp, { Versions as TbpVersions } from "./tbp";
import Tcaplusdb, { Versions as TcaplusdbVersions } from "./tcaplusdb";
import Tcb, { Versions as TcbVersions } from "./tcb";
import Tcbr, { Versions as TcbrVersions } from "./tcbr";
import Tcex, { Versions as TcexVersions } from "./tcex";
import Tci, { Versions as TciVersions } from "./tci";
import Tcm, { Versions as TcmVersions } from "./tcm";
import Tcr, { Versions as TcrVersions } from "./tcr";
import Tcss, { Versions as TcssVersions } from "./tcss";
import Tdcpg, { Versions as TdcpgVersions } from "./tdcpg";
import Tdid, { Versions as TdidVersions } from "./tdid";
import Tdmq, { Versions as TdmqVersions } from "./tdmq";
import Tds, { Versions as TdsVersions } from "./tds";
import Tem, { Versions as TemVersions } from "./tem";
import Teo, { Versions as TeoVersions } from "./teo";
import Thpc, { Versions as ThpcVersions } from "./thpc";
import Tia, { Versions as TiaVersions } from "./tia";
import Tic, { Versions as TicVersions } from "./tic";
import Ticm, { Versions as TicmVersions } from "./ticm";
import Tics, { Versions as TicsVersions } from "./tics";
import Tiems, { Versions as TiemsVersions } from "./tiems";
import Tiia, { Versions as TiiaVersions } from "./tiia";
import Tione, { Versions as TioneVersions } from "./tione";
import Tiw, { Versions as TiwVersions } from "./tiw";
import Tke, { Versions as TkeVersions } from "./tke";
import Tkgdq, { Versions as TkgdqVersions } from "./tkgdq";
import Tms, { Versions as TmsVersions } from "./tms";
import Tmt, { Versions as TmtVersions } from "./tmt";
import Trdp, { Versions as TrdpVersions } from "./trdp";
import Trp, { Versions as TrpVersions } from "./trp";
import Trtc, { Versions as TrtcVersions } from "./trtc";
import Tse, { Versions as TseVersions } from "./tse";
import Tsf, { Versions as TsfVersions } from "./tsf";
import Tsw, { Versions as TswVersions } from "./tsw";
import Tts, { Versions as TtsVersions } from "./tts";
import Ump, { Versions as UmpVersions } from "./ump";
import Vm, { Versions as VmVersions } from "./vm";
import Vms, { Versions as VmsVersions } from "./vms";
import Vod, { Versions as VodVersions } from "./vod";
import Vpc, { Versions as VpcVersions } from "./vpc";
import Waf, { Versions as WafVersions } from "./waf";
import Wav, { Versions as WavVersions } from "./wav";
import Wedata, { Versions as WedataVersions } from "./wedata";
import Wss, { Versions as WssVersions } from "./wss";
import Yinsuda, { Versions as YinsudaVersions } from "./yinsuda";
import Youmall, { Versions as YoumallVersions } from "./youmall";
import Yunjing, { Versions as YunjingVersions } from "./yunjing";
import Yunsou, { Versions as YunsouVersions } from "./yunsou";
import Zj, { Versions as ZjVersions } from "./zj";

export declare type LANGUAGES = ["zh-CN", "en-US"];

export declare type SERVICE_VERSIONS = {
  aa: AaVersions,
  aai: AaiVersions,
  acp: AcpVersions,
  advisor: AdvisorVersions,
  af: AfVersions,
  afc: AfcVersions,
  ame: AmeVersions,
  ams: AmsVersions,
  anicloud: AnicloudVersions,
  antiddos: AntiddosVersions,
  apcas: ApcasVersions,
  ape: ApeVersions,
  api: ApiVersions,
  apigateway: ApigatewayVersions,
  apm: ApmVersions,
  asr: AsrVersions,
  asw: AswVersions,
  as: AsVersions,
  ba: BaVersions,
  batch: BatchVersions,
  bda: BdaVersions,
  bi: BiVersions,
  billing: BillingVersions,
  bizlive: BizliveVersions,
  bm: BmVersions,
  bma: BmaVersions,
  bmeip: BmeipVersions,
  bmlb: BmlbVersions,
  bmvpc: BmvpcVersions,
  bpaas: BpaasVersions,
  bri: BriVersions,
  bsca: BscaVersions,
  btoe: BtoeVersions,
  cam: CamVersions,
  captcha: CaptchaVersions,
  car: CarVersions,
  casb: CasbVersions,
  cat: CatVersions,
  cbs: CbsVersions,
  ccc: CccVersions,
  cdb: CdbVersions,
  cdc: CdcVersions,
  cdn: CdnVersions,
  cds: CdsVersions,
  cdwch: CdwchVersions,
  cfg: CfgVersions,
  cfs: CfsVersions,
  cfw: CfwVersions,
  chdfs: ChdfsVersions,
  ciam: CiamVersions,
  cii: CiiVersions,
  cim: CimVersions,
  cis: CisVersions,
  ckafka: CkafkaVersions,
  clb: ClbVersions,
  cloudaudit: CloudauditVersions,
  cloudhsm: CloudhsmVersions,
  cloudstudio: CloudstudioVersions,
  cls: ClsVersions,
  cme: CmeVersions,
  cmq: CmqVersions,
  cms: CmsVersions,
  cpdp: CpdpVersions,
  cr: CrVersions,
  cvm: CvmVersions,
  cwp: CwpVersions,
  cws: CwsVersions,
  cynosdb: CynosdbVersions,
  dasb: DasbVersions,
  dataintegration: DataintegrationVersions,
  dayu: DayuVersions,
  dbbrain: DbbrainVersions,
  dbdc: DbdcVersions,
  dc: DcVersions,
  dcdb: DcdbVersions,
  dlc: DlcVersions,
  dnspod: DnspodVersions,
  domain: DomainVersions,
  drm: DrmVersions,
  ds: DsVersions,
  dtf: DtfVersions,
  dts: DtsVersions,
  eb: EbVersions,
  ecc: EccVersions,
  ecdn: EcdnVersions,
  ecm: EcmVersions,
  eiam: EiamVersions,
  eis: EisVersions,
  emr: EmrVersions,
  es: EsVersions,
  ess: EssVersions,
  essbasic: EssbasicVersions,
  facefusion: FacefusionVersions,
  faceid: FaceidVersions,
  fmu: FmuVersions,
  ft: FtVersions,
  gaap: GaapVersions,
  gme: GmeVersions,
  goosefs: GoosefsVersions,
  gpm: GpmVersions,
  gs: GsVersions,
  gse: GseVersions,
  habo: HaboVersions,
  hasim: HasimVersions,
  hcm: HcmVersions,
  iai: IaiVersions,
  ic: IcVersions,
  icr: IcrVersions,
  ie: IeVersions,
  iecp: IecpVersions,
  iir: IirVersions,
  ims: ImsVersions,
  iot: IotVersions,
  iotcloud: IotcloudVersions,
  iotexplorer: IotexplorerVersions,
  iottid: IottidVersions,
  iotvideo: IotvideoVersions,
  iotvideoindustry: IotvideoindustryVersions,
  irp: IrpVersions,
  ivld: IvldVersions,
  keewidb: KeewidbVersions,
  kms: KmsVersions,
  lcic: LcicVersions,
  lighthouse: LighthouseVersions,
  live: LiveVersions,
  lowcode: LowcodeVersions,
  lp: LpVersions,
  mariadb: MariadbVersions,
  market: MarketVersions,
  memcached: MemcachedVersions,
  mgobe: MgobeVersions,
  mmps: MmpsVersions,
  mna: MnaVersions,
  mongodb: MongodbVersions,
  monitor: MonitorVersions,
  mps: MpsVersions,
  mrs: MrsVersions,
  ms: MsVersions,
  msp: MspVersions,
  mvj: MvjVersions,
  nlp: NlpVersions,
  npp: NppVersions,
  oceanus: OceanusVersions,
  ocr: OcrVersions,
  open: OpenVersions,
  organization: OrganizationVersions,
  partners: PartnersVersions,
  pds: PdsVersions,
  postgres: PostgresVersions,
  privatedns: PrivatednsVersions,
  pts: PtsVersions,
  rce: RceVersions,
  redis: RedisVersions,
  region: RegionVersions,
  rkp: RkpVersions,
  rp: RpVersions,
  rum: RumVersions,
  scf: ScfVersions,
  ses: SesVersions,
  smh: SmhVersions,
  smpn: SmpnVersions,
  sms: SmsVersions,
  soe: SoeVersions,
  solar: SolarVersions,
  sqlserver: SqlserverVersions,
  ssa: SsaVersions,
  ssl: SslVersions,
  sslpod: SslpodVersions,
  ssm: SsmVersions,
  sts: StsVersions,
  taf: TafVersions,
  tag: TagVersions,
  tan: TanVersions,
  tat: TatVersions,
  tav: TavVersions,
  tbaas: TbaasVersions,
  tbm: TbmVersions,
  tbp: TbpVersions,
  tcaplusdb: TcaplusdbVersions,
  tcb: TcbVersions,
  tcbr: TcbrVersions,
  tcex: TcexVersions,
  tci: TciVersions,
  tcm: TcmVersions,
  tcr: TcrVersions,
  tcss: TcssVersions,
  tdcpg: TdcpgVersions,
  tdid: TdidVersions,
  tdmq: TdmqVersions,
  tds: TdsVersions,
  tem: TemVersions,
  teo: TeoVersions,
  thpc: ThpcVersions,
  tia: TiaVersions,
  tic: TicVersions,
  ticm: TicmVersions,
  tics: TicsVersions,
  tiems: TiemsVersions,
  tiia: TiiaVersions,
  tione: TioneVersions,
  tiw: TiwVersions,
  tke: TkeVersions,
  tkgdq: TkgdqVersions,
  tms: TmsVersions,
  tmt: TmtVersions,
  trdp: TrdpVersions,
  trp: TrpVersions,
  trtc: TrtcVersions,
  tse: TseVersions,
  tsf: TsfVersions,
  tsw: TswVersions,
  tts: TtsVersions,
  ump: UmpVersions,
  vm: VmVersions,
  vms: VmsVersions,
  vod: VodVersions,
  vpc: VpcVersions,
  waf: WafVersions,
  wav: WavVersions,
  wedata: WedataVersions,
  wss: WssVersions,
  yinsuda: YinsudaVersions,
  youmall: YoumallVersions,
  yunjing: YunjingVersions,
  yunsou: YunsouVersions,
  zj: ZjVersions,
};

declare interface CloudServiceActions {
  (): string[];
  [S: string]: <T = any, D = AxiosRequestConfig>(data?: T, config?: D) => AxiosPromise;
}

declare type CloudServices = {
  [K in keyof SERVICE_VERSIONS as Lowercase<K>]: CloudServiceActions;
}

declare interface CloudInstance {
  new (SecretId: string, SecretKey: BinaryLike, Token?: string, Region?: string): TenYun;

  get signer(): <T = BinaryLike, D = AxiosRequestHeaders>(data: T, headers: D) => T;

  get verifier(): <T = object | Buffer, D = AxiosResponseHeaders>(data: T, headers: D) => T;

  get client(): AxiosInstance;
}

declare type TenYun = CloudInstance & CloudServices & {
  /** {@link Aa 活动防刷} */
  aa: Aa,
  aai: Aai,
  /** {@link Acp 应用合规平台} */
  acp: Acp,
  /** {@link Advisor 云顾问} */
  advisor: Advisor,
  /** {@link Af 借贷反欺诈} */
  af: Af,
  /** {@link Afc 定制建模} */
  afc: Afc,
  /** {@link Ame 正版曲库直通车} */
  ame: Ame,
  /** {@link Ams 音频内容安全} */
  ams: Ams,
  /** {@link Anicloud 动效素材服务} */
  anicloud: Anicloud,
  /** {@link Antiddos T-Sec-DDoS防护(Anti-DDoS)} */
  antiddos: Antiddos,
  /** {@link Apcas 汽车精准获客服务} */
  apcas: Apcas,
  /** {@link Ape 正版图库直通车} */
  ape: Ape,
  /** {@link Api 云 API} */
  api: Api,
  /** {@link Apigateway API 网关} */
  apigateway: Apigateway,
  /** {@link Apm 应用性能观测} */
  apm: Apm,
  /** {@link Asr 语音识别} */
  asr: Asr,
  /** {@link Asw 应用与服务编排工作流} */
  asw: Asw,
  /** {@link As 弹性伸缩} */
  as: As,
  /** {@link Ba 网站备案} */
  ba: Ba,
  /** {@link Batch 批量计算} */
  batch: Batch,
  /** {@link Bda 人体分析} */
  bda: Bda,
  /** {@link Bi 商业智能分析 BI} */
  bi: Bi,
  /** {@link Billing 费用中心} */
  billing: Billing,
  /** {@link Bizlive 商业直播} */
  bizlive: Bizlive,
  /** {@link Bm 黑石物理服务器CPM} */
  bm: Bm,
  /** {@link Bma 品牌经营管家} */
  bma: Bma,
  /** {@link Bmeip 黑石弹性公网IP} */
  bmeip: Bmeip,
  /** {@link Bmlb 黑石负载均衡} */
  bmlb: Bmlb,
  /** {@link Bmvpc 黑石私有网络} */
  bmvpc: Bmvpc,
  /** {@link Bpaas 商业流程服务} */
  bpaas: Bpaas,
  /** {@link Bri 业务风险情报} */
  bri: Bri,
  /** {@link Bsca 二进制软件成分分析} */
  bsca: Bsca,
  /** {@link Btoe 区块链可信取证} */
  btoe: Btoe,
  /** {@link Cam 访问管理} */
  cam: Cam,
  /** {@link Captcha 验证码} */
  captcha: Captcha,
  /** {@link Car 应用云渲染} */
  car: Car,
  /** {@link Casb 云访问安全代理} */
  casb: Casb,
  /** {@link Cat 云拨测} */
  cat: Cat,
  /** {@link Cbs 云硬盘} */
  cbs: Cbs,
  /** {@link Ccc 云呼叫中心} */
  ccc: Ccc,
  /** {@link Cdb 云数据库 MySQL} */
  cdb: Cdb,
  /** {@link Cdc 本地专用集群} */
  cdc: Cdc,
  /** {@link Cdn 内容分发网络 CDN} */
  cdn: Cdn,
  /** {@link Cds T-Sec-数据安全审计（DSA）} */
  cds: Cds,
  /** {@link Cdwch 云数据仓库 ClickHouse} */
  cdwch: Cdwch,
  /** {@link Cfg 混沌演练平台} */
  cfg: Cfg,
  /** {@link Cfs 文件存储} */
  cfs: Cfs,
  /** {@link Cfw 云防火墙} */
  cfw: Cfw,
  /** {@link Chdfs 云 HDFS} */
  chdfs: Chdfs,
  /** {@link Ciam 账号风控平台} */
  ciam: Ciam,
  /** {@link Cii 智能保险助手} */
  cii: Cii,
  cim: Cim,
  cis: Cis,
  /** {@link Ckafka 消息队列 CKafka} */
  ckafka: Ckafka,
  /** {@link Clb 负载均衡} */
  clb: Clb,
  /** {@link Cloudaudit 云审计} */
  cloudaudit: Cloudaudit,
  /** {@link Cloudhsm 云加密机} */
  cloudhsm: Cloudhsm,
  /** {@link Cloudstudio Cloud Studio（云端 IDE）} */
  cloudstudio: Cloudstudio,
  /** {@link Cls 日志服务} */
  cls: Cls,
  /** {@link Cme 多媒体创作引擎} */
  cme: Cme,
  /** {@link Cmq 消息队列 CMQ} */
  cmq: Cmq,
  /** {@link Cms 内容安全} */
  cms: Cms,
  /** {@link Cpdp 企业收付平台} */
  cpdp: Cpdp,
  /** {@link Cr 金融联络机器人} */
  cr: Cr,
  /** {@link Cvm 云服务器} */
  cvm: Cvm,
  /** {@link Cwp 主机安全} */
  cwp: Cwp,
  /** {@link Cws 漏洞扫描服务} */
  cws: Cws,
  /** {@link Cynosdb TDSQL-C MySQL 版} */
  cynosdb: Cynosdb,
  /** {@link Dasb T-Sec-堡垒机（BH）} */
  dasb: Dasb,
  /** {@link Dataintegration 数据接入平台} */
  dataintegration: Dataintegration,
  /** {@link Dayu DDoS 高防包} */
  dayu: Dayu,
  /** {@link Dbbrain 数据库智能管家 DBbrain} */
  dbbrain: Dbbrain,
  /** {@link Dbdc 云数据库独享集群} */
  dbdc: Dbdc,
  /** {@link Dc 专线接入} */
  dc: Dc,
  /** {@link Dcdb TDSQL MySQL 版} */
  dcdb: Dcdb,
  /** {@link Dlc 数据湖计算 DLC} */
  dlc: Dlc,
  /** {@link Dnspod DNSPod} */
  dnspod: Dnspod,
  /** {@link Domain 域名注册} */
  domain: Domain,
  /** {@link Drm 数字版权管理} */
  drm: Drm,
  /** {@link Ds 文档服务} */
  ds: Ds,
  /** {@link Dtf 分布式事务} */
  dtf: Dtf,
  /** {@link Dts 数据传输服务} */
  dts: Dts,
  /** {@link Eb 事件总线} */
  eb: Eb,
  /** {@link Ecc 英文作文批改} */
  ecc: Ecc,
  /** {@link Ecdn 全站加速网络} */
  ecdn: Ecdn,
  /** {@link Ecm 边缘计算机器} */
  ecm: Ecm,
  /** {@link Eiam 数字身份管控平台（员工版）} */
  eiam: Eiam,
  /** {@link Eis 数据连接器} */
  eis: Eis,
  /** {@link Emr 弹性 MapReduce} */
  emr: Emr,
  /** {@link Es Elasticsearch Service} */
  es: Es,
  /** {@link Ess 腾讯电子签企业版} */
  ess: Ess,
  /** {@link Essbasic 腾讯电子签（基础版）} */
  essbasic: Essbasic,
  /** {@link Facefusion 人脸融合} */
  facefusion: Facefusion,
  /** {@link Faceid 人脸核身} */
  faceid: Faceid,
  /** {@link Fmu 人脸试妆} */
  fmu: Fmu,
  /** {@link Ft 人像变换} */
  ft: Ft,
  /** {@link Gaap 全球应用加速} */
  gaap: Gaap,
  /** {@link Gme 游戏多媒体引擎} */
  gme: Gme,
  /** {@link Goosefs 数据加速器 GooseFS} */
  goosefs: Goosefs,
  /** {@link Gpm 游戏玩家匹配} */
  gpm: Gpm,
  /** {@link Gs 云游戏} */
  gs: Gs,
  /** {@link Gse 游戏服务器伸缩} */
  gse: Gse,
  habo: Habo,
  /** {@link Hasim 高可用物联网卡} */
  hasim: Hasim,
  /** {@link Hcm 数学作业批改} */
  hcm: Hcm,
  /** {@link Iai 人脸识别} */
  iai: Iai,
  /** {@link Ic 图片瘦身} */
  ic: Ic,
  /** {@link Icr 对话机器人} */
  icr: Icr,
  /** {@link Ie 智能编辑} */
  ie: Ie,
  /** {@link Iecp 物联网边缘计算平台} */
  iecp: Iecp,
  /** {@link Iir 智能识图} */
  iir: Iir,
  /** {@link Ims 图片内容安全} */
  ims: Ims,
  /** {@link Iot 加速物联网套件} */
  iot: Iot,
  /** {@link Iotcloud 物联网通信} */
  iotcloud: Iotcloud,
  /** {@link Iotexplorer 物联网开发平台} */
  iotexplorer: Iotexplorer,
  /** {@link Iottid 物联网设备身份认证} */
  iottid: Iottid,
  /** {@link Iotvideo 物联网智能视频服务} */
  iotvideo: Iotvideo,
  /** {@link Iotvideoindustry 物联网智能视频服务（行业版）} */
  iotvideoindustry: Iotvideoindustry,
  /** {@link Irp 智能推荐平台} */
  irp: Irp,
  /** {@link Ivld 媒体智能标签} */
  ivld: Ivld,
  /** {@link Keewidb 云数据库 KeeWiDB} */
  keewidb: Keewidb,
  /** {@link Kms 密钥管理系统} */
  kms: Kms,
  /** {@link Lcic 低代码互动课堂} */
  lcic: Lcic,
  /** {@link Lighthouse 轻量应用服务器} */
  lighthouse: Lighthouse,
  /** {@link Live 云直播CSS} */
  live: Live,
  /** {@link Lowcode 云开发低码} */
  lowcode: Lowcode,
  /** {@link Lp 登录保护} */
  lp: Lp,
  /** {@link Mariadb 云数据库 MariaDB} */
  mariadb: Mariadb,
  /** {@link Market 云市场} */
  market: Market,
  /** {@link Memcached 云数据库Memcached} */
  memcached: Memcached,
  /** {@link Mgobe 游戏联机对战引擎} */
  mgobe: Mgobe,
  /** {@link Mmps 小程序安全} */
  mmps: Mmps,
  /** {@link Mna 移动网络加速} */
  mna: Mna,
  /** {@link Mongodb 云数据库 MongoDB} */
  mongodb: Mongodb,
  /** {@link Monitor 腾讯云可观测平台} */
  monitor: Monitor,
  /** {@link Mps 媒体处理} */
  mps: Mps,
  /** {@link Mrs 医疗报告结构化} */
  mrs: Mrs,
  /** {@link Ms 移动应用安全} */
  ms: Ms,
  /** {@link Msp 迁移服务平台} */
  msp: Msp,
  /** {@link Mvj 营销价值判断} */
  mvj: Mvj,
  /** {@link Nlp 自然语言处理} */
  nlp: Nlp,
  /** {@link Npp 号码保护} */
  npp: Npp,
  /** {@link Oceanus 流计算 Oceanus} */
  oceanus: Oceanus,
  /** {@link Ocr 文字识别} */
  ocr: Ocr,
  /** {@link Open 腾讯云 OAuth} */
  open: Open,
  /** {@link Organization 集团账号管理} */
  organization: Organization,
  /** {@link Partners 渠道合作伙伴} */
  partners: Partners,
  /** {@link Pds 私域安全} */
  pds: Pds,
  /** {@link Postgres 云数据库 PostgreSQL} */
  postgres: Postgres,
  /** {@link Privatedns 私有域解析 Private DNS} */
  privatedns: Privatedns,
  /** {@link Pts 云压测} */
  pts: Pts,
  /** {@link Rce 全栈式风控引擎} */
  rce: Rce,
  /** {@link Redis 云数据库Redis} */
  redis: Redis,
  /** {@link Region 地域管理系统} */
  region: Region,
  /** {@link Rkp 风险探针} */
  rkp: Rkp,
  /** {@link Rp 注册保护} */
  rp: Rp,
  /** {@link Rum 前端性能监控} */
  rum: Rum,
  /** {@link Scf 云函数} */
  scf: Scf,
  /** {@link Ses 邮件推送} */
  ses: Ses,
  /** {@link Smh 智能媒资托管} */
  smh: Smh,
  /** {@link Smpn 营销号码安全} */
  smpn: Smpn,
  /** {@link Sms 短信} */
  sms: Sms,
  /** {@link Soe 智聆口语评测} */
  soe: Soe,
  /** {@link Solar 智汇零售} */
  solar: Solar,
  /** {@link Sqlserver 云数据库 SQL Server} */
  sqlserver: Sqlserver,
  /** {@link Ssa 安全运营中心} */
  ssa: Ssa,
  /** {@link Ssl SSL 证书} */
  ssl: Ssl,
  /** {@link Sslpod 证书监控 SSLPod} */
  sslpod: Sslpod,
  /** {@link Ssm 凭据管理系统} */
  ssm: Ssm,
  /** {@link Sts 安全凭证服务} */
  sts: Sts,
  /** {@link Taf 流量反欺诈} */
  taf: Taf,
  /** {@link Tag 标签} */
  tag: Tag,
  /** {@link Tan 碳引擎} */
  tan: Tan,
  /** {@link Tat 自动化助手} */
  tat: Tat,
  /** {@link Tav 文件检测} */
  tav: Tav,
  /** {@link Tbaas 腾讯云区块链服务平台 TBaaS} */
  tbaas: Tbaas,
  tbm: Tbm,
  /** {@link Tbp 腾讯智能对话平台} */
  tbp: Tbp,
  /** {@link Tcaplusdb 游戏数据库 TcaplusDB} */
  tcaplusdb: Tcaplusdb,
  /** {@link Tcb 云开发 CloudBase} */
  tcb: Tcb,
  /** {@link Tcbr 云托管 CloudBase Run} */
  tcbr: Tcbr,
  /** {@link Tcex 腾讯云释义} */
  tcex: Tcex,
  /** {@link Tci 腾讯智学课堂分析} */
  tci: Tci,
  /** {@link Tcm 服务网格} */
  tcm: Tcm,
  /** {@link Tcr 容器镜像服务} */
  tcr: Tcr,
  /** {@link Tcss 容器安全服务} */
  tcss: Tcss,
  /** {@link Tdcpg TDSQL-C PostgreSQL 版} */
  tdcpg: Tdcpg,
  /** {@link Tdid 分布式身份} */
  tdid: Tdid,
  /** {@link Tdmq 消息队列 TDMQ} */
  tdmq: Tdmq,
  /** {@link Tds 设备安全} */
  tds: Tds,
  /** {@link Tem 弹性微服务} */
  tem: Tem,
  /** {@link Teo 边缘安全加速平台} */
  teo: Teo,
  /** {@link Thpc 高性能计算平台} */
  thpc: Thpc,
  /** {@link Tia 智能钛机器学习} */
  tia: Tia,
  /** {@link Tic 资源编排 TIC} */
  tic: Tic,
  /** {@link Ticm 智能鉴黄} */
  ticm: Ticm,
  /** {@link Tics 威胁情报云查服务} */
  tics: Tics,
  /** {@link Tiems 腾讯云 TI 平台 TI-EMS} */
  tiems: Tiems,
  /** {@link Tiia 图像分析} */
  tiia: Tiia,
  /** {@link Tione TI-ONE 训练平台} */
  tione: Tione,
  /** {@link Tiw 互动白板} */
  tiw: Tiw,
  /** {@link Tke 容器服务} */
  tke: Tke,
  /** {@link Tkgdq 腾讯知识图谱数据查询} */
  tkgdq: Tkgdq,
  /** {@link Tms 文本内容安全} */
  tms: Tms,
  /** {@link Tmt 机器翻译} */
  tmt: Tmt,
  /** {@link Trdp 流量风险决策平台} */
  trdp: Trdp,
  /** {@link Trp T-Sec-安心平台(RP)} */
  trp: Trp,
  /** {@link Trtc 实时音视频} */
  trtc: Trtc,
  /** {@link Tse 微服务引擎 TSE} */
  tse: Tse,
  /** {@link Tsf 微服务平台 TSF} */
  tsf: Tsf,
  /** {@link Tsw 微服务观测平台 TSW} */
  tsw: Tsw,
  /** {@link Tts 语音合成} */
  tts: Tts,
  /** {@link Ump 客流数字化平台} */
  ump: Ump,
  /** {@link Vm 视频内容安全} */
  vm: Vm,
  /** {@link Vms 语音消息} */
  vms: Vms,
  /** {@link Vod 云点播} */
  vod: Vod,
  /** {@link Vpc 私有网络} */
  vpc: Vpc,
  /** {@link Waf Web 应用防火墙} */
  waf: Waf,
  /** {@link Wav 企业微信汽车行业版} */
  wav: Wav,
  /** {@link Wedata 数据开发治理平台 WeData} */
  wedata: Wedata,
  /** {@link Wss SSL证书管理服务} */
  wss: Wss,
  /** {@link Yinsuda 音速达直播音乐版权引擎} */
  yinsuda: Yinsuda,
  youmall: Youmall,
  /** {@link Yunjing 主机安全} */
  yunjing: Yunjing,
  /** {@link Yunsou 腾讯云搜TCS} */
  yunsou: Yunsou,
  /** {@link Zj 珠玑} */
  zj: Zj,
};

declare var TenYun: TenYun;

export default TenYun;
