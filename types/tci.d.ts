/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 当前音频的统计结果 */
declare interface ASRStat {
  /** 当前音频的平均语速 */
  AvgSpeed?: number;
  /** Vad的平均音量 */
  AvgVolume?: number;
  /** Vad的最大音量 */
  MaxVolume?: number;
  /** Vad的最小音量 */
  MinVolume?: number;
  /** 当前音频的非发音时长 */
  MuteDuration?: number;
  /** 当前音频的发音时长 */
  SoundDuration?: number;
  /** 当前音频的总时长 */
  TotalDuration?: number;
  /** 当前音频的句子总数 */
  VadNum?: number;
  /** 当前音频的单词总数 */
  WordNum?: number;
}

/** 缺勤人员信息 */
declare interface AbsenceInfo {
  /** 识别到的人员所在的库id */
  LibraryIds?: string;
  /** 识别到的人员id */
  PersonId?: string;
}

/** 数量统计结果 */
declare interface ActionCountStatistic {
  /** 数量 */
  Count: number;
  /** 名称 */
  Name: string;
}

/** 时长占比统计结果 */
declare interface ActionDurationRatioStatistic {
  /** 名称 */
  Name: string;
  /** 比例 */
  Ratio: number;
}

/** 时长统计结果 */
declare interface ActionDurationStatistic {
  /** 时长 */
  Duration: number;
  /** 名称 */
  Name: string;
}

/** 大教室场景肢体动作识别信息 */
declare interface ActionInfo {
  /** 躯体动作识别结果，包含坐着（sit）、站立（stand）和趴睡（sleep） */
  BodyPosture?: ActionType;
  /** 举手识别结果，包含举手（hand）和未检测到举手（nothand） */
  Handup?: ActionType;
  /** 是否低头识别结果，包含抬头（lookingahead）和未检测到抬头（notlookingahead） */
  LookHead?: ActionType;
  /** 是否写字识别结果，包含写字（write）和未检测到写字（notlookingahead） */
  Writing?: ActionType;
  /** 动作图像高度 */
  Height?: number;
  /** 动作出现图像的左侧起始坐标位置 */
  Left?: number;
  /** 动作出现图像的上侧起始侧坐标位置 */
  Top?: number;
  /** 动作图像宽度 */
  Width?: number;
}

/** 统计结果 */
declare interface ActionStatistic {
  /** 数量统计 */
  ActionCount?: ActionCountStatistic[];
  /** 时长统计 */
  ActionDuration?: ActionDurationStatistic[];
  /** 时长比例统计 */
  ActionDurationRatio?: ActionDurationRatioStatistic[];
}

/** 动作行为子类型 */
declare interface ActionType {
  /** 置信度 */
  Confidence?: number;
  /** 动作类别 */
  Type?: string;
}

/** 如果请求中开启了静音检测开关，则会返回所有的静音片段（静音时长超过阈值的片段）。 */
declare interface AllMuteSlice {
  /** 所有静音片段。 */
  MuteSlice?: MuteSlice[];
  /** 静音时长占比。 */
  MuteRatio?: number;
  /** 静音总时长。 */
  TotalMuteDuration?: number;
}

/** 识别到的人员信息 */
declare interface AttendanceInfo {
  /** 识别到的人员信息 */
  Face?: FrameInfo;
  /** 识别到的人员id */
  PersonId?: string;
}

/** 老师肢体动作识别结果 */
declare interface BodyMovementResult {
  /** 置信度 */
  Confidence?: number;
  /** 识别结果高度 */
  Height?: number;
  /** 识别结果左坐标 */
  Left?: number;
  /** 老师动作识别结果，包含1、teach_on_positive_attitude 正面讲解2、point_to_the_blackboard 指黑板3、writing_blackboard 写板书4、other 其他 */
  Movements?: string;
  /** 识别结果顶坐标 */
  Top?: number;
  /** 识别结果宽度 */
  Width?: number;
}

/** 单词出现的那个句子的起始时间和结束时间信息 */
declare interface DetailInfo {
  /** 单词出现在该音频中的那个句子的时间戳，出现了几次， 就返回对应次数的起始和结束时间戳 */
  Value?: WordTimePair[];
  /** 词汇库中的单词 */
  Keyword?: string;
}

/** 双路混流视频集锦开关项 */
declare interface DoubleVideoFunction {
  /** 片头片尾增加图片开关 */
  EnableCoverPictures?: boolean;
}

/** 表情比例统计 */
declare interface ExpressRatioStatistic {
  /** 出现次数 */
  Count?: number;
  /** 表情 */
  Express?: string;
  /** 该表情时长占所有表情时长的比例 */
  Ratio?: number;
  /** 该表情时长占视频总时长的比例 */
  RatioUseDuration?: number;
}

/** 人脸描述 */
declare interface Face {
  /** 人脸唯一标识符 */
  FaceId: string;
  /** 人脸图片 URL */
  FaceUrl: string;
  /** 人员唯一标识符 */
  PersonId: string;
}

/** FaceAttrResult */
declare interface FaceAttrResult {
  /** 年龄 */
  Age?: number;
  /** 性别 */
  Sex?: string;
}

/** 人脸监测统计信息 */
declare interface FaceDetectStatistic {
  /** 人脸大小占画面平均占比 */
  FaceSizeRatio?: number;
  /** 检测到正脸次数 */
  FrontalFaceCount?: number;
  /** 正脸时长占比 */
  FrontalFaceRatio?: number;
  /** 正脸时长在总出现时常占比 */
  FrontalFaceRealRatio?: number;
  /** 人员唯一标识符 */
  PersonId?: string;
  /** 检测到侧脸次数 */
  SideFaceCount?: number;
  /** 侧脸时长占比 */
  SideFaceRatio?: number;
  /** 侧脸时长在总出现时常占比 */
  SideFaceRealRatio?: number;
}

/** 人脸表情统计结果 */
declare interface FaceExpressStatistic {
  /** 人员唯一标识符 */
  PersonId: string;
  /** 表情统计结果 */
  ExpressRatio?: ExpressRatioStatistic[];
}

/** FaceExpressionResult */
declare interface FaceExpressionResult {
  /** 表情置信度 */
  Confidence?: number;
  /** 表情识别结果，包括"neutral":中性,"happiness":开心，"angry":"生气"，"disgust":厌恶，"fear":"恐惧"，"sadness":"悲伤"，"surprise":"惊讶"，"contempt":"蔑视" */
  Expression?: string;
}

/** FaceIdentifyResult */
declare interface FaceIdentifyResult {
  /** 人脸标识符 */
  FaceId: string;
  /** 人员库标识符 */
  LibraryId: string;
  /** 人员标识符 */
  PersonId: string;
  /** 相似度 */
  Similarity: number;
}

/** 人员检索统计结果 */
declare interface FaceIdentifyStatistic {
  /** 持续时间 */
  Duration?: number;
  /** 结束时间 */
  EndTs?: number;
  /** 人员唯一标识符 */
  PersonId?: string;
  /** 相似度 */
  Similarity?: number;
  /** 开始时间 */
  StartTs?: number;
}

/** 人脸操作信息 */
declare interface FaceInfo {
  /** 人脸操作错误码 */
  ErrorCode?: string;
  /** 人脸操作结果信息 */
  ErrorMsg?: string;
  /** 人脸唯一标识符 */
  FaceId?: string;
  /** 人脸保存地址 */
  FaceUrl?: string;
  /** 人员唯一标识 */
  PersonId?: string;
}

/** FaceInfoResult */
declare interface FaceInfoResult {
  /** 人脸尺寸的占比 */
  FaceRatio?: number;
  /** 帧高度 */
  FrameHeight?: number;
  /** 帧宽度 */
  FrameWidth?: number;
  /** 人脸高度 */
  Height?: number;
  /** 人脸左坐标 */
  Left?: number;
  /** 人脸顶坐标 */
  Top?: number;
  /** 人脸宽度 */
  Width?: number;
}

