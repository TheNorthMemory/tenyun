/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 返回的回复, 支持多个 */
declare interface Choice {
  /** 结束标志位，可能为 stop、 sensitive或者tool_calls。stop 表示输出正常结束。sensitive 只在开启流式输出审核时会出现，表示安全审核未通过。tool_calls 标识函数调用。 */
  FinishReason?: string;
  /** 增量返回值，流式调用时使用该字段。 */
  Delta?: Delta | null;
  /** 返回值，非流式调用时使用该字段。 */
  Message?: Message | null;
}

/** 可以传入多种类型的内容，如图片或文本。当前只支持传入单张图片，传入多张图片时，以第一个图片为准。 */
declare interface Content {
  /** 内容类型注意：当前只支持传入单张图片，传入多张图片时，以第一个图片为准。 */
  Type: string | null;
  /** 当 Type 为 text 时使用，表示具体的文本内容 */
  Text?: string | null;
  /** 图片的url，当 Type 为 image_url 时使用，表示具体的图片内容如"https://example.com/1.png" 或 图片的base64（注意 "data:image/jpeg;base64," 为必要部分）："data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAA......" */
  ImageUrl?: ImageUrl | null;
}

/** 返回的内容（流式返回） */
declare interface Delta {
  /** 角色名称。 */
  Role?: string;
  /** 内容详情。 */
  Content?: string;
  /** 模型生成的工具调用，仅 hunyuan-functioncall 模型支持说明：对于每一次的输出值应该以Id为标识对Type、Name、Arguments字段进行合并。 */
  ToolCalls?: ToolCall[] | null;
}

/** Embedding 信息。 */
declare interface EmbeddingData {
  /** Embedding 信息，目前为 1024 维浮点数。 */
  Embedding?: number[] | null;
  /** 下标，目前不支持批量，因此固定为 0。 */
  Index?: number | null;
  /** 目前固定为 "embedding"。 */
  Object?: string | null;
}

/** Token 使用计数。 */
declare interface EmbeddingUsage {
  /** 输入 Token 数。 */
  PromptTokens?: number;
  /** 总 Token 数。 */
  TotalTokens?: number;
}

/** 运行时异常信息。 */
declare interface ErrorMsg {
  /** 错误提示信息。 */
  Msg?: string;
  /** 错误码。4000 服务内部异常。4001 请求模型超时。 */
  Code?: number;
}

/** 混元生图多轮对话历史记录。 */
declare interface History {
  /** 对话的 ID，用于唯一标识一轮对话 */
  ChatId?: string | null;
  /** 原始输入的 Prompt 文本 */
  Prompt?: string | null;
  /** 扩写后的 Prompt 文本 */
  RevisedPrompt?: string | null;
  /** 生成图的随机种子 */
  Seed?: number | null;
}

/** 具体的图片内容 */
declare interface ImageUrl {
  /** 图片的 Url（以 http:// 或 https:// 开头） */
  Url: string | null;
}

/** logo参数 */
declare interface LogoParam {
  /** 水印url */
  LogoUrl?: string;
  /** 水印base64，url和base64二选一传入 */
  LogoImage?: string;
  /** 水印图片位于融合结果图中的坐标，将按照坐标对标识图片进行位置和大小的拉伸匹配 */
  LogoRect?: LogoRect;
}

/** 输入框 */
declare interface LogoRect {
  /** 左上角X坐标 */
  X?: number;
  /** 左上角Y坐标 */
  Y?: number;
  /** 方框宽度 */
  Width?: number;
  /** 方框高度 */
  Height?: number;
}

/** 会话内容 */
declare interface Message {
  /** 角色，可选值包括 system、user、assistant、 tool。 */
  Role: string;
  /** 文本内容 */
  Content?: string;
  /** 多种类型内容（目前支持图片和文本），仅 hunyuan-vision 模型支持 */
  Contents?: Content[] | null;
  /** 当role为tool时传入，标识具体的函数调用 */
  ToolCallId?: string | null;
  /** 模型生成的工具调用，仅 hunyuan-pro 或者 hunyuan-functioncall 模型支持 */
  ToolCalls?: ToolCall[] | null;
}

