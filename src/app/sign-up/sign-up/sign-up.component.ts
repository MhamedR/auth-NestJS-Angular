import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, Form } from '@angular/forms';
import { IUser, IRole } from '../../shared/_models/user.model';
import { UsersService } from '../../shared/_services/users.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  @ViewChild("firstForm") firstForm: Form;
  @ViewChild("secondFormGroup") secondFormGroup: Form;


  isLinear = false;

  // user object
  user = new Object() as IUser;
  role = new Object() as IRole;

  constructor(private usersService: UsersService) {
    this.user;
    this.user.role = this.role
  }

  createUser(user: IUser) {
    this.usersService.createUser(user).subscribe(res => {
      console.log("result : ", res)

    })
  }

  ngOnInit() {

  }

}