/** FacePoseResult */
declare interface FacePoseResult {
  /** 正脸或侧脸的消息 */
  Direction?: string;
  /** 围绕Z轴旋转角度，俯仰角 */
  Pitch?: number;
  /** 围绕X轴旋转角度，翻滚角 */
  Roll?: number;
  /** 围绕Y轴旋转角度，偏航角 */
  Yaw?: number;
}

/** 人员信息 */
declare interface FrameInfo {
  /** 相似度 */
  Similarity?: number;
  /** 截图的存储地址 */
  SnapshotUrl?: string;
  /** 相对于视频起始时间的时间戳，单位秒 */
  Ts?: number;
}

/** 功能开关列表，表示是否需要打开相应的功能，返回相应的信息 */
declare interface Function {
  /** 输出全部文本标识，当该值设置为true时，会输出当前音频的全部文本 */
  EnableAllText?: boolean;
  /** 输出关键词信息标识，当该值设置为true时，会输出当前音频的关键词信息。 */
  EnableKeyword?: boolean;
  /** 静音检测标识，当设置为 true 时，需要设置静音时间阈值字段mute_threshold，统计结果中会返回静音片段。 */
  EnableMuteDetect?: boolean;
  /** 输出音频统计信息标识，当设置为 true 时，任务查询结果会输出音频的统计信息（AsrStat） */
  EnableVadInfo?: boolean;
  /** 输出音频音量信息标识，当设置为 true 时，会输出当前音频音量信息。 */
  EnableVolume?: boolean;
}

/** GestureResult */
declare interface GestureResult {
  /** 识别结果，包含"USPEAK":听你说，"LISTEN":听我说，"GOOD":GOOD，"TOOLS":拿教具，"OTHERS":其他 */
  Class?: string;
  /** 置信度 */
  Confidence?: number;
  /** 识别结果高度 */
  Height?: number;
  /** 识别结果左坐标 */
  Left?: number;
  /** 识别结果顶坐标 */
  Top?: number;
  /** 识别结果宽度 */
  Width?: number;
}

/** 检索配置开关项 */
declare interface HLFunction {
  /** 是否开启人脸检测 */
  EnableFaceDetect?: boolean;
  /** 是否开启表情识别 */
  EnableFaceExpression?: boolean;
  /** 是否开启人脸检索 */
  EnableFaceIdent?: boolean;
  /** 是否开启视频集锦-老师关键字识别 */
  EnableKeywordWonderfulTime?: boolean;
  /** 是否开启视频集锦-微笑识别 */
  EnableSmileWonderfulTime?: boolean;
}

/** HandTrackingResult */
declare interface HandTrackingResult {
  /** 识别结果 */
  Class?: string;
  /** 置信度 */
  Confidence?: number;
  /** 识别结果高度 */
  Height?: number;
  /** 识别结果左坐标 */
  Left?: number;
  /** 识别结果顶坐标 */
  Top?: number;
  /** 识别结果宽度 */
  Width?: number;
}

/** 精彩集锦信息 */
declare interface HighlightsInfomation {
  /** 专注的起始与终止时间信息。 */
  Concentration?: TimeType[];
  /** 微笑的起始与终止时间信息。 */
  Smile?: TimeType[];
  /** 高光集锦视频地址，保存剪辑好的视频地址。 */
  HighlightsUrl?: string;
  /** 片段中识别出来的人脸ID。 */
  PersonId?: string;
}

/** 图像任务控制选项 */
declare interface ImageTaskFunction {
  /** 大教室场景学生肢体动作识别选项 */
  EnableActionClass?: boolean;
  /** 人脸检测选项（默认为true，目前不可编辑） */
  EnableFaceDetect?: boolean;
  /** 人脸表情识别选项 */
  EnableFaceExpression?: boolean;
  /** 人脸检索选项（默认为true，目前不可编辑） */
  EnableFaceIdentify?: boolean;
  /** 手势选项 */
  EnableGesture?: boolean;
  /** 优图手势选项（该功能尚未支持） */
  EnableHandTracking?: boolean;
  /** 光照选项 */
  EnableLightJudge?: boolean;
  /** 小班课场景学生肢体动作识别选项 */
  EnableStudentBodyMovements?: boolean;
  /** 教师动作选项（该功能尚未支持） */
  EnableTeacherBodyMovements?: boolean;
  /** 判断老师是否在屏幕中（该功能尚未支持） */
  EnableTeacherOutScreen?: boolean;
}

/** 图像任务结果 */
declare interface ImageTaskResult {
  /** 大教室场景学生肢体动作识别信息 */
  ActionInfo?: ActionInfo;
  /** 属性识别结果 */
  FaceAttr?: FaceAttrResult;
  /** 表情识别结果 */
  FaceExpression?: FaceExpressionResult;
  /** 人脸检索结果 */
  FaceIdentify?: FaceIdentifyResult;
  /** 人脸检测结果 */
  FaceInfo?: FaceInfoResult;
  /** 姿势识别结果 */
  FacePose?: FacePoseResult;
  /** 动作分类结果 */
  Gesture?: GestureResult;
  /** 手势分类结果 */
  HandTracking?: HandTrackingResult;
  /** 光照识别结果 */
  Light?: LightResult;
  /** 学生肢体动作识别结果 */
  StudentBodyMovement?: StudentBodyMovementResult;
  /** 老师肢体动作识别结果 */
  TeacherBodyMovement?: BodyMovementResult;
  /** 教师是否在屏幕内判断结果 */
  TeacherOutScreen?: TeacherOutScreenResult;
  /** 时间统计结果 */
  TimeInfo?: TimeInfoResult;
}

/** 图像任务统计结果 */
declare interface ImageTaskStatistic {
  /** 人员检测统计信息 */
  FaceDetect?: FaceDetectStatistic[];
  /** 人脸表情统计信息 */
  FaceExpression?: FaceExpressStatistic[];
  /** 人脸检索统计信息 */
  FaceIdentify?: FaceIdentifyStatistic[];
  /** 姿势识别统计信息 */
  Gesture?: ActionStatistic;
  /** 手势识别统计信息 */
  Handtracking?: ActionStatistic;
  /** 光照统计信息 */
  Light?: LightStatistic;
  /** 学生动作统计信息 */
  StudentMovement?: ActionStatistic;
  /** 教师动作统计信息 */
  TeacherMovement?: ActionStatistic;
}

/** 人员库描述 */
declare interface Library {
  /** 人员库创建时间 */
  CreateTime: string;
  /** 人员库唯一标识符 */
  LibraryId: string;
  /** 人员库名称 */
  LibraryName: string;
  /** 人员库人员数量 */
  PersonCount?: number;
  /** 人员库修改时间 */
  UpdateTime?: string;
}

/** 光照强度统计结果 */
declare interface LightDistributionStatistic {
  /** 时间点 */
  Time: number;
  /** 光线值 */
  Value: number;
}

/** 光照强度比例统计结果 */
declare interface LightLevelRatioStatistic {
  /** 名称 */
  Level: string;
  /** 比例 */
  Ratio: number;
}

/** LightResult */
declare interface LightResult {
  /** 光照程度，参考提交任务时的LightStandard指定的Name参数 */
  LightLevel?: string;
  /** 光照亮度 */
  LightValue?: number;
}

/** 光照标准，结构的相关示例为：{ "Name":"dark"， "Range":[0,30]}当光照的区间落入在0到30的范围时，就会命中dark的光照标准 */
declare interface LightStandard {
  /** 光照名称 */
  Name: string;
  /** 范围 */
  Range: number[];
}

