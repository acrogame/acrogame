import {Injectable}   from 'angular2/core';
// import {Config}       from './../config/config.acro';

@Injectable()
export class FirebaseService {
  
  private $fb: any; // Our Firebase instance
  
  // constructor(url?: string) {
  constructor() {
    if (!this.$fb) {
      // this.$fb = new Firebase(url || Config.urls.firebase);
      this.$fb = new Firebase('https://acrogame.firebaseio.com/');
    }
  }
  
  getRef(): any {
    if (this.$fb) {
      return Promise.resolve(this.$fb);
      // return this.$fb;
    } else {
      throw new Error('Firebase ref is undefined');
    }
  }
}