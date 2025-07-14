/// <reference types="node" />

import { BinaryLike } from "crypto";
import { AxiosInstance, AxiosRequestConfig, AxiosPromise, AxiosRequestHeaders, AxiosResponseHeaders } from "axios";

import Aai, { Versions as AaiVersions } from "./aai";
import Aca, { Versions as AcaVersions } from "./aca";
import Acp, { Versions as AcpVersions } from "./acp";
import Advisor, { Versions as AdvisorVersions } from "./advisor";
import Af, { Versions as AfVersions } from "./af";
import Afc, { Versions as AfcVersions } from "./afc";
import Ai3d, { Versions as Ai3dVersions } from "./ai3d";
import Aiart, { Versions as AiartVersions } from "./aiart";
import Ame, { Versions as AmeVersions } from "./ame";
import Ams, { Versions as AmsVersions } from "./ams";
import Anicloud, { Versions as AnicloudVersions } from "./anicloud";
import Antiddos, { Versions as AntiddosVersions } from "./antiddos";
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
import Bh, { Versions as BhVersions } from "./bh";
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
import Ca, { Versions as CaVersions } from "./ca";
import Cam, { Versions as CamVersions } from "./cam";
import Captcha, { Versions as CaptchaVersions } from "./captcha";
import Car, { Versions as CarVersions } from "./car";
import Cat, { Versions as CatVersions } from "./cat";
import Cbs, { Versions as CbsVersions } from "./cbs";
import Ccc, { Versions as CccVersions } from "./ccc";
import Cdb, { Versions as CdbVersions } from "./cdb";
import Cdc, { Versions as CdcVersions } from "./cdc";
import Cdn, { Versions as CdnVersions } from "./cdn";
import Cds, { Versions as CdsVersions } from "./cds";
import Cdwch, { Versions as CdwchVersions } from "./cdwch";
import Cdwdoris, { Versions as CdwdorisVersions } from "./cdwdoris";
import Cdwpg, { Versions as CdwpgVersions } from "./cdwpg";
import Cdz, { Versions as CdzVersions } from "./cdz";
import Cfg, { Versions as CfgVersions } from "./cfg";
import Cfs, { Versions as CfsVersions } from "./cfs";
import Cfw, { Versions as CfwVersions } from "./cfw";
import Chc, { Versions as ChcVersions } from "./chc";
import Chdfs, { Versions as ChdfsVersions } from "./chdfs";
import Ciam, { Versions as CiamVersions } from "./ciam";
import Cii, { Versions as CiiVersions } from "./cii";
import Cim, { Versions as CimVersions } from "./cim";
import Ckafka, { Versions as CkafkaVersions } from "./ckafka";
import Clb, { Versions as ClbVersions } from "./clb";
import Cloudapp, { Versions as CloudappVersions } from "./cloudapp";
import Cloudaudit, { Versions as CloudauditVersions } from "./cloudaudit";
import Cloudhsm, { Versions as CloudhsmVersions } from "./cloudhsm";
import Cloudstudio, { Versions as CloudstudioVersions } from "./cloudstudio";
import Cls, { Versions as ClsVersions } from "./cls";
import Cme, { Versions as CmeVersions } from "./cme";
import Cmq, { Versions as CmqVersions } from "./cmq";
import Cms, { Versions as CmsVersions } from "./cms";
import Config, { Versions as ConfigVersions } from "./config";
import Controlcenter, { Versions as ControlcenterVersions } from "./controlcenter";
import Cpdp, { Versions as CpdpVersions } from "./cpdp";
import Csip, { Versions as CsipVersions } from "./csip";
import Csxg, { Versions as CsxgVersions } from "./csxg";
import Ctem, { Versions as CtemVersions } from "./ctem";
import Cvm, { Versions as CvmVersions } from "./cvm";
import Cwp, { Versions as CwpVersions } from "./cwp";
import Cws, { Versions as CwsVersions } from "./cws";
import Cynosdb, { Versions as CynosdbVersions } from "./cynosdb";
import Dasb, { Versions as DasbVersions } from "./dasb";
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
import Dsgc, { Versions as DsgcVersions } from "./dsgc";
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
import Gs, { Versions as GsVersions } from "./gs";
import Gwlb, { Versions as GwlbVersions } from "./gwlb";
import Habo, { Versions as HaboVersions } from "./habo";
import Hai, { Versions as HaiVersions } from "./hai";
import Hasim, { Versions as HasimVersions } from "./hasim";
import Hcm, { Versions as HcmVersions } from "./hcm";
import Hunyuan, { Versions as HunyuanVersions } from "./hunyuan";
import Iai, { Versions as IaiVersions } from "./iai";
import Iap, { Versions as IapVersions } from "./iap";
import Ic, { Versions as IcVersions } from "./ic";
import Icr, { Versions as IcrVersions } from "./icr";
import Ie, { Versions as IeVersions } from "./ie";
import Ig, { Versions as IgVersions } from "./ig";
import Igtm, { Versions as IgtmVersions } from "./igtm";
import Ims, { Versions as ImsVersions } from "./ims";
import Ioa, { Versions as IoaVersions } from "./ioa";
import Iot, { Versions as IotVersions } from "./iot";
import Iotcloud, { Versions as IotcloudVersions } from "./iotcloud";
import Iotexplorer, { Versions as IotexplorerVersions } from "./iotexplorer";
import Iotvideo, { Versions as IotvideoVersions } from "./iotvideo";
import Iotvideoindustry, { Versions as IotvideoindustryVersions } from "./iotvideoindustry";
import Irp, { Versions as IrpVersions } from "./irp";
import Iss, { Versions as IssVersions } from "./iss";
import Ivld, { Versions as IvldVersions } from "./ivld";
import Keewidb, { Versions as KeewidbVersions } from "./keewidb";
import Kms, { Versions as KmsVersions } from "./kms";
import Lcic, { Versions as LcicVersions } from "./lcic";
import Lighthouse, { Versions as LighthouseVersions } from "./lighthouse";
import Live, { Versions as LiveVersions } from "./live";
import Lke, { Versions as LkeVersions } from "./lke";
import Lkeap, { Versions as LkeapVersions } from "./lkeap";
import Lowcode, { Versions as LowcodeVersions } from "./lowcode";
import Mall, { Versions as MallVersions } from "./mall";
import Mariadb, { Versions as MariadbVersions } from "./mariadb";
import Market, { Versions as MarketVersions } from "./market";
import Memcached, { Versions as MemcachedVersions } from "./memcached";
import Mmps, { Versions as MmpsVersions } from "./mmps";
import Mna, { Versions as MnaVersions } from "./mna";
import Mongodb, { Versions as MongodbVersions } from "./mongodb";
import Monitor, { Versions as MonitorVersions } from "./monitor";
import Mps, { Versions as MpsVersions } from "./mps";
import Mqtt, { Versions as MqttVersions } from "./mqtt";
import Mrs, { Versions as MrsVersions } from "./mrs";
import Ms, { Versions as MsVersions } from "./ms";
import Msp, { Versions as MspVersions } from "./msp";
import Nlp, { Versions as NlpVersions } from "./nlp";
import Npp, { Versions as NppVersions } from "./npp";
import Oceanus, { Versions as OceanusVersions } from "./oceanus";
import Ocr, { Versions as OcrVersions } from "./ocr";
import Omics, { Versions as OmicsVersions } from "./omics";
import Open, { Versions as OpenVersions } from "./open";
import Organization, { Versions as OrganizationVersions } from "./organization";
import Partners, { Versions as PartnersVersions } from "./partners";
import Postgres, { Versions as PostgresVersions } from "./postgres";
import Privatedns, { Versions as PrivatednsVersions } from "./privatedns";
import Pts, { Versions as PtsVersions } from "./pts";
import Rce, { Versions as RceVersions } from "./rce";
import Redis, { Versions as RedisVersions } from "./redis";
import Region, { Versions as RegionVersions } from "./region";
import Rum, { Versions as RumVersions } from "./rum";
import Scf, { Versions as ScfVersions } from "./scf";
import Securitylake, { Versions as SecuritylakeVersions } from "./securitylake";
import Ses, { Versions as SesVersions } from "./ses";
import Smh, { Versions as SmhVersions } from "./smh";
import Smop, { Versions as SmopVersions } from "./smop";
import Sms, { Versions as SmsVersions } from "./sms";
import Soe, { Versions as SoeVersions } from "./soe";
import Sqlserver, { Versions as SqlserverVersions } from "./sqlserver";
import Ssa, { Versions as SsaVersions } from "./ssa";
import Ssl, { Versions as SslVersions } from "./ssl";
import Sslpod, { Versions as SslpodVersions } from "./sslpod";
import Ssm, { Versions as SsmVersions } from "./ssm";
import Sts, { Versions as StsVersions } from "./sts";
import Svp, { Versions as SvpVersions } from "./svp";
import Taf, { Versions as TafVersions } from "./taf";
import Tag, { Versions as TagVersions } from "./tag";
import Tat, { Versions as TatVersions } from "./tat";
import Tbaas, { Versions as TbaasVersions } from "./tbaas";
import Tbp, { Versions as TbpVersions } from "./tbp";
import Tcaplusdb, { Versions as TcaplusdbVersions } from "./tcaplusdb";
import Tcb, { Versions as TcbVersions } from "./tcb";
import Tcbr, { Versions as TcbrVersions } from "./tcbr";
import Tccatalog, { Versions as TccatalogVersions } from "./tccatalog";
import Tchd, { Versions as TchdVersions } from "./tchd";
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
import Tiia, { Versions as TiiaVersions } from "./tiia";
import Tione, { Versions as TioneVersions } from "./tione";
import Tiw, { Versions as TiwVersions } from "./tiw";
import Tke, { Versions as TkeVersions } from "./tke";
import Tkgdq, { Versions as TkgdqVersions } from "./tkgdq";
import Tms, { Versions as TmsVersions } from "./tms";
import Tmt, { Versions as TmtVersions } from "./tmt";
import Tourism, { Versions as TourismVersions } from "./tourism";
import Trabbit, { Versions as TrabbitVersions } from "./trabbit";
import Trocket, { Versions as TrocketVersions } from "./trocket";
import Trp, { Versions as TrpVersions } from "./trp";
import Trro, { Versions as TrroVersions } from "./trro";
import Trtc, { Versions as TrtcVersions } from "./trtc";
import Tse, { Versions as TseVersions } from "./tse";
import Tsf, { Versions as TsfVersions } from "./tsf";
import Tsi, { Versions as TsiVersions } from "./tsi";
import Tsw, { Versions as TswVersions } from "./tsw";
import Tts, { Versions as TtsVersions } from "./tts";
import Vcg, { Versions as VcgVersions } from "./vcg";
import Vclm, { Versions as VclmVersions } from "./vclm";
import Vcube, { Versions as VcubeVersions } from "./vcube";
import Vdb, { Versions as VdbVersions } from "./vdb";
import Vm, { Versions as VmVersions } from "./vm";
import Vms, { Versions as VmsVersions } from "./vms";
import Vod, { Versions as VodVersions } from "./vod";
import Vpc, { Versions as VpcVersions } from "./vpc";
import Vrs, { Versions as VrsVersions } from "./vrs";
import Vtc, { Versions as VtcVersions } from "./vtc";
import Waf, { Versions as WafVersions } from "./waf";
import Wav, { Versions as WavVersions } from "./wav";
import Wedata, { Versions as WedataVersions } from "./wedata";
import Weilingwith, { Versions as WeilingwithVersions } from "./weilingwith";
import Wss, { Versions as WssVersions } from "./wss";
import Yinsuda, { Versions as YinsudaVersions } from "./yinsuda";
import Yunjing, { Versions as YunjingVersions } from "./yunjing";
import Yunsou, { Versions as YunsouVersions } from "./yunsou";

