import {Component, Inject, OnInit}  from 'angular2/core';
import {RouteParams}        from 'angular2/router';
import {FirebaseEventPipe}  from './../pipes/pipes.firebaseevent';
import {FirebaseService}    from './../services/services.firebase';
import {Config}             from './../config/config.acro';
import {Spinner}            from './../components/spinner';

@Component({
  selector: 'room',
  templateUrl: 'app/templates/templates.room.html',
  pipes: [FirebaseEventPipe],
  providers: [Config, FirebaseService],
  directives: [Spinner]
})

export class Room implements OnInit {
  
  $roomRef: any;
  room: Object;
  roomUrl: string;
  chatUrl: string;
  loading: boolean;
  
  constructor(
    
    private config: Config, 
    private firebaseService: FirebaseService, 
    private routeParams: RouteParams) {
    
    var fbUrl = config.get('firebaseUrl');
    var roomId = routeParams.get('id');
    var roomPath = `/rooms/${roomId}`;
    var chatPath = `/chats/${roomId}`;
    
    this.$roomRef = firebaseService.getRef(roomPath);
    this.room = {};
    this.roomUrl = `${fbUrl}${roomPath}`;
    this.chatUrl = `${fbUrl}${chatPath}`;
    this.loading = true;
  }
  
  ngOnInit() {
    this.$roomRef.on('value', this.roomLoaded.bind(this));
  }
  
  private roomLoaded($snap: any): void {
    var value = $snap.val();
    if (value) {
      this.room = value;
      this.loading = !value.loaded;
    }
  }
}