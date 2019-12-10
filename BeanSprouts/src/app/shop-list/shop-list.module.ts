import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ShopListPage } from './shop-list.page';
import { ComponentsModule } from '../components/components.module';


const routes: Routes = [
  {
    path: '',
    component: ShopListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ShopListPage]
})
export class ShopListPageModule {}
