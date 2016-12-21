import { Component } from '@angular/core';
import { ModalController, NavController} from 'ionic-angular';
import { AddItem } from '../add-item-page/add-item-page';
import { ItemDetails } from '../item-detail-page/item-detail-page';
import { Data } from '../../providers/data';



@Component({
  selector: 'page-notes',
  templateUrl: 'notes.html'
})


export class NotesPage {

  public items = [];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public dataService: Data) {

    this.dataService.getData().then((todos) => {

      if(todos){
        this.items = JSON.parse(todos);
      }

    });

  }

  ionViewDidLoad(){

  }

  addItem(){

    let addModal = this.modalCtrl.create(AddItem);

    addModal.onDidDismiss((item) => {

      if(item){
        this.saveItem(item);
      }

    });

    addModal.present();

  }

  saveItem(item){
    this.items.push(item);
    this.dataService.save(this.items);
  }

  viewItem(item){
    this.navCtrl.push(ItemDetails, {
      item: item
    });
  }
}
