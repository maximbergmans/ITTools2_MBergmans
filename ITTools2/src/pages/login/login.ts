import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Facebook } from 'ionic-native';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

	public fbLogin;

  constructor(public navCtrl: NavController) {
  	this.facebookStatus;
    this.fbLogin;
    Facebook.browserInit(631727943700203);
  }

  login() {
    Facebook.login(['public_profile']);
    this.facebookStatus;
  }

  logout() {
    Facebook.logout();
      
    this.facebookStatus();
  }

  facebookStatus() {
    Facebook.getLoginStatus().then(
      (status) => {
        console.log("current status: ", (status.status).toString());
        this.fbLogin = (status.status).toString();
      });

  }

}

