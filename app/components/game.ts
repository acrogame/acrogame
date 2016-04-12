import {Component, Inject, OnInit}  from 'angular2/core';
import {RouteParams}        from 'angular2/router';
import {FirebaseEventPipe}  from './../pipes/pipes.firebaseevent';
import {FirebaseService}    from './../services/services.firebase';
import {Config}             from './../config/config.acro';
import {Spinner}            from './../components/spinner';

@Component({
  selector: 'game',
  templateUrl: 'app/templates/templates.game.html',
  pipes: [FirebaseEventPipe],
  providers: [Config, FirebaseService],
  directives: [Spinner]
})

export class Game implements OnInit {
  
  firebaseUrl: string;
  firebaseRef: any;
  loading: boolean;
  
  constructor(
    
    private config: Config, 
    private firebaseService: FirebaseService, 
    private routeParams: RouteParams) {
    
    var gameId = routeParams.get('id');
    var fbUrl = config.get('firebaseUrl');
    var fbPath = `/games/${gameId}`;
    
    this.loading = true;
    this.firebaseUrl = `${fbUrl}${fbPath}`;
    this.firebaseRef = firebaseService.getRef(fbPath);
  }
  
  ngOnInit() {
    var roomValue: Object;
    this.firebaseRef.on('value', this.roomLoaded.bind(this));
  }
  
  private roomLoaded($snap: any): void {
    var value = $snap.val();
    if (value) {
      this.loading = !value.loaded;
    }
  }
}