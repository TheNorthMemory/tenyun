/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 广告文字识别结果 */
declare interface AdvertiseTextDetection {
  /** 识别出的文本行内容 */
  DetectedText: string;
  /** 置信度 0 ~100 */
  Confidence: number;
  /** 文本行坐标，以四个顶点坐标表示 */
  Polygon: Coord[];
  /** 此字段为扩展字段。GeneralBasicOcr接口返回段落信息Parag，包含ParagNo。 */
  AdvancedInfo: string;
}

/** 航空运输电子客票行程单信息 */
declare interface AirTicketInfo {
  /** 旅客姓名 */
  PassengerName?: string;
  /** 有效身份证件号码 */
  ValidIdNumber?: string;
  /** 签注 */
  Endorsement?: string;
  /** GP单号 */
  NumberOfGPOrder?: string;
  /** 发票号码 */
  ElectronicInvoiceAirTransportReceiptNumber?: string;
  /** 机票详细信息元组 */
  DetailInformationOfAirTicketTuple?: DetailInformationOfAirTicketTupleList[];
  /** 票价 */
  Fare?: string;
  /** 燃油附加费 */
  FuelSurcharge?: string;
  /** 增值税税率 */
  VatRate?: string;
  /** 增值税税额 */
  VatTaxAmount?: string;
  /** 民航发展基金 */
  CivilAviationDevelopmentFund?: string;
  /** 其他税费 */
  OtherTaxes?: string;
  /** 合计 */
  TotalAmount?: string;
  /** 电子客票号码 */
  ElectronicTicketNum?: string;
  /** 验证码 */
  VerificationCode?: string;
  /** 提示信息 */
  PromptInformation?: string;
  /** 保险费 */
  Insurance?: string;
  /** 销售网点代号 */
  AgentCode?: string;
  /** 填开单位 */
  IssueParty?: string;
  /** 填开时间 */
  IssueDate?: string;
  /** 开具状态 */
  IssuingStatus?: string;
  /** 国内国际标识 */
  MarkingOfDomesticOrInternational?: string;
  /** 购买方名称 */
  NameOfPurchaser?: string;
  /** 销售方名称 */
  NameOfSeller?: string;
  /** 统一社会信用代码 */
  UnifiedSocialCreditCodeOfPurchaser?: string;
}

/** 机票行程单 */
declare interface AirTransport {
  /** 发票名称 */
  Title?: string;
  /** 电子客票号码 */
  Number?: string;
  /** 校验码 */
  CheckCode?: string;
  /** 印刷序号 */
  SerialNumber?: string;
  /** 开票日期 */
  Date?: string;
  /** 销售单位代号 */
  AgentCode?: string;
  /** 销售单位代号第一行 */
  AgentCodeFirst?: string;
  /** 销售单位代号第二行 */
  AgentCodeSecond?: string;
  /** 姓名 */
  UserName?: string;
  /** 身份证号 */
  UserID?: string;
  /** 填开单位 */
  Issuer?: string;
  /** 票价 */
  Fare?: string;
  /** 合计税额 */
  Tax?: string;
  /** 燃油附加费 */
  FuelSurcharge?: string;
  /** 民航发展基金 */
  AirDevelopmentFund?: string;
  /** 保险费 */
  Insurance?: string;
  /** 合计金额（小写） */
  Total?: string;
  /** 发票消费类型 */
  Kind?: string;
  /** 国内国际标签 */
  DomesticInternationalTag?: string;
  /** 客票生效日期 */
  DateStart?: string;
  /** 有效截至日期 */
  DateEnd?: string;
  /** 签注 */
  Endorsement?: string;
  /** 是否存在二维码（1：有，0：无） */
  QRCodeMark?: number;
  /** 条目 */
  FlightItems?: FlightItem[];
}

/** 银行回单识别出的字段 */
declare interface BankSlipInfo {
  /** 识别出的字段名称(关键字)，支持以下字段：付款开户行、收款开户行、付款账号、收款账号、回单类型、回单编号、币种、流水号、凭证号码、交易机构、交易金额、手续费、日期等字段信息。 */
  Name: string;
  /** 识别出的字段名称对应的值，也就是字段Name对应的字符串结果。 */
  Value: string;
  /** 文本行在旋转纠正之后的图像中的像素坐标。 */
  Rect: Rect;
}

/** 汽车票 */
declare interface BusInvoice {
  /** 发票名称 */
  Title?: string;
  /** 是否存在二维码（1：有，0：无） */
  QRCodeMark?: number;
  /** 发票号码 */
  Number?: string;
  /** 发票代码 */
  Code?: string;
  /** 开票日期 */
  Date?: string;
  /** 乘车时间 */
  TimeGetOn?: string;
  /** 乘车日期 */
  DateGetOn?: string;
  /** 出发车站 */
  StationGetOn?: string;
  /** 到达车站 */
  StationGetOff?: string;
  /** 票价 */
  Total?: string;
  /** 姓名 */
  UserName?: string;
  /** 消费类型 */
  Kind?: string;
  /** 身份证号 */
  UserID?: string;
  /** 省 */
  Province?: string;
  /** 市 */
  City?: string;
  /** 乘车地点 */
  PlaceGetOn?: string;
  /** 检票口 */
  GateNumber?: string;
  /** 客票类型 */
  TicketType?: string;
  /** 车型 */
  VehicleType?: string;
  /** 座位号 */
  SeatNumber?: string;
  /** 车次 */
  TrainNumber?: string;
}

/** 汽车票字段信息 */
declare interface BusInvoiceInfo {
  /** 识别出的字段名称(关键字)，支持以下字段：发票代码、发票号码、日期、票价、始发地、目的地、姓名、时间、发票消费类型、身份证号、省、市、开票日期、乘车地点、检票口、客票类型、车型、座位号、车次。 */
  Name: string;
  /** 识别出的字段名称对应的值，也就是字段Name对应的字符串结果。 */
  Value: string;
  /** 文本行在旋转纠正之后的图像中的像素坐标。 */
  Rect: Rect;
}

/** 名片识别结果 */
declare interface BusinessCardInfo {
  /** 识别出的字段名称（关键字，可能重复，比如多个手机），能识别的字段名为：姓名、英文姓名、英文地址、公司、英文公司、职位、英文职位、部门、英文部门、手机、电话、传真、社交帐号、QQ、MSN、微信、微博、邮箱、邮编、网址、公司账号、其他。 */
  Name: string;
  /** 识别出的字段名称对应的值，也就是字段name对应的字符串结果。 */
  Value: string;
  /** 文本行在旋转纠正之后的图像中的像素坐标，表示为（左上角x, 左上角y，宽width，高height） */
  ItemCoord: ItemCoord;
}

/** 候选字符集(包含候选字Character以及置信度Confidence) */
declare interface CandWord {
  /** 候选字符集的单词信息（包括单词Character和单词置信度confidence） */
  CandWords: Words[];
}

/** 购车发票识别结果 */
declare interface CarInvoiceInfo {
  /** 识别出的字段名称(关键字)，支持以下字段：发票代码、 机打代码、 发票号码、 发动机号码、 合格证号、 机打号码、 价税合计(小写)、 销货单位名称、 身份证号码/组织机构代码、 购买方名称、 销售方纳税人识别号、 购买方纳税人识别号、主管税务机关、 主管税务机关代码、 开票日期、 不含税价(小写)、 吨位、增值税税率或征收率、 车辆识别代号/车架号码、 增值税税额、 厂牌型号、 省、 市、 发票消费类型、 销售方电话、 销售方账号、 产地、 进口证明书号、 车辆类型、 机器编号、备注、开票人、限乘人数、商检单号、销售方地址、销售方开户银行、价税合计、发票类型。 */
  Name?: string;
  /** 识别出的字段名称对应的值，也就是字段name对应的字符串结果。 */
  Value?: string;
  /** 字段在旋转纠正之后的图像中的像素坐标。 */
  Rect?: Rect;
  /** 字段在原图中的四点坐标。 */
  Polygon?: Polygon | null;
}

/** 单元格识别结果 */
declare interface CellContent {
  /** 段落编号 */
  ParagNo: number | null;
  /** 字体大小 */
  WordSize: number | null;
}

/** 卡证智能分类结果 */
declare interface ClassifyDetectInfo {
  /** 分类名称，包括：身份证、护照、名片、银行卡、行驶证、驾驶证、港澳台通行证、户口本、港澳台来往内地通行证、港澳台居住证、不动产证、营业执照 */
  Name: string;
  /** 分类类型 */
  Type: string | null;
  /** 位置坐标 */
  Rect: Rect;
}

/** 坐标 */
declare interface Coord {
  /** 横坐标 */
  X: number;
  /** 纵坐标 */
  Y: number;
}

/** 机票详细信息元组 */
declare interface DetailInformationOfAirTicketTupleList {
  /** 出发站（自） */
  DepartureStation?: string;
  /** 目的地（至） */
  DestinationStation?: string;
  /** 航班 */
  FlightSegment?: string;
  /** 航班 */
  Carrier?: string;
  /** 航班号 */
  Flight?: string;
  /** 座位等级 */
  SeatClass?: string;
  /** 日期 */
  CarrierDate?: string;
  /** 时间 */
  DepartureTime?: string;
  /** 客票级别/客票类别 */
  FareBasis?: string;
  /** 客票生效日期 */
  EffectiveDate?: string;
  /** 有效截止日期 */
  ExpirationDate?: string;
  /** 免费行李 */
  FreeBaggageAllowance?: string;
}

/** 单字在原图中的坐标，以四个顶点坐标表示，以左上角为起点，顺时针返回。 */
declare interface DetectedWordCoordPoint {
  /** 单字在原图中的坐标，以四个顶点坐标表示，以左上角为起点，顺时针返回。 */
  WordCoordinate: Coord[];
}

/** 识别出来的单字信息包括单字（包括单字Character和单字置信度confidence） */
declare interface DetectedWords {
  /** 置信度 0 ~100 */
  Confidence: number;
  /** 候选字Character */
  Character: string;
}

/** 文档元素字段 */
declare interface DocumentElement {
  /** 文档元素索引 */
  Index?: number | null;
  /** 元素类型，包括paragraph、table、formula、figure、title、header、footer、figure_text */
  Type?: string | null;
  /** 元素内容，当type为figure或formula(公式识别关闭)时该字段内容为图片的位置 */
  Text?: string | null;
  /** 元素坐标，左上角(x1, y1)，右上角(x2, y2)，右下角(x3, y3)，左下角(x4, y4) */
  Polygon?: Polygon | null;
  /** 元素层级 */
  Level?: number | null;
  /** 入参开启EnableInsetImage后返回，表示在InsetImagePackage中的内嵌图片名称 */
  InsetImageName?: string | null;
  /** 嵌套的文档元素信息，一般包含的是文档内嵌入图片的文字识别结果 */
  Elements?: DocumentElement[] | null;
}

/** 单页文档识别的内容 */
declare interface DocumentRecognizeInfo {
  /** 输入PDF文件的页码，从1开始。输入图片的话值始终为1 */
  PageNumber?: number | null;
  /** 旋转角度 */
  Angle?: number | null;
  /** AI算法识别处理后的图片高度 */
  Height?: number | null;
  /** AI算法识别处理后的图片宽度 */
  Width?: number | null;
  /** 图片的原始高度，输入PDF文件则表示单页PDF转图片之后的图片高度 */
  OriginHeight?: number | null;
  /** 图片的原始宽度，输入PDF文件则表示单页PDF转图片之后的图片宽度 */
  OriginWidth?: number | null;
  /** 文档元素信息 */
  Elements?: DocumentElement[] | null;
  /** 旋转角度 */
  RotatedAngle?: number | null;
}

/** 识别出的字段 */
declare interface DutyPaidProofInfo {
  /** 识别出的字段名称(关键字)，支持以下字段：税号 、纳税人识别号 、纳税人名称 、金额合计大写 、金额合计小写 、填发日期 、税务机关 、填票人。 */
  Name: string;
  /** 识别出的字段名称对应的值，也就是字段Name对应的字符串结果。 */
  Value: string;
  /** 文本行在旋转纠正之后的图像中的像素坐标。 */
  Rect: Rect;
}

/** 全电发票（航空运输电子客票行程单） */
declare interface ElectronicAirTransport {
  /** 发票代码 */
  Code?: string | null;
  /** 发票号码 */
  Number?: string | null;
  /** 开票日期 */
  Date?: string | null;
  /** 金额 */
  Amount?: string | null;
  /** 校验码 */
  CheckCode?: string | null;
  /** 价税合计 */
  Total?: string | null;
  /** 抵扣标志 */
  DeductionMark?: string | null;
  /** 发票状态代码，0正常 1 未更新 2作废 3已红冲 */
  StateCode?: string | null;
  /** 购方识别号 */
  BuyerTaxCode?: string | null;
  /** 购方名称 */
  BuyerName?: string | null;
  /** 合计税额 */
  Tax?: string | null;
  /** 国内国际标识 */
  DomesticInternationalMark?: string | null;
  /** 旅客姓名 */
  PassengerName?: string | null;
  /** 有效身份证件号码 */
  PassengerNo?: string | null;
  /** 电子客票号码 */
  ElectronicNumber?: string | null;
  /** 全电发票（航空运输电子客票行程单）详细信息 */
  ElectronicAirTransportDetails?: ElectronicAirTransportDetail[] | null;
}

/** 全电发票（航空运输电子客票行程单）详细信息 */
declare interface ElectronicAirTransportDetail {
  /** 航段序号 */
  FlightSegment?: string | null;
  /** 始发站 */
  StationGetOn?: string | null;
  /** 目的站 */
  StationGetOff?: string | null;
  /** 承运人 */
  Carrier?: string | null;
  /** 航班号 */
  FlightNumber?: string | null;
  /** 座位等级 */
  SeatLevel?: string | null;
  /** 承运日期 */
  FlightDate?: string | null;
  /** 起飞时间 */
  DepartureTime?: string | null;
  /** 客票级别/客票类别 */
  FareBasis?: string | null;
}

/** 电子发票（机票行程单） */
declare interface ElectronicFlightTicketFull {
  /** 旅客姓名 */
  UserName?: string;
  /** 有效身份证件号码 */
  UserID?: string;
  /** 签注 */
  Endorsement?: string;
  /** GP单号 */
  GPOrder?: string;
  /** 发票号码 */
  Number?: string;
  /** 票价 */
  Fare?: string;
  /** 燃油附加费 */
  FuelSurcharge?: string;
  /** 增值税税率 */
  TaxRate?: string;
  /** 增值税税额 */
  Tax?: string;
  /** 民航发展基金 */
  DevelopmentFund?: string;
  /** 其他税费 */
  OtherTax?: string;
  /** 合计 */
  Total?: string;
  /** 电子客票号码 */
  ElectronicTicketNum?: string;
  /** 验证码 */
  VerificationCode?: string;
  /** 提示信息 */
  PromptInformation?: string;
  /** 保险费 */
  Insurance?: string;
  /** 填开单位 */
  Issuer?: string;
  /** 填开时间 */
  Date?: string;
  /** 国内国际标识 */
  DomesticInternationalTag?: string;
  /** 购买方名称 */
  Buyer?: string;
  /** 销售方名称 */
  Seller?: string;
  /** 统一社会信用代码 */
  BuyerTaxID?: string;
  /** 机票详细信息元组 */
  FlightItems?: FlightItemInfo[];
}

/** 全电发票（铁路电子客票） */
declare interface ElectronicTrainTicket {
  /** 购方名称 */
  BuyerName?: string | null;
  /** 购方识别号 */
  BuyerTaxCode?: string | null;
  /** 发票号码 */
  Number?: string | null;
  /** 开票日期 */
  Date?: string | null;
  /** 价税合计（中文大写） */
  TotalCN?: string | null;
  /** 税额 */
  Tax?: string | null;
  /** 业务类型，0：退票，1:售票 */
  ServiceType?: string | null;
  /** 出发时间 */
  TimeGetOn?: string | null;
  /** 车次 */
  TrainNumber?: string | null;
  /** 发票代码 */
  Code?: string | null;
  /** 席别 */
  SeatType?: string | null;
  /** 乘车日期 */
  DateGetOn?: string | null;
  /** 车厢 */
  TrainCabin?: string | null;
  /** 出发站 */
  StationGetOn?: string | null;
  /** 电子客票号 */
  ElectronicNumber?: string | null;
  /** 姓名 */
  PassengerName?: string | null;
  /** 证件号 */
  PassengerNo?: string | null;
  /** 金额 */
  Amount?: string | null;
  /** 到达站 */
  StationGetOff?: string | null;
  /** 税率 */
  TaxRate?: string | null;
  /** 席位 */
  Seat?: string | null;
  /** 价税合计 */
  Total?: string | null;
  /** 校验码 */
  CheckCode?: string | null;
  /** 发票状态代码，0正常 1 未更新 2作废 3已红冲 */
  StateCode?: string | null;
}

/** 电子发票（火车票） */
declare interface ElectronicTrainTicketFull {
  /** 电子发票类型 */
  TypeOfVoucher?: string;
  /** 电子客票号 */
  ElectronicTicketNum?: string;
  /** 开票日期 */
  Date?: string;
  /** 始发站 */
  StationGetOn?: string;
  /** 到达站 */
  StationGetOff?: string;
  /** 火车号 */
  TrainNumber?: string;
  /** 乘车日期 */
  DateGetOn?: string;
  /** 始发时间 */
  TimeGetOn?: string;
  /** 座位类型 */
  Seat?: string;
  /** 座位号 */
  SeatNumber?: string;
  /** 票价 */
  Fare?: string;
  /** 发票号码 */
  Number?: string;
  /** 身份证号 */
  UserID?: string;
  /** 乘车人姓名 */
  UserName?: string;
  /** 金额 */
  Total?: string;
  /** 税率 */
  TaxRate?: string;
  /** 税额 */
  Tax?: string;
  /** 购买方名称 */
  Buyer?: string;
  /** 统一社会信用代码 */
  BuyerTaxID?: string;
  /** 原发票号码 */
  OriginalNumber?: string;
}

/** 敏感数据加密 */
declare interface Encryption {
  /** 有加密需求的用户，接入传入kms的CiphertextBlob，关于数据加密可查阅[敏感数据加密指引](https://cloud.tencent.com/document/product/866/106048)文档。 */
  CiphertextBlob: string | null;
  /** 有加密需求的用户，传入CBC加密的初始向量（客户自定义字符串，长度16字符）。 */
  Iv: string | null;
  /** 加密使用的算法（支持'AES-256-CBC'、'SM4-GCM'），不传默认为'AES-256-CBC' */
  Algorithm?: string | null;
  /** SM4-GCM算法生成的消息摘要（校验消息完整性时使用） */
  TagList?: string[] | null;
  /** 在使用加密服务时，指定要被加密的字段。本接口默认为EncryptedBody */
  EncryptList?: string[] | null;
}

/** 企业证照单个字段的内容 */
declare interface EnterpriseLicenseInfo {
  /** 识别出的字段名称（关键字），不同证件类型可能不同，证件类型包含企业登记证书、许可证书、企业执照、三证合一类证书；支持以下字段：统一社会信用代码、法定代表人、公司名称、公司地址、注册资金、企业类型、经营范围、成立日期、有效期、开办资金、经费来源、举办单位等； */
  Name?: string;
  /** 识别出的字段名称对应的值，也就是字段Name对应的字符串结果。 */
  Value?: string;
}

/** 金融票据整单识别单个字段的内容 */
declare interface FinanBillInfo {
  /** 识别出的字段名称(关键字)，支持以下字段：【进账单】日期、出票全称、出票账号、出票开户行、收款人全称、收款人账号、收款开户行、大写金额、小写金额、票据种类、票据张数、票据号码；【支票】开户银行、支票种类、凭证号码2、日期、大写金额、小写金额、付款行编号、密码、凭证号码1；【银行承兑汇票】或【商业承兑汇票】出票日期、行号1、行号2、出票人全称、出票人账号、付款行全称、收款人全称、收款人账号、收款人开户行、出票金额大写、出票金额小写、汇票到期日、付款行行号、付款行地址。 */
  Name: string;
  /** 识别出的字段名称对应的值，也就是字段Name对应的字符串结果。 */
  Value: string;
}

/** 金融票据切片识别单个字段的内容 */
declare interface FinanBillSliceInfo {
  /** 识别出的字段名称(关键字)，支持以下字段：大写金额、小写金额、账号、票号1、票号2、收款人、大写日期、同城交换号、地址-省份、地址-城市、付款行全称、支票密码、支票用途。 */
  Name: string;
  /** 识别出的字段名称对应的值，也就是字段Name对应的字符串结果。 */
  Value: string;
}

/** 机票行程单识别结果 */
declare interface FlightInvoiceInfo {
  /** 识别出的字段名称(关键字)，支持以下字段：票价、合计金额、填开日期、有效身份证件号码、电子客票号码、验证码、旅客姓名、填开单位、其他税费、燃油附加费、民航发展基金、保险费、销售单位代号、始发地、目的地、航班号、时间、日期、座位等级、承运人、发票消费类型、国内国际标签、印刷序号、客票级别/类别、客票生效日期、有效期截止日期、免费行李。 */
  Name: string;
  /** 识别出的字段名称对应的值，也就是字段 Name 对应的字符串结果。 */
  Value: string;
  /** 多个行程的字段所在行号，下标从0开始，非行字段或未能识别行号的该值返回-1。 */
  Row: number;
}

/** 机票行程卡条目 */
declare interface FlightItem {
  /** 出发航站楼 */
  TerminalGetOn?: string;
  /** 到达航站楼 */
  TerminalGetOff?: string;
  /** 承运人 */
  Carrier?: string;
  /** 航班号 */
  FlightNumber?: string;
  /** 座位等级 */
  Seat?: string;
  /** 乘机日期 */
  DateGetOn?: string;
  /** 乘机时间 */
  TimeGetOn?: string;
  /** 出发站 */
  StationGetOn?: string;
  /** 到达站 */
  StationGetOff?: string;
  /** 免费行李 */
  Allow?: string;
  /** 客票级别/客票类别 */
  FareBasis?: string;
}

/** 机票详细信息元组 */
declare interface FlightItemInfo {
  /** 出发站 */
  TerminalGetOn?: string;
  /** 到达站 */
  TerminalGetOff?: string;
  /** 承运人 */
  Carrier?: string;
  /** 航班号 */
  FlightNumber?: string;
  /** 座位等级 */
  Seat?: string;
  /** 乘机日期 */
  DateGetOn?: string;
  /** 乘机时间 */
  TimeGetOn?: string;
  /** 客票级别/客票类别 */
  FareBasis?: string;
  /** 免费行李额 */
  Allow?: string;
}

/** 通用机打发票条目 */
declare interface GeneralMachineItem {
  /** 项目名称 */
  Name?: string;
  /** 规格型号 */
  Specification?: string;
  /** 单位 */
  Unit?: string;
  /** 数量 */
  Quantity?: string;
  /** 单价 */
  Price?: string;
  /** 金额 */
  Total?: string;
  /** 税率 */
  TaxRate?: string;
  /** 税额 */
  Tax?: string;
}

/** 通用告警详情 */
declare interface GeneralWarnInfo {
  /** 是否存在该告警 */
  IsWarn?: boolean;
  /** 告警位置四点坐标 */
  Polygon?: Polygon[];
  /** 特殊判定，支持包括Finger：由手指导致的不完整，仅在不完整告警中返回 */
  SpecificMatter?: string;
}

/** 组在图中的序号 */
declare interface GroupInfo {
  /** 每一行的元素 */
  Groups?: LineInfo[];
}

/** 保险单据信息 */
declare interface InsuranceBillInfo {
  /** 识别出的字段名称(关键字)，支持以下字段：【病案首页】姓名、性别、出生日期、出院诊断、疾病编码、入院病情等。【费用清单】医疗参保人员类别、身份证号、入院方式、结账日期、项目、金额等。【结算单】名称、单价、数量、金额、医保内、医保外等。【医疗发票】姓名、性别、住院时间、收费项目、金额、合计等。 */
  Name: string;
  /** 识别出的字段名称对应的值，也就是字段Name对应的字符串结果。 */
  Value: string;
}

/** 票据检测结果 */
declare interface InvoiceDetectInfo {
  /** 识别出的图片在混贴票据图片中的旋转角度。 */
  Angle: number;
  /** 识别出的图片所属的票据类型。-1：未知类型0：出租车发票1：定额发票2：火车票3：增值税发票4：客运限额发票5：机票行程单6：酒店账单7：完税证明8：通用机打发票9：汽车票10：轮船票11：增值税发票（卷票 ）12：购车发票13：过路过桥费发票14：购物小票 */
  Type: number;
  /** 识别出的图片在混贴票据图片中的位置信息。与Angel结合可以得出原图位置，组成RotatedRect((X+0.5\*Width,Y+0.5\*Height), (Width, Height), Angle)，详情可参考OpenCV文档。 */
  Rect: Rect;
  /** 入参 ReturnImage 为 True 时返回 Base64 编码后的图片。 */
  Image: string | null;
}

/** 通用机打发票信息 */
declare interface InvoiceGeneralInfo {
  /** 识别出的字段名称(关键字)，支持以下字段识别（注：下划线表示一个字段）：发票代码、发票号码、日期、合计金额(小写)、合计金额(大写)、购买方识别号、销售方识别号、校验码、购买方名称、销售方名称、时间、种类、发票消费类型、省、市、是否有公司印章、发票名称、购买方地址、电话、销售方地址、电话、购买方开户行及账号、销售方开户行及账号、经办人取票用户、经办人支付信息、经办人商户号、经办人订单号、货物或应税劳务、服务名称、数量、单价、税率、税额、金额、单位、规格型号、合计税额、合计金额、备注、收款人、复核、开票人、密码区、行业分类 */
  Name: string;
  /** 识别出的字段名称对应的值，也就是字段Name对应的字符串结果。 */
  Value: string;
  /** 文本行在旋转纠正之后的图像中的像素坐标。 */
  Rect: Rect;
}

