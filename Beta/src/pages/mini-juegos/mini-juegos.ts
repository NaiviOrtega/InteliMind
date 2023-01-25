import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { MINIJUEGOS } from '../../data/mini_juegos_data';
import { DetailsPage } from '../../pages/details/details';



@IonicPage()
@Component({
  selector: 'page-mini-juegos',
  templateUrl: 'mini-juegos.html',
})
export class MiniJuegosPage {

  minijuegos : any = MINIJUEGOS;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public modalCtrl: ModalController) {
  }

  /*gotoDetails(minijuego:any){

    this.navCtrl.push(DetailsPage, {minijuego} );

  }

  gotoModal(minijuego:any){
    const modalCtrl = this.modalCtrl.create('ModalPage',{minijuego});

    modalCtrl.present();
  }*/

  ionViewDidLoad() {
    console.log('ionViewDidLoad MiniJuegosPage');
  }

}
