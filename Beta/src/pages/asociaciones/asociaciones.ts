import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ASOCIACIONES } from '../../data/asociaciones_data';

@IonicPage()
@Component({
  selector: 'page-asociaciones',
  templateUrl: 'asociaciones.html',
})
export class AsociacionesPage {

  asociaciones : any = ASOCIACIONES;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AsociacionesPage');
  }

}