/** 混贴票据单张发票识别信息 */
declare interface InvoiceItem {
  /** 识别结果。OK：表示识别成功；FailedOperation.UnsupportedInvoice：表示不支持识别；FailedOperation.UnKnowError：表示识别失败；其它错误码见各个票据接口的定义。 */
  Code?: string;
  /** 识别出的图片所属的票据类型。-1：未知类型0：出租车发票1：定额发票2：火车票3：增值税发票5：机票行程单8：通用机打发票9：汽车票10：轮船票11：增值税发票（卷票）12：购车发票13：过路过桥费发票15：非税发票16：全电发票17：医疗发票 */
  Type?: number;
  /** 该发票在原图片中的四点坐标。 */
  Polygon?: Polygon;
  /** 识别出的图片在混贴票据图片中的旋转角度。 */
  Angle?: number;
  /** 识别到的内容。 */
  SingleInvoiceInfos?: SingleInvoiceItem;
  /** 发票处于识别图片或PDF文件中的页教，默认从1开始。 */
  Page?: number;
  /** 发票详细类型，详见票据识别（高级版）接口文档说明中 SubType 返回值说明 */
  SubType?: string;
  /** 发票类型描述，详见票据识别（高级版）接口文档说明中 TypeDescription 返回值说明 */
  TypeDescription?: string;
  /** 切割单图文件，Base64编码后的切图后的图片文件，开启 EnableCutImage 后进行返回 */
  CutImage?: string;
  /** 发票详细类型描述，详见上方 SubType 返回值说明 */
  SubTypeDescription?: string;
  /** 该发票中所有字段坐标信息。包括字段英文名称、字段值所在位置四点坐标、字段所属行号，具体内容请点击左侧链接。 */
  ItemPolygon?: ItemPolygonInfo[];
}

/** 文本行在旋转纠正之后的图像中的像素坐标，表示为（左上角x, 左上角y，宽width，高height） */
declare interface ItemCoord {
  /** 左上角x */
  X: number;
  /** 左上角y */
  Y: number;
  /** 宽width */
  Width: number;
  /** 高height */
  Height: number;
}

/** 智能结构化元素组 */
declare interface ItemInfo {
  /** key信息组 */
  Key?: Key | null;
  /** Value信息组 */
  Value?: Value | null;
}

/** 发票字段坐标信息。包括字段英文名称、字段值所在位置的四点坐标、字段所属行号，具体内容请点击左侧链接。 */
declare interface ItemPolygonInfo {
  /** 发票的英文字段名称（如Title） */
  Key?: string;
  /** 字段值所在位置的四点坐标 */
  Polygon?: Polygon;
  /** 字段属于第几行，用于相同字段的排版，如发票明细表格项目，普通字段使用默认值为-1，表示无列排版。 */
  Row?: number;
}

/** key信息组 */
declare interface Key {
  /** 自动识别的字段名称 */
  AutoName?: string;
  /** 定义的字段名称（传key的名称） */
  ConfigName?: string | null;
}

/** 全部车牌信息 */
declare interface LicensePlateInfo {
  /** 识别出的车牌号码。 */
  Number?: string;
  /** 置信度，0 - 100 之间。 */
  Confidence?: number;
  /** 文本行在原图片中的像素坐标框。 */
  Rect?: Rect;
  /** 识别出的车牌颜色，目前支持颜色包括 “白”、“黑”、“蓝”、“绿“、“黄”、“黄绿”、“临牌”、“喷漆”、“其它”。 */
  Color?: string;
}

/** 按行输出，行序号 */
declare interface LineInfo {
  /** 每行的一个元素 */
  Lines?: ItemInfo[];
}

/** 通用机打发票 */
declare interface MachinePrintedInvoice {
  /** 发票名称 */
  Title?: string;
  /** 是否存在二维码（1：有，0：无） */
  QRCodeMark?: number;
  /** 发票代码 */
  Code?: string;
  /** 发票号码 */
  Number?: string;
  /** 开票日期 */
  Date?: string;
  /** 时间 */
  Time?: string;
  /** 校验码 */
  CheckCode?: string;
  /** 密码区 */
  Ciphertext?: string;
  /** 种类 */
  Category?: string;
  /** 税前金额 */
  PretaxAmount?: string;
  /** 价税合计（小写） */
  Total?: string;
  /** 价税合计（大写） */
  TotalCn?: string;
  /** 合计税额 */
  Tax?: string;
  /** 行业分类 */
  IndustryClass?: string;
  /** 销售方名称 */
  Seller?: string;
  /** 销售方纳税人识别号 */
  SellerTaxID?: string;
  /** 销售方地址电话 */
  SellerAddrTel?: string;
  /** 销售方银行账号 */
  SellerBankAccount?: string;
  /** 购买方名称 */
  Buyer?: string;
  /** 购买方纳税人识别号 */
  BuyerTaxID?: string;
  /** 购买方地址电话 */
  BuyerAddrTel?: string;
  /** 购买方银行账号 */
  BuyerBankAccount?: string;
  /** 发票消费类型 */
  Kind?: string;
  /** 省 */
  Province?: string;
  /** 市 */
  City?: string;
  /** 是否有公司印章（0：没有，1：有） */
  CompanySealMark?: number;
  /** 是否为浙江/广东通用机打发票（0：没有，1：有） */
  ElectronicMark?: number;
  /** 开票人 */
  Issuer?: string;
  /** 收款人 */
  Receiptor?: string;
  /** 复核人 */
  Reviewer?: string;
  /** 备注 */
  Remark?: string;
  /** 经办人支付信息 */
  PaymentInfo?: string;
  /** 经办人取票用户 */
  TicketPickupUser?: string;
  /** 经办人商户号 */
  MerchantNumber?: string;
  /** 经办人订单号 */
  OrderNumber?: string;
  /** 条目 */
  GeneralMachineItems?: GeneralMachineItem[];
}

/** 港澳台来往内地通行证背面字段信息 */
declare interface MainlandTravelPermitBackInfos {
  /** String	证件类别， 如：台湾居民来往大陆通行证、港澳居民来往内地通行证。 */
  Type?: string | null;
  /** 卡证背面的中文姓名 */
  Name?: string | null;
  /** 卡证背面的身份证号码 */
  IDNumber?: string | null;
  /** 历史通行证号码 */
  HistoryNumber?: string | null;
}

/** 医疗票据信息 */
declare interface MedicalInvoice {
  /** 发票名称 */
  Title?: string;
  /** 发票代码 */
  Code?: string;
  /** 发票号码 */
  Number?: string;
  /** 价税合计（小写） */
  Total?: string;
  /** 价税合计（大写） */
  TotalCn?: string;
  /** 开票日期 */
  Date?: string;
  /** 校验码 */
  CheckCode?: string;
  /** 发票属地 */
  Place?: string;
  /** 复核人 */
  Reviewer?: string;
}

/** 医疗发票识别结果 */
declare interface MedicalInvoiceInfo {
  /** 医疗发票识别结果条目 */
  MedicalInvoiceItems: MedicalInvoiceItem[];
}

/** 医疗发票识别结果 */
declare interface MedicalInvoiceItem {
  /** 识别出的字段名称分类name票据基本信息发票名称票据代码票据号码电子票据代码电子票据号码交款人统一社会信用代码校验码交款人开票日期收款单位复核人收款人业务流水号门诊号就诊日期医疗机构类型医保类型医保编号性别医保统筹基金支付其他支付个人账户支付个人现金支付个人自付个人自费病历号住院号住院科别住院时间预缴金额补缴金额退费金额发票属地发票类型总金额总金额大写总金额小写收费大项大项名称大项金额收费细项项目名称数量单位金额备注票据其他信息入院时间出院时间住院天数自付二自付一起付金额超封顶金额自费本次医保范围内金额累计医保内范围金额门诊大额支付残军补助支付年度门诊大额累计支付单位补充险[原公疗]支付社会保障卡号姓名交易流水号本次支付后个人账户余额基金支付现金支付复核自负结算方式医保统筹/公医记账其他个人支付金额欠费退休补充支付医院类型退款补收附加支付分类自负其它预交款个人缴费 */
  Name: string;
  /** 识别出的字段名称对应的值，也就是字段name对应的字符串结果 */
  Content: string;
  /** 识别出的文本行四点坐标 */
  Vertex: Polygon | null;
  /** 识别出的文本行在旋转纠正之后的图像中的像素坐标 */
  Coord: Rect | null;
}

/** 混贴票据单张发票识别信息 */
declare interface MixedInvoiceItem {
  /** 识别结果。OK：表示识别成功；FailedOperation.UnsupportedInvioce：表示不支持识别；FailedOperation.UnKnowError：表示识别失败；其它错误码见各个票据接口的定义。 */
  Code: string;
  /** 识别出的图片所属的票据类型。-1：未知类型0：出租车发票1：定额发票2：火车票3：增值税发票5：机票行程单8：通用机打发票9：汽车票10：轮船票11：增值税发票（卷票）12：购车发票13：过路过桥费发票15：非税发票16：全电发票 */
  Type: number;
  /** 识别出的图片在混贴票据图片中的位置信息。与Angel结合可以得出原图位置，组成RotatedRect((X+0.5\*Width,Y+0.5\*Height), (Width, Height), Angle)，详情可参考OpenCV文档。 */
  Rect: Rect;
  /** 识别出的图片在混贴票据图片中的旋转角度。 */
  Angle: number;
  /** 识别到的内容。 */
  SingleInvoiceInfos: SingleInvoiceInfo[];
  /** 发票处于识别图片或PDF文件中的页教，默认从1开始。 */
  Page?: number;
}

/** 机动车销售统一发票 */
declare interface MotorVehicleSaleInvoice {
  /** 发票名称 */
  Title?: string;
  /** 发票代码 */
  Code?: string;
  /** 发票号码 */
  Number?: string;
  /** 开票日期 */
  Date?: string;
  /** 税前金额 */
  PretaxAmount?: string;
  /** 价税合计（小写） */
  Total?: string;
  /** 价税合计（大写） */
  TotalCn?: string;
  /** 销售方名称 */
  Seller?: string;
  /** 销售方单位代码 */
  SellerTaxID?: string;
  /** 销售方电话 */
  SellerTel?: string;
  /** 销售方地址 */
  SellerAddress?: string;
  /** 销售方开户行 */
  SellerBank?: string;
  /** 销售方银行账号 */
  SellerBankAccount?: string;
  /** 购买方名称 */
  Buyer?: string;
  /** 购买方纳税人识别号 */
  BuyerTaxID?: string;
  /** 购买方身份证号码/组织机构代码 */
  BuyerID?: string;
  /** 主管税务机关 */
  TaxAuthorities?: string;
  /** 主管税务机关代码 */
  TaxAuthoritiesCode?: string;
  /** 车辆识别代码 */
  VIN?: string;
  /** 厂牌型号 */
  VehicleModel?: string;
  /** 发动机号码 */
  VehicleEngineCode?: string;
  /** 合格证号 */
  CertificateNumber?: string;
  /** 商检单号 */
  InspectionNumber?: string;
  /** 机器编号 */
  MachineID?: string;
  /** 车辆类型 */
  VehicleType?: string;
  /** 发票消费类型 */
  Kind?: string;
  /** 省 */
  Province?: string;
  /** 市 */
  City?: string;
  /** 合计税额 */
  Tax?: string;
  /** 税率 */
  TaxRate?: string;
  /** 是否有公司印章（0：没有，1：有） */
  CompanySealMark?: number;
  /** 吨位 */
  Tonnage?: string;
  /** 备注 */
  Remark?: string;
  /** 发票联次 */
  FormType?: string;
  /** 发票联名 */
  FormName?: string;
  /** 开票人 */
  Issuer?: string;
  /** 进口证明书号 */
  TaxNum?: string;
  /** 完税凭证号码 */
  TaxPayNum?: string;
  /** 税控码 */
  TaxCode?: string;
  /** 限乘人数 */
  MaxPeopleNum?: string;
  /** 产地 */
  Origin?: string;
  /** 机打发票代码 */
  MachineCode?: string;
  /** 机打发票号码 */
  MachineNumber?: string;
  /** 是否存在二维码（1：有，0：无） */
  QRCodeMark?: number;
}

/** 非税收入 */
declare interface NonTaxIncomeBill {
  /** 发票名称 */
  Title?: string;
  /** 发票号码 */
  Number?: string;
  /** 发票代码 */
  Code?: string;
  /** 校验码 */
  CheckCode?: string;
  /** 开票日期 */
  Date?: string;
  /** 价税合计（小写） */
  Total?: string;
  /** 价税合计（大写） */
  TotalCn?: string;
  /** 交款人名称 */
  Buyer?: string;
  /** 交款人纳税人识别号 */
  BuyerTaxID?: string;
  /** 收款人名称 */
  Seller?: string;
  /** 收款单位名称 */
  SellerCompany?: string;
  /** 备注 */
  Remark?: string;
  /** 币种 */
  CurrencyCode?: string;
  /** 复核人 */
  Reviewer?: string;
  /** 是否存在二维码（1：有，0：无） */
  QRCodeMark?: number;
  /** 其他信息 */
  OtherInfo?: string;
  /** 缴款码 */
  PaymentCode?: string;
  /** 执收单位编码 */
  ReceiveUnitCode?: string;
  /** 执收单位名称 */
  Receiver?: string;
  /** 经办人 */
  Operator?: string;
  /** 付款人账号 */
  PayerAccount?: string;
  /** 付款人开户银行 */
  PayerBank?: string;
  /** 收款人账号 */
  ReceiverAccount?: string;
  /** 收款人开户银行 */
  ReceiverBank?: string;
  /** 条目 */
  NonTaxItems?: NonTaxItem[];
}

/** 非税收入条目 */
declare interface NonTaxItem {
  /** 项目编码 */
  ItemID?: string;
  /** 项目名称 */
  Name?: string;
  /** 单位 */
  Unit?: string;
  /** 数量 */
  Quantity?: string;
  /** 标准 */
  Standard?: string;
  /** 金额 */
  Total?: string;
}

/** 网约车行程单识别结果 */
declare interface OnlineTaxiItineraryInfo {
  /** 识别出的字段名称(关键字)，支持以下字段：发票代码、 机打代码、 发票号码、 发动机号码、 合格证号、 机打号码、 价税合计(小写)、 销货单位名称、 身份证号码/组织机构代码、 购买方名称、 销售方纳税人识别号、 购买方纳税人识别号、主管税务机关、 主管税务机关代码、 开票日期、 不含税价(小写)、 吨位、增值税税率或征收率、 车辆识别代号/车架号码、 增值税税额、 厂牌型号、 省、 市、 发票消费类型、 销售方电话、 销售方账号、 产地、 进口证明书号、 车辆类型、 机器编号、备注、开票人、限乘人数、商检单号、销售方地址、销售方开户银行、价税合计、发票类型。 */
  Name: string;
  /** 识别出的字段名称对应的值，也就是字段name对应的字符串结果。 */
  Value: string;
  /** 字段所在行，下标从0开始，非行字段或未能识别行号的返回-1 */
  Row: number;
}

/** 其他发票 */
declare interface OtherInvoice {
  /** 发票名称 */
  Title?: string;
  /** 金额 */
  Total?: string;
  /** 列表 */
  OtherInvoiceListItems?: OtherInvoiceItem[];
  /** 表格 */
  OtherInvoiceTableItems?: OtherInvoiceList[];
  /** 发票日期 */
  Date?: string;
}

/** OtherInvoiceItem */
declare interface OtherInvoiceItem {
  /** 票面key值 */
  Name?: string;
  /** 票面value值 */
  Value?: string;
}

/** 其他票Table */
declare interface OtherInvoiceList {
  /** 列表 */
  OtherInvoiceItemList?: OtherInvoiceItem[];
}

/** 通行费发票信息 */
declare interface PassInvoiceInfo {
  /** 通行费车牌号 */
  NumberPlate: string;
  /** 通行费类型 */
  Type: string;
  /** 通行日期起 */
  PassDateBegin: string;
  /** 通行日期止 */
  PassDateEnd: string;
  /** 税收分类编码 */
  TaxClassifyCode: string;
}

/** 信息区证件内容 */
declare interface PassportRecognizeInfos {
  /** 证件类型（护照信息页识别结果） */
  Type?: string;
  /** 发行国家（护照信息页识别结果） */
  IssuingCountry?: string;
  /** 护照号码（护照信息页识别结果） */
  PassportID?: string;
  /** 姓（护照信息页识别结果） */
  Surname?: string;
  /** 名（护照信息页识别结果） */
  GivenName?: string;
  /** 姓名（护照信息页识别结果） */
  Name?: string;
  /** 国籍信息（护照信息页识别结果） */
  Nationality?: string;
  /** 出生日期（护照信息页识别结果） */
  DateOfBirth?: string;
  /** 性别（护照信息页识别结果） */
  Sex?: string;
  /** 发行日期（护照信息页识别结果） */
  DateOfIssuance?: string;
  /** 截止日期（护照信息页识别结果） */
  DateOfExpiration?: string;
  /** 持证人签名（护照信息页识别结果）仅中国大陆护照支持返回此字段，港澳台及境外护照不支持 */
  Signature?: string;
  /** 签发地点（护照信息页识别结果）仅中国大陆护照支持返回此字段，港澳台及境外护照不支持 */
  IssuePlace?: string;
  /** 签发机关（护照信息页识别结果）仅中国大陆护照支持返回此字段，港澳台及境外护照不支持 */
  IssuingAuthority?: string;
}

/** 文本的坐标，以四个顶点坐标表示注意：此字段可能返回 null，表示取不到有效值 */
declare interface Polygon {
  /** 左上顶点坐标 */
  LeftTop: Coord;
  /** 右上顶点坐标 */
  RightTop: Coord;
  /** 右下顶点坐标 */
  RightBottom: Coord;
  /** 左下顶点坐标 */
  LeftBottom: Coord;
}

/** 图片大小 */
declare interface QrcodeImgSize {
  /** 宽 */
  Wide: number;
  /** 高 */
  High: number;
}

/** 二维码/条形码坐标信息 */
declare interface QrcodePositionObj {
  /** 左上顶点坐标（如果是条形码，X和Y都为-1） */
  LeftTop: Coord;
  /** 右上顶点坐标（如果是条形码，X和Y都为-1） */
  RightTop: Coord;
  /** 右下顶点坐标（如果是条形码，X和Y都为-1） */
  RightBottom: Coord;
  /** 左下顶点坐标（如果是条形码，X和Y都为-1） */
  LeftBottom: Coord;
}

/** 二维码/条形码识别结果信息 */
declare interface QrcodeResultsInfo {
  /** 类型（二维码、条形码） */
  TypeName: string;
  /** 二维码/条形码包含的地址 */
  Url: string;
  /** 二维码/条形码坐标 */
  Position: QrcodePositionObj;
}

/** 数学试题识别结构化对象 */
declare interface QuestionBlockObj {
  /** 数学试题识别结构化信息数组 */
  QuestionArr: QuestionObj[];
  /** 题目主体区域检测框在图片中的像素坐标 */
  QuestionBboxCoord: Rect;
}

/** 试题识别结构化信息 */
declare interface QuestionObj {
  /** 题号 */
  QuestionTextNo: string;
  /** 题型：1: "选择题"2: "填空题"3: "解答题" */
  QuestionTextType: number;
  /** 题干 */
  QuestionText: string;
  /** 选择题选项，包含1个或多个option */
  QuestionOptions: string;
  /** 所有子题的question属性 */
  QuestionSubquestion: string;
  /** 示意图检测框在的图片中的像素坐标 */
  QuestionImageCoords: Rect[];
}

/** 定额发票 */
declare interface QuotaInvoice {
  /** 发票名称 */
  Title?: string;
  /** 发票代码 */
  Code?: string;
  /** 发票号码 */
  Number?: string;
  /** 价税合计（小写） */
  Total?: string;
  /** 价税合计（大写） */
  TotalCn?: string;
  /** 发票消费类型 */
  Kind?: string;
  /** 省 */
  Province?: string;
  /** 市 */
  City?: string;
  /** 是否存在二维码（1：有，0：无） */
  QRCodeMark?: number;
  /** 是否有公司印章（0：没有，1：有） */
  CompanySealMark?: number;
}

/** 铁路电子客票信息 */
declare interface RailwayTicketInfo {
  /** 电子发票类型 */
  TypeOfVoucher?: string;
  /** 电子客票号 */
  ElectronicTicketNum?: string;
  /** 开票日期 */
  DateOfIssue?: string;
  /** 售票或退票类型 */
  TypeOfBusiness?: string;
  /** 始发站 */
  DepartureStation?: string;
  /** 始发站英文 */
  PhonicsOfDepartureStation?: string;
  /** 到达站 */
  DestinationStation?: string;
  /** 到达站英文 */
  PhonicsOfDestinationStation?: string;
  /** 火车号 */
  TrainNumber?: string;
  /** 火车出发日期 */
  TravelDate?: string;
  /** 始发时间 */
  DepartureTime?: string;
  /** 空调特点 */
  AirConditioningCharacteristics?: string;
  /** 座位类型 */
  SeatLevel?: string;
  /** 火车第几车 */
  Carriage?: string;
  /** 座位号 */
  Seat?: string;
  /** 票价 */
  Fare?: string;
  /** 发票号码 */
  ElectronicInvoiceRailwayETicketNumber?: string;
  /** 身份证号 */
  IdNumber?: string;
  /** 姓名 */
  Name?: string;
  /** 金额 */
  TotalAmountExcludingTax?: string;
  /** 税率 */
  TaxRate?: string;
  /** 税额 */
  TaxAmount?: string;
  /** 购买方名称 */
  NameOfPurchaser?: string;
  /** 统一社会信用代码 */
  UnifiedSocialCreditCodeOfPurchaser?: string;
  /** 原发票号码 */
  NumberOfOriginalInvoice?: string;
}

/** ReconstructDocument配置选项 */
declare interface ReconstructDocumentConfig {
  /** 生成的Markdown中是否嵌入图片 */
  EnableInsetImage?: boolean;
}

/** 矩形坐标 */
declare interface Rect {
  /** 左上角x */
  X: number;
  /** 左上角y */
  Y: number;
  /** 宽度 */
  Width: number;
  /** 高度 */
  Height: number;
}

/** 反光点覆盖区域详情结果 */
declare interface ReflectDetailInfo {
  /** NationalEmblem 国徽位置Portrait 人像照片位置RecognitionField 识别字段位置Others 其他位置 */
  Position?: string;
}

/** 印章信息 */
declare interface SealInfo {
  /** 印章主体内容 */
  SealBody: string;
  /** 印章坐标 */
  Location: Rect;
  /** 印章其它文本内容 */
  OtherTexts: string[];
  /** 印章类型，表示为:圆形印章：0椭圆形印章：1方形印章：2菱形印章：3三角形印章：4 */
  SealShape: string;
}

/** 轮船票字段信息 */
declare interface ShipInvoiceInfo {
  /** 识别出的字段名称(关键字)，支持以下字段：发票代码、发票号码、日期、票价、始发地、目的地、姓名、时间、发票消费类型、省、市、币种。 */
  Name: string;
  /** 识别出的字段名称对应的值，也就是字段Name对应的字符串结果。 */
  Value: string;
  /** 文本行在旋转纠正之后的图像中的像素坐标。 */
  Rect: Rect;
}

/** 轮船票 */
declare interface ShippingInvoice {
  /** 发票名称 */
  Title?: string;
  /** 是否存在二维码（1：有，0：无） */
  QRCodeMark?: number;
  /** 发票代码 */
  Code?: string;
  /** 发票号码 */
  Number?: string;
  /** 姓名 */
  UserName?: string;
  /** 日期 */
  Date?: string;
  /** 时间 */
  Time?: string;
  /** 出发车站 */
  StationGetOn?: string;
  /** 到达车站 */
  StationGetOff?: string;
  /** 票价 */
  Total?: string;
  /** 发票消费类型 */
  Kind?: string;
  /** 省 */
  Province?: string;
  /** 市 */
  City?: string;
  /** 币种 */
  CurrencyCode?: string;
}

/** 混贴票据中单张发票的内容 */
declare interface SingleInvoiceInfo {
  /** 识别出的字段名称 */
  Name: string;
  /** 识别出的字段名称对应的值，也就是字段name对应的字符串结果。 */
  Value: string;
  /** 字段属于第几行，用于相同字段的排版，如发票明细表格项目，普通字段使用默认值为-1，表示无列排版。 */
  Row: number;
}

/** 混贴票据中单张发票的内容 */
declare interface SingleInvoiceItem {
  /** 增值税专用发票 */
  VatSpecialInvoice?: VatInvoiceInfo | null;
  /** 增值税普通发票 */
  VatCommonInvoice?: VatInvoiceInfo | null;
  /** 增值税电子普通发票 */
  VatElectronicCommonInvoice?: VatInvoiceInfo | null;
  /** 增值税电子专用发票 */
  VatElectronicSpecialInvoice?: VatInvoiceInfo | null;
  /** 区块链电子发票 */
  VatElectronicInvoiceBlockchain?: VatInvoiceInfo | null;
  /** 增值税电子普通发票(通行费) */
  VatElectronicInvoiceToll?: VatInvoiceInfo | null;
  /** 电子发票(专用发票) */
  VatElectronicSpecialInvoiceFull?: VatElectronicInfo | null;
  /** 电子发票(普通发票) */
  VatElectronicInvoiceFull?: VatElectronicInfo | null;
  /** 通用机打发票 */
  MachinePrintedInvoice?: MachinePrintedInvoice | null;
  /** 汽车票 */
  BusInvoice?: BusInvoice | null;
  /** 轮船票 */
  ShippingInvoice?: ShippingInvoice | null;
  /** 过路过桥费发票 */
  TollInvoice?: TollInvoice | null;
  /** 其他发票 */
  OtherInvoice?: OtherInvoice | null;
  /** 机动车销售统一发票 */
  MotorVehicleSaleInvoice?: MotorVehicleSaleInvoice | null;
  /** 二手车销售统一发票 */
  UsedCarPurchaseInvoice?: UsedCarPurchaseInvoice | null;
  /** 增值税普通发票(卷票) */
  VatInvoiceRoll?: VatInvoiceRoll | null;
  /** 出租车发票 */
  TaxiTicket?: TaxiTicket | null;
  /** 定额发票 */
  QuotaInvoice?: QuotaInvoice | null;
  /** 机票行程单 */
  AirTransport?: AirTransport | null;
  /** 非税收入通用票据 */
  NonTaxIncomeGeneralBill?: NonTaxIncomeBill | null;
  /** 非税收入一般缴款书(电子) */
  NonTaxIncomeElectronicBill?: NonTaxIncomeBill | null;
  /** 火车票 */
  TrainTicket?: TrainTicket | null;
  /** 医疗门诊收费票据（电子） */
  MedicalOutpatientInvoice?: MedicalInvoice | null;
  /** 医疗住院收费票据（电子） */
  MedicalHospitalizedInvoice?: MedicalInvoice | null;
  /** 增值税销货清单 */
  VatSalesList?: VatInvoiceInfo | null;
  /** 电子发票（火车票） */
  ElectronicTrainTicketFull?: ElectronicTrainTicketFull | null;
  /** 电子发票（机票行程单） */
  ElectronicFlightTicketFull?: ElectronicFlightTicketFull | null;
}

/** 智慧表单上传文件信息 */
declare interface SmartFormFileUrl {
  /** 文件url地址 */
  FileUrl: string;
  /** 文件的顺序，顺序从1开始 */
  FileOrderNumber: number;
}

