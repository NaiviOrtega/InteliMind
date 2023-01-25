import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  objeto:any ={};

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public viewCtrl: ViewController) {

    this.objeto = this.navParams.get("minijuego");

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

  exit(){
    this.viewCtrl.dismiss();
  }

}
