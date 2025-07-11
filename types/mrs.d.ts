/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 入院情况 */
declare interface AdmissionConditionBlock {
  /** 名称 */
  Name?: string;
  /** 原文 */
  Src?: string;
  /** 对外输出值 */
  Value?: string;
}

/** 入院诊断 */
declare interface AdmissionDiagnosisBlock {
  /** 名称 */
  Name?: string;
  /** 原文 */
  Src?: string;
  /** 归一化值 */
  Norm?: string;
  /** 对外输出值 */
  Value?: string;
}

/** 建议 */
declare interface Advice {
  /** 文本 */
  Text?: string;
}

/** 纵横比 */
declare interface AspectRatio {
  /** 原文位置 */
  Index?: number[];
  /** 数值 */
  Number?: string;
  /** 关系 */
  Relation?: string;
  /** 原文 */
  Src?: string;
  /** 值 */
  Value?: string;
}

/** 标准信息类 */
declare interface BaseInfo {
  /** 项目名称 */
  Name?: string;
  /** 索引 */
  Index?: number[];
  /** 原文 */
  Src?: string;
  /** 标准值 */
  Value?: string;
  /** 原文对应坐标 */
  Coords?: Coord[];
}

/** 基础类型 */
declare interface BaseItem {
  /** 类型名称 */
  Name?: string;
  /** 原始文本 */
  Src?: string;
  /** 归一化后值 */
  Value?: string;
  /** 别名 */
  Alias?: string;
  /** 四点坐标 */
  Coords?: Coord[];
}

/** 基础类型 */
declare interface BaseItem2 {
  /** 类型 */
  Name?: string;
  /** 原始文本 */
  Src?: string;
  /** 归一化后值 */
  Value?: string;
  /** 四点坐标 */
  Coords?: Coord[];
}

/** 基础类型 */
declare interface BaseItem3 {
  /** 类型 */
  Name?: string;
  /** 原始文本 */
  Src?: string;
  /** 归一化后值 */
  Value?: string;
  /** 四点坐标 */
  Coords?: Coord[];
  /** 第几次 */
  Order?: number;
}

/** 预防用生物制品说明书 */
declare interface BiologicalProductInfo {
  /** 药品名称，包括通用名和商品名 */
  Name?: BiologicalProductInfoName;
  /** 成份和性状 */
  IngredientAndAppearance?: BiologicalProductInfoIngredientAndAppearance;
  /** 接种对象 */
  VaccinationTarget?: BiologicalProductInfoVaccinationTarget;
  /** 作用与用途 */
  Indications?: BiologicalProductInfoIndications;
  /** 规格 */
  Brochure?: BiologicalProductInfoBrochure;
  /** 免疫程序和剂量 */
  Dosage?: BiologicalProductInfoDosage;
  /** 不良反应 */
  AdverseReaction?: BiologicalProductInfoAdverseReaction;
  /** 禁忌情况 */
  Contraindications?: BiologicalProductInfoContraindications;
  /** 注意事项 */
  Precautions?: BiologicalProductInfoPrecautions;
  /** 储存条件 */
  Storage?: BiologicalProductInfoStorage;
  /** 包装信息 */
  Packaging?: BiologicalProductInfoPackaging;
  /** 有效期 */
  ValidityPeriod?: BiologicalProductInfoValidityPeriod;
  /** 执行标准 */
  ExecutiveStandards?: BiologicalProductInfoExecutiveStandards;
  /** 批准文号 */
  Approval?: BiologicalProductInfoApproval;
  /** 生产企业名称和地址 */
  Manufacturer?: BiologicalProductInfoManufacturer;
}

/** 不良反应 */
declare interface BiologicalProductInfoAdverseReaction {
  /** 文本内容 */
  Text?: string;
}

/** 批准文号 */
declare interface BiologicalProductInfoApproval {
  /** 文本内容 */
  Text?: string;
}

/** 规格 */
declare interface BiologicalProductInfoBrochure {
  /** 文本内容 */
  Text?: string;
}

/** 禁忌情况 */
declare interface BiologicalProductInfoContraindications {
  /** 文本内容 */
  Text?: string;
}

/** 免疫程序和剂量 */
declare interface BiologicalProductInfoDosage {
  /** 文本内容 */
  Text?: string;
}

/** 执行标准 */
declare interface BiologicalProductInfoExecutiveStandards {
  /** 文本内容 */
  Text?: string;
}

/** 作用与用途 */
declare interface BiologicalProductInfoIndications {
  /** 文本内容 */
  Text?: string;
}

/** 成份和性状 */
declare interface BiologicalProductInfoIngredientAndAppearance {
  /** 文本 */
  Text?: string;
}

/** 生产企业名称和地址 */
declare interface BiologicalProductInfoManufacturer {
  /** 文本内容 */
  Text?: string;
}

/** 药品名称，包括通用名和商品名 */
declare interface BiologicalProductInfoName {
  /** 文本内容 */
  Text?: string;
  /** 通用名 */
  GenericName?: string;
  /** 品牌名 */
  BarndName?: string | null;
  /** 英文名 */
  EnName?: string;
  /** 拼音 */
  Pinyin?: string;
}

/** 包装信息 */
declare interface BiologicalProductInfoPackaging {
  /** 文本内容 */
  Text?: string;
}

/** 注意事项 */
declare interface BiologicalProductInfoPrecautions {
  /** 文本内容 */
  Text?: string;
}

/** 储存条件 */
declare interface BiologicalProductInfoStorage {
  /** 文本内容 */
  Text?: string;
}

/** 接种对象 */
declare interface BiologicalProductInfoVaccinationTarget {
  /** 文本内容 */
  Text?: string;
}

/** 有效期 */
declare interface BiologicalProductInfoValidityPeriod {
  /** 文本内容 */
  Text?: string;
}

/** 活检部位 */
declare interface BiopsyPart {
  /** 值 */
  Value?: string;
  /** 原文 */
  Src?: string;
  /** 坐标 */
  Coords?: Coord[];
}

/** 出生证明结构化信息 */
declare interface BirthCert {
  /** 新生儿信息 */
  NeonatalInfo?: NeonatalInfo;
  /** 母亲信息 */
  MotherInfo?: ParentInfo;
  /** 父亲信息 */
  FatherInfo?: ParentInfo;
  /** 签发信息 */
  IssueInfo?: IssueInfo;
  /** 数据在原PDF文件中的第几页 */
  Page?: number;
}

/** 出生地 */
declare interface BirthPlaceBlock {
  /** 名称 */
  Name?: string;
  /** 原文 */
  Src?: string;
  /** 对外输出值 */
  Value?: string;
}

/** 结构化信息 */
declare interface Block {
  /** 诊断信息 */
  Check?: Check[];
  /** 病理报告 */
  Pathology?: PathologyReport[];
  /** 医学资料 */
  MedDoc?: MedDoc[];
  /** 诊断证明 */
  DiagCert?: DiagCert[];
  /** 病案首页 */
  FirstPage?: FirstPage[];
  /** 检验报告 */
  Indicator?: Indicator[];
  /** 门诊病历信息 */
  MedicalRecordInfo?: MedicalRecordInfo[];
  /** 出入院信息 */
  Hospitalization?: Hospitalization[];
  /** 手术记录 */
  Surgery?: Surgery[];
  /** 处方单 */
  Prescription?: Prescription[];
  /** 免疫接种证明 */
  VaccineCertificate?: VaccineCertificate[];
  /** 心电图 */
  Electrocardiogram?: Electrocardiogram[];
  /** 病理报告v2 */
  PathologyV2?: PathologyV2[];
  /** 内窥镜报告 */
  Endoscopy?: Endoscopy[];
  /** C14检验报告 */
  C14?: Indicator[];
  /** 体检结论 */
  Exame?: Exame[];
  /** 出入院结构体 */
  MedDocV2?: DischargeInfoBlock[];
  /** 检验报告v3 */
  IndicatorV3?: IndicatorV3[];
  /** 孕产报告 */
  Maternity?: Maternity[];
  /** 时间轴 */
  Timeline?: TimelineInformation[];
  /** 核酸报告结论 */
  Covid?: CovidItemsInfo[];
  /** 眼科报告结构体 */
  Eye?: EyeItemsInfo[];
  /** 出生证明结构化信息 */
  BirthCert?: BirthCert[];
  /** 文本类型列表 */
  TextTypeListBlocks?: TextTypeListBlock[];
  /** 体检报告信息 */
  PhysicalExamination?: PhysicalExaminationV1;
  /** 内窥镜报告V2 */
  EndoscopyV2?: Check[];
}

/** 块信息 */
declare interface BlockInfo {
  /** 原文位置 */
  Index?: number[];
  /** 阳性 */
  Positive?: string;
  /** 原文 */
  Src?: string;
  /** 值 */
  Value?: string;
  /** 类型 */
  Type?: string;
  /** 名称 */
  Name?: string;
  /** 大小 */
  Size?: Size[];
}

/** 块信息 */
declare interface BlockInfoV2 {
  /** 原文位置 */
  Index?: number[];
  /** 原文 */
  Src?: string;
  /** 值 */
  Value?: string;
  /** 名称 */
  Name?: string;
  /** 疾病编码 */
  Code?: string;
}

/** 块标题 */
declare interface BlockTitle {
  /** name */
  Name?: string;
  /** src */
  Src?: string;
  /** value */
  Value?: string;
}

/** 血压 */
declare interface BloodPressureBlock {
  /** 名称 */
  Name?: string;
  /** 原文 */
  Src?: string;
  /** 归一化值 */
  Norm?: string;
  /** 单位 */
  Unit?: string;
  /** 对外输出值 */
  Value?: string;
  /** 舒张压 */
  NormDiastolic?: string;
  /** 收缩压 */
  NormSystolic?: string;
}

/** 体检报告血压检测信息 */
declare interface BloodPressureItem {
  /** 类型 */
  Name?: string;
  /** 项目原文 */
  Item?: PhysicalBaseItem;
  /** 数值 */
  Result?: PhysicalBaseItem;
  /** 单位 */
  Unit?: PhysicalBaseItem;
  /** 第几次 */
  Times?: PhysicalBaseItem;
  /** 左右手臂 */
  Location?: PhysicalBaseItem;
  /** 数据在原PDF文件中的第几页 */
  Page?: number;
}

/** 查体 */
declare interface BodyExaminationBlock {
  /** 体温 */
  BodyTemperature?: BodyTemperatureBlock;
  /** 脉搏 */
  Pulse?: BodyTemperatureBlock;
  /** 呼吸 */
  Breathe?: BodyTemperatureBlock;
  /** 血压 */
  BloodPressure?: BloodPressureBlock;
}

/** 体温名称 */
declare interface BodyTemperatureBlock {
  /** 名称 */
  Name?: string;
  /** 原文 */
  Src?: string;
  /** 归一化值 */
  Norm?: string;
  /** 单位 */
  Unit?: string;
  /** 对外输出值 */
  Value?: string;
}

/** 检查报告单 */
declare interface Check {
  /** 描述 */
  Desc?: Desc;
  /** 结论 */
  Summary?: Summary;
  /** 检查报告块标题 */
  BlockTitle?: BlockTitle[];
  /** 数据在原PDF文件中的第几页 */
  Page?: number;
}

/** 药品说明书消息定义 */
declare interface ChemicalProductInfo {
  /** 药品名称，包括通用名和商品名 */
  Name?: ChemicalProductInfoName;
  /** 活性成份消息定义，如果是复方制剂，可以不列出每个活性成份的详细信息 */
  ActiveIngredient?: ChemicalProductInfoActiveIngredient;
  /** 性状 */
  Appearance?: ChemicalProductInfoAppearance;
  /** 适应症描述 */
  Indications?: ChemicalProductInfoIndications;
  /** 规格 */
  Brochure?: ChemicalProductInfoBrochure;
  /** 用法用量 */
  Dosage?: ChemicalProductInfoDosage;
  /** 不良反应 */
  AdverseReaction?: ChemicalProductInfoAdverseReaction;
  /** 禁忌情况 */
  Contraindications?: ChemicalProductInfoContraindications;
  /** 注意事项 */
  Precautions?: ChemicalProductInfoPrecautions;
  /** 孕妇及哺乳期妇女用药 */
  PregnancyLactationUse?: ChemicalProductInfoPregnancyLactationUse;
  /** 儿童用药 */
  PediatricUse?: ChemicalProductInfoPediatricUse;
  /** 老年用药 */
  GeriatricUse?: ChemicalProductInfoGeriatricUse;
  /** 药品的药物相互作用 */
  Interactions?: ChemicalProductInfoInteractions;
  /** 药物过量 */
  Overdose?: ChemicalProductInfoOverdose;
  /** 临床试验 */
  ClinicalTrial?: ChemicalProductInfoClinicalTrial;
  /** 药理毒理 */
  PharmacologyToxicology?: ChemicalProductInfoPharmacologyToxicology;
  /** 药代动力学 */
  Pharmacokinetics?: ChemicalProductInfoPharmacokinetics;
  /** 储存条件 */
  Storage?: ChemicalProductInfoStorage;
  /** 包装信息 */
  Packaging?: ChemicalProductInfoPackaging;
  /** 有效期 */
  ValidityPeriod?: ChemicalProductInfoValidityPeriod;
  /** 执行标准 */
  ExecutiveStandards?: ChemicalProductInfoExecutiveStandards;
  /** 批准文号 */
  Approval?: ChemicalProductInfoApproval;
  /** 生产企业名称和地址 */
  Manufacturer?: ChemicalProductInfoManufacturer;
}