/** 光照统计结果 */
declare interface LightStatistic {
  /** 各个时间点的光线值 */
  LightDistribution?: LightDistributionStatistic[];
  /** 光照程度比例统计结果 */
  LightLevelRatio?: LightLevelRatioStatistic[];
}

/** 所有静音片段。 */
declare interface MuteSlice {
  /** 起始时间。 */
  MuteBtm?: number;
  /** 终止时间。 */
  MuteEtm?: number;
}

/** 人员描述 */
declare interface Person {
  /** 人员库唯一标识符 */
  LibraryId: string;
  /** 人员唯一标识符 */
  PersonId: string;
  /** 人员名称 */
  PersonName: string;
  /** 创建时间 */
  CreateTime?: string;
  /** 工作号码 */
  JobNumber?: string;
  /** 邮箱 */
  Mail?: string;
  /** 性别 */
  Male?: number;
  /** 电话号码 */
  PhoneNumber?: string;
  /** 学生号码 */
  StudentNumber?: string;
  /** 修改时间 */
  UpdateTime?: string;
}

/** 人员信息 */
declare interface PersonInfo {
  /** 需要匹配的人员的ID列表。 */
  PersonId: string;
  /** 视频集锦开始封面照片。 */
  CoverBeginUrl?: string;
  /** 视频集锦结束封面照片。 */
  CoverEndUrl?: string;
}

/** 标准化接口图像分析结果 */
declare interface StandardAudioResult {
  /** 返回的当前音频的统计信息。当进度为100时返回。 */
  AsrStat?: ASRStat;
  /** 返回当前音频流的详细信息，如果是流模式，返回的是对应流的详细信息，如果是 URL模式，返回的是查询的那一段seq对应的音频的详细信息。 */
  Texts?: WholeTextItem[];
  /** 返回词汇库中的单词出现的详细时间信息。 */
  VocabAnalysisDetailInfo?: VocabDetailInfomation[];
  /** 返回词汇库中的单词出现的次数信息。 */
  VocabAnalysisStatInfo?: VocabStatInfomation[];
  /** 状态描述 */
  Message?: string;
  /** 任务状态 */
  Status?: string;
  /** 结果数量 */
  TotalCount?: number;
}

/** 标准化接口图像分析结果 */
declare interface StandardImageResult {
  /** 详细结果 */
  ResultSet?: ImageTaskResult[];
  /** 分析完成后的统计结果 */
  Statistic?: ImageTaskStatistic;
  /** 状态描述 */
  Message?: string;
  /** 任务状态 */
  Status?: string;
  /** 结果总数 */
  TotalCount?: number;
}

/** 标准化接口图像分析结果 */
declare interface StandardVideoResult {
  /** 分析完成后的统计结果 */
  HighlightsInfo?: HighlightsInfomation[];
  /** 状态描述 */
  Message?: string;
  /** 任务状态 */
  Status?: string;
}

/** 单词出现的次数信息 */
declare interface StatInfo {
  /** 词汇库中的单词 */
  Keyword?: string;
  /** 单词出现在该音频中总次数 */
  Value?: number;
}

/** 学生肢体动作结果 */
declare interface StudentBodyMovementResult {
  /** 置信度（已废弃） */
  Confidence?: number;
  /** 举手识别结果置信度 */
  HandupConfidence?: number;
  /** 举手识别结果，包含举手（handup）和未举手（nothandup） */
  HandupStatus?: string;
  /** 识别结果高度 */
  Height?: number;
  /** 识别结果左坐标 */
  Left?: number;
  /** 动作识别结果（已废弃） */
  Movements?: string;
  /** 站立识别结果置信度 */
  StandConfidence?: number;
  /** 站立识别结果，包含站立（stand）和坐着（sit） */
  StandStatus?: string;
  /** 识别结果顶坐标 */
  Top?: number;
  /** 识别结果宽度 */
  Width?: number;
}

/** 疑似出席人员 */
declare interface SuspectedInfo {
  /** TopN匹配信息列表 */
  FaceSet?: FrameInfo[];
  /** 识别到的人员id */
  PersonId?: string;
}

/** 教师是否在屏幕内判断结果 */
declare interface TeacherOutScreenResult {
  /** 动作识别结果，InScreen：在屏幕内OutScreen：不在屏幕内 */
  Class?: string;
  /** 识别结果高度 */
  Height?: number;
  /** 识别结果左坐标 */
  Left?: number;
  /** 识别结果顶坐标 */
  Top?: number;
  /** 识别结果宽度 */
  Width?: number;
}

/** 当前句子的信息 */
declare interface TextItem {
  /** 当前句子包含的所有单词信息 */
  Words?: Word[];
  /** 当前句子的置信度 */
  Confidence?: number;
  /** 当前句子语音的起始时间点，单位为ms */
  Mbtm?: number;
  /** 当前句子语音的终止时间点，单位为ms */
  Metm?: number;
  /** 保留参数，暂无意义 */
  Tag?: number;
  /** 当前句子 */
  Text?: string;
  /** 当前句子的字节数 */
  TextSize?: number;
}

/** TimeInfoResult */
declare interface TimeInfoResult {
  /** 持续时间，单位毫秒 */
  Duration?: number;
  /** 结束时间戳，单位毫秒 */
  EndTs?: number;
  /** 开始时间戳，单位毫秒 */
  StartTs?: number;
}

/** 起止时间 */
declare interface TimeType {
  /** 结束时间戳 */
  EndTime?: number;
  /** 起始时间戳 */
  StartTime?: number;
}

/** 词汇库中的单词出现在音频中的那个句子的起始时间和结束时间信息 */
declare interface VocabDetailInfomation {
  /** 词汇库中的单词出现在该音频中的那个句子的时间戳，出现了几次，就返回对应次数的起始和结束时间戳 */
  VocabDetailInfo?: DetailInfo[];
  /** 词汇库名 */
  VocabLibName?: string;
}

/** 词汇库中的单词出现在音频中的总次数信息 */
declare interface VocabStatInfomation {
  /** 单词出现在该音频中总次数 */
  VocabDetailInfo?: StatInfo[];
  /** 词汇库名称 */
  VocabLibName?: string;
}

/** 含有语速的句子信息 */
declare interface WholeTextItem {
  /** 当前句子的信息 */
  TextItem?: TextItem;
  /** Vad的平均音量 */
  AvgVolume?: number;
  /** Vad的最大音量 */
  MaxVolume?: number;
  /** Vad的最小音量 */
  MinVolume?: number;
  /** 当前句子的语速 */
  Speed?: number;
}

/** 当前句子包含的所有单词信息 */
declare interface Word {
  /** 当前词的置信度 */
  Confidence?: number;
  /** 当前单词语音的起始时间点，单位为ms */
  Mbtm?: number;
  /** 当前单词语音的终止时间点，单位为ms */
  Metm?: number;
  /** 当前词 */
  Text?: string;
  /** 当前词的字节数 */
  Wsize?: number;
}

/** 单词出现的那个句子的起始时间和结束时间信息 */
declare interface WordTimePair {
  /** 单词出现的那个句子的起始时间 */
  Mbtm?: number;
  /** 单词出现的那个句子的结束时间 */
  Metm?: number;
}

