import {PlayerModel} from './models.player';
import {IUser} from './models.user';

export interface IGame {
  roomId: string;
  timestamp: string;
  players: PlayerModel[];
}

export enum GAME_ROUND {
  NONE,
  ONE,
  TWO,
  THREE,
  FOUR,
  FIVE,
  SIX,
  SEVEN,
  FACEOFF_ONE,
  FACEOFF_TWO,
  FACEOFF_THREE
}

export class GameModel implements IGame {
  
  roomId: string;
  timestamp: string;
  players: PlayerModel[];
  round: GAME_ROUND;
  
  constructor(roomId: string, currentUser: IUser) {
    this.roomId = roomId;
    this.addPlayer(currentUser);
    this.round = GAME_ROUND.NONE;
    this.timestamp = window.Firebase.ServerValue.TIMESTAMP;
  }
  
  addPlayer(user: IUser) {
    // Todo: Hash this
    this.players.push(new PlayerModel(user, this.roomId));
  }
  
  advanceRound() {
    this.round = this.round++;
  }
}