/** 活性成份消息定义，如果是复方制剂，可以不列出每个活性成份的详细信息 */
declare interface ChemicalProductInfoActiveIngredient {
  /** 文本内容 */
  Text?: string;
  /** 活性成份的化学名称 */
  ChemicalName?: string;
  /** 活性成份的化学结构式 */
  ChemicalFormula?: string;
  /** 活性成份的分子式 */
  MolecularFormula?: string;
  /** 活性成份的分子量 */
  MolecularWeight?: string;
}

/** 不良反应 */
declare interface ChemicalProductInfoAdverseReaction {
  /** 文本 */
  Text?: string;
}

/** 性状 */
declare interface ChemicalProductInfoAppearance {
  /** 文本 */
  Text?: string;
}

/** 批准文号 */
declare interface ChemicalProductInfoApproval {
  /** 文本 */
  Text?: string;
}

/** 规格 */
declare interface ChemicalProductInfoBrochure {
  /** 文本 */
  Text?: string;
}

/** 临床试验 */
declare interface ChemicalProductInfoClinicalTrial {
  /** 文本 */
  Text?: string;
}

/** 禁忌情况 */
declare interface ChemicalProductInfoContraindications {
  /** 文本 */
  Text?: string;
}

/** 用法用量 */
declare interface ChemicalProductInfoDosage {
  /** 文本 */
  Text?: string;
}

/** 执行标准 */
declare interface ChemicalProductInfoExecutiveStandards {
  /** 文本 */
  Text?: string;
}

/** 老年用药 */
declare interface ChemicalProductInfoGeriatricUse {
  /** 文本 */
  Text?: string;
}

/** 适应症描述 */
declare interface ChemicalProductInfoIndications {
  /** 文本 */
  Text?: string;
}

/** 药品的药物相互作用 */
declare interface ChemicalProductInfoInteractions {
  /** 文本 */
  Text?: string;
}

/** 生产企业名称和地址 */
declare interface ChemicalProductInfoManufacturer {
  /** 文本 */
  Text?: string;
  /** 企业名称 */
  Name?: string;
  /** 生产地址 */
  Address?: string;
  /** 邮政编码 */
  PostalCode?: string;
  /** 电话，包含区号 */
  Phone?: string;
  /** 传真，包含区号 */
  Fax?: string;
  /** 网址，如无则不填写 */
  Website?: string;
}

/** 药品名称，包括通用名和商品名 */
declare interface ChemicalProductInfoName {
  /** 文本内容 */
  Text?: string;
  /** 通用名 */
  GenericName?: string;
  /** 品牌名 */
  BarndName?: string | null;
  /** 英文名 */
  EnName?: string;
  /** 拼音 */
  Pinyin?: string;
  /** 品牌名 */
  BrandName?: string;
}

/** 药物过量 */
declare interface ChemicalProductInfoOverdose {
  /** 文本 */
  Text?: string;
}

/** 包装信息 */
declare interface ChemicalProductInfoPackaging {
  /** 文本 */
  Text?: string;
}

/** 儿童用药 */
declare interface ChemicalProductInfoPediatricUse {
  /** 文本 */
  Text?: string;
}

/** 药代动力学 */
declare interface ChemicalProductInfoPharmacokinetics {
  /** 文本 */
  Text?: string;
}

/** 药理毒理 */
declare interface ChemicalProductInfoPharmacologyToxicology {
  /** 文本 */
  Text?: string;
}

/** 注意事项 */
declare interface ChemicalProductInfoPrecautions {
  /** 文本 */
  Text?: string;
}

/** 孕妇及哺乳期妇女用药 */
declare interface ChemicalProductInfoPregnancyLactationUse {
  /** 文本 */
  Text?: string;
}

/** 储存条件 */
declare interface ChemicalProductInfoStorage {
  /** 文本 */
  Text?: string;
}

/** 有效期 */
declare interface ChemicalProductInfoValidityPeriod {
  /** 文本 */
  Text?: string;
}

/** 体检报告-胸围信息 */
declare interface ChestCircumferenceItem {
  /** 类型 */
  Name?: string;
  /** 项目原文 */
  Item?: PhysicalBaseItem;
  /** 数值 */
  Result?: PhysicalBaseItem;
  /** 单位 */
  Unit?: PhysicalBaseItem;
  /** 呼吸状态 */
  State?: PhysicalBaseItem;
}

/** 主诉 */
declare interface ChiefComplaintBlock {
  /** 名称 */
  Name?: string;
  /** 原文 */
  Src?: string;
  /** 单位输出值 */
  Value?: string;
  /** 主诉详情 */
  Detail?: ChiefComplaintDetailBlock[];
}

/** 主诉详情 */
declare interface ChiefComplaintDetailBlock {
  /** 疾病名称 */
  DiseaseName?: string;
  /** 部位 */
  Part?: string;
  /** 时间 */
  Time?: string;
  /** 时间类型 */
  TimeType?: string;
}

/** 临床分期 */
declare interface ClinicalStaging {
  /** 名称 */
  Name?: string;
  /** 原文 */
  Src?: string;
  /** 值 */
  Value?: string;
}

/** 坐标 */
declare interface Coord {
  /** 坐标 */
  Points?: Point[];
}

/** 坐标 */
declare interface Coordinate {
  /** 左上角x坐标 */
  X?: number;
  /** 左上角y坐标 */
  Y?: number;
  /** 宽度，单位像素 */
  Width?: number;
  /** 高度，单位像素 */
  Height?: number;
}

/** 核酸报告结论结构 */
declare interface CovidItem {
  /** 采样时间 */
  SampleTime?: BaseItem;
  /** 检测时间 */
  TestTime?: BaseItem;
  /** 检测机构 */
  TestOrganization?: BaseItem;
  /** 检测结果 */
  TestResult?: BaseItem;
  /** 健康码颜色 */
  CodeColor?: BaseItem;
}

/** 核酸报告结论 */
declare interface CovidItemsInfo {
  /** 核酸报告结论 */
  CovidItems?: CovidItem[];
  /** 版本号 */
  Version?: string;
  /** 数据在原PDF文件中的第几页 */
  Page?: number;
}

/** 死亡时间 */
declare interface DeathDateBlock {
  /** 名称 */
  Name?: string;
  /** 原文 */
  Src?: string;
  /** 类型 */
  Type?: string;
  /** 归一化值 */
  Norm?: string;
  /** 单位 */
  Unit?: string;
  /** 时间戳 */
  Timestamp?: string;
  /** 对外输出值 */
  Value?: string;
}

/** 描述 */
declare interface Desc {
  /** 描述 */
  Text?: string;
  /** 器官 */
  Organ?: Organ[];
  /** 结节 */
  Tuber?: TuberInfo[];
  /** 坐标 */
  Coords?: Coord[];
}

/** 描述段落 */
declare interface DescInfo {
  /** 描述段落文本 */
  Text?: BaseInfo;
  /** 描述段落详情 */
  Infos?: DetailInformation[];
}

/** 详情 */
declare interface DetailInformation {
  /** 部位 */
  Part?: Part;
  /** 组织大小 */
  TissueSizes?: Size[];
  /** 结节大小 */
  TuberSizes?: Size[];
  /** 肿瘤大小 */
  CancerSizes?: Size[];
  /** 组织学等级 */
  HistologyLevel?: BaseInfo;
  /** 组织学类型 */
  HistologyType?: HistologyTypeV2;
  /** 侵犯 */
  Invasive?: InvasiveV2[];
  /** pTNM */
  PTNM?: PTNM;
  /** 浸润深度 */
  InfiltrationDepth?: BaseInfo;
  /** 结节数量 */
  TuberNum?: BaseInfo;
  /** 钙化 */
  Calcification?: BaseInfo;
  /** 坏死 */
  Necrosis?: BaseInfo;
  /** 异形 */
  Abnormity?: BaseInfo;
  /** 断链 */
  Breaked?: BaseInfo;
}

/** 诊断证明 */
declare interface DiagCert {
  /** 建议 */
  Advice?: Advice;
  /** 诊断 */
  Diagnosis?: DiagCertItem[];
  /** 数据在原PDF文件中的第几页 */
  Page?: number;
}

/** 诊断证明项 */
declare interface DiagCertItem {
  /** 文本 */
  Text?: string;
  /** 类型 */
  Type?: string;
  /** 值 */
  Value?: string[];
}

/** 出院情况 */
declare interface DischargeConditionBlock {
  /** 名称 */
  Name?: string;
  /** 原文 */
  Src?: string;
  /** 对外输出值 */
  Value?: string;
  /** 归一化值 */
  Norm?: string;
}

/** 出入院诊断 */
declare interface DischargeDiagnosis {
  /** 表格位置 */
  TableIndex?: number;
  /** 出院诊断 */
  OutDiagnosis?: BlockInfo;
  /** 疾病编码 */
  DiseaseCode?: BlockInfo;
  /** 入院情况 */
  InStatus?: BlockInfo;
  /** 出院情况 */
  OutStatus?: BlockInfo;
}

/** 出院诊断 */
declare interface DischargeDiagnosisBlock {
  /** 名称 */
  Name?: string;
  /** 原文 */
  Src?: string;
  /** 归一化值 */
  Norm?: string;
  /** 对外输出值 */
  Value?: string;
}

/** 出入院结构体 */
declare interface DischargeInfoBlock {
  /** 疾病史 */
  DiseaseHistory?: DiseaseHistoryBlock;
  /** 个人史 */
  PersonalHistory?: PersonalHistoryBlock;
  /** 药物史 */
  DrugHistory?: DrugHistoryBlock;
  /** 治疗相关 */
  TreatmentRecord?: TreatmentRecordBlock;
  /** 文本段落 */
  ParagraphBlock?: ParagraphBlock;
  /** 数据在原PDF文件中的第几页 */
  Page?: number;
}

/** 疾病史 */
declare interface DiseaseHistoryBlock {
  /** 主要病史 */
  MainDiseaseHistory?: MainDiseaseHistoryBlock;
  /** 过敏史 */
  AllergyHistory?: MainDiseaseHistoryBlock;
  /** 注射史 */
  InfectHistory?: MainDiseaseHistoryBlock;
  /** 手术史 */
  SurgeryHistory?: SurgeryHistoryBlock;
  /** 输血史 */
  TransfusionHistory?: TransfusionHistoryBlock;
}

/** 疾病史 */
declare interface DiseaseMedicalHistory {
  /** 主病史 */
  MainDiseaseHistory?: string;
  /** 过敏史 */
  AllergyHistory?: string;
  /** 传染疾病史 */
  InfectHistory?: string;
  /** 手术史 */
  OperationHistory?: string;
  /** 输血史 */
  TransfusionHistory?: string;
}

/** 现病史 */
declare interface DiseasePresentBlock {
  /** 名称 */
  Name?: string;
  /** 原文 */
  Src?: string;
  /** 值 */
  Value?: string;
  /** 归一化 */
  Norm?: string;
}

/** 药物用法用量 */
declare interface DosageBlock {
  /** 值 */
  Value?: string;
  /** 单次计量 */
  SingleMeasurement?: string;
  /** 频次 */
  Frequency?: string;
  /** 给药途径 */
  DrugDeliveryRoute?: string;
}

/** 药物史 */
declare interface DrugHistoryBlock {
  /** 药品名称 */
  Name?: string;
  /** 原文 */
  Src?: string;
  /** 药物列表 */
  DrugList?: DrugListBlock[];
  /** 归一化值 */
  Value?: string;
}

/** 药物史 */
declare interface DrugListBlock {
  /** 通用名称 */
  CommonName?: string;
  /** 商品名称 */
  TradeName?: string;
  /** 用法用量 */
  Dosage?: DosageBlock;
  /** 值 */
  Value?: string;
}

/** 心电图详情 */
declare interface EcgDescription {
  /** 心率 */
  HeartRate?: EcgItem;
  /** 心房率 */
  AuricularRate?: EcgItem;
  /** 心室率 */
  VentricularRate?: EcgItem;
  /** 节律 */
  Rhythm?: EcgItem;
  /** P波时间 */
  PDuration?: EcgItem;
  /** QRS时间 */
  QrsDuration?: EcgItem;
  /** QRS电轴 */
  QrsAxis?: EcgItem;
  /** P-R间期 */
  PRInterval?: EcgItem;
  /** P-P间期 */
  PPInterval?: EcgItem;
  /** R-R间期 */
  RRInterval?: EcgItem;
  /** P-J间期 */
  PJInterval?: EcgItem;
  /** Q-T间期 */
  QTInterval?: EcgItem;
  /** qt/qtc间期 */
  QTCInterval?: EcgItem;
  /** RV5/SV1振幅 */
  Rv5SV1Amplitude?: EcgItem;
  /** RV5+SV1振幅 */
  Rv5AddSV1Amplitude?: EcgItem;
  /** PRT电轴 */
  PRTAxis?: EcgItem;
  /** RV5振幅 */
  Rv5Amplitude?: EcgItem;
  /** SV1振幅 */
  SV1Amplitude?: EcgItem;
  /** RV6/SV2 */
  RV6SV2?: EcgItem;
  /** P/QRS/T电轴 */
  PQRSTAxis?: EcgItem;
}

/** 心电图诊断 */
declare interface EcgDiagnosis {
  /** 名称 */
  Name?: string;
  /** 值 */
  Value?: string[];
}

/** 心电图指标项 */
declare interface EcgItem {
  /** 名称 */
  Name?: string;
  /** 值 */
  Value?: string;
  /** 单位 */
  Unit?: string;
  /** 原文 */
  Src?: string;
}

/** 弹性质地 */
declare interface Elastic {
  /** 原文位置 */
  Index?: number[];
  /** 分数 */
  Score?: string;
  /** 原文 */
  Src?: string;
  /** 值 */
  Value?: string;
  /** 名称 */
  Name?: string;
}

