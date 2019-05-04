import { Injectable } from '@angular/core';

import { Router } from '@angular/router';

import { Subject , BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  $authStatus = new BehaviorSubject(this.checkUserStatus());

  constructor(private _router:Router) { }

  login(credentials)
  {
    if(credentials.username=="manu" && credentials.password=="manu")
    {
      localStorage.setItem("isLoggedIn","true");
      this.$authStatus.next(this.checkUserStatus());
        this._router.navigate(['/welcome']);
    }
    else{
      alert("Invaled Credentials");
    }
  }

  logout()
  {
    localStorage.removeItem("isLoggedIn");
    this.$authStatus.next(this.checkUserStatus());
    this._router.navigate(['/login']);
  }
  checkUserStatus()
  {
    return localStorage.getItem("isLoggedIn");
  }
}
