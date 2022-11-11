import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.scss'],
})
export class LoginCardComponent implements OnInit {

  constructor() {
    this.title = '';
   }
   @Input() title: string;

  ngOnInit() {}

}
