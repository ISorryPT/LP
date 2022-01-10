import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgotPassRoutingModule } from './forgot-pass-routing.module';

import { ForgotPassComponent } from './forgot-pass.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForgotPassRoutingModule
  ],
  declarations: [ForgotPassComponent]
})
export class ForgotPassModule {}
