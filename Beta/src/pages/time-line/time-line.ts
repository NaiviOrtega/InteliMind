import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TimeDetailsPage } from '../../pages/time-details/time-details';
import { TimeTreePage } from '../time-tree/time-tree';

/**
 * Generated class for the TimeLinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-time-line',
  templateUrl: 'time-line.html',
})
export class TimeLinePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  gotoDetails(){

    this.navCtrl.push(TimeDetailsPage);

  }

  gotoTree(){

    this.navCtrl.push(TimeTreePage);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TimeLinePage');
  }

}
