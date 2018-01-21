import { Component } from '@angular/core';
import { NavController, ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              public actionSheetCtrl: ActionSheetController) {

  }

  isCllicked() {
    console.log("hello");
  }
}
