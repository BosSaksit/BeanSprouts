import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InfoSellcreditPage } from './info-sellcredit.page';

const routes: Routes = [
  {
    path: '',
    component: InfoSellcreditPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InfoSellcreditPage]
})
export class InfoSellcreditPageModule {}
