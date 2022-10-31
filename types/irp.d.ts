/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 不喜欢信息 */
declare interface DislikeInfo {
  /** 过滤的类别：● author 作者名（如当前类型不满足，请提单沟通解决方案） */
  Type: string;
  /** Type对应字段名的值，如：需要过滤的作者名 */
  Value: string;
}

/** 信息流内容 */
declare interface DocItem {
  /** 内容唯一id，建议限制在128字符以内 */
  ItemId: string;
  /** 内容类型：● article -图文● text -纯文本● video -视频● short_video -时长15秒以内的视频● mini_video -竖屏视频● image -纯图片（如当前类型不满足，请提单沟通解决方案） */
  ItemType: string;
  /** 内容状态：● 1 - 上架 ● 2 - 下架 Status=2的内容不会在推荐结果中出现 需要下架内容时，把Status的值修改为2即可 */
  Status: number;
  /** 内容生成时间，秒级时间戳（1639624786），需大于0，用作特征和物料管理 */
  PublishTimestamp: number;
  /** 内容过期时间，秒级时间戳（1639624786），如未填，则默认PublishTimestamp往后延一年，用作特征，过期则不会被推荐，强烈建议 */
  ExpireTimestamp?: number;
  /** 类目层级数，例如3级类目，则填3，和CategoryPath字段的类数据匹配，强烈建议 */
  CategoryLevel?: number;
  /** 类目路径，一级二级三级等依次用英文冒号联接，和CategoryLevel字段值匹配，如体育：“足球:巴塞罗那”。用于物料池管理，强烈建议 */
  CategoryPath?: string;
  /** 内容标签，多个标签用英文冒号联接，用作特征，强烈建议 */
  Tags?: string;
  /** 作者名，需保证作者名唯一，若有重名需要加编号区分。用于召回过滤、规则打散，强烈建议 */
  Author?: string;
  /** 内容来源类型，客户自定义，用于物料池管理 */
  SourceId?: string;
  /** 内容标题，主要用于语义分析 */
  Title?: string;
  /** 正文关键片段，建议控制在500字符以内，主要用于语义分析 */
  Content?: string;
  /** 正文详情，主要用于语义分析，当内容过大时建议用ContentUrl传递，与Content可二选一 */
  ContentUrl?: string;
  /** 视频时长，时间秒，大于等于0，小于 3600 * 10。视频内容必填，其它内容非必填，用作特征 */
  VideoDuration?: number;
  /** 国家，ISO 3166-1 alpha-2编码，参考ISO 3166-1 alpha-2，中国：“CN”，用作特征 */
  Country?: string;
  /** 省份，ISO 3166-2行政区编码，如中国参考ISO_3166-2:CN，广东省：“CN-GD”，用作特征 */
  Province?: string;
  /** 城市地区，统一用国家最新标准地区行政编码，如：2020年行政区编码，其他国家统一用国际公认城市简称或者城市编码，用作特征 */
  City?: string;
  /** 作者粉丝数，用作特征 */
  AuthorFans?: number;
  /** 作者评级，用作特征 */
  AuthorLevel?: string;
  /** 内容累计收藏次数，用作特征 */
  CollectCnt?: number;
  /** 内容累积点赞次数，用作特征 */
  PraiseCnt?: number;
  /** 内容累计评论次数，用作特征 */
  CommentCnt?: number;
  /** 内容累计分享次数，用作特征 */
  ShareCnt?: number;
  /** 内容累积打赏数，用作特征 */
  RewardCnt?: number;
  /** 内容质量评分，用作特征 */
  Score?: number;
  /** json字符串，用于物料池管理的自定义扩展 */
  Extension?: string;
}