/** 心电图 */
declare interface Electrocardiogram {
  /** 心电图详情 */
  EcgDescription?: EcgDescription;
  /** 心电图诊断 */
  EcgDiagnosis?: EcgDiagnosis;
  /** 数据在原PDF文件中的第几页 */
  Page?: number;
}

/** 内窥镜报告 */
declare interface Endoscopy {
  /** 活检部位 */
  BiopsyPart?: BiopsyPart;
  /** 可见描述 */
  Desc?: EndoscopyDesc;
  /** 结论 */
  Summary?: Summary;
  /** 数据在原PDF文件中的第几页 */
  Page?: number;
}

/** 内窥镜描述 */
declare interface EndoscopyDesc {
  /** 描述内容 */
  Text?: string;
  /** 器官 */
  Organ?: EndoscopyOrgan[];
  /** 坐标 */
  Coords?: Coord[];
}

/** 内窥部位 */
declare interface EndoscopyOrgan {
  /** 部位 */
  Part?: Part;
  /** 原文位置 */
  Index?: number[];
  /** 原文 */
  Src?: string;
  /** 部位别名 */
  PartAlias?: string;
  /** 症状描述 */
  SymDescList?: BlockInfo[];
  /** 坐标 */
  Coords?: Coord[];
}

/** 体检结论 */
declare interface Exame {
  /** 结论段落 */
  OverView?: ResultInfo[];
  /** 异常与建议段落 */
  Abnormality?: ResultInfo[];
}

/** 眼科子结构 */
declare interface EyeChildItem {
  /** 球镜 */
  Sph?: BaseItem3[];
  /** 柱镜 */
  Cyl?: BaseItem3[];
  /** 轴位 */
  Ax?: BaseItem3[];
  /** 等效球镜 */
  Se?: BaseItem2;
}

/** 眼科结构体 */
declare interface EyeItem {
  /** 左眼 */
  Left?: EyeChildItem;
  /** 右眼 */
  Right?: EyeChildItem;
  /** 瞳距 */
  Pd?: BaseItem2;
}

/** 眼科报告结构体 */
declare interface EyeItemsInfo {
  /** 眼科报告 */
  EyeItems?: EyeItem;
  /** 版本号 */
  Version?: string;
  /** 数据在原PDF文件中的第几页 */
  Page?: number;
}

/** 家族史 */
declare interface FamilyHistoryBlock {
  /** 家庭成员 */
  RelativeHistory?: RelativeHistoryBlock;
  /** 家族肿瘤史 */
  RelativeCancerHistory?: RelativeCancerHistoryBlock;
  /** 家族遗传史 */
  GeneticHistory?: GeneticHistoryBlock;
}

/** 家族疾病史 */
declare interface FamilyMedicalHistory {
  /** 家族成员史 */
  RelativeHistory?: string;
  /** 家族肿瘤史 */
  RelativeCancerHistory?: string;
  /** 家族遗传史 */
  GeneticHistory?: string;
}

/** 婚育史 */
declare interface FertilityHistoryBlock {
  /** 名称 */
  Name?: string;
  /** 原文 */
  Src?: string;
  /** 状态 */
  State?: string;
  /** 归一化值 */
  Norm?: string;
  /** 对外输出值 */
  Value?: string;
  /** 妊娠次数 */
  PregCount?: string;
  /** 生产次数 */
  ProduCount?: string;
}

/** 胎儿数据结构 */
declare interface Fetus {
  /** 双顶径 */
  BPD?: FieldInfo;
  /** 腹前后径 */
  APTD?: FieldInfo;
  /** 腹左右径 */
  TTD?: FieldInfo;
  /** 头臀径 */
  CRL?: FieldInfo;
  /** 头围 */
  HC?: FieldInfo;
  /** 腹围 */
  AC?: FieldInfo;
  /** 股骨长 */
  FL?: FieldInfo;
  /** 肱骨长 */
  HL?: FieldInfo;
  /** 胎儿重量 */
  Weight?: FieldInfo;
  /** 颈项透明层 */
  NT?: FieldInfo;
  /** 脐动脉血流 */
  UmbilicalCord?: FieldInfo;
  /** 羊水最大深度 */
  WaterDeep?: FieldInfo;
  /** 羊水四象限测量 */
  WaterQuad?: FieldInfo;
  /** 羊水指数 */
  AFI?: FieldInfo;
  /** 胎心 */
  FHR?: FieldInfo;
  /** 胎动 */
  Movement?: FieldInfo;
  /** 胎数 */
  Num?: FieldInfo;
  /** 胎位 */
  Position?: FieldInfo;
  /** 是否活胎 */
  Alive?: FieldInfo;
  /** 胎盘位置 */
  PlacentaLocation?: FieldInfo;
  /** 胎盘厚度 */
  PlacentaThickness?: FieldInfo;
  /** 胎盘成熟度 */
  PlacentaGrade?: FieldInfo;
  /** 妊娠时间 */
  GestationTime?: FieldInfo;
  /** 妊娠周期 */
  GestationPeriod?: FieldInfo;
  /** 绕颈 */
  AroundNeck?: FieldInfo;
  /** 病变 */
  Sym?: FieldInfo[];
  /** 原文内容 */
  Src?: string;
}

/** 通用块信息 */
declare interface FieldInfo {
  /** 名称 */
  Name?: string;
  /** 值 */
  Value?: string;
  /** 数值 */
  Nums?: NumValue[];
  /** 原文 */
  Src?: string;
}

/** 病案首页 */
declare interface FirstPage {
  /** 出入院诊断 */
  DischargeDiagnosis?: DischargeDiagnosis[];
  /** 病理诊断 */
  PathologicalDiagnosis?: BlockInfo;
  /** 临床诊断 */
  ClinicalDiagnosis?: BlockInfo;
  /** 受伤中毒的外部原因 */
  DamagePoi?: BlockInfoV2;
  /** 病案首页第二页 */
  Fp2NdItems?: Fp2NdItem[];
  /** 数据在原PDF文件中的第几页 */
  Page?: number;
}

/** 病案首页第二页 */
declare interface Fp2NdItem {
  /** 手术编码 */
  Code?: BaseItem;
  /** 手术名称 */
  Name?: BaseItem;
  /** 手术开始时间 */
  StartTime?: BaseItem;
  /** 手术结束时间 */
  EndTime?: BaseItem;
  /** 手术等级 */
  Level?: BaseItem;
  /** 手术类型 */
  Type?: BaseItem;
  /** 醉愈合方式 */
  IncisionHealingGrade?: BaseItem;
  /** 麻醉方法 */
  AnesthesiaMethod?: BaseItem;
}

/** 体检报告-一般检测信息 */
declare interface GeneralExaminationBaseItem {
  /** 生命体征 */
  VitalSign?: GeneralExaminationVitalSign;
  /** 其他 */
  Others?: GeneralExaminationOthers;
  /** 小结 */
  BriefSummary?: GeneralExaminationBriefSummary;
}

/** 体检报告-小结 */
declare interface GeneralExaminationBriefSummary {
  /** 一般检查小结 */
  Text?: KeyValueItem;
}

/** 体检报告-其他项 */
declare interface GeneralExaminationOthers {
  /** 面容与表情 */
  Countenance?: KeyValueItem;
  /** 精神状态 */
  MentalStatus?: KeyValueItem;
  /** 发育及营养状况 */
  DevelopmentCondition?: KeyValueItem;
  /** 记忆力 */
  Memory?: KeyValueItem;
  /** 臀围 */
  Hipline?: ValueUnitItem;
  /** 腰臀比 */
  WaistHipRatio?: ValueUnitItem;
  /** 生活嗜好 */
  Addiction?: KeyValueItem;
  /** 生活能力评定 */
  AbilityOfLifeADL?: KeyValueItem;
  /** 一般检查其他 */
  Others?: KeyValueItem[];
  /** 胸围 */
  ChestCircumference?: ChestCircumferenceItem;
}

/** 生命体征 */
declare interface GeneralExaminationVitalSign {
  /** 生命体征总体描述 */
  Text?: ValueUnitItem;
  /** 体温 */
  BodyTemperature?: ValueUnitItem;
  /** 脉率 */
  Pulse?: ValueUnitItem;
  /** 心率 */
  HeartRate?: ValueUnitItem;
  /** 呼吸频率 */
  BreathingRate?: ValueUnitItem;
  /** 身高 */
  BodyHeight?: ValueUnitItem;
  /** 体重 */
  BodyWeight?: ValueUnitItem;
  /** 体质指数 */
  BodyMassIndex?: ValueUnitItem;
  /** 腰围 */
  Waistline?: ValueUnitItem;
  /** 血压 */
  BloodPressure?: GeneralExaminationVitalSignBloodPressure;
}

/** 血压 */
declare interface GeneralExaminationVitalSignBloodPressure {
  /** 血压 */
  Text?: BloodPressureItem;
  /** 收缩压/舒张压 */
  SystolicDiastolicPressure?: BloodPressureItem[];
  /** 收缩压 */
  SystolicPressure?: BloodPressureItem[];
  /** 舒张压 */
  DiastolicPressure?: BloodPressureItem[];
}

/** 家族遗传史 */
declare interface GeneticHistoryBlock {
  /** 名称 */
  Name?: string;
  /** 原文 */
  Src?: string;
  /** 遗传列表 */
  GeneticList?: string;
  /** 对外输出值 */
  Value?: string;
}

/** 体检报告-妇科-子宫附件 */
declare interface GynaecologyAdnexal {
  /** 子宫附件总体描述 */
  Text?: KeyValueItem;
}

/** 体检报告-妇科 */
declare interface GynaecologyBaseItem {
  /** 外阴 */
  Vulva?: GynaecologyVulva;
  /** 阴道 */
  Vagina?: GynaecologyVagina;
  /** 子宫颈 */
  Cervix?: GynaecologyCervix;
  /** 子宫 */
  Uterus?: GynaecologyUterus;
  /** 子宫附件 */
  Adnexal?: GynaecologyAdnexal;
  /** 盆腔 */
  PelvicCavity?: GynaecologyPelvicCavity;
  /** 妇科其他 */
  Others?: KeyValueItem[];
  /** 月经史 */
  MenstrualHistory?: GynaecologyMenstrualHistory;
  /** 小结 */
  BriefSummary?: GynaecologyBriefSummary;
}

/** 体检报告-妇科-小结 */
declare interface GynaecologyBriefSummary {
  /** 小结 */
  Text?: KeyValueItem;
}

/** 体检报告-妇科-子宫颈 */
declare interface GynaecologyCervix {
  /** 子宫颈总体描述 */
  Text?: KeyValueItem;
}

/** 体检报告-妇科-月经史 */
declare interface GynaecologyMenstrualHistory {
  /** 妇科月经史总体描述 */
  Text?: KeyValueItem;
}

/** 体检报告-妇科-盆腔 */
declare interface GynaecologyPelvicCavity {
  /** 盆腔总体描述 */
  Text?: KeyValueItem;
}

/** 体检报告-妇科-子宫 */
declare interface GynaecologyUterus {
  /** 子宫总体描述 */
  Text?: KeyValueItem;
}

/** 体检报告-妇科-阴道 */
declare interface GynaecologyVagina {
  /** 阴道总体描述 */
  Text?: KeyValueItem;
}

/** 体检报告-妇科-外阴 */
declare interface GynaecologyVulva {
  /** 外阴总体描述 */
  Text?: KeyValueItem;
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
  Name?: string;
  /** 项目原文 */
  Item?: PhysicalBaseItem;
  /** 方位 */
  Location?: PhysicalBaseItem;
  /** 描述 */
  Result?: PhysicalBaseItem;
}

/** 组织学类 */
declare interface HistologyClass {
  /** 项目名称 */
  Name?: string;
  /** 索引 */
  Index?: number[];
  /** 原文 */
  Src?: string;
  /** 归一化值 */
  Value?: string;
  /** 原文对应坐标 */
  Coords?: Coord[];
}

/** 组织学等级 */
declare interface HistologyLevel {
  /** 等级 */
  Grade?: string;
  /** 原文位置 */
  Index?: number[];
  /** 原文 */
  Src?: string;
}

/** 组织学类型 */
declare interface HistologyType {
  /** 浸润 */
  Infiltration?: string;
  /** 原文位置 */
  Index?: number[];
  /** 原文 */
  Src?: string;
  /** 类型 */
  Type?: string;
}

/** 组织学类型 */
declare interface HistologyTypeV2 {
  /** 浸润 */
  Infiltration?: string;
  /** 索引 */
  Index?: number[];
  /** 原文 */
  Src?: string;
  /** 归一化后的组织学类型 */
  Type?: string;
  /** 项目名称 */
  Name?: string;
  /** 原文对应坐标 */
  Coords?: Coord[];
}

/** 出入院信息 */
declare interface Hospitalization {
  /** 入院时间 */
  AdmissionTime?: string;
  /** 出院时间 */
  DischargeTime?: string;
  /** 住院天数 */
  AdmissionDays?: string;
  /** 入院诊断 */
  AdmissionDignosis?: string | null;
  /** 入院情况 */
  AdmissionCondition?: string;
  /** 诊疗经过 */
  DiagnosisTreatment?: string;
  /** 出院诊断 */
  DischargeDiagnosis?: string;
  /** 出院医嘱 */
  DischargeInstruction?: string;
  /** 入院诊断 */
  AdmissionDiagnosis?: string;
  /** 数据在原PDF文件中的第几页 */
  Page?: number;
}

/** IHC块 */
declare interface IHCBlock {
  /** 索引 */
  Index?: number[];
  /** 原文 */
  Src?: string;
  /** 名称 */
  Name?: string;
  /** 具体值 */
  Value?: ValueBlock;
  /** 坐标 */
  Coords?: Coord[];
}

