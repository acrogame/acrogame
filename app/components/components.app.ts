/// <reference path="./../../node_modules/angular2/typings/browser.d.ts" />

import {Component}                      from 'angular2/core';
import {Home}                           from './components.home';
import {About}                          from './components.about';
import {Game}                           from './components.game';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

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
    name: 'Game',
    path: '/game', 
    component: Game
  }
])

// Application Root Component:

@Component({
  selector: 'acro',
  directives: [ROUTER_DIRECTIVES],
  template: `
    <nav class="navbar gradient color-white">
      <div class="container">
        <a class="pointer logo" [routerLink]="['Home']">Acro</a>
        <a class="pointer float-right" [routerLink]="['About']">Sign In</a>
        <a class="pointer float-right" [routerLink]="['About']">How to play</a>
      </div>
    </nav>
    <router-outlet></router-outlet>
  `
})

export class AppComponent { }
