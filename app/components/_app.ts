/// <reference path="./../../node_modules/angular2/typings/browser.d.ts" />

import {Component}                      from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Home}                           from './home';
import {About}                          from './about';
import {Game}                           from './game';
import {GameNew}                        from './create';

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
    name: 'GameNew',
    path: '/game/new', 
    component: GameNew
  },
  {
    name: 'Game',
    path: '/game/:id', 
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
        <a class="pointer float-right" [routerLink]="['GameNew']">New Game</a>
        <a class="pointer float-right" [routerLink]="['About']">How to play</a>
      </div>
    </nav>
    <router-outlet></router-outlet>
  `
})

export class AppComponent { }
