import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

// import {Location}   from 'angular2/router';

@Component({
  selector: 'home',
  templateUrl: 'app/templates/templates.home.html',
  directives: [ROUTER_DIRECTIVES]
})

export class Home { 
  
  // private location: any;
  
  // constructor(location: Location) {
  //   this.location = location;
  // }
  
  // goTo(path: string) {
  //   this.location.go(path);
  // }
}