/** Ihc信息 */
declare interface IHCInfo {
  /** 原文位置 */
  Index?: number[];
  /** 原文 */
  Src?: string;
  /** 名称 */
  Name?: string;
  /** 值 */
  Value?: Value;
}

/** IHC */
declare interface IHCV2 {
  /** 索引 */
  Index?: number[];
  /** 原文 */
  Src?: string;
  /** ihc归一化 */
  Name?: string;
  /** ihc详情 */
  Value?: Value;
  /** 原文对应坐标 */
  Coords?: Coord[];
}

/** 图片信息 */
declare interface ImageInfo {
  /** 图片id */
  Id?: number;
  /** 图片url(暂不支持传图片Url信息,请使用Base64字段传递图片的Base64编码) */
  Url?: string;
  /** 图片base64编码 */
  Base64?: string;
}

/** 图片脱敏选项不填默认敏感信息都脱敏 */
declare interface ImageMaskFlags {
  /** 是否对医院信息进行脱敏 */
  HospitalFlag?: boolean;
  /** 是否对医生信息进行脱敏 */
  DoctorFlag?: boolean;
  /** 是否对患者信息进行脱敏 */
  PatientFlag?: boolean;
  /** 是否对二维码信息进行脱敏 */
  BarFlag?: boolean;
}

/** 免疫组化 */
declare interface ImmunohistochemistryBlock {
  /** 名称 */
  Name?: string;
  /** 原文 */
  Src?: string;
  /** 免疫组化详情 */
  Value?: IHCBlock[];
}

/** 检验报告 */
declare interface Indicator {
  /** 检验指标项 */
  Indicators?: IndicatorItem[];
  /** 检验报告块标题 */
  BlockTitle?: BlockTitle[];
  /** 数据在原PDF文件中的第几页 */
  Page?: number;
}

/** 检验指标项 */
declare interface IndicatorItem {
  /** 英文缩写 */
  Code?: string;
  /** 标准缩写 */
  Scode?: string;
  /** 项目名称 */
  Name?: string;
  /** 标准名 */
  Sname?: string;
  /** 结果 */
  Result?: string;
  /** 单位 */
  Unit?: string;
  /** 参考范围 */
  Range?: string;
  /** 上下箭头 */
  Arrow?: string;
  /** 是否正常 */
  Normal?: boolean;
  /** 项目原文 */
  ItemString?: string;
  /** 指标项ID */
  Id?: number;
  /** 指标项坐标位置 */
  Coords?: Coordinate;
  /** 推测结果是否异常 */
  InferNormal?: string;
  /** 标本 */
  Sample?: string;
  /** 检测方法 */
  Method?: string;
}

/** 检验指标项结构v2 */
declare interface IndicatorItemV2 {
  /** 项目名称 */
  Item?: BaseItem;
  /** 英文编码 */
  Code?: BaseItem;
  /** 结果 */
  Result?: BaseItem;
  /** 单位 */
  Unit?: BaseItem;
  /** 参考范围 */
  Range?: BaseItem;
  /** 上下箭头 */
  Arrow?: BaseItem;
  /** 检测方法 */
  Method?: BaseItem;
  /** 结果是否异常 */
  Normal?: boolean;
  /** ID */
  Id?: number;
  /** 序号 */
  Order?: number;
  /** 推测结果是否异常 */
  InferNormal?: string;
}

/** 检验报告v3 */
declare interface IndicatorV3 {
  /** 检验报告V3结论 */
  TableIndictors?: TableIndicators[] | null;
  /** 版本号 */
  Version?: string;
  /** 检验报告V3结论 */
  TableIndicators?: TableIndicators[];
  /** 数据在原PDF文件中的第几页 */
  Page?: number;
}

/** 体检报告-内科-腹部 */
declare interface InternalMedicineAbdomen {
  /** 内科腹部小结 */
  Text?: KeyValueItem;
  /** 肝脏 */
  Liver?: InternalMedicineAbdomenLiver;
  /** 胆囊 */
  GallBladder?: InternalMedicineAbdomenGallBladder;
  /** 胰腺 */
  Pancreas?: InternalMedicineAbdomenPancreas;
  /** 脾脏 */
  Spleen?: InternalMedicineAbdomenSpleen;
  /** 肾脏 */
  Kidney?: InternalMedicineAbdomenKidney;
  /** 腹部其他 */
  Others?: KeyValueItem[];
}

/** 体检报告-内科-腹部-胆囊 */
declare interface InternalMedicineAbdomenGallBladder {
  /** 胆囊总体描述 */
  Src?: KeyValueItem;
  /** 胆囊大小 */
  Size?: KeyValueItem;
  /** 胆囊触诊 */
  Palpation?: KeyValueItem;
  /** 胆囊叩诊 */
  Percussion?: KeyValueItem;
  /** 胆囊压痛 */
  Tenderness?: KeyValueItem;
  /** 胆囊质地 */
  Consistency?: KeyValueItem;
}

/** 体检报告-内科-腹部-肾脏 */
declare interface InternalMedicineAbdomenKidney {
  /** 肾脏总体描述 */
  Src?: KeyValueItem;
  /** 肾脏大小 */
  Size?: KeyValueItem;
  /** 肾脏触诊 */
  Palpation?: KeyValueItem;
  /** 肾脏叩诊 */
  Percussion?: KeyValueItem;
  /** 肾脏压痛 */
  Tenderness?: KeyValueItem;
  /** 肾脏质地 */
  Consistency?: KeyValueItem;
}

/** 体检报告-内科-腹部-肝脏 */
declare interface InternalMedicineAbdomenLiver {
  /** 肝脏总体描述 */
  Src?: KeyValueItem;
  /** 肝脏大小 */
  Size?: KeyValueItem;
  /** 肝脏触诊 */
  Palpation?: KeyValueItem;
  /** 肝脏叩诊 */
  Percussion?: KeyValueItem;
  /** 肝脏压痛 */
  Tenderness?: KeyValueItem;
  /** 肝脏质地 */
  Consistency?: KeyValueItem;
}

/** 体检报告-内科-腹部-胰腺 */
declare interface InternalMedicineAbdomenPancreas {
  /** 胰腺总体描述 */
  Src?: KeyValueItem;
  /** 胰腺大小 */
  Size?: KeyValueItem;
  /** 胰腺触诊 */
  Palpation?: KeyValueItem;
  /** 胰腺叩诊 */
  Percussion?: KeyValueItem;
  /** 肝脏压痛 */
  Tenderness?: KeyValueItem;
  /** 胰腺质地 */
  Consistency?: KeyValueItem;
}

/** 体检报告-内科-腹部-脾脏 */
declare interface InternalMedicineAbdomenSpleen {
  /** 脾脏总体描述 */
  Src?: KeyValueItem;
  /** 脾脏大小 */
  Size?: KeyValueItem;
  /** 脾脏触诊 */
  Palpation?: KeyValueItem;
  /** 脾脏叩诊 */
  Percussion?: KeyValueItem;
  /** 脾脏压痛 */
  Tenderness?: KeyValueItem;
  /** 脾脏质地 */
  Consistency?: KeyValueItem;
}

/** 体检报告-内科 */
declare interface InternalMedicineBaseItem {
  /** 体检报告-内科-腹部 */
  Abdomen?: InternalMedicineAbdomen;
  /** 体检报告-内科-心脏 */
  Heart?: InternalMedicineHeart;
  /** 体检报告-内科-血管 */
  Vessel?: InternalMedicineVessel;
  /** 体检报告-内科-呼吸系统 */
  RespiratorySystem?: InternalMedicineRespiratorySystem;
  /** 体检报告-内科-内科其他 */
  Others?: KeyValueItem[];
  /** 体检报告-内科-小结 */
  BriefSummary?: InternalMedicineBriefSummary;
}

/** 体检报告-内科-内科小结 */
declare interface InternalMedicineBriefSummary {
  /** 内科小结 */
  Text?: KeyValueItem;
}

/** 体检报告-内科-心脏 */
declare interface InternalMedicineHeart {
  /** 心脏总体描述 */
  Text?: KeyValueItem;
  /** 心律 */
  HeartRhythm?: KeyValueItem;
  /** 心率 */
  HeartRate?: ValueUnitItem;
  /** 心脏听诊 */
  HeartAuscultation?: KeyValueItem;
}

/** 体检报告-内科-呼吸系统 */
declare interface InternalMedicineRespiratorySystem {
  /** 呼吸系统总体描述 */
  Text?: KeyValueItem;
  /** 胸廓 */
  Thoracic?: KeyValueItem;
  /** 痰量 */
  Sputum?: KeyValueItem;
  /** 肺部叩诊 */
  LungPercussion?: KeyValueItem;
  /** 肺部听诊其他 */
  LungAuscultation?: KeyValueItem[];
}

/** 体检报告-内科-血管 */
declare interface InternalMedicineVessel {
  /** 血管总体描述 */
  Text?: KeyValueItem;
  /** 血管杂音 */
  VascularMurmur?: KeyValueItem;
  /** 外周血管 */
  PeripheralVessel?: KeyValueItem;
}

/** 侵犯扩散 */
declare interface Invas {
  /** 原文位置 */
  Index?: number[];
  /** 部位 */
  Part?: Part;
  /** 阳性 */
  Positive?: string;
  /** 原文 */
  Src?: string;
}

/** 侵犯 */
declare interface InvasiveV2 {
  /** 索引 */
  Index?: number[];
  /** 部位 */
  Part?: Part;
  /** 阴性或阳性 */
  Positive?: string;
  /** 原文 */
  Src?: string;
  /** 原文对应坐标 */
  Coords?: Coord[];
}

/** 签发信息 */
declare interface IssueInfo {
  /** 编号 */
  CertNumber?: string;
  /** 签发机构 */
  IssuedAuthority?: string;
  /** 签发日期 */
  IssuedDate?: string;
}

/** 体检报告信息 */
declare interface KeyValueItem {
  /** 类型 */
  Name?: string;
  /** 项目原文 */
  Item?: PhysicalBaseItem;
  /** 结果 */
  Result?: PhysicalBaseItem;
  /** 数据在原PDF文件中的第几页 */
  Page?: number;
}

/** 末次月经 */
declare interface LastMenstrualPeriodBlock {
  /** 名称 */
  Name?: string;
  /** 原文 */
  Src?: string;
  /** 归一化值 */
  Norm?: string;
  /** 类型 */
  Type?: string;
  /** 时间戳 */
  Timestamp?: string;
  /** 单位 */
  Unit?: string;
  /** 对外输出值 */
  Value?: string;
}

/** 淋巴 */
declare interface Lymph {
  /** 原文 */
  Src?: string;
  /** 原文位置 */
  Index?: number[];
  /** 部位 */
  Part?: Part;
  /** 总数 */
  Total?: number;
  /** 转移数 */
  TransferNum?: number;
}

/** 单淋巴结转移信息 */
declare interface LymphNode {
  /** 项目名称 */
  Name?: string;
  /** 索引 */
  Index?: number[];
  /** 部位 */
  Part?: Part;
  /** 原文 */
  Src?: string;
  /** 总数量 */
  Total?: number;
  /** 转移数量 */
  TransferNum?: number;
  /** 淋巴结大小 */
  Sizes?: number[];
  /** 原文对应坐标 */
  Coords?: Coord[];
}

/** 淋巴结总计转移信息 */
declare interface LymphTotal {
  /** 项目名称 */
  Name?: string;
  /** 转移数量 */
  TransferNum?: number;
  /** 总数量 */
  Total?: number;
  /** 原文 */
  Src?: string;
  /** 索引 */
  Index?: number[];
  /** 原文对应坐标 */
  Coords?: Coord[];
}

/** 既往史 */
declare interface MainDiseaseHistoryBlock {
  /** 名称 */
  Name?: string;
  /** 原文 */
  Src?: string;
  /** 状态 */
  State?: boolean;
  /** 对外输出值 */
  Value?: string;
  /** 否定列表 */
  Neglist?: NeglistBlock;
  /** 肯定列表 */
  Poslist?: PoslistBlock;
}

/** 孕产报告 */
declare interface Maternity {
  /** 描述部分 */
  Desc?: MaternityDesc;
  /** 结论部分 */
  Summary?: MaternitySummary;
  /** 报告原文 */
  OcrText?: string;
  /** 数据在原PDF文件中的第几页 */
  Page?: number;
}

/** 孕产描述部分 */
declare interface MaternityDesc {
  /** 胎儿数据结构 */
  Fetus?: Fetus[];
  /** 胎儿数量 */
  FetusNum?: FieldInfo;
  /** 原文 */
  Text?: string;
  /** 坐标 */
  Coords?: Coord[];
}

/** 孕产结论部分 */
declare interface MaternitySummary {
  /** 胎儿数据结构 */
  Fetus?: Fetus[];
  /** 胎儿数量 */
  FetusNum?: FieldInfo;
  /** 病变 */
  Sym?: FieldInfo[];
  /** 原文 */
  Text?: string;
  /** 坐标 */
  Coords?: Coord[];
}

/** 医学资料 */
declare interface MedDoc {
  /** 建议 */
  Advice?: Advice;
  /** 诊断结果 */
  Diagnosis?: DiagCertItem[];
  /** 疾病史 */
  DiseaseMedicalHistory?: DiseaseMedicalHistory;
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
  /** 数据在原PDF文件中的第几页 */
  Page?: number;
}

/** 门诊病历信息 */
declare interface MedicalRecordInfo {
  /** 就诊日期 */
  DiagnosisTime?: string;
  /** 就诊科室 */
  DiagnosisDepartmentName?: string;
  /** 就诊医生 */
  DiagnosisDoctorName?: string;
  /** 临床诊断 */
  ClinicalDiagnosis?: string;
  /** 主述 */
  MainNarration?: string;
  /** 体格检查 */
  PhysicalExamination?: string;
  /** 检查结论 */
  InspectionFindings?: string;
  /** 治疗意见 */
  TreatmentOpinion?: string;
  /** 数据在原PDF文件中的第几页 */
  Page?: number;
}

