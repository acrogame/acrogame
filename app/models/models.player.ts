import {IUser} from './models.user';

export class PlayerModel extends UserModel {
  
  roomId: string;
  
  constructor(user: IUser, roomId: string) {
    super(user);
    this.roomId = roomId;
  }
}