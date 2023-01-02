/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 人体年龄信息。 AttributesType 不含 Age 或检测超过 5 个人体时，此参数仍返回，但不具备参考意义。 */
declare interface Age {
  /** 人体年龄信息，返回值为以下集合中的一个{小孩,青年,中年,老年}。 */
  Type: string;
  /** Type识别概率值，[0.0,1.0],代表判断正确的概率。如0.8则代表有Type值有80%概率正确。 */
  Probability: number;
}

/** 返回人体属性选项，此值不填则为不需要返回，可以选择的值为以下六个。Age、Bag、Gender、Orientation、UpperBodyCloth、LowerBodyCloth，详细的解释请看对象描述需注意本接口最多返回面积最大的 5 个人体属性信息，超过 5 个人体（第 6 个及以后的人体）的人体属性不具备参考意义。 */
declare interface AttributesOptions {
  /** 返回年龄信息 */
  Age?: boolean;
  /** 返回随身挎包信息 */
  Bag?: boolean;
  /** 返回性别信息 */
  Gender?: boolean;
  /** 返回朝向信息 */
  Orientation?: boolean;
  /** 返回上装信息 */
  UpperBodyCloth?: boolean;
  /** 返回下装信息 */
  LowerBodyCloth?: boolean;
}

/** 人体是否挎包。 AttributesType 不含 Bag 或检测超过 5 个人体时，此参数仍返回，但不具备参考意义。 */
declare interface Bag {
  /** 挎包信息，返回值为以下集合中的一个{双肩包, 斜挎包, 手拎包, 无包}。 */
  Type: string;
  /** Type识别概率值，[0.0,1.0],代表判断正确的概率。如0.8则代表有Type值有80%概率正确。 */
  Probability: number;
}

/** 图中检测出的人体属性信息。 */
declare interface BodyAttributeInfo {
  /** 人体年龄信息。 AttributesType 不含 Age 或检测超过 5 个人体时，此参数仍返回，但不具备参考意义。 */
  Age: Age | null;
  /** 人体是否挎包。 AttributesType 不含 Bag 或检测超过 5 个人体时，此参数仍返回，但不具备参考意义。 */
  Bag: Bag | null;
  /** 人体性别信息。 AttributesType 不含 Gender 或检测超过 5 个人体时，此参数仍返回，但不具备参考意义。 */
  Gender: Gender | null;
  /** 人体朝向信息。 AttributesType 不含 UpperBodyCloth 或检测超过 5 个人体时，此参数仍返回，但不具备参考意义。 */
  Orientation: Orientation | null;
  /** 人体上衣属性信息。AttributesType 不含 Orientation 或检测超过 5 个人体时，此参数仍返回，但不具备参考意义。 */
  UpperBodyCloth: UpperBodyCloth | null;
  /** 人体下衣属性信息。 AttributesType 不含 LowerBodyCloth 或检测超过 5 个人体时，此参数仍返回，但不具备参考意义。 */
  LowerBodyCloth: LowerBodyCloth | null;
}

/** 图中检测出来的人体框。 */
declare interface BodyDetectResult {
  /** 检测出的人体置信度。 误识率百分之十对应的阈值是0.14；误识率百分之五对应的阈值是0.32；误识率百分之二对应的阈值是0.62；误识率百分之一对应的阈值是0.81。 通常情况建议使用阈值0.32，可适用大多数情况。 */
  Confidence: number;
  /** 图中检测出来的人体框 */
  BodyRect: BodyRect;
  /** 图中检测出的人体属性信息。 */
  BodyAttributeInfo: BodyAttributeInfo;
}

/** 人体框和人体关键点信息。 */
declare interface BodyJointsResult {
  /** 图中检测出来的人体框。 */
  BoundBox: BoundRect;
  /** 14个人体关键点的坐标，人体关键点详见KeyPointInfo。 */
  BodyJoints: KeyPointInfo[];
  /** 检测出的人体置信度，0-1之间，数值越高越准确。 */
  Confidence: number;
}

