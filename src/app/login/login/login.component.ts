import { Component, OnInit } from '@angular/core';
import { IUser } from '../../shared/_models/user.model';
import { AuthenticationService } from '../../shared/_services/authentication.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = new Object() as IUser
  constructor(private authenticationService: AuthenticationService) {
    this.user;
  }
  /**
   * @user
   */
  onSubmit(user:IUser) {
    this.authenticationService.login(user.username, user.password).subscribe(res => {
      console.log("result authentification : ", res)
    })

  }
  ngOnInit(): void {
  }

}
