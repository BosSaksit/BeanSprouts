import { Component, OnInit,ViewChild  } from '@angular/core';
import { Router } from '@angular/router';
import { CallapiService } from '../service/callapi.service';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.page.html',
  styleUrls: ['./user-list.page.scss'],
})
export class UserListPage implements OnInit {
  
  check :any;
  constructor(public router:Router, public callapi:CallapiService) { 
    this.callapi.checkStateMenuBar = "1";
  }

  ngOnInit() {
  }

  gotoAddUser(){
    this.router.navigate(['/user-add']);
  }

  gotoDetailUser(){
    this.check = 1;
    this.router.navigate(['/user-edit',{check1:this.check}]);
  }

  gotoEditUser(){
    this.check = 2;
    this.router.navigate(['/user-edit',{check1:this.check}]);
  }

}

