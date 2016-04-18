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

  constructor(type: TASK_TYPE, data: Object) {
    this.type = type;
    this.data = data;
    this.timestamp = window.Firebase.ServerValue.TIMESTAMP;
  }
}
