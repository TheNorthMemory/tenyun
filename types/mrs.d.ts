/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 入院情况 */
declare interface AdmissionConditionBlock {
  /** 名称 */
  Name?: string | null;
  /** 原文 */
  Src?: string | null;
  /** 对外输出值 */
  Value?: string | null;
}

/** 入院诊断 */
declare interface AdmissionDiagnosisBlock {
  /** 名称 */
  Name?: string | null;
  /** 原文 */
  Src?: string | null;
  /** 归一化值 */
  Norm?: string | null;
  /** 对外输出值 */
  Value?: string | null;
}

/** 建议 */
declare interface Advice {
  /** 文本 */
  Text: string | null;
}

/** 纵横比 */
declare interface AspectRatio {
  /** 原文位置 */
  Index: number[] | null;
  /** 数值 */
  Number: string | null;
  /** 关系 */
  Relation: string | null;
  /** 原文 */
  Src: string | null;
  /** 值 */
  Value: string | null;
}

/** 标准信息类 */
declare interface BaseInfo {
  /** 项目名称 */
  Name?: string | null;
  /** 索引 */
  Index?: number[] | null;
  /** 原文 */
  Src?: string | null;
  /** 标准值 */
  Value?: string | null;
  /** 原文对应坐标 */
  Coords?: Coord[] | null;
}

/** 基础类型 */
declare interface BaseItem {
  /** 类型名称 */
  Name?: string | null;
  /** 原始文本 */
  Src?: string | null;
  /** 归一化后值 */
  Value?: string | null;
  /** 别名 */
  Alias?: string | null;
  /** 四点坐标 */
  Coords?: Coord[] | null;
}

/** 基础类型 */
declare interface BaseItem2 {
  /** 类型 */
  Name?: string | null;
  /** 原始文本 */
  Src?: string | null;
  /** 归一化后值 */
  Value?: string | null;
  /** 四点坐标 */
  Coords?: Coord[] | null;
}

/** 基础类型 */
declare interface BaseItem3 {
  /** 类型 */
  Name?: string | null;
  /** 原始文本 */
  Src?: string | null;
  /** 归一化后值 */
  Value?: string | null;
  /** 四点坐标 */
  Coords?: Coord[] | null;
  /** 第几次 */
  Order?: number | null;
}

/** 活检部位 */
declare interface BiopsyPart {
  /** 值 */
  Value?: string | null;
  /** 原文 */
  Src?: string | null;
  /** 坐标 */
  Coords?: Coord[] | null;
}

/** 出生证明结构化信息 */
declare interface BirthCert {
  /** 新生儿信息 */
  NeonatalInfo?: NeonatalInfo | null;
  /** 母亲信息 */
  MotherInfo?: ParentInfo | null;
  /** 父亲信息 */
  FatherInfo?: ParentInfo | null;
  /** 签发信息 */
  IssueInfo?: IssueInfo | null;
}

/** 出生地 */
declare interface BirthPlaceBlock {
  /** 名称 */
  Name?: string | null;
  /** 原文 */
  Src?: string | null;
  /** 对外输出值 */
  Value?: string | null;
}

/** 结构化信息 */
declare interface Block {
  /** 诊断信息 */
  Check?: Check[] | null;
  /** 病理报告 */
  Pathology?: PathologyReport[] | null;
  /** 医学资料 */
  MedDoc?: MedDoc[] | null;
  /** 诊断证明 */
  DiagCert?: DiagCert[] | null;
  /** 病案首页 */
  FirstPage?: FirstPage[] | null;
  /** 检验报告 */
  Indicator?: Indicator[] | null;
  /** 门诊病历信息 */
  MedicalRecordInfo?: MedicalRecordInfo[] | null;
  /** 出入院信息 */
  Hospitalization?: Hospitalization[] | null;
  /** 手术记录 */
  Surgery?: Surgery[] | null;
  /** 处方单 */
  Prescription?: Prescription[] | null;
  /** 免疫接种证明 */
  VaccineCertificate?: VaccineCertificate[] | null;
  /** 心电图 */
  Electrocardiogram?: Electrocardiogram[] | null;
  /** 病理报告v2 */
  PathologyV2?: PathologyV2[] | null;
  /** 内窥镜报告 */
  Endoscopy?: Endoscopy[] | null;
  /** C14检验报告 */
  C14?: Indicator[] | null;
  /** 体检结论 */
  Exame?: Exame[] | null;
  /** 出入院结构体 */
  MedDocV2?: DischargeInfoBlock[] | null;
  /** 检验报告v3 */
  IndicatorV3?: IndicatorV3[] | null;
  /** 孕产报告 */
  Maternity?: Maternity[] | null;
  /** 时间轴 */
  Timeline?: TimelineInformation[] | null;
  /** 核酸报告结论 */
  Covid?: CovidItemsInfo[] | null;
  /** 眼科报告结构体 */
  Eye?: EyeItemsInfo[] | null;
  /** 出生证明结构化信息 */
  BirthCert?: BirthCert[] | null;
  /** 文本类型列表 */
  TextTypeListBlocks?: TextTypeListBlock[] | null;
  /** 体检报告信息 */
  PhysicalExamination?: PhysicalExaminationV1 | null;
}

/** 块信息 */
declare interface BlockInfo {
  /** 原文位置 */
  Index?: number[] | null;
  /** 阳性 */
  Positive?: string | null;
  /** 原文 */
  Src?: string | null;
  /** 值 */
  Value?: string | null;
  /** 类型 */
  Type?: string | null;
  /** 名称 */
  Name?: string | null;
  /** 大小 */
  Size?: Size[] | null;
}

/** 块信息 */
declare interface BlockInfoV2 {
  /** 原文位置 */
  Index?: number[] | null;
  /** 原文 */
  Src?: string | null;
  /** 值 */
  Value?: string | null;
  /** 名称 */
  Name?: string | null;
  /** 疾病编码 */
  Code?: string | null;
}

/** 块标题 */
declare interface BlockTitle {
  /** name */
  Name?: string | null;
  /** src */
  Src?: string | null;
  /** value */
  Value?: string | null;
}

/** 血压 */
declare interface BloodPressureBlock {
  /** 名称 */
  Name?: string | null;
  /** 原文 */
  Src?: string | null;
  /** 归一化值 */
  Norm?: string | null;
  /** 单位 */
  Unit?: string | null;
  /** 对外输出值 */
  Value?: string | null;
  /** 舒张压 */
  NormDiastolic?: string | null;
  /** 收缩压 */
  NormSystolic?: string | null;
}

/** 体检报告血压检测信息 */
declare interface BloodPressureItem {
  /** 类型 */
  Name?: string | null;
  /** 项目原文 */
  Item?: PhysicalBaseItem | null;
  /** 数值 */
  Result?: PhysicalBaseItem | null;
  /** 单位 */
  Unit?: PhysicalBaseItem | null;
  /** 第几次 */
  Times?: PhysicalBaseItem | null;
  /** 左右手臂 */
  Location?: PhysicalBaseItem | null;
}

/** 查体 */
declare interface BodyExaminationBlock {
  /** 体温 */
  BodyTemperature?: BodyTemperatureBlock | null;
  /** 脉搏 */
  Pulse?: BodyTemperatureBlock | null;
  /** 呼吸 */
  Breathe?: BodyTemperatureBlock | null;
  /** 血压 */
  BloodPressure?: BloodPressureBlock | null;
}

/** 体温名称 */
declare interface BodyTemperatureBlock {
  /** 名称 */
  Name?: string | null;
  /** 原文 */
  Src?: string | null;
  /** 归一化值 */
  Norm?: string | null;
  /** 单位 */
  Unit?: string | null;
  /** 对外输出值 */
  Value?: string | null;
}

/** 检查报告单 */
declare interface Check {
  /** 描述 */
  Desc?: Desc | null;
  /** 结论 */
  Summary?: Summary | null;
  /** 检查报告块标题 */
  BlockTitle?: BlockTitle[] | null;
}

/** 体检报告-胸围信息 */
declare interface ChestCircumferenceItem {
  /** 类型 */
  Name?: string | null;
  /** 项目原文 */
  Item?: PhysicalBaseItem | null;
  /** 数值 */
  Result?: PhysicalBaseItem | null;
  /** 单位 */
  Unit?: PhysicalBaseItem | null;
  /** 呼吸状态 */
  State?: PhysicalBaseItem | null;
}

/** 主诉 */
declare interface ChiefComplaintBlock {
  /** 名称 */
  Name?: string | null;
  /** 原文 */
  Src?: string | null;
  /** 单位输出值 */
  Value?: string | null;
  /** 主诉详情 */
  Detail?: ChiefComplaintDetailBlock[] | null;
}

/** 主诉详情 */
declare interface ChiefComplaintDetailBlock {
  /** 疾病名称 */
  DiseaseName?: string | null;
  /** 部位 */
  Part?: string | null;
  /** 时间 */
  Time?: string | null;
  /** 时间类型 */
  TimeType?: string | null;
}

/** 临床分期 */
declare interface ClinicalStaging {
  /** 名称 */
  Name?: string | null;
  /** 原文 */
  Src?: string | null;
  /** 值 */
  Value?: string | null;
}

/** 坐标 */
declare interface Coord {
  /** 坐标 */
  Points?: Point[] | null;
}

/** 坐标 */
declare interface Coordinate {
  /** 左上角x坐标 */
  X: number | null;
  /** 左上角y坐标 */
  Y: number | null;
  /** 宽度，单位像素 */
  Width: number | null;
  /** 高度，单位像素 */
  Height: number | null;
}

/** 核酸报告结论结构 */
declare interface CovidItem {
  /** 采样时间 */
  SampleTime?: BaseItem | null;
  /** 检测时间 */
  TestTime?: BaseItem | null;
  /** 检测机构 */
  TestOrganization?: BaseItem | null;
  /** 检测结果 */
  TestResult?: BaseItem | null;
  /** 健康码颜色 */
  CodeColor?: BaseItem | null;
}

/** 核酸报告结论 */
declare interface CovidItemsInfo {
  /** 核酸报告结论 */
  CovidItems?: CovidItem[] | null;
  /** 版本号 */
  Version?: string | null;
}

/** 死亡时间 */
declare interface DeathDateBlock {
  /** 名称 */
  Name?: string | null;
  /** 原文 */
  Src?: string | null;
  /** 类型 */
  Type?: string | null;
  /** 归一化值 */
  Norm?: string | null;
  /** 单位 */
  Unit?: string | null;
  /** 时间戳 */
  Timestamp?: string | null;
  /** 对外输出值 */
  Value?: string | null;
}

/** 描述 */
declare interface Desc {
  /** 描述 */
  Text?: string | null;
  /** 器官 */
  Organ?: Organ[] | null;
  /** 结节 */
  Tuber?: TuberInfo[] | null;
  /** 坐标 */
  Coords?: Coord[] | null;
}

/** 描述段落 */
declare interface DescInfo {
  /** 描述段落文本 */
  Text?: BaseInfo | null;
  /** 描述段落详情 */
  Infos?: DetailInformation[] | null;
}

/** 详情 */
declare interface DetailInformation {
  /** 部位 */
  Part?: Part | null;
  /** 组织大小 */
  TissueSizes?: Size[] | null;
  /** 结节大小 */
  TuberSizes?: Size[] | null;
  /** 肿瘤大小 */
  CancerSizes?: Size[] | null;
  /** 组织学等级 */
  HistologyLevel?: BaseInfo | null;
  /** 组织学类型 */
  HistologyType?: HistologyTypeV2 | null;
  /** 侵犯 */
  Invasive?: InvasiveV2[] | null;
  /** pTNM */
  PTNM?: PTNM | null;
  /** 浸润深度 */
  InfiltrationDepth?: BaseInfo | null;
  /** 结节数量 */
  TuberNum?: BaseInfo | null;
  /** 钙化 */
  Calcification?: BaseInfo | null;
  /** 坏死 */
  Necrosis?: BaseInfo | null;
  /** 异形 */
  Abnormity?: BaseInfo | null;
  /** 断链 */
  Breaked?: BaseInfo | null;
}

/** 诊断证明 */
declare interface DiagCert {
  /** 建议 */
  Advice: Advice | null;
  /** 诊断 */
  Diagnosis: DiagCertItem[] | null;
}

/** 诊断证明项 */
declare interface DiagCertItem {
  /** 文本 */
  Text: string | null;
  /** 类型 */
  Type: string | null;
  /** 值 */
  Value: string[] | null;
}

/** 出院情况 */
declare interface DischargeConditionBlock {
  /** 名称 */
  Name?: string | null;
  /** 原文 */
  Src?: string | null;
  /** 对外输出值 */
  Value?: string | null;
  /** 归一化值 */
  Norm?: string | null;
}

/** 出入院诊断 */
declare interface DischargeDiagnosis {
  /** 表格位置 */
  TableIndex: number | null;
  /** 出院诊断 */
  OutDiagnosis: BlockInfo | null;
  /** 疾病编码 */
  DiseaseCode: BlockInfo | null;
  /** 入院情况 */
  InStatus: BlockInfo | null;
  /** 出院情况 */
  OutStatus: BlockInfo | null;
}

/** 出院诊断 */
declare interface DischargeDiagnosisBlock {
  /** 名称 */
  Name?: string | null;
  /** 原文 */
  Src?: string | null;
  /** 归一化值 */
  Norm?: string | null;
  /** 对外输出值 */
  Value?: string | null;
}