/** 药品 */
declare interface Medicine {
  /** 药品名 */
  Name?: string;
  /** 商品名 */
  TradeName?: string;
  /** 厂商 */
  Firm?: string;
  /** 医保类型 */
  Category?: string;
  /** 规格 */
  Specification?: string;
  /** 最小包装数量 */
  MinQuantity?: string;
  /** 最小制剂单位 */
  DosageUnit?: string;
  /** 最小包装单位 */
  PackingUnit?: string;
}

/** 月经量 */
declare interface MenstrualFlowBlock {
  /** 名称 */
  Name?: string;
  /** 原文 */
  Src?: string;
  /** 对外输出值 */
  Value?: string;
}

/** 月经史 */
declare interface MenstrualHistoryBlock {
  /** 末次月经 */
  LastMenstrualPeriod?: LastMenstrualPeriodBlock;
  /** 月经量 */
  MenstrualFlow?: MenstrualFlowBlock;
  /** 初潮时间 */
  MenarcheAge?: LastMenstrualPeriodBlock;
  /** 是否绝经 */
  MenstruationOrNot?: MenstruationOrNotBlock;
  /** 月经周期 */
  MenstrualCycles?: LastMenstrualPeriodBlock;
  /** 月经经期 */
  MenstrualPeriod?: MenstrualPeriodBlock;
}

/** 月经史 */
declare interface MenstrualHistoryDetailBlock {
  /** 名称 */
  Name?: string;
  /** 原文 */
  Src?: string;
  /** 状态 */
  State?: string;
  /** 归一化值 */
  Norm?: string;
  /** 时间类型 */
  TimeType?: string;
  /** 时间戳 */
  Timestamp?: string;
  /** 单位 */
  Unit?: string;
  /** 对外输出值 */
  Value?: string;
}

/** 月经史 */
declare interface MenstrualMedicalHistory {
  /** 末次月经时间 */
  LastMenstrualPeriod?: string;
  /** 经量 */
  MenstrualFlow?: string;
  /** 月经初潮年龄 */
  MenarcheAge?: string;
  /** 是否来月经 */
  MenstruationOrNot?: string;
  /** 月经周期 */
  MenstrualCycles?: string;
  /** 月经持续天数 */
  MenstrualPeriod?: string;
}

/** 月经经期 */
declare interface MenstrualPeriodBlock {
  /** 名称 */
  Name?: string;
  /** 原文 */
  Src?: string;
  /** 归一化值 */
  Norm?: string;
  /** 类型 */
  Type?: string;
  /** 时间戳 */
  Timestamp?: string;
  /** 单位 */
  Unit?: string;
  /** 对外输出值 */
  Value?: string;
}

/** 是否绝经 */
declare interface MenstruationOrNotBlock {
  /** 名称 */
  Name?: string;
  /** 原文 */
  Src?: string;
  /** 归一化值 */
  Norm?: string;
  /** 时间类型 */
  TimeType?: string;
  /** 时间戳 */
  Timestamp?: string;
  /** 对外输出值 */
  Value?: string;
}

/** 分子病理 */
declare interface Molecular {
  /** 索引 */
  Index?: number[];
  /** 原文 */
  Src?: string;
  /** 基因名称标注化 */
  Name?: string;
  /** 分子病理详细信息 */
  Value?: MolecularValue;
  /** 原文对应坐标 */
  Coords?: Coord[];
}

/** 分子病理详细信息 */
declare interface MolecularValue {
  /** 外显子 */
  Exon?: string;
  /** 点位 */
  Position?: string;
  /** 类型 */
  Type?: string;
  /** 阳性或阴性 */
  Positive?: string;
  /** 基因名称原文 */
  Src?: string;
}

/** 多发 */
declare interface Multiple {
  /** 原文位置 */
  Index?: number[];
  /** 原文 */
  Src?: string;
  /** 值 */
  Value?: string;
  /** 数量 */
  Count?: number;
  /** 名称 */
  Name?: string;
}

/** 否定列表 */
declare interface NeglistBlock {
  /** 名称 */
  Name?: string;
  /** 值 */
  Value?: string;
}

/** 新生儿信息 */
declare interface NeonatalInfo {
  /** 新生儿名字 */
  NeonatalName?: string;
  /** 新生儿性别 */
  NeonatalGender?: string;
  /** 出生身长 */
  BirthLength?: string;
  /** 出生体重 */
  BirthWeight?: string;
  /** 出生孕周 */
  GestationalAge?: string;
  /** 出生时间 */
  BirthTime?: string;
  /** 出生地点 */
  BirthPlace?: string;
  /** 医疗机构 */
  MedicalInstitutions?: string;
}

/** 标准部位 */
declare interface NormPart {
  /** 部位值 */
  Part?: string;
  /** 部位方向 */
  PartDirection?: string;
  /** 组织值 */
  Tissue?: string;
  /** 组织方向 */
  TissueDirection?: string;
  /** 上级部位 */
  Upper?: string;
  /** 部位详情 */
  PartDetail?: PartDesc | null;
  /** 部位详情 */
  PartDetailList?: PartDesc[];
}

/** 大小 */
declare interface NormSize {
  /** 数量 */
  Number?: string[];
  /** 类型 */
  Type?: string;
  /** 单位 */
  Unit?: string;
  /** 归一化值 */
  Impl?: string;
}

/** 数值结构体 */
declare interface NumValue {
  /** 数值 */
  Num?: string;
  /** 单位 */
  Unit?: string;
}

/** 孕产史 */
declare interface ObstericalMedicalHistory {
  /** 婚史 */
  MarriageHistory?: string;
  /** 孕史 */
  FertilityHistory?: string;
}

/** 婚姻-生育史 */
declare interface ObstetricalHistoryBlock {
  /** 婚姻史 */
  MarriageHistory?: MenstrualHistoryDetailBlock;
  /** 婚育史 */
  FertilityHistory?: FertilityHistoryBlock;
}

/** 图片完整的OCR信息 */
declare interface OcrInfo {
  /** 图片进行OCR之后得到的所有包含字块的OCR信息 */
  Items?: OcrItem[];
  /** 图片进行OCR之后得到的所有字符 */
  Text?: string;
}

/** 图片进行OCR之后,包含字符块的信息，包含字符与坐标，一个图片进行OCR之后可能分为多个这样的块 */
declare interface OcrItem {
  /** 图片中文字的字符串 */
  Words?: string;
  /** Words 中每个文字的坐标数组，顺序与Words中的字符顺序一致 */
  Coords?: Coordinate[];
  /** 整个字符块的坐标信息 */
  WordCoords?: Coordinate;
}

/** 体检报告-眼科-裸眼视力 */
declare interface OphthalmologyBareEyeSight {
  /** 左眼视力 */
  LeftEyeVisual?: KeyValueItem;
  /** 裸眼视力 */
  Text?: KeyValueItem;
  /** 右眼视力 */
  RightEyeVisual?: KeyValueItem;
}

/** 体检报告-眼科 */
declare interface OphthalmologyBaseItem {
  /** 裸眼视力 */
  BareEyeSight?: OphthalmologyBareEyeSight;
  /** 矫正视力 */
  CorrectedVisualAcuity?: OphthalmologyCorrectedVisualAcuity;
  /** 色觉 */
  ColourVision?: OphthalmologyColourVision;
  /** 眼底 */
  Fundoscopy?: OphthalmologyFundoscopy;
  /** 眼科其他 */
  Others?: KeyValueItem[];
  /** 眼科小结 */
  BriefSummary?: OphthalmologyBriefSummary;
}

/** 体检报告-眼科-小结 */
declare interface OphthalmologyBriefSummary {
  /** 眼科小结 */
  Text?: KeyValueItem;
}

/** 体检报告-眼科-色觉 */
declare interface OphthalmologyColourVision {
  /** 色觉总体描述 */
  Text?: KeyValueItem;
}

/** 体检报告-眼科-矫正视力 */
declare interface OphthalmologyCorrectedVisualAcuity {
  /** 左眼矫正视力 */
  LeftEyeVisual?: KeyValueItem;
  /** 矫正视力 */
  Text?: KeyValueItem;
  /** 右眼矫正视力 */
  RightEyeVisual?: KeyValueItem;
}

/** 体检报告-眼科-眼底 */
declare interface OphthalmologyFundoscopy {
  /** 眼底检查总体描述 */
  Text?: KeyValueItem;
}

/** 器官 */
declare interface Organ {
  /** 部位 */
  Part?: Part;
  /** 大小 */
  Size?: Size[];
  /** 包膜 */
  Envelope?: BlockInfo;
  /** 边缘 */
  Edge?: BlockInfo;
  /** 内部回声 */
  InnerEcho?: BlockInfo;
  /** 腺体 */
  Gland?: BlockInfo;
  /** 形状 */
  Shape?: BlockInfo;
  /** 厚度 */
  Thickness?: BlockInfo;
  /** 形态 */
  ShapeAttr?: BlockInfo;
  /** 血液cdfi */
  CDFI?: BlockInfo;
  /** 描述信息 */
  SymDesc?: BlockInfo;
  /** 大小状态 */
  SizeStatus?: BlockInfo;
  /** 轮廓 */
  Outline?: BlockInfo;
  /** 结构 */
  Structure?: BlockInfo;
  /** 密度 */
  Density?: BlockInfo;
  /** 血管 */
  Vas?: BlockInfo;
  /** 囊壁 */
  Cysticwall?: BlockInfo;
  /** 被膜 */
  Capsule?: BlockInfo;
  /** 峡部厚度 */
  IsthmusThicknese?: Size | null;
  /** 内部回声分布 */
  InnerEchoDistribution?: BlockInfo;
  /** 原文 */
  Src?: string;
  /** 原文位置 */
  Index?: number[];
  /** 透声度 */
  Transparent?: BlockInfo;
  /** MRI ADC */
  MriAdc?: BlockInfo;
  /** MRI DWI */
  MriDwi?: BlockInfo;
  /** MRI T1信号 */
  MriT1?: BlockInfo;
  /** MRI T2信号 */
  MriT2?: BlockInfo;
  /** CT HU值 */
  CtHu?: BlockInfo;
  /** SUmax值 */
  Suvmax?: BlockInfo;
  /** 代谢情况 */
  Metabolism?: BlockInfo;
  /** 放射性摄取 */
  RadioactiveUptake?: BlockInfo;
  /** 淋巴结情况 */
  LymphEnlargement?: BlockInfo;
  /** 影像特征 */
  ImageFeature?: BlockInfo;
  /** 导管 */
  Duct?: BlockInfo;
  /** 趋势 */
  Trend?: BlockInfo;
  /** 手术情况 */
  Operation?: BlockInfo;
  /** 器官在报告图片中的坐标 */
  Coords?: Coord[];
  /** 峡部厚度 */
  IsthmusThickness?: Size;
}

/** 其他信息 */
declare interface OtherInfo {
  /** 麻醉方法 */
  Anesthesia?: SurgeryAttr;
  /** 术中出血 */
  BloodLoss?: SurgeryAttr;
  /** 输血 */
  BloodTransfusion?: SurgeryAttr;
  /** 手术用时 */
  Duration?: SurgeryAttr;
  /** 手术开始时间 */
  EndTime?: SurgeryAttr;
  /** 手术结束时间 */
  StartTime?: SurgeryAttr;
}

/** 体检报告-耳鼻喉科 */
declare interface OtolaryngologyBaseItem {
  /** 耳朵 */
  Ear?: OtolaryngologyEar;
  /** 鼻 */
  Nose?: OtolaryngologyNose;
  /** 喉 */
  Larynx?: OtolaryngologyLarynx;
  /** 耳鼻喉其他 */
  Others?: KeyValueItem[];
  /** 小结 */
  BriefSummary?: OtolaryngologyBriefSummary;
}

/** 体检报告-耳鼻喉科-小结 */
declare interface OtolaryngologyBriefSummary {
  /** 耳鼻喉小结 */
  Text?: KeyValueItem;
}

/** 体检报告-耳鼻喉科-耳朵 */
declare interface OtolaryngologyEar {
  /** 耳总体描述 */
  Text?: KeyValueItem;
  /** 听力 */
  Hearing?: HearingItem;
}

/** 体检报告-耳鼻喉科-喉 */
declare interface OtolaryngologyLarynx {
  /** 喉总体描述 */
  Text?: KeyValueItem;
}

/** 体检报告-耳鼻喉科-鼻 */
declare interface OtolaryngologyNose {
  /** 鼻总体描述 */
  Text?: KeyValueItem;
}

/** pTNM */
declare interface PTNM {
  /** 项目名称 */
  Name?: string;
  /** 索引 */
  Index?: number[];
  /** 原文 */
  Src?: string;
  /** 归一化值 */
  Value?: string;
  /** pT */
  PT?: string;
  /** pN */
  PN?: string;
  /** pM */
  PM?: string;
  /** 原文对应坐标 */
  Coords?: Coord[];
}

/** PTNM分期 */
declare interface PTNMBlock {
  /** 名称 */
  Name?: string;
  /** 原文 */
  Src?: string;
  /** PTNM分期 */
  PTNMM?: string;
  /** PTNM分期 */
  PTNMN?: string;
  /** PTNM分期 */
  PTNMT?: string;
}

