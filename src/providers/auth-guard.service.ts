import { Injectable } from '@angular/core';
//import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService  {

    constructor(private authService: AuthService) { }

    canActivate() {
        let permissions: any = JSON.parse(localStorage.getItem('menu-permissions'));
        let token: any = JSON.parse(localStorage.getItem('token'));
        
        
        if (token) {
            let isValidUser = permissions.find(function(item){ return item.value});

            if(isValidUser)
                return true;
        }
        
        //this.router.navigate(['login']);
    }

}
