import {bootstrap}        from 'angular2/platform/browser'
import {ROUTER_PROVIDERS} from 'angular2/router';
import {enableProdMode}   from 'angular2/core';
import {AppComponent}     from './components/_app';

enableProdMode();

bootstrap(AppComponent, [
  ROUTER_PROVIDERS
]);