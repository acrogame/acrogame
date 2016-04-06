import {Component, Inject}  from 'angular2/core';
import {FirebaseEventPipe}  from './../pipes/pipes.firebaseevent';
// import {FirebaseService}    from './../services/services.firebase';

@Component({
  selector: 'game',
  templateUrl: 'app/templates/templates.game.html',
  // directives: [ngFor],
  pipes: [FirebaseEventPipe]
})

export class Game {
  
  firebaseUrl: string;
  
  constructor() {
    this.firebaseUrl = 'https://acrogame.firebaseio.com/foo';
  }
  
  // private $ref: any;
  
  // current: any;
  
  // private loadRef($fbRef: any) {
  //   this.$ref = $fbRef;
  //   this.$ref.child('foo').on('value', $snapshot => {
  //     this.current = $snapshot.val();
  //   })
  // }
  
  // constructor(private firebaseService: FirebaseService) {
    
  //   this.$ref = {};
    
  //   firebaseService.getRef().then($fbRef => {
  //     this.$ref = $fbRef;
  //   });
  // }
}