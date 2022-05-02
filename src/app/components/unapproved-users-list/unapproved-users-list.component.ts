import { Component, OnInit } from '@angular/core';
import { UserFullInfo } from 'src/app/models and interfaces/user-full-info.interface';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-unapproved-users-list',
  templateUrl: './unapproved-users-list.component.html',
  styleUrls: ['./unapproved-users-list.component.scss']
})
export class UnapprovedUsersListComponent implements OnInit {
  unapprovedUsers: UserFullInfo[] = [];

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.showAllUnaapprovedUsers();
  }

  showAllUnaapprovedUsers() {
    this.adminService.getUnaprovedUsers().subscribe((user) => {
      this.unapprovedUsers = user;
    });
  }

}
