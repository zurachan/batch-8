import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthenticateService } from './services/authenticate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthenticateService, private translateService: TranslateService) {
    this.translateService.setDefaultLang('en')
    this.translateService.use(localStorage.getItem('lang') || 'en')
  }
  ngOnInit(): void {
  }

  IsAuthen = () => this.authService.LoggedIn

  Logout = (value: any) => this.authService.Logout()


}
