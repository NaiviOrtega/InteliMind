import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Usuario } from '../../data/usuario';
import { map } from 'rxjs/operators';
import QRCode from 'qrcode';

@IonicPage()
@Component({
  selector: 'page-emparejar',
  templateUrl: 'emparejar.html',
})
export class EmparejarPage {
  userDoc:AngularFirestoreDocument<Usuario[]>;

  private usersCollection: AngularFirestoreCollection<Usuario>;
  users: Observable<Usuario[]>;

  name="";
  lastname="";
  datebirth="";
  address="";
  phone="";
  zipcode="";

  code = "";
  generated= '';

  displayQrCode(){
    return this.generated !== '';
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private readonly afs: AngularFirestore,
    public alerCtrl: AlertController) {
    this.usersCollection = afs.collection<Usuario>('users');
    // .snapshotChanges() returns a DocumentChangeAction[], which contains
    // a lot of information about "what happened" with each change. If you want to
    // get the data and the id use the map operator.
    this.users = this.usersCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Usuario;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
    console.table(this.users);    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmparejarPage');
  }
  
  insert(){    
    const id = this.afs.createId();
    const us : Usuario = {'name':this.name, 'last_name':this.lastname, 'date_birth':this.datebirth,
    'address':this.address, 'phone_number':this.phone, 'zip_code':this.zipcode}
     this.usersCollection.doc(id).set(us);
  }

  process(){
    this.code = this.name+" "+this.lastname+" "+this.datebirth+" "+this.address+" "+this.phone+" "+this.zipcode;
    const qrcode = QRCode;
    const self = this;
    qrcode.toDataURL(self.code, { errorCorrectionLevel: 'H' }, function(err, url){
      self.generated = url;
    })
  }

  clean(){
    this.name="";
    this.lastname="";
    this.datebirth="";
    this.address="";
    this.phone="";
    this.zipcode="";
  }

  doAlert() {
    let alert = this.alerCtrl.create({
      title: 'Registro',
      message: '¡Tu registro se ha realizado exitosamente!',
      buttons: ['Ok']
    });
    alert.present()
  }  
}
