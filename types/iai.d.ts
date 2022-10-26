/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 人脸属性信息 */
declare interface AttributeItem {
  /** 属性值 */
  Type: number;
  /** Type识别概率值，【0,1】,代表判断正确的概率。 */
  Probability: number;
}

/** 识别出的最相似候选人 */
declare interface Candidate {
  /** 人员ID */
  PersonId: string;
  /** 人脸ID，仅在SearchFaces/SearchFacesReturnsByGroup接口返回时有效。人员搜索类接口采用融合特征方式检索，该字段无意义 */
  FaceId: string;
  /** 候选者的匹配得分。 1万大小人脸底库下，误识率百分之一对应分数为70分，误识率千分之一对应分数为80分，误识率万分之一对应分数为90分；10万大小人脸底库下，误识率百分之一对应分数为80分，误识率千分之一对应分数为90分，误识率万分之一对应分数为100分；30万大小人脸底库下，误识率百分之一对应分数为85分，误识率千分之一对应分数为95分。一般80分左右可适用大部分场景，建议分数不要超过90分。您可以根据实际情况选择合适的分数。 */
  Score: number;
  /** 人员名称 */
  PersonName: string | null;
  /** 人员性别 */
  Gender: number | null;
  /** 包含此人员的人员库及描述字段内容列表 */
  PersonGroupInfos: PersonGroupInfo[] | null;
}

/** 稠密关键点详细信息 */
declare interface DenseFaceShape {
  /** 人脸框左上角横坐标。 */
  X: number;
  /** 人脸框左上角纵坐标。 */
  Y: number;
  /** 人脸框宽度。 */
  Width: number;
  /** 人脸框高度。 */
  Height: number;
  /** 描述左侧眼睛轮廓的 XX 点。 */
  LeftEye: Point[];
  /** 描述右侧眼睛轮廓的 XX 点。 */
  RightEye: Point[];
  /** 描述左侧眉毛轮廓的 XX 点。 */
  LeftEyeBrow: Point[];
  /** 描述右侧眉毛轮廓的 XX 点。 */
  RightEyeBrow: Point[];
  /** 描述外嘴巴轮廓的 XX 点， 从左侧开始逆时针返回。 */
  MouthOutside: Point[];
  /** 描述内嘴巴轮廓的 XX 点，从左侧开始逆时针返回。 */
  MouthInside: Point[];
  /** 描述鼻子轮廓的 XX 点。 */
  Nose: Point[];
  /** 左瞳孔轮廓的 XX 个点。 */
  LeftPupil: Point[];
  /** 右瞳孔轮廓的 XX 个点。 */
  RightPupil: Point[];
  /** 中轴线轮廓的 XX 个点。 */
  CentralAxis: Point[];
  /** 下巴轮廓的 XX 个点。 */
  Chin: Point[];
  /** 左眼袋的 XX 个点。 */
  LeftEyeBags: Point[];
  /** 右眼袋的 XX 个点。 */
  RightEyeBags: Point[];
  /** 额头的 XX 个点。 */
  Forehead: Point[];
}

/** 眼睛信息 */
declare interface Eye {
  /** 识别是否佩戴眼镜。AttributeItem对应的Type为 —— 0：无眼镜，1：普通眼镜，2：墨镜 */
  Glass: AttributeItem;
  /** 识别眼睛的睁开、闭合状态。AttributeItem对应的Type为 —— 0：睁开，1：闭眼 */
  EyeOpen: AttributeItem;
  /** 识别是否双眼皮。AttributeItem对应的Type为 —— 0：无，1：有。 */
  EyelidType: AttributeItem;
  /** 眼睛大小。AttributeItem对应的Type为 —— 0：小眼睛，1：普通眼睛，2：大眼睛。 */
  EyeSize: AttributeItem;
}

/** 眉毛信息 */
declare interface Eyebrow {
  /** 眉毛浓密。AttributeItem对应的Type为 —— 0：淡眉，1：浓眉。 */
  EyebrowDensity: AttributeItem;
  /** 眉毛弯曲。AttributeItem对应的Type为 —— 0：不弯，1：弯眉。 */
  EyebrowCurve: AttributeItem;
  /** 眉毛长短。AttributeItem对应的Type为 —— 0：短眉毛，1：长眉毛。 */
  EyebrowLength: AttributeItem;
}

/** 人脸属性信息，包含性别( gender )、年龄( age )、表情( expression )、 魅力( beauty )、眼镜( glass )、口罩（mask）、头发（hair）和姿态 (pitch，roll，yaw )。只有当 NeedFaceAttributes 设为 1 时才返回有效信息，最多返回面积最大的 5 张人脸属性信息，超过 5 张人脸（第 6 张及以后的人脸）的 FaceAttributesInfo 不具备参考意义。 */
declare interface FaceAttributesInfo {
  /** 性别[0~49]为女性，[50，100]为男性，越接近0和100表示置信度越高。NeedFaceAttributes 不为 1 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。 */
  Gender: number;
  /** 年龄 [0~100]。NeedFaceAttributes 不为1 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。 */
  Age: number;
  /** 微笑[0(normal，正常)~50(smile，微笑)~100(laugh，大笑)]。NeedFaceAttributes 不为1 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。 */
  Expression: number;
  /** 是否有眼镜 [true,false]。NeedFaceAttributes 不为1 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。 */
  Glass: boolean;
  /** 上下偏移[-30,30]，单位角度。NeedFaceAttributes 不为1 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。 建议：人脸入库选择[-10,10]的图片。 */
  Pitch: number;
  /** 左右偏移[-30,30]，单位角度。 NeedFaceAttributes 不为1 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。 建议：人脸入库选择[-10,10]的图片。 */
  Yaw: number;
  /** 平面旋转[-180,180]，单位角度。 NeedFaceAttributes 不为1 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。 建议：人脸入库选择[-20,20]的图片。 */
  Roll: number;
  /** 魅力[0~100]。NeedFaceAttributes 不为1 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。 */
  Beauty: number;
  /** 是否有帽子 [true,false]。NeedFaceAttributes 不为1 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。 */
  Hat: boolean | null;
  /** 是否有口罩 [true,false]。NeedFaceAttributes 不为1 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。 */
  Mask: boolean | null;
  /** 头发信息，包含头发长度（length）、有无刘海（bang）、头发颜色（color）。NeedFaceAttributes 不为1 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。 */
  Hair: FaceHairAttributesInfo | null;
  /** 双眼是否睁开 [true,false]。只要有超过一只眼睛闭眼，就返回false。 NeedFaceAttributes 不为1 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。 */
  EyeOpen: boolean | null;
}

/** 人脸属性信息，根据 FaceAttributesType 输入的类型，返回年龄（Age）、颜值（Beauty） 情绪（Emotion）、眼睛信息（Eye）、眉毛（Eyebrow）、性别（Gender） 头发（Hair）、帽子（Hat）、姿态（Headpose）、口罩（Mask）、嘴巴（Mouth）、胡子（Moustache） 鼻子（Nose）、脸型（Shape）、肤色（Skin）、微笑（Smile）等人脸属性信息。 若 FaceAttributesType 没有输入相关类型，则FaceDetaiAttributesInfo返回的细项不具备参考意义。 */
declare interface FaceDetailAttributesInfo {
  /** 年龄 [0,65]，其中65代表“65岁及以上”。 FaceAttributesType 不为含Age 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。 */
  Age: number;
  /** 美丑打分[0,100]。 FaceAttributesType 不含 Beauty 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。 */
  Beauty: number;
  /** 情绪，可识别自然、高兴、惊讶、生气、悲伤、厌恶、害怕。 AttributeItem对应的Type为 —— 0：自然，1：高兴，2：惊讶，3：生气，4：悲伤，5：厌恶，6：害怕FaceAttributesType 不含Emotion 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。 */
  Emotion: AttributeItem;
  /** 眼睛相关信息，可识别是否戴眼镜、是否闭眼、是否双眼皮和眼睛大小。 FaceAttributesType 不含Eye 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。 */
  Eye: Eye;
  /** 眉毛相关信息，可识别眉毛浓密、弯曲、长短信息。 FaceAttributesType 不含Eyebrow 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。 */
  Eyebrow: Eyebrow;
  /** 性别信息。 AttributeItem对应的Type为 —— 0：男性，1：女性。FaceAttributesType 不含Gender 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。 */
  Gender: AttributeItem;
  /** 头发信息，包含头发长度、有无刘海、头发颜色。 FaceAttributesType 不含Hair 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。 */
  Hair: Hair;
  /** 帽子信息，可识别是否佩戴帽子、帽子款式、帽子颜色。 FaceAttributesType 不含Hat 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。 */
  Hat: Hat;
  /** 姿态信息，包含人脸的上下偏移、左右偏移、平面旋转信息。 FaceAttributesType 不含Headpose 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。 */
  HeadPose: HeadPose;
  /** 口罩佩戴信息。 AttributeItem对应的Type为 —— 0: 无口罩， 1: 有口罩不遮脸，2: 有口罩遮下巴，3: 有口罩遮嘴，4: 正确佩戴口罩。FaceAttributesType 不含Mask 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。 */
  Mask: AttributeItem;
  /** 嘴巴信息，可识别是否张嘴、嘴唇厚度。 FaceAttributesType 不含 Mouth 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。 */
  Mouth: Mouth;
  /** 胡子信息。AttributeItem对应的Type为 —— 0：无胡子，1：有胡子。 FaceAttributesType 不含 Moustache 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。 */
  Moustache: AttributeItem;
  /** 鼻子信息。 AttributeItem对应的Type为 —— 0：朝天鼻，1：鹰钩鼻，2：普通，3：圆鼻头FaceAttributesType 不含 Nose 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。 */
  Nose: AttributeItem;
  /** 脸型信息。 AttributeItem对应的Type为 —— 0：方脸，1：三角脸，2：鹅蛋脸，3：心形脸，4：圆脸。FaceAttributesType 不含 Shape 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。 */
  Shape: AttributeItem;
  /** 肤色信息。 AttributeItem对应的Type为 —— 0：黄色皮肤，1：棕色皮肤，2：黑色皮肤，3：白色皮肤。FaceAttributesType 不含 Skin 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。 */
  Skin: AttributeItem;
  /** 微笑程度，[0,100]。 FaceAttributesType 不含 Smile 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。 */
  Smile: number;
}

/** 人脸信息列表。 */
declare interface FaceDetailInfo {
  /** 检测出的人脸框位置。 */
  FaceRect: FaceRect;
  /** 人脸属性信息，根据 FaceAttributesType 输入的类型，返回年龄（Age）、颜值（Beauty） 情绪（Emotion）、眼睛信息（Eye）、眉毛（Eyebrow）、性别（Gender） 头发（Hair）、帽子（Hat）、姿态（Headpose）、口罩（Mask）、嘴巴（Mouse）、胡子（Moustache） 鼻子（Nose）、脸型（Shape）、肤色（Skin）、微笑（Smile）等人脸属性信息。 若 FaceAttributesType 没有输入相关类型，则FaceDetaiAttributesInfo返回的细项不具备参考意义。 */
  FaceDetailAttributesInfo: FaceDetailAttributesInfo;
}

/** 人脸属性中的发型信息。 */
declare interface FaceHairAttributesInfo {
  /** 0：光头，1：短发，2：中发，3：长发，4：绑发 */
  Length: number | null;
  /** 0：有刘海，1：无刘海 */
  Bang: number | null;
  /** 0：黑色，1：金色，2：棕色，3：灰白色 */
  Color: number | null;
}

/** 人脸信息列表。 */
declare interface FaceInfo {
  /** 人脸框左上角横坐标。人脸框包含人脸五官位置并在此基础上进行一定的扩展，若人脸框超出图片范围，会导致坐标负值。 若需截取完整人脸，可以在完整分completeness满足需求的情况下，将负值坐标取0。 */
  X: number;
  /** 人脸框左上角纵坐标。 人脸框包含人脸五官位置并在此基础上进行一定的扩展，若人脸框超出图片范围，会导致坐标负值。 若需截取完整人脸，可以在完整分completeness满足需求的情况下，将负值坐标取0。 */
  Y: number;
  /** 人脸框宽度。 */
  Width: number;
  /** 人脸框高度。 */
  Height: number;
  /** 人脸属性信息，包含性别( gender )、年龄( age )、表情( expression )、 魅力( beauty )、眼镜( glass )、口罩（mask）、头发（hair）和姿态 (pitch，roll，yaw )。只有当 NeedFaceAttributes 设为 1 时才返回有效信息。 */
  FaceAttributesInfo: FaceAttributesInfo;
  /** 人脸质量信息，包含质量分（score）、模糊分（sharpness）、光照分（brightness）、遮挡分（completeness）。只有当NeedFaceDetection设为1时才返回有效信息。 */
  FaceQualityInfo: FaceQualityInfo | null;
}

/** 五官遮挡分，评价眉毛（Eyebrow）、眼睛（Eye）、鼻子（Nose）、脸颊（Cheek）、嘴巴（Mouth）、下巴（Chin）的被遮挡程度。 */
declare interface FaceQualityCompleteness {
  /** 眉毛的遮挡分数[0,100]，分数越高遮挡越少。 参考范围：[0,80]表示发生遮挡。 */
  Eyebrow: number | null;
  /** 眼睛的遮挡分数[0,100],分数越高遮挡越少。 参考范围：[0,80]表示发生遮挡。 */
  Eye: number | null;
  /** 鼻子的遮挡分数[0,100],分数越高遮挡越少。 参考范围：[0,60]表示发生遮挡。 */
  Nose: number | null;
  /** 脸颊的遮挡分数[0,100],分数越高遮挡越少。 参考范围：[0,70]表示发生遮挡。 */
  Cheek: number | null;
  /** 嘴巴的遮挡分数[0,100],分数越高遮挡越少。 参考范围：[0,50]表示发生遮挡。 */
  Mouth: number | null;
  /** 下巴的遮挡分数[0,100],分数越高遮挡越少。 参考范围：[0,70]表示发生遮挡。 */
  Chin: number | null;
}

/** 人脸质量信息，包含质量分（score）、模糊分（sharpness）、光照分（brightness）、遮挡分（completeness）。只有当NeedFaceDetection设为1时才返回有效信息。 */
declare interface FaceQualityInfo {
  /** 质量分: [0,100]，综合评价图像质量是否适合人脸识别，分数越高质量越好。 正常情况，只需要使用Score作为质量分总体的判断标准即可。Sharpness、Brightness、Completeness等细项分仅供参考。参考范围：[0,40]较差，[40,60] 一般，[60,80]较好，[80,100]很好。 建议：人脸入库选取70以上的图片。 */
  Score: number | null;
  /** 清晰分：[0,100]，评价图片清晰程度，分数越高越清晰。 参考范围：[0,40]特别模糊，[40,60]模糊，[60,80]一般，[80,100]清晰。 建议：人脸入库选取80以上的图片。 */
  Sharpness: number | null;
  /** 光照分：[0,100]，评价图片光照程度，分数越高越亮。 参考范围： [0,30]偏暗，[30,70]光照正常，[70,100]偏亮。 建议：人脸入库选取[30,70]的图片。 */
  Brightness: number | null;
  /** 五官遮挡分，评价眉毛（Eyebrow）、眼睛（Eye）、鼻子（Nose）、脸颊（Cheek）、嘴巴（Mouth）、下巴（Chin）的被遮挡程度。 */
  Completeness: FaceQualityCompleteness | null;
}

/** 检测出的人脸框的位置 */
declare interface FaceRect {
  /** 人脸框左上角横坐标。 人脸框包含人脸五官位置并在此基础上进行一定的扩展，若人脸框超出图片范围，会导致坐标负值。 若需截取完整人脸，可以在完整分completess满足需求的情况下，将负值坐标取0。 */
  X: number;
  /** 人脸框左上角纵坐标。 人脸框包含人脸五官位置并在此基础上进行一定的扩展，若人脸框超出图片范围，会导致坐标负值。 若需截取完整人脸，可以在完整分completess满足需求的情况下，将负值坐标取0。 */
  Y: number;
  /** 人脸宽度 */
  Width: number;
  /** 人脸高度 */
  Height: number;
}

/** 五官定位（人脸关键点）具体信息。 */
declare interface FaceShape {
  /** 描述脸型轮廓的 21 点。 */
  FaceProfile: Point[];
  /** 描述左侧眼睛轮廓的 8 点。 */
  LeftEye: Point[];
  /** 描述右侧眼睛轮廓的 8 点。 */
  RightEye: Point[];
  /** 描述左侧眉毛轮廓的 8 点。 */
  LeftEyeBrow: Point[];
  /** 描述右侧眉毛轮廓的 8 点。 */
  RightEyeBrow: Point[];
  /** 描述嘴巴轮廓的 22 点。 */
  Mouth: Point[];
  /** 描述鼻子轮廓的 13 点。 */
  Nose: Point[];
  /** 左瞳孔轮廓的 1 个点。 */
  LeftPupil: Point[];
  /** 右瞳孔轮廓的 1 个点。 */
  RightPupil: Point[];
}

/** 分组识别结果Item */
declare interface GroupCandidate {
  /** 人员库ID 。 */
  GroupId: string;
  /** 识别出的最相似候选人。 */
  Candidates: Candidate[];
}

/** 需要修改的人员库自定义描述字段key-value */
declare interface GroupExDescriptionInfo {
  /** 人员库自定义描述字段Index，从0开始 */
  GroupExDescriptionIndex: number | null;
  /** 需要更新的人员库自定义描述字段内容 */
  GroupExDescription: string;
}

/** 返回的人员库信息 */
declare interface GroupInfo {
  /** 人员库名称 */
  GroupName: string;
  /** 人员库ID */
  GroupId: string;
  /** 人员库自定义描述字段 */
  GroupExDescriptions: string[] | null;
  /** 人员库信息备注 */
  Tag: string | null;
  /** 人脸识别所用的算法模型版本。 */
  FaceModelVersion: string | null;
  /** Group的创建时间和日期 CreationTimestamp。CreationTimestamp 的值是自 Unix 纪元时间到Group创建时间的毫秒数。 Unix 纪元时间是 1970 年 1 月 1 日星期四，协调世界时 (UTC) 00:00:00。有关更多信息，请参阅 Unix 时间。 */
  CreationTimestamp: number | null;
}

/** 头发信息 */
declare interface Hair {
  /** 头发长度信息。AttributeItem对应的Type为 —— 0：光头，1：短发，2：中发，3：长发，4：绑发。 */
  Length: AttributeItem;
  /** 刘海信息。AttributeItem对应的Type为 —— 0：无刘海，1：有刘海。 */
  Bang: AttributeItem;
  /** 头发颜色信息。AttributeItem对应的Type为 —— 0：黑色，1：金色，2：棕色，3：灰白色。 */
  Color: AttributeItem;
}

/** 帽子信息 */
declare interface Hat {
  /** 帽子佩戴状态信息。AttributeItem对应的Type为 —— 0：不戴帽子，1：普通帽子，2：头盔，3：保安帽。 */
  Style: AttributeItem;
  /** 帽子颜色。AttributeItem对应的Type为 —— 0：不戴帽子，1：红色系，2：黄色系，3：蓝色系，4：黑色系，5：灰白色系，6：混色系子。 */
  Color: AttributeItem;
}

/** 姿态信息 */
declare interface HeadPose {
  /** 上下偏移[-30,30]。 */
  Pitch: number;
  /** 左右偏移[-30,30]。 */
  Yaw: number;
  /** 平面旋转[-180,180]。 */
  Roll: number;
}

/** 嘴巴信息。 */
declare interface Mouth {
  /** 是否张嘴信息。AttributeItem对应的Type为 —— 0：不张嘴，1：张嘴。 */
  MouthOpen: AttributeItem;
}

