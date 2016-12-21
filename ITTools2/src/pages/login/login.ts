import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Facebook } from 'ionic-native';


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