/** 多媒体详情 */
declare interface Multimedia {
  /** 多媒体类型，可选值包括 image、music、album、playlist。说明：1. image：图片；music：单曲，类型为单曲时，会返回详细歌手和歌曲信息；album：专辑；playlist：歌单。2. 当 type 为 music、album、playlist 时，需要配合 [QQ音乐SDK](https://developer.y.qq.com/) 使用。 */
  Type?: string;
  /** 多媒体地址。说明：1. type 为 image 时，地址为图片的预览地址；其他类型时，地址为封面图地址。 */
  Url?: string;
  /** 多媒体详情地址。说明：1. 仅 type 为 image 时，该字段有值。 */
  JumpUrl?: string | null;
  /** 名称。说明：1. type 为 image 时，该字段为空。 */
  Title?: string | null;
  /** 描述。 */
  Desc?: string | null;
  /** 歌手名称。说明：1. 仅 type 为 music 时，该字段有值。 */
  Singer?: string | null;
  /** 歌曲详情。说明：1. 仅 type 为 music 时，该字段有值。 */
  Ext?: SongExt | null;
}

/** 多媒体占位符替换信息 */
declare interface Replace {
  /** 占位符序号 */
  Id?: string;
  /** 多媒体详情 */
  Multimedia?: Multimedia[];
}

/** 搜索结果信息 */
declare interface SearchInfo {
  /** 搜索引文信息 */
  SearchResults?: SearchResult[] | null;
}

/** 搜索引文信息 */
declare interface SearchResult {
  /** 搜索引文序号 */
  Index?: number | null;
  /** 搜索引文标题 */
  Title?: string | null;
  /** 搜索引文链接 */
  Url?: string | null;
}

/** 歌曲详情。具体含义参考 [QQ音乐SDK](https://developer.y.qq.com/) */
declare interface SongExt {
  /** 歌曲id */
  SongId?: number;
  /** 歌曲mid */
  SongMid?: string;
  /** 歌曲是否为vip。1：vip歌曲； 0：普通歌曲。 */
  Vip?: number;
}

/** 用户指定模型使用的工具 */
declare interface Tool {
  /** 工具类型，当前只支持function */
  Type: string;
  /** 具体要调用的function */
  Function: ToolFunction;
}

/** 模型生成的工具调用 */
declare interface ToolCall {
  /** 工具调用id */
  Id: string;
  /** 工具调用类型，当前只支持function */
  Type: string;
  /** 具体的function调用 */
  Function: ToolCallFunction;
}

/** 具体的function调用 */
declare interface ToolCallFunction {
  /** function名称 */
  Name: string;
  /** function参数，一般为json字符串 */
  Arguments: string;
}

/** function定义 */
declare interface ToolFunction {
  /** function名称，只能包含a-z，A-Z，0-9，\_或- */
  Name: string;
  /** function参数，一般为json字符串 */
  Parameters: string;
  /** function的简单描述 */
  Description?: string;
}

/** Token 数量 */
declare interface Usage {
  /** 输入 Token 数量。 */
  PromptTokens?: number;
  /** 输出 Token 数量。 */
  CompletionTokens?: number;
  /** 总 Token 数量。 */
  TotalTokens?: number;
}

declare interface ActivateServiceRequest {
  /** 开通之后，是否关闭后付费；默认为0，不关闭；1为关闭 */
  PayMode?: number;
}

