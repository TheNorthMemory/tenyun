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

/** 银行回单识别出的字段 */
declare interface BankSlipInfo {
  /** 识别出的字段名称(关键字)，支持以下字段：付款开户行、收款开户行、付款账号、收款账号、回单类型、回单编号、币种、流水号、凭证号码、交易机构、交易金额、手续费、日期等字段信息。 */
  Name: string;
  /** 识别出的字段名称对应的值，也就是字段Name对应的字符串结果。 */
  Value: string;
  /** 文本行在旋转纠正之后的图像中的像素坐标。 */
  Rect: Rect;
}

/** 验真接口 */
declare interface BizLicenseVerifyResult {
  /** “0“：一致“-1”：不一致 */
  RegNum: string;
  /** “0“：一致“-1”：不一致“”：不验真 */
  Name: string;
  /** “0“：一致“-1”：不一致“”：不验真 */
  Address: string;
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
  Name: string;
  /** 识别出的字段名称对应的值，也就是字段name对应的字符串结果。 */
  Value: string;
  /** 字段在旋转纠正之后的图像中的像素坐标。 */
  Rect: Rect;
  /** 字段在原图中的中的四点坐标。 */
  Polygon: Polygon | null;
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

/** 企业四要素核验结果 */
declare interface Detail {
  /** 企业四要素核验结果状态码 */
  Result: number;
  /** 企业四要素核验结果描述 */
  Desc: string;
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

/** 识别出的字段 */
declare interface DutyPaidProofInfo {
  /** 识别出的字段名称(关键字)，支持以下字段：税号 、纳税人识别号 、纳税人名称 、金额合计大写 、金额合计小写 、填发日期 、税务机关 、填票人。 */
  Name: string;
  /** 识别出的字段名称对应的值，也就是字段Name对应的字符串结果。 */
  Value: string;
  /** 文本行在旋转纠正之后的图像中的像素坐标。 */
  Rect: Rect;
}

/** 企业证照单个字段的内容 */
declare interface EnterpriseLicenseInfo {
  /** 识别出的字段名称（关键字），不同证件类型可能不同，证件类型包含企业登记证书、许可证书、企业执照、三证合一类证书；支持以下字段：统一社会信用代码、法定代表人、公司名称、公司地址、注册资金、企业关型、经营范围、成立日期、有效期、开办资金、经费来源、举办单位等； */
  Name: string;
  /** 识别出的字段名称对应的值，也就是字段Name对应的字符串结果。 */
  Value: string;
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

/** 全部车牌信息 */
declare interface LicensePlateInfo {
  /** 识别出的车牌号码。 */
  Number: string;
  /** 置信度，0 - 100 之间。 */
  Confidence: number;
  /** 文本行在原图片中的像素坐标框。 */
  Rect: Rect;
  /** 识别出的车牌颜色，目前支持颜色包括 “白”、“黑”、“蓝”、“绿“、“黄”、“黄绿”、“临牌”。 */
  Color: string;
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

/** 商品码信息 */
declare interface ProductDataRecord {
  /** 产品名称 */
  ProductName: string;
  /** 产品名称(英文) */
  EnName: string;
  /** 品牌名称 */
  BrandName: string;
  /** 规格型号 */
  Type: string;
  /** 宽度，单位毫米 */
  Width: string;
  /** 高度，单位毫米 */
  Height: string;
  /** 深度，单位毫米 */
  Depth: string;
  /** 关键字 */
  KeyWord: string;
  /** 简短描述 */
  Description: string;
  /** 图片链接 */
  ImageLink: string[];
  /** 厂家名称 */
  ManufacturerName: string;
  /** 厂家地址 */
  ManufacturerAddress: string;
  /** 企业社会信用代码 */
  FirmCode: string;
  /** 表示数据查询状态checkResult	状态说明1 经查，该商品条码已在中国物品编码中心注册2	经查，该厂商识别代码已在中国物品编码中心注册，但编码信息未按规定通报。3	经查，该厂商识别代码已于xxxxx注销，请关注产品生产日期。4	经查，该企业以及条码未经条码中心注册，属于违法使用-1	经查，该商品条码被冒用-2	经查，该厂商识别代码已在中国物品编码中心注册，但该产品已经下市S001 未找到该厂商识别代码的注册信息。S002 该厂商识别代码已经在GS1注册，但编码信息未通报S003 该商品条码已在GS1通报S004 该商品条码已注销S005 数字不正确。GS1前缀（3位国家/地区代码）用于特殊用途。E001 完整性失败：此GTIN的长度无效。E002 完整性失败：校验位不正确。E003 完整性失败：字符串包含字母数字字符。E004 数字不正确。GS1前缀（3位国家/地区代码）不存在。E005 数字不正确。GS1前缀（3位国家/地区代码）用于特殊用途。E006 数字不正确。尚未分配该GS1公司前缀。E008 经查，该企业厂商识别代码以及条码尚未通报 */
  CheckResult: string;
  /** UNSPSC分类码 */
  CategoryCode: string;
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

/** 印章信息 */
declare interface SealInfo {
  /** 印章主体内容 */
  SealBody: string;
  /** 印章坐标 */
  Location: Rect;
  /** 印章其它文本内容 */
  OtherTexts: string[];
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

/** 混贴票据中单张发票的内容 */
declare interface SingleInvoiceInfo {
  /** 识别出的字段名称 */
  Name: string;
  /** 识别出的字段名称对应的值，也就是字段name对应的字符串结果。 */
  Value: string;
  /** 字段属于第几行，用于相同字段的排版，如发票明细表格项目，普通字段使用默认值为-1，表示无列排版。 */
  Row: number;
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

/** 表格标题 */
declare interface TableTitle {
  /** 表格名称 */
  Text: string | null;
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
  PlateNo: string | null;
  /** 档案编号 */
  FileNo: string | null;
  /** 核定人数 */
  AllowNum: string | null;
  /** 总质量 */
  TotalMass: string | null;
  /** 整备质量 */
  CurbWeight: string | null;
  /** 核定载质量 */
  LoadQuality: string | null;
  /** 外廓尺寸 */
  ExternalSize: string | null;
  /** 备注 */
  Marks: string | null;
  /** 检验记录 */
  Record: string | null;
  /** 准牵引总质量 */
  TotalQuasiMass: string | null;
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

/** 过路过桥费字段信息 */
declare interface TollInvoiceInfo {
  /** 识别出的字段名称（关键字）。支持以下字段的识别：发票代码、发票号码、日期、金额、入口、出口、时间、发票消费类型、高速标志。 */
  Name: string;
  /** 识别出的字段名称对应的值，也就是字段Name对应的字符串结果。 */
  Value: string;
  /** 文本行在旋转纠正之后的图像中的像素坐标。 */
  Rect: Rect;
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

/** 增值税发票信息 */
declare interface VatInvoice {
  /** 发票代码 */
  Code: string;
  /** 发票号码 */
  Number: string;
  /** 开票日期 */
  Date: string;
  /** 购方抬头 */
  BuyerName: string;
  /** 购方税号 */
  BuyerTaxCode: string;
  /** 购方地址电话 */
  BuyerAddressPhone: string;
  /** 购方银行账号 */
  BuyerBankAccount: string;
  /** 销方名称 */
  SellerName: string;
  /** 销方税号 */
  SellerTaxCode: string;
  /** 销方地址电话 */
  SellerAddressPhone: string;
  /** 销方银行账号 */
  SellerBankAccount: string;
  /** 备注 */
  Remark: string;
  /** 机器编码 */
  MachineNo: string;
  /** 票种类型01：增值税专用发票，02：货运运输业增值税专用发票，03：机动车销售统一发票，04：增值税普通发票，08：增值税电子专用发票（含全电，全电仅新版接口支持），10：增值税电子普通发票（含全电，全电仅新版接口支持），11：增值税普通发票（卷式），14：增值税电子（通行费）发票，15：二手车销售统一发票，32：深圳区块链发票，102：通用机打电子发票 */
  Type: string;
  /** 检验码 */
  CheckCode: string;
  /** 是否作废（红冲）是否作废（红冲）Y：已作废，N：未作废，H：红冲，HP：部分红冲，HF：全额红冲 */
  IsAbandoned: string;
  /** 是否有销货清单 Y: 有清单 N：无清单 卷票无 */
  HasSellerList: string;
  /** 销货清单标题 */
  SellerListTitle: string;
  /** 销货清单税额 */
  SellerListTax: string;
  /** 不含税金额 */
  AmountWithoutTax: string;
  /** 税额 */
  TaxAmount: string;
  /** 含税金额 */
  AmountWithTax: string;
  /** 项目明细 */
  Items: VatInvoiceItem[];
  /** 所属税局 */
  TaxBureau: string;
  /** 通行费标志:Y、是;N、否 */
  TrafficFreeFlag: string;
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

/** 机动车销售统一发票信息 */
declare interface VehicleInvoiceInfo {
  /** 车辆类型 */
  CarType: string;
  /** 厂牌型号 */
  PlateModel: string;
  /** 产地 */
  ProduceAddress: string;
  /** 合格证号 */
  CertificateNo: string;
  /** 进口证明书号 */
  ImportNo: string;
  /** LSVCA2NP9HN0xxxxx */
  VinNo: string;
  /** 完税证书号 */
  PayTaxesNo: string;
  /** 吨位 */
  Tonnage: string;
  /** 限乘人数 */
  LimitCount: string;
  /** 发动机号码 */
  EngineNo: string;
  /** 商检单号 */
  BizCheckFormNo: string;
  /** 主管税务机关代码 */
  TaxtationOrgCode: string;
  /** 主管税务机关名称 */
  TaxtationOrgName: string;
  /** 税率 */
  MotorTaxRate: string;
  /** 开户行 */
  MotorBankName: string;
  /** 账号 */
  MotorBankAccount: string;
  /** 销售地址 */
  SellerAddress: string;
  /** 销售电话 */
  SellerTel: string;
  /** 购方身份证 */
  BuyerNo: string;
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  TextDetections: TextArithmetic[];
  /** 图片横屏的角度(90度或270度) */
  Angle: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  BankSlipInfos: BankSlipInfo[];
  /** 图片旋转角度（角度制），文本的水平方向为0°，顺时针为正，逆时针为负。 */
  Angle: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface BizLicenseOCRRequest {
  /** 图片的 Base64 值。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。 */
  ImageBase64?: string;
  /** 图片的 Url 地址。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。 */
  ImageUrl?: string;
}

declare interface BizLicenseOCRResponse {
  /** 统一社会信用代码（三合一之前为注册号） */
  RegNum: string;
  /** 公司名称 */
  Name: string;
  /** 注册资本 */
  Capital: string;
  /** 法定代表人 */
  Person: string;
  /** 地址 */
  Address: string;
  /** 经营范围 */
  Business: string;
  /** 主体类型 */
  Type: string;
  /** 营业期限 */
  Period: string;
  /** 组成形式 */
  ComposingForm: string;
  /** 成立日期 */
  SetDate: string;
  /** Code 告警码列表和释义：-20001 非营业执照-9102 黑白复印件告警注：告警码可以同时存在多个 */
  RecognizeWarnCode: number[];
  /** 告警码说明：OCR_WARNING_TYPE_NOT_MATCH 非营业执照WARN_COPY_CARD 黑白复印件告警注：告警信息可以同时存在多个 */
  RecognizeWarnMsg: string[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  BusInvoiceInfos: BusInvoiceInfo[];
  /** 图片旋转角度（角度制），文本的水平方向为0°，顺时针为正，逆时针为负。 */
  Angle: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  CarInvoiceInfos: CarInvoiceInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DriverLicenseOCRRequest {
  /** 图片的 Base64 值。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。 */
  ImageBase64?: string;
  /** 图片的 Url 地址。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。图片下载时间不超过 3 秒。建议图片存储于腾讯云，可保障更高的下载速度和稳定性。 */
  ImageUrl?: string;
  /** FRONT 为驾驶证主页正面（有红色印章的一面），BACK 为驾驶证副页正面（有档案编号的一面）。默认值为：FRONT。 */
  CardSide?: string;
}

declare interface DriverLicenseOCRResponse {
  /** 姓名 */
  Name: string;
  /** 性别 */
  Sex: string;
  /** 国籍 */
  Nationality: string;
  /** 住址 */
  Address: string;
  /** 出生日期（YYYY-MM-DD） */
  DateOfBirth: string;
  /** 初次领证日期（YYYY-MM-DD） */
  DateOfFirstIssue: string;
  /** 准驾车型 */
  Class: string;
  /** 有效期开始时间（YYYY-MM-DD） */
  StartDate: string;
  /** 有效期截止时间（YYYY-MM-DD） */
  EndDate: string;
  /** 证号 */
  CardCode: string;
  /** 档案编号 */
  ArchivesCode: string;
  /** 记录 */
  Record: string;
  /** Code 告警码列表和释义：-9102 复印件告警-9103 翻拍件告警-9106 ps告警注：告警码可以同时存在多个 */
  RecognizeWarnCode: number[];
  /** 告警码说明：WARN_DRIVER_LICENSE_COPY_CARD 复印件告警WARN_DRIVER_LICENSE_SCREENED_CARD 翻拍件告警WARN_DRIVER_LICENSE_PS_CARD ps告警注：告警信息可以同时存在多个 */
  RecognizeWarnMsg: string[];
  /** 发证单位 */
  IssuingAuthority: string;
  /** 状态（仅电子驾驶证支持返回该字段） */
  State: string;
  /** 累积记分（仅电子驾驶证支持返回该字段） */
  CumulativeScore: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  DutyPaidProofInfos: DutyPaidProofInfo[];
  /** 图片旋转角度（角度制），文本的水平方向为0°，顺时针为正，逆时针为负。 */
  Angle: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface EnglishOCRRequest {
  /** 图片的 Base64 值。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。 */
  ImageBase64?: string;
  /** 图片的 Url 地址。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。 */
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
  TextDetections: TextDetectionEn[];
  /** 图片旋转角度（角度制），文本的水平方向为0°；顺时针为正，逆时针为负。点击查看如何纠正倾斜文本 */
  Angel: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  EnterpriseLicenseInfos: EnterpriseLicenseInfo[];
  /** 图片旋转角度（角度制），文本的水平方向为0°，顺时针为正，逆时针为负。 */
  Angle: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  Obligee?: string;
  /** 共有情况 */
  Ownership?: string;
  /** 坐落 */
  Location?: string;
  /** 不动产单元号 */
  Unit?: string;
  /** 权利类型 */
  Type?: string;
  /** 权利性质 */
  Property?: string;
  /** 用途 */
  Usage?: string;
  /** 面积 */
  Area?: string;
  /** 使用期限 */
  Term?: string;
  /** 权利其他状况，多行会用换行符\n连接。 */
  Other?: string;
  /** 图片旋转角度 */
  Angle?: number;
  /** 不动产权号 */
  Number?: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  FinanBillInfos: FinanBillInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface FinanBillSliceOCRRequest {
  /** 图片的 Base64 值。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经Base64编码后不超过 3M。图片下载时间不超过 3 秒。图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。 */
  ImageBase64?: string;
  /** 图片的 Url 地址。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。 */
  ImageUrl?: string;
}

declare interface FinanBillSliceOCRResponse {
  /** 金融票据切片识别结果，具体内容请点击左侧链接。 */
  FinanBillSliceInfos?: FinanBillSliceInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  FlightInvoiceInfos: FlightInvoiceInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  Angle: number;
  /** 检测到的文本信息，具体内容请点击左侧链接。 */
  FormulaInfos: TextFormula[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
}

declare interface GeneralAccurateOCRResponse {
  /** 检测到的文本信息，包括文本行内容、置信度、文本行坐标以及文本行旋转纠正后的坐标，具体内容请点击左侧链接。 */
  TextDetections: TextDetection[];
  /** 图片旋转角度（角度制），文本的水平方向为0°；顺时针为正，逆时针为负。点击查看如何纠正倾斜文本 */
  Angel: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  TextDetections: TextDetection[];
  /** 检测到的语言类型，目前支持的语言类型参考入参LanguageType说明。 */
  Language: string;
  /** 图片旋转角度（角度制），文本的水平方向为0°；顺时针为正，逆时针为负。点击查看如何纠正倾斜文本 */
  Angel: number;
  /** 图片为PDF时，返回PDF的总页数，默认为0 */
  PdfPageSize: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface HKIDCardOCRRequest {
  /** 是否鉴伪。 */
  DetectFake: boolean;
  /** 是否返回人像照片。 */
  ReturnHeadImage: boolean;
  /** 图片的 Base64 值。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。 */
  ImageBase64?: string;
  /** 图片的 Url 地址。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经 Base64 编码后不超过 3M。图片下载时间不超过 3 秒。图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。 */
  ImageUrl?: string;
}

declare interface HKIDCardOCRResponse {
  /** 中文姓名 */
  CnName: string;
  /** 英文姓名 */
  EnName: string;
  /** 中文姓名对应电码 */
  TelexCode: string;
  /** 性别 ：“男M”或“女F” */
  Sex: string;
  /** 出生日期 */
  Birthday: string;
  /** 永久性居民身份证。0：非永久；1：永久；-1：未知。 */
  Permanent: number;
  /** 身份证号码 */
  IdNum: string;
  /** 证件符号，出生日期下的符号，例如"***AZ" */
  Symbol: string;
  /** 首次签发日期 */
  FirstIssueDate: string;
  /** 最近领用日期 */
  CurrentIssueDate: string;
  /** 真假判断。0：无法判断（图像模糊、不完整、反光、过暗等导致无法判断）；1：假；2：真。 */
  FakeDetectResult: number | null;
  /** 人像照片Base64后的结果 */
  HeadImage: string | null;
  /** 多重告警码，当身份证是翻拍、复印、PS件时返回对应告警码。-9102：证照复印件告警-9103：证照翻拍告警-9104：证照PS告警 */
  WarningCode: number[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  Name: string;
  /** 性别 */
  Sex: string;
  /** 出生日期 */
  Birth: string;
  /** 地址 */
  Address: string;
  /** 身份证号 */
  IdCardNo: string;
  /** 0-正面1-反面 */
  CardType: number;
  /** 证件有效期限 */
  ValidDate: string;
  /** 签发机关 */
  Authority: string;
  /** 签发次数 */
  VisaNum: string;
  /** 通行证号码 */
  PassNo: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface IDCardOCRRequest {
  /** 图片的 Base64 值。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。 */
  ImageBase64?: string;
  /** 图片的 Url 地址。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。建议图片存储于腾讯云，可保障更高的下载速度和稳定性。 */
  ImageUrl?: string;
  /** FRONT：身份证有照片的一面（人像面），BACK：身份证有国徽的一面（国徽面），该参数如果不填，将为您自动判断身份证正反面。 */
  CardSide?: string;
  /** 以下可选字段均为bool 类型，默认false：CropIdCard，身份证照片裁剪（去掉证件外多余的边缘、自动矫正拍摄角度）CropPortrait，人像照片裁剪（自动抠取身份证头像区域）CopyWarn，复印件告警BorderCheckWarn，边框和框内遮挡告警ReshootWarn，翻拍告警DetectPsWarn，PS检测告警TempIdWarn，临时身份证告警InvalidDateWarn，身份证有效日期不合法告警Quality，图片质量分数（评价图片的模糊程度）MultiCardDetect，是否开启多卡证检测ReflectWarn，是否开启反光检测SDK 设置方式参考：Config = Json.stringify({"CropIdCard":true,"CropPortrait":true})API 3.0 Explorer 设置方式参考：Config = {"CropIdCard":true,"CropPortrait":true} */
  Config?: string;
}

declare interface IDCardOCRResponse {
  /** 姓名（人像面） */
  Name: string;
  /** 性别（人像面） */
  Sex: string;
  /** 民族（人像面） */
  Nation: string;
  /** 出生日期（人像面） */
  Birth: string;
  /** 地址（人像面） */
  Address: string;
  /** 身份证号（人像面） */
  IdNum: string;
  /** 发证机关（国徽面） */
  Authority: string;
  /** 证件有效期（国徽面） */
  ValidDate: string;
  /** 扩展信息，不请求则不返回，具体输入参考示例3和示例4。IdCard，裁剪后身份证照片的base64编码，请求 Config.CropIdCard 时返回；Portrait，身份证头像照片的base64编码，请求 Config.CropPortrait 时返回；Quality，图片质量分数，请求 Config.Quality 时返回（取值范围：0 ~ 100，分数越低越模糊，建议阈值≥50）;BorderCodeValue，身份证边框不完整告警阈值分数，请求 Config.BorderCheckWarn时返回（取值范围：0 ~ 100，分数越低边框遮挡可能性越低，建议阈值≤50）;WarnInfos，告警信息，Code 告警码列表和释义：-9100	身份证有效日期不合法告警，-9101	身份证边框不完整告警，-9102	身份证复印件告警，-9103	身份证翻拍告警，-9105	身份证框内遮挡告警，-9104	临时身份证告警，-9106	身份证 PS 告警，-9107 身份证反光告警。 */
  AdvancedInfo: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  ImageTag: string;
  /** 图片数据，返回预处理后图像或原图像base64字符 */
  Image: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  RegId: string;
  /** 有效期 */
  ValidDate: string;
  /** 住所 */
  Location: string;
  /** 名称 */
  Name: string;
  /** 法定代表人 */
  LegalPerson: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  InvoiceGeneralInfos: InvoiceGeneralInfo[];
  /** 图片旋转角度（角度制），文本的水平方向为0°，顺时针为正，逆时针为负。 */
  Angle: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  Number: string;
  /** 置信度，0 - 100 之间。 */
  Confidence: number;
  /** 文本行在原图片中的像素坐标框。 */
  Rect: Rect;
  /** 识别出的车牌颜色，目前支持颜色包括 “白”、“黑”、“蓝”、“绿“、“黄”、“黄绿”、“临牌”。 */
  Color: string;
  /** 全部车牌信息。 */
  LicensePlateInfos: LicensePlateInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  ID: string;
  /** 姓名 */
  Name: string;
  /** 地址 */
  Address: string;
  /** 性别 */
  Sex: string;
  /** 告警码-9103	证照翻拍告警-9102	证照复印件告警-9106 证件遮挡告警-9107 模糊图片告警 */
  Warn: number[];
  /** 证件图片 */
  Image: string;
  /** 此字段为扩展字段。返回字段识别结果的置信度，格式如下{ 字段名:{ Confidence:0.9999 }} */
  AdvancedInfo: string;
  /** 证件类型MyKad 身份证MyPR 永居证MyTentera 军官证MyKAS 临时身份证POLIS 警察证IKAD 劳工证MyKid 儿童卡 */
  Type: string;
  /** 出生日期（目前该字段仅支持IKAD劳工证、MyKad 身份证） */
  Birthday: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface MLIDPassportOCRRequest {
  /** 图片的 Base64 值。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。 */
  ImageBase64: string;
  /** 是否返回图片，默认false */
  RetImage?: boolean;
}

declare interface MLIDPassportOCRResponse {
  /** 护照ID */
  ID: string;
  /** 姓名 */
  Name: string;
  /** 出生日期 */
  DateOfBirth: string;
  /** 性别（F女，M男） */
  Sex: string;
  /** 有效期 */
  DateOfExpiration: string;
  /** 发行国 */
  IssuingCountry: string;
  /** 国家地区代码 */
  Nationality: string;
  /** 告警码-9103	证照翻拍告警-9102	证照复印件告警（包括黑白复印件、彩色复印件）-9106 证件遮挡告警 */
  Warn: number[];
  /** 证件图片 */
  Image: string;
  /** 扩展字段:{ ID:{ Confidence:0.9999 }, Name:{ Confidence:0.9996 }} */
  AdvancedInfo: string;
  /** 最下方第一行 MRZ Code 序列 */
  CodeSet: string;
  /** 最下方第二行 MRZ Code 序列 */
  CodeCrc: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface MainlandPermitOCRRequest {
  /** 图片的 Base64 值。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。 */
  ImageBase64?: string;
  /** 图片的 Url 地址。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。 */
  ImageUrl?: string;
  /** 是否返回头像。默认不返回。 */
  RetProfile?: boolean;
}

declare interface MainlandPermitOCRResponse {
  /** 中文姓名 */
  Name: string;
  /** 英文姓名 */
  EnglishName: string;
  /** 性别 */
  Sex: string;
  /** 出生日期 */
  Birthday: string;
  /** 签发机关 */
  IssueAuthority: string;
  /** 有效期限 */
  ValidDate: string;
  /** 证件号 */
  Number: string;
  /** 签发地点 */
  IssueAddress: string;
  /** 签发次数 */
  IssueNumber: string;
  /** 证件类别， 如：台湾居民来往大陆通行证、港澳居民来往内地通行证。 */
  Type: string;
  /** RetProfile为True时返回头像字段， Base64编码 */
  Profile: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  InvoiceDetectInfos: InvoiceDetectInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface MixedInvoiceOCRRequest {
  /** 图片的 Base64 值。支持的图片格式：PNG、JPG、JPEG、PDF，暂不支持 GIF 格式。支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。 */
  ImageBase64?: string;
  /** 图片的 Url 地址。支持的图片格式：PNG、JPG、JPEG、PDF，暂不支持 GIF 格式。支持的图片大小：所下载图片经 Base64 编码后不超过 7M。图片下载时间不超过 3 秒。图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。 */
  ImageUrl?: string;
  /** 需要识别的票据类型列表，为空或不填表示识别全部类型。0：出租车发票1：定额发票2：火车票3：增值税发票5：机票行程单8：通用机打发票9：汽车票10：轮船票11：增值税发票（卷票 ）12：购车发票13：过路过桥费发票15：非税发票16：全电发票-----------------------1：其他发票,（仅返回，本参数不支持传入-1，请在ReturnOther中控制是否返回） */
  Types?: number[];
  /** 是否识别其他类型发票，默认为YesYes：识别其他类型发票No：不识别其他类型发票 */
  ReturnOther?: string;
  /** 是否开启PDF识别，默认值为true，开启后可同时支持图片和PDF的识别。 */
  IsPdf?: boolean;
  /** 需要识别的PDF页面的对应页码，仅支持PDF单页识别，当上传文件为PDF且IsPdf参数值为true时有效，默认值为1。 */
  PdfPageNumber?: number;
}

declare interface MixedInvoiceOCRResponse {
  /** 混贴票据识别结果，具体内容请点击左侧链接。 */
  MixedInvoiceItems: MixedInvoiceItem[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  OrgCode: string;
  /** 机构名称 */
  Name: string;
  /** 地址 */
  Address: string;
  /** 有效期 */
  ValidDate: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  Name: string;
  /** 英文姓名 */
  EnglishName: string;
  /** 证件号 */
  Number: string;
  /** 性别 */
  Sex: string;
  /** 有效期限 */
  ValidDate: string;
  /** 签发机关 */
  IssueAuthority: string;
  /** 签发地点 */
  IssueAddress: string;
  /** 出生日期 */
  Birthday: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  Owner: string;
  /** 共有情况 */
  Possession: string;
  /** 登记时间 */
  RegisterTime: string;
  /** 规划用途 */
  Purpose: string;
  /** 房屋性质 */
  Nature: string;
  /** 房地坐落 */
  Location: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  CodeResults: QrcodeResultsInfo[];
  /** 图片大小，具体内容请点击左侧链接。 */
  ImgSize: QrcodeImgSize;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface QueryBarCodeRequest {
  /** 条形码 */
  BarCode: string;
}

declare interface QueryBarCodeResponse {
  /** 条码 */
  BarCode?: string;
  /** 条码信息数组 */
  ProductDataRecords?: ProductDataRecord[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  InvoiceNum: string;
  /** 发票代码 */
  InvoiceCode: string;
  /** 大写金额 */
  Rate: string;
  /** 小写金额 */
  RateNum: string;
  /** 发票消费类型 */
  InvoiceType: string;
  /** 省 */
  Province: string | null;
  /** 市 */
  City: string | null;
  /** 是否有公司印章（1有 0无 空为识别不出） */
  HasStamp: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  Name: string;
  /** 持码人身份证号，如：11**************01（允许返回空值） */
  IDNumber: string;
  /** 健康码更新时间（允许返回空值） */
  Time: string;
  /** 健康码颜色：绿色、黄色、红色（允许返回空值） */
  Color: string;
  /** 核酸检测间隔时长（允许返回空值） */
  TestingInterval: string;
  /** 核酸检测结果：阴性、阳性、暂无核酸检测记录（允许返回空值） */
  TestingResult: string;
  /** 核酸检测时间（允许返回空值） */
  TestingTime: string;
  /** 疫苗接种信息，返回接种针数或接种情况（允许返回空值） */
  Vaccination: string;
  /** 场所名称（允许返回空值） */
  SpotName: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  NIK: string;
  /** 姓名 */
  Nama: string;
  /** 出生地/出生时间 */
  TempatTglLahir: string;
  /** 性别 */
  JenisKelamin: string;
  /** 血型 */
  GolDarah: string;
  /** 地址 */
  Alamat: string;
  /** 街道 */
  RTRW: string;
  /** 村 */
  KelDesa: string;
  /** 地区 */
  Kecamatan: string;
  /** 宗教信仰 */
  Agama: string;
  /** 婚姻状况 */
  StatusPerkawinan: string;
  /** 职业 */
  Perkerjaan: string;
  /** 国籍 */
  KewargaNegaraan: string;
  /** 身份证有效期限 */
  BerlakuHingga: string;
  /** 发证日期 */
  IssuedDate: string;
  /** 人像截图 */
  Photo: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  MedicalInvoiceInfos: MedicalInvoiceInfo[];
  /** 图片旋转角度（角度制），文本的水平方向为0°，顺时针为正，逆时针为负。 */
  Angle: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  OnlineTaxiItineraryInfos: OnlineTaxiItineraryInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  HeadPortrait: TextDetectionResult;
  /** 菲律宾VoteID的VIN */
  VIN: TextDetectionResult;
  /** 姓名 */
  FirstName: TextDetectionResult;
  /** 姓氏 */
  LastName: TextDetectionResult;
  /** 出生日期 */
  Birthday: TextDetectionResult;
  /** 婚姻状况 */
  CivilStatus: TextDetectionResult;
  /** 国籍 */
  Citizenship: TextDetectionResult;
  /** 地址 */
  Address: TextDetectionResult;
  /** 地区 */
  PrecinctNo: TextDetectionResult;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  TableDetections: TableDetectInfo[];
  /** Base64 编码后的 Excel 数据。 */
  Data: string;
  /** 图片为PDF时，返回PDF的总页数，默认为0 */
  PdfPageSize: number;
  /** 图片旋转角度（角度制），文本的水平方向为0°，统一以逆时针方向旋转，逆时针为负，角度范围为-360°至0°。 */
  Angle: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface RecognizeThaiIDCardOCRRequest {
  /** 图片的 Base64 值。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。 */
  ImageBase64?: string;
  /** 图片的 Url 地址。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。建议图片存储于腾讯云，可保障更高的下载速度和稳定性。 */
  ImageUrl?: string;
}

declare interface RecognizeThaiIDCardOCRResponse {
  /** 身份证号码 */
  ID?: string;
  /** 泰文姓名 */
  ThaiName?: string;
  /** 英文姓名 */
  EnFirstName?: string;
  /** 地址 */
  Address?: string;
  /** 出生日期 */
  Birthday?: string;
  /** 首次领用日期 */
  IssueDate?: string;
  /** 签发日期 */
  ExpirationDate?: string;
  /** 英文姓名 */
  EnLastName?: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  Time: string;
  /** 行程卡颜色：绿色、黄色、红色 */
  Color: string;
  /** 7天内到达或途经的城市（自2022年7月8日起，通信行程卡查询结果的覆盖时间范围由“14天”调整为“7天”） */
  ReachedCity: string[];
  /** 7天内到达或途径存在中高风险地区的城市（自2022年6月29日起，通信行程卡取消“星号”标记，改字段将返回空值） */
  RiskArea: string[];
  /** 电话号码 */
  Telephone: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  HouseholdNumber: string;
  /** 姓名 */
  Name: string;
  /** 性别 */
  Sex: string;
  /** 出生地 */
  BirthPlace: string;
  /** 民族 */
  Nation: string;
  /** 籍贯 */
  NativePlace: string;
  /** 出生日期 */
  BirthDate: string;
  /** 公民身份证件编号 */
  IdCardNumber: string;
  /** 文化程度 */
  EducationDegree: string;
  /** 服务处所 */
  ServicePlace: string;
  /** 户别 */
  Household: string;
  /** 住址 */
  Address: string;
  /** 承办人签章文字 */
  Signature: string;
  /** 签发日期 */
  IssueDate: string;
  /** 户主页编号 */
  HomePageNumber: string;
  /** 户主姓名 */
  HouseholderName: string;
  /** 户主或与户主关系 */
  Relationship: string;
  /** 本市（县）其他住址 */
  OtherAddresses: string;
  /** 宗教信仰 */
  ReligiousBelief: string;
  /** 身高 */
  Height: string;
  /** 血型 */
  BloodType: string;
  /** 婚姻状况 */
  MaritalStatus: string;
  /** 兵役状况 */
  VeteranStatus: string;
  /** 职业 */
  Profession: string;
  /** 何时由何地迁来本市(县) */
  MoveToCityInformation: string;
  /** 何时由何地迁来本址 */
  MoveToSiteInformation: string;
  /** 登记日期 */
  RegistrationDate: string;
  /** 曾用名 */
  FormerName: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface SealOCRRequest {
  /** 图片的 Base64 值。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。图片的 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。 */
  ImageBase64?: string;
  /** 图片的 Url 地址。要求图片经Base64编码后不超过 7M，分辨率建议500*800以上，支持PNG、JPG、JPEG、BMP格式。建议卡片部分占据图片2/3以上。图片下载时间不超过 3 秒。建议图片存储于腾讯云，可保障更高的下载速度和稳定性。 */
  ImageUrl?: string;
}

declare interface SealOCRResponse {
  /** 印章内容 */
  SealBody: string;
  /** 印章坐标 */
  Location: Rect;
  /** 其它文本内容 */
  OtherTexts: string[];
  /** 全部印章信息 */
  SealInfos: SealInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  ShipInvoiceInfos: ShipInvoiceInfo[];
  /** 图片旋转角度（角度制），文本的水平方向为0°，顺时针为正，逆时针为负。 */
  Angle: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  InvoiceNum: string;
  /** 发票号码 */
  InvoiceCode: string;
  /** 日期 */
  Date: string;
  /** 金额 */
  Fare: string;
  /** 上车时间 */
  GetOnTime: string;
  /** 下车时间 */
  GetOffTime: string;
  /** 里程 */
  Distance: string;
  /** 发票所在地 */
  Location: string;
  /** 车牌号 */
  PlateNumber: string;
  /** 发票消费类型 */
  InvoiceType: string;
  /** 省 */
  Province: string | null;
  /** 市 */
  City: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  TollInvoiceInfos: TollInvoiceInfo[];
  /** 图片旋转角度（角度制），文本的水平方向为0°，顺时针为正，逆时针为负。 */
  Angle: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  TicketNum: string;
  /** 出发站 */
  StartStation: string;
  /** 到达站 */
  DestinationStation: string;
  /** 出发时间 */
  Date: string;
  /** 车次 */
  TrainNum: string;
  /** 座位号 */
  Seat: string;
  /** 姓名 */
  Name: string;
  /** 票价 */
  Price: string;
  /** 席别 */
  SeatCategory: string;
  /** 身份证号 */
  ID: string;
  /** 发票消费类型：交通 */
  InvoiceType: string;
  /** 序列号 */
  SerialNumber: string;
  /** 加收票价 */
  AdditionalCost: string;
  /** 手续费 */
  HandlingFee: string;
  /** 大写金额（票面有大写金额该字段才有值） */
  LegalAmount: string;
  /** 售票站 */
  TicketStation: string;
  /** 原票价（一般有手续费的才有原始票价字段） */
  OriginalPrice: string;
  /** 发票类型：火车票、火车票补票、火车票退票凭证 */
  InvoiceStyle: string;
  /** 收据号码 */
  ReceiptNumber: string;
  /** 仅供报销使用：1为是，0为否 */
  IsReceipt: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface VatInvoiceOCRRequest {
  /** 图片/PDF的 Base64 值。支持的文件格式：PNG、JPG、JPEG、PDF，暂不支持 GIF 格式。支持的图片/PDF大小：所下载文件经Base64编码后不超过 7M。文件下载时间不超过 3 秒。输入参数 ImageUrl、ImageBase64 必须提供一个，如果都提供，只使用 ImageUrl。 */
  ImageBase64?: string;
  /** 图片/PDF的 Url 地址。支持的文件格式：PNG、JPG、JPEG、PDF，暂不支持 GIF 格式。支持的图片/PDF大小：所下载文件经 Base64 编码后不超过 7M。文件下载时间不超过 3 秒。图片存储于腾讯云的 Url 可保障更高的下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的 Url 速度和稳定性可能受一定影响。 */
  ImageUrl?: string;
  /** 是否开启PDF识别，默认值为false，开启后可同时支持图片和PDF的识别。 */
  IsPdf?: boolean;
  /** 需要识别的PDF页面的对应页码，仅支持PDF单页识别，当上传文件为PDF且IsPdf参数值为true时有效，默认值为1。 */
  PdfPageNumber?: number;
}

declare interface VatInvoiceOCRResponse {
  /** 检测到的文本信息，具体内容请点击左侧链接。 */
  VatInvoiceInfos: TextVatInvoice[];
  /** 明细条目。VatInvoiceInfos中关于明细项的具体条目。 */
  Items: VatInvoiceItem[];
  /** 默认值为0。如果图片为PDF时，返回PDF的总页数。 */
  PdfPageSize: number;
  /** 图片旋转角度（角度制），文本的水平方向为0°；顺时针为正，逆时针为负。点击查看如何纠正倾斜文本 */
  Angle: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 校验码后 6 位，增值税普通发票、增值税电子普通发票、增值税普通发票(卷式)、增值税电子普通发票(通行费)时必填;区块链为 5 位 */
  CheckCode?: string;
  /** 不含税金额，增值税专用发票、增值税电子专用发票、机动车销售统一发票、二手车销售统一发票、区块链发票时必填; 全电发票为价税合计(含税金额) */
  Amount?: string;
  /** 地区编码，通用机打电子发票时必填。广东:4400，浙江:3300 */
  RegionCode?: string;
  /** 销方税号，通用机打电子发票必填 */
  SellerTaxCode?: string;
  /** 是否开启通用机打电子发票，默认为关闭。 */
  EnableCommonElectronic?: boolean;
}

declare interface VatInvoiceVerifyNewResponse {
  /** 增值税发票信息，详情请点击左侧链接。 */
  Invoice: VatInvoice;
  /** 机动车销售统一发票信息 */
  VehicleInvoiceInfo: VehicleInvoiceInfo;
  /** 二手车销售统一发票信息 */
  UsedVehicleInvoiceInfo: UsedVehicleInvoiceInfo;
  /** 通行费发票信息 */
  PassInvoiceInfoList: PassInvoiceInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  Invoice: VatInvoice;
  /** 机动车销售统一发票信息 */
  VehicleInvoiceInfo: VehicleInvoiceInfo;
  /** 二手车销售统一发票信息 */
  UsedVehicleInvoiceInfo: UsedVehicleInvoiceInfo;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  VatRollInvoiceInfos: VatRollInvoiceInfo[];
  /** 图片旋转角度（角度制），文本的水平方向为0°，顺时针为正，逆时针为负。 */
  Angle: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  FrontInfo: TextVehicleFront | null;
  /** 行驶证副页正面的识别结果，CardSide 为 BACK。 */
  BackInfo: TextVehicleBack | null;
  /** Code 告警码列表和释义：-9102 复印件告警-9103 翻拍件告警-9106 ps告警注：告警码可以同时存在多个 */
  RecognizeWarnCode: number[];
  /** 告警码说明：WARN_DRIVER_LICENSE_COPY_CARD 复印件告警WARN_DRIVER_LICENSE_SCREENED_CARD 翻拍件告警WARN_DRIVER_LICENSE_PS_CARD ps告警注：告警信息可以同时存在多个 */
  RecognizeWarnMsg: string[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  VehicleRegCertInfos: VehicleRegCertInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface VerifyBasicBizLicenseRequest {
  /** 用于入参是营业执照图片的场景，ImageBase64和ImageUrl必须提供一个，如果都提供，只使用 ImageUrl。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。 */
  ImageBase64?: string;
  /** 用于入参是营业执照图片的场景，ImageBase64和ImageUrl必须提供一个，如果都提供，只使用 ImageUrl。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。 */
  ImageUrl?: string;
  /** 用于入参是营业执照图片的场景，表示需要校验的参数：RegNum（注册号或者统一社会信用代码），Name（企业名称），Address（经营地址）。选择后会返回相关参数校验结果。RegNum为必选，Name和Address可选。格式为{RegNum: true, Name:true/false, Address:true/false}设置方式参考：Config = Json.stringify({"Name":true,"Address":true})API 3.0 Explorer 设置方式参考：Config = {"Name":true,"Address":true} */
  ImageConfig?: string;
  /** 用于入参是文本的场景，RegNum表示注册号或者统一社会信用代码。若没有传入营业执照图片，则RegNum为必选项，若图片和RegNum都传入，则只使用RegNum。 */
  RegNum?: string;
  /** 用于入参是文本的场景，Name表示企业名称。Name为可选项，填写后会返回Name的校验结果。 */
  Name?: string;
  /** 用于入参是文本的场景，Address表示经营地址。Address为可选项，填写后会返回Address的校验结果。 */
  Address?: string;
  /** 1表示输出注册资本字段（单位：万元），其他值表示不输出。默认不输出。 */
  RegCapital?: number;
  /** true表示展示成立/注册日期 */
  EstablishTime?: boolean;
}

declare interface VerifyBasicBizLicenseResponse {
  /** 状态码，成功时返回0 */
  ErrorCode: number;
  /** 统一社会信用代码 */
  CreditCode: string;
  /** 经营期限自（YYYY-MM-DD） */
  Opfrom: string;
  /** 经营期限至（YYYY-MM-DD） */
  Opto: string;
  /** 法人姓名 */
  Frname: string;
  /** 经营状态，包括：成立、筹建、存续、在营、开业、在册、正常经营、开业登记中、登记成立、撤销、撤销登记、非正常户、告解、个体暂时吊销、个体转企业、吊销（未注销）、拟注销、已注销、（待）迁入、（待）迁出、停业、歇业、清算等。 */
  Entstatus: string;
  /** 经营业务范围 */
  Zsopscope: string;
  /** 查询的状态信息 */
  Reason: string;
  /** 原注册号 */
  Oriregno: string;
  /** 要核验的工商注册号 */
  VerifyRegno: string;
  /** 工商注册号 */
  Regno: string;
  /** 要核验的企业名称 */
  VerifyEntname: string;
  /** 企业名称 */
  Entname: string;
  /** 要核验的住址 */
  VerifyDom: string;
  /** 住址 */
  Dom: string;
  /** 验证结果 */
  RegNumResult: BizLicenseVerifyResult;
  /** 注册资本（单位：万元）,只有输入参数regCapital为1的时候才输出 */
  RegCapital: string;
  /** 成立/注册日期，只有输入参数EstablishTime为true时展示，默认为空 */
  EstablishTime: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface VerifyBizLicenseRequest {
  /** 用于入参是营业执照图片的场景，ImageBase64和ImageUrl必须提供一个，如果都提供，只使用 ImageUrl。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。 */
  ImageBase64?: string;
  /** 用于入参是营业执照图片的场景，ImageBase64和ImageUrl必须提供一个，如果都提供，只使用 ImageUrl。支持的图片格式：PNG、JPG、JPEG，暂不支持 GIF 格式。支持的图片大小：所下载图片经Base64编码后不超过 7M。图片下载时间不超过 3 秒。 */
  ImageUrl?: string;
  /** 用于入参是营业执照图片的场景，表示需要校验的参数：RegNum（注册号或者统一社会信用代码），Name（企业名称），Address（经营地址）。选择后会返回相关参数校验结果。RegNum为必选，Name和Address可选。格式为{RegNum: true, Name:true/false, Address:true/false}设置方式参考：Config = Json.stringify({"Name":true,"Address":true})API 3.0 Explorer 设置方式参考：Config = {"Name":true,"Address":true} */
  ImageConfig?: string;
  /** 用于入参是文本的场景，RegNum表示注册号或者统一社会信用代码。若没有传入营业执照图片，则RegNum为必选项，若图片和RegNum都传入，则只使用RegNum。 */
  RegNum?: string;
  /** 用于入参是文本的场景，Name表示企业名称。Name为可选项，填写后会返回Name的校验结果。 */
  Name?: string;
  /** 用于入参是文本的场景，Address表示经营地址，填写后会返回Address的校验结果。 */
  Address?: string;
}

declare interface VerifyBizLicenseResponse {
  /** 状态码 */
  ErrorCode: number;
  /** 统一社会信用代码 */
  CreditCode: string;
  /** 组织机构代码 */
  OrgCode: string;
  /** 经营期限自（YYYY-MM-DD） */
  OpenFrom: string;
  /** 经营期限至（YYYY-MM-DD） */
  OpenTo: string;
  /** 法人姓名 */
  FrName: string;
  /** 经营状态，包括：成立、筹建、存续、在营、开业、在册、正常经营、开业登记中、登记成立、撤销、撤销登记、非正常户、告解、个体暂时吊销、个体转企业、吊销（未注销）、拟注销、已注销、（待）迁入、（待）迁出、停业、歇业、清算等。 */
  EnterpriseStatus: string;
  /** 经营（业务）范围及方式 */
  OperateScopeAndForm: string;
  /** 注册资金（单位:万元） */
  RegCap: string;
  /** 注册币种 */
  RegCapCur: string;
  /** 登记机关 */
  RegOrg: string;
  /** 开业日期（YYYY-MM-DD） */
  EsDate: string;
  /** 企业（机构）类型 */
  EnterpriseType: string;
  /** 注销日期 */
  CancelDate: string;
  /** 吊销日期 */
  RevokeDate: string;
  /** 许可经营项目 */
  AbuItem: string;
  /** 一般经营项目 */
  CbuItem: string;
  /** 核准时间 */
  ApprDate: string;
  /** 省（返回空值） */
  Province: string;
  /** 地级市（返回空值） */
  City: string;
  /** 区\县（返回空值） */
  County: string;
  /** 住所所在行政区划代码（返回空值） */
  AreaCode: string;
  /** 行业门类代码（返回空值） */
  IndustryPhyCode: string;
  /** 行业门类名称（返回空值） */
  IndustryPhyName: string;
  /** 国民经济行业代码（返回空值） */
  IndustryCode: string;
  /** 国民经济行业名称（返回空值） */
  IndustryName: string;
  /** 经营（业务）范围 */
  OperateScope: string;
  /** 要核验的工商注册号 */
  VerifyRegNo: string;
  /** 工商注册号 */
  RegNo: string;
  /** 要核验的企业名称 */
  VerifyEnterpriseName: string;
  /** 企业名称 */
  EnterpriseName: string;
  /** 要核验的注册地址 */
  VerifyAddress: string;
  /** 注册地址 */
  Address: string;
  /** 验证结果 */
  RegNumResult: BizLicenseVerifyResult;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface VerifyEnterpriseFourFactorsRequest {
  /** 姓名 */
  RealName: string;
  /** 证件号码（公司注册证件号） */
  IdCard: string;
  /** 企业全称 */
  EnterpriseName: string;
  /** 企业标识（注册号，统一社会信用代码） */
  EnterpriseMark: string;
}

declare interface VerifyEnterpriseFourFactorsResponse {
  /** 核验一致性（1:一致，2:不一致，3:查询无记录） */
  State: number;
  /** 核验结果明细，7：企业法人/负责人，6：企业股东，5：企业管理人员，-21：企业名称与企业标识不符，-22：姓名不一致，-23：证件号码不一致，-24：企业名称不一致，-25：企业标识不一致 */
  Detail: Detail | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface VerifyOfdVatInvoiceOCRRequest {
  /** OFD文件的 Url 地址。 */
  OfdFileUrl?: string;
  /** OFD文件的 Base64 值。OfdFileUrl 和 OfdFileBase64 必传其一，若两者都传，只解析OfdFileBase64。 */
  OfdFileBase64?: string;
}

declare interface VerifyOfdVatInvoiceOCRResponse {
  /** 发票类型026:增值税电子普通发票028:增值税电子专用发票 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  Vin: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  TextDetections: TextWaybill;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

/** {@link Ocr 文字识别} */
declare interface Ocr {
  (): Versions;
  /** {@link AdvertiseOCR 广告文字识别}({@link AdvertiseOCRRequest 请求参数}): {@link AdvertiseOCRResponse 返回参数} */
  AdvertiseOCR(data?: AdvertiseOCRRequest, config?: AxiosRequestConfig): AxiosPromise<AdvertiseOCRResponse>;
  /** {@link ArithmeticOCR 算式识别}({@link ArithmeticOCRRequest 请求参数}): {@link ArithmeticOCRResponse 返回参数} */
  ArithmeticOCR(data?: ArithmeticOCRRequest, config?: AxiosRequestConfig): AxiosPromise<ArithmeticOCRResponse>;
  /** {@link BankCardOCR 银行卡识别}({@link BankCardOCRRequest 请求参数}): {@link BankCardOCRResponse 返回参数} */
  BankCardOCR(data?: BankCardOCRRequest, config?: AxiosRequestConfig): AxiosPromise<BankCardOCRResponse>;
  /** {@link BankSlipOCR 银行回单识别}({@link BankSlipOCRRequest 请求参数}): {@link BankSlipOCRResponse 返回参数} */
  BankSlipOCR(data?: BankSlipOCRRequest, config?: AxiosRequestConfig): AxiosPromise<BankSlipOCRResponse>;
  /** {@link BizLicenseOCR 营业执照识别}({@link BizLicenseOCRRequest 请求参数}): {@link BizLicenseOCRResponse 返回参数} */
  BizLicenseOCR(data?: BizLicenseOCRRequest, config?: AxiosRequestConfig): AxiosPromise<BizLicenseOCRResponse>;
  /** {@link BusInvoiceOCR 汽车票识别}({@link BusInvoiceOCRRequest 请求参数}): {@link BusInvoiceOCRResponse 返回参数} */
  BusInvoiceOCR(data?: BusInvoiceOCRRequest, config?: AxiosRequestConfig): AxiosPromise<BusInvoiceOCRResponse>;
  /** {@link BusinessCardOCR 名片识别}({@link BusinessCardOCRRequest 请求参数}): {@link BusinessCardOCRResponse 返回参数} */
  BusinessCardOCR(data?: BusinessCardOCRRequest, config?: AxiosRequestConfig): AxiosPromise<BusinessCardOCRResponse>;
  /** {@link CarInvoiceOCR 购车发票识别}({@link CarInvoiceOCRRequest 请求参数}): {@link CarInvoiceOCRResponse 返回参数} */
  CarInvoiceOCR(data?: CarInvoiceOCRRequest, config?: AxiosRequestConfig): AxiosPromise<CarInvoiceOCRResponse>;
  /** {@link ClassifyDetectOCR 智能卡证分类}({@link ClassifyDetectOCRRequest 请求参数}): {@link ClassifyDetectOCRResponse 返回参数} */
  ClassifyDetectOCR(data?: ClassifyDetectOCRRequest, config?: AxiosRequestConfig): AxiosPromise<ClassifyDetectOCRResponse>;
  /** {@link DriverLicenseOCR 驾驶证识别}({@link DriverLicenseOCRRequest 请求参数}): {@link DriverLicenseOCRResponse 返回参数} */
  DriverLicenseOCR(data?: DriverLicenseOCRRequest, config?: AxiosRequestConfig): AxiosPromise<DriverLicenseOCRResponse>;
  /** {@link DutyPaidProofOCR 完税证明识别}({@link DutyPaidProofOCRRequest 请求参数}): {@link DutyPaidProofOCRResponse 返回参数} */
  DutyPaidProofOCR(data?: DutyPaidProofOCRRequest, config?: AxiosRequestConfig): AxiosPromise<DutyPaidProofOCRResponse>;
  /** {@link EduPaperOCR 数学试题识别}({@link EduPaperOCRRequest 请求参数}): {@link EduPaperOCRResponse 返回参数} */
  EduPaperOCR(data?: EduPaperOCRRequest, config?: AxiosRequestConfig): AxiosPromise<EduPaperOCRResponse>;
  /** {@link EnglishOCR 英文识别}({@link EnglishOCRRequest 请求参数}): {@link EnglishOCRResponse 返回参数} */
  EnglishOCR(data?: EnglishOCRRequest, config?: AxiosRequestConfig): AxiosPromise<EnglishOCRResponse>;
  /** {@link EnterpriseLicenseOCR 企业证照识别}({@link EnterpriseLicenseOCRRequest 请求参数}): {@link EnterpriseLicenseOCRResponse 返回参数} */
  EnterpriseLicenseOCR(data?: EnterpriseLicenseOCRRequest, config?: AxiosRequestConfig): AxiosPromise<EnterpriseLicenseOCRResponse>;
  /** {@link EstateCertOCR 不动产权证识别}({@link EstateCertOCRRequest 请求参数}): {@link EstateCertOCRResponse 返回参数} */
  EstateCertOCR(data?: EstateCertOCRRequest, config?: AxiosRequestConfig): AxiosPromise<EstateCertOCRResponse>;
  /** {@link FinanBillOCR 金融票据整单识别}({@link FinanBillOCRRequest 请求参数}): {@link FinanBillOCRResponse 返回参数} */
  FinanBillOCR(data?: FinanBillOCRRequest, config?: AxiosRequestConfig): AxiosPromise<FinanBillOCRResponse>;
  /** {@link FinanBillSliceOCR 金融票据切片识别}({@link FinanBillSliceOCRRequest 请求参数}): {@link FinanBillSliceOCRResponse 返回参数} */
  FinanBillSliceOCR(data?: FinanBillSliceOCRRequest, config?: AxiosRequestConfig): AxiosPromise<FinanBillSliceOCRResponse>;
  /** {@link FlightInvoiceOCR 机票行程单识别}({@link FlightInvoiceOCRRequest 请求参数}): {@link FlightInvoiceOCRResponse 返回参数} */
  FlightInvoiceOCR(data?: FlightInvoiceOCRRequest, config?: AxiosRequestConfig): AxiosPromise<FlightInvoiceOCRResponse>;
  /** {@link FormulaOCR 数学公式识别}({@link FormulaOCRRequest 请求参数}): {@link FormulaOCRResponse 返回参数} */
  FormulaOCR(data?: FormulaOCRRequest, config?: AxiosRequestConfig): AxiosPromise<FormulaOCRResponse>;
  /** {@link GeneralAccurateOCR 通用印刷体识别（高精度版）}({@link GeneralAccurateOCRRequest 请求参数}): {@link GeneralAccurateOCRResponse 返回参数} */
  GeneralAccurateOCR(data?: GeneralAccurateOCRRequest, config?: AxiosRequestConfig): AxiosPromise<GeneralAccurateOCRResponse>;
  /** {@link GeneralBasicOCR 通用印刷体识别}({@link GeneralBasicOCRRequest 请求参数}): {@link GeneralBasicOCRResponse 返回参数} */
  GeneralBasicOCR(data?: GeneralBasicOCRRequest, config?: AxiosRequestConfig): AxiosPromise<GeneralBasicOCRResponse>;
  /** {@link GeneralEfficientOCR 通用印刷体识别（精简版）}({@link GeneralEfficientOCRRequest 请求参数}): {@link GeneralEfficientOCRResponse 返回参数} */
  GeneralEfficientOCR(data?: GeneralEfficientOCRRequest, config?: AxiosRequestConfig): AxiosPromise<GeneralEfficientOCRResponse>;
  /** {@link GeneralFastOCR 通用印刷体识别（高速版）}({@link GeneralFastOCRRequest 请求参数}): {@link GeneralFastOCRResponse 返回参数} */
  GeneralFastOCR(data?: GeneralFastOCRRequest, config?: AxiosRequestConfig): AxiosPromise<GeneralFastOCRResponse>;
  /** {@link GeneralHandwritingOCR 通用手写体识别}({@link GeneralHandwritingOCRRequest 请求参数}): {@link GeneralHandwritingOCRResponse 返回参数} */
  GeneralHandwritingOCR(data?: GeneralHandwritingOCRRequest, config?: AxiosRequestConfig): AxiosPromise<GeneralHandwritingOCRResponse>;
  /** {@link HKIDCardOCR 中国香港身份证识别}({@link HKIDCardOCRRequest 请求参数}): {@link HKIDCardOCRResponse 返回参数} */
  HKIDCardOCR(data: HKIDCardOCRRequest, config?: AxiosRequestConfig): AxiosPromise<HKIDCardOCRResponse>;
  /** {@link HmtResidentPermitOCR 港澳台居住证识别}({@link HmtResidentPermitOCRRequest 请求参数}): {@link HmtResidentPermitOCRResponse 返回参数} */
  HmtResidentPermitOCR(data?: HmtResidentPermitOCRRequest, config?: AxiosRequestConfig): AxiosPromise<HmtResidentPermitOCRResponse>;
  /** {@link IDCardOCR 身份证识别}({@link IDCardOCRRequest 请求参数}): {@link IDCardOCRResponse 返回参数} */
  IDCardOCR(data?: IDCardOCRRequest, config?: AxiosRequestConfig): AxiosPromise<IDCardOCRResponse>;
  /** {@link ImageEnhancement 文本图像增强}({@link ImageEnhancementRequest 请求参数}): {@link ImageEnhancementResponse 返回参数} */
  ImageEnhancement(data?: ImageEnhancementRequest, config?: AxiosRequestConfig): AxiosPromise<ImageEnhancementResponse>;
  /** {@link InstitutionOCR 事业单位法人证书识别}({@link InstitutionOCRRequest 请求参数}): {@link InstitutionOCRResponse 返回参数} */
  InstitutionOCR(data?: InstitutionOCRRequest, config?: AxiosRequestConfig): AxiosPromise<InstitutionOCRResponse>;
  /** {@link InsuranceBillOCR 保险单据识别}({@link InsuranceBillOCRRequest 请求参数}): {@link InsuranceBillOCRResponse 返回参数} */
  InsuranceBillOCR(data?: InsuranceBillOCRRequest, config?: AxiosRequestConfig): AxiosPromise<InsuranceBillOCRResponse>;
  /** {@link InvoiceGeneralOCR 通用机打发票识别}({@link InvoiceGeneralOCRRequest 请求参数}): {@link InvoiceGeneralOCRResponse 返回参数} */
  InvoiceGeneralOCR(data?: InvoiceGeneralOCRRequest, config?: AxiosRequestConfig): AxiosPromise<InvoiceGeneralOCRResponse>;
  /** {@link LicensePlateOCR 车牌识别}({@link LicensePlateOCRRequest 请求参数}): {@link LicensePlateOCRResponse 返回参数} */
  LicensePlateOCR(data?: LicensePlateOCRRequest, config?: AxiosRequestConfig): AxiosPromise<LicensePlateOCRResponse>;
  /** {@link MLIDCardOCR 马来西亚身份证识别}({@link MLIDCardOCRRequest 请求参数}): {@link MLIDCardOCRResponse 返回参数} */
  MLIDCardOCR(data?: MLIDCardOCRRequest, config?: AxiosRequestConfig): AxiosPromise<MLIDCardOCRResponse>;
  /** {@link MLIDPassportOCR 护照识别（港澳台地区及境外护照）}({@link MLIDPassportOCRRequest 请求参数}): {@link MLIDPassportOCRResponse 返回参数} */
  MLIDPassportOCR(data: MLIDPassportOCRRequest, config?: AxiosRequestConfig): AxiosPromise<MLIDPassportOCRResponse>;
  /** {@link MainlandPermitOCR 港澳台来往内地通行证识别}({@link MainlandPermitOCRRequest 请求参数}): {@link MainlandPermitOCRResponse 返回参数} */
  MainlandPermitOCR(data?: MainlandPermitOCRRequest, config?: AxiosRequestConfig): AxiosPromise<MainlandPermitOCRResponse>;
  /** {@link MixedInvoiceDetect 混贴票据分类}({@link MixedInvoiceDetectRequest 请求参数}): {@link MixedInvoiceDetectResponse 返回参数} */
  MixedInvoiceDetect(data: MixedInvoiceDetectRequest, config?: AxiosRequestConfig): AxiosPromise<MixedInvoiceDetectResponse>;
  /** {@link MixedInvoiceOCR 混贴票据识别}({@link MixedInvoiceOCRRequest 请求参数}): {@link MixedInvoiceOCRResponse 返回参数} */
  MixedInvoiceOCR(data?: MixedInvoiceOCRRequest, config?: AxiosRequestConfig): AxiosPromise<MixedInvoiceOCRResponse>;
  /** {@link OrgCodeCertOCR 组织机构代码证识别}({@link OrgCodeCertOCRRequest 请求参数}): {@link OrgCodeCertOCRResponse 返回参数} */
  OrgCodeCertOCR(data?: OrgCodeCertOCRRequest, config?: AxiosRequestConfig): AxiosPromise<OrgCodeCertOCRResponse>;
  /** {@link PassportOCR 护照识别（中国大陆地区护照）}({@link PassportOCRRequest 请求参数}): {@link PassportOCRResponse 返回参数} */
  PassportOCR(data?: PassportOCRRequest, config?: AxiosRequestConfig): AxiosPromise<PassportOCRResponse>;
  /** {@link PermitOCR 港澳台通行证识别}({@link PermitOCRRequest 请求参数}): {@link PermitOCRResponse 返回参数} */
  PermitOCR(data?: PermitOCRRequest, config?: AxiosRequestConfig): AxiosPromise<PermitOCRResponse>;
  /** {@link PropOwnerCertOCR 房产证识别}({@link PropOwnerCertOCRRequest 请求参数}): {@link PropOwnerCertOCRResponse 返回参数} */
  PropOwnerCertOCR(data?: PropOwnerCertOCRRequest, config?: AxiosRequestConfig): AxiosPromise<PropOwnerCertOCRResponse>;
  /** {@link QrcodeOCR 二维码和条形码识别}({@link QrcodeOCRRequest 请求参数}): {@link QrcodeOCRResponse 返回参数} */
  QrcodeOCR(data?: QrcodeOCRRequest, config?: AxiosRequestConfig): AxiosPromise<QrcodeOCRResponse>;
  /** {@link QueryBarCode 条码信息查询}({@link QueryBarCodeRequest 请求参数}): {@link QueryBarCodeResponse 返回参数} */
  QueryBarCode(data: QueryBarCodeRequest, config?: AxiosRequestConfig): AxiosPromise<QueryBarCodeResponse>;
  /** {@link QuotaInvoiceOCR 定额发票识别}({@link QuotaInvoiceOCRRequest 请求参数}): {@link QuotaInvoiceOCRResponse 返回参数} */
  QuotaInvoiceOCR(data?: QuotaInvoiceOCRRequest, config?: AxiosRequestConfig): AxiosPromise<QuotaInvoiceOCRResponse>;
  /** {@link RecognizeContainerOCR 集装箱识别}({@link RecognizeContainerOCRRequest 请求参数}): {@link RecognizeContainerOCRResponse 返回参数} */
  RecognizeContainerOCR(data?: RecognizeContainerOCRRequest, config?: AxiosRequestConfig): AxiosPromise<RecognizeContainerOCRResponse>;
  /** {@link RecognizeHealthCodeOCR 健康码识别}({@link RecognizeHealthCodeOCRRequest 请求参数}): {@link RecognizeHealthCodeOCRResponse 返回参数} */
  RecognizeHealthCodeOCR(data?: RecognizeHealthCodeOCRRequest, config?: AxiosRequestConfig): AxiosPromise<RecognizeHealthCodeOCRResponse>;
  /** {@link RecognizeIndonesiaIDCardOCR 印尼身份证识别}({@link RecognizeIndonesiaIDCardOCRRequest 请求参数}): {@link RecognizeIndonesiaIDCardOCRResponse 返回参数} */
  RecognizeIndonesiaIDCardOCR(data?: RecognizeIndonesiaIDCardOCRRequest, config?: AxiosRequestConfig): AxiosPromise<RecognizeIndonesiaIDCardOCRResponse>;
  /** {@link RecognizeMedicalInvoiceOCR 医疗票据识别}({@link RecognizeMedicalInvoiceOCRRequest 请求参数}): {@link RecognizeMedicalInvoiceOCRResponse 返回参数} */
  RecognizeMedicalInvoiceOCR(data?: RecognizeMedicalInvoiceOCRRequest, config?: AxiosRequestConfig): AxiosPromise<RecognizeMedicalInvoiceOCRResponse>;
  /** {@link RecognizeOnlineTaxiItineraryOCR 网约车行程单识别}({@link RecognizeOnlineTaxiItineraryOCRRequest 请求参数}): {@link RecognizeOnlineTaxiItineraryOCRResponse 返回参数} */
  RecognizeOnlineTaxiItineraryOCR(data?: RecognizeOnlineTaxiItineraryOCRRequest, config?: AxiosRequestConfig): AxiosPromise<RecognizeOnlineTaxiItineraryOCRResponse>;
  /** {@link RecognizePhilippinesDrivingLicenseOCR 菲律宾驾驶证识别}({@link RecognizePhilippinesDrivingLicenseOCRRequest 请求参数}): {@link RecognizePhilippinesDrivingLicenseOCRResponse 返回参数} */
  RecognizePhilippinesDrivingLicenseOCR(data?: RecognizePhilippinesDrivingLicenseOCRRequest, config?: AxiosRequestConfig): AxiosPromise<RecognizePhilippinesDrivingLicenseOCRResponse>;
  /** {@link RecognizePhilippinesVoteIDOCR 菲律宾VoteID识别}({@link RecognizePhilippinesVoteIDOCRRequest 请求参数}): {@link RecognizePhilippinesVoteIDOCRResponse 返回参数} */
  RecognizePhilippinesVoteIDOCR(data: RecognizePhilippinesVoteIDOCRRequest, config?: AxiosRequestConfig): AxiosPromise<RecognizePhilippinesVoteIDOCRResponse>;
  /** {@link RecognizeTableOCR 表格识别（V2)}({@link RecognizeTableOCRRequest 请求参数}): {@link RecognizeTableOCRResponse 返回参数} */
  RecognizeTableOCR(data?: RecognizeTableOCRRequest, config?: AxiosRequestConfig): AxiosPromise<RecognizeTableOCRResponse>;
  /** {@link RecognizeThaiIDCardOCR 泰国身份证识别}({@link RecognizeThaiIDCardOCRRequest 请求参数}): {@link RecognizeThaiIDCardOCRResponse 返回参数} */
  RecognizeThaiIDCardOCR(data?: RecognizeThaiIDCardOCRRequest, config?: AxiosRequestConfig): AxiosPromise<RecognizeThaiIDCardOCRResponse>;
  /** {@link RecognizeTravelCardOCR 通信行程卡识别}({@link RecognizeTravelCardOCRRequest 请求参数}): {@link RecognizeTravelCardOCRResponse 返回参数} */
  RecognizeTravelCardOCR(data?: RecognizeTravelCardOCRRequest, config?: AxiosRequestConfig): AxiosPromise<RecognizeTravelCardOCRResponse>;
  /** {@link ResidenceBookletOCR 户口本识别}({@link ResidenceBookletOCRRequest 请求参数}): {@link ResidenceBookletOCRResponse 返回参数} */
  ResidenceBookletOCR(data?: ResidenceBookletOCRRequest, config?: AxiosRequestConfig): AxiosPromise<ResidenceBookletOCRResponse>;
  /** {@link RideHailingDriverLicenseOCR 网约车驾驶证识别}({@link RideHailingDriverLicenseOCRRequest 请求参数}): {@link RideHailingDriverLicenseOCRResponse 返回参数} */
  RideHailingDriverLicenseOCR(data?: RideHailingDriverLicenseOCRRequest, config?: AxiosRequestConfig): AxiosPromise<RideHailingDriverLicenseOCRResponse>;
  /** {@link RideHailingTransportLicenseOCR 网约车运输证识别}({@link RideHailingTransportLicenseOCRRequest 请求参数}): {@link RideHailingTransportLicenseOCRResponse 返回参数} */
  RideHailingTransportLicenseOCR(data?: RideHailingTransportLicenseOCRRequest, config?: AxiosRequestConfig): AxiosPromise<RideHailingTransportLicenseOCRResponse>;
  /** {@link SealOCR 印章识别}({@link SealOCRRequest 请求参数}): {@link SealOCRResponse 返回参数} */
  SealOCR(data?: SealOCRRequest, config?: AxiosRequestConfig): AxiosPromise<SealOCRResponse>;
  /** {@link ShipInvoiceOCR 轮船票识别}({@link ShipInvoiceOCRRequest 请求参数}): {@link ShipInvoiceOCRResponse 返回参数} */
  ShipInvoiceOCR(data?: ShipInvoiceOCRRequest, config?: AxiosRequestConfig): AxiosPromise<ShipInvoiceOCRResponse>;
  /** {@link SmartStructuralOCR 智能结构化识别}({@link SmartStructuralOCRRequest 请求参数}): {@link SmartStructuralOCRResponse 返回参数} */
  SmartStructuralOCR(data?: SmartStructuralOCRRequest, config?: AxiosRequestConfig): AxiosPromise<SmartStructuralOCRResponse>;
  /** {@link TableOCR 表格识别（V1)}({@link TableOCRRequest 请求参数}): {@link TableOCRResponse 返回参数} */
  TableOCR(data?: TableOCRRequest, config?: AxiosRequestConfig): AxiosPromise<TableOCRResponse>;
  /** {@link TaxiInvoiceOCR 出租车发票识别}({@link TaxiInvoiceOCRRequest 请求参数}): {@link TaxiInvoiceOCRResponse 返回参数} */
  TaxiInvoiceOCR(data?: TaxiInvoiceOCRRequest, config?: AxiosRequestConfig): AxiosPromise<TaxiInvoiceOCRResponse>;
  /** {@link TextDetect 快速文本检测}({@link TextDetectRequest 请求参数}): {@link TextDetectResponse 返回参数} */
  TextDetect(data?: TextDetectRequest, config?: AxiosRequestConfig): AxiosPromise<TextDetectResponse>;
  /** {@link TollInvoiceOCR 过路过桥费发票识别}({@link TollInvoiceOCRRequest 请求参数}): {@link TollInvoiceOCRResponse 返回参数} */
  TollInvoiceOCR(data?: TollInvoiceOCRRequest, config?: AxiosRequestConfig): AxiosPromise<TollInvoiceOCRResponse>;
  /** {@link TrainTicketOCR 火车票识别}({@link TrainTicketOCRRequest 请求参数}): {@link TrainTicketOCRResponse 返回参数} */
  TrainTicketOCR(data?: TrainTicketOCRRequest, config?: AxiosRequestConfig): AxiosPromise<TrainTicketOCRResponse>;
  /** {@link VatInvoiceOCR 增值税发票识别}({@link VatInvoiceOCRRequest 请求参数}): {@link VatInvoiceOCRResponse 返回参数} */
  VatInvoiceOCR(data?: VatInvoiceOCRRequest, config?: AxiosRequestConfig): AxiosPromise<VatInvoiceOCRResponse>;
  /** {@link VatInvoiceVerify 增值税发票核验}({@link VatInvoiceVerifyRequest 请求参数}): {@link VatInvoiceVerifyResponse 返回参数} */
  VatInvoiceVerify(data: VatInvoiceVerifyRequest, config?: AxiosRequestConfig): AxiosPromise<VatInvoiceVerifyResponse>;
  /** {@link VatInvoiceVerifyNew 增值税发票核验（新版）}({@link VatInvoiceVerifyNewRequest 请求参数}): {@link VatInvoiceVerifyNewResponse 返回参数} */
  VatInvoiceVerifyNew(data: VatInvoiceVerifyNewRequest, config?: AxiosRequestConfig): AxiosPromise<VatInvoiceVerifyNewResponse>;
  /** {@link VatRollInvoiceOCR 增值税发票（卷票）识别}({@link VatRollInvoiceOCRRequest 请求参数}): {@link VatRollInvoiceOCRResponse 返回参数} */
  VatRollInvoiceOCR(data?: VatRollInvoiceOCRRequest, config?: AxiosRequestConfig): AxiosPromise<VatRollInvoiceOCRResponse>;
  /** {@link VehicleLicenseOCR 行驶证识别}({@link VehicleLicenseOCRRequest 请求参数}): {@link VehicleLicenseOCRResponse 返回参数} */
  VehicleLicenseOCR(data?: VehicleLicenseOCRRequest, config?: AxiosRequestConfig): AxiosPromise<VehicleLicenseOCRResponse>;
  /** {@link VehicleRegCertOCR 机动车登记证书识别}({@link VehicleRegCertOCRRequest 请求参数}): {@link VehicleRegCertOCRResponse 返回参数} */
  VehicleRegCertOCR(data?: VehicleRegCertOCRRequest, config?: AxiosRequestConfig): AxiosPromise<VehicleRegCertOCRResponse>;
  /** {@link VerifyBasicBizLicense 营业执照识别及核验（基础版）}({@link VerifyBasicBizLicenseRequest 请求参数}): {@link VerifyBasicBizLicenseResponse 返回参数} */
  VerifyBasicBizLicense(data?: VerifyBasicBizLicenseRequest, config?: AxiosRequestConfig): AxiosPromise<VerifyBasicBizLicenseResponse>;
  /** {@link VerifyBizLicense 营业执照识别及核验（详细版）}({@link VerifyBizLicenseRequest 请求参数}): {@link VerifyBizLicenseResponse 返回参数} */
  VerifyBizLicense(data?: VerifyBizLicenseRequest, config?: AxiosRequestConfig): AxiosPromise<VerifyBizLicenseResponse>;
  /** {@link VerifyEnterpriseFourFactors 企业四要素核验}({@link VerifyEnterpriseFourFactorsRequest 请求参数}): {@link VerifyEnterpriseFourFactorsResponse 返回参数} */
  VerifyEnterpriseFourFactors(data: VerifyEnterpriseFourFactorsRequest, config?: AxiosRequestConfig): AxiosPromise<VerifyEnterpriseFourFactorsResponse>;
  /** {@link VerifyOfdVatInvoiceOCR OFD发票识别}({@link VerifyOfdVatInvoiceOCRRequest 请求参数}): {@link VerifyOfdVatInvoiceOCRResponse 返回参数} */
  VerifyOfdVatInvoiceOCR(data?: VerifyOfdVatInvoiceOCRRequest, config?: AxiosRequestConfig): AxiosPromise<VerifyOfdVatInvoiceOCRResponse>;
  /** {@link VinOCR 车辆VIN码识别}({@link VinOCRRequest 请求参数}): {@link VinOCRResponse 返回参数} */
  VinOCR(data?: VinOCRRequest, config?: AxiosRequestConfig): AxiosPromise<VinOCRResponse>;
  /** {@link WaybillOCR 运单识别}({@link WaybillOCRRequest 请求参数}): {@link WaybillOCRResponse 返回参数} */
  WaybillOCR(data?: WaybillOCRRequest, config?: AxiosRequestConfig): AxiosPromise<WaybillOCRResponse>;
}

export declare type Versions = ["2018-11-19"];

export default Ocr;
