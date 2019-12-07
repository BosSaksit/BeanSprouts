import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ReturnProductListPage } from './return-product-list.page';

const routes: Routes = [
  {
    path: '',
    component: ReturnProductListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ReturnProductListPage]
})
export class ReturnProductListPageModule {}
