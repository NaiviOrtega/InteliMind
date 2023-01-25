import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TimeLinePage } from './time-line';

@NgModule({
  declarations: [
    TimeLinePage,
  ],
  imports: [
    IonicPageModule.forChild(TimeLinePage),
  ],
})
export class TimeLinePageModule {}
