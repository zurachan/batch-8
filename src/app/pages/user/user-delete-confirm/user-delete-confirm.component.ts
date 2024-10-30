import { UserService } from './../../../services/user.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-delete-confirm',
  templateUrl: './user-delete-confirm.component.html',
  styleUrls: ['./user-delete-confirm.component.css'],
})
export class UserDeleteConfirmComponent implements OnInit {
  @Input() id: any;
  constructor(private userService: UserService) {}

  ngOnInit() {}

  onClose() {
    this.userService.closeModal('Huỷ xoá');
  }

  onSave() {
    this.userService.delete(this.id).subscribe((res) => {
      if (res) this.userService.closeModal('Xoá thành công');
      else this.userService.closeModal('Xoá không thành công');
    });
  }
}
