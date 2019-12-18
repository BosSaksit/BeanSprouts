import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SummaryReportPage } from './summary-report.page';
import { ComponentsModule } from '../components/components.module'

const routes: Routes = [
  {
    path: '',
    component: SummaryReportPage
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
  declarations: [SummaryReportPage]
})
export class SummaryReportPageModule {}
