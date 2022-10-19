/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

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

/** 活检部位 */
declare interface BiopsyPart {
  /** 值 */
  Value: string | null;
  /** 原文 */
  Src: string | null;
}

/** 块信息 */
declare interface BlockInfo {
  /** 原文位置 */
  Index: number[] | null;
  /** 阳性 */
  Positive: string | null;
  /** 原文 */
  Src: string | null;
  /** 值 */
  Value: string | null;
  /** 类型 */
  Type: string | null;
  /** 名称 */
  Name: string | null;
}

/** 检查报告单 */
declare interface Check {
  /** 描述 */
  Desc: Desc | null;
  /** 结论 */
  Summary: Summary | null;
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

/** 描述 */
declare interface Desc {
  /** 描述 */
  Text: string | null;
  /** 器官 */
  Organ: Organ[] | null;
  /** 结节 */
  Tuber: TuberInfo[] | null;
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
  Text: string | null;
  /** 器官 */
  Organ: EndoscopyOrgan[] | null;
}

/** 内窥部位 */
declare interface EndoscopyOrgan {
  /** 部位 */
  Part: Part | null;
  /** 原文位置 */
  Index: number[] | null;
  /** 原文 */
  Src: string | null;
  /** 部位别名 */
  PartAlias: string | null;
  /** 症状描述 */
  SymDescList: BlockInfo[] | null;
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

/** 病案首页 */
declare interface FirstPage {
  /** 出入院诊断 */
  DischargeDiagnosis: DischargeDiagnosis[] | null;
  /** 病理诊断 */
  PathologicalDiagnosis: BlockInfo | null;
  /** 临床诊断 */
  ClinicalDiagnosis: BlockInfo | null;
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

/** 出入院信息 */
declare interface Hospitalization {
  /** 入院时间 */
  AdmissionTime: string | null;
  /** 出院时间 */
  DischargeTime: string | null;
  /** 住院天数 */
  AdmissionDays: string | null;
  /** 入院诊断 */
  AdmissionDignosis: string | null;
  /** 入院情况 */
  AdmissionCondition: string | null;
  /** 诊疗经过 */
  DiagnosisTreatment: string | null;
  /** 出院诊断 */
  DischargeDiagnosis: string | null;
  /** 出院医嘱 */
  DischargeInstruction: string | null;
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

/** 图片信息 */
declare interface ImageInfo {
  /** 图片id */
  Id: number;
  /** 图片url */
  Url?: string;
  /** 图片base64编码 */
  Base64?: string;
}

/** 检验报告 */
declare interface Indicator {
  /** 检验指标项 */
  Indicators: IndicatorItem[] | null;
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

/** 医学资料 */
declare interface MedDoc {
  /** 建议 */
  Advice: Advice | null;
  /** 诊断结果 */
  Diagnosis: DiagCertItem[] | null;
  /** 疾病史 */
  DiseaseMedicalHistory: DiseaseMedicalHistory | null;
  /** 个人史 */
  PersonalMedicalHistory: PersonalMedicalHistory;
  /** 婚孕史 */
  ObstericalMedicalHistory: ObstericalMedicalHistory;
  /** 家族史 */
  FamilyMedicalHistory: FamilyMedicalHistory;
  /** 月经史 */
  MenstrualMedicalHistory: MenstrualMedicalHistory;
  /** 诊疗记录 */
  TreatmentRecord: TreatmentRecord;
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

/** 标准部位 */
declare interface NormPart {
  /** 部位值 */
  Part: string | null;
  /** 部位方向 */
  PartDirection: string | null;
  /** 组织值 */
  Tissue: string | null;
  /** 组织方向 */
  TissueDirection: string | null;
  /** 上级部位 */
  Upper: string | null;
}

/** 大小 */
declare interface NormSize {
  /** 数量 */
  Number: string[] | null;
  /** 类型 */
  Type: string | null;
  /** 单位 */
  Unit: string | null;
}

/** 孕产史 */
declare interface ObstericalMedicalHistory {
  /** 婚史 */
  MarriageHistory: string | null;
  /** 孕史 */
  FertilityHistory: string | null;
}

/** 器官 */
declare interface Organ {
  /** 部位 */
  Part: Part | null;
  /** 大小 */
  Size: Size[] | null;
  /** 包膜 */
  Envelope: BlockInfo | null;
  /** 边缘 */
  Edge: BlockInfo | null;
  /** 内部回声 */
  InnerEcho: BlockInfo | null;
  /** 腺体 */
  Gland: BlockInfo | null;
  /** 形状 */
  Shape: BlockInfo | null;
  /** 厚度 */
  Thickness: BlockInfo | null;
  /** 形态 */
  ShapeAttr: BlockInfo | null;
  /** 血液cdfi */
  CDFI: BlockInfo | null;
  /** 描述信息 */
  SymDesc: BlockInfo | null;
  /** 大小状态 */
  SizeStatus: BlockInfo | null;
  /** 轮廓 */
  Outline: BlockInfo | null;
  /** 结构 */
  Structure: BlockInfo | null;
  /** 密度 */
  Density: BlockInfo | null;
  /** 血管 */
  Vas: BlockInfo | null;
  /** 囊壁 */
  Cysticwall: BlockInfo | null;
  /** 被膜 */
  Capsule: BlockInfo | null;
  /** 峡部厚度 */
  IsthmusThicknese: Size | null;
  /** 内部回声分布 */
  InnerEchoDistribution: BlockInfo | null;
  /** 原文 */
  Src: string | null;
  /** 原文位置 */
  Index: number[] | null;
}

/** 部位信息 */
declare interface Part {
  /** 原文位置 */
  Index: number[] | null;
  /** 部位 */
  NormPart: NormPart | null;
  /** 原文 */
  Src: string | null;
  /** 值 */
  Value: string | null;
  /** 名称 */
  Name: string | null;
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

/** 处方单 */
declare interface Prescription {
  /** 药品列表 */
  MedicineList: Medicine[] | null;
}

/** 报告基本信息 */
declare interface ReportInfo {
  /** 医院名称 */
  Hospital: string | null;
  /** 科室名称 */
  DepartmentName: string | null;
  /** 申请时间 */
  BillingTime: string | null;
  /** 报告时间 */
  ReportTime: string | null;
  /** 检查时间 */
  InspectTime: string | null;
  /** 检查号 */
  CheckNum: string | null;
  /** 影像号 */
  ImageNum: string | null;
  /** 放射号 */
  RadiationNum: string | null;
  /** 检验号 */
  TestNum: string | null;
  /** 门诊号 */
  OutpatientNum: string | null;
  /** 病理号 */
  PathologyNum: string | null;
  /** 住院号 */
  InHospitalNum: string | null;
  /** 样本号 */
  SampleNum: string | null;
  /** 标本种类 */
  SampleType: string | null;
  /** 病历号 */
  MedicalRecordNum: string | null;
  /** 报告名称 */
  ReportName: string | null;
  /** 超声号 */
  UltraNum: string | null;
  /** 临床诊断 */
  Diagnose: string | null;
  /** 检查项目 */
  CheckItem: string | null;
  /** 检查方法 */
  CheckMethod: string | null;
  /** 诊断时间 */
  DiagnoseTime: string | null;
  /** 体检号 */
  HealthCheckupNum: string | null;
  /** 其它时间 */
  OtherTime: string | null;
  /** 打印时间 */
  PrintTime: string | null;
  /** 未归类时间 */
  Times: Time[] | null;
}

/** 大小 */
declare interface Size {
  /** 原文位置 */
  Index: number[] | null;
  /** 标准大小 */
  NormSize: NormSize | null;
  /** 原文 */
  Src: string | null;
  /** 值 */
  Value: string | null;
}

/** 结论 */
declare interface Summary {
  /** 症状 */
  Symptom: SymptomInfo[] | null;
  /** 文本 */
  Text: string | null;
}

/** 手术记录 */
declare interface Surgery {
  /** 手术史 */
  SurgeryHistory: SurgeryHistory | null;
}

/** 手术记录属性 */
declare interface SurgeryAttr {
  /** 名称 */
  Name: string | null;
  /** 值 */
  Value: string | null;
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

/** 病症描述信息 */
declare interface SymptomInfo {
  /** 等级 */
  Grade: BlockInfo | null;
  /** 部位 */
  Part: Part | null;
  /** 原文位置 */
  Index: number[] | null;
  /** 病变 */
  Symptom: BlockInfo | null;
  /** 属性 */
  Attrs: BlockInfo[] | null;
  /** 原文 */
  Src: string | null;
}

/** 报告模板 */
declare interface Template {
  /** 患者信息 */
  PatientInfo: PatientInfo | null;
  /** 报告信息 */
  ReportInfo: ReportInfo | null;
  /** 检查报告 */
  Check: Check | null;
  /** 病理报告 */
  Pathology: PathologyReport | null;
  /** 出院报告，入院报告，门诊病历 */
  MedDoc: MedDoc | null;
  /** 诊断证明 */
  DiagCert: DiagCert | null;
  /** 病案首页 */
  FirstPage: FirstPage | null;
  /** 检验报告 */
  Indicator: Indicator | null;
  /** 报告类型 */
  ReportType: string | null;
  /** 门诊病历信息 */
  MedicalRecordInfo: MedicalRecordInfo | null;
  /** 出入院信息 */
  Hospitalization: Hospitalization | null;
  /** 手术记录 */
  Surgery: Surgery | null;
  /** 心电图报告 */
  Electrocardiogram: Electrocardiogram | null;
  /** 内窥镜报告 */
  Endoscopy: Endoscopy | null;
  /** 处方单 */
  Prescription: Prescription | null;
  /** 免疫接种证明 */
  VaccineCertificate: VaccineCertificate | null;
  /** OCR文本 */
  OcrText: string | null;
  /** OCR拼接后文本 */
  OcrResult: string | null;
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

/** 时间 */
declare interface Time {
  /** 具体时间类型 */
  Name: string | null;
  /** 时间值 */
  Value: string | null;
}

/** 病历 */
declare interface TreatmentRecord {
  /** 入院 */
  DmissionCondition: string | null;
  /** 主诉 */
  ChiefComplaint: string | null;
  /** 现病史 */
  DiseasePresent: string | null;
  /** 主要症状体征 */
  SymptomsAndSigns: string | null;
  /** 辅助检查 */
  AuxiliaryExamination: string | null;
  /** 体格检查 */
  BodyExamination: string | null;
  /** 专科检查 */
  SpecialistExamination: string | null;
  /** 精神检查 */
  MentalExamination: string | null;
  /** 检查记录 */
  CheckRecord: string | null;
  /** 化验结果 */
  InspectResult: string | null;
  /** 切口愈合情况 */
  IncisionHealing: string | null;
  /** 处理意见 */
  TreatmentSuggestion: string | null;
  /** 门诊随访要求 */
  FollowUpRequirements: string | null;
  /** 诊疗经过 */
  CheckAndTreatmentProcess: string | null;
  /** 手术经过 */
  SurgeryCondition: string | null;
  /** 入院情况 */
  ConditionChanges: string | null;
  /** 出院情况 */
  DischargeCondition: string | null;
  /** pTNM信息 */
  PTNM: string | null;
  /** pTNMM信息 */
  PTNMM: string | null;
  /** pTNMN信息 */
  PTNMN: string | null;
  /** pTNMT信息 */
  PTNMT: string | null;
  /** ECOG信息 */
  ECOG: string | null;
  /** NRS信息 */
  NRS: string | null;
  /** KPS信息 */
  KPS: string | null;
  /** 死亡日期 */
  DeathDate: string | null;
  /** 复发日期 */
  RelapseDate: string | null;
  /** 观测天数 */
  ObservationDays: string | null;
}

/** 结节 */
declare interface TuberInfo {
  /** 类型 */
  Type: BlockInfo | null;
  /** 部位 */
  Part: Part | null;
  /** 大小 */
  Size: Size[] | null;
  /** 多发 */
  Multiple: Multiple | null;
  /** 纵横比 */
  AspectRatio: AspectRatio | null;
  /** 边缘 */
  Edge: BlockInfo | null;
  /** 内部回声 */
  InnerEcho: BlockInfo | null;
  /** 外部回声 */
  RearEcho: BlockInfo | null;
  /** 弹性质地 */
  Elastic: Elastic | null;
  /** 形状 */
  Shape: BlockInfo | null;
  /** 形态 */
  ShapeAttr: BlockInfo | null;
  /** 皮髓质信息 */
  SkinMedulla: BlockInfo | null;
  /** 变化趋势 */
  Trend: BlockInfo | null;
  /** 钙化 */
  Calcification: BlockInfo | null;
  /** 包膜 */
  Envelope: BlockInfo | null;
  /** 强化 */
  Enhancement: BlockInfo | null;
  /** 淋巴结 */
  LymphEnlargement: BlockInfo | null;
  /** 淋巴门 */
  LymphDoor: BlockInfo | null;
  /** 活动度 */
  Activity: BlockInfo | null;
  /** 手术情况 */
  Operation: BlockInfo | null;
  /** 血液cdfi */
  CDFI: BlockInfo | null;
  /** 原文位置 */
  Index: number[] | null;
  /** 大小状态 */
  SizeStatus: BlockInfo | null;
  /** 内部回声分布 */
  InnerEchoDistribution: BlockInfo | null;
  /** 内部回声类型 */
  InnerEchoType: BlockInfo[] | null;
  /** 轮廓 */
  Outline: BlockInfo | null;
  /** 结构 */
  Structure: BlockInfo | null;
  /** 密度 */
  Density: BlockInfo | null;
  /** 血管 */
  Vas: BlockInfo | null;
  /** 囊壁 */
  Cysticwall: BlockInfo | null;
  /** 被膜 */
  Capsule: BlockInfo | null;
  /** 峡部厚度 */
  IsthmusThicknese: Size | null;
  /** 原文 */
  Src: string | null;
}

/** 免疫接种记录 */
declare interface Vaccination {
  /** 序号 */
  Id: string | null;
  /** 疫苗名称 */
  Vaccine: string | null;
  /** 剂次 */
  Dose: string | null;
  /** 接种日期 */
  Date: string | null;
  /** 疫苗批号 */
  LotNumber: string | null;
  /** 生产企业 */
  Manufacturer: string | null;
  /** 接种单位 */
  Clinic: string | null;
  /** 接种部位 */
  Site: string | null;
  /** 接种者 */
  Provider: string | null;
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

declare interface ImageToClassRequest {
  /** 图片列表，允许传入多张图片，支持传入图片的base64编码，暂不支持图片url */
  ImageInfoList: ImageInfo[];
  /** 图片处理参数 */
  HandleParam: HandleParam;
  /** 不填，默认为0 */
  Type: number;
}

declare interface ImageToClassResponse {
  /** 分类结果 */
  TextTypeList: TextType[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
}

declare interface ImageToObjectResponse {
  /** 报告结构化结果 */
  Template: Template | null;
  /** 多级分类结果 */
  TextTypeList: TextType[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface TextToClassRequest {
  /** 报告文本 */
  Text: string;
}

declare interface TextToClassResponse {
  /** 分类结果 */
  TextTypeList: TextType[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface TextToObjectRequest {
  /** 报告文本 */
  Text: string;
  /** 报告类型，目前支持12（检查报告），15（病理报告），28（出院报告），29（入院报告），210（门诊病历），212（手术记录），218（诊断证明），363（心电图），27（内窥镜检查），215（处方单），219（免疫接种证明），301（C14呼气试验）。如果不清楚报告类型，可以使用分类引擎，该字段传0（同时IsUsedClassify字段必须为True，否则无法输出结果） */
  Type: number;
  /** 是否使用分类引擎，当不确定报告类型时，可以使用收费的报告分类引擎服务。若该字段为False，则Type字段不能为0，否则无法输出结果。注意：当 IsUsedClassify 为True 时，表示使用收费的报告分类服务，将会产生额外的费用，具体收费标准参见 [购买指南的产品价格](https://cloud.tencent.com/document/product/1314/54264)。 */
  IsUsedClassify: boolean;
}

declare interface TextToObjectResponse {
  /** 报告结构化结果 */
  Template: Template;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

/** 医疗报告结构化 */
declare interface Mrs {
  (): Versions;
  /** 图片分类接口 */
  ImageToClass(data: ImageToClassRequest, config?: AxiosRequestConfig): AxiosPromise<ImageToClassResponse>;
  /** 图片结构化接口 */
  ImageToObject(data: ImageToObjectRequest, config?: AxiosRequestConfig): AxiosPromise<ImageToObjectResponse>;
  /** 文本分类接口 */
  TextToClass(data: TextToClassRequest, config?: AxiosRequestConfig): AxiosPromise<TextToClassResponse>;
  /** 文本结构化接口 */
  TextToObject(data: TextToObjectRequest, config?: AxiosRequestConfig): AxiosPromise<TextToObjectResponse>;
}

export declare type Versions = ["2020-09-10"];

export default Mrs;
