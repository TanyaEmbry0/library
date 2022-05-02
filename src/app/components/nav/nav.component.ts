import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private authServices: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }
  onLogout(){
    this.authServices.logout();
    this.router.navigate([''])
  }

}
