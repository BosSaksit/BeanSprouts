import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-summary-report',
  templateUrl: './summary-report.page.html',
  styleUrls: ['./summary-report.page.scss'],
})
export class SummaryReportPage implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }

  gotoInfoCost(){
    this.router.navigate(['/info-cost']);
  }

  gotoInfoDebt(){
    this.router.navigate(['/info-debt']);
  }

  gotoInfoSellOnCash(){
    this.router.navigate(['/info-selloncash']);
  }

  gotoInfoSellCredit(){
    this.router.navigate(['/info-sellcredit']);
  }

}
