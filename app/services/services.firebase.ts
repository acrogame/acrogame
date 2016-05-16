import {Injectable, Inject}   from 'angular2/core';
import {Config}               from './../config/config.acro';

@Injectable()
export class FirebaseService {
  
  private $fb: any; // Our Firebase instance
  
  constructor(@Inject(Config) config) {
    if (!this.$fb) {
      this.$fb = new Firebase(config.get('firebaseUrl'));
    }
  }
  
  /* 
   * @path: make sure there is a leading '/'
  */ 
  
  getRef(path?: string): any {
    if (this.$fb) {
      var $ref = (path) ? this.$fb.child(path) : this.$fb;
      return $ref;
    } else {
      throw new Error('Firebase is undefined');
    }
  }
}