/** 智能结构化识别 */
declare interface StructuralItem {
  /** 识别出的字段名称(关键字)。 */
  Name: string;
  /** 识别出的字段名称对应的值。 */
  Value: string;
  /** 置信度 0 ~100。 */
  Confidence: number;
  /** 文本行在旋转纠正之后的图像中的像素坐标。 */
  ItemCoord: ItemCoord;
  /** 字段所在行号，下标从0开始，非行字段或未能识别行号的该值返回-1。 */
  Row: number;
}

/** 单元格数据 */
declare interface TableCell {
  /** 单元格左上角的列索引 */
  ColTl: number;
  /** 单元格左上角的行索引 */
  RowTl: number;
  /** 单元格右下角的列索引 */
  ColBr: number;
  /** 单元格右下角的行索引 */
  RowBr: number;
  /** 单元格内识别出的字符串文本，若文本存在多行，以换行符"\n"隔开 */
  Text: string;
  /** 单元格类型 */
  Type: string;
  /** 单元格置信度 */
  Confidence: number;
  /** 单元格在图像中的四点坐标 */
  Polygon: Coord[];
  /** 此字段为扩展字段 */
  AdvancedInfo: string | null;
  /** 单元格文本属性 */
  Contents: CellContent[];
}

/** 单元格数据 */
declare interface TableCellInfo {
  /** 单元格左上角的列索引 */
  ColTl: number;
  /** 单元格左上角的行索引 */
  RowTl: number;
  /** 单元格右下角的列索引 */
  ColBr: number;
  /** 单元格右下角的行索引 */
  RowBr: number;
  /** 单元格内识别出的字符串文本，若文本存在多行，以换行符"\n"隔开 */
  Text: string;
  /** 单元格类型 */
  Type: string;
  /** 单元格置信度 */
  Confidence: number;
  /** 单元格在图像中的四点坐标 */
  Polygon: Coord[];
}

/** 表格内容检测 */
declare interface TableDetectInfo {
  /** 单元格内容 */
  Cells: TableCell[] | null;
  /** 表格标题 */
  Titles: TableTitle[] | null;
  /** 图像中的文本块类型，0 为非表格文本，1 为有线表格，2 为无线表格（接口暂不支持日文无线表格识别，若传入日文无线表格，返回0） */
  Type: number | null;
  /** 表格主体四个顶点坐标（依次为左上角，右上角，右下角，左下角） */
  TableCoordPoint: Coord[] | null;
}

/** 表格内容检测 */
declare interface TableInfo {
  /** 单元格内容 */
  Cells: TableCellInfo[] | null;
  /** 图像中的文本块类型，0 为非表格文本，1 为有线表格，2 为无线表格 */
  Type: number | null;
  /** 表格主体四个顶点坐标（依次为左上角，右上角，右下角，左下角） */
  TableCoordPoint: Coord[] | null;
}

/** 表格标题 */
declare interface TableTitle {
  /** 表格名称 */
  Text: string | null;
}

/** 出租车发票 */
declare interface TaxiTicket {
  /** 发票名称 */
  Title?: string;
  /** 是否存在二维码（1：有，0：无） */
  QRCodeMark?: number;
  /** 发票代码 */
  Code?: string;
  /** 发票号码 */
  Number?: string;
  /** 开票日期 */
  Date?: string;
  /** 上车时间 */
  TimeGetOn?: string;
  /** 下车时间 */
  TimeGetOff?: string;
  /** 单价 */
  Price?: string;
  /** 里程 */
  Mileage?: string;
  /** 总金额 */
  Total?: string;
  /** 发票所在地 */
  Place?: string;
  /** 省 */
  Province?: string;
  /** 市 */
  City?: string;
  /** 发票消费类型 */
  Kind?: string;
  /** 车牌号 */
  LicensePlate?: string;
  /** 燃油附加费 */
  FuelFee?: string;
  /** 预约叫车服务费 */
  BookingCallFee?: string;
  /** 是否有公司印章（0：没有，1：有） */
  CompanySealMark?: number;
}

/** 算式识别结果 */
declare interface TextArithmetic {
  /** 识别出的文本行内容 */
  DetectedText: string;
  /** 算式运算结果，true-正确 false-错误或非法参数 */
  Result: boolean;
  /** 保留字段，暂不支持 */
  Confidence: number;
  /** 原图文本行坐标，以四个顶点坐标表示（保留字段，暂不支持） */
  Polygon: Coord[] | null;
  /** 保留字段，暂不支持 */
  AdvancedInfo: string;
  /** 文本行旋转纠正之后在图像中的像素坐标，表示为（左上角x, 左上角y，宽width，高height） */
  ItemCoord: ItemCoord;
  /** 算式题型编号：‘1’: 加减乘除四则‘2’: 加减乘除已知结果求运算因子‘3’: 判断大小‘4’: 约等于估算‘5’: 带余数除法‘6’: 分数四则运算‘7’: 单位换算‘8’: 竖式加减法‘9’: 竖式乘除法‘10’: 脱式计算‘11’: 解方程 */
  ExpressionType: string;
  /** 错题推荐答案，算式运算结果正确返回为""，算式运算结果错误返回推荐答案 (注：暂不支持多个关系运算符（如1<10<7）、无关系运算符（如frac(1,2)+frac(2,3)）、单位换算（如1元=100角）错题的推荐答案返回) */
  Answer: string;
}

/** 文字识别结果 */
declare interface TextDetection {
  /** 识别出的文本行内容 */
  DetectedText: string;
  /** 置信度 0 ~100 */
  Confidence: number;
  /** 文本行坐标，以四个顶点坐标表示 */
  Polygon: Coord[] | null;
  /** 此字段为扩展字段。GeneralBasicOcr接口返回段落信息Parag，包含ParagNo。 */
  AdvancedInfo: string;
  /** 文本行在旋转纠正之后的图像中的像素坐标，表示为（左上角x, 左上角y，宽width，高height） */
  ItemPolygon: ItemCoord;
  /** 识别出来的单字信息包括单字（包括单字Character和单字置信度confidence）， 支持识别的接口：GeneralBasicOCR、GeneralAccurateOCR */
  Words: DetectedWords[];
  /** 单字在原图中的四点坐标， 支持识别的接口：GeneralBasicOCR、GeneralAccurateOCR */
  WordCoordPoint: DetectedWordCoordPoint[];
}

/** 英文识别结果 */
declare interface TextDetectionEn {
  /** 识别出的文本行内容。 */
  DetectedText: string;
  /** 置信度 0 ~100。 */
  Confidence: number;
  /** 文本行在原图中的四点坐标。 */
  Polygon: Coord[] | null;
  /** 此字段为扩展字段。目前EnglishOCR接口返回内容为空。 */
  AdvancedInfo: string;
  /** 英文单词在原图中的四点坐标。 */
  WordCoordPoint: WordCoordPoint[];
  /** 候选字符集(包含候选字Character以及置信度Confidence)。 */
  CandWord: CandWord[];
  /** 识别出来的单词信息（包括单词Character和单词置信度confidence） */
  Words: Words[];
}

/** 识别结果 */
declare interface TextDetectionResult {
  /** 识别出的文本行内容 */
  Value: string;
  /** 坐标，以四个顶点坐标表示 */
  Polygon: Coord[];
}

/** 数学试题识别结果 */
declare interface TextEduPaper {
  /** 识别出的字段名称（关键字） */
  Item: string;
  /** 识别出的字段名称对应的值，也就是字段Item对应的字符串结果 */
  DetectedText: string;
  /** 文本行在旋转纠正之后的图像中的像素坐标，表示为（左上角x, 左上角y，宽width，高height） */
  Itemcoord: ItemCoord;
}

/** 数学公式识别结果 */
declare interface TextFormula {
  /** 识别出的文本行内容 */
  DetectedText: string;
}

/** 文字识别结果 */
declare interface TextGeneralHandwriting {
  /** 识别出的文本行内容 */
  DetectedText: string;
  /** 置信度 0 - 100 */
  Confidence: number;
  /** 文本行坐标，以四个顶点坐标表示 */
  Polygon: Coord[];
  /** 此字段为扩展字段。能返回文本行的段落信息，例如：{\"Parag\":{\"ParagNo\":2}}，其中ParagNo为段落行，从1开始。 */
  AdvancedInfo: string;
  /** 字的坐标数组，以四个顶点坐标表示 */
  WordPolygon: Polygon[] | null;
}

/** 表格识别结果 */
declare interface TextTable {
  /** 单元格左上角的列索引 */
  ColTl: number;
  /** 单元格左上角的行索引 */
  RowTl: number;
  /** 单元格右下角的列索引 */
  ColBr: number;
  /** 单元格右下角的行索引 */
  RowBr: number;
  /** 单元格文字 */
  Text: string;
  /** 单元格类型，包含body（表格主体）、header（表头）、footer（表尾）三种 */
  Type: string;
  /** 置信度 0 ~100 */
  Confidence: number;
  /** 文本行坐标，以四个顶点坐标表示 */
  Polygon: Coord[];
  /** 此字段为扩展字段 */
  AdvancedInfo: string;
}

/** 增值税发票识别结果 */
declare interface TextVatInvoice {
  /** 识别出的字段名称（关键字）。支持以下字段的识别：发票代码、 发票号码、 打印发票代码、 打印发票号码、 开票日期、 购买方识别号、 小写金额、 价税合计(大写)、 销售方识别号、 校验码、 购买方名称、 销售方名称、 税额、 复核、 联次名称、 备注、 联次、 密码区、 开票人、 收款人、 （货物或应税劳务、服务名称）、省、 市、 服务类型、 通行费标志、 是否代开、 是否收购、 合计金额、 是否有公司印章、 发票消费类型、 车船税、 机器编号、 成品油标志、 税率、 合计税额、 （购买方地址、电话）、 （销售方地址、电话）、 单价、 金额、 销售方开户行及账号、 购买方开户行及账号、 规格型号、 发票名称、 单位、 数量、 校验码备选、 校验码后六位备选、发票号码备选、车牌号、类型、通行日期起、通行日期止、发票类型。 */
  Name: string;
  /** 识别出的字段名称对应的值，也就是字段Name对应的字符串结果。 */
  Value: string;
  /** 字段在原图中的中的四点坐标。 */
  Polygon: Polygon | null;
}

/** 行驶证副页正面的识别结果 */
declare interface TextVehicleBack {
  /** 号牌号码 */
  PlateNo?: string | null;
  /** 档案编号 */
  FileNo?: string | null;
  /** 核定人数 */
  AllowNum?: string | null;
  /** 总质量 */
  TotalMass?: string | null;
  /** 整备质量 */
  CurbWeight?: string | null;
  /** 核定载质量 */
  LoadQuality?: string | null;
  /** 外廓尺寸 */
  ExternalSize?: string | null;
  /** 备注 */
  Marks?: string | null;
  /** 检验记录 */
  Record?: string | null;
  /** 准牵引总质量 */
  TotalQuasiMass?: string | null;
  /** 副页编码 */
  SubPageCode?: string | null;
  /** 燃料种类 */
  FuelType?: string | null;
}

/** 行驶证主页正面的识别结果 */
declare interface TextVehicleFront {
  /** 号牌号码 */
  PlateNo: string | null;
  /** 车辆类型 */
  VehicleType: string | null;
  /** 所有人 */
  Owner: string | null;
  /** 住址 */
  Address: string | null;
  /** 使用性质 */
  UseCharacter: string | null;
  /** 品牌型号 */
  Model: string | null;
  /** 车辆识别代号 */
  Vin: string | null;
  /** 发动机号码 */
  EngineNo: string | null;
  /** 注册日期 */
  RegisterDate: string | null;
  /** 发证日期 */
  IssueDate: string | null;
  /** 印章 */
  Seal: string | null;
}

/** 运单识别结果 */
declare interface TextWaybill {
  /** 收件人姓名 */
  RecName: WaybillObj;
  /** 收件人手机号 */
  RecNum: WaybillObj;
  /** 收件人地址 */
  RecAddr: WaybillObj;
  /** 寄件人姓名 */
  SenderName: WaybillObj;
  /** 寄件人手机号 */
  SenderNum: WaybillObj;
  /** 寄件人地址 */
  SenderAddr: WaybillObj;
  /** 运单号 */
  WaybillNum: WaybillObj;
}

/** 过路过桥费发票 */
declare interface TollInvoice {
  /** 发票名称 */
  Title?: string;
  /** 发票代码 */
  Code?: string;
  /** 发票号码 */
  Number?: string;
  /** 价税合计（小写） */
  Total?: string;
  /** 发票消费类型 */
  Kind?: string;
  /** 日期 */
  Date?: string;
  /** 时间 */
  Time?: string;
  /** 入口 */
  Entrance?: string;
  /** 出口 */
  Exit?: string;
  /** 高速标志（0：没有，1：有） */
  HighwayMark?: number;
  /** 是否存在二维码（1：有，0：无） */
  QRCodeMark?: number;
}

/** 过路过桥费字段信息 */
declare interface TollInvoiceInfo {
  /** 识别出的字段名称（关键字）。支持以下字段的识别：发票代码、发票号码、日期、金额、入口、出口、时间、发票消费类型、高速标志。 */
  Name: string;
  /** 识别出的字段名称对应的值，也就是字段Name对应的字符串结果。 */
  Value: string;
  /** 文本行在旋转纠正之后的图像中的像素坐标。 */
  Rect: Rect;
}

/** 火车票 */
declare interface TrainTicket {
  /** 发票名称 */
  Title?: string;
  /** 发票号码 */
  Number?: string;
  /** 乘车日期 */
  DateGetOn?: string;
  /** 乘车时间 */
  TimeGetOn?: string;
  /** 乘车人姓名 */
  Name?: string;
  /** 出发车站 */
  StationGetOn?: string;
  /** 到达车站 */
  StationGetOff?: string;
  /** 座位类型 */
  Seat?: string;
  /** 总金额 */
  Total?: string;
  /** 发票消费类型 */
  Kind?: string;
  /** 序列号 */
  SerialNumber?: string;
  /** 身份证号 */
  UserID?: string;
  /** 检票口 */
  GateNumber?: string;
  /** 车次 */
  TrainNumber?: string;
  /** 手续费 */
  HandlingFee?: string;
  /** 原票价 */
  OriginalFare?: string;
  /** 大写金额 */
  TotalCn?: string;
  /** 座位号 */
  SeatNumber?: string;
  /** 取票地址 */
  PickUpAddress?: string;
  /** 是否始发改签 */
  TicketChange?: string;
  /** 加收票价 */
  AdditionalFare?: string;
  /** 收据号码 */
  ReceiptNumber?: string;
  /** 是否存在二维码（1：有，0：无） */
  QRCodeMark?: number;
  /** 是否仅供报销使用（0：没有，1：有） */
  ReimburseOnlyMark?: number;
  /** 是否有退票费标识（0：没有，1：有） */
  RefundMark?: number;
}

/** 二手车销售统一发票 */
declare interface UsedCarPurchaseInvoice {
  /** 发票名称 */
  Title?: string;
  /** 是否存在二维码（0：没有，1：有） */
  QRCodeMark?: number;
  /** 发票代码 */
  Code?: string;
  /** 发票号码 */
  Number?: string;
  /** 开票日期 */
  Date?: string;
  /** 价税合计（小写） */
  Total?: string;
  /** 价税合计（大写） */
  TotalCn?: string;
  /** 销货单位名称 */
  Seller?: string;
  /** 销售方电话 */
  SellerTel?: string;
  /** 销售方单位代码/个人身份证号 */
  SellerTaxID?: string;
  /** 销售方地址 */
  SellerAddress?: string;
  /** 购买方名称 */
  Buyer?: string;
  /** 购买方单位代码/个人身份证号 */
  BuyerID?: string;
  /** 购买方地址 */
  BuyerAddress?: string;
  /** 购买方电话 */
  BuyerTel?: string;
  /** 二手车市场 */
  CompanyName?: string;
  /** 二手车市场纳税人识别号 */
  CompanyTaxID?: string;
  /** 二手车市场开户银行和账号 */
  CompanyBankAccount?: string;
  /** 二手车市场电话 */
  CompanyTel?: string;
  /** 二手车市场地址 */
  CompanyAddress?: string;
  /** 转入地车辆管理所名称 */
  TransferAdministrationName?: string;
  /** 车牌号 */
  LicensePlate?: string;
  /** 登记证号 */
  RegistrationNumber?: string;
  /** 车辆识别代码 */
  VIN?: string;
  /** 厂牌型号 */
  VehicleModel?: string;
  /** 发票消费类型 */
  Kind?: string;
  /** 省 */
  Province?: string;
  /** 市 */
  City?: string;
  /** 车辆类型 */
  VehicleType?: string;
  /** 备注 */
  Remark?: string;
  /** 发票联次 */
  FormType?: string;
  /** 发票联名 */
  FormName?: string;
  /** 是否有公司印章（0：没有，1：有） */
  CompanySealMark?: number;
  /** 经营拍卖单位 */
  AuctionOrgName?: string;
  /** 经营拍卖单位地址 */
  AuctionOrgAddress?: string;
  /** 经营拍卖单位纳税人识别号 */
  AuctionOrgTaxID?: string;
  /** 经营拍卖单位开户银行账号 */
  AuctionOrgBankAccount?: string;
  /** 经营拍卖单位电话 */
  AuctionOrgPhone?: string;
  /** 开票人 */
  Issuer?: string;
  /** 税控码 */
  TaxCode?: string;
  /** 机器编号 */
  MachineSerialNumber?: string;
  /** 机打发票代码 */
  MachineCode?: string;
  /** 机打发票号码 */
  MachineNumber?: string;
}

/** 二手车销售统一发票信息 */
declare interface UsedVehicleInvoiceInfo {
  /** 所属税局 */
  TaxBureau: string;
  /** 买方单位/个人 */
  Buyer: string;
  /** 买方单位代码/身份证号码 */
  BuyerNo: string;
  /** 买方单位/个人地址 */
  BuyerAddress: string;
  /** 买方单位电话 */
  BuyerTel: string;
  /** 卖方单位/个人 */
  Seller: string;
  /** 卖方单位代码/身份证号码 */
  SellerNo: string;
  /** 卖方单位/个人地址 */
  SellerAddress: string;
  /** 卖方单位电话 */
  SellerTel: string;
  /** 车牌照号 */
  VehicleLicenseNo: string;
  /** 登记证号 */
  RegisterNo: string;
  /** 车架号/车辆识别代码 */
  VehicleIdentifyNo: string;
  /** 转入地车辆管理所名称 */
  ManagementOffice: string;
  /** 车价合计 */
  VehicleTotalPrice: string;
  /** 经营、拍卖单位 */
  Auctioneer: string;
  /** 经营、拍卖单位地址 */
  AuctioneerAddress: string;
  /** 经营、拍卖单位纳税人识别号 */
  AuctioneerTaxpayerNum: string;
  /** 经营、拍卖单位开户银行、账号 */
  AuctioneerBankAccount: string;
  /** 经营、拍卖单位电话 */
  AuctioneerTel: string;
  /** 二手车市场 */
  Market: string;
  /** 二手车市场纳税人识别号 */
  MarketTaxpayerNum: string;
  /** 二手车市场地址 */
  MarketAddress: string;
  /** 二手车市场开户银行账号 */
  MarketBankAccount: string;
  /** 二手车市场电话 */
  MarketTel: string;
}

/** value信息组 */
declare interface Value {
  /** 自动识别的字段内容 */
  AutoContent?: string;
  /** 四点坐标 */
  Coord?: Polygon | null;
}

/** 电子发票返回值 */
declare interface VatElectronicInfo {
  /** 发票名称 */
  Title?: string;
  /** 发票号码 */
  Number?: string;
  /** 开票日期 */
  Date?: string;
  /** 税前金额 */
  PretaxAmount?: string;
  /** 合计税额 */
  Tax?: string;
  /** 价税合计（小写） */
  Total?: string;
  /** 价税合计（大写） */
  TotalCn?: string;
  /** 销售方名称 */
  Seller?: string;
  /** 销售方纳税人识别号 */
  SellerTaxID?: string;
  /** 购买方名称 */
  Buyer?: string;
  /** 购买方纳税人识别号 */
  BuyerTaxID?: string;
  /** 开票人 */
  Issuer?: string;
  /** 备注 */
  Remark?: string;
  /** 小计金额 */
  SubTotal?: string;
  /** 小计税额 */
  SubTax?: string;
  /** 电子发票详细条目信息 */
  VatElectronicItems?: VatElectronicItemInfo[];
}

/** 电子发票详细条目信息 */
declare interface VatElectronicItemInfo {
  /** 项目名称 */
  Name?: string;
  /** 数量 */
  Quantity?: string;
  /** 规格型号 */
  Specification?: string;
  /** 单价 */
  Price?: string;
  /** 金额 */
  Total?: string;
  /** 税率 */
  TaxRate?: string;
  /** 税额 */
  Tax?: string;
  /** 单位 */
  Unit?: string;
  /** 运输工具类型 */
  VehicleType?: string;
  /** 运输工具牌号 */
  VehicleBrand?: string;
  /** 起始地 */
  DeparturePlace?: string;
  /** 到达地 */
  ArrivalPlace?: string;
  /** 运输货物名称，仅货物运输服务发票返回 */
  TransportItemsName?: string;
  /** 建筑服务发生地，仅建筑发票返回 */
  PlaceOfBuildingService?: string;
  /** 建筑项目名称，仅建筑发票返回 */
  BuildingName?: string;
  /** 产权证书/不动产权证号，仅不动产经营租赁服务发票返回 */
  EstateNumber?: string;
  /** 面积单位，仅不动产经营租赁服务发票返回 */
  AreaUnit?: string;
}

/** 增值税发票、购车发票、全电发票的基础要素字段信息。 */
declare interface VatInvoice {
  /** 发票代码 */
  Code?: string;
  /** 发票号码 */
  Number?: string;
  /** 开票日期 */
  Date?: string;
  /** 购方抬头通用机打发票类型时不返回 */
  BuyerName?: string;
  /** 购方税号通用机打发票类型时不返回 */
  BuyerTaxCode?: string;
  /** 购方地址电话通用机打发票类型做不返回 */
  BuyerAddressPhone?: string;
  /** 购方银行账号通用机打发票类型时不返回 */
  BuyerBankAccount?: string;
  /** 销方名称 */
  SellerName?: string;
  /** 销方税号 */
  SellerTaxCode?: string;
  /** 销方地址电话 */
  SellerAddressPhone?: string;
  /** 销方银行账号 */
  SellerBankAccount?: string;
  /** 备注 */
  Remark?: string;
  /** 机器编码 */
  MachineNo?: string;
  /** 票种类型01：增值税专用发票，02：货运运输业增值税专用发票，03：机动车销售统一发票，04：增值税普通发票，08：增值税电子专用发票（含全电，全电仅新版接口支持），10：增值税电子普通发票（含全电，全电仅新版接口支持），11：增值税普通发票（卷式），14：增值税电子（通行费）发票，15：二手车销售统一发票，32：深圳区块链发票，102：通用机打电子发票61：电子发票（航空运输电子客票行程单）83：电子发票（铁路电子发票）0915：全电纸质（二手车统一销售发票）0903：全电纸质（机动车统一发票） */
  Type?: string;
  /** 具体的全电发票类型：01: 全电专用发票；02：全电普通发票；03：全电火车票；04：全电机票行程单 */
  ElectronicType?: string;
  /** 检验码 */
  CheckCode?: string;
  /** 是否作废（红冲）是否作废（红冲）Y：已作废，N：未作废，H：红冲，HP：部分红冲，HF：全额红冲 */
  IsAbandoned?: string;
  /** 是否有销货清单 Y: 有清单 N：无清单 卷票无 */
  HasSellerList?: string;
  /** 销货清单标题 */
  SellerListTitle?: string;
  /** 销货清单税额 */
  SellerListTax?: string;
  /** 不含税金额 */
  AmountWithoutTax?: string;
  /** 税额 */
  TaxAmount?: string;
  /** 含税金额 */
  AmountWithTax?: string;
  /** 项目明细 */
  Items?: VatInvoiceItem[];
  /** 所属税局 */
  TaxBureau?: string;
  /** 通行费标志:Y、是;N、否 */
  TrafficFreeFlag?: string;
  /** 是否为红票 */
  RedLetterInvoiceMark?: boolean | null;
  /** 开具类型标识（0: 委托代开，1：自开，2：代开，3：代办退税 */
  IssuingTypeMark?: number | null;
  /** 代开销售方名称 */
  SellerAgentName?: string;
  /** 代开销售方税号 */
  SellerAgentTaxID?: string;
}

/** 发票商品 */
declare interface VatInvoiceGoodsInfo {
  /** 项目名称 */
  Item: string;
  /** 规格型号 */
  Specification: string;
  /** 单位 */
  MeasurementDimension: string;
  /** 价格 */
  Price: string;
  /** 数量 */
  Quantity: string;
  /** 金额 */
  Amount: string;
  /** 税率(如6%、免税) */
  TaxScheme: string;
  /** 税额 */
  TaxAmount: string;
}

/** 增值税发票返回值 */
declare interface VatInvoiceInfo {
  /** 校验码 */
  CheckCode?: string;
  /** 发票联次 */
  FormType?: string;
  /** 车船税 */
  TravelTax?: string;
  /** 购买方地址电话 */
  BuyerAddrTel?: string;
  /** 购买方银行账号 */
  BuyerBankAccount?: string;
  /** 公司印章内容 */
  CompanySealContent?: string;
  /** 税务局章内容 */
  TaxSealContent?: string;
  /** 服务类型 */
  ServiceName?: string;
  /** 市 */
  City?: string;
  /** 是否存在二维码（0：没有，1：有） */
  QRCodeMark?: number;
  /** 是否有代开标记（0：没有，1：有） */
  AgentMark?: number;
  /** 是否有通行费标记（0：没有，1：有） */
  TransitMark?: number;
  /** 是否有成品油标记（0：没有，1：有） */
  OilMark?: number;
  /** 发票名称 */
  Title?: string;
  /** 发票消费类型 */
  Kind?: string;
  /** 发票代码 */
  Code?: string;
  /** 发票号码 */
  Number?: string;
  /** 机打发票号码 */
  NumberConfirm?: string;
  /** 开票日期 */
  Date?: string;
  /** 价税合计（小写） */
  Total?: string;
  /** 价税合计（大写） */
  TotalCn?: string;
  /** 税前金额 */
  PretaxAmount?: string;
  /** 合计税额 */
  Tax?: string;
  /** 机器编号 */
  MachineCode?: string;
  /** 密码区 */
  Ciphertext?: string;
  /** 备注 */
  Remark?: string;
  /** 销售方名称 */
  Seller?: string;
  /** 销售方纳税人识别号 */
  SellerTaxID?: string;
  /** 销售方地址电话 */
  SellerAddrTel?: string;
  /** 销售方银行账号 */
  SellerBankAccount?: string;
  /** 购买方名称 */
  Buyer?: string;
  /** 购买方纳税人识别号 */
  BuyerTaxID?: string;
  /** 是否有公司印章（0：没有，1：有） */
  CompanySealMark?: number;
  /** 开票人 */
  Issuer?: string;
  /** 复核人 */
  Reviewer?: string;
  /** 省 */
  Province?: string;
  /** 增值税发票项目信息 */
  VatInvoiceItemInfos?: VatInvoiceItemInfo[];
  /** 机打发票代码 */
  CodeConfirm?: string;
  /** 收款人 */
  Receiptor?: string;
  /** 是否有全电纸质票（0：没有，1：有） */
  ElectronicFullMark?: number;
  /** 全电号码 */
  ElectronicFullNumber?: string;
  /** 发票联名 */
  FormName?: string;
  /** 是否有区块链标记（0：没有，1：有） */
  BlockChainMark?: number;
  /** 是否有收购标记（0：没有，1：有） */
  AcquisitionMark?: number;
  /** 小计金额 */
  SubTotal?: string;
  /** 小计税额 */
  SubTax?: string;
}