/** 需要修改的人员描述字段内容，key-value */
declare interface PersonExDescriptionInfo {
  /** 人员描述字段Index，从0开始 */
  PersonExDescriptionIndex: number | null;
  /** 需要更新的人员描述字段内容 */
  PersonExDescription: string;
}

/** 包含此人员的人员库及描述字段内容列表 */
declare interface PersonGroupInfo {
  /** 包含此人员的人员库ID */
  GroupId: string;
  /** 人员描述字段内容 */
  PersonExDescriptions: string[];
}

/** 返回的人员信息 */
declare interface PersonInfo {
  /** 人员名称 */
  PersonName: string;
  /** 人员Id */
  PersonId: string;
  /** 人员性别 */
  Gender: number;
  /** 人员描述字段内容 */
  PersonExDescriptions: string[];
  /** 包含的人脸照片列表 */
  FaceIds: string[];
  /** 人员的创建时间和日期 CreationTimestamp。CreationTimestamp 的值是自 Unix 纪元时间到Person创建时间的毫秒数。 Unix 纪元时间是 1970 年 1 月 1 日星期四，协调世界时 (UTC) 00:00:00。有关更多信息，请参阅 Unix 时间。 */
  CreationTimestamp: number;
}

/** 坐标 */
declare interface Point {
  /** x坐标 */
  X: number;
  /** Y坐标 */
  Y: number;
}

/** 人脸的识别结果 */
declare interface Result {
  /** 识别出的最相似候选人 */
  Candidates: Candidate[];
  /** 检测出的人脸框位置 */
  FaceRect: FaceRect;
  /** 检测出的人脸图片状态返回码。0 表示正常。 -1601代表不符合图片质量控制要求，此时Candidate内容为空。 */
  RetCode: number;
}

/** 识别结果。 */
declare interface ResultsReturnsByGroup {
  /** 检测出的人脸框位置。 */
  FaceRect: FaceRect;
  /** 识别结果。 */
  GroupCandidates: GroupCandidate[];
  /** 检测出的人脸图片状态返回码。0 表示正常。 -1601代表不符合图片质量控制要求，此时Candidate内容为空。 */
  RetCode: number;
}

/** 人员库升级任务信息 */
declare interface UpgradeJobInfo {
  /** 人员库升级任务ID，用于查询、获取升级的进度和结果。 */
  JobId: string;
  /** 人员库ID。 */
  GroupId: string;
  /** 当前算法模型版本。 */
  FromFaceModelVersion: string;
  /** 目标算法模型版本。 */
  ToFaceModelVersion: string;
  /** 升级起始时间。 StartTime的值是自 Unix 纪元时间到Group创建时间的毫秒数。 Unix 纪元时间是 1970 年 1 月 1 日星期四，协调世界时 (UTC) 00:00:00。 有关更多信息，请参阅 Unix 时间。 */
  StartTime: number;
  /** 0表示升级中，1表示升级完毕，2表示回滚完毕，3表示升级失败。 */
  Status: number;
}

declare interface AnalyzeDenseLandmarksRequest {
  /** 检测模式。0 为检测所有出现的人脸， 1 为检测面积最大的人脸。 默认为 0。 最多返回 5 张人脸的五官定位（人脸关键点）具体信息。 */
  Mode?: number;
  /** 图片 base64 数据，base64 编码后大小不可超过5M。 jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。 */
  Image?: string;
  /** 图片的 Url 。对应图片 base64 编码后大小不可超过5M。 jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。Url、Image必须提供一个，如果都提供，只使用 Url。 图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。 非腾讯云存储的Url速度和稳定性可能受一定影响。 支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。 */
  Url?: string;
  /** 人脸识别服务所用的算法模型版本。本接口仅支持 “3.0“ 输入。 */
  FaceModelVersion?: string;
  /** 是否开启图片旋转识别支持。0为不开启，1为开启。默认为0。本参数的作用为，当图片中的人脸被旋转且图片没有exif信息时，如果不开启图片旋转识别支持则无法正确检测、识别图片中的人脸。若您确认图片包含exif信息或者您确认输入图中人脸不会出现被旋转情况，请不要开启本参数。开启后，整体耗时将可能增加数百毫秒。 */
  NeedRotateDetection?: number;
}

