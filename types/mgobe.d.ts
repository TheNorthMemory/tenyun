/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 玩家信息详情 */
declare interface Player {
  /** 玩家 OpenId。最长不超过64个字符。 */
  OpenId: string;
  /** 玩家昵称。最长不超过32个字符。 */
  Name: string;
  /** 队伍 ID。最长不超过16个字符。 */
  TeamId: string;
  /** 是否为机器人。 */
  IsRobot: boolean;
  /** 玩家 PlayerId。出参使用，由后端返回。 */
  PlayerId?: string;
  /** 自定义玩家状态。非负数，最大不超过4294967295。默认为0。 */
  CustomPlayerStatus?: number;
  /** 自定义玩家属性。最长不超过256个字符。默认为空字符串。 */
  CustomProfile?: string;
}

/** 房间信息详情。 */
declare interface Room {
  /** 表示房间名称。最长不超过32个字符。 */
  Name: string;
  /** 表示房间最大玩家数量。最大不超过100人。 */
  MaxPlayers: number;
  /** 表示房主OpenId。最长不超过16个字符。 */
  OwnerOpenId: string;
  /** 表示是否私有，私有指的是不允许其他玩家通过匹配加入房间。 */
  IsPrivate: boolean;
  /** 表示玩家详情列表。 */
  Players: Player[];
  /** 表示团队属性列表。 */
  Teams: Team[];
  /** 表示房间 ID。出参用，由后端返回。 */
  Id?: string;
  /** 表示房间类型。最长不超过32个字符。 */
  Type?: string;
  /** 表示创建方式：0.单人主动发起创建房间请求；1.多人在线匹配请求分配房间；2. 直接创建满员房间。调用云API的创房请求默认为3，目前通过云API调用只支持第3种方式。 */
  CreateType?: number;
  /** 表示自定义房间属性，不传为空字符串。最长不超过1024个字符。 */
  CustomProperties?: string;
  /** 表示房间帧同步状态。0表示未开始帧同步，1表示已开始帧同步，用于出参。 */
  FrameSyncState?: number;
  /** 表示帧率。由控制台设置，用于出参。 */
  FrameRate?: number;
  /** 表示路由ID。用于出参。 */
  RouteId?: string;
  /** 表示房间创建的时间戳（单位：秒）。 */
  CreateTime?: number;
  /** 表示开始帧同步时的时间戳（单位：秒）,未开始帧同步时返回为0。 */
  StartGameTime?: number;
  /** 表示是否禁止加入房间。出参使用，默认为False，通过SDK的ChangeRoom接口可以修改。 */
  IsForbidJoin?: boolean;
  /** 表示房主PlayerId。 */
  Owner?: string;
}

/** 团队属性 */
declare interface Team {
  /** 队伍ID。最长不超过16个字符。 */
  Id: string;
  /** 队伍名称。最长不超过32个字符。 */
  Name: string;
  /** 队伍最小人数。最大不超过100人。 */
  MinPlayers: number;
  /** 队伍最大人数。最大不超过100人。 */
  MaxPlayers: number;
}

declare interface ChangeRoomPlayerProfileRequest {
  /** 游戏资源Id。 */
  GameId: string;
  /** 发起修改的玩家Id。 */
  PlayerId: string;
  /** 需要修改的玩家自定义属性。 */
  CustomProfile: string;
}