/** 出入院结构体 */
declare interface DischargeInfoBlock {
  /** 疾病史 */
  DiseaseHistory?: DiseaseHistoryBlock | null;
  /** 个人史 */
  PersonalHistory?: PersonalHistoryBlock | null;
  /** 药物史 */
  DrugHistory?: DrugHistoryBlock | null;
  /** 治疗相关 */
  TreatmentRecord?: TreatmentRecordBlock | null;
  /** 文本段落 */
  ParagraphBlock?: ParagraphBlock | null;
}

/** 疾病史 */
declare interface DiseaseHistoryBlock {
  /** 主要病史 */
  MainDiseaseHistory?: MainDiseaseHistoryBlock | null;
  /** 过敏史 */
  AllergyHistory?: MainDiseaseHistoryBlock | null;
  /** 注射史 */
  InfectHistory?: MainDiseaseHistoryBlock | null;
  /** 手术史 */
  SurgeryHistory?: SurgeryHistoryBlock | null;
  /** 输血史 */
  TransfusionHistory?: TransfusionHistoryBlock | null;
}

/** 疾病史 */
declare interface DiseaseMedicalHistory {
  /** 主病史 */
  MainDiseaseHistory: string | null;
  /** 过敏史 */
  AllergyHistory: string | null;
  /** 传染疾病史 */
  InfectHistory: string | null;
  /** 手术史 */
  OperationHistory: string | null;
  /** 输血史 */
  TransfusionHistory: string | null;
}

/** 现病史 */
declare interface DiseasePresentBlock {
  /** 名称 */
  Name?: string | null;
  /** 原文 */
  Src?: string | null;
  /** 值 */
  Value?: string | null;
  /** 归一化 */
  Norm?: string | null;
}

/** 药物用法用量 */
declare interface DosageBlock {
  /** 值 */
  Value?: string | null;
  /** 单次计量 */
  SingleMeasurement?: string | null;
  /** 频次 */
  Frequency?: string | null;
  /** 给药途径 */
  DrugDeliveryRoute?: string | null;
}

/** 药物史 */
declare interface DrugHistoryBlock {
  /** 药品名称 */
  Name?: string | null;
  /** 原文 */
  Src?: string | null;
  /** 药物列表 */
  DrugList?: DrugListBlock[] | null;
  /** 归一化值 */
  Value?: string | null;
}

/** 药物史 */
declare interface DrugListBlock {
  /** 通用名称 */
  CommonName?: string | null;
  /** 商品名称 */
  TradeName?: string | null;
  /** 用法用量 */
  Dosage?: DosageBlock | null;
  /** 值 */
  Value?: string | null;
}

/** 心电图详情 */
declare interface EcgDescription {
  /** 心率 */
  HeartRate: EcgItem | null;
  /** 心房率 */
  AuricularRate: EcgItem | null;
  /** 心室率 */
  VentricularRate: EcgItem | null;
  /** 节律 */
  Rhythm: EcgItem | null;
  /** P波时间 */
  PDuration: EcgItem | null;
  /** QRS时间 */
  QrsDuration: EcgItem | null;
  /** QRS电轴 */
  QrsAxis: EcgItem | null;
  /** P-R间期 */
  PRInterval: EcgItem | null;
  /** P-P间期 */
  PPInterval: EcgItem | null;
  /** R-R间期 */
  RRInterval: EcgItem | null;
  /** P-J间期 */
  PJInterval: EcgItem | null;
  /** Q-T间期 */
  QTInterval: EcgItem | null;
  /** qt/qtc间期 */
  QTCInterval: EcgItem | null;
  /** RV5/SV1振幅 */
  Rv5SV1Amplitude: EcgItem | null;
  /** RV5+SV1振幅 */
  Rv5AddSV1Amplitude: EcgItem | null;
  /** PRT电轴 */
  PRTAxis: EcgItem | null;
  /** RV5振幅 */
  Rv5Amplitude: EcgItem | null;
  /** SV1振幅 */
  SV1Amplitude: EcgItem | null;
  /** RV6/SV2 */
  RV6SV2: EcgItem | null;
  /** P/QRS/T电轴 */
  PQRSTAxis: EcgItem | null;
}

/** 心电图诊断 */
declare interface EcgDiagnosis {
  /** 名称 */
  Name: string | null;
  /** 值 */
  Value: string[] | null;
}

/** 心电图指标项 */
declare interface EcgItem {
  /** 名称 */
  Name: string | null;
  /** 值 */
  Value: string | null;
  /** 单位 */
  Unit: string | null;
  /** 原文 */
  Src: string | null;
}

/** 弹性质地 */
declare interface Elastic {
  /** 原文位置 */
  Index: number[] | null;
  /** 分数 */
  Score: string | null;
  /** 原文 */
  Src: string | null;
  /** 值 */
  Value: string | null;
  /** 名称 */
  Name: string | null;
}

/** 心电图 */
declare interface Electrocardiogram {
  /** 心电图详情 */
  EcgDescription: EcgDescription | null;
  /** 心电图诊断 */
  EcgDiagnosis: EcgDiagnosis | null;
}

/** 内窥镜报告 */
declare interface Endoscopy {
  /** 活检部位 */
  BiopsyPart: BiopsyPart | null;
  /** 可见描述 */
  Desc: EndoscopyDesc | null;
  /** 结论 */
  Summary: Summary | null;
}

/** 内窥镜描述 */
declare interface EndoscopyDesc {
  /** 描述内容 */
  Text?: string | null;
  /** 器官 */
  Organ?: EndoscopyOrgan[] | null;
  /** 坐标 */
  Coords?: Coord[] | null;
}

/** 内窥部位 */
declare interface EndoscopyOrgan {
  /** 部位 */
  Part?: Part | null;
  /** 原文位置 */
  Index?: number[] | null;
  /** 原文 */
  Src?: string | null;
  /** 部位别名 */
  PartAlias?: string | null;
  /** 症状描述 */
  SymDescList?: BlockInfo[] | null;
  /** 坐标 */
  Coords?: Coord[] | null;
}

/** 体检结论 */
declare interface Exame {
  /** 结论段落 */
  OverView?: ResultInfo[] | null;
  /** 异常与建议段落 */
  Abnormality?: ResultInfo[] | null;
}

/** 眼科子结构 */
declare interface EyeChildItem {
  /** 球镜 */
  Sph?: BaseItem3[] | null;
  /** 柱镜 */
  Cyl?: BaseItem3[] | null;
  /** 轴位 */
  Ax?: BaseItem3[] | null;
  /** 等效球镜 */
  Se?: BaseItem2 | null;
}

/** 眼科结构体 */
declare interface EyeItem {
  /** 左眼 */
  Left?: EyeChildItem | null;
  /** 右眼 */
  Right?: EyeChildItem | null;
  /** 瞳距 */
  Pd?: BaseItem2 | null;
}

/** 眼科报告结构体 */
declare interface EyeItemsInfo {
  /** 眼科报告 */
  EyeItems?: EyeItem | null;
  /** 版本号 */
  Version?: string | null;
}

/** 家族史 */
declare interface FamilyHistoryBlock {
  /** 家庭成员 */
  RelativeHistory?: RelativeHistoryBlock | null;
  /** 家族肿瘤史 */
  RelativeCancerHistory?: RelativeCancerHistoryBlock | null;
  /** 家族遗传史 */
  GeneticHistory?: GeneticHistoryBlock | null;
}

/** 家族疾病史 */
declare interface FamilyMedicalHistory {
  /** 家族成员史 */
  RelativeHistory: string | null;
  /** 家族肿瘤史 */
  RelativeCancerHistory: string | null;
  /** 家族遗传史 */
  GeneticHistory: string | null;
}

/** 婚育史 */
declare interface FertilityHistoryBlock {
  /** 名称 */
  Name?: string | null;
  /** 原文 */
  Src?: string | null;
  /** 状态 */
  State?: string | null;
  /** 归一化值 */
  Norm?: string | null;
  /** 对外输出值 */
  Value?: string | null;
  /** 妊娠次数 */
  PregCount?: string | null;
  /** 生产次数 */
  ProduCount?: string | null;
}

/** 胎儿数据结构 */
declare interface Fetus {
  /** 双顶径 */
  BPD?: FieldInfo | null;
  /** 腹前后径 */
  APTD?: FieldInfo | null;
  /** 腹左右径 */
  TTD?: FieldInfo | null;
  /** 头臀径 */
  CRL?: FieldInfo | null;
  /** 头围 */
  HC?: FieldInfo | null;
  /** 腹围 */
  AC?: FieldInfo | null;
  /** 股骨长 */
  FL?: FieldInfo | null;
  /** 肱骨长 */
  HL?: FieldInfo | null;
  /** 胎儿重量 */
  Weight?: FieldInfo | null;
  /** 颈项透明层 */
  NT?: FieldInfo | null;
  /** 脐动脉血流 */
  UmbilicalCord?: FieldInfo | null;
  /** 羊水最大深度 */
  WaterDeep?: FieldInfo | null;
  /** 羊水四象限测量 */
  WaterQuad?: FieldInfo | null;
  /** 羊水指数 */
  AFI?: FieldInfo | null;
  /** 胎心 */
  FHR?: FieldInfo | null;
  /** 胎动 */
  Movement?: FieldInfo | null;
  /** 胎数 */
  Num?: FieldInfo | null;
  /** 胎位 */
  Position?: FieldInfo | null;
  /** 是否活胎 */
  Alive?: FieldInfo | null;
  /** 胎盘位置 */
  PlacentaLocation?: FieldInfo | null;
  /** 胎盘厚度 */
  PlacentaThickness?: FieldInfo | null;
  /** 胎盘成熟度 */
  PlacentaGrade?: FieldInfo | null;
  /** 妊娠时间 */
  GestationTime?: FieldInfo | null;
  /** 妊娠周期 */
  GestationPeriod?: FieldInfo | null;
  /** 绕颈 */
  AroundNeck?: FieldInfo | null;
  /** 病变 */
  Sym?: FieldInfo[] | null;
  /** 原文内容 */
  Src?: string | null;
}

/** 通用块信息 */
declare interface FieldInfo {
  /** 名称 */
  Name?: string | null;
  /** 值 */
  Value?: string | null;
  /** 数值 */
  Nums?: NumValue[] | null;
  /** 原文 */
  Src?: string | null;
}

/** 病案首页 */
declare interface FirstPage {
  /** 出入院诊断 */
  DischargeDiagnosis?: DischargeDiagnosis[] | null;
  /** 病理诊断 */
  PathologicalDiagnosis?: BlockInfo | null;
  /** 临床诊断 */
  ClinicalDiagnosis?: BlockInfo | null;
  /** 受伤中毒的外部原因 */
  DamagePoi?: BlockInfoV2 | null;
  /** 病案首页第二页 */
  Fp2NdItems?: Fp2NdItem[] | null;
}

/** 病案首页第二页 */
declare interface Fp2NdItem {
  /** 手术编码 */
  Code?: BaseItem | null;
  /** 手术名称 */
  Name?: BaseItem | null;
  /** 手术开始时间 */
  StartTime?: BaseItem | null;
  /** 手术结束时间 */
  EndTime?: BaseItem | null;
  /** 手术等级 */
  Level?: BaseItem | null;
  /** 手术类型 */
  Type?: BaseItem | null;
  /** 醉愈合方式 */
  IncisionHealingGrade?: BaseItem | null;
  /** 麻醉方法 */
  AnesthesiaMethod?: BaseItem | null;
}

/** 体检报告-一般检测信息 */
declare interface GeneralExaminationBaseItem {
  /** 生命体征 */
  VitalSign?: GeneralExaminationVitalSign | null;
  /** 其他 */
  Others?: GeneralExaminationOthers | null;
  /** 小结 */
  BriefSummary?: GeneralExaminationBriefSummary | null;
}

/** 体检报告-小结 */
declare interface GeneralExaminationBriefSummary {
  /** 一般检查小结 */
  Text?: KeyValueItem | null;
}

/** 体检报告-其他项 */
declare interface GeneralExaminationOthers {
  /** 面容与表情 */
  Countenance?: KeyValueItem | null;
  /** 精神状态 */
  MentalStatus?: KeyValueItem | null;
  /** 发育及营养状况 */
  DevelopmentCondition?: KeyValueItem | null;
  /** 记忆力 */
  Memory?: KeyValueItem | null;
  /** 臀围 */
  Hipline?: ValueUnitItem | null;
  /** 腰臀比 */
  WaistHipRatio?: ValueUnitItem | null;
  /** 生活嗜好 */
  Addiction?: KeyValueItem | null;
  /** 生活能力评定 */
  AbilityOfLifeADL?: KeyValueItem | null;
  /** 一般检查其他 */
  Others?: KeyValueItem[] | null;
  /** 胸围 */
  ChestCircumference?: ChestCircumferenceItem | null;
}

/** 生命体征 */
declare interface GeneralExaminationVitalSign {
  /** 生命体征总体描述 */
  Text?: ValueUnitItem | null;
  /** 体温 */
  BodyTemperature?: ValueUnitItem | null;
  /** 脉率 */
  Pulse?: ValueUnitItem | null;
  /** 心率 */
  HeartRate?: ValueUnitItem | null;
  /** 呼吸频率 */
  BreathingRate?: ValueUnitItem | null;
  /** 身高 */
  BodyHeight?: ValueUnitItem | null;
  /** 体重 */
  BodyWeight?: ValueUnitItem | null;
  /** 体质指数 */
  BodyMassIndex?: ValueUnitItem | null;
  /** 腰围 */
  Waistline?: ValueUnitItem | null;
  /** 血压 */
  BloodPressure?: GeneralExaminationVitalSignBloodPressure | null;
}

