import { Component } from '@angular/core';
import {HlmCardDirective} from "@spartan-ng/ui-card-helm";
import {HlmAvatarComponent} from "@spartan-ng/ui-avatar-helm";
import {NgTemplateOutlet} from "@angular/common";
import {LoginService} from "../../services/login.service";
import {Router} from "@angular/router";
import {HttpStatusCode} from "@angular/common/http";
import {toast} from "ngx-sonner";
import {SidePanelComponent} from "./side-panel/side-panel.component";
import {ModelService} from "../../services/model.service";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    HlmCardDirective,
    HlmAvatarComponent,
    NgTemplateOutlet,
    SidePanelComponent
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  userName: string = ""

  constructor(private loginService: LoginService, private modelService: ModelService,private router: Router) {
    this.loginService.loginResponse$.subscribe(
        (resp) => {
          if (resp?.status === HttpStatusCode.Ok) {
            if (resp?.user) {
              this.userName = resp?.user.userName[0].toLocaleUpperCase()
            }
          } else if (resp?.status === HttpStatusCode.Unauthorized){
            toast.error(resp.message)
            this.router.navigate(["/auth"])
          }
        }
    )

  }

}