declare interface ActivateServiceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ChatCompletionsRequest {
  /** 模型名称，可选值包括 hunyuan-lite、hunyuan-standard、hunyuan-standard-256K、hunyuan-pro、 hunyuan-code、 hunyuan-role、 hunyuan-functioncall、 hunyuan-vision、 hunyuan-turbo、 hunyuan-turbo-latest。各模型介绍请阅读 [产品概述](https://cloud.tencent.com/document/product/1729/104753) 中的说明。注意：不同的模型计费不同，请根据 [购买指南](https://cloud.tencent.com/document/product/1729/97731) 按需调用。 */
  Model: string;
  /** 聊天上下文信息。说明：1. 长度最多为 40，按对话时间从旧到新在数组中排列。2. Message.Role 可选值：system、user、assistant、 tool（functioncall场景）。其中，system 角色可选，如存在则必须位于列表的最开始。user（tool） 和 assistant 需交替出现（一问一答），以 user 提问开始，user（tool）提问结束，其中tool可以连续出现多次，且 Content 不能为空。Role 的顺序示例：[system（可选） user assistant user（tool tool ...） assistant user（tool tool ...） ...]。3. Messages 中 Content 总长度不能超过模型输入长度上限（可参考 [产品概述](https://cloud.tencent.com/document/product/1729/104753) 文档），超过则会截断最前面的内容，只保留尾部内容。 */
  Messages: Message[];
  /** 流式调用开关。说明：1. 未传值时默认为非流式调用（false）。2. 流式调用时以 SSE 协议增量返回结果（返回值取 Choices[n].Delta 中的值，需要拼接增量数据才能获得完整结果）。3. 非流式调用时：调用方式与普通 HTTP 请求无异。接口响应耗时较长，**如需更低时延建议设置为 true**。只返回一次最终结果（返回值取 Choices[n].Message 中的值）。注意：通过 SDK 调用时，流式和非流式调用需用**不同的方式**获取返回值，具体参考 SDK 中的注释或示例（在各语言 SDK 代码仓库的 examples/hunyuan/v20230901/ 目录中）。 */
  Stream?: boolean;
  /** 流式输出审核开关。说明：1. 当使用流式输出（Stream 字段值为 true）时，该字段生效。2. 输出审核有流式和同步两种模式，**流式模式首包响应更快**。未传值时默认为流式模式（true）。3. 如果值为 true，将对输出内容进行分段审核，审核通过的内容流式输出返回。如果出现审核不过，响应中的 FinishReason 值为 sensitive。4. 如果值为 false，则不使用流式输出审核，需要审核完所有输出内容后再返回结果。注意：当选择流式输出审核时，可能会出现部分内容已输出，但中间某一段响应中的 FinishReason 值为 sensitive，此时说明安全审核未通过。如果业务场景有实时文字上屏的需求，需要自行撤回已上屏的内容，并建议自定义替换为一条提示语，如 “这个问题我不方便回答，不如我们换个话题试试”，以保障终端体验。 */
  StreamModeration?: boolean;
  /** 说明：1. 影响输出文本的多样性。模型已有默认参数，不传值时使用各模型推荐值，不推荐用户修改。2. 取值区间为 [0.0, 1.0]。取值越大，生成文本的多样性越强。 */
  TopP?: number;
  /** 说明：1. 影响模型输出多样性，模型已有默认参数，不传值时使用各模型推荐值，不推荐用户修改。2. 取值区间为 [0.0, 2.0]。较高的数值会使输出更加多样化和不可预测，而较低的数值会使其更加集中和确定。 */
  Temperature?: number;
  /** 功能增强（如搜索）开关。说明：1. hunyuan-lite 无功能增强（如搜索）能力，该参数对 hunyuan-lite 版本不生效。2. 未传值时默认打开开关。3. 关闭时将直接由主模型生成回复内容，可以降低响应时延（对于流式输出时的首字时延尤为明显）。但在少数场景里，回复效果可能会下降。4. 安全审核能力不属于功能增强范围，不受此字段影响。 */
  EnableEnhancement?: boolean;
  /** 可调用的工具列表，仅对 hunyuan-pro、hunyuan-turbo、hunyuan-functioncall 模型生效。 */
  Tools?: Tool[];
  /** 工具使用选项，可选值包括 none、auto、custom。说明：1. 仅对 hunyuan-pro、hunyuan-turbo、hunyuan-functioncall 模型生效。2. none：不调用工具；auto：模型自行选择生成回复或调用工具；custom：强制模型调用指定的工具。3. 未设置时，默认值为auto */
  ToolChoice?: string;
  /** 强制模型调用指定的工具，当参数ToolChoice为custom时，此参数为必填 */
  CustomTool?: Tool;
  /** 默认是false，在值为true且命中搜索时，接口会返回SearchInfo */
  SearchInfo?: boolean;
  /** 搜索引文角标开关。说明：1. 配合EnableEnhancement和SearchInfo参数使用。打开后，回答中命中搜索的结果会在片段后增加角标标志，对应SearchInfo列表中的链接。2. false：开关关闭，true：开关打开。3. 未传值时默认开关关闭（false）。 */
  Citation?: boolean;
  /** 是否开启极速版搜索，默认false，不开启；在开启且命中搜索时，会启用极速版搜索，流式输出首字返回更快。 */
  EnableSpeedSearch?: boolean;
  /** 多媒体开关。详细介绍请阅读 [多媒体介绍](https://cloud.tencent.com/document/product/1729/111178) 中的说明。说明：1. 该参数目前仅对白名单内用户生效，如您想体验该功能请 [联系我们](https://cloud.tencent.com/act/event/Online_service)。2. 该参数仅在功能增强（如搜索）开关开启（EnableEnhancement=true）并且极速版搜索开关关闭（EnableSpeedSearch=false）时生效。3. hunyuan-lite 无多媒体能力，该参数对 hunyuan-lite 版本不生效。4. 未传值时默认关闭。5. 开启并搜索到对应的多媒体信息时，会输出对应的多媒体地址，可以定制个性化的图文消息。 */
  EnableMultimedia?: boolean;
}

