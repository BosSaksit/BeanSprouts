import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { customer } from '../models/customer';
import { product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CallapiService {

  public static host:string = "https://localhost:5001/api/";

  public checkStateMenuBar : any;

  constructor(public http:HttpClient) { 
    this.checkStateMenuBar = "1";
  }

  public GetAllCustomer(){
    return this.http.get<customer>(CallapiService.host + 'Customer/GetAllCustomer');
  }

  public GetAllProduct(){
    return this.http.get<product>(CallapiService.host + 'Product/GetAllProduct');
  }
}