/** 血压 */
declare interface GeneralExaminationVitalSignBloodPressure {
  /** 血压 */
  Text?: BloodPressureItem | null;
  /** 收缩压/舒张压 */
  SystolicDiastolicPressure?: BloodPressureItem[] | null;
  /** 收缩压 */
  SystolicPressure?: BloodPressureItem[] | null;
  /** 舒张压 */
  DiastolicPressure?: BloodPressureItem[] | null;
}

/** 家族遗传史 */
declare interface GeneticHistoryBlock {
  /** 名称 */
  Name?: string | null;
  /** 原文 */
  Src?: string | null;
  /** 遗传列表 */
  GeneticList?: string | null;
  /** 对外输出值 */
  Value?: string | null;
}

/** 体检报告-妇科-子宫附件 */
declare interface GynaecologyAdnexal {
  /** 子宫附件总体描述 */
  Text?: KeyValueItem | null;
}

/** 体检报告-妇科 */
declare interface GynaecologyBaseItem {
  /** 外阴 */
  Vulva?: GynaecologyVulva | null;
  /** 阴道 */
  Vagina?: GynaecologyVagina | null;
  /** 子宫颈 */
  Cervix?: GynaecologyCervix | null;
  /** 子宫 */
  Uterus?: GynaecologyUterus | null;
  /** 子宫附件 */
  Adnexal?: GynaecologyAdnexal | null;
  /** 盆腔 */
  PelvicCavity?: GynaecologyPelvicCavity | null;
  /** 妇科其他 */
  Others?: KeyValueItem[] | null;
  /** 月经史 */
  MenstrualHistory?: GynaecologyMenstrualHistory | null;
  /** 小结 */
  BriefSummary?: GynaecologyBriefSummary | null;
}

/** 体检报告-妇科-小结 */
declare interface GynaecologyBriefSummary {
  /** 小结 */
  Text?: KeyValueItem | null;
}

/** 体检报告-妇科-子宫颈 */
declare interface GynaecologyCervix {
  /** 子宫颈总体描述 */
  Text?: KeyValueItem | null;
}

/** 体检报告-妇科-月经史 */
declare interface GynaecologyMenstrualHistory {
  /** 妇科月经史总体描述 */
  Text?: KeyValueItem | null;
}

/** 体检报告-妇科-盆腔 */
declare interface GynaecologyPelvicCavity {
  /** 盆腔总体描述 */
  Text?: KeyValueItem | null;
}

/** 体检报告-妇科-子宫 */
declare interface GynaecologyUterus {
  /** 子宫总体描述 */
  Text?: KeyValueItem | null;
}

/** 体检报告-妇科-阴道 */
declare interface GynaecologyVagina {
  /** 阴道总体描述 */
  Text?: KeyValueItem | null;
}

/** 体检报告-妇科-外阴 */
declare interface GynaecologyVulva {
  /** 外阴总体描述 */
  Text?: KeyValueItem | null;
}

/** 图片处理参数 */
declare interface HandleParam {
  /** ocr引擎 */
  OcrEngineType?: number;
  /** 是否返回分行文本内容 */
  IsReturnText?: boolean;
  /** 顺时针旋转角度 */
  RotateTheAngle?: number;
  /** 自动适配方向,仅支持优图引擎 */
  AutoFitDirection?: boolean;
  /** 坐标优化 */
  AutoOptimizeCoordinate?: boolean;
  /** 是否开启图片压缩，开启时imageOriginalSize必须正确填写 */
  IsScale?: boolean;
  /** 原始图片大小(单位byes),用来判断该图片是否需要压缩 */
  ImageOriginalSize?: number;
  /** 采用后台默认值(2048Kb) */
  ScaleTargetSize?: number;
}

/** 听力信息 */
declare interface HearingItem {
  /** 类型 */
  Name?: string | null;
  /** 项目原文 */
  Item?: PhysicalBaseItem | null;
  /** 方位 */
  Location?: PhysicalBaseItem | null;
  /** 描述 */
  Result?: PhysicalBaseItem | null;
}

/** 组织学类 */
declare interface HistologyClass {
  /** 项目名称 */
  Name?: string | null;
  /** 索引 */
  Index?: number[] | null;
  /** 原文 */
  Src?: string | null;
  /** 归一化值 */
  Value?: string | null;
  /** 原文对应坐标 */
  Coords?: Coord[] | null;
}

/** 组织学等级 */
declare interface HistologyLevel {
  /** 等级 */
  Grade: string | null;
  /** 原文位置 */
  Index: number[] | null;
  /** 原文 */
  Src: string | null;
}

/** 组织学类型 */
declare interface HistologyType {
  /** 浸润 */
  Infiltration: string | null;
  /** 原文位置 */
  Index: number[] | null;
  /** 原文 */
  Src: string | null;
  /** 类型 */
  Type: string | null;
}

/** 组织学类型 */
declare interface HistologyTypeV2 {
  /** 浸润 */
  Infiltration?: string | null;
  /** 索引 */
  Index?: number[] | null;
  /** 原文 */
  Src?: string | null;
  /** 归一化后的组织学类型 */
  Type?: string | null;
  /** 项目名称 */
  Name?: string | null;
  /** 原文对应坐标 */
  Coords?: Coord[] | null;
}

/** 出入院信息 */
declare interface Hospitalization {
  /** 入院时间 */
  AdmissionTime?: string | null;
  /** 出院时间 */
  DischargeTime?: string | null;
  /** 住院天数 */
  AdmissionDays?: string | null;
  /** 入院诊断 */
  AdmissionDignosis?: string | null;
  /** 入院情况 */
  AdmissionCondition?: string | null;
  /** 诊疗经过 */
  DiagnosisTreatment?: string | null;
  /** 出院诊断 */
  DischargeDiagnosis?: string | null;
  /** 出院医嘱 */
  DischargeInstruction?: string | null;
  /** 入院诊断 */
  AdmissionDiagnosis?: string | null;
}

/** IHC块 */
declare interface IHCBlock {
  /** 索引 */
  Index?: number[] | null;
  /** 原文 */
  Src?: string | null;
  /** 名称 */
  Name?: string | null;
  /** 具体值 */
  Value?: ValueBlock | null;
  /** 坐标 */
  Coords?: Coord[] | null;
}

/** Ihc信息 */
declare interface IHCInfo {
  /** 原文位置 */
  Index: number[] | null;
  /** 原文 */
  Src: string | null;
  /** 名称 */
  Name: string | null;
  /** 值 */
  Value: Value;
}

/** IHC */
declare interface IHCV2 {
  /** 索引 */
  Index?: number[] | null;
  /** 原文 */
  Src?: string | null;
  /** ihc归一化 */
  Name?: string | null;
  /** ihc详情 */
  Value?: Value | null;
  /** 原文对应坐标 */
  Coords?: Coord[] | null;
}

/** 图片信息 */
declare interface ImageInfo {
  /** 图片id */
  Id: number;
  /** 图片url */
  Url?: string;
  /** 图片base64编码 */
  Base64?: string;
}

/** 免疫组化 */
declare interface ImmunohistochemistryBlock {
  /** 名称 */
  Name?: string | null;
  /** 原文 */
  Src?: string | null;
  /** 免疫组化详情 */
  Value?: IHCBlock[] | null;
}

/** 检验报告 */
declare interface Indicator {
  /** 检验指标项 */
  Indicators?: IndicatorItem[] | null;
  /** 检验报告块标题 */
  BlockTitle?: BlockTitle[] | null;
}

/** 检验指标项 */
declare interface IndicatorItem {
  /** 英文缩写 */
  Code: string | null;
  /** 标准缩写 */
  Scode: string | null;
  /** 项目名称 */
  Name: string | null;
  /** 标准名 */
  Sname: string | null;
  /** 结果 */
  Result: string | null;
  /** 单位 */
  Unit: string | null;
  /** 参考范围 */
  Range: string | null;
  /** 上下箭头 */
  Arrow: string | null;
  /** 是否正常 */
  Normal: boolean | null;
  /** 项目原文 */
  ItemString: string | null;
  /** 指标项ID */
  Id: number | null;
  /** 指标项坐标位置 */
  Coords: Coordinate | null;
  /** 推测结果是否异常 */
  InferNormal?: string | null;
}

/** 检验指标项结构v2 */
declare interface IndicatorItemV2 {
  /** 项目名称 */
  Item?: BaseItem | null;
  /** 英文编码 */
  Code?: BaseItem | null;
  /** 结果 */
  Result?: BaseItem | null;
  /** 单位 */
  Unit?: BaseItem | null;
  /** 参考范围 */
  Range?: BaseItem | null;
  /** 上下箭头 */
  Arrow?: BaseItem | null;
  /** 检测方法 */
  Method?: BaseItem | null;
  /** 结果是否异常 */
  Normal?: boolean | null;
  /** ID */
  Id?: number | null;
  /** 序号 */
  Order?: number | null;
  /** 推测结果是否异常 */
  InferNormal?: string | null;
}

/** 检验报告v3 */
declare interface IndicatorV3 {
  /** 检验报告V3结论 */
  TableIndictors?: TableIndicators[] | null;
  /** 版本号 */
  Version?: string | null;
  /** 检验报告V3结论 */
  TableIndicators?: TableIndicators[] | null;
}

/** 体检报告-内科-腹部 */
declare interface InternalMedicineAbdomen {
  /** 内科腹部小结 */
  Text?: KeyValueItem | null;
  /** 肝脏 */
  Liver?: InternalMedicineAbdomenLiver | null;
  /** 胆囊 */
  GallBladder?: InternalMedicineAbdomenGallBladder | null;
  /** 胰腺 */
  Pancreas?: InternalMedicineAbdomenPancreas | null;
  /** 脾脏 */
  Spleen?: InternalMedicineAbdomenSpleen | null;
  /** 肾脏 */
  Kidney?: InternalMedicineAbdomenKidney | null;
  /** 腹部其他 */
  Others?: KeyValueItem[] | null;
}

/** 体检报告-内科-腹部-胆囊 */
declare interface InternalMedicineAbdomenGallBladder {
  /** 胆囊总体描述 */
  Src?: KeyValueItem | null;
  /** 胆囊大小 */
  Size?: KeyValueItem | null;
  /** 胆囊触诊 */
  Palpation?: KeyValueItem | null;
  /** 胆囊叩诊 */
  Percussion?: KeyValueItem | null;
  /** 胆囊压痛 */
  Tenderness?: KeyValueItem | null;
  /** 胆囊质地 */
  Consistency?: KeyValueItem | null;
}

/** 体检报告-内科-腹部-肾脏 */
declare interface InternalMedicineAbdomenKidney {
  /** 肾脏总体描述 */
  Src?: KeyValueItem | null;
  /** 肾脏大小 */
  Size?: KeyValueItem | null;
  /** 肾脏触诊 */
  Palpation?: KeyValueItem | null;
  /** 肾脏叩诊 */
  Percussion?: KeyValueItem | null;
  /** 肾脏压痛 */
  Tenderness?: KeyValueItem | null;
  /** 肾脏质地 */
  Consistency?: KeyValueItem | null;
}

/** 体检报告-内科-腹部-肝脏 */
declare interface InternalMedicineAbdomenLiver {
  /** 肝脏总体描述 */
  Src?: KeyValueItem | null;
  /** 肝脏大小 */
  Size?: KeyValueItem | null;
  /** 肝脏触诊 */
  Palpation?: KeyValueItem | null;
  /** 肝脏叩诊 */
  Percussion?: KeyValueItem | null;
  /** 肝脏压痛 */
  Tenderness?: KeyValueItem | null;
  /** 肝脏质地 */
  Consistency?: KeyValueItem | null;
}

/** 体检报告-内科-腹部-胰腺 */
declare interface InternalMedicineAbdomenPancreas {
  /** 胰腺总体描述 */
  Src?: KeyValueItem | null;
  /** 胰腺大小 */
  Size?: KeyValueItem | null;
  /** 胰腺触诊 */
  Palpation?: KeyValueItem | null;
  /** 胰腺叩诊 */
  Percussion?: KeyValueItem | null;
  /** 肝脏压痛 */
  Tenderness?: KeyValueItem | null;
  /** 胰腺质地 */
  Consistency?: KeyValueItem | null;
}

/** 体检报告-内科-腹部-脾脏 */
declare interface InternalMedicineAbdomenSpleen {
  /** 脾脏总体描述 */
  Src?: KeyValueItem | null;
  /** 脾脏大小 */
  Size?: KeyValueItem | null;
  /** 脾脏触诊 */
  Palpation?: KeyValueItem | null;
  /** 脾脏叩诊 */
  Percussion?: KeyValueItem | null;
  /** 脾脏压痛 */
  Tenderness?: KeyValueItem | null;
  /** 脾脏质地 */
  Consistency?: KeyValueItem | null;
}

/** 体检报告-内科 */
declare interface InternalMedicineBaseItem {
  /** 体检报告-内科-腹部 */
  Abdomen?: InternalMedicineAbdomen | null;
  /** 体检报告-内科-心脏 */
  Heart?: InternalMedicineHeart | null;
  /** 体检报告-内科-血管 */
  Vessel?: InternalMedicineVessel | null;
  /** 体检报告-内科-呼吸系统 */
  RespiratorySystem?: InternalMedicineRespiratorySystem | null;
  /** 体检报告-内科-内科其他 */
  Others?: KeyValueItem[] | null;
  /** 体检报告-内科-小结 */
  BriefSummary?: InternalMedicineBriefSummary | null;
}

/** 体检报告-内科-内科小结 */
declare interface InternalMedicineBriefSummary {
  /** 内科小结 */
  Text?: KeyValueItem | null;
}

