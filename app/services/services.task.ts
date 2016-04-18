import {ITask, TaskModel, TASK_TYPE} from './../models/models.task';
import {FirebaseService} from './services.firebase';
import {Config} from './../config/config.acro';
import {Injectable, Inject} from 'angular2/core';

@Injectable()
export class TaskService {
  
  constructor(@Inject(Config) config) {
  }
  
  newGame(roomId: string) {
     
  }
}