declare interface AIAssistantRequest {
  /** 输入分析对象内容，输入数据格式参考FileType参数释义 */
  FileContent: string;
  /** 输入分析对象类型，picture_url:图片地址，vod_url:视频地址，live_url：直播地址，audio_url: 音频文件，picture：图片二进制数据的BASE64编码 */
  FileType: string;
  /** 音频源的语言，默认0为英文，1为中文 */
  Lang?: number;
  /** 查询人员库列表 */
  LibrarySet?: string[];
  /** 视频评估时间，单位秒，点播场景默认值为2小时（无法探测长度时）或完整视频，直播场景默认值为10分钟或直播提前结束 */
  MaxVideoDuration?: number;
  /** 标准化模板选择：0：AI助教基础版本，1：AI评教基础版本，2：AI评教标准版本。AI 助教基础版本功能包括：人脸检索、人脸检测、人脸表情识别、学生动作选项，音频信息分析，微笑识别。AI 评教基础版本功能包括：人脸检索、人脸检测、人脸表情识别、音频信息分析。AI 评教标准版功能包括人脸检索、人脸检测、人脸表情识别、手势识别、音频信息分析、音频关键词分析、视频精彩集锦分析。 */
  Template?: number;
  /** 识别词库名列表，评估过程使用这些词汇库中的词汇进行词汇使用行为分析 */
  VocabLibNameList?: string[];
  /** 语音编码类型 1:pcm */
  VoiceEncodeType?: number;
  /** 语音文件类型 1:raw, 2:wav, 3:mp3，10:视频（三种音频格式目前仅支持16k采样率16bit） */
  VoiceFileType?: number;
}

