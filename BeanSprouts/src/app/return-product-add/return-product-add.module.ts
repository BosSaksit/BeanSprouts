import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ReturnProductAddPage } from './return-product-add.page';

const routes: Routes = [
  {
    path: '',
    component: ReturnProductAddPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ReturnProductAddPage]
})
export class ReturnProductAddPageModule {}