/** 人体框 */
declare interface BodyRect {
  /** 人体框左上角横坐标。 */
  X: number;
  /** 人体框左上角纵坐标。 */
  Y: number;
  /** 人体宽度。 */
  Width: number;
  /** 人体高度。 */
  Height: number;
}

/** 人体框 */
declare interface BoundRect {
  /** 人体框左上角横坐标。 */
  X: number;
  /** 人体框左上角纵坐标。 */
  Y: number;
  /** 人体宽度。 */
  Width: number;
  /** 人体高度。 */
  Height: number;
}

/** 识别出的最相似候选人。 */
declare interface Candidate {
  /** 人员ID。 */
  PersonId: string;
  /** 人体动作轨迹ID。 */
  TraceId: string;
  /** 候选者的匹配得分。 十万人体库下，误识率百分之五对应的分数为70分；误识率百分之二对应的分数为80分；误识率百分之一对应的分数为90分。 二十万人体库下，误识率百分之五对应的分数为80分；误识率百分之二对应的分数为90分；误识率百分之一对应的分数为95分。 通常情况建议使用分数80分（保召回）。若希望获得较高精度，建议使用分数90分（保准确）。 */
  Score: number;
}

/** 人体性别信息。 AttributesType 不含 Gender 或检测超过 5 个人体时，此参数仍返回，但不具备参考意义。 */
declare interface Gender {
  /** 性别信息，返回值为以下集合中的一个 {男性, 女性} */
  Type: string;
  /** Type识别概率值，[0.0,1.0],代表判断正确的概率。如0.8则代表有Type值有80%概率正确。 */
  Probability: number;
}

/** 返回的人员库信息。 */
declare interface GroupInfo {
  /** 人体库名称。 */
  GroupName: string;
  /** 人体库ID。 */
  GroupId: string;
  /** 人体库信息备注。 */
  Tag: string;
  /** 人体识别所用的算法模型版本。 */
  BodyModelVersion: string;
  /** Group的创建时间和日期 CreationTimestamp。CreationTimestamp 的值是自 Unix 纪元时间到Group创建时间的毫秒数。 Unix 纪元时间是 1970 年 1 月 1 日星期四，协调世界时 (UTC) 。 */
  CreationTimestamp: number;
}

/** 图像坐标信息。 */
declare interface ImageRect {
  /** 左上角横坐标。 */
  X: number;
  /** 左上角纵坐标。 */
  Y: number;
  /** 人体宽度。 */
  Width: number;
  /** 人体高度。 */
  Height: number;
  /** 分割选项名称。 */
  Label: string;
}

/** 人体关键点信息 */
declare interface KeyPointInfo {
  /** 代表不同位置的人体关键点信息，返回值为以下集合中的一个 [头部,颈部,右肩,右肘,右腕,左肩,左肘,左腕,右髋,右膝,右踝,左髋,左膝,左踝] */
  KeyPointType: string;
  /** 人体关键点横坐标 */
  X: number;
  /** 人体关键点纵坐标 */
  Y: number;
  /** 关键点坐标置信度，分数取值在0-1之间，阈值建议为0.25，小于0.25认为在图中无人体关键点。 */
  BodyScore: number;
}

/** 下衣属性信息 */
declare interface LowerBodyCloth {
  /** 下衣颜色信息。 */
  Color: LowerBodyClothColor;
  /** 下衣长度信息 。 */
  Length: LowerBodyClothLength;
  /** 下衣类型信息。 */
  Type: LowerBodyClothType;
}

/** 下衣颜色信息 */
declare interface LowerBodyClothColor {
  /** 下衣颜色信息，返回值为以下集合中的一个{ 黑色系, 灰白色系, 彩色} 。 */
  Type: string;
  /** Type识别概率值，[0.0,1.0],代表判断正确的概率。如0.8则代表有Type值有80%概率正确。 */
  Probability: number;
}

