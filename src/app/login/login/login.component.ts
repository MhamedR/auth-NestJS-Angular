import { Component, OnInit } from '@angular/core';
import { IUser } from '../../shared/_models/user.model';
import { AuthenticationService } from '../../shared/_services/authentication.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = new Object() as IUser;
  constructor(private authenticationService: AuthenticationService, private router : Router) {
    this.user;
  }
  /**
   * @user
   */
  onSubmit(user:IUser) {
    this.authenticationService.login(user.username, user.password).subscribe(res => {
      if(res){
        this.router.navigate(['/home'])
      }
    })

  }
  ngOnInit(): void {
  }

}
