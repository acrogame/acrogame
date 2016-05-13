import {Injectable} from 'angular2/core';

@Injectable()
export class Convert {
  
  constructor() { }
  
  static objectToArray (object: any): any[] {
    try {
      return Object.keys(object).map(x => object[x]);
    } catch (ex) {
      console.error(ex);
      return [];
    }
  }
}