import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {

  constructor(
    private seller:SellerService
  ){}

  ngOnInit(): void {
    
  }
  
signUp(data:object):void{
  console.log("data",data)
  this.seller.userSignUp(data).subscribe((response:any) => {

  },(error:any)=>{
    console.log(error)
  })
}

}
