import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
//import { ListPage } from '../pages/list/list';
import { EmparejarPage } from '../pages/emparejar/emparejar';
import { MiniJuegosPage } from '../pages/mini-juegos/mini-juegos';
import { EjerciciosPage } from '../pages/ejercicios/ejercicios';
import { DietasPage } from '../pages/dietas/dietas';
import { RecordatoriosPage } from '../pages/recordatorios/recordatorios';
import { AsociacionesPage } from '../pages/asociaciones/asociaciones';
import { TimeLinePage } from '../pages/time-line/time-line';
//import { DetailsPage } from '../pages/details/details';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Emparejar', component: EmparejarPage },
      { title: 'MiniJuegos', component: MiniJuegosPage },
      { title: 'Ejercicios', component: EjerciciosPage },
      { title: 'Dietas', component: DietasPage},
      { title: 'Recordatorios', component: RecordatoriosPage},
      { title: 'Asociaciones', component: AsociacionesPage},
      { title: 'TimeLine', component: TimeLinePage},
      //{ title: 'Details', component: DetailsPage}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
