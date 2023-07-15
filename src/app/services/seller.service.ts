import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { SignUp } from 'src/data-type';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(
    private httpClient:HttpClient
  ) { }

  userSignUp(data:SignUp){
    console.log("data", data)
    return this.httpClient.post('http://localhost:3000/seller',data,{

    })
  }

}
