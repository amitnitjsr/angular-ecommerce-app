import { SellerService } from './services/seller.service';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';

// export const authGuard: CanActivateFn = (route, state) => {
  
//   return true;
// };
@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(
    private sellerService: SellerService
  ){}
  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      if(localStorage.getItem('seller')){
        return true;
      }
      return this.sellerService.isSellerLoggedIn;
  }
}
