import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../_services/authentication.service';
import { Router } from '@angular/router';
import { NavService } from '../../_services/nav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    public navService: NavService) { }

  logout() {
    this.authenticationService.logout();
    return this.router.navigateByUrl('/login');

  }

  ngOnInit(): void {
  }

}