/** 文本块 */
declare interface ParagraphBlock {
  /** 切口愈合情况 */
  IncisionHealingText?: string;
  /** 辅助检查 */
  AuxiliaryExaminationText?: string;
  /** 特殊检查 */
  SpecialExamText?: string;
  /** 门诊诊断 */
  OutpatientDiagnosisText?: string;
  /** 入院情况 */
  AdmissionConditionText?: string;
  /** 诊疗经过 */
  CheckAndTreatmentProcessText?: string;
  /** 体征 */
  SymptomsAndSignsText?: string;
  /** 出院医嘱 */
  DischargeInstructionsText?: string;
  /** 入院诊断 */
  AdmissionDiagnosisText?: string;
  /** 手术情况 */
  SurgeryConditionText?: string;
  /** 病理诊断 */
  PathologicalDiagnosisText?: string;
  /** 出院情况 */
  DischargeConditionText?: string;
  /** 检查记录 */
  CheckRecordText?: string;
  /** 主诉 */
  ChiefComplaintText?: string;
  /** 出院诊断 */
  DischargeDiagnosisText?: string;
  /** 既往史 */
  MainDiseaseHistoryText?: string;
  /** 现病史 */
  DiseasePresentText?: string;
  /** 个人史 */
  PersonalHistoryText?: string;
  /** 月经史 */
  MenstruallHistoryText?: string | null;
  /** 婚育史 */
  ObstericalHistoryText?: string;
  /** 家族史 */
  FamilyHistoryText?: string;
  /** 过敏史 */
  AllergyHistoryText?: string;
  /** 病史信息 */
  DiseaseHistoryText?: string;
  /** 其它诊断 */
  OtherDiagnosisText?: string;
  /** 体格检查 */
  BodyExaminationText?: string;
  /** 专科检查 */
  SpecialistExaminationText?: string;
  /** 治疗结果 */
  TreatmentResultText?: string;
  /** 月经史 */
  MenstrualHistoryText?: string;
}

/** 母亲或父亲信息 */
declare interface ParentInfo {
  /** 名字 */
  Name?: string;
  /** 年龄 */
  Age?: string;
  /** 证件号 */
  IdCard?: string;
  /** 民族 */
  Ethnicity?: string;
  /** 国籍 */
  Nationality?: string;
  /** 地址 */
  Address?: string;
}

/** 部位信息 */
declare interface Part {
  /** 原文位置 */
  Index?: number[];
  /** 部位 */
  NormPart?: NormPart;
  /** 原文 */
  Src?: string;
  /** 值 */
  Value?: string;
  /** 名称 */
  Name?: string;
  /** 值 */
  ValueBrief?: string;
}

/** 部位描述 */
declare interface PartDesc {
  /** 主要部位 */
  MainDir?: string;
  /** 部位 */
  Part?: string;
  /** 次要部位 */
  SecondaryDir?: string;
  /** 类型 */
  Type?: string;
}

/** 病理诊断 */
declare interface PathologicalDiagnosisBlock {
  /** 名称 */
  Name?: string;
  /** 原文 */
  Src?: string;
  /** 病理详细 */
  Detail?: PathologicalDiagnosisDetailBlock[];
  /** 值 */
  Value?: string;
}

/** 病理详细 */
declare interface PathologicalDiagnosisDetailBlock {
  /** 部位 */
  Part?: string;
  /** 类型 */
  HistologicalType?: string;
  /** 等级 */
  HistologicalGrade?: string;
}

/** 病理报告 */
declare interface PathologyReport {
  /** 癌症部位 */
  CancerPart?: Part;
  /** 癌症部位大小 */
  CancerSize?: Size[];
  /** 描述文本 */
  DescText?: string;
  /** 组织学等级 */
  HistologyLevel?: HistologyLevel;
  /** 组织学类型 */
  HistologyType?: HistologyType;
  /** IHC信息 */
  IHC?: IHCInfo[];
  /** 浸润深度 */
  InfiltrationDepth?: BlockInfo;
  /** 肿瘤扩散 */
  Invasive?: Invas[];
  /** 淋巴结 */
  LymphNodes?: Lymph[];
  /** PTNM信息 */
  PTNM?: BlockInfo;
  /** 病理报告类型 */
  PathologicalReportType?: BlockInfo;
  /** 报告原文 */
  ReportText?: string;
  /** 标本类型 */
  SampleType?: BlockInfo;
  /** 结论文本 */
  SummaryText?: string;
}

/** 病理报告v2 */
declare interface PathologyV2 {
  /** 报告类型 */
  PathologicalReportType?: Report;
  /** 描述段落 */
  Desc?: DescInfo;
  /** 诊断结论 */
  Summary?: SummaryInfo;
  /** 报告全文 */
  ReportText?: string;
  /** 淋巴结总计转移信息 */
  LymphTotal?: LymphTotal[];
  /** 单淋巴结转移信息 */
  LymphNodes?: LymphNode[];
  /** ihc信息 */
  Ihc?: IHCV2[];
  /** 临床诊断 */
  Clinical?: BaseInfo;
  /** 是否癌前病变 */
  Precancer?: HistologyClass;
  /** 是否恶性肿瘤 */
  Malignant?: HistologyClass;
  /** 是否良性肿瘤 */
  Benigntumor?: HistologyClass;
  /** 送检材料 */
  SampleType?: BaseInfo;
  /** 淋巴结大小 */
  LymphSize?: Size[];
  /** 分子病理 */
  Molecular?: Molecular[];
  /** 数据在原PDF文件中的第几页 */
  Page?: number;
}

/** 患者信息 */
declare interface PatientInfo {
  /** 患者姓名 */
  Name?: string;
  /** 患者性别 */
  Sex?: string;
  /** 患者年龄 */
  Age?: string;
  /** 患者手机号码 */
  Phone?: string;
  /** 患者地址 */
  Address?: string;
  /** 患者身份证 */
  IdCard?: string;
  /** 健康卡号 */
  HealthCardNo?: string;
  /** 社保卡号 */
  SocialSecurityCardNo?: string;
  /** 出生日期 */
  Birthday?: string;
  /** 民族 */
  Ethnicity?: string;
  /** 婚姻状况 */
  Married?: string;
  /** 职业 */
  Profession?: string;
  /** 教育程度 */
  EducationBackground?: string;
  /** 国籍 */
  Nationality?: string;
  /** 籍贯 */
  BirthPlace?: string;
  /** 医保类型 */
  MedicalInsuranceType?: string;
  /** 标准化年龄 */
  AgeNorm?: string;
  /** 民族。该字段已不再使用，请从Ethnicity取值 */
  Nation?: string | null;
  /** 婚姻代码 */
  MarriedCode?: string;
  /** 职业代码 */
  ProfessionCode?: string;
  /** 居民医保代码 */
  MedicalInsuranceTypeCode?: string;
  /** 床号 */
  BedNo?: string;
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
  BirthPlace?: BirthPlaceBlock;
  /** 居住地 */
  LivePlace?: BirthPlaceBlock;
  /** 职业 */
  Job?: BirthPlaceBlock;
  /** 吸烟 */
  SmokeHistory?: SmokeHistoryBlock;
  /** 喝酒 */
  AlcoholicHistory?: SmokeHistoryBlock;
  /** 月经史 */
  MenstrualHistory?: MenstrualHistoryBlock;
  /** 婚姻-生育史 */
  ObstericalHistory?: ObstetricalHistoryBlock;
  /** 家族史 */
  FamilyHistory?: FamilyHistoryBlock;
}

/** 个人史 */
declare interface PersonalMedicalHistory {
  /** 出生史 */
  BirthPlace?: string;
  /** 居住史 */
  LivePlace?: string;
  /** 工作史 */
  Job?: string;
  /** 吸烟史 */
  SmokeHistory?: string;
  /** 饮酒史 */
  AlcoholicHistory?: string;
}

/** 体检报告基础信息 */
declare interface PhysicalBaseItem {
  /** 类型 */
  Name?: string;
  /** 原始文本 */
  Src?: string;
  /** 归一化后值 */
  Value?: string;
  /** 四点坐标 */
  Coords?: Coord[];
}

/** 体检报告综合信息 */
declare interface PhysicalExamination {
  /** 一般检查 */
  GeneralExamination?: GeneralExaminationBaseItem;
  /** 内科 */
  InternalMedicine?: InternalMedicineBaseItem;
  /** 外科 */
  Surgery?: SurgeryBaseItem;
  /** 口腔科 */
  Stomatology?: StomatologyBaseItem;
  /** 眼科 */
  Ophthalmology?: OphthalmologyBaseItem;
  /** 耳鼻喉科 */
  Otolaryngology?: OtolaryngologyBaseItem;
  /** 妇科 */
  Gynaecology?: GynaecologyBaseItem;
  /** 未标准化 */
  Unclassified?: KeyValueItem[];
}

/** 体检报告V1版本 */
declare interface PhysicalExaminationV1 {
  /** 体检报告信息 */
  PhysicalExaminationMulti?: PhysicalExamination;
  /** 版本 */
  Version?: string;
}

/** 点坐标 */
declare interface Point {
  /** x坐标 */
  X?: number;
  /** y坐标 */
  Y?: number;
}

/** 肯定列表 */
declare interface PoslistBlock {
  /** 名称 */
  Name?: string;
  /** 值 */
  Value?: string;
}

/** 处方单 */
declare interface Prescription {
  /** 药品列表 */
  MedicineList?: Medicine[];
  /** 数据在原PDF文件中的第几页 */
  Page?: number;
}

/** 位置坐标 */
declare interface Rectangle {
  /** x坐标 */
  X?: number;
  /** y坐标 */
  Y?: number;
  /** 宽 */
  W?: number;
  /** 高 */
  H?: number;
}

/** 复发时间 */
declare interface RelapseDateBlock {
  /** 名称 */
  Name?: string;
  /** 原文 */
  Src?: string;
  /** 疾病名称 */
  DiseaseName?: string;
  /** 类型 */
  Type?: string;
  /** 归一化值 */
  Norm?: string;
  /** 单位 */
  Unit?: string;
  /** 时间戳 */
  Timestamp?: string;
  /** 对外输出值 */
  Value?: string;
}

/** 家族肿瘤史 */
declare interface RelativeCancerHistoryBlock {
  /** 名称 */
  Name?: string;
  /** 原文 */
  Src?: string;
  /** 肿瘤史列表 */
  RelativeCancerList?: string;
  /** 对外输出值 */
  Value?: string;
}

/** 家庭成员 */
declare interface RelativeHistoryBlock {
  /** 名称 */
  Name?: string;
  /** 成员列表 */
  Detail?: RelativeHistoryDetailBlock[];
  /** 原文 */
  Src?: string;
  /** 对外输出值 */
  Value?: string;
}

/** 家庭成员详情 */
declare interface RelativeHistoryDetailBlock {
  /** 名称 */
  Name?: string;
  /** 关系 */
  Relation?: string;
  /** 死亡时间 */
  TimeOfDeath?: string;
  /** 时间类型 */
  TimeType?: string;
}

/** 报告类型 */
declare interface Report {
  /** 项目名称 */
  Name?: string;
  /** 索引 */
  Index?: number[];
  /** 原文 */
  Src?: string;
  /** 报告类型 */
  Value?: string;
  /** 原文对应坐标 */
  Coords?: Coord[];
}

/** 报告基本信息 */
declare interface ReportInfo {
  /** 医院名称 */
  Hospital?: string;
  /** 科室名称 */
  DepartmentName?: string;
  /** 申请时间 */
  BillingTime?: string;
  /** 报告时间 */
  ReportTime?: string;
  /** 检查时间 */
  InspectTime?: string;
  /** 检查号 */
  CheckNum?: string;
  /** 影像号 */
  ImageNum?: string;
  /** 放射号 */
  RadiationNum?: string;
  /** 检验号 */
  TestNum?: string;
  /** 门诊号 */
  OutpatientNum?: string;
  /** 病理号 */
  PathologyNum?: string;
  /** 住院号 */
  InHospitalNum?: string;
  /** 样本号 */
  SampleNum?: string;
  /** 标本种类 */
  SampleType?: string;
  /** 病历号 */
  MedicalRecordNum?: string;
  /** 报告名称 */
  ReportName?: string;
  /** 超声号 */
  UltraNum?: string;
  /** 临床诊断 */
  Diagnose?: string;
  /** 检查项目 */
  CheckItem?: string;
  /** 检查方法 */
  CheckMethod?: string;
  /** 诊断时间 */
  DiagnoseTime?: string;
  /** 体检号 */
  HealthCheckupNum?: string;
  /** 其它时间 */
  OtherTime?: string;
  /** 打印时间 */
  PrintTime?: string;
  /** 未归类时间 */
  Times?: Time[];
  /** 床号 */
  BedNo?: string;
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
  Text?: BaseInfo;
  /** 结论详情 */
  Items?: BaseInfo[];
  /** 数据在原PDF文件中的第几页 */
  Page?: number;
}

/** 大小 */
declare interface Size {
  /** 原文位置 */
  Index?: number[];
  /** 标准大小 */
  NormSize?: NormSize;
  /** 原文 */
  Src?: string;
  /** 值 */
  Value?: string;
  /** 名称 */
  Name?: string;
}

/** 吸烟史 */
declare interface SmokeHistoryBlock {
  /** 名称 */
  Name?: string;
  /** 原文 */
  Src?: string;
  /** 时间单位 */
  TimeUnit?: string;
  /** 时间归一化 */
  TimeNorm?: string;
  /** 吸烟量 */
  Amount?: string;
  /** 戒烟状态 */
  QuitState?: boolean;
  /** 是否吸烟 */
  State?: boolean;
  /** 对外输出值 */
  Value?: string;
}

/** 体检报告-口腔科 */
declare interface StomatologyBaseItem {
  /** 龋齿 */
  ToothDecay?: StomatologyToothDecay;
  /** 牙龈 */
  Gingiva?: StomatologyGingiva;
  /** 牙周 */
  Periodontics?: StomatologyPeriodontics;
  /** 口腔其他 */
  Others?: KeyValueItem[];
  /** 小结 */
  BriefSummary?: StomatologyBriefSummary;
}