/** 体检报告-内科-心脏 */
declare interface InternalMedicineHeart {
  /** 心脏总体描述 */
  Text?: KeyValueItem | null;
  /** 心律 */
  HeartRhythm?: KeyValueItem | null;
  /** 心率 */
  HeartRate?: ValueUnitItem | null;
  /** 心脏听诊 */
  HeartAuscultation?: KeyValueItem | null;
}

/** 体检报告-内科-呼吸系统 */
declare interface InternalMedicineRespiratorySystem {
  /** 呼吸系统总体描述 */
  Text?: KeyValueItem | null;
  /** 胸廓 */
  Thoracic?: KeyValueItem | null;
  /** 痰量 */
  Sputum?: KeyValueItem | null;
  /** 肺部叩诊 */
  LungPercussion?: KeyValueItem | null;
  /** 肺部听诊其他 */
  LungAuscultation?: KeyValueItem[] | null;
}

/** 体检报告-内科-血管 */
declare interface InternalMedicineVessel {
  /** 血管总体描述 */
  Text?: KeyValueItem | null;
  /** 血管杂音 */
  VascularMurmur?: KeyValueItem | null;
  /** 外周血管 */
  PeripheralVessel?: KeyValueItem | null;
}

/** 侵犯扩散 */
declare interface Invas {
  /** 原文位置 */
  Index: number[] | null;
  /** 部位 */
  Part: Part | null;
  /** 阳性 */
  Positive: string | null;
  /** 原文 */
  Src: string | null;
}

/** 侵犯 */
declare interface InvasiveV2 {
  /** 索引 */
  Index?: number[] | null;
  /** 部位 */
  Part?: Part | null;
  /** 阴性或阳性 */
  Positive?: string | null;
  /** 原文 */
  Src?: string | null;
  /** 原文对应坐标 */
  Coords?: Coord[] | null;
}

/** 签发信息 */
declare interface IssueInfo {
  /** 编号 */
  CertNumber?: string | null;
  /** 签发机构 */
  IssuedAuthority?: string | null;
  /** 签发日期 */
  IssuedDate?: string | null;
}

/** 体检报告信息 */
declare interface KeyValueItem {
  /** 类型 */
  Name?: string | null;
  /** 项目原文 */
  Item?: PhysicalBaseItem | null;
  /** 结果 */
  Result?: PhysicalBaseItem | null;
}

/** 末次月经 */
declare interface LastMenstrualPeriodBlock {
  /** 名称 */
  Name?: string | null;
  /** 原文 */
  Src?: string | null;
  /** 归一化值 */
  Norm?: string | null;
  /** 类型 */
  Type?: string | null;
  /** 时间戳 */
  Timestamp?: string | null;
  /** 单位 */
  Unit?: string | null;
  /** 对外输出值 */
  Value?: string | null;
}

/** 淋巴 */
declare interface Lymph {
  /** 原文 */
  Src: string | null;
  /** 原文位置 */
  Index: number[] | null;
  /** 部位 */
  Part: Part | null;
  /** 总数 */
  Total: number | null;
  /** 转移数 */
  TransferNum: number | null;
}

/** 单淋巴结转移信息 */
declare interface LymphNode {
  /** 项目名称 */
  Name?: string | null;
  /** 索引 */
  Index?: number[] | null;
  /** 部位 */
  Part?: Part | null;
  /** 原文 */
  Src?: string | null;
  /** 总数量 */
  Total?: number | null;
  /** 转移数量 */
  TransferNum?: number | null;
  /** 淋巴结大小 */
  Sizes?: number[] | null;
  /** 原文对应坐标 */
  Coords?: Coord[] | null;
}

/** 淋巴结总计转移信息 */
declare interface LymphTotal {
  /** 项目名称 */
  Name?: string | null;
  /** 转移数量 */
  TransferNum?: string | null;
  /** 总数量 */
  Total?: string | null;
  /** 原文 */
  Src?: string | null;
  /** 索引 */
  Index?: number[] | null;
  /** 原文对应坐标 */
  Coords?: Coord[] | null;
}

/** 既往史 */
declare interface MainDiseaseHistoryBlock {
  /** 名称 */
  Name?: string | null;
  /** 原文 */
  Src?: string | null;
  /** 状态 */
  State?: boolean | null;
  /** 对外输出值 */
  Value?: string | null;
  /** 否定列表 */
  Neglist?: NeglistBlock | null;
  /** 肯定列表 */
  Poslist?: PoslistBlock | null;
}

/** 孕产报告 */
declare interface Maternity {
  /** 描述部分 */
  Desc?: MaternityDesc | null;
  /** 结论部分 */
  Summary?: MaternitySummary | null;
  /** 报告原文 */
  OcrText?: string | null;
}

/** 孕产描述部分 */
declare interface MaternityDesc {
  /** 胎儿数据结构 */
  Fetus?: Fetus[] | null;
  /** 胎儿数量 */
  FetusNum?: FieldInfo | null;
  /** 原文 */
  Text?: string | null;
  /** 坐标 */
  Coords?: Coord[] | null;
}

/** 孕产结论部分 */
declare interface MaternitySummary {
  /** 胎儿数据结构 */
  Fetus?: Fetus[] | null;
  /** 胎儿数量 */
  FetusNum?: FieldInfo | null;
  /** 病变 */
  Sym?: FieldInfo[] | null;
  /** 原文 */
  Text?: string | null;
  /** 坐标 */
  Coords?: Coord[] | null;
}

/** 医学资料 */
declare interface MedDoc {
  /** 建议 */
  Advice?: Advice | null;
  /** 诊断结果 */
  Diagnosis?: DiagCertItem[] | null;
  /** 疾病史 */
  DiseaseMedicalHistory?: DiseaseMedicalHistory | null;
  /** 个人史 */
  PersonalMedicalHistory?: PersonalMedicalHistory;
  /** 婚孕史 */
  ObstericalMedicalHistory?: ObstericalMedicalHistory;
  /** 家族史 */
  FamilyMedicalHistory?: FamilyMedicalHistory;
  /** 月经史 */
  MenstrualMedicalHistory?: MenstrualMedicalHistory;
  /** 诊疗记录 */
  TreatmentRecord?: TreatmentRecord;
}

/** 门诊病历信息 */
declare interface MedicalRecordInfo {
  /** 就诊日期 */
  DiagnosisTime: string | null;
  /** 就诊科室 */
  DiagnosisDepartmentName: string | null;
  /** 就诊医生 */
  DiagnosisDoctorName: string | null;
  /** 临床诊断 */
  ClinicalDiagnosis: string | null;
  /** 主述 */
  MainNarration: string | null;
  /** 体格检查 */
  PhysicalExamination: string | null;
  /** 检查结论 */
  InspectionFindings: string | null;
  /** 治疗意见 */
  TreatmentOpinion: string | null;
}

/** 药品 */
declare interface Medicine {
  /** 药品名 */
  Name: string | null;
  /** 商品名 */
  TradeName: string | null;
  /** 厂商 */
  Firm: string | null;
  /** 医保类型 */
  Category: string | null;
  /** 规格 */
  Specification: string | null;
  /** 最小包装数量 */
  MinQuantity: string | null;
  /** 最小制剂单位 */
  DosageUnit: string | null;
  /** 最小包装单位 */
  PackingUnit: string | null;
}

/** 月经量 */
declare interface MenstrualFlowBlock {
  /** 名称 */
  Name?: string | null;
  /** 原文 */
  Src?: string | null;
  /** 对外输出值 */
  Value?: string | null;
}

/** 月经史 */
declare interface MenstrualHistoryBlock {
  /** 末次月经 */
  LastMenstrualPeriod?: LastMenstrualPeriodBlock | null;
  /** 月经量 */
  MenstrualFlow?: MenstrualFlowBlock | null;
  /** 初潮时间 */
  MenarcheAge?: LastMenstrualPeriodBlock | null;
  /** 是否绝经 */
  MenstruationOrNot?: MenstruationOrNotBlock | null;
  /** 月经周期 */
  MenstrualCycles?: LastMenstrualPeriodBlock | null;
  /** 月经经期 */
  MenstrualPeriod?: MenstrualPeriodBlock | null;
}

/** 月经史 */
declare interface MenstrualHistoryDetailBlock {
  /** 名称 */
  Name?: string | null;
  /** 原文 */
  Src?: string | null;
  /** 状态 */
  State?: string | null;
  /** 归一化值 */
  Norm?: string | null;
  /** 时间类型 */
  TimeType?: string | null;
  /** 时间戳 */
  Timestamp?: string | null;
  /** 单位 */
  Unit?: string | null;
  /** 对外输出值 */
  Value?: string | null;
}

/** 月经史 */
declare interface MenstrualMedicalHistory {
  /** 末次月经时间 */
  LastMenstrualPeriod: string | null;
  /** 经量 */
  MenstrualFlow: string | null;
  /** 月经初潮年龄 */
  MenarcheAge: string | null;
  /** 是否来月经 */
  MenstruationOrNot: string | null;
  /** 月经周期 */
  MenstrualCycles: string | null;
  /** 月经持续天数 */
  MenstrualPeriod: string | null;
}

/** 月经经期 */
declare interface MenstrualPeriodBlock {
  /** 名称 */
  Name?: string | null;
  /** 原文 */
  Src?: string | null;
  /** 归一化值 */
  Norm?: string | null;
  /** 类型 */
  Type?: string | null;
  /** 时间戳 */
  Timestamp?: string | null;
  /** 单位 */
  Unit?: string | null;
  /** 对外输出值 */
  Value?: string | null;
}

/** 是否绝经 */
declare interface MenstruationOrNotBlock {
  /** 名称 */
  Name?: string | null;
  /** 原文 */
  Src?: string | null;
  /** 归一化值 */
  Norm?: string | null;
  /** 时间类型 */
  TimeType?: string | null;
  /** 时间戳 */
  Timestamp?: string | null;
  /** 对外输出值 */
  Value?: string | null;
}

/** 分子病理 */
declare interface Molecular {
  /** 索引 */
  Index?: number[] | null;
  /** 原文 */
  Src?: string | null;
  /** 基因名称标注化 */
  Name?: string | null;
  /** 分子病理详细信息 */
  Value?: MolecularValue | null;
  /** 原文对应坐标 */
  Coords?: Coord[] | null;
}

/** 分子病理详细信息 */
declare interface MolecularValue {
  /** 外显子 */
  Exon?: string | null;
  /** 点位 */
  Position?: string | null;
  /** 类型 */
  Type?: string | null;
  /** 阳性或阴性 */
  Positive?: string | null;
  /** 基因名称原文 */
  Src?: string | null;
}

/** 多发 */
declare interface Multiple {
  /** 原文位置 */
  Index: number[] | null;
  /** 原文 */
  Src: string | null;
  /** 值 */
  Value: string | null;
  /** 数量 */
  Count: number | null;
  /** 名称 */
  Name: string | null;
}

/** 否定列表 */
declare interface NeglistBlock {
  /** 名称 */
  Name?: string | null;
  /** 值 */
  Value?: string | null;
}

/** 新生儿信息 */
declare interface NeonatalInfo {
  /** 新生儿名字 */
  NeonatalName?: string | null;
  /** 新生儿性别 */
  NeonatalGender?: string | null;
  /** 出生身长 */
  BirthLength?: string | null;
  /** 出生体重 */
  BirthWeight?: string | null;
  /** 出生孕周 */
  GestationalAge?: string | null;
  /** 出生时间 */
  BirthTime?: string | null;
  /** 出生地点 */
  BirthPlace?: string | null;
  /** 医疗机构 */
  MedicalInstitutions?: string | null;
}

/** 标准部位 */
declare interface NormPart {
  /** 部位值 */
  Part?: string | null;
  /** 部位方向 */
  PartDirection?: string | null;
  /** 组织值 */
  Tissue?: string | null;
  /** 组织方向 */
  TissueDirection?: string | null;
  /** 上级部位 */
  Upper?: string | null;
  /** 部位详情 */
  PartDetail?: PartDesc | null;
}

/** 大小 */
declare interface NormSize {
  /** 数量 */
  Number?: string[] | null;
  /** 类型 */
  Type?: string | null;
  /** 单位 */
  Unit?: string | null;
  /** 归一化值 */
  Impl?: string | null;
}

/** 数值结构体 */
declare interface NumValue {
  /** 数值 */
  Num?: string | null;
  /** 单位 */
  Unit?: string | null;
}

/** 孕产史 */
declare interface ObstericalMedicalHistory {
  /** 婚史 */
  MarriageHistory: string | null;
  /** 孕史 */
  FertilityHistory: string | null;
}

/** 婚姻-生育史 */
declare interface ObstetricalHistoryBlock {
  /** 婚姻史 */
  MarriageHistory?: MenstrualHistoryDetailBlock | null;
  /** 婚育史 */
  FertilityHistory?: FertilityHistoryBlock | null;
}

/** 体检报告-眼科-裸眼视力 */
declare interface OphthalmologyBareEyeSight {
  /** 左眼视力 */
  LeftEyeVisual?: KeyValueItem | null;
  /** 裸眼视力 */
  Text?: KeyValueItem | null;
  /** 右眼视力 */
  RightEyeVisual?: KeyValueItem | null;
}

