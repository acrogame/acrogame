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
    this.$ref = firebase.getRef('/rooms');
  }
  
  private goToRoom(id: string) {
    try {
      this.router.navigate(['Room', {id: `${id}`}]);
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
    
    var $newRoom = this.$ref.push();
    var $id = $newRoom.key();
    
    // Todo: Model
    $newRoom.set({
      id: $id,
      loaded: false,
      name: `Room_${$id}`
    }, this.onComplete);
    
    this.goToRoom($id);
  }
}