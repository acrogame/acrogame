export interface ITask {
  type: TASK_TYPE;
  target_id: string;
  timestamp: string;
}

export enum TASK_TYPE {
  FOO,
  BAR
}

export class TaskModel implements ITask {

  type: TASK_TYPE;
  target_id: string; 
  timestamp: string;

  constructor(type: TASK_TYPE, targetId: string) {
    this.type = type;
    this.target_id = targetId;
    this.timestamp = window.Firebase.ServerValue.TIMESTAMP;
  }
}
