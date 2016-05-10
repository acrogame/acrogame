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
      // let reversed = this._getReversedFromArgs(arg);
      
      this._fbRef = new Firebase(url);
      
      if (ALLOWED_FIREBASE_EVENTS[event] === ALLOWED_FIREBASE_EVENTS.child_added) {
        this._fbRef.on(event, snapshot => {
          
          // Wait to create array until value exists
          if (!this._latestValue) this._latestValue = [];
          
          this._latestValue.push(snapshot.val());
          
          // if (reversed) {
          //   this._latestValue.unshift(snapshot.val());
          // } else {
          //   this._latestValue.push(snapshot.val());  
          // }

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

  // _getEventFromArgs(args?: string[]) {
  //   if (args && args[0] && args[0][0] === '"') {
  //     args[0] = args[0].replace(/"/g, '');
  //   }
  //   if (args && typeof ALLOWED_FIREBASE_EVENTS[args[0]] === 'number') {
  //     return args[0];
  //   }
  //   throw `Not a valid event to listen to: ${args[0]}.
  //     Please provide a valid event, such as "child_added", by adding it as an
  //     argument to the pipe: "value | firebase:child_added".
  //     See https://www.firebase.com/docs/web/api/query/on.html for supported events.`

  // }
  
  // _getReversedFromArgs(args?: string[]) {
  //   var foo = (args[1] && args[1] === 'reversed');
  //   return foo;
  // }
}