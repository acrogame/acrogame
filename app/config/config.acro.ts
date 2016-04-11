import {Injectable}   from 'angular2/core';

@Injectable()
export class Config {
  
  private firebaseUrl: string;
  
  constructor() { 
    this.firebaseUrl = 'https://acrogame.firebaseio.com/';
  }
  
  public get(thing: string): any {
    if (this[thing]) {
      return this[thing];
    } else {
      throw new Error(`${thing} was not found.`);
    }
  }
}