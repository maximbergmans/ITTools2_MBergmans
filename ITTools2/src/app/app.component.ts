import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen/*, SQLite*/ } from 'ionic-native';

import { LoginPage } from '../pages/login/login';
import { MapsPage } from '../pages/maps/maps';
import { NotesPage } from '../pages/notes/notes';
//import { AddItemPage } from '../pages/add-item-page/add-item-page';
//import { ItemDetailPage } from '../pages/item-detail-page/item-detail-page';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();
    /*let db = new SQLite();
    db.openDatabase({
      name: "data.db",
      location: "default"
    }).then(() => {
      db.executeSql("CREATE TABLE IF NOT EXISTS notes (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, details TEXT)", {}).then((data) => {
        console.log("TABLE CREATED: ", data);
      }, (error) => {
        console.error("Unable to execute sql", error);
      })
    }, (error) => {
      console.error("Unable to open database", error);
    });*/

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'login', component: LoginPage },
      { title: 'maps', component: MapsPage },
      { title: 'notes', component: NotesPage },
      //{ title: 'add-item-page', component: AddItemPage },
      //{ title: 'item-detail-page', component: ItemDetailPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      StatusBar.styleDefault();
      Splashscreen.hide();


    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
