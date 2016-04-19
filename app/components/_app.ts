/// <reference path="./../../node_modules/angular2/typings/browser.d.ts" />

import {
  RouteConfig, 
  ROUTER_DIRECTIVES, 
  Location
}                     from 'angular2/router';
import {Component}    from 'angular2/core';
import {Home}         from './home';
import {About}        from './about';
import {Room}         from './room';
import {RoomNew}      from './create';

// Router Configuration

@RouteConfig([
  {
    name: 'Home',
    path: '/', 
    component: Home
  },
  {
    name: 'About',
    path: '/about', 
    component: About
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
  }
])

// Application Root Component:

@Component({
  selector: 'acro',
  directives: [ROUTER_DIRECTIVES],
  template: `
    <nav class="navbar color-white" [class.gradient]="showGradient()">
      <div class="container">
        <a class="pointer logo" [routerLink]="['Home']">Acro</a>
        <a class="pointer float-right" [routerLink]="['About']">Sign In</a>
        <a class="pointer float-right" [routerLink]="['RoomNew']">New Room</a>
        <a class="pointer float-right" [routerLink]="['About']">How to play</a>
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
  
  showGradient():boolean {
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