/** 体检报告-眼科 */
declare interface OphthalmologyBaseItem {
  /** 裸眼视力 */
  BareEyeSight?: OphthalmologyBareEyeSight | null;
  /** 矫正视力 */
  CorrectedVisualAcuity?: OphthalmologyCorrectedVisualAcuity | null;
  /** 色觉 */
  ColourVision?: OphthalmologyColourVision | null;
  /** 眼底 */
  Fundoscopy?: OphthalmologyFundoscopy | null;
  /** 眼科其他 */
  Others?: KeyValueItem[] | null;
  /** 眼科小结 */
  BriefSummary?: OphthalmologyBriefSummary | null;
}

/** 体检报告-眼科-小结 */
declare interface OphthalmologyBriefSummary {
  /** 眼科小结 */
  Text?: KeyValueItem | null;
}

/** 体检报告-眼科-色觉 */
declare interface OphthalmologyColourVision {
  /** 色觉总体描述 */
  Text?: KeyValueItem | null;
}

/** 体检报告-眼科-矫正视力 */
declare interface OphthalmologyCorrectedVisualAcuity {
  /** 左眼矫正视力 */
  LeftEyeVisual?: KeyValueItem | null;
  /** 矫正视力 */
  Text?: KeyValueItem | null;
  /** 右眼矫正视力 */
  RightEyeVisual?: KeyValueItem | null;
}

/** 体检报告-眼科-眼底 */
declare interface OphthalmologyFundoscopy {
  /** 眼底检查总体描述 */
  Text?: KeyValueItem | null;
}

/** 器官 */
declare interface Organ {
  /** 部位 */
  Part?: Part | null;
  /** 大小 */
  Size?: Size[] | null;
  /** 包膜 */
  Envelope?: BlockInfo | null;
  /** 边缘 */
  Edge?: BlockInfo | null;
  /** 内部回声 */
  InnerEcho?: BlockInfo | null;
  /** 腺体 */
  Gland?: BlockInfo | null;
  /** 形状 */
  Shape?: BlockInfo | null;
  /** 厚度 */
  Thickness?: BlockInfo | null;
  /** 形态 */
  ShapeAttr?: BlockInfo | null;
  /** 血液cdfi */
  CDFI?: BlockInfo | null;
  /** 描述信息 */
  SymDesc?: BlockInfo | null;
  /** 大小状态 */
  SizeStatus?: BlockInfo | null;
  /** 轮廓 */
  Outline?: BlockInfo | null;
  /** 结构 */
  Structure?: BlockInfo | null;
  /** 密度 */
  Density?: BlockInfo | null;
  /** 血管 */
  Vas?: BlockInfo | null;
  /** 囊壁 */
  Cysticwall?: BlockInfo | null;
  /** 被膜 */
  Capsule?: BlockInfo | null;
  /** 峡部厚度 */
  IsthmusThicknese?: Size | null;
  /** 内部回声分布 */
  InnerEchoDistribution?: BlockInfo | null;
  /** 原文 */
  Src?: string | null;
  /** 原文位置 */
  Index?: number[] | null;
  /** 透声度 */
  Transparent?: BlockInfo | null;
  /** MRI ADC */
  MriAdc?: BlockInfo | null;
  /** MRI DWI */
  MriDwi?: BlockInfo | null;
  /** MRI T1信号 */
  MriT1?: BlockInfo | null;
  /** MRI T2信号 */
  MriT2?: BlockInfo | null;
  /** CT HU值 */
  CtHu?: BlockInfo | null;
  /** SUmax值 */
  Suvmax?: BlockInfo | null;
  /** 代谢情况 */
  Metabolism?: BlockInfo | null;
  /** 放射性摄取 */
  RadioactiveUptake?: BlockInfo | null;
  /** 淋巴结情况 */
  LymphEnlargement?: BlockInfo | null;
  /** 影像特征 */
  ImageFeature?: BlockInfo | null;
  /** 导管 */
  Duct?: BlockInfo | null;
  /** 趋势 */
  Trend?: BlockInfo | null;
  /** 手术情况 */
  Operation?: BlockInfo | null;
  /** 器官在报告图片中的坐标 */
  Coords?: Coord[] | null;
  /** 峡部厚度 */
  IsthmusThickness?: Size | null;
}

/** 其他信息 */
declare interface OtherInfo {
  /** 麻醉方法 */
  Anesthesia?: SurgeryAttr | null;
  /** 术中出血 */
  BloodLoss?: SurgeryAttr | null;
  /** 输血 */
  BloodTransfusion?: SurgeryAttr | null;
  /** 手术用时 */
  Duration?: SurgeryAttr | null;
  /** 手术开始时间 */
  EndTime?: SurgeryAttr | null;
  /** 手术结束时间 */
  StartTime?: SurgeryAttr | null;
}

/** 体检报告-耳鼻喉科 */
declare interface OtolaryngologyBaseItem {
  /** 耳朵 */
  Ear?: OtolaryngologyEar | null;
  /** 鼻 */
  Nose?: OtolaryngologyNose | null;
  /** 喉 */
  Larynx?: OtolaryngologyLarynx | null;
  /** 耳鼻喉其他 */
  Others?: KeyValueItem[] | null;
  /** 小结 */
  BriefSummary?: OtolaryngologyBriefSummary | null;
}

/** 体检报告-耳鼻喉科-小结 */
declare interface OtolaryngologyBriefSummary {
  /** 耳鼻喉小结 */
  Text?: KeyValueItem | null;
}

/** 体检报告-耳鼻喉科-耳朵 */
declare interface OtolaryngologyEar {
  /** 耳总体描述 */
  Text?: KeyValueItem | null;
  /** 听力 */
  Hearing?: HearingItem | null;
}

/** 体检报告-耳鼻喉科-喉 */
declare interface OtolaryngologyLarynx {
  /** 喉总体描述 */
  Text?: KeyValueItem | null;
}

/** 体检报告-耳鼻喉科-鼻 */
declare interface OtolaryngologyNose {
  /** 鼻总体描述 */
  Text?: KeyValueItem | null;
}

/** pTNM */
declare interface PTNM {
  /** 项目名称 */
  Name?: string | null;
  /** 索引 */
  Index?: number[] | null;
  /** 原文 */
  Src?: string | null;
  /** 归一化值 */
  Value?: string | null;
  /** pT */
  PT?: string | null;
  /** pN */
  PN?: string | null;
  /** pM */
  PM?: string | null;
  /** 原文对应坐标 */
  Coords?: Coord[] | null;
}

/** PTNM分期 */
declare interface PTNMBlock {
  /** 名称 */
  Name?: string | null;
  /** 原文 */
  Src?: string | null;
  /** PTNM分期 */
  PTNMM?: string | null;
  /** PTNM分期 */
  PTNMN?: string | null;
  /** PTNM分期 */
  PTNMT?: string | null;
}

/** 文本块 */
declare interface ParagraphBlock {
  /** 切口愈合情况 */
  IncisionHealingText?: string | null;
  /** 辅助检查 */
  AuxiliaryExaminationText?: string | null;
  /** 特殊检查 */
  SpecialExamText?: string | null;
  /** 门诊诊断 */
  OutpatientDiagnosisText?: string | null;
  /** 入院情况 */
  AdmissionConditionText?: string | null;
  /** 诊疗经过 */
  CheckAndTreatmentProcessText?: string | null;
  /** 体征 */
  SymptomsAndSignsText?: string | null;
  /** 出院医嘱 */
  DischargeInstructionsText?: string | null;
  /** 入院诊断 */
  AdmissionDiagnosisText?: string | null;
  /** 手术情况 */
  SurgeryConditionText?: string | null;
  /** 病理诊断 */
  PathologicalDiagnosisText?: string | null;
  /** 出院情况 */
  DischargeConditionText?: string | null;
  /** 检查记录 */
  CheckRecordText?: string | null;
  /** 主诉 */
  ChiefComplaintText?: string | null;
  /** 出院诊断 */
  DischargeDiagnosisText?: string | null;
  /** 既往史 */
  MainDiseaseHistoryText?: string | null;
  /** 现病史 */
  DiseasePresentText?: string | null;
  /** 个人史 */
  PersonalHistoryText?: string | null;
  /** 月经史 */
  MenstruallHistoryText?: string | null;
  /** 婚育史 */
  ObstericalHistoryText?: string | null;
  /** 家族史 */
  FamilyHistoryText?: string | null;
  /** 过敏史 */
  AllergyHistoryText?: string | null;
  /** 病史信息 */
  DiseaseHistoryText?: string | null;
  /** 其它诊断 */
  OtherDiagnosisText?: string | null;
  /** 体格检查 */
  BodyExaminationText?: string | null;
  /** 专科检查 */
  SpecialistExaminationText?: string | null;
  /** 治疗结果 */
  TreatmentResultText?: string | null;
  /** 月经史 */
  MenstrualHistoryText?: string | null;
}

/** 母亲或父亲信息 */
declare interface ParentInfo {
  /** 名字 */
  Name?: string | null;
  /** 年龄 */
  Age?: string | null;
  /** 证件号 */
  IdCard?: string | null;
  /** 民族 */
  Ethnicity?: string | null;
  /** 国籍 */
  Nationality?: string | null;
  /** 地址 */
  Address?: string | null;
}

/** 部位信息 */
declare interface Part {
  /** 原文位置 */
  Index?: number[] | null;
  /** 部位 */
  NormPart?: NormPart | null;
  /** 原文 */
  Src?: string | null;
  /** 值 */
  Value?: string | null;
  /** 名称 */
  Name?: string | null;
  /** 值 */
  ValueBrief?: string | null;
}

/** 部位描述 */
declare interface PartDesc {
  /** 主要部位 */
  MainDir?: string | null;
  /** 部位 */
  Part?: string | null;
  /** 次要部位 */
  SecondaryDir?: string | null;
  /** 类型 */
  Type?: string | null;
}

/** 病理诊断 */
declare interface PathologicalDiagnosisBlock {
  /** 名称 */
  Name?: string | null;
  /** 原文 */
  Src?: string | null;
  /** 病理详细 */
  Detail?: PathologicalDiagnosisDetailBlock[] | null;
  /** 值 */
  Value?: string | null;
}

/** 病理详细 */
declare interface PathologicalDiagnosisDetailBlock {
  /** 部位 */
  Part?: string | null;
  /** 类型 */
  HistologicalType?: string | null;
  /** 等级 */
  HistologicalGrade?: string | null;
}

/** 病理报告 */
declare interface PathologyReport {
  /** 癌症部位 */
  CancerPart: Part | null;
  /** 癌症部位大小 */
  CancerSize: Size[] | null;
  /** 描述文本 */
  DescText: string | null;
  /** 组织学等级 */
  HistologyLevel: HistologyLevel | null;
  /** 组织学类型 */
  HistologyType: HistologyType | null;
  /** IHC信息 */
  IHC: IHCInfo[] | null;
  /** 浸润深度 */
  InfiltrationDepth: BlockInfo | null;
  /** 肿瘤扩散 */
  Invasive: Invas[] | null;
  /** 淋巴结 */
  LymphNodes: Lymph[] | null;
  /** PTNM信息 */
  PTNM: BlockInfo | null;
  /** 病理报告类型 */
  PathologicalReportType: BlockInfo | null;
  /** 报告原文 */
  ReportText: string | null;
  /** 标本类型 */
  SampleType: BlockInfo | null;
  /** 结论文本 */
  SummaryText: string | null;
}

/** 病理报告v2 */
declare interface PathologyV2 {
  /** 报告类型 */
  PathologicalReportType?: Report | null;
  /** 描述段落 */
  Desc?: DescInfo | null;
  /** 诊断结论 */
  Summary?: SummaryInfo | null;
  /** 报告全文 */
  ReportText?: string | null;
  /** 淋巴结总计转移信息 */
  LymphTotal?: LymphTotal[] | null;
  /** 单淋巴结转移信息 */
  LymphNodes?: LymphNode[] | null;
  /** ihc信息 */
  Ihc?: IHCV2[] | null;
  /** 临床诊断 */
  Clinical?: BaseInfo | null;
  /** 是否癌前病变 */
  Precancer?: HistologyClass | null;
  /** 是否恶性肿瘤 */
  Malignant?: HistologyClass | null;
  /** 是否良性肿瘤 */
  Benigntumor?: HistologyClass | null;
  /** 送检材料 */
  SampleType?: BaseInfo | null;
  /** 淋巴结大小 */
  LymphSize?: Size[] | null;
  /** 分子病理 */
  Molecular?: Molecular[] | null;
}

/** 患者信息 */
declare interface PatientInfo {
  /** 患者姓名 */
  Name: string | null;
  /** 患者性别 */
  Sex: string | null;
  /** 患者年龄 */
  Age: string | null;
  /** 患者手机号码 */
  Phone: string | null;
  /** 患者地址 */
  Address: string | null;
  /** 患者身份证 */
  IdCard: string | null;
  /** 健康卡号 */
  HealthCardNo: string | null;
  /** 社保卡号 */
  SocialSecurityCardNo: string | null;
  /** 出生日期 */
  Birthday: string | null;
  /** 民族 */
  Ethnicity: string | null;
  /** 婚姻状况 */
  Married: string | null;
  /** 职业 */
  Profession: string | null;
  /** 教育程度 */
  EducationBackground: string | null;
  /** 国籍 */
  Nationality: string | null;
  /** 籍贯 */
  BirthPlace: string | null;
  /** 医保类型 */
  MedicalInsuranceType: string | null;
  /** 标准化年龄 */
  AgeNorm: string | null;
  /** 民族 */
  Nation: string | null;
  /** 婚姻代码 */
  MarriedCode: string | null;
  /** 职业代码 */
  ProfessionCode: string | null;
  /** 居民医保代码 */
  MedicalInsuranceTypeCode: string | null;
  /** 床号 */
  BedNo: string | null;
}

