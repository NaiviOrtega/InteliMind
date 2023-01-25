import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

//pages
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
/*import { ListPage } from '../pages/list/list';*/
import { EmparejarPage } from '../pages/emparejar/emparejar';
import { MiniJuegosPage } from '../pages/mini-juegos/mini-juegos';
import { EjerciciosPage } from '../pages/ejercicios/ejercicios';
import { DietasPage } from '../pages/dietas/dietas';
import { RecordatoriosPage } from '../pages/recordatorios/recordatorios';
import { AsociacionesPage } from '../pages/asociaciones/asociaciones';
import { TimeLinePage } from '../pages/time-line/time-line';
import { DetailsPage } from '../pages/details/details';
import { TimeDetailsPage } from '../pages/time-details/time-details';
import { TimeTreePage } from '../pages/time-tree/time-tree';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//plugin
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule} from 'angularfire2/firestore'
import { AngularFireAuthModule} from 'angularfire2/auth';

//provider
//import {UserService} from '../../src/providers/user.service';
//import { AngularFirestore } from 'angularfire2/firestore';

const config = {
  apiKey: "AIzaSyAi44FUxn0P7vrZbpp3XherT4pNjJGrX34",
  authDomain: "intelimind-b4342.firebaseapp.com",
  databaseURL: "https://intelimind-b4342.firebaseio.com",
  projectId: "intelimind-b4342"    
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EmparejarPage,
    MiniJuegosPage,
    EjerciciosPage,
    DietasPage,
    RecordatoriosPage,
    AsociacionesPage,
    TimeLinePage,
    DetailsPage,
    TimeDetailsPage,
    TimeTreePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,    
    EmparejarPage,
    MiniJuegosPage,
    EjerciciosPage,
    DietasPage,
    RecordatoriosPage,
    AsociacionesPage,
    TimeLinePage,
    DetailsPage,
    TimeDetailsPage,
    TimeTreePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