/** 体检报告-口腔科-小结 */
declare interface StomatologyBriefSummary {
  /** 口腔小结 */
  Text?: KeyValueItem;
}

/** 体检报告-口腔科-牙龈 */
declare interface StomatologyGingiva {
  /** 牙龈总体描述 */
  Text?: KeyValueItem;
}

/** 体检报告-口腔科-牙周 */
declare interface StomatologyPeriodontics {
  /** 牙周总体描述 */
  Text?: KeyValueItem;
}

/** 体检报告-口腔科-龋齿 */
declare interface StomatologyToothDecay {
  /** 龋齿总体描述 */
  Text?: KeyValueItem;
}

/** 结论 */
declare interface Summary {
  /** 症状 */
  Symptom?: SymptomInfo[];
  /** 文本 */
  Text?: string;
  /** 坐标 */
  Coords?: Coord[];
}

/** 诊断结论 */
declare interface SummaryInfo {
  /** 诊断结论文本 */
  Text?: BaseInfo;
  /** 诊断结论详情 */
  Infos?: DetailInformation[];
}

/** 手术记录 */
declare interface Surgery {
  /** 手术史 */
  SurgeryHistory?: SurgeryHistory;
  /** 其他信息 */
  OtherInfo?: OtherInfo;
  /** 数据在原PDF文件中的第几页 */
  Page?: number;
}

/** 体检报告-外科-肛门直肠 */
declare interface SurgeryAnorectal {
  /** 肛门直肠总体描述 */
  Text?: KeyValueItem;
  /** 直肠指检 */
  DigitalRectalExamination?: KeyValueItem;
  /** 痔疮 */
  Hemorrhoid?: KeyValueItem;
}

/** 手术记录属性 */
declare interface SurgeryAttr {
  /** 名称 */
  Name?: string;
  /** 值 */
  Value?: string;
}

/** 体检报告-外科 */
declare interface SurgeryBaseItem {
  /** 体检报告-外科-头颈部 */
  HeadNeck?: SurgeryHeadNeck;
  /** 体检报告-外科-甲状腺 */
  Thyroid?: SurgeryThyroid;
  /** 体检报告-外科-乳房 */
  Breast?: SurgeryBreast;
  /** 体检报告-外科-浅表淋巴结 */
  LymphNode?: SurgeryLymphNode;
  /** 体检报告-外科-脊柱 */
  SpinalExtremities?: SurgerySpinalExtremities;
  /** 体检报告-外科-皮肤 */
  Skin?: SurgerySkin;
  /** 体检报告-外科-肛门直肠 */
  Anorectal?: SurgeryAnorectal;
  /** 体检报告-外科-泌尿生殖系统 */
  UrogenitalSystem?: SurgeryUrogenitalSystem;
  /** 体检报告-外科-外科其他 */
  Others?: KeyValueItem[];
  /** 体检报告-外科-小结 */
  BriefSummary?: SurgeryBriefSummary;
}

/** 体检报告-外科-乳房 */
declare interface SurgeryBreast {
  /** 乳房总体描述 */
  Text?: KeyValueItem;
}

/** 体检报告-外科-小结 */
declare interface SurgeryBriefSummary {
  /** 外科小结 */
  Text?: KeyValueItem;
}

/** 手术经过 */
declare interface SurgeryConditionBlock {
  /** 名称 */
  Name?: string;
  /** 原文 */
  Src?: string;
  /** 手术历史 */
  SurgeryList?: SurgeryListBlock[];
  /** 对外输出值 */
  Value?: string;
}

/** 体检报告-外科-头颈部 */
declare interface SurgeryHeadNeck {
  /** 头颈部总体描述 */
  Text?: KeyValueItem;
}

/** 手术史 */
declare interface SurgeryHistory {
  /** 手术名称 */
  SurgeryName?: SurgeryAttr;
  /** 手术日期 */
  SurgeryDate?: SurgeryAttr;
  /** 术前诊断 */
  PreoperativePathology?: SurgeryAttr;
  /** 术中诊断 */
  IntraoperativePathology?: SurgeryAttr;
  /** 术后诊断 */
  PostoperativePathology?: SurgeryAttr;
  /** 出院诊断 */
  DischargeDiagnosis?: SurgeryAttr;
}

/** 手术史 */
declare interface SurgeryHistoryBlock {
  /** 名称 */
  Name?: string;
  /** 原文 */
  Src?: string;
  /** 值 */
  Value?: string;
  /** 手术列表 */
  Surgerylist?: SurgeryListBlock[];
}

/** 手术列表 */
declare interface SurgeryListBlock {
  /** 时间 */
  Time?: string;
  /** 类型 */
  TimeType?: string;
  /** 名称 */
  Name?: string[];
  /** 部位 */
  Part?: string;
}

/** 体检报告-外科-浅表淋巴结 */
declare interface SurgeryLymphNode {
  /** 浅表淋巴结总体描述 */
  Text?: KeyValueItem;
}

/** 体检报告-外科-皮肤 */
declare interface SurgerySkin {
  /** 皮肤总体描述 */
  Text?: KeyValueItem;
}

/** 体检报告-外科-脊柱 */
declare interface SurgerySpinalExtremities {
  /** 脊柱四肢总体描述 */
  Text?: KeyValueItem;
  /** 脊柱 */
  SpinalColumn?: KeyValueItem;
  /** 四肢和关节 */
  LimbJoint?: KeyValueItem;
  /** 平跛足 */
  Foot?: KeyValueItem;
  /** 骨骼 */
  Bone?: KeyValueItem;
  /** 步态 */
  Gait?: KeyValueItem;
  /** 残疾或畸形 */
  Deformity?: KeyValueItem;
}

/** 体检报告-外科-甲状腺 */
declare interface SurgeryThyroid {
  /** 甲状腺总体描述 */
  Text?: KeyValueItem;
}

/** 体检报告-外科-泌尿生殖系统 */
declare interface SurgeryUrogenitalSystem {
  /** 泌尿生殖系统总体描述 */
  Text?: KeyValueItem;
  /** 前列腺 */
  Prostate?: KeyValueItem;
  /** 外生殖器（男性） */
  ExternalReproductiveOrgans?: KeyValueItem;
}

/** 病症描述信息 */
declare interface SymptomInfo {
  /** 等级 */
  Grade?: BlockInfo;
  /** 部位 */
  Part?: Part;
  /** 原文位置 */
  Index?: number[];
  /** 病变 */
  Symptom?: BlockInfo;
  /** 属性 */
  Attrs?: BlockInfo[];
  /** 原文 */
  Src?: string;
  /** 坐标 */
  Coords?: Coord[];
}

/** 检验报告结构 */
declare interface TableIndicators {
  /** 项目列表 */
  Indicators?: IndicatorItemV2[];
  /** 采样标本 */
  Sample?: BaseItem;
}

/** 报告模板 */
declare interface Template {
  /** 患者信息 */
  PatientInfo?: PatientInfo;
  /** 报告信息 */
  ReportInfo?: ReportInfo;
  /** 检查报告 */
  Check?: Check;
  /** 病理报告 */
  Pathology?: PathologyReport;
  /** 出院报告，入院报告，门诊病历 */
  MedDoc?: MedDoc;
  /** 诊断证明 */
  DiagCert?: DiagCert;
  /** 病案首页 */
  FirstPage?: FirstPage;
  /** 检验报告 */
  Indicator?: Indicator;
  /** 报告类型 */
  ReportType?: string;
  /** 门诊病历信息 */
  MedicalRecordInfo?: MedicalRecordInfo;
  /** 出入院信息 */
  Hospitalization?: Hospitalization;
  /** 手术记录 */
  Surgery?: Surgery;
  /** 心电图报告 */
  Electrocardiogram?: Electrocardiogram;
  /** 内窥镜报告 */
  Endoscopy?: Endoscopy;
  /** 处方单 */
  Prescription?: Prescription;
  /** 疫苗接种凭证 */
  VaccineCertificate?: VaccineCertificate;
  /** OCR文本 */
  OcrText?: string;
  /** OCR拼接后文本 */
  OcrResult?: string;
  /** 报告类型 */
  ReportTypeDesc?: string;
  /** 病理报告v2 */
  PathologyV2?: PathologyV2;
  /** 碳14尿素呼气试验 */
  C14?: Indicator;
  /** 体检结论 */
  Exame?: Exame;
  /** 出院报告v2，入院报告v2，门诊病历v2 */
  MedDocV2?: DischargeInfoBlock;
  /** 检验报告v3 */
  IndicatorV3?: IndicatorV3;
  /** 核酸报告 */
  Covid?: CovidItemsInfo;
  /** 孕产报告 */
  Maternity?: Maternity;
  /** 眼科报告 */
  Eye?: EyeItemsInfo;
  /** 出生证明 */
  BirthCert?: BirthCert;
  /** 时间轴 */
  Timeline?: TimelineInformation;
  /** 内窥镜报告V2 */
  EndoscopyV2?: Check;
}

/** 文本类型 */
declare interface TextType {
  /** 类别Id */
  Id?: number;
  /** 类别层级 */
  Level?: number;
  /** 类别名 */
  Name?: string;
}

/** 文本类型列表块 */
declare interface TextTypeListBlock {
  /** 文本类型列表 */
  TextTypeList?: TextType[];
  /** 数据在原PDF文件中的第几页 */
  Page?: number;
}

/** 时间 */
declare interface Time {
  /** 具体时间类型 */
  Name?: string;
  /** 时间值 */
  Value?: string;
}

/** 时间轴事件 */
declare interface TimelineEvent {
  /** 事件类型 */
  Type?: string;
  /** 原文本 */
  Src?: string;
  /** 事件子类型 */
  SubType?: string;
  /** 事件发生时间 */
  Time?: string;
  /** 事件值 */
  Value?: string;
  /** 位置坐标 */
  Rectangle?: Rectangle;
  /** 事件发生地点 */
  Place?: string;
  /** 结束时间 */
  EndTime?: string;
}

/** 时间轴 */
declare interface TimelineInformation {
  /** 时间轴 */
  Timeline?: TimelineEvent[];
  /** 数据在原PDF文件中的第几页 */
  Page?: number;
}

/** 输血史 */
declare interface TransfusionHistoryBlock {
  /** 名称 */
  Name?: string;
  /** 原文 */
  Src?: string;
  /** 状态 */
  State?: boolean;
  /** 值 */
  Value?: string;
}

/** 病历 */
declare interface TreatmentRecord {
  /** 入院 */
  DmissionCondition?: string | null;
  /** 主诉 */
  ChiefComplaint?: string;
  /** 现病史 */
  DiseasePresent?: string;
  /** 主要症状体征 */
  SymptomsAndSigns?: string;
  /** 辅助检查 */
  AuxiliaryExamination?: string;
  /** 体格检查 */
  BodyExamination?: string;
  /** 专科检查 */
  SpecialistExamination?: string;
  /** 精神检查 */
  MentalExamination?: string;
  /** 检查记录 */
  CheckRecord?: string;
  /** 化验结果 */
  InspectResult?: string;
  /** 切口愈合情况 */
  IncisionHealing?: string;
  /** 处理意见 */
  TreatmentSuggestion?: string;
  /** 门诊随访要求 */
  FollowUpRequirements?: string;
  /** 诊疗经过 */
  CheckAndTreatmentProcess?: string;
  /** 手术经过 */
  SurgeryCondition?: string;
  /** 入院情况 */
  ConditionChanges?: string;
  /** 出院情况 */
  DischargeCondition?: string;
  /** pTNM信息 */
  PTNM?: string;
  /** pTNMM信息 */
  PTNMM?: string;
  /** pTNMN信息 */
  PTNMN?: string;
  /** pTNMT信息 */
  PTNMT?: string;
  /** ECOG信息 */
  ECOG?: string;
  /** NRS信息 */
  NRS?: string;
  /** KPS信息 */
  KPS?: string;
  /** 死亡日期 */
  DeathDate?: string;
  /** 复发日期 */
  RelapseDate?: string;
  /** 观测天数 */
  ObservationDays?: string;
  /** 入院 */
  AdmissionCondition?: string;
}

