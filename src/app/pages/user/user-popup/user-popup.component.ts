import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-user-popup',
  templateUrl: './user-popup.component.html',
  styleUrls: ['./user-popup.component.css'],
})
export class UserPopupComponent implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit() {}

  onClose() {
    this.userService.closeModal();
  }

  onSave() {
    this.onClose();
  }
}
