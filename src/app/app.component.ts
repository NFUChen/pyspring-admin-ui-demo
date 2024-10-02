import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HttpClientModule} from "@angular/common/http";
import {HlmToasterComponent} from "@spartan-ng/ui-helm-helm";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, HlmToasterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [
  ]
})
export class AppComponent {
}
