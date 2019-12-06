import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainmenu',
  templateUrl: './mainmenu.page.html',
  styleUrls: ['./mainmenu.page.scss'],
})
export class MainmenuPage implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }

  gotoShopList(){
    this.router.navigate(['/shop-list']);
  }

}
