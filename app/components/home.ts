import {Component}                  from 'angular2/core';
import {ROUTER_DIRECTIVES, Router}  from 'angular2/router';
import {FirebaseEventPipe}          from './../pipes/pipes.firebaseevent';
import {Config}                     from './../config/config.acro';

@Component({
  selector: 'home',
  templateUrl: 'app/templates/templates.home.html',
  directives: [ROUTER_DIRECTIVES],
  pipes: [FirebaseEventPipe]
})

export class Home { 
  roomsUrl: string;
  
  constructor(private config: Config) {
    var fbUrl = config.get('firebaseUrl');
    this.roomsUrl = `${fbUrl}/rooms`;
  }
}