/** 下衣长度信息 */
declare interface LowerBodyClothLength {
  /** 下衣长度信息，返回值为以下集合中的一个，{长, 短} 。 */
  Type: string;
  /** Type识别概率值，[0.0,1.0],代表判断正确的概率。如0.8则代表有Type值有80%概率正确。 */
  Probability: number;
}

/** 下衣类型信息 */
declare interface LowerBodyClothType {
  /** 下衣类型，返回值为以下集合中的一个 {裤子,裙子} 。 */
  Type: string;
  /** Type识别概率值，[0.0,1.0],代表判断正确的概率。如0.8则代表有Type值有80%概率正确。 */
  Probability: number;
}

/** 人体朝向信息。 AttributesType 不含 Orientation 或检测超过 5 个人体时，此参数仍返回，但不具备参考意义。 */
declare interface Orientation {
  /** 人体朝向信息，返回值为以下集合中的一个 {正向, 背向, 左, 右}。 */
  Type: string;
  /** Type识别概率值，[0.0,1.0],代表判断正确的概率。如0.8则代表有Type值有80%概率正确。 */
  Probability: number;
}

/** 人员信息。 */
declare interface PersonInfo {
  /** 人员名称。 */
  PersonName: string;
  /** 人员ID。 */
  PersonId: string;
  /** 包含的人体动作轨迹图片信息列表。 */
  TraceInfos: TraceInfo[];
}

/** 此参数为分割选项，请根据需要选择自己所想从图片中分割的部分。注意所有选项均为非必选，如未选择则值默认为false, 但是必须要保证多于一个选项的描述为true。 */
declare interface SegmentationOptions {
  /** 分割选项-背景 */
  Background?: boolean;
  /** 分割选项-头发 */
  Hair?: boolean;
  /** 分割选项-左眉 */
  LeftEyebrow?: boolean;
  /** 分割选项-右眉 */
  RightEyebrow?: boolean;
  /** 分割选项-左眼 */
  LeftEye?: boolean;
  /** 分割选项-右眼 */
  RightEye?: boolean;
  /** 分割选项-鼻子 */
  Nose?: boolean;
  /** 分割选项-上唇 */
  UpperLip?: boolean;
  /** 分割选项-下唇 */
  LowerLip?: boolean;
  /** 分割选项-牙齿 */
  Tooth?: boolean;
  /** 分割选项-口腔（不包含牙齿） */
  Mouth?: boolean;
  /** 分割选项-左耳 */
  LeftEar?: boolean;
  /** 分割选项-右耳 */
  RightEar?: boolean;
  /** 分割选项-面部(不包含眼、耳、口、鼻等五官及头发。) */
  Face?: boolean;
  /** 复合分割选项-头部(包含所有的头部元素，相关装饰除外) */
  Head?: boolean;
  /** 分割选项-身体（包含脖子） */
  Body?: boolean;
  /** 分割选项-帽子 */
  Hat?: boolean;
  /** 分割选项-头饰 */
  Headdress?: boolean;
  /** 分割选项-耳环 */
  Earrings?: boolean;
  /** 分割选项-项链 */
  Necklace?: boolean;
  /** 分割选项-随身物品（ 例如伞、包、手机等。 ） */
  Belongings?: boolean;
}

/** 人体动作轨迹信息 */
declare interface Trace {
  /** 人体动作轨迹图片 Base64 数组。 数组长度最小为1最大为5。 单个图片 base64 编码后大小不可超过2M。 支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。 */
  Images?: string[];
  /** 人体动作轨迹图片 Url 数组。 数组长度最小为1最大为5。 单个图片 base64 编码后大小不可超过2M。 Urls、Images必须提供一个，如果都提供，只使用 Urls。 图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。 非腾讯云存储的Url速度和稳定性可能受一定影响。 支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。 */
  Urls?: string[];
  /** 若输入的Images 和 Urls 是已经裁剪后的人体小图，则可以忽略本参数。 若否，或图片中包含多个人体，则需要通过本参数来指定图片中的人体框。 顺序对应 Images 或 Urls 中的顺序。 当不输入本参数时，我们将认为输入图片已是经过裁剪后的人体小图，不会进行人体检测而直接进行特征提取处理。 */
  BodyRects?: BodyRect[];
}

