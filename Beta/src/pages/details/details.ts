import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Familiar } from '../../data/familiar';
import { map } from 'rxjs/operators';
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { TimeTreePage } from '../time-tree/time-tree';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
  familiarDoc:AngularFirestoreDocument<Familiar[]>;

  private familiarsCollection: AngularFirestoreCollection<Familiar>;
  familiars: Observable<Familiar[]>;


  name="";
  datebirth="";
  address="";
  phone="";

  constructor(public navCtrl: NavController, public navParams: NavParams, private readonly afs: AngularFirestore,
    public alerCtrl: AlertController) {
        this.familiarsCollection = afs.collection<Familiar>('familiars');
        // .snapshotChanges() returns a DocumentChangeAction[], which contains
        // a lot of information about "what happened" with each change. If you want to
        // get the data and the id use the map operator.
        this.familiars = this.familiarsCollection.snapshotChanges().pipe(
          map(actions => actions.map(a => {
            const data = a.payload.doc.data() as Familiar;
            const id = a.payload.doc.id;
            return { id, ...data };
          }))
        );
        console.table(this.familiars);  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

  insert(){    
    const id = this.afs.createId();
    const us : Familiar = {'name':this.name, 'date_birth':this.datebirth,
    'address':this.address, 'phone_number':this.phone}
     this.familiarsCollection.doc(id).set(us);
  }

  doAlert() {
    let alert = this.alerCtrl.create({
      title: 'Registro',
      message: '¡El registro se ha realizado exitosamente!',
      buttons: ['Ok']
    });
    alert.present()
  } 

  gotoTime()
  {
    this.navCtrl.push(TimeTreePage);
  }

}
