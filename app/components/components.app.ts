/// <reference path="./../../node_modules/angular2/typings/browser.d.ts" />

import {Component}                      from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Foo}                            from './components.foo';

// Router Configuration

@RouteConfig([
  {path: '/foo', name: 'Foo', component: Foo}
])

// Application Root Component:

@Component({
  selector: 'acro',
  directives: [ROUTER_DIRECTIVES],
  template: `
    <nav class="navbar">
     <a class="pointer" [routerLink]="['Foo']">Foo</a>
    </nav>
    <router-outlet></router-outlet>
  `
})

export class AppComponent { }
