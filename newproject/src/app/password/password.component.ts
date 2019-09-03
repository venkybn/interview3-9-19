import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  @Input() passwordMessage:string; 


  message = "message from child";

  constructor() {
  }

  ngOnInit() {
  console.log(this.passwordMessage);
  this.start();
  }

  start() {
  console.log('hgdhdjfjfjfjfjfugugugjfjdh');
  }

  }

