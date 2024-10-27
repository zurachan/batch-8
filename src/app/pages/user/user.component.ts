import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}

  listUser: User[] = [];

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.userService.getAll().subscribe((res) => {
      this.listUser = [...res];
    });
  }

  onAddUser() {
    this.router.navigateByUrl('user/create');
  }
}
