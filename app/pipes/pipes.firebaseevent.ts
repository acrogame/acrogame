import {ChangeDetectorRef, Inject, Pipe, WrappedValue}  from 'angular2/core';

export enum ALLOWED_FIREBASE_EVENTS {
  value, 
  child_added
};

@Pipe({
  name: '$firebaseevent',
  pure: false
})
export class FirebaseEventPipe {
  
  private _cdRef: ChangeDetectorRef;
  private _fbRef: any;
  private _latestValue: any;
  private _latestReturnedValue: any;
  
  constructor(@Inject(ChangeDetectorRef) cdRef: ChangeDetectorRef) {
    this._cdRef = cdRef;
  }
  
  transform(url: string, arg: string): any {
    if (!this._fbRef) {
      
      let event = arg;
      
      this._fbRef = window.firebase.database().ref();
      
      if (ALLOWED_FIREBASE_EVENTS[event] === ALLOWED_FIREBASE_EVENTS.child_added) {
        this._fbRef.on(event, snapshot => {
          
          // Wait to create array until value exists
          if (!this._latestValue) this._latestValue = [];
          
          this._latestValue.push(snapshot.val());
          this._cdRef.markForCheck();
        });
      } else {
        this._fbRef.on(event, snapshot => {
          this._latestValue = snapshot.val();
          this._cdRef.markForCheck();
        });
      }

      return null;
    }

    if (this._latestValue === this._latestReturnedValue) {
      return this._latestValue;
    } else {
      this._latestReturnedValue = this._latestValue;
      return (<any>WrappedValue).wrap(this._latestReturnedValue);
    }
  }
  
  onDestroy() {
    if (this._fbRef) {
      this._fbRef.off();
    }
  }
}