import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DebtreductionAddPage } from './debtreduction-add.page';

const routes: Routes = [
  {
    path: '',
    component: DebtreductionAddPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DebtreductionAddPage]
})
export class DebtreductionAddPageModule {}