/** 治疗记录 */
declare interface TreatmentRecordBlock {
  /** 免疫组化 */
  Immunohistochemistry?: ImmunohistochemistryBlock;
  /** 主诉 */
  ChiefComplaint?: ChiefComplaintBlock;
  /** 入院情况 */
  AdmissionCondition?: AdmissionConditionBlock;
  /** 查体 */
  BodyExamination?: BodyExaminationBlock;
  /** 入院诊断 */
  AdmissionDiagnosis?: AdmissionDiagnosisBlock;
  /** 入院中医诊断 */
  AdmissionTraditionalDiagnosis?: AdmissionDiagnosisBlock;
  /** 入院西医诊断 */
  AdmissionModernDiagnosis?: AdmissionDiagnosisBlock;
  /** 病理诊断 */
  PathologicalDiagnosis?: PathologicalDiagnosisBlock;
  /** 现病史 */
  DiseasePresent?: DiseasePresentBlock;
  /** 体征 */
  SymptomsAndSigns?: DiseasePresentBlock;
  /** 辅助检查 */
  AuxiliaryExamination?: DiseasePresentBlock;
  /** 特殊检查 */
  SpecialistExamination?: DiseasePresentBlock;
  /** 精神检查 */
  MentalExamination?: DiseasePresentBlock;
  /** 检查记录 */
  CheckRecord?: DiseasePresentBlock;
  /** 检查结果 */
  InspectResult?: DiseasePresentBlock;
  /** 治疗经过 */
  CheckAndTreatmentProcess?: DiseasePresentBlock;
  /** 手术经过 */
  SurgeryCondition?: SurgeryConditionBlock;
  /** 切口愈合 */
  IncisionHealing?: DiseasePresentBlock;
  /** 出院诊断 */
  DischargeDiagnosis?: DischargeDiagnosisBlock;
  /** 出院中医诊断 */
  DischargeTraditionalDiagnosis?: DiseasePresentBlock;
  /** 出院西医诊断 */
  DischargeModernDiagnosis?: DischargeDiagnosisBlock;
  /** 出院情况 */
  DischargeCondition?: DischargeConditionBlock;
  /** 出院医嘱 */
  DischargeInstructions?: DiseasePresentBlock;
  /** 治疗建议 */
  TreatmentSuggestion?: DiseasePresentBlock;
  /** 随访 */
  FollowUpRequirements?: DiseasePresentBlock;
  /** 治疗情况变化 */
  ConditionChanges?: DiseasePresentBlock;
  /** 收缩压 */
  PulmonaryArterySystolicPressure?: DiseasePresentBlock;
  /** bclc分期 */
  BCLC?: DiseasePresentBlock;
  /** PTNM分期 */
  PTNM?: PTNMBlock;
  /** ECOG评分 */
  ECOG?: DiseasePresentBlock;
  /** NRS评分 */
  NRS?: DiseasePresentBlock;
  /** kps评分 */
  KPS?: DiseasePresentBlock;
  /** 癌症分期 */
  Cancerstaging?: ClinicalStaging;
  /** 死亡时间 */
  DeathDate?: DeathDateBlock;
  /** 复发日期 */
  RelapseDate?: RelapseDateBlock;
  /** 观察日期 */
  ObservationDays?: DeathDateBlock;
  /** 切口愈合情况 */
  IncisionHealingText?: string;
  /** 辅助检查 */
  AuxiliaryExaminationText?: string;
  /** 特殊检查 */
  SpecialExamText?: string;
  /** 门诊诊断 */
  OutpatientDiagnosisText?: string;
  /** 入院情况 */
  AdmissionConditionText?: string;
  /** 诊疗经过 */
  CheckAndTreatmentProcessText?: string;
  /** 体征 */
  SymptomsAndSignsText?: string;
  /** 出院医嘱 */
  DischargeInstructionsText?: string;
  /** 入院诊断 */
  AdmissionDiagnosisText?: string;
  /** 手术情况 */
  SurgeryConditionText?: string;
  /** 病理诊断 */
  PathologicalDiagnosisText?: string;
  /** 出院情况 */
  DischargeConditionText?: string;
  /** 检查记录 */
  CheckRecordText?: string;
  /** 主诉 */
  ChiefComplaintText?: string;
  /** 出院诊断 */
  DischargeDiagnosisText?: string;
}

/** 结节 */
declare interface TuberInfo {
  /** 类型 */
  Type?: BlockInfo;
  /** 部位 */
  Part?: Part;
  /** 大小 */
  Size?: Size[];
  /** 多发 */
  Multiple?: Multiple;
  /** 纵横比 */
  AspectRatio?: AspectRatio;
  /** 边缘 */
  Edge?: BlockInfo;
  /** 内部回声 */
  InnerEcho?: BlockInfo;
  /** 外部回声 */
  RearEcho?: BlockInfo;
  /** 弹性质地 */
  Elastic?: Elastic;
  /** 形状 */
  Shape?: BlockInfo;
  /** 形态 */
  ShapeAttr?: BlockInfo;
  /** 皮髓质信息 */
  SkinMedulla?: BlockInfo;
  /** 变化趋势 */
  Trend?: BlockInfo;
  /** 钙化 */
  Calcification?: BlockInfo;
  /** 包膜 */
  Envelope?: BlockInfo;
  /** 强化 */
  Enhancement?: BlockInfo;
  /** 淋巴结 */
  LymphEnlargement?: BlockInfo;
  /** 淋巴门 */
  LymphDoor?: BlockInfo;
  /** 活动度 */
  Activity?: BlockInfo;
  /** 手术情况 */
  Operation?: BlockInfo;
  /** 血液cdfi */
  CDFI?: BlockInfo;
  /** 原文位置 */
  Index?: number[];
  /** 大小状态 */
  SizeStatus?: BlockInfo;
  /** 内部回声分布 */
  InnerEchoDistribution?: BlockInfo;
  /** 内部回声类型 */
  InnerEchoType?: BlockInfo[];
  /** 轮廓 */
  Outline?: BlockInfo;
  /** 结构 */
  Structure?: BlockInfo;
  /** 密度 */
  Density?: BlockInfo;
  /** 血管 */
  Vas?: BlockInfo;
  /** 囊壁 */
  Cysticwall?: BlockInfo;
  /** 被膜 */
  Capsule?: BlockInfo;
  /** 峡部厚度 */
  IsthmusThicknese?: Size | null;
  /** 原文 */
  Src?: string;
  /** 透声度 */
  Transparent?: BlockInfo;
  /** MRI ADC */
  MriAdc?: BlockInfo;
  /** MRI DWI */
  MriDwi?: BlockInfo;
  /** MRI T1信号 */
  MriT1?: BlockInfo;
  /** MRI T2信号 */
  MriT2?: BlockInfo;
  /** CT HU值 */
  CtHu?: BlockInfo;
  /** SUmax值 */
  Suvmax?: BlockInfo;
  /** 代谢情况 */
  Metabolism?: BlockInfo;
  /** 放射性摄取 */
  RadioactiveUptake?: BlockInfo;
  /** 病变 */
  SymDesc?: BlockInfo;
  /** 影像特征 */
  ImageFeature?: BlockInfo;
  /** 在报告图片中的坐标 */
  Coords?: Coord[];
  /** 峡部厚度 */
  IsthmusThickness?: Size;
}

/** 免疫接种记录 */
declare interface Vaccination {
  /** 序号 */
  Id?: string;
  /** 疫苗名称 */
  Vaccine?: string;
  /** 剂次 */
  Dose?: string;
  /** 接种日期 */
  Date?: string;
  /** 疫苗批号 */
  LotNumber?: string;
  /** 生产企业 */
  Manufacturer?: string;
  /** 接种单位 */
  Clinic?: string;
  /** 接种部位 */
  Site?: string;
  /** 接种者 */
  Provider?: string;
  /** 疫苗批号 */
  Lot?: string;
}

/** 免疫接种证明 */
declare interface VaccineCertificate {
  /** 免疫接种列表 */
  VaccineList?: Vaccination[];
  /** 数据在原PDF文件中的第几页 */
  Page?: number;
}

/** 值 */
declare interface Value {
  /** 等级 */
  Grade?: string;
  /** 百分比 */
  Percent?: number[];
  /** 阳性 */
  Positive?: string;
}

/** 值块 */
declare interface ValueBlock {
  /** 等级 */
  Grade?: string;
  /** 百分比 */
  Percent?: number[];
  /** 阳性阴性 */
  Positive?: string;
}

/** 体检报告信息-包含单位 */
declare interface ValueUnitItem {
  /** 类型 */
  Name?: string;
  /** 项目原文 */
  Item?: PhysicalBaseItem;
  /** 数值 */
  Result?: PhysicalBaseItem;
  /** 单位 */
  Unit?: PhysicalBaseItem;
  /** 数据在原PDF文件中的第几页 */
  Page?: number;
}

declare interface DrugInstructionObjectRequest {
  /** 药品说明书PDF文件信息, 目前只支持传PDF文件的Base64编码字符(PDF文件不能超过10MB，如果超过建议先压缩PDF，再转成base64). */
  PdfInfo: PdfInfo;
}

declare interface DrugInstructionObjectResponse {
  /** 药品说明书消息定义 */
  ChemicalProductInfo?: ChemicalProductInfo;
  /** 预防用生物制品说明书 */
  BiologicalProductInfo?: BiologicalProductInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ImageMaskAsyncGetResultRequest {
  /** 异步任务ID1.因上传图片TaskID 仅 24 小时内有效，请于提交任务获取TaskID后24小时内调用ImageMaskAsyncGetResult接口获取结果.2.建议在获取到TaskID 后，5-10分钟后再调用 ImageMaskAsyncGetResult 接口获取脱敏结果。 */
  TaskID: string;
}

declare interface ImageMaskAsyncGetResultResponse {
  /** 脱敏后图片的base64编码 */
  MaskedImage?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ImageMaskAsyncRequest {
  /** 图片信息,目前只支持传图片base64 */
  Image: ImageInfo;
  /** 图片脱敏选项, 不传默认都脱敏 */
  MaskFlag?: ImageMaskFlags;
  /** 是否自动矫正图片方向 */
  AutoFixImageDirection?: boolean;
}

declare interface ImageMaskAsyncResponse {
  /** 加密任务ID1.因此TaskID 仅 24 小时内有效，请于提交任务获取TaskID后24小时内调用ImageMaskAsyncGetResult接口获取结果.2.建议在获取到TaskID 后，5-10分钟后再调用 ImageMaskAsyncGetResult 接口获取脱敏结果。 */
  TaskID?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ImageMaskRequest {
  /** 图片信息,目前只支持传图片base64 */
  Image: ImageInfo;
  /** 图片脱敏选项, 不传默认都脱敏 */
  MaskFlag?: ImageMaskFlags;
  /** 是否自动矫正图片方向 */
  AutoFixImageDirection?: boolean;
}

declare interface ImageMaskResponse {
  /** 脱敏后图片的Base64信息 */
  MaskedImage?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
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
  TextTypeList?: TextType[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ImageToObjectRequest {
  /** 报告类型，目前支持11（检验报告），12（检查报告），15（病理报告），28（出院报告），29（入院报告），210（门诊病历），212（手术记录），218（诊断证明），363（心电图），27（内窥镜检查），215（处方单），219（免疫接种证明），301（C14呼气试验）。如果不清楚报告类型，可以使用分类引擎，该字段传0（同时IsUsedClassify字段必须为True，否则无法输出结果） */
  Type: number;
  /** 是否使用分类引擎，当不确定报告类型时，可以使用收费的报告分类引擎服务。若该字段为 False，则 Type 字段不能为 0，否则无法输出结果。注意：当 IsUsedClassify 为True 时，表示使用收费的报告分类服务，将会产生额外的费用，具体收费标准参见 [购买指南的产品价格](https://cloud.tencent.com/document/product/1314/54264)。 */
  IsUsedClassify: boolean;
  /** 图片处理参数 */
  HandleParam?: HandleParam;
  /** 图片列表，目前只支持传入一张图片，需要是图片base64编码，图片url暂不支持 */
  ImageInfoList?: ImageInfo[];
  /** 后付费的用户类型，新客户传1，老客户可不传或传 0。2022 年 12 月 15 新增了计费项，在此时间之前已经通过商务指定优惠价格的大客户，请不传这个字段或传 0，如果传 1 会导致以前获得的折扣价格失效。在 2022 年 12 月 15 日之后，通过商务指定优惠价格的大客户请传 1。 */
  UserType?: number;
  /** 可选。用于指定不同报告使用的结构化引擎版本，不同版本返回的JSON 数据结果不兼容。若不指定版本号，就默认用旧的版本号。（1）检验报告 11，默认使用 V2，最高支持 V3。（2）病理报告 15，默认使用 V1，最高支持 V2。（3）入院记录29、出院记录 28、病历记录 216、病程记录 217、门诊记录 210，默认使用 V1，最高支持 V2。 */
  ReportTypeVersion?: ReportTypeVersion[];
  /** 可选。 图片OCR信息列表，每一个元素是一张图片的OCR结果。适用于不想将医疗报告图片传入腾讯云的客户，客户可对图片OCR信息中的敏感信息去除之后再传入。与 ImageInfoList 二选一，同时存在则使用OcrInfoList */
  OcrInfoList?: OcrInfo[];
}

declare interface ImageToObjectResponse {
  /** 报告结构化结果 */
  Template?: Template;
  /** 多级分类结果 */
  TextTypeList?: TextType[];
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
  /** PDF文件中的文字是否为文本内容.如果该字段为true,那么就会自动判断是电子版还是图片，自动选择直接读取文字还是 OCR 方式.如果该字段为false, 那么始终采用 OCR 方式 */
  TextBasedPdfFlag?: boolean;
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
  /** PDF文件中的文字是否为文本内容.如果该字段为true,那么就会自动判断是电子版还是图片，自动选择直接读取文字还是 OCR 方式.如果该字段为false, 那么始终采用 OCR 方式 */
  TextBasedPdfFlag?: boolean;
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
  /** 药品说明书结构化接口 {@link DrugInstructionObjectRequest} {@link DrugInstructionObjectResponse} */
  DrugInstructionObject(data: DrugInstructionObjectRequest, config?: AxiosRequestConfig): AxiosPromise<DrugInstructionObjectResponse>;
  /** 医疗报告图片脱敏接口 {@link ImageMaskRequest} {@link ImageMaskResponse} */
  ImageMask(data: ImageMaskRequest, config?: AxiosRequestConfig): AxiosPromise<ImageMaskResponse>;
  /** 图片脱敏-异步接口 {@link ImageMaskAsyncRequest} {@link ImageMaskAsyncResponse} */
  ImageMaskAsync(data: ImageMaskAsyncRequest, config?: AxiosRequestConfig): AxiosPromise<ImageMaskAsyncResponse>;
  /** 图片脱敏-异步获取结果接口 {@link ImageMaskAsyncGetResultRequest} {@link ImageMaskAsyncGetResultResponse} */
  ImageMaskAsyncGetResult(data: ImageMaskAsyncGetResultRequest, config?: AxiosRequestConfig): AxiosPromise<ImageMaskAsyncGetResultResponse>;
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