/** 增值税发票项目明细 */
declare interface VatInvoiceItem {
  /** 行号 */
  LineNo: string;
  /** 名称 */
  Name: string;
  /** 规格 */
  Spec: string;
  /** 单位 */
  Unit: string;
  /** 数量 */
  Quantity: string;
  /** 单价 */
  UnitPrice: string;
  /** 不含税金额 */
  AmountWithoutTax: string;
  /** 税率 */
  TaxRate: string;
  /** 税额 */
  TaxAmount: string;
  /** 税收分类编码 */
  TaxClassifyCode: string;
  /** 运输工具类型 */
  VehicleType?: string;
  /** 运输工具牌号 */
  VehicleBrand?: string;
  /** 起始地 */
  DeparturePlace?: string;
  /** 到达地 */
  ArrivalPlace?: string;
  /** 运输货物名称 */
  TransportItemsName?: string;
  /** 建筑服务发生地 */
  ConstructionPlace?: string;
  /** 建筑项目名称 */
  ConstructionName?: string;
}

/** 增值税发票项目信息 */
declare interface VatInvoiceItemInfo {
  /** 项目名称 */
  Name?: string;
  /** 规格型号 */
  Specification?: string;
  /** 单位 */
  Unit?: string;
  /** 数量 */
  Quantity?: string;
  /** 单价 */
  Price?: string;
  /** 金额 */
  Total?: string;
  /** 税率 */
  TaxRate?: string;
  /** 税额 */
  Tax?: string;
  /** 通行日期起 */
  DateStart?: string;
  /** 通行日期止 */
  DateEnd?: string;
  /** 车牌号 */
  LicensePlate?: string;
  /** 车辆类型 */
  VehicleType?: string;
  /** 序号 */
  SerialNumber?: string;
}

/** 增值税普通发票(卷票) */
declare interface VatInvoiceRoll {
  /** 发票名称 */
  Title?: string;
  /** 发票代码 */
  Code?: string;
  /** 发票号码 */
  Number?: string;
  /** 机打发票号码 */
  NumberConfirm?: string;
  /** 开票日期 */
  Date?: string;
  /** 校验码 */
  CheckCode?: string;
  /** 销售方名称 */
  Seller?: string;
  /** 销售方纳税人识别号 */
  SellerTaxID?: string;
  /** 购买方名称 */
  Buyer?: string;
  /** 购买方纳税人识别号 */
  BuyerTaxID?: string;
  /** 种类 */
  Category?: string;
  /** 价税合计（小写） */
  Total?: string;
  /** 价税合计（大写） */
  TotalCn?: string;
  /** 发票消费类型 */
  Kind?: string;
  /** 省 */
  Province?: string;
  /** 市 */
  City?: string;
  /** 是否有公司印章（0：没有，1：有） */
  CompanySealMark?: number;
  /** 是否存在二维码（1：有，0：无） */
  QRCodeMark?: number;
  /** 服务类型 */
  ServiceName?: string;
  /** 公司印章内容 */
  CompanySealContent?: string;
  /** 税务局章内容 */
  TaxSealContent?: string;
  /** 条目 */
  VatRollItems?: VatRollItem[];
}

/** 发票人员信息 */
declare interface VatInvoiceUserInfo {
  /** 名称 */
  Name: string;
  /** 纳税人识别号 */
  TaxId: string;
  /** 地 址、电 话 */
  AddrTel: string;
  /** 开户行及账号 */
  FinancialAccount: string;
}

/** 增值税发票卷票信息 */
declare interface VatRollInvoiceInfo {
  /** 识别出的字段名称(关键字)，支持以下字段：发票代码、合计金额(小写)、合计金额(大写)、开票日期、发票号码、购买方识别号、销售方识别号、校验码、销售方名称、购买方名称、发票消费类型、省、市、是否有公司印章、单价、金额、数量、服务类型、品名、种类。 */
  Name: string;
  /** 识别出的字段名称对应的值，也就是字段Name对应的字符串结果。 */
  Value: string;
  /** 文本行在旋转纠正之后的图像中的像素坐标。 */
  Rect: Rect;
}

/** 增值税普通发票（卷票）条目 */
declare interface VatRollItem {
  /** 项目名称 */
  Name?: string;
  /** 数量 */
  Quantity?: string;
  /** 单价 */
  Price?: string;
  /** 金额 */
  Total?: string;
}

/** 机动车销售统一发票信息 */
declare interface VehicleInvoiceInfo {
  /** 车辆类型 */
  CarType?: string;
  /** 厂牌型号 */
  PlateModel?: string;
  /** 产地 */
  ProduceAddress?: string;
  /** 合格证号 */
  CertificateNo?: string;
  /** 进口证明书号 */
  ImportNo?: string;
  /** LSVCA2NP9HN0xxxxx */
  VinNo?: string;
  /** 完税证书号 */
  PayTaxesNo?: string;
  /** 吨位 */
  Tonnage?: string;
  /** 限乘人数 */
  LimitCount?: string;
  /** 发动机号码 */
  EngineNo?: string;
  /** 商检单号 */
  BizCheckFormNo?: string;
  /** 主管税务机关代码 */
  TaxtationOrgCode?: string;
  /** 主管税务机关名称 */
  TaxtationOrgName?: string;
  /** 税率 */
  MotorTaxRate?: string;
  /** 银行账号 */
  MotorBankName?: string;
  /** 开户行 */
  MotorBankAccount?: string;
  /** 销售地址 */
  SellerAddress?: string;
  /** 销售电话 */
  SellerTel?: string;
  /** 购方身份证 */
  BuyerNo?: string;
}

/** 机动车登记证书识别结果 */
declare interface VehicleRegCertInfo {
  /** 识别出的字段名称(关键字)，支持以下字段：【注册登记页】车辆型号、车辆识别代号/车架号、发动机号、制造厂名称、轴距、轮胎数、总质量、外廓尺寸、轴数、车辆出厂日期、发证日期、使用性质、车辆获得方式、车辆类型、国产/进口、燃料种类、车身颜色、发动机型号、车辆品牌、编号、转向形式、机动车所有人1、身份证明名称1、号码1、登记机关1、登记日期1机动车所有人2、身份证明名称2、号码2、登记机关2、登记日期2机动车所有人3、身份证明名称3、号码3、登记机关3、登记日期3机动车所有人4、身份证明名称4、号码4、登记机关4、登记日期4机动车所有人5、身份证明名称5、号码5、登记机关5、登记日期5机动车所有人6、身份证明名称6、号码6、登记机关6、登记日期6机动车所有人7、身份证明名称7、号码7、登记机关7、登记日期7【抵押登记页】机动车登记证书编号、身份证明名称/号码、抵押权人姓名/名称、抵押登记日期。 */
  Name: string;
  /** 识别出的字段名称对应的值，也就是字段name对应的字符串结果。 */
  Value: string;
}

/** 运单识别对象 */
declare interface WaybillObj {
  /** 识别出的文本行内容 */
  Text: string;
}

/** 英文OCR识别出的单词在原图中的四点坐标数组 */
declare interface WordCoordPoint {
  /** 英文OCR识别出的每个单词在原图中的四点坐标。 */
  WordCoordinate: Coord[];
}

/** 还原文本信息 */
declare interface WordItem {
  /** 文本块内容 */
  DetectedText?: string;
  /** 四点坐标 */
  Coord?: Polygon;
}

/** 识别出来的单词信息包括单词（包括单词Character和单词置信度confidence） */
declare interface Words {
  /** 置信度 0 ~100 */
  Confidence: number;
  /** 候选字Character */
  Character: string;
}

declare interface AdvertiseOCRRequest {
  /** 图片的 Base64 值。要求图片经Base64编码后不超过 7M，分辨率建议600*800以上，支持PNG、JPG、JPEG、BMP格式。图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。 */
  ImageBase64?: string;
  /** 图片的 Url 地址。要求图片经Base64编码后不超过 7M，分辨率建议600*800以上，支持PNG、JPG、JPEG、BMP格式。图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。 */
  ImageUrl?: string;
}

