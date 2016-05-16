import {Component} from 'angular2/core';
import {FirebaseService} from './../services/services.firebase';

class AuthModel {
  
  email: string;
  password: string;
  
  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }
}

@Component({
  selector: 'auth',
  providers: [FirebaseService],
  templateUrl: 'app/templates/auth.template.html'
})
export class Auth {
  
  $authRef: any;
  
  model: any;
  
  constructor(private firebaseService: FirebaseService) { 
    this.$authRef = firebaseService.getRef();
    this.model = {};
  }
  
  signIn(email: string, password: string) {
    // Do it
  }
  
  signUp() {
    // Todo confirm check
    
    this.$authRef.createUser(new AuthModel(this.model.email, this.model.password), (error, userData) => {
      if (error) {
        console.error(error);
      } else {
        console.log('Successfully created User, ', userData);
      }
    });
  }
}