/** 体检报告PDF信息 */
declare interface PdfInfo {
  /** pdf文件url链接(暂不支持) */
  Url?: string;
  /** pdf文件base64编码字符串 */
  Base64?: string;
}

/** 个人史 */
declare interface PersonalHistoryBlock {
  /** 出生地 */
  BirthPlace?: BirthPlaceBlock | null;
  /** 居住地 */
  LivePlace?: BirthPlaceBlock | null;
  /** 职业 */
  Job?: BirthPlaceBlock | null;
  /** 吸烟 */
  SmokeHistory?: SmokeHistoryBlock | null;
  /** 喝酒 */
  AlcoholicHistory?: SmokeHistoryBlock | null;
  /** 月经史 */
  MenstrualHistory?: MenstrualHistoryBlock | null;
  /** 婚姻-生育史 */
  ObstericalHistory?: ObstetricalHistoryBlock | null;
  /** 家族史 */
  FamilyHistory?: FamilyHistoryBlock | null;
}

/** 个人史 */
declare interface PersonalMedicalHistory {
  /** 出生史 */
  BirthPlace: string | null;
  /** 居住史 */
  LivePlace: string | null;
  /** 工作史 */
  Job: string | null;
  /** 吸烟史 */
  SmokeHistory: string | null;
  /** 饮酒史 */
  AlcoholicHistory: string | null;
}

/** 体检报告基础信息 */
declare interface PhysicalBaseItem {
  /** 类型 */
  Name?: string | null;
  /** 原始文本 */
  Src?: string | null;
  /** 归一化后值 */
  Value?: string | null;
  /** 四点坐标 */
  Coords?: Coord[] | null;
}

/** 体检报告综合信息 */
declare interface PhysicalExamination {
  /** 一般检查 */
  GeneralExamination?: GeneralExaminationBaseItem | null;
  /** 内科 */
  InternalMedicine?: InternalMedicineBaseItem | null;
  /** 外科 */
  Surgery?: SurgeryBaseItem | null;
  /** 口腔科 */
  Stomatology?: StomatologyBaseItem | null;
  /** 眼科 */
  Ophthalmology?: OphthalmologyBaseItem | null;
  /** 耳鼻喉科 */
  Otolaryngology?: OtolaryngologyBaseItem | null;
  /** 妇科 */
  Gynaecology?: GynaecologyBaseItem | null;
  /** 未标准化 */
  Unclassified?: KeyValueItem[] | null;
}

/** 体检报告V1版本 */
declare interface PhysicalExaminationV1 {
  /** 体检报告信息 */
  PhysicalExaminationMulti?: PhysicalExamination | null;
  /** 版本 */
  Version?: string | null;
}

/** 点坐标 */
declare interface Point {
  /** x坐标 */
  X?: number | null;
  /** y坐标 */
  Y?: number | null;
}

/** 肯定列表 */
declare interface PoslistBlock {
  /** 名称 */
  Name?: string | null;
  /** 值 */
  Value?: string | null;
}

/** 处方单 */
declare interface Prescription {
  /** 药品列表 */
  MedicineList: Medicine[] | null;
}

/** 位置坐标 */
declare interface Rectangle {
  /** x坐标 */
  X?: number | null;
  /** y坐标 */
  Y?: number | null;
  /** 宽 */
  W?: number | null;
  /** 高 */
  H?: number | null;
}

/** 复发时间 */
declare interface RelapseDateBlock {
  /** 名称 */
  Name?: string | null;
  /** 原文 */
  Src?: string | null;
  /** 疾病名称 */
  DiseaseName?: string | null;
  /** 类型 */
  Type?: string | null;
  /** 归一化值 */
  Norm?: string | null;
  /** 单位 */
  Unit?: string | null;
  /** 时间戳 */
  Timestamp?: string | null;
  /** 对外输出值 */
  Value?: string | null;
}

/** 家族肿瘤史 */
declare interface RelativeCancerHistoryBlock {
  /** 名称 */
  Name?: string | null;
  /** 原文 */
  Src?: string | null;
  /** 肿瘤史列表 */
  RelativeCancerList?: string | null;
  /** 对外输出值 */
  Value?: string | null;
}

/** 家庭成员 */
declare interface RelativeHistoryBlock {
  /** 名称 */
  Name?: string | null;
  /** 成员列表 */
  Detail?: RelativeHistoryDetailBlock[] | null;
  /** 原文 */
  Src?: string | null;
  /** 对外输出值 */
  Value?: string | null;
}

/** 家庭成员详情 */
declare interface RelativeHistoryDetailBlock {
  /** 名称 */
  Name?: string | null;
  /** 关系 */
  Relation?: string | null;
  /** 死亡时间 */
  TimeOfDeath?: string | null;
  /** 时间类型 */
  TimeType?: string | null;
}

/** 报告类型 */
declare interface Report {
  /** 项目名称 */
  Name?: string | null;
  /** 索引 */
  Index?: number[] | null;
  /** 原文 */
  Src?: string | null;
  /** 报告类型 */
  Value?: string | null;
  /** 原文对应坐标 */
  Coords?: Coord[] | null;
}

/** 报告基本信息 */
declare interface ReportInfo {
  /** 医院名称 */
  Hospital?: string | null;
  /** 科室名称 */
  DepartmentName?: string | null;
  /** 申请时间 */
  BillingTime?: string | null;
  /** 报告时间 */
  ReportTime?: string | null;
  /** 检查时间 */
  InspectTime?: string | null;
  /** 检查号 */
  CheckNum?: string | null;
  /** 影像号 */
  ImageNum?: string | null;
  /** 放射号 */
  RadiationNum?: string | null;
  /** 检验号 */
  TestNum?: string | null;
  /** 门诊号 */
  OutpatientNum?: string | null;
  /** 病理号 */
  PathologyNum?: string | null;
  /** 住院号 */
  InHospitalNum?: string | null;
  /** 样本号 */
  SampleNum?: string | null;
  /** 标本种类 */
  SampleType?: string | null;
  /** 病历号 */
  MedicalRecordNum?: string | null;
  /** 报告名称 */
  ReportName?: string | null;
  /** 超声号 */
  UltraNum?: string | null;
  /** 临床诊断 */
  Diagnose?: string | null;
  /** 检查项目 */
  CheckItem?: string | null;
  /** 检查方法 */
  CheckMethod?: string | null;
  /** 诊断时间 */
  DiagnoseTime?: string | null;
  /** 体检号 */
  HealthCheckupNum?: string | null;
  /** 其它时间 */
  OtherTime?: string | null;
  /** 打印时间 */
  PrintTime?: string | null;
  /** 未归类时间 */
  Times?: Time[] | null;
  /** 床号 */
  BedNo?: string | null;
}

/** 指定报告类型选用其结构化版本 */
declare interface ReportTypeVersion {
  /** 检验报告 */
  ReportType?: number | null;
  /** 版本2 */
  Version?: number | null;
}

/** 结论信息 */
declare interface ResultInfo {
  /** 段落文本 */
  Text?: BaseInfo | null;
  /** 结论详情 */
  Items?: BaseInfo[] | null;
}

/** 大小 */
declare interface Size {
  /** 原文位置 */
  Index?: number[] | null;
  /** 标准大小 */
  NormSize?: NormSize | null;
  /** 原文 */
  Src?: string | null;
  /** 值 */
  Value?: string | null;
  /** 名称 */
  Name?: string | null;
}

/** 吸烟史 */
declare interface SmokeHistoryBlock {
  /** 名称 */
  Name?: string | null;
  /** 原文 */
  Src?: string | null;
  /** 时间单位 */
  TimeUnit?: string | null;
  /** 时间归一化 */
  TimeNorm?: string | null;
  /** 吸烟量 */
  Amount?: string | null;
  /** 戒烟状态 */
  QuitState?: boolean | null;
  /** 是否吸烟 */
  State?: boolean | null;
  /** 对外输出值 */
  Value?: string | null;
}

/** 体检报告-口腔科 */
declare interface StomatologyBaseItem {
  /** 龋齿 */
  ToothDecay?: StomatologyToothDecay | null;
  /** 牙龈 */
  Gingiva?: StomatologyGingiva | null;
  /** 牙周 */
  Periodontics?: StomatologyPeriodontics | null;
  /** 口腔其他 */
  Others?: KeyValueItem[] | null;
  /** 小结 */
  BriefSummary?: StomatologyBriefSummary | null;
}

/** 体检报告-口腔科-小结 */
declare interface StomatologyBriefSummary {
  /** 口腔小结 */
  Text?: KeyValueItem | null;
}

/** 体检报告-口腔科-牙龈 */
declare interface StomatologyGingiva {
  /** 牙龈总体描述 */
  Text?: KeyValueItem | null;
}

/** 体检报告-口腔科-牙周 */
declare interface StomatologyPeriodontics {
  /** 牙周总体描述 */
  Text?: KeyValueItem | null;
}

/** 体检报告-口腔科-龋齿 */
declare interface StomatologyToothDecay {
  /** 龋齿总体描述 */
  Text?: KeyValueItem | null;
}

/** 结论 */
declare interface Summary {
  /** 症状 */
  Symptom?: SymptomInfo[] | null;
  /** 文本 */
  Text?: string | null;
  /** 坐标 */
  Coords?: Coord[] | null;
}

/** 诊断结论 */
declare interface SummaryInfo {
  /** 诊断结论文本 */
  Text?: BaseInfo | null;
  /** 诊断结论详情 */
  Infos?: DetailInformation[] | null;
}

/** 手术记录 */
declare interface Surgery {
  /** 手术史 */
  SurgeryHistory?: SurgeryHistory | null;
  /** 其他信息 */
  OtherInfo?: OtherInfo | null;
}

/** 体检报告-外科-肛门直肠 */
declare interface SurgeryAnorectal {
  /** 肛门直肠总体描述 */
  Text?: KeyValueItem | null;
  /** 直肠指检 */
  DigitalRectalExamination?: KeyValueItem | null;
  /** 痔疮 */
  Hemorrhoid?: KeyValueItem | null;
}

/** 手术记录属性 */
declare interface SurgeryAttr {
  /** 名称 */
  Name: string | null;
  /** 值 */
  Value: string | null;
}

/** 体检报告-外科 */
declare interface SurgeryBaseItem {
  /** 体检报告-外科-头颈部 */
  HeadNeck?: SurgeryHeadNeck | null;
  /** 体检报告-外科-甲状腺 */
  Thyroid?: SurgeryThyroid | null;
  /** 体检报告-外科-乳房 */
  Breast?: SurgeryBreast | null;
  /** 体检报告-外科-浅表淋巴结 */
  LymphNode?: SurgeryLymphNode | null;
  /** 体检报告-外科-脊柱 */
  SpinalExtremities?: SurgerySpinalExtremities | null;
  /** 体检报告-外科-皮肤 */
  Skin?: SurgerySkin | null;
  /** 体检报告-外科-肛门直肠 */
  Anorectal?: SurgeryAnorectal | null;
  /** 体检报告-外科-泌尿生殖系统 */
  UrogenitalSystem?: SurgeryUrogenitalSystem | null;
  /** 体检报告-外科-外科其他 */
  Others?: KeyValueItem[] | null;
  /** 体检报告-外科-小结 */
  BriefSummary?: SurgeryBriefSummary | null;
}

/** 体检报告-外科-乳房 */
declare interface SurgeryBreast {
  /** 乳房总体描述 */
  Text?: KeyValueItem | null;
}

/** 体检报告-外科-小结 */
declare interface SurgeryBriefSummary {
  /** 外科小结 */
  Text?: KeyValueItem | null;
}

/** 手术经过 */
declare interface SurgeryConditionBlock {
  /** 名称 */
  Name?: string | null;
  /** 原文 */
  Src?: string | null;
  /** 手术历史 */
  SurgeryList?: SurgeryListBlock[] | null;
  /** 对外输出值 */
  Value?: string | null;
}

/** 体检报告-外科-头颈部 */
declare interface SurgeryHeadNeck {
  /** 头颈部总体描述 */
  Text?: KeyValueItem | null;
}

/** 手术史 */
declare interface SurgeryHistory {
  /** 手术名称 */
  SurgeryName: SurgeryAttr | null;
  /** 手术日期 */
  SurgeryDate: SurgeryAttr | null;
  /** 术前诊断 */
  PreoperativePathology: SurgeryAttr | null;
  /** 术中诊断 */
  IntraoperativePathology: SurgeryAttr | null;
  /** 术后诊断 */
  PostoperativePathology: SurgeryAttr | null;
  /** 出院诊断 */
  DischargeDiagnosis: SurgeryAttr | null;
}

/** 手术史 */
declare interface SurgeryHistoryBlock {
  /** 名称 */
  Name?: string | null;
  /** 原文 */
  Src?: string | null;
  /** 值 */
  Value?: string | null;
  /** 手术列表 */
  Surgerylist?: SurgeryListBlock[] | null;
}

/** 手术列表 */
declare interface SurgeryListBlock {
  /** 时间 */
  Time?: string | null;
  /** 类型 */
  TimeType?: string | null;
  /** 名称 */
  Name?: string[] | null;
  /** 部位 */
  Part?: string | null;
}

/** 体检报告-外科-浅表淋巴结 */
declare interface SurgeryLymphNode {
  /** 浅表淋巴结总体描述 */
  Text?: KeyValueItem | null;
}

/** 体检报告-外科-皮肤 */
declare interface SurgerySkin {
  /** 皮肤总体描述 */
  Text?: KeyValueItem | null;
}

/** 体检报告-外科-脊柱 */
declare interface SurgerySpinalExtremities {
  /** 脊柱四肢总体描述 */
  Text?: KeyValueItem | null;
  /** 脊柱 */
  SpinalColumn?: KeyValueItem | null;
  /** 四肢和关节 */
  LimbJoint?: KeyValueItem | null;
  /** 平跛足 */
  Foot?: KeyValueItem | null;
  /** 骨骼 */
  Bone?: KeyValueItem | null;
  /** 步态 */
  Gait?: KeyValueItem | null;
  /** 残疾或畸形 */
  Deformity?: KeyValueItem | null;
}

/** 体检报告-外科-甲状腺 */
declare interface SurgeryThyroid {
  /** 甲状腺总体描述 */
  Text?: KeyValueItem | null;
}

/** 体检报告-外科-泌尿生殖系统 */
declare interface SurgeryUrogenitalSystem {
  /** 泌尿生殖系统总体描述 */
  Text?: KeyValueItem | null;
  /** 前列腺 */
  Prostate?: KeyValueItem | null;
  /** 外生殖器（男性） */
  ExternalReproductiveOrgans?: KeyValueItem | null;
}

/** 病症描述信息 */
declare interface SymptomInfo {
  /** 等级 */
  Grade?: BlockInfo | null;
  /** 部位 */
  Part?: Part | null;
  /** 原文位置 */
  Index?: number[] | null;
  /** 病变 */
  Symptom?: BlockInfo | null;
  /** 属性 */
  Attrs?: BlockInfo[] | null;
  /** 原文 */
  Src?: string | null;
  /** 坐标 */
  Coords?: Coord[] | null;
}

/** 检验报告结构 */
declare interface TableIndicators {
  /** 项目列表 */
  Indicators?: IndicatorItemV2[] | null;
  /** 采样标本 */
  Sample?: BaseItem | null;
}

/** 报告模板 */
declare interface Template {
  /** 患者信息 */
  PatientInfo?: PatientInfo | null;
  /** 报告信息 */
  ReportInfo?: ReportInfo | null;
  /** 检查报告 */
  Check?: Check | null;
  /** 病理报告 */
  Pathology?: PathologyReport | null;
  /** 出院报告，入院报告，门诊病历 */
  MedDoc?: MedDoc | null;
  /** 诊断证明 */
  DiagCert?: DiagCert | null;
  /** 病案首页 */
  FirstPage?: FirstPage | null;
  /** 检验报告 */
  Indicator?: Indicator | null;
  /** 报告类型 */
  ReportType?: string | null;
  /** 门诊病历信息 */
  MedicalRecordInfo?: MedicalRecordInfo | null;
  /** 出入院信息 */
  Hospitalization?: Hospitalization | null;
  /** 手术记录 */
  Surgery?: Surgery | null;
  /** 心电图报告 */
  Electrocardiogram?: Electrocardiogram | null;
  /** 内窥镜报告 */
  Endoscopy?: Endoscopy | null;
  /** 处方单 */
  Prescription?: Prescription | null;
  /** 疫苗接种凭证 */
  VaccineCertificate?: VaccineCertificate | null;
  /** OCR文本 */
  OcrText?: string | null;
  /** OCR拼接后文本 */
  OcrResult?: string | null;
  /** 报告类型 */
  ReportTypeDesc?: string | null;
  /** 病理报告v2 */
  PathologyV2?: PathologyV2 | null;
  /** 碳14尿素呼气试验 */
  C14?: Indicator | null;
  /** 体检结论 */
  Exame?: Exame | null;
  /** 出院报告v2，入院报告v2，门诊病历v2 */
  MedDocV2?: DischargeInfoBlock | null;
  /** 检验报告v3 */
  IndicatorV3?: IndicatorV3 | null;
  /** 核酸报告 */
  Covid?: CovidItemsInfo | null;
  /** 孕产报告 */
  Maternity?: Maternity | null;
  /** 眼科报告 */
  Eye?: EyeItemsInfo | null;
  /** 出生证明 */
  BirthCert?: BirthCert | null;
  /** 时间轴 */
  Timeline?: TimelineInformation | null;
}

/** 文本类型 */
declare interface TextType {
  /** 类别Id */
  Id: number | null;
  /** 类别层级 */
  Level: number | null;
  /** 类别名 */
  Name: string | null;
}

/** 文本类型列表块 */
declare interface TextTypeListBlock {
  /** 文本类型列表 */
  TextTypeList?: TextType[] | null;
}

/** 时间 */
declare interface Time {
  /** 具体时间类型 */
  Name: string | null;
  /** 时间值 */
  Value: string | null;
}

/** 时间轴事件 */
declare interface TimelineEvent {
  /** 事件类型 */
  Type?: string | null;
  /** 原文本 */
  Src?: string | null;
  /** 事件子类型 */
  SubType?: string | null;
  /** 事件发生时间 */
  Time?: string | null;
  /** 事件值 */
  Value?: string | null;
  /** 位置坐标 */
  Rectangle?: Rectangle | null;
  /** 事件发生地点 */
  Place?: string | null;
  /** 结束时间 */
  EndTime?: string | null;
}

/** 时间轴 */
declare interface TimelineInformation {
  /** 时间轴 */
  Timeline?: TimelineEvent[] | null;
}

/** 输血史 */
declare interface TransfusionHistoryBlock {
  /** 名称 */
  Name?: string | null;
  /** 原文 */
  Src?: string | null;
  /** 状态 */
  State?: boolean | null;
  /** 值 */
  Value?: string | null;
}

/** 病历 */
declare interface TreatmentRecord {
  /** 入院 */
  DmissionCondition?: string | null;
  /** 主诉 */
  ChiefComplaint?: string | null;
  /** 现病史 */
  DiseasePresent?: string | null;
  /** 主要症状体征 */
  SymptomsAndSigns?: string | null;
  /** 辅助检查 */
  AuxiliaryExamination?: string | null;
  /** 体格检查 */
  BodyExamination?: string | null;
  /** 专科检查 */
  SpecialistExamination?: string | null;
  /** 精神检查 */
  MentalExamination?: string | null;
  /** 检查记录 */
  CheckRecord?: string | null;
  /** 化验结果 */
  InspectResult?: string | null;
  /** 切口愈合情况 */
  IncisionHealing?: string | null;
  /** 处理意见 */
  TreatmentSuggestion?: string | null;
  /** 门诊随访要求 */
  FollowUpRequirements?: string | null;
  /** 诊疗经过 */
  CheckAndTreatmentProcess?: string | null;
  /** 手术经过 */
  SurgeryCondition?: string | null;
  /** 入院情况 */
  ConditionChanges?: string | null;
  /** 出院情况 */
  DischargeCondition?: string | null;
  /** pTNM信息 */
  PTNM?: string | null;
  /** pTNMM信息 */
  PTNMM?: string | null;
  /** pTNMN信息 */
  PTNMN?: string | null;
  /** pTNMT信息 */
  PTNMT?: string | null;
  /** ECOG信息 */
  ECOG?: string | null;
  /** NRS信息 */
  NRS?: string | null;
  /** KPS信息 */
  KPS?: string | null;
  /** 死亡日期 */
  DeathDate?: string | null;
  /** 复发日期 */
  RelapseDate?: string | null;
  /** 观测天数 */
  ObservationDays?: string | null;
  /** 入院 */
  AdmissionCondition?: string | null;
}

/** 治疗记录 */
declare interface TreatmentRecordBlock {
  /** 免疫组化 */
  Immunohistochemistry?: ImmunohistochemistryBlock | null;
  /** 主诉 */
  ChiefComplaint?: ChiefComplaintBlock | null;
  /** 入院情况 */
  AdmissionCondition?: AdmissionConditionBlock | null;
  /** 查体 */
  BodyExamination?: BodyExaminationBlock | null;
  /** 入院诊断 */
  AdmissionDiagnosis?: AdmissionDiagnosisBlock | null;
  /** 入院中医诊断 */
  AdmissionTraditionalDiagnosis?: AdmissionDiagnosisBlock | null;
  /** 入院西医诊断 */
  AdmissionModernDiagnosis?: AdmissionDiagnosisBlock | null;
  /** 病理诊断 */
  PathologicalDiagnosis?: PathologicalDiagnosisBlock | null;
  /** 现病史 */
  DiseasePresent?: DiseasePresentBlock | null;
  /** 体征 */
  SymptomsAndSigns?: DiseasePresentBlock | null;
  /** 辅助检查 */
  AuxiliaryExamination?: DiseasePresentBlock | null;
  /** 特殊检查 */
  SpecialistExamination?: DiseasePresentBlock | null;
  /** 精神检查 */
  MentalExamination?: DiseasePresentBlock | null;
  /** 检查记录 */
  CheckRecord?: DiseasePresentBlock | null;
  /** 检查结果 */
  InspectResult?: DiseasePresentBlock | null;
  /** 治疗经过 */
  CheckAndTreatmentProcess?: DiseasePresentBlock | null;
  /** 手术经过 */
  SurgeryCondition?: SurgeryConditionBlock | null;
  /** 切口愈合 */
  IncisionHealing?: DiseasePresentBlock | null;
  /** 出院诊断 */
  DischargeDiagnosis?: DischargeDiagnosisBlock | null;
  /** 出院中医诊断 */
  DischargeTraditionalDiagnosis?: DiseasePresentBlock | null;
  /** 出院西医诊断 */
  DischargeModernDiagnosis?: DischargeDiagnosisBlock | null;
  /** 出院情况 */
  DischargeCondition?: DischargeConditionBlock | null;
  /** 出院医嘱 */
  DischargeInstructions?: DiseasePresentBlock | null;
  /** 治疗建议 */
  TreatmentSuggestion?: DiseasePresentBlock | null;
  /** 随访 */
  FollowUpRequirements?: DiseasePresentBlock | null;
  /** 治疗情况变化 */
  ConditionChanges?: DiseasePresentBlock | null;
  /** 收缩压 */
  PulmonaryArterySystolicPressure?: DiseasePresentBlock | null;
  /** bclc分期 */
  BCLC?: DiseasePresentBlock | null;
  /** PTNM分期 */
  PTNM?: PTNMBlock | null;
  /** ECOG评分 */
  ECOG?: DiseasePresentBlock | null;
  /** NRS评分 */
  NRS?: DiseasePresentBlock | null;
  /** kps评分 */
  KPS?: DiseasePresentBlock | null;
  /** 癌症分期 */
  Cancerstaging?: ClinicalStaging | null;
  /** 死亡时间 */
  DeathDate?: DeathDateBlock | null;
  /** 复发日期 */
  RelapseDate?: RelapseDateBlock | null;
  /** 观察日期 */
  ObservationDays?: DeathDateBlock | null;
  /** 切口愈合情况 */
  IncisionHealingText?: string | null;
  /** 辅助检查 */
  AuxiliaryExaminationText?: string | null;
  /** 特殊检查 */
  SpecialExamText?: string | null;
  /** 门诊诊断 */
  OutpatientDiagnosisText?: string | null;
  /** 入院情况 */
  AdmissionConditionText?: string | null;
  /** 诊疗经过 */
  CheckAndTreatmentProcessText?: string | null;
  /** 体征 */
  SymptomsAndSignsText?: string | null;
  /** 出院医嘱 */
  DischargeInstructionsText?: string | null;
  /** 入院诊断 */
  AdmissionDiagnosisText?: string | null;
  /** 手术情况 */
  SurgeryConditionText?: string | null;
  /** 病理诊断 */
  PathologicalDiagnosisText?: string | null;
  /** 出院情况 */
  DischargeConditionText?: string | null;
  /** 检查记录 */
  CheckRecordText?: string | null;
  /** 主诉 */
  ChiefComplaintText?: string | null;
  /** 出院诊断 */
  DischargeDiagnosisText?: string | null;
}

/** 结节 */
declare interface TuberInfo {
  /** 类型 */
  Type?: BlockInfo | null;
  /** 部位 */
  Part?: Part | null;
  /** 大小 */
  Size?: Size[] | null;
  /** 多发 */
  Multiple?: Multiple | null;
  /** 纵横比 */
  AspectRatio?: AspectRatio | null;
  /** 边缘 */
  Edge?: BlockInfo | null;
  /** 内部回声 */
  InnerEcho?: BlockInfo | null;
  /** 外部回声 */
  RearEcho?: BlockInfo | null;
  /** 弹性质地 */
  Elastic?: Elastic | null;
  /** 形状 */
  Shape?: BlockInfo | null;
  /** 形态 */
  ShapeAttr?: BlockInfo | null;
  /** 皮髓质信息 */
  SkinMedulla?: BlockInfo | null;
  /** 变化趋势 */
  Trend?: BlockInfo | null;
  /** 钙化 */
  Calcification?: BlockInfo | null;
  /** 包膜 */
  Envelope?: BlockInfo | null;
  /** 强化 */
  Enhancement?: BlockInfo | null;
  /** 淋巴结 */
  LymphEnlargement?: BlockInfo | null;
  /** 淋巴门 */
  LymphDoor?: BlockInfo | null;
  /** 活动度 */
  Activity?: BlockInfo | null;
  /** 手术情况 */
  Operation?: BlockInfo | null;
  /** 血液cdfi */
  CDFI?: BlockInfo | null;
  /** 原文位置 */
  Index?: number[] | null;
  /** 大小状态 */
  SizeStatus?: BlockInfo | null;
  /** 内部回声分布 */
  InnerEchoDistribution?: BlockInfo | null;
  /** 内部回声类型 */
  InnerEchoType?: BlockInfo[] | null;
  /** 轮廓 */
  Outline?: BlockInfo | null;
  /** 结构 */
  Structure?: BlockInfo | null;
  /** 密度 */
  Density?: BlockInfo | null;
  /** 血管 */
  Vas?: BlockInfo | null;
  /** 囊壁 */
  Cysticwall?: BlockInfo | null;
  /** 被膜 */
  Capsule?: BlockInfo | null;
  /** 峡部厚度 */
  IsthmusThicknese?: Size | null;
  /** 原文 */
  Src?: string | null;
  /** 透声度 */
  Transparent?: BlockInfo | null;
  /** MRI ADC */
  MriAdc?: BlockInfo | null;
  /** MRI DWI */
  MriDwi?: BlockInfo | null;
  /** MRI T1信号 */
  MriT1?: BlockInfo | null;
  /** MRI T2信号 */
  MriT2?: BlockInfo | null;
  /** CT HU值 */
  CtHu?: BlockInfo | null;
  /** SUmax值 */
  Suvmax?: BlockInfo | null;
  /** 代谢情况 */
  Metabolism?: BlockInfo | null;
  /** 放射性摄取 */
  RadioactiveUptake?: BlockInfo | null;
  /** 病变 */
  SymDesc?: BlockInfo | null;
  /** 影像特征 */
  ImageFeature?: BlockInfo | null;
  /** 在报告图片中的坐标 */
  Coords?: Coord[] | null;
  /** 峡部厚度 */
  IsthmusThickness?: Size | null;
}

