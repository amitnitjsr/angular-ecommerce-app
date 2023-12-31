import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { SignUp } from 'src/data-type';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {
  showLogin = false;
  constructor(
    private seller:SellerService,
    private router:Router
  ){}

  ngOnInit(): void {
    this.seller.reloadSeller();
  }
  
signUp(data:SignUp):void{
  this.seller.userSignUp(data);
}

login(data:SignUp):void{
  // this.seller.userSignUp(data);
}

openLogin(){
this.showLogin = true;
}

openSignup(){
  this.showLogin = false;
}
}
