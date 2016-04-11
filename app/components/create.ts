import {Component, Inject}  from 'angular2/core';
import {Router}             from 'angular2/router';
import {FirebaseService}    from './../services/services.firebase';

@Component({
  selector: 'game-create',
  templateUrl: 'app/templates/templates.create.html',
  providers: [FirebaseService]
})

export class GameNew {
  
  $ref: any;
  
  constructor(private firebase: FirebaseService, private router: Router) {
    this.$ref = firebase.getRef('/games');
  }
  
  private goToGame(id: string) {
    try {
      this.router.navigate(['Game', {id: `${id}`}]);
    } catch(ex) {
      console.error(ex);
    }
  }
  
  private onComplete(error: any) {
    if (error) {
      console.error(error);
    }
  }

  create() {
    
    var $newGame = this.$ref.push();
    var $id = $newGame.key();
    
    $newGame.set({
      id: $id,
      loaded: false
    }, this.onComplete);
    
    this.goToGame($id);
  }
}