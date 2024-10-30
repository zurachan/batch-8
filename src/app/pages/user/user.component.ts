import {
  Component,
  ComponentRef,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { UserDeleteConfirmComponent } from './user-delete-confirm/user-delete-confirm.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent implements OnInit {
  @ViewChild('popup', { read: ViewContainerRef, static: true })
  componentRef!: ComponentRef<UserDeleteConfirmComponent>;
  constructor(
    private userService: UserService,
    private router: Router,
    private container: ViewContainerRef
  ) {}

  listUser: User[] = [];

  ngOnInit(): void {
    this.getAll();
    this.afterConfirmDelete();
  }

  getAll() {
    this.userService.getAll().subscribe((res) => {
      this.listUser = [...res];
    });
  }

  onAddUser() {
    this.router.navigateByUrl('user/create');
    // this.renderPopup();
  }
  onViewDetail(userId: number) {
    this.router.navigateByUrl('user/view/' + userId);
  }

  onEdit(userId: number) {
    this.router.navigateByUrl('user/edit/' + userId);
  }

  onDelete(userId: number) {
    this.renderConfirmDelete(userId);
  }

  renderConfirmDelete(userId: number) {
    this.container.clear();
    this.componentRef = this.container.createComponent(
      UserDeleteConfirmComponent
    );
    this.componentRef.setInput('id', userId);
    this.componentRef.changeDetectorRef.detectChanges();
  }

  afterConfirmDelete() {
    this.userService.closeModal$.subscribe((reason) => {
      this.container.clear();
      if (this.componentRef) this.componentRef.destroy();
      if (reason) this.getAll();
    });
  }

  //
  // renderPopup() {
  //   this.container.clear();
  //   this.componentRef = this.container.createComponent(UserPopupComponent);
  //   // this.componentRef.setInput('data', data);
  //   this.componentRef.changeDetectorRef.detectChanges();
  // }

  // afterClosePopup() {
  //   this.userService.closeModal$.subscribe((reason) => {
  //     this.container.clear();
  //     if (this.componentRef) this.componentRef.destroy();
  //     if (reason) this.getAll();
  //   });
  // }
}
