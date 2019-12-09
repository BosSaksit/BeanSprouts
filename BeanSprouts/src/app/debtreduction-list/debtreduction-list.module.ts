import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DebtreductionListPage } from './debtreduction-list.page';

const routes: Routes = [
  {
    path: '',
    component: DebtreductionListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DebtreductionListPage]
})
export class DebtreductionListPageModule {}