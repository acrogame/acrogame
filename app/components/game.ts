import {Component, Inject}  from 'angular2/core';
import {RouteParams}        from 'angular2/router';
import {FirebaseEventPipe}  from './../pipes/pipes.firebaseevent';
import {Config}             from './../config/config.acro';
import {Spinner}            from './../components/spinner';

@Component({
  selector: 'game',
  templateUrl: 'app/templates/templates.game.html',
  pipes: [FirebaseEventPipe],
  providers: [Config],
  directives: [Spinner]
})

export class Game {
  
  firebaseUrl: string;
  loading: boolean;
  
  constructor(private config: Config, private routeParams: RouteParams) {
    
    var fbUrl = config.get('firebaseUrl');
    var gameId = routeParams.get('id');
    
    this.firebaseUrl = `${fbUrl}/games/${gameId}`;
    this.loading = false;
  }
}