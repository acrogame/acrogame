export interface ITask {
  type: TASK_TYPE;
  data: Object;
  timestamp: string;
}

export enum TASK_TYPE {
  NEW_GAME
}

export class TaskModel implements ITask {

  type: TASK_TYPE;
  data: Object;
  timestamp: string;

  constructor(type: TASK_TYPE, roomId: string) {
    this.type = type;
    this.data = {
      roomId: roomId
    };
    this.timestamp = window.Firebase.ServerValue.TIMESTAMP;
  }
}
