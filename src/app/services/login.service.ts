import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Api} from "./api";
import {Router} from "@angular/router";
import {BehaviorSubject} from "rxjs";

const LOGIN_SUCCESS = "Login success"

interface User {
  userName: string;
  email: string;
}

interface LoginResponse {
  user?: User;
  message: string
  status: number
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginResponse$ = new BehaviorSubject<LoginResponse | null>(null);

  constructor(private httpClient: HttpClient, private router: Router) {
    this.updateLoginResponse()
  }
  login(userName: string, password: string) {
    const credentials = {
      user_name: userName,
      password: password
    }
    this.httpClient.post<string>(`${environment.baseSource}/${Api.PostLogin}`, credentials).subscribe( (response) => {
      console.log(response)
        if (response === LOGIN_SUCCESS) {
          this.router.navigate(['/main-page'])
        }
      }
    )
  }

  updateLoginResponse() {
    this.httpClient.get<LoginResponse>(`${environment.baseSource}/${Api.GetCurrentUser}`).subscribe(
        (resp) => {
          this.loginResponse$.next(resp)
        }
    )
  }


}
