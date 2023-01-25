import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MiniJuegosPage } from './mini-juegos';

@NgModule({
  declarations: [
    MiniJuegosPage,
  ],
  imports: [
    IonicPageModule.forChild(MiniJuegosPage),
  ],
})
export class MiniJuegosPageModule {}