declare interface ChatCompletionsResponse {
  /** Unix 时间戳，单位为秒。 */
  Created?: number;
  /** Token 统计信息。按照总 Token 数量计费。 */
  Usage?: Usage;
  /** 免责声明。 */
  Note?: string;
  /** 本次请求的 RequestId。 */
  Id?: string;
  /** 回复内容。 */
  Choices?: Choice[];
  /** 错误信息。如果流式返回中服务处理异常，返回该错误信息。 */
  ErrorMsg?: ErrorMsg | null;
  /** 多轮会话风险审核，值为1时，表明存在信息安全风险，建议终止客户多轮会话。 */
  ModerationLevel?: string;
  /** 搜索结果信息 */
  SearchInfo?: SearchInfo;
  /** 多媒体信息。说明：1. 可以用多媒体信息替换回复内容里的占位符，得到完整的消息。2. 可能会出现回复内容里存在占位符，但是因为审核等原因没有返回多媒体信息。 */
  Replaces?: Replace[];
  /** 唯一请求 ID，每次请求都会返回。本接口为流式响应接口，当请求成功时，RequestId 会被放在 HTTP 响应的 Header "X-TC-RequestId" 中。 */
  RequestId?: string;
}

declare interface GetEmbeddingRequest {
  /** 输入文本。总长度不超过 1024 个 Token，超过则会截断最后面的内容。 */
  Input: string;
}

declare interface GetEmbeddingResponse {
  /** 返回的 Embedding 信息。当前不支持批量，所以数组元素数目为 1。 */
  Data?: EmbeddingData[];
  /** Token 使用计数，按照总 Token 数量收费。 */
  Usage?: EmbeddingUsage;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetTokenCountRequest {
  /** 输入文本 */
  Prompt: string;
}

declare interface GetTokenCountResponse {
  /** token计数 */
  TokenCount?: number;
  /** 字符计数 */
  CharacterCount?: number;
  /** 切分后的列表 */
  Tokens?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryHunyuanImageChatJobRequest {
  /** 任务 ID。 */
  JobId?: string;
}

declare interface QueryHunyuanImageChatJobResponse {
  /** 当前任务状态码：1：等待中、2：运行中、4：处理失败、5：处理完成。 */
  JobStatusCode?: string;
  /** 当前任务状态：排队中、处理中、处理失败或者处理完成。 */
  JobStatusMsg?: string;
  /** 任务处理失败错误码。 */
  JobErrorCode?: string;
  /** 任务处理失败错误信息。 */
  JobErrorMsg?: string;
  /** 本轮对话的 ChatId，ChatId 用于唯一标识一轮对话。一个对话组中，最多支持进行100轮对话。每轮对话数据有效期为7天，到期后 ChatId 失效，有效期内的历史对话数据可通过 History 查询，如有长期使用需求请及时保存输入输出数据。 */
  ChatId?: string;
  /** 生成图 URL 列表，有效期7天，请及时保存。 */
  ResultImage?: string[];
  /** 结果 detail 数组，Success 代表成功。 */
  ResultDetails?: string[];
  /** 本轮对话前置的历史对话数据（不含生成图）。 */
  History?: History[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryHunyuanImageJobRequest {
  /** 任务 ID。 */
  JobId: string;
}

declare interface QueryHunyuanImageJobResponse {
  /** 当前任务状态码：1：等待中、2：运行中、4：处理失败、5：处理完成。 */
  JobStatusCode?: string;
  /** 当前任务状态：排队中、处理中、处理失败或者处理完成。 */
  JobStatusMsg?: string;
  /** 任务处理失败错误码。 */
  JobErrorCode?: string;
  /** 任务处理失败错误信息。 */
  JobErrorMsg?: string;
  /** 生成图 URL 列表，有效期1小时，请及时保存。 */
  ResultImage?: string[];
  /** 结果 detail 数组，Success 代表成功。 */
  ResultDetails?: string[];
  /** 对应 SubmitTextToImageProJob 接口中 Revise 参数。开启扩写时，返回扩写后的 prompt 文本。 如果关闭扩写，将直接返回原始输入的 prompt。 */
  RevisedPrompt?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SetPayModeRequest {
  /** 设置后付费状态，0：后付费；1：预付费 */
  PayMode: number;
}

declare interface SetPayModeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SubmitHunyuanImageChatJobRequest {
  /** 本轮对话的文本描述。提交一个任务请求对应发起一轮生图对话，每轮对话中可输入一条 Prompt，生成一张图像，支持通过多轮输入 Prompt 来不断调整图像内容。推荐使用中文，最多可传1024个 utf-8 字符。输入示例： 第一轮对话：一颗红色的苹果 第二轮对话：将苹果改为绿色 第三轮对话：苹果放在桌子上 */
  Prompt: string;
  /** 上传上一轮对话的 ChatId，本轮对话将在指定的上一轮对话结果基础上继续生成图像。如果不传代表新建一个对话组，重新开启一轮新的对话。一个对话组中，最多支持进行100轮对话。 */
  ChatId?: string;
  /** 为生成结果图添加显式水印标识的开关，默认为1。 1：添加。 0：不添加。 其他数值：默认按1处理。 建议您使用显著标识来提示结果图使用了 AI 绘画技术，是 AI 生成的图片。 */
  LogoAdd?: number;
  /** 标识内容设置。默认在生成结果图右下角添加“图片由 AI 生成”字样，您可根据自身需要替换为其他的标识图片。 */
  LogoParam?: LogoParam;
}

declare interface SubmitHunyuanImageChatJobResponse {
  /** 任务 ID。 */
  JobId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SubmitHunyuanImageJobRequest {
  /** 文本描述。 算法将根据输入的文本智能生成与之相关的图像。 不能为空，推荐使用中文。最多可传1024个 utf-8 字符。 */
  Prompt: string;
  /** 绘画风格。请在 [混元生图风格列表](https://cloud.tencent.com/document/product/1729/105846) 中选择期望的风格，传入风格编号。不传默认不指定风格。 */
  Style?: string;
  /** 生成图分辨率。支持生成以下分辨率的图片：768:768（1:1）、768:1024（3:4）、1024:768（4:3）、1024:1024（1:1）、720:1280（9:16）、1280:720（16:9）、768:1280（3:5）、1280:768（5:3），不传默认使用1024:1024。 */
  Resolution?: string;
  /** 图片生成数量。支持1 ~ 4张，默认生成1张。 */
  Num?: number;
  /** 随机种子，默认随机。不传：随机种子生成。正数：固定种子生成。 */
  Seed?: number;
  /** prompt 扩写开关。1为开启，0为关闭，不传默认开启。开启扩写后，将自动扩写原始输入的 prompt 并使用扩写后的 prompt 生成图片，返回生成图片结果时将一并返回扩写后的 prompt 文本。如果关闭扩写，将直接使用原始输入的 prompt 生成图片。建议开启，在多数场景下可提升生成图片效果、丰富生成图片细节。 */
  Revise?: number;
  /** 为生成结果图添加显式水印标识的开关，默认为1。 1：添加。 0：不添加。 其他数值：默认按1处理。 建议您使用显著标识来提示结果图使用了 AI 绘画技术，是 AI 生成的图片。 */
  LogoAdd?: number;
  /** 标识内容设置。默认在生成结果图右下角添加“图片由 AI 生成”字样，您可根据自身需要替换为其他的标识图片。 */
  LogoParam?: LogoParam;
}

declare interface SubmitHunyuanImageJobResponse {
  /** 任务 ID。 */
  JobId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface TextToImageLiteRequest {
  /** 文本描述。算法将根据输入的文本智能生成与之相关的图像。建议详细描述画面主体、细节、场景等，文本描述越丰富，生成效果越精美。不能为空，推荐使用中文。最多可传256个 utf-8 字符。 */
  Prompt: string;
  /** 反向文本描述。用于一定程度上从反面引导模型生成的走向，减少生成结果中出现描述内容的可能，但不能完全杜绝。推荐使用中文。最多可传256个 utf-8 字符。 */
  NegativePrompt?: string;
  /** 绘画风格。请在 [文生图轻量版风格列表](https://cloud.tencent.com/document/product/1729/108992) 中选择期望的风格，传入风格编号。不传默认使用201（日系动漫风格）。 */
  Style?: string;
  /** 生成图分辨率。支持生成以下分辨率的图片：768:768（1:1）、768:1024（3:4）、1024:768（4:3）、1024:1024（1:1）、720:1280（9:16）、1280:720（16:9）、768:1280（3:5）、1280:768（5:3）、1080:1920（9:16）、1920:1080（16:9），不传默认使用768:768。 */
  Resolution?: string;
  /** 为生成结果图添加标识的开关，默认为1。1：添加标识。0：不添加标识。其他数值：默认按0处理。建议您使用显著标识来提示结果图使用了 AI 绘画技术，是 AI 生成的图片。 */
  LogoAdd?: number;
  /** 标识内容设置。默认在生成结果图右下角添加“图片由 AI 生成”字样，您可根据自身需要替换为其他的标识图片。 */
  LogoParam?: LogoParam;
  /** 返回图像方式（base64 或 url) ，二选一，默认为 base64。url 有效期为1小时。 */
  RspImgType?: string;
}

declare interface TextToImageLiteResponse {
  /** 根据入参 RspImgType 填入不同，返回不同的内容。如果传入 base64 则返回生成图 Base64 编码。如果传入 url 则返回的生成图 URL , 有效期1小时，请及时保存。 */
  ResultImage?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Hunyuan 腾讯混元大模型} */
declare interface Hunyuan {
  (): Versions;
  /** 开通服务 {@link ActivateServiceRequest} {@link ActivateServiceResponse} */
  ActivateService(data?: ActivateServiceRequest, config?: AxiosRequestConfig): AxiosPromise<ActivateServiceResponse>;
  /** hunyuan {@link ChatCompletionsRequest} {@link ChatCompletionsResponse} */
  ChatCompletions(data: ChatCompletionsRequest, config?: AxiosRequestConfig): AxiosPromise<ChatCompletionsResponse>;
  /** hunyuan-embedding {@link GetEmbeddingRequest} {@link GetEmbeddingResponse} */
  GetEmbedding(data: GetEmbeddingRequest, config?: AxiosRequestConfig): AxiosPromise<GetEmbeddingResponse>;
  /** Token 计数 {@link GetTokenCountRequest} {@link GetTokenCountResponse} */
  GetTokenCount(data: GetTokenCountRequest, config?: AxiosRequestConfig): AxiosPromise<GetTokenCountResponse>;
  /** 查询混元生图（多轮对话）任务 {@link QueryHunyuanImageChatJobRequest} {@link QueryHunyuanImageChatJobResponse} */
  QueryHunyuanImageChatJob(data?: QueryHunyuanImageChatJobRequest, config?: AxiosRequestConfig): AxiosPromise<QueryHunyuanImageChatJobResponse>;
  /** 查询混元生图任务 {@link QueryHunyuanImageJobRequest} {@link QueryHunyuanImageJobResponse} */
  QueryHunyuanImageJob(data: QueryHunyuanImageJobRequest, config?: AxiosRequestConfig): AxiosPromise<QueryHunyuanImageJobResponse>;
  /** 设置付费模式 {@link SetPayModeRequest} {@link SetPayModeResponse} */
  SetPayMode(data: SetPayModeRequest, config?: AxiosRequestConfig): AxiosPromise<SetPayModeResponse>;
  /** 提交混元生图（多轮对话）任务 {@link SubmitHunyuanImageChatJobRequest} {@link SubmitHunyuanImageChatJobResponse} */
  SubmitHunyuanImageChatJob(data: SubmitHunyuanImageChatJobRequest, config?: AxiosRequestConfig): AxiosPromise<SubmitHunyuanImageChatJobResponse>;
  /** 提交混元生图任务 {@link SubmitHunyuanImageJobRequest} {@link SubmitHunyuanImageJobResponse} */
  SubmitHunyuanImageJob(data: SubmitHunyuanImageJobRequest, config?: AxiosRequestConfig): AxiosPromise<SubmitHunyuanImageJobResponse>;
  /** 文生图轻量版 {@link TextToImageLiteRequest} {@link TextToImageLiteResponse} */
  TextToImageLite(data: TextToImageLiteRequest, config?: AxiosRequestConfig): AxiosPromise<TextToImageLiteResponse>;
}

export declare type Versions = ["2023-09-01"];

export default Hunyuan;
