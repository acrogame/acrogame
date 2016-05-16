import {Component} from 'angular2/core';

@Component({
  selector: 'spinner',
  inputs: ['show'],
  template: `
    <div class="spinner" *ngIf="show">
      <div class="bounce1"></div>
      <div class="bounce2"></div>
      <div class="bounce3"></div>
    </div>`
})

export class Spinner {}