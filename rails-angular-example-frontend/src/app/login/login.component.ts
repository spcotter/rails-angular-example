import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() email: String;
  @Input() password: String;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  click() {
    console.log('click!');
    console.log(this.email);
    console.log(this.password);
    this.userService.login(this.email, this.password);
  }
}
