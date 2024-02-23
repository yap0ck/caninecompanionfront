import {Inject, Injectable} from '@angular/core';
import {BehaviorSubject, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {AuthDTO, LoginForm, ResetForm} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  userConnected = new BehaviorSubject<string|null>(null)

  constructor(private readonly _httpClient: HttpClient,
              @Inject('apiUrl') private _apiUrl: string) { }

  login(loginForm: LoginForm){
    return this._httpClient.post<AuthDTO>(this._apiUrl+'/user/login', loginForm).pipe(
      tap( data => {
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.userRoles.toString());
        localStorage.setItem("login", data.username);
        this.userConnected.next(data.username);
      })
    )
  }

  logout(){
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("login");
    this.userConnected.next(null);
  }

  resetRequest(resetPasswordForm: ResetForm){
    return this._httpClient.post(this._apiUrl+'/user/reset-password', resetPasswordForm)
  }
}
