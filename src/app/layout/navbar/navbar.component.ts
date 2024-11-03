import { Component, EventEmitter, Output } from '@angular/core';
import { AuthenticateService } from '../../services/authenticate.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  credential: any
  constructor(private authService: AuthenticateService) {
    this.credential = this.authService.GetCredential
  }

  @Output() LogoutEvent = new EventEmitter<any>();
  ClickLogOut = () => this.LogoutEvent.emit()
}