/** 信息流行为 */
declare interface FeedBehaviorInfo {
  /** 用户唯一ID，客户自定义用户ID，作为一个用户的唯一标识 */
  UserId: string;
  /** 内容唯一id */
  ItemId: string;
  /** 行为类型： ● expose - 曝光，必须 ● click - 点击，必须 ● stay - 详情页停留时长，强烈建议 ● videoover - 视频播放时长，强烈建议 ● like - 点赞&喜欢，正效果 ● collect - 收藏，正效果 ● share - 转发&分享，正效果 ● reward - 打赏，正效果 ● unlike - 踩&不喜欢，负效果 ● comment - 评论 不支持的行为类型，可以映射到未被使用的其他行为类型。如实际业务数据中有私信行为，没有收藏行为，可以将私信行为映射到收藏行为 */
  BehaviorType: string;
  /** 行为类型对应的行为值： ● expose - 曝光，固定填1 ● click - 点击，固定填1 ● stay - 详情页停留时长，填停留秒数，取值[1-86400] ● videoover - 视频播放时长，填播放结束的秒数，取值[1-86400] ● like - 点赞&喜欢，固定填1 ● collect - 收藏，固定填1 ● share - 转发&分享，固定填1 ● reward - 打赏，填打赏金额，没有则填1 ● unlike - 踩&不喜欢，填不喜欢的原因，没有则填1 ● comment - 评论，填评论内容，如“上海加油” */
  BehaviorValue: string;
  /** 行为发生的时间戳： 秒级时间戳，尽量实时上报，最长不超过半小时否则会影响推荐结果的准确性 */
  BehaviorTimestamp: number;
  /** 行为发生的场景ID，在控制台创建场景后获取 */
  SceneId: string;
  /** 推荐追踪ID，使用推荐结果中返回的ItemTraceId填入。 注意：如果和推荐结果中的ItemTraceId不同，会影响行为特征归因，影响推荐算法效果 */
  ItemTraceId: string;
  /** 内容类型，跟内容上报类型一致，用于效果分析，不做内容校验，强烈建议 */
  ItemType?: string;
  /** 相关推荐场景点击进入详情页的内容id，该字段用来注明行为发生于哪个内容的详情页推荐中，相关推荐场景强烈建议 */
  ReferrerItemId?: string;
  /** 用户设备ID数组，可传入用户的多个类型ID，详见UserIdInfo结构体，建议补齐，用于构建用户画像信息 */
  UserIdList?: UserIdInfo[];
  /** 算法来源： ● business 业务自己的算法对照组 ● tencent 腾讯算法 ● other 其他算法默认为tencent，区分行为来源于哪个算法，用于Poc阶段的效果对比验证 */
  Source?: string;
  /** 行为发生时的国家，ISO 3166-1 alpha-2编码，参考ISO 3166-1 alpha-2，中国：“CN”，用作特征 */
  Country?: string;
  /** 行为发生时的省份，ISO 3166-2行政区编码，如中国参考ISO_3166-2:CN，广东省：“CN-GD”，用作特征 */
  Province?: string;
  /** 行为发生时的城市地区，统一用国家最新标准地区行政编码，如：2020年行政区编码，其他国家统一用国际公认城市简称或者城市编码，用作特征 */
  City?: string;
  /** 行为发生时的客户端ip，用作特征 */
  IP?: string;
  /** 行为发生时的客户端网络类型，用作特征 */
  Network?: string;
  /** 行为发生时的客户端平台，ios/android/h5，用作特征 */
  Platform?: string;
  /** 行为发生时的客户端app版本，用作特征 */
  AppVersion?: string;
  /** 行为发生时的操作系统版本，用作特征 */
  OsVersion?: string;
  /** 行为发生时的机型，用作特征 */
  DeviceModel?: string;
  /** json字符串，用于行为数据的扩展 */
  Extension?: string;
}