export declare type LANGUAGES = ["zh-CN", "en-US"];

export declare type SERVICE_VERSIONS = {
  aai: AaiVersions,
  aca: AcaVersions,
  acp: AcpVersions,
  advisor: AdvisorVersions,
  af: AfVersions,
  afc: AfcVersions,
  ai3d: Ai3dVersions,
  aiart: AiartVersions,
  ame: AmeVersions,
  ams: AmsVersions,
  anicloud: AnicloudVersions,
  antiddos: AntiddosVersions,
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
  bh: BhVersions,
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
  ca: CaVersions,
  cam: CamVersions,
  captcha: CaptchaVersions,
  car: CarVersions,
  cat: CatVersions,
  cbs: CbsVersions,
  ccc: CccVersions,
  cdb: CdbVersions,
  cdc: CdcVersions,
  cdn: CdnVersions,
  cds: CdsVersions,
  cdwch: CdwchVersions,
  cdwdoris: CdwdorisVersions,
  cdwpg: CdwpgVersions,
  cdz: CdzVersions,
  cfg: CfgVersions,
  cfs: CfsVersions,
  cfw: CfwVersions,
  chc: ChcVersions,
  chdfs: ChdfsVersions,
  ciam: CiamVersions,
  cii: CiiVersions,
  cim: CimVersions,
  ckafka: CkafkaVersions,
  clb: ClbVersions,
  cloudapp: CloudappVersions,
  cloudaudit: CloudauditVersions,
  cloudhsm: CloudhsmVersions,
  cloudstudio: CloudstudioVersions,
  cls: ClsVersions,
  cme: CmeVersions,
  cmq: CmqVersions,
  cms: CmsVersions,
  config: ConfigVersions,
  controlcenter: ControlcenterVersions,
  cpdp: CpdpVersions,
  csip: CsipVersions,
  csxg: CsxgVersions,
  ctem: CtemVersions,
  cvm: CvmVersions,
  cwp: CwpVersions,
  cws: CwsVersions,
  cynosdb: CynosdbVersions,
  dasb: DasbVersions,
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
  dsgc: DsgcVersions,
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
  gs: GsVersions,
  gwlb: GwlbVersions,
  habo: HaboVersions,
  hai: HaiVersions,
  hasim: HasimVersions,
  hcm: HcmVersions,
  hunyuan: HunyuanVersions,
  iai: IaiVersions,
  iap: IapVersions,
  ic: IcVersions,
  icr: IcrVersions,
  ie: IeVersions,
  ig: IgVersions,
  igtm: IgtmVersions,
  ims: ImsVersions,
  ioa: IoaVersions,
  iot: IotVersions,
  iotcloud: IotcloudVersions,
  iotexplorer: IotexplorerVersions,
  iotvideo: IotvideoVersions,
  iotvideoindustry: IotvideoindustryVersions,
  irp: IrpVersions,
  iss: IssVersions,
  ivld: IvldVersions,
  keewidb: KeewidbVersions,
  kms: KmsVersions,
  lcic: LcicVersions,
  lighthouse: LighthouseVersions,
  live: LiveVersions,
  lke: LkeVersions,
  lkeap: LkeapVersions,
  lowcode: LowcodeVersions,
  mall: MallVersions,
  mariadb: MariadbVersions,
  market: MarketVersions,
  memcached: MemcachedVersions,
  mmps: MmpsVersions,
  mna: MnaVersions,
  mongodb: MongodbVersions,
  monitor: MonitorVersions,
  mps: MpsVersions,
  mqtt: MqttVersions,
  mrs: MrsVersions,
  ms: MsVersions,
  msp: MspVersions,
  nlp: NlpVersions,
  npp: NppVersions,
  oceanus: OceanusVersions,
  ocr: OcrVersions,
  omics: OmicsVersions,
  open: OpenVersions,
  organization: OrganizationVersions,
  partners: PartnersVersions,
  postgres: PostgresVersions,
  privatedns: PrivatednsVersions,
  pts: PtsVersions,
  rce: RceVersions,
  redis: RedisVersions,
  region: RegionVersions,
  rum: RumVersions,
  scf: ScfVersions,
  securitylake: SecuritylakeVersions,
  ses: SesVersions,
  smh: SmhVersions,
  smop: SmopVersions,
  sms: SmsVersions,
  soe: SoeVersions,
  sqlserver: SqlserverVersions,
  ssa: SsaVersions,
  ssl: SslVersions,
  sslpod: SslpodVersions,
  ssm: SsmVersions,
  sts: StsVersions,
  svp: SvpVersions,
  taf: TafVersions,
  tag: TagVersions,
  tat: TatVersions,
  tbaas: TbaasVersions,
  tbp: TbpVersions,
  tcaplusdb: TcaplusdbVersions,
  tcb: TcbVersions,
  tcbr: TcbrVersions,
  tccatalog: TccatalogVersions,
  tchd: TchdVersions,
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
  tiia: TiiaVersions,
  tione: TioneVersions,
  tiw: TiwVersions,
  tke: TkeVersions,
  tkgdq: TkgdqVersions,
  tms: TmsVersions,
  tmt: TmtVersions,
  tourism: TourismVersions,
  trabbit: TrabbitVersions,
  trocket: TrocketVersions,
  trp: TrpVersions,
  trro: TrroVersions,
  trtc: TrtcVersions,
  tse: TseVersions,
  tsf: TsfVersions,
  tsi: TsiVersions,
  tsw: TswVersions,
  tts: TtsVersions,
  vcg: VcgVersions,
  vclm: VclmVersions,
  vcube: VcubeVersions,
  vdb: VdbVersions,
  vm: VmVersions,
  vms: VmsVersions,
  vod: VodVersions,
  vpc: VpcVersions,
  vrs: VrsVersions,
  vtc: VtcVersions,
  waf: WafVersions,
  wav: WavVersions,
  wedata: WedataVersions,
  weilingwith: WeilingwithVersions,
  wss: WssVersions,
  yinsuda: YinsudaVersions,
  yunjing: YunjingVersions,
  yunsou: YunsouVersions,
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
  aai: Aai,
  /** {@link Aca AI 临床助手} */
  aca: Aca,
  /** {@link Acp 应用合规平台} */
  acp: Acp,
  /** {@link Advisor 云顾问} */
  advisor: Advisor,
  /** {@link Af 借贷反欺诈} */
  af: Af,
  /** {@link Afc 定制建模} */
  afc: Afc,
  /** {@link Ai3d 腾讯混元生3D} */
  ai3d: Ai3d,
  /** {@link Aiart 大模型图像创作引擎} */
  aiart: Aiart,
  /** {@link Ame 正版曲库直通车} */
  ame: Ame,
  /** {@link Ams 音频内容安全} */
  ams: Ams,
  /** {@link Anicloud 动效素材服务} */
  anicloud: Anicloud,
  /** {@link Antiddos T-Sec-DDoS防护(Anti-DDoS)} */
  antiddos: Antiddos,
  /** {@link Ape 正版图库直通车} */
  ape: Ape,
  /** {@link Api 云 API} */
  api: Api,
  /** {@link Apigateway API 网关} */
  apigateway: Apigateway,
  /** {@link Apm 应用性能监控} */
  apm: Apm,
  /** {@link Asr 语音识别} */
  asr: Asr,
  /** {@link Asw 应用与服务编排工作流} */
  asw: Asw,
  /** {@link As 弹性伸缩} */
  as: As,
  /** {@link Ba ICP备案} */
  ba: Ba,
  /** {@link Batch 批量计算} */
  batch: Batch,
  /** {@link Bda 人体分析} */
  bda: Bda,
  /** {@link Bh 运维安全中心（堡垒机）} */
  bh: Bh,
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
  /** {@link Bsca 软件成分分析} */
  bsca: Bsca,
  /** {@link Btoe 区块链可信取证} */
  btoe: Btoe,
  /** {@link Ca 腾讯云CA} */
  ca: Ca,
  /** {@link Cam 访问管理} */
  cam: Cam,
  /** {@link Captcha 验证码} */
  captcha: Captcha,
  /** {@link Car 应用云渲染} */
  car: Car,
  /** {@link Cat 云拨测} */
  cat: Cat,
  /** {@link Cbs 云硬盘} */
  cbs: Cbs,
  /** {@link Ccc 云联络中心} */
  ccc: Ccc,
  /** {@link Cdb 云数据库 MySQL} */
  cdb: Cdb,
  /** {@link Cdc 本地专用集群} */
  cdc: Cdc,
  /** {@link Cdn 内容分发网络 CDN} */
  cdn: Cdn,
  /** {@link Cds T-Sec-数据安全审计（DSA）} */
  cds: Cds,
  /** {@link Cdwch 腾讯云数据仓库TCHouse-C} */
  cdwch: Cdwch,
  /** {@link Cdwdoris 腾讯云数据仓库 TCHouse-D} */
  cdwdoris: Cdwdoris,
  /** {@link Cdwpg 腾讯云数据仓库TCHouse-P} */
  cdwpg: Cdwpg,
  /** {@link Cdz 专属可用区} */
  cdz: Cdz,
  /** {@link Cfg 混沌演练平台} */
  cfg: Cfg,
  /** {@link Cfs 文件存储} */
  cfs: Cfs,
  /** {@link Cfw 云防火墙} */
  cfw: Cfw,
  /** {@link Chc 云托付物理服务器} */
  chc: Chc,
  /** {@link Chdfs 云 HDFS} */
  chdfs: Chdfs,
  /** {@link Ciam 账号风控平台} */
  ciam: Ciam,
  /** {@link Cii 智能保险助手} */
  cii: Cii,
  cim: Cim,
  /** {@link Ckafka 消息队列 CKafka 版} */
  ckafka: Ckafka,
  /** {@link Clb 负载均衡} */
  clb: Clb,
  /** {@link Cloudapp 云应用} */
  cloudapp: Cloudapp,
  /** {@link Cloudaudit 操作审计} */
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
  /** {@link Config 配置审计} */
  config: Config,
  /** {@link Controlcenter 控制中心} */
  controlcenter: Controlcenter,
  /** {@link Cpdp 企业收付平台} */
  cpdp: Cpdp,
  /** {@link Csip 云安全一体化平台} */
  csip: Csip,
  /** {@link Csxg 5G入云服务} */
  csxg: Csxg,
  /** {@link Ctem 暴露面管理服务} */
  ctem: Ctem,
  /** {@link Cvm 云服务器} */
  cvm: Cvm,
  /** {@link Cwp 主机安全} */
  cwp: Cwp,
  /** {@link Cws 漏洞扫描服务} */
  cws: Cws,
  /** {@link Cynosdb TDSQL-C MySQL 版} */
  cynosdb: Cynosdb,
  /** {@link Dasb 运维安全中心（堡垒机）} */
  dasb: Dasb,
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
  /** {@link Dsgc 数据安全治理中心} */
  dsgc: Dsgc,
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
  /** {@link Gs 云游戏} */
  gs: Gs,
  /** {@link Gwlb 网关负载均衡} */
  gwlb: Gwlb,
  habo: Habo,
  /** {@link Hai 高性能应用服务} */
  hai: Hai,
  /** {@link Hasim 高可用物联网卡} */
  hasim: Hasim,
  /** {@link Hcm 数学作业批改} */
  hcm: Hcm,
  /** {@link Hunyuan 腾讯混元大模型} */
  hunyuan: Hunyuan,
  /** {@link Iai 人脸识别} */
  iai: Iai,
  /** {@link Iap 身份识别平台} */
  iap: Iap,
  /** {@link Ic 图片瘦身} */
  ic: Ic,
  /** {@link Icr 对话机器人} */
  icr: Icr,
  /** {@link Ie 智能编辑} */
  ie: Ie,
  /** {@link Ig 智能导诊} */
  ig: Ig,
  /** {@link Igtm 智能全局流量管理} */
  igtm: Igtm,
  /** {@link Ims 图片内容安全} */
  ims: Ims,
  /** {@link Ioa iOA 零信任安全管理系统} */
  ioa: Ioa,
  /** {@link Iot 加速物联网套件} */
  iot: Iot,
  /** {@link Iotcloud 物联网通信} */
  iotcloud: Iotcloud,
  /** {@link Iotexplorer 物联网开发平台} */
  iotexplorer: Iotexplorer,
  /** {@link Iotvideo 物联网智能视频服务} */
  iotvideo: Iotvideo,
  /** {@link Iotvideoindustry 物联网智能视频服务（行业版）} */
  iotvideoindustry: Iotvideoindustry,
  /** {@link Irp 智能推荐平台} */
  irp: Irp,
  /** {@link Iss 智能视图计算平台} */
  iss: Iss,
  /** {@link Ivld 媒体智能标签} */
  ivld: Ivld,
  /** {@link Keewidb 云数据库 KeeWiDB} */
  keewidb: Keewidb,
  /** {@link Kms 密钥管理系统} */
  kms: Kms,
  /** {@link Lcic 实时互动-教育版} */
  lcic: Lcic,
  /** {@link Lighthouse 轻量应用服务器} */
  lighthouse: Lighthouse,
  /** {@link Live 云直播CSS} */
  live: Live,
  /** {@link Lke 腾讯云智能体开发平台} */
  lke: Lke,
  /** {@link Lkeap 知识引擎原子能力} */
  lkeap: Lkeap,
  /** {@link Lowcode 云开发低码} */
  lowcode: Lowcode,
  /** {@link Mall 商场客留大数据} */
  mall: Mall,
  /** {@link Mariadb 云数据库 MariaDB} */
  mariadb: Mariadb,
  /** {@link Market 云市场} */
  market: Market,
  /** {@link Memcached 云数据库Memcached} */
  memcached: Memcached,
  /** {@link Mmps 小程序安全} */
  mmps: Mmps,
  /** {@link Mna 多网聚合加速} */
  mna: Mna,
  /** {@link Mongodb 云数据库 MongoDB} */
  mongodb: Mongodb,
  /** {@link Monitor 腾讯云可观测平台} */
  monitor: Monitor,
  /** {@link Mps 媒体处理} */
  mps: Mps,
  /** {@link Mqtt 消息队列 MQTT 版} */
  mqtt: Mqtt,
  /** {@link Mrs 医疗报告结构化} */
  mrs: Mrs,
  /** {@link Ms 移动应用安全} */
  ms: Ms,
  /** {@link Msp 迁移服务平台} */
  msp: Msp,
  /** {@link Nlp NLP 技术} */
  nlp: Nlp,
  /** {@link Npp 号码保护} */
  npp: Npp,
  /** {@link Oceanus 流计算 Oceanus} */
  oceanus: Oceanus,
  /** {@link Ocr 文字识别} */
  ocr: Ocr,
  /** {@link Omics 腾讯健康组学平台} */
  omics: Omics,
  /** {@link Open 腾讯云 OAuth} */
  open: Open,
  /** {@link Organization 集团账号管理} */
  organization: Organization,
  /** {@link Partners 渠道合作伙伴} */
  partners: Partners,
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
  /** {@link Rum 前端性能监控} */
  rum: Rum,
  /** {@link Scf 云函数} */
  scf: Scf,
  /** {@link Securitylake 安全湖} */
  securitylake: Securitylake,
  /** {@link Ses 邮件推送} */
  ses: Ses,
  /** {@link Smh 智能媒资托管} */
  smh: Smh,
  /** {@link Smop 腾讯安心用户运营平台} */
  smop: Smop,
  /** {@link Sms 短信} */
  sms: Sms,
  /** {@link Soe 智聆口语评测} */
  soe: Soe,
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
  /** {@link Svp 节省计划} */
  svp: Svp,
  /** {@link Taf 流量反欺诈} */
  taf: Taf,
  /** {@link Tag 标签} */
  tag: Tag,
  /** {@link Tat 自动化助手} */
  tat: Tat,
  /** {@link Tbaas 腾讯云区块链服务平台 TBaaS} */
  tbaas: Tbaas,
  /** {@link Tbp 腾讯智能对话平台} */
  tbp: Tbp,
  /** {@link Tcaplusdb 游戏数据库 TcaplusDB} */
  tcaplusdb: Tcaplusdb,
  /** {@link Tcb 云开发 CloudBase} */
  tcb: Tcb,
  /** {@link Tcbr 云托管 CloudBase Run} */
  tcbr: Tcbr,
  /** {@link Tccatalog 统一Catalog服务} */
  tccatalog: Tccatalog,
  /** {@link Tchd 腾讯云健康看板} */
  tchd: Tchd,
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
  /** {@link Tourism 文旅客情大数据} */
  tourism: Tourism,
  /** {@link Trabbit 消息队列 RabbitMQ Serverless 版} */
  trabbit: Trabbit,
  /** {@link Trocket 消息队列 RocketMQ 版} */
  trocket: Trocket,
  /** {@link Trp T-Sec-安心平台(RP)} */
  trp: Trp,
  /** {@link Trro 实时互动-工业能源版} */
  trro: Trro,
  /** {@link Trtc 实时音视频} */
  trtc: Trtc,
  /** {@link Tse TSF-Polaris&ZK&网关} */
  tse: Tse,
  /** {@link Tsf TSF-应用管理&Consul} */
  tsf: Tsf,
  /** {@link Tsi 腾讯同传系统} */
  tsi: Tsi,
  /** {@link Tsw 微服务观测平台 TSW} */
  tsw: Tsw,
  /** {@link Tts 语音合成} */
  tts: Tts,
  /** {@link Vcg 视频生成} */
  vcg: Vcg,
  /** {@link Vclm 大模型视频创作引擎} */
  vclm: Vclm,
  /** {@link Vcube 音视频终端引擎} */
  vcube: Vcube,
  /** {@link Vdb 向量数据库} */
  vdb: Vdb,
  /** {@link Vm 视频内容安全} */
  vm: Vm,
  /** {@link Vms 语音消息} */
  vms: Vms,
  /** {@link Vod 云点播} */
  vod: Vod,
  /** {@link Vpc 私有网络} */
  vpc: Vpc,
  /** {@link Vrs 声音复刻} */
  vrs: Vrs,
  /** {@link Vtc 视频转译} */
  vtc: Vtc,
  /** {@link Waf Web 应用防火墙} */
  waf: Waf,
  /** {@link Wav 企业微信汽车行业版} */
  wav: Wav,
  /** {@link Wedata 数据开发治理平台 WeData} */
  wedata: Wedata,
  /** {@link Weilingwith 微瓴同业开放平台} */
  weilingwith: Weilingwith,
  /** {@link Wss SSL证书管理服务} */
  wss: Wss,
  /** {@link Yinsuda 音速达直播音乐版权引擎} */
  yinsuda: Yinsuda,
  /** {@link Yunjing 主机安全} */
  yunjing: Yunjing,
  /** {@link Yunsou 腾讯云搜TCS} */
  yunsou: Yunsou,
};

declare var TenYun: TenYun;

export default TenYun;
