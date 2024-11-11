import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthenticateService } from '../../services/authenticate.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  credential: any
  @Output() LogoutEvent = new EventEmitter<any>();

  lang: string = ''

  constructor(private authService: AuthenticateService, private translateService: TranslateService) {
    this.credential = this.authService.GetCredential
  }
  ngOnInit(): void {
    this.lang = localStorage.getItem('lang') || 'en'
  }

  ClickLogOut = () => this.LogoutEvent.emit()

  ChangeLang(event: any) {
    let selectedLang = event.target.value
    localStorage.setItem('lang', selectedLang)
    this.translateService.use(selectedLang)
  }
}
