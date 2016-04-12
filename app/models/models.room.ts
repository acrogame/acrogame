export interface IRoom {
  id: string;
  name: string;
  loaded: boolean;
  last_activity: string;
  state: ROOM_STATE;
  content_rating: ROOM_RATING;
  speed: ROOM_SPEED;
}

export enum ROOM_STATE {
  INACTIVE,
  ACTIVE
}

export enum ROOM_RATING {
  G,
  R
}

export enum ROOM_SPEED {
  SLOW,
  MEDIUM,
  FAST
}

export class RoomModel implements IRoom {

  id: string;
  name: string;
  loaded: boolean;
  last_activity: string;
  state: ROOM_STATE;
  content_rating: ROOM_RATING;
  speed: ROOM_SPEED;
    
  constructor(
    
    name: string,
    id?: string,
    rating?: ROOM_RATING,
    speed?: ROOM_SPEED) {
      
    this.name = name;
    
    this.id = id || '';
    this.content_rating = rating || ROOM_RATING.G;
    this.speed = speed || ROOM_SPEED.MEDIUM;
    
    this.state = ROOM_STATE.INACTIVE;
    this.loaded = false;
    this.last_activity = window.Firebase.ServerValue.TIMESTAMP;
  }
}