/** 免疫接种记录 */
declare interface Vaccination {
  /** 序号 */
  Id?: string | null;
  /** 疫苗名称 */
  Vaccine?: string | null;
  /** 剂次 */
  Dose?: string | null;
  /** 接种日期 */
  Date?: string | null;
  /** 疫苗批号 */
  LotNumber?: string | null;
  /** 生产企业 */
  Manufacturer?: string | null;
  /** 接种单位 */
  Clinic?: string | null;
  /** 接种部位 */
  Site?: string | null;
  /** 接种者 */
  Provider?: string | null;
  /** 疫苗批号 */
  Lot?: string | null;
}

/** 免疫接种证明 */
declare interface VaccineCertificate {
  /** 免疫接种列表 */
  VaccineList: Vaccination[] | null;
}

/** 值 */
declare interface Value {
  /** 等级 */
  Grade: string | null;
  /** 百分比 */
  Percent: number[] | null;
  /** 阳性 */
  Positive: string | null;
}

/** 值块 */
declare interface ValueBlock {
  /** 等级 */
  Grade?: string | null;
  /** 百分比 */
  Percent?: number[] | null;
  /** 阳性阴性 */
  Positive?: string | null;
}

/** 体检报告信息-包含单位 */
declare interface ValueUnitItem {
  /** 类型 */
  Name?: string | null;
  /** 项目原文 */
  Item?: PhysicalBaseItem | null;
  /** 数值 */
  Result?: PhysicalBaseItem | null;
  /** 单位 */
  Unit?: PhysicalBaseItem | null;
}

declare interface ImageToClassRequest {
  /** 图片列表，允许传入多张图片，支持传入图片的base64编码，暂不支持图片url */
  ImageInfoList: ImageInfo[];
  /** 图片处理参数 */
  HandleParam: HandleParam;
  /** 不填，默认为0 */
  Type: number;
  /** 后付费的用户类型，新客户传1，老客户可不传或传 0。2022 年 12 月 15 新增了计费项，在此时间之前已经通过商务指定优惠价格的大客户，请不传这个字段或传 0，如果传 1 会导致以前获得的折扣价格失效。在 2022 年 12 月 15 日之后，通过商务指定优惠价格的大客户请传 1。 */
  UserType?: number;
}

declare interface ImageToClassResponse {
  /** 分类结果 */
  TextTypeList?: TextType[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ImageToObjectRequest {
  /** 图片列表，允许传入多张图片，目前只支持传入图片base64编码，图片url暂不支持 */
  ImageInfoList: ImageInfo[];
  /** 图片处理参数 */
  HandleParam: HandleParam;
  /** 报告类型，目前支持11（检验报告），12（检查报告），15（病理报告），28（出院报告），29（入院报告），210（门诊病历），212（手术记录），218（诊断证明），363（心电图），27（内窥镜检查），215（处方单），219（免疫接种证明），301（C14呼气试验）。如果不清楚报告类型，可以使用分类引擎，该字段传0（同时IsUsedClassify字段必须为True，否则无法输出结果） */
  Type: number;
  /** 是否使用分类引擎，当不确定报告类型时，可以使用收费的报告分类引擎服务。若该字段为 False，则 Type 字段不能为 0，否则无法输出结果。注意：当 IsUsedClassify 为True 时，表示使用收费的报告分类服务，将会产生额外的费用，具体收费标准参见 [购买指南的产品价格](https://cloud.tencent.com/document/product/1314/54264)。 */
  IsUsedClassify: boolean;
  /** 后付费的用户类型，新客户传1，老客户可不传或传 0。2022 年 12 月 15 新增了计费项，在此时间之前已经通过商务指定优惠价格的大客户，请不传这个字段或传 0，如果传 1 会导致以前获得的折扣价格失效。在 2022 年 12 月 15 日之后，通过商务指定优惠价格的大客户请传 1。 */
  UserType?: number;
  /** 可选。用于指定不同报告使用的结构化引擎版本，不同版本返回的JSON 数据结果不兼容。若不指定版本号，就默认用旧的版本号。（1）检验报告 11，默认使用 V2，最高支持 V3。（2）病理报告 15，默认使用 V1，最高支持 V2。（3）入院记录29、出院记录 28、病历记录 216、病程记录 217、门诊记录 210，默认使用 V1，最高支持 V2。 */
  ReportTypeVersion?: ReportTypeVersion[];
}

declare interface ImageToObjectResponse {
  /** 报告结构化结果 */
  Template?: Template | null;
  /** 多级分类结果 */
  TextTypeList?: TextType[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface TextToClassRequest {
  /** 报告文本 */
  Text: string;
  /** 后付费的用户类型，新客户传1，老客户可不传或传 0。2022 年 12 月 15 新增了计费项，在此时间之前已经通过商务指定优惠价格的大客户，请不传这个字段或传 0，如果传 1 会导致以前获得的折扣价格失效。在 2022 年 12 月 15 日之后，通过商务指定优惠价格的大客户请传 1。 */
  UserType?: number;
}

declare interface TextToClassResponse {
  /** 分类结果 */
  TextTypeList?: TextType[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface TextToObjectRequest {
  /** 报告文本 */
  Text: string;
  /** 报告类型，目前支持12（检查报告），15（病理报告），28（出院报告），29（入院报告），210（门诊病历），212（手术记录），218（诊断证明），363（心电图），27（内窥镜检查），215（处方单），219（免疫接种证明），301（C14呼气试验）。如果不清楚报告类型，可以使用分类引擎，该字段传0（同时IsUsedClassify字段必须为True，否则无法输出结果） */
  Type: number;
  /** 是否使用分类引擎，当不确定报告类型时，可以使用收费的报告分类引擎服务。若该字段为False，则Type字段不能为0，否则无法输出结果。注意：当 IsUsedClassify 为True 时，表示使用收费的报告分类服务，将会产生额外的费用，具体收费标准参见 [购买指南的产品价格](https://cloud.tencent.com/document/product/1314/54264)。 */
  IsUsedClassify: boolean;
  /** 后付费的用户类型，新客户传1，老客户可不传或传 0。2022 年 12 月 15 新增了计费项，在此时间之前已经通过商务指定优惠价格的大客户，请不传这个字段或传 0，如果传 1 会导致以前获得的折扣价格失效。在 2022 年 12 月 15 日之后，通过商务指定优惠价格的大客户请传 1。 */
  UserType?: number;
  /** 可选。用于指定不同报告使用的结构化引擎版本，不同版本返回的JSON 数据结果不兼容。若不指定版本号，就默认用旧的版本号。（1）检验报告 11，默认使用 V2，最高支持 V3。（2）病理报告 15，默认使用 V1，最高支持 V2。（3）入院记录29、出院记录 28、病历记录 216、病程记录 217、门诊记录 210，默认使用 V1，最高支持 V2。 */
  ReportTypeVersion?: ReportTypeVersion[];
}

declare interface TextToObjectResponse {
  /** 报告结构化结果 */
  Template?: Template;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface TurnPDFToObjectAsyncGetResultRequest {
  /** 加密任务ID。在上一步通过TurnPDFToObjectAsync 接口返回的TaskID。1、建议在上一步调用TurnPDFToObjectAsync接口传入PDF之后，等5-10分钟再调用此接口获取 json 结果。如果任务还没完成，可以等待几分钟之后再重新调用此接口获取 json 结果。2、临时加密存储的 json 结果会 24 小时后定时自动删除，因此TaskID 仅 24 小时内有效。3、TaskID 与腾讯云的账号绑定，通过 TurnPDFToObjectAsync 传入 PDF 文件和通过 TurnPDFToObjectAsyncGetResult 获取 json 结果，必须是同一个腾讯云账号，否则无法获取到 json 结果。 */
  TaskID: string;
}

declare interface TurnPDFToObjectAsyncGetResultResponse {
  /** 报告结构化结果 */
  Template?: Template;
  /** 多级分类结果 */
  TextTypeList?: TextType[];
  /** 报告结构化结果(体检报告PDF结构化接口返回的 json 内容非常多，建议通过本地代码调用) */
  Block?: Block;
  /** 是否使用Block字段 */
  IsBlock?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface TurnPDFToObjectAsyncRequest {
  /** 体检报告PDF文件信息, 目前只支持传PDF文件的Base64编码字符(PDF文件不能超过10MB，如果超过建议先压缩PDF，再转成base64) */
  PdfInfo: PdfInfo;
}

declare interface TurnPDFToObjectAsyncResponse {
  /** 加密任务ID。 1、此 ID 是经过加密生成，是用于获取 PDF 返回 json 的凭证，需要由客户存储该 TaskID。2、建议在获取到TaskID 后，5-10分钟后再调用 TurnPDFToObjectAsyncGetResult 接口获取 json 结果。3、使用此接口，腾讯不会存储传入的 PDF 文件，但是会临时加密存储对应的 json 结果。如果不希望腾讯临时加密存储 json 结果，请使用 TurnPDFToObject 接口。4、加密存储的 json 结果会24小时后定时自动删除，因此TaskID 仅 24 小时内有效，请在24小时内调用接口 TurnPDFToObjectAsyncGetResult 获取对应 json 结果。5、TaskID 与腾讯云的账号绑定，通过 TurnPDFToObjectAsync 传入PDF文件和通过 TurnPDFToObjectAsyncGetResult 获取 json 结果，必须是同一个腾讯云账号。即其它人就算获取到 TaskID 也无法获取到 json 结果。 */
  TaskID?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface TurnPDFToObjectRequest {
  /** 体检报告PDF文件信息, 目前只支持传PDF文件的Base64编码字符(PDF文件不能超过10MB，如果超过建议先压缩PDF，再转成base64) */
  PdfInfo: PdfInfo;
}

declare interface TurnPDFToObjectResponse {
  /** 报告结构化结果 */
  Template?: Template;
  /** 多级分类结果 */
  TextTypeList?: TextType[];
  /** 报告结构化结果(体检报告PDF结构化接口返回的 json 内容非常多，建议通过本地代码调用) */
  Block?: Block;
  /** 是否使用Block字段 */
  IsBlock?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Mrs 医疗报告结构化} */
declare interface Mrs {
  (): Versions;
  /** 图片分类接口 {@link ImageToClassRequest} {@link ImageToClassResponse} */
  ImageToClass(data: ImageToClassRequest, config?: AxiosRequestConfig): AxiosPromise<ImageToClassResponse>;
  /** 图片结构化接口 {@link ImageToObjectRequest} {@link ImageToObjectResponse} */
  ImageToObject(data: ImageToObjectRequest, config?: AxiosRequestConfig): AxiosPromise<ImageToObjectResponse>;
  /** 文本分类接口 {@link TextToClassRequest} {@link TextToClassResponse} */
  TextToClass(data: TextToClassRequest, config?: AxiosRequestConfig): AxiosPromise<TextToClassResponse>;
  /** 文本结构化接口 {@link TextToObjectRequest} {@link TextToObjectResponse} */
  TextToObject(data: TextToObjectRequest, config?: AxiosRequestConfig): AxiosPromise<TextToObjectResponse>;
  /** 体检报告PDF文件结构化 {@link TurnPDFToObjectRequest} {@link TurnPDFToObjectResponse} */
  TurnPDFToObject(data: TurnPDFToObjectRequest, config?: AxiosRequestConfig): AxiosPromise<TurnPDFToObjectResponse>;
  /** 体检报告PDF文件结构化-异步接口 {@link TurnPDFToObjectAsyncRequest} {@link TurnPDFToObjectAsyncResponse} */
  TurnPDFToObjectAsync(data: TurnPDFToObjectAsyncRequest, config?: AxiosRequestConfig): AxiosPromise<TurnPDFToObjectAsyncResponse>;
  /** 体检报告PDF文件结构化异步获取结果接口 {@link TurnPDFToObjectAsyncGetResultRequest} {@link TurnPDFToObjectAsyncGetResultResponse} */
  TurnPDFToObjectAsyncGetResult(data: TurnPDFToObjectAsyncGetResultRequest, config?: AxiosRequestConfig): AxiosPromise<TurnPDFToObjectAsyncGetResultResponse>;
}

export declare type Versions = ["2020-09-10"];

export default Mrs;
