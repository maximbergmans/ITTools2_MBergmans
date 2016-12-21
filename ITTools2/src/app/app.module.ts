import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { LoginPage } from '../pages/login/login';
import { MapsPage } from '../pages/maps/maps';
import { NotesPage } from '../pages/notes/notes';
import { AddItem } from '../pages/add-item-page/add-item-page';
import { ItemDetails } from '../pages/item-detail-page/item-detail-page';
import { Storage } from '@ionic/storage';
import { Data } from '../providers/data';


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    MapsPage,
    NotesPage,
    AddItem,
    ItemDetails
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    MapsPage,
    NotesPage,
    AddItem,
    ItemDetails
  ],
  providers: [Storage, Data]
})
export class AppModule {}
