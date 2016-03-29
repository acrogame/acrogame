/// <reference path="./../../node_modules/angular2/typings/browser.d.ts" />

import {Component}                      from 'angular2/core';
import {Home}                           from './components.home';
import {About}                          from './components.about';
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
  }
])

// Application Root Component:

@Component({
  selector: 'acro',
  directives: [ROUTER_DIRECTIVES],
  template: `
    <nav class="navbar">
     <a class="pointer" [routerLink]="['Home']">Home</a>
     <a class="pointer" [routerLink]="['About']">How to play</a>
    </nav>
    <router-outlet></router-outlet>
  `
})

export class AppComponent { }
