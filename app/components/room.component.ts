import {Component, Inject, OnInit}  from 'angular2/core';
import {RouteParams}                from 'angular2/router';
import {FirebaseEventPipe}          from './../pipes/pipes.firebaseevent';
import {FirebaseService}            from './../services/services.firebase';
import {Config}                     from './../config/config.acro';
import {Spinner}                    from './spinner.component';
import {Chat}                       from './chat.component';
import {Game}                       from './game.component';
import {TaskModel, TASK_TYPE}       from './../models/models.task';

@Component({
  selector: 'room',
  templateUrl: 'app/templates/templates.room.html',
  pipes: [FirebaseEventPipe],
  providers: [Config, FirebaseService],
  directives: [Spinner, Chat, Game]
})

export class Room implements OnInit {
  
  roomId: string;
  
  $roomRef: any;
  $gameRef: any;
  $taskRef: any;
  
  room: Object;
  game: Object;
  
  roomUrl: string;
  chatUrl: string;
  gameUrl: string;
  loading: boolean;
  
  constructor(
    
    private config: Config, 
    private firebaseService: FirebaseService, 
    private routeParams: RouteParams) {
    
    var fbUrl = config.get('firebaseUrl');
    
    this.roomId = routeParams.get('id');
    
    var roomPath = `/rooms/${this.roomId}`;
    var gamePath = `/games/${this.roomId}`;
    var chatPath = `/chats/${this.roomId}`;
    var taskPath = '/queue/tasks';
    
    this.$roomRef = firebaseService.getRef(roomPath);
    this.$gameRef = firebaseService.getRef(gamePath);
    this.$taskRef = firebaseService.getRef(taskPath);
    
    this.room = {};
    this.roomUrl = `${fbUrl}${roomPath}`;
    this.gameUrl = `${fbUrl}${gamePath}`;
    this.chatUrl = `${fbUrl}${chatPath}`;
    this.loading = true;
  }
  
  ngOnInit() {
    this.$roomRef.once('value', ($snap) => this.roomLoaded($snap));
  }
  
  private roomLoaded($snap: any): void {
    var value = $snap.val();
    if (value) {
      this.room = value;
      this.loading = !value.loaded;
    }
  }
}