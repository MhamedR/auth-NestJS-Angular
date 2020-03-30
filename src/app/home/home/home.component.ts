import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/shared/_services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) { }

  logout(){
    this.authenticationService.logout()
  }

  ngOnInit(): void {
  }

}