declare interface AIAssistantResponse {
  /** 图像任务直接返回结果 */
  ImageResults?: ImageTaskResult[];
  /** 任务ID */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CancelTaskRequest {
  /** 待取消任务标志符。 */
  JobId?: number;
}

declare interface CancelTaskResponse {
  /** 取消任务标志符。 */
  JobId?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CheckFacePhotoRequest {
  /** 输入分析对象内容 */
  FileContent: string;
  /** 输入分析对象类型，picture_url:图片地址 */
  FileType: string;
}

declare interface CheckFacePhotoResponse {
  /** 人脸检查结果，0：通过检查，1：图片模糊 */
  CheckResult?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateFaceRequest {
  /** 人员唯一标识符 */
  PersonId: string;
  /** 图片数据 base64 字符串，与 Urls 参数选择一个输入 */
  Images?: string[];
  /** 人员库唯一标识符 */
  LibraryId?: string;
  /** 图片下载地址，与 Images 参数选择一个输入 */
  Urls?: string[];
}

declare interface CreateFaceResponse {
  /** 人脸操作结果信息 */
  FaceInfoSet?: FaceInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateLibraryRequest {
  /** 人员库名称 */
  LibraryName: string;
  /** 人员库唯一标志符，为空则系统自动生成。 */
  LibraryId?: string;
}

declare interface CreateLibraryResponse {
  /** 人员库唯一标识符 */
  LibraryId?: string;
  /** 人员库名称 */
  LibraryName?: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreatePersonRequest {
  /** 人员库唯一标识符 */
  LibraryId: string;
  /** 人员名称 */
  PersonName: string;
  /** 图片数据 base64 字符串，与 Urls 参数选择一个输入 */
  Images?: string[];
  /** 人员工作号码 */
  JobNumber?: string;
  /** 人员邮箱 */
  Mail?: string;
  /** 人员性别，0：未知 1：男性，2：女性 */
  Male?: number;
  /** 自定义人员 ID，注意不能使用 tci_person_ 前缀 */
  PersonId?: string;
  /** 人员电话号码 */
  PhoneNumber?: string;
  /** 人员学生号码 */
  StudentNumber?: string;
  /** 图片下载地址，与 Images 参数选择一个输入 */
  Urls?: string[];
}

declare interface CreatePersonResponse {
  /** 人脸操作结果信息 */
  FaceInfoSet?: FaceInfo[];
  /** 人员库唯一标识符 */
  LibraryId?: string;
  /** 人员唯一标识符 */
  PersonId?: string;
  /** 人员名称 */
  PersonName?: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateVocabLibRequest {
  /** 词汇库名称 */
  VocabLibName: string;
}

declare interface CreateVocabLibResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateVocabRequest {
  /** 要添加词汇的词汇库名 */
  VocabLibName: string;
  /** 要添加的词汇列表 */
  VocabList: string[];
}

declare interface CreateVocabResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteFaceRequest {
  /** 人脸标识符数组 */
  FaceIdSet: string[];
  /** 人员唯一标识符 */
  PersonId: string;
  /** 人员库唯一标识符 */
  LibraryId?: string;
}

declare interface DeleteFaceResponse {
  /** 人脸操作结果 */
  FaceInfoSet?: FaceInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteLibraryRequest {
  /** 人员库唯一标识符 */
  LibraryId: string;
}

declare interface DeleteLibraryResponse {
  /** 人员库唯一标识符 */
  LibraryId?: string;
  /** 人员库名称 */
  LibraryName?: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeletePersonRequest {
  /** 人员库唯一标识符 */
  LibraryId: string;
  /** 人员唯一标识符 */
  PersonId: string;
}

declare interface DeletePersonResponse {
  /** 人脸信息 */
  FaceInfoSet?: FaceInfo[];
  /** 人员库唯一标识符 */
  LibraryId?: string;
  /** 人员唯一标识符 */
  PersonId?: string;
  /** 人员名称 */
  PersonName?: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteVocabLibRequest {
  /** 词汇库名称 */
  VocabLibName: string;
}

declare interface DeleteVocabLibResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteVocabRequest {
  /** 要删除词汇的词汇库名 */
  VocabLibName: string;
  /** 要删除的词汇列表 */
  VocabList: string[];
}

declare interface DeleteVocabResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAITaskResultRequest {
  /** 任务唯一标识符。在URL方式时提交请求后会返回一个任务标识符，后续查询该url的结果时使用这个标识符进行查询。 */
  TaskId: number;
  /** 限制数目 */
  Limit?: number;
  /** 偏移量 */
  Offset?: number;
}

declare interface DescribeAITaskResultResponse {
  /** 音频分析结果 */
  AudioResult?: StandardAudioResult;
  /** 图像分析结果 */
  ImageResult?: StandardImageResult;
  /** 视频分析结果 */
  VideoResult?: StandardVideoResult;
  /** 任务状态 */
  Status?: string;
  /** 任务唯一id。在URL方式时提交请求后会返回一个jobid，后续查询该url的结果时使用这个jobid进行查询。 */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAttendanceResultRequest {
  /** 任务唯一标识符 */
  JobId: number;
}

declare interface DescribeAttendanceResultResponse {
  /** 缺失人员的ID列表(只针对请求中的libids字段) */
  AbsenceSetInLibs?: AbsenceInfo[];
  /** 确定出勤人员列表 */
  AttendanceSet?: AttendanceInfo[];
  /** 疑似出勤人员列表 */
  SuspectedSet?: SuspectedInfo[];
  /** 缺失人员的ID列表(只针对请求中的personids字段) */
  AbsenceSet?: string[];
  /** 请求处理进度 */
  Progress?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAudioTaskRequest {
  /** 音频任务唯一id。在URL方式时提交请求后会返回一个jobid，后续查询该url的结果时使用这个jobid进行查询。 */
  JobId: number;
  /** 限制数目 */
  Limit?: number;
  /** 偏移量 */
  Offset?: number;
}

declare interface DescribeAudioTaskResponse {
  /** 如果请求中开启了静音检测开关，则会返回所有的静音片段（静音时长超过阈值的片段）。 */
  AllMuteSlice?: AllMuteSlice;
  /** 返回的当前音频的统计信息。当进度为100时返回。 */
  AsrStat?: ASRStat;
  /** 返回当前音频流的详细信息，如果是流模式，返回的是对应流的详细信息，如果是 URL模式，返回的是查询的那一段seq对应的音频的详细信息。 */
  Texts?: WholeTextItem[];
  /** 返回词汇库中的单词出现的详细时间信息。 */
  VocabAnalysisDetailInfo?: VocabDetailInfomation[];
  /** 返回词汇库中的单词出现的次数信息。 */
  VocabAnalysisStatInfo?: VocabStatInfomation[];
  /** 返回音频全部文本。 */
  AllTexts?: string;
  /** 音频任务唯一id。在URL方式时提交请求后会返回一个jobid，后续查询该url的结果时使用这个jobid进行查询。 */
  JobId?: number;
  /** 返回的当前处理进度。 */
  Progress?: number;
  /** 结果总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeConversationTaskRequest {
  /** 音频任务唯一id。在URL方式时提交请求后会返回一个jobid，后续查询该url的结果时使用这个jobid进行查询。 */
  JobId: number;
  /** 要查询明细的流的身份，1 老师 2 学生 */
  Identity?: number;
  /** 限制数目 */
  Limit?: number;
  /** 偏移量 */
  Offset?: number;
}

declare interface DescribeConversationTaskResponse {
  /** 返回的当前音频的统计信息。当进度为100时返回。 */
  AsrStat?: ASRStat;
  /** 返回当前音频流的详细信息，如果是流模式，返回的是对应流的详细信息，如果是 URL模式，返回的是查询的那一段seq对应的音频的详细信息。 */
  Texts?: WholeTextItem[];
  /** 返回词汇库中的单词出现的详细时间信息。 */
  VocabAnalysisDetailInfo?: VocabDetailInfomation[];
  /** 返回词汇库中的单词出现的次数信息。 */
  VocabAnalysisStatInfo?: VocabStatInfomation[];
  /** 整个音频流的全部文本 */
  AllTexts?: string;
  /** 音频任务唯一id。在URL方式时提交请求后会返回一个jobid，后续查询该url的结果时使用这个jobid进行查询。 */
  JobId?: number;
  /** 返回的当前处理进度。 */
  Progress?: number;
  /** 结果总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeHighlightResultRequest {
  /** 精彩集锦任务唯一id。在URL方式时提交请求后会返回一个JobId，后续查询该url的结果时使用这个JobId进行查询。 */
  JobId: number;
}

declare interface DescribeHighlightResultResponse {
  /** 精彩集锦详细信息。 */
  HighlightsInfo?: HighlightsInfomation[];
  /** 精彩集锦任务唯一id。在URL方式时提交请求后会返回一个JobId，后续查询该url的结果时使用这个JobId进行查询。 */
  JobId?: number;
  /** 任务的进度百分比，100表示任务已完成。 */
  Progress?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeImageTaskRequest {
  /** 任务标识符 */
  JobId: number;
  /** 限制数目 */
  Limit?: number;
  /** 偏移量 */
  Offset?: number;
}

declare interface DescribeImageTaskResponse {
  /** 任务处理结果 */
  ResultSet?: ImageTaskResult[];
  /** 任务唯一标识 */
  JobId?: number;
  /** 任务执行进度 */
  Progress?: number;
  /** 任务结果数目 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeImageTaskStatisticRequest {
  /** 图像任务标识符 */
  JobId: number;
}

declare interface DescribeImageTaskStatisticResponse {
  /** 任务统计信息 */
  Statistic?: ImageTaskStatistic;
  /** 图像任务唯一标识符 */
  JobId?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeLibrariesRequest {
}

declare interface DescribeLibrariesResponse {
  /** 人员库列表 */
  LibrarySet?: Library[];
  /** 人员库总数量 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribePersonRequest {
  /** 人员库唯一标识符 */
  LibraryId: string;
  /** 人员唯一标识符 */
  PersonId: string;
}

declare interface DescribePersonResponse {
  /** 人员人脸列表 */
  FaceSet?: Face[];
  /** 创建时间 */
  CreateTime?: string;
  /** 工作号码 */
  JobNumber?: string;
  /** 人员库唯一标识符 */
  LibraryId?: string;
  /** 邮箱 */
  Mail?: string;
  /** 性别 */
  Male?: number;
  /** 人员唯一标识符 */
  PersonId?: string;
  /** 人员名称 */
  PersonName?: string;
  /** 电话号码 */
  PhoneNumber?: string;
  /** 学生号码 */
  StudentNumber?: string;
  /** 修改时间 */
  UpdateTime?: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribePersonsRequest {
  /** 人员库唯一标识符 */
  LibraryId: string;
  /** 限制数目 */
  Limit?: number;
  /** 偏移量 */
  Offset?: number;
}

declare interface DescribePersonsResponse {
  /** 人员列表 */
  PersonSet?: Person[];
  /** 人员总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeVocabLibRequest {
}

declare interface DescribeVocabLibResponse {
  /** 返回该appid下的所有词汇库名 */
  VocabLibNameSet?: string[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeVocabRequest {
  /** 要查询词汇的词汇库名 */
  VocabLibName: string;
}

declare interface DescribeVocabResponse {
  /** 词汇列表 */
  VocabNameSet?: string[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyLibraryRequest {
  /** 人员库唯一标识符 */
  LibraryId: string;
  /** 人员库名称 */
  LibraryName: string;
}

declare interface ModifyLibraryResponse {
  /** 人员库唯一标识符 */
  LibraryId?: string;
  /** 人员库名称 */
  LibraryName?: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyPersonRequest {
  /** 人员库唯一标识符 */
  LibraryId: string;
  /** 人员唯一标识符 */
  PersonId: string;
  /** 人员工作号码 */
  JobNumber?: string;
  /** 人员邮箱 */
  Mail?: string;
  /** 人员性别 */
  Male?: number;
  /** 人员名称 */
  PersonName?: string;
  /** 人员电话号码 */
  PhoneNumber?: string;
  /** 人员学生号码 */
  StudentNumber?: string;
}

declare interface ModifyPersonResponse {
  /** 人脸信息 */
  FaceInfoSet?: FaceInfo[];
  /** 人员所属人员库标识符 */
  LibraryId?: string;
  /** 人员唯一标识符 */
  PersonId?: string;
  /** 人员名称 */
  PersonName?: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface SubmitAudioTaskRequest {
  /** 音频源的语言，默认0为英文，1为中文 */
  Lang: number;
  /** 音频URL。客户请求为URL方式时必须带此字段指名音频的url。 */
  Url: string;
  /** 语音编码类型 1:pcm */
  VoiceEncodeType: number;
  /** 语音文件类型 1:raw, 2:wav, 3:mp3，10:视频（三种音频格式目前仅支持16k采样率16bit） */
  VoiceFileType: number;
  /** 功能开关列表，表示是否需要打开相应的功能，返回相应的信息 */
  Functions?: Function;
  /** 视频文件类型，默认点播，直播填 live_url */
  FileType?: string;
  /** 静音阈值设置，如果静音检测开关开启，则静音时间超过这个阈值认为是静音片段，在结果中会返回, 没给的话默认值为3s */
  MuteThreshold?: number;
  /** 识别词库名列表，评估过程使用这些词汇库中的词汇进行词汇使用行为分析 */
  VocabLibNameList?: string[];
}

declare interface SubmitAudioTaskResponse {
  /** 查询结果时指名的jobid。在URL方式时提交请求后会返回一个jobid，后续查询该url的结果时使用这个jobid进行查询。 */
  JobId?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface SubmitCheckAttendanceTaskPlusRequest {
  /** 输入数据 */
  FileContent: string[];
  /** 视频流类型，vod_url表示点播URL，live_url表示直播URL，默认vod_url */
  FileType: string;
  /** 人员库 ID列表 */
  LibraryIds: string[];
  /** 确定出勤阈值；默认为0.92 */
  AttendanceThreshold?: number;
  /** 是否开启陌生人模式，陌生人模式是指在任务中发现的非注册人脸库中的人脸也返回相关统计信息，默认不开启 */
  EnableStranger?: boolean;
  /** 考勤结束时间（到视频的第几秒结束考勤），单位秒；默认为900 对于直播场景，使用绝对时间戳，单位秒，默认当前时间往后12小时 */
  EndTime?: number;
  /** 通知回调地址，要求方法为post，application/json格式 */
  NoticeUrl?: string;
  /** 考勤开始时间（从视频的第几秒开始考勤），单位秒；默认为0 对于直播场景，使用绝对时间戳，单位秒，默认当前时间 */
  StartTime?: number;
  /** 识别阈值；默认为0.8 */
  Threshold?: number;
}

declare interface SubmitCheckAttendanceTaskPlusResponse {
  /** 任务标识符 */
  JobId?: number;
  /** 没有注册的人的ID列表 */
  NotRegisteredSet?: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface SubmitCheckAttendanceTaskRequest {
  /** 输入数据 */
  FileContent: string;
  /** 视频流类型，vod_url表示点播URL，live_url表示直播URL，默认vod_url */
  FileType: string;
  /** 人员库 ID列表 */
  LibraryIds: string[];
  /** 确定出勤阈值；默认为0.92 */
  AttendanceThreshold?: number;
  /** 是否开启陌生人模式，陌生人模式是指在任务中发现的非注册人脸库中的人脸也返回相关统计信息，默认不开启 */
  EnableStranger?: boolean;
  /** 考勤结束时间（到视频的第几秒结束考勤），单位秒；默认为900 对于直播场景，使用绝对时间戳，单位秒，默认当前时间往后12小时 */
  EndTime?: number;
  /** 通知回调地址，要求方法为post，application/json格式 */
  NoticeUrl?: string;
  /** 考勤开始时间（从视频的第几秒开始考勤），单位秒；默认为0 对于直播场景，使用绝对时间戳，单位秒，默认当前时间 */
  StartTime?: number;
  /** 识别阈值；默认为0.8 */
  Threshold?: number;
}

declare interface SubmitCheckAttendanceTaskResponse {
  /** 任务标识符 */
  JobId?: number;
  /** 没有注册的人的ID列表 */
  NotRegisteredSet?: string[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface SubmitConversationTaskRequest {
  /** 音频源的语言，默认0为英文，1为中文 */
  Lang: number;
  /** 学生音频流 */
  StudentUrl: string;
  /** 教师音频流 */
  TeacherUrl: string;
  /** 语音编码类型 1:pcm */
  VoiceEncodeType: number;
  /** 语音文件类型 1:raw, 2:wav, 3:mp3（三种格式目前仅支持16k采样率16bit） */
  VoiceFileType: number;
  /** 功能开关列表，表示是否需要打开相应的功能，返回相应的信息 */
  Functions?: Function;
  /** 识别词库名列表，评估过程使用这些词汇库中的词汇进行词汇使用行为分析 */
  VocabLibNameList?: string[];
}

declare interface SubmitConversationTaskResponse {
  /** 查询结果时指名的jobid。在URL方式时提交请求后会返回一个jobid，后续查询该url的结果时使用这个jobid进行查询。 */
  JobId?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface SubmitDoubleVideoHighlightsRequest {
  /** 学生视频url */
  FileContent: string;
  /** 需要检索的人脸合集库，不在库中的人脸将不参与精彩集锦；目前仅支持输入一个人脸库。 */
  LibIds: string[];
  /** 详细功能开关配置项 */
  Functions?: DoubleVideoFunction;
  /** 需要匹配的人员信息列表。 */
  PersonInfoList?: PersonInfo[];
  /** 视频处理的抽帧间隔，单位毫秒。建议留空。 */
  FrameInterval?: number;
  /** 旧版本需要匹配的人员信息列表。 */
  PersonIds?: string[];
  /** 人脸检索的相似度阈值，默认值0.89。建议留空。 */
  SimThreshold?: number;
  /** 老师视频url */
  TeacherFileContent?: string;
}

declare interface SubmitDoubleVideoHighlightsResponse {
  /** 视频拆条任务ID，用来唯一标识视频拆条任务。 */
  JobId?: number;
  /** 未注册的人员ID列表。若出现此项，代表评估出现了问题，输入的PersonId中有不在库中的人员ID。 */
  NotRegistered?: string[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface SubmitFullBodyClassTaskRequest {
  /** 输入分析对象内容，输入数据格式参考FileType参数释义 */
  FileContent: string;
  /** 输入分析对象类型，picture_url:图片地址，vod_url:视频地址，live_url：直播地址，picture: 图片二进制数据的BASE64编码 */
  FileType: string;
  /** 音频源的语言，默认0为英文，1为中文 */
  Lang?: number;
  /** 查询人员库列表，可填写老师的注册照所在人员库 */
  LibrarySet?: string[];
  /** 视频评估时间，单位秒，点播场景默认值为2小时（无法探测长度时）或完整视频，直播场景默认值为10分钟或直播提前结束 */
  MaxVideoDuration?: number;
  /** 识别词库名列表，这些词汇库用来维护关键词，评估老师授课过程中，对这些关键词的使用情况 */
  VocabLibNameList?: string[];
  /** 语音编码类型 1:pcm，当FileType为vod_url或live_url时为必填 */
  VoiceEncodeType?: number;
  /** 语音文件类型 10:视频（三种音频格式目前仅支持16k采样率16bit），当FileType为vod_url或live_url时为必填 */
  VoiceFileType?: number;
}

declare interface SubmitFullBodyClassTaskResponse {
  /** 图像任务直接返回结果，包括： FaceAttr、 FaceExpression、 FaceIdentify、 FaceInfo、 FacePose、 TeacherBodyMovement、TimeInfo */
  ImageResults?: ImageTaskResult[];
  /** 任务ID */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface SubmitHighlightsRequest {
  /** 表情配置开关项。 */
  Functions: HLFunction;
  /** 视频url。 */
  FileContent: string;
  /** 视频类型及来源，目前只支持点播类型："vod_url"。 */
  FileType: string;
  /** 需要检索的人脸合集库，不在库中的人脸将不参与精彩集锦。 */
  LibIds: string[];
  /** 视频处理的抽帧间隔，单位毫秒。建议留空。 */
  FrameInterval?: number;
  /** 关键词语言类型，0为英文，1为中文。 */
  KeywordsLanguage?: number;
  /** 关键词数组，当且仅当Funtions中的EnableKeywordWonderfulTime为true时有意义，匹配相应的关键字。 */
  KeywordsStrings?: string[];
  /** 处理视频的总时长，单位毫秒。该值为0或未设置时，默认值两小时生效；当该值大于视频实际时长时，视频实际时长生效；当该值小于视频实际时长时，该值生效；当获取视频实际时长失败时，若该值设置则生效，否则默认值生效。建议留空。 */
  MaxVideoDuration?: number;
  /** 人脸检索的相似度阈值，默认值0.89。建议留空。 */
  SimThreshold?: number;
}

declare interface SubmitHighlightsResponse {
  /** 视频拆条任务ID，用来唯一标识视频拆条任务。 */
  JobId?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface SubmitImageTaskPlusRequest {
  /** 输入分析对象内容，输入数据格式参考FileType参数释义 */
  FileContent: string[];
  /** 输入分析对象类型，picture：二进制图片的 base64 编码字符串，picture_url:图片地址，vod_url：视频地址，live_url：直播地址 */
  FileType: string;
  /** 任务控制选项 */
  Functions?: ImageTaskFunction;
  /** 光照标准列表 */
  LightStandardSet?: LightStandard[];
  /** 抽帧的时间间隔，单位毫秒，默认值1000，保留字段，当前不支持填写。 */
  FrameInterval?: number;
  /** 查询人员库列表 */
  LibrarySet?: string[];
  /** 视频评估时间，单位秒，点播场景默认值为2小时（无法探测长度时）或完整视频，直播场景默认值为10分钟或直播提前结束 */
  MaxVideoDuration?: number;
  /** 人脸识别中的相似度阈值，默认值为0.89，保留字段，当前不支持填写。 */
  SimThreshold?: number;
}

declare interface SubmitImageTaskPlusResponse {
  /** 识别结果 */
  ResultSet?: ImageTaskResult[];
  /** 任务标识符 */
  JobId?: number;
  /** 任务进度 */
  Progress?: number;
  /** 结果总数目 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface SubmitImageTaskRequest {
  /** 输入分析对象内容，输入数据格式参考FileType参数释义 */
  FileContent: string;
  /** 输入分析对象类型，picture：二进制图片的 base64 编码字符串，picture_url:图片地址，vod_url：视频地址，live_url：直播地址 */
  FileType: string;
  /** 任务控制选项 */
  Functions?: ImageTaskFunction;
  /** 光照标准列表 */
  LightStandardSet?: LightStandard[];
  /** 结果更新回调地址。 */
  EventsCallBack?: string;
  /** 抽帧的时间间隔，单位毫秒，默认值1000，保留字段，当前不支持填写。 */
  FrameInterval?: number;
  /** 查询人员库列表 */
  LibrarySet?: string[];
  /** 视频评估时间，单位秒，点播场景默认值为2小时（无法探测长度时）或完整视频，直播场景默认值为10分钟或直播提前结束 */
  MaxVideoDuration?: number;
  /** 人脸识别中的相似度阈值，默认值为0.89，保留字段，当前不支持填写。 */
  SimThreshold?: number;
}

declare interface SubmitImageTaskResponse {
  /** 识别结果 */
  ResultSet?: ImageTaskResult[];
  /** 任务标识符 */
  JobId?: number;
  /** 任务进度 */
  Progress?: number;
  /** 结果总数目 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface SubmitOneByOneClassTaskRequest {
  /** 输入分析对象内容，输入数据格式参考FileType参数释义 */
  FileContent: string;
  /** 输入分析对象类型，picture_url:图片地址，vod_url:视频地址，live_url：直播地址，picture: 图片二进制数据的BASE64编码 */
  FileType: string;
  /** 音频源的语言，默认0为英文，1为中文 */
  Lang?: number;
  /** 查询人员库列表，可填写学生的注册照所在人员库 */
  LibrarySet?: string[];
  /** 视频评估时间，单位秒，点播场景默认值为2小时（无法探测长度时）或完整视频，直播场景默认值为10分钟或直播提前结束 */
  MaxVideoDuration?: number;
  /** 识别词库名列表，这些词汇库用来维护关键词，评估学生对这些关键词的使用情况 */
  VocabLibNameList?: string[];
  /** 语音编码类型 1:pcm，当FileType为vod_url或live_url时为必填 */
  VoiceEncodeType?: number;
  /** 语音文件类型10:视频（三种音频格式目前仅支持16k采样率16bit），当FileType为vod_url或live_url时为必填 */
  VoiceFileType?: number;
}

declare interface SubmitOneByOneClassTaskResponse {
  /** 图像任务直接返回结果，包括：FaceAttr、 FaceExpression、 FaceIdentify、 FaceInfo、 FacePose、TimeInfo */
  ImageResults?: ImageTaskResult[];
  /** 任务ID */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface SubmitOpenClassTaskRequest {
  /** 输入分析对象内容，输入数据格式参考FileType参数释义 */
  FileContent: string;
  /** 输入分析对象类型，picture_url:图片地址，vod_url:视频地址，live_url：直播地址,picture: 图片二进制数据的BASE64编码 */
  FileType: string;
  /** 查询人员库列表，可填写学生们的注册照所在人员库 */
  LibrarySet?: string[];
  /** 视频评估时间，单位秒，点播场景默认值为2小时（无法探测长度时）或完整视频，直播场景默认值为10分钟或直播提前结束 */
  MaxVideoDuration?: number;
}

declare interface SubmitOpenClassTaskResponse {
  /** 图像任务直接返回结果，包括：FaceAttr、 FaceExpression、 FaceIdentify、 FaceInfo、 FacePose、 StudentBodyMovement、TimeInfo */
  ImageResults?: ImageTaskResult[];
  /** 任务ID */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface SubmitPartialBodyClassTaskRequest {
  /** 输入分析对象内容，输入数据格式参考FileType参数释义 */
  FileContent: string;
  /** 输入分析对象类型，picture_url:图片地址，vod_url:视频地址，live_url：直播地址，picture: 图片二进制数据的BASE64编码 */
  FileType: string;
  /** 音频源的语言，默认0为英文，1为中文 */
  Lang?: number;
  /** 查询人员库列表，可填写老师的注册照所在人员库 */
  LibrarySet?: string[];
  /** 视频评估时间，单位秒，点播场景默认值为2小时（无法探测长度时）或完整视频，直播场景默认值为10分钟或直播提前结束 */
  MaxVideoDuration?: number;
  /** 识别词库名列表，这些词汇库用来维护关键词，评估老师授课过程中，对这些关键词的使用情况 */
  VocabLibNameList?: string[];
  /** 语音编码类型 1:pcm，当FileType为vod_url或live_url时为必填 */
  VoiceEncodeType?: number;
  /** 语音文件类型 10:视频（三种音频格式目前仅支持16k采样率16bit），当FileType为vod_url或live_url时为必填 */
  VoiceFileType?: number;
}

declare interface SubmitPartialBodyClassTaskResponse {
  /** 图像任务直接返回结果，包括： FaceAttr、 FaceExpression、 FaceIdentify、 FaceInfo、 FacePose、 Gesture 、 Light、 TimeInfo */
  ImageResults?: ImageTaskResult[];
  /** 任务ID */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface SubmitTraditionalClassTaskRequest {
  /** 输入分析对象内容，输入数据格式参考FileType参数释义 */
  FileContent: string;
  /** 输入分析对象类型，picture_url:图片地址，vod_url:视频地址，live_url：直播地址，picture：图片二进制数据的BASE64编码 */
  FileType: string;
  /** 查询人员库列表，可填写学生们的注册照所在人员库 */
  LibrarySet?: string[];
  /** 视频评估时间，单位秒，点播场景默认值为2小时（无法探测长度时）或完整视频，直播场景默认值为10分钟或直播提前结束 */
  MaxVideoDuration?: number;
}

declare interface SubmitTraditionalClassTaskResponse {
  /** 图像任务直接返回结果，包括： ActionInfo、FaceAttr、 FaceExpression、 FaceIdentify、 FaceInfo、 FacePose、 TimeInfo */
  ImageResults?: ImageTaskResult[];
  /** 任务ID */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface TransmitAudioStreamRequest {
  /** 功能开关列表，表示是否需要打开相应的功能，返回相应的信息 */
  Functions: Function;
  /** 流式数据包的序号，从1开始，当IsEnd字段为1后后续序号无意义。 */
  SeqId: number;
  /** 语音段唯一标识，一个完整语音一个SessionId。 */
  SessionId: string;
  /** 当前数据包数据, 流式模式下数据包大小可以按需设置，在网络良好的情况下，建议设置为0.5k，且必须保证分片帧完整（16bit的数据必须保证音频长度为偶数），编码格式要求为BASE64。 */
  UserVoiceData: string;
  /** 语音编码类型 1:pcm。 */
  VoiceEncodeType: number;
  /** 语音文件类型 1: raw, 2: wav, 3: mp3 (语言文件格式目前仅支持 16k 采样率 16bit 编码单声道，如有不一致可能导致评估不准确或失败)。 */
  VoiceFileType: number;
  /** 是否传输完毕标志，若为0表示未完毕，若为1则传输完毕开始评估，非流式模式下无意义。 */
  IsEnd?: number;
  /** 音频源的语言，默认0为英文，1为中文 */
  Lang?: number;
  /** 是否临时保存 音频链接 */
  StorageMode?: number;
  /** 识别词库名列表，评估过程使用这些词汇库中的词汇进行词汇使用行为分析 */
  VocabLibNameList?: string[];
}

declare interface TransmitAudioStreamResponse {
  /** 返回的当前音频的统计信息。当进度为100时返回。 */
  AsrStat?: ASRStat;
  /** 返回当前音频流的详细信息，如果是流模式，返回的是对应流的详细信息，如果是 URL模式，返回的是查询的那一段seq对应的音频的详细信息。 */
  Texts?: WholeTextItem[];
  /** 返回词汇库中的单词出现的详细时间信息。 */
  VocabAnalysisDetailInfo?: VocabDetailInfomation[];
  /** 返回词汇库中的单词出现的次数信息。 */
  VocabAnalysisStatInfo?: VocabStatInfomation[];
  /** 音频全部文本。 */
  AllTexts?: string;
  /** 临时保存的音频链接 */
  AudioUrl?: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

/** 腾讯智学课堂分析 */
declare interface Tci {
  (): Versions;
  /** AI 助教标准接口 */
  AIAssistant(data: AIAssistantRequest, config?: AxiosRequestConfig): AxiosPromise<AIAssistantResponse>;
  /** 取消任务执行 */
  CancelTask(data?: CancelTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CancelTaskResponse>;
  /** 检查人脸图片 */
  CheckFacePhoto(data: CheckFacePhotoRequest, config?: AxiosRequestConfig): AxiosPromise<CheckFacePhotoResponse>;
  /** 创建人脸 */
  CreateFace(data: CreateFaceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateFaceResponse>;
  /** 创建人员库 */
  CreateLibrary(data: CreateLibraryRequest, config?: AxiosRequestConfig): AxiosPromise<CreateLibraryResponse>;
  /** 创建人员 */
  CreatePerson(data: CreatePersonRequest, config?: AxiosRequestConfig): AxiosPromise<CreatePersonResponse>;
  /** 创建词汇 */
  CreateVocab(data: CreateVocabRequest, config?: AxiosRequestConfig): AxiosPromise<CreateVocabResponse>;
  /** 建立词汇库 */
  CreateVocabLib(data: CreateVocabLibRequest, config?: AxiosRequestConfig): AxiosPromise<CreateVocabLibResponse>;
  /** 删除人脸 */
  DeleteFace(data: DeleteFaceRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteFaceResponse>;
  /** 删除人员库 */
  DeleteLibrary(data: DeleteLibraryRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteLibraryResponse>;
  /** 删除人员 */
  DeletePerson(data: DeletePersonRequest, config?: AxiosRequestConfig): AxiosPromise<DeletePersonResponse>;
  /** 删除词汇 */
  DeleteVocab(data: DeleteVocabRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteVocabResponse>;
  /** 删除词汇库 */
  DeleteVocabLib(data: DeleteVocabLibRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteVocabLibResponse>;
  /** 获取标准化接口任务结果 */
  DescribeAITaskResult(data: DescribeAITaskResultRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAITaskResultResponse>;
  /** 人脸考勤查询结果 */
  DescribeAttendanceResult(data: DescribeAttendanceResultRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAttendanceResultResponse>;
  /** 音频分析结果查询 */
  DescribeAudioTask(data: DescribeAudioTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAudioTaskResponse>;
  /** 音频对话任务分析结果查询 */
  DescribeConversationTask(data: DescribeConversationTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeConversationTaskResponse>;
  /** 视频精彩集锦结果查询接口 */
  DescribeHighlightResult(data: DescribeHighlightResultRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeHighlightResultResponse>;
  /** 拉取任务详情 */
  DescribeImageTask(data: DescribeImageTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeImageTaskResponse>;
  /** 获取图像任务统计信息 */
  DescribeImageTaskStatistic(data: DescribeImageTaskStatisticRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeImageTaskStatisticResponse>;
  /** 获取人员库列表 */
  DescribeLibraries(data?: DescribeLibrariesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLibrariesResponse>;
  /** 获取人员详情 */
  DescribePerson(data: DescribePersonRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePersonResponse>;
  /** 拉取人员列表 */
  DescribePersons(data: DescribePersonsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePersonsResponse>;
  /** 查询词汇 */
  DescribeVocab(data: DescribeVocabRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVocabResponse>;
  /** 查询词汇库 */
  DescribeVocabLib(data?: DescribeVocabLibRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVocabLibResponse>;
  /** 修改人员库信息 */
  ModifyLibrary(data: ModifyLibraryRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyLibraryResponse>;
  /** 修改人员信息 */
  ModifyPerson(data: ModifyPersonRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyPersonResponse>;
  /** 音频任务提交接口 */
  SubmitAudioTask(data: SubmitAudioTaskRequest, config?: AxiosRequestConfig): AxiosPromise<SubmitAudioTaskResponse>;
  /** 提交人员考勤任务 */
  SubmitCheckAttendanceTask(data: SubmitCheckAttendanceTaskRequest, config?: AxiosRequestConfig): AxiosPromise<SubmitCheckAttendanceTaskResponse>;
  /** 提交高级人员考勤任务 */
  SubmitCheckAttendanceTaskPlus(data: SubmitCheckAttendanceTaskPlusRequest, config?: AxiosRequestConfig): AxiosPromise<SubmitCheckAttendanceTaskPlusResponse>;
  /** 对话任务分析接口 */
  SubmitConversationTask(data: SubmitConversationTaskRequest, config?: AxiosRequestConfig): AxiosPromise<SubmitConversationTaskResponse>;
  /** 发起双路视频生成精彩集锦接口 */
  SubmitDoubleVideoHighlights(data: SubmitDoubleVideoHighlightsRequest, config?: AxiosRequestConfig): AxiosPromise<SubmitDoubleVideoHighlightsResponse>;
  /** 提交传统课堂授课任务 */
  SubmitFullBodyClassTask(data: SubmitFullBodyClassTaskRequest, config?: AxiosRequestConfig): AxiosPromise<SubmitFullBodyClassTaskResponse>;
  /** 发起视频生成精彩集锦接口 */
  SubmitHighlights(data: SubmitHighlightsRequest, config?: AxiosRequestConfig): AxiosPromise<SubmitHighlightsResponse>;
  /** 提交图像分析任务 */
  SubmitImageTask(data: SubmitImageTaskRequest, config?: AxiosRequestConfig): AxiosPromise<SubmitImageTaskResponse>;
  /** 提交高级图像分析任务 */
  SubmitImageTaskPlus(data: SubmitImageTaskPlusRequest, config?: AxiosRequestConfig): AxiosPromise<SubmitImageTaskPlusResponse>;
  /** 提交在线1对1课堂任务 */
  SubmitOneByOneClassTask(data: SubmitOneByOneClassTaskRequest, config?: AxiosRequestConfig): AxiosPromise<SubmitOneByOneClassTaskResponse>;
  /** 提交线下小班（无课桌）课任务 */
  SubmitOpenClassTask(data: SubmitOpenClassTaskRequest, config?: AxiosRequestConfig): AxiosPromise<SubmitOpenClassTaskResponse>;
  /** 提交在线小班课授课任务 */
  SubmitPartialBodyClassTask(data: SubmitPartialBodyClassTaskRequest, config?: AxiosRequestConfig): AxiosPromise<SubmitPartialBodyClassTaskResponse>;
  /** 提交传统面授大班课（含课桌）任务 */
  SubmitTraditionalClassTask(data: SubmitTraditionalClassTaskRequest, config?: AxiosRequestConfig): AxiosPromise<SubmitTraditionalClassTaskResponse>;
  /** 流式音频分析 */
  TransmitAudioStream(data: TransmitAudioStreamRequest, config?: AxiosRequestConfig): AxiosPromise<TransmitAudioStreamResponse>;
}

export declare type Versions = ["2019-03-18"];

export default Tci;
