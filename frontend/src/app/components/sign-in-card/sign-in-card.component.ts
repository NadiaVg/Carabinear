import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in-card',
  templateUrl: './sign-in-card.component.html',
  styleUrls: ['./sign-in-card.component.scss'],
})
export class SignInCardComponent implements OnInit {

  constructor() { 
    this.title = ""
  }
  @Input() title: string;

  ngOnInit() {}

}
