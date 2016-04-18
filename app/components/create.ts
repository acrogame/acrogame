import {Component}                          from 'angular2/core';
import {Router}                             from 'angular2/router';
import {FirebaseService}                    from './../services/services.firebase';
import {RoomModel, ROOM_SPEED, ROOM_RATING} from './../models/models.room';

@Component({
  selector: 'game-create',
  templateUrl: 'app/templates/templates.create.html',
  providers: [FirebaseService]
})

export class RoomNew {
  
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
    
    var roomName = `Name_${$id}`;
    var newRoom = new RoomModel(roomName, $id, ROOM_RATING.R, ROOM_SPEED.FAST);
    
    $newRoom.set(newRoom, this.onComplete.bind(this));
    
    this.goToRoom($id);
  }
}