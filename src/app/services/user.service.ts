import {Inject, Injectable} from '@angular/core';
import {BehaviorSubject, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {AuthDTO, CreateForm, LoginForm, ResetForm} from "../models/User";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userConnected = new BehaviorSubject<string|null>(null)

  constructor(private readonly _httpClient: HttpClient,
              @Inject('apiUrl') private _apiUrl: string) { }

  login(loginForm: LoginForm){
    console.log("url: "+ this._apiUrl);
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

  create(id: number){
    return this._httpClient.get(this._apiUrl+'/user/'+id)
  }

  register(token: string, form: CreateForm){
    return this._httpClient.post(this._apiUrl+'/user?token='+token,form)
  }

  delete(id: number){
    return this._httpClient.delete(this._apiUrl+'/user/'+id)
  }
}
