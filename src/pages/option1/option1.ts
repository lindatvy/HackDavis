import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SignupPage} from "../signup/signup";
import { LoginPage } from "../login/login";


/**
 * Generated class for the Option1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-option1',
    templateUrl: 'option1.html',
})
export class Option1Page {

    constructor(public navCtrl: NavController,
                public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad Option1Page');
    }

    pushLogin() {

        this.navCtrl.push(LoginPage);
    }
    pushSignup() {
        this.navCtrl.push(SignupPage);
    }


}