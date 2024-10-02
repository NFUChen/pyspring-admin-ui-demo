import { Component } from '@angular/core';
import {HlmCardDirective} from "@spartan-ng/ui-card-helm";
import {HlmLabelDirective} from "@spartan-ng/ui-label-helm";
import {HlmInputDirective} from "@spartan-ng/ui-input-helm";
import {HlmButtonDirective} from "@spartan-ng/ui-button-helm";
import {FormsModule} from "@angular/forms";
import {LoginService} from "../../services/login.service";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {toast} from "ngx-sonner";
import {HttpStatusCode} from "@angular/common/http";

export interface User {
  userName: string
  role: string
}

@Component({
  selector: 'app-auth-page',
  standalone: true,
  imports: [
    HlmCardDirective,
    HlmLabelDirective,
    HlmInputDirective,
    HlmButtonDirective,
    FormsModule
  ],
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.css'
})
export class AuthPageComponent {
  userName: string = ""
  password: string = ""

  constructor(private loginService: LoginService, private router: Router) {
    this.loginService.loginResponse$.subscribe(
        (resp) => {
          if (resp?.status === HttpStatusCode.Ok) {
            this.router.navigate(["/main-page"])
          } else if (resp?.status === HttpStatusCode.Unauthorized){
            toast.error(resp.message)
          }
        }
    )
    loginService.updateLoginResponse()
  }

  handleLogin(): void {
    this.loginService.login(this.userName, this.password)
  }

  canLogin() {
    return this.password && this.userName
  }
}