declare interface AdvertiseOCRResponse {
  /** 检测到的文本信息，包括文本行内容、置信度、文本行坐标以及文本行旋转纠正后的坐标，具体内容请点击左侧链接。 */
  TextDetections?: AdvertiseTextDetection[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ArithmeticOCRRequest {
  /** 图片的 Base64 值。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。 */
  ImageBase64?: string;
  /** 图片的 Url 地址。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。 */
  ImageUrl?: string;
  /** 用于选择是否支持横屏拍摄。打开则支持横屏拍摄图片角度判断，角度信息在返回参数的angle中，默认值为true */
  SupportHorizontalImage?: boolean;
  /** 是否拒绝非速算图，打开则拒绝非速算图(注：非速算图是指风景人物等明显不是速算图片的图片)，默认值为false */
  RejectNonArithmeticPic?: boolean;
  /** 是否展开耦合算式中的竖式计算，默认值为false */
  EnableDispRelatedVertical?: boolean;
  /** 是否展示竖式算式的中间结果和格式控制字符，默认值为false */
  EnableDispMidResult?: boolean;
  /** 是否开启pdf识别，默认值为true */
  EnablePdfRecognize?: boolean;
  /** pdf页码，从0开始，默认为0 */
  PdfPageIndex?: number;
}

declare interface ArithmeticOCRResponse {
  /** 检测到的文本信息，具体内容请点击左侧链接。 */
  TextDetections?: TextArithmetic[];
  /** 图片横屏的角度(90度或270度) */
  Angle?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BankCardOCRRequest {
  /** 图片的 Base64 值。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。 */
  ImageBase64?: string;
  /** 图片的 Url 地址。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。建议图片存储于腾讯云，可保障更高的下载速度和稳定性。 */
  ImageUrl?: string;
  /** 是否返回预处理（精确剪裁对齐）后的银行卡图片数据，默认false。 */
  RetBorderCutImage?: boolean;
  /** 是否返回卡号的切图图片数据，默认false。 */
  RetCardNoImage?: boolean;
  /** 复印件检测开关，如果输入的图片是银行卡复印件图片则返回告警，默认false。 */
  EnableCopyCheck?: boolean;
  /** 翻拍检测开关，如果输入的图片是银行卡翻拍图片则返回告警，默认false。 */
  EnableReshootCheck?: boolean;
  /** 边框遮挡检测开关，如果输入的图片是银行卡边框被遮挡则返回告警，默认false。 */
  EnableBorderCheck?: boolean;
  /** 是否返回图片质量分数（图片质量分数是评价一个图片的模糊程度的标准），默认false。 */
  EnableQualityValue?: boolean;
}

declare interface BankCardOCRResponse {
  /** 卡号 */
  CardNo: string;
  /** 银行信息 */
  BankInfo: string;
  /** 有效期，格式如：07/2023 */
  ValidDate: string;
  /** 卡类型 */
  CardType: string;
  /** 卡名字 */
  CardName: string;
  /** 切片图片数据 */
  BorderCutImage: string | null;
  /** 卡号图片数据 */
  CardNoImage: string | null;
  /** WarningCode 告警码列表和释义：-9110:银行卡日期无效; -9111:银行卡边框不完整; -9112:银行卡图片反光;-9113:银行卡复印件;-9114:银行卡翻拍件（告警码可以同时存在多个） */
  WarningCode: number[] | null;
  /** 图片质量分数，请求EnableQualityValue时返回（取值范围：0-100，分数越低越模糊，建议阈值≥50）。 */
  QualityValue: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BankSlipOCRRequest {
  /** 图片的 Base64 值。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。 */
  ImageBase64?: string;
  /** 图片的 Url 地址。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议图片存储于腾讯云，可保障更高的下载速度和稳定性。 */
  ImageUrl?: string;
  /** 是否开启PDF识别，默认值为true，开启后可同时支持图片和PDF的识别。 */
  IsPdf?: boolean;
  /** 需要识别的PDF页面的对应页码，仅支持PDF单页识别，当上传文件为PDF且IsPdf参数值为true时有效，默认值为1。 */
  PdfPageNumber?: number;
}

declare interface BankSlipOCRResponse {
  /** 银行回单识别结果，具体内容请点击左侧链接。 */
  BankSlipInfos?: BankSlipInfo[];
  /** 图片旋转角度（角度制），文本的水平方向为0°，顺时针为正，逆时针为负。 */
  Angle?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BizLicenseOCRRequest {
  /** 图片的 Base64 值。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。 */
  ImageBase64?: string;
  /** 图片的 Url 地址。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。 */
  ImageUrl?: string;
  /** 是否返回告警码，默认为false */
  EnableCopyWarn?: boolean;
}

declare interface BizLicenseOCRResponse {
  /** 统一社会信用代码（三合一之前为注册号） */
  RegNum?: string;
  /** 公司名称 */
  Name?: string;
  /** 注册资本 */
  Capital?: string;
  /** 法定代表人 */
  Person?: string;
  /** 地址 */
  Address?: string;
  /** 经营范围 */
  Business?: string;
  /** 主体类型 */
  Type?: string;
  /** 营业期限 */
  Period?: string;
  /** 组成形式 */
  ComposingForm?: string;
  /** 成立日期 */
  SetDate?: string;
  /** Code 告警码列表和释义：-9102 黑白复印件告警-9104 翻拍件告警 */
  RecognizeWarnCode?: number[];
  /** 告警码说明：WARN_COPY_CARD 黑白复印件告警WARN_RESHOOT_CARD翻拍件告警 */
  RecognizeWarnMsg?: string[];
  /** 是否为副本。1为是，-1为不是。 */
  IsDuplication?: number;
  /** 登记日期 */
  RegistrationDate?: string;
  /** 图片旋转角度(角度制)，文本的水平方向为0度；顺时针为正，角度范围是0-360度 */
  Angle?: number;
  /** 是否有国徽。0为没有，1为有。 */
  NationalEmblem?: boolean;
  /** 是否有二维码。0为没有，1为有。 */
  QRCode?: boolean;
  /** 是否有印章。0为没有，1为有。 */
  Seal?: boolean;
  /** 标题 */
  Title?: string;
  /** 编号 */
  SerialNumber?: string;
  /** 登记机关 */
  RegistrationAuthority?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BusInvoiceOCRRequest {
  /** 图片的 Base64 值。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。 */
  ImageBase64?: string;
  /** 图片的 Url 地址。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。 */
  ImageUrl?: string;
  /** 是否开启PDF识别，默认值为true，开启后可同时支持图片和PDF的识别。 */
  IsPdf?: boolean;
  /** 需要识别的PDF页面的对应页码，仅支持PDF单页识别，当上传文件为PDF且IsPdf参数值为true时有效，默认值为1。 */
  PdfPageNumber?: number;
}

declare interface BusInvoiceOCRResponse {
  /** 汽车票识别结果，具体内容请点击左侧链接。 */
  BusInvoiceInfos?: BusInvoiceInfo[];
  /** 图片旋转角度（角度制），文本的水平方向为0°，顺时针为正，逆时针为负。 */
  Angle?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BusinessCardOCRRequest {
  /** 图片的 Base64 值。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。 */
  ImageBase64?: string;
  /** 图片的 Url 地址。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。 */
  ImageUrl?: string;
  /** 可选字段，根据需要选择是否请求对应字段。目前支持的字段为：RetImageType-“PROPROCESS” 图像预处理，string 类型。图像预处理功能为，检测图片倾斜的角度，将原本倾斜的图片围绕中心点转正，最终输出一张正的名片抠图。SDK 设置方式参考：Config = Json.stringify({"RetImageType":"PROPROCESS"})API 3.0 Explorer 设置方式参考：Config = {"RetImageType":"PROPROCESS"} */
  Config?: string;
}

declare interface BusinessCardOCRResponse {
  /** 名片识别结果，具体内容请点击左侧链接。 */
  BusinessCardInfos?: BusinessCardInfo[];
  /** 返回图像预处理后的图片，图像预处理未开启时返回内容为空。 */
  RetImageBase64?: string;
  /** 图片旋转角度（角度制），文本的水平方向为0°；顺时针为正，逆时针为负。点击查看如何纠正倾斜文本 */
  Angle?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CarInvoiceOCRRequest {
  /** 图片的 Base64 值。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。 */
  ImageBase64?: string;
  /** 图片的 Url 地址。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。 */
  ImageUrl?: string;
  /** 是否开启PDF识别，默认值为true，开启后可同时支持图片和PDF的识别。 */
  IsPdf?: boolean;
  /** 需要识别的PDF页面的对应页码，仅支持PDF单页识别，当上传文件为PDF且IsPdf参数值为true时有效，默认值为1。 */
  PdfPageNumber?: number;
}

declare interface CarInvoiceOCRResponse {
  /** 购车发票识别结果，具体内容请点击左侧链接。 */
  CarInvoiceInfos?: CarInvoiceInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ClassifyDetectOCRRequest {
  /** 图片的 Base64 值。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。 */
  ImageBase64?: string;
  /** 图片的 Url 地址。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。 */
  ImageUrl?: string;
  /** 可以指定要识别的票证类型,指定后不出现在此列表的票证将不返回类型。不指定时默认返回所有支持类别票证的识别信息。以下是当前支持的类型：IDCardFront: 身份证正面识别IDCardBack: 身份证背面识别Passport: 护照BusinessCard: 名片识别BankCard: 银行卡识别VehicleLicenseFront: 行驶证主页识别VehicleLicenseBack: 行驶证副页识别DriverLicenseFront: 驾驶证主页识别DriverLicenseBack: 驾驶证副页识别PermitFront: 港澳台通行证正面ResidenceBooklet: 户口本资料页MainlandPermitFront: 港澳台来往内地通行证正面HmtResidentPermitFront: 港澳台居住证正面HmtResidentPermitBack: 港澳台居住证背面EstateCert: 不动产证BizLicense: 营业执照 */
  DiscernType?: string[];
}

declare interface ClassifyDetectOCRResponse {
  /** 智能卡证分类结果。当图片类型不支持分类识别或者识别出的类型不在请求参数DiscernType指定的范围内时，返回结果中的Type字段将为空字符串，Name字段将返回"其它" */
  ClassifyDetectInfos: ClassifyDetectInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateAIFormTaskRequest {
  /** 多个文件的URL列表 */
  FileList: SmartFormFileUrl[];
  /** 备注信息1 */
  FirstNotes?: string;
  /** 备注信息2 */
  SecondNotes?: string;
  /** 文件类型 */
  FileType?: number;
}

declare interface CreateAIFormTaskResponse {
  /** 本次识别任务的唯一身份ID */
  TaskId?: string | null;
  /** 本次识别任务的操作URL，有效期自生成之时起共24小时 */
  OperateUrl?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DriverLicenseOCRRequest {
  /** 图片的 Base64 值。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。 */
  ImageBase64?: string;
  /** 图片的 Url 地址。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。图片下载时间不超过 3 秒。建议图片存储于腾讯云，可保障更高的下载速度和稳定性。 */
  ImageUrl?: string;
  /** FRONT 为驾驶证主页正面（有红色印章的一面），BACK 为驾驶证副页正面（有档案编号的一面）。DOUBLE 支持自动识别驾驶证正副页单面，和正副双面同框识别默认值为：FRONT。 */
  CardSide?: string;
}

declare interface DriverLicenseOCRResponse {
  /** 驾驶证正页姓名 */
  Name?: string;
  /** 性别 */
  Sex?: string;
  /** 国籍 */
  Nationality?: string;
  /** 住址 */
  Address?: string;
  /** 出生日期（YYYY-MM-DD） */
  DateOfBirth?: string;
  /** 初次领证日期（YYYY-MM-DD） */
  DateOfFirstIssue?: string;
  /** 准驾车型 */
  Class?: string;
  /** 有效期开始时间（YYYY-MM-DD） */
  StartDate?: string;
  /** 有效期截止时间（新版驾驶证返回 YYYY-MM-DD，老版驾驶证返回有效期限 X年） */
  EndDate?: string;
  /** 驾驶证正页证号 */
  CardCode?: string;
  /** 档案编号 */
  ArchivesCode?: string;
  /** 记录 */
  Record?: string;
  /** Code 告警码列表和释义：-9102 复印件告警-9103 翻拍件告警注：告警码可以同时存在多个 */
  RecognizeWarnCode?: number[];
  /** 告警码说明：WARN_DRIVER_LICENSE_COPY_CARD 复印件告警WARN_DRIVER_LICENSE_SCREENED_CARD 翻拍件告警注：告警信息可以同时存在多个 */
  RecognizeWarnMsg?: string[];
  /** 发证单位 */
  IssuingAuthority?: string;
  /** 状态（仅电子驾驶证支持返回该字段） */
  State?: string;
  /** 累积记分（仅电子驾驶证支持返回该字段） */
  CumulativeScore?: string;
  /** 当前时间（仅电子驾驶证支持返回该字段） */
  CurrentTime?: string;
  /** 生成时间（仅电子驾驶证支持返回该字段） */
  GenerateTime?: string;
  /** 驾驶证副页姓名 */
  BackPageName?: string;
  /** 驾驶证副页证号 */
  BackPageCardCode?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DutyPaidProofOCRRequest {
  /** 图片的 Base64 值。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。 */
  ImageBase64?: string;
  /** 图片的 Url 地址。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。 */
  ImageUrl?: string;
  /** 是否开启PDF识别，默认值为true，开启后可同时支持图片和PDF的识别。 */
  IsPdf?: boolean;
  /** 需要识别的PDF页面的对应页码，仅支持PDF单页识别，当上传文件为PDF且IsPdf参数值为true时有效，默认值为1。 */
  PdfPageNumber?: number;
}

declare interface DutyPaidProofOCRResponse {
  /** 完税证明识别结果，具体内容请点击左侧链接。 */
  DutyPaidProofInfos?: DutyPaidProofInfo[];
  /** 图片旋转角度（角度制），文本的水平方向为0°，顺时针为正，逆时针为负。 */
  Angle?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface EduPaperOCRRequest {
  /** 图片的 Base64 值。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。 */
  ImageBase64?: string;
  /** 图片的 Url 地址。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。 */
  ImageUrl?: string;
  /** 扩展配置信息。配置格式：{"option1":value1,"option2":value2}1. task_type：任务类型【0: 关闭版式分析与处理 1: 开启版式分析处理】可选参数，Int32类型，默认值为12. is_structuralization：是否结构化输出【true：返回包体同时返回通用和结构化输出 false：返回包体返回通用输出】 可选参数，Bool类型，默认值为true3. if_readable_format：是否按照版式整合通用文本/公式输出结果 可选参数，Bool类型，默认值为false示例：{"task_type": 1,"is_structuralization": true,"if_readable_format": true} */
  Config?: string;
}

declare interface EduPaperOCRResponse {
  /** 检测到的文本信息，具体内容请点击左侧链接。 */
  EduPaperInfos: TextEduPaper[];
  /** 图片旋转角度（角度制），文本的水平方向为0°；顺时针为正，逆时针为负。 */
  Angle: number;
  /** 结构化方式输出，具体内容请点击左侧链接。 */
  QuestionBlockInfos: QuestionBlockObj[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface EnglishOCRRequest {
  /** 图片的 Base64 值。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。像素须介于20-10000px之间。图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。 */
  ImageBase64?: string;
  /** 图片的 Url 地址。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。像素须介于20-10000px之间。图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。 */
  ImageUrl?: string;
  /** 单词四点坐标开关，开启可返回图片中单词的四点坐标。该参数默认值为false。 */
  EnableCoordPoint?: boolean;
  /** 候选字开关，开启可返回识别时多个可能的候选字（每个候选字对应其置信度）。该参数默认值为false。 */
  EnableCandWord?: boolean;
  /** 预处理开关，功能是检测图片倾斜的角度，将原本倾斜的图片矫正。该参数默认值为true。 */
  Preprocess?: boolean;
}

declare interface EnglishOCRResponse {
  /** 检测到的文本信息，具体内容请点击左侧链接。 */
  TextDetections?: TextDetectionEn[];
  /** 图片旋转角度（角度制），文本的水平方向为0°；顺时针为正，逆时针为负。点击查看如何纠正倾斜文本 */
  Angel?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface EnterpriseLicenseOCRRequest {
  /** 图片的 Base64 值。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。 */
  ImageBase64?: string;
  /** 图片的 Url 地址。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。 */
  ImageUrl?: string;
}

declare interface EnterpriseLicenseOCRResponse {
  /** 企业证照识别结果，具体内容请点击左侧链接。 */
  EnterpriseLicenseInfos?: EnterpriseLicenseInfo[];
  /** 图片旋转角度（角度制），文本的水平方向为0°，顺时针为正，逆时针为负。 */
  Angle?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface EstateCertOCRRequest {
  /** 图片的 Base64 值。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。 */
  ImageBase64?: string;
  /** 图片的 Url 地址。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。 */
  ImageUrl?: string;
}

declare interface EstateCertOCRResponse {
  /** 权利人 */
  Obligee: string;
  /** 共有情况 */
  Ownership: string;
  /** 坐落 */
  Location: string;
  /** 不动产单元号 */
  Unit: string;
  /** 权利类型 */
  Type: string;
  /** 权利性质 */
  Property: string;
  /** 用途 */
  Usage: string;
  /** 面积 */
  Area: string;
  /** 使用期限 */
  Term: string;
  /** 权利其他状况，多行会用换行符\n连接。 */
  Other: string;
  /** 图片旋转角度 */
  Angle: number;
  /** 不动产权号 */
  Number: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface FinanBillOCRRequest {
  /** 图片的 Base64 值。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。 */
  ImageBase64?: string;
  /** 图片的 Url 地址。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。 */
  ImageUrl?: string;
}

declare interface FinanBillOCRResponse {
  /** 金融票据整单识别结果，具体内容请点击左侧链接。 */
  FinanBillInfos?: FinanBillInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface FinanBillSliceOCRRequest {
  /** 图片的 Base64 值。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。 */
  ImageBase64?: string;
  /** 图片的 Url 地址。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。 */
  ImageUrl?: string;
}

declare interface FinanBillSliceOCRResponse {
  /** 金融票据切片识别结果，具体内容请点击左侧链接。 */
  FinanBillSliceInfos?: FinanBillSliceInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface FlightInvoiceOCRRequest {
  /** 图片的 Base64 值。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。 */
  ImageBase64?: string;
  /** 图片的 Url 地址。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。 */
  ImageUrl?: string;
  /** 是否开启PDF识别，默认值为true，开启后可同时支持图片和PDF的识别。 */
  IsPdf?: boolean;
  /** 需要识别的PDF页面的对应页码，仅支持PDF单页识别，当上传文件为PDF且IsPdf参数值为true时有效，默认值为1。 */
  PdfPageNumber?: number;
}

declare interface FlightInvoiceOCRResponse {
  /** 机票行程单识别结果，具体内容请点击左侧链接。 */
  FlightInvoiceInfos?: FlightInvoiceInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface FormulaOCRRequest {
  /** 图片的 Base64 值。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。 */
  ImageBase64?: string;
  /** 图片的 Url 地址。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。 */
  ImageUrl?: string;
}

declare interface FormulaOCRResponse {
  /** 图片旋转角度（角度制），文本的水平方向为0°；顺时针为正，逆时针为负 */
  Angle?: number;
  /** 检测到的文本信息，具体内容请点击左侧链接。 */
  FormulaInfos?: TextFormula[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GeneralAccurateOCRRequest {
  /** 图片的 Base64 值。要求图片经Base64编码后不超过 7M，分辨率建议600*800以上，支持PNG、JPG、JPEG、BMP格式。图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。 */
  ImageBase64?: string;
  /** 图片的 Url 地址。要求图片经Base64编码后不超过 7M，分辨率建议600*800以上，支持PNG、JPG、JPEG、BMP格式。图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。 */
  ImageUrl?: string;
  /** 是否返回单字信息，默认关 */
  IsWords?: boolean;
  /** 是否开启原图切图检测功能，开启后可提升“整图面积大，但单字符占比面积小”（例如：试卷）场景下的识别效果，默认关 */
  EnableDetectSplit?: boolean;
  /** 是否开启PDF识别，默认值为false，开启后可同时支持图片和PDF的识别。 */
  IsPdf?: boolean;
  /** 需要识别的PDF页面的对应页码，仅支持PDF单页识别，当上传文件为PDF且IsPdf参数值为true时有效，默认值为1。 */
  PdfPageNumber?: number;
  /** 文本检测开关，默认为true。设置为false可直接进行单行识别，适用于仅包含正向单行文本的图片场景。 */
  EnableDetectText?: boolean;
}

declare interface GeneralAccurateOCRResponse {
  /** 检测到的文本信息，包括文本行内容、置信度、文本行坐标以及文本行旋转纠正后的坐标，具体内容请点击左侧链接。 */
  TextDetections?: TextDetection[];
  /** 图片旋转角度（角度制），文本的水平方向为0°；顺时针为正，逆时针为负。点击查看如何纠正倾斜文本 */
  Angel?: number;
  /** 图片旋转角度（角度制），文本的水平方向为0°；顺时针为正，逆时针为负。点击查看如何纠正倾斜文本 */
  Angle?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GeneralBasicOCRRequest {
  /** 图片/PDF的 Base64 值。要求图片/PDF经Base64编码后不超过 7M，分辨率建议600*800以上，支持PNG、JPG、JPEG、BMP、PDF格式。图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。 */
  ImageBase64?: string;
  /** 图片/PDF的 Url 地址。要求图片/PDF经Base64编码后不超过 7M，分辨率建议600*800以上，支持PNG、JPG、JPEG、BMP、PDF格式。图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。 */
  ImageUrl?: string;
  /** 保留字段。 */
  Scene?: string;
  /** 识别语言类型。支持自动识别语言类型，同时支持自选语言种类，默认中英文混合(zh)，各种语言均支持与英文混合的文字识别。可选值：zh：中英混合zh_rare：支持英文、数字、中文生僻字、繁体字，特殊符号等auto：自动mix：混合语种jap：日语kor：韩语spa：西班牙语fre：法语ger：德语por：葡萄牙语vie：越语may：马来语rus：俄语ita：意大利语hol：荷兰语swe：瑞典语fin：芬兰语dan：丹麦语nor：挪威语hun：匈牙利语tha：泰语hi：印地语ara：阿拉伯语 */
  LanguageType?: string;
  /** 是否开启PDF识别，默认值为false，开启后可同时支持图片和PDF的识别。 */
  IsPdf?: boolean;
  /** 需要识别的PDF页面的对应页码，仅支持PDF单页识别，当上传文件为PDF且IsPdf参数值为true时有效，默认值为1。 */
  PdfPageNumber?: number;
  /** 是否返回单字信息，默认关 */
  IsWords?: boolean;
}

declare interface GeneralBasicOCRResponse {
  /** 检测到的文本信息，包括文本行内容、置信度、文本行坐标以及文本行旋转纠正后的坐标，具体内容请点击左侧链接。 */
  TextDetections?: TextDetection[];
  /** 检测到的语言类型，目前支持的语言类型参考入参LanguageType说明。 */
  Language?: string;
  /** 图片旋转角度（角度制），文本的水平方向为0°；顺时针为正，逆时针为负。点击查看如何纠正倾斜文本 */
  Angel?: number;
  /** 图片为PDF时，返回PDF的总页数，默认为0 */
  PdfPageSize?: number;
  /** 图片旋转角度（角度制），文本的水平方向为0°；顺时针为正，逆时针为负。点击查看如何纠正倾斜文本 */
  Angle?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GeneralEfficientOCRRequest {
  /** 图片的 Base64 值。要求图片经Base64编码后不超过 7M，分辨率建议600*800以上，支持PNG、JPG、JPEG、BMP格式。图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。 */
  ImageBase64?: string;
  /** 图片的 Url 地址。要求图片经Base64编码后不超过 7M，分辨率建议600*800以上，支持PNG、JPG、JPEG、BMP格式。图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。 */
  ImageUrl?: string;
}

declare interface GeneralEfficientOCRResponse {
  /** 检测到的文本信息，包括文本行内容、置信度、文本行坐标以及文本行旋转纠正后的坐标，具体内容请点击左侧链接。 */
  TextDetections: TextDetection[];
  /** 图片旋转角度（角度制），文本的水平方向为0°；顺时针为正，逆时针为负。点击查看如何纠正倾斜文本 */
  Angel: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GeneralFastOCRRequest {
  /** 图片的 Base64 值。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。 */
  ImageBase64?: string;
  /** 图片的 Url 地址。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。 */
  ImageUrl?: string;
  /** 是否开启PDF识别，默认值为false，开启后可同时支持图片和PDF的识别。 */
  IsPdf?: boolean;
  /** 需要识别的PDF页面的对应页码，仅支持PDF单页识别，当上传文件为PDF且IsPdf参数值为true时有效，默认值为1。 */
  PdfPageNumber?: number;
}

declare interface GeneralFastOCRResponse {
  /** 检测到的文本信息，具体内容请点击左侧链接。 */
  TextDetections: TextDetection[];
  /** 检测到的语言，目前支持的语种范围为：简体中文、繁体中文、英文、日文、韩文。未来将陆续新增对更多语种的支持。返回结果含义为：zh - 中英混合，jap - 日文，kor - 韩文。 */
  Language: string;
  /** 图片旋转角度（角度制），文本的水平方向为0°；顺时针为正，逆时针为负 */
  Angel: number;
  /** 图片为PDF时，返回PDF的总页数，默认为0 */
  PdfPageSize: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GeneralHandwritingOCRRequest {
  /** 图片的 Base64 值。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。 */
  ImageBase64?: string;
  /** 图片的 Url 地址。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经 Base64 编码后不超过7M。图片下载时间不超过 3 秒。图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。 */
  ImageUrl?: string;
  /** 场景字段，默认不用填写。可选值:only_hw 表示只输出手写体识别结果，过滤印刷体。 */
  Scene?: string;
  /** 是否开启单字的四点定位坐标输出，默认值为false。 */
  EnableWordPolygon?: boolean;
  /** 文本检测开关，默认值为true。设置为false表示直接进行单行识别，可适用于识别单行手写体签名场景。 */
  EnableDetectText?: boolean;
}

declare interface GeneralHandwritingOCRResponse {
  /** 检测到的文本信息，具体内容请点击左侧链接。 */
  TextDetections: TextGeneralHandwriting[];
  /** 图片旋转角度（角度制），文本的水平方向为0°；顺时针为正，逆时针为负。点击查看如何纠正倾斜文本 */
  Angel: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetTaskStateRequest {
  /** 智慧表单任务唯一身份ID */
  TaskId: string;
}

declare interface GetTaskStateResponse {
  /** 1:任务识别完成，还未提交2:任务已手动关闭3:任务已提交4:任务识别中5:超时：任务超过了可操作的24H时限6:任务识别失败 */
  TaskState?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface HKIDCardOCRRequest {
  /** 是否返回人像照片。 */
  ReturnHeadImage: boolean;
  /** 是否鉴伪。 */
  DetectFake?: boolean;
  /** 图片的 Base64 值。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。 */
  ImageBase64?: string;
  /** 图片的 Url 地址。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。 */
  ImageUrl?: string;
}

declare interface HKIDCardOCRResponse {
  /** 中文姓名 */
  CnName?: string;
  /** 英文姓名 */
  EnName?: string;
  /** 中文姓名对应电码 */
  TelexCode?: string;
  /** 性别 ：“男M”或“女F” */
  Sex?: string;
  /** 出生日期 */
  Birthday?: string;
  /** 永久性居民身份证。0：非永久；1：永久；-1：未知。 */
  Permanent?: number;
  /** 身份证号码 */
  IdNum?: string;
  /** 证件符号，出生日期下的符号，例如"***AZ" */
  Symbol?: string;
  /** 首次签发日期 */
  FirstIssueDate?: string;
  /** 最近领用日期 */
  CurrentIssueDate?: string;
  /** 真假判断。0：无法判断（图像模糊、不完整、反光、过暗等导致无法判断）；1：假；2：真。 */
  FakeDetectResult?: number | null;
  /** 人像照片Base64后的结果 */
  HeadImage?: string | null;
  /** 多重告警码，当身份证是翻拍、复印件时返回对应告警码。-9102：证照复印件告警-9103：证照翻拍告警 */
  WarningCode?: number[];
  /** 告警码-9101 证件边框不完整告警-9102 证件复印件告警-9103 证件翻拍告警-9104 证件PS告警-9107 证件反光告警-9108 证件模糊告警-9109 告警能力未开通 */
  WarnCardInfos?: number[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface HmtResidentPermitOCRRequest {
  /** 图片的 Base64 值。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。 */
  ImageBase64?: string;
  /** 图片的 Url 地址。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。 */
  ImageUrl?: string;
  /** FRONT：有照片的一面（人像面），BACK：无照片的一面（国徽面），该参数如果不填或填错，将为您自动判断正反面。 */
  CardSide?: string;
}

declare interface HmtResidentPermitOCRResponse {
  /** 证件姓名 */
  Name?: string;
  /** 性别 */
  Sex?: string;
  /** 出生日期 */
  Birth?: string;
  /** 地址 */
  Address?: string;
  /** 身份证号 */
  IdCardNo?: string;
  /** 0-正面1-反面 */
  CardType?: number;
  /** 证件有效期限 */
  ValidDate?: string;
  /** 签发机关 */
  Authority?: string;
  /** 签发次数 */
  VisaNum?: string;
  /** 通行证号码 */
  PassNo?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface IDCardOCRRequest {
  /** 图片的 Base64 值。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。 */
  ImageBase64?: string;
  /** 图片的 Url 地址。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。建议图片存储于腾讯云，可保障更高的下载速度和稳定性。 */
  ImageUrl?: string;
  /** FRONT：身份证有照片的一面（人像面），BACK：身份证有国徽的一面（国徽面），该参数如果不填，将为您自动判断身份证正反面。 */
  CardSide?: string;
  /** 以下可选字段均为bool 类型，默认false：CropIdCard，身份证照片裁剪（去掉证件外多余的边缘、自动矫正拍摄角度）CropPortrait，人像照片裁剪（自动抠取身份证头像区域）CopyWarn，复印件告警BorderCheckWarn，边框和框内遮挡告警ReshootWarn，翻拍告警DetectPsWarn，疑似存在PS痕迹告警TempIdWarn，临时身份证告警InvalidDateWarn，身份证有效日期不合法告警Quality，图片质量分数（评价图片的模糊程度）MultiCardDetect，是否开启正反面同框识别（仅支持二代身份证正反页同框识别或临时身份证正反页同框识别）ReflectWarn，是否开启反光检测SDK 设置方式参考：Config = Json.stringify({"CropIdCard":true,"CropPortrait":true})API 3.0 Explorer 设置方式参考：Config = {"CropIdCard":true,"CropPortrait":true} */
  Config?: string;
  /** 默认值为true，打开识别结果纠正开关。开关开启后，身份证号、出生日期、性别，三个字段会进行矫正补齐，统一结果输出；若关闭此开关，以上三个字段不会进行矫正补齐，保持原始识别结果输出，若原图出现篡改情况，这三个字段的识别结果可能会不统一。 */
  EnableRecognitionRectify?: boolean;
  /** 默认值为false。此开关需要在反光检测开关开启下才会生效（即此开关生效的前提是config入参里的"ReflectWarn":true），若EnableReflectDetail设置为true，则会返回反光点覆盖区域详情。反光点覆盖区域详情分为四部分：人像照片位置、国徽位置、识别字段位置、其他位置。一个反光点允许覆盖多个区域，且一张图片可能存在多个反光点。 */
  EnableReflectDetail?: boolean;
}

declare interface IDCardOCRResponse {
  /** 姓名（人像面） */
  Name?: string;
  /** 性别（人像面） */
  Sex?: string;
  /** 民族（人像面） */
  Nation?: string;
  /** 出生日期（人像面） */
  Birth?: string;
  /** 地址（人像面） */
  Address?: string;
  /** 身份证号（人像面） */
  IdNum?: string;
  /** 发证机关（国徽面） */
  Authority?: string;
  /** 证件有效期（国徽面） */
  ValidDate?: string;
  /** 扩展信息，不请求则不返回，具体输入参考示例3和示例4。IdCard，裁剪后身份证照片的base64编码，请求 Config.CropIdCard 时返回；Portrait，身份证头像照片的base64编码，请求 Config.CropPortrait 时返回；Quality，图片质量分数，请求 Config.Quality 时返回（取值范围：0 ~ 100，分数越低越模糊，建议阈值≥50）;BorderCodeValue，身份证边框不完整告警阈值分数，请求 Config.BorderCheckWarn时返回（取值范围：0 ~ 100，分数越低边框遮挡可能性越低，建议阈值≤50）;WarnInfos，告警信息，Code 告警码列表和释义：-9100 身份证有效日期不合法告警，-9101 身份证边框不完整告警，-9102 身份证复印件告警（黑白及彩色复印件）,-9108 身份证复印件告警（仅黑白复印件），-9103 身份证翻拍告警，-9105 身份证框内遮挡告警，-9104 临时身份证告警，-9106 身份证疑似存在PS痕迹告警，-9107 身份证反光告警。 */
  AdvancedInfo?: string;
  /** 反光点覆盖区域详情结果，具体内容请点击左侧链接 */
  ReflectDetailInfos?: ReflectDetailInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ImageEnhancementRequest {
  /** 图片的 Base64 值。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。 */
  ImageBase64?: string;
  /** 图片的 Url 地址。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。 */
  ImageUrl?: string;
  /** 默认为空，ReturnImage的取值以及含义如下：“preprocess”: 返回预处理后的图片数据“origin”：返回原图片数据" ":不返回图片数据 */
  ReturnImage?: string;
  /** 默认值为1，指定图像增强方法：1：切边增强2：弯曲矫正202：黑白模式204：提亮模式205：灰度模式207：省墨模式208：文字锐化（适合非彩色图片）300:自动增强（自动从301～304选择任务类型）301：去摩尔纹302：去除阴影303：去除模糊 304：去除过曝 */
  TaskType?: number;
}

declare interface ImageEnhancementResponse {
  /** 图片数据标识：“origin”：原图“preprocess”:预处理后的图 */
  ImageTag?: string;
  /** 图片数据，返回预处理后图像或原图像base64字符 */
  Image?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface InstitutionOCRRequest {
  /** 图片的 Base64 值。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。 */
  ImageBase64?: string;
  /** 图片的 Url 地址。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。 */
  ImageUrl?: string;
}

declare interface InstitutionOCRResponse {
  /** 注册号 */
  RegId?: string;
  /** 有效期 */
  ValidDate?: string;
  /** 住所 */
  Location?: string;
  /** 名称 */
  Name?: string;
  /** 法定代表人 */
  LegalPerson?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface InsuranceBillOCRRequest {
  /** 图片的 Base64 值。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。 */
  ImageBase64?: string;
  /** 图片的 Url 地址。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。 */
  ImageUrl?: string;
}

declare interface InsuranceBillOCRResponse {
  /** 保险单据识别结果，具体内容请点击左侧链接。 */
  InsuranceBillInfos: InsuranceBillInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface InvoiceGeneralOCRRequest {
  /** 图片的 Base64 值。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。 */
  ImageBase64?: string;
  /** 图片的 Url 地址。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。 */
  ImageUrl?: string;
  /** 是否开启PDF识别，默认值为true，开启后可同时支持图片和PDF的识别。 */
  IsPdf?: boolean;
  /** 需要识别的PDF页面的对应页码，仅支持PDF单页识别，当上传文件为PDF且IsPdf参数值为true时有效，默认值为1。 */
  PdfPageNumber?: number;
}

declare interface InvoiceGeneralOCRResponse {
  /** 通用机打发票识别结果，具体内容请点击左侧链接。 */
  InvoiceGeneralInfos?: InvoiceGeneralInfo[];
  /** 图片旋转角度（角度制），文本的水平方向为0°，顺时针为正，逆时针为负。 */
  Angle?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface LicensePlateOCRRequest {
  /** 图片的 Base64 值。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。 */
  ImageBase64?: string;
  /** 图片的 Url 地址。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。 */
  ImageUrl?: string;
}

declare interface LicensePlateOCRResponse {
  /** 识别出的车牌号码。 */
  Number?: string;
  /** 置信度，0 - 100 之间。 */
  Confidence?: number;
  /** 文本行在原图片中的像素坐标框。 */
  Rect?: Rect;
  /** 识别出的车牌颜色，目前支持颜色包括 “白”、“黑”、“蓝”、“绿“、“黄”、“黄绿”、“临牌”、“喷漆”、“其它”。 */
  Color?: string;
  /** 全部车牌信息。 */
  LicensePlateInfos?: LicensePlateInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface MLIDCardOCRRequest {
  /** 图片的 Base64 值。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。 */
  ImageBase64?: string;
  /** 图片的 Url 地址。( 中国地区之外不支持这个字段 )支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。 */
  ImageUrl?: string;
  /** 是否返回图片，默认false */
  RetImage?: boolean;
}

declare interface MLIDCardOCRResponse {
  /** 身份证号 */
  ID?: string;
  /** 姓名 */
  Name?: string;
  /** 地址 */
  Address?: string;
  /** 性别 */
  Sex?: string;
  /** 告警码-9103	证照翻拍告警-9102	证照复印件告警-9106 证件遮挡告警-9107 模糊图片告警 */
  Warn?: number[];
  /** 证件图片 */
  Image?: string;
  /** 此字段为扩展字段。返回字段识别结果的置信度，格式如下{ 字段名:{ Confidence:0.9999 }} */
  AdvancedInfo?: string;
  /** 证件类型MyKad 身份证MyPR 永居证MyTentera 军官证MyKAS 临时身份证POLIS 警察证IKAD 劳工证MyKid 儿童卡 */
  Type?: string;
  /** 出生日期（目前该字段仅支持IKAD劳工证、MyKad 身份证） */
  Birthday?: string;
  /** 告警码-9101 证件边框不完整告警-9102 证件复印件告警-9103 证件翻拍告警-9107 证件反光告警-9108 证件模糊告警-9109 告警能力未开通 */
  WarnCardInfos?: number[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface MLIDPassportOCRRequest {
  /** 图片的 Base64 值。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。 */
  ImageBase64?: string;
  /** 是否返回图片，默认false */
  RetImage?: boolean;
  /** 图片的 Url 地址。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。图片下载时间不超过 3 秒。建议图片存储于腾讯云，可保障更高的下载速度和稳定性。 */
  ImageUrl?: string;
}

declare interface MLIDPassportOCRResponse {
  /** 护照ID（机读码区的解析结果） */
  ID?: string;
  /** 姓名（机读码区的解析结果） */
  Name?: string;
  /** 出生日期（机读码区的解析结果） */
  DateOfBirth?: string;
  /** 性别（F女，M男）（机读码区的解析结果） */
  Sex?: string;
  /** 有效期（机读码区的解析结果） */
  DateOfExpiration?: string;
  /** 发行国（机读码区的解析结果） */
  IssuingCountry?: string;
  /** 国家地区代码（机读码区的解析结果） */
  Nationality?: string;
  /** 告警码：-9103	证照翻拍告警-9102	证照复印件告警（包括黑白复印件、彩色复印件）-9106 证件遮挡告警 */
  Warn?: number[];
  /** 证件中的人像图片base64 */
  Image?: string;
  /** 扩展字段:{ ID:{ Confidence:0.9999 }, Name:{ Confidence:0.9996 }} */
  AdvancedInfo?: string;
  /** 最下方第一行 MRZ Code 序列 */
  CodeSet?: string;
  /** 最下方第二行 MRZ Code 序列 */
  CodeCrc?: string;
  /** 姓（机读码区的解析结果） */
  Surname?: string | null;
  /** 名（机读码区的解析结果） */
  GivenName?: string | null;
  /** 类型（机读码区的解析结果） */
  Type?: string;
  /** 信息区证件内容 */
  PassportRecognizeInfos?: PassportRecognizeInfos;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface MainlandPermitOCRRequest {
  /** 图片的 Base64 值。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。 */
  ImageBase64?: string;
  /** 图片的 Url 地址。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。 */
  ImageUrl?: string;
  /** 是否返回头像。默认不返回。 */
  RetProfile?: boolean;
  /** 图片正反面FRONT：正面、BACK：反面，默认为FRONT */
  CardSide?: string;
}

declare interface MainlandPermitOCRResponse {
  /** 中文姓名 */
  Name?: string;
  /** 英文姓名 */
  EnglishName?: string;
  /** 性别 */
  Sex?: string;
  /** 出生日期 */
  Birthday?: string;
  /** 签发机关 */
  IssueAuthority?: string;
  /** 有效期限 */
  ValidDate?: string;
  /** 证件号 */
  Number?: string;
  /** 签发地点 */
  IssueAddress?: string;
  /** 签发次数 */
  IssueNumber?: string;
  /** 证件类别， 如：台湾居民来往大陆通行证、港澳居民来往内地通行证。 */
  Type?: string;
  /** RetProfile为True时返回头像字段， Base64编码 */
  Profile?: string;
  /** 背面字段信息 */
  MainlandTravelPermitBackInfos?: MainlandTravelPermitBackInfos;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface MixedInvoiceDetectRequest {
  /** 是否需要返回裁剪后的图片。 */
  ReturnImage: boolean;
  /** 图片的 Base64 值。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。 */
  ImageBase64?: string;
  /** 图片的 Url 地址。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。 */
  ImageUrl?: string;
  /** 是否开启PDF识别，默认值为true，开启后可同时支持图片和PDF的识别。 */
  IsPdf?: boolean;
  /** 需要识别的PDF页面的对应页码，仅支持PDF单页识别，当上传文件为PDF且IsPdf参数值为true时有效，默认值为1。 */
  PdfPageNumber?: number;
}

declare interface MixedInvoiceDetectResponse {
  /** 检测出的票据类型列表，具体内容请点击左侧链接。 */
  InvoiceDetectInfos?: InvoiceDetectInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface MixedInvoiceOCRRequest {
  /** 图片的 Base64 值。支持的图片格式：PNG、JPG、JPEG、PDF，暂不支持 GIF 格式。支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。 */
  ImageBase64?: string;
  /** 图片的 Url 地址。支持的图片格式：PNG、JPG、JPEG、PDF，暂不支持 GIF 格式。支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。 */
  ImageUrl?: string;
  /** 需要识别的票据类型列表，为空或不填表示识别全部类型。0：出租车发票1：定额发票2：火车票3：增值税发票5：机票行程单8：通用机打发票9：汽车票10：轮船票11：增值税发票（卷票 ）12：购车发票13：过路过桥费发票15：非税发票16：全电发票-----------------------1：其他发票,（只传入此类型时，图片均采用其他票类型进行识别） */
  Types?: number[];
  /** 是否识别其他类型发票，默认为YesYes：识别其他类型发票No：不识别其他类型发票 */
  ReturnOther?: string;
  /** 是否开启PDF识别，默认值为true，开启后可同时支持图片和PDF的识别。 */
  IsPdf?: boolean;
  /** 需要识别的PDF页面的对应页码，仅支持PDF单页识别，当上传文件为PDF且IsPdf参数值为true时有效，默认值为1。 */
  PdfPageNumber?: number;
  /** 是否开启PDF多页识别，默认值为false，开启后可同时支持多页PDF的识别返回，仅支持返回文件前30页。开启后IsPDF和PdfPageNumber入参不进行控制。 */
  ReturnMultiplePage?: boolean;
}

declare interface MixedInvoiceOCRResponse {
  /** 混贴票据识别结果，具体内容请点击左侧链接。 */
  MixedInvoiceItems?: MixedInvoiceItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface OrgCodeCertOCRRequest {
  /** 图片的 Base64 值。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。 */
  ImageBase64?: string;
  /** 图片的 Url 地址。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。 */
  ImageUrl?: string;
}

declare interface OrgCodeCertOCRResponse {
  /** 代码 */
  OrgCode?: string;
  /** 机构名称 */
  Name?: string;
  /** 地址 */
  Address?: string;
  /** 有效期 */
  ValidDate?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface PassportOCRRequest {
  /** 图片的 Base64 值。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。 */
  ImageBase64?: string;
  /** 图片的 Url 地址。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。建议图片存储于腾讯云，可保障更高的下载速度和稳定性。 */
  ImageUrl?: string;
  /** 默认填写CN支持中国大陆地区护照。 */
  Type?: string;
}

declare interface PassportOCRResponse {
  /** 国家码 */
  Country?: string;
  /** 护照号 */
  PassportNo?: string;
  /** 性别 */
  Sex?: string;
  /** 国籍 */
  Nationality?: string;
  /** 出生日期 */
  BirthDate?: string;
  /** 出生地点 */
  BirthPlace?: string;
  /** 签发日期 */
  IssueDate?: string;
  /** 签发地点 */
  IssuePlace?: string;
  /** 有效期 */
  ExpiryDate?: string;
  /** 持证人签名 */
  Signature?: string;
  /** 最下方第一行 MRZ Code 序列 */
  CodeSet?: string;
  /** 最下方第二行 MRZ Code 序列 */
  CodeCrc?: string;
  /** 姓名 */
  Name?: string;
  /** 姓 */
  FamilyName?: string;
  /** 名 */
  FirstName?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface PermitOCRRequest {
  /** 图片的 Base64 值。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。 */
  ImageBase64?: string;
  /** 图片的 Url 地址。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。 */
  ImageUrl?: string;
}

declare interface PermitOCRResponse {
  /** 姓名 */
  Name?: string;
  /** 英文姓名 */
  EnglishName?: string;
  /** 证件号 */
  Number?: string;
  /** 性别 */
  Sex?: string;
  /** 有效期限 */
  ValidDate?: string;
  /** 签发机关 */
  IssueAuthority?: string;
  /** 签发地点 */
  IssueAddress?: string;
  /** 出生日期 */
  Birthday?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface PropOwnerCertOCRRequest {
  /** 图片的 Base64 值。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。 */
  ImageBase64?: string;
  /** 图片的 Url 地址。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。 */
  ImageUrl?: string;
}

declare interface PropOwnerCertOCRResponse {
  /** 房地产权利人 */
  Owner?: string;
  /** 共有情况 */
  Possession?: string;
  /** 登记时间 */
  RegisterTime?: string;
  /** 规划用途 */
  Purpose?: string;
  /** 房屋性质 */
  Nature?: string;
  /** 房地坐落 */
  Location?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QrcodeOCRRequest {
  /** 图片的 Base64 值。要求图片经Base64编码后不超过 7M，支持PNG、JPG、JPEG格式。图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。 */
  ImageBase64?: string;
  /** 图片的 Url 地址。要求图片经Base64编码后不超过 7M，支持PNG、JPG、JPEG格式。建议图片存储于腾讯云，可保障更高的下载速度和稳定性。 */
  ImageUrl?: string;
}

declare interface QrcodeOCRResponse {
  /** 二维码/条形码识别结果信息，具体内容请点击左侧链接。 */
  CodeResults?: QrcodeResultsInfo[];
  /** 图片大小，具体内容请点击左侧链接。 */
  ImgSize?: QrcodeImgSize;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QuotaInvoiceOCRRequest {
  /** 图片的 Base64 值。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。 */
  ImageBase64?: string;
  /** 图片的 Url 地址。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。 */
  ImageUrl?: string;
  /** 是否开启PDF识别，默认值为true，开启后可同时支持图片和PDF的识别。 */
  IsPdf?: boolean;
  /** 需要识别的PDF页面的对应页码，仅支持PDF单页识别，当上传文件为PDF且IsPdf参数值为true时有效，默认值为1。 */
  PdfPageNumber?: number;
}

declare interface QuotaInvoiceOCRResponse {
  /** 发票号码 */
  InvoiceNum?: string;
  /** 发票代码 */
  InvoiceCode?: string;
  /** 大写金额 */
  Rate?: string;
  /** 小写金额 */
  RateNum?: string;
  /** 发票消费类型 */
  InvoiceType?: string;
  /** 省 */
  Province?: string | null;
  /** 市 */
  City?: string | null;
  /** 是否有公司印章（1有 0无 空为识别不出） */
  HasStamp?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RecognizeContainerOCRRequest {
  /** 图片的 Base64 值。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。 */
  ImageBase64?: string;
  /** 图片的 Url 地址。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。 */
  ImageUrl?: string;
}

declare interface RecognizeContainerOCRResponse {
  /** 集装箱箱号 */
  ContainerId?: string;
  /** 集装箱类型 */
  ContainerType?: string;
  /** 集装箱总重量，单位：千克（KG） */
  GrossKG?: string;
  /** 集装箱总重量，单位：磅（LB） */
  GrossLB?: string;
  /** 集装箱有效承重，单位：千克（KG） */
  PayloadKG?: string;
  /** 集装箱有效承重，单位：磅（LB） */
  PayloadLB?: string;
  /** 集装箱容量，单位：立方米 */
  CapacityM3?: string;
  /** 集装箱容量，单位：立英尺 */
  CapacityFT3?: string;
  /** 告警码-9926	集装箱箱号不完整或者不清晰-9927	集装箱类型不完整或者不清晰 */
  Warn?: number[];
  /** 集装箱自身重量，单位：千克（KG） */
  TareKG?: string;
  /** 集装箱自身重量，单位：磅（LB） */
  TareLB?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RecognizeEncryptedIDCardOCRRequest {
  /** 请求体被加密后的密文，本接口只支持加密传输 */
  EncryptedBody: string;
  /** 敏感数据加密信息。对传入信息有加密需求的用户可使用此参数，详情请点击左侧链接。 */
  Encryption: Encryption;
  /** 图片的 Base64 值。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。 */
  ImageBase64?: string;
  /** 图片的 Url 地址。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。建议图片存储于腾讯云，可保障更高的下载速度和稳定性。 */
  ImageUrl?: string;
  /** FRONT：身份证有照片的一面（人像面），BACK：身份证有国徽的一面（国徽面），该参数如果不填，将为您自动判断身份证正反面。 */
  CardSide?: string;
  /** 以下可选字段均为bool 类型，默认false：CropIdCard，身份证照片裁剪（去掉证件外多余的边缘、自动矫正拍摄角度）CropPortrait，人像照片裁剪（自动抠取身份证头像区域）CopyWarn，复印件告警BorderCheckWarn，边框和框内遮挡告警ReshootWarn，翻拍告警DetectPsWarn，疑似存在PS痕迹告警TempIdWarn，临时身份证告警InvalidDateWarn，身份证有效日期不合法告警Quality，图片质量分数（评价图片的模糊程度）MultiCardDetect，是否开启正反面同框识别（仅支持二代身份证正反页同框识别或临时身份证正反页同框识别）ReflectWarn，是否开启反光检测SDK 设置方式参考：Config = Json.stringify({"CropIdCard":true,"CropPortrait":true})API 3.0 Explorer 设置方式参考：Config = {"CropIdCard":true,"CropPortrait":true} */
  Config?: string;
  /** 默认值为true，打开识别结果纠正开关。开关开启后，身份证号、出生日期、性别，三个字段会进行矫正补齐，统一结果输出；若关闭此开关，以上三个字段不会进行矫正补齐，保持原始识别结果输出，若原图出现篡改情况，这三个字段的识别结果可能会不统一。 */
  EnableRecognitionRectify?: boolean;
  /** 默认值为false。此开关需要在反光检测开关开启下才会生效（即此开关生效的前提是config入参里的"ReflectWarn":true），若EnableReflectDetail设置为true，则会返回反光点覆盖区域详情。反光点覆盖区域详情分为四部分：人像照片位置、国徽位置、识别字段位置、其他位置。一个反光点允许覆盖多个区域，且一张图片可能存在多个反光点。 */
  EnableReflectDetail?: boolean;
}

declare interface RecognizeEncryptedIDCardOCRResponse {
  /** 姓名（人像面） */
  Name?: string;
  /** 性别（人像面） */
  Sex?: string;
  /** 民族（人像面） */
  Nation?: string;
  /** 出生日期（人像面） */
  Birth?: string;
  /** 地址（人像面） */
  Address?: string;
  /** 身份证号（人像面） */
  IdNum?: string;
  /** 发证机关（国徽面） */
  Authority?: string;
  /** 证件有效期（国徽面） */
  ValidDate?: string;
  /** 扩展信息，不请求则不返回，具体输入参考示例3和示例4。IdCard，裁剪后身份证照片的base64编码，请求 Config.CropIdCard 时返回；Portrait，身份证头像照片的base64编码，请求 Config.CropPortrait 时返回；Quality，图片质量分数，请求 Config.Quality 时返回（取值范围：0 ~ 100，分数越低越模糊，建议阈值≥50）;BorderCodeValue，身份证边框不完整告警阈值分数，请求 Config.BorderCheckWarn时返回（取值范围：0 ~ 100，分数越低边框遮挡可能性越低，建议阈值≤50）;WarnInfos，告警信息，Code 告警码列表和释义：-9100 身份证有效日期不合法告警，-9101 身份证边框不完整告警，-9102 身份证复印件告警（黑白及彩色复印件）,-9108 身份证复印件告警（仅黑白复印件），-9103 身份证翻拍告警，-9105 身份证框内遮挡告警，-9104 临时身份证告警，-9106 身份证疑似存在PS痕迹告警，-9107 身份证反光告警。 */
  AdvancedInfo?: string;
  /** 反光点覆盖区域详情结果，具体内容请点击左侧链接 */
  ReflectDetailInfos?: ReflectDetailInfo[];
  /** 加密后的数据 */
  EncryptedBody?: string;
  /** 敏感数据加密信息 */
  Encryption?: Encryption;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RecognizeForeignPermanentResidentIdCardRequest {
  /** 图片的 Url 地址。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。支持的图片像素：需介于20-10000px之间。图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。示例值：https://ocr-demo-1254418846.cos.ap-guangzhou.myqcloud.com/docume */
  ImageUrl?: string;
  /** 图片的 Base64 值。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。支持的图片像素：需介于20-10000px之间。图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。 */
  ImageBase64?: string;
  /** 是否开启PDF识别，默认值为false，开启后可同时支持图片和PDF的识别。 */
  EnablePdf?: boolean;
  /** 需要识别的PDF页面的对应页码，传入时仅支持PDF单页识别，当上传文件为PDF且EnablePdf参数值为true时有效，默认值为1。示例值：1 */
  PdfPageNumber?: number;
}

declare interface RecognizeForeignPermanentResidentIdCardResponse {
  /** 中文姓名。 */
  CnName?: string;
  /** 英文名。 */
  EnName?: string;
  /** 性别。 */
  Sex?: string;
  /** 出生日期。规范格式为 XXXX年XX月XX日。 */
  DateOfBirth?: string;
  /** 国籍。 */
  Nationality?: string;
  /** 有效期限。 */
  PeriodOfValidity?: string;
  /** 证件号码。 */
  No?: string;
  /** 曾持证件号码。 */
  PreviousNumber?: string;
  /** 签发机关。 */
  IssuedAuthority?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RecognizeGeneralInvoiceRequest {
  /** 图片的 Base64 值。支持的图片格式：PNG、JPG、JPEG、PDF，暂不支持 GIF 格式。支持的图片大小：所下载图片经Base64编码后不超过 8M。图片下载时间不超过 3 秒。支持的图片像素：单边介于20-10000px之间。图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。 */
  ImageBase64?: string;
  /** 图片的 Url 地址。支持的图片格式：PNG、JPG、JPEG、PDF，暂不支持 GIF 格式。支持的图片大小：所下载图片经 Base64 编码后不超过 8M。图片下载时间不超过 3 秒。支持的图片像素：单边介于20-10000px之间。图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。 */
  ImageUrl?: string;
  /** 需要识别的票据类型列表，为空或不填表示识别全部类型。当传入单个类型时，图片均采用该票类型进行处理。暂不支持多个参数进行局部控制。0：出租车发票1：定额发票2：火车票3：增值税发票5：机票行程单8：通用机打发票9：汽车票10：轮船票11：增值税发票（卷票 ）12：购车发票13：过路过桥费发票15：非税发票16：全电发票17：医疗发票-1：其他发票 */
  Types?: number[];
  /** 是否开启其他票识别，默认值为true，开启后可支持其他发票的智能识别。 */
  EnableOther?: boolean;
  /** 是否开启PDF识别，默认值为true，开启后可同时支持图片和PDF的识别。 */
  EnablePdf?: boolean;
  /** 需要识别的PDF页面的对应页码，传入时仅支持PDF单页识别，当上传文件为PDF且EnablePdf参数值为true时有效，默认值为1。 */
  PdfPageNumber?: number;
  /** 是否开启PDF多页识别，默认值为false，开启后可同时支持多页PDF的识别返回，仅支持返回文件前30页。开启后EnablePdf和PdfPageNumber入参不进行控制。 */
  EnableMultiplePage?: boolean;
  /** 是否返回切割图片base64，默认值为false。 */
  EnableCutImage?: boolean;
  /** 是否打开字段坐标返回。默认为false。 */
  EnableItemPolygon?: boolean;
}

declare interface RecognizeGeneralInvoiceResponse {
  /** 混贴票据识别结果，具体内容请点击左侧链接。 */
  MixedInvoiceItems?: InvoiceItem[];
  /** PDF文件总页码 */
  TotalPDFCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RecognizeGeneralTextImageWarnRequest {
  /** 图片的 Url 地址。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。支持的图片像素：需介于20-10000px之间。图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。 */
  ImageUrl?: string;
  /** 图片的 Base64 值。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。支持的图片像素：需介于20-10000px之间。图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。 */
  ImageBase64?: string;
  /** 是否开启PDF识别，默认值为true，开启后可同时支持图片和PDF的识别。 示例值：false */
  EnablePdf?: boolean;
  /** 需要识别的PDF页面的对应页码，传入时仅支持PDF单页识别，当上传文件为PDF且EnablePdf参数值为true时有效，默认值为1。 示例值：1 */
  PdfPageNumber?: number;
  /** 支持的模板类型- General 通用告警- LicensePlate 车牌告警 */
  Type?: string;
}

declare interface RecognizeGeneralTextImageWarnResponse {
  /** 复印告警信息 */
  Copy?: GeneralWarnInfo;
  /** 翻拍告警信息 */
  Reprint?: GeneralWarnInfo;
  /** 模糊告警信息 */
  Blur?: GeneralWarnInfo;
  /** 反光告警信息 */
  Reflection?: GeneralWarnInfo;
  /** 边框不完整告警信息 */
  BorderIncomplete?: GeneralWarnInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RecognizeHealthCodeOCRRequest {
  /** 图片的 Base64 值。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。 */
  ImageBase64?: string;
  /** 图片的 Url 地址。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。 */
  ImageUrl?: string;
  /** 需要识别的健康码类型列表，为空或不填表示默认为自动识别。0:自动识别 */
  Type?: number;
}

declare interface RecognizeHealthCodeOCRResponse {
  /** 持码人姓名，如：王*（允许返回空值） */
  Name?: string;
  /** 持码人身份证号，如：11**************01（允许返回空值） */
  IDNumber?: string;
  /** 健康码更新时间（允许返回空值） */
  Time?: string;
  /** 健康码颜色：绿色、黄色、红色（允许返回空值） */
  Color?: string;
  /** 核酸检测间隔时长（允许返回空值） */
  TestingInterval?: string;
  /** 核酸检测结果：阴性、阳性、暂无核酸检测记录（允许返回空值） */
  TestingResult?: string;
  /** 核酸检测时间（允许返回空值） */
  TestingTime?: string;
  /** 疫苗接种信息，返回接种针数或接种情况（允许返回空值） */
  Vaccination?: string;
  /** 场所名称（允许返回空值） */
  SpotName?: string;
  /** 疫苗接种时间 */
  VaccinationTime?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RecognizeIndonesiaIDCardOCRRequest {
  /** 图片的 Base64 值。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。 */
  ImageBase64?: string;
  /** 图片的 Url 地址。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。 */
  ImageUrl?: string;
  /** 是否返回人像照片。 */
  ReturnHeadImage?: boolean;
  /** 场景参数，默认值为V1可选值：V1V2 */
  Scene?: string;
}

declare interface RecognizeIndonesiaIDCardOCRResponse {
  /** 证件号码 */
  NIK?: string;
  /** 姓名 */
  Nama?: string;
  /** 出生地/出生时间 */
  TempatTglLahir?: string;
  /** 性别 */
  JenisKelamin?: string;
  /** 血型 */
  GolDarah?: string;
  /** 地址 */
  Alamat?: string;
  /** 街道 */
  RTRW?: string;
  /** 村 */
  KelDesa?: string;
  /** 地区 */
  Kecamatan?: string;
  /** 宗教信仰 */
  Agama?: string;
  /** 婚姻状况 */
  StatusPerkawinan?: string;
  /** 职业 */
  Perkerjaan?: string;
  /** 国籍 */
  KewargaNegaraan?: string;
  /** 身份证有效期限 */
  BerlakuHingga?: string;
  /** 发证日期 */
  IssuedDate?: string;
  /** 人像截图 */
  Photo?: string;
  /** 省份，Scene为V2时支持识别 */
  Provinsi?: string;
  /** 城市，Scene为V2时支持识别 */
  Kota?: string;
  /** 告警码-9101 证件边框不完整告警-9102 证件复印件告警-9103 证件翻拍告警-9107 证件反光告警-9108 证件模糊告警-9109 告警能力未开通 */
  WarnCardInfos?: number[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RecognizeMedicalInvoiceOCRRequest {
  /** 图片的Base64 值。支持的文件格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载文件经Base64编码后不超过 7M。文件下载时间不超过 3 秒。输入参数 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。 */
  ImageBase64?: string;
  /** 图片的Url 地址。支持的文件格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载文件经 Base64 编码后不超过 7M。文件下载时间不超过 3 秒。图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。 */
  ImageUrl?: string;
  /** 是否需要返回识别出的文本行在原图上的四点坐标，默认不返回 */
  ReturnVertex?: boolean;
  /** 是否需要返回识别出的文本行在旋转纠正之后的图像中的四点坐标，默认不返回 */
  ReturnCoord?: boolean;
  /** 是否开启PDF识别，默认值为true，开启后可同时支持图片和PDF的识别。 */
  IsPdf?: boolean;
  /** 需要识别的PDF页面的对应页码，仅支持PDF单页识别，当上传文件为PDF且IsPdf参数值为true时有效，默认值为1。 */
  PdfPageNumber?: number;
}

declare interface RecognizeMedicalInvoiceOCRResponse {
  /** 识别出的字段信息 */
  MedicalInvoiceInfos?: MedicalInvoiceInfo[];
  /** 图片旋转角度（角度制），文本的水平方向为0°，顺时针为正，逆时针为负。 */
  Angle?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RecognizeOnlineTaxiItineraryOCRRequest {
  /** 图片的 Base64 值。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。 */
  ImageBase64?: string;
  /** 图片的 Url 地址。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。 */
  ImageUrl?: string;
  /** 是否开启PDF识别，默认值为false，开启后可同时支持图片和PDF的识别。 */
  IsPdf?: boolean;
  /** 需要识别的PDF页面的对应页码，仅支持PDF单页识别，当上传文件为PDF且IsPdf参数值为true时有效，默认值为1。 */
  PdfPageNumber?: number;
}

declare interface RecognizeOnlineTaxiItineraryOCRResponse {
  /** 网约车行程单识别结果，具体内容请点击左侧链接。 */
  OnlineTaxiItineraryInfos?: OnlineTaxiItineraryInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RecognizePhilippinesDrivingLicenseOCRRequest {
  /** 图片的 Base64 值。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。 */
  ImageBase64?: string;
  /** 图片的 Url 地址。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。 */
  ImageUrl?: string;
  /** 是否返回人像照片。 */
  ReturnHeadImage?: boolean;
}

declare interface RecognizePhilippinesDrivingLicenseOCRResponse {
  /** 人像照片Base64后的结果 */
  HeadPortrait: TextDetectionResult;
  /** 姓名 */
  Name: TextDetectionResult;
  /** 姓氏 */
  LastName: TextDetectionResult;
  /** 首姓名 */
  FirstName: TextDetectionResult;
  /** 中间姓名 */
  MiddleName: TextDetectionResult;
  /** 国籍 */
  Nationality: TextDetectionResult;
  /** 性别 */
  Sex: TextDetectionResult;
  /** 地址 */
  Address: TextDetectionResult;
  /** 证号 */
  LicenseNo: TextDetectionResult;
  /** 有效期 */
  ExpiresDate: TextDetectionResult;
  /** 机构代码 */
  AgencyCode: TextDetectionResult;
  /** 出生日期 */
  Birthday: TextDetectionResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RecognizePhilippinesSssIDOCRRequest {
  /** 是否返回人像照片。 */
  ReturnHeadImage: boolean;
  /** 图片的 Base64 值。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。 */
  ImageBase64?: string;
  /** 图片的 Url 地址。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。 */
  ImageUrl?: string;
}

declare interface RecognizePhilippinesSssIDOCRResponse {
  /** 人像照片Base64后的结果 */
  HeadPortrait?: TextDetectionResult;
  /** 编号 */
  LicenseNumber?: TextDetectionResult;
  /** 姓名 */
  FullName?: TextDetectionResult;
  /** 生日 */
  Birthday?: TextDetectionResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RecognizePhilippinesTinIDOCRRequest {
  /** 是否返回人像照片。 */
  ReturnHeadImage: boolean;
  /** 图片的 Base64 值。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。 */
  ImageBase64?: string;
  /** 图片的 Url 地址。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。 */
  ImageUrl?: string;
}

declare interface RecognizePhilippinesTinIDOCRResponse {
  /** 人像照片Base64后的结果 */
  HeadPortrait: TextDetectionResult;
  /** 编码 */
  LicenseNumber: TextDetectionResult;
  /** 姓名 */
  FullName: TextDetectionResult;
  /** 地址 */
  Address: TextDetectionResult;
  /** 生日 */
  Birthday: TextDetectionResult;
  /** 发证日期 */
  IssueDate: TextDetectionResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RecognizePhilippinesUMIDOCRRequest {
  /** 图片的 Base64 值。 支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。 支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。 图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。 */
  ImageBase64?: string;
  /** 图片的 Url 地址。 支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。 支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。 图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。 非腾讯云存储的 Url 速度和稳定性可能受一定影响。 */
  ImageUrl?: string;
  /** 是否返回人像照片。 */
  ReturnHeadImage?: boolean;
}

declare interface RecognizePhilippinesUMIDOCRResponse {
  /** 姓 */
  Surname?: TextDetectionResult;
  /** 中间名 */
  MiddleName?: TextDetectionResult;
  /** 名 */
  GivenName?: TextDetectionResult;
  /** 地址 */
  Address?: TextDetectionResult;
  /** 生日 */
  Birthday?: TextDetectionResult;
  /** crn码 */
  CRN?: TextDetectionResult;
  /** 性别 */
  Sex?: TextDetectionResult;
  /** 人像照片Base64后的结果 */
  HeadPortrait?: TextDetectionResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RecognizePhilippinesVoteIDOCRRequest {
  /** 是否返回人像照片。 */
  ReturnHeadImage: boolean;
  /** 图片的 Base64 值。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。 */
  ImageBase64?: string;
  /** 图片的 Url 地址。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。 */
  ImageUrl?: string;
}

declare interface RecognizePhilippinesVoteIDOCRResponse {
  /** 人像照片Base64后的结果 */
  HeadPortrait?: TextDetectionResult;
  /** 菲律宾VoteID的VIN */
  VIN?: TextDetectionResult;
  /** 姓名 */
  FirstName?: TextDetectionResult;
  /** 姓氏 */
  LastName?: TextDetectionResult;
  /** 出生日期 */
  Birthday?: TextDetectionResult;
  /** 婚姻状况 */
  CivilStatus?: TextDetectionResult;
  /** 国籍 */
  Citizenship?: TextDetectionResult;
  /** 地址 */
  Address?: TextDetectionResult;
  /** 地区 */
  PrecinctNo?: TextDetectionResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RecognizeTableAccurateOCRRequest {
  /** 图片/PDF的 Base64 值。要求图片/PDF经Base64编码后不超过 7M，分辨率建议600*800以上，支持PNG、JPG、JPEG、BMP、PDF格式。图片支持的像素范围：需介于20-10000px之间。图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。 */
  ImageBase64?: string;
  /** 图片/PDF的 Url 地址。要求图片/PDF经Base64编码后不超过 7M，分辨率建议600*800以上，支持PNG、JPG、JPEG、BMP、PDF格式。图片支持的像素范围：需介于20-10000px之间。图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。 */
  ImageUrl?: string;
  /** 需要识别的PDF页面的对应页码，仅支持PDF单页识别，当上传文件为PDF有效，默认值为1。 */
  PdfPageNumber?: number;
}

declare interface RecognizeTableAccurateOCRResponse {
  /** 检测到的文本信息，具体内容请点击左侧链接。 */
  TableDetections?: TableInfo[] | null;
  /** Base64 编码后的 Excel 数据。 */
  Data?: string;
  /** 图片为PDF时，返回PDF的总页数，默认为0 */
  PdfPageSize?: number | null;
  /** 图片旋转角度（角度制），文本的水平方向为0°，统一以逆时针方向旋转，逆时针为负，角度范围为-360°至0°。 */
  Angle?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RecognizeTableOCRRequest {
  /** 图片/PDF的 Base64 值。要求图片/PDF经Base64编码后不超过 7M，分辨率建议600*800以上，支持PNG、JPG、JPEG、BMP、PDF格式。图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。 */
  ImageBase64?: string;
  /** 图片/PDF的 Url 地址。要求图片/PDF经Base64编码后不超过 7M，分辨率建议600*800以上，支持PNG、JPG、JPEG、BMP、PDF格式。图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。 */
  ImageUrl?: string;
  /** 是否开启PDF识别，默认值为false，开启后可同时支持图片和PDF的识别。 */
  IsPdf?: boolean;
  /** 需要识别的PDF页面的对应页码，仅支持PDF单页识别，当上传文件为PDF且IsPdf参数值为true时有效，默认值为1。 */
  PdfPageNumber?: number;
  /** 语言，zh：中英文（默认）jap：日文 */
  TableLanguage?: string;
}

declare interface RecognizeTableOCRResponse {
  /** 检测到的文本信息，具体内容请点击左侧链接。 */
  TableDetections?: TableDetectInfo[];
  /** Base64 编码后的 Excel 数据。 */
  Data?: string;
  /** 图片为PDF时，返回PDF的总页数，默认为0 */
  PdfPageSize?: number;
  /** 图片旋转角度（角度制），文本的水平方向为0°，统一以逆时针方向旋转，逆时针为负，角度范围为-360°至0°。 */
  Angle?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RecognizeThaiIDCardOCRRequest {
  /** 图片的 Base64 值。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。 */
  ImageBase64?: string;
  /** 图片的 Url 地址。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。建议图片存储于腾讯云，可保障更高的下载速度和稳定性。 */
  ImageUrl?: string;
  /** 图片开关。默认为false，不返回泰国身份证头像照片的base64编码。设置为true时，返回旋转矫正后的泰国身份证头像照片的base64编码 */
  CropPortrait?: boolean;
}

declare interface RecognizeThaiIDCardOCRResponse {
  /** 身份证号码 */
  ID?: string;
  /** 泰文姓名 */
  ThaiName?: string;
  /** 英文姓名 */
  EnFirstName?: string;
  /** 英文姓名 */
  EnLastName?: string;
  /** 泰文签发日期 */
  IssueDate?: string;
  /** 泰文到期日期 */
  ExpirationDate?: string;
  /** 英文签发日期 */
  EnIssueDate?: string;
  /** 英文到期日期 */
  EnExpirationDate?: string;
  /** 泰文出生日期 */
  Birthday?: string;
  /** 英文出生日期 */
  EnBirthday?: string;
  /** 宗教信仰 */
  Religion?: string;
  /** 序列号 */
  SerialNumber?: string;
  /** 地址 */
  Address?: string;
  /** 证件人像照片抠取 */
  PortraitImage?: string;
  /** 告警码-9101 证件边框不完整告警-9102 证件复印件告警-9103 证件翻拍告警-9107 证件反光告警-9108 证件模糊告警-9109 告警能力未开通 */
  WarnCardInfos?: number[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RecognizeTravelCardOCRRequest {
  /** 图片的 Base64 值。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。 */
  ImageBase64?: string;
  /** 图片的 Url 地址。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。 */
  ImageUrl?: string;
}

declare interface RecognizeTravelCardOCRResponse {
  /** 行程卡更新时间，格式为：XXXX.XX.XX XX:XX:XX */
  Time?: string;
  /** 行程卡颜色：绿色、黄色、红色 */
  Color?: string;
  /** 7天内到达或途经的城市（自2022年7月8日起，通信行程卡查询结果的覆盖时间范围由“14天”调整为“7天”） */
  ReachedCity?: string[];
  /** 7天内到达或途径存在中高风险地区的城市（自2022年6月29日起，通信行程卡取消“星号”标记，改字段将返回空值） */
  RiskArea?: string[];
  /** 电话号码 */
  Telephone?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ReconstructDocumentRequest {
  /** PDF,Image */
  FileType: string;
  /** 图片的 Base64 值。 支持的图片格式：PNG、JPG、JPEG、PDF，暂不支持 GIF 格式。 支持的图片大小：所下载图片经Base64编码后不超过 8M。图片下载时间不超过 3 秒。 支持的图片像素：单边介于20-10000px之间。 图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。 */
  FileBase64?: string;
  /** 图片的 Url 地址。 支持的图片格式：PNG、JPG、JPEG、PDF，暂不支持 GIF 格式。 支持的图片大小：所下载图片经 Base64 编码后不超过 8M。图片下载时间不超过 3 秒。 支持的图片像素：单边介于20-10000px之间。 图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。 非腾讯云存储的 Url 速度和稳定性可能受一定影响。 */
  FileUrl?: string;
  /** 当传入文件是PDF类型（IsPdf=true）时，用来指定pdf识别的起始页码，识别的页码包含当前值。 */
  FileStartPageNumber?: number;
  /** 当传入文件是PDF类型（IsPdf=true）时，用来指定pdf识别的结束页码，识别的页码包含当前值。单次调用，最多支持10页pdf的智能识别。 */
  FileEndPageNumber?: number;
  /** 配置选项，支持配置是否在生成的Markdown中是否嵌入图片 */
  Config?: ReconstructDocumentConfig;
}

declare interface ReconstructDocumentResponse {
  /** 识别生成的Markdown文件base64编码的字符串 */
  MarkdownBase64?: string | null;
  /** 输入文件中嵌入的图片放在一个文件夹中打包为.zip压缩文件，识别生成的Markdown文件通过路径关联插入本文件夹中的图片。 */
  InsetImagePackage?: string | null;
  /** 输入文件中嵌入的图片中文字内容的识别结果 */
  DocumentRecognizeInfo?: DocumentRecognizeInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ResidenceBookletOCRRequest {
  /** 图片的 Base64 值。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。 */
  ImageBase64?: string;
  /** 图片的 Url 地址。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。 */
  ImageUrl?: string;
}

declare interface ResidenceBookletOCRResponse {
  /** 户号 */
  HouseholdNumber?: string;
  /** 姓名 */
  Name?: string;
  /** 性别 */
  Sex?: string;
  /** 出生地 */
  BirthPlace?: string;
  /** 民族 */
  Nation?: string;
  /** 籍贯 */
  NativePlace?: string;
  /** 出生日期 */
  BirthDate?: string;
  /** 公民身份证件编号 */
  IdCardNumber?: string;
  /** 文化程度 */
  EducationDegree?: string;
  /** 服务处所 */
  ServicePlace?: string;
  /** 户别 */
  Household?: string;
  /** 住址 */
  Address?: string;
  /** 承办人签章文字 */
  Signature?: string;
  /** 签发日期 */
  IssueDate?: string;
  /** 户主页编号 */
  HomePageNumber?: string;
  /** 户主姓名 */
  HouseholderName?: string;
  /** 户主或与户主关系 */
  Relationship?: string;
  /** 本市（县）其他住址 */
  OtherAddresses?: string;
  /** 宗教信仰 */
  ReligiousBelief?: string;
  /** 身高 */
  Height?: string;
  /** 血型 */
  BloodType?: string;
  /** 婚姻状况 */
  MaritalStatus?: string;
  /** 兵役状况 */
  VeteranStatus?: string;
  /** 职业 */
  Profession?: string;
  /** 何时由何地迁来本市(县) */
  MoveToCityInformation?: string;
  /** 何时由何地迁来本址 */
  MoveToSiteInformation?: string;
  /** 登记日期 */
  RegistrationDate?: string;
  /** 曾用名 */
  FormerName?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RideHailingDriverLicenseOCRRequest {
  /** 图片的 Base64 值。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。 */
  ImageBase64?: string;
  /** 图片的 Url 地址。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。图片下载时间不超过 3 秒。建议图片存储于腾讯云，可保障更高的下载速度和稳定性。 */
  ImageUrl?: string;
}

declare interface RideHailingDriverLicenseOCRResponse {
  /** 姓名 */
  Name?: string;
  /** 证号，对应网约车驾驶证字段：证号/从业资格证号/驾驶员证号/身份证号 */
  LicenseNumber?: string;
  /** 有效起始日期 */
  StartDate?: string;
  /** 有效期截止时间，对应网约车驾驶证字段：有效期至/营运期限止 */
  EndDate?: string;
  /** 初始发证日期，对应网约车驾驶证字段：初始领证日期/发证日期 */
  ReleaseDate?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RideHailingTransportLicenseOCRRequest {
  /** 图片的 Base64 值。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。 */
  ImageBase64?: string;
  /** 图片的 Url 地址。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。图片下载时间不超过 3 秒。建议图片存储于腾讯云，可保障更高的下载速度和稳定性。 */
  ImageUrl?: string;
}

declare interface RideHailingTransportLicenseOCRResponse {
  /** 交运管许可字号。 */
  OperationLicenseNumber?: string;
  /** 车辆所有人，对应网约车运输证字段：车辆所有人/车主名称/业户名称。 */
  VehicleOwner?: string;
  /** 车牌号码，对应网约车运输证字段：车牌号码/车辆号牌。 */
  VehicleNumber?: string;
  /** 有效起始日期。 */
  StartDate?: string;
  /** 有效期截止时间，对应网约车运输证字段：有效期至/营运期限止。 */
  EndDate?: string;
  /** 初始发证日期，对应网约车运输证字段：初始领证日期/发证日期。 */
  ReleaseDate?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SealOCRRequest {
  /** 图片的 Base64 值。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP、PDF格式。建议卡片部分占据图片2/3以上。图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。 */
  ImageBase64?: string;
  /** 图片的 Url 地址。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP、PDF格式。建议卡片部分占据图片2/3以上。图片下载时间不超过 3 秒。建议图片存储于腾讯云，可保障更高的下载速度和稳定性。 */
  ImageUrl?: string;
  /** 是否开启PDF识别，默认值为true，开启后可同时支持图片和PDF的识别。 */
  EnablePdf?: boolean;
  /** 需要识别的PDF页面的对应页码，传入时仅支持PDF单页识别，当上传文件为PDF且EnablePdf参数值为true时有效，默认值为1。 */
  PdfPageNumber?: number;
}

declare interface SealOCRResponse {
  /** 印章内容 */
  SealBody?: string;
  /** 印章坐标 */
  Location?: Rect;
  /** 其它文本内容 */
  OtherTexts?: string[];
  /** 全部印章信息 */
  SealInfos?: SealInfo[];
  /** 印章类型，表示为：圆形印章：0椭圆形印章：1方形印章：2菱形印章：3三角形印章：4 */
  SealShape?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ShipInvoiceOCRRequest {
  /** 图片的 Base64 值。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。 */
  ImageBase64?: string;
  /** 图片的 Url 地址。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。 */
  ImageUrl?: string;
  /** 是否开启PDF识别，默认值为true，开启后可同时支持图片和PDF的识别。 */
  IsPdf?: boolean;
  /** 需要识别的PDF页面的对应页码，仅支持PDF单页识别，当上传文件为PDF且IsPdf参数值为true时有效，默认值为1。 */
  PdfPageNumber?: number;
}

declare interface ShipInvoiceOCRResponse {
  /** 轮船票识别结果，具体内容请点击左侧链接。 */
  ShipInvoiceInfos?: ShipInvoiceInfo[];
  /** 图片旋转角度（角度制），文本的水平方向为0°，顺时针为正，逆时针为负。 */
  Angle?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SmartStructuralOCRRequest {
  /** 图片的 Url 地址。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。 */
  ImageUrl?: string;
  /** 图片的 Base64 值。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。 */
  ImageBase64?: string;
  /** 自定义结构化功能需返回的字段名称，例：若客户只想返回姓名、性别两个字段的识别结果，则输入ItemNames=["姓名","性别"] */
  ItemNames?: string[];
  /** 是否开启PDF识别，默认值为false，开启后可同时支持图片和PDF的识别。 */
  IsPdf?: boolean;
  /** 需要识别的PDF页面的对应页码，仅支持PDF单页识别，当上传文件为PDF且IsPdf参数值为true时有效，默认值为1。 */
  PdfPageNumber?: number;
  /** 是否开启全文字段识别，默认值为false，开启后可返回全文字段识别结果。 */
  ReturnFullText?: boolean;
}

declare interface SmartStructuralOCRResponse {
  /** 图片旋转角度(角度制)，文本的水平方向为 0；顺时针为正，逆时针为负 */
  Angle: number;
  /** 识别信息 */
  StructuralItems: StructuralItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SmartStructuralOCRV2Request {
  /** 图片的 Url 地址。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。支持的图片像素：需介于20-10000px之间。图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。 */
  ImageUrl?: string;
  /** 图片的 Base64 值。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。支持的图片像素：需介于20-10000px之间。图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。 */
  ImageBase64?: string;
  /** 是否开启PDF识别，默认值为false，开启后可同时支持图片和PDF的识别。 */
  IsPdf?: boolean;
  /** 需要识别的PDF页面的对应页码，仅支持PDF单页识别，当上传文件为PDF且IsPdf参数值为true时有效，默认值为1。 */
  PdfPageNumber?: number;
  /** 自定义结构化功能需返回的字段名称，例：若客户只想返回姓名、性别两个字段的识别结果，则输入ItemNames=["姓名","性别"] */
  ItemNames?: string[];
  /** 是否开启全文字段识别 */
  ReturnFullText?: boolean;
  /** 配置id支持：General -- 通用场景OnlineTaxiItinerary -- 网约车行程单RideHailingDriverLicense -- 网约车驾驶证RideHailingTransportLicense -- 网约车运输证WayBill -- 快递运单AccountOpeningPermit -- 银行开户许可证InvoiceEng -- 海外发票模版Coin --钱币识别模板OnboardingDocuments -- 入职材料识别PropertyOwnershipCertificate -- 房产证识别RealEstateCertificate --不动产权证识别HouseEncumbranceCertificate -- 他权证识别CarInsurance -- 车险保单MultiRealEstateCertificate -- 房产证、不动产证、产权证等材料合一模板 */
  ConfigId?: string;
  /** 是否打开印章识别 */
  EnableSealRecognize?: boolean;
}

declare interface SmartStructuralOCRV2Response {
  /** 图片旋转角度(角度制)，文本的水平方向为 0；顺时针为正，逆时针为负 */
  Angle?: number;
  /** 配置结构化文本信息 */
  StructuralList?: GroupInfo[];
  /** 还原文本信息 */
  WordList?: WordItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface TableOCRRequest {
  /** 图片的 Base64 值。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。 */
  ImageBase64?: string;
  /** 图片的 Url 地址。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。 */
  ImageUrl?: string;
}

declare interface TableOCRResponse {
  /** 检测到的文本信息，具体内容请点击左侧链接 */
  TextDetections?: TextTable[];
  /** Base64 编码后的 Excel 数据。 */
  Data?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface TaxiInvoiceOCRRequest {
  /** 图片的 Base64 值。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。 */
  ImageBase64?: string;
  /** 图片的 Url 地址。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。 */
  ImageUrl?: string;
  /** 是否开启PDF识别，默认值为true，开启后可同时支持图片和PDF的识别。 */
  IsPdf?: boolean;
  /** 需要识别的PDF页面的对应页码，仅支持PDF单页识别，当上传文件为PDF且IsPdf参数值为true时有效，默认值为1。 */
  PdfPageNumber?: number;
}

declare interface TaxiInvoiceOCRResponse {
  /** 发票代码 */
  InvoiceNum?: string;
  /** 发票号码 */
  InvoiceCode?: string;
  /** 日期 */
  Date?: string;
  /** 金额 */
  Fare?: string;
  /** 上车时间 */
  GetOnTime?: string;
  /** 下车时间 */
  GetOffTime?: string;
  /** 里程 */
  Distance?: string;
  /** 发票所在地 */
  Location?: string;
  /** 车牌号 */
  PlateNumber?: string;
  /** 发票消费类型 */
  InvoiceType?: string;
  /** 省 */
  Province?: string | null;
  /** 市 */
  City?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface TextDetectRequest {
  /** 图片的 Base64 值。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。 */
  ImageBase64?: string;
  /** 图片的 Url 地址。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。 */
  ImageUrl?: string;
}

declare interface TextDetectResponse {
  /** 图片中是否包含文字。 */
  HasText: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface TollInvoiceOCRRequest {
  /** 图片的 Base64 值。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。 */
  ImageBase64?: string;
  /** 图片的 Url 地址。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。 */
  ImageUrl?: string;
  /** 是否开启PDF识别，默认值为true，开启后可同时支持图片和PDF的识别。 */
  IsPdf?: boolean;
  /** 需要识别的PDF页面的对应页码，仅支持PDF单页识别，当上传文件为PDF且IsPdf参数值为true时有效，默认值为1。 */
  PdfPageNumber?: number;
}

declare interface TollInvoiceOCRResponse {
  /** 过路过桥费发票识别结果，具体内容请点击左侧链接。 */
  TollInvoiceInfos?: TollInvoiceInfo[];
  /** 图片旋转角度（角度制），文本的水平方向为0°，顺时针为正，逆时针为负。 */
  Angle?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface TrainTicketOCRRequest {
  /** 图片的 Base64 值。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。 */
  ImageBase64?: string;
  /** 图片的 Url 地址。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。 */
  ImageUrl?: string;
  /** 是否开启PDF识别，默认值为true，开启后可同时支持图片和PDF的识别。 */
  IsPdf?: boolean;
  /** 需要识别的PDF页面的对应页码，仅支持PDF单页识别，当上传文件为PDF且IsPdf参数值为true时有效，默认值为1。 */
  PdfPageNumber?: number;
}

declare interface TrainTicketOCRResponse {
  /** 编号 */
  TicketNum?: string;
  /** 出发站 */
  StartStation?: string;
  /** 到达站 */
  DestinationStation?: string;
  /** 出发时间 */
  Date?: string;
  /** 车次 */
  TrainNum?: string;
  /** 座位号 */
  Seat?: string;
  /** 姓名 */
  Name?: string;
  /** 票价 */
  Price?: string;
  /** 席别 */
  SeatCategory?: string;
  /** 身份证号 */
  ID?: string;
  /** 发票消费类型：交通 */
  InvoiceType?: string;
  /** 序列号 */
  SerialNumber?: string;
  /** 加收票价 */
  AdditionalCost?: string;
  /** 手续费 */
  HandlingFee?: string;
  /** 大写金额（票面有大写金额该字段才有值） */
  LegalAmount?: string;
  /** 售票站 */
  TicketStation?: string;
  /** 原票价（一般有手续费的才有原始票价字段） */
  OriginalPrice?: string;
  /** 发票类型：火车票、火车票补票、火车票退票凭证 */
  InvoiceStyle?: string;
  /** 收据号码 */
  ReceiptNumber?: string;
  /** 仅供报销使用：1为是，0为否 */
  IsReceipt?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface VatInvoiceOCRRequest {
  /** 图片/PDF的 Base64 值。支持的文件格式：PNG、JPG、JPEG、PDF，暂不支持 GIF 格式。支持的图片/PDF大小：所下载文件经Base64编码后不超过 7M。文件下载时间不超过 3 秒。支持的图片像素：需介于20-10000px之间。输入参数 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。 */
  ImageBase64?: string;
  /** 图片/PDF的 Url 地址。支持的文件格式：PNG、JPG、JPEG、PDF，暂不支持 GIF 格式。支持的图片/PDF大小：所下载文件经 Base64 编码后不超过 7M。文件下载时间不超过 3 秒。支持的图片像素：需介于20-10000px之间。图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。 */
  ImageUrl?: string;
  /** 是否开启PDF识别，默认值为false，开启后可同时支持图片和PDF的识别。 */
  IsPdf?: boolean;
  /** 需要识别的PDF页面的对应页码，仅支持PDF单页识别，当上传文件为PDF且IsPdf参数值为true时有效，默认值为1。 */
  PdfPageNumber?: number;
}

declare interface VatInvoiceOCRResponse {
  /** 检测到的文本信息，具体内容请点击左侧链接。 */
  VatInvoiceInfos?: TextVatInvoice[];
  /** 明细条目。VatInvoiceInfos中关于明细项的具体条目。 */
  Items?: VatInvoiceItem[];
  /** 默认值为0。如果图片为PDF时，返回PDF的总页数。 */
  PdfPageSize?: number;
  /** 图片旋转角度（角度制），文本的水平方向为0°；顺时针为正，逆时针为负。点击查看如何纠正倾斜文本 */
  Angle?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface VatInvoiceVerifyNewRequest {
  /** 发票号码，8位、20位（全电票） */
  InvoiceNo: string;
  /** 开票日期（不支持当天发票查询，支持五年以内开具的发票），格式：“YYYY-MM-DD”，如：2019-12-20。 */
  InvoiceDate: string;
  /** 发票代码（10或12 位），全电发票为空。查验未成功超过5次后当日无法再查。 */
  InvoiceCode?: string;
  /** 票种类型 01:增值税专用发票， 02:货运运输业增值税专用发 票， 03:机动车销售统一发票， 04:增值税普通发票， 08:增值税电子专用发票(含全电)， 10:增值税电子普通发票(含全电)， 11:增值税普通发票(卷式)， 14:增值税电子(通行费)发 票， 15:二手车销售统一发票， 32:深圳区块链发票(云南区块链因业务调整现已下线)。 */
  InvoiceKind?: string;
  /** 校验码后 6 位，增值税普通发票、增值税电子普通发票、增值税普通发票(卷式)、增值税电子普通发票(通行费)、全电纸质发票（增值税普通发票）时必填;区块链为 5 位 */
  CheckCode?: string;
  /** 不含税金额，增值税专用发票、增值税电子专用发票、机动车销售统一发票、二手车销售统一发票、区块链发票时必填; 全电发票为价税合计(含税金额) */
  Amount?: string;
  /** 地区编码，通用机打电子发票时必填。广东:4400，浙江:3300 */
  RegionCode?: string;
  /** 销方税号，通用机打电子发票必填，区块链发票时必填 */
  SellerTaxCode?: string;
  /** 是否开启通用机打电子发票，默认为关闭。 */
  EnableCommonElectronic?: boolean;
  /** 是否允许查验当日发票，默认值为false。请注意，发票从开具到录入税局需要一定的时间来更新和验证发票信息，打开后仅支持查验已成功录入到税局中的发票。 */
  EnableTodayInvoice?: boolean;
}

declare interface VatInvoiceVerifyNewResponse {
  /** 增值税发票、购车发票、全电发票的基础要素字段信息。 */
  Invoice?: VatInvoice;
  /** 机动车销售统一发票详细字段信息。 */
  VehicleInvoiceInfo?: VehicleInvoiceInfo;
  /** 二手车销售统一发票详细字段信息。 */
  UsedVehicleInvoiceInfo?: UsedVehicleInvoiceInfo;
  /** 通行费发票详细字段信息。 */
  PassInvoiceInfoList?: PassInvoiceInfo[];
  /** 全电发票（铁路电子客票）详细字段信息。 */
  ElectronicTrainTicket?: ElectronicTrainTicket;
  /** 全电发票（航空运输电子客票行程单）详细字段信息。 */
  ElectronicAirTransport?: ElectronicAirTransport;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface VatInvoiceVerifyRequest {
  /** 发票代码， 一张发票一天只能查询5次。 */
  InvoiceCode: string;
  /** 发票号码（8位） */
  InvoiceNo: string;
  /** 开票日期（不支持当天发票查询，支持五年以内开具的发票），格式：“YYYY-MM-DD”，如：2019-12-20。 */
  InvoiceDate: string;
  /** 根据票种传递对应值，如果报参数错误，请仔细检查每个票种对应的值增值税专用发票：开具金额（不含税）增值税普通发票、增值税电子普通发票（含通行费发票）、增值税普通发票（卷票）：校验码后6位区块链发票：不含税金额/校验码，例如：“285.01/856ab”机动车销售统一发票：不含税价货物运输业增值税专用发票：合计金额二手车销售统一发票：车价合计 */
  Additional: string;
}

declare interface VatInvoiceVerifyResponse {
  /** 增值税发票信息，详情请点击左侧链接。 */
  Invoice?: VatInvoice;
  /** 机动车销售统一发票信息 */
  VehicleInvoiceInfo?: VehicleInvoiceInfo;
  /** 二手车销售统一发票信息 */
  UsedVehicleInvoiceInfo?: UsedVehicleInvoiceInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface VatRollInvoiceOCRRequest {
  /** 图片的 Base64 值。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。 */
  ImageBase64?: string;
  /** 图片的 Url 地址。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。 */
  ImageUrl?: string;
  /** 是否开启PDF识别，默认值为true，开启后可同时支持图片和PDF的识别。 */
  IsPdf?: boolean;
  /** 需要识别的PDF页面的对应页码，仅支持PDF单页识别，当上传文件为PDF且IsPdf参数值为true时有效，默认值为1。 */
  PdfPageNumber?: number;
}

declare interface VatRollInvoiceOCRResponse {
  /** 增值税发票（卷票）识别结果，具体内容请点击左侧链接。 */
  VatRollInvoiceInfos?: VatRollInvoiceInfo[];
  /** 图片旋转角度（角度制），文本的水平方向为0°，顺时针为正，逆时针为负。 */
  Angle?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface VehicleLicenseOCRRequest {
  /** 图片的 Base64 值。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。 */
  ImageBase64?: string;
  /** 图片的 Url 地址。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。图片下载时间不超过 3 秒。建议图片存储于腾讯云，可保障更高的下载速度和稳定性。 */
  ImageUrl?: string;
  /** FRONT 为行驶证主页正面（有红色印章的一面），BACK 为行驶证副页正面（有号码号牌的一面），DOUBLE 为行驶证主页正面和副页正面。默认值为：FRONT。 */
  CardSide?: string;
}

declare interface VehicleLicenseOCRResponse {
  /** 行驶证主页正面的识别结果，CardSide 为 FRONT。 */
  FrontInfo?: TextVehicleFront | null;
  /** 行驶证副页正面的识别结果，CardSide 为 BACK。 */
  BackInfo?: TextVehicleBack | null;
  /** Code 告警码列表和释义：-9102 复印件告警-9103 翻拍件告警注：告警码可以同时存在多个 */
  RecognizeWarnCode?: number[];
  /** 告警码说明：WARN_DRIVER_LICENSE_COPY_CARD 复印件告警WARN_DRIVER_LICENSE_SCREENED_CARD 翻拍件告警注：告警信息可以同时存在多个 */
  RecognizeWarnMsg?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface VehicleRegCertOCRRequest {
  /** 图片的 Base64 值。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。 */
  ImageBase64?: string;
  /** 图片的 Url 地址。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。 */
  ImageUrl?: string;
}

declare interface VehicleRegCertOCRResponse {
  /** 机动车登记证书识别结果，具体内容请点击左侧链接。 */
  VehicleRegCertInfos?: VehicleRegCertInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface VerifyOfdVatInvoiceOCRRequest {
  /** OFD文件的 Url 地址。 */
  OfdFileUrl?: string;
  /** OFD文件的 Base64 值。OfdFileUrl 和 OfdFileBase64 必传其一，若两者都传，只解析OfdFileBase64。 */
  OfdFileBase64?: string;
}

declare interface VerifyOfdVatInvoiceOCRResponse {
  /** 发票类型026:增值税电子普通发票028:增值税电子专用发票010:电子发票（普通发票）020:电子发票（增值税专用发票）030:电子发票（铁路电子客票）040:电子发票（航空运输电子客票行程单） */
  Type?: string;
  /** 发票代码 */
  InvoiceCode?: string;
  /** 发票号码 */
  InvoiceNumber?: string;
  /** 开票日期 */
  IssueDate?: string;
  /** 验证码 */
  InvoiceCheckCode?: string;
  /** 机器编号 */
  MachineNumber?: string;
  /** 密码区 */
  TaxControlCode?: string;
  /** 购买方 */
  Buyer?: VatInvoiceUserInfo;
  /** 销售方 */
  Seller?: VatInvoiceUserInfo;
  /** 价税合计 */
  TaxInclusiveTotalAmount?: string;
  /** 开票人 */
  InvoiceClerk?: string;
  /** 收款人 */
  Payee?: string;
  /** 复核人 */
  Checker?: string;
  /** 税额 */
  TaxTotalAmount?: string;
  /** 不含税金额 */
  TaxExclusiveTotalAmount?: string;
  /** 备注 */
  Note?: string;
  /** 货物或服务清单 */
  GoodsInfos?: VatInvoiceGoodsInfo[];
  /** 航空运输电子客票行程单信息 */
  AirTicketInfo?: AirTicketInfo;
  /** 铁路电子客票 */
  RailwayTicketInfo?: RailwayTicketInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface VinOCRRequest {
  /** 图片的 Base64 值。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。 */
  ImageBase64?: string;
  /** 图片的 Url 地址。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。 */
  ImageUrl?: string;
}

declare interface VinOCRResponse {
  /** 检测到的车辆 VIN 码。 */
  Vin?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface WaybillOCRRequest {
  /** 图片的 Base64 值。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。 */
  ImageBase64?: string;
  /** 图片的 Url 地址。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。 */
  ImageUrl?: string;
  /** 预检测开关，当待识别运单占整个输入图像的比例较小时，建议打开预检测开关。默认值为false。 */
  EnablePreDetect?: boolean;
  /** 是否开启PDF识别，默认值为true，开启后可同时支持图片和PDF的识别。 */
  IsPdf?: boolean;
  /** 需要识别的PDF页面的对应页码，仅支持PDF单页识别，当上传文件为PDF且IsPdf参数值为true时有效，默认值为1。 */
  PdfPageNumber?: number;
}

declare interface WaybillOCRResponse {
  /** 检测到的文本信息，具体内容请点击左侧链接。 */
  TextDetections?: TextWaybill;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Ocr 文字识别} */
declare interface Ocr {
  (): Versions;
  /** 广告文字识别 {@link AdvertiseOCRRequest} {@link AdvertiseOCRResponse} */
  AdvertiseOCR(data?: AdvertiseOCRRequest, config?: AxiosRequestConfig): AxiosPromise<AdvertiseOCRResponse>;
  /** 算式识别 {@link ArithmeticOCRRequest} {@link ArithmeticOCRResponse} */
  ArithmeticOCR(data?: ArithmeticOCRRequest, config?: AxiosRequestConfig): AxiosPromise<ArithmeticOCRResponse>;
  /** 银行卡识别 {@link BankCardOCRRequest} {@link BankCardOCRResponse} */
  BankCardOCR(data?: BankCardOCRRequest, config?: AxiosRequestConfig): AxiosPromise<BankCardOCRResponse>;
  /** 银行回单识别 {@link BankSlipOCRRequest} {@link BankSlipOCRResponse} */
  BankSlipOCR(data?: BankSlipOCRRequest, config?: AxiosRequestConfig): AxiosPromise<BankSlipOCRResponse>;
  /** 营业执照识别 {@link BizLicenseOCRRequest} {@link BizLicenseOCRResponse} */
  BizLicenseOCR(data?: BizLicenseOCRRequest, config?: AxiosRequestConfig): AxiosPromise<BizLicenseOCRResponse>;
  /** 汽车票识别 {@link BusInvoiceOCRRequest} {@link BusInvoiceOCRResponse} */
  BusInvoiceOCR(data?: BusInvoiceOCRRequest, config?: AxiosRequestConfig): AxiosPromise<BusInvoiceOCRResponse>;
  /** 名片识别 {@link BusinessCardOCRRequest} {@link BusinessCardOCRResponse} */
  BusinessCardOCR(data?: BusinessCardOCRRequest, config?: AxiosRequestConfig): AxiosPromise<BusinessCardOCRResponse>;
  /** 购车发票识别 {@link CarInvoiceOCRRequest} {@link CarInvoiceOCRResponse} */
  CarInvoiceOCR(data?: CarInvoiceOCRRequest, config?: AxiosRequestConfig): AxiosPromise<CarInvoiceOCRResponse>;
  /** 智能卡证分类 {@link ClassifyDetectOCRRequest} {@link ClassifyDetectOCRResponse} */
  ClassifyDetectOCR(data?: ClassifyDetectOCRRequest, config?: AxiosRequestConfig): AxiosPromise<ClassifyDetectOCRResponse>;
  /** 创建智慧表单文件识别任务 {@link CreateAIFormTaskRequest} {@link CreateAIFormTaskResponse} */
  CreateAIFormTask(data: CreateAIFormTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAIFormTaskResponse>;
  /** 驾驶证识别 {@link DriverLicenseOCRRequest} {@link DriverLicenseOCRResponse} */
  DriverLicenseOCR(data?: DriverLicenseOCRRequest, config?: AxiosRequestConfig): AxiosPromise<DriverLicenseOCRResponse>;
  /** 完税证明识别 {@link DutyPaidProofOCRRequest} {@link DutyPaidProofOCRResponse} */
  DutyPaidProofOCR(data?: DutyPaidProofOCRRequest, config?: AxiosRequestConfig): AxiosPromise<DutyPaidProofOCRResponse>;
  /** 数学试题识别 {@link EduPaperOCRRequest} {@link EduPaperOCRResponse} */
  EduPaperOCR(data?: EduPaperOCRRequest, config?: AxiosRequestConfig): AxiosPromise<EduPaperOCRResponse>;
  /** 英文识别 {@link EnglishOCRRequest} {@link EnglishOCRResponse} */
  EnglishOCR(data?: EnglishOCRRequest, config?: AxiosRequestConfig): AxiosPromise<EnglishOCRResponse>;
  /** 企业证照识别 {@link EnterpriseLicenseOCRRequest} {@link EnterpriseLicenseOCRResponse} */
  EnterpriseLicenseOCR(data?: EnterpriseLicenseOCRRequest, config?: AxiosRequestConfig): AxiosPromise<EnterpriseLicenseOCRResponse>;
  /** 不动产权证识别 {@link EstateCertOCRRequest} {@link EstateCertOCRResponse} */
  EstateCertOCR(data?: EstateCertOCRRequest, config?: AxiosRequestConfig): AxiosPromise<EstateCertOCRResponse>;
  /** 金融票据整单识别 {@link FinanBillOCRRequest} {@link FinanBillOCRResponse} */
  FinanBillOCR(data?: FinanBillOCRRequest, config?: AxiosRequestConfig): AxiosPromise<FinanBillOCRResponse>;
  /** 金融票据切片识别 {@link FinanBillSliceOCRRequest} {@link FinanBillSliceOCRResponse} */
  FinanBillSliceOCR(data?: FinanBillSliceOCRRequest, config?: AxiosRequestConfig): AxiosPromise<FinanBillSliceOCRResponse>;
  /** 机票行程单识别 {@link FlightInvoiceOCRRequest} {@link FlightInvoiceOCRResponse} */
  FlightInvoiceOCR(data?: FlightInvoiceOCRRequest, config?: AxiosRequestConfig): AxiosPromise<FlightInvoiceOCRResponse>;
  /** 数学公式识别 {@link FormulaOCRRequest} {@link FormulaOCRResponse} */
  FormulaOCR(data?: FormulaOCRRequest, config?: AxiosRequestConfig): AxiosPromise<FormulaOCRResponse>;
  /** 通用文字识别（高精度版） {@link GeneralAccurateOCRRequest} {@link GeneralAccurateOCRResponse} */
  GeneralAccurateOCR(data?: GeneralAccurateOCRRequest, config?: AxiosRequestConfig): AxiosPromise<GeneralAccurateOCRResponse>;
  /** 通用印刷体识别 {@link GeneralBasicOCRRequest} {@link GeneralBasicOCRResponse} */
  GeneralBasicOCR(data?: GeneralBasicOCRRequest, config?: AxiosRequestConfig): AxiosPromise<GeneralBasicOCRResponse>;
  /** 通用印刷体识别（精简版） {@link GeneralEfficientOCRRequest} {@link GeneralEfficientOCRResponse} */
  GeneralEfficientOCR(data?: GeneralEfficientOCRRequest, config?: AxiosRequestConfig): AxiosPromise<GeneralEfficientOCRResponse>;
  /** 通用印刷体识别（高速版） {@link GeneralFastOCRRequest} {@link GeneralFastOCRResponse} */
  GeneralFastOCR(data?: GeneralFastOCRRequest, config?: AxiosRequestConfig): AxiosPromise<GeneralFastOCRResponse>;
  /** 通用手写体识别 {@link GeneralHandwritingOCRRequest} {@link GeneralHandwritingOCRResponse} */
  GeneralHandwritingOCR(data?: GeneralHandwritingOCRRequest, config?: AxiosRequestConfig): AxiosPromise<GeneralHandwritingOCRResponse>;
  /** 查询智慧表单任务状态 {@link GetTaskStateRequest} {@link GetTaskStateResponse} */
  GetTaskState(data: GetTaskStateRequest, config?: AxiosRequestConfig): AxiosPromise<GetTaskStateResponse>;
  /** 中国香港身份证识别 {@link HKIDCardOCRRequest} {@link HKIDCardOCRResponse} */
  HKIDCardOCR(data: HKIDCardOCRRequest, config?: AxiosRequestConfig): AxiosPromise<HKIDCardOCRResponse>;
  /** 港澳台居住证识别 {@link HmtResidentPermitOCRRequest} {@link HmtResidentPermitOCRResponse} */
  HmtResidentPermitOCR(data?: HmtResidentPermitOCRRequest, config?: AxiosRequestConfig): AxiosPromise<HmtResidentPermitOCRResponse>;
  /** 身份证识别 {@link IDCardOCRRequest} {@link IDCardOCRResponse} */
  IDCardOCR(data?: IDCardOCRRequest, config?: AxiosRequestConfig): AxiosPromise<IDCardOCRResponse>;
  /** 文本图像增强 {@link ImageEnhancementRequest} {@link ImageEnhancementResponse} */
  ImageEnhancement(data?: ImageEnhancementRequest, config?: AxiosRequestConfig): AxiosPromise<ImageEnhancementResponse>;
  /** 事业单位法人证书识别 {@link InstitutionOCRRequest} {@link InstitutionOCRResponse} */
  InstitutionOCR(data?: InstitutionOCRRequest, config?: AxiosRequestConfig): AxiosPromise<InstitutionOCRResponse>;
  /** 保险单据识别 {@link InsuranceBillOCRRequest} {@link InsuranceBillOCRResponse} */
  InsuranceBillOCR(data?: InsuranceBillOCRRequest, config?: AxiosRequestConfig): AxiosPromise<InsuranceBillOCRResponse>;
  /** 通用机打发票识别 {@link InvoiceGeneralOCRRequest} {@link InvoiceGeneralOCRResponse} */
  InvoiceGeneralOCR(data?: InvoiceGeneralOCRRequest, config?: AxiosRequestConfig): AxiosPromise<InvoiceGeneralOCRResponse>;
  /** 车牌识别 {@link LicensePlateOCRRequest} {@link LicensePlateOCRResponse} */
  LicensePlateOCR(data?: LicensePlateOCRRequest, config?: AxiosRequestConfig): AxiosPromise<LicensePlateOCRResponse>;
  /** 马来西亚身份证识别 {@link MLIDCardOCRRequest} {@link MLIDCardOCRResponse} */
  MLIDCardOCR(data?: MLIDCardOCRRequest, config?: AxiosRequestConfig): AxiosPromise<MLIDCardOCRResponse>;
  /** 护照识别（港澳台地区及境外护照） {@link MLIDPassportOCRRequest} {@link MLIDPassportOCRResponse} */
  MLIDPassportOCR(data?: MLIDPassportOCRRequest, config?: AxiosRequestConfig): AxiosPromise<MLIDPassportOCRResponse>;
  /** 港澳台来往内地通行证识别 {@link MainlandPermitOCRRequest} {@link MainlandPermitOCRResponse} */
  MainlandPermitOCR(data?: MainlandPermitOCRRequest, config?: AxiosRequestConfig): AxiosPromise<MainlandPermitOCRResponse>;
  /** 混贴票据分类 {@link MixedInvoiceDetectRequest} {@link MixedInvoiceDetectResponse} */
  MixedInvoiceDetect(data: MixedInvoiceDetectRequest, config?: AxiosRequestConfig): AxiosPromise<MixedInvoiceDetectResponse>;
  /** 混贴票据识别 {@link MixedInvoiceOCRRequest} {@link MixedInvoiceOCRResponse} */
  MixedInvoiceOCR(data?: MixedInvoiceOCRRequest, config?: AxiosRequestConfig): AxiosPromise<MixedInvoiceOCRResponse>;
  /** 组织机构代码证识别 {@link OrgCodeCertOCRRequest} {@link OrgCodeCertOCRResponse} */
  OrgCodeCertOCR(data?: OrgCodeCertOCRRequest, config?: AxiosRequestConfig): AxiosPromise<OrgCodeCertOCRResponse>;
  /** 护照识别（中国大陆地区护照） {@link PassportOCRRequest} {@link PassportOCRResponse} */
  PassportOCR(data?: PassportOCRRequest, config?: AxiosRequestConfig): AxiosPromise<PassportOCRResponse>;
  /** 港澳台通行证识别 {@link PermitOCRRequest} {@link PermitOCRResponse} */
  PermitOCR(data?: PermitOCRRequest, config?: AxiosRequestConfig): AxiosPromise<PermitOCRResponse>;
  /** 房产证识别 {@link PropOwnerCertOCRRequest} {@link PropOwnerCertOCRResponse} */
  PropOwnerCertOCR(data?: PropOwnerCertOCRRequest, config?: AxiosRequestConfig): AxiosPromise<PropOwnerCertOCRResponse>;
  /** 二维码和条形码识别 {@link QrcodeOCRRequest} {@link QrcodeOCRResponse} */
  QrcodeOCR(data?: QrcodeOCRRequest, config?: AxiosRequestConfig): AxiosPromise<QrcodeOCRResponse>;
  /** 定额发票识别 {@link QuotaInvoiceOCRRequest} {@link QuotaInvoiceOCRResponse} */
  QuotaInvoiceOCR(data?: QuotaInvoiceOCRRequest, config?: AxiosRequestConfig): AxiosPromise<QuotaInvoiceOCRResponse>;
  /** 集装箱识别 {@link RecognizeContainerOCRRequest} {@link RecognizeContainerOCRResponse} */
  RecognizeContainerOCR(data?: RecognizeContainerOCRRequest, config?: AxiosRequestConfig): AxiosPromise<RecognizeContainerOCRResponse>;
  /** 身份证识别（安全加密版） {@link RecognizeEncryptedIDCardOCRRequest} {@link RecognizeEncryptedIDCardOCRResponse} */
  RecognizeEncryptedIDCardOCR(data: RecognizeEncryptedIDCardOCRRequest, config?: AxiosRequestConfig): AxiosPromise<RecognizeEncryptedIDCardOCRResponse>;
  /** 外国人永久居留身份证识别 {@link RecognizeForeignPermanentResidentIdCardRequest} {@link RecognizeForeignPermanentResidentIdCardResponse} */
  RecognizeForeignPermanentResidentIdCard(data?: RecognizeForeignPermanentResidentIdCardRequest, config?: AxiosRequestConfig): AxiosPromise<RecognizeForeignPermanentResidentIdCardResponse>;
  /** 通用票据识别（高级版） {@link RecognizeGeneralInvoiceRequest} {@link RecognizeGeneralInvoiceResponse} */
  RecognizeGeneralInvoice(data?: RecognizeGeneralInvoiceRequest, config?: AxiosRequestConfig): AxiosPromise<RecognizeGeneralInvoiceResponse>;
  /** 通用文本图像告警 {@link RecognizeGeneralTextImageWarnRequest} {@link RecognizeGeneralTextImageWarnResponse} */
  RecognizeGeneralTextImageWarn(data?: RecognizeGeneralTextImageWarnRequest, config?: AxiosRequestConfig): AxiosPromise<RecognizeGeneralTextImageWarnResponse>;
  /** 健康码识别 {@link RecognizeHealthCodeOCRRequest} {@link RecognizeHealthCodeOCRResponse} */
  RecognizeHealthCodeOCR(data?: RecognizeHealthCodeOCRRequest, config?: AxiosRequestConfig): AxiosPromise<RecognizeHealthCodeOCRResponse>;
  /** 印尼身份证识别 {@link RecognizeIndonesiaIDCardOCRRequest} {@link RecognizeIndonesiaIDCardOCRResponse} */
  RecognizeIndonesiaIDCardOCR(data?: RecognizeIndonesiaIDCardOCRRequest, config?: AxiosRequestConfig): AxiosPromise<RecognizeIndonesiaIDCardOCRResponse>;
  /** 医疗票据识别 {@link RecognizeMedicalInvoiceOCRRequest} {@link RecognizeMedicalInvoiceOCRResponse} */
  RecognizeMedicalInvoiceOCR(data?: RecognizeMedicalInvoiceOCRRequest, config?: AxiosRequestConfig): AxiosPromise<RecognizeMedicalInvoiceOCRResponse>;
  /** 网约车行程单识别 {@link RecognizeOnlineTaxiItineraryOCRRequest} {@link RecognizeOnlineTaxiItineraryOCRResponse} */
  RecognizeOnlineTaxiItineraryOCR(data?: RecognizeOnlineTaxiItineraryOCRRequest, config?: AxiosRequestConfig): AxiosPromise<RecognizeOnlineTaxiItineraryOCRResponse>;
  /** 菲律宾驾驶证识别 {@link RecognizePhilippinesDrivingLicenseOCRRequest} {@link RecognizePhilippinesDrivingLicenseOCRResponse} */
  RecognizePhilippinesDrivingLicenseOCR(data?: RecognizePhilippinesDrivingLicenseOCRRequest, config?: AxiosRequestConfig): AxiosPromise<RecognizePhilippinesDrivingLicenseOCRResponse>;
  /** 菲律宾SSSID识别 {@link RecognizePhilippinesSssIDOCRRequest} {@link RecognizePhilippinesSssIDOCRResponse} */
  RecognizePhilippinesSssIDOCR(data: RecognizePhilippinesSssIDOCRRequest, config?: AxiosRequestConfig): AxiosPromise<RecognizePhilippinesSssIDOCRResponse>;
  /** 菲律宾TinID识别 {@link RecognizePhilippinesTinIDOCRRequest} {@link RecognizePhilippinesTinIDOCRResponse} */
  RecognizePhilippinesTinIDOCR(data: RecognizePhilippinesTinIDOCRRequest, config?: AxiosRequestConfig): AxiosPromise<RecognizePhilippinesTinIDOCRResponse>;
  /** 菲律宾UMID识别 {@link RecognizePhilippinesUMIDOCRRequest} {@link RecognizePhilippinesUMIDOCRResponse} */
  RecognizePhilippinesUMIDOCR(data?: RecognizePhilippinesUMIDOCRRequest, config?: AxiosRequestConfig): AxiosPromise<RecognizePhilippinesUMIDOCRResponse>;
  /** 菲律宾VoteID识别 {@link RecognizePhilippinesVoteIDOCRRequest} {@link RecognizePhilippinesVoteIDOCRResponse} */
  RecognizePhilippinesVoteIDOCR(data: RecognizePhilippinesVoteIDOCRRequest, config?: AxiosRequestConfig): AxiosPromise<RecognizePhilippinesVoteIDOCRResponse>;
  /** 表格识别（V3） {@link RecognizeTableAccurateOCRRequest} {@link RecognizeTableAccurateOCRResponse} */
  RecognizeTableAccurateOCR(data?: RecognizeTableAccurateOCRRequest, config?: AxiosRequestConfig): AxiosPromise<RecognizeTableAccurateOCRResponse>;
  /** 表格识别（V2) {@link RecognizeTableOCRRequest} {@link RecognizeTableOCRResponse} */
  RecognizeTableOCR(data?: RecognizeTableOCRRequest, config?: AxiosRequestConfig): AxiosPromise<RecognizeTableOCRResponse>;
  /** 泰国身份证识别 {@link RecognizeThaiIDCardOCRRequest} {@link RecognizeThaiIDCardOCRResponse} */
  RecognizeThaiIDCardOCR(data?: RecognizeThaiIDCardOCRRequest, config?: AxiosRequestConfig): AxiosPromise<RecognizeThaiIDCardOCRResponse>;
  /** 通信行程卡识别 {@link RecognizeTravelCardOCRRequest} {@link RecognizeTravelCardOCRResponse} */
  RecognizeTravelCardOCR(data?: RecognizeTravelCardOCRRequest, config?: AxiosRequestConfig): AxiosPromise<RecognizeTravelCardOCRResponse>;
  /** 智能文档识别 {@link ReconstructDocumentRequest} {@link ReconstructDocumentResponse} */
  ReconstructDocument(data: ReconstructDocumentRequest, config?: AxiosRequestConfig): AxiosPromise<ReconstructDocumentResponse>;
  /** 户口本识别 {@link ResidenceBookletOCRRequest} {@link ResidenceBookletOCRResponse} */
  ResidenceBookletOCR(data?: ResidenceBookletOCRRequest, config?: AxiosRequestConfig): AxiosPromise<ResidenceBookletOCRResponse>;
  /** 网约车驾驶证识别 {@link RideHailingDriverLicenseOCRRequest} {@link RideHailingDriverLicenseOCRResponse} */
  RideHailingDriverLicenseOCR(data?: RideHailingDriverLicenseOCRRequest, config?: AxiosRequestConfig): AxiosPromise<RideHailingDriverLicenseOCRResponse>;
  /** 网约车运输证识别 {@link RideHailingTransportLicenseOCRRequest} {@link RideHailingTransportLicenseOCRResponse} */
  RideHailingTransportLicenseOCR(data?: RideHailingTransportLicenseOCRRequest, config?: AxiosRequestConfig): AxiosPromise<RideHailingTransportLicenseOCRResponse>;
  /** 印章识别 {@link SealOCRRequest} {@link SealOCRResponse} */
  SealOCR(data?: SealOCRRequest, config?: AxiosRequestConfig): AxiosPromise<SealOCRResponse>;
  /** 轮船票识别 {@link ShipInvoiceOCRRequest} {@link ShipInvoiceOCRResponse} */
  ShipInvoiceOCR(data?: ShipInvoiceOCRRequest, config?: AxiosRequestConfig): AxiosPromise<ShipInvoiceOCRResponse>;
  /** 智能结构化识别 {@link SmartStructuralOCRRequest} {@link SmartStructuralOCRResponse} */
  SmartStructuralOCR(data?: SmartStructuralOCRRequest, config?: AxiosRequestConfig): AxiosPromise<SmartStructuralOCRResponse>;
  /** 智能结构化识别V2 {@link SmartStructuralOCRV2Request} {@link SmartStructuralOCRV2Response} */
  SmartStructuralOCRV2(data?: SmartStructuralOCRV2Request, config?: AxiosRequestConfig): AxiosPromise<SmartStructuralOCRV2Response>;
  /** 表格识别（V1) {@link TableOCRRequest} {@link TableOCRResponse} */
  TableOCR(data?: TableOCRRequest, config?: AxiosRequestConfig): AxiosPromise<TableOCRResponse>;
  /** 出租车发票识别 {@link TaxiInvoiceOCRRequest} {@link TaxiInvoiceOCRResponse} */
  TaxiInvoiceOCR(data?: TaxiInvoiceOCRRequest, config?: AxiosRequestConfig): AxiosPromise<TaxiInvoiceOCRResponse>;
  /** 快速文本检测 {@link TextDetectRequest} {@link TextDetectResponse} */
  TextDetect(data?: TextDetectRequest, config?: AxiosRequestConfig): AxiosPromise<TextDetectResponse>;
  /** 过路过桥费发票识别 {@link TollInvoiceOCRRequest} {@link TollInvoiceOCRResponse} */
  TollInvoiceOCR(data?: TollInvoiceOCRRequest, config?: AxiosRequestConfig): AxiosPromise<TollInvoiceOCRResponse>;
  /** 火车票识别 {@link TrainTicketOCRRequest} {@link TrainTicketOCRResponse} */
  TrainTicketOCR(data?: TrainTicketOCRRequest, config?: AxiosRequestConfig): AxiosPromise<TrainTicketOCRResponse>;
  /** 增值税发票识别 {@link VatInvoiceOCRRequest} {@link VatInvoiceOCRResponse} */
  VatInvoiceOCR(data?: VatInvoiceOCRRequest, config?: AxiosRequestConfig): AxiosPromise<VatInvoiceOCRResponse>;
  /** 增值税发票核验 {@link VatInvoiceVerifyRequest} {@link VatInvoiceVerifyResponse} */
  VatInvoiceVerify(data: VatInvoiceVerifyRequest, config?: AxiosRequestConfig): AxiosPromise<VatInvoiceVerifyResponse>;
  /** 增值税发票核验（新版） {@link VatInvoiceVerifyNewRequest} {@link VatInvoiceVerifyNewResponse} */
  VatInvoiceVerifyNew(data: VatInvoiceVerifyNewRequest, config?: AxiosRequestConfig): AxiosPromise<VatInvoiceVerifyNewResponse>;
  /** 增值税发票（卷票）识别 {@link VatRollInvoiceOCRRequest} {@link VatRollInvoiceOCRResponse} */
  VatRollInvoiceOCR(data?: VatRollInvoiceOCRRequest, config?: AxiosRequestConfig): AxiosPromise<VatRollInvoiceOCRResponse>;
  /** 行驶证识别 {@link VehicleLicenseOCRRequest} {@link VehicleLicenseOCRResponse} */
  VehicleLicenseOCR(data?: VehicleLicenseOCRRequest, config?: AxiosRequestConfig): AxiosPromise<VehicleLicenseOCRResponse>;
  /** 机动车登记证书识别 {@link VehicleRegCertOCRRequest} {@link VehicleRegCertOCRResponse} */
  VehicleRegCertOCR(data?: VehicleRegCertOCRRequest, config?: AxiosRequestConfig): AxiosPromise<VehicleRegCertOCRResponse>;
  /** OFD发票识别 {@link VerifyOfdVatInvoiceOCRRequest} {@link VerifyOfdVatInvoiceOCRResponse} */
  VerifyOfdVatInvoiceOCR(data?: VerifyOfdVatInvoiceOCRRequest, config?: AxiosRequestConfig): AxiosPromise<VerifyOfdVatInvoiceOCRResponse>;
  /** 车辆VIN码识别 {@link VinOCRRequest} {@link VinOCRResponse} */
  VinOCR(data?: VinOCRRequest, config?: AxiosRequestConfig): AxiosPromise<VinOCRResponse>;
  /** 运单识别 {@link WaybillOCRRequest} {@link WaybillOCRResponse} */
  WaybillOCR(data?: WaybillOCRRequest, config?: AxiosRequestConfig): AxiosPromise<WaybillOCRResponse>;
}

export declare type Versions = ["2018-11-19"];

export default Ocr;