/** 人体动作轨迹信息。 */
declare interface TraceInfo {
  /** 人体动作轨迹ID。 */
  TraceId: string;
  /** 包含的人体动作轨迹图片Id列表。 */
  BodyIds: string[];
}

/** 上衣属性信息 */
declare interface UpperBodyCloth {
  /** 上衣纹理信息。 */
  Texture: UpperBodyClothTexture;
  /** 上衣颜色信息。 */
  Color: UpperBodyClothColor;
  /** 上衣衣袖信息。 */
  Sleeve: UpperBodyClothSleeve;
}

/** 上衣颜色信息。 */
declare interface UpperBodyClothColor {
  /** 上衣颜色信息，返回值为以下集合中的一个 {红色系, 黄色系, 绿色系, 蓝色系, 黑色系, 灰白色系。 */
  Type: string;
  /** Type识别概率值，[0.0,1.0],代表判断正确的概率。如0.8则代表有Type值有80%概率正确。 */
  Probability: number;
}

/** 上衣衣袖信息。 */
declare interface UpperBodyClothSleeve {
  /** 上衣衣袖信息, 返回值为以下集合中的一个 {长袖, 短袖}。 */
  Type: string;
  /** Type识别概率值，[0.0,1.0],代表判断正确的概率。如0.8则代表有Type值有80%概率正确。 */
  Probability: number;
}

/** 上衣纹理信息。 */
declare interface UpperBodyClothTexture {
  /** 上衣纹理信息，返回值为以下集合中的一个, {纯色, 格子, 大色块}。 */
  Type: string;
  /** Type识别概率值，[0.0,1.0], 代表判断正确的概率。如0.8则代表有Type值有80%概率正确。 */
  Probability: number;
}

/** 视频基础信息 */
declare interface VideoBasicInformation {
  /** 视频宽度 */
  FrameWidth: number;
  /** 视频高度 */
  FrameHeight: number;
  /** 视频帧速率(FPS) */
  FramesPerSecond: number;
  /** 视频时长 */
  Duration: number;
  /** 视频帧数 */
  TotalFrames: number;
}

declare interface CreateGroupRequest {
  /** 人体库名称，[1,60]个字符，可修改，不可重复。 */
  GroupName: string;
  /** 人体库 ID，不可修改，不可重复。支持英文、数字、-%@#&_，长度限制64B。 */
  GroupId: string;
  /** 人体库信息备注，[0，40]个字符。 */
  Tag?: string;
  /** 人体识别所用的算法模型版本。 目前入参仅支持 “1.0”1个输入。 默认为"1.0"。 不同算法模型版本对应的人体识别算法不同，新版本的整体效果会优于旧版本，后续我们将推出更新版本。 */
  BodyModelVersion?: string;
}

declare interface CreateGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreatePersonRequest {
  /** 待加入的人员库ID。 */
  GroupId: string;
  /** 人员名称。[1，60]个字符，可修改，可重复。 */
  PersonName: string;
  /** 人员ID，单个腾讯云账号下不可修改，不可重复。 支持英文、数字、-%@#&_，，长度限制64B。 */
  PersonId: string;
  /** 人体动作轨迹信息。 */
  Trace: Trace;
}