/** 信息流用户信息 */
declare interface FeedUserInfo {
  /** 用户唯一ID，客户自定义用户ID，作为一个用户的唯一标识 */
  UserId: string;
  /** 用户设备ID数组，可传入用户的多个类型ID，详见UserIdInfo结构体，建议补齐，用于构建用户画像信息 */
  UserIdList?: UserIdInfo[];
  /** 用户标签，多个标签用英文冒号联接，用作特征，强烈建议 */
  Tags?: string;
  /** 过滤列表，会在推荐结果里过滤掉这类内容 */
  DislikeInfoList?: DislikeInfo[];
  /** 用户年龄 */
  Age?: number;
  /** 用户性别： 0 - 未知 1 - 男 2 - 女 */
  Gender?: number;
  /** 用户学历 ：小学，初中，高中，大专，本科，硕士，博士 */
  Degree?: string;
  /** 用户毕业学校全称 */
  School?: string;
  /** 用户职业 */
  Occupation?: string;
  /** 用户所属行业 */
  Industry?: string;
  /** 用户常驻国家，ISO 3166-1 alpha-2编码，参考ISO 3166-1 alpha-2，中国：“CN” */
  ResidentCountry?: string;
  /** 用户常驻省份，ISO 3166-2行政区编码，如中国参考ISO_3166-2:CN，广东省：“CN-GD” */
  ResidentProvince?: string;
  /** 用户常驻城市，统一用国家最新标准地区行政编码，如：2020年行政区编码， */
  ResidentCity?: string;
  /** 用户注册时间，秒级时间戳（1639624786） */
  RegisterTimestamp?: number;
  /** 用户会员等级 */
  MembershipLevel?: string;
  /** 用户上一次登录时间，秒级时间戳（1639624786） */
  LastLoginTimestamp?: number;
  /** 用户上一次登录的ip */
  LastLoginIp?: string;
  /** 用户信息的最后修改时间戳，秒级时间戳（1639624786） */
  LastModifyTimestamp?: number;
  /** json字符串，用于画像数据的扩展 */
  Extension?: string;
}

/** 推荐返回的内容信息 */
declare interface RecItemData {
  /** 推荐的内容ID */
  ItemId: string;
  /** 内容类型，同内容上报类型一致 */
  ItemType: string | null;
  /** 推荐追踪id，本次推荐内容产生的后续行为上报均要用该ItemTraceId上报。每次接口调用返回的ItemTraceId不同 */
  ItemTraceId: string | null;
  /** 推荐结果分，取值范围[0,1000000] */
  Score: number | null;
}

/** 用户ID信息 */
declare interface UserIdInfo {
  /** 用户ID类型： ● qq: qq号码 ● qq_md5：qq的md5值 ● imei：设备imei ● imei_md5：imei的md5值 ● idfa: Apple 向用户设备随机分配的设备标识符 ● idfa_md5：idfa的md5值 ● oaid：安卓10之后一种非永久性设备标识符 ● oaid_md5：md5后的oaid ● wx_openid：微信openid ● qq_openid：QQ的openid ● phone：电话号码 ● phone_md5：md5后的电话号码 ● phone_sha256：SHA256加密的手机号 ● phone_sm3：国密SM3加密的手机号 （如当前类型不满足，请提单沟通解决方案） */
  Type: string;
  /** 用户ID值 */
  Value: string;
}

declare interface FeedRecommendRequest {
  /** 实例ID，在控制台获取 */
  InstanceId: string;
  /** 场景ID，在控制台创建场景后获取 */
  SceneId: string;
  /** 用户唯一ID，客户自定义用户ID，作为一个用户的唯一标识 */
  UserId: string;
  /** 用户设备ID数组，可传入用户的多个类型ID，用于关联画像信息 */
  UserIdList?: UserIdInfo[];
  /** 推荐返回数量，默认10个，最多支持50个的内容返回。如果有更多数量要求，提单沟通解决 */
  ItemCnt?: number;
  /** 当场景是相关推荐时该值必填，场景是非相关推荐时该值无效 */
  CurrentItemId?: string;
}

