import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TimeDetailsPage } from './time-details';

@NgModule({
  declarations: [
    TimeDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(TimeDetailsPage),
  ],
})
export class TimeDetailsPageModule {}
