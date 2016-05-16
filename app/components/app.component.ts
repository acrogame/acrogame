/// <reference path="./../../node_modules/angular2/typings/browser.d.ts" />

import {
  RouteConfig, 
  ROUTER_DIRECTIVES 
}                     from 'angular2/router';
import {Component}    from 'angular2/core';
import {Location}     from 'angular2/platform/common';
import {Home}         from './home.component';
import {HowTo}        from './howto.component';
import {Room}         from './room.component';
import {RoomNew}      from './create.component';
import {Auth}         from './auth.component';

// Router Configuration

@RouteConfig([
  {
    name: 'Home',
    path: '/', 
    component: Home
  },
  {
    name: 'HowTo',
    path: '/howto', 
    component: HowTo
  },
  {
    name: 'RoomNew',
    path: '/room/new', 
    component: RoomNew
  },
  {
    name: 'Room',
    path: '/room/:id', 
    component: Room
  },
  {
    name: 'Auth',
    path: '/auth', 
    component: Auth
  },
])

// Application Root Component:

@Component({
  selector: 'acro',
  directives: [ROUTER_DIRECTIVES],
  template: `
    <nav class="navbar color-white" [class.gradient]="showGradient()">
      <div class="container">
        <a class="pointer logo" [routerLink]="['Home']">Acro</a>
        <a class="pointer float-right" [routerLink]="['Auth']">Sign In</a>
        <a class="pointer float-right" [routerLink]="['RoomNew']">New Room</a>
        <a class="pointer float-right" [routerLink]="['HowTo']">How to play</a>
      </div>
    </nav>
    <router-outlet></router-outlet>
  `
})

export class AppComponent { 
  
  location: Location;
  
  constructor (location: Location) {
    this.location = location;
  }
  
  showGradient(): boolean {
    var currentPath = this.location.path();
    // If we're in a room-related path
    if (currentPath.indexOf('/room') === 0) {
      // Show gradient if it's the "new room"" component
      return currentPath.indexOf('/room/new') === 0;
    } else {
      return true;
    }
  }
}
