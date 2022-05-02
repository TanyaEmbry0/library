import { Component, Input, OnInit } from '@angular/core';
import { UserFullInfo } from 'src/app/models and interfaces/user-full-info.interface';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-unapproved-user-card',
  templateUrl: './unapproved-user-card.component.html',
  styleUrls: ['./unapproved-user-card.component.scss']
})
export class UnapprovedUserCardComponent implements OnInit {
  @Input()user: UserFullInfo | undefined;

  id?: string ;

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.id = this.user?.id;
    console.log(this.id);

  }

  approveUser() {
    this.adminService.approveUser(this.id!).subscribe(() => {
      this.user!.isApproved = true;
      console.log(this.user);

    });
  }

  deleteUser() {
    this.adminService.deleteUser(this.id!).subscribe(() => {
      this.user!.isApproved = false;
    });
  }
}
