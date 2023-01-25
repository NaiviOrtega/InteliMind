import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TimeTreePage } from './time-tree';

@NgModule({
  declarations: [
    TimeTreePage,
  ],
  imports: [
    IonicPageModule.forChild(TimeTreePage),
  ],
})
export class TimeTreePageModule {}