declare interface FeedRecommendResponse {
  /** 推荐返回的内容信息列表 */
  DataList: RecItemData[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ReportFeedBehaviorRequest {
  /** 实例ID，在控制台获取 */
  InstanceId: string;
  /** 上报的行为数据数组，数量不超过50 */
  FeedBehaviorList: FeedBehaviorInfo[];
}

declare interface ReportFeedBehaviorResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ReportFeedItemRequest {
  /** 实例ID，在控制台获取 */
  InstanceId: string;
  /** 上报的信息流内容数组，一次数量不超过50 */
  FeedItemList: DocItem[];
}

declare interface ReportFeedItemResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ReportFeedUserRequest {
  /** 实例ID，在控制台获取 */
  InstanceId: string;
  /** 上报的用户信息数组，数量不超过50 */
  FeedUserList: FeedUserInfo[];
}

declare interface ReportFeedUserResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare namespace V20220324 {
  interface VersionHeader { headers: { 'X-TC-Version': '2022-03-24' } }

  /** 作者信息 */
  interface AuthorInfo {
    /** 作者id */
    Id?: string | null;
    /** 作者名称 */
    Name?: string | null;
    /** 作者来源 */
    SourceId?: number | null;
    /** 关注类型：1-关注，2-取关 */
    FollowType?: number | null;
    /** 作者头像icon地址 */
    IconUrl?: string | null;
  }

  /** 不喜欢信息 */
  interface DislikeInfo {
    /** 不喜欢的物料类别，对应物料上传协议中的字段名，如authorId，keyword，topic等 */
    Type: string;
    /** type对应字段名的值，如具体的topic名，作者id等 */
    Value: string;
  }

  /** 行为数据 */
  interface DocBehavior {
    /** 内容唯一ID，如 2824324234 */
    ItemId: string;
    /** 行为类型 */
    BehaviorType: number;
    /** 行为值 */
    BehaviorValue: string;
    /** 行为时间戳： 秒级时间戳（默认为当前时间）,不能延迟太久，尽量实时上报，否则会影响推荐结果的准确性。 */
    BehaviorTimestamp: number;
    /** 场景id，在控制台创建场景后获取。 */
    SceneId: string;
    /** 用户id列表 */
    UserIdList: UserIdInfo[];
    /** 会话id，使用获取推荐结果中返回的RecTraceId填入。注意：如果和在线推荐请求中的traceId不同，会影响行为特征归因，影响推荐算法效果 */
    RecTraceId: string;
    /** 算法来源：用来区分行为来源于哪个算法。值为**business，tencent，other** 三者之一● business 表示业务自己的算法对照组● tencent 为腾讯算法● other 为其他算法 */
    Source: string;
    /** 物料类型 */
    ItemType?: number;
    /** 微信开放平台上查看appId */
    AppId?: string;
    /** 回传video_over事件的时候，回传的用户播放视频的总时长（真正播放的，拖动不算，单位为秒） */
    VideoPlayDuration?: number;
    /** 来源物料内容：用来标识在指定内容页面产生的行为，如需要统计用户在A内容详情页里，对推荐内容B点击等行为，则ReferrerItemId代表内容A，ItemId代表内容B */
    ReferrerItemId?: string;
    /** 国家，统一用简写，比如中国则填写CN */
    Country?: string;
    /** 省 */
    Province?: string;
    /** 城市 */
    City?: string;
    /** 区县 */
    District?: string;
    /** 客户端ip */
    IP?: string;
    /** 客户端网络类型 */
    Network?: string;
    /** 客户端平台，ios/android/h5 */
    Platform?: string;
    /** 客户端app版本 */
    AppVersion?: string;
    /** 操作系统版本 */
    OsVersion?: string;
    /** 机型 */
    DeviceModel?: string;
    /** json字符串，用于行为数据的扩展 */
    Extension?: string;
  }

  /** 推荐物料信息 */
  interface DocItem {
    /** 内容唯一id */
    ItemId: string;
    /** 内容类型 */
    ItemType: number;
    /** 内容状态：1 - 上架， 2 - 下架 */
    Status: number;
    /** 内容生成时间，秒级时间戳（1639624786），需大于0 */
    PublishTimestamp: number;
    /** 物料来源ID */
    SourceId?: number;
    /** 标题名称 */
    Title?: string;
    /** 内容正文 */
    Content?: string;
    /** 作者 */
    Author?: string;
    /** 作者id */
    AuthorId?: string;
    /** 标签关键词，多个用英文分号分割 */
    Keyword?: string;
    /** 内容物料描述：物料的描述信息，推荐系统会对内容的描述信息，使用否LP技术，进行分词、提取关键词，作为news的特征使用。 */
    Desc?: string;
    /** 图片url */
    PicUrlList?: string[];
    /** 视频url */
    VideoUrlList?: string[];
    /** 视频时长，时间秒 */
    VideoDuration?: number;
    /** 类目层级数，例如3级类目，则填3，和CategoryPath字段的类数据匹配 */
    CategoryLevel?: number;
    /** 类目路径，一级二级三级等依次用英文冒号联接，如体育：“足球:巴塞罗那” */
    CategoryPath?: string;
    /** 国家，统一用简写，比如中国则填写CN */
    Country?: string;
    /** 省 */
    Province?: string;
    /** 城市 */
    City?: string;
    /** 区县 */
    District?: string;
    /** 内容过期时间，秒级时间戳（1639624786），如未填，则默认PublishTimestamp往后延一年 */
    ExpireTimestamp?: number;
    /** 所属话题 */
    Topic?: string;
    /** 作者粉丝数 */
    AuthorFans?: number;
    /** 作者评级 */
    AuthorLevel?: string;
    /** 内容累计收藏次数 */
    CollectCnt?: number;
    /** 内容累积点赞次数 */
    PraiseCnt?: number;
    /** 内容累计评论次数 */
    CommentCnt?: number;
    /** 内容累计分享次数 */
    ShareCnt?: number;
    /** 内容累积打赏数 */
    RewardCnt?: number;
    /** 内容质量评分，类似豆瓣电影的评分，这里为100分制，比如97分，满分100分，最低0分，范围外的将会被拦截 */
    Score?: number;
    /** 内容池id，用于分内容池召回，一个内容支持指定一个或多个内容池， 内容池id不建议使用0（0表示不区分内容池） */
    PoolIdList?: string[];
    /** 描述用户标签 */
    TagInfoList?: TagInfo[];
    /** json字符串，用于物料数据的扩展 */
    Extension?: string;
  }

  /** 画像信息 */
  interface PortraitInfo {
    /** 用户id列表 */
    UserIdList: UserIdInfo[];
    /** 如果"userIdType"是10则必传，在微信开放平台上查看appId */
    AppId?: string;
    /** 用户年龄，值域在 0-200 */
    Age?: number;
    /** 用户性别：0-未知，1-男， 2-女 */
    Gender?: number;
    /** 用户学历 ：小学，初中，高中，大专，本科，硕士，博士 */
    Degree?: string;
    /** 用户毕业学校全称 */
    School?: string;
    /** 用户职业，保证业务的唯一性 */
    Occupation?: string;
    /** 用户所属行业，保证业务的唯一性 */
    Industry?: string;
    /** 用户常驻国家，统一用简写，比如中国则填写CN */
    ResidentCountry?: string;
    /** 用户常驻省份 */
    ResidentProvince?: string;
    /** 用户常驻城市 */
    ResidentCity?: string;
    /** 用户常驻区县 */
    ResidentDistrict?: string;
    /** 用户手机的MD5值 */
    PhoneMd5?: string;
    /** 用户手机的IMEI号 */
    PhoneImei?: string;
    /** 设备idfa信息 */
    Idfa?: string;
    /** 用户注册时间，秒级时间戳（1639624786） */
    RegisterTimestamp?: number;
    /** 用户会员等级 */
    MembershipLevel?: string;
    /** 用户上一次登录时间，秒级时间戳（1639624786） */
    LastLoginTimestamp?: number;
    /** 用户上一次登录的ip */
    LastLoginIp?: string;
    /** 用户信息的最后修改时间戳，秒级时间戳（1639624786） */
    LastModifyTimestamp?: number;
    /** 用户标签 */
    TagInfoList?: TagInfo[];
    /** 用户关注作者列表 */
    AuthorInfoList?: AuthorInfo[];
    /** 用户不喜欢列表 */
    DislikeInfoList?: DislikeInfo[];
    /** json字符串，用于画像数据的扩展 */
    Extension?: string;
    /** 设备oaid信息 */
    Oaid?: string;
    /** 设备AndroidId信息 */
    AndroidId?: string;
  }

  /** 推荐内容信息 */
  interface RecItemData {
    /** 推荐的内容id，即用户行为上报中的itemId */
    ItemId: string;
    /** 物料子类型，包括如下： 1-图文、2-长视频（横视频）、3-短视频（横视频）、4-小说、5-小视频（竖视频）、6-纯文本 */
    ItemType: number | null;
    /** 推荐内容的权重，取值范围[0,1000000] */
    Weight: number | null;
    /** 推荐预测分 */
    Score: number | null;
    /** 关键词，多个用英文分号分割，和物料上传的keyword一致 */
    Keyword: string | null;
  }

  /** 标题信息 */
  interface TagInfo {
    /** 标签id */
    Id?: string | null;
    /** 标签名 */
    Name?: string | null;
    /** 推荐权重 */
    Weight?: number | null;
  }

  /** 用户信息 */
  interface UserIdInfo {
    /** 用户ID类型：1 - qq2 - qq_md5：md5后的qq3 - imei：设备imei（安卓10之后不会再授权imei，安卓10之后的imei映射关系可能拿不到，故安卓10之后的设备建议用oaid）4 - imei_md5：md5后的imei5 - idfa: Apple 向用户设备随机分配的设备标识符6 - idfa_md5：md5之后的idfa7 - gdt_openid：广点通生成的openid8 - oaid：安卓10之后一种非永久性设备标识符9 - oaid_md5：md5后的oaid10 - wx_openid：微信openid11 - qq_openid：QQ的openid12 - phone：电话号码13 - phone_md5：md5后的电话号码14 - phone_sha256：SHA256加密的手机号15 - phone_sm3：国密SM3加密的手机号1000 - 客户自定义id */
    UserIdType: number;
    /** 用户id */
    UserId: string;
  }

  interface RecommendContentRequest {
    /** 业务id */
    Bid: string;
    /** 场景id：比如有“猜你喜欢”，“热门内容”等推荐模块，每一个模块都有一个scene_id来表示。 在控制台创建场景后获取。需要跟行为上报时的id一致 */
    SceneId: string;
    /** 用户唯一ID数组，每个数组元素详见userId结构体，若不填，则接口返回热门结果 */
    UserIdList?: UserIdInfo[];
    /** 会话id：必须和行为数据上报时所填写的traceId相同，用于行为数据来自于那次在线推荐请求的归因。**注意：此处如果没传，则响应会返回一个全局唯一ID返回给客户，并需客户透传给行为日志上报接口** */
    RecTraceId?: string;
    /** 推荐数量：物料优选的结果， 默认50个，目前最多支持200个的内容返回，如果返回个数更多，会影响性能，容易超时。 */
    ItemCnt?: number;
    /** 物料池id，用于召回该pool_id下的商品，如果有多个，用英文;分割。**注意：此处poolId需和物料上报时的poolIdList对应上** */
    PoolId?: string;
    /** 来源物料id，即用户当前浏览的物料id，用于在内容详情页获取关联推荐内容 */
    CurrentItemId?: string;
    /** 请求响应超时时间，单位ms，默认300ms，数值设置的过小，会影响推荐效果，最小支持250ms */
    ResponseTimeout?: number;
    /** 返回结果中不同物料类型的比例，比例顺序需严格按照（图文，长视频，短视频，小视频）进行。只允许传[0,100]数字，多个请用**英文冒号**分割，且加起来不能超过100，以及比例数量不能超过**场景绑定的物料类型**（图文，长视频，短视频，小视频）数。**示例：**图文和短视频比例为40%:60%时，则填40:60图文和短视频比例为0%:100%时，则填0:100图文，长视频和短视频的比例为，图文占20%，剩余80%由长视频和短视频随机返回，则填20:80或仅填20均可 */
    ItemTypeRatio?: string;
  }

  interface RecommendContentResponse {
    /** 推荐追踪id，用于行为上报。每次接口调用返回的traceId不同 */
    RecTraceId: string;
    /** 标识具体的物料信息 */
    DataList: RecItemData[];
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface ReportActionRequest {
    /** 业务id */
    Bid: string;
    /** 上报的行为对象数组，数量不超过50 */
    DocBehaviorList: DocBehavior[];
  }

  interface ReportActionResponse {
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface ReportMaterialRequest {
    /** 业务id */
    Bid: string;
    /** 上报的信息流数组，一次数量不超过50 */
    DocItemList: DocItem[];
  }

  interface ReportMaterialResponse {
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }

  interface ReportPortraitRequest {
    /** 推荐平台上的业务id */
    Bid: string;
    /** 上报的用户画像数组，数量不超过50 */
    PortraitList: PortraitInfo[];
  }

  interface ReportPortraitResponse {
    /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
    RequestId?: string;
  }
}

/** {@link Irp 智能推荐平台} */
declare interface Irp {
  (): Versions;
  /** {@link FeedRecommend 获取信息流推荐结果}({@link FeedRecommendRequest 请求参数}): {@link FeedRecommendResponse 返回参数} */
  FeedRecommend(data: FeedRecommendRequest, config?: AxiosRequestConfig): AxiosPromise<FeedRecommendResponse>;
  /** {@link ReportFeedBehavior 上报信息流行为数据}({@link ReportFeedBehaviorRequest 请求参数}): {@link ReportFeedBehaviorResponse 返回参数} */
  ReportFeedBehavior(data: ReportFeedBehaviorRequest, config?: AxiosRequestConfig): AxiosPromise<ReportFeedBehaviorResponse>;
  /** {@link ReportFeedItem 上报信息流内容信息}({@link ReportFeedItemRequest 请求参数}): {@link ReportFeedItemResponse 返回参数} */
  ReportFeedItem(data: ReportFeedItemRequest, config?: AxiosRequestConfig): AxiosPromise<ReportFeedItemResponse>;
  /** {@link ReportFeedUser 上报信息流用户信息}({@link ReportFeedUserRequest 请求参数}): {@link ReportFeedUserResponse 返回参数} */
  ReportFeedUser(data: ReportFeedUserRequest, config?: AxiosRequestConfig): AxiosPromise<ReportFeedUserResponse>;
  /** {@link V20220324.RecommendContent 获取推荐结果}({@link V20220324.RecommendContentRequest 请求参数}): {@link V20220324.RecommendContentResponse 返回参数} */
  RecommendContent(data: V20220324.RecommendContentRequest, config: AxiosRequestConfig & V20220324.VersionHeader): AxiosPromise<V20220324.RecommendContentResponse>;
  /** {@link V20220324.ReportAction 上报行为}({@link V20220324.ReportActionRequest 请求参数}): {@link V20220324.ReportActionResponse 返回参数} */
  ReportAction(data: V20220324.ReportActionRequest, config: AxiosRequestConfig & V20220324.VersionHeader): AxiosPromise<V20220324.ReportActionResponse>;
  /** {@link V20220324.ReportMaterial 上报物料}({@link V20220324.ReportMaterialRequest 请求参数}): {@link V20220324.ReportMaterialResponse 返回参数} */
  ReportMaterial(data: V20220324.ReportMaterialRequest, config: AxiosRequestConfig & V20220324.VersionHeader): AxiosPromise<V20220324.ReportMaterialResponse>;
  /** {@link V20220324.ReportPortrait 上报用户画像}({@link V20220324.ReportPortraitRequest 请求参数}): {@link V20220324.ReportPortraitResponse 返回参数} */
  ReportPortrait(data: V20220324.ReportPortraitRequest, config: AxiosRequestConfig & V20220324.VersionHeader): AxiosPromise<V20220324.ReportPortraitResponse>;
}

export declare type Versions = ["2022-08-05", "2022-03-24"];

export default Irp;