declare interface CreatePersonResponse {
  /** 人员动作轨迹唯一标识。 */
  TraceId: string;
  /** 人体识别所用的算法模型版本。 */
  BodyModelVersion: string;
  /** 输入的人体动作轨迹图片中的合法性校验结果。只有为0时结果才有意义。-1001: 输入图片不合法。-1002: 输入图片不能构成动作轨迹。 */
  InputRetCode: number;
  /** 输入的人体动作轨迹图片中的合法性校验结果详情。 -1101:图片无效，-1102:url不合法。-1103:图片过大。-1104:图片下载失败。-1105:图片解码失败。-1109:图片分辨率过高。-2023:动作轨迹中有非同人图片。-2024: 动作轨迹提取失败。-2025: 人体检测失败。RetCode 的顺序和入参中Images 或 Urls 的顺序一致。 */
  InputRetCodeDetails: number[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateSegmentationTaskRequest {
  /** 需要分割的视频URL，可外网访问。 */
  VideoUrl: string;
  /** 背景图片URL。 可以将视频背景替换为输入的图片。 如果不输入背景图片，则输出人像区域mask。 */
  BackgroundImageUrl?: string;
  /** 预留字段，后期用于展示更多识别信息。 */
  Config?: string;
}

declare interface CreateSegmentationTaskResponse {
  /** 任务标识ID,可以用与追溯任务状态，查看任务结果 */
  TaskID: string;
  /** 预估处理时间，单位为秒 */
  EstimatedProcessingTime: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateTraceRequest {
  /** 人员ID。 */
  PersonId: string;
  /** 人体动作轨迹信息。 */
  Trace: Trace;
}

declare interface CreateTraceResponse {
  /** 人员动作轨迹唯一标识。 */
  TraceId: string;
  /** 人体识别所用的算法模型版本。 */
  BodyModelVersion: string;
  /** 输入的人体动作轨迹图片中的合法性校验结果。只有为0时结果才有意义。-1001: 输入图片不合法。-1002: 输入图片不能构成轨迹。 */
  InputRetCode: number;
  /** 输入的人体动作轨迹图片中的合法性校验结果详情。 -1101:图片无效，-1102:url不合法。-1103:图片过大。-1104:图片下载失败。-1105:图片解码失败。-1109:图片分辨率过高。-2023:动作轨迹中有非同人图片。-2024: 动作轨迹提取失败。-2025: 人体检测失败。 */
  InputRetCodeDetails: number[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteGroupRequest {
  /** 人体库ID。 */
  GroupId: string;
}

declare interface DeleteGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeletePersonRequest {
  /** 人员ID。 */
  PersonId: string;
}

declare interface DeletePersonResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSegmentationTaskRequest {
  /** 在提交分割任务成功时返回的任务标识ID。 */
  TaskID: string;
}

declare interface DescribeSegmentationTaskResponse {
  /** 当前任务状态：QUEUING 排队中PROCESSING 处理中FINISHED 处理完成 */
  TaskStatus?: string;
  /** 分割后视频URL, 存储于腾讯云COS */
  ResultVideoUrl?: string | null;
  /** 分割后视频MD5，用于校验 */
  ResultVideoMD5?: string | null;
  /** 视频基本信息 */
  VideoBasicInformation?: VideoBasicInformation | null;
  /** 分割任务错误信息 */
  ErrorMsg?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DetectBodyJointsRequest {
  /** 图片 base64 数据，base64 编码后大小不可超过5M。 支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。 */
  Image?: string;
  /** 图片的 Url 。对应图片 base64 编码后大小不可超过5M。 Url、Image必须提供一个，如果都提供，只使用 Url。 图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。 非腾讯云存储的Url速度和稳定性可能受一定影响。 支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。 */
  Url?: string;
  /** 人体局部关键点识别，开启后对人体局部图（例如部分身体部位）进行关键点识别，输出人体关键点坐标，默认不开启注意：若开启人体局部图片关键点识别，则BoundBox、Confidence返回为空。 */
  LocalBodySwitch?: boolean;
}

declare interface DetectBodyJointsResponse {
  /** 图中检测出的人体框和人体关键点， 包含14个人体关键点的坐标，建议根据人体框置信度筛选出合格的人体； */
  BodyJointsResults: BodyJointsResult[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DetectBodyRequest {
  /** 人体图片 Base64 数据。图片 base64 编码后大小不可超过5M。图片分辨率不得超过 1920 * 1080 。支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。 */
  Image?: string;
  /** 最多检测的人体数目，默认值为1（仅检测图片中面积最大的那个人体）； 最大值10 ，检测图片中面积最大的10个人体。 */
  MaxBodyNum?: number;
  /** 人体图片 Url 。Url、Image必须提供一个，如果都提供，只使用 Url。图片 base64 编码后大小不可超过5M。 图片分辨率不得超过 1920 * 1080 。图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。 非腾讯云存储的Url速度和稳定性可能受一定影响。 支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。 */
  Url?: string;
  /** 是否返回年龄、性别、朝向等属性。 可选项有 Age、Bag、Gender、UpperBodyCloth、LowerBodyCloth、Orientation。 如果此参数为空则为不需要返回。 需要将属性组成一个用逗号分隔的字符串，属性之间的顺序没有要求。 关于各属性的详细描述，参见下文出参。 最多返回面积最大的 5 个人体属性信息，超过 5 个人体（第 6 个及以后的人体）的 BodyAttributesInfo 不具备参考意义。 */
  AttributesOptions?: AttributesOptions;
}

declare interface DetectBodyResponse {
  /** 图中检测出来的人体框。 */
  BodyDetectResults: BodyDetectResult[];
  /** 人体识别所用的算法模型版本。 */
  BodyModelVersion: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetGroupListRequest {
  /** 起始序号，默认值为0。 */
  Offset?: number;
  /** 返回数量，默认值为10，最大值为1000。 */
  Limit?: number;
}

declare interface GetGroupListResponse {
  /** 返回的人体库信息。 */
  GroupInfos: GroupInfo[];
  /** 人体库总数量。 */
  GroupNum: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetPersonListRequest {
  /** 人体库ID。 */
  GroupId: string;
  /** 起始序号，默认值为0。 */
  Offset?: number;
  /** 返回数量，默认值为10，最大值为1000。 */
  Limit?: number;
}

declare interface GetPersonListResponse {
  /** 返回的人员信息。 */
  PersonInfos?: PersonInfo[];
  /** 该人体库的人员数量。 */
  PersonNum?: number;
  /** 人体识别所用的算法模型版本。 */
  BodyModelVersion?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetSummaryInfoRequest {
}

declare interface GetSummaryInfoResponse {
  /** 人体库总数量。 */
  GroupCount: number;
  /** 人员总数量 */
  PersonCount: number;
  /** 人员轨迹总数量 */
  TraceCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyGroupRequest {
  /** 人体库ID。 */
  GroupId: string;
  /** 人体库名称。 */
  GroupName?: string;
  /** 人体库信息备注。 */
  Tag?: string;
}

declare interface ModifyGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyPersonInfoRequest {
  /** 人员ID。 */
  PersonId: string;
  /** 人员名称。 */
  PersonName?: string;
}

declare interface ModifyPersonInfoResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SearchTraceRequest {
  /** 希望搜索的人体库ID。 */
  GroupId: string;
  /** 人体动作轨迹信息。 */
  Trace: Trace;
  /** 单张被识别的人体动作轨迹返回的最相似人员数量。默认值为5，最大值为100。 例，设MaxPersonNum为8，则返回Top8相似的人员信息。 值越大，需要处理的时间越长。建议不要超过10。 */
  MaxPersonNum?: number;
  /** 出参Score中，只有超过TraceMatchThreshold值的结果才会返回。默认为0。范围[0, 100.0]。 */
  TraceMatchThreshold?: number;
}

declare interface SearchTraceResponse {
  /** 识别出的最相似候选人。 */
  Candidates: Candidate[];
  /** 输入的人体动作轨迹图片中的合法性校验结果。只有为0时结果才有意义。-1001: 输入图片不合法。-1002: 输入图片不能构成动作轨迹。 */
  InputRetCode: number;
  /** 输入的人体动作轨迹图片中的合法性校验结果详情。 -1101:图片无效，-1102:url不合法。-1103:图片过大。-1104:图片下载失败。-1105:图片解码失败。-1109:图片分辨率过高。-2023:动作轨迹中有非同人图片。-2024: 动作轨迹提取失败。-2025: 人体检测失败。 */
  InputRetCodeDetails: number[];
  /** 人体识别所用的算法模型版本。 */
  BodyModelVersion: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SegmentCustomizedPortraitPicRequest {
  /** 此参数为分割选项，请根据需要选择自己所想从图片中分割的部分。注意所有选项均为非必选，如未选择则值默认为false, 但是必须要保证多于一个选项的描述为true。 */
  SegmentationOptions: SegmentationOptions;
  /** 图片 base64 数据，base64 编码后大小不可超过5M。图片分辨率须小于2000*2000。 支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。 */
  Image?: string;
  /** 图片的 Url 。Url、Image必须提供一个，如果都提供，只使用 Url。图片分辨率须小于2000*2000 ，图片 base64 编码后大小不可超过5M。 图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。 非腾讯云存储的Url速度和稳定性可能受一定影响。 支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。 */
  Url?: string;
}

declare interface SegmentCustomizedPortraitPicResponse {
  /** 根据指定标签分割输出的透明背景人像图片的 base64 数据。 */
  PortraitImage?: string;
  /** 指定标签处理后的Mask。一个通过 Base64 编码的文件，解码后文件由 Float 型浮点数组成。这些浮点数代表原图从左上角开始的每一行的每一个像素点，每一个浮点数的值是原图相应像素点位于人体轮廓内的置信度（0-1）转化的灰度值（0-255） */
  MaskImage?: string;
  /** 坐标信息。 */
  ImageRects?: ImageRect[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SegmentPortraitPicRequest {
  /** 图片 base64 数据，base64 编码后大小不可超过5M。图片分辨率须小于2000*2000。 支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。 */
  Image?: string;
  /** 图片的 Url 。Url、Image必须提供一个，如果都提供，只使用 Url。图片分辨率须小于2000*2000 ，图片 base64 编码后大小不可超过5M。 图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。 非腾讯云存储的Url速度和稳定性可能受一定影响。 支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。 */
  Url?: string;
  /** 返回图像方式（base64 或 Url ) ，二选一。url有效期为30分钟。 */
  RspImgType?: string;
  /** 适用场景类型。取值：GEN/GS。GEN为通用场景模式；GS为绿幕场景模式，针对绿幕场景下的人像分割效果更好。两种模式选择一种传入，默认为GEN。 */
  Scene?: string;
}

declare interface SegmentPortraitPicResponse {
  /** 处理后的图片 base64 数据，透明背景图。 */
  ResultImage: string | null;
  /** 一个通过 base64 编码的文件，解码后文件由 Float 型浮点数组成。这些浮点数代表原图从左上角开始的每一行的每一个像素点，每一个浮点数的值是原图相应像素点位于人体轮廓内的置信度（0-1）转化的灰度值（0-255）。 */
  ResultMask: string | null;
  /** 图片是否存在前景。 */
  HasForeground: boolean | null;
  /** 支持将处理过的图片 base64 数据，透明背景图以Url的形式返回值，Url有效期为30分钟。 */
  ResultImageUrl: string | null;
  /** 一个通过 base64 编码的文件，解码后文件由 Float 型浮点数组成。支持以Url形式的返回值；Url有效期为30分钟。 */
  ResultMaskUrl: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface TerminateSegmentationTaskRequest {
  /** 在提交分割任务成功时返回的任务标识ID。 */
  TaskID: string;
}

declare interface TerminateSegmentationTaskResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Bda 人体分析} */
declare interface Bda {
  (): Versions;
  /** 创建人体库 {@link CreateGroupRequest} {@link CreateGroupResponse} */
  CreateGroup(data: CreateGroupRequest, config?: AxiosRequestConfig): AxiosPromise<CreateGroupResponse>;
  /** 创建人员 {@link CreatePersonRequest} {@link CreatePersonResponse} */
  CreatePerson(data: CreatePersonRequest, config?: AxiosRequestConfig): AxiosPromise<CreatePersonResponse>;
  /** 创建视频人像分割处理任务 {@link CreateSegmentationTaskRequest} {@link CreateSegmentationTaskResponse} */
  CreateSegmentationTask(data: CreateSegmentationTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSegmentationTaskResponse>;
  /** 增加人员动作轨迹 {@link CreateTraceRequest} {@link CreateTraceResponse} */
  CreateTrace(data: CreateTraceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTraceResponse>;
  /** 删除人体库 {@link DeleteGroupRequest} {@link DeleteGroupResponse} */
  DeleteGroup(data: DeleteGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteGroupResponse>;
  /** 删除人员 {@link DeletePersonRequest} {@link DeletePersonResponse} */
  DeletePerson(data: DeletePersonRequest, config?: AxiosRequestConfig): AxiosPromise<DeletePersonResponse>;
  /** 查看视频人像分割处理任务信息 {@link DescribeSegmentationTaskRequest} {@link DescribeSegmentationTaskResponse} */
  DescribeSegmentationTask(data: DescribeSegmentationTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSegmentationTaskResponse>;
  /** 人体检测与属性分析 {@link DetectBodyRequest} {@link DetectBodyResponse} */
  DetectBody(data?: DetectBodyRequest, config?: AxiosRequestConfig): AxiosPromise<DetectBodyResponse>;
  /** 人体关键点分析 {@link DetectBodyJointsRequest} {@link DetectBodyJointsResponse} */
  DetectBodyJoints(data?: DetectBodyJointsRequest, config?: AxiosRequestConfig): AxiosPromise<DetectBodyJointsResponse>;
  /** 获取人体库列表 {@link GetGroupListRequest} {@link GetGroupListResponse} */
  GetGroupList(data?: GetGroupListRequest, config?: AxiosRequestConfig): AxiosPromise<GetGroupListResponse>;
  /** 获取人员列表 {@link GetPersonListRequest} {@link GetPersonListResponse} */
  GetPersonList(data: GetPersonListRequest, config?: AxiosRequestConfig): AxiosPromise<GetPersonListResponse>;
  /** 获取人体库汇总信息 {@link GetSummaryInfoRequest} {@link GetSummaryInfoResponse} */
  GetSummaryInfo(data?: GetSummaryInfoRequest, config?: AxiosRequestConfig): AxiosPromise<GetSummaryInfoResponse>;
  /** 修改人体库 {@link ModifyGroupRequest} {@link ModifyGroupResponse} */
  ModifyGroup(data: ModifyGroupRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyGroupResponse>;
  /** 修改人员信息 {@link ModifyPersonInfoRequest} {@link ModifyPersonInfoResponse} */
  ModifyPersonInfo(data: ModifyPersonInfoRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyPersonInfoResponse>;
  /** 人体搜索 {@link SearchTraceRequest} {@link SearchTraceResponse} */
  SearchTrace(data: SearchTraceRequest, config?: AxiosRequestConfig): AxiosPromise<SearchTraceResponse>;
  /** 自定义人像分割 {@link SegmentCustomizedPortraitPicRequest} {@link SegmentCustomizedPortraitPicResponse} */
  SegmentCustomizedPortraitPic(data: SegmentCustomizedPortraitPicRequest, config?: AxiosRequestConfig): AxiosPromise<SegmentCustomizedPortraitPicResponse>;
  /** 人像分割 {@link SegmentPortraitPicRequest} {@link SegmentPortraitPicResponse} */
  SegmentPortraitPic(data?: SegmentPortraitPicRequest, config?: AxiosRequestConfig): AxiosPromise<SegmentPortraitPicResponse>;
  /** 终止视频人像分割处理任务 {@link TerminateSegmentationTaskRequest} {@link TerminateSegmentationTaskResponse} */
  TerminateSegmentationTask(data: TerminateSegmentationTaskRequest, config?: AxiosRequestConfig): AxiosPromise<TerminateSegmentationTaskResponse>;
}

export declare type Versions = ["2020-03-24"];

export default Bda;
