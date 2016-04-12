import {Injectable}   from 'angular2/core';

@Injectable()
export class Config {
  
  private firebaseUrl: string;
  private taskPath: string; 
  
  constructor() { 
    this.firebaseUrl = 'https://acrogame.firebaseio.com';
    this.taskPath = '/queue/tasks'
  }
  
  public get(thing: string): any {
    if (this[thing]) {
      return this[thing];
    } else {
      throw new Error(`${thing} was not found.`);
    }
  }
}