declare interface AnalyzeDenseLandmarksResponse {
  /** 请求的图片宽度。 */
  ImageWidth?: number;
  /** 请求的图片高度。 */
  ImageHeight?: number;
  /** 稠密人脸关键点具体信息。 */
  DenseFaceShapeSet?: DenseFaceShape[];
  /** 人脸识别服务所用的算法模型版本。本接口仅支持 “3.0“ 输入。 */
  FaceModelVersion?: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface AnalyzeFaceRequest {
  /** 检测模式。0 为检测所有出现的人脸， 1 为检测面积最大的人脸。默认为 0。最多返回 10 张人脸的五官定位（人脸关键点）具体信息。 */
  Mode?: number;
  /** 图片 base64 数据，base64 编码后大小不可超过5M。jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。 */
  Image?: string;
  /** 图片的 Url 。对应图片 base64 编码后大小不可超过5M。jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。Url、Image必须提供一个，如果都提供，只使用 Url。 图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。 非腾讯云存储的Url速度和稳定性可能受一定影响。支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。 */
  Url?: string;
  /** 人脸识别服务所用的算法模型版本。目前入参支持 “2.0”和“3.0“ 两个输入。2020年4月2日开始，默认为“3.0”，之前使用过本接口的账号若未填写本参数默认为“2.0”。2020年11月26日后开通服务的账号仅支持输入“3.0”。不同算法模型版本对应的人脸识别算法不同，新版本的整体效果会优于旧版本，建议使用“3.0”版本。 */
  FaceModelVersion?: string;
  /** 是否开启图片旋转识别支持。0为不开启，1为开启。默认为0。本参数的作用为，当图片中的人脸被旋转且图片没有exif信息时，如果不开启图片旋转识别支持则无法正确检测、识别图片中的人脸。若您确认图片包含exif信息或者您确认输入图中人脸不会出现被旋转情况，请不要开启本参数。开启后，整体耗时将可能增加数百毫秒。 */
  NeedRotateDetection?: number;
}

declare interface AnalyzeFaceResponse {
  /** 请求的图片宽度。 */
  ImageWidth: number;
  /** 请求的图片高度。 */
  ImageHeight: number;
  /** 五官定位（人脸关键点）具体信息。 */
  FaceShapeSet: FaceShape[];
  /** 人脸识别所用的算法模型版本。 */
  FaceModelVersion: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CompareFaceRequest {
  /** A 图片 base64 数据，base64 编码后大小不可超过5M。jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。若图片中包含多张人脸，只选取其中人脸面积最大的人脸。支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。 */
  ImageA?: string;
  /** B 图片 base64 数据，base64 编码后大小不可超过5M。jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。若图片中包含多张人脸，只选取其中人脸面积最大的人脸。支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。 */
  ImageB?: string;
  /** A 图片的 Url ，对应图片 base64 编码后大小不可超过5M。jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。A 图片的 Url、Image必须提供一个，如果都提供，只使用 Url。 图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。 非腾讯云存储的Url速度和稳定性可能受一定影响。若图片中包含多张人脸，只选取其中人脸面积最大的人脸。支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。 */
  UrlA?: string;
  /** B 图片的 Url ，对应图片 base64 编码后大小不可超过5M。jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。B 图片的 Url、Image必须提供一个，如果都提供，只使用 Url。 图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。 非腾讯云存储的Url速度和稳定性可能受一定影响。若图片中包含多张人脸，只选取其中人脸面积最大的人脸。支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。 */
  UrlB?: string;
  /** 人脸识别服务所用的算法模型版本。目前入参支持 “2.0”和“3.0“ 两个输入。2020年4月2日开始，默认为“3.0”，之前使用过本接口的账号若未填写本参数默认为“2.0”。2020年11月26日后开通服务的账号仅支持输入“3.0”。不同算法模型版本对应的人脸识别算法不同，新版本的整体效果会优于旧版本，建议使用“3.0”版本。 */
  FaceModelVersion?: string;
  /** 图片质量控制。 0: 不进行控制； 1:较低的质量要求，图像存在非常模糊，眼睛鼻子嘴巴遮挡至少其中一种或多种的情况； 2: 一般的质量要求，图像存在偏亮，偏暗，模糊或一般模糊，眉毛遮挡，脸颊遮挡，下巴遮挡，至少其中三种的情况； 3: 较高的质量要求，图像存在偏亮，偏暗，一般模糊，眉毛遮挡，脸颊遮挡，下巴遮挡，其中一到两种的情况； 4: 很高的质量要求，各个维度均为最好或最多在某一维度上存在轻微问题； 默认 0。 若图片质量不满足要求，则返回结果中会提示图片质量检测不符要求。 */
  QualityControl?: number;
  /** 是否开启图片旋转识别支持。0为不开启，1为开启。默认为0。本参数的作用为，当图片中的人脸被旋转且图片没有exif信息时，如果不开启图片旋转识别支持则无法正确检测、识别图片中的人脸。若您确认图片包含exif信息或者您确认输入图中人脸不会出现被旋转情况，请不要开启本参数。开启后，整体耗时将可能增加数百毫秒。 */
  NeedRotateDetection?: number;
}

declare interface CompareFaceResponse {
  /** 两张图片中人脸的相似度分数。不同算法版本返回的相似度分数不同。 若需要验证两张图片中人脸是否为同一人，3.0版本误识率千分之一对应分数为40分，误识率万分之一对应分数为50分，误识率十万分之一对应分数为60分。 一般超过50分则可认定为同一人。 2.0版本误识率千分之一对应分数为70分，误识率万分之一对应分数为80分，误识率十万分之一对应分数为90分。 一般超过80分则可认定为同一人。 若需要验证两张图片中的人脸是否为同一人，建议使用人脸验证接口。 */
  Score: number;
  /** 人脸识别所用的算法模型版本。 */
  FaceModelVersion: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CompareMaskFaceRequest {
  /** A 图片 base64 数据，base64 编码后大小不可超过5M。jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。若图片中包含多张人脸，只选取其中人脸面积最大的人脸。支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。 */
  ImageA?: string;
  /** B 图片 base64 数据，base64 编码后大小不可超过5M。jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。若图片中包含多张人脸，只选取其中人脸面积最大的人脸。支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。 */
  ImageB?: string;
  /** A 图片的 Url ，对应图片 base64 编码后大小不可超过5M。jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。A 图片的 Url、Image必须提供一个，如果都提供，只使用 Url。 图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。 非腾讯云存储的Url速度和稳定性可能受一定影响。若图片中包含多张人脸，只选取其中人脸面积最大的人脸。支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。 */
  UrlA?: string;
  /** B 图片的 Url ，对应图片 base64 编码后大小不可超过5M。jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。B 图片的 Url、Image必须提供一个，如果都提供，只使用 Url。 图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。 非腾讯云存储的Url速度和稳定性可能受一定影响。若图片中包含多张人脸，只选取其中人脸面积最大的人脸。支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。 */
  UrlB?: string;
  /** 人脸识别服务所用的算法模型版本。该接口只支持"3.0" */
  FaceModelVersion?: string;
  /** 图片质量控制。 0: 不进行控制； 1:较低的质量要求，图像存在非常模糊，眼睛鼻子嘴巴遮挡至少其中一种或多种的情况； 2: 一般的质量要求，图像存在偏亮，偏暗，模糊或一般模糊，眉毛遮挡，脸颊遮挡，下巴遮挡，至少其中三种的情况； 3: 较高的质量要求，图像存在偏亮，偏暗，一般模糊，眉毛遮挡，脸颊遮挡，下巴遮挡，其中一到两种的情况； 4: 很高的质量要求，各个维度均为最好或最多在某一维度上存在轻微问题； 默认 0。 若图片质量不满足要求，则返回结果中会提示图片质量检测不符要求。 */
  QualityControl?: number;
}

declare interface CompareMaskFaceResponse {
  /** 两张图片中人脸的相似度分数。不同算法版本返回的相似度分数不同。 若需要验证两张图片中人脸是否为同一人，3.0版本误识率千分之一对应分数为40分，误识率万分之一对应分数为50分，误识率十万分之一对应分数为60分。 一般超过50分则可认定为同一人。 2.0版本误识率千分之一对应分数为70分，误识率万分之一对应分数为80分，误识率十万分之一对应分数为90分。 一般超过80分则可认定为同一人。 若需要验证两张图片中的人脸是否为同一人，建议使用人脸验证接口。 */
  Score: number;
  /** 人脸识别所用的算法模型版本。 */
  FaceModelVersion: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CopyPersonRequest {
  /** 人员ID，取值为创建人员接口中的PersonId */
  PersonId: string;
  /** 待加入的人员库列表，数组元素取值为创建人员库接口中的GroupId */
  GroupIds: string[];
}

declare interface CopyPersonResponse {
  /** 成功加入的人员库数量 */
  SucGroupNum?: number;
  /** 成功加入的人员库列表 */
  SucGroupIds?: string[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateFaceRequest {
  /** 人员ID，取值为创建人员接口中的PersonId */
  PersonId: string;
  /** 图片 base64 数据，base64 编码后大小不可超过5M。jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。人员人脸总数量不可超过5张。若图片中包含多张人脸，只选取其中人脸面积最大的人脸。支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。 */
  Images?: string[];
  /** 图片的 Url 。对应图片 base64 编码后大小不可超过5M。jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。Url、Image必须提供一个，如果都提供，只使用 Url。 图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。 非腾讯云存储的Url速度和稳定性可能受一定影响。支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。人员人脸总数量不可超过5张。若图片中包含多张人脸，只选取其中人脸面积最大的人脸。 */
  Urls?: string[];
  /** 只有和该人员已有的人脸相似度超过FaceMatchThreshold值的人脸，才能增加人脸成功。 默认值60分。取值范围[0,100] 。 */
  FaceMatchThreshold?: number;
  /** 图片质量控制。 0: 不进行控制； 1:较低的质量要求，图像存在非常模糊，眼睛鼻子嘴巴遮挡至少其中一种或多种的情况； 2: 一般的质量要求，图像存在偏亮，偏暗，模糊或一般模糊，眉毛遮挡，脸颊遮挡，下巴遮挡，至少其中三种的情况； 3: 较高的质量要求，图像存在偏亮，偏暗，一般模糊，眉毛遮挡，脸颊遮挡，下巴遮挡，其中一到两种的情况； 4: 很高的质量要求，各个维度均为最好或最多在某一维度上存在轻微问题； 默认 0。 若图片质量不满足要求，则返回结果中会提示图片质量检测不符要求。 */
  QualityControl?: number;
  /** 是否开启图片旋转识别支持。0为不开启，1为开启。默认为0。本参数的作用为，当图片中的人脸被旋转且图片没有exif信息时，如果不开启图片旋转识别支持则无法正确检测、识别图片中的人脸。若您确认图片包含exif信息或者您确认输入图中人脸不会出现被旋转情况，请不要开启本参数。开启后，整体耗时将可能增加数百毫秒。 */
  NeedRotateDetection?: number;
}

declare interface CreateFaceResponse {
  /** 加入成功的人脸数量 */
  SucFaceNum: number;
  /** 加入成功的人脸ID列表 */
  SucFaceIds: string[];
  /** 每张人脸图片添加结果，-1101 代表未检测到人脸，-1102 代表图片解码失败， -1601代表不符合图片质量控制要求, -1604 代表人脸相似度没有超过FaceMatchThreshold。 其他非 0 值代表算法服务异常。 RetCode的顺序和入参中 Images 或 Urls 的顺序一致。 */
  RetCode: number[];
  /** 加入成功的人脸索引。索引顺序和入参中 Images 或 Urls 的顺序一致。 例， Urls 中 有 3 个 url，第二个 url 失败，则 SucIndexes 值为 [0,2] 。 */
  SucIndexes: number[];
  /** 加入成功的人脸框位置。顺序和入参中 Images 或 Urls 的顺序一致。 */
  SucFaceRects: FaceRect[];
  /** 人脸识别所用的算法模型版本。 */
  FaceModelVersion: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateGroupRequest {
  /** 人员库名称，[1,60]个字符，可修改，不可重复。 */
  GroupName: string;
  /** 人员库 ID，不可修改，不可重复。支持英文、数字、-%@#&_，长度限制64B。 */
  GroupId: string;
  /** 人员库自定义描述字段，用于描述人员库中人员属性，该人员库下所有人员将拥有此描述字段。 最多可以创建5个。 每个自定义描述字段支持[1,30]个字符。 在同一人员库中自定义描述字段不可重复。 例： 设置某人员库“自定义描述字段”为["学号","工号","手机号"]， 则该人员库下所有人员将拥有名为“学号”、“工号”、“手机号”的描述字段， 可在对应人员描述字段中填写内容，登记该人员的学号、工号、手机号等信息。 */
  GroupExDescriptions?: string[];
  /** 人员库信息备注，[0，40]个字符。 */
  Tag?: string;
  /** 人脸识别服务所用的算法模型版本。目前入参支持 “2.0”和“3.0“ 两个输入。2020年4月2日开始，默认为“3.0”，之前使用过本接口的账号若未填写本参数默认为“2.0”。2020年11月26日后开通服务的账号仅支持输入“3.0”。不同算法模型版本对应的人脸识别算法不同，新版本的整体效果会优于旧版本，建议使用“3.0”版本。 */
  FaceModelVersion?: string;
}

declare interface CreateGroupResponse {
  /** 人脸识别所用的算法模型版本。 */
  FaceModelVersion: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreatePersonRequest {
  /** 待加入的人员库ID，取值为创建人员库接口中的GroupId */
  GroupId: string;
  /** 人员名称。[1，60]个字符，可修改，可重复。 */
  PersonName: string;
  /** 人员ID，单个腾讯云账号下不可修改，不可重复。支持英文、数字、-%@#&_，长度限制64B。 */
  PersonId: string;
  /** 0代表未填写，1代表男性，2代表女性。 */
  Gender?: number;
  /** 人员描述字段内容，key-value。[0，60]个字符，可修改，可重复。 */
  PersonExDescriptionInfos?: PersonExDescriptionInfo[];
  /** 图片 base64 数据，base64 编码后大小不可超过5M。jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。 */
  Image?: string;
  /** 图片的 Url 。对应图片 base64 编码后大小不可超过5M。jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。Url、Image必须提供一个，如果都提供，只使用 Url。 图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。 非腾讯云存储的Url速度和稳定性可能受一定影响。支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。 */
  Url?: string;
  /** 此参数用于控制判断 Image 或 Url 中图片包含的人脸，是否在人员库中已有疑似的同一人。 如果判断为已有相同人在人员库中，则不会创建新的人员，返回疑似同一人的人员信息。 如果判断没有，则完成创建人员。 0: 不进行判断，无论是否有疑似同一人在库中均完成入库； 1:较低的同一人判断要求（百一误识别率）； 2: 一般的同一人判断要求（千一误识别率）； 3: 较高的同一人判断要求（万一误识别率）； 4: 很高的同一人判断要求（十万一误识别率）。 默认 0。 注： 要求越高，则疑似同一人的概率越小。不同要求对应的误识别率仅为参考值，您可以根据实际情况调整。 */
  UniquePersonControl?: number;
  /** 图片质量控制。 0: 不进行控制； 1:较低的质量要求，图像存在非常模糊，眼睛鼻子嘴巴遮挡至少其中一种或多种的情况； 2: 一般的质量要求，图像存在偏亮，偏暗，模糊或一般模糊，眉毛遮挡，脸颊遮挡，下巴遮挡，至少其中三种的情况； 3: 较高的质量要求，图像存在偏亮，偏暗，一般模糊，眉毛遮挡，脸颊遮挡，下巴遮挡，其中一到两种的情况； 4: 很高的质量要求，各个维度均为最好或最多在某一维度上存在轻微问题； 默认 0。 若图片质量不满足要求，则返回结果中会提示图片质量检测不符要求。 */
  QualityControl?: number;
  /** 是否开启图片旋转识别支持。0为不开启，1为开启。默认为0。本参数的作用为，当图片中的人脸被旋转且图片没有exif信息时，如果不开启图片旋转识别支持则无法正确检测、识别图片中的人脸。若您确认图片包含exif信息或者您确认输入图中人脸不会出现被旋转情况，请不要开启本参数。开启后，整体耗时将可能增加数百毫秒。 */
  NeedRotateDetection?: number;
}

declare interface CreatePersonResponse {
  /** 人脸图片唯一标识。 */
  FaceId: string;
  /** 检测出的人脸框的位置。 */
  FaceRect: FaceRect | null;
  /** 疑似同一人的PersonId。 当 UniquePersonControl 参数不为0且人员库中有疑似的同一人，此参数才有意义。 */
  SimilarPersonId: string;
  /** 人脸识别所用的算法模型版本。 */
  FaceModelVersion: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteFaceRequest {
  /** 人员ID，取值为创建人员接口中的PersonId */
  PersonId: string;
  /** 待删除的人脸ID列表，数组元素取值为增加人脸接口返回的FaceId */
  FaceIds: string[];
}

declare interface DeleteFaceResponse {
  /** 删除成功的人脸数量 */
  SucDeletedNum?: number;
  /** 删除成功的人脸ID列表 */
  SucFaceIds?: string[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteGroupRequest {
  /** 人员库ID，取值为创建人员库接口中的GroupId */
  GroupId: string;
}

declare interface DeleteGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeletePersonFromGroupRequest {
  /** 人员ID，取值为创建人员接口中的PersonId */
  PersonId: string;
  /** 人员库ID，取值为创建人员库接口中的GroupId */
  GroupId: string;
}

declare interface DeletePersonFromGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeletePersonRequest {
  /** 人员ID，取值为创建人员接口中的PersonId */
  PersonId: string;
}

declare interface DeletePersonResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DetectFaceAttributesRequest {
  /** 最多处理的人脸数目。 默认值为1（仅检测图片中面积最大的那张人脸），最大值为120。 此参数用于控制处理待检测图片中的人脸个数，值越小，处理速度越快。 */
  MaxFaceNum?: number;
  /** 图片 base64 数据，base64 编码后大小不可超过5M。jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。 支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。 */
  Image?: string;
  /** 图片的 Url 。 对应图片 base64 编码后大小不可超过5M。 jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。Url、Image必须提供一个，如果都提供，只使用 Url。 图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。 非腾讯云存储的Url速度和稳定性可能受一定影响。 支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。 */
  Url?: string;
  /** 是否返回年龄、性别、情绪等属性。 合法值为（大小写不敏感）：None、Age、Beauty、Emotion、Eye、Eyebrow、 Gender、Hair、Hat、Headpose、Mask、Mouth、Moustache、Nose、Shape、Skin、Smile。 None为不需要返回。默认为 None。 需要将属性组成一个用逗号分隔的字符串，属性之间的顺序没有要求。 关于各属性的详细描述，参见下文出参。 最多返回面积最大的 5 张人脸属性信息，超过 5 张人脸（第 6 张及以后的人脸）的 AttributesInfo 不具备参考意义。 */
  FaceAttributesType?: string;
  /** 是否开启图片旋转识别支持。0为不开启，1为开启。默认为0。本参数的作用为，当图片中的人脸被旋转且图片没有exif信息时，如果不开启图片旋转识别支持则无法正确检测、识别图片中的人脸。若您确认图片包含exif信息或者您确认输入图中人脸不会出现被旋转情况，请不要开启本参数。开启后，整体耗时将可能增加数百毫秒。 */
  NeedRotateDetection?: number;
  /** 人脸识别服务所用的算法模型版本。本接口仅支持“3.0”输入 */
  FaceModelVersion?: string;
}

declare interface DetectFaceAttributesResponse {
  /** 请求的图片宽度。 */
  ImageWidth: number;
  /** 请求的图片高度。 */
  ImageHeight: number;
  /** 人脸信息列表。 */
  FaceDetailInfos: FaceDetailInfo[];
  /** 人脸识别所用的算法模型版本。 */
  FaceModelVersion: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DetectFaceRequest {
  /** 最多处理的人脸数目。默认值为1（仅检测图片中面积最大的那张人脸），最大值为120。 此参数用于控制处理待检测图片中的人脸个数，值越小，处理速度越快。 */
  MaxFaceNum?: number;
  /** 人脸长和宽的最小尺寸，单位为像素。默认为34。建议不低于34。低于MinFaceSize值的人脸不会被检测。 */
  MinFaceSize?: number;
  /** 图片 base64 数据，base64 编码后大小不可超过5M。jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。 */
  Image?: string;
  /** 图片的 Url 。对应图片 base64 编码后大小不可超过5M。jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。Url、Image必须提供一个，如果都提供，只使用 Url。 图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。 非腾讯云存储的Url速度和稳定性可能受一定影响。支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。 */
  Url?: string;
  /** 是否需要返回人脸属性信息（FaceAttributesInfo）。0 为不需要返回，1 为需要返回。默认为 0。 非 1 值均视为不需要返回，此时 FaceAttributesInfo 不具备参考意义。 最多返回面积最大的 5 张人脸属性信息，超过 5 张人脸（第 6 张及以后的人脸）的 FaceAttributesInfo 不具备参考意义。 提取人脸属性信息较为耗时，如不需要人脸属性信息，建议关闭此项功能，加快人脸检测速度。 */
  NeedFaceAttributes?: number;
  /** 是否开启质量检测。0 为关闭，1 为开启。默认为 0。 非 1 值均视为不进行质量检测。最多返回面积最大的 30 张人脸质量分信息，超过 30 张人脸（第 31 张及以后的人脸）的 FaceQualityInfo不具备参考意义。 建议：人脸入库操作建议开启此功能。 */
  NeedQualityDetection?: number;
  /** 人脸识别服务所用的算法模型版本。目前入参支持 “2.0”和“3.0“ 两个输入。2020年4月2日开始，默认为“3.0”，之前使用过本接口的账号若未填写本参数默认为“2.0”。2020年11月26日后开通服务的账号仅支持输入“3.0”。不同算法模型版本对应的人脸识别算法不同，新版本的整体效果会优于旧版本，建议使用“3.0”版本。 */
  FaceModelVersion?: string;
  /** 是否开启图片旋转识别支持。0为不开启，1为开启。默认为0。本参数的作用为，当图片中的人脸被旋转且图片没有exif信息时，如果不开启图片旋转识别支持则无法正确检测、识别图片中的人脸。若您确认图片包含exif信息或者您确认输入图中人脸不会出现被旋转情况，请不要开启本参数。开启后，整体耗时将可能增加数百毫秒。 */
  NeedRotateDetection?: number;
}

declare interface DetectFaceResponse {
  /** 请求的图片宽度。 */
  ImageWidth: number;
  /** 请求的图片高度。 */
  ImageHeight: number;
  /** 人脸信息列表。包含人脸坐标信息、属性信息（若需要）、质量分信息（若需要）。 */
  FaceInfos: FaceInfo[];
  /** 人脸识别所用的算法模型版本。 */
  FaceModelVersion: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DetectLiveFaceAccurateRequest {
  /** 图片 base64 数据，base64 编码后大小不可超过5M。jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。 图片的宽高比请接近 3:4，手机拍摄比例最佳。人脸尺寸大于100X100像素。图片格式支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。 */
  Image?: string;
  /** 图片的 Url 。对应图片 base64 编码后大小不可超过5M。jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。Url、Image必须提供一个，如果都提供，只使用 Url。 图片的宽高比请接近 3:4，手机拍摄比例最佳。人脸尺寸大于100X100像素。图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的Url速度和稳定性可能受一定影响。图片格式支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。 */
  Url?: string;
  /** 人脸识别服务所用的算法模型版本。目前入参支持“3.0“。 */
  FaceModelVersion?: string;
}

declare interface DetectLiveFaceAccurateResponse {
  /** 活体打分，取值范围 [0,100]，根据活体分数对应的阈值区间来判断是否为翻拍。目前阈值可分为[5,10,40,70,90]，其中推荐阈值为40。 */
  Score: number;
  /** 人脸识别所用的算法模型版本。 */
  FaceModelVersion: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DetectLiveFaceRequest {
  /** 图片 base64 数据，base64 编码后大小不可超过5M。jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。（图片的宽高比请接近3:4，不符合宽高比的图片返回的分值不具备参考意义）。支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。 */
  Image?: string;
  /** 图片的 Url 。对应图片 base64 编码后大小不可超过5M。jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。Url、Image必须提供一个，如果都提供，只使用 Url。 （图片的宽高比请接近 3:4，不符合宽高比的图片返回的分值不具备参考意义） 图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。 非腾讯云存储的Url速度和稳定性可能受一定影响。支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。 */
  Url?: string;
  /** 人脸识别服务所用的算法模型版本。目前入参支持 “2.0”和“3.0“ 两个输入。2020年4月2日开始，默认为“3.0”，之前使用过本接口的账号若未填写本参数默认为“2.0”。2020年11月26日后开通服务的账号仅支持输入“3.0”。不同算法模型版本对应的人脸识别算法不同，新版本的整体效果会优于旧版本，建议使用“3.0”版本。 */
  FaceModelVersion?: string;
}

declare interface DetectLiveFaceResponse {
  /** 活体打分，取值范围 [0,100]，分数一般落于[80, 100]区间内，0分也为常见值。推荐相大于 87 时可判断为活体。可根据具体场景自行调整阈值。本字段当且仅当FaceModelVersion为2.0时才具备参考意义。 */
  Score: number;
  /** 人脸识别所用的算法模型版本。 */
  FaceModelVersion: string;
  /** 活体检测是否通过。本字段只有FaceModelVersion为3.0时才具备参考意义。 */
  IsLiveness: boolean;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface GetGroupInfoRequest {
  /** 人员库 ID，取值为创建人员库接口中的GroupId */
  GroupId: string;
}

declare interface GetGroupInfoResponse {
  /** 人员库名称 */
  GroupName?: string;
  /** 人员库ID */
  GroupId?: string;
  /** 人员库自定义描述字段 */
  GroupExDescriptions?: string[];
  /** 人员库信息备注 */
  Tag?: string;
  /** 人脸识别所用的算法模型版本。 */
  FaceModelVersion?: string;
  /** Group的创建时间和日期 CreationTimestamp。CreationTimestamp 的值是自 Unix 纪元时间到Group创建时间的毫秒数。 */
  CreationTimestamp?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface GetGroupListRequest {
  /** 起始序号，默认值为0 */
  Offset?: number;
  /** 返回数量，默认值为10，最大值为1000 */
  Limit?: number;
}

declare interface GetGroupListResponse {
  /** 返回的人员库信息 */
  GroupInfos: GroupInfo[];
  /** 人员库总数量 */
  GroupNum: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface GetPersonBaseInfoRequest {
  /** 人员ID，创建人员接口中的PersonId */
  PersonId: string;
}

declare interface GetPersonBaseInfoResponse {
  /** 人员名称 */
  PersonName?: string;
  /** 人员性别，0代表未填写，1代表男性，2代表女性 */
  Gender?: number;
  /** 包含的人脸 ID 列表 */
  FaceIds?: string[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface GetPersonGroupInfoRequest {
  /** 人员ID，取值为创建人员接口中的PersonId */
  PersonId: string;
  /** 起始序号，默认值为0 */
  Offset?: number;
  /** 返回数量，默认值为10，最大值为100 */
  Limit?: number;
}

declare interface GetPersonGroupInfoResponse {
  /** 包含此人员的人员库及描述字段内容列表 */
  PersonGroupInfos?: PersonGroupInfo[];
  /** 人员库总数量 */
  GroupNum?: number | null;
  /** 人脸识别服务所用的算法模型版本。 */
  FaceModelVersion?: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface GetPersonListNumRequest {
  /** 人员库ID，取值为创建人员库接口中的GroupId */
  GroupId: string;
}

declare interface GetPersonListNumResponse {
  /** 人员数量 */
  PersonNum?: number;
  /** 人脸数量 */
  FaceNum?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface GetPersonListRequest {
  /** 人员库ID，取值为创建人员库接口中的GroupId */
  GroupId: string;
  /** 起始序号，默认值为0 */
  Offset?: number;
  /** 返回数量，默认值为10，最大值为1000 */
  Limit?: number;
}

declare interface GetPersonListResponse {
  /** 返回的人员信息 */
  PersonInfos?: PersonInfo[];
  /** 该人员库的人员数量 */
  PersonNum?: number | null;
  /** 该人员库的人脸数量 */
  FaceNum?: number | null;
  /** 人脸识别所用的算法模型版本。 */
  FaceModelVersion?: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface GetUpgradeGroupFaceModelVersionJobListRequest {
  /** 起始序号，默认值为0。 */
  Offset?: number;
  /** 返回数量，默认值为10，最大值为1000。 */
  Limit?: number;
}

declare interface GetUpgradeGroupFaceModelVersionJobListResponse {
  /** 人员库升级任务信息列表。 */
  JobInfos?: UpgradeJobInfo[];
  /** 升级任务总数量。 */
  JobNum?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface GetUpgradeGroupFaceModelVersionResultRequest {
  /** 升级任务ID，用于查询、获取人员库升级的进度和结果。 */
  JobId: string;
}

declare interface GetUpgradeGroupFaceModelVersionResultResponse {
  /** 人员升级任务预估结束时间。 StartTimestamp的值是自 Unix 纪元时间到人员查重任务预估结束的毫秒数。 Unix 纪元时间是 1970 年 1 月 1 日星期四，协调世界时 (UTC) 00:00:00。 如果为0表示这个任务已经执行完毕。 */
  EndTimestamp: number;
  /** 升级任务完成进度。取值[0.0，100.0]。 */
  Progress: number;
  /** 0表示升级中，1表示升级完毕，2表示回滚完毕，3表示升级失败。 */
  Status: number;
  /** 升级起始时间。 StartTime的值是自 Unix 纪元时间到Group创建时间的毫秒数。 Unix 纪元时间是 1970 年 1 月 1 日星期四，协调世界时 (UTC) 00:00:00。 有关更多信息，请参阅 Unix 时间。 */
  StartTime: number;
  /** 当前算法模型版本。 */
  FromFaceModelVersion: string;
  /** 目标算法模型版本。 */
  ToFaceModelVersion: string;
  /** 人员库ID。 */
  GroupId: string;
  /** 无法升级的人脸Id信息，文件格式为json。内容参见下方示例。url有效期为半小时。 */
  FailedFacesUrl: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyGroupRequest {
  /** 人员库ID，取值为创建人员库接口中的GroupId */
  GroupId: string;
  /** 人员库名称 */
  GroupName?: string;
  /** 需要修改的人员库自定义描述字段，key-value */
  GroupExDescriptionInfos?: GroupExDescriptionInfo[];
  /** 人员库信息备注 */
  Tag?: string;
}

declare interface ModifyGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyPersonBaseInfoRequest {
  /** 人员ID，取值为创建人员接口中的PersonId */
  PersonId: string;
  /** 需要修改的人员名称 */
  PersonName?: string;
  /** 需要修改的人员性别，1代表男性，2代表女性 */
  Gender?: number;
}

declare interface ModifyPersonBaseInfoResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyPersonGroupInfoRequest {
  /** 人员库ID，取值为创建人员库接口中的GroupId */
  GroupId: string;
  /** 人员ID，取值为创建人员接口中的PersonId */
  PersonId: string;
  /** 需要修改的人员描述字段内容，key-value */
  PersonExDescriptionInfos: PersonExDescriptionInfo[];
}

declare interface ModifyPersonGroupInfoResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface RevertGroupFaceModelVersionRequest {
  /** 需要回滚的升级任务ID。 */
  JobId: string;
}

declare interface RevertGroupFaceModelVersionResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface SearchFacesRequest {
  /** 希望搜索的人员库列表，上限100个。数组元素取值为创建人员库接口中的GroupId。不可同时搜索不同算法模型版本（FaceModelVersion）的人员库。 */
  GroupIds: string[];
  /** 图片 base64 数据，base64 编码后大小不可超过5M。jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。 */
  Image?: string;
  /** 图片的 Url 。对应图片 base64 编码后大小不可超过5M。jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。Url、Image必须提供一个，如果都提供，只使用 Url。 图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。 非腾讯云存储的Url速度和稳定性可能受一定影响。支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。 */
  Url?: string;
  /** 最多识别的人脸数目。默认值为1（仅检测图片中面积最大的那张人脸），最大值为10。 MaxFaceNum用于，当输入的待识别图片包含多张人脸时，设定要搜索的人脸的数量。 例：输入的Image或Url中的图片包含多张人脸，设MaxFaceNum=5，则会识别图片中面积最大的5张人脸。 */
  MaxFaceNum?: number;
  /** 人脸长和宽的最小尺寸，单位为像素。默认为34。低于34的人脸图片无法被识别。建议设置为80。 */
  MinFaceSize?: number;
  /** 单张被识别的人脸返回的最相似人员数量。默认值为5，最大值为100。 例，设MaxFaceNum为1，MaxPersonNum为8，则返回Top8相似的人员信息。值越大，需要处理的时间越长。建议不要超过10。 */
  MaxPersonNum?: number;
  /** 是否返回人员具体信息。0 为关闭，1 为开启。默认为 0。其他非0非1值默认为0 */
  NeedPersonInfo?: number;
  /** 图片质量控制。 0: 不进行控制； 1:较低的质量要求，图像存在非常模糊，眼睛鼻子嘴巴遮挡至少其中一种或多种的情况； 2: 一般的质量要求，图像存在偏亮，偏暗，模糊或一般模糊，眉毛遮挡，脸颊遮挡，下巴遮挡，至少其中三种的情况； 3: 较高的质量要求，图像存在偏亮，偏暗，一般模糊，眉毛遮挡，脸颊遮挡，下巴遮挡，其中一到两种的情况； 4: 很高的质量要求，各个维度均为最好或最多在某一维度上存在轻微问题； 默认 0。 若图片质量不满足要求，则返回结果中会提示图片质量检测不符要求。 */
  QualityControl?: number;
  /** 出参Score中，只有超过FaceMatchThreshold值的结果才会返回。默认为0。 */
  FaceMatchThreshold?: number;
  /** 是否开启图片旋转识别支持。0为不开启，1为开启。默认为0。本参数的作用为，当图片中的人脸被旋转且图片没有exif信息时，如果不开启图片旋转识别支持则无法正确检测、识别图片中的人脸。若您确认图片包含exif信息或者您确认输入图中人脸不会出现被旋转情况，请不要开启本参数。开启后，整体耗时将可能增加数百毫秒。 */
  NeedRotateDetection?: number;
}

declare interface SearchFacesResponse {
  /** 识别结果。 */
  Results: Result[];
  /** 搜索的人员库中包含的人脸数。 */
  FaceNum: number;
  /** 人脸识别所用的算法模型版本。 */
  FaceModelVersion: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface SearchFacesReturnsByGroupRequest {
  /** 希望搜索的人员库列表，上限60个。数组元素取值为创建人员库接口中的GroupId。不可同时搜索不同算法模型版本（FaceModelVersion）的人员库。 */
  GroupIds: string[];
  /** 图片 base64 数据，base64 编码后大小不可超过5M。jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。 */
  Image?: string;
  /** 图片的 Url 。对应图片 base64 编码后大小不可超过5M。jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。Url、Image必须提供一个，如果都提供，只使用 Url。图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的Url速度和稳定性可能受一定影响。支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。 */
  Url?: string;
  /** 最多识别的人脸数目。默认值为1（仅检测图片中面积最大的那张人脸），最大值为10。MaxFaceNum用于，当输入的待识别图片包含多张人脸时，设定要搜索的人脸的数量。例：输入的Image或Url中的图片包含多张人脸，设MaxFaceNum=5，则会识别图片中面积最大的5张人脸。 */
  MaxFaceNum?: number;
  /** 人脸长和宽的最小尺寸，单位为像素。默认为34。低于34将影响搜索精度。建议设置为80。 */
  MinFaceSize?: number;
  /** 被检测到的人脸，对应最多返回的最相似人员数目。默认值为5，最大值为10。 例，设MaxFaceNum为3，MaxPersonNumPerGroup为5，GroupIds长度为3，则最多可能返回3*5*3=45个人员。 */
  MaxPersonNumPerGroup?: number;
  /** 是否返回人员具体信息。0 为关闭，1 为开启。默认为 0。其他非0非1值默认为0 */
  NeedPersonInfo?: number;
  /** 图片质量控制。 0: 不进行控制； 1:较低的质量要求，图像存在非常模糊，眼睛鼻子嘴巴遮挡至少其中一种或多种的情况； 2: 一般的质量要求，图像存在偏亮，偏暗，模糊或一般模糊，眉毛遮挡，脸颊遮挡，下巴遮挡，至少其中三种的情况； 3: 较高的质量要求，图像存在偏亮，偏暗，一般模糊，眉毛遮挡，脸颊遮挡，下巴遮挡，其中一到两种的情况； 4: 很高的质量要求，各个维度均为最好或最多在某一维度上存在轻微问题； 默认 0。 若图片质量不满足要求，则返回结果中会提示图片质量检测不符要求。 */
  QualityControl?: number;
  /** 出参Score中，只有大于等于FaceMatchThreshold值的结果才会返回。默认为0。取值范围[0.0,100.0) 。 */
  FaceMatchThreshold?: number;
  /** 是否开启图片旋转识别支持。0为不开启，1为开启。默认为0。本参数的作用为，当图片中的人脸被旋转且图片没有exif信息时，如果不开启图片旋转识别支持则无法正确检测、识别图片中的人脸。若您确认图片包含exif信息或者您确认输入图中人脸不会出现被旋转情况，请不要开启本参数。开启后，整体耗时将可能增加数百毫秒。 */
  NeedRotateDetection?: number;
}

declare interface SearchFacesReturnsByGroupResponse {
  /** 搜索的人员库中包含的人脸数。 */
  FaceNum: number;
  /** 识别结果。 */
  ResultsReturnsByGroup: ResultsReturnsByGroup[];
  /** 人脸识别所用的算法模型版本。 */
  FaceModelVersion: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface SearchPersonsRequest {
  /** 希望搜索的人员库列表，上限100个。数组元素取值为创建人员库接口中的GroupId */
  GroupIds: string[];
  /** 图片 base64 数据，base64 编码后大小不可超过5M。jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。若图片中包含多张人脸，只选取其中人脸面积最大的人脸。支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。 */
  Image?: string;
  /** 图片的 Url 。对应图片 base64 编码后大小不可超过5M。jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。Url、Image必须提供一个，如果都提供，只使用 Url。图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的Url速度和稳定性可能受一定影响。支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。 */
  Url?: string;
  /** 最多识别的人脸数目。默认值为1（仅检测图片中面积最大的那张人脸），最大值为10。MaxFaceNum用于，当输入的待识别图片包含多张人脸时，设定要搜索的人脸的数量。例：输入的Image或Url中的图片包含多张人脸，设MaxFaceNum=5，则会识别图片中面积最大的5张人脸。 */
  MaxFaceNum?: number;
  /** 人脸长和宽的最小尺寸，单位为像素。默认为34。低于34将影响搜索精度。建议设置为80。 */
  MinFaceSize?: number;
  /** 单张被识别的人脸返回的最相似人员数量。默认值为5，最大值为100。例，设MaxFaceNum为1，MaxPersonNum为8，则返回Top8相似的人员信息。值越大，需要处理的时间越长。建议不要超过10。 */
  MaxPersonNum?: number;
  /** 图片质量控制。 0: 不进行控制； 1:较低的质量要求，图像存在非常模糊，眼睛鼻子嘴巴遮挡至少其中一种或多种的情况； 2: 一般的质量要求，图像存在偏亮，偏暗，模糊或一般模糊，眉毛遮挡，脸颊遮挡，下巴遮挡，至少其中三种的情况； 3: 较高的质量要求，图像存在偏亮，偏暗，一般模糊，眉毛遮挡，脸颊遮挡，下巴遮挡，其中一到两种的情况； 4: 很高的质量要求，各个维度均为最好或最多在某一维度上存在轻微问题； 默认 0。 若图片质量不满足要求，则返回结果中会提示图片质量检测不符要求。 */
  QualityControl?: number;
  /** 出参Score中，只有大于等于FaceMatchThreshold值的结果才会返回。默认为0。取值范围[0.0,100.0) 。 */
  FaceMatchThreshold?: number;
  /** 是否返回人员具体信息。0 为关闭，1 为开启。默认为 0。其他非0非1值默认为0 */
  NeedPersonInfo?: number;
  /** 是否开启图片旋转识别支持。0为不开启，1为开启。默认为0。本参数的作用为，当图片中的人脸被旋转且图片没有exif信息时，如果不开启图片旋转识别支持则无法正确检测、识别图片中的人脸。若您确认图片包含exif信息或者您确认输入图中人脸不会出现被旋转情况，请不要开启本参数。开启后，整体耗时将可能增加数百毫秒。 */
  NeedRotateDetection?: number;
}

declare interface SearchPersonsResponse {
  /** 识别结果。 */
  Results: Result[];
  /** 搜索的人员库中包含的人员数。若输入图片中所有人脸均不符合质量要求，则返回0。 */
  PersonNum: number;
  /** 人脸识别所用的算法模型版本。 */
  FaceModelVersion: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface SearchPersonsReturnsByGroupRequest {
  /** 希望搜索的人员库列表，上限60个。数组元素取值为创建人员库接口中的GroupId */
  GroupIds: string[];
  /** 图片 base64 数据，base64 编码后大小不可超过5M。jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。 */
  Image?: string;
  /** 图片的 Url 。对应图片 base64 编码后大小不可超过5M。jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。Url、Image必须提供一个，如果都提供，只使用 Url。图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的Url速度和稳定性可能受一定影响。支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。 */
  Url?: string;
  /** 最多识别的人脸数目。默认值为1（仅检测图片中面积最大的那张人脸），最大值为10。MaxFaceNum用于，当输入的待识别图片包含多张人脸时，设定要搜索的人脸的数量。例：输入的Image或Url中的图片包含多张人脸，设MaxFaceNum=5，则会识别图片中面积最大的5张人脸。 */
  MaxFaceNum?: number;
  /** 人脸长和宽的最小尺寸，单位为像素。默认为34。低于34将影响搜索精度。建议设置为80。 */
  MinFaceSize?: number;
  /** 被检测到的人脸，对应最多返回的最相似人员数目。默认值为5，最大值为10。 例，设MaxFaceNum为3，MaxPersonNumPerGroup为5，GroupIds长度为3，则最多可能返回3*5*3=45个人员。 */
  MaxPersonNumPerGroup?: number;
  /** 图片质量控制。 0: 不进行控制； 1:较低的质量要求，图像存在非常模糊，眼睛鼻子嘴巴遮挡至少其中一种或多种的情况； 2: 一般的质量要求，图像存在偏亮，偏暗，模糊或一般模糊，眉毛遮挡，脸颊遮挡，下巴遮挡，至少其中三种的情况； 3: 较高的质量要求，图像存在偏亮，偏暗，一般模糊，眉毛遮挡，脸颊遮挡，下巴遮挡，其中一到两种的情况； 4: 很高的质量要求，各个维度均为最好或最多在某一维度上存在轻微问题； 默认 0。 若图片质量不满足要求，则返回结果中会提示图片质量检测不符要求。 */
  QualityControl?: number;
  /** 出参Score中，只有超过FaceMatchThreshold值的结果才会返回。默认为0。 */
  FaceMatchThreshold?: number;
  /** 是否返回人员具体信息。0 为关闭，1 为开启。默认为 0。其他非0非1值默认为0 */
  NeedPersonInfo?: number;
  /** 是否开启图片旋转识别支持。0为不开启，1为开启。默认为0。本参数的作用为，当图片中的人脸被旋转且图片没有exif信息时，如果不开启图片旋转识别支持则无法正确检测、识别图片中的人脸。若您确认图片包含exif信息或者您确认输入图中人脸不会出现被旋转情况，请不要开启本参数。开启后，整体耗时将可能增加数百毫秒。 */
  NeedRotateDetection?: number;
}

declare interface SearchPersonsReturnsByGroupResponse {
  /** 搜索的人员库中包含的人员数。若输入图片中所有人脸均不符合质量要求，则返回0。 */
  PersonNum?: number;
  /** 识别结果。 */
  ResultsReturnsByGroup?: ResultsReturnsByGroup[];
  /** 人脸识别所用的算法模型版本。 */
  FaceModelVersion?: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UpgradeGroupFaceModelVersionRequest {
  /** 需要升级的人员库ID。 */
  GroupId: string;
  /** 需要升级至的算法模型版本。默认为最新版本。不可逆向升级 */
  FaceModelVersion: string;
}

declare interface UpgradeGroupFaceModelVersionResponse {
  /** 升级任务ID，用于查询、获取升级的进度和结果。 */
  JobId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface VerifyFaceRequest {
  /** 待验证的人员ID。人员ID具体信息请参考人员库管理相关接口。 */
  PersonId: string;
  /** 图片 base64 数据，base64 编码后大小不可超过5M。jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。若图片中包含多张人脸，只选取其中人脸面积最大的人脸。支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。 */
  Image?: string;
  /** 图片的 Url 。对应图片 base64 编码后大小不可超过5M。jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。Url、Image必须提供一个，如果都提供，只使用 Url。 图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。 非腾讯云存储的Url速度和稳定性可能受一定影响。若图片中包含多张人脸，只选取其中人脸面积最大的人脸。支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。 */
  Url?: string;
  /** 图片质量控制。 0: 不进行控制； 1:较低的质量要求，图像存在非常模糊，眼睛鼻子嘴巴遮挡至少其中一种或多种的情况； 2: 一般的质量要求，图像存在偏亮，偏暗，模糊或一般模糊，眉毛遮挡，脸颊遮挡，下巴遮挡，至少其中三种的情况； 3: 较高的质量要求，图像存在偏亮，偏暗，一般模糊，眉毛遮挡，脸颊遮挡，下巴遮挡，其中一到两种的情况； 4: 很高的质量要求，各个维度均为最好或最多在某一维度上存在轻微问题； 默认 0。 若图片质量不满足要求，则返回结果中会提示图片质量检测不符要求。 */
  QualityControl?: number;
  /** 是否开启图片旋转识别支持。0为不开启，1为开启。默认为0。本参数的作用为，当图片中的人脸被旋转且图片没有exif信息时，如果不开启图片旋转识别支持则无法正确检测、识别图片中的人脸。若您确认图片包含exif信息或者您确认输入图中人脸不会出现被旋转情况，请不要开启本参数。开启后，整体耗时将可能增加数百毫秒。 */
  NeedRotateDetection?: number;
}

declare interface VerifyFaceResponse {
  /** 给定的人脸图片与 PersonId 对应人脸的相似度。若 PersonId 下有多张人脸（Face），返回相似度最大的分数。不同算法版本返回的相似度分数不同。若需要验证两张图片中人脸是否为同一人，3.0版本误识率千分之一对应分数为40分，误识率万分之一对应分数为50分，误识率十万分之一对应分数为60分。 一般超过50分则可认定为同一人。2.0版本误识率千分之一对应分数为70分，误识率万分之一对应分数为80分，误识率十万分之一对应分数为90分。 一般超过80分则可认定为同一人。 */
  Score: number;
  /** 是否为同一人判断，固定阈值分数为60分，若想更灵活地调整阈值可取Score参数返回进行判断 */
  IsMatch: boolean;
  /** 人脸识别所用的算法模型版本，是该 Person 所在的人员库的算法模型版本。在创建人员库时设置，详情可参考[算法模型版本](https://cloud.tencent.com/document/product/867/40042) */
  FaceModelVersion: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface VerifyPersonRequest {
  /** 待验证的人员ID。人员ID具体信息请参考人员库管理相关接口。 */
  PersonId: string;
  /** 图片 base64 数据。jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。若图片中包含多张人脸，只选取其中人脸面积最大的人脸。支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。 */
  Image?: string;
  /** 图片的 Url jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。。 图片的 Url、Image必须提供一个，如果都提供，只使用 Url。 图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。 非腾讯云存储的Url速度和稳定性可能受一定影响。若图片中包含多张人脸，只选取其中人脸面积最大的人脸。支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。 */
  Url?: string;
  /** 图片质量控制。 0: 不进行控制； 1:较低的质量要求，图像存在非常模糊，眼睛鼻子嘴巴遮挡至少其中一种或多种的情况； 2: 一般的质量要求，图像存在偏亮，偏暗，模糊或一般模糊，眉毛遮挡，脸颊遮挡，下巴遮挡，至少其中三种的情况； 3: 较高的质量要求，图像存在偏亮，偏暗，一般模糊，眉毛遮挡，脸颊遮挡，下巴遮挡，其中一到两种的情况； 4: 很高的质量要求，各个维度均为最好或最多在某一维度上存在轻微问题； 默认 0。 若图片质量不满足要求，则返回结果中会提示图片质量检测不符要求。 */
  QualityControl?: number;
  /** 是否开启图片旋转识别支持。0为不开启，1为开启。默认为0。本参数的作用为，当图片中的人脸被旋转且图片没有exif信息时，如果不开启图片旋转识别支持则无法正确检测、识别图片中的人脸。若您确认图片包含exif信息或者您确认输入图中人脸不会出现被旋转情况，请不要开启本参数。开启后，整体耗时将可能增加数百毫秒。 */
  NeedRotateDetection?: number;
}

declare interface VerifyPersonResponse {
  /** 给定的人脸照片与 PersonId 对应的相似度。若 PersonId 下有多张人脸（Face），会融合多张人脸信息进行验证。 */
  Score?: number;
  /** 是否为同一人的判断。 */
  IsMatch?: boolean;
  /** 人脸识别所用的算法模型版本，是该 Person 所在的人员库的算法模型版本。在创建人员库时设置，详情可参考[算法模型版本](https://cloud.tencent.com/document/product/867/40042) */
  FaceModelVersion?: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare namespace V20180301 {
  interface VersionHeader { headers: { 'X-TC-Version': '2018-03-01' } }

  /** 人脸属性信息 */
  interface AttributeItem {
    /** 属性值 */
    Type: number;
    /** Type识别概率值，【0,1】,代表判断正确的概率。 */
    Probability: number;
  }

  /** 识别出的最相似候选人 */
  interface Candidate {
    /** 人员ID */
    PersonId: string;
    /** 人脸ID，仅在SearchFaces/SearchFacesReturnsByGroup接口返回时有效。人员搜索类接口采用融合特征方式检索，该字段无意义 */
    FaceId: string;
    /** 候选者的匹配得分。 1万大小人脸底库下，误识率百分之一对应分数为70分，误识率千分之一对应分数为80分，误识率万分之一对应分数为90分；10万大小人脸底库下，误识率百分之一对应分数为80分，误识率千分之一对应分数为90分，误识率万分之一对应分数为100分；30万大小人脸底库下，误识率百分之一对应分数为85分，误识率千分之一对应分数为95分。一般80分左右可适用大部分场景，建议分数不要超过90分。您可以根据实际情况选择合适的分数。 */
    Score: number;
    /** 人员名称 */
    PersonName: string | null;
    /** 人员性别 */
    Gender: number | null;
    /** 包含此人员的人员库及描述字段内容列表 */
    PersonGroupInfos: PersonGroupInfo[] | null;
  }

  /** 稠密关键点详细信息 */
  interface DenseFaceShape {
    /** 人脸框左上角横坐标。 */
    X: number;
    /** 人脸框左上角纵坐标。 */
    Y: number;
    /** 人脸框宽度。 */
    Width: number;
    /** 人脸框高度。 */
    Height: number;
    /** 描述左侧眼睛轮廓的 XX 点。 */
    LeftEye: Point[];
    /** 描述右侧眼睛轮廓的 XX 点。 */
    RightEye: Point[];
    /** 描述左侧眉毛轮廓的 XX 点。 */
    LeftEyeBrow: Point[];
    /** 描述右侧眉毛轮廓的 XX 点。 */
    RightEyeBrow: Point[];
    /** 描述外嘴巴轮廓的 XX 点， 从左侧开始逆时针返回。 */
    MouthOutside: Point[];
    /** 描述内嘴巴轮廓的 XX 点，从左侧开始逆时针返回。 */
    MouthInside: Point[];
    /** 描述鼻子轮廓的 XX 点。 */
    Nose: Point[];
    /** 左瞳孔轮廓的 XX 个点。 */
    LeftPupil: Point[];
    /** 右瞳孔轮廓的 XX 个点。 */
    RightPupil: Point[];
    /** 中轴线轮廓的 XX 个点。 */
    CentralAxis: Point[];
    /** 下巴轮廓的 XX 个点。 */
    Chin: Point[];
    /** 左眼袋的 XX 个点。 */
    LeftEyeBags: Point[];
    /** 右眼袋的 XX 个点。 */
    RightEyeBags: Point[];
    /** 额头的 XX 个点。 */
    Forehead: Point[];
  }

  /** 眼睛信息 */
  interface Eye {
    /** 识别是否佩戴眼镜。AttributeItem对应的Type为 —— 0：无眼镜，1：普通眼镜，2：墨镜 */
    Glass: AttributeItem;
    /** 识别眼睛的睁开、闭合状态。AttributeItem对应的Type为 —— 0：睁开，1：闭眼 */
    EyeOpen: AttributeItem;
    /** 识别是否双眼皮。AttributeItem对应的Type为 —— 0：无，1：有。 */
    EyelidType: AttributeItem;
    /** 眼睛大小。AttributeItem对应的Type为 —— 0：小眼睛，1：普通眼睛，2：大眼睛。 */
    EyeSize: AttributeItem;
  }

  /** 眉毛信息 */
  interface Eyebrow {
    /** 眉毛浓密。AttributeItem对应的Type为 —— 0：淡眉，1：浓眉。 */
    EyebrowDensity: AttributeItem;
    /** 眉毛弯曲。AttributeItem对应的Type为 —— 0：不弯，1：弯眉。 */
    EyebrowCurve: AttributeItem;
    /** 眉毛长短。AttributeItem对应的Type为 —— 0：短眉毛，1：长眉毛。 */
    EyebrowLength: AttributeItem;
  }

  /** 人脸属性信息，包含性别( gender )、年龄( age )、表情( expression )、 魅力( beauty )、眼镜( glass )、口罩（mask）、头发（hair）和姿态 (pitch，roll，yaw )。只有当 NeedFaceAttributes 设为 1 时才返回有效信息，最多返回面积最大的 5 张人脸属性信息，超过 5 张人脸（第 6 张及以后的人脸）的 FaceAttributesInfo 不具备参考意义。 */
  interface FaceAttributesInfo {
    /** 性别[0~49]为女性，[50，100]为男性，越接近0和100表示置信度越高。NeedFaceAttributes 不为 1 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。 */
    Gender: number;
    /** 年龄 [0~100]。NeedFaceAttributes 不为1 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。 */
    Age: number;
    /** 微笑[0(normal，正常)~50(smile，微笑)~100(laugh，大笑)]。NeedFaceAttributes 不为1 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。 */
    Expression: number;
    /** 是否有眼镜 [true,false]。NeedFaceAttributes 不为1 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。 */
    Glass: boolean;
    /** 上下偏移[-30,30]，单位角度。NeedFaceAttributes 不为1 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。 建议：人脸入库选择[-10,10]的图片。 */
    Pitch: number;
    /** 左右偏移[-30,30]，单位角度。 NeedFaceAttributes 不为1 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。 建议：人脸入库选择[-10,10]的图片。 */
    Yaw: number;
    /** 平面旋转[-180,180]，单位角度。 NeedFaceAttributes 不为1 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。 建议：人脸入库选择[-20,20]的图片。 */
    Roll: number;
    /** 魅力[0~100]。NeedFaceAttributes 不为1 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。 */
    Beauty: number;
    /** 是否有帽子 [true,false]。NeedFaceAttributes 不为1 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。 */
    Hat: boolean | null;
    /** 是否有口罩 [true,false]。NeedFaceAttributes 不为1 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。 */
    Mask: boolean | null;
    /** 头发信息，包含头发长度（length）、有无刘海（bang）、头发颜色（color）。NeedFaceAttributes 不为1 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。 */
    Hair: FaceHairAttributesInfo | null;
    /** 双眼是否睁开 [true,false]。只要有超过一只眼睛闭眼，就返回false。 NeedFaceAttributes 不为1 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。 */
    EyeOpen: boolean | null;
  }

  /** 人脸属性信息，根据 FaceAttributesType 输入的类型，返回年龄（Age）、颜值（Beauty） 情绪（Emotion）、眼睛信息（Eye）、眉毛（Eyebrow）、性别（Gender） 头发（Hair）、帽子（Hat）、姿态（Headpose）、口罩（Mask）、嘴巴（Mouse）、胡子（Moustache） 鼻子（Nose）、脸型（Shape）、肤色（Skin）、微笑（Smile）等人脸属性信息。 若 FaceAttributesType 没有输入相关类型，则FaceDetaiAttributesInfo返回的细项不具备参考意义。 */
  interface FaceDetailAttributesInfo {
    /** 年龄 [0,65]，其中65代表“65岁及以上”。 FaceAttributesType 不为含Age 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。 */
    Age: number;
    /** 美丑打分[0,100]。 FaceAttributesType 不含 Beauty 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。 */
    Beauty: number;
    /** 情绪，可识别自然、高兴、惊讶、生气、悲伤、厌恶、害怕。 AttributeItem对应的Type为 —— 0：自然，1：高兴，2：惊讶，3：生气，4：悲伤，5：厌恶，6：害怕FaceAttributesType 不含Emotion 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。 */
    Emotion: AttributeItem;
    /** 眼睛相关信息，可识别是否戴眼镜、是否闭眼、是否双眼皮和眼睛大小。 FaceAttributesType 不含Eye 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。 */
    Eye: Eye;
    /** 眉毛相关信息，可识别眉毛浓密、弯曲、长短信息。 FaceAttributesType 不含Eyebrow 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。 */
    Eyebrow: Eyebrow;
    /** 性别信息。 AttributeItem对应的Type为 —— 0：男性，1：女性。FaceAttributesType 不含Gender 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。 */
    Gender: AttributeItem;
    /** 头发信息，包含头发长度、有无刘海、头发颜色。 FaceAttributesType 不含Hair 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。 */
    Hair: Hair;
    /** 帽子信息，可识别是否佩戴帽子、帽子款式、帽子颜色。 FaceAttributesType 不含Hat 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。 */
    Hat: Hat;
    /** 姿态信息，包含人脸的上下偏移、左右偏移、平面旋转信息。 FaceAttributesType 不含Headpose 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。 */
    HeadPose: HeadPose;
    /** 口罩佩戴信息。 AttributeItem对应的Type为 —— 0: 无口罩， 1: 有口罩不遮脸，2: 有口罩遮下巴，3: 有口罩遮嘴，4: 正确佩戴口罩。FaceAttributesType 不含Mask 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。 */
    Mask: AttributeItem;
    /** 嘴巴信息，可识别是否张嘴、嘴唇厚度。 FaceAttributesType 不含 Mouth 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。 */
    Mouth: Mouth;
    /** 胡子信息。AttributeItem对应的Type为 —— 0：无胡子，1：有胡子。 FaceAttributesType 不含 Moustache 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。 */
    Moustache: AttributeItem;
    /** 鼻子信息。 AttributeItem对应的Type为 —— 0：朝天鼻，1：鹰钩鼻，2：普通，3：圆鼻头FaceAttributesType 不含 Nose 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。 */
    Nose: AttributeItem;
    /** 脸型信息。 AttributeItem对应的Type为 —— 0：方脸，1：三角脸，2：鹅蛋脸，3：心形脸，4：圆脸。FaceAttributesType 不含 Shape 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。 */
    Shape: AttributeItem;
    /** 肤色信息。 AttributeItem对应的Type为 —— 0：黄色皮肤，1：棕色皮肤，2：黑色皮肤，3：白色皮肤。FaceAttributesType 不含 Skin 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。 */
    Skin: AttributeItem;
    /** 微笑程度，[0,100]。 FaceAttributesType 不含 Smile 或检测超过 5 张人脸时，此参数仍返回，但不具备参考意义。 */
    Smile: number;
  }

  /** 人脸信息列表。 */
  interface FaceDetailInfo {
    /** 检测出的人脸框位置。 */
    FaceRect: FaceRect;
    /** 人脸属性信息，根据 FaceAttributesType 输入的类型，返回年龄（Age）、颜值（Beauty） 情绪（Emotion）、眼睛信息（Eye）、眉毛（Eyebrow）、性别（Gender） 头发（Hair）、帽子（Hat）、姿态（Headpose）、口罩（Mask）、嘴巴（Mouse）、胡子（Moustache） 鼻子（Nose）、脸型（Shape）、肤色（Skin）、微笑（Smile）等人脸属性信息。 若 FaceAttributesType 没有输入相关类型，则FaceDetaiAttributesInfo返回的细项不具备参考意义。 */
    FaceDetailAttributesInfo: FaceDetailAttributesInfo;
  }

  /** 人脸属性中的发型信息。 */
  interface FaceHairAttributesInfo {
    /** 0：光头，1：短发，2：中发，3：长发，4：绑发 */
    Length: number | null;
    /** 0：有刘海，1：无刘海 */
    Bang: number | null;
    /** 0：黑色，1：金色，2：棕色，3：灰白色 */
    Color: number | null;
  }

  /** 人脸信息列表。 */
  interface FaceInfo {
    /** 人脸框左上角横坐标。人脸框包含人脸五官位置并在此基础上进行一定的扩展，若人脸框超出图片范围，会导致坐标负值。 若需截取完整人脸，可以在完整分completess满足需求的情况下，将负值坐标取0。 */
    X: number;
    /** 人脸框左上角纵坐标。 人脸框包含人脸五官位置并在此基础上进行一定的扩展，若人脸框超出图片范围，会导致坐标负值。 若需截取完整人脸，可以在完整分completess满足需求的情况下，将负值坐标取0。 */
    Y: number;
    /** 人脸框宽度。 */
    Width: number;
    /** 人脸框高度。 */
    Height: number;
    /** 人脸属性信息，包含性别( gender )、年龄( age )、表情( expression )、 魅力( beauty )、眼镜( glass )、口罩（mask）、头发（hair）和姿态 (pitch，roll，yaw )。只有当 NeedFaceAttributes 设为 1 时才返回有效信息。 */
    FaceAttributesInfo: FaceAttributesInfo;
    /** 人脸质量信息，包含质量分（score）、模糊分（sharpness）、光照分（brightness）、遮挡分（completeness）。只有当NeedFaceDetection设为1时才返回有效信息。 */
    FaceQualityInfo: FaceQualityInfo | null;
  }

  /** 五官遮挡分，评价眉毛（Eyebrow）、眼睛（Eye）、鼻子（Nose）、脸颊（Cheek）、嘴巴（Mouth）、下巴（Chin）的被遮挡程度。 */
  interface FaceQualityCompleteness {
    /** 眉毛的遮挡分数[0,100]，分数越高遮挡越少。 参考范围：[0,80]表示发生遮挡。 */
    Eyebrow: number | null;
    /** 眼睛的遮挡分数[0,100],分数越高遮挡越少。 参考范围：[0,80]表示发生遮挡。 */
    Eye: number | null;
    /** 鼻子的遮挡分数[0,100],分数越高遮挡越少。 参考范围：[0,60]表示发生遮挡。 */
    Nose: number | null;
    /** 脸颊的遮挡分数[0,100],分数越高遮挡越少。 参考范围：[0,70]表示发生遮挡。 */
    Cheek: number | null;
    /** 嘴巴的遮挡分数[0,100],分数越高遮挡越少。 参考范围：[0,50]表示发生遮挡。 */
    Mouth: number | null;
    /** 下巴的遮挡分数[0,100],分数越高遮挡越少。 参考范围：[0,70]表示发生遮挡。 */
    Chin: number | null;
  }

  /** 人脸质量信息，包含质量分（score）、模糊分（sharpness）、光照分（brightness）、遮挡分（completeness）。只有当NeedFaceDetection设为1时才返回有效信息。 */
  interface FaceQualityInfo {
    /** 质量分: [0,100]，综合评价图像质量是否适合人脸识别，分数越高质量越好。 正常情况，只需要使用Score作为质量分总体的判断标准即可。Sharpness、Brightness、Completeness等细项分仅供参考。参考范围：[0,40]较差，[40,60] 一般，[60,80]较好，[80,100]很好。 建议：人脸入库选取70以上的图片。 */
    Score: number | null;
    /** 清晰分：[0,100]，评价图片清晰程度，分数越高越清晰。 参考范围：[0,40]特别模糊，[40,60]模糊，[60,80]一般，[80,100]清晰。 建议：人脸入库选取80以上的图片。 */
    Sharpness: number | null;
    /** 光照分：[0,100]，评价图片光照程度，分数越高越亮。 参考范围： [0,30]偏暗，[30,70]光照正常，[70,100]偏亮。 建议：人脸入库选取[30,70]的图片。 */
    Brightness: number | null;
    /** 五官遮挡分，评价眉毛（Eyebrow）、眼睛（Eye）、鼻子（Nose）、脸颊（Cheek）、嘴巴（Mouth）、下巴（Chin）的被遮挡程度。 */
    Completeness: FaceQualityCompleteness | null;
  }

  /** 检测出的人脸框的位置 */
  interface FaceRect {
    /** 人脸框左上角横坐标。 人脸框包含人脸五官位置并在此基础上进行一定的扩展，若人脸框超出图片范围，会导致坐标负值。 若需截取完整人脸，可以在完整分completess满足需求的情况下，将负值坐标取0。 */
    X: number;
    /** 人脸框左上角纵坐标。 人脸框包含人脸五官位置并在此基础上进行一定的扩展，若人脸框超出图片范围，会导致坐标负值。 若需截取完整人脸，可以在完整分completess满足需求的情况下，将负值坐标取0。 */
    Y: number;
    /** 人脸宽度 */
    Width: number;
    /** 人脸高度 */
    Height: number;
  }

  /** 五官定位（人脸关键点）具体信息。 */
  interface FaceShape {
    /** 描述脸型轮廓的 21 点。 */
    FaceProfile: Point[];
    /** 描述左侧眼睛轮廓的 8 点。 */
    LeftEye: Point[];
    /** 描述右侧眼睛轮廓的 8 点。 */
    RightEye: Point[];
    /** 描述左侧眉毛轮廓的 8 点。 */
    LeftEyeBrow: Point[];
    /** 描述右侧眉毛轮廓的 8 点。 */
    RightEyeBrow: Point[];
    /** 描述嘴巴轮廓的 22 点。 */
    Mouth: Point[];
    /** 描述鼻子轮廓的 13 点。 */
    Nose: Point[];
    /** 左瞳孔轮廓的 1 个点。 */
    LeftPupil: Point[];
    /** 右瞳孔轮廓的 1 个点。 */
    RightPupil: Point[];
  }

  /** 分组识别结果Item */
  interface GroupCandidate {
    /** 人员库ID 。 */
    GroupId: string;
    /** 识别出的最相似候选人。 */
    Candidates: Candidate[];
  }

  /** 需要修改的人员库自定义描述字段key-value */
  interface GroupExDescriptionInfo {
    /** 人员库自定义描述字段Index，从0开始 */
    GroupExDescriptionIndex: number | null;
    /** 需要更新的人员库自定义描述字段内容 */
    GroupExDescription: string;
  }

  /** 返回的人员库信息 */
  interface GroupInfo {
    /** 人员库名称 */
    GroupName: string;
    /** 人员库ID */
    GroupId: string;
    /** 人员库自定义描述字段 */
    GroupExDescriptions: string[] | null;
    /** 人员库信息备注 */
    Tag: string | null;
    /** 人脸识别所用的算法模型版本。 */
    FaceModelVersion: string | null;
    /** Group的创建时间和日期 CreationTimestamp。CreationTimestamp 的值是自 Unix 纪元时间到Group创建时间的毫秒数。 Unix 纪元时间是 1970 年 1 月 1 日星期四，协调世界时 (UTC) 00:00:00。有关更多信息，请参阅 Unix 时间。 */
    CreationTimestamp: number | null;
  }

  /** 头发信息 */
  interface Hair {
    /** 头发长度信息。AttributeItem对应的Type为 —— 0：光头，1：短发，2：中发，3：长发，4：绑发。 */
    Length: AttributeItem;
    /** 刘海信息。AttributeItem对应的Type为 —— 0：无刘海，1：有刘海。 */
    Bang: AttributeItem;
    /** 头发颜色信息。AttributeItem对应的Type为 —— 0：黑色，1：金色，2：棕色，3：灰白色。 */
    Color: AttributeItem;
  }

  /** 帽子信息 */
  interface Hat {
    /** 帽子佩戴状态信息。AttributeItem对应的Type为 —— 0：不戴帽子，1：普通帽子，2：头盔，3：保安帽。 */
    Style: AttributeItem;
    /** 帽子颜色。AttributeItem对应的Type为 —— 0：不戴帽子，1：红色系，2：黄色系，3：蓝色系，4：黑色系，5：灰白色系，6：混色系子。 */
    Color: AttributeItem;
  }

  /** 姿态信息 */
  interface HeadPose {
    /** 上下偏移[-30,30]。 */
    Pitch: number;
    /** 左右偏移[-30,30]。 */
    Yaw: number;
    /** 平面旋转[-180,180]。 */
    Roll: number;
  }

  /** 嘴巴信息。 */
  interface Mouth {
    /** 是否张嘴信息。AttributeItem对应的Type为 —— 0：不张嘴，1：张嘴。 */
    MouthOpen: AttributeItem;
  }

  /** 需要修改的人员描述字段内容，key-value */
  interface PersonExDescriptionInfo {
    /** 人员描述字段Index，从0开始 */
    PersonExDescriptionIndex: number | null;
    /** 需要更新的人员描述字段内容 */
    PersonExDescription: string;
  }

  /** 包含此人员的人员库及描述字段内容列表 */
  interface PersonGroupInfo {
    /** 包含此人员的人员库ID */
    GroupId: string;
    /** 人员描述字段内容 */
    PersonExDescriptions: string[];
  }

  /** 返回的人员信息 */
  interface PersonInfo {
    /** 人员名称 */
    PersonName: string;
    /** 人员Id */
    PersonId: string;
    /** 人员性别 */
    Gender: number;
    /** 人员描述字段内容 */
    PersonExDescriptions: string[];
    /** 包含的人脸照片列表 */
    FaceIds: string[];
    /** 人员的创建时间和日期 CreationTimestamp。CreationTimestamp 的值是自 Unix 纪元时间到Group创建时间的毫秒数。 Unix 纪元时间是 1970 年 1 月 1 日星期四，协调世界时 (UTC) 00:00:00。有关更多信息，请参阅 Unix 时间。 */
    CreationTimestamp: number;
  }

  /** 坐标 */
  interface Point {
    /** x坐标 */
    X: number;
    /** Y坐标 */
    Y: number;
  }

  /** 人脸的识别结果 */
  interface Result {
    /** 识别出的最相似候选人 */
    Candidates: Candidate[];
    /** 检测出的人脸框位置 */
    FaceRect: FaceRect;
    /** 检测出的人脸图片状态返回码。0 表示正常。 -1601代表不符合图片质量控制要求，此时Candidate内容为空。 */
    RetCode: number;
  }

  /** 识别结果。 */
  interface ResultsReturnsByGroup {
    /** 检测出的人脸框位置。 */
    FaceRect: FaceRect;
    /** 识别结果。 */
    GroupCandidates: GroupCandidate[];
    /** 检测出的人脸图片状态返回码。0 表示正常。 -1601代表不符合图片质量控制要求，此时Candidate内容为空。 */
    RetCode: number;
  }

  /** 人员库升级任务信息 */
  interface UpgradeJobInfo {
    /** 人员库升级任务ID，用于查询、获取升级的进度和结果。 */
    JobId: string;
    /** 人员库ID。 */
    GroupId: string;
    /** 当前算法模型版本。 */
    FromFaceModelVersion: string;
    /** 目标算法模型版本。 */
    ToFaceModelVersion: string;
    /** 升级起始时间。 StartTime的值是自 Unix 纪元时间到Group创建时间的毫秒数。 Unix 纪元时间是 1970 年 1 月 1 日星期四，协调世界时 (UTC) 00:00:00。 有关更多信息，请参阅 Unix 时间。 */
    StartTime: number;
    /** 0表示升级中，1表示升级完毕，2表示回滚完毕。 */
    Status: number;
  }

  interface AnalyzeDenseLandmarksRequest {
    /** 检测模式。0 为检测所有出现的人脸， 1 为检测面积最大的人脸。 默认为 0。 最多返回 5 张人脸的五官定位（人脸关键点）具体信息。 */
    Mode?: number;
    /** 图片 base64 数据，base64 编码后大小不可超过5M。jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。 支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。 */
    Image?: string;
    /** 图片的 Url 。对应图片 base64 编码后大小不可超过5M。 jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。Url、Image必须提供一个，如果都提供，只使用 Url。 图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。 非腾讯云存储的Url速度和稳定性可能受一定影响。 支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。 */
    Url?: string;
    /** 人脸识别服务所用的算法模型版本。本接口仅支持 “3.0“ 输入。 */
    FaceModelVersion?: string;
    /** 是否开启图片旋转识别支持。0为不开启，1为开启。默认为0。本参数的作用为，当图片中的人脸被旋转且图片没有exif信息时，如果不开启图片旋转识别支持则无法正确检测、识别图片中的人脸。若您确认图片包含exif信息或者您确认输入图中人脸不会出现被旋转情况，请不要开启本参数。开启后，整体耗时将可能增加数百毫秒。 */
    NeedRotateDetection?: number;
  }

  interface AnalyzeDenseLandmarksResponse {
    /** 请求的图片宽度。 */
    ImageWidth?: number;
    /** 请求的图片高度。 */
    ImageHeight?: number;
    /** 稠密人脸关键点具体信息。 */
    DenseFaceShapeSet?: DenseFaceShape[];
    /** 人脸识别服务所用的算法模型版本。本接口仅支持 “3.0“ 输入。 */
    FaceModelVersion?: string;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface AnalyzeFaceRequest {
    /** 检测模式。0 为检测所有出现的人脸， 1 为检测面积最大的人脸。默认为 0。最多返回 10 张人脸的五官定位（人脸关键点）具体信息。 */
    Mode?: number;
    /** 图片 base64 数据，base64 编码后大小不可超过5M。支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。 */
    Image?: string;
    /** 图片的 Url 。对应图片 base64 编码后大小不可超过5M。Url、Image必须提供一个，如果都提供，只使用 Url。 图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。 非腾讯云存储的Url速度和稳定性可能受一定影响。支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。 */
    Url?: string;
    /** 人脸识别服务所用的算法模型版本。目前入参支持 “2.0”和“3.0“ 两个输入。2020年4月2日开始，默认为“3.0”，之前使用过本接口的账号若未填写本参数默认为“2.0”。2020年11月26日后开通服务的账号仅支持输入“3.0”。不同算法模型版本对应的人脸识别算法不同，新版本的整体效果会优于旧版本，建议使用“3.0”版本。 */
    FaceModelVersion?: string;
    /** 是否开启图片旋转识别支持。0为不开启，1为开启。默认为0。本参数的作用为，当图片中的人脸被旋转且图片没有exif信息时，如果不开启图片旋转识别支持则无法正确检测、识别图片中的人脸。若您确认图片包含exif信息或者您确认输入图中人脸不会出现被旋转情况，请不要开启本参数。开启后，整体耗时将可能增加数百毫秒。 */
    NeedRotateDetection?: number;
  }

  interface AnalyzeFaceResponse {
    /** 请求的图片宽度。 */
    ImageWidth: number;
    /** 请求的图片高度。 */
    ImageHeight: number;
    /** 五官定位（人脸关键点）具体信息。 */
    FaceShapeSet: FaceShape[];
    /** 人脸识别所用的算法模型版本。 */
    FaceModelVersion: string;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface CompareFaceRequest {
    /** A 图片 base64 数据，base64 编码后大小不可超过5M。若图片中包含多张人脸，只选取其中人脸面积最大的人脸。支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。 */
    ImageA?: string;
    /** B 图片 base64 数据，base64 编码后大小不可超过5M。若图片中包含多张人脸，只选取其中人脸面积最大的人脸。支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。 */
    ImageB?: string;
    /** A 图片的 Url ，对应图片 base64 编码后大小不可超过5M。A 图片的 Url、Image必须提供一个，如果都提供，只使用 Url。 图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。 非腾讯云存储的Url速度和稳定性可能受一定影响。若图片中包含多张人脸，只选取其中人脸面积最大的人脸。支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。 */
    UrlA?: string;
    /** B 图片的 Url ，对应图片 base64 编码后大小不可超过5M。B 图片的 Url、Image必须提供一个，如果都提供，只使用 Url。 图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。 非腾讯云存储的Url速度和稳定性可能受一定影响。若图片中包含多张人脸，只选取其中人脸面积最大的人脸。支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。 */
    UrlB?: string;
    /** 人脸识别服务所用的算法模型版本。目前入参支持 “2.0”和“3.0“ 两个输入。2020年4月2日开始，默认为“3.0”，之前使用过本接口的账号若未填写本参数默认为“2.0”。2020年11月26日后开通服务的账号仅支持输入“3.0”。不同算法模型版本对应的人脸识别算法不同，新版本的整体效果会优于旧版本，建议使用“3.0”版本。 */
    FaceModelVersion?: string;
    /** 图片质量控制。 0: 不进行控制； 1:较低的质量要求，图像存在非常模糊，眼睛鼻子嘴巴遮挡至少其中一种或多种的情况； 2: 一般的质量要求，图像存在偏亮，偏暗，模糊或一般模糊，眉毛遮挡，脸颊遮挡，下巴遮挡，至少其中三种的情况； 3: 较高的质量要求，图像存在偏亮，偏暗，一般模糊，眉毛遮挡，脸颊遮挡，下巴遮挡，其中一到两种的情况； 4: 很高的质量要求，各个维度均为最好或最多在某一维度上存在轻微问题； 默认 0。 若图片质量不满足要求，则返回结果中会提示图片质量检测不符要求。 */
    QualityControl?: number;
    /** 是否开启图片旋转识别支持。0为不开启，1为开启。默认为0。本参数的作用为，当图片中的人脸被旋转且图片没有exif信息时，如果不开启图片旋转识别支持则无法正确检测、识别图片中的人脸。若您确认图片包含exif信息或者您确认输入图中人脸不会出现被旋转情况，请不要开启本参数。开启后，整体耗时将可能增加数百毫秒。 */
    NeedRotateDetection?: number;
  }

  interface CompareFaceResponse {
    /** 两张图片中人脸的相似度分数。不同算法版本返回的相似度分数不同。 若需要验证两张图片中人脸是否为同一人，3.0版本误识率千分之一对应分数为40分，误识率万分之一对应分数为50分，误识率十万分之一对应分数为60分。 一般超过50分则可认定为同一人。 2.0版本误识率千分之一对应分数为70分，误识率万分之一对应分数为80分，误识率十万分之一对应分数为90分。 一般超过80分则可认定为同一人。 若需要验证两张图片中的人脸是否为同一人，建议使用人脸验证接口。 */
    Score: number;
    /** 人脸识别所用的算法模型版本。 */
    FaceModelVersion: string;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface CopyPersonRequest {
    /** 人员ID */
    PersonId: string;
    /** 待加入的人员库列表 */
    GroupIds: string[];
  }

  interface CopyPersonResponse {
    /** 成功加入的人员库数量 */
    SucGroupNum?: number;
    /** 成功加入的人员库列表 */
    SucGroupIds?: string[];
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface CreateFaceRequest {
    /** 人员ID。 */
    PersonId: string;
    /** 图片 base64 数据，base64 编码后大小不可超过5M。人员人脸总数量不可超过5张。若图片中包含多张人脸，只选取其中人脸面积最大的人脸。支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。 */
    Images?: string[];
    /** 图片的 Url 。对应图片 base64 编码后大小不可超过5M。Url、Image必须提供一个，如果都提供，只使用 Url。 图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。 非腾讯云存储的Url速度和稳定性可能受一定影响。支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。人员人脸总数量不可超过5张。若图片中包含多张人脸，只选取其中人脸面积最大的人脸。 */
    Urls?: string[];
    /** 只有和该人员已有的人脸相似度超过FaceMatchThreshold值的人脸，才能增加人脸成功。 默认值60分。取值范围[0,100] 。 */
    FaceMatchThreshold?: number;
    /** 图片质量控制。 0: 不进行控制； 1:较低的质量要求，图像存在非常模糊，眼睛鼻子嘴巴遮挡至少其中一种或多种的情况； 2: 一般的质量要求，图像存在偏亮，偏暗，模糊或一般模糊，眉毛遮挡，脸颊遮挡，下巴遮挡，至少其中三种的情况； 3: 较高的质量要求，图像存在偏亮，偏暗，一般模糊，眉毛遮挡，脸颊遮挡，下巴遮挡，其中一到两种的情况； 4: 很高的质量要求，各个维度均为最好或最多在某一维度上存在轻微问题； 默认 0。 若图片质量不满足要求，则返回结果中会提示图片质量检测不符要求。 */
    QualityControl?: number;
    /** 是否开启图片旋转识别支持。0为不开启，1为开启。默认为0。本参数的作用为，当图片中的人脸被旋转且图片没有exif信息时，如果不开启图片旋转识别支持则无法正确检测、识别图片中的人脸。若您确认图片包含exif信息或者您确认输入图中人脸不会出现被旋转情况，请不要开启本参数。开启后，整体耗时将可能增加数百毫秒。 */
    NeedRotateDetection?: number;
  }

  interface CreateFaceResponse {
    /** 加入成功的人脸数量 */
    SucFaceNum: number;
    /** 加入成功的人脸ID列表 */
    SucFaceIds: string[];
    /** 每张人脸图片添加结果，-1101 代表未检测到人脸，-1102 代表图片解码失败， -1601代表不符合图片质量控制要求, -1604 代表人脸相似度没有超过FaceMatchThreshold。 其他非 0 值代表算法服务异常。 RetCode的顺序和入参中 Images 或 Urls 的顺序一致。 */
    RetCode: number[];
    /** 加入成功的人脸索引。索引顺序和入参中 Images 或 Urls 的顺序一致。 例， Urls 中 有 3 个 url，第二个 url 失败，则 SucIndexes 值为 [0,2] 。 */
    SucIndexes: number[];
    /** 加入成功的人脸框位置。顺序和入参中 Images 或 Urls 的顺序一致。 */
    SucFaceRects: FaceRect[];
    /** 人脸识别所用的算法模型版本。 */
    FaceModelVersion: string;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface CreateGroupRequest {
    /** 人员库名称，[1,60]个字符，可修改，不可重复。 */
    GroupName: string;
    /** 人员库 ID，不可修改，不可重复。支持英文、数字、-%@#&_，长度限制64B。 */
    GroupId: string;
    /** 人员库自定义描述字段，用于描述人员库中人员属性，该人员库下所有人员将拥有此描述字段。 最多可以创建5个。 每个自定义描述字段支持[1,30]个字符。 在同一人员库中自定义描述字段不可重复。 例： 设置某人员库“自定义描述字段”为["学号","工号","手机号"]， 则该人员库下所有人员将拥有名为“学号”、“工号”、“手机号”的描述字段， 可在对应人员描述字段中填写内容，登记该人员的学号、工号、手机号等信息。 */
    GroupExDescriptions?: string[];
    /** 人员库信息备注，[0，40]个字符。 */
    Tag?: string;
    /** 人脸识别服务所用的算法模型版本。目前入参支持 “2.0”和“3.0“ 两个输入。2020年4月2日开始，默认为“3.0”，之前使用过本接口的账号若未填写本参数默认为“2.0”。2020年11月26日后开通服务的账号仅支持输入“3.0”。不同算法模型版本对应的人脸识别算法不同，新版本的整体效果会优于旧版本，建议使用“3.0”版本。 */
    FaceModelVersion?: string;
  }

  interface CreateGroupResponse {
    /** 人脸识别所用的算法模型版本。 */
    FaceModelVersion: string;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface CreatePersonRequest {
    /** 待加入的人员库ID。 */
    GroupId: string;
    /** 人员名称。[1，60]个字符，可修改，可重复。 */
    PersonName: string;
    /** 人员ID，单个腾讯云账号下不可修改，不可重复。支持英文、数字、-%@#&_，长度限制64B。 */
    PersonId: string;
    /** 0代表未填写，1代表男性，2代表女性。 */
    Gender?: number;
    /** 人员描述字段内容，key-value。[0，60]个字符，可修改，可重复。 */
    PersonExDescriptionInfos?: PersonExDescriptionInfo[];
    /** 图片 base64 数据，base64 编码后大小不可超过5M。支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。 */
    Image?: string;
    /** 图片的 Url 。对应图片 base64 编码后大小不可超过5M。Url、Image必须提供一个，如果都提供，只使用 Url。 图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。 非腾讯云存储的Url速度和稳定性可能受一定影响。支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。 */
    Url?: string;
    /** 此参数用于控制判断 Image 或 Url 中图片包含的人脸，是否在人员库中已有疑似的同一人。 如果判断为已有相同人在人员库中，则不会创建新的人员，返回疑似同一人的人员信息。 如果判断没有，则完成创建人员。 0: 不进行判断，无论是否有疑似同一人在库中均完成入库； 1:较低的同一人判断要求（百一误识别率）； 2: 一般的同一人判断要求（千一误识别率）； 3: 较高的同一人判断要求（万一误识别率）； 4: 很高的同一人判断要求（十万一误识别率）。 默认 0。 注： 要求越高，则疑似同一人的概率越小。不同要求对应的误识别率仅为参考值，您可以根据实际情况调整。 */
    UniquePersonControl?: number;
    /** 图片质量控制。 0: 不进行控制； 1:较低的质量要求，图像存在非常模糊，眼睛鼻子嘴巴遮挡至少其中一种或多种的情况； 2: 一般的质量要求，图像存在偏亮，偏暗，模糊或一般模糊，眉毛遮挡，脸颊遮挡，下巴遮挡，至少其中三种的情况； 3: 较高的质量要求，图像存在偏亮，偏暗，一般模糊，眉毛遮挡，脸颊遮挡，下巴遮挡，其中一到两种的情况； 4: 很高的质量要求，各个维度均为最好或最多在某一维度上存在轻微问题； 默认 0。 若图片质量不满足要求，则返回结果中会提示图片质量检测不符要求。 */
    QualityControl?: number;
    /** 是否开启图片旋转识别支持。0为不开启，1为开启。默认为0。本参数的作用为，当图片中的人脸被旋转且图片没有exif信息时，如果不开启图片旋转识别支持则无法正确检测、识别图片中的人脸。若您确认图片包含exif信息或者您确认输入图中人脸不会出现被旋转情况，请不要开启本参数。开启后，整体耗时将可能增加数百毫秒。 */
    NeedRotateDetection?: number;
  }

  interface CreatePersonResponse {
    /** 人脸图片唯一标识。 */
    FaceId?: string;
    /** 检测出的人脸框的位置。 */
    FaceRect?: FaceRect | null;
    /** 疑似同一人的PersonId。 当 UniquePersonControl 参数不为0且人员库中有疑似的同一人，此参数才有意义。 */
    SimilarPersonId?: string;
    /** 人脸识别所用的算法模型版本。 */
    FaceModelVersion?: string;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DeleteFaceRequest {
    /** 人员ID */
    PersonId: string;
    /** 待删除的人脸ID列表 */
    FaceIds: string[];
  }

  interface DeleteFaceResponse {
    /** 删除成功的人脸数量 */
    SucDeletedNum?: number;
    /** 删除成功的人脸ID列表 */
    SucFaceIds?: string[];
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DeleteGroupRequest {
    /** 人员库ID。 */
    GroupId: string;
  }

  interface DeleteGroupResponse {
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DeletePersonFromGroupRequest {
    /** 人员ID */
    PersonId: string;
    /** 人员库ID */
    GroupId: string;
  }

  interface DeletePersonFromGroupResponse {
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DeletePersonRequest {
    /** 人员ID */
    PersonId: string;
  }

  interface DeletePersonResponse {
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DetectFaceAttributesRequest {
    /** 最多处理的人脸数目。 默认值为1（仅检测图片中面积最大的那张人脸），最大值为120。 此参数用于控制处理待检测图片中的人脸个数，值越小，处理速度越快。 */
    MaxFaceNum?: number;
    /** 图片 base64 数据，base64 编码后大小不可超过5M。 jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。 */
    Image?: string;
    /** 图片的 Url 。 对应图片 base64 编码后大小不可超过5M。jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。 Url、Image必须提供一个，如果都提供，只使用 Url。 图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。 非腾讯云存储的Url速度和稳定性可能受一定影响。 支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。 */
    Url?: string;
    /** 是否返回年龄、性别、情绪等属性。 合法值为（大小写不敏感）：None、Age、Beauty、Emotion、Eye、Eyebrow、 Gender、Hair、Hat、Headpose、Mask、Mouth、Moustache、Nose、Shape、Skin、Smile。 None为不需要返回。默认为 None。 需要将属性组成一个用逗号分隔的字符串，属性之间的顺序没有要求。 关于各属性的详细描述，参见下文出参。 最多返回面积最大的 5 张人脸属性信息，超过 5 张人脸（第 6 张及以后的人脸）的 AttributesInfo 不具备参考意义。 */
    FaceAttributesType?: string;
    /** 是否开启图片旋转识别支持。0为不开启，1为开启。默认为0。本参数的作用为，当图片中的人脸被旋转且图片没有exif信息时，如果不开启图片旋转识别支持则无法正确检测、识别图片中的人脸。若您确认图片包含exif信息或者您确认输入图中人脸不会出现被旋转情况，请不要开启本参数。开启后，整体耗时将可能增加数百毫秒。 */
    NeedRotateDetection?: number;
    /** 人脸识别服务所用的算法模型版本。本接口仅支持“3.0”输入 */
    FaceModelVersion?: string;
  }

  interface DetectFaceAttributesResponse {
    /** 请求的图片宽度。 */
    ImageWidth: number;
    /** 请求的图片高度。 */
    ImageHeight: number;
    /** 人脸信息列表。 */
    FaceDetailInfos: FaceDetailInfo[];
    /** 人脸识别所用的算法模型版本。 */
    FaceModelVersion: string;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DetectFaceRequest {
    /** 最多处理的人脸数目。默认值为1（仅检测图片中面积最大的那张人脸），最大值为120。 此参数用于控制处理待检测图片中的人脸个数，值越小，处理速度越快。 */
    MaxFaceNum?: number;
    /** 人脸长和宽的最小尺寸，单位为像素。默认为34。建议不低于34。低于MinFaceSize值的人脸不会被检测。 */
    MinFaceSize?: number;
    /** 图片 base64 数据，base64 编码后大小不可超过5M。支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。 */
    Image?: string;
    /** 图片的 Url 。对应图片 base64 编码后大小不可超过5M。Url、Image必须提供一个，如果都提供，只使用 Url。 图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。 非腾讯云存储的Url速度和稳定性可能受一定影响。支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。 */
    Url?: string;
    /** 是否需要返回人脸属性信息（FaceAttributesInfo）。0 为不需要返回，1 为需要返回。默认为 0。 非 1 值均视为不需要返回，此时 FaceAttributesInfo 不具备参考意义。 最多返回面积最大的 5 张人脸属性信息，超过 5 张人脸（第 6 张及以后的人脸）的 FaceAttributesInfo 不具备参考意义。 提取人脸属性信息较为耗时，如不需要人脸属性信息，建议关闭此项功能，加快人脸检测速度。 */
    NeedFaceAttributes?: number;
    /** 是否开启质量检测。0 为关闭，1 为开启。默认为 0。 非 1 值均视为不进行质量检测。最多返回面积最大的 30 张人脸质量分信息，超过 30 张人脸（第 31 张及以后的人脸）的 FaceQualityInfo不具备参考意义。 建议：人脸入库操作建议开启此功能。 */
    NeedQualityDetection?: number;
    /** 人脸识别服务所用的算法模型版本。目前入参支持 “2.0”和“3.0“ 两个输入。 2020年4月2日开始，默认为“3.0”，之前使用过本接口的账号若未填写本参数默认为“2.0”。 不同算法模型版本对应的人脸识别算法不同，新版本的整体效果会优于旧版本，建议使用“3.0”版本。 */
    FaceModelVersion?: string;
    /** 是否开启图片旋转识别支持。0为不开启，1为开启。默认为0。本参数的作用为，当图片中的人脸被旋转且图片没有exif信息时，如果不开启图片旋转识别支持则无法正确检测、识别图片中的人脸。若您确认图片包含exif信息或者您确认输入图中人脸不会出现被旋转情况，请不要开启本参数。开启后，整体耗时将可能增加数百毫秒。 */
    NeedRotateDetection?: number;
  }

  interface DetectFaceResponse {
    /** 请求的图片宽度。 */
    ImageWidth: number;
    /** 请求的图片高度。 */
    ImageHeight: number;
    /** 人脸信息列表。包含人脸坐标信息、属性信息（若需要）、质量分信息（若需要）。 */
    FaceInfos: FaceInfo[];
    /** 人脸识别服务所用的算法模型版本。目前入参支持 “2.0”和“3.0“ 两个输入。2020年4月2日开始，默认为“3.0”，之前使用过本接口的账号若未填写本参数默认为“2.0”。2020年11月26日后开通服务的账号仅支持输入“3.0”。不同算法模型版本对应的人脸识别算法不同，新版本的整体效果会优于旧版本，建议使用“3.0”版本。 */
    FaceModelVersion: string;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface DetectLiveFaceRequest {
    /** 图片 base64 数据，base64 编码后大小不可超过5M（图片的宽高比请接近3:4，不符合宽高比的图片返回的分值不具备参考意义）。支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。 */
    Image?: string;
    /** 图片的 Url 。对应图片 base64 编码后大小不可超过5M。Url、Image必须提供一个，如果都提供，只使用 Url。 （图片的宽高比请接近 3:4，不符合宽高比的图片返回的分值不具备参考意义） 图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。 非腾讯云存储的Url速度和稳定性可能受一定影响。支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。 */
    Url?: string;
    /** 人脸识别服务所用的算法模型版本。目前入参支持 “2.0”和“3.0“ 两个输入。2020年4月2日开始，默认为“3.0”，之前使用过本接口的账号若未填写本参数默认为“2.0”。2020年11月26日后开通服务的账号仅支持输入“3.0”。不同算法模型版本对应的人脸识别算法不同，新版本的整体效果会优于旧版本，建议使用“3.0”版本。 */
    FaceModelVersion?: string;
  }

  interface DetectLiveFaceResponse {
    /** 活体打分，取值范围 [0,100]，分数一般落于[80, 100]区间内，0分也为常见值。推荐相大于 87 时可判断为活体。可根据具体场景自行调整阈值。本字段当且仅当FaceModelVersion为2.0时才具备参考意义。 */
    Score: number;
    /** 人脸识别所用的算法模型版本。 */
    FaceModelVersion: string;
    /** 活体检测是否通过。本字段只有FaceModelVersion为3.0时才具备参考意义。 */
    IsLiveness: boolean;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface GetGroupInfoRequest {
    /** 人员库 ID。 */
    GroupId: string;
  }

  interface GetGroupInfoResponse {
    /** 人员库名称 */
    GroupName?: string;
    /** 人员库ID */
    GroupId?: string;
    /** 人员库自定义描述字段 */
    GroupExDescriptions?: string[];
    /** 人员库信息备注 */
    Tag?: string;
    /** 人脸识别所用的算法模型版本。 */
    FaceModelVersion?: string;
    /** Group的创建时间和日期 CreationTimestamp。CreationTimestamp 的值是自 Unix 纪元时间到Group创建时间的毫秒数。 */
    CreationTimestamp?: number;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface GetGroupListRequest {
    /** 起始序号，默认值为0 */
    Offset?: number;
    /** 返回数量，默认值为10，最大值为1000 */
    Limit?: number;
  }

  interface GetGroupListResponse {
    /** 返回的人员库信息 */
    GroupInfos: GroupInfo[];
    /** 人员库总数量 */
    GroupNum: number | null;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface GetPersonBaseInfoRequest {
    /** 人员ID */
    PersonId: string;
  }

  interface GetPersonBaseInfoResponse {
    /** 人员名称 */
    PersonName?: string;
    /** 人员性别 */
    Gender?: number;
    /** 包含的人脸 ID 列表 */
    FaceIds?: string[];
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface GetPersonGroupInfoRequest {
    /** 人员ID */
    PersonId: string;
    /** 起始序号，默认值为0 */
    Offset?: number;
    /** 返回数量，默认值为10，最大值为100 */
    Limit?: number;
  }

  interface GetPersonGroupInfoResponse {
    /** 包含此人员的人员库及描述字段内容列表 */
    PersonGroupInfos?: PersonGroupInfo[];
    /** 人员库总数量 */
    GroupNum?: number | null;
    /** 人脸识别服务所用的算法模型版本。 */
    FaceModelVersion?: string | null;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface GetPersonListNumRequest {
    /** 人员库ID */
    GroupId: string;
  }

  interface GetPersonListNumResponse {
    /** 人员数量 */
    PersonNum?: number;
    /** 人脸数量 */
    FaceNum?: number;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface GetPersonListRequest {
    /** 人员库ID */
    GroupId: string;
    /** 起始序号，默认值为0 */
    Offset?: number;
    /** 返回数量，默认值为10，最大值为1000 */
    Limit?: number;
  }

  interface GetPersonListResponse {
    /** 返回的人员信息 */
    PersonInfos?: PersonInfo[];
    /** 该人员库的人员数量 */
    PersonNum?: number | null;
    /** 该人员库的人脸数量 */
    FaceNum?: number | null;
    /** 人脸识别所用的算法模型版本。 */
    FaceModelVersion?: string | null;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface GetUpgradeGroupFaceModelVersionJobListRequest {
    /** 起始序号，默认值为0。 */
    Offset?: number;
    /** 返回数量，默认值为10，最大值为1000。 */
    Limit?: number;
  }

  interface GetUpgradeGroupFaceModelVersionJobListResponse {
    /** 人员库升级任务信息列表。 */
    JobInfos?: UpgradeJobInfo[];
    /** 升级任务总数量。 */
    JobNum?: number;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface GetUpgradeGroupFaceModelVersionResultRequest {
    /** 升级任务ID，用于查询、获取人员库升级的进度和结果。 */
    JobId: string;
  }

  interface GetUpgradeGroupFaceModelVersionResultResponse {
    /** 人员升级任务预估结束时间。 StartTimestamp的值是自 Unix 纪元时间到人员查重任务预估结束的毫秒数。 Unix 纪元时间是 1970 年 1 月 1 日星期四，协调世界时 (UTC) 00:00:00。 如果为0表示这个任务已经执行完毕。 */
    EndTimestamp: number;
    /** 升级任务完成进度。取值[0.0，100.0]。 */
    Progress: number;
    /** 0表示升级中，1表示升级完毕，2表示回滚完毕。 */
    Status: number;
    /** 升级起始时间。 StartTime的值是自 Unix 纪元时间到Group创建时间的毫秒数。 Unix 纪元时间是 1970 年 1 月 1 日星期四，协调世界时 (UTC) 00:00:00。 有关更多信息，请参阅 Unix 时间。 */
    StartTime: number;
    /** 当前算法模型版本。 */
    FromFaceModelVersion: string;
    /** 目标算法模型版本。 */
    ToFaceModelVersion: string;
    /** 人员库ID。 */
    GroupId: string;
    /** 无法升级的人脸Id信息，文件格式为json。半小时有效 */
    FailedFacesUrl: string;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface ModifyGroupRequest {
    /** 人员库ID */
    GroupId: string;
    /** 人员库名称 */
    GroupName?: string;
    /** 需要修改的人员库自定义描述字段，key-value */
    GroupExDescriptionInfos?: GroupExDescriptionInfo[];
    /** 人员库信息备注 */
    Tag?: string;
  }

  interface ModifyGroupResponse {
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface ModifyPersonBaseInfoRequest {
    /** 人员ID */
    PersonId: string;
    /** 需要修改的人员名称 */
    PersonName?: string;
    /** 需要修改的人员性别 */
    Gender?: number;
  }

  interface ModifyPersonBaseInfoResponse {
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface ModifyPersonGroupInfoRequest {
    /** 人员库ID */
    GroupId: string;
    /** 人员ID */
    PersonId: string;
    /** 需要修改的人员描述字段内容，key-value */
    PersonExDescriptionInfos: PersonExDescriptionInfo[];
  }

  interface ModifyPersonGroupInfoResponse {
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface RevertGroupFaceModelVersionRequest {
    /** 需要回滚的升级任务ID。 */
    JobId: string;
  }

  interface RevertGroupFaceModelVersionResponse {
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface SearchFacesRequest {
    /** 希望搜索的人员库列表，上限100个。 */
    GroupIds: string[];
    /** 图片 base64 数据，base64 编码后大小不可超过5M。支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。 */
    Image?: string;
    /** 图片的 Url 。对应图片 base64 编码后大小不可超过5M。Url、Image必须提供一个，如果都提供，只使用 Url。 图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。 非腾讯云存储的Url速度和稳定性可能受一定影响。支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。 */
    Url?: string;
    /** 最多识别的人脸数目。默认值为1（仅检测图片中面积最大的那张人脸），最大值为10。 MaxFaceNum用于，当输入的待识别图片包含多张人脸时，设定要搜索的人脸的数量。 例：输入的Image或Url中的图片包含多张人脸，设MaxFaceNum=5，则会识别图片中面积最大的5张人脸。 */
    MaxFaceNum?: number;
    /** 人脸长和宽的最小尺寸，单位为像素。默认为34。低于34的人脸图片无法被识别。建议设置为80。 */
    MinFaceSize?: number;
    /** 单张被识别的人脸返回的最相似人员数量。默认值为5，最大值为100。 例，设MaxFaceNum为1，MaxPersonNum为8，则返回Top8相似的人员信息。值越大，需要处理的时间越长。建议不要超过10。 */
    MaxPersonNum?: number;
    /** 是否返回人员具体信息。0 为关闭，1 为开启。默认为 0。其他非0非1值默认为0 */
    NeedPersonInfo?: number;
    /** 图片质量控制。 0: 不进行控制； 1:较低的质量要求，图像存在非常模糊，眼睛鼻子嘴巴遮挡至少其中一种或多种的情况； 2: 一般的质量要求，图像存在偏亮，偏暗，模糊或一般模糊，眉毛遮挡，脸颊遮挡，下巴遮挡，至少其中三种的情况； 3: 较高的质量要求，图像存在偏亮，偏暗，一般模糊，眉毛遮挡，脸颊遮挡，下巴遮挡，其中一到两种的情况； 4: 很高的质量要求，各个维度均为最好或最多在某一维度上存在轻微问题； 默认 0。 若图片质量不满足要求，则返回结果中会提示图片质量检测不符要求。 */
    QualityControl?: number;
    /** 出参Score中，只有超过FaceMatchThreshold值的结果才会返回。默认为0。 */
    FaceMatchThreshold?: number;
    /** 是否开启图片旋转识别支持。0为不开启，1为开启。默认为0。本参数的作用为，当图片中的人脸被旋转且图片没有exif信息时，如果不开启图片旋转识别支持则无法正确检测、识别图片中的人脸。若您确认图片包含exif信息或者您确认输入图中人脸不会出现被旋转情况，请不要开启本参数。开启后，整体耗时将可能增加数百毫秒。 */
    NeedRotateDetection?: number;
  }

  interface SearchFacesResponse {
    /** 识别结果。 */
    Results: Result[];
    /** 搜索的人员库中包含的人脸数。 */
    FaceNum: number;
    /** 人脸识别所用的算法模型版本。 */
    FaceModelVersion: string;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface SearchFacesReturnsByGroupRequest {
    /** 希望搜索的人员库列表，上限60个。 */
    GroupIds: string[];
    /** 图片 base64 数据，base64 编码后大小不可超过5M。支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。 */
    Image?: string;
    /** 图片的 Url 。对应图片 base64 编码后大小不可超过5M。Url、Image必须提供一个，如果都提供，只使用 Url。图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的Url速度和稳定性可能受一定影响。支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。 */
    Url?: string;
    /** 最多识别的人脸数目。默认值为1（仅检测图片中面积最大的那张人脸），最大值为10。MaxFaceNum用于，当输入的待识别图片包含多张人脸时，设定要搜索的人脸的数量。例：输入的Image或Url中的图片包含多张人脸，设MaxFaceNum=5，则会识别图片中面积最大的5张人脸。 */
    MaxFaceNum?: number;
    /** 人脸长和宽的最小尺寸，单位为像素。默认为34。低于34将影响搜索精度。建议设置为80。 */
    MinFaceSize?: number;
    /** 被检测到的人脸，对应最多返回的最相似人员数目。默认值为5，最大值为10。 例，设MaxFaceNum为3，MaxPersonNumPerGroup为5，GroupIds长度为3，则最多可能返回3*5*3=45个人员。 */
    MaxPersonNumPerGroup?: number;
    /** 是否返回人员具体信息。0 为关闭，1 为开启。默认为 0。其他非0非1值默认为0 */
    NeedPersonInfo?: number;
    /** 图片质量控制。 0: 不进行控制； 1:较低的质量要求，图像存在非常模糊，眼睛鼻子嘴巴遮挡至少其中一种或多种的情况； 2: 一般的质量要求，图像存在偏亮，偏暗，模糊或一般模糊，眉毛遮挡，脸颊遮挡，下巴遮挡，至少其中三种的情况； 3: 较高的质量要求，图像存在偏亮，偏暗，一般模糊，眉毛遮挡，脸颊遮挡，下巴遮挡，其中一到两种的情况； 4: 很高的质量要求，各个维度均为最好或最多在某一维度上存在轻微问题； 默认 0。 若图片质量不满足要求，则返回结果中会提示图片质量检测不符要求。 */
    QualityControl?: number;
    /** 出参Score中，只有大于等于FaceMatchThreshold值的结果才会返回。默认为0。取值范围[0.0,100.0) 。 */
    FaceMatchThreshold?: number;
    /** 是否开启图片旋转识别支持。0为不开启，1为开启。默认为0。本参数的作用为，当图片中的人脸被旋转且图片没有exif信息时，如果不开启图片旋转识别支持则无法正确检测、识别图片中的人脸。若您确认图片包含exif信息或者您确认输入图中人脸不会出现被旋转情况，请不要开启本参数。开启后，整体耗时将可能增加数百毫秒。 */
    NeedRotateDetection?: number;
  }

  interface SearchFacesReturnsByGroupResponse {
    /** 搜索的人员库中包含的人脸数。 */
    FaceNum: number;
    /** 识别结果。 */
    ResultsReturnsByGroup: ResultsReturnsByGroup[];
    /** 人脸识别所用的算法模型版本。 */
    FaceModelVersion: string;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface SearchPersonsRequest {
    /** 希望搜索的人员库列表，上限100个。 */
    GroupIds: string[];
    /** 图片 base64 数据，base64 编码后大小不可超过5M。若图片中包含多张人脸，只选取其中人脸面积最大的人脸。支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。 */
    Image?: string;
    /** 图片的 Url 。对应图片 base64 编码后大小不可超过5M。Url、Image必须提供一个，如果都提供，只使用 Url。图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的Url速度和稳定性可能受一定影响。支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。 */
    Url?: string;
    /** 最多识别的人脸数目。默认值为1（仅检测图片中面积最大的那张人脸），最大值为10。MaxFaceNum用于，当输入的待识别图片包含多张人脸时，设定要搜索的人脸的数量。例：输入的Image或Url中的图片包含多张人脸，设MaxFaceNum=5，则会识别图片中面积最大的5张人脸。 */
    MaxFaceNum?: number;
    /** 人脸长和宽的最小尺寸，单位为像素。默认为34。低于34将影响搜索精度。建议设置为80。 */
    MinFaceSize?: number;
    /** 单张被识别的人脸返回的最相似人员数量。默认值为5，最大值为100。例，设MaxFaceNum为1，MaxPersonNum为8，则返回Top8相似的人员信息。值越大，需要处理的时间越长。建议不要超过10。 */
    MaxPersonNum?: number;
    /** 图片质量控制。 0: 不进行控制； 1:较低的质量要求，图像存在非常模糊，眼睛鼻子嘴巴遮挡至少其中一种或多种的情况； 2: 一般的质量要求，图像存在偏亮，偏暗，模糊或一般模糊，眉毛遮挡，脸颊遮挡，下巴遮挡，至少其中三种的情况； 3: 较高的质量要求，图像存在偏亮，偏暗，一般模糊，眉毛遮挡，脸颊遮挡，下巴遮挡，其中一到两种的情况； 4: 很高的质量要求，各个维度均为最好或最多在某一维度上存在轻微问题； 默认 0。 若图片质量不满足要求，则返回结果中会提示图片质量检测不符要求。 */
    QualityControl?: number;
    /** 出参Score中，只有大于等于FaceMatchThreshold值的结果才会返回。默认为0。取值范围[0.0,100.0) 。 */
    FaceMatchThreshold?: number;
    /** 是否返回人员具体信息。0 为关闭，1 为开启。默认为 0。其他非0非1值默认为0 */
    NeedPersonInfo?: number;
    /** 是否开启图片旋转识别支持。0为不开启，1为开启。默认为0。本参数的作用为，当图片中的人脸被旋转且图片没有exif信息时，如果不开启图片旋转识别支持则无法正确检测、识别图片中的人脸。若您确认图片包含exif信息或者您确认输入图中人脸不会出现被旋转情况，请不要开启本参数。开启后，整体耗时将可能增加数百毫秒。 */
    NeedRotateDetection?: number;
  }

  interface SearchPersonsResponse {
    /** 识别结果。 */
    Results: Result[];
    /** 搜索的人员库中包含的人员数。若输入图片中所有人脸均不符合质量要求，则返回0。 */
    PersonNum: number;
    /** 人脸识别所用的算法模型版本。 */
    FaceModelVersion: string | null;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface SearchPersonsReturnsByGroupRequest {
    /** 希望搜索的人员库列表，上限60个。 */
    GroupIds: string[];
    /** 图片 base64 数据，base64 编码后大小不可超过5M。支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。 */
    Image?: string;
    /** 图片的 Url 。对应图片 base64 编码后大小不可超过5M。Url、Image必须提供一个，如果都提供，只使用 Url。图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的Url速度和稳定性可能受一定影响。支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。 */
    Url?: string;
    /** 最多识别的人脸数目。默认值为1（仅检测图片中面积最大的那张人脸），最大值为10。MaxFaceNum用于，当输入的待识别图片包含多张人脸时，设定要搜索的人脸的数量。例：输入的Image或Url中的图片包含多张人脸，设MaxFaceNum=5，则会识别图片中面积最大的5张人脸。 */
    MaxFaceNum?: number;
    /** 人脸长和宽的最小尺寸，单位为像素。默认为34。低于34将影响搜索精度。建议设置为80。 */
    MinFaceSize?: number;
    /** 被检测到的人脸，对应最多返回的最相似人员数目。默认值为5，最大值为10。 例，设MaxFaceNum为3，MaxPersonNumPerGroup为5，GroupIds长度为3，则最多可能返回3*5*3=45个人员。 */
    MaxPersonNumPerGroup?: number;
    /** 图片质量控制。 0: 不进行控制； 1:较低的质量要求，图像存在非常模糊，眼睛鼻子嘴巴遮挡至少其中一种或多种的情况； 2: 一般的质量要求，图像存在偏亮，偏暗，模糊或一般模糊，眉毛遮挡，脸颊遮挡，下巴遮挡，至少其中三种的情况； 3: 较高的质量要求，图像存在偏亮，偏暗，一般模糊，眉毛遮挡，脸颊遮挡，下巴遮挡，其中一到两种的情况； 4: 很高的质量要求，各个维度均为最好或最多在某一维度上存在轻微问题； 默认 0。 若图片质量不满足要求，则返回结果中会提示图片质量检测不符要求。 */
    QualityControl?: number;
    /** 出参Score中，只有超过FaceMatchThreshold值的结果才会返回。默认为0。 */
    FaceMatchThreshold?: number;
    /** 是否返回人员具体信息。0 为关闭，1 为开启。默认为 0。其他非0非1值默认为0 */
    NeedPersonInfo?: number;
    /** 是否开启图片旋转识别支持。0为不开启，1为开启。默认为0。本参数的作用为，当图片中的人脸被旋转且图片没有exif信息时，如果不开启图片旋转识别支持则无法正确检测、识别图片中的人脸。若您确认图片包含exif信息或者您确认输入图中人脸不会出现被旋转情况，请不要开启本参数。开启后，整体耗时将可能增加数百毫秒。 */
    NeedRotateDetection?: number;
  }

  interface SearchPersonsReturnsByGroupResponse {
    /** 搜索的人员库中包含的人员数。若输入图片中所有人脸均不符合质量要求，则返回0。 */
    PersonNum?: number;
    /** 识别结果。 */
    ResultsReturnsByGroup?: ResultsReturnsByGroup[];
    /** 人脸识别所用的算法模型版本。 */
    FaceModelVersion?: string;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface UpgradeGroupFaceModelVersionRequest {
    /** 需要升级的人员库ID。 */
    GroupId: string;
    /** 需要升级至的算法模型版本。默认为最新版本。不可逆向升级 */
    FaceModelVersion: string;
  }

  interface UpgradeGroupFaceModelVersionResponse {
    /** 升级任务ID，用于查询、获取升级的进度和结果。 */
    JobId: string;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface VerifyFaceRequest {
    /** 待验证的人员ID。人员ID具体信息请参考人员库管理相关接口。 */
    PersonId: string;
    /** 图片 base64 数据，base64 编码后大小不可超过5M。若图片中包含多张人脸，只选取其中人脸面积最大的人脸。支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。 */
    Image?: string;
    /** 图片的 Url 。对应图片 base64 编码后大小不可超过5M。Url、Image必须提供一个，如果都提供，只使用 Url。 图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。 非腾讯云存储的Url速度和稳定性可能受一定影响。若图片中包含多张人脸，只选取其中人脸面积最大的人脸。支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。 */
    Url?: string;
    /** 图片质量控制。 0: 不进行控制； 1:较低的质量要求，图像存在非常模糊，眼睛鼻子嘴巴遮挡至少其中一种或多种的情况； 2: 一般的质量要求，图像存在偏亮，偏暗，模糊或一般模糊，眉毛遮挡，脸颊遮挡，下巴遮挡，至少其中三种的情况； 3: 较高的质量要求，图像存在偏亮，偏暗，一般模糊，眉毛遮挡，脸颊遮挡，下巴遮挡，其中一到两种的情况； 4: 很高的质量要求，各个维度均为最好或最多在某一维度上存在轻微问题； 默认 0。 若图片质量不满足要求，则返回结果中会提示图片质量检测不符要求。 */
    QualityControl?: number;
    /** 是否开启图片旋转识别支持。0为不开启，1为开启。默认为0。本参数的作用为，当图片中的人脸被旋转且图片没有exif信息时，如果不开启图片旋转识别支持则无法正确检测、识别图片中的人脸。若您确认图片包含exif信息或者您确认输入图中人脸不会出现被旋转情况，请不要开启本参数。开启后，整体耗时将可能增加数百毫秒。 */
    NeedRotateDetection?: number;
  }

  interface VerifyFaceResponse {
    /** 给定的人脸图片与 PersonId 对应人脸的相似度。若 PersonId 下有多张人脸（Face），返回相似度最大的分数。不同算法版本返回的相似度分数不同。若需要验证两张图片中人脸是否为同一人，3.0版本误识率千分之一对应分数为40分，误识率万分之一对应分数为50分，误识率十万分之一对应分数为60分。 一般超过50分则可认定为同一人。2.0版本误识率千分之一对应分数为70分，误识率万分之一对应分数为80分，误识率十万分之一对应分数为90分。 一般超过80分则可认定为同一人。 */
    Score: number;
    /** 是否为同一人判断，固定阈值分数为60分，若想更灵活地调整阈值可取Score参数返回进行判断 */
    IsMatch: boolean;
    /** 人脸识别所用的算法模型版本。 */
    FaceModelVersion: string;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface VerifyPersonRequest {
    /** 待验证的人员ID。人员ID具体信息请参考人员库管理相关接口。 */
    PersonId: string;
    /** 图片 base64 数据。若图片中包含多张人脸，只选取其中人脸面积最大的人脸。支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。 */
    Image?: string;
    /** 图片的 Url 。 图片的 Url、Image必须提供一个，如果都提供，只使用 Url。 图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。 非腾讯云存储的Url速度和稳定性可能受一定影响。若图片中包含多张人脸，只选取其中人脸面积最大的人脸。支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。 */
    Url?: string;
    /** 图片质量控制。 0: 不进行控制； 1:较低的质量要求，图像存在非常模糊，眼睛鼻子嘴巴遮挡至少其中一种或多种的情况； 2: 一般的质量要求，图像存在偏亮，偏暗，模糊或一般模糊，眉毛遮挡，脸颊遮挡，下巴遮挡，至少其中三种的情况； 3: 较高的质量要求，图像存在偏亮，偏暗，一般模糊，眉毛遮挡，脸颊遮挡，下巴遮挡，其中一到两种的情况； 4: 很高的质量要求，各个维度均为最好或最多在某一维度上存在轻微问题； 默认 0。 若图片质量不满足要求，则返回结果中会提示图片质量检测不符要求。 */
    QualityControl?: number;
    /** 是否开启图片旋转识别支持。0为不开启，1为开启。默认为0。本参数的作用为，当图片中的人脸被旋转且图片没有exif信息时，如果不开启图片旋转识别支持则无法正确检测、识别图片中的人脸。若您确认图片包含exif信息或者您确认输入图中人脸不会出现被旋转情况，请不要开启本参数。开启后，整体耗时将可能增加数百毫秒。 */
    NeedRotateDetection?: number;
  }

  interface VerifyPersonResponse {
    /** 给定的人脸照片与 PersonId 对应的相似度。若 PersonId 下有多张人脸（Face），会融合多张人脸信息进行验证。 */
    Score?: number;
    /** 是否为同一人的判断。 */
    IsMatch?: boolean;
    /** 人脸识别所用的算法模型版本。 */
    FaceModelVersion?: string;
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }
}

/** [人脸识别](https://cloud.tencent.com/document/product/867) */
declare interface Iai {
  (): Versions;
  /** 稠密关键点 */
  AnalyzeDenseLandmarks(data?: AnalyzeDenseLandmarksRequest, config?: AxiosRequestConfig): AxiosPromise<AnalyzeDenseLandmarksResponse>;
  /** 五官定位 */
  AnalyzeFace(data?: AnalyzeFaceRequest, config?: AxiosRequestConfig): AxiosPromise<AnalyzeFaceResponse>;
  /** 人脸比对 */
  CompareFace(data?: CompareFaceRequest, config?: AxiosRequestConfig): AxiosPromise<CompareFaceResponse>;
  /** 防疫场景人脸比对 */
  CompareMaskFace(data?: CompareMaskFaceRequest, config?: AxiosRequestConfig): AxiosPromise<CompareMaskFaceResponse>;
  /** 复制人员 */
  CopyPerson(data: CopyPersonRequest, config?: AxiosRequestConfig): AxiosPromise<CopyPersonResponse>;
  /** 增加人脸 */
  CreateFace(data: CreateFaceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateFaceResponse>;
  /** 创建人员库 */
  CreateGroup(data: CreateGroupRequest, config?: AxiosRequestConfig): AxiosPromise<CreateGroupResponse>;
  /** 创建人员 */
  CreatePerson(data: CreatePersonRequest, config?: AxiosRequestConfig): AxiosPromise<CreatePersonResponse>;
  /** 删除人脸 */
  DeleteFace(data: DeleteFaceRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteFaceResponse>;
  /** 删除人员库 */
  DeleteGroup(data: DeleteGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteGroupResponse>;
  /** 删除人员 */
  DeletePerson(data: DeletePersonRequest, config?: AxiosRequestConfig): AxiosPromise<DeletePersonResponse>;
  /** 人员库删除人员 */
  DeletePersonFromGroup(data: DeletePersonFromGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DeletePersonFromGroupResponse>;
  /** 人脸检测与分析 */
  DetectFace(data?: DetectFaceRequest, config?: AxiosRequestConfig): AxiosPromise<DetectFaceResponse>;
  /** 人脸检测与属性分析 */
  DetectFaceAttributes(data?: DetectFaceAttributesRequest, config?: AxiosRequestConfig): AxiosPromise<DetectFaceAttributesResponse>;
  /** 人脸静态活体检测 */
  DetectLiveFace(data?: DetectLiveFaceRequest, config?: AxiosRequestConfig): AxiosPromise<DetectLiveFaceResponse>;
  /** 人脸静态活体检测（高精度版） */
  DetectLiveFaceAccurate(data?: DetectLiveFaceAccurateRequest, config?: AxiosRequestConfig): AxiosPromise<DetectLiveFaceAccurateResponse>;
  /** 获取人员库信息 */
  GetGroupInfo(data: GetGroupInfoRequest, config?: AxiosRequestConfig): AxiosPromise<GetGroupInfoResponse>;
  /** 获取人员库列表 */
  GetGroupList(data?: GetGroupListRequest, config?: AxiosRequestConfig): AxiosPromise<GetGroupListResponse>;
  /** 获取人员基础信息 */
  GetPersonBaseInfo(data: GetPersonBaseInfoRequest, config?: AxiosRequestConfig): AxiosPromise<GetPersonBaseInfoResponse>;
  /** 获取人员归属信息 */
  GetPersonGroupInfo(data: GetPersonGroupInfoRequest, config?: AxiosRequestConfig): AxiosPromise<GetPersonGroupInfoResponse>;
  /** 获取人员列表 */
  GetPersonList(data: GetPersonListRequest, config?: AxiosRequestConfig): AxiosPromise<GetPersonListResponse>;
  /** 获取人员列表长度 */
  GetPersonListNum(data: GetPersonListNumRequest, config?: AxiosRequestConfig): AxiosPromise<GetPersonListNumResponse>;
  /** 获取人员库升级任务列表 */
  GetUpgradeGroupFaceModelVersionJobList(data?: GetUpgradeGroupFaceModelVersionJobListRequest, config?: AxiosRequestConfig): AxiosPromise<GetUpgradeGroupFaceModelVersionJobListResponse>;
  /** 人员库升级结果查询 */
  GetUpgradeGroupFaceModelVersionResult(data: GetUpgradeGroupFaceModelVersionResultRequest, config?: AxiosRequestConfig): AxiosPromise<GetUpgradeGroupFaceModelVersionResultResponse>;
  /** 修改人员库 */
  ModifyGroup(data: ModifyGroupRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyGroupResponse>;
  /** 修改人员基础信息 */
  ModifyPersonBaseInfo(data: ModifyPersonBaseInfoRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyPersonBaseInfoResponse>;
  /** 修改人员描述信息 */
  ModifyPersonGroupInfo(data: ModifyPersonGroupInfoRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyPersonGroupInfoResponse>;
  /** 人员库版本回滚 */
  RevertGroupFaceModelVersion(data: RevertGroupFaceModelVersionRequest, config?: AxiosRequestConfig): AxiosPromise<RevertGroupFaceModelVersionResponse>;
  /** 人脸搜索 */
  SearchFaces(data: SearchFacesRequest, config?: AxiosRequestConfig): AxiosPromise<SearchFacesResponse>;
  /** 人脸搜索分库返回 */
  SearchFacesReturnsByGroup(data: SearchFacesReturnsByGroupRequest, config?: AxiosRequestConfig): AxiosPromise<SearchFacesReturnsByGroupResponse>;
  /** 人员搜索 */
  SearchPersons(data: SearchPersonsRequest, config?: AxiosRequestConfig): AxiosPromise<SearchPersonsResponse>;
  /** 人员搜索按库返回 */
  SearchPersonsReturnsByGroup(data: SearchPersonsReturnsByGroupRequest, config?: AxiosRequestConfig): AxiosPromise<SearchPersonsReturnsByGroupResponse>;
  /** 人员库升级 */
  UpgradeGroupFaceModelVersion(data: UpgradeGroupFaceModelVersionRequest, config?: AxiosRequestConfig): AxiosPromise<UpgradeGroupFaceModelVersionResponse>;
  /** 人脸验证 */
  VerifyFace(data: VerifyFaceRequest, config?: AxiosRequestConfig): AxiosPromise<VerifyFaceResponse>;
  /** 人员验证 */
  VerifyPerson(data: VerifyPersonRequest, config?: AxiosRequestConfig): AxiosPromise<VerifyPersonResponse>;
  /** 稠密关键点 */
  AnalyzeDenseLandmarks(data: V20180301.AnalyzeDenseLandmarksRequest, config: AxiosRequestConfig & V20180301.VersionHeader): AxiosPromise<V20180301.AnalyzeDenseLandmarksResponse>;
  /** 五官定位 */
  AnalyzeFace(data: V20180301.AnalyzeFaceRequest, config: AxiosRequestConfig & V20180301.VersionHeader): AxiosPromise<V20180301.AnalyzeFaceResponse>;
  /** 人脸比对 */
  CompareFace(data: V20180301.CompareFaceRequest, config: AxiosRequestConfig & V20180301.VersionHeader): AxiosPromise<V20180301.CompareFaceResponse>;
  /** 复制人员 */
  CopyPerson(data: V20180301.CopyPersonRequest, config: AxiosRequestConfig & V20180301.VersionHeader): AxiosPromise<V20180301.CopyPersonResponse>;
  /** 增加人脸 */
  CreateFace(data: V20180301.CreateFaceRequest, config: AxiosRequestConfig & V20180301.VersionHeader): AxiosPromise<V20180301.CreateFaceResponse>;
  /** 创建人员库 */
  CreateGroup(data: V20180301.CreateGroupRequest, config: AxiosRequestConfig & V20180301.VersionHeader): AxiosPromise<V20180301.CreateGroupResponse>;
  /** 创建人员 */
  CreatePerson(data: V20180301.CreatePersonRequest, config: AxiosRequestConfig & V20180301.VersionHeader): AxiosPromise<V20180301.CreatePersonResponse>;
  /** 删除人脸 */
  DeleteFace(data: V20180301.DeleteFaceRequest, config: AxiosRequestConfig & V20180301.VersionHeader): AxiosPromise<V20180301.DeleteFaceResponse>;
  /** 删除人员库 */
  DeleteGroup(data: V20180301.DeleteGroupRequest, config: AxiosRequestConfig & V20180301.VersionHeader): AxiosPromise<V20180301.DeleteGroupResponse>;
  /** 删除人员 */
  DeletePerson(data: V20180301.DeletePersonRequest, config: AxiosRequestConfig & V20180301.VersionHeader): AxiosPromise<V20180301.DeletePersonResponse>;
  /** 人员库删除人员 */
  DeletePersonFromGroup(data: V20180301.DeletePersonFromGroupRequest, config: AxiosRequestConfig & V20180301.VersionHeader): AxiosPromise<V20180301.DeletePersonFromGroupResponse>;
  /** 人脸检测与分析 */
  DetectFace(data: V20180301.DetectFaceRequest, config: AxiosRequestConfig & V20180301.VersionHeader): AxiosPromise<V20180301.DetectFaceResponse>;
  /** 人脸检测与属性分析 */
  DetectFaceAttributes(data: V20180301.DetectFaceAttributesRequest, config: AxiosRequestConfig & V20180301.VersionHeader): AxiosPromise<V20180301.DetectFaceAttributesResponse>;
  /** 人脸静态活体检测 */
  DetectLiveFace(data: V20180301.DetectLiveFaceRequest, config: AxiosRequestConfig & V20180301.VersionHeader): AxiosPromise<V20180301.DetectLiveFaceResponse>;
  /** 获取人员库信息 */
  GetGroupInfo(data: V20180301.GetGroupInfoRequest, config: AxiosRequestConfig & V20180301.VersionHeader): AxiosPromise<V20180301.GetGroupInfoResponse>;
  /** 获取人员库列表 */
  GetGroupList(data: V20180301.GetGroupListRequest, config: AxiosRequestConfig & V20180301.VersionHeader): AxiosPromise<V20180301.GetGroupListResponse>;
  /** 获取人员基础信息 */
  GetPersonBaseInfo(data: V20180301.GetPersonBaseInfoRequest, config: AxiosRequestConfig & V20180301.VersionHeader): AxiosPromise<V20180301.GetPersonBaseInfoResponse>;
  /** 获取人员归属信息 */
  GetPersonGroupInfo(data: V20180301.GetPersonGroupInfoRequest, config: AxiosRequestConfig & V20180301.VersionHeader): AxiosPromise<V20180301.GetPersonGroupInfoResponse>;
  /** 获取人员列表 */
  GetPersonList(data: V20180301.GetPersonListRequest, config: AxiosRequestConfig & V20180301.VersionHeader): AxiosPromise<V20180301.GetPersonListResponse>;
  /** 获取人员列表长度 */
  GetPersonListNum(data: V20180301.GetPersonListNumRequest, config: AxiosRequestConfig & V20180301.VersionHeader): AxiosPromise<V20180301.GetPersonListNumResponse>;
  /** 获取人员库升级任务列表 */
  GetUpgradeGroupFaceModelVersionJobList(data: V20180301.GetUpgradeGroupFaceModelVersionJobListRequest, config: AxiosRequestConfig & V20180301.VersionHeader): AxiosPromise<V20180301.GetUpgradeGroupFaceModelVersionJobListResponse>;
  /** 人员库升级结果查询 */
  GetUpgradeGroupFaceModelVersionResult(data: V20180301.GetUpgradeGroupFaceModelVersionResultRequest, config: AxiosRequestConfig & V20180301.VersionHeader): AxiosPromise<V20180301.GetUpgradeGroupFaceModelVersionResultResponse>;
  /** 修改人员库 */
  ModifyGroup(data: V20180301.ModifyGroupRequest, config: AxiosRequestConfig & V20180301.VersionHeader): AxiosPromise<V20180301.ModifyGroupResponse>;
  /** 修改人员基础信息 */
  ModifyPersonBaseInfo(data: V20180301.ModifyPersonBaseInfoRequest, config: AxiosRequestConfig & V20180301.VersionHeader): AxiosPromise<V20180301.ModifyPersonBaseInfoResponse>;
  /** 修改人员描述信息 */
  ModifyPersonGroupInfo(data: V20180301.ModifyPersonGroupInfoRequest, config: AxiosRequestConfig & V20180301.VersionHeader): AxiosPromise<V20180301.ModifyPersonGroupInfoResponse>;
  /** 人员库版本回滚 */
  RevertGroupFaceModelVersion(data: V20180301.RevertGroupFaceModelVersionRequest, config: AxiosRequestConfig & V20180301.VersionHeader): AxiosPromise<V20180301.RevertGroupFaceModelVersionResponse>;
  /** 人脸搜索 */
  SearchFaces(data: V20180301.SearchFacesRequest, config: AxiosRequestConfig & V20180301.VersionHeader): AxiosPromise<V20180301.SearchFacesResponse>;
  /** 人脸搜索分库返回 */
  SearchFacesReturnsByGroup(data: V20180301.SearchFacesReturnsByGroupRequest, config: AxiosRequestConfig & V20180301.VersionHeader): AxiosPromise<V20180301.SearchFacesReturnsByGroupResponse>;
  /** 人员搜索 */
  SearchPersons(data: V20180301.SearchPersonsRequest, config: AxiosRequestConfig & V20180301.VersionHeader): AxiosPromise<V20180301.SearchPersonsResponse>;
  /** 人员搜索按库返回 */
  SearchPersonsReturnsByGroup(data: V20180301.SearchPersonsReturnsByGroupRequest, config: AxiosRequestConfig & V20180301.VersionHeader): AxiosPromise<V20180301.SearchPersonsReturnsByGroupResponse>;
  /** 人员库升级 */
  UpgradeGroupFaceModelVersion(data: V20180301.UpgradeGroupFaceModelVersionRequest, config: AxiosRequestConfig & V20180301.VersionHeader): AxiosPromise<V20180301.UpgradeGroupFaceModelVersionResponse>;
  /** 人脸验证 */
  VerifyFace(data: V20180301.VerifyFaceRequest, config: AxiosRequestConfig & V20180301.VersionHeader): AxiosPromise<V20180301.VerifyFaceResponse>;
  /** 人员验证 */
  VerifyPerson(data: V20180301.VerifyPersonRequest, config: AxiosRequestConfig & V20180301.VersionHeader): AxiosPromise<V20180301.VerifyPersonResponse>;
}

export declare type Versions = ["2020-03-03", "2018-03-01"];

export default Iai;
