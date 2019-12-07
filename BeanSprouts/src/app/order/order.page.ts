import { Component, OnInit } from '@angular/core';
import { CallapiService } from '../service/callapi.service';
import { customer } from '../models/customer';
import { product } from '../models/product';
import { order } from '../models/order';


@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {
  // ppdd:product[] = [];
  // dd:product[];
  customer2All: customer[] = [];
  customerData: customer;
  productData: product;
  orderData: order;
  orderAll: order[] = [];
  customerAll: customer[] = [];

  constructor(public callapi: CallapiService) {
    this.orderData = {
      custoId: "",
      custoName: "",
      custoTel: "",
      orderProduct: []
    };
    this.callapi.checkStateMenuBar = "1";

  }

  ngOnInit() {
    this.getCustomerData();
    this.getProductData();

  }
  getCustomerData() {
    this.callapi.GetAllCustomer().subscribe(it => {
      console.log(it);
      this.customerData = it;
      console.log(this.customerData);
      
      for (let index = 0; index < Object.keys(this.customerData).length; index++) {
        this.customerAll[index] = this.customerData[index];
      }
      console.log(this.customerAll);

    });
  }
  getProductData() {
    this.callapi.GetAllProduct().subscribe(it => {
      console.log(it);
      this.productData = it;
      console.log(this.productData);

      // this.ppdd.push(this.productData[0]);
      // console.log(this.ppdd);  
    });
  }
  donedata() {
    for (let index = 0; index < Object.keys(this.customerData).length; index++) {
      this.orderAll[index] = {
        custoId: "",
        custoName: "",
        custoTel: "",
        orderProduct:[]
      };
      this.orderAll[index].custoId = this.customerAll[index].customerId;
      this.orderAll[index].custoName = this.customerAll[index].customerName;
      this.orderAll[index].custoTel = this.customerAll[index].customerTel;
      this.orderAll[index].orderProduct.push(this.productData);
      for(let a = 0; a < Object.keys(this.productData).length; a++){
        this.orderAll[index].orderProduct[a] = this.productData[a];
      }
    }
    console.log(this.orderAll);
    
    
    // this.orderData.custoId = this.customerData[0].customerId;
    // this.orderData.custoName = this.customerData[0].customerName;
    // this.orderData.custoTel = this.customerData[0].customerTel;
    // this.orderData.orderProduct.push(this.productData);
    // console.log(this.orderData);

  }

}
