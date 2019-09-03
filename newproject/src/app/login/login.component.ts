import { Component, OnInit,ViewChild,AfterViewInit } from '@angular/core';
import { PasswordComponent } from '../password/password.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,AfterViewInit {

  loginMessage = "message from login";
  userName = "platform3solutions";
    
  @ViewChild(PasswordComponent, {static : false}) password;

  constructor() {

  }

  message:string;
  ngAfterViewInit() {
    this.message = this.password.message;
  }
  ngOnInit() {
  }
}