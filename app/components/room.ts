import {Component, Inject, OnInit}  from 'angular2/core';
import {RouteParams}                from 'angular2/router';
import {FirebaseEventPipe}          from './../pipes/pipes.firebaseevent';
import {FirebaseService}            from './../services/services.firebase';
import {Config}                     from './../config/config.acro';
import {Spinner}                    from './spinner';
import {Chat}                       from './chat';
import {TaskModel, TASK_TYPE}       from './../models/models.task';

@Component({
  selector: 'room',
  templateUrl: 'app/templates/templates.room.html',
  pipes: [FirebaseEventPipe],
  providers: [Config, FirebaseService],
  directives: [Spinner, Chat]
})

export class Room implements OnInit {
  
  roomId: string;
  
  $roomRef: any;
  $gameRef: any;
  $taskRef: any;
  
  room: Object;
  
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
    this.$roomRef.on('value', ($snap) => this.roomLoaded($snap));
  }
  
  private newGame() {
    // Todo: in the future we should watch rooms on the server 
    // rather than relying on the client to add the Task
    this.$taskRef.push(new TaskModel(TASK_TYPE.NEW_GAME, {roomId: this.roomId}))
    this.$gameRef.on('value', ($snap) => {
      // console.log($snap.val());
    });
  }
  
  private roomLoaded($snap: any): void {
    var value = $snap.val();
    if (value) {
      this.room = value;
      this.loading = !value.loaded;
      // TODO: need to "watch" room's state and # of players to trigger this
      this.newGame();
    }
  }
}