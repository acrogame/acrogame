import {AppComponent}     from './components/_app';
import {bootstrap}        from 'angular2/platform/browser'
import {ROUTER_PROVIDERS} from 'angular2/router';
import {enableProdMode}   from 'angular2/core';
import {Config}           from './config/config.acro';

// Enable 'production mode'
enableProdMode();

bootstrap(AppComponent, [
  ROUTER_PROVIDERS,
  Config
]);