declare interface ChangeRoomPlayerProfileResponse {
  /** 房间信息。 */
  Room?: Room;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ChangeRoomPlayerStatusRequest {
  /** 游戏资源Id。 */
  GameId: string;
  /** 玩家自定义状态。 */
  CustomStatus: number;
  /** 玩家id。 */
  PlayerId: string;
}

declare interface ChangeRoomPlayerStatusResponse {
  /** 房间信息 */
  Room?: Room;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePlayerRequest {
  /** 游戏资源Id。 */
  GameId: string;
  /** 玩家OpenId。 */
  OpenId?: string;
  /** 玩家PlayerId，由后台分配，当OpenId不传的时候，PlayerId必传，传入PlayerId可以查询当前PlayerId的玩家信息，当OpenId传入的时候，PlayerId可不传，按照OpenId查询玩家信息。 */
  PlayerId?: string;
}

declare interface DescribePlayerResponse {
  /** 玩家信息。 */
  Player: Player;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRoomRequest {
  /** 游戏资源Id。 */
  GameId: string;
  /** 玩家Id。当房间Id不传的时候，玩家Id必传，传入玩家Id可以查询当前玩家所在的房间信息，当房间Id传入的时候，优先按照房间Id查询房间信息。 */
  PlayerId?: string;
  /** 房间Id。 */
  RoomId?: string;
}

declare interface DescribeRoomResponse {
  /** 房间信息。 */
  Room: Room;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DismissRoomRequest {
  /** 表示游戏资源唯一 ID, 由后台自动分配, 无法修改。 */
  GameId: string;
  /** 表示游戏房间唯一ID。 */
  RoomId: string;
}

declare interface DismissRoomResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyRoomRequest {
  /** 游戏资源Id。 */
  GameId: string;
  /** 房间ID。 */
  RoomId: string;
  /** 发起者的PlayerId。 */
  PlayerId: string;
  /** 需要修改的房间选项，0表示房间名称，1表示房主，2表示是否允许观战，3表示是否支持邀请码/密码，4表示是否私有，5表示是否自定义房间属性，6表示是否禁止加人。 */
  ChangeRoomOptionList: number[];
  /** 房间名称。 */
  RoomName?: string;
  /** 变更房主。 */
  Owner?: string;
  /** 是否支持观战。 */
  IsViewed?: boolean;
  /** 是否支持邀请码/密码。 */
  IsInvited?: boolean;
  /** 是否私有。 */
  IsPrivate?: boolean;
  /** 自定义房间属性。 */
  CustomProperties?: string;
  /** 房间是否禁止加人。 */
  IsForbidJoin?: boolean;
}

declare interface ModifyRoomResponse {
  /** 房间信息 */
  Room?: Room;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RemoveRoomPlayerRequest {
  /** 游戏资源Id。 */
  GameId: string;
  /** 被踢出房间的玩家Id。 */
  RemovePlayerId: string;
}

declare interface RemoveRoomPlayerResponse {
  /** 房间信息 */
  Room?: Room;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare namespace V20190929 {
  type VersionHeader = { headers: { 'X-TC-Version': '2019-09-29' } }

  interface DismissRoomRequest {
    /** 表示游戏资源唯一 ID, 由后台自动分配, 无法修改。 */
    GameId: string;
    /** 表示游戏房间唯一ID。 */
    RoomId: string;
  }

  interface DismissRoomResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }
}

/** {@link Mgobe 游戏联机对战引擎} */
declare interface Mgobe {
  (): Versions;
  /** 修改房间玩家自定义属性 {@link ChangeRoomPlayerProfileRequest} {@link ChangeRoomPlayerProfileResponse} */
  ChangeRoomPlayerProfile(data: ChangeRoomPlayerProfileRequest, config?: AxiosRequestConfig): AxiosPromise<ChangeRoomPlayerProfileResponse>;
  /** 修改玩家自定义状态 {@link ChangeRoomPlayerStatusRequest} {@link ChangeRoomPlayerStatusResponse} */
  ChangeRoomPlayerStatus(data: ChangeRoomPlayerStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ChangeRoomPlayerStatusResponse>;
  /** 查询玩家信息 {@link DescribePlayerRequest} {@link DescribePlayerResponse} */
  DescribePlayer(data: DescribePlayerRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePlayerResponse>;
  /** 查询房间信息 {@link DescribeRoomRequest} {@link DescribeRoomResponse} */
  DescribeRoom(data: DescribeRoomRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRoomResponse>;
  /** 解散房间 {@link DismissRoomRequest} {@link DismissRoomResponse} */
  DismissRoom(data: DismissRoomRequest, config?: AxiosRequestConfig): AxiosPromise<DismissRoomResponse>;
  /** 修改房间 {@link ModifyRoomRequest} {@link ModifyRoomResponse} */
  ModifyRoom(data: ModifyRoomRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyRoomResponse>;
  /** 踢出房间玩家 {@link RemoveRoomPlayerRequest} {@link RemoveRoomPlayerResponse} */
  RemoveRoomPlayer(data: RemoveRoomPlayerRequest, config?: AxiosRequestConfig): AxiosPromise<RemoveRoomPlayerResponse>;
  /** 解散房间 {@link V20190929.DismissRoomRequest} {@link V20190929.DismissRoomResponse} */
  DismissRoom(data: V20190929.DismissRoomRequest, config: AxiosRequestConfig & V20190929.VersionHeader): AxiosPromise<V20190929.DismissRoomResponse>;
}

export declare type Versions = ["2020-10-14", "2019-09-29"];

export default